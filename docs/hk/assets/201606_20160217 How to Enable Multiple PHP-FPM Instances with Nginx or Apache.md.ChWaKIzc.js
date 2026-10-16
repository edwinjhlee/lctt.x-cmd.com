import{_ as l,a0 as a,w as s,s as r,ao as P,I as o,x as n,a1 as t,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"如何啓用 Nginx/Apache 的 PHP-FPM 多實例 | LCTT x X-CMD","titleTemplate":false,"description":"如何啓用 Nginx/Apache 的 PHP-FPM 多實例 | LCTT (201606) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何啓用 Nginx/Apache 的 PHP-FPM 多實例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何啓用 Nginx/Apache 的 PHP-FPM 多實例 | LCTT (201606) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201606/20160217 How to Enable Multiple PHP-FPM Instances with Nginx or Apache","title":"如何啓用 Nginx/Apache 的 PHP-FPM 多實例","tag":"201606","desc":""},"relativePath":"201606/20160217 How to Enable Multiple PHP-FPM Instances with Nginx or Apache.md","filePath":"[post].md"}'),h={name:"201606/20160217 How to Enable Multiple PHP-FPM Instances with Nginx or Apache.md"};function g(x,e,m,d,c,u){const p=a("Link");return s(),r("div",null,[e[13]||(e[13]=P(`<h1 id="如何啓用-nginx-apache-的-php-fpm-多實例" tabindex="-1">如何啓用 Nginx/Apache 的 PHP-FPM 多實例 <a class="header-anchor" href="#如何啓用-nginx-apache-的-php-fpm-多實例" aria-label="Permalink to “如何啓用 Nginx/Apache 的 PHP-FPM 多實例”">​</a></h1><p>PHP-FPM 作為 FastCGI 進程管理器而廣為熟知，它是 PHP FastCGI 實現的改進，帶有更為有用的功能，用於處理高負載的服務器和網站。下面列出其中一些功能：</p><h3 id="新功能" tabindex="-1">新功能 <a class="header-anchor" href="#新功能" aria-label="Permalink to “新功能”">​</a></h3><ul><li>擁有具有優雅（graceful）啓動/停止選項的高級進程管理能力。</li><li>可以通過不同的用户身份/組身份來以監聽多個端口以及使用多個PHP配置。</li><li>錯誤日誌記錄。</li><li>支持上傳加速。</li><li>特別用於在處理一些耗時任務時結束請求和清空所有數據的功能。</li><li>同時支持動態和靜態的子進程重生。</li><li>支持IP地址限制。</li></ul><p>在本文中，我將要討論的是，在運行 CPanel 11.52 及 EA3 （EasyApache）的 CentOS 7 服務器上，於 Nginx 和 Apache 之上安裝 PHP-FPM，以及如何來通過 CPanel 管理這些安裝好的多個 PHP-FPM 實例。</p><p>在我們開始安裝前， 先看看安裝的先決條件。</p><h3 id="先決條件" tabindex="-1">先決條件 <a class="header-anchor" href="#先決條件" aria-label="Permalink to “先決條件”">​</a></h3><ol><li>啓用 Mod_proxy_fcgi 模組</li><li>啓用 MPM_Event</li></ol><p>由於我們要將 PHP-FPM 安裝到一台 EA3 服務器，我們需要運行 EasyApache 來編譯 Apache 以啓用這些模組。</p><p>你們可以參考我以前寫的，關於如何在 Apache 服務器上安裝 Nginx 作為反向代理的文檔來了解 Nginx 的安裝。</p><p>這裏，我將再次簡述那些安裝步驟。具體細節，你可以參考我之前寫的<strong>（如何在 CentOS 7/CPanel 服務器上配置 Nginx 反向代理）</strong>一文。</p><ul><li>步驟 1：安裝 Epel 倉庫</li><li>步驟 2：安裝 nDeploy RPM 倉庫，這是此次安裝中最為<strong>重要</strong>的步驟。</li><li>步驟 3：使用 yum 從 nDeploy 倉庫安裝 nDeploy 和 Nginx 插件。</li><li>步驟 4：啓用/配置 Nginx 為反向代理。</li></ul><p>完成這些步驟後，下面為服務器中所有可用 PHP 版本安裝 PHP-FPM 包，EA3 使用 remi 倉庫來安裝這些包。你可以運行這個 nDeploy 腳本來下載所有的包。</p><pre><code>root@server1 [~]# /opt/nDeploy/scripts/easy_php_setup.sh
Loaded plugins: fastestmirror, tsflags, universal-hooks
EA4 | 2.9 kB 00:00:00
base | 3.6 kB 00:00:00
epel/x86_64/metalink | 9.7 kB 00:00:00
epel | 4.3 kB 00:00:00
extras | 3.4 kB 00:00:00
updates | 3.4 kB 00:00:00
(1/2): epel/x86_64/updateinfo | 460 kB 00:00:00
(2/2): epel/x86_64/primary_db
</code></pre><p>運行該腳本將為 PHP 54，PHP 55，PHP 56 和 PHP 70 安裝所有這些 FPM 包。</p><pre><code>Installed Packages
php54-php-fpm.x86_64 5.4.45-3.el7.remi @remi
php55-php-fpm.x86_64 5.5.31-1.el7.remi @remi
php56-php-fpm.x86_64 5.6.17-1.el7.remi @remi
php70-php-fpm.x86_64 7.0.2-1.el7.remi @remi
</code></pre><p>在以上安裝完成後，你需要為 Apache 啓用 PHP-FPM SAPI。你可以運行下面這個腳本來啓用 PHP-FPM 實例。</p><pre><code>root@server1 [~]# /opt/nDeploy/scripts/apache_php-fpm_setup.sh enable
mod_proxy_fcgi.c
Please choose one default PHP version from the list below
PHP70
PHP56
PHP54
PHP55
Provide the exact desired version string here and press ENTER: PHP54
ConfGen:: lxblogger
ConfGen:: blogr
ConfGen:: saheetha
ConfGen:: satest
which: no cagefsctl in (/usr/local/jdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/bin:/usr/X11R6/bin:/root/bin)
info [rebuildhttpdconf] Missing owner for domain server1.centos7-test.com, force lookup to root
Built /usr/local/apache/conf/httpd.conf OK
Waiting for “httpd” to restart gracefully …waiting for “httpd” to initialize ……
…finished.
</code></pre><p>它會問你需要運行哪個 PHP 版本作為服務器默認版本，你可以輸入那些細節內容，然後繼續配置併為現存的域名生成虛擬主機文件。</p><p>我選擇了 PHP 54 作為我服務器上的默認 PHP-FPM 版本。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/confirm-php-fpm-1024x525.png" alt="confirm-php-fpm"></p><p>雖然服務器配置了 PHP-FPM 54，但是我們可以通過 CPanel 為各個獨立的域名修改 PHP-FPM 實例。</p><p>下面我將通過一些截圖來為你們説明一下，怎樣通過 CPanel 為各個獨立域修改 PHP-FPM 實例。</p><p>安裝了 Nginx 插件後，你的域名的 CPanel 就會有一個 Nginx Webstack 圖標，你可以點擊該圖標來配置你的 Web 服務器。我已經登錄進了我其中的一個 CPanel 來配置相應的 Web 服務器。</p><p>請看這些截圖。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/nginx-webstack.png" alt="nginx webstack"></p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/nginxicon1-1024x253.png" alt="nginxicon1"></p><p>現在，你可以根據需要為選中的主域配置 web 服務器（這裏，我已經選擇了主域 saheetha.com）。我已經繼續通過自動化配置選項來進行了，因為我不需要添加任何手動設置。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/nginx_auto_proxy-1024x408.png" alt="nginx_auto_proxy"></p><p>當 Nginx 配置完後，你可以在這裏為你的域名選擇 PHP-FPM 實例。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/php-fpm1-1024x408.png" alt="php-fpm1"></p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/php54-1024x169.png" alt="php54"></p><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/php55.png" alt="php55"></p><p>就像你在截圖中所看到的，我服務器上的默認 PHP-FPM 是<strong>PHP 54</strong>，而我正要將我的域名的 PHP-FPM 實例單獨修改成 <strong>PHP 55</strong>。當你為你的域修改 PHP-FPM 後，你可以通過訪問 <strong>phpinfo</strong> 頁面來確認。</p><p>謝謝你們參考本文，我相信這篇文章會給你提供不少信息和幫助。我會為你們推薦關於這個內容的有價值的評論 😃。</p><hr>`,36)),o("p",null,[e[1]||(e[1]=n("via: ",-1)),t(p,{href:"http://linoxide.com/linux-how-to/enable-multiple-php-fpm-instances-nginx-apache/"},{default:i(()=>[...e[0]||(e[0]=[n("http://linoxide.com/linux-how-to/enable-multiple-php-fpm-instances-nginx-apache/",-1)])]),_:1})]),o("p",null,[e[5]||(e[5]=n("作者：",-1)),t(p,{href:"http://linoxide.com/author/saheethas/"},{default:i(()=>[...e[2]||(e[2]=[n("Saheetha Shameer",-1)])]),_:1}),e[6]||(e[6]=n(" 譯者：",-1)),t(p,{href:"https://github.com/GOLinux"},{default:i(()=>[...e[3]||(e[3]=[n("GOLinux",-1)])]),_:1}),e[7]||(e[7]=n(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...e[4]||(e[4]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...e[9]||(e[9]=[n("Linux中國",-1)])]),_:1}),e[12]||(e[12]=n(" 榮譽推出",-1))])])}const M=l(h,[["render",g]]);export{b as __pageData,M as default};
