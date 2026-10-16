import{_ as i,a0 as p,w as r,s as d,ao as l,I as a,x as t,a1 as o,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"如何在 CentOS 7 中添加新磁盤而不用重啓系統 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7 中添加新磁盤而不用重啓系統 | LCTT (201604) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7 中添加新磁盤而不用重啓系統 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7 中添加新磁盤而不用重啓系統 | LCTT (201604) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201604/20160212 How to Add New Disk in Linux CentOS 7 Without Rebooting","title":"如何在 CentOS 7 中添加新磁盤而不用重啓系統","tag":"201604","desc":""},"relativePath":"201604/20160212 How to Add New Disk in Linux CentOS 7 Without Rebooting.md","filePath":"[post].md"}'),c={name:"201604/20160212 How to Add New Disk in Linux CentOS 7 Without Rebooting.md"};function h(m,e,u,g,b,x){const n=p("Link");return r(),d("div",null,[e[13]||(e[13]=l(`<h1 id="如何在-centos-7-中添加新磁盤而不用重啓系統" tabindex="-1">如何在 CentOS 7 中添加新磁盤而不用重啓系統 <a class="header-anchor" href="#如何在-centos-7-中添加新磁盤而不用重啓系統" aria-label="Permalink to “如何在 CentOS 7 中添加新磁盤而不用重啓系統”">​</a></h1><p>對大多數系統管理員來説擴充 Linux 服務器的磁盤空間是日常的工作之一。因此這篇文章會通過使用 Linux 命令，在 CentOS 7 系統上演示一些簡單的操作步驟來擴充您的磁盤空間而不需要重啓您的生產服務器。關於擴充和增加新的磁盤到 Linux 系統，我們會提及多種方法和多種可行性，可按您所需選擇最適用的一種。</p><h3 id="_1-在虛擬機客户端擴充磁盤空間" tabindex="-1">1. 在虛擬機客户端擴充磁盤空間: <a class="header-anchor" href="#_1-在虛擬機客户端擴充磁盤空間" aria-label="Permalink to “1. 在虛擬機客户端擴充磁盤空間:”">​</a></h3><p>在為 Linux 系統增加磁盤卷之前，您首先需要添加一塊新的物理磁盤，或在 VMware vShere、VMware 工作站以及你使用的其它虛擬環境軟件中進行設置來增加一塊虛擬磁盤的容量。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/1.png" alt="Increase disk"></p><h3 id="_2-檢查磁盤空間" tabindex="-1">2. 檢查磁盤空間: <a class="header-anchor" href="#_2-檢查磁盤空間" aria-label="Permalink to “2. 檢查磁盤空間:”">​</a></h3><p>運行如下命令來檢查當前磁盤空間大小。</p><pre><code># df -h
# fdisk -l
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/2.png" alt="Fdisk check"></p><p>可以看到，雖然我們已經在後端給其增加到 50 GB 的空間，但此時的總磁盤大小仍然為 10 GB。</p><h3 id="_3-擴展空間而無需重啓虛擬機" tabindex="-1">3. 擴展空間而無需重啓虛擬機 <a class="header-anchor" href="#_3-擴展空間而無需重啓虛擬機" aria-label="Permalink to “3. 擴展空間而無需重啓虛擬機”">​</a></h3><p>現在運行如下命令，通過重新掃描 SCSI （注：Small Computer System Interface 小型計算機系統接口）總線並添加 SCSI 設備，系統就可以擴展操作系統的物理卷磁盤空間，而且不需要重啓虛擬機。</p><pre><code># ls /sys/class/scsi_host/
# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host0/scan
# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host1/scan
# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host2/scan
</code></pre><p>使用下面的命令來檢查 SCSI 設備的名稱，然後重新掃描 SCSI 總線。</p><pre><code># ls /sys/class/scsi_device/
# echo 1 &gt; /sys/class/scsi_device/0\\:0\\:0\\:0/device/rescan
# echo 1 &gt; /sys/class/scsi_device/2\\:0\\:0\\:0/device/rescan
</code></pre><p>如下圖所示，會重新掃描 SCSI 總線，隨後我們在虛擬機客户端設置的磁盤大小會正常顯示。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/3.png" alt="Rescan disk device"></p><h3 id="_4-創建新磁盤分區" tabindex="-1">4. 創建新磁盤分區: <a class="header-anchor" href="#_4-創建新磁盤分區" aria-label="Permalink to “4. 創建新磁盤分區:”">​</a></h3><p>一旦在系統中可以看到擴展的磁盤空間，就可以運行如下命令來格式化您的磁盤以創建一個新的分區。請按如下操作步驟來擴充您的物理磁盤卷。</p><pre><code># fdisk /dev/sda
Welcome to fdisk (util-linux 2.23.2) press the &#39;m&#39; key for help
Command (m for help): m
Command action
a toggle a bootable flag
b edit bsd disklabel
c toggle the dos compatibility flag
d delete a partition
g create a new empty GPT partition table
G create an IRIX (SGI) partition table
l list known partition types
m print this menu
n add a new partition
o create a new empty DOS partition table
p print the partition table
q quit without saving changes
s create a new empty Sun disklabel
t change a partition&#39;s system id
u change display/entry units
v verify the partition table
w write table to disk and exit
x extra functionality (experts only)

