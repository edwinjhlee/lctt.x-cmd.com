import{_ as r,a0 as d,w as l,s as a,I as e,x as n,a1 as o,A as i,ao as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"Linux有問必答：如何在CentOS上安裝phpMyAdmin | LCTT x X-CMD","titleTemplate":false,"description":"Linux有問必答：如何在CentOS上安裝phpMyAdmin | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux有問必答：如何在CentOS上安裝phpMyAdmin | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux有問必答：如何在CentOS上安裝phpMyAdmin | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141118 Linux FAQs with Answers--How to install phpMyAdmin on CentOS","title":"Linux有問必答：如何在CentOS上安裝phpMyAdmin","tag":"201412","desc":""},"relativePath":"201412/20141118 Linux FAQs with Answers--How to install phpMyAdmin on CentOS.md","filePath":"[post].md"}'),m={name:"201412/20141118 Linux FAQs with Answers--How to install phpMyAdmin on CentOS.md"};function h(u,t,y,A,f,M){const p=d("Link");return l(),a("div",null,[t[24]||(t[24]=e("h1",{id:"linux有問必答-如何在centos上安裝phpmyadmin",tabindex:"-1"},[n("Linux有問必答：如何在CentOS上安裝phpMyAdmin "),e("a",{class:"header-anchor",href:"#linux有問必答-如何在centos上安裝phpmyadmin","aria-label":"Permalink to “Linux有問必答：如何在CentOS上安裝phpMyAdmin”"},"​")],-1)),t[25]||(t[25]=e("blockquote",null,[e("p",null,[e("strong",null,"問題"),n(":我正在CentOS上運行一個MySQL/MariaDB服務，並且我想要通過網絡接口來用phpMyAdmin來管理資料庫。在CentOS上安裝phpMyAdmin的最佳方法是什麼？")])],-1)),e("p",null,[t[1]||(t[1]=n("phpMyAdmin是一款以PHP為基礎，基於Web的MySQL/MariaDB資料庫管理工具。雖然已經存在着一些諸如",-1)),o(p,{href:"http://xmodulo.com/set-web-based-database-management-system-adminer.html"},{default:i(()=>[...t[0]||(t[0]=[n("Adminer",-1)])]),_:1}),t[2]||(t[2]=n("的輕量級資料庫管理工具, 但是phpMyAdmin還是更加廣泛應用於網站管理員之中來進行各種MySQL/MariaDB的管理任務。它支持幾乎所有MySQL資料庫／表的相關操作，比如瀏覽、創建、複製、刪除、重命名、更改，還有MySQL用户/權限管理和資料庫導入/導出。以下就是",-1)),t[3]||(t[3]=e("strong",null,"如何在CentOS 6或7上安裝phpMyAdmin",-1)),t[4]||(t[4]=n("。",-1))]),t[26]||(t[26]=e("h3",{id:"前提",tabindex:"-1"},[n("前提 "),e("a",{class:"header-anchor",href:"#前提","aria-label":"Permalink to “前提”"},"​")],-1)),e("p",null,[t[7]||(t[7]=n("在CentOS上安裝phpMyAdmin，你第一步需要架設一台Web服務器(如Apache或nginx)，安裝好MySQL/MariaDB資料庫和PHP。根據你的偏好和需求，你可以從",-1)),o(p,{href:"http://linux.cn/article-1567-1.html"},{default:i(()=>[...t[5]||(t[5]=[n("LAMP",-1)])]),_:1}),t[8]||(t[8]=n("和",-1)),o(p,{href:"http://linux.cn/article-4314-1.html"},{default:i(()=>[...t[6]||(t[6]=[n("LEMP",-1)])]),_:1}),t[9]||(t[9]=n("中選擇一種安裝。",-1))]),e("p",null,[t[11]||(t[11]=n("另一個要求是允許在你的CentOS上安裝EPEL庫。如果你還沒設置過請",-1)),o(p,{href:"http://linux.cn/article-2324-1.html"},{default:i(()=>[...t[10]||(t[10]=[n("猛戳這裏",-1)])]),_:1}),t[12]||(t[12]=n("。",-1))]),t[27]||(t[27]=s(`<h3 id="在centos6或7上安裝phpmyadmin" tabindex="-1">在CentOS6或7上安裝phpMyAdmin <a class="header-anchor" href="#在centos6或7上安裝phpmyadmin" aria-label="Permalink to “在CentOS6或7上安裝phpMyAdmin”">​</a></h3><p>一旦你設置了EPEL庫，你就能輕鬆地用以下命令安裝phpMyAdmin了。</p><p>在CentOS 7上:</p><pre><code>$ sudo yum install phpmyadmin 
</code></pre><p>在CentOS 7上:</p><pre><code>$ sudo yum install phpmyadmin php-mcrypt 
</code></pre><h3 id="在centos-7上配置phpmyadmin" tabindex="-1">在CentOS 7上配置phpMyAdmin <a class="header-anchor" href="#在centos-7上配置phpmyadmin" aria-label="Permalink to “在CentOS 7上配置phpMyAdmin”">​</a></h3><p>默認情況下，CentOS 7上的phpMyAdmin只允許從迴環地址(127.0.0.1)訪問。為了能遠程連接，你需要改動它的配置。</p><p>用文本編輯器打開phpMyAdmin的配置文件(路徑：/etc/httpd/conf.d/phpMyAdmin.conf)，找出並註釋掉帶有&quot;Require ip XXXX&quot;字樣的代碼行。會有四處這樣的代碼行，用&quot;Require all granted&quot;取而代之。重新改動過的配置文件如下所示。</p><pre><code>$ sudo vi /etc/httpd/conf.d/phpMyAdmin.conf 
</code></pre><hr><pre><code>. . . . .
&lt;Directory /usr/share/phpMyAdmin/&gt;
   AddDefaultCharset UTF-8
 
   &lt;IfModule mod_authz_core.c&gt;
     # Apache 2.4
     &lt;RequireAny&gt;
       #Require ip 127.0.0.1
       #Require ip ::1
       Require all granted
     &lt;/RequireAny&gt;
   &lt;/IfModule&gt;
   &lt;IfModule !mod_authz_core.c&gt;
     # Apache 2.2
     Order Deny,Allow
     Deny from All
     Allow from 127.0.0.1
     Allow from ::1
   &lt;/IfModule&gt;
