import{_ as i,a0 as o,w as r,s as p,ao as l,I as t,x as d,a1 as s,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const G=JSON.parse('{"title":"Linux下掌控磁盤分區的九大神器 | LCTT x X-CMD","titleTemplate":false,"description":"Linux下掌控磁盤分區的九大神器 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux下掌控磁盤分區的九大神器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux下掌控磁盤分區的九大神器 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140617 9 commands to check hard disk partitions and disk space on Linux","title":"Linux下掌控磁盤分區的九大神器","tag":"201407","desc":""},"relativePath":"201407/20140617 9 commands to check hard disk partitions and disk space on Linux.md","filePath":"[post].md"}'),f={name:"201407/20140617 9 commands to check hard disk partitions and disk space on Linux.md"};function c(b,e,u,k,m,h){const n=o("Link");return r(),p("div",null,[e[11]||(e[11]=l(`<h1 id="linux下掌控磁盤分區的九大神器" tabindex="-1">Linux下掌控磁盤分區的九大神器 <a class="header-anchor" href="#linux下掌控磁盤分區的九大神器" aria-label="Permalink to “Linux下掌控磁盤分區的九大神器”">​</a></h1><p>在這篇文章中，我們來了解一些用來檢查你的系統分區的一些命令，這些命令將檢查每個磁盤的分區情況和其它細節，例如總空間容量，已用完的空間和文件系統等。</p><p>像fdisk，sfdisk和cfdisk命令這樣的常規分區工具，不僅可以顯示分區信息，還可以修改。</p><h3 id="_1-fdisk" tabindex="-1">1. fdisk <a class="header-anchor" href="#_1-fdisk" aria-label="Permalink to “1. fdisk”">​</a></h3><p>Fdisk是檢查磁盤上分區的最常用命令，fdisk命令可以顯示分區和細節，如文件系統類型，但是它並不報告每個分區的字節大小。</p><pre><code>$ sudo fdisk -l

Disk /dev/sda: 500.1 GB, 500107862016 bytes
255 heads, 63 sectors/track, 60801 cylinders, total 976773168 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x30093008

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *          63   146801969    73400953+   7  HPFS/NTFS/exFAT
/dev/sda2       146802031   976771071   414984520+   f  W95 Ext&#39;d (LBA)
/dev/sda5       146802033   351614654   102406311    7  HPFS/NTFS/exFAT
/dev/sda6       351614718   556427339   102406311   83  Linux
/dev/sda7       556429312   560427007     1998848   82  Linux swap / Solaris
/dev/sda8       560429056   976771071   208171008   83  Linux

Disk /dev/sdb: 4048 MB, 4048551936 bytes
54 heads, 9 sectors/track, 16270 cylinders, total 7907328 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x0001135d

   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1   *        2048     7907327     3952640    b  W95 FAT32
</code></pre><p>每個設備都單獨顯示其詳細信息：容量大小，扇區數，設備ID及其包含的每個分區。</p><h3 id="_2-sfdisk" tabindex="-1">2. sfdisk <a class="header-anchor" href="#_2-sfdisk" aria-label="Permalink to “2. sfdisk”">​</a></h3><p>Sfdisk是另一種跟fdisk用途相似的實用工具，但具有更多的功能。它能夠以MB為單位顯示每個分區的大小。</p><pre><code>$ sudo sfdisk -l -uM

Disk /dev/sda: 60801 cylinders, 255 heads, 63 sectors/track
Warning: extended partition does not start at a cylinder boundary.
DOS and Linux will interpret the contents differently.
Units = mebibytes of 1048576 bytes, blocks of 1024 bytes, counting from 0

   Device Boot Start   End    MiB    #blocks   Id  System
/dev/sda1   *     0+ 71680- 71681-  73400953+   7  HPFS/NTFS/exFAT
/dev/sda2     71680+ 476938  405259- 414984520+   f  W95 Ext&#39;d (LBA)
/dev/sda3         0      -      0          0    0  Empty
/dev/sda4         0      -      0          0    0  Empty
/dev/sda5     71680+ 171686- 100007- 102406311    7  HPFS/NTFS/exFAT
/dev/sda6     171686+ 271693- 100007- 102406311   83  Linux
/dev/sda7     271694  273645   1952    1998848   82  Linux swap / Solaris
/dev/sda8     273647  476938  203292  208171008   83  Linux

Disk /dev/sdb: 1020 cylinders, 125 heads, 62 sectors/track
Warning: The partition table looks like it was made
  for C/H/S=*/54/9 (instead of 1020/125/62).
For this listing I&#39;ll assume that geometry.
Units = mebibytes of 1048576 bytes, blocks of 1024 bytes, counting from 0

   Device Boot Start   End    MiB    #blocks   Id  System
/dev/sdb1   *     1   3860   3860    3952640    b  W95 FAT32
                start: (c,h,s) expected (4,11,6) found (0,32,33)
                end: (c,h,s) expected (1023,53,9) found (492,53,9)
/dev/sdb2         0      -      0          0    0  Empty
/dev/sdb3         0      -      0          0    0  Empty
/dev/sdb4         0      -      0          0    0  Empty
</code></pre><h3 id="_3-cfdisk" tabindex="-1">3. cfdisk <a class="header-anchor" href="#_3-cfdisk" aria-label="Permalink to “3. cfdisk”">​</a></h3><p>Cfdisk是一個基於ncurses（提供字符終端處理庫，包括面板和菜單）的帶有交互式用户界面的Linux分區編輯器，它可以用來列出現有分區以及創建或修改這些分區。</p><p>下面是一個如何使用Cfdisk來列出分區的例子。</p><p><img src="http://www.binarytides.com/blog/wp-content/uploads/2014/06/linux-cfdisk.png" alt="linux cfdisk disk partitions"></p><p>Cfdisk一次只能列出一個分區，所以如果你需要看某一磁盤的細節，可以把該磁盤的設備名作為Cfdisk的參數。</p><pre><code>$ sudo cfdisk /dev/sdb
</code></pre><h3 id="_4-parted" tabindex="-1">4. parted <a class="header-anchor" href="#_4-parted" aria-label="Permalink to “4. parted”">​</a></h3><p>Parted是另一個命令列實用程序，可以列出分區；如果需要的話，也可進行修改。</p><p>下面是一個例子，列出了詳細的分區信息。</p><pre><code>$ sudo parted -l
Model: ATA ST3500418AS (scsi)
Disk /dev/sda: 500GB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
    
Number  Start   End     Size    Type      File system     Flags
 1      32.3kB  75.2GB  75.2GB  primary   ntfs            boot
 2      75.2GB  500GB   425GB   extended                  lba
 5      75.2GB  180GB   105GB   logical   ntfs
 6      180GB   285GB   105GB   logical   ext4
 7      285GB   287GB   2047MB  logical   linux-swap(v1)
 8      287GB   500GB   213GB   logical   ext4
   

Model: Sony Storage Media (scsi)
Disk /dev/sdb: 4049MB
Sector size (logical/physical): 512B/512B
Partition Table: msdos

Number  Start   End     Size    Type     File system  Flags
 1      1049kB  4049MB  4048MB  primary  fat32        boot
</code></pre><h3 id="_5-df" tabindex="-1">5. df <a class="header-anchor" href="#_5-df" aria-label="Permalink to “5. df”">​</a></h3><p>Df是不是一個分區工具，但它打印出掛裝文件系統的細節，Df可以列出甚至不是真實的磁盤分區的文件系統。</p><p>這裏是個簡單的例子：</p><pre><code>$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda6        97G   43G   49G  48% /
none            4.0K     0  4.0K   0% /sys/fs/cgroup
udev            3.9G  8.0K  3.9G   1% /dev
tmpfs           799M  1.7M  797M   1% /run
none            5.0M     0  5.0M   0% /run/lock
none            3.9G   12M  3.9G   1% /run/shm
none            100M   20K  100M   1% /run/user
/dev/sda8       196G  154G   33G  83% /media/13f35f59-f023-4d98-b06f-9dfaebefd6c1
/dev/sda5        98G   37G   62G  38% /media/4668484A68483B47
</code></pre><p>只有以 /dev 開始的文件系統才是實際的設備或分區。</p><p>可以使用grep命令來篩選出實際的硬盤分區或文件系統。</p><pre><code>$ df -h | grep ^/dev
/dev/sda6        97G   43G   49G  48% /
/dev/sda8       196G  154G   33G  83% /media/13f35f59-f023-4d98-b06f-9dfaebefd6c1
/dev/sda5        98G   37G   62G  38% /media/4668484A68483B47
</code></pre><p>要只顯示真正的磁盤分區與分區類型，可以這樣使用Df：</p><pre><code>$ df -h --output=source,fstype,size,used,avail,pcent,target -x tmpfs -x devtmpfs
Filesystem     Type     Size  Used Avail Use% Mounted on
/dev/sda6      ext4      97G   43G   49G  48% /
/dev/sda8      ext4     196G  154G   33G  83% /media/13f35f59-f023-4d98-b06f-9dfaebefd6c1
/dev/sda5      fuseblk   98G   37G   62G  38% /media/4668484A68483B47
</code></pre><p>請注意，Df只顯示已掛載的文件系統或分區，並不是所有。</p><h3 id="_6-pydf" tabindex="-1">6. pydf <a class="header-anchor" href="#_6-pydf" aria-label="Permalink to “6. pydf”">​</a></h3><p>它是用Python寫的Df的改進版本，以易讀的方式打印出所有磁盤分區。</p><pre><code>$ pydf
Filesystem Size Used Avail Use%             Mounted on                                 
/dev/sda6   96G  43G   48G 44.7 [####.....] /                                          
/dev/sda8  195G 153G   32G 78.4 [#######..] /media/13f35f59-f023-4d98-b06f-9dfaebefd6c1
/dev/sda5   98G  36G   61G 37.1 [###......] /media/4668484A68483B47
</code></pre><p>另外，pydf被限制為僅顯示已掛載的文件系統。</p><h3 id="_7-lsblk" tabindex="-1">7. lsblk <a class="header-anchor" href="#_7-lsblk" aria-label="Permalink to “7. lsblk”">​</a></h3><p>列出了所有的塊存儲設備，包括磁盤分區和光盤驅動器。細節包括所有分區/塊總大小和掛載點。</p><p>它不會報告分區上的已使用和空閒磁盤空間。</p><pre><code>$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0 465.8G  0 disk 
├─sda1   8:1    0    70G  0 part 
├─sda2   8:2    0     1K  0 part 
├─sda5   8:5    0  97.7G  0 part /media/4668484A68483B47
├─sda6   8:6    0  97.7G  0 part /
├─sda7   8:7    0   1.9G  0 part [SWAP]
└─sda8   8:8    0 198.5G  0 part /media/13f35f59-f023-4d98-b06f-9dfaebefd6c1
sdb      8:16   1   3.8G  0 disk 
└─sdb1   8:17   1   3.8G  0 part 
sr0     11:0    1  1024M  0 rom
</code></pre><p>如果沒有掛載點，這就意味着文件系統未安裝，而對於cd/dvd這意味着沒有插入光盤。</p><p>lsblk能夠顯示每個設備的更多信息，如標籤和型號，更多請查看信息手冊。</p><h3 id="_8-blkid" tabindex="-1">8. blkid <a class="header-anchor" href="#_8-blkid" aria-label="Permalink to “8. blkid”">​</a></h3><p>顯示塊設備（分區和存儲介質）屬性，例如UUID和文件系統類型，不報告分區空間。</p><pre><code>$ sudo blkid
/dev/sda1: UUID=&quot;5E38BE8B38BE6227&quot; TYPE=&quot;ntfs&quot; 
/dev/sda5: UUID=&quot;4668484A68483B47&quot; TYPE=&quot;ntfs&quot; 
/dev/sda6: UUID=&quot;6fa5a72a-ba26-4588-a103-74bb6b33a763&quot; TYPE=&quot;ext4&quot; 
/dev/sda7: UUID=&quot;94443023-34a1-4428-8f65-2fb02e571dae&quot; TYPE=&quot;swap&quot; 
/dev/sda8: UUID=&quot;13f35f59-f023-4d98-b06f-9dfaebefd6c1&quot; TYPE=&quot;ext4&quot; 
/dev/sdb1: UUID=&quot;08D1-8024&quot; TYPE=&quot;vfat&quot;
</code></pre><h3 id="_9-hwinfo" tabindex="-1">9. hwinfo <a class="header-anchor" href="#_9-hwinfo" aria-label="Permalink to “9. hwinfo”">​</a></h3><p>hwinfo是一個通用的硬件信息的工具，可以用來打印出磁盤和分區表，但是輸出不再像上面的命令那樣打印每個分區的詳細信息。</p><pre><code>$ hwinfo --block --short
disk:                                                           
  /dev/sda             ST3500418AS
  /dev/sdb             Sony Storage Media
partition:
  /dev/sda1            Partition
  /dev/sda2            Partition
  /dev/sda5            Partition
  /dev/sda6            Partition
  /dev/sda7            Partition
  /dev/sda8            Partition
  /dev/sdb1            Partition
cdrom:
  /dev/sr0             SONY DVD RW DRU-190A
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>parted的輸出可以得到簡潔而完整的不同分區的概述、其上的文件系統以及總空間。pydf和df它們一樣，只是被限制為只顯示已掛載文件系統。</p><p>fdisk和sfdisk顯示完整大量的信息，需要花些時間來解釋。cfdisk是一個交互式分區工具，每次顯示一個單一的設備。</p><p>來嘗試下這些命令吧，別忘了在下面評論喲！</p><hr>`,51)),t("p",null,[e[1]||(e[1]=d("via: ",-1)),s(n,{href:"http://www.binarytides.com/linux-command-check-disk-partitions/"},{default:a(()=>[...e[0]||(e[0]=[d("http://www.binarytides.com/linux-command-check-disk-partitions/",-1)])]),_:1})]),t("p",null,[e[4]||(e[4]=d("譯者：",-1)),s(n,{href:"https://github.com/tenght"},{default:a(()=>[...e[2]||(e[2]=[d("tenght",-1)])]),_:1}),e[5]||(e[5]=d(" 校對：",-1)),s(n,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...e[3]||(e[3]=[d("Caroline",-1)])]),_:1})]),t("p",null,[e[8]||(e[8]=d("本文由 ",-1)),s(n,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[6]||(e[6]=[d("LCTT",-1)])]),_:1}),e[9]||(e[9]=d(" 原創翻譯，",-1)),s(n,{href:"http://linux.cn/"},{default:a(()=>[...e[7]||(e[7]=[d("Linux中國",-1)])]),_:1}),e[10]||(e[10]=d(" 榮譽推出",-1))])])}const y=i(f,[["render",c]]);export{G as __pageData,y as default};
