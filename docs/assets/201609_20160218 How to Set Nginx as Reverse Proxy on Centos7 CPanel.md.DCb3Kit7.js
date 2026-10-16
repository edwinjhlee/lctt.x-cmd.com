import{_ as o,a0 as i,w as l,s as p,ao as c,I as a,x as n,a1 as s,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"如何在 CentOS 7 用 cPanel 配置 Nginx 反向代理 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7 用 cPanel 配置 Nginx 反向代理 | LCTT (201609) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7 用 cPanel 配置 Nginx 反向代理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7 用 cPanel 配置 Nginx 反向代理 | LCTT (201609) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201609/20160218 How to Set Nginx as Reverse Proxy on Centos7 CPanel","title":"如何在 CentOS 7 用 cPanel 配置 Nginx 反向代理","tag":"201609","desc":""},"relativePath":"201609/20160218 How to Set Nginx as Reverse Proxy on Centos7 CPanel.md","filePath":"[post].md"}'),d={name:"201609/20160218 How to Set Nginx as Reverse Proxy on Centos7 CPanel.md"};function g(h,e,m,x,y,u){const t=i("Link");return l(),p("div",null,[e[13]||(e[13]=c(`<h1 id="如何在-centos-7-用-cpanel-配置-nginx-反向代理" tabindex="-1">如何在 CentOS 7 用 cPanel 配置 Nginx 反向代理 <a class="header-anchor" href="#如何在-centos-7-用-cpanel-配置-nginx-反向代理" aria-label="Permalink to “如何在 CentOS 7 用 cPanel 配置 Nginx 反向代理”">​</a></h1><p>Nginx 是最快和最强大的 Web 服务器之一，以其高性能和低资源占用率而闻名。它既可以被安装为一个独立的 Web 服务器，也可以安装成反向代理 Web 服务器。在这篇文章，我将讨论在安装了 cPanel 管理系统的 Centos 7 服务器上安装 Nginx 作为 Apache 的反向代理服务器。</p><p>Nginx 作为前端服务器用反向代理为静态文件提供服务，Apache 作为后端为动态文件提供服务。这个设置将整体提高服务器的性能。</p><p>让我们过一遍在已经安装好 cPanel 11.52 的 CentOS 7 x86_64 服务器上配置 Nginx 作为反向代理的安装过程。</p><p>首先，我们需要安装 EPEL 库来启动这个进程</p><h3 id="第一步-安装-epel-库" tabindex="-1">第一步: 安装 EPEL 库### <a class="header-anchor" href="#第一步-安装-epel-库" aria-label="Permalink to “第一步: 安装 EPEL 库###”">​</a></h3><pre><code>root@server1 [/usr]# yum -y install epel-release
Loaded plugins: fastestmirror, tsflags, universal-hooks
Loading mirror speeds from cached hostfile
* EA4: 66.23.237.210
* base: mirrors.linode.com
* extras: mirrors.linode.com
* updates: mirrors.linode.com
Resolving Dependencies
--&gt; Running transaction check
---&gt; Package epel-release.noarch 0:7-5 will be installed
--&gt; Finished Dependency Resolution

Dependencies Resolved

========================================================================================
    Package Arch Version Repository Size
========================================================================================
Installing:
epel-release noarch 7-5 extras 14 k
</code></pre><h3 id="第二步-可以安装-ndeploy-的-centos-rpm-库来安装我们所需的-ndeploy-web-类软件和-nginx-插件" tabindex="-1">第二步: 可以安装 nDeploy 的 CentOS RPM 库来安装我们所需的 nDeploy Web 类软件和 Nginx 插件 <a class="header-anchor" href="#第二步-可以安装-ndeploy-的-centos-rpm-库来安装我们所需的-ndeploy-web-类软件和-nginx-插件" aria-label="Permalink to “第二步: 可以安装 nDeploy 的 CentOS RPM 库来安装我们所需的 nDeploy Web 类软件和 Nginx 插件”">​</a></h3><pre><code>root@server1 [/usr]# yum -y install http://rpm.piserve.com/nDeploy-release-centos-1.0-1.noarch.rpm
Loaded plugins: fastestmirror, tsflags, universal-hooks
nDeploy-release-centos-1.0-1.noarch.rpm | 1.7 kB 00:00:00
Examining /var/tmp/yum-root-ei5tWJ/nDeploy-release-centos-1.0-1.noarch.rpm: nDeploy-release-centos-1.0-1.noarch
Marking /var/tmp/yum-root-ei5tWJ/nDeploy-release-centos-1.0-1.noarch.rpm to be installed
Resolving Dependencies
--&gt; Running transaction check
---&gt; Package nDeploy-release-centos.noarch 0:1.0-1 will be installed
--&gt; Finished Dependency Resolution

Dependencies Resolved

