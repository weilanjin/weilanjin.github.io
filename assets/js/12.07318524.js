(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{323:function(e,t,a){},342:function(e,t,a){"use strict";var l=a(323);a.n(l).a},354:function(e,t,a){"use strict";a.r(t);var l={name:"UtilBase64Encode",data:function(){return{result:"",loading:!1}},methods:{readAudioFile:function(e){var t=this,a=new FileReader;this.loading=!0,a.readAsDataURL(e.file),a.onload=function(e){t.loading=!1,t.result=e.target.result}}}},i=(a(342),a(1)),s=Object(i.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"util-base-encode"},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"javascript:;","http-request":e.readAudioFile,"show-file-list":!1,multiple:""}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])])]),e._v(" "),e.result?a("el-input",{attrs:{type:"textarea",rows:10,placeholder:"复制区"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}}):e._e()],1)}),[],!1,null,"2b5e9cb3",null);t.default=s.exports}}]);