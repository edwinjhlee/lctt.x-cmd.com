import{_ as a,a0 as i,w as m,s as c,ao as r,I as t,x as e,a1 as o,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"給Linux系統/網絡管理員的nmap的29個實用例子 | LCTT x X-CMD","titleTemplate":false,"description":"給Linux系統/網絡管理員的nmap的29個實用例子 | LCTT (201402) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"給Linux系統/網絡管理員的nmap的29個實用例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"給Linux系統/網絡管理員的nmap的29個實用例子 | LCTT (201402) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201402/29 Practical Examples of Nmap Commands for Linux System,Network Administrators","title":"給Linux系統/網絡管理員的nmap的29個實用例子","tag":"201402","desc":""},"relativePath":"201402/29 Practical Examples of Nmap Commands for Linux System,Network Administrators.md","filePath":"[post].md"}'),d={name:"201402/29 Practical Examples of Nmap Commands for Linux System,Network Administrators.md"};function h(l,n,u,S,g,T){const s=i("Link");return m(),c("div",null,[n[24]||(n[24]=r(`<h1 id="給linux系統-網絡管理員的nmap的29個實用例子" tabindex="-1">給Linux系統/網絡管理員的nmap的29個實用例子 <a class="header-anchor" href="#給linux系統-網絡管理員的nmap的29個實用例子" aria-label="Permalink to “給Linux系統/網絡管理員的nmap的29個實用例子”">​</a></h1><p><strong>Nmap</strong>亦稱為<strong>Network Mapper</strong>(網絡映射)是一個開源並且通用的用於Linux系統/網絡管理員的工具。<strong>nmap</strong>用於<strong>探查網絡、執行安全掃描、網絡核查</strong>並且在遠程機器上<strong>找出開放端口</strong>。它可以掃描在線的主機、操作系統、包過濾器和遠程主機上的開放端口。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2013/12/Nmap-Commands.png" alt="Nmap 命令"></p><p><em>Nmap 命令和示例</em></p><p>我會分兩個章節講述<strong>NMAP</strong>的常見的使用方法，這篇是nmap系列的第一部分(譯註:原文為I’ll be covering most of NMAP usage in two different parts and this is the first part of nmap serious,這裏serious可能為筆誤，應該為series)。在這個步驟裏，我用兩個沒有防火牆的服務器來測試nmap命令的工作。</p><ul><li>192.168.0.100 – server1.tecmint.com</li><li>192.168.0.101 – server2.tecmint.com</li></ul><h3 id="nmap-命令使用" tabindex="-1">Nmap 命令使用 <a class="header-anchor" href="#nmap-命令使用" aria-label="Permalink to “Nmap 命令使用”">​</a></h3><pre><code># nmap [Scan Type(s)] [Options] {target specification}
</code></pre><h3 id="如何在linux上安裝nmap" tabindex="-1">如何在Linux上安裝nmap <a class="header-anchor" href="#如何在linux上安裝nmap" aria-label="Permalink to “如何在Linux上安裝nmap”">​</a></h3>`,9)),t("p",null,[n[2]||(n[2]=e("如今大部分Linux發行版像",-1)),n[3]||(n[3]=t("strong",null,"Red Hat, CentOS, Fedoro, Debian",-1)),n[4]||(n[4]=e(" 和 ",-1)),n[5]||(n[5]=t("strong",null,"Ubuntu",-1)),n[6]||(n[6]=e("已經在它們默認的包管理倉庫中包含了",-1)),n[7]||(n[7]=t("strong",null,"nmap",-1)),n[8]||(n[8]=e("，可以通過",-1)),o(s,{href:"http://www.tecmint.com/20-linux-yum-yellowdog-updater-modified-commands-for-package-mangement/"},{default:p(()=>[...n[0]||(n[0]=[e("Yum",-1)])]),_:1}),n[9]||(n[9]=e(" 和 ",-1)),o(s,{href:"http://www.tecmint.com/useful-basic-commands-of-apt-get-and-apt-cache-for-package-management/"},{default:p(()=>[...n[1]||(n[1]=[e("APT",-1)])]),_:1}),n[10]||(n[10]=e("安裝、管理和更新軟件包。在這些發行版上安裝",-1)),n[11]||(n[11]=t("strong",null,"nmap",-1)),n[12]||(n[12]=e("，可以使用下面的命令。",-1))]),n[25]||(n[25]=r(`<pre><code># yum install nmap		[基於 Red Hat 的發行版]
$ sudo apt-get install nmap	[基於 Debian 的發行版]
</code></pre><p>安裝了最新的nmap程序之後，你就可以跟着這篇文章中的示例指令來學習了。</p><h3 id="_1-帶主機名和ip地址掃描系統" tabindex="-1">1. 帶主機名和IP地址掃描系統 <a class="header-anchor" href="#_1-帶主機名和ip地址掃描系統" aria-label="Permalink to “1. 帶主機名和IP地址掃描系統”">​</a></h3><p><strong>nmap</strong>工具提供了不同的方法來掃描一個系統。在這個例子中，我使用主機名為<strong>server2.tecmint.com</strong>的機器執行掃描來找出所有開放端口，服務和系統上的MAC地址。</p><h4 id="使用主機名掃描" tabindex="-1">使用主機名掃描 <a class="header-anchor" href="#使用主機名掃描" aria-label="Permalink to “使用主機名掃描”">​</a></h4><pre><code>[root@server1 ~]# nmap server2.tecmint.com

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
</code></pre><h4 id="使用ip地址掃描" tabindex="-1">使用IP地址掃描 <a class="header-anchor" href="#使用ip地址掃描" aria-label="Permalink to “使用IP地址掃描”">​</a></h4><pre><code>[root@server1 ~]# nmap 192.168.0.101

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
</code></pre><h3 id="_2-使用-v-選項掃描" tabindex="-1">2. 使用&quot;-v&quot;選項掃描 <a class="header-anchor" href="#_2-使用-v-選項掃描" aria-label="Permalink to “2. 使用-v選項掃描”">​</a></h3><p>你可以看到帶&quot;-v&quot;選項的命令給出了關於遠程機器的更多信息。</p><pre><code>[root@server1 ~]# nmap -v server2.tecmint.com

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
</code></pre><h4 id="掃描多台主機" tabindex="-1">掃描多台主機 <a class="header-anchor" href="#掃描多台主機" aria-label="Permalink to “掃描多台主機”">​</a></h4><p>你可以簡單地通過在namap後寫上它們的IP地址或者主機名來掃描多台主機。</p><pre><code>[root@server1 ~]# nmap 192.168.0.101 192.168.0.102 192.168.0.103

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
</code></pre><h3 id="_4-掃描整個子網" tabindex="-1">4. 掃描整個子網 <a class="header-anchor" href="#_4-掃描整個子網" aria-label="Permalink to “4. 掃描整個子網”">​</a></h3><p>你可以通過<strong>通配符</strong>來使nmap掃描整個子網或者IP段。</p><pre><code>[root@server1 ~]# nmap 192.168.0.*

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
</code></pre><p>從上面的輸出你可以看到nmap掃描了整個子網，並給出了<strong>網絡</strong>中<strong>在線</strong>主機的信息。</p><h3 id="_5-使用ip地址的最後一段掃描多台主機" tabindex="-1">5. 使用IP地址的最後一段掃描多台主機 <a class="header-anchor" href="#_5-使用ip地址的最後一段掃描多台主機" aria-label="Permalink to “5. 使用IP地址的最後一段掃描多台主機”">​</a></h3><p>你可以簡單地通過指定IP地址的最後8位執行掃描多台主機。比如説，這裏我在IP地址為192.168.0.101, 192.168.0.102 and 192.168.0.103的機器上執行了掃描。</p><pre><code>[root@server1 ~]# nmap 192.168.0.101,102,103

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
</code></pre><h3 id="_6-從文件中掃描主機列表" tabindex="-1">6. 從文件中掃描主機列表 <a class="header-anchor" href="#_6-從文件中掃描主機列表" aria-label="Permalink to “6. 從文件中掃描主機列表”">​</a></h3><p>如果你有更多的主機要掃描，並且所有的主機都寫在一個文件中，你可以直接讓namp讀取它並執行掃描。讓我們看看要怎麼做。</p><p>創建一個名為“<strong>nmaptest.txt</strong>”的文本文件，並定義所有你想要掃描的IP地址或者服務器的主機名。</p><pre><code>[root@server1 ~]# cat &gt; nmaptest.txt

