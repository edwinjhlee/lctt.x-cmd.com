import{_ as t,a0 as o,w as r,s as g,I as a,x as s,a1 as l,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const G=JSON.parse('{"title":"OpenGL 与 Go 教程（一）Hello, OpenGL | LCTT x X-CMD","titleTemplate":false,"description":"OpenGL 与 Go 教程（一）Hello, OpenGL | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"OpenGL 与 Go 教程（一）Hello, OpenGL | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"OpenGL 与 Go 教程（一）Hello, OpenGL | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170312 OpenGL  Go Tutorial Part 1","title":"OpenGL 与 Go 教程（一）Hello, OpenGL","tag":"201710","desc":""},"relativePath":"201710/20170312 OpenGL  Go Tutorial Part 1.md","filePath":"[post].md"}'),d={name:"201710/20170312 OpenGL  Go Tutorial Part 1.md"};function c(u,n,f,w,h,b){const p=o("Link");return r(),g("div",null,[n[83]||(n[83]=a("h1",{id:"opengl-与-go-教程-一-hello-opengl",tabindex:"-1"},[s("OpenGL 与 Go 教程（一）Hello, OpenGL "),a("a",{class:"header-anchor",href:"#opengl-与-go-教程-一-hello-opengl","aria-label":"Permalink to “OpenGL 与 Go 教程（一）Hello, OpenGL”"},"​")],-1)),a("ul",null,[a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-1-hello-opengl"},{default:e(()=>[...n[0]||(n[0]=[s("第一节： Hello, OpenGL",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board"},{default:e(()=>[...n[1]||(n[1]=[s("第二节： 绘制游戏面板",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...n[2]||(n[2]=[s("第三节： 实现游戏功能",-1)])]),_:1})])]),a("p",null,[n[4]||(n[4]=s("这篇教程的所有源代码都可以在 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[3]||(n[3]=[s("GitHub",-1)])]),_:1}),n[5]||(n[5]=s(" 上找到。",-1))]),n[84]||(n[84]=a("h3",{id:"介绍",tabindex:"-1"},[s("介绍 "),a("a",{class:"header-anchor",href:"#介绍","aria-label":"Permalink to “介绍”"},"​")],-1)),a("p",null,[l(p,{href:"https://www.opengl.org/"},{default:e(()=>[...n[6]||(n[6]=[s("OpenGL",-1)])]),_:1}),n[7]||(n[7]=s(" 是一门相当好的技术，适用于从桌面的 GUI 到游戏，到移动应用甚至 web 应用的多种类型的绘图工作。我敢保证，你今天看到的图形有些就是用 OpenGL 渲染的。可是，不管 OpenGL 多受欢迎、有多好用，与学习其它高级绘图库相比，学习 OpenGL 是要相当足够的决心的。",-1))]),a("p",null,[n[10]||(n[10]=s("这个教程的目的是给你一个切入点，让你对 OpenGL 有个基本的了解，然后教你怎么用 ",-1)),l(p,{href:"https://golang.org/"},{default:e(()=>[...n[8]||(n[8]=[s("Go",-1)])]),_:1}),n[11]||(n[11]=s(" 操作它。几乎每种编程语言都有绑定 OpenGL 的库，Go 也不例外，它有 ",-1)),l(p,{href:"https://github.com/go-gl/gl"},{default:e(()=>[...n[9]||(n[9]=[s("go-gl",-1)])]),_:1}),n[12]||(n[12]=s(" 这个包。这是一个完整的套件，可以绑定 OpenGL ，适用于多种版本的 OpenGL。",-1))]),a("p",null,[n[15]||(n[15]=s("这篇教程会按照下面列出的几个阶段进行介绍，我们最终的目标是用 OpenGL 在桌面窗口绘制游戏面板，进而实现",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Conway's_Game_of_Life"},{default:e(()=>[...n[13]||(n[13]=[s("康威生命游戏",-1)])]),_:1}),n[16]||(n[16]=s("。完整的源代码可以在 GitHub ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[14]||(n[14]=[s("github.com/KyleBanks/conways-gol",-1)])]),_:1}),n[17]||(n[17]=s(" 上获得，当你有疑惑的时候可以随时查看源代码，或者你要按照自己的方式学习也可以参考这个代码。",-1))]),a("p",null,[n[19]||(n[19]=s("在我们开始之前，我们要先弄明白",-1)),n[20]||(n[20]=a("ruby",null,[s("康威生命游戏"),a("rt",null,"Conway's Game of Life")],-1)),n[21]||(n[21]=s(" 到底是什么。这里是 ",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Conway's_Game_of_Life"},{default:e(()=>[...n[18]||(n[18]=[s("Wikipedia",-1)])]),_:1}),n[22]||(n[22]=s(" 上面的总结：",-1))]),n[85]||(n[85]=i('<blockquote><p>《生命游戏》，也可以简称为 Life，是一个细胞自动变化的过程，由英国数学家 John Horton Conway 于 1970 年提出。</p><p>这个“游戏”没有玩家，也就是说它的发展依靠的是它的初始状态，不需要输入。用户通过创建初始配置文件、观察它如何演变，或者对于高级“玩家”可以创建特殊属性的模式，进而与《生命游戏》进行交互。</p><p><code>规则</code></p><p>《生命游戏》的世界是一个无穷多的二维正交的正方形细胞的格子世界，每一个格子都有两种可能的状态，“存活”或者“死亡”，也可以说是“填充态”或“未填充态”（区别可能很小，可以把它看作一个模拟人类/哺乳动物行为的早期模型，这要看一个人是如何看待方格里的空白）。每一个细胞与它周围的八个细胞相关联，这八个细胞分别是水平、垂直、斜对角相接的。在游戏中的每一步，下列事情中的一件将会发生：</p><ol><li>当任何一个存活的细胞的附近少于 2 个存活的细胞时，该细胞将会消亡，就像人口过少所导致的结果一样</li><li>当任何一个存活的细胞的附近有 2 至 3 个存活的细胞时，该细胞在下一代中仍然存活。</li><li>当任何一个存活的细胞的附近多于 3 个存活的细胞时，该细胞将会消亡，就像人口过多所导致的结果一样</li><li>任何一个消亡的细胞附近刚好有 3 个存活的细胞，该细胞会变为存活的状态，就像重生一样。</li></ol></blockquote><p>不需要其他工具，这里有一个我们将会制作的演示程序：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-1.gif" alt="Conway&#39;s Game of Life - 示例游戏"></p><p>在我们的运行过程中，白色的细胞表示它是存活着的，黑色的细胞表示它已经死亡。</p><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to “概述”">​</a></h3><p>本教程将会涉及到很多基础内容，从最基本的开始，但是你还是要对 Go 由一些最基本的了解 —— 至少你应该知道变量、切片、函数和结构体，并且装了一个 Go 的运行环境。我写这篇教程用的 Go 版本是 1.8，但它应该与之前的版本兼容。这里用 Go 语言实现没有什么特别新奇的东西，因此只要你有过类似的编程经历就行。</p><p>这里是我们在这个教程里将会讲到的东西：</p>',7)),a("ul",null,[a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-1-hello-opengl"},{default:e(()=>[...n[23]||(n[23]=[s("第一节: Hello, OpenGL",-1)])]),_:1}),n[25]||(n[25]=s("： 安装 OpenGL 和 ",-1)),l(p,{href:"http://www.glfw.org/"},{default:e(()=>[...n[24]||(n[24]=[s("GLFW",-1)])]),_:1}),n[26]||(n[26]=s("，在窗口上绘制一个三角形。",-1))]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board"},{default:e(()=>[...n[27]||(n[27]=[s("第二节: 绘制游戏面板",-1)])]),_:1}),n[28]||(n[28]=s("： 用三角形拼成方形，在窗口上用方形绘成格子。",-1))]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...n[29]||(n[29]=[s("第三节: 实现游戏功能",-1)])]),_:1}),n[30]||(n[30]=s("： 实现 Conway 游戏",-1))])]),a("p",null,[n[32]||(n[32]=s("最后的源代码可以在 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[31]||(n[31]=[s("GitHub",-1)])]),_:1}),n[33]||(n[33]=s(" 上获得，每一节的末尾有个_回顾_，包含该节相关的代码。如果有什么不清楚的地方或者是你感到疑惑的，看看每一节末尾的完整代码。",-1))]),n[86]||(n[86]=a("p",null,"现在就开始吧！",-1)),n[87]||(n[87]=a("h3",{id:"安装-opengl-和-glfw",tabindex:"-1"},[s("安装 OpenGL 和 GLFW "),a("a",{class:"header-anchor",href:"#安装-opengl-和-glfw","aria-label":"Permalink to “安装 OpenGL 和 GLFW”"},"​")],-1)),a("p",null,[n[36]||(n[36]=s("我们介绍过 OpenGL，但是为了使用它，我们要有个窗口可以绘制东西。 ",-1)),l(p,{href:"http://www.glfw.org/"},{default:e(()=>[...n[34]||(n[34]=[s("GLFW",-1)])]),_:1}),n[37]||(n[37]=s(" 是一款用于 OpenGL 的跨平台 API，允许我们创建并使用窗口，而且它也是 ",-1)),l(p,{href:"https://github.com/go-gl/glfw"},{default:e(()=>[...n[35]||(n[35]=[s("go-gl",-1)])]),_:1}),n[38]||(n[38]=s(" 套件中提供的。",-1))]),n[88]||(n[88]=i(`<p>我们要做的第一件事就是确定 OpenGL 的版本。为了方便本教程，我们将会使用 <code>OpenGL v4.1</code>，但要是你的操作系统不支持最新的 OpenGL，你也可以用 <code>v2.1</code>。要安装 OpenGL，我们需要做这些事：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 对于 OpenGL 4.1</span></span>
<span class="line"><span>$ go get github.com/go-gl/gl/v4.1-core/gl</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或者 2.1</span></span>
<span class="line"><span>$ go get github.com/go-gl/gl/v2.1/gl</span></span></code></pre></div><p>然后是安装 GLFW：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go get github.com/go-gl/glfw/v3.2/glfw</span></span></code></pre></div><p>安装好这两个包之后，我们就可以开始了！先创建 <code>main.go</code> 文件，导入相应的包（我们待会儿会用到的其它东西）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;log&quot;</span></span>
<span class="line"><span>    &quot;runtime&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;github.com/go-gl/gl/v4.1-core/gl&quot;</span><span> // OR: github.com/go-gl/gl/v2.1/gl</span></span>
<span class="line"><span>    &quot;github.com/go-gl/glfw/v3.2/glfw&quot;</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>接下来定义一个叫做 <code>main</code> 的函数，这是用来初始化 OpenGL 以及 GLFW，并显示窗口的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const (</span></span>
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
<span class="line"><span>// initGlfw 初始化 glfw 并且返回一个可用的窗口。</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>好了，让我们花一分钟来运行一下这个程序，看看会发生什么。首先定义了一些常量， <code>width</code> 和 <code>height</code> —— 它们决定窗口的像素大小。</p><p>然后就是 <code>main</code> 函数。这里我们使用了 <code>runtime</code> 包的 <code>LockOSThread()</code>，这能确保我们总是在操作系统的同一个线程中运行代码，这对 GLFW 来说很重要，GLFW 需要在其被初始化之后的线程里被调用。讲完这个，接下来我们调用 <code>initGlfw</code> 来获得一个窗口的引用，并且推迟（<code>defer</code>）其终止。窗口的引用会被用在一个 <code>for</code> 循环中，只要窗口处于打开的状态，就执行某些事情。我们待会儿会讲要做的事情是什么。</p><p><code>initGlfw</code> 是另一个函数，这里我们调用 <code>glfw.Init()</code> 来初始化 GLFW 包。然后我们定义了 GLFW 的一些全局属性，包括禁用调整窗口大小和改变 OpenGL 的属性。然后创建了 <code>glfw.Window</code>，这会在稍后的绘图中用到。我们仅仅告诉它我们想要的宽度和高度，以及标题，然后调用 <code>window.MakeContextCurrent</code>，将窗口绑定到当前的线程中。最后就是返回窗口的引用了。</p><p>如果你现在就构建、运行这个程序，你看不到任何东西。很合理，因为我们还没有用这个窗口做什么实质性的事。</p><p>定义一个新函数，初始化 OpenGL，就可以解决这个问题：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// initOpenGL 初始化 OpenGL 并且返回一个初始化了的程序。</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p><code>initOpenGL</code> 就像之前的 <code>initGlfw</code> 函数一样，初始化 OpenGL 库，创建一个<ruby>程序<rt>program</rt></ruby>。“程序”是一个包含了<ruby>着色器<rt>shader</rt></ruby>的引用，稍后会用<ruby>着色器<rt>shader</rt></ruby>绘图。待会儿会讲这一点，现在只用知道 OpenGL 已经初始化完成了，我们有一个程序的引用。我们还打印了 OpenGL 的版本，可以用于之后的调试。</p><p>回到 <code>main</code> 函数里，调用这个新函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>你应该注意到了现在我们有 <code>program</code> 的引用，在我们的窗口循环中，调用新的 <code>draw</code> 函数。最终这个函数会绘制出所有细胞，让游戏状态变得可视化，但是现在它做的仅仅是清除窗口，所以我们只能看到一个全黑的屏幕：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func draw(window *glfw.Window, program uint32) {</span></span>
<span class="line"><span>    gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)</span></span>
<span class="line"><span>    gl.UseProgram(prog)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    glfw.PollEvents()</span></span>
<span class="line"><span>    window.SwapBuffers()</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,19)),a("p",null,[n[40]||(n[40]=s("我们首先做的是调用 ",-1)),n[41]||(n[41]=a("code",null,"gl.clear",-1)),n[42]||(n[42]=s(" 函数来清除上一帧在窗口中绘制的东西，给我们一个干净的面板。然后我们告诉 OpenGL 去使用我们的程序引用，这个引用还没有做什么事。最终我们告诉 GLFW 用 ",-1)),n[43]||(n[43]=a("code",null,"PollEvents",-1)),n[44]||(n[44]=s(" 去检查是否有鼠标或者键盘事件（这一节里还不会对这些事件进行处理），告诉窗口去交换缓冲区 ",-1)),n[45]||(n[45]=a("code",null,"SwapBuffers",-1)),n[46]||(n[46]=s("。 ",-1)),l(p,{href:"http://www.glfw.org/docs/latest/window_guide.html#buffer_swap"},{default:e(()=>[...n[39]||(n[39]=[s("交换缓冲区",-1)])]),_:1}),n[47]||(n[47]=s(" 很重要，因为 GLFW（像其他图形库一样）使用双缓冲，也就是说你绘制的所有东西实际上是绘制到一个不可见的画布上，当你准备好进行展示的时候就把绘制的这些东西放到可见的画布中 —— 这种情况下，就需要调用 ",-1)),n[48]||(n[48]=a("code",null,"SwapBuffers",-1)),n[49]||(n[49]=s(" 函数。",-1))]),n[89]||(n[89]=i(`<p>好了，到这里我们已经讲了很多东西，花一点时间看看我们的实验成果。运行这个程序，你应该可以看到你所绘制的第一个东西：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-2.png" alt="Conway&#39;s Game of Life - 第一个窗口"></p><p>完美！</p><h3 id="在窗口里绘制三角形" tabindex="-1">在窗口里绘制三角形 <a class="header-anchor" href="#在窗口里绘制三角形" aria-label="Permalink to “在窗口里绘制三角形”">​</a></h3><p>我们已经完成了一些复杂的步骤，即使看起来不多，但我们仍然需要绘制一些东西。我们会以三角形绘制开始，可能这第一眼看上去要比我们最终要绘制的方形更难，但你会知道这样的想法是错的。你可能不知道的是三角形或许是绘制的图形中最简单的，实际上我们最终会用某种方式把三角形拼成方形。</p><p>好吧，那么我们想要绘制一个三角形，怎么做呢？我们通过定义图形的顶点来绘制图形，把它们交给 OpenGL 来进行绘制。先在 <code>main.go</code> 的顶部里定义我们的三角形：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var (</span></span>
<span class="line"><span>    triangle = []float32{</span></span>
<span class="line"><span>        0, 0.5, 0, // top</span></span>
<span class="line"><span>        -0.5, -0.5, 0, // left</span></span>
<span class="line"><span>        0.5, -0.5, 0, // right</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>这看上去很奇怪，让我们分开来看。首先我们用了一个 <code>float32</code> <ruby>切片<rt>slice</rt></ruby>，这是一种我们总会在向 OpenGL 传递顶点时用到的数据类型。这个切片包含 9 个值，每三个值构成三角形的一个点。第一行， <code>0, 0.5, 0</code> 表示的是 X、Y、Z 坐标，是最上方的顶点，第二行是左边的顶点，第三行是右边的顶点。每一组的三个点都表示相对于窗口中心点的 X、Y、Z 坐标，大小在 <code>-1</code> 和 <code>1</code> 之间。因此最上面的顶点 X 坐标是 <code>0</code>，因为它在 X 方向上位于窗口中央，Y 坐标是 <code>0.5</code> 意味着它会相对窗口中央上移 1/4 个单位（因为窗口的范围是 <code>-1</code> 到 <code>1</code>），Z 坐标是 0。因为我们只需要在二维空间中绘图，所以 Z 值永远是 <code>0</code>。现在看一看左右两边的顶点，看看你能不能理解为什么它们是这样定义的 —— 如果不能立刻就弄清楚也没关系，我们将会在屏幕上去观察它，因此我们需要一个完美的图形来进行观察。</p><p>好了，我们定义了一个三角形，但是现在我们得把它画出来。要画出这个三角形，我们需要一个叫做<ruby>顶点数组对象<rt>Vertex Array Object</rt></ruby>或者叫 vao 的东西，这是由一系列的点（也就是我们定义的三角形）创造的，这个东西可以提供给 OpenGL 来进行绘制。创建一个叫做 <code>makeVao</code> 的函数，然后我们可以提供一个点的切片，让它返回一个指向 OpenGL 顶点数组对象的指针：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// makeVao 执行初始化并从提供的点里面返回一个顶点数组</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>首先我们创造了<ruby>顶点缓冲区对象<rt>Vertex Buffer Object</rt></ruby> 或者说 vbo 绑定到我们的 <code>vao</code> 上，<code>vbo</code> 是通过所占空间（也就是 4 倍 <code>len(points)</code> 大小的空间）和一个指向顶点的指针（<code>gl.Ptr(points)</code>）来创建的。你也许会好奇为什么它是 4 倍 —— 而不是 6 或者 3 或者 1078 呢？原因在于我们用的是 <code>float32</code> 切片，32 个位的浮点型变量是 4 个字节，因此我们说这个缓冲区以字节为单位的大小是点个数的 4 倍。</p><p>现在我们有缓冲区了，可以创建 <code>vao</code> 并用 <code>gl.BindBuffer</code> 把它绑定到缓冲区上，最后返回 <code>vao</code>。这个 <code>vao</code> 将会被用于绘制三角形！</p><p>回到 <code>main</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    vao := makeVao(triangle)</span></span>
<span class="line"><span>    for !window.ShouldClose() {</span></span>
<span class="line"><span>        draw(vao, window, program)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里我们调用了 \`makeVao\` ，从我们之前定义的 \`triangle\` 顶点中获得 \`vao\` 引用，将它作为一个新的参数传递给 \`draw\` 函数：</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>然后我们把 OpenGL 绑定到 <code>vao</code> 上，这样当我们告诉 OpenGL 三角形切片的顶点数（除以 3，是因为每一个点有 X、Y、Z 坐标），让它去 <code>DrawArrays</code> ，它就知道要画多少个顶点了。</p><p>如果你这时候运行程序，你可能希望在窗口中央看到一个美丽的三角形，但是不幸的是你还看不到。还有一件事情没做，我们告诉 OpenGL 我们要画一个三角形，但是我们还要告诉它_怎么_画出来。</p>`,16)),a("p",null,[n[52]||(n[52]=s("要让它画出来，我们需要叫做",-1)),n[53]||(n[53]=a("ruby",null,[s("片元着色器"),a("rt",null,"fragment shader")],-1)),n[54]||(n[54]=s("和",-1)),n[55]||(n[55]=a("ruby",null,[s("顶点着色器"),a("rt",null,"vertex shader")],-1)),n[56]||(n[56]=s("的东西，这些已经超出本教程的范围了（老实说，也超出了我对 OpenGL 的了解），但 ",-1)),l(p,{href:"https://www.quora.com/What-is-a-vertex-shader-and-what-is-a-fragment-shader/answer/Harold-Serrano?srid=aVb"},{default:e(()=>[...n[50]||(n[50]=[s("Harold Serrano 在 Quora",-1)])]),_:1}),n[57]||(n[57]=s(" 上对对它们是什么给出了完美的介绍。我们只需要理解，对于这个应用来说，着色器是它内部的小程序（用 ",-1)),l(p,{href:"https://www.opengl.org/sdk/docs/tutorials/ClockworkCoders/glsl_overview.php"},{default:e(()=>[...n[51]||(n[51]=[s("OpenGL Shader Language 或 GLSL",-1)])]),_:1}),n[58]||(n[58]=s(" 编写的），它操作顶点进行绘制，也可用于确定图形的颜色。",-1))]),n[90]||(n[90]=i(`<p>添加两个 <code>import</code> 和一个叫做 <code>compileShader</code> 的函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个函数的目的是以字符串的形式接受着色器源代码和它的类型，然后返回一个指向这个编译好的着色器的指针。如果编译失败，我们就会获得出错的详细信息。</p><p>现在定义着色器，在 <code>makeProgram</code> 里编译。回到我们的 <code>const</code> 块中，我们在这里定义了 <code>width</code> 和 <code>hegiht</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vertexShaderSource = \`</span></span>
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
<span class="line"><span>\` + &quot;\\x00&quot;</span></span></code></pre></div><p>如你所见，这是两个包含了 GLSL 源代码字符串的着色器，一个是<ruby>顶点着色器<rt>vertex shader</rt></ruby>，另一个是<ruby>片元着色器<rt>fragment shader</rt></ruby>。唯一比较特殊的地方是它们都要在末尾加上一个空终止字符，<code>\\x00</code> —— OpenGL 需要它才能编译着色器。注意 <code>fragmentShaderSource</code>，这是我们用 RGBA 形式的值通过 <code>vec4</code> 来定义我们图形的颜色。你可以修改这里的值来改变这个三角形的颜色，现在的值是 <code>RGBA(1, 1, 1, 1)</code> 或者说是白色。</p><p>同样需要注意的是这两个程序都是运行在 <code>#version 410</code> 版本下，如果你用的是 OpenGL 2.1，那你也可以改成 <code>#version 120</code>。这里 <code>120</code> 不是打错的，如果你用的是 OpenGL 2.1，要用 <code>120</code> 而不是 <code>210</code>！</p><p>接下来在 <code>initOpenGL</code> 中我们会编译着色器，把它们附加到我们的 <code>program</code> 中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func initOpenGL() uint32 {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这里我们用顶点着色器（<code>vertexShader</code>）调用了 <code>compileShader</code> 函数，指定它的类型是 <code>gl.VERTEX_SHADER</code>，对片元着色器（<code>fragmentShader</code>）做了同样的事情，但是指定的类型是 <code>gl.FRAGMENT_SHADER</code>。编译完成后，我们把它们附加到程序中，调用 <code>gl.AttachShader</code>，传递程序（<code>prog</code>）以及编译好的着色器作为参数。</p><p>现在我们终于可以看到我们漂亮的三角形了！运行程序，如果一切顺利的话你会看到这些：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-3.png" alt="Conway&#39;s Game of Life - Hello, Triangle!"></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>是不是很惊喜！这些代码画出了一个三角形，但我保证我们已经完成了大部分的 OpenGL 代码，在接下来的章节中我们还会用到这些代码。我十分推荐你花几分钟修改一下代码，看看你能不能移动三角形，改变三角形的大小和颜色。OpenGL 可以令人心生畏惧，有时想要理解发生了什么很困难，但是要记住，这不是魔法 - 它只不过看上去像魔法。</p>`,14)),a("p",null,[n[60]||(n[60]=s("下一节里我们讲会用两个锐角三角形拼出一个方形 - 看看你能不能在进入下一节前试着修改这一节的代码。不能也没有关系，因为我们在 ",-1)),l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board"},{default:e(()=>[...n[59]||(n[59]=[s("第二节",-1)])]),_:1}),n[61]||(n[61]=s(" 还会编写代码， 接着创建一个有许多方形的格子，我们把它当做游戏面板。",-1))]),a("p",null,[n[63]||(n[63]=s("最后，在",-1)),l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...n[62]||(n[62]=[s("第三节",-1)])]),_:1}),n[64]||(n[64]=s(" 里我们会用格子来实现 ",-1)),n[65]||(n[65]=a("em",null,"Conway’s Game of Life",-1)),n[66]||(n[66]=s("！",-1))]),n[91]||(n[91]=i(`<h3 id="回顾" tabindex="-1">回顾 <a class="header-anchor" href="#回顾" aria-label="Permalink to “回顾”">​</a></h3><p>本教程 <code>main.go</code> 文件的内容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>// initGlfw 初始化 glfw 并返回一个窗口供使用。</span></span>
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
<span class="line"><span>// initOpenGL 初始化 OpenGL 并返回一个已经编译好的着色器程序</span></span>
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
<span class="line"><span>// makeVao 执行初始化并从提供的点里面返回一个顶点数组</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,3)),a("p",null,[n[68]||(n[68]=s("请在 Twitter ",-1)),l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...n[67]||(n[67]=[s("@kylewbanks",-1)])]),_:1}),n[69]||(n[69]=s(" 上告诉我这篇文章对你是否有帮助，或者点击下方的关注，以便及时获取最新文章！",-1))]),n[92]||(n[92]=a("hr",null,null,-1)),a("p",null,[n[71]||(n[71]=s("via: ",-1)),l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-1-hello-opengl"},{default:e(()=>[...n[70]||(n[70]=[s("https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-1-hello-opengl",-1)])]),_:1})]),a("p",null,[n[75]||(n[75]=s("作者：",-1)),l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...n[72]||(n[72]=[s("kylewbanks",-1)])]),_:1}),n[76]||(n[76]=s(" 译者：",-1)),l(p,{href:"https://github.com/GitFuture"},{default:e(()=>[...n[73]||(n[73]=[s("GitFuture",-1)])]),_:1}),n[77]||(n[77]=s(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...n[74]||(n[74]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[80]||(n[80]=s("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[78]||(n[78]=[s("LCTT",-1)])]),_:1}),n[81]||(n[81]=s(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...n[79]||(n[79]=[s("Linux中国",-1)])]),_:1}),n[82]||(n[82]=s(" 荣誉推出",-1))])])}const L=t(d,[["render",c]]);export{G as __pageData,L as default};
