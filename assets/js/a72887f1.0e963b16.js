"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5238],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),u=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return s.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),h=r,m=d["".concat(c,".").concat(h)]||d[h]||l[h]||a;return t?s.createElement(m,o(o({ref:n},p),{},{components:t})):s.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){var s=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return s.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return d}});var s=t(87462),r=t(67294),a=t(72389),o=t(79443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(63616),u=t(86010),p="tabItem_1uMI";function l(e){var n,t,a,o=e.lazy,l=e.block,d=e.defaultValue,h=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,c.lx)(k,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(n=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=b[0])?void 0:a.props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),g=v.tabGroupChoices,N=v.setTabGroupChoices,R=(0,r.useState)(w),C=R[0],q=R[1],T=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==C&&k.some((function(e){return e.value===E}))&&q(E)}var B=function(e){var n=e.currentTarget,t=T.indexOf(n),s=k[t].value;s!==C&&(P(n),q(s),null!=m&&N(m,s))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var s=T.indexOf(e.currentTarget)+1;t=T[s]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},f)},k.map((function(e){var n=e.value,t=e.label,a=e.attributes;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:B,onClick:B},a,{className:(0,u.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function d(e){var n=(0,a.Z)();return r.createElement(l,(0,s.Z)({key:String(n)},e))}},55204:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var s=t(87462),r=t(63366),a=(t(67294),t(3905)),o=t(26396),i=t(58215),c=["components"],u={},p=void 0,l={unversionedId:"js/features/odata/common/batch/responses",id:"js/features/odata/common/batch/responses",title:"responses",description:"Once a batch request is executed, it returns a list of BatchResponses.",source:"@site/docs/js/features/odata/common/batch/responses.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/responses",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/responses",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/responses.mdx",tags:[],version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1644832441,formattedLastUpdatedAt:"2/14/2022",frontMatter:{}},d=[{value:"<code>ReadResponse</code>",id:"readresponse",children:[],level:3},{value:"<code>WriteResponses</code>",id:"writeresponses",children:[],level:3},{value:"<code>ErrorResponse</code>",id:"errorresponse",children:[],level:3},{value:"<code>ReadResponse</code>",id:"readresponse-1",children:[],level:3},{value:"<code>WriteResponses</code>",id:"writeresponses-1",children:[],level:3},{value:"<code>ErrorResponse</code>",id:"errorresponse-1",children:[],level:3}],h={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,s.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once a ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request is executed, it returns a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s.\nThe responses correspond to the retrieve requests and changesets in the same order that they were passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," function.\nRequests that were not successful are reflected as ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"s.\nResponses to successful requests are represented as ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse"),"s for retrieve requests, and ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses")," for changesets."),(0,a.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"major",mdxType:"TabItem"},"To determine the type of a response, you can use the following type guards:",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".isSuccess()")," - to check that the response is either a ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadResponse")," or of type ",(0,a.kt)("inlineCode",{parentName:"li"},"WriteResponses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".isError()")," - to check that the response is an ",(0,a.kt)("inlineCode",{parentName:"li"},"ErrorResponse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".isReadResponse()")," - to check that the response is a ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadResponse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".isWriteResponses()")," - to check that the response is either of type ",(0,a.kt)("inlineCode",{parentName:"li"},"WriteResponses"))),(0,a.kt)("p",null,"Then, depending on the corresponding request, you can parse the response or handle the error."),(0,a.kt)("h3",{id:"readresponse"},(0,a.kt)("inlineCode",{parentName:"h3"},"ReadResponse")),(0,a.kt)("p",null,"Successful retrieve requests have the type ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse"),", which contains the HTTP code, the raw body, and the constructor of the entity that was parsed from the response.\nTo work with an instance of the retrieved entity, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw data into an instance of an entity represented by the given entity API.\nNote, that the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method transforms the raw data to an array of entities, even if the original request was a ",(0,a.kt)("inlineCode",{parentName:"p"},"GetByKeyRequestBuilder"),"."),(0,a.kt)("p",null,"In the example below, we combine a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"GetByKeyRequestBuilder"),"s into one ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request and execute it against a destination.\nIf one of the requests was unsuccessful, an error will be thrown.\nOtherwise, the responses are transformed into instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi } = businessPartnerService();\n\nasync function getAddressesByIds(\n  ...retrieveRequests: GetByKeyRequestBuilder<BusinessPartnerAddress>[]\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // Error handling\n  if (batchResponses.some(response => !response.isSuccess())) {\n    throw new Error('Some of the batch subrequests were not successful.');\n  }\n\n  return batchResponses.reduce(\n    (addresses: BusinessPartnerAddress[], response: BatchResponse) => {\n      if (response.isReadResponse()) {\n        // Transform response to an instance of BusinessPartnerAddress\n        const [address] = response.as(businessPartnerAddressApi);\n        addresses.push(address);\n      }\n      return addresses;\n    },\n    []\n  );\n}\n")),(0,a.kt)("h3",{id:"writeresponses"},(0,a.kt)("inlineCode",{parentName:"h3"},"WriteResponses")),(0,a.kt)("p",null,"Successful changeset requests can be cast to ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses")," which contains all subresponses for the changeset request.\nThose responses can be accessed by ",(0,a.kt)("inlineCode",{parentName:"p"},".responses")," and have the type ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse"),".\nEach ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse")," contains the HTTP code and can contain the raw body and the constructor of the entity that was parsed from the response, depending on whether there was a body in the response.\nCreate and delete requests typically do not have a response body.\nTo work with an instance of an entity given in a ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse"),", you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw string body into an instance of the given constructor.\nNote that the response may not exist, so you should only call this method if you know that there is data.\nTypically the HTTP code is a good indicator for this - ",(0,a.kt)("inlineCode",{parentName:"p"},"201 No Content")," probably won't have content.\nIf you are working with TypeScript you will have to tell the compiler, that the ",(0,a.kt)("inlineCode",{parentName:"p"},".as!")," method can be used here by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"!"),".\nAlso note, that the response to a changeset can be an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),".\nTherefore, it is crucial to check responses for success, before casting them to ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses"),"."),(0,a.kt)("p",null,"In the example below, we combine a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateRequestBuilder"),"s into one ",(0,a.kt)("inlineCode",{parentName:"p"},"changeset")," and pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request, which we execute against a destination."),(0,a.kt)("p",null,"Once we execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request, we get a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s, which contains one response only."),(0,a.kt)("p",null,"If the request was unsuccessful, an error will be thrown.\nOtherwise, the subresponses are transformed into instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi, changeset } =\n  businessPartnerService();\n\nasync function updateAddresses(\n  ...updateRequests: UpdateRequestBuilder<BusinessPartnerAddress>\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  if (changesetResponse.isWriteResponses()) {\n    return changesetResponse.responses.map(response =>\n      // Transform response to an instance of BusinessPartnerAddress\n      response.as!(BusinessPartnerAddress)\n    );\n  }\n\n  // Error handling\n  throw new Error('The changeset request was not successful.');\n}\n")),(0,a.kt)("h3",{id:"errorresponse"},(0,a.kt)("inlineCode",{parentName:"h3"},"ErrorResponse")),(0,a.kt)("p",null,"Unsuccessful retrieve requests and changesets are reflected as ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"s in the response.\nThose responses have an ",(0,a.kt)("inlineCode",{parentName:"p"},"httpCode")," (a number) and a ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," (a JSON object).")),(0,a.kt)(i.Z,{value:"deprecated",mdxType:"TabItem"},(0,a.kt)("p",null,"To determine if a request was successful use ",(0,a.kt)("inlineCode",{parentName:"p"},".isSuccess()"),".\nThen, depending on the corresponding request, you can parse the response or handle the error."),(0,a.kt)("h3",{id:"readresponse-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"ReadResponse")),(0,a.kt)("p",null,"Successful retrieve requests can be cast to ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse"),", which contains the HTTP code, the raw body, and the constructor of the entity that was parsed from the response.\nTo work with an instance of the retrieved entity, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw data into an instance of the given constructor.\nNote, that the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method transforms the raw data to an array of entities, even if the original request was a ",(0,a.kt)("inlineCode",{parentName:"p"},"GetByKeyRequestBuilder"),".\nAlso note, that retrieve responses can be ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"s.\nTherefore, it is crucial to check responses for success, before casting them to ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse"),"."),(0,a.kt)("p",null,"In the example below, we combine a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"GetByKeyRequestBuilder"),"s into one ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request and execute it against a destination.\nIf one of the requests was unsuccessful, an error will be thrown.\nOtherwise, the responses are transformed into instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function getAddressesByIds(\n  ...retrieveRequests: GetByKeyRequestBuilder<BusinessPartnerAddress>[]\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // Error handling\n  if (batchResponses.some(response => !response.isSuccess())) {\n    throw new Error('Some of the batch subrequests were not successful.');\n  }\n\n  return batchResponses.reduce(\n    (addresses: BusinessPartnerAddress[], response: BatchResponse) => [\n      ...addresses,\n      // Transform response to an instance of BusinessPartnerAddress\n      ...(response as ReadResponse).as(BusinessPartnerAddress)\n    ],\n    []\n  );\n}\n")),(0,a.kt)("h3",{id:"writeresponses-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"WriteResponses")),(0,a.kt)("p",null,"Successful changeset requests can be cast to ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses")," which contains all subresponses for the changeset request.\nThose responses can be accessed by ",(0,a.kt)("inlineCode",{parentName:"p"},".responses")," and have the type ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse"),".\nEach ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse")," contains the HTTP code and can contain the raw body and the constructor of the entity that was parsed from the response, depending on whether there was a body in the response.\nCreate and delete requests typically do not have a response body.\nTo work with an instance of an entity given in a ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse"),", you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw string body into an instance of the given constructor.\nNote that the response may not exist, so you should only call this method if you know that there is data.\nTypically the HTTP code is a good indicator for this - ",(0,a.kt)("inlineCode",{parentName:"p"},"201 No Content")," probably won't have content.\nIf you are working with TypeScript you will have to tell the compiler, that the ",(0,a.kt)("inlineCode",{parentName:"p"},".as!")," method can be used here by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"!"),".\nAlso note, that the response to a changeset can be an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),".\nTherefore, it is crucial to check responses for success, before casting them to ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses"),"."),(0,a.kt)("p",null,"In the example below, we combine a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateRequestBuilder"),"s into one ",(0,a.kt)("inlineCode",{parentName:"p"},"changeset")," and pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request, which we execute against a destination."),(0,a.kt)("p",null,"Once we execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request, we get a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s, which contains one response only."),(0,a.kt)("p",null,"If the request was unsuccessful, an error will be thrown.\nOtherwise, the subresponses are transformed into instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function updateAddresses(\n  ...updateRequests: UpdateRequestBuilder<BusinessPartnerAddress>\n): Promise<BusinessPartnerAddress[]> {\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  // Error handling\n  if (!changesetResponse.isSuccess()) {\n    throw new Error('The changeset request was not successful.');\n  }\n\n  return changesetResponse.responses.map(response =>\n    // Transform response to an instance of BusinessPartnerAddress\n    response.as!(BusinessPartnerAddress)\n  );\n}\n")),(0,a.kt)("h3",{id:"errorresponse-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"ErrorResponse")),(0,a.kt)("p",null,"Unsuccessful retrieve requests and changesets are reflected as ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"s in the response.\nThose responses have an ",(0,a.kt)("inlineCode",{parentName:"p"},"httpCode")," (a number) and a ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," (a JSON object)."))))}m.isMDXComponent=!0}}]);