import{_ as i,a0 as t,w as c,s as o,I as a,x as n,a1 as l,A as e,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"OpenGL 與 Go 教程（二）繪製遊戲面板 | LCTT x X-CMD","titleTemplate":false,"description":"OpenGL 與 Go 教程（二）繪製遊戲面板 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"OpenGL 與 Go 教程（二）繪製遊戲面板 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"OpenGL 與 Go 教程（二）繪製遊戲面板 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170312 OpenGL  Go Tutorial Part 2 Drawing the Game Board","title":"OpenGL 與 Go 教程（二）繪製遊戲面板","tag":"201710","desc":""},"relativePath":"201710/20170312 OpenGL  Go Tutorial Part 2 Drawing the Game Board.md","filePath":"[post].md"}'),d={name:"201710/20170312 OpenGL  Go Tutorial Part 2 Drawing the Game Board.md"};function g(u,s,h,f,k,w){const p=t("Link");return c(),o("div",null,[s[25]||(s[25]=a("h1",{id:"opengl-與-go-教程-二-繪製遊戲面板",tabindex:"-1"},[n("OpenGL 與 Go 教程（二）繪製遊戲面板 "),a("a",{class:"header-anchor",href:"#opengl-與-go-教程-二-繪製遊戲面板","aria-label":"Permalink to “OpenGL 與 Go 教程（二）繪製遊戲面板”"},"​")],-1)),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-8933-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("第一節: Hello, OpenGL",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board"},{default:e(()=>[...s[1]||(s[1]=[n("第二節: 繪製遊戲面板",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...s[2]||(s[2]=[n("第三節：實現遊戲功能",-1)])]),_:1})])]),a("p",null,[s[4]||(s[4]=n("這篇教程的所有源代碼都可以在 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...s[3]||(s[3]=[n("GitHub",-1)])]),_:1}),s[5]||(s[5]=n(" 上找到。",-1))]),a("p",null,[s[7]||(s[7]=n("歡迎回到《OpenGL 與 Go 教程》。如果你還沒有看過",-1)),l(p,{href:"https://linux.cn/article-8933-1.html"},{default:e(()=>[...s[6]||(s[6]=[n("第一節",-1)])]),_:1}),s[8]||(s[8]=n("，那就要回過頭去看看那一節。",-1))]),s[26]||(s[26]=r(`<p>你現在應該能夠創造一個漂亮的白色三角形，但我們不會把三角形當成我們遊戲的基本單元，是時候把三角形變成正方形了，然後我們會做出一個完整的方格。</p><p>讓我們現在開始做吧！</p><h3 id="利用三角形繪製方形" tabindex="-1">利用三角形繪製方形 <a class="header-anchor" href="#利用三角形繪製方形" aria-label="Permalink to “利用三角形繪製方形”">​</a></h3><p>在我們繪製方形之前，先把三角形變成直角三角形。打開 <code>main.go</code> 文件，把 <code>triangle</code> 的定義改成像這個樣子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>triangle = []float32{</span></span>
<span class="line"><span>    -0.5, 0.5, 0,</span></span>
<span class="line"><span>    -0.5, -0.5, 0,</span></span>
<span class="line"><span>    0.5, -0.5, 0,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們做的事情是，把最上面的頂點 X 座標移動到左邊（也就是變為 <code>-0.5</code>），這就變成了像這樣的三角形：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-4.png" alt="Conway&#39;s Game of Life - 右弦三角形"></p><p>很簡單，對吧？現在讓我們用兩個這樣的三角形頂點做成正方形。把 <code>triangle</code> 重命名為 <code>square</code>，然後添加第二個倒置的三角形的頂點數據，把直角三角形變成這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>square = []float32{</span></span>
<span class="line"><span>    -0.5, 0.5, 0,</span></span>
<span class="line"><span>    -0.5, -0.5, 0,</span></span>
<span class="line"><span>    0.5, -0.5, 0,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -0.5, 0.5, 0,</span></span>
<span class="line"><span>    0.5, 0.5, 0,</span></span>
<span class="line"><span>    0.5, -0.5, 0,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意：你也要把在 <code>main</code> 和 <code>draw</code> 裏面命名的 <code>triangle</code> 改為 <code>square</code>。</p><p>我們通過添加三個頂點，把頂點數增加了一倍，這三個頂點就是右上角的三角形，用來拼成方形。運行它看看效果：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-5.png" alt="Conway&#39;s Game of Life - 兩個三角形構成方形"></p><p>很好，現在我們能夠繪製正方形了！OpenGL 一點都不難，對吧？</p><h3 id="在窗口中繪製方形格子" tabindex="-1">在窗口中繪製方形格子 <a class="header-anchor" href="#在窗口中繪製方形格子" aria-label="Permalink to “在窗口中繪製方形格子”">​</a></h3><p>現在我們能畫一個方形，怎麼畫 100 個嗎？我們來創建一個 <code>cell</code> 結構體，用來表示格子的每一個單元，因此我們能夠很靈活的選擇繪製的數量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type cell struct {</span></span>
<span class="line"><span>    drawable uint32</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    x int</span></span>
<span class="line"><span>    y int</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>cell</code> 結構體包含一個 <code>drawable</code> 屬性，這是一個頂點數組對象，就像我們在之前創建的一樣，這個結構體還包含 X 和 Y 座標，用來表示這個格子的位置。</p><p>我們還需要兩個常量，用來設定格子的大小和形狀：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const (</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rows = 10</span></span>
<span class="line"><span>    columns = 10</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>現在我們添加一個創建格子的函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func makeCells() [][]*cell {</span></span>
<span class="line"><span>    cells := make([][]*cell, rows, rows)</span></span>
<span class="line"><span>    for x := 0; x &lt; rows; x++ {</span></span>
<span class="line"><span>        for y := 0; y &lt; columns; y++ {</span></span>
<span class="line"><span>            c := newCell(x, y)</span></span>
<span class="line"><span>            cells[x] = append(cells[x], c)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return cells</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏我們創建多維的<ruby>切片<rt>slice</rt></ruby>，代表我們的遊戲面板，用名為 <code>newCell</code> 的新函數創建的 <code>cell</code> 來填充矩陣的每個元素，我們待會就來實現 <code>newCell</code> 這個函數。</p><p>在接着往下閲讀前，我們先花一點時間來看看 <code>makeCells</code> 函數做了些什麼。我們創造了一個切片，這個切片的長度和格子的行數相等，每一個切片裏面都有一個<ruby>細胞<rt>cell</rt></ruby>的切片，這些細胞的數量與列數相等。如果我們把 <code>rows</code> 和 <code>columns</code> 都設定成 2，那麼就會創建如下的矩陣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[</span></span>
<span class="line"><span>    [cell, cell],</span></span>
<span class="line"><span>    [cell, cell]</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>還可以創建一個更大的矩陣，包含 <code>10x10</code> 個細胞：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[</span></span>
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
<span class="line"><span>]</span></span></code></pre></div><p>現在應該理解了我們創造的矩陣的形狀和表示方法。讓我們看看 <code>newCell</code> 函數到底是怎麼填充矩陣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func newCell(x, y int) *cell {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>這個函數里有很多內容，我們把它分成幾個部分。我們做的第一件事是複製了 <code>square</code> 的定義。這讓我們能夠修改該定義，定製當前的細胞位置，而不會影響其它使用 <code>square</code> 切片定義的細胞。然後我們基於當前索引迭代 <code>points</code> 副本。我們用求餘數的方法來判斷我們是在操作 X 座標（<code>i % 3 == 0</code>），還是在操作 Y 座標（<code>i % 3 == 1</code>）（跳過 Z 座標是因為我們僅在二維層面上進行操作），跟着確定細胞的大小（也就是佔據整個遊戲面板的比例），當然它的位置是基於細胞在 <code>相對遊戲面板的</code> X 和 Y 座標。</p><p>接着，我們改變那些包含在 <code>square</code> 切片中定義的 <code>0.5</code>，<code>0</code>， <code>-0.5</code> 這樣的點。如果點小於 0，我們就把它設置成原來的 2 倍（因為 OpenGL 座標的範圍在 <code>-1</code> 到 <code>1</code> 之間，範圍大小是 2），減 1 是為了歸一化 OpenGL 座標。如果點大於等於 0，我們的做法還是一樣的，不過要加上我們計算出的尺寸。</p><p>這樣做是為了設置每個細胞的大小，這樣它就能只填充它在面板中的部分。因為我們有 10 行 10 列，每一個格子能分到遊戲面板的 10% 寬度和高度。</p><p>最後，確定了所有點的位置和大小，我們用提供的 X 和 Y 座標創建一個 <code>cell</code>，並設置 <code>drawable</code> 字段與我們剛剛操作 <code>points</code> 得到的頂點數組對象（vao）一致。</p><p>好了，現在我們在 <code>main</code> 函數里可以移去對 <code>makeVao</code> 的調用了，用 <code>makeCells</code> 代替。我們還修改了 <code>draw</code>，讓它繪製一系列的細胞而不是一個 <code>vao</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>現在我們要讓每個細胞知道怎麼繪製出自己。在 <code>cell</code> 裏面添加一個 <code>draw</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func (c *cell) draw() {</span></span>
<span class="line"><span>    gl.BindVertexArray(c.drawable)</span></span>
<span class="line"><span>    gl.DrawArrays(gl.TRIANGLES, 0, int32(len(square) / 3))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這看上去很熟悉，它很像我們之前在 <code>vao</code> 裏寫的 <code>draw</code>，唯一的區別是我們的 <code>BindVertexArray</code> 函數用的是 <code>c.drawable</code>，這是我們在 <code>newCell</code> 中創造的細胞的 <code>vao</code>。</p><p>回到 main 中的 <code>draw</code> 函數上，我們可以循環每個細胞，讓它們自己繪製自己：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func draw(cells [][]*cell, window *glfw.Window, program uint32) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>如你所見，我們循環每一個細胞，調用它的 <code>draw</code> 函數。如果運行這段代碼，你能看到像下面這樣的東西：</p><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-6.png" alt="Conway&#39;s Game of Life - 全部格子"></p><p>這是你想看到的嗎？我們做的是在格子裏為每一行每一列創建了一個方塊，然後給它上色，這就填滿了整個面板！</p><p>註釋掉 for 循環，我們就可以看到一個明顯獨立的細胞，像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// for x := range cells {</span></span>
<span class="line"><span>//     for _, c := range cells[x] {</span></span>
<span class="line"><span>//         c.draw()</span></span>
<span class="line"><span>//     }</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cells[2][3].draw()</span></span></code></pre></div><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-7.png" alt="Conway&#39;s Game of Life - 一個單獨的細胞"></p><p>這隻繪製座標在 <code>(X=2, Y=3)</code> 的格子。你可以看到，每一個獨立的細胞佔據着面板的一小塊部分，並且負責繪製自己那部分空間。我們也能看到遊戲面板有自己的原點，也就是座標為 <code>(X=0, Y=0)</code> 的點，在窗口的左下方。這僅僅是我們的 <code>newCell</code> 函數計算位置的方式，也可以用右上角，右下角，左上角，中央，或者其它任何位置當作原點。</p><p>接着往下做，移除 <code>cells[2][3].draw()</code> 這一行，取消 for 循環的那部分註釋，變成之前那樣全部繪製的樣子。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>好了，我們現在能用兩個三角形畫出一個正方形了，我們還有一個遊戲的面板了！我們該為此自豪，目前為止我們已經接觸到了很多零碎的內容，老實説，最難的部分還在前面等着我們！</p><p>在接下來的第三節，我們會實現遊戲核心邏輯，看到很酷的東西！</p><h3 id="回顧" tabindex="-1">回顧 <a class="header-anchor" href="#回顧" aria-label="Permalink to “回顧”">​</a></h3><p>這是這一部分教程中 <code>main.go</code> 文件的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>// 初始化 glfw，返回一個可用的 Window</span></span>
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
<span class="line"><span>// 初始化 OpenGL 並返回一個可用的着色器程序</span></span>
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
<span class="line"><span>// 初始化並返回由 points 提供的頂點數組</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,53)),a("p",null,[s[10]||(s[10]=n("讓我知道這篇文章對你有沒有幫助，在 Twitter ",-1)),l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...s[9]||(s[9]=[n("@kylewbanks",-1)])]),_:1}),s[11]||(s[11]=n(" 或者下方的連接，關注我以便獲取最新的文章！",-1))]),s[27]||(s[27]=a("hr",null,null,-1)),a("p",null,[s[13]||(s[13]=n("via: ",-1)),l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board"},{default:e(()=>[...s[12]||(s[12]=[n("https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board",-1)])]),_:1})]),a("p",null,[s[17]||(s[17]=n("作者：",-1)),l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...s[14]||(s[14]=[n("kylewbanks",-1)])]),_:1}),s[18]||(s[18]=n(" 譯者：",-1)),l(p,{href:"https://github.com/GitFuture"},{default:e(()=>[...s[15]||(s[15]=[n("GitFtuture",-1)])]),_:1}),s[19]||(s[19]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[16]||(s[16]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[20]||(s[20]=[n("LCTT",-1)])]),_:1}),s[23]||(s[23]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[21]||(s[21]=[n("Linux中國",-1)])]),_:1}),s[24]||(s[24]=n(" 榮譽推出",-1))])])}const C=i(d,[["render",g]]);export{y as __pageData,C as default};
