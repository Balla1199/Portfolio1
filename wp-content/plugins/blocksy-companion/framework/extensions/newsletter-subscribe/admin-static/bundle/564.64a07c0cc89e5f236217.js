"use strict";(globalThis.blocksyNewsletterSubscribeExtJsonp=globalThis.blocksyNewsletterSubscribeExtJsonp||[]).push([[564],{564:function(e,t,n){n.r(t);var r=n(381),a=n(343),o=n(652),i=n(184),c=n.n(i);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=null;t.default=function(e){var t=e.value,n=e.onChange,i=l((0,r.useState)(f||[]),2),d=i[0],p=i[1],m=l((0,r.useState)(!f),2),b=m[0],v=m[1],h=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(!(a.length>0&&void 0!==a[0])||a[0])&&v(!0),(t=new FormData).append("action","blocksy_ext_newsletter_subscribe_get_actual_lists"),t.append("nonce",(window.ctDashboardLocalizations||window.ct_localizations||window.ct_customizer_localizations).dashboard_actions_nonce),e.prev=5,e.next=8,fetch(ajaxurl,{method:"POST",body:t});case 8:if(200!==(n=e.sent).status){e.next=19;break}return e.next=12,n.json();case 12:if(!(r=e.sent).success){e.next=19;break}if("api_key_invalid"===r.data.result){e.next=19;break}return v(!1),p(r.data.result),f=r.data.result,e.abrupt("return");case 19:e.next=23;break;case 21:e.prev=21,e.t0=e.catch(5);case 23:v(!1);case 24:case"end":return e.stop()}}),e,null,[[5,21]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){s(o,r,a,i,c,"next",e)}function c(e){s(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,r.useEffect)((function(){h(!f)}),[]),0===d.length?(0,r.createElement)("div",{className:"ct-select-input"},(0,r.createElement)("input",{disabled:!0,placeholder:b?(0,o.__)("Loading...","blocksy-companion"):(0,o.__)("Invalid API Key...","blocksy-companion")})):(0,r.createElement)(a.ZP,{selectedItem:t||d[0].id,onChange:function(e){return n(e)},itemToString:function(e){return e?(d.find((function(t){return t.id===e}))||{}).name:""}},(function(e){var t=e.getInputProps,n=e.getItemProps,a=(e.getLabelProps,e.getMenuProps),i=e.isOpen,s=(e.inputValue,e.highlightedIndex),l=e.selectedItem,f=e.openMenu;return(0,r.createElement)("div",{className:"ct-select-input"},(0,r.createElement)("input",u({},t({onFocus:function(){return f()},onClick:function(){return f()}}),{placeholder:(0,o.__)("Select list...","blocksy-companion"),readOnly:!0})),i&&(0,r.createElement)("div",a({className:"ct-select-dropdown"}),d.map((function(e,t){return(0,r.createElement)("div",n({key:e.id,index:t,item:e.id,className:c()("ct-select-dropdown-item",{active:s===t,selected:l===e.id})}),e.name)}))))}))}}}]);