webpackJsonp([1],{GSo6:function(t,r){},HA90:function(t,r){},OQQf:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=e("//Fk"),i=e.n(a),n=e("/j7X"),c={name:"article-placeholder",components:{VueContentLoading:e.n(n).a},data:function(){return{}}},s={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("article",[e("vue-content-loading",{attrs:{width:784,height:85}},[e("rect",{attrs:{x:"267",y:"25",rx:"5",ry:"5",width:"250",height:"20"}}),t._v(" "),e("rect",{attrs:{x:"292",y:"75",rx:"5",ry:"5",width:"200",height:"10"}})]),t._v(" "),e("vue-content-loading",{attrs:{width:784,height:370}},[e("rect",{attrs:{x:"28",y:"14",rx:"5",ry:"5",width:"70",height:"70"}}),t._v(" "),e("rect",{attrs:{x:"110",y:"23",rx:"5",ry:"5",width:"650",height:"12"}}),t._v(" "),e("rect",{attrs:{x:"110",y:"50",rx:"5",ry:"5",width:"650",height:"12"}}),t._v(" "),e("rect",{attrs:{x:"110",y:"75",rx:"5",ry:"5",width:"650",height:"12"}}),t._v(" "),e("rect",{attrs:{x:"28",y:"100",rx:"5",ry:"5",width:"300",height:"12"}}),t._v(" "),e("rect",{attrs:{x:"28",y:"130",rx:"5",ry:"5",width:"730",height:"3"}}),t._v(" "),e("rect",{attrs:{x:"28",y:"150",rx:"5",ry:"5",width:"730",height:"200"}})]),t._v(" "),t._l(5,function(r){return e("vue-content-loading",{key:r,attrs:{width:784,height:130}},[e("rect",{attrs:{x:"28",y:"0",rx:"5",ry:"5",width:"200",height:"16"}}),t._v(" "),e("rect",{attrs:{x:"28",y:"30",rx:"5",ry:"5",width:"650",height:"12"}}),t._v(" "),e("rect",{attrs:{x:"28",y:"60",rx:"5",ry:"5",width:"730",height:"12"}}),t._v(" "),e("rect",{attrs:{x:"28",y:"90",rx:"5",ry:"5",width:"500",height:"12"}})])})],2)},staticRenderFns:[]},l=e("VU/8")(c,s,!1,null,null,null).exports,h=e("n5Qe"),o={name:"article",components:{ArticlePlaceholder:l,ArticleMeta:function(){return new i.a(function(t){e.e(0).then(function(r){t(e("XdTI"))}.bind(null,e)).catch(e.oe)})}},data:function(){return{article:{}}},created:function(){var t=this,r=function(){var t=parseInt(this.$route.params.number,10);return this.$store.state[this.$route.meta.store].find(function(r){return r.number===t})}.call(this);if(r)return this.article=r;var e=this.$route,a=e.params,i=e.meta;Object(h.a)(i.repository,a.number).then(function(r){return t.article=i.convert(r)})}},u={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"article"}},[t.article.id?e("article",{staticClass:"article-container"},[e("div",{staticClass:"article-border-top",style:{backgroundColor:t.article.labels[0]?"#"+t.article.labels[0].color:"#00a0e9"}}),t._v(" "),e("h2",{staticClass:"article-title"},[t._v(t._s(t.article.title))]),t._v(" "),e("article-meta",{attrs:{article:t.article}}),t._v(" "),t.article.summary?[e("i",{staticClass:"fa fa-quote-left fa-3x fa-pull-left fa-border",attrs:{"aria-hidden":"true"}}),t._v(" "),e("blockquote",{staticClass:"article-summary",domProps:{innerHTML:t._s(t.article.summary)}})]:t._e(),t._v(" "),t.article.banner?e("img",{staticClass:"article-banner",attrs:{src:t.article.banner,alt:"banner"}}):t._e(),t._v(" "),e("div",{staticClass:"article-body",domProps:{innerHTML:t._s(t.article.body)}})],2):e("article-placeholder")],1)},staticRenderFns:[]},d=e("VU/8")(o,u,!1,function(t){e("HA90"),e("GSo6")},"data-v-bd25004c",null);r.default=d.exports}});
//# sourceMappingURL=1.2c1cb34676f6eb5c54da.js.map