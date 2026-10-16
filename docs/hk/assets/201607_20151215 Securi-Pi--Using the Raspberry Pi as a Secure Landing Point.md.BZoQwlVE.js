import{_ as l,a0 as t,w as o,s as r,ao as c,I as i,x as n,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"Securi-Pi：使用樹莓派作為安全跳板 | LCTT x X-CMD","titleTemplate":false,"description":"Securi-Pi：使用樹莓派作為安全跳板 | LCTT (201607) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Securi-Pi：使用樹莓派作為安全跳板 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Securi-Pi：使用樹莓派作為安全跳板 | LCTT (201607) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201607/20151215 Securi-Pi--Using the Raspberry Pi as a Secure Landing Point","title":"Securi-Pi：使用樹莓派作為安全跳板","tag":"201607","desc":""},"relativePath":"201607/20151215 Securi-Pi--Using the Raspberry Pi as a Secure Landing Point.md","filePath":"[post].md"}'),d={name:"201607/20151215 Securi-Pi--Using the Raspberry Pi as a Secure Landing Point.md"};function h(u,s,g,b,k,m){const a=t("Link");return o(),r("div",null,[s[29]||(s[29]=c(`<h1 id="securi-pi-使用樹莓派作為安全跳板" tabindex="-1">Securi-Pi：使用樹莓派作為安全跳板 <a class="header-anchor" href="#securi-pi-使用樹莓派作為安全跳板" aria-label="Permalink to “Securi-Pi：使用樹莓派作為安全跳板”">​</a></h1><p>像很多 LinuxJournal 的讀者一樣，我也過上了當今非常普遍的“科技游牧”生活，在網絡之間，從一個接入點到另一個接入點，我們身處現實世界的不同地方卻始終保持連接到互聯網和日常使用的其它網絡上。近來我發現越來越多的網絡環境開始屏蔽對外的常用端口比如 SMTP（端口25），SSH（端口22）之類的。當你走進一家咖啡館然後想 SSH 到你的一台服務器上做點事情的時候發現端口 22 被屏蔽了是一件很煩的事情。</p><p>不過，我到目前為止還沒發現有什麼網絡環境會把 HTTPS 給牆了（端口443）。在稍微配置了一下家中的樹莓派 2 之後，我成功地讓自己通過接入樹莓派的 443 端口充當跳板，從而讓我在各種網絡環境下都能連上想要的目標端口。簡而言之，我把家中的樹莓派設置成了一個 OpenVPN 的端點和 SSH 端點，同時也是一個 Apache 服務器，所有這些服務都監聽在 443 端口上，以便可以限制我不想暴露的網絡服務。</p><h3 id="備註" tabindex="-1">備註 <a class="header-anchor" href="#備註" aria-label="Permalink to “備註”">​</a></h3><p>此解決方案能搞定大多數有限制的網絡環境，但有些防火牆會對外部流量調用深度包檢查（Deep packet inspection），它們時常能屏蔽掉用本篇文章裏的方式傳輸的信息。不過我到目前為止還沒在這樣的防火牆後測試過。同時，儘管我使用了很多基於密碼學的工具（OpenVPN，HTTPS，SSH），我並沒有非常嚴格地審計過這套配置方案（LCTT 譯註：作者的意思是指這套方案能幫你繞過端口限制，但不代表你的活動就是完全安全的）。有時候甚至 DNS 服務都會泄露你的信息，很可能在我沒有考慮周到的角落裏會有遺漏。我強烈不推薦把此跳板配置方案當作是萬無一失的隱藏網絡流量的辦法，此配置只是希望能繞過一些端口限制連上網絡，而不是做一些危險的事情。</p><h3 id="起步" tabindex="-1">起步 <a class="header-anchor" href="#起步" aria-label="Permalink to “起步”">​</a></h3><p>讓我們先從你需要什麼説起，我用的是樹莓派 2，裝載了最新版本的 Raspbian，不過這個配置也應該能在樹莓派 Model B 上運行；512MB 的內存對我們來説綽綽有餘了，雖然性能可能沒有樹莓派 2這麼好，畢竟相比於四核心的樹莓派 2， Model B 只有一顆單核心 CPU。我的樹莓派放置在家裏的防火牆和路由器的後面，所以我還能用這個樹莓派作為跳板訪問家裏的其他電子設備。同時這也意味着我的流量在互聯網上看起來彷彿來自我家的 ip 地址，所以這也算某種意義上保護了我的匿名性。如果你沒有樹莓派，或者不想從家裏運行這個服務，那你完全可以把這個配置放在一台小型雲服務器上（LCTT 譯註：比如 IPS ）。你只要確保服務器運行着基於 Debian 的 Linux 發行版即可，這份指南依然可用。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1002061/11913f1.jpg" alt=""></p><p><em>圖 1 樹莓派，即將成為我們的加密網絡端點</em></p><h3 id="安裝並配置-bind" tabindex="-1">安裝並配置 BIND <a class="header-anchor" href="#安裝並配置-bind" aria-label="Permalink to “安裝並配置 BIND”">​</a></h3><p>無論你是用樹莓派還是一台服務器，當你成功啓動之後你就可以安裝 BIND 了，這是一個驅動了互聯網相當一部分的域名服務軟件。你將會把 BIND 僅僅作為緩存域名服務使用，而不用把它配置為用來處理來自互聯網的域名請求。安裝 BIND 會讓你擁有一個可以被 OpenVPN 使用的 DNS 服務器。安裝 BIND 十分簡單，<code>apt-get</code> 就可以直接搞定:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# apt-get install bind9</span></span>
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
<span class="line"><span>Do you want to continue [Y/n]? y</span></span></code></pre></div><p>在我們把 BIND 作為緩存域名服務器之前，還有一些小細節需要配置。兩個修改都在<code>/etc/bind/named.conf.options</code>裏完成。首先你要取消註釋掉 forwarders 這一節內容，同時你還要增加一個可以轉發域名請求的目標服務器。作為例子我會用 Google 的 DNS 服務器（8.8.8.8）（LCTT 譯註：國內的話需要找一個替代品）；文件的 forwarders 節看上去大致是這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>forwarders {</span></span>
<span class="line"><span>    8.8.8.8;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>第二點你需要做的更改是允許來自內網和本機的查詢請求，直接把這一行加入配置文件的後面，記得放在最後一個<code>};</code>之前就可以了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>allow-query { 192.168.1.0/24; 127.0.0.0/16; };</span></span></code></pre></div><p>上面那行配置會允許此 DNS 服務器接收來自其所在的網絡（在本例中，我的網絡就在我的防火牆之後）和本機的請求。下一步，你需要重啓一下 BIND 的服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# /etc/init.d/bind9 restart</span></span>
<span class="line"><span>[....] Stopping domain name service...: bind9waiting for pid 13209 to die</span></span>
<span class="line"><span>. ok</span></span>
<span class="line"><span>[ ok ] Starting domain name service...: bind9.</span></span></code></pre></div><p>現在你可以測試一下 <code>nslookup</code> 來確保你的服務正常運行了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# nslookup</span></span>
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
<span class="line"><span>Address: 173.194.33.180</span></span></code></pre></div><p>完美！現在你的系統裏已經有一個正常的域名服務在工作了，下一步我們來配置一下OpenVPN。</p><h3 id="安裝並配置-openvpn" tabindex="-1">安裝並配置 OpenVPN <a class="header-anchor" href="#安裝並配置-openvpn" aria-label="Permalink to “安裝並配置 OpenVPN”">​</a></h3><p>OpenVPN 是一個運用 SSL/TLS 作為密鑰交換的開源 VPN 解決方案。同時它也非常便於在 Linux 環境下部署。配置 OpenVPN 可能有一點點難，不過其實你也不需要在默認的配置文件裏做太多修改。首先你需要運行一下 <code>apt-get</code> 來安裝 OpenVPN：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# apt-get install openvpn</span></span>
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
<span class="line"><span>Do you want to continue [Y/n]? y</span></span></code></pre></div><p>現在 OpenVPN 已經安裝好了，你需要去配置它了。OpenVPN 是基於 SSL 的，並且它同時依賴於服務端和客户端兩方的證書來工作。為了生成這些證書，你需要在機器上配置一個證書籤發（CA）。幸運地，OpenVPN 在安裝中自帶了一些用於生成證書的腳本比如 “easy-rsa” 來幫助你加快這個過程。你將要創建一個文件目錄用於放置 easy-rsa 腳本，從模板目錄複製過來：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# mkdir /etc/openvpn/easy-rsa</span></span>
<span class="line"><span>root@test:~# cp -rpv /usr/share/doc/openvpn/examples/easy-rsa/2.0/* /etc/openvpn/easy-rsa/</span></span></code></pre></div><p>下一步，把 vars 文件複製一個備份：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# cp vars vars.bak</span></span></code></pre></div><p>接下來，編輯一下 vars 以讓其中的信息符合你的狀態。我將以我需要編輯的信息作為例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>KEY_SIZE=4096</span></span>
<span class="line"><span>KEY_COUNTRY=&quot;US&quot;</span></span>
<span class="line"><span>KEY_PROVINCE=&quot;CA&quot;</span></span>
<span class="line"><span>KEY_CITY=&quot;Silicon Valley&quot;</span></span>
<span class="line"><span>KEY_ORG=&quot;Linux Journal&quot;</span></span>
<span class="line"><span>KEY_EMAIL=&quot;bill.childers@linuxjournal.com&quot;</span></span></code></pre></div><p>下一步是導入（source）一下 vars 中的環境變量，這樣系統就能把其中的信息當作環境變量處理了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# source ./vars</span></span>
<span class="line"><span>NOTE: If you run ./clean-all, I will be doing a rm -rf on /etc/openvpn/easy-rsa/keys</span></span></code></pre></div><h3 id="搭建-ca-證書籤發" tabindex="-1">搭建 CA（證書籤發） <a class="header-anchor" href="#搭建-ca-證書籤發" aria-label="Permalink to “搭建 CA（證書籤發）”">​</a></h3><p>接下來你要運行一下 <code>clean-all</code> 來確保有一個清理乾淨的系統工作環境，緊接着你就要做證書籤發了。注意一下我修改了一些 changeme 的所提示修改的內容以符合我需要的安裝情況：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# ./clean-all</span></span>
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
<span class="line"><span>Email Address [bill.childers@linuxjournal.com]:</span></span></code></pre></div><h3 id="生成服務端證書" tabindex="-1">生成服務端證書 <a class="header-anchor" href="#生成服務端證書" aria-label="Permalink to “生成服務端證書”">​</a></h3><p>一旦 CA 創建好了，你接着就可以生成客户端的 OpenVPN 證書了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# ./build-key-server test.linuxjournal.com</span></span>
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
<span class="line"><span>Data Base Updated</span></span></code></pre></div><p>下一步需要用掉一些時間來生成 OpenVPN 服務器需要的 Diffie-Hellman 密鑰。這個步驟在一般的桌面級 CPU 上會需要幾分鐘的時間，但在 ARM 構架的樹莓派上，會用掉超級超級長的時間。耐心點，只要終端上的點還在跳，那麼一切就在按部就班運行（下面的示例省略了不少的點）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# ./build-dh</span></span>
<span class="line"><span>Generating DH parameters, 4096 bit long safe prime, generator 2</span></span>
<span class="line"><span>This is going to take a long time</span></span>
<span class="line"><span>....................................................+</span></span>
<span class="line"><span>&lt;snipped out many more dots&gt;</span></span></code></pre></div><h3 id="生成客户端證書" tabindex="-1">生成客户端證書 <a class="header-anchor" href="#生成客户端證書" aria-label="Permalink to “生成客户端證書”">​</a></h3><p>現在你要生成一下客户端用於登錄 OpenVPN 的密鑰。通常來説 OpenVPN 都會被配置成使用證書驗證的加密方式，在這個配置下客户端需要持有由服務端簽發的一份證書：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa# ./build-key bills-computer</span></span>
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
<span class="line"><span>root@test:/etc/openvpn/easy-rsa#</span></span></code></pre></div><p>現在你需要再生成一個 HMAC 碼作為共享密鑰來進一步增加整個加密提供的安全性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:~# openvpn --genkey --secret /etc/openvpn/easy-rsa/keys/ta.key</span></span></code></pre></div><h3 id="配置服務器" tabindex="-1">配置服務器 <a class="header-anchor" href="#配置服務器" aria-label="Permalink to “配置服務器”">​</a></h3><p>最後，我們到了配置 OpenVPN 服務的時候了。你需要創建一個 <code>/etc/openvpn/server.conf</code> 文件；這個配置文件的大多數地方都可以套用模板解決。設置 OpenVPN 服務的主要修改在於讓它只用 TCP 而不是 UDP 鏈接。這是下一步所必需的---如果不是 TCP 連接那麼你的服務將不能工作在端口 443 上。創建 <code>/etc/openvpn/server.conf</code> 然後把下述配置丟進去：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>port 1194</span></span>
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
<span class="line"><span>verb 3</span></span></code></pre></div><p>最後，你將需要在服務器上啓用 IP 轉發，配置 OpenVPN 為開機啓動，並立刻啓動 OpenVPN 服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa/keys# echo &quot;net.ipv4.ip_forward = 1&quot; &gt;&gt; /etc/sysctl.conf</span></span>
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
<span class="line"><span>[ ok ] Starting virtual private network daemon:.</span></span></code></pre></div><h3 id="配置-openvpn-客户端" tabindex="-1">配置 OpenVPN 客户端 <a class="header-anchor" href="#配置-openvpn-客户端" aria-label="Permalink to “配置 OpenVPN 客户端”">​</a></h3><p>客户端的安裝取決於客户端的操作系統，但你需要將之前生成的證書和密鑰複製到你的客户端上，並導入你的 OpenVPN 客户端並新建一個配置文件。每種操作系統下的 OpenVPN 客户端在操作上會有些稍許不同，這也不在這篇文章的覆蓋範圍內，所以你最好去看看特定操作系統下的 OpenVPN 文檔來獲取更多信息。請參考本文檔裏的資源那一節。</p><h3 id="安裝-sslh-——-魔法-多協議切換工具" tabindex="-1">安裝 SSLH —— &quot;魔法&quot;多協議切換工具 <a class="header-anchor" href="#安裝-sslh-——-魔法-多協議切換工具" aria-label="Permalink to “安裝 SSLH —— 魔法多協議切換工具”">​</a></h3><p>本文章介紹的解決方案最有趣的部分就是運用 SSLH 了。SSLH 是一個多重協議工具——它可以監聽 443 端口的流量，然後分析他們是 SSH，HTTPS 還是 OpenVPN 的通訊包，並把它們分別轉發給正確的系統服務。這就是為何本解決方案可以讓你繞過大多數端口封殺——你可以一直使用 HTTPS 通訊，因為它幾乎從來不會被封殺。</p><p>同樣，直接 <code>apt-get</code> 安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@test:/etc/openvpn/easy-rsa/keys# apt-get install sslh</span></span>
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
<span class="line"><span>Do you want to continue [Y/n]? y</span></span></code></pre></div><p>在 SSLH 被安裝之後，包管理器會詢問要在 inetd 還是 standalone 模式下允許。選擇 standalone 模式，因為你希望 SSLH 在它自己的進程裏運行。如果你沒有安裝 Apache，apt 包管理器會自動幫你下載並安裝的，儘管它也不是完全不可或缺。如果你已經有 Apache 了，那你需要確保它只監聽 localhost 端口而不是所有的端口（不然的話 SSLH 會無法運行，因為 443 端口已經被 Apache 監聽佔用）。安裝後，你會看到一個如下所示的錯誤信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[....] Starting ssl/ssh multiplexer: sslhsslh disabled, please adjust the configuration to your needs</span></span>
<span class="line"><span>[FAIL] and then set RUN to &#39;yes&#39; in /etc/default/sslh to enable it. ... failed!</span></span>
<span class="line"><span>failed!</span></span></code></pre></div><p>這其實並不是錯誤信息，只是 SSLH 在提醒你它還未被配置所以無法啓動，這很正常。配置 SSLH 相對來説比較簡單。它的配置文件放置在 <code>/etc/default/sslh</code>，你只需要修改 <code>RUN</code> 和 <code>DAEMON_OPTS</code> 變量就可以了。我的 SSLH 配置文件如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Default options for sslh initscript</span></span>
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
<span class="line"><span>DAEMON_OPTS=&quot;--user sslh --listen 0.0.0.0:443 --ssh 127.0.0.1:22 --ssl 127.0.0.1:443 --openvpn 127.0.0.1:1194 --pidfile /var/run/sslh/sslh.pid&quot;</span></span></code></pre></div><p>保存編輯並啓動 SSLH：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> root@test:/etc/openvpn/easy-rsa/keys# /etc/init.d/sslh start</span></span>
<span class="line"><span>[ ok ] Starting ssl/ssh multiplexer: sslh.</span></span></code></pre></div><p>現在你應該可以從 443 端口 ssh 到你的樹莓派了，它會正確地使用 SSLH 轉發：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ssh -p 443 root@test.linuxjournal.com</span></span>
<span class="line"><span>root@test:~#</span></span></code></pre></div><p>SSLH 現在開始監聽端口 443 並且可以轉發流量信息到 SSH、Apache 或者 OpenVPN ，這取決於抵達流量包的類型。這套系統現已整裝待發了！</p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>現在你可以啓動 OpenVPN 並且配置你的客户端連接到服務器的 443 端口了，然後 SSLH 會從那裏把流量轉發到服務器的 1194 端口。但鑑於你正在和服務器的 443 端口通信，你的 VPN 流量不會被封鎖。現在你可以舒服地坐在陌生小鎮的咖啡店裏，暢通無阻地通過你的樹莓派上的 OpenVPN 瀏覽互聯網。你順便還給你的鏈接增加了一些安全性，這個額外作用也會讓你的鏈接更安全和私密一些。享受通過安全跳板瀏覽互聯網把！</p><h3 id="參考資源" tabindex="-1">參考資源 <a class="header-anchor" href="#參考資源" aria-label="Permalink to “參考資源”">​</a></h3>`,68)),i("ul",null,[i("li",null,[s[2]||(s[2]=n("安裝與配置 OpenVPN: ",-1)),e(a,{href:"https://wiki.debian.org/OpenVPN"},{default:p(()=>[...s[0]||(s[0]=[n("https://wiki.debian.org/OpenVPN",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),e(a,{href:"http://cryptotap.com/articles/openvpn"},{default:p(()=>[...s[1]||(s[1]=[n("http://cryptotap.com/articles/openvpn",-1)])]),_:1})]),i("li",null,[s[5]||(s[5]=n("OpenVPN 客户端下載: ",-1)),e(a,{href:"https://openvpn.net/index.php/open-source/downloads.html"},{default:p(()=>[...s[4]||(s[4]=[n("https://openvpn.net/index.php/open-source/downloads.html",-1)])]),_:1})]),i("li",null,[s[7]||(s[7]=n("OpenVPN iOS 客户端: ",-1)),e(a,{href:"https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8"},{default:p(()=>[...s[6]||(s[6]=[n("https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8",-1)])]),_:1})]),i("li",null,[s[9]||(s[9]=n("OpenVPN Android 客户端: ",-1)),e(a,{href:"https://play.google.com/store/apps/details?id=net.openvpn.openvpn&hl=en"},{default:p(()=>[...s[8]||(s[8]=[n("https://play.google.com/store/apps/details?id=net.openvpn.openvpn&hl=en",-1)])]),_:1})]),i("li",null,[s[11]||(s[11]=n("Tunnelblick for Mac OS X (OpenVPN 客户端): ",-1)),e(a,{href:"https://tunnelblick.net"},{default:p(()=>[...s[10]||(s[10]=[n("https://tunnelblick.net",-1)])]),_:1})]),i("li",null,[s[14]||(s[14]=n("SSLH 介紹: ",-1)),e(a,{href:"http://www.rutschle.net/tech/sslh.shtml"},{default:p(()=>[...s[12]||(s[12]=[n("http://www.rutschle.net/tech/sslh.shtml",-1)])]),_:1}),s[15]||(s[15]=n(" 和 ",-1)),e(a,{href:"https://github.com/yrutschle/sslh"},{default:p(()=>[...s[13]||(s[13]=[n("https://github.com/yrutschle/sslh",-1)])]),_:1})])]),s[30]||(s[30]=i("hr",null,null,-1)),i("p",null,[s[17]||(s[17]=n("via: ",-1)),e(a,{href:"http://www.linuxjournal.com/content/securi-pi-using-raspberry-pi-secure-landing-point?page=0,0"},{default:p(()=>[...s[16]||(s[16]=[n("http://www.linuxjournal.com/content/securi-pi-using-raspberry-pi-secure-landing-point?page=0,0",-1)])]),_:1})]),i("p",null,[s[21]||(s[21]=n("作者：",-1)),e(a,{href:"http://www.linuxjournal.com/users/bill-childers"},{default:p(()=>[...s[18]||(s[18]=[n("Bill Childers",-1)])]),_:1}),s[22]||(s[22]=n(" 譯者：",-1)),e(a,{href:"https://github.com/Moelf"},{default:p(()=>[...s[19]||(s[19]=[n("Moelf",-1)])]),_:1}),s[23]||(s[23]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[26]||(s[26]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[24]||(s[24]=[n("LCTT",-1)])]),_:1}),s[27]||(s[27]=n(" 原創翻譯，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[25]||(s[25]=[n("Linux中國",-1)])]),_:1}),s[28]||(s[28]=n(" 榮譽推出",-1))])])}const N=l(d,[["render",h]]);export{v as __pageData,N as default};
