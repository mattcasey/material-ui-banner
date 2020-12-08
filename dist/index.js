!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("@material-ui/core"),require("@material-ui/core/ButtonBase"),require("clsx"),require("@material-ui/core/styles/makeStyles")):"function"==typeof define&&define.amd?define(["react","@material-ui/core","@material-ui/core/ButtonBase","clsx","@material-ui/core/styles/makeStyles"],t):"object"==typeof exports?exports.MaterialUiBanner=t(require("react"),require("@material-ui/core"),require("@material-ui/core/ButtonBase"),require("clsx"),require("@material-ui/core/styles/makeStyles")):e.MaterialUiBanner=t(e.React,e["@material-ui/core"],e["@material-ui/core/ButtonBase"],e.clsx,e["@material-ui/core/styles/makeStyles"])}(window,(function(e,t,n,o,r){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(6)()},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t,n){"use strict";var o=n(7);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t),n.d(t,"StaticBanner",(function(){return _})),n.d(t,"Banner",(function(){return D}));var o=n(0),r=n.n(o),a=n(3),i=n.n(a),c=n(2),s=n.n(c),u=n(4),p=n.n(u),l=n(1),f=n(5);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var m=n.n(f)()((function(e){return{root:{display:"block",width:"100%",marginLeft:"auto",marginRight:"auto"},cardContent:{paddingBottom:e.spacing(1),paddingRight:e.spacing(1)},cardContentIconAppBar:(t={paddingLeft:e.spacing(2),paddingTop:e.spacing(2)},n=e.breakpoints.down("sm"),o={paddingTop:e.spacing(3)},n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t),cardContentIconNoAppBar:{paddingLeft:e.spacing(2),paddingTop:e.spacing(3)},cardContentNoIconAppBar:{paddingLeft:e.spacing(3),paddingTop:e.spacing(1)},cardContentNoIconNoAppBar:{paddingLeft:e.spacing(2),paddingTop:e.spacing(3)},avatar:{backgroundColor:e.palette.primary.main,height:e.spacing(5),width:e.spacing(5)},flex:{flexGrow:1},buttons:{whiteSpace:"nowrap",alignSelf:"flex-end",paddingLeft:"90px !important"},label:{alignSelf:"center"}};var t,n,o}),{name:"MuiBanner"}),b=r.a.forwardRef((function(e,t){var n=e.open,a=e.label,i=e.icon,c=e.iconProps,s=e.appBar,u=e.showDismissButton,f=e.dismissButtonLabel,b=e.dismissButtonProps,y=e.buttonOnClick,g=e.buttonLabel,v=e.buttonComponent,O=e.buttonProps,h=e.paperProps,P=e.cardProps,B=e.onClose,w=m(),C=Boolean(u||g),j=Object(o.useMemo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:w.flex}),r.a.createElement(l.Grid,{item:!0,className:w.buttons},u&&r.a.createElement(l.Button,d({variant:"text",onClick:B},b),f),!!g&&r.a.createElement(l.Button,d({variant:"text",onClick:y,component:v},O),g)))}),[u,B,b,f,y,g,v,O]),x={};return s&&(x={component:l.Container,maxWidth:"lg"}),r.a.createElement(l.Collapse,{in:n,ref:t},r.a.createElement(l.Paper,d({elevation:0,className:w.root},h),r.a.createElement(l.Card,d({elevation:0},x,P),r.a.createElement(l.CardContent,{className:p()(w.cardContent,i&&s&&w.cardContentIconAppBar,i&&!s&&w.cardContentIconNoAppBar,!i&&s&&w.cardContentNoIconAppBar,!i&&!s&&w.cardContentNoIconNoAppBar)},r.a.createElement(l.Grid,{container:!0,wrap:"nowrap",spacing:s?3:2,direction:"row",justifyContent:"flex-start",alignItems:"flex-start"},i&&r.a.createElement(l.Grid,{item:!0},r.a.createElement(l.Avatar,d({className:w.avatar},c),i)),r.a.createElement(l.Grid,{item:!0,className:w.label},r.a.createElement(l.Typography,{variant:"body2"},a)),r.a.createElement(l.Hidden,{smDown:!0},s&&C&&j))),!s&&C&&r.a.createElement(l.Hidden,{smDown:!0},r.a.createElement(l.CardActions,null,j)),C&&r.a.createElement(l.Hidden,{mdUp:!0},r.a.createElement(l.CardActions,null,j)),r.a.createElement(l.Hidden,{smDown:!0},r.a.createElement("div",null))),r.a.createElement(l.Divider,null)))}));b.propTypes={open:s.a.bool.isRequired,label:s.a.string.isRequired,buttonLabel:s.a.string,buttonOnClick:s.a.func,buttonComponent:s.a.any,buttonProps:s.a.object,showDismissButton:s.a.bool,dismissButtonLabel:s.a.string,dismissButtonProps:s.a.object,onClose:s.a.func,icon:s.a.element,iconProps:s.a.object,appBar:s.a.bool,paperProps:s.a.object,cardProps:s.a.object},b.defaultProps={open:!0,buttonOnClick:function(){},showDismissButton:!0,dismissButtonLabel:"Dismiss",dismissButtonProps:{},appBar:!1,buttonComponent:l.ButtonBase,buttonProps:{},iconProps:{},paperProps:{},cardProps:{}},b.displayName="MuiBanner";var y=b;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=E(e);if(t){var r=E(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(n,e);var t=C(n);function n(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),S(x(o=t.call(this,e)),"handleClose",(function(){o.setState({open:!1})})),o.state={open:!1,options:{label:"",buttonLabel:"",buttonOnClick:function(){},buttonComponent:i.a,buttonProps:{},showDismissButton:!0,dismissButtonLabel:"Dismiss",dismissButtonProps:{},icon:null,iconProps:{}}},y.Instance=x(o),o}return B(n,null,[{key:"hide",value:function(){y.Instance.setState({open:!1})}},{key:"show",value:function(e){var t=e.label,n=void 0===t?"":t,o=e.buttonLabel,r=void 0===o?"":o,a=e.buttonOnClick,c=void 0===a?function(){}:a,s=e.buttonComponent,u=void 0===s?i.a:s,p=e.buttonProps,l=void 0===p?{}:p,f=e.showDismissButton,d=void 0===f||f,m=e.dismissButtonLabel,b=void 0===m?"Dismiss":m,g=e.dismissButtonProps,v=void 0===g?{}:g,O=e.icon,P=void 0===O?null:O,B=e.iconProps,w=void 0===B?{}:B;y.Instance?y.Instance.setState({open:!0,options:h(h({},y.Instance.state.options),{},{label:n,buttonLabel:r,buttonOnClick:c,showDismissButton:d,dismissButtonLabel:b,dismissButtonProps:v,icon:P,iconProps:w,buttonProps:l,buttonComponent:u})}):(console.warn("No banner found"),console.warn(n))}}]),B(n,[{key:"render",value:function(){var e=this.state,t=e.open,n=e.options;return r.a.createElement(y,v({open:t,onClose:this.handleClose},n,{appBar:!0}))}}]),n}(r.a.Component);S(k,"Instance",void 0),S(k,"displayName","MuiStaticBanner");var _=k,D=y}])}));