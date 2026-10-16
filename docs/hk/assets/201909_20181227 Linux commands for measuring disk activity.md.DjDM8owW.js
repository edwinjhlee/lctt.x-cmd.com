import{_ as t,a0 as o,w as d,s as r,ao as l,I as n,x as a,a1 as i,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"用於測量磁盤活動的 Linux 命令 | LCTT x X-CMD","titleTemplate":false,"description":"用於測量磁盤活動的 Linux 命令 | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用於測量磁盤活動的 Linux 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用於測量磁盤活動的 Linux 命令 | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20181227 Linux commands for measuring disk activity","title":"用於測量磁盤活動的 Linux 命令","tag":"201909","desc":""},"relativePath":"201909/20181227 Linux commands for measuring disk activity.md","filePath":"[post].md"}'),c={name:"201909/20181227 Linux commands for measuring disk activity.md"};function u(k,s,g,h,b,m){const p=o("Link");return d(),r("div",null,[s[29]||(s[29]=l(`<h1 id="用於測量磁盤活動的-linux-命令" tabindex="-1">用於測量磁盤活動的 Linux 命令 <a class="header-anchor" href="#用於測量磁盤活動的-linux-命令" aria-label="Permalink to “用於測量磁盤活動的 Linux 命令”">​</a></h1><blockquote><p>Linux 發行版提供了幾個度量磁盤活動的有用命令。讓我們瞭解一下其中的幾個。</p></blockquote><p><img src="https://images.idgesg.net/images/article/2018/12/tape-measure-100782593-large.jpg" alt=""></p><p>Linux 系統提供了一套方便的命令，幫助你查看磁盤有多忙，而不僅僅是磁盤有多滿。在本文中，我們將研究五個非常有用的命令，用於查看磁盤活動。其中兩個命令（<code>iostat</code> 和 <code>ioping</code>）可能必須添加到你的系統中，這兩個命令一樣要求你使用 sudo 特權，所有這五個命令都提供了查看磁盤活動的有用方法。</p><p>這些命令中最簡單、最直觀的一個可能是 <code>dstat</code> 了。</p><h3 id="dtstat" tabindex="-1">dtstat <a class="header-anchor" href="#dtstat" aria-label="Permalink to “dtstat”">​</a></h3><p>儘管 <code>dstat</code> 命令以字母 “d” 開頭，但它提供的統計信息遠遠不止磁盤活動。如果你只想查看磁盤活動，可以使用 <code>-d</code> 選項。如下所示，你將得到一個磁盤讀/寫測量值的連續列表，直到使用 <code>CTRL-c</code> 停止顯示為止。注意，在第一個報告信息之後，顯示中的每個後續行將在接下來的時間間隔內報告磁盤活動，缺省值僅為一秒。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dstat -d</span></span>
<span class="line"><span>-dsk/total-</span></span>
<span class="line"><span> read  writ</span></span>
<span class="line"><span> 949B   73k</span></span>
<span class="line"><span>  65k     0    &lt;== first second</span></span>
<span class="line"><span>   0    24k    &lt;== second second</span></span>
<span class="line"><span>   0    16k</span></span>
<span class="line"><span>   0	0 ^C</span></span></code></pre></div><p>在 <code>-d</code> 選項後面包含一個數字將把間隔設置為該秒數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dstat -d 10</span></span>
<span class="line"><span>-dsk/total-</span></span>
<span class="line"><span> read  writ</span></span>
<span class="line"><span> 949B   73k</span></span>
<span class="line"><span>  65k   81M    &lt;== first five seconds</span></span>
<span class="line"><span>   0    21k    &lt;== second five second</span></span>
<span class="line"><span>   0  9011B ^C</span></span></code></pre></div><p>請注意，報告的數據可能以許多不同的單位顯示——例如，M（Mb）、K（Kb）和 B（字節）。</p><p>如果沒有選項，<code>dstat</code> 命令還將顯示許多其他信息——指示 CPU 如何使用時間、顯示網絡和分頁活動、報告中斷和上下文切換。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dstat</span></span>
<span class="line"><span>You did not select any stats, using -cdngy by default.</span></span>
<span class="line"><span>--total-cpu-usage-- -dsk/total- -net/total- ---paging-- ---system--</span></span>
<span class="line"><span>usr sys idl wai stl| read  writ| recv  send|  in   out | int   csw</span></span>
<span class="line"><span>  0   0 100   0   0| 949B   73k|   0     0 |   0     3B|  38    65</span></span>
<span class="line"><span>  0   0 100   0   0|   0     0 | 218B  932B|   0     0 |  53    68</span></span>
<span class="line"><span>  0   1  99   0   0|   0    16k|  64B  468B|   0     0 |  64    81 ^C</span></span></code></pre></div>`,13)),n("p",null,[s[1]||(s[1]=n("code",null,"dstat",-1)),s[2]||(s[2]=a(" 命令提供了關於整個 Linux 系統性能的有價值的見解，幾乎可以用它靈活而功能強大的命令來代替 ",-1)),s[3]||(s[3]=n("code",null,"vmstat",-1)),s[4]||(s[4]=a("、",-1)),s[5]||(s[5]=n("code",null,"netstat",-1)),s[6]||(s[6]=a("、",-1)),s[7]||(s[7]=n("code",null,"iostat",-1)),s[8]||(s[8]=a(" 和 ",-1)),s[9]||(s[9]=n("code",null,"ifstat",-1)),s[10]||(s[10]=a(" 等較舊的工具集合，該命令結合了這些舊工具的功能。要深入瞭解 ",-1)),s[11]||(s[11]=n("code",null,"dstat",-1)),s[12]||(s[12]=a(" 命令可以提供的其它信息，請參閲這篇關於 ",-1)),i(p,{href:"https://www.networkworld.com/article/3291616/linux/examining-linux-system-performance-with-dstat.html"},{default:e(()=>[...s[0]||(s[0]=[a("dstat",-1)])]),_:1}),s[13]||(s[13]=a(" 命令的文章。",-1))]),s[30]||(s[30]=l(`<h3 id="iostat" tabindex="-1">iostat <a class="header-anchor" href="#iostat" aria-label="Permalink to “iostat”">​</a></h3><p><code>iostat</code> 命令通過觀察設備活動的時間與其平均傳輸速率之間的關係，幫助監視系統輸入/輸出設備的加載情況。它有時用於評估磁盤之間的活動平衡。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ iostat</span></span>
<span class="line"><span>Linux 4.18.0-041800-generic (butterfly)         12/26/2018      _x86_64_       (2 CPU)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>avg-cpu:  %user   %nice %system %iowait  %steal   %idle</span></span>
<span class="line"><span>           0.07    0.01    0.03    0.05    0.00   99.85</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>loop0             0.00         0.00         0.00       1048          0</span></span>
<span class="line"><span>loop1             0.00         0.00         0.00        365          0</span></span>
<span class="line"><span>loop2             0.00         0.00         0.00       1056          0</span></span>
<span class="line"><span>loop3             0.00         0.01         0.00      16169          0</span></span>
<span class="line"><span>loop4             0.00         0.00         0.00        413          0</span></span>
<span class="line"><span>loop5             0.00         0.00         0.00       1184          0</span></span>
<span class="line"><span>loop6             0.00         0.00         0.00       1062          0</span></span>
<span class="line"><span>loop7             0.00         0.00         0.00       5261          0</span></span>
<span class="line"><span>sda               1.06         0.89        72.66    2837453  232735080</span></span>
<span class="line"><span>sdb               0.00         0.02         0.00      48669         40</span></span>
<span class="line"><span>loop8             0.00         0.00         0.00       1053          0</span></span>
<span class="line"><span>loop9             0.01         0.01         0.00      18949          0</span></span>
<span class="line"><span>loop10            0.00         0.00         0.00         56          0</span></span>
<span class="line"><span>loop11            0.00         0.00         0.00       7090          0</span></span>
<span class="line"><span>loop12            0.00         0.00         0.00       1160          0</span></span>
<span class="line"><span>loop13            0.00         0.00         0.00        108          0</span></span>
<span class="line"><span>loop14            0.00         0.00         0.00       3572          0</span></span>
<span class="line"><span>loop15            0.01         0.01         0.00      20026          0</span></span>
<span class="line"><span>loop16            0.00         0.00         0.00         24          0</span></span></code></pre></div><p>當然，當你只想關注磁盤時，Linux 迴環設備上提供的所有統計信息都會使結果顯得雜亂無章。不過，該命令也確實提供了 <code>-p</code> 選項，該選項使你可以僅查看磁盤——如以下命令所示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ iostat -p sda</span></span>
<span class="line"><span>Linux 4.18.0-041800-generic (butterfly)         12/26/2018      _x86_64_        (2 CPU)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>avg-cpu:  %user   %nice %system %iowait  %steal   %idle</span></span>
<span class="line"><span>           0.07    0.01    0.03    0.05    0.00   99.85</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>sda               1.06         0.89        72.54    2843737  232815784</span></span>
<span class="line"><span>sda1              1.04         0.88        72.54    2821733  232815784</span></span></code></pre></div><p>請注意 <code>tps</code> 是指每秒的傳輸量。</p><p>你還可以讓 <code>iostat</code> 提供重複的報告。在下面的示例中，我們使用 <code>-d</code> 選項每五秒鐘進行一次測量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ iostat -p sda -d 5</span></span>
<span class="line"><span>Linux 4.18.0-041800-generic (butterfly)         12/26/2018      _x86_64_        (2 CPU)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>sda               1.06         0.89        72.51    2843749  232834048</span></span>
<span class="line"><span>sda1              1.04         0.88        72.51    2821745  232834048</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>sda               0.80         0.00        11.20          0         56</span></span>
<span class="line"><span>sda1              0.80         0.00        11.20          0         56</span></span></code></pre></div><p>如果你希望省略第一個（自啓動以來的統計信息）報告，請在命令中添加 <code>-y</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ iostat -p sda -d 5 -y</span></span>
<span class="line"><span>Linux 4.18.0-041800-generic (butterfly)         12/26/2018      _x86_64_        (2 CPU)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>sda               0.80         0.00        11.20          0         56</span></span>
<span class="line"><span>sda1              0.80         0.00        11.20          0         56</span></span></code></pre></div><p>接下來，我們看第二個磁盤驅動器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ iostat -p sdb</span></span>
<span class="line"><span>Linux 4.18.0-041800-generic (butterfly)         12/26/2018      _x86_64_        (2 CPU)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>avg-cpu:  %user   %nice %system %iowait  %steal   %idle</span></span>
<span class="line"><span>           0.07    0.01    0.03    0.05    0.00   99.85</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>sdb               0.00         0.02         0.00      48669         40</span></span>
<span class="line"><span>sdb2              0.00         0.00         0.00       4861         40</span></span>
<span class="line"><span>sdb1              0.00         0.01         0.00      35344          0</span></span></code></pre></div><h3 id="iotop" tabindex="-1">iotop <a class="header-anchor" href="#iotop" aria-label="Permalink to “iotop”">​</a></h3><p><code>iotop</code> 命令是類似 <code>top</code> 的實用程序，用於查看磁盤 I/O。它收集 Linux 內核提供的 I/O 使用信息，以便你瞭解哪些進程在磁盤 I/O 方面的要求最高。在下面的示例中，循環時間被設置為 5 秒。顯示將自動更新，覆蓋前面的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo iotop -d 5</span></span>
<span class="line"><span>Total DISK READ:         0.00 B/s | Total DISK WRITE:      1585.31 B/s</span></span>
<span class="line"><span>Current DISK READ:       0.00 B/s | Current DISK WRITE:      12.39 K/s</span></span>
<span class="line"><span>  TID  PRIO  USER     DISK READ  DISK WRITE  SWAPIN     IO&gt;    COMMAND</span></span>
<span class="line"><span>32492 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.12 % [kworker/u8:1-ev~_power_efficient]</span></span>
<span class="line"><span>  208 be/3 root        0.00 B/s 1585.31 B/s  0.00 %  0.11 % [jbd2/sda1-8]</span></span>
<span class="line"><span>    1 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % init splash</span></span>
<span class="line"><span>    2 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [kthreadd]</span></span>
<span class="line"><span>    3 be/0 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [rcu_gp]</span></span>
<span class="line"><span>    4 be/0 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [rcu_par_gp]</span></span>
<span class="line"><span>    8 be/0 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [mm_percpu_wq]</span></span></code></pre></div><h3 id="ioping" tabindex="-1">ioping <a class="header-anchor" href="#ioping" aria-label="Permalink to “ioping”">​</a></h3><p><code>ioping</code> 命令是一種完全不同的工具，但是它可以報告磁盤延遲——也就是磁盤響應請求需要多長時間，而這有助於診斷磁盤問題。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ioping /dev/sda1</span></span>
<span class="line"><span>4 KiB &lt;&lt;&lt; /dev/sda1 (block device 111.8 GiB): request=1 time=960.2 us (warmup)</span></span>
<span class="line"><span>4 KiB &lt;&lt;&lt; /dev/sda1 (block device 111.8 GiB): request=2 time=841.5 us</span></span>
<span class="line"><span>4 KiB &lt;&lt;&lt; /dev/sda1 (block device 111.8 GiB): request=3 time=831.0 us</span></span>
<span class="line"><span>4 KiB &lt;&lt;&lt; /dev/sda1 (block device 111.8 GiB): request=4 time=1.17 ms</span></span>
<span class="line"><span>^C</span></span>
<span class="line"><span>--- /dev/sda1 (block device 111.8 GiB) ioping statistics ---</span></span>
<span class="line"><span>3 requests completed in 2.84 ms, 12 KiB read, 1.05 k iops, 4.12 MiB/s</span></span>
<span class="line"><span>generated 4 requests in 3.37 s, 16 KiB, 1 iops, 4.75 KiB/s</span></span>
<span class="line"><span>min/avg/max/mdev = 831.0 us / 947.9 us / 1.17 ms / 158.0 us</span></span></code></pre></div><h3 id="atop" tabindex="-1">atop <a class="header-anchor" href="#atop" aria-label="Permalink to “atop”">​</a></h3><p><code>atop</code> 命令，像 <code>top</code> 一樣提供了大量有關係統性能的信息，包括有關磁盤活動的一些統計信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ATOP - butterfly      2018/12/26  17:24:19      37d3h13m------ 10ed</span></span>
<span class="line"><span>PRC | sys    0.03s | user   0.01s | #proc    179 | #zombie    0 | #exit      6 |</span></span>
<span class="line"><span>CPU | sys       1% | user      0% | irq       0% | idle    199% | wait      0% |</span></span>
<span class="line"><span>cpu | sys       1% | user      0% | irq       0% | idle     99% | cpu000 w  0% |</span></span>
<span class="line"><span>CPL | avg1    0.00 | avg5    0.00 | avg15   0.00 | csw      677 | intr     470 |</span></span>
<span class="line"><span>MEM | tot     5.8G | free  223.4M | cache   4.6G | buff  253.2M | slab  394.4M |</span></span>
<span class="line"><span>SWP | tot     2.0G | free    2.0G |              | vmcom   1.9G | vmlim   4.9G |</span></span>
<span class="line"><span>DSK |          sda | busy      0% | read       0 | write      7 | avio 1.14 ms |</span></span>
<span class="line"><span>NET | transport    | tcpi 4 | tcpo  stall      8 | udpi 1 | udpo 0swout   2255 |</span></span>
<span class="line"><span>NET | network      | ipi       10 | ipo 7 | ipfrw      0 | deliv      60.67 ms |</span></span>
<span class="line"><span>NET | enp0s25   0% | pcki      10 | pcko 8 | si    1 Kbps | so    3 Kbp0.73 ms |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  PID SYSCPU  USRCPU  VGROW   RGROW  ST EXC   THR  S CPUNR   CPU  CMD 1/1673e4 |</span></span>
<span class="line"><span> 3357  0.01s   0.00s   672K    824K  --   -     1  R     0    0%  atop</span></span>
<span class="line"><span> 3359  0.01s   0.00s     0K      0K  NE   0     0  E     -    0%  &lt;ps&gt;</span></span>
<span class="line"><span> 3361  0.00s   0.01s     0K      0K  NE   0     0  E     -    0%  &lt;ps&gt;</span></span>
<span class="line"><span> 3363  0.01s   0.00s     0K      0K  NE   0     0  E     -    0%  &lt;ps&gt;</span></span>
<span class="line"><span>31357  0.00s   0.00s     0K      0K  --   -     1  S     1    0%  bash</span></span>
<span class="line"><span> 3364  0.00s   0.00s  8032K    756K  N-   -     1  S     1    0%  sleep</span></span>
<span class="line"><span> 2931  0.00s   0.00s     0K      0K  --   -     1  I     1    0%  kworker/u8:2-e</span></span>
<span class="line"><span> 3356  0.00s   0.00s     0K      0K  -E   0     0  E     -    0%  &lt;sleep&gt;</span></span>
<span class="line"><span> 3360  0.00s   0.00s     0K      0K  NE   0     0  E     -    0%  &lt;sleep&gt;</span></span>
<span class="line"><span> 3362  0.00s   0.00s     0K      0K  NE   0     0  E     -    0%  &lt;sleep&gt;</span></span></code></pre></div><p>如果你<em>只</em>想查看磁盤統計信息，則可以使用以下命令輕鬆進行管理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ atop | grep DSK</span></span>
<span class="line"><span>DSK |          sda | busy      0% | read  122901 | write 3318e3 | avio 0.67 ms |</span></span>
<span class="line"><span>DSK |          sdb | busy      0% | read    1168 | write    103 | avio 0.73 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     92 | avio 2.39 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     94 | avio 2.47 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     99 | avio 2.26 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     94 | avio 2.43 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     94 | avio 2.43 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     92 | avio 2.43 ms |</span></span>
<span class="line"><span>^C</span></span></code></pre></div><h3 id="瞭解磁盤-i-o" tabindex="-1">瞭解磁盤 I/O <a class="header-anchor" href="#瞭解磁盤-i-o" aria-label="Permalink to “瞭解磁盤 I/O”">​</a></h3><p>Linux 提供了足夠的命令，可以讓你很好地瞭解磁盤的工作強度，並幫助你關注潛在的問題或減緩。希望這些命令中的一個可以告訴你何時需要質疑磁盤性能。偶爾使用這些命令將有助於確保當你需要檢查磁盤，特別是忙碌或緩慢的磁盤時可以顯而易見地發現它們。</p><hr>`,26)),n("p",null,[s[15]||(s[15]=a("via: ",-1)),i(p,{href:"https://www.networkworld.com/article/3330497/linux/linux-commands-for-measuring-disk-activity.html"},{default:e(()=>[...s[14]||(s[14]=[a("https://www.networkworld.com/article/3330497/linux/linux-commands-for-measuring-disk-activity.html",-1)])]),_:1})]),n("p",null,[s[20]||(s[20]=a("作者：",-1)),i(p,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[16]||(s[16]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[21]||(s[21]=a(" 選題：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[17]||(s[17]=[a("lujun9972",-1)])]),_:1}),s[22]||(s[22]=a(" 譯者：",-1)),i(p,{href:"https://github.com/laingke"},{default:e(()=>[...s[18]||(s[18]=[a("laingke",-1)])]),_:1}),s[23]||(s[23]=a(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[19]||(s[19]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[26]||(s[26]=a("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[24]||(s[24]=[a("LCTT",-1)])]),_:1}),s[27]||(s[27]=a(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[25]||(s[25]=[a("Linux中國",-1)])]),_:1}),s[28]||(s[28]=a(" 榮譽推出",-1))])])}const x=t(c,[["render",u]]);export{y as __pageData,x as default};
