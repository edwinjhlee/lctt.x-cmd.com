import{_ as a,a0 as i,w as m,s as c,ao as r,I as t,x as e,a1 as o,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"给Linux系统/网络管理员的nmap的29个实用例子 | LCTT x X-CMD","titleTemplate":false,"description":"给Linux系统/网络管理员的nmap的29个实用例子 | LCTT (201402) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"给Linux系统/网络管理员的nmap的29个实用例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"给Linux系统/网络管理员的nmap的29个实用例子 | LCTT (201402) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201402/29 Practical Examples of Nmap Commands for Linux System,Network Administrators","title":"给Linux系统/网络管理员的nmap的29个实用例子","tag":"201402","desc":""},"relativePath":"201402/29 Practical Examples of Nmap Commands for Linux System,Network Administrators.md","filePath":"[post].md"}'),d={name:"201402/29 Practical Examples of Nmap Commands for Linux System,Network Administrators.md"};function h(l,n,u,S,g,T){const s=i("Link");return m(),c("div",null,[n[24]||(n[24]=r(`<h1 id="给linux系统-网络管理员的nmap的29个实用例子" tabindex="-1">给Linux系统/网络管理员的nmap的29个实用例子 <a class="header-anchor" href="#给linux系统-网络管理员的nmap的29个实用例子" aria-label="Permalink to “给Linux系统/网络管理员的nmap的29个实用例子”">​</a></h1><p><strong>Nmap</strong>亦称为<strong>Network Mapper</strong>(网络映射)是一个开源并且通用的用于Linux系统/网络管理员的工具。<strong>nmap</strong>用于<strong>探查网络、执行安全扫描、网络核查</strong>并且在远程机器上<strong>找出开放端口</strong>。它可以扫描在线的主机、操作系统、包过滤器和远程主机上的开放端口。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2013/12/Nmap-Commands.png" alt="Nmap 命令"></p><p><em>Nmap 命令和示例</em></p><p>我会分两个章节讲述<strong>NMAP</strong>的常见的使用方法，这篇是nmap系列的第一部分(译注:原文为I’ll be covering most of NMAP usage in two different parts and this is the first part of nmap serious,这里serious可能为笔误，应该为series)。在这个步骤里，我用两个没有防火墙的服务器来测试nmap命令的工作。</p><ul><li>192.168.0.100 – server1.tecmint.com</li><li>192.168.0.101 – server2.tecmint.com</li></ul><h3 id="nmap-命令使用" tabindex="-1">Nmap 命令使用 <a class="header-anchor" href="#nmap-命令使用" aria-label="Permalink to “Nmap 命令使用”">​</a></h3><pre><code># nmap [Scan Type(s)] [Options] {target specification}
</code></pre><h3 id="如何在linux上安装nmap" tabindex="-1">如何在Linux上安装nmap <a class="header-anchor" href="#如何在linux上安装nmap" aria-label="Permalink to “如何在Linux上安装nmap”">​</a></h3>`,9)),t("p",null,[n[2]||(n[2]=e("如今大部分Linux发行版像",-1)),n[3]||(n[3]=t("strong",null,"Red Hat, CentOS, Fedoro, Debian",-1)),n[4]||(n[4]=e(" 和 ",-1)),n[5]||(n[5]=t("strong",null,"Ubuntu",-1)),n[6]||(n[6]=e("已经在它们默认的包管理仓库中包含了",-1)),n[7]||(n[7]=t("strong",null,"nmap",-1)),n[8]||(n[8]=e("，可以通过",-1)),o(s,{href:"http://www.tecmint.com/20-linux-yum-yellowdog-updater-modified-commands-for-package-mangement/"},{default:p(()=>[...n[0]||(n[0]=[e("Yum",-1)])]),_:1}),n[9]||(n[9]=e(" 和 ",-1)),o(s,{href:"http://www.tecmint.com/useful-basic-commands-of-apt-get-and-apt-cache-for-package-management/"},{default:p(()=>[...n[1]||(n[1]=[e("APT",-1)])]),_:1}),n[10]||(n[10]=e("安装、管理和更新软件包。在这些发行版上安装",-1)),n[11]||(n[11]=t("strong",null,"nmap",-1)),n[12]||(n[12]=e("，可以使用下面的命令。",-1))]),n[25]||(n[25]=r(`<pre><code># yum install nmap		[基于 Red Hat 的发行版]
$ sudo apt-get install nmap	[基于 Debian 的发行版]
</code></pre><p>安装了最新的nmap程序之后，你就可以跟着这篇文章中的示例指令来学习了。</p><h3 id="_1-带主机名和ip地址扫描系统" tabindex="-1">1. 带主机名和IP地址扫描系统 <a class="header-anchor" href="#_1-带主机名和ip地址扫描系统" aria-label="Permalink to “1. 带主机名和IP地址扫描系统”">​</a></h3><p><strong>nmap</strong>工具提供了不同的方法来扫描一个系统。在这个例子中，我使用主机名为<strong>server2.tecmint.com</strong>的机器执行扫描来找出所有开放端口，服务和系统上的MAC地址。</p><h4 id="使用主机名扫描" tabindex="-1">使用主机名扫描 <a class="header-anchor" href="#使用主机名扫描" aria-label="Permalink to “使用主机名扫描”">​</a></h4><pre><code>[root@server1 ~]# nmap server2.tecmint.com

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 15:42 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.415 seconds
You have new mail in /var/spool/mail/root
</code></pre><h4 id="使用ip地址扫描" tabindex="-1">使用IP地址扫描 <a class="header-anchor" href="#使用ip地址扫描" aria-label="Permalink to “使用IP地址扫描”">​</a></h4><pre><code>[root@server1 ~]# nmap 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-18 11:04 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
958/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.465 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_2-使用-v-选项扫描" tabindex="-1">2. 使用&quot;-v&quot;选项扫描 <a class="header-anchor" href="#_2-使用-v-选项扫描" aria-label="Permalink to “2. 使用-v选项扫描”">​</a></h3><p>你可以看到带&quot;-v&quot;选项的命令给出了关于远程机器的更多信息。</p><pre><code>[root@server1 ~]# nmap -v server2.tecmint.com

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 15:43 EST
Initiating ARP Ping Scan against 192.168.0.101 [1 port] at 15:43
The ARP Ping Scan took 0.01s to scan 1 total hosts.
Initiating SYN Stealth Scan against server2.tecmint.com (192.168.0.101) [1680 ports] at 15:43
Discovered open port 22/tcp on 192.168.0.101
Discovered open port 80/tcp on 192.168.0.101
Discovered open port 8888/tcp on 192.168.0.101
Discovered open port 111/tcp on 192.168.0.101
Discovered open port 3306/tcp on 192.168.0.101
Discovered open port 957/tcp on 192.168.0.101
The SYN Stealth Scan took 0.30s to scan 1680 total ports.
Host server2.tecmint.com (192.168.0.101) appears to be up ... good.
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.485 seconds
               Raw packets sent: 1681 (73.962KB) | Rcvd: 1681 (77.322KB)
