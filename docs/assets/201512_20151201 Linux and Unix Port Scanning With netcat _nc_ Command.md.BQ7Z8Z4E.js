import{_ as p,a0 as r,w as l,s,I as e,x as t,a1 as o,A as a,ao as m}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const N=JSON.parse('{"title":"使用 netcat [nc] 命令对 Linux 和 Unix 进行端口扫描 | LCTT x X-CMD","titleTemplate":false,"description":"使用 netcat [nc] 命令对 Linux 和 Unix 进行端口扫描 | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 netcat [nc] 命令对 Linux 和 Unix 进行端口扫描 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 netcat [nc] 命令对 Linux 和 Unix 进行端口扫描 | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20151201 Linux and Unix Port Scanning With netcat [nc] Command","title":"使用 netcat [nc] 命令对 Linux 和 Unix 进行端口扫描","tag":"201512","desc":""},"relativePath":"201512/20151201 Linux and Unix Port Scanning With netcat [nc] Command.md","filePath":"[post].md"}'),d={name:"201512/20151201 Linux and Unix Port Scanning With netcat [nc] Command.md"};function c(u,n,x,v,f,g){const i=r("Link");return l(),s("div",null,[n[23]||(n[23]=e("h1",{id:"使用-netcat-nc-命令对-linux-和-unix-进行端口扫描",tabindex:"-1"},[t("使用 netcat [nc] 命令对 Linux 和 Unix 进行端口扫描 "),e("a",{class:"header-anchor",href:"#使用-netcat-nc-命令对-linux-和-unix-进行端口扫描","aria-label":"Permalink to “使用 netcat [nc] 命令对 Linux 和 Unix 进行端口扫描”"},"​")],-1)),e("p",null,[n[1]||(n[1]=t("我如何在自己的服务器上找出哪些端口是开放的？如何使用 nc 命令进行端口扫描来替换 ",-1)),o(i,{href:"https://linux.cn/article-2561-1.html"},{default:a(()=>[...n[0]||(n[0]=[t("Linux 或类 Unix 中的 nmap 命令",-1)])]),_:1}),n[2]||(n[2]=t("？",-1))]),e("p",null,[n[4]||(n[4]=t("nmap (“Network Mapper”)是一个用于网络探测和安全审核的开源工具。如果 nmap 没有安装或者你不希望使用 nmap，那你可以用 netcat/nc 命令进行端口扫描。它对于查看目标计算机上哪些端口是开放的或者运行着服务是非常有用的。你也可以使用 ",-1)),o(i,{href:"https://linux.cn/article-2561-1.html"},{default:a(()=>[...n[3]||(n[3]=[t("nmap 命令进行端口扫描",-1)])]),_:1}),n[5]||(n[5]=t(" 。",-1))]),n[24]||(n[24]=m(`<h3 id="如何使用-nc-来扫描-linux-unix-和-windows-服务器的端口呢" tabindex="-1">如何使用 nc 来扫描 Linux，UNIX 和 Windows 服务器的端口呢？ <a class="header-anchor" href="#如何使用-nc-来扫描-linux-unix-和-windows-服务器的端口呢" aria-label="Permalink to “如何使用 nc 来扫描 Linux，UNIX 和 Windows 服务器的端口呢？”">​</a></h3><p>如果未安装 nmap，试试 nc/netcat 命令，如下所示。-z 参数用来告诉 nc 报告开放的端口，而不是启动连接。在 nc 命令中使用 -z 参数时，你需要在主机名/ip 后面限定端口的范围和加速其运行：</p><pre><code>### 语法 ###
### nc -z -v {host-name-here} {port-range-here}
nc -z -v host-name-here ssh
nc -z -v host-name-here 22
nc -w 1 -z -v server-name-here port-Number-her
 
### 扫描 1 to 1023 端口 ###
nc -zv vip-1.vsnl.nixcraft.in 1-1023
</code></pre><p>输出示例:</p><pre><code>Connection to localhost 25 port [tcp/smtp] succeeded!
Connection to vip-1.vsnl.nixcraft.in 25 port [tcp/smtp] succeeded!
Connection to vip-1.vsnl.nixcraft.in 80 port [tcp/http] succeeded!
Connection to vip-1.vsnl.nixcraft.in 143 port [tcp/imap] succeeded!
Connection to vip-1.vsnl.nixcraft.in 199 port [tcp/smux] succeeded!
Connection to vip-1.vsnl.nixcraft.in 783 port [tcp/*] succeeded!
Connection to vip-1.vsnl.nixcraft.in 904 port [tcp/vmware-authd] succeeded!
Connection to vip-1.vsnl.nixcraft.in 993 port [tcp/imaps] succeeded!
</code></pre><p>你也可以扫描单个端口:</p><pre><code>nc -zv v.txvip1 443
nc -zv v.txvip1 80
nc -zv v.txvip1 22
nc -zv v.txvip1 21
nc -zv v.txvip1 smtp
nc -zvn v.txvip1 ftp

### 使用1秒的超时值来更快的扫描 ###
netcat -v -z -n -w 1 v.txvip1 1-1023
</code></pre><p>输出示例:</p><p><img src="http://s0.cyberciti.org/uploads/faq/2007/07/scan-with-nc.jpg" alt="Fig.01: Linux/Unix: Use Netcat to Establish and Test TCP and UDP Connections on a Server"></p><p><em>图01：Linux/Unix：使用 Netcat 来测试 TCP 和 UDP 与服务器建立连接</em></p><ol><li>-z : 端口扫描模式即零 I/O 模式。</li><li>-v : 显示详细信息 [使用 -vv 来输出更详细的信息]。</li><li>-n : 使用纯数字 IP 地址，即不用 DNS 来解析 IP 地址。</li><li>-w 1 : 设置超时值设置为1。</li></ol><p>更多例子:</p><pre><code>$ netcat -z -vv www.cyberciti.biz http
www.cyberciti.biz [75.126.153.206] 80 (http) open
 sent 0, rcvd 0
$ netcat -z -vv google.com https
DNS fwd/rev mismatch: google.com != maa03s16-in-f2.1e100.net
DNS fwd/rev mismatch: google.com != maa03s16-in-f6.1e100.net
DNS fwd/rev mismatch: google.com != maa03s16-in-f5.1e100.net
DNS fwd/rev mismatch: google.com != maa03s16-in-f3.1e100.net
DNS fwd/rev mismatch: google.com != maa03s16-in-f8.1e100.net
DNS fwd/rev mismatch: google.com != maa03s16-in-f0.1e100.net
DNS fwd/rev mismatch: google.com != maa03s16-in-f7.1e100.net
DNS fwd/rev mismatch: google.com != maa03s16-in-f4.1e100.net
google.com [74.125.236.162] 443 (https) open
 sent 0, rcvd 0
$ netcat -v -z -n -w 1 192.168.1.254 1-1023
(UNKNOWN) [192.168.1.254] 989 (ftps-data) open
(UNKNOWN) [192.168.1.254] 443 (https) open
(UNKNOWN) [192.168.1.254] 53 (domain) open
</code></pre><p>也可以看看 ：</p>`,14)),e("ul",null,[e("li",null,[o(i,{href:"https://linux.cn/article-2561-1.html"},{default:a(()=>[...n[6]||(n[6]=[t("使用 nmap 命令扫描网络中开放的端口",-1)])]),_:1}),n[7]||(n[7]=t("。",-1))]),e("li",null,[n[10]||(n[10]=t("手册页 - ",-1)),o(i,{href:"http://www.manpager.com/linux/man1/nc.1.html"},{default:a(()=>[...n[8]||(n[8]=[t("nc(1)",-1)])]),_:1}),n[11]||(n[11]=t(", ",-1)),o(i,{href:"http://www.manpager.com/linux/man1/nmap.1.html"},{default:a(()=>[...n[9]||(n[9]=[t("nmap(1)",-1)])]),_:1})])]),n[25]||(n[25]=e("hr",null,null,-1)),e("p",null,[n[13]||(n[13]=t("via: ",-1)),o(i,{href:"http://www.cyberciti.biz/faq/linux-port-scanning/"},{default:a(()=>[...n[12]||(n[12]=[t("http://www.cyberciti.biz/faq/linux-port-scanning/",-1)])]),_:1})]),e("p",null,[n[16]||(n[16]=t("作者：Vivek Gite 译者：",-1)),o(i,{href:"https://github.com/strugglingyouth"},{default:a(()=>[...n[14]||(n[14]=[t("strugglingyouth",-1)])]),_:1}),n[17]||(n[17]=t(" 校对：",-1)),o(i,{href:"https://github.com/wxy"},{default:a(()=>[...n[15]||(n[15]=[t("wxy",-1)])]),_:1})]),e("p",null,[n[20]||(n[20]=t("本文由 ",-1)),o(i,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...n[18]||(n[18]=[t("LCTT",-1)])]),_:1}),n[21]||(n[21]=t(" 原创编译，",-1)),o(i,{href:"https://linux.cn/"},{default:a(()=>[...n[19]||(n[19]=[t("Linux中国",-1)])]),_:1}),n[22]||(n[22]=t(" 荣誉推出",-1))])])}const h=p(d,[["render",c]]);export{N as __pageData,h as default};