========================================================================================
Package Arch Version Repository Size
========================================================================================
Installing:
nDeploy-release-centos noarch 1.0-1 /nDeploy-release-centos-1.0-1.noarch 110
</code></pre><h3 id="第三步-安装-ndeploy-和-nginx-ndeploy-插件" tabindex="-1">第三步：安装 nDeploy 和 Nginx nDeploy 插件 <a class="header-anchor" href="#第三步-安装-ndeploy-和-nginx-ndeploy-插件" aria-label="Permalink to “第三步：安装 nDeploy 和 Nginx nDeploy 插件”">​</a></h3><pre><code>root@server1 [/usr]# yum --enablerepo=ndeploy install nginx-nDeploy nDeploy
Loaded plugins: fastestmirror, tsflags, universal-hooks
epel/x86_64/metalink | 9.9 kB 00:00:00
epel | 4.3 kB 00:00:00
ndeploy | 2.9 kB 00:00:00
(1/4): ndeploy/7/x86_64/primary_db | 14 kB 00:00:00
(2/4): epel/x86_64/group_gz | 169 kB 00:00:00
(3/4): epel/x86_64/primary_db | 3.7 MB 00:00:02

Dependencies Resolved

========================================================================================
Package Arch Version Repository Size
========================================================================================
Installing:
nDeploy noarch 2.0-11.el7 ndeploy 80 k
nginx-nDeploy x86_64 1.8.0-34.el7 ndeploy 36 M
Installing for dependencies:
PyYAML x86_64 3.10-11.el7 base 153 k
libevent x86_64 2.0.21-4.el7 base 214 k
memcached x86_64 1.4.15-9.el7 base 84 k
python-inotify noarch 0.9.4-4.el7 base 49 k
python-lxml x86_64 3.2.1-4.el7 base 758 k

Transaction Summary
========================================================================================
Install 2 Packages (+5 Dependent packages)
</code></pre><p>通过以上这些步骤，我们完成了在我们的服务器上 Nginx 插件的安装。现在我们可以配置 Nginx 作为反向代理和为已有的 cPanel 用户账户创建虚拟主机，为此我们可以运行如下脚本。</p><h3 id="第四步-启动-nginx-作为默认的前端-web-服务器-并创建默认的配置文件" tabindex="-1">第四步：启动 Nginx 作为默认的前端 Web 服务器，并创建默认的配置文件### <a class="header-anchor" href="#第四步-启动-nginx-作为默认的前端-web-服务器-并创建默认的配置文件" aria-label="Permalink to “第四步：启动 Nginx 作为默认的前端 Web 服务器，并创建默认的配置文件###”">​</a></h3><pre><code>root@server1 [/usr]# /opt/nDeploy/scripts/cpanel-nDeploy-setup.sh enable
Modifying apache http and https port in cpanel

httpd restarted successfully.
Created symlink from /etc/systemd/system/multi-user.target.wants/nginx.service to /usr/lib/systemd/system/nginx.service.
Created symlink from /etc/systemd/system/multi-user.target.wants/ndeploy_watcher.service to /usr/lib/systemd/system/ndeploy_watcher.service.
Created symlink from /etc/systemd/system/multi-user.target.wants/ndeploy_backends.service to /usr/lib/systemd/system/ndeploy_backends.service.
ConfGen:: saheetha
ConfGen:: satest
</code></pre><p>你可以看到这个脚本将修改 Apache 的端口从 80 到另一个端口来让 Nginx 作为前端 Web 服务器，并为现有的 cPanel 用户创建虚拟主机配置文件。一旦完成，确认 Apache 和 Nginx 的状态。</p><h4 id="apache-状态" tabindex="-1">Apache 状态：#### <a class="header-anchor" href="#apache-状态" aria-label="Permalink to “Apache 状态：####”">​</a></h4><pre><code>root@server1 [/var/run/httpd]# systemctl status httpd
● httpd.service - Apache Web Server
Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)
Active: active (running) since Mon 2016-01-18 06:34:23 UTC; 12s ago
Process: 25606 ExecStart=/usr/sbin/apachectl start (code=exited, status=0/SUCCESS)
Main PID: 24760 (httpd)
CGroup: /system.slice/httpd.service
‣ 24760 /usr/local/apache/bin/httpd -k start

Jan 18 06:34:23 server1.centos7-test.com systemd[1]: Starting Apache Web Server...
Jan 18 06:34:23 server1.centos7-test.com apachectl[25606]: httpd (pid 24760) already running
Jan 18 06:34:23 server1.centos7-test.com systemd[1]: Started Apache Web Server.
</code></pre><h4 id="nginx-状态" tabindex="-1">Nginx 状态：#### <a class="header-anchor" href="#nginx-状态" aria-label="Permalink to “Nginx 状态：####”">​</a></h4><pre><code>root@server1 [~]# systemctl status nginx
● nginx.service - nginx-nDeploy - high performance web server
Loaded: loaded (/usr/lib/systemd/system/nginx.service; enabled; vendor preset: disabled)
Active: active (running) since Sun 2016-01-17 17:18:29 UTC; 13h ago
Docs: http://nginx.org/en/docs/
Main PID: 3833 (nginx)
CGroup: /system.slice/nginx.service
├─ 3833 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.conf
├─25473 nginx: worker process
├─25474 nginx: worker process
└─25475 nginx: cache manager process

