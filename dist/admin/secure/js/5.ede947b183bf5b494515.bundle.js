(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{463:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var s=r(5),n=r(6),a=r(7),l=r(1),i=r(92),o=r(309),c=r(119),u=r(13),f=(r(325),r(0));const d=Object(f.forwardRef)(({data:e,loading:t,value:r,refList:o,canRead:d,isMulti:p,search:b,autoFocus:g,serverErrors:h,onChange:m,htmlID:O,setSearch:y,selectProps:j,fetchMore:v,isDisabled:N},M)=>{const $=e&&e[o.gqlNames.listQueryName]?e[o.gqlNames.listQueryName].map(e=>({value:e,label:e._label_})):[],k=h&&h.find(e=>e instanceof Error&&"AccessDeniedError"===e.name);let w=null;const D=e=>"string"==typeof e?$.find(t=>t.value.id===e)||{label:e,value:e}:{label:e._label_,value:e};null!==r&&d&&(p?w=(Array.isArray(r)?r:[]).map(D):r&&(w=D(r)));const q=e&&e[o.gqlNames.listQueryMetaName]?e[o.gqlNames.listQueryMetaName].count:0,E=Object(f.useMemo)(()=>({MenuList:e=>{let{children:t}=e,r=Object(a.a)(e,["children"]);const s=Object(f.useRef)(null),c=i.d`
            query RelationshipSelectMore($search: String!, $first: Int!, $skip: Int!) {
              ${o.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
                _label_
                id
              }
            }
          `;return function(e,t){Object(f.useEffect)(()=>{let r=new IntersectionObserver(e,{}),s=t.current;if(null!==s)return r.observe(s),()=>r.unobserve(s)})}(([{isIntersecting:e}])=>{!r.isLoading&&e&&r.options.length<q&&v({query:c,variables:{search:b,first:50,skip:r.options.length},updateQuery:(e,{fetchMoreResult:t})=>t?Object(n.a)(Object(n.a)({},e),{},{[o.gqlNames.listQueryName]:[...e[o.gqlNames.listQueryName],...t[o.gqlNames.listQueryName]]}):e})},s),Object(l.jsx)(u.f.MenuList,r,t,Object(l.jsx)("div",{css:{textAlign:"center"},ref:s},r.options.length<q&&Object(l.jsx)("span",{css:{padding:8}},"Loading...")))}}),[q,o.gqlNames.listQueryName]);return Object(l.jsx)(c.a,Object(s.a)({onInputChange:e=>y(e),isLoading:t,autoFocus:g,isMulti:p,components:E,getOptionValue:e=>e.value.id,value:w,placeholder:d?void 0:k&&k.message,options:$,onChange:m,id:"react-select-"+O,isClearable:!0,instanceId:O,inputId:O,innerRef:M,menuPortalTarget:document.body,isDisabled:N},j))}),p=({innerRef:e,autoFocus:t,field:r,errors:s,renderContext:n,htmlID:a,onChange:c,isMulti:u,value:p,isDisabled:b})=>{const[g,h]=Object(f.useState)(""),m=r.getRefList(),O=i.d`
    query RelationshipSelect($search: String!, $first: Int!, $skip: Int!) {
      ${m.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
        _label_
        id
      }

      ${m.gqlNames.listQueryMetaName}(search: $search) {
        count
      }
    }
  `,y=!s||s.every(e=>!(e instanceof Error&&"AccessDeniedError"===e.name)),j="dialog"===n?{menuShouldBlockScroll:!0}:null,{data:v,error:N,loading:M,fetchMore:$}=Object(o.a)(O,{fetchPolicy:"network-only",variables:{search:g,first:10,skip:0}});return N?(console.log("ERROR!!!",N),"Error"):Object(l.jsx)(d,{data:v,loading:M,value:p,refList:m,canRead:y,isMulti:u,search:g,autoFocus:t,serverErrors:s,onChange:c,htmlID:a,setSearch:h,selectProps:j,fetchMore:$,ref:e,isDisabled:b})}},468:function(e,t,r){var s=r(169);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.default=e.exports,e.exports.__esModule=!0},488:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),a=r(463);r(167),r(468),r(166),r(1),r(119),r(325);const l=({children:e})=>n.a.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation()}},e);t.default=({onChange:e,filter:t,field:r,value:s})=>{if(!t)return null;const i="ks-input-"+r.path;return n.a.createElement(l,null,n.a.createElement(a.a,{field:r,renderContext:null,htmlID:i,onChange:t=>{if(null===t)e(null);else{const{value:r}=t;r&&e(r.id)}},value:s,isMulti:!1}))}}}]);