localhost
server2.tecmint.com
192.168.0.101
</code></pre><p>接着，帶“<strong>iL</strong>”參數運行nmap命令來掃描文件中所有列出的IP地址。</p><pre><code>[root@server1 ~]# nmap -iL nmaptest.txt

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
</code></pre><h3 id="_7-掃描一個ip範圍" tabindex="-1">7. 掃描一個IP範圍 <a class="header-anchor" href="#_7-掃描一個ip範圍" aria-label="Permalink to “7. 掃描一個IP範圍”">​</a></h3><p>在使用nmap掃描時，你可以指定一個IP範圍。</p><pre><code>[root@server1 ~]# nmap 192.168.0.101-110

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
</code></pre><h3 id="_8-掃描網絡時排除部分主機" tabindex="-1">8. 掃描網絡時排除部分主機 <a class="header-anchor" href="#_8-掃描網絡時排除部分主機" aria-label="Permalink to “8. 掃描網絡時排除部分主機”">​</a></h3><p>你可以在執行全網掃描的時候排除一些主機，或者在使用通配符掃描時使用“<strong>–exclude</strong>”選項。</p><pre><code>[root@server1 ~]# nmap 192.168.0.* --exclude 192.168.0.100

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
</code></pre><h3 id="_9-掃描系統信息" tabindex="-1">9. 掃描系統信息 <a class="header-anchor" href="#_9-掃描系統信息" aria-label="Permalink to “9. 掃描系統信息”">​</a></h3><p>（譯註：原文這裏提到了traceroute，實在並無此內容，刪除之）</p><p>使用nmap，你可以檢測到運行在遠程主機上的操作系統和版本。要啓用OS及其版本檢測，我們可以使用帶 “<strong>-A</strong>” 選項使用nmap。</p><pre><code>[root@server1 ~]# nmap -A 192.168.0.101

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
</code></pre><p>在上面的輸出中，你可以看到運行在遠程主機上操作系統的TCP/IP指紋和更詳細的運行在遠程主機上的特定端口和服務。</p><h3 id="_10-使用nmap啓用系統檢測" tabindex="-1">10. 使用nmap啓用系統檢測 <a class="header-anchor" href="#_10-使用nmap啓用系統檢測" aria-label="Permalink to “10. 使用nmap啓用系統檢測”">​</a></h3><p>使用選項“-O”或“-osscan-guess”同樣可以發現OS信息。</p><pre><code>[root@server1 ~]# nmap -O server2.tecmint.com

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
</code></pre><h3 id="_11-掃描主機來檢測防火牆" tabindex="-1">11. 掃描主機來檢測防火牆 <a class="header-anchor" href="#_11-掃描主機來檢測防火牆" aria-label="Permalink to “11. 掃描主機來檢測防火牆”">​</a></h3><p>下面的命令會在遠程主機上執行掃描來檢測主機上是否使用了任何包過濾器或者防火牆。</p><pre><code>[root@server1 ~]# nmap -sA 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 16:27 EST
All 1680 scanned ports on server2.tecmint.com (192.168.0.101) are UNfiltered
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.382 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_12-掃描主機以檢查其受到防火牆保護" tabindex="-1">12. 掃描主機以檢查其受到防火牆保護 <a class="header-anchor" href="#_12-掃描主機以檢查其受到防火牆保護" aria-label="Permalink to “12. 掃描主機以檢查其受到防火牆保護”">​</a></h3><p>掃描檢測一個主機是否受到任何包過濾器軟件或者防火牆保護。</p><pre><code>[root@server1 ~]# nmap -PN 192.168.0.101

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
</code></pre><h3 id="_13-找出網絡中在線主機" tabindex="-1">13. 找出網絡中在線主機 <a class="header-anchor" href="#_13-找出網絡中在線主機" aria-label="Permalink to “13. 找出網絡中在線主機”">​</a></h3><p>在“<strong>-sP</strong>”選項的bang幫助下，我們可以簡單地檢測網絡中的主機是否在線,帶這個選項後nmap會跳過端口檢測和其他檢測。</p><pre><code>[root@server1 ~]# nmap -sP 192.168.0.*

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-18 11:01 EST
Host server1.tecmint.com (192.168.0.100) appears to be up.
Host server2.tecmint.com (192.168.0.101) appears to be up.
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)
Nmap finished: 256 IP addresses (2 hosts up) scanned in 5.109 seconds
</code></pre><h3 id="_14-執行快速掃描" tabindex="-1">14. 執行快速掃描 <a class="header-anchor" href="#_14-執行快速掃描" aria-label="Permalink to “14. 執行快速掃描”">​</a></h3><p>你可以帶“<strong>-F</strong>”選項僅掃描所有列在nmap-services文件中的端口。</p><pre><code>[root@server1 ~]# nmap -F 192.168.0.101

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
</code></pre><h3 id="_15-找出nmap版本" tabindex="-1">15. 找出nmap版本 <a class="header-anchor" href="#_15-找出nmap版本" aria-label="Permalink to “15. 找出nmap版本”">​</a></h3><p>你可以使用“<strong>-V</strong>”選項找出運行在你機器上的nmap版本。</p><pre><code>[root@server1 ~]# nmap -V