&lt;/Directory&gt;
 
&lt;Directory /usr/share/phpMyAdmin/setup/&gt;
   &lt;IfModule mod_authz_core.c&gt;
     # Apache 2.4
     &lt;RequireAny&gt;
       #Require ip 127.0.0.1
       #Require ip ::1
       Require all granted
     &lt;/RequireAny&gt;
   &lt;/IfModule&gt;
   &lt;IfModule !mod_authz_core.c&gt;
     # Apache 2.2
     Order Deny,Allow
     Deny from All
     Allow from 127.0.0.1
     Allow from ::1
   &lt;/IfModule&gt;
&lt;/Directory&gt;
. . . . .
</code></pre><p>最後，重啓httpd使改動生效。</p><pre><code>$ sudo systemctl restart httpd 
</code></pre><h3 id="在centos-6上配置phpmyadmin" tabindex="-1">在CentOS 6上配置phpMyAdmin <a class="header-anchor" href="#在centos-6上配置phpmyadmin" aria-label="Permalink to “在CentOS 6上配置phpMyAdmin”">​</a></h3><p>默認情況下，CentOS 6上的phpMyAdmin是禁止從每個IP地址訪問的。為了能遠程連接，你需要改動它的配置。</p><p>用文本編輯器打開phpMyAdmin的配置文件(路徑：/etc/httpd/conf.d/phpMyAdmin.conf)，找出並註釋掉&quot;Deny from all&quot;字樣的代碼行。然後把&quot;Allow from 127.0.0.1&quot;字樣的代碼行改成&quot;Allow from 0.0.0.0&quot;。重新改動過的配置文件如下所示。</p><pre><code>$ sudo vi /etc/httpd/conf.d/phpmyadmin.conf 
</code></pre><hr><pre><code>&lt;Directory &quot;/usr/share/phpmyadmin&quot;&gt;
  Order Deny,Allow
#  Deny from all
  Allow from 0.0.0.0
