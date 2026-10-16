import{_ as d,a0 as i,w as u,s,I as e,x as o,a1 as r,A as l,ao as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"使用ownCloud在Linux安装你的个人云服务 | LCTT x X-CMD","titleTemplate":false,"description":"使用ownCloud在Linux安装你的个人云服务 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用ownCloud在Linux安装你的个人云服务 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用ownCloud在Linux安装你的个人云服务 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/Setup your personal Cloud server in minutes using ownCloud On RHEL, CentOS, Scientific Linux 6.5","title":"使用ownCloud在Linux安装你的个人云服务","tag":"201401","desc":""},"relativePath":"201401/Setup your personal Cloud server in minutes using ownCloud On RHEL, CentOS, Scientific Linux 6.5.md","filePath":"[post].md"}'),a={name:"201401/Setup your personal Cloud server in minutes using ownCloud On RHEL, CentOS, Scientific Linux 6.5.md"};function w(m,n,C,f,g,h){const t=i("Link");return u(),s("div",null,[n[19]||(n[19]=e("h1",{id:"使用owncloud在linux安装你的个人云服务",tabindex:"-1"},[o("使用ownCloud在Linux安装你的个人云服务 "),e("a",{class:"header-anchor",href:"#使用owncloud在linux安装你的个人云服务","aria-label":"Permalink to “使用ownCloud在Linux安装你的个人云服务”"},"​")],-1)),e("p",null,[r(t,{href:"https://owncloud.org/"},{default:l(()=>[...n[0]||(n[0]=[o("ownCloud",-1)])]),_:1}),n[1]||(n[1]=o("是一个免费开源的软件，用于为分享文件，日历，联系人，书签和个人音频/视频。非常容易安装和管理。",-1))]),n[20]||(n[20]=e("h3",{id:"前提",tabindex:"-1"},[o("前提 "),e("a",{class:"header-anchor",href:"#前提","aria-label":"Permalink to “前提”"},"​")],-1)),n[21]||(n[21]=e("p",null,"在这篇教程里我使用CentOS 6.5 minimal server来安装ownCloud。下面是我测试机的资料。",-1)),n[22]||(n[22]=e("pre",null,[e("code",null,`Operating system: CentOS 6.5 Minimal Installation
IP Address: 192.168.1.101/24
`)],-1)),n[23]||(n[23]=e("p",null,"在CentOS 6.5上测试了一段时间，ownCloud适用于所有基于RPM的发行版。",-1)),n[24]||(n[24]=e("p",null,"你的服务应该工作在LAMP上。参考下面链接去安装LAMP服务。",-1)),e("ul",null,[e("li",null,[r(t,{href:"http://www.unixmen.com/install-lamp-apache-with-mariadb-and-php-on-centosrhelscientific-linux-6/"},{default:l(()=>[...n[2]||(n[2]=[o("在RHEL/Scientific Linux上安装LAMP服务",-1)])]),_:1})])]),n[25]||(n[25]=p(`<p>安装一下必要的PHP扩展：</p><pre><code># yum install php-mysql php-json php-xml php-mbstring php-zip php-gd curl php-curl php-pdo
</code></pre><h3 id="为owncloud设置数据库" tabindex="-1">为ownCloud设置数据库 <a class="header-anchor" href="#为owncloud设置数据库" aria-label="Permalink to “为ownCloud设置数据库”">​</a></h3><p>让我们来创建一个名为&#39;ownclouddb&#39;和数据库用户&#39;ownclouduser&#39;以及密码是&#39;centos&#39;的数据库。</p><pre><code># mysql -u root -p
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
</code></pre><h3 id="获取owncloud" tabindex="-1">获取ownCloud <a class="header-anchor" href="#获取owncloud" aria-label="Permalink to “获取ownCloud”">​</a></h3><p>切换到你的apache root目录并下载ownCloud最新版</p><p>转到Apache root文件目录并下载最新版ownCloud。</p><pre><code># wget http://download.owncloud.org/community/owncloud-6.0.0a.tar.bz2
</code></pre><p>用命令解压tar压缩包：</p><pre><code># tar xvf owncloud-6.0.0a.tar.bz2
</code></pre><p>移动解压后的目录到你的apache root目录 (例如 /var/www/html/)</p><pre><code># mv owncloud/ /var/www/html/
</code></pre><p>设置一下目录的所有权和权限：</p><pre><code># chown -R apache:apache /var/www/html/owncloud/
# chmod 777 /var/www/html/owncloud/config/
</code></pre><p>启用apache重写模式。</p><p>编辑文件 “<strong>/etc/httpd/conf/httpd.conf</strong>”，</p><pre><code># vi /etc/httpd/conf/httpd.conf
</code></pre><p>查找并修改 <strong>AllowOverride None</strong> 为 <strong>Allowoverride All</strong>.</p><pre><code>[...]
     AllowOverride All
