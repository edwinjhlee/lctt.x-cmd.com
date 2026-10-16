import{_ as a,a0 as p,w as i,s as l,ao as s,I as r,x as o,a1 as n,A as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"如何在Fedora / CentOS上面升級Docker 1.6 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Fedora / CentOS上面升級Docker 1.6 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Fedora / CentOS上面升級Docker 1.6 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Fedora / CentOS上面升級Docker 1.6 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150429 Docker 1.6 Released--How to Upgrade on Fedora or CentOS","title":"如何在Fedora / CentOS上面升級Docker 1.6","tag":"201505","desc":""},"relativePath":"201505/20150429 Docker 1.6 Released--How to Upgrade on Fedora or CentOS.md","filePath":"[post].md"}'),c={name:"201505/20150429 Docker 1.6 Released--How to Upgrade on Fedora or CentOS.md"};function k(u,e,m,g,D,T){const t=p("Link");return i(),l("div",null,[e[21]||(e[21]=s(`<h1 id="如何在fedora-centos上面升級docker-1-6" tabindex="-1">如何在Fedora / CentOS上面升級Docker 1.6 <a class="header-anchor" href="#如何在fedora-centos上面升級docker-1-6" aria-label="Permalink to “如何在Fedora / CentOS上面升級Docker 1.6”">​</a></h1><p>Docker，一個流行的將軟件打包的開源容器平台，已經有了新的1.6版，增加了許多新的特性。該版本主要更新了Docker Registry、Engine、 Swarm、 Compose 和 Machine等方面。這次發佈旨在提升性能、改善開發者和系統管理員的體驗。讓我們來快速看看有哪些新特性吧。</p><p><strong>Docker Registry (2.0)</strong>是一項推送Docker鏡像用於存儲和分享的服務，因為面臨加載下的體驗問題而經歷了架構的改變。它仍然向後兼容。Docker Registry的編寫語言現在從Python改為Google的Go語言了，以提升性能。與Docker Engine 1.6結合後，拉取鏡像的能力更快了。早先的鏡像是隊列式輸送的，而現在是並行的啦。</p><p><strong>Docker Engine (1.6)</strong>相比之前的版本有很大的提高。目前支持容器與鏡像的標籤。通過標籤，你可以附加用户自定義的元數據到鏡像和容器上，而鏡像和容器反過來可以被其他工具使用。標籤對正在運行的應用是不可見的，可以用來加速搜索容器和鏡像。</p><p>Windows版本的Docker客户端可以連接到遠程的運行在linux上的Docker Engine。</p><p>Docker目前支持日誌驅動API，這允許我們發送容器日誌給系統如Syslog，或者第三方。這將會使得系統管理員受益。</p><p><strong>Swarm (0.2)</strong>是一個Docker集羣工具，可以將一個Docker主機池轉換為一個虛擬主機。在新特性裏，容器甚至被放在了可用的節點上。通過添加更多的Docker命令，努力支持完整的Docker API。將來，使用第三方驅動來集羣會成為可能。</p><p><strong>Compose (1.2)</strong> 是一個Docker裏定義和運行復雜應用的工具, 也得到了升級。在新版本里，可以創建多個子文件，而不是用一個沒有結構的文件描述一個多容器應用。</p><p>通過<strong>Machine (0.2)</strong>，我們可以很容易地在本地計算機、雲和數據中心上搭建Docker主機。新的發佈版本為開發者提供了一個相對乾淨地驅動界面來編寫驅動。Machine集中控制供給，而不是每個獨立的驅動。增加了新的命令，可以用來生成主機的TLS證書，以提高安全性。</p><h3 id="在fedora-centos-上的升級指導" tabindex="-1">在Fedora / CentOS 上的升級指導 <a class="header-anchor" href="#在fedora-centos-上的升級指導" aria-label="Permalink to “在Fedora / CentOS 上的升級指導”">​</a></h3><p>在這一部分裏，我們將會學習如何在Fedora和CentOS上升級已有的docker到最新版本。請注意，目前的Docker僅運行在64位的架構上，Fedora和CentOS都源於RedHat，命令的使用是差不多相同的，除了在Fedora20和CentOS6.5裏Docker包被叫做“docker-io”。</p><p>如果你係統之前沒有安裝Docker，使用下面命令安裝：</p><pre><code>&quot;yum install docker-io&quot;  –  on Fedora20 / CentOS6.5

