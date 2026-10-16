import{_ as p,a0 as s,w as l,s as d,ao as o,I as a,a1 as n,A as r,x as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const N=JSON.parse(`{"title":"在 iSCSI Target 服务器中使用LVM创建和设置LUN（二） | LCTT x X-CMD","titleTemplate":false,"description":"在 iSCSI Target 服务器中使用LVM创建和设置LUN（二） | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 iSCSI Target 服务器中使用LVM创建和设置LUN（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 iSCSI Target 服务器中使用LVM创建和设置LUN（二） | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20141217 How to Create and Setup LUNs using LVM in 'iSCSI Target Server' on RHEL or CentOS or Fedora -Part II","title":"在 iSCSI Target 服务器中使用LVM创建和设置LUN（二）","tag":"201503","desc":""},"relativePath":"201503/20141217 How to Create and Setup LUNs using LVM in 'iSCSI Target Server' on RHEL or CentOS or Fedora -Part II.md","filePath":"[post].md"}`),c={name:"201503/20141217 How to Create and Setup LUNs using LVM in 'iSCSI Target Server' on RHEL or CentOS or Fedora -Part II.md"};function g(m,t,L,S,u,v){const i=s("Link");return l(),d("div",null,[t[14]||(t[14]=o('<h1 id="在-iscsi-target-服务器中使用lvm创建和设置lun-二" tabindex="-1">在 iSCSI Target 服务器中使用LVM创建和设置LUN（二） <a class="header-anchor" href="#在-iscsi-target-服务器中使用lvm创建和设置lun-二" aria-label="Permalink to “在 iSCSI Target 服务器中使用LVM创建和设置LUN（二）”">​</a></h1><p>LUN是逻辑单元号，它与iSCSI存储服务器共享。iSCSI 目标器通过TCP/IP网络共享它的物理驱动器给发起程序（initiator）。这些来自一个大型存储（SAN：Storage Area Network）的驱动器集合称作LUN。在真实环境中LUN是在LVM中定义的，因为它可以按需扩展。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/Create-LUNS-inLVM.png" alt="Create LUNS using LVM in Target Server"></p><p><em>在目标器中使用 LVM 创建 LUN</em></p><h3 id="为什么使用lun" tabindex="-1">为什么使用LUN？ <a class="header-anchor" href="#为什么使用lun" aria-label="Permalink to “为什么使用LUN？”">​</a></h3><p>LUN用于存储，SAN存储大多数由LUN的集群来组成存储池，LUN由目标器的几块物理驱动器组成。我们可以使用LUN作为系统物理驱动器来安装操作系统，LUN可以用在集群、虚拟服务器、SAN中。在虚拟服务器中使用LUN的主要用途是作为操作系统的存储。LUN的性能和可靠性根据在创建目标存储服务器时所使用的驱动器决定。</p><h3 id="前置阅读" tabindex="-1">前置阅读 <a class="header-anchor" href="#前置阅读" aria-label="Permalink to “前置阅读”">​</a></h3><p>要了解创建iSCSI 目标器，点击下面的链接。</p>',8)),a("ul",null,[a("li",null,[n(i,{href:"http://linux.cn/article-4971-1.html"},{default:r(()=>[...t[0]||(t[0]=[e("使用iSCSI Target创建集中式安全存储（一）",-1)])]),_:1})])]),t[15]||(t[15]=o(`<h4 id="主服务器设置" tabindex="-1">主服务器设置 <a class="header-anchor" href="#主服务器设置" aria-label="Permalink to “主服务器设置”">​</a></h4><p>系统信息和网络设置部分与前文的iSCSI 目标器相同 - 我们在相同的服务器上定义LUN。</p><ul><li>操作系统 – CentOS 6.5 (Final)</li><li>iSCSI 目标器 IP – 192.168.0.200</li><li>使用的端口 : TCP 860, 3260</li><li>配置文件 : /etc/tgt/targets.conf</li></ul><h3 id="在iscsi-目标器使用lvm创建lun" tabindex="-1">在iSCSI 目标器使用LVM创建LUN <a class="header-anchor" href="#在iscsi-目标器使用lvm创建lun" aria-label="Permalink to “在iSCSI 目标器使用LVM创建LUN”">​</a></h3><p>首先，用<strong>fdisk -l</strong>命令找出驱动器的列表，这会列出系统中所有分区的列表。</p><pre><code># fdisk -l
</code></pre><p>上面的命令只会给出基本系统的驱动器信息。为了得到存储设备的信息，使用下面的命令来得到存储设备的列表。</p><pre><code># fdisk -l /dev/vda &amp;&amp; fdisk -l /dev/sda
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/1.jpg" alt="List Storage Drives"></p><p><em>列出存储设备</em></p><p><strong>注意</strong>：这里<strong>vda</strong>是虚拟机硬盘，因为我使用的是虚拟机来用于演示，<strong>/dev/sda</strong> 是额外加入的存储。</p><h3 id="第一步-创建用于lun的lvm驱动器" tabindex="-1">第一步： 创建用于LUN的LVM驱动器 <a class="header-anchor" href="#第一步-创建用于lun的lvm驱动器" aria-label="Permalink to “第一步： 创建用于LUN的LVM驱动器”">​</a></h3><p>我们使用<strong>/dev/sda</strong>驱动器来创建LVM。</p><pre><code># fdisk -l /dev/sda
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/2.jpg" alt="List LVM Drive"></p><p><em>列出LVM驱动器</em></p><p>现在让我们使用如下fdisk命令列出驱动器分区。</p><pre><code># fdisk -cu /dev/sda
</code></pre><ul><li>选项 ‘<strong>-c</strong>’ 关闭DOS兼容模式。</li><li>选项 ‘<strong>-u</strong>’ 用于列出分区表时给出扇区而不是柱面的大小。</li></ul><p>使用<strong>n</strong>创建新的分区。</p><pre><code>Command (m for help): n
</code></pre><p>使用<strong>p</strong>创建主分区。</p><pre><code>Command action
   e   extended
   p   primary partition (1-4)
</code></pre><p>给我们创建的分区一个分区号。</p><pre><code>Partition number (1-4): 1
</code></pre><p>到这里，我们就要设置LVM驱动器了。因此，我们需要使用默认的设置来使用整个驱动器。</p><pre><code>First sector (2048-37748735, default 2048): 
Using default value 2048
Last sector, +sectors or +size{K,M,G} (2048-37748735, default 37748735): 
Using default value 37748735
</code></pre><p>选择分区的类型，这里我们要设置LVM，因此使用<strong>8e</strong>。使用<strong>l</strong>列出所有的类型。</p><pre><code>Command (m for help): t
</code></pre><p>选择想要改变类型的分区。</p><pre><code>Selected partition 1
Hex code (type L to list codes): 8e
Changed system type of partition 1 to 8e (Linux LVM)
</code></pre><p>在改变完类型之后，通过打印（<strong>p</strong>）选项来列出分区表。</p><pre><code>Command (m for help): p

Disk /dev/sda: 19.3 GB, 19327352832 bytes
255 heads, 63 sectors/track, 2349 cylinders, total 37748736 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x9fae99c8

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1            2048    37748735    18873344   8e  Linux LVM
</code></pre><p>使用<strong>w</strong>写入设置并退出fdisk工具，重启系统使设置生效。</p><p>作为参考，我下面附上了截图来给你在创建LVM驱动器时一个明确的指导。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/3.jpg" alt="Create LVM Partition"></p><p><em>创建LVM分区</em></p><p>系统重启后，使用fdisk命令列出分区表。</p><pre><code># fdisk -l /dev/sda
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/4.jpg" alt="Verify LVM Partition"></p><p><em>验证LVM分区</em></p><h3 id="第二步-为lun创建逻辑卷" tabindex="-1">第二步： 为LUN创建逻辑卷 <a class="header-anchor" href="#第二步-为lun创建逻辑卷" aria-label="Permalink to “第二步： 为LUN创建逻辑卷”">​</a></h3><p>现在我们使用‘pvcreate’命令创建物理卷。</p><pre><code># pvcreate /dev/sda1
</code></pre><p>用iSCSI的名字创建卷组来区分这个卷组。</p><pre><code># vgcreate vg_iscsi /dev/sda1
</code></pre><p>这里我定义了4个逻辑卷，因此在我的iSCSI target上就会有4个LUN。</p><pre><code># lvcreate -L 4G -n lv_iscsi vg_iscsi

# lvcreate -L 4G -n lv_iscsi-1 vg_iscsi

# lvcreate -L 4G -n lv_iscsi-2 vg_iscsi

# lvcreate -L 4G -n lv_iscsi-3 vg_iscsi
</code></pre><p>列出物理卷、卷组和逻辑卷确定。</p><pre><code># pvs &amp;&amp; vgs &amp;&amp; lvs
# lvs
</code></pre><p>为了更好地理解上面的命令，我在下面包含了截图作为参考。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/5.jpg" alt="Creating LVM Logical Volumes"></p><p><em>创建LVM逻辑卷</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/6.jpg" alt="Verify LVM Logical Volumes"></p><p><em>验证LVM逻辑卷</em></p><h3 id="第三步-在目标器中定义lun" tabindex="-1">第三步: 在目标器中定义LUN <a class="header-anchor" href="#第三步-在目标器中定义lun" aria-label="Permalink to “第三步: 在目标器中定义LUN”">​</a></h3><p>我们已经创建了逻辑卷并准备使用LUN，现在我们在目标器配置中定义LUN，只有这样做它才能用在客户机中（发起程序）。</p><p>用你选择的编辑器打开位于‘/etc/tgt/targets.conf’的目标器配置文件。</p><pre><code># vim /etc/tgt/targets.conf
</code></pre><p>追加下面的target配置文件中的定义。保存并关闭文件。</p><pre><code>&lt;target iqn.2014-07.com.tecmint:tgt1&gt;
       backing-store /dev/vg_iscsi/lv_iscsi
&lt;/target&gt;
&lt;target iqn.2014-07.com.tecmint:tgt1&gt;
       backing-store /dev/vg_iscsi/lv_iscsi-1
&lt;/target&gt;
&lt;target iqn.2014-07.com.tecmint:tgt1&gt;
       backing-store /dev/vg_iscsi/lv_iscsi-2
&lt;/target&gt;
&lt;target iqn.2014-07.com.tecmint:tgt1&gt;
       backing-store /dev/vg_iscsi/lv_iscsi-3
&lt;/target
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/7.jpg" alt="Configure LUNs in Target Server"></p><p><em>在target中配置LUN</em></p><p>上图的解释：</p><ol><li>iSCSI 采取限定名 (iqn.2014-07.com.tecmint:tgt1).</li><li>名称随便你</li><li>用于确定目标名， 这是这台服务器中的第一个目标</li><li>LVM共享特定的LUN。</li></ol><p>接下来使用下面的命令重载<strong>tgd</strong>服务配置。</p><pre><code># /etc/init.d/tgtd reload
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/8.jpg" alt="Reload Configuration"></p><p><em>重载配置</em></p><p>接下来使用下面的命令验证可用的LUN。</p><pre><code># tgtadm --mode target --op show
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/9.jpg" alt="List Available LUNs"></p><p><em>列出可用LUN</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/10.jpg" alt="LUNs Information"></p><p><em>LUN信息</em></p><p>上面的命令会列出可用LUN的下面这些信息</p><ol><li>iSCSI 限定名</li><li>iSCSI 已经准备好</li><li>默认LUN 0被控制器所保留</li><li>LUN 1是我们定义的目标器</li><li>这里我为每个LUN都定义了4GB</li><li>在线： 是的，这就是可以使用的LUN</li></ol><p>现在我们已经使用LVM为目标器定义了LUN，这可扩展并且支持很多特性，如快照。我们将会在第三部分了解如何用目标器授权，并且本地挂载远程存储。</p><hr>`,79)),a("p",null,[t[2]||(t[2]=e("via: ",-1)),n(i,{href:"http://www.tecmint.com/create-luns-using-lvm-in-iscsi-target/"},{default:r(()=>[...t[1]||(t[1]=[e("http://www.tecmint.com/create-luns-using-lvm-in-iscsi-target/",-1)])]),_:1})]),a("p",null,[t[6]||(t[6]=e("作者：",-1)),n(i,{href:"http://www.tecmint.com/author/babinlonston/"},{default:r(()=>[...t[3]||(t[3]=[e("Babin Lonston",-1)])]),_:1}),t[7]||(t[7]=e(" 译者：",-1)),n(i,{href:"https://github.com/geekpi"},{default:r(()=>[...t[4]||(t[4]=[e("geekpi",-1)])]),_:1}),t[8]||(t[8]=e(" 校对：",-1)),n(i,{href:"https://github.com/wxy"},{default:r(()=>[...t[5]||(t[5]=[e("wxy",-1)])]),_:1})]),a("p",null,[t[11]||(t[11]=e("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[9]||(t[9]=[e("LCTT",-1)])]),_:1}),t[12]||(t[12]=e(" 原创翻译，",-1)),n(i,{href:"http://linux.cn/"},{default:r(()=>[...t[10]||(t[10]=[e("Linux中国",-1)])]),_:1}),t[13]||(t[13]=e(" 荣誉推出",-1))])])}const f=p(c,[["render",g]]);export{N as __pageData,f as default};
