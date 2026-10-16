import{_ as l,a0 as c,w as o,s as d,ao as t,I as e,x as n,a1 as p,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"如何使用 lshw 查看 Linux 设备信息 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 lshw 查看 Linux 设备信息 | LCTT (202010) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 lshw 查看 Linux 设备信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 lshw 查看 Linux 设备信息 | LCTT (202010) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202010/20200928 How to view information on your Linux devices with lshw","title":"如何使用 lshw 查看 Linux 设备信息","tag":"202010","desc":""},"relativePath":"202010/20200928 How to view information on your Linux devices with lshw.md","filePath":"[post].md"}'),r={name:"202010/20200928 How to view information on your Linux devices with lshw.md"};function u(h,s,g,m,b,k){const a=c("Link");return o(),d("div",null,[s[15]||(s[15]=t(`<h1 id="如何使用-lshw-查看-linux-设备信息" tabindex="-1">如何使用 lshw 查看 Linux 设备信息 <a class="header-anchor" href="#如何使用-lshw-查看-linux-设备信息" aria-label="Permalink to “如何使用 lshw 查看 Linux 设备信息”">​</a></h1><blockquote><p>Linux 系统上的 lshw 命令提供的系统设备信息比我们大多数人想象的要多得多。</p></blockquote><p><img src="https://images.idgesg.net/images/article/2020/02/kali_linux_tools_abstract_gears_binary_data_by_nevarpp_gettyimages-688718788_2400x1600-100832674-large.jpg" alt="Kali Linux logo / gears / binary data"></p><p>虽然 <code>lshw</code> 命令（<ruby>列出硬件<rt>list hardware</rt></ruby>，读作 “ls hardware”）远不是每个人最先学会的 50 个 Linux 命令之一，但它可以提供很多系统硬件的有用信息。</p><p>它以一种相当易于理解的格式提取出可能比你知道的更多的信息。在看到描述、（设备）逻辑名称、大小等以后，你可能会理解到自己能获得多少信息。</p><p>这篇文章会研究 <code>lshw</code> 给出的信息，但侧重于磁盘及相关硬件。下面是 <code>lshw</code> 的输出示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo lshw -C disk</span></span>
<span class="line"><span>  *-disk:0</span></span>
<span class="line"><span>       description: SCSI Disk</span></span>
<span class="line"><span>       product: Card Reader-1</span></span>
<span class="line"><span>       vendor: JIE LI</span></span>
<span class="line"><span>       physical id: 0.0.0</span></span>
<span class="line"><span>       bus info: scsi@4:0.0.0</span></span>
<span class="line"><span>       logical name: /dev/sdc</span></span>
<span class="line"><span>       version: 1.00</span></span>
<span class="line"><span>       capabilities: removable</span></span>
<span class="line"><span>       configuration: logicalsectorsize=512 sectorsize=512</span></span>
<span class="line"><span>     *-medium</span></span>
<span class="line"><span>          physical id: 0</span></span>
<span class="line"><span>          logical name: /dev/sdc</span></span></code></pre></div><p>请注意，你需要使用 <code>sudo</code> 运行 <code>lshw</code> 命令以确保能得到所有可用的信息。</p><p>虽然我们在上面的命令中要求了输出“磁盘（<code>disk</code>）”（上面只包含了原始输出里五个条目中的一个），这里的输出却不是一个硬盘，而是读卡器——磁盘的一种。注意系统将这个设备命名为了 <code>/dev/sdc</code>。</p><p>系统的主磁盘上也有相似的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>*-disk</span></span>
<span class="line"><span>        description: ATA Disk</span></span>
<span class="line"><span>        product: SSD2SC120G1CS175</span></span>
<span class="line"><span>        physical id: 0</span></span>
<span class="line"><span>        bus info: scsi@0:0.0.0</span></span>
<span class="line"><span>         logical name: /dev/sda         &lt;==这里</span></span>
<span class="line"><span>        version: 1101</span></span>
<span class="line"><span>        serial: PNY20150000778410606</span></span>
<span class="line"><span>        size: 111GiB (120GB)</span></span>
<span class="line"><span>        capabilities: partitioned partitioned:dos</span></span>
<span class="line"><span>        configuration: ansiversion=5 logicalsectorsize=512 sectorsize=512 signature=</span></span>
<span class="line"><span>           f63b5929</span></span></code></pre></div><p>这块硬盘是 <code>/dev/sda</code>。这个系统上的硬盘都显示为 <code>ATA</code> 磁盘，<code>ATA</code> 是一种把控制器与盘体集成在一起的磁盘驱动器实现。</p><p>要获得“磁盘”类设备的简略列表，可以运行下面这条命令。注意其中有两个设备被列出了两次，所以我们看到的仍然是五个磁盘设备。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo lshw -short -C disk</span></span>
<span class="line"><span>H/W path               Device      Class          Description</span></span>
<span class="line"><span>=============================================================</span></span>
<span class="line"><span>/0/100/1d/1/1/0.0.0    /dev/sdc    disk           Card Reader-1</span></span>
<span class="line"><span>/0/100/1d/1/1/0.0.0/0  /dev/sdc    disk</span></span>
<span class="line"><span>/0/100/1d/1/1/0.0.1    /dev/sdd    disk           2</span></span>
<span class="line"><span>/0/100/1d/1/1/0.0.1/0  /dev/sdd    disk</span></span>
<span class="line"><span>/0/100/1f.2/0          /dev/sda    disk           120GB SSD2SC120G1CS175</span></span>
<span class="line"><span>/0/100/1f.2/1          /dev/cdrom  disk           DVD+-RW GSA-H73N</span></span>
<span class="line"><span>/0/100/1f.5/0.0.0      /dev/sdb    disk           500GB SAMSUNG HE502HJ</span></span></code></pre></div><p>如果你决定要查看系统上的 <strong>所有</strong> 设备，请坐稳了；你会得到一个包含的东西比你通常认为的“设备”要多得多的列表，下面是一个例子，这是一个“简短（<code>short</code>）”（信息很少）的列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo lshw -short</span></span>
<span class="line"><span>[sudo] password for shs:</span></span>
<span class="line"><span>H/W path               Device      Class          Description</span></span>
<span class="line"><span>=============================================================</span></span>
<span class="line"><span>                                   system         Inspiron 530s</span></span>
<span class="line"><span>/0                                 bus            0RY007</span></span>
<span class="line"><span>/0/0                               memory         128KiB BIOS</span></span>
<span class="line"><span>/0/4                               processor      Intel(R) Core(TM)2 Duo CPU</span></span>
<span class="line"><span>/0/4/a                             memory         32KiB L1 cache</span></span>
<span class="line"><span>/0/4/b                             memory         6MiB L2 cache</span></span>
<span class="line"><span>/0/24                              memory         6GiB System Memory</span></span>
<span class="line"><span>/0/24/0                            memory         2GiB DIMM DDR2 Synchronous 667</span></span>
<span class="line"><span>/0/24/1                            memory         1GiB DIMM DDR2 Synchronous 667</span></span>
<span class="line"><span>/0/24/2                            memory         2GiB DIMM DDR2 Synchronous 667</span></span>
<span class="line"><span>/0/24/3                            memory         1GiB DIMM DDR2 Synchronous 667</span></span>
<span class="line"><span>/0/1                               generic</span></span>
<span class="line"><span>/0/10                              generic</span></span>
<span class="line"><span>/0/11                              generic</span></span>
<span class="line"><span>/0/12                              generic</span></span>
<span class="line"><span>/0/13                              generic</span></span>
<span class="line"><span>/0/14                              generic</span></span>
<span class="line"><span>/0/15                              generic</span></span>
<span class="line"><span>/0/17                              generic</span></span>
<span class="line"><span>/0/18                              generic</span></span>
<span class="line"><span>/0/19                              generic</span></span>
<span class="line"><span>/0/2                               generic</span></span>
<span class="line"><span>/0/20                              generic</span></span>
<span class="line"><span>/0/100                             bridge         82G33/G31/P35/P31 Express DRAM</span></span>
<span class="line"><span>/0/100/1                           bridge         82G33/G31/P35/P31 Express PCI</span></span>
<span class="line"><span>/0/100/1/0                         display        Caicos [Radeon HD 6450/7450/84</span></span>
<span class="line"><span>/0/100/1/0.1                       multimedia     Caicos HDMI Audio [Radeon HD 6</span></span>
<span class="line"><span>/0/100/19              enp0s25     network        82562V-2 10/100 Network Connec</span></span>
<span class="line"><span>/0/100/1a                          bus            82801I (ICH9 Family) USB UHCI</span></span>
<span class="line"><span>/0/100/1a/1            usb3        bus            UHCI Host Controller</span></span>
<span class="line"><span>/0/100/1a.1                        bus            82801I (ICH9 Family) USB UHCI</span></span>
<span class="line"><span>/0/100/1a.1/1          usb4        bus            UHCI Host Controller</span></span>
<span class="line"><span>/0/100/1a.1/1/2                    input          Rock Candy Wireless Keyboard</span></span>
<span class="line"><span>/0/100/1a.2                        bus            82801I (ICH9 Family) USB UHCI</span></span>
<span class="line"><span>/0/100/1a.2/1          usb5        bus            UHCI Host Controller</span></span>
<span class="line"><span>/0/100/1a.2/1/2                    input          USB OPTICAL MOUSE</span></span>
<span class="line"><span>/0/100/1a.7                        bus            82801I (ICH9 Family) USB2 EHCI</span></span>
<span class="line"><span>/0/100/1a.7/1          usb1        bus            EHCI Host Controller</span></span>
<span class="line"><span>/0/100/1b                          multimedia     82801I (ICH9 Family) HD Audio</span></span>
<span class="line"><span>/0/100/1d                          bus            82801I (ICH9 Family) USB UHCI</span></span>
<span class="line"><span>/0/100/1d/1            usb6        bus            UHCI Host Controller</span></span>
<span class="line"><span>/0/100/1d/1/1          scsi4       storage        CD04</span></span>
<span class="line"><span>/0/100/1d/1/1/0.0.0    /dev/sdc    disk           Card Reader-1</span></span>
<span class="line"><span>/0/100/1d/1/1/0.0.0/0  /dev/sdc    disk</span></span>
<span class="line"><span>/0/100/1d/1/1/0.0.1    /dev/sdd    disk           2</span></span>
<span class="line"><span>/0/100/1d/1/1/0.0.1/0  /dev/sdd    disk</span></span>
<span class="line"><span>/0/100/1d.1                        bus            82801I (ICH9 Family) USB UHCI</span></span>
<span class="line"><span>/0/100/1d.1/1          usb7        bus            UHCI Host Controller</span></span>
<span class="line"><span>/0/100/1d.2                        bus            82801I (ICH9 Family) USB UHCI</span></span>
<span class="line"><span>/0/100/1d.2/1          usb8        bus            UHCI Host Controller</span></span>
<span class="line"><span>/0/100/1d.7                        bus            82801I (ICH9 Family) USB2 EHCI</span></span>
<span class="line"><span>/0/100/1d.7/1          usb2        bus            EHCI Host Controller</span></span>
<span class="line"><span>/0/100/1d.7/1/2                    multimedia     USB  Live camera</span></span>
<span class="line"><span>/0/100/1e                          bridge         82801 PCI Bridge</span></span>
<span class="line"><span>/0/100/1e/1                        communication  HSF 56k Data/Fax Modem</span></span>
<span class="line"><span>/0/100/1f                          bridge         82801IR (ICH9R) LPC Interface</span></span>
<span class="line"><span>/0/100/1f.2            scsi0       storage        82801IR/IO/IH (ICH9R/DO/DH) 4</span></span>
<span class="line"><span>/0/100/1f.2/0          /dev/sda    disk           120GB SSD2SC120G1CS175</span></span>
<span class="line"><span>/0/100/1f.2/0/1        /dev/sda1   volume         111GiB EXT4 volume</span></span>
<span class="line"><span>/0/100/1f.2/1          /dev/cdrom  disk           DVD+-RW GSA-H73N</span></span>
<span class="line"><span>/0/100/1f.3                        bus            82801I (ICH9 Family) SMBus Con</span></span>
<span class="line"><span>/0/100/1f.5            scsi3       storage        82801I (ICH9 Family) 2 port SA</span></span>
<span class="line"><span>/0/100/1f.5/0.0.0      /dev/sdb    disk           500GB SAMSUNG HE502HJ</span></span>
<span class="line"><span>/0/100/1f.5/0.0.0/1    /dev/sdb1   volume         433GiB EXT4 volume</span></span>
<span class="line"><span>/0/3                               system         PnP device PNP0c02</span></span>
<span class="line"><span>/0/5                               system         PnP device PNP0b00</span></span>
<span class="line"><span>/0/6                               storage        PnP device PNP0700</span></span>
<span class="line"><span>/0/7                               system         PnP device PNP0c02</span></span>
<span class="line"><span>/0/8                               system         PnP device PNP0c02</span></span>
<span class="line"><span>/0/9                               system         PnP device PNP0c01</span></span></code></pre></div><p>运行下面的命令来列出设备类别，并统计每个类别中的设备数量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo lshw -short | awk ‘{print substr($0,36,13)}’ | tail -n +3 | sort | uniq -c</span></span>
<span class="line"><span>      4 bridge</span></span>
<span class="line"><span>     18 bus</span></span>
<span class="line"><span>      1 communication</span></span>
<span class="line"><span>      7 disk</span></span>
<span class="line"><span>      1 display</span></span>
<span class="line"><span>     12 generic</span></span>
<span class="line"><span>      2 input</span></span>
<span class="line"><span>      8 memory</span></span>
<span class="line"><span>      3 multimedia</span></span>
<span class="line"><span>      1 network</span></span>
<span class="line"><span>      1 processor</span></span>
<span class="line"><span>      4 storage</span></span>
<span class="line"><span>      6 system</span></span>
<span class="line"><span>      2 volume</span></span></code></pre></div><p><strong>注意：</strong> 上面使用 <code>awk</code> 命令从 <code>lshw</code> 的输出中选择 Class（类别）栏是这样实现的：使用 <code>$0</code>（选取完整行），但只取从正确位置（第 36 个字符）开始的子串，而因为“类别”中并没有条目的长度超过 13 个字符，所以子串就在那里结束。命令中 <code>tail -n +3</code> 的部分移除了标题和下面的<code>=====</code>，所以最终的列表中只包含了那 14 种设备类型。</p><p>（LCTT 译注：上面的命令中 <code>awk</code> 的部分在选取子串时是从第 36 个字符开始的，这个数字基本上取决于最长的设备逻辑名称的长度，因而在不同的系统环境中可能有所不同，一个例子是，当你的系统上有 NVMe SSD 时，可能需要将其改为 41。）</p><p>你会发现在没有使用 <code>-short</code> 选项的时候，每一个磁盘类设备都会有大约 12 行的输出，包括像是 <code>/dev/sda</code> 这样的逻辑名称，磁盘大小和种类等等。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo lshw -C disk</span></span>
<span class="line"><span>[sudo] password for shs:</span></span>
<span class="line"><span>  *-disk:0</span></span>
<span class="line"><span>       description: SCSI Disk</span></span>
<span class="line"><span>       product: Card Reader-1           &lt;== 读卡器？ </span></span>
<span class="line"><span>       vendor: JIE LI</span></span>
<span class="line"><span>       physical id: 0.0.0</span></span>
<span class="line"><span>       bus info: scsi@4:0.0.0</span></span>
<span class="line"><span>       logical name: /dev/sdc</span></span>
<span class="line"><span>       version: 1.00</span></span>
<span class="line"><span>       capabilities: removable</span></span>
<span class="line"><span>       configuration: logicalsectorsize=512 sectorsize=512</span></span>
<span class="line"><span>     *-medium</span></span>
<span class="line"><span>          physical id: 0</span></span>
<span class="line"><span>          logical name: /dev/sdc</span></span>
<span class="line"><span>  *-disk:1</span></span>
<span class="line"><span>       description: SCSI Disk</span></span>
<span class="line"><span>       product: 2</span></span>
<span class="line"><span>       vendor: AC4100 -</span></span>
<span class="line"><span>       physical id: 0.0.1</span></span>
<span class="line"><span>       bus info: scsi@4:0.0.1</span></span>
<span class="line"><span>       logical name: /dev/sdd</span></span>
<span class="line"><span>       capabilities: removable</span></span>
<span class="line"><span>       configuration: logicalsectorsize=512 sectorsize=512</span></span>
<span class="line"><span>     *-medium</span></span>
<span class="line"><span>          physical id: 0</span></span>
<span class="line"><span>          logical name: /dev/sdd</span></span>
<span class="line"><span>  *-disk</span></span>
<span class="line"><span>       description: ATA Disk</span></span>
<span class="line"><span>       product: SSD2SC120G1CS175</span></span>
<span class="line"><span>       physical id: 0</span></span>
<span class="line"><span>       bus info: scsi@0:0.0.0</span></span>
<span class="line"><span>       logical name: /dev/sda           &lt;== 主要磁盘</span></span>
<span class="line"><span>       version: 1101</span></span>
<span class="line"><span>       serial: PNY20150000778410606</span></span>
<span class="line"><span>       size: 111GiB (120GB)</span></span>
<span class="line"><span>       capabilities: partitioned partitioned:dos</span></span>
<span class="line"><span>       configuration: ansiversion=5 logicalsectorsize=512 sectorsize=512 signature=f63b5929</span></span>
<span class="line"><span>  *-cdrom                               &lt;== 也叫 /dev/sr0</span></span>
<span class="line"><span>       description: DVD writer</span></span>
<span class="line"><span>       product: DVD+-RW GSA-H73N</span></span>
<span class="line"><span>       vendor: HL-DT-ST</span></span>
<span class="line"><span>       physical id: 1</span></span>
<span class="line"><span>       bus info: scsi@1:0.0.0</span></span>
<span class="line"><span>       logical name: /dev/cdrom</span></span>
<span class="line"><span>       logical name: /dev/cdrw</span></span>
<span class="line"><span>       logical name: /dev/dvd</span></span>
<span class="line"><span>       logical name: /dev/dvdrw</span></span>
<span class="line"><span>       logical name: /dev/sr0</span></span>
<span class="line"><span>       version: B103</span></span>
<span class="line"><span>       serial: [</span></span>
<span class="line"><span>       capabilities: removable audio cd-r cd-rw dvd dvd-r</span></span>
<span class="line"><span>       configuration: ansiversion=5 status=nodisc</span></span>
<span class="line"><span>  *-disk</span></span>
<span class="line"><span>       description: ATA Disk</span></span>
<span class="line"><span>       product: SAMSUNG HE502HJ</span></span>
<span class="line"><span>       physical id: 0.0.0</span></span>
<span class="line"><span>       bus info: scsi@3:0.0.0</span></span>
<span class="line"><span>       logical name: /dev/sdb           &lt;== 次要磁盘</span></span>
<span class="line"><span>       version: 0002</span></span>
<span class="line"><span>       serial: S2B6J90B501053</span></span>
<span class="line"><span>       size: 465GiB (500GB)</span></span>
<span class="line"><span>       capabilities: partitioned partitioned:dos</span></span>
<span class="line"><span>       configuration: ansiversion=5 logicalsectorsize=512 sectorsize=512 signature=7e67ccf3</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p><code>lshw</code> 命令提供了一些我们许多人通常不会处理的信息，不过即使你只用了其中的一部分，知道有多少信息可用还是很不错的。</p><hr>`,25)),e("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://www.networkworld.com/article/3583598/how-to-view-information-on-your-linux-devices-with-lshw.html"},{default:i(()=>[...s[0]||(s[0]=[n("https://www.networkworld.com/article/3583598/how-to-view-information-on-your-linux-devices-with-lshw.html",-1)])]),_:1})]),e("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:i(()=>[...s[2]||(s[2]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),p(a,{href:"https://github.com/rakino"},{default:i(()=>[...s[4]||(s[4]=[n("rakino",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:i(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const y=l(r,[["render",u]]);export{f as __pageData,y as default};
