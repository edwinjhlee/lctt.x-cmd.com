import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"在命令行用 sort 进行排序 | LCTT x X-CMD","titleTemplate":false,"description":"在命令行用 sort 进行排序 | LCTT (201912) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在命令行用 sort 进行排序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在命令行用 sort 进行排序 | LCTT (201912) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201912/20191024 Get sorted with sort at the command line","title":"在命令行用 sort 进行排序","tag":"201912","desc":""},"relativePath":"201912/20191024 Get sorted with sort at the command line.md","filePath":"[post].md"}'),c={name:"201912/20191024 Get sorted with sort at the command line.md"};function u(h,s,g,k,b,m){const p=o("Link");return r(),d("div",null,[s[39]||(s[39]=a("h1",{id:"在命令行用-sort-进行排序",tabindex:"-1"},[n("在命令行用 sort 进行排序 "),a("a",{class:"header-anchor",href:"#在命令行用-sort-进行排序","aria-label":"Permalink to “在命令行用 sort 进行排序”"},"​")],-1)),s[40]||(s[40]=a("blockquote",null,[a("p",null,"在 Linux、BSD 或 Mac 的终端中使用 sort 命令，按自己的需求重新整理数据。")],-1)),s[41]||(s[41]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201912/09/065444f42xl2lddxillz09.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("如果你曾经用过数据表应用程序，你就会知道可以按列的内容对行进行排序。例如，如果你有一个费用列表，你可能希望对它们进行按日期或价格升序抑或按类别进行排序。如果你熟悉终端的使用，你不会仅为了排序文本数据就去使用庞大的办公软件。这正是 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Sort_(Unix)"},{default:l(()=>[...s[0]||(s[0]=[n("sort",-1)])]),_:1}),s[2]||(s[2]=n(" 命令的用处。",-1))]),s[42]||(s[42]=a("h3",{id:"安装",tabindex:"-1"},[n("安装 "),a("a",{class:"header-anchor",href:"#安装","aria-label":"Permalink to “安装”"},"​")],-1)),a("p",null,[s[4]||(s[4]=n("你不必安装 ",-1)),s[5]||(s[5]=a("code",null,"sort",-1)),s[6]||(s[6]=n(" ，因为它向来都包含在 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/POSIX"},{default:l(()=>[...s[3]||(s[3]=[n("POSIX",-1)])]),_:1}),s[7]||(s[7]=n(" 系统里。在大多数 Linux 系统中，",-1)),s[8]||(s[8]=a("code",null,"sort",-1)),s[9]||(s[9]=n(" 命令来自 GNU 组织打包的实用工具集合中。在其他的 POSIX 系统中，像 BSD 和 Mac，默认的 ",-1)),s[10]||(s[10]=a("code",null,"sort",-1)),s[11]||(s[11]=n(" 命令不是 GNU 提供的，所以有一些选项可能不一样。本文中我尽量对 GNU 和 BSD 两者的实现都进行说明。",-1))]),s[43]||(s[43]=i(`<h3 id="按字母顺序排列行" tabindex="-1">按字母顺序排列行 <a class="header-anchor" href="#按字母顺序排列行" aria-label="Permalink to “按字母顺序排列行”">​</a></h3><p><code>sort</code> 命令默认会读取文件每行的第一个字符并对每行按字母升序排序后输出。两行中的第一个字符相同的情况下，对下一个字符进行对比。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat distro.list</span></span>
<span class="line"><span>Slackware</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>Red Hat Enterprise Linux</span></span>
<span class="line"><span>Ubuntu</span></span>
<span class="line"><span>Arch</span></span>
<span class="line"><span>1337</span></span>
<span class="line"><span>Mint</span></span>
<span class="line"><span>Mageia</span></span>
<span class="line"><span>Debian</span></span>
<span class="line"><span>$ sort distro.list</span></span>
<span class="line"><span>1337</span></span>
<span class="line"><span>Arch</span></span>
<span class="line"><span>Debian</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>Mageia</span></span>
<span class="line"><span>Mint</span></span>
<span class="line"><span>Red Hat Enterprise Linux</span></span>
<span class="line"><span>Slackware</span></span>
<span class="line"><span>Ubuntu</span></span></code></pre></div><p>使用 <code>sort</code> 不会改变原文件。<code>sort</code> 仅起到过滤的作用，所以如果你希望按排序后的格式保存数据，你需要用 <code>&gt;</code> 或 <code>tee</code> 进行重定向。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort distro.list | tee distro.sorted</span></span>
<span class="line"><span>1337</span></span>
<span class="line"><span>Arch</span></span>
<span class="line"><span>Debian</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>$ cat distro.sorted</span></span>
<span class="line"><span>1337</span></span>
<span class="line"><span>Arch</span></span>
<span class="line"><span>Debian</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><h3 id="按列排序" tabindex="-1">按列排序 <a class="header-anchor" href="#按列排序" aria-label="Permalink to “按列排序”">​</a></h3><p>复杂数据集有时候不止需要对每行的第一个字符进行排序。例如，假设有一个动物列表，每个都有其种和属，用可预见的分隔符分隔每一个“字段”（即数据表中的“单元格”）。这类由数据表导出的格式很常见，CSV（<ruby>以逗号分隔的数据<rt>comma-separated values</rt></ruby>）后缀可以标识这些文件（虽然 CSV 文件不一定用逗号分隔，有分隔符的文件也不一定用 CSV 后缀）。以下数据作为示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Aptenodytes;forsteri;Miller,JF;1778;Emperor</span></span>
<span class="line"><span>Pygoscelis;papua;Wagler;1832;Gentoo</span></span>
<span class="line"><span>Eudyptula;minor;Bonaparte;1867;Little Blue</span></span>
<span class="line"><span>Spheniscus;demersus;Brisson;1760;African</span></span>
<span class="line"><span>Megadyptes;antipodes;Milne-Edwards;1880;Yellow-eyed</span></span>
<span class="line"><span>Eudyptes;chrysocome;Viellot;1816;Southern Rockhopper</span></span>
<span class="line"><span>Torvaldis;linux;Ewing,L;1996;Tux</span></span></code></pre></div><p>对于这组示例数据，你可以用 <code>--field-separator</code> （在 BSD 和 Mac 用 <code>-t</code>，在 GNU 上也可以用简写 <code>-t</code> ）设置分隔符为分号（因为该示例数据中是用分号而不是逗号，理论上分隔符可以是任意字符），用 <code>--key</code>（在 BSD 和 Mac 上用 <code>-k</code>，在 GNU 上也可以用简写 <code>-k</code>）选项指定哪个字段被排序。例如，对每行第二个字段进行排序（计数以 1 开头而不是 0）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sort --field-separator=&quot;;&quot; --key=2</span></span>
<span class="line"><span>Megadyptes;antipodes;Milne-Edwards;1880;Yellow-eyed</span></span>
<span class="line"><span>Eudyptes;chrysocome;Viellot;1816;Sothern Rockhopper</span></span>
<span class="line"><span>Spheniscus;demersus;Brisson;1760;African</span></span>
<span class="line"><span>Aptenodytes;forsteri;Miller,JF;1778;Emperor</span></span>
<span class="line"><span>Torvaldis;linux;Ewing,L;1996;Tux</span></span>
<span class="line"><span>Eudyptula;minor;Bonaparte;1867;Little Blue</span></span>
<span class="line"><span>Pygoscelis;papua;Wagler;1832;Gentoo</span></span></code></pre></div><p>结果有点不容易读，但是 Unix 以构造命令的管道方式而闻名，所以你可以使用 <code>column</code> 命令美化输出结果。使用 GNU <code>column</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort --field-separator=&quot;;&quot; \\</span></span>
<span class="line"><span>\\--key=2 penguins.list | column --table --separator &quot;;&quot;</span></span>
<span class="line"><span>Megadyptes   antipodes   Milne-Edwards  1880  Yellow-eyed</span></span>
<span class="line"><span>Eudyptes     chrysocome  Viellot        1816  Southern Rockhopper</span></span>
<span class="line"><span>Spheniscus   demersus    Brisson        1760  African</span></span>
<span class="line"><span>Aptenodytes  forsteri    Miller,JF      1778  Emperor</span></span>
<span class="line"><span>Torvaldis    linux       Ewing,L        1996  Tux</span></span>
<span class="line"><span>Eudyptula    minor       Bonaparte      1867  Little Blue</span></span>
<span class="line"><span>Pygoscelis   papua       Wagler         1832  Gentoo</span></span></code></pre></div><p>对于初学者可能有点不好理解（但是写起来简单），BSD 和 Mac 上的命令选项：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort -t &quot;;&quot; \\</span></span>
<span class="line"><span>-k2 penguins.list | column -t -s &quot;;&quot;</span></span>
<span class="line"><span>Megadyptes   antipodes   Milne-Edwards  1880  Yellow-eyed</span></span>
<span class="line"><span>Eudyptes     chrysocome  Viellot        1816  Southern Rockhopper</span></span>
<span class="line"><span>Spheniscus   demersus    Brisson        1760  African</span></span>
<span class="line"><span>Aptenodytes  forsteri    Miller,JF      1778  Emperor</span></span>
<span class="line"><span>Torvaldis    linux       Ewing,L        1996  Tux</span></span>
<span class="line"><span>Eudyptula    minor       Bonaparte      1867  Little Blue</span></span>
<span class="line"><span>Pygoscelis   papua       Wagler         1832  Gentoo</span></span></code></pre></div><p>当然 <code>-k</code> 不一定非要设为 <code>2</code>。任意存在的字段都可以被设为排序的键。</p><h3 id="逆序排列" tabindex="-1">逆序排列 <a class="header-anchor" href="#逆序排列" aria-label="Permalink to “逆序排列”">​</a></h3><p>你可以用 <code>--reverse</code>（BSD/Mac 上用 <code>-r</code>，GNU 上也可以用简写 <code>-r</code>）选项来颠倒已经排好序的列表。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort --reverse alphabet.list</span></span>
<span class="line"><span>z</span></span>
<span class="line"><span>y</span></span>
<span class="line"><span>x</span></span>
<span class="line"><span>w</span></span>
<span class="line"><span>[...]</span></span></code></pre></div>`,18)),a("p",null,[s[13]||(s[13]=n("你也可以把输出结果通过管道传给命令 ",-1)),e(p,{href:"https://opensource.com/article/19/9/tac-command"},{default:l(()=>[...s[12]||(s[12]=[n("tac",-1)])]),_:1}),s[14]||(s[14]=n(" 来实现相同的效果。",-1))]),s[44]||(s[44]=i(`<h3 id="按月排序-仅-gnu-支持" tabindex="-1">按月排序（仅 GNU 支持） <a class="header-anchor" href="#按月排序-仅-gnu-支持" aria-label="Permalink to “按月排序（仅 GNU 支持）”">​</a></h3><p>理想情况下，所有人都按照 ISO 8601 标准来写日期：年、月、日。这是一种合乎逻辑的指定精确日期的方法，也可以很容易地被计算机理解。也有很多情况下，人类用其他的方式标注日期，包括用很名字随意的月份。</p><p>幸运的是，GNU <code>sort</code> 命令能识别这种写法，并可以按月份的名称正确排序。使用 <code>--month-sort</code>（<code>-M</code>）选项：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat month.list</span></span>
<span class="line"><span>November</span></span>
<span class="line"><span>October</span></span>
<span class="line"><span>September</span></span>
<span class="line"><span>April</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>$ sort --month-sort month.list</span></span>
<span class="line"><span>January</span></span>
<span class="line"><span>February</span></span>
<span class="line"><span>March</span></span>
<span class="line"><span>April</span></span>
<span class="line"><span>May</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>November</span></span>
<span class="line"><span>December</span></span></code></pre></div><p>月份的全称和简写都可以被识别。</p><h3 id="人类可读的数字排序-仅-gnu-支持" tabindex="-1">人类可读的数字排序（仅 GNU 支持） <a class="header-anchor" href="#人类可读的数字排序-仅-gnu-支持" aria-label="Permalink to “人类可读的数字排序（仅 GNU 支持）”">​</a></h3><p>另一个人类和计算机的常见混淆点是数字的组合。例如，人类通常把 “1024 kilobytes” 写成 “1KB”，因为人类解析 “1 KB” 比 “1024” 要容易且更快（数字越大，这种差异越明显）。对于计算机来说，一个 9 KB 的字符串要比诸如 1 MB 的字符串大（尽管 9 KB 是 1 MB 很小一部分）。GNU <code>sort</code> 命令提供了<code>--human-numeric-sort</code>（<code>-h</code>）选项来帮助正确解析这些值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat sizes.list</span></span>
<span class="line"><span>2M</span></span>
<span class="line"><span>12MB</span></span>
<span class="line"><span>1k</span></span>
<span class="line"><span>9k</span></span>
<span class="line"><span>900</span></span>
<span class="line"><span>7000</span></span>
<span class="line"><span>$ sort --human-numeric-sort</span></span>
<span class="line"><span>900</span></span>
<span class="line"><span>7000</span></span>
<span class="line"><span>1k</span></span>
<span class="line"><span>9k</span></span>
<span class="line"><span>2M</span></span>
<span class="line"><span>12MB</span></span></code></pre></div><p>有一些情况例外。例如，“16000 bytes” 比 “1 KB” 大，但是 <code>sort</code> 识别不了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat sizes0.list</span></span>
<span class="line"><span>2M</span></span>
<span class="line"><span>12MB</span></span>
<span class="line"><span>16000</span></span>
<span class="line"><span>1k</span></span>
<span class="line"><span>$ sort -h sizes0.list</span></span>
<span class="line"><span>16000</span></span>
<span class="line"><span>1k</span></span>
<span class="line"><span>2M</span></span>
<span class="line"><span>12MB</span></span></code></pre></div><p>逻辑上来说，这个示例中 16000 应该写成 16 KB，所以也不应该全部归咎于GNU <code>sort</code>。只要你确保数字的一致性，<code>--human-numeric-sort</code> 可以用一种计算机友好的方式解析成人类可读的数字。</p><h3 id="随机排序-仅-gnu-支持" tabindex="-1">随机排序（仅 GNU 支持） <a class="header-anchor" href="#随机排序-仅-gnu-支持" aria-label="Permalink to “随机排序（仅 GNU 支持）”">​</a></h3>`,12)),a("p",null,[s[16]||(s[16]=n("有时候工具也提供了一些与设计初衷相悖的选项。某种程度上说，",-1)),s[17]||(s[17]=a("code",null,"sort",-1)),s[18]||(s[18]=n(" 命令提供对一个文件进行随机排序的能力没有任何意义。这个命令的工作流让这个特性变得很方便。你",-1)),s[19]||(s[19]=a("em",null,"可以",-1)),s[20]||(s[20]=n("用其他的命令，像 ",-1)),e(p,{href:"https://www.gnu.org/software/coreutils/manual/html_node/shuf-invocation.html"},{default:l(()=>[...s[15]||(s[15]=[n("shuf",-1)])]),_:1}),s[21]||(s[21]=n(" ，或者你可以用现在的命令添加一个选项。不管你认为它是一个臃肿的还是极具创造力的用户体验设计，GNU ",-1)),s[22]||(s[22]=a("code",null,"sort",-1)),s[23]||(s[23]=n(" 命令提供了对文件进行随机排序的功能。",-1))]),s[45]||(s[45]=i(`<p>最纯粹的随机排序格式选项是 <code>--random-sort</code> 或 <code>-R</code>（不要跟 <code>-r</code> 混淆，<code>-r</code> 是 <code>--reverse</code> 的简写）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort --random-sort alphabet.list</span></span>
<span class="line"><span>d</span></span>
<span class="line"><span>m</span></span>
<span class="line"><span>p</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>每次对文件运行随机排序都会有不同的结果。</p><h3 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to “结语”">​</a></h3><p>GNU 和 BSD 的 <code>sort</code> 命令还有很多功能，所以花点时间去了解这些选项。你会惊异于 <code>sort</code> 的灵活性，尤其是当它和其他的 Unix 工具一起使用时。</p><hr>`,6)),a("p",null,[s[25]||(s[25]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/10/get-sorted-sort"},{default:l(()=>[...s[24]||(s[24]=[n("https://opensource.com/article/19/10/get-sorted-sort",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:l(()=>[...s[26]||(s[26]=[n("Seth Kenlon",-1)])]),_:1}),s[31]||(s[31]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[27]||(s[27]=[n("lujun9972",-1)])]),_:1}),s[32]||(s[32]=n(" 译者：",-1)),e(p,{href:"https://github.com/lxbwolf"},{default:l(()=>[...s[28]||(s[28]=[n("lxbwolf",-1)])]),_:1}),s[33]||(s[33]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[29]||(s[29]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[34]||(s[34]=[n("LCTT",-1)])]),_:1}),s[37]||(s[37]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[35]||(s[35]=[n("Linux中国",-1)])]),_:1}),s[38]||(s[38]=n(" 荣誉推出",-1))])])}const C=t(c,[["render",u]]);export{x as __pageData,C as default};
