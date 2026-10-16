import{_ as l,a0 as t,w as o,s as r,ao as c,I as i,x as n,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"Securi-Pi：使用树莓派作为安全跳板 | LCTT x X-CMD","titleTemplate":false,"description":"Securi-Pi：使用树莓派作为安全跳板 | LCTT (201607) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Securi-Pi：使用树莓派作为安全跳板 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Securi-Pi：使用树莓派作为安全跳板 | LCTT (201607) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201607/20151215 Securi-Pi--Using the Raspberry Pi as a Secure Landing Point","title":"Securi-Pi：使用树莓派作为安全跳板","tag":"201607","desc":""},"relativePath":"201607/20151215 Securi-Pi--Using the Raspberry Pi as a Secure Landing Point.md","filePath":"[post].md"}'),d={name:"201607/20151215 Securi-Pi--Using the Raspberry Pi as a Secure Landing Point.md"};function h(u,s,g,b,k,m){const a=t("Link");return o(),r("div",null,[s[29]||(s[29]=c(`<h1 id="securi-pi-使用树莓派作为安全跳板" tabindex="-1">Securi-Pi：使用树莓派作为安全跳板 <a class="header-anchor" href="#securi-pi-使用树莓派作为安全跳板" aria-label="Permalink to “Securi-Pi：使用树莓派作为安全跳板”">​</a></h1><p>像很多 LinuxJournal 的读者一样，我也过上了当今非常普遍的“科技游牧”生活，在网络之间，从一个接入点到另一个接入点，我们身处现实世界的不同地方却始终保持连接到互联网和日常使用的其它网络上。近来我发现越来越多的网络环境开始屏蔽对外的常用端口比如 SMTP（端口25），SSH（端口22）之类的。当你走进一家咖啡馆然后想 SSH 到你的一台服务器上做点事情的时候发现端口 22 被屏蔽了是一件很烦的事情。</p><p>不过，我到目前为止还没发现有什么网络环境会把 HTTPS 给墙了（端口443）。在稍微配置了一下家中的树莓派 2 之后，我成功地让自己通过接入树莓派的 443 端口充当跳板，从而让我在各种网络环境下都能连上想要的目标端口。简而言之，我把家中的树莓派设置成了一个 OpenVPN 的端点和 SSH 端点，同时也是一个 Apache 服务器，所有这些服务都监听在 443 端口上，以便可以限制我不想暴露的网络服务。</p><h3 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-label="Permalink to “备注”">​</a></h3><p>此解决方案能搞定大多数有限制的网络环境，但有些防火墙会对外部流量调用深度包检查（Deep packet inspection），它们时常能屏蔽掉用本篇文章里的方式传输的信息。不过我到目前为止还没在这样的防火墙后测试过。同时，尽管我使用了很多基于密码学的工具（OpenVPN，HTTPS，SSH），我并没有非常严格地审计过这套配置方案（LCTT 译注：作者的意思是指这套方案能帮你绕过端口限制，但不代表你的活动就是完全安全的）。有时候甚至 DNS 服务都会泄露你的信息，很可能在我没有考虑周到的角落里会有遗漏。我强烈不推荐把此跳板配置方案当作是万无一失的隐藏网络流量的办法，此配置只是希望能绕过一些端口限制连上网络，而不是做一些危险的事情。</p><h3 id="起步" tabindex="-1">起步 <a class="header-anchor" href="#起步" aria-label="Permalink to “起步”">​</a></h3><p>让我们先从你需要什么说起，我用的是树莓派 2，装载了最新版本的 Raspbian，不过这个配置也应该能在树莓派 Model B 上运行；512MB 的内存对我们来说绰绰有余了，虽然性能可能没有树莓派 2这么好，毕竟相比于四核心的树莓派 2， Model B 只有一颗单核心 CPU。我的树莓派放置在家里的防火墙和路由器的后面，所以我还能用这个树莓派作为跳板访问家里的其他电子设备。同时这也意味着我的流量在互联网上看起来仿佛来自我家的 ip 地址，所以这也算某种意义上保护了我的匿名性。如果你没有树莓派，或者不想从家里运行这个服务，那你完全可以把这个配置放在一台小型云服务器上（LCTT 译注：比如 IPS ）。你只要确保服务器运行着基于 Debian 的 Linux 发行版即可，这份指南依然可用。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1002061/11913f1.jpg" alt=""></p><p><em>图 1 树莓派，即将成为我们的加密网络端点</em></p><h3 id="安装并配置-bind" tabindex="-1">安装并配置 BIND <a class="header-anchor" href="#安装并配置-bind" aria-label="Permalink to “安装并配置 BIND”">​</a></h3><p>无论你是用树莓派还是一台服务器，当你成功启动之后你就可以安装 BIND 了，这是一个驱动了互联网相当一部分的域名服务软件。你将会把 BIND 仅仅作为缓存域名服务使用，而不用把它配置为用来处理来自互联网的域名请求。安装 BIND 会让你拥有一个可以被 OpenVPN 使用的 DNS 服务器。安装 BIND 十分简单，<code>apt-get</code> 就可以直接搞定:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# apt-get install bind9</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree</span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>The following extra packages will be installed:</span></span>
<span class="line"><span>  bind9utils</span></span>
<span class="line"><span>Suggested packages:</span></span>
<span class="line"><span>  bind9-doc resolvconf ufw</span></span>
<span class="line"><span>The following NEW packages will be installed:</span></span>
<span class="line"><span>  bind9 bind9utils</span></span>
<span class="line"><span>0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.</span></span>
<span class="line"><span>Need to get 490 kB of archives.</span></span>
<span class="line"><span>After this operation, 1,128 kB of additional disk space will be used.</span></span>
<span class="line"><span>Do you want to continue [Y/n]? y</span></span></code></pre></div><p>在我们把 BIND 作为缓存域名服务器之前，还有一些小细节需要配置。两个修改都在<code>/etc/bind/named.conf.options</code>里完成。首先你要取消注释掉 forwarders 这一节内容，同时你还要增加一个可以转发域名请求的目标服务器。作为例子我会用 Google 的 DNS 服务器（8.8.8.8）（LCTT 译注：国内的话需要找一个替代品）；文件的 forwarders 节看上去大致是这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>forwarders {</span></span>
<span class="line"><span>    8.8.8.8;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>第二点你需要做的更改是允许来自内网和本机的查询请求，直接把这一行加入配置文件的后面，记得放在最后一个<code>};</code>之前就可以了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>allow-query { 192.168.1.0/24; 127.0.0.0/16; };</span></span></code></pre></div><p>上面那行配置会允许此 DNS 服务器接收来自其所在的网络（在本例中，我的网络就在我的防火墙之后）和本机的请求。下一步，你需要重启一下 BIND 的服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# /etc/init.d/bind9 restart</span></span>
<span class="line"><span>[....] Stopping domain name service...: bind9waiting for pid 13209 to die</span></span>
<span class="line"><span>. ok</span></span>
<span class="line"><span>[ ok ] Starting domain name service...: bind9.</span></span></code></pre></div><p>现在你可以测试一下 <code>nslookup</code> 来确保你的服务正常运行了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# nslookup</span></span>
<span class="line"><span>&gt; server localhost</span></span>
<span class="line"><span>Default server: localhost</span></span>
<span class="line"><span>Address: 127.0.0.1#53</span></span>
<span class="line"><span>&gt; www.google.com</span></span>
<span class="line"><span>Server:		localhost</span></span>
<span class="line"><span>Address:	127.0.0.1#53</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Non-authoritative answer:</span></span>
<span class="line"><span>Name:	www.google.com</span></span>
<span class="line"><span>Address: 173.194.33.176</span></span>
<span class="line"><span>Name:	www.google.com</span></span>
<span class="line"><span>Address: 173.194.33.177</span></span>
<span class="line"><span>Name:	www.google.com</span></span>
<span class="line"><span>Address: 173.194.33.178</span></span>
<span class="line"><span>Name:	www.google.com</span></span>
<span class="line"><span>Address: 173.194.33.179</span></span>
<span class="line"><span>Name:	www.google.com</span></span>
<span class="line"><span>Address: 173.194.33.180</span></span></code></pre></div><p>完美！现在你的系统里已经有一个正常的域名服务在工作了，下一步我们来配置一下OpenVPN。</p><h3 id="安装并配置-openvpn" tabindex="-1">安装并配置 OpenVPN <a class="header-anchor" href="#安装并配置-openvpn" aria-label="Permalink to “安装并配置 OpenVPN”">​</a></h3><p>OpenVPN 是一个运用 SSL/TLS 作为密钥交换的开源 VPN 解决方案。同时它也非常便于在 Linux 环境下部署。配置 OpenVPN 可能有一点点难，不过其实你也不需要在默认的配置文件里做太多修改。首先你需要运行一下 <code>apt-get</code> 来安装 OpenVPN：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# apt-get install openvpn</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree</span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>The following extra packages will be installed:</span></span>
<span class="line"><span>  liblzo2-2 libpkcs11-helper1</span></span>
<span class="line"><span>Suggested packages:</span></span>
<span class="line"><span>  resolvconf</span></span>
<span class="line"><span>The following NEW packages will be installed:</span></span>
<span class="line"><span>  liblzo2-2 libpkcs11-helper1 openvpn</span></span>
<span class="line"><span>0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.</span></span>
<span class="line"><span>Need to get 621 kB of archives.</span></span>
<span class="line"><span>After this operation, 1,489 kB of additional disk space will be used.</span></span>
<span class="line"><span>Do you want to continue [Y/n]? y</span></span></code></pre></div><p>现在 OpenVPN 已经安装好了，你需要去配置它了。OpenVPN 是基于 SSL 的，并且它同时依赖于服务端和客户端两方的证书来工作。为了生成这些证书，你需要在机器上配置一个证书签发（CA）。幸运地，OpenVPN 在安装中自带了一些用于生成证书的脚本比如 “easy-rsa” 来帮助你加快这个过程。你将要创建一个文件目录用于放置 easy-rsa 脚本，从模板目录复制过来：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# mkdir /etc/openvpn/easy-rsa</span></span>
<span class="line"><span>root@test:~# cp -rpv /usr/share/doc/openvpn/examples/easy-rsa/2.0/* /etc/openvpn/easy-rsa/</span></span></code></pre></div><p>下一步，把 vars 文件复制一个备份：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# cp vars vars.bak</span></span></code></pre></div><p>接下来，编辑一下 vars 以让其中的信息符合你的状态。我将以我需要编辑的信息作为例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>KEY_SIZE=4096</span></span>
<span class="line"><span>KEY_COUNTRY=&quot;US&quot;</span></span>
<span class="line"><span>KEY_PROVINCE=&quot;CA&quot;</span></span>
<span class="line"><span>KEY_CITY=&quot;Silicon Valley&quot;</span></span>
<span class="line"><span>KEY_ORG=&quot;Linux Journal&quot;</span></span>
<span class="line"><span>KEY_EMAIL=&quot;bill.childers@linuxjournal.com&quot;</span></span></code></pre></div><p>下一步是导入（source）一下 vars 中的环境变量，这样系统就能把其中的信息当作环境变量处理了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# source ./vars</span></span>
<span class="line"><span>NOTE: If you run ./clean-all, I will be doing a rm -rf on /etc/openvpn/easy-rsa/keys</span></span></code></pre></div><h3 id="搭建-ca-证书签发" tabindex="-1">搭建 CA（证书签发） <a class="header-anchor" href="#搭建-ca-证书签发" aria-label="Permalink to “搭建 CA（证书签发）”">​</a></h3><p>接下来你要运行一下 <code>clean-all</code> 来确保有一个清理干净的系统工作环境，紧接着你就要做证书签发了。注意一下我修改了一些 changeme 的所提示修改的内容以符合我需要的安装情况：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# ./clean-all</span></span>
<span class="line"><span>root@test:/etc/openvpn/easy-rsa# ./build-ca</span></span>
<span class="line"><span>Generating a 4096 bit RSA private key</span></span>
<span class="line"><span>...................................................++</span></span>
<span class="line"><span>...................................................++</span></span>
<span class="line"><span>writing new private key to &#39;ca.key&#39;</span></span>
<span class="line"><span>-----</span></span>
<span class="line"><span>You are about to be asked to enter information that</span></span>
<span class="line"><span>will be incorporated into your certificate request.</span></span>
<span class="line"><span>What you are about to enter is what is called a</span></span>
<span class="line"><span>Distinguished Name or a DN.</span></span>
<span class="line"><span>There are quite a few fields but you can leave some</span></span>
<span class="line"><span>blank. For some fields there will be a default value,</span></span>
<span class="line"><span>If you enter &#39;.&#39;, the field will be left blank.</span></span>
<span class="line"><span>-----</span></span>
<span class="line"><span>Country Name (2 letter code) [US]:</span></span>
<span class="line"><span>State or Province Name (full name) [CA]:</span></span>
<span class="line"><span>Locality Name (eg, city) [Silicon Valley]:</span></span>
<span class="line"><span>Organization Name (eg, company) [Linux Journal]:</span></span>
<span class="line"><span>Organizational Unit Name (eg, section) [changeme]:SecTeam</span></span>
<span class="line"><span>Common Name (eg, your name or your server&#39;s hostname) [changeme]:test.linuxjournal.com</span></span>
<span class="line"><span>Name [changeme]:test.linuxjournal.com</span></span>
<span class="line"><span>Email Address [bill.childers@linuxjournal.com]:</span></span></code></pre></div><h3 id="生成服务端证书" tabindex="-1">生成服务端证书 <a class="header-anchor" href="#生成服务端证书" aria-label="Permalink to “生成服务端证书”">​</a></h3><p>一旦 CA 创建好了，你接着就可以生成客户端的 OpenVPN 证书了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# ./build-key-server test.linuxjournal.com</span></span>
<span class="line"><span>Generating a 4096 bit RSA private key</span></span>
<span class="line"><span>...................................................++</span></span>
<span class="line"><span>writing new private key to &#39;test.linuxjournal.com.key&#39;</span></span>
<span class="line"><span>-----</span></span>
<span class="line"><span>You are about to be asked to enter information that</span></span>
<span class="line"><span>will be incorporated into your certificate request.</span></span>
<span class="line"><span>What you are about to enter is what is called a</span></span>
<span class="line"><span>Distinguished Name or a DN.</span></span>
<span class="line"><span>There are quite a few fields but you can leave some</span></span>
<span class="line"><span>blank. For some fields there will be a default value,</span></span>
<span class="line"><span>If you enter &#39;.&#39;, the field will be left blank.</span></span>
<span class="line"><span>-----</span></span>
<span class="line"><span>Country Name (2 letter code) [US]:</span></span>
<span class="line"><span>State or Province Name (full name) [CA]:</span></span>
<span class="line"><span>Locality Name (eg, city) [Silicon Valley]:</span></span>
<span class="line"><span>Organization Name (eg, company) [Linux Journal]:</span></span>
<span class="line"><span>Organizational Unit Name (eg, section) [changeme]:SecTeam</span></span>
<span class="line"><span>Common Name (eg, your name or your server&#39;s hostname) [test.linuxjournal.com]:</span></span>
<span class="line"><span>Name [changeme]:test.linuxjournal.com</span></span>
<span class="line"><span>Email Address [bill.childers@linuxjournal.com]:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Please enter the following &#39;extra&#39; attributes</span></span>
<span class="line"><span>to be sent with your certificate request</span></span>
<span class="line"><span>A challenge password []:</span></span>
<span class="line"><span>An optional company name []:</span></span>
<span class="line"><span>Using configuration from /etc/openvpn/easy-rsa/openssl-1.0.0.cnf</span></span>
<span class="line"><span>Check that the request matches the signature</span></span>
<span class="line"><span>Signature ok</span></span>
<span class="line"><span>The Subject&#39;s Distinguished Name is as follows</span></span>
<span class="line"><span>countryName           :PRINTABLE:&#39;US&#39;</span></span>
<span class="line"><span>stateOrProvinceName   :PRINTABLE:&#39;CA&#39;</span></span>
<span class="line"><span>localityName          :PRINTABLE:&#39;Silicon Valley&#39;</span></span>
<span class="line"><span>organizationName      :PRINTABLE:&#39;Linux Journal&#39;</span></span>
<span class="line"><span>organizationalUnitName:PRINTABLE:&#39;SecTeam&#39;</span></span>
<span class="line"><span>commonName            :PRINTABLE:&#39;test.linuxjournal.com&#39;</span></span>
<span class="line"><span>name                  :PRINTABLE:&#39;test.linuxjournal.com&#39;</span></span>
<span class="line"><span>emailAddress           :IA5STRING:&#39;bill.childers@linuxjournal.com&#39;</span></span>
<span class="line"><span>Certificate is to be certified until Sep  1 06:23:59 2025 GMT (3650 days)</span></span>
<span class="line"><span>Sign the certificate? [y/n]:y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 out of 1 certificate requests certified, commit? [y/n]y</span></span>
<span class="line"><span>Write out database with 1 new entries</span></span>
<span class="line"><span>Data Base Updated</span></span></code></pre></div><p>下一步需要用掉一些时间来生成 OpenVPN 服务器需要的 Diffie-Hellman 密钥。这个步骤在一般的桌面级 CPU 上会需要几分钟的时间，但在 ARM 构架的树莓派上，会用掉超级超级长的时间。耐心点，只要终端上的点还在跳，那么一切就在按部就班运行（下面的示例省略了不少的点）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# ./build-dh</span></span>
<span class="line"><span>Generating DH parameters, 4096 bit long safe prime, generator 2</span></span>
<span class="line"><span>This is going to take a long time</span></span>
<span class="line"><span>....................................................+</span></span>
<span class="line"><span>&lt;snipped out many more dots&gt;</span></span></code></pre></div><h3 id="生成客户端证书" tabindex="-1">生成客户端证书 <a class="header-anchor" href="#生成客户端证书" aria-label="Permalink to “生成客户端证书”">​</a></h3><p>现在你要生成一下客户端用于登录 OpenVPN 的密钥。通常来说 OpenVPN 都会被配置成使用证书验证的加密方式，在这个配置下客户端需要持有由服务端签发的一份证书：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# ./build-key bills-computer</span></span>
<span class="line"><span>Generating a 4096 bit RSA private key</span></span>
<span class="line"><span>...................................................++</span></span>
<span class="line"><span>...................................................++</span></span>
<span class="line"><span>writing new private key to &#39;bills-computer.key&#39;</span></span>
<span class="line"><span>-----</span></span>
<span class="line"><span>You are about to be asked to enter information that</span></span>
<span class="line"><span>will be incorporated into your certificate request.</span></span>
<span class="line"><span>What you are about to enter is what is called a</span></span>
<span class="line"><span>Distinguished Name or a DN. There are quite a few</span></span>
<span class="line"><span>fields but you can leave some blank.</span></span>
<span class="line"><span>For some fields there will be a default value,</span></span>
<span class="line"><span>If you enter &#39;.&#39;, the field will be left blank.</span></span>
<span class="line"><span>-----</span></span>
<span class="line"><span>Country Name (2 letter code) [US]:</span></span>
<span class="line"><span>State or Province Name (full name) [CA]:</span></span>
<span class="line"><span>Locality Name (eg, city) [Silicon Valley]:</span></span>
<span class="line"><span>Organization Name (eg, company) [Linux Journal]:</span></span>
<span class="line"><span>Organizational Unit Name (eg, section) [changeme]:SecTeam</span></span>
<span class="line"><span>Common Name (eg, your name or your server&#39;s hostname) [bills-computer]:</span></span>
<span class="line"><span>Name [changeme]:bills-computer</span></span>
<span class="line"><span>Email Address [bill.childers@linuxjournal.com]:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Please enter the following &#39;extra&#39; attributes</span></span>
<span class="line"><span>to be sent with your certificate request</span></span>
<span class="line"><span>A challenge password []:</span></span>
<span class="line"><span>An optional company name []:</span></span>
<span class="line"><span>Using configuration from /etc/openvpn/easy-rsa/openssl-1.0.0.cnf</span></span>
<span class="line"><span>Check that the request matches the signature</span></span>
<span class="line"><span>Signature ok</span></span>
<span class="line"><span>The Subject&#39;s Distinguished Name is as follows</span></span>
<span class="line"><span>countryName           :PRINTABLE:&#39;US&#39;</span></span>
<span class="line"><span>stateOrProvinceName   :PRINTABLE:&#39;CA&#39;</span></span>
<span class="line"><span>localityName          :PRINTABLE:&#39;Silicon Valley&#39;</span></span>
<span class="line"><span>organizationName      :PRINTABLE:&#39;Linux Journal&#39;</span></span>
<span class="line"><span>organizationalUnitName:PRINTABLE:&#39;SecTeam&#39;</span></span>
<span class="line"><span>commonName            :PRINTABLE:&#39;bills-computer&#39;</span></span>
<span class="line"><span>name                  :PRINTABLE:&#39;bills-computer&#39;</span></span>
<span class="line"><span>emailAddress           :IA5STRING:&#39;bill.childers@linuxjournal.com&#39;</span></span>
<span class="line"><span>Certificate is to be certified until Sep  1 07:35:07 2025 GMT (3650 days)</span></span>
<span class="line"><span>Sign the certificate? [y/n]:y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 out of 1 certificate requests certified, commit? [y/n]y</span></span>
<span class="line"><span>Write out database with 1 new entries</span></span>
<span class="line"><span>Data Base Updated</span></span>
<span class="line"><span>root@test:/etc/openvpn/easy-rsa#</span></span></code></pre></div><p>现在你需要再生成一个 HMAC 码作为共享密钥来进一步增加整个加密提供的安全性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# openvpn --genkey --secret /etc/openvpn/easy-rsa/keys/ta.key</span></span></code></pre></div><h3 id="配置服务器" tabindex="-1">配置服务器 <a class="header-anchor" href="#配置服务器" aria-label="Permalink to “配置服务器”">​</a></h3><p>最后，我们到了配置 OpenVPN 服务的时候了。你需要创建一个 <code>/etc/openvpn/server.conf</code> 文件；这个配置文件的大多数地方都可以套用模板解决。设置 OpenVPN 服务的主要修改在于让它只用 TCP 而不是 UDP 链接。这是下一步所必需的---如果不是 TCP 连接那么你的服务将不能工作在端口 443 上。创建 <code>/etc/openvpn/server.conf</code> 然后把下述配置丢进去：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>port 1194</span></span>
<span class="line"><span>proto tcp</span></span>
<span class="line"><span>dev tun</span></span>
<span class="line"><span>ca easy-rsa/keys/ca.crt</span></span>
<span class="line"><span>cert easy-rsa/keys/test.linuxjournal.com.crt ## or whatever your hostname was</span></span>
<span class="line"><span>key easy-rsa/keys/test.linuxjournal.com.key  ## Hostname key - This file should be kept secret</span></span>
<span class="line"><span>management localhost 7505</span></span>
<span class="line"><span>dh easy-rsa/keys/dh4096.pem</span></span>
<span class="line"><span>tls-auth /etc/openvpn/certs/ta.key 0</span></span>
<span class="line"><span>server 10.8.0.0 255.255.255.0 # The server will use this subnet for clients connecting to it</span></span>
<span class="line"><span>ifconfig-pool-persist ipp.txt</span></span>
<span class="line"><span>push &quot;redirect-gateway def1 bypass-dhcp&quot; # Forces clients to redirect all traffic through the VPN</span></span>
<span class="line"><span>push &quot;dhcp-option DNS 192.168.1.1&quot; # Tells the client to use the DNS server at 192.168.1.1 for DNS - replace with the IP address of the OpenVPN machine and clients will use the BIND server setup earlier</span></span>
<span class="line"><span>keepalive 30 240</span></span>
<span class="line"><span>comp-lzo # Enable compression</span></span>
<span class="line"><span>persist-key</span></span>
<span class="line"><span>persist-tun</span></span>
<span class="line"><span>status openvpn-status.log</span></span>
<span class="line"><span>verb 3</span></span></code></pre></div><p>最后，你将需要在服务器上启用 IP 转发，配置 OpenVPN 为开机启动，并立刻启动 OpenVPN 服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa/keys# echo &quot;net.ipv4.ip_forward = 1&quot; &gt;&gt; /etc/sysctl.conf</span></span>
<span class="line"><span>root@test:/etc/openvpn/easy-rsa/keys# sysctl -p /etc/sysctl.conf</span></span>
<span class="line"><span>net.core.wmem_max = 12582912</span></span>
<span class="line"><span>net.core.rmem_max = 12582912</span></span>
<span class="line"><span>net.ipv4.tcp_rmem = 10240 87380 12582912</span></span>
<span class="line"><span>net.ipv4.tcp_wmem = 10240 87380 12582912</span></span>
<span class="line"><span>net.core.wmem_max = 12582912</span></span>
<span class="line"><span>net.core.rmem_max = 12582912</span></span>
<span class="line"><span>net.ipv4.tcp_rmem = 10240 87380 12582912</span></span>
<span class="line"><span>net.ipv4.tcp_wmem = 10240 87380 12582912</span></span>
<span class="line"><span>net.core.wmem_max = 12582912</span></span>
<span class="line"><span>net.core.rmem_max = 12582912</span></span>
<span class="line"><span>net.ipv4.tcp_rmem = 10240 87380 12582912</span></span>
<span class="line"><span>net.ipv4.tcp_wmem = 10240 87380 12582912</span></span>
<span class="line"><span>net.ipv4.ip_forward = 0</span></span>
<span class="line"><span>net.ipv4.ip_forward = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root@test:/etc/openvpn/easy-rsa/keys# update-rc.d openvpn defaults</span></span>
<span class="line"><span>update-rc.d: using dependency based boot sequencing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root@test:/etc/openvpn/easy-rsa/keys# /etc/init.d/openvpn start</span></span>
<span class="line"><span>[ ok ] Starting virtual private network daemon:.</span></span></code></pre></div><h3 id="配置-openvpn-客户端" tabindex="-1">配置 OpenVPN 客户端 <a class="header-anchor" href="#配置-openvpn-客户端" aria-label="Permalink to “配置 OpenVPN 客户端”">​</a></h3><p>客户端的安装取决于客户端的操作系统，但你需要将之前生成的证书和密钥复制到你的客户端上，并导入你的 OpenVPN 客户端并新建一个配置文件。每种操作系统下的 OpenVPN 客户端在操作上会有些稍许不同，这也不在这篇文章的覆盖范围内，所以你最好去看看特定操作系统下的 OpenVPN 文档来获取更多信息。请参考本文档里的资源那一节。</p><h3 id="安装-sslh-——-魔法-多协议切换工具" tabindex="-1">安装 SSLH —— &quot;魔法&quot;多协议切换工具 <a class="header-anchor" href="#安装-sslh-——-魔法-多协议切换工具" aria-label="Permalink to “安装 SSLH —— 魔法多协议切换工具”">​</a></h3><p>本文章介绍的解决方案最有趣的部分就是运用 SSLH 了。SSLH 是一个多重协议工具——它可以监听 443 端口的流量，然后分析他们是 SSH，HTTPS 还是 OpenVPN 的通讯包，并把它们分别转发给正确的系统服务。这就是为何本解决方案可以让你绕过大多数端口封杀——你可以一直使用 HTTPS 通讯，因为它几乎从来不会被封杀。</p><p>同样，直接 <code>apt-get</code> 安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa/keys# apt-get install sslh</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree</span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>The following extra packages will be installed:</span></span>
<span class="line"><span>  apache2 apache2-mpm-worker apache2-utils apache2.2-bin apache2.2-common</span></span>
<span class="line"><span>  libapr1 libaprutil1 libaprutil1-dbd-sqlite3 libaprutil1-ldap libconfig9</span></span>
<span class="line"><span>Suggested packages:</span></span>
<span class="line"><span>  apache2-doc apache2-suexec apache2-suexec-custom openbsd-inetd inet-superserver</span></span>
<span class="line"><span>The following NEW packages will be installed:</span></span>
<span class="line"><span>  apache2 apache2-mpm-worker apache2-utils apache2.2-bin apache2.2-common</span></span>
<span class="line"><span>  libapr1 libaprutil1 libaprutil1-dbd-sqlite3 libaprutil1-ldap libconfig9 sslh</span></span>
<span class="line"><span>0 upgraded, 11 newly installed, 0 to remove and 0 not upgraded.</span></span>
<span class="line"><span>Need to get 1,568 kB of archives.</span></span>
<span class="line"><span>After this operation, 5,822 kB of additional disk space will be used.</span></span>
<span class="line"><span>Do you want to continue [Y/n]? y</span></span></code></pre></div><p>在 SSLH 被安装之后，包管理器会询问要在 inetd 还是 standalone 模式下允许。选择 standalone 模式，因为你希望 SSLH 在它自己的进程里运行。如果你没有安装 Apache，apt 包管理器会自动帮你下载并安装的，尽管它也不是完全不可或缺。如果你已经有 Apache 了，那你需要确保它只监听 localhost 端口而不是所有的端口（不然的话 SSLH 会无法运行，因为 443 端口已经被 Apache 监听占用）。安装后，你会看到一个如下所示的错误信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[....] Starting ssl/ssh multiplexer: sslhsslh disabled, please adjust the configuration to your needs</span></span>
<span class="line"><span>[FAIL] and then set RUN to &#39;yes&#39; in /etc/default/sslh to enable it. ... failed!</span></span>
<span class="line"><span>failed!</span></span></code></pre></div><p>这其实并不是错误信息，只是 SSLH 在提醒你它还未被配置所以无法启动，这很正常。配置 SSLH 相对来说比较简单。它的配置文件放置在 <code>/etc/default/sslh</code>，你只需要修改 <code>RUN</code> 和 <code>DAEMON_OPTS</code> 变量就可以了。我的 SSLH 配置文件如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Default options for sslh initscript</span></span>
<span class="line"><span># sourced by /etc/init.d/sslh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Disabled by default, to force yourself</span></span>
<span class="line"><span># to read the configuration:</span></span>
<span class="line"><span># - /usr/share/doc/sslh/README.Debian (quick start)</span></span>
<span class="line"><span># - /usr/share/doc/sslh/README, at &quot;Configuration&quot; section</span></span>
<span class="line"><span># - sslh(8) via &quot;man sslh&quot; for more configuration details.</span></span>
<span class="line"><span># Once configuration ready, you *must* set RUN to yes here</span></span>
<span class="line"><span># and try to start sslh (standalone mode only)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN=yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># binary to use: forked (sslh) or single-thread (sslh-select) version</span></span>
<span class="line"><span>DAEMON=/usr/sbin/sslh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DAEMON_OPTS=&quot;--user sslh --listen 0.0.0.0:443 --ssh 127.0.0.1:22 --ssl 127.0.0.1:443 --openvpn 127.0.0.1:1194 --pidfile /var/run/sslh/sslh.pid&quot;</span></span></code></pre></div><p>保存编辑并启动 SSLH：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> root@test:/etc/openvpn/easy-rsa/keys# /etc/init.d/sslh start</span></span>
<span class="line"><span>[ ok ] Starting ssl/ssh multiplexer: sslh.</span></span></code></pre></div><p>现在你应该可以从 443 端口 ssh 到你的树莓派了，它会正确地使用 SSLH 转发：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ssh -p 443 root@test.linuxjournal.com</span></span>
<span class="line"><span>root@test:~#</span></span></code></pre></div><p>SSLH 现在开始监听端口 443 并且可以转发流量信息到 SSH、Apache 或者 OpenVPN ，这取决于抵达流量包的类型。这套系统现已整装待发了！</p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>现在你可以启动 OpenVPN 并且配置你的客户端连接到服务器的 443 端口了，然后 SSLH 会从那里把流量转发到服务器的 1194 端口。但鉴于你正在和服务器的 443 端口通信，你的 VPN 流量不会被封锁。现在你可以舒服地坐在陌生小镇的咖啡店里，畅通无阻地通过你的树莓派上的 OpenVPN 浏览互联网。你顺便还给你的链接增加了一些安全性，这个额外作用也会让你的链接更安全和私密一些。享受通过安全跳板浏览互联网把！</p><h3 id="参考资源" tabindex="-1">参考资源 <a class="header-anchor" href="#参考资源" aria-label="Permalink to “参考资源”">​</a></h3>`,68)),i("ul",null,[i("li",null,[s[2]||(s[2]=n("安装与配置 OpenVPN: ",-1)),e(a,{href:"https://wiki.debian.org/OpenVPN"},{default:p(()=>[...s[0]||(s[0]=[n("https://wiki.debian.org/OpenVPN",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),e(a,{href:"http://cryptotap.com/articles/openvpn"},{default:p(()=>[...s[1]||(s[1]=[n("http://cryptotap.com/articles/openvpn",-1)])]),_:1})]),i("li",null,[s[5]||(s[5]=n("OpenVPN 客户端下载: ",-1)),e(a,{href:"https://openvpn.net/index.php/open-source/downloads.html"},{default:p(()=>[...s[4]||(s[4]=[n("https://openvpn.net/index.php/open-source/downloads.html",-1)])]),_:1})]),i("li",null,[s[7]||(s[7]=n("OpenVPN iOS 客户端: ",-1)),e(a,{href:"https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8"},{default:p(()=>[...s[6]||(s[6]=[n("https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8",-1)])]),_:1})]),i("li",null,[s[9]||(s[9]=n("OpenVPN Android 客户端: ",-1)),e(a,{href:"https://play.google.com/store/apps/details?id=net.openvpn.openvpn&hl=en"},{default:p(()=>[...s[8]||(s[8]=[n("https://play.google.com/store/apps/details?id=net.openvpn.openvpn&hl=en",-1)])]),_:1})]),i("li",null,[s[11]||(s[11]=n("Tunnelblick for Mac OS X (OpenVPN 客户端): ",-1)),e(a,{href:"https://tunnelblick.net"},{default:p(()=>[...s[10]||(s[10]=[n("https://tunnelblick.net",-1)])]),_:1})]),i("li",null,[s[14]||(s[14]=n("SSLH 介绍: ",-1)),e(a,{href:"http://www.rutschle.net/tech/sslh.shtml"},{default:p(()=>[...s[12]||(s[12]=[n("http://www.rutschle.net/tech/sslh.shtml",-1)])]),_:1}),s[15]||(s[15]=n(" 和 ",-1)),e(a,{href:"https://github.com/yrutschle/sslh"},{default:p(()=>[...s[13]||(s[13]=[n("https://github.com/yrutschle/sslh",-1)])]),_:1})])]),s[30]||(s[30]=i("hr",null,null,-1)),i("p",null,[s[17]||(s[17]=n("via: ",-1)),e(a,{href:"http://www.linuxjournal.com/content/securi-pi-using-raspberry-pi-secure-landing-point?page=0,0"},{default:p(()=>[...s[16]||(s[16]=[n("http://www.linuxjournal.com/content/securi-pi-using-raspberry-pi-secure-landing-point?page=0,0",-1)])]),_:1})]),i("p",null,[s[21]||(s[21]=n("作者：",-1)),e(a,{href:"http://www.linuxjournal.com/users/bill-childers"},{default:p(()=>[...s[18]||(s[18]=[n("Bill Childers",-1)])]),_:1}),s[22]||(s[22]=n(" 译者：",-1)),e(a,{href:"https://github.com/Moelf"},{default:p(()=>[...s[19]||(s[19]=[n("Moelf",-1)])]),_:1}),s[23]||(s[23]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[26]||(s[26]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[24]||(s[24]=[n("LCTT",-1)])]),_:1}),s[27]||(s[27]=n(" 原创翻译，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[25]||(s[25]=[n("Linux中国",-1)])]),_:1}),s[28]||(s[28]=n(" 荣誉推出",-1))])])}const N=l(d,[["render",h]]);export{v as __pageData,N as default};