&quot;yum install docker&quot;  - on Fedora21 / CentOS7
</code></pre><p>在升級之前，備份一下docker鏡像和容器卷是個不錯的主意。</p>`,14)),r("p",null,[e[2]||(e[2]=o("參考",-1)),n(t,{href:"http://docs.docker.com/reference/commandline/cli/#export"},{default:d(()=>[...e[0]||(e[0]=[o("“將文件系統打成 tar 包”",-1)])]),_:1}),e[3]||(e[3]=o("與",-1)),n(t,{href:"http://docs.docker.com/userguide/dockervolumes/#backup-restore-or-migrate-data-volumes"},{default:d(()=>[...e[1]||(e[1]=[o("“卷備份、恢復或遷移”",-1)])]),_:1}),e[4]||(e[4]=o("，獲取更多信息。",-1))]),e[22]||(e[22]=s(`<p>目前，測試系統安裝了Docker1.5。樣例輸出顯示是來自一個Fedora20的系統。</p><p>驗證當前系統安裝的Docker版本</p><pre><code>[root@TestNode1 ~]#sudo docker -v

Docker version 1.5.0, build a8a31ef/1.5.0
</code></pre><p>如果Docker正在運行，先停掉。</p><pre><code>[root@TestNode1 ~]# sudo systemctl stop docker
</code></pre><p>使用yum update升級到最新版，但是寫這篇文章的時候，倉庫並不是最新版本(1.6)，因此你需要使用二進制的升級方法。</p><pre><code>[root@TestNode1 ~]#sudo yum -y update docker-io

No packages marked for update

[root@TestNode1 ~]#sudo wget https://get.docker.com/builds/Linux/x86_64/docker-latest -O /usr/bin/docker

--2015-04-19 13:40:48-- https://get.docker.com/builds/Linux/x86_64/docker-latest

Resolving get.docker.com (get.docker.com)... 162.242.195.82

Connecting to get.docker.com (get.docker.com)|162.242.195.82|:443... connected.

HTTP request sent, awaiting response... 200 OK

Length: 15443598 (15M) [binary/octet-stream]

Saving to: /usr/bin/docker

100%[======================================&gt;] 15,443,598 8.72MB/s in 1.7s

2015-04-19 13:40:50 (8.72 MB/s) - /usr/bin/docker saved
</code></pre><p>檢查更新後的版本</p><pre><code>[root@TestNode1 ~]#sudo docker -v

Docker version 1.6.0, build 4749651
</code></pre><p>重啓docker服務</p><pre><code>[root@TestNode1 ~]# sudo systemctl start docker
</code></pre><p>確認Docker在運行</p><pre><code>[root@TestNode1 ~]# docker images

REPOSITORY TAG IMAGE ID CREATED VIRTUAL SIZE

fedora latest 834629358fe2 3 months ago 241.3 MB

[root@TestNode1 ~]# docker run fedora /bin/echo Hello World

Hello World
</code></pre><p>CentOS安裝時需要<strong>注意</strong>，在CentOS上安裝完Docker後，當你試圖啓動Docker服務的時候，你可能會得到錯誤的信息，如下所示：</p><pre><code>docker.service - Docker Application Container Engine

Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled)

Active: failed (Result: exit-code) since Mon 2015-04-20 03:24:24 EDT; 6h ago

Docs: http://docs.docker.com

Process: 21069 ExecStart=/usr/bin/docker -d $OPTIONS $DOCKER_STORAGE_OPTIONS $DOCKER_NETWORK_OPTIONS $ADD_REGISTRY $BLOCK_REGISTRY $INSECURE_REGISTRY (code=exited, status=127)

