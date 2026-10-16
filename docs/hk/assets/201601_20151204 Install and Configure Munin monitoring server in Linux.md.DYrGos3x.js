import{_ as l,a0 as p,w as a,s as d,I as e,x as i,a1 as r,A as u,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"在 Linux 上安裝和配置 Munin 監控服務器 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 上安裝和配置 Munin 監控服務器 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 上安裝和配置 Munin 監控服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 上安裝和配置 Munin 監控服務器 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151204 Install and Configure Munin monitoring server in Linux","title":"在 Linux 上安裝和配置 Munin 監控服務器","tag":"201601","desc":""},"relativePath":"201601/20151204 Install and Configure Munin monitoring server in Linux.md","filePath":"[post].md"}'),s={name:"201601/20151204 Install and Configure Munin monitoring server in Linux.md"};function m(x,n,f,g,M,h){const t=p("Link");return a(),d("div",null,[n[21]||(n[21]=e("h1",{id:"在-linux-上安裝和配置-munin-監控服務器",tabindex:"-1"},[i("在 Linux 上安裝和配置 Munin 監控服務器 "),e("a",{class:"header-anchor",href:"#在-linux-上安裝和配置-munin-監控服務器","aria-label":"Permalink to “在 Linux 上安裝和配置 Munin 監控服務器”"},"​")],-1)),n[22]||(n[22]=e("p",null,[e("img",{src:"http://www.linuxnix.com/wp-content/uploads/2015/12/munin_page.jpg",alt:""})],-1)),e("p",null,[n[1]||(n[1]=i("Munin 是一款類似 ",-1)),r(t,{href:"http://www.linuxnix.com/network-monitoringinfo-gathering-tools-in-linux/"},{default:u(()=>[...n[0]||(n[0]=[i("RRD tool",-1)])]),_:1}),n[2]||(n[2]=i(" 的非常棒的系統監控工具，它能提供給你多方面的系統性能信息，例如 ",-1)),n[3]||(n[3]=e("strong",null,"磁盤、網絡、進程、系統和用户",-1)),n[4]||(n[4]=i("。這些是 Munin 默認監控的內容。",-1))]),n[23]||(n[23]=o(`<h3 id="munin-如何工作" tabindex="-1">Munin 如何工作？ <a class="header-anchor" href="#munin-如何工作" aria-label="Permalink to “Munin 如何工作？”">​</a></h3><p>Munin 以客户端-服務器模式運行。主服務器上運行的 Munin 服務器進程會從本地運行的客户端守護進程（Munin 可以監控它自己的資源）或者遠程客户端（Munin 可以監控上百台機器）收集數據，然後在它的 web 界面上以圖形的方式顯示出來。</p><h3 id="在-nutshell-中配置-munin" tabindex="-1">在 nutshell 中配置 Munin <a class="header-anchor" href="#在-nutshell-中配置-munin" aria-label="Permalink to “在 nutshell 中配置 Munin”">​</a></h3><p>要配置服務器端和客户端，我們需要完成以下兩步。</p><ol><li>安裝 Munin 服務器軟件包並配置，使得它能從客户端收集數據。</li><li>安裝 Munin 客户端，使得服務器能連接到客户端守護進程進行數據收集。</li></ol><h3 id="在-linux-上安裝-munin-服務器端" tabindex="-1">在 Linux 上安裝 munin 服務器端 <a class="header-anchor" href="#在-linux-上安裝-munin-服務器端" aria-label="Permalink to “在 Linux 上安裝 munin 服務器端”">​</a></h3><p>在基於 Ubuntu/Debian 的機器上安裝 Munin 服務器：</p><pre><code>apt-get install munin apache2
</code></pre><p>在基於 Redhat/CentOS 的機器上安裝 Munin 服務器：</p>`,9)),e("p",null,[n[6]||(n[6]=i("在基於 Redhat 的機器上安裝 Munin 之前，你需要確保 ",-1)),r(t,{href:"https://linux.cn/article-2324-1.html"},{default:u(()=>[...n[5]||(n[5]=[i("啓用 EPEL 軟件倉庫",-1)])]),_:1}),n[7]||(n[7]=i("，因為基於 Redhat 的機器的軟件倉庫默認沒有 Munin。",-1))]),n[24]||(n[24]=o(`<pre><code>yum install munin httpd
</code></pre><h3 id="在-linux-上配置-munin-服務器端" tabindex="-1">在 Linux 上配置 Munin 服務器端 <a class="header-anchor" href="#在-linux-上配置-munin-服務器端" aria-label="Permalink to “在 Linux 上配置 Munin 服務器端”">​</a></h3><p>下面是我們要在服務器上啓動 Munini 所進行的步驟：</p><ol><li>在 /etc/munin/munin.conf 中添加需要監控的主機詳情。</li><li>配置 apache web 服務器使其包括 munin 配置。</li><li>為 web 界面創建用户名和密碼</li><li>重啓 apache 服務器</li></ol><p>####步驟 1####</p><p>在 <strong>/etc/munin/munin.conf</strong> 文件中添加主機條目。調到文件末尾添加要監控的客户端。在這個例子中，我添加了要監控的資料庫服務器和它的 IP 地址。</p><p>示例：</p><pre><code>[db.linuxnix.com]
 address 192.168.1.25
 use_node_name yes
