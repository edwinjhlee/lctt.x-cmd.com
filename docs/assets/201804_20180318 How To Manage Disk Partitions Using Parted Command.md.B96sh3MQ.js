import{_ as t,a0 as d,w as r,s as o,ao as l,I as n,x as a,a1 as p,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"怎样用 parted 管理硬盘分区 | LCTT x X-CMD","titleTemplate":false,"description":"怎样用 parted 管理硬盘分区 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"怎样用 parted 管理硬盘分区 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"怎样用 parted 管理硬盘分区 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180318 How To Manage Disk Partitions Using Parted Command","title":"怎样用 parted 管理硬盘分区","tag":"201804","desc":""},"relativePath":"201804/20180318 How To Manage Disk Partitions Using Parted Command.md","filePath":"[post].md"}'),c={name:"201804/20180318 How To Manage Disk Partitions Using Parted Command.md"};function h(g,s,k,b,u,m){const e=d("Link");return r(),o("div",null,[s[40]||(s[40]=l('<h1 id="怎样用-parted-管理硬盘分区" tabindex="-1">怎样用 parted 管理硬盘分区 <a class="header-anchor" href="#怎样用-parted-管理硬盘分区" aria-label="Permalink to “怎样用 parted 管理硬盘分区”">​</a></h1><p>众所周知，对硬盘分区是 Linux 管理员一项最重要的管理任务之一，他们不能不知道这个。</p><p>在最糟糕的时候，你至少每周会收到一次依赖小组的请求，而在更大的环境里会更加频繁 。</p><p>你可能会问为什么我们要用 <code>parted</code> 而不是 <code>fdisk</code>？ 它们有什么区别？好问题，我会告诉你这两者的区别。</p><ul><li><code>parted</code> 支持用户在大于 2TB 的硬盘上创建硬盘分区， 但 <code>fdisk</code> 命令不支持</li><li>对比 <code>fdisk</code> 来说，<code>parted</code> 是一个更高级的工具</li><li>支持更多的分区表类型，包括 GPT （LCTT 译注：全局唯一标识分区表）</li><li>它允许用户调整分区大小， 但当缩减分区空间的时候，它没有如我意料的工作，多数情况下我会得到错误消息。所以我会建议用户不要用 <code>parted</code> 来缩减分区大小。</li></ul><h3 id="什么是-parted" tabindex="-1">什么是 parted <a class="header-anchor" href="#什么是-parted" aria-label="Permalink to “什么是 parted”">​</a></h3><p><code>parted</code> 是一个操作硬盘分区的程序。它支持多种分区表类型，包括 MS-DOS 和 GPT。</p><p>它允许用户创建、删除、调整、缩减、移动和复制分区，以及重新组织硬盘的使用，复制数据到新的硬盘上。<code>gparted</code> 是 <code>parted</code> 的图形界面前端。</p><h3 id="怎样安装-parted" tabindex="-1">怎样安装 parted <a class="header-anchor" href="#怎样安装-parted" aria-label="Permalink to “怎样安装 parted”">​</a></h3><p>大部分发行版已经预安装了 <code>parted</code>。如果没有，用下列命令来安装 <code>parted</code>。</p>',10)),n("p",null,[s[2]||(s[2]=a("对于 Debian/Ubuntu 用户, 使用 ",-1)),p(e,{href:"https://www.2daygeek.com/apt-get-apt-cache-command-examples-manage-packages-debian-ubuntu-systems/"},{default:i(()=>[...s[0]||(s[0]=[a("APT-GET 命令",-1)])]),_:1}),s[3]||(s[3]=a(" 或者 ",-1)),p(e,{href:"https://www.2daygeek.com/apt-command-examples-manage-packages-debian-ubuntu-systems/"},{default:i(()=>[...s[1]||(s[1]=[a("APT 命令",-1)])]),_:1}),s[4]||(s[4]=a(" 来安装 ",-1)),s[5]||(s[5]=n("code",null,"parted",-1)),s[6]||(s[6]=a("。",-1))]),s[41]||(s[41]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt install parted</span></span></code></pre></div>',1)),n("p",null,[s[8]||(s[8]=a("对于 RHEL/CentOS 用户，用 ",-1)),p(e,{href:"https://www.2daygeek.com/yum-command-examples-manage-packages-rhel-centos-systems/"},{default:i(()=>[...s[7]||(s[7]=[a("YUM 命令",-1)])]),_:1}),s[9]||(s[9]=a(" 来安装 ",-1)),s[10]||(s[10]=n("code",null,"parted",-1)),s[11]||(s[11]=a("。",-1))]),s[42]||(s[42]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo yum install parted</span></span></code></pre></div>',1)),n("p",null,[s[13]||(s[13]=a("对于 Fedora 用户，用 ",-1)),p(e,{href:"https://www.2daygeek.com/dnf-command-examples-manage-packages-fedora-system/"},{default:i(()=>[...s[12]||(s[12]=[a("DNF 命令",-1)])]),_:1}),s[14]||(s[14]=a(" 来安装 ",-1)),s[15]||(s[15]=n("code",null,"parted",-1)),s[16]||(s[16]=a("。",-1))]),s[43]||(s[43]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install parted</span></span></code></pre></div>',1)),n("p",null,[s[18]||(s[18]=a("对于 Arch Linux 用户，用 ",-1)),p(e,{href:"https://www.2daygeek.com/pacman-command-examples-manage-packages-arch-linux-system/"},{default:i(()=>[...s[17]||(s[17]=[a("Pacman 命令",-1)])]),_:1}),s[19]||(s[19]=a("来安装 ",-1)),s[20]||(s[20]=n("code",null,"parted",-1)),s[21]||(s[21]=a("。",-1))]),s[44]||(s[44]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo pacman -S parted</span></span></code></pre></div>',1)),n("p",null,[s[23]||(s[23]=a("对于 openSUSE 用户， 用 ",-1)),p(e,{href:"https://www.2daygeek.com/zypper-command-examples-manage-packages-opensuse-system/"},{default:i(()=>[...s[22]||(s[22]=[a("Zypper 命令",-1)])]),_:1}),s[24]||(s[24]=a("来安装 ",-1)),s[25]||(s[25]=n("code",null,"parted",-1)),s[26]||(s[26]=a("。",-1))]),s[45]||(s[45]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo zypper in parted</span></span></code></pre></div><h3 id="怎样启动-parted" tabindex="-1">怎样启动 parted <a class="header-anchor" href="#怎样启动-parted" aria-label="Permalink to “怎样启动 parted”">​</a></h3><p>下面的 <code>parted</code> 命令会自动选择 <code>/dev/sda</code> ，因为这是系统的第一个硬盘。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted</span></span>
<span class="line"><span>GNU parted 3.2</span></span>
<span class="line"><span>Using /dev/sda</span></span>
<span class="line"><span>Welcome to GNU parted! Type &#39;help&#39; to view a list of commands.</span></span>
<span class="line"><span>(parted)</span></span></code></pre></div><p>同时我们也可以用下面的命令来重新选择对应的的硬盘。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(parted) select /dev/sdb</span></span>
<span class="line"><span>Using /dev/sdb</span></span>
<span class="line"><span>(parted)</span></span></code></pre></div><p>如果你想选择特定的硬盘, 用下列的格式来输入命令。 这次 ，我们将选择 <code>/dev/sdb</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Device Name]</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb</span></span>
<span class="line"><span>GNU parted 3.2</span></span>
<span class="line"><span>Using /dev/sdb</span></span>
<span class="line"><span>Welcome to GNU parted! Type &#39;help&#39; to view a list of commands.</span></span>
<span class="line"><span>(parted)</span></span></code></pre></div><h3 id="怎样用-parted-列出所有可用的硬盘" tabindex="-1">怎样用 parted 列出所有可用的硬盘 <a class="header-anchor" href="#怎样用-parted-列出所有可用的硬盘" aria-label="Permalink to “怎样用 parted 列出所有可用的硬盘”">​</a></h3><p>如果你不知道你的电脑上有什么硬盘，只需要运行下列命令，该命令会显示所有可用硬盘的名字，以及其它的有用信息比如储存空间、型号、扇区大小、硬盘标志以及分区信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted -l</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sda: 32.2GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 1 1049kB 32.2GB 32.2GB primary ext4 boot</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Error: /dev/sdb: unrecognised disk label</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: unknown</span></span>
<span class="line"><span>Disk Flags:</span></span></code></pre></div><p>上面的错误信息清晰地显示出硬盘 <code>/dev/sdb</code> 没有有效的<ruby>磁盘标签<rt>disk label</rt></ruby>。 它不会自动得到磁盘标签，所以， 我们便要自己设置硬盘标签。</p><h3 id="怎样用-parted-创建硬盘分区" tabindex="-1">怎样用 parted 创建硬盘分区 <a class="header-anchor" href="#怎样用-parted-创建硬盘分区" aria-label="Permalink to “怎样用 parted 创建硬盘分区”">​</a></h3><p><code>parted</code> 允许用户创建主分区或者拓展分区。创建这两种类型的分区的步骤还是一样，但请确保你已经指定了需要的分区类型，比如 <code>primary</code> （主分区）或者 <code>extended</code> （扩展分区）。</p><p>为了演示这项操作 ，我们安装了一个新的 <code>50 GB</code> 的硬盘到到电脑上，挂载在 <code>/dev/sdb</code> 上。</p><p>有两种方法创建分区，第一种是更详细的方法，另一种只是一个命令。 在下面的例子中，我们将用更详细的方法添加一个主分区。提醒一下， 我们应该先设置磁盘标签，因为它不会自动设置任何标签。</p><p>在下面的例子中，我们将要创建一个 <code>10 GB</code> 的分区</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb</span></span>
<span class="line"><span>GNU parted 3.2</span></span>
<span class="line"><span>Using /dev/sdb</span></span>
<span class="line"><span>Welcome to GNU parted! Type &#39;help&#39; to view a list of commands.</span></span>
<span class="line"><span>(parted) mklabel msdos</span></span>
<span class="line"><span>(parted) unit GB</span></span>
<span class="line"><span>(parted) mkpart</span></span>
<span class="line"><span>Partition type? primary/extended? primary</span></span>
<span class="line"><span>File system type? [ext2]? ext4</span></span>
<span class="line"><span>Start? 0.00GB</span></span>
<span class="line"><span>End? 10.00GB</span></span>
<span class="line"><span>(parted) print</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 1 0.00GB 10.0GB 10.0GB primary ext4 lba</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(parted) quit</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><p>同时，我们也可以使用单条 <code>parted</code> 命令</p><p>在下面的例子中，我们将在硬盘上创建一个 <code>10 GB</code> 的分区。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Disk Name] [mkpart] [Partition Type] [Filesystem Type] [Partition Start Size] [Partition End Size]</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb mkpart primary ext4 10.0GB 20.0GB</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><h3 id="怎样使用所有剩余空间创建分区" tabindex="-1">怎样使用所有剩余空间创建分区 <a class="header-anchor" href="#怎样使用所有剩余空间创建分区" aria-label="Permalink to “怎样使用所有剩余空间创建分区”">​</a></h3><p>你已经创建了除了 <code>/home</code> 之外等所有要求的分区，而且你想要用硬盘上所有剩余的空间来创建 <code>/home</code> 分区，要怎样做？可以使用下面的命令来创建分区。</p><p>下面的命令创建了一个 33.7 GB 的分区，从 <code>20 GB</code> 开始到 <code>53 GB</code> 结束。 <code>100%</code> 使用率允许用户用硬盘上所有剩余的空余空间。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Disk Name] [mkpart] [Partition Type] [Filesystem Type] [Partition Start Size] [Partition End Size]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo parted /dev/sdb mkpart primary ext4 20.0GB 100%</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><h3 id="怎样用-parted-列出所有的分区" tabindex="-1">怎样用 parted 列出所有的分区 <a class="header-anchor" href="#怎样用-parted-列出所有的分区" aria-label="Permalink to “怎样用 parted 列出所有的分区”">​</a></h3><p>你也许注意到了，我们已经在上述步骤中创建了三个分区，如果你想要列出所有在硬盘上可用的分区，可以使用 <code>print</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 1 1049kB 10.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 2 10.0GB 20.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 3 20.0GB 53.7GB 33.7GB primary ext4</span></span></code></pre></div><h3 id="怎样用-mkfs-格式化分区" tabindex="-1">怎样用 mkfs 格式化分区 <a class="header-anchor" href="#怎样用-mkfs-格式化分区" aria-label="Permalink to “怎样用 mkfs 格式化分区”">​</a></h3><p>用户可以用 <code>mkfs</code> 命令格式化分区。下面的步骤会用 <code>mkfs</code> 来格式化分区。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkfs.ext4 /dev/sdb1</span></span>
<span class="line"><span>mke2fs 1.43.4 (31-Jan-2017)</span></span>
<span class="line"><span>Creating filesystem with 2621440 4k blocks and 656640 inodes</span></span>
<span class="line"><span>Filesystem UUID: 415cf467-634c-4403-8c9f-47526bbaa381</span></span>
<span class="line"><span>Superblock backups stored on blocks:</span></span>
<span class="line"><span>    32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Allocating group tables: done</span></span>
<span class="line"><span>Writing inode tables: done</span></span>
<span class="line"><span>Creating journal (16384 blocks): done</span></span>
<span class="line"><span>Writing superblocks and filesystem accounting information: done</span></span></code></pre></div><p>同样的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkfs.ext4 /dev/sdb2</span></span>
<span class="line"><span>$ sudo mkfs.ext4 /dev/sdb3</span></span></code></pre></div><p>创建必要的文件夹然后将这些分区挂载在上面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkdir /par1 /par2 /par3</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mount /dev/sdb1 /par1</span></span>
<span class="line"><span>$ sudo mount /dev/sdb2 /par2</span></span>
<span class="line"><span>$ sudo mount /dev/sdb3 /par3</span></span></code></pre></div><p>运行下列命令来检查是否成功挂载上新创建的分区。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ df -h /dev/sdb[1-3]</span></span>
<span class="line"><span>Filesystem Size Used Avail Use% Mounted on</span></span>
<span class="line"><span>/dev/sdb1 9.2G 37M 8.6G 1% /par1</span></span>
<span class="line"><span>/dev/sdb2 9.2G 37M 8.6G 1% /par2</span></span>
<span class="line"><span>/dev/sdb3 31G 49M 30G 1% /par3</span></span></code></pre></div><h3 id="怎样检查硬盘空闲空间" tabindex="-1">怎样检查硬盘空闲空间 <a class="header-anchor" href="#怎样检查硬盘空闲空间" aria-label="Permalink to “怎样检查硬盘空闲空间”">​</a></h3><p>运行下列命令来检查硬盘上的空闲空间，这块硬盘上有 <code>25.7 GB</code> 的空闲空间。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print free</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 32.3kB 1049kB 1016kB Free Space</span></span>
<span class="line"><span> 1 1049kB 10.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 2 10.0GB 20.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 3 20.0GB 28.0GB 8001MB primary ext4</span></span>
<span class="line"><span> 28.0GB 53.7GB 25.7GB Free Space</span></span></code></pre></div><h3 id="怎样使用-parted-命令来重新调整分区大小" tabindex="-1">怎样使用 parted 命令来重新调整分区大小 <a class="header-anchor" href="#怎样使用-parted-命令来重新调整分区大小" aria-label="Permalink to “怎样使用 parted 命令来重新调整分区大小”">​</a></h3><p><code>parted</code> 允许用户重新调整分区大小。不过我已在文章的开头说了，不要缩小分区大小，不然会有许多错误。</p><p>运行下列命令来检查硬盘分区以及所有可用空间。 可以看到硬盘上有 <code>25.7GB</code> 的可用空间。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print free</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 32.3kB 1049kB 1016kB Free Space</span></span>
<span class="line"><span> 1 1049kB 10.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 2 10.0GB 20.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 3 20.0GB 28.0GB 8001MB primary ext4</span></span>
<span class="line"><span> 28.0GB 53.7GB 25.7GB Free Space</span></span></code></pre></div><p>运行下列命令来重新调整分区大小。 我们将要重新调整（增加）分区 3 的结束位置，从 <code>28GB</code> 到 <code>33GB</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Disk Name] [resizepart] [Partition Number] [Partition New End Size]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo parted /dev/sdb resizepart 3 33.0GB</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><p>运行下列命令来确认分区是否已经扩容。可以看到，分区 3 已经从 <code>8GB</code> 增加到 <code>13GB</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 1 1049kB 10.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 2 10.0GB 20.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 3 20.0GB 33.0GB 13.0GB primary ext4</span></span></code></pre></div><p>重新调整文件系统大小。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo resize2fs /dev/sdb3</span></span>
<span class="line"><span>resize2fs 1.43.4 (31-Jan-2017)</span></span>
<span class="line"><span>Resizing the filesystem on /dev/sdb3 to 3173952 (4k) blocks.</span></span>
<span class="line"><span>The filesystem on /dev/sdb3 is now 3173952 (4k) blocks long.</span></span></code></pre></div><p>最后，确认分区是否已经扩容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ df -h /dev/sdb[1-3]</span></span>
<span class="line"><span>Filesystem Size Used Avail Use% Mounted on</span></span>
<span class="line"><span>/dev/sdb1 9.2G 5.1G 3.6G 59% /par1</span></span>
<span class="line"><span>/dev/sdb2 9.2G 2.1G 6.6G 24% /par2</span></span>
<span class="line"><span>/dev/sdb3 12G 1.1G 11G 10% /par3</span></span></code></pre></div><h3 id="怎样用-parted-删除分区" tabindex="-1">怎样用 parted 删除分区 <a class="header-anchor" href="#怎样用-parted-删除分区" aria-label="Permalink to “怎样用 parted 删除分区”">​</a></h3><p>我们用 <code>rm</code> 命令方便地删除未使用的分区（如果该分区不会再被用到了）。下列步骤中，我们将会删除分区 3 （<code>/dev/sdb3</code>）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Disk Name] [rm] [Partition Number]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo parted /dev/sdb rm 3</span></span>
<span class="line"><span>Warning: Partition /dev/sdb3 is being used. Are you sure you want to continue?</span></span>
<span class="line"><span>Yes/No? Yes</span></span>
<span class="line"><span>Error: Partition(s) 3 on /dev/sdb have been written, but we have been unable to inform the kernel of the change, probably because it/they are in use. As a result, the old partition(s) will remain in use.</span></span>
<span class="line"><span>You should reboot now before making further changes.</span></span>
<span class="line"><span>Ignore/Cancel? Ignore</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><p>我们也可以用下列的命令检查。可以看到，分区 3 已经被成功移除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 1 1049kB 10.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 2 10.0GB 20.0GB 9999MB primary ext4</span></span></code></pre></div><h3 id="怎样用-parted-命令设置-更改分区标志" tabindex="-1">怎样用 parted 命令设置/更改分区标志 <a class="header-anchor" href="#怎样用-parted-命令设置-更改分区标志" aria-label="Permalink to “怎样用 parted 命令设置/更改分区标志”">​</a></h3><p>我们可以用下列的命令来轻易更改分区的标志。 我们将对 <code>/dev/sdb2</code> 设置 <code>lvm</code> 标志。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Disk Name] [set] [Partition Number] [Flags Name] [Flag On/Off]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo parted /dev/sdb set 2 lvm on</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><p>我们可以列出分区来验证这次的更改。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 1 1049kB 10.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 2 10.0GB 20.0GB 9999MB primary ext4 lvm</span></span></code></pre></div><p>如果你想知道可用的标志，只需要用如下的命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ (parted) help set</span></span>
<span class="line"><span> set NUMBER FLAG STATE change the FLAG on partition NUMBER</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    NUMBER is the partition number used by Linux. On MS-DOS disk labels, the primary partitions number from 1 to 4, logical partitions from 5 onwards.</span></span>
<span class="line"><span> FLAG is one of: boot, root, swap, hidden, raid, lvm, lba, hp-service, palo, prep, msftres, bios_grub, atvrecv, diag, legacy_boot, msftdata, irst, esp</span></span>
<span class="line"><span> STATE is one of: on, off</span></span></code></pre></div><p>如果你想知道 <code>parted</code> 的其它可用命令， 只需要去到 <code>help</code> 页面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted</span></span>
<span class="line"><span>GNU parted 3.2</span></span>
<span class="line"><span>Using /dev/sda</span></span>
<span class="line"><span>Welcome to GNU parted! Type &#39;help&#39; to view a list of commands.</span></span>
<span class="line"><span>(parted) help</span></span>
<span class="line"><span> align-check TYPE N check partition N for TYPE(min|opt) alignment</span></span>
<span class="line"><span> help [COMMAND] print general help, or help on COMMAND</span></span>
<span class="line"><span> mklabel,mktable LABEL-TYPE create a new disklabel (partition table)</span></span>
<span class="line"><span> mkpart PART-TYPE [FS-TYPE] START END make a partition</span></span>
<span class="line"><span> name NUMBER NAME name partition NUMBER as NAME</span></span>
<span class="line"><span> print [devices|free|list,all|NUMBER] display the partition table, available devices, free space, all found partitions, or a particular partition</span></span>
<span class="line"><span> quit exit program</span></span>
<span class="line"><span> rescue START END rescue a lost partition near START and END</span></span>
<span class="line"><span> resizepart NUMBER END resize partition NUMBER</span></span>
<span class="line"><span> rm NUMBER delete partition NUMBER</span></span>
<span class="line"><span> select DEVICE choose the device to edit</span></span>
<span class="line"><span> disk_set FLAG STATE change the FLAG on selected device</span></span>
<span class="line"><span> disk_toggle [FLAG] toggle the state of FLAG on selected device</span></span>
<span class="line"><span> set NUMBER FLAG STATE change the FLAG on partition NUMBER</span></span>
<span class="line"><span> toggle [NUMBER [FLAG]] toggle the state of FLAG on partition NUMBER</span></span>
<span class="line"><span> unit UNIT set the default unit to UNIT</span></span>
<span class="line"><span> version display the version number and copyright information of GNU parted</span></span>
<span class="line"><span>(parted) quit</span></span></code></pre></div><hr>`,70)),n("p",null,[s[28]||(s[28]=a("via: ",-1)),p(e,{href:"https://www.2daygeek.com/how-to-manage-disk-partitions-using-parted-command/"},{default:i(()=>[...s[27]||(s[27]=[a("https://www.2daygeek.com/how-to-manage-disk-partitions-using-parted-command/",-1)])]),_:1})]),n("p",null,[s[32]||(s[32]=a("作者：",-1)),p(e,{href:"https://www.2daygeek.com/author/magesh/"},{default:i(()=>[...s[29]||(s[29]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[33]||(s[33]=a(" 译者：",-1)),p(e,{href:"https://github.com/zyk2290"},{default:i(()=>[...s[30]||(s[30]=[a("zyk2290",-1)])]),_:1}),s[34]||(s[34]=a(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[31]||(s[31]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[37]||(s[37]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[35]||(s[35]=[a("LCTT",-1)])]),_:1}),s[38]||(s[38]=a(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[36]||(s[36]=[a("Linux中国",-1)])]),_:1}),s[39]||(s[39]=a(" 荣誉推出",-1))])])}const B=t(c,[["render",h]]);export{v as __pageData,B as default};
