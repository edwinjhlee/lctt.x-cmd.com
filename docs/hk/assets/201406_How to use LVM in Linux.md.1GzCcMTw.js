import{_ as p,a0 as d,w as l,s as i,ao as s,I as a,x as n,a1 as r,A as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"Linux LVM簡明教程 | LCTT x X-CMD","titleTemplate":false,"description":"Linux LVM簡明教程 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux LVM簡明教程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux LVM簡明教程 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/How to use LVM in Linux","title":"Linux LVM簡明教程","tag":"201406","desc":""},"relativePath":"201406/How to use LVM in Linux.md","filePath":"[post].md"}'),u={name:"201406/How to use LVM in Linux.md"};function c(m,e,v,V,L,M){const o=d("Link");return l(),i("div",null,[e[11]||(e[11]=s(`<h1 id="linux-lvm簡明教程" tabindex="-1">Linux LVM簡明教程 <a class="header-anchor" href="#linux-lvm簡明教程" aria-label="Permalink to “Linux LVM簡明教程”">​</a></h1><p>邏輯卷管理LVM是一個多才多藝的硬盤系統工具。無論在Linux或者其他類似的系統，都是非常的好用。傳統分區使用固定大小分區，重新調整大小十分麻煩。但是，LVM可以創建和管理“邏輯”卷，而不是直接使用物理硬盤。可以讓管理員彈性的管理邏輯卷的擴大縮小，操作簡單，而不損壞已存儲的數據。可以隨意將新的硬盤添加到LVM，以直接擴展已經存在的邏輯卷。LVM並不需要重啓就可以讓內核知道分區的存在。</p><p>LVM使用分層結構，如下圖所示。</p><p><img src="https://farm3.staticflickr.com/2910/14127487464_96b24a906b_z.jpg" alt=""></p><p>圖中頂部，首先是實際的物理磁盤及其劃分的分區和其上的物理卷（PV）。一個或多個物理卷可以用來創建卷組（VG）。然後基於卷組可以創建邏輯卷（LV）。只要在卷組中有可用空間，就可以隨心所欲的創建邏輯卷。文件系統就是在邏輯捲上創建的，然後可以在操作系統掛載和訪問。</p><h3 id="lvm測試説明" tabindex="-1">LVM測試説明 <a class="header-anchor" href="#lvm測試説明" aria-label="Permalink to “LVM測試説明”">​</a></h3><p>本文將介紹<strong>怎麼在linux中創建和管理LVM卷</strong>。我們將會分成兩個部分。第一個部分，我們首先要在一個硬盤上創建多個邏輯卷，然後將它們掛載在/lvm-mount目錄。然後我們將要對創建好的卷調整大小。而第二部分，我們將會從另外一塊硬盤增加額外的捲到LVM中。</p><h3 id="準備磁盤分區" tabindex="-1">準備磁盤分區 <a class="header-anchor" href="#準備磁盤分區" aria-label="Permalink to “準備磁盤分區”">​</a></h3><p>通過使用fdisk，創建磁盤分區。我們需要創建3個1G分區，注意，並不要求分區的大小一致。同樣，分區需要使用‘8e’類型來使他們可用於LVM。</p><pre><code># fdisk /dev/sdb 
</code></pre><hr><pre><code>Command (m for help): n ## 新建
Command action
   e   extended
   p   primary partition (1-4)
p ## 主分區

Partition number (1-4): 1 ## 分區號
First cylinder (1-1044, default 1):  ## 回車用默認的1
Last cylinder, +cylinders or +size{K,M,G} (1-1044, default 1044): +1G ## 大小