</code></pre><h4 id="扫描多台主机" tabindex="-1">扫描多台主机 <a class="header-anchor" href="#扫描多台主机" aria-label="Permalink to “扫描多台主机”">​</a></h4><p>你可以简单地通过在namap后写上它们的IP地址或者主机名来扫描多台主机。</p><pre><code>[root@server1 ~]# nmap 192.168.0.101 192.168.0.102 192.168.0.103

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:06 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)
Nmap finished: 3 IP addresses (1 host up) scanned in 0.580 seconds
</code></pre><h3 id="_4-扫描整个子网" tabindex="-1">4. 扫描整个子网 <a class="header-anchor" href="#_4-扫描整个子网" aria-label="Permalink to “4. 扫描整个子网”">​</a></h3><p>你可以通过<strong>通配符</strong>来使nmap扫描整个子网或者IP段。</p><pre><code>[root@server1 ~]# nmap 192.168.0.*

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:11 EST
Interesting ports on server1.tecmint.com (192.168.0.100):
Not shown: 1677 closed ports
PORT    STATE SERVICE
22/tcp  open  ssh
111/tcp open  rpcbind
851/tcp open  unknown

Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 256 IP addresses (2 hosts up) scanned in 5.550 seconds
You have new mail in /var/spool/mail/root
</code></pre><p>从上面的输出你可以看到nmap扫描了整个子网，并给出了<strong>网络</strong>中<strong>在线</strong>主机的信息。</p><h3 id="_5-使用ip地址的最后一段扫描多台主机" tabindex="-1">5. 使用IP地址的最后一段扫描多台主机 <a class="header-anchor" href="#_5-使用ip地址的最后一段扫描多台主机" aria-label="Permalink to “5. 使用IP地址的最后一段扫描多台主机”">​</a></h3><p>你可以简单地通过指定IP地址的最后8位执行扫描多台主机。比如说，这里我在IP地址为192.168.0.101, 192.168.0.102 and 192.168.0.103的机器上执行了扫描。</p><pre><code>[root@server1 ~]# nmap 192.168.0.101,102,103

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:09 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 3 IP addresses (1 host up) scanned in 0.552 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_6-从文件中扫描主机列表" tabindex="-1">6. 从文件中扫描主机列表 <a class="header-anchor" href="#_6-从文件中扫描主机列表" aria-label="Permalink to “6. 从文件中扫描主机列表”">​</a></h3><p>如果你有更多的主机要扫描，并且所有的主机都写在一个文件中，你可以直接让namp读取它并执行扫描。让我们看看要怎么做。</p><p>创建一个名为“<strong>nmaptest.txt</strong>”的文本文件，并定义所有你想要扫描的IP地址或者服务器的主机名。</p><pre><code>[root@server1 ~]# cat &gt; nmaptest.txt

