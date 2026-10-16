import{_ as t,a0 as c,w as o,s as r,I as a,x as s,a1 as l,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"OpenGL 與 Go 教程（三）實現遊戲 | LCTT x X-CMD","titleTemplate":false,"description":"OpenGL 與 Go 教程（三）實現遊戲 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"OpenGL 與 Go 教程（三）實現遊戲 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"OpenGL 與 Go 教程（三）實現遊戲 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170312 OpenGL  Go Tutorial Part 3 Implementing the Game","title":"OpenGL 與 Go 教程（三）實現遊戲","tag":"201710","desc":""},"relativePath":"201710/20170312 OpenGL  Go Tutorial Part 3 Implementing the Game.md","filePath":"[post].md"}'),d={name:"201710/20170312 OpenGL  Go Tutorial Part 3 Implementing the Game.md"};function g(u,n,f,h,m,k){const p=c("Link");return o(),r("div",null,[n[36]||(n[36]=a("h1",{id:"opengl-與-go-教程-三-實現遊戲",tabindex:"-1"},[s("OpenGL 與 Go 教程（三）實現遊戲 "),a("a",{class:"header-anchor",href:"#opengl-與-go-教程-三-實現遊戲","aria-label":"Permalink to “OpenGL 與 Go 教程（三）實現遊戲”"},"​")],-1)),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-8933-1.html"},{default:e(()=>[...n[0]||(n[0]=[s("第一節: Hello, OpenGL",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8937-1.html"},{default:e(()=>[...n[1]||(n[1]=[s("第二節: 繪製遊戲面板",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...n[2]||(n[2]=[s("第三節：實現遊戲功能",-1)])]),_:1})])]),a("p",null,[n[4]||(n[4]=s("該教程的完整源代碼可以從 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[3]||(n[3]=[s("GitHub",-1)])]),_:1}),n[5]||(n[5]=s(" 上找到。",-1))]),a("p",null,[n[8]||(n[8]=s("歡迎回到《OpenGL 與 Go 教程》！如果你還沒有看過 ",-1)),l(p,{href:"https://linux.cn/article-8933-1.html"},{default:e(()=>[...n[6]||(n[6]=[s("第一節",-1)])]),_:1}),n[9]||(n[9]=s(" 和 ",-1)),l(p,{href:"https://kylewbanks.com/blog/%5BPart%202:%20Drawing%20the%20Game%20Board%5D(/blog/tutorial-opengl-with-golang-part-2-drawing-the-game-board)"},{default:e(()=>[...n[7]||(n[7]=[s("第二節",-1)])]),_:1}),n[10]||(n[10]=s("，那就要回過頭去看一看。",-1))]),n[37]||(n[37]=i(`<p>到目前為止，你應該懂得如何創建網格系統以及創建代表方格中每一個單元的格子陣列。現在可以開始把網格當作遊戲面板實現<ruby>康威生命遊戲<rt>Conway&#39;s Game of Life</rt></ruby>。</p><p>開始吧！</p><h3 id="實現康威生命遊戲" tabindex="-1">實現康威生命遊戲 <a class="header-anchor" href="#實現康威生命遊戲" aria-label="Permalink to “實現康威生命遊戲”">​</a></h3><p>康威生命遊戲的其中一個要點是所有<ruby>細胞<rt>cell</rt></ruby>必須同時基於當前細胞在面板中的狀態確定下一個細胞的狀態。也就是説如果細胞 <code>(X=3,Y=4)</code> 在計算過程中狀態發生了改變，那麼鄰近的細胞 <code>(X=4,Y=4)</code> 必須基於 <code>(X=3,Y=4)</code> 的狀態決定自己的狀態變化，而不是基於自己現在的狀態。簡單的講，這意味着我們必須遍歷細胞，確定下一個細胞的狀態，而在繪製之前不改變他們的當前狀態，然後在下一次循環中我們將新狀態應用到遊戲裏，依此循環往復。</p><p>為了完成這個功能，我們需要在 <code>cell</code> 結構體中添加兩個布爾型變量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type cell struct {</span></span>
<span class="line"><span>    drawable uint32</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    alive     bool</span></span>
<span class="line"><span>    aliveNext bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    x int</span></span>
<span class="line"><span>    y int</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏我們添加了 <code>alive</code> 和 <code>aliveNext</code>，前一個是細胞當前的專題，後一個是經過計算後下一回合的狀態。</p><p>現在添加兩個函數，我們會用它們來確定 cell 的狀態：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// checkState 函數決定下一次遊戲循環時的 cell 狀態</span></span>
<span class="line"><span>func (c *cell) checkState(cells [][]*cell) {</span></span>
<span class="line"><span>    c.alive = c.aliveNext</span></span>
<span class="line"><span>    c.aliveNext = c.alive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    liveCount := c.liveNeighbors(cells)</span></span>
<span class="line"><span>    if c.alive {</span></span>
<span class="line"><span>		// 1. 當任何一個存活的 cell 的附近少於 2 個存活的 cell 時，該 cell 將會消亡，就像人口過少所導致的結果一樣</span></span>
<span class="line"><span>        if liveCount &lt; 2 {</span></span>
<span class="line"><span>            c.aliveNext = false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 2. 當任何一個存活的 cell 的附近有 2 至 3 個存活的 cell 時，該 cell 在下一代中仍然存活。</span></span>
<span class="line"><span>        if liveCount == 2 || liveCount == 3 {</span></span>
<span class="line"><span>            c.aliveNext = true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 3. 當任何一個存活的 cell 的附近多於 3 個存活的 cell 時，該 cell 將會消亡，就像人口過多所導致的結果一樣</span></span>
<span class="line"><span>        if liveCount &gt; 3 {</span></span>
<span class="line"><span>            c.aliveNext = false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>		// 4. 任何一個消亡的 cell 附近剛好有 3 個存活的 cell，該 cell 會變為存活的狀態，就像重生一樣。</span></span>
<span class="line"><span>        if liveCount == 3 {</span></span>
<span class="line"><span>            c.aliveNext = true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// liveNeighbors 函數返回當前 cell 附近存活的 cell 數</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>checkState</code> 中我們設置當前狀態（<code>alive</code>） 等於我們最近迭代結果（<code>aliveNext</code>）。接下來我們計數鄰居數量，並根據遊戲的規則來決定 <code>aliveNext</code> 狀態。該規則是比較清晰的，而且我們在上面的代碼當中也有説明，所以這裏不再贅述。</p><p>更加值得注意的是 <code>liveNeighbors</code> 函數里，我們返回的是當前處於存活（<code>alive</code>）狀態的細胞的鄰居個數。我們定義了一個叫做 <code>add</code> 的內嵌函數，它會對 <code>X</code> 和 <code>Y</code> 座標做一些重複性的驗證。它所做的事情是檢查我們傳遞的數字是否超出了範圍——比如説，如果細胞 <code>(X=0,Y=5)</code> 想要驗證它左邊的細胞，它就得驗證面板另一邊的細胞 <code>(X=9,Y=5)</code>，Y 軸與之類似。</p><p>在 <code>add</code> 內嵌函數後面，我們給當前細胞附近的八個細胞分別調用 <code>add</code> 函數，示意如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[</span></span>
<span class="line"><span>    [-, -, -],</span></span>
<span class="line"><span>    [N, N, N],</span></span>
<span class="line"><span>    [N, C, N],</span></span>
<span class="line"><span>    [N, N, N],</span></span>
<span class="line"><span>    [-, -, -]</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>在該示意中，每一個叫做 N 的細胞是 C 的鄰居。</p><p>現在是我們的 <code>main</code> 函數，這裏我們執行核心遊戲循環，調用每個細胞的 <code>checkState</code> 函數進行繪製：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>現在我們的遊戲邏輯全都設置好了，我們需要修改細胞繪製函數來跳過繪製不存活的細胞：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func (c *cell) draw() {</span></span>
<span class="line"><span>    if !c.alive {</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    gl.BindVertexArray(c.drawable)</span></span>
<span class="line"><span>    gl.DrawArrays(gl.TRIANGLES, 0, int32(len(square)/3))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果我們現在運行這個遊戲，你將看到一個純黑的屏幕，而不是我們辛苦工作後應該看到生命模擬。為什麼呢？其實這正是模擬在工作。因為我們沒有活着的細胞，所以就一個都不會繪製出來。</p><p>現在完善這個函數。回到 <code>makeCells</code> 函數，我們用 <code>0.0</code> 到 <code>1.0</code> 之間的一個隨機數來設置遊戲的初始狀態。我們會定義一個大小為 <code>0.15</code> 的常量閾值，也就是説每個細胞都有 15% 的幾率處於存活狀態。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我們首先增加兩個引入：隨機（<code>math/rand</code>）和時間（<code>time</code>），並定義我們的常量閾值。然後在 <code>makeCells</code> 中我們使用當前時間作為隨機種子，給每個遊戲一個獨特的起始狀態。你也可也指定一個特定的種子值，來始終得到一個相同的遊戲，這在你想重放某個有趣的模擬時很有用。</p><p>接下來在循環中，在用 <code>newCell</code> 函數創造一個新的細胞時，我們根據隨機浮點數的大小設置它的存活狀態，隨機數在 <code>0.0</code> 到 <code>1.0</code> 之間，如果比閾值（<code>0.15</code>）小，就是存活狀態。再次強調，這意味着每個細胞在開始時都有 15% 的幾率是存活的。你可以修改數值大小，增加或者減少當前遊戲中存活的細胞。我們還把 <code>aliveNext</code> 設成 <code>alive</code> 狀態，否則在第一次迭代之後我們會發現一大片細胞消亡了，這是因為 <code>aliveNext</code> 將永遠是 <code>false</code>。</p><p>現在繼續運行它，你很有可能看到細胞們一閃而過，但你卻無法理解這是為什麼。原因可能在於你的電腦太快了，在你能夠看清楚之前就運行了（甚至完成了）模擬過程。</p><p>讓我們降低遊戲速度，在主循環中引入一個幀率（FPS）限制：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const (</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>現在你能給看出一些圖案了，儘管它變換的很慢。把 FPS 加到 10，把方格的尺寸加到 100x100，你就能看到更真實的模擬：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const (</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rows = 100</span></span>
<span class="line"><span>    columns = 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fps = 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>)</span></span></code></pre></div><p><img src="https://kylewbanks.com/images/post/golang-opengl-conway-1.gif" alt=" “Conway&#39;s Game of Life” - 示例遊戲"></p><p>試着修改常量，看看它們是怎麼影響模擬過程的 —— 這是你用 Go 語言寫的第一個 OpenGL 程序，很酷吧？</p><h3 id="進階內容" tabindex="-1">進階內容？ <a class="header-anchor" href="#進階內容" aria-label="Permalink to “進階內容？”">​</a></h3><p>這是《OpenGL 與 Go 教程》的最後一節，但是這不意味着到此而止。這裏有些新的挑戰，能夠增進你對 OpenGL （以及 Go）的理解。</p>`,32)),a("ol",null,[n[14]||(n[14]=a("li",null,"給每個細胞一種不同的顏色。",-1)),a("li",null,[n[12]||(n[12]=s("讓用户能夠通過命令列參數指定格子尺寸、幀率、種子和閾值。在 GitHub 上的 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[11]||(n[11]=[s("github.com/KyleBanks/conways-gol",-1)])]),_:1}),n[13]||(n[13]=s(" 裏你可以看到一個已經實現的程序。",-1))]),n[15]||(n[15]=a("li",null,"把格子的形狀變成其它更有意思的，比如六邊形。",-1)),n[16]||(n[16]=a("li",null,"用顏色表示細胞的狀態 —— 比如，在第一幀把存活狀態的格子設成綠色，如果它們存活了超過三幀的時間，就變成黃色。",-1)),n[17]||(n[17]=a("li",null,"如果模擬過程結束了，就自動關閉窗口，也就是説所有細胞都消亡了，或者是最後兩幀裏沒有格子的狀態有改變。",-1)),n[18]||(n[18]=a("li",null,"將着色器源代碼放到單獨的文件中，而不是把它們用字符串的形式放在 Go 的源代碼中。",-1))]),n[38]||(n[38]=i('<h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>希望這篇教程對想要入門 OpenGL （或者是 Go）的人有所幫助！這很有趣，因此我也希望理解學習它也很有趣。</p><p>正如我所説的，OpenGL 可能是非常恐怖的，但只要你開始着手了就不會太差。你只用制定一個個可達成的小目標，然後享受每一次成功，因為儘管 OpenGL 不會總像它看上去的那麼難，但也肯定有些難懂的東西。我發現，當遇到一個難於理解用 go-gl 生成的代碼的 OpenGL 問題時，你總是可以參考一下在網上更流行的當作教程的 C 語言代碼，這很有用。通常 C 語言和 Go 語言的唯一區別是在 Go 中，gl 函數的前綴是 <code>gl.</code> 而不是 <code>gl</code>，常量的前綴是 <code>gl</code> 而不是 <code>GL_</code>。這可以極大地增加了你的繪製知識！</p>',3)),a("p",null,[n[20]||(n[20]=s("該教程的完整源代碼可從 ",-1)),l(p,{href:"https://github.com/KyleBanks/conways-gol"},{default:e(()=>[...n[19]||(n[19]=[s("GitHub",-1)])]),_:1}),n[21]||(n[21]=s(" 上獲得。",-1))]),n[39]||(n[39]=i(`<h3 id="回顧" tabindex="-1">回顧 <a class="header-anchor" href="#回顧" aria-label="Permalink to “回顧”">​</a></h3><p>這是 main.go 文件最終的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>// checkState 函數決定下一次遊戲循環時的 cell 狀態</span></span>
<span class="line"><span>func (c *cell) checkState(cells [][]*cell) {</span></span>
<span class="line"><span>    c.alive = c.aliveNext</span></span>
<span class="line"><span>    c.aliveNext = c.alive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    liveCount := c.liveNeighbors(cells)</span></span>
<span class="line"><span>    if c.alive {</span></span>
<span class="line"><span>		// 1. 當任何一個存活的 cell 的附近少於 2 個存活的 cell 時，該 cell 將會消亡，就像人口過少所導致的結果一樣</span></span>
<span class="line"><span>        if liveCount &lt; 2 {</span></span>
<span class="line"><span>            c.aliveNext = false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 2. 當任何一個存活的 cell 的附近有 2 至 3 個存活的 cell 時，該 cell 在下一代中仍然存活。</span></span>
<span class="line"><span>        if liveCount == 2 || liveCount == 3 {</span></span>
<span class="line"><span>            c.aliveNext = true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		// 3. 當任何一個存活的 cell 的附近多於 3 個存活的 cell 時，該 cell 將會消亡，就像人口過多所導致的結果一樣</span></span>
<span class="line"><span>        if liveCount &gt; 3 {</span></span>
<span class="line"><span>            c.aliveNext = false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>		// 4. 任何一個消亡的 cell 附近剛好有 3 個存活的 cell，該 cell 會變為存活的狀態，就像重生一樣。</span></span>
<span class="line"><span>        if liveCount == 3 {</span></span>
<span class="line"><span>            c.aliveNext = true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// liveNeighbors 函數返回當前 cell 附近存活的 cell 數</span></span>
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
<span class="line"><span>// initGlfw 初始化 glfw，返回一個可用的 Window</span></span>
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
<span class="line"><span>// makeVao 初始化並從提供的點裏面返回一個頂點數組</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>請在 Twitter 上告訴我這篇文章對你是否有幫助。</p>`,4)),a("p",null,[l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...n[22]||(n[22]=[s("@kylewbanks",-1)])]),_:1})]),n[40]||(n[40]=a("p",null,"或者在 Twitter 下方關注我以便及時獲取最新文章！",-1)),n[41]||(n[41]=a("hr",null,null,-1)),a("p",null,[n[24]||(n[24]=s("via: ",-1)),l(p,{href:"https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game"},{default:e(()=>[...n[23]||(n[23]=[s("https://kylewbanks.com/blog/tutorial-opengl-with-golang-part-3-implementing-the-game",-1)])]),_:1})]),a("p",null,[n[28]||(n[28]=s("作者：",-1)),l(p,{href:"https://twitter.com/kylewbanks"},{default:e(()=>[...n[25]||(n[25]=[s("kylewbanks",-1)])]),_:1}),n[29]||(n[29]=s(" 譯者：",-1)),l(p,{href:"https://github.com/GitFuture"},{default:e(()=>[...n[26]||(n[26]=[s("GitFuture",-1)])]),_:1}),n[30]||(n[30]=s(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...n[27]||(n[27]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[33]||(n[33]=s("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[31]||(n[31]=[s("LCTT",-1)])]),_:1}),n[34]||(n[34]=s(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...n[32]||(n[32]=[s("Linux中國",-1)])]),_:1}),n[35]||(n[35]=s(" 榮譽推出",-1))])])}const x=t(d,[["render",g]]);export{w as __pageData,x as default};