Command (m for help): t ## 改變類型
Selected partition 1
Hex code (type L to list codes): 8e ## LVM 的分區代碼
Changed system type of partition 1 to 8e (Linux LVM)
</code></pre><p>重複上面的操作來創建其他兩個分區。分區創建完成後，我們應該有類似如下的輸出：</p><pre><code># fdisk -l 
</code></pre><hr><pre><code>   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               1         132     1060258+  8e  Linux LVM
/dev/sdb2             133         264     1060290   8e  Linux LVM
/dev/sdb3             265         396     1060290   8e  Linux LVM
</code></pre><h3 id="準備物理卷-pv" tabindex="-1">準備物理卷(PV) <a class="header-anchor" href="#準備物理卷-pv" aria-label="Permalink to “準備物理卷(PV)”">​</a></h3><p>剛創建的分區是用來儲存物理卷的。LVM可以使用不同大小的物理卷。</p><pre><code># pvcreate /dev/sdb1
# pvcreate /dev/sdb2
# pvcreate /dev/sdb3 
</code></pre><p>使用下列命令檢查物理卷的創建情況。下面截取部分輸出。&quot;/dev/sdb2&quot;是一個新的&quot;1.01 GiB&quot;物理卷。</p><pre><code># pvdisplay 
</code></pre><hr><pre><code>  --- NEW Physical volume ---
  PV Name               /dev/sdb2
  VG Name
  PV Size               1.01 GiB
  Allocatable           NO
  PE Size               0
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               jszvzz-ENA2-g5Pd-irhV-T9wi-ZfA3-0xo092
</code></pre><p>使用下列命令可以刪除物理卷。</p><pre><code># pvremove /dev/sdb1 
</code></pre><h3 id="準備卷組-vg" tabindex="-1">準備卷組(VG) <a class="header-anchor" href="#準備卷組-vg" aria-label="Permalink to “準備卷組(VG)”">​</a></h3><p>下列命令用來創建名為&#39;volume-group1&#39;的卷組，使用/dev/sdb1, /dev/sdb2 和 /dev/sdb3創建。</p><pre><code># vgcreate volume-group1 /dev/sdb1 /dev/sdb2 /dev/sdb3
</code></pre><p>使用下列命令可以來驗證卷組。</p><pre><code># vgdisplay 
</code></pre><hr><pre><code>  --- Volume group ---
  VG Name               volume-group1
  System ID
  Format                lvm2
  Metadata Areas        3
  Metadata Sequence No  1
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                0
  Open LV               0
  Max PV                0
  Cur PV                3
  Act PV                3
  VG Size               3.02 GiB
  PE Size               4.00 MiB
  Total PE              774
  Alloc PE / Size       0 / 0
  Free  PE / Size       774 / 3.02 GiB
  VG UUID               bwd2pS-fkAz-lGVZ-qc7C-TaKv-fFUC-IzGNBK
