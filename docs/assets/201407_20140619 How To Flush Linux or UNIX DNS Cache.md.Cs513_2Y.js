import{_ as d,a0 as o,w as l,s as p,I as s,x as e,a1 as i,A as a,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"如何在 Linux/Unix/Mac 下清除 DNS 查询缓存 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux/Unix/Mac 下清除 DNS 查询缓存 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux/Unix/Mac 下清除 DNS 查询缓存 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux/Unix/Mac 下清除 DNS 查询缓存 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140619 How To Flush Linux or UNIX DNS Cache","title":"如何在 Linux/Unix/Mac 下清除 DNS 查询缓存","tag":"201407","desc":""},"relativePath":"201407/20140619 How To Flush Linux or UNIX DNS Cache.md","filePath":"[post].md"}'),c={name:"201407/20140619 How To Flush Linux or UNIX DNS Cache.md"};function u(f,n,h,x,m,N){const t=o("Link");return l(),p("div",null,[n[18]||(n[18]=s("h1",{id:"如何在-linux-unix-mac-下清除-dns-查询缓存",tabindex:"-1"},[e("如何在 Linux/Unix/Mac 下清除 DNS 查询缓存 "),s("a",{class:"header-anchor",href:"#如何在-linux-unix-mac-下清除-dns-查询缓存","aria-label":"Permalink to “如何在 Linux/Unix/Mac 下清除 DNS 查询缓存”"},"​")],-1)),n[19]||(n[19]=s("p",null,[s("img",{src:"http://figs.cyberciti.biz/3rdparty/configure.png",alt:""})],-1)),n[20]||(n[20]=s("p",null,"我在Linux下使用拨号连接上网，频繁的拨号断线造成DNS的问题。我如何在Linux/Unix发行版下使用shell命令清除DNS缓存？",-1)),s("p",null,[n[1]||(n[1]=e("在MS-Windows下,你可以使用",-1)),i(t,{href:"http://theos.in/windows-vista/flush-dns-cache-with-ipconfig/"},{default:a(()=>[...n[0]||(n[0]=[e("ipconfig命令来清除dns缓存",-1)])]),_:1}),n[2]||(n[2]=e("。然而，Linux和Unix提供了不同的方法来清除缓存。Linux可以运行 nscd 或者 BIND 或者 dnsmasq 作为名称服务缓存守护进程。大型或者工作组服务器可能使用BIND或者dnsmasq作为专用缓存服务器来加速查询。",-1))]),n[21]||(n[21]=r(`<h3 id="如何-清除-nscd-dns-缓存" tabindex="-1">如何: 清除 nscd dns 缓存 <a class="header-anchor" href="#如何-清除-nscd-dns-缓存" aria-label="Permalink to “如何: 清除 nscd dns 缓存”">​</a></h3><p>Nscd 会缓存libc发起的名称服务的请求。如果把检索NSS数据看做很慢，那么nscd能够显著加快连续访问同一数据的速度，并能提高整个系统的性能。只需重启nscd即可刷新缓存：</p><pre><code>$ sudo /etc/init.d/nscd restart
</code></pre><p>或</p><pre><code># service nscd restart
</code></pre><p>或</p><pre><code># service nscd reload
</code></pre><p>这个守护进程给最常用的名称服务请求提供了高速缓存。默认的配置文件/etc/nscd.conf，其决定了高速缓存守护进程的行为。</p><h3 id="清除-dnsmasq-dns-缓存" tabindex="-1">清除 dnsmasq dns 缓存 <a class="header-anchor" href="#清除-dnsmasq-dns-缓存" aria-label="Permalink to “清除 dnsmasq dns 缓存”">​</a></h3>`,9)),s("p",null,[i(t,{href:"http://www.cyberciti.biz/tips/how-do-i-improve-dns-performance-on-linuxwindows-desktop.html"},{default:a(()=>[...n[3]||(n[3]=[e("dnsmasq的是一个轻量级的DNS",-1)])]),_:1}),n[4]||(n[4]=e("、TFTP和DHCP服务器。它的目的是给局域网提供配对的DNS和DHCP服务。 dnsmasq接受DNS查询，并从一个小的本地高速缓存应答它们或将其转发到一个真正的递归DNS服务器。该软件也被安装在很多便宜的路由器上来缓存DNS查询。只需重新启动dnsmasq的服务来清除DNS缓存：",-1))]),n[22]||(n[22]=r(`<pre><code>$ sudo /etc/init.d/dnsmasq restart
</code></pre><p>或者</p><pre><code># service dnsmasq restart
</code></pre><h3 id="清除bind缓存服务器的dns缓存" tabindex="-1">清除BIND缓存服务器的dns缓存 <a class="header-anchor" href="#清除bind缓存服务器的dns缓存" aria-label="Permalink to “清除BIND缓存服务器的dns缓存”">​</a></h3><p>一台BIND缓存服务器从另一台服务器（区域主）响应主机的查询而获得信息，然后保存（缓存)数据到本地。您所要做的就是重启BIND以清除其缓存：</p><pre><code># /etc/init.d/named restart
</code></pre><p>你也可以使用下面rndc命令来清除所有的缓存:</p><pre><code># rndc restart
</code></pre><p>或者</p><pre><code># rndc exec
</code></pre><p>BIND v9.3.0 及其以上版本支持一个清除一个特定域名的所有记录缓存的命令：rndc flushname。本例中刷新cyberciti.biz相关域的所有记录：</p><pre><code># rndc flushname cyberciti.biz
</code></pre><p>同样也可以清除BIND View。比如，LAN和WAN的View可以用下面的命令清除:</p><pre><code># rndc flush lan
# rndc flush wan
</code></pre><h3 id="给-mac-os-x-unix-用户的提示" tabindex="-1">给 Mac OS X Unix 用户的提示 <a class="header-anchor" href="#给-mac-os-x-unix-用户的提示" aria-label="Permalink to “给 Mac OS X Unix 用户的提示”">​</a></h3><p>Mac下用root用户输入下面的命令:</p><pre><code># dscacheutil -flushcache
</code></pre><p>或者</p><pre><code>$ sudo dscacheutil -flushcache
</code></pre><p>如果你正在使用OSX 10.5 或者更早的版本，尝试使用下面的命令：</p><pre><code>lookupd -flushcache
</code></pre><h3 id="关于-etc-hosts-文件的一个提示" tabindex="-1">关于 /etc/hosts 文件的一个提示 <a class="header-anchor" href="#关于-etc-hosts-文件的一个提示" aria-label="Permalink to “关于 /etc/hosts 文件的一个提示”">​</a></h3><p>/etc/hosts用作静态查询主机的表格。你需要在类Unix操作系统下依据你的要求移除并且/或者更新它：</p><pre><code># vi /etc/hosts
</code></pre><h4 id="示例输出" tabindex="-1">示例输出: <a class="header-anchor" href="#示例输出" aria-label="Permalink to “示例输出:”">​</a></h4><pre><code>127.0.0.1	localhost
127.0.1.1	wks01.WAG160N	wks01
# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
10.37.34.2     build
192.168.1.10	nas01
192.168.1.11	nas02
192.168.1.12	nas03
#192.168.2.50	nfs2.nixcraft.net.in nfs2
#192.168.2.51	nfs1.nixcraft.net.in nfs1
172.168.232.50  nfs1.nixcraft.net.in nfs1
172.168.232.51  nfs2.nixcraft.net.in nfs2
192.168.1.101	vm01
</code></pre><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to “参考”">​</a></h3>`,27)),s("p",null,[n[6]||(n[6]=e("相关: 在Windows Vista / XP中用ipconfig 命令",-1)),i(t,{href:"http://theos.in/windows-vista/flush-dns-cache-with-ipconfig/"},{default:a(()=>[...n[5]||(n[5]=[e("清除 DNS 缓存",-1)])]),_:1})]),n[23]||(n[23]=s("hr",null,null,-1)),s("p",null,[n[8]||(n[8]=e("via: ",-1)),i(t,{href:"http://www.cyberciti.biz/faq/rhel-debian-ubuntu-flush-clear-dns-cache/"},{default:a(()=>[...n[7]||(n[7]=[e("http://www.cyberciti.biz/faq/rhel-debian-ubuntu-flush-clear-dns-cache/",-1)])]),_:1})]),s("p",null,[n[11]||(n[11]=e("译者：",-1)),i(t,{href:"https://github.com/geekpi"},{default:a(()=>[...n[9]||(n[9]=[e("geekpi",-1)])]),_:1}),n[12]||(n[12]=e(" 校对：",-1)),i(t,{href:"https://github.com/wxy"},{default:a(()=>[...n[10]||(n[10]=[e("wxy",-1)])]),_:1})]),s("p",null,[n[15]||(n[15]=e("本文由 ",-1)),i(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...n[13]||(n[13]=[e("LCTT",-1)])]),_:1}),n[16]||(n[16]=e(" 原创翻译，",-1)),i(t,{href:"http://linux.cn/"},{default:a(()=>[...n[14]||(n[14]=[e("Linux中国",-1)])]),_:1}),n[17]||(n[17]=e(" 荣誉推出",-1))])])}const w=d(c,[["render",u]]);export{T as __pageData,w as default};
