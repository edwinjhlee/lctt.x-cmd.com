import{_ as e,a0 as l,w as s,s as d,I as i,x as o,a1 as n,A as r,ao as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"如何在 Linux 系統上安裝 Suricata 入侵檢測系統 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 系統上安裝 Suricata 入侵檢測系統 | LCTT (201602) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 系統上安裝 Suricata 入侵檢測系統 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 系統上安裝 Suricata 入侵檢測系統 | LCTT (201602) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201602/20150906 How to install Suricata intrusion detection system on Linux","title":"如何在 Linux 系統上安裝 Suricata 入侵檢測系統","tag":"201602","desc":""},"relativePath":"201602/20150906 How to install Suricata intrusion detection system on Linux.md","filePath":"[post].md"}'),p={name:"201602/20150906 How to install Suricata intrusion detection system on Linux.md"};function q(m,t,f,S,T,g){const u=l("Link");return s(),d("div",null,[t[46]||(t[46]=i("h1",{id:"如何在-linux-系統上安裝-suricata-入侵檢測系統",tabindex:"-1"},[o("如何在 Linux 系統上安裝 Suricata 入侵檢測系統 "),i("a",{class:"header-anchor",href:"#如何在-linux-系統上安裝-suricata-入侵檢測系統","aria-label":"Permalink to “如何在 Linux 系統上安裝 Suricata 入侵檢測系統”"},"​")],-1)),i("p",null,[t[2]||(t[2]=o("隨着安全威脅的不斷發生，入侵檢測系統（IDS）在如今的數據中心環境中顯得尤為必要。然而，隨着越來越多的服務器將他們的網卡升級到10GB/40GB以太網，對如此線路上的硬件進行計算密集型的入侵檢測越來越困難。其中一種提升入侵檢測系統性能的途徑是",-1)),t[3]||(t[3]=i("strong",null,"多線程入侵檢測系統",-1)),t[4]||(t[4]=o("，它將 CPU 密集型的深度包檢測工作並行的分配給多個併發任務來完成。這樣的並行檢測可以充分利用多核硬件的優勢來輕鬆提升入侵檢測系統的吞吐量。在這方面有兩個知名的開源項目，分別是 ",-1)),n(u,{href:"http://suricata-ids.org/"},{default:r(()=>[...t[0]||(t[0]=[o("Suricata",-1)])]),_:1}),t[5]||(t[5]=o(" 和 ",-1)),n(u,{href:"https://www.bro.org/"},{default:r(()=>[...t[1]||(t[1]=[o("Bro",-1)])]),_:1}),t[6]||(t[6]=o("。",-1))]),t[47]||(t[47]=a(`<p>這個教程裏，我會向大家演示<strong>如何在 Linux 服務器上安裝和配置 Suricata 入侵檢測系統</strong></p><h3 id="在-linux-上安裝-suricata-ids" tabindex="-1">在 Linux 上安裝 Suricata IDS <a class="header-anchor" href="#在-linux-上安裝-suricata-ids" aria-label="Permalink to “在 Linux 上安裝 Suricata IDS”">​</a></h3><p>讓我們從源文件來構建 Suricata，但在此之前，需要按如下所示先安裝幾個依賴包。</p><h4 id="在-debian-ubuntu-或者-linux-mint-操作系統上安裝依賴包" tabindex="-1">在 Debian, Ubuntu 或者 Linux Mint 操作系統上安裝依賴包 <a class="header-anchor" href="#在-debian-ubuntu-或者-linux-mint-操作系統上安裝依賴包" aria-label="Permalink to “在 Debian, Ubuntu 或者 Linux Mint 操作系統上安裝依賴包”">​</a></h4><pre><code>$ sudo apt-get install wget build-essential libpcre3-dev libpcre3-dbg automake autoconf libtool libpcap-dev libnet1-dev libyaml-dev zlib1g-dev libcap-ng-dev libjansson-dev
</code></pre><h4 id="在-centos-fedora-或者-rhel-操作系統上安裝依賴包" tabindex="-1">在 CentOS, Fedora 或者 RHEL 操作系統上安裝依賴包 <a class="header-anchor" href="#在-centos-fedora-或者-rhel-操作系統上安裝依賴包" aria-label="Permalink to “在 CentOS, Fedora 或者 RHEL 操作系統上安裝依賴包”">​</a></h4><pre><code>$ sudo yum install wget libpcap-devel libnet-devel pcre-devel gcc-c++ automake autoconf libtool make libyaml-devel zlib-devel file-devel jansson-devel nss-devel
</code></pre><p>一旦將所有依賴包安裝完畢，我們就可以繼續安裝 Suricata 了。</p>`,8)),i("p",null,[t[8]||(t[8]=o("首先從 ",-1)),n(u,{href:"http://suricata-ids.org/download/"},{default:r(()=>[...t[7]||(t[7]=[o("http://suricata-ids.org/download/",-1)])]),_:1}),t[9]||(t[9]=o(" 下載 Suricata 源代碼，然後構建它。撰寫這篇文章的時候，其最新版本號為 2.0.8 。",-1))]),t[48]||(t[48]=a(`<pre><code>$ wget http://www.openinfosecfoundation.org/download/suricata-2.0.8.tar.gz
$ tar -xvf suricata-2.0.8.tar.gz
$ cd suricata-2.0.8
$ ./configure --sysconfdir=/etc --localstatedir=/var
</code></pre><p>以下是配置信息的樣例。</p><pre><code>Suricata Configuration:
  AF_PACKET support:                       yes
  PF_RING support:                         no
  NFQueue support:                         no
  NFLOG support:                           no
  IPFW support:                            no
  DAG enabled:                             no
  Napatech enabled:                        no
  Unix socket enabled:                     yes
  Detection enabled:                       yes

  libnss support:                          yes
  libnspr support:                         yes
  libjansson support:                      yes
  Prelude support:                         no
  PCRE jit:                                yes
  LUA support:                             no
  libluajit:                               no
  libgeoip:                                no
  Non-bundled htp:                         no
  Old barnyard2 support:                   no
  CUDA enabled:                            no
