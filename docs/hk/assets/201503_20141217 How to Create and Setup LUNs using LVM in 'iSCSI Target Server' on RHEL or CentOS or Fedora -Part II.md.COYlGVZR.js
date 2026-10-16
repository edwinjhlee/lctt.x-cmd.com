import{_ as p,a0 as s,w as l,s as d,ao as o,I as a,a1 as n,A as r,x as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const N=JSON.parse(`{"title":"在 iSCSI Target 服務器中使用LVM創建和設置LUN（二） | LCTT x X-CMD","titleTemplate":false,"description":"在 iSCSI Target 服務器中使用LVM創建和設置LUN（二） | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 iSCSI Target 服務器中使用LVM創建和設置LUN（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 iSCSI Target 服務器中使用LVM創建和設置LUN（二） | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20141217 How to Create and Setup LUNs using LVM in 'iSCSI Target Server' on RHEL or CentOS or Fedora -Part II","title":"在 iSCSI Target 服務器中使用LVM創建和設置LUN（二）","tag":"201503","desc":""},"relativePath":"201503/20141217 How to Create and Setup LUNs using LVM in 'iSCSI Target Server' on RHEL or CentOS or Fedora -Part II.md","filePath":"[post].md"}`),c={name:"201503/20141217 How to Create and Setup LUNs using LVM in 'iSCSI Target Server' on RHEL or CentOS or Fedora -Part II.md"};function g(m,t,L,S,u,v){const i=s("Link");return l(),d("div",null,[t[14]||(t[14]=o('<h1 id="在-iscsi-target-服務器中使用lvm創建和設置lun-二" tabindex="-1">在 iSCSI Target 服務器中使用LVM創建和設置LUN（二） <a class="header-anchor" href="#在-iscsi-target-服務器中使用lvm創建和設置lun-二" aria-label="Permalink to “在 iSCSI Target 服務器中使用LVM創建和設置LUN（二）”">​</a></h1><p>LUN是邏輯單元號，它與iSCSI存儲服務器共享。iSCSI 目標器通過TCP/IP網絡共享它的物理驅動器給發起程序（initiator）。這些來自一個大型存儲（SAN：Storage Area Network）的驅動器集合稱作LUN。在真實環境中LUN是在LVM中定義的，因為它可以按需擴展。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/Create-LUNS-inLVM.png" alt="Create LUNS using LVM in Target Server"></p><p><em>在目標器中使用 LVM 創建 LUN</em></p><h3 id="為什麼使用lun" tabindex="-1">為什麼使用LUN？ <a class="header-anchor" href="#為什麼使用lun" aria-label="Permalink to “為什麼使用LUN？”">​</a></h3><p>LUN用於存儲，SAN存儲大多數由LUN的集羣來組成存儲池，LUN由目標器的幾塊物理驅動器組成。我們可以使用LUN作為系統物理驅動器來安裝操作系統，LUN可以用在集羣、虛擬服務器、SAN中。在虛擬服務器中使用LUN的主要用途是作為操作系統的存儲。LUN的性能和可靠性根據在創建目標存儲服務器時所使用的驅動器決定。</p><h3 id="前置閲讀" tabindex="-1">前置閲讀 <a class="header-anchor" href="#前置閲讀" aria-label="Permalink to “前置閲讀”">​</a></h3><p>要了解創建iSCSI 目標器，點擊下面的鏈接。</p>',8)),a("ul",null,[a("li",null,[n(i,{href:"http://linux.cn/article-4971-1.html"},{default:r(()=>[...t[0]||(t[0]=[e("使用iSCSI Target創建集中式安全存儲（一）",-1)])]),_:1})])]),t[15]||(t[15]=o(`<h4 id="主服務器設置" tabindex="-1">主服務器設置 <a class="header-anchor" href="#主服務器設置" aria-label="Permalink to “主服務器設置”">​</a></h4><p>系統信息和網絡設置部分與前文的iSCSI 目標器相同 - 我們在相同的服務器上定義LUN。</p><ul><li>操作系統 – CentOS 6.5 (Final)</li><li>iSCSI 目標器 IP – 192.168.0.200</li><li>使用的端口 : TCP 860, 3260</li><li>配置文件 : /etc/tgt/targets.conf</li></ul><h3 id="在iscsi-目標器使用lvm創建lun" tabindex="-1">在iSCSI 目標器使用LVM創建LUN <a class="header-anchor" href="#在iscsi-目標器使用lvm創建lun" aria-label="Permalink to “在iSCSI 目標器使用LVM創建LUN”">​</a></h3><p>首先，用<strong>fdisk -l</strong>命令找出驅動器的列表，這會列出系統中所有分區的列表。</p><pre><code># fdisk -l
</code></pre><p>上面的命令只會給出基本系統的驅動器信息。為了得到存儲設備的信息，使用下面的命令來得到存儲設備的列表。</p><pre><code># fdisk -l /dev/vda &amp;&amp; fdisk -l /dev/sda
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/1.jpg" alt="List Storage Drives"></p><p><em>列出存儲設備</em></p><p><strong>注意</strong>：這裏<strong>vda</strong>是虛擬機硬盤，因為我使用的是虛擬機來用於演示，<strong>/dev/sda</strong> 是額外加入的存儲。</p><h3 id="第一步-創建用於lun的lvm驅動器" tabindex="-1">第一步： 創建用於LUN的LVM驅動器 <a class="header-anchor" href="#第一步-創建用於lun的lvm驅動器" aria-label="Permalink to “第一步： 創建用於LUN的LVM驅動器”">​</a></h3><p>我們使用<strong>/dev/sda</strong>驅動器來創建LVM。</p><pre><code># fdisk -l /dev/sda
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/2.jpg" alt="List LVM Drive"></p><p><em>列出LVM驅動器</em></p><p>現在讓我們使用如下fdisk命令列出驅動器分區。</p><pre><code># fdisk -cu /dev/sda
</code></pre><ul><li>選項 ‘<strong>-c</strong>’ 關閉DOS兼容模式。</li><li>選項 ‘<strong>-u</strong>’ 用於列出分區表時給出扇區而不是柱面的大小。</li></ul><p>使用<strong>n</strong>創建新的分區。</p><pre><code>Command (m for help): n
</code></pre><p>使用<strong>p</strong>創建主分區。</p><pre><code>Command action
   e   extended
   p   primary partition (1-4)
</code></pre><p>給我們創建的分區一個分區號。</p><pre><code>Partition number (1-4): 1
</code></pre><p>到這裏，我們就要設置LVM驅動器了。因此，我們需要使用默認的設置來使用整個驅動器。</p><pre><code>First sector (2048-37748735, default 2048): 
Using default value 2048
Last sector, +sectors or +size{K,M,G} (2048-37748735, default 37748735): 
Using default value 37748735
</code></pre><p>選擇分區的類型，這裏我們要設置LVM，因此使用<strong>8e</strong>。使用<strong>l</strong>列出所有的類型。</p><pre><code>Command (m for help): t
</code></pre><p>選擇想要改變類型的分區。</p><pre><code>Selected partition 1
Hex code (type L to list codes): 8e
Changed system type of partition 1 to 8e (Linux LVM)
</code></pre><p>在改變完類型之後，通過打印（<strong>p</strong>）選項來列出分區表。</p><pre><code>Command (m for help): p

Disk /dev/sda: 19.3 GB, 19327352832 bytes
255 heads, 63 sectors/track, 2349 cylinders, total 37748736 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x9fae99c8

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1            2048    37748735    18873344   8e  Linux LVM
</code></pre><p>使用<strong>w</strong>寫入設置並退出fdisk工具，重啓系統使設置生效。</p><p>作為參考，我下面附上了截圖來給你在創建LVM驅動器時一個明確的指導。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/3.jpg" alt="Create LVM Partition"></p><p><em>創建LVM分區</em></p><p>系統重啓後，使用fdisk命令列出分區表。</p><pre><code># fdisk -l /dev/sda
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/4.jpg" alt="Verify LVM Partition"></p><p><em>驗證LVM分區</em></p><h3 id="第二步-為lun創建邏輯卷" tabindex="-1">第二步： 為LUN創建邏輯卷 <a class="header-anchor" href="#第二步-為lun創建邏輯卷" aria-label="Permalink to “第二步： 為LUN創建邏輯卷”">​</a></h3><p>現在我們使用‘pvcreate’命令創建物理卷。</p><pre><code># pvcreate /dev/sda1
</code></pre><p>用iSCSI的名字創建卷組來區分這個卷組。</p><pre><code># vgcreate vg_iscsi /dev/sda1
</code></pre><p>這裏我定義了4個邏輯卷，因此在我的iSCSI target上就會有4個LUN。</p><pre><code># lvcreate -L 4G -n lv_iscsi vg_iscsi

# lvcreate -L 4G -n lv_iscsi-1 vg_iscsi

# lvcreate -L 4G -n lv_iscsi-2 vg_iscsi

# lvcreate -L 4G -n lv_iscsi-3 vg_iscsi
</code></pre><p>列出物理卷、卷組和邏輯卷確定。</p><pre><code># pvs &amp;&amp; vgs &amp;&amp; lvs
# lvs
</code></pre><p>為了更好地理解上面的命令，我在下面包含了截圖作為參考。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/5.jpg" alt="Creating LVM Logical Volumes"></p><p><em>創建LVM邏輯卷</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/6.jpg" alt="Verify LVM Logical Volumes"></p><p><em>驗證LVM邏輯卷</em></p><h3 id="第三步-在目標器中定義lun" tabindex="-1">第三步: 在目標器中定義LUN <a class="header-anchor" href="#第三步-在目標器中定義lun" aria-label="Permalink to “第三步: 在目標器中定義LUN”">​</a></h3><p>我們已經創建了邏輯卷並準備使用LUN，現在我們在目標器配置中定義LUN，只有這樣做它才能用在客户機中（發起程序）。</p><p>用你選擇的編輯器打開位於‘/etc/tgt/targets.conf’的目標器配置文件。</p><pre><code># vim /etc/tgt/targets.conf
</code></pre><p>追加下面的target配置文件中的定義。保存並關閉文件。</p><pre><code>&lt;target iqn.2014-07.com.tecmint:tgt1&gt;
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
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/7.jpg" alt="Configure LUNs in Target Server"></p><p><em>在target中配置LUN</em></p><p>上圖的解釋：</p><ol><li>iSCSI 採取限定名 (iqn.2014-07.com.tecmint:tgt1).</li><li>名稱隨便你</li><li>用於確定目標名， 這是這台服務器中的第一個目標</li><li>LVM共享特定的LUN。</li></ol><p>接下來使用下面的命令重載<strong>tgd</strong>服務配置。</p><pre><code># /etc/init.d/tgtd reload
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/8.jpg" alt="Reload Configuration"></p><p><em>重載配置</em></p><p>接下來使用下面的命令驗證可用的LUN。</p><pre><code># tgtadm --mode target --op show
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/9.jpg" alt="List Available LUNs"></p><p><em>列出可用LUN</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/07/10.jpg" alt="LUNs Information"></p><p><em>LUN信息</em></p><p>上面的命令會列出可用LUN的下面這些信息</p><ol><li>iSCSI 限定名</li><li>iSCSI 已經準備好</li><li>默認LUN 0被控制器所保留</li><li>LUN 1是我們定義的目標器</li><li>這裏我為每個LUN都定義了4GB</li><li>在線： 是的，這就是可以使用的LUN</li></ol><p>現在我們已經使用LVM為目標器定義了LUN，這可擴展並且支持很多特性，如快照。我們將會在第三部分了解如何用目標器授權，並且本地掛載遠程存儲。</p><hr>`,79)),a("p",null,[t[2]||(t[2]=e("via: ",-1)),n(i,{href:"http://www.tecmint.com/create-luns-using-lvm-in-iscsi-target/"},{default:r(()=>[...t[1]||(t[1]=[e("http://www.tecmint.com/create-luns-using-lvm-in-iscsi-target/",-1)])]),_:1})]),a("p",null,[t[6]||(t[6]=e("作者：",-1)),n(i,{href:"http://www.tecmint.com/author/babinlonston/"},{default:r(()=>[...t[3]||(t[3]=[e("Babin Lonston",-1)])]),_:1}),t[7]||(t[7]=e(" 譯者：",-1)),n(i,{href:"https://github.com/geekpi"},{default:r(()=>[...t[4]||(t[4]=[e("geekpi",-1)])]),_:1}),t[8]||(t[8]=e(" 校對：",-1)),n(i,{href:"https://github.com/wxy"},{default:r(()=>[...t[5]||(t[5]=[e("wxy",-1)])]),_:1})]),a("p",null,[t[11]||(t[11]=e("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[9]||(t[9]=[e("LCTT",-1)])]),_:1}),t[12]||(t[12]=e(" 原創翻譯，",-1)),n(i,{href:"http://linux.cn/"},{default:r(()=>[...t[10]||(t[10]=[e("Linux中國",-1)])]),_:1}),t[13]||(t[13]=e(" 榮譽推出",-1))])])}const f=p(c,[["render",g]]);export{N as __pageData,f as default};
