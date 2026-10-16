import{_ as i,a0 as t,w as c,s as o,I as a,x as n,a1 as l,A as e,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"OpenGL 与 Go 教程（二）绘制游戏面板 | LCTT x X-CMD","titleTemplate":false,"description":"OpenGL 与 Go 教程（二）绘制游戏面板 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"OpenGL 与 Go 教程（二）绘制游戏面板 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"OpenGL 与 Go 教程（二）绘制游戏面板 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170312 OpenGL  Go Tutorial Part 2 Drawing the Game Board","title":"OpenGL 与 Go 教程（二）绘制游戏面板","tag":"201710","desc":""},"relativePath":"201710/20170312 OpenGL  Go Tutorial Part 2 Drawing the Game Board.md","filePath":"[post].md"}'),d={name:"201710/20170312 OpenGL  Go Tutorial Part 2 Drawing the Game Board.md"};function g(u,s,h,f,k,w){const p=t("Link");return c(),o("div",null,[s[25]||(s[25]=a("h1",{id:"opengl-与-go-教程-二-绘制游戏面板",tabindex:"-1"},[n("OpenGL 与 Go 教程（二）绘制游戏面板 "),a("a",{class:"header-anchor",href:"#opengl-与-go-教程-二-绘制游戏面板","aria-label":"Permalink to “OpenGL 与 Go 教程（二）绘制游戏面板”"},"​")],-1)),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-8933-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("第一节: Hello, OpenGL",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board"},{default:e(()=>[...s[1]||(s[1]=[n("第二节: 绘制游戏面板",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...s[2]||(s[2]=[n("第三节：实现游戏功能",-1)])]),_:1})])]),a("p",null,[s[4]||(s[4]=n("这篇教程的所有源代码都可以在 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...s[3]||(s[3]=[n("GitHub",-1)])]),_:1}),s[5]||(s[5]=n(" 上找到。",-1))]),a("p",null,[s[7]||(s[7]=n("欢迎回到《OpenGL 与 Go 教程》。如果你还没有看过",-1)),l(p,{href:"https://linux.cn/article-8933-1.html"},{default:e(()=>[...s[6]||(s[6]=[n("第一节",-1)])]),_:1}),s[8]||(s[8]=n("，那就要回过头去看看那一节。",-1))]),s[26]||(s[26]=r(`<p>你现在应该能够创造一个漂亮的白色三角形，但我们不会把三角形当成我们游戏的基本单元，是时候把三角形变成正方形了，然后我们会做出一个完整的方格。</p><p>让我们现在开始做吧！</p><h3 id="利用三角形绘制方形" tabindex="-1">利用三角形绘制方形 <a class="header-anchor" href="#利用三角形绘制方形" aria-label="Permalink to “利用三角形绘制方形”">​</a></h3><p>在我们绘制方形之前，先把三角形变成直角三角形。打开 <code>main.go</code> 文件，把 <code>triangle</code> 的定义改成像这个样子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>triangle = []float32{</span></span>
<span class="line"><span>    -0.5, 0.5, 0,</span></span>
<span class="line"><span>    -0.5, -0.5, 0,</span></span>
<span class="line"><span>    0.5, -0.5, 0,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们做的事情是，把最上面的顶点 X 坐标移动到左边（也就是变为 <code>-0.5</code>），这就变成了像这样的三角形：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-4.png" alt="Conway&#39;s Game of Life - 右弦三角形"></p><p>很简单，对吧？现在让我们用两个这样的三角形顶点做成正方形。把 <code>triangle</code> 重命名为 <code>square</code>，然后添加第二个倒置的三角形的顶点数据，把直角三角形变成这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>square = []float32{</span></span>
<span class="line"><span>    -0.5, 0.5, 0,</span></span>
<span class="line"><span>    -0.5, -0.5, 0,</span></span>
<span class="line"><span>    0.5, -0.5, 0,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -0.5, 0.5, 0,</span></span>
<span class="line"><span>    0.5, 0.5, 0,</span></span>
<span class="line"><span>    0.5, -0.5, 0,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意：你也要把在 <code>main</code> 和 <code>draw</code> 里面命名的 <code>triangle</code> 改为 <code>square</code>。</p><p>我们通过添加三个顶点，把顶点数增加了一倍，这三个顶点就是右上角的三角形，用来拼成方形。运行它看看效果：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-5.png" alt="Conway&#39;s Game of Life - 两个三角形构成方形"></p><p>很好，现在我们能够绘制正方形了！OpenGL 一点都不难，对吧？</p><h3 id="在窗口中绘制方形格子" tabindex="-1">在窗口中绘制方形格子 <a class="header-anchor" href="#在窗口中绘制方形格子" aria-label="Permalink to “在窗口中绘制方形格子”">​</a></h3><p>现在我们能画一个方形，怎么画 100 个吗？我们来创建一个 <code>cell</code> 结构体，用来表示格子的每一个单元，因此我们能够很灵活的选择绘制的数量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type cell struct {</span></span>
<span class="line"><span>    drawable uint32</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    x int</span></span>
<span class="line"><span>    y int</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>cell</code> 结构体包含一个 <code>drawable</code> 属性，这是一个顶点数组对象，就像我们在之前创建的一样，这个结构体还包含 X 和 Y 坐标，用来表示这个格子的位置。</p><p>我们还需要两个常量，用来设定格子的大小和形状：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const (</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rows = 10</span></span>
<span class="line"><span>    columns = 10</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>现在我们添加一个创建格子的函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func makeCells() [][]*cell {</span></span>
<span class="line"><span>    cells := make([][]*cell, rows, rows)</span></span>
<span class="line"><span>    for x := 0; x &lt; rows; x++ {</span></span>
<span class="line"><span>        for y := 0; y &lt; columns; y++ {</span></span>
<span class="line"><span>            c := newCell(x, y)</span></span>
<span class="line"><span>            cells[x] = append(cells[x], c)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return cells</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里我们创建多维的<ruby>切片<rt>slice</rt></ruby>，代表我们的游戏面板，用名为 <code>newCell</code> 的新函数创建的 <code>cell</code> 来填充矩阵的每个元素，我们待会就来实现 <code>newCell</code> 这个函数。</p><p>在接着往下阅读前，我们先花一点时间来看看 <code>makeCells</code> 函数做了些什么。我们创造了一个切片，这个切片的长度和格子的行数相等，每一个切片里面都有一个<ruby>细胞<rt>cell</rt></ruby>的切片，这些细胞的数量与列数相等。如果我们把 <code>rows</code> 和 <code>columns</code> 都设定成 2，那么就会创建如下的矩阵：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[</span></span>
<span class="line"><span>    [cell, cell],</span></span>
<span class="line"><span>    [cell, cell]</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>还可以创建一个更大的矩阵，包含 <code>10x10</code> 个细胞：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[</span></span>
<span class="line"><span>    [cell, cell, cell, cell, cell, cell, cell, cell, cell, cell],</span></span>
<span class="line"><span>    [cell, cell, cell, cell, cell, cell, cell, cell, cell, cell],</span></span>
<span class="line"><span>    [cell, cell, cell, cell, cell, cell, cell, cell, cell, cell],</span></span>
<span class="line"><span>    [cell, cell, cell, cell, cell, cell, cell, cell, cell, cell],</span></span>
<span class="line"><span>    [cell, cell, cell, cell, cell, cell, cell, cell, cell, cell],</span></span>
<span class="line"><span>    [cell, cell, cell, cell, cell, cell, cell, cell, cell, cell],</span></span>
<span class="line"><span>    [cell, cell, cell, cell, cell, cell, cell, cell, cell, cell],</span></span>
<span class="line"><span>    [cell, cell, cell, cell, cell, cell, cell, cell, cell, cell],</span></span>
<span class="line"><span>    [cell, cell, cell, cell, cell, cell, cell, cell, cell, cell],</span></span>
<span class="line"><span>    [cell, cell, cell, cell, cell, cell, cell, cell, cell, cell]</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>现在应该理解了我们创造的矩阵的形状和表示方法。让我们看看 <code>newCell</code> 函数到底是怎么填充矩阵的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func newCell(x, y int) *cell {</span></span>
<span class="line"><span>    points := make([]float32, len(square), len(square))</span></span>
<span class="line"><span>    copy(points, square)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for i := 0; i &lt; len(points); i++ {</span></span>
<span class="line"><span>        var position float32</span></span>
<span class="line"><span>        var size float32</span></span>
<span class="line"><span>        switch i % 3 {</span></span>
<span class="line"><span>        case 0:</span></span>
<span class="line"><span>                size = 1.0 / float32(columns)</span></span>
<span class="line"><span>                position = float32(x) * size</span></span>
<span class="line"><span>        case 1:</span></span>
<span class="line"><span>                size = 1.0 / float32(rows)</span></span>
<span class="line"><span>                position = float32(y) * size</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if points[i] &lt; 0 {</span></span>
<span class="line"><span>                points[i] = (position * 2) - 1</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>                points[i] = ((position + size) * 2) - 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return &amp;cell{</span></span>
<span class="line"><span>        drawable: makeVao(points),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        x: x,</span></span>
<span class="line"><span>        y: y,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个函数里有很多内容，我们把它分成几个部分。我们做的第一件事是复制了 <code>square</code> 的定义。这让我们能够修改该定义，定制当前的细胞位置，而不会影响其它使用 <code>square</code> 切片定义的细胞。然后我们基于当前索引迭代 <code>points</code> 副本。我们用求余数的方法来判断我们是在操作 X 坐标（<code>i % 3 == 0</code>），还是在操作 Y 坐标（<code>i % 3 == 1</code>）（跳过 Z 坐标是因为我们仅在二维层面上进行操作），跟着确定细胞的大小（也就是占据整个游戏面板的比例），当然它的位置是基于细胞在 <code>相对游戏面板的</code> X 和 Y 坐标。</p><p>接着，我们改变那些包含在 <code>square</code> 切片中定义的 <code>0.5</code>，<code>0</code>， <code>-0.5</code> 这样的点。如果点小于 0，我们就把它设置成原来的 2 倍（因为 OpenGL 坐标的范围在 <code>-1</code> 到 <code>1</code> 之间，范围大小是 2），减 1 是为了归一化 OpenGL 坐标。如果点大于等于 0，我们的做法还是一样的，不过要加上我们计算出的尺寸。</p><p>这样做是为了设置每个细胞的大小，这样它就能只填充它在面板中的部分。因为我们有 10 行 10 列，每一个格子能分到游戏面板的 10% 宽度和高度。</p><p>最后，确定了所有点的位置和大小，我们用提供的 X 和 Y 坐标创建一个 <code>cell</code>，并设置 <code>drawable</code> 字段与我们刚刚操作 <code>points</code> 得到的顶点数组对象（vao）一致。</p><p>好了，现在我们在 <code>main</code> 函数里可以移去对 <code>makeVao</code> 的调用了，用 <code>makeCells</code> 代替。我们还修改了 <code>draw</code>，让它绘制一系列的细胞而不是一个 <code>vao</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // vao := makeVao(square)</span></span>
<span class="line"><span>    cells := makeCells()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for !window.ShouldClose() {</span></span>
<span class="line"><span>        draw(cells, window, program)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func draw(cells [][]*cell, window *glfw.Window, program uint32) {</span></span>
<span class="line"><span>    gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)</span></span>
<span class="line"><span>    gl.UseProgram(program)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // TODO</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    glfw.PollEvents()</span></span>
<span class="line"><span>    window.SwapBuffers()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在我们要让每个细胞知道怎么绘制出自己。在 <code>cell</code> 里面添加一个 <code>draw</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func (c *cell) draw() {</span></span>
<span class="line"><span>    gl.BindVertexArray(c.drawable)</span></span>
<span class="line"><span>    gl.DrawArrays(gl.TRIANGLES, 0, int32(len(square) / 3))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这看上去很熟悉，它很像我们之前在 <code>vao</code> 里写的 <code>draw</code>，唯一的区别是我们的 <code>BindVertexArray</code> 函数用的是 <code>c.drawable</code>，这是我们在 <code>newCell</code> 中创造的细胞的 <code>vao</code>。</p><p>回到 main 中的 <code>draw</code> 函数上，我们可以循环每个细胞，让它们自己绘制自己：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func draw(cells [][]*cell, window *glfw.Window, program uint32) {</span></span>
<span class="line"><span>    gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)</span></span>
<span class="line"><span>    gl.UseProgram(program)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for x := range cells {</span></span>
<span class="line"><span>        for _, c := range cells[x] {</span></span>
<span class="line"><span>            c.draw()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    glfw.PollEvents()</span></span>
<span class="line"><span>    window.SwapBuffers()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如你所见，我们循环每一个细胞，调用它的 <code>draw</code> 函数。如果运行这段代码，你能看到像下面这样的东西：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-6.png" alt="Conway&#39;s Game of Life - 全部格子"></p><p>这是你想看到的吗？我们做的是在格子里为每一行每一列创建了一个方块，然后给它上色，这就填满了整个面板！</p><p>注释掉 for 循环，我们就可以看到一个明显独立的细胞，像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// for x := range cells {</span></span>
<span class="line"><span>//     for _, c := range cells[x] {</span></span>
<span class="line"><span>//         c.draw()</span></span>
<span class="line"><span>//     }</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cells[2][3].draw()</span></span></code></pre></div><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-7.png" alt="Conway&#39;s Game of Life - 一个单独的细胞"></p><p>这只绘制坐标在 <code>(X=2, Y=3)</code> 的格子。你可以看到，每一个独立的细胞占据着面板的一小块部分，并且负责绘制自己那部分空间。我们也能看到游戏面板有自己的原点，也就是坐标为 <code>(X=0, Y=0)</code> 的点，在窗口的左下方。这仅仅是我们的 <code>newCell</code> 函数计算位置的方式，也可以用右上角，右下角，左上角，中央，或者其它任何位置当作原点。</p><p>接着往下做，移除 <code>cells[2][3].draw()</code> 这一行，取消 for 循环的那部分注释，变成之前那样全部绘制的样子。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>好了，我们现在能用两个三角形画出一个正方形了，我们还有一个游戏的面板了！我们该为此自豪，目前为止我们已经接触到了很多零碎的内容，老实说，最难的部分还在前面等着我们！</p><p>在接下来的第三节，我们会实现游戏核心逻辑，看到很酷的东西！</p><h3 id="回顾" tabindex="-1">回顾 <a class="header-anchor" href="#回顾" aria-label="Permalink to “回顾”">​</a></h3><p>这是这一部分教程中 <code>main.go</code> 文件的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>	rows    = 10</span></span>
<span class="line"><span>	columns = 10</span></span>
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
<span class="line"><span>		draw(cells, window, program)</span></span>
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
<span class="line"><span>	cells := make([][]*cell, rows, rows)</span></span>
<span class="line"><span>	for x := 0; x &lt; rows; x++ {</span></span>
<span class="line"><span>		for y := 0; y &lt; columns; y++ {</span></span>
<span class="line"><span>			c := newCell(x, y)</span></span>
<span class="line"><span>			cells[x] = append(cells[x], c)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return cells</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
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
<span class="line"><span>	gl.BindVertexArray(c.drawable)</span></span>
<span class="line"><span>	gl.DrawArrays(gl.TRIANGLES, 0, int32(len(square)/3))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化 glfw，返回一个可用的 Window</span></span>
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
<span class="line"><span>// 初始化 OpenGL 并返回一个可用的着色器程序</span></span>
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
<span class="line"><span>// 初始化并返回由 points 提供的顶点数组</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,53)),a("p",null,[s[10]||(s[10]=n("让我知道这篇文章对你有没有帮助，在 Twitter ",-1)),l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...s[9]||(s[9]=[n("@kylewbanks",-1)])]),_:1}),s[11]||(s[11]=n(" 或者下方的连接，关注我以便获取最新的文章！",-1))]),s[27]||(s[27]=a("hr",null,null,-1)),a("p",null,[s[13]||(s[13]=n("via: ",-1)),l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board"},{default:e(()=>[...s[12]||(s[12]=[n("https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board",-1)])]),_:1})]),a("p",null,[s[17]||(s[17]=n("作者：",-1)),l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...s[14]||(s[14]=[n("kylewbanks",-1)])]),_:1}),s[18]||(s[18]=n(" 译者：",-1)),l(p,{href:"https://github.com/GitFuture"},{default:e(()=>[...s[15]||(s[15]=[n("GitFtuture",-1)])]),_:1}),s[19]||(s[19]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[16]||(s[16]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[20]||(s[20]=[n("LCTT",-1)])]),_:1}),s[23]||(s[23]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[21]||(s[21]=[n("Linux中国",-1)])]),_:1}),s[24]||(s[24]=n(" 荣誉推出",-1))])])}const C=i(d,[["render",g]]);export{y as __pageData,C as default};
