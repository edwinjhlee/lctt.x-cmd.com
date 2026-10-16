import{_ as t,a0 as o,w as c,s as r,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"添加計分到你的 Python 遊戲 | LCTT x X-CMD","titleTemplate":false,"description":"添加計分到你的 Python 遊戲 | LCTT (202002) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"添加計分到你的 Python 遊戲 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"添加計分到你的 Python 遊戲 | LCTT (202002) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202002/20200103 Add scorekeeping to your Python game","title":"添加計分到你的 Python 遊戲","tag":"202002","desc":""},"relativePath":"202002/20200103 Add scorekeeping to your Python game.md","filePath":"[post].md"}'),d={name:"202002/20200103 Add scorekeeping to your Python game.md"};function f(y,s,m,g,h,u){const p=o("Link");return c(),r("div",null,[s[45]||(s[45]=a("h1",{id:"添加計分到你的-python-遊戲",tabindex:"-1"},[n("添加計分到你的 Python 遊戲 "),a("a",{class:"header-anchor",href:"#添加計分到你的-python-遊戲","aria-label":"Permalink to “添加計分到你的 Python 遊戲”"},"​")],-1)),s[46]||(s[46]=a("blockquote",null,[a("p",null,"在本系列的第十一篇有關使用 Python Pygame 模組進行編程的文章中，顯示玩家獲得戰利品或受到傷害時的得分。")],-1)),s[47]||(s[47]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202002/01/154838led0y08y2aqetz1q.jpg",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("這是仍在進行中的關於使用 ",-1)),e(p,{href:"https://www.pygame.org/news"},{default:l(()=>[...s[0]||(s[0]=[n("Pygame",-1)])]),_:1}),s[3]||(s[3]=n(" 模組來在 ",-1)),e(p,{href:"https://www.python.org/"},{default:l(()=>[...s[1]||(s[1]=[n("Python 3",-1)])]),_:1}),s[4]||(s[4]=n(" 在創建電腦遊戲的第十一部分。先前的文章是：",-1))]),a("ul",null,[a("li",null,[e(p,{href:"https://linux.cn/article-9071-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("通過構建一個簡單的擲骰子游戲去學習怎麼用 Python 編程",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-10850-1.html"},{default:l(()=>[...s[6]||(s[6]=[n("使用 Python 和 Pygame 模組構建一個遊戲框架",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-10858-1.html"},{default:l(()=>[...s[7]||(s[7]=[n("如何在你的 Python 遊戲中添加一個玩家",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-10874-1.html"},{default:l(()=>[...s[8]||(s[8]=[n("用 Pygame 使你的遊戲角色移動起來",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-10883-1.html"},{default:l(()=>[...s[9]||(s[9]=[n("如何向你的 Python 遊戲中添加一個敵人",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-10902-1.html"},{default:l(()=>[...s[10]||(s[10]=[n("在 Pygame 遊戲中放置平台",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-11780-1.html"},{default:l(()=>[...s[11]||(s[11]=[n("在你的 Python 遊戲中模擬引力",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-11790-1.html"},{default:l(()=>[...s[12]||(s[12]=[n("為你的 Python 平台類遊戲添加跳躍功能",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-11819-1.html"},{default:l(()=>[...s[13]||(s[13]=[n("使你的 Python 遊戲玩家能夠向前和向後跑",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-11828-1.html"},{default:l(()=>[...s[14]||(s[14]=[n("在你的 Python 平台類遊戲中放一些獎勵",-1)])]),_:1})])]),s[48]||(s[48]=a("p",null,"如果你已經跟隨這一系列很久，那麼已經學習了使用 Python 創建一個視頻遊戲所需的所有基本語法和模式。然而，它仍然缺少一個至關重要的組成部分。這一組成部分不僅僅對用 Python 編程遊戲重要；不管你探究哪個計算機分支，你都必需精通：作為一個程序員，通過閲讀一種語言的或庫的文檔來學習新的技巧。",-1)),s[49]||(s[49]=a("p",null,"幸運的是，你正在閲讀本文的事實表明你熟悉文檔。為了使你的平台類遊戲更加美觀，在這篇文章中，你將在遊戲屏幕上添加得分和生命值顯示。不過，教你如何找到一個庫的功能以及如何使用這些新的功能的這節課程並沒有多神秘。",-1)),s[50]||(s[50]=a("h3",{id:"在-pygame-中顯示得分",tabindex:"-1"},[n("在 Pygame 中顯示得分 "),a("a",{class:"header-anchor",href:"#在-pygame-中顯示得分","aria-label":"Permalink to “在 Pygame 中顯示得分”"},"​")],-1)),s[51]||(s[51]=a("p",null,"現在，既然你有了可以被玩家收集的獎勵，那就有充分的理由來記錄分數，以便你的玩家看到他們收集了多少獎勵。你也可以跟蹤玩家的生命值，以便當他們被敵人擊中時會有相應結果。",-1)),s[52]||(s[52]=a("p",null,"你已經有了跟蹤分數和生命值的變量，但是這一切都發生在後台。這篇文章教你在遊戲期間在遊戲屏幕上以你選擇的一種字體來顯示這些統計數字。",-1)),s[53]||(s[53]=a("h3",{id:"閲讀文檔",tabindex:"-1"},[n("閲讀文檔 "),a("a",{class:"header-anchor",href:"#閲讀文檔","aria-label":"Permalink to “閲讀文檔”"},"​")],-1)),a("p",null,[s[16]||(s[16]=n("大多數 Python 模組都有文檔，即使那些沒有文檔的模組，也能通過 Python 的幫助功能來進行最小的文檔化。",-1)),e(p,{href:"http://pygame.org/news"},{default:l(()=>[...s[15]||(s[15]=[n("Pygame 的主頁面",-1)])]),_:1}),s[17]||(s[17]=n(" 鏈接了它的文檔。不過，Pygame 是一個帶有很多文檔的大模組，並且它的文檔不像在 Opensource.com 上的文章一樣，以同樣易理解的（和友好的、易解釋的、有用的）敍述風格來撰寫的。它們是技術文檔，並且列出在模組中可用的每個類和函數，各自要求的輸入類型等等。如果你不適應參考代碼組件描述，這可能會令人不知所措。",-1))]),s[54]||(s[54]=i(`<p>在煩惱於庫的文檔前，第一件要做的事，就是來想想你正在嘗試達到的目標。在這種情況下，你想在屏幕上顯示玩家的得分和生命值。</p><p>在你確定你需要的結果後，想想它需要什麼的組件。你可以從變量和函數的方面考慮這一點，或者，如果你還沒有自然地想到這一點，你可以進行一般性思考。你可能意識到需要一些文本來顯示一個分數，你希望 Pygame 在屏幕上繪製這些文本。如果你仔細思考，你可能會意識到它與在屏幕上渲染一個玩家、獎勵或一個平台並多麼大的不同。</p><p>從技術上講，你<em>可以</em>使用數字圖形，並讓 Pygame 顯示這些數字圖形。它不是達到你目標的最容易的方法，但是如果它是你唯一知道的方法，那麼它是一個有效的方法。不過，如果你參考 Pygame 的文檔，你看到列出的模組之一是 <code>font</code>，這是 Pygame 使得在屏幕上來使打印文本像輸入文字一樣容易的方法。</p><h3 id="解密技術文檔" tabindex="-1">解密技術文檔 <a class="header-anchor" href="#解密技術文檔" aria-label="Permalink to “解密技術文檔”">​</a></h3><p><code>font</code> 文檔頁面以 <code>pygame.font.init()</code> 開始，它列出了用於初始化字體模組的函數。它由 <code>pygame.init()</code> 自動地調用，你已經在代碼中調用了它。再強調一次，從技術上講，你已經到達一個<em>足夠好</em>的點。雖然你尚不知道<em>如何做</em>，你知道你<em>能夠</em>使用 <code>pygame.font</code> 函數來在屏幕上打印文本。</p><p>然而，如果你閲讀更多一些，你會找到這裏還有一種更好的方法來打印字體。<code>pygame.freetype</code> 模組在文檔中的描述方式如下：</p><blockquote><p><code>pygame.freetype</code> 模組是 <code>pygame.fontpygame</code> 模組的一個替代品，用於加載和渲染字體。它有原函數的所有功能，外加很多新的功能。</p></blockquote><p>在 <code>pygame.freetype</code> 文檔頁面的下方，有一些示例代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import pygame</span></span>
<span class="line"><span>import pygame.freetype</span></span></code></pre></div><p>你的代碼應該已經導入了 Pygame，不過，請修改你的 <code>import</code> 語句以包含 Freetype 模組：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import pygame</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import pygame.freetype</span></span></code></pre></div><h3 id="在-pygame-中使用字體" tabindex="-1">在 Pygame 中使用字體 <a class="header-anchor" href="#在-pygame-中使用字體" aria-label="Permalink to “在 Pygame 中使用字體”">​</a></h3><p>從 <code>font</code> 模組的描述中可以看出，顯然 Pygame 使用一種字體（不管它的你提供的或內置到 Pygame 的默認字體）在屏幕上渲染字體。滾動瀏覽 <code>pygame.freetype</code> 文檔來找到 <code>pygame.freetype.Font</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pygame.freetype.Font</span></span>
<span class="line"><span>從支持的字體文件中創建一個新的字體實例。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Font(file, size=0, font_index=0, resolution=0, ucs4=False) -&gt; Font</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pygame.freetype.Font.name</span></span>
<span class="line"><span>  符合規則的字體名稱。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pygame.freetype.Font.path</span></span>
<span class="line"><span>  字體文件路徑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pygame.freetype.Font.size</span></span>
<span class="line"><span>  在渲染中使用的默認點大小</span></span></code></pre></div><p>這描述瞭如何在 Pygame 中構建一個字體“對象”。把屏幕上的一個簡單對象視為一些代碼屬性的組合對你來説可能不太自然，但是這與你構建英雄和敵人精靈的方式非常類似。你需要一個字體文件，而不是一個圖像文件。在你有一個字體文件後，你可以在你的代碼中使用 <code>pygame.freetype.Font</code> 函數來創建一個字體對象，然後使用該對象來在屏幕上渲染文本。</p><p>因為並不是世界上的每個人的電腦上都有完全一樣的字體，因此將你選擇的字體與你的遊戲捆綁在一起是很重要的。要捆綁字體，首先在你的遊戲文件夾中創建一個新的目錄，放在你為圖像而創建的文件目錄旁邊。稱其為 <code>fonts</code> 。</p><p>即使你的計算機操作系統隨附了幾種字體，但是將這些字體給予其他人是非法的。這看起來很奇怪，但法律就是這樣運作的。如果想與你的遊戲一起隨附一種字體，你必需找到一種開源或知識共享的字體，以允許你隨遊戲一起提供該字體。</p><p>專門提供自由和合法字體的網站包括：</p>`,18)),a("ul",null,[a("li",null,[e(p,{href:"https://fontlibrary.org/"},{default:l(()=>[...s[18]||(s[18]=[n("Font Library",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.fontsquirrel.com/"},{default:l(()=>[...s[19]||(s[19]=[n("Font Squirrel",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.theleagueofmoveabletype.com/"},{default:l(()=>[...s[20]||(s[20]=[n("League of Moveable Type",-1)])]),_:1})])]),a("p",null,[s[22]||(s[22]=n("當你找到你喜歡的字體後，下載下來。解壓縮 ZIP 或 ",-1)),e(p,{href:"https://opensource.com/article/17/7/how-unzip-targz-file"},{default:l(()=>[...s[21]||(s[21]=[n("TAR",-1)])]),_:1}),s[23]||(s[23]=n(" 文件，並移動 ",-1)),s[24]||(s[24]=a("code",null,".ttf",-1)),s[25]||(s[25]=n(" 或 ",-1)),s[26]||(s[26]=a("code",null,".otf",-1)),s[27]||(s[27]=n(" 文件到你的項目目錄下的 ",-1)),s[28]||(s[28]=a("code",null,"fonts",-1)),s[29]||(s[29]=n(" 文件夾中。",-1))]),s[55]||(s[55]=i(`<p>你沒有安裝字體到你的計算機上。你只是放置字體到你遊戲的 <code>fonts</code> 文件夾中，以便 Pygame 可以使用它。如果你想，你<em>可以</em>在你的計算機上安裝該字體，但是沒有必要。重要的是將字體放在你的遊戲目錄中，這樣 Pygame 可以“描繪”字體到屏幕上。</p><p>如果字體文件的名稱複雜且帶有空格或特殊字符，只需要重新命名它即可。文件名稱是完全任意的，並且對你來説，文件名稱越簡單，越容易將其鍵入你的代碼中。</p><p>現在告訴 Pygame 你的字體。從文檔中你知道，當你至少提供了字體文件路徑給 <code>pygame.freetype.Font</code> 時（文檔明確指出所有其餘屬性都是可選的），你將在返回中獲得一個字體對象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Font(file, size=0, font_index=0, resolution=0, ucs4=False) -&gt; Font</span></span></code></pre></div><p>創建一個稱為 <code>myfont</code> 的新變量來充當你在遊戲中字體，並放置 <code>Font</code> 函數的結果到這個變量中。這個示例中使用 <code>amazdoom.ttf</code> 字體，但是你可以使用任何你想使用的字體。在你的設置部分放置這些代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>font_path = os.path.join(os.path.dirname(os.path.realpath(__file__)),&quot;fonts&quot;,&quot;amazdoom.ttf&quot;)</span></span>
<span class="line"><span>font_size = tx</span></span>
<span class="line"><span>myfont = pygame.freetype.Font(font_path, font_size)</span></span></code></pre></div><h3 id="在-pygame-中顯示文本" tabindex="-1">在 Pygame 中顯示文本 <a class="header-anchor" href="#在-pygame-中顯示文本" aria-label="Permalink to “在 Pygame 中顯示文本”">​</a></h3><p>現在你已經創建一個字體對象，你需要一個函數來繪製你想繪製到屏幕上的文本。這和你在你的遊戲中繪製背景和平台是相同的原理。</p><p>首先，創建一個函數，並使用 <code>myfont</code> 對象來創建一些文本，設置顏色為某些 RGB 值。這必須是一個全局函數；它不屬於任何具體的類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def stats(score,health):</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 4), &quot;Score:&quot;+str(score), WHITE, None, size=64)</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 72), &quot;Health:&quot;+str(health), WHITE, None, size=64)</span></span></code></pre></div><p>當然，你此刻已經知道，如果它不在主循環中，你的遊戲將不會發生任何事，所以在文件的底部添加一個對你的 <code>stats</code> 函數的調用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    stats(player.score,player.health) # draw text</span></span>
<span class="line"><span>    pygame.display.flip()</span></span></code></pre></div><p>嘗試你的遊戲。</p><p>當玩家收集獎勵品時，得分會上升。當玩家被敵人擊中時，生命值下降。成功！</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame-score.jpg" alt="Keeping score in Pygame" title="Keeping score in Pygame"></p><p>不過，這裏有一個問題。當一個玩家被敵人擊中時，健康度會<em>一路</em>下降，這是不公平的。你剛剛發現一個非致命的錯誤。非致命的錯誤是這些在應用程序中小問題，（通常）不會阻止應用程序啓動或甚至導致停止工作，但是它們要麼沒有意義，要麼會惹惱用户。這裏是如何解決這個問題的方法。</p><h3 id="修復生命值計數" tabindex="-1">修復生命值計數 <a class="header-anchor" href="#修復生命值計數" aria-label="Permalink to “修復生命值計數”">​</a></h3><p>當前生命值系統的問題是，敵人接觸玩家時，Pygame 時鐘的每一次滴答，健康度都會減少。這意味着一個緩慢移動的敵人可能在一次遭遇中將一個玩家降低健康度至 -200 ，這不公平。當然，你可以給你的玩家一個 10000 的起始健康度得分，而不用擔心它；這可以工作，並且可能沒有人會注意。但是這裏有一個更好的方法。</p><p>當前，你的代碼偵查出一個玩家和一個敵人發生碰撞的時候。生命值問題的修復是檢測<em>兩個</em>獨立的事件：什麼時候玩家和敵人碰撞，並且，在它們碰撞後，什麼時候它們<em>停止</em>碰撞。</p><p>首先，在你的玩家類中，創建一個變量來代表玩家和敵人碰撞在一起：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        self.frame = 0</span></span>
<span class="line"><span>        self.health = 10</span></span>
<span class="line"><span>        self.damage = 0</span></span></code></pre></div><p>在你的 <code>Player</code> 類的 <code>update</code> 函數中，<em>移除</em>這塊代碼塊：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        for enemy in enemy_hit_list:</span></span>
<span class="line"><span>            self.health -= 1</span></span>
<span class="line"><span>            #print(self.health)</span></span></code></pre></div><p>並且在它的位置，只要玩家當前沒有被擊中，檢查碰撞：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if self.damage == 0:</span></span>
<span class="line"><span>            for enemy in enemy_hit_list:</span></span>
<span class="line"><span>                if not self.rect.contains(enemy):</span></span>
<span class="line"><span>                    self.damage = self.rect.colliderect(enemy)</span></span></code></pre></div><p>你可能會在你刪除的語句塊和你剛剛添加的語句塊之間看到相似之處。它們都在做相同的工作，但是新的代碼更復雜。最重要的是，只有當玩家<em>當前</em>沒有被擊中時，新的代碼才運行。這意味着，當一個玩家和敵人碰撞時，這些代碼運行一次，而不是像以前那樣一直髮生碰撞。</p><p>新的代碼使用兩個新的 Pygame 函數。<code>self.rect.contains</code> 函數檢查一個敵人當前是否在玩家的邊界框內，並且當它是 <code>true</code> 時， <code>self.rect.colliderect</code> 設置你的新的 <code>self.damage</code> 變量為 1，而不管它多少次是 <code>true</code> 。</p><p>現在，即使被一個敵人擊中 3 秒，對 Pygame 來説仍然看作一次擊中。</p><p>我通過通讀 Pygame 的文檔而發現了這些函數。你沒有必要一次閲讀完全部的文檔，並且你也沒有必要閲讀每個函數的每個單詞。不過，花費時間在你正在使用的新的庫或模組的文檔上是很重要的；否則，你極有可能在重新發明輪子。不要花費一個下午的時間來嘗試修改拼接一個解決方案到一些東西，而這些東西已經被你正在使用的框架的所解決。閲讀文檔，知悉函數，並從別人的工作中獲益！</p><p>最後，添加另一個代碼語句塊來偵查出什麼時候玩家和敵人不再接觸。然後直到那時，才從玩家減少一個生命值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        if self.damage == 1:</span></span>
<span class="line"><span>            idx = self.rect.collidelist(enemy_hit_list)</span></span>
<span class="line"><span>            if idx == -1:</span></span>
<span class="line"><span>                self.damage = 0   # set damage back to 0</span></span>
<span class="line"><span>                self.health -= 1  # subtract 1 hp</span></span></code></pre></div><p>注意，<em>只有</em>當玩家被擊中時，這個新的代碼才會被觸發。這意味着，在你的玩家在你的遊戲世界正在探索或收集獎勵時，這個代碼不會運行。它僅當 <code>self.damage</code> 變量被激活時運行。</p><p>當代碼運行時，它使用 <code>self.rect.collidelist</code> 來查看玩家是否<em>仍然</em>接觸在你敵人列表中的敵人（當其未偵查到碰撞時，<code>collidelist</code> 返回 -1）。在它沒有接觸敵人時，是該處理 <code>self.damage</code> 的時機：通過設置 <code>self.damage</code> 變量回到 0 來使其無效，並減少一點生命值。</p><p>現在嘗試你的遊戲。</p><h3 id="得分反應" tabindex="-1">得分反應 <a class="header-anchor" href="#得分反應" aria-label="Permalink to “得分反應”">​</a></h3><p>現在，你有一個來讓你的玩家知道它們分數和生命值的方法，當你的玩家達到某些里程碑時，你可以確保某些事件發生。例如，也許這裏有一個特殊的恢復一些生命值的獎勵項目。也許一個到達 0 生命值的玩家不得不從一個關卡的起始位置重新開始。</p><p>你可以在你的代碼中檢查這些事件，並且相應地操縱你的遊戲世界。你已經知道該怎麼做，所以請瀏覽文檔來尋找新的技巧，並且獨立地嘗試這些技巧。</p><p>這裏是到目前為止所有的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># draw a world</span></span>
<span class="line"><span># add a player and player control</span></span>
<span class="line"><span># add player movement</span></span>
<span class="line"><span># add enemy and basic collision</span></span>
<span class="line"><span># add platform</span></span>
<span class="line"><span># add gravity</span></span>
<span class="line"><span># add jumping</span></span>
<span class="line"><span># add scrolling</span></span>
<span class="line"><span># add loot</span></span>
<span class="line"><span># add score</span></span>
<span class="line"><span></span></span>
<span class="line"><span># GNU All-Permissive License</span></span>
<span class="line"><span># Copying and distribution of this file, with or without modification,</span></span>
<span class="line"><span># are permitted in any medium without royalty provided the copyright</span></span>
<span class="line"><span># notice and this notice are preserved.  This file is offered as-is,</span></span>
<span class="line"><span># without any warranty.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import pygame</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import pygame.freetype</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Objects</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>class Platform(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    # x location, y location, img width, img height, img file    </span></span>
<span class="line"><span>    def __init__(self,xloc,yloc,imgw,imgh,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img)).convert()</span></span>
<span class="line"><span>        self.image.convert_alpha()</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.y = yloc</span></span>
<span class="line"><span>        self.rect.x = xloc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Player(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    Spawn a player</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.movex = 0</span></span>
<span class="line"><span>        self.movey = 0</span></span>
<span class="line"><span>        self.frame = 0</span></span>
<span class="line"><span>        self.health = 10</span></span>
<span class="line"><span>        self.damage = 0</span></span>
<span class="line"><span>        self.collide_delta = 0</span></span>
<span class="line"><span>        self.jump_delta = 6</span></span>
<span class="line"><span>        self.score = 1</span></span>
<span class="line"><span>        self.images = []</span></span>
<span class="line"><span>        for i in range(1,9):</span></span>
<span class="line"><span>            img = pygame.image.load(os.path.join(&#39;images&#39;,&#39;hero&#39; + str(i) + &#39;.png&#39;)).convert()</span></span>
<span class="line"><span>            img.convert_alpha()</span></span>
<span class="line"><span>            img.set_colorkey(ALPHA)</span></span>
<span class="line"><span>            self.images.append(img)</span></span>
<span class="line"><span>            self.image = self.images[0]</span></span>
<span class="line"><span>            self.rect  = self.image.get_rect()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def jump(self,platform_list):</span></span>
<span class="line"><span>        self.jump_delta = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def gravity(self):</span></span>
<span class="line"><span>        self.movey += 3.2 # how fast player falls</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        if self.rect.y &gt; worldy and self.movey &gt;= 0:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    def control(self,x,y):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        control player movement</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.movex += x</span></span>
<span class="line"><span>        self.movey += y</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    def update(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        Update sprite position</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        self.rect.x = self.rect.x + self.movex</span></span>
<span class="line"><span>        self.rect.y = self.rect.y + self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # moving left</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame//ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # moving right</span></span>
<span class="line"><span>        if self.movex &gt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[(self.frame//ani)+4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # collisions</span></span>
<span class="line"><span>        enemy_hit_list = pygame.sprite.spritecollide(self, enemy_list, False)</span></span>
<span class="line"><span>        if self.damage == 0:</span></span>
<span class="line"><span>            for enemy in enemy_hit_list:</span></span>
<span class="line"><span>                if not self.rect.contains(enemy):</span></span>
<span class="line"><span>                    self.damage = self.rect.colliderect(enemy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.damage == 1:</span></span>
<span class="line"><span>            idx = self.rect.collidelist(enemy_hit_list)</span></span>
<span class="line"><span>            if idx == -1:</span></span>
<span class="line"><span>                self.damage = 0   # set damage back to 0</span></span>
<span class="line"><span>                self.health -= 1  # subtract 1 hp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        loot_hit_list = pygame.sprite.spritecollide(self, loot_list, False)</span></span>
<span class="line"><span>        for loot in loot_hit_list:</span></span>
<span class="line"><span>            loot_list.remove(loot)</span></span>
<span class="line"><span>            self.score += 1</span></span>
<span class="line"><span>            print(self.score)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span>
<span class="line"><span>        for p in plat_hit_list:</span></span>
<span class="line"><span>            self.collide_delta = 0 # stop jumping</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            if self.rect.y &gt; p.rect.y:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y+ty</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y-ty</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            self.rect.y = worldy-ty-ty</span></span>
<span class="line"><span>            self.collide_delta = 0 # stop jumping</span></span>
<span class="line"><span>            if self.rect.y &gt; g.rect.y:</span></span>
<span class="line"><span>                self.health -=1</span></span>
<span class="line"><span>                print(self.health)</span></span>
<span class="line"><span>               </span></span>
<span class="line"><span>        if self.collide_delta &lt; 6 and self.jump_delta &lt; 6:</span></span>
<span class="line"><span>            self.jump_delta = 6*2</span></span>
<span class="line"><span>            self.movey -= 33  # how high to jump</span></span>
<span class="line"><span>            self.collide_delta += 6</span></span>
<span class="line"><span>            self.jump_delta    += 6</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>class Enemy(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    Spawn an enemy</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self,x,y,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img))</span></span>
<span class="line"><span>        self.movey = 0</span></span>
<span class="line"><span>        #self.image.convert_alpha()</span></span>
<span class="line"><span>        #self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.x = x</span></span>
<span class="line"><span>        self.rect.y = y</span></span>
<span class="line"><span>        self.counter = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               </span></span>
<span class="line"><span>    def move(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        enemy movement</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        distance = 80</span></span>
<span class="line"><span>        speed = 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.movey += 3.2</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        if self.counter &gt;= 0 and self.counter &lt;= distance:</span></span>
<span class="line"><span>            self.rect.x += speed</span></span>
<span class="line"><span>        elif self.counter &gt;= distance and self.counter &lt;= distance*2:</span></span>
<span class="line"><span>            self.rect.x -= speed</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.counter = 0</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        self.counter += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if not self.rect.y &gt;= worldy-ty-ty:</span></span>
<span class="line"><span>            self.rect.y += self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        plat_hit_list = pygame.sprite.spritecollide(self, plat_list, False)</span></span>
<span class="line"><span>        for p in plat_hit_list:</span></span>
<span class="line"><span>            self.movey = 0</span></span>
<span class="line"><span>            if self.rect.y &gt; p.rect.y:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y+ty</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                self.rect.y = p.rect.y-ty</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.rect.y = worldy-ty-ty</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>class Level():</span></span>
<span class="line"><span>    def bad(lvl,eloc):</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            enemy = Enemy(eloc[0],eloc[1],&#39;yeti.png&#39;) # spawn enemy</span></span>
<span class="line"><span>            enemy_list = pygame.sprite.Group() # create enemy group</span></span>
<span class="line"><span>            enemy_list.add(enemy)              # add enemy to group</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return enemy_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def loot(lvl,tx,ty):</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            loot_list = pygame.sprite.Group()</span></span>
<span class="line"><span>            loot = Platform(200,ty*7,tx,ty, &#39;loot_1.png&#39;)</span></span>
<span class="line"><span>            loot_list.add(loot)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(lvl)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return loot_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def ground(lvl,gloc,tx,ty):</span></span>
<span class="line"><span>        ground_list = pygame.sprite.Group()</span></span>
<span class="line"><span>        i=0</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            while i &lt; len(gloc):</span></span>
<span class="line"><span>                ground = Platform(gloc[i],worldy-ty,tx,ty,&#39;ground.png&#39;)</span></span>
<span class="line"><span>                ground_list.add(ground)</span></span>
<span class="line"><span>                i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return ground_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def platform(lvl,tx,ty):</span></span>
<span class="line"><span>        plat_list = pygame.sprite.Group()</span></span>
<span class="line"><span>        ploc = []</span></span>
<span class="line"><span>        i=0</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            ploc.append((20,worldy-ty-128,3))</span></span>
<span class="line"><span>            ploc.append((300,worldy-ty-256,3))</span></span>
<span class="line"><span>            ploc.append((500,worldy-ty-128,4))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            while i &lt; len(ploc):</span></span>
<span class="line"><span>                j=0</span></span>
<span class="line"><span>                while j &lt;= ploc[i][2]:</span></span>
<span class="line"><span>                    plat = Platform((ploc[i][0]+(j*tx)),ploc[i][1],tx,ty,&#39;ground.png&#39;)</span></span>
<span class="line"><span>                    plat_list.add(plat)</span></span>
<span class="line"><span>                    j=j+1</span></span>
<span class="line"><span>                print(&#39;run&#39; + str(i) + str(ploc[i]))</span></span>
<span class="line"><span>                i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return plat_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def stats(score,health):</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 4), &quot;Score:&quot;+str(score), SNOWGRAY, None, size=64)</span></span>
<span class="line"><span>    myfont.render_to(world, (4, 72), &quot;Health:&quot;+str(health), SNOWGRAY, None, size=64)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Setup</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>worldx = 960</span></span>
<span class="line"><span>worldy = 720</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fps = 40 # frame rate</span></span>
<span class="line"><span>ani = 4  # animation cycles</span></span>
<span class="line"><span>clock = pygame.time.Clock()</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>main = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BLUE  = (25,25,200)</span></span>
<span class="line"><span>BLACK = (23,23,23 )</span></span>
<span class="line"><span>WHITE = (254,254,254)</span></span>
<span class="line"><span>SNOWGRAY = (137,164,166)</span></span>
<span class="line"><span>ALPHA = (0,255,0)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>world = pygame.display.set_mode([worldx,worldy])</span></span>
<span class="line"><span>backdrop = pygame.image.load(os.path.join(&#39;images&#39;,&#39;stage.png&#39;)).convert()</span></span>
<span class="line"><span>backdropbox = world.get_rect()</span></span>
<span class="line"><span>player = Player() # spawn player</span></span>
<span class="line"><span>player.rect.x = 0</span></span>
<span class="line"><span>player.rect.y = 0</span></span>
<span class="line"><span>player_list = pygame.sprite.Group()</span></span>
<span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10</span></span>
<span class="line"><span>forwardx = 600</span></span>
<span class="line"><span>backwardx = 230</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eloc = []</span></span>
<span class="line"><span>eloc = [200,20]</span></span>
<span class="line"><span>gloc = []</span></span>
<span class="line"><span>tx = 64 #tile size</span></span>
<span class="line"><span>ty = 64 #tile size</span></span>
<span class="line"><span></span></span>
<span class="line"><span>font_path = os.path.join(os.path.dirname(os.path.realpath(__file__)),&quot;fonts&quot;,&quot;amazdoom.ttf&quot;)</span></span>
<span class="line"><span>font_size = tx</span></span>
<span class="line"><span>myfont = pygame.freetype.Font(font_path, font_size)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>i=0</span></span>
<span class="line"><span>while i &lt;= (worldx/tx)+tx:</span></span>
<span class="line"><span>    gloc.append(i*tx)</span></span>
<span class="line"><span>    i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>enemy_list = Level.bad( 1, eloc )</span></span>
<span class="line"><span>ground_list = Level.ground( 1,gloc,tx,ty )</span></span>
<span class="line"><span>plat_list = Level.platform( 1,tx,ty )</span></span>
<span class="line"><span>loot_list = Level.loot(1,tx,ty)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Main loop</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>while main == True:</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            pygame.quit(); sys.exit()</span></span>
<span class="line"><span>            main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYDOWN:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                print(&quot;LEFT&quot;)</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                print(&quot;RIGHT&quot;)</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                print(&#39;jump&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                player.jump(plat_list)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if event.key == ord(&#39;q&#39;):</span></span>
<span class="line"><span>                pygame.quit()</span></span>
<span class="line"><span>                sys.exit()</span></span>
<span class="line"><span>                main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # scroll the world forward</span></span>
<span class="line"><span>    if player.rect.x &gt;= forwardx:</span></span>
<span class="line"><span>        scroll = player.rect.x - forwardx</span></span>
<span class="line"><span>        player.rect.x = forwardx</span></span>
<span class="line"><span>        for p in plat_list:</span></span>
<span class="line"><span>            p.rect.x -= scroll</span></span>
<span class="line"><span>        for e in enemy_list:</span></span>
<span class="line"><span>            e.rect.x -= scroll</span></span>
<span class="line"><span>        for l in loot_list:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            l.rect.x -= scroll</span></span>
<span class="line"><span>               </span></span>
<span class="line"><span>    # scroll the world backward</span></span>
<span class="line"><span>    if player.rect.x &lt;= backwardx:</span></span>
<span class="line"><span>        scroll = backwardx - player.rect.x</span></span>
<span class="line"><span>        player.rect.x = backwardx</span></span>
<span class="line"><span>        for p in plat_list:</span></span>
<span class="line"><span>            p.rect.x += scroll</span></span>
<span class="line"><span>        for e in enemy_list:</span></span>
<span class="line"><span>            e.rect.x += scroll</span></span>
<span class="line"><span>        for l in loot_list:</span></span>
<span class="line"><span>            l.rect.x += scroll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    world.blit(backdrop, backdropbox)</span></span>
<span class="line"><span>    player.gravity() # check gravity</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player_list.draw(world) #refresh player position</span></span>
<span class="line"><span>    enemy_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    ground_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    plat_list.draw(world)   # refresh platforms</span></span>
<span class="line"><span>    loot_list.draw(world)   # refresh loot</span></span>
<span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    stats(player.score,player.health) # draw text</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><hr>`,40)),a("p",null,[s[31]||(s[31]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/1/add-scorekeeping-your-python-game"},{default:l(()=>[...s[30]||(s[30]=[n("https://opensource.com/article/20/1/add-scorekeeping-your-python-game",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:l(()=>[...s[32]||(s[32]=[n("Seth Kenlon",-1)])]),_:1}),s[37]||(s[37]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[33]||(s[33]=[n("lujun9972",-1)])]),_:1}),s[38]||(s[38]=n(" 譯者：",-1)),e(p,{href:"https://github.com/robsean"},{default:l(()=>[...s[34]||(s[34]=[n("robsean",-1)])]),_:1}),s[39]||(s[39]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[35]||(s[35]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[42]||(s[42]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[40]||(s[40]=[n("LCTT",-1)])]),_:1}),s[43]||(s[43]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[41]||(s[41]=[n("Linux中國",-1)])]),_:1}),s[44]||(s[44]=n(" 榮譽推出",-1))])])}const v=t(d,[["render",f]]);export{x as __pageData,v as default};
