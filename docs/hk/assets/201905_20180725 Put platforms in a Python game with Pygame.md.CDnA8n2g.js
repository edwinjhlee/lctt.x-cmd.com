import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as l,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"在 Pygame 遊戲中放置平台 | LCTT x X-CMD","titleTemplate":false,"description":"在 Pygame 遊戲中放置平台 | LCTT (201905) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Pygame 遊戲中放置平台 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Pygame 遊戲中放置平台 | LCTT (201905) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201905/20180725 Put platforms in a Python game with Pygame","title":"在 Pygame 遊戲中放置平台","tag":"201905","desc":""},"relativePath":"201905/20180725 Put platforms in a Python game with Pygame.md","filePath":"[post].md"}'),c={name:"201905/20180725 Put platforms in a Python game with Pygame.md"};function g(m,s,f,u,y,h){const p=o("Link");return r(),d("div",null,[s[61]||(s[61]=a("h1",{id:"在-pygame-遊戲中放置平台",tabindex:"-1"},[n("在 Pygame 遊戲中放置平台 "),a("a",{class:"header-anchor",href:"#在-pygame-遊戲中放置平台","aria-label":"Permalink to “在 Pygame 遊戲中放置平台”"},"​")],-1)),s[62]||(s[62]=a("blockquote",null,[a("p",null,"在這個從零構建一個 Python 遊戲系列的第六部分中，為你的角色創建一些平台來旅行。")],-1)),s[63]||(s[63]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/header.png?itok=iq8HFoEJ",alt:""})],-1)),s[64]||(s[64]=a("p",null,"這是仍在進行中的關於使用 Pygame 模組來在 Python 3 中創建電腦遊戲的系列文章的第六部分。先前的文章是：",-1)),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("通過構建一個簡單的擲骰子游戲去學習怎麼用 Python 編程",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[1]||(s[1]=[n("使用 Python 和 Pygame 模組構建一個遊戲框架",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[2]||(s[2]=[n("如何在你的 Python 遊戲中添加一個玩家",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10874-1.html"},{default:e(()=>[...s[3]||(s[3]=[n("用 Pygame 使你的遊戲角色移動起來",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[4]||(s[4]=[n("如何向你的 Python 遊戲中添加一個敵人",-1)])]),_:1})])]),s[65]||(s[65]=a("p",null,"一個平台類遊戲需要平台。",-1)),a("p",null,[s[6]||(s[6]=n("在 ",-1)),l(p,{href:"https://www.pygame.org/news"},{default:e(()=>[...s[5]||(s[5]=[n("Pygame",-1)])]),_:1}),s[7]||(s[7]=n(" 中，平台本身也是個妖精，正像你那個可玩的妖精。這一點是重要的，因為有個是對象的平台，可以使你的玩家妖精更容易與之互動。",-1))]),s[66]||(s[66]=a("p",null,"創建平台有兩個主要步驟。首先，你必須給該對象編寫代碼，然後，你必須映射出你希望該對象出現的位置。",-1)),s[67]||(s[67]=a("h3",{id:"編碼平台對象",tabindex:"-1"},[n("編碼平台對象 "),a("a",{class:"header-anchor",href:"#編碼平台對象","aria-label":"Permalink to “編碼平台對象”"},"​")],-1)),a("p",null,[s[9]||(s[9]=n("要構建一個平台對象，你要創建一個名為 ",-1)),s[10]||(s[10]=a("code",null,"Platform",-1)),s[11]||(s[11]=n(" 的類。它是一個妖精，正像你的 ",-1)),s[12]||(s[12]=a("code",null,"Player",-1)),s[13]||(s[13]=n()),l(p,{href:"https://opensource.com/article/17/12/game-python-add-a-player"},{default:e(()=>[...s[8]||(s[8]=[n("妖精",-1)])]),_:1}),s[14]||(s[14]=n(" 一樣，帶有很多相同的屬性。",-1))]),a("p",null,[s[16]||(s[16]=n("你的 ",-1)),s[17]||(s[17]=a("code",null,"Platform",-1)),s[18]||(s[18]=n(" 類需要知道很多平台類型的信息，它應該出現在遊戲世界的哪裏、它應該包含的什麼圖片等等。這其中很多信息可能還尚不存在，這要看你為你的遊戲計劃了多少，但是沒有關係。正如直到",-1)),l(p,{href:"https://opensource.com/article/17/12/game-python-moving-player"},{default:e(()=>[...s[15]||(s[15]=[n("移動你的遊戲角色",-1)])]),_:1}),s[19]||(s[19]=n("那篇文章結束時，你都沒有告訴你的玩家妖精移動速度有多快，你不必事先告訴 ",-1)),s[20]||(s[20]=a("code",null,"Platform",-1)),s[21]||(s[21]=n(" 每一件事。",-1))]),s[68]||(s[68]=i(`<p>在這系列中你所寫的腳本的開頭附近，創建一個新的類。在這個代碼示例中前三行是用於説明上下文，因此在註釋的下面添加代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import pygame</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>## 新代碼如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Platform(pygame.sprite.Sprite):</span></span>
<span class="line"><span># x location, y location, img width, img height, img file    </span></span>
<span class="line"><span>def __init__(self,xloc,yloc,imgw,imgh,img):</span></span>
<span class="line"><span>    pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>    self.image = pygame.image.load(os.path.join(&#39;images&#39;,img)).convert()</span></span>
<span class="line"><span>    self.image.convert_alpha()</span></span>
<span class="line"><span>    self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>    self.rect = self.image.get_rect()</span></span>
<span class="line"><span>    self.rect.y = yloc</span></span>
<span class="line"><span>    self.rect.x = xloc</span></span></code></pre></div><p>當被調用時，這個類在某個 X 和 Y 位置上創建一個屏上對象，具有某種寬度和高度，並使用某種圖像作為紋理。這與如何在屏上繪製出玩家或敵人非常類似。</p><h3 id="平台的類型" tabindex="-1">平台的類型 <a class="header-anchor" href="#平台的類型" aria-label="Permalink to “平台的類型”">​</a></h3><p>下一步是繪製出你的平台需要出現的地方。</p><h4 id="瓷磚方式" tabindex="-1">瓷磚方式 <a class="header-anchor" href="#瓷磚方式" aria-label="Permalink to “瓷磚方式”">​</a></h4><p>實現平台類遊戲世界有幾種不同的方法。在最初的橫向滾軸遊戲中，例如，馬里奧超級兄弟和刺蝟索尼克，這個技巧是使用“瓷磚”方式，也就是説有幾個代表地面和各種平台的塊，並且這些塊被重複使用來製作一個關卡。你只能有 8 或 12 種不同的塊，你可以將它們排列在屏幕上來創建地面、浮動的平台，以及你遊戲中需要的一切其它的事物。有人發現這是製作遊戲最容易的方法了，因為你只需要製作（或下載）一小組關卡素材就能創建很多不同的關卡。然而，這裏的代碼需要一點數學知識。</p><p><img src="https://opensource.com/sites/default/files/uploads/supertux.png" alt="Supertux, a tile-based video game" title="Supertux, a tile-based video game"></p>`,8)),a("p",null,[a("em",null,[l(p,{href:"https://www.supertux.org/"},{default:e(()=>[...s[22]||(s[22]=[n("SuperTux",-1)])]),_:1}),s[23]||(s[23]=n(" ，一個基於瓷磚的電腦遊戲。",-1))])]),s[69]||(s[69]=a("h4",{id:"手工繪製方式",tabindex:"-1"},[n("手工繪製方式 "),a("a",{class:"header-anchor",href:"#手工繪製方式","aria-label":"Permalink to “手工繪製方式”"},"​")],-1)),a("p",null,[s[25]||(s[25]=n("另一種方法是將每個素材作為一個整體圖像。如果你喜歡為遊戲世界創建素材，那你會在用圖形應用程序構建遊戲世界的每個部分上花費很多時間。這種方法不需要太多的數學知識，因為所有的平台都是整體的、完整的對象，你只需要告訴 ",-1)),l(p,{href:"https://www.python.org/"},{default:e(()=>[...s[24]||(s[24]=[n("Python",-1)])]),_:1}),s[26]||(s[26]=n(" 將它們放在屏幕上的什麼位置。",-1))]),s[70]||(s[70]=i('<p>每種方法都有優勢和劣勢，並且根據於你選擇使用的方式，代碼稍有不同。我將覆蓋這兩方面，所以你可以在你的工程中使用一種或另一種，甚至兩者的混合。</p><h3 id="關卡繪製" tabindex="-1">關卡繪製 <a class="header-anchor" href="#關卡繪製" aria-label="Permalink to “關卡繪製”">​</a></h3><p>總的來説，繪製你的遊戲世界是關卡設計和遊戲編程中的一個重要的部分。這需要數學知識，但是沒有什麼太難的，而且 Python 擅長數學，它會有所幫助。</p><p>你也許發現先在紙張上設計是有用的。拿一張表格紙，並繪製一個方框來代表你的遊戲窗體。在方框中繪製平台，並標記其每一個平台的 X 和 Y 座標，以及它的寬度和高度。在方框中的實際位置沒有必要是精確的，你只要保持數字合理即可。譬如，假設你的屏幕是 720 像素寬，那麼你不能在一個屏幕上放 8 塊 100 像素的平台。</p><p>當然，不是你遊戲中的所有平台都必須容納在一個屏幕大小的方框裏，因為你的遊戲將隨着你的玩家行走而滾動。所以，可以繼續繪製你的遊戲世界到第一屏幕的右側，直到關卡結束。</p><p>如果你更喜歡精確一點，你可以使用方格紙。當設計一個瓷磚類的遊戲時，這是特別有用的，因為每個方格可以代表一個瓷磚。</p><p><img src="https://opensource.com/sites/default/files/uploads/layout.png" alt="Example of a level map" title="Example of a level map"></p><p><em>一個關卡地圖示例。</em></p><h4 id="座標系" tabindex="-1">座標系 <a class="header-anchor" href="#座標系" aria-label="Permalink to “座標系”">​</a></h4>',9)),a("p",null,[s[28]||(s[28]=n("你可能已經在學校中學習過",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Cartesian_coordinate_system"},{default:e(()=>[...s[27]||(s[27]=[n("笛卡爾座標系",-1)])]),_:1}),s[29]||(s[29]=n("。你學習的東西也適用於 Pygame，除了在 Pygame 中你的遊戲世界的座標系的原點 ",-1)),s[30]||(s[30]=a("code",null,"0,0",-1)),s[31]||(s[31]=n(" 是放置在你的屏幕的左上角而不是在中間，是你在地理課上用過的座標是在中間的。",-1))]),s[71]||(s[71]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/uploads/pygame_coordinates.png",alt:"Example of coordinates in Pygame",title:"Example of coordinates in Pygame"})],-1)),s[72]||(s[72]=a("p",null,[a("em",null,"在 Pygame 中的座標示例。")],-1)),s[73]||(s[73]=a("p",null,"X 軸起始於最左邊的 0，向右無限增加。Y 軸起始於屏幕頂部的 0，向下延伸。",-1)),s[74]||(s[74]=a("h4",{id:"圖片大小",tabindex:"-1"},[n("圖片大小 "),a("a",{class:"header-anchor",href:"#圖片大小","aria-label":"Permalink to “圖片大小”"},"​")],-1)),a("p",null,[s[33]||(s[33]=n("如果你不知道你的玩家、敵人、平台是多大的，繪製出一個遊戲世界是毫無意義的。你可以在圖形程序中找到你的平台或瓷磚的尺寸。例如在 ",-1)),l(p,{href:"https://krita.org/en/"},{default:e(()=>[...s[32]||(s[32]=[n("Krita",-1)])]),_:1}),s[34]||(s[34]=n(" 中，單擊“圖像”菜單，並選擇“屬性”。你可以在“屬性”窗口的最頂部處找到它的尺寸。",-1))]),s[75]||(s[75]=i(`<p>另外，你也可以創建一個簡單的 Python 腳本來告訴你的一個圖像的尺寸。打開一個新的文本文件，並輸入這些代碼到其中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from PIL import Image</span></span>
<span class="line"><span>import os.path</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if len(sys.argv) &gt; 1:</span></span>
<span class="line"><span>    print(sys.argv[1])</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    sys.exit(&#39;Syntax: identify.py [filename]&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pic = sys.argv[1]</span></span>
<span class="line"><span>dim = Image.open(pic)</span></span>
<span class="line"><span>X   = dim.size[0]</span></span>
<span class="line"><span>Y   = dim.size[1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(X,Y)</span></span></code></pre></div><p>保存該文本文件為 <code>identify.py</code>。</p><p>要使用這個腳本，你必須安裝一些額外的 Python 模組，它們包含了這個腳本中新使用的關鍵字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pip3 install Pillow --user</span></span></code></pre></div><p>一旦安裝好，在你遊戲工程目錄中運行這個腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./identify.py images/ground.png</span></span>
<span class="line"><span>(1080, 97)</span></span></code></pre></div><p>在這個示例中，地面平台的圖形的大小是 1080 像素寬和 97 像素高。</p><h3 id="平台塊" tabindex="-1">平台塊 <a class="header-anchor" href="#平台塊" aria-label="Permalink to “平台塊”">​</a></h3><p>如果你選擇單獨地繪製每個素材，你必須創建想要插入到你的遊戲世界中的幾個平台和其它元素，每個素材都放在它自己的文件中。換句話説，你應該讓每個素材都有一個文件，像這樣：</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame_floating.png" alt="One image file per object" title="One image file per object"></p><p><em>每個對象一個圖形文件。</em></p><p>你可以按照你希望的次數重複使用每個平台，只要確保每個文件僅包含一個平台。你不能使用一個文件包含全部素材，像這樣：</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame_flattened.png" alt="Your level cannot be one image file" title="Your level cannot be one image file"></p><p><em>你的關卡不能是一個圖形文件。</em></p><p>當你完成時，你可能希望你的遊戲看起來像這樣，但是如果你在一個大文件中創建你的關卡，你就沒有方法從背景中區分出一個平台，因此，要麼把對象繪製在它們自己的文件中，要麼從一個更大的文件中裁剪出它們，並保存為單獨的副本。</p>`,16)),a("p",null,[s[38]||(s[38]=a("strong",null,"注意：",-1)),s[39]||(s[39]=n(" 如同你的其它素材，你可以使用 ",-1)),l(p,{href:"https://www.gimp.org/"},{default:e(()=>[...s[35]||(s[35]=[n("GIMP",-1)])]),_:1}),s[40]||(s[40]=n("、Krita、",-1)),l(p,{href:"http://mypaint.org/about/"},{default:e(()=>[...s[36]||(s[36]=[n("MyPaint",-1)])]),_:1}),s[41]||(s[41]=n("，或 ",-1)),l(p,{href:"https://inkscape.org/en/"},{default:e(()=>[...s[37]||(s[37]=[n("Inkscape",-1)])]),_:1}),s[42]||(s[42]=n(" 來創建你的遊戲素材。",-1))]),s[76]||(s[76]=i(`<p>平台出現在每個關卡開始的屏幕上，因此你必須在你的 <code>Level</code> 類中添加一個 <code>platform</code> 函數。在這裏特例是地面平台，它重要到應該擁有它自己的一個組。通過把地面看作一組特殊類型的平台，你可以選擇它是否滾動，或它上面是否可以站立，而其它平台可以漂浮在它上面。這取決於你。</p><p>添加這兩個函數到你的 <code>Level</code> 類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def ground(lvl,x,y,w,h):</span></span>
<span class="line"><span>    ground_list = pygame.sprite.Group()</span></span>
<span class="line"><span>    if lvl == 1:</span></span>
<span class="line"><span>        ground = Platform(x,y,w,h,&#39;block-ground.png&#39;)</span></span>
<span class="line"><span>        ground_list.add(ground)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if lvl == 2:</span></span>
<span class="line"><span>        print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ground_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def platform( lvl ):</span></span>
<span class="line"><span>    plat_list = pygame.sprite.Group()</span></span>
<span class="line"><span>    if lvl == 1:</span></span>
<span class="line"><span>        plat = Platform(200, worldy-97-128, 285,67,&#39;block-big.png&#39;)</span></span>
<span class="line"><span>        plat_list.add(plat)</span></span>
<span class="line"><span>        plat = Platform(500, worldy-97-320, 197,54,&#39;block-small.png&#39;)</span></span>
<span class="line"><span>        plat_list.add(plat)</span></span>
<span class="line"><span>    if lvl == 2:</span></span>
<span class="line"><span>        print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    return plat_list</span></span></code></pre></div><p><code>ground</code> 函數需要一個 X 和 Y 位置，以便 Pygame 知道在哪裏放置地面平台。它也需要知道平台的寬度和高度，這樣 Pygame 知道地面延伸到每個方向有多遠。該函數使用你的 <code>Platform</code> 類來生成一個屏上對象，然後將這個對象添加到 <code>ground_list</code> 組。</p><p><code>platform</code> 函數本質上是相同的，除了其有更多的平台。在這個示例中，僅有兩個平台，但是你可以想有多少就有多少。在進入一個平台後，在列出另一個前你必須添加它到 <code>plat_list</code> 中。如果你不添加平台到組中，那麼它將不出現在你的遊戲中。</p><blockquote><p><strong>提示：</strong> 很難想像你的遊戲世界的 0 是在頂部，因為在真實世界中發生的情況是相反的；當估計你有多高時，你不會從上往下測量你自己，而是從腳到頭頂來測量。</p><p>如果對你來説從“地面”上來構建你的遊戲世界更容易，將 Y 軸值表示為負數可能有幫助。例如，你知道你的遊戲世界的底部是 <code>worldy</code> 的值。因此 <code>worldy</code> 減去地面的高度（在這個示例中是 97）是你的玩家正常站立的位置。如果你的角色是 64 像素高，那麼地面減去 128 正好是你的玩家的兩倍高。事實上，一個放置在 128 像素處平台大約是相對於你的玩家的兩層樓高度。一個平台在 -320 處比三層樓更高。等等。</p></blockquote><p>正像你現在可能所知的，如果你不使用它們，你的類和函數是沒有價值的。添加這些代碼到你的設置部分（第一行只是上下文，所以添加最後兩行）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enemy_list  = Level.bad( 1, eloc )</span></span>
<span class="line"><span>ground_list = Level.ground( 1,0,worldy-97,1080,97 )</span></span>
<span class="line"><span>plat_list   = Level.platform( 1 )</span></span></code></pre></div><p>並把這些行加到你的主循環（再一次，第一行僅用於上下文）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enemy_list.draw(world)  # 刷新敵人</span></span>
<span class="line"><span>ground_list.draw(world)  # 刷新地面</span></span>
<span class="line"><span>plat_list.draw(world)  # 刷新平台</span></span></code></pre></div><h3 id="瓷磚平台" tabindex="-1">瓷磚平台 <a class="header-anchor" href="#瓷磚平台" aria-label="Permalink to “瓷磚平台”">​</a></h3>`,11)),a("p",null,[s[44]||(s[44]=n("瓷磚類遊戲世界更容易製作，因為你只需要在前面繪製一些塊，就能在遊戲中一再使用它們創建每個平台。在像 ",-1)),l(p,{href:"https://opengameart.org/content/simplified-platformer-pack"},{default:e(()=>[...s[43]||(s[43]=[n("OpenGameArt.org",-1)])]),_:1}),s[45]||(s[45]=n(" 這樣的網站上甚至有一套瓷磚供你來使用。",-1))]),s[77]||(s[77]=i(`<p><code>Platform</code> 類與在前面部分中的類是相同的。</p><p><code>ground</code> 和 <code>platform</code> 在 <code>Level</code> 類中，然而，必須使用循環來計算使用多少塊來創建每個平台。</p><p>如果你打算在你的遊戲世界中有一個堅固的地面，這種地面是很簡單的。你只需要從整個窗口的一邊到另一邊“克隆”你的地面瓷磚。例如，你可以創建一個 X 和 Y 值的列表來規定每個瓷磚應該放置的位置，然後使用一個循環來獲取每個值並繪製每一個瓷磚。這僅是一個示例，所以不要添加這到你的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Do not add this to your code</span></span>
<span class="line"><span>gloc = [0,656,64,656,128,656,192,656,256,656,320,656,384,656]</span></span></code></pre></div><p>不過，如果你仔細看，你可以看到所有的 Y 值是相同的，X 值以 64 的增量不斷地增加 —— 這就是瓷磚的大小。這種重複是精確地，是計算機擅長的，因此你可以使用一點數學邏輯來讓計算機為你做所有的計算：</p><p>添加這些到你的腳本的設置部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gloc = []</span></span>
<span class="line"><span>tx   = 64</span></span>
<span class="line"><span>ty   = 64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=0</span></span>
<span class="line"><span>while i &lt;= (worldx/tx)+tx:</span></span>
<span class="line"><span>    gloc.append(i*tx)</span></span>
<span class="line"><span>    i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ground_list = Level.ground( 1,gloc,tx,ty )</span></span></code></pre></div><p>現在，不管你的窗口的大小，Python 會通過瓷磚的寬度分割遊戲世界的寬度，並創建一個數組列表列出每個 X 值。這裏不計算 Y 值，因為在平的地面上這個從不會變化。</p><p>為了在一個函數中使用數組，使用一個 <code>while</code> 循環，查看每個條目並在適當的位置添加一個地面瓷磚：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def ground(lvl,gloc,tx,ty):</span></span>
<span class="line"><span>    ground_list = pygame.sprite.Group()</span></span>
<span class="line"><span>    i=0</span></span>
<span class="line"><span>    if lvl == 1:</span></span>
<span class="line"><span>        while i &lt; len(gloc):</span></span>
<span class="line"><span>            ground = Platform(gloc[i],worldy-ty,tx,ty,&#39;tile-ground.png&#39;)</span></span>
<span class="line"><span>            ground_list.add(ground)</span></span>
<span class="line"><span>            i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if lvl == 2:</span></span>
<span class="line"><span>        print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ground_list</span></span></code></pre></div><p>除了 <code>while</code> 循環，這幾乎與在上面一部分中提供的瓷磚類平台的 <code>ground</code> 函數的代碼相同。</p><p>對於移動的平台，原理是相似的，但是這裏有一些技巧可以使它簡單。</p><p>你可以通過它的起始像素（它的 X 值）、距地面的高度（它的 Y 值）、繪製多少瓷磚來定義一個平台，而不是通過像素繪製每個平台。這樣，你不必操心每個平台的寬度和高度。</p><p>這個技巧的邏輯有一點複雜，因此請仔細複製這些代碼。有一個 <code>while</code> 循環嵌套在另一個 <code>while</code> 循環的內部，因為這個函數必須考慮每個數組項的三個值來成功地建造一個完整的平台。在這個示例中，這裏僅有三個平台以 <code>ploc.append</code> 語句定義，但是你的遊戲可能需要更多，因此你需要多少就定義多少。當然，有一些不會出現，因為它們遠在屏幕外，但是一旦當你進行滾動時，它們將呈現在眼前。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def platform(lvl,tx,ty):</span></span>
<span class="line"><span>    plat_list = pygame.sprite.Group()</span></span>
<span class="line"><span>    ploc = []</span></span>
<span class="line"><span>    i=0</span></span>
<span class="line"><span>    if lvl == 1:</span></span>
<span class="line"><span>        ploc.append((200,worldy-ty-128,3))</span></span>
<span class="line"><span>        ploc.append((300,worldy-ty-256,3))</span></span>
<span class="line"><span>        ploc.append((500,worldy-ty-128,4))</span></span>
<span class="line"><span>        while i &lt; len(ploc):</span></span>
<span class="line"><span>            j=0</span></span>
<span class="line"><span>            while j &lt;= ploc[i][2]:</span></span>
<span class="line"><span>                plat = Platform((ploc[i][0]+(j*tx)),ploc[i][1],tx,ty,&#39;tile.png&#39;)</span></span>
<span class="line"><span>                plat_list.add(plat)</span></span>
<span class="line"><span>                j=j+1</span></span>
<span class="line"><span>            print(&#39;run&#39; + str(i) + str(ploc[i]))</span></span>
<span class="line"><span>            i=i+1</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>    if lvl == 2:</span></span>
<span class="line"><span>        print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return plat_list</span></span></code></pre></div><p>要讓這些平台出現在你的遊戲世界，它們必須出現在你的主循環中。如果你還沒有這樣做，添加這些行到你的主循環（再一次，第一行僅被用於上下文）中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        enemy_list.draw(world)  # 刷新敵人</span></span>
<span class="line"><span>        ground_list.draw(world) # 刷新地面</span></span>
<span class="line"><span>        plat_list.draw(world)   # 刷新平台</span></span></code></pre></div><p>啓動你的遊戲，根據需要調整你的平台的放置位置。如果你看不見屏幕外產生的平台，不要擔心；你不久後就可以修復它。</p><p>到目前為止，這是遊戲的圖片和代碼：</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame_platforms.jpg" alt="Pygame game" title="Pygame game"></p><p><em>到目前為止，我們的 Pygame 平台。</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># draw a world</span></span>
<span class="line"><span># add a player and player control</span></span>
<span class="line"><span># add player movement</span></span>
<span class="line"><span># add enemy and basic collision</span></span>
<span class="line"><span># add platform</span></span>
<span class="line"><span></span></span>
<span class="line"><span># GNU All-Permissive License</span></span>
<span class="line"><span># Copying and distribution of this file, with or without modification,</span></span>
<span class="line"><span># are permitted in any medium without royalty provided the copyright</span></span>
<span class="line"><span># notice and this notice are preserved.  This file is offered as-is,</span></span>
<span class="line"><span># without any warranty.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import pygame</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Objects</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Platform(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    # x location, y location, img width, img height, img file    </span></span>
<span class="line"><span>    def __init__(self,xloc,yloc,imgw,imgh,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img)).convert()</span></span>
<span class="line"><span>        self.image.convert_alpha()</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.y = yloc</span></span>
<span class="line"><span>        self.rect.x = xloc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Player(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    Spawn a player</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.movex = 0</span></span>
<span class="line"><span>        self.movey = 0</span></span>
<span class="line"><span>        self.frame = 0</span></span>
<span class="line"><span>        self.health = 10</span></span>
<span class="line"><span>        self.score = 1</span></span>
<span class="line"><span>        self.images = []</span></span>
<span class="line"><span>        for i in range(1,9):</span></span>
<span class="line"><span>            img = pygame.image.load(os.path.join(&#39;images&#39;,&#39;hero&#39; + str(i) + &#39;.png&#39;)).convert()</span></span>
<span class="line"><span>            img.convert_alpha()</span></span>
<span class="line"><span>            img.set_colorkey(ALPHA)</span></span>
<span class="line"><span>            self.images.append(img)</span></span>
<span class="line"><span>            self.image = self.images[0]</span></span>
<span class="line"><span>            self.rect  = self.image.get_rect()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def control(self,x,y):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        control player movement</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.movex += x</span></span>
<span class="line"><span>        self.movey += y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def update(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        Update sprite position</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.rect.x = self.rect.x + self.movex</span></span>
<span class="line"><span>        self.rect.y = self.rect.y + self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # moving left</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame//ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # moving right</span></span>
<span class="line"><span>        if self.movex &gt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[(self.frame//ani)+4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # collisions</span></span>
<span class="line"><span>        enemy_hit_list = pygame.sprite.spritecollide(self, enemy_list, False)</span></span>
<span class="line"><span>        for enemy in enemy_hit_list:</span></span>
<span class="line"><span>            self.health -= 1</span></span>
<span class="line"><span>            print(self.health)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.health -= 1</span></span>
<span class="line"><span>            print(self.health)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Enemy(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    Spawn an enemy</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self,x,y,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img))</span></span>
<span class="line"><span>        #self.image.convert_alpha()</span></span>
<span class="line"><span>        #self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.x = x</span></span>
<span class="line"><span>        self.rect.y = y</span></span>
<span class="line"><span>        self.counter = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def move(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        enemy movement</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        distance = 80</span></span>
<span class="line"><span>        speed = 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.counter &gt;= 0 and self.counter &lt;= distance:</span></span>
<span class="line"><span>            self.rect.x += speed</span></span>
<span class="line"><span>        elif self.counter &gt;= distance and self.counter &lt;= distance*2:</span></span>
<span class="line"><span>            self.rect.x -= speed</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.counter = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.counter += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Level():</span></span>
<span class="line"><span>    def bad(lvl,eloc):</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            enemy = Enemy(eloc[0],eloc[1],&#39;yeti.png&#39;) # spawn enemy</span></span>
<span class="line"><span>            enemy_list = pygame.sprite.Group() # create enemy group</span></span>
<span class="line"><span>            enemy_list.add(enemy)              # add enemy to group</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return enemy_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def loot(lvl,lloc):</span></span>
<span class="line"><span>        print(lvl)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def ground(lvl,gloc,tx,ty):</span></span>
<span class="line"><span>        ground_list = pygame.sprite.Group()</span></span>
<span class="line"><span>        i=0</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            while i &lt; len(gloc):</span></span>
<span class="line"><span>                print(&quot;blockgen:&quot; + str(i))</span></span>
<span class="line"><span>                ground = Platform(gloc[i],worldy-ty,tx,ty,&#39;ground.png&#39;)</span></span>
<span class="line"><span>                ground_list.add(ground)</span></span>
<span class="line"><span>                i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return ground_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Setup</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>worldx = 960</span></span>
<span class="line"><span>worldy = 720</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fps = 40 # frame rate</span></span>
<span class="line"><span>ani = 4  # animation cycles</span></span>
<span class="line"><span>clock = pygame.time.Clock()</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>main = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BLUE  = (25,25,200)</span></span>
<span class="line"><span>BLACK = (23,23,23 )</span></span>
<span class="line"><span>WHITE = (254,254,254)</span></span>
<span class="line"><span>ALPHA = (0,255,0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>world = pygame.display.set_mode([worldx,worldy])</span></span>
<span class="line"><span>backdrop = pygame.image.load(os.path.join(&#39;images&#39;,&#39;stage.png&#39;)).convert()</span></span>
<span class="line"><span>backdropbox = world.get_rect()</span></span>
<span class="line"><span>player = Player() # spawn player</span></span>
<span class="line"><span>player.rect.x = 0</span></span>
<span class="line"><span>player.rect.y = 0</span></span>
<span class="line"><span>player_list = pygame.sprite.Group()</span></span>
<span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10 # how fast to move</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eloc = []</span></span>
<span class="line"><span>eloc = [200,20]</span></span>
<span class="line"><span>gloc = []</span></span>
<span class="line"><span>#gloc = [0,630,64,630,128,630,192,630,256,630,320,630,384,630]</span></span>
<span class="line"><span>tx = 64 #tile size</span></span>
<span class="line"><span>ty = 64 #tile size</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=0</span></span>
<span class="line"><span>while i &lt;= (worldx/tx)+tx:</span></span>
<span class="line"><span>    gloc.append(i*tx)</span></span>
<span class="line"><span>    i=i+1</span></span>
<span class="line"><span>    print(&quot;block: &quot; + str(i))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>enemy_list = Level.bad( 1, eloc )</span></span>
<span class="line"><span>ground_list = Level.ground( 1,gloc,tx,ty )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Main loop</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>while main == True:</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            pygame.quit(); sys.exit()</span></span>
<span class="line"><span>            main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYDOWN:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                print(&#39;jump&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == ord(&#39;q&#39;):</span></span>
<span class="line"><span>                pygame.quit()</span></span>
<span class="line"><span>                sys.exit()</span></span>
<span class="line"><span>                main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#    world.fill(BLACK)</span></span>
<span class="line"><span>    world.blit(backdrop, backdropbox)</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player_list.draw(world) #refresh player position</span></span>
<span class="line"><span>    enemy_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    ground_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><p>（LCTT 譯註：到本文翻譯完為止，該系列已經近一年沒有繼續更新了~）</p><hr>`,24)),a("p",null,[s[47]||(s[47]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/18/7/put-platforms-python-game"},{default:e(()=>[...s[46]||(s[46]=[n("https://opensource.com/article/18/7/put-platforms-python-game",-1)])]),_:1})]),a("p",null,[s[52]||(s[52]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[48]||(s[48]=[n("Seth Kenlon",-1)])]),_:1}),s[53]||(s[53]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[49]||(s[49]=[n("lujun9972",-1)])]),_:1}),s[54]||(s[54]=n(" 譯者：",-1)),l(p,{href:"https://github.com/robsean"},{default:e(()=>[...s[50]||(s[50]=[n("robsean",-1)])]),_:1}),s[55]||(s[55]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[51]||(s[51]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[58]||(s[58]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[56]||(s[56]=[n("LCTT",-1)])]),_:1}),s[59]||(s[59]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[57]||(s[57]=[n("Linux中國",-1)])]),_:1}),s[60]||(s[60]=n(" 榮譽推出",-1))])])}const x=t(c,[["render",g]]);export{v as __pageData,x as default};
