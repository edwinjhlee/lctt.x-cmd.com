import{_ as t,a0 as c,w as o,s as r,I as a,x as s,a1 as l,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"OpenGL 与 Go 教程（三）实现游戏 | LCTT x X-CMD","titleTemplate":false,"description":"OpenGL 与 Go 教程（三）实现游戏 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"OpenGL 与 Go 教程（三）实现游戏 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"OpenGL 与 Go 教程（三）实现游戏 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170312 OpenGL  Go Tutorial Part 3 Implementing the Game","title":"OpenGL 与 Go 教程（三）实现游戏","tag":"201710","desc":""},"relativePath":"201710/20170312 OpenGL  Go Tutorial Part 3 Implementing the Game.md","filePath":"[post].md"}'),d={name:"201710/20170312 OpenGL  Go Tutorial Part 3 Implementing the Game.md"};function g(u,n,f,h,m,k){const p=c("Link");return o(),r("div",null,[n[36]||(n[36]=a("h1",{id:"opengl-与-go-教程-三-实现游戏",tabindex:"-1"},[s("OpenGL 与 Go 教程（三）实现游戏 "),a("a",{class:"header-anchor",href:"#opengl-与-go-教程-三-实现游戏","aria-label":"Permalink to “OpenGL 与 Go 教程（三）实现游戏”"},"​")],-1)),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-8933-1.html"},{default:e(()=>[...n[0]||(n[0]=[s("第一节: Hello, OpenGL",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8937-1.html"},{default:e(()=>[...n[1]||(n[1]=[s("第二节: 绘制游戏面板",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...n[2]||(n[2]=[s("第三节：实现游戏功能",-1)])]),_:1})])]),a("p",null,[n[4]||(n[4]=s("该教程的完整源代码可以从 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[3]||(n[3]=[s("GitHub",-1)])]),_:1}),n[5]||(n[5]=s(" 上找到。",-1))]),a("p",null,[n[8]||(n[8]=s("欢迎回到《OpenGL 与 Go 教程》！如果你还没有看过 ",-1)),l(p,{href:"https://linux.cn/article-8933-1.html"},{default:e(()=>[...n[6]||(n[6]=[s("第一节",-1)])]),_:1}),n[9]||(n[9]=s(" 和 ",-1)),l(p,{href:"https://kylewbanks.com/blog/%5BPart%202:%20Drawing%20the%20Game%20Board%5D(/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board)"},{default:e(()=>[...n[7]||(n[7]=[s("第二节",-1)])]),_:1}),n[10]||(n[10]=s("，那就要回过头去看一看。",-1))]),n[37]||(n[37]=i(`<p>到目前为止，你应该懂得如何创建网格系统以及创建代表方格中每一个单元的格子阵列。现在可以开始把网格当作游戏面板实现<ruby>康威生命游戏<rt>Conway&#39;s Game of Life</rt></ruby>。</p><p>开始吧！</p><h3 id="实现康威生命游戏" tabindex="-1">实现康威生命游戏 <a class="header-anchor" href="#实现康威生命游戏" aria-label="Permalink to “实现康威生命游戏”">​</a></h3><p>康威生命游戏的其中一个要点是所有<ruby>细胞<rt>cell</rt></ruby>必须同时基于当前细胞在面板中的状态确定下一个细胞的状态。也就是说如果细胞 <code>(X=3,Y=4)</code> 在计算过程中状态发生了改变，那么邻近的细胞 <code>(X=4,Y=4)</code> 必须基于 <code>(X=3,Y=4)</code> 的状态决定自己的状态变化，而不是基于自己现在的状态。简单的讲，这意味着我们必须遍历细胞，确定下一个细胞的状态，而在绘制之前不改变他们的当前状态，然后在下一次循环中我们将新状态应用到游戏里，依此循环往复。</p><p>为了完成这个功能，我们需要在 <code>cell</code> 结构体中添加两个布尔型变量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type cell struct {</span></span>
<span class="line"><span>    drawable uint32</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    alive     bool</span></span>
<span class="line"><span>    aliveNext bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    x int</span></span>
<span class="line"><span>    y int</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里我们添加了 <code>alive</code> 和 <code>aliveNext</code>，前一个是细胞当前的专题，后一个是经过计算后下一回合的状态。</p><p>现在添加两个函数，我们会用它们来确定 cell 的状态：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// checkState 函数决定下一次游戏循环时的 cell 状态</span></span>
<span class="line"><span>func (c *cell) checkState(cells [][]*cell) {</span></span>
<span class="line"><span>    c.alive = c.aliveNext</span></span>
<span class="line"><span>    c.aliveNext = c.alive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    liveCount := c.liveNeighbors(cells)</span></span>
<span class="line"><span>    if c.alive {</span></span>
<span class="line"><span>		// 1. 当任何一个存活的 cell 的附近少于 2 个存活的 cell 时，该 cell 将会消亡，就像人口过少所导致的结果一样</span></span>
<span class="line"><span>        if liveCount &lt; 2 {</span></span>
<span class="line"><span>            c.aliveNext = false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 2. 当任何一个存活的 cell 的附近有 2 至 3 个存活的 cell 时，该 cell 在下一代中仍然存活。</span></span>
<span class="line"><span>        if liveCount == 2 || liveCount == 3 {</span></span>
<span class="line"><span>            c.aliveNext = true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 3. 当任何一个存活的 cell 的附近多于 3 个存活的 cell 时，该 cell 将会消亡，就像人口过多所导致的结果一样</span></span>
<span class="line"><span>        if liveCount &gt; 3 {</span></span>
<span class="line"><span>            c.aliveNext = false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>		// 4. 任何一个消亡的 cell 附近刚好有 3 个存活的 cell，该 cell 会变为存活的状态，就像重生一样。</span></span>
<span class="line"><span>        if liveCount == 3 {</span></span>
<span class="line"><span>            c.aliveNext = true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// liveNeighbors 函数返回当前 cell 附近存活的 cell 数</span></span>
<span class="line"><span>func (c *cell) liveNeighbors(cells [][]*cell) int {</span></span>
<span class="line"><span>    var liveCount int</span></span>
<span class="line"><span>    add := func(x, y int) {</span></span>
<span class="line"><span>        // If we&#39;re at an edge, check the other side of the board.</span></span>
<span class="line"><span>        if x == len(cells) {</span></span>
<span class="line"><span>            x = 0</span></span>
<span class="line"><span>        } else if x == -1 {</span></span>
<span class="line"><span>            x = len(cells) - 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if y == len(cells[x]) {</span></span>
<span class="line"><span>            y = 0</span></span>
<span class="line"><span>        } else if y == -1 {</span></span>
<span class="line"><span>            y = len(cells[x]) - 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if cells[x][y].alive {</span></span>
<span class="line"><span>            liveCount++</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    add(c.x-1, c.y)   // To the left</span></span>
<span class="line"><span>    add(c.x+1, c.y)   // To the right</span></span>
<span class="line"><span>    add(c.x, c.y+1)   // up</span></span>
<span class="line"><span>    add(c.x, c.y-1)   // down</span></span>
<span class="line"><span>    add(c.x-1, c.y+1) // top-left</span></span>
<span class="line"><span>    add(c.x+1, c.y+1) // top-right</span></span>
<span class="line"><span>    add(c.x-1, c.y-1) // bottom-left</span></span>
<span class="line"><span>    add(c.x+1, c.y-1) // bottom-right</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return liveCount</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>checkState</code> 中我们设置当前状态（<code>alive</code>） 等于我们最近迭代结果（<code>aliveNext</code>）。接下来我们计数邻居数量，并根据游戏的规则来决定 <code>aliveNext</code> 状态。该规则是比较清晰的，而且我们在上面的代码当中也有说明，所以这里不再赘述。</p><p>更加值得注意的是 <code>liveNeighbors</code> 函数里，我们返回的是当前处于存活（<code>alive</code>）状态的细胞的邻居个数。我们定义了一个叫做 <code>add</code> 的内嵌函数，它会对 <code>X</code> 和 <code>Y</code> 坐标做一些重复性的验证。它所做的事情是检查我们传递的数字是否超出了范围——比如说，如果细胞 <code>(X=0,Y=5)</code> 想要验证它左边的细胞，它就得验证面板另一边的细胞 <code>(X=9,Y=5)</code>，Y 轴与之类似。</p><p>在 <code>add</code> 内嵌函数后面，我们给当前细胞附近的八个细胞分别调用 <code>add</code> 函数，示意如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[</span></span>
<span class="line"><span>    [-, -, -],</span></span>
<span class="line"><span>    [N, N, N],</span></span>
<span class="line"><span>    [N, C, N],</span></span>
<span class="line"><span>    [N, N, N],</span></span>
<span class="line"><span>    [-, -, -]</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>在该示意中，每一个叫做 N 的细胞是 C 的邻居。</p><p>现在是我们的 <code>main</code> 函数，这里我们执行核心游戏循环，调用每个细胞的 <code>checkState</code> 函数进行绘制：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for !window.ShouldClose() {</span></span>
<span class="line"><span>        for x := range cells {</span></span>
<span class="line"><span>            for _, c := range cells[x] {</span></span>
<span class="line"><span>                c.checkState(cells)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        draw(cells, window, program)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在我们的游戏逻辑全都设置好了，我们需要修改细胞绘制函数来跳过绘制不存活的细胞：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func (c *cell) draw() {</span></span>
<span class="line"><span>    if !c.alive {</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    gl.BindVertexArray(c.drawable)</span></span>
<span class="line"><span>    gl.DrawArrays(gl.TRIANGLES, 0, int32(len(square)/3))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果我们现在运行这个游戏，你将看到一个纯黑的屏幕，而不是我们辛苦工作后应该看到生命模拟。为什么呢？其实这正是模拟在工作。因为我们没有活着的细胞，所以就一个都不会绘制出来。</p><p>现在完善这个函数。回到 <code>makeCells</code> 函数，我们用 <code>0.0</code> 到 <code>1.0</code> 之间的一个随机数来设置游戏的初始状态。我们会定义一个大小为 <code>0.15</code> 的常量阈值，也就是说每个细胞都有 15% 的几率处于存活状态。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;math/rand&quot;</span></span>
<span class="line"><span>    &quot;time&quot;</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const (</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    threshold = 0.15</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func makeCells() [][]*cell {</span></span>
<span class="line"><span>    rand.Seed(time.Now().UnixNano())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cells := make([][]*cell, rows, rows)</span></span>
<span class="line"><span>    for x := 0; x &lt; rows; x++ {</span></span>
<span class="line"><span>        for y := 0; y &lt; columns; y++ {</span></span>
<span class="line"><span>            c := newCell(x, y)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            c.alive = rand.Float64() &lt; threshold</span></span>
<span class="line"><span>            c.aliveNext = c.alive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            cells[x] = append(cells[x], c)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return cells</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们首先增加两个引入：随机（<code>math/rand</code>）和时间（<code>time</code>），并定义我们的常量阈值。然后在 <code>makeCells</code> 中我们使用当前时间作为随机种子，给每个游戏一个独特的起始状态。你也可也指定一个特定的种子值，来始终得到一个相同的游戏，这在你想重放某个有趣的模拟时很有用。</p><p>接下来在循环中，在用 <code>newCell</code> 函数创造一个新的细胞时，我们根据随机浮点数的大小设置它的存活状态，随机数在 <code>0.0</code> 到 <code>1.0</code> 之间，如果比阈值（<code>0.15</code>）小，就是存活状态。再次强调，这意味着每个细胞在开始时都有 15% 的几率是存活的。你可以修改数值大小，增加或者减少当前游戏中存活的细胞。我们还把 <code>aliveNext</code> 设成 <code>alive</code> 状态，否则在第一次迭代之后我们会发现一大片细胞消亡了，这是因为 <code>aliveNext</code> 将永远是 <code>false</code>。</p><p>现在继续运行它，你很有可能看到细胞们一闪而过，但你却无法理解这是为什么。原因可能在于你的电脑太快了，在你能够看清楚之前就运行了（甚至完成了）模拟过程。</p><p>让我们降低游戏速度，在主循环中引入一个帧率（FPS）限制：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const (</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fps = 2</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for !window.ShouldClose() {</span></span>
<span class="line"><span>        t := time.Now()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for x := range cells {</span></span>
<span class="line"><span>            for _, c := range cells[x] {</span></span>
<span class="line"><span>                c.checkState(cells)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if err := draw(prog, window, cells); err != nil {</span></span>
<span class="line"><span>            panic(err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        time.Sleep(time.Second/time.Duration(fps) - time.Since(t))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在你能给看出一些图案了，尽管它变换的很慢。把 FPS 加到 10，把方格的尺寸加到 100x100，你就能看到更真实的模拟：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const (</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rows = 100</span></span>
<span class="line"><span>    columns = 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fps = 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>)</span></span></code></pre></div><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-1.gif" alt=" “Conway&#39;s Game of Life” - 示例游戏"></p><p>试着修改常量，看看它们是怎么影响模拟过程的 —— 这是你用 Go 语言写的第一个 OpenGL 程序，很酷吧？</p><h3 id="进阶内容" tabindex="-1">进阶内容？ <a class="header-anchor" href="#进阶内容" aria-label="Permalink to “进阶内容？”">​</a></h3><p>这是《OpenGL 与 Go 教程》的最后一节，但是这不意味着到此而止。这里有些新的挑战，能够增进你对 OpenGL （以及 Go）的理解。</p>`,32)),a("ol",null,[n[14]||(n[14]=a("li",null,"给每个细胞一种不同的颜色。",-1)),a("li",null,[n[12]||(n[12]=s("让用户能够通过命令行参数指定格子尺寸、帧率、种子和阈值。在 GitHub 上的 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[11]||(n[11]=[s("github.com/KyleBanks/conways-gol",-1)])]),_:1}),n[13]||(n[13]=s(" 里你可以看到一个已经实现的程序。",-1))]),n[15]||(n[15]=a("li",null,"把格子的形状变成其它更有意思的，比如六边形。",-1)),n[16]||(n[16]=a("li",null,"用颜色表示细胞的状态 —— 比如，在第一帧把存活状态的格子设成绿色，如果它们存活了超过三帧的时间，就变成黄色。",-1)),n[17]||(n[17]=a("li",null,"如果模拟过程结束了，就自动关闭窗口，也就是说所有细胞都消亡了，或者是最后两帧里没有格子的状态有改变。",-1)),n[18]||(n[18]=a("li",null,"将着色器源代码放到单独的文件中，而不是把它们用字符串的形式放在 Go 的源代码中。",-1))]),n[38]||(n[38]=i('<h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>希望这篇教程对想要入门 OpenGL （或者是 Go）的人有所帮助！这很有趣，因此我也希望理解学习它也很有趣。</p><p>正如我所说的，OpenGL 可能是非常恐怖的，但只要你开始着手了就不会太差。你只用制定一个个可达成的小目标，然后享受每一次成功，因为尽管 OpenGL 不会总像它看上去的那么难，但也肯定有些难懂的东西。我发现，当遇到一个难于理解用 go-gl 生成的代码的 OpenGL 问题时，你总是可以参考一下在网上更流行的当作教程的 C 语言代码，这很有用。通常 C 语言和 Go 语言的唯一区别是在 Go 中，gl 函数的前缀是 <code>gl.</code> 而不是 <code>gl</code>，常量的前缀是 <code>gl</code> 而不是 <code>GL_</code>。这可以极大地增加了你的绘制知识！</p>',3)),a("p",null,[n[20]||(n[20]=s("该教程的完整源代码可从 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[19]||(n[19]=[s("GitHub",-1)])]),_:1}),n[21]||(n[21]=s(" 上获得。",-1))]),n[39]||(n[39]=i(`<h3 id="回顾" tabindex="-1">回顾 <a class="header-anchor" href="#回顾" aria-label="Permalink to “回顾”">​</a></h3><p>这是 main.go 文件最终的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;log&quot;</span></span>
<span class="line"><span>	&quot;math/rand&quot;</span></span>
<span class="line"><span>	&quot;runtime&quot;</span></span>
<span class="line"><span>	&quot;strings&quot;</span></span>
<span class="line"><span>	&quot;time&quot;</span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>	rows    = 100</span></span>
<span class="line"><span>	columns = 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	threshold = 0.15</span></span>
<span class="line"><span>	fps       = 10</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var (</span></span>
<span class="line"><span>	square = []float32{</span></span>
<span class="line"><span>		-0.5, 0.5, 0,</span></span>
<span class="line"><span>		-0.5, -0.5, 0,</span></span>
<span class="line"><span>		0.5, -0.5, 0,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		-0.5, 0.5, 0,</span></span>
<span class="line"><span>		0.5, 0.5, 0,</span></span>
<span class="line"><span>		0.5, -0.5, 0,</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type cell struct {</span></span>
<span class="line"><span>	drawable uint32</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	alive     bool</span></span>
<span class="line"><span>	aliveNext bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	x int</span></span>
<span class="line"><span>	y int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	runtime.LockOSThread()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	window := initGlfw()</span></span>
<span class="line"><span>	defer glfw.Terminate()</span></span>
<span class="line"><span>	program := initOpenGL()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cells := makeCells()</span></span>
<span class="line"><span>	for !window.ShouldClose() {</span></span>
<span class="line"><span>		t := time.Now()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		for x := range cells {</span></span>
<span class="line"><span>			for _, c := range cells[x] {</span></span>
<span class="line"><span>				c.checkState(cells)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		draw(cells, window, program)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		time.Sleep(time.Second/time.Duration(fps) - time.Since(t))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func draw(cells [][]*cell, window *glfw.Window, program uint32) {</span></span>
<span class="line"><span>	gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)</span></span>
<span class="line"><span>	gl.UseProgram(program)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for x := range cells {</span></span>
<span class="line"><span>		for _, c := range cells[x] {</span></span>
<span class="line"><span>			c.draw()</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	glfw.PollEvents()</span></span>
<span class="line"><span>	window.SwapBuffers()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func makeCells() [][]*cell {</span></span>
<span class="line"><span>	rand.Seed(time.Now().UnixNano())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cells := make([][]*cell, rows, rows)</span></span>
<span class="line"><span>	for x := 0; x &lt; rows; x++ {</span></span>
<span class="line"><span>		for y := 0; y &lt; columns; y++ {</span></span>
<span class="line"><span>			c := newCell(x, y)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			c.alive = rand.Float64() &lt; threshold</span></span>
<span class="line"><span>			c.aliveNext = c.alive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			cells[x] = append(cells[x], c)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return cells</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func newCell(x, y int) *cell {</span></span>
<span class="line"><span>	points := make([]float32, len(square), len(square))</span></span>
<span class="line"><span>	copy(points, square)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for i := 0; i &lt; len(points); i++ {</span></span>
<span class="line"><span>		var position float32</span></span>
<span class="line"><span>		var size float32</span></span>
<span class="line"><span>		switch i % 3 {</span></span>
<span class="line"><span>		case 0:</span></span>
<span class="line"><span>			size = 1.0 / float32(columns)</span></span>
<span class="line"><span>			position = float32(x) * size</span></span>
<span class="line"><span>		case 1:</span></span>
<span class="line"><span>			size = 1.0 / float32(rows)</span></span>
<span class="line"><span>			position = float32(y) * size</span></span>
<span class="line"><span>		default:</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if points[i] &lt; 0 {</span></span>
<span class="line"><span>			points[i] = (position * 2) - 1</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			points[i] = ((position + size) * 2) - 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return &amp;cell{</span></span>
<span class="line"><span>		drawable: makeVao(points),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		x: x,</span></span>
<span class="line"><span>		y: y,</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (c *cell) draw() {</span></span>
<span class="line"><span>	if !c.alive {</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	gl.BindVertexArray(c.drawable)</span></span>
<span class="line"><span>	gl.DrawArrays(gl.TRIANGLES, 0, int32(len(square)/3))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// checkState 函数决定下一次游戏循环时的 cell 状态</span></span>
<span class="line"><span>func (c *cell) checkState(cells [][]*cell) {</span></span>
<span class="line"><span>    c.alive = c.aliveNext</span></span>
<span class="line"><span>    c.aliveNext = c.alive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    liveCount := c.liveNeighbors(cells)</span></span>
<span class="line"><span>    if c.alive {</span></span>
<span class="line"><span>		// 1. 当任何一个存活的 cell 的附近少于 2 个存活的 cell 时，该 cell 将会消亡，就像人口过少所导致的结果一样</span></span>
<span class="line"><span>        if liveCount &lt; 2 {</span></span>
<span class="line"><span>            c.aliveNext = false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 2. 当任何一个存活的 cell 的附近有 2 至 3 个存活的 cell 时，该 cell 在下一代中仍然存活。</span></span>
<span class="line"><span>        if liveCount == 2 || liveCount == 3 {</span></span>
<span class="line"><span>            c.aliveNext = true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 3. 当任何一个存活的 cell 的附近多于 3 个存活的 cell 时，该 cell 将会消亡，就像人口过多所导致的结果一样</span></span>
<span class="line"><span>        if liveCount &gt; 3 {</span></span>
<span class="line"><span>            c.aliveNext = false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>		// 4. 任何一个消亡的 cell 附近刚好有 3 个存活的 cell，该 cell 会变为存活的状态，就像重生一样。</span></span>
<span class="line"><span>        if liveCount == 3 {</span></span>
<span class="line"><span>            c.aliveNext = true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// liveNeighbors 函数返回当前 cell 附近存活的 cell 数</span></span>
<span class="line"><span>func (c *cell) liveNeighbors(cells [][]*cell) int {</span></span>
<span class="line"><span>	var liveCount int</span></span>
<span class="line"><span>	add := func(x, y int) {</span></span>
<span class="line"><span>		// If we&#39;re at an edge, check the other side of the board.</span></span>
<span class="line"><span>		if x == len(cells) {</span></span>
<span class="line"><span>			x = 0</span></span>
<span class="line"><span>		} else if x == -1 {</span></span>
<span class="line"><span>			x = len(cells) - 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if y == len(cells[x]) {</span></span>
<span class="line"><span>			y = 0</span></span>
<span class="line"><span>		} else if y == -1 {</span></span>
<span class="line"><span>			y = len(cells[x]) - 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if cells[x][y].alive {</span></span>
<span class="line"><span>			liveCount++</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	add(c.x-1, c.y)   // To the left</span></span>
<span class="line"><span>	add(c.x+1, c.y)   // To the right</span></span>
<span class="line"><span>	add(c.x, c.y+1)   // up</span></span>
<span class="line"><span>	add(c.x, c.y-1)   // down</span></span>
<span class="line"><span>	add(c.x-1, c.y+1) // top-left</span></span>
<span class="line"><span>	add(c.x+1, c.y+1) // top-right</span></span>
<span class="line"><span>	add(c.x-1, c.y-1) // bottom-left</span></span>
<span class="line"><span>	add(c.x+1, c.y-1) // bottom-right</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return liveCount</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// initGlfw 初始化 glfw，返回一个可用的 Window</span></span>
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
<span class="line"><span>// makeVao 初始化并从提供的点里面返回一个顶点数组</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>请在 Twitter 上告诉我这篇文章对你是否有帮助。</p>`,4)),a("p",null,[l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...n[22]||(n[22]=[s("@kylewbanks",-1)])]),_:1})]),n[40]||(n[40]=a("p",null,"或者在 Twitter 下方关注我以便及时获取最新文章！",-1)),n[41]||(n[41]=a("hr",null,null,-1)),a("p",null,[n[24]||(n[24]=s("via: ",-1)),l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...n[23]||(n[23]=[s("https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game",-1)])]),_:1})]),a("p",null,[n[28]||(n[28]=s("作者：",-1)),l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...n[25]||(n[25]=[s("kylewbanks",-1)])]),_:1}),n[29]||(n[29]=s(" 译者：",-1)),l(p,{href:"https://github.com/GitFuture"},{default:e(()=>[...n[26]||(n[26]=[s("GitFuture",-1)])]),_:1}),n[30]||(n[30]=s(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...n[27]||(n[27]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[33]||(n[33]=s("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[31]||(n[31]=[s("LCTT",-1)])]),_:1}),n[34]||(n[34]=s(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...n[32]||(n[32]=[s("Linux中国",-1)])]),_:1}),n[35]||(n[35]=s(" 荣誉推出",-1))])])}const x=t(d,[["render",g]]);export{w as __pageData,x as default};
