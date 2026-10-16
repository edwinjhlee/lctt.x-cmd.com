import{_ as l,a0 as t,w as o,s as c,ao as d,I as i,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"用 bmon 查看网络带宽使用情况 | LCTT x X-CMD","titleTemplate":false,"description":"用 bmon 查看网络带宽使用情况 | LCTT (201911) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 bmon 查看网络带宽使用情况 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 bmon 查看网络带宽使用情况 | LCTT (201911) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201911/20191030 Viewing network bandwidth usage with bmon","title":"用 bmon 查看网络带宽使用情况","tag":"201911","desc":""},"relativePath":"201911/20191030 Viewing network bandwidth usage with bmon.md","filePath":"[post].md"}'),r={name:"201911/20191030 Viewing network bandwidth usage with bmon.md"};function q(h,s,b,g,u,k){const a=t("Link");return o(),c("div",null,[s[15]||(s[15]=d(`<h1 id="用-bmon-查看网络带宽使用情况" tabindex="-1">用 bmon 查看网络带宽使用情况 <a class="header-anchor" href="#用-bmon-查看网络带宽使用情况" aria-label="Permalink to “用 bmon 查看网络带宽使用情况”">​</a></h1><blockquote><p>介绍一下 bmon，这是一个监视和调试工具，可捕获网络统计信息并使它们易于理解。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/201911/07/010237a8gb5oqddvl3bnd0.jpg" alt=""></p><p><code>bmon</code> 是一种监视和调试工具，可在终端窗口中捕获网络统计信息，并提供了如何以易于理解的形式显示以及显示多少数据的选项。</p><p>要检查系统上是否安装了 <code>bmon</code>，请使用 <code>which</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ which bmon</span></span>
<span class="line"><span>/usr/bin/bmon</span></span></code></pre></div><h3 id="获取-bmon" tabindex="-1">获取 bmon <a class="header-anchor" href="#获取-bmon" aria-label="Permalink to “获取 bmon”">​</a></h3><p>在 Debian 系统上，使用 <code>sudo apt-get install bmon</code> 安装该工具。</p><p>对于 Red Hat 和相关发行版，你可以使用 <code>yum install bmon</code> 或 <code>sudo dnf install bmon</code> 进行安装。或者，你可能必须使用更复杂的安装方式，例如使用以下命令，这些命令首先使用 root 帐户或 sudo 来设置所需的 <code>libconfuse</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># wget https://github.com/martinh/libconfuse/releases/download/v3.2.2/confuse-3.2.2.zip</span></span>
<span class="line"><span># unzip confuse-3.2.2.zip &amp;&amp; cd confuse-3.2.2</span></span>
<span class="line"><span># sudo PATH=/usr/local/opt/gettext/bin:$PATH ./configure</span></span>
<span class="line"><span># make</span></span>
<span class="line"><span># make install</span></span>
<span class="line"><span># git clone https://github.com/tgraf/bmon.git &amp;&amp;ammp; cd bmon</span></span>
<span class="line"><span># ./autogen.sh</span></span>
<span class="line"><span># ./configure</span></span>
<span class="line"><span># make</span></span>
<span class="line"><span># sudo make install</span></span></code></pre></div><p>前面五行会安装 <code>libconfuse</code>，而后面五行会获取并安装 <code>bmon</code> 本身。</p><h3 id="使用-bmon" tabindex="-1">使用 bmon <a class="header-anchor" href="#使用-bmon" aria-label="Permalink to “使用 bmon”">​</a></h3><p>启动 <code>bmon</code> 的最简单方法是在命令行中键入 <code>bmon</code>。根据你正在使用的窗口的大小，你能够查看并显示各种数据。</p><p>显示区域的顶部将显示你的网络接口的统计信息：环回接口（lo）和可通过网络访问的接口（例如 eth0）。如果你的终端窗口只有区区几行高，下面这就是你可能会看到的所有内容，它将看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lo bmon 4.0</span></span>
<span class="line"><span>Interfaces                     x RX bps pps     %x TX bps pps     %</span></span>
<span class="line"><span> &gt;lo                           x      4B0      x0     0 0     4B        0</span></span>
<span class="line"><span>    qdisc none (noqueue) x      0 0      x      0 0</span></span>
<span class="line"><span>  enp0s25                      x    244B0      x1     0 0   470B        2</span></span>
<span class="line"><span>    qdisc none (fq_codel)      x      0 0      x      0 0   462B        2</span></span>
<span class="line"><span>q Increase screen height to see graphical statistics qq</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>q Press d to enable detailed statistics qq</span></span>
<span class="line"><span>q Press i to enable additional information qq</span></span>
<span class="line"><span> Wed Oct 23 14:36:27 2019 Press ? for help</span></span></code></pre></div><p>在此示例中，网络接口是 enp0s25。请注意列出的接口下方的有用的 “Increase screen height” 提示。拉伸屏幕以增加足够的行（无需重新启动 bmon），你将看到一些图形：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Interfaces                     x RX bps       pps     %x TX bps       pps     %</span></span>
<span class="line"><span> &gt;lo                           x      0         0      x      0         0</span></span>
<span class="line"><span>    qdisc none (noqueue)       x      0         0      x      0         0</span></span>
<span class="line"><span>  enp0s25                      x    253B        3      x   2.65KiB      6</span></span>
<span class="line"><span>    qdisc none (fq_codel)      x      0         0      x   2.62KiB      6</span></span>
<span class="line"><span>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqvqqqqqqqqqqqqqqqqqqqqqqqvqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</span></span>
<span class="line"><span>                              (RX Bytes/second)</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>         1   5   10   15   20   25   30   35   40   45   50   55   60</span></span>
<span class="line"><span>                              (TX Bytes/second)</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>    0.00 ............................................................</span></span>
<span class="line"><span>         1   5   10   15   20   25   30   35   40   45   50   55   60</span></span></code></pre></div><p>但是请注意，该图形未显示值。这是因为它正在显示环回 “&gt;lo” 接口。按下箭头键指向公共网络接口，你将看到一些流量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Interfaces                     x RX bps       pps     %x TX bps       pps     %</span></span>
<span class="line"><span>  lo                           x      0         0      x      0         0</span></span>
<span class="line"><span>    qdisc none (noqueue)       x      0         0      x      0         0</span></span>
<span class="line"><span> &gt;enp0s25                      x    151B        2      x   1.61KiB      3</span></span>
<span class="line"><span>    qdisc none (fq_codel)      x      0         0      x   1.60KiB      3</span></span>
<span class="line"><span>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqvqqqqqqqqqqqqqqqqqqqqqqqvqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</span></span>
<span class="line"><span>       B                      (RX Bytes/second)</span></span>
<span class="line"><span>  635.00 ...............................|............................</span></span>
<span class="line"><span>  529.17 .....|.........................|....|.......................</span></span>
<span class="line"><span>  423.33 .....|................|..|..|..|..|.|.......................</span></span>
<span class="line"><span>  317.50 .|..||.|..||.|..|..|..|..|..|..||.||||......................</span></span>
<span class="line"><span>  211.67 .|..||.|..||.|..||||.||.|||.||||||||||......................</span></span>
<span class="line"><span>  105.83 ||||||||||||||||||||||||||||||||||||||......................</span></span>
<span class="line"><span>         1   5   10   15   20   25   30   35   40   45   50   55   60</span></span>
<span class="line"><span>     KiB                      (TX Bytes/second)</span></span>
<span class="line"><span>    4.59 .....................................|......................</span></span>
<span class="line"><span>    3.83 .....................................|......................</span></span>
<span class="line"><span>    3.06 ....................................||......................</span></span>
<span class="line"><span>    2.30 ....................................||......................</span></span>
<span class="line"><span>    1.53 |||..............|..|||.|...|.|||.||||......................</span></span>
<span class="line"><span>    0.77 ||||||||||||||||||||||||||||||||||||||......................</span></span>
<span class="line"><span>         1   5   10   15   20   25   30   35   40   45   50   55   60</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>q Press d to enable detailed statistics qq</span></span>
<span class="line"><span>q Press i to enable additional information qq</span></span>
<span class="line"><span> Wed Oct 23 16:42:06 2019 Press ? for help</span></span></code></pre></div><p>通过更改接口，你可以查看显示了网络流量的图表。但是请注意，默认值是按每秒字节数显示的。要按每秒位数来显示，你可以使用 <code>bmon -b</code> 启动该工具。</p><p>如果你的窗口足够大并按下 <code>d</code> 键，则可以显示有关网络流量的详细统计信息。你看到的统计信息示例如下所示。由于其宽度太宽，该显示分为左右两部分。</p><p>左侧：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>RX        TX   │                  RX      TX   │</span></span>
<span class="line"><span> Bytes          11.26MiB  11.26MiB│ Packets       25.91K  25.91K  │</span></span>
<span class="line"><span> Collisions         -         0   │ Compressed        0       0   │</span></span>
<span class="line"><span> Errors             0         0   │ FIFO Error        0       0   │</span></span>
<span class="line"><span> ICMPv6             2         2   │ ICMPv6 Checksu    0       -   │</span></span>
<span class="line"><span> Ip6 Broadcast      0         0   │ Ip6 Broadcast     0       0   │</span></span>
<span class="line"><span> Ip6 Delivers       8         -   │ Ip6 ECT(0) Pac    0       -   │</span></span>
<span class="line"><span> Ip6 Header Err     0         -   │ Ip6 Multicast     0     152B  │</span></span>
<span class="line"><span> Ip6 Non-ECT Pa     8         -   │ Ip6 Reasm/Frag    0       0   │</span></span>
<span class="line"><span> Ip6 Reassembly     0         -   │ Ip6 Too Big Er    0       -   │</span></span>
<span class="line"><span> Ip6Discards        0         0   │ Ip6Octets       530B    530B  │</span></span>
<span class="line"><span> Missed Error       0         -   │ Multicast         -       0   │</span></span>
<span class="line"><span> Window Error       -         0   │                               │</span></span></code></pre></div><p>右侧：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>│                  RX      TX   │                  RX      TX</span></span>
<span class="line"><span>│ Abort Error       -       0   │ Carrier Error     -       0</span></span>
<span class="line"><span>│ CRC Error         0       -   │ Dropped           0       0</span></span>
<span class="line"><span>│ Frame Error       0       -   │ Heartbeat Erro    -</span></span>
<span class="line"><span>│ ICMPv6 Errors     0       0   │ Ip6 Address Er    0       -</span></span>
<span class="line"><span>│ Ip6 CE Packets    0       -   │ Ip6 Checksum E    0       -</span></span>
<span class="line"><span>│ Ip6 ECT(1) Pac    0       -   │ Ip6 Forwarded     -       0</span></span>
<span class="line"><span>│ Ip6 Multicast     0       2   │ Ip6 No Route      0       0</span></span>
<span class="line"><span>│ Ip6 Reasm/Frag    0       0   │ Ip6 Reasm/Frag    0       0</span></span>
<span class="line"><span>│ Ip6 Truncated     0       -   │ Ip6 Unknown Pr    0       -</span></span>
<span class="line"><span>│ Ip6Pkts           8       8   │ Length Error      0</span></span>
<span class="line"><span>│ No Handler        0       -   │ Over Error        0       -</span></span></code></pre></div><p>如果按下 <code>i</code> 键，将显示网络接口上的其他信息。</p><p>左侧：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>MTU                        1500 | Flags    broadcast,multicast,up |</span></span>
<span class="line"><span>Address       00:1d:09:77:9d:08 | Broadcast ff:ff:ff:ff:ff:ff     |</span></span>
<span class="line"><span>Family                   unspec | Alias                           |</span></span></code></pre></div><p>右侧：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>| Operstate                 up | IfIndex                   2 |</span></span>
<span class="line"><span>| Mode                 default | TXQlen                 1000 |</span></span>
<span class="line"><span>| Qdisc               fq_codel |</span></span></code></pre></div><p>如果你按下 <code>?</code> 键，将会出现一个帮助菜单，其中简要介绍了如何在屏幕上移动光标、选择要显示的数据以及控制图形如何显示。</p><p>要退出 <code>bmon</code>，输入 <code>q</code>，然后输入 <code>y</code> 以响应提示来确认退出。</p><p>需要注意的一些重要事项是：</p><ul><li><code>bmon</code> 会将其显示调整为终端窗口的大小</li><li>显示区域底部显示的某些选项仅在窗口足够大可以容纳数据时才起作用</li><li>除非你使用 <code>-R</code>（例如 <code>bmon -R 5</code>）来减慢显示速度，否则每秒更新一次显示</li></ul><hr>`,35)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://www.networkworld.com/article/3447936/viewing-network-bandwidth-usage-with-bmon.html"},{default:e(()=>[...s[0]||(s[0]=[n("https://www.networkworld.com/article/3447936/viewing-network-bandwidth-usage-with-bmon.html",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[2]||(s[2]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[4]||(s[4]=[n("wxy",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const w=l(r,[["render",q]]);export{x as __pageData,w as default};
