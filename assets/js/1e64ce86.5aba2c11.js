"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9039],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(a),u=l,f=m["".concat(o,".").concat(u)]||m[u]||c[u]||s;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,i=new Array(s);i[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,i),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),l=a(67294),s=a(86010),i=a(51048),r=a(33609),o=a(1943),p=a(72957);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:i,values:m,groupId:u,className:f}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,r.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,o.U)(),[v,_]=(0,l.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:D}=(0,p.o5)();if(null!=u){const e=N[u];null!=e&&e!==v&&k.some((t=>t.value===e))&&_(e)}const P=e=>{const t=e.currentTarget,a=w.indexOf(t),n=k[a].value;n!==v&&(D(t),_(n),null!=u&&y(u,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},f)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:P},i,{className:(0,s.Z)("tabs__item",c,i?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,i.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},60250:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=a(83117),l=(a(67294),a(3905)),s=a(34259),i=a(18679);const r={sidebar_position:23,title:"LDAP",slug:"/generated/ingestion/sources/ldap",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/ldap.md"},o="LDAP",p={unversionedId:"docs/generated/ingestion/sources/ldap",id:"docs/generated/ingestion/sources/ldap",title:"LDAP",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/ldap.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/ldap",permalink:"/docs/generated/ingestion/sources/ldap",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/ldap.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"LDAP",slug:"/generated/ingestion/sources/ldap",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/ldap.md"},sidebar:"overviewSidebar",previous:{title:"Kafka Connect",permalink:"/docs/generated/ingestion/sources/kafka-connect"},next:{title:"Looker",permalink:"/docs/generated/ingestion/sources/looker"}},d={},c=[{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ldap"},"LDAP"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"People"),(0,l.kt)("li",{parentName:"ul"},"Names, emails, titles, and manager information for each person"),(0,l.kt)("li",{parentName:"ul"},"List of groups")),(0,l.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,l.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[ldap]'\n")),(0,l.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "ldap"\n  config:\n    # Coordinates\n    ldap_server: ldap://localhost\n\n    # Credentials\n    ldap_user: "cn=admin,dc=example,dc=org"\n    ldap_password: "admin"\n\n    # Options\n    base_dn: "dc=example,dc=org"\n\nsink:\n  # sink configs\n')),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("div",{className:"config-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"base_dn"),"\xa0",(0,l.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"LDAP DN.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"ldap_password"),"\xa0",(0,l.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"LDAP password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"ldap_server"),"\xa0",(0,l.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"LDAP server URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"ldap_user"),"\xa0",(0,l.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"LDAP user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"attrs_list"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"array(string)"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"custom_props_list"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"array(string)"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"drop_missing_first_last_name"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"If set to true, any users without first and last names will be dropped. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"filter"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"LDAP extractor filter. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"(objectClass=","*",")")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"group_attrs_map"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"object"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"default-line "},"Default: ",(0,l.kt)("span",{className:"default-value"},"{","}")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"manager_filter_enabled"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Use LDAP extractor filter to search managers. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"manager_pagination_enabled"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"[deprecated]"," Use pagination_enabled  ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"page_size"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"integer"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Size of each page to fetch when extracting metadata. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"20")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"pagination_enabled"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Use pagination while do search query (enabled by default). ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"platform_instance"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"user_attrs_map"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"object"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"default-line "},"Default: ",(0,l.kt)("span",{className:"default-value"},"{","}")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"env"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"PROD")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Base specialized config for Stateful Ingestion with stale metadata removal capability.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,l.kt)("span",{className:"path-main"},"enabled"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The type of the ingestion state provider registered with datahub. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"False")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,l.kt)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))))))),(0,l.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "LDAPSourceConfig",\n  "description": "Config used by the LDAP Source.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "ldap_server": {\n      "title": "Ldap Server",\n      "description": "LDAP server URL.",\n      "type": "string"\n    },\n    "ldap_user": {\n      "title": "Ldap User",\n      "description": "LDAP user.",\n      "type": "string"\n    },\n    "ldap_password": {\n      "title": "Ldap Password",\n      "description": "LDAP password.",\n      "type": "string"\n    },\n    "base_dn": {\n      "title": "Base Dn",\n      "description": "LDAP DN.",\n      "type": "string"\n    },\n    "filter": {\n      "title": "Filter",\n      "description": "LDAP extractor filter.",\n      "default": "(objectClass=*)",\n      "type": "string"\n    },\n    "attrs_list": {\n      "title": "Attrs List",\n      "description": "Retrieved attributes list",\n      "type": "array",\n      "items": {\n        "type": "string"\n      }\n    },\n    "custom_props_list": {\n      "title": "Custom Props List",\n      "description": "A list of custom attributes to extract from the LDAP provider.",\n      "type": "array",\n      "items": {\n        "type": "string"\n      }\n    },\n    "drop_missing_first_last_name": {\n      "title": "Drop Missing First Last Name",\n      "description": "If set to true, any users without first and last names will be dropped.",\n      "default": true,\n      "type": "boolean"\n    },\n    "page_size": {\n      "title": "Page Size",\n      "description": "Size of each page to fetch when extracting metadata.",\n      "default": 20,\n      "type": "integer"\n    },\n    "manager_filter_enabled": {\n      "title": "Manager Filter Enabled",\n      "description": "Use LDAP extractor filter to search managers.",\n      "default": true,\n      "type": "boolean"\n    },\n    "manager_pagination_enabled": {\n      "title": "Manager Pagination Enabled",\n      "description": "[deprecated] Use pagination_enabled ",\n      "default": true,\n      "type": "boolean"\n    },\n    "pagination_enabled": {\n      "title": "Pagination Enabled",\n      "description": "Use pagination while do search query (enabled by default).",\n      "default": true,\n      "type": "boolean"\n    },\n    "user_attrs_map": {\n      "title": "User Attrs Map",\n      "default": {},\n      "type": "object"\n    },\n    "group_attrs_map": {\n      "title": "Group Attrs Map",\n      "default": {},\n      "type": "object"\n    }\n  },\n  "required": [\n    "ldap_server",\n    "ldap_user",\n    "ldap_password",\n    "base_dn"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19)."\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.ldap.LDAPSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/ldap.py"},"GitHub"))),(0,l.kt)("h2",null,"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for LDAP, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}u.isMDXComponent=!0}}]);