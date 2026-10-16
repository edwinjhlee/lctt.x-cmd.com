import{_ as n,a0 as d,w as h,s,ao as c,I as r,x as p,a1 as t,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"如何在 CentOS 7.0 上配置 Ceph 存儲 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7.0 上配置 Ceph 存儲 | LCTT (201511) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7.0 上配置 Ceph 存儲 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7.0 上配置 Ceph 存儲 | LCTT (201511) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201511/20151012 How to Setup Red Hat Ceph Storage on CentOS 7.0","title":"如何在 CentOS 7.0 上配置 Ceph 存儲","tag":"201511","desc":""},"relativePath":"201511/20151012 How to Setup Red Hat Ceph Storage on CentOS 7.0.md","filePath":"[post].md"}'),l={name:"201511/20151012 How to Setup Red Hat Ceph Storage on CentOS 7.0.md"};function i(m,e,C,g,u,S){const o=d("Link");return h(),s("div",null,[e[13]||(e[13]=c(`<h1 id="如何在-centos-7-0-上配置-ceph-存儲" tabindex="-1">如何在 CentOS 7.0 上配置 Ceph 存儲 <a class="header-anchor" href="#如何在-centos-7-0-上配置-ceph-存儲" aria-label="Permalink to “如何在 CentOS 7.0 上配置 Ceph 存儲”">​</a></h1><p>Ceph 是一個將數據存儲在單一分佈式計算機集羣上的開源軟件平台。當你計劃構建一個雲時，你首先需要決定如何實現你的存儲。開源的 Ceph 是紅帽原生技術之一，它基於稱為 RADOS 的對象存儲系統，用一組網關 API 表示塊、文件、和對象模式中的數據。由於它自身開源的特性，這種便攜存儲平台能在公有云和私有云上安裝和使用。Ceph 集羣的拓撲結構是按照備份和信息分佈設計的，這種內在設計能提供數據完整性。它的設計目標就是容錯、通過正確配置能運行於商業硬件和一些更高級的系統。</p><p>Ceph 能在任何 Linux 發行版上安裝，但為了能正確運行，它需要最近的內核以及其它最新的庫。在這篇指南中，我們會使用最小化安裝的 CentOS-7.0。</p><h3 id="系統資源" tabindex="-1">系統資源 <a class="header-anchor" href="#系統資源" aria-label="Permalink to “系統資源”">​</a></h3><pre><code>**CEPH-STORAGE**
OS: CentOS Linux 7 (Core)
RAM:1 GB
CPU:1 CPU
DISK: 20
Network: 45.79.136.163
FQDN: ceph-storage.linoxide.com