&lt;/Directory&gt;
</code></pre><p>下一步是將phpMyAdmin的配置文件用blowfish加密工具加密。這一步需要加密cookie裏的密碼來作為基於cookie的部分認證。</p><p>用文本編輯器打開如下路徑所示的文件並且用blowfish設置一個隨機密碼，如下所示。</p><pre><code>$ sudo vi /usr/share/phpmyadmin/config.inc.php 
</code></pre><hr><pre><code>$cfg[&#39;blowfish_secret&#39;] = &#39;kd5G}d33aXDc50!&#39;; /* YOU MUST FILL IN THIS FOR COOKIE AUTH! */
</code></pre><p>最後，重啓httpd使改動生效。</p><pre><code>$ sudo service httpd restart 
</code></pre><h3 id="測試phpmyadmin" tabindex="-1">測試phpMyAdmin <a class="header-anchor" href="#測試phpmyadmin" aria-label="Permalink to “測試phpMyAdmin”">​</a></h3><p>測試phpMyAdmin是否設置成功，訪問這個頁面：http://&lt;web-server-ip-addresss&gt;/phpmyadmin</p><p><img src="https://farm6.staticflickr.com/5606/15550758749_0f7ab66b5b_z.jpg" alt=""></p><p>你應該能通過Web界面來記錄下任何MySQL用户(比如root)和管理MySQL/MariaDB的資料庫/表。</p><p><img src="https://farm8.staticflickr.com/7505/15551187008_86ac7e7db1_z.jpg" alt=""></p><h3 id="疑難解答" tabindex="-1">疑難解答 <a class="header-anchor" href="#疑難解答" aria-label="Permalink to “疑難解答”">​</a></h3><p>這裏有一些在CentOS上安裝phpMyAdmin的過程中遇到的一些問題解決方法。</p><ol><li><p>當你在瀏覽器裏嘗試連接phpMyAdmin頁面的時候，你看到&quot;403 Forbidding&quot;錯誤：</p><p>You don&#39;t have permission to access /phpMyAdmin on this server.</p></li></ol><p>發生這種錯誤是因為phpMyAdmin默認阻止了IP地址遠程連接。要修復這種錯誤，你需要編輯它的配置文件來允許遠程連接。具體操作見上。</p><ol start="2"><li>當你連接phpMyAdmin頁面時，你看見&quot;The configuration file now needs a secret passphrase (blowfish_secret).&quot;信息，並且你無法登錄。</li></ol><p>要修復這種錯誤，你需要編輯 /usr/share/phpmyadmin/config.inc.php 這個文件來添加一個隨機的blowfish密碼，然後重啓httpd，如下所示。</p><pre><code>$cfg[&#39;blowfish_secret&#39;] = &#39;kd5G}d33aXDc50!&#39;; /* YOU MUST FILL IN THIS FOR COOKIE AUTH! */
</code></pre><hr><pre><code>$ sudo service httpd restart (CentOS 6)
$ sudo systemctl restart httpd (CentOS 7) 
</code></pre><ol start="3"><li>當你連接phpMyAdmin頁面時，你看見&quot;Cannot load mcrypt extension. Please check your PHP configuration&quot;錯誤信息。</li></ol><p>要修復這種錯誤，要安裝下面這個包：</p><pre><code>$ sudo yum install php-mcrypt 
</code></pre><p>然後重啓httpd：</p><pre><code>$ sudo service httpd restart (CentOS 6)
$ sudo systemctl restart httpd (CentOS 7) 
</code></pre><hr>`,47)),e("p",null,[t[14]||(t[14]=n("via: ",-1)),o(p,{href:"http://ask.xmodulo.com/install-phpmyadmin-centos.html"},{default:i(()=>[...t[13]||(t[13]=[n("http://ask.xmodulo.com/install-phpmyadmin-centos.html",-1)])]),_:1})]),e("p",null,[t[17]||(t[17]=n("譯者：",-1)),o(p,{href:"https://github.com/ZTinoZ"},{default:i(()=>[...t[15]||(t[15]=[n("ZTinoZ",-1)])]),_:1}),t[18]||(t[18]=n(" 校對：",-1)),o(p,{href:"https://github.com/wxy"},{default:i(()=>[...t[16]||(t[16]=[n("wxy",-1)])]),_:1})]),e("p",null,[t[21]||(t[21]=n("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...t[19]||(t[19]=[n("LCTT",-1)])]),_:1}),t[22]||(t[22]=n(" 原創翻譯，",-1)),o(p,{href:"http://linux.cn/"},{default:i(()=>[...t[20]||(t[20]=[n("Linux中國",-1)])]),_:1}),t[23]||(t[23]=n(" 榮譽推出",-1))])])}const g=r(m,[["render",h]]);export{S as __pageData,g as default};
