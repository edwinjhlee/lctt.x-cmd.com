import{_ as i,a0 as o,w as r,s as c,I as a,x as s,a1 as e,A as t,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"使用 Python 學習面對對象的編程 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 學習面對對象的編程 | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 學習面對對象的編程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 學習面對對象的編程 | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20190705 Learn object-oriented programming with Python","title":"使用 Python 學習面對對象的編程","tag":"201909","desc":""},"relativePath":"201909/20190705 Learn object-oriented programming with Python.md","filePath":"[post].md"}'),d={name:"201909/20190705 Learn object-oriented programming with Python.md"};function u(h,n,g,f,m,y){const p=o("Link");return r(),c("div",null,[n[28]||(n[28]=a("h1",{id:"使用-python-學習面對對象的編程",tabindex:"-1"},[s("使用 Python 學習面對對象的編程 "),a("a",{class:"header-anchor",href:"#使用-python-學習面對對象的編程","aria-label":"Permalink to “使用 Python 學習面對對象的編程”"},"​")],-1)),n[29]||(n[29]=a("blockquote",null,[a("p",null,"使用 Python 類使你的代碼變得更加模組化。")],-1)),n[30]||(n[30]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201909/08/091142y2bdbboctw7xdbjq.jpg",alt:""})],-1)),a("p",null,[n[1]||(n[1]=s("在我上一篇文章中，我解釋瞭如何通過使用函數、創建模組或者兩者一起來",-1)),e(p,{href:"https://linux.cn/article-11295-1.html"},{default:t(()=>[...n[0]||(n[0]=[s("使 Python 代碼更加模組化",-1)])]),_:1}),n[2]||(n[2]=s("。函數對於避免重複多次使用的代碼非常有用，而模組可以確保你在不同的項目中複用代碼。但是模組化還有另一種方法：類。",-1))]),n[31]||(n[31]=l(`<p>如果你已經聽過<ruby>面對對象編程<rt>object-oriented programming</rt></ruby>（OOP）這個術語，那麼你可能會對類的用途有一些概念。程序員傾向於將類視為一個虛擬對象，有時與物理世界中的某些東西直接相關，有時則作為某種編程概念的表現形式。無論哪種表示，當你想要在程序中為你或程序的其他部分創建“對象”時，你都可以創建一個類來交互。</p><h3 id="沒有類的模板" tabindex="-1">沒有類的模板 <a class="header-anchor" href="#沒有類的模板" aria-label="Permalink to “沒有類的模板”">​</a></h3><p>假設你正在編寫一個以幻想世界為背景的遊戲，並且你需要這個應用程序能夠湧現出各種壞蛋來給玩家的生活帶來一些刺激。瞭解了很多關於函數的知識後，你可能會認為這聽起來像是函數的一個教科書案例：需要經常重複的代碼，但是在調用時可以考慮變量而只編寫一次。</p><p>下面一個純粹基於函數的敵人生成器實現的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import random</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def enemy(ancestry,gear):</span></span>
<span class="line"><span>    enemy=ancestry</span></span>
<span class="line"><span>    weapon=gear</span></span>
<span class="line"><span>    hp=random.randrange(0,20)</span></span>
<span class="line"><span>    ac=random.randrange(0,20)</span></span>
<span class="line"><span>    return [enemy,weapon,hp,ac]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def fight(tgt):</span></span>
<span class="line"><span>    print(&quot;You take a swing at the &quot; + tgt[0] + &quot;.&quot;)</span></span>
<span class="line"><span>    hit=random.randrange(0,20)</span></span>
<span class="line"><span>    if hit &gt; tgt[3]:</span></span>
<span class="line"><span>        print(&quot;You hit the &quot; + tgt[0] + &quot; for &quot; + str(hit) + &quot; damage!&quot;)</span></span>
<span class="line"><span>        tgt[2] = tgt[2] - hit</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        print(&quot;You missed.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>foe=enemy(&quot;troll&quot;,&quot;great axe&quot;)</span></span>
<span class="line"><span>print(&quot;You meet a &quot; + foe[0] + &quot; wielding a &quot; + foe[1])</span></span>
<span class="line"><span>print(&quot;Type the a key and then RETURN to attack.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>    action=input()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if action.lower() == &quot;a&quot;:</span></span>
<span class="line"><span>        fight(foe)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if foe[2] &lt; 1:</span></span>
<span class="line"><span>        print(&quot;You killed your foe!&quot;)</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        print(&quot;The &quot; + foe[0] + &quot; has &quot; + str(foe[2]) + &quot; HP remaining&quot;)</span></span></code></pre></div><p><code>enemy</code> 函數創造了一個具有多個屬性的敵人，例如譜系、武器、生命值和防禦等級。它返回每個屬性的列表，表示敵人全部特徵。</p><p>從某種意義上説，這段代碼創建了一個對象，即使它還沒有使用類。程序員將這個 <code>enemy</code> 稱為<em>對象</em>，因為該函數的結果（本例中是一個包含字符串和整數的列表）表示遊戲中一個單獨但複雜的<em>東西</em>。也就是説，列表中字符串和整數不是任意的：它們一起描述了一個虛擬對象。</p><p>在編寫描述符集合時，你可以使用變量，以便隨時使用它們來生成敵人。這有點像模板。</p><p>在示例代碼中，當需要對象的屬性時，會檢索相應的列表項。例如，要獲取敵人的譜系，代碼會查詢 <code>foe[0]</code>，對於生命值，會查詢 <code>foe[2]</code>，以此類推。</p>`,9)),a("p",null,[n[4]||(n[4]=s("這種方法沒有什麼不妥，代碼按預期運行。你可以添加更多不同類型的敵人，創建一個敵人類型列表，並在敵人創建期間從列表中隨機選擇，等等，它工作得很好。實際上，",-1)),e(p,{href:"https://opensource.com/article/17/4/how-program-games-raspberry-pi"},{default:t(()=>[...n[3]||(n[3]=[s("Lua",-1)])]),_:1}),n[5]||(n[5]=s(" 非常有效地利用這個原理來近似了一個面對對象模型。",-1))]),n[32]||(n[32]=l(`<p>然而，有時候對象不僅僅是屬性列表。</p><h3 id="使用對象" tabindex="-1">使用對象 <a class="header-anchor" href="#使用對象" aria-label="Permalink to “使用對象”">​</a></h3><p>在 Python 中，一切都是對象。你在 Python 中創建的任何東西都是某個預定義模板的<em>實例</em>。甚至基本的字符串和整數都是 Python <code>type</code> 類的衍生物。你可以在這個交互式 Python shell 中見證：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; foo=3</span></span>
<span class="line"><span>&gt;&gt;&gt; type(foo)</span></span>
<span class="line"><span>&lt;class &#39;int&#39;&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; foo=&quot;bar&quot;</span></span>
<span class="line"><span>&gt;&gt;&gt; type(foo)</span></span>
<span class="line"><span>&lt;class &#39;str&#39;&gt;</span></span></code></pre></div><p>當一個對象由一個類定義時，它不僅僅是一個屬性的集合，Python 類具有各自的函數。從邏輯上講，這很方便，因為只涉及某個對象類的操作包含在該對象的類中。</p><p>在示例代碼中，<code>fight</code> 的代碼是主應用程序的功能。這對於一個簡單的遊戲來説是可行的，但對於一個複雜的遊戲來説，世界中不僅僅有玩家和敵人，還可能有城鎮居民、牲畜、建築物、森林等等，它們都不需要使用戰鬥功能。將戰鬥代碼放在敵人的類中意味着你的代碼更有條理，在一個複雜的應用程序中，這是一個重要的優勢。</p><p>此外，每個類都有特權訪問自己的本地變量。例如，敵人的生命值，除了某些功能之外，是不會改變的數據。遊戲中的隨機蝴蝶不應該意外地將敵人的生命值降低到 0。理想情況下，即使沒有類，也不會發生這種情況。但是在具有大量活動部件的複雜應用程序中，確保不需要相互交互的部件永遠不會發生這種情況，這是一個非常有用的技巧。</p><p>Python 類也受垃圾收集的影響。當不再使用類的實例時，它將被移出內存。你可能永遠不知道這種情況會什麼時候發生，但是你往往知道什麼時候它不會發生，因為你的應用程序佔用了更多的內存，而且運行速度比較慢。將數據集隔離到類中可以幫助 Python 跟蹤哪些數據正在使用，哪些不在需要了。</p><h3 id="優雅的-python" tabindex="-1">優雅的 Python <a class="header-anchor" href="#優雅的-python" aria-label="Permalink to “優雅的 Python”">​</a></h3><p>下面是一個同樣簡單的戰鬥遊戲，使用了 <code>Enemy</code> 類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import random</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Enemy():</span></span>
<span class="line"><span>    def __init__(self,ancestry,gear):</span></span>
<span class="line"><span>        self.enemy=ancestry</span></span>
<span class="line"><span>        self.weapon=gear</span></span>
<span class="line"><span>        self.hp=random.randrange(10,20)</span></span>
<span class="line"><span>        self.ac=random.randrange(12,20)</span></span>
<span class="line"><span>        self.alive=True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def fight(self,tgt):</span></span>
<span class="line"><span>        print(&quot;You take a swing at the &quot; + self.enemy + &quot;.&quot;)</span></span>
<span class="line"><span>        hit=random.randrange(0,20)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.alive and hit &gt; self.ac:</span></span>
<span class="line"><span>            print(&quot;You hit the &quot; + self.enemy + &quot; for &quot; + str(hit) + &quot; damage!&quot;)</span></span>
<span class="line"><span>            self.hp = self.hp - hit</span></span>
<span class="line"><span>            print(&quot;The &quot; + self.enemy + &quot; has &quot; + str(self.hp) + &quot; HP remaining&quot;)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            print(&quot;You missed.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.hp &lt; 1:</span></span>
<span class="line"><span>            self.alive=False</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 遊戲開始</span></span>
<span class="line"><span>foe=Enemy(&quot;troll&quot;,&quot;great axe&quot;)</span></span>
<span class="line"><span>print(&quot;You meet a &quot; + foe.enemy + &quot; wielding a &quot; + foe.weapon)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 主函數循環</span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    print(&quot;Type the a key and then RETURN to attack.&quot;)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    action=input()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if action.lower() == &quot;a&quot;:</span></span>
<span class="line"><span>        foe.fight(foe)</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>    if foe.alive == False:</span></span>
<span class="line"><span>        print(&quot;You have won...this time.&quot;)</span></span>
<span class="line"><span>        exit()</span></span></code></pre></div><p>這個版本的遊戲將敵人作為一個包含相同屬性（譜系、武器、生命值和防禦）的對象來處理，並添加一個新的屬性來衡量敵人時候已被擊敗，以及一個戰鬥功能。</p>`,12)),a("p",null,[n[7]||(n[7]=s("類的第一個函數是一個特殊的函數，在 Python 中稱為 ",-1)),n[8]||(n[8]=a("code",null,"init",-1)),n[9]||(n[9]=s(" 或初始化的函數。這類似於其他語言中的",-1)),e(p,{href:"https://opensource.com/article/19/6/what-java-constructor"},{default:t(()=>[...n[6]||(n[6]=[s("構造器",-1)])]),_:1}),n[10]||(n[10]=s("，它創建了類的一個實例，你可以通過它的屬性和調用類時使用的任何變量來識別它（示例代碼中的 ",-1)),n[11]||(n[11]=a("code",null,"foe",-1)),n[12]||(n[12]=s("）。",-1))]),n[33]||(n[33]=l(`<h3 id="self-和類實例" tabindex="-1">Self 和類實例 <a class="header-anchor" href="#self-和類實例" aria-label="Permalink to “Self 和類實例”">​</a></h3><p>類的函數接受一種你在類之外看不到的新形式的輸入：<code>self</code>。如果不包含 <code>self</code>，那麼當你調用類函數時，Python 無法知道要使用的類的<em>哪個</em>實例。這就像在一間充滿獸人的房間裏説：“我要和獸人戰鬥”，向一個獸人發起。沒有人知道你指的是誰，所有獸人就都上來了。</p><p><img src="https://opensource.com/sites/default/files/images/orc-buch-opengameart_cc-by-sa.jpg" alt="Image of an Orc, CC-BY-SA by Buch on opengameart.org" title="CC-BY-SA by Buch on opengameart.org"></p><p><em>CC-BY-SA by Buch on opengameart.org</em></p><p>類中創建的每個屬性都以 <code>self</code> 符號作為前綴，該符號將變量標識為類的屬性。一旦派生出類的實例，就用表示該實例的變量替換掉 <code>self</code> 前綴。使用這個技巧，你可以在一間滿是獸人的房間裏説：“我要和譜系是 orc 的獸人戰鬥”，這樣來挑戰一個獸人。當 orc 聽到 “gorblar.orc” 時，它就知道你指的是誰（他自己），所以你得到是一場公平的戰鬥而不是鬥毆。在 Python 中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gorblar=Enemy(&quot;orc&quot;,&quot;sword&quot;)</span></span>
<span class="line"><span>print(&quot;The &quot; + gorblar.enemy + &quot; has &quot; + str(gorblar.hp) + &quot; remaining.&quot;)</span></span></code></pre></div><p>通過檢索類屬性（<code>gorblar.enemy</code> 或 <code>gorblar.hp</code> 或你需要的任何對象的任何值）而不是查詢 <code>foe[0]</code>（在函數示例中）或 <code>gorblar[0]</code> 來尋找敵人。</p><h3 id="本地變量" tabindex="-1">本地變量 <a class="header-anchor" href="#本地變量" aria-label="Permalink to “本地變量”">​</a></h3><p>如果類中的變量沒有以 <code>self</code> 關鍵字作為前綴，那麼它就是一個局部變量，就像在函數中一樣。例如，無論你做什麼，你都無法訪問 <code>Enemy.fight</code> 類之外的 <code>hit</code> 變量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; print(foe.hit)</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;./enclass.py&quot;, line 38, in &lt;module&gt;</span></span>
<span class="line"><span>    print(foe.hit)</span></span>
<span class="line"><span>AttributeError: &#39;Enemy&#39; object has no attribute &#39;hit&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; print(foe.fight.hit)</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;./enclass.py&quot;, line 38, in &lt;module&gt;</span></span>
<span class="line"><span>    print(foe.fight.hit)</span></span>
<span class="line"><span>AttributeError: &#39;function&#39; object has no attribute &#39;hit&#39;</span></span></code></pre></div><p><code>hit</code> 變量包含在 Enemy 類中，並且只能“存活”到在戰鬥中發揮作用。</p><h3 id="更模組化" tabindex="-1">更模組化 <a class="header-anchor" href="#更模組化" aria-label="Permalink to “更模組化”">​</a></h3><p>本例使用與主應用程序相同的文本文檔中的類。在一個複雜的遊戲中，我們更容易將每個類看作是自己獨立的應用程序。當多個開發人員處理同一個應用程序時，你會看到這一點：一個開發人員負責一個類，另一個開發人員負責主程序，只要他們彼此溝通這個類必須具有什麼屬性，就可以並行地開發這兩個代碼塊。</p><p>要使這個示例遊戲模組化，可以把它拆分為兩個文件：一個用於主應用程序，另一個用於類。如果它是一個更復雜的應用程序，你可能每個類都有一個文件，或每個邏輯類組有一個文件（例如，用於建築物的文件，用於自然環境的文件，用於敵人或 NPC 的文件等）。</p><p>將只包含 <code>Enemy</code> 類的一個文件保存為 <code>enemy.py</code>，將另一個包含其他內容的文件保存為 <code>main.py</code>。</p><p>以下是 <code>enemy.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import random</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Enemy():</span></span>
<span class="line"><span>    def __init__(self,ancestry,gear):</span></span>
<span class="line"><span>        self.enemy=ancestry</span></span>
<span class="line"><span>        self.weapon=gear</span></span>
<span class="line"><span>        self.hp=random.randrange(10,20)</span></span>
<span class="line"><span>        self.stg=random.randrange(0,20)</span></span>
<span class="line"><span>        self.ac=random.randrange(0,20)</span></span>
<span class="line"><span>        self.alive=True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def fight(self,tgt):</span></span>
<span class="line"><span>        print(&quot;You take a swing at the &quot; + self.enemy + &quot;.&quot;)</span></span>
<span class="line"><span>        hit=random.randrange(0,20)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.alive and hit &gt; self.ac:</span></span>
<span class="line"><span>            print(&quot;You hit the &quot; + self.enemy + &quot; for &quot; + str(hit) + &quot; damage!&quot;)</span></span>
<span class="line"><span>            self.hp = self.hp - hit</span></span>
<span class="line"><span>            print(&quot;The &quot; + self.enemy + &quot; has &quot; + str(self.hp) + &quot; HP remaining&quot;)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            print(&quot;You missed.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.hp &lt; 1:</span></span>
<span class="line"><span>            self.alive=False</span></span></code></pre></div><p>以下是 <code>main.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import enemy as en</span></span>
<span class="line"><span></span></span>
<span class="line"><span># game start</span></span>
<span class="line"><span>foe=en.Enemy(&quot;troll&quot;,&quot;great axe&quot;)</span></span>
<span class="line"><span>print(&quot;You meet a &quot; + foe.enemy + &quot; wielding a &quot; + foe.weapon)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># main loop</span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    print(&quot;Type the a key and then RETURN to attack.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    action=input()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if action.lower() == &quot;a&quot;:</span></span>
<span class="line"><span>        foe.fight(foe)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if foe.alive == False:</span></span>
<span class="line"><span>        print(&quot;You have won...this time.&quot;)</span></span>
<span class="line"><span>        exit()</span></span></code></pre></div><p>導入模組 <code>enemy.py</code> 使用了一條特別的語句，引用類文件名稱而不用帶有 <code>.py</code> 擴展名，後跟你選擇的命名空間指示符（例如，<code>import enemy as en</code>）。這個指示符是在你調用類時在代碼中使用的。你需要在導入時添加指示符，例如 <code>en.Enemy</code>，而不是隻使用 <code>Enemy()</code>。</p><p>所有這些文件名都是任意的，儘管在原則上不要使用罕見的名稱。將應用程序的中心命名為 <code>main.py</code> 是一個常見約定，和一個充滿類的文件通常以小寫形式命名，其中的類都以大寫字母開頭。是否遵循這些約定不會影響應用程序的運行方式，但它確實使經驗豐富的 Python 程序員更容易快速理解應用程序的工作方式。</p><p>在如何構建代碼方面有一些靈活性。例如，使用該示例代碼，兩個文件必須位於同一目錄中。如果你只想將類打包為模組，那麼必須創建一個名為 <code>mybad</code> 的目錄，並將你的類移入其中。在 <code>main.py</code> 中，你的 <code>import</code> 語句稍有變化：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from mybad import enemy as en</span></span></code></pre></div><p>兩種方法都會產生相同的結果，但如果你創建的類足夠通用，你認為其他開發人員可以在他們的項目中使用它們，那麼後者更好。</p><p>無論你選擇哪種方式，都可以啓動遊戲的模組化版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./main.py </span></span>
<span class="line"><span>You meet a troll wielding a great axe</span></span>
<span class="line"><span>Type the a key and then RETURN to attack.</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>You take a swing at the troll.</span></span>
<span class="line"><span>You missed.</span></span>
<span class="line"><span>Type the a key and then RETURN to attack.</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>You take a swing at the troll.</span></span>
<span class="line"><span>You hit the troll for 8 damage!</span></span>
<span class="line"><span>The troll has 4 HP remaining</span></span>
<span class="line"><span>Type the a key and then RETURN to attack.</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>You take a swing at the troll.</span></span>
<span class="line"><span>You hit the troll for 11 damage!</span></span>
<span class="line"><span>The troll has -7 HP remaining</span></span>
<span class="line"><span>You have won...this time.</span></span></code></pre></div><p>遊戲啓動了，它現在更加模組化了。現在你知道了面對對象的應用程序意味着什麼，但最重要的是，當你向獸人發起決鬥的時候，你知道是哪一個。</p><hr>`,28)),a("p",null,[n[14]||(n[14]=s("via: ",-1)),e(p,{href:"https://opensource.com/article/19/7/get-modular-python-classes"},{default:t(()=>[...n[13]||(n[13]=[s("https://opensource.com/article/19/7/get-modular-python-classes",-1)])]),_:1})]),a("p",null,[n[19]||(n[19]=s("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:t(()=>[...n[15]||(n[15]=[s("Seth Kenlon",-1)])]),_:1}),n[20]||(n[20]=s(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:t(()=>[...n[16]||(n[16]=[s("lujun9972",-1)])]),_:1}),n[21]||(n[21]=s(" 譯者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:t(()=>[...n[17]||(n[17]=[s("MjSeven",-1)])]),_:1}),n[22]||(n[22]=s(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:t(()=>[...n[18]||(n[18]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[25]||(n[25]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...n[23]||(n[23]=[s("LCTT",-1)])]),_:1}),n[26]||(n[26]=s(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:t(()=>[...n[24]||(n[24]=[s("Linux中國",-1)])]),_:1}),n[27]||(n[27]=s(" 榮譽推出",-1))])])}const T=i(d,[["render",u]]);export{q as __pageData,T as default};
