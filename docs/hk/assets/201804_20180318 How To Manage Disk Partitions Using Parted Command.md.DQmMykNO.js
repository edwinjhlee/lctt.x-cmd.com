import{_ as t,a0 as d,w as r,s as o,ao as l,I as n,x as a,a1 as p,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"怎樣用 parted 管理硬盤分區 | LCTT x X-CMD","titleTemplate":false,"description":"怎樣用 parted 管理硬盤分區 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"怎樣用 parted 管理硬盤分區 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"怎樣用 parted 管理硬盤分區 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180318 How To Manage Disk Partitions Using Parted Command","title":"怎樣用 parted 管理硬盤分區","tag":"201804","desc":""},"relativePath":"201804/20180318 How To Manage Disk Partitions Using Parted Command.md","filePath":"[post].md"}'),c={name:"201804/20180318 How To Manage Disk Partitions Using Parted Command.md"};function h(g,s,k,b,u,m){const e=d("Link");return r(),o("div",null,[s[40]||(s[40]=l('<h1 id="怎樣用-parted-管理硬盤分區" tabindex="-1">怎樣用 parted 管理硬盤分區 <a class="header-anchor" href="#怎樣用-parted-管理硬盤分區" aria-label="Permalink to “怎樣用 parted 管理硬盤分區”">​</a></h1><p>眾所周知，對硬盤分區是 Linux 管理員一項最重要的管理任務之一，他們不能不知道這個。</p><p>在最糟糕的時候，你至少每週會收到一次依賴小組的請求，而在更大的環境裏會更加頻繁 。</p><p>你可能會問為什麼我們要用 <code>parted</code> 而不是 <code>fdisk</code>？ 它們有什麼區別？好問題，我會告訴你這兩者的區別。</p><ul><li><code>parted</code> 支持用户在大於 2TB 的硬盤上創建硬盤分區， 但 <code>fdisk</code> 命令不支持</li><li>對比 <code>fdisk</code> 來説，<code>parted</code> 是一個更高級的工具</li><li>支持更多的分區表類型，包括 GPT （LCTT 譯註：全局唯一標識分區表）</li><li>它允許用户調整分區大小， 但當縮減分區空間的時候，它沒有如我意料的工作，多數情況下我會得到錯誤消息。所以我會建議用户不要用 <code>parted</code> 來縮減分區大小。</li></ul><h3 id="什麼是-parted" tabindex="-1">什麼是 parted <a class="header-anchor" href="#什麼是-parted" aria-label="Permalink to “什麼是 parted”">​</a></h3><p><code>parted</code> 是一個操作硬盤分區的程序。它支持多種分區表類型，包括 MS-DOS 和 GPT。</p><p>它允許用户創建、刪除、調整、縮減、移動和複製分區，以及重新組織硬盤的使用，複製數據到新的硬盤上。<code>gparted</code> 是 <code>parted</code> 的圖形界面前端。</p><h3 id="怎樣安裝-parted" tabindex="-1">怎樣安裝 parted <a class="header-anchor" href="#怎樣安裝-parted" aria-label="Permalink to “怎樣安裝 parted”">​</a></h3><p>大部分發行版已經預安裝了 <code>parted</code>。如果沒有，用下列命令來安裝 <code>parted</code>。</p>',10)),n("p",null,[s[2]||(s[2]=a("對於 Debian/Ubuntu 用户, 使用 ",-1)),p(e,{href:"https://www.2daygeek.com/apt-get-apt-cache-command-examples-manage-packages-debian-ubuntu-systems/"},{default:i(()=>[...s[0]||(s[0]=[a("APT-GET 命令",-1)])]),_:1}),s[3]||(s[3]=a(" 或者 ",-1)),p(e,{href:"https://www.2daygeek.com/apt-command-examples-manage-packages-debian-ubuntu-systems/"},{default:i(()=>[...s[1]||(s[1]=[a("APT 命令",-1)])]),_:1}),s[4]||(s[4]=a(" 來安裝 ",-1)),s[5]||(s[5]=n("code",null,"parted",-1)),s[6]||(s[6]=a("。",-1))]),s[41]||(s[41]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt install parted</span></span></code></pre></div>',1)),n("p",null,[s[8]||(s[8]=a("對於 RHEL/CentOS 用户，用 ",-1)),p(e,{href:"https://www.2daygeek.com/yum-command-examples-manage-packages-rhel-centos-systems/"},{default:i(()=>[...s[7]||(s[7]=[a("YUM 命令",-1)])]),_:1}),s[9]||(s[9]=a(" 來安裝 ",-1)),s[10]||(s[10]=n("code",null,"parted",-1)),s[11]||(s[11]=a("。",-1))]),s[42]||(s[42]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo yum install parted</span></span></code></pre></div>',1)),n("p",null,[s[13]||(s[13]=a("對於 Fedora 用户，用 ",-1)),p(e,{href:"https://www.2daygeek.com/dnf-command-examples-manage-packages-fedora-system/"},{default:i(()=>[...s[12]||(s[12]=[a("DNF 命令",-1)])]),_:1}),s[14]||(s[14]=a(" 來安裝 ",-1)),s[15]||(s[15]=n("code",null,"parted",-1)),s[16]||(s[16]=a("。",-1))]),s[43]||(s[43]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install parted</span></span></code></pre></div>',1)),n("p",null,[s[18]||(s[18]=a("對於 Arch Linux 用户，用 ",-1)),p(e,{href:"https://www.2daygeek.com/pacman-command-examples-manage-packages-arch-linux-system/"},{default:i(()=>[...s[17]||(s[17]=[a("Pacman 命令",-1)])]),_:1}),s[19]||(s[19]=a("來安裝 ",-1)),s[20]||(s[20]=n("code",null,"parted",-1)),s[21]||(s[21]=a("。",-1))]),s[44]||(s[44]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo pacman -S parted</span></span></code></pre></div>',1)),n("p",null,[s[23]||(s[23]=a("對於 openSUSE 用户， 用 ",-1)),p(e,{href:"https://www.2daygeek.com/zypper-command-examples-manage-packages-opensuse-system/"},{default:i(()=>[...s[22]||(s[22]=[a("Zypper 命令",-1)])]),_:1}),s[24]||(s[24]=a("來安裝 ",-1)),s[25]||(s[25]=n("code",null,"parted",-1)),s[26]||(s[26]=a("。",-1))]),s[45]||(s[45]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo zypper in parted</span></span></code></pre></div><h3 id="怎樣啓動-parted" tabindex="-1">怎樣啓動 parted <a class="header-anchor" href="#怎樣啓動-parted" aria-label="Permalink to “怎樣啓動 parted”">​</a></h3><p>下面的 <code>parted</code> 命令會自動選擇 <code>/dev/sda</code> ，因為這是系統的第一個硬盤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted</span></span>
<span class="line"><span>GNU parted 3.2</span></span>
<span class="line"><span>Using /dev/sda</span></span>
<span class="line"><span>Welcome to GNU parted! Type &#39;help&#39; to view a list of commands.</span></span>
<span class="line"><span>(parted)</span></span></code></pre></div><p>同時我們也可以用下面的命令來重新選擇對應的的硬盤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(parted) select /dev/sdb</span></span>
<span class="line"><span>Using /dev/sdb</span></span>
<span class="line"><span>(parted)</span></span></code></pre></div><p>如果你想選擇特定的硬盤, 用下列的格式來輸入命令。 這次 ，我們將選擇 <code>/dev/sdb</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Device Name]</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb</span></span>
<span class="line"><span>GNU parted 3.2</span></span>
<span class="line"><span>Using /dev/sdb</span></span>
<span class="line"><span>Welcome to GNU parted! Type &#39;help&#39; to view a list of commands.</span></span>
<span class="line"><span>(parted)</span></span></code></pre></div><h3 id="怎樣用-parted-列出所有可用的硬盤" tabindex="-1">怎樣用 parted 列出所有可用的硬盤 <a class="header-anchor" href="#怎樣用-parted-列出所有可用的硬盤" aria-label="Permalink to “怎樣用 parted 列出所有可用的硬盤”">​</a></h3><p>如果你不知道你的電腦上有什麼硬盤，只需要運行下列命令，該命令會顯示所有可用硬盤的名字，以及其它的有用信息比如儲存空間、型號、扇區大小、硬盤標誌以及分區信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted -l</span></span>
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
<span class="line"><span>Disk Flags:</span></span></code></pre></div><p>上面的錯誤信息清晰地顯示出硬盤 <code>/dev/sdb</code> 沒有有效的<ruby>磁盤標籤<rt>disk label</rt></ruby>。 它不會自動得到磁盤標籤，所以， 我們便要自己設置硬盤標籤。</p><h3 id="怎樣用-parted-創建硬盤分區" tabindex="-1">怎樣用 parted 創建硬盤分區 <a class="header-anchor" href="#怎樣用-parted-創建硬盤分區" aria-label="Permalink to “怎樣用 parted 創建硬盤分區”">​</a></h3><p><code>parted</code> 允許用户創建主分區或者拓展分區。創建這兩種類型的分區的步驟還是一樣，但請確保你已經指定了需要的分區類型，比如 <code>primary</code> （主分區）或者 <code>extended</code> （擴展分區）。</p><p>為了演示這項操作 ，我們安裝了一個新的 <code>50 GB</code> 的硬盤到到電腦上，掛載在 <code>/dev/sdb</code> 上。</p><p>有兩種方法創建分區，第一種是更詳細的方法，另一種只是一個命令。 在下面的例子中，我們將用更詳細的方法添加一個主分區。提醒一下， 我們應該先設置磁盤標籤，因為它不會自動設置任何標籤。</p><p>在下面的例子中，我們將要創建一個 <code>10 GB</code> 的分區</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb</span></span>
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
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><p>同時，我們也可以使用單條 <code>parted</code> 命令</p><p>在下面的例子中，我們將在硬盤上創建一個 <code>10 GB</code> 的分區。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Disk Name] [mkpart] [Partition Type] [Filesystem Type] [Partition Start Size] [Partition End Size]</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb mkpart primary ext4 10.0GB 20.0GB</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><h3 id="怎樣使用所有剩餘空間創建分區" tabindex="-1">怎樣使用所有剩餘空間創建分區 <a class="header-anchor" href="#怎樣使用所有剩餘空間創建分區" aria-label="Permalink to “怎樣使用所有剩餘空間創建分區”">​</a></h3><p>你已經創建了除了 <code>/home</code> 之外等所有要求的分區，而且你想要用硬盤上所有剩餘的空間來創建 <code>/home</code> 分區，要怎樣做？可以使用下面的命令來創建分區。</p><p>下面的命令創建了一個 33.7 GB 的分區，從 <code>20 GB</code> 開始到 <code>53 GB</code> 結束。 <code>100%</code> 使用率允許用户用硬盤上所有剩餘的空餘空間。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Disk Name] [mkpart] [Partition Type] [Filesystem Type] [Partition Start Size] [Partition End Size]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo parted /dev/sdb mkpart primary ext4 20.0GB 100%</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><h3 id="怎樣用-parted-列出所有的分區" tabindex="-1">怎樣用 parted 列出所有的分區 <a class="header-anchor" href="#怎樣用-parted-列出所有的分區" aria-label="Permalink to “怎樣用 parted 列出所有的分區”">​</a></h3><p>你也許注意到了，我們已經在上述步驟中創建了三個分區，如果你想要列出所有在硬盤上可用的分區，可以使用 <code>print</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 1 1049kB 10.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 2 10.0GB 20.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 3 20.0GB 53.7GB 33.7GB primary ext4</span></span></code></pre></div><h3 id="怎樣用-mkfs-格式化分區" tabindex="-1">怎樣用 mkfs 格式化分區 <a class="header-anchor" href="#怎樣用-mkfs-格式化分區" aria-label="Permalink to “怎樣用 mkfs 格式化分區”">​</a></h3><p>用户可以用 <code>mkfs</code> 命令格式化分區。下面的步驟會用 <code>mkfs</code> 來格式化分區。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkfs.ext4 /dev/sdb1</span></span>
<span class="line"><span>mke2fs 1.43.4 (31-Jan-2017)</span></span>
<span class="line"><span>Creating filesystem with 2621440 4k blocks and 656640 inodes</span></span>
<span class="line"><span>Filesystem UUID: 415cf467-634c-4403-8c9f-47526bbaa381</span></span>
<span class="line"><span>Superblock backups stored on blocks:</span></span>
<span class="line"><span>    32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Allocating group tables: done</span></span>
<span class="line"><span>Writing inode tables: done</span></span>
<span class="line"><span>Creating journal (16384 blocks): done</span></span>
<span class="line"><span>Writing superblocks and filesystem accounting information: done</span></span></code></pre></div><p>同樣的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkfs.ext4 /dev/sdb2</span></span>
<span class="line"><span>$ sudo mkfs.ext4 /dev/sdb3</span></span></code></pre></div><p>創建必要的文件夾然後將這些分區掛載在上面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mkdir /par1 /par2 /par3</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mount /dev/sdb1 /par1</span></span>
<span class="line"><span>$ sudo mount /dev/sdb2 /par2</span></span>
<span class="line"><span>$ sudo mount /dev/sdb3 /par3</span></span></code></pre></div><p>運行下列命令來檢查是否成功掛載上新創建的分區。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ df -h /dev/sdb[1-3]</span></span>
<span class="line"><span>Filesystem Size Used Avail Use% Mounted on</span></span>
<span class="line"><span>/dev/sdb1 9.2G 37M 8.6G 1% /par1</span></span>
<span class="line"><span>/dev/sdb2 9.2G 37M 8.6G 1% /par2</span></span>
<span class="line"><span>/dev/sdb3 31G 49M 30G 1% /par3</span></span></code></pre></div><h3 id="怎樣檢查硬盤空閒空間" tabindex="-1">怎樣檢查硬盤空閒空間 <a class="header-anchor" href="#怎樣檢查硬盤空閒空間" aria-label="Permalink to “怎樣檢查硬盤空閒空間”">​</a></h3><p>運行下列命令來檢查硬盤上的空閒空間，這塊硬盤上有 <code>25.7 GB</code> 的空閒空間。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print free</span></span>
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
<span class="line"><span> 28.0GB 53.7GB 25.7GB Free Space</span></span></code></pre></div><h3 id="怎樣使用-parted-命令來重新調整分區大小" tabindex="-1">怎樣使用 parted 命令來重新調整分區大小 <a class="header-anchor" href="#怎樣使用-parted-命令來重新調整分區大小" aria-label="Permalink to “怎樣使用 parted 命令來重新調整分區大小”">​</a></h3><p><code>parted</code> 允許用户重新調整分區大小。不過我已在文章的開頭説了，不要縮小分區大小，不然會有許多錯誤。</p><p>運行下列命令來檢查硬盤分區以及所有可用空間。 可以看到硬盤上有 <code>25.7GB</code> 的可用空間。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print free</span></span>
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
<span class="line"><span> 28.0GB 53.7GB 25.7GB Free Space</span></span></code></pre></div><p>運行下列命令來重新調整分區大小。 我們將要重新調整（增加）分區 3 的結束位置，從 <code>28GB</code> 到 <code>33GB</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Disk Name] [resizepart] [Partition Number] [Partition New End Size]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo parted /dev/sdb resizepart 3 33.0GB</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><p>運行下列命令來確認分區是否已經擴容。可以看到，分區 3 已經從 <code>8GB</code> 增加到 <code>13GB</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 1 1049kB 10.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 2 10.0GB 20.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 3 20.0GB 33.0GB 13.0GB primary ext4</span></span></code></pre></div><p>重新調整文件系統大小。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo resize2fs /dev/sdb3</span></span>
<span class="line"><span>resize2fs 1.43.4 (31-Jan-2017)</span></span>
<span class="line"><span>Resizing the filesystem on /dev/sdb3 to 3173952 (4k) blocks.</span></span>
<span class="line"><span>The filesystem on /dev/sdb3 is now 3173952 (4k) blocks long.</span></span></code></pre></div><p>最後，確認分區是否已經擴容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ df -h /dev/sdb[1-3]</span></span>
<span class="line"><span>Filesystem Size Used Avail Use% Mounted on</span></span>
<span class="line"><span>/dev/sdb1 9.2G 5.1G 3.6G 59% /par1</span></span>
<span class="line"><span>/dev/sdb2 9.2G 2.1G 6.6G 24% /par2</span></span>
<span class="line"><span>/dev/sdb3 12G 1.1G 11G 10% /par3</span></span></code></pre></div><h3 id="怎樣用-parted-刪除分區" tabindex="-1">怎樣用 parted 刪除分區 <a class="header-anchor" href="#怎樣用-parted-刪除分區" aria-label="Permalink to “怎樣用 parted 刪除分區”">​</a></h3><p>我們用 <code>rm</code> 命令方便地刪除未使用的分區（如果該分區不會再被用到了）。下列步驟中，我們將會刪除分區 3 （<code>/dev/sdb3</code>）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Disk Name] [rm] [Partition Number]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo parted /dev/sdb rm 3</span></span>
<span class="line"><span>Warning: Partition /dev/sdb3 is being used. Are you sure you want to continue?</span></span>
<span class="line"><span>Yes/No? Yes</span></span>
<span class="line"><span>Error: Partition(s) 3 on /dev/sdb have been written, but we have been unable to inform the kernel of the change, probably because it/they are in use. As a result, the old partition(s) will remain in use.</span></span>
<span class="line"><span>You should reboot now before making further changes.</span></span>
<span class="line"><span>Ignore/Cancel? Ignore</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><p>我們也可以用下列的命令檢查。可以看到，分區 3 已經被成功移除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 1 1049kB 10.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 2 10.0GB 20.0GB 9999MB primary ext4</span></span></code></pre></div><h3 id="怎樣用-parted-命令設置-更改分區標誌" tabindex="-1">怎樣用 parted 命令設置/更改分區標誌 <a class="header-anchor" href="#怎樣用-parted-命令設置-更改分區標誌" aria-label="Permalink to “怎樣用 parted 命令設置/更改分區標誌”">​</a></h3><p>我們可以用下列的命令來輕易更改分區的標誌。 我們將對 <code>/dev/sdb2</code> 設置 <code>lvm</code> 標誌。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted [Disk Name] [set] [Partition Number] [Flags Name] [Flag On/Off]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo parted /dev/sdb set 2 lvm on</span></span>
<span class="line"><span>Information: You may need to update /etc/fstab.</span></span></code></pre></div><p>我們可以列出分區來驗證這次的更改。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted /dev/sdb print</span></span>
<span class="line"><span>Model: ATA VBOX HARDDISK (scsi)</span></span>
<span class="line"><span>Disk /dev/sdb: 53.7GB</span></span>
<span class="line"><span>Sector size (logical/physical): 512B/512B</span></span>
<span class="line"><span>Partition Table: msdos</span></span>
<span class="line"><span>Disk Flags:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number Start End Size Type File system Flags</span></span>
<span class="line"><span> 1 1049kB 10.0GB 9999MB primary ext4</span></span>
<span class="line"><span> 2 10.0GB 20.0GB 9999MB primary ext4 lvm</span></span></code></pre></div><p>如果你想知道可用的標誌，只需要用如下的命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ (parted) help set</span></span>
<span class="line"><span> set NUMBER FLAG STATE change the FLAG on partition NUMBER</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    NUMBER is the partition number used by Linux. On MS-DOS disk labels, the primary partitions number from 1 to 4, logical partitions from 5 onwards.</span></span>
<span class="line"><span> FLAG is one of: boot, root, swap, hidden, raid, lvm, lba, hp-service, palo, prep, msftres, bios_grub, atvrecv, diag, legacy_boot, msftdata, irst, esp</span></span>
<span class="line"><span> STATE is one of: on, off</span></span></code></pre></div><p>如果你想知道 <code>parted</code> 的其它可用命令， 只需要去到 <code>help</code> 頁面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo parted</span></span>
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
<span class="line"><span>(parted) quit</span></span></code></pre></div><hr>`,70)),n("p",null,[s[28]||(s[28]=a("via: ",-1)),p(e,{href:"https://www.2daygeek.com/how-to-manage-disk-partitions-using-parted-command/"},{default:i(()=>[...s[27]||(s[27]=[a("https://www.2daygeek.com/how-to-manage-disk-partitions-using-parted-command/",-1)])]),_:1})]),n("p",null,[s[32]||(s[32]=a("作者：",-1)),p(e,{href:"https://www.2daygeek.com/author/magesh/"},{default:i(()=>[...s[29]||(s[29]=[a("Magesh Maruthamuthu",-1)])]),_:1}),s[33]||(s[33]=a(" 譯者：",-1)),p(e,{href:"https://github.com/zyk2290"},{default:i(()=>[...s[30]||(s[30]=[a("zyk2290",-1)])]),_:1}),s[34]||(s[34]=a(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[31]||(s[31]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[37]||(s[37]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[35]||(s[35]=[a("LCTT",-1)])]),_:1}),s[38]||(s[38]=a(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[36]||(s[36]=[a("Linux中國",-1)])]),_:1}),s[39]||(s[39]=a(" 榮譽推出",-1))])])}const B=t(c,[["render",h]]);export{v as __pageData,B as default};