Command (m for help):
</code></pre><p>鍵入 &#39;p&#39; 來查看當前的分區表信息，然後鍵入 &#39;n&#39; 鍵來創建一個新的主分區，選擇所有可用的扇區。 使用 &#39;t&#39; 命令改變磁盤類型為 &#39;Linux LVM&#39;，然後選擇編碼 &#39;8e&#39; 或者默認不選，它默認的類型編碼為 &#39;83&#39;。</p><p>現在輸入 &#39;w&#39; 來保存分區表信息並且退出命令環境，如下示：</p><pre><code>Command (m for help): w
The partition table has been altered!

Calling ioctl() to re-read partition table.

WARNING: Re-reading the partition table failed with error 16: Device or resource busy.
The kernel still uses the old table. The new table will be used at
the next reboot or after you run partprobe(8) or kpartx(8)
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/3A.png" alt="New disk Volume"></p><h3 id="_5-創建物理卷" tabindex="-1">5. 創建物理卷: <a class="header-anchor" href="#_5-創建物理卷" aria-label="Permalink to “5. 創建物理卷:”">​</a></h3><p>根據上述提示，運行 &#39;partprob&#39; 或 &#39;kpartx&#39; 命令以使分區表生效，然後使用如下的命令來創建新的物理卷。</p><pre><code># partprobe
# pvresize /dev/sda3
</code></pre><p>要檢查新創建的卷，運行如下的命令可以看出新的物理卷是否已經被創建，是否可用。接下來，我們就可以使用這個新的物理捲來擴展 &#39;centos&#39; 卷組了，如下示：</p><pre><code># pvdisplay
# vgextend centos /dev/sda3
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/3B.png" alt="Extend volume Group"></p><h3 id="_6-擴展邏輯卷" tabindex="-1">6. 擴展邏輯卷: <a class="header-anchor" href="#_6-擴展邏輯卷" aria-label="Permalink to “6. 擴展邏輯卷:”">​</a></h3><p>現在我們使用如下的命令擴展邏輯卷，以增加我們系統正使用的磁盤空間。</p><pre><code># lvextend -L +40G /dev/mapper/centos-root
</code></pre><p>一旦返回增加成功的消息，就可以運行如下命令來擴展您的邏輯卷大小。</p><pre><code># xfs_growfs /dev/mapper/centos-root
</code></pre><p>&#39;/&#39; 分區的大小已經成功的增加了，可以使用 &#39;df&#39; 命令來檢查您磁盤驅動器的大小。如圖示。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/3C.png" alt="Increase disk space"></p><h3 id="_7-通過增加新的磁盤來擴充根分區而不用重啓系統" tabindex="-1">7. 通過增加新的磁盤來擴充根分區而不用重啓系統: <a class="header-anchor" href="#_7-通過增加新的磁盤來擴充根分區而不用重啓系統" aria-label="Permalink to “7. 通過增加新的磁盤來擴充根分區而不用重啓系統:”">​</a></h3><p>這是第二種方法，它使用的命令非常簡單， 用來增加 CentOS 7 系統上邏輯卷空間大小。</p><p>所以第一步是打開您的虛擬機客户端的設置頁面，點擊 ‘增加’ 按紐，然後繼續下一步操作。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/3D.png" alt="Add new disk"></p><p>選擇新磁盤所需要的配置信息，如下圖所示的，選擇新磁盤的大小和它的類型。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/3E.png" alt="New disk setup"></p><p>然後進入服務端重複如下的命令來掃描您的磁盤設備，以使新磁盤在系統中可見。</p><pre><code># echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host0/scan
# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host1/scan
# echo &quot;- - -&quot; &gt; /sys/class/scsi_host/host2/scan
</code></pre><p>列出您的 SCSI 設備的名稱：</p><pre><code># ls /sys/class/scsi_device/
# echo 1 &gt; /sys/class/scsi_device/1\\:0\\:0\\:0/device/rescan
# echo 1 &gt; /sys/class/scsi_device/2\\:0\\:0\\:0/device/rescan
# echo 1 &gt; /sys/class/scsi_device/3\\:0\\:0\\:0/device/rescan
# fdisk -l
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/3F.png" alt="Scanning new disk"></p><p>一旦新增的磁盤可見，就可以運行下面的命令來創建新的物理卷，然後增加到卷組，如下示。</p><pre><code># pvcreate /dev/sdb
# vgextend centos /dev/sdb
# vgdisplay
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/3G.png" alt="Extending Volume Group"></p><p>現在根據此磁盤的空間大小來擴展邏輯卷，然後添加到根分區。</p><pre><code># lvextend -L +20G /dev/mapper/centos-root
# xfs_growfs /dev/mapper/centos-root
# df -h
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/02/3H.png" alt="Increase / Partition"></p><h3 id="結論" tabindex="-1">結論: <a class="header-anchor" href="#結論" aria-label="Permalink to “結論:”">​</a></h3><p>在 Linux CentOS 7 系統上管理磁盤分區的操作過程是非常簡單的，可以使用這篇文章所述的操作步驟來擴充您的任意邏輯卷的磁盤空間。您不需要重啓生產線上的服務器，只是簡單的重掃描下 SCSI 設備，和擴展您想要的 LVM（邏輯卷管理）。我們希望這文章對您有用。請隨意的發表有用的評論和建議。</p><hr>`,57)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),o(n,{href:"http://linoxide.com/linux-how-to/add-new-disk-centos-7-without-rebooting/"},{default:s(()=>[...e[0]||(e[0]=[t("http://linoxide.com/linux-how-to/add-new-disk-centos-7-without-rebooting/",-1)])]),_:1})]),a("p",null,[e[5]||(e[5]=t("作者：",-1)),o(n,{href:"http://linoxide.com/author/kashifs/"},{default:s(()=>[...e[2]||(e[2]=[t("Kashif S",-1)])]),_:1}),e[6]||(e[6]=t(" 譯者：",-1)),o(n,{href:"https://github.com/runningwater"},{default:s(()=>[...e[3]||(e[3]=[t("runningwater",-1)])]),_:1}),e[7]||(e[7]=t(" 校對：",-1)),o(n,{href:"https://github.com/wxy"},{default:s(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原創編譯，",-1)),o(n,{href:"https://linux.cn/"},{default:s(()=>[...e[9]||(e[9]=[t("Linux中國",-1)])]),_:1}),e[12]||(e[12]=t(" 榮譽推出",-1))])])}const C=i(c,[["render",h]]);export{_ as __pageData,C as default};
