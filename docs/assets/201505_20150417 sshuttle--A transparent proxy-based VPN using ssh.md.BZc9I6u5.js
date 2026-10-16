import{_ as l,a0 as o,w as u,s as h,ao as p,I as r,x as e,a1 as n,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"sshuttle：一个使用ssh的基于VPN的透明代理 | LCTT x X-CMD","titleTemplate":false,"description":"sshuttle：一个使用ssh的基于VPN的透明代理 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"sshuttle：一个使用ssh的基于VPN的透明代理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"sshuttle：一个使用ssh的基于VPN的透明代理 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150417 sshuttle--A transparent proxy-based VPN using ssh","title":"sshuttle：一个使用ssh的基于VPN的透明代理","tag":"201505","desc":""},"relativePath":"201505/20150417 sshuttle--A transparent proxy-based VPN using ssh.md","filePath":"[post].md"}'),i={name:"201505/20150417 sshuttle--A transparent proxy-based VPN using ssh.md"};function d(m,t,g,c,x,b){const s=o("Link");return u(),h("div",null,[t[13]||(t[13]=p(`<h1 id="sshuttle-一个使用ssh的基于vpn的透明代理" tabindex="-1">sshuttle：一个使用ssh的基于VPN的透明代理 <a class="header-anchor" href="#sshuttle-一个使用ssh的基于vpn的透明代理" aria-label="Permalink to “sshuttle：一个使用ssh的基于VPN的透明代理”">​</a></h1><p>sshuttle 允许你通过 ssh 创建一条从你电脑连接到任何远程服务器的 VPN 连接，只要你的服务器支持 python2.3 或则更高的版本。你必须有本机的 root 权限，但是你可以在服务端有普通账户即可。</p><p>你可以在一台机器上同时运行多次 sshuttle 来连接到不同的服务器上，这样你就可以同时使用多个 VPN， sshuttle可以转发你子网中所有流量到VPN中。</p><h3 id="在ubuntu中安装sshuttle" tabindex="-1">在Ubuntu中安装sshuttle <a class="header-anchor" href="#在ubuntu中安装sshuttle" aria-label="Permalink to “在Ubuntu中安装sshuttle”">​</a></h3><p>在终端中输入下面的命令</p><pre><code>sudo apt-get install sshuttle
</code></pre><h3 id="使用-sshuttle" tabindex="-1">使用 sshuttle <a class="header-anchor" href="#使用-sshuttle" aria-label="Permalink to “使用 sshuttle”">​</a></h3><h4 id="sshuttle-语法" tabindex="-1">sshuttle 语法 <a class="header-anchor" href="#sshuttle-语法" aria-label="Permalink to “sshuttle 语法”">​</a></h4><pre><code>sshuttle [options...] [-r [username@]sshserver[:port]] [subnets]
</code></pre><h4 id="选项细节" tabindex="-1">选项细节 <a class="header-anchor" href="#选项细节" aria-label="Permalink to “选项细节”">​</a></h4><p>-r, —remote=[username@]sshserver[:port]</p><p>远程主机名和可选的用户名，用于连接远程服务器的ssh端口号。比如example.com、testuser@example.com、testuser@example.com:2222或者example.com:2244。</p><h4 id="sshuttle-例子" tabindex="-1">sshuttle 例子 <a class="header-anchor" href="#sshuttle-例子" aria-label="Permalink to “sshuttle 例子”">​</a></h4><p>在机器中使用下面的命令：</p><pre><code>sudo sshuttle -r username@sshserver 0.0.0.0/0 -vv
</code></pre><p>当开始后，sshuttle会创建一个ssh会话到由-r指定的服务器。如果-r被丢了，它会在本地运行客户端和服务端，这个有时会在测试时有用。</p><p>连接到远程服务器后，sshuttle会上传它的（python）源码到远程服务器并执行。所以，你就不需要在远程服务器上安装sshuttle，并且客户端和服务器端间不会存在sshuttle版本冲突。</p><h4 id="手册中的更多例子" tabindex="-1">手册中的更多例子 <a class="header-anchor" href="#手册中的更多例子" aria-label="Permalink to “手册中的更多例子”">​</a></h4><p>代理所有的本地连接用于本地测试，没有使用ssh：</p><pre><code>$ sudo sshuttle -v 0/0

Starting sshuttle proxy.
Listening on (‘0.0.0.0′, 12300).
[local sudo] Password:
firewall manager ready.
c : connecting to server...
s: available routes:
s: 192.168.42.0/24
c : connected.
firewall manager: starting transproxy.
c : Accept: ‘192.168.42.106&#39;:50035 -&gt; ‘192.168.42.121&#39;:139.
c : Accept: ‘192.168.42.121&#39;:47523 -&gt; ‘77.141.99.22&#39;:443.
...etc...
^C
firewall manager: undoing changes.
KeyboardInterrupt
c : Keyboard interrupt: exiting.
c : SW#8:192.168.42.121:47523: deleting
c : SW#6:192.168.42.106:50035: deleting
</code></pre><p>测试到远程服务器上的连接，自动猜测主机名和子网：</p><pre><code>$ sudo sshuttle -vNHr example.org

Starting sshuttle proxy.
Listening on (‘0.0.0.0′, 12300).
firewall manager ready.
c : connecting to server...
s: available routes:
s: 77.141.99.0/24
c : connected.
c : seed_hosts: []
firewall manager: starting transproxy.
hostwatch: Found: testbox1: 1.2.3.4
hostwatch: Found: mytest2: 5.6.7.8
hostwatch: Found: domaincontroller: 99.1.2.3
c : Accept: ‘192.168.42.121&#39;:60554 -&gt; ‘77.141.99.22&#39;:22.
^C
firewall manager: undoing changes.
c : Keyboard interrupt: exiting.
c : SW#6:192.168.42.121:60554: deleting
</code></pre><hr>`,23)),r("p",null,[t[1]||(t[1]=e("via: ",-1)),n(s,{href:"http://www.ubuntugeek.com/sshuttle-a-transparent-proxy-based-vpn-using-ssh.html"},{default:a(()=>[...t[0]||(t[0]=[e("http://www.ubuntugeek.com/sshuttle-a-transparent-proxy-based-vpn-using-ssh.html",-1)])]),_:1})]),r("p",null,[t[5]||(t[5]=e("作者：",-1)),n(s,{href:"http://www.ubuntugeek.com/author/ubuntufix"},{default:a(()=>[...t[2]||(t[2]=[e("ruchi",-1)])]),_:1}),t[6]||(t[6]=e(" 译者：",-1)),n(s,{href:"https://github.com/geekpi"},{default:a(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校对：",-1)),n(s,{href:"https://github.com/wxy"},{default:a(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),r("p",null,[t[10]||(t[10]=e("本文由 ",-1)),n(s,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原创翻译，",-1)),n(s,{href:"http://linux.cn/"},{default:a(()=>[...t[9]||(t[9]=[e("Linux中国",-1)])]),_:1}),t[12]||(t[12]=e(" 荣誉推出",-1))])])}const T=l(i,[["render",d]]);export{w as __pageData,T as default};
