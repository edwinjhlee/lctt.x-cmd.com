import{_ as l,a0 as i,w as o,s as r,I as a,x as n,a1 as t,A as e,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"初識 HTTP/2（二） | LCTT x X-CMD","titleTemplate":false,"description":"初識 HTTP/2（二） | LCTT (201701) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"初識 HTTP/2（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"初識 HTTP/2（二） | LCTT (201701) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201701/20160929 Getting Started with HTTP2 - Part 2","title":"初識 HTTP/2（二）","tag":"201701","desc":""},"relativePath":"201701/20160929 Getting Started with HTTP2 - Part 2.md","filePath":"[post].md"}'),u={name:"201701/20160929 Getting Started with HTTP2 - Part 2.md"};function d(h,s,g,b,m,T){const p=i("Link");return o(),r("div",null,[s[19]||(s[19]=a("h1",{id:"初識-http-2-二",tabindex:"-1"},[n("初識 HTTP/2（二） "),a("a",{class:"header-anchor",href:"#初識-http-2-二","aria-label":"Permalink to “初識 HTTP/2（二）”"},"​")],-1)),s[20]||(s[20]=a("p",null,[a("img",{src:"https://static.viget.com/_284x284_crop_center-center/ben-t-http-blog-thumb-01_360.png?mtime=20160928234634",alt:""})],-1)),s[21]||(s[21]=a("blockquote",null,[a("p",null,"HTTP/2 時代的開啓為前端開發帶來了最佳體驗。")],-1)),s[22]||(s[22]=a("p",null,"如果你對 HTTP/2 有所瞭解，那你可能用過它，或者至少想過怎樣能把它融入你的項目中。儘管有很多關於它如何改變工作流程，提高 Web 速度和效率等方面的猜想，但最佳使用方式還沒有定下來。這裏我想講的就是我在之前的項目中所發現的 HTTP/2 的最佳實踐。",-1)),a("p",null,[s[1]||(s[1]=n("如果你還不確定什麼是 HTTP/2，或者為什麼它能改進你的工作，可以先看看我",-1)),t(p,{href:"https://linux.cn/article-8111-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("介紹背景方面的第一篇文章",-1)])]),_:1}),s[2]||(s[2]=n("。",-1))]),a("p",null,[s[4]||(s[4]=n("記住：開始之前，我要告訴你，儘管你的瀏覽器可能支持 HTTP/2，但你的服務器可能不支持。檢查你的主機託管服務，看看他們是否提供 HTTP/2 的支持。否則你可能要建立你自己的服務器。這篇文章並不會涉及這方面該如何做，但你可以查看 ",-1)),t(p,{href:"https://github.com/http2/http2-spec/wiki/Tools"},{default:e(()=>[...s[3]||(s[3]=[n("http2 github",-1)])]),_:1}),s[5]||(s[5]=n(" 頁面，找一找這方面的工具。",-1))]),s[23]||(s[23]=c(`<h3 id="🙏-熱身工作" tabindex="-1">🙏 [熱身工作] <a class="header-anchor" href="#🙏-熱身工作" aria-label="Permalink to “🙏 [熱身工作]”">​</a></h3><p>首先組織好你的文件。看一看下面的文件樹結構，作為組織你的樣式表的起點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/styles</span></span>
<span class="line"><span>|── /setup</span></span>
<span class="line"><span>|     /* 變量、混入（minin）和函數 */</span></span>
<span class="line"><span>|── /global</span></span>
<span class="line"><span>|     /* 能放在任何組件和部分中的可重用組件 */</span></span>
<span class="line"><span>|── /components</span></span>
<span class="line"><span>|     /* 特殊組件和部分 */</span></span>
<span class="line"><span>|── setup.scss // setup 樣式索引</span></span>
<span class="line"><span>|── global.scss // 全局樣式索引</span></span></code></pre></div><p>這會把你的樣式分到三個目錄下面：<code>setup</code>、<code>global</code> 和 <code>componenets</code>。接下來我會説明這些目錄對你的項目有什麼用。</p><h3 id="setup-目錄" tabindex="-1">setup 目錄 <a class="header-anchor" href="#setup-目錄" aria-label="Permalink to “setup 目錄”">​</a></h3><p><code>setup</code> 目錄保存所有的變量、函數、混入（minin）以及一些正常編譯需要的其它文件的定義。要想讓這個目錄物盡其用，把這個目錄下所有內容導入到 <code>setup.scss</code> 文件中是個很不錯的主意，這樣這個文件就會像下面所展示的一樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* setup.scss */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 變量 */</span></span>
<span class="line"><span>@import &quot;setup/variables/colors&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 混入 */</span></span>
<span class="line"><span>@import &quot;setup/mixins/color&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 函數 */</span></span>
<span class="line"><span>@import &quot;setup/functions/color&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>... 等等</span></span></code></pre></div><p>現在我們能快速引用這個站點中的所有定義，應該確保在所有的樣式文件頂部包含我們這裏創建的這個文件。</p><h3 id="global-目錄" tabindex="-1">global 目錄 <a class="header-anchor" href="#global-目錄" aria-label="Permalink to “global 目錄”">​</a></h3><p>接下來的目錄，global 目錄，應該包含可在當前站點的多個部分或者每一個頁面中重複使用的組件。像按鈕、文本、主要樣式，以及你的瀏覽器默認設置應該放在這裏。我不建議把頁面的頭部或底部樣式放在這兒，因為某些項目中沒有頭部，或者不同頁面頭部不同。而且，底部永遠是頁面的最後一個元素，所以在用户加載完當前站點的其它東西前，不必過分優先考慮加載底部樣式。</p><p>記住，如果沒有那些定義在 setup 目錄下的東西，你的 global 樣式就可能沒有作用，你的 global 文件看起來應該像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* global.scss */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 應用定義 */</span></span>
<span class="line"><span>@import &quot;setup&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 全局樣式 */</span></span>
<span class="line"><span>@import &quot;global/reset&quot;;</span></span>
<span class="line"><span>@import &quot;global/buttons&quot;;</span></span>
<span class="line"><span>@import &quot;global/typography&quot;;</span></span>
<span class="line"><span>@import &quot;global/grid&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>... 等等</span></span></code></pre></div><p>注意，首先要做的就是導入 setup 樣式。這樣的話，之後的文件都可以引用這個樣式裏的定義。</p><p>由於站點內的每個頁面都需要 global 樣式，我們可以用典型的方式，在 <code>&lt;head&gt;</code> 標籤內用一個 <code>&lt;link&gt;</code> 標籤來加載它們。你所看到的將是一個十分小巧的 css 文件，或者説理論上小巧的，這取決於你需要多少全局樣式。</p><h3 id="最後-你的組件" tabindex="-1">最後，你的組件 <a class="header-anchor" href="#最後-你的組件" aria-label="Permalink to “最後，你的組件”">​</a></h3><p>注意，我沒有在上述目錄樹中的 components 目錄裏包含索引文件。這是 HTTP/2 所帶來的效用。直到現在，我們已經按照標準步驟構建了一個典型的站點，保持相當簡單的結構，僅選擇全局化那些最重要的樣式。組件充當它們自己的索引文件。</p><p>大多數開發者有獨特的組織組件的方式，因此我並不想影響你的策略。但是，你所有的組件看起來應該像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* header.scss */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 應用定義 */</span></span>
<span class="line"><span>@import &quot;../setup&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>header {</span></span>
<span class="line"><span>  // 樣式</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>... 等等</span></span></code></pre></div><p>同樣的，你要把 setup 樣式包含進來，確保所有東西在編譯時都定義過。除了編譯這些文件，以及可能要把他們放到 <code>/assets</code> 目錄，以便很容易找到模版，對這些文件你不必 <ruby>拼接<rt>concatenate</rt></ruby>、<ruby>壓縮<rt>minify</rt></ruby> 它們或者改變什麼。</p><p>現在樣式表已經差不多了，構建站點應該很簡單。</p><h3 id="構建組件" tabindex="-1">構建組件 <a class="header-anchor" href="#構建組件" aria-label="Permalink to “構建組件”">​</a></h3><p>或許對於模板語言你有自己的選擇，這取決於你的項目，有可能是 Twig、Rails、Jade 或者 Handlebars。我認為考慮組件最好的方式是它是否有自己的模版文件，它該有個與名字相應的樣式。這樣你的項目中，模版和樣式的比例就會是個不錯的 1:1 的比例，而且你知道哪個文件有哪些東西，哪裏有哪個文件，因為它們的命名是有規律的。</p><p>現在它正步入正軌，用好 HTTP/2 的多種功能十分簡單，讓我們做一個模版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{# header.html #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{# compiled header styles #}</span></span>
<span class="line"><span>&lt;link href=&quot;assets/components/header.css&quot; rel=&quot;stylesheet&quot; media=&quot;all&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;header&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;This Awesome HTTP/2 Site&lt;/h1&gt;</span></span>
<span class="line"><span>  ... 等等</span></span></code></pre></div><p>非常好！在模版裏你可能有更簡單的方式鏈接到資源，但這裏顯示你所要做的僅是在開始構建時，在模版文件中鏈接一個小小的頭部樣式。這將允許你的站點僅僅加載特定資源到任意給定頁面的組件中，而且，能夠設定頁面從頭到腳的組件的優先級。</p><h3 id="結合在一起" tabindex="-1">結合在一起 <a class="header-anchor" href="#結合在一起" aria-label="Permalink to “結合在一起”">​</a></h3><p>現在所有的組件都有結構，瀏覽器將會類似以下方式來渲染它們：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
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
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>這是一個高級別方法，但你的項目中可能有調整的更細緻的組件。例如，在頭部的 <code>&lt;nav&gt;</code> 組件可能要加載自己的樣式表。盡你所能地自由發揮，讓組件更有作用 - HTTP/2 不會因這些需求而阻礙你！</p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>這只是一個關於如何在前端用 HTTP/2 構建項目的基本介紹，僅是皮毛而已。你可能注意到我上面所用的方法有的還有改進的空間。請不吝賜教！正如我在第一篇文章中所説的，HTTP/2 可能顛覆自 HTTP/1 以來我們所熟知的某些標準，所以要慎重思考和實踐，以便高效使用 HTTP/2 的開發環境。</p><hr>`,32)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),t(p,{href:"https://www.viget.com/articles/getting-started-with-http-2-part-2"},{default:e(()=>[...s[6]||(s[6]=[n("https://www.viget.com/articles/getting-started-with-http-2-part-2",-1)])]),_:1})]),a("p",null,[s[11]||(s[11]=n("作者：",-1)),t(p,{href:"https://www.viget.com/about/team/btinsley"},{default:e(()=>[...s[8]||(s[8]=[n("Ben",-1)])]),_:1}),s[12]||(s[12]=n(" 譯者：",-1)),t(p,{href:"https://github.com/GitFuture"},{default:e(()=>[...s[9]||(s[9]=[n("GitFuture",-1)])]),_:1}),s[13]||(s[13]=n(" 校對：",-1)),t(p,{href:"https://github.com/jasminepeng"},{default:e(()=>[...s[10]||(s[10]=[n("jasminepeng",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 組織編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[15]||(s[15]=[n("Linux中國",-1)])]),_:1}),s[18]||(s[18]=n(" 榮譽推出",-1))])])}const P=l(u,[["render",d]]);export{f as __pageData,P as default};