</code></pre><p>現在可以編譯、安裝了。</p><pre><code>$ make
$ sudo make install
</code></pre><p>Suricata 源代碼帶有默認的配置文件。按照如下方法安裝這些默認配置文件即可。</p><pre><code>$ sudo make install-conf
</code></pre><p>正如你所料，如果沒有IDS規則集的話，Suricata 什麼用也沒有。幸好 Makefile 為我們提供了 IDS 規則集的安裝選項。安裝方法如下。</p><pre><code>$ sudo make install-rules
</code></pre>`,9)),i("p",null,[t[11]||(t[11]=o("以上的規則安裝命令會從 ",-1)),n(u,{href:"http://rules.emergingthreats.net/"},{default:r(()=>[...t[10]||(t[10]=[o("EmergingThreats.net",-1)])]),_:1}),t[12]||(t[12]=o(" 上下載可用的社區規則集快照，並且將其存儲在 /etc/suricata/rules 目錄下。",-1))]),t[49]||(t[49]=a(`<p><img src="https://farm1.staticflickr.com/691/20482669553_8b67632277_c.jpg" alt=""></p><h3 id="首次配置-suricata-ids" tabindex="-1">首次配置 Suricata IDS <a class="header-anchor" href="#首次配置-suricata-ids" aria-label="Permalink to “首次配置 Suricata IDS”">​</a></h3><p>現在到了配置 Suricata 的時候了。配置文件的位置是 <strong>/etc/suricata/suricata.yaml</strong>。參照以下命令，用文本編輯器打開這個文件。</p><pre><code>$ sudo vi /etc/suricata/suricata.yaml
</code></pre><p>文件中有一些運行所需的基本配置。</p><p>為<code>default-log-dir</code>關鍵字指定 Suricata 日誌文件所在的位置。</p><pre><code>default-log-dir: /var/log/suricata/
</code></pre><p>在<code>vars</code>部分下方，你會發現幾項對 Suricata 來説很重要變量。<code>HOME_NET</code>變量需要指定 Suricata 檢查的網絡。被分配給 <code>EXTERNAL_NET</code> 變量的 <code>!$HOME_NET</code> 代表除本地網絡之外的其他網絡。<code>XXX_PORTS</code>變量用來辨別不同服務所用到的端口號。需要注意的是無論使用什麼端口，Suricata 都可以自動檢測 HTTP 流量。所以是不是正確指定端口就顯得沒那麼重要了。</p><pre><code>vars:
    HOME_NET: &quot;[192.168.122.0/24]&quot;
    EXTERNAL_NET: &quot;!$HOME_NET&quot;
    HTTP_PORTS: &quot;80&quot;
    SHELLCODE_PORTS: &quot;!80&quot;
    SSH_PORTS: 22
