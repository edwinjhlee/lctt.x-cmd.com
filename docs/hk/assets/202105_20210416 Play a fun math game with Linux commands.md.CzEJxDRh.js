import{_ as l,a0 as t,w as o,s as d,I as a,x as n,a1 as e,A as i,ao as h}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"用 Linux 命令玩一個有趣的數學遊戲 | LCTT x X-CMD","titleTemplate":false,"description":"用 Linux 命令玩一個有趣的數學遊戲 | LCTT (202105) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Linux 命令玩一個有趣的數學遊戲 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Linux 命令玩一個有趣的數學遊戲 | LCTT (202105) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202105/20210416 Play a fun math game with Linux commands","title":"用 Linux 命令玩一個有趣的數學遊戲","tag":"202105","desc":""},"relativePath":"202105/20210416 Play a fun math game with Linux commands.md","filePath":"[post].md"}'),c={name:"202105/20210416 Play a fun math game with Linux commands.md"};function r(g,s,u,k,b,m){const p=t("Link");return o(),d("div",null,[s[22]||(s[22]=a("h1",{id:"用-linux-命令玩一個有趣的數學遊戲",tabindex:"-1"},[n("用 Linux 命令玩一個有趣的數學遊戲 "),a("a",{class:"header-anchor",href:"#用-linux-命令玩一個有趣的數學遊戲","aria-label":"Permalink to “用 Linux 命令玩一個有趣的數學遊戲”"},"​")],-1)),s[23]||(s[23]=a("blockquote",null,[a("p",null,"在家玩流行的英國遊戲節目 “Countdown” 中的數字遊戲。")],-1)),s[24]||(s[24]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202105/03/221459uchb0f8xcxfrhc86.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("像許多人一樣，我在大流行期間看了不少新的電視節目。我最近發現了一個英國的遊戲節目，叫做 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Countdown_%28game_show%29"},{default:i(()=>[...s[0]||(s[0]=[n("Countdown",-1)])]),_:1}),s[2]||(s[2]=n("，參賽者在其中玩兩種遊戲：一種是 ",-1)),s[3]||(s[3]=a("em",null,"單詞",-1)),s[4]||(s[4]=n(" 遊戲，他們試圖從雜亂的字母中找出最長的單詞；另一種是 ",-1)),s[5]||(s[5]=a("em",null,"數字",-1)),s[6]||(s[6]=n(" 遊戲，他們從隨機選擇的數字中計算出一個目標數字。因為我喜歡數學，我發現自己被數字遊戲所吸引。",-1))]),s[25]||(s[25]=h(`<p>數字遊戲可以為你的下一個家庭遊戲之夜增添樂趣，所以我想分享我自己的一個遊戲變體。你以一組隨機數字開始，分為 1 到 10 的“小”數字和 15、20、25，以此類推，直到 100 的“大”數字。你從大數字和小數字中挑選六個數字的任何組合。</p><p>接下來，你生成一個 200 到 999 之間的隨機“目標”數字。然後用你的六個數字進行簡單的算術運算，嘗試用每個“小”和“大”數字計算出目標數字，但使用不能超過一次。如果你能準確地計算出目標數字，你就能得到最高分，如果距離目標數字 10 以內就得到較低的分數。</p><p>例如，如果你的隨機數是 75、100、2、3、4 和 1，而你的目標數是 505，你可以説 <code>2+3=5</code>，<code>5×100=500</code>，<code>4+1=5</code>，以及 <code>5+500=505</code>。或者更直接地：<code>(2+3)×100 + 4 + 1 = 505</code>。</p><h3 id="在命令列中隨機化列表" tabindex="-1">在命令列中隨機化列表 <a class="header-anchor" href="#在命令列中隨機化列表" aria-label="Permalink to “在命令列中隨機化列表”">​</a></h3><p>我發現在家裏玩這個遊戲的最好方法是從 1 到 10 的池子裏抽出四個“小”數字，從 15 到 100 的 5 的倍數中抽出兩個“大”數字。你可以使用 Linux 命令列來為你創建這些隨機數。</p><p>讓我們從“小”數字開始。我希望這些數字在 1 到 10 的範圍內。你可以使用 Linux 的 <code>seq</code> 命令生成一個數字序列。你可以用幾種不同的方式運行 <code>seq</code>，但最簡單的形式是提供序列的起始和結束數字。要生成一個從 1 到 10 的列表，你可以運行這個命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 1 10</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><p>為了隨機化這個列表，你可以使用 Linux 的 <code>shuf</code>（“shuffle”，打亂）命令。<code>shuf</code> 將隨機化你給它的東西的順序，通常是一個文件。例如，如果你把 <code>seq</code> 命令的輸出發送到 <code>shuf</code> 命令，你會收到一個 1 到 10 之間的隨機數字列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 1 10 | shuf</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>9</span></span></code></pre></div><p>要從 1 到 10 的列表中只選擇四個隨機數，你可以將輸出發送到 <code>head</code> 命令，它將打印出輸入的前幾行。使用 <code>-4</code> 選項來指定 <code>head</code> 只打印前四行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 1 10 | shuf | head -4</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>4</span></span></code></pre></div><p>注意，這個列表與前面的例子不同，因為 <code>shuf</code> 每次都會生成一個隨機順序。</p><p>現在你可以採取下一步措施來生成“大”數字的隨機列表。第一步是生成一個可能的數字列表，從 15 開始，以 5 為單位遞增，直到達到 100。你可以用 Linux 的 <code>seq</code> 命令生成這個列表。為了使每個數字以 5 為單位遞增，在 <code>seq</code> 命令中插入另一個選項來表示 <em>步進</em>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 15 5 100</span></span>
<span class="line"><span>15</span></span>
<span class="line"><span>20</span></span>
<span class="line"><span>25</span></span>
<span class="line"><span>30</span></span>
<span class="line"><span>35</span></span>
<span class="line"><span>40</span></span>
<span class="line"><span>45</span></span>
<span class="line"><span>50</span></span>
<span class="line"><span>55</span></span>
<span class="line"><span>60</span></span>
<span class="line"><span>65</span></span>
<span class="line"><span>70</span></span>
<span class="line"><span>75</span></span>
<span class="line"><span>80</span></span>
<span class="line"><span>85</span></span>
<span class="line"><span>90</span></span>
<span class="line"><span>95</span></span>
<span class="line"><span>100</span></span></code></pre></div><p>就像以前一樣，你可以隨機化這個列表，選擇兩個“大”數字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 15 5 100 | shuf | head -2</span></span>
<span class="line"><span>75</span></span>
<span class="line"><span>40</span></span></code></pre></div><h3 id="用-bash-生成一個隨機數" tabindex="-1">用 Bash 生成一個隨機數 <a class="header-anchor" href="#用-bash-生成一個隨機數" aria-label="Permalink to “用 Bash 生成一個隨機數”">​</a></h3><p>我想你可以用類似的方法從 200 到 999 的範圍內選擇遊戲的目標數字。但是生成單個隨機數的最簡單的方案是直接在 Bash 中使用 <code>RANDOM</code> 變量。當你引用這個內置變量時，Bash 會生成一個大的隨機數。要把它放到 200 到 999 的範圍內，你需要先把隨機數放到 0 到 799 的範圍內，然後加上 200。</p><p>要把隨機數放到從 0 開始的特定範圍內，你可以使用<strong>模數</strong>算術運算符。模數計算的是兩個數字相除後的 <em>餘數</em>。如果我用 801 除以 800，結果是 1，餘數是 1（模數是 1）。800 除以 800 的結果是 1，餘數是 0（模數是 0）。而用 799 除以 800 的結果是 0，餘數是 799（模數是 799）。</p><p>Bash 通過 <code>$(())</code> 結構支持算術展開。在雙括號之間，Bash 將對你提供的數值進行算術運算。要計算 801 除以 800 的模數，然後加上 200，你可以輸入:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $(( 801 % 800 + 200 ))</span></span>
<span class="line"><span>201</span></span></code></pre></div><p>通過這個操作，你可以計算出一個 200 到 999 之間的隨機目標數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $(( RANDOM % 800 + 200 ))</span></span>
<span class="line"><span>673</span></span></code></pre></div><p>你可能想知道為什麼我在 Bash 語句中使用 <code>RANDOM</code> 而不是 <code>$RANDOM</code>。在算術擴展中, Bash 會自動擴展雙括號內的任何變量. 你不需要在 <code>$RANDOM</code> 變量上的 <code>$</code> 來引用該變量的值, 因為 Bash 會幫你做這件事。</p><h3 id="玩數字遊戲" tabindex="-1">玩數字遊戲 <a class="header-anchor" href="#玩數字遊戲" aria-label="Permalink to “玩數字遊戲”">​</a></h3><p>讓我們把所有這些放在一起，玩玩數字遊戲。產生兩個隨機的“大”數字, 四個隨機的“小”數值，以及目標值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 15 5 100 | shuf | head -2</span></span>
<span class="line"><span>75</span></span>
<span class="line"><span>100</span></span>
<span class="line"><span>$ seq 1 10 | shuf | head -4</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>$ echo $(( RANDOM % 800 + 200 ))</span></span>
<span class="line"><span>868</span></span></code></pre></div><p>我的數字是 <strong>75</strong>、<strong>100</strong>、<strong>4</strong>、<strong>3</strong>、<strong>10</strong> 和 <strong>2</strong>，而我的目標數字是 <strong>868</strong>。</p><p>如果我用每個“小”和“大”數字做這些算術運算，並不超過一次，我就能接近目標數字了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>10×75 = 750</span></span>
<span class="line"><span>750+100 = 850</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然後：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4×3 = 12</span></span>
<span class="line"><span>850+12 = 862</span></span>
<span class="line"><span>862+2 = 864</span></span></code></pre></div><p>只相差 4 了，不錯！但我發現這樣可以用每個隨機數不超過一次來計算出準確的數字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>4×2 = 8</span></span>
<span class="line"><span>8×100 = 800</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然後：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>75-10+3 = 68</span></span>
<span class="line"><span>800+68 = 868</span></span></code></pre></div><p>或者我可以做 <em>這些</em> 計算來準確地得到目標數字。這隻用了六個隨機數中的五個：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>4×3 = 12</span></span>
<span class="line"><span>75+12 = 87</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然後：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>87×10 = 870</span></span>
<span class="line"><span>870-2 = 868</span></span></code></pre></div><p>試一試 <em>Countdown</em> 數字遊戲，並在評論中告訴我們你做得如何。</p><hr>`,36)),a("p",null,[s[8]||(s[8]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/21/4/math-game-linux-commands"},{default:i(()=>[...s[7]||(s[7]=[n("https://opensource.com/article/21/4/math-game-linux-commands",-1)])]),_:1})]),a("p",null,[s[13]||(s[13]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/jim-hall"},{default:i(()=>[...s[9]||(s[9]=[n("Jim Hall",-1)])]),_:1}),s[14]||(s[14]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[10]||(s[10]=[n("lujun9972",-1)])]),_:1}),s[15]||(s[15]=n(" 譯者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:i(()=>[...s[11]||(s[11]=[n("geekpi",-1)])]),_:1}),s[16]||(s[16]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[12]||(s[12]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[19]||(s[19]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[17]||(s[17]=[n("LCTT",-1)])]),_:1}),s[20]||(s[20]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[18]||(s[18]=[n("Linux中國",-1)])]),_:1}),s[21]||(s[21]=n(" 榮譽推出",-1))])])}const y=l(c,[["render",r]]);export{C as __pageData,y as default};
