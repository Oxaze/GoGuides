(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78a7634b"],{2979:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-article"},[n("v-wait",{staticStyle:{height:"100%"},attrs:{for:"loadNews"}},[n("template",{slot:"waiting"},[n("div",{staticClass:"spinner"},[n("hollow-dots-spinner",{attrs:{"animation-duration":1125,"dot-size":18,"dots-num":3,color:"#27426F"}})],1)]),n("div",{staticClass:"article-hero"},[n("div",{staticClass:"article-hero__outer"},[n("div",{staticClass:"article-hero__inner"},[n("h1",[t._v(t._s(t.content.title))]),n("p",{staticClass:"article-hero__meta"},[t._v(t._s(t.content.contentType)+" • "+t._s(t.content.releaseDate))])])]),n("parallax",{attrs:{breakpoint:"(min-width: 768px)"}},[n("img",{attrs:{src:t.content.imageUrl,alt:"Background Image"}})])],1),n("div",{staticClass:"article-text"},[t.$wait.is("loadNews")?t._e():n("div",{domProps:{innerHTML:t._s(t.compiledMarkdown)}}),n("br"),n("p",{staticClass:"article-text__source"},[t._v("\n\t\t\t\tQuelle: "),n("a",{attrs:{href:t.content.source}},[t._v(t._s(t.sourceHostName))])])])],2)],1)},a=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("4917"),n("bd86")),o=(n("a481"),n("540a")),s=n.n(o),c=n("0e54"),l=n.n(c),u=n("d15e"),p=n("4583"),d=n("2f62");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach(function(e){Object(i["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var f={name:"news-article",components:{parallax:s.a,HollowDotsSpinner:p["a"]},data:function(){return{id:this.$route.params.id,content:{}}},created:function(){var t=this;this.$wait.start("loadNews"),document.querySelector("#app").classList.add("app-spinner-wrapper"),this.getEntry({type:"news",id:this.id}).then(function(){t.content=t.newsContent(t.id),t.$wait.end("loadNews"),document.querySelector("#app").classList.remove("app-spinner-wrapper")}).then(function(){Object(u["a"])(".article-text img")}).catch(function(e){console.error(e),t.$router.replace({name:"page-not-found"})})},methods:h({},Object(d["b"])(["getEntry"])),computed:h({},Object(d["c"])(["newsContent"]),{compiledMarkdown:function(){if(this.content.newsText)return l()(this.content.newsText,{sanitize:!0,breaks:!0})},sourceHostName:function(){if(this.content.source){var t=this.content.source.match(/:\/\/(www[0-9]?\.)?(.[^\/:]+)/i);return null!=t&&t.length>2&&"string"===typeof t[2]&&t[2].length>0?t[2]:null}}}),beforeRouteUpdate:function(t,e,n){var r=this;this.id=t.params.id,this.$wait.start("loadNews"),document.querySelector("#app").classList.add("app-spinner-wrapper"),this.getEntry({type:"news",id:this.id}).then(function(){r.content=r.newsContent(r.id),r.$wait.end("loadNews"),document.querySelector("#app").classList.remove("app-spinner-wrapper")}).then(function(){Object(u["a"])(".article-text img")}).catch(function(t){console.error(t),r.$router.replace({name:"page-not-found"})}),n()}},m=f,v=n("2877"),b=Object(v["a"])(m,r,a,!1,null,null,null);e["default"]=b.exports},4917:function(t,e,n){"use strict";var r=n("cb7c"),a=n("9def"),i=n("0390"),o=n("5f1b");n("214f")("match",1,function(t,e,n,s){return[function(n){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=s(n,t,this);if(e.done)return e.value;var c=r(t),l=String(this);if(!c.global)return o(c,l);var u=c.unicode;c.lastIndex=0;var p,d=[],w=0;while(null!==(p=o(c,l))){var h=String(p[0]);d[w]=h,""===h&&(c.lastIndex=i(l,a(c.lastIndex),u)),w++}return 0===w?null:d}]})}}]);
//# sourceMappingURL=chunk-78a7634b.ef7c8293.js.map