</code></pre><p>保存文件並退出。</p><p>####步驟 2####</p><p>在 /etc/apache2/conf.d 目錄中編輯或創建文件 munin.conf 用於包括 Munin 和 Apache 相關的配置。另外注意一點，默認其它和 web 相關的 Munin 配置保存在 /var/www/munin 目錄。</p><pre><code>vi /etc/apache2/conf.d/munin.conf
</code></pre><p>內容：</p><pre><code>Alias /munin /var/www/munin
&lt;Directory /var/www/munin&gt;
 Order allow,deny
 Allow from localhost 127.0.0.0/8 ::1
 AllowOverride None
 Options ExecCGI FollowSymlinks
 AddHandler cgi-script .cgi
 DirectoryIndex index.cgi
 AuthUserFile /etc/munin/munin.passwd
 AuthType basic
 AuthName &quot;Munin stats&quot;
 require valid-user
 &lt;IfModule mod_expires.c&gt;
 ExpiresActive On
 ExpiresDefault M310
 &lt;/IfModule&gt;
&lt;/Directory&gt;
</code></pre><p>保存文件並退出。</p><p>####步驟 3####</p><p>現在為查看 munin 的圖示而創建用户名和密碼：</p><pre><code>htpasswd -c /etc/munin/munin-htpasswd munin
</code></pre><p><strong>注意</strong>：對於 Redhat/Centos 機器，要訪問你的配置文件，需要在每個路徑中用 “<strong>httpd</strong>” 替換 “<strong>apache2</strong>”。</p><p>####步驟 4####</p><p>重啓 Apache 服務器，使得 Munin 配置生效。</p><p>基於 Ubuntu/Debian ：</p><pre><code>service apache2 restart
</code></pre><p>基於 Centos/Redhat ：</p><pre><code>service httpd restart
</code></pre><h3 id="在-linux-上安裝和配置-munin-客户端" tabindex="-1">在 Linux 上安裝和配置 Munin 客户端 <a class="header-anchor" href="#在-linux-上安裝和配置-munin-客户端" aria-label="Permalink to “在 Linux 上安裝和配置 Munin 客户端”">​</a></h3><p>####步驟 1####</p><p>在 Linux 上安裝 Munin 客户端</p><pre><code>apt-get install munin-node
</code></pre><p><strong>注意</strong>：如果你想監控你的 Munin 服務器端，你也需要在服務器端安裝 munin-node。</p><p>####步驟 2####</p><p>編輯 munin-node.conf 文件配置客户端。</p><pre><code>vi /etc/munin/munin-node.conf
</code></pre><p>示例：</p><pre><code>allow ^127\\.0\\.0\\.1$
allow ^10\\.10\\.20\\.20$
</code></pre><hr><pre><code># 監聽到哪個地址上
host *
</code></pre><hr><pre><code># 以及哪個端口
port 4949
</code></pre><p><strong>注意</strong>： 10.10.20.20 是我的 Munin 服務器，它連接到客户端的 4949 端口獲取數據。</p><p>####步驟 3####</p><p>在客户端機器中重啓 munin-node：</p><pre><code>service munin-node restart
</code></pre><h3 id="測試連接" tabindex="-1">測試連接 <a class="header-anchor" href="#測試連接" aria-label="Permalink to “測試連接”">​</a></h3><p>檢查你是否能從服務器的連接到客户端的 4949 端口，如果不行，你需要在客户端機器中的防火牆打開該端口。</p><pre><code>telnet db.linuxnix.com 4949
</code></pre><p>訪問 Munin web 頁面</p><pre><code>http://munin.linuxnix.com/munin/index.html
</code></pre><p>希望這些能對你配置基本的 Munin 服務器有所幫助。</p><hr>`,50)),e("p",null,[n[9]||(n[9]=i("via: ",-1)),r(t,{href:"http://www.linuxnix.com/install-and-configure-munin-monitoring-server-in-linux/"},{default:u(()=>[...n[8]||(n[8]=[i("http://www.linuxnix.com/install-and-configure-munin-monitoring-server-in-linux/",-1)])]),_:1})]),e("p",null,[n[13]||(n[13]=i("作者：",-1)),r(t,{href:"http://www.linuxnix.com/author/surendra/"},{default:u(()=>[...n[10]||(n[10]=[i("Surendra Anne",-1)])]),_:1}),n[14]||(n[14]=i(" 譯者：",-1)),r(t,{href:"http://mutouxiaogui.cn/blog/"},{default:u(()=>[...n[11]||(n[11]=[i("ictlyh",-1)])]),_:1}),n[15]||(n[15]=i(" 校對：",-1)),r(t,{href:"https://github.com/wxy"},{default:u(()=>[...n[12]||(n[12]=[i("wxy",-1)])]),_:1})]),e("p",null,[n[18]||(n[18]=i("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:u(()=>[...n[16]||(n[16]=[i("LCTT",-1)])]),_:1}),n[19]||(n[19]=i(" 原創編譯，",-1)),r(t,{href:"https://linux.cn/"},{default:u(()=>[...n[17]||(n[17]=[i("Linux中國",-1)])]),_:1}),n[20]||(n[20]=i(" 榮譽推出",-1))])])}const b=l(s,[["render",m]]);export{T as __pageData,b as default};
