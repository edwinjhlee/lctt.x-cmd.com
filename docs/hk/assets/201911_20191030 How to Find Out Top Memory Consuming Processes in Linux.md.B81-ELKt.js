import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as i,A as l,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"如何在 Linux 中找出內存消耗最大的進程 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 中找出內存消耗最大的進程 | LCTT (201911) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 中找出內存消耗最大的進程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 中找出內存消耗最大的進程 | LCTT (201911) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201911/20191030 How to Find Out Top Memory Consuming Processes in Linux","title":"如何在 Linux 中找出內存消耗最大的進程","tag":"201911","desc":""},"relativePath":"201911/20191030 How to Find Out Top Memory Consuming Processes in Linux.md","filePath":"[post].md"}'),c={name:"201911/20191030 How to Find Out Top Memory Consuming Processes in Linux.md"};function u(m,s,g,B,M,h){const p=o("Link");return r(),d("div",null,[s[30]||(s[30]=a("h1",{id:"如何在-linux-中找出內存消耗最大的進程",tabindex:"-1"},[n("如何在 Linux 中找出內存消耗最大的進程 "),a("a",{class:"header-anchor",href:"#如何在-linux-中找出內存消耗最大的進程","aria-label":"Permalink to “如何在 Linux 中找出內存消耗最大的進程”"},"​")],-1)),s[31]||(s[31]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201911/06/110149r81efjx12afjat7f.jpg",alt:""})],-1)),s[32]||(s[32]=a("p",null,"很多次，你可能遇見過系統消耗了過多的內存。如果是這種情況，那麼最好的辦法是識別出 Linux 機器上消耗過多內存的進程。我相信，你可能已經運行了下文中的命令以進行檢查。如果沒有，那你嘗試過哪些其他的命令？我希望你可以在評論中更新這篇文章，它可能會幫助其他用户。",-1)),a("p",null,[s[2]||(s[2]=n("使用 ",-1)),i(p,{href:"https://www.2daygeek.com/linux-top-command-linux-system-performance-monitoring-tool/"},{default:l(()=>[...s[0]||(s[0]=[n("top 命令",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),i(p,{href:"https://www.2daygeek.com/linux-ps-command-find-running-process-monitoring/"},{default:l(()=>[...s[1]||(s[1]=[n("ps 命令",-1)])]),_:1}),s[4]||(s[4]=n(" 可以輕鬆的識別這種情況。我過去經常同時使用這兩個命令，兩個命令得到的結果是相同的。所以我建議你從中選擇一個喜歡的使用就可以。",-1))]),s[33]||(s[33]=e(`<h3 id="_1-如何使用-ps-命令在-linux-中查找內存消耗最大的進程" tabindex="-1">1) 如何使用 ps 命令在 Linux 中查找內存消耗最大的進程 <a class="header-anchor" href="#_1-如何使用-ps-命令在-linux-中查找內存消耗最大的進程" aria-label="Permalink to “1) 如何使用 ps 命令在 Linux 中查找內存消耗最大的進程”">​</a></h3><p><code>ps</code> 命令用於報告當前進程的快照。<code>ps</code> 命令的意思是“進程狀態”。這是一個標準的 Linux 應用程序，用於查找有關在 Linux 系統上運行進程的信息。</p><p>它用於列出當前正在運行的進程及其進程 ID（PID）、進程所有者名稱、進程優先級（PR）以及正在運行的命令的絕對路徑等。</p><p>下面的 <code>ps</code> 命令格式為你提供有關內存消耗最大進程的更多信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ps aux --sort -rss | head</span></span>
<span class="line"><span></span></span>
<span class="line"><span>USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND</span></span>
<span class="line"><span>mysql     1064  3.2  5.4 886076 209988 ?       Ssl  Oct25  62:40 /usr/sbin/mysqld</span></span>
<span class="line"><span>varnish  23396  0.0  2.9 286492 115616 ?       SLl  Oct25   0:42 /usr/sbin/varnishd -P /var/run/varnish.pid -f /etc/varnish/default.vcl -a :82 -T 127.0.0.1:6082 -S /etc/varnish/secret -s malloc,256M</span></span>
<span class="line"><span>named     1105  0.0  2.7 311712 108204 ?       Ssl  Oct25   0:16 /usr/sbin/named -u named -c /etc/named.conf</span></span>
<span class="line"><span>nobody   23377  0.2  2.3 153096 89432 ?        S    Oct25   4:35 nginx: worker process</span></span>
<span class="line"><span>nobody   23376  0.1  2.1 147096 83316 ?        S    Oct25   2:18 nginx: worker process</span></span>
<span class="line"><span>root     23375  0.0  1.7 131028 66764 ?        Ss   Oct25   0:01 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.conf</span></span>
<span class="line"><span>nobody   23378  0.0  1.6 130988 64592 ?        S    Oct25   0:00 nginx: cache manager process</span></span>
<span class="line"><span>root      1135  0.0  0.9  86708 37572 ?        S    05:37   0:20 cwpsrv: worker process</span></span>
<span class="line"><span>root      1133  0.0  0.9  86708 37544 ?        S    05:37   0:05 cwpsrv: worker process</span></span></code></pre></div><p>使用以下 <code>ps</code> 命令格式可在輸出中僅展示有關內存消耗過程的特定信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ps -eo pid,ppid,%mem,%cpu,cmd --sort=-%mem | head</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  PID  PPID %MEM %CPU CMD</span></span>
<span class="line"><span> 1064     1  5.4  3.2 /usr/sbin/mysqld</span></span>
<span class="line"><span>23396 23386  2.9  0.0 /usr/sbin/varnishd -P /var/run/varnish.pid -f /etc/varnish/default.vcl -a :82 -T 127.0.0.1:6082 -S /etc/varnish/secret -s malloc,256M</span></span>
<span class="line"><span> 1105     1  2.7  0.0 /usr/sbin/named -u named -c /etc/named.conf</span></span>
<span class="line"><span>23377 23375  2.3  0.2 nginx: worker process</span></span>
<span class="line"><span>23376 23375  2.1  0.1 nginx: worker process</span></span>
<span class="line"><span> 3625   977  1.9  0.0 /usr/local/bin/php-cgi /home/daygeekc/public_html/index.php</span></span>
<span class="line"><span>23375     1  1.7  0.0 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.conf</span></span>
<span class="line"><span>23378 23375  1.6  0.0 nginx: cache manager process</span></span>
<span class="line"><span> 1135  3034  0.9  0.0 cwpsrv: worker process</span></span></code></pre></div><p>如果你只想查看命令名稱而不是命令的絕對路徑，請使用下面的 <code>ps</code> 命令格式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ps -eo pid,ppid,%mem,%cpu,comm --sort=-%mem | head</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  PID  PPID %MEM %CPU COMMAND</span></span>
<span class="line"><span> 1064     1  5.4  3.2 mysqld</span></span>
<span class="line"><span>23396 23386  2.9  0.0 cache-main</span></span>
<span class="line"><span> 1105     1  2.7  0.0 named</span></span>
<span class="line"><span>23377 23375  2.3  0.2 nginx</span></span>
<span class="line"><span>23376 23375  2.1  0.1 nginx</span></span>
<span class="line"><span>23375     1  1.7  0.0 nginx</span></span>
<span class="line"><span>23378 23375  1.6  0.0 nginx</span></span>
<span class="line"><span> 1135  3034  0.9  0.0 cwpsrv</span></span>
<span class="line"><span> 1133  3034  0.9  0.0 cwpsrv</span></span></code></pre></div><h3 id="_2-如何使用-top-命令在-linux-中查找內存消耗最大的進程" tabindex="-1">2) 如何使用 top 命令在 Linux 中查找內存消耗最大的進程 <a class="header-anchor" href="#_2-如何使用-top-命令在-linux-中查找內存消耗最大的進程" aria-label="Permalink to “2) 如何使用 top 命令在 Linux 中查找內存消耗最大的進程”">​</a></h3>`,10)),a("p",null,[s[6]||(s[6]=n("Linux 的 ",-1)),s[7]||(s[7]=a("code",null,"top",-1)),s[8]||(s[8]=n(" 命令是用來監視 Linux 系統性能的最好和最知名的命令。它在交互界面上顯示運行的系統進程的實時視圖。但是，如果要查找內存消耗最大的進程，請 ",-1)),i(p,{href:"https://linux.cn/article-11491-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("在批處理模式下使用 top 命令",-1)])]),_:1}),s[9]||(s[9]=n("。",-1))]),a("p",null,[s[11]||(s[11]=n("你應該正確地 ",-1)),i(p,{href:"https://www.2daygeek.com/understanding-linux-top-command-output-usage/"},{default:l(()=>[...s[10]||(s[10]=[n("瞭解 top 命令輸出",-1)])]),_:1}),s[12]||(s[12]=n(" 以解決系統中的性能問題。",-1))]),s[34]||(s[34]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># top -c -b -o +%MEM | head -n 20 | tail -15</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND</span></span>
<span class="line"><span> 1064 mysql     20   0  886076 209740   8388 S   0.0  5.4  62:41.20 /usr/sbin/mysqld</span></span>
<span class="line"><span>23396 varnish   20   0  286492 115616  83572 S   0.0  3.0   0:42.24 /usr/sbin/varnishd -P /var/run/varnish.pid -f /etc/varnish/default.vcl -a :82 -T 127.0.0.1:6082 -S /etc/varnish/secret -s malloc,256M</span></span>
<span class="line"><span> 1105 named     20   0  311712 108204   2424 S   0.0  2.8   0:16.41 /usr/sbin/named -u named -c /etc/named.conf</span></span>
<span class="line"><span>23377 nobody    20   0  153240  89432   2432 S   0.0  2.3   4:35.74 nginx: worker process</span></span>
<span class="line"><span>23376 nobody    20   0  147096  83316   2416 S   0.0  2.1   2:18.09 nginx: worker process</span></span>
<span class="line"><span>23375 root      20   0  131028  66764   1616 S   0.0  1.7   0:01.07 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.conf</span></span>
<span class="line"><span>23378 nobody    20   0  130988  64592    592 S   0.0  1.7   0:00.51 nginx: cache manager process</span></span>
<span class="line"><span> 1135 root      20   0   86708  37572   2252 S   0.0  1.0   0:20.18 cwpsrv: worker process</span></span>
<span class="line"><span> 1133 root      20   0   86708  37544   2212 S   0.0  1.0   0:05.94 cwpsrv: worker process</span></span>
<span class="line"><span> 3034 root      20   0   86704  36740   1452 S   0.0  0.9   0:00.09 cwpsrv: master process /usr/local/cwpsrv/bin/cwpsrv</span></span>
<span class="line"><span> 1067 nobody    20   0 1356200  31588   2352 S   0.0  0.8   0:56.06 /usr/local/apache/bin/httpd -k start</span></span>
<span class="line"><span>  977 nobody    20   0 1356088  31268   2372 S   0.0  0.8   0:30.44 /usr/local/apache/bin/httpd -k start</span></span>
<span class="line"><span>  968 nobody    20   0 1356216  30544   2348 S   0.0  0.8   0:19.95 /usr/local/apache/bin/httpd -k start</span></span></code></pre></div><p>如果你只想查看命令名稱而不是命令的絕對路徑，請使用下面的 <code>top</code> 命令格式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># top -b -o +%MEM | head -n 20 | tail -15</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND</span></span>
<span class="line"><span> 1064 mysql     20   0  886076 210340   8388 S   6.7  5.4  62:40.93 mysqld</span></span>
<span class="line"><span>23396 varnish   20   0  286492 115616  83572 S   0.0  3.0   0:42.24 cache-main</span></span>
<span class="line"><span> 1105 named     20   0  311712 108204   2424 S   0.0  2.8   0:16.41 named</span></span>
<span class="line"><span>23377 nobody    20   0  153240  89432   2432 S  13.3  2.3   4:35.74 nginx</span></span>
<span class="line"><span>23376 nobody    20   0  147096  83316   2416 S   0.0  2.1   2:18.09 nginx</span></span>
<span class="line"><span>23375 root      20   0  131028  66764   1616 S   0.0  1.7   0:01.07 nginx</span></span>
<span class="line"><span>23378 nobody    20   0  130988  64592    592 S   0.0  1.7   0:00.51 nginx</span></span>
<span class="line"><span> 1135 root      20   0   86708  37572   2252 S   0.0  1.0   0:20.18 cwpsrv</span></span>
<span class="line"><span> 1133 root      20   0   86708  37544   2212 S   0.0  1.0   0:05.94 cwpsrv</span></span>
<span class="line"><span> 3034 root      20   0   86704  36740   1452 S   0.0  0.9   0:00.09 cwpsrv</span></span>
<span class="line"><span> 1067 nobody    20   0 1356200  31588   2352 S   0.0  0.8   0:56.04 httpd</span></span>
<span class="line"><span>  977 nobody    20   0 1356088  31268   2372 S   0.0  0.8   0:30.44 httpd</span></span>
<span class="line"><span>  968 nobody    20   0 1356216  30544   2348 S   0.0  0.8   0:19.95 httpd</span></span></code></pre></div><h3 id="_3-獎勵技巧-如何使用-ps-mem-命令在-linux-中查找內存消耗最大的進程" tabindex="-1">3) 獎勵技巧：如何使用 ps_mem 命令在 Linux 中查找內存消耗最大的進程 <a class="header-anchor" href="#_3-獎勵技巧-如何使用-ps-mem-命令在-linux-中查找內存消耗最大的進程" aria-label="Permalink to “3) 獎勵技巧：如何使用 ps_mem 命令在 Linux 中查找內存消耗最大的進程”">​</a></h3>`,4)),a("p",null,[i(p,{href:"https://www.2daygeek.com/ps_mem-report-core-memory-usage-accurately-in-linux/"},{default:l(()=>[...s[13]||(s[13]=[n("ps_mem 程序",-1)])]),_:1}),s[14]||(s[14]=n(" 用於顯示每個程序（而不是每個進程）使用的核心內存。該程序允許你檢查每個程序使用了多少內存。它根據程序計算私有和共享內存的數量，並以最合適的方式返回已使用的總內存。",-1))]),s[35]||(s[35]=e(`<p>它使用以下邏輯來計算內存使用量。總內存使用量 = sum(用於程序進程的專用內存使用量) + sum(用於程序進程的共享內存使用量)。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ps_mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Private  +   Shared  =  RAM used    Program</span></span>
<span class="line"><span>128.0 KiB +  27.5 KiB = 155.5 KiB    agetty</span></span>
<span class="line"><span>228.0 KiB +  47.0 KiB = 275.0 KiB    atd</span></span>
<span class="line"><span>284.0 KiB +  53.0 KiB = 337.0 KiB    irqbalance</span></span>
<span class="line"><span>380.0 KiB +  81.5 KiB = 461.5 KiB    dovecot</span></span>
<span class="line"><span>364.0 KiB + 121.5 KiB = 485.5 KiB    log</span></span>
<span class="line"><span>520.0 KiB +  65.5 KiB = 585.5 KiB    auditd</span></span>
<span class="line"><span>556.0 KiB +  60.5 KiB = 616.5 KiB    systemd-udevd</span></span>
<span class="line"><span>732.0 KiB +  48.0 KiB = 780.0 KiB    crond</span></span>
<span class="line"><span>296.0 KiB + 524.0 KiB = 820.0 KiB    avahi-daemon (2)</span></span>
<span class="line"><span>772.0 KiB +  51.5 KiB = 823.5 KiB    systemd-logind</span></span>
<span class="line"><span>940.0 KiB + 162.5 KiB =   1.1 MiB    dbus-daemon</span></span>
<span class="line"><span>  1.1 MiB +  99.0 KiB =   1.2 MiB    pure-ftpd</span></span>
<span class="line"><span>  1.2 MiB + 100.5 KiB =   1.3 MiB    master</span></span>
<span class="line"><span>  1.3 MiB + 198.5 KiB =   1.5 MiB    pickup</span></span>
<span class="line"><span>  1.3 MiB + 198.5 KiB =   1.5 MiB    bounce</span></span>
<span class="line"><span>  1.3 MiB + 198.5 KiB =   1.5 MiB    pipe</span></span>
<span class="line"><span>  1.3 MiB + 207.5 KiB =   1.5 MiB    qmgr</span></span>
<span class="line"><span>  1.4 MiB + 198.5 KiB =   1.6 MiB    cleanup</span></span>
<span class="line"><span>  1.3 MiB + 299.5 KiB =   1.6 MiB    trivial-rewrite</span></span>
<span class="line"><span>  1.5 MiB + 145.0 KiB =   1.6 MiB    config</span></span>
<span class="line"><span>  1.4 MiB + 291.5 KiB =   1.6 MiB    tlsmgr</span></span>
<span class="line"><span>  1.4 MiB + 308.5 KiB =   1.7 MiB    local</span></span>
<span class="line"><span>  1.4 MiB + 323.0 KiB =   1.8 MiB    anvil (2)</span></span>
<span class="line"><span>  1.3 MiB + 559.0 KiB =   1.9 MiB    systemd-journald</span></span>
<span class="line"><span>  1.8 MiB + 240.5 KiB =   2.1 MiB    proxymap</span></span>
<span class="line"><span>  1.9 MiB + 322.5 KiB =   2.2 MiB    auth</span></span>
<span class="line"><span>  2.4 MiB +  88.5 KiB =   2.5 MiB    systemd</span></span>
<span class="line"><span>  2.8 MiB + 458.5 KiB =   3.2 MiB    smtpd</span></span>
<span class="line"><span>  2.9 MiB + 892.0 KiB =   3.8 MiB    bash (2)</span></span>
<span class="line"><span>  3.3 MiB + 555.5 KiB =   3.8 MiB    NetworkManager</span></span>
<span class="line"><span>  4.1 MiB + 233.5 KiB =   4.3 MiB    varnishd</span></span>
<span class="line"><span>  4.0 MiB + 662.0 KiB =   4.7 MiB    dhclient (2)</span></span>
<span class="line"><span>  4.3 MiB + 623.5 KiB =   4.9 MiB    rsyslogd</span></span>
<span class="line"><span>  3.6 MiB +   1.8 MiB =   5.5 MiB    sshd (3)</span></span>
<span class="line"><span>  5.6 MiB + 431.0 KiB =   6.0 MiB    polkitd</span></span>
<span class="line"><span> 13.0 MiB + 546.5 KiB =  13.6 MiB    tuned</span></span>
<span class="line"><span> 22.5 MiB +  76.0 KiB =  22.6 MiB    lfd - sleeping</span></span>
<span class="line"><span> 30.0 MiB +   6.2 MiB =  36.2 MiB    php-fpm (6)</span></span>
<span class="line"><span>  5.7 MiB +  33.5 MiB =  39.2 MiB    cwpsrv (3)</span></span>
<span class="line"><span> 20.1 MiB +  25.3 MiB =  45.4 MiB    httpd (5)</span></span>
<span class="line"><span>104.7 MiB + 156.0 KiB = 104.9 MiB    named</span></span>
<span class="line"><span>112.2 MiB + 479.5 KiB = 112.7 MiB    cache-main</span></span>
<span class="line"><span> 69.4 MiB +  58.6 MiB = 128.0 MiB    nginx (4)</span></span>
<span class="line"><span>203.4 MiB + 309.5 KiB = 203.7 MiB    mysqld</span></span>
<span class="line"><span>---------------------------------</span></span>
<span class="line"><span>                        775.8 MiB</span></span>
<span class="line"><span>=================================</span></span></code></pre></div><hr>`,3)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),i(p,{href:"https://www.2daygeek.com/linux-find-top-memory-consuming-processes/"},{default:l(()=>[...s[15]||(s[15]=[n("https://www.2daygeek.com/linux-find-top-memory-consuming-processes/",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),i(p,{href:"https://www.2daygeek.com/author/magesh/"},{default:l(()=>[...s[17]||(s[17]=[n("Magesh Maruthamuthu",-1)])]),_:1}),s[22]||(s[22]=n(" 選題：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[18]||(s[18]=[n("lujun9972",-1)])]),_:1}),s[23]||(s[23]=n(" 譯者：",-1)),i(p,{href:"https://github.com/lnrCoder"},{default:l(()=>[...s[19]||(s[19]=[n("lnrCoder",-1)])]),_:1}),s[24]||(s[24]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[26]||(s[26]=[n("Linux中國",-1)])]),_:1}),s[29]||(s[29]=n(" 榮譽推出",-1))])])}const f=t(c,[["render",u]]);export{k as __pageData,f as default};
