import{_ as l,a0 as t,w as c,s as o,ao as h,I as i,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"如何在 Linux 上复制文件/文件夹到远程系统？ | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 上复制文件/文件夹到远程系统？ | LCTT (201902) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 上复制文件/文件夹到远程系统？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 上复制文件/文件夹到远程系统？ | LCTT (201902) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201902/20190122 How To Copy A File-Folder From A Local System To Remote System In Linux","title":"如何在 Linux 上复制文件/文件夹到远程系统？","tag":"201902","desc":""},"relativePath":"201902/20190122 How To Copy A File-Folder From A Local System To Remote System In Linux.md","filePath":"[post].md"}'),d={name:"201902/20190122 How To Copy A File-Folder From A Local System To Remote System In Linux.md"};function r(g,s,u,k,b,y){const a=t("Link");return c(),o("div",null,[s[15]||(s[15]=h(`<h1 id="如何在-linux-上复制文件-文件夹到远程系统" tabindex="-1">如何在 Linux 上复制文件/文件夹到远程系统？ <a class="header-anchor" href="#如何在-linux-上复制文件-文件夹到远程系统" aria-label="Permalink to “如何在 Linux 上复制文件/文件夹到远程系统？”">​</a></h1><p>从一个服务器复制文件到另一个服务器，或者从本地到远程复制是 Linux 管理员的日常任务之一。</p><p>我觉得不会有人不同意，因为无论在哪里这都是你的日常操作之一。有很多办法都能处理这个任务，我们试着加以概括。你可以挑一个喜欢的方法。当然，看看其他命令也能在别的地方帮到你。</p><p>我已经在自己的环境下测试过所有的命令和脚本了，因此你可以直接用到日常工作当中。</p><p>通常大家都倾向 <code>scp</code>，因为它是文件复制的<ruby>原生命令<rt>native command</rt></ruby>之一。但本文所列出的其它命令也很好用，建议你尝试一下。</p><p>文件复制可以轻易地用以下四种方法。</p><ul><li><code>scp</code>：在网络上的两个主机之间复制文件，它使用 <code>ssh</code> 做文件传输，并使用相同的认证方式，具有相同的安全性。</li><li><code>rsync</code>：是一个既快速又出众的多功能文件复制工具。它能本地复制、通过远程 shell 在其它主机之间复制，或者与远程的 <code>rsync</code> <ruby>守护进程<rt>daemon</rt></ruby> 之间复制。</li><li><code>pscp</code>：是一个并行复制文件到多个主机上的程序。它提供了诸多特性，例如为 <code>scp</code> 配置免密传输，保存输出到文件，以及超时控制。</li><li><code>prsync</code>：也是一个并行复制文件到多个主机上的程序。它也提供了诸多特性，例如为 <code>ssh</code> 配置免密传输，保存输出到 文件，以及超时控制。</li></ul><h3 id="方式-1-如何在-linux-上使用-scp-命令从本地系统向远程系统复制文件-文件夹" tabindex="-1">方式 1：如何在 Linux 上使用 scp 命令从本地系统向远程系统复制文件/文件夹？ <a class="header-anchor" href="#方式-1-如何在-linux-上使用-scp-命令从本地系统向远程系统复制文件-文件夹" aria-label="Permalink to “方式 1：如何在 Linux 上使用 scp 命令从本地系统向远程系统复制文件/文件夹？”">​</a></h3><p><code>scp</code> 命令可以让我们从本地系统复制文件/文件夹到远程系统上。</p><p>我会把 <code>output.txt</code> 文件从本地系统复制到 <code>2g.CentOS.com</code> 远程系统的 <code>/opt/backup</code> 文件夹下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># scp output.txt root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt                                                                                              100% 2468     2.4KB/s   00:00</span></span></code></pre></div><p>从本地系统复制两个文件 <code>output.txt</code> 和 <code>passwd-up.sh</code> 到远程系统 <code>2g.CentOs.com</code> 的 <code>/opt/backup</code> 文件夹下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># scp output.txt passwd-up.sh root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>passwd-up.sh 100% 877 0.9KB/s 00:00</span></span></code></pre></div><p>从本地系统复制 <code>shell-script</code> 文件夹到远程系统 <code>2g.CentOs.com</code> 的 <code>/opt/back</code> 文件夹下。</p><p>这会连同<code>shell-script</code> 文件夹下所有的文件一同复制到<code>/opt/back</code> 下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># scp -r /home/daygeek/2g/shell-script/ root@:/opt/backup/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>ovh.sh      100% 76 0.1KB/s 00:00</span></span>
<span class="line"><span>passwd-up.sh 100% 877 0.9KB/s 00:00</span></span>
<span class="line"><span>passwd-up1.sh 100% 7 0.0KB/s 00:00</span></span>
<span class="line"><span>server-list.txt 100% 23 0.0KB/s 00:00</span></span></code></pre></div><h3 id="方式-2-如何在-linux-上使用-scp-命令和-shell-脚本复制文件-文件夹到多个远程系统上" tabindex="-1">方式 2：如何在 Linux 上使用 scp 命令和 Shell 脚本复制文件/文件夹到多个远程系统上？ <a class="header-anchor" href="#方式-2-如何在-linux-上使用-scp-命令和-shell-脚本复制文件-文件夹到多个远程系统上" aria-label="Permalink to “方式 2：如何在 Linux 上使用 scp 命令和 Shell 脚本复制文件/文件夹到多个远程系统上？”">​</a></h3><p>如果你想复制同一个文件到多个远程服务器上，那就需要创建一个如下面那样的小 shell 脚本。</p><p>并且，需要将服务器添加进 <code>server-list.txt</code> 文件。确保添加成功后，每个服务器应当单独一行。</p><p>最终，你想要的脚本就像下面这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  scp /home/daygeek/2g/shell-script/output.txt root@$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>完成之后，给 <code>file-copy.sh</code> 文件设置可执行权限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># chmod +x file-copy.sh</span></span></code></pre></div><p>最后运行脚本完成复制。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span></code></pre></div><p>使用下面的脚本可以复制多个文件到多个远程服务器上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  scp /home/daygeek/2g/shell-script/output.txt passwd-up.sh root@$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>下面结果显示所有的两个文件都复制到两个服务器上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-cp.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>passwd-up.sh 100% 877 0.9KB/s 00:00</span></span>
<span class="line"><span>output.txt 100% 2468 2.4KB/s 00:00</span></span>
<span class="line"><span>passwd-up.sh 100% 877 0.9KB/s 00:00</span></span></code></pre></div><p>使用下面的脚本递归地复制文件夹到多个远程服务器上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  scp -r /home/daygeek/2g/shell-script/ root@$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>上述脚本的输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-cp.sh</span></span>
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
<span class="line"><span>server-list.txt 100% 23 0.0KB/s 00:00</span></span></code></pre></div><h3 id="方式-3-如何在-linux-上使用-pscp-命令复制文件-文件夹到多个远程系统上" tabindex="-1">方式 3：如何在 Linux 上使用 pscp 命令复制文件/文件夹到多个远程系统上？ <a class="header-anchor" href="#方式-3-如何在-linux-上使用-pscp-命令复制文件-文件夹到多个远程系统上" aria-label="Permalink to “方式 3：如何在 Linux 上使用 pscp 命令复制文件/文件夹到多个远程系统上？”">​</a></h3><p><code>pscp</code> 命令可以直接让我们复制文件到多个远程服务器上。</p><p>使用下面的 <code>pscp</code> 命令复制单个文件到远程服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -H 2g.CentOS.com /home/daygeek/2g/shell-script/output.txt /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:46:11 [SUCCESS] 2g.CentOS.com</span></span></code></pre></div><p>使用下面的 <code>pscp</code> 命令复制多个文件到远程服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -H 2g.CentOS.com /home/daygeek/2g/shell-script/output.txt ovh.sh /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:47:48 [SUCCESS] 2g.CentOS.com</span></span></code></pre></div><p>使用下面的 <code>pscp</code> 命令递归地复制整个文件夹到远程服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -H 2g.CentOS.com -r /home/daygeek/2g/shell-script/ /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:48:46 [SUCCESS] 2g.CentOS.com</span></span></code></pre></div><p>使用下面的 <code>pscp</code> 命令使用下面的命令复制单个文件到多个远程服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -h server-list.txt /home/daygeek/2g/shell-script/output.txt /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:49:48 [SUCCESS] 2g.CentOS.com</span></span>
<span class="line"><span>[2] 18:49:48 [SUCCESS] 2g.Debian.com</span></span></code></pre></div><p>使用下面的 <code>pscp</code> 命令复制多个文件到多个远程服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -h server-list.txt /home/daygeek/2g/shell-script/output.txt passwd-up.sh /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:50:30 [SUCCESS] 2g.Debian.com</span></span>
<span class="line"><span>[2] 18:50:30 [SUCCESS] 2g.CentOS.com</span></span></code></pre></div><p>使用下面的命令递归地复制文件夹到多个远程服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pscp.pssh -h server-list.txt -r /home/daygeek/2g/shell-script/ /opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1] 18:51:31 [SUCCESS] 2g.Debian.com</span></span>
<span class="line"><span>[2] 18:51:31 [SUCCESS] 2g.CentOS.com</span></span></code></pre></div><h3 id="方式-4-如何在-linux-上使用-rsync-命令复制文件-文件夹到多个远程系统上" tabindex="-1">方式 4：如何在 Linux 上使用 rsync 命令复制文件/文件夹到多个远程系统上？ <a class="header-anchor" href="#方式-4-如何在-linux-上使用-rsync-命令复制文件-文件夹到多个远程系统上" aria-label="Permalink to “方式 4：如何在 Linux 上使用 rsync 命令复制文件/文件夹到多个远程系统上？”">​</a></h3><p><code>rsync</code> 是一个即快速又出众的多功能文件复制工具。它能本地复制、通过远程 shell 在其它主机之间复制，或者在远程 <code>rsync</code> <ruby>守护进程<rt>daemon</rt></ruby> 之间复制。</p><p>使用下面的 <code>rsync</code> 命令复制单个文件到远程服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rsync -avz /home/daygeek/2g/shell-script/output.txt root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>output.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 598 bytes received 31 bytes 1258.00 bytes/sec</span></span>
<span class="line"><span>total size is 2468 speedup is 3.92</span></span></code></pre></div><p>使用下面的 <code>rsync</code> 命令复制多个文件到远程服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rsync -avz /home/daygeek/2g/shell-script/output.txt passwd-up.sh root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>output.txt</span></span>
<span class="line"><span>passwd-up.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 737 bytes received 50 bytes 1574.00 bytes/sec</span></span>
<span class="line"><span>total size is 2537 speedup is 3.22</span></span></code></pre></div><p>使用下面的 <code>rsync</code> 命令通过 <code>ssh</code> 复制单个文件到远程服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rsync -avzhe ssh /home/daygeek/2g/shell-script/output.txt root@2g.CentOS.com:/opt/backup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sending incremental file list</span></span>
<span class="line"><span>output.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sent 598 bytes received 31 bytes 419.33 bytes/sec</span></span>
<span class="line"><span>total size is 2.47K speedup is 3.92</span></span></code></pre></div><p>使用下面的 <code>rsync</code> 命令通过 <code>ssh</code> 递归地复制文件夹到远程服务器。这种方式只复制文件不包括文件夹。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rsync -avzhe ssh /home/daygeek/2g/shell-script/ root@2g.CentOS.com:/opt/backup</span></span>
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
<span class="line"><span>total size is 9.12K speedup is 2.21</span></span></code></pre></div><h3 id="方式-5-如何在-linux-上使用-rsync-命令和-shell-脚本复制文件-文件夹到多个远程系统上" tabindex="-1">方式 5：如何在 Linux 上使用 rsync 命令和 Shell 脚本复制文件/文件夹到多个远程系统上？ <a class="header-anchor" href="#方式-5-如何在-linux-上使用-rsync-命令和-shell-脚本复制文件-文件夹到多个远程系统上" aria-label="Permalink to “方式 5：如何在 Linux 上使用 rsync 命令和 Shell 脚本复制文件/文件夹到多个远程系统上？”">​</a></h3><p>如果你想复制同一个文件到多个远程服务器上，那也需要创建一个如下面那样的小 shell 脚本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span> rsync -avzhe ssh /home/daygeek/2g/shell-script/ root@2g.CentOS.com$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>上面脚本的输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-copy.sh</span></span>
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
<span class="line"><span>total size is 9.13K speedup is 2.21</span></span></code></pre></div><h3 id="方式-6-如何在-linux-上使用-scp-命令和-shell-脚本从本地系统向多个远程系统复制文件-文件夹" tabindex="-1">方式 6：如何在 Linux 上使用 scp 命令和 Shell 脚本从本地系统向多个远程系统复制文件/文件夹？ <a class="header-anchor" href="#方式-6-如何在-linux-上使用-scp-命令和-shell-脚本从本地系统向多个远程系统复制文件-文件夹" aria-label="Permalink to “方式 6：如何在 Linux 上使用 scp 命令和 Shell 脚本从本地系统向多个远程系统复制文件/文件夹？”">​</a></h3><p>在上面两个 shell 脚本中，我们需要事先指定好文件和文件夹的路径，这儿我做了些小修改，让脚本可以接收文件或文件夹作为输入参数。当你每天需要多次执行复制时，这将会非常有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>scp -r $1 root@2g.CentOS.com$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>输入文件名并运行脚本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-copy.sh output1.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output1.txt 100% 3558 3.5KB/s 00:00</span></span>
<span class="line"><span>output1.txt 100% 3558 3.5KB/s 00:00</span></span></code></pre></div><h3 id="方式-7-如何在-linux-系统上用非标准端口复制文件-文件夹到远程系统" tabindex="-1">方式 7：如何在 Linux 系统上用非标准端口复制文件/文件夹到远程系统？ <a class="header-anchor" href="#方式-7-如何在-linux-系统上用非标准端口复制文件-文件夹到远程系统" aria-label="Permalink to “方式 7：如何在 Linux 系统上用非标准端口复制文件/文件夹到远程系统？”">​</a></h3><p>如果你想使用非标准端口，使用下面的 shell 脚本复制文件或文件夹。</p><p>如果你使用了<ruby>非标准<rt>Non-Standard</rt></ruby>端口，确保像下面 <code>scp</code> 命令那样指定好了端口号。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy-scp.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>scp -P 2222 -r $1 root@2g.CentOS.com$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>运行脚本，输入文件名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-copy.sh ovh.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ovh.sh 100% 3558 3.5KB/s 00:00</span></span>
<span class="line"><span>ovh.sh 100% 3558 3.5KB/s 00:00</span></span></code></pre></div><p>如果你使用了<ruby>非标准<rt>Non-Standard</rt></ruby>端口，确保像下面 <code>rsync</code> 命令那样指定好了端口号。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># file-copy-rsync.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>for server in \`more server-list.txt\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>rsync -avzhe &#39;ssh -p 2222&#39; $1 root@2g.CentOS.com$server:/opt/backup</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>运行脚本，输入文件名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ./file-copy-rsync.sh passwd-up.sh</span></span>
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
<span class="line"><span>total size is 159 speedup is 0.58</span></span></code></pre></div><hr>`,78)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://www.2daygeek.com/linux-scp-rsync-pscp-command-copy-files-folders-in-multiple-servers-using-shell-script/"},{default:e(()=>[...s[0]||(s[0]=[n("https://www.2daygeek.com/linux-scp-rsync-pscp-command-copy-files-folders-in-multiple-servers-using-shell-script/",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://www.2daygeek.com/author/prakash/"},{default:e(()=>[...s[2]||(s[2]=[n("Prakash Subramanian",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),p(a,{href:"https://github.com/LuuMing"},{default:e(()=>[...s[4]||(s[4]=[n("LuuMing",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const v=l(d,[["render",r]]);export{x as __pageData,v as default};