**CEPH-NODE**
OS: CentOS Linux 7 (Core)
RAM:1 GB
CPU:1 CPU
DISK: 20
Network: 45.79.171.138
FQDN: ceph-node.linoxide.com
</code></pre><h3 id="安裝前的配置" tabindex="-1">安裝前的配置 <a class="header-anchor" href="#安裝前的配置" aria-label="Permalink to “安裝前的配置”">​</a></h3><p>在安裝 Ceph 存儲之前，我們要在每個節點上完成一些步驟。第一件事情就是確保每個節點的網絡已經配置好並且能相互訪問。</p><p><strong>配置 Hosts</strong></p><p>要在每個節點上配置 hosts 條目，要像下面這樣打開默認的 hosts 配置文件（LCTT 譯註：或者做相應的 DNS 解析）。</p><pre><code># vi /etc/hosts
</code></pre><hr><pre><code>45.79.136.163 ceph-storage ceph-storage.linoxide.com
45.79.171.138 ceph-node ceph-node.linoxide.com
</code></pre><p><strong>安裝 VMware 工具</strong></p><p>工作環境是 VMWare 虛擬環境時，推薦你安裝它的 open VM 工具。你可以使用下面的命令安裝。</p><pre><code>#yum install -y open-vm-tools
</code></pre><p><strong>配置防火牆</strong></p><p>如果你正在使用啓用了防火牆的限制性環境，確保在你的 Ceph 存儲管理節點和客户端節點中開放了以下的端口。</p><pre><code>你必須在你的 Admin Calamari 節點開放 80、2003、以及4505-4506 端口，並且允許通過 80 號端口到 CEPH 或 Calamari 管理節點，以便你網絡中的客户端能訪問 Calamari web 用户界面。
</code></pre><p>你可以使用下面的命令在 CentOS 7 中啓動並啓用防火牆。</p><pre><code>#systemctl start firewalld
#systemctl enable firewalld
</code></pre><p>運行以下命令使 Admin Calamari 節點開放上面提到的端口。</p><pre><code>#firewall-cmd --zone=public --add-port=80/tcp --permanent
#firewall-cmd --zone=public --add-port=2003/tcp --permanent
#firewall-cmd --zone=public --add-port=4505-4506/tcp --permanent
#firewall-cmd --reload
</code></pre><p>在 Ceph Monitor 節點，你要在防火牆中允許通過以下端口。</p><pre><code>#firewall-cmd --zone=public --add-port=6789/tcp --permanent
</code></pre><p>然後允許以下默認端口列表，以便能和客户端以及監控節點交互，併發送數據到其它 OSD。</p><pre><code>#firewall-cmd --zone=public --add-port=6800-7300/tcp --permanent
</code></pre><p>如果你工作在非生產環境，建議你停用防火牆以及 SELinux 設置，在我們的測試環境中我們會停用防火牆以及 SELinux。</p><pre><code>#systemctl stop firewalld
#systemctl disable firewalld
</code></pre><p><strong>系統升級</strong></p><p>現在升級你的系統並重啓使所需更改生效。</p><pre><code>#yum update
#shutdown -r 0
</code></pre><h3 id="設置-ceph-用户" tabindex="-1">設置 Ceph 用户 <a class="header-anchor" href="#設置-ceph-用户" aria-label="Permalink to “設置 Ceph 用户”">​</a></h3><p>現在我們會新建一個單獨的 sudo 用户用於在每個節點安裝 ceph-deploy工具，並允許該用户無密碼訪問每個節點，因為它需要在 Ceph 節點上安裝軟件和配置文件而不會有輸入密碼提示。</p><p>運行下面的命令在 ceph-storage 主機上新建有獨立 home 目錄的新用户。</p><pre><code>[root@ceph-storage ~]# useradd -d /home/ceph -m ceph
[root@ceph-storage ~]# passwd ceph
</code></pre><p>節點中新建的每個用户都要有 sudo 權限，你可以使用下面展示的命令賦予 sudo 權限。</p><pre><code>[root@ceph-storage ~]# echo &quot;ceph ALL = (root) NOPASSWD:ALL&quot; | sudo tee /etc/sudoers.d/ceph
ceph ALL = (root) NOPASSWD:ALL

