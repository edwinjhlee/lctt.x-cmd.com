import{_ as t,a0 as p,w as l,s as d,I as o,x as n,a1 as i,A as a,ao as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const E=JSON.parse('{"title":"如何在 Linux 環境下配置 Nagios Remote Plugin Executor (NRPE) | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 環境下配置 Nagios Remote Plugin Executor (NRPE) | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 環境下配置 Nagios Remote Plugin Executor (NRPE) | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 環境下配置 Nagios Remote Plugin Executor (NRPE) | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140910 How to set up Nagios Remote Plugin Executor (NRPE) in Linux","title":"如何在 Linux 環境下配置 Nagios Remote Plugin Executor (NRPE)","tag":"201410","desc":""},"relativePath":"201410/20140910 How to set up Nagios Remote Plugin Executor (NRPE) in Linux.md","filePath":"[post].md"}'),c={name:"201410/20140910 How to set up Nagios Remote Plugin Executor (NRPE) in Linux.md"};function g(u,e,m,h,N,P){const r=p("Link");return l(),d("div",null,[e[24]||(e[24]=o("h1",{id:"如何在-linux-環境下配置-nagios-remote-plugin-executor-nrpe",tabindex:"-1"},[n("如何在 Linux 環境下配置 Nagios Remote Plugin Executor (NRPE) "),o("a",{class:"header-anchor",href:"#如何在-linux-環境下配置-nagios-remote-plugin-executor-nrpe","aria-label":"Permalink to “如何在 Linux 環境下配置 Nagios Remote Plugin Executor (NRPE)”"},"​")],-1)),o("p",null,[e[2]||(e[2]=n("就網絡管理而言，Nagios 是最強大的工具之一。Nagios 可以監控遠程主機的可訪問性，以及其中正在運行的服務的狀態。不過，如果我們想要監控遠程主機中網絡服務以外的東西呢？比方説，我們可能想要監控遠程主機上的磁盤利用率或者 ",-1)),i(r,{href:"http://xmodulo.com/2012/08/how-to-measure-average-cpu-utilization.html"},{default:a(()=>[...e[0]||(e[0]=[n("CPU 處理器負載",-1)])]),_:1}),e[3]||(e[3]=n("。Nagios Remote Plugin Executor（NRPE）便是一個可以幫助你完成這些操作的工具。NRPE 允許你執行在遠程主機上安裝的 Nagios 插件，並且將它們集成到一個",-1)),i(r,{href:"http://linux.cn/article-2436-1.html"},{default:a(()=>[...e[1]||(e[1]=[n("已經存在的 Nagios 服務器",-1)])]),_:1}),e[4]||(e[4]=n("裏。",-1))]),e[25]||(e[25]=o("p",null,"本教程將會介紹如何在一個已經部署好的 Nagios 中配置 NRPE。本教程主要分為兩部分：",-1)),e[26]||(e[26]=o("ul",null,[o("li",null,"配置遠程主機。"),o("li",null,"配置 Nagios 監控服務器。")],-1)),e[27]||(e[27]=o("p",null,"之後我們會以定義一些可以被 NRPE 使用的自定義命令來結束本教程。",-1)),e[28]||(e[28]=o("h3",{id:"為-nrpe-配置遠程主機",tabindex:"-1"},[n("為 NRPE 配置遠程主機 "),o("a",{class:"header-anchor",href:"#為-nrpe-配置遠程主機","aria-label":"Permalink to “為 NRPE 配置遠程主機”"},"​")],-1)),e[29]||(e[29]=o("h4",{id:"第一步-安裝-nrpe-服務",tabindex:"-1"},[n("第一步：安裝 NRPE 服務 "),o("a",{class:"header-anchor",href:"#第一步-安裝-nrpe-服務","aria-label":"Permalink to “第一步：安裝 NRPE 服務”"},"​")],-1)),e[30]||(e[30]=o("p",null,"你需要在你想要使用 NRPE 監控的每一台遠程主機上安裝 NRPE 服務。每一台遠程主機上的 NRPE 服務守護進程將會與一台 Nagios 監控服務器進行通信。",-1)),o("p",null,[e[6]||(e[6]=n("NRPE 服務所需要的軟件包可以很容易地用 apt-get 或者 yum 來安裝，取決於所在的平台。對於 CentOS 來説，由於 NRPE 並不在 CentOS 的倉庫中，我們需要",-1)),i(r,{href:"http://xmodulo.com/2013/01/how-to-set-up-rpmforge-repoforge-repository-on-centos.html"},{default:a(()=>[...e[5]||(e[5]=[n("添加 Repoforge 倉庫",-1)])]),_:1}),e[7]||(e[7]=n("。",-1))]),e[31]||(e[31]=s(`<p><strong>對於 Debian、Ubuntu 或者 Linux Mint：</strong></p><pre><code># apt-get install nagios-nrpe-server
</code></pre><p><strong>對於 CentOS、Fedora 或者 RHEL：</strong></p><pre><code># yum install nagios-nrpe
</code></pre><h4 id="第二步-準備配置文件" tabindex="-1">第二步：準備配置文件 <a class="header-anchor" href="#第二步-準備配置文件" aria-label="Permalink to “第二步：準備配置文件”">​</a></h4><p>配置文件 /etc/nagios/nrpe.cfg 在基於 Debian 或者 RedHat 的系統中比較相近。讓我們備份並修改配置文件：</p><pre><code># vim /etc/nagios/nrpe.cfg
</code></pre><hr><pre><code>## NRPE 服務端口是可以自定義的 ##
server_port=5666

## 允許 Nagios 監控服務器訪問 ##
## 注意：逗號後面沒有空格 ##
allowed_hosts=127.0.0.1,X.X.X.X-IP_v4_of_Nagios_server

## 下面的例子中我們硬編碼了參數。
## 這些參數可以按需修改。

## 注意：對於 CentOS 64 位用户，請使用 /usr/lib64 替代 /usr/lib ##

command[check_users]=/usr/lib/nagios/plugins/check_users -w 5 -c 10
command[check_load]=/usr/lib/nagios/plugins/check_load -w 15,10,5 -c 30,25,20
command[check_hda1]=/usr/lib/nagios/plugins/check_disk -w 20% -c 10% -p /dev/hda1
command[check_zombie_procs]=/usr/lib/nagios/plugins/check_procs -w 5 -c 10 -s Z
command[check_total_procs]=/usr/lib/nagios/plugins/check_procs -w 150 -c 200
</code></pre><p>現在配置文件已經準備好了，NRPE 服務已經可以啓動了。</p><h4 id="第三步-初始化-nrpe-服務" tabindex="-1">第三步：初始化 NRPE 服務 <a class="header-anchor" href="#第三步-初始化-nrpe-服務" aria-label="Permalink to “第三步：初始化 NRPE 服務”">​</a></h4><p>對於基於 RedHat 的系統，NRPE 服務需要被添加為啓動服務。</p><p><strong>對於 Debian、Ubuntu、Linux Mint：</strong></p><pre><code># service nagios-nrpe-server restart
</code></pre><p><strong>對於 CentOS、Fedora 或者 RHEL：</strong></p><pre><code># service nrpe restart
# chkconfig nrpe on
</code></pre><h4 id="第四步-驗證-nrpe-服務狀態" tabindex="-1">第四步：驗證 NRPE 服務狀態 <a class="header-anchor" href="#第四步-驗證-nrpe-服務狀態" aria-label="Permalink to “第四步：驗證 NRPE 服務狀態”">​</a></h4><p>NRPE 守護進程的狀態信息可以在系統日誌中找到。對於基於 Debian 的系統，日誌文件在 /var/log/syslog，而基於 RedHat 的系統的日誌文件則是 /var/log/messages。下面提供一段樣例日誌以供參考：</p><pre><code>nrpe[19723]: Starting up daemon
nrpe[19723]: Listening for connections on port 5666
nrpe[19723]: Allowing connections from: 127.0.0.1,X.X.X.X
</code></pre><p>如果使用了防火牆，被 NRPE 守護進程使用的 TCP 端口 5666 應該被開啓。</p><pre><code># netstat -tpln | grep 5666
</code></pre><hr><pre><code>tcp    0    0    0.0.0.0:5666      0.0.0.0:*      LISTEN    19885/nrpe
</code></pre><h3 id="為-nrpe-配置-nagios-監控服務器" tabindex="-1">為 NRPE 配置 Nagios 監控服務器 <a class="header-anchor" href="#為-nrpe-配置-nagios-監控服務器" aria-label="Permalink to “為 NRPE 配置 Nagios 監控服務器”">​</a></h3><p>為 NRPE 配置已有的 Nagios 監控服務器的第一步是在服務器上安裝 NRPE 插件。</p><h4 id="第一步-安裝-nrpe-插件" tabindex="-1">第一步：安裝 NRPE 插件 <a class="header-anchor" href="#第一步-安裝-nrpe-插件" aria-label="Permalink to “第一步：安裝 NRPE 插件”">​</a></h4><p>當 Nagios 服務器運行在基於 Debian 的系統（Debian、Ubuntu 或者 Linux Mint）上時，需要的軟件包可以通過 apt-get 安裝。</p><pre><code># apt-get install nagios-nrpe-plugin
</code></pre><p>插件安裝完成後，對隨插件安裝的 check_nrpe 命令稍作修改。</p><pre><code># vim /etc/nagios-plugins/config/check_nrpe.cfg
</code></pre><hr><pre><code>## 默認命令會被覆蓋 ##
define command{
        command_name    check_nrpe
        command_line    /usr/lib/nagios/plugins/check_nrpe -H &#39;$HOSTADDRESS$&#39; -c &#39;$ARG1$&#39;
}
</code></pre>`,32)),o("p",null,[e[9]||(e[9]=n("如果 Nagios 服務器運行在基於 RedHat 的系統（CentOS、Fedora 或者 RHEL）上，你可以通過 yum 安裝 NRPE 插件。對於 CentOS，",-1)),i(r,{href:"http://xmodulo.com/2013/01/how-to-set-up-rpmforge-repoforge-repository-on-centos.html"},{default:a(()=>[...e[8]||(e[8]=[n("添加 Repoforge 倉庫",-1)])]),_:1}),e[10]||(e[10]=n(" 是必要的。",-1))]),e[32]||(e[32]=s(`<pre><code># yum install nagios-plugins-nrpe
</code></pre><p>現在 NRPE 插件已經安裝完成，繼續下面的步驟以配置一台 Nagios 服務器。</p><h4 id="第二步-為-nrpe-插件定義-nagios-命令" tabindex="-1">第二步：為 NRPE 插件定義 Nagios 命令 <a class="header-anchor" href="#第二步-為-nrpe-插件定義-nagios-命令" aria-label="Permalink to “第二步：為 NRPE 插件定義 Nagios 命令”">​</a></h4><p>我們需要首先在 Nagios 中定義一個命令來使用 NRPE。</p><pre><code># vim /etc/nagios/objects/commands.cfg
</code></pre><hr><pre><code>## 注意：對於 CentOS 64 位用户，請使用 /usr/lib64 替代 /usr/lib ##
define command{
        command_name    check_nrpe
        command_line    /usr/lib/nagios/plugins/check_nrpe -H &#39;$HOSTADDRESS$&#39; -c &#39;$ARG1$&#39;
}
</code></pre><h4 id="第三步-添加主機與命令定義" tabindex="-1">第三步：添加主機與命令定義 <a class="header-anchor" href="#第三步-添加主機與命令定義" aria-label="Permalink to “第三步：添加主機與命令定義”">​</a></h4><p>接下來定義遠程主機以及我們將要在它們上面運行的命令。</p><p>下面的例子為一台遠程主機定義了一個可以在上面執行的命令。一般來説，你的配置需要按照你的需求來改變。配置文件的路徑在基於 Debian 和基於 RedHat 的系統上略有不同，不過文件的內容是完全一樣的。</p><p><strong>對於 Debian、Ubuntu 或者 Linux Mint：</strong></p><pre><code># vim /etc/nagios3/conf.d/nrpe.cfg
</code></pre><p><strong>對於 CentOS、Fedora 或者 RHEL：</strong></p><pre><code># vim /etc/nagios/objects/nrpe.cfg
</code></pre><hr><pre><code>define host{
        use                     linux-server
        host_name               server-1
        alias                   server-1
        address                 X.X.X.X-IPv4_address_of_remote_host
}

define service {
        host_name                       server-1
        service_description             Check Load
        check_command                   check_nrpe!check_load
        check_interval                  1
        use                             generic-service
}
</code></pre><h4 id="第四步-重啓-nagios-服務" tabindex="-1">第四步：重啓 Nagios 服務 <a class="header-anchor" href="#第四步-重啓-nagios-服務" aria-label="Permalink to “第四步：重啓 Nagios 服務”">​</a></h4><p>在重啓 Nagios 之前，可以通過測試來驗證配置。</p><p><strong>對於 Ubuntu、Debian 或者 Linux Mint：</strong></p><pre><code># nagios3 -v /etc/nagios3/nagios.cfg
</code></pre><p><strong>對於 CentOS、Fedora 或者 RHEL：</strong></p><pre><code># nagios -v /etc/nagios/nagios.cfg
</code></pre><p>如果一切正常，我們就可以重啓 Nagios 服務了。</p><pre><code># service nagios restart
</code></pre><p><img src="https://farm8.staticflickr.com/7024/13330387845_0bde8b6db5_z.jpg" alt=""></p><h3 id="為-nrpe-配置自定義命令" tabindex="-1">為 NRPE 配置自定義命令 <a class="header-anchor" href="#為-nrpe-配置自定義命令" aria-label="Permalink to “為 NRPE 配置自定義命令”">​</a></h3><h4 id="遠程服務器上安裝" tabindex="-1">遠程服務器上安裝 <a class="header-anchor" href="#遠程服務器上安裝" aria-label="Permalink to “遠程服務器上安裝”">​</a></h4><p>下面列出了一些可以用於 NRPE 的自定義命令。這些命令在遠程服務器的 /etc/nagios/nrpe.cfg 文件中定義。</p><pre><code>## 當 1、5、15 分鐘的平均負載分別超過 1、2、1 時進入警告狀態
## 當 1、5、15 分鐘的平均負載分別超過 3、5、3 時進入嚴重警告狀態
command[check_load]=/usr/lib/nagios/plugins/check_load -w 1,2,1 -c 3,5,3

## 對於 /home 目錄的可用空間設置了警告級別為 25%，以及嚴重警告級別為 10%。
## 可以定製為監控任何分區（比如 /dev/sdb1、/、/var、/home）
command[check_disk]=/usr/lib/nagios/plugins/check_disk -w 25% -c 10% -p /home

## 當 process_ABC 的實例數量超過 10 時警告，超過 20 時嚴重警告 ##
command[check_process_ABC]=/usr/lib/nagios/plugins/check_procs -w 1:10 -c 1:20 -C process_ABC

## 當 process_ABC 的實例數量跌到 1 以下時嚴重警告 ##
command[check_process_XYZ]=/usr/lib/nagios/plugins/check_procs -w 1: -c 1: -C process_XYZ
</code></pre><h4 id="nagios-監控服務器上安裝" tabindex="-1">Nagios 監控服務器上安裝 <a class="header-anchor" href="#nagios-監控服務器上安裝" aria-label="Permalink to “Nagios 監控服務器上安裝”">​</a></h4><p>我們通過如下命令來修改 Nagios 監控服務器裏的服務定義來應用上面定義的自定義命令。服務定義可以寫在所有服務被定義的地方（比如 /etc/nagios/objects/nrpe.cfg 或 /etc/nagios3/conf.d/nrpe.cfg）</p><pre><code>## 示例 1：檢查進程 XYZ ##
define service {
        host_name                       server-1
        service_description             Check Process XYZ
        check_command                   check_nrpe!check_process_XYZ
        check_interval                  1
        use                             generic-service
}

## 示例 2：檢查磁盤狀態 ##
define service {
        host_name                       server-1
        service_description             Check Process XYZ
        check_command                   check_nrpe!check_disk
        check_interval                  1
        use                             generic-service
}
</code></pre><p>總而言之，NRPE 是 Nagios 的一個強大的擴展，它提供了高度可定製的遠程服務器監控方案。使用 NRPE，我們可以監控系統的負載、運行的進程、已登錄的用户、磁盤狀態，以及其它參數。</p><p>希望這些可以幫到你。</p><hr>`,35)),o("p",null,[e[12]||(e[12]=n("via: ",-1)),i(r,{href:"http://xmodulo.com/2014/03/nagios-remote-plugin-executor-nrpe-linux.html"},{default:a(()=>[...e[11]||(e[11]=[n("http://xmodulo.com/2014/03/nagios-remote-plugin-executor-nrpe-linux.html",-1)])]),_:1})]),o("p",null,[e[16]||(e[16]=n("作者：",-1)),i(r,{href:"http://xmodulo.com/author/sarmed"},{default:a(()=>[...e[13]||(e[13]=[n("Sarmed Rahman",-1)])]),_:1}),e[17]||(e[17]=n(" 譯者：",-1)),i(r,{href:"https://github.com/felixonmars"},{default:a(()=>[...e[14]||(e[14]=[n("felixonmars",-1)])]),_:1}),e[18]||(e[18]=n(" 校對：",-1)),i(r,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...e[15]||(e[15]=[n("Caroline",-1)])]),_:1})]),o("p",null,[e[21]||(e[21]=n("本文由 ",-1)),i(r,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[19]||(e[19]=[n("LCTT",-1)])]),_:1}),e[22]||(e[22]=n(" 原創翻譯，",-1)),i(r,{href:"http://linux.cn/"},{default:a(()=>[...e[20]||(e[20]=[n("Linux中國",-1)])]),_:1}),e[23]||(e[23]=n(" 榮譽推出",-1))])])}const x=t(c,[["render",g]]);export{E as __pageData,x as default};
