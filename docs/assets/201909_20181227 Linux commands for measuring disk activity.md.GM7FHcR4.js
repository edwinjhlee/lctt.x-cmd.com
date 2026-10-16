import{_ as t,a0 as o,w as d,s as r,ao as l,I as n,x as a,a1 as i,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"用于测量磁盘活动的 Linux 命令 | LCTT x X-CMD","titleTemplate":false,"description":"用于测量磁盘活动的 Linux 命令 | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用于测量磁盘活动的 Linux 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用于测量磁盘活动的 Linux 命令 | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20181227 Linux commands for measuring disk activity","title":"用于测量磁盘活动的 Linux 命令","tag":"201909","desc":""},"relativePath":"201909/20181227 Linux commands for measuring disk activity.md","filePath":"[post].md"}'),c={name:"201909/20181227 Linux commands for measuring disk activity.md"};function u(k,s,g,h,b,m){const p=o("Link");return d(),r("div",null,[s[29]||(s[29]=l(`<h1 id="用于测量磁盘活动的-linux-命令" tabindex="-1">用于测量磁盘活动的 Linux 命令 <a class="header-anchor" href="#用于测量磁盘活动的-linux-命令" aria-label="Permalink to “用于测量磁盘活动的 Linux 命令”">​</a></h1><blockquote><p>Linux 发行版提供了几个度量磁盘活动的有用命令。让我们了解一下其中的几个。</p></blockquote><p><img src="https://images.idgesg.net/images/article/2018/12/tape-measure-100782593-large.jpg" alt=""></p><p>Linux 系统提供了一套方便的命令，帮助你查看磁盘有多忙，而不仅仅是磁盘有多满。在本文中，我们将研究五个非常有用的命令，用于查看磁盘活动。其中两个命令（<code>iostat</code> 和 <code>ioping</code>）可能必须添加到你的系统中，这两个命令一样要求你使用 sudo 特权，所有这五个命令都提供了查看磁盘活动的有用方法。</p><p>这些命令中最简单、最直观的一个可能是 <code>dstat</code> 了。</p><h3 id="dtstat" tabindex="-1">dtstat <a class="header-anchor" href="#dtstat" aria-label="Permalink to “dtstat”">​</a></h3><p>尽管 <code>dstat</code> 命令以字母 “d” 开头，但它提供的统计信息远远不止磁盘活动。如果你只想查看磁盘活动，可以使用 <code>-d</code> 选项。如下所示，你将得到一个磁盘读/写测量值的连续列表，直到使用 <code>CTRL-c</code> 停止显示为止。注意，在第一个报告信息之后，显示中的每个后续行将在接下来的时间间隔内报告磁盘活动，缺省值仅为一秒。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dstat -d</span></span>
<span class="line"><span>-dsk/total-</span></span>
<span class="line"><span> read  writ</span></span>
<span class="line"><span> 949B   73k</span></span>
<span class="line"><span>  65k     0    &lt;== first second</span></span>
<span class="line"><span>   0    24k    &lt;== second second</span></span>
<span class="line"><span>   0    16k</span></span>
<span class="line"><span>   0	0 ^C</span></span></code></pre></div><p>在 <code>-d</code> 选项后面包含一个数字将把间隔设置为该秒数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dstat -d 10</span></span>
<span class="line"><span>-dsk/total-</span></span>
<span class="line"><span> read  writ</span></span>
<span class="line"><span> 949B   73k</span></span>
<span class="line"><span>  65k   81M    &lt;== first five seconds</span></span>
<span class="line"><span>   0    21k    &lt;== second five second</span></span>
<span class="line"><span>   0  9011B ^C</span></span></code></pre></div><p>请注意，报告的数据可能以许多不同的单位显示——例如，M（Mb）、K（Kb）和 B（字节）。</p><p>如果没有选项，<code>dstat</code> 命令还将显示许多其他信息——指示 CPU 如何使用时间、显示网络和分页活动、报告中断和上下文切换。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dstat</span></span>
<span class="line"><span>You did not select any stats, using -cdngy by default.</span></span>
<span class="line"><span>--total-cpu-usage-- -dsk/total- -net/total- ---paging-- ---system--</span></span>
<span class="line"><span>usr sys idl wai stl| read  writ| recv  send|  in   out | int   csw</span></span>
<span class="line"><span>  0   0 100   0   0| 949B   73k|   0     0 |   0     3B|  38    65</span></span>
<span class="line"><span>  0   0 100   0   0|   0     0 | 218B  932B|   0     0 |  53    68</span></span>
<span class="line"><span>  0   1  99   0   0|   0    16k|  64B  468B|   0     0 |  64    81 ^C</span></span></code></pre></div>`,13)),n("p",null,[s[1]||(s[1]=n("code",null,"dstat",-1)),s[2]||(s[2]=a(" 命令提供了关于整个 Linux 系统性能的有价值的见解，几乎可以用它灵活而功能强大的命令来代替 ",-1)),s[3]||(s[3]=n("code",null,"vmstat",-1)),s[4]||(s[4]=a("、",-1)),s[5]||(s[5]=n("code",null,"netstat",-1)),s[6]||(s[6]=a("、",-1)),s[7]||(s[7]=n("code",null,"iostat",-1)),s[8]||(s[8]=a(" 和 ",-1)),s[9]||(s[9]=n("code",null,"ifstat",-1)),s[10]||(s[10]=a(" 等较旧的工具集合，该命令结合了这些旧工具的功能。要深入了解 ",-1)),s[11]||(s[11]=n("code",null,"dstat",-1)),s[12]||(s[12]=a(" 命令可以提供的其它信息，请参阅这篇关于 ",-1)),i(p,{href:"https://www.networkworld.com/article/3291616/linux/examining-linux-system-performance-with-dstat.html"},{default:e(()=>[...s[0]||(s[0]=[a("dstat",-1)])]),_:1}),s[13]||(s[13]=a(" 命令的文章。",-1))]),s[30]||(s[30]=l(`<h3 id="iostat" tabindex="-1">iostat <a class="header-anchor" href="#iostat" aria-label="Permalink to “iostat”">​</a></h3><p><code>iostat</code> 命令通过观察设备活动的时间与其平均传输速率之间的关系，帮助监视系统输入/输出设备的加载情况。它有时用于评估磁盘之间的活动平衡。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ iostat</span></span>
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
<span class="line"><span>loop16            0.00         0.00         0.00         24          0</span></span></code></pre></div><p>当然，当你只想关注磁盘时，Linux 回环设备上提供的所有统计信息都会使结果显得杂乱无章。不过，该命令也确实提供了 <code>-p</code> 选项，该选项使你可以仅查看磁盘——如以下命令所示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ iostat -p sda</span></span>
<span class="line"><span>Linux 4.18.0-041800-generic (butterfly)         12/26/2018      _x86_64_        (2 CPU)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>avg-cpu:  %user   %nice %system %iowait  %steal   %idle</span></span>
<span class="line"><span>           0.07    0.01    0.03    0.05    0.00   99.85</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>sda               1.06         0.89        72.54    2843737  232815784</span></span>
<span class="line"><span>sda1              1.04         0.88        72.54    2821733  232815784</span></span></code></pre></div><p>请注意 <code>tps</code> 是指每秒的传输量。</p><p>你还可以让 <code>iostat</code> 提供重复的报告。在下面的示例中，我们使用 <code>-d</code> 选项每五秒钟进行一次测量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ iostat -p sda -d 5</span></span>
<span class="line"><span>Linux 4.18.0-041800-generic (butterfly)         12/26/2018      _x86_64_        (2 CPU)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>sda               1.06         0.89        72.51    2843749  232834048</span></span>
<span class="line"><span>sda1              1.04         0.88        72.51    2821745  232834048</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>sda               0.80         0.00        11.20          0         56</span></span>
<span class="line"><span>sda1              0.80         0.00        11.20          0         56</span></span></code></pre></div><p>如果你希望省略第一个（自启动以来的统计信息）报告，请在命令中添加 <code>-y</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ iostat -p sda -d 5 -y</span></span>
<span class="line"><span>Linux 4.18.0-041800-generic (butterfly)         12/26/2018      _x86_64_        (2 CPU)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>sda               0.80         0.00        11.20          0         56</span></span>
<span class="line"><span>sda1              0.80         0.00        11.20          0         56</span></span></code></pre></div><p>接下来，我们看第二个磁盘驱动器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ iostat -p sdb</span></span>
<span class="line"><span>Linux 4.18.0-041800-generic (butterfly)         12/26/2018      _x86_64_        (2 CPU)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>avg-cpu:  %user   %nice %system %iowait  %steal   %idle</span></span>
<span class="line"><span>           0.07    0.01    0.03    0.05    0.00   99.85</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span></span>
<span class="line"><span>sdb               0.00         0.02         0.00      48669         40</span></span>
<span class="line"><span>sdb2              0.00         0.00         0.00       4861         40</span></span>
<span class="line"><span>sdb1              0.00         0.01         0.00      35344          0</span></span></code></pre></div><h3 id="iotop" tabindex="-1">iotop <a class="header-anchor" href="#iotop" aria-label="Permalink to “iotop”">​</a></h3><p><code>iotop</code> 命令是类似 <code>top</code> 的实用程序，用于查看磁盘 I/O。它收集 Linux 内核提供的 I/O 使用信息，以便你了解哪些进程在磁盘 I/O 方面的要求最高。在下面的示例中，循环时间被设置为 5 秒。显示将自动更新，覆盖前面的输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo iotop -d 5</span></span>
<span class="line"><span>Total DISK READ:         0.00 B/s | Total DISK WRITE:      1585.31 B/s</span></span>
<span class="line"><span>Current DISK READ:       0.00 B/s | Current DISK WRITE:      12.39 K/s</span></span>
<span class="line"><span>  TID  PRIO  USER     DISK READ  DISK WRITE  SWAPIN     IO&gt;    COMMAND</span></span>
<span class="line"><span>32492 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.12 % [kworker/u8:1-ev~_power_efficient]</span></span>
<span class="line"><span>  208 be/3 root        0.00 B/s 1585.31 B/s  0.00 %  0.11 % [jbd2/sda1-8]</span></span>
<span class="line"><span>    1 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % init splash</span></span>
<span class="line"><span>    2 be/4 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [kthreadd]</span></span>
<span class="line"><span>    3 be/0 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [rcu_gp]</span></span>
<span class="line"><span>    4 be/0 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [rcu_par_gp]</span></span>
<span class="line"><span>    8 be/0 root        0.00 B/s    0.00 B/s  0.00 %  0.00 % [mm_percpu_wq]</span></span></code></pre></div><h3 id="ioping" tabindex="-1">ioping <a class="header-anchor" href="#ioping" aria-label="Permalink to “ioping”">​</a></h3><p><code>ioping</code> 命令是一种完全不同的工具，但是它可以报告磁盘延迟——也就是磁盘响应请求需要多长时间，而这有助于诊断磁盘问题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ioping /dev/sda1</span></span>
<span class="line"><span>4 KiB &lt;&lt;&lt; /dev/sda1 (block device 111.8 GiB): request=1 time=960.2 us (warmup)</span></span>
<span class="line"><span>4 KiB &lt;&lt;&lt; /dev/sda1 (block device 111.8 GiB): request=2 time=841.5 us</span></span>
<span class="line"><span>4 KiB &lt;&lt;&lt; /dev/sda1 (block device 111.8 GiB): request=3 time=831.0 us</span></span>
<span class="line"><span>4 KiB &lt;&lt;&lt; /dev/sda1 (block device 111.8 GiB): request=4 time=1.17 ms</span></span>
<span class="line"><span>^C</span></span>
<span class="line"><span>--- /dev/sda1 (block device 111.8 GiB) ioping statistics ---</span></span>
<span class="line"><span>3 requests completed in 2.84 ms, 12 KiB read, 1.05 k iops, 4.12 MiB/s</span></span>
<span class="line"><span>generated 4 requests in 3.37 s, 16 KiB, 1 iops, 4.75 KiB/s</span></span>
<span class="line"><span>min/avg/max/mdev = 831.0 us / 947.9 us / 1.17 ms / 158.0 us</span></span></code></pre></div><h3 id="atop" tabindex="-1">atop <a class="header-anchor" href="#atop" aria-label="Permalink to “atop”">​</a></h3><p><code>atop</code> 命令，像 <code>top</code> 一样提供了大量有关系统性能的信息，包括有关磁盘活动的一些统计信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ATOP - butterfly      2018/12/26  17:24:19      37d3h13m------ 10ed</span></span>
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
<span class="line"><span> 3362  0.00s   0.00s     0K      0K  NE   0     0  E     -    0%  &lt;sleep&gt;</span></span></code></pre></div><p>如果你<em>只</em>想查看磁盘统计信息，则可以使用以下命令轻松进行管理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ atop | grep DSK</span></span>
<span class="line"><span>DSK |          sda | busy      0% | read  122901 | write 3318e3 | avio 0.67 ms |</span></span>
<span class="line"><span>DSK |          sdb | busy      0% | read    1168 | write    103 | avio 0.73 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     92 | avio 2.39 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     94 | avio 2.47 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     99 | avio 2.26 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     94 | avio 2.43 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     94 | avio 2.43 ms |</span></span>
<span class="line"><span>DSK |          sda | busy      2% | read       0 | write     92 | avio 2.43 ms |</span></span>
<span class="line"><span>^C</span></span></code></pre></div><h3 id="了解磁盘-i-o" tabindex="-1">了解磁盘 I/O <a class="header-anchor" href="#了解磁盘-i-o" aria-label="Permalink to “了解磁盘 I/O”">​</a></h3><p>Linux 提供了足够的命令，可以让你很好地了解磁盘的工作强度，并帮助你关注潜在的问题或减缓。希望这些命令中的一个可以告诉你何时需要质疑磁盘性能。偶尔使用这些命令将有助于确保当你需要检查磁盘，特别是忙碌或缓慢的磁盘时可以显而易见地发现它们。</p><hr>`,26)),n("p",null,[s[15]||(s[15]=a("via: ",-1)),i(p,{href:"https://www.networkworld.com/article/3330497/linux/linux-commands-for-measuring-disk-activity.html"},{default:e(()=>[...s[14]||(s[14]=[a("https://www.networkworld.com/article/3330497/linux/linux-commands-for-measuring-disk-activity.html",-1)])]),_:1})]),n("p",null,[s[20]||(s[20]=a("作者：",-1)),i(p,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[16]||(s[16]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[21]||(s[21]=a(" 选题：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[17]||(s[17]=[a("lujun9972",-1)])]),_:1}),s[22]||(s[22]=a(" 译者：",-1)),i(p,{href:"https://github.com/laingke"},{default:e(()=>[...s[18]||(s[18]=[a("laingke",-1)])]),_:1}),s[23]||(s[23]=a(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[19]||(s[19]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[26]||(s[26]=a("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[24]||(s[24]=[a("LCTT",-1)])]),_:1}),s[27]||(s[27]=a(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[25]||(s[25]=[a("Linux中国",-1)])]),_:1}),s[28]||(s[28]=a(" 荣誉推出",-1))])])}const x=t(c,[["render",u]]);export{y as __pageData,x as default};
