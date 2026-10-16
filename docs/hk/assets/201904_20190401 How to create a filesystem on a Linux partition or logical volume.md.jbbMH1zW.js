import{_ as l,a0 as i,w as o,s as d,I as t,a1 as e,A as p,x as n,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"如何在 Linux 分區或邏輯卷中創建文件系統 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 分區或邏輯卷中創建文件系統 | LCTT (201904) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 分區或邏輯卷中創建文件系統 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 分區或邏輯卷中創建文件系統 | LCTT (201904) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201904/20190401 How to create a filesystem on a Linux partition or logical volume","title":"如何在 Linux 分區或邏輯卷中創建文件系統","tag":"201904","desc":""},"relativePath":"201904/20190401 How to create a filesystem on a Linux partition or logical volume.md","filePath":"[post].md"}'),c={name:"201904/20190401 How to create a filesystem on a Linux partition or logical volume.md"};function u(m,s,k,h,g,f){const a=i("Link");return o(),d("div",null,[t("p",null,[e(a,{href:"collector:",title:"lujun9972"},{default:p(()=>[...s[0]||(s[0]=[n("#",-1)])]),_:1}),s[2]||(s[2]=n(": 作者: (Kedar Vijay Kulkarni (Red Hat) ",-1)),e(a,{href:"https://opensource.com/users/kkulkarn"},{default:p(()=>[...s[1]||(s[1]=[n("https://opensource.com/users/kkulkarn",-1)])]),_:1}),s[3]||(s[3]=n(")",-1))]),s[19]||(s[19]=r(`<h1 id="如何在-linux-分區或邏輯卷中創建文件系統" tabindex="-1">如何在 Linux 分區或邏輯卷中創建文件系統 <a class="header-anchor" href="#如何在-linux-分區或邏輯卷中創建文件系統" aria-label="Permalink to “如何在 Linux 分區或邏輯卷中創建文件系統”">​</a></h1><blockquote><p>學習在你的系統中創建一個文件系統，並且長期或者非長期地掛載它。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/documents_papers_file_storage_work.png?itok=YlXpAqAJ" alt="Filing papers and documents" title="Filing papers and documents"></p><p>在計算技術中，文件系統控制如何存儲和檢索數據，並且幫助組織存儲媒介中的文件。如果沒有文件系統，信息將被存儲為一個大數據塊，而且你無法知道一條信息在哪結束，下一條信息在哪開始。文件系統通過為存儲數據的文件提供名稱，並且在文件系統中的磁盤上維護文件和目錄表以及它們的開始和結束位置、總的大小等來幫助管理所有的這些信息。</p><p>在 Linux 中，當你創建一個硬盤分區或者邏輯卷之後，接下來通常是通過格式化這個分區或邏輯捲來創建文件系統。這個操作方法假設你已經知道如何創建分區或邏輯卷，並且你希望將它格式化為包含有文件系統，並且掛載它。</p><h3 id="創建文件系統" tabindex="-1">創建文件系統 <a class="header-anchor" href="#創建文件系統" aria-label="Permalink to “創建文件系統”">​</a></h3><p>假設你為你的系統添加了一塊新的硬盤並且在它上面創建了一個叫 <code>/dev/sda1</code> 的分區。</p><p>1、為了驗證 Linux 內核已經發現這個分區，你可以 <code>cat</code> 出 <code>/proc/partitions</code> 的內容，就像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# cat /proc/partitions</span></span>
<span class="line"><span>major minor  #blocks  name</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 253            0   10485760 vda</span></span>
<span class="line"><span> 253            1       8192000 vda1</span></span>
<span class="line"><span>  11            0       1048575 sr0</span></span>
<span class="line"><span>  11            1       374 sr1</span></span>
<span class="line"><span>   8            0   10485760 sda</span></span>
<span class="line"><span>   8            1   10484736 sda1</span></span>
<span class="line"><span> 252            0       3145728 dm-0</span></span>
<span class="line"><span> 252            1       2097152 dm-1</span></span>
<span class="line"><span> 252            2       1048576 dm-2</span></span>
<span class="line"><span>   8    16      1048576 sdb</span></span></code></pre></div><p>2、決定你想要去創建的文件系統種類，比如 ext4、XFS，或者其他的一些。這裏是一些可選項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# mkfs.&lt;tab&gt;&lt;tab&gt;</span></span>
<span class="line"><span>mkfs.btrfs mkfs.cramfs mkfs.ext2 mkfs.ext3 mkfs.ext4 mkfs.minix mkfs.xfs</span></span></code></pre></div><p>3、為了這次練習的目的，選擇 ext4。（我喜歡 ext4，因為如果你需要的話，它可以允許你去壓縮文件系統，這對於 XFS 並不簡單。）這裏是完成它的方法（輸出可能會因設備名稱或者大小而不同）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# mkfs.ext4 /dev/sda1</span></span>
<span class="line"><span>mke2fs 1.42.9 (28-Dec-2013)</span></span>
<span class="line"><span>Filesystem label=</span></span>
<span class="line"><span>OS type: Linux</span></span>
<span class="line"><span>Block size=4096 (log=2)</span></span>
<span class="line"><span>Fragment size=4096 (log=2)</span></span>
<span class="line"><span>Stride=0 blocks, Stripe width=8191 blocks</span></span>
<span class="line"><span>194688 inodes, 778241 blocks</span></span>
<span class="line"><span>38912 blocks (5.00%) reserved for the super user</span></span>
<span class="line"><span>First data block=0</span></span>
<span class="line"><span>Maximum filesystem blocks=799014912</span></span>
<span class="line"><span>24 block groups</span></span>
<span class="line"><span>32768 blocks per group, 32768 fragments per group</span></span>
<span class="line"><span>8112 inodes per group</span></span>
<span class="line"><span>Superblock backups stored on blocks:</span></span>
<span class="line"><span>     32768, 98304, 163840, 229376, 294912</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Allocating group tables: done</span></span>
<span class="line"><span>Writing inode tables: done</span></span>
<span class="line"><span>Creating journal (16384 blocks): done</span></span>
<span class="line"><span>Writing superblocks and filesystem accounting information: done</span></span></code></pre></div><p>4、在上一步中，如果你想去創建不同的文件系統，請使用不同變種的 <code>mkfs</code> 命令。</p><h3 id="掛載文件系統" tabindex="-1">掛載文件系統 <a class="header-anchor" href="#掛載文件系統" aria-label="Permalink to “掛載文件系統”">​</a></h3><p>當你創建好文件系統後，你可以在你的操作系統中掛載它。</p><p>1、首先，識別出新文件系統的 UUID 編碼。使用 <code>blkid</code> 命令列出所有可識別的塊存儲設備並且在輸出信息中查找 <code>sda1</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# blkid</span></span>
<span class="line"><span>/dev/vda1: UUID=&quot;716e713d-4e91-4186-81fd-c6cfa1b0974d&quot; TYPE=&quot;xfs&quot;</span></span>
<span class="line"><span>/dev/sr1: UUID=&quot;2019-03-08-16-17-02-00&quot; LABEL=&quot;config-2&quot; TYPE=&quot;iso9660&quot;</span></span>
<span class="line"><span>/dev/sda1: UUID=&quot;wow9N8-dX2d-ETN4-zK09-Gr1k-qCVF-eCerbF&quot; TYPE=&quot;LVM2_member&quot;</span></span>
<span class="line"><span>/dev/mapper/test-test1: PTTYPE=&quot;dos&quot;</span></span>
<span class="line"><span>/dev/sda1: UUID=&quot;ac96b366-0cdd-4e4c-9493-bb93531be644&quot; TYPE=&quot;ext4&quot;</span></span>
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>2、運行下面的命令掛載 <code>/dev/sd1</code> 設備：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# mkdir /mnt/mount_point_for_dev_sda1</span></span>
<span class="line"><span>[root@localhost ~]# ls /mnt/</span></span>
<span class="line"><span>mount_point_for_dev_sda1</span></span>
<span class="line"><span>[root@localhost ~]# mount -t ext4 /dev/sda1 /mnt/mount_point_for_dev_sda1/</span></span>
<span class="line"><span>[root@localhost ~]# df -h</span></span>
<span class="line"><span>Filesystem Size Used Avail Use% Mounted on</span></span>
<span class="line"><span>/dev/vda1 7.9G 920M 7.0G 12% /</span></span>
<span class="line"><span>devtmpfs 443M 0 443M 0% /dev</span></span>
<span class="line"><span>tmpfs 463M 0 463M 0% /dev/shm</span></span>
<span class="line"><span>tmpfs 463M 30M 434M 7% /run</span></span>
<span class="line"><span>tmpfs 463M 0 463M 0% /sys/fs/cgroup</span></span>
<span class="line"><span>tmpfs 93M 0 93M 0% /run/user/0</span></span>
<span class="line"><span>/dev/sda1 2.9G 9.0M 2.7G 1% /mnt/mount_point_for_dev_sda1</span></span>
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>命令 <code>df -h</code> 顯示了每個文件系統被掛載的掛載點。查找 <code>/dev/sd1</code>。上面的掛載命令使用的設備名稱是 <code>/dev/sda1</code>。用 <code>blkid</code> 命令中的 UUID 編碼替換它。注意，在 <code>/mnt</code> 下一個被新創建的目錄掛載了 <code>/dev/sda1</code>。</p><p>3、直接在命令列下使用掛載命令（就像上一步一樣）會有一個問題，那就是掛載不會在設備重啓後存在。為使永久性地掛載文件系統，編輯 <code>/etc/fstab</code> 文件去包含你的掛載信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>UUID=ac96b366-0cdd-4e4c-9493-bb93531be644 /mnt/mount_point_for_dev_sda1/ ext4 defaults 0 0</span></span></code></pre></div><p>4、編輯完 <code>/etc/fstab</code> 文件後，你可以 <code>umount /mnt/mount_point_for_fev_sda1</code> 並且運行 <code>mount -a</code> 命令去掛載被列在 <code>/etc/fstab</code> 文件中的所有設備文件。如果一切順利的話，你可以使用 <code>df -h</code> 列出並且查看你掛載的文件系統：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@localhost ~]# umount /mnt/mount_point_for_dev_sda1/</span></span>
<span class="line"><span>[root@localhost ~]# mount -a</span></span>
<span class="line"><span>[root@localhost ~]# df -h</span></span>
<span class="line"><span>Filesystem Size Used Avail Use% Mounted on</span></span>
<span class="line"><span>/dev/vda1 7.9G 920M 7.0G 12% /</span></span>
<span class="line"><span>devtmpfs 443M 0 443M 0% /dev</span></span>
<span class="line"><span>tmpfs 463M 0 463M 0% /dev/shm</span></span>
<span class="line"><span>tmpfs 463M 30M 434M 7% /run</span></span>
<span class="line"><span>tmpfs 463M 0 463M 0% /sys/fs/cgroup</span></span>
<span class="line"><span>tmpfs 93M 0 93M 0% /run/user/0</span></span>
<span class="line"><span>/dev/sda1 2.9G 9.0M 2.7G 1% /mnt/mount_point_for_dev_sda1</span></span></code></pre></div><p>5、你也可以檢測文件系統是否被掛載：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# mount | grep ^/dev/sd</span></span>
<span class="line"><span>/dev/sda1 on /mnt/mount_point_for_dev_sda1 type ext4 (rw,relatime,seclabel,stripe=8191,data=ordered)</span></span></code></pre></div><p>現在你已經知道如何去創建文件系統並且長期或者非長期的掛載在你的系統中。</p><hr>`,29)),t("p",null,[s[5]||(s[5]=n("via: ",-1)),e(a,{href:"https://opensource.com/article/19/4/create-filesystem-linux-partition"},{default:p(()=>[...s[4]||(s[4]=[n("https://opensource.com/article/19/4/create-filesystem-linux-partition",-1)])]),_:1})]),t("p",null,[s[10]||(s[10]=n("作者：",-1)),e(a,{href:"https://opensource.com/users/kkulkarn"},{default:p(()=>[...s[6]||(s[6]=[n("Kedar Vijay Kulkarni",-1)])]),_:1}),s[11]||(s[11]=n(" 選題：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[7]||(s[7]=[n("lujun9972",-1)])]),_:1}),s[12]||(s[12]=n(" 譯者：",-1)),e(a,{href:"https://github.com/liujing97"},{default:p(()=>[...s[8]||(s[8]=[n("liujing97",-1)])]),_:1}),s[13]||(s[13]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1})]),t("p",null,[s[16]||(s[16]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[15]||(s[15]=[n("Linux中國",-1)])]),_:1}),s[18]||(s[18]=n(" 榮譽推出",-1))])])}const _=l(c,[["render",u]]);export{x as __pageData,_ as default};
