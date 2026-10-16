import{_ as s,a0 as a,w as m,s as l,ao as n,I as i,x as r,a1 as t,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const O=JSON.parse('{"title":"使用Observium來監控你的網絡和服務器 | LCTT x X-CMD","titleTemplate":false,"description":"使用Observium來監控你的網絡和服務器 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用Observium來監控你的網絡和服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用Observium來監控你的網絡和服務器 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150304 Monitoring Your Network And Servers With Observium","title":"使用Observium來監控你的網絡和服務器","tag":"201505","desc":""},"relativePath":"201505/20150304 Monitoring Your Network And Servers With Observium.md","filePath":"[post].md"}'),u={name:"201505/20150304 Monitoring Your Network And Servers With Observium.md"};function d(b,e,v,g,c,h){const o=a("Link");return m(),l("div",null,[e[16]||(e[16]=n('<h1 id="使用observium來監控你的網絡和服務器" tabindex="-1">使用Observium來監控你的網絡和服務器 <a class="header-anchor" href="#使用observium來監控你的網絡和服務器" aria-label="Permalink to “使用Observium來監控你的網絡和服務器”">​</a></h1><h3 id="簡介" tabindex="-1">簡介### <a class="header-anchor" href="#簡介" aria-label="Permalink to “簡介###”">​</a></h3><p>在監控你的服務器、交換機或者設備時遇到過問題嗎？<strong>Observium</strong> 可以滿足你的需求。這是一個免費的監控系統，它可以幫助你遠程監控你的服務器。它是一個由PHP編寫的基於自動發現 SNMP 的網絡監控平台，支持非常廣泛的網絡硬件和操作系統，包括 Cisco、Windows、Linux、HP、NetApp 等等。在此我會給出在 Ubuntu 12.04 上一步步地設置一個 <strong>Observium</strong> 服務器的介紹。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2015/03/Capture1.png" alt=""></p><p>目前有兩種不同的 <strong>observium</strong> 版本。</p><ul><li>Observium 社區版本是一個在 QPL 開源許可證下的免費工具，這個版本是對於較小部署的最好解決方案。該版本每6個月進行一次安全性更新。</li><li>第2個版本是 Observium 專業版，該版本採用基於 SVN 的發佈機制。 會得到每日安全性更新。 該工具適用於服務提供商和企業級部署。</li></ul>',6)),i("p",null,[e[1]||(e[1]=r("更多信息可以通過其",-1)),t(o,{href:"http://www.observium.org/"},{default:p(()=>[...e[0]||(e[0]=[r("官網",-1)])]),_:1}),e[2]||(e[2]=r("獲得。",-1))]),e[17]||(e[17]=n(`<h3 id="系統需求" tabindex="-1">系統需求### <a class="header-anchor" href="#系統需求" aria-label="Permalink to “系統需求###”">​</a></h3><p>要安裝 <strong>Observium</strong>， 需要具有一個最新安裝的服務器。<strong>Observium</strong> 是在 Ubuntu LTS 和 Debian 系統上進行開發的，所以推薦在 Ubuntu 或 Debian 上安裝 <strong>Observium</strong>，因為可能在別的平台上會有一些小問題。</p><p>該文章會引導你在 Ubuntu 12.04 上安裝 <strong>Observium</strong>。對於小型的 <strong>Observium</strong> 安裝，建議使用 256MB 內存和雙核處理器的配置。</p><h3 id="安裝需求" tabindex="-1">安裝需求 <a class="header-anchor" href="#安裝需求" aria-label="Permalink to “安裝需求”">​</a></h3><p>在安裝 <strong>Observuim</strong> 之前，你需要確認安裝所有的依賴關係包。</p><p>首先，使用下面的命令更新你的服務器：</p><pre><code>sudo apt-get update
</code></pre><p>然後你需要安裝下列運行 Observuim 所需的全部軟件包。</p><p>Observium 需要使用下面所列出的軟件才能正確的運行：</p><ul><li>LAMP 服務器</li><li>fping</li><li>Net-SNMP 5.4+</li><li>RRDtool 1.3+</li><li>Graphviz</li></ul><p>對於可選特性的要求：</p><ul><li><p>Ipmitool - 僅在當你想要獲取服務器上的 IPMI（Intelligent Platform Management Interface 智能平台管理接口）基板控制器時。</p></li><li><p>Libvirt-bin - 僅在當你想要使用 libvirt 進行遠程 VM 主機監控時。</p><p>sudo apt-get install libapache2-mod-php5 php5-cli php5-mysql php5-gd php5-mcrypt php5-json php-pear snmp fping mysql-server mysql-client python-mysqldb rrdtool subversion whois mtr-tiny ipmitool graphviz imagemagick libvirt ipmitool</p></li></ul><h3 id="為-observium-創建-mysql-資料庫及其用户。" tabindex="-1">為 Observium 創建 MySQL 資料庫及其用户。 <a class="header-anchor" href="#為-observium-創建-mysql-資料庫及其用户。" aria-label="Permalink to “為 Observium 創建 MySQL 資料庫及其用户。”">​</a></h3><p>現在你需要登錄到 MySQL 中併為 <strong>Observium</strong> 創建資料庫：</p><pre><code>mysql -u root -p
</code></pre><p>在用户驗證成功之後，你需要按照下面的命令創建該資料庫。</p><pre><code>CREATE DATABASE observium;
</code></pre><p>資料庫名為 <strong>Observium</strong>，稍後你會需要這個信息。</p><p>現在你需要創建資料庫管理員用户。</p><pre><code>CREATE USER observiumadmin@localhost IDENTIFIED BY &#39;observiumpassword&#39;;
</code></pre><p>接下來，你需要給該管理員用户相應的權限來管理創建的資料庫。</p><pre><code>GRANT ALL PRIVILEGES ON observium.* TO observiumadmin@localhost;
</code></pre><p>你需要將權限信息寫回到磁盤中來激活新的 MySQL 用户：</p><pre><code>FLUSH PRIVILEGES;
exit
</code></pre><h3 id="下載並安裝-observium" tabindex="-1">下載並安裝 Observium### <a class="header-anchor" href="#下載並安裝-observium" aria-label="Permalink to “下載並安裝 Observium###”">​</a></h3><p>現在我們的系統已經準備好了， 可以開始Observium的安裝了。</p><p>第一步，創建 Observium 將要使用的文件目錄：</p><pre><code>mkdir -p /opt/observium &amp;&amp; cd /opt
</code></pre><p>按本教程的目的，我們將會使用 Observium 的社區/開源版本。使用下面的命令下載並解壓：</p><pre><code>wget http://www.observium.org/observium-community-latest.tar.gz
tar zxvf observium-community-latest.tar.gz
</code></pre><p>現在進入到 Observium 目錄。</p><pre><code>cd observium
</code></pre><p>將默認的配置文件 &#39;<strong>config.php.default</strong>&#39; 複製到 &#39;<strong>config.php</strong>&#39;，並將資料庫配置選項填充到配置文件中：</p><pre><code>cp config.php.default config.php
nano config.php
</code></pre><hr><pre><code>/ Database config
$config[&#39;db_host&#39;] = &#39;localhost&#39;;
$config[&#39;db_user&#39;] = &#39;observiumadmin&#39;;
$config[&#39;db_pass&#39;] = &#39;observiumpassword&#39;;
$config[&#39;db_name&#39;] = &#39;observium&#39;;
</code></pre><p>現在為 MySQL 資料庫設置默認的資料庫模式：</p><pre><code>php includes/update/update.php
</code></pre><p>現在你需要創建一個文件目錄來存儲 rrd 文件，並修改其權限以便讓 apache 能將寫入到文件中。</p><pre><code>mkdir rrd
chown apache:apache rrd
</code></pre><p>為了在出現問題時排錯，你需要創建日誌文件。</p><pre><code>mkdir -p /var/log/observium
chown apache:apache /var/log/observium
</code></pre><p>現在你需要為 Observium 創建虛擬主機配置。</p><pre><code>&lt;VirtualHost *:80&gt;
  DocumentRoot /opt/observium/html/
  ServerName  observium.domain.com
  CustomLog /var/log/observium/access_log combined
  ErrorLog /var/log/observium/error_log
  &lt;Directory &quot;/opt/observium/html/&quot;&gt;
  AllowOverride All
  Options FollowSymLinks MultiViews
  &lt;/Directory&gt;
  &lt;/VirtualHost&gt;
</code></pre><p>下一步你需要讓你的 Apache 服務器的 rewrite (重寫)功能生效。</p><p>為了讓 &#39;mod_rewrite&#39; 生效，輸入以下命令：</p><pre><code>sudo a2enmod rewrite
</code></pre><p>該模組在下一次 Apache 服務重啓之後就會生效。</p><pre><code>sudo service apache2 restart
</code></pre><p>###配置 Observium###</p><p>在登入 Web 界面之前，你需要為 Observium 創建一個管理員賬户（級別10）。</p><pre><code># cd /opt/observium
# ./adduser.php admin adminpassword 10 
User admin added successfully.
</code></pre><p>下一步為發現和探尋任務設置一個 cron 任務，創建一個新的文件 ‘<strong>/etc/cron.d/observium</strong>’ 並在其中添加以下的內容。</p><pre><code>33  */6   * * *   root    /opt/observium/discovery.php -h all &gt;&gt; /dev/null 2&gt;&amp;1
*/5 *      * * *   root    /opt/observium/discovery.php -h new &gt;&gt; /dev/null 2&gt;&amp;1
*/5 *      * * *   root    /opt/observium/poller-wrapper.py 1 &gt;&gt; /dev/null 2&gt;&amp;1
</code></pre><p>重載 cron 進程來增加新的任務。</p><pre><code># /etc/init.d/cron reload
</code></pre><p>好啦，你已經完成了 Observium 服務器的安裝拉！ 使用你的瀏覽器登錄到 <strong>http://&lt;Server IP&gt;</strong>，然後上路吧。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2015/03/Capture.png" alt=""></p><p>盡情享受吧！</p><hr>`,60)),i("p",null,[e[4]||(e[4]=r("via: ",-1)),t(o,{href:"http://www.unixmen.com/monitoring-network-servers-observium/"},{default:p(()=>[...e[3]||(e[3]=[r("http://www.unixmen.com/monitoring-network-servers-observium/",-1)])]),_:1})]),i("p",null,[e[8]||(e[8]=r("作者：",-1)),t(o,{href:"http://www.unixmen.com/author/anis/"},{default:p(()=>[...e[5]||(e[5]=[r("anismaj",-1)])]),_:1}),e[9]||(e[9]=r(" 譯者：",-1)),t(o,{href:"http://github.com/theo-l"},{default:p(()=>[...e[6]||(e[6]=[r("theo-l",-1)])]),_:1}),e[10]||(e[10]=r(" 校對：",-1)),t(o,{href:"http://github.com/wxy"},{default:p(()=>[...e[7]||(e[7]=[r("wxy",-1)])]),_:1})]),i("p",null,[e[13]||(e[13]=r("本文由 ",-1)),t(o,{href:"http://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[11]||(e[11]=[r("LCTT",-1)])]),_:1}),e[14]||(e[14]=r(" 原創翻譯，",-1)),t(o,{href:"http://linux.cn/"},{default:p(()=>[...e[12]||(e[12]=[r("Linux中國",-1)])]),_:1}),e[15]||(e[15]=r(" 榮譽推出",-1))])])}const T=s(u,[["render",d]]);export{O as __pageData,T as default};
