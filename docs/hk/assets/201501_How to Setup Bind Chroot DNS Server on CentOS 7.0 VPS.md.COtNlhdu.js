import{_ as d,a0 as s,w as i,s as c,ao as l,I as r,x as n,a1 as t,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const N=JSON.parse('{"title":"在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服務器 | LCTT x X-CMD","titleTemplate":false,"description":"在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服務器 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服務器 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/How to Setup Bind Chroot DNS Server on CentOS 7.0 VPS","title":"在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服務器","tag":"201501","desc":""},"relativePath":"201501/How to Setup Bind Chroot DNS Server on CentOS 7.0 VPS.md","filePath":"[post].md"}'),m={name:"201501/How to Setup Bind Chroot DNS Server on CentOS 7.0 VPS.md"};function h(p,e,u,b,f,S){const o=s("Link");return i(),c("div",null,[e[13]||(e[13]=l(`<h1 id="在-centos7-0-上搭建-chroot-的-bind-dns-服務器" tabindex="-1">在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服務器 <a class="header-anchor" href="#在-centos7-0-上搭建-chroot-的-bind-dns-服務器" aria-label="Permalink to “在 CentOS7.0 上搭建 Chroot 的 Bind DNS 服務器”">​</a></h1><p>BIND（Berkeley internet Name Daemon)也叫做NAMED，是現今互聯網上使用最為廣泛的DNS 服務器程序。這篇文章將要講述如何在 chroot 監牢中運行 BIND，這樣它就無法訪問文件系統中除“監牢”以外的其它部分。</p><p>例如，在這篇文章中，我會將BIND的運行根目錄改為 /var/named/chroot/。當然，對於BIND來説，這個目錄就是 /（根目錄）。 “jail”（監牢，下同）是一個軟件機制，其功能是使得某個程序無法訪問規定區域之外的資源，同樣也為了增強安全性（LCTT 譯註：chroot “監牢”，所謂“監牢”就是指通過chroot機制來更改某個進程所能看到的根目錄，即將某進程限制在指定目錄中，保證該進程只能對該目錄及其子目錄的文件進行操作，從而保證整個服務器的安全）。Bind Chroot DNS 服務器的默認“監牢”為 /var/named/chroot。你可以按照下列步驟，在CentOS 7.0 上部署 Bind Chroot DNS 服務器。</p><h3 id="_1、安裝bind-chroot-dns-服務器" tabindex="-1">1、安裝Bind Chroot DNS 服務器 <a class="header-anchor" href="#_1、安裝bind-chroot-dns-服務器" aria-label="Permalink to “1、安裝Bind Chroot DNS 服務器”">​</a></h3><pre><code>	[root@centos7 ~]# yum install bind-chroot bind -y
</code></pre><h3 id="_2、拷貝bind相關文件-準備bind-chroot-環境" tabindex="-1">2、拷貝bind相關文件,準備bind chroot 環境 <a class="header-anchor" href="#_2、拷貝bind相關文件-準備bind-chroot-環境" aria-label="Permalink to “2、拷貝bind相關文件,準備bind chroot 環境”">​</a></h3><pre><code>	[root@centos7 ~]# cp -R /usr/share/doc/bind-*/sample/var/named/* /var/named/chroot/var/named/
</code></pre><h3 id="_3、在bind-chroot-的目錄中創建相關文件" tabindex="-1">3、在bind chroot 的目錄中創建相關文件 <a class="header-anchor" href="#_3、在bind-chroot-的目錄中創建相關文件" aria-label="Permalink to “3、在bind chroot 的目錄中創建相關文件”">​</a></h3><pre><code>    [root@centos7 ~]# touch /var/named/chroot/var/named/data/cache_dump.db

	[root@centos7 ~]# touch /var/named/chroot/var/named/data/named_stats.txt

	[root@centos7 ~]# touch /var/named/chroot/var/named/data/named_mem_stats.txt

	[root@centos7 ~]# touch /var/named/chroot/var/named/data/named.run

	[root@centos7 ~]# mkdir /var/named/chroot/var/named/dynamic

	[root@centos7 ~]# touch /var/named/chroot/var/named/dynamic/managed-keys.bind
</code></pre><h3 id="_4、-將-bind-鎖定文件設置為可寫" tabindex="-1">4、 將 Bind 鎖定文件設置為可寫 <a class="header-anchor" href="#_4、-將-bind-鎖定文件設置為可寫" aria-label="Permalink to “4、 將 Bind 鎖定文件設置為可寫”">​</a></h3><pre><code>	[root@centos7 ~]# chmod -R 777 /var/named/chroot/var/named/data
	[root@centos7 ~]# chmod -R 777 /var/named/chroot/var/named/dynamic
</code></pre><h3 id="_5、-將-etc-named-conf-拷貝到-bind-chroot目錄" tabindex="-1">5、 將 /etc/named.conf 拷貝到 bind chroot目錄 <a class="header-anchor" href="#_5、-將-etc-named-conf-拷貝到-bind-chroot目錄" aria-label="Permalink to “5、 將 /etc/named.conf 拷貝到 bind chroot目錄”">​</a></h3><pre><code>	[root@centos7 ~]# cp -p /etc/named.conf /var/named/chroot/etc/named.conf
</code></pre><h3 id="_6、-在-etc-named-conf中對-bind-進行配置。" tabindex="-1">6、 在/etc/named.conf中對 bind 進行配置。 <a class="header-anchor" href="#_6、-在-etc-named-conf中對-bind-進行配置。" aria-label="Permalink to “6、 在/etc/named.conf中對 bind 進行配置。”">​</a></h3><p>在 named.conf 文件尾添加 <strong>example.local</strong> 域信息， 創建轉發域（Forward Zone）與反向域（Reverse Zone）（LCTT 譯註：這裏example.local 並非一個真實有效的互聯網域名，而是通常用於本地測試的一個域名；如果你需要做權威 DNS 解析，你可以將你擁有的域名如這裏所示配置解析。）：</p><pre><code>	[root@centos7 ~]# vi /var/named/chroot/etc/named.conf
</code></pre><p>-- .. .. zone &quot;example.local&quot; { type master; file &quot;example.local.zone&quot;; };</p><pre><code>zone &quot;0.168.192.in-addr.arpa&quot; IN {
        type master;
        file &quot;192.168.0.zone&quot;;
};
..
..
</code></pre><p>named.conf 完全配置如下：</p><pre><code>//
// named.conf
//
// 由Red Hat提供，將 ISC BIND named(8) DNS服務器 
// 配置為暫存域名服務器 (用來做本地DNS解析).
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
         - 如果你要建立一個 授權域名服務器 服務器, 那麼不要開啓 recursion（遞歸） 功能。
         - 如果你要建立一個 遞歸 DNS 服務器, 那麼需要開啓recursion 功能。
         - 如果你的遞歸DNS服務器有公網IP地址, 你必須開啓訪問控制功能，
           只有那些合法用户才可以發詢問. 如果不這麼做的話，那麼你的服
           服務就會受到DNS 放大攻擊。實現BCP38將有效抵禦這類攻擊。
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
</code></pre><h3 id="_7、-為-example-local-域名創建轉發域與反向域文件" tabindex="-1">7、 為 example.local 域名創建轉發域與反向域文件 <a class="header-anchor" href="#_7、-為-example-local-域名創建轉發域與反向域文件" aria-label="Permalink to “7、 為 example.local 域名創建轉發域與反向域文件”">​</a></h3><h4 id="a-創建轉發域" tabindex="-1">a)創建轉發域 <a class="header-anchor" href="#a-創建轉發域" aria-label="Permalink to “a)創建轉發域”">​</a></h4><pre><code>[root@centos7 ~]# vi /var/named/chroot/var/named/example.local.zone
</code></pre><p>添加如下內容並保存：</p><pre><code>;
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
</code></pre><h4 id="b-創建反向域" tabindex="-1">b)創建反向域 <a class="header-anchor" href="#b-創建反向域" aria-label="Permalink to “b)創建反向域”">​</a></h4><pre><code>[root@centos7 ~]# vi /var/named/chroot/var/named/192.168.0.zone
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
</code></pre><h3 id="_8、開機自啓動-bind-chroot-服務" tabindex="-1">8、開機自啓動 bind-chroot 服務： <a class="header-anchor" href="#_8、開機自啓動-bind-chroot-服務" aria-label="Permalink to “8、開機自啓動 bind-chroot 服務：”">​</a></h3><pre><code>[root@centos7 ~]# /usr/libexec/setup-named-chroot.sh /var/named/chroot on
[root@centos7 ~]# systemctl stop named
[root@centos7 ~]# systemctl disable named
[root@centos7 ~]# systemctl start named-chroot
[root@centos7 ~]# systemctl enable named-chroot
ln -s &#39;/usr/lib/systemd/system/named-chroot.service&#39; &#39;/etc/systemd/system/multi-user.target.wants/named-chroot.service&#39;
</code></pre><hr>`,32)),r("p",null,[e[1]||(e[1]=n("via: ",-1)),t(o,{href:"http://www.ehowstuff.com/how-to-setup-bind-chroot-dns-server-on-centos-7-0-vps/"},{default:a(()=>[...e[0]||(e[0]=[n("http://www.ehowstuff.com/how-to-setup-bind-chroot-dns-server-on-centos-7-0-vps/",-1)])]),_:1})]),r("p",null,[e[5]||(e[5]=n("作者：",-1)),t(o,{href:"http://www.ehowstuff.com/author/mhstar/"},{default:a(()=>[...e[2]||(e[2]=[n("skytech",-1)])]),_:1}),e[6]||(e[6]=n(" 譯者：",-1)),t(o,{href:"https://github.com/SPccman"},{default:a(()=>[...e[3]||(e[3]=[n("SPccman",-1)])]),_:1}),e[7]||(e[7]=n(" 校對：",-1)),t(o,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[n("wxy",-1)])]),_:1})]),r("p",null,[e[10]||(e[10]=n("本文由 ",-1)),t(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原創翻譯，",-1)),t(o,{href:"http://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[n("Linux中國",-1)])]),_:1}),e[12]||(e[12]=n(" 榮譽推出",-1))])])}const C=d(m,[["render",h]]);export{N as __pageData,C as default};
