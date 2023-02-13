"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),l=n(51048),o=n(33609),s=n(1943),u=n(72957);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:l,values:c,groupId:m,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[y,w]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==y&&h.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==y&&(O(t),w(a),null!=m&&N(m,String(a)))},j=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:j,onClick:C},l,{className:(0,i.Z)("tabs__item",p,l?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},83196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(34259),l=n(18679);const o={sidebar_position:14,title:"File",slug:"/generated/ingestion/sources/file",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file.md"},s="File",u={unversionedId:"docs/generated/ingestion/sources/file",id:"docs/generated/ingestion/sources/file",title:"File",description:"Module file",source:"@site/genDocs/docs/generated/ingestion/sources/file.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/file",permalink:"/docs/generated/ingestion/sources/file",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"File",slug:"/generated/ingestion/sources/file",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file.md"},sidebar:"overviewSidebar",previous:{title:"Feast",permalink:"/docs/generated/ingestion/sources/feast"},next:{title:"File Based Lineage",permalink:"/docs/generated/ingestion/sources/file-based-lineage"}},d={},p=[{value:"Module <code>file</code>",id:"module-file",level:2},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file"},"File"),(0,r.kt)("h2",{id:"module-file"},"Module ",(0,r.kt)("inlineCode",{parentName:"h2"},"file")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("p",null,"This plugin pulls metadata from a previously generated file. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/sink_docs/file"},"file sink")," can produce such files, and a number of samples are included in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/mce_files"},"examples/mce_files")," directory."),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," source works out of the box with ",(0,r.kt)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: file\n  config:\n    # Coordinates\n    filename: ./path/to/mce/file.json\n\nsink:\n  # sink configs\n")),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"View All Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filename"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"[deprecated in favor of ",(0,r.kt)("inlineCode",{parentName:"td"},"path"),"]"," The file to ingest."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to folder or file to ingest. If pointed to a folder, all files with extension {file_extension} (default json) within that folder will be processed."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_extension"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"When providing a folder to use to read files, set this field to control file extensions that you want the source to process. * is a special value that means process every file regardless of extension"),(0,r.kt)("td",{parentName:"tr",align:null},".json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"read_mode"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"enum(FileReadMode)"),(0,r.kt)("td",{parentName:"tr",align:null},"Allowed symbols are STREAM, BATCH, AUTO"),(0,r.kt)("td",{parentName:"tr",align:null},"AUTO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aspect"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to an aspect to only read this aspect for ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count_all_before_starting"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, counts total number of records in the file before starting. Used for accurate estimation of completion time. Turn it off if startup time is too high."),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "FileSourceConfig",\n  "type": "object",\n  "properties": {\n    "filename": {\n      "title": "Filename",\n      "description": "[deprecated in favor of `path`] The file to ingest.",\n      "type": "string"\n    },\n    "path": {\n      "title": "Path",\n      "description": "Path to folder or file to ingest. If pointed to a folder, all files with extension {file_extension} (default json) within that folder will be processed.",\n      "type": "string",\n      "format": "path"\n    },\n    "file_extension": {\n      "title": "File Extension",\n      "description": "When providing a folder to use to read files, set this field to control file extensions that you want the source to process. * is a special value that means process every file regardless of extension",\n      "default": ".json",\n      "type": "string"\n    },\n    "read_mode": {\n      "default": "AUTO",\n      "allOf": [\n        {\n          "$ref": "#/definitions/FileReadMode"\n        }\n      ]\n    },\n    "aspect": {\n      "title": "Aspect",\n      "description": "Set to an aspect to only read this aspect for ingestion.",\n      "type": "string"\n    },\n    "count_all_before_starting": {\n      "title": "Count All Before Starting",\n      "description": "When enabled, counts total number of records in the file before starting. Used for accurate estimation of completion time. Turn it off if startup time is too high.",\n      "default": true,\n      "type": "boolean"\n    }\n  },\n  "required": [\n    "path"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "FileReadMode": {\n      "title": "FileReadMode",\n      "description": "An enumeration.",\n      "enum": [\n        "STREAM",\n        "BATCH",\n        "AUTO"\n      ]\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.file.GenericFileSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/file.py"},"GitHub"))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for File, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);