[root@ceph-storage ~]# sudo chmod 0440 /etc/sudoers.d/ceph
</code></pre><h3 id="設置-ssh-密鑰" tabindex="-1">設置 SSH 密鑰 <a class="header-anchor" href="#設置-ssh-密鑰" aria-label="Permalink to “設置 SSH 密鑰”">​</a></h3><p>現在我們會在 Ceph 管理節點生成 SSH 密鑰並把密鑰複製到每個 Ceph 集羣節點。</p><p>在 ceph-node 運行下面的命令複製它的 ssh 密鑰到 ceph-storage。</p><pre><code>[root@ceph-node ~]# ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Created directory &#39;/root/.ssh&#39;.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
5b:*:*:*:*:*:*:*:*:*:c9 root@ceph-node
The key&#39;s randomart image is:
+--[ RSA 2048]----+
</code></pre><hr><pre><code>[root@ceph-node ~]# ssh-copy-id ceph@ceph-storage
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/k3.png" alt="SSH key"></p><h3 id="配置-pid-數目" tabindex="-1">配置 PID 數目 <a class="header-anchor" href="#配置-pid-數目" aria-label="Permalink to “配置 PID 數目”">​</a></h3><p>要配置 PID 數目的值，我們會使用下面的命令檢查默認的內核值。默認情況下，是一個小的最大線程數 32768。</p><p>如下圖所示通過編輯系統配置文件配置該值為一個更大的數。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/3-PID-value.png" alt="更改 PID 值"></p><h3 id="配置管理節點服務器" tabindex="-1">配置管理節點服務器 <a class="header-anchor" href="#配置管理節點服務器" aria-label="Permalink to “配置管理節點服務器”">​</a></h3><p>配置並驗證了所有網絡後，我們現在使用 ceph 用户安裝 ceph-deploy。通過打開文件檢查 hosts 條目。</p><pre><code>#vim /etc/hosts
ceph-storage 45.79.136.163
ceph-node 45.79.171.138
</code></pre><p>運行下面的命令添加它的庫。</p><pre><code>#rpm -Uhv http://ceph.com/rpm-giant/el7/noarch/ceph-release-1-0.el7.noarch.rpm
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/k1.png" alt="添加 Ceph 倉倉庫"></p><p>或者創建一個新文件並更新 Ceph 庫參數，別忘了替換你當前的 Release 和版本號。</p><pre><code>[root@ceph-storage ~]# vi /etc/yum.repos.d/ceph.repo
</code></pre><hr><pre><code>[ceph-noarch]
name=Ceph noarch packages
baseurl=http://ceph.com/rpm-{ceph-release}/{distro}/noarch
enabled=1
gpgcheck=1
type=rpm-md
gpgkey=https://ceph.com/git/?p=ceph.git;a=blob_plain;f=keys/release.asc
</code></pre><p>之後更新你的系統並安裝 ceph-deploy 軟件包。</p><h3 id="安裝-ceph-deploy-軟件包" tabindex="-1">安裝 ceph-deploy 軟件包 <a class="header-anchor" href="#安裝-ceph-deploy-軟件包" aria-label="Permalink to “安裝 ceph-deploy 軟件包”">​</a></h3><p>我們運行下面的命令以及 ceph-deploy 安裝命令來更新系統以及最新的 ceph 庫和其它軟件包。</p><pre><code>#yum update -y &amp;&amp; yum install ceph-deploy -y
</code></pre><h3 id="配置集羣" tabindex="-1">配置集羣 <a class="header-anchor" href="#配置集羣" aria-label="Permalink to “配置集羣”">​</a></h3><p>使用下面的命令在 ceph 管理節點新建一個目錄並進入新目錄，用於收集所有輸出文件和日誌。</p><pre><code>#mkdir ~/ceph-cluster
#cd ~/ceph-cluster
</code></pre><hr><pre><code>#ceph-deploy new storage
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/k4.png" alt="設置 ceph 集羣"></p><p>如果成功執行了上面的命令，你會看到它新建了配置文件。</p><p>現在配置 Ceph 默認的配置文件，用任意編輯器打開它並在會影響你公共網絡的 global 參數下面添加以下兩行。</p><pre><code>#vim ceph.conf
osd pool default size = 1
public network = 45.79.0.0/16
</code></pre><h3 id="安裝-ceph" tabindex="-1">安裝 Ceph <a class="header-anchor" href="#安裝-ceph" aria-label="Permalink to “安裝 Ceph”">​</a></h3><p>現在我們準備在和 Ceph 集羣相關的每個節點上安裝 Ceph。我們使用下面的命令在 ceph-storage 和 ceph-node 上安裝 Ceph。</p><pre><code>#ceph-deploy install ceph-node ceph-storage
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/k5.png" alt="安裝 ceph"></p><p>處理所有所需倉庫和安裝所需軟件包會需要一些時間。</p><p>當兩個節點上的 ceph 安裝過程都完成後，我們下一步會通過在相同節點上運行以下命令創建監視器並收集密鑰。</p><pre><code>#ceph-deploy mon create-initial
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/k6.png" alt="Ceph 初始化監視器"></p><h3 id="設置-osds-和-osd-守護進程" tabindex="-1">設置 OSDs 和 OSD 守護進程 <a class="header-anchor" href="#設置-osds-和-osd-守護進程" aria-label="Permalink to “設置 OSDs 和 OSD 守護進程”">​</a></h3><p>現在我們會設置磁盤存儲，首先運行下面的命令列出你所有可用的磁盤。</p><pre><code>#ceph-deploy disk list ceph-storage
</code></pre><p>結果中會列出你存儲節點中使用的磁盤，你會用它們來創建 OSD。讓我們運行以下包括你磁盤名稱的命令。</p><pre><code>#ceph-deploy disk zap storage:sda
#ceph-deploy disk zap storage:sdb
</code></pre><p>為了最後完成 OSD 配置，運行下面的命令配置日誌磁盤以及數據磁盤。</p><pre><code>#ceph-deploy osd prepare storage:sdb:/dev/sda
#ceph-deploy osd activate storage:/dev/sdb1:/dev/sda1
</code></pre><p>你需要在所有節點上運行相同的命令，它會清除你磁盤上的所有東西。之後為了集羣能運轉起來，我們需要使用以下命令從 ceph 管理節點複製不同的密鑰和配置文件到所有相關節點。</p><pre><code>#ceph-deploy admin ceph-node ceph-storage
</code></pre><h3 id="測試-ceph" tabindex="-1">測試 Ceph <a class="header-anchor" href="#測試-ceph" aria-label="Permalink to “測試 Ceph”">​</a></h3><p>我們快完成了 Ceph 集羣設置，讓我們在 ceph 管理節點上運行下面的命令檢查正在運行的 ceph 狀態。</p><pre><code>#ceph status
#ceph health
HEALTH_OK
</code></pre><p>如果你在 ceph status 中沒有看到任何錯誤信息，就意味着你成功地在 CentOS 7 上安裝了 ceph 存儲集羣。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>在這篇詳細的文章中我們學習瞭如何使用兩台安裝了 CentOS 7 的虛擬機設置 Ceph 存儲集羣，這能用於備份或者作為用於處理其它虛擬機的本地存儲。我們希望這篇文章能對你有所幫助。當你試着安裝的時候記得分享你的經驗。</p><hr>`,95)),r("p",null,[e[1]||(e[1]=p("via: ",-1)),t(o,{href:"http://linoxide.com/storage/setup-red-hat-ceph-storage-centos-7-0/"},{default:a(()=>[...e[0]||(e[0]=[p("http://linoxide.com/storage/setup-red-hat-ceph-storage-centos-7-0/",-1)])]),_:1})]),r("p",null,[e[5]||(e[5]=p("作者：",-1)),t(o,{href:"http://linoxide.com/author/kashifs/"},{default:a(()=>[...e[2]||(e[2]=[p("Kashif Siddique",-1)])]),_:1}),e[6]||(e[6]=p(" 譯者：",-1)),t(o,{href:"http://mutouxiaogui.cn/blog/"},{default:a(()=>[...e[3]||(e[3]=[p("ictlyh",-1)])]),_:1}),e[7]||(e[7]=p(" 校對：",-1)),t(o,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[p("wxy",-1)])]),_:1})]),r("p",null,[e[10]||(e[10]=p("本文由 ",-1)),t(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[p("LCTT",-1)])]),_:1}),e[11]||(e[11]=p(" 原創編譯，",-1)),t(o,{href:"https://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[p("Linux中國",-1)])]),_:1}),e[12]||(e[12]=p(" 榮譽推出",-1))])])}const x=n(l,[["render",i]]);export{y as __pageData,x as default};