Nmap version 4.11 ( http://www.insecure.org/nmap/ )
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_16-連續掃描端口" tabindex="-1">16. 連續掃描端口 <a class="header-anchor" href="#_16-連續掃描端口" aria-label="Permalink to “16. 連續掃描端口”">​</a></h3><p>使用“<strong>-r</strong>”選項而不隨機排列端口的掃描順序。</p><pre><code>[root@server1 ~]# nmap -r 192.168.0.101

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
</code></pre><h3 id="_17-顯示主機接口及路由" tabindex="-1">17. 顯示主機接口及路由 <a class="header-anchor" href="#_17-顯示主機接口及路由" aria-label="Permalink to “17. 顯示主機接口及路由”">​</a></h3><p>你可以使用nmap的“<strong>–iflist</strong>”選項來列出本機的主機接口和路由信息。</p><pre><code>[root@server1 ~]# nmap --iflist

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:07 EST
************************INTERFACES************************
DEV  (SHORT) IP/MASK          TYPE     UP MAC
lo   (lo)    127.0.0.1/8      loopback up
eth0 (eth0)  192.168.0.100/24 ethernet up 08:00:27:11:C7:89

**************************ROUTES**************************
DST/MASK      DEV  GATEWAY
192.168.0.0/0 eth0
169.254.0.0/0 eth0
</code></pre><p>在上面的輸出中，你可以看到上述清單列出了你係統中的已經啓用的接口及它們相應的路由。（譯註：這樣你就知道可以通過這些接口掃描哪些網絡了）</p><h3 id="_18-掃描特定端口" tabindex="-1">18. 掃描特定端口 <a class="header-anchor" href="#_18-掃描特定端口" aria-label="Permalink to “18. 掃描特定端口”">​</a></h3><p>nmap使用不同的選項來發現遠程機器上的端口。你可以用“<strong>-p</strong>”選項指定你想掃描的TCP端口。默認上，nmap只會掃描<strong>TCP</strong>端口。</p><pre><code>[root@server1 ~]# nmap -p 80 server2.tecmint.com

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:12 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT   STATE SERVICE
80/tcp open  http
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) sca
</code></pre><h3 id="_19-掃描tcp端口" tabindex="-1">19. 掃描TCP端口 <a class="header-anchor" href="#_19-掃描tcp端口" aria-label="Permalink to “19. 掃描TCP端口”">​</a></h3><p>當然，你可以指定nmap掃描的端口類型（TCP或UDP）和端口號。</p><pre><code>[root@server1 ~]# nmap -p T:8888,80 server2.tecmint.com

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:15 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT     STATE SERVICE
80/tcp   open  http
8888/tcp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.157 seconds
</code></pre><h3 id="_20-掃描udp端口" tabindex="-1">20. 掃描UDP端口 <a class="header-anchor" href="#_20-掃描udp端口" aria-label="Permalink to “20. 掃描UDP端口”">​</a></h3><pre><code>[root@server1 ~]# nmap -sU 53 server2.tecmint.com

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 17:15 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT     STATE SERVICE
53/udp   open  http
8888/udp open  sun-answerbook
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.157 seconds
</code></pre><h3 id="_21-掃描多個端口" tabindex="-1">21. 掃描多個端口 <a class="header-anchor" href="#_21-掃描多個端口" aria-label="Permalink to “21. 掃描多個端口”">​</a></h3><p>你可以使用“<strong>-p</strong>”選項來指定多個要掃描的端口。</p><pre><code>[root@server1 ~]# nmap -p 80,443 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-18 10:56 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT    STATE  SERVICE
80/tcp  open   http
443/tcp closed https
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.190 seconds
</code></pre><h3 id="_22-掃描網絡的端口範圍" tabindex="-1">22. 掃描網絡的端口範圍 <a class="header-anchor" href="#_22-掃描網絡的端口範圍" aria-label="Permalink to “22. 掃描網絡的端口範圍”">​</a></h3><p>你也可以使用表達式指定掃描端口的範圍。</p><pre><code>[root@server1 ~]#  nmap -p 80-160 192.168.0.101
</code></pre><h3 id="_23-找出主機服務版本號" tabindex="-1">23. 找出主機服務版本號 <a class="header-anchor" href="#_23-找出主機服務版本號" aria-label="Permalink to “23. 找出主機服務版本號”">​</a></h3><p>我們可以使用“<strong>-sV</strong>”選項找出遠程主機上運行的服務及其版本號。</p><pre><code>[root@server1 ~]# nmap -sV 192.168.0.101

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
</code></pre><h4 id="_24-使用-tcp-ack-pa-和-tcp-syn-ps-掃描遠程主機" tabindex="-1">24. 使用 TCP ACK (PA) 和 TCP Syn (PS) 掃描遠程主機 <a class="header-anchor" href="#_24-使用-tcp-ack-pa-和-tcp-syn-ps-掃描遠程主機" aria-label="Permalink to “24. 使用 TCP ACK (PA) 和 TCP Syn (PS) 掃描遠程主機”">​</a></h4><p>有時包過濾防火牆阻止了標準<strong>ICMP</strong>ping請求，在這個情況下，我們可以使用<strong>TCP ACK</strong>和<strong>TCP Syn</strong>方法來掃描遠程主機。</p><pre><code>[root@server1 ~]# nmap -PS 192.168.0.101

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
</code></pre><h3 id="_25-用tcp-ack掃描遠程主機的特定端口" tabindex="-1">25. 用TCP ACK掃描遠程主機的特定端口### <a class="header-anchor" href="#_25-用tcp-ack掃描遠程主機的特定端口" aria-label="Permalink to “25. 用TCP ACK掃描遠程主機的特定端口###”">​</a></h3><pre><code>[root@server1 ~]# nmap -PA -p 22,80 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 18:02 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.166 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_26-用tcp-syn掃描遠程主機的特定端口" tabindex="-1">26. 用TCP SYN掃描遠程主機的特定端口 <a class="header-anchor" href="#_26-用tcp-syn掃描遠程主機的特定端口" aria-label="Permalink to “26. 用TCP SYN掃描遠程主機的特定端口”">​</a></h3><pre><code>[root@server1 ~]# nmap -PS -p 22,80 192.168.0.101

