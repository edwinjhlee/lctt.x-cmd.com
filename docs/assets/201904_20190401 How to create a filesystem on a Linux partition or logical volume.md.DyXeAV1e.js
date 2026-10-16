import{_ as l,a0 as i,w as o,s as d,I as t,a1 as e,A as p,x as n,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"如何在 Linux 分区或逻辑卷中创建文件系统 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 分区或逻辑卷中创建文件系统 | LCTT (201904) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 分区或逻辑卷中创建文件系统 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 分区或逻辑卷中创建文件系统 | LCTT (201904) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201904/20190401 How to create a filesystem on a Linux partition or logical volume","title":"如何在 Linux 分区或逻辑卷中创建文件系统","tag":"201904","desc":""},"relativePath":"201904/20190401 How to create a filesystem on a Linux partition or logical volume.md","filePath":"[post].md"}'),c={name:"201904/20190401 How to create a filesystem on a Linux partition or logical volume.md"};function u(m,s,k,h,g,f){const a=i("Link");return o(),d("div",null,[t("p",null,[e(a,{href:"collector:",title:"lujun9972"},{default:p(()=>[...s[0]||(s[0]=[n("#",-1)])]),_:1}),s[2]||(s[2]=n(": 作者: (Kedar Vijay Kulkarni (Red Hat) ",-1)),e(a,{href:"https://opensource.com/users/kkulkarn"},{default:p(()=>[...s[1]||(s[1]=[n("https://opensource.com/users/kkulkarn",-1)])]),_:1}),s[3]||(s[3]=n(")",-1))]),s[19]||(s[19]=r(`<h1 id="如何在-linux-分区或逻辑卷中创建文件系统" tabindex="-1">如何在 Linux 分区或逻辑卷中创建文件系统 <a class="header-anchor" href="#如何在-linux-分区或逻辑卷中创建文件系统" aria-label="Permalink to “如何在 Linux 分区或逻辑卷中创建文件系统”">​</a></h1><blockquote><p>学习在你的系统中创建一个文件系统，并且长期或者非长期地挂载它。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/documents_papers_file_storage_work.png?itok=YlXpAqAJ" alt="Filing papers and documents" title="Filing papers and documents"></p><p>在计算技术中，文件系统控制如何存储和检索数据，并且帮助组织存储媒介中的文件。如果没有文件系统，信息将被存储为一个大数据块，而且你无法知道一条信息在哪结束，下一条信息在哪开始。文件系统通过为存储数据的文件提供名称，并且在文件系统中的磁盘上维护文件和目录表以及它们的开始和结束位置、总的大小等来帮助管理所有的这些信息。</p><p>在 Linux 中，当你创建一个硬盘分区或者逻辑卷之后，接下来通常是通过格式化这个分区或逻辑卷来创建文件系统。这个操作方法假设你已经知道如何创建分区或逻辑卷，并且你希望将它格式化为包含有文件系统，并且挂载它。</p><h3 id="创建文件系统" tabindex="-1">创建文件系统 <a class="header-anchor" href="#创建文件系统" aria-label="Permalink to “创建文件系统”">​</a></h3><p>假设你为你的系统添加了一块新的硬盘并且在它上面创建了一个叫 <code>/dev/sda1</code> 的分区。</p><p>1、为了验证 Linux 内核已经发现这个分区，你可以 <code>cat</code> 出 <code>/proc/partitions</code> 的内容，就像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# cat /proc/partitions</span></span>
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
<span class="line"><span>   8    16      1048576 sdb</span></span></code></pre></div><p>2、决定你想要去创建的文件系统种类，比如 ext4、XFS，或者其他的一些。这里是一些可选项：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# mkfs.&lt;tab&gt;&lt;tab&gt;</span></span>
<span class="line"><span>mkfs.btrfs mkfs.cramfs mkfs.ext2 mkfs.ext3 mkfs.ext4 mkfs.minix mkfs.xfs</span></span></code></pre></div><p>3、为了这次练习的目的，选择 ext4。（我喜欢 ext4，因为如果你需要的话，它可以允许你去压缩文件系统，这对于 XFS 并不简单。）这里是完成它的方法（输出可能会因设备名称或者大小而不同）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# mkfs.ext4 /dev/sda1</span></span>
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
<span class="line"><span>Writing superblocks and filesystem accounting information: done</span></span></code></pre></div><p>4、在上一步中，如果你想去创建不同的文件系统，请使用不同变种的 <code>mkfs</code> 命令。</p><h3 id="挂载文件系统" tabindex="-1">挂载文件系统 <a class="header-anchor" href="#挂载文件系统" aria-label="Permalink to “挂载文件系统”">​</a></h3><p>当你创建好文件系统后，你可以在你的操作系统中挂载它。</p><p>1、首先，识别出新文件系统的 UUID 编码。使用 <code>blkid</code> 命令列出所有可识别的块存储设备并且在输出信息中查找 <code>sda1</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# blkid</span></span>
<span class="line"><span>/dev/vda1: UUID=&quot;716e713d-4e91-4186-81fd-c6cfa1b0974d&quot; TYPE=&quot;xfs&quot;</span></span>
<span class="line"><span>/dev/sr1: UUID=&quot;2019-03-08-16-17-02-00&quot; LABEL=&quot;config-2&quot; TYPE=&quot;iso9660&quot;</span></span>
<span class="line"><span>/dev/sda1: UUID=&quot;wow9N8-dX2d-ETN4-zK09-Gr1k-qCVF-eCerbF&quot; TYPE=&quot;LVM2_member&quot;</span></span>
<span class="line"><span>/dev/mapper/test-test1: PTTYPE=&quot;dos&quot;</span></span>
<span class="line"><span>/dev/sda1: UUID=&quot;ac96b366-0cdd-4e4c-9493-bb93531be644&quot; TYPE=&quot;ext4&quot;</span></span>
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>2、运行下面的命令挂载 <code>/dev/sd1</code> 设备：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# mkdir /mnt/mount_point_for_dev_sda1</span></span>
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
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>命令 <code>df -h</code> 显示了每个文件系统被挂载的挂载点。查找 <code>/dev/sd1</code>。上面的挂载命令使用的设备名称是 <code>/dev/sda1</code>。用 <code>blkid</code> 命令中的 UUID 编码替换它。注意，在 <code>/mnt</code> 下一个被新创建的目录挂载了 <code>/dev/sda1</code>。</p><p>3、直接在命令行下使用挂载命令（就像上一步一样）会有一个问题，那就是挂载不会在设备重启后存在。为使永久性地挂载文件系统，编辑 <code>/etc/fstab</code> 文件去包含你的挂载信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>UUID=ac96b366-0cdd-4e4c-9493-bb93531be644 /mnt/mount_point_for_dev_sda1/ ext4 defaults 0 0</span></span></code></pre></div><p>4、编辑完 <code>/etc/fstab</code> 文件后，你可以 <code>umount /mnt/mount_point_for_fev_sda1</code> 并且运行 <code>mount -a</code> 命令去挂载被列在 <code>/etc/fstab</code> 文件中的所有设备文件。如果一切顺利的话，你可以使用 <code>df -h</code> 列出并且查看你挂载的文件系统：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@localhost ~]# umount /mnt/mount_point_for_dev_sda1/</span></span>
<span class="line"><span>[root@localhost ~]# mount -a</span></span>
<span class="line"><span>[root@localhost ~]# df -h</span></span>
<span class="line"><span>Filesystem Size Used Avail Use% Mounted on</span></span>
<span class="line"><span>/dev/vda1 7.9G 920M 7.0G 12% /</span></span>
<span class="line"><span>devtmpfs 443M 0 443M 0% /dev</span></span>
<span class="line"><span>tmpfs 463M 0 463M 0% /dev/shm</span></span>
<span class="line"><span>tmpfs 463M 30M 434M 7% /run</span></span>
<span class="line"><span>tmpfs 463M 0 463M 0% /sys/fs/cgroup</span></span>
<span class="line"><span>tmpfs 93M 0 93M 0% /run/user/0</span></span>
<span class="line"><span>/dev/sda1 2.9G 9.0M 2.7G 1% /mnt/mount_point_for_dev_sda1</span></span></code></pre></div><p>5、你也可以检测文件系统是否被挂载：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# mount | grep ^/dev/sd</span></span>
<span class="line"><span>/dev/sda1 on /mnt/mount_point_for_dev_sda1 type ext4 (rw,relatime,seclabel,stripe=8191,data=ordered)</span></span></code></pre></div><p>现在你已经知道如何去创建文件系统并且长期或者非长期的挂载在你的系统中。</p><hr>`,29)),t("p",null,[s[5]||(s[5]=n("via: ",-1)),e(a,{href:"https://opensource.com/article/19/4/create-filesystem-linux-partition"},{default:p(()=>[...s[4]||(s[4]=[n("https://opensource.com/article/19/4/create-filesystem-linux-partition",-1)])]),_:1})]),t("p",null,[s[10]||(s[10]=n("作者：",-1)),e(a,{href:"https://opensource.com/users/kkulkarn"},{default:p(()=>[...s[6]||(s[6]=[n("Kedar Vijay Kulkarni",-1)])]),_:1}),s[11]||(s[11]=n(" 选题：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[7]||(s[7]=[n("lujun9972",-1)])]),_:1}),s[12]||(s[12]=n(" 译者：",-1)),e(a,{href:"https://github.com/liujing97"},{default:p(()=>[...s[8]||(s[8]=[n("liujing97",-1)])]),_:1}),s[13]||(s[13]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1})]),t("p",null,[s[16]||(s[16]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[15]||(s[15]=[n("Linux中国",-1)])]),_:1}),s[18]||(s[18]=n(" 荣誉推出",-1))])])}const _=l(c,[["render",u]]);export{x as __pageData,_ as default};
