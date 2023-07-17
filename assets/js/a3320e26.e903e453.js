"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4680],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(83117),r=a(67294),i=a(86010),s=a(51048),o=a(33609),l=a(1943),d=a(72957);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:s,values:c,groupId:m,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),_=c??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(_,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!_.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${_.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,l.U)(),[v,w]=(0,r.useState)(b),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=m){const e=y[m];null!=e&&e!==v&&_.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,a=D.indexOf(t),n=_[a].value;n!==v&&(T(t),w(n),null!=m&&k(m,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=D.indexOf(e.currentTarget)+1;t=D[a]??D[0];break}case"ArrowLeft":{const a=D.indexOf(e.currentTarget)-1;t=D[a]??D[D.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},h)},_.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>D.push(e),onKeyDown:P,onClick:C},s,{className:(0,i.Z)("tabs__item",u,s?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,s.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},47713:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=a(83117),r=(a(67294),a(3905)),i=a(34259),s=a(18679);const o={title:"Description",slug:"/api/tutorials/descriptions",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/descriptions.md"},l="Description",d={unversionedId:"docs/api/tutorials/descriptions",id:"docs/api/tutorials/descriptions",title:"Description",description:"Why Would You Use Description on Dataset?",source:"@site/genDocs/docs/api/tutorials/descriptions.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/descriptions",permalink:"/docs/api/tutorials/descriptions",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/descriptions.md",tags:[],version:"current",frontMatter:{title:"Description",slug:"/api/tutorials/descriptions",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/descriptions.md"},sidebar:"overviewSidebar",previous:{title:"Deprecation",permalink:"/docs/api/tutorials/deprecation"},next:{title:"Custom Properties",permalink:"/docs/api/tutorials/custom-properties"}},p={},u=[{value:"Why Would You Use Description on Dataset?",id:"why-would-you-use-description-on-dataset",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Read Description on Dataset",id:"read-description-on-dataset",level:2},{value:"Read Description on Columns",id:"read-description-on-columns",level:2},{value:"Add Description on Dataset",id:"add-description-on-dataset",level:2},{value:"Expected Outcomes of Adding Description on Dataset",id:"expected-outcomes-of-adding-description-on-dataset",level:3},{value:"Add Description on Column",id:"add-description-on-column",level:2},{value:"Expected Outcomes of Adding Description on Column",id:"expected-outcomes-of-adding-description-on-column",level:3}],c={toc:u};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"description"},"Description"),(0,r.kt)("h2",{id:"why-would-you-use-description-on-dataset"},"Why Would You Use Description on Dataset?"),(0,r.kt)("p",null,"Adding a description and related link to a dataset can provide important information about the data, such as its source, collection methods, and potential uses. This can help others understand the context of the data and how it may be relevant to their own work or research. Including a related link can also provide access to additional resources or related datasets, further enriching the information available to users."),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read dataset description: read a description of a dataset."),(0,r.kt)("li",{parentName:"ul"},"Read column description: read a description of columns of a dataset`."),(0,r.kt)("li",{parentName:"ul"},"Add dataset description: add a description and a link to dataset."),(0,r.kt)("li",{parentName:"ul"},"Add column description: add a description to a column of a dataset.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before adding a description, you need to ensure the targeted dataset is already present in your datahub.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from sample ingestion.")),(0,r.kt)("p",null,"In this example, we will add a description to ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name "),"column of a dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted"),"."),(0,r.kt)("h2",{id:"read-description-on-dataset"},"Read Description on Dataset"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)") {\n    properties {\n      description\n    }\n  }\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "properties": {\n        "description": "table containing all the users deleted on a single day"\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"query { dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\\") { properties { description } } }\", \"variables\":{}}'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "properties": {\n        "description": "table containing all the users deleted on a single day"\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_query_description.py\nfrom datahub.emitter.mce_builder import make_dataset_urn\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import DatasetPropertiesClass\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nresult = graph.get_aspects_for_entity(\n    entity_urn=dataset_urn,\n    aspects=["datasetProperties"],\n    aspect_types=[DatasetPropertiesClass],\n)["datasetProperties"]\n\nif result:\n    print(result.description)\n\n')))),(0,r.kt)("h2",{id:"read-description-on-columns"},"Read Description on Columns"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)") {\n    schemaMetadata {\n      fields {\n        fieldPath\n        description\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "schemaMetadata": {\n        "fields": [\n          {\n            "fieldPath": "user_name",\n            "description": "Name of the user who was deleted"\n          },\n          ...\n          {\n            "fieldPath": "deletion_reason",\n            "description": "Why the user chose to deactivate"\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"query { dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\\") { schemaMetadata { fields { fieldPath description } } } }\", \"variables\":{}}'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "schemaMetadata": {\n        "fields": [\n          {\n            "fieldPath": "user_name",\n            "description": "Name of the user who was deleted"\n          },\n          {\n            "fieldPath": "timestamp",\n            "description": "Timestamp user was deleted at"\n          },\n          { "fieldPath": "user_id", "description": "Id of the user deleted" },\n          {\n            "fieldPath": "browser_id",\n            "description": "Cookie attached to identify the browser"\n          },\n          {\n            "fieldPath": "session_id",\n            "description": "Cookie attached to identify the session"\n          },\n          {\n            "fieldPath": "deletion_reason",\n            "description": "Why the user chose to deactivate"\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_query_description_on_columns.py\nfrom datahub.emitter.mce_builder import make_dataset_urn\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import SchemaMetadataClass\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nresult = graph.get_aspects_for_entity(\n    entity_urn=dataset_urn,\n    aspects=["schemaMetadata"],\n    aspect_types=[SchemaMetadataClass],\n)["schemaMetadata"]\n\nif result:\n    column_descriptions = [\n        {field.fieldPath: field.description} for field in result.fields\n    ]\n    print(column_descriptions)\n\n')))),(0,r.kt)("h2",{id:"add-description-on-dataset"},"Add Description on Dataset"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"graphQL",label:"GraphQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation updateDataset {\n  updateDataset(\n    urn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n    input: {\n      editableProperties: {\n          description: "## The Real Estate Sales Dataset\\nThis is a really important Dataset that contains all the relevant information about sales that have happened organized by address.\\n"\n      }\n      institutionalMemory: {\n        elements: {\n          author: "urn:li:corpuser:jdoe"\n            url: "https://wikipedia.com/real_estate"\n            description: "This is the definition of what real estate means"\n        }\n      }\n    }\n  ) {\n    urn\n  }\n}\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateDataset": {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "query": "mutation updateDataset { updateDataset( urn:\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\", input: { editableProperties: { description: \\"## The Real Estate Sales Dataset\\nThis is a really important Dataset that contains all the relevant information about sales that have happened organized by address.\\n\\" } institutionalMemory: { elements: { author: \\"urn:li:corpuser:jdoe\\", url: \\"https://wikipedia.com/real_estate\\", description: \\"This is the definition of what real estate means\\" } } } ) { urn } }",\n  "variables": {}\n}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateDataset": {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_documentation.py\nimport logging\nimport time\n\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    EditableDatasetPropertiesClass,\n    InstitutionalMemoryClass,\n    InstitutionalMemoryMetadataClass,\n)\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Inputs -> owner, ownership_type, dataset\ndocumentation_to_add = "## The Real Estate Sales Dataset\\nThis is a really important Dataset that contains all the relevant information about sales that have happened organized by address.\\n"\nlink_to_add = "https://wikipedia.com/real_estate"\nlink_description = "This is the definition of what real estate means"\ndataset_urn = make_dataset_urn(platform="hive", name="realestate_db.sales", env="PROD")\n\n# Some helpful variables to fill out objects later\nnow = int(time.time() * 1000)  # milliseconds since epoch\ncurrent_timestamp = AuditStampClass(time=now, actor="urn:li:corpuser:ingestion")\ninstitutional_memory_element = InstitutionalMemoryMetadataClass(\n    url=link_to_add,\n    description=link_description,\n    createStamp=current_timestamp,\n)\n\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(config=DatahubClientConfig(server=gms_endpoint))\n\ncurrent_editable_properties = graph.get_aspect(\n    entity_urn=dataset_urn, aspect_type=EditableDatasetPropertiesClass\n)\n\nneed_write = False\nif current_editable_properties:\n    if documentation_to_add != current_editable_properties.description:\n        current_editable_properties.description = documentation_to_add\n        need_write = True\nelse:\n    # create a brand new editable dataset properties aspect\n    current_editable_properties = EditableDatasetPropertiesClass(\n        created=current_timestamp, description=documentation_to_add\n    )\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_editable_properties,\n    )\n    graph.emit(event)\n    log.info(f"Documentation added to dataset {dataset_urn}")\n\nelse:\n    log.info("Documentation already exists and is identical, omitting write")\n\n\ncurrent_institutional_memory = graph.get_aspect(\n    entity_urn=dataset_urn, aspect_type=InstitutionalMemoryClass\n)\n\nneed_write = False\n\nif current_institutional_memory:\n    if link_to_add not in [x.url for x in current_institutional_memory.elements]:\n        current_institutional_memory.elements.append(institutional_memory_element)\n        need_write = True\nelse:\n    # create a brand new institutional memory aspect\n    current_institutional_memory = InstitutionalMemoryClass(\n        elements=[institutional_memory_element]\n    )\n    need_write = True\n\nif need_write:\n    event = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_institutional_memory,\n    )\n    graph.emit(event)\n    log.info(f"Link {link_to_add} added to dataset {dataset_urn}")\n\nelse:\n    log.info(f"Link {link_to_add} already exists and is identical, omitting write")\n\n')))),(0,r.kt)("h3",{id:"expected-outcomes-of-adding-description-on-dataset"},"Expected Outcomes of Adding Description on Dataset"),(0,r.kt)("p",null,"You can now see the description is added to ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataset-description-added",src:a(15661).Z,width:"1313",height:"671"})),(0,r.kt)("h2",{id:"add-description-on-column"},"Add Description on Column"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation updateDescription {\n  updateDescription(\n    input: {\n      description: "Name of the user who was deleted. This description is updated via GrpahQL.",\n      resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)",\n      subResource: "user_name",\n      subResourceType:DATASET_FIELD\n    }\n  )\n}\n')),(0,r.kt)("p",null,"Note that you can use general markdown in ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),". For example, you can do the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation updateDescription {\n  updateDescription(\n    input: {\n      description: """\n      ### User Name\n      The `user_name` column is a primary key column that contains the name of the user who was deleted.\n      """,\n      resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)",\n      subResource: "user_name",\n      subResourceType:DATASET_FIELD\n    }\n  )\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"updateDescription")," currently only supports Dataset Schema Fields, Containers.\nFor more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateDescription")," mutation, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/#updateDescription"},"updateLineage"),"."),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateDescription": true\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation updateDescription { updateDescription ( input: { description: \\"Name of the user who was deleted. This description is updated via GrpahQL.\\", resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\", subResource: \\"user_name\\", subResourceType:DATASET_FIELD }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "updateDescription": true }, "extensions": {} }\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_column_documentation.py\nimport logging\nimport time\n\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    EditableSchemaFieldInfoClass,\n    EditableSchemaMetadataClass,\n    InstitutionalMemoryClass,\n)\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\ndef get_simple_field_path_from_v2_field_path(field_path: str) -> str:\n    """A helper function to extract simple . path notation from the v2 field path"""\n    if not field_path.startswith("[version=2.0]"):\n        # not a v2, we assume this is a simple path\n        return field_path\n        # this is a v2 field path\n    tokens = [\n        t for t in field_path.split(".") if not (t.startswith("[") or t.endswith("]"))\n    ]\n\n    return ".".join(tokens)\n\n\n# Inputs -> owner, ownership_type, dataset\ndocumentation_to_add = (\n    "Name of the user who was deleted. This description is updated via PythonSDK."\n)\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_deleted", env="PROD")\ncolumn = "user_name"\nfield_info_to_set = EditableSchemaFieldInfoClass(\n    fieldPath=column, description=documentation_to_add\n)\n\n\n# Some helpful variables to fill out objects later\nnow = int(time.time() * 1000)  # milliseconds since epoch\ncurrent_timestamp = AuditStampClass(time=now, actor="urn:li:corpuser:ingestion")\n\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(config=DatahubClientConfig(server=gms_endpoint))\n\ncurrent_editable_schema_metadata = graph.get_aspect(\n    entity_urn=dataset_urn,\n    aspect_type=EditableSchemaMetadataClass,\n)\n\n\nneed_write = False\n\nif current_editable_schema_metadata:\n    for fieldInfo in current_editable_schema_metadata.editableSchemaFieldInfo:\n        if get_simple_field_path_from_v2_field_path(fieldInfo.fieldPath) == column:\n            # we have some editable schema metadata for this field\n            field_match = True\n            if documentation_to_add != fieldInfo.description:\n                fieldInfo.description = documentation_to_add\n                need_write = True\nelse:\n    # create a brand new editable dataset properties aspect\n    current_editable_schema_metadata = EditableSchemaMetadataClass(\n        editableSchemaFieldInfo=[field_info_to_set],\n        created=current_timestamp,\n    )\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_editable_schema_metadata,\n    )\n    graph.emit(event)\n    log.info(f"Documentation added to dataset {dataset_urn}")\n\nelse:\n    log.info("Documentation already exists and is identical, omitting write")\n\n\ncurrent_institutional_memory = graph.get_aspect(\n    entity_urn=dataset_urn, aspect_type=InstitutionalMemoryClass\n)\n\nneed_write = False\n\n')))),(0,r.kt)("h3",{id:"expected-outcomes-of-adding-description-on-column"},"Expected Outcomes of Adding Description on Column"),(0,r.kt)("p",null,"You can now see column description is added to ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column of ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"column-description-added",src:a(26005).Z,width:"990",height:"395"})))}m.isMDXComponent=!0},26005:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/column-description-added-c7b185c6a81e48ab21ad75dcb9edbd5a.png"},15661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataset-description-added-5fc16de174caeaed47f9b641b1360b0b.png"}}]);