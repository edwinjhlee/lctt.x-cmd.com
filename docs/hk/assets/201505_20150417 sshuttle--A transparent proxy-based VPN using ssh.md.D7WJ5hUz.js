import{_ as l,a0 as o,w as u,s as h,ao as p,I as r,x as e,a1 as n,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"sshuttle：一個使用ssh的基於VPN的透明代理 | LCTT x X-CMD","titleTemplate":false,"description":"sshuttle：一個使用ssh的基於VPN的透明代理 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"sshuttle：一個使用ssh的基於VPN的透明代理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"sshuttle：一個使用ssh的基於VPN的透明代理 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150417 sshuttle--A transparent proxy-based VPN using ssh","title":"sshuttle：一個使用ssh的基於VPN的透明代理","tag":"201505","desc":""},"relativePath":"201505/20150417 sshuttle--A transparent proxy-based VPN using ssh.md","filePath":"[post].md"}'),i={name:"201505/20150417 sshuttle--A transparent proxy-based VPN using ssh.md"};function d(m,t,g,c,x,b){const s=o("Link");return u(),h("div",null,[t[13]||(t[13]=p(`<h1 id="sshuttle-一個使用ssh的基於vpn的透明代理" tabindex="-1">sshuttle：一個使用ssh的基於VPN的透明代理 <a class="header-anchor" href="#sshuttle-一個使用ssh的基於vpn的透明代理" aria-label="Permalink to “sshuttle：一個使用ssh的基於VPN的透明代理”">​</a></h1><p>sshuttle 允許你通過 ssh 創建一條從你電腦連接到任何遠程服務器的 VPN 連接，只要你的服務器支持 python2.3 或則更高的版本。你必須有本機的 root 權限，但是你可以在服務端有普通賬户即可。</p><p>你可以在一台機器上同時運行多次 sshuttle 來連接到不同的服務器上，這樣你就可以同時使用多個 VPN， sshuttle可以轉發你子網中所有流量到VPN中。</p><h3 id="在ubuntu中安裝sshuttle" tabindex="-1">在Ubuntu中安裝sshuttle <a class="header-anchor" href="#在ubuntu中安裝sshuttle" aria-label="Permalink to “在Ubuntu中安裝sshuttle”">​</a></h3><p>在終端中輸入下面的命令</p><pre><code>sudo apt-get install sshuttle
</code></pre><h3 id="使用-sshuttle" tabindex="-1">使用 sshuttle <a class="header-anchor" href="#使用-sshuttle" aria-label="Permalink to “使用 sshuttle”">​</a></h3><h4 id="sshuttle-語法" tabindex="-1">sshuttle 語法 <a class="header-anchor" href="#sshuttle-語法" aria-label="Permalink to “sshuttle 語法”">​</a></h4><pre><code>sshuttle [options...] [-r [username@]sshserver[:port]] [subnets]
</code></pre><h4 id="選項細節" tabindex="-1">選項細節 <a class="header-anchor" href="#選項細節" aria-label="Permalink to “選項細節”">​</a></h4><p>-r, —remote=[username@]sshserver[:port]</p><p>遠程主機名和可選的用户名，用於連接遠程服務器的ssh端口號。比如example.com、testuser@example.com、testuser@example.com:2222或者example.com:2244。</p><h4 id="sshuttle-例子" tabindex="-1">sshuttle 例子 <a class="header-anchor" href="#sshuttle-例子" aria-label="Permalink to “sshuttle 例子”">​</a></h4><p>在機器中使用下面的命令：</p><pre><code>sudo sshuttle -r username@sshserver 0.0.0.0/0 -vv
</code></pre><p>當開始後，sshuttle會創建一個ssh會話到由-r指定的服務器。如果-r被丟了，它會在本地運行客户端和服務端，這個有時會在測試時有用。</p><p>連接到遠程服務器後，sshuttle會上傳它的（python）源碼到遠程服務器並執行。所以，你就不需要在遠程服務器上安裝sshuttle，並且客户端和服務器端間不會存在sshuttle版本衝突。</p><h4 id="手冊中的更多例子" tabindex="-1">手冊中的更多例子 <a class="header-anchor" href="#手冊中的更多例子" aria-label="Permalink to “手冊中的更多例子”">​</a></h4><p>代理所有的本地連接用於本地測試，沒有使用ssh：</p><pre><code>$ sudo sshuttle -v 0/0

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
</code></pre><p>測試到遠程服務器上的連接，自動猜測主機名和子網：</p><pre><code>$ sudo sshuttle -vNHr example.org

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
</code></pre><hr>`,23)),r("p",null,[t[1]||(t[1]=e("via: ",-1)),n(s,{href:"http://www.ubuntugeek.com/sshuttle-a-transparent-proxy-based-vpn-using-ssh.html"},{default:a(()=>[...t[0]||(t[0]=[e("http://www.ubuntugeek.com/sshuttle-a-transparent-proxy-based-vpn-using-ssh.html",-1)])]),_:1})]),r("p",null,[t[5]||(t[5]=e("作者：",-1)),n(s,{href:"http://www.ubuntugeek.com/author/ubuntufix"},{default:a(()=>[...t[2]||(t[2]=[e("ruchi",-1)])]),_:1}),t[6]||(t[6]=e(" 譯者：",-1)),n(s,{href:"https://github.com/geekpi"},{default:a(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校對：",-1)),n(s,{href:"https://github.com/wxy"},{default:a(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),r("p",null,[t[10]||(t[10]=e("本文由 ",-1)),n(s,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原創翻譯，",-1)),n(s,{href:"http://linux.cn/"},{default:a(()=>[...t[9]||(t[9]=[e("Linux中國",-1)])]),_:1}),t[12]||(t[12]=e(" 榮譽推出",-1))])])}const T=l(i,[["render",d]]);export{w as __pageData,T as default};
