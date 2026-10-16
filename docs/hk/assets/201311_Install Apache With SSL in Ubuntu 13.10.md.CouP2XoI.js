import{_ as i,a0 as o,w as p,s as d,ao as s,I as t,x as a,a1 as r,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"在Ubuntu 13.10 下安裝支持SSL的Apache | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu 13.10 下安裝支持SSL的Apache | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu 13.10 下安裝支持SSL的Apache | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu 13.10 下安裝支持SSL的Apache | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Install Apache With SSL in Ubuntu 13.10","title":"在Ubuntu 13.10 下安裝支持SSL的Apache","tag":"201311","desc":""},"relativePath":"201311/Install Apache With SSL in Ubuntu 13.10.md","filePath":"[post].md"}'),u={name:"201311/Install Apache With SSL in Ubuntu 13.10.md"};function h(c,e,b,f,m,S){const n=o("Link");return p(),d("div",null,[e[16]||(e[16]=s(`<h1 id="在ubuntu-13-10-下安裝支持ssl的apache" tabindex="-1">在Ubuntu 13.10 下安裝支持SSL的Apache <a class="header-anchor" href="#在ubuntu-13-10-下安裝支持ssl的apache" aria-label="Permalink to “在Ubuntu 13.10 下安裝支持SSL的Apache”">​</a></h1><p>通過這個簡短的教程，讓我來指導你如何安裝支持SSL的Apache。以下是我的試驗機的詳細説明:</p><h3 id="系統信息" tabindex="-1">系統信息 <a class="header-anchor" href="#系統信息" aria-label="Permalink to “系統信息”">​</a></h3><pre><code>root@ubuntu-unixmen:~# ifconfig
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
</code></pre><h3 id="安裝apache" tabindex="-1">安裝apache <a class="header-anchor" href="#安裝apache" aria-label="Permalink to “安裝apache”">​</a></h3><p>運行如下命令：</p><pre><code>sudo apt-get install apache2 apache2-doc apache2-utils
Reading package lists... Done
Building dependency tree 
Reading state information... Done
The following extra packages will be installed:
apache2-bin apache2-data libapr1 libaprutil1 libaprutil1-dbd-sqlite3 libaprutil1-ldap ssl-cert
</code></pre><h3 id="apache測試頁面" tabindex="-1">apache測試頁面 <a class="header-anchor" href="#apache測試頁面" aria-label="Permalink to “apache測試頁面”">​</a></h3>`,10)),t("p",null,[e[1]||(e[1]=a("打開瀏覽器,轉到",-1)),r(n,{href:"http://xn--IP-0p3ck01akc018lutfhusca2102c/%E3%80%82%E4%BD%A0%E6%87%89%E8%A9%B2%E6%9C%83%E7%9C%8B%E5%88%B0%E9%A1%9E%E4%BC%BC%E4%BB%A5%E4%B8%8B%E7%9A%84%E4%BF%A1%E6%81%AF%E3%80%82"},{default:l(()=>[...e[0]||(e[0]=[a("http://你的測試機的IP地址/。你應該會看到類似以下的信息。",-1)])]),_:1})]),e[17]||(e[17]=s(`<p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/10/apache2-ubuntu.png" alt=""></p><h3 id="創建目錄" tabindex="-1">創建目錄 <a class="header-anchor" href="#創建目錄" aria-label="Permalink to “創建目錄”">​</a></h3><p>創建一個名為<strong>ssl</strong>的目錄</p><pre><code>$ sudo mkdir /etc/apache2/ssl
</code></pre><h3 id="創建一個自簽名憑證" tabindex="-1">創建一個自簽名憑證 <a class="header-anchor" href="#創建一個自簽名憑證" aria-label="Permalink to “創建一個自簽名憑證”">​</a></h3><pre><code>$ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt

