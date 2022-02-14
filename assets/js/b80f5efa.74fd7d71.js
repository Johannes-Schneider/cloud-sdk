"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7361],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74880:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Develop your App for the Kyma Environment with Java SDK",sidebar_label:"SAP Kyma",description:"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},l=void 0,p={unversionedId:"java/environments/sap-btp-kyma-environment",id:"java/environments/sap-btp-kyma-environment",title:"Develop your App for the Kyma Environment with Java SDK",description:"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment",source:"@site/docs/java/environments/sap-btp-kyma-environment.mdx",sourceDirName:"java/environments",slug:"/java/environments/sap-btp-kyma-environment",permalink:"/cloud-sdk/docs/java/environments/sap-btp-kyma-environment",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/environments/sap-btp-kyma-environment.mdx",tags:[],version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1644832441,formattedLastUpdatedAt:"2/14/2022",frontMatter:{title:"Develop your App for the Kyma Environment with Java SDK",sidebar_label:"SAP Kyma",description:"Learn how to develop an application with the SAP Cloud SDK for Java in the Kyma environment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Kubernetes with SAP Gardener",permalink:"/cloud-sdk/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener"},next:{title:"Loading Service Bindings",permalink:"/cloud-sdk/docs/java/features/service-bindings/load-service-bindings-from-environment"}},c=[{value:"SAP Cloud SDK Features Supported on Kyma by SAP",id:"sap-cloud-sdk-features-supported-on-kyma-by-sap",children:[],level:2},{value:"Getting Started with the SAP Cloud SDK on Kyma",id:"getting-started-with-the-sap-cloud-sdk-on-kyma",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kyma-project.io/"},"Kyma")," is an application runtime that provides you a flexible and easy way to connect, extend, and customize your applications in the cloud-native world of Kubernetes.\nFind more details in the ",(0,o.kt)("a",{parentName:"p",href:"https://kyma-project.io/docs/kyma/latest/01-overview/"},"official documentation"),"."),(0,o.kt)("h2",{id:"sap-cloud-sdk-features-supported-on-kyma-by-sap"},"SAP Cloud SDK Features Supported on Kyma by SAP"),(0,o.kt)("p",null,"Find below the list of features we currently support:\nLegend: \u2705 - supported, \u2757- partially supported, \u274c - not supported"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2705 Consume SAP BTP services like Destination, Connectivity, IAS, XSUAA, and others"),(0,o.kt)("li",{parentName:"ul"},"\u2757 Multitenancy (Access to IAS based Principal not yet supported)"),(0,o.kt)("li",{parentName:"ul"},"\u2757 Resilience & Caching (Caching with IAS based Principal not yet supported)"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Connect to and consume services from SAP S/4HANA Cloud"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Connect to and consume services from SAP S/4HANA On-Premise"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Seamless use of typed clients provided by the SAP Cloud SDK")),(0,o.kt)("h2",{id:"getting-started-with-the-sap-cloud-sdk-on-kyma"},"Getting Started with the SAP Cloud SDK on Kyma"),(0,o.kt)("p",null,"The getting started guide for the Kyma environment is pending.\nHowever, there is some great material already available in other places that covers this."),(0,o.kt)("p",null,"Please refer to the following material to get started with the SAP Cloud SDK on Kyma:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/kyma-runtime-extension-samples/tree/main/sample-cloudsdk-java"},"Sample Application with Setup Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2022/01/11/use-sap-cloud-sdk-on-kyma-runtime-to-connect-to-external-systems-with-client-cert-authentication/"},"Blog Post on a Sample Use Case")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sap.github.io/cloud-sdk/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener#excursion-bind-services-created-by-the-service-catalog"},"Using the Service Catalog with the SAP Cloud SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sap.github.io/cloud-sdk/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener"},"Guide for Gardener Based Clusters"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Service Catalog")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In case you are using the Service Catalog to create and bind service instances please make sure to check out the ",(0,o.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener#excursion-bind-services-created-by-the-service-catalog"},"dedicated section")," of the documentation."))))}u.isMDXComponent=!0}}]);