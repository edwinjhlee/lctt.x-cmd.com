import{_ as t,a0 as o,w as d,s as r,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何在 Linux 中查看进程占用的端口号 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 中查看进程占用的端口号 | LCTT (201810) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 中查看进程占用的端口号 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 中查看进程占用的端口号 | LCTT (201810) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201810/20180924 How To Find Out Which Port Number A Process Is Using In Linux","title":"如何在 Linux 中查看进程占用的端口号","tag":"201810","desc":""},"relativePath":"201810/20180924 How To Find Out Which Port Number A Process Is Using In Linux.md","filePath":"[post].md"}'),c={name:"201810/20180924 How To Find Out Which Port Number A Process Is Using In Linux.md"};function h(u,s,g,m,k,b){const p=o("Link");return d(),r("div",null,[s[19]||(s[19]=a("h1",{id:"如何在-linux-中查看进程占用的端口号",tabindex:"-1"},[n("如何在 Linux 中查看进程占用的端口号 "),a("a",{class:"header-anchor",href:"#如何在-linux-中查看进程占用的端口号","aria-label":"Permalink to “如何在 Linux 中查看进程占用的端口号”"},"​")],-1)),s[20]||(s[20]=a("p",null,"对于 Linux 系统管理员来说，清楚某个服务是否正确地绑定或监听某个端口，是至关重要的。如果你需要处理端口相关的问题，这篇文章可能会对你有用。",-1)),s[21]||(s[21]=a("p",null,"端口是 Linux 系统上特定进程之间逻辑连接的标识，包括物理端口和软件端口。由于 Linux 操作系统是一个软件，因此本文只讨论软件端口。软件端口始终与主机的 IP 地址和相关的通信协议相关联，因此端口常用于区分应用程序。大部分涉及到网络的服务都必须打开一个套接字来监听传入的网络请求，而每个服务都使用一个独立的套接字。",-1)),s[22]||(s[22]=a("p",null,[a("strong",null,"推荐阅读：")],-1)),a("ul",null,[a("li",null,[e(p,{href:"https://www.2daygeek.com/how-to-check-find-the-process-id-pid-ppid-of-a-running-program-in-linux/"},{default:i(()=>[...s[0]||(s[0]=[n("在 Linux 上查看进程 ID 的 4 种方法",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.2daygeek.com/kill-terminate-a-process-in-linux-using-kill-pkill-killall-command/"},{default:i(()=>[...s[1]||(s[1]=[n("在 Linux 上终止进程的 3 种方法",-1)])]),_:1})])]),s[23]||(s[23]=l(`<p>套接字是和 IP 地址、软件端口和协议结合起来使用的，而端口号对传输控制协议（TCP）和用户数据报协议（UDP）协议都适用，TCP 和 UDP 都可以使用 0 到 65535 之间的端口号进行通信。</p><p>以下是端口分配类别：</p><ul><li>0 - 1023： 常用端口和系统端口</li><li>1024 - 49151： 软件的注册端口</li><li>49152 - 65535： 动态端口或私有端口</li></ul><p>在 Linux 上的 <code>/etc/services</code> 文件可以查看到更多关于保留端口的信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># less /etc/services</span></span>
<span class="line"><span># /etc/services:</span></span>
<span class="line"><span># $Id: services,v 1.55 2013/04/14 ovasik Exp $</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Network services, Internet style</span></span>
<span class="line"><span># IANA services version: last updated 2013-04-10</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Note that it is presently the policy of IANA to assign a single well-known</span></span>
<span class="line"><span># port number for both TCP and UDP; hence, most entries here have two entries</span></span>
<span class="line"><span># even if the protocol doesn&#39;t support UDP operations.</span></span>
<span class="line"><span># Updated from RFC 1700, \`\`Assigned Numbers&#39;&#39; (October 1994). Not all ports</span></span>
<span class="line"><span># are included, only the more common ones.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># The latest IANA port assignments can be gotten from</span></span>
<span class="line"><span># http://www.iana.org/assignments/port-numbers</span></span>
<span class="line"><span># The Well Known Ports are those from 0 through 1023.</span></span>
<span class="line"><span># The Registered Ports are those from 1024 through 49151</span></span>
<span class="line"><span># The Dynamic and/or Private Ports are those from 49152 through 65535</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Each line describes one service, and is of the form:</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># service-name port/protocol [aliases ...] [# comment]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tcpmux 1/tcp # TCP port service multiplexer</span></span>
<span class="line"><span>tcpmux 1/udp # TCP port service multiplexer</span></span>
<span class="line"><span>rje 5/tcp # Remote Job Entry</span></span>
<span class="line"><span>rje 5/udp # Remote Job Entry</span></span>
<span class="line"><span>echo 7/tcp</span></span>
<span class="line"><span>echo 7/udp</span></span>
<span class="line"><span>discard 9/tcp sink null</span></span>
<span class="line"><span>discard 9/udp sink null</span></span>
<span class="line"><span>systat 11/tcp users</span></span>
<span class="line"><span>systat 11/udp users</span></span>
<span class="line"><span>daytime 13/tcp</span></span>
<span class="line"><span>daytime 13/udp</span></span>
<span class="line"><span>qotd 17/tcp quote</span></span>
<span class="line"><span>qotd 17/udp quote</span></span>
<span class="line"><span>msp 18/tcp # message send protocol (historic)</span></span>
<span class="line"><span>msp 18/udp # message send protocol (historic)</span></span>
<span class="line"><span>chargen 19/tcp ttytst source</span></span>
<span class="line"><span>chargen 19/udp ttytst source</span></span>
<span class="line"><span>ftp-data 20/tcp</span></span>
<span class="line"><span>ftp-data 20/udp</span></span>
<span class="line"><span># 21 is registered to ftp, but also used by fsp</span></span>
<span class="line"><span>ftp 21/tcp</span></span>
<span class="line"><span>ftp 21/udp fsp fspd</span></span>
<span class="line"><span>ssh 22/tcp # The Secure Shell (SSH) Protocol</span></span>
<span class="line"><span>ssh 22/udp # The Secure Shell (SSH) Protocol</span></span>
<span class="line"><span>telnet 23/tcp</span></span>
<span class="line"><span>telnet 23/udp</span></span>
<span class="line"><span># 24 - private mail system</span></span>
<span class="line"><span>lmtp 24/tcp # LMTP Mail Delivery</span></span>
<span class="line"><span>lmtp 24/udp # LMTP Mail Delivery</span></span></code></pre></div><p>可以使用以下六种方法查看端口信息。</p><ul><li><code>ss</code>：可以用于转储套接字统计信息。</li><li><code>netstat</code>：可以显示打开的套接字列表。</li><li><code>lsof</code>：可以列出打开的文件。</li><li><code>fuser</code>：可以列出那些打开了文件的进程的进程 ID。</li><li><code>nmap</code>：是网络检测工具和端口扫描程序。</li><li><code>systemctl</code>：是 systemd 系统的控制管理器和服务管理器。</li></ul><p>以下我们将找出 <code>sshd</code> 守护进程所使用的端口号。</p><h3 id="方法-1-使用-ss-命令" tabindex="-1">方法 1：使用 ss 命令 <a class="header-anchor" href="#方法-1-使用-ss-命令" aria-label="Permalink to “方法 1：使用 ss 命令”">​</a></h3><p><code>ss</code> 一般用于转储套接字统计信息。它能够输出类似于 <code>netstat</code> 输出的信息，但它可以比其它工具显示更多的 TCP 信息和状态信息。</p><p>它还可以显示所有类型的套接字统计信息，包括 PACKET、TCP、UDP、DCCP、RAW、Unix 域等。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ss -tnlp | grep ssh</span></span>
<span class="line"><span>LISTEN 0 128 *:22 *:* users:((&quot;sshd&quot;,pid=997,fd=3))</span></span>
<span class="line"><span>LISTEN 0 128 :::22 :::* users:((&quot;sshd&quot;,pid=997,fd=4))</span></span></code></pre></div><p>也可以使用端口号来检查。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ss -tnlp | grep &quot;:22&quot;</span></span>
<span class="line"><span>LISTEN 0 128 *:22 *:* users:((&quot;sshd&quot;,pid=997,fd=3))</span></span>
<span class="line"><span>LISTEN 0 128 :::22 :::* users:((&quot;sshd&quot;,pid=997,fd=4))</span></span></code></pre></div><h3 id="方法-2-使用-netstat-命令" tabindex="-1">方法 2：使用 netstat 命令 <a class="header-anchor" href="#方法-2-使用-netstat-命令" aria-label="Permalink to “方法 2：使用 netstat 命令”">​</a></h3><p><code>netstat</code> 能够显示网络连接、路由表、接口统计信息、伪装连接以及多播成员。</p><p>默认情况下，<code>netstat</code> 会列出打开的套接字。如果不指定任何地址族，则会显示所有已配置地址族的活动套接字。但 <code>netstat</code> 已经过时了，一般会使用 <code>ss</code> 来替代。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># netstat -tnlp | grep ssh</span></span>
<span class="line"><span>tcp 0 0 0.0.0.0:22 0.0.0.0:* LISTEN 997/sshd</span></span>
<span class="line"><span>tcp6 0 0 :::22 :::* LISTEN 997/sshd</span></span></code></pre></div><p>也可以使用端口号来检查。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># netstat -tnlp | grep &quot;:22&quot;</span></span>
<span class="line"><span>tcp 0 0 0.0.0.0:22 0.0.0.0:* LISTEN 1208/sshd</span></span>
<span class="line"><span>tcp6 0 0 :::22 :::* LISTEN 1208/sshd</span></span></code></pre></div><h3 id="方法-3-使用-lsof-命令" tabindex="-1">方法 3：使用 lsof 命令 <a class="header-anchor" href="#方法-3-使用-lsof-命令" aria-label="Permalink to “方法 3：使用 lsof 命令”">​</a></h3><p><code>lsof</code> 能够列出打开的文件，并列出系统上被进程打开的文件的相关信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># lsof -i -P | grep ssh</span></span>
<span class="line"><span>COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME</span></span>
<span class="line"><span>sshd 11584 root 3u IPv4 27625 0t0 TCP *:22 (LISTEN)</span></span>
<span class="line"><span>sshd 11584 root 4u IPv6 27627 0t0 TCP *:22 (LISTEN)</span></span>
<span class="line"><span>sshd 11592 root 3u IPv4 27744 0t0 TCP vps.2daygeek.com:ssh-&gt;103.5.134.167:49902 (ESTABLISHED)</span></span></code></pre></div><p>也可以使用端口号来检查。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># lsof -i tcp:22</span></span>
<span class="line"><span>COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME</span></span>
<span class="line"><span>sshd 1208 root 3u IPv4 20919 0t0 TCP *:ssh (LISTEN)</span></span>
<span class="line"><span>sshd 1208 root 4u IPv6 20921 0t0 TCP *:ssh (LISTEN)</span></span>
<span class="line"><span>sshd 11592 root 3u IPv4 27744 0t0 TCP vps.2daygeek.com:ssh-&gt;103.5.134.167:49902 (ESTABLISHED)</span></span></code></pre></div><h3 id="方法-4-使用-fuser-命令" tabindex="-1">方法 4：使用 fuser 命令 <a class="header-anchor" href="#方法-4-使用-fuser-命令" aria-label="Permalink to “方法 4：使用 fuser 命令”">​</a></h3><p><code>fuser</code> 工具会将本地系统上打开了文件的进程的进程 ID 显示在标准输出中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># fuser -v 22/tcp</span></span>
<span class="line"><span> USER PID ACCESS COMMAND</span></span>
<span class="line"><span>22/tcp: root 1208 F.... sshd</span></span>
<span class="line"><span> root 12388 F.... sshd</span></span>
<span class="line"><span> root 49339 F.... sshd</span></span></code></pre></div><h3 id="方法-5-使用-nmap-命令" tabindex="-1">方法 5：使用 nmap 命令 <a class="header-anchor" href="#方法-5-使用-nmap-命令" aria-label="Permalink to “方法 5：使用 nmap 命令”">​</a></h3><p><code>nmap</code>（“Network Mapper”）是一款用于网络检测和安全审计的开源工具。它最初用于对大型网络进行快速扫描，但它对于单个主机的扫描也有很好的表现。</p><p><code>nmap</code> 使用原始 IP 数据包来确定网络上可用的主机，这些主机的服务（包括应用程序名称和版本）、主机运行的操作系统（包括操作系统版本等信息）、正在使用的数据包过滤器或防火墙的类型，以及很多其它信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># nmap -sV -p 22 localhost</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Starting Nmap 6.40 ( http://nmap.org ) at 2018-09-23 12:36 IST</span></span>
<span class="line"><span>Nmap scan report for localhost (127.0.0.1)</span></span>
<span class="line"><span>Host is up (0.000089s latency).</span></span>
<span class="line"><span>Other addresses for localhost (not scanned): 127.0.0.1</span></span>
<span class="line"><span>PORT STATE SERVICE VERSION</span></span>
<span class="line"><span>22/tcp open ssh OpenSSH 7.4 (protocol 2.0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Service detection performed. Please report any incorrect results at http://nmap.org/submit/ .</span></span>
<span class="line"><span>Nmap done: 1 IP address (1 host up) scanned in 0.44 seconds</span></span></code></pre></div><h3 id="方法-6-使用-systemctl-命令" tabindex="-1">方法 6：使用 systemctl 命令 <a class="header-anchor" href="#方法-6-使用-systemctl-命令" aria-label="Permalink to “方法 6：使用 systemctl 命令”">​</a></h3><p><code>systemctl</code> 是 systemd 系统的控制管理器和服务管理器。它取代了旧的 SysV 初始化系统管理，目前大多数现代 Linux 操作系统都采用了 systemd。</p><p><strong>推荐阅读：</strong></p>`,35)),a("ul",null,[a("li",null,[e(p,{href:"https://www.2daygeek.com/chkservice-a-tool-for-managing-systemd-units-from-linux-terminal/"},{default:i(()=>[...s[2]||(s[2]=[n("chkservice – Linux 终端上的 systemd 单元管理工具",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.2daygeek.com/how-to-check-all-running-services-in-linux/"},{default:i(()=>[...s[3]||(s[3]=[n("如何查看 Linux 系统上正在运行的服务",-1)])]),_:1})])]),s[24]||(s[24]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># systemctl status sshd</span></span>
<span class="line"><span>● sshd.service - OpenSSH server daemon</span></span>
<span class="line"><span> Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)</span></span>
<span class="line"><span> Active: active (running) since Sun 2018-09-23 02:08:56 EDT; 6h 11min ago</span></span>
<span class="line"><span> Docs: man:sshd(8)</span></span>
<span class="line"><span> man:sshd_config(5)</span></span>
<span class="line"><span> Main PID: 11584 (sshd)</span></span>
<span class="line"><span> CGroup: /system.slice/sshd.service</span></span>
<span class="line"><span> └─11584 /usr/sbin/sshd -D</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sep 23 02:08:56 vps.2daygeek.com systemd[1]: Starting OpenSSH server daemon...</span></span>
<span class="line"><span>Sep 23 02:08:56 vps.2daygeek.com sshd[11584]: Server listening on 0.0.0.0 port 22.</span></span>
<span class="line"><span>Sep 23 02:08:56 vps.2daygeek.com sshd[11584]: Server listening on :: port 22.</span></span>
<span class="line"><span>Sep 23 02:08:56 vps.2daygeek.com systemd[1]: Started OpenSSH server daemon.</span></span>
<span class="line"><span>Sep 23 02:09:15 vps.2daygeek.com sshd[11589]: Connection closed by 103.5.134.167 port 49899 [preauth]</span></span>
<span class="line"><span>Sep 23 02:09:41 vps.2daygeek.com sshd[11592]: Accepted password for root from 103.5.134.167 port 49902 ssh2</span></span></code></pre></div><p>以上输出的内容显示了最近一次启动 <code>sshd</code> 服务时 <code>ssh</code> 服务的监听端口。但它不会将最新日志更新到输出中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># systemctl status sshd</span></span>
<span class="line"><span>● sshd.service - OpenSSH server daemon</span></span>
<span class="line"><span> Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)</span></span>
<span class="line"><span> Active: active (running) since Thu 2018-09-06 07:40:59 IST; 2 weeks 3 days ago</span></span>
<span class="line"><span> Docs: man:sshd(8)</span></span>
<span class="line"><span> man:sshd_config(5)</span></span>
<span class="line"><span> Main PID: 1208 (sshd)</span></span>
<span class="line"><span> CGroup: /system.slice/sshd.service</span></span>
<span class="line"><span> ├─ 1208 /usr/sbin/sshd -D</span></span>
<span class="line"><span> ├─23951 sshd: [accepted]</span></span>
<span class="line"><span> └─23952 sshd: [net]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sep 23 12:50:36 vps.2daygeek.com sshd[23909]: Invalid user pi from 95.210.113.142 port 51666</span></span>
<span class="line"><span>Sep 23 12:50:36 vps.2daygeek.com sshd[23909]: input_userauth_request: invalid user pi [preauth]</span></span>
<span class="line"><span>Sep 23 12:50:37 vps.2daygeek.com sshd[23911]: pam_unix(sshd:auth): check pass; user unknown</span></span>
<span class="line"><span>Sep 23 12:50:37 vps.2daygeek.com sshd[23911]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=95.210.113.142</span></span>
<span class="line"><span>Sep 23 12:50:37 vps.2daygeek.com sshd[23909]: pam_unix(sshd:auth): check pass; user unknown</span></span>
<span class="line"><span>Sep 23 12:50:37 vps.2daygeek.com sshd[23909]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=95.210.113.142</span></span>
<span class="line"><span>Sep 23 12:50:39 vps.2daygeek.com sshd[23911]: Failed password for invalid user pi from 95.210.113.142 port 51670 ssh2</span></span>
<span class="line"><span>Sep 23 12:50:39 vps.2daygeek.com sshd[23909]: Failed password for invalid user pi from 95.210.113.142 port 51666 ssh2</span></span>
<span class="line"><span>Sep 23 12:50:40 vps.2daygeek.com sshd[23911]: Connection closed by 95.210.113.142 port 51670 [preauth]</span></span>
<span class="line"><span>Sep 23 12:50:40 vps.2daygeek.com sshd[23909]: Connection closed by 95.210.113.142 port 51666 [preauth]</span></span></code></pre></div><p>大部分情况下，以上的输出不会显示进程的实际端口号。这时更建议使用以下这个 <code>journalctl</code> 命令检查日志文件中的详细信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># journalctl | grep -i &quot;openssh\\|sshd&quot;</span></span>
<span class="line"><span>Sep 23 02:08:56 vps138235.vps.ovh.ca sshd[997]: Received signal 15; terminating.</span></span>
<span class="line"><span>Sep 23 02:08:56 vps138235.vps.ovh.ca systemd[1]: Stopping OpenSSH server daemon...</span></span>
<span class="line"><span>Sep 23 02:08:56 vps138235.vps.ovh.ca systemd[1]: Starting OpenSSH server daemon...</span></span>
<span class="line"><span>Sep 23 02:08:56 vps138235.vps.ovh.ca sshd[11584]: Server listening on 0.0.0.0 port 22.</span></span>
<span class="line"><span>Sep 23 02:08:56 vps138235.vps.ovh.ca sshd[11584]: Server listening on :: port 22.</span></span>
<span class="line"><span>Sep 23 02:08:56 vps138235.vps.ovh.ca systemd[1]: Started OpenSSH server daemon.</span></span></code></pre></div><hr>`,6)),a("p",null,[s[5]||(s[5]=n("via: ",-1)),e(p,{href:"https://www.2daygeek.com/how-to-find-out-which-port-number-a-process-is-using-in-linux/"},{default:i(()=>[...s[4]||(s[4]=[n("https://www.2daygeek.com/how-to-find-out-which-port-number-a-process-is-using-in-linux/",-1)])]),_:1})]),a("p",null,[s[10]||(s[10]=n("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/prakash/"},{default:i(()=>[...s[6]||(s[6]=[n("Prakash Subramanian",-1)])]),_:1}),s[11]||(s[11]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[7]||(s[7]=[n("lujun9972",-1)])]),_:1}),s[12]||(s[12]=n(" 译者：",-1)),e(p,{href:"https://github.com/HankChow"},{default:i(()=>[...s[8]||(s[8]=[n("HankChow",-1)])]),_:1}),s[13]||(s[13]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[15]||(s[15]=[n("Linux中国",-1)])]),_:1}),s[18]||(s[18]=n(" 荣誉推出",-1))])])}const S=t(c,[["render",h]]);export{y as __pageData,S as default};
