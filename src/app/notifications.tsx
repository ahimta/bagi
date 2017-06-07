import axios from 'axios'
import { Promise } from 'es6-promise'

import IBagiEvent from './types/IBagiEvent'
import TimeUnit from './types/TimeUnit'
import * as storage from './storage'

const applicationServerKey = urlB64ToUint8Array(
  'BBxrA4lbAkt1TiViiJAgeysBQ8Mg7G9URWLDnpe2rfSfFYV26RH7SUWKc0ouHkbw6lGu9dDM4nmiuG05JTbzVqs'
)

export function scheduleNotification({date, title, type}: IBagiEvent, timeUnit: TimeUnit, timeValue: number) {
  return getSubscription().then(subscription => {
    return axios.post('https://bagi-backend.herokuapp.com/api/v1/remind-me', {
      subscription,
      before: { timeUnit, timeValue },
      event: { date: date.getTime(), title, type }
    }).then(res => {
      return storage.addReminder({ date, title, type })
    })
  })
}

function getSubscription(): Promise<any> {
  return (navigator as any).serviceWorker.ready.then((reg) => {
    return Promise.all([reg, reg.pushManager.getSubscription()])
  }).then(([reg, subscription]) => {
    return (subscription || reg.pushManager.subscribe({ applicationServerKey, userVisibleOnly: true }))
  }).then(subscription => {
    return subscription.toJSON()
  })
}

function urlB64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}