Jan 17 17:18:29 server1.centos7-test.com systemd[1]: Starting nginx-nDeploy - high performance web server...
Jan 17 17:18:29 server1.centos7-test.com nginx[3804]: nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
Jan 17 17:18:29 server1.centos7-test.com nginx[3804]: nginx: configuration file /etc/nginx/nginx.conf test is successful
Jan 17 17:18:29 server1.centos7-test.com systemd[1]: Started nginx-nDeploy - high performance web server.
</code></pre><p>Nginx 作为前端服务器运行在 80 端口，Apache 配置被更改为监听 http 端口 9999 和 https 端口 4430。请看他们的情况：</p><pre><code>root@server1 [/usr/local/src]# netstat -plan | grep httpd
tcp 0 0 0.0.0.0:4430 0.0.0.0:* LISTEN 17270/httpd
tcp 0 0 0.0.0.0:9999 0.0.0.0:* LISTEN 17270/httpd
tcp6 0 0 :::4430 :::* LISTEN 17270/httpd
tcp6 0 0 :::9999 :::* LISTEN 17270/httpd
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/apacheport.png" alt="apacheport"></p><pre><code>root@server1 [/usr/local/src]# netstat -plan | grep nginx
tcp 0 0 127.0.0.1:80 0.0.0.0:* LISTEN 17802/nginx: master
tcp 0 0 45.79.183.73:80 0.0.0.0:* LISTEN 17802/nginx: master
</code></pre><p>为已有用户创建的虚拟主机的配置文件在 &quot;<strong>/etc/nginx/sites-enabled</strong>&quot;。 这个文件路径包含了 Nginx 主要配置文件。</p><pre><code>root@server1 [/etc/nginx/sites-enabled]# ll | grep .conf
-rw-r--r-- 1 root root 311 Jan 17 09:02 saheetha.com.conf
-rw-r--r-- 1 root root 336 Jan 17 09:02 saheethastest.com.conf
</code></pre><h4 id="一个域名的示例虚拟主机" tabindex="-1">一个域名的示例虚拟主机：### <a class="header-anchor" href="#一个域名的示例虚拟主机" aria-label="Permalink to “一个域名的示例虚拟主机：###”">​</a></h4><pre><code>server {

listen 45.79.183.73:80;
#CPIPVSIX:80;

# ServerNames
server_name saheetha.com www.saheetha.com;
access_log /usr/local/apache/domlogs/saheetha.com main;
access_log /usr/local/apache/domlogs/saheetha.com-bytes_log bytes_log;

include /etc/nginx/sites-enabled/saheetha.com.include;

}
</code></pre><p>我们可以启动浏览器查看网站来确定 Web 服务器的工作状态。安装后，请阅读服务器上的 web 服务信息。</p><pre><code>root@server1 [/home]# ip a | grep -i eth0
3: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP qlen 1000
inet 45.79.183.73/24 brd 45.79.183.255 scope global dynamic eth0
root@server1 [/home]# nginx -v
nginx version: nginx/1.8.0
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2016/01/webserver.png" alt="webserver-status"></p><p>Nginx 将会为任何最新在 cPanel 中创建的账户创建虚拟主机。通过这些简单的的步骤，我们能够在一台 CentOS 7 / cPanel 的服务器上配置 Nginx 作为反向代理。</p><h3 id="nginx-作为反向代理的优势" tabindex="-1">Nginx 作为反向代理的优势### <a class="header-anchor" href="#nginx-作为反向代理的优势" aria-label="Permalink to “Nginx 作为反向代理的优势###”">​</a></h3><ol><li>便于安装和配置。</li><li>效率高、性能好。</li><li>防止 Ddos 攻击。</li><li>支持使用 .htaccess 作为 PHP 的重写规则。</li></ol><p>我希望这篇文章对你们有用。感谢你看它。我非常高兴收到你的宝贵意见和建议，并进一步改善。</p><hr>`,35)),a("p",null,[e[1]||(e[1]=n("via: ",-1)),s(t,{href:"http://linoxide.com/linux-how-to/set-nginx-reverse-proxy-centos-7-cpanel/"},{default:r(()=>[...e[0]||(e[0]=[n("http://linoxide.com/linux-how-to/set-nginx-reverse-proxy-centos-7-cpanel/",-1)])]),_:1})]),a("p",null,[e[5]||(e[5]=n("作者：",-1)),s(t,{href:"http://linoxide.com/author/saheethas/"},{default:r(()=>[...e[2]||(e[2]=[n("Saheetha Shameer",-1)])]),_:1}),e[6]||(e[6]=n(" 译者：",-1)),s(t,{href:"https://github.com/bestony"},{default:r(()=>[...e[3]||(e[3]=[n("bestony",-1)])]),_:1}),e[7]||(e[7]=n(" 校对：",-1)),s(t,{href:"https://github.com/wxy"},{default:r(()=>[...e[4]||(e[4]=[n("wxy",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=n("本文由 ",-1)),s(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原创编译，",-1)),s(t,{href:"https://linux.cn/"},{default:r(()=>[...e[9]||(e[9]=[n("Linux中国",-1)])]),_:1}),e[12]||(e[12]=n(" 荣誉推出",-1))])])}const P=o(d,[["render",g]]);export{f as __pageData,P as default};