Main PID: 21069 (code=exited, status=127)

Apr 20 03:24:24 centos7 systemd[1]: Starting Docker Application Container E.....

Apr 20 03:24:24 centos7 docker[21069]: time=&quot;2015-04-20T03:24:24-04:00&quot; lev...)&quot;

Apr 20 03:24:24 centos7 docker[21069]: time=&quot;2015-04-20T03:24:24-04:00&quot; lev...)&quot;

Apr 20 03:24:24 centos7 docker[21069]: /usr/bin/docker: relocation error: /...ce

Apr 20 03:24:24 centos7 systemd[1]: docker.service: main process exited, co.../a

Apr 20 03:24:24 centos7 systemd[1]: Failed to start Docker Application Cont...e.

Apr 20 03:24:24 centos7 systemd[1]: Unit docker.service entered failed state.
</code></pre>`,15)),r("p",null,[e[6]||(e[6]=o("這是一個已知的bug（",-1)),n(t,{href:"https://bugzilla.redhat.com/show_bug.cgi?id=1207839"},{default:d(()=>[...e[5]||(e[5]=[o("https://bugzilla.redhat.com/show_bug.cgi?id=1207839",-1)])]),_:1}),e[7]||(e[7]=o("），需要將設備映射升級到最新。",-1))]),e[23]||(e[23]=r("pre",null,[r("code",null,`[root@centos7 ~]# rpm -qa device-mapper

device-mapper-1.02.84-14.el7.x86_64

[root@centos7 ~]# yum update device-mapper

[root@centos7 ~]# rpm -qa device-mapper

device-mapper-1.02.93-3.el7.x86_64

[root@centos7 ~]# systemctl start docker
`)],-1)),e[24]||(e[24]=r("h3",{id:"總結",tabindex:"-1"},[o("總結 "),r("a",{class:"header-anchor",href:"#總結","aria-label":"Permalink to “總結”"},"​")],-1)),e[25]||(e[25]=r("p",null,"儘管docker技術出現時間不長，但很快就變得非常流行了。它使得開發者的生活變得輕鬆，運維團隊可以快速獨立地創建和部署應用。通過該公司的發佈，Docker的快速更新，產品質量的提升，滿足用户需求，未來對於Docker來説一片光明。",-1)),e[26]||(e[26]=r("hr",null,null,-1)),r("p",null,[e[9]||(e[9]=o("via: ",-1)),n(t,{href:"http://linoxide.com/linux-how-to/docker-1-6-features-upgrade-fedora-centos/"},{default:d(()=>[...e[8]||(e[8]=[o("http://linoxide.com/linux-how-to/docker-1-6-features-upgrade-fedora-centos/",-1)])]),_:1})]),r("p",null,[e[13]||(e[13]=o("作者：",-1)),n(t,{href:"http://linoxide.com/author/bnpoornima/"},{default:d(()=>[...e[10]||(e[10]=[o("B N Poornima",-1)])]),_:1}),e[14]||(e[14]=o(" 譯者：",-1)),n(t,{href:"https://github.com/wi-cuckoo"},{default:d(()=>[...e[11]||(e[11]=[o("wi-cuckoo",-1)])]),_:1}),e[15]||(e[15]=o(" 校對：",-1)),n(t,{href:"https://github.com/wxy"},{default:d(()=>[...e[12]||(e[12]=[o("wxy",-1)])]),_:1})]),r("p",null,[e[18]||(e[18]=o("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[16]||(e[16]=[o("LCTT",-1)])]),_:1}),e[19]||(e[19]=o(" 原創翻譯，",-1)),n(t,{href:"http://linux.cn/"},{default:d(()=>[...e[17]||(e[17]=[o("Linux中國",-1)])]),_:1}),e[20]||(e[20]=o(" 榮譽推出",-1))]),e[27]||(e[27]=r("p",null,"[20]:",-1))])}const O=a(c,[["render",k]]);export{S as __pageData,O as default};
