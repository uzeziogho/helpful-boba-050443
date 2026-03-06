function gI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g0={exports:{}},Lu={},y0={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),vI=Symbol.for("react.portal"),_I=Symbol.for("react.fragment"),wI=Symbol.for("react.strict_mode"),EI=Symbol.for("react.profiler"),TI=Symbol.for("react.provider"),II=Symbol.for("react.context"),SI=Symbol.for("react.forward_ref"),xI=Symbol.for("react.suspense"),CI=Symbol.for("react.memo"),kI=Symbol.for("react.lazy"),_g=Symbol.iterator;function AI(t){return t===null||typeof t!="object"?null:(t=_g&&t[_g]||t["@@iterator"],typeof t=="function"?t:null)}var v0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_0=Object.assign,w0={};function xs(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||v0}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E0(){}E0.prototype=xs.prototype;function gf(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||v0}var yf=gf.prototype=new E0;yf.constructor=gf;_0(yf,xs.prototype);yf.isPureReactComponent=!0;var wg=Array.isArray,T0=Object.prototype.hasOwnProperty,vf={current:null},I0={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)T0.call(e,r)&&!I0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ha,type:t,key:s,ref:o,props:i,_owner:vf.current}}function PI(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _f(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function RI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Eg=/\/+/g;function Zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RI(""+t.key):e.toString(36)}function wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case vI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zc(o,0):r,wg(i)?(n="",t!=null&&(n=t.replace(Eg,"$&/")+"/"),wl(i,e,n,"",function(c){return c})):i!=null&&(_f(i)&&(i=PI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Eg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",wg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Zc(s,l);o+=wl(s,e,n,u,i)}else if(u=AI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Zc(s,l++),o+=wl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function NI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},El={transition:null},bI={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:El,ReactCurrentOwner:vf};function x0(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!_f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=xs;ee.Fragment=_I;ee.Profiler=EI;ee.PureComponent=gf;ee.StrictMode=wI;ee.Suspense=xI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bI;ee.act=x0;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)T0.call(e,u)&&!I0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ha,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:II,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:TI,_context:t},t.Consumer=t};ee.createElement=S0;ee.createFactory=function(t){var e=S0.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:SI,render:t}};ee.isValidElement=_f;ee.lazy=function(t){return{$$typeof:kI,_payload:{_status:-1,_result:t},_init:NI}};ee.memo=function(t,e){return{$$typeof:CI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};ee.unstable_act=x0;ee.useCallback=function(t,e){return pt.current.useCallback(t,e)};ee.useContext=function(t){return pt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return pt.current.useEffect(t,e)};ee.useId=function(){return pt.current.useId()};ee.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return pt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ee.useRef=function(t){return pt.current.useRef(t)};ee.useState=function(t){return pt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return pt.current.useTransition()};ee.version="18.3.1";y0.exports=ee;var D=y0.exports;const DI=yI(D),OI=gI({__proto__:null,default:DI},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MI=D,VI=Symbol.for("react.element"),LI=Symbol.for("react.fragment"),jI=Object.prototype.hasOwnProperty,FI=MI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UI={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jI.call(e,r)&&!UI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VI,type:t,key:s,ref:o,props:i,_owner:FI.current}}Lu.Fragment=LI;Lu.jsx=C0;Lu.jsxs=C0;g0.exports=Lu;var g=g0.exports,k0={exports:{}},bt={},A0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var _e=J-1>>>1,de=B[_e];if(0<i(de,Q))B[_e]=Q,B[J]=de,J=_e;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var _e=0,de=B.length,ke=de>>>1;_e<ke;){var vn=2*(_e+1)-1,_n=B[vn],wn=vn+1,En=B[wn];if(0>i(_n,J))wn<de&&0>i(En,_n)?(B[_e]=En,B[wn]=J,_e=wn):(B[_e]=_n,B[vn]=J,_e=vn);else if(wn<de&&0>i(En,J))B[_e]=En,B[wn]=J,_e=wn;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,f=null,m=3,y=!1,x=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function M(B){if(P=!1,k(B),!x)if(n(u)!==null)x=!0,js(F);else{var Q=n(c);Q!==null&&yn(M,Q.startTime-B)}}function F(B,Q){x=!1,P&&(P=!1,T(_),_=-1),y=!0;var J=m;try{for(k(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||B&&!A());){var _e=f.callback;if(typeof _e=="function"){f.callback=null,m=f.priorityLevel;var de=_e(f.expirationTime<=Q);Q=t.unstable_now(),typeof de=="function"?f.callback=de:f===n(u)&&r(u),k(Q)}else r(u);f=n(u)}if(f!==null)var ke=!0;else{var vn=n(c);vn!==null&&yn(M,vn.startTime-Q),ke=!1}return ke}finally{f=null,m=J,y=!1}}var U=!1,I=null,_=-1,w=5,S=-1;function A(){return!(t.unstable_now()-S<w)}function R(){if(I!==null){var B=t.unstable_now();S=B;var Q=!0;try{Q=I(!0,B)}finally{Q?C():(U=!1,I=null)}}else U=!1}var C;if(typeof E=="function")C=function(){E(R)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,Br=Ot.port2;Ot.port1.onmessage=R,C=function(){Br.postMessage(null)}}else C=function(){b(R,0)};function js(B){I=B,U||(U=!0,C())}function yn(B,Q){_=b(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||y||(x=!0,js(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return B()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=m;m=B;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(B,Q,J){var _e=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,B){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=J+de,B={id:h++,callback:Q,priorityLevel:B,startTime:J,expirationTime:de,sortIndex:-1},J>_e?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(P?(T(_),_=-1):P=!0,yn(M,J-_e))):(B.sortIndex=de,e(u,B),x||y||(x=!0,js(F))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var Q=m;return function(){var J=m;m=Q;try{return B.apply(this,arguments)}finally{m=J}}}})(P0);A0.exports=P0;var $I=A0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=D,Nt=$I;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R0=new Set,Lo={};function wi(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(Lo[t]=e,t=0;t<e.length;t++)R0.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$d=Object.prototype.hasOwnProperty,zI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tg={},Ig={};function WI(t){return $d.call(Ig,t)?!0:$d.call(Tg,t)?!1:zI.test(t)?Ig[t]=!0:(Tg[t]=!0,!1)}function qI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HI(t,e,n,r){if(e===null||typeof e>"u"||qI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wf=/[\-:]([a-z])/g;function Ef(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wf,Ef);Ge[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wf,Ef);Ge[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wf,Ef);Ge[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tf(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HI(e,n,i,r)&&(n=null),r||i===null?WI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),ji=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Bd=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Wd=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),D0=Symbol.for("react.offscreen"),Sg=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=Sg&&t[Sg]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,ed;function uo(t){if(ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ed=e&&e[1]||""}return`
`+ed+t}var td=!1;function nd(t,e){if(!t||td)return"";td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{td=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function GI(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=nd(t.type,!1),t;case 11:return t=nd(t.type.render,!1),t;case 1:return t=nd(t.type,!0),t;default:return""}}function qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case ji:return"Portal";case Bd:return"Profiler";case If:return"StrictMode";case zd:return"Suspense";case Wd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b0:return(t.displayName||"Context")+".Consumer";case N0:return(t._context.displayName||"Context")+".Provider";case Sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xf:return e=t.displayName||null,e!==null?e:qd(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return qd(t(e))}catch{}}return null}function KI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qd(e);case 8:return e===If?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function O0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QI(t){var e=O0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=QI(t))}function M0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=O0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hd(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function V0(t,e){e=e.checked,e!=null&&Tf(t,"checked",e,!1)}function Gd(t,e){V0(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kd(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kd(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function Xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(co(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function L0(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ag(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function j0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?j0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,F0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YI=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(t){YI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wo[e]=wo[t]})});function U0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wo.hasOwnProperty(t)&&wo[t]?(""+e).trim():e+"px"}function $0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=U0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XI=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xd(t,e){if(e){if(XI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function Cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var eh=null,Ji=null,Zi=null;function Pg(t){if(t=ma(t)){if(typeof eh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Bu(e),eh(t.stateNode,t.type,e))}}function B0(t){Ji?Zi?Zi.push(t):Zi=[t]:Ji=t}function z0(){if(Ji){var t=Ji,e=Zi;if(Zi=Ji=null,Pg(t),e)for(t=0;t<e.length;t++)Pg(e[t])}}function W0(t,e){return t(e)}function q0(){}var rd=!1;function H0(t,e,n){if(rd)return t(e,n);rd=!0;try{return W0(t,e,n)}finally{rd=!1,(Ji!==null||Zi!==null)&&(q0(),z0())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var r=Bu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var th=!1;if(jn)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){th=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{th=!1}function JI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Eo=!1,Wl=null,ql=!1,nh=null,ZI={onError:function(t){Eo=!0,Wl=t}};function eS(t,e,n,r,i,s,o,l,u){Eo=!1,Wl=null,JI.apply(ZI,arguments)}function tS(t,e,n,r,i,s,o,l,u){if(eS.apply(this,arguments),Eo){if(Eo){var c=Wl;Eo=!1,Wl=null}else throw Error(j(198));ql||(ql=!0,nh=c)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function G0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rg(t){if(Ei(t)!==t)throw Error(j(188))}function nS(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rg(i),t;if(s===r)return Rg(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function K0(t){return t=nS(t),t!==null?Q0(t):null}function Q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Q0(t);if(e!==null)return e;t=t.sibling}return null}var Y0=Nt.unstable_scheduleCallback,Ng=Nt.unstable_cancelCallback,rS=Nt.unstable_shouldYield,iS=Nt.unstable_requestPaint,Pe=Nt.unstable_now,sS=Nt.unstable_getCurrentPriorityLevel,kf=Nt.unstable_ImmediatePriority,X0=Nt.unstable_UserBlockingPriority,Hl=Nt.unstable_NormalPriority,oS=Nt.unstable_LowPriority,J0=Nt.unstable_IdlePriority,ju=null,an=null;function aS(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(ju,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:cS,lS=Math.log,uS=Math.LN2;function cS(t){return t>>>=0,t===0?32:31-(lS(t)/uS|0)|0}var Ja=64,Za=4194304;function ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ho(l):(s&=o,s!==0&&(r=ho(s)))}else o=n&~i,o!==0?r=ho(o):s!==0&&(r=ho(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function dS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=dS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Z0(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function id(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function fS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function e_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var t_,Pf,n_,r_,i_,ih=!1,el=[],mr=null,gr=null,yr=null,Uo=new Map,$o=new Map,ir=[],pS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bg(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function eo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ma(e),e!==null&&Pf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mS(t,e,n,r,i){switch(e){case"focusin":return mr=eo(mr,t,e,n,r,i),!0;case"dragenter":return gr=eo(gr,t,e,n,r,i),!0;case"mouseover":return yr=eo(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Uo.set(s,eo(Uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$o.set(s,eo($o.get(s)||null,t,e,n,r,i)),!0}return!1}function s_(t){var e=Xr(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=G0(n),e!==null){t.blockedOn=e,i_(t.priority,function(){n_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zd=r,n.target.dispatchEvent(r),Zd=null}else return e=ma(n),e!==null&&Pf(e),t.blockedOn=n,!1;e.shift()}return!0}function Dg(t,e,n){Tl(t)&&n.delete(e)}function gS(){ih=!1,mr!==null&&Tl(mr)&&(mr=null),gr!==null&&Tl(gr)&&(gr=null),yr!==null&&Tl(yr)&&(yr=null),Uo.forEach(Dg),$o.forEach(Dg)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,ih||(ih=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,gS)))}function Bo(t){function e(i){return to(i,t)}if(0<el.length){to(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&to(mr,t),gr!==null&&to(gr,t),yr!==null&&to(yr,t),Uo.forEach(e),$o.forEach(e),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)s_(n),n.blockedOn===null&&ir.shift()}var es=Gn.ReactCurrentBatchConfig,Kl=!0;function yS(t,e,n,r){var i=ue,s=es.transition;es.transition=null;try{ue=1,Rf(t,e,n,r)}finally{ue=i,es.transition=s}}function vS(t,e,n,r){var i=ue,s=es.transition;es.transition=null;try{ue=4,Rf(t,e,n,r)}finally{ue=i,es.transition=s}}function Rf(t,e,n,r){if(Kl){var i=sh(t,e,n,r);if(i===null)pd(t,e,r,Ql,n),bg(t,r);else if(mS(i,t,e,n,r))r.stopPropagation();else if(bg(t,r),e&4&&-1<pS.indexOf(t)){for(;i!==null;){var s=ma(i);if(s!==null&&t_(s),s=sh(t,e,n,r),s===null&&pd(t,e,r,Ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pd(t,e,r,null,n)}}var Ql=null;function sh(t,e,n,r){if(Ql=null,t=Cf(r),t=Xr(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=G0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function o_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sS()){case kf:return 1;case X0:return 4;case Hl:case oS:return 16;case J0:return 536870912;default:return 16}default:return 16}}var dr=null,Nf=null,Il=null;function a_(){if(Il)return Il;var t,e=Nf,n=e.length,r,i="value"in dr?dr.value:dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Il=i.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Og(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:Og,this.isPropagationStopped=Og,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Dt(Cs),pa=Te({},Cs,{view:0,detail:0}),_S=Dt(pa),sd,od,no,Fu=Te({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(sd=t.screenX-no.screenX,od=t.screenY-no.screenY):od=sd=0,no=t),sd)},movementY:function(t){return"movementY"in t?t.movementY:od}}),Mg=Dt(Fu),wS=Te({},Fu,{dataTransfer:0}),ES=Dt(wS),TS=Te({},pa,{relatedTarget:0}),ad=Dt(TS),IS=Te({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),SS=Dt(IS),xS=Te({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CS=Dt(xS),kS=Te({},Cs,{data:0}),Vg=Dt(kS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RS[t])?!!e[t]:!1}function Df(){return NS}var bS=Te({},pa,{key:function(t){if(t.key){var e=AS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DS=Dt(bS),OS=Te({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lg=Dt(OS),MS=Te({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),VS=Dt(MS),LS=Te({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),jS=Dt(LS),FS=Te({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),US=Dt(FS),$S=[9,13,27,32],Of=jn&&"CompositionEvent"in window,To=null;jn&&"documentMode"in document&&(To=document.documentMode);var BS=jn&&"TextEvent"in window&&!To,l_=jn&&(!Of||To&&8<To&&11>=To),jg=" ",Fg=!1;function u_(t,e){switch(t){case"keyup":return $S.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ui=!1;function zS(t,e){switch(t){case"compositionend":return c_(e);case"keypress":return e.which!==32?null:(Fg=!0,jg);case"textInput":return t=e.data,t===jg&&Fg?null:t;default:return null}}function WS(t,e){if(Ui)return t==="compositionend"||!Of&&u_(t,e)?(t=a_(),Il=Nf=dr=null,Ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l_&&e.locale!=="ko"?null:e.data;default:return null}}var qS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qS[t.type]:e==="textarea"}function d_(t,e,n,r){B0(r),e=Yl(e,"onChange"),0<e.length&&(n=new bf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Io=null,zo=null;function HS(t){T_(t,0)}function Uu(t){var e=zi(t);if(M0(e))return t}function GS(t,e){if(t==="change")return e}var h_=!1;if(jn){var ld;if(jn){var ud="oninput"in document;if(!ud){var $g=document.createElement("div");$g.setAttribute("oninput","return;"),ud=typeof $g.oninput=="function"}ld=ud}else ld=!1;h_=ld&&(!document.documentMode||9<document.documentMode)}function Bg(){Io&&(Io.detachEvent("onpropertychange",f_),zo=Io=null)}function f_(t){if(t.propertyName==="value"&&Uu(zo)){var e=[];d_(e,zo,t,Cf(t)),H0(HS,e)}}function KS(t,e,n){t==="focusin"?(Bg(),Io=e,zo=n,Io.attachEvent("onpropertychange",f_)):t==="focusout"&&Bg()}function QS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(zo)}function YS(t,e){if(t==="click")return Uu(e)}function XS(t,e){if(t==="input"||t==="change")return Uu(e)}function JS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xt=typeof Object.is=="function"?Object.is:JS;function Wo(t,e){if(Xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$d.call(e,i)||!Xt(t[i],e[i]))return!1}return!0}function zg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wg(t,e){var n=zg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zg(n)}}function p_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m_(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZS(t){var e=m_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&p_(n.ownerDocument.documentElement,n)){if(r!==null&&Mf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Wg(n,s);var o=Wg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ex=jn&&"documentMode"in document&&11>=document.documentMode,$i=null,oh=null,So=null,ah=!1;function qg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ah||$i==null||$i!==zl(r)||(r=$i,"selectionStart"in r&&Mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&Wo(So,r)||(So=r,r=Yl(oh,"onSelect"),0<r.length&&(e=new bf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$i)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bi={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},cd={},g_={};jn&&(g_=document.createElement("div").style,"AnimationEvent"in window||(delete Bi.animationend.animation,delete Bi.animationiteration.animation,delete Bi.animationstart.animation),"TransitionEvent"in window||delete Bi.transitionend.transition);function $u(t){if(cd[t])return cd[t];if(!Bi[t])return t;var e=Bi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in g_)return cd[t]=e[n];return t}var y_=$u("animationend"),v_=$u("animationiteration"),__=$u("animationstart"),w_=$u("transitionend"),E_=new Map,Hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){E_.set(t,e),wi(e,[t])}for(var dd=0;dd<Hg.length;dd++){var hd=Hg[dd],tx=hd.toLowerCase(),nx=hd[0].toUpperCase()+hd.slice(1);Or(tx,"on"+nx)}Or(y_,"onAnimationEnd");Or(v_,"onAnimationIteration");Or(__,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(w_,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Gg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tS(r,e,void 0,t),t.currentTarget=null}function T_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Gg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Gg(i,l,c),s=u}}}if(ql)throw t=nh,ql=!1,nh=null,t}function me(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||(I_(e,t,2,!1),n.add(r))}function fd(t,e,n){var r=0;e&&(r|=4),I_(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[rl]){t[rl]=!0,R0.forEach(function(n){n!=="selectionchange"&&(rx.has(n)||fd(n,!1,t),fd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,fd("selectionchange",!1,e))}}function I_(t,e,n,r){switch(o_(e)){case 1:var i=yS;break;case 4:i=vS;break;default:i=Rf}n=i.bind(null,e,n,t),i=void 0,!th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Xr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}H0(function(){var c=s,h=Cf(n),f=[];e:{var m=E_.get(t);if(m!==void 0){var y=bf,x=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":y=DS;break;case"focusin":x="focus",y=ad;break;case"focusout":x="blur",y=ad;break;case"beforeblur":case"afterblur":y=ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Mg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ES;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=VS;break;case y_:case v_:case __:y=SS;break;case w_:y=jS;break;case"scroll":y=_S;break;case"wheel":y=US;break;case"copy":case"cut":case"paste":y=CS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Lg}var P=(e&4)!==0,b=!P&&t==="scroll",T=P?m!==null?m+"Capture":null:m;P=[];for(var E=c,k;E!==null;){k=E;var M=k.stateNode;if(k.tag===5&&M!==null&&(k=M,T!==null&&(M=Fo(E,T),M!=null&&P.push(Ho(E,M,k)))),b)break;E=E.return}0<P.length&&(m=new y(m,x,null,n,h),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Zd&&(x=n.relatedTarget||n.fromElement)&&(Xr(x)||x[Fn]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?Xr(x):null,x!==null&&(b=Ei(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(P=Mg,M="onMouseLeave",T="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(P=Lg,M="onPointerLeave",T="onPointerEnter",E="pointer"),b=y==null?m:zi(y),k=x==null?m:zi(x),m=new P(M,E+"leave",y,n,h),m.target=b,m.relatedTarget=k,M=null,Xr(h)===c&&(P=new P(T,E+"enter",x,n,h),P.target=k,P.relatedTarget=b,M=P),b=M,y&&x)t:{for(P=y,T=x,E=0,k=P;k;k=Di(k))E++;for(k=0,M=T;M;M=Di(M))k++;for(;0<E-k;)P=Di(P),E--;for(;0<k-E;)T=Di(T),k--;for(;E--;){if(P===T||T!==null&&P===T.alternate)break t;P=Di(P),T=Di(T)}P=null}else P=null;y!==null&&Kg(f,m,y,P,!1),x!==null&&b!==null&&Kg(f,b,x,P,!0)}}e:{if(m=c?zi(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var F=GS;else if(Ug(m))if(h_)F=XS;else{F=QS;var U=KS}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=YS);if(F&&(F=F(t,c))){d_(f,F,n,h);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Kd(m,"number",m.value)}switch(U=c?zi(c):window,t){case"focusin":(Ug(U)||U.contentEditable==="true")&&($i=U,oh=c,So=null);break;case"focusout":So=oh=$i=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,qg(f,n,h);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":qg(f,n,h)}var I;if(Of)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ui?u_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(l_&&n.locale!=="ko"&&(Ui||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ui&&(I=a_()):(dr=h,Nf="value"in dr?dr.value:dr.textContent,Ui=!0)),U=Yl(c,_),0<U.length&&(_=new Vg(_,t,null,n,h),f.push({event:_,listeners:U}),I?_.data=I:(I=c_(n),I!==null&&(_.data=I)))),(I=BS?zS(t,n):WS(t,n))&&(c=Yl(c,"onBeforeInput"),0<c.length&&(h=new Vg("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=I))}T_(f,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fo(t,n),s!=null&&r.unshift(Ho(t,s,i)),s=Fo(t,e),s!=null&&r.push(Ho(t,s,i))),t=t.return}return r}function Di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Fo(n,s),u!=null&&o.unshift(Ho(n,u,l))):i||(u=Fo(n,s),u!=null&&o.push(Ho(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ix=/\r\n?/g,sx=/\u0000|\uFFFD/g;function Qg(t){return(typeof t=="string"?t:""+t).replace(ix,`
`).replace(sx,"")}function il(t,e,n){if(e=Qg(e),Qg(t)!==e&&n)throw Error(j(425))}function Xl(){}var lh=null,uh=null;function ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dh=typeof setTimeout=="function"?setTimeout:void 0,ox=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(t){return Yg.resolve(null).then(t).catch(lx)}:dh;function lx(t){setTimeout(function(){throw t})}function md(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bo(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),sn="__reactFiber$"+ks,Go="__reactProps$"+ks,Fn="__reactContainer$"+ks,hh="__reactEvents$"+ks,ux="__reactListeners$"+ks,cx="__reactHandles$"+ks;function Xr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xg(t);t!==null;){if(n=t[sn])return n;t=Xg(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[sn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Bu(t){return t[Go]||null}var fh=[],Wi=-1;function Mr(t){return{current:t}}function ye(t){0>Wi||(t.current=fh[Wi],fh[Wi]=null,Wi--)}function fe(t,e){Wi++,fh[Wi]=t.current,t.current=e}var Pr={},ot=Mr(Pr),wt=Mr(!1),ai=Pr;function us(t,e){var n=t.type.contextTypes;if(!n)return Pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function Jl(){ye(wt),ye(ot)}function Jg(t,e,n){if(ot.current!==Pr)throw Error(j(168));fe(ot,e),fe(wt,n)}function S_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,KI(t)||"Unknown",i));return Te({},n,r)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,ai=ot.current,fe(ot,t),fe(wt,wt.current),!0}function Zg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=S_(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,ye(wt),ye(ot),fe(ot,t)):ye(wt),fe(wt,n)}var kn=null,zu=!1,gd=!1;function x_(t){kn===null?kn=[t]:kn.push(t)}function dx(t){zu=!0,x_(t)}function Vr(){if(!gd&&kn!==null){gd=!0;var t=0,e=ue;try{var n=kn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,zu=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),Y0(kf,Vr),i}finally{ue=e,gd=!1}}return null}var qi=[],Hi=0,eu=null,tu=0,Vt=[],Lt=0,li=null,An=1,Pn="";function Gr(t,e){qi[Hi++]=tu,qi[Hi++]=eu,eu=t,tu=e}function C_(t,e,n){Vt[Lt++]=An,Vt[Lt++]=Pn,Vt[Lt++]=li,li=t;var r=An;t=Pn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var s=32-Kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-Kt(e)+i|n<<i|r,Pn=s+t}else An=1<<s|n<<i|r,Pn=t}function Vf(t){t.return!==null&&(Gr(t,1),C_(t,1,0))}function Lf(t){for(;t===eu;)eu=qi[--Hi],qi[Hi]=null,tu=qi[--Hi],qi[Hi]=null;for(;t===li;)li=Vt[--Lt],Vt[Lt]=null,Pn=Vt[--Lt],Vt[Lt]=null,An=Vt[--Lt],Vt[Lt]=null}var At=null,Ct=null,ve=!1,Gt=null;function k_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ey(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,Ct=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:An,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,Ct=null,!0):!1;default:return!1}}function ph(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mh(t){if(ve){var e=Ct;if(e){var n=e;if(!ey(t,e)){if(ph(t))throw Error(j(418));e=vr(n.nextSibling);var r=At;e&&ey(t,e)?k_(r,n):(t.flags=t.flags&-4097|2,ve=!1,At=t)}}else{if(ph(t))throw Error(j(418));t.flags=t.flags&-4097|2,ve=!1,At=t}}}function ty(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function sl(t){if(t!==At)return!1;if(!ve)return ty(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ch(t.type,t.memoizedProps)),e&&(e=Ct)){if(ph(t))throw A_(),Error(j(418));for(;e;)k_(t,e),e=vr(e.nextSibling)}if(ty(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=At?vr(t.stateNode.nextSibling):null;return!0}function A_(){for(var t=Ct;t;)t=vr(t.nextSibling)}function cs(){Ct=At=null,ve=!1}function jf(t){Gt===null?Gt=[t]:Gt.push(t)}var hx=Gn.ReactCurrentBatchConfig;function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ny(t){var e=t._init;return e(t._payload)}function P_(t){function e(T,E){if(t){var k=T.deletions;k===null?(T.deletions=[E],T.flags|=16):k.push(E)}}function n(T,E){if(!t)return null;for(;E!==null;)e(T,E),E=E.sibling;return null}function r(T,E){for(T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function i(T,E){return T=Tr(T,E),T.index=0,T.sibling=null,T}function s(T,E,k){return T.index=k,t?(k=T.alternate,k!==null?(k=k.index,k<E?(T.flags|=2,E):k):(T.flags|=2,E)):(T.flags|=1048576,E)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,E,k,M){return E===null||E.tag!==6?(E=Id(k,T.mode,M),E.return=T,E):(E=i(E,k),E.return=T,E)}function u(T,E,k,M){var F=k.type;return F===Fi?h(T,E,k.props.children,M,k.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===nr&&ny(F)===E.type)?(M=i(E,k.props),M.ref=ro(T,E,k),M.return=T,M):(M=Nl(k.type,k.key,k.props,null,T.mode,M),M.ref=ro(T,E,k),M.return=T,M)}function c(T,E,k,M){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=Sd(k,T.mode,M),E.return=T,E):(E=i(E,k.children||[]),E.return=T,E)}function h(T,E,k,M,F){return E===null||E.tag!==7?(E=si(k,T.mode,M,F),E.return=T,E):(E=i(E,k),E.return=T,E)}function f(T,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Id(""+E,T.mode,k),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Qa:return k=Nl(E.type,E.key,E.props,null,T.mode,k),k.ref=ro(T,null,E),k.return=T,k;case ji:return E=Sd(E,T.mode,k),E.return=T,E;case nr:var M=E._init;return f(T,M(E._payload),k)}if(co(E)||Js(E))return E=si(E,T.mode,k,null),E.return=T,E;ol(T,E)}return null}function m(T,E,k,M){var F=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return F!==null?null:l(T,E,""+k,M);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Qa:return k.key===F?u(T,E,k,M):null;case ji:return k.key===F?c(T,E,k,M):null;case nr:return F=k._init,m(T,E,F(k._payload),M)}if(co(k)||Js(k))return F!==null?null:h(T,E,k,M,null);ol(T,k)}return null}function y(T,E,k,M,F){if(typeof M=="string"&&M!==""||typeof M=="number")return T=T.get(k)||null,l(E,T,""+M,F);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Qa:return T=T.get(M.key===null?k:M.key)||null,u(E,T,M,F);case ji:return T=T.get(M.key===null?k:M.key)||null,c(E,T,M,F);case nr:var U=M._init;return y(T,E,k,U(M._payload),F)}if(co(M)||Js(M))return T=T.get(k)||null,h(E,T,M,F,null);ol(E,M)}return null}function x(T,E,k,M){for(var F=null,U=null,I=E,_=E=0,w=null;I!==null&&_<k.length;_++){I.index>_?(w=I,I=null):w=I.sibling;var S=m(T,I,k[_],M);if(S===null){I===null&&(I=w);break}t&&I&&S.alternate===null&&e(T,I),E=s(S,E,_),U===null?F=S:U.sibling=S,U=S,I=w}if(_===k.length)return n(T,I),ve&&Gr(T,_),F;if(I===null){for(;_<k.length;_++)I=f(T,k[_],M),I!==null&&(E=s(I,E,_),U===null?F=I:U.sibling=I,U=I);return ve&&Gr(T,_),F}for(I=r(T,I);_<k.length;_++)w=y(I,T,_,k[_],M),w!==null&&(t&&w.alternate!==null&&I.delete(w.key===null?_:w.key),E=s(w,E,_),U===null?F=w:U.sibling=w,U=w);return t&&I.forEach(function(A){return e(T,A)}),ve&&Gr(T,_),F}function P(T,E,k,M){var F=Js(k);if(typeof F!="function")throw Error(j(150));if(k=F.call(k),k==null)throw Error(j(151));for(var U=F=null,I=E,_=E=0,w=null,S=k.next();I!==null&&!S.done;_++,S=k.next()){I.index>_?(w=I,I=null):w=I.sibling;var A=m(T,I,S.value,M);if(A===null){I===null&&(I=w);break}t&&I&&A.alternate===null&&e(T,I),E=s(A,E,_),U===null?F=A:U.sibling=A,U=A,I=w}if(S.done)return n(T,I),ve&&Gr(T,_),F;if(I===null){for(;!S.done;_++,S=k.next())S=f(T,S.value,M),S!==null&&(E=s(S,E,_),U===null?F=S:U.sibling=S,U=S);return ve&&Gr(T,_),F}for(I=r(T,I);!S.done;_++,S=k.next())S=y(I,T,_,S.value,M),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?_:S.key),E=s(S,E,_),U===null?F=S:U.sibling=S,U=S);return t&&I.forEach(function(R){return e(T,R)}),ve&&Gr(T,_),F}function b(T,E,k,M){if(typeof k=="object"&&k!==null&&k.type===Fi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Qa:e:{for(var F=k.key,U=E;U!==null;){if(U.key===F){if(F=k.type,F===Fi){if(U.tag===7){n(T,U.sibling),E=i(U,k.props.children),E.return=T,T=E;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===nr&&ny(F)===U.type){n(T,U.sibling),E=i(U,k.props),E.ref=ro(T,U,k),E.return=T,T=E;break e}n(T,U);break}else e(T,U);U=U.sibling}k.type===Fi?(E=si(k.props.children,T.mode,M,k.key),E.return=T,T=E):(M=Nl(k.type,k.key,k.props,null,T.mode,M),M.ref=ro(T,E,k),M.return=T,T=M)}return o(T);case ji:e:{for(U=k.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){n(T,E.sibling),E=i(E,k.children||[]),E.return=T,T=E;break e}else{n(T,E);break}else e(T,E);E=E.sibling}E=Sd(k,T.mode,M),E.return=T,T=E}return o(T);case nr:return U=k._init,b(T,E,U(k._payload),M)}if(co(k))return x(T,E,k,M);if(Js(k))return P(T,E,k,M);ol(T,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,E!==null&&E.tag===6?(n(T,E.sibling),E=i(E,k),E.return=T,T=E):(n(T,E),E=Id(k,T.mode,M),E.return=T,T=E),o(T)):n(T,E)}return b}var ds=P_(!0),R_=P_(!1),nu=Mr(null),ru=null,Gi=null,Ff=null;function Uf(){Ff=Gi=ru=null}function $f(t){var e=nu.current;ye(nu),t._currentValue=e}function gh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ts(t,e){ru=t,Ff=Gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Ff!==t)if(t={context:t,memoizedValue:e,next:null},Gi===null){if(ru===null)throw Error(j(308));Gi=t,ru.dependencies={lanes:0,firstContext:t}}else Gi=Gi.next=t;return e}var Jr=null;function Bf(t){Jr===null?Jr=[t]:Jr.push(t)}function N_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,Bf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Af(t,n)}}function ry(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,r){var i=t.updateQueue;rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,l=s;do{var m=l.lane,y=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,P=l;switch(m=e,y=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){f=x.call(y,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,m=typeof x=="function"?x.call(y,f,m):x,m==null)break e;f=Te({},f,m);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=y,u=f):h=h.next=y,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ci|=o,t.lanes=o,t.memoizedState=f}}function iy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ga={},ln=Mr(ga),Ko=Mr(ga),Qo=Mr(ga);function Zr(t){if(t===ga)throw Error(j(174));return t}function Wf(t,e){switch(fe(Qo,e),fe(Ko,t),fe(ln,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yd(e,t)}ye(ln),fe(ln,e)}function hs(){ye(ln),ye(Ko),ye(Qo)}function D_(t){Zr(Qo.current);var e=Zr(ln.current),n=Yd(e,t.type);e!==n&&(fe(Ko,t),fe(ln,n))}function qf(t){Ko.current===t&&(ye(ln),ye(Ko))}var we=Mr(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yd=[];function Hf(){for(var t=0;t<yd.length;t++)yd[t]._workInProgressVersionPrimary=null;yd.length=0}var Cl=Gn.ReactCurrentDispatcher,vd=Gn.ReactCurrentBatchConfig,ui=0,Ee=null,Oe=null,je=null,ou=!1,xo=!1,Yo=0,fx=0;function Je(){throw Error(j(321))}function Gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xt(t[n],e[n]))return!1;return!0}function Kf(t,e,n,r,i,s){if(ui=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?yx:vx,t=n(r,i),xo){s=0;do{if(xo=!1,Yo=0,25<=s)throw Error(j(301));s+=1,je=Oe=null,e.updateQueue=null,Cl.current=_x,t=n(r,i)}while(xo)}if(Cl.current=au,e=Oe!==null&&Oe.next!==null,ui=0,je=Oe=Ee=null,ou=!1,e)throw Error(j(300));return t}function Qf(){var t=Yo!==0;return Yo=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ee.memoizedState=je=t:je=je.next=t,je}function Bt(){if(Oe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=je===null?Ee.memoizedState:je.next;if(e!==null)je=e,Oe=t;else{if(t===null)throw Error(j(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},je===null?Ee.memoizedState=je=t:je=je.next=t}return je}function Xo(t,e){return typeof e=="function"?e(t):e}function _d(t){var e=Bt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((ui&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Ee.lanes|=h,ci|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Xt(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wd(t){var e=Bt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Xt(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function O_(){}function M_(t,e){var n=Ee,r=Bt(),i=e(),s=!Xt(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Yf(j_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Jo(9,L_.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(j(349));ui&30||V_(n,e,i)}return i}function V_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L_(t,e,n,r){e.value=n,e.getSnapshot=r,F_(e)&&U_(t)}function j_(t,e,n){return n(function(){F_(e)&&U_(t)})}function F_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xt(t,n)}catch{return!0}}function U_(t){var e=Un(t,1);e!==null&&Qt(e,t,1,-1)}function sy(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=gx.bind(null,Ee,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $_(){return Bt().memoizedState}function kl(t,e,n,r){var i=rn();Ee.flags|=t,i.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function Wu(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Gf(r,o.deps)){i.memoizedState=Jo(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Jo(1|e,n,s,r)}function oy(t,e){return kl(8390656,8,t,e)}function Yf(t,e){return Wu(2048,8,t,e)}function B_(t,e){return Wu(4,2,t,e)}function z_(t,e){return Wu(4,4,t,e)}function W_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function q_(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4,4,W_.bind(null,e,t),n)}function Xf(){}function H_(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function G_(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function K_(t,e,n){return ui&21?(Xt(n,e)||(n=Z0(),Ee.lanes|=n,ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function px(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=vd.transition;vd.transition={};try{t(!1),e()}finally{ue=n,vd.transition=r}}function Q_(){return Bt().memoizedState}function mx(t,e,n){var r=Er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Y_(t))X_(e,n);else if(n=N_(t,e,n,r),n!==null){var i=ft();Qt(n,t,r,i),J_(n,e,r)}}function gx(t,e,n){var r=Er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y_(t))X_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Xt(l,o)){var u=e.interleaved;u===null?(i.next=i,Bf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=N_(t,e,i,r),n!==null&&(i=ft(),Qt(n,t,r,i),J_(n,e,r))}}function Y_(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function X_(t,e){xo=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Af(t,n)}}var au={readContext:$t,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},yx={readContext:$t,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:oy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,W_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mx.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:sy,useDebugValue:Xf,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=sy(!1),e=t[0];return t=px.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=rn();if(ve){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Fe===null)throw Error(j(349));ui&30||V_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,oy(j_.bind(null,r,s,t),[t]),r.flags|=2048,Jo(9,L_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=rn(),e=Fe.identifierPrefix;if(ve){var n=Pn,r=An;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vx={readContext:$t,useCallback:H_,useContext:$t,useEffect:Yf,useImperativeHandle:q_,useInsertionEffect:B_,useLayoutEffect:z_,useMemo:G_,useReducer:_d,useRef:$_,useState:function(){return _d(Xo)},useDebugValue:Xf,useDeferredValue:function(t){var e=Bt();return K_(e,Oe.memoizedState,t)},useTransition:function(){var t=_d(Xo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:M_,useId:Q_,unstable_isNewReconciler:!1},_x={readContext:$t,useCallback:H_,useContext:$t,useEffect:Yf,useImperativeHandle:q_,useInsertionEffect:B_,useLayoutEffect:z_,useMemo:G_,useReducer:wd,useRef:$_,useState:function(){return wd(Xo)},useDebugValue:Xf,useDeferredValue:function(t){var e=Bt();return Oe===null?e.memoizedState=t:K_(e,Oe.memoizedState,t)},useTransition:function(){var t=wd(Xo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:M_,useId:Q_,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qu={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Er(t),s=Mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(Qt(e,t,i,r),xl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Er(t),s=Mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(Qt(e,t,i,r),xl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=Er(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=_r(t,i,r),e!==null&&(Qt(e,t,r,n),xl(e,t,r))}};function ay(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,r)||!Wo(i,s):!0}function Z_(t,e,n){var r=!1,i=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=Et(e)?ai:ot.current,r=e.contextTypes,s=(r=r!=null)?us(t,i):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ly(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qu.enqueueReplaceState(e,e.state,null)}function vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=Et(e)?ai:ot.current,i.context=us(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qu.enqueueReplaceState(i,i.state,null),iu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e){try{var n="",r=e;do n+=GI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ed(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function ew(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,Ph=r),_h(t,e)},n}function tw(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_h(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_h(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function uy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ox.bind(null,t,e,n),e.then(t,t))}function cy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var Ex=Gn.ReactCurrentOwner,_t=!1;function ct(t,e,n,r){e.child=t===null?R_(e,null,n,r):ds(e,t.child,n,r)}function hy(t,e,n,r,i){n=n.render;var s=e.ref;return ts(e,i),r=Kf(t,e,n,r,s,i),n=Qf(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(ve&&n&&Vf(e),e.flags|=1,ct(t,e,r,i),e.child)}function fy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nw(t,e,s,r,i)):(t=Nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,r)&&t.ref===e.ref)return $n(t,e,i)}return e.flags|=1,t=Tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function nw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wo(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,$n(t,e,i)}return wh(t,e,n,r,i)}function rw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Qi,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Qi,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Qi,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Qi,xt),xt|=r;return ct(t,e,i,n),e.child}function iw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wh(t,e,n,r,i){var s=Et(n)?ai:ot.current;return s=us(e,s),ts(e,i),n=Kf(t,e,n,r,s,i),r=Qf(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(ve&&r&&Vf(e),e.flags|=1,ct(t,e,n,i),e.child)}function py(t,e,n,r,i){if(Et(n)){var s=!0;Zl(e)}else s=!1;if(ts(e,i),e.stateNode===null)Al(t,e),Z_(e,n,r),vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=Et(n)?ai:ot.current,c=us(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ly(e,o,r,c),rr=!1;var m=e.memoizedState;o.state=m,iu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||wt.current||rr?(typeof h=="function"&&(yh(e,n,h,r),u=e.memoizedState),(l=rr||ay(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,b_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:qt(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=Et(n)?ai:ot.current,u=us(e,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&ly(e,o,r,u),rr=!1,m=e.memoizedState,o.state=m,iu(e,r,o,i);var x=e.memoizedState;l!==f||m!==x||wt.current||rr?(typeof y=="function"&&(yh(e,n,y,r),x=e.memoizedState),(c=rr||ay(e,n,c,r,m,x,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Eh(t,e,n,r,s,i)}function Eh(t,e,n,r,i,s){iw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zg(e,n,!1),$n(t,e,s);r=e.stateNode,Ex.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ds(e,t.child,null,s),e.child=ds(e,null,l,s)):ct(t,e,l,s),e.memoizedState=r.state,i&&Zg(e,n,!0),e.child}function sw(t){var e=t.stateNode;e.pendingContext?Jg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jg(t,e.context,!1),Wf(t,e.containerInfo)}function my(t,e,n,r,i){return cs(),jf(i),e.flags|=256,ct(t,e,n,r),e.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function Ih(t){return{baseLanes:t,cachePool:null,transitions:null}}function ow(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(we,i&1),t===null)return mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ku(o,r,0,null),t=si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ih(n),e.memoizedState=Th,t):Jf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Tx(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tr(l,s):(s=si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ih(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Th,r}return s=t.child,t=s.sibling,r=Tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jf(t,e){return e=Ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&jf(r),ds(e,t.child,null,n),t=Jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ed(Error(j(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ku({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ds(e,t.child,null,o),e.child.memoizedState=Ih(o),e.memoizedState=Th,s);if(!(e.mode&1))return al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Ed(s,r,void 0),al(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),Qt(r,t,i,-1))}return ip(),r=Ed(Error(j(421))),al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Mx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=vr(i.nextSibling),At=e,ve=!0,Gt=null,t!==null&&(Vt[Lt++]=An,Vt[Lt++]=Pn,Vt[Lt++]=li,An=t.id,Pn=t.overflow,li=e),e=Jf(e,r.children),e.flags|=4096,e)}function gy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gh(t.return,e,n)}function Td(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function aw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gy(t,n,e);else if(t.tag===19)gy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Td(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&su(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Td(e,!0,n,null,s);break;case"together":Td(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ix(t,e,n){switch(e.tag){case 3:sw(e),cs();break;case 5:D_(e);break;case 1:Et(e.type)&&Zl(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(nu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?ow(t,e,n):(fe(we,we.current&1),t=$n(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return aw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,rw(t,e,n)}return $n(t,e,n)}var lw,Sh,uw,cw;lw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sh=function(){};uw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(ln.current);var s=null;switch(n){case"input":i=Hd(t,i),r=Hd(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=Qd(t,i),r=Qd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xl)}Xd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cw=function(t,e,n,r){n!==r&&(e.flags|=4)};function io(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Sx(t,e,n){var r=e.pendingProps;switch(Lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return Et(e.type)&&Jl(),Ze(e),null;case 3:return r=e.stateNode,hs(),ye(wt),ye(ot),Hf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(bh(Gt),Gt=null))),Sh(t,e),Ze(e),null;case 5:qf(e);var i=Zr(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)uw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Ze(e),null}if(t=Zr(ln.current),sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[Go]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)me(fo[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":xg(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":kg(r,s),me("invalid",r)}Xd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&il(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&il(r.textContent,l,t),i=["children",""+l]):Lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Ya(r),Cg(r,s,!0);break;case"textarea":Ya(r),Ag(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=j0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[Go]=r,lw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jd(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)me(fo[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":xg(t,r),i=Hd(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),me("invalid",t);break;case"textarea":kg(t,r),i=Qd(t,r),me("invalid",t);break;default:i=r}Xd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?$0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&F0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jo(t,u):typeof u=="number"&&jo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Tf(t,s,u,o))}switch(n){case"input":Ya(t),Cg(t,r,!1);break;case"textarea":Ya(t),Ag(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)cw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Zr(Qo.current),Zr(ln.current),sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return Ze(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Ct!==null&&e.mode&1&&!(e.flags&128))A_(),cs(),e.flags|=98560,s=!1;else if(s=sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[sn]=e}else cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else Gt!==null&&(bh(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Me===0&&(Me=3):ip())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return hs(),Sh(t,e),t===null&&qo(e.stateNode.containerInfo),Ze(e),null;case 10:return $f(e.type._context),Ze(e),null;case 17:return Et(e.type)&&Jl(),Ze(e),null;case 19:if(ye(we),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)io(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,io(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>ps&&(e.flags|=128,r=!0,io(s,!1),e.lanes=4194304)}else{if(!r)if(t=su(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ze(e),null}else 2*Pe()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,r=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function xx(t,e){switch(Lf(e),e.tag){case 1:return Et(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hs(),ye(wt),ye(ot),Hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qf(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return hs(),null;case 10:return $f(e.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var ll=!1,nt=!1,Cx=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function xh(t,e,n){try{n()}catch(r){xe(t,e,r)}}var yy=!1;function kx(t,e){if(lh=Kl,t=m_(),Mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++h===r&&(u=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(uh={focusedElem:t,selectionRange:n},Kl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,b=x.memoizedState,T=e.stateNode,E=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:qt(e.type,P),b);T.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(M){xe(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return x=yy,yy=!1,x}function Co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xh(e,n,s)}i=i.next}while(i!==r)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dw(t){var e=t.alternate;e!==null&&(t.alternate=null,dw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[Go],delete e[hh],delete e[ux],delete e[cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hw(t){return t.tag===5||t.tag===3||t.tag===4}function vy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}function Ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}var Be=null,Ht=!1;function Zn(t,e,n){for(n=n.child;n!==null;)fw(t,e,n),n=n.sibling}function fw(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(ju,n)}catch{}switch(n.tag){case 5:nt||Ki(n,e);case 6:var r=Be,i=Ht;Be=null,Zn(t,e,n),Be=r,Ht=i,Be!==null&&(Ht?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ht?(t=Be,n=n.stateNode,t.nodeType===8?md(t.parentNode,n):t.nodeType===1&&md(t,n),Bo(t)):md(Be,n.stateNode));break;case 4:r=Be,i=Ht,Be=n.stateNode.containerInfo,Ht=!0,Zn(t,e,n),Be=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xh(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!nt&&(Ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Zn(t,e,n),nt=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function _y(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Cx),e.forEach(function(r){var i=Vx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ht=!1;break e;case 3:Be=l.stateNode.containerInfo,Ht=!0;break e;case 4:Be=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(Be===null)throw Error(j(160));fw(s,o,i),Be=null,Ht=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pw(e,t),e=e.sibling}function pw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),nn(t),r&4){try{Co(3,t,t.return),Hu(3,t)}catch(P){xe(t,t.return,P)}try{Co(5,t,t.return)}catch(P){xe(t,t.return,P)}}break;case 1:Wt(e,t),nn(t),r&512&&n!==null&&Ki(n,n.return);break;case 5:if(Wt(e,t),nn(t),r&512&&n!==null&&Ki(n,n.return),t.flags&32){var i=t.stateNode;try{jo(i,"")}catch(P){xe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&V0(i,s),Jd(l,o);var c=Jd(l,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?$0(i,f):h==="dangerouslySetInnerHTML"?F0(i,f):h==="children"?jo(i,f):Tf(i,h,f,c)}switch(l){case"input":Gd(i,s);break;case"textarea":L0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Xi(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Xi(i,!!s.multiple,s.defaultValue,!0):Xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Go]=s}catch(P){xe(t,t.return,P)}}break;case 6:if(Wt(e,t),nn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){xe(t,t.return,P)}}break;case 3:if(Wt(e,t),nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(e.containerInfo)}catch(P){xe(t,t.return,P)}break;case 4:Wt(e,t),nn(t);break;case 13:Wt(e,t),nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tp=Pe())),r&4&&_y(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(c=nt)||h,Wt(e,t),nt=c):Wt(e,t),nn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(f=W=h;W!==null;){switch(m=W,y=m.child,m.tag){case 0:case 11:case 14:case 15:Co(4,m,m.return);break;case 1:Ki(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){xe(r,n,P)}}break;case 5:Ki(m,m.return);break;case 22:if(m.memoizedState!==null){Ey(f);continue}}y!==null?(y.return=m,W=y):Ey(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=U0("display",o))}catch(P){xe(t,t.return,P)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){xe(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Wt(e,t),nn(t),r&4&&_y(t);break;case 21:break;default:Wt(e,t),nn(t)}}function nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hw(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jo(i,""),r.flags&=-33);var s=vy(t);Ah(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=vy(t);kh(t,l,o);break;default:throw Error(j(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ax(t,e,n){W=t,mw(t)}function mw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ll;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||nt;l=ll;var c=nt;if(ll=o,(nt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Ty(i):u!==null?(u.return=o,W=u):Ty(i);for(;s!==null;)W=s,mw(s),s=s.sibling;W=i,ll=l,nt=c}wy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):wy(t)}}function wy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||Hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&iy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}iy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Bo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}nt||e.flags&512&&Ch(e)}catch(m){xe(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ey(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Ty(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{Ch(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{Ch(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var Px=Math.ceil,lu=Gn.ReactCurrentDispatcher,Zf=Gn.ReactCurrentOwner,Ft=Gn.ReactCurrentBatchConfig,ie=0,Fe=null,be=null,qe=0,xt=0,Qi=Mr(0),Me=0,Zo=null,ci=0,Gu=0,ep=0,ko=null,yt=null,tp=0,ps=1/0,Cn=null,uu=!1,Ph=null,wr=null,ul=!1,hr=null,cu=0,Ao=0,Rh=null,Pl=-1,Rl=0;function ft(){return ie&6?Pe():Pl!==-1?Pl:Pl=Pe()}function Er(t){return t.mode&1?ie&2&&qe!==0?qe&-qe:hx.transition!==null?(Rl===0&&(Rl=Z0()),Rl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:o_(t.type)),t):1}function Qt(t,e,n,r){if(50<Ao)throw Ao=0,Rh=null,Error(j(185));fa(t,n,r),(!(ie&2)||t!==Fe)&&(t===Fe&&(!(ie&2)&&(Gu|=n),Me===4&&sr(t,qe)),Tt(t,r),n===1&&ie===0&&!(e.mode&1)&&(ps=Pe()+500,zu&&Vr()))}function Tt(t,e){var n=t.callbackNode;hS(t,e);var r=Gl(t,t===Fe?qe:0);if(r===0)n!==null&&Ng(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ng(n),e===1)t.tag===0?dx(Iy.bind(null,t)):x_(Iy.bind(null,t)),ax(function(){!(ie&6)&&Vr()}),n=null;else{switch(e_(r)){case 1:n=kf;break;case 4:n=X0;break;case 16:n=Hl;break;case 536870912:n=J0;break;default:n=Hl}n=Iw(n,gw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gw(t,e){if(Pl=-1,Rl=0,ie&6)throw Error(j(327));var n=t.callbackNode;if(ns()&&t.callbackNode!==n)return null;var r=Gl(t,t===Fe?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=du(t,r);else{e=r;var i=ie;ie|=2;var s=vw();(Fe!==t||qe!==e)&&(Cn=null,ps=Pe()+500,ii(t,e));do try{bx();break}catch(l){yw(t,l)}while(!0);Uf(),lu.current=s,ie=i,be!==null?e=0:(Fe=null,qe=0,e=Me)}if(e!==0){if(e===2&&(i=rh(t),i!==0&&(r=i,e=Nh(t,i))),e===1)throw n=Zo,ii(t,0),sr(t,r),Tt(t,Pe()),n;if(e===6)sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Rx(i)&&(e=du(t,r),e===2&&(s=rh(t),s!==0&&(r=s,e=Nh(t,s))),e===1))throw n=Zo,ii(t,0),sr(t,r),Tt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Kr(t,yt,Cn);break;case 3:if(sr(t,r),(r&130023424)===r&&(e=tp+500-Pe(),10<e)){if(Gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dh(Kr.bind(null,t,yt,Cn),e);break}Kr(t,yt,Cn);break;case 4:if(sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Px(r/1960))-r,10<r){t.timeoutHandle=dh(Kr.bind(null,t,yt,Cn),r);break}Kr(t,yt,Cn);break;case 5:Kr(t,yt,Cn);break;default:throw Error(j(329))}}}return Tt(t,Pe()),t.callbackNode===n?gw.bind(null,t):null}function Nh(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=du(t,e),t!==2&&(e=yt,yt=n,e!==null&&bh(e)),t}function bh(t){yt===null?yt=t:yt.push.apply(yt,t)}function Rx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~ep,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function Iy(t){if(ie&6)throw Error(j(327));ns();var e=Gl(t,0);if(!(e&1))return Tt(t,Pe()),null;var n=du(t,e);if(t.tag!==0&&n===2){var r=rh(t);r!==0&&(e=r,n=Nh(t,r))}if(n===1)throw n=Zo,ii(t,0),sr(t,e),Tt(t,Pe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,yt,Cn),Tt(t,Pe()),null}function np(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(ps=Pe()+500,zu&&Vr())}}function di(t){hr!==null&&hr.tag===0&&!(ie&6)&&ns();var e=ie;ie|=1;var n=Ft.transition,r=ue;try{if(Ft.transition=null,ue=1,t)return t()}finally{ue=r,Ft.transition=n,ie=e,!(ie&6)&&Vr()}}function rp(){xt=Qi.current,ye(Qi)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ox(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:hs(),ye(wt),ye(ot),Hf();break;case 5:qf(r);break;case 4:hs();break;case 13:ye(we);break;case 19:ye(we);break;case 10:$f(r.type._context);break;case 22:case 23:rp()}n=n.return}if(Fe=t,be=t=Tr(t.current,null),qe=xt=e,Me=0,Zo=null,ep=Gu=ci=0,yt=ko=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function yw(t,e){do{var n=be;try{if(Uf(),Cl.current=au,ou){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ou=!1}if(ui=0,je=Oe=Ee=null,xo=!1,Yo=0,Zf.current=null,n===null||n.return===null){Me=1,Zo=e,be=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=cy(o);if(y!==null){y.flags&=-257,dy(y,o,l,s,e),y.mode&1&&uy(s,c,e),e=y,u=c;var x=e.updateQueue;if(x===null){var P=new Set;P.add(u),e.updateQueue=P}else x.add(u);break e}else{if(!(e&1)){uy(s,c,e),ip();break e}u=Error(j(426))}}else if(ve&&l.mode&1){var b=cy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),dy(b,o,l,s,e),jf(fs(u,l));break e}}s=u=fs(u,l),Me!==4&&(Me=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=ew(s,u,e);ry(s,T);break e;case 1:l=u;var E=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(wr===null||!wr.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=tw(s,l,e);ry(s,M);break e}}s=s.return}while(s!==null)}ww(n)}catch(F){e=F,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function vw(){var t=lu.current;return lu.current=au,t===null?au:t}function ip(){(Me===0||Me===3||Me===2)&&(Me=4),Fe===null||!(ci&268435455)&&!(Gu&268435455)||sr(Fe,qe)}function du(t,e){var n=ie;ie|=2;var r=vw();(Fe!==t||qe!==e)&&(Cn=null,ii(t,e));do try{Nx();break}catch(i){yw(t,i)}while(!0);if(Uf(),ie=n,lu.current=r,be!==null)throw Error(j(261));return Fe=null,qe=0,Me}function Nx(){for(;be!==null;)_w(be)}function bx(){for(;be!==null&&!rS();)_w(be)}function _w(t){var e=Tw(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?ww(t):be=e,Zf.current=null}function ww(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xx(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,be=null;return}}else if(n=Sx(n,e,xt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Me===0&&(Me=5)}function Kr(t,e,n){var r=ue,i=Ft.transition;try{Ft.transition=null,ue=1,Dx(t,e,n,r)}finally{Ft.transition=i,ue=r}return null}function Dx(t,e,n,r){do ns();while(hr!==null);if(ie&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fS(t,s),t===Fe&&(be=Fe=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Iw(Hl,function(){return ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=ue;ue=1;var l=ie;ie|=4,Zf.current=null,kx(t,n),pw(n,t),ZS(uh),Kl=!!lh,uh=lh=null,t.current=n,Ax(n),iS(),ie=l,ue=o,Ft.transition=s}else t.current=n;if(ul&&(ul=!1,hr=t,cu=i),s=t.pendingLanes,s===0&&(wr=null),aS(n.stateNode),Tt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uu)throw uu=!1,t=Ph,Ph=null,t;return cu&1&&t.tag!==0&&ns(),s=t.pendingLanes,s&1?t===Rh?Ao++:(Ao=0,Rh=t):Ao=0,Vr(),null}function ns(){if(hr!==null){var t=e_(cu),e=Ft.transition,n=ue;try{if(Ft.transition=null,ue=16>t?16:t,hr===null)var r=!1;else{if(t=hr,hr=null,cu=0,ie&6)throw Error(j(331));var i=ie;for(ie|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:Co(8,h,s)}var f=h.child;if(f!==null)f.return=h,W=f;else for(;W!==null;){h=W;var m=h.sibling,y=h.return;if(dw(h),h===c){W=null;break}if(m!==null){m.return=y,W=m;break}W=y}}}var x=s.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,W=T;break e}W=s.return}}var E=t.current;for(W=E;W!==null;){o=W;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,W=k;else e:for(o=E;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hu(9,l)}}catch(F){xe(l,l.return,F)}if(l===o){W=null;break e}var M=l.sibling;if(M!==null){M.return=l.return,W=M;break e}W=l.return}}if(ie=i,Vr(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(ju,t)}catch{}r=!0}return r}finally{ue=n,Ft.transition=e}}return!1}function Sy(t,e,n){e=fs(n,e),e=ew(t,e,1),t=_r(t,e,1),e=ft(),t!==null&&(fa(t,1,e),Tt(t,e))}function xe(t,e,n){if(t.tag===3)Sy(t,t,n);else for(;e!==null;){if(e.tag===3){Sy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=fs(n,t),t=tw(e,t,1),e=_r(e,t,1),t=ft(),e!==null&&(fa(e,1,t),Tt(e,t));break}}e=e.return}}function Ox(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(qe&n)===n&&(Me===4||Me===3&&(qe&130023424)===qe&&500>Pe()-tp?ii(t,0):ep|=n),Tt(t,e)}function Ew(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=ft();t=Un(t,e),t!==null&&(fa(t,e,n),Tt(t,n))}function Mx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ew(t,n)}function Vx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Ew(t,n)}var Tw;Tw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,Ix(t,e,n);_t=!!(t.flags&131072)}else _t=!1,ve&&e.flags&1048576&&C_(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Al(t,e),t=e.pendingProps;var i=us(e,ot.current);ts(e,n),i=Kf(null,e,r,t,i,n);var s=Qf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,Zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zf(e),i.updater=qu,e.stateNode=i,i._reactInternals=e,vh(e,r,t,n),e=Eh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Vf(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jx(r),t=qt(r,t),i){case 0:e=wh(null,e,r,t,n);break e;case 1:e=py(null,e,r,t,n);break e;case 11:e=hy(null,e,r,t,n);break e;case 14:e=fy(null,e,r,qt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),wh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),py(t,e,r,i,n);case 3:e:{if(sw(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,b_(t,e),iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fs(Error(j(423)),e),e=my(t,e,r,n,i);break e}else if(r!==i){i=fs(Error(j(424)),e),e=my(t,e,r,n,i);break e}else for(Ct=vr(e.stateNode.containerInfo.firstChild),At=e,ve=!0,Gt=null,n=R_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cs(),r===i){e=$n(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return D_(e),t===null&&mh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ch(r,i)?o=null:s!==null&&ch(r,s)&&(e.flags|=32),iw(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&mh(e),null;case 13:return ow(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ds(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),hy(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(nu,r._currentValue),r._currentValue=o,s!==null)if(Xt(s.value,o)){if(s.children===i.children&&!wt.current){e=$n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Mn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),gh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ts(e,n),i=$t(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),fy(t,e,r,i,n);case 15:return nw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Al(t,e),e.tag=1,Et(r)?(t=!0,Zl(e)):t=!1,ts(e,n),Z_(e,r,i),vh(e,r,i,n),Eh(null,e,r,!0,t,n);case 19:return aw(t,e,n);case 22:return rw(t,e,n)}throw Error(j(156,e.tag))};function Iw(t,e){return Y0(t,e)}function Lx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new Lx(t,e,n,r)}function sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jx(t){if(typeof t=="function")return sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sf)return 11;if(t===xf)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return si(n.children,i,s,e);case If:o=8,i|=8;break;case Bd:return t=jt(12,n,e,i|2),t.elementType=Bd,t.lanes=s,t;case zd:return t=jt(13,n,e,i),t.elementType=zd,t.lanes=s,t;case Wd:return t=jt(19,n,e,i),t.elementType=Wd,t.lanes=s,t;case D0:return Ku(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N0:o=10;break e;case b0:o=9;break e;case Sf:o=11;break e;case xf:o=14;break e;case nr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function si(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Ku(t,e,n,r){return t=jt(22,t,r,e),t.elementType=D0,t.lanes=n,t.stateNode={isHidden:!1},t}function Id(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Sd(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=id(0),this.expirationTimes=id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function op(t,e,n,r,i,s,o,l,u){return t=new Fx(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zf(s),t}function Ux(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Sw(t){if(!t)return Pr;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Et(n))return S_(t,n,e)}return e}function xw(t,e,n,r,i,s,o,l,u){return t=op(n,r,!0,t,i,s,o,l,u),t.context=Sw(null),n=t.current,r=ft(),i=Er(n),s=Mn(r,i),s.callback=e??null,_r(n,s,i),t.current.lanes=i,fa(t,i,r),Tt(t,r),t}function Qu(t,e,n,r){var i=e.current,s=ft(),o=Er(i);return n=Sw(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(i,e,o),t!==null&&(Qt(t,i,o,s),xl(t,i,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ap(t,e){xy(t,e),(t=t.alternate)&&xy(t,e)}function $x(){return null}var Cw=typeof reportError=="function"?reportError:function(t){console.error(t)};function lp(t){this._internalRoot=t}Yu.prototype.render=lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Qu(t,e,null,null)};Yu.prototype.unmount=lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;di(function(){Qu(null,t,null,null)}),e[Fn]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=r_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&s_(t)}};function up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cy(){}function Bx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=hu(o);s.call(c)}}var o=xw(e,r,t,0,null,!1,!1,"",Cy);return t._reactRootContainer=o,t[Fn]=o.current,qo(t.nodeType===8?t.parentNode:t),di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=hu(u);l.call(c)}}var u=op(t,0,!1,null,null,!1,!1,"",Cy);return t._reactRootContainer=u,t[Fn]=u.current,qo(t.nodeType===8?t.parentNode:t),di(function(){Qu(e,u,n,r)}),u}function Ju(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=hu(o);l.call(u)}}Qu(e,o,t,i)}else o=Bx(n,e,t,i,r);return hu(o)}t_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ho(e.pendingLanes);n!==0&&(Af(e,n|1),Tt(e,Pe()),!(ie&6)&&(ps=Pe()+500,Vr()))}break;case 13:di(function(){var r=Un(t,1);if(r!==null){var i=ft();Qt(r,t,1,i)}}),ap(t,1)}};Pf=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=ft();Qt(e,t,134217728,n)}ap(t,134217728)}};n_=function(t){if(t.tag===13){var e=Er(t),n=Un(t,e);if(n!==null){var r=ft();Qt(n,t,e,r)}ap(t,e)}};r_=function(){return ue};i_=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};eh=function(t,e,n){switch(e){case"input":if(Gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bu(r);if(!i)throw Error(j(90));M0(r),Gd(r,i)}}}break;case"textarea":L0(t,n);break;case"select":e=n.value,e!=null&&Xi(t,!!n.multiple,e,!1)}};W0=np;q0=di;var zx={usingClientEntryPoint:!1,Events:[ma,zi,Bu,B0,z0,np]},so={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wx={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K0(t),t===null?null:t.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||$x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{ju=cl.inject(Wx),an=cl}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zx;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!up(e))throw Error(j(200));return Ux(t,e,null,n)};bt.createRoot=function(t,e){if(!up(t))throw Error(j(299));var n=!1,r="",i=Cw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=op(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,qo(t.nodeType===8?t.parentNode:t),new lp(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=K0(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return di(t)};bt.hydrate=function(t,e,n){if(!Xu(e))throw Error(j(200));return Ju(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!up(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xw(e,null,t,1,n??null,i,!1,s,o),t[Fn]=e.current,qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yu(e)};bt.render=function(t,e,n){if(!Xu(e))throw Error(j(200));return Ju(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(j(40));return t._reactRootContainer?(di(function(){Ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};bt.unstable_batchedUpdates=np;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Ju(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function kw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kw)}catch(t){console.error(t)}}kw(),k0.exports=bt;var qx=k0.exports,Aw,ky=qx;Aw=ky.createRoot,ky.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ea.apply(this,arguments)}var fr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(fr||(fr={}));const Ay="popstate";function Hx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Dh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fu(i)}return Kx(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Pw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Gx(){return Math.random().toString(36).substr(2,8)}function Py(t,e){return{usr:t.state,key:t.key,idx:e}}function Dh(t,e,n,r){return n===void 0&&(n=null),ea({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?As(e):e,{state:n,key:e&&e.key||r||Gx()})}function fu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function As(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Kx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=fr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(ea({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){l=fr.Pop;let b=h(),T=b==null?null:b-c;c=b,u&&u({action:l,location:P.location,delta:T})}function m(b,T){l=fr.Push;let E=Dh(P.location,b,T);c=h()+1;let k=Py(E,c),M=P.createHref(E);try{o.pushState(k,"",M)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(M)}s&&u&&u({action:l,location:P.location,delta:1})}function y(b,T){l=fr.Replace;let E=Dh(P.location,b,T);c=h();let k=Py(E,c),M=P.createHref(E);o.replaceState(k,"",M),s&&u&&u({action:l,location:P.location,delta:0})}function x(b){let T=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof b=="string"?b:fu(b);return E=E.replace(/ $/,"%20"),Re(T,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,T)}let P={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ay,f),u=b,()=>{i.removeEventListener(Ay,f),u=null}},createHref(b){return e(i,b)},createURL:x,encodeLocation(b){let T=x(b);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:y,go(b){return o.go(b)}};return P}var Ry;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ry||(Ry={}));function Qx(t,e,n){return n===void 0&&(n="/"),Yx(t,e,n,!1)}function Yx(t,e,n,r){let i=typeof e=="string"?As(e):e,s=cp(i.pathname||"/",n);if(s==null)return null;let o=Rw(t);Xx(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=lC(s);l=oC(o[u],c,r)}return l}function Rw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ir([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Rw(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:iC(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Nw(s.path))i(s,o,u)}),e}function Nw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Nw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Xx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jx=/^:[\w-]+$/,Zx=3,eC=2,tC=1,nC=10,rC=-2,Ny=t=>t==="*";function iC(t,e){let n=t.split("/"),r=n.length;return n.some(Ny)&&(r+=rC),e&&(r+=eC),n.filter(i=>!Ny(i)).reduce((i,s)=>i+(Jx.test(s)?Zx:s===""?tC:nC),r)}function sC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=by({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=by({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ir([s,f.pathname]),pathnameBase:hC(Ir([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Ir([s,f.pathnameBase]))}return o}function by(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=aC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:y}=h;if(m==="*"){let P=l[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const x=l[f];return y&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function aC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Pw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Pw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function cp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?As(t):t;return{pathname:n?n.startsWith("/")?n:cC(n,e):e,search:fC(r),hash:pC(i)}}function cC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dp(t,e){let n=dC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=As(t):(i=ea({},t),Re(!i.pathname||!i.pathname.includes("?"),xd("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),xd("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),xd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=uC(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),hC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bw=["post","put","patch","delete"];new Set(bw);const gC=["get",...bw];new Set(gC);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ta.apply(this,arguments)}const fp=D.createContext(null),yC=D.createContext(null),Lr=D.createContext(null),Zu=D.createContext(null),Kn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Dw=D.createContext(null);function vC(t,e){let{relative:n}=e===void 0?{}:e;Ps()||Re(!1);let{basename:r,navigator:i}=D.useContext(Lr),{hash:s,pathname:o,search:l}=Mw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ir([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ps(){return D.useContext(Zu)!=null}function Rs(){return Ps()||Re(!1),D.useContext(Zu).location}function Ow(t){D.useContext(Lr).static||D.useLayoutEffect(t)}function Ti(){let{isDataRoute:t}=D.useContext(Kn);return t?bC():_C()}function _C(){Ps()||Re(!1);let t=D.useContext(fp),{basename:e,future:n,navigator:r}=D.useContext(Lr),{matches:i}=D.useContext(Kn),{pathname:s}=Rs(),o=JSON.stringify(dp(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return Ow(()=>{l.current=!0}),D.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=hp(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ir([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function wC(){let{matches:t}=D.useContext(Kn),e=t[t.length-1];return e?e.params:{}}function Mw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Lr),{matches:i}=D.useContext(Kn),{pathname:s}=Rs(),o=JSON.stringify(dp(i,r.v7_relativeSplatPath));return D.useMemo(()=>hp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function EC(t,e){return TC(t,e)}function TC(t,e,n,r){Ps()||Re(!1);let{navigator:i,static:s}=D.useContext(Lr),{matches:o}=D.useContext(Kn),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let h=Rs(),f;if(e){var m;let T=typeof e=="string"?As(e):e;c==="/"||(m=T.pathname)!=null&&m.startsWith(c)||Re(!1),f=T}else f=h;let y=f.pathname||"/",x=y;if(c!=="/"){let T=c.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(T.length).join("/")}let P=!s&&n&&n.matches&&n.matches.length>0?n.matches:Qx(t,{pathname:x}),b=kC(P&&P.map(T=>Object.assign({},T,{params:Object.assign({},u,T.params),pathname:Ir([c,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?c:Ir([c,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),o,n,r);return e&&b?D.createElement(Zu.Provider,{value:{location:ta({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:fr.Pop}},b):b}function IC(){let t=NC(),e=mC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const SC=D.createElement(IC,null);class xC extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Kn.Provider,{value:this.props.routeContext},D.createElement(Dw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CC(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(fp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Kn.Provider,{value:e},r)}function kC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);h>=0||Re(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:y}=n,x=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let y,x=!1,P=null,b=null;n&&(y=l&&f.route.id?l[f.route.id]:void 0,P=f.route.errorElement||SC,u&&(c<0&&m===0?(x=!0,b=null):c===m&&(x=!0,b=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),E=()=>{let k;return y?k=P:x?k=b:f.route.Component?k=D.createElement(f.route.Component,null):f.route.element?k=f.route.element:k=h,D.createElement(CC,{match:f,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:k})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?D.createElement(xC,{location:n.location,revalidation:n.revalidation,component:P,error:y,children:E(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):E()},null)}var Vw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Vw||{}),pu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pu||{});function AC(t){let e=D.useContext(fp);return e||Re(!1),e}function PC(t){let e=D.useContext(yC);return e||Re(!1),e}function RC(t){let e=D.useContext(Kn);return e||Re(!1),e}function Lw(t){let e=RC(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function NC(){var t;let e=D.useContext(Dw),n=PC(pu.UseRouteError),r=Lw(pu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function bC(){let{router:t}=AC(Vw.UseNavigateStable),e=Lw(pu.UseNavigateStable),n=D.useRef(!1);return Ow(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ta({fromRouteId:e},s)))},[t,e])}function DC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ec(t){let{to:e,replace:n,state:r,relative:i}=t;Ps()||Re(!1);let{future:s,static:o}=D.useContext(Lr),{matches:l}=D.useContext(Kn),{pathname:u}=Rs(),c=Ti(),h=hp(e,dp(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return D.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function xn(t){Re(!1)}function OC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=fr.Pop,navigator:s,static:o=!1,future:l}=t;Ps()&&Re(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:ta({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=As(r));let{pathname:h="/",search:f="",hash:m="",state:y=null,key:x="default"}=r,P=D.useMemo(()=>{let b=cp(h,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:y,key:x},navigationType:i}},[u,h,f,m,y,x,i]);return P==null?null:D.createElement(Lr.Provider,{value:c},D.createElement(Zu.Provider,{children:n,value:P}))}function MC(t){let{children:e,location:n}=t;return EC(Oh(e),n)}new Promise(()=>{});function Oh(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Oh(r.props.children,s));return}r.type!==xn&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Oh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mh(){return Mh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mh.apply(this,arguments)}function VC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function LC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jC(t,e){return t.button===0&&(!e||e==="_self")&&!LC(t)}const FC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],UC="6";try{window.__reactRouterVersion=UC}catch{}const $C="startTransition",Dy=OI[$C];function BC(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=Hx({window:i,v5Compat:!0}));let o=s.current,[l,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=D.useCallback(f=>{c&&Dy?Dy(()=>u(f)):u(f)},[u,c]);return D.useLayoutEffect(()=>o.listen(h),[o,h]),D.useEffect(()=>DC(r),[r]),D.createElement(OC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const zC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",WC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mt=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:h,viewTransition:f}=e,m=VC(e,FC),{basename:y}=D.useContext(Lr),x,P=!1;if(typeof c=="string"&&WC.test(c)&&(x=c,zC))try{let k=new URL(window.location.href),M=c.startsWith("//")?new URL(k.protocol+c):new URL(c),F=cp(M.pathname,y);M.origin===k.origin&&F!=null?c=F+M.search+M.hash:P=!0}catch{}let b=vC(c,{relative:i}),T=qC(c,{replace:o,state:l,target:u,preventScrollReset:h,relative:i,viewTransition:f});function E(k){r&&r(k),k.defaultPrevented||T(k)}return D.createElement("a",Mh({},m,{href:x||b,onClick:P||s?r:E,ref:n,target:u}))});var Oy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Oy||(Oy={}));var My;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(My||(My={}));function qC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Ti(),c=Rs(),h=Mw(t,{relative:o});return D.useCallback(f=>{if(jC(f,n)){f.preventDefault();let m=r!==void 0?r:fu(c)===fu(h);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,h,r,i,n,t,s,o,l])}var Vy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},HC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[h],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new GC;const m=s<<2|l>>4;if(r.push(m),c!==64){const y=l<<4&240|c>>2;if(r.push(y),f!==64){const x=c<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KC=function(t){const e=jw(t);return Fw.encodeByteArray(e,!0)},mu=function(t){return KC(t).replace(/\./g,"")},Uw=function(t){try{return Fw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=()=>QC().__FIREBASE_DEFAULTS__,XC=()=>{if(typeof process>"u"||typeof Vy>"u")return;const t=Vy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uw(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return YC()||XC()||JC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$w=t=>{var e,n;return(n=(e=tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ZC=t=>{const e=$w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bw=()=>{var t;return(t=tc())===null||t===void 0?void 0:t.config},zw=t=>{var e;return(e=tc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function rk(){var t;const e=(t=tc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ik(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ok(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ak(){return!rk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mp(){try{return typeof indexedDB=="object"}catch{return!1}}function gp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Ww(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lk,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new tn(i,l,r)}}function uk(t,e){return t.replace(ck,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ck=/\{\$([^}]+)}/g;function dk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ms(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ly(s)&&Ly(o)){if(!ms(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ly(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function mo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hk(t,e){const n=new fk(t,e);return n.subscribe.bind(n)}class fk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cd),i.error===void 0&&(i.error=Cd),i.complete===void 0&&(i.complete=Cd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=1e3,gk=2,yk=4*60*60*1e3,vk=.5;function jy(t,e=mk,n=gk){const r=e*Math.pow(n,t),i=Math.round(vk*r*(Math.random()-.5)*2);return Math.min(yk,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ek;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ek(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wk(t){return t===Qr?void 0:t}function Ek(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _k(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Ik={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Sk=ne.INFO,xk={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Ck=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=Sk,this._logHandler=Ck,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ik[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const kk=(t,e)=>e.some(n=>t instanceof n);let Fy,Uy;function Ak(){return Fy||(Fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pk(){return Uy||(Uy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qw=new WeakMap,Vh=new WeakMap,Hw=new WeakMap,kd=new WeakMap,yp=new WeakMap;function Rk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qw.set(n,t)}).catch(()=>{}),yp.set(e,t),e}function Nk(t){if(Vh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vh.set(t,e)}let Lh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bk(t){Lh=t(Lh)}function Dk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ad(this),e,...n);return Hw.set(r,e.sort?e.sort():[e]),Sr(r)}:Pk().includes(t)?function(...e){return t.apply(Ad(this),e),Sr(qw.get(this))}:function(...e){return Sr(t.apply(Ad(this),e))}}function Ok(t){return typeof t=="function"?Dk(t):(t instanceof IDBTransaction&&Nk(t),kk(t,Ak())?new Proxy(t,Lh):t)}function Sr(t){if(t instanceof IDBRequest)return Rk(t);if(kd.has(t))return kd.get(t);const e=Ok(t);return e!==t&&(kd.set(t,e),yp.set(e,t)),e}const Ad=t=>yp.get(t);function Gw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Sr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Sr(o.result),u.oldVersion,u.newVersion,Sr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Mk=["get","getKey","getAll","getAllKeys","count"],Vk=["put","add","delete","clear"],Pd=new Map;function $y(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Vk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Mk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Pd.set(e,s),s}bk(t=>({...t,get:(e,n,r)=>$y(e,n)||t.get(e,n,r),has:(e,n)=>!!$y(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jh="@firebase/app",By="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new nc("@firebase/app"),Fk="@firebase/app-compat",Uk="@firebase/analytics-compat",$k="@firebase/analytics",Bk="@firebase/app-check-compat",zk="@firebase/app-check",Wk="@firebase/auth",qk="@firebase/auth-compat",Hk="@firebase/database",Gk="@firebase/data-connect",Kk="@firebase/database-compat",Qk="@firebase/functions",Yk="@firebase/functions-compat",Xk="@firebase/installations",Jk="@firebase/installations-compat",Zk="@firebase/messaging",eA="@firebase/messaging-compat",tA="@firebase/performance",nA="@firebase/performance-compat",rA="@firebase/remote-config",iA="@firebase/remote-config-compat",sA="@firebase/storage",oA="@firebase/storage-compat",aA="@firebase/firestore",lA="@firebase/vertexai-preview",uA="@firebase/firestore-compat",cA="firebase",dA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="[DEFAULT]",hA={[jh]:"fire-core",[Fk]:"fire-core-compat",[$k]:"fire-analytics",[Uk]:"fire-analytics-compat",[zk]:"fire-app-check",[Bk]:"fire-app-check-compat",[Wk]:"fire-auth",[qk]:"fire-auth-compat",[Hk]:"fire-rtdb",[Gk]:"fire-data-connect",[Kk]:"fire-rtdb-compat",[Qk]:"fire-fn",[Yk]:"fire-fn-compat",[Xk]:"fire-iid",[Jk]:"fire-iid-compat",[Zk]:"fire-fcm",[eA]:"fire-fcm-compat",[tA]:"fire-perf",[nA]:"fire-perf-compat",[rA]:"fire-rc",[iA]:"fire-rc-compat",[sA]:"fire-gcs",[oA]:"fire-gcs-compat",[aA]:"fire-fst",[uA]:"fire-fst-compat",[lA]:"fire-vertex","fire-js":"fire-js",[cA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Map,fA=new Map,Uh=new Map;function zy(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(Uh.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Uh.set(e,t);for(const n of gu.values())zy(n,t);for(const n of fA.values())zy(n,t);return!0}function Si(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Ii("app","Firebase",pA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=dA;function Kw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=Bw()),!n)throw xr.create("no-options");const s=gu.get(i);if(s){if(ms(n,s.options)&&ms(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new Tk(i);for(const u of Uh.values())o.addComponent(u);const l=new mA(n,r,o);return gu.set(i,l),l}function vp(t=Fh){const e=gu.get(t);if(!e&&t===Fh&&Bw())return Kw();if(!e)throw xr.create("no-app",{appName:t});return e}function Ut(t,e,n){var r;let i=(r=hA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}fn(new Jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="firebase-heartbeat-database",yA=1,na="firebase-heartbeat-store";let Rd=null;function Qw(){return Rd||(Rd=Gw(gA,yA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(na)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),Rd}async function vA(t){try{const n=(await Qw()).transaction(na),r=await n.objectStore(na).get(Yw(t));return await n.done,r}catch(e){if(e instanceof tn)Bn.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function Wy(t,e){try{const r=(await Qw()).transaction(na,"readwrite");await r.objectStore(na).put(e,Yw(t)),await r.done}catch(n){if(n instanceof tn)Bn.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function Yw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=1024,wA=30*24*60*60*1e3;class EA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=wA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qy(),{heartbeatsToSend:r,unsentEntries:i}=TA(this._heartbeatsCache.heartbeats),s=mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Bn.warn(n),""}}}function qy(){return new Date().toISOString().substring(0,10)}function TA(t,e=_A){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mp()?gp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hy(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t){fn(new Jt("platform-logger",e=>new Lk(e),"PRIVATE")),fn(new Jt("heartbeat",e=>new EA(e),"PRIVATE")),Ut(jh,By,t),Ut(jh,By,"esm2017"),Ut("fire-js","")}SA("");function _p(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Xw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xA=Xw,Jw=new Ii("auth","Firebase",Xw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new nc("@firebase/auth");function CA(t,...e){yu.logLevel<=ne.WARN&&yu.warn(`Auth (${Ns}): ${t}`,...e)}function bl(t,...e){yu.logLevel<=ne.ERROR&&yu.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,...e){throw wp(t,...e)}function un(t,...e){return wp(t,...e)}function Zw(t,e,n){const r=Object.assign(Object.assign({},xA()),{[e]:n});return new Ii("auth","Firebase",r).create(e,{appName:t.name})}function Vn(t){return Zw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jw.create(t,...e)}function G(t,e,...n){if(!t)throw wp(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function zn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kA(){return Gy()==="http:"||Gy()==="https:"}function Gy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kA()||pp()||"connection"in navigator)?navigator.onLine:!0}function PA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=nk()||sk()}get(){return AA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=new va(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qn(t,e,n,r,i={}){return tE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ya(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return ik()||(c.referrerPolicy="no-referrer"),eE.fetch()(nE(t,t.config.apiHost,n,l),c)})}async function tE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RA),e);try{const i=new DA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw dl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw dl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw dl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zw(t,h,c);Zt(t,h)}}catch(i){if(i instanceof tn)throw i;Zt(t,"network-request-failed",{message:String(i)})}}async function _a(t,e,n,r,i={}){const s=await Qn(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ep(t.config,i):`${t.config.apiScheme}://${i}`}function bA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),NA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=un(t,e,r);return i.customData._tokenResponse=n,i}function Ky(t){return t!==void 0&&t.enterprise!==void 0}class OA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function MA(t,e){return Qn(t,"GET","/v2/recaptchaConfig",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function rE(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LA(t,e=!1){const n=Ce(t),r=await n.getIdToken(e),i=Tp(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Po(Nd(i.auth_time)),issuedAtTime:Po(Nd(i.iat)),expirationTime:Po(Nd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nd(t){return Number(t)*1e3}function Tp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uw(n);return i?JSON.parse(i):(bl("Failed to decode base64 JWT payload"),null)}catch(i){return bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qy(t){const e=Tp(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&jA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await gs(t,rE(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iE(s.providerUserInfo):[],l=$A(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Bh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function UA(t){const e=Ce(t);await vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $A(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iE(t){return t.map(e=>{var{providerId:n}=e,r=_p(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e){const n=await tE(t,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",eE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zA(t,e){return Qn(t,"POST","/v2/accounts:revokeToken",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Qy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await BA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new rs;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LA(this,e)}reload(){return UA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await gs(this,VA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:M,isAnonymous:F,providerData:U,stsTokenManager:I}=n;G(k&&I,e,"internal-error");const _=rs.fromJSON(this.name,I);G(typeof k=="string",e,"internal-error"),er(f,e.name),er(m,e.name),G(typeof M=="boolean",e,"internal-error"),G(typeof F=="boolean",e,"internal-error"),er(y,e.name),er(x,e.name),er(P,e.name),er(b,e.name),er(T,e.name),er(E,e.name);const w=new Nn({uid:k,auth:e,email:m,emailVerified:M,displayName:f,isAnonymous:F,photoURL:x,phoneNumber:y,tenantId:P,stsTokenManager:_,createdAt:T,lastLoginAt:E});return U&&Array.isArray(U)&&(w.providerData=U.map(S=>Object.assign({},S))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new rs;i.updateFromServerResponse(n);const s=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?iE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new rs;l.updateFromIdToken(r);const u=new Nn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Bh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new Map;function bn(t){zn(t instanceof Function,"Expected a class definition");let e=Yy.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sE.type="NONE";const Xy=sE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(bn(Xy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||bn(Xy);const o=Dl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Nn._fromJSON(e,h);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new is(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new is(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dE(e))return"Blackberry";if(hE(e))return"Webos";if(aE(e))return"Safari";if((e.includes("chrome/")||lE(e))&&!e.includes("edge/"))return"Chrome";if(cE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oE(t=at()){return/firefox\//i.test(t)}function aE(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lE(t=at()){return/crios\//i.test(t)}function uE(t=at()){return/iemobile/i.test(t)}function cE(t=at()){return/android/i.test(t)}function dE(t=at()){return/blackberry/i.test(t)}function hE(t=at()){return/webos/i.test(t)}function Ip(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WA(t=at()){var e;return Ip(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qA(){return ok()&&document.documentMode===10}function fE(t=at()){return Ip(t)||cE(t)||hE(t)||dE(t)||/windows phone/i.test(t)||uE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t,e=[]){let n;switch(t){case"Browser":n=Jy(at());break;case"Worker":n=`${Jy(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=6;class QA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zy(this),this.idTokenSubscription=new Zy(this),this.beforeStateQueue=new HA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rE(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(Vn(this));const n=e?Ce(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GA(this),n=new QA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xi(t){return Ce(t)}class Zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=hk(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XA(t){rc=t}function mE(t){return rc.loadJS(t)}function JA(){return rc.recaptchaEnterpriseScript}function ZA(){return rc.gapiScript}function eP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tP="recaptcha-enterprise",nP="NO_RECAPTCHA";class rP{constructor(e){this.type=tP,this.auth=xi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{MA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new OA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Ky(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(nP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Ky(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=JA();u.length!==0&&(u+=l),mE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function ev(t,e,n,r=!1){const i=new rP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ev(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ev(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t,e){const n=Si(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ms(s,e??{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function sP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oP(t,e,n){const r=xi(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=gE(e),{host:o,port:l}=aP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),lP()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aP(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tv(o)}}}function tv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function uP(t,e){return Qn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e){return _a(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e){return _a(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function hP(t,e){return _a(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends Sp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zh(e,n,"signInWithPassword",cP);case"emailLink":return dP(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zh(e,r,"signUpPassword",uP);case"emailLink":return hP(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e){return _a(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP="http://localhost";class hi extends Sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_p(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ss(e,n)}buildRequest(){const e={requestUri:fP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mP(t){const e=po(mo(t)).link,n=e?po(mo(e)).deep_link_id:null,r=po(mo(t)).deep_link_id;return(r?po(mo(r)).link:null)||r||n||e||t}class xp{constructor(e){var n,r,i,s,o,l;const u=po(mo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=pP((i=u.mode)!==null&&i!==void 0?i:null);G(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=mP(e);try{return new xp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xp.parseLink(n);return G(r,"argument-error"),ra._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends yE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends wa{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends wa{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends wa{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e){return _a(t,"POST","/v1/accounts:signUp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nn._fromIdTokenResponse(e,r,i),o=nv(r);return new fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nv(r);return new fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _u(e,n,r,i)}}function vE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,s,e,r):s})}async function yP(t,e,n=!1){const r=await gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(Vn(r));const i="reauthenticate";try{const s=await gs(t,vE(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Tp(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(t,e,n=!1){if(on(t.app))return Promise.reject(Vn(t));const r="signIn",i=await vE(t,r,e),s=await fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _P(t,e){return _E(xi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(t){const e=xi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wP(t,e,n){if(on(t.app))return Promise.reject(Vn(t));const r=xi(t),o=await zh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&wE(t),u}),l=await fi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function EP(t,e,n){return on(t.app)?Promise.reject(Vn(t)):_P(Ce(t),bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e){return Qn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ce(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gs(r,TP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function SP(t,e,n,r){return Ce(t).onIdTokenChanged(e,n,r)}function xP(t,e,n){return Ce(t).beforeAuthStateChanged(e,n)}function CP(t,e,n,r){return Ce(t).onAuthStateChanged(e,n,r)}function kP(t){return Ce(t).signOut()}const wu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wu,"1"),this.storage.removeItem(wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=1e3,PP=10;class TE extends EE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TE.type="LOCAL";const RP=TE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends EE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}IE.type="SESSION";const SE=IE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await NP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Cp("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function DP(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function OP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VP(){return xE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="firebaseLocalStorageDb",LP=1,Eu="firebaseLocalStorage",kE="fbase_key";class Ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function jP(){const t=indexedDB.deleteDatabase(CE);return new Ea(t).toPromise()}function Wh(){const t=indexedDB.open(CE,LP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eu,{keyPath:kE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eu)?e(r):(r.close(),await jP(),e(await Wh()))})})}async function rv(t,e,n){const r=sc(t,!0).put({[kE]:e,value:n});return new Ea(r).toPromise()}async function FP(t,e){const n=sc(t,!1).get(e),r=await new Ea(n).toPromise();return r===void 0?null:r.value}function iv(t,e){const n=sc(t,!0).delete(e);return new Ea(n).toPromise()}const UP=800,$P=3;class AE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$P)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(VP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OP(),!this.activeServiceWorker)return;this.sender=new bP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wh();return await rv(e,wu,"1"),await iv(e,wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sc(i,!1).getAll();return new Ea(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AE.type="LOCAL";const BP=AE;new va(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t,e){return e?bn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends Sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WP(t){return _E(t.auth,new kp(t),t.bypassAuthState)}function qP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),vP(n,new kp(t),t.bypassAuthState)}async function HP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),yP(n,new kp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WP;case"linkViaPopup":case"linkViaRedirect":return HP;case"reauthViaPopup":case"reauthViaRedirect":return qP;default:Zt(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=new va(2e3,1e4);class Yi extends PE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yi.currentPopupAction&&Yi.currentPopupAction.cancel(),Yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Cp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GP.get())};e()}}Yi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP="pendingRedirect",Ol=new Map;class QP extends PE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await YP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YP(t,e){const n=ZP(e),r=JP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function XP(t,e){Ol.set(t._key(),e)}function JP(t){return bn(t._redirectPersistence)}function ZP(t){return Dl(KP,t.config.apiKey,t.name)}async function eR(t,e,n=!1){if(on(t.app))return Promise.reject(Vn(t));const r=xi(t),i=zP(r,e),o=await new QP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=10*60*1e3;class nR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tR&&this.cachedEventUids.clear(),this.cachedEventUids.has(sv(e))}saveEventToCache(e){this.cachedEventUids.add(sv(e)),this.lastProcessedEventTime=Date.now()}}function sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oR=/^https?/;async function aR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iR(t);for(const n of e)try{if(lR(n))return}catch{}Zt(t,"unauthorized-domain")}function lR(t){const e=$h(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oR.test(n))return!1;if(sR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new va(3e4,6e4);function ov(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cR(t){return new Promise((e,n)=>{var r,i,s;function o(){ov(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ov(),n(un(t,"network-request-failed"))},timeout:uR.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const l=eP("iframefcb");return cn()[l]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},mE(`${ZA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ml=null,e})}let Ml=null;function dR(t){return Ml=Ml||cR(t),Ml}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=new va(5e3,15e3),fR="__/auth/iframe",pR="emulator/auth/iframe",mR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yR(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ep(e,pR):`https://${t.config.authDomain}/${fR}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},i=gR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ya(r).slice(1)}`}async function vR(t){const e=await dR(t),n=cn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:yR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=cn().setTimeout(()=>{s(o)},hR.get());function u(){cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wR=500,ER=600,TR="_blank",IR="http://localhost";class av{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SR(t,e,n,r=wR,i=ER){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},_R),{width:r.toString(),height:i.toString(),top:s,left:o}),c=at().toLowerCase();n&&(l=lE(c)?TR:n),oE(c)&&(e=e||IR,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[y,x])=>`${m}${y}=${x},`,"");if(WA(c)&&l!=="_self")return xR(e||"",l),new av(null);const f=window.open(e||"",l,h);G(f,t,"popup-blocked");try{f.focus()}catch{}return new av(f)}function xR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="__/auth/handler",kR="emulator/auth/handler",AR=encodeURIComponent("fac");async function lv(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:i};if(e instanceof yE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof wa){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${AR}=${encodeURIComponent(u)}`:"";return`${PR(t)}?${ya(l).slice(1)}${c}`}function PR({config:t}){return t.emulator?Ep(t,kR):`https://${t.authDomain}/${CR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="webStorageSupport";class RR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SE,this._completeRedirectFn=eR,this._overrideRedirectResult=XP}async _openPopup(e,n,r,i){var s;zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lv(e,n,r,$h(),i);return SR(e,o,Cp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lv(e,n,r,$h(),i);return DP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vR(e),r=new nR(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bd,{type:bd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bd];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fE()||aE()||Ip()}}const NR=RR;var uv="@firebase/auth",cv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OR(t){fn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pE(t)},c=new YA(r,i,s,u);return sP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fn(new Jt("auth-internal",e=>{const n=xi(e.getProvider("auth").getImmediate());return(r=>new bR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(uv,cv,DR(t)),Ut(uv,cv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=5*60,VR=zw("authIdTokenMaxAge")||MR;let dv=null;const LR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>VR)return;const i=n==null?void 0:n.token;dv!==i&&(dv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jR(t=vp()){const e=Si(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iP(t,{popupRedirectResolver:NR,persistence:[BP,RP,SE]}),r=zw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=LR(s.toString());xP(n,o,()=>o(n.currentUser)),SP(n,l=>o(l))}}const i=$w("auth");return i&&oP(n,`http://${i}`),n}function FR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",FR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OR("Browser");var hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oi,NE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function w(){}w.prototype=_.prototype,I.D=_.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(S,A,R){for(var C=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)C[Ot-2]=arguments[Ot];return _.prototype[A].apply(S,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,w){w||(w=0);var S=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)S[A]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(A=0;16>A;++A)S[A]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=I.g[0],w=I.g[1],A=I.g[2];var R=I.g[3],C=_+(R^w&(A^R))+S[0]+3614090360&4294967295;_=w+(C<<7&4294967295|C>>>25),C=R+(A^_&(w^A))+S[1]+3905402710&4294967295,R=_+(C<<12&4294967295|C>>>20),C=A+(w^R&(_^w))+S[2]+606105819&4294967295,A=R+(C<<17&4294967295|C>>>15),C=w+(_^A&(R^_))+S[3]+3250441966&4294967295,w=A+(C<<22&4294967295|C>>>10),C=_+(R^w&(A^R))+S[4]+4118548399&4294967295,_=w+(C<<7&4294967295|C>>>25),C=R+(A^_&(w^A))+S[5]+1200080426&4294967295,R=_+(C<<12&4294967295|C>>>20),C=A+(w^R&(_^w))+S[6]+2821735955&4294967295,A=R+(C<<17&4294967295|C>>>15),C=w+(_^A&(R^_))+S[7]+4249261313&4294967295,w=A+(C<<22&4294967295|C>>>10),C=_+(R^w&(A^R))+S[8]+1770035416&4294967295,_=w+(C<<7&4294967295|C>>>25),C=R+(A^_&(w^A))+S[9]+2336552879&4294967295,R=_+(C<<12&4294967295|C>>>20),C=A+(w^R&(_^w))+S[10]+4294925233&4294967295,A=R+(C<<17&4294967295|C>>>15),C=w+(_^A&(R^_))+S[11]+2304563134&4294967295,w=A+(C<<22&4294967295|C>>>10),C=_+(R^w&(A^R))+S[12]+1804603682&4294967295,_=w+(C<<7&4294967295|C>>>25),C=R+(A^_&(w^A))+S[13]+4254626195&4294967295,R=_+(C<<12&4294967295|C>>>20),C=A+(w^R&(_^w))+S[14]+2792965006&4294967295,A=R+(C<<17&4294967295|C>>>15),C=w+(_^A&(R^_))+S[15]+1236535329&4294967295,w=A+(C<<22&4294967295|C>>>10),C=_+(A^R&(w^A))+S[1]+4129170786&4294967295,_=w+(C<<5&4294967295|C>>>27),C=R+(w^A&(_^w))+S[6]+3225465664&4294967295,R=_+(C<<9&4294967295|C>>>23),C=A+(_^w&(R^_))+S[11]+643717713&4294967295,A=R+(C<<14&4294967295|C>>>18),C=w+(R^_&(A^R))+S[0]+3921069994&4294967295,w=A+(C<<20&4294967295|C>>>12),C=_+(A^R&(w^A))+S[5]+3593408605&4294967295,_=w+(C<<5&4294967295|C>>>27),C=R+(w^A&(_^w))+S[10]+38016083&4294967295,R=_+(C<<9&4294967295|C>>>23),C=A+(_^w&(R^_))+S[15]+3634488961&4294967295,A=R+(C<<14&4294967295|C>>>18),C=w+(R^_&(A^R))+S[4]+3889429448&4294967295,w=A+(C<<20&4294967295|C>>>12),C=_+(A^R&(w^A))+S[9]+568446438&4294967295,_=w+(C<<5&4294967295|C>>>27),C=R+(w^A&(_^w))+S[14]+3275163606&4294967295,R=_+(C<<9&4294967295|C>>>23),C=A+(_^w&(R^_))+S[3]+4107603335&4294967295,A=R+(C<<14&4294967295|C>>>18),C=w+(R^_&(A^R))+S[8]+1163531501&4294967295,w=A+(C<<20&4294967295|C>>>12),C=_+(A^R&(w^A))+S[13]+2850285829&4294967295,_=w+(C<<5&4294967295|C>>>27),C=R+(w^A&(_^w))+S[2]+4243563512&4294967295,R=_+(C<<9&4294967295|C>>>23),C=A+(_^w&(R^_))+S[7]+1735328473&4294967295,A=R+(C<<14&4294967295|C>>>18),C=w+(R^_&(A^R))+S[12]+2368359562&4294967295,w=A+(C<<20&4294967295|C>>>12),C=_+(w^A^R)+S[5]+4294588738&4294967295,_=w+(C<<4&4294967295|C>>>28),C=R+(_^w^A)+S[8]+2272392833&4294967295,R=_+(C<<11&4294967295|C>>>21),C=A+(R^_^w)+S[11]+1839030562&4294967295,A=R+(C<<16&4294967295|C>>>16),C=w+(A^R^_)+S[14]+4259657740&4294967295,w=A+(C<<23&4294967295|C>>>9),C=_+(w^A^R)+S[1]+2763975236&4294967295,_=w+(C<<4&4294967295|C>>>28),C=R+(_^w^A)+S[4]+1272893353&4294967295,R=_+(C<<11&4294967295|C>>>21),C=A+(R^_^w)+S[7]+4139469664&4294967295,A=R+(C<<16&4294967295|C>>>16),C=w+(A^R^_)+S[10]+3200236656&4294967295,w=A+(C<<23&4294967295|C>>>9),C=_+(w^A^R)+S[13]+681279174&4294967295,_=w+(C<<4&4294967295|C>>>28),C=R+(_^w^A)+S[0]+3936430074&4294967295,R=_+(C<<11&4294967295|C>>>21),C=A+(R^_^w)+S[3]+3572445317&4294967295,A=R+(C<<16&4294967295|C>>>16),C=w+(A^R^_)+S[6]+76029189&4294967295,w=A+(C<<23&4294967295|C>>>9),C=_+(w^A^R)+S[9]+3654602809&4294967295,_=w+(C<<4&4294967295|C>>>28),C=R+(_^w^A)+S[12]+3873151461&4294967295,R=_+(C<<11&4294967295|C>>>21),C=A+(R^_^w)+S[15]+530742520&4294967295,A=R+(C<<16&4294967295|C>>>16),C=w+(A^R^_)+S[2]+3299628645&4294967295,w=A+(C<<23&4294967295|C>>>9),C=_+(A^(w|~R))+S[0]+4096336452&4294967295,_=w+(C<<6&4294967295|C>>>26),C=R+(w^(_|~A))+S[7]+1126891415&4294967295,R=_+(C<<10&4294967295|C>>>22),C=A+(_^(R|~w))+S[14]+2878612391&4294967295,A=R+(C<<15&4294967295|C>>>17),C=w+(R^(A|~_))+S[5]+4237533241&4294967295,w=A+(C<<21&4294967295|C>>>11),C=_+(A^(w|~R))+S[12]+1700485571&4294967295,_=w+(C<<6&4294967295|C>>>26),C=R+(w^(_|~A))+S[3]+2399980690&4294967295,R=_+(C<<10&4294967295|C>>>22),C=A+(_^(R|~w))+S[10]+4293915773&4294967295,A=R+(C<<15&4294967295|C>>>17),C=w+(R^(A|~_))+S[1]+2240044497&4294967295,w=A+(C<<21&4294967295|C>>>11),C=_+(A^(w|~R))+S[8]+1873313359&4294967295,_=w+(C<<6&4294967295|C>>>26),C=R+(w^(_|~A))+S[15]+4264355552&4294967295,R=_+(C<<10&4294967295|C>>>22),C=A+(_^(R|~w))+S[6]+2734768916&4294967295,A=R+(C<<15&4294967295|C>>>17),C=w+(R^(A|~_))+S[13]+1309151649&4294967295,w=A+(C<<21&4294967295|C>>>11),C=_+(A^(w|~R))+S[4]+4149444226&4294967295,_=w+(C<<6&4294967295|C>>>26),C=R+(w^(_|~A))+S[11]+3174756917&4294967295,R=_+(C<<10&4294967295|C>>>22),C=A+(_^(R|~w))+S[2]+718787259&4294967295,A=R+(C<<15&4294967295|C>>>17),C=w+(R^(A|~_))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(A+(C<<21&4294967295|C>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var w=_-this.blockSize,S=this.B,A=this.h,R=0;R<_;){if(A==0)for(;R<=w;)i(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<_;)if(S[A++]=I.charCodeAt(R++),A==this.blockSize){i(this,S),A=0;break}}else for(;R<_;)if(S[A++]=I[R++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var w=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=w&255,w/=256;for(this.u(I),I=Array(16),_=w=0;4>_;++_)for(var S=0;32>S;S+=8)I[w++]=this.g[_]>>>S&255;return I};function s(I,_){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=_(I)}function o(I,_){this.h=_;for(var w=[],S=!0,A=I.length-1;0<=A;A--){var R=I[A]|0;S&&R==_||(w[A]=R,S=!1)}this.g=w}var l={};function u(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return b(c(-I));for(var _=[],w=1,S=0;I>=w;S++)_[S]=I/w|0,w*=4294967296;return new o(_,0)}function h(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return b(h(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(_,8)),S=f,A=0;A<I.length;A+=8){var R=Math.min(8,I.length-A),C=parseInt(I.substring(A,A+R),_);8>R?(R=c(Math.pow(_,R)),S=S.j(R).add(c(C))):(S=S.j(w),S=S.add(c(C)))}return S}var f=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var I=0,_=1,w=0;w<this.g.length;w++){var S=this.i(w);I+=(0<=S?S:4294967296+S)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(P(this))return"-"+b(this).toString(I);for(var _=c(Math.pow(I,6)),w=this,S="";;){var A=M(w,_).g;w=T(w,A.j(_));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=A,x(w))return R+S;for(;6>R.length;)R="0"+R;S=R+S}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=T(this,I),P(I)?-1:x(I)?0:1};function b(I){for(var _=I.g.length,w=[],S=0;S<_;S++)w[S]=~I.g[S];return new o(w,~I.h).add(m)}t.abs=function(){return P(this)?b(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],S=0,A=0;A<=_;A++){var R=S+(this.i(A)&65535)+(I.i(A)&65535),C=(R>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);S=C>>>16,R&=65535,C&=65535,w[A]=C<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(I,_){return I.add(b(_))}t.j=function(I){if(x(this)||x(I))return f;if(P(this))return P(I)?b(this).j(b(I)):b(b(this).j(I));if(P(I))return b(this.j(b(I)));if(0>this.l(y)&&0>I.l(y))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,w=[],S=0;S<2*_;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var A=0;A<I.g.length;A++){var R=this.i(S)>>>16,C=this.i(S)&65535,Ot=I.i(A)>>>16,Br=I.i(A)&65535;w[2*S+2*A]+=C*Br,E(w,2*S+2*A),w[2*S+2*A+1]+=R*Br,E(w,2*S+2*A+1),w[2*S+2*A+1]+=C*Ot,E(w,2*S+2*A+1),w[2*S+2*A+2]+=R*Ot,E(w,2*S+2*A+2)}for(S=0;S<_;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=_;S<2*_;S++)w[S]=0;return new o(w,0)};function E(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function k(I,_){this.g=I,this.h=_}function M(I,_){if(x(_))throw Error("division by zero");if(x(I))return new k(f,f);if(P(I))return _=M(b(I),_),new k(b(_.g),b(_.h));if(P(_))return _=M(I,b(_)),new k(b(_.g),_.h);if(30<I.g.length){if(P(I)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var w=m,S=_;0>=S.l(I);)w=F(w),S=F(S);var A=U(w,1),R=U(S,1);for(S=U(S,2),w=U(w,2);!x(S);){var C=R.add(S);0>=C.l(I)&&(A=A.add(w),R=C),S=U(S,1),w=U(w,1)}return _=T(I,A.j(_)),new k(A,_)}for(A=f;0<=I.l(_);){for(w=Math.max(1,Math.floor(I.m()/_.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),R=c(w),C=R.j(_);P(C)||0<C.l(I);)w-=S,R=c(w),C=R.j(_);x(R)&&(R=m),A=A.add(R),I=T(I,C)}return new k(A,I)}t.A=function(I){return M(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)&I.i(S);return new o(w,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)|I.i(S);return new o(w,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)^I.i(S);return new o(w,this.h^I.h)};function F(I){for(var _=I.g.length+1,w=[],S=0;S<_;S++)w[S]=I.i(S)<<1|I.i(S-1)>>>31;return new o(w,I.h)}function U(I,_){var w=_>>5;_%=32;for(var S=I.g.length-w,A=[],R=0;R<S;R++)A[R]=0<_?I.i(R+w)>>>_|I.i(R+w+1)<<32-_:I.i(R+w);return new o(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,NE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,oi=o}).apply(typeof hv<"u"?hv:typeof self<"u"?self:typeof window<"u"?window:{});var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bE,go,DE,Vl,qh,OE,ME,VE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hl=="object"&&hl];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var N=a[v];if(!(N in p))break e;p=p[N]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var p=0,v=!1,N={next:function(){if(!v&&p<a.length){var O=p++;return{value:d(O,a[O]),done:!1}}return v=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,p){return a.call.apply(a.bind,arguments)}function f(a,d,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,v),a.apply(d,N)}}return function(){return a.apply(d,arguments)}}function m(a,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function y(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function x(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,N,O){for(var $=Array(arguments.length-2),he=2;he<arguments.length;he++)$[he-2]=arguments[he];return d.prototype[N].apply(v,$)}}function P(a){const d=a.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function b(a,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const N=a.length||0,O=v.length||0;a.length=N+O;for(let $=0;$<O;$++)a[N+$]=v[$]}else a.push(v)}}class T{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var F=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function U(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function I(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function _(a){const d={};for(const p in a)d[p]=a[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,d){let p,v;for(let N=1;N<arguments.length;N++){v=arguments[N];for(p in v)a[p]=v[p];for(let O=0;O<w.length;O++)p=w[O],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function A(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function R(a){l.setTimeout(()=>{throw a},0)}function C(){var a=Q;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ot{constructor(){this.h=this.g=null}add(d,p){const v=Br.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Br=new T(()=>new js,a=>a.reset());class js{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let yn,B=!1,Q=new Ot,J=()=>{const a=l.Promise.resolve(void 0);yn=()=>{a.then(_e)}};var _e=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(p){R(p)}var d=Br;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}B=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function _n(a,d){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(F){e:{try{M(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:wn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&_n.aa.h.call(this)}}x(_n,ke);var wn={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),F1=0;function U1(a,d,p,v,N){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=N,this.key=++F1,this.da=this.fa=!1}function Ra(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Na(a){this.src=a,this.g={},this.h=0}Na.prototype.add=function(a,d,p,v,N){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var $=Nc(a,d,v,N);return-1<$?(d=a[$],p||(d.fa=!1)):(d=new U1(d,this.src,O,!!v,N),d.fa=p,a.push(d)),d};function Rc(a,d){var p=d.type;if(p in a.g){var v=a.g[p],N=Array.prototype.indexOf.call(v,d,void 0),O;(O=0<=N)&&Array.prototype.splice.call(v,N,1),O&&(Ra(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Nc(a,d,p,v){for(var N=0;N<a.length;++N){var O=a[N];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==v)return N}return-1}var bc="closure_lm_"+(1e6*Math.random()|0),Dc={};function wm(a,d,p,v,N){if(Array.isArray(d)){for(var O=0;O<d.length;O++)wm(a,d[O],p,v,N);return null}return p=Im(p),a&&a[En]?a.K(d,p,c(v)?!!v.capture:!!v,N):$1(a,d,p,!1,v,N)}function $1(a,d,p,v,N,O){if(!d)throw Error("Invalid event type");var $=c(N)?!!N.capture:!!N,he=Mc(a);if(he||(a[bc]=he=new Na(a)),p=he.add(d,p,v,$,O),p.proxy)return p;if(v=B1(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)vn||(N=$),N===void 0&&(N=!1),a.addEventListener(d.toString(),v,N);else if(a.attachEvent)a.attachEvent(Tm(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function B1(){function a(p){return d.call(a.src,a.listener,p)}const d=z1;return a}function Em(a,d,p,v,N){if(Array.isArray(d))for(var O=0;O<d.length;O++)Em(a,d[O],p,v,N);else v=c(v)?!!v.capture:!!v,p=Im(p),a&&a[En]?(a=a.i,d=String(d).toString(),d in a.g&&(O=a.g[d],p=Nc(O,p,v,N),-1<p&&(Ra(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete a.g[d],a.h--)))):a&&(a=Mc(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Nc(d,p,v,N)),(p=-1<a?d[a]:null)&&Oc(p))}function Oc(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[En])Rc(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(Tm(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=Mc(d))?(Rc(p,a),p.h==0&&(p.src=null,d[bc]=null)):Ra(a)}}}function Tm(a){return a in Dc?Dc[a]:Dc[a]="on"+a}function z1(a,d){if(a.da)a=!0;else{d=new _n(d,this);var p=a.listener,v=a.ha||a.src;a.fa&&Oc(a),a=p.call(v,d)}return a}function Mc(a){return a=a[bc],a instanceof Na?a:null}var Vc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Im(a){return typeof a=="function"?a:(a[Vc]||(a[Vc]=function(d){return a.handleEvent(d)}),a[Vc])}function Qe(){de.call(this),this.i=new Na(this),this.M=this,this.F=null}x(Qe,de),Qe.prototype[En]=!0,Qe.prototype.removeEventListener=function(a,d,p,v){Em(this,a,d,p,v)};function lt(a,d){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new ke(d,a);else if(d instanceof ke)d.target=d.target||a;else{var N=d;d=new ke(v,a),S(d,N)}if(N=!0,p)for(var O=p.length-1;0<=O;O--){var $=d.g=p[O];N=ba($,v,!0,d)&&N}if($=d.g=a,N=ba($,v,!0,d)&&N,N=ba($,v,!1,d)&&N,p)for(O=0;O<p.length;O++)$=d.g=p[O],N=ba($,v,!1,d)&&N}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],v=0;v<p.length;v++)Ra(p[v]);delete a.g[d],a.h--}}this.F=null},Qe.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},Qe.prototype.L=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function ba(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,O=0;O<d.length;++O){var $=d[O];if($&&!$.da&&$.capture==p){var he=$.listener,$e=$.ha||$.src;$.fa&&Rc(a.i,$),N=he.call($e,v)!==!1&&N}}return N&&!v.defaultPrevented}function Sm(a,d,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function xm(a){a.g=Sm(()=>{a.g=null,a.i&&(a.i=!1,xm(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class W1 extends de{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:xm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(a){de.call(this),this.h=a,this.g={}}x(Fs,de);var Cm=[];function km(a){U(a.g,function(d,p){this.g.hasOwnProperty(p)&&Oc(d)},a),a.g={}}Fs.prototype.N=function(){Fs.aa.N.call(this),km(this)},Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lc=l.JSON.stringify,q1=l.JSON.parse,H1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function jc(){}jc.prototype.h=null;function Am(a){return a.h||(a.h=a.i())}function Pm(){}var Us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fc(){ke.call(this,"d")}x(Fc,ke);function Uc(){ke.call(this,"c")}x(Uc,ke);var zr={},Rm=null;function Da(){return Rm=Rm||new Qe}zr.La="serverreachability";function Nm(a){ke.call(this,zr.La,a)}x(Nm,ke);function $s(a){const d=Da();lt(d,new Nm(d))}zr.STAT_EVENT="statevent";function bm(a,d){ke.call(this,zr.STAT_EVENT,a),this.stat=d}x(bm,ke);function ut(a){const d=Da();lt(d,new bm(d,a))}zr.Ma="timingevent";function Dm(a,d){ke.call(this,zr.Ma,a),this.size=d}x(Dm,ke);function Bs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function zs(){this.g=!0}zs.prototype.xa=function(){this.g=!1};function G1(a,d,p,v,N,O){a.info(function(){if(a.g)if(O)for(var $="",he=O.split("&"),$e=0;$e<he.length;$e++){var se=he[$e].split("=");if(1<se.length){var Ye=se[0];se=se[1];var Xe=Ye.split("_");$=2<=Xe.length&&Xe[1]=="type"?$+(Ye+"="+se+"&"):$+(Ye+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+v+") [attempt "+N+"]: "+d+`
`+p+`
`+$})}function K1(a,d,p,v,N,O,$){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+N+"]: "+d+`
`+p+`
`+O+" "+$})}function Pi(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Y1(a,p)+(v?" "+v:"")})}function Q1(a,d){a.info(function(){return"TIMEOUT: "+d})}zs.prototype.info=function(){};function Y1(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var N=v[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<N.length;$++)N[$]=""}}}}return Lc(p)}catch{return d}}var Oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Om={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$c;function Ma(){}x(Ma,jc),Ma.prototype.g=function(){return new XMLHttpRequest},Ma.prototype.i=function(){return{}},$c=new Ma;function Yn(a,d,p,v){this.j=a,this.i=d,this.l=p,this.R=v||1,this.U=new Fs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mm}function Mm(){this.i=null,this.g="",this.h=!1}var Vm={},Bc={};function zc(a,d,p){a.L=1,a.v=Fa(Tn(d)),a.m=p,a.P=!0,Lm(a,null)}function Lm(a,d){a.F=Date.now(),Va(a),a.A=Tn(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Xm(p.i,"t",v),a.C=0,p=a.j.J,a.h=new Mm,a.g=mg(a.j,p?d:null,!a.m),0<a.O&&(a.M=new W1(m(a.Y,a,a.g),a.O)),d=a.U,p=a.g,v=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Cm[0]=N.toString()),N=Cm);for(var O=0;O<N.length;O++){var $=wm(p,N[O],v||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),$s(),G1(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const d=this.M;d&&In(a)==3?d.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=In(this.g);var d=this.g.Ba();const bi=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||ig(this.g)))){this.J||Xe!=4||d==7||(d==8||0>=bi?$s(3):$s(2)),Wc(this);var p=this.g.Z();this.X=p;t:if(jm(this)){var v=ig(this.g);a="";var N=v.length,O=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),Ws(this);var $="";break t}this.h.i=new l.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(O&&d==N-1)});v.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,K1(this.i,this.u,this.A,this.l,this.R,Xe,p),this.o){if(this.T&&!this.K){t:{if(this.g){var he,$e=this.g;if((he=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(he)){var se=he;break t}}se=null}if(p=se)Pi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qc(this,p);else{this.o=!1,this.s=3,ut(12),Wr(this),Ws(this);break e}}if(this.P){p=!0;let zt;for(;!this.J&&this.C<$.length;)if(zt=X1(this,$),zt==Bc){Xe==4&&(this.s=4,ut(14),p=!1),Pi(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Vm){this.s=4,ut(15),Pi(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else Pi(this.i,this.l,zt,null),qc(this,zt);if(jm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||$.length!=0||this.h.h||(this.s=1,ut(16),p=!1),this.o=this.o&&p,!p)Pi(this.i,this.l,$,"[Invalid Chunked Response]"),Wr(this),Ws(this);else if(0<$.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Xc(Ye),Ye.M=!0,ut(11))}}else Pi(this.i,this.l,$,null),qc(this,$);Xe==4&&Wr(this),this.o&&!this.J&&(Xe==4?dg(this.j,this):(this.o=!1,Va(this)))}else pI(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Wr(this),Ws(this)}}}catch{}finally{}};function jm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function X1(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?Bc:(p=Number(d.substring(p,v)),isNaN(p)?Vm:(v+=1,v+p>d.length?Bc:(d=d.slice(v,v+p),a.C=v+p,d)))}Yn.prototype.cancel=function(){this.J=!0,Wr(this)};function Va(a){a.S=Date.now()+a.I,Fm(a,a.I)}function Fm(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bs(m(a.ba,a),d)}function Wc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Q1(this.i,this.A),this.L!=2&&($s(),ut(17)),Wr(this),this.s=2,Ws(this)):Fm(this,this.S-a)};function Ws(a){a.j.G==0||a.J||dg(a.j,a)}function Wr(a){Wc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,km(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function qc(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||Hc(p.h,a))){if(!a.K&&Hc(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var N=v;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)qa(p),za(p);else break e;Yc(p),ut(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=Bs(m(p.Za,p),6e3));if(1>=Bm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Hr(p,11)}else if((a.K||p.g==a)&&qa(p),!E(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let se=N[d];if(p.T=se[0],se=se[1],p.G==2)if(se[0]=="c"){p.K=se[1],p.ia=se[2];const Ye=se[3];Ye!=null&&(p.la=Ye,p.j.info("VER="+p.la));const Xe=se[4];Xe!=null&&(p.Aa=Xe,p.j.info("SVER="+p.Aa));const bi=se[5];bi!=null&&typeof bi=="number"&&0<bi&&(v=1.5*bi,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const zt=a.g;if(zt){const Ga=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ga){var O=v.h;O.g||Ga.indexOf("spdy")==-1&&Ga.indexOf("quic")==-1&&Ga.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Gc(O,O.h),O.h=null))}if(v.D){const Jc=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Jc&&(v.ya=Jc,pe(v.I,v.D,Jc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var $=a;if(v.qa=pg(v,v.J?v.ia:null,v.W),$.K){zm(v.h,$);var he=$,$e=v.L;$e&&(he.I=$e),he.B&&(Wc(he),Va(he)),v.g=$}else ug(v);0<p.i.length&&Wa(p)}else se[0]!="stop"&&se[0]!="close"||Hr(p,7);else p.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Hr(p,7):Qc(p):se[0]!="noop"&&p.l&&p.l.ta(se),p.v=0)}}$s(4)}catch{}}var J1=class{constructor(a,d){this.g=a,this.map=d}};function Um(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $m(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bm(a){return a.h?1:a.g?a.g.size:0}function Hc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Gc(a,d){a.g?a.g.add(d):a.h=d}function zm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Um.prototype.cancel=function(){if(this.i=Wm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Wm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return P(a.i)}function Z1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,v=0;v<p;v++)d.push(a[v]);return d}d=[],p=0;for(v in a)d[p++]=a[v];return d}function eI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const v in a)d[p++]=v;return d}}}function qm(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=eI(a),v=Z1(a),N=v.length,O=0;O<N;O++)d.call(void 0,v[O],p&&p[O],a)}var Hm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tI(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),N=null;if(0<=v){var O=a[p].substring(0,v);N=a[p].substring(v+1)}else O=a[p];d(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof qr){this.h=a.h,La(this,a.j),this.o=a.o,this.g=a.g,ja(this,a.s),this.l=a.l;var d=a.i,p=new Gs;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Gm(this,p),this.m=a.m}else a&&(d=String(a).match(Hm))?(this.h=!1,La(this,d[1]||"",!0),this.o=qs(d[2]||""),this.g=qs(d[3]||"",!0),ja(this,d[4]),this.l=qs(d[5]||"",!0),Gm(this,d[6]||"",!0),this.m=qs(d[7]||"")):(this.h=!1,this.i=new Gs(null,this.h))}qr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Hs(d,Km,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Hs(d,Km,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Hs(p,p.charAt(0)=="/"?iI:rI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Hs(p,oI)),a.join("")};function Tn(a){return new qr(a)}function La(a,d,p){a.j=p?qs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ja(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Gm(a,d,p){d instanceof Gs?(a.i=d,aI(a.i,a.h)):(p||(d=Hs(d,sI)),a.i=new Gs(d,a.h))}function pe(a,d,p){a.i.set(d,p)}function Fa(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,nI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Km=/[#\/\?@]/g,rI=/[#\?:]/g,iI=/[#\?]/g,sI=/[#\?@]/g,oI=/#/g;function Gs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&tI(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Gs.prototype,t.add=function(a,d){Xn(this),this.i=null,a=Ri(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function Qm(a,d){Xn(a),d=Ri(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Ym(a,d){return Xn(a),d=Ri(a,d),a.g.has(d)}t.forEach=function(a,d){Xn(this),this.g.forEach(function(p,v){p.forEach(function(N){a.call(d,N,v,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const N=a[v];for(let O=0;O<N.length;O++)p.push(d[v])}return p},t.V=function(a){Xn(this);let d=[];if(typeof a=="string")Ym(this,a)&&(d=d.concat(this.g.get(Ri(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},t.set=function(a,d){return Xn(this),this.i=null,a=Ri(this,a),Ym(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Xm(a,d,p){Qm(a,d),0<p.length&&(a.i=null,a.g.set(Ri(a,d),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const O=encodeURIComponent(String(v)),$=this.V(v);for(v=0;v<$.length;v++){var N=O;$[v]!==""&&(N+="="+encodeURIComponent(String($[v]))),a.push(N)}}return this.i=a.join("&")};function Ri(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function aI(a,d){d&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(p,v){var N=v.toLowerCase();v!=N&&(Qm(this,v),Xm(this,N,p))},a)),a.j=d}function lI(a,d){const p=new zs;if(l.Image){const v=new Image;v.onload=y(Jn,p,"TestLoadImage: loaded",!0,d,v),v.onerror=y(Jn,p,"TestLoadImage: error",!1,d,v),v.onabort=y(Jn,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=y(Jn,p,"TestLoadImage: timeout",!1,d,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function uI(a,d){const p=new zs,v=new AbortController,N=setTimeout(()=>{v.abort(),Jn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(O=>{clearTimeout(N),O.ok?Jn(p,"TestPingServer: ok",!0,d):Jn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),Jn(p,"TestPingServer: error",!1,d)})}function Jn(a,d,p,v,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),v(p)}catch{}}function cI(){this.g=new H1}function dI(a,d,p){const v=p||"";try{qm(a,function(N,O){let $=N;c(N)&&($=Lc(N)),d.push(v+O+"="+encodeURIComponent($))})}catch(N){throw d.push(v+"type="+encodeURIComponent("_badmap")),N}}function Ua(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Ua,jc),Ua.prototype.g=function(){return new $a(this.l,this.j)},Ua.prototype.i=function(a){return function(){return a}}({});function $a(a,d){Qe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x($a,Qe),t=$a.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Qs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qs(this)),this.g&&(this.readyState=3,Qs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ks(this):Qs(this),this.readyState==3&&Jm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ks(this))},t.Qa=function(a){this.g&&(this.response=a,Ks(this))},t.ga=function(){this.g&&Ks(this)};function Ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qs(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Qs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty($a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zm(a){let d="";return U(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function Kc(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Zm(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):pe(a,d,p))}function Se(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Se,Qe);var hI=/^https?$/i,fI=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$c.g(),this.v=this.o?Am(this.o):Am($c),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){eg(this,O);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var N in v)p.set(N,v[N]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const O of v.keys())p.set(O,v.get(O));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fI,d,void 0))||v||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of p)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rg(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){eg(this,O)}};function eg(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,tg(a),Ba(a)}function tg(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),Ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ba(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ng(this):this.bb())},t.bb=function(){ng(this)};function ng(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)Sm(a.Ea,0,a);else if(lt(a,"readystatechange"),In(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=$===0){var N=String(a.D).match(Hm)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),v=!hI.test(N?N.toLowerCase():"")}p=v}if(p)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var O=2<In(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",tg(a)}}finally{Ba(a)}}}}function Ba(a,d){if(a.g){rg(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||lt(a,"ready");try{p.onreadystatechange=v}catch{}}}function rg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),q1(d)}};function ig(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pI(a){const d={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(E(a[v]))continue;var p=A(a[v]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[N]||[];d[N]=O,O.push(p)}I(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ys(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function sg(a){this.Aa=0,this.i=[],this.j=new zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ys("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ys("baseRetryDelayMs",5e3,a),this.cb=Ys("retryDelaySeedMs",1e4,a),this.Wa=Ys("forwardChannelMaxRetries",2,a),this.wa=Ys("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Um(a&&a.concurrentRequestLimit),this.Da=new cI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sg.prototype,t.la=8,t.G=1,t.connect=function(a,d,p,v){ut(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=pg(this,null,this.W),Wa(this)};function Qc(a){if(og(a),a.G==3){var d=a.U++,p=Tn(a.I);if(pe(p,"SID",a.K),pe(p,"RID",d),pe(p,"TYPE","terminate"),Xs(a,p),d=new Yn(a,a.j,d),d.L=2,d.v=Fa(Tn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=mg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Va(d)}fg(a)}function za(a){a.g&&(Xc(a),a.g.cancel(),a.g=null)}function og(a){za(a),a.u&&(l.clearTimeout(a.u),a.u=null),qa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Wa(a){if(!$m(a.h)&&!a.s){a.s=!0;var d=a.Ga;yn||J(),B||(yn(),B=!0),Q.add(d,a),a.B=0}}function mI(a,d){return Bm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bs(m(a.Ga,a,d),hg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Yn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=lg(this,N,d),p=Tn(this.I),pe(p,"RID",a),pe(p,"CVER",22),this.D&&pe(p,"X-HTTP-Session-Id",this.D),Xs(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(Zm(O)))+"&"+d:this.m&&Kc(p,this.m,O)),Gc(this.h,N),this.Ua&&pe(p,"TYPE","init"),this.P?(pe(p,"$req",d),pe(p,"SID","null"),N.T=!0,zc(N,p,null)):zc(N,p,d),this.G=2}}else this.G==3&&(a?ag(this,a):this.i.length==0||$m(this.h)||ag(this))};function ag(a,d){var p;d?p=d.l:p=a.U++;const v=Tn(a.I);pe(v,"SID",a.K),pe(v,"RID",p),pe(v,"AID",a.T),Xs(a,v),a.m&&a.o&&Kc(v,a.m,a.o),p=new Yn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=lg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Gc(a.h,p),zc(p,v,d)}function Xs(a,d){a.H&&U(a.H,function(p,v){pe(d,v,p)}),a.l&&qm({},function(p,v){pe(d,v,p)})}function lg(a,d,p){p=Math.min(a.i.length,p);var v=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let O=-1;for(;;){const $=["count="+p];O==-1?0<p?(O=N[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let he=!0;for(let $e=0;$e<p;$e++){let se=N[$e].g;const Ye=N[$e].map;if(se-=O,0>se)O=Math.max(0,N[$e].g-100),he=!1;else try{dI(Ye,$,"req"+se+"_")}catch{v&&v(Ye)}}if(he){v=$.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,v}function ug(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;yn||J(),B||(yn(),B=!0),Q.add(d,a),a.v=0}}function Yc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bs(m(a.Fa,a),hg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,cg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),za(this),cg(this))};function Xc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function cg(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Tn(a.qa);pe(d,"RID","rpc"),pe(d,"SID",a.K),pe(d,"AID",a.T),pe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(d,"TO",a.ja),pe(d,"TYPE","xmlhttp"),Xs(a,d),a.m&&a.o&&Kc(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Fa(Tn(d)),p.m=null,p.P=!0,Lm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,za(this),Yc(this),ut(19))};function qa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function dg(a,d){var p=null;if(a.g==d){qa(a),Xc(a),a.g=null;var v=2}else if(Hc(a.h,d))p=d.D,zm(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=a.B;v=Da(),lt(v,new Dm(v,p)),Wa(a)}else ug(a);else if(N=d.s,N==3||N==0&&0<d.X||!(v==1&&mI(a,d)||v==2&&Yc(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),N){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function hg(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function Hr(a,d){if(a.j.info("Error code "+d),d==2){var p=m(a.fb,a),v=a.Xa;const N=!v;v=new qr(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||La(v,"https"),Fa(v),N?lI(v.toString(),p):uI(v.toString(),p)}else ut(2);a.G=0,a.l&&a.l.sa(d),fg(a),og(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function fg(a){if(a.G=0,a.ka=[],a.l){const d=Wm(a.h);(d.length!=0||a.i.length!=0)&&(b(a.ka,d),b(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function pg(a,d,p){var v=p instanceof qr?Tn(p):new qr(p);if(v.g!="")d&&(v.g=d+"."+v.g),ja(v,v.s);else{var N=l.location;v=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var O=new qr(null);v&&La(O,v),d&&(O.g=d),N&&ja(O,N),p&&(O.l=p),v=O}return p=a.D,d=a.ya,p&&d&&pe(v,p,d),pe(v,"VER",a.la),Xs(a,v),v}function mg(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Se(new Ua({eb:p})):new Se(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function gg(){}t=gg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ha(){}Ha.prototype.g=function(a,d){return new St(a,d)};function St(a,d){Qe.call(this),this.g=new sg(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!E(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ni(this)}x(St,Qe),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Qc(this.g)},St.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Lc(a),a=p);d.i.push(new J1(d.Ya++,a)),d.G==3&&Wa(d)},St.prototype.N=function(){this.g.l=null,delete this.j,Qc(this.g),delete this.g,St.aa.N.call(this)};function yg(a){Fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}x(yg,Fc);function vg(){Uc.call(this),this.status=1}x(vg,Uc);function Ni(a){this.g=a}x(Ni,gg),Ni.prototype.ua=function(){lt(this.g,"a")},Ni.prototype.ta=function(a){lt(this.g,new yg(a))},Ni.prototype.sa=function(a){lt(this.g,new vg)},Ni.prototype.ra=function(){lt(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,VE=function(){return new Ha},ME=function(){return Da()},OE=zr,qh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oa.NO_ERROR=0,Oa.TIMEOUT=8,Oa.HTTP_ERROR=6,Vl=Oa,Om.COMPLETE="complete",DE=Om,Pm.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,go=Pm,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,bE=Se}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});const fv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new nc("@firebase/firestore");function oo(){return pi.logLevel}function q(t,...e){if(pi.logLevel<=ne.DEBUG){const n=e.map(Ap);pi.debug(`Firestore (${Ds}): ${t}`,...n)}}function Wn(t,...e){if(pi.logLevel<=ne.ERROR){const n=e.map(Ap);pi.error(`Firestore (${Ds}): ${t}`,...n)}}function ys(t,...e){if(pi.logLevel<=ne.WARN){const n=e.map(Ap);pi.warn(`Firestore (${Ds}): ${t}`,...n)}}function Ap(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function ce(t,e){t||K()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class $R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BR{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ln,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new LE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new tt(e)}}class zR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class WR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new qR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=GR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ve(0,0))}static max(){return new Y(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ia.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ia?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends ia{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const KR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends ia{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return KR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ge.fromString(e))}static fromName(e){return new H(ge.fromString(e).popFirst(5))}static empty(){return new H(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ge(e.slice()))}}function QR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Rr(i,H.empty(),e)}function YR(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(Y.min(),H.empty(),-1)}static max(){return new Rr(Y.max(),H.empty(),-1)}}function XR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==JR)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function eN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ia(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pp.oe=-1;function oc(t){return t==null}function Tu(t){return t===0&&1/t==-1/0}function tN(t){return typeof t=="number"&&Number.isInteger(t)&&!Tu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function FE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}}class fl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mv(this.data.getIterator())}getIteratorFrom(e){return new mv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class mv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new kt([])}unionWith(e){let n=new He(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new UE("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const nN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(ce(!!t),typeof t=="string"){let e=0;const n=nN.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Np(t){const e=t.mapValue.fields.__previous_value__;return Rp(e)?Np(e):e}function sa(t){const e=Nr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class oa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rp(t)?4:sN(t)?9007199254740991:iN(t)?10:11:K()}function pn(t,e){if(t===e)return!0;const n=gi(t);if(n!==gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sa(t).isEqual(sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Nr(i.timestampValue),l=Nr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return mi(i.bytesValue).isEqual(mi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?Tu(o)===Tu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(pv(o)!==pv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!pn(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function aa(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=gi(t),r=gi(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return gv(t.timestampValue,e.timestampValue);case 4:return gv(sa(t),sa(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=mi(s),u=mi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=oe(l[c],u[c]);if(h!==0)return h}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Ae(s.latitude),Ae(o.latitude));return l!==0?l:oe(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,h;const f=s.fields||{},m=o.fields||{},y=(l=f.value)===null||l===void 0?void 0:l.arrayValue,x=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=oe(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:yv(y,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===pl.mapValue&&o===pl.mapValue)return 0;if(s===pl.mapValue)return 1;if(o===pl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=oe(u[f],h[f]);if(m!==0)return m;const y=_s(l[u[f]],c[h[f]]);if(y!==0)return y}return oe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw K()}}function gv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Nr(t),r=Nr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function yv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=_s(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function ws(t){return Hh(t)}function Hh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Hh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Hh(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function vv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gh(t){return!!t&&"integerValue"in t}function bp(t){return!!t&&"arrayValue"in t}function _v(t){return!!t&&"nullValue"in t}function wv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ll(t){return!!t&&"mapValue"in t}function iN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ro(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ro(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ro(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ro(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(Ro(this.value))}}function $E(t){const e=[];return Ci(t.fields,(n,r)=>{const i=new We([n]);if(Ll(r)){const s=$E(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,Y.min(),Y.min(),Y.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new rt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new rt(e,2,n,Y.min(),Y.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,Y.min(),Y.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.position=e,this.inclusive=n}}function Ev(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n="asc"){this.field=e,this.dir=n}}function oN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{}class De extends BE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lN(e,n,r):n==="array-contains"?new dN(e,r):n==="in"?new hN(e,r):n==="not-in"?new fN(e,r):n==="array-contains-any"?new pN(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uN(e,r):new cN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&gi(this.value)===gi(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends BE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new en(e,n)}matches(e){return zE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zE(t){return t.op==="and"}function WE(t){return aN(t)&&zE(t)}function aN(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Kh(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(WE(t))return t.filters.map(e=>Kh(e)).join(",");{const e=t.filters.map(n=>Kh(n)).join(",");return`${t.op}(${e})`}}function qE(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&pn(r.value,i.value)}(t,e):t instanceof en?function(r,i){return i instanceof en&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&qE(o,i.filters[l]),!0):!1}(t,e):void K()}function HE(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(HE).join(" ,")+"}"}(t):"Filter"}class lN extends De{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class uN extends De{constructor(e,n){super(e,"in",n),this.keys=GE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cN extends De{constructor(e,n){super(e,"not-in",n),this.keys=GE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function GE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class dN extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bp(n)&&aa(n.arrayValue,this.value)}}class hN extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class fN extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!aa(this.value.arrayValue,n)}}class pN extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Iv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mN(t,e,n,r,i,s,o)}function Dp(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ws(r)).join(",")),e.ue=n}return e.ue}function Op(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tv(t.startAt,e.startAt)&&Tv(t.endAt,e.endAt)}function Qh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gN(t,e,n,r,i,s,o,l){return new Os(t,e,n,r,i,s,o,l)}function ac(t){return new Os(t)}function Sv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function KE(t){return t.collectionGroup!==null}function No(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new la(s,r))}),n.has(We.keyField().canonicalString())||e.ce.push(new la(We.keyField(),r))}return e.ce}function dn(t){const e=X(t);return e.le||(e.le=yN(e,No(t))),e.le}function yN(t,e){if(t.limitType==="F")return Iv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new la(i.field,s)});const n=t.endAt?new Iu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Iu(t.startAt.position,t.startAt.inclusive):null;return Iv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yh(t,e){const n=t.filters.concat([e]);return new Os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xh(t,e,n){return new Os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return Op(dn(t),dn(e))&&t.limitType===e.limitType}function QE(t){return`${Dp(dn(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>HE(i)).join(", ")}]`),oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ws(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ws(i)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function uc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of No(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ev(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,No(r),i)||r.endAt&&!function(o,l,u){const c=Ev(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,No(r),i))}(t,e)}function vN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YE(t){return(e,n)=>{let r=!1;for(const i of No(t)){const s=_N(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _N(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?_s(u,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return FE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=new Ie(H.comparator);function qn(){return wN}const XE=new Ie(H.comparator);function yo(...t){let e=XE;for(const n of t)e=e.insert(n.key,n);return e}function JE(t){let e=XE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ei(){return bo()}function ZE(){return bo()}function bo(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const EN=new Ie(H.comparator),TN=new He(H.comparator);function te(...t){let e=TN;for(const n of t)e=e.add(n);return e}const IN=new He(oe);function SN(){return IN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tu(e)?"-0":e}}function eT(t){return{integerValue:""+t}}function xN(t,e){return tN(e)?eT(e):Mp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this._=void 0}}function CN(t,e,n){return t instanceof ua?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Rp(s)&&(s=Np(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Es?nT(t,e):t instanceof ca?rT(t,e):function(i,s){const o=tT(i,s),l=xv(o)+xv(i.Pe);return Gh(o)&&Gh(i.Pe)?eT(l):Mp(i.serializer,l)}(t,e)}function kN(t,e,n){return t instanceof Es?nT(t,e):t instanceof ca?rT(t,e):n}function tT(t,e){return t instanceof Su?function(r){return Gh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ua extends cc{}class Es extends cc{constructor(e){super(),this.elements=e}}function nT(t,e){const n=iT(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ca extends cc{constructor(e){super(),this.elements=e}}function rT(t,e){let n=iT(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class Su extends cc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function xv(t){return Ae(t.integerValue||t.doubleValue)}function iT(t){return bp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n){this.field=e,this.transform=n}}function AN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Es&&i instanceof Es||r instanceof ca&&i instanceof ca?vs(r.elements,i.elements,pn):r instanceof Su&&i instanceof Su?pn(r.Pe,i.Pe):r instanceof ua&&i instanceof ua}(t.transform,e.transform)}class PN{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dc{}function oT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lT(t.key,Yt.none()):new Sa(t.key,t.data,Yt.none());{const n=t.data,r=vt.empty();let i=new He(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fr(t.key,r,new kt(i.toArray()),Yt.none())}}function RN(t,e,n){t instanceof Sa?function(i,s,o){const l=i.value.clone(),u=kv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(i,s,o){if(!jl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=kv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(aT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Do(t,e,n,r){return t instanceof Sa?function(s,o,l,u){if(!jl(s.precondition,o))return l;const c=s.value.clone(),h=Av(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(s,o,l,u){if(!jl(s.precondition,o))return l;const c=Av(s.fieldTransforms,u,o),h=o.data;return h.setAll(aT(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return jl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function NN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=tT(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function Cv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vs(r,i,(s,o)=>AN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Sa extends dc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fr extends dc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kv(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,kN(o,l,n[i]))}return r}function Av(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,CN(s,o,e))}return r}class lT extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bN extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=oT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,(n,r)=>Cv(n,r))&&vs(this.baseMutations,e.baseMutations,(n,r)=>Cv(n,r))}}class Vp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return EN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,re;function VN(t){switch(t){default:return K();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function uT(t){if(t===void 0)return Wn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ne.OK:return V.OK;case Ne.CANCELLED:return V.CANCELLED;case Ne.UNKNOWN:return V.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return V.INTERNAL;case Ne.UNAVAILABLE:return V.UNAVAILABLE;case Ne.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ne.NOT_FOUND:return V.NOT_FOUND;case Ne.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ne.ABORTED:return V.ABORTED;case Ne.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ne.DATA_LOSS:return V.DATA_LOSS;default:return K()}}(re=Ne||(Ne={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=new oi([4294967295,4294967295],0);function Pv(t){const e=LN().encode(t),n=new NE;return n.update(e),new Uint8Array(n.digest())}function Rv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new oi([n,r],0),new oi([i,s],0)]}class Lp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vo(`Invalid padding: ${n}`);if(r<0)throw new vo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=oi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(oi.fromNumber(r)));return i.compare(jN)===1&&(i=new oi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Pv(e),[r,i]=Rv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Lp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Pv(e),[r,i]=Rv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(Y.min(),i,new Ie(oe),qn(),te())}}class xa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xa(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class cT{constructor(e,n){this.targetId=e,this.me=n}}class dT{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Nv{constructor(){this.fe=0,this.ge=Dv(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new xa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Dv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class FN{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=bv(),this.Qe=new Ie(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Qh(s))if(r===0){const o=new H(s.path);this.Ue(n,o,rt.newNoDocument(o,Y.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=mi(r).toUint8Array()}catch(u){if(u instanceof UE)return ys("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Lp(o,i,s)}catch(u){return ys(u instanceof vo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Qh(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,rt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new hc(e,n,this.Qe,this.ke,r);return this.ke=qn(),this.qe=bv(),this.Qe=new Ie(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Nv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function bv(){return new Ie(H.comparator)}function Dv(){return new Ie(H.comparator)}const UN={asc:"ASCENDING",desc:"DESCENDING"},$N={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BN={and:"AND",or:"OR"};class zN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jh(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function xu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WN(t,e){return xu(t,e.toTimestamp())}function hn(t){return ce(!!t),Y.fromTimestamp(function(n){const r=Nr(n);return new Ve(r.seconds,r.nanos)}(t))}function jp(t,e){return Zh(t,e).canonicalString()}function Zh(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function fT(t){const e=ge.fromString(t);return ce(vT(e)),e}function ef(t,e){return jp(t.databaseId,e.path)}function Dd(t,e){const n=fT(e);if(n.get(1)!==t.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(mT(n))}function pT(t,e){return jp(t.databaseId,e)}function qN(t){const e=fT(t);return e.length===4?ge.emptyPath():mT(e)}function tf(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mT(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ov(t,e,n){return{name:ef(t,e),fields:n.value.mapValue.fields}}function HN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ce(h===void 0||typeof h=="string"),Ke.fromBase64String(h||"")):(ce(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ke.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?V.UNKNOWN:uT(c.code);return new z(h,c.message||"")}(o);n=new dT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dd(t,r.document.name),s=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):Y.min(),l=new vt({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Fl(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dd(t,r.document),s=r.readTime?hn(r.readTime):Y.min(),o=rt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dd(t,r.document),s=r.removedTargetIds||[];n=new Fl([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new MN(i,s),l=r.targetId;n=new cT(l,o)}}return n}function GN(t,e){let n;if(e instanceof Sa)n={update:Ov(t,e.key,e.value)};else if(e instanceof lT)n={delete:ef(t,e.key)};else if(e instanceof Fr)n={update:Ov(t,e.key,e.data),updateMask:nb(e.fieldMask)};else{if(!(e instanceof bN))return K();n={verify:ef(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ua)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Es)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Su)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:WN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function KN(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?hn(i.updateTime):hn(s);return o.isEqual(Y.min())&&(o=hn(s)),new PN(o,i.transformResults||[])}(n,e))):[]}function QN(t,e){return{documents:[pT(t,e.path)]}}function YN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pT(t,i);const s=function(c){if(c.length!==0)return yT(en.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Vi(m.field),direction:ZN(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Jh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function XN(t){let e=qN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=gT(f);return m instanceof en&&WE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(x){return new la(Li(x.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,oc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,y=f.values||[];return new Iu(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new Iu(y,m)}(n.endAt)),gN(e,i,o,s,l,"F",u,c)}function JN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Li(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Li(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Li(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Li(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return De.create(Li(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>gT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function ZN(t){return UN[t]}function eb(t){return $N[t]}function tb(t){return BN[t]}function Vi(t){return{fieldPath:t.canonicalString()}}function Li(t){return We.fromServerFormat(t.fieldPath)}function yT(t){return t instanceof De?function(n){if(n.op==="=="){if(wv(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NAN"}};if(_v(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wv(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NAN"}};if(_v(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vi(n.field),op:eb(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(i=>yT(i));return r.length===1?r[0]:{compositeFilter:{op:tb(n.op),filters:r}}}(t):K()}function nb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.ct=e}}function ib(t){const e=XN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.un=new ob}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Rr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class ob{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ts(0)}static kn(){return new Ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Do(r.mutation,i,kt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=yo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=qn();const o=bo(),l=function(){return bo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Fr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Do(h.mutation,c,h.mutation.getFieldMask(),Ve.now())):o.set(c.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return l.set(c,new lb(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=bo();let i=new Ie((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||kt.empty();h=l.applyToLocalView(c,h),r.set(u,h);const f=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,f=ZE();h.forEach(m=>{if(!s.has(m)){const y=oT(n.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(ei());let l=-1,u=s;return o.next(c=>L.forEach(c,(h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(h=>({batchId:l,changes:JE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=yo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=yo();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(f,m){return new Os(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,rt.newInvalidDocument(h)))});let l=yo();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Do(h.mutation,c,kt.empty(),Ve.now()),uc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:hn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:ib(i.bundledQuery),readTime:hn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.overlays=new Ie(H.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ei();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=ei(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ei(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=ei(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ON(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.Tr=new He(Le.Er),this.dr=new He(Le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Le(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new ge([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new ge([])),r=new Le(n,e),i=new Le(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new He(Le.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(oe);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Le(new H(s),0);let l=new He(oe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Le(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.Mr=e,this.docs=function(){return new Ie(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||XR(YR(h),r)<=0||(i.has(h.key)||uc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mb(this)}getSize(e){return L.resolve(this.size)}}class mb extends ab{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.persistence=e,this.Nr=new Ms(n=>Dp(n),Op),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Fp,this.targetCount=0,this.kr=Ts.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Pp(0),this.Kr=!1,this.Kr=!0,this.$r=new hb,this.referenceDelegate=e(this),this.Ur=new gb(this),this.indexManager=new sb,this.remoteDocumentCache=function(i){return new pb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new rb(n),this.Gr=new cb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new db,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new fb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new vb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class vb extends ZR{constructor(e){super(),this.currentSequenceNumber=e}}class Up{constructor(e){this.persistence=e,this.Jr=new Fp,this.Yr=null}static Zr(e){return new Up(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $p(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ak()?8:eN(at())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new _b;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(oo()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(oo()<=ne.DEBUG&&q("QueryEngine","Query:",Mi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(oo()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(n))):L.resolve())}Yi(e,n){if(Sv(n))return L.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xh(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Xh(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Sv(n)||i.isEqual(Y.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(oo()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mi(n)),this.rs(e,o,n,QR(i,-1)).next(l=>l))})}ts(e,n){let r=new He(YE(e));return n.forEach((i,s)=>{uc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return oo()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Rr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(oe),this._s=new Ms(s=>Dp(s),Op),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ub(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Tb(t,e,n,r){return new Eb(t,e,n,r)}async function _T(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function Ib(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const f=c.batch,m=f.keys();let y=L.resolve();return m.forEach(x=>{y=y.next(()=>h.getEntry(u,x)).next(P=>{const b=c.docVersions.get(x);ce(b!==null),P.version.compareTo(b)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wT(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Sb(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Ke.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(f,y),function(P,b,T){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,y,h)&&l.push(n.Ur.updateTargetData(s,y))});let u=qn(),c=te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(xb(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(Y.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function xb(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Cb(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kb(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function nf(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ia(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Mv(t,e,n){const r=X(t);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=X(u),m=f._s.get(h);return m!==void 0?L.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,dn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:te())).next(l=>(Ab(r,vN(e),l),{documents:l,Ts:s})))}function Ab(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Vv{constructor(){this.activeTargetIds=SN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pb{constructor(){this.so=new Vv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Vv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml=null;function Od(){return ml===null?ml=function(){return 268435456+Math.round(2147483648*Math.random())}():ml++,"0x"+ml.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class Db extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Od(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw ys("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Nb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Od();return new Promise((o,l)=>{const u=new bE;u.setWithCredentials(!0),u.listenOnce(DE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Vl.NO_ERROR:const h=u.getResponseJson();q(et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Vl.TIMEOUT:q(et,`RPC '${e}' ${s} timed out`),l(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const f=u.getStatus();if(q(et,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const x=function(b){const T=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(y.status);l(new z(x,y.message))}else l(new z(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(V.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{q(et,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(et,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Od(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=VE(),l=ME(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");q(et,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,y=!1;const x=new bb({Io:b=>{y?q(et,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(q(et,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),q(et,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},To:()=>f.close()}),P=(b,T,E)=>{b.listen(T,k=>{try{E(k)}catch(M){setTimeout(()=>{throw M},0)}})};return P(f,go.EventType.OPEN,()=>{y||(q(et,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),P(f,go.EventType.CLOSE,()=>{y||(y=!0,q(et,`RPC '${e}' stream ${i} transport closed`),x.So())}),P(f,go.EventType.ERROR,b=>{y||(y=!0,ys(et,`RPC '${e}' stream ${i} transport errored:`,b),x.So(new z(V.UNAVAILABLE,"The operation could not be completed")))}),P(f,go.EventType.MESSAGE,b=>{var T;if(!y){const E=b.data[0];ce(!!E);const k=E,M=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(M){q(et,`RPC '${e}' stream ${i} received error:`,M);const F=M.status;let U=function(w){const S=Ne[w];if(S!==void 0)return uT(S)}(F),I=M.message;U===void 0&&(U=V.INTERNAL,I="Unknown error status: "+F+" with message "+M.message),y=!0,x.So(new z(U,I)),f.close()}else q(et,`RPC '${e}' stream ${i} received:`,E),x.bo(E)}}),P(l,OE.STAT_EVENT,b=>{b.stat===qh.PROXY?q(et,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===qh.NOPROXY&&q(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Md(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return new zN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ET(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ob extends TT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=HN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?hn(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=tf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Qh(u)?{documents:QN(s,u)}:{query:YN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hT(s,o.resumeToken);const c=Jh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=xu(s,o.snapshotVersion.toTimestamp());const c=Jh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=JN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=tf(this.serializer),n.removeTarget=e,this.a_(n)}}class Mb extends TT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=KN(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=tf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>GN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Zh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Zh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Lb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ki(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await Ca(c),c.q_.set("Unknown"),c.L_.delete(4),await pc(c)}(this))})}),this.q_=new Lb(r,i)}}async function pc(t){if(ki(t))for(const e of t.B_)await e(!0)}async function Ca(t){for(const e of t.B_)await e(!1)}function IT(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),qp(n)?Wp(n):Vs(n).r_()&&zp(n,e))}function Bp(t,e){const n=X(t),r=Vs(n);n.N_.delete(e),r.r_()&&ST(n,e),n.N_.size===0&&(r.r_()?r.o_():ki(n)&&n.q_.set("Unknown"))}function zp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).A_(e)}function ST(t,e){t.Q_.xe(e),Vs(t).R_(e)}function Wp(t){t.Q_=new FN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.q_.v_()}function qp(t){return ki(t)&&!Vs(t).n_()&&t.N_.size>0}function ki(t){return X(t).L_.size===0}function xT(t){t.Q_=void 0}async function Fb(t){t.q_.set("Online")}async function Ub(t){t.N_.forEach((e,n)=>{zp(t,e)})}async function $b(t,e){xT(t),qp(t)?(t.q_.M_(e),Wp(t)):t.q_.set("Unknown")}async function Bb(t,e,n){if(t.q_.set("Online"),e instanceof dT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cu(t,r)}else if(e instanceof Fl?t.Q_.Ke(e):e instanceof cT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await wT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Ke.EMPTY_BYTE_STRING,h.snapshotVersion)),ST(s,u);const f=new pr(h.target,u,c,h.sequenceNumber);zp(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Cu(t,r)}}async function Cu(t,e,n){if(!Ia(e))throw e;t.L_.add(1),await Ca(t),t.q_.set("Offline"),n||(n=()=>wT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await pc(t)})}function CT(t,e){return e().catch(n=>Cu(t,n,e))}async function mc(t){const e=X(t),n=br(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;zb(e);)try{const i=await Cb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Wb(e,i)}catch(i){await Cu(e,i)}kT(e)&&AT(e)}function zb(t){return ki(t)&&t.O_.length<10}function Wb(t,e){t.O_.push(e);const n=br(t);n.r_()&&n.V_&&n.m_(e.mutations)}function kT(t){return ki(t)&&!br(t).n_()&&t.O_.length>0}function AT(t){br(t).start()}async function qb(t){br(t).p_()}async function Hb(t){const e=br(t);for(const n of t.O_)e.m_(n.mutations)}async function Gb(t,e,n){const r=t.O_.shift(),i=Vp.from(r,e,n);await CT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mc(t)}async function Kb(t,e){e&&br(t).V_&&await async function(r,i){if(function(o){return VN(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();br(r).s_(),await CT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mc(r)}}(t,e),kT(t)&&AT(t)}async function jv(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ki(n);n.L_.add(3),await Ca(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await pc(n)}async function Qb(t,e){const n=X(t);e?(n.L_.delete(2),await pc(n)):e||(n.L_.add(2),await Ca(n),n.q_.set("Unknown"))}function Vs(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new Ob(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Fb.bind(null,t),Ro:Ub.bind(null,t),mo:$b.bind(null,t),d_:Bb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),qp(t)?Wp(t):t.q_.set("Unknown")):(await t.K_.stop(),xT(t))})),t.K_}function br(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new Mb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:qb.bind(null,t),mo:Kb.bind(null,t),f_:Hb.bind(null,t),g_:Gb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await mc(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Hp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gp(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),Ia(t))return new z(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=yo(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(){this.W_=new Ie(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Is{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Is(e,n,os.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Xb{constructor(){this.queries=Uv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Uv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function Uv(){return new Ms(t=>QE(t),lc)}async function Kp(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Yb,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Gp(o,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Yp(n)}async function Qp(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Jb(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Yp(n)}function Zb(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Yp(t){t.Y_.forEach(e=>{e.next()})}var rf,$v;($v=rf||(rf={})).ea="default",$v.Cache="cache";class Xp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==rf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.key=e}}class RT{constructor(e){this.key=e}}class e2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=YE(e),this.Ra=new os(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Fv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),y=uc(this.query,f)?f:null,x=!!m&&this.mutatedKeys.has(m.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let b=!1;m&&y?m.data.isEqual(y.data)?x!==P&&(r.track({type:3,doc:y}),b=!0):this.ga(m,y)||(r.track({type:2,doc:y}),b=!0,(u&&this.Aa(y,u)>0||c&&this.Aa(y,c)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),b=!0):m&&!y&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(y?(o=o.add(y),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(y,x){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return P(y)-P(x)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Is(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new RT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new PT(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Is.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class t2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class n2{constructor(e){this.key=e,this.va=!1}}class r2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ms(l=>QE(l),lc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(H.comparator),this.Na=new Map,this.La=new Fp,this.Ba={},this.ka=new Map,this.qa=Ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function i2(t,e,n=!0){const r=VT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await NT(r,e,n,!0),i}async function s2(t,e){const n=VT(t);await NT(n,e,!0,!1)}async function NT(t,e,n,r){const i=await kb(t.localStore,dn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await o2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&IT(t.remoteStore,i),l}async function o2(t,e,n,r,i){t.Ka=(f,m,y)=>async function(P,b,T,E){let k=b.view.ma(T);k.ns&&(k=await Mv(P.localStore,b.query,!1).then(({documents:I})=>b.view.ma(I,k)));const M=E&&E.targetChanges.get(b.targetId),F=E&&E.targetMismatches.get(b.targetId)!=null,U=b.view.applyChanges(k,P.isPrimaryClient,M,F);return zv(P,b.targetId,U.wa),U.snapshot}(t,f,m,y);const s=await Mv(t.localStore,e,!0),o=new e2(e,s.Ts),l=o.ma(s.documents),u=xa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);zv(t,n,c.wa);const h=new t2(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function a2(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!lc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await nf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Bp(r.remoteStore,i.targetId),sf(r,i.targetId)}).catch(Ta)):(sf(r,i.targetId),await nf(r.localStore,i.targetId,!0))}async function l2(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bp(n.remoteStore,r.targetId))}async function u2(t,e,n){const r=g2(t);try{const i=await function(o,l){const u=X(o),c=Ve.now(),h=l.reduce((y,x)=>y.add(x.key),te());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let x=qn(),P=te();return u.cs.getEntries(y,h).next(b=>{x=b,x.forEach((T,E)=>{E.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,x)).next(b=>{f=b;const T=[];for(const E of l){const k=NN(E,f.get(E.key).overlayedDocument);k!=null&&T.push(new Fr(E.key,k,$E(k.value.mapValue),Yt.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,T,l)}).next(b=>{m=b;const T=b.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(y,b.batchId,T)})}).then(()=>({batchId:m.batchId,changes:JE(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ie(oe)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ka(r,i.changes),await mc(r.remoteStore)}catch(i){const s=Gp(i,"Failed to persist write");n.reject(s)}}async function bT(t,e){const n=X(t);try{const r=await Sb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ce(o.va):i.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await ka(n,r,e)}catch(r){await Ta(r)}}function Bv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(l)&&(c=!0)}),c&&Yp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function c2(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ie(H.comparator);o=o.insert(s,rt.newNoDocument(s,Y.min()));const l=te().add(s),u=new hc(Y.min(),new Map,new Ie(oe),o,l);await bT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Jp(r)}else await nf(r.localStore,e,!1).then(()=>sf(r,e,n)).catch(Ta)}async function d2(t,e){const n=X(t),r=e.batch.batchId;try{const i=await Ib(n.localStore,e);OT(n,r,null),DT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,i)}catch(i){await Ta(i)}}async function h2(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(ce(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);OT(r,e,n),DT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,i)}catch(i){await Ta(i)}}function DT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function OT(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function sf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||MT(t,r)})}function MT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Bp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Jp(t))}function zv(t,e,n){for(const r of n)r instanceof PT?(t.La.addReference(r.key,e),f2(t,r)):r instanceof RT?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||MT(t,r.key)):K()}function f2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Jp(t))}function Jp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new n2(n)),t.Oa=t.Oa.insert(n,r),IT(t.remoteStore,new pr(dn(ac(n.path)),r,"TargetPurposeLimboResolution",Pp.oe))}}async function ka(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=$p.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=X(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>L.forEach(c,m=>L.forEach(m.$i,y=>h.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>L.forEach(m.Ui,y=>h.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!Ia(f))throw f;q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=h.os.get(m),x=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(x);h.os=h.os.insert(m,P)}}}(r.localStore,s))}async function p2(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await _T(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.hs)}}function m2(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function VT(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=c2.bind(null,e),e.Ca.d_=Jb.bind(null,e.eventManager),e.Ca.$a=Zb.bind(null,e.eventManager),e}function g2(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=d2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=h2.bind(null,e),e}class ku{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Tb(this.persistence,new wb,e.initialUser,this.serializer)}Ga(e){return new yb(Up.Zr,this.serializer)}Wa(e){return new Pb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ku.provider={build:()=>new ku};class of{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=p2.bind(null,this.syncEngine),await Qb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xb}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=function(s){return new Db(s)}(e.databaseInfo);return function(s,o,l,u){return new Vb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new jb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Bv(this.syncEngine,n,0),function(){return Lv.D()?new Lv:new Rb}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const f=new r2(i,s,o,l,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ca(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}of.provider={build:()=>new of};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=jE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vd(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _T(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await v2(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>jv(e.remoteStore,i)),t._onlineComponents=e}async function v2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ys("Error using user provided cache. Falling back to memory cache: "+n),await Vd(t,new ku)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Vd(t,new ku);return t._offlineComponents}async function LT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Wv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Wv(t,new of))),t._onlineComponents}function _2(t){return LT(t).then(e=>e.syncEngine)}async function Au(t){const e=await LT(t),n=e.eventManager;return n.onListen=i2.bind(null,e.syncEngine),n.onUnlisten=a2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=s2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=l2.bind(null,e.syncEngine),n}function w2(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new Zp({next:m=>{h.Za(),o.enqueueAndForget(()=>Qp(s,f));const y=m.docs.has(l);!y&&m.fromCache?c.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?c.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Xp(ac(l.path),h,{includeMetadataChanges:!0,_a:!0});return Kp(s,f)}(await Au(t),t.asyncQueue,e,n,r)),r.promise}function E2(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new Zp({next:m=>{h.Za(),o.enqueueAndForget(()=>Qp(s,f)),m.fromCache&&u.source==="server"?c.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Xp(l,h,{includeMetadataChanges:!0,_a:!0});return Kp(s,f)}(await Au(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function T2(t,e,n,r){if(e===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hv(t){if(!H.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gv(t){if(H.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Pt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gc(t);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}T2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UR;switch(r.type){case"firstParty":return new WR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qv.get(n);r&&(q("ComponentProvider","Removing Datastore"),qv.delete(n),r.terminate())}(this),Promise.resolve()}}function I2(t,e,n,r={}){var i;const s=(t=Pt(t,yc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=tt.MOCK_USER;else{l=tk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new tt(c)}t._authCredentials=new $R(new LE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class Cr extends Ur{constructor(e,n,r){super(e,n,ac(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new H(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function Dn(t,e,...n){if(t=Ce(t),FT("collection","path",e),t instanceof yc){const r=ge.fromString(e,...n);return Gv(r),new Cr(t,null,r)}{if(!(t instanceof st||t instanceof Cr))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Gv(r),new Cr(t.firestore,null,r)}}function kr(t,e,...n){if(t=Ce(t),arguments.length===1&&(e=jE.newId()),FT("doc","path",e),t instanceof yc){const r=ge.fromString(e,...n);return Hv(r),new st(t,null,new H(r))}{if(!(t instanceof st||t instanceof Cr))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Hv(r),new st(t.firestore,t instanceof Cr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ET(this,"async_queue_retry"),this.Vu=()=>{const r=Md();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Md();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Md();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ln;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ia(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Hp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Yv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Dr extends yc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Qv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qv(e),this._firestoreClient=void 0,await e}}}function S2(t,e){const n=typeof t=="object"?t:vp(),r=typeof t=="string"?t:"(default)",i=Si(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ZC("firestore");s&&I2(i,...s)}return i}function vc(t){if(t._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||x2(t),t._firestoreClient}function x2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new rN(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,jT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new y2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ss(Ke.fromBase64String(e))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ss(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=/^__.*__$/;class k2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Sa(e,this.data,n,this.fieldTransforms)}}class UT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $T(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class wc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new wc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Pu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if($T(this.Cu)&&C2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class A2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}Qu(e,n,r,i=!1){return new wc({Cu:e,methodName:n,qu:r,path:We.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ec(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new A2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BT(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);im("Data must be an object, but it was:",o,r);const l=zT(r,o);let u,c;if(s.merge)u=new kt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=af(e,f,n);if(!o.contains(m))throw new z(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);qT(h,m)||h.push(m)}u=new kt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new k2(new vt(l),u,c)}class Tc extends Aa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tc}}function P2(t,e,n){return new wc({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class nm extends Aa{_toFieldTransform(e){return new sT(e.path,new ua)}isEqual(e){return e instanceof nm}}class rm extends Aa{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=P2(this,e,!0),r=this.Ku.map(s=>Ls(s,n)),i=new Es(r);return new sT(e.path,i)}isEqual(e){return e instanceof rm&&ms(this.Ku,e.Ku)}}function R2(t,e,n,r){const i=t.Qu(1,e,n);im("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();Ci(r,(u,c)=>{const h=sm(e,u,n);c=Ce(c);const f=i.Nu(h);if(c instanceof Tc)s.push(h);else{const m=Ls(c,f);m!=null&&(s.push(h),o.set(h,m))}});const l=new kt(s);return new UT(o,l,i.fieldTransforms)}function N2(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[af(e,r,n)],u=[i];if(s.length%2!=0)throw new z(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(af(e,s[m])),u.push(s[m+1]);const c=[],h=vt.empty();for(let m=l.length-1;m>=0;--m)if(!qT(c,l[m])){const y=l[m];let x=u[m];x=Ce(x);const P=o.Nu(y);if(x instanceof Tc)c.push(y);else{const b=Ls(x,P);b!=null&&(c.push(y),h.set(y,b))}}const f=new kt(c);return new UT(h,f,o.fieldTransforms)}function b2(t,e,n,r=!1){return Ls(n,t.Qu(r?4:3,e))}function Ls(t,e){if(WT(t=Ce(t)))return im("Unsupported field value:",e,t),zT(t,e);if(t instanceof Aa)return function(r,i){if(!$T(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ls(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:xu(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xu(i.serializer,s)}}if(r instanceof em)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ss)return{bytesValue:hT(i.serializer,r._byteString)};if(r instanceof st){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof tm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Mp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${gc(r)}`)}(t,e)}function zT(t,e){const n={};return FE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(t,(r,i)=>{const s=Ls(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof em||t instanceof Ss||t instanceof st||t instanceof Aa||t instanceof tm)}function im(t,e,n){if(!WT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function af(t,e,n){if((e=Ce(e))instanceof _c)return e._internalPath;if(typeof e=="string")return sm(t,e);throw Pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const D2=new RegExp("[~\\*/\\[\\]]");function sm(t,e,n){if(e.search(D2)>=0)throw Pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _c(...e.split("."))._internalPath}catch{throw Pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(V.INVALID_ARGUMENT,l+t+u)}function qT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new O2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ic("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class O2 extends HT{data(){return super.data()}}function Ic(t,e){return typeof e=="string"?sm(t,e):e instanceof _c?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class om{}class KT extends om{}function as(t,e,...n){let r=[];e instanceof om&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof am).length,l=s.filter(u=>u instanceof Sc).length;if(o>1||o>0&&l>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sc extends KT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sc(e,n,r)}_apply(e){const n=this._parse(e);return QT(e._query,n),new Ur(e.firestore,e.converter,Yh(e._query,n))}_parse(e){const n=Ec(e.firestore);return function(s,o,l,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Jv(f,h);const y=[];for(const x of f)y.push(Xv(u,s,x));m={arrayValue:{values:y}}}else m=Xv(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Jv(f,h),m=b2(l,o,f,h==="in"||h==="not-in");return De.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ti(t,e,n){const r=e,i=Ic("where",t);return Sc._create(i,r,n)}class am extends om{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new am(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)QT(o,u),o=Yh(o,u)}(e._query,n),new Ur(e.firestore,e.converter,Yh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lm extends KT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new la(s,o)}(e._query,this._field,this._direction);return new Ur(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Os(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Ul(t,e="asc"){const n=e,r=Ic("orderBy",t);return lm._create(r,n)}function Xv(t,e,n){if(typeof(n=Ce(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!KE(e)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!H.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vv(t,new H(r))}if(n instanceof st)return vv(t,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gc(n)}.`)}function Jv(t,e){if(!Array.isArray(t)||t.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class M2{convertValue(e,n="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ci(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new tm(s)}convertGeoPoint(e){return new em(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Np(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sa(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ce(vT(r));const i=new oa(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class XT extends HT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ic("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $l extends XT{data(e={}){return super.data(e)}}class JT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _o(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $l(this._firestore,this._userDataWriter,r.key,r,new _o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new $l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new _o(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new $l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new _o(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:V2(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function V2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){t=Pt(t,st);const e=Pt(t.firestore,Dr);return w2(vc(e),t._key).then(n=>e1(e,t,n))}class um extends M2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function uf(t){t=Pt(t,Ur);const e=Pt(t.firestore,Dr),n=vc(e),r=new um(e);return GT(t._query),E2(n,t._query).then(i=>new JT(e,r,t,i))}function Zv(t,e,n){t=Pt(t,st);const r=Pt(t.firestore,Dr),i=YT(t.converter,e);return dm(r,[BT(Ec(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Yt.none())])}function cf(t,e,n,...r){t=Pt(t,st);const i=Pt(t.firestore,Dr),s=Ec(i);let o;return o=typeof(e=Ce(e))=="string"||e instanceof _c?N2(s,"updateDoc",t._key,e,n,r):R2(s,"updateDoc",t._key,e),dm(i,[o.toMutation(t._key,Yt.exists(!0))])}function cm(t,e){const n=Pt(t.firestore,Dr),r=kr(t),i=YT(t.converter,e);return dm(n,[BT(Ec(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function ZT(t,...e){var n,r,i;t=Ce(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yv(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Yv(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof st)c=Pt(t.firestore,Dr),h=ac(t._key.path),u={next:f=>{e[o]&&e[o](e1(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Pt(t,Ur);c=Pt(f.firestore,Dr),h=f._query;const m=new um(c);u={next:y=>{e[o]&&e[o](new JT(c,m,f,y))},error:e[o+1],complete:e[o+2]},GT(t._query)}return function(m,y,x,P){const b=new Zp(P),T=new Xp(y,b,x);return m.asyncQueue.enqueueAndForget(async()=>Kp(await Au(m),T)),()=>{b.Za(),m.asyncQueue.enqueueAndForget(async()=>Qp(await Au(m),T))}}(vc(c),h,l,u)}function dm(t,e){return function(r,i){const s=new Ln;return r.asyncQueue.enqueueAndForget(async()=>u2(await _2(r),i,s)),s.promise}(vc(t),e)}function e1(t,e,n){const r=n.docs.get(e._key),i=new um(t);return new XT(t,i,e._key,r,new _o(n.hasPendingWrites,n.fromCache),e.converter)}function da(){return new nm("serverTimestamp")}function L2(...t){return new rm("arrayUnion",t)}(function(e,n=!0){(function(i){Ds=i})(Ns),fn(new Jt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Dr(new BR(r.getProvider("auth-internal")),new HR(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ut(fv,"4.7.3",e),Ut(fv,"4.7.3","esm2017")})();var j2="firebase",F2="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(j2,F2,"app");const t1="@firebase/installations",hm="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=1e4,r1=`w:${hm}`,i1="FIS_v2",U2="https://firebaseinstallations.googleapis.com/v1",$2=60*60*1e3,B2="installations",z2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yi=new Ii(B2,z2,W2);function s1(t){return t instanceof tn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1({projectId:t}){return`${U2}/projects/${t}/installations`}function a1(t){return{token:t.token,requestStatus:2,expiresIn:H2(t.expiresIn),creationTime:Date.now()}}async function l1(t,e){const r=(await e.json()).error;return yi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function u1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function q2(t,{refreshToken:e}){const n=u1(t);return n.append("Authorization",G2(e)),n}async function c1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function H2(t){return Number(t.replace("s","000"))}function G2(t){return`${i1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=o1(t),i=u1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:i1,appId:t.appId,sdkVersion:r1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await c1(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:a1(c.authToken)}}else throw await l1("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=/^[cdef][\w-]{21}$/,df="";function X2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=J2(t);return Y2.test(n)?n:df}catch{return df}}function J2(t){return Q2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=new Map;function f1(t,e){const n=xc(t);p1(n,e),Z2(n,e)}function p1(t,e){const n=h1.get(t);if(n)for(const r of n)r(e)}function Z2(t,e){const n=eD();n&&n.postMessage({key:t,fid:e}),tD()}let ni=null;function eD(){return!ni&&"BroadcastChannel"in self&&(ni=new BroadcastChannel("[Firebase] FID Change"),ni.onmessage=t=>{p1(t.data.key,t.data.fid)}),ni}function tD(){h1.size===0&&ni&&(ni.close(),ni=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD="firebase-installations-database",rD=1,vi="firebase-installations-store";let Ld=null;function fm(){return Ld||(Ld=Gw(nD,rD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vi)}}})),Ld}async function Ru(t,e){const n=xc(t),i=(await fm()).transaction(vi,"readwrite"),s=i.objectStore(vi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&f1(t,e.fid),e}async function m1(t){const e=xc(t),r=(await fm()).transaction(vi,"readwrite");await r.objectStore(vi).delete(e),await r.done}async function Cc(t,e){const n=xc(t),i=(await fm()).transaction(vi,"readwrite"),s=i.objectStore(vi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&f1(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(t){let e;const n=await Cc(t.appConfig,r=>{const i=iD(r),s=sD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===df?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iD(t){const e=t||{fid:X2(),registrationStatus:0};return g1(e)}function sD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(yi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aD(t)}:{installationEntry:e}}async function oD(t,e){try{const n=await K2(t,e);return Ru(t.appConfig,n)}catch(n){throw s1(n)&&n.customData.serverCode===409?await m1(t.appConfig):await Ru(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function aD(t){let e=await e0(t.appConfig);for(;e.registrationStatus===1;)await d1(100),e=await e0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await pm(t);return r||n}return e}function e0(t){return Cc(t,e=>{if(!e)throw yi.create("installation-not-found");return g1(e)})}function g1(t){return lD(t)?{fid:t.fid,registrationStatus:0}:t}function lD(t){return t.registrationStatus===1&&t.registrationTime+n1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD({appConfig:t,heartbeatServiceProvider:e},n){const r=cD(t,n),i=q2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:r1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await c1(()=>fetch(r,l));if(u.ok){const c=await u.json();return a1(c)}else throw await l1("Generate Auth Token",u)}function cD(t,{fid:e}){return`${o1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(t,e=!1){let n;const r=await Cc(t.appConfig,s=>{if(!y1(s))throw yi.create("not-registered");const o=s.authToken;if(!e&&fD(o))return s;if(o.requestStatus===1)return n=dD(t,e),s;{if(!navigator.onLine)throw yi.create("app-offline");const l=mD(s);return n=hD(t,l),l}});return n?await n:r.authToken}async function dD(t,e){let n=await t0(t.appConfig);for(;n.authToken.requestStatus===1;)await d1(100),n=await t0(t.appConfig);const r=n.authToken;return r.requestStatus===0?mm(t,e):r}function t0(t){return Cc(t,e=>{if(!y1(e))throw yi.create("not-registered");const n=e.authToken;return gD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function hD(t,e){try{const n=await uD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ru(t.appConfig,r),n}catch(n){if(s1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await m1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ru(t.appConfig,r)}throw n}}function y1(t){return t!==void 0&&t.registrationStatus===2}function fD(t){return t.requestStatus===2&&!pD(t)}function pD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$2}function mD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gD(t){return t.requestStatus===1&&t.requestTime+n1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(t){const e=t,{installationEntry:n,registrationPromise:r}=await pm(e);return r?r.catch(console.error):mm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(t,e=!1){const n=t;return await _D(n),(await mm(n,e)).token}async function _D(t){const{registrationPromise:e}=await pm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t){if(!t||!t.options)throw jd("App Configuration");if(!t.name)throw jd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw jd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function jd(t){return yi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="installations",ED="installations-internal",TD=t=>{const e=t.getProvider("app").getImmediate(),n=wD(e),r=Si(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ID=t=>{const e=t.getProvider("app").getImmediate(),n=Si(e,v1).getImmediate();return{getId:()=>yD(n),getToken:i=>vD(n,i)}};function SD(){fn(new Jt(v1,TD,"PUBLIC")),fn(new Jt(ED,ID,"PRIVATE"))}SD();Ut(t1,hm);Ut(t1,hm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="analytics",xD="firebase_id",CD="origin",kD=60*1e3,AD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new nc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Ii("analytics","Analytics",PD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(t){if(!t.startsWith(gm)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function _1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ND(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function bD(t,e){const n=ND("firebase-js-sdk-policy",{createScriptURL:RD}),r=document.createElement("script"),i=`${gm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function DD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function OD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await _1(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){It.error(l)}t("config",i,s)}async function MD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await _1(n);for(const u of o){const c=l.find(f=>f.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){It.error(s)}}function VD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await MD(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await OD(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){It.error(l)}}return i}function LD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=VD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function jD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(gm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=30,UD=1e3;class $D{constructor(e={},n=UD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const w1=new $D;function BD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function zD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:BD(r)},s=AD.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function WD(t,e=w1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Rt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new GD;return setTimeout(async()=>{l.abort()},kD),E1({appId:r,apiKey:i,measurementId:s},o,l,e)}async function E1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=w1){var s;const{appId:o,measurementId:l}=t;try{await qD(r,e)}catch(u){if(l)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await zD(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!HD(c)){if(i.deleteThrottleMetadata(o),l)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?jy(n,i.intervalMillis,FD):jy(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),It.debug(`Calling attemptFetch again in ${h} millis`),E1(t,f,r,i)}}function qD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HD(t){if(!(t instanceof tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class GD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function KD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(){if(mp())try{await gp()}catch(t){return It.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function YD(t,e,n,r,i,s,o){var l;const u=WD(t);u.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>It.error(y)),e.push(u);const c=QD().then(y=>{if(y)return r.getId()}),[h,f]=await Promise.all([u,c]);jD(s)||bD(s,h.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[CD]="firebase",m.update=!0,f!=null&&(m[xD]=f),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.app=e}_delete(){return delete Oo[this.app.options.appId],Promise.resolve()}}let Oo={},n0=[];const r0={};let Fd="dataLayer",JD="gtag",i0,T1,s0=!1;function ZD(){const t=[];if(pp()&&t.push("This is a browser extension environment."),Ww()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function eO(t,e,n){ZD();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(Oo[r]!=null)throw Rt.create("already-exists",{id:r});if(!s0){DD(Fd);const{wrappedGtag:s,gtagCore:o}=LD(Oo,n0,r0,Fd,JD);T1=s,i0=o,s0=!0}return Oo[r]=YD(t,n0,r0,e,i0,Fd,n),new XD(t)}function tO(t=vp()){t=Ce(t);const e=Si(t,Nu);return e.isInitialized()?e.getImmediate():nO(t)}function nO(t,e={}){const n=Si(t,Nu);if(n.isInitialized()){const i=n.getImmediate();if(ms(e,n.getOptions()))return i;throw Rt.create("already-initialized")}return n.initialize({options:e})}async function rO(){if(pp()||!Ww()||!mp())return!1;try{return await gp()}catch{return!1}}function iO(t,e,n,r){t=Ce(t),KD(T1,Oo[t.app.options.appId],e,n,r).catch(i=>It.error(i))}const o0="@firebase/analytics",a0="0.10.8";function sO(){fn(new Jt(Nu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return eO(r,i,n)},"PUBLIC")),fn(new Jt("analytics-internal",t,"PRIVATE")),Ut(o0,a0),Ut(o0,a0,"esm2017");function t(e){try{const n=e.getProvider(Nu).getImmediate();return{logEvent:(r,i,s)=>iO(n,r,i,s)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}sO();const oO={apiKey:"AIzaSyCMR4Fo11EQxc9hUDuRCqWYTabnHKLRfKo",authDomain:"fitbuddy-6e228.firebaseapp.com",projectId:"fitbuddy-6e228",storageBucket:"fitbuddy-6e228.appspot.com",messagingSenderId:"673243880543",appId:"1:673243880543:web:ed4bf24bd478f90d850fea",measurementId:"G-SL8BX9L136"},ym=Kw(oO),gl=jR(ym),it=S2(ym);rO().then(t=>t&&tO(ym));let aO={data:""},lO=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||aO,uO=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,cO=/\/\*[^]*?\*\/|  +/g,l0=/\n+/g,cr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?cr(o,s):s+"{"+cr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=cr(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=cr.p?cr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Sn={},I1=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+I1(t[n]);return e}return t},dO=(t,e,n,r,i)=>{let s=I1(t),o=Sn[s]||(Sn[s]=(u=>{let c=0,h=11;for(;c<u.length;)h=101*h+u.charCodeAt(c++)>>>0;return"go"+h})(s));if(!Sn[o]){let u=s!==t?t:(c=>{let h,f,m=[{}];for(;h=uO.exec(c.replace(cO,""));)h[4]?m.shift():h[3]?(f=h[3].replace(l0," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][h[1]]=h[2].replace(l0," ").trim();return m[0]})(t);Sn[o]=cr(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&Sn.g?Sn.g:null;return n&&(Sn.g=Sn[o]),((u,c,h,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=h?u+c.data:c.data+u)})(Sn[o],e,r,l),o},hO=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":cr(l,""):l===!1?"":l}return r+i+(o??"")},"");function kc(t){let e=this||{},n=t.call?t(e.p):t;return dO(n.unshift?n.raw?hO(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,lO(e.target),e.g,e.o,e.k)}let S1,hf,ff;kc.bind({g:1});let Hn=kc.bind({k:1});function fO(t,e,n,r){cr.p=e,S1=t,hf=n,ff=r}function $r(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:hf&&hf()},l),n.o=/ *go\d+/.test(u),l.className=kc.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),ff&&c[0]&&ff(l),S1(c,l)}return i}}var pO=t=>typeof t=="function",bu=(t,e)=>pO(t)?t(e):t,mO=(()=>{let t=0;return()=>(++t).toString()})(),x1=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),gO=20,C1=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,gO)};case 1:return{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return C1(t,{type:t.toasts.find(s=>s.id===n.id)?1:0,toast:n});case 3:let{toastId:r}=e;return{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Bl=[],ri={toasts:[],pausedAt:void 0},Ai=t=>{ri=C1(ri,t),Bl.forEach(e=>{e(ri)})},yO={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},vO=(t={})=>{let[e,n]=D.useState(ri),r=D.useRef(ri);D.useEffect(()=>(r.current!==ri&&n(ri),Bl.push(n),()=>{let s=Bl.indexOf(n);s>-1&&Bl.splice(s,1)}),[]);let i=e.toasts.map(s=>{var o,l,u;return{...t,...t[s.type],...s,removeDelay:s.removeDelay||((o=t[s.type])==null?void 0:o.removeDelay)||(t==null?void 0:t.removeDelay),duration:s.duration||((l=t[s.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||yO[s.type],style:{...t.style,...(u=t[s.type])==null?void 0:u.style,...s.style}}});return{...e,toasts:i}},_O=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||mO()}),Pa=t=>(e,n)=>{let r=_O(e,t,n);return Ai({type:2,toast:r}),r.id},Z=(t,e)=>Pa("blank")(t,e);Z.error=Pa("error");Z.success=Pa("success");Z.loading=Pa("loading");Z.custom=Pa("custom");Z.dismiss=t=>{Ai({type:3,toastId:t})};Z.remove=t=>Ai({type:4,toastId:t});Z.promise=(t,e,n)=>{let r=Z.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?bu(e.success,i):void 0;return s?Z.success(s,{id:r,...n,...n==null?void 0:n.success}):Z.dismiss(r),i}).catch(i=>{let s=e.error?bu(e.error,i):void 0;s?Z.error(s,{id:r,...n,...n==null?void 0:n.error}):Z.dismiss(r)}),t};var wO=(t,e)=>{Ai({type:1,toast:{id:t,height:e}})},EO=()=>{Ai({type:5,time:Date.now()})},Mo=new Map,TO=1e3,IO=(t,e=TO)=>{if(Mo.has(t))return;let n=setTimeout(()=>{Mo.delete(t),Ai({type:4,toastId:t})},e);Mo.set(t,n)},SO=t=>{let{toasts:e,pausedAt:n}=vO(t);D.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(l=>{if(l.duration===1/0)return;let u=(l.duration||0)+l.pauseDuration-(s-l.createdAt);if(u<0){l.visible&&Z.dismiss(l.id);return}return setTimeout(()=>Z.dismiss(l.id),u)});return()=>{o.forEach(l=>l&&clearTimeout(l))}},[e,n]);let r=D.useCallback(()=>{n&&Ai({type:6,time:Date.now()})},[n]),i=D.useCallback((s,o)=>{let{reverseOrder:l=!1,gutter:u=8,defaultPosition:c}=o||{},h=e.filter(y=>(y.position||c)===(s.position||c)&&y.height),f=h.findIndex(y=>y.id===s.id),m=h.filter((y,x)=>x<f&&y.visible).length;return h.filter(y=>y.visible).slice(...l?[m+1]:[0,m]).reduce((y,x)=>y+(x.height||0)+u,0)},[e]);return D.useEffect(()=>{e.forEach(s=>{if(s.dismissed)IO(s.id,s.removeDelay);else{let o=Mo.get(s.id);o&&(clearTimeout(o),Mo.delete(s.id))}})},[e]),{toasts:e,handlers:{updateHeight:wO,startPause:EO,endPause:r,calculateOffset:i}}},xO=Hn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,CO=Hn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,kO=Hn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,AO=$r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${CO} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${kO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,PO=Hn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,RO=$r("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${PO} 1s linear infinite;
`,NO=Hn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,bO=Hn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,DO=$r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${NO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${bO} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,OO=$r("div")`
  position: absolute;
`,MO=$r("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,VO=Hn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,LO=$r("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${VO} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,jO=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(LO,null,e):e:n==="blank"?null:D.createElement(MO,null,D.createElement(RO,{...r}),n!=="loading"&&D.createElement(OO,null,n==="error"?D.createElement(AO,{...r}):D.createElement(DO,{...r})))},FO=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,UO=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,$O="0%{opacity:0;} 100%{opacity:1;}",BO="0%{opacity:1;} 100%{opacity:0;}",zO=$r("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,WO=$r("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,qO=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=x1()?[$O,BO]:[FO(n),UO(n)];return{animation:e?`${Hn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Hn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},HO=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?qO(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(jO,{toast:t}),o=D.createElement(WO,{...t.ariaProps},bu(t.message,t));return D.createElement(zO,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):D.createElement(D.Fragment,null,s,o))});fO(D.createElement);var GO=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},KO=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:x1()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},QO=kc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,yl=16,YO=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:u}=SO(n);return D.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:yl,left:yl,right:yl,bottom:yl,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(c=>{let h=c.position||e,f=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),m=KO(h,f);return D.createElement(GO,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?QO:"",style:m},c.type==="custom"?bu(c.message,c):i?i(c):D.createElement(HO,{toast:c,position:h}))}))};const k1=D.createContext(null),XO=({children:t})=>{const[e,n]=D.useState(null),[r,i]=D.useState(!0);D.useEffect(()=>{const u=CP(gl,async c=>{var h;if(c)try{const f=kr(it,"users",c.uid),m=await lf(f);m.exists()?n({id:c.uid,email:c.email||"",displayName:c.displayName||"",createdAt:((h=m.data().createdAt)==null?void 0:h.toDate())||new Date}):(await Zv(f,{email:c.email,displayName:c.displayName,createdAt:da()}),n({id:c.uid,email:c.email||"",displayName:c.displayName||"",createdAt:new Date}))}catch(f){console.error("Error fetching user data:",f),n(null)}else n(null);i(!1)});return()=>u()},[]);const s=async(u,c,h)=>{try{i(!0);const f=await wP(gl,u,c),{user:m}=f;await IP(m,{displayName:h});const y=kr(it,"users",m.uid);await Zv(y,{email:u,displayName:h,createdAt:da()}),Z.success("Account created successfully!")}catch(f){let m="Failed to create account";throw f.code==="auth/email-already-in-use"?m="This email is already registered":f.code==="auth/weak-password"&&(m="Password should be at least 6 characters"),Z.error(m),f}finally{i(!1)}},o=async(u,c)=>{try{i(!0),await EP(gl,u,c),Z.success("Signed in successfully!")}catch(h){let f="Failed to sign in";throw(h.code==="auth/user-not-found"||h.code==="auth/wrong-password")&&(f="Invalid email or password"),Z.error(f),h}finally{i(!1)}},l=async()=>{try{await kP(gl),Z.success("Signed out successfully")}catch(u){throw Z.error("Failed to sign out"),u}};return g.jsx(k1.Provider,{value:{user:e,loading:r,signIn:o,signUp:s,signOut:l},children:t})},mn=()=>{const t=D.useContext(k1);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ue=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},h)=>D.createElement("svg",{ref:h,...JO,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${ZO(t)}`,l].join(" "),...c},[...e.map(([f,m])=>D.createElement(f,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=Ue("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=Ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=Ue("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Ue("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=Ue("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=Ue("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=Ue("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=Ue("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=Ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=Ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=Ue("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=Ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=Ue("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=Ue("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=Ue("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=Ue("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=Ue("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=Ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),le=({children:t,variant:e="primary",size:n="md",isLoading:r=!1,fullWidth:i=!1,icon:s,iconPosition:o="left",className:l="",...u})=>{const c="font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2",h={primary:"bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",secondary:"bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500",accent:"bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-400",outline:"border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-primary-500",ghost:"bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-transparent"},f={sm:"text-sm px-3 py-1.5",md:"text-base px-4 py-2",lg:"text-lg px-6 py-3"},m=i?"w-full":"",y=r?"opacity-70 cursor-not-allowed":"";return g.jsxs("button",{className:`${c} ${h[e]} ${f[n]} ${m} ${y} ${l}`,disabled:r||u.disabled,...u,children:[r?g.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[g.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),g.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):s&&o==="left"?g.jsx("span",{className:"mr-2",children:s}):null,t,!r&&s&&o==="right"?g.jsx("span",{className:"ml-2",children:s}):null]})},uM=()=>{const{user:t,signOut:e}=mn(),[n,r]=D.useState(!1),i=Rs(),s=Ti(),o=async()=>{await e(),s("/login")},l=c=>i.pathname===c,u=[{name:"Dashboard",path:"/dashboard",icon:g.jsx(tM,{className:"h-5 w-5"})},{name:"Groups",path:"/groups",icon:g.jsx(Du,{className:"h-5 w-5"})},{name:"Notifications",path:"/notifications",icon:g.jsx(A1,{className:"h-5 w-5"})}];return g.jsxs("nav",{className:"bg-white shadow-sm border-b border-gray-200",children:[g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"flex justify-between h-16",children:[g.jsxs("div",{className:"flex",children:[g.jsx("div",{className:"flex-shrink-0 flex items-center",children:g.jsxs(Mt,{to:"/",className:"flex items-center",children:[g.jsx("div",{className:"bg-primary-600 p-1 rounded",children:g.jsx(vm,{className:"h-6 w-6 text-white"})}),g.jsx("span",{className:"ml-2 text-xl font-bold text-gray-900",children:"FitSquad"})]})}),t&&g.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:u.map(c=>g.jsxs(Mt,{to:c.path,className:`${l(c.path)?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`,children:[g.jsx("span",{className:"mr-1",children:c.icon}),c.name]},c.path))})]}),g.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:t?g.jsxs("div",{className:"flex items-center",children:[g.jsx("span",{className:"text-sm text-gray-500 mr-4",children:t.displayName}),g.jsx(le,{variant:"outline",size:"sm",onClick:o,icon:g.jsx(c0,{className:"h-4 w-4"}),children:"Sign out"})]}):g.jsxs("div",{className:"flex space-x-4",children:[g.jsx(Mt,{to:"/login",children:g.jsx(le,{variant:"outline",size:"sm",children:"Sign in"})}),g.jsx(Mt,{to:"/register",children:g.jsx(le,{size:"sm",children:"Join Now"})})]})}),g.jsx("div",{className:"flex items-center sm:hidden",children:g.jsxs("button",{type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500","aria-expanded":"false",onClick:()=>r(!n),children:[g.jsx("span",{className:"sr-only",children:"Open main menu"}),n?g.jsx(lM,{className:"block h-6 w-6","aria-hidden":"true"}):g.jsx(sM,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),n&&g.jsxs("div",{className:"sm:hidden",children:[g.jsx("div",{className:"pt-2 pb-3 space-y-1",children:t&&u.map(c=>g.jsxs(Mt,{to:c.path,className:`${l(c.path)?"bg-primary-50 border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"} block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex items-center`,onClick:()=>r(!1),children:[g.jsx("span",{className:"mr-2",children:c.icon}),c.name]},c.path))}),g.jsx("div",{className:"pt-4 pb-3 border-t border-gray-200",children:t?g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex items-center px-4",children:[g.jsx("div",{className:"flex-shrink-0",children:g.jsx("div",{className:"h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center",children:g.jsx("span",{className:"text-primary-800 font-medium",children:t.displayName.charAt(0).toUpperCase()})})}),g.jsxs("div",{className:"ml-3",children:[g.jsx("div",{className:"text-base font-medium text-gray-800",children:t.displayName}),g.jsx("div",{className:"text-sm font-medium text-gray-500",children:t.email})]})]}),g.jsx("div",{className:"mt-3 space-y-1",children:g.jsx("button",{className:"block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100",onClick:()=>{o(),r(!1)},children:g.jsxs("span",{className:"flex items-center",children:[g.jsx(c0,{className:"mr-2 h-5 w-5"}),"Sign out"]})})})]}):g.jsxs("div",{className:"space-y-1 px-4",children:[g.jsx(Mt,{to:"/login",className:"block text-left py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100",onClick:()=>r(!1),children:"Sign in"}),g.jsx(Mt,{to:"/register",className:"block text-left py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100",onClick:()=>r(!1),children:"Join Now"})]})})]})]})},vl=({children:t,showNav:e=!0})=>g.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col",children:[e&&g.jsx(uM,{}),g.jsx("main",{className:"flex-1",children:t}),g.jsx(YO,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#fff",color:"#363636",boxShadow:"0 3px 10px rgba(0, 0, 0, 0.1)",borderRadius:"8px",padding:"16px"},success:{iconTheme:{primary:"#10B981",secondary:"#fff"}},error:{iconTheme:{primary:"#EF4444",secondary:"#fff"}}}})]}),On=({label:t,error:e,fullWidth:n=!0,icon:r,className:i="",...s})=>{const o=s.id||Math.random().toString(36).substring(2,9),l=n?"w-full":"",u=e?"border-error-500 focus:ring-error-500 focus:border-error-500":"border-gray-300 focus:ring-primary-500 focus:border-primary-500";return g.jsxs("div",{className:`${l} ${i}`,children:[t&&g.jsx("label",{htmlFor:o,className:"block text-sm font-medium text-gray-700 mb-1",children:t}),g.jsxs("div",{className:"relative rounded-md",children:[r&&g.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:r}),g.jsx("input",{id:o,className:`block ${l} ${u} ${r?"pl-10":"pl-4"} pr-4 py-2 rounded-md shadow-sm text-base focus:outline-none focus:ring-2 transition duration-150`,...s})]}),e&&g.jsx("p",{className:"mt-1 text-sm text-error-500",children:e})]})},N1=({children:t,title:e,subtitle:n,type:r})=>g.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[g.jsx("div",{className:"flex justify-center",children:g.jsx("div",{className:"bg-primary-600 p-3 rounded-full",children:g.jsx(vm,{className:"h-8 w-8 text-white"})})}),g.jsx("h2",{className:"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900",children:e}),g.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:n})]}),g.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:g.jsxs("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[t,g.jsxs("div",{className:"mt-6",children:[g.jsxs("div",{className:"relative",children:[g.jsx("div",{className:"absolute inset-0 flex items-center",children:g.jsx("div",{className:"w-full border-t border-gray-300"})}),g.jsx("div",{className:"relative flex justify-center text-sm",children:g.jsx("span",{className:"bg-white px-2 text-gray-500",children:r==="login"?"New to FitSquad?":"Already have an account?"})})]}),g.jsx("div",{className:"mt-6 text-center",children:r==="login"?g.jsx(Mt,{to:"/register",className:"font-medium text-primary-600 hover:text-primary-500",children:"Create an account"}):g.jsx(Mt,{to:"/login",className:"font-medium text-primary-600 hover:text-primary-500",children:"Sign in to your account"})})]})]})})]}),cM=()=>{const t=Ti(),{signIn:e,loading:n}=mn(),[r,i]=D.useState({email:"",password:""}),[s,o]=D.useState({}),l=h=>{i({...r,[h.target.name]:h.target.value}),s[h.target.name]&&o({...s,[h.target.name]:""})},u=()=>{const h={};return r.email?/\S+@\S+\.\S+/.test(r.email.toString())||(h.email="Email is invalid"):h.email="Email is required",r.password?r.password.toString().length<6&&(h.password="Password must be at least 6 characters"):h.password="Password is required",o(h),Object.keys(h).length===0},c=async h=>{if(h.preventDefault(),!!u())try{await e(r.email.toString(),r.password.toString()),t("/dashboard")}catch(f){console.error("Login error:",f)}};return g.jsx(N1,{title:"Welcome back",subtitle:"Sign in to your FitSquad account",type:"login",children:g.jsxs("form",{className:"space-y-6",onSubmit:c,children:[g.jsx(On,{name:"email",type:"email",label:"Email address",placeholder:"you@example.com",value:r.email,onChange:l,error:s.email,icon:g.jsx(P1,{className:"h-5 w-5 text-gray-400"}),required:!0}),g.jsx(On,{name:"password",type:"password",label:"Password",placeholder:"••••••••",value:r.password,onChange:l,error:s.password,icon:g.jsx(pf,{className:"h-5 w-5 text-gray-400"}),required:!0}),g.jsx("div",{children:g.jsx(le,{type:"submit",fullWidth:!0,isLoading:n,children:"Sign in"})})]})})},dM=()=>{const t=Ti(),{signUp:e,loading:n}=mn(),[r,i]=D.useState({displayName:"",email:"",password:"",confirmPassword:""}),[s,o]=D.useState({}),l=h=>{i({...r,[h.target.name]:h.target.value}),s[h.target.name]&&o({...s,[h.target.name]:""})},u=()=>{const h={};return r.displayName||(h.displayName="Name is required"),r.email?/\S+@\S+\.\S+/.test(r.email.toString())||(h.email="Email is invalid"):h.email="Email is required",r.password?r.password.toString().length<6&&(h.password="Password must be at least 6 characters"):h.password="Password is required",r.confirmPassword?r.password!==r.confirmPassword&&(h.confirmPassword="Passwords do not match"):h.confirmPassword="Please confirm your password",o(h),Object.keys(h).length===0},c=async h=>{if(h.preventDefault(),!!u())try{await e(r.email.toString(),r.password.toString(),r.displayName.toString()),t("/dashboard")}catch(f){console.error("Registration error:",f)}};return g.jsx(N1,{title:"Join FitSquad",subtitle:"Create your account to get started",type:"register",children:g.jsxs("form",{className:"space-y-6",onSubmit:c,children:[g.jsx(On,{name:"displayName",type:"text",label:"Full name",placeholder:"John Doe",value:r.displayName,onChange:l,error:s.displayName,icon:g.jsx(aM,{className:"h-5 w-5 text-gray-400"}),required:!0}),g.jsx(On,{name:"email",type:"email",label:"Email address",placeholder:"you@example.com",value:r.email,onChange:l,error:s.email,icon:g.jsx(P1,{className:"h-5 w-5 text-gray-400"}),required:!0}),g.jsx(On,{name:"password",type:"password",label:"Password",placeholder:"••••••••",value:r.password,onChange:l,error:s.password,icon:g.jsx(pf,{className:"h-5 w-5 text-gray-400"}),required:!0}),g.jsx(On,{name:"confirmPassword",type:"password",label:"Confirm password",placeholder:"••••••••",value:r.confirmPassword,onChange:l,error:s.confirmPassword,icon:g.jsx(pf,{className:"h-5 w-5 text-gray-400"}),required:!0}),g.jsx("div",{children:g.jsx(le,{type:"submit",fullWidth:!0,isLoading:n,children:"Create account"})})]})})},_m=(t=null)=>{const{user:e}=mn(),[n,r]=D.useState([]),[i,s]=D.useState(!0);return D.useEffect(()=>{if(!e){r([]),s(!1);return}let u;t?u=as(Dn(it,"workouts"),ti("groupId","==",t),Ul("createdAt","desc")):u=as(Dn(it,"workouts"),ti("userId","==",e.id),Ul("createdAt","desc"));const c=ZT(u,h=>{const f=h.docs.map(m=>{var x;const y=m.data();return{id:m.id,userId:y.userId,userName:y.userName,type:y.type,duration:y.duration,notes:y.notes||"",createdAt:((x=y.createdAt)==null?void 0:x.toDate())||new Date,groupId:y.groupId}});r(f),s(!1)},h=>{console.error("Error loading workouts:",h),s(!1)});return()=>c()},[e,t]),{workouts:n,loading:i,addWorkout:async u=>{if(!e)return null;try{const c={...u,userId:e.id,userName:e.displayName,createdAt:da()},h=await cm(Dn(it,"workouts"),c);return Z.success("Workout logged successfully!"),h.id}catch(c){return console.error("Error adding workout:",c),Z.error("Failed to log workout"),null}},getUserWorkoutsInGroup:async(u,c)=>{try{const h=as(Dn(it,"workouts"),ti("userId","==",u),ti("groupId","==",c),Ul("createdAt","desc"));return(await uf(h)).docs.map(m=>{var x;const y=m.data();return{id:m.id,userId:y.userId,userName:y.userName,type:y.type,duration:y.duration,notes:y.notes||"",createdAt:((x=y.createdAt)==null?void 0:x.toDate())||new Date,groupId:y.groupId}})}catch(h){return console.error("Error getting user workouts in group:",h),[]}}}},dt=({children:t,className:e="",onClick:n,hoverable:r=!1})=>{const i=r?"hover:shadow-md transform hover:-translate-y-1 transition-all cursor-pointer":"",s=n?"cursor-pointer":"";return g.jsx("div",{className:`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${i} ${s} ${e}`,onClick:n,children:t})},Vo=({children:t,className:e=""})=>g.jsx("div",{className:`px-4 py-3 border-b border-gray-100 bg-gray-50 ${e}`,children:t}),ht=({children:t,className:e=""})=>g.jsx("div",{className:`p-4 ${e}`,children:t}),hM=({children:t,className:e=""})=>g.jsx("div",{className:`px-4 py-3 border-t border-gray-100 bg-gray-50 ${e}`,children:t}),fM=()=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let e="";for(let n=0;n<6;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},Ac=()=>{const{user:t}=mn(),[e,n]=D.useState([]),[r,i]=D.useState(!0);D.useEffect(()=>{(async()=>{if(!t){n([]),i(!1);return}try{const h=as(Dn(it,"groups"),ti("members","array-contains",t.id)),m=(await uf(h)).docs.map(y=>{var P;const x=y.data();return{id:y.id,name:x.name,description:x.description,createdBy:x.createdBy,createdAt:((P=x.createdAt)==null?void 0:P.toDate())||new Date,code:x.code,members:x.members}});n(m)}catch(h){console.error("Error loading groups:",h)}finally{i(!1)}})()},[t]);const s=async(c,h)=>{if(!t)return null;try{const f=fM(),m={name:c,description:h,createdBy:t.id,createdAt:da(),code:f,members:[t.id]},y=await cm(Dn(it,"groups"),m);return n(x=>[...x,{id:y.id,name:c,description:h,createdBy:t.id,createdAt:new Date,code:f,members:[t.id]}]),Z.success("Group created successfully!"),y.id}catch(f){return console.error("Error creating group:",f),Z.error("Failed to create group"),null}},o=async c=>{if(!t)return!1;try{const h=as(Dn(it,"groups"),ti("code","==",c)),f=await uf(h);if(f.empty)return Z.error("Group not found. Check the code and try again."),!1;const m=f.docs[0],y=m.data();return y.members.includes(t.id)?(Z.error("You are already a member of this group"),!1):(await cf(kr(it,"groups",m.id),{members:L2(t.id)}),n(x=>{var P;return[...x,{id:m.id,name:y.name,description:y.description,createdBy:y.createdBy,createdAt:((P=y.createdAt)==null?void 0:P.toDate())||new Date,code:y.code,members:[...y.members,t.id]}]}),Z.success(`You've joined ${y.name}!`),!0)}catch(h){return console.error("Error joining group:",h),Z.error("Failed to join group"),!1}},l=async c=>{var h;try{const f=kr(it,"groups",c),m=await lf(f);if(!m.exists())return null;const y=m.data();return{id:m.id,name:y.name,description:y.description,createdBy:y.createdBy,createdAt:((h=y.createdAt)==null?void 0:h.toDate())||new Date,code:y.code,members:y.members}}catch(f){return console.error("Error getting group:",f),null}};return{groups:e,loading:r,createGroup:s,joinGroup:o,getGroup:l,getGroupMembers:async c=>{try{const h=await l(c);if(!h)return[];const f=[];for(const m of h.members){const y=kr(it,"users",m),x=await lf(y);if(x.exists()){const P=x.data();f.push({id:x.id,displayName:P.displayName,email:P.email})}}return f}catch(h){return console.error("Error getting group members:",h),[]}}}},pM=["Running","Walking","Cycling","Swimming","Hiking","Weights","Yoga","HIIT","Pilates","Other"],b1=({onComplete:t,groupId:e=null})=>{const{addWorkout:n}=_m(),{groups:r}=Ac(),[i,s]=D.useState({type:"",duration:30,notes:"",groupId:e||""}),[o,l]=D.useState({}),[u,c]=D.useState(!1),h=y=>{const{name:x,value:P}=y.target;s({...i,[x]:P}),o[x]&&l({...o,[x]:""})},f=()=>{const y={};return i.type||(y.type="Please select a workout type"),i.duration?Number(i.duration)<=0&&(y.duration="Duration must be greater than 0"):y.duration="Duration is required",i.groupId||(y.groupId="Please select a group"),l(y),Object.keys(y).length===0},m=async y=>{var x;if(y.preventDefault(),!!f()){c(!0);try{await n({type:i.type.toString(),duration:Number(i.duration),notes:((x=i.notes)==null?void 0:x.toString())||"",groupId:i.groupId.toString()}),s({type:"",duration:30,notes:"",groupId:e||""}),t()}catch(P){console.error("Error adding workout:",P)}finally{c(!1)}}};return g.jsxs("form",{onSubmit:m,className:"space-y-6",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[g.jsxs("div",{children:[g.jsx("label",{htmlFor:"type",className:"block text-sm font-medium text-gray-700 mb-1",children:"Workout Type"}),g.jsxs("select",{id:"type",name:"type",value:i.type,onChange:h,className:`block w-full rounded-md shadow-sm py-2 px-3 border ${o.type?"border-error-500":"border-gray-300"} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`,children:[g.jsx("option",{value:"",children:"Select workout type"}),pM.map(y=>g.jsx("option",{value:y,children:y},y))]}),o.type&&g.jsx("p",{className:"mt-1 text-sm text-error-500",children:o.type})]}),g.jsxs("div",{children:[g.jsx("label",{htmlFor:"duration",className:"block text-sm font-medium text-gray-700 mb-1",children:"Duration (minutes)"}),g.jsx(On,{id:"duration",name:"duration",type:"number",value:i.duration,onChange:h,error:o.duration,min:1})]})]}),g.jsxs("div",{children:[g.jsx("label",{htmlFor:"groupId",className:"block text-sm font-medium text-gray-700 mb-1",children:"Share with Group"}),g.jsxs("select",{id:"groupId",name:"groupId",value:i.groupId,onChange:h,className:`block w-full rounded-md shadow-sm py-2 px-3 border ${o.groupId?"border-error-500":"border-gray-300"} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`,disabled:!!e,children:[g.jsx("option",{value:"",children:"Select a group"}),r.map(y=>g.jsx("option",{value:y.id,children:y.name},y.id))]}),o.groupId&&g.jsx("p",{className:"mt-1 text-sm text-error-500",children:o.groupId})]}),g.jsxs("div",{children:[g.jsx("label",{htmlFor:"notes",className:"block text-sm font-medium text-gray-700 mb-1",children:"Notes (optional)"}),g.jsx("textarea",{id:"notes",name:"notes",rows:3,value:i.notes,onChange:h,placeholder:"How did you feel? Any achievements?",className:"block w-full rounded-md shadow-sm py-2 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"})]}),g.jsxs("div",{className:"flex justify-end",children:[g.jsx(le,{type:"button",variant:"outline",className:"mr-3",onClick:t,children:"Cancel"}),g.jsx(le,{type:"submit",isLoading:u,children:"Log Workout"})]})]})};function Ou(t){"@babel/helpers - typeof";return Ou=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ou(t)}function _i(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function gt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function gn(t){gt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||Ou(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function mM(t,e){gt(2,arguments);var n=gn(t).getTime(),r=_i(e);return new Date(n+r)}var gM={};function Pc(){return gM}function yM(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function vM(t){return gt(1,arguments),t instanceof Date||Ou(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function _M(t){if(gt(1,arguments),!vM(t)&&typeof t!="number")return!1;var e=gn(t);return!isNaN(Number(e))}function wM(t,e){gt(2,arguments);var n=_i(e);return mM(t,-n)}var EM=864e5;function TM(t){gt(1,arguments);var e=gn(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/EM)+1}function Mu(t){gt(1,arguments);var e=1,n=gn(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function D1(t){gt(1,arguments);var e=gn(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Mu(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var o=Mu(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function IM(t){gt(1,arguments);var e=D1(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Mu(n);return r}var SM=6048e5;function xM(t){gt(1,arguments);var e=gn(t),n=Mu(e).getTime()-IM(e).getTime();return Math.round(n/SM)+1}function Vu(t,e){var n,r,i,s,o,l,u,c;gt(1,arguments);var h=Pc(),f=_i((n=(r=(i=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&i!==void 0?i:h.weekStartsOn)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&n!==void 0?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=gn(t),y=m.getUTCDay(),x=(y<f?7:0)+y-f;return m.setUTCDate(m.getUTCDate()-x),m.setUTCHours(0,0,0,0),m}function O1(t,e){var n,r,i,s,o,l,u,c;gt(1,arguments);var h=gn(t),f=h.getUTCFullYear(),m=Pc(),y=_i((n=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&i!==void 0?i:m.firstWeekContainsDate)!==null&&r!==void 0?r:(u=m.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setUTCFullYear(f+1,0,y),x.setUTCHours(0,0,0,0);var P=Vu(x,e),b=new Date(0);b.setUTCFullYear(f,0,y),b.setUTCHours(0,0,0,0);var T=Vu(b,e);return h.getTime()>=P.getTime()?f+1:h.getTime()>=T.getTime()?f:f-1}function CM(t,e){var n,r,i,s,o,l,u,c;gt(1,arguments);var h=Pc(),f=_i((n=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&i!==void 0?i:h.firstWeekContainsDate)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&n!==void 0?n:1),m=O1(t,e),y=new Date(0);y.setUTCFullYear(m,0,f),y.setUTCHours(0,0,0,0);var x=Vu(y,e);return x}var kM=6048e5;function AM(t,e){gt(1,arguments);var n=gn(t),r=Vu(n,e).getTime()-CM(n,e).getTime();return Math.round(r/kM)+1}function ae(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var tr={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return ae(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):ae(r+1,2)},d:function(e,n){return ae(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return ae(e.getUTCHours()%12||12,n.length)},H:function(e,n){return ae(e.getUTCHours(),n.length)},m:function(e,n){return ae(e.getUTCMinutes(),n.length)},s:function(e,n){return ae(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),s=Math.floor(i*Math.pow(10,r-3));return ae(s,n.length)}},Oi={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},PM={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return tr.y(e,n)},Y:function(e,n,r,i){var s=O1(e,i),o=s>0?s:1-s;if(n==="YY"){var l=o%100;return ae(l,2)}return n==="Yo"?r.ordinalNumber(o,{unit:"year"}):ae(o,n.length)},R:function(e,n){var r=D1(e);return ae(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return ae(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return ae(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return ae(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return tr.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return ae(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var s=AM(e,i);return n==="wo"?r.ordinalNumber(s,{unit:"week"}):ae(s,n.length)},I:function(e,n,r){var i=xM(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):ae(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):tr.d(e,n)},D:function(e,n,r){var i=TM(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):ae(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return ae(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return ae(o,n.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),s=i===0?7:i;switch(n){case"i":return String(s);case"ii":return ae(s,n.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),s=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),s;switch(i===12?s=Oi.noon:i===0?s=Oi.midnight:s=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),s;switch(i>=17?s=Oi.evening:i>=12?s=Oi.afternoon:i>=4?s=Oi.morning:s=Oi.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return tr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):tr.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):ae(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):ae(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):tr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):tr.s(e,n)},S:function(e,n){return tr.S(e,n)},X:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return h0(o);case"XXXX":case"XX":return Yr(o);case"XXXXX":case"XXX":default:return Yr(o,":")}},x:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"x":return h0(o);case"xxxx":case"xx":return Yr(o);case"xxxxx":case"xxx":default:return Yr(o,":")}},O:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+d0(o,":");case"OOOO":default:return"GMT"+Yr(o,":")}},z:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+d0(o,":");case"zzzz":default:return"GMT"+Yr(o,":")}},t:function(e,n,r,i){var s=i._originalDate||e,o=Math.floor(s.getTime()/1e3);return ae(o,n.length)},T:function(e,n,r,i){var s=i._originalDate||e,o=s.getTime();return ae(o,n.length)}};function d0(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),s=r%60;if(s===0)return n+String(i);var o=e;return n+String(i)+o+ae(s,2)}function h0(t,e){if(t%60===0){var n=t>0?"-":"+";return n+ae(Math.abs(t)/60,2)}return Yr(t,e)}function Yr(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),s=ae(Math.floor(i/60),2),o=ae(i%60,2);return r+s+n+o}var f0=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},M1=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},RM=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return f0(e,n);var o;switch(i){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;case"PPPP":default:o=n.dateTime({width:"full"});break}return o.replace("{{date}}",f0(i,n)).replace("{{time}}",M1(s,n))},NM={p:M1,P:RM},bM=["D","DD"],DM=["YY","YYYY"];function OM(t){return bM.indexOf(t)!==-1}function MM(t){return DM.indexOf(t)!==-1}function p0(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var VM={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},LM=function(e,n,r){var i,s=VM[e];return typeof s=="string"?i=s:n===1?i=s.one:i=s.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Ud(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var jM={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},FM={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},UM={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$M={date:Ud({formats:jM,defaultWidth:"full"}),time:Ud({formats:FM,defaultWidth:"full"}),dateTime:Ud({formats:UM,defaultWidth:"full"})},BM={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},zM=function(e,n,r,i){return BM[e]};function ao(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var s=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):s;i=t.formattingValues[o]||t.formattingValues[s]}else{var l=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[u]||t.values[l]}var c=t.argumentCallback?t.argumentCallback(e):e;return i[c]}}var WM={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},qM={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},HM={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},GM={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},KM={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},QM={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},YM=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},XM={ordinalNumber:YM,era:ao({values:WM,defaultWidth:"wide"}),quarter:ao({values:qM,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:ao({values:HM,defaultWidth:"wide"}),day:ao({values:GM,defaultWidth:"wide"}),dayPeriod:ao({values:KM,defaultWidth:"wide",formattingValues:QM,defaultFormattingWidth:"wide"})};function lo(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],l=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?ZM(l,function(f){return f.test(o)}):JM(l,function(f){return f.test(o)}),c;c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;var h=e.slice(o.length);return{value:c,rest:h}}}function JM(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function ZM(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function eV(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var l=e.slice(i.length);return{value:o,rest:l}}}var tV=/^(\d+)(th|st|nd|rd)?/i,nV=/\d+/i,rV={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},iV={any:[/^b/i,/^(a|c)/i]},sV={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},oV={any:[/1/i,/2/i,/3/i,/4/i]},aV={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},lV={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},uV={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},cV={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},dV={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},hV={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},fV={ordinalNumber:eV({matchPattern:tV,parsePattern:nV,valueCallback:function(e){return parseInt(e,10)}}),era:lo({matchPatterns:rV,defaultMatchWidth:"wide",parsePatterns:iV,defaultParseWidth:"any"}),quarter:lo({matchPatterns:sV,defaultMatchWidth:"wide",parsePatterns:oV,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:lo({matchPatterns:aV,defaultMatchWidth:"wide",parsePatterns:lV,defaultParseWidth:"any"}),day:lo({matchPatterns:uV,defaultMatchWidth:"wide",parsePatterns:cV,defaultParseWidth:"any"}),dayPeriod:lo({matchPatterns:dV,defaultMatchWidth:"any",parsePatterns:hV,defaultParseWidth:"any"})},pV={code:"en-US",formatDistance:LM,formatLong:$M,formatRelative:zM,localize:XM,match:fV,options:{weekStartsOn:0,firstWeekContainsDate:1}},mV=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,gV=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,yV=/^'([^]*?)'?$/,vV=/''/g,_V=/[a-zA-Z]/;function V1(t,e,n){var r,i,s,o,l,u,c,h,f,m,y,x,P,b;gt(2,arguments);var T=String(e),E=Pc(),k=(r=(i=void 0)!==null&&i!==void 0?i:E.locale)!==null&&r!==void 0?r:pV,M=_i((s=(o=(l=(u=void 0)!==null&&u!==void 0?u:void 0)!==null&&l!==void 0?l:E.firstWeekContainsDate)!==null&&o!==void 0?o:(c=E.locale)===null||c===void 0||(h=c.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(M>=1&&M<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var F=_i((f=(m=(y=(x=void 0)!==null&&x!==void 0?x:void 0)!==null&&y!==void 0?y:E.weekStartsOn)!==null&&m!==void 0?m:(P=E.locale)===null||P===void 0||(b=P.options)===null||b===void 0?void 0:b.weekStartsOn)!==null&&f!==void 0?f:0);if(!(F>=0&&F<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var U=gn(t);if(!_M(U))throw new RangeError("Invalid time value");var I=yM(U),_=wM(U,I),w={firstWeekContainsDate:M,weekStartsOn:F,locale:k,_originalDate:U},S=T.match(gV).map(function(A){var R=A[0];if(R==="p"||R==="P"){var C=NM[R];return C(A,k.formatLong)}return A}).join("").match(mV).map(function(A){if(A==="''")return"'";var R=A[0];if(R==="'")return wV(A);var C=PM[R];if(C)return MM(A)&&p0(A,e,String(t)),OM(A)&&p0(A,e,String(t)),C(_,A,k.localize,w);if(R.match(_V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return A}).join("");return S}function wV(t){var e=t.match(yV);return e?e[1].replace(vV,"'"):t}const EV=t=>({Running:"bg-blue-100 text-blue-700",Walking:"bg-green-100 text-green-700",Cycling:"bg-indigo-100 text-indigo-700",Swimming:"bg-cyan-100 text-cyan-700",Hiking:"bg-amber-100 text-amber-700",Weights:"bg-fuchsia-100 text-fuchsia-700",Yoga:"bg-purple-100 text-purple-700",HIIT:"bg-rose-100 text-rose-700",Pilates:"bg-pink-100 text-pink-700",Other:"bg-gray-100 text-gray-700"})[t]||"bg-gray-100 text-gray-700",L1=({workout:t,showUser:e=!1})=>{const n=i=>{if(i<60)return`${i} min`;const s=Math.floor(i/60),o=i%60;return o===0?`${s} ${s===1?"hour":"hours"}`:`${s} ${s===1?"hour":"hours"} ${o} min`},r=EV(t.type);return g.jsx(dt,{hoverable:!0,className:"transition-all duration-300 h-full",children:g.jsxs(ht,{className:"flex flex-col h-full",children:[g.jsxs("div",{className:"flex items-start justify-between mb-4",children:[g.jsxs("div",{children:[g.jsx("span",{className:`inline-block px-2 py-1 rounded text-xs font-medium ${r}`,children:t.type}),e&&g.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["By ",t.userName]})]}),g.jsx("span",{className:"text-sm text-gray-500",children:V1(new Date(t.createdAt),"MMM d, yyyy")})]}),g.jsxs("div",{className:"flex items-center mt-2",children:[g.jsx(iM,{className:"h-4 w-4 text-gray-400 mr-1"}),g.jsx("span",{className:"text-sm text-gray-700",children:n(t.duration)})]}),t.notes&&g.jsx("div",{className:"mt-3",children:g.jsxs("div",{className:"flex items-start",children:[g.jsx(mf,{className:"h-4 w-4 text-gray-400 mr-1 mt-1 flex-shrink-0"}),g.jsx("p",{className:"text-sm text-gray-600",children:t.notes})]})})]})})},TV=()=>{const{user:t}=mn(),{workouts:e,loading:n}=_m(),r=Ti(),[i,s]=D.useState(!1),o=e.slice(0,5),l=e.filter(h=>{const f=new Date(h.createdAt),m=new Date,y=new Date(m.setDate(m.getDate()-7));return f>=y}).length,u={};e.forEach(h=>{u[h.type]=(u[h.type]||0)+1});const c=e.length>0?Object.entries(u).reduce((h,f)=>h[1]>f[1]?h:f)[0]:null;return g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[g.jsxs("div",{className:"mb-8",children:[g.jsxs("h1",{className:"text-2xl font-bold text-gray-900",children:["Welcome back, ",t==null?void 0:t.displayName,"!"]}),g.jsx("p",{className:"mt-1 text-gray-600",children:"Track your workouts and stay accountable with your fitness groups."})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[g.jsx(dt,{className:"bg-primary-50 border-primary-100",children:g.jsx(ht,{children:g.jsxs("div",{className:"flex items-center",children:[g.jsx("div",{className:"bg-primary-100 p-3 rounded-full",children:g.jsx(u0,{className:"h-6 w-6 text-primary-700"})}),g.jsxs("div",{className:"ml-4",children:[g.jsx("h3",{className:"text-lg font-medium text-primary-900",children:e.length}),g.jsx("p",{className:"text-sm text-primary-700",children:"Total Workouts"})]})]})})}),g.jsx(dt,{className:"bg-secondary-50 border-secondary-100",children:g.jsx(ht,{children:g.jsxs("div",{className:"flex items-center",children:[g.jsx("div",{className:"bg-secondary-100 p-3 rounded-full",children:g.jsx(nM,{className:"h-6 w-6 text-secondary-700"})}),g.jsxs("div",{className:"ml-4",children:[g.jsx("h3",{className:"text-lg font-medium text-secondary-900",children:l}),g.jsx("p",{className:"text-sm text-secondary-700",children:"Workouts This Week"})]})]})})}),g.jsx(dt,{className:"bg-accent-50 border-accent-100",children:g.jsx(ht,{children:g.jsxs("div",{className:"flex items-center",children:[g.jsx("div",{className:"bg-accent-100 p-3 rounded-full",children:g.jsx(u0,{className:"h-6 w-6 text-accent-700"})}),g.jsxs("div",{className:"ml-4",children:[g.jsx("h3",{className:"text-lg font-medium text-accent-900",children:c||"N/A"}),g.jsx("p",{className:"text-sm text-accent-700",children:"Top Workout"})]})]})})})]}),g.jsxs("div",{className:"mb-8",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Log Workout"}),g.jsx(le,{variant:i?"outline":"primary",onClick:()=>s(!i),children:i?"Cancel":"Log Workout"})]}),i&&g.jsx(dt,{className:"mb-6 border border-gray-200",children:g.jsx(ht,{children:g.jsx(b1,{onComplete:()=>s(!1)})})})]}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Recent Workouts"}),g.jsx(le,{variant:"outline",size:"sm",onClick:()=>r("/workouts"),children:"View All"})]}),n?g.jsx("div",{className:"flex justify-center py-8",children:g.jsx("div",{className:"animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"})}):o.length>0?g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:o.map(h=>g.jsx(L1,{workout:h},h.id))}):g.jsx(dt,{className:"text-center py-12",children:g.jsxs(ht,{children:[g.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"No workouts yet"}),g.jsx("p",{className:"mt-1 text-gray-500",children:"Log your first workout to start tracking your progress!"}),g.jsx("div",{className:"mt-6",children:g.jsx(le,{onClick:()=>s(!0),children:"Log Your First Workout"})})]})})]})]})},IV=({onComplete:t})=>{const{createGroup:e}=Ac(),[n,r]=D.useState({name:"",description:""}),[i,s]=D.useState({}),[o,l]=D.useState(!1),u=f=>{const{name:m,value:y}=f.target;r({...n,[m]:y}),i[m]&&s({...i,[m]:""})},c=()=>{const f={};return n.name?n.name.toString().length<3&&(f.name="Group name must be at least 3 characters"):f.name="Group name is required",n.description||(f.description="Group description is required"),s(f),Object.keys(f).length===0},h=async f=>{if(f.preventDefault(),!!c()){l(!0);try{await e(n.name.toString(),n.description.toString()),r({name:"",description:""}),t()}catch(m){console.error("Error creating group:",m)}finally{l(!1)}}};return g.jsxs("form",{onSubmit:h,className:"space-y-6",children:[g.jsx("div",{children:g.jsx(On,{name:"name",label:"Group Name",placeholder:"e.g., Morning Runners",value:n.name,onChange:u,error:i.name,required:!0})}),g.jsxs("div",{children:[g.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700 mb-1",children:"Description"}),g.jsx("textarea",{id:"description",name:"description",rows:3,value:n.description,onChange:u,placeholder:"What's this group about? Who is it for?",className:`block w-full rounded-md shadow-sm py-2 px-3 border ${i.description?"border-error-500":"border-gray-300"} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`,required:!0}),i.description&&g.jsx("p",{className:"mt-1 text-sm text-error-500",children:i.description})]}),g.jsxs("div",{className:"flex justify-end",children:[g.jsx(le,{type:"button",variant:"outline",className:"mr-3",onClick:t,children:"Cancel"}),g.jsx(le,{type:"submit",isLoading:o,children:"Create Group"})]})]})},SV=()=>{const{groups:t,loading:e,joinGroup:n}=Ac(),[r,i]=D.useState(!1),[s,o]=D.useState(!1),[l,u]=D.useState(""),[c,h]=D.useState(!1),f=async y=>{if(y.preventDefault(),!l.trim()){Z.error("Please enter a group code");return}h(!0);try{await n(l.trim().toUpperCase())&&(u(""),i(!1))}finally{h(!1)}},m=async y=>{try{await navigator.clipboard.writeText(y),Z.success("Group code copied to clipboard!")}catch(x){console.error("Failed to copy code:",x),Z.error("Failed to copy code")}};return g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[g.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-6",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Your Groups"}),g.jsx("p",{className:"mt-1 text-gray-600",children:"Create or join workout groups to stay accountable with friends"})]}),g.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-4",children:[g.jsx(le,{variant:r?"outline":"primary",icon:g.jsx(oM,{className:"h-5 w-5"}),onClick:()=>{i(!r),o(!1)},children:r?"Cancel":"Join Group"}),g.jsx(le,{variant:s?"outline":"secondary",icon:g.jsx(Du,{className:"h-5 w-5"}),onClick:()=>{o(!s),i(!1)},children:s?"Cancel":"Create Group"})]})]}),r&&g.jsxs(dt,{className:"mb-8 border border-gray-200",children:[g.jsx(Vo,{children:g.jsx("h2",{className:"text-lg font-medium",children:"Join a Group"})}),g.jsx(ht,{children:g.jsxs("form",{onSubmit:f,className:"flex flex-col sm:flex-row gap-4",children:[g.jsx("div",{className:"flex-grow",children:g.jsx(On,{placeholder:"Enter 6-character group code",value:l,onChange:y=>u(y.target.value.toUpperCase()),maxLength:6})}),g.jsx(le,{type:"submit",isLoading:c,children:"Join Group"})]})})]}),s&&g.jsxs(dt,{className:"mb-8 border border-gray-200",children:[g.jsx(Vo,{children:g.jsx("h2",{className:"text-lg font-medium",children:"Create a New Group"})}),g.jsx(ht,{children:g.jsx(IV,{onComplete:()=>o(!1)})})]}),e?g.jsx("div",{className:"flex justify-center py-8",children:g.jsx("div",{className:"animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"})}):t.length>0?g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(y=>g.jsxs(dt,{className:"h-full flex flex-col",children:[g.jsx(Vo,{children:g.jsx("h3",{className:"text-lg font-medium",children:y.name})}),g.jsxs(ht,{className:"flex-grow",children:[g.jsx("p",{className:"text-gray-600 mb-4",children:y.description}),g.jsxs("div",{className:"mt-2 text-sm text-gray-500",children:[y.members.length," member",y.members.length!==1?"s":""]})]}),g.jsxs(hM,{className:"flex justify-between",children:[g.jsx(Mt,{to:`/groups/${y.id}`,children:g.jsx(le,{variant:"primary",children:"View Details"})}),g.jsx(le,{variant:"outline",icon:g.jsx(R1,{className:"h-4 w-4"}),onClick:()=>m(y.code),children:y.code})]})]},y.id))}):g.jsx(dt,{className:"text-center py-12",children:g.jsxs(ht,{children:[g.jsx("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100",children:g.jsx(Du,{className:"h-6 w-6 text-primary-600"})}),g.jsx("h3",{className:"mt-2 text-lg font-medium text-gray-900",children:"No groups yet"}),g.jsx("p",{className:"mt-1 text-gray-500",children:"Create your first workout group or join an existing one!"}),g.jsxs("div",{className:"mt-6 flex justify-center gap-4",children:[g.jsx(le,{onClick:()=>{o(!0),i(!1)},children:"Create a Group"}),g.jsx(le,{variant:"outline",onClick:()=>{i(!0),o(!1)},children:"Join a Group"})]})]})})]})},j1=()=>{const{user:t}=mn(),[e,n]=D.useState([]),[r,i]=D.useState(!0),[s,o]=D.useState(0);return D.useEffect(()=>{if(!t){n([]),i(!1);return}const h=as(Dn(it,"checkIns"),ti("toUserId","==",t.id),Ul("createdAt","desc")),f=ZT(h,m=>{const y=m.docs.map(x=>{var b;const P=x.data();return{id:x.id,fromUserId:P.fromUserId,fromUserName:P.fromUserName,toUserId:P.toUserId,message:P.message,createdAt:((b=P.createdAt)==null?void 0:b.toDate())||new Date,read:P.read}});n(y),o(y.filter(x=>!x.read).length),i(!1)},m=>{console.error("Error loading check-ins:",m),i(!1)});return()=>f()},[t]),{checkIns:e,loading:r,unreadCount:s,sendCheckIn:async(h,f)=>{if(!t)return null;try{const m={fromUserId:t.id,fromUserName:t.displayName,toUserId:h,message:f,createdAt:da(),read:!1},y=await cm(Dn(it,"checkIns"),m);return Z.success("Check-in sent successfully!"),y.id}catch(m){return console.error("Error sending check-in:",m),Z.error("Failed to send check-in"),null}},markAsRead:async h=>{try{return await cf(kr(it,"checkIns",h),{read:!0}),n(f=>f.map(m=>m.id===h?{...m,read:!0}:m)),o(f=>Math.max(0,f-1)),!0}catch(f){return console.error("Error marking check-in as read:",f),!1}},markAllAsRead:async()=>{try{const f=e.filter(m=>!m.read).map(m=>cf(kr(it,"checkIns",m.id),{read:!0}));return await Promise.all(f),n(m=>m.map(y=>({...y,read:!0}))),o(0),Z.success("All check-ins marked as read"),!0}catch(h){return console.error("Error marking all check-ins as read:",h),Z.error("Failed to update check-ins"),!1}}}},xV=()=>{const{id:t}=wC(),e=Ti(),{getGroup:n,getGroupMembers:r}=Ac(),{workouts:i,loading:s}=_m(t),{sendCheckIn:o}=j1(),[l,u]=D.useState(null),[c,h]=D.useState([]),[f,m]=D.useState(!1),[y,x]=D.useState(!1),[P,b]=D.useState(null),[T,E]=D.useState(""),[k,M]=D.useState(!0),[F,U]=D.useState(!1);D.useEffect(()=>{(async()=>{if(t)try{const S=await n(t);if(!S){Z.error("Group not found"),e("/groups");return}u(S);const A=await r(t);h(A)}catch(S){console.error("Error fetching group data:",S),Z.error("Failed to load group data")}finally{M(!1)}})()},[t,e,n,r]);const I=async()=>{if(l)try{await navigator.clipboard.writeText(l.code),Z.success("Group code copied to clipboard!")}catch(w){console.error("Failed to copy code:",w),Z.error("Failed to copy code")}},_=async w=>{if(w.preventDefault(),!P||!T.trim()){Z.error("Please select a member and write a message");return}U(!0);try{await o(P.id,T),E(""),b(null),x(!1)}finally{U(!1)}};return k?g.jsx("div",{className:"flex justify-center items-center h-64",children:g.jsx("div",{className:"animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"})}):l?g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[g.jsx("div",{className:"mb-6",children:g.jsxs(Mt,{to:"/groups",className:"flex items-center text-primary-600 hover:text-primary-700",children:[g.jsx(eM,{className:"h-4 w-4 mr-1"}),g.jsx("span",{children:"Back to Groups"})]})}),g.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between mb-8",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:l.name}),g.jsx("p",{className:"mt-2 text-gray-600",children:l.description}),g.jsxs("div",{className:"mt-4 flex items-center text-sm text-gray-500",children:[g.jsx(Du,{className:"h-5 w-5 mr-1 text-gray-400"}),g.jsxs("span",{children:[c.length," member",c.length!==1?"s":""]}),g.jsx("span",{className:"mx-2",children:"•"}),g.jsxs(le,{variant:"ghost",size:"sm",icon:g.jsx(R1,{className:"h-4 w-4"}),onClick:I,children:["Invite Code: ",l.code]})]})]}),g.jsxs("div",{className:"mt-4 md:mt-0 flex space-x-4",children:[g.jsx(le,{variant:f?"outline":"primary",icon:g.jsx(vm,{className:"h-5 w-5"}),onClick:()=>{m(!f),x(!1)},children:f?"Cancel":"Log Workout"}),g.jsx(le,{variant:y?"outline":"accent",icon:g.jsx(mf,{className:"h-5 w-5"}),onClick:()=>{x(!y),m(!1)},children:y?"Cancel":"Send Check-in"})]})]}),f&&g.jsxs(dt,{className:"mb-8",children:[g.jsx(Vo,{children:g.jsx("h2",{className:"text-lg font-medium",children:"Log a Workout in this Group"})}),g.jsx(ht,{children:g.jsx(b1,{onComplete:()=>m(!1),groupId:t})})]}),y&&g.jsxs(dt,{className:"mb-8",children:[g.jsx(Vo,{children:g.jsx("h2",{className:"text-lg font-medium",children:"Send an Accountability Check-in"})}),g.jsx(ht,{children:g.jsxs("form",{onSubmit:_,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{htmlFor:"member",className:"block text-sm font-medium text-gray-700 mb-1",children:"Select Member"}),g.jsxs("select",{id:"member",value:(P==null?void 0:P.id)||"",onChange:w=>{const S=c.find(A=>A.id===w.target.value);b(S||null)},className:"block w-full rounded-md shadow-sm py-2 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",required:!0,children:[g.jsx("option",{value:"",children:"Select a member"}),c.map(w=>g.jsx("option",{value:w.id,children:w.displayName},w.id))]})]}),g.jsxs("div",{children:[g.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),g.jsx("textarea",{id:"message",value:T,onChange:w=>E(w.target.value),placeholder:"Example: Hey! Haven't seen your workout this week. Let's get moving!",rows:3,className:"block w-full rounded-md shadow-sm py-2 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",required:!0})]}),g.jsxs("div",{className:"flex justify-end",children:[g.jsx(le,{type:"button",variant:"outline",className:"mr-3",onClick:()=>x(!1),children:"Cancel"}),g.jsx(le,{type:"submit",isLoading:F,children:"Send Check-in"})]})]})})]}),g.jsxs("div",{className:"mb-8",children:[g.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Group Activity Feed"}),s?g.jsx("div",{className:"flex justify-center py-8",children:g.jsx("div",{className:"animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"})}):i.length>0?g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map(w=>g.jsx(L1,{workout:w,showUser:!0},w.id))}):g.jsx(dt,{className:"text-center py-8",children:g.jsxs(ht,{children:[g.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"No workouts in this group yet"}),g.jsx("p",{className:"mt-1 text-gray-500",children:"Be the first to log a workout in this group!"}),g.jsx("div",{className:"mt-6",children:g.jsx(le,{onClick:()=>m(!0),children:"Log a Workout"})})]})})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Members"}),g.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden",children:g.jsx("ul",{className:"divide-y divide-gray-200",children:c.map(w=>g.jsxs("li",{className:"px-6 py-4 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx("div",{className:"h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center",children:g.jsx("span",{className:"text-primary-800 font-medium",children:w.displayName.charAt(0).toUpperCase()})}),g.jsxs("div",{className:"ml-3",children:[g.jsx("p",{className:"text-sm font-medium text-gray-900",children:w.displayName}),g.jsx("p",{className:"text-sm text-gray-500",children:w.email})]})]}),g.jsx(le,{variant:"ghost",size:"sm",icon:g.jsx(mf,{className:"h-4 w-4"}),onClick:()=>{b(w),x(!0),m(!1)},children:"Check-in"})]},w.id))})})]})]}):g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:g.jsxs("div",{className:"text-center",children:[g.jsx("h2",{className:"text-xl font-semibold",children:"Group not found"}),g.jsx("p",{className:"mt-2 text-gray-600",children:"The group you're looking for doesn't exist or you don't have access."}),g.jsx("div",{className:"mt-4",children:g.jsx(Mt,{to:"/groups",children:g.jsx(le,{variant:"primary",children:"Back to Groups"})})})]})})},CV=()=>{const{checkIns:t,loading:e,markAsRead:n,markAllAsRead:r,unreadCount:i}=j1(),s=async l=>{await n(l)},o=async()=>{await r()};return g.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[g.jsxs("div",{className:"flex items-center justify-between mb-6",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Notifications"}),g.jsx("p",{className:"mt-1 text-gray-600",children:"Check-ins and messages from your workout groups"})]}),i>0&&g.jsx(le,{variant:"outline",size:"sm",onClick:o,children:"Mark all as read"})]}),e?g.jsx("div",{className:"flex justify-center py-8",children:g.jsx("div",{className:"animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"})}):t.length>0?g.jsx("div",{className:"space-y-4",children:t.map(l=>g.jsx(dt,{className:`transition-all ${l.read?"":"border-l-4 border-l-primary-500"}`,children:g.jsx(ht,{children:g.jsxs("div",{className:"flex items-start justify-between",children:[g.jsxs("div",{children:[g.jsxs("p",{className:"font-medium text-gray-900",children:["Check-in from ",l.fromUserName]}),g.jsx("p",{className:"mt-1 text-gray-600",children:l.message}),g.jsx("p",{className:"mt-2 text-sm text-gray-500",children:V1(new Date(l.createdAt),"MMM d, yyyy • h:mm a")})]}),!l.read&&g.jsx(le,{variant:"ghost",size:"sm",icon:g.jsx(rM,{className:"h-4 w-4"}),onClick:()=>s(l.id),children:"Mark as read"})]})})},l.id))}):g.jsx(dt,{className:"text-center py-12",children:g.jsxs(ht,{children:[g.jsx("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100",children:g.jsx(A1,{className:"h-6 w-6 text-primary-600"})}),g.jsx("h3",{className:"mt-2 text-lg font-medium text-gray-900",children:"No notifications"}),g.jsx("p",{className:"mt-1 text-gray-500",children:"You don't have any check-ins or messages yet"})]})})]})},_l=({children:t})=>{const{user:e,loading:n}=mn();return n?g.jsx("div",{className:"min-h-screen flex items-center justify-center",children:g.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?g.jsx(g.Fragment,{children:t}):g.jsx(ec,{to:"/login",replace:!0})},m0=({children:t})=>{const{user:e,loading:n}=mn();return n?g.jsx("div",{className:"min-h-screen flex items-center justify-center",children:g.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?g.jsx(ec,{to:"/dashboard",replace:!0}):g.jsx(g.Fragment,{children:t})},kV=()=>{const{user:t}=mn();return g.jsx(ec,{to:t?"/dashboard":"/login",replace:!0})},AV=()=>g.jsxs(MC,{children:[g.jsx(xn,{path:"/",element:g.jsx(kV,{})}),g.jsx(xn,{path:"/login",element:g.jsx(m0,{children:g.jsx(cM,{})})}),g.jsx(xn,{path:"/register",element:g.jsx(m0,{children:g.jsx(dM,{})})}),g.jsx(xn,{path:"/dashboard",element:g.jsx(_l,{children:g.jsx(vl,{children:g.jsx(TV,{})})})}),g.jsx(xn,{path:"/groups",element:g.jsx(_l,{children:g.jsx(vl,{children:g.jsx(SV,{})})})}),g.jsx(xn,{path:"/groups/:id",element:g.jsx(_l,{children:g.jsx(vl,{children:g.jsx(xV,{})})})}),g.jsx(xn,{path:"/notifications",element:g.jsx(_l,{children:g.jsx(vl,{children:g.jsx(CV,{})})})}),g.jsx(xn,{path:"*",element:g.jsx(ec,{to:"/",replace:!0})})]});function PV(){return g.jsx(BC,{children:g.jsx(XO,{children:g.jsx(AV,{})})})}Aw(document.getElementById("root")).render(g.jsx(D.StrictMode,{children:g.jsx(PV,{})}));