Generating a 2048 bit RSA private key.......................................................................................+++....................................+++writing new private key to &#39;/etc/apache2/ssl/apache.key&#39;-----You are about to be asked to enter information that will be incorporatedinto your certificate request.What you are about to enter is what is called a Distinguished Name or a DN.There are quite a few fields but you can leave some blankFor some fields there will be a default value,If you enter &#39;.&#39;, the field will be left blank.-----Country Name (2 letter code) [AU]:
</code></pre><h3 id="開啓apache-ssl模組" tabindex="-1">開啓Apache SSL模組 <a class="header-anchor" href="#開啓apache-ssl模組" aria-label="Permalink to “開啓Apache SSL模組”">​</a></h3><p>運行以下命令開啓ssl模組</p><pre><code>$ a2enmod ssl
Considering dependency setenvif for ssl:
Module setenvif already enabled
Considering dependency mime for ssl:
Module mime already enabled
Considering dependency socache_shmcb for ssl:
Enabling module socache_shmcb.
Enabling module ssl
</code></pre><p>編輯 <strong>/etc/apache2/sites-enabled/default-ssl.conf</strong> 文件，</p><pre><code>&lt;VirtualHost 10.1.1.110:443&gt;
ServerAdmin webmaster@localhost
ServerName www.unixmen.com:443

SSLEngine on
SSLCertificateFile /etc/apache2/ssl/apache.crt
SSLCertificateKeyFile /etc/apache2/ssl/apache.key
</code></pre><h3 id="啓用apache缺省的ssl虛擬主機" tabindex="-1">啓用Apache缺省的SSL虛擬主機: <a class="header-anchor" href="#啓用apache缺省的ssl虛擬主機" aria-label="Permalink to “啓用Apache缺省的SSL虛擬主機:”">​</a></h3><pre><code>$ a2ensite default-ssl
Enabling site default-ssl.
To activate the new configuration, you need to run:
service apache2 reload
</code></pre><h3 id="重啓apache" tabindex="-1">重啓Apache: <a class="header-anchor" href="#重啓apache" aria-label="Permalink to “重啓Apache:”">​</a></h3><pre><code>$ sudo service apache2 restart
</code></pre><p>###測試SSL連接###</p>`,16)),t("p",null,[e[3]||(e[3]=a("打開瀏覽器，轉到",-1)),t("strong",null,[r(n,{href:"https://xn--IP-0p3cx73h87df4ob27a"},{default:l(()=>[...e[2]||(e[2]=[a("https://你的測試機IP",-1)])]),_:1})]),e[4]||(e[4]=a("。",-1))]),e[18]||(e[18]=t("p",null,[t("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2013/10/apache-cert.png",alt:""})],-1)),e[19]||(e[19]=t("p",null,"安裝完成，盡情享用！",-1)),e[20]||(e[20]=t("hr",null,null,-1)),t("p",null,[e[6]||(e[6]=a("via: ",-1)),r(n,{href:"http://www.unixmen.com/install-apache-ssl-ubuntu-13-10/"},{default:l(()=>[...e[5]||(e[5]=[a("http://www.unixmen.com/install-apache-ssl-ubuntu-13-10/",-1)])]),_:1})]),t("p",null,[e[9]||(e[9]=a("譯者：",-1)),r(n,{href:"https://github.com/Luoxcat"},{default:l(()=>[...e[7]||(e[7]=[a("Luoxcat",-1)])]),_:1}),e[10]||(e[10]=a(" 校對：",-1)),r(n,{href:"https://github.com/carolinewuyan"},{default:l(()=>[...e[8]||(e[8]=[a("Caroline",-1)])]),_:1})]),t("p",null,[e[13]||(e[13]=a("本文由 ",-1)),r(n,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...e[11]||(e[11]=[a("LCTT",-1)])]),_:1}),e[14]||(e[14]=a(" 原創翻譯，",-1)),r(n,{href:"http://linux.cn/"},{default:l(()=>[...e[12]||(e[12]=[a("Linux中國",-1)])]),_:1}),e[15]||(e[15]=a(" 榮譽推出",-1))])])}const L=i(u,[["render",h]]);export{g as __pageData,L as default};
