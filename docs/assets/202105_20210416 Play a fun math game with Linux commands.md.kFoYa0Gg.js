import{_ as l,a0 as t,w as o,s as d,I as a,x as n,a1 as e,A as i,ao as h}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"用 Linux 命令玩一个有趣的数学游戏 | LCTT x X-CMD","titleTemplate":false,"description":"用 Linux 命令玩一个有趣的数学游戏 | LCTT (202105) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Linux 命令玩一个有趣的数学游戏 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Linux 命令玩一个有趣的数学游戏 | LCTT (202105) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202105/20210416 Play a fun math game with Linux commands","title":"用 Linux 命令玩一个有趣的数学游戏","tag":"202105","desc":""},"relativePath":"202105/20210416 Play a fun math game with Linux commands.md","filePath":"[post].md"}'),c={name:"202105/20210416 Play a fun math game with Linux commands.md"};function r(g,s,u,k,b,m){const p=t("Link");return o(),d("div",null,[s[22]||(s[22]=a("h1",{id:"用-linux-命令玩一个有趣的数学游戏",tabindex:"-1"},[n("用 Linux 命令玩一个有趣的数学游戏 "),a("a",{class:"header-anchor",href:"#用-linux-命令玩一个有趣的数学游戏","aria-label":"Permalink to “用 Linux 命令玩一个有趣的数学游戏”"},"​")],-1)),s[23]||(s[23]=a("blockquote",null,[a("p",null,"在家玩流行的英国游戏节目 “Countdown” 中的数字游戏。")],-1)),s[24]||(s[24]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202105/03/221459uchb0f8xcxfrhc86.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("像许多人一样，我在大流行期间看了不少新的电视节目。我最近发现了一个英国的游戏节目，叫做 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Countdown_%28game_show%29"},{default:i(()=>[...s[0]||(s[0]=[n("Countdown",-1)])]),_:1}),s[2]||(s[2]=n("，参赛者在其中玩两种游戏：一种是 ",-1)),s[3]||(s[3]=a("em",null,"单词",-1)),s[4]||(s[4]=n(" 游戏，他们试图从杂乱的字母中找出最长的单词；另一种是 ",-1)),s[5]||(s[5]=a("em",null,"数字",-1)),s[6]||(s[6]=n(" 游戏，他们从随机选择的数字中计算出一个目标数字。因为我喜欢数学，我发现自己被数字游戏所吸引。",-1))]),s[25]||(s[25]=h(`<p>数字游戏可以为你的下一个家庭游戏之夜增添乐趣，所以我想分享我自己的一个游戏变体。你以一组随机数字开始，分为 1 到 10 的“小”数字和 15、20、25，以此类推，直到 100 的“大”数字。你从大数字和小数字中挑选六个数字的任何组合。</p><p>接下来，你生成一个 200 到 999 之间的随机“目标”数字。然后用你的六个数字进行简单的算术运算，尝试用每个“小”和“大”数字计算出目标数字，但使用不能超过一次。如果你能准确地计算出目标数字，你就能得到最高分，如果距离目标数字 10 以内就得到较低的分数。</p><p>例如，如果你的随机数是 75、100、2、3、4 和 1，而你的目标数是 505，你可以说 <code>2+3=5</code>，<code>5×100=500</code>，<code>4+1=5</code>，以及 <code>5+500=505</code>。或者更直接地：<code>(2+3)×100 + 4 + 1 = 505</code>。</p><h3 id="在命令行中随机化列表" tabindex="-1">在命令行中随机化列表 <a class="header-anchor" href="#在命令行中随机化列表" aria-label="Permalink to “在命令行中随机化列表”">​</a></h3><p>我发现在家里玩这个游戏的最好方法是从 1 到 10 的池子里抽出四个“小”数字，从 15 到 100 的 5 的倍数中抽出两个“大”数字。你可以使用 Linux 命令行来为你创建这些随机数。</p><p>让我们从“小”数字开始。我希望这些数字在 1 到 10 的范围内。你可以使用 Linux 的 <code>seq</code> 命令生成一个数字序列。你可以用几种不同的方式运行 <code>seq</code>，但最简单的形式是提供序列的起始和结束数字。要生成一个从 1 到 10 的列表，你可以运行这个命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 1 10</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><p>为了随机化这个列表，你可以使用 Linux 的 <code>shuf</code>（“shuffle”，打乱）命令。<code>shuf</code> 将随机化你给它的东西的顺序，通常是一个文件。例如，如果你把 <code>seq</code> 命令的输出发送到 <code>shuf</code> 命令，你会收到一个 1 到 10 之间的随机数字列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 1 10 | shuf</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>9</span></span></code></pre></div><p>要从 1 到 10 的列表中只选择四个随机数，你可以将输出发送到 <code>head</code> 命令，它将打印出输入的前几行。使用 <code>-4</code> 选项来指定 <code>head</code> 只打印前四行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 1 10 | shuf | head -4</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>4</span></span></code></pre></div><p>注意，这个列表与前面的例子不同，因为 <code>shuf</code> 每次都会生成一个随机顺序。</p><p>现在你可以采取下一步措施来生成“大”数字的随机列表。第一步是生成一个可能的数字列表，从 15 开始，以 5 为单位递增，直到达到 100。你可以用 Linux 的 <code>seq</code> 命令生成这个列表。为了使每个数字以 5 为单位递增，在 <code>seq</code> 命令中插入另一个选项来表示 <em>步进</em>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 15 5 100</span></span>
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
<span class="line"><span>100</span></span></code></pre></div><p>就像以前一样，你可以随机化这个列表，选择两个“大”数字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 15 5 100 | shuf | head -2</span></span>
<span class="line"><span>75</span></span>
<span class="line"><span>40</span></span></code></pre></div><h3 id="用-bash-生成一个随机数" tabindex="-1">用 Bash 生成一个随机数 <a class="header-anchor" href="#用-bash-生成一个随机数" aria-label="Permalink to “用 Bash 生成一个随机数”">​</a></h3><p>我想你可以用类似的方法从 200 到 999 的范围内选择游戏的目标数字。但是生成单个随机数的最简单的方案是直接在 Bash 中使用 <code>RANDOM</code> 变量。当你引用这个内置变量时，Bash 会生成一个大的随机数。要把它放到 200 到 999 的范围内，你需要先把随机数放到 0 到 799 的范围内，然后加上 200。</p><p>要把随机数放到从 0 开始的特定范围内，你可以使用<strong>模数</strong>算术运算符。模数计算的是两个数字相除后的 <em>余数</em>。如果我用 801 除以 800，结果是 1，余数是 1（模数是 1）。800 除以 800 的结果是 1，余数是 0（模数是 0）。而用 799 除以 800 的结果是 0，余数是 799（模数是 799）。</p><p>Bash 通过 <code>$(())</code> 结构支持算术展开。在双括号之间，Bash 将对你提供的数值进行算术运算。要计算 801 除以 800 的模数，然后加上 200，你可以输入:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $(( 801 % 800 + 200 ))</span></span>
<span class="line"><span>201</span></span></code></pre></div><p>通过这个操作，你可以计算出一个 200 到 999 之间的随机目标数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $(( RANDOM % 800 + 200 ))</span></span>
<span class="line"><span>673</span></span></code></pre></div><p>你可能想知道为什么我在 Bash 语句中使用 <code>RANDOM</code> 而不是 <code>$RANDOM</code>。在算术扩展中, Bash 会自动扩展双括号内的任何变量. 你不需要在 <code>$RANDOM</code> 变量上的 <code>$</code> 来引用该变量的值, 因为 Bash 会帮你做这件事。</p><h3 id="玩数字游戏" tabindex="-1">玩数字游戏 <a class="header-anchor" href="#玩数字游戏" aria-label="Permalink to “玩数字游戏”">​</a></h3><p>让我们把所有这些放在一起，玩玩数字游戏。产生两个随机的“大”数字, 四个随机的“小”数值，以及目标值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ seq 15 5 100 | shuf | head -2</span></span>
<span class="line"><span>75</span></span>
<span class="line"><span>100</span></span>
<span class="line"><span>$ seq 1 10 | shuf | head -4</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>$ echo $(( RANDOM % 800 + 200 ))</span></span>
<span class="line"><span>868</span></span></code></pre></div><p>我的数字是 <strong>75</strong>、<strong>100</strong>、<strong>4</strong>、<strong>3</strong>、<strong>10</strong> 和 <strong>2</strong>，而我的目标数字是 <strong>868</strong>。</p><p>如果我用每个“小”和“大”数字做这些算术运算，并不超过一次，我就能接近目标数字了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>10×75 = 750</span></span>
<span class="line"><span>750+100 = 850</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4×3 = 12</span></span>
<span class="line"><span>850+12 = 862</span></span>
<span class="line"><span>862+2 = 864</span></span></code></pre></div><p>只相差 4 了，不错！但我发现这样可以用每个随机数不超过一次来计算出准确的数字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>4×2 = 8</span></span>
<span class="line"><span>8×100 = 800</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>75-10+3 = 68</span></span>
<span class="line"><span>800+68 = 868</span></span></code></pre></div><p>或者我可以做 <em>这些</em> 计算来准确地得到目标数字。这只用了六个随机数中的五个：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>4×3 = 12</span></span>
<span class="line"><span>75+12 = 87</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>87×10 = 870</span></span>
<span class="line"><span>870-2 = 868</span></span></code></pre></div><p>试一试 <em>Countdown</em> 数字游戏，并在评论中告诉我们你做得如何。</p><hr>`,36)),a("p",null,[s[8]||(s[8]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/21/4/math-game-linux-commands"},{default:i(()=>[...s[7]||(s[7]=[n("https://opensource.com/article/21/4/math-game-linux-commands",-1)])]),_:1})]),a("p",null,[s[13]||(s[13]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/jim-hall"},{default:i(()=>[...s[9]||(s[9]=[n("Jim Hall",-1)])]),_:1}),s[14]||(s[14]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[10]||(s[10]=[n("lujun9972",-1)])]),_:1}),s[15]||(s[15]=n(" 译者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:i(()=>[...s[11]||(s[11]=[n("geekpi",-1)])]),_:1}),s[16]||(s[16]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[12]||(s[12]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[19]||(s[19]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[17]||(s[17]=[n("LCTT",-1)])]),_:1}),s[20]||(s[20]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[18]||(s[18]=[n("Linux中国",-1)])]),_:1}),s[21]||(s[21]=n(" 荣誉推出",-1))])])}const y=l(c,[["render",r]]);export{C as __pageData,y as default};
