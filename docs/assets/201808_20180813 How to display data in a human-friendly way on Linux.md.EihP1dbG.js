import{_ as l,a0 as t,w as d,s as r,ao as o,I as i,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"在 Linux 中如何以人性化的方式显示数据 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中如何以人性化的方式显示数据 | LCTT (201808) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中如何以人性化的方式显示数据 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中如何以人性化的方式显示数据 | LCTT (201808) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201808/20180813 How to display data in a human-friendly way on Linux","title":"在 Linux 中如何以人性化的方式显示数据","tag":"201808","desc":""},"relativePath":"201808/20180813 How to display data in a human-friendly way on Linux.md","filePath":"[post].md"}'),c={name:"201808/20180813 How to display data in a human-friendly way on Linux.md"};function h(u,s,g,k,b,f){const n=t("Link");return d(),r("div",null,[s[20]||(s[20]=o(`<h1 id="在-linux-中如何以人性化的方式显示数据" tabindex="-1">在 Linux 中如何以人性化的方式显示数据 <a class="header-anchor" href="#在-linux-中如何以人性化的方式显示数据" aria-label="Permalink to “在 Linux 中如何以人性化的方式显示数据”">​</a></h1><blockquote><p>许多 Linux 命令现在都有使其输出更易于理解的选项。让我们了解一些可以让我们心爱的操作系统更友好的东西。</p></blockquote><p><img src="https://images.idgesg.net/images/article/2018/08/smile-face-on-hand-100767756-large.jpg" alt=""></p><p>不是每个人都以二进制方式思考，他们不想在大脑中给大数字插入逗号来了解文件的大小。因此，Linux 命令在过去的几十年里不断发展，以更人性化的方式向用户显示信息，这一点也不奇怪。在今天的文章中，我们将看一看各种命令所提供的一些选项，它们使得数据变得更容易理解。</p><h3 id="为什么默认显示不更友好一些" tabindex="-1">为什么默认显示不更友好一些？ <a class="header-anchor" href="#为什么默认显示不更友好一些" aria-label="Permalink to “为什么默认显示不更友好一些？”">​</a></h3><p>如果你想知道为什么默认不显示得更人性化，毕竟，我们人类才是计算机的默认用户啊。你可能会问自己：“为什么我们不竭尽全力输出对每个人都有意义的命令的响应？”主要的答案是：改变命令的默认输出可能会干扰许多其它进程，这些进程是在期望默认响应之上构建的。其它的工具，以及过去几十年开发的脚本，如果突然以一种完全不同的格式输出，而不是它们过去所期望的那样，可能会被一种非常丑陋的方式破坏。</p><p>说真的，也许我们中的一些人可能更愿意看文件大小中的所有数字，即 1338277310 而不是 1.3G。在任何情况下，切换默认习惯都可能造成破坏，但是为更加人性化的响应提供一些简单的选项只需要让我们学习一些命令选项而已。</p><h3 id="可以显示人性化数据的命令" tabindex="-1">可以显示人性化数据的命令 <a class="header-anchor" href="#可以显示人性化数据的命令" aria-label="Permalink to “可以显示人性化数据的命令”">​</a></h3><p>有哪些简单的选项可以使 Unix 命令的输出更容易解析呢？让我们来看一些命令。</p><h4 id="top" tabindex="-1">top <a class="header-anchor" href="#top" aria-label="Permalink to “top”">​</a></h4><p>你可能没有注意到这个命令，但是在 top 命令中，你可以通过输入 <code>E</code>（大写字母 E）来更改显示全部内存使用的方式。连续按下将数字显示从 KiB 到 MiB，再到 GiB，接着是 TiB、PiB、EiB，最后回到 KiB。</p><p>认识这些单位吧？这里有一组定义：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>2\`10 = 1,024 = 1 KiB (kibibyte)</span></span>
<span class="line"><span>2\`20 = 1,048,576 = 1 MiB (mebibyte)</span></span>
<span class="line"><span>2\`30 = 1,073,741,824 = 1 GiB (gibibyte)</span></span>
<span class="line"><span>2\`40 = 1,099,511,627,776 = 1 TiB (tebibyte)</span></span>
<span class="line"><span>2\`50 = 1,125,899,906,842,624 = PiB (pebibyte)</span></span>
<span class="line"><span>2\`60 = 1,152,921,504,606,846,976 = EiB (exbibyte)</span></span>
<span class="line"><span>2\`70 = 1,180,591,620,717,411,303,424 = 1 ZiB (zebibyte)</span></span>
<span class="line"><span>2\`80 = 1,208,925,819,614,629,174,706,176 = 1 YiB (yobibyte)</span></span></code></pre></div><p>这些单位与千字节（KB）、兆字节（MB）和千兆字节（GB）密切相关。虽然它们很接近，但是它们之间仍有很大的区别：一组是基于 10 的幂，另一组是基于 2 的幂。例如，比较千字节和千兆字节，我们可以看看它们不同点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>KB = 1000 = 10\`3</span></span>
<span class="line"><span>KiB = 1024 = 2\`10</span></span></code></pre></div><p>以下是 <code>top</code> 命令输出示例，使用 KiB 为单位默认显示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>top - 10:49:06 up 5 days, 35 min,  1 user,  load average: 0.05, 0.04, 0.01</span></span>
<span class="line"><span>Tasks: 158 total,   1 running, 118 sleeping,   0 stopped,   0 zombie</span></span>
<span class="line"><span>%Cpu(s):  0.0 us,  0.2 sy,  0.0 ni, 99.8 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span></span>
<span class="line"><span>KiB Mem :  6102680 total,  4634980 free,   392244 used,  1075456 buff/cache</span></span>
<span class="line"><span>KiB Swap:  2097148 total,  2097148 free,        0 used.  5407432 avail Mem</span></span></code></pre></div><p>在按下 <code>E</code> 之后，单位变成了 MiB：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>top - 10:49:31 up 5 days, 36 min,  1 user,  load average: 0.03, 0.04, 0.01</span></span>
<span class="line"><span>Tasks: 158 total,   2 running, 118 sleeping,   0 stopped,   0 zombie</span></span>
<span class="line"><span>%Cpu(s):  0.0 us,  0.6 sy,  0.0 ni, 99.4 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span></span>
<span class="line"><span>MiB Mem : 5959.648 total, 4526.348 free,  383.055 used, 1050.246 buff/cache</span></span>
<span class="line"><span>MiB Swap: 2047.996 total, 2047.996 free,    0.000 used. 5280.684 avail Mem</span></span></code></pre></div><p>再次按下 <code>E</code>，单位变为 GiB：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>top - 10:49:49 up 5 days, 36 min,  1 user,  load average: 0.02, 0.03, 0.01</span></span>
<span class="line"><span>Tasks: 158 total,   1 running, 118 sleeping,   0 stopped,   0 zombie</span></span>
<span class="line"><span>%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span></span>
<span class="line"><span>GiB Mem :    5.820 total,    4.420 free,    0.374 used,    1.026 buff/cache</span></span>
<span class="line"><span>GiB Swap:    2.000 total,    2.000 free,    0.000 used.    5.157 avail Mem</span></span></code></pre></div><p>你还可以通过按字母 <code>e</code> 来更改为显示每个进程使用内存的数字单位。它将从默认的 KiB 到 MiB，再到 GiB、TiB，接着到 PiB（估计你能看到小数点后的很多 0），然后返回 KiB。下面是按了一下 <code>e</code> 之后的 <code>top</code> 输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>top - 08:45:28 up 4 days, 22:32,  1 user,  load average: 0.02, 0.03, 0.00</span></span>
<span class="line"><span>Tasks: 167 total,   1 running, 118 sleeping,   0 stopped,   0 zombie</span></span>
<span class="line"><span>%Cpu(s):  0.2 us,  0.0 sy,  0.0 ni, 99.8 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span></span>
<span class="line"><span>KiB Mem :  6102680 total,  4641836 free,   393348 used,  1067496 buff/cache</span></span>
<span class="line"><span>KiB Swap:  2097148 total,  2097148 free,        0 used.  5406396 avail Mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND</span></span>
<span class="line"><span>  784 root      20   0  543.2m  26.8m  16.1m S   0.9  0.5   0:22.20 snapd</span></span>
<span class="line"><span>  733 root      20   0  107.8m   2.0m   1.8m S   0.4  0.0   0:18.49 irqbalance</span></span>
<span class="line"><span>22574 shs       20   0  107.5m   5.5m   4.6m S   0.4  0.1   0:00.09 sshd</span></span>
<span class="line"><span>    1 root      20   0  156.4m   9.3m   6.7m S   0.0  0.2   0:05.59 systemd</span></span></code></pre></div><h4 id="du" tabindex="-1">du <a class="header-anchor" href="#du" aria-label="Permalink to “du”">​</a></h4><p><code>du</code> 命令显示磁盘空间文件或目录使用了多少，如果使用 <code>-h</code> 选项，则将输出大小调整为最合适的单位。默认情况下，它以千字节（KB）为单位。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ du camper*</span></span>
<span class="line"><span>360     camper_10.jpg</span></span>
<span class="line"><span>5684    camper.jpg</span></span>
<span class="line"><span>240     camper_small.jpg</span></span>
<span class="line"><span>$ du -h camper*</span></span>
<span class="line"><span>360K    camper_10.jpg</span></span>
<span class="line"><span>5.6M    camper.jpg</span></span>
<span class="line"><span>240K    camper_small.jpg</span></span></code></pre></div><h4 id="df" tabindex="-1">df <a class="header-anchor" href="#df" aria-label="Permalink to “df”">​</a></h4><p><code>df</code> 命令也提供了一个 <code>-h</code> 选项。请注意在下面的示例中是如何以千兆字节（GB）和兆字节（MB）输出的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ df -h | grep -v loop</span></span>
<span class="line"><span>Filesystem      Size  Used Avail Use% Mounted on</span></span>
<span class="line"><span>udev            2.9G     0  2.9G   0% /dev</span></span>
<span class="line"><span>tmpfs           596M  1.7M  595M   1% /run</span></span>
<span class="line"><span>/dev/sda1       110G  9.0G   95G   9% /</span></span>
<span class="line"><span>tmpfs           3.0G     0  3.0G   0% /dev/shm</span></span>
<span class="line"><span>tmpfs           5.0M  4.0K  5.0M   1% /run/lock</span></span>
<span class="line"><span>tmpfs           3.0G     0  3.0G   0% /sys/fs/cgroup</span></span>
<span class="line"><span>tmpfs           596M   16K  596M   1% /run/user/121</span></span>
<span class="line"><span>/dev/sdb2       457G   73M  434G   1% /apps</span></span>
<span class="line"><span>tmpfs           596M     0  596M   0% /run/user/1000</span></span></code></pre></div><p>下面的命令使用了 <code>-h</code> 选项，同时使用 <code>-T</code> 选项来显示我们正在查看的文件系统的类型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ df -hT /mnt2</span></span>
<span class="line"><span>Filesystem     Type  Size  Used Avail Use% Mounted on</span></span>
<span class="line"><span>/dev/sdb2      ext4  457G   73M  434G   1% /apps</span></span></code></pre></div><h4 id="ls" tabindex="-1">ls <a class="header-anchor" href="#ls" aria-label="Permalink to “ls”">​</a></h4><p>即使是 <code>ls</code>，它也为我们提供了调整大小显示的选项，保证是最合理的单位。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l camper*</span></span>
<span class="line"><span>-rw-rw-r-- 1 shs shs  365091 Jul 14 19:42 camper_10.jpg</span></span>
<span class="line"><span>-rw-rw-r-- 1 shs shs 5818597 Jul 14 19:41 camper.jpg</span></span>
<span class="line"><span>-rw-rw-r-- 1 shs shs  241844 Jul 14 19:45 camper_small.jpg</span></span>
<span class="line"><span>$ ls -lh camper*</span></span>
<span class="line"><span>-rw-rw-r-- 1 shs shs 357K Jul 14 19:42 camper_10.jpg</span></span>
<span class="line"><span>-rw-rw-r-- 1 shs shs 5.6M Jul 14 19:41 camper.jpg</span></span>
<span class="line"><span>-rw-rw-r-- 1 shs shs 237K Jul 14 19:45 camper_small.jpg</span></span></code></pre></div><h4 id="free" tabindex="-1">free <a class="header-anchor" href="#free" aria-label="Permalink to “free”">​</a></h4><p><code>free</code> 命令允许你以字节（B），千字节（KB），兆字节（MB）和千兆字节（GB）为单位查看内存使用情况。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ free -b</span></span>
<span class="line"><span>              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span>Mem:     6249144320   393076736  4851625984     1654784  1004441600  5561253888</span></span>
<span class="line"><span>Swap:    2147479552           0  2147479552</span></span>
<span class="line"><span>$ free -k</span></span>
<span class="line"><span>              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span>Mem:        6102680      383836     4737924        1616      980920     5430932</span></span>
<span class="line"><span>Swap:       2097148           0     2097148</span></span>
<span class="line"><span>$ free -m</span></span>
<span class="line"><span>              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span>Mem:           5959         374        4627           1         957        5303</span></span>
<span class="line"><span>Swap:          2047           0        2047</span></span>
<span class="line"><span>$ free -g</span></span>
<span class="line"><span>              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span>Mem:              5           0           4           0           0           5</span></span>
<span class="line"><span>Swap:             1           0           1</span></span></code></pre></div><h4 id="tree" tabindex="-1">tree <a class="header-anchor" href="#tree" aria-label="Permalink to “tree”">​</a></h4><p>虽然 <code>tree</code> 命令与文件或内存计算无关，但它也提供了非常人性化的文件视图，它分层显示文件以说明文件是如何组织的。当你试图了解如何安排目录内容时，这种显示方式非常有用。（LCTT 译注：也可以看看 <code>pstree</code>，它以树状结构显示进程树。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tree</span></span>
<span class="line"><span>.g to </span></span>
<span class="line"><span>├── 123</span></span>
<span class="line"><span>├── appended.png </span></span>
<span class="line"><span>├── appts</span></span>
<span class="line"><span>├── arrow.jpg</span></span>
<span class="line"><span>├── arrow.png</span></span>
<span class="line"><span>├── bin</span></span>
<span class="line"><span>│   ├── append</span></span>
<span class="line"><span>│   ├── cpuhog1</span></span>
<span class="line"><span>│   ├── cpuhog2</span></span>
<span class="line"><span>│   ├── loop</span></span>
<span class="line"><span>│   ├── mkhome</span></span>
<span class="line"><span>│   ├── runme</span></span></code></pre></div><h4 id="stat" tabindex="-1">stat <a class="header-anchor" href="#stat" aria-label="Permalink to “stat”">​</a></h4><p><code>stat</code> 命令是另一个以非常人性化的格式显示信息的命令。它提供了更多关于文件的元数据，包括文件大小（以字节和块为单位）、文件类型、设备和 inode（索引节点）、文件所有者和组（名称和数字 ID）、以数字和 rwx 格式显示的文件权限以及文件的最后访问和修改日期。在某些情况下，它也可能显示最初创建文件的时间。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ stat camper*</span></span>
<span class="line"><span>  File: camper_10.jpg</span></span>
<span class="line"><span>  Size: 365091          Blocks: 720        IO Block: 4096   regular file</span></span>
<span class="line"><span>Device: 801h/2049d      Inode: 796059      Links: 1</span></span>
<span class="line"><span>Access: (0664/-rw-rw-r--)  Uid: ( 1000/     shs)   Gid: ( 1000/     shs)</span></span>
<span class="line"><span>Access: 2018-07-19 18:56:31.841013385 -0400</span></span>
<span class="line"><span>Modify: 2018-07-14 19:42:25.230519509 -0400</span></span>
<span class="line"><span>Change: 2018-07-14 19:42:25.230519509 -0400</span></span>
<span class="line"><span> Birth: -</span></span>
<span class="line"><span>  File: camper.jpg</span></span>
<span class="line"><span>  Size: 5818597         Blocks: 11368      IO Block: 4096   regular file</span></span>
<span class="line"><span>Device: 801h/2049d      Inode: 796058      Links: 1</span></span>
<span class="line"><span>Access: (0664/-rw-rw-r--)  Uid: ( 1000/     shs)   Gid: ( 1000/     shs)</span></span>
<span class="line"><span>Access: 2018-07-19 18:56:31.845013872 -0400</span></span>
<span class="line"><span>Modify: 2018-07-14 19:41:46.882024039 -0400</span></span>
<span class="line"><span>Change: 2018-07-14 19:41:46.882024039 -0400</span></span>
<span class="line"><span> Birth: -</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>Linux 命令提供了许多选项，可以让用户更容易理解或比较它们的输出。对于许多命令，<code>-h</code> 选项会显示更友好的输出格式。对于其它的，你可能必须通过使用某些特定选项或者按下某个键来查看你希望的输出。我希望这其中一些选项会让你的 Linux 系统看起来更友好一点。</p>`,45)),i("p",null,[s[2]||(s[2]=a("加入",-1)),p(n,{href:"https://www.facebook.com/NetworkWorld/"},{default:e(()=>[...s[0]||(s[0]=[a("Facebook",-1)])]),_:1}),s[3]||(s[3]=a(" 和 ",-1)),p(n,{href:"https://www.linkedin.com/company/network-world"},{default:e(()=>[...s[1]||(s[1]=[a("LinkedIn",-1)])]),_:1}),s[4]||(s[4]=a(" 上的网络世界社区，一起来评论重要的话题吧。",-1))]),s[21]||(s[21]=i("hr",null,null,-1)),i("p",null,[s[6]||(s[6]=a("via: ",-1)),p(n,{href:"https://www.networkworld.com/article/3296631/linux/displaying-data-in-a-human-friendly-way-on-linux.html"},{default:e(()=>[...s[5]||(s[5]=[a("https://www.networkworld.com/article/3296631/linux/displaying-data-in-a-human-friendly-way-on-linux.html",-1)])]),_:1})]),i("p",null,[s[11]||(s[11]=a("作者：",-1)),p(n,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[7]||(s[7]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[12]||(s[12]=a(" 选题：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[8]||(s[8]=[a("lujun9972",-1)])]),_:1}),s[13]||(s[13]=a(" 译者：",-1)),p(n,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[9]||(s[9]=[a("MjSeven",-1)])]),_:1}),s[14]||(s[14]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[17]||(s[17]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[15]||(s[15]=[a("LCTT",-1)])]),_:1}),s[18]||(s[18]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[16]||(s[16]=[a("Linux中国",-1)])]),_:1}),s[19]||(s[19]=a(" 荣誉推出",-1))])])}const x=l(c,[["render",h]]);export{w as __pageData,x as default};
