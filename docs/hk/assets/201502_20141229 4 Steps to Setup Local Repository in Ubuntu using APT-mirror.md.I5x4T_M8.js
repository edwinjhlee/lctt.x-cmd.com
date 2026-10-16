import{_ as p,a0 as s,w as a,s as d,ao as i,I as u,x as r,a1 as n,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"使用 APT-mirror 四步配置 Ubuntu 本地軟件倉庫 | LCTT x X-CMD","titleTemplate":false,"description":"使用 APT-mirror 四步配置 Ubuntu 本地軟件倉庫 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 APT-mirror 四步配置 Ubuntu 本地軟件倉庫 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 APT-mirror 四步配置 Ubuntu 本地軟件倉庫 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20141229 4 Steps to Setup Local Repository in Ubuntu using APT-mirror","title":"使用 APT-mirror 四步配置 Ubuntu 本地軟件倉庫","tag":"201502","desc":""},"relativePath":"201502/20141229 4 Steps to Setup Local Repository in Ubuntu using APT-mirror.md","filePath":"[post].md"}'),l={name:"201502/20141229 4 Steps to Setup Local Repository in Ubuntu using APT-mirror.md"};function m(b,t,c,h,T,g){const e=s("Link");return a(),d("div",null,[t[19]||(t[19]=i(`<h1 id="使用-apt-mirror-四步配置-ubuntu-本地軟件倉庫" tabindex="-1">使用 APT-mirror 四步配置 Ubuntu 本地軟件倉庫 <a class="header-anchor" href="#使用-apt-mirror-四步配置-ubuntu-本地軟件倉庫" aria-label="Permalink to “使用 APT-mirror 四步配置 Ubuntu 本地軟件倉庫”">​</a></h1><p>今天，我們將向你展示如何在你的 Ubuntu 個人電腦或 Ubuntu 服務器中，直接通過 Ubuntu 官方軟件倉庫來配置本地軟件倉庫。在你的電腦中創建一個本地軟件倉庫有着許多的好處。假如你有許多電腦需要安裝軟件 、安全升級和修復補丁，那麼配置一個本地軟件倉庫是一個做這些事情的高效方法。因為，所有需要安裝的軟件包都可以通過快速的局域網連接從你的本地服務器中下載，這樣可以節省你的網絡帶寬，降低互聯網接入的年度開支 ...</p><p>你可以使用多種工具在你的本地個人電腦或服務器中配置一個 Ubuntu 的本地軟件倉庫，但在本教程中，我們將為你介紹 APT-Mirror。這裏，我們將把默認的鏡像包鏡像到我們本地的服務器或個人電腦中，並且在你的本地或外置硬盤中，我們至少需要 <strong>120 GB</strong> 或更多的可用空間才行。 我們可以通過配置一個 <strong>HTTP</strong> 或 <strong>FTP</strong> 服務器來與本地系統客户端共享這個軟件倉庫。</p><p>我們需要安裝 Apache 網絡服務器和 APT-Mirror 來使得我們的工作得以開始。下面是配置一個可工作的本地軟件倉庫的步驟：</p><h3 id="_1-安裝需要的軟件包" tabindex="-1">1. 安裝需要的軟件包 <a class="header-anchor" href="#_1-安裝需要的軟件包" aria-label="Permalink to “1. 安裝需要的軟件包”">​</a></h3><p>我們需要從 Ubuntu 的公共軟件包倉庫中取得所有的軟件包，然後在我們本地的 Ubuntu 服務器硬盤中保存它們。</p><p>首先我們安裝一個Web 服務器來承載我們的本地軟件倉庫。這裏我們將安裝 Apache Web 服務器，但你可以安裝任何你中意的 Web 服務器。對於 http 協議，Web 服務器是必須的。假如你需要配置 ftp 協議 及 rsync 協議，你還可以再分別額外安裝 FTP 服務器，如 proftpd, vsftpd 等等 和 Rsync 。</p><pre><code>$ sudo apt-get install apache2
</code></pre><p>然後我們需要安裝 apt-mirror:</p><pre><code>$ sudo apt-get install apt-mirror
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/apt-mirror-install.png" alt="apt-mirror-installation"></p><p><strong>注: 正如我先前提到的，我們需要至少 120 GB 的可用空間來使得所有的軟件包被鏡像或下載。</strong></p><h3 id="_2-配置-apt-mirror" tabindex="-1">2. 配置 APT-Mirror <a class="header-anchor" href="#_2-配置-apt-mirror" aria-label="Permalink to “2. 配置 APT-Mirror”">​</a></h3><p>現在，在你的硬盤上創建一個目錄來保存所有的軟件包。例如，我們創建一個名為 <code>/linoxide</code>的目錄，我們將在這個目錄中保存所有的軟件包：</p><pre><code> $ sudo mkdir /linoxide
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/mkdir-linoxide.png" alt="repo-dir"></p><p>現在，打開文件 <strong>/etc/apt/mirror.list</strong> :</p><pre><code> $ sudo nano /etc/apt/mirror.list
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/edit-mirror-list-300x7.png" alt="apt-mirror-edit"></p><p>複製下面的命令列配置到 <code>mirror.list</code>文件中並按照你的需求進行修改：</p><pre><code>############# config ##################
#
set base_path    /linoxide
#
# set mirror_path  $base_path/mirror
# set skel_path    $base_path/skel
# set var_path     $base_path/var
# set cleanscript $var_path/clean.sh
# set defaultarch  &lt;running host architecture&gt;
# set postmirror_script $var_path/postmirror.sh
# set run_postmirror 0
set nthreads     20
set _tilde 0
#
############# end config ##############

