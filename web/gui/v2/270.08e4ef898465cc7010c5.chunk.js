!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e05e0176-d7da-4682-910d-82653ae8f0c3",e._sentryDebugIdIdentifier="sentry-dbid-e05e0176-d7da-4682-910d-82653ae8f0c3")}catch(e){}}(),(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[270],{95748:(e,t,n)=>{n.d(t,{Ci:()=>o,Ew:()=>i,pD:()=>a});var r=n(30028),o={denied:"denied",granted:"granted"},a={denied:"inactive",granted:"active"},i=(/app\.netdata\.cloud/.test(location.hostname),/testing\.netdata\.cloud/.test(location.hostname),{defaultCookies:{defaultValue:o.granted,description:"These cookies are essential so that you can have the best experience using Netdata Products. Without these cookies Netdata Products may not work as a result. These do not store any personally identifiable data.",disabled:!0,eventName:"necessary",ga:"default-cookies",gmtKeys:["functionality_storage"],handleAccept:function(){},handleDeny:function(){},id:"defaultCookies",title:"Necessary"},analyticsCookies:{description:"These cookies are used to understand how visitors interact with Netdata Products. They help provide non-identifiable information on user activities through Netdata Products, which is valuable to help us improve our product.",defaultValue:o.granted,disabled:!1,eventName:"analytical",ga:"analytics-cookies",gmtKeys:["ad_storage","analytics_storage"],handleAccept:function(){(0,r.vD)()},handleDeny:function(){(0,r.g2)()},id:"analyticsCookies",title:"Analytical and Tracking"},performanceCookies:{description:"These cookies are used to track the performance and errors you may experience using Netdata Products. These are key for us to monitor the status of the product and easily identify issues.",defaultValue:o.granted,disabled:!1,eventName:"performance",ga:"performance-cookies",gmtKeys:[],handleAccept:function(){},handleDeny:function(){},id:"performanceCookies",title:"Performance and error tracking"}});(0,r.ej)(i.defaultCookies.id)},26904:(e,t,n)=>{n.d(t,{F:()=>c,I:()=>i});var r=n(4480),o=n(79532);const a=(0,r.cn)({key:"cookiePreferences",default:(0,o.O)()});var i=function(){return(0,r.sJ)(a)},c=function(){return(0,r.FV)(a)}},30028:(e,t,n)=>{n.d(t,{d8:()=>c,ej:()=>i,fY:()=>d,g2:()=>s,gs:()=>l,lF:()=>f,ow:()=>g,v:()=>p,vD:()=>u});var r=n(4942),o=n(95748);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var i=function(e){var t;return(null===(t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)")))||void 0===t?void 0:t.pop())||""},c=function(e,t,n){(n||window[e])&&(document.cookie="".concat(e,"=").concat(n||window[e],"; Path=/; Domain=").concat(window.envSettings.cookieDomain,"; Expires=").concat(t,";"))},u=function(){var e,t;(null===(t=(e=window.posthog).has_opted_out_capturing)||void 0===t?void 0:t.call(e))&&window.posthog.opt_in_capturing()},s=function(){window.posthog.has_opted_out_capturing&&!window.posthog.has_opted_out_capturing()&&window.posthog.opt_out_capturing()},d=function(e){return Object.keys(e).every((function(t){return e[t]===(!i(t)||l(t))}))},l=function(e){return window.envSettings.tracking&&(!i(e)||i(e)===o.Ci.granted)},f=function(){return Object.values(o.Ew).reduce((function(e,t){var n=t.defaultValue,c=t.id;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}((0,r.Z)({},c,(i(c)||n)===o.Ci.granted),e)}),{})},p=function(e){window.gtag("consent","update",e)},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return new Date(t.setFullYear(t.getFullYear()+e))}},35270:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r=n(45987),o=n(93433),a=n(29439),i=n(67294),c=n(89250),u=n(17563),s=n(35835),d=n(6792),l=n(2086),f=n(88715),p=n(27015),g=n(38700),h=n(79532),v=n(26904);var w=function(){var e;if(null===(e=window.posthog)||void 0===e?void 0:e.__loaded){var t=(new Date).toISOString();window.posthog.register_once({event_source:"cloud",posthog_first_seen_at:t,posthog_first_distinct_id:"get_distinct_id"in window.posthog&&window.posthog.get_distinct_id()})}};const y=function(){return(0,i.useEffect)(w,[])};var m=n(23172),_=n(51066),b=n(20036),k=n(10814),O=n(44446),P=["cloudRoute","redirect_uri"],j=function(e){var t=e.errorRetry,n=e.token,r=e.redirectUri,o=u.parseUrl(decodeURIComponent(t)),a=o.url,c=o.query.redirect_uri,s=(0,i.useRef)(!1);return s.current||(s.current=!0,window.location="".concat(a,"?token=").concat(n,"&redirect_uri=").concat(c||r)),null};const D=function(){var e=(0,l.Iy)("isLoaded"),t=(0,l.Iy)("isAnonymous");(0,p.Z)(),y(),function(){var e=(0,l.Iy)("id"),t=(0,l.Iy)("name"),n=(0,l.Iy)("email"),r=(0,l.Iy)("createdAt"),o=(0,l.Iy)("verifiedEmail"),a=(0,l.Iy)("avatarUrl"),c=(0,g.GM)("loaded"),u=(0,g.GM)("ids"),s=(0,v.I)();(0,i.useEffect)((function(){e&&c&&(0,h.Z)({avatar:a,createdAt:r,email:n,id:e,name:t,spacesCount:u.length,verifiedEmail:o})}),[e,c,s]),(0,i.useEffect)((function(){var e;if(null===(e=window.posthog)||void 0===e?void 0:e.__loaded)try{window.posthog.onFeatureFlags((function(){window.posthog.isFeatureEnabled&&window.posthog.isFeatureEnabled("user-age-less-than-7d")&&window.posthog.startSessionRecording()}))}catch(t){}}),[])}();var n=(0,c.bS)("/sign-in/*"),w=(0,c.bS)("/sign-up/*"),D=!!n||!!w,C=function(){var e=(0,f.Z)(),t=(0,a.Z)(e,2)[1],n=(0,m.DH)();return(0,i.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.origin,a=e.id,i=e.name;if(r){var c=decodeURIComponent(a),u=decodeURIComponent(r);(0,_.kq)(a).then((function(e){var r=e.data,a=void 0===r?[]:r;return n(c,u,i),a.length?s.Z.get(d.MC).then((function(e){var t=e.data;return Promise.any(t.map((function(e){return s.Z.get((0,b.W)({spaceId:e.id})).then((function(t){var n=t.data;return Promise.any(n.map((function(t){return s.Z.get.apply(s.Z,(0,o.Z)((0,b.y)({roomId:t.id,spaceId:e.id}))).then((function(n){var r=n.data.find((function(e){var t=e.id;return a.includes(t)}));if(!r)throw new Error("can't find matching node");var o=window.location,i=o.protocol,c=o.host;return"".concat(i,"//").concat(c,"/spaces/").concat(e.slug,"/rooms/").concat(t.slug,"/nodes/").concat(r.id)}))})))}))})))})).catch((function(){})):(0,_.YZ)(c).then((function(e){var n=e.data.claimed;throw t(n?{errorMsgKey:"ErrForbidden",errorMessage:"You tried to access this Node on Netdata Cloud and you don't have access to it. Please contact your Space admin to give you access to it."}:{errorMsgKey:"ErrForbidden",errorMessage:"This Node isn't connected to Netdata Cloud. Please connect it, if you have permission for it, or contact your Space admin."}),"no access"}))})).then((function(e){e&&setTimeout(location.assign(e))})).catch((function(){}))}}),[])}(),E=(0,k.Z)();if(!e||E.isFetching||E.hasAccess&&!D)return null;var Z=window.location,I=Z.pathname,S=Z.search,x=Z.hash,A=u.parse(x),F=A.error_retry,R=A.token,N=u.parse(S),U=N.cloudRoute,T=N.redirect_uri,M=(0,r.Z)(N,P);if(!t&&F)return i.createElement(j,{errorRetry:F,token:R,redirectUri:T});if(!t&&D){if(U){var z=U.includes("join-callback")?decodeURI(U):U,K=Array.isArray(z)?z[0]:z;return i.createElement(c.Fg,{replace:!0,to:K})}return T?(C(M),window.location.replace(decodeURIComponent(T)),null):i.createElement(c.Fg,{replace:!0,to:"/spaces"})}if(O.ZP)return null;if(t&&!D){var L=x.includes("join-callback")?x:encodeURIComponent(x),V="".concat(S).concat(S?"&":"?","cloudRoute=").concat(I);return i.createElement(c.Fg,{replace:!0,to:{pathname:"/sign-in",search:V,hash:L}})}return null}},23172:(e,t,n)=>{n.d(t,{aG:()=>P,H3:()=>b,XU:()=>j,DH:()=>O,z2:()=>_,lL:()=>k});var r=n(29439),o=n(93433),a=n(15861),i=n(4942),c=n(64687),u=n.n(c),s=n(67294),d=n(4480),l=n(89250),f=n(2086);const p=(0,d.xu)({key:"visitedNodes",default:function(){return[]}});var g=n(32802),h=n(51066),v=n(44446);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=(0,d.CG)({key:"visitedNodeIdsValue",get:function(e){return function(t){return(0,t.get)(p(e)).map((function(e){return e.id}))}}}),_=function(){var e=(0,f.jr)(),t=(0,d.sJ)(p(e)),n=(0,d._8)((function(e){var t=e.set;return function(e){t(g.Jz,{values:e.reduce((function(e,t){return y(y({},e),{},(0,i.Z)({},t.id,y(y({},t),{},{loaded:!0})))}),{}),merge:!0})}}),[]);return(0,s.useEffect)((function(){n(t)}),[t]),(0,d.sJ)(m(e))},b=function(e){var t=(0,f.jr)(),n=(0,d.sJ)(p(t)),r=(0,s.useMemo)((function(){return e?n.filter((function(t){return t.name.toUpperCase().includes(e.toUpperCase())})):n}),[n,e]);return(0,s.useMemo)((function(){return r.map((function(e){return e.id}))}),[r])},k=function(){return(0,d._8)((function(e){var t=e.snapshot,n=e.set;return function(){var e=(0,a.Z)(u().mark((function e(r,o){var a,i,c,s,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPromise((0,f.KL)("id"));case 2:return a=e.sent,e.next=5,t.getPromise((0,g.zP)({id:r}));case 5:return i=e.sent,c=i.urls,s=i.name,d=c.filter((function(e){return e!==o})),n((0,g.zP)({id:r,key:"urls"}),d),d.length||n(p(a),(function(e){return e.filter((function(e){return e.id!==r}))})),e.prev=11,e.next=14,d.length?(0,h.RX)(a,r,s,d):(0,h.Sd)(a,[r]);case 14:(0,h.Wy)(a,r).catch((function(){})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(11),n((0,g.zP)({id:r,key:"urls"}),c);case 20:case"end":return e.stop()}}),e,null,[[11,17]])})));return function(t,n){return e.apply(this,arguments)}}()}),[])},O=function(){var e=(0,l.TH)().pathname,t=(0,f.jr)(),n=P(t,{autoFetch:!1});return(0,d._8)((function(e){var t=e.snapshot,r=e.set;return function(){var e=(0,a.Z)(u().mark((function e(a,i,c){var s,d,l,v,w,m;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPromise((0,f.KL)("isAnonymous"));case 2:if(!e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.getPromise((0,f.KL)("id"));case 7:return s=e.sent,e.next=10,t.getPromise((0,g.zP)({id:a}));case 10:if(d=e.sent,l=d.urls,v=d.name,w=i?[i].concat((0,o.Z)(l)):l,w=(0,o.Z)(new Set([window.location.href].concat((0,o.Z)(w)))),m=w.length!==l.length,e.prev=16,r((0,g.zP)({id:a,key:"urls"}),w),r(p(s),(function(e){var t=e.find((function(e){return e.id===a})),n=e.filter((function(e){return e.id!==a}));return t?[y(y({},t),{},{accessCount:t.accessCount+1,lastAccessTime:(new Date).toISOString()})].concat((0,o.Z)(n)):[{accessCount:1,id:a,lastAccessTime:(new Date).toISOString(),urls:w,name:c}].concat((0,o.Z)(n))})),!m){e.next=22;break}return e.next=22,(0,h.RX)(s,a,c||v,w);case 22:return n(),e.next=25,(0,h.Wy)(s,a);case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(16),r((0,g.zP)({id:a,key:"urls"}),l);case 30:case"end":return e.stop()}}),e,null,[[16,27]])})));return function(t,n,r){return e.apply(this,arguments)}}()}),[n,e,t])},P=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).autoFetch,n=void 0===t||t,o=(0,d.FV)(p(e)),a=(0,r.Z)(o,2)[1],i=(0,s.useState)(0),c=(0,r.Z)(i,2),u=c[0],l=c[1],f=(0,s.useCallback)((function(){l((function(e){return e+1}))}),[l]);return(0,s.useEffect)((function(){e&&(n||u)&&(0,h.Fz)(e).then((function(e){if(e&&!v.ZP){var t=e.data.results.sort((function(e,t){return new Date(t.lastAccessTime)-new Date(e.lastAccessTime)}));a(t)}}))}),[n,u,e]),f},j=function(){var e=(0,f.jr)(),t=p(e);return(0,d._8)((function(e){var n=e.snapshot,r=e.set;return function(){var e=(0,a.Z)(u().mark((function e(o){var a,i,c,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getPromise((0,g.$E)(o));case 2:return a=e.sent,i=a.map((function(e){return e.machineGUID})),e.next=6,n.getPromise(t);case 6:c=e.sent,(s=c.filter((function(e){return!i.includes(e.id)}))).length!==c.length&&r(t,s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),[e])}},79532:(e,t,n)=>{n.d(t,{O:()=>s,Z:()=>d});var r=n(4942),o=n(29439),a=n(95748),i=n(30028);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(){return Object.entries(a.Ew).reduce((function(e,t){var n=(0,o.Z)(t,2),a=n[0],c=n[1];return u(u({},e),{},(0,r.Z)({},a,(0,i.gs)(c.id)))}),{})};const d=function(e){var t,n=e.avatar,r=e.createdAt,o=e.email,c=e.id,u=e.name,s=e.spacesCount,d=e.verifiedEmail;if(window.envSettings.tracking&&(!o||!o.includes("@netdata.msdc.co"))&&(!c||"00000000-0000-0000-0000-000000000000"!==c)&&(!o||!o.includes("anonymous@netdata.cloud"))){var l=new Date,f=l.toISOString(),p=new Date(r),g=Math.floor((l-p)/864e5);(0,i.gs)(a.Ew.analyticsCookies.id)&&(window.dataLayer&&window.dataLayer.push({event:"UserInfoAvailable",user_id:c,userIdentifier:c,userName:u,userEmail:o,userAccountCreatedAt:r,userAccountCreatedDaysAgo:g,userAvatarURL:n,userEmailVerified:d,spacesCount:s}),window.gtag&&window.gtag("config","G-J69Z2JCTFB",{user_id:c}),(null===(t=window.posthog)||void 0===t?void 0:t.__loaded)&&(window.posthog.identify(c),window.posthog.people.set({email:o||"unknown email",name:u,netdata_cloud_account_created_at:r,netdata_cloud_account_created_days_ago:g}),window.posthog.register({netdata_cloud_account_created_days_ago:g}),window.posthog.register_once({event_source:"cloud",netdata_cloud_account_created_at:r,netdata_cloud_account_email:o||"unknown email",netdata_cloud_account_id:c,netdata_cloud_signed_in_at:f})))}}}}]);