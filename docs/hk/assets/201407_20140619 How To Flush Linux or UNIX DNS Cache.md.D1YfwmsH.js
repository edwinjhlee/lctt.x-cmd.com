import{_ as d,a0 as o,w as l,s as p,I as s,x as e,a1 as i,A as a,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"如何在 Linux/Unix/Mac 下清除 DNS 查詢緩存 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux/Unix/Mac 下清除 DNS 查詢緩存 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux/Unix/Mac 下清除 DNS 查詢緩存 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux/Unix/Mac 下清除 DNS 查詢緩存 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140619 How To Flush Linux or UNIX DNS Cache","title":"如何在 Linux/Unix/Mac 下清除 DNS 查詢緩存","tag":"201407","desc":""},"relativePath":"201407/20140619 How To Flush Linux or UNIX DNS Cache.md","filePath":"[post].md"}'),c={name:"201407/20140619 How To Flush Linux or UNIX DNS Cache.md"};function u(f,n,h,x,m,N){const t=o("Link");return l(),p("div",null,[n[18]||(n[18]=s("h1",{id:"如何在-linux-unix-mac-下清除-dns-查詢緩存",tabindex:"-1"},[e("如何在 Linux/Unix/Mac 下清除 DNS 查詢緩存 "),s("a",{class:"header-anchor",href:"#如何在-linux-unix-mac-下清除-dns-查詢緩存","aria-label":"Permalink to “如何在 Linux/Unix/Mac 下清除 DNS 查詢緩存”"},"​")],-1)),n[19]||(n[19]=s("p",null,[s("img",{src:"http://figs.cyberciti.biz/3rdparty/configure.png",alt:""})],-1)),n[20]||(n[20]=s("p",null,"我在Linux下使用撥號連接上網，頻繁的撥號斷線造成DNS的問題。我如何在Linux/Unix發行版下使用shell命令清除DNS緩存？",-1)),s("p",null,[n[1]||(n[1]=e("在MS-Windows下,你可以使用",-1)),i(t,{href:"http://theos.in/windows-vista/flush-dns-cache-with-ipconfig/"},{default:a(()=>[...n[0]||(n[0]=[e("ipconfig命令來清除dns緩存",-1)])]),_:1}),n[2]||(n[2]=e("。然而，Linux和Unix提供了不同的方法來清除緩存。Linux可以運行 nscd 或者 BIND 或者 dnsmasq 作為名稱服務緩存守護進程。大型或者工作組服務器可能使用BIND或者dnsmasq作為專用緩存服務器來加速查詢。",-1))]),n[21]||(n[21]=r(`<h3 id="如何-清除-nscd-dns-緩存" tabindex="-1">如何: 清除 nscd dns 緩存 <a class="header-anchor" href="#如何-清除-nscd-dns-緩存" aria-label="Permalink to “如何: 清除 nscd dns 緩存”">​</a></h3><p>Nscd 會緩存libc發起的名稱服務的請求。如果把檢索NSS數據看做很慢，那麼nscd能夠顯著加快連續訪問同一數據的速度，並能提高整個系統的性能。只需重啓nscd即可刷新緩存：</p><pre><code>$ sudo /etc/init.d/nscd restart
</code></pre><p>或</p><pre><code># service nscd restart
</code></pre><p>或</p><pre><code># service nscd reload
</code></pre><p>這個守護進程給最常用的名稱服務請求提供了高速緩存。默認的配置文件/etc/nscd.conf，其決定了高速緩存守護進程的行為。</p><h3 id="清除-dnsmasq-dns-緩存" tabindex="-1">清除 dnsmasq dns 緩存 <a class="header-anchor" href="#清除-dnsmasq-dns-緩存" aria-label="Permalink to “清除 dnsmasq dns 緩存”">​</a></h3>`,9)),s("p",null,[i(t,{href:"http://www.cyberciti.biz/tips/how-do-i-improve-dns-performance-on-linuxwindows-desktop.html"},{default:a(()=>[...n[3]||(n[3]=[e("dnsmasq的是一個輕量級的DNS",-1)])]),_:1}),n[4]||(n[4]=e("、TFTP和DHCP服務器。它的目的是給局域網提供配對的DNS和DHCP服務。 dnsmasq接受DNS查詢，並從一個小的本地高速緩存應答它們或將其轉發到一個真正的遞歸DNS服務器。該軟件也被安裝在很多便宜的路由器上來緩存DNS查詢。只需重新啓動dnsmasq的服務來清除DNS緩存：",-1))]),n[22]||(n[22]=r(`<pre><code>$ sudo /etc/init.d/dnsmasq restart
</code></pre><p>或者</p><pre><code># service dnsmasq restart
</code></pre><h3 id="清除bind緩存服務器的dns緩存" tabindex="-1">清除BIND緩存服務器的dns緩存 <a class="header-anchor" href="#清除bind緩存服務器的dns緩存" aria-label="Permalink to “清除BIND緩存服務器的dns緩存”">​</a></h3><p>一台BIND緩存服務器從另一台服務器（區域主）響應主機的查詢而獲得信息，然後保存（緩存)數據到本地。您所要做的就是重啓BIND以清除其緩存：</p><pre><code># /etc/init.d/named restart
</code></pre><p>你也可以使用下面rndc命令來清除所有的緩存:</p><pre><code># rndc restart
</code></pre><p>或者</p><pre><code># rndc exec
</code></pre><p>BIND v9.3.0 及其以上版本支持一個清除一個特定域名的所有記錄緩存的命令：rndc flushname。本例中刷新cyberciti.biz相關域的所有記錄：</p><pre><code># rndc flushname cyberciti.biz
</code></pre><p>同樣也可以清除BIND View。比如，LAN和WAN的View可以用下面的命令清除:</p><pre><code># rndc flush lan
# rndc flush wan
</code></pre><h3 id="給-mac-os-x-unix-用户的提示" tabindex="-1">給 Mac OS X Unix 用户的提示 <a class="header-anchor" href="#給-mac-os-x-unix-用户的提示" aria-label="Permalink to “給 Mac OS X Unix 用户的提示”">​</a></h3><p>Mac下用root用户輸入下面的命令:</p><pre><code># dscacheutil -flushcache
</code></pre><p>或者</p><pre><code>$ sudo dscacheutil -flushcache
</code></pre><p>如果你正在使用OSX 10.5 或者更早的版本，嘗試使用下面的命令：</p><pre><code>lookupd -flushcache
</code></pre><h3 id="關於-etc-hosts-文件的一個提示" tabindex="-1">關於 /etc/hosts 文件的一個提示 <a class="header-anchor" href="#關於-etc-hosts-文件的一個提示" aria-label="Permalink to “關於 /etc/hosts 文件的一個提示”">​</a></h3><p>/etc/hosts用作靜態查詢主機的表格。你需要在類Unix操作系統下依據你的要求移除並且/或者更新它：</p><pre><code># vi /etc/hosts
</code></pre><h4 id="示例輸出" tabindex="-1">示例輸出: <a class="header-anchor" href="#示例輸出" aria-label="Permalink to “示例輸出:”">​</a></h4><pre><code>127.0.0.1	localhost
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
</code></pre><h3 id="參考" tabindex="-1">參考 <a class="header-anchor" href="#參考" aria-label="Permalink to “參考”">​</a></h3>`,27)),s("p",null,[n[6]||(n[6]=e("相關: 在Windows Vista / XP中用ipconfig 命令",-1)),i(t,{href:"http://theos.in/windows-vista/flush-dns-cache-with-ipconfig/"},{default:a(()=>[...n[5]||(n[5]=[e("清除 DNS 緩存",-1)])]),_:1})]),n[23]||(n[23]=s("hr",null,null,-1)),s("p",null,[n[8]||(n[8]=e("via: ",-1)),i(t,{href:"http://www.cyberciti.biz/faq/rhel-debian-ubuntu-flush-clear-dns-cache/"},{default:a(()=>[...n[7]||(n[7]=[e("http://www.cyberciti.biz/faq/rhel-debian-ubuntu-flush-clear-dns-cache/",-1)])]),_:1})]),s("p",null,[n[11]||(n[11]=e("譯者：",-1)),i(t,{href:"https://github.com/geekpi"},{default:a(()=>[...n[9]||(n[9]=[e("geekpi",-1)])]),_:1}),n[12]||(n[12]=e(" 校對：",-1)),i(t,{href:"https://github.com/wxy"},{default:a(()=>[...n[10]||(n[10]=[e("wxy",-1)])]),_:1})]),s("p",null,[n[15]||(n[15]=e("本文由 ",-1)),i(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...n[13]||(n[13]=[e("LCTT",-1)])]),_:1}),n[16]||(n[16]=e(" 原創翻譯，",-1)),i(t,{href:"http://linux.cn/"},{default:a(()=>[...n[14]||(n[14]=[e("Linux中國",-1)])]),_:1}),n[17]||(n[17]=e(" 榮譽推出",-1))])])}const w=d(c,[["render",u]]);export{T as __pageData,w as default};