[...]
</code></pre><p>最后，重启apachehttpd和mysql服务。</p><pre><code># service mysql restart
# service httpd restart
</code></pre><h3 id="开始安装owncloud" tabindex="-1">开始安装ownCloud <a class="header-anchor" href="#开始安装owncloud" aria-label="Permalink to “开始安装ownCloud”">​</a></h3>`,23)),e("p",null,[n[5]||(n[5]=o("通过你的网页浏览器导航到 ",-1)),e("strong",null,[r(t,{href:"http://ip-address/owncloud"},{default:l(()=>[...n[3]||(n[3]=[o("http://ip-address/owncloud",-1)])]),_:1})]),n[6]||(n[6]=o(" 或 ",-1)),e("strong",null,[r(t,{href:"http://domain-name/owncloud"},{default:l(()=>[...n[4]||(n[4]=[o("http://domain-name/owncloud",-1)])]),_:1})]),n[7]||(n[7]=o(" 。",-1))]),n[26]||(n[26]=p('<p><strong>注意</strong>：如果遇到任何权限错误，禁用SELinux并再试一次。</p><p>自己的云的主页将出现。你将被要求创建一个新的管理员账户。输入管理员账户信息。</p><p>然后点击 <strong>Advanced</strong> 下拉按钮，选择mysql并输入mysql数据库名，数据库用户和密码。最后点击 <strong>Finish setup</strong> 来完成安装。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/03/ownCloud-Mozilla-Firefox_001.jpg" alt=""></p><p>这是我的ownCloud界面的样子：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/03/Files-ownCloud-Mozilla-Firefox_002.jpg" alt=""></p><p>就是这样。我们的云服务已经准备好了。现在，你可以从你任何网络的客户端来上传/下载你的图片，文件，音频，视频以及访问它们。</p><hr>',8)),e("p",null,[n[9]||(n[9]=o("via: ",-1)),r(t,{href:"http://www.unixmen.com/setup-your-personal-cloud-server-in-minutes-using-owncloud/"},{default:l(()=>[...n[8]||(n[8]=[o("http://www.unixmen.com/setup-your-personal-cloud-server-in-minutes-using-owncloud/",-1)])]),_:1})]),e("p",null,[n[12]||(n[12]=o("译者：",-1)),r(t,{href:"https://github.com/vito-L"},{default:l(()=>[...n[10]||(n[10]=[o("Vito",-1)])]),_:1}),n[13]||(n[13]=o(" 校对：",-1)),r(t,{href:"https://github.com/wxy"},{default:l(()=>[...n[11]||(n[11]=[o("wxy",-1)])]),_:1})]),e("p",null,[n[16]||(n[16]=o("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[14]||(n[14]=[o("LCTT",-1)])]),_:1}),n[17]||(n[17]=o(" 原创翻译，",-1)),r(t,{href:"http://linux.cn/"},{default:l(()=>[...n[15]||(n[15]=[o("Linux中国",-1)])]),_:1}),n[18]||(n[18]=o(" 荣誉推出",-1))])])}const L=d(a,[["render",w]]);export{T as __pageData,L as default};
