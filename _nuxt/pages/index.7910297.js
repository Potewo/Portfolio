(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("1b7833da",content,!0,{sourceMap:!1})},195:function(t,e,n){"use strict";var r=n(193);n.n(r).a},196:function(t,e,n){(e=n(48)(!1)).push([t.i,"@media screen and (max-width:550px){.cards{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}.convex{margin:10px;border-radius:25px;padding:25px}}",""]),t.exports=e},203:function(t,e,n){"use strict";n.r(e);n(23);var r=n(2),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").fetch();case 3:return r=e.sent,e.next=6,n("about").fetch();case 6:return c=e.sent,e.abrupt("return",{articles:r,about:c});case 8:case"end":return e.stop()}}),e)})))()}},o=(n(195),n(33)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"description convex"},[n("h2",[t._v("About")]),t._v(" "),n("nuxt-content",{attrs:{document:t.about}})],1),t._v(" "),n("div",{staticClass:"products convex"},[n("h2",[t._v("Products")]),t._v(" "),n("div",{staticClass:"cards"},t._l(t.articles,(function(article){return n("nuxt-link",{key:article.slug,attrs:{to:article.slug}},[n("div",{staticClass:"card convex"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:"images/"+article.image}})]),t._v(" "),n("h2",[t._v(t._s(article.title))])])])})),1)])])}),[],!1,null,null,null);e.default=component.exports}}]);