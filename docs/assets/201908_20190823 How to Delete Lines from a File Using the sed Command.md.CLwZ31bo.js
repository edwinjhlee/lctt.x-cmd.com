import{_ as l,a0 as t,w as d,s as c,ao as o,I as i,x as a,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何使用 sed 命令删除文件中的行 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 sed 命令删除文件中的行 | LCTT (201908) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 sed 命令删除文件中的行 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 sed 命令删除文件中的行 | LCTT (201908) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201908/20190823 How to Delete Lines from a File Using the sed Command","title":"如何使用 sed 命令删除文件中的行","tag":"201908","desc":""},"relativePath":"201908/20190823 How to Delete Lines from a File Using the sed Command.md","filePath":"[post].md"}'),h={name:"201908/20190823 How to Delete Lines from a File Using the sed Command.md"};function r(g,s,b,k,u,m){const n=t("Link");return d(),c("div",null,[s[15]||(s[15]=o(`<h1 id="如何使用-sed-命令删除文件中的行" tabindex="-1">如何使用 sed 命令删除文件中的行 <a class="header-anchor" href="#如何使用-sed-命令删除文件中的行" aria-label="Permalink to “如何使用 sed 命令删除文件中的行”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/201908/28/100204ei6v98sa69hdf3zf.jpg" alt=""></p><p>Sed 代表<ruby>流编辑器<rt>Stream Editor</rt></ruby>，常用于 Linux 中基本的文本处理。<code>sed</code> 命令是 Linux 中的重要命令之一，在文件处理方面有着重要作用。可用于删除或移动与给定模式匹配的特定行。</p><p>它还可以删除文件中的特定行，它能够从文件中删除表达式，文件可以通过指定分隔符（例如逗号、制表符或空格）进行标识。</p><p>本文列出了 15 个使用范例，它们可以帮助你掌握 <code>sed</code> 命令。</p><p>如果你能理解并且记住这些命令，在你需要使用 <code>sed</code> 时，这些命令就能派上用场，帮你节约很多时间。</p><p>注意：为了方便演示，我在执行 <code>sed</code> 命令时，不使用 <code>-i</code> 选项（因为这个选项会直接修改文件内容），被移除了行的文件内容将打印到 Linux 终端。</p><p>但是，如果你想在实际环境中从源文件中删除行，请在 <code>sed</code> 命令中使用 <code>-i</code> 选项。</p><p>演示之前，我创建了 <code>sed-demo.txt</code> 文件，并添加了以下内容和相应行号以便更好地理解。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat sed-demo.txt</span></span>
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
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_1-如何删除文件的第一行" tabindex="-1">1) 如何删除文件的第一行？ <a class="header-anchor" href="#_1-如何删除文件的第一行" aria-label="Permalink to “1) 如何删除文件的第一行？”">​</a></h3><p>使用以下语法删除文件首行。</p><p><code>N</code> 表示文件中的第 N 行，<code>d</code> 选项在 <code>sed</code> 命令中用于删除一行。</p><p>语法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sed &#39;Nd&#39; file</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令删除 <code>sed-demo.txt</code> 中的第一行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;1d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_2-如何删除文件的最后一行" tabindex="-1">2) 如何删除文件的最后一行？ <a class="header-anchor" href="#_2-如何删除文件的最后一行" aria-label="Permalink to “2) 如何删除文件的最后一行？”">​</a></h3><p>使用以下语法删除文件最后一行。</p><p><code>$</code> 符号表示文件的最后一行。</p><p>使用以下 <code>sed</code> 命令删除 <code>sed-demo.txt</code> 中的最后一行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;$d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 Linux Operating System</span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span></code></pre></div><h3 id="_3-如何删除指定行" tabindex="-1">3) 如何删除指定行？ <a class="header-anchor" href="#_3-如何删除指定行" aria-label="Permalink to “3) 如何删除指定行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除 <code>sed-demo.txt</code> 中的第 3 行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;3d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 Linux Operating System</span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_4-如何删除指定范围内的行" tabindex="-1">4) 如何删除指定范围内的行？ <a class="header-anchor" href="#_4-如何删除指定范围内的行" aria-label="Permalink to “4) 如何删除指定范围内的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除 <code>sed-demo.txt</code> 中的第 5 到 7 行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;5,7d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 Linux Operating System</span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_5-如何删除多行内容" tabindex="-1">5) 如何删除多行内容？ <a class="header-anchor" href="#_5-如何删除多行内容" aria-label="Permalink to “5) 如何删除多行内容？”">​</a></h3><p><code>sed</code> 命令能够删除给定行的集合。</p><p>本例中，下面的 <code>sed</code> 命令删除了第 1 行、第 5 行、第 9 行和最后一行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;1d;5d;9d;$d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span></code></pre></div><h3 id="_5a-如何删除指定范围以外的行" tabindex="-1">5a) 如何删除指定范围以外的行？ <a class="header-anchor" href="#_5a-如何删除指定范围以外的行" aria-label="Permalink to “5a) 如何删除指定范围以外的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除 <code>sed-demo.txt</code> 中第 3 到 6 行范围以外的所有行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;3,6!d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span></code></pre></div><h3 id="_6-如何删除空行" tabindex="-1">6) 如何删除空行？ <a class="header-anchor" href="#_6-如何删除空行" aria-label="Permalink to “6) 如何删除空行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除 <code>sed-demo.txt</code> 中的空行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/^$/d&#39; sed-demo.txt</span></span>
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
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_7-如何删除包含某个模式的行" tabindex="-1">7) 如何删除包含某个模式的行？ <a class="header-anchor" href="#_7-如何删除包含某个模式的行" aria-label="Permalink to “7) 如何删除包含某个模式的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除 <code>sed-demo.txt</code> 中匹配到 <code>System</code> 模式的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/System/d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_8-如何删除包含字符串集合中某个字符串的行" tabindex="-1">8) 如何删除包含字符串集合中某个字符串的行？ <a class="header-anchor" href="#_8-如何删除包含字符串集合中某个字符串的行" aria-label="Permalink to “8) 如何删除包含字符串集合中某个字符串的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除 <code>sed-demo.txt</code> 中匹配到 <code>System</code> 或 <code>Linux</code> 表达式的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/System\\|Linux/d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_9-如何删除以指定字符开头的行" tabindex="-1">9) 如何删除以指定字符开头的行？ <a class="header-anchor" href="#_9-如何删除以指定字符开头的行" aria-label="Permalink to “9) 如何删除以指定字符开头的行？”">​</a></h3><p>为了测试，我创建了 <code>sed-demo-1.txt</code> 文件，并添加了以下内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat sed-demo-1.txt</span></span>
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
<span class="line"><span>3 4 5 6</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令删除以 <code>R</code> 字符开头的所有行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/^R/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>Arch Linux - 1</span></span>
<span class="line"><span>2 - Manjaro</span></span>
<span class="line"><span>3 4 5 6</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令删除 <code>R</code> 或者 <code>F</code> 字符开头的所有行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/^[RF]/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>Arch Linux - 1</span></span>
<span class="line"><span>2 - Manjaro</span></span>
<span class="line"><span>3 4 5 6</span></span></code></pre></div><h3 id="_10-如何删除以指定字符结尾的行" tabindex="-1">10) 如何删除以指定字符结尾的行？ <a class="header-anchor" href="#_10-如何删除以指定字符结尾的行" aria-label="Permalink to “10) 如何删除以指定字符结尾的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除 <code>m</code> 字符结尾的所有行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/m$/d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令删除 <code>x</code> 或者 <code>m</code> 字符结尾的所有行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/[xm]$/d&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_11-如何删除所有大写字母开头的行" tabindex="-1">11) 如何删除所有大写字母开头的行？ <a class="header-anchor" href="#_11-如何删除所有大写字母开头的行" aria-label="Permalink to “11) 如何删除所有大写字母开头的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除所有大写字母开头的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/^[A-Z]/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>2 - Manjaro</span></span>
<span class="line"><span>3 4 5 6</span></span></code></pre></div><h3 id="_12-如何删除指定范围内匹配模式的行" tabindex="-1">12) 如何删除指定范围内匹配模式的行？ <a class="header-anchor" href="#_12-如何删除指定范围内匹配模式的行" aria-label="Permalink to “12) 如何删除指定范围内匹配模式的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除第 1 到 6 行中包含 <code>Linux</code> 表达式的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;1,6{/Linux/d;}&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2 Unix Operating System</span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_13-如何删除匹配模式的行及其下一行" tabindex="-1">13) 如何删除匹配模式的行及其下一行？ <a class="header-anchor" href="#_13-如何删除匹配模式的行及其下一行" aria-label="Permalink to “13) 如何删除匹配模式的行及其下一行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除包含 <code>System</code> 表达式的行以及它的下一行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/System/{N;d;}&#39; sed-demo.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 RHEL</span></span>
<span class="line"><span>4 Red Hat</span></span>
<span class="line"><span>5 Fedora</span></span>
<span class="line"><span>6 Arch Linux</span></span>
<span class="line"><span>7 CentOS</span></span>
<span class="line"><span>8 Debian</span></span>
<span class="line"><span>9 Ubuntu</span></span>
<span class="line"><span>10 openSUSE</span></span></code></pre></div><h3 id="_14-如何删除包含数字的行" tabindex="-1">14) 如何删除包含数字的行？ <a class="header-anchor" href="#_14-如何删除包含数字的行" aria-label="Permalink to “14) 如何删除包含数字的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除所有包含数字的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/[0-9]/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>RHEL</span></span>
<span class="line"><span>Red Hat</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令删除所有以数字开头的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/^[0-9]/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>RHEL</span></span>
<span class="line"><span>Red Hat</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>Arch Linux - 1</span></span></code></pre></div><p>使用以下 <code>sed</code> 命令删除所有以数字结尾的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/[0-9]$/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Linux Operating System</span></span>
<span class="line"><span>Unix Operating System</span></span>
<span class="line"><span>RHEL</span></span>
<span class="line"><span>Red Hat</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>debian</span></span>
<span class="line"><span>ubuntu</span></span>
<span class="line"><span>2 - Manjaro</span></span></code></pre></div><h3 id="_15-如何删除包含字母的行" tabindex="-1">15) 如何删除包含字母的行？ <a class="header-anchor" href="#_15-如何删除包含字母的行" aria-label="Permalink to “15) 如何删除包含字母的行？”">​</a></h3><p>使用以下 <code>sed</code> 命令删除所有包含字母的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed &#39;/[A-Za-z]/d&#39; sed-demo-1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 4 5 6</span></span></code></pre></div><hr>`,76)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://www.2daygeek.com/linux-remove-delete-lines-in-file-sed-command/"},{default:p(()=>[...s[0]||(s[0]=[a("https://www.2daygeek.com/linux-remove-delete-lines-in-file-sed-command/",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://www.2daygeek.com/author/magesh/"},{default:p(()=>[...s[2]||(s[2]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),e(n,{href:"https://github.com/hello-wn"},{default:p(()=>[...s[4]||(s[4]=[a("hello-wn",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const C=l(h,[["render",r]]);export{y as __pageData,C as default};
