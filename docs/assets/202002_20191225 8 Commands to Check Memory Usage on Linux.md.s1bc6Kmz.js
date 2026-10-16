import{_ as o,a0 as t,w as d,s as c,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"检查 Linux 中内存使用情况的 8 条命令 | LCTT x X-CMD","titleTemplate":false,"description":"检查 Linux 中内存使用情况的 8 条命令 | LCTT (202002) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"检查 Linux 中内存使用情况的 8 条命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"检查 Linux 中内存使用情况的 8 条命令 | LCTT (202002) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202002/20191225 8 Commands to Check Memory Usage on Linux","title":"检查 Linux 中内存使用情况的 8 条命令","tag":"202002","desc":""},"relativePath":"202002/20191225 8 Commands to Check Memory Usage on Linux.md","filePath":"[post].md"}'),r={name:"202002/20191225 8 Commands to Check Memory Usage on Linux.md"};function u(m,s,g,k,M,f){const p=t("Link");return d(),c("div",null,[s[45]||(s[45]=a("h1",{id:"检查-linux-中内存使用情况的-8-条命令",tabindex:"-1"},[n("检查 Linux 中内存使用情况的 8 条命令 "),a("a",{class:"header-anchor",href:"#检查-linux-中内存使用情况的-8-条命令","aria-label":"Permalink to “检查 Linux 中内存使用情况的 8 条命令”"},"​")],-1)),s[46]||(s[46]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202002/09/121112mg0jigxtcc5xr8or.jpg",alt:""})],-1)),s[47]||(s[47]=a("p",null,"Linux 并不像 Windows，你经常不会有图形界面可供使用，特别是在服务器环境中。",-1)),s[48]||(s[48]=a("p",null,"作为一名 Linux 管理员，知道如何获取当前可用的和已经使用的资源情况，比如内存、CPU、磁盘等，是相当重要的。如果某一应用在你的系统上占用了太多的资源，导致你的系统无法达到最优状态，那么你需要找到并修正它。",-1)),a("p",null,[s[1]||(s[1]=n("如果你想找到消耗内存前十名的进程，你需要去阅读这篇文章：",-1)),e(p,{href:"https://linux.cn/article-11542-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("如何在 Linux 中找出内存消耗最大的进程",-1)])]),_:1}),s[2]||(s[2]=n("。",-1))]),s[49]||(s[49]=a("p",null,"在 Linux 中，命令能做任何事，所以使用相关命令吧。在这篇教程中，我们将会给你展示 8 个有用的命令来即查看在 Linux 系统中内存的使用情况，包括 RAM 和交换分区。",-1)),a("p",null,[s[4]||(s[4]=n("创建交换分区在 Linux 系统中是非常重要的，如果你想了解如何创建，可以去阅读这篇文章：",-1)),e(p,{href:"https://linux.cn/article-9579-1.html"},{default:i(()=>[...s[3]||(s[3]=[n("在 Linux 系统上创建交换分区",-1)])]),_:1}),s[5]||(s[5]=n("。",-1))]),s[50]||(s[50]=l('<p>下面的命令可以帮助你以不同的方式查看 Linux 内存使用情况。</p><ul><li><code>free</code> 命令</li><li><code>/proc/meminfo</code> 文件</li><li><code>vmstat</code> 命令</li><li><code>ps_mem</code> 命令</li><li><code>smem</code> 命令</li><li><code>top</code> 命令</li><li><code>htop</code> 命令</li><li><code>glances</code> 命令</li></ul><h3 id="_1-如何使用-free-命令查看-linux-内存使用情况" tabindex="-1">1）如何使用 free 命令查看 Linux 内存使用情况 <a class="header-anchor" href="#_1-如何使用-free-命令查看-linux-内存使用情况" aria-label="Permalink to “1）如何使用 free 命令查看 Linux 内存使用情况”">​</a></h3>',3)),a("p",null,[e(p,{href:"https://linux.cn/article-8314-1.html"},{default:i(()=>[...s[6]||(s[6]=[n("free 命令",-1)])]),_:1}),s[7]||(s[7]=n(" 是被 Linux 管理员广泛使用的主要命令。但是它提供的信息比 ",-1)),s[8]||(s[8]=a("code",null,"/proc/meminfo",-1)),s[9]||(s[9]=n(" 文件少。",-1))]),s[51]||(s[51]=l(`<p><code>free</code> 命令会分别展示物理内存和交换分区内存中已使用的和未使用的数量，以及内核使用的缓冲区和缓存。</p><p>这些信息都是从 <code>/proc/meminfo</code> 文件中获取的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># free -m</span></span>
<span class="line"><span>              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span>Mem:          15867        9199        1702        3315        4965        3039</span></span>
<span class="line"><span>Swap:         17454         666       16788</span></span></code></pre></div><ul><li><code>total</code>：总的内存量</li><li><code>used</code>：被当前运行中的进程使用的内存量（<code>used</code> = <code>total</code> – <code>free</code> – <code>buff/cache</code>）</li><li><code>free</code>： 未被使用的内存量（<code>free</code> = <code>total</code> – <code>used</code> – <code>buff/cache</code>）</li><li><code>shared</code>： 在两个或多个进程之间共享的内存量</li><li><code>buffers</code>： 内存中保留用于内核记录进程队列请求的内存量</li><li><code>cache</code>： 在 RAM 中存储最近使用过的文件的页缓冲大小</li><li><code>buff/cache</code>： 缓冲区和缓存总的使用内存量</li><li><code>available</code>： 可用于启动新应用的可用内存量（不含交换分区）</li></ul><h3 id="_2-如何使用-proc-meminfo-文件查看-linux-内存使用情况" tabindex="-1">2) 如何使用 /proc/meminfo 文件查看 Linux 内存使用情况 <a class="header-anchor" href="#_2-如何使用-proc-meminfo-文件查看-linux-内存使用情况" aria-label="Permalink to “2) 如何使用 /proc/meminfo 文件查看 Linux 内存使用情况”">​</a></h3><p><code>/proc/meminfo</code> 文件是一个包含了多种内存使用的实时信息的虚拟文件。它展示内存状态单位使用的是 kB，其中大部分属性都难以理解。然而它也包含了内存使用情况的有用信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat /proc/meminfo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MemTotal:       16248572 kB</span></span>
<span class="line"><span>MemFree:         1764576 kB</span></span>
<span class="line"><span>MemAvailable:    3136604 kB</span></span>
<span class="line"><span>Buffers:          234132 kB</span></span>
<span class="line"><span>Cached:          4731288 kB</span></span>
<span class="line"><span>SwapCached:        28516 kB</span></span>
<span class="line"><span>Active:          9004412 kB</span></span>
<span class="line"><span>Inactive:        3552416 kB</span></span>
<span class="line"><span>Active(anon):    8094128 kB</span></span>
<span class="line"><span>Inactive(anon):  2896064 kB</span></span>
<span class="line"><span>Active(file):     910284 kB</span></span>
<span class="line"><span>Inactive(file):   656352 kB</span></span>
<span class="line"><span>Unevictable:          80 kB</span></span>
<span class="line"><span>Mlocked:              80 kB</span></span>
<span class="line"><span>SwapTotal:      17873388 kB</span></span>
<span class="line"><span>SwapFree:       17191328 kB</span></span>
<span class="line"><span>Dirty:               252 kB</span></span>
<span class="line"><span>Writeback:             0 kB</span></span>
<span class="line"><span>AnonPages:       7566736 kB</span></span>
<span class="line"><span>Mapped:          3692368 kB</span></span>
<span class="line"><span>Shmem:           3398784 kB</span></span>
<span class="line"><span>Slab:             278976 kB</span></span>
<span class="line"><span>SReclaimable:     125480 kB</span></span>
<span class="line"><span>SUnreclaim:       153496 kB</span></span>
<span class="line"><span>KernelStack:       23936 kB</span></span>
<span class="line"><span>PageTables:        73880 kB</span></span>
<span class="line"><span>NFS_Unstable:          0 kB</span></span>
<span class="line"><span>Bounce:                0 kB</span></span>
<span class="line"><span>WritebackTmp:          0 kB</span></span>
<span class="line"><span>CommitLimit:    25997672 kB</span></span>
<span class="line"><span>Committed_AS:   24816804 kB</span></span>
<span class="line"><span>VmallocTotal:   34359738367 kB</span></span>
<span class="line"><span>VmallocUsed:           0 kB</span></span>
<span class="line"><span>VmallocChunk:          0 kB</span></span>
<span class="line"><span>Percpu:             3392 kB</span></span>
<span class="line"><span>HardwareCorrupted:     0 kB</span></span>
<span class="line"><span>AnonHugePages:         0 kB</span></span>
<span class="line"><span>ShmemHugePages:        0 kB</span></span>
<span class="line"><span>ShmemPmdMapped:        0 kB</span></span>
<span class="line"><span>HugePages_Total:       0</span></span>
<span class="line"><span>HugePages_Free:        0</span></span>
<span class="line"><span>HugePages_Rsvd:        0</span></span>
<span class="line"><span>HugePages_Surp:        0</span></span>
<span class="line"><span>Hugepagesize:       2048 kB</span></span>
<span class="line"><span>Hugetlb:               0 kB</span></span>
<span class="line"><span>DirectMap4k:     1059088 kB</span></span>
<span class="line"><span>DirectMap2M:    14493696 kB</span></span>
<span class="line"><span>DirectMap1G:     2097152 kB</span></span></code></pre></div><h3 id="_3-如何使用-vmstat-命令查看-linux-内存使用情况" tabindex="-1">3) 如何使用 vmstat 命令查看 Linux 内存使用情况 <a class="header-anchor" href="#_3-如何使用-vmstat-命令查看-linux-内存使用情况" aria-label="Permalink to “3) 如何使用 vmstat 命令查看 Linux 内存使用情况”">​</a></h3>`,8)),a("p",null,[e(p,{href:"https://linux.cn/article-8157-1.html"},{default:i(()=>[...s[10]||(s[10]=[n("vmstat 命令",-1)])]),_:1}),s[11]||(s[11]=n(" 是另一个报告虚拟内存统计信息的有用工具。",-1))]),s[52]||(s[52]=l(`<p><code>vmstat</code> 报告的信息包括：进程、内存、页面映射、块 I/O、陷阱、磁盘和 CPU 特性信息。<code>vmstat</code> 不需要特殊的权限，并且它可以帮助诊断系统瓶颈。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----</span></span>
<span class="line"><span> r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st</span></span>
<span class="line"><span> 1  0 682060 1769324 234188 4853500  0    3    25    91   31   16 34 13 52  0  0</span></span></code></pre></div><p>如果你想详细了解每一项的含义，阅读下面的描述。</p><ul><li><code>procs</code>：进程 <ul><li><code>r</code>： 可以运行的进程数目（正在运行或等待运行）</li><li><code>b</code>： 处于不可中断睡眠中的进程数目</li></ul></li><li><code>memory</code>：内存 <ul><li><code>swpd</code>： 使用的虚拟内存数量</li><li><code>free</code>： 空闲的内存数量</li><li><code>buff</code>： 用作缓冲区内存的数量</li><li><code>cache</code>： 用作缓存内存的数量</li><li><code>inact</code>： 不活动的内存数量（使用 <code>-a</code> 选项）</li><li><code>active</code>： 活动的内存数量（使用 <code>-a</code> 选项）</li></ul></li><li><code>Swap</code>：交换分区 <ul><li><code>si</code>： 每秒从磁盘交换的内存数量</li><li><code>so</code>： 每秒交换到磁盘的内存数量</li></ul></li><li><code>IO</code>：输入输出 <ul><li><code>bi</code>： 从一个块设备中收到的块（块/秒）</li><li><code>bo</code>： 发送到一个块设备的块（块/秒）</li></ul></li><li><code>System</code>：系统 <ul><li><code>in</code>： 每秒的中断次数，包括时钟。</li><li><code>cs</code>： 每秒的上下文切换次数。</li></ul></li><li><code>CPU</code>：下面这些是在总的 CPU 时间占的百分比 <ul><li><code>us</code>： 花费在非内核代码上的时间占比（包括用户时间，调度时间）</li><li><code>sy</code>： 花费在内核代码上的时间占比 （系统时间）</li><li><code>id</code>： 花费在闲置的时间占比。在 Linux 2.5.41 之前，包括 I/O 等待时间</li><li><code>wa</code>： 花费在 I/O 等待上的时间占比。在 Linux 2.5.41 之前，包括在空闲时间中</li><li><code>st</code>： 被虚拟机偷走的时间占比。在 Linux 2.6.11 之前，这部分称为 unknown</li></ul></li></ul><p>运行下面的命令查看详细的信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vmstat -s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        16248580 K total memory</span></span>
<span class="line"><span>         2210256 K used memory</span></span>
<span class="line"><span>         2311820 K active memory</span></span>
<span class="line"><span>         2153352 K inactive memory</span></span>
<span class="line"><span>        11368812 K free memory</span></span>
<span class="line"><span>          107584 K buffer memory</span></span>
<span class="line"><span>         2561928 K swap cache</span></span>
<span class="line"><span>        17873388 K total swap</span></span>
<span class="line"><span>               0 K used swap</span></span>
<span class="line"><span>        17873388 K free swap</span></span>
<span class="line"><span>           44309 non-nice user cpu ticks</span></span>
<span class="line"><span>             164 nice user cpu ticks</span></span>
<span class="line"><span>           14332 system cpu ticks</span></span>
<span class="line"><span>          382418 idle cpu ticks</span></span>
<span class="line"><span>            1248 IO-wait cpu ticks</span></span>
<span class="line"><span>            1407 IRQ cpu ticks</span></span>
<span class="line"><span>            2147 softirq cpu ticks</span></span>
<span class="line"><span>               0 stolen cpu ticks</span></span>
<span class="line"><span>         1022437 pages paged in</span></span>
<span class="line"><span>          260296 pages paged out</span></span>
<span class="line"><span>               0 pages swapped in</span></span>
<span class="line"><span>               0 pages swapped out</span></span>
<span class="line"><span>         1424838 interrupts</span></span>
<span class="line"><span>         4979524 CPU context switches</span></span>
<span class="line"><span>      1577163147 boot time</span></span>
<span class="line"><span>            3318 forks</span></span></code></pre></div><h3 id="_4-如何使用-ps-mem-命令查看-linux-内存使用情况" tabindex="-1">4) 如何使用 ps_mem 命令查看 Linux 内存使用情况 <a class="header-anchor" href="#_4-如何使用-ps-mem-命令查看-linux-内存使用情况" aria-label="Permalink to “4) 如何使用 ps_mem 命令查看 Linux 内存使用情况”">​</a></h3>`,7)),a("p",null,[e(p,{href:"https://linux.cn/article-8639-1.html"},{default:i(()=>[...s[12]||(s[12]=[n("ps_mem",-1)])]),_:1}),s[13]||(s[13]=n(" 是一个用来查看当前内存使用情况的简单的 Python 脚本。该工具可以确定每个程序使用了多少内存（不是每个进程）。",-1))]),s[53]||(s[53]=l(`<p>该工具采用如下的方法计算每个程序使用内存：总的使用 = 程序进程私有的内存 + 程序进程共享的内存。</p><p>计算共享内存是存在不足之处的，该工具可以为运行中的内核自动选择最准确的方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ps_mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Private  +   Shared  =  RAM used    Program</span></span>
<span class="line"><span>180.0 KiB +  30.0 KiB = 210.0 KiB    xf86-video-intel-backlight-helper (2)</span></span>
<span class="line"><span>192.0 KiB +  66.0 KiB = 258.0 KiB    cat (2)</span></span>
<span class="line"><span>312.0 KiB +  38.5 KiB = 350.5 KiB    lvmetad</span></span>
<span class="line"><span>380.0 KiB +  25.5 KiB = 405.5 KiB    crond</span></span>
<span class="line"><span>392.0 KiB +  32.5 KiB = 424.5 KiB    rtkit-daemon</span></span>
<span class="line"><span>852.0 KiB + 117.0 KiB = 969.0 KiB    gnome-session-ctl (2)</span></span>
<span class="line"><span>928.0 KiB +  56.5 KiB = 984.5 KiB    gvfs-mtp-volume-monitor</span></span>
<span class="line"><span>  1.0 MiB +  42.5 KiB =   1.0 MiB    dconf-service</span></span>
<span class="line"><span>  1.0 MiB + 106.5 KiB =   1.1 MiB    gvfs-goa-volume-monitor</span></span>
<span class="line"><span>  1.0 MiB + 180.5 KiB =   1.2 MiB    gvfsd</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>  5.3 MiB +   3.0 MiB =   8.3 MiB    evolution-addressbook-factory</span></span>
<span class="line"><span>  8.5 MiB +   1.2 MiB =   9.7 MiB    gnome-session-binary (4)</span></span>
<span class="line"><span>  7.5 MiB +   3.1 MiB =  10.5 MiB    polkitd</span></span>
<span class="line"><span>  7.4 MiB +   3.3 MiB =  10.7 MiB    pulseaudio (2)</span></span>
<span class="line"><span>  7.0 MiB +   7.0 MiB =  14.0 MiB    msm_notifier</span></span>
<span class="line"><span> 12.7 MiB +   2.3 MiB =  15.0 MiB    evolution-source-registry</span></span>
<span class="line"><span> 13.3 MiB +   2.5 MiB =  15.8 MiB    gnome-terminal-server</span></span>
<span class="line"><span> 15.8 MiB +   1.0 MiB =  16.8 MiB    tracker-miner-fs</span></span>
<span class="line"><span> 18.7 MiB +   1.8 MiB =  20.5 MiB    python3.7</span></span>
<span class="line"><span> 16.6 MiB +   4.0 MiB =  20.5 MiB    evolution-calendar-factory</span></span>
<span class="line"><span> 22.3 MiB + 753.0 KiB =  23.0 MiB    gsd-keyboard (2)</span></span>
<span class="line"><span> 22.4 MiB + 832.0 KiB =  23.2 MiB    gsd-wacom (2)</span></span>
<span class="line"><span> 20.8 MiB +   2.5 MiB =  23.3 MiB    blueman-tray</span></span>
<span class="line"><span> 22.0 MiB +   1.8 MiB =  23.8 MiB    blueman-applet</span></span>
<span class="line"><span> 23.1 MiB + 934.0 KiB =  24.0 MiB    gsd-xsettings (2)</span></span>
<span class="line"><span> 23.7 MiB +   1.2 MiB =  24.9 MiB    gsd-media-keys (2)</span></span>
<span class="line"><span> 23.4 MiB +   1.6 MiB =  25.0 MiB    gsd-color (2)</span></span>
<span class="line"><span> 23.9 MiB +   1.2 MiB =  25.1 MiB    gsd-power (2)</span></span>
<span class="line"><span> 16.5 MiB +   8.9 MiB =  25.4 MiB    evolution-alarm-notify</span></span>
<span class="line"><span> 27.2 MiB +   2.0 MiB =  29.2 MiB    systemd-journald</span></span>
<span class="line"><span> 28.7 MiB +   2.8 MiB =  31.5 MiB    c</span></span>
<span class="line"><span> 29.6 MiB +   2.2 MiB =  31.8 MiB    chrome-gnome-sh (2)</span></span>
<span class="line"><span> 43.9 MiB +   6.8 MiB =  50.7 MiB    WebExtensions</span></span>
<span class="line"><span> 46.7 MiB +   6.7 MiB =  53.5 MiB    goa-daemon</span></span>
<span class="line"><span> 86.5 MiB +  55.2 MiB = 141.7 MiB    Xorg (2)</span></span>
<span class="line"><span>191.4 MiB +  24.1 MiB = 215.4 MiB    notepadqq-bin</span></span>
<span class="line"><span>306.7 MiB +  29.0 MiB = 335.7 MiB    gnome-shell (2)</span></span>
<span class="line"><span>601.6 MiB +  77.7 MiB = 679.2 MiB    firefox</span></span>
<span class="line"><span>  1.0 GiB + 109.7 MiB =   1.1 GiB    chrome (15)</span></span>
<span class="line"><span>  2.3 GiB + 123.1 MiB =   2.5 GiB    Web Content (8)</span></span>
<span class="line"><span>----------------------------------</span></span>
<span class="line"><span>                           5.6 GiB</span></span>
<span class="line"><span>==================================</span></span></code></pre></div><h3 id="_5-如何使用-smem-命令查看-linux-内存使用情况" tabindex="-1">5）如何使用 smem 命令查看 Linux 内存使用情况 <a class="header-anchor" href="#_5-如何使用-smem-命令查看-linux-内存使用情况" aria-label="Permalink to “5）如何使用 smem 命令查看 Linux 内存使用情况”">​</a></h3>`,4)),a("p",null,[e(p,{href:"https://linux.cn/article-7681-1.html"},{default:i(()=>[...s[14]||(s[14]=[n("smem",-1)])]),_:1}),s[15]||(s[15]=n(" 是一个可以为 Linux 系统提供多种内存使用情况报告的工具。不同于现有的工具，",-1)),s[16]||(s[16]=a("code",null,"smem",-1)),s[17]||(s[17]=n(" 可以报告",-1)),s[18]||(s[18]=a("ruby",null,[n("比例集大小"),a("rt",null,"Proportional Set Size")],-1)),s[19]||(s[19]=n("（PSS）、",-1)),s[20]||(s[20]=a("ruby",null,[n("唯一集大小"),a("rt",null,"Unique Set Size")],-1)),s[21]||(s[21]=n("（USS）和",-1)),s[22]||(s[22]=a("ruby",null,[n("驻留集大小"),a("rt",null,"Resident Set Size")],-1)),s[23]||(s[23]=n("（RSS）。",-1))]),s[54]||(s[54]=l(`<ul><li>比例集大小（PSS）：库和应用在虚拟内存系统中的使用量。</li><li>唯一集大小（USS）：其报告的是非共享内存。</li><li>驻留集大小（RSS）：物理内存（通常多进程共享）使用情况，其通常高于内存使用量。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># smem -tk</span></span>
<span class="line"><span></span></span>
<span class="line"><span> PID User     Command                         Swap      USS      PSS      RSS</span></span>
<span class="line"><span>3383 daygeek  cat                                0    92.0K   123.0K     1.7M</span></span>
<span class="line"><span>3384 daygeek  cat                                0   100.0K   129.0K     1.7M</span></span>
<span class="line"><span>1177 daygeek  /usr/lib/gnome-session-ctl         0   436.0K   476.0K     4.6M</span></span>
<span class="line"><span>1171 daygeek  /usr/bin/dbus-daemon --conf        0   524.0K   629.0K     3.8M</span></span>
<span class="line"><span>1238 daygeek  /usr/lib/xdg-permission-sto        0   592.0K   681.0K     5.9M</span></span>
<span class="line"><span>1350 daygeek  /usr/lib/gsd-screensaver-pr        0   652.0K   701.0K     5.8M</span></span>
<span class="line"><span>1135 daygeek  /usr/lib/gdm-x-session --ru        0   648.0K   723.0K     6.0M</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>1391 daygeek  /usr/lib/evolution-data-ser        0    16.5M    25.2M    63.3M</span></span>
<span class="line"><span>1416 daygeek  caffeine-ng                        0    28.7M    31.4M    66.2M</span></span>
<span class="line"><span>4855 daygeek  /opt/google/chrome/chrome -        0    38.3M    46.3M   120.6M</span></span>
<span class="line"><span>2174 daygeek  /usr/lib/firefox/firefox -c        0    44.0M    50.7M   120.3M</span></span>
<span class="line"><span>1254 daygeek  /usr/lib/goa-daemon                0    46.7M    53.3M    80.4M</span></span>
<span class="line"><span>3416 daygeek  /opt/google/chrome/chrome -        0    44.7M    54.2M   103.3M</span></span>
<span class="line"><span>4782 daygeek  /opt/google/chrome/chrome -        0    57.2M    65.8M   142.3M</span></span>
<span class="line"><span>1137 daygeek  /usr/lib/Xorg vt2 -displayf        0    77.2M   129.6M   192.3M</span></span>
<span class="line"><span>3376 daygeek  /opt/google/chrome/chrome          0   117.8M   131.0M   210.9M</span></span>
<span class="line"><span>4448 daygeek  /usr/lib/firefox/firefox -c        0   124.4M   133.8M   224.1M</span></span>
<span class="line"><span>3558 daygeek  /opt/google/chrome/chrome -        0   157.3M   165.7M   242.2M</span></span>
<span class="line"><span>2310 daygeek  /usr/lib/firefox/firefox -c        0   159.6M   169.4M   259.6M</span></span>
<span class="line"><span>4331 daygeek  /usr/lib/firefox/firefox -c        0   176.8M   186.2M   276.8M</span></span>
<span class="line"><span>4034 daygeek  /opt/google/chrome/chrome -        0   179.3M   187.9M   264.6M</span></span>
<span class="line"><span>3911 daygeek  /opt/google/chrome/chrome -        0   183.1M   191.8M   269.4M</span></span>
<span class="line"><span>3861 daygeek  /opt/google/chrome/chrome -        0   199.8M   208.2M   285.2M</span></span>
<span class="line"><span>2746 daygeek  /usr/bin/../lib/notepadqq/n        0   193.5M   217.5M   261.5M</span></span>
<span class="line"><span>1194 daygeek  /usr/bin/gnome-shell               0   203.7M   219.0M   285.1M</span></span>
<span class="line"><span>2945 daygeek  /usr/lib/firefox/firefox -c        0   294.5M   308.0M   410.2M</span></span>
<span class="line"><span>2786 daygeek  /usr/lib/firefox/firefox -c        0   341.2M   354.3M   459.1M</span></span>
<span class="line"><span>4193 daygeek  /usr/lib/firefox/firefox -c        0   417.4M   427.6M   519.3M</span></span>
<span class="line"><span>2651 daygeek  /usr/lib/firefox/firefox -c        0   417.0M   430.1M   535.6M</span></span>
<span class="line"><span>2114 daygeek  /usr/lib/firefox/firefox -c        0   430.6M   473.9M   610.9M</span></span>
<span class="line"><span>2039 daygeek  /usr/lib/firefox/firefox --        0   601.3M   677.5M   840.6M</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>  90 1                                           0     4.8G     5.2G     8.0G</span></span></code></pre></div><h3 id="_6-如何使用-top-命令查看-linux-内存使用情况" tabindex="-1">6) 如何使用 top 命令查看 Linux 内存使用情况 <a class="header-anchor" href="#_6-如何使用-top-命令查看-linux-内存使用情况" aria-label="Permalink to “6) 如何使用 top 命令查看 Linux 内存使用情况”">​</a></h3>`,3)),a("p",null,[e(p,{href:"https://www.2daygeek.com/linux-top-command-linux-system-performance-monitoring-tool/"},{default:i(()=>[...s[24]||(s[24]=[n("top 命令",-1)])]),_:1}),s[25]||(s[25]=n(" 是一个 Linux 系统的管理员最常使用的用于查看进程的资源使用情况的命令。",-1))]),s[55]||(s[55]=l(`<p>该命令会展示了系统总的内存量、当前内存使用量、空闲内存量和缓冲区使用的内存总量。此外，该命令还会展示总的交换空间内存量、当前交换空间的内存使用量、空闲的交换空间内存量和缓存使用的内存总量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># top -b | head -10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>top - 11:04:39 up 40 min,  1 user,  load average: 1.59, 1.42, 1.28</span></span>
<span class="line"><span>Tasks: 288 total,   2 running, 286 sleeping,   0 stopped,   0 zombie</span></span>
<span class="line"><span>%Cpu(s): 13.3 us,  1.5 sy,  0.0 ni, 84.4 id,  0.0 wa,  0.3 hi,  0.5 si,  0.0 st</span></span>
<span class="line"><span>KiB Mem : 16248572 total,  7755928 free,  4657736 used,  3834908 buff/cache</span></span>
<span class="line"><span>KiB Swap: 17873388 total, 17873388 free,        0 used.  9179772 avail Mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND</span></span>
<span class="line"><span> 2114 daygeek   20     3182736 616624 328228 R  83.3   3.8   7:09.72 Web Content</span></span>
<span class="line"><span> 2039 daygeek   20     4437952 849616 261364 S  13.3   5.2   7:58.54 firefox</span></span>
<span class="line"><span> 1194 daygeek   20     4046856 291288 165460 S   4.2   1.8   1:57.68 gnome-shell</span></span>
<span class="line"><span> 4034 daygeek   20      808556 273244  88676 S   4.2   1.7   1:44.72 chrome</span></span>
<span class="line"><span> 2945 daygeek   20     3309832 416572 150112 S   3.3   2.6   4:04.60 Web Content</span></span>
<span class="line"><span> 1137 daygeek   20      564316 197292 183380 S   2.5   1.2   2:55.76 Xorg</span></span>
<span class="line"><span> 2651 daygeek   20     3098420 547260 275700 S   1.7   3.4   2:15.96 Web Content</span></span>
<span class="line"><span> 2786 daygeek   20     2957112 463912 240744 S   1.7   2.9   3:22.29 Web Content</span></span>
<span class="line"><span>    1 root      20      182756  10208   7760 S   0.8   0.1   0:04.51 systemd</span></span>
<span class="line"><span>  442 root     -51                           S   0.8         0:05.02 irq/141-iw+</span></span>
<span class="line"><span> 1426 daygeek   20      373660  48948  29820 S   0.8   0.3   0:03.55 python3</span></span>
<span class="line"><span> 2174 daygeek   20     2466680 122196  78604 S   0.8   0.8   0:17.75 WebExtensi+</span></span></code></pre></div><h3 id="_7-如何使用-htop-命令查看-linux-内存使用情况" tabindex="-1">7) 如何使用 htop 命令查看 Linux 内存使用情况 <a class="header-anchor" href="#_7-如何使用-htop-命令查看-linux-内存使用情况" aria-label="Permalink to “7) 如何使用 htop 命令查看 Linux 内存使用情况”">​</a></h3>`,3)),a("p",null,[e(p,{href:"https://www.2daygeek.com/linux-htop-command-linux-system-performance-resource-monitoring-tool/"},{default:i(()=>[...s[26]||(s[26]=[n("htop 命令",-1)])]),_:1}),s[27]||(s[27]=n(" 是一个可交互的 Linux/Unix 系统进程查看器。它是一个文本模式应用，且使用它需要 Hisham 开发的 ncurses 库。",-1))]),s[56]||(s[56]=l('<p>该名令的设计目的使用来代替 <code>top</code> 命令。该命令与 <code>top</code> 命令很相似，但是其允许你可以垂直地或者水平地的滚动以便可以查看系统中所有的进程情况。</p><p><code>htop</code> 命令拥有不同的颜色，这个额外的优点当你在追踪系统性能情况时十分有用。</p><p>此外，你可以自由地执行与进程相关的任务，比如杀死进程或者改变进程的优先级而不需要其进程号（PID）。</p><p><img src="https://www.2daygeek.com/wp-content/uploads/2019/12/linux-commands-check-memory-usage-2.jpg" alt=""></p><h3 id="_8-如何使用-glances-命令查看-linux-内存使用情况" tabindex="-1">8）如何使用 glances 命令查看 Linux 内存使用情况 <a class="header-anchor" href="#_8-如何使用-glances-命令查看-linux-内存使用情况" aria-label="Permalink to “8）如何使用 glances 命令查看 Linux 内存使用情况”">​</a></h3>',5)),a("p",null,[e(p,{href:"https://www.2daygeek.com/linux-glances-advanced-real-time-linux-system-performance-monitoring-tool/"},{default:i(()=>[...s[28]||(s[28]=[n("Glances",-1)])]),_:1}),s[29]||(s[29]=n(" 是一个 Python 编写的跨平台的系统监视工具。",-1))]),s[57]||(s[57]=a("p",null,"你可以在一个地方查看所有信息，比如：CPU 使用情况、内存使用情况、正在运行的进程、网络接口、磁盘 I/O、RAID、传感器、文件系统信息、Docker、系统信息、运行时间等等。",-1)),s[58]||(s[58]=a("p",null,[a("img",{src:"https://www.2daygeek.com/wp-content/uploads/2019/12/linux-commands-check-memory-usage-3.jpg",alt:""})],-1)),s[59]||(s[59]=a("hr",null,null,-1)),a("p",null,[s[31]||(s[31]=n("via: ",-1)),e(p,{href:"https://www.2daygeek.com/linux-commands-check-memory-usage/"},{default:i(()=>[...s[30]||(s[30]=[n("https://www.2daygeek.com/linux-commands-check-memory-usage/",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/magesh/"},{default:i(()=>[...s[32]||(s[32]=[n("Magesh Maruthamuthu",-1)])]),_:1}),s[37]||(s[37]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[33]||(s[33]=[n("lujun9972",-1)])]),_:1}),s[38]||(s[38]=n(" 译者：",-1)),e(p,{href:"https://github.com/mengxinayan"},{default:i(()=>[...s[34]||(s[34]=[n("萌新阿岩",-1)])]),_:1}),s[39]||(s[39]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[35]||(s[35]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[42]||(s[42]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[40]||(s[40]=[n("LCTT",-1)])]),_:1}),s[43]||(s[43]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[41]||(s[41]=[n("Linux中国",-1)])]),_:1}),s[44]||(s[44]=n(" 荣誉推出",-1))])])}const h=o(r,[["render",u]]);export{x as __pageData,h as default};
