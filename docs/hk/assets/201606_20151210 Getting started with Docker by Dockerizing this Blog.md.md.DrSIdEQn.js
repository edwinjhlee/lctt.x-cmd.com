import{_ as t,a0 as o,w as c,s as d,ao as l,I as a,x as s,a1 as p,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"通過 Docker 化一個Blog網站來開啓我們的 Docker 之旅 | LCTT x X-CMD","titleTemplate":false,"description":"通過 Docker 化一個Blog網站來開啓我們的 Docker 之旅 | LCTT (201606) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通過 Docker 化一個Blog網站來開啓我們的 Docker 之旅 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通過 Docker 化一個Blog網站來開啓我們的 Docker 之旅 | LCTT (201606) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201606/20151210 Getting started with Docker by Dockerizing this Blog.md","title":"通過 Docker 化一個Blog網站來開啓我們的 Docker 之旅","tag":"201606","desc":""},"relativePath":"201606/20151210 Getting started with Docker by Dockerizing this Blog.md.md","filePath":"[post].md"}'),r={name:"201606/20151210 Getting started with Docker by Dockerizing this Blog.md.md"};function g(k,n,b,h,u,f){const e=o("Link");return c(),d("div",null,[n[59]||(n[59]=l('<h1 id="通過-docker-化一個blog網站來開啓我們的-docker-之旅" tabindex="-1">通過 Docker 化一個Blog網站來開啓我們的 Docker 之旅 <a class="header-anchor" href="#通過-docker-化一個blog網站來開啓我們的-docker-之旅" aria-label="Permalink to “通過 Docker 化一個Blog網站來開啓我們的 Docker 之旅”">​</a></h1><p><img src="http://bencane.com/static/img/post-bg.jpg" alt=""></p><blockquote><p>這篇文章包含 Docker 的基本概念，以及如何通過創建一個定製的 Dockerfile 來 Docker 化（Dockerize）一個應用。</p></blockquote><p>Docker 是一個過去兩年來從某個 idea 中孕育而生的有趣技術，公司組織們用它在世界上每個角落來部署應用。在今天的文章中，我將講述如何通過“Docker 化（Dockerize）”一個現有的應用，來開始我們的 Docker 之旅。這裏提到的應用指的就是這個Blog！</p><h2 id="什麼是-docker" tabindex="-1">什麼是 Docker？ <a class="header-anchor" href="#什麼是-docker" aria-label="Permalink to “什麼是 Docker？”">​</a></h2><p>當我們開始學習 Docker 基本概念時，讓我們先去搞清楚什麼是 Docker 以及它為什麼這麼流行。Docker 是一個操作系統容器管理工具，它通過將應用打包在操作系統容器中，來方便我們管理和部署應用。</p><h3 id="容器-vs-虛擬機" tabindex="-1">容器 vs. 虛擬機 <a class="header-anchor" href="#容器-vs-虛擬機" aria-label="Permalink to “容器 vs. 虛擬機”">​</a></h3><p>容器和虛擬機並不完全相似，它是另外一種提供<strong>操作系統虛擬化</strong>的方式。它和標準的虛擬機還是有所不同。</p><p>標準的虛擬機一般會包括一個完整的操作系統、操作系統軟件包、最後還有一至兩個應用。這都得益於為虛擬機提供硬件虛擬化的管理程序。這樣一來，一個單一的服務器就可以將許多獨立的操作系統作為虛擬客户機運行了。</p><p>容器和虛擬機很相似，它們都支持在單一的服務器上運行多個操作環境，只是，在容器中，這些環境並不是一個個完整的操作系統。容器一般只包含必要的操作系統軟件包和一些應用。它們通常不會包含一個完整的操作系統或者硬件的虛擬化。這也意味着容器比傳統的虛擬機開銷更少。</p><p>容器和虛擬機常被誤認為是兩種對立的技術。虛擬機採用一個物理服務器來提供全功能的操作環境，該環境會和其餘虛擬機一起共享這些物理資源。容器一般用來隔離一個單一主機上運行的應用進程，以保證隔離後的進程之間不能相互影響。事實上，容器和 <strong>BSD Jails</strong> 以及 <code>chroot</code> 進程的相似度，超過了和完整虛擬機的相似度。</p><h3 id="docker-在容器之上提供了什麼" tabindex="-1">Docker 在容器之上提供了什麼 <a class="header-anchor" href="#docker-在容器之上提供了什麼" aria-label="Permalink to “Docker 在容器之上提供了什麼”">​</a></h3>',12)),a("p",null,[n[2]||(n[2]=s("Docker 本身不是一個容器運行環境，事實上，只是一個與具體實現無關的容器技術，Docker 正在努力支持 ",-1)),p(e,{href:"https://blog.docker.com/2015/08/docker-oracle-solaris-zones/"},{default:i(()=>[...n[0]||(n[0]=[s("Solaris Zones",-1)])]),_:1}),n[3]||(n[3]=s(" 和 ",-1)),p(e,{href:"https://wiki.freebsd.org/Docker"},{default:i(()=>[...n[1]||(n[1]=[s("BSD Jails",-1)])]),_:1}),n[4]||(n[4]=s("。Docker 提供了一種管理、打包和部署容器的方式。雖然一定程度上，虛擬機多多少少擁有這些類似的功能，但虛擬機並沒有完整擁有絕大多數的容器功能，即使擁有，這些功能用起來都並沒有 Docker 來的方便或那麼完整。",-1))]),n[60]||(n[60]=l(`<p>現在，我們應該知道 Docker 是什麼了，然後，我們將從安裝 Docker，並部署一個公開的預構建好的容器開始，學習 Docker 是如何工作的。</p><h2 id="從安裝開始" tabindex="-1">從安裝開始 <a class="header-anchor" href="#從安裝開始" aria-label="Permalink to “從安裝開始”">​</a></h2><p>默認情況下，Docker 並不會自動被安裝在您的計算機中，所以，第一步就是安裝 Docker 軟件包；我們的教學機器系統是 Ubuntu 14.0.4，所以，我們將使用 Apt 軟件包管理器，來執行安裝操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># apt-get install docker.io</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree       </span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>The following extra packages will be installed:</span></span>
<span class="line"><span>  aufs-tools cgroup-lite git git-man liberror-perl</span></span>
<span class="line"><span>Suggested packages:</span></span>
<span class="line"><span>  btrfs-tools debootstrap lxc rinse git-daemon-run git-daemon-sysvinit git-doc</span></span>
<span class="line"><span>  git-el git-email git-gui gitk gitweb git-arch git-bzr git-cvs git-mediawiki</span></span>
<span class="line"><span>  git-svn</span></span>
<span class="line"><span>The following NEW packages will be installed:</span></span>
<span class="line"><span>  aufs-tools cgroup-lite docker.io git git-man liberror-perl</span></span>
<span class="line"><span>0 upgraded, 6 newly installed, 0 to remove and 0 not upgraded.</span></span>
<span class="line"><span>Need to get 7,553 kB of archives.</span></span>
<span class="line"><span>After this operation, 46.6 MB of additional disk space will be used.</span></span>
<span class="line"><span>Do you want to continue? [Y/n] y</span></span></code></pre></div><p>為了檢查當前是否有容器運行，我們可以執行<code>docker</code>命令，加上<code>ps</code>選項</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker ps</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES</span></span></code></pre></div><p><code>docker</code>命令中的<code>ps</code>功能類似於 Linux 的<code>ps</code>命令。它將顯示可找到的 Docker 容器及其狀態。由於我們並沒有啓動任何 Docker 容器，所以命令沒有顯示任何正在運行的容器。</p><h2 id="部署一個預構建好的-nginx-docker-容器" tabindex="-1">部署一個預構建好的 nginx Docker 容器 <a class="header-anchor" href="#部署一個預構建好的-nginx-docker-容器" aria-label="Permalink to “部署一個預構建好的 nginx Docker 容器”">​</a></h2><p>我比較喜歡的 Docker 特性之一就是 Docker 部署預先構建好的容器的方式，就像<code>yum</code>和<code>apt-get</code>部署包一樣。為了更好地解釋，我們來部署一個運行着 nginx web 服務器的預構建容器。我們可以繼續使用<code>docker</code>命令，這次選擇<code>run</code>選項。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker run -d nginx</span></span>
<span class="line"><span>Unable to find image &#39;nginx&#39; locally</span></span>
<span class="line"><span>Pulling repository nginx</span></span>
<span class="line"><span>5c82215b03d1: Download complete </span></span>
<span class="line"><span>e2a4fb18da48: Download complete </span></span>
<span class="line"><span>58016a5acc80: Download complete </span></span>
<span class="line"><span>657abfa43d82: Download complete </span></span>
<span class="line"><span>dcb2fe003d16: Download complete </span></span>
<span class="line"><span>c79a417d7c6f: Download complete </span></span>
<span class="line"><span>abb90243122c: Download complete </span></span>
<span class="line"><span>d6137c9e2964: Download complete </span></span>
<span class="line"><span>85e566ddc7ef: Download complete </span></span>
<span class="line"><span>69f100eb42b5: Download complete </span></span>
<span class="line"><span>cd720b803060: Download complete </span></span>
<span class="line"><span>7cc81e9a118a: Download complete</span></span></code></pre></div><p><code>docker</code>命令的<code>run</code>選項，用來通知 Docker 去尋找一個指定的 Docker 鏡像，然後啓動運行着該鏡像的容器。默認情況下，Docker 容器運行在前台，這意味着當你運行<code>docker run</code>命令的時候，你的 shell 會被綁定到容器的控制台以及運行在容器中的進程。為了能在後台運行該 Docker 容器，我們使用了<code>-d</code> (<strong>detach</strong>)標誌。</p><p>再次運行<code>docker ps</code>命令，可以看到 nginx 容器正在運行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker ps</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND                CREATED             STATUS              PORTS               NAMES</span></span>
<span class="line"><span>f6d31ab01fc9        nginx:latest        nginx -g &#39;daemon off   4 seconds ago       Up 3 seconds        443/tcp, 80/tcp     desperate_lalande</span></span></code></pre></div><p>從上面的輸出信息中，我們可以看到正在運行的名為<code>desperate_lalande</code>的容器，它是由<code>nginx:latest image</code>（LCTT 譯註： nginx 最新版本的鏡像）構建而來得。</p><h3 id="docker-鏡像" tabindex="-1">Docker 鏡像 <a class="header-anchor" href="#docker-鏡像" aria-label="Permalink to “Docker 鏡像”">​</a></h3><p>鏡像是 Docker 的核心特徵之一，類似於虛擬機鏡像。和虛擬機鏡像一樣，Docker 鏡像是一個被保存並打包的容器。當然，Docker 不只是創建鏡像，它還可以通過 Docker 倉庫發佈這些鏡像，Docker 倉庫和軟件包倉庫的概念差不多，它讓 Docker 能夠模仿<code>yum</code>部署軟件包的方式來部署鏡像。為了更好地理解這是怎麼工作的，我們來回顧<code>docker run</code>執行後的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker run -d nginx</span></span>
<span class="line"><span>Unable to find image &#39;nginx&#39; locally</span></span></code></pre></div><p>我們可以看到第一條信息是，Docker 不能在本地找到名叫 nginx 的鏡像。這是因為當我們執行<code>docker run</code>命令時，告訴 Docker 運行一個基於 nginx 鏡像的容器。既然 Docker 要啓動一個基於特定鏡像的容器，那麼 Docker 首先需要找到那個指定鏡像。在檢查遠程倉庫之前，Docker 首先檢查本地是否存在指定名稱的本地鏡像。</p><p>因為系統是嶄新的，不存在 nginx 鏡像，Docker 將選擇從 Docker 倉庫下載之。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Pulling repository nginx</span></span>
<span class="line"><span>5c82215b03d1: Download complete </span></span>
<span class="line"><span>e2a4fb18da48: Download complete </span></span>
<span class="line"><span>58016a5acc80: Download complete </span></span>
<span class="line"><span>657abfa43d82: Download complete </span></span>
<span class="line"><span>dcb2fe003d16: Download complete </span></span>
<span class="line"><span>c79a417d7c6f: Download complete </span></span>
<span class="line"><span>abb90243122c: Download complete </span></span>
<span class="line"><span>d6137c9e2964: Download complete </span></span>
<span class="line"><span>85e566ddc7ef: Download complete </span></span>
<span class="line"><span>69f100eb42b5: Download complete </span></span>
<span class="line"><span>cd720b803060: Download complete </span></span>
<span class="line"><span>7cc81e9a118a: Download complete</span></span></code></pre></div>`,20)),a("p",null,[n[6]||(n[6]=s("這就是第二部分輸出信息顯示給我們的內容。默認情況下，Docker 會使用 ",-1)),p(e,{href:"https://hub.docker.com/"},{default:i(()=>[...n[5]||(n[5]=[s("Docker Hub",-1)])]),_:1}),n[7]||(n[7]=s(" 倉庫，該倉庫由 Docker 公司維護。",-1))]),n[61]||(n[61]=l(`<p>和 Github 一樣，在 Docker Hub 創建公共倉庫是免費的，私人倉庫就需要繳納費用了。當然，部署你自己的 Docker 倉庫也是可以的，事實上只需要簡單地運行<code>docker run registry</code>命令就行了。但在這篇文章中，我們的重點將不是講解如何部署一個定製的註冊服務。</p><h3 id="關閉並移除容器" tabindex="-1">關閉並移除容器 <a class="header-anchor" href="#關閉並移除容器" aria-label="Permalink to “關閉並移除容器”">​</a></h3><p>在我們繼續構建定製容器之前，我們先清理一下 Docker 環境，我們將關閉先前的容器，並移除它。</p><p>我們利用<code>docker</code>命令和<code>run</code>選項運行一個容器，所以，為了停止同一個容器，我們簡單地在執行<code>docker</code>命令時，使用<code>kill</code>選項，並指定容器名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker kill desperate_lalande</span></span>
<span class="line"><span>desperate_lalande</span></span></code></pre></div><p>當我們再次執行<code>docker ps</code>，就不再有容器運行了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker ps</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES</span></span></code></pre></div><p>但是，此時，我們這是停止了容器；雖然它不再運行，但仍然存在。默認情況下，<code>docker ps</code>只會顯示正在運行的容器，如果我們附加<code>-a</code> (all) 標識，它會顯示所有運行和未運行的容器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker ps -a</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND                CREATED             STATUS                           PORTS               NAMES</span></span>
<span class="line"><span>f6d31ab01fc9        5c82215b03d1        nginx -g &#39;daemon off   4 weeks ago         Exited (-1) About a minute ago                       desperate_lalande</span></span></code></pre></div><p>為了能完整地移除容器，我們在用<code>docker</code>命令時，附加<code>rm</code>選項。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker rm desperate_lalande</span></span>
<span class="line"><span>desperate_lalande</span></span></code></pre></div><p>雖然容器被移除了；但是我們仍擁有可用的<strong>nginx</strong>鏡像（LCTT 譯註：鏡像緩存）。如果我們重新運行<code>docker run -d nginx</code>，Docker 就無需再次拉取 nginx 鏡像即可啓動容器。這是因為我們本地系統中已經保存了一個副本。</p><p>為了列出系統中所有的本地鏡像，我們運行<code>docker</code>命令，附加<code>images</code>選項。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker images</span></span>
<span class="line"><span>REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE</span></span>
<span class="line"><span>nginx               latest              9fab4090484a        5 days ago          132.8 MB</span></span></code></pre></div><h2 id="構建我們自己的鏡像" tabindex="-1">構建我們自己的鏡像 <a class="header-anchor" href="#構建我們自己的鏡像" aria-label="Permalink to “構建我們自己的鏡像”">​</a></h2><p>截至目前，我們已經使用了一些基礎的 Docker 命令來啓動、停止和移除一個預構建好的普通鏡像。為了“Docker 化（Dockerize）”這篇Blog，我們需要構建我們自己的鏡像，也就是創建一個 <strong>Dockerfile</strong>。</p><p>在大多數虛擬機環境中，如果你想創建一個機器鏡像，首先，你需要建立一個新的虛擬機、安裝操作系統、安裝應用，最後將其轉換為一個模板或者鏡像。但在 Docker 中，所有這些步驟都可以通過 Dockerfile 實現全自動。Dockerfile 是向 Docker 提供構建指令去構建定製鏡像的方式。在這一章節，我們將編寫能用來部署這個Blog的定製 Dockerfile。</p><h3 id="理解應用" tabindex="-1">理解應用 <a class="header-anchor" href="#理解應用" aria-label="Permalink to “理解應用”">​</a></h3><p>我們開始構建 Dockerfile 之前，第一步要搞明白，我們需要哪些東西來部署這個Blog。</p>`,19)),a("p",null,[n[9]||(n[9]=s("這個Blog本質上是由一個靜態站點生成器生成的靜態 HTML 頁面，這個生成器是我編寫的，名為 ",-1)),n[10]||(n[10]=a("strong",null,"hamerkop",-1)),n[11]||(n[11]=s("。這個生成器很簡單，它所做的就是生成該Blog站點。所有的代碼和源文件都被我放在了一個公共的 ",-1)),p(e,{href:"https://github.com/madflojo/blog"},{default:i(()=>[...n[8]||(n[8]=[s("Github 倉庫",-1)])]),_:1}),n[12]||(n[12]=s("。為了部署這篇Blog，我們要先從 Github 倉庫把這些內容拉取下來，然後安裝 ",-1)),n[13]||(n[13]=a("strong",null,"Python",-1)),n[14]||(n[14]=s(" 和一些 ",-1)),n[15]||(n[15]=a("strong",null,"Python",-1)),n[16]||(n[16]=s(" 模組，最後執行",-1)),n[17]||(n[17]=a("code",null,"hamerkop",-1)),n[18]||(n[18]=s("應用。我們還需要安裝 ",-1)),n[19]||(n[19]=a("strong",null,"nginx",-1)),n[20]||(n[20]=s("，來運行生成後的內容。",-1))]),a("p",null,[n[22]||(n[22]=s("截止目前，這些還是一個簡單的 Dockerfile，但它卻給我們展示了相當多的 ",-1)),p(e,{href:"(https://docs.docker.com/v1.8/reference/builder/)"},{default:i(()=>[...n[21]||(n[21]=[s("Dockerfile 語法",-1)])]),_:1}),n[23]||(n[23]=s("。我們需要克隆 Github 倉庫，然後使用你最喜歡的編輯器編寫 Dockerfile，我選擇",-1)),n[24]||(n[24]=a("code",null,"vi",-1))]),n[62]||(n[62]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># git clone https://github.com/madflojo/blog.git</span></span>
<span class="line"><span>Cloning into &#39;blog&#39;...</span></span>
<span class="line"><span>remote: Counting objects: 622, done.</span></span>
<span class="line"><span>remote: Total 622 (delta 0), reused 0 (delta 0), pack-reused 622</span></span>
<span class="line"><span>Receiving objects: 100% (622/622), 14.80 MiB | 1.06 MiB/s, done.</span></span>
<span class="line"><span>Resolving deltas: 100% (242/242), done.</span></span>
<span class="line"><span>Checking connectivity... done.</span></span>
<span class="line"><span># cd blog/</span></span>
<span class="line"><span># vi Dockerfile</span></span></code></pre></div><h3 id="from-繼承一個-docker-鏡像" tabindex="-1">FROM - 繼承一個 Docker 鏡像 <a class="header-anchor" href="#from-繼承一個-docker-鏡像" aria-label="Permalink to “FROM - 繼承一個 Docker 鏡像”">​</a></h3><p>第一條 Dockerfile 指令是<code>FROM</code>指令。這將指定一個現存的鏡像作為我們的基礎鏡像。這也從根本上給我們提供了繼承其他 Docker 鏡像的途徑。在本例中，我們還是從剛剛我們使用的 <strong>nginx</strong> 開始，如果我們想從頭開始，我們可以通過指定<code>ubuntu:latest</code>來使用 <strong>Ubuntu</strong> Docker 鏡像。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>## Dockerfile that generates an instance of http://bencane.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM nginx:latest</span></span>
<span class="line"><span>MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span></code></pre></div><p>除了<code>FROM</code>指令，我還使用了<code>MAINTAINER</code>，它用來顯示 Dockerfile 的作者。</p><p>Docker 支持使用<code>#</code>作為註釋，我將經常使用該語法，來解釋 Dockerfile 的部分內容。</p><h3 id="運行一次測試構建" tabindex="-1">運行一次測試構建 <a class="header-anchor" href="#運行一次測試構建" aria-label="Permalink to “運行一次測試構建”">​</a></h3>`,7)),a("p",null,[n[26]||(n[26]=s("因為我們繼承了 ",-1)),n[27]||(n[27]=a("strong",null,"nginx",-1)),n[28]||(n[28]=s(" Docker鏡像，我們現在的 Dockerfile 也就包括了用來構建 ",-1)),n[29]||(n[29]=a("strong",null,"nginx",-1)),n[30]||(n[30]=s(" 鏡像的 ",-1)),p(e,{href:"https://github.com/nginxinc/docker-nginx/blob/08eeb0e3f0a5ee40cbc2bc01f0004c2aa5b78c15/Dockerfile"},{default:i(()=>[...n[25]||(n[25]=[s("Dockerfile",-1)])]),_:1}),n[31]||(n[31]=s(" 中所有指令。這意味着，此時我們可以從該 Dockerfile 中構建出一個 Docker 鏡像，然後以該鏡像運行一個容器。雖然，最終的鏡像和 ",-1)),n[32]||(n[32]=a("strong",null,"nginx",-1)),n[33]||(n[33]=s(" 鏡像本質上是一樣的，但是我們這次是通過構建 Dockerfile 的形式，然後我們將講解 Docker 構建鏡像的過程。",-1))]),n[63]||(n[63]=l(`<p>想要從 Dockerfile 構建鏡像，我們只需要在運行 <code>docker</code> 命令的時候，加上 <code>build</code> 選項。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker build -t blog /root/blog </span></span>
<span class="line"><span>Sending build context to Docker daemon  23.6 MB</span></span>
<span class="line"><span>Sending build context to Docker daemon </span></span>
<span class="line"><span>Step 0 : FROM nginx:latest</span></span>
<span class="line"><span> ---&gt; 9fab4090484a</span></span>
<span class="line"><span>Step 1 : MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span> ---&gt; Running in c97f36450343</span></span>
<span class="line"><span> ---&gt; 60a44f78d194</span></span>
<span class="line"><span>Removing intermediate container c97f36450343</span></span>
<span class="line"><span>Successfully built 60a44f78d194</span></span></code></pre></div><p>上面的例子，我們使用了<code>-t</code> (<strong>tag</strong>)標識給鏡像添加“blog”的標籤。實質上我們就是在給鏡像命名，如果我們不指定標籤，就只能通過 Docker 分配的 <strong>Image ID</strong> 來訪問鏡像了。本例中，從 Docker 構建成功的信息可以看出，<strong>Image ID</strong>值為 <code>60a44f78d194</code>。</p><p>除了<code>-t</code>標識外，我還指定了目錄<code>/root/blog</code>。該目錄被稱作“構建目錄”，它將包含 Dockerfile，以及其它需要構建該容器的文件。</p><p>現在我們構建成功了，下面我們開始定製該鏡像。</p><h3 id="使用-run-來執行-apt-get" tabindex="-1">使用 RUN 來執行 apt-get <a class="header-anchor" href="#使用-run-來執行-apt-get" aria-label="Permalink to “使用 RUN 來執行 apt-get”">​</a></h3><p>用來生成 HTML 頁面的靜態站點生成器是用 <strong>Python</strong> 語言編寫的，所以，在 Dockerfile 中需要做的第一件定製任務是安裝 Python。我們將使用 Apt 軟件包管理器來安裝 Python 軟件包，這意味着在 Dockerfile 中我們要指定運行<code>apt-get update</code>和<code>apt-get install python-dev</code>；為了完成這一點，我們可以使用<code>RUN</code>指令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>## Dockerfile that generates an instance of http://bencane.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM nginx:latest</span></span>
<span class="line"><span>MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Install python and pip</span></span>
<span class="line"><span>RUN apt-get update</span></span>
<span class="line"><span>RUN apt-get install -y python-dev python-pip</span></span></code></pre></div><p>如上所示，我們只是簡單地告知 Docker 構建鏡像的時候，要去執行指定的<code>apt-get</code>命令。比較有趣的是，這些命令只會在該容器的上下文中執行。這意味着，即使在容器中安裝了<code>python-dev</code>和<code>python-pip</code>，但主機本身並沒有安裝這些。説的更簡單點，<code>pip</code>命令將只在容器中執行，出了容器，<code>pip</code>命令不存在。</p><p>還有一點比較重要的是，Docker 構建過程中不接受用户輸入。這説明任何被<code>RUN</code>指令執行的命令必須在沒有用户輸入的時候完成。由於很多應用在安裝的過程中需要用户的輸入信息，所以這增加了一點難度。不過我們例子中，<code>RUN</code>命令執行的命令都不需要用户輸入。</p><h3 id="安裝-python-模組" tabindex="-1">安裝 Python 模組 <a class="header-anchor" href="#安裝-python-模組" aria-label="Permalink to “安裝 Python 模組”">​</a></h3><p><strong>Python</strong> 安裝完畢後，我們現在需要安裝 Python 模組。如果在 Docker 外做這些事，我們通常使用<code>pip</code>命令，然後參考我的Blog Git 倉庫中名叫<code>requirements.txt</code>的文件。在之前的步驟中，我們已經使用<code>git</code>命令成功地將 Github 倉庫“克隆”到了<code>/root/blog</code>目錄；這個目錄碰巧也是我們創建<code>Dockerfile</code>的目錄。這很重要，因為這意味着 Docker 在構建過程中可以訪問這個 Git 倉庫中的內容。</p><p>當我們執行構建後，Docker 將構建的上下文環境設置為指定的“構建目錄”。這意味着目錄中的所有文件都可以在構建過程中被使用，目錄之外的文件（構建環境之外）是不能訪問的。</p><p>為了能安裝所需的 Python 模組，我們需要將<code>requirements.txt</code>從構建目錄拷貝到容器中。我們可以在<code>Dockerfile</code>中使用<code>COPY</code>指令完成這一需求。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>## Dockerfile that generates an instance of http://bencane.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM nginx:latest</span></span>
<span class="line"><span>MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Install python and pip</span></span>
<span class="line"><span>RUN apt-get update</span></span>
<span class="line"><span>RUN apt-get install -y python-dev python-pip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Create a directory for required files</span></span>
<span class="line"><span>RUN mkdir -p /build/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Add requirements file and run pip</span></span>
<span class="line"><span>COPY requirements.txt /build/</span></span>
<span class="line"><span>RUN pip install -r /build/requirements.txt</span></span></code></pre></div><p>在<code>Dockerfile</code>中，我們增加了3條指令。第一條指令使用<code>RUN</code>在容器中創建了<code>/build/</code>目錄。該目錄用來拷貝生成靜態 HTML 頁面所需的一切應用文件。第二條指令是<code>COPY</code>指令，它將<code>requirements.txt</code>從“構建目錄”(<code>/root/blog</code>)拷貝到容器中的<code>/build/</code>目錄。第三條使用<code>RUN</code>指令來執行<code>pip</code>命令；安裝<code>requirements.txt</code>文件中指定的所有模組。</p><p>當構建定製鏡像時，<code>COPY</code>是條重要的指令。如果在 Dockerfile 中不指定拷貝文件，Docker 鏡像將不會包含requirements.txt 這個文件。在 Docker 容器中，所有東西都是隔離的，除非在 Dockerfile 中指定執行，否則容器中不會包括所需的依賴。</p><h3 id="重新運行構建" tabindex="-1">重新運行構建 <a class="header-anchor" href="#重新運行構建" aria-label="Permalink to “重新運行構建”">​</a></h3><p>現在，我們讓 Docker 執行了一些定製任務，現在我們嘗試另一次 blog 鏡像的構建。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker build -t blog /root/blog</span></span>
<span class="line"><span>Sending build context to Docker daemon 19.52 MB</span></span>
<span class="line"><span>Sending build context to Docker daemon </span></span>
<span class="line"><span>Step 0 : FROM nginx:latest</span></span>
<span class="line"><span> ---&gt; 9fab4090484a</span></span>
<span class="line"><span>Step 1 : MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 8e0f1899d1eb</span></span>
<span class="line"><span>Step 2 : RUN apt-get update</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 78b36ef1a1a2</span></span>
<span class="line"><span>Step 3 : RUN apt-get install -y python-dev python-pip</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; ef4f9382658a</span></span>
<span class="line"><span>Step 4 : RUN mkdir -p /build/</span></span>
<span class="line"><span> ---&gt; Running in bde05cf1e8fe</span></span>
<span class="line"><span> ---&gt; f4b66e09fa61</span></span>
<span class="line"><span>Removing intermediate container bde05cf1e8fe</span></span>
<span class="line"><span>Step 5 : COPY requirements.txt /build/</span></span>
<span class="line"><span> ---&gt; cef11c3fb97c</span></span>
<span class="line"><span>Removing intermediate container 9aa8ff43f4b0</span></span>
<span class="line"><span>Step 6 : RUN pip install -r /build/requirements.txt</span></span>
<span class="line"><span> ---&gt; Running in c50b15ddd8b1</span></span>
<span class="line"><span>Downloading/unpacking jinja2 (from -r /build/requirements.txt (line 1))</span></span>
<span class="line"><span>Downloading/unpacking PyYaml (from -r /build/requirements.txt (line 2))</span></span>
<span class="line"><span>&lt;truncated to reduce noise&gt;</span></span>
<span class="line"><span>Successfully installed jinja2 PyYaml mistune markdown MarkupSafe</span></span>
<span class="line"><span>Cleaning up...</span></span>
<span class="line"><span> ---&gt; abab55c20962</span></span>
<span class="line"><span>Removing intermediate container c50b15ddd8b1</span></span>
<span class="line"><span>Successfully built abab55c20962</span></span></code></pre></div><p>上述輸出所示，我們可以看到構建成功了，我們還可以看到另外一個有趣的信息<code> ---&gt; Using cache</code>。這條信息告訴我們，Docker 在構建該鏡像時使用了它的構建緩存。</p><h3 id="docker-構建緩存" tabindex="-1">Docker 構建緩存 <a class="header-anchor" href="#docker-構建緩存" aria-label="Permalink to “Docker 構建緩存”">​</a></h3><p>當 Docker 構建鏡像時，它不僅僅構建一個單獨的鏡像；事實上，在構建過程中，它會構建許多鏡像。從上面的輸出信息可以看出，在每一“步”執行後，Docker 都在創建新的鏡像。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> Step 5 : COPY requirements.txt /build/</span></span>
<span class="line"><span>  ---&gt; cef11c3fb97c</span></span></code></pre></div><p>上面片段的最後一行可以看出，Docker 在告訴我們它在創建一個新鏡像，因為它打印了<strong>Image ID</strong> : <code>cef11c3fb97c</code>。這種方式有用之處在於，Docker能在隨後構建這個 <strong>blog</strong> 鏡像時將這些鏡像作為緩存使用。這很有用處，因為這樣， Docker 就能加速同一個容器中新構建任務的構建流程。從上面的例子中，我們可以看出，Docker 沒有重新安裝<code>python-dev</code>和<code>python-pip</code>包，Docker 則使用了緩存鏡像。但是由於 Docker 並沒有找到執行<code>mkdir</code>命令的構建緩存，隨後的步驟就被一一執行了。</p><p>Docker 構建緩存一定程度上是福音，但有時也是噩夢。這是因為決定使用緩存或者重新運行指令的因素很少。比如，如果<code>requirements.txt</code>文件發生了修改，Docker 會在構建時檢測到該變化，然後 Docker 會重新執行該執行那個點往後的所有指令。這得益於 Docker 能查看<code>requirements.txt</code>的文件內容。但是，<code>apt-get</code>命令的執行就是另一回事了。如果提供 Python 軟件包的 <strong>Apt</strong> 倉庫包含了一個更新的 python-pip 包；Docker 不會檢測到這個變化，轉而去使用構建緩存。這會導致之前舊版本的包將被安裝。雖然對<code>python-pip</code>來説，這不是主要的問題，但對使用了存在某個致命攻擊缺陷的軟件包緩存來説，這是個大問題。</p><p>出於這個原因，拋棄 Docker 緩存，定期地重新構建鏡像是有好處的。這時，當我們執行 Docker 構建時，我簡單地指定<code>--no-cache=True</code>即可。</p><h2 id="部署blog的剩餘部分" tabindex="-1">部署Blog的剩餘部分 <a class="header-anchor" href="#部署blog的剩餘部分" aria-label="Permalink to “部署Blog的剩餘部分”">​</a></h2><p>Python 軟件包和模組安裝後，接下來我們將拷貝需要用到的應用文件，然後運行<code>hamerkop</code>應用。我們只需要使用更多的<code>COPY</code> 和 <code>RUN</code>指令就可完成。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>## Dockerfile that generates an instance of http://bencane.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM nginx:latest</span></span>
<span class="line"><span>MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Install python and pip</span></span>
<span class="line"><span>RUN apt-get update</span></span>
<span class="line"><span>RUN apt-get install -y python-dev python-pip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Create a directory for required files</span></span>
<span class="line"><span>RUN mkdir -p /build/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Add requirements file and run pip</span></span>
<span class="line"><span>COPY requirements.txt /build/</span></span>
<span class="line"><span>RUN pip install -r /build/requirements.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Add blog code nd required files</span></span>
<span class="line"><span>COPY static /build/static</span></span>
<span class="line"><span>COPY templates /build/templates</span></span>
<span class="line"><span>COPY hamerkop /build/</span></span>
<span class="line"><span>COPY config.yml /build/</span></span>
<span class="line"><span>COPY articles /build/articles</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Run Generator</span></span>
<span class="line"><span>RUN /build/hamerkop -c /build/config.yml</span></span></code></pre></div><p>現在我們已經寫出了剩餘的構建指令，我們再次運行另一次構建，並確保鏡像構建成功。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker build -t blog /root/blog/</span></span>
<span class="line"><span>Sending build context to Docker daemon 19.52 MB</span></span>
<span class="line"><span>Sending build context to Docker daemon </span></span>
<span class="line"><span>Step 0 : FROM nginx:latest</span></span>
<span class="line"><span> ---&gt; 9fab4090484a</span></span>
<span class="line"><span>Step 1 : MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 8e0f1899d1eb</span></span>
<span class="line"><span>Step 2 : RUN apt-get update</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 78b36ef1a1a2</span></span>
<span class="line"><span>Step 3 : RUN apt-get install -y python-dev python-pip</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; ef4f9382658a</span></span>
<span class="line"><span>Step 4 : RUN mkdir -p /build/</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; f4b66e09fa61</span></span>
<span class="line"><span>Step 5 : COPY requirements.txt /build/</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; cef11c3fb97c</span></span>
<span class="line"><span>Step 6 : RUN pip install -r /build/requirements.txt</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; abab55c20962</span></span>
<span class="line"><span>Step 7 : COPY static /build/static</span></span>
<span class="line"><span> ---&gt; 15cb91531038</span></span>
<span class="line"><span>Removing intermediate container d478b42b7906</span></span>
<span class="line"><span>Step 8 : COPY templates /build/templates</span></span>
<span class="line"><span> ---&gt; ecded5d1a52e</span></span>
<span class="line"><span>Removing intermediate container ac2390607e9f</span></span>
<span class="line"><span>Step 9 : COPY hamerkop /build/</span></span>
<span class="line"><span> ---&gt; 59efd1ca1771</span></span>
<span class="line"><span>Removing intermediate container b5fbf7e817b7</span></span>
<span class="line"><span>Step 10 : COPY config.yml /build/</span></span>
<span class="line"><span> ---&gt; bfa3db6c05b7</span></span>
<span class="line"><span>Removing intermediate container 1aebef300933</span></span>
<span class="line"><span>Step 11 : COPY articles /build/articles</span></span>
<span class="line"><span> ---&gt; 6b61cc9dde27</span></span>
<span class="line"><span>Removing intermediate container be78d0eb1213</span></span>
<span class="line"><span>Step 12 : RUN /build/hamerkop -c /build/config.yml</span></span>
<span class="line"><span> ---&gt; Running in fbc0b5e574c5</span></span>
<span class="line"><span>Successfully created file /usr/share/nginx/html//2011/06/25/checking-the-number-of-lwp-threads-in-linux</span></span>
<span class="line"><span>Successfully created file /usr/share/nginx/html//2011/06/checking-the-number-of-lwp-threads-in-linux</span></span>
<span class="line"><span>&lt;truncated to reduce noise&gt;</span></span>
<span class="line"><span>Successfully created file /usr/share/nginx/html//archive.html</span></span>
<span class="line"><span>Successfully created file /usr/share/nginx/html//sitemap.xml</span></span>
<span class="line"><span> ---&gt; 3b25263113e1</span></span>
<span class="line"><span>Removing intermediate container fbc0b5e574c5</span></span>
<span class="line"><span>Successfully built 3b25263113e1</span></span></code></pre></div><h3 id="運行定製的容器" tabindex="-1">運行定製的容器 <a class="header-anchor" href="#運行定製的容器" aria-label="Permalink to “運行定製的容器”">​</a></h3><p>成功的一次構建後，我們現在就可以通過運行<code>docker</code>命令和<code>run</code>選項來運行我們定製的容器，和之前我們啓動 nginx 容器一樣。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker run -d -p 80:80 --name=blog blog</span></span>
<span class="line"><span>5f6c7a2217dcdc0da8af05225c4d1294e3e6bb28a41ea898a1c63fb821989ba1</span></span></code></pre></div><p>我們這次又使用了<code>-d</code> (<strong>detach</strong>)標識來讓Docker在後台運行。但是，我們也可以看到兩個新標識。第一個新標識是<code>--name</code>，這用來給容器指定一個用户名稱。之前的例子，我們沒有指定名稱，因為 Docker 隨機幫我們生成了一個。第二個新標識是<code>-p</code>，這個標識允許用户從主機映射一個端口到容器中的一個端口。</p><p>之前我們使用的基礎 <strong>nginx</strong> 鏡像分配了80端口給 HTTP 服務。默認情況下，容器內的端口通道並沒有綁定到主機系統。為了讓外部系統能訪問容器內部端口，我們必須使用<code>-p</code>標識將主機端口映射到容器內部端口。上面的命令，我們通過<code>-p 8080:80</code>語法將主機80端口映射到容器內部的80端口。</p><p>經過上面的命令，我們的容器看起來成功啓動了，我們可以通過執行<code>docker ps</code>核實。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker ps</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND                CREATED             STATUS              PORTS                         NAMES</span></span>
<span class="line"><span>d264c7ef92bd        blog:latest         nginx -g &#39;daemon off   3 seconds ago       Up 3 seconds        443/tcp, 0.0.0.0:80-&gt;80/tcp   blog</span></span></code></pre></div><h2 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h2>`,40)),a("p",null,[n[35]||(n[35]=s("截止目前，我們擁有了一個運行中的定製 Docker 容器。雖然在這篇文章中，我們只接觸了一些 Dockerfile 指令用法，但是我們還是要學習所有的指令。我們可以檢查 ",-1)),p(e,{href:"https://docs.docker.com/v1.8/reference/builder/"},{default:i(()=>[...n[34]||(n[34]=[s("Docker's reference page",-1)])]),_:1}),n[36]||(n[36]=s(" 來獲取所有的 Dockerfile 指令用法，那裏對指令的用法説明得很詳細。",-1))]),a("p",null,[n[38]||(n[38]=s("另一個比較好的資源是 ",-1)),p(e,{href:"https://docs.docker.com/engine/articles/dockerfile_best-practices/"},{default:i(()=>[...n[37]||(n[37]=[s("Dockerfile Best Practices page",-1)])]),_:1}),n[39]||(n[39]=s("，它有許多構建定製 Dockerfile 的最佳練習。有些技巧非常有用，比如戰略性地組織好 Dockerfile 中的命令。上面的例子中，我們將",-1)),n[40]||(n[40]=a("code",null,"articles",-1)),n[41]||(n[41]=s("目錄的",-1)),n[42]||(n[42]=a("code",null,"COPY",-1)),n[43]||(n[43]=s("指令作為 Dockerfile 中最後的",-1)),n[44]||(n[44]=a("code",null,"COPY",-1)),n[45]||(n[45]=s("指令。這是因為",-1)),n[46]||(n[46]=a("code",null,"articles",-1)),n[47]||(n[47]=s("目錄會經常變動。所以，將那些經常變化的指令儘可能地放在最後面的位置，來最優化那些可以被緩存的步驟。",-1))]),n[64]||(n[64]=a("p",null,"通過這篇文章，我們涉及瞭如何運行一個預構建的容器，以及如何構建，然後部署定製容器。雖然關於 Docker 你還有許多需要繼續學習的地方，但我想這篇文章給了你如何繼續開始的好建議。當然，如果你認為還有一些需要繼續補充的內容，在下面評論即可。",-1)),n[65]||(n[65]=a("hr",null,null,-1)),a("p",null,[n[49]||(n[49]=s("via: ",-1)),p(e,{href:"http://bencane.com/2015/12/01/getting-started-with-docker-by-dockerizing-this-blog/"},{default:i(()=>[...n[48]||(n[48]=[s("http://bencane.com/2015/12/01/getting-started-with-docker-by-dockerizing-this-blog/",-1)])]),_:1})]),a("p",null,[n[52]||(n[52]=s("作者：Benjamin Cane 譯者：",-1)),p(e,{href:"https://github.com/su-kaiyao"},{default:i(()=>[...n[50]||(n[50]=[s("su-kaiyao",-1)])]),_:1}),n[53]||(n[53]=s(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...n[51]||(n[51]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[56]||(n[56]=s("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[54]||(n[54]=[s("LCTT",-1)])]),_:1}),n[57]||(n[57]=s(" 原創翻譯，",-1)),p(e,{href:"http://linux.cn/"},{default:i(()=>[...n[55]||(n[55]=[s("Linux中國",-1)])]),_:1}),n[58]||(n[58]=s(" 榮譽推出",-1))])])}const x=t(r,[["render",g]]);export{y as __pageData,x as default};
