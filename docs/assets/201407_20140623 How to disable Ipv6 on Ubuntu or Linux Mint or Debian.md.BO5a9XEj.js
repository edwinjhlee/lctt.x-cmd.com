import{_ as p,a0 as s,w as d,s as l,ao as o,I as r,x as n,a1 as i,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const h=JSON.parse('{"title":"如何在Ubuntu,Linux Mint,Debian上禁用IPv6 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Ubuntu,Linux Mint,Debian上禁用IPv6 | LCTT (201407) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Ubuntu,Linux Mint,Debian上禁用IPv6 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Ubuntu,Linux Mint,Debian上禁用IPv6 | LCTT (201407) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201407/20140623 How to disable Ipv6 on Ubuntu or Linux Mint or Debian","title":"如何在Ubuntu,Linux Mint,Debian上禁用IPv6","tag":"201407","desc":""},"relativePath":"201407/20140623 How to disable Ipv6 on Ubuntu or Linux Mint or Debian.md","filePath":"[post].md"}'),u={name:"201407/20140623 How to disable Ipv6 on Ubuntu or Linux Mint or Debian.md"};function c(v,e,b,I,f,P){const t=s("Link");return d(),l("div",null,[e[13]||(e[13]=o(`<h1 id="如何在ubuntu-linux-mint-debian上禁用ipv6" tabindex="-1">如何在Ubuntu,Linux Mint,Debian上禁用IPv6 <a class="header-anchor" href="#如何在ubuntu-linux-mint-debian上禁用ipv6" aria-label="Permalink to “如何在Ubuntu,Linux Mint,Debian上禁用IPv6”">​</a></h1><h3 id="ipv6" tabindex="-1">IPv6 <a class="header-anchor" href="#ipv6" aria-label="Permalink to “IPv6”">​</a></h3><p>IPv6是寻址方案IPv4的下一个版本，被用来给域名分配数字地址。</p><p>IPv6比IPv4支持更多的地址。然而，它还没有被广泛支持，还在被接受的过程中。</p><h3 id="你的系统支持ipv6么" tabindex="-1">你的系统支持IPv6么? <a class="header-anchor" href="#你的系统支持ipv6么" aria-label="Permalink to “你的系统支持IPv6么?”">​</a></h3><p>为了支持IPv6，需要很多事情。首先你需要系统/操作系统支持IPv6。Ubuntu，Linux Mint，和大多是现代发行版都支持它。如果你看一下ifconfig指令的输出，你就会看见你的网络接口被分配了IPv6地址。</p><pre><code>$ ifconfig
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
</code></pre><p>看一下行“inet6 addr”。</p><p>接下来你需要一个支持ipv6的路由器/调制解调器。此外，你的ISP也必须支持IPv6。</p><p>除了检查网络设备的每一部分，最好查出你是否可以通过IPv6访问网站。</p>`,10)),r("p",null,[e[1]||(e[1]=n("有很多网站可以检测你的网络连接是否支持IPv6. 这里就是个例子：",-1)),i(t,{href:"http://testmyipv6.com/"},{default:a(()=>[...e[0]||(e[0]=[n("http://testmyipv6.com/",-1)])]),_:1})]),e[14]||(e[14]=o(`<p>下面是在内核中启用IPv6的参数：</p><pre><code>$ sysctl net.ipv6.conf.all.disable_ipv6
net.ipv6.conf.all.disable_ipv6 = 0

$ sysctl net.ipv6.conf.default.disable_ipv6
net.ipv6.conf.default.disable_ipv6 = 0

$ sysctl net.ipv6.conf.lo.disable_ipv6
net.ipv6.conf.lo.disable_ipv6 = 0
</code></pre><p>同样可以在proc文件中检查</p><pre><code>$ cat /proc/sys/net/ipv6/conf/all/disable_ipv6
0
</code></pre><p>注意这里的变量是控制IPv6的“禁用”。所以设置1就会禁用IPv6。</p><h3 id="如果它不支持就禁用ipv6" tabindex="-1">如果它不支持就禁用IPv6 <a class="header-anchor" href="#如果它不支持就禁用ipv6" aria-label="Permalink to “如果它不支持就禁用IPv6”">​</a></h3><p>如果你的网络设备中不支持IPv6，那最好就全部禁用它们。为什么？因为这会引起域名查询延迟，在网络连接中不必要地尝试连接到IPv6地址导致延迟等等问题。</p><p>我也遇到过像这样的问题，apt-get命令偶尔会尝试连接到IPv6地址失败接着检索IPv4地址。看一下下面的输出。</p><pre><code>$ sudo apt-get update
Ign http://archive.canonical.com trusty InRelease
Ign http://archive.canonical.com raring InRelease                                                                                                    
Err http://archive.canonical.com trusty Release.gpg                                                                                                  
  Cannot initiate the connection to archive.canonical.com:80 (2001:67c:1360:8c01::1b). - connect (101: Network is unreachable) [IP: 2001:67c:1360:8c01::1b 80]
Err http://archive.canonical.com raring Release.gpg                                                                                                  
  Cannot initiate the connection to archive.canonical.com:80 (2001:67c:1360:8c01::1b). - connect (101: Network is unreachable) [IP: 2001:67c:1360:8c01::1b 80]

.....
</code></pre><p>像这样的错误在最近的Ubuntu中更频繁了，或许它比以前更频繁地尝试使用IPv6地址。</p><p>我在其他的应用上也注意到了相似的问题，如Hexchat，同样Google Chrome也会有时会在查询域名的时候花费更长的时间。</p><p>所以最好的方案是完全禁用IPv6来摆脱这些事情。这只需要一点点配置但可以帮助你解决很多你系统上的很多问题。用户甚至反应这可以加速网络。</p><h4 id="禁用-ipv6-方案1" tabindex="-1">禁用 IPv6 - 方案1 <a class="header-anchor" href="#禁用-ipv6-方案1" aria-label="Permalink to “禁用 IPv6 - 方案1”">​</a></h4><p>编辑文件 - /etc/sysctl.conf</p><pre><code>$ sudo gedit /etc/sysctl.conf
</code></pre><p>在文件的最后加入下面的行。</p><pre><code># IPv6 disabled
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1
</code></pre><p>保存并关闭</p><p>重启sysctl</p><pre><code>$ sudo sysctl -p
</code></pre><p>再次检查ifconfig的输出，这里应该没有IPv6地址了。</p><pre><code>$ ifconfig
eth0      Link encap:Ethernet  HWaddr 08:00:27:5f:28:8b  
          inet addr:192.168.1.3  Bcast:192.168.1.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:1346 errors:0 dropped:0 overruns:0 frame:0
          TX packets:965 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:1501691 (1.5 MB)  TX bytes:104883 (104.8 KB)
</code></pre><p>如果不行，尝试重启系统并再次检查ifconfig</p><h4 id="禁用-ipv6-grub-方案" tabindex="-1">禁用 IPv6 - GRUB 方案 <a class="header-anchor" href="#禁用-ipv6-grub-方案" aria-label="Permalink to “禁用 IPv6 - GRUB 方案”">​</a></h4><p>IPv6同样可以通过编辑grub配置文件禁用。</p><pre><code>$ sudo gedit /etc/default/grub
</code></pre><p>查找包含&quot;GRUB_CMDLINE_LINUX&quot;的行，并如下编辑：</p><pre><code>GRUB_CMDLINE_LINUX=&quot;ipv6.disable=1&quot;
</code></pre><p>同样可以加入名为&quot;GRUB_CMDLINE_LINUX_DEFAULT&quot;的变量，这同样有用。保存并关闭文件，重新生成grub配置。</p><pre><code>$ sudo update-grub2
</code></pre><p>重启，现在IPv6应该就已经禁用了。</p><hr>`,32)),r("p",null,[e[3]||(e[3]=n("via: ",-1)),i(t,{href:"http://www.binarytides.com/disable-ipv6-ubuntu/"},{default:a(()=>[...e[2]||(e[2]=[n("http://www.binarytides.com/disable-ipv6-ubuntu/",-1)])]),_:1})]),r("p",null,[e[6]||(e[6]=n("译者：",-1)),i(t,{href:"https://github.com/geekpi"},{default:a(()=>[...e[4]||(e[4]=[n("geekpi",-1)])]),_:1}),e[7]||(e[7]=n(" ，校对：",-1)),i(t,{href:"https://github.com/wxy"},{default:a(()=>[...e[5]||(e[5]=[n("wxy",-1)])]),_:1})]),r("p",null,[e[10]||(e[10]=n("本文由 ",-1)),i(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原创翻译，",-1)),i(t,{href:"http://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[n("Linux中国",-1)])]),_:1}),e[12]||(e[12]=n(" 荣誉推出",-1))])])}const _=p(u,[["render",c]]);export{h as __pageData,_ as default};
