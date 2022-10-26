(this["webpackJsonpreact-map-population"]=this["webpackJsonpreact-map-population"]||[]).push([[1],{15:function(n,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return s})),t.d(e,"d",(function(){return k})),t.d(e,"b",(function(){return w})),t.d(e,"f",(function(){return O})),t.d(e,"e",(function(){return z}));var r=t(21),a=t(14),o=t(0),i=t.n(o),c=t(3),l=t(4);function u(){var n=Object(c.a)(["\n  ","\n"]);return u=function(){return n},n}function d(){var n=Object(c.a)(["\n  display: inline-block;\n  height: 40px;\n  min-height: 40px;\n  line-height: 40px;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 12px;\n  border-radius: 5px;\n  padding: 0 40px;\n  text-transform: uppercase;\n  cursor: pointer;\n  outline: 0;\n  border: 0;\n  color: rgba(125, 76, 219, 1);\n  background: rgba(255, 255, 255, 1);\n  transition: background 200ms ease-in-out;\n\n  &.active,\n  :active {\n    background: rgba(255, 255, 255, 0.8);\n  }\n\n  :hover {\n    background: rgba(255, 255, 255, 0.6);\n  }\n\n  :disabled {\n    cursor: not-allowed;\n    background: rgb(222, 222, 226);\n\n    :hover {\n      background: rgb(222, 222, 226);\n    }\n  }\n\n  &.btn-primary {\n    background: rgba(125, 76, 219, 1);\n    color: #fff;\n\n    &.active,\n    :active {\n      background: rgba(125, 76, 219, 0.8);\n    }\n\n    :hover {\n      background: rgba(125, 76, 219, 0.8);\n    }\n  }\n"]);return d=function(){return n},n}var b=Object(l.a)(d()),f={primary:"btn-primary",default:""},p=l.b.button.attrs((function(n){return{type:n.htmlType||"button",className:"btn ".concat(f[n.type||"default"]||""," ").concat(n.active?"active":"")}}))(u(),b),s=function(n){var e=n.disabled,t=n.type,r=n.onClick,o=n.label,c=n.isLoading,l=n.children,u=Object(a.a)(n,["disabled","type","onClick","label","isLoading","children"]);return i.a.createElement(p,Object.assign({type:t||"default",onClick:r,disabled:c||e},u),c?"...":o||l||"Label")},m=t(8),g=t.n(m),v=t(28),x=t.n(v);t(58);var h={height:"100%"};g.a.accessToken=Object({NODE_ENV:"production",PUBLIC_URL:"/react-map-population",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_MAPBOX;var y=function(n){var e=n.onClick,t=n.setMapRef,r=Object(o.useRef)(null),a=Object(o.useCallback)((function(n){e&&e(n)}),[e]);return Object(o.useEffect)((function(){var n=new g.a.Map({container:r.current,style:"mapbox://styles/hullen/ckdx86csk38kp19oa1ydn30hd",center:[0,0],zoom:5});return n.addControl(new g.a.NavigationControl),n.fitBounds([-48.55228833138952,-27.543060933168842,-48.55228833138952,-27.633060933168842]),x.a.init(n,g.a),n.on("load",(function(){n.resize(),t&&t(n)})),n.on("click",a),function(){n.off("click",a),n.remove()}}),[a,t]),i.a.createElement("div",{ref:function(n){r.current=n},style:h})};y.Marker=function(n){var e=n.map,t=n.center,r=n.draggable,a=void 0!==r&&r,i=n.onDragEnd;return Object(o.useEffect)((function(){if(e){var n=new g.a.Marker({draggable:a}).setLngLat(t).addTo(e);return i&&n.on("dragend",(function(){i(n.getLngLat())})),e.flyTo({center:t,zoom:16}),function(){n.remove()}}return function(){}}),[t,a,e,i]),null};var k=y;function E(){var n=Object(c.a)(["\n  width: 100%;\n  max-width: 100%;\n  background-color: transparent;\n  border-collapse: collapse;\n\n  th,\n  td {\n    padding: 8px;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6;\n  }\n\n  th {\n    vertical-align: bottom;\n    background-color: #e9ecef;\n    border-bottom: 2px solid #dee2e6;\n  }\n\n  td {\n    text-align: center;\n  }\n\n  &.row-striped {\n    tbody {\n      tr {\n        &:nth-of-type(even) {\n          background-color: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n"]);return E=function(){return n},n}var O=l.b.table.attrs((function(n){return"striped"===n.type&&{className:"row-striped"}}))(E());function j(){var n=Object(c.a)(["\n  label {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n\n  input {\n    width: 100%;\n    padding: 10px 8px;\n    border: 1px solid #888;\n    transition: border 200ms ease-in-out;\n\n    &.error {\n      border-color: red;\n\n      &:focus,\n      &:hover,\n      &:active {\n        outline: none;\n        border-color: red;\n      }\n    }\n  }\n\n  span.error {\n    color: red;\n    font-size: small;\n  }\n"]);return j=function(){return n},n}var w=l.b.form(j());function z(n){var e=n.spinning,t=void 0!==e&&e,r=n.children;return t?i.a.createElement(i.a.Fragment,null,"Loading"):r}},21:function(n,e,t){"use strict";t.r(e),t.d(e,"Header",(function(){return i})),t.d(e,"Nav",(function(){return s})),t.d(e,"Sider",(function(){return g})),t.d(e,"Container",(function(){return x})),t.d(e,"Main",(function(){return y}));var r=t(3),a=t(4);function o(){var n=Object(r.a)(["\n  display: flex;\n  max-width: 100%;\n  background-color: rgb(218, 218, 218);\n  color: rgb(68, 68, 68);\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex: 0 0 auto;\n  padding: 12px;\n  box-sizing: border-box;\n"]);return o=function(){return n},n}var i=a.b.header(o()),c=t(14),l=t(0),u=t.n(l),d=t(1),b=t(13);function f(){var n=Object(r.a)(["\n  max-width: 100%;\n  box-sizing: border-box;\n\n  > ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n\n    li {\n      margin-right: 10px;\n    }\n  }\n\n  a {\n    color: rgb(125, 76, 219);\n    font-weight: 600;\n    cursor: pointer;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  .active {\n    text-decoration: underline;\n  }\n"]);return f=function(){return n},n}var p=a.b.nav(f());function s(n){var e=n.items,t=void 0===e?[]:e,r=Object(c.a)(n,["items"]),a=Object(d.g)().pathname,o=Object(l.useMemo)((function(){if(Array.isArray(t)&&t.length>0){var n=t.map((function(n){var e=n.to,t=n.name;return u.a.createElement("li",{key:t},u.a.createElement(b.b,{to:e,className:a===e?"active":""},t))}));return u.a.createElement("ul",null,n)}return null}),[t,a]);return u.a.createElement(p,r,o)}function m(){var n=Object(r.a)(["\n  display: flex;\n  box-sizing: border-box;\n  min-width: 230px;\n  max-width: 100%;\n  background-color: rgb(61, 19, 141);\n  color: #fff;\n  flex-direction: column;\n  min-height: 0;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  padding-left: 24px;\n  padding-right: 48px;\n\n  nav {\n    ul {\n      flex-direction: column;\n    }\n\n    li {\n      margin-right: 0;\n      margin-bottom: 10px;\n\n      > a {\n        color: #fff;\n      }\n    }\n  }\n"]);return m=function(){return n},n}var g=a.b.aside(m());function v(){var n=Object(r.a)(["\n  display: flex;\n  box-sizing: border-box;\n  max-width: 100%;\n  min-width: 0px;\n  flex-direction: row;\n  flex: 1;\n  min-height: 0;\n\n  * {\n    box-sizing: border-box;\n  }\n"]);return v=function(){return n},n}var x=a.b.section(v());function h(){var n=Object(r.a)(["\n  display: flex;\n  width: 100%;\n  padding: 20px;\n"]);return h=function(){return n},n}var y=a.b.main(h())},31:function(n,e,t){n.exports=t(59)},36:function(n,e,t){},59:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(24),i=t.n(o),c=(t(36),t(13)),l=t(1),u=t(15),d=[{to:"/",name:"Home"},{to:"/map",name:"Map"},{to:"/admin",name:"Admin"}];function b(){return a.a.createElement(u.c.Header,null,a.a.createElement(u.c.Nav,{items:d}))}var f=Object(r.lazy)((function(){return t.e(6).then(t.bind(null,95))})),p=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(7),t.e(4)]).then(t.bind(null,94))})),s=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,93))}));var m=function(){return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},a.a.createElement(c.a,{basename:"/react-map-population"},a.a.createElement(b,null),a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/"},a.a.createElement(f,null)),a.a.createElement(l.a,{path:"/map"},a.a.createElement(s,null)),a.a.createElement(l.a,{path:"/admin"},a.a.createElement(p,null))))))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root"))}},[[31,2,3]]]);
//# sourceMappingURL=main.93dddaef.chunk.js.map