</code></pre><p><code>host-os-policy</code> 部分用於防禦利用操作系統網絡棧的自身行為來逃避檢測的一些知名攻擊手段（例如：TCP reassembly）。作為對策，通過針對目標操作系統而對檢測引擎算法進行微調，現代 IDC 提供了“基於目標”的檢測手段。因此，如果你知道某台主機運行了什麼操作系統的話，將這個信息提供給 Suricata 就可以大幅提高檢測的成功率。這就是 <code>host-os-policy</code> 存在的意義。本例中，默認的 IDC 策略是 Linux 系統。如果針對某個 IP 地址沒有指定操作系統信息，Suricata 會默認應用基於 Linux 系統的檢測策略。如下，當捕獲到對 192.168.122.0/28 和 192.168.122.155通訊時，Suricata 就會應用基於 Windows 系統的檢測策略。</p><pre><code>host-os-policy:
  # These are Windows machines.
  windows: [192.168.122.0/28, 192.168.122.155]
  bsd: []
  bsd-right: []
  old-linux: []
  # Make the default policy Linux.
  linux: [0.0.0.0/0]
  old-solaris: []
  solaris: [&quot;::1&quot;]
  hpux10: []
  hpux11: []
  irix: []
  macos: []
  vista: []
  windows2k3: []
</code></pre>`,11)),i("p",null,[t[14]||(t[14]=o("在 ",-1)),t[15]||(t[15]=i("code",null,"threading",-1)),t[16]||(t[16]=o(" 部分下，你可以為不同的 Suricata 線程指定 CPU 關聯。默認狀態下，",-1)),n(u,{href:"http://xmodulo.com/run-program-process-specific-cpu-cores-linux.html"},{default:r(()=>[...t[13]||(t[13]=[o("CPU 關聯",-1)])]),_:1}),t[17]||(t[17]=o(" 是被禁止使用的 (",-1)),t[18]||(t[18]=i("code",null,"set-cpu-affinity: no",-1)),t[19]||(t[19]=o(")，這意味着 Suricata 會分配其線程到所有可用的 CPU 核心上。Suricata 會默認為每一個 CPU 核心創建一個檢測線程。你可以通過指定 ",-1)),t[20]||(t[20]=i("code",null,"detect-thread-ratio: N",-1)),t[21]||(t[21]=o(" 來調整此行為。此處會創建 N*M 個檢測線程，M 代表 CPU 核心總數。",-1))]),t[50]||(t[50]=a(`<pre><code>threading:
  set-cpu-affinity: no
  detect-thread-ratio: 1.5
