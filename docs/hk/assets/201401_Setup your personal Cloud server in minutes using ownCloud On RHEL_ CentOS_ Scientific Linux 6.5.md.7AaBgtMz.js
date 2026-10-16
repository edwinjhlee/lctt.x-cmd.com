import{_ as d,a0 as i,w as u,s,I as e,x as o,a1 as r,A as l,ao as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"使用ownCloud在Linux安裝你的個人雲服務 | LCTT x X-CMD","titleTemplate":false,"description":"使用ownCloud在Linux安裝你的個人雲服務 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用ownCloud在Linux安裝你的個人雲服務 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用ownCloud在Linux安裝你的個人雲服務 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/Setup your personal Cloud server in minutes using ownCloud On RHEL, CentOS, Scientific Linux 6.5","title":"使用ownCloud在Linux安裝你的個人雲服務","tag":"201401","desc":""},"relativePath":"201401/Setup your personal Cloud server in minutes using ownCloud On RHEL, CentOS, Scientific Linux 6.5.md","filePath":"[post].md"}'),a={name:"201401/Setup your personal Cloud server in minutes using ownCloud On RHEL, CentOS, Scientific Linux 6.5.md"};function w(m,n,C,f,g,h){const t=i("Link");return u(),s("div",null,[n[19]||(n[19]=e("h1",{id:"使用owncloud在linux安裝你的個人雲服務",tabindex:"-1"},[o("使用ownCloud在Linux安裝你的個人雲服務 "),e("a",{class:"header-anchor",href:"#使用owncloud在linux安裝你的個人雲服務","aria-label":"Permalink to “使用ownCloud在Linux安裝你的個人雲服務”"},"​")],-1)),e("p",null,[r(t,{href:"https://owncloud.org/"},{default:l(()=>[...n[0]||(n[0]=[o("ownCloud",-1)])]),_:1}),n[1]||(n[1]=o("是一個免費開源的軟件，用於為分享文件，日曆，聯繫人，書籤和個人音頻/視頻。非常容易安裝和管理。",-1))]),n[20]||(n[20]=e("h3",{id:"前提",tabindex:"-1"},[o("前提 "),e("a",{class:"header-anchor",href:"#前提","aria-label":"Permalink to “前提”"},"​")],-1)),n[21]||(n[21]=e("p",null,"在這篇教程裏我使用CentOS 6.5 minimal server來安裝ownCloud。下面是我測試機的資料。",-1)),n[22]||(n[22]=e("pre",null,[e("code",null,`Operating system: CentOS 6.5 Minimal Installation
IP Address: 192.168.1.101/24
`)],-1)),n[23]||(n[23]=e("p",null,"在CentOS 6.5上測試了一段時間，ownCloud適用於所有基於RPM的發行版。",-1)),n[24]||(n[24]=e("p",null,"你的服務應該工作在LAMP上。參考下面鏈接去安裝LAMP服務。",-1)),e("ul",null,[e("li",null,[r(t,{href:"http://www.unixmen.com/install-lamp-apache-with-mariadb-and-php-on-centosrhelscientific-linux-6/"},{default:l(()=>[...n[2]||(n[2]=[o("在RHEL/Scientific Linux上安裝LAMP服務",-1)])]),_:1})])]),n[25]||(n[25]=p(`<p>安裝一下必要的PHP擴展：</p><pre><code># yum install php-mysql php-json php-xml php-mbstring php-zip php-gd curl php-curl php-pdo
</code></pre><h3 id="為owncloud設置資料庫" tabindex="-1">為ownCloud設置資料庫 <a class="header-anchor" href="#為owncloud設置資料庫" aria-label="Permalink to “為ownCloud設置資料庫”">​</a></h3><p>讓我們來創建一個名為&#39;ownclouddb&#39;和資料庫用户&#39;ownclouduser&#39;以及密碼是&#39;centos&#39;的資料庫。</p><pre><code># mysql -u root -p
Enter password: 
Welcome to the MariaDB monitor.  Commands end with ; or \\g.
Your MariaDB connection id is 66
Server version: 5.5.34-MariaDB MariaDB Server

Copyright (c) 2000, 2013, Oracle, Monty Program Ab and others.

Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.

MariaDB [(none)]&gt; CREATE DATABASE ownclouddb;
Query OK, 1 row affected (0.04 sec)

MariaDB [(none)]&gt; GRANT ALL ON ownclouddb.* TO ownclouduser@localhost IDENTIFIED BY &#39;centos&#39;;
Query OK, 0 rows affected (0.01 sec)

MariaDB [(none)]&gt; flush privileges;
Query OK, 0 rows affected (0.01 sec)

