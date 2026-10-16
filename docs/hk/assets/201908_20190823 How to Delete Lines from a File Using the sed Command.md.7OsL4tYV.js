import{_ as l,a0 as t,w as d,s as c,ao as o,I as i,x as a,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"如何使用 sed 命令刪除文件中的行 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 sed 命令刪除文件中的行 | LCTT (201908) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 sed 命令刪除文件中的行 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 sed 命令刪除文件中的行 | LCTT (201908) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201908/20190823 How to Delete Lines from a File Using the sed Command","title":"如何使用 sed 命令刪除文件中的行","tag":"201908","desc":""},"relativePath":"201908/20190823 How to Delete Lines from a File Using the sed Command.md","filePath":"[post].md"}'),h={name:"201908/20190823 How to Delete Lines from a File Using the sed Command.md"};function r(g,s,b,k,u,m){const n=t("Link");return d(),c("div",null,[s[15]||(s[15]=o(`<h1 id="如何使用-sed-命令刪除文件中的行" tabindex="-1">如何使用 sed 命令刪除文件中的行 <a class="header-anchor" href="#如何使用-sed-命令刪除文件中的行" aria-label="Permalink to “如何使用 sed 命令刪除文件中的行”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/201908/28/100204ei6v98sa69hdf3zf.jpg" alt=""></p><p>Sed 代表<ruby>流編輯器<rt>Stream Editor</rt></ruby>，常用於 Linux 中基本的文本處理。<code>sed</code> 命令是 Linux 中的重要命令之一，在文件處理方面有着重要作用。可用於刪除或移動與給定模式匹配的特定行。</p><p>它還可以刪除文件中的特定行，它能夠從文件中刪除表達式，文件可以通過指定分隔符（例如逗號、製表符或空格）進行標識。</p><p>本文列出了 15 個使用範例，它們可以幫助你掌握 <code>sed</code> 命令。</p><p>如果你能理解並且記住這些命令，在你需要使用 <code>sed</code> 時，這些命令就能派上用場，幫你節約很多時間。</p><p>注意：為了方便演示，我在執行 <code>sed</code> 命令時，不使用 <code>-i</code> 選項（因為這個選項會直接修改文件內容），被移除了行的文件內容將打印到 Linux 終端。</p><p>但是，如果你想在實際環境中從源文件中刪除行，請在 <code>sed</code> 命令中使用 <code>-i</code> 選項。</p><p>演示之前，我創建了 <code>sed-demo.txt</code> 文件，並添加了以下內容和相應行號以便更好地理解。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 Linux Operating System</span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_1-如何刪除文件的第一行" tabindex="-1">1) 如何刪除文件的第一行？ <a class="header-anchor" href="#_1-如何刪除文件的第一行" aria-label="Permalink to “1) 如何刪除文件的第一行？”">​</a></h3><p>使用以下語法刪除文件首行。</p><p><code>N</code> 表示文件中的第 N 行，<code>d</code> 選項在 <code>sed</code> 命令中用於刪除一行。</p><p>語法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sed &#39;Nd&#39; file</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令刪除 <code>sed-demo.txt</code> 中的第一行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;1d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_2-如何刪除文件的最後一行" tabindex="-1">2) 如何刪除文件的最後一行？ <a class="header-anchor" href="#_2-如何刪除文件的最後一行" aria-label="Permalink to “2) 如何刪除文件的最後一行？”">​</a></h3><p>使用以下語法刪除文件最後一行。</p><p><code>$</code> 符號表示文件的最後一行。</p><p>使用以下 <code>sed</code> 命令刪除 <code>sed-demo.txt</code> 中的最後一行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;$d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 Linux Operating System</span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span></code></pre></div><h3 id="_3-如何刪除指定行" tabindex="-1">3) 如何刪除指定行？ <a class="header-anchor" href="#_3-如何刪除指定行" aria-label="Permalink to “3) 如何刪除指定行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除 <code>sed-demo.txt</code> 中的第 3 行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;3d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 Linux Operating System</span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_4-如何刪除指定範圍內的行" tabindex="-1">4) 如何刪除指定範圍內的行？ <a class="header-anchor" href="#_4-如何刪除指定範圍內的行" aria-label="Permalink to “4) 如何刪除指定範圍內的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除 <code>sed-demo.txt</code> 中的第 5 到 7 行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;5,7d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 Linux Operating System</span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_5-如何刪除多行內容" tabindex="-1">5) 如何刪除多行內容？ <a class="header-anchor" href="#_5-如何刪除多行內容" aria-label="Permalink to “5) 如何刪除多行內容？”">​</a></h3><p><code>sed</code> 命令能夠刪除給定行的集合。</p><p>本例中，下面的 <code>sed</code> 命令刪除了第 1 行、第 5 行、第 9 行和最後一行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;1d;5d;9d;$d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span></code></pre></div><h3 id="_5a-如何刪除指定範圍以外的行" tabindex="-1">5a) 如何刪除指定範圍以外的行？ <a class="header-anchor" href="#_5a-如何刪除指定範圍以外的行" aria-label="Permalink to “5a) 如何刪除指定範圍以外的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除 <code>sed-demo.txt</code> 中第 3 到 6 行範圍以外的所有行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;3,6!d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span></code></pre></div><h3 id="_6-如何刪除空行" tabindex="-1">6) 如何刪除空行？ <a class="header-anchor" href="#_6-如何刪除空行" aria-label="Permalink to “6) 如何刪除空行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除 <code>sed-demo.txt</code> 中的空行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/^$/d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 Linux Operating System</span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_7-如何刪除包含某個模式的行" tabindex="-1">7) 如何刪除包含某個模式的行？ <a class="header-anchor" href="#_7-如何刪除包含某個模式的行" aria-label="Permalink to “7) 如何刪除包含某個模式的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除 <code>sed-demo.txt</code> 中匹配到 <code>System</code> 模式的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/System/d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_8-如何刪除包含字符串集合中某個字符串的行" tabindex="-1">8) 如何刪除包含字符串集合中某個字符串的行？ <a class="header-anchor" href="#_8-如何刪除包含字符串集合中某個字符串的行" aria-label="Permalink to “8) 如何刪除包含字符串集合中某個字符串的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除 <code>sed-demo.txt</code> 中匹配到 <code>System</code> 或 <code>Linux</code> 表達式的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/System\\|Linux/d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_9-如何刪除以指定字符開頭的行" tabindex="-1">9) 如何刪除以指定字符開頭的行？ <a class="header-anchor" href="#_9-如何刪除以指定字符開頭的行" aria-label="Permalink to “9) 如何刪除以指定字符開頭的行？”">​</a></h3><p>為了測試，我創建了 <code>sed-demo-1.txt</code> 文件，並添加了以下內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>RHEL</span></span>
<span class="line"><span>Red Hat</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>Arch Linux - 1</span></span>
<span class="line"><span>2 - Manjaro</span></span>
<span class="line"><span>3 4 5 6</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令刪除以 <code>R</code> 字符開頭的所有行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/^R/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>Arch Linux - 1</span></span>
<span class="line"><span>2 - Manjaro</span></span>
<span class="line"><span>3 4 5 6</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令刪除 <code>R</code> 或者 <code>F</code> 字符開頭的所有行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/^[RF]/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>Arch Linux - 1</span></span>
<span class="line"><span>2 - Manjaro</span></span>
<span class="line"><span>3 4 5 6</span></span></code></pre></div><h3 id="_10-如何刪除以指定字符結尾的行" tabindex="-1">10) 如何刪除以指定字符結尾的行？ <a class="header-anchor" href="#_10-如何刪除以指定字符結尾的行" aria-label="Permalink to “10) 如何刪除以指定字符結尾的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除 <code>m</code> 字符結尾的所有行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/m$/d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令刪除 <code>x</code> 或者 <code>m</code> 字符結尾的所有行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/[xm]$/d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_11-如何刪除所有大寫字母開頭的行" tabindex="-1">11) 如何刪除所有大寫字母開頭的行？ <a class="header-anchor" href="#_11-如何刪除所有大寫字母開頭的行" aria-label="Permalink to “11) 如何刪除所有大寫字母開頭的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除所有大寫字母開頭的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/^[A-Z]/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>2 - Manjaro</span></span>
<span class="line"><span>3 4 5 6</span></span></code></pre></div><h3 id="_12-如何刪除指定範圍內匹配模式的行" tabindex="-1">12) 如何刪除指定範圍內匹配模式的行？ <a class="header-anchor" href="#_12-如何刪除指定範圍內匹配模式的行" aria-label="Permalink to “12) 如何刪除指定範圍內匹配模式的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除第 1 到 6 行中包含 <code>Linux</code> 表達式的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;1,6{/Linux/d;}&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_13-如何刪除匹配模式的行及其下一行" tabindex="-1">13) 如何刪除匹配模式的行及其下一行？ <a class="header-anchor" href="#_13-如何刪除匹配模式的行及其下一行" aria-label="Permalink to “13) 如何刪除匹配模式的行及其下一行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除包含 <code>System</code> 表達式的行以及它的下一行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/System/{N;d;}&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_14-如何刪除包含數字的行" tabindex="-1">14) 如何刪除包含數字的行？ <a class="header-anchor" href="#_14-如何刪除包含數字的行" aria-label="Permalink to “14) 如何刪除包含數字的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除所有包含數字的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/[0-9]/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>RHEL</span></span>
<span class="line"><span>Red Hat</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令刪除所有以數字開頭的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/^[0-9]/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>RHEL</span></span>
<span class="line"><span>Red Hat</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>Arch Linux - 1</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令刪除所有以數字結尾的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/[0-9]$/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>RHEL</span></span>
<span class="line"><span>Red Hat</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>2 - Manjaro</span></span></code></pre></div><h3 id="_15-如何刪除包含字母的行" tabindex="-1">15) 如何刪除包含字母的行？ <a class="header-anchor" href="#_15-如何刪除包含字母的行" aria-label="Permalink to “15) 如何刪除包含字母的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令刪除所有包含字母的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/[A-Za-z]/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 4 5 6</span></span></code></pre></div><hr>`,76)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://www.2daygeek.com/linux-remove-delete-lines-in-file-sed-command/"},{default:p(()=>[...s[0]||(s[0]=[a("https://www.2daygeek.com/linux-remove-delete-lines-in-file-sed-command/",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://www.2daygeek.com/author/magesh/"},{default:p(()=>[...s[2]||(s[2]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),e(n,{href:"https://github.com/hello-wn"},{default:p(()=>[...s[4]||(s[4]=[a("hello-wn",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const C=l(h,[["render",r]]);export{y as __pageData,C as default};
