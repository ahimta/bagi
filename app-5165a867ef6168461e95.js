webpackJsonp([0],{334:function(e,t){"use strict";t.ADD_TODO="ADD_TODO",t.DELETE_TODO="DELETE_TODO",t.EDIT_TODO="EDIT_TODO",t.COMPLETE_TODO="COMPLETE_TODO",t.COMPLETE_ALL="COMPLETE_ALL",t.CLEAR_COMPLETED="CLEAR_COMPLETED"},339:function(e,t,n){"use strict";function a(e,t,n,a,r){return void 0===r&&(r=0),new Date(e,t,n,a,r)}function r(e){var t=0;if(e.offsetParent){do t+=e.offsetTop;while(e=e.offsetParent);return t}}function i(e){var t=70,n=r(e);window.scrollTo(0,n-t)}function o(e,t){return t.slice().sort(function(e,t){var n=e.date,a=t.date;return n.getTime()-a.getTime()}).filter(function(t){var n=t.date;return n.getTime()>e.getTime()})}function l(e){return{todos:e.todos}}function s(e){return{actions:y.bindActionCreators({addTodo:E.addTodo,deleteTodo:E.deleteTodo,editTodo:E.editTodo,completeTodo:E.completeTodo,completeAll:E.completeAll,clearCompleted:E.clearCompleted},e)}}var c=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},u=this&&this.__decorate||function(e,t,n,a){var r,i=arguments.length,o=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(i<3?r(o):i>3?r(t,n,o):r(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=n(126),h=n(246),p=n(263),f=n(0),g=n(96),v=n(97),y=n(81),E=n(795),b=n(797),w=n(798),T=n(799),D=n(800),_=[{title:"بداية إجازة منتصف الفصل الأول",date:a(2016,10,11,0),type:"positive"},{title:"بداية الدراسة بعد إجازة منتصف الفصل الأول",date:a(2016,10,20,0),type:"negative"},{title:"بداية اختبارات الفصل الدراسي الأول",date:a(2017,0,15,0),type:"negative"},{title:"بداية إجازة منتصف العام",date:a(2017,0,27,0),type:"positive"},{title:"بداية الدراسة للفصل الدراسي الثاني",date:a(2017,1,5,0),type:"negative"},{title:"بداية إجازة منتصف الفصل الدراسي الثاني",date:a(2017,2,31,0),type:"positive"},{title:"بداية الدراسة بعد إجازة منتصف الفصل الدراسي الثاني",date:a(2017,3,9,0),type:"negative"},{title:"بداية اختبارات الفصل الدراسي الثاني",date:a(2017,5,4,0),type:"negative"},{title:"بداية إجازة نهاية العام",date:a(2017,5,16,0),type:"positive"},{title:"راتب شهر 5 (جمادة الأولى)",date:a(2017,1,24,0),type:"positive"},{title:"راتب شهر 6 (جمادة الآخرة)",date:a(2017,2,25,0),type:"positive"},{title:"راتب شهر 7 (رجب)",date:a(2017,3,25,0),type:"positive"},{title:"راتب شهر 8 (شعبان)",date:a(2017,4,26,0),type:"positive"},{title:"راتب شهر 9 (رمضان)",date:a(2017,5,26,0),type:"positive"},{title:"راتب شهر 10 (شوال)",date:a(2017,6,27,0),type:"positive"},{title:"راتب شهر 11 (ذو القعدة)",date:a(2017,7,27,0),type:"positive"},{title:"راتب شهر 12 (ذو الحجة)",date:a(2017,8,27,0),type:"positive"},{title:"فرض ضريبة المنتجات الضارة (المشروبات الغازية...)",date:a(2017,3,1,0),type:"positive"},{title:"زيادة أسعار منتجات الطاقة",date:a(2017,6,1,0),type:"negative"},{title:"فرض ضريبة القيمة المضافة",date:a(2018,0,1,0),type:"negative"},{title:"اعتماد تعرفة السلع الفاخرة",date:a(2018,0,1,0),type:"negative"},{title:"ربط جميع منتجات الطاقة بالأسعار المرجعية",date:a(2020,0,1,0),type:"negative"}],k=function(e){function t(t){var n=e.call(this,t)||this;return n.addEvent=function(){var e=n.state,t=e.currentDate,r=e.newDate,l=e.newTime,s=e.newTitle;if(s){var c=a(r.getFullYear(),r.getMonth(),r.getDate(),l.getHours(),l.getMinutes()),u={date:c,title:s,type:"custom"};m.getItem("myEvents").then(function(e){var a=e||[],r=a.concat(u),l=o(t,_.concat(r));m.setItem("myEvents",r),n.setState({events:l,showModal:!1},function(){var e=document.querySelector('[data-datetime="'+c.getTime()+'"]');e?setTimeout(function(){return i(e)},500):console.log("newEventElement not found!")})})}},n.openModal=function(){n.setState({newDate:new Date,newTime:new Date,newTitle:"",showModal:!0})},n.removeEvent=function(e){var t=n.state.currentDate;m.getItem("myEvents").then(function(a){var r=a||[],i=r.filter(function(t){var n=t.title;return n!==e}),l=o(t,_.concat(i));n.setState({events:l}),m.setItem("myEvents",i)})},n.mapDateFactory=function(e,t){return function(n){var a=n.date,r=n.title,i=n.type;return f.createElement(b.default,{currentDate:e,date:a,key:r,title:r,type:i,removeEvent:t})}},n.state={currentDate:new Date,events:[],showModal:!1,newDate:new Date,newTime:new Date,newTitle:""},n}return c(t,e),t.prototype.componentWillMount=function(){var e=this,t=this.state.currentDate;this.intervalId=setInterval(function(){return e.setState({currentDate:new Date})},1e3),m.getItem("myEvents").then(function(n){var a=n||[],r=o(t,_.concat(a));e.setState({events:r})})},t.prototype.componentWillUnmount=function(){clearInterval(this.intervalId)},t.prototype.render=function(){var e=this,t=this.state,n=t.currentDate,a=t.events,r=t.showModal,i=this.state,o=i.newDate,l=i.newTime,s=i.newTitle,c=a.map(this.mapDateFactory(n,this.removeEvent));return f.createElement("section",null,f.createElement(T.default,null),f.createElement("main",null,f.createElement(g.Grid,null,c,f.createElement(g.Button,{active:r,bsSize:"lg",bsStyle:"success",block:!0,onClick:this.openModal},"إضافة وقت")),f.createElement(g.Modal,{show:r,onHide:function(){return e.setState({showModal:!1})}},f.createElement(g.Modal.Header,{className:"text-center",closeButton:!0},f.createElement(g.Modal.Title,null,"إضافة وقت")),f.createElement(g.Modal.Body,null,f.createElement(g.FormGroup,{validationState:""===s?"error":"success"},f.createElement(g.InputGroup,null,f.createElement(g.FormControl,{dir:"rtl",placeholder:'مثلاً: "بداية الدراسة"',type:"text",value:s,onChange:function(t){return e.setState({newTitle:t.target.value})},required:!0}),f.createElement(g.InputGroup.Addon,null,"العنوان"))),f.createElement(h.default,{cancelLabel:"إلغاء",firstDayOfWeek:0,hintText:"التاريخ",minDate:new Date,okLabel:"تأكيد",textFieldStyle:{width:"100%"},value:o,onChange:function(t,n){return e.setState({newDate:n})},autoOk:!0}),f.createElement(p.default,{cancelLabel:"إلغاء",hintText:"الساعة و الدقيقة",textFieldStyle:{width:"100%"},okLabel:"تأكيد",value:l,onChange:function(t,n){return e.setState({newTime:n})},autoOk:!0})),f.createElement(g.Modal.Footer,null,f.createElement(g.Button,{bsStyle:"success",onClick:this.addEvent,block:!0},"إضافة الوقت")))),f.createElement("hr",null),f.createElement(D.default,null),f.createElement("hr",null),f.createElement(w.default,null))},t}(f.Component);k=u([v.connect(l,s),d("design:paramtypes",[Object])],k),t.__esModule=!0,t.default=k},340:function(e,t,n){"use strict";function a(e){var t=r.createStore(i.default,e);return t}var r=n(81),i=n(801);t.__esModule=!0,t.default=a},795:function(e,t,n){"use strict";function a(e){return{type:c.ADD_TODO,text:e}}function r(e){return{type:c.DELETE_TODO,id:e}}function i(e,t){return{type:c.EDIT_TODO,id:e,text:t}}function o(e){return{type:c.COMPLETE_TODO,id:e}}function l(){return{type:c.COMPLETE_ALL}}function s(){return{type:c.CLEAR_COMPLETED}}var c=n(334);t.addTodo=a,t.deleteTodo=r,t.editTodo=i,t.completeTodo=o,t.completeAll=l,t.clearCompleted=s},796:function(e,t){"use strict";t.assign=Object.assign?Object.assign:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]}},797:function(e,t,n){"use strict";function a(e){var t={and:"و",currency:"ريال","all-days":"جميع الأيام",weekdays:"أيام الأسبوع",weekends:"نهاية الأسبوع",custom:"مخصص",now:"اﻵن",remaining:"باقي",time:"الوقت",value:"القيمة",year:"سنوات",month:"شهور",week:"أسابيع",day:"أيام",hour:"ساعات",sat:"السبت",sun:"الأحد",mon:"الاثنين",tue:"الثلاثاء",wed:"الأربعاء",thu:"الخميس",fri:"الجمعة",am:"ص",pm:"م"};return t[e]}function r(e){switch(e){case"custom":return"primary";case"negative":return"danger";case"positive":return"success"}}function i(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(n),r=new Uint8Array(a.length),i=0;i<a.length;++i)r[i]=a.charCodeAt(i);return r}function o(e){var t=e.display,n=e.formattedDate,a=e.formattedRemaining,r=e.formattedValue;switch(t){case"remaining":return c.createElement("span",{dir:"rtl"},a);case"time":return c.createElement("span",{dir:"rtl"},n);case"value":return c.createElement("span",{dir:"rtl"},r);default:return c.createElement("span",{dir:"rtl"},a)}}var l=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},s=n(126),c=n(0),u=n(96),d=n(803),m="BBxrA4lbAkt1TiViiJAgeysBQ8Mg7G9URWLDnpe2rfSfFYV26RH7SUWKc0ouHkbw6lGu9dDM4nmiuG05JTbzVqs",h=function(e){function t(t){var n=e.call(this,t)||this;return n.handleChangeFactory=function(e){return function(t,a){return n.setState((r={},r[e]=t,r));var r}},n.handleTimeUnitChange=function(e,t){var a=n.props,r=a.currentDate,i=a.date;d.isValidTimeUnit(r,i,e)&&n.setState({timeUnit:e})},n.remindMe=function(e){navigator.serviceWorker.ready.then(function(e){e.pushManager.getSubscription().then(function(t){if(t){var n=t;console.log("User IS subscribed.",t),s.setItem("subscription",JSON.parse(JSON.stringify(t))).then(function(){s.getItem("subscription").then(function(e){console.log("Stored subscription",e),console.log("Stringified subscription",JSON.stringify(n))})}),window.unsubscribe=function(){return t.unsubscribe()}}else{var a=i(m);e.pushManager.subscribe({applicationServerKey:a,userVisibleOnly:!0}).then(function(e){console.log("User is subscribed:",e),s.setItem("subscription",JSON.parse(JSON.stringify(e)))}).catch(function(e){console.log("Failed to subscribe the user: ",e)}),console.log("User is NOT subscribed.")}})})},n.state={daysSelection:"all-days",display:"remaining",from:"now",timeUnit:d.getLargestTimeUnit(t.currentDate,t.date)},n}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.currentDate,n=e.date,i=e.title,l=e.type,s=e.removeEvent,m=this.state,h=m.display,p=m.daysSelection,f=m.timeUnit,g=d.formatDate(n,a),v=d.formatRemaining(t,n,f,p,a("and")),y=d.formatValue(t,n,p,a("currency")),E=d.isZeroWeekends(t,n),b=d.isZeroWeekdays(t,n),w=c.createElement(u.ButtonGroup,null,c.createElement(u.DropdownButton,{dir:"rtl",id:"display-dropdown",title:a(h),pullRight:!0},c.createElement(u.MenuItem,{active:"remaining"===h,className:"text-right",eventKey:"remaining",onSelect:this.handleChangeFactory("display")},a("remaining")),c.createElement(u.MenuItem,{active:"time"===h,className:"text-right",eventKey:"time",onSelect:this.handleChangeFactory("display")},a("time")),c.createElement(u.MenuItem,{active:"value"===h,className:"text-right",eventKey:"value",onSelect:this.handleChangeFactory("display")},a("value"))),c.createElement(u.Button,{className:"hidden",onClick:this.remindMe},"ذكرني"),c.createElement(u.DropdownButton,{disabled:"time"===h,dir:"rtl",id:"daysSelection-dropdown",title:a(p),pullRight:!0},c.createElement(u.MenuItem,{active:"all-days"===p,className:"text-right",eventKey:"all-days",onSelect:this.handleChangeFactory("daysSelection")},a("all-days")),c.createElement(u.MenuItem,{active:"weekdays"===p,className:"text-right",disabled:b,eventKey:"weekdays",onSelect:this.handleChangeFactory("daysSelection")},a("weekdays")),c.createElement(u.MenuItem,{active:"weekends"===p,className:"text-right",disabled:E,eventKey:"weekends",onSelect:this.handleChangeFactory("daysSelection")},a("weekends"))),c.createElement(u.DropdownButton,{disabled:"remaining"!==h,dir:"rtl",id:"timeUnit-dropdown",title:a(f),pullRight:!0},c.createElement(u.MenuItem,{active:"year"===f,className:"text-right",disabled:!d.isValidTimeUnit(t,n,"year"),eventKey:"year",onSelect:this.handleTimeUnitChange},a("year")),c.createElement(u.MenuItem,{active:"month"===f,className:"text-right",disabled:!d.isValidTimeUnit(t,n,"month"),eventKey:"month",onSelect:this.handleTimeUnitChange},a("month")),c.createElement(u.MenuItem,{active:"week"===f,className:"text-right",disabled:!d.isValidTimeUnit(t,n,"week"),eventKey:"week",onSelect:this.handleTimeUnitChange},a("week")),c.createElement(u.MenuItem,{active:"day"===f,className:"text-right",disabled:!d.isValidTimeUnit(t,n,"day"),eventKey:"day",onSelect:this.handleTimeUnitChange},a("day")),c.createElement(u.MenuItem,{active:"hour"===f,className:"text-right",disabled:!d.isValidTimeUnit(t,n,"hour"),eventKey:"hour",onSelect:this.handleTimeUnitChange},a("hour")))),T=c.createElement("span",{className:"pull-left",style:{cursor:"pointer"},onClick:function(){return s(i)}},"×"),D="custom"===l?c.createElement("h2",{dir:"rtl"},T,i):c.createElement("h2",{dir:"rtl"},i);return c.createElement("article",{"data-datetime":n.getTime()},c.createElement(u.Panel,{bsStyle:r(l),className:"text-center",footer:w,header:D},c.createElement(o,{display:h,formattedDate:g,formattedRemaining:v,formattedValue:y})))},t}(c.Component);t.__esModule=!0,t.default=h},798:function(e,t,n){"use strict";var a=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return r.createElement("footer",null,r.createElement("p",{className:"text-center",dir:"rtl"},"بعض الأيقونات المستخدمة من تصميم ",r.createElement("a",{href:"http://www.flaticon.com/authors/roundicons",target:"_blank",rel:"noopener"},"Roundicons"),"  تحت رخصة ",r.createElement("a",{href:"CC 3.0 BY",target:"_blank",rel:"noopener"},"CC 3.0 BY")),r.createElement("p",{className:"text-center",dir:"rtl"},r.createElement("a",{href:"https://sa.linkedin.com/in/ahimta",target:"_blank"},"© 2017 عبدالله الأنصاري")))},t}(r.Component);t.__esModule=!0,t.default=i},799:function(e,t,n){"use strict";function a(e){var t=e.active,n=e.disabled,a=e.href,r=e.title,i=o("text-right",{active:t});return l.createElement(s.MenuItem,{className:i,disabled:n,href:a,key:a,target:"_blank"},r)}function r(e){var t=e.href,n=e.title;return l.createElement(s.MenuItem,{className:"text-left",href:t,key:t,target:"_blank"},n)}var i=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=n(9),l=n(0),s=n(96),c=[{active:!1,disabled:!1,href:"https://ahimta.github.io/fuel-consumption-calculator/",title:"أسعار البنزين و المياه و الكهرباء"},{active:!1,disabled:!0,href:"http://ahimta.github.io/saudi-radios",title:"الإذاعات السعودية"},{active:!1,disabled:!1,href:"https://donation-web-pla-1479993243743.firebaseapp.com/",title:"منصة التبرعات"},{active:!0,disabled:!1,href:"https://ahimta.github.io/bagi/",title:"باقي"}],u=[{href:"http://ctw.getforge.io/",title:"Clinton, Trump, what's up"},{href:"https://blood-donation-system0.herokuapp.com/",title:"Blood Donation System"}],d={link:"https://twitter.com/intent/tweet?via=ahymta&url=https%3A//ahimta.github.io/bagi/",title:"راسلنا"},m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return l.createElement("header",null,l.createElement("div",{style:{marginBottom:"5em"}},l.createElement(s.Navbar,{collapseOnSelect:!0,fixedTop:!0,inverse:!0},l.createElement(s.Navbar.Header,null,l.createElement(s.Navbar.Brand,null),l.createElement(s.Navbar.Toggle,null)),l.createElement(s.Navbar.Collapse,null,l.createElement(s.Nav,{pullRight:!0,className:"text-right"},l.createElement(s.MenuItem,{className:"text-right",href:d.link,target:"_blank"},d.title),l.createElement(s.NavDropdown,{title:"مواقع أخرى",dir:"rtl",id:"other-websites"},c.map(a),l.createElement(s.MenuItem,{divider:!0}),u.map(r)))))))},t}(l.Component);t.__esModule=!0,t.default=m},800:function(e,t,n){"use strict";function a(){var e=encodeURIComponent("باقي"),t=encodeURIComponent("https://ahimta.github.io/bagi/"),n="https://facebook.com/sharer/sharer.php?u="+t,a="https://twitter.com/intent/tweet/?text="+e+"&url="+t,i="mailto:?subject="+e+"&body="+t,o="whatsapp://send?text="+e+"%20"+t,l="https://telegram.me/share/url?text="+e+"&url="+t;return r.createElement("aside",{className:"text-center"},r.createElement("a",{className:"resp-sharing-button__link",href:n,target:"_blank","aria-label":""},r.createElement("div",{className:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"},r.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.createElement("svg",{viewBox:"0 0 24 24"},r.createElement("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}))))),r.createElement("a",{className:"resp-sharing-button__link",href:a,target:"_blank","aria-label":""},r.createElement("div",{className:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"},r.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.createElement("svg",{viewBox:"0 0 24 24"},r.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))))),r.createElement("a",{className:"resp-sharing-button__link",href:i,target:"_blank","aria-label":""},r.createElement("div",{className:"resp-sharing-button resp-sharing-button--email resp-sharing-button--small"},r.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.createElement("svg",{viewBox:"0 0 24 24"},r.createElement("path",{d:"M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"}))))),r.createElement("a",{className:"resp-sharing-button__link",href:o,target:"_blank","aria-label":""},r.createElement("div",{className:"resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"},r.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.createElement("svg",{viewBox:"0 0 24 24"},r.createElement("path",{d:"M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"}))))),r.createElement("a",{className:"resp-sharing-button__link",href:l,target:"_blank","aria-label":""},r.createElement("div",{className:"resp-sharing-button resp-sharing-button--telegram resp-sharing-button--small"},r.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.createElement("svg",{viewBox:"0 0 24 24"},r.createElement("path",{d:"M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"}))))))}var r=n(0);t.__esModule=!0,t.default=a},801:function(e,t,n){"use strict";var a=n(81),r=n(802),i=a.combineReducers({todos:r.default});t.__esModule=!0,t.default=i},802:function(e,t,n){"use strict";function a(e,t){switch(void 0===e&&(e=o),t.type){case r.ADD_TODO:return[{id:e.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,completed:!1,text:t.text}].concat(e);case r.DELETE_TODO:return e.filter(function(e){return e.id!==t.id});case r.EDIT_TODO:return e.map(function(e){return e.id===t.id?i.assign({},e,{text:t.text}):e});case r.COMPLETE_TODO:return e.map(function(e){return e.id===t.id?i.assign({},e,{completed:!e.completed}):e});case r.COMPLETE_ALL:var n=e.every(function(e){return e.completed});return e.map(function(e){return i.assign({},e,{completed:!n})});case r.CLEAR_COMPLETED:return e.filter(function(e){return e.completed===!1});default:return e}}var r=n(334),i=n(796),o=[{text:"Use Redux",completed:!1,id:0}];t.__esModule=!0,t.default=a},803:function(e,t){"use strict";function n(e,t){var n=e.getFullYear(),a=e.getMonth()+1,r=e.getDate(),i=u(e.getDay()),o=e.getHours(),l=e.getMinutes(),s=c(o),d=h(o),m=t(i)+" "+k(r)+"-"+k(a)+"-"+n+" م",p=k(s)+":"+k(l)+" "+t(d),f=m+"، "+p;return f}function a(e,t,n,a,r){var i=E(e,t,n,a),o=[["year",i.year],["month",i.month],["week",i.week],["day",i.day],["hour",i.hour],["minute",i.minute],["second",i.second]],l=o.filter(function(e){var t=e[1];return 0!==t}).map(function(e){var t=e[0],n=e[1];return g(t,n)}).join(" "+r+" ");return l}function r(e,t,n,a){var r=f(e,t,n),i=(r/1e3*.01).toFixed(2),o=i+" "+a;return o}function i(e,t){var n=t.getTime()-e.getTime();return n>=M.year?"year":n>=M.month?"month":n>=M.week?"week":n>=M.day?"day":"hour"}function o(e,t,n){var a=t.getTime()-e.getTime();return a>=M[n]}function l(e,t){var n=T(e,t);return 0===n}function s(e,t){var n=w(e,t);return 0===n}function c(e){return 0===e?12:e>12?e-12:e}function u(e){var t=["sun","mon","tue","wed","thu","fri","sat"];return t[e]}function d(e){if(D(e.getDay()))return e;var t=5===e.getDay()?2:1,n=new Date(e.getTime());return n.setDate(e.getDate()+t),n.setHours(0,0,0,0),n}function m(e){if(_(e.getDay()))return e;var t=5-e.getDay(),n=new Date(e.getTime());return n.setDate(e.getDate()+t),n.setHours(0,0,0,0),n}function h(e){return e<12?"am":"pm"}function p(e){if(e<100)return e;var t=e%10,n=Math.floor(e/10)%10;return t+10*n}function f(e,t,n){switch(n){case"all-days":return t.getTime()-e.getTime();case"weekdays":return w(e,t);case"weekends":return T(e,t)}}function g(e,t){var n={year:{one:"سنة",two:"سنتين",plural:"سنوات"},month:{one:"شهر",two:"شهرين",plural:"شهور"},week:{one:"أسبوع",two:"أسبوعين",plural:"أسابيع"},day:{one:"يوم",two:"يومين",plural:"أيام"},hour:{one:"ساعة",two:"ساعتين",plural:"ساعات"},minute:{one:"دقيقة",two:"دقيقتين",plural:"دقائق"},second:{one:"ثانية",two:"ثانيتين",plural:"ثواني"}},a=v(t);return 1===t?n[e].one:"two"===a?2===t?n[e].two:t+" "+n[e].one:t+" "+n[e][a]}function v(e){var t=p(e);return 1===t?"one":2===t?"two":t<=10?"plural":"one"}function y(e){var t={second:0,minute:1,hour:2,day:3,week:4,month:5,year:6};return t[e]}function E(e,t,n,a){var r=f(e,t,a),i={year:0,month:0,week:0,day:0,hour:0,minute:0,second:0};if(r>0){var o=["year","month","week","day","hour","minute","second"],l={},s=0;return o.forEach(function(e){var t=M[e],a=b(e,n,parseInt((r-s)/t+""));l[e]=a,s+=t*a}),l}return i}function b(e,t,n){return y(e)>y(t)?0:n}function w(e,t){var n=t.getTime()-e.getTime();if(n<=0)return 0;var a=Math.floor(n/M.week),r=a*(5*M.day),i=n-a*M.week,o=new Date(e.getTime()+a*M.week);if(D(o.getDay())&&D(e.getDay())&&t.getDay()>e.getDay())return r+i;var l=m(o),s=new Date(Math.min(d(l).getTime(),t.getTime())),c=s.getTime()-l.getTime();return r+i-c}function T(e,t){var n=t.getTime()-e.getTime(),a=w(e,t);return n-a}function D(e){return e<5}function _(e){return!D(e)}function k(e){return e<10?"0"+e:""+e}var M={year:31104e6,month:2592e6,week:6048e5,day:864e5,hour:36e5,minute:6e4,second:1e3};t.formatDate=n,t.formatRemaining=a,t.formatValue=r,t.getLargestTimeUnit=i,t.isValidTimeUnit=o,t.isZeroWeekends=l,t.isZeroWeekdays=s},807:function(e,t,n){"use strict";var a=n(197),r=n(0),i=n(13),o=n(97),l=n(127),s=n(339),c=n(340),u=c.default({});l(),i.render(r.createElement(a.default,null,r.createElement(o.Provider,{store:u},r.createElement(s.default,null))),document.getElementById("root"))}},[807]);