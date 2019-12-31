(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{378:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"内存管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[t._v("#")]),t._v(" 内存管理")]),t._v(" "),a("h2",{attrs:{id:"node的-v8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node的-v8"}},[t._v("#")]),t._v(" node的 v8")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("v8内存限制")]),t._v(" "),a("ul",[a("li",[t._v("64位系统 --- 1.4GB")]),t._v(" "),a("li",[t._v("32位系统 --- 0.7GB")])])]),t._v(" "),a("li",[a("p",[t._v("v8 对象内存分配")]),t._v(" "),a("ul",[a("li",[t._v("所有的javascript对象都是通过堆来进行分配内存")])])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 查看内存分配\n$ node\n> process.memoryUsage()\n")])])]),a("ul",[a("li",[a("code",[t._v("process.memoryUsage()")]),t._v(" 返回四个属性\n"),a("ul",[a("li",[a("code",[t._v("rss(resident set size)")]),t._v(" 所有内存占用，包括指令和堆栈")]),t._v(" "),a("li",[a("code",[t._v("heapTotal")]),t._v(" '堆' 占用的内存，包括用到的和没有用到的")]),t._v(" "),a("li",[a("code",[t._v("heapUsed")]),t._v(" 用到的堆的部分")]),t._v(" "),a("li",[a("code",[t._v("external")]),t._v(" v8 引擎内部的 c++ 对象占用的内存")])])])]),t._v(" "),a("h3",{attrs:{id:"v8中的垃圾回收机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8中的垃圾回收机制"}},[t._v("#")]),t._v(" v8中的垃圾回收机制")]),t._v(" "),a("ul",[a("li",[t._v("对象的生存周期长短不一，不同的算法只能针对特定情况具有最好的效果。统计学在垃圾回收算法的发展中产生来较大的作用，现代的垃圾回收算法中按对象的存活时间将内存的垃圾回收进行不同的分代，然后分别对不同的分代的内存施以更高效的算法")])]),t._v(" "),a("h4",{attrs:{id:"v8的内内存分代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8的内内存分代"}},[t._v("#")]),t._v(" v8的内内存分代")]),t._v(" "),a("ul",[a("li",[t._v("分为"),a("code",[t._v("新生代")]),t._v("和"),a("code",[t._v("老生代")]),t._v(" "),a("ul",[a("li",[t._v("新生代的对象为"),a("code",[t._v("存活时间较短的对象")])]),t._v(" "),a("li",[t._v("老生代中的对象为"),a("code",[t._v("存活时间较长")]),t._v("或"),a("code",[t._v("常驻内存的对象")])])])])]),t._v(" "),a("h3",{attrs:{id:"高效使用内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高效使用内存"}},[t._v("#")]),t._v(" 高效使用内存")]),t._v(" "),a("h4",{attrs:{id:"作用域-scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域-scope"}},[t._v("#")]),t._v(" 作用域(scope)")]),t._v(" "),a("ul",[a("li",[t._v("函数")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" local "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("foo()函数在每次调用时会创建对应的作用域，函数执行结束后，作用会被销毁")])]),t._v(" "),a("li",[a("code",[t._v("随着作用域销毁,所声明的局部变量也被回收")])]),t._v(" "),a("li",[t._v("变量的主动释放\n"),a("ul",[a("li",[t._v("全局变量 ---- "),a("code",[t._v("由于全局作用域需要直直到进程退出才能释放")])]),t._v(" "),a("li",[t._v("释放常驻内存的对象，可以通过delete操作来删除引用关系。或是重新赋值，让旧的对象脱离引用关系")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hallo world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可能会干扰v8的优化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或重新赋值")]),t._v("\nglobal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or null 推荐")]),t._v("\n")])])]),a("h4",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("ul",[a("li",[t._v("实现外部作用域访问问内部作用域中变量的方法叫"),a("code",[t._v("闭包")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" local "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'局部变量'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" local\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("一旦有变量引用这个中间函数，中间函数将不会得到释放，同时也会使原始的作用域不会得到释放，作用域中产生的内存占用也不会得到释放。")])]),t._v(" "),a("h4",{attrs:{id:"查看系统内存占用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看系统内存占用"}},[t._v("#")]),t._v(" 查看系统内存占用")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("os.totalmem()")]),t._v(" --- 系统总内存 （kb）")]),t._v(" "),a("li",[a("code",[t._v("os.freemem()")]),t._v(" --- 闲置内存 (kb)")])]),t._v(" "),a("h4",{attrs:{id:"内存泄漏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏"}},[t._v("#")]),t._v(" 内存泄漏")]),t._v(" "),a("ul",[a("li",[t._v("缓存")]),t._v(" "),a("li",[t._v("队列消息不及时")]),t._v(" "),a("li",[t._v("作用域未释放")])])])}],!1,null,null,null);s.default=e.exports}}]);