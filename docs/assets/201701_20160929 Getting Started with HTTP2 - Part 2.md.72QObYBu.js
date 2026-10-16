import{_ as l,a0 as i,w as o,s as r,I as a,x as n,a1 as t,A as e,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"初识 HTTP/2（二） | LCTT x X-CMD","titleTemplate":false,"description":"初识 HTTP/2（二） | LCTT (201701) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"初识 HTTP/2（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"初识 HTTP/2（二） | LCTT (201701) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201701/20160929 Getting Started with HTTP2 - Part 2","title":"初识 HTTP/2（二）","tag":"201701","desc":""},"relativePath":"201701/20160929 Getting Started with HTTP2 - Part 2.md","filePath":"[post].md"}'),u={name:"201701/20160929 Getting Started with HTTP2 - Part 2.md"};function d(h,s,g,b,m,T){const p=i("Link");return o(),r("div",null,[s[19]||(s[19]=a("h1",{id:"初识-http-2-二",tabindex:"-1"},[n("初识 HTTP/2（二） "),a("a",{class:"header-anchor",href:"#初识-http-2-二","aria-label":"Permalink to “初识 HTTP/2（二）”"},"​")],-1)),s[20]||(s[20]=a("p",null,[a("img",{src:"https://static.viget.com/_284x284_crop_center-center/ben-t-http-blog-thumb-01_360.png?mtime=20160928234634",alt:""})],-1)),s[21]||(s[21]=a("blockquote",null,[a("p",null,"HTTP/2 时代的开启为前端开发带来了最佳体验。")],-1)),s[22]||(s[22]=a("p",null,"如果你对 HTTP/2 有所了解，那你可能用过它，或者至少想过怎样能把它融入你的项目中。尽管有很多关于它如何改变工作流程，提高 Web 速度和效率等方面的猜想，但最佳使用方式还没有定下来。这里我想讲的就是我在之前的项目中所发现的 HTTP/2 的最佳实践。",-1)),a("p",null,[s[1]||(s[1]=n("如果你还不确定什么是 HTTP/2，或者为什么它能改进你的工作，可以先看看我",-1)),t(p,{href:"https://linux.cn/article-8111-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("介绍背景方面的第一篇文章",-1)])]),_:1}),s[2]||(s[2]=n("。",-1))]),a("p",null,[s[4]||(s[4]=n("记住：开始之前，我要告诉你，尽管你的浏览器可能支持 HTTP/2，但你的服务器可能不支持。检查你的主机托管服务，看看他们是否提供 HTTP/2 的支持。否则你可能要建立你自己的服务器。这篇文章并不会涉及这方面该如何做，但你可以查看 ",-1)),t(p,{href:"https://github.com/http2/http2-spec/wiki/Tools"},{default:e(()=>[...s[3]||(s[3]=[n("http2 github",-1)])]),_:1}),s[5]||(s[5]=n(" 页面，找一找这方面的工具。",-1))]),s[23]||(s[23]=c(`<h3 id="🙏-热身工作" tabindex="-1">🙏 [热身工作] <a class="header-anchor" href="#🙏-热身工作" aria-label="Permalink to “🙏 [热身工作]”">​</a></h3><p>首先组织好你的文件。看一看下面的文件树结构，作为组织你的样式表的起点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/styles</span></span>
<span class="line"><span>|── /setup</span></span>
<span class="line"><span>|     /* 变量、混入（minin）和函数 */</span></span>
<span class="line"><span>|── /global</span></span>
<span class="line"><span>|     /* 能放在任何组件和部分中的可重用组件 */</span></span>
<span class="line"><span>|── /components</span></span>
<span class="line"><span>|     /* 特殊组件和部分 */</span></span>
<span class="line"><span>|── setup.scss // setup 样式索引</span></span>
<span class="line"><span>|── global.scss // 全局样式索引</span></span></code></pre></div><p>这会把你的样式分到三个目录下面：<code>setup</code>、<code>global</code> 和 <code>componenets</code>。接下来我会说明这些目录对你的项目有什么用。</p><h3 id="setup-目录" tabindex="-1">setup 目录 <a class="header-anchor" href="#setup-目录" aria-label="Permalink to “setup 目录”">​</a></h3><p><code>setup</code> 目录保存所有的变量、函数、混入（minin）以及一些正常编译需要的其它文件的定义。要想让这个目录物尽其用，把这个目录下所有内容导入到 <code>setup.scss</code> 文件中是个很不错的主意，这样这个文件就会像下面所展示的一样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* setup.scss */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 变量 */</span></span>
<span class="line"><span>@import &quot;setup/variables/colors&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 混入 */</span></span>
<span class="line"><span>@import &quot;setup/mixins/color&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 函数 */</span></span>
<span class="line"><span>@import &quot;setup/functions/color&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>... 等等</span></span></code></pre></div><p>现在我们能快速引用这个站点中的所有定义，应该确保在所有的样式文件顶部包含我们这里创建的这个文件。</p><h3 id="global-目录" tabindex="-1">global 目录 <a class="header-anchor" href="#global-目录" aria-label="Permalink to “global 目录”">​</a></h3><p>接下来的目录，global 目录，应该包含可在当前站点的多个部分或者每一个页面中重复使用的组件。像按钮、文本、主要样式，以及你的浏览器默认设置应该放在这里。我不建议把页面的头部或底部样式放在这儿，因为某些项目中没有头部，或者不同页面头部不同。而且，底部永远是页面的最后一个元素，所以在用户加载完当前站点的其它东西前，不必过分优先考虑加载底部样式。</p><p>记住，如果没有那些定义在 setup 目录下的东西，你的 global 样式就可能没有作用，你的 global 文件看起来应该像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* global.scss */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 应用定义 */</span></span>
<span class="line"><span>@import &quot;setup&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 全局样式 */</span></span>
<span class="line"><span>@import &quot;global/reset&quot;;</span></span>
<span class="line"><span>@import &quot;global/buttons&quot;;</span></span>
<span class="line"><span>@import &quot;global/typography&quot;;</span></span>
<span class="line"><span>@import &quot;global/grid&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>... 等等</span></span></code></pre></div><p>注意，首先要做的就是导入 setup 样式。这样的话，之后的文件都可以引用这个样式里的定义。</p><p>由于站点内的每个页面都需要 global 样式，我们可以用典型的方式，在 <code>&lt;head&gt;</code> 标签内用一个 <code>&lt;link&gt;</code> 标签来加载它们。你所看到的将是一个十分小巧的 css 文件，或者说理论上小巧的，这取决于你需要多少全局样式。</p><h3 id="最后-你的组件" tabindex="-1">最后，你的组件 <a class="header-anchor" href="#最后-你的组件" aria-label="Permalink to “最后，你的组件”">​</a></h3><p>注意，我没有在上述目录树中的 components 目录里包含索引文件。这是 HTTP/2 所带来的效用。直到现在，我们已经按照标准步骤构建了一个典型的站点，保持相当简单的结构，仅选择全局化那些最重要的样式。组件充当它们自己的索引文件。</p><p>大多数开发者有独特的组织组件的方式，因此我并不想影响你的策略。但是，你所有的组件看起来应该像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* header.scss */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 应用定义 */</span></span>
<span class="line"><span>@import &quot;../setup&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>header {</span></span>
<span class="line"><span>  // 样式</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>... 等等</span></span></code></pre></div><p>同样的，你要把 setup 样式包含进来，确保所有东西在编译时都定义过。除了编译这些文件，以及可能要把他们放到 <code>/assets</code> 目录，以便很容易找到模版，对这些文件你不必 <ruby>拼接<rt>concatenate</rt></ruby>、<ruby>压缩<rt>minify</rt></ruby> 它们或者改变什么。</p><p>现在样式表已经差不多了，构建站点应该很简单。</p><h3 id="构建组件" tabindex="-1">构建组件 <a class="header-anchor" href="#构建组件" aria-label="Permalink to “构建组件”">​</a></h3><p>或许对于模板语言你有自己的选择，这取决于你的项目，有可能是 Twig、Rails、Jade 或者 Handlebars。我认为考虑组件最好的方式是它是否有自己的模版文件，它该有个与名字相应的样式。这样你的项目中，模版和样式的比例就会是个不错的 1:1 的比例，而且你知道哪个文件有哪些东西，哪里有哪个文件，因为它们的命名是有规律的。</p><p>现在它正步入正轨，用好 HTTP/2 的多种功能十分简单，让我们做一个模版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{# header.html #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{# compiled header styles #}</span></span>
<span class="line"><span>&lt;link href=&quot;assets/components/header.css&quot; rel=&quot;stylesheet&quot; media=&quot;all&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;header&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;This Awesome HTTP/2 Site&lt;/h1&gt;</span></span>
<span class="line"><span>  ... 等等</span></span></code></pre></div><p>非常好！在模版里你可能有更简单的方式链接到资源，但这里显示你所要做的仅是在开始构建时，在模版文件中链接一个小小的头部样式。这将允许你的站点仅仅加载特定资源到任意给定页面的组件中，而且，能够设定页面从头到脚的组件的优先级。</p><h3 id="结合在一起" tabindex="-1">结合在一起 <a class="header-anchor" href="#结合在一起" aria-label="Permalink to “结合在一起”">​</a></h3><p>现在所有的组件都有结构，浏览器将会类似以下方式来渲染它们：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; media=&quot;all&quot; href=&quot;/assets/global.css&quot;&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; media=&quot;all&quot; href=&quot;/assets/components/header.css&quot;&gt;</span></span>
<span class="line"><span>    &lt;header&gt;</span></span>
<span class="line"><span>      ... etc</span></span>
<span class="line"><span>    &lt;/header&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; media=&quot;all&quot; href=&quot;/assets/components/title.css&quot;&gt;</span></span>
<span class="line"><span>    &lt;section class=&quot;title&quot;&gt;</span></span>
<span class="line"><span>      ... etc</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; media=&quot;all&quot; href=&quot;/assets/components/image-component.css&quot;&gt;</span></span>
<span class="line"><span>    &lt;section class=&quot;image-component&quot;&gt;</span></span>
<span class="line"><span>      ... etc</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; media=&quot;all&quot; href=&quot;/assets/components/text-component.css&quot;&gt;</span></span>
<span class="line"><span>    &lt;section class=&quot;text-component&quot;&gt;</span></span>
<span class="line"><span>      ... etc</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;link rel=&quot;stylesheet&quot; media=&quot;all&quot; href=&quot;/assets/components/footer.css&quot;&gt;</span></span>
<span class="line"><span>    &lt;footer&gt;</span></span>
<span class="line"><span>      ... etc</span></span>
<span class="line"><span>    &lt;/footer&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>这是一个高级别方法，但你的项目中可能有调整的更细致的组件。例如，在头部的 <code>&lt;nav&gt;</code> 组件可能要加载自己的样式表。尽你所能地自由发挥，让组件更有作用 - HTTP/2 不会因这些需求而阻碍你！</p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>这只是一个关于如何在前端用 HTTP/2 构建项目的基本介绍，仅是皮毛而已。你可能注意到我上面所用的方法有的还有改进的空间。请不吝赐教！正如我在第一篇文章中所说的，HTTP/2 可能颠覆自 HTTP/1 以来我们所熟知的某些标准，所以要慎重思考和实践，以便高效使用 HTTP/2 的开发环境。</p><hr>`,32)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),t(p,{href:"https://www.viget.com/articles/getting-started-with-http-2-part-2"},{default:e(()=>[...s[6]||(s[6]=[n("https://www.viget.com/articles/getting-started-with-http-2-part-2",-1)])]),_:1})]),a("p",null,[s[11]||(s[11]=n("作者：",-1)),t(p,{href:"https://www.viget.com/about/team/btinsley"},{default:e(()=>[...s[8]||(s[8]=[n("Ben",-1)])]),_:1}),s[12]||(s[12]=n(" 译者：",-1)),t(p,{href:"https://github.com/GitFuture"},{default:e(()=>[...s[9]||(s[9]=[n("GitFuture",-1)])]),_:1}),s[13]||(s[13]=n(" 校对：",-1)),t(p,{href:"https://github.com/jasminepeng"},{default:e(()=>[...s[10]||(s[10]=[n("jasminepeng",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 组织编译，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[15]||(s[15]=[n("Linux中国",-1)])]),_:1}),s[18]||(s[18]=n(" 荣誉推出",-1))])])}const P=l(u,[["render",d]]);export{f as __pageData,P as default};
