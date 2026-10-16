import{_ as d,a0 as s,w as i,s as c,ao as l,I as r,x as n,a1 as t,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const N=JSON.parse('{"title":"在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服务器 | LCTT x X-CMD","titleTemplate":false,"description":"在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服务器 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服务器 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/How to Setup Bind Chroot DNS Server on CentOS 7.0 VPS","title":"在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服务器","tag":"201501","desc":""},"relativePath":"201501/How to Setup Bind Chroot DNS Server on CentOS 7.0 VPS.md","filePath":"[post].md"}'),m={name:"201501/How to Setup Bind Chroot DNS Server on CentOS 7.0 VPS.md"};function h(p,e,u,b,f,S){const o=s("Link");return i(),c("div",null,[e[13]||(e[13]=l(`<h1 id="在-centos7-0-上搭建-chroot-的-bind-dns-服务器" tabindex="-1">在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服务器 <a class="header-anchor" href="#在-centos7-0-上搭建-chroot-的-bind-dns-服务器" aria-label="Permalink to “在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服务器”">​</a></h1><p>BIND（Berkeley internet Name Daemon)也叫做NAMED，是现今互联网上使用最为广泛的DNS 服务器程序。这篇文章将要讲述如何在 chroot 监牢中运行 BIND，这样它就无法访问文件系统中除“监牢”以外的其它部分。</p><p>例如，在这篇文章中，我会将BIND的运行根目录改为 /var/named/chroot/。当然，对于BIND来说，这个目录就是 /（根目录）。 “jail”（监牢，下同）是一个软件机制，其功能是使得某个程序无法访问规定区域之外的资源，同样也为了增强安全性（LCTT 译注：chroot “监牢”，所谓“监牢”就是指通过chroot机制来更改某个进程所能看到的根目录，即将某进程限制在指定目录中，保证该进程只能对该目录及其子目录的文件进行操作，从而保证整个服务器的安全）。Bind Chroot DNS 服务器的默认“监牢”为 /var/named/chroot。你可以按照下列步骤，在CentOS 7.0 上部署 Bind Chroot DNS 服务器。</p><h3 id="_1、安装bind-chroot-dns-服务器" tabindex="-1">1、安装Bind Chroot DNS 服务器 <a class="header-anchor" href="#_1、安装bind-chroot-dns-服务器" aria-label="Permalink to “1、安装Bind Chroot DNS 服务器”">​</a></h3><pre><code>	[root@centos7 ~]# yum install bind-chroot bind -y
</code></pre><h3 id="_2、拷贝bind相关文件-准备bind-chroot-环境" tabindex="-1">2、拷贝bind相关文件,准备bind chroot 环境 <a class="header-anchor" href="#_2、拷贝bind相关文件-准备bind-chroot-环境" aria-label="Permalink to “2、拷贝bind相关文件,准备bind chroot 环境”">​</a></h3><pre><code>	[root@centos7 ~]# cp -R /usr/share/doc/bind-*/sample/var/named/* /var/named/chroot/var/named/
</code></pre><h3 id="_3、在bind-chroot-的目录中创建相关文件" tabindex="-1">3、在bind chroot 的目录中创建相关文件 <a class="header-anchor" href="#_3、在bind-chroot-的目录中创建相关文件" aria-label="Permalink to “3、在bind chroot 的目录中创建相关文件”">​</a></h3><pre><code>    [root@centos7 ~]# touch /var/named/chroot/var/named/data/cache_dump.db

	[root@centos7 ~]# touch /var/named/chroot/var/named/data/named_stats.txt

	[root@centos7 ~]# touch /var/named/chroot/var/named/data/named_mem_stats.txt

	[root@centos7 ~]# touch /var/named/chroot/var/named/data/named.run

	[root@centos7 ~]# mkdir /var/named/chroot/var/named/dynamic

	[root@centos7 ~]# touch /var/named/chroot/var/named/dynamic/managed-keys.bind
</code></pre><h3 id="_4、-将-bind-锁定文件设置为可写" tabindex="-1">4、 将 Bind 锁定文件设置为可写 <a class="header-anchor" href="#_4、-将-bind-锁定文件设置为可写" aria-label="Permalink to “4、 将 Bind 锁定文件设置为可写”">​</a></h3><pre><code>	[root@centos7 ~]# chmod -R 777 /var/named/chroot/var/named/data
	[root@centos7 ~]# chmod -R 777 /var/named/chroot/var/named/dynamic
</code></pre><h3 id="_5、-将-etc-named-conf-拷贝到-bind-chroot目录" tabindex="-1">5、 将 /etc/named.conf 拷贝到 bind chroot目录 <a class="header-anchor" href="#_5、-将-etc-named-conf-拷贝到-bind-chroot目录" aria-label="Permalink to “5、 将 /etc/named.conf 拷贝到 bind chroot目录”">​</a></h3><pre><code>	[root@centos7 ~]# cp -p /etc/named.conf /var/named/chroot/etc/named.conf
</code></pre><h3 id="_6、-在-etc-named-conf中对-bind-进行配置。" tabindex="-1">6、 在/etc/named.conf中对 bind 进行配置。 <a class="header-anchor" href="#_6、-在-etc-named-conf中对-bind-进行配置。" aria-label="Permalink to “6、 在/etc/named.conf中对 bind 进行配置。”">​</a></h3><p>在 named.conf 文件尾添加 <strong>example.local</strong> 域信息， 创建转发域（Forward Zone）与反向域（Reverse Zone）（LCTT 译注：这里example.local 并非一个真实有效的互联网域名，而是通常用于本地测试的一个域名；如果你需要做权威 DNS 解析，你可以将你拥有的域名如这里所示配置解析。）：</p><pre><code>	[root@centos7 ~]# vi /var/named/chroot/etc/named.conf
</code></pre><p>-- .. .. zone &quot;example.local&quot; { type master; file &quot;example.local.zone&quot;; };</p><pre><code>zone &quot;0.168.192.in-addr.arpa&quot; IN {
        type master;
        file &quot;192.168.0.zone&quot;;
};
..
..
</code></pre><p>named.conf 完全配置如下：</p><pre><code>//
// named.conf
//
// 由Red Hat提供，将 ISC BIND named(8) DNS服务器 
// 配置为暂存域名服务器 (用来做本地DNS解析).
//
// See /usr/share/doc/bind*/sample/ for example named configuration files.
//

options {
        listen-on port 53 { any; };
        listen-on-v6 port 53 { ::1; };
        directory       &quot;/var/named&quot;;
        dump-file       &quot;/var/named/data/cache_dump.db&quot;;
        statistics-file &quot;/var/named/data/named_stats.txt&quot;;
        memstatistics-file &quot;/var/named/data/named_mem_stats.txt&quot;;
        allow-query     { any; };

        /*
         - 如果你要建立一个 授权域名服务器 服务器, 那么不要开启 recursion（递归） 功能。
         - 如果你要建立一个 递归 DNS 服务器, 那么需要开启recursion 功能。
         - 如果你的递归DNS服务器有公网IP地址, 你必须开启访问控制功能，
           只有那些合法用户才可以发询问. 如果不这么做的话，那么你的服
           服务就会受到DNS 放大攻击。实现BCP38将有效抵御这类攻击。
        */
        recursion yes;

        dnssec-enable yes;
        dnssec-validation yes;
        dnssec-lookaside auto;

        /* Path to ISC DLV key */
        bindkeys-file &quot;/etc/named.iscdlv.key&quot;;

        managed-keys-directory &quot;/var/named/dynamic&quot;;
    
        pid-file &quot;/run/named/named.pid&quot;;
        session-keyfile &quot;/run/named/session.key&quot;;
};

logging {
        channel default_debug {
                file &quot;data/named.run&quot;;
                severity dynamic;
        };
};

zone &quot;.&quot; IN {
        type hint;
        file &quot;named.ca&quot;;
};

zone &quot;example.local&quot; {
    type master;
    file &quot;example.local.zone&quot;;
};

zone &quot;0.168.192.in-addr.arpa&quot; IN {
        type master;
        file &quot;192.168.0.zone&quot;;
};

include &quot;/etc/named.rfc1912.zones&quot;;
include &quot;/etc/named.root.key&quot;;
</code></pre><h3 id="_7、-为-example-local-域名创建转发域与反向域文件" tabindex="-1">7、 为 example.local 域名创建转发域与反向域文件 <a class="header-anchor" href="#_7、-为-example-local-域名创建转发域与反向域文件" aria-label="Permalink to “7、 为 example.local 域名创建转发域与反向域文件”">​</a></h3><h4 id="a-创建转发域" tabindex="-1">a)创建转发域 <a class="header-anchor" href="#a-创建转发域" aria-label="Permalink to “a)创建转发域”">​</a></h4><pre><code>[root@centos7 ~]# vi /var/named/chroot/var/named/example.local.zone
</code></pre><p>添加如下内容并保存：</p><pre><code>;
;       Addresses and other host information.
;
$TTL 86400
@       IN      SOA     example.local. hostmaster.example.local. (
                               2014101901      ; Serial
                               43200      ; Refresh
                               3600       ; Retry
                               3600000    ; Expire
                               2592000 )  ; Minimum

;       Define the nameservers and the mail servers

               IN      NS      ns1.example.local.
               IN      NS      ns2.example.local.
               IN      A       192.168.0.70
               IN      MX      10 mx.example.local.

centos7          IN      A       192.168.0.70
mx               IN      A       192.168.0.50
ns1              IN      A       192.168.0.70
ns2              IN      A       192.168.0.80
</code></pre><h4 id="b-创建反向域" tabindex="-1">b)创建反向域 <a class="header-anchor" href="#b-创建反向域" aria-label="Permalink to “b)创建反向域”">​</a></h4><pre><code>[root@centos7 ~]# vi /var/named/chroot/var/named/192.168.0.zone
</code></pre><p>--</p><pre><code>;
;       Addresses and other host information.
;
$TTL 86400
@       IN      SOA     example.local. hostmaster.example.local. (
                               2014101901      ; Serial
                               43200      ; Refresh
                               3600       ; Retry
                               3600000    ; Expire
                               2592000 )  ; Minimum

0.168.192.in-addr.arpa. IN      NS      centos7.example.local.

70.0.168.192.in-addr.arpa. IN PTR mx.example.local.
70.0.168.192.in-addr.arpa. IN PTR ns1.example.local.
80.0.168.192.in-addr.arpa. IN PTR ns2.example.local.。
</code></pre><h3 id="_8、开机自启动-bind-chroot-服务" tabindex="-1">8、开机自启动 bind-chroot 服务： <a class="header-anchor" href="#_8、开机自启动-bind-chroot-服务" aria-label="Permalink to “8、开机自启动 bind-chroot 服务：”">​</a></h3><pre><code>[root@centos7 ~]# /usr/libexec/setup-named-chroot.sh /var/named/chroot on
[root@centos7 ~]# systemctl stop named
[root@centos7 ~]# systemctl disable named
[root@centos7 ~]# systemctl start named-chroot
[root@centos7 ~]# systemctl enable named-chroot
ln -s &#39;/usr/lib/systemd/system/named-chroot.service&#39; &#39;/etc/systemd/system/multi-user.target.wants/named-chroot.service&#39;
</code></pre><hr>`,32)),r("p",null,[e[1]||(e[1]=n("via: ",-1)),t(o,{href:"http://www.ehowstuff.com/how-to-setup-bind-chroot-dns-server-on-centos-7-0-vps/"},{default:a(()=>[...e[0]||(e[0]=[n("http://www.ehowstuff.com/how-to-setup-bind-chroot-dns-server-on-centos-7-0-vps/",-1)])]),_:1})]),r("p",null,[e[5]||(e[5]=n("作者：",-1)),t(o,{href:"http://www.ehowstuff.com/author/mhstar/"},{default:a(()=>[...e[2]||(e[2]=[n("skytech",-1)])]),_:1}),e[6]||(e[6]=n(" 译者：",-1)),t(o,{href:"https://github.com/SPccman"},{default:a(()=>[...e[3]||(e[3]=[n("SPccman",-1)])]),_:1}),e[7]||(e[7]=n(" 校对：",-1)),t(o,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[n("wxy",-1)])]),_:1})]),r("p",null,[e[10]||(e[10]=n("本文由 ",-1)),t(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原创翻译，",-1)),t(o,{href:"http://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[n("Linux中国",-1)])]),_:1}),e[12]||(e[12]=n(" 荣誉推出",-1))])])}const C=d(m,[["render",h]]);export{N as __pageData,C as default};
