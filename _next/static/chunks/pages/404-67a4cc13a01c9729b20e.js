_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"97Is":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("uNx/")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},bK2n:function(e,n,t){e.exports={container:"__404_container__2W9Gc",content:"__404_content__5tvtF",error_code:"__404_error_code__3QMw2",error_info:"__404_error_info__1yexN",pointer:"__404_pointer__2ENJ4"}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),i=t("nOHt"),s=t("vNVm"),u={};function l(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,_=e.children,v=e.replace,h=e.shallow,b=e.scroll,y=e.locale;"string"===typeof _&&(_=c.default.createElement("a",null,_));var m=c.Children.only(_),g=m&&"object"===typeof m&&m.ref,N=(0,s.useIntersection)({rootMargin:"200px"}),w=r(N,2),E=w[0],j=w[1],x=c.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);(0,c.useEffect)((function(){var e=j&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof y?y:t&&t.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,j,y,n,t]);var L={ref:x,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,v,h,b,y)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var M="undefined"!==typeof y?y:t&&t.locale,O=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,M,t&&t.locales,t&&t.domainLocales);L.href=O||(0,a.addBasePath)((0,a.addLocale)(p,M,t&&t.defaultLocale))}return c.default.cloneElement(m,L)};n.default=f},"uNx/":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t("nKUr"),o=t("YFqc"),c=t.n(o),a=t("bK2n"),i=t.n(a);function s(){return Object(r.jsx)("div",{className:i.a.container,children:Object(r.jsxs)("div",{className:i.a.content,children:[Object(r.jsx)("span",{className:i.a.error_code,children:"404"}),Object(r.jsx)("span",{className:i.a.error_info,children:"This page could not be found."}),Object(r.jsxs)("span",{className:i.a.error_info,children:["Back to ",Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("span",{className:i.a.pointer,id:"text_yellow_underline",children:"BinaryEgg"})})]})]})})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),c=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["97Is",0,2,1]]]);