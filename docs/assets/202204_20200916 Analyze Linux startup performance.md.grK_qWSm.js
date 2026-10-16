import{_ as l,a0 as r,w as d,s as o,I as a,x as n,a1 as p,A as i,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"Linux 启动性能分析 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 启动性能分析 | LCTT (202204) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 启动性能分析 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 启动性能分析 | LCTT (202204) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202204/20200916 Analyze Linux startup performance","title":"Linux 启动性能分析","tag":"202204","desc":""},"relativePath":"202204/20200916 Analyze Linux startup performance.md","filePath":"[post].md"}'),m={name:"202204/20200916 Analyze Linux startup performance.md"};function u(c,s,g,y,f,h){const e=r("Link");return d(),o("div",null,[s[67]||(s[67]=a("h1",{id:"linux-启动性能分析",tabindex:"-1"},[n("Linux 启动性能分析 "),a("a",{class:"header-anchor",href:"#linux-启动性能分析","aria-label":"Permalink to “Linux 启动性能分析”"},"​")],-1)),s[68]||(s[68]=a("blockquote",null,[a("p",null,"用 systemd-analyze 洞悉并解决 Linux 启动性能问题。")],-1)),s[69]||(s[69]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202204/12/120909ygssda7j3t3a3a3a.jpg",alt:""})],-1)),s[70]||(s[70]=a("p",null,"系统管理员的一部分工作就是分析系统性能，发现并解决引起性能不佳、启动时间长的问题。系统管理员也需要去检查 systemd 的配置和使用的其它方面。",-1)),a("p",null,[s[1]||(s[1]=n("systemd 初始化系统提供了 ",-1)),s[2]||(s[2]=a("code",null,"systemd-analyze",-1)),s[3]||(s[3]=n(" 工具，可以帮助发现性能问题和其他重要的 systemd 信息。在以前的文章《",-1)),p(e,{href:"https://opensource.com/article/20/7/systemd-calendar-timespans"},{default:i(()=>[...s[0]||(s[0]=[n("分析 systemd 日历和时间跨度",-1)])]),_:1}),s[4]||(s[4]=n("》里，我用了 ",-1)),s[5]||(s[5]=a("code",null,"systemd-analyze",-1)),s[6]||(s[6]=n(" 去分析 systemd 里的时间戳和时间跨度，但是这个工具还有很多其他用法，这个文章里我将再揭示一些。",-1))]),s[71]||(s[71]=t('<p>（LCTT 译注：systemd 是目前主流 Linux 发行版采用的系统管理系统）</p><p>（LCTT 译注：为了区分英文的 “boot” 和 “startup” 的不同涵义，此处将 “boot” 翻译为“引导”，“startup” 翻译为“启动”。）</p><h3 id="概述启动" tabindex="-1">概述启动 <a class="header-anchor" href="#概述启动" aria-label="Permalink to “概述启动”">​</a></h3><p>Linux 启动过程是值得学习关注的地方，因为 <code>systemd-analyze</code> 工具很多功能聚焦在<ruby>启动<rt>startup</rt></ruby>过程。但是首先，要理解<ruby>引导<rt>boot</rt></ruby>和<ruby>启动<rt>startup</rt></ruby>。引导阶段从 BIOS 加电自检（POST）开始，结束于内核完成加载并控制主机系统，然后是开始了启动过程，也是 systemd 日志的开始点。</p>',4)),a("p",null,[s[8]||(s[8]=n("这个系列的第二篇文章《",-1)),p(e,{href:"https://opensource.com/article/20/5/systemd-startup?utm_campaign=intrel"},{default:i(()=>[...s[7]||(s[7]=[n("理解 Linux 启动时的 systemd",-1)])]),_:1}),s[9]||(s[9]=n("》中，我详细讨论了启动阶段的内容和过程。在这篇文章里，我想研究一下启动过程，看看需要多少时间和大部分时间花费在哪里。",-1))]),s[72]||(s[72]=t(`<p>下面我将展示的结果来自我的主要工作站，这比虚拟机的结果要有趣得多。这个工作站包括一块 华硕 TUF X299 Mark 2 主板、一个英特尔 i9-7960X CPU（16 核 32 线程），64 G 内存。下面的一些命令非 root 用户也可以使用，但是我在这篇文章里使用了 root 用户，以避免在用户之间切换。</p><p>检查启动过程有几种方法，最简单的 <code>systemd-analyze</code> 命令显示了启动的几个主要部分耗费的时间，包括内核启动、装载运行 initrd（即初始 ramdisk，这是一个用来初始化一些硬件、挂载 <code>/</code> 根文件系统的临时系统镜像），还有用户空间（加载所有使主机达到可用状态的程序和守护程序）。如果没有像该命令传递子命令，默认是 <code>systemd-analyze time</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]$ systemd-analyze</span></span>
<span class="line"><span>Startup finished in 53.921s (firmware) + 2.643s (loader) + 2.236s (kernel) + 4.348s (initrd) + 10.082s (userspace) = 1min 13.233s</span></span>
<span class="line"><span>graphical.target reached after 10.071s in userspace</span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>这个输出中最值得注意的数据是在固件（BIOS）中花费的时间：几乎 54 秒。这是一个不太正常的时间，我的其他物理系统都没有花费这么长的时间来通过 BIOS。</p><p>我的 System76 Oryx Pro 笔记本在 BIOS 阶段只花了 8.506 秒，我家里所有的系统都在 10 秒以内。在线搜索一阵之后，我发现这块主板以其超长的 BIOS 引导时间而闻名。我的主板从不“马上启动”，总是挂起，我需要关机再开机，BIOS 报错，按 <code>F1</code> 进入 BIOS 设置，选择要引导的驱动器完成引导，多花费的时间就是这样用掉的。</p><p>不是所有主机都会显示固件数据（LCTT 译注：固件引导中不涉及 systemd）。我的不科学的实验使我相信，这个数据只显示给英特尔 9 代或以上的处理器。但这可能是不正确的。</p><p>这个关于引导、启动的概述提供了很好的（虽然有限）的信息，但是还有很多关于启动的信息，我将在下面描述。</p><h3 id="分配责任" tabindex="-1">分配责任 <a class="header-anchor" href="#分配责任" aria-label="Permalink to “分配责任”">​</a></h3><p>你可以用 <code>systemd-analyze blame</code> 来发现哪个 systemd 单元的初始化时间最长。其结果按照初始化时间长短排序，从多到少：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]$ systemd-analyze blame  </span></span>
<span class="line"><span>       5.417s NetworkManager-wait-online.service</span></span>
<span class="line"><span>       3.423s dracut-initqueue.service</span></span>
<span class="line"><span>       2.715s systemd-udev-settle.service</span></span>
<span class="line"><span>       2.519s fstrim.service</span></span>
<span class="line"><span>       1.275s udisks2.service</span></span>
<span class="line"><span>       1.271s smartd.service</span></span>
<span class="line"><span>        996ms upower.service</span></span>
<span class="line"><span>        637ms lvm2-monitor.service</span></span>
<span class="line"><span>        533ms lvm2-pvscan@8:17.service</span></span>
<span class="line"><span>        520ms dmraid-activation.service</span></span>
<span class="line"><span>        460ms vboxdrv.service</span></span>
<span class="line"><span>        396ms initrd-switch-root.service</span></span>
<span class="line"><span>&lt;截断：删去了好多时间不长的条目&gt;</span></span></code></pre></div><p>因为很多服务是并行开始的，在 BIOS 之后所有单元加在一起的总数大大超过了 <code>systemd-analyze time</code> 汇总数。很多都是小数，不能显著的节省时间。</p><p>这个命令提供的数据指明了改善启动时间的办法。无用的服务可以禁用（<code>disable</code>）。在这个启动过程中，似乎没有任何一个服务需要花费过长的时间。你可能会在每次启动时看到不同的结果。（LCTT 译注：并行启动服务的原因）</p><h3 id="关键链" tabindex="-1">关键链 <a class="header-anchor" href="#关键链" aria-label="Permalink to “关键链”">​</a></h3><p>就像项目管理中的关键路径一样，关键链显示了在启动过程中发生的时间关键的事件链（LCTT 译注：systemd 可以定义服务间的依赖，构成关键链）。如果启动缓慢，这些是你想查看的 systemd 单元，因为它们是导致延迟的单元。这个工具不会显示所有启动的单元，只显示这个关键事件链中的单元。（LCTT 译注：相当于最短路径。并不显示依赖不在关键链上的服务单元）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze critical-chain</span></span>
<span class="line"><span>The time when unit became active or started is printed after the &quot;@&quot; character.</span></span>
<span class="line"><span>The time the unit took to start is printed after the &quot;+&quot; character.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>graphical.target @10.071s</span></span>
<span class="line"><span>└─lxdm.service @10.071s</span></span>
<span class="line"><span>  └─plymouth-quit.service @10.047s +22ms</span></span>
<span class="line"><span>    └─systemd-user-sessions.service @10.031s +7ms</span></span>
<span class="line"><span>      └─remote-fs.target @10.026s</span></span>
<span class="line"><span>        └─remote-fs-pre.target @10.025s</span></span>
<span class="line"><span>          └─nfs-client.target @4.636s</span></span>
<span class="line"><span>            └─gssproxy.service @4.607s +28ms</span></span>
<span class="line"><span>              └─network.target @4.604s</span></span>
<span class="line"><span>                └─NetworkManager.service @4.383s +219ms</span></span>
<span class="line"><span>                  └─dbus-broker.service @4.434s +136ms</span></span>
<span class="line"><span>                    └─dbus.socket @4.369s</span></span>
<span class="line"><span>                      └─sysinit.target @4.354s</span></span>
<span class="line"><span>                        └─systemd-update-utmp.service @4.345s +9ms</span></span>
<span class="line"><span>                          └─auditd.service @4.301s +42ms</span></span>
<span class="line"><span>                            └─systemd-tmpfiles-setup.service @4.254s +42ms</span></span>
<span class="line"><span>                              └─import-state.service @4.233s +19ms</span></span>
<span class="line"><span>                                └─local-fs.target @4.229s</span></span>
<span class="line"><span>                                  └─Virtual.mount @4.019s +209ms</span></span>
<span class="line"><span>                                    └─systemd-fsck@dev-mapper-vg_david2\\x2dVirtual.service @3.742s +274ms</span></span>
<span class="line"><span>                                      └─local-fs-pre.target @3.726s</span></span>
<span class="line"><span>                                        └─lvm2-monitor.service @356ms +637ms</span></span>
<span class="line"><span>                                          └─dm-event.socket @319ms</span></span>
<span class="line"><span>                                            └─-.mount</span></span>
<span class="line"><span>                                              └─system.slice</span></span>
<span class="line"><span>                                                └─-.slice</span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>前面有 <code>@</code> 的数字表示单元激活开始启动所使用的绝对秒数。前面有 <code>+</code> 的数字显示单元启动所需的时间。</p><h3 id="系统状态" tabindex="-1">系统状态 <a class="header-anchor" href="#系统状态" aria-label="Permalink to “系统状态”">​</a></h3><p>有时候你需要确定系统的当前状态，<code>systemd-analyze dump</code> 命令转储了当前系统状态的大量数据。有主要的启动时间戳，一个每个 systemd 单元的列表，并对每个单元状态进行了完整描述：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze dump</span></span>
<span class="line"><span>Timestamp firmware: 1min 7.983523s</span></span>
<span class="line"><span>Timestamp loader: 3.872325s</span></span>
<span class="line"><span>Timestamp kernel: Wed 2020-08-26 12:33:35 EDT</span></span>
<span class="line"><span>Timestamp initrd: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp userspace: Wed 2020-08-26 12:33:42 EDT</span></span>
<span class="line"><span>Timestamp finish: Wed 2020-08-26 16:33:56 EDT</span></span>
<span class="line"><span>Timestamp security-start: Wed 2020-08-26 12:33:42 EDT</span></span>
<span class="line"><span>Timestamp security-finish: Wed 2020-08-26 12:33:42 EDT</span></span>
<span class="line"><span>Timestamp generators-start: Wed 2020-08-26 16:33:42 EDT</span></span>
<span class="line"><span>Timestamp generators-finish: Wed 2020-08-26 16:33:43 EDT</span></span>
<span class="line"><span>Timestamp units-load-start: Wed 2020-08-26 16:33:43 EDT</span></span>
<span class="line"><span>Timestamp units-load-finish: Wed 2020-08-26 16:33:43 EDT</span></span>
<span class="line"><span>Timestamp initrd-security-start: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp initrd-security-finish: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp initrd-generators-start: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp initrd-generators-finish: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp initrd-units-load-start: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>Timestamp initrd-units-load-finish: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>-&gt; Unit system.slice:</span></span>
<span class="line"><span>        Description: System Slice</span></span>
<span class="line"><span>        Instance: n/a</span></span>
<span class="line"><span>        Unit Load State: loaded</span></span>
<span class="line"><span>        Unit Active State: active</span></span>
<span class="line"><span>        State Change Timestamp: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>        Inactive Exit Timestamp: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>        Active Enter Timestamp: Wed 2020-08-26 12:33:38 EDT</span></span>
<span class="line"><span>        Active Exit Timestamp: n/a</span></span>
<span class="line"><span>        Inactive Enter Timestamp: n/a</span></span>
<span class="line"><span>        May GC: no</span></span>
<span class="line"><span>&lt;截断：删除了大量的输出行&gt;</span></span></code></pre></div><p>在我的主工作站上，这个命令生成了 49680 行输出，大概 1.66MB，这个命令非常快，不需要等待。</p><p>我很喜欢为各种连接设备（如存储设备）提供的大量细节。每个 systemd 单元有一个部分，包括各种运行时、缓存、日志目录的模式、启动单元的命令行、PID、开始时间戳，以及内存和文件限制等细节。</p><p><code>systemd-analyze</code> 的手册页里展示了 <code>systemd-analyze --user dump</code> 选项，目的是显示用户管理器的内部状态。但这个选项对我来说是失败的，互联网搜索之后表明它可能有一些问题。在 systemd 里，<code>--user</code> 实例用来管理和控制处理器给每个用户的进程资源。处理能力按分给每个用户的进程都属于一个控制组，我将在以后的文章中介绍。</p><h3 id="分析图表" tabindex="-1">分析图表 <a class="header-anchor" href="#分析图表" aria-label="Permalink to “分析图表”">​</a></h3>`,23)),a("p",null,[s[11]||(s[11]=n("大多数啥都不懂的猥琐老板（PHB）和许多优秀的管理者都发现漂亮的图表比我通常喜欢的基于文本的系统性能数据更容易阅读和理解。但有时，即使是我也喜欢一个好的图表，",-1)),s[12]||(s[12]=a("code",null,"systemd-analyze",-1)),s[13]||(s[13]=n(" 提供了显示引导/启动数据的 ",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Scalable_Vector_Graphics"},{default:i(()=>[...s[10]||(s[10]=[n("SVG",-1)])]),_:1}),s[14]||(s[14]=n(" 矢量图表。",-1))]),s[73]||(s[73]=t('<p>下面的命令生成一个矢量图文件，来显示在引导和启动过程发生的事件。生成这个文件只需要几秒：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze plot &gt; /tmp/bootup.svg</span></span></code></pre></div><p>这个命令创建了一个 SVG 文件，SVG 是一个定义了一系列图形矢量的文本文件，包括 Image Viewer、Ristretto、Okular、Eye of Mate、LibreOffice Draw 在内的这些可以生成图形的应用，可以用 SVG 来创建图像。</p><p>我用 LibreOffice Draw（LCTT 译注：一个办公文档软件）来渲染一幅图形。这张图形很大，你需要放到很大才能看清细节。这里是它的一小部分：</p><p><img src="https://opensource.com/sites/default/files/uploads/bootup.svg-graph.png" alt="The bootup.svg file displayed in LibreOffice Draw." title="The bootup.svg file displayed in LibreOffice Draw."></p><p>图中时间轴上零点（0）的左边是引导阶段，零点的右边是启动阶段。这一小部分显示了内核、initrd 和 initrd 启动的进程。</p><p>这张图一目了然地显示了什么时候启动，启动需要多少时间，以及主要的依赖项。关键路径用红色高亮显示。</p>',7)),a("p",null,[s[16]||(s[16]=n("另外一个生成图形输出的命令是 ",-1)),s[17]||(s[17]=a("code",null,"systemd-analyze plot",-1)),s[18]||(s[18]=n("，它生成了 ",-1)),p(e,{href:"https://en.wikipedia.org/wiki/DOT_(graph_description_language)"},{default:i(()=>[...s[15]||(s[15]=[n("DOT",-1)])]),_:1}),s[19]||(s[19]=n(" 格式的文本依赖图。产生的数据流通过 ",-1)),s[20]||(s[20]=a("code",null,"dot",-1)),s[21]||(s[21]=n(" 工具进行处理，这是一组用来从多种类型数据中生成矢量图文件的程序。这些 SVG 文件也能被上面列出的工具处理。",-1))]),s[74]||(s[74]=t(`<p>首先，生成文件，在我的主工作站花了 9 分钟：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# time systemd-analyze dot | dot -Tsvg &gt; /tmp/test.svg</span></span>
<span class="line"><span>   Color legend: black     = Requires</span></span>
<span class="line"><span>                 dark blue = Requisite</span></span>
<span class="line"><span>                 dark grey = Wants</span></span>
<span class="line"><span>                 red       = Conflicts</span></span>
<span class="line"><span>                 green     = After</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    8m37.544s</span></span>
<span class="line"><span>user    8m35.375s</span></span>
<span class="line"><span>sys     0m0.070s</span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>我不会在这里重现输出，因为产生的图形就像一大堆意大利面条。但是你应该试试，看看我想让你看到的结果。</p><h3 id="条件" tabindex="-1">条件 <a class="header-anchor" href="#条件" aria-label="Permalink to “条件”">​</a></h3><p>在阅读 systemd-analyze(1) 的手册页时，我发现了一个更有趣的功能，但又有点通用，就是条件子命令。（是的，我确实在读手册页，而且我神奇地通过这种方式学到了很多东西！）。这个 <code>condition</code> 子命令能用来测试 systemd 单元文件中的条件和断言。</p><p>它也可以在脚本中用来评估一个或多个条件 —— 如果所有条件都满足，则返回 0；如果有条件不满足，则返回 1。在其它情况下，它都会输出其结果文本。</p><p>下面的例子来自手册页，稍微有点复杂。它测试了内核版本是否在 4.0 和 5.1 之间，主机是否使用交流电供电，系统结构是否是 ARM，以及 <code>/etc/os-release</code> 目录是否存在。我添加了 <code>echo $?</code> 来打印返回值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze condition &#39;ConditionKernelVersion = ! &lt;4.0&#39; \\</span></span>
<span class="line"><span>                    &#39;ConditionKernelVersion = &gt;=5.1&#39; \\</span></span>
<span class="line"><span>                    &#39;ConditionACPower=|false&#39; \\</span></span>
<span class="line"><span>                    &#39;ConditionArchitecture=|!arm&#39; \\</span></span>
<span class="line"><span>                    &#39;AssertPathExists=/etc/os-release&#39; ; \\</span></span>
<span class="line"><span>echo $?</span></span>
<span class="line"><span>test.service: AssertPathExists=/etc/os-release succeeded.</span></span>
<span class="line"><span>Asserts succeeded.</span></span>
<span class="line"><span>test.service: ConditionArchitecture=|!arm succeeded.</span></span>
<span class="line"><span>test.service: ConditionACPower=|false failed.</span></span>
<span class="line"><span>test.service: ConditionKernelVersion=&gt;=5.1 succeeded.</span></span>
<span class="line"><span>test.service: ConditionKernelVersion=!&lt;4.0 succeeded.</span></span>
<span class="line"><span>Conditions succeeded.</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>条件和断言的列表大约从 systemd.unit(5) 手册页的第 600 行左右开始。</p><h3 id="列出配置文件" tabindex="-1">列出配置文件 <a class="header-anchor" href="#列出配置文件" aria-label="Permalink to “列出配置文件”">​</a></h3><p><code>systemd-analyze</code> 工具提供了一种将各种配置文件的内容发送到 STDOUT 的方法，如图所示。其基本目录是 <code>/etc/</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze cat-config systemd/system/display-manager.service</span></span>
<span class="line"><span># /etc/systemd/system/display-manager.service</span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=LXDM (Lightweight X11 Display Manager)</span></span>
<span class="line"><span>#Documentation=man:lxdm(8)</span></span>
<span class="line"><span>Conflicts=getty@tty1.service</span></span>
<span class="line"><span>After=systemd-user-sessions.service getty@tty1.service plymouth-quit.service livesys-late.service</span></span>
<span class="line"><span>#Conflicts=plymouth-quit.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>ExecStart=/usr/sbin/lxdm</span></span>
<span class="line"><span>Restart=always</span></span>
<span class="line"><span>IgnoreSIGPIPE=no</span></span>
<span class="line"><span>#BusName=org.freedesktop.lxdm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>Alias=display-manager.service</span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>打了这么多字却和标准的 <code>cat</code> 命令做的差不多。我发现下一条命令小有帮助，它能在标准的 systemd 所在的位置搜索具有指定模式的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemctl cat backup*</span></span>
<span class="line"><span># /etc/systemd/system/backup.timer</span></span>
<span class="line"><span># This timer unit runs the local backup program</span></span>
<span class="line"><span># (C) David Both</span></span>
<span class="line"><span># Licensed under GPL V2</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Perform system backups</span></span>
<span class="line"><span>Requires=backup.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>Unit=backup.service</span></span>
<span class="line"><span>OnCalendar=*-*-* 00:15:30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=timers.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># /etc/systemd/system/backup.service</span></span>
<span class="line"><span># This service unit runs the rsbu backup program</span></span>
<span class="line"><span># By David Both</span></span>
<span class="line"><span># Licensed under GPL V2</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Backup services using rsbu</span></span>
<span class="line"><span>Wants=backup.timer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=oneshot</span></span>
<span class="line"><span>Environment=&quot;HOME=/root&quot;</span></span>
<span class="line"><span>ExecStart=/usr/local/bin/rsbu -bvd1</span></span>
<span class="line"><span>ExecStart=/usr/local/bin/rsbu -buvd2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@david ~]#</span></span></code></pre></div><p>这两个命令在每个文件的内容前面都有一个注释行，包含文件的完整路径和名称。</p><h3 id="单元文件检查" tabindex="-1">单元文件检查 <a class="header-anchor" href="#单元文件检查" aria-label="Permalink to “单元文件检查”">​</a></h3><p>当创建了一个新的单元文件，可以利用 <code>verify</code> 子命令帮助检查语法是否正确。它能指出来不正确的拼写，并列出缺失的服务单元。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze verify /etc/systemd/system/backup.service</span></span></code></pre></div><p>秉承 Unix/Linux 的“沉默是金”的宗旨，没有输出意味着扫描的文件中没有错误。</p><h3 id="安全性" tabindex="-1">安全性 <a class="header-anchor" href="#安全性" aria-label="Permalink to “安全性”">​</a></h3><p><code>security</code> 子命令检查指定服务的安全级别。它只能针对服务单元，其他类型的单元文件不起作用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@david ~]# systemd-analyze security display-manager</span></span>
<span class="line"><span>  NAME                                                        DESCRIPTION                                                     &gt;</span></span>
<span class="line"><span>✗ PrivateNetwork=                                             Service has access to the host&#39;s network                        &gt;</span></span>
<span class="line"><span>✗ User=/DynamicUser=                                          Service runs as root user                                       &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_SET(UID|GID|PCAP)                Service may change UID/GID identities/capabilities              &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_SYS_ADMIN                        Service has administrator privileges                            &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_SYS_PTRACE                       Service has ptrace() debugging abilities                        &gt;</span></span>
<span class="line"><span>✗ RestrictAddressFamilies=~AF_(INET|INET6)                    Service may allocate Internet sockets                           &gt;</span></span>
<span class="line"><span>✗ RestrictNamespaces=~CLONE_NEWUSER                           Service may create user namespaces                              &gt;</span></span>
<span class="line"><span>✗ RestrictAddressFamilies=~…                                  Service may allocate exotic sockets                             &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_(CHOWN|FSETID|SETFCAP)           Service may change file ownership/access mode/capabilities unres&gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_(DAC_*|FOWNER|IPC_OWNER)         Service may override UNIX file/IPC permission checks            &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_NET_ADMIN                        Service has network configuration privileges                    &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_SYS_MODULE                       Service may load kernel modules</span></span>
<span class="line"><span>&lt;截断&gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_SYS_TTY_CONFIG                   Service may issue vhangup()                                     &gt;</span></span>
<span class="line"><span>✗ CapabilityBoundingSet=~CAP_WAKE_ALARM                       Service may program timers that wake up the system              &gt;</span></span>
<span class="line"><span>✗ RestrictAddressFamilies=~AF_UNIX                            Service may allocate local sockets                              &gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>→ Overall exposure level for backup.service: 9.6 UNSAFE ?</span></span>
<span class="line"><span>lines 34-81/81 (END)</span></span></code></pre></div><p>是的，表情符是输出的一部分。但是，当然，许多服务需要几乎完全访问所有的东西，以便完成它们的工作。我针对几个服务运行了这个程序，包括我自己的备份服务；结果可能有所不同，但最底下一行似乎大多是一样的。</p><p>这个工具对于在严格的安全环境检查和修复用户空间的服务单元是很有用的。我不认为我们的大多数都能用到它。</p><h3 id="最后总结" tabindex="-1">最后总结 <a class="header-anchor" href="#最后总结" aria-label="Permalink to “最后总结”">​</a></h3><p>这个强力的工具提供了一些有趣而惊人的有用选项。本文探讨的大部分内容是关于使用 systemd-analyze 来深入了解 Linux 使用 systemd 的启动性能。它还可以分析 systemd 的其他方面。</p><p>其中有些工具的作用有限，有几个应该完全忘记。但在解决启动和其他 systemd 功能的问题时，大多数都能起到很好的作用。</p><h3 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to “资源”">​</a></h3><p>互联网上关于 systemd 有很多信息，但是很多过于简略、晦涩，甚至是误导。除了这篇文章中提到的资源外，以下网页提供了关于systemd启动的更详细和可靠的信息。这个列表在我开始写这一系列文章后有所增长，以反映我所做的研究。</p>`,29)),a("ul",null,[a("li",null,[p(e,{href:"https://man7.org/linux/man-pages/man5/systemd.unit.5.html"},{default:i(()=>[...s[22]||(s[22]=[n("systemd.unit(5) 手册页",-1)])]),_:1}),s[23]||(s[23]=n(" 包含了一份单元文件部分及其配置选项的清单，并对每个部分进行了简明的描述。",-1))]),a("li",null,[s[25]||(s[25]=n("Fedora 项目有一个很好的实用 ",-1)),p(e,{href:"https://docs.fedoraproject.org/en-US/quick-docs/understanding-and-administering-systemd/index.html"},{default:i(()=>[...s[24]||(s[24]=[n("systemd 指南",-1)])]),_:1}),s[26]||(s[26]=n("。它包含了配置、管理和维护使用 systemd 的 Fedora 计算机所需的几乎所有知识。",-1))]),a("li",null,[s[28]||(s[28]=n("Fedora 项目还有一份很好的 ",-1)),p(e,{href:"https://fedoraproject.org/wiki/SysVinit_to_Systemd_Cheatsheet"},{default:i(()=>[...s[27]||(s[27]=[n("备忘录",-1)])]),_:1}),s[29]||(s[29]=n("，将旧的 SystemV 命令与 systemd 命令进行了对照。",-1))]),a("li",null,[s[31]||(s[31]=n("Red Hat 文档包含了对 ",-1)),p(e,{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_basic_system_settings/managing-services-with-systemd_configuring-basic-system-settings#Managing_Services_with_systemd-Unit_File_Structure"},{default:i(()=>[...s[30]||(s[30]=[n("单元文件结构",-1)])]),_:1}),s[32]||(s[32]=n(" 的详细描述和其他重要的信息。",-1))]),a("li",null,[s[34]||(s[34]=n("关于 systemd 技术的细节和创建它的原因，可以去看 Freedesktop.org ",-1)),p(e,{href:"https://www.freedesktop.org/wiki/Software/systemd/"},{default:i(()=>[...s[33]||(s[33]=[n("systemd 详述",-1)])]),_:1}),s[35]||(s[35]=n("。",-1))]),a("li",null,[p(e,{href:"http://Linux.com"},{default:i(()=>[...s[36]||(s[36]=[n("Linux.com",-1)])]),_:1}),s[38]||(s[38]=n(" 的“更多 systemd 乐趣”提供了很多高级的 systemd ",-1)),p(e,{href:"https://www.linux.com/training-tutorials/more-systemd-fun-blame-game-and-stopping-services-prejudice/"},{default:i(()=>[...s[37]||(s[37]=[n("信息和技巧",-1)])]),_:1}),s[39]||(s[39]=n("。",-1))])]),s[75]||(s[75]=a("p",null,"此外，systemd 设计者和主要开发者 Lennart Poettering 也为 Linux 系统管理员撰写了一系列深度技术文档，尽管这些文章写于 2010 年 4 月到 2011 年 9 月，现在看也是非常适应时宜。关于 systemd 及其生态系统的其他好文章，大部分都是基于这些文章的。",-1)),a("ul",null,[a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/systemd.html"},{default:i(()=>[...s[40]||(s[40]=[n("Rethinking PID 1",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/systemd-for-admins-1.html"},{default:i(()=>[...s[41]||(s[41]=[n("systemd for Administrators, Part I",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/systemd-for-admins-2.html"},{default:i(()=>[...s[42]||(s[42]=[n("systemd for Administrators, Part II",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/systemd-for-admins-3.html"},{default:i(()=>[...s[43]||(s[43]=[n("systemd for Administrators, Part III",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/systemd-for-admins-4.html"},{default:i(()=>[...s[44]||(s[44]=[n("systemd for Administrators, Part IV",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/three-levels-of-off.html"},{default:i(()=>[...s[45]||(s[45]=[n("systemd for Administrators, Part V",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/changing-roots"},{default:i(()=>[...s[46]||(s[46]=[n("systemd for Administrators, Part VI",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/blame-game.html"},{default:i(()=>[...s[47]||(s[47]=[n("systemd for Administrators, Part VII",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/the-new-configuration-files.html"},{default:i(()=>[...s[48]||(s[48]=[n("systemd for Administrators, Part VIII",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/on-etc-sysinit.html"},{default:i(()=>[...s[49]||(s[49]=[n("systemd for Administrators, Part IX",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/instances.html"},{default:i(()=>[...s[50]||(s[50]=[n("systemd for Administrators, Part X",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://0pointer.de/blog/projects/inetd.html"},{default:i(()=>[...s[51]||(s[51]=[n("systemd for Administrators, Part XI",-1)])]),_:1})])]),s[76]||(s[76]=a("hr",null,null,-1)),a("p",null,[s[53]||(s[53]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/20/9/systemd-startup-configuration"},{default:i(()=>[...s[52]||(s[52]=[n("https://opensource.com/article/20/9/systemd-startup-configuration",-1)])]),_:1})]),a("p",null,[s[58]||(s[58]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/dboth"},{default:i(()=>[...s[54]||(s[54]=[n("David Both",-1)])]),_:1}),s[59]||(s[59]=n(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[55]||(s[55]=[n("lujun9972",-1)])]),_:1}),s[60]||(s[60]=n(" 译者：",-1)),p(e,{href:"https://github.com/jiamn"},{default:i(()=>[...s[56]||(s[56]=[n("jiamn",-1)])]),_:1}),s[61]||(s[61]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[57]||(s[57]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[64]||(s[64]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[62]||(s[62]=[n("LCTT",-1)])]),_:1}),s[65]||(s[65]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[63]||(s[63]=[n("Linux中国",-1)])]),_:1}),s[66]||(s[66]=n(" 荣誉推出",-1))])])}const T=l(m,[["render",u]]);export{v as __pageData,T as default};