deb http://archive.ubuntu.com/ubuntu trusty main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu trusty-security main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu trusty-updates main restricted universe multiverse
#deb http://archive.ubuntu.com/ubuntu trusty-proposed main restricted universe multiverse
#deb http://archive.ubuntu.com/ubuntu trusty-backports main restricted universe multiverse

deb-src http://archive.ubuntu.com/ubuntu trusty main restricted universe multiverse
deb-src http://archive.ubuntu.com/ubuntu trusty-security main restricted universe multiverse
deb-src http://archive.ubuntu.com/ubuntu trusty-updates main restricted universe multiverse
#deb-src http://archive.ubuntu.com/ubuntu trusty-proposed main restricted universe multiverse
#deb-src http://archive.ubuntu.com/ubuntu trusty-backports main restricted universe multiverse

clean http://archive.ubuntu.com/ubuntu
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/mirror-list-config.png" alt="mirror-list-config"></p>`,22)),u("p",null,[u("strong",null,[t[1]||(t[1]=r("注: 你可以將上面的官方鏡像服務器網址更改為離你最近的服務器的網址，可以通過訪問 ",-1)),n(e,{href:"https://launchpad.net/ubuntu/+archivemirrors"},{default:o(()=>[...t[0]||(t[0]=[r("Ubuntu Mirror Server",-1)])]),_:1}),t[2]||(t[2]=r("來找到這些服務器地址。假如你並不太在意鏡像完成的時間，你可以沿用默認的官方鏡像服務器網址。",-1))])]),t[20]||(t[20]=i(`<p>這裏，我們將要鏡像最新和最大的 Ubuntu LTS 發行版 --- 即 Ubuntu 14.04 LTS (Trusty Tahr) --- 的軟件包倉庫，所以在上面的配置中發行版本號為 trusty 。假如我們需要鏡像 Saucy 或其他的 Ubuntu 發行版本，請修改上面的 trusy 為相應的代號。</p><p>現在，我們必須運行 apt-mirror 來下載或鏡像官方倉庫中的所有軟件包。</p><pre><code>sudo apt-mirror
</code></pre><p>從 Ubuntu 服務器中下載所有的軟件包所花費的時間取決於你和鏡像服務器之間的網絡連接速率和性能。這裏我中斷了下載，因為我已經下載好了 ...</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/downloading-index.png" alt="downloading-packages"></p><h3 id="_3-配置網絡服務器" tabindex="-1">3.配置網絡服務器 <a class="header-anchor" href="#_3-配置網絡服務器" aria-label="Permalink to “3.配置網絡服務器”">​</a></h3><p>為了使得其他的電腦能夠訪問這個軟件倉庫，你需要一個Web服務器。你也可以通過 ftp 來完成這件事，但我選擇使用一個Web服務器因為在上面的步驟 1 中我提及到使用Web服務器。因此，我們現在要對 Apache 服務器進行配置:</p><p>我們將為我們本地的軟件倉庫目錄 建立一個到 Apache 託管目錄 --- 即 <code>/var/www/ubuntu</code> --- 的符號鏈接。</p><pre><code>$ sudo ln -s /linoxide /var/www/ubuntu
$ sudo service apache2 start
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/symblink-apache2.png" alt="symlinks-apache2"></p>`,10)),u("p",null,[t[4]||(t[4]=r("上面的命令將允許我們從本地主機(localhost) --- 即 ",-1)),n(e,{href:"http://127.0.0.1"},{default:o(()=>[...t[3]||(t[3]=[r("http://127.0.0.1",-1)])]),_:1}),t[5]||(t[5]=r("(默認情況下) --- 瀏覽我們的鏡像軟件倉庫。",-1))]),t[21]||(t[21]=i(`<h3 id="_4-配置客户端" tabindex="-1">4. 配置客户端 <a class="header-anchor" href="#_4-配置客户端" aria-label="Permalink to “4. 配置客户端”">​</a></h3><p>最後，我們需要在其他的電腦中添加軟件源，來使得它們可以從我們的電腦中取得軟件包或軟件倉庫。為達到此目的，我們需要編輯 <code>/etc/apt/sources.list</code> 文件並添加下面的命令：</p><pre><code>$ sudo nano /etc/apt/sources.list
</code></pre><p>添加下面的一行到<code> /etc/apt/sources.list</code>中並保存。</p><pre><code>deb http://192.168.0.100/ubuntu/ trusty main restricted universe
</code></pre><p><strong>注: 這裏的 192.168.0.100 是我們的服務器電腦的局域網 IP 地址，你需要替換為你的服務器電腦的局域網 IP 地址</strong></p><pre><code>$ sudo apt-get update
</code></pre><p>最終，我們完成了任務。現在，你可以使用<code>sudo apt-get install packagename</code> 命令來從你的本地 Ubuntu 軟件倉庫中安裝所需的軟件包，這將會是高速的且消耗很少的帶寬。</p><hr>`,9)),u("p",null,[t[7]||(t[7]=r("via: ",-1)),n(e,{href:"http://linoxide.com/ubuntu-how-to/setup-local-repository-ubuntu/"},{default:o(()=>[...t[6]||(t[6]=[r("http://linoxide.com/ubuntu-how-to/setup-local-repository-ubuntu/",-1)])]),_:1})]),u("p",null,[t[11]||(t[11]=r("作者：",-1)),n(e,{href:"http://linoxide.com/author/arunp/"},{default:o(()=>[...t[8]||(t[8]=[r("Arun Pyasi",-1)])]),_:1}),t[12]||(t[12]=r(" 譯者：",-1)),n(e,{href:"https://github.com/FSSlc"},{default:o(()=>[...t[9]||(t[9]=[r("FSSlc",-1)])]),_:1}),t[13]||(t[13]=r(" 校對：",-1)),n(e,{href:"https://github.com/wxy"},{default:o(()=>[...t[10]||(t[10]=[r("wxy",-1)])]),_:1})]),u("p",null,[t[16]||(t[16]=r("本文由 ",-1)),n(e,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[14]||(t[14]=[r("LCTT",-1)])]),_:1}),t[17]||(t[17]=r(" 原創翻譯，",-1)),n(e,{href:"http://linux.cn/"},{default:o(()=>[...t[15]||(t[15]=[r("Linux中國",-1)])]),_:1}),t[18]||(t[18]=r(" 榮譽推出",-1))])])}const P=p(l,[["render",m]]);export{f as __pageData,P as default};
