import{_ as p,a0 as s,w as d,s as l,ao as o,I as r,x as n,a1 as i,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"如何在Ubuntu,Linux Mint,Debian上禁用IPv6 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Ubuntu,Linux Mint,Debian上禁用IPv6 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Ubuntu,Linux Mint,Debian上禁用IPv6 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Ubuntu,Linux Mint,Debian上禁用IPv6 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140623 How to disable Ipv6 on Ubuntu or Linux Mint or Debian","title":"如何在Ubuntu,Linux Mint,Debian上禁用IPv6","tag":"201407","desc":""},"relativePath":"201407/20140623 How to disable Ipv6 on Ubuntu or Linux Mint or Debian.md","filePath":"[post].md"}'),u={name:"201407/20140623 How to disable Ipv6 on Ubuntu or Linux Mint or Debian.md"};function c(v,e,b,I,f,P){const t=s("Link");return d(),l("div",null,[e[13]||(e[13]=o(`<h1 id="如何在ubuntu-linux-mint-debian上禁用ipv6" tabindex="-1">如何在Ubuntu,Linux Mint,Debian上禁用IPv6 <a class="header-anchor" href="#如何在ubuntu-linux-mint-debian上禁用ipv6" aria-label="Permalink to “如何在Ubuntu,Linux Mint,Debian上禁用IPv6”">​</a></h1><h3 id="ipv6" tabindex="-1">IPv6 <a class="header-anchor" href="#ipv6" aria-label="Permalink to “IPv6”">​</a></h3><p>IPv6是尋址方案IPv4的下一個版本，被用來給域名分配數字地址。</p><p>IPv6比IPv4支持更多的地址。然而，它還沒有被廣泛支持，還在被接受的過程中。</p><h3 id="你的系統支持ipv6麼" tabindex="-1">你的系統支持IPv6麼? <a class="header-anchor" href="#你的系統支持ipv6麼" aria-label="Permalink to “你的系統支持IPv6麼?”">​</a></h3><p>為了支持IPv6，需要很多事情。首先你需要系統/操作系統支持IPv6。Ubuntu，Linux Mint，和大多是現代發行版都支持它。如果你看一下ifconfig指令的輸出，你就會看見你的網絡接口被分配了IPv6地址。</p><pre><code>$ ifconfig
eth0      Link encap:Ethernet  HWaddr 00:1c:c0:f8:79:ee  
          inet addr:192.168.1.2  Bcast:192.168.1.255  Mask:255.255.255.0
          inet6 addr: fe80::21c:c0ff:fef8:79ee/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:110880 errors:0 dropped:0 overruns:0 frame:0
          TX packets:111960 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:62289395 (62.2 MB)  TX bytes:25169458 (25.1 MB)
          Interrupt:20 Memory:e3200000-e3220000 

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:45258 errors:0 dropped:0 overruns:0 frame:0
          TX packets:45258 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:4900560 (4.9 MB)  TX bytes:4900560 (4.9 MB)
</code></pre><p>看一下行“inet6 addr”。</p><p>接下來你需要一個支持ipv6的路由器/調製解調器。此外，你的ISP也必須支持IPv6。</p><p>除了檢查網絡設備的每一部分，最好查出你是否可以通過IPv6訪問網站。</p>`,10)),r("p",null,[e[1]||(e[1]=n("有很多網站可以檢測你的網絡連接是否支持IPv6. 這裏就是個例子：",-1)),i(t,{href:"http://testmyipv6.com/"},{default:a(()=>[...e[0]||(e[0]=[n("http://testmyipv6.com/",-1)])]),_:1})]),e[14]||(e[14]=o(`<p>下面是在內核中啓用IPv6的參數：</p><pre><code>$ sysctl net.ipv6.conf.all.disable_ipv6
net.ipv6.conf.all.disable_ipv6 = 0

$ sysctl net.ipv6.conf.default.disable_ipv6
net.ipv6.conf.default.disable_ipv6 = 0

$ sysctl net.ipv6.conf.lo.disable_ipv6
net.ipv6.conf.lo.disable_ipv6 = 0
</code></pre><p>同樣可以在proc文件中檢查</p><pre><code>$ cat /proc/sys/net/ipv6/conf/all/disable_ipv6
0
</code></pre><p>注意這裏的變量是控制IPv6的“禁用”。所以設置1就會禁用IPv6。</p><h3 id="如果它不支持就禁用ipv6" tabindex="-1">如果它不支持就禁用IPv6 <a class="header-anchor" href="#如果它不支持就禁用ipv6" aria-label="Permalink to “如果它不支持就禁用IPv6”">​</a></h3><p>如果你的網絡設備中不支持IPv6，那最好就全部禁用它們。為什麼？因為這會引起域名查詢延遲，在網絡連接中不必要地嘗試連接到IPv6地址導致延遲等等問題。</p><p>我也遇到過像這樣的問題，apt-get命令偶爾會嘗試連接到IPv6地址失敗接着檢索IPv4地址。看一下下面的輸出。</p><pre><code>$ sudo apt-get update
Ign http://archive.canonical.com trusty InRelease
Ign http://archive.canonical.com raring InRelease                                                                                                    
Err http://archive.canonical.com trusty Release.gpg                                                                                                  
  Cannot initiate the connection to archive.canonical.com:80 (2001:67c:1360:8c01::1b). - connect (101: Network is unreachable) [IP: 2001:67c:1360:8c01::1b 80]
