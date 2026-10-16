import{_ as p,a0 as s,w as a,s as d,ao as i,I as u,x as r,a1 as n,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"使用 APT-mirror 四步配置 Ubuntu 本地软件仓库 | LCTT x X-CMD","titleTemplate":false,"description":"使用 APT-mirror 四步配置 Ubuntu 本地软件仓库 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 APT-mirror 四步配置 Ubuntu 本地软件仓库 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 APT-mirror 四步配置 Ubuntu 本地软件仓库 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20141229 4 Steps to Setup Local Repository in Ubuntu using APT-mirror","title":"使用 APT-mirror 四步配置 Ubuntu 本地软件仓库","tag":"201502","desc":""},"relativePath":"201502/20141229 4 Steps to Setup Local Repository in Ubuntu using APT-mirror.md","filePath":"[post].md"}'),l={name:"201502/20141229 4 Steps to Setup Local Repository in Ubuntu using APT-mirror.md"};function m(b,t,c,h,T,g){const e=s("Link");return a(),d("div",null,[t[19]||(t[19]=i(`<h1 id="使用-apt-mirror-四步配置-ubuntu-本地软件仓库" tabindex="-1">使用 APT-mirror 四步配置 Ubuntu 本地软件仓库 <a class="header-anchor" href="#使用-apt-mirror-四步配置-ubuntu-本地软件仓库" aria-label="Permalink to “使用 APT-mirror 四步配置 Ubuntu 本地软件仓库”">​</a></h1><p>今天，我们将向你展示如何在你的 Ubuntu 个人电脑或 Ubuntu 服务器中，直接通过 Ubuntu 官方软件仓库来配置本地软件仓库。在你的电脑中创建一个本地软件仓库有着许多的好处。假如你有许多电脑需要安装软件 、安全升级和修复补丁，那么配置一个本地软件仓库是一个做这些事情的高效方法。因为，所有需要安装的软件包都可以通过快速的局域网连接从你的本地服务器中下载，这样可以节省你的网络带宽，降低互联网接入的年度开支 ...</p><p>你可以使用多种工具在你的本地个人电脑或服务器中配置一个 Ubuntu 的本地软件仓库，但在本教程中，我们将为你介绍 APT-Mirror。这里，我们将把默认的镜像包镜像到我们本地的服务器或个人电脑中，并且在你的本地或外置硬盘中，我们至少需要 <strong>120 GB</strong> 或更多的可用空间才行。 我们可以通过配置一个 <strong>HTTP</strong> 或 <strong>FTP</strong> 服务器来与本地系统客户端共享这个软件仓库。</p><p>我们需要安装 Apache 网络服务器和 APT-Mirror 来使得我们的工作得以开始。下面是配置一个可工作的本地软件仓库的步骤：</p><h3 id="_1-安装需要的软件包" tabindex="-1">1. 安装需要的软件包 <a class="header-anchor" href="#_1-安装需要的软件包" aria-label="Permalink to “1. 安装需要的软件包”">​</a></h3><p>我们需要从 Ubuntu 的公共软件包仓库中取得所有的软件包，然后在我们本地的 Ubuntu 服务器硬盘中保存它们。</p><p>首先我们安装一个Web 服务器来承载我们的本地软件仓库。这里我们将安装 Apache Web 服务器，但你可以安装任何你中意的 Web 服务器。对于 http 协议，Web 服务器是必须的。假如你需要配置 ftp 协议 及 rsync 协议，你还可以再分别额外安装 FTP 服务器，如 proftpd, vsftpd 等等 和 Rsync 。</p><pre><code>$ sudo apt-get install apache2
</code></pre><p>然后我们需要安装 apt-mirror:</p><pre><code>$ sudo apt-get install apt-mirror
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/apt-mirror-install.png" alt="apt-mirror-installation"></p><p><strong>注: 正如我先前提到的，我们需要至少 120 GB 的可用空间来使得所有的软件包被镜像或下载。</strong></p><h3 id="_2-配置-apt-mirror" tabindex="-1">2. 配置 APT-Mirror <a class="header-anchor" href="#_2-配置-apt-mirror" aria-label="Permalink to “2. 配置 APT-Mirror”">​</a></h3><p>现在，在你的硬盘上创建一个目录来保存所有的软件包。例如，我们创建一个名为 <code>/linoxide</code>的目录，我们将在这个目录中保存所有的软件包：</p><pre><code> $ sudo mkdir /linoxide
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/mkdir-linoxide.png" alt="repo-dir"></p><p>现在，打开文件 <strong>/etc/apt/mirror.list</strong> :</p><pre><code> $ sudo nano /etc/apt/mirror.list
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/edit-mirror-list-300x7.png" alt="apt-mirror-edit"></p><p>复制下面的命令行配置到 <code>mirror.list</code>文件中并按照你的需求进行修改：</p><pre><code>############# config ##################
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
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/mirror-list-config.png" alt="mirror-list-config"></p>`,22)),u("p",null,[u("strong",null,[t[1]||(t[1]=r("注: 你可以将上面的官方镜像服务器网址更改为离你最近的服务器的网址，可以通过访问 ",-1)),n(e,{href:"https://launchpad.net/ubuntu/+archivemirrors"},{default:o(()=>[...t[0]||(t[0]=[r("Ubuntu Mirror Server",-1)])]),_:1}),t[2]||(t[2]=r("来找到这些服务器地址。假如你并不太在意镜像完成的时间，你可以沿用默认的官方镜像服务器网址。",-1))])]),t[20]||(t[20]=i(`<p>这里，我们将要镜像最新和最大的 Ubuntu LTS 发行版 --- 即 Ubuntu 14.04 LTS (Trusty Tahr) --- 的软件包仓库，所以在上面的配置中发行版本号为 trusty 。假如我们需要镜像 Saucy 或其他的 Ubuntu 发行版本，请修改上面的 trusy 为相应的代号。</p><p>现在，我们必须运行 apt-mirror 来下载或镜像官方仓库中的所有软件包。</p><pre><code>sudo apt-mirror
</code></pre><p>从 Ubuntu 服务器中下载所有的软件包所花费的时间取决于你和镜像服务器之间的网络连接速率和性能。这里我中断了下载，因为我已经下载好了 ...</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/downloading-index.png" alt="downloading-packages"></p><h3 id="_3-配置网络服务器" tabindex="-1">3.配置网络服务器 <a class="header-anchor" href="#_3-配置网络服务器" aria-label="Permalink to “3.配置网络服务器”">​</a></h3><p>为了使得其他的电脑能够访问这个软件仓库，你需要一个Web服务器。你也可以通过 ftp 来完成这件事，但我选择使用一个Web服务器因为在上面的步骤 1 中我提及到使用Web服务器。因此，我们现在要对 Apache 服务器进行配置:</p><p>我们将为我们本地的软件仓库目录 建立一个到 Apache 托管目录 --- 即 <code>/var/www/ubuntu</code> --- 的符号链接。</p><pre><code>$ sudo ln -s /linoxide /var/www/ubuntu
$ sudo service apache2 start
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2014/12/symblink-apache2.png" alt="symlinks-apache2"></p>`,10)),u("p",null,[t[4]||(t[4]=r("上面的命令将允许我们从本地主机(localhost) --- 即 ",-1)),n(e,{href:"http://127.0.0.1"},{default:o(()=>[...t[3]||(t[3]=[r("http://127.0.0.1",-1)])]),_:1}),t[5]||(t[5]=r("(默认情况下) --- 浏览我们的镜像软件仓库。",-1))]),t[21]||(t[21]=i(`<h3 id="_4-配置客户端" tabindex="-1">4. 配置客户端 <a class="header-anchor" href="#_4-配置客户端" aria-label="Permalink to “4. 配置客户端”">​</a></h3><p>最后，我们需要在其他的电脑中添加软件源，来使得它们可以从我们的电脑中取得软件包或软件仓库。为达到此目的，我们需要编辑 <code>/etc/apt/sources.list</code> 文件并添加下面的命令：</p><pre><code>$ sudo nano /etc/apt/sources.list
</code></pre><p>添加下面的一行到<code> /etc/apt/sources.list</code>中并保存。</p><pre><code>deb http://192.168.0.100/ubuntu/ trusty main restricted universe
</code></pre><p><strong>注: 这里的 192.168.0.100 是我们的服务器电脑的局域网 IP 地址，你需要替换为你的服务器电脑的局域网 IP 地址</strong></p><pre><code>$ sudo apt-get update
</code></pre><p>最终，我们完成了任务。现在，你可以使用<code>sudo apt-get install packagename</code> 命令来从你的本地 Ubuntu 软件仓库中安装所需的软件包，这将会是高速的且消耗很少的带宽。</p><hr>`,9)),u("p",null,[t[7]||(t[7]=r("via: ",-1)),n(e,{href:"http://linoxide.com/ubuntu-how-to/setup-local-repository-ubuntu/"},{default:o(()=>[...t[6]||(t[6]=[r("http://linoxide.com/ubuntu-how-to/setup-local-repository-ubuntu/",-1)])]),_:1})]),u("p",null,[t[11]||(t[11]=r("作者：",-1)),n(e,{href:"http://linoxide.com/author/arunp/"},{default:o(()=>[...t[8]||(t[8]=[r("Arun Pyasi",-1)])]),_:1}),t[12]||(t[12]=r(" 译者：",-1)),n(e,{href:"https://github.com/FSSlc"},{default:o(()=>[...t[9]||(t[9]=[r("FSSlc",-1)])]),_:1}),t[13]||(t[13]=r(" 校对：",-1)),n(e,{href:"https://github.com/wxy"},{default:o(()=>[...t[10]||(t[10]=[r("wxy",-1)])]),_:1})]),u("p",null,[t[16]||(t[16]=r("本文由 ",-1)),n(e,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[14]||(t[14]=[r("LCTT",-1)])]),_:1}),t[17]||(t[17]=r(" 原创翻译，",-1)),n(e,{href:"http://linux.cn/"},{default:o(()=>[...t[15]||(t[15]=[r("Linux中国",-1)])]),_:1}),t[18]||(t[18]=r(" 荣誉推出",-1))])])}const P=p(l,[["render",m]]);export{f as __pageData,P as default};
