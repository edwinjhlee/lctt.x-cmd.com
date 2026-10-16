import{_ as t,a0 as o,w as r,s as g,I as a,x as s,a1 as l,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const G=JSON.parse('{"title":"OpenGL 與 Go 教程（一）Hello, OpenGL | LCTT x X-CMD","titleTemplate":false,"description":"OpenGL 與 Go 教程（一）Hello, OpenGL | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"OpenGL 與 Go 教程（一）Hello, OpenGL | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"OpenGL 與 Go 教程（一）Hello, OpenGL | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170312 OpenGL  Go Tutorial Part 1","title":"OpenGL 與 Go 教程（一）Hello, OpenGL","tag":"201710","desc":""},"relativePath":"201710/20170312 OpenGL  Go Tutorial Part 1.md","filePath":"[post].md"}'),d={name:"201710/20170312 OpenGL  Go Tutorial Part 1.md"};function c(u,n,f,w,h,b){const p=o("Link");return r(),g("div",null,[n[83]||(n[83]=a("h1",{id:"opengl-與-go-教程-一-hello-opengl",tabindex:"-1"},[s("OpenGL 與 Go 教程（一）Hello, OpenGL "),a("a",{class:"header-anchor",href:"#opengl-與-go-教程-一-hello-opengl","aria-label":"Permalink to “OpenGL 與 Go 教程（一）Hello, OpenGL”"},"​")],-1)),a("ul",null,[a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-1-hello-opengl"},{default:e(()=>[...n[0]||(n[0]=[s("第一節： Hello, OpenGL",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board"},{default:e(()=>[...n[1]||(n[1]=[s("第二節： 繪製遊戲面板",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...n[2]||(n[2]=[s("第三節： 實現遊戲功能",-1)])]),_:1})])]),a("p",null,[n[4]||(n[4]=s("這篇教程的所有源代碼都可以在 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[3]||(n[3]=[s("GitHub",-1)])]),_:1}),n[5]||(n[5]=s(" 上找到。",-1))]),n[84]||(n[84]=a("h3",{id:"介紹",tabindex:"-1"},[s("介紹 "),a("a",{class:"header-anchor",href:"#介紹","aria-label":"Permalink to “介紹”"},"​")],-1)),a("p",null,[l(p,{href:"https://www.opengl.org/"},{default:e(()=>[...n[6]||(n[6]=[s("OpenGL",-1)])]),_:1}),n[7]||(n[7]=s(" 是一門相當好的技術，適用於從桌面的 GUI 到遊戲，到移動應用甚至 web 應用的多種類型的繪圖工作。我敢保證，你今天看到的圖形有些就是用 OpenGL 渲染的。可是，不管 OpenGL 多受歡迎、有多好用，與學習其它高級繪圖庫相比，學習 OpenGL 是要相當足夠的決心的。",-1))]),a("p",null,[n[10]||(n[10]=s("這個教程的目的是給你一個切入點，讓你對 OpenGL 有個基本的瞭解，然後教你怎麼用 ",-1)),l(p,{href:"https://golang.org/"},{default:e(()=>[...n[8]||(n[8]=[s("Go",-1)])]),_:1}),n[11]||(n[11]=s(" 操作它。幾乎每種編程語言都有綁定 OpenGL 的庫，Go 也不例外，它有 ",-1)),l(p,{href:"https://github.com/go-gl/gl"},{default:e(()=>[...n[9]||(n[9]=[s("go-gl",-1)])]),_:1}),n[12]||(n[12]=s(" 這個包。這是一個完整的套件，可以綁定 OpenGL ，適用於多種版本的 OpenGL。",-1))]),a("p",null,[n[15]||(n[15]=s("這篇教程會按照下面列出的幾個階段進行介紹，我們最終的目標是用 OpenGL 在桌面窗口繪製遊戲面板，進而實現",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Conway's_Game_of_Life"},{default:e(()=>[...n[13]||(n[13]=[s("康威生命遊戲",-1)])]),_:1}),n[16]||(n[16]=s("。完整的源代碼可以在 GitHub ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[14]||(n[14]=[s("github.com/KyleBanks/conways-gol",-1)])]),_:1}),n[17]||(n[17]=s(" 上獲得，當你有疑惑的時候可以隨時查看源代碼，或者你要按照自己的方式學習也可以參考這個代碼。",-1))]),a("p",null,[n[19]||(n[19]=s("在我們開始之前，我們要先弄明白",-1)),n[20]||(n[20]=a("ruby",null,[s("康威生命遊戲"),a("rt",null,"Conway's Game of Life")],-1)),n[21]||(n[21]=s(" 到底是什麼。這裏是 ",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Conway's_Game_of_Life"},{default:e(()=>[...n[18]||(n[18]=[s("Wikipedia",-1)])]),_:1}),n[22]||(n[22]=s(" 上面的總結：",-1))]),n[85]||(n[85]=i('<blockquote><p>《生命遊戲》，也可以簡稱為 Life，是一個細胞自動變化的過程，由英國數學家 John Horton Conway 於 1970 年提出。</p><p>這個“遊戲”沒有玩家，也就是説它的發展依靠的是它的初始狀態，不需要輸入。用户通過創建初始配置文件、觀察它如何演變，或者對於高級“玩家”可以創建特殊屬性的模式，進而與《生命遊戲》進行交互。</p><p><code>規則</code></p><p>《生命遊戲》的世界是一個無窮多的二維正交的正方形細胞的格子世界，每一個格子都有兩種可能的狀態，“存活”或者“死亡”，也可以説是“填充態”或“未填充態”（區別可能很小，可以把它看作一個模擬人類/哺乳動物行為的早期模型，這要看一個人是如何看待方格里的空白）。每一個細胞與它周圍的八個細胞相關聯，這八個細胞分別是水平、垂直、斜對角相接的。在遊戲中的每一步，下列事情中的一件將會發生：</p><ol><li>當任何一個存活的細胞的附近少於 2 個存活的細胞時，該細胞將會消亡，就像人口過少所導致的結果一樣</li><li>當任何一個存活的細胞的附近有 2 至 3 個存活的細胞時，該細胞在下一代中仍然存活。</li><li>當任何一個存活的細胞的附近多於 3 個存活的細胞時，該細胞將會消亡，就像人口過多所導致的結果一樣</li><li>任何一個消亡的細胞附近剛好有 3 個存活的細胞，該細胞會變為存活的狀態，就像重生一樣。</li></ol></blockquote><p>不需要其他工具，這裏有一個我們將會製作的演示程序：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-1.gif" alt="Conway&#39;s Game of Life - 示例遊戲"></p><p>在我們的運行過程中，白色的細胞表示它是存活着的，黑色的細胞表示它已經死亡。</p><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to “概述”">​</a></h3><p>本教程將會涉及到很多基礎內容，從最基本的開始，但是你還是要對 Go 由一些最基本的瞭解 —— 至少你應該知道變量、切片、函數和結構體，並且裝了一個 Go 的運行環境。我寫這篇教程用的 Go 版本是 1.8，但它應該與之前的版本兼容。這裏用 Go 語言實現沒有什麼特別新奇的東西，因此只要你有過類似的編程經歷就行。</p><p>這裏是我們在這個教程裏將會講到的東西：</p>',7)),a("ul",null,[a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-1-hello-opengl"},{default:e(()=>[...n[23]||(n[23]=[s("第一節: Hello, OpenGL",-1)])]),_:1}),n[25]||(n[25]=s("： 安裝 OpenGL 和 ",-1)),l(p,{href:"http://www.glfw.org/"},{default:e(()=>[...n[24]||(n[24]=[s("GLFW",-1)])]),_:1}),n[26]||(n[26]=s("，在窗口上繪製一個三角形。",-1))]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board"},{default:e(()=>[...n[27]||(n[27]=[s("第二節: 繪製遊戲面板",-1)])]),_:1}),n[28]||(n[28]=s("： 用三角形拼成方形，在窗口上用方形繪成格子。",-1))]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...n[29]||(n[29]=[s("第三節: 實現遊戲功能",-1)])]),_:1}),n[30]||(n[30]=s("： 實現 Conway 遊戲",-1))])]),a("p",null,[n[32]||(n[32]=s("最後的源代碼可以在 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[31]||(n[31]=[s("GitHub",-1)])]),_:1}),n[33]||(n[33]=s(" 上獲得，每一節的末尾有個_回顧_，包含該節相關的代碼。如果有什麼不清楚的地方或者是你感到疑惑的，看看每一節末尾的完整代碼。",-1))]),n[86]||(n[86]=a("p",null,"現在就開始吧！",-1)),n[87]||(n[87]=a("h3",{id:"安裝-opengl-和-glfw",tabindex:"-1"},[s("安裝 OpenGL 和 GLFW "),a("a",{class:"header-anchor",href:"#安裝-opengl-和-glfw","aria-label":"Permalink to “安裝 OpenGL 和 GLFW”"},"​")],-1)),a("p",null,[n[36]||(n[36]=s("我們介紹過 OpenGL，但是為了使用它，我們要有個窗口可以繪製東西。 ",-1)),l(p,{href:"http://www.glfw.org/"},{default:e(()=>[...n[34]||(n[34]=[s("GLFW",-1)])]),_:1}),n[37]||(n[37]=s(" 是一款用於 OpenGL 的跨平台 API，允許我們創建並使用窗口，而且它也是 ",-1)),l(p,{href:"https://github.com/go-gl/glfw"},{default:e(()=>[...n[35]||(n[35]=[s("go-gl",-1)])]),_:1}),n[38]||(n[38]=s(" 套件中提供的。",-1))]),n[88]||(n[88]=i(`<p>我們要做的第一件事就是確定 OpenGL 的版本。為了方便本教程，我們將會使用 <code>OpenGL v4.1</code>，但要是你的操作系統不支持最新的 OpenGL，你也可以用 <code>v2.1</code>。要安裝 OpenGL，我們需要做這些事：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 對於 OpenGL 4.1</span></span>
<span class="line"><span>$ go get github.com/go-gl/gl/v4.1-core/gl</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或者 2.1</span></span>
<span class="line"><span>$ go get github.com/go-gl/gl/v2.1/gl</span></span></code></pre></div><p>然後是安裝 GLFW：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go get github.com/go-gl/glfw/v3.2/glfw</span></span></code></pre></div><p>安裝好這兩個包之後，我們就可以開始了！先創建 <code>main.go</code> 文件，導入相應的包（我們待會兒會用到的其它東西）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;log&quot;</span></span>
<span class="line"><span>    &quot;runtime&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;github.com/go-gl/gl/v4.1-core/gl&quot;</span><span> // OR: github.com/go-gl/gl/v2.1/gl</span></span>
<span class="line"><span>    &quot;github.com/go-gl/glfw/v3.2/glfw&quot;</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>接下來定義一個叫做 <code>main</code> 的函數，這是用來初始化 OpenGL 以及 GLFW，並顯示窗口的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const (</span></span>
<span class="line"><span>    width  = 500</span></span>
<span class="line"><span>    height = 500</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    runtime.LockOSThread()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    window := initGlfw()</span></span>
<span class="line"><span>    defer glfw.Terminate()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for !window.ShouldClose() {</span></span>
<span class="line"><span>        // TODO</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// initGlfw 初始化 glfw 並且返回一個可用的窗口。</span></span>
<span class="line"><span>func initGlfw() *glfw.Window {</span></span>
<span class="line"><span>    if err := glfw.Init(); err != nil {</span></span>
<span class="line"><span>            panic(err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    glfw.WindowHint(glfw.Resizable, glfw.False)</span></span>
<span class="line"><span>    glfw.WindowHint(glfw.ContextVersionMajor, 4) // OR 2</span></span>
<span class="line"><span>    glfw.WindowHint(glfw.ContextVersionMinor, 1)</span></span>
<span class="line"><span>    glfw.WindowHint(glfw.OpenGLProfile, glfw.OpenGLCoreProfile)</span></span>
<span class="line"><span>    glfw.WindowHint(glfw.OpenGLForwardCompatible, glfw.True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    window, err := glfw.CreateWindow(width, height, &quot;Conway&#39;s Game of Life&quot;, nil, nil)</span></span>
<span class="line"><span>    if err != nil {</span></span>
<span class="line"><span>            panic(err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    window.MakeContextCurrent()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return window</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>好了，讓我們花一分鐘來運行一下這個程序，看看會發生什麼。首先定義了一些常量， <code>width</code> 和 <code>height</code> —— 它們決定窗口的像素大小。</p><p>然後就是 <code>main</code> 函數。這裏我們使用了 <code>runtime</code> 包的 <code>LockOSThread()</code>，這能確保我們總是在操作系統的同一個線程中運行代碼，這對 GLFW 來説很重要，GLFW 需要在其被初始化之後的線程裏被調用。講完這個，接下來我們調用 <code>initGlfw</code> 來獲得一個窗口的引用，並且推遲（<code>defer</code>）其終止。窗口的引用會被用在一個 <code>for</code> 循環中，只要窗口處於打開的狀態，就執行某些事情。我們待會兒會講要做的事情是什麼。</p><p><code>initGlfw</code> 是另一個函數，這裏我們調用 <code>glfw.Init()</code> 來初始化 GLFW 包。然後我們定義了 GLFW 的一些全局屬性，包括禁用調整窗口大小和改變 OpenGL 的屬性。然後創建了 <code>glfw.Window</code>，這會在稍後的繪圖中用到。我們僅僅告訴它我們想要的寬度和高度，以及標題，然後調用 <code>window.MakeContextCurrent</code>，將窗口綁定到當前的線程中。最後就是返回窗口的引用了。</p><p>如果你現在就構建、運行這個程序，你看不到任何東西。很合理，因為我們還沒有用這個窗口做什麼實質性的事。</p><p>定義一個新函數，初始化 OpenGL，就可以解決這個問題：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// initOpenGL 初始化 OpenGL 並且返回一個初始化了的程序。</span></span>
<span class="line"><span>func initOpenGL() uint32 {</span></span>
<span class="line"><span>    if err := gl.Init(); err != nil {</span></span>
<span class="line"><span>            panic(err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    version := gl.GoStr(gl.GetString(gl.VERSION))</span></span>
<span class="line"><span>    log.Println(&quot;OpenGL version&quot;, version)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    prog := gl.CreateProgram()</span></span>
<span class="line"><span>    gl.LinkProgram(prog)</span></span>
<span class="line"><span>    return prog</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>initOpenGL</code> 就像之前的 <code>initGlfw</code> 函數一樣，初始化 OpenGL 庫，創建一個<ruby>程序<rt>program</rt></ruby>。“程序”是一個包含了<ruby>着色器<rt>shader</rt></ruby>的引用，稍後會用<ruby>着色器<rt>shader</rt></ruby>繪圖。待會兒會講這一點，現在只用知道 OpenGL 已經初始化完成了，我們有一個程序的引用。我們還打印了 OpenGL 的版本，可以用於之後的調試。</p><p>回到 <code>main</code> 函數里，調用這個新函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>    runtime.LockOSThread()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    window := initGlfw()</span></span>
<span class="line"><span>    defer glfw.Terminate()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    program := initOpenGL()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for !window.ShouldClose() {</span></span>
<span class="line"><span>        draw(window, program)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你應該注意到了現在我們有 <code>program</code> 的引用，在我們的窗口循環中，調用新的 <code>draw</code> 函數。最終這個函數會繪製出所有細胞，讓遊戲狀態變得可視化，但是現在它做的僅僅是清除窗口，所以我們只能看到一個全黑的屏幕：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func draw(window *glfw.Window, program uint32) {</span></span>
<span class="line"><span>    gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)</span></span>
<span class="line"><span>    gl.UseProgram(prog)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    glfw.PollEvents()</span></span>
<span class="line"><span>    window.SwapBuffers()</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,19)),a("p",null,[n[40]||(n[40]=s("我們首先做的是調用 ",-1)),n[41]||(n[41]=a("code",null,"gl.clear",-1)),n[42]||(n[42]=s(" 函數來清除上一幀在窗口中繪製的東西，給我們一個乾淨的面板。然後我們告訴 OpenGL 去使用我們的程序引用，這個引用還沒有做什麼事。最終我們告訴 GLFW 用 ",-1)),n[43]||(n[43]=a("code",null,"PollEvents",-1)),n[44]||(n[44]=s(" 去檢查是否有鼠標或者鍵盤事件（這一節裏還不會對這些事件進行處理），告訴窗口去交換緩衝區 ",-1)),n[45]||(n[45]=a("code",null,"SwapBuffers",-1)),n[46]||(n[46]=s("。 ",-1)),l(p,{href:"http://www.glfw.org/docs/latest/window_guide.html#buffer_swap"},{default:e(()=>[...n[39]||(n[39]=[s("交換緩衝區",-1)])]),_:1}),n[47]||(n[47]=s(" 很重要，因為 GLFW（像其他圖形庫一樣）使用雙緩衝，也就是説你繪製的所有東西實際上是繪製到一個不可見的畫布上，當你準備好進行展示的時候就把繪製的這些東西放到可見的畫布中 —— 這種情況下，就需要調用 ",-1)),n[48]||(n[48]=a("code",null,"SwapBuffers",-1)),n[49]||(n[49]=s(" 函數。",-1))]),n[89]||(n[89]=i(`<p>好了，到這裏我們已經講了很多東西，花一點時間看看我們的實驗成果。運行這個程序，你應該可以看到你所繪製的第一個東西：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-2.png" alt="Conway&#39;s Game of Life - 第一個窗口"></p><p>完美！</p><h3 id="在窗口裏繪製三角形" tabindex="-1">在窗口裏繪製三角形 <a class="header-anchor" href="#在窗口裏繪製三角形" aria-label="Permalink to “在窗口裏繪製三角形”">​</a></h3><p>我們已經完成了一些複雜的步驟，即使看起來不多，但我們仍然需要繪製一些東西。我們會以三角形繪製開始，可能這第一眼看上去要比我們最終要繪製的方形更難，但你會知道這樣的想法是錯的。你可能不知道的是三角形或許是繪製的圖形中最簡單的，實際上我們最終會用某種方式把三角形拼成方形。</p><p>好吧，那麼我們想要繪製一個三角形，怎麼做呢？我們通過定義圖形的頂點來繪製圖形，把它們交給 OpenGL 來進行繪製。先在 <code>main.go</code> 的頂部裏定義我們的三角形：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var (</span></span>
<span class="line"><span>    triangle = []float32{</span></span>
<span class="line"><span>        0, 0.5, 0, // top</span></span>
<span class="line"><span>        -0.5, -0.5, 0, // left</span></span>
<span class="line"><span>        0.5, -0.5, 0, // right</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>這看上去很奇怪，讓我們分開來看。首先我們用了一個 <code>float32</code> <ruby>切片<rt>slice</rt></ruby>，這是一種我們總會在向 OpenGL 傳遞頂點時用到的數據類型。這個切片包含 9 個值，每三個值構成三角形的一個點。第一行， <code>0, 0.5, 0</code> 表示的是 X、Y、Z 座標，是最上方的頂點，第二行是左邊的頂點，第三行是右邊的頂點。每一組的三個點都表示相對於窗口中心點的 X、Y、Z 座標，大小在 <code>-1</code> 和 <code>1</code> 之間。因此最上面的頂點 X 座標是 <code>0</code>，因為它在 X 方向上位於窗口中央，Y 座標是 <code>0.5</code> 意味着它會相對窗口中央上移 1/4 個單位（因為窗口的範圍是 <code>-1</code> 到 <code>1</code>），Z 座標是 0。因為我們只需要在二維空間中繪圖，所以 Z 值永遠是 <code>0</code>。現在看一看左右兩邊的頂點，看看你能不能理解為什麼它們是這樣定義的 —— 如果不能立刻就弄清楚也沒關係，我們將會在屏幕上去觀察它，因此我們需要一個完美的圖形來進行觀察。</p><p>好了，我們定義了一個三角形，但是現在我們得把它畫出來。要畫出這個三角形，我們需要一個叫做<ruby>頂點數組對象<rt>Vertex Array Object</rt></ruby>或者叫 vao 的東西，這是由一系列的點（也就是我們定義的三角形）創造的，這個東西可以提供給 OpenGL 來進行繪製。創建一個叫做 <code>makeVao</code> 的函數，然後我們可以提供一個點的切片，讓它返回一個指向 OpenGL 頂點數組對象的指針：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// makeVao 執行初始化並從提供的點裏面返回一個頂點數組</span></span>
<span class="line"><span>func makeVao(points []float32) uint32 {</span></span>
<span class="line"><span>    var vbo uint32</span></span>
<span class="line"><span>    gl.GenBuffers(1, &amp;vbo)</span></span>
<span class="line"><span>    gl.BindBuffer(gl.ARRAY_BUFFER, vbo)</span></span>
<span class="line"><span>    gl.BufferData(gl.ARRAY_BUFFER, 4*len(points), gl.Ptr(points), gl.STATIC_DRAW)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var vao uint32</span></span>
<span class="line"><span>    gl.GenVertexArrays(1, &amp;vao)</span></span>
<span class="line"><span>    gl.BindVertexArray(vao)</span></span>
<span class="line"><span>    gl.EnableVertexAttribArray(0)</span></span>
<span class="line"><span>    gl.BindBuffer(gl.ARRAY_BUFFER, vbo)</span></span>
<span class="line"><span>    gl.VertexAttribPointer(0, 3, gl.FLOAT, false, 0, nil)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return vao</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>首先我們創造了<ruby>頂點緩衝區對象<rt>Vertex Buffer Object</rt></ruby> 或者説 vbo 綁定到我們的 <code>vao</code> 上，<code>vbo</code> 是通過所佔空間（也就是 4 倍 <code>len(points)</code> 大小的空間）和一個指向頂點的指針（<code>gl.Ptr(points)</code>）來創建的。你也許會好奇為什麼它是 4 倍 —— 而不是 6 或者 3 或者 1078 呢？原因在於我們用的是 <code>float32</code> 切片，32 個位的浮點型變量是 4 個字節，因此我們説這個緩衝區以字節為單位的大小是點個數的 4 倍。</p><p>現在我們有緩衝區了，可以創建 <code>vao</code> 並用 <code>gl.BindBuffer</code> 把它綁定到緩衝區上，最後返回 <code>vao</code>。這個 <code>vao</code> 將會被用於繪製三角形！</p><p>回到 <code>main</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    vao := makeVao(triangle)</span></span>
<span class="line"><span>    for !window.ShouldClose() {</span></span>
<span class="line"><span>        draw(vao, window, program)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>這裏我們調用了 \`makeVao\` ，從我們之前定義的 \`triangle\` 頂點中獲得 \`vao\` 引用，將它作為一個新的參數傳遞給 \`draw\` 函數：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func draw(vao uint32, window *glfw.Window, program uint32) {</span></span>
<span class="line"><span>    gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)</span></span>
<span class="line"><span>    gl.UseProgram(program)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    gl.BindVertexArray(vao)</span></span>
<span class="line"><span>    gl.DrawArrays(gl.TRIANGLES, 0, int32(len(triangle) / 3))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    glfw.PollEvents()</span></span>
<span class="line"><span>    window.SwapBuffers()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然後我們把 OpenGL 綁定到 <code>vao</code> 上，這樣當我們告訴 OpenGL 三角形切片的頂點數（除以 3，是因為每一個點有 X、Y、Z 座標），讓它去 <code>DrawArrays</code> ，它就知道要畫多少個頂點了。</p><p>如果你這時候運行程序，你可能希望在窗口中央看到一個美麗的三角形，但是不幸的是你還看不到。還有一件事情沒做，我們告訴 OpenGL 我們要畫一個三角形，但是我們還要告訴它_怎麼_畫出來。</p>`,16)),a("p",null,[n[52]||(n[52]=s("要讓它畫出來，我們需要叫做",-1)),n[53]||(n[53]=a("ruby",null,[s("片元着色器"),a("rt",null,"fragment shader")],-1)),n[54]||(n[54]=s("和",-1)),n[55]||(n[55]=a("ruby",null,[s("頂點着色器"),a("rt",null,"vertex shader")],-1)),n[56]||(n[56]=s("的東西，這些已經超出本教程的範圍了（老實説，也超出了我對 OpenGL 的瞭解），但 ",-1)),l(p,{href:"https://www.quora.com/What-is-a-vertex-shader-and-what-is-a-fragment-shader/answer/Harold-Serrano?srid=aVb"},{default:e(()=>[...n[50]||(n[50]=[s("Harold Serrano 在 Quora",-1)])]),_:1}),n[57]||(n[57]=s(" 上對對它們是什麼給出了完美的介紹。我們只需要理解，對於這個應用來説，着色器是它內部的小程序（用 ",-1)),l(p,{href:"https://www.opengl.org/sdk/docs/tutorials/ClockworkCoders/glsl_overview.php"},{default:e(()=>[...n[51]||(n[51]=[s("OpenGL Shader Language 或 GLSL",-1)])]),_:1}),n[58]||(n[58]=s(" 編寫的），它操作頂點進行繪製，也可用於確定圖形的顏色。",-1))]),n[90]||(n[90]=i(`<p>添加兩個 <code>import</code> 和一個叫做 <code>compileShader</code> 的函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;strings&quot;</span></span>
<span class="line"><span>    &quot;fmt&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func compileShader(source string, shaderType uint32) (uint32, error) {</span></span>
<span class="line"><span>    shader := gl.CreateShader(shaderType)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    csources, free := gl.Strs(source)</span></span>
<span class="line"><span>    gl.ShaderSource(shader, 1, csources, nil)</span></span>
<span class="line"><span>    free()</span></span>
<span class="line"><span>    gl.CompileShader(shader)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var status int32</span></span>
<span class="line"><span>    gl.GetShaderiv(shader, gl.COMPILE_STATUS, &amp;status)</span></span>
<span class="line"><span>    if status == gl.FALSE {</span></span>
<span class="line"><span>        var logLength int32</span></span>
<span class="line"><span>        gl.GetShaderiv(shader, gl.INFO_LOG_LENGTH, &amp;logLength)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        log := strings.Repeat(&quot;\\x00&quot;, int(logLength+1))</span></span>
<span class="line"><span>        gl.GetShaderInfoLog(shader, logLength, nil, gl.Str(log))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return 0, fmt.Errorf(&quot;failed to compile %v: %v&quot;, source, log)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return shader, nil</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個函數的目的是以字符串的形式接受着色器源代碼和它的類型，然後返回一個指向這個編譯好的着色器的指針。如果編譯失敗，我們就會獲得出錯的詳細信息。</p><p>現在定義着色器，在 <code>makeProgram</code> 裏編譯。回到我們的 <code>const</code> 塊中，我們在這裏定義了 <code>width</code> 和 <code>hegiht</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vertexShaderSource = \`</span></span>
<span class="line"><span>    #version 410</span></span>
<span class="line"><span>    in vec3 vp;</span></span>
<span class="line"><span>    void main() {</span></span>
<span class="line"><span>        gl_Position = vec4(vp, 1.0);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>\` + &quot;\\x00&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fragmentShaderSource = \`</span></span>
<span class="line"><span>    #version 410</span></span>
<span class="line"><span>    out vec4 frag_colour;</span></span>
<span class="line"><span>    void main() {</span></span>
<span class="line"><span>        frag_colour = vec4(1, 1, 1, 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>\` + &quot;\\x00&quot;</span></span></code></pre></div><p>如你所見，這是兩個包含了 GLSL 源代碼字符串的着色器，一個是<ruby>頂點着色器<rt>vertex shader</rt></ruby>，另一個是<ruby>片元着色器<rt>fragment shader</rt></ruby>。唯一比較特殊的地方是它們都要在末尾加上一個空終止字符，<code>\\x00</code> —— OpenGL 需要它才能編譯着色器。注意 <code>fragmentShaderSource</code>，這是我們用 RGBA 形式的值通過 <code>vec4</code> 來定義我們圖形的顏色。你可以修改這裏的值來改變這個三角形的顏色，現在的值是 <code>RGBA(1, 1, 1, 1)</code> 或者説是白色。</p><p>同樣需要注意的是這兩個程序都是運行在 <code>#version 410</code> 版本下，如果你用的是 OpenGL 2.1，那你也可以改成 <code>#version 120</code>。這裏 <code>120</code> 不是打錯的，如果你用的是 OpenGL 2.1，要用 <code>120</code> 而不是 <code>210</code>！</p><p>接下來在 <code>initOpenGL</code> 中我們會編譯着色器，把它們附加到我們的 <code>program</code> 中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func initOpenGL() uint32 {</span></span>
<span class="line"><span>	if err := gl.Init(); err != nil {</span></span>
<span class="line"><span>		panic(err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	version := gl.GoStr(gl.GetString(gl.VERSION))</span></span>
<span class="line"><span>	log.Println(&quot;OpenGL version&quot;, version)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    vertexShader, err := compileShader(vertexShaderSource, gl.VERTEX_SHADER)</span></span>
<span class="line"><span>    if err != nil {</span></span>
<span class="line"><span>        panic(err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    fragmentShader, err := compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER)</span></span>
<span class="line"><span>    if err != nil {</span></span>
<span class="line"><span>        panic(err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    prog := gl.CreateProgram()</span></span>
<span class="line"><span>    gl.AttachShader(prog, vertexShader)</span></span>
<span class="line"><span>    gl.AttachShader(prog, fragmentShader)    </span></span>
<span class="line"><span>    gl.LinkProgram(prog)</span></span>
<span class="line"><span>    return prog</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏我們用頂點着色器（<code>vertexShader</code>）調用了 <code>compileShader</code> 函數，指定它的類型是 <code>gl.VERTEX_SHADER</code>，對片元着色器（<code>fragmentShader</code>）做了同樣的事情，但是指定的類型是 <code>gl.FRAGMENT_SHADER</code>。編譯完成後，我們把它們附加到程序中，調用 <code>gl.AttachShader</code>，傳遞程序（<code>prog</code>）以及編譯好的着色器作為參數。</p><p>現在我們終於可以看到我們漂亮的三角形了！運行程序，如果一切順利的話你會看到這些：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-3.png" alt="Conway&#39;s Game of Life - Hello, Triangle!"></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>是不是很驚喜！這些代碼畫出了一個三角形，但我保證我們已經完成了大部分的 OpenGL 代碼，在接下來的章節中我們還會用到這些代碼。我十分推薦你花幾分鐘修改一下代碼，看看你能不能移動三角形，改變三角形的大小和顏色。OpenGL 可以令人心生畏懼，有時想要理解發生了什麼很困難，但是要記住，這不是魔法 - 它只不過看上去像魔法。</p>`,14)),a("p",null,[n[60]||(n[60]=s("下一節裏我們講會用兩個鋭角三角形拼出一個方形 - 看看你能不能在進入下一節前試着修改這一節的代碼。不能也沒有關係，因為我們在 ",-1)),l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board"},{default:e(()=>[...n[59]||(n[59]=[s("第二節",-1)])]),_:1}),n[61]||(n[61]=s(" 還會編寫代碼， 接着創建一個有許多方形的格子，我們把它當做遊戲面板。",-1))]),a("p",null,[n[63]||(n[63]=s("最後，在",-1)),l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...n[62]||(n[62]=[s("第三節",-1)])]),_:1}),n[64]||(n[64]=s(" 裏我們會用格子來實現 ",-1)),n[65]||(n[65]=a("em",null,"Conway’s Game of Life",-1)),n[66]||(n[66]=s("！",-1))]),n[91]||(n[91]=i(`<h3 id="回顧" tabindex="-1">回顧 <a class="header-anchor" href="#回顧" aria-label="Permalink to “回顧”">​</a></h3><p>本教程 <code>main.go</code> 文件的內容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;log&quot;</span></span>
<span class="line"><span>	&quot;runtime&quot;</span></span>
<span class="line"><span>	&quot;strings&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&quot;github.com/go-gl/gl/v4.1-core/gl&quot;</span><span> // OR: github.com/go-gl/gl/v2.1/gl</span></span>
<span class="line"><span>	&quot;github.com/go-gl/glfw/v3.2/glfw&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const (</span></span>
<span class="line"><span>	width  = 500</span></span>
<span class="line"><span>	height = 500</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	vertexShaderSource = \`</span></span>
<span class="line"><span>		#version 410</span></span>
<span class="line"><span>		in vec3 vp;</span></span>
<span class="line"><span>		void main() {</span></span>
<span class="line"><span>			gl_Position = vec4(vp, 1.0);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	\` + &quot;\\x00&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fragmentShaderSource = \`</span></span>
<span class="line"><span>		#version 410</span></span>
<span class="line"><span>		out vec4 frag_colour;</span></span>
<span class="line"><span>		void main() {</span></span>
<span class="line"><span>			frag_colour = vec4(1, 1, 1, 1.0);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	\` + &quot;\\x00&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var (</span></span>
<span class="line"><span>	triangle = []float32{</span></span>
<span class="line"><span>		0, 0.5, 0,</span></span>
<span class="line"><span>		-0.5, -0.5, 0,</span></span>
<span class="line"><span>		0.5, -0.5, 0,</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	runtime.LockOSThread()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	window := initGlfw()</span></span>
<span class="line"><span>	defer glfw.Terminate()</span></span>
<span class="line"><span>	program := initOpenGL()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	vao := makeVao(triangle)</span></span>
<span class="line"><span>	for !window.ShouldClose() {</span></span>
<span class="line"><span>		draw(vao, window, program)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func draw(vao uint32, window *glfw.Window, program uint32) {</span></span>
<span class="line"><span>	gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)</span></span>
<span class="line"><span>	gl.UseProgram(program)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	gl.BindVertexArray(vao)</span></span>
<span class="line"><span>	gl.DrawArrays(gl.TRIANGLES, 0, int32(len(triangle)/3))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	glfw.PollEvents()</span></span>
<span class="line"><span>	window.SwapBuffers()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// initGlfw 初始化 glfw 並返回一個窗口供使用。</span></span>
<span class="line"><span>func initGlfw() *glfw.Window {</span></span>
<span class="line"><span>	if err := glfw.Init(); err != nil {</span></span>
<span class="line"><span>		panic(err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	glfw.WindowHint(glfw.Resizable, glfw.False)</span></span>
<span class="line"><span>	glfw.WindowHint(glfw.ContextVersionMajor, 4)</span></span>
<span class="line"><span>	glfw.WindowHint(glfw.ContextVersionMinor, 1)</span></span>
<span class="line"><span>	glfw.WindowHint(glfw.OpenGLProfile, glfw.OpenGLCoreProfile)</span></span>
<span class="line"><span>	glfw.WindowHint(glfw.OpenGLForwardCompatible, glfw.True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	window, err := glfw.CreateWindow(width, height, &quot;Conway&#39;s Game of Life&quot;, nil, nil)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		panic(err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	window.MakeContextCurrent()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return window</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// initOpenGL 初始化 OpenGL 並返回一個已經編譯好的着色器程序</span></span>
<span class="line"><span>func initOpenGL() uint32 {</span></span>
<span class="line"><span>	if err := gl.Init(); err != nil {</span></span>
<span class="line"><span>		panic(err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	version := gl.GoStr(gl.GetString(gl.VERSION))</span></span>
<span class="line"><span>	log.Println(&quot;OpenGL version&quot;, version)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	vertexShader, err := compileShader(vertexShaderSource, gl.VERTEX_SHADER)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		panic(err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fragmentShader, err := compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		panic(err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	prog := gl.CreateProgram()</span></span>
<span class="line"><span>	gl.AttachShader(prog, vertexShader)</span></span>
<span class="line"><span>	gl.AttachShader(prog, fragmentShader)</span></span>
<span class="line"><span>	gl.LinkProgram(prog)</span></span>
<span class="line"><span>	return prog</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// makeVao 執行初始化並從提供的點裏面返回一個頂點數組</span></span>
<span class="line"><span>func makeVao(points []float32) uint32 {</span></span>
<span class="line"><span>	var vbo uint32</span></span>
<span class="line"><span>	gl.GenBuffers(1, &amp;vbo)</span></span>
<span class="line"><span>	gl.BindBuffer(gl.ARRAY_BUFFER, vbo)</span></span>
<span class="line"><span>	gl.BufferData(gl.ARRAY_BUFFER, 4*len(points), gl.Ptr(points), gl.STATIC_DRAW)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var vao uint32</span></span>
<span class="line"><span>	gl.GenVertexArrays(1, &amp;vao)</span></span>
<span class="line"><span>	gl.BindVertexArray(vao)</span></span>
<span class="line"><span>	gl.EnableVertexAttribArray(0)</span></span>
<span class="line"><span>	gl.BindBuffer(gl.ARRAY_BUFFER, vbo)</span></span>
<span class="line"><span>	gl.VertexAttribPointer(0, 3, gl.FLOAT, false, 0, nil)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return vao</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func compileShader(source string, shaderType uint32) (uint32, error) {</span></span>
<span class="line"><span>	shader := gl.CreateShader(shaderType)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	csources, free := gl.Strs(source)</span></span>
<span class="line"><span>	gl.ShaderSource(shader, 1, csources, nil)</span></span>
<span class="line"><span>	free()</span></span>
<span class="line"><span>	gl.CompileShader(shader)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var status int32</span></span>
<span class="line"><span>	gl.GetShaderiv(shader, gl.COMPILE_STATUS, &amp;status)</span></span>
<span class="line"><span>	if status == gl.FALSE {</span></span>
<span class="line"><span>		var logLength int32</span></span>
<span class="line"><span>		gl.GetShaderiv(shader, gl.INFO_LOG_LENGTH, &amp;logLength)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		log := strings.Repeat(&quot;\\x00&quot;, int(logLength+1))</span></span>
<span class="line"><span>		gl.GetShaderInfoLog(shader, logLength, nil, gl.Str(log))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		return 0, fmt.Errorf(&quot;failed to compile %v: %v&quot;, source, log)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return shader, nil</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3)),a("p",null,[n[68]||(n[68]=s("請在 Twitter ",-1)),l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...n[67]||(n[67]=[s("@kylewbanks",-1)])]),_:1}),n[69]||(n[69]=s(" 上告訴我這篇文章對你是否有幫助，或者點擊下方的關注，以便及時獲取最新文章！",-1))]),n[92]||(n[92]=a("hr",null,null,-1)),a("p",null,[n[71]||(n[71]=s("via: ",-1)),l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-1-hello-opengl"},{default:e(()=>[...n[70]||(n[70]=[s("https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-1-hello-opengl",-1)])]),_:1})]),a("p",null,[n[75]||(n[75]=s("作者：",-1)),l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...n[72]||(n[72]=[s("kylewbanks",-1)])]),_:1}),n[76]||(n[76]=s(" 譯者：",-1)),l(p,{href:"https://github.com/GitFuture"},{default:e(()=>[...n[73]||(n[73]=[s("GitFuture",-1)])]),_:1}),n[77]||(n[77]=s(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...n[74]||(n[74]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[80]||(n[80]=s("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[78]||(n[78]=[s("LCTT",-1)])]),_:1}),n[81]||(n[81]=s(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...n[79]||(n[79]=[s("Linux中國",-1)])]),_:1}),n[82]||(n[82]=s(" 榮譽推出",-1))])])}const L=t(d,[["render",c]]);export{G as __pageData,L as default};