</code></pre><p>從輸出中，我們可以看見卷組的使用量/總量。物理卷給卷組提供空間。只要在這個卷組中還有可用空間，我們就可以隨意創建邏輯卷。</p><p>使用下列命令刪除卷組。</p><pre><code># vgremove volume-group1 
</code></pre><h3 id="創建邏輯卷-lv" tabindex="-1">創建邏輯卷(LV) <a class="header-anchor" href="#創建邏輯卷-lv" aria-label="Permalink to “創建邏輯卷(LV)”">​</a></h3><p>下列命令創建一個名為&#39;1v1&#39;、大小為100MB的邏輯卷。我們使用小分區減少執行時間。這個邏輯卷使用之前創建的卷組的空間。</p><pre><code># lvcreate -L 100M -n lv1 volume-group1 
</code></pre><p>邏輯卷可使用lvdisplay命令查看。</p><pre><code># lvdisplay 
</code></pre><hr><pre><code>  --- Logical volume ---
  LV Name                /dev/volume-group1/lv1
  VG Name                volume-group1
  LV UUID                YNQ1aa-QVt1-hEj6-ArJX-I1Q4-y1h1-OFEtlW
  LV Write Access        read/write
  LV Status              available
  # open                 0
  LV Size                100.00 MiB
  Current LE             25
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:2
</code></pre><p>現在邏輯卷已經準備好了，我們可以格式化和掛載邏輯卷，就像其它ext2/3/4分區一樣！</p><pre><code># mkfs.ext4 /dev/volume-group1/lv1
# mkdir /lvm-mount
# mount /dev/volume-group1/lv1 /lvm-mount/ 
</code></pre><p>一旦邏輯卷掛載，我們就可以到掛載點 /lvm-mount/ 上讀寫了。要創建和掛載其它的邏輯卷，我們重複這個過程。</p><p>最後，使用lvremove我們可以刪除邏輯卷。</p><pre><code># umount /lvm-mount/
# lvremove /dev/volume-group1/lv1 
</code></pre><h3 id="擴展一個lvm卷" tabindex="-1">擴展一個LVM卷 <a class="header-anchor" href="#擴展一個lvm卷" aria-label="Permalink to “擴展一個LVM卷”">​</a></h3><p>調整邏輯卷大小的功能是LVM最有用的功能。這個部分會討論我們怎麼樣擴展一個存在的邏輯卷。下面，我們將會擴展先前創建的邏輯卷‘lv1’擴大到200MB。</p><p>注意，調整邏輯卷大小之後，也需要對文件系統調整大小進行匹配。這個額外的步驟各不相同，取決於創建文件系統的類型。在本文中，我們使用&#39;lv1&#39;創建了ext4類型的文件系統，所以這裏的操作是針對ext4文件系統的。（ext2/3文件系統也類同）。命令的執行順序是很重要的。</p><p>首先，我們卸載掉lv1卷</p><pre><code># umount /lvm-mount/ 
</code></pre><p>然後，設置卷的大小為200M</p><pre><code># lvresize -L 200M /dev/volume-group1/lv1 
</code></pre><p>接下來，檢查磁盤錯誤</p><pre><code># e2fsck -f /dev/volume-group1/lv1 
</code></pre><p>運行以下命令擴展文件系統以後，ext4信息就更新了。</p><pre><code># resize2fs /dev/volume-group1/lv1 
</code></pre><p>現在，這個邏輯卷應該已經擴展到200MB了。我們檢查LV的狀態來驗證。</p><pre><code># lvdisplay 
</code></pre><hr><pre><code>  --- Logical volume ---
  LV Name                /dev/volume-group1/lv1
  VG Name                volume-group1
  LV UUID                9RtmMY-0RIZ-Dq40-ySjU-vmrj-f1es-7rXBwa
  LV Write Access        read/write
  LV Status              available
  # open                 0
  LV Size                200.00 MiB
  Current LE             50
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:2
</code></pre><p>現在，這個邏輯卷可以再次掛載，同樣這個方法也可用於其他分區。</p><h3 id="縮減一個lvm卷" tabindex="-1">縮減一個LVM卷 <a class="header-anchor" href="#縮減一個lvm卷" aria-label="Permalink to “縮減一個LVM卷”">​</a></h3><p>這章節介紹縮減LVM卷大小的方法。命令的順序同樣重要。並且，下列命令對ext2/3/4文件系統同樣有效。</p><p>注意減少邏輯卷的大小值若小於儲存的數據大小，存儲在後面的數據會丟失。</p><p>首先，卸載掉卷。</p><pre><code># umount /dev/volume-group1/lv1
</code></pre><p>然後，檢測磁盤錯誤。</p><pre><code># e2fsck -f /dev/volume-group1/lv1 
</code></pre><p>接下來縮小文件系統，更新ext4信息。</p><pre><code># resize2fs /dev/volume-group1/lv1 100M 
</code></pre><p>完成以後，減少邏輯卷大小</p><pre><code># lvresize -L 100M /dev/volume-group1/lv1 
</code></pre><blockquote><p>WARNING: Reducing active logical volume to 100.00 MiB THIS MAY DESTROY YOUR DATA (filesystem etc.) Do you really want to reduce lv1? [y/n]: y Reducing logical volume lv1 to 100.00 MiB Logical volume lv1 successfully resized</p></blockquote><p>最後，驗證調整後的邏輯卷大小。</p><pre><code># lvdisplay 
</code></pre><hr><pre><code>--- Logical volume ---
  LV Name                /dev/volume-group1/lv1
  VG Name                volume-group1
  LV UUID                9RtmMY-0RIZ-Dq40-ySjU-vmrj-f1es-7rXBwa
  LV Write Access        read/write
  LV Status              available
  # open                 0
  LV Size                100.00 MiB
  Current LE             25
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:2
</code></pre><h3 id="擴展一個卷組" tabindex="-1">擴展一個卷組 <a class="header-anchor" href="#擴展一個卷組" aria-label="Permalink to “擴展一個卷組”">​</a></h3><p>本節將討論擴展卷組的方法，將一個物理卷添加到卷組。讓我們假設我們的卷組&#39;volume-group1&#39;已經滿了，需要擴大。手上的硬盤（sdb）已經沒有其他空閒分區，我們添加了另外一個硬盤（sdc）。我們將看到如何把sdc的分區添加到卷組以擴展。</p><p>檢測現在卷組狀態</p><pre><code># vgdisplay volume-group1 
</code></pre><hr><pre><code> --- Volume group ---
  VG Name               volume-group1
  System ID
  Format                lvm2
  Metadata Areas        3
  Metadata Sequence No  8
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                1
  Open LV               0
  Max PV                0
  Cur PV                3
  Act PV                3
  VG Size               3.02 GiB
  PE Size               4.00 MiB
  Total PE              774
  Alloc PE / Size       25 / 100.00 MiB
  Free  PE / Size       749 / 2.93 GiB
  VG UUID               bwd2pS-fkAz-lGVZ-qc7C-TaKv-fFUC-IzGNBK