localhost
server2.tecmint.com
192.168.0.101
</code></pre><p>接着，带“<strong>iL</strong>”参数运行nmap命令来扫描文件中所有列出的IP地址。</p><pre><code>[root@server1 ~]# nmap -iL nmaptest.txt

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-18 10:58 EST
Interesting ports on localhost.localdomain (127.0.0.1):
Not shown: 1675 closed ports
PORT    STATE SERVICE
22/tcp  open  ssh
25/tcp  open  smtp
111/tcp open  rpcbind
631/tcp open  ipp
857/tcp open  unknown

Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
958/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
958/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 3 IP addresses (3 hosts up) scanned in 2.047 seconds
</code></pre><h3 id="_7-扫描一个ip范围" tabindex="-1">7. 扫描一个IP范围 <a class="header-anchor" href="#_7-扫描一个ip范围" aria-label="Permalink to “7. 扫描一个IP范围”">​</a></h3><p>在使用nmap扫描时，你可以指定一个IP范围。</p><pre><code>[root@server1 ~]# nmap 192.168.0.101-110

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:09 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 10 IP addresses (1 host up) scanned in 0.542 seconds
</code></pre><h3 id="_8-扫描网络时排除部分主机" tabindex="-1">8. 扫描网络时排除部分主机 <a class="header-anchor" href="#_8-扫描网络时排除部分主机" aria-label="Permalink to “8. 扫描网络时排除部分主机”">​</a></h3><p>你可以在执行全网扫描的时候排除一些主机，或者在使用通配符扫描时使用“<strong>–exclude</strong>”选项。</p><pre><code>[root@server1 ~]# nmap 192.168.0.* --exclude 192.168.0.100

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:16 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 255 IP addresses (1 host up) scanned in 5.313 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_9-扫描系统信息" tabindex="-1">9. 扫描系统信息 <a class="header-anchor" href="#_9-扫描系统信息" aria-label="Permalink to “9. 扫描系统信息”">​</a></h3><p>（译注：原文这里提到了traceroute，实在并无此内容，删除之）</p><p>使用nmap，你可以检测到运行在远程主机上的操作系统和版本。要启用OS及其版本检测，我们可以使用带 “<strong>-A</strong>” 选项使用nmap。</p><pre><code>[root@server1 ~]# nmap -A 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:25 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 4.3 (protocol 2.0)
80/tcp   open  http    Apache httpd 2.2.3 ((CentOS))
111/tcp  open  rpcbind  2 (rpc #100000)
957/tcp  open  status   1 (rpc #100024)
3306/tcp open  mysql   MySQL (unauthorized)
8888/tcp open  http    lighttpd 1.4.32
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)
No exact OS matches for host (If you know what OS is running on it, see http://www.insecure.org/cgi-bin/nmap-submit.cgi).
TCP/IP fingerprint:
SInfo(V=4.11%P=i686-redhat-linux-gnu%D=11/11%Tm=52814B66%O=22%C=1%M=080027)
TSeq(Class=TR%IPID=Z%TS=1000HZ)
T1(Resp=Y%DF=Y%W=16A0%ACK=S++%Flags=AS%Ops=MNNTNW)
T2(Resp=N)
T3(Resp=Y%DF=Y%W=16A0%ACK=S++%Flags=AS%Ops=MNNTNW)
T4(Resp=Y%DF=Y%W=0%ACK=O%Flags=R%Ops=)
T5(Resp=Y%DF=Y%W=0%ACK=S++%Flags=AR%Ops=)
T6(Resp=Y%DF=Y%W=0%ACK=O%Flags=R%Ops=)
T7(Resp=Y%DF=Y%W=0%ACK=S++%Flags=AR%Ops=)
PU(Resp=Y%DF=N%TOS=C0%IPLEN=164%RIPTL=148%RID=E%RIPCK=E%UCK=E%ULEN=134%DAT=E)

Uptime 0.169 days (since Mon Nov 11 12:22:15 2013)

Nmap finished: 1 IP address (1 host up) scanned in 22.271 seconds
You have new mail in /var/spool/mail/root
</code></pre><p>在上面的输出中，你可以看到运行在远程主机上操作系统的TCP/IP指纹和更详细的运行在远程主机上的特定端口和服务。</p><h3 id="_10-使用nmap启用系统检测" tabindex="-1">10. 使用nmap启用系统检测 <a class="header-anchor" href="#_10-使用nmap启用系统检测" aria-label="Permalink to “10. 使用nmap启用系统检测”">​</a></h3><p>使用选项“-O”或“-osscan-guess”同样可以发现OS信息。</p><pre><code>[root@server1 ~]# nmap -O server2.tecmint.com

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:40 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)
No exact OS matches for host (If you know what OS is running on it, see http://www.insecure.org/cgi-bin/nmap-submit.cgi).
TCP/IP fingerprint:
SInfo(V=4.11%P=i686-redhat-linux-gnu%D=11/11%Tm=52815CF4%O=22%C=1%M=080027)
TSeq(Class=TR%IPID=Z%TS=1000HZ)
T1(Resp=Y%DF=Y%W=16A0%ACK=S++%Flags=AS%Ops=MNNTNW)
T2(Resp=N)
T3(Resp=Y%DF=Y%W=16A0%ACK=S++%Flags=AS%Ops=MNNTNW)
T4(Resp=Y%DF=Y%W=0%ACK=O%Flags=Option -O and -osscan-guess also helps to discover OSR%Ops=)
T5(Resp=Y%DF=Y%W=0%ACK=S++%Flags=AR%Ops=)
T6(Resp=Y%DF=Y%W=0%ACK=O%Flags=R%Ops=)
T7(Resp=Y%DF=Y%W=0%ACK=S++%Flags=AR%Ops=)
PU(Resp=Y%DF=N%TOS=C0%IPLEN=164%RIPTL=148%RID=E%RIPCK=E%UCK=E%ULEN=134%DAT=E)

Uptime 0.221 days (since Mon Nov 11 12:22:16 2013)

Nmap finished: 1 IP address (1 host up) scanned in 11.064 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_11-扫描主机来检测防火墙" tabindex="-1">11. 扫描主机来检测防火墙 <a class="header-anchor" href="#_11-扫描主机来检测防火墙" aria-label="Permalink to “11. 扫描主机来检测防火墙”">​</a></h3><p>下面的命令会在远程主机上执行扫描来检测主机上是否使用了任何包过滤器或者防火墙。</p><pre><code>[root@server1 ~]# nmap -sA 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:27 EST
All 1680 scanned ports on server2.tecmint.com (192.168.0.101) are UNfiltered
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.382 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_12-扫描主机以检查其受到防火墙保护" tabindex="-1">12. 扫描主机以检查其受到防火墙保护 <a class="header-anchor" href="#_12-扫描主机以检查其受到防火墙保护" aria-label="Permalink to “12. 扫描主机以检查其受到防火墙保护”">​</a></h3><p>扫描检测一个主机是否受到任何包过滤器软件或者防火墙保护。</p><pre><code>[root@server1 ~]# nmap -PN 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:30 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.399 seconds
</code></pre><h3 id="_13-找出网络中在线主机" tabindex="-1">13. 找出网络中在线主机 <a class="header-anchor" href="#_13-找出网络中在线主机" aria-label="Permalink to “13. 找出网络中在线主机”">​</a></h3><p>在“<strong>-sP</strong>”选项的bang帮助下，我们可以简单地检测网络中的主机是否在线,带这个选项后nmap会跳过端口检测和其他检测。</p><pre><code>[root@server1 ~]# nmap -sP 192.168.0.*

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-18 11:01 EST
Host server1.tecmint.com (192.168.0.100) appears to be up.
Host server2.tecmint.com (192.168.0.101) appears to be up.
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)
Nmap finished: 256 IP addresses (2 hosts up) scanned in 5.109 seconds
</code></pre><h3 id="_14-执行快速扫描" tabindex="-1">14. 执行快速扫描 <a class="header-anchor" href="#_14-执行快速扫描" aria-label="Permalink to “14. 执行快速扫描”">​</a></h3><p>你可以带“<strong>-F</strong>”选项仅扫描所有列在nmap-services文件中的端口。</p><pre><code>[root@server1 ~]# nmap -F 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:47 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1234 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.322 seconds
</code></pre><h3 id="_15-找出nmap版本" tabindex="-1">15. 找出nmap版本 <a class="header-anchor" href="#_15-找出nmap版本" aria-label="Permalink to “15. 找出nmap版本”">​</a></h3><p>你可以使用“<strong>-V</strong>”选项找出运行在你机器上的nmap版本。</p><pre><code>[root@server1 ~]# nmap -V

Nmap version 4.11 ( http://www.insecure.org/nmap/ )
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_16-连续扫描端口" tabindex="-1">16. 连续扫描端口 <a class="header-anchor" href="#_16-连续扫描端口" aria-label="Permalink to “16. 连续扫描端口”">​</a></h3><p>使用“<strong>-r</strong>”选项而不随机排列端口的扫描顺序。</p><pre><code>[root@server1 ~]# nmap -r 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:52 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.363 seconds
</code></pre><h3 id="_17-显示主机接口及路由" tabindex="-1">17. 显示主机接口及路由 <a class="header-anchor" href="#_17-显示主机接口及路由" aria-label="Permalink to “17. 显示主机接口及路由”">​</a></h3><p>你可以使用nmap的“<strong>–iflist</strong>”选项来列出本机的主机接口和路由信息。</p><pre><code>[root@server1 ~]# nmap --iflist

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:07 EST
************************INTERFACES************************
DEV  (SHORT) IP/MASK          TYPE     UP MAC
lo   (lo)    127.0.0.1/8      loopback up
eth0 (eth0)  192.168.0.100/24 ethernet up 08:00:27:11:C7:89

**************************ROUTES**************************
DST/MASK      DEV  GATEWAY
192.168.0.0/0 eth0
169.254.0.0/0 eth0
</code></pre><p>在上面的输出中，你可以看到上述清单列出了你系统中的已经启用的接口及它们相应的路由。（译注：这样你就知道可以通过这些接口扫描哪些网络了）</p><h3 id="_18-扫描特定端口" tabindex="-1">18. 扫描特定端口 <a class="header-anchor" href="#_18-扫描特定端口" aria-label="Permalink to “18. 扫描特定端口”">​</a></h3><p>nmap使用不同的选项来发现远程机器上的端口。你可以用“<strong>-p</strong>”选项指定你想扫描的TCP端口。默认上，nmap只会扫描<strong>TCP</strong>端口。</p><pre><code>[root@server1 ~]# nmap -p 80 server2.tecmint.com

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:12 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT   STATE SERVICE
80/tcp open  http
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) sca
</code></pre><h3 id="_19-扫描tcp端口" tabindex="-1">19. 扫描TCP端口 <a class="header-anchor" href="#_19-扫描tcp端口" aria-label="Permalink to “19. 扫描TCP端口”">​</a></h3><p>当然，你可以指定nmap扫描的端口类型（TCP或UDP）和端口号。</p><pre><code>[root@server1 ~]# nmap -p T:8888,80 server2.tecmint.com

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:15 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT     STATE SERVICE
80/tcp   open  http
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.157 seconds
</code></pre><h3 id="_20-扫描udp端口" tabindex="-1">20. 扫描UDP端口 <a class="header-anchor" href="#_20-扫描udp端口" aria-label="Permalink to “20. 扫描UDP端口”">​</a></h3><pre><code>[root@server1 ~]# nmap -sU 53 server2.tecmint.com

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:15 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT     STATE SERVICE
53/udp   open  http
8888/udp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.157 seconds
</code></pre><h3 id="_21-扫描多个端口" tabindex="-1">21. 扫描多个端口 <a class="header-anchor" href="#_21-扫描多个端口" aria-label="Permalink to “21. 扫描多个端口”">​</a></h3><p>你可以使用“<strong>-p</strong>”选项来指定多个要扫描的端口。</p><pre><code>[root@server1 ~]# nmap -p 80,443 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-18 10:56 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT    STATE  SERVICE
80/tcp  open   http
443/tcp closed https
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.190 seconds
</code></pre><h3 id="_22-扫描网络的端口范围" tabindex="-1">22. 扫描网络的端口范围 <a class="header-anchor" href="#_22-扫描网络的端口范围" aria-label="Permalink to “22. 扫描网络的端口范围”">​</a></h3><p>你也可以使用表达式指定扫描端口的范围。</p><pre><code>[root@server1 ~]#  nmap -p 80-160 192.168.0.101
</code></pre><h3 id="_23-找出主机服务版本号" tabindex="-1">23. 找出主机服务版本号 <a class="header-anchor" href="#_23-找出主机服务版本号" aria-label="Permalink to “23. 找出主机服务版本号”">​</a></h3><p>我们可以使用“<strong>-sV</strong>”选项找出远程主机上运行的服务及其版本号。</p><pre><code>[root@server1 ~]# nmap -sV 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:48 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 4.3 (protocol 2.0)
80/tcp   open  http    Apache httpd 2.2.3 ((CentOS))
111/tcp  open  rpcbind  2 (rpc #100000)
957/tcp  open  status   1 (rpc #100024)
3306/tcp open  mysql   MySQL (unauthorized)
8888/tcp open  http    lighttpd 1.4.32
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 12.624 seconds
</code></pre><h4 id="_24-使用-tcp-ack-pa-和-tcp-syn-ps-扫描远程主机" tabindex="-1">24. 使用 TCP ACK (PA) 和 TCP Syn (PS) 扫描远程主机 <a class="header-anchor" href="#_24-使用-tcp-ack-pa-和-tcp-syn-ps-扫描远程主机" aria-label="Permalink to “24. 使用 TCP ACK (PA) 和 TCP Syn (PS) 扫描远程主机”">​</a></h4><p>有时包过滤防火墙阻止了标准<strong>ICMP</strong>ping请求，在这个情况下，我们可以使用<strong>TCP ACK</strong>和<strong>TCP Syn</strong>方法来扫描远程主机。</p><pre><code>[root@server1 ~]# nmap -PS 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:51 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.360 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_25-用tcp-ack扫描远程主机的特定端口" tabindex="-1">25. 用TCP ACK扫描远程主机的特定端口### <a class="header-anchor" href="#_25-用tcp-ack扫描远程主机的特定端口" aria-label="Permalink to “25. 用TCP ACK扫描远程主机的特定端口###”">​</a></h3><pre><code>[root@server1 ~]# nmap -PA -p 22,80 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 18:02 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.166 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_26-用tcp-syn扫描远程主机的特定端口" tabindex="-1">26. 用TCP SYN扫描远程主机的特定端口 <a class="header-anchor" href="#_26-用tcp-syn扫描远程主机的特定端口" aria-label="Permalink to “26. 用TCP SYN扫描远程主机的特定端口”">​</a></h3><pre><code>[root@server1 ~]# nmap -PS -p 22,80 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 18:08 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.165 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_27-执行隐秘扫描" tabindex="-1">27. 执行隐秘扫描 <a class="header-anchor" href="#_27-执行隐秘扫描" aria-label="Permalink to “27. 执行隐秘扫描”">​</a></h3><pre><code>[root@server1 ~]# nmap -sS 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 18:10 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.383 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_28-用tcp-syn扫描最常用的端口" tabindex="-1">28. 用TCP SYN扫描最常用的端口 <a class="header-anchor" href="#_28-用tcp-syn扫描最常用的端口" aria-label="Permalink to “28. 用TCP SYN扫描最常用的端口”">​</a></h3><pre><code>[root@server1 ~]# nmap -sT 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 18:12 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
111/tcp  open  rpcbind
957/tcp  open  unknown
3306/tcp open  mysql
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.406 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_29-执行tcp空扫描来愚弄防火墙" tabindex="-1">29. 执行tcp空扫描来愚弄防火墙 <a class="header-anchor" href="#_29-执行tcp空扫描来愚弄防火墙" aria-label="Permalink to “29. 执行tcp空扫描来愚弄防火墙”">​</a></h3><pre><code>[root@server1 ~]# nmap -sN 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 19:01 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
Not shown: 1674 closed ports
PORT     STATE         SERVICE
22/tcp   open|filtered ssh
80/tcp   open|filtered http
111/tcp  open|filtered rpcbind
957/tcp  open|filtered unknown
3306/tcp open|filtered mysql
8888/tcp open|filtered sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 1.584 seconds
You have new mail in /var/spool/mail/root
</code></pre><p>这些就是目前<strong>NMAP</strong> 的用法，我会写出更有创造性的<strong>NMAP</strong>的第二部分(译注:原文为 I’ll be coming up more creative options of <strong>NMAP</strong> in our second part of this serious,这里serious可能为笔误，应该为series)。接着，不要走开也别忘了分享你们有价值的评论。</p><hr>`,95)),t("p",null,[n[14]||(n[14]=e("via: ",-1)),o(s,{href:"http://www.tecmint.com/nmap-command-examples/"},{default:p(()=>[...n[13]||(n[13]=[e("http://www.tecmint.com/nmap-command-examples/",-1)])]),_:1})]),t("p",null,[n[17]||(n[17]=e("译者：",-1)),o(s,{href:"https://github.com/geekpi"},{default:p(()=>[...n[15]||(n[15]=[e("geekpi",-1)])]),_:1}),n[18]||(n[18]=e(" 校对：",-1)),o(s,{href:"https://github.com/wxy"},{default:p(()=>[...n[16]||(n[16]=[e("wxy",-1)])]),_:1})]),t("p",null,[n[21]||(n[21]=e("本文由 ",-1)),o(s,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...n[19]||(n[19]=[e("LCTT",-1)])]),_:1}),n[22]||(n[22]=e(" 原创翻译，",-1)),o(s,{href:"http://linux.cn/"},{default:p(()=>[...n[20]||(n[20]=[e("Linux中国",-1)])]),_:1}),n[23]||(n[23]=e(" 荣誉推出",-1))])])}const E=a(d,[["render",h]]);export{P as __pageData,E as default};
