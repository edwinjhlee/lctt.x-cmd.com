import{_ as d,a0 as a,w as p,s as c,ao as l,I as s,x as e,a1 as r,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"如何在 CentOS 7 上安裝 Docker | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7 上安裝 Docker | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7 上安裝 Docker | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7 上安裝 Docker | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20141127 How to install Docker on CentOS 7","title":"如何在 CentOS 7 上安裝 Docker","tag":"201411","desc":""},"relativePath":"201411/20141127 How to install Docker on CentOS 7.md","filePath":"[post].md"}'),i={name:"201411/20141127 How to install Docker on CentOS 7.md"};function k(u,o,m,C,f,T){const t=a("Link");return p(),c("div",null,[o[21]||(o[21]=l(`<h1 id="如何在-centos-7-上安裝-docker" tabindex="-1">如何在 CentOS 7 上安裝 Docker <a class="header-anchor" href="#如何在-centos-7-上安裝-docker" aria-label="Permalink to “如何在 CentOS 7 上安裝 Docker”">​</a></h1><p>Docker 是一個開源工具，它可以讓創建和管理 <strong>Linux 容器</strong>變得簡單。容器就像是輕量級的虛擬機，並且可以以毫秒級的速度來啓動或停止。Docker 幫助系統管理員和程序員在容器中開發應用程序，並且可以擴展到成千上萬的節點。</p><p>容器和 VM（虛擬機）的主要區別是，容器提供了<strong>基於進程的隔離</strong>，而虛擬機提供了資源的完全隔離。虛擬機可能需要一分鐘來啓動，而容器只需要一秒鐘或更短。容器使用宿主操作系統的內核，而虛擬機使用獨立的內核。</p><p>Docker 的侷限性之一是，它只能用在 <strong>64 位</strong>的操作系統上。</p><p>在這篇文章中我們將討論如何在 CentOS 7.x 中安裝 docker。</p><h3 id="centos-7-中-docker-的安裝" tabindex="-1">CentOS 7 中 Docker 的安裝 <a class="header-anchor" href="#centos-7-中-docker-的安裝" aria-label="Permalink to “CentOS 7 中 Docker 的安裝”">​</a></h3><p>Docker 軟件包已經包括在默認的 CentOS-Extras 軟件源裏。因此想要安裝 docker，只需要運行下面的 yum 命令：</p><pre><code>[root@localhost ~]# yum install docker
</code></pre><h3 id="啓動-docker-服務" tabindex="-1">啓動 Docker 服務 <a class="header-anchor" href="#啓動-docker-服務" aria-label="Permalink to “啓動 Docker 服務”">​</a></h3><p>安裝完成後，使用下面的命令來啓動 docker 服務，並將其設置為開機啓動：</p><pre><code>[root@localhost ~]# service docker start
[root@localhost ~]# chkconfig docker on
</code></pre><p>（LCTT 譯註：此處採用了舊式的 sysv 語法，如採用CentOS 7中支持的新式 systemd 語法，如下：</p><pre><code>[root@localhost ~]# systemctl  start docker.service
[root@localhost ~]# systemctl  enable docker.service
</code></pre><p>）</p>`,14)),s("p",null,[o[2]||(o[2]=s("strong",null,"下載官方的 CentOS 鏡像到本地",-1)),o[3]||(o[3]=e(" （LCTT 譯註：由於 Docker 被",-1)),o[4]||(o[4]=s("strong",null,"牆",-1)),o[5]||(o[5]=e(" :-< ，所以請使用 ",-1)),r(t,{href:"http://docker.cn"},{default:n(()=>[...o[0]||(o[0]=[e("http://docker.cn",-1)])]),_:1}),o[6]||(o[6]=e("  的",-1)),r(t,{href:"https://docker.cn/h/how-to-use-docker-official-repositories"},{default:n(()=>[...o[1]||(o[1]=[e("鏡像",-1)])]),_:1}),o[7]||(o[7]=e("，感謝 @馬全一 的鏡像。 ）",-1))]),o[22]||(o[22]=l(`<pre><code>[root@localhost ~]# docker pull centos
Pulling repository centos
192178b11d36: Download complete 
70441cac1ed5: Download complete 
ae0c2d0bdc10: Download complete 
511136ea3c5a: Download complete 
5b12ef8fd570: Download complete
</code></pre><p><strong>確認 CentOS 鏡像已經被獲取：</strong></p><pre><code>[root@localhost ~]# docker images centos
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
centos              centos5             192178b11d36        2 weeks ago         466.9 MB
centos              centos6             70441cac1ed5        2 weeks ago         215.8 MB
centos              centos7             ae0c2d0bdc10        2 weeks ago         224 MB
centos              latest              ae0c2d0bdc10        2 weeks ago         224 MB
</code></pre><p><strong>運行一個 Docker 容器：</strong></p><pre><code>[root@localhost ~]# docker run -i -t centos /bin/bash
[root@dbf66395436d /]#
</code></pre><p>我們可以看到，CentOS 容器已經被啓動，並且我們得到了 bash 提示符。在 docker 命令中我們使用了 “-i 捕獲標準輸入輸出”和 “-t 分配一個終端或控制台”選項。若要斷開與容器的連接，輸入 exit。</p><pre><code>[root@cd05639b3f5c /]# cat /etc/redhat-release 
CentOS Linux release 7.0.1406 (Core) 
[root@cd05639b3f5c /]# exit
exit
[root@localhost ~]#
</code></pre><p>我們還可以搜索基於 Fedora 和 Ubuntu 操作系統的容器。</p><pre><code>[root@localhost ~]# docker search ubuntu
[root@localhost ~]# docker search fedora
</code></pre><p><strong>顯示當前正在運行容器的列表</strong></p><p><img src="http://www.linuxtechi.com/wp-content/uploads/2014/11/docker-ps.png" alt=""></p><hr>`,12)),s("p",null,[o[9]||(o[9]=e("via: ",-1)),r(t,{href:"http://www.linuxtechi.com/install-docker-on-centos-7/"},{default:n(()=>[...o[8]||(o[8]=[e("http://www.linuxtechi.com/install-docker-on-centos-7/",-1)])]),_:1})]),s("p",null,[o[13]||(o[13]=e("作者：",-1)),r(t,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:n(()=>[...o[10]||(o[10]=[e("Pradeep Kumar",-1)])]),_:1}),o[14]||(o[14]=e(" 譯者：",-1)),r(t,{href:"https://github.com/felixonmars"},{default:n(()=>[...o[11]||(o[11]=[e("felixonmars",-1)])]),_:1}),o[15]||(o[15]=e(" 校對：",-1)),r(t,{href:"https://github.com/wxy"},{default:n(()=>[...o[12]||(o[12]=[e("wxy",-1)])]),_:1})]),s("p",null,[o[18]||(o[18]=e("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...o[16]||(o[16]=[e("LCTT",-1)])]),_:1}),o[19]||(o[19]=e(" 原創翻譯，",-1)),r(t,{href:"http://linux.cn/"},{default:n(()=>[...o[17]||(o[17]=[e("Linux中國",-1)])]),_:1}),o[20]||(o[20]=e(" 榮譽推出",-1))])])}const S=d(i,[["render",k]]);export{w as __pageData,S as default};
