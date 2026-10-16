import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"在命令列用 sort 進行排序 | LCTT x X-CMD","titleTemplate":false,"description":"在命令列用 sort 進行排序 | LCTT (201912) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在命令列用 sort 進行排序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在命令列用 sort 進行排序 | LCTT (201912) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201912/20191024 Get sorted with sort at the command line","title":"在命令列用 sort 進行排序","tag":"201912","desc":""},"relativePath":"201912/20191024 Get sorted with sort at the command line.md","filePath":"[post].md"}'),c={name:"201912/20191024 Get sorted with sort at the command line.md"};function u(h,s,g,k,b,m){const p=o("Link");return r(),d("div",null,[s[39]||(s[39]=a("h1",{id:"在命令列用-sort-進行排序",tabindex:"-1"},[n("在命令列用 sort 進行排序 "),a("a",{class:"header-anchor",href:"#在命令列用-sort-進行排序","aria-label":"Permalink to “在命令列用 sort 進行排序”"},"​")],-1)),s[40]||(s[40]=a("blockquote",null,[a("p",null,"在 Linux、BSD 或 Mac 的終端中使用 sort 命令，按自己的需求重新整理數據。")],-1)),s[41]||(s[41]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201912/09/065444f42xl2lddxillz09.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("如果你曾經用過數據表應用程序，你就會知道可以按列的內容對行進行排序。例如，如果你有一個費用列表，你可能希望對它們進行按日期或價格升序抑或按類別進行排序。如果你熟悉終端的使用，你不會僅為了排序文本數據就去使用龐大的辦公軟件。這正是 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Sort_(Unix)"},{default:l(()=>[...s[0]||(s[0]=[n("sort",-1)])]),_:1}),s[2]||(s[2]=n(" 命令的用處。",-1))]),s[42]||(s[42]=a("h3",{id:"安裝",tabindex:"-1"},[n("安裝 "),a("a",{class:"header-anchor",href:"#安裝","aria-label":"Permalink to “安裝”"},"​")],-1)),a("p",null,[s[4]||(s[4]=n("你不必安裝 ",-1)),s[5]||(s[5]=a("code",null,"sort",-1)),s[6]||(s[6]=n(" ，因為它向來都包含在 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/POSIX"},{default:l(()=>[...s[3]||(s[3]=[n("POSIX",-1)])]),_:1}),s[7]||(s[7]=n(" 系統裏。在大多數 Linux 系統中，",-1)),s[8]||(s[8]=a("code",null,"sort",-1)),s[9]||(s[9]=n(" 命令來自 GNU 組織打包的實用工具集合中。在其他的 POSIX 系統中，像 BSD 和 Mac，默認的 ",-1)),s[10]||(s[10]=a("code",null,"sort",-1)),s[11]||(s[11]=n(" 命令不是 GNU 提供的，所以有一些選項可能不一樣。本文中我儘量對 GNU 和 BSD 兩者的實現都進行説明。",-1))]),s[43]||(s[43]=i(`<h3 id="按字母順序排列行" tabindex="-1">按字母順序排列行 <a class="header-anchor" href="#按字母順序排列行" aria-label="Permalink to “按字母順序排列行”">​</a></h3><p><code>sort</code> 命令默認會讀取文件每行的第一個字符並對每行按字母升序排序後輸出。兩行中的第一個字符相同的情況下，對下一個字符進行對比。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat distro.list</span></span>
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
<span class="line"><span>Ubuntu</span></span></code></pre></div><p>使用 <code>sort</code> 不會改變原文件。<code>sort</code> 僅起到過濾的作用，所以如果你希望按排序後的格式保存數據，你需要用 <code>&gt;</code> 或 <code>tee</code> 進行重定向。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort distro.list | tee distro.sorted</span></span>
<span class="line"><span>1337</span></span>
<span class="line"><span>Arch</span></span>
<span class="line"><span>Debian</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>$ cat distro.sorted</span></span>
<span class="line"><span>1337</span></span>
<span class="line"><span>Arch</span></span>
<span class="line"><span>Debian</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><h3 id="按列排序" tabindex="-1">按列排序 <a class="header-anchor" href="#按列排序" aria-label="Permalink to “按列排序”">​</a></h3><p>複雜數據集有時候不止需要對每行的第一個字符進行排序。例如，假設有一個動物列表，每個都有其種和屬，用可預見的分隔符分隔每一個“字段”（即數據表中的“單元格”）。這類由數據表導出的格式很常見，CSV（<ruby>以逗號分隔的數據<rt>comma-separated values</rt></ruby>）後綴可以標識這些文件（雖然 CSV 文件不一定用逗號分隔，有分隔符的文件也不一定用 CSV 後綴）。以下數據作為示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Aptenodytes;forsteri;Miller,JF;1778;Emperor</span></span>
<span class="line"><span>Pygoscelis;papua;Wagler;1832;Gentoo</span></span>
<span class="line"><span>Eudyptula;minor;Bonaparte;1867;Little Blue</span></span>
<span class="line"><span>Spheniscus;demersus;Brisson;1760;African</span></span>
<span class="line"><span>Megadyptes;antipodes;Milne-Edwards;1880;Yellow-eyed</span></span>
<span class="line"><span>Eudyptes;chrysocome;Viellot;1816;Southern Rockhopper</span></span>
<span class="line"><span>Torvaldis;linux;Ewing,L;1996;Tux</span></span></code></pre></div><p>對於這組示例數據，你可以用 <code>--field-separator</code> （在 BSD 和 Mac 用 <code>-t</code>，在 GNU 上也可以用簡寫 <code>-t</code> ）設置分隔符為分號（因為該示例數據中是用分號而不是逗號，理論上分隔符可以是任意字符），用 <code>--key</code>（在 BSD 和 Mac 上用 <code>-k</code>，在 GNU 上也可以用簡寫 <code>-k</code>）選項指定哪個字段被排序。例如，對每行第二個字段進行排序（計數以 1 開頭而不是 0）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sort --field-separator=&quot;;&quot; --key=2</span></span>
<span class="line"><span>Megadyptes;antipodes;Milne-Edwards;1880;Yellow-eyed</span></span>
<span class="line"><span>Eudyptes;chrysocome;Viellot;1816;Sothern Rockhopper</span></span>
<span class="line"><span>Spheniscus;demersus;Brisson;1760;African</span></span>
<span class="line"><span>Aptenodytes;forsteri;Miller,JF;1778;Emperor</span></span>
<span class="line"><span>Torvaldis;linux;Ewing,L;1996;Tux</span></span>
<span class="line"><span>Eudyptula;minor;Bonaparte;1867;Little Blue</span></span>
<span class="line"><span>Pygoscelis;papua;Wagler;1832;Gentoo</span></span></code></pre></div><p>結果有點不容易讀，但是 Unix 以構造命令的管道方式而聞名，所以你可以使用 <code>column</code> 命令美化輸出結果。使用 GNU <code>column</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort --field-separator=&quot;;&quot; \\</span></span>
<span class="line"><span>\\--key=2 penguins.list | column --table --separator &quot;;&quot;</span></span>
<span class="line"><span>Megadyptes   antipodes   Milne-Edwards  1880  Yellow-eyed</span></span>
<span class="line"><span>Eudyptes     chrysocome  Viellot        1816  Southern Rockhopper</span></span>
<span class="line"><span>Spheniscus   demersus    Brisson        1760  African</span></span>
<span class="line"><span>Aptenodytes  forsteri    Miller,JF      1778  Emperor</span></span>
<span class="line"><span>Torvaldis    linux       Ewing,L        1996  Tux</span></span>
<span class="line"><span>Eudyptula    minor       Bonaparte      1867  Little Blue</span></span>
<span class="line"><span>Pygoscelis   papua       Wagler         1832  Gentoo</span></span></code></pre></div><p>對於初學者可能有點不好理解（但是寫起來簡單），BSD 和 Mac 上的命令選項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort -t &quot;;&quot; \\</span></span>
<span class="line"><span>-k2 penguins.list | column -t -s &quot;;&quot;</span></span>
<span class="line"><span>Megadyptes   antipodes   Milne-Edwards  1880  Yellow-eyed</span></span>
<span class="line"><span>Eudyptes     chrysocome  Viellot        1816  Southern Rockhopper</span></span>
<span class="line"><span>Spheniscus   demersus    Brisson        1760  African</span></span>
<span class="line"><span>Aptenodytes  forsteri    Miller,JF      1778  Emperor</span></span>
<span class="line"><span>Torvaldis    linux       Ewing,L        1996  Tux</span></span>
<span class="line"><span>Eudyptula    minor       Bonaparte      1867  Little Blue</span></span>
<span class="line"><span>Pygoscelis   papua       Wagler         1832  Gentoo</span></span></code></pre></div><p>當然 <code>-k</code> 不一定非要設為 <code>2</code>。任意存在的字段都可以被設為排序的鍵。</p><h3 id="逆序排列" tabindex="-1">逆序排列 <a class="header-anchor" href="#逆序排列" aria-label="Permalink to “逆序排列”">​</a></h3><p>你可以用 <code>--reverse</code>（BSD/Mac 上用 <code>-r</code>，GNU 上也可以用簡寫 <code>-r</code>）選項來顛倒已經排好序的列表。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort --reverse alphabet.list</span></span>
<span class="line"><span>z</span></span>
<span class="line"><span>y</span></span>
<span class="line"><span>x</span></span>
<span class="line"><span>w</span></span>
<span class="line"><span>[...]</span></span></code></pre></div>`,18)),a("p",null,[s[13]||(s[13]=n("你也可以把輸出結果通過管道傳給命令 ",-1)),e(p,{href:"https://opensource.com/article/19/9/tac-command"},{default:l(()=>[...s[12]||(s[12]=[n("tac",-1)])]),_:1}),s[14]||(s[14]=n(" 來實現相同的效果。",-1))]),s[44]||(s[44]=i(`<h3 id="按月排序-僅-gnu-支持" tabindex="-1">按月排序（僅 GNU 支持） <a class="header-anchor" href="#按月排序-僅-gnu-支持" aria-label="Permalink to “按月排序（僅 GNU 支持）”">​</a></h3><p>理想情況下，所有人都按照 ISO 8601 標準來寫日期：年、月、日。這是一種合乎邏輯的指定精確日期的方法，也可以很容易地被計算機理解。也有很多情況下，人類用其他的方式標註日期，包括用很名字隨意的月份。</p><p>幸運的是，GNU <code>sort</code> 命令能識別這種寫法，並可以按月份的名稱正確排序。使用 <code>--month-sort</code>（<code>-M</code>）選項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat month.list</span></span>
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
<span class="line"><span>December</span></span></code></pre></div><p>月份的全稱和簡寫都可以被識別。</p><h3 id="人類可讀的數字排序-僅-gnu-支持" tabindex="-1">人類可讀的數字排序（僅 GNU 支持） <a class="header-anchor" href="#人類可讀的數字排序-僅-gnu-支持" aria-label="Permalink to “人類可讀的數字排序（僅 GNU 支持）”">​</a></h3><p>另一個人類和計算機的常見混淆點是數字的組合。例如，人類通常把 “1024 kilobytes” 寫成 “1KB”，因為人類解析 “1 KB” 比 “1024” 要容易且更快（數字越大，這種差異越明顯）。對於計算機來説，一個 9 KB 的字符串要比諸如 1 MB 的字符串大（儘管 9 KB 是 1 MB 很小一部分）。GNU <code>sort</code> 命令提供了<code>--human-numeric-sort</code>（<code>-h</code>）選項來幫助正確解析這些值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat sizes.list</span></span>
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
<span class="line"><span>12MB</span></span></code></pre></div><p>有一些情況例外。例如，“16000 bytes” 比 “1 KB” 大，但是 <code>sort</code> 識別不了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat sizes0.list</span></span>
<span class="line"><span>2M</span></span>
<span class="line"><span>12MB</span></span>
<span class="line"><span>16000</span></span>
<span class="line"><span>1k</span></span>
<span class="line"><span>$ sort -h sizes0.list</span></span>
<span class="line"><span>16000</span></span>
<span class="line"><span>1k</span></span>
<span class="line"><span>2M</span></span>
<span class="line"><span>12MB</span></span></code></pre></div><p>邏輯上來説，這個示例中 16000 應該寫成 16 KB，所以也不應該全部歸咎於GNU <code>sort</code>。只要你確保數字的一致性，<code>--human-numeric-sort</code> 可以用一種計算機友好的方式解析成人類可讀的數字。</p><h3 id="隨機排序-僅-gnu-支持" tabindex="-1">隨機排序（僅 GNU 支持） <a class="header-anchor" href="#隨機排序-僅-gnu-支持" aria-label="Permalink to “隨機排序（僅 GNU 支持）”">​</a></h3>`,12)),a("p",null,[s[16]||(s[16]=n("有時候工具也提供了一些與設計初衷相悖的選項。某種程度上説，",-1)),s[17]||(s[17]=a("code",null,"sort",-1)),s[18]||(s[18]=n(" 命令提供對一個文件進行隨機排序的能力沒有任何意義。這個命令的工作流讓這個特性變得很方便。你",-1)),s[19]||(s[19]=a("em",null,"可以",-1)),s[20]||(s[20]=n("用其他的命令，像 ",-1)),e(p,{href:"https://www.gnu.org/software/coreutils/manual/html_node/shuf-invocation.html"},{default:l(()=>[...s[15]||(s[15]=[n("shuf",-1)])]),_:1}),s[21]||(s[21]=n(" ，或者你可以用現在的命令添加一個選項。不管你認為它是一個臃腫的還是極具創造力的用户體驗設計，GNU ",-1)),s[22]||(s[22]=a("code",null,"sort",-1)),s[23]||(s[23]=n(" 命令提供了對文件進行隨機排序的功能。",-1))]),s[45]||(s[45]=i(`<p>最純粹的隨機排序格式選項是 <code>--random-sort</code> 或 <code>-R</code>（不要跟 <code>-r</code> 混淆，<code>-r</code> 是 <code>--reverse</code> 的簡寫）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort --random-sort alphabet.list</span></span>
<span class="line"><span>d</span></span>
<span class="line"><span>m</span></span>
<span class="line"><span>p</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>每次對文件運行隨機排序都會有不同的結果。</p><h3 id="結語" tabindex="-1">結語 <a class="header-anchor" href="#結語" aria-label="Permalink to “結語”">​</a></h3><p>GNU 和 BSD 的 <code>sort</code> 命令還有很多功能，所以花點時間去了解這些選項。你會驚異於 <code>sort</code> 的靈活性，尤其是當它和其他的 Unix 工具一起使用時。</p><hr>`,6)),a("p",null,[s[25]||(s[25]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/10/get-sorted-sort"},{default:l(()=>[...s[24]||(s[24]=[n("https://opensource.com/article/19/10/get-sorted-sort",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:l(()=>[...s[26]||(s[26]=[n("Seth Kenlon",-1)])]),_:1}),s[31]||(s[31]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[27]||(s[27]=[n("lujun9972",-1)])]),_:1}),s[32]||(s[32]=n(" 譯者：",-1)),e(p,{href:"https://github.com/lxbwolf"},{default:l(()=>[...s[28]||(s[28]=[n("lxbwolf",-1)])]),_:1}),s[33]||(s[33]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[29]||(s[29]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[34]||(s[34]=[n("LCTT",-1)])]),_:1}),s[37]||(s[37]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[35]||(s[35]=[n("Linux中國",-1)])]),_:1}),s[38]||(s[38]=n(" 榮譽推出",-1))])])}const C=t(c,[["render",u]]);export{x as __pageData,C as default};
