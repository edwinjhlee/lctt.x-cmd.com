import{_ as l,a0 as t,w as c,s as o,ao as h,I as i,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"如何在 Linux 上覆制文件/文件夾到遠程系統？ | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 上覆制文件/文件夾到遠程系統？ | LCTT (201902) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 上覆制文件/文件夾到遠程系統？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 上覆制文件/文件夾到遠程系統？ | LCTT (201902) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201902/20190122 How To Copy A File-Folder From A Local System To Remote System In Linux","title":"如何在 Linux 上覆制文件/文件夾到遠程系統？","tag":"201902","desc":""},"relativePath":"201902/20190122 How To Copy A File-Folder From A Local System To Remote System In Linux.md","filePath":"[post].md"}'),d={name:"201902/20190122 How To Copy A File-Folder From A Local System To Remote System In Linux.md"};function r(g,s,u,k,b,y){const a=t("Link");return c(),o("div",null,[s[15]||(s[15]=h(`<h1 id="如何在-linux-上覆制文件-文件夾到遠程系統" tabindex="-1">如何在 Linux 上覆制文件/文件夾到遠程系統？ <a class="header-anchor" href="#如何在-linux-上覆制文件-文件夾到遠程系統" aria-label="Permalink to “如何在 Linux 上覆制文件/文件夾到遠程系統？”">​</a></h1><p>從一個服務器複製文件到另一個服務器，或者從本地到遠程複製是 Linux 管理員的日常任務之一。</p><p>我覺得不會有人不同意，因為無論在哪裏這都是你的日常操作之一。有很多辦法都能處理這個任務，我們試着加以概括。你可以挑一個喜歡的方法。當然，看看其他命令也能在別的地方幫到你。</p><p>我已經在自己的環境下測試過所有的命令和腳本了，因此你可以直接用到日常工作當中。</p><p>通常大家都傾向 <code>scp</code>，因為它是文件複製的<ruby>原生命令<rt>native command</rt></ruby>之一。但本文所列出的其它命令也很好用，建議你嘗試一下。</p><p>文件複製可以輕易地用以下四種方法。</p><ul><li><code>scp</code>：在網絡上的兩個主機之間複製文件，它使用 <code>ssh</code> 做文件傳輸，並使用相同的認證方式，具有相同的安全性。</li><li><code>rsync</code>：是一個既快速又出眾的多功能文件複製工具。它能本地複製、通過遠程 shell 在其它主機之間複製，或者與遠程的 <code>rsync</code> <ruby>守護進程<rt>daemon</rt></ruby> 之間複製。</li><li><code>pscp</code>：是一個並行複製文件到多個主機上的程序。它提供了諸多特性，例如為 <code>scp</code> 配置免密傳輸，保存輸出到文件，以及超時控制。</li><li><code>prsync</code>：也是一個並行複製文件到多個主機上的程序。它也提供了諸多特性，例如為 <code>ssh</code> 配置免密傳輸，保存輸出到 文件，以及超時控制。</li></ul><h3 id="方式-1-如何在-linux-上使用-scp-命令從本地系統向遠程系統複製文件-文件夾" tabindex="-1">方式 1：如何在 Linux 上使用 scp 命令從本地系統向遠程系統複製文件/文件夾？ <a class="header-anchor" href="#方式-1-如何在-linux-上使用-scp-命令從本地系統向遠程系統複製文件-文件夾" aria-label="Permalink to “方式 1：如何在 Linux 上使用 scp 命令從本地系統向遠程系統複製文件/文件夾？”">​</a></h3><p><code>scp</code> 命令可以讓我們從本地系統複製文件/文件夾到遠程系統上。</p><p>我會把 <code>output.txt</code> 文件從本地系統複製到 <code>2g.CentOS.com</code> 遠程系統的 <code>/opt/backup</code> 文件夾下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># scp output.txt root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt                                                                                              100% 2468     2.4KB/s   00:00</span></span></code></pre></div><p>從本地系統複製兩個文件 <code>output.txt</code> 和 <code>passwd-up.sh</code> 到遠程系統 <code>2g.CentOs.com</code> 的 <code>/opt/backup</code> 文件夾下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># scp output.txt passwd-up.sh root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>passwd-up.sh 100% 877 0.9KB/s 00:00</span></span></code></pre></div><p>從本地系統複製 <code>shell-script</code> 文件夾到遠程系統 <code>2g.CentOs.com</code> 的 <code>/opt/back</code> 文件夾下。</p><p>這會連同<code>shell-script</code> 文件夾下所有的文件一同複製到<code>/opt/back</code> 下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># scp -r /home/daygeek/2g/shell-script/ root@:/opt/backup/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>ovh.sh      100% 76 0.1KB/s 00:00</span></span>
<span class="line"><span>passwd-up.sh 100% 877 0.9KB/s 00:00</span></span>
<span class="line"><span>passwd-up1.sh 100% 7 0.0KB/s 00:00</span></span>
<span class="line"><span>server-list.txt 100% 23 0.0KB/s 00:00</span></span></code></pre></div><h3 id="方式-2-如何在-linux-上使用-scp-命令和-shell-腳本複製文件-文件夾到多個遠程系統上" tabindex="-1">方式 2：如何在 Linux 上使用 scp 命令和 Shell 腳本複製文件/文件夾到多個遠程系統上？ <a class="header-anchor" href="#方式-2-如何在-linux-上使用-scp-命令和-shell-腳本複製文件-文件夾到多個遠程系統上" aria-label="Permalink to “方式 2：如何在 Linux 上使用 scp 命令和 Shell 腳本複製文件/文件夾到多個遠程系統上？”">​</a></h3><p>如果你想複製同一個文件到多個遠程服務器上，那就需要創建一個如下面那樣的小 shell 腳本。</p><p>並且，需要將服務器添加進 <code>server-list.txt</code> 文件。確保添加成功後，每個服務器應當單獨一行。</p><p>最終，你想要的腳本就像下面這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  scp /home/daygeek/2g/shell-script/output.txt root@$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>完成之後，給 <code>file-copy.sh</code> 文件設置可執行權限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># chmod +x file-copy.sh</span></span></code></pre></div><p>最後運行腳本完成複製。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span></code></pre></div><p>使用下面的腳本可以複製多個文件到多個遠程服務器上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  scp /home/daygeek/2g/shell-script/output.txt passwd-up.sh root@$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>下面結果顯示所有的兩個文件都複製到兩個服務器上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-cp.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>passwd-up.sh 100% 877 0.9KB/s 00:00</span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>passwd-up.sh 100% 877 0.9KB/s 00:00</span></span></code></pre></div><p>使用下面的腳本遞歸地複製文件夾到多個遠程服務器上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  scp -r /home/daygeek/2g/shell-script/ root@$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>上述腳本的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-cp.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>ovh.sh      100% 76 0.1KB/s 00:00</span></span>
<span class="line"><span>passwd-up.sh 100% 877 0.9KB/s 00:00</span></span>
<span class="line"><span>passwd-up1.sh 100% 7 0.0KB/s 00:00</span></span>
<span class="line"><span>server-list.txt 100% 23 0.0KB/s 00:00</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>ovh.sh      100% 76 0.1KB/s 00:00</span></span>
<span class="line"><span>passwd-up.sh 100% 877 0.9KB/s 00:00</span></span>
<span class="line"><span>passwd-up1.sh 100% 7 0.0KB/s 00:00</span></span>
<span class="line"><span>server-list.txt 100% 23 0.0KB/s 00:00</span></span></code></pre></div><h3 id="方式-3-如何在-linux-上使用-pscp-命令複製文件-文件夾到多個遠程系統上" tabindex="-1">方式 3：如何在 Linux 上使用 pscp 命令複製文件/文件夾到多個遠程系統上？ <a class="header-anchor" href="#方式-3-如何在-linux-上使用-pscp-命令複製文件-文件夾到多個遠程系統上" aria-label="Permalink to “方式 3：如何在 Linux 上使用 pscp 命令複製文件/文件夾到多個遠程系統上？”">​</a></h3><p><code>pscp</code> 命令可以直接讓我們複製文件到多個遠程服務器上。</p><p>使用下面的 <code>pscp</code> 命令複製單個文件到遠程服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -H 2g.CentOS.com /home/daygeek/2g/shell-script/output.txt /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:46:11 [SUCCESS] 2g.CentOS.com</span></span></code></pre></div><p>使用下面的 <code>pscp</code> 命令複製多個文件到遠程服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -H 2g.CentOS.com /home/daygeek/2g/shell-script/output.txt ovh.sh /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:47:48 [SUCCESS] 2g.CentOS.com</span></span></code></pre></div><p>使用下面的 <code>pscp</code> 命令遞歸地複製整個文件夾到遠程服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -H 2g.CentOS.com -r /home/daygeek/2g/shell-script/ /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:48:46 [SUCCESS] 2g.CentOS.com</span></span></code></pre></div><p>使用下面的 <code>pscp</code> 命令使用下面的命令複製單個文件到多個遠程服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -h server-list.txt /home/daygeek/2g/shell-script/output.txt /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:49:48 [SUCCESS] 2g.CentOS.com</span></span>
<span class="line"><span>[2] 18:49:48 [SUCCESS] 2g.Debian.com</span></span></code></pre></div><p>使用下面的 <code>pscp</code> 命令複製多個文件到多個遠程服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -h server-list.txt /home/daygeek/2g/shell-script/output.txt passwd-up.sh /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:50:30 [SUCCESS] 2g.Debian.com</span></span>
<span class="line"><span>[2] 18:50:30 [SUCCESS] 2g.CentOS.com</span></span></code></pre></div><p>使用下面的命令遞歸地複製文件夾到多個遠程服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -h server-list.txt -r /home/daygeek/2g/shell-script/ /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:51:31 [SUCCESS] 2g.Debian.com</span></span>
<span class="line"><span>[2] 18:51:31 [SUCCESS] 2g.CentOS.com</span></span></code></pre></div><h3 id="方式-4-如何在-linux-上使用-rsync-命令複製文件-文件夾到多個遠程系統上" tabindex="-1">方式 4：如何在 Linux 上使用 rsync 命令複製文件/文件夾到多個遠程系統上？ <a class="header-anchor" href="#方式-4-如何在-linux-上使用-rsync-命令複製文件-文件夾到多個遠程系統上" aria-label="Permalink to “方式 4：如何在 Linux 上使用 rsync 命令複製文件/文件夾到多個遠程系統上？”">​</a></h3><p><code>rsync</code> 是一個即快速又出眾的多功能文件複製工具。它能本地複製、通過遠程 shell 在其它主機之間複製，或者在遠程 <code>rsync</code> <ruby>守護進程<rt>daemon</rt></ruby> 之間複製。</p><p>使用下面的 <code>rsync</code> 命令複製單個文件到遠程服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rsync -avz /home/daygeek/2g/shell-script/output.txt root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>output.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 598 bytes received 31 bytes 1258.00 bytes/sec</span></span>
<span class="line"><span>total size is 2468 speedup is 3.92</span></span></code></pre></div><p>使用下面的 <code>rsync</code> 命令複製多個文件到遠程服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rsync -avz /home/daygeek/2g/shell-script/output.txt passwd-up.sh root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>output.txt</span></span>
<span class="line"><span>passwd-up.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 737 bytes received 50 bytes 1574.00 bytes/sec</span></span>
<span class="line"><span>total size is 2537 speedup is 3.22</span></span></code></pre></div><p>使用下面的 <code>rsync</code> 命令通過 <code>ssh</code> 複製單個文件到遠程服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rsync -avzhe ssh /home/daygeek/2g/shell-script/output.txt root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>output.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 598 bytes received 31 bytes 419.33 bytes/sec</span></span>
<span class="line"><span>total size is 2.47K speedup is 3.92</span></span></code></pre></div><p>使用下面的 <code>rsync</code> 命令通過 <code>ssh</code> 遞歸地複製文件夾到遠程服務器。這種方式只複製文件不包括文件夾。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rsync -avzhe ssh /home/daygeek/2g/shell-script/ root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>./</span></span>
<span class="line"><span>output.txt</span></span>
<span class="line"><span>ovh.sh</span></span>
<span class="line"><span>passwd-up.sh</span></span>
<span class="line"><span>passwd-up1.sh</span></span>
<span class="line"><span>server-list.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 3.85K bytes received 281 bytes 8.26K bytes/sec</span></span>
<span class="line"><span>total size is 9.12K speedup is 2.21</span></span></code></pre></div><h3 id="方式-5-如何在-linux-上使用-rsync-命令和-shell-腳本複製文件-文件夾到多個遠程系統上" tabindex="-1">方式 5：如何在 Linux 上使用 rsync 命令和 Shell 腳本複製文件/文件夾到多個遠程系統上？ <a class="header-anchor" href="#方式-5-如何在-linux-上使用-rsync-命令和-shell-腳本複製文件-文件夾到多個遠程系統上" aria-label="Permalink to “方式 5：如何在 Linux 上使用 rsync 命令和 Shell 腳本複製文件/文件夾到多個遠程系統上？”">​</a></h3><p>如果你想複製同一個文件到多個遠程服務器上，那也需要創建一個如下面那樣的小 shell 腳本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span> rsync -avzhe ssh /home/daygeek/2g/shell-script/ root@2g.CentOS.com$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>上面腳本的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>./</span></span>
<span class="line"><span>output.txt</span></span>
<span class="line"><span>ovh.sh</span></span>
<span class="line"><span>passwd-up.sh</span></span>
<span class="line"><span>passwd-up1.sh</span></span>
<span class="line"><span>server-list.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 3.86K bytes received 281 bytes 8.28K bytes/sec</span></span>
<span class="line"><span>total size is 9.13K speedup is 2.21</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>./</span></span>
<span class="line"><span>output.txt</span></span>
<span class="line"><span>ovh.sh</span></span>
<span class="line"><span>passwd-up.sh</span></span>
<span class="line"><span>passwd-up1.sh</span></span>
<span class="line"><span>server-list.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 3.86K bytes received 281 bytes 2.76K bytes/sec</span></span>
<span class="line"><span>total size is 9.13K speedup is 2.21</span></span></code></pre></div><h3 id="方式-6-如何在-linux-上使用-scp-命令和-shell-腳本從本地系統向多個遠程系統複製文件-文件夾" tabindex="-1">方式 6：如何在 Linux 上使用 scp 命令和 Shell 腳本從本地系統向多個遠程系統複製文件/文件夾？ <a class="header-anchor" href="#方式-6-如何在-linux-上使用-scp-命令和-shell-腳本從本地系統向多個遠程系統複製文件-文件夾" aria-label="Permalink to “方式 6：如何在 Linux 上使用 scp 命令和 Shell 腳本從本地系統向多個遠程系統複製文件/文件夾？”">​</a></h3><p>在上面兩個 shell 腳本中，我們需要事先指定好文件和文件夾的路徑，這兒我做了些小修改，讓腳本可以接收文件或文件夾作為輸入參數。當你每天需要多次執行復制時，這將會非常有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>scp -r $1 root@2g.CentOS.com$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>輸入文件名並運行腳本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-copy.sh output1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output1.txt 100% 3558 3.5KB/s 00:00</span></span>
<span class="line"><span>output1.txt 100% 3558 3.5KB/s 00:00</span></span></code></pre></div><h3 id="方式-7-如何在-linux-系統上用非標準端口複製文件-文件夾到遠程系統" tabindex="-1">方式 7：如何在 Linux 系統上用非標準端口複製文件/文件夾到遠程系統？ <a class="header-anchor" href="#方式-7-如何在-linux-系統上用非標準端口複製文件-文件夾到遠程系統" aria-label="Permalink to “方式 7：如何在 Linux 系統上用非標準端口複製文件/文件夾到遠程系統？”">​</a></h3><p>如果你想使用非標準端口，使用下面的 shell 腳本複製文件或文件夾。</p><p>如果你使用了<ruby>非標準<rt>Non-Standard</rt></ruby>端口，確保像下面 <code>scp</code> 命令那樣指定好了端口號。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy-scp.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>scp -P 2222 -r $1 root@2g.CentOS.com$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>運行腳本，輸入文件名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-copy.sh ovh.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ovh.sh 100% 3558 3.5KB/s 00:00</span></span>
<span class="line"><span>ovh.sh 100% 3558 3.5KB/s 00:00</span></span></code></pre></div><p>如果你使用了<ruby>非標準<rt>Non-Standard</rt></ruby>端口，確保像下面 <code>rsync</code> 命令那樣指定好了端口號。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy-rsync.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>rsync -avzhe &#39;ssh -p 2222&#39; $1 root@2g.CentOS.com$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>運行腳本，輸入文件名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-copy-rsync.sh passwd-up.sh</span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>passwd-up.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 238 bytes received 35 bytes 26.00 bytes/sec</span></span>
<span class="line"><span>total size is 159 speedup is 0.58</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>passwd-up.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 238 bytes received 35 bytes 26.00 bytes/sec</span></span>
<span class="line"><span>total size is 159 speedup is 0.58</span></span></code></pre></div><hr>`,78)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://www.2daygeek.com/linux-scp-rsync-pscp-command-copy-files-folders-in-multiple-servers-using-shell-script/"},{default:e(()=>[...s[0]||(s[0]=[n("https://www.2daygeek.com/linux-scp-rsync-pscp-command-copy-files-folders-in-multiple-servers-using-shell-script/",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://www.2daygeek.com/author/prakash/"},{default:e(()=>[...s[2]||(s[2]=[n("Prakash Subramanian",-1)])]),_:1}),s[7]||(s[7]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 譯者：",-1)),p(a,{href:"https://github.com/LuuMing"},{default:e(()=>[...s[4]||(s[4]=[n("LuuMing",-1)])]),_:1}),s[9]||(s[9]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中國",-1)])]),_:1}),s[14]||(s[14]=n(" 榮譽推出",-1))])])}const v=l(d,[["render",r]]);export{x as __pageData,v as default};
