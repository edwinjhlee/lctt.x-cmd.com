import{_ as i,a0 as o,w as p,s as d,ao as s,I as t,x as a,a1 as r,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"在Ubuntu 13.10 下安装支持SSL的Apache | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu 13.10 下安装支持SSL的Apache | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu 13.10 下安装支持SSL的Apache | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu 13.10 下安装支持SSL的Apache | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Install Apache With SSL in Ubuntu 13.10","title":"在Ubuntu 13.10 下安装支持SSL的Apache","tag":"201311","desc":""},"relativePath":"201311/Install Apache With SSL in Ubuntu 13.10.md","filePath":"[post].md"}'),u={name:"201311/Install Apache With SSL in Ubuntu 13.10.md"};function h(c,e,b,f,m,S){const n=o("Link");return p(),d("div",null,[e[16]||(e[16]=s(`<h1 id="在ubuntu-13-10-下安装支持ssl的apache" tabindex="-1">在Ubuntu 13.10 下安装支持SSL的Apache <a class="header-anchor" href="#在ubuntu-13-10-下安装支持ssl的apache" aria-label="Permalink to “在Ubuntu 13.10 下安装支持SSL的Apache”">​</a></h1><p>通过这个简短的教程，让我来指导你如何安装支持SSL的Apache。以下是我的试验机的详细说明:</p><h3 id="系统信息" tabindex="-1">系统信息 <a class="header-anchor" href="#系统信息" aria-label="Permalink to “系统信息”">​</a></h3><pre><code>root@ubuntu-unixmen:~# ifconfig
eth0 Link encap:Ethernet HWaddr 08:00:27:b8:b4:87
inet addr:10.1.1.110 Bcast:10.1.1.255 Mask:255.255.255.0
inet6 addr: fe80::a00:27ff:feb8:b487/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
RX packets:1738 errors:0 dropped:0 overruns:0 frame:0
TX packets:69 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000
RX bytes:168845 (168.8 KB) TX bytes:9767 (9.7 KB)
</code></pre><hr><pre><code>root@ubuntu-unixmen:~# cat /etc/issue
Ubuntu 13.10 \\n \\l
</code></pre><h3 id="安装apache" tabindex="-1">安装apache <a class="header-anchor" href="#安装apache" aria-label="Permalink to “安装apache”">​</a></h3><p>运行如下命令：</p><pre><code>sudo apt-get install apache2 apache2-doc apache2-utils
Reading package lists... Done
Building dependency tree 
Reading state information... Done
The following extra packages will be installed:
apache2-bin apache2-data libapr1 libaprutil1 libaprutil1-dbd-sqlite3 libaprutil1-ldap ssl-cert
</code></pre><h3 id="apache测试页面" tabindex="-1">apache测试页面 <a class="header-anchor" href="#apache测试页面" aria-label="Permalink to “apache测试页面”">​</a></h3>`,10)),t("p",null,[e[1]||(e[1]=a("打开浏览器,转到",-1)),r(n,{href:"http://xn--IP-0p3ck01akcq04juwjwrsca2865c/%E3%80%82%E4%BD%A0%E5%BA%94%E8%AF%A5%E4%BC%9A%E7%9C%8B%E5%88%B0%E7%B1%BB%E4%BC%BC%E4%BB%A5%E4%B8%8B%E7%9A%84%E4%BF%A1%E6%81%AF%E3%80%82"},{default:l(()=>[...e[0]||(e[0]=[a("http://你的测试机的IP地址/。你应该会看到类似以下的信息。",-1)])]),_:1})]),e[17]||(e[17]=s(`<p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/10/apache2-ubuntu.png" alt=""></p><h3 id="创建目录" tabindex="-1">创建目录 <a class="header-anchor" href="#创建目录" aria-label="Permalink to “创建目录”">​</a></h3><p>创建一个名为<strong>ssl</strong>的目录</p><pre><code>$ sudo mkdir /etc/apache2/ssl
</code></pre><h3 id="创建一个自签名凭证" tabindex="-1">创建一个自签名凭证 <a class="header-anchor" href="#创建一个自签名凭证" aria-label="Permalink to “创建一个自签名凭证”">​</a></h3><pre><code>$ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt

Generating a 2048 bit RSA private key.......................................................................................+++....................................+++writing new private key to &#39;/etc/apache2/ssl/apache.key&#39;-----You are about to be asked to enter information that will be incorporatedinto your certificate request.What you are about to enter is what is called a Distinguished Name or a DN.There are quite a few fields but you can leave some blankFor some fields there will be a default value,If you enter &#39;.&#39;, the field will be left blank.-----Country Name (2 letter code) [AU]:
</code></pre><h3 id="开启apache-ssl模块" tabindex="-1">开启Apache SSL模块 <a class="header-anchor" href="#开启apache-ssl模块" aria-label="Permalink to “开启Apache SSL模块”">​</a></h3><p>运行以下命令开启ssl模块</p><pre><code>$ a2enmod ssl
Considering dependency setenvif for ssl:
Module setenvif already enabled
Considering dependency mime for ssl:
Module mime already enabled
Considering dependency socache_shmcb for ssl:
Enabling module socache_shmcb.
Enabling module ssl
</code></pre><p>编辑 <strong>/etc/apache2/sites-enabled/default-ssl.conf</strong> 文件，</p><pre><code>&lt;VirtualHost 10.1.1.110:443&gt;
ServerAdmin webmaster@localhost
ServerName www.unixmen.com:443

SSLEngine on
SSLCertificateFile /etc/apache2/ssl/apache.crt
SSLCertificateKeyFile /etc/apache2/ssl/apache.key
</code></pre><h3 id="启用apache缺省的ssl虚拟主机" tabindex="-1">启用Apache缺省的SSL虚拟主机: <a class="header-anchor" href="#启用apache缺省的ssl虚拟主机" aria-label="Permalink to “启用Apache缺省的SSL虚拟主机:”">​</a></h3><pre><code>$ a2ensite default-ssl
Enabling site default-ssl.
To activate the new configuration, you need to run:
service apache2 reload
</code></pre><h3 id="重启apache" tabindex="-1">重启Apache: <a class="header-anchor" href="#重启apache" aria-label="Permalink to “重启Apache:”">​</a></h3><pre><code>$ sudo service apache2 restart
</code></pre><p>###测试SSL连接###</p>`,16)),t("p",null,[e[3]||(e[3]=a("打开浏览器，转到",-1)),t("strong",null,[r(n,{href:"https://xn--IP-0p3cq81g3xgzmopg9a"},{default:l(()=>[...e[2]||(e[2]=[a("https://你的测试机IP",-1)])]),_:1})]),e[4]||(e[4]=a("。",-1))]),e[18]||(e[18]=t("p",null,[t("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2013/10/apache-cert.png",alt:""})],-1)),e[19]||(e[19]=t("p",null,"安装完成，尽情享用！",-1)),e[20]||(e[20]=t("hr",null,null,-1)),t("p",null,[e[6]||(e[6]=a("via: ",-1)),r(n,{href:"http://www.unixmen.com/install-apache-ssl-ubuntu-13-10/"},{default:l(()=>[...e[5]||(e[5]=[a("http://www.unixmen.com/install-apache-ssl-ubuntu-13-10/",-1)])]),_:1})]),t("p",null,[e[9]||(e[9]=a("译者：",-1)),r(n,{href:"https://github.com/Luoxcat"},{default:l(()=>[...e[7]||(e[7]=[a("Luoxcat",-1)])]),_:1}),e[10]||(e[10]=a(" 校对：",-1)),r(n,{href:"https://github.com/carolinewuyan"},{default:l(()=>[...e[8]||(e[8]=[a("Caroline",-1)])]),_:1})]),t("p",null,[e[13]||(e[13]=a("本文由 ",-1)),r(n,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...e[11]||(e[11]=[a("LCTT",-1)])]),_:1}),e[14]||(e[14]=a(" 原创翻译，",-1)),r(n,{href:"http://linux.cn/"},{default:l(()=>[...e[12]||(e[12]=[a("Linux中国",-1)])]),_:1}),e[15]||(e[15]=a(" 荣誉推出",-1))])])}const L=i(u,[["render",h]]);export{T as __pageData,L as default};
