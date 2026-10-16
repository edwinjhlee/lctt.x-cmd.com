import{_ as r,a0 as d,w as l,s as a,I as e,x as n,a1 as o,A as i,ao as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"Linux有问必答：如何在CentOS上安装phpMyAdmin | LCTT x X-CMD","titleTemplate":false,"description":"Linux有问必答：如何在CentOS上安装phpMyAdmin | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux有问必答：如何在CentOS上安装phpMyAdmin | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux有问必答：如何在CentOS上安装phpMyAdmin | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141118 Linux FAQs with Answers--How to install phpMyAdmin on CentOS","title":"Linux有问必答：如何在CentOS上安装phpMyAdmin","tag":"201412","desc":""},"relativePath":"201412/20141118 Linux FAQs with Answers--How to install phpMyAdmin on CentOS.md","filePath":"[post].md"}'),m={name:"201412/20141118 Linux FAQs with Answers--How to install phpMyAdmin on CentOS.md"};function h(u,t,y,A,f,M){const p=d("Link");return l(),a("div",null,[t[24]||(t[24]=e("h1",{id:"linux有问必答-如何在centos上安装phpmyadmin",tabindex:"-1"},[n("Linux有问必答：如何在CentOS上安装phpMyAdmin "),e("a",{class:"header-anchor",href:"#linux有问必答-如何在centos上安装phpmyadmin","aria-label":"Permalink to “Linux有问必答：如何在CentOS上安装phpMyAdmin”"},"​")],-1)),t[25]||(t[25]=e("blockquote",null,[e("p",null,[e("strong",null,"问题"),n(":我正在CentOS上运行一个MySQL/MariaDB服务，并且我想要通过网络接口来用phpMyAdmin来管理数据库。在CentOS上安装phpMyAdmin的最佳方法是什么？")])],-1)),e("p",null,[t[1]||(t[1]=n("phpMyAdmin是一款以PHP为基础，基于Web的MySQL/MariaDB数据库管理工具。虽然已经存在着一些诸如",-1)),o(p,{href:"http://xmodulo.com/set-web-based-database-management-system-adminer.html"},{default:i(()=>[...t[0]||(t[0]=[n("Adminer",-1)])]),_:1}),t[2]||(t[2]=n("的轻量级数据库管理工具, 但是phpMyAdmin还是更加广泛应用于网站管理员之中来进行各种MySQL/MariaDB的管理任务。它支持几乎所有MySQL数据库／表的相关操作，比如浏览、创建、复制、删除、重命名、更改，还有MySQL用户/权限管理和数据库导入/导出。以下就是",-1)),t[3]||(t[3]=e("strong",null,"如何在CentOS 6或7上安装phpMyAdmin",-1)),t[4]||(t[4]=n("。",-1))]),t[26]||(t[26]=e("h3",{id:"前提",tabindex:"-1"},[n("前提 "),e("a",{class:"header-anchor",href:"#前提","aria-label":"Permalink to “前提”"},"​")],-1)),e("p",null,[t[7]||(t[7]=n("在CentOS上安装phpMyAdmin，你第一步需要架设一台Web服务器(如Apache或nginx)，安装好MySQL/MariaDB数据库和PHP。根据你的偏好和需求，你可以从",-1)),o(p,{href:"http://linux.cn/article-1567-1.html"},{default:i(()=>[...t[5]||(t[5]=[n("LAMP",-1)])]),_:1}),t[8]||(t[8]=n("和",-1)),o(p,{href:"http://linux.cn/article-4314-1.html"},{default:i(()=>[...t[6]||(t[6]=[n("LEMP",-1)])]),_:1}),t[9]||(t[9]=n("中选择一种安装。",-1))]),e("p",null,[t[11]||(t[11]=n("另一个要求是允许在你的CentOS上安装EPEL库。如果你还没设置过请",-1)),o(p,{href:"http://linux.cn/article-2324-1.html"},{default:i(()=>[...t[10]||(t[10]=[n("猛戳这里",-1)])]),_:1}),t[12]||(t[12]=n("。",-1))]),t[27]||(t[27]=s(`<h3 id="在centos6或7上安装phpmyadmin" tabindex="-1">在CentOS6或7上安装phpMyAdmin <a class="header-anchor" href="#在centos6或7上安装phpmyadmin" aria-label="Permalink to “在CentOS6或7上安装phpMyAdmin”">​</a></h3><p>一旦你设置了EPEL库，你就能轻松地用以下命令安装phpMyAdmin了。</p><p>在CentOS 7上:</p><pre><code>$ sudo yum install phpmyadmin 
</code></pre><p>在CentOS 7上:</p><pre><code>$ sudo yum install phpmyadmin php-mcrypt 
</code></pre><h3 id="在centos-7上配置phpmyadmin" tabindex="-1">在CentOS 7上配置phpMyAdmin <a class="header-anchor" href="#在centos-7上配置phpmyadmin" aria-label="Permalink to “在CentOS 7上配置phpMyAdmin”">​</a></h3><p>默认情况下，CentOS 7上的phpMyAdmin只允许从回环地址(127.0.0.1)访问。为了能远程连接，你需要改动它的配置。</p><p>用文本编辑器打开phpMyAdmin的配置文件(路径：/etc/httpd/conf.d/phpMyAdmin.conf)，找出并注释掉带有&quot;Require ip XXXX&quot;字样的代码行。会有四处这样的代码行，用&quot;Require all granted&quot;取而代之。重新改动过的配置文件如下所示。</p><pre><code>$ sudo vi /etc/httpd/conf.d/phpMyAdmin.conf 
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
</code></pre><p>最后，重启httpd使改动生效。</p><pre><code>$ sudo systemctl restart httpd 
</code></pre><h3 id="在centos-6上配置phpmyadmin" tabindex="-1">在CentOS 6上配置phpMyAdmin <a class="header-anchor" href="#在centos-6上配置phpmyadmin" aria-label="Permalink to “在CentOS 6上配置phpMyAdmin”">​</a></h3><p>默认情况下，CentOS 6上的phpMyAdmin是禁止从每个IP地址访问的。为了能远程连接，你需要改动它的配置。</p><p>用文本编辑器打开phpMyAdmin的配置文件(路径：/etc/httpd/conf.d/phpMyAdmin.conf)，找出并注释掉&quot;Deny from all&quot;字样的代码行。然后把&quot;Allow from 127.0.0.1&quot;字样的代码行改成&quot;Allow from 0.0.0.0&quot;。重新改动过的配置文件如下所示。</p><pre><code>$ sudo vi /etc/httpd/conf.d/phpmyadmin.conf 
</code></pre><hr><pre><code>&lt;Directory &quot;/usr/share/phpmyadmin&quot;&gt;
  Order Deny,Allow
