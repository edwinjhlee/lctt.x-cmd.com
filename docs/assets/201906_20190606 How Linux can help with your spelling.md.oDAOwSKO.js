import{_ as i,a0 as t,w as o,s as r,ao as d,I as n,x as a,a1 as p,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"如何用 Linux 帮助你拼写 | LCTT x X-CMD","titleTemplate":false,"description":"如何用 Linux 帮助你拼写 | LCTT (201906) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用 Linux 帮助你拼写 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用 Linux 帮助你拼写 | LCTT (201906) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201906/20190606 How Linux can help with your spelling","title":"如何用 Linux 帮助你拼写","tag":"201906","desc":""},"relativePath":"201906/20190606 How Linux can help with your spelling.md","filePath":"[post].md"}'),c={name:"201906/20190606 How Linux can help with your spelling.md"};function h(g,s,k,u,b,m){const e=t("Link");return o(),r("div",null,[s[18]||(s[18]=d(`<h1 id="如何用-linux-帮助你拼写" tabindex="-1">如何用 Linux 帮助你拼写 <a class="header-anchor" href="#如何用-linux-帮助你拼写" aria-label="Permalink to “如何用 Linux 帮助你拼写”">​</a></h1><blockquote><p>无论你是纠结一个难以理解的单词，还是在将报告发给老板之前再检查一遍，Linux 都可以帮助你解决拼写问题。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/201906/17/214715jayk1k1kbiatkido.jpg" alt="Sandra Henry-Stocker"></p><p>Linux 为数据分析和自动化提供了各种工具，它也帮助我们解决了一个一直都在纠结的问题 —— 拼写！无论在写每周报告时努力拼出一个单词，还是在提交商业计划书之前想要借助计算机的“眼睛”来找出你的拼写错误。现在我们来看一下它是如何帮助你的。</p><h3 id="look" tabindex="-1">look <a class="header-anchor" href="#look" aria-label="Permalink to “look”">​</a></h3><p><code>look</code> 是其中一款工具。如果你知道一个单词的开头，你就可以用这个命令来获取以这些字母开头的单词列表。除非提供了替代词源，否则 <code>look</code> 将使用 <code>/usr/share/dict/words</code> 中的内容来为你标识单词。这个文件有数十万个单词，可以满足我们日常使用的大多数英语单词的需要，但是它可能不包含我们计算机领域中的一些人倾向于使用的更加生僻的单词，如 zettabyte。</p><p><code>look</code> 命令的语法非常简单。输入 <code>look word</code> ，它将遍历单词文件中的所有单词并找到匹配项。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ look amelio</span></span>
<span class="line"><span>ameliorable</span></span>
<span class="line"><span>ameliorableness</span></span>
<span class="line"><span>ameliorant</span></span>
<span class="line"><span>ameliorate</span></span>
<span class="line"><span>ameliorated</span></span>
<span class="line"><span>ameliorates</span></span>
<span class="line"><span>ameliorating</span></span>
<span class="line"><span>amelioration</span></span>
<span class="line"><span>ameliorations</span></span>
<span class="line"><span>ameliorativ</span></span>
<span class="line"><span>ameliorative</span></span>
<span class="line"><span>amelioratively</span></span>
<span class="line"><span>ameliorator</span></span>
<span class="line"><span>amelioratory</span></span></code></pre></div><p>如果你遇到系统中单词列表中未包含的单词，将无法获得任何输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ look zetta</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>如果你没有看到你所希望出现的单词，也不要绝望。你可以在你的单词文件中添加单词，甚至引用一个完全不同的单词列表，在网上找一个或者干脆自己创建一个。你甚至不必将添加的单词放在按字母顺序排列的正确位置；只需将其添加到文件的末尾即可。但是，你必须以 root 用户身份执行此操作。例如（要注意 <code>&gt;&gt;</code>！）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># echo “zettabyte” &gt;&gt; /usr/share/dict/words</span></span></code></pre></div><p>当使用不同的单词列表时，例如这个例子中的 “jargon” ，你只需要添加文件的名称。如果不采用默认文件时，请使用完整路径。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ look nybble /usr/share/dict/jargon</span></span>
<span class="line"><span>nybble</span></span>
<span class="line"><span>nybbles</span></span></code></pre></div><p><code>look</code> 命令大小写不敏感，因此你不必关心要查找的单词是否应该大写。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ look zet</span></span>
<span class="line"><span>ZETA</span></span>
<span class="line"><span>Zeta</span></span>
<span class="line"><span>zeta</span></span>
<span class="line"><span>zetacism</span></span>
<span class="line"><span>Zetana</span></span>
<span class="line"><span>zetas</span></span>
<span class="line"><span>Zetes</span></span>
<span class="line"><span>zetetic</span></span>
<span class="line"><span>Zethar</span></span>
<span class="line"><span>Zethus</span></span>
<span class="line"><span>Zetland</span></span>
<span class="line"><span>Zetta</span></span></code></pre></div><p>当然，不是所有的单词列表都是一样的。一些 Linux 发行版在单词文件中提供了<em>多得多</em>的内容。你的文件中可能有十万或者更多倍的单词。</p><p>在我的一个 Linux 系统中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -l /usr/share/dict/words</span></span>
<span class="line"><span>102402 /usr/share/dict/words</span></span></code></pre></div><p>在另一个系统中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -l /usr/share/dict/words</span></span>
<span class="line"><span>479828 /usr/share/dict/words</span></span></code></pre></div><p>请记住，<code>look</code> 命令只适用于通过单词开头查找，但如果你不想从单词的开头查找，还可以使用其他选项。</p><h3 id="grep" tabindex="-1">grep <a class="header-anchor" href="#grep" aria-label="Permalink to “grep”">​</a></h3><p>我们深爱的 <code>grep</code> 命令像其他工具一样可以从一个单词文件中选出单词。如果你正在找以某些字母开头或结尾的单词，使用 <code>grep</code> 命令是自然而然的事情。它可以通过单词的开头、结尾或中间部分来匹配单词。系统中的单词文件可以像使用 <code>look</code> 命令时在 <code>grep</code> 命令中轻松使用。不过唯一的缺点是你需要指定文件，这一点与 <code>look</code> 不尽相同。</p><p>在单词的开头前加上 <code>^</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep ^terra /usr/share/dict/words</span></span>
<span class="line"><span>terrace</span></span>
<span class="line"><span>terrace&#39;s</span></span>
<span class="line"><span>terraced</span></span>
<span class="line"><span>terraces</span></span>
<span class="line"><span>terracing</span></span>
<span class="line"><span>terrain</span></span>
<span class="line"><span>terrain&#39;s</span></span>
<span class="line"><span>terrains</span></span>
<span class="line"><span>terrapin</span></span>
<span class="line"><span>terrapin&#39;s</span></span>
<span class="line"><span>terrapins</span></span>
<span class="line"><span>terraria</span></span>
<span class="line"><span>terrarium</span></span>
<span class="line"><span>terrarium&#39;s</span></span>
<span class="line"><span>terrariums</span></span></code></pre></div><p>在单词的结尾后加上 <code>$</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep bytes$ /usr/share/dict/words</span></span>
<span class="line"><span>bytes</span></span>
<span class="line"><span>gigabytes</span></span>
<span class="line"><span>kilobytes</span></span>
<span class="line"><span>megabytes</span></span>
<span class="line"><span>terabytes</span></span></code></pre></div><p>使用 <code>grep</code> 时，你需要考虑大小写，不过 <code>grep</code> 命令也提供了一些选项。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep ^[Zz]et /usr/share/dict/words</span></span>
<span class="line"><span>Zeta</span></span>
<span class="line"><span>zeta</span></span>
<span class="line"><span>zetacism</span></span>
<span class="line"><span>Zetana</span></span>
<span class="line"><span>zetas</span></span>
<span class="line"><span>Zetes</span></span>
<span class="line"><span>zetetic</span></span>
<span class="line"><span>Zethar</span></span>
<span class="line"><span>Zethus</span></span>
<span class="line"><span>Zetland</span></span>
<span class="line"><span>Zetta</span></span>
<span class="line"><span>zettabyte</span></span></code></pre></div><p>为单词文件添加软连接能使这种搜索方式更加便捷：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ln -s /usr/share/dict/words words</span></span>
<span class="line"><span>$ grep ^[Zz]et words</span></span>
<span class="line"><span>Zeta</span></span>
<span class="line"><span>zeta</span></span>
<span class="line"><span>zetacism</span></span>
<span class="line"><span>Zetana</span></span>
<span class="line"><span>zetas</span></span>
<span class="line"><span>Zetes</span></span>
<span class="line"><span>zetetic</span></span>
<span class="line"><span>Zethar</span></span>
<span class="line"><span>Zethus</span></span>
<span class="line"><span>Zetland</span></span>
<span class="line"><span>Zetta</span></span>
<span class="line"><span>zettabytye</span></span></code></pre></div><h3 id="aspell" tabindex="-1">aspell <a class="header-anchor" href="#aspell" aria-label="Permalink to “aspell”">​</a></h3><p><code>aspell</code> 命令提供了一种不同的方式。它提供了一种方法来检查你提供给它的任何文件或文本的拼写。你可以通过管道将文本传递给它，然后它会告诉你哪些单词看起来有拼写错误。如果所有单词都拼写正确，则不会有任何输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo Did I mispell that? | aspell list</span></span>
<span class="line"><span>mispell</span></span>
<span class="line"><span>$ echo I can hardly wait to try out aspell | aspell list</span></span>
<span class="line"><span>aspell</span></span>
<span class="line"><span>$ echo Did I misspell anything? | aspell list</span></span>
<span class="line"><span>$</span></span></code></pre></div><p><code>list</code> 参数告诉 <code>aspell</code> 为标准输入单词提供拼写错误的单词列表。</p><p>你还可以使用 <code>aspell</code> 来定位和更正文本文件中的单词。如果它发现一个拼写错误的单词，它将为你提供一个相似（但拼写正确的）单词列表来替换这个单词，你也可以将该单词加入个人词库（<code>~/.aspell.en.pws</code>）并忽略拼写错误，或者完全中止进程（使文件保持处理前的状态）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ aspell -c mytext</span></span></code></pre></div><p>一旦 <code>aspell</code> 发现一个单词出现了拼写错误，它将会为不正确的 “mispell” 提供一个选项列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1) mi spell                             6) misplay</span></span>
<span class="line"><span>2) mi-spell                             7) spell</span></span>
<span class="line"><span>3) misspell                             8) misapply</span></span>
<span class="line"><span>4) Ispell                               9) Aspell</span></span>
<span class="line"><span>5) misspells                            0) dispel</span></span>
<span class="line"><span>i) Ignore                               I) Ignore all</span></span>
<span class="line"><span>r) Replace                              R) Replace all</span></span>
<span class="line"><span>a) Add                                  l) Add Lower</span></span>
<span class="line"><span>b) Abort                                x) Exit</span></span></code></pre></div><p>请注意，备选单词和拼写是数字编号的，而其他选项是由字母选项表示的。你可以选择备选拼写中的一项或者自己输入替换项。“Abort” 选项将使文件保持不变，即使你已经为某些单词选择了替换。你选择添加的单词将被插入到本地单词文件中（例如 <code>~/.aspell.en.pws</code>）。</p><h4 id="其他单词列表" tabindex="-1">其他单词列表 <a class="header-anchor" href="#其他单词列表" aria-label="Permalink to “其他单词列表”">​</a></h4><p>厌倦了英语？ <code>aspell</code> 命令可以在其他语言中使用，只要你添加了相关语言的单词列表。例如，在 Debian 系统中添加法语的词库，你可以这样做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt install aspell-fr</span></span></code></pre></div><p>这个新的词库文件会被安装为 <code>/usr/share/dict/French</code>。为了使用它，你只需要简单地告诉 <code>aspell</code> 你想要使用替换的单词列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ aspell --lang=fr -c mytext</span></span></code></pre></div><p>这种情况下，当 <code>aspell</code> 读到单词 “one” 时，你可能会看到下面的情况：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1) once                                 6) orné</span></span>
<span class="line"><span>2) onde                                 7) ne</span></span>
<span class="line"><span>3) ondé                                 8) né</span></span>
<span class="line"><span>4) onze                                 9) on</span></span>
<span class="line"><span>5) orne                                 0) cône</span></span>
<span class="line"><span>i) Ignore                               I) Ignore all</span></span>
<span class="line"><span>r) Replace                              R) Replace all</span></span>
<span class="line"><span>a) Add                                  l) Add Lower</span></span>
<span class="line"><span>b) Abort                                x) Exit</span></span></code></pre></div>`,48)),n("p",null,[s[1]||(s[1]=a("你也可以从 ",-1)),p(e,{href:"ftp://ftp.gnu.org/gnu/aspell/dict/0index.html"},{default:l(()=>[...s[0]||(s[0]=[a("GNU 官网",-1)])]),_:1}),s[2]||(s[2]=a("获取其他语言的词库。",-1))]),s[19]||(s[19]=n("h3",{id:"总结",tabindex:"-1"},[a("总结 "),n("a",{class:"header-anchor",href:"#总结","aria-label":"Permalink to “总结”"},"​")],-1)),s[20]||(s[20]=n("p",null,[a("即使你是全国拼字比赛的冠军，你可能偶尔也会需要一点拼写方面的帮助，哪怕只是为了找出你手滑打错的单词。"),n("code",null,"aspell"),a(" 工具，加上 "),n("code",null,"look"),a(" 和 "),n("code",null,"grep"),a(" 命令已经准备来助你一臂之力了。")],-1)),s[21]||(s[21]=n("hr",null,null,-1)),n("p",null,[s[4]||(s[4]=a("via: ",-1)),p(e,{href:"https://www.networkworld.com/article/3400942/how-linux-can-help-with-your-spelling.html"},{default:l(()=>[...s[3]||(s[3]=[a("https://www.networkworld.com/article/3400942/how-linux-can-help-with-your-spelling.html",-1)])]),_:1})]),n("p",null,[s[9]||(s[9]=a("作者：",-1)),p(e,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:l(()=>[...s[5]||(s[5]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[10]||(s[10]=a(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[6]||(s[6]=[a("lujun9972",-1)])]),_:1}),s[11]||(s[11]=a(" 译者：",-1)),p(e,{href:"https://github.com/Modrisco"},{default:l(()=>[...s[7]||(s[7]=[a("Modrisco",-1)])]),_:1}),s[12]||(s[12]=a(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[8]||(s[8]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[15]||(s[15]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[13]||(s[13]=[a("LCTT",-1)])]),_:1}),s[16]||(s[16]=a(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[14]||(s[14]=[a("Linux中国",-1)])]),_:1}),s[17]||(s[17]=a(" 荣誉推出",-1))])])}const w=i(c,[["render",h]]);export{x as __pageData,w as default};
