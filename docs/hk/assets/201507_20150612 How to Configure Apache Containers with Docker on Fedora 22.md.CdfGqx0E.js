import{_ as d,a0 as c,w as l,s as i,ao as n,I as a,x as o,a1 as p,A as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const D=JSON.parse('{"title":"如何在Fedora 22上面配置Apache的Docker容器 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Fedora 22上面配置Apache的Docker容器 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Fedora 22上面配置Apache的Docker容器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Fedora 22上面配置Apache的Docker容器 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150612 How to Configure Apache Containers with Docker on Fedora 22","title":"如何在Fedora 22上面配置Apache的Docker容器","tag":"201507","desc":""},"relativePath":"201507/20150612 How to Configure Apache Containers with Docker on Fedora 22.md","filePath":"[post].md"}'),s={name:"201507/20150612 How to Configure Apache Containers with Docker on Fedora 22.md"};function h(k,e,u,g,m,f){const r=c("Link");return l(),i("div",null,[e[22]||(e[22]=n(`<h1 id="如何在fedora-22上面配置apache的docker容器" tabindex="-1">如何在Fedora 22上面配置Apache的Docker容器 <a class="header-anchor" href="#如何在fedora-22上面配置apache的docker容器" aria-label="Permalink to “如何在Fedora 22上面配置Apache的Docker容器”">​</a></h1><p>在這篇文章中，我們將會學習關於Docker的一些知識，如何使用Docker部署Apache httpd服務，並且共享到Docker Hub上面去。首先，我們學習怎樣拉取和使用Docker Hub裏面的鏡像，然後在一個Fedora 22的鏡像上交互式地安裝Apache，之後我們將會學習如何用一個Dockerfile文件來以一種更快，更優雅的方式製作一個鏡像。最後，我們將我們創建的鏡像發佈到Docker Hub上，這樣以後任何人都可以下載並使用它。</p><h3 id="安裝並初體驗docker" tabindex="-1">安裝並初體驗Docker <a class="header-anchor" href="#安裝並初體驗docker" aria-label="Permalink to “安裝並初體驗Docker”">​</a></h3><p><strong>要求</strong></p><p>運行Docker，你至少需要滿足這些：</p><ul><li>你需要一個64位的內核，版本3.10或者更高</li><li>Iptables 1.4 - Docker會用它來做網絡配置，如網絡地址轉換（NAT）</li><li>Git 1.7 - Docker會使用Git來與倉庫交流，如Docker Hub</li><li>ps - 在大多數環境中這個工具都存在，在procps包裏有提供</li><li>root - 儘管一般用户可以通過TCP或者其他方式來運行Docker，但是為了簡化，我們會假定你就是root</li></ul><h4 id="使用dnf安裝docker" tabindex="-1">使用dnf安裝docker <a class="header-anchor" href="#使用dnf安裝docker" aria-label="Permalink to “使用dnf安裝docker”">​</a></h4><p>以下的命令會安裝Docker</p><pre><code>dnf update &amp;&amp; dnf install docker
</code></pre><p><strong>注意</strong>：在Fedora 22裏，你仍然可以使用Yum命令，但是它被DNF取代了，而且在純淨安裝時不可用了。</p><h4 id="檢查安裝" tabindex="-1">檢查安裝 <a class="header-anchor" href="#檢查安裝" aria-label="Permalink to “檢查安裝”">​</a></h4><p>我們將要使用的第一個命令是docker info，這會輸出很多信息給你：</p><pre><code>docker info
</code></pre><p>也可以試着用<strong>docker version</strong>：</p><pre><code>docker version
</code></pre><h4 id="以守護進程方式啓動dcoker" tabindex="-1">以守護進程方式啓動Dcoker#### <a class="header-anchor" href="#以守護進程方式啓動dcoker" aria-label="Permalink to “以守護進程方式啓動Dcoker####”">​</a></h4><p>你應該啓動一個docker實例，然後她會處理我們的請求。</p><pre><code>docker -d
</code></pre><p>現在我們設置 docker 隨系統啓動，以便我們不需要每次重啓都需要運行上述命令。</p><pre><code>chkconfig docker on
</code></pre><p>讓我們用Busybox來打印hello world：</p><pre><code>dockr run -t busybox /bin/echo &quot;hello world&quot;
</code></pre><p>這個命令裏，我們告訴Docker在Busybox鏡像的一個實例/容器裏執行 /bin/echo &quot;hello world&quot;。Busybox是一個小型的POSIX環境，將許多小工具都結合到了一個單獨的可執行程序裏。</p><p>如果Docker不能在你的系統裏找到本地的Busybox鏡像，她就會自動從Docker Hub里拉取鏡像，正如你可以看下如下的快照：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-hello-world-busybox-complete.png" alt="Hello world with Busybox"></p><p><em>Hello world with Busybox</em></p><p>再次嘗試相同的命令，這次由於Docker已經有了本地的Busybox鏡像，你將會看到的全部就是echo的輸出：</p><pre><code>docker run -t busybox /bin/echo &quot;hello world&quot;
</code></pre><p>也可以嘗試以下的命令進入到容器環境裏去：</p><pre><code>docker run -it busybox /bin/sh
</code></pre><p>使用<strong>exit</strong>命令可以離開容器並停止它</p><h3 id="交互式地docker化apache" tabindex="-1">交互式地Docker化Apache <a class="header-anchor" href="#交互式地docker化apache" aria-label="Permalink to “交互式地Docker化Apache”">​</a></h3><p>拉取/下載 Fedora 鏡像：</p><pre><code>docker pull fedora:22
</code></pre><p>啓動一個容器在後台運行：</p><pre><code>docker run -d -t fedora:22 /bin/bash
</code></pre><p>列出正在運行地容器及其名字標識，如下</p><pre><code>docker ps
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-ps-with-docker-attach-highlight.png" alt="listing with docker ps and attaching with docker attach"></p><p><em>使用docker ps列出，並使用docker attach進入一個容器裏</em></p><p>angry_noble是docker分配給我們容器的名字，所以我們來連接上去：</p><pre><code>docker attach angry_noble
</code></pre><p>注意：每次你啓動一個容器，就會被給與一個新的名字，如果你的容器需要一個固定的名字，你應該在 docker run 命令裏使用 -name 參數。</p><h4 id="安裝apache" tabindex="-1">安裝Apache <a class="header-anchor" href="#安裝apache" aria-label="Permalink to “安裝Apache”">​</a></h4><p>下面的命令會更新DNF的資料庫，下載安裝Apache（httpd包）並清理dnf緩存使鏡像儘量小</p><pre><code>dnf -y update &amp;&amp; dnf -y install httpd &amp;&amp; dnf -y clean all
</code></pre><p><strong>配置Apache</strong></p><p>我們需要修改httpd.conf的唯一地方就是ServerName，這會使Apache停止抱怨</p><pre><code>sed -i.orig &#39;s/#ServerName/ServerName/&#39; /etc/httpd/conf/httpd.conf
</code></pre><p><strong>設定環境</strong></p><p>為了使Apache運行為獨立模式，你必須以環境變量的格式提供一些信息，並且你也需要創建這些變量裏的目錄，所以我們將會用一個小的shell腳本幹這個工作，當然也會啓動Apache</p><pre><code>vi /etc/httpd/run_apache_foreground
</code></pre><hr><pre><code>#!/bin/bash

#設置環境變量
APACHE_LOG_DI=R&quot;/var/log/httpd&quot;
APACHE_LOCK_DIR=&quot;/var/lock/httpd&quot;
APACHE_RUN_USER=&quot;apache&quot;
APACHE_RUN_GROUP=&quot;apache&quot;
APACHE_PID_FILE=&quot;/var/run/httpd/httpd.pid&quot;
APACHE_RUN_DIR=&quot;/var/run/httpd&quot;

#如果需要的話，創建目錄
if ! [ -d /var/run/httpd ]; then mkdir /var/run/httpd;fi
if ! [ -d /var/log/httpd ]; then mkdir /var/log/httpd;fi
if ! [ -d /var/lock/httpd ]; then mkdir /var/lock/httpd;fi

#運行 Apache
httpd -D FOREGROUND
</code></pre><p><strong>另外地</strong>，你可以粘貼這個片段代碼到容器shell裏並運行:</p><pre><code>dnf -y install git &amp;&amp; git clone https://github.com/gaiada/run-apache-foreground.git &amp;&amp; cd run-apach* &amp;&amp; ./install &amp;&amp; dnf erase git
</code></pre>`,56)),a("p",null,[e[1]||(e[1]=o("上面的內嵌腳本會安裝Git，克隆",-1)),p(r,{href:"https://github.com/gaiada/run-apache-foreground"},{default:t(()=>[...e[0]||(e[0]=[o("這個倉庫",-1)])]),_:1}),e[2]||(e[2]=o("，到文件裏去運行腳本，並詢問你是否卸載Git。",-1))]),e[23]||(e[23]=n(`<p><strong>保存你的容器狀態</strong></p><p>你的容器現在準備好運行Apache，是時候保存容器當前的狀態為一個鏡像，以備你需要的時候使用。</p><p>為了離開容器環境，你必須順序按下 <strong>Ctrl+q</strong> 和 <strong>Ctrl+p</strong>，如果你僅僅在shell執行exit，你同時也會停止容器，失去目前為止你做過的所有工作。</p><p>回到Docker主機，使用 <strong>docker commit</strong> 及容器名和你想要的倉庫名字/標籤：</p><pre><code>docker commit angry_noble gaiada/apache
</code></pre><p>現在，你保存了容器的狀態到一個鏡像裏，可以使用 <strong>docker stop</strong> 停止容器了：</p><pre><code>docker stop angry_noble
</code></pre><p><strong>運行並測試你的鏡像</strong></p><p>最後，從你的新鏡像啓動一個容器，並且重定向80端口到該容器：</p><pre><code>docker run -p 80:80 -d -t gaiada/apache /etc/httpd/run_apache_foreground
</code></pre>`,10)),a("p",null,[e[4]||(e[4]=o("到目前，你正在你的容器裏運行Apache，打開你的瀏覽器訪問該服務，在",-1)),p(r,{href:"http://localhost/"},{default:t(()=>[...e[3]||(e[3]=[o("http://localhost",-1)])]),_:1}),e[5]||(e[5]=o("，你將會看到如下Apache默認的頁面",-1))]),e[24]||(e[24]=n(`<p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-apache-running.png" alt="Apache default page running from Docker container"></p><p><em>在容器裏運行的Apache默認頁面</em></p><h3 id="使用dockerfile-docker化apache" tabindex="-1">使用Dockerfile Docker化Apache <a class="header-anchor" href="#使用dockerfile-docker化apache" aria-label="Permalink to “使用Dockerfile Docker化Apache”">​</a></h3><p>現在，我們將要去創建一個新的Apache鏡像，這次所有步驟會寫在一個Dockerfile文件裏，文件將會被用於生成該鏡像。</p><p>首先，新建一個目錄，在裏面放Dockerfile文件，並進入該目錄：</p><pre><code>mkdir apachedf; cd apachedf
</code></pre><p>然後創建一個名為Dockerfile的文件，添加以下內容：</p><pre><code>FROM fedora:22

MAINTAINER Carlos Alberto
LABEL version=&quot;0.1&quot;

RUN dnf -y update &amp;&amp; dnf -y install httpd &amp;&amp; dnf -y clean all

RUN [ -d /var/log/httpd ] || mkdir /var/log/httpd
RUN [ -d /var/run/httpd ] || mkdir /var/run/httpd
RUN [ -d /var/lock/httpd ] || mkdir /var/lock/httpd

RUN sed -i.orig &#39;s/#ServerName/ServerName/&#39; /etc/httpd/conf/httpd.conf

ENV APACHE_RUN_USER apache
ENV APACHE_RUN_GROUP apache
ENV APACHE_LOG_DIR /var/log/httpd
ENV APACHE_LOCK_DIR /var/lock/httpd
ENV APACHE_RUN_DIR /var/run/httpd
ENV APACHE_PID_FILE /var/run/httpd/httpd.pid

EXPOSE 80

CMD [&quot;/usr/sbin/httpd&quot;, &quot;-D&quot;, &quot;FOREGROUND&quot;]
</code></pre><p>我們一起來看看Dockerfile裏面有什麼：</p><ul><li><strong>FROM</strong> - 這告訴docker，我們將要使用Fedora 22作為基礎鏡像</li><li><strong>MAINTAINER</strong> 和 <strong>LABLE</strong> - 這些命令對鏡像沒有直接作用，屬於標記信息</li><li><strong>RUN</strong> - 自動完成我們之前交互式做的工作，安裝Apache，新建目錄並編輯httpd.conf</li><li><strong>ENV</strong> - 設置環境變量，現在我們再不需要run_apache_foreground腳本</li><li><strong>EXPOSE</strong> - 暴露80端口給外網</li><li><strong>CMD</strong> - 設置默認的命令啓動httpd服務，這樣我們就不需要每次起一個新的容器都重複這個工作</li></ul><p><strong>建立該鏡像</strong></p><p>現在，我們將要建立這個鏡像，併為其添加tag gaiada/apachedf</p><pre><code>docker build -t gaiada/apachedf:0.1 .
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-build-complete.png" alt="docker build complete"></p><p><em>docker完成創建</em></p><p>使用 <strong>docker images</strong> 列出本地鏡像，查看是否存在你新建的鏡像：</p><pre><code>docker images
</code></pre><p>然後運行新的鏡像:</p><pre><code>docker run -t -p 80:80 gaiada/apachedf
</code></pre><p>這就是Dockerfile的工作，使用這項功能會使得事情更加容易，快速並且可重複生成。</p><h3 id="發佈你的鏡像" tabindex="-1">發佈你的鏡像 <a class="header-anchor" href="#發佈你的鏡像" aria-label="Permalink to “發佈你的鏡像”">​</a></h3><p>直到現在，你僅僅是從Docker Hub拉取了鏡像，但是你也可以推送你的鏡像，以後需要也可以再次拉取他們。實際上，其他人也可以下載你的鏡像，在他們的系統中使用它而不需要改變任何東西。現在我們將要學習如何使我們的鏡像對世界上的其他人可用。</p><p><strong>創建帳號</strong></p>`,23)),a("p",null,[e[7]||(e[7]=o("為了能夠在Docker Hub上推送你的鏡像，你需要創建一個帳號。訪問 ",-1)),p(r,{href:"https://hub.docker.com/account/signup/"},{default:t(()=>[...e[6]||(e[6]=[o("https://hub.docker.com/account/signup/",-1)])]),_:1}),e[8]||(e[8]=o("，填寫下面的表格：",-1))]),e[25]||(e[25]=n(`<p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-hub-signup.png" alt="Docker Hub signup page"></p><p><em>Docker Hub 註冊頁面</em></p><p><strong>登錄</strong></p><p>輸入下面的命令，接着輸入你註冊時提供的用户名，密碼和郵箱</p><pre><code>docker login
</code></pre><p>第一次登錄過後，你的帳號信息會被記錄在 <strong>～/.dockercfg</strong></p><p><strong>推送</strong></p><p>推送鏡像，使用 <strong>docker push [registry/]your_login/repository_name[:tag]</strong></p><pre><code>docker push docker.io/gaiada/apachedf
</code></pre><p>你可能會看見像這樣的輸出，在你的控制台上：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-pushing-apachedf-complete.png" alt="Docker push Apache image complete"></p><p><em>Docker推送Apache鏡像完成</em></p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>現在，你知道如何Docker化Apache，試一試包含其他一些組件，Perl，PHP，proxy，HTTPS，或者任何你需要的東西。我希望你們這些傢伙喜歡她，並推送你們自己的鏡像到Docker Hub。</p><hr>`,15)),a("p",null,[e[10]||(e[10]=o("via: ",-1)),p(r,{href:"http://linoxide.com/linux-how-to/configure-apache-containers-docker-fedora-22/"},{default:t(()=>[...e[9]||(e[9]=[o("http://linoxide.com/linux-how-to/configure-apache-containers-docker-fedora-22/",-1)])]),_:1})]),a("p",null,[e[14]||(e[14]=o("作者：",-1)),p(r,{href:"http://linoxide.com/author/carlosal/"},{default:t(()=>[...e[11]||(e[11]=[o("Carlos Alberto",-1)])]),_:1}),e[15]||(e[15]=o(" 譯者：",-1)),p(r,{href:"https://github.com/wi-cuckoo"},{default:t(()=>[...e[12]||(e[12]=[o("wi-cuckoo",-1)])]),_:1}),e[16]||(e[16]=o(" 校對：",-1)),p(r,{href:"https://github.com/wxy"},{default:t(()=>[...e[13]||(e[13]=[o("wxy",-1)])]),_:1})]),a("p",null,[e[19]||(e[19]=o("本文由 ",-1)),p(r,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[17]||(e[17]=[o("LCTT",-1)])]),_:1}),e[20]||(e[20]=o(" 原創翻譯，",-1)),p(r,{href:"https://linux.cn/"},{default:t(()=>[...e[18]||(e[18]=[o("Linux中國",-1)])]),_:1}),e[21]||(e[21]=o(" 榮譽推出",-1))])])}const _=d(s,[["render",h]]);export{D as __pageData,_ as default};
