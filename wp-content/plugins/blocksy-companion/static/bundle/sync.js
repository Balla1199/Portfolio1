!function(){"use strict";var e={n:function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,{a:o}),o},d:function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.ctEvents,o=e.n(t),r=window.blocksyCustomizerSync;function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){u(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o().on("ct:header:sync:collect-variable-descriptors",(function(e){e.account=function(e){var t=e.itemId;return n(n(n(n(n({accountHeaderIconSize:{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"el-suffix",to_add:'[data-state="out"]'})),variable:"theme-icon-size",responsive:!0,unit:"px"},account_loggedin_icon_size:{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"el-suffix",to_add:'[data-state="in"]'})),variable:"theme-icon-size",responsive:!0,unit:"px"},accountHeaderAvatarSize:{selector:(0,r.assembleSelector)((0,r.getRootSelectorFor)({itemId:t})),variable:"avatar-size",responsive:!0,unit:"px"}},(0,r.handleBackgroundOptionFor)({id:"accountHeaderFormBackground",selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:[(0,r.getRootSelectorFor)({itemId:t})[0]],operation:"suffix",to_add:"#account-modal .ct-account-modal"}))})),(0,r.handleBackgroundOptionFor)({id:"accountHeaderBackground",selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:[(0,r.getRootSelectorFor)({itemId:t})[0]],operation:"suffix",to_add:"#account-modal"}))})),{},{account_form_shadow:{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:[(0,r.getRootSelectorFor)({itemId:t})[0]],operation:"suffix",to_add:"#account-modal .ct-account-modal"})),type:"box-shadow",variable:"theme-box-shadow"},account_modal_font_color:[{selector:"#account-modal .ct-account-modal",variable:"theme-text-color",type:"color:default"},{selector:"#account-modal .ct-account-modal",variable:"theme-link-hover-color",type:"color:hover"}],account_modal_form_text_color:[{selector:"#account-modal form",variable:"theme-form-text-initial-color",type:"color:default"},{selector:"#account-modal form",variable:"theme-form-text-focus-color",type:"color:focus"}],account_modal_form_border_color:[{selector:"#account-modal form",variable:"theme-form-field-border-initial-color",type:"color:default"},{selector:"#account-modal form",variable:"theme-form-field-border-focus-color",type:"color:focus"}],account_modal_form_background_color:[{selector:"#account-modal form",variable:"theme-form-field-background-initial-color",type:"color:default"},{selector:"#account-modal form",variable:"theme-form-field-background-focus-color",type:"color:focus"}],account_close_button_color:[{selector:"#account-modal .ct-toggle-close",variable:"theme-icon-color",type:"color:default"},{selector:"#account-modal .ct-toggle-close:hover",variable:"theme-icon-color",type:"color:hover"}],account_close_button_border_color:[{selector:'#account-modal .ct-toggle-close[data-type="type-2"]',variable:"toggle-button-border-color",type:"color:default"},{selector:'#account-modal .ct-toggle-close[data-type="type-2"]:hover',variable:"toggle-button-border-color",type:"color:hover"}],account_close_button_shape_color:[{selector:'#account-modal .ct-toggle-close[data-type="type-3"]',variable:"toggle-button-background",type:"color:default"},{selector:'#account-modal .ct-toggle-close[data-type="type-3"]:hover',variable:"toggle-button-background",type:"color:hover"}],accountHeaderMargin:{selector:(0,r.assembleSelector)((0,r.getRootSelectorFor)({itemId:t})),type:"spacing",variable:"margin",responsive:!0,important:!0}},(0,r.typographyOption)({id:"account_label_font",selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-label"}))})),{},{accountHeaderColor:[{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"})),variable:"theme-link-initial-color",type:"color:default",responsive:!0},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"})),variable:"theme-link-hover-color",type:"color:hover",responsive:!0}],header_account_icon_color:[{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"})),variable:"theme-icon-color",type:"color:default",responsive:!0},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"})),variable:"theme-icon-hover-color",type:"color:hover",responsive:!0}],transparentAccountHeaderColor:[{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"}),operation:"between",to_add:'[data-transparent-row="yes"]'})),variable:"theme-link-initial-color",type:"color:default",responsive:!0},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"}),operation:"between",to_add:'[data-transparent-row="yes"]'})),variable:"theme-link-hover-color",type:"color:hover",responsive:!0}],transparent_header_account_icon_color:[{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"}),operation:"between",to_add:'[data-transparent-row="yes"]'})),variable:"theme-icon-color",type:"color:default",responsive:!0},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"}),operation:"between",to_add:'[data-transparent-row="yes"]'})),variable:"theme-icon-hover-color",type:"color:hover",responsive:!0}],stickyAccountHeaderColor:[{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"}),operation:"between",to_add:'[data-sticky*="yes"]'})),variable:"theme-link-initial-color",type:"color:default",responsive:!0},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"}),operation:"between",to_add:'[data-sticky*="yes"]'})),variable:"theme-link-hover-color",type:"color:hover",responsive:!0}],sticky_header_account_icon_color:[{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"}),operation:"between",to_add:'[data-sticky*="yes"]'})),variable:"theme-icon-color",type:"color:default",responsive:!0},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-account-item"}),operation:"between",to_add:'[data-sticky*="yes"]'})),variable:"theme-icon-hover-color",type:"color:hover",responsive:!0}]},(0,r.typographyOption)({id:"header_account_dropdown_font",selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"}))})),{},{header_account_dropdown_font_color:[{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"})),variable:"theme-text-color",type:"color:default"},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"})),variable:"theme-link-initial-color",type:"color:link_initial"},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"})),variable:"theme-link-hover-color",type:"color:link_hover"},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"})),variable:"theme-link-active-color",type:"color:link_active"}],header_account_dropdown_color:[{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"})),variable:"dropdown-background-color",type:"color:default"},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"})),variable:"dropdown-items-background-hover-color",type:"color:hover"},{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"})),variable:"dropdown-items-background-active-color",type:"color:active"}],header_account_dropdown_divider:{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"})),variable:"theme-border",type:"border"},header_account_dropdown_shadow:{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"})),type:"box-shadow",variable:"theme-box-shadow",responsive:!0},header_account_dropdown_radius:{selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)({itemId:t}),operation:"suffix",to_add:".ct-header-account-dropdown"})),type:"spacing",variable:"theme-border-radius",responsive:!0}})}})),o().on("ct:header:sync:item:account",(function(e){var t=e.optionId,o=e.optionValue,c='[data-id="account"]';if("dropdown_items"===t){var l=document.querySelector(c);(0,r.updateAndSaveEl)(c,(function(e){if(e.querySelector(".ct-header-account-dropdown")){var t=e.querySelectorAll('.ct-header-account-dropdown > *:not([id*="menu-item-"])');o.filter((function(e){var t=e.enabled,o=e.id;return!!t&&"menu"!==o})).map((function(e,o){if(l){var r=t[o];if(r){var a=r.querySelector("a");if("user_info"===e.id){var c=r.querySelector("small");if(c){var n=c.dataset,i=n.email,s=n.name,d=n.role;c.innerText=e.account_user_info_additional_fields.replace("{user_email}",i).replace("{user_name}",s).replace("{user_role}",d)}}"user_info"!==e.id&&a&&e.label&&(a.innerHTML=e.label)}}}))}}))}if("header_account_visibility"===t&&(0,r.updateAndSaveEl)(c,(function(e){return(0,r.responsiveClassesFor)(n(n({},o),{},{desktop:!0}),e)})),"loggedin_account_label_visibility"!==t&&"loggedout_account_label_visibility"!==t||(0,r.updateAndSaveEl)(c,(function(e){a(e.querySelectorAll(".ct-label")).map((function(e){(0,r.responsiveClassesFor)(o,e)}))})),"loggedin_label"===t&&((0,r.updateAndSaveEl)(c,(function(e){a(e.querySelectorAll(".ct-label")).map((function(e){e.innerHTML=o}))})),(0,r.updateAndSaveEl)(c,(function(e){o.desktop||(o={desktop:o,mobile:o}),a(e.querySelectorAll(".ct-label")).map((function(e){e.innerHTML=o.desktop}))}),{onlyView:"desktop"}),(0,r.updateAndSaveEl)(c,(function(e){o.desktop||(o={desktop:o,mobile:o}),a(e.querySelectorAll(".ct-label")).map((function(e){e.innerHTML=o.mobile}))}),{onlyView:"mobile"})),"login_label"===t&&(0,r.updateAndSaveEl)(c,(function(e){a(e.querySelectorAll(".ct-label")).map((function(e){e.innerHTML=o}))})),"loggedout_label_position"!==t&&"loggedin_label_position"!==t||((0,r.updateAndSaveEl)(".ct-account-item",(function(e){o.desktop||(o={desktop:o,mobile:o}),e.dataset.label=o.desktop}),{onlyView:"desktop"}),(0,r.updateAndSaveEl)(".ct-account-item",(function(e){o.desktop||(o={desktop:o,mobile:o}),e.dataset.label=o.mobile}),{onlyView:"mobile"})),"account_close_button_type"===t){var i=document.querySelector("#account-modal .ct-toggle-close");setTimeout((function(){i.classList.add("ct-disable-transitions"),requestAnimationFrame((function(){i&&(i.dataset.type=o),setTimeout((function(){i.classList.remove("ct-disable-transitions")}))}))}),300)}if("dropdown_items_type"===t){var s=document.querySelector(c);if(s){var d=s.querySelector("ul[data-dropdown]");d&&(d.dataset.dropdown="boxed"===o?"type-1:boxed":"type-1")}}})),o().on("ct:header:sync:collect-variable-descriptors",(function(e){e.global=function(){return d(d(d({transparent_behaviour:{selector:(0,r.assembleSelector)((0,r.getRootSelectorFor)()),variable:"has-transparent-header",responsive:!0,extractValue:function(e){return{desktop:e.desktop?"var(--true)":"var(--false)",tablet:e.mobile?"var(--true)":"var(--false)",mobile:e.mobile?"var(--true)":"var(--false)"}},unit:""}},(0,r.handleBackgroundOptionFor)({id:"headerBackground",selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)(),operation:"suffix",to_add:".ct-header"})),responsive:!0,forced_background_image:!0})),(0,r.handleBackgroundOptionFor)({id:"transparentHeaderBackground",selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)(),operation:"suffix",to_add:"[data-transparent]"})),responsive:!0,forced_background_image:!0})),(0,r.handleBackgroundOptionFor)({id:"stickyHeaderBackground",selector:(0,r.assembleSelector)((0,r.mutateSelector)({selector:(0,r.getRootSelectorFor)(),operation:"suffix",to_add:'[data-sticky*="yes"]'})),responsive:!0,forced_background_image:!0}))}})),o().on("ct:header:sync:item:global",(function(e){var t=e.optionId,r=e.optionValue,a=e.values;if("has_sticky_header"===t||"sticky_rows"===t||"sticky_behaviour"===t){var c=a.has_sticky_header,l=a.sticky_rows,n=a.sticky_behaviour;Array.from(document.querySelectorAll("[data-sticky]")).map((function(e){e.removeAttribute("data-sticky")})),"yes"===c&&Array.from(document.querySelectorAll("[data-row]")).map((function(e){var t=e.dataset.row;if(l[t]){var o=[];n.desktop&&o.push("desktop"),n.mobile&&o.push("mobile"),e.dataset.sticky=o.join(":")}})),o().trigger("blocksy:frontend:init")}if("transparent_behaviour"===t){if(!document.querySelector("[data-transparent]"))return;Array.from(document.querySelectorAll("[data-device]")).map((function(e){e.removeAttribute("data-transparent"),Array.from(e.querySelectorAll("[data-row]")).map((function(e){return e.removeAttribute("data-transparent-row")})),r[e.dataset.device]&&(e.dataset.transparent="",Array.from(e.querySelectorAll("[data-row]")).map((function(e){return e.dataset.transparentRow="yes"}))),o().trigger("blocksy:frontend:init")}))}}))}();