MariaDB [(none)]&gt; exit
Bye
</code></pre><h3 id="獲取owncloud" tabindex="-1">獲取ownCloud <a class="header-anchor" href="#獲取owncloud" aria-label="Permalink to “獲取ownCloud”">​</a></h3><p>切換到你的apache root目錄並下載ownCloud最新版</p><p>轉到Apache root文件目錄並下載最新版ownCloud。</p><pre><code># wget http://download.owncloud.org/community/owncloud-6.0.0a.tar.bz2
</code></pre><p>用命令解壓tar壓縮包：</p><pre><code># tar xvf owncloud-6.0.0a.tar.bz2
</code></pre><p>移動解壓後的目錄到你的apache root目錄 (例如 /var/www/html/)</p><pre><code># mv owncloud/ /var/www/html/
</code></pre><p>設置一下目錄的所有權和權限：</p><pre><code># chown -R apache:apache /var/www/html/owncloud/
# chmod 777 /var/www/html/owncloud/config/
</code></pre><p>啓用apache重寫模式。</p><p>編輯文件 “<strong>/etc/httpd/conf/httpd.conf</strong>”，</p><pre><code># vi /etc/httpd/conf/httpd.conf
</code></pre><p>查找並修改 <strong>AllowOverride None</strong> 為 <strong>Allowoverride All</strong>.</p><pre><code>[...]
     AllowOverride All
[...]
</code></pre><p>最後，重啓apachehttpd和mysql服務。</p><pre><code># service mysql restart
# service httpd restart
</code></pre><h3 id="開始安裝owncloud" tabindex="-1">開始安裝ownCloud <a class="header-anchor" href="#開始安裝owncloud" aria-label="Permalink to “開始安裝ownCloud”">​</a></h3>`,23)),e("p",null,[n[5]||(n[5]=o("通過你的網頁瀏覽器導航到 ",-1)),e("strong",null,[r(t,{href:"http://ip-address/owncloud"},{default:l(()=>[...n[3]||(n[3]=[o("http://ip-address/owncloud",-1)])]),_:1})]),n[6]||(n[6]=o(" 或 ",-1)),e("strong",null,[r(t,{href:"http://domain-name/owncloud"},{default:l(()=>[...n[4]||(n[4]=[o("http://domain-name/owncloud",-1)])]),_:1})]),n[7]||(n[7]=o(" 。",-1))]),n[26]||(n[26]=p('<p><strong>注意</strong>：如果遇到任何權限錯誤，禁用SELinux並再試一次。</p><p>自己的雲的主頁將出現。你將被要求創建一個新的管理員賬户。輸入管理員賬户信息。</p><p>然後點擊 <strong>Advanced</strong> 下拉按鈕，選擇mysql並輸入mysql資料庫名，資料庫用户和密碼。最後點擊 <strong>Finish setup</strong> 來完成安裝。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/03/ownCloud-Mozilla-Firefox_001.jpg" alt=""></p><p>這是我的ownCloud界面的樣子：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/03/Files-ownCloud-Mozilla-Firefox_002.jpg" alt=""></p><p>就是這樣。我們的雲服務已經準備好了。現在，你可以從你任何網絡的客户端來上傳/下載你的圖片，文件，音頻，視頻以及訪問它們。</p><hr>',8)),e("p",null,[n[9]||(n[9]=o("via: ",-1)),r(t,{href:"http://www.unixmen.com/setup-your-personal-cloud-server-in-minutes-using-owncloud/"},{default:l(()=>[...n[8]||(n[8]=[o("http://www.unixmen.com/setup-your-personal-cloud-server-in-minutes-using-owncloud/",-1)])]),_:1})]),e("p",null,[n[12]||(n[12]=o("譯者：",-1)),r(t,{href:"https://github.com/vito-L"},{default:l(()=>[...n[10]||(n[10]=[o("Vito",-1)])]),_:1}),n[13]||(n[13]=o(" 校對：",-1)),r(t,{href:"https://github.com/wxy"},{default:l(()=>[...n[11]||(n[11]=[o("wxy",-1)])]),_:1})]),e("p",null,[n[16]||(n[16]=o("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[14]||(n[14]=[o("LCTT",-1)])]),_:1}),n[17]||(n[17]=o(" 原創翻譯，",-1)),r(t,{href:"http://linux.cn/"},{default:l(()=>[...n[15]||(n[15]=[o("Linux中國",-1)])]),_:1}),n[18]||(n[18]=o(" 榮譽推出",-1))])])}const L=d(a,[["render",w]]);export{T as __pageData,L as default};
