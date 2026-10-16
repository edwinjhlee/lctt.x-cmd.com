import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"如何在批處理模式下運行 top 命令 | LCTT x X-CMD","titleTemplate":false,"description":"如何在批處理模式下運行 top 命令 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在批處理模式下運行 top 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在批處理模式下運行 top 命令 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20191003 How to Run the Top Command in Batch Mode","title":"如何在批處理模式下運行 top 命令","tag":"201910","desc":""},"relativePath":"201910/20191003 How to Run the Top Command in Batch Mode.md","filePath":"[post].md"}'),c={name:"201910/20191003 How to Run the Top Command in Batch Mode.md"};function u(h,s,S,m,g,k){const p=o("Link");return r(),d("div",null,[s[25]||(s[25]=a("h1",{id:"如何在批處理模式下運行-top-命令",tabindex:"-1"},[n("如何在批處理模式下運行 top 命令 "),a("a",{class:"header-anchor",href:"#如何在批處理模式下運行-top-命令","aria-label":"Permalink to “如何在批處理模式下運行 top 命令”"},"​")],-1)),s[26]||(s[26]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201910/22/235420ylswdescv5ddffit.jpg",alt:""})],-1)),a("p",null,[e(p,{href:"https://www.2daygeek.com/linux-top-command-linux-system-performance-monitoring-tool/"},{default:l(()=>[...s[0]||(s[0]=[n("top 命令",-1)])]),_:1}),s[2]||(s[2]=n(" 是每個人都在使用的用於 ",-1)),e(p,{href:"https://www.2daygeek.com/category/system-monitoring/"},{default:l(()=>[...s[1]||(s[1]=[n("監控 Linux 系統性能",-1)])]),_:1}),s[3]||(s[3]=n(" 的最好的命令。你可能已經知道 ",-1)),s[4]||(s[4]=a("code",null,"top",-1)),s[5]||(s[5]=n(" 命令的絕大部分操作，除了很少的幾個操作，如果我沒錯的話，批處理模式就是其中之一。",-1))]),s[27]||(s[27]=i('<p>大部分的腳本編寫者和開發人員都知道這個，因為這個操作主要就是用來編寫腳本。</p><p>如果你不瞭解這個，不用擔心，我們將在這裏介紹它。</p><h3 id="什麼是-top-命令的批處理模式" tabindex="-1">什麼是 top 命令的批處理模式 <a class="header-anchor" href="#什麼是-top-命令的批處理模式" aria-label="Permalink to “什麼是 top 命令的批處理模式”">​</a></h3><p>批處理模式允許你將 <code>top</code> 命令的輸出發送至其他程序或者文件中。</p><p>在這個模式中，<code>top</code> 命令將不會接收輸入並且持續運行，直到迭代次數達到你用 <code>-n</code> 選項指定的次數為止。</p>',5)),a("p",null,[s[7]||(s[7]=n("如果你想解決 Linux 服務器上的任何性能問題，你需要正確的 ",-1)),e(p,{href:"https://www.2daygeek.com/understanding-linux-top-command-output-usage/"},{default:l(()=>[...s[6]||(s[6]=[n("理解 top 命令的輸出",-1)])]),_:1}),s[8]||(s[8]=n("。",-1))]),s[28]||(s[28]=i(`<h3 id="_1-如何在批處理模式下運行-top-命令" tabindex="-1">1) 如何在批處理模式下運行 top 命令 <a class="header-anchor" href="#_1-如何在批處理模式下運行-top-命令" aria-label="Permalink to “1) 如何在批處理模式下運行 top 命令”">​</a></h3><p>默認地，<code>top</code> 命令按照 CPU 的使用率來排序輸出結果，所以當你在批處理模式中運行以下命令時，它會執行同樣的操作並打印前 35 行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># top -bc | head -35</span></span>
<span class="line"><span></span></span>
<span class="line"><span>top - 06:41:14 up 8 days, 20:24,  1 user,  load average: 0.87, 0.77, 0.81</span></span>
<span class="line"><span>Tasks: 139 total,   1 running, 136 sleeping,   0 stopped,   2 zombie</span></span>
<span class="line"><span>%Cpu(s):  0.0 us,  3.2 sy,  0.0 ni, 96.8 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span></span>
<span class="line"><span>KiB Mem :  3880940 total,  1595932 free,   886736 used,  1398272 buff/cache</span></span>
<span class="line"><span>KiB Swap:  1048572 total,   514640 free,   533932 used.  2648472 avail Mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND</span></span>
<span class="line"><span>     1 root      20   0  191144   2800   1596 S   0.0  0.1   5:43.63 /usr/lib/systemd/systemd --switched-root --system --deserialize 22</span></span>
<span class="line"><span>     2 root      20   0       0      0      0 S   0.0  0.0   0:00.32 [kthreadd]</span></span>
<span class="line"><span>     3 root      20   0       0      0      0 S   0.0  0.0   0:28.10 [ksoftirqd/0]</span></span>
<span class="line"><span>     5 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kworker/0:0H]</span></span>
<span class="line"><span>     7 root      rt   0       0      0      0 S   0.0  0.0   0:33.96 [migration/0]</span></span>
<span class="line"><span>     8 root      20   0       0      0      0 S   0.0  0.0   0:00.00 [rcu_bh]</span></span>
<span class="line"><span>     9 root      20   0       0      0      0 S   0.0  0.0  63:05.12 [rcu_sched]</span></span>
<span class="line"><span>    10 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [lru-add-drain]</span></span>
<span class="line"><span>    11 root      rt   0       0      0      0 S   0.0  0.0   0:08.79 [watchdog/0]</span></span>
<span class="line"><span>    12 root      rt   0       0      0      0 S   0.0  0.0   0:08.82 [watchdog/1]</span></span>
<span class="line"><span>    13 root      rt   0       0      0      0 S   0.0  0.0   0:44.27 [migration/1]</span></span>
<span class="line"><span>    14 root      20   0       0      0      0 S   0.0  0.0   1:22.45 [ksoftirqd/1]</span></span>
<span class="line"><span>    16 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kworker/1:0H]</span></span>
<span class="line"><span>    18 root      20   0       0      0      0 S   0.0  0.0   0:00.01 [kdevtmpfs]</span></span>
<span class="line"><span>    19 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [netns]</span></span>
<span class="line"><span>    20 root      20   0       0      0      0 S   0.0  0.0   0:01.35 [khungtaskd]</span></span>
<span class="line"><span>    21 root       0 -20       0      0      0 S   0.0  0.0   0:00.02 [writeback]</span></span>
<span class="line"><span>    22 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kintegrityd]</span></span>
<span class="line"><span>    23 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [bioset]</span></span>
<span class="line"><span>    24 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kblockd]</span></span>
<span class="line"><span>    25 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [md]</span></span>
<span class="line"><span>    26 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [edac-poller]</span></span>
<span class="line"><span>    33 root      20   0       0      0      0 S   0.0  0.0   1:19.07 [kswapd0]</span></span>
<span class="line"><span>    34 root      25   5       0      0      0 S   0.0  0.0   0:00.00 [ksmd]</span></span>
<span class="line"><span>    35 root      39  19       0      0      0 S   0.0  0.0   0:12.80 [khugepaged]</span></span>
<span class="line"><span>    36 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [crypto]</span></span>
<span class="line"><span>    44 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kthrotld]</span></span>
<span class="line"><span>    46 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kmpath_rdacd]</span></span></code></pre></div><h3 id="_2-如何在批處理模式下運行-top-命令並按內存使用率排序結果" tabindex="-1">2) 如何在批處理模式下運行 top 命令並按內存使用率排序結果 <a class="header-anchor" href="#_2-如何在批處理模式下運行-top-命令並按內存使用率排序結果" aria-label="Permalink to “2) 如何在批處理模式下運行 top 命令並按內存使用率排序結果”">​</a></h3><p>在批處理模式中運行以下命令按內存使用率對結果進行排序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># top -bc -o +%MEM | head -n 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>top - 06:42:00 up 8 days, 20:25,  1 user,  load average: 0.66, 0.74, 0.80</span></span>
<span class="line"><span>Tasks: 146 total,   1 running, 145 sleeping,   0 stopped,   0 zombie</span></span>
<span class="line"><span>%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span></span>
<span class="line"><span>KiB Mem :  3880940 total,  1422044 free,  1059176 used,  1399720 buff/cache</span></span>
<span class="line"><span>KiB Swap:  1048572 total,   514640 free,   533932 used.  2475984 avail Mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span> PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND</span></span>
<span class="line"><span> 18105 mysql     20   0 1453900 156096   8816 S   0.0  4.0   2:12.98 /usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid</span></span>
<span class="line"><span>  1841 root      20   0  228980 107036   5360 S   0.0  2.8   0:05.56 /usr/local/cpanel/3rdparty/perl/528/bin/perl -T -w /usr/local/cpanel/3rdparty/bin/spamd --max-children=3 --max-spare=1 --allowed-ips=127.0.0.+</span></span>
<span class="line"><span>  4301 root      20   0  230208 104608   1816 S   0.0  2.7   0:03.77 spamd child</span></span>
<span class="line"><span>  8139 nobody    20   0  257000  27108   3408 S   0.0  0.7   0:00.04 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>  7961 nobody    20   0  256988  26912   3160 S   0.0  0.7   0:00.05 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>  8190 nobody    20   0  256976  26812   3140 S   0.0  0.7   0:00.05 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>  8353 nobody    20   0  256976  26812   3144 S   0.0  0.7   0:00.04 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>  8629 nobody    20   0  256856  26736   3108 S   0.0  0.7   0:00.02 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>  8636 nobody    20   0  256856  26712   3100 S   0.0  0.7   0:00.03 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>  8611 nobody    20   0  256844  25764   2228 S   0.0  0.7   0:00.01 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>  8451 nobody    20   0  256844  25760   2220 S   0.0  0.7   0:00.04 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>  8610 nobody    20   0  256844  25748   2224 S   0.0  0.7   0:00.01 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>  8632 nobody    20   0  256844  25744   2216 S   0.0  0.7   0:00.03 /usr/sbin/httpd -k start</span></span></code></pre></div><p>上面命令的詳細信息：</p><ul><li><code>-b</code>：批處理模式選項</li><li><code>-c</code>：打印運行中的進程的絕對路徑</li><li><code>-o</code>：指定進行排序的字段</li><li><code>head</code>：輸出文件的第一部分</li><li><code>-n</code>：打印前 n 行</li></ul><h3 id="_3-如何在批處理模式下運行-top-命令並按照指定的用户進程對結果進行排序" tabindex="-1">3) 如何在批處理模式下運行 top 命令並按照指定的用户進程對結果進行排序 <a class="header-anchor" href="#_3-如何在批處理模式下運行-top-命令並按照指定的用户進程對結果進行排序" aria-label="Permalink to “3) 如何在批處理模式下運行 top 命令並按照指定的用户進程對結果進行排序”">​</a></h3><p>如果你想要按照指定用户進程對結果進行排序請運行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># top -bc -u mysql | head -n 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>top - 06:44:58 up 8 days, 20:27,  1 user,  load average: 0.99, 0.87, 0.84</span></span>
<span class="line"><span>Tasks: 140 total,   1 running, 137 sleeping,   0 stopped,   2 zombie</span></span>
<span class="line"><span>%Cpu(s): 13.3 us,  3.3 sy,  0.0 ni, 83.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span></span>
<span class="line"><span>KiB Mem :  3880940 total,  1589832 free,   885648 used,  1405460 buff/cache</span></span>
<span class="line"><span>KiB Swap:  1048572 total,   514640 free,   533932 used.  2649412 avail Mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span> PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND</span></span>
<span class="line"><span> 18105 mysql     20   0 1453900 156888   8816 S   0.0  4.0   2:16.42 /usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid</span></span></code></pre></div><h3 id="_4-如何在批處理模式下運行-top-命令並按照處理時間進行排序" tabindex="-1">4) 如何在批處理模式下運行 top 命令並按照處理時間進行排序 <a class="header-anchor" href="#_4-如何在批處理模式下運行-top-命令並按照處理時間進行排序" aria-label="Permalink to “4) 如何在批處理模式下運行 top 命令並按照處理時間進行排序”">​</a></h3><p>在批處理模式中使用以下 <code>top</code> 命令按照處理時間對結果進行排序。這展示了任務從啓動以來已使用的總 CPU 時間。</p><p>但是如果你想要檢查一個進程在 Linux 上運行了多長時間請看接下來的文章：</p>`,14)),a("ul",null,[a("li",null,[e(p,{href:"https://www.2daygeek.com/how-to-check-how-long-a-process-has-been-running-in-linux/"},{default:l(()=>[...s[9]||(s[9]=[n("檢查 Linux 中進程運行時間的五種方法",-1)])]),_:1})])]),s[29]||(s[29]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># top -bc -o TIME+ | head -n 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>top - 06:45:56 up 8 days, 20:28,  1 user,  load average: 0.56, 0.77, 0.81</span></span>
<span class="line"><span>Tasks: 148 total,   1 running, 146 sleeping,   0 stopped,   1 zombie</span></span>
<span class="line"><span>%Cpu(s):  0.0 us,  3.1 sy,  0.0 ni, 96.9 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span></span>
<span class="line"><span>KiB Mem :  3880940 total,  1378664 free,  1094876 used,  1407400 buff/cache</span></span>
<span class="line"><span>KiB Swap:  1048572 total,   514640 free,   533932 used.  2440332 avail Mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span> PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND</span></span>
<span class="line"><span>     9 root      20   0       0      0      0 S   0.0  0.0  63:05.70 [rcu_sched]</span></span>
<span class="line"><span>   272 root      20   0       0      0      0 S   0.0  0.0  16:12.13 [xfsaild/vda1]</span></span>
<span class="line"><span>  3882 root      20   0  229832   6212   1220 S   0.0  0.2   9:00.84 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>     1 root      20   0  191144   2800   1596 S   0.0  0.1   5:43.75 /usr/lib/systemd/systemd --switched-root --system --deserialize 22</span></span>
<span class="line"><span>  3761 root      20   0   68784   9820   2048 S   0.0  0.3   5:09.67 tailwatchd</span></span>
<span class="line"><span>  3529 root      20   0  404380   3472   2604 S   0.0  0.1   3:24.98 /usr/sbin/rsyslogd -n</span></span>
<span class="line"><span>  3520 root      20   0  574208    572    164 S   0.0  0.0   3:07.74 /usr/bin/python2 -Es /usr/sbin/tuned -l -P</span></span>
<span class="line"><span>   444 dbus      20   0   58444   1144    612 S   0.0  0.0   2:23.90 /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation</span></span>
<span class="line"><span> 18105 mysql     20   0 1453900 157152   8816 S   0.0  4.0   2:17.29 /usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid</span></span>
<span class="line"><span>   249 root       0 -20       0      0      0 S   0.0  0.0   1:28.83 [kworker/0:1H]</span></span>
<span class="line"><span>    14 root      20   0       0      0      0 S   0.0  0.0   1:22.46 [ksoftirqd/1]</span></span>
<span class="line"><span>    33 root      20   0       0      0      0 S   0.0  0.0   1:19.07 [kswapd0]</span></span>
<span class="line"><span>   342 root      20   0   39472   2940   2752 S   0.0  0.1   1:18.17 /usr/lib/systemd/systemd-journald</span></span></code></pre></div><h3 id="_5-如何在批處理模式下運行-top-命令並將結果保存到文件中" tabindex="-1">5) 如何在批處理模式下運行 top 命令並將結果保存到文件中 <a class="header-anchor" href="#_5-如何在批處理模式下運行-top-命令並將結果保存到文件中" aria-label="Permalink to “5) 如何在批處理模式下運行 top 命令並將結果保存到文件中”">​</a></h3><p>如果出於解決問題的目的，你想要和別人分享 <code>top</code> 命令的輸出，請使用以下命令重定向輸出到文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># top -bc | head -35 &gt; top-report.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat top-report.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>top - 06:47:11 up 8 days, 20:30,  1 user,  load average: 0.67, 0.77, 0.81</span></span>
<span class="line"><span>Tasks: 133 total,   4 running, 129 sleeping,   0 stopped,   0 zombie</span></span>
<span class="line"><span>%Cpu(s): 59.4 us, 12.5 sy,  0.0 ni, 28.1 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span></span>
<span class="line"><span>KiB Mem :  3880940 total,  1596268 free,   843284 used,  1441388 buff/cache</span></span>
<span class="line"><span>KiB Swap:  1048572 total,   514640 free,   533932 used.  2659084 avail Mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span> PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND</span></span>
<span class="line"><span>  9686 daygeekc  20   0  406132  62184  43448 R  94.1  1.6   0:00.34 /opt/cpanel/ea-php56/root/usr/bin/php-cgi</span></span>
<span class="line"><span>  9689 nobody    20   0  256588  24428   1184 S   5.9  0.6   0:00.01 /usr/sbin/httpd -k start</span></span>
<span class="line"><span>     1 root      20   0  191144   2800   1596 S   0.0  0.1   5:43.79 /usr/lib/systemd/systemd --switched-root --system --deserialize 22</span></span>
<span class="line"><span>     2 root      20   0       0      0      0 S   0.0  0.0   0:00.32 [kthreadd]</span></span>
<span class="line"><span>     3 root      20   0       0      0      0 S   0.0  0.0   0:28.11 [ksoftirqd/0]</span></span>
<span class="line"><span>     5 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kworker/0:0H]</span></span>
<span class="line"><span>     7 root      rt   0       0      0      0 S   0.0  0.0   0:33.96 [migration/0]</span></span>
<span class="line"><span>     8 root      20   0       0      0      0 S   0.0  0.0   0:00.00 [rcu_bh]</span></span>
<span class="line"><span>     9 root      20   0       0      0      0 R   0.0  0.0  63:05.82 [rcu_sched]</span></span>
<span class="line"><span>    10 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [lru-add-drain]</span></span>
<span class="line"><span>    11 root      rt   0       0      0      0 S   0.0  0.0   0:08.79 [watchdog/0]</span></span>
<span class="line"><span>    12 root      rt   0       0      0      0 S   0.0  0.0   0:08.82 [watchdog/1]</span></span>
<span class="line"><span>    13 root      rt   0       0      0      0 S   0.0  0.0   0:44.28 [migration/1]</span></span>
<span class="line"><span>    14 root      20   0       0      0      0 S   0.0  0.0   1:22.46 [ksoftirqd/1]</span></span>
<span class="line"><span>    16 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kworker/1:0H]</span></span>
<span class="line"><span>    18 root      20   0       0      0      0 S   0.0  0.0   0:00.01 [kdevtmpfs]</span></span>
<span class="line"><span>    19 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [netns]</span></span>
<span class="line"><span>    20 root      20   0       0      0      0 S   0.0  0.0   0:01.35 [khungtaskd]</span></span>
<span class="line"><span>    21 root       0 -20       0      0      0 S   0.0  0.0   0:00.02 [writeback]</span></span>
<span class="line"><span>    22 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kintegrityd]</span></span>
<span class="line"><span>    23 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [bioset]</span></span>
<span class="line"><span>    24 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kblockd]</span></span>
<span class="line"><span>    25 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [md]</span></span>
<span class="line"><span>    26 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [edac-poller]</span></span>
<span class="line"><span>    33 root      20   0       0      0      0 S   0.0  0.0   1:19.07 [kswapd0]</span></span>
<span class="line"><span>    34 root      25   5       0      0      0 S   0.0  0.0   0:00.00 [ksmd]</span></span>
<span class="line"><span>    35 root      39  19       0      0      0 S   0.0  0.0   0:12.80 [khugepaged]</span></span>
<span class="line"><span>    36 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [crypto]</span></span></code></pre></div><h3 id="如何按照指定字段對結果進行排序" tabindex="-1">如何按照指定字段對結果進行排序 <a class="header-anchor" href="#如何按照指定字段對結果進行排序" aria-label="Permalink to “如何按照指定字段對結果進行排序”">​</a></h3><p>在 <code>top</code> 命令的最新版本中， 按下 <code>f</code> 鍵進入字段管理界面。</p><p>要使用新字段進行排序， 請使用 <code>up</code>/<code>down</code> 箭頭選擇正確的選項，然後再按下 <code>s</code> 鍵進行排序。最後按 <code>q</code> 鍵退出此窗口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Fields Management for window 1:Def, whose current sort field is %CPU</span></span>
<span class="line"><span>    Navigate with Up/Dn, Right selects for move then  or Left commits,</span></span>
<span class="line"><span>    &#39;d&#39; or  toggles display, &#39;s&#39; sets sort.  Use &#39;q&#39; or  to end!</span></span>
<span class="line"><span> PID     = Process Id             nsUTS   = UTS namespace Inode</span></span>
<span class="line"><span> USER    = Effective User Name    LXC     = LXC container name</span></span>
<span class="line"><span> PR      = Priority               RSan    = RES Anonymous (KiB)</span></span>
<span class="line"><span> NI      = Nice Value             RSfd    = RES File-based (KiB)</span></span>
<span class="line"><span> VIRT    = Virtual Image (KiB)    RSlk    = RES Locked (KiB)</span></span>
<span class="line"><span> RES     = Resident Size (KiB)    RSsh    = RES Shared (KiB)</span></span>
<span class="line"><span> SHR     = Shared Memory (KiB)    CGNAME  = Control Group name</span></span>
<span class="line"><span> S       = Process Status         NU      = Last Used NUMA node</span></span>
<span class="line"><span> %CPU    = CPU Usage</span></span>
<span class="line"><span> %MEM    = Memory Usage (RES)</span></span>
<span class="line"><span> TIME+   = CPU Time, hundredths</span></span>
<span class="line"><span> COMMAND = Command Name/Line</span></span>
<span class="line"><span> PPID    = Parent Process pid</span></span>
<span class="line"><span> UID     = Effective User Id</span></span>
<span class="line"><span> RUID    = Real User Id</span></span>
<span class="line"><span> RUSER   = Real User Name</span></span>
<span class="line"><span> SUID    = Saved User Id</span></span>
<span class="line"><span> SUSER   = Saved User Name</span></span>
<span class="line"><span> GID     = Group Id</span></span>
<span class="line"><span> GROUP   = Group Name</span></span>
<span class="line"><span> PGRP    = Process Group Id</span></span>
<span class="line"><span> TTY     = Controlling Tty</span></span>
<span class="line"><span> TPGID   = Tty Process Grp Id</span></span>
<span class="line"><span> SID     = Session Id</span></span>
<span class="line"><span> nTH     = Number of Threads</span></span>
<span class="line"><span> P       = Last Used Cpu (SMP)</span></span>
<span class="line"><span> TIME    = CPU Time</span></span>
<span class="line"><span> SWAP    = Swapped Size (KiB)</span></span>
<span class="line"><span> CODE    = Code Size (KiB)</span></span>
<span class="line"><span> DATA    = Data+Stack (KiB)</span></span>
<span class="line"><span> nMaj    = Major Page Faults</span></span>
<span class="line"><span> nMin    = Minor Page Faults</span></span>
<span class="line"><span> nDRT    = Dirty Pages Count</span></span>
<span class="line"><span> WCHAN   = Sleeping in Function</span></span>
<span class="line"><span> Flags   = Task Flags</span></span>
<span class="line"><span> CGROUPS = Control Groups</span></span>
<span class="line"><span> SUPGIDS = Supp Groups IDs</span></span>
<span class="line"><span> SUPGRPS = Supp Groups Names</span></span>
<span class="line"><span> TGID    = Thread Group Id</span></span>
<span class="line"><span> OOMa    = OOMEM Adjustment</span></span>
<span class="line"><span> OOMs    = OOMEM Score current</span></span>
<span class="line"><span> ENVIRON = Environment vars</span></span>
<span class="line"><span> vMj     = Major Faults delta</span></span>
<span class="line"><span> vMn     = Minor Faults delta</span></span>
<span class="line"><span> USED    = Res+Swap Size (KiB)</span></span>
<span class="line"><span> nsIPC   = IPC namespace Inode</span></span>
<span class="line"><span> nsMNT   = MNT namespace Inode</span></span>
<span class="line"><span> nsNET   = NET namespace Inode</span></span>
<span class="line"><span> nsPID   = PID namespace Inode</span></span>
<span class="line"><span> nsUSER  = USER namespace Inode</span></span></code></pre></div><p>對 <code>top</code> 命令的舊版本，請按 <code>shift+f</code> 或 <code>shift+o</code> 鍵進入字段管理界面進行排序。</p><p>要使用新字段進行排序，請選擇相應的排序字段字母， 然後按下回車鍵排序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Current Sort Field:  N  for window 1:Def</span></span>
<span class="line"><span> Select sort field via field letter, type any other key to return</span></span>
<span class="line"><span>  a: PID        = Process Id</span></span>
<span class="line"><span>  b: PPID       = Parent Process Pid</span></span>
<span class="line"><span>  c: RUSER      = Real user name</span></span>
<span class="line"><span>  d: UID        = User Id</span></span>
<span class="line"><span>  e: USER       = User Name</span></span>
<span class="line"><span>  f: GROUP      = Group Name</span></span>
<span class="line"><span>  g: TTY        = Controlling Tty</span></span>
<span class="line"><span>  h: PR         = Priority</span></span>
<span class="line"><span>  i: NI         = Nice value</span></span>
<span class="line"><span>  j: P          = Last used cpu (SMP)</span></span>
<span class="line"><span>  k: %CPU       = CPU usage</span></span>
<span class="line"><span>  l: TIME       = CPU Time</span></span>
<span class="line"><span>  m: TIME+      = CPU Time, hundredths</span></span>
<span class="line"><span>* N: %MEM       = Memory usage (RES)</span></span>
<span class="line"><span>  o: VIRT       = Virtual Image (kb)</span></span>
<span class="line"><span>  p: SWAP       = Swapped size (kb)</span></span>
<span class="line"><span>  q: RES        = Resident size (kb)</span></span>
<span class="line"><span>  r: CODE       = Code size (kb)</span></span>
<span class="line"><span>  s: DATA       = Data+Stack size (kb)</span></span>
<span class="line"><span>  t: SHR        = Shared Mem size (kb)</span></span>
<span class="line"><span>  u: nFLT       = Page Fault count</span></span>
<span class="line"><span>  v: nDRT       = Dirty Pages count</span></span>
<span class="line"><span>  w: S          = Process Status</span></span>
<span class="line"><span>  x: COMMAND    = Command name/line</span></span>
<span class="line"><span>  y: WCHAN      = Sleeping in Function</span></span>
<span class="line"><span>  z: Flags      = Task Flags</span></span>
<span class="line"><span> Note1:</span></span>
<span class="line"><span>   If a selected sort field can&#39;t be</span></span>
<span class="line"><span>   shown due to screen width or your</span></span>
<span class="line"><span>   field order, the &#39;&lt;&#39; and &#39;&gt;&#39; keys</span></span>
<span class="line"><span>   will be unavailable until a field</span></span>
<span class="line"><span>   within viewable range is chosen.</span></span>
<span class="line"><span> Note2:</span></span>
<span class="line"><span>   Field sorting uses internal values,</span></span>
<span class="line"><span>   not those in column display.  Thus,</span></span>
<span class="line"><span>   the TTY &amp; WCHAN fields will violate</span></span>
<span class="line"><span>   strict ASCII collating sequence.</span></span>
<span class="line"><span>   (shame on you if WCHAN is chosen)</span></span></code></pre></div><hr>`,12)),a("p",null,[s[11]||(s[11]=n("via: ",-1)),e(p,{href:"https://www.2daygeek.com/linux-run-execute-top-command-in-batch-mode/"},{default:l(()=>[...s[10]||(s[10]=[n("https://www.2daygeek.com/linux-run-execute-top-command-in-batch-mode/",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/magesh/"},{default:l(()=>[...s[12]||(s[12]=[n("Magesh Maruthamuthu",-1)])]),_:1}),s[17]||(s[17]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[13]||(s[13]=[n("lujun9972",-1)])]),_:1}),s[18]||(s[18]=n(" 譯者：",-1)),e(p,{href:"https://github.com/way-ww"},{default:l(()=>[...s[14]||(s[14]=[n("way-ww",-1)])]),_:1}),s[19]||(s[19]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[15]||(s[15]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[20]||(s[20]=[n("LCTT",-1)])]),_:1}),s[23]||(s[23]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[21]||(s[21]=[n("Linux中國",-1)])]),_:1}),s[24]||(s[24]=n(" 榮譽推出",-1))])])}const T=t(c,[["render",u]]);export{y as __pageData,T as default};