</code></pre><p>通過以上對線程的設置，Suricata 會創建 1.5*M 個檢測線程，M 是系統的 CPU 核心總數。</p><p>如果你想對 Suricata 配置有更多的瞭解，可以去翻閲默認配置文件。裏邊配有有大量的註釋以供你清晰理解。</p><h3 id="使用-suricata-進行入侵監控" tabindex="-1">使用 Suricata 進行入侵監控 <a class="header-anchor" href="#使用-suricata-進行入侵監控" aria-label="Permalink to “使用 Suricata 進行入侵監控”">​</a></h3><p>現在是時候讓 Suricata 跑起來了，但在這之前還有一個步驟需要去完成。</p><p>當你使用 pcap 捕獲模式的時候，強烈建議關閉 Suricata 監聽網卡上的任何的包卸載（例如 LRO/GRO）功能。這些功能會干擾包的實時捕獲行為。</p><p>按照以下方法關閉 eth0 接口的 LRO/GRO 功能。</p><pre><code>$ sudo ethtool -K eth0 gro off lro off
</code></pre><p>這裏要注意，在使用某些網卡的情況下，你會看到如下警告信息。忽略它們就行了，這些信息只不過告訴你你的網卡不支持 LRO 功能而已。</p><pre><code>Cannot change large-receive-offload
</code></pre>`,10)),i("p",null,[t[23]||(t[23]=o("Suricata 支持許多運行模式。運行模式決定着 IDC 會使用何種線程。以下命令可以查看所有 ",-1)),n(u,{href:"https://redmine.openinfosecfoundation.org/projects/suricata/wiki/Runmodes"},{default:r(()=>[...t[22]||(t[22]=[o("可用的運行模式",-1)])]),_:1}),t[24]||(t[24]=o("。",-1))]),t[51]||(t[51]=i("pre",null,[i("code",null,`$ sudo /usr/local/bin/suricata --list-runmodes
`)],-1)),t[52]||(t[52]=i("p",null,[i("img",{src:"https://farm6.staticflickr.com/5730/20481140934_25080d04d7_c.jpg",alt:""})],-1)),t[53]||(t[53]=i("p",null,'Suricata 使用的默認運行模式是 autofp（"auto flow pinned load balancing"==“自動流綁定負載均衡” 的縮寫）。這個模式下，來自某一個流的包會被分配到一個單獨的檢測線程中。這些流會根據未被處理的包的最低數量來分配相應的線程。',-1)),t[54]||(t[54]=i("p",null,"最後，讓我們將 Suricata 運行起來，看看它表現如何。",-1)),t[55]||(t[55]=i("pre",null,[i("code",null,`$ sudo /usr/local/bin/suricata -c /etc/suricata/suricata.yaml -i eth0 --init-errors-fatal
`)],-1)),t[56]||(t[56]=i("p",null,[i("img",{src:"https://farm1.staticflickr.com/701/21077552366_c577746e36_c.jpg",alt:""})],-1)),t[57]||(t[57]=i("p",null,"本例中，我們在一個8核心系統中監控 eth0 網絡接口。如上所示，Suricata 創建了13個包處理線程和3個管理線程。包處理線程中包括一個 PCAP 包捕獲線程，12個檢測線程(由8*1.5得出)。這表示 IDS 內的1個包捕獲線程均衡負載到12個檢測線程中。管理線程包括1個流管理和2個計數/統計相關線程。",-1)),i("p",null,[t[26]||(t[26]=o("以下是一個關於Suricata處理的線程截圖(由 ",-1)),n(u,{href:"http://ask.xmodulo.com/view-threads-process-linux.html"},{default:r(()=>[...t[25]||(t[25]=[o("htop",-1)])]),_:1}),t[27]||(t[27]=o(" 繪製)。",-1))]),t[58]||(t[58]=a(`<p><img src="https://farm6.staticflickr.com/5775/20482669593_174f8f41cb_c.jpg" alt=""></p><p>Suricata 檢測日誌存儲在 /var/log/suricata 目錄下。</p><pre><code>$ tail -f /var/log/suricata/fast.log
</code></pre><hr><pre><code>04/01/2015-15:47:12.559075  [**] [1:2200074:1] SURICATA TCPv4 invalid checksum [**] [Classification: (null)] [Priority: 3] {TCP} 172.16.253.158:22 -&gt; 172.16.253.1:46997
04/01/2015-15:49:06.565901  [**] [1:2200074:1] SURICATA TCPv4 invalid checksum [**] [Classification: (null)] [Priority: 3] {TCP} 172.16.253.158:22 -&gt; 172.16.253.1:46317
04/01/2015-15:49:06.566759  [**] [1:2200074:1] SURICATA TCPv4 invalid checksum [**] [Classification: (null)] [Priority: 3] {TCP} 172.16.253.158:22 -&gt; 172.16.253.1:46317
</code></pre><p>日誌也可以提供 Json 格式以便導入：</p><pre><code>$ tail -f /var/log/suricata/eve.json
</code></pre><hr><pre><code>{&quot;timestamp&quot;:&quot;2015-04-01T15:49:06.565901&quot;,&quot;event_type&quot;:&quot;alert&quot;,&quot;src_ip&quot;:&quot;172.16.253.158&quot;,&quot;src_port&quot;:22,&quot;dest_ip&quot;:&quot;172.16.253.1&quot;,&quot;dest_port&quot;:46317,&quot;proto&quot;:&quot;TCP&quot;,&quot;alert&quot;:{&quot;action&quot;:&quot;allowed&quot;,&quot;gid&quot;:1,&quot;signature_id&quot;:2200074,&quot;rev&quot;:1,&quot;signature&quot;:&quot;SURICATA TCPv4 invalid checksum&quot;,&quot;category&quot;:&quot;&quot;,&quot;severity&quot;:3}}
{&quot;timestamp&quot;:&quot;2015-04-01T15:49:06.566759&quot;,&quot;event_type&quot;:&quot;alert&quot;,&quot;src_ip&quot;:&quot;172.16.253.158&quot;,&quot;src_port&quot;:22,&quot;dest_ip&quot;:&quot;172.16.253.1&quot;,&quot;dest_port&quot;:46317,&quot;proto&quot;:&quot;TCP&quot;,&quot;alert&quot;:{&quot;action&quot;:&quot;allowed&quot;,&quot;gid&quot;:1,&quot;signature_id&quot;:2200074,&quot;rev&quot;:1,&quot;signature&quot;:&quot;SURICATA TCPv4 invalid checksum&quot;,&quot;category&quot;:&quot;&quot;,&quot;severity&quot;:3}}
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>`,10)),i("p",null,[t[30]||(t[30]=o("這篇教程中，我為大家演示瞭如何在一台多核 Linux 服務器上安裝 Suricata 入侵檢測系統。不同於單線程的 ",-1)),n(u,{href:"http://xmodulo.com/how-to-compile-and-install-snort-from-source-code-on-ubuntu.html"},{default:r(()=>[...t[28]||(t[28]=[o("Snort IDS",-1)])]),_:1}),t[31]||(t[31]=o(" ，Suricata 可以很容易的從多核硬件的多進程特性所帶來的好處中獲益。定製 Suricata 來最大化其效能和檢測範圍是一個很好的主意。Suricata 的粉絲們維護着一個 ",-1)),n(u,{href:"https://redmine.openinfosecfoundation.org/projects/suricata/wiki"},{default:r(()=>[...t[29]||(t[29]=[o("在線 Wiki",-1)])]),_:1}),t[32]||(t[32]=o("，如果你打算將 Suricata 部署到你的環境中，我強烈建議你去那兒取取經。",-1))]),t[59]||(t[59]=i("p",null,"如果你現在已經開始使用 Suricata 了的話，把你的經驗也分享出來吧。",-1)),t[60]||(t[60]=i("hr",null,null,-1)),i("p",null,[t[34]||(t[34]=o("via: ",-1)),n(u,{href:"http://xmodulo.com/install-suricata-intrusion-detection-system-linux.html"},{default:r(()=>[...t[33]||(t[33]=[o("http://xmodulo.com/install-suricata-intrusion-detection-system-linux.html",-1)])]),_:1})]),i("p",null,[t[38]||(t[38]=o("作者：",-1)),n(u,{href:"http://xmodulo.com/author/nanni"},{default:r(()=>[...t[35]||(t[35]=[o("Dan Nanni",-1)])]),_:1}),t[39]||(t[39]=o(" 譯者：",-1)),n(u,{href:"https://github.com/mr-ping"},{default:r(()=>[...t[36]||(t[36]=[o("mr-ping",-1)])]),_:1}),t[40]||(t[40]=o(" 校對：",-1)),n(u,{href:"https://github.com/wxy"},{default:r(()=>[...t[37]||(t[37]=[o("wxy",-1)])]),_:1})]),i("p",null,[t[43]||(t[43]=o("本文由 ",-1)),n(u,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[41]||(t[41]=[o("LCTT",-1)])]),_:1}),t[44]||(t[44]=o(" 原創編譯，",-1)),n(u,{href:"https://linux.cn/"},{default:r(()=>[...t[42]||(t[42]=[o("Linux中國",-1)])]),_:1}),t[45]||(t[45]=o(" 榮譽推出",-1))])])}const P=e(p,[["render",q]]);export{C as __pageData,P as default};