</code></pre><p>首先，我們創建一個2GB分區sdc1，類型為LVM（8e），如教程前所述。</p><pre><code># fdisk /dev/sdc 
</code></pre><hr><pre><code>Command (m for help): n
Command action
   e   extended
   p   primary partition (1-4)
p
Partition number (1-4): 1
First cylinder (1-1044, default 1):
Using default value 1
Last cylinder, +cylinders or +size{K,M,G} (1-1044, default 1044): +2G

Command (m for help): t
Selected partition 1
Hex code (type L to list codes): 8e
Changed system type of partition 1 to 8e (Linux LVM)

Command (m for help): w
The partition table has been altered!
</code></pre><p>然後，我們創建一個物理卷 /dev/sdc1</p><pre><code># pvcreate /dev/sdc1 
</code></pre><p>現在，物理卷已經準備好了，我們可以簡單地將它增加到已存在的卷組&#39;volume-group1&#39;上。</p><pre><code># vgextend volume-group1 /dev/sdc1 
</code></pre><p>使用vgdisplay來驗證（可以看到卷組大小已經增大）。</p><pre><code># vgdisplay 
</code></pre><hr><pre><code>  --- Volume group ---
  VG Name               volume-group1
  System ID
  Format                lvm2
  Metadata Areas        4
  Metadata Sequence No  9
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                1
  Open LV               0
  Max PV                0
  Cur PV                4
  Act PV                4
  VG Size               5.03 GiB
  PE Size               4.00 MiB
  Total PE              1287
  Alloc PE / Size       25 / 100.00 MiB
  Free  PE / Size       1262 / 4.93 GiB
  VG UUID               bwd2pS-fkAz-lGVZ-qc7C-TaKv-fFUC-IzGNBK
</code></pre><p>注意，儘管我們使用一個單獨的磁盤做示範，其實只要是‘8e’類型的磁盤分區都可以用來擴展卷組。</p><p>總結一下，LVM是一個非常給力的工具，用來創建和管理可變大小的分區。本文中，我們已經看見了動態分區如何在LVM中創建和使用。我們也看見了擴展/縮小邏輯卷和卷組的方法，和如何增加一個新的磁盤到LVM。</p><p>希望對你有幫助。</p><hr>`,101)),a("p",null,[e[1]||(e[1]=n("via: ",-1)),r(o,{href:"http://xmodulo.com/2014/05/use-lvm-linux.html"},{default:t(()=>[...e[0]||(e[0]=[n("http://xmodulo.com/2014/05/use-lvm-linux.html",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=n("譯者：",-1)),r(o,{href:"http://www.vicyu.net"},{default:t(()=>[...e[2]||(e[2]=[n("Vic___",-1)])]),_:1}),e[5]||(e[5]=n(" 校對：",-1)),r(o,{href:"https://github.com/wxy"},{default:t(()=>[...e[3]||(e[3]=[n("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=n("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[6]||(e[6]=[n("LCTT",-1)])]),_:1}),e[9]||(e[9]=n(" 原創翻譯，",-1)),r(o,{href:"http://linux.cn/"},{default:t(()=>[...e[7]||(e[7]=[n("Linux中國",-1)])]),_:1}),e[10]||(e[10]=n(" 榮譽推出",-1))])])}const x=p(u,[["render",c]]);export{f as __pageData,x as default};
