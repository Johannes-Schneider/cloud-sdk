"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1306],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),a=n(67294),o=n(72389),l=n(5979),s=n(86010),u="tabItem_LplD";function i(e){var t,n,o,i=e.lazy,c=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),k=y.tabGroupChoices,T=y.setTabGroupChoices,w=(0,a.useState)(h),E=w[0],P=w[1],N=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=k[f];null!=x&&x!==E&&b.some((function(e){return e.value===x}))&&P(x)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=b[n].value;r!==E&&(j(t),P(r),null!=f&&T(f,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},m)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return N.push(e)},onKeyDown:I,onFocus:O,onClick:O},o,{className:(0,s.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,o.Z)();return a.createElement(i,(0,r.Z)({key:String(t)},e))}},84725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(9877),s=n(58215),u=["components"],i={},c=void 0,d={unversionedId:"js/features/odata/common/operations/delete",id:"js/features/odata/common/operations/delete",title:"delete",description:"The Delete request builder allows you to create DELETE requests, that delete an entity.",source:"@site/docs/js/features/odata/common/operations/delete.mdx",sourceDirName:"js/features/odata/common/operations",slug:"/js/features/odata/common/operations/delete",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/delete",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/delete.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1649860260,formattedLastUpdatedAt:"4/13/2022",frontMatter:{}},p={},f=[],m={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Delete request builder allows you to create ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," requests, that delete an entity."),(0,o.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  The following won't work on the real SAP S/4HANA BusinessPartner service because BusinessPartners cannot be deleted.\n  We added this only for the sake of the example.\n*/\nconst { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().delete(businessPartner);\n"))),(0,o.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  The following won't work on the real SAP S/4HANA BusinessPartner service because BusinessPartners cannot be deleted.\n  We added this only for the sake of the example.\n*/\nBusinessPartner.requestBuilder().delete(businessPartner);\n")))),(0,o.kt)("p",null,"Entities can only be deleted if ",(0,o.kt)("a",{parentName:"p",href:"#handling-of-etags"},"ETags")," match.\nIf you want to force deletion of the entity regardless of the ETag configure the request to ignore version identifiers with ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier"),":"),(0,o.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .delete(businessPartner)\n  .ignoreVersionIdentifier();\n")),(0,o.kt)("p",null,"You can also overwrite ETags using ",(0,o.kt)("inlineCode",{parentName:"p"},"setVersionIdentifier"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"businessPartnerApi\n  .requestBuilder()\n  .delete(businessPartner)\n  .setVersionIdentifier('etag');\n"))),(0,o.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .delete(businessPartner)\n  .ignoreVersionIdentifier();\n")),(0,o.kt)("p",null,"You can also overwrite ETags using ",(0,o.kt)("inlineCode",{parentName:"p"},"setVersionIdentifier"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .delete(businessPartner)\n  .setVersionIdentifier('etag');\n")))),(0,o.kt)("p",null,"In the example above the ETag 'ETag' is being used instead of the original one."))}v.isMDXComponent=!0}}]);