Starting Nmap 4.11 ( http://www.insecure.org/nmap/ ) at 2013-11-11 18:08 EST
Interesting ports on server2.tecmint.com (192.168.0.101):
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http
MAC Address: 08:00:27:D9:8E:D7 (Cadmus Computer Systems)

Nmap finished: 1 IP address (1 host up) scanned in 0.165 seconds
You have new mail in /var/spool/mail/root
</code></pre><h3 id="_27-執行隱秘掃描" tabindex="-1">27. 執行隱秘掃描 <a class="header-anchor" href="#_27-執行隱秘掃描" aria-label="Permalink to “27. 執行隱秘掃描”">​</a></h3><pre><code>[root@server1 ~]# nmap -sS 192.168.0.101

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
</code></pre><h3 id="_28-用tcp-syn掃描最常用的端口" tabindex="-1">28. 用TCP SYN掃描最常用的端口 <a class="header-anchor" href="#_28-用tcp-syn掃描最常用的端口" aria-label="Permalink to “28. 用TCP SYN掃描最常用的端口”">​</a></h3><pre><code>[root@server1 ~]# nmap -sT 192.168.0.101

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
</code></pre><h3 id="_29-執行tcp空掃描來愚弄防火牆" tabindex="-1">29. 執行tcp空掃描來愚弄防火牆 <a class="header-anchor" href="#_29-執行tcp空掃描來愚弄防火牆" aria-label="Permalink to “29. 執行tcp空掃描來愚弄防火牆”">​</a></h3><pre><code>[root@server1 ~]# nmap -sN 192.168.0.101

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
</code></pre><p>這些就是目前<strong>NMAP</strong> 的用法，我會寫出更有創造性的<strong>NMAP</strong>的第二部分(譯註:原文為 I’ll be coming up more creative options of <strong>NMAP</strong> in our second part of this serious,這裏serious可能為筆誤，應該為series)。接着，不要走開也別忘了分享你們有價值的評論。</p><hr>`,95)),t("p",null,[n[14]||(n[14]=e("via: ",-1)),o(s,{href:"http://www.tecmint.com/nmap-command-examples/"},{default:p(()=>[...n[13]||(n[13]=[e("http://www.tecmint.com/nmap-command-examples/",-1)])]),_:1})]),t("p",null,[n[17]||(n[17]=e("譯者：",-1)),o(s,{href:"https://github.com/geekpi"},{default:p(()=>[...n[15]||(n[15]=[e("geekpi",-1)])]),_:1}),n[18]||(n[18]=e(" 校對：",-1)),o(s,{href:"https://github.com/wxy"},{default:p(()=>[...n[16]||(n[16]=[e("wxy",-1)])]),_:1})]),t("p",null,[n[21]||(n[21]=e("本文由 ",-1)),o(s,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...n[19]||(n[19]=[e("LCTT",-1)])]),_:1}),n[22]||(n[22]=e(" 原創翻譯，",-1)),o(s,{href:"http://linux.cn/"},{default:p(()=>[...n[20]||(n[20]=[e("Linux中國",-1)])]),_:1}),n[23]||(n[23]=e(" 榮譽推出",-1))])])}const E=a(d,[["render",h]]);export{P as __pageData,E as default};