Err http://archive.canonical.com raring Release.gpg                                                                                                  
  Cannot initiate the connection to archive.canonical.com:80 (2001:67c:1360:8c01::1b). - connect (101: Network is unreachable) [IP: 2001:67c:1360:8c01::1b 80]

.....
</code></pre><p>像這樣的錯誤在最近的Ubuntu中更頻繁了，或許它比以前更頻繁地嘗試使用IPv6地址。</p><p>我在其他的應用上也注意到了相似的問題，如Hexchat，同樣Google Chrome也會有時會在查詢域名的時候花費更長的時間。</p><p>所以最好的方案是完全禁用IPv6來擺脱這些事情。這隻需要一點點配置但可以幫助你解決很多你係統上的很多問題。用户甚至反應這可以加速網絡。</p><h4 id="禁用-ipv6-方案1" tabindex="-1">禁用 IPv6 - 方案1 <a class="header-anchor" href="#禁用-ipv6-方案1" aria-label="Permalink to “禁用 IPv6 - 方案1”">​</a></h4><p>編輯文件 - /etc/sysctl.conf</p><pre><code>$ sudo gedit /etc/sysctl.conf
</code></pre><p>在文件的最後加入下面的行。</p><pre><code># IPv6 disabled
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1
</code></pre><p>保存並關閉</p><p>重啓sysctl</p><pre><code>$ sudo sysctl -p
</code></pre><p>再次檢查ifconfig的輸出，這裏應該沒有IPv6地址了。</p><pre><code>$ ifconfig
eth0      Link encap:Ethernet  HWaddr 08:00:27:5f:28:8b  
          inet addr:192.168.1.3  Bcast:192.168.1.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:1346 errors:0 dropped:0 overruns:0 frame:0
          TX packets:965 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:1501691 (1.5 MB)  TX bytes:104883 (104.8 KB)
</code></pre><p>如果不行，嘗試重啓系統並再次檢查ifconfig</p><h4 id="禁用-ipv6-grub-方案" tabindex="-1">禁用 IPv6 - GRUB 方案 <a class="header-anchor" href="#禁用-ipv6-grub-方案" aria-label="Permalink to “禁用 IPv6 - GRUB 方案”">​</a></h4><p>IPv6同樣可以通過編輯grub配置文件禁用。</p><pre><code>$ sudo gedit /etc/default/grub
</code></pre><p>查找包含&quot;GRUB_CMDLINE_LINUX&quot;的行，並如下編輯：</p><pre><code>GRUB_CMDLINE_LINUX=&quot;ipv6.disable=1&quot;
</code></pre><p>同樣可以加入名為&quot;GRUB_CMDLINE_LINUX_DEFAULT&quot;的變量，這同樣有用。保存並關閉文件，重新生成grub配置。</p><pre><code>$ sudo update-grub2
</code></pre><p>重啓，現在IPv6應該就已經禁用了。</p><hr>`,32)),r("p",null,[e[3]||(e[3]=n("via: ",-1)),i(t,{href:"http://www.binarytides.com/disable-ipv6-ubuntu/"},{default:a(()=>[...e[2]||(e[2]=[n("http://www.binarytides.com/disable-ipv6-ubuntu/",-1)])]),_:1})]),r("p",null,[e[6]||(e[6]=n("譯者：",-1)),i(t,{href:"https://github.com/geekpi"},{default:a(()=>[...e[4]||(e[4]=[n("geekpi",-1)])]),_:1}),e[7]||(e[7]=n(" ，校對：",-1)),i(t,{href:"https://github.com/wxy"},{default:a(()=>[...e[5]||(e[5]=[n("wxy",-1)])]),_:1})]),r("p",null,[e[10]||(e[10]=n("本文由 ",-1)),i(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原創翻譯，",-1)),i(t,{href:"http://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[n("Linux中國",-1)])]),_:1}),e[12]||(e[12]=n(" 榮譽推出",-1))])])}const _=p(u,[["render",c]]);export{h as __pageData,_ as default};
