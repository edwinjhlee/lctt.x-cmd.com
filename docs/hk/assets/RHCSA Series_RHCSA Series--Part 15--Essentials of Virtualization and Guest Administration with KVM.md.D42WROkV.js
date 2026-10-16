import{_ as p,a0 as l,w as d,s as a,ao as s,I as i,x as e,a1 as n,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const A=JSON.parse('{"title":"RHCSA 系列（十五）： 虛擬化基礎和使用 KVM 進行虛擬機管理 | LCTT x X-CMD","titleTemplate":false,"description":"RHCSA 系列（十五）： 虛擬化基礎和使用 KVM 進行虛擬機管理 | LCTT (RHCSA Series) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RHCSA 系列（十五）： 虛擬化基礎和使用 KVM 進行虛擬機管理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RHCSA 系列（十五）： 虛擬化基礎和使用 KVM 進行虛擬機管理 | LCTT (RHCSA Series) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"RHCSA Series/RHCSA Series--Part 15--Essentials of Virtualization and Guest Administration with KVM","title":"RHCSA 系列（十五）： 虛擬化基礎和使用 KVM 進行虛擬機管理","tag":"RHCSA Series","desc":""},"relativePath":"RHCSA Series/RHCSA Series--Part 15--Essentials of Virtualization and Guest Administration with KVM.md","filePath":"[post].md"}'),m={name:"RHCSA Series/RHCSA Series--Part 15--Essentials of Virtualization and Guest Administration with KVM.md"};function u(g,t,v,S,f,V){const r=l("Link");return d(),a("div",null,[t[32]||(t[32]=s('<h1 id="rhcsa-系列-十五-虛擬化基礎和使用-kvm-進行虛擬機管理" tabindex="-1">RHCSA 系列（十五）： 虛擬化基礎和使用 KVM 進行虛擬機管理 <a class="header-anchor" href="#rhcsa-系列-十五-虛擬化基礎和使用-kvm-進行虛擬機管理" aria-label="Permalink to “RHCSA 系列（十五）： 虛擬化基礎和使用 KVM 進行虛擬機管理”">​</a></h1><p>假如你在詞典中查一下單詞 “虛擬化（virtualize）”，你將會發現它的意思是 “創造某些事物的一個虛擬物（而非真實的）”。在計算機行業中，術語虛擬化（virtualization）指的是：在相同的物理（硬件）系統上，同時運行多個操作系統，且這幾個系統相互隔離的<strong>可能性</strong>，而那個硬件在虛擬化架構中被稱作宿主機（host）。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/RHCSA-Part15.png" alt="KVM 虛擬化基礎和 KVM 虛擬機管理"></p><p><em>RHCSA 系列： 虛擬化基礎和使用 KVM 進行虛擬機管理 – Part 15</em></p><p>通過使用虛擬機監視器（也被稱為虛擬機管理程序（hypervisor）），虛擬機（被稱為 guest）由底層的硬件來供給虛擬資源（舉幾個例子來説，如 CPU，RAM，存儲介質，網絡接口等）。</p><p>考慮到這一點就可以清楚地看出，虛擬化的主要優點是節約成本（在設備和網絡基礎設施，及維護工作等方面）和顯著地減少容納所有必要硬件所需的物理空間。</p><p>由於這個簡單的指南不能涵蓋所有的虛擬化方法，我鼓勵你參考在總結部分中列出的文檔，以此對這個話題做更深入的瞭解。</p>',7)),i("p",null,[t[1]||(t[1]=e("請記住當前文章只是用於在 RHEL 7 中用命令列工具使用 ",-1)),n(r,{href:"http://www.linux-kvm.org/page/Main_Page"},{default:o(()=>[...t[0]||(t[0]=[e("KVM",-1)])]),_:1}),t[2]||(t[2]=e(" (Kernel-based Virtual Machine（基於內核的虛擬機）) 學習虛擬化基礎知識的一個起點，而並不是對這個話題的深入探討。",-1))]),t[33]||(t[33]=s(`<h3 id="檢查硬件要求並安裝軟件包" tabindex="-1">檢查硬件要求並安裝軟件包 <a class="header-anchor" href="#檢查硬件要求並安裝軟件包" aria-label="Permalink to “檢查硬件要求並安裝軟件包”">​</a></h3><p>為了設置虛擬化，你的 CPU 必須能夠支持它。你可以使用下面的命令來查看你的系統是否滿足這個要求：</p><pre><code># grep -E &#39;svm|vmx&#39; /proc/cpuinfo
</code></pre><p>在下面的截圖中，我們可以看到當前的系統（帶有一個 AMD 的微處理器）支持虛擬化，svm 字樣的存在暗示了這一點。假如我們有一個 Intel 系列的處理器，我們將會看到上面命令的結果將會出現 vmx 字樣。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Check-KVM-Support.png" alt="檢查 KVM 支持"></p><p><em>檢查 KVM 支持</em></p><p>另外，你需要在你宿主機的硬件（BIOS 或 UEFI）中開啓虛擬化。</p><p>現在，安裝必要的軟件包：</p><ul><li>qemu-kvm 是一個開源的虛擬機程序，為 KVM 虛擬機監視器提供硬件仿真，而 qemu-img 則提供了一個操縱磁盤鏡像的命令列工具。</li><li>libvirt 包含與操作系統的虛擬化功能交互的工具。</li><li>libvirt-python 包含一個模組，它允許用 Python 寫的應用來使用由 libvirt 提供的接口。</li><li>libguestfs-tools 包含各式各樣的針對虛擬機的系統管理員命令列工具。</li><li>virt-install 包含針對虛擬機管理的其他命令列工具。</li></ul><p>命令如下：</p><pre><code># yum update &amp;&amp; yum install qemu-kvm qemu-img libvirt libvirt-python libguestfs-tools virt-install
</code></pre><p>一旦安裝完成，請確保你啓動並開啓了 libvirtd 服務：</p><pre><code># systemctl start libvirtd.service
# systemctl enable libvirtd.service
</code></pre><p>默認情況下，每個虛擬機將只能夠與放在相同的物理服務器上的虛擬機以及宿主機自身通信。要使得虛擬機能夠訪問位於局域網或因特網中的其他機器，我們需要像下面這樣在我們的宿主機上設置一個橋接接口（比如説 br0）：</p><p>1、 添加下面的一行到我們的 NIC 主配置中（類似 <code>/etc/sysconfig/network-scripts/ifcfg-enp0s3</code> 這樣的文件）：</p><pre><code>BRIDGE=br0
</code></pre><p>2、 使用下面的內容（注意，你可能需要更改 IP 地址，網關地址和 DNS 信息）為 br0 創建一個配置文件（<code>/etc/sysconfig/network-scripts/ifcfg-br0</code>）：</p><pre><code>DEVICE=br0
TYPE=Bridge
BOOTPROTO=static
IPADDR=192.168.0.18
NETMASK=255.255.255.0
GATEWAY=192.168.0.1
NM_CONTROLLED=no
DEFROUTE=yes
PEERDNS=yes
PEERROUTES=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_PEERDNS=yes
IPV6_PEERROUTES=yes
IPV6_FAILURE_FATAL=no
NAME=br0
ONBOOT=yes
DNS1=8.8.8.8
DNS2=8.8.4.4
</code></pre><p>3、 最後在文件<code>/etc/sysctl.conf</code> 中設置：</p><pre><code>net.ipv4.ip_forward = 1
</code></pre><p>來開啓包轉發並加載更改到當前的內核配置中：</p><pre><code># sysctl -p
</code></pre>`,22)),i("p",null,[t[4]||(t[4]=e("注意，你可能還需要告訴 firewalld 讓這類的流量應當被允許通過防火牆。假如你需要這樣做，記住你可以參考這個系列的 ",-1)),n(r,{href:"https://linux.cn/article-6315-1.html"},{default:o(()=>[...t[3]||(t[3]=[e("使用 firewalld 和 iptables 來控制網絡流量",-1)])]),_:1}),t[5]||(t[5]=e("。",-1))]),t[34]||(t[34]=i("h3",{id:"創建虛擬機鏡像",tabindex:"-1"},[e("創建虛擬機鏡像 "),i("a",{class:"header-anchor",href:"#創建虛擬機鏡像","aria-label":"Permalink to “創建虛擬機鏡像”"},"​")],-1)),i("p",null,[t[7]||(t[7]=e("默認情況下，虛擬機鏡像將會被創建到 ",-1)),t[8]||(t[8]=i("code",null,"/var/lib/libvirt/images",-1)),t[9]||(t[9]=e(" 中，且強烈建議你不要更改這個設定，除非你真的需要那麼做且知道你在做什麼，並能自己處理有關 SELinux 的設定（這個話題已經超出了本教程的討論範疇，但你可以參考這個系列的第 13 部分 ",-1)),n(r,{href:"https://linux.cn/article-6339-1.html"},{default:o(()=>[...t[6]||(t[6]=[e("使用 SELinux 來進行強制訪問控制",-1)])]),_:1}),t[10]||(t[10]=e("，假如你想更新你的知識的話）。",-1))]),t[35]||(t[35]=s(`<p>這意味着你需要確保你在文件系統中分配了必要的空間來容納你的虛擬機。</p><p>下面的命令將使用位於 <code>/home/gacanepa/ISOs</code>目錄下的 rhel-server-7.0-x86_64-dvd.iso 鏡像文件和 br0 這個網橋來創建一個名為 <code>tecmint-virt01</code> 的虛擬機，它有一個虛擬 CPU，1 GB（=1024 MB）的 RAM，20 GB 的磁盤空間（由<code>/var/lib/libvirt/images/tecmint-virt01.img</code>所代表）：</p><pre><code># virt-install \\
--network bridge=br0
--name tecmint-virt01 \\
--ram=1024 \\
--vcpus=1 \\
--disk path=/var/lib/libvirt/images/tecmint-virt01.img,size=20 \\
--graphics none \\
--cdrom /home/gacanepa/ISOs/rhel-server-7.0-x86_64-dvd.iso
--extra-args=&quot;console=tty0 console=ttyS0,115200&quot;
</code></pre><p>假如安裝文件位於一個 HTTP 服務器上，而不是存儲在你磁盤中的鏡像中，你必須將上面的 <code>-cdrom</code> 替換為 <code>-location</code>，並明確地指出在線存儲倉庫的地址。</p><p>至於上面的 <code>–graphics none</code> 選項，它告訴安裝程序只以文本模式執行安裝過程。假如你使用一個 GUI 界面和一個 VNC 窗口來訪問主虛擬機控制台，則可以省略這個選項。最後，使用 <code>–extra-args</code> 參數，我們將傳遞內核啓動參數給安裝程序，以此來設置一個串行的虛擬機控制台。</p><p>現在，所安裝的虛擬機應當可以作為一個正常的（真實的）服務來運行了。假如沒有，請查看上面列出的步驟。</p><h3 id="管理虛擬機" tabindex="-1">管理虛擬機 <a class="header-anchor" href="#管理虛擬機" aria-label="Permalink to “管理虛擬機”">​</a></h3><p>作為一個系統管理員，還有一些典型的管理任務需要你在虛擬機上去完成。注：下面所有的命令都需要在你的宿主機上運行：</p><p><strong>1. 列出所有的虛擬機：</strong></p><pre><code># virsh list --all
</code></pre><p>你必須留意上面命令輸出中的虛擬機 ID（儘管上面的命令還會返回虛擬機的名稱和當前的狀態），因為你需要它來執行有關某個虛擬機的大多數管理任務。</p><p><strong>2. 顯示某個虛擬機的信息：</strong></p><pre><code># virsh dominfo [VM Id]
</code></pre><p><strong>3. 開啓，重啓或停止一個虛擬機操作系統：</strong></p><pre><code># virsh start | reboot | shutdown [VM Id]
</code></pre><p><strong>4. 假如網絡無法連接且在宿主機上沒有運行 X 服務器，可以使用下面的命令來訪問虛擬機的串行控制台：</strong></p><pre><code># virsh console [VM Id]
</code></pre><p><strong>注</strong>：這需要你添加一個串行控制台配置信息到 <code>/etc/grub.conf</code> 文件中（參考剛才創建虛擬機時傳遞給<code>-extra-args</code>選項的參數）。</p><p><strong>5. 修改分配的內存或虛擬 CPU：</strong></p><p>首先，關閉虛擬機：</p><pre><code># virsh shutdown [VM Id]
</code></pre><p>為 RAM 編輯虛擬機的配置：</p><pre><code># virsh edit [VM Id]
</code></pre><p>然後更改</p><pre><code>&lt;memory&gt;[內存大小，注意不要加上方括號]&lt;/memory&gt;
</code></pre><p>使用新的設定重啓虛擬機：</p><pre><code># virsh create /etc/libvirt/qemu/tecmint-virt01.xml
</code></pre><p>最後，可以使用下面的命令來動態地改變內存的大小：</p><pre><code># virsh setmem [VM Id] [內存大小，這裏沒有括號]
</code></pre><p>對於 CPU，使用：</p><pre><code># virsh edit [VM Id]
</code></pre><p>然後更改</p><pre><code>&lt;cpu&gt;[CPU 數目，這裏沒有括號]&lt;/cpu&gt;
</code></pre><p>至於更深入的命令和細節，請參考 RHEL 5 虛擬化指南（這個指南儘管有些陳舊，但包括了用於管理虛擬機的 virsh 命令的詳盡清單）的第 26 章裏的表 26.1。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>`,35)),i("p",null,[t[13]||(t[13]=e("在這篇文章中，我們涵蓋了在 RHEL 7 中如何使用 KVM 和虛擬化的一些基本概念，這個話題是一個廣泛且令人着迷的話題。並且我希望它能成為你在隨後閲讀官方的 ",-1)),n(r,{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Virtualization_Getting_Started_Guide/index.html"},{default:o(()=>[...t[11]||(t[11]=[e("RHEL 虛擬化入門",-1)])]),_:1}),t[14]||(t[14]=e(" 和 ",-1)),n(r,{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Virtualization_Deployment_and_Administration_Guide/index.html"},{default:o(()=>[...t[12]||(t[12]=[e("RHEL 虛擬化部署和管理指南",-1)])]),_:1}),t[15]||(t[15]=e(" ，探索更高級的主題時的起點教程，並給你帶來幫助。",-1))]),i("p",null,[t[17]||(t[17]=e("另外，為了分辨或拓展這裏解釋的某些概念，你還可以參考先前包含在 ",-1)),n(r,{href:"http://www.tecmint.com/install-and-configure-kvm-in-linux/"},{default:o(()=>[...t[16]||(t[16]=[e("KVM 系列",-1)])]),_:1}),t[18]||(t[18]=e(" 中的文章。",-1))]),t[36]||(t[36]=i("hr",null,null,-1)),i("p",null,[t[20]||(t[20]=e("via: ",-1)),n(r,{href:"http://www.tecmint.com/kvm-virtualization-basics-and-guest-administration/"},{default:o(()=>[...t[19]||(t[19]=[e("http://www.tecmint.com/kvm-virtualization-basics-and-guest-administration/",-1)])]),_:1})]),i("p",null,[t[24]||(t[24]=e("作者：",-1)),n(r,{href:"http://www.tecmint.com/author/gacanepa/"},{default:o(()=>[...t[21]||(t[21]=[e("Gabriel Cánepa",-1)])]),_:1}),t[25]||(t[25]=e(" 譯者：",-1)),n(r,{href:"https://github.com/FSSlc"},{default:o(()=>[...t[22]||(t[22]=[e("FSSlc",-1)])]),_:1}),t[26]||(t[26]=e(" 校對：",-1)),n(r,{href:"https://github.com/wxy"},{default:o(()=>[...t[23]||(t[23]=[e("wxy",-1)])]),_:1})]),i("p",null,[t[29]||(t[29]=e("本文由 ",-1)),n(r,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[27]||(t[27]=[e("LCTT",-1)])]),_:1}),t[30]||(t[30]=e(" 原創翻譯，",-1)),n(r,{href:"https://linux.cn/"},{default:o(()=>[...t[28]||(t[28]=[e("Linux中國",-1)])]),_:1}),t[31]||(t[31]=e(" 榮譽推出",-1))])])}const b=p(m,[["render",u]]);export{A as __pageData,b as default};
