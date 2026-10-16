import{_ as l,a0 as o,w as d,s as r,I as a,x as n,a1 as p,A as i,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"怎樣用 Bash 編程：循環 | LCTT x X-CMD","titleTemplate":false,"description":"怎樣用 Bash 編程：循環 | LCTT (201912) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"怎樣用 Bash 編程：循環 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"怎樣用 Bash 編程：循環 | LCTT (201912) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201912/20191023 How to program with Bash- Loops","title":"怎樣用 Bash 編程：循環","tag":"201912","desc":""},"relativePath":"201912/20191023 How to program with Bash- Loops.md","filePath":"[post].md"}'),c={name:"201912/20191023 How to program with Bash- Loops.md"};function h(u,s,g,k,m,b){const e=o("Link");return d(),r("div",null,[s[30]||(s[30]=a("h1",{id:"怎樣用-bash-編程-循環",tabindex:"-1"},[n("怎樣用 Bash 編程：循環 "),a("a",{class:"header-anchor",href:"#怎樣用-bash-編程-循環","aria-label":"Permalink to “怎樣用 Bash 編程：循環”"},"​")],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"本文是 Bash 編程系列三篇中的最後一篇，來學習使用循環執行迭代的操作。")],-1)),s[32]||(s[32]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201912/26/111437f9pa3zqqwcc9wwg1.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("Bash 是一種強大的用於命令列和 shell 腳本的編程語言。本系列的三部分都是基於我的三集 ",-1)),p(e,{href:"http://www.both.org/?page_id=1183"},{default:i(()=>[...s[0]||(s[0]=[n("Linux 自學課程",-1)])]),_:1}),s[2]||(s[2]=n(" 寫的，探索怎麼用 CLI 進行 bash 編程。",-1))]),a("p",null,[s[5]||(s[5]=n("本系列的 ",-1)),p(e,{href:"https://linux.cn/article-11552-1.html"},{default:i(()=>[...s[3]||(s[3]=[n("第一篇文章",-1)])]),_:1}),s[6]||(s[6]=n(" 討論了 bash 編程的一些簡單命令列操作，如使用變量和控制操作符。",-1)),p(e,{href:"https://linux.cn/article-11687-1.html"},{default:i(()=>[...s[4]||(s[4]=[n("第二篇文章",-1)])]),_:1}),s[7]||(s[7]=n(" 探討了文件、字符串、數字等類型和各種各樣在執行流中提供控制邏輯的的邏輯運算符，還有 bash 中不同種類的擴展。本文是第三篇（也是最後一篇），意在考察在各種迭代的操作中使用循環以及怎麼合理控制循環。",-1))]),s[33]||(s[33]=t(`<h3 id="循環" tabindex="-1">循環 <a class="header-anchor" href="#循環" aria-label="Permalink to “循環”">​</a></h3><p>我使用過的所有編程語言都至少有兩種循環結構來用來執行重複的操作。我經常使用 <code>for</code> 循環，然而我發現 <code>while</code> 和 <code>until</code> 循環也很有用處。</p><h4 id="for-循環" tabindex="-1">for 循環 <a class="header-anchor" href="#for-循環" aria-label="Permalink to “for 循環”">​</a></h4><p>我的理解是，在 bash 中實現的 <code>for</code> 命令比大部分語言靈活，因為它可以處理非數字的值；與之形成對比的是，諸如標準 C 語言的 <code>for</code> 循環只能處理數字類型的值。</p><p>Bash 版的 <code>for</code> 命令基本的結構很簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for Var in list1 ; do list2 ; done</span></span></code></pre></div><p>解釋一下：“對於 <code>list1</code> 中的每一個值，把 <code>$Var</code> 設置為那個值，使用該值執行 <code>list2</code> 中的程序語句；<code>list1</code> 中的值都執行完後，整個循環結束，退出循環。” <code>list1</code> 中的值可以是一個簡單的顯式字符串值，也可以是一個命令執行後的結果（\`\` 包含其內的命令執行的結果，本系列第二篇文章中有描述）。我經常使用這種結構。</p><p>要測試它，確認 <code>~/testdir</code> 仍然是當前的工作目錄（PWD）。刪除目錄下所有東西，來看下這個顯式寫出值列表的 <code>for</code> 循環的簡單的示例。這個列表混合了字母和數字 — 但是不要忘了，在 bash 中所有的變量都是字符串或者可以被當成字符串來處理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ rm *</span></span>
<span class="line"><span>[student@studentvm1 testdir]$ for I in a b c d 1 2 3 4 ; do echo $I ; done</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>b</span></span>
<span class="line"><span>c</span></span>
<span class="line"><span>d</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span></code></pre></div><p>給變量賦予更有意義的名字，變成前面版本的進階版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ for Dept in &quot;Human Resources&quot; Sales Finance &quot;Information Technology&quot; Engineering Administration Research ; do echo &quot;Department $Dept&quot; ; done</span></span>
<span class="line"><span>Department Human Resources</span></span>
<span class="line"><span>Department Sales</span></span>
<span class="line"><span>Department Finance</span></span>
<span class="line"><span>Department Information Technology</span></span>
<span class="line"><span>Department Engineering</span></span>
<span class="line"><span>Department Administration</span></span>
<span class="line"><span>Department Research</span></span></code></pre></div><p>創建幾個目錄（創建時顯示一些處理信息）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ for Dept in &quot;Human Resources&quot; Sales Finance &quot;Information Technology&quot; Engineering Administration Research ; do echo &quot;Working on Department $Dept&quot; ; mkdir &quot;$Dept&quot;  ; done</span></span>
<span class="line"><span>Working on Department Human Resources</span></span>
<span class="line"><span>Working on Department Sales</span></span>
<span class="line"><span>Working on Department Finance</span></span>
<span class="line"><span>Working on Department Information Technology</span></span>
<span class="line"><span>Working on Department Engineering</span></span>
<span class="line"><span>Working on Department Administration</span></span>
<span class="line"><span>Working on Department Research</span></span>
<span class="line"><span>[student@studentvm1 testdir]$ ll</span></span>
<span class="line"><span>total 28</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45  Administration</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45  Engineering</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45  Finance</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45 &#39;Human Resources&#39;</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45 &#39;Information Technology&#39;</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45  Research</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45  Sales</span></span></code></pre></div><p>在 <code>mkdir</code> 語句中 <code>$Dept</code> 變量必須用引號包裹起來；否則名字中間有空格（如 <code>Information Technology</code>）會被當做兩個獨立的目錄處理。我一直信奉的一條實踐規則：所有的文件和目錄都應該為一個單詞（中間沒有空格）。雖然大部分現代的操作系統可以處理名字中間有空格的情況，但是系統管理員需要花費額外的精力去確保腳本和 CLI 程序能正確處理這些特例。（即使它們很煩人，也務必考慮它們，因為你永遠不知道將擁有哪些文件。）</p><p>再次刪除 <code>~/testdir</code> 下的所有東西 — 再運行一次下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ rm -rf * ; ll</span></span>
<span class="line"><span>total 0</span></span>
<span class="line"><span>[student@studentvm1 testdir]$ for Dept in Human-Resources Sales Finance Information-Technology Engineering Administration Research ; do echo &quot;Working on Department $Dept&quot; ; mkdir &quot;$Dept&quot;  ; done</span></span>
<span class="line"><span>Working on Department Human-Resources</span></span>
<span class="line"><span>Working on Department Sales</span></span>
<span class="line"><span>Working on Department Finance</span></span>
<span class="line"><span>Working on Department Information-Technology</span></span>
<span class="line"><span>Working on Department Engineering</span></span>
<span class="line"><span>Working on Department Administration</span></span>
<span class="line"><span>Working on Department Research</span></span>
<span class="line"><span>[student@studentvm1 testdir]$ ll</span></span>
<span class="line"><span>total 28</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Administration</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Engineering</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Finance</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Human-Resources</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Information-Technology</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Research</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Sales</span></span></code></pre></div><p>假設現在有個需求，需要列出一台 Linux 機器上所有的 RPM 包並對每個包附上簡短的描述。我為北卡羅來納州工作的時候，曾經遇到過這種需求。由於當時開源尚未得到州政府的“批准”，而且我只在台式機上使用 Linux，對技術一竅不通的老闆（PHB）需要我列出我計算機上安裝的所有軟件，以便他們可以“批准”一個特例。</p><p>你怎麼實現它？有一種方法是，已知 <code>rpm –qa</code> 命令提供了 RPM 包的完整描述，包括了白痴老闆想要的東西：軟件名稱和概要描述。</p><p>讓我們一步步執行出最後的結果。首先，列出所有的 RPM 包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ rpm -qa</span></span>
<span class="line"><span>perl-HTTP-Message-6.18-3.fc29.noarch</span></span>
<span class="line"><span>perl-IO-1.39-427.fc29.x86_64</span></span>
<span class="line"><span>perl-Math-Complex-1.59-429.fc29.noarch</span></span>
<span class="line"><span>lua-5.3.5-2.fc29.x86_64</span></span>
<span class="line"><span>java-11-openjdk-headless-11.0.ea.28-2.fc29.x86_64</span></span>
<span class="line"><span>util-linux-2.32.1-1.fc29.x86_64</span></span>
<span class="line"><span>libreport-fedora-2.9.7-1.fc29.x86_64</span></span>
<span class="line"><span>rpcbind-1.2.5-0.fc29.x86_64</span></span>
<span class="line"><span>libsss_sudo-2.0.0-5.fc29.x86_64</span></span>
<span class="line"><span>libfontenc-1.1.3-9.fc29.x86_64</span></span>
<span class="line"><span>&amp;lt;snip&amp;gt;</span></span></code></pre></div><p>用 <code>sort</code> 和 <code>uniq</code> 命令對列表進行排序和打印去重後的結果（有些已安裝的 RPM 包具有相同的名字）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ rpm -qa | sort | uniq</span></span>
<span class="line"><span>a2ps-4.14-39.fc29.x86_64</span></span>
<span class="line"><span>aajohan-comfortaa-fonts-3.001-3.fc29.noarch</span></span>
<span class="line"><span>abattis-cantarell-fonts-0.111-1.fc29.noarch</span></span>
<span class="line"><span>abiword-3.0.2-13.fc29.x86_64</span></span>
<span class="line"><span>abrt-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>abrt-addon-ccpp-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>abrt-addon-coredump-helper-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>abrt-addon-kerneloops-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>abrt-addon-pstoreoops-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>abrt-addon-vmcore-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>&amp;lt;snip&amp;gt;</span></span></code></pre></div><p>以上命令得到了想要的 RPM 列表，因此你可以把這個列表作為一個循環的輸入信息，循環最終會打印每個 RPM 包的詳細信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ for RPM in \`rpm -qa | sort | uniq\` ; do rpm -qi $RPM ; done</span></span></code></pre></div><p>這段代碼產出了多餘的信息。當循環結束後，下一步就是提取出白痴老闆需要的信息。因此，添加一個 <code>egrep</code> 命令用來搜索匹配 <code>^Name</code> 或 <code>^Summary</code> 的行。脱字符（<code>^</code>）表示行首，整個命令表示顯示所有以 Name 或 Summary 開頭的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ for RPM in \`rpm -qa | sort | uniq\` ; do rpm -qi $RPM ; done | egrep -i &quot;^Name|^Summary&quot;</span></span>
<span class="line"><span>Name        : a2ps</span></span>
<span class="line"><span>Summary     : Converts text and other types of files to PostScript</span></span>
<span class="line"><span>Name        : aajohan-comfortaa-fonts</span></span>
<span class="line"><span>Summary     : Modern style true type font</span></span>
<span class="line"><span>Name        : abattis-cantarell-fonts</span></span>
<span class="line"><span>Summary     : Humanist sans serif font</span></span>
<span class="line"><span>Name        : abiword</span></span>
<span class="line"><span>Summary     : Word processing program</span></span>
<span class="line"><span>Name        : abrt</span></span>
<span class="line"><span>Summary     : Automatic bug detection and reporting tool</span></span>
<span class="line"><span>&amp;lt;snip&amp;gt;</span></span></code></pre></div><p>在上面的命令中你可以試試用 <code>grep</code> 代替 <code>egrep</code> ，你會發現用 <code>grep</code> 不能得到正確的結果。你也可以通過管道把命令結果用 <code>less</code> 過濾器來查看。最終命令像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ for RPM in \`rpm -qa | sort | uniq\` ; do rpm -qi $RPM ; done | egrep -i &quot;^Name|^Summary&quot; &gt; RPM-summary.txt</span></span></code></pre></div><p>這個命令列程序用到了管道、重定向和 <code>for</code> 循環，這些全都在一行中。它把你的 CLI 程序的結果重定向到了一個文件，這個文件可以在郵件中使用或在其他地方作為輸入使用。</p><p>這個一次一步構建程序的過程讓你能看到每步的結果，以此來確保整個程序以你期望的流程進行且輸出你想要的結果。</p><p>白痴老闆最終收到了超過 1900 個不同的 RPM 包的清單，我嚴重懷疑根本就沒人讀過這個列表。我給了他們想要的東西，沒有從他們嘴裏聽到過任何關於 RPM 包的信息。</p><h3 id="其他循環" tabindex="-1">其他循環 <a class="header-anchor" href="#其他循環" aria-label="Permalink to “其他循環”">​</a></h3><p>Bash 中還有兩種其他類型的循環結構：<code>while</code> 和 <code>until</code> 結構，兩者在語法和功能上都類似。這些循環結構的基礎語法很簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while [ expression ] ; do list ; done</span></span></code></pre></div><p>邏輯解釋：表達式（<code>expression</code>）結果為 true 時，執行程序語句 <code>list</code>。表達式結果為 false 時，退出循環。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>until [ expression ] ; do list ; done</span></span></code></pre></div><p>邏輯解釋：執行程序語句 <code>list</code>，直到表達式的結果為 true。當表達式結果為 true 時，退出循環。</p><h4 id="while-循環" tabindex="-1">While 循環 <a class="header-anchor" href="#while-循環" aria-label="Permalink to “While 循環”">​</a></h4><p><code>while</code> 循環用於當邏輯表達式結果為 true 時執行一系列程序語句。假設你的 PWD 仍是 <code>~/testdir</code>。</p><p>最簡單的 <code>while</code> 循環形式是這個會一直運行下去的循環。下面格式的條件語句永遠以 <code>true</code> 作為返回。你也可以用簡單的 <code>1</code> 代替 <code>true</code>，結果一樣，但是這解釋了 true 表達式的用法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ X=0 ; while [ true ] ; do echo $X ; X=$((X+1)) ; done | head</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>[student@studentvm1 testdir]$</span></span></code></pre></div><p>既然你已經學了 CLI 的各部分知識，那就讓它變得更有用處。首先，為了防止變量 <code>$X</code> 在前面的程序或 CLI 命令執行後有遺留的值，設置 <code>$X</code> 的值為 0。然後，因為邏輯表達式 <code>[ true ]</code> 的結果永遠是 1，即 true，在 <code>do</code> 和 <code>done</code> 中間的程序指令列表會一直執行 — 或者直到你按下 <code>Ctrl+C</code> 抑或發送一個 2 號信號給程序。那些程序指令是算數擴展，用來打印變量 <code>$X</code> 當前的值並加 1.</p>`,42)),a("p",null,[s[9]||(s[9]=n("《",-1)),p(e,{href:"https://www.apress.com/us/book/9781484237298"},{default:i(()=>[...s[8]||(s[8]=[n("系統管理員的 Linux 哲學",-1)])]),_:1}),s[10]||(s[10]=n("》的信條之一是追求優雅，實現優雅的一種方式就是簡化。你可以用操作符 ",-1)),s[11]||(s[11]=a("code",null,"++",-1)),s[12]||(s[12]=n(" 來簡化這個程序。在第一個例子中，變量當前的值被打印出來，然後變量的值增加了。可以在變量後加一個 ",-1)),s[13]||(s[13]=a("code",null,"++",-1)),s[14]||(s[14]=n(" 來表示這個邏輯：",-1))]),s[34]||(s[34]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 ~]$ X=0 ; while [ true ] ; do echo $((X++)) ; done | head</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span></code></pre></div><p>現在刪掉程序最後的 <code>| head</code> 再運行一次。</p><p>在下面這個版本中，變量在值被打印之前就自增了。這是通過在變量之前添加 <code>++</code> 操作符實現的。你能看出區別嗎？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 ~]$ X=0 ; while [ true ] ; do echo $((++X)) ; done | head</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span></code></pre></div><p>你已經把打印變量的值和自增簡化到了一條語句。類似 <code>++</code> 操作符，也有 <code>--</code> 操作符。</p><p>你需要一個在循環到某個特定數字時終止循環的方法。把 true 表達式換成一個數字比較表達式來實現它。這裏有一個循環到 5 終止的程序。在下面的示例代碼中，你可以看到 <code>-le</code> 是 “小於或等於” 的數字邏輯操作符。整個語句的意思：只要 <code>$X</code> 的值小於或等於 5，循環就一直運行。當 <code>$X</code> 增加到 6 時，循環終止。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 ~]$ X=0 ; while [ $X -le 5 ] ; do echo $((X++)) ; done</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>[student@studentvm1 ~]$</span></span></code></pre></div><h4 id="until-循環" tabindex="-1">Until 循環 <a class="header-anchor" href="#until-循環" aria-label="Permalink to “Until 循環”">​</a></h4><p><code>until</code> 命令非常像 <code>while</code> 命令。不同之處是，它直到邏輯表達式的值是 <code>true</code> 之前，會一直循環。看一下這種結構最簡單的格式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 ~]$ X=0 ; until false  ; do echo $((X++)) ; done | head</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>[student@studentvm1 ~]$</span></span></code></pre></div><p>它用一個邏輯比較表達式來計數到一個特定的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 ~]$ X=0 ; until [ $X -eq 5 ]  ; do echo $((X++)) ; done</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>[student@studentvm1 ~]$ X=0 ; until [ $X -eq 5 ]  ; do echo $((++X)) ; done</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>[student@studentvm1 ~]$</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>本系列探討了構建 Bash 命令列程序和 shell 腳本的很多強大的工具。但是這僅僅是你能用 Bash 做的很多有意思的事中的冰山一角，接下來就看你的了。</p><p>我發現學習 Bash 編程最好的方法就是實踐。找一個需要多個 Bash 命令的簡單項目然後寫一個 CLI 程序。系統管理員們要做很多適合 CLI 編程的工作，因此我確信你很容易能找到自動化的任務。</p><p>很多年前，儘管我對其他的 Shell 語言和 Perl 很熟悉，但還是決定用 Bash 做所有系統管理員的自動化任務。我發現，有時稍微搜索一下，我可以用 Bash 實現我需要的所有事情。</p><hr>`,17)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/19/10/programming-bash-loops"},{default:i(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/19/10/programming-bash-loops",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/dboth"},{default:i(()=>[...s[17]||(s[17]=[n("David Both",-1)])]),_:1}),s[22]||(s[22]=n(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[18]||(s[18]=[n("lujun9972",-1)])]),_:1}),s[23]||(s[23]=n(" 譯者：",-1)),p(e,{href:"https://github.com/lxbwolf"},{default:i(()=>[...s[19]||(s[19]=[n("lxbwolf",-1)])]),_:1}),s[24]||(s[24]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[26]||(s[26]=[n("Linux中國",-1)])]),_:1}),s[29]||(s[29]=n(" 榮譽推出",-1))])])}const v=l(c,[["render",h]]);export{y as __pageData,v as default};