#  Deny from all
  Allow from 0.0.0.0
&lt;/Directory&gt;
</code></pre><p>下一步是将phpMyAdmin的配置文件用blowfish加密工具加密。这一步需要加密cookie里的密码来作为基于cookie的部分认证。</p><p>用文本编辑器打开如下路径所示的文件并且用blowfish设置一个随机密码，如下所示。</p><pre><code>$ sudo vi /usr/share/phpmyadmin/config.inc.php 
</code></pre><hr><pre><code>$cfg[&#39;blowfish_secret&#39;] = &#39;kd5G}d33aXDc50!&#39;; /* YOU MUST FILL IN THIS FOR COOKIE AUTH! */
</code></pre><p>最后，重启httpd使改动生效。</p><pre><code>$ sudo service httpd restart 
</code></pre><h3 id="测试phpmyadmin" tabindex="-1">测试phpMyAdmin <a class="header-anchor" href="#测试phpmyadmin" aria-label="Permalink to “测试phpMyAdmin”">​</a></h3><p>测试phpMyAdmin是否设置成功，访问这个页面：http://&lt;web-server-ip-addresss&gt;/phpmyadmin</p><p><img src="https://farm6.staticflickr.com/5606/15550758749_0f7ab66b5b_z.jpg" alt=""></p><p>你应该能通过Web界面来记录下任何MySQL用户(比如root)和管理MySQL/MariaDB的数据库/表。</p><p><img src="https://farm8.staticflickr.com/7505/15551187008_86ac7e7db1_z.jpg" alt=""></p><h3 id="疑难解答" tabindex="-1">疑难解答 <a class="header-anchor" href="#疑难解答" aria-label="Permalink to “疑难解答”">​</a></h3><p>这里有一些在CentOS上安装phpMyAdmin的过程中遇到的一些问题解决方法。</p><ol><li><p>当你在浏览器里尝试连接phpMyAdmin页面的时候，你看到&quot;403 Forbidding&quot;错误：</p><p>You don&#39;t have permission to access /phpMyAdmin on this server.</p></li></ol><p>发生这种错误是因为phpMyAdmin默认阻止了IP地址远程连接。要修复这种错误，你需要编辑它的配置文件来允许远程连接。具体操作见上。</p><ol start="2"><li>当你连接phpMyAdmin页面时，你看见&quot;The configuration file now needs a secret passphrase (blowfish_secret).&quot;信息，并且你无法登录。</li></ol><p>要修复这种错误，你需要编辑 /usr/share/phpmyadmin/config.inc.php 这个文件来添加一个随机的blowfish密码，然后重启httpd，如下所示。</p><pre><code>$cfg[&#39;blowfish_secret&#39;] = &#39;kd5G}d33aXDc50!&#39;; /* YOU MUST FILL IN THIS FOR COOKIE AUTH! */
</code></pre><hr><pre><code>$ sudo service httpd restart (CentOS 6)
$ sudo systemctl restart httpd (CentOS 7) 
</code></pre><ol start="3"><li>当你连接phpMyAdmin页面时，你看见&quot;Cannot load mcrypt extension. Please check your PHP configuration&quot;错误信息。</li></ol><p>要修复这种错误，要安装下面这个包：</p><pre><code>$ sudo yum install php-mcrypt 
</code></pre><p>然后重启httpd：</p><pre><code>$ sudo service httpd restart (CentOS 6)
$ sudo systemctl restart httpd (CentOS 7) 
</code></pre><hr>`,47)),e("p",null,[t[14]||(t[14]=n("via: ",-1)),o(p,{href:"http://ask.xmodulo.com/install-phpmyadmin-centos.html"},{default:i(()=>[...t[13]||(t[13]=[n("http://ask.xmodulo.com/install-phpmyadmin-centos.html",-1)])]),_:1})]),e("p",null,[t[17]||(t[17]=n("译者：",-1)),o(p,{href:"https://github.com/ZTinoZ"},{default:i(()=>[...t[15]||(t[15]=[n("ZTinoZ",-1)])]),_:1}),t[18]||(t[18]=n(" 校对：",-1)),o(p,{href:"https://github.com/wxy"},{default:i(()=>[...t[16]||(t[16]=[n("wxy",-1)])]),_:1})]),e("p",null,[t[21]||(t[21]=n("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...t[19]||(t[19]=[n("LCTT",-1)])]),_:1}),t[22]||(t[22]=n(" 原创翻译，",-1)),o(p,{href:"http://linux.cn/"},{default:i(()=>[...t[20]||(t[20]=[n("Linux中国",-1)])]),_:1}),t[23]||(t[23]=n(" 荣誉推出",-1))])])}const g=r(m,[["render",h]]);export{S as __pageData,g as default};
