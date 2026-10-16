import{_ as s,a0 as p,w as a,s as l,ao as d,I as r,x as e,a1 as o,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse(`{"title":"CentOS 7最小化安裝後找不到‘ifconfig’命令——修復小提示 | LCTT x X-CMD","titleTemplate":false,"description":"CentOS 7最小化安裝後找不到‘ifconfig’命令——修復小提示 | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"CentOS 7最小化安裝後找不到‘ifconfig’命令——修復小提示 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"CentOS 7最小化安裝後找不到‘ifconfig’命令——修復小提示 | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140812 'Ifconfig' Command Not Found In CentOS 7 Minimal Installation--A Quick Tip To Fix It","title":"CentOS 7最小化安裝後找不到‘ifconfig’命令——修復小提示","tag":"201408","desc":""},"relativePath":"201408/20140812 'Ifconfig' Command Not Found In CentOS 7 Minimal Installation--A Quick Tip To Fix It.md","filePath":"[post].md"}`),c={name:"201408/20140812 'Ifconfig' Command Not Found In CentOS 7 Minimal Installation--A Quick Tip To Fix It.md"};function f(u,n,m,g,O,T){const t=p("Link");return a(),l("div",null,[n[13]||(n[13]=d(`<h1 id="centos-7最小化安裝後找不到-ifconfig-命令——修復小提示" tabindex="-1">CentOS 7最小化安裝後找不到‘ifconfig’命令——修復小提示 <a class="header-anchor" href="#centos-7最小化安裝後找不到-ifconfig-命令——修復小提示" aria-label="Permalink to “CentOS 7最小化安裝後找不到‘ifconfig’命令——修復小提示”">​</a></h1><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/08/centos7-790x493.jpg" alt=""></p><p>就像我們所知道的，“<strong>ifconfig</strong>”命令用於配置GNU/Linux系統的網絡接口。它顯示網絡接口卡的詳細信息，包括IP地址，MAC地址，以及網絡接口卡狀態之類。但是，該命令已經過時了，而且在最小化版本的RHEL 7以及它的克隆版本CentOS 7，Oracle Linux 7和Scientific Linux 7中也找不到該命令。</p><h3 id="在centos最小化服務器版本中如何查找網卡ip和其它詳細信息" tabindex="-1">在CentOS最小化服務器版本中如何查找網卡IP和其它詳細信息？ <a class="header-anchor" href="#在centos最小化服務器版本中如何查找網卡ip和其它詳細信息" aria-label="Permalink to “在CentOS最小化服務器版本中如何查找網卡IP和其它詳細信息？”">​</a></h3><p>CentOS 7最小化系統，使用“<strong>ip addr</strong>”和“<strong>ip link</strong>”命令來查找網卡詳情。要知道統計數據，可以使用“<strong>ip -s link</strong>”。</p><p>要查看網卡細節，輸入以下命令：</p><pre><code>ip addr
</code></pre><p>輸出樣例：</p><pre><code>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 16436 qdisc noqueue state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: venet0: &lt;BROADCAST,POINTOPOINT,NOARP,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue state UNKNOWN 
    link/void 
    inet 127.0.0.1/32 scope host venet0
    inet 192.168.1.101/32 brd 192.168.1.101 scope global venet0:0
</code></pre><p>要查看網絡接口統計數據，輸入命令：</p><pre><code>ip link
</code></pre><p>輸出樣例：</p><pre><code>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 16436 qdisc noqueue state UNKNOWN mode DEFAULT 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: venet0: &lt;BROADCAST,POINTOPOINT,NOARP,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue state UNKNOWN mode DEFAULT 
    link/void
</code></pre><p>或者</p><pre><code>ip -s link
</code></pre><p>輸出樣例：</p><pre><code>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 16436 qdisc noqueue state UNKNOWN mode DEFAULT 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    RX: bytes  packets  errors  dropped overrun mcast   
    0          0        0       0       0       0      
    TX: bytes  packets  errors  dropped carrier collsns 
    0          0        0       0       0       0      
2: venet0: &lt;BROADCAST,POINTOPOINT,NOARP,UP,LOWER_UP&gt; mtu 1500 qdisc noqueue state UNKNOWN mode DEFAULT 
    link/void 
    RX: bytes  packets  errors  dropped overrun mcast   
    8515667    6667     0       0       0       0      
    TX: bytes  packets  errors  dropped carrier collsns 
    300403     4249     0       0       0       0
</code></pre><h3 id="在centos-7最小化服務器版本中如何啓用並使用-ifconfig-命令" tabindex="-1">在CentOS 7最小化服務器版本中如何啓用並使用“ifconfig”命令？ <a class="header-anchor" href="#在centos-7最小化服務器版本中如何啓用並使用-ifconfig-命令" aria-label="Permalink to “在CentOS 7最小化服務器版本中如何啓用並使用“ifconfig”命令？”">​</a></h3><p>如果你不知道在哪裏可以找到ifconfig命令，請按照以下簡單的步驟來找到它。首先，讓我們找出哪個包提供了ifconfig命令。要完成這項任務，輸入以下命令：</p><pre><code>yum provides ifconfig
</code></pre><p>輸出樣例：</p><pre><code>Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: centos.aol.in
 * extras: centos.aol.in
 * updates: centos.aol.in
net-tools-2.0-0.17.20131004git.el7.x86_64 : Basic networking tools
Repo        : @base
Matched from:
Filename    : /usr/sbin/ifconfig
</code></pre><p>或者你也可以使用以下命令。</p><pre><code>yum whatprovides ifconfig
</code></pre><p>這裏，“provides”或者“whatprovides”開關用於找出某個包提供了某些功能或文件。</p><p>就像你在上面的輸出中所看到的，<strong>net-tools</strong>包提供了ifconfig命令。因此，讓我們安裝net-tools包來使用ifconfig命令。</p><pre><code>yum install net-tools
</code></pre><p>現在，你就可以像以往一樣使用<strong>ifconfig</strong>命令了。</p><pre><code>ifconfig -a
</code></pre><p>輸出樣例：</p><pre><code>lo: flags=73&lt;UP,LOOPBACK,RUNNING&gt;  mtu 16436
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10&lt;host&gt;
        loop  txqueuelen 0  (Local Loopback)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

venet0: flags=211&lt;UP,BROADCAST,POINTOPOINT,RUNNING,NOARP&gt;  mtu 1500
        inet 127.0.0.1  netmask 255.255.255.255  broadcast 0.0.0.0  destination 127.0.0.1
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 0  (UNSPEC)
        RX packets 7073  bytes 8549159 (8.1 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 4611  bytes 359201 (350.7 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

venet0:0: flags=211&lt;UP,BROADCAST,POINTOPOINT,RUNNING,NOARP&gt;  mtu 1500
        inet 192.168.1.101  netmask 255.255.255.255  broadcast 192.168.1.101  destination 192.168.1.101
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 0  (UNSPEC)
</code></pre><p>盡情享受吧！</p><hr>`,33)),r("p",null,[n[1]||(n[1]=e("via: ",-1)),o(t,{href:"http://www.unixmen.com/ifconfig-command-found-centos-7-minimal-installation-quick-tip-fix/"},{default:i(()=>[...n[0]||(n[0]=[e("http://www.unixmen.com/ifconfig-command-found-centos-7-minimal-installation-quick-tip-fix/",-1)])]),_:1})]),r("p",null,[n[5]||(n[5]=e("作者：",-1)),o(t,{href:"http://www.unixmen.com/author/sk/"},{default:i(()=>[...n[2]||(n[2]=[e("Senthilkumar",-1)])]),_:1}),n[6]||(n[6]=e(" 譯者：",-1)),o(t,{href:"https://github.com/GOLinux"},{default:i(()=>[...n[3]||(n[3]=[e("GOLinux",-1)])]),_:1}),n[7]||(n[7]=e(" 校對：",-1)),o(t,{href:"https://github.com/carolinewuyan"},{default:i(()=>[...n[4]||(n[4]=[e("Caroline",-1)])]),_:1})]),r("p",null,[n[10]||(n[10]=e("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[8]||(n[8]=[e("LCTT",-1)])]),_:1}),n[11]||(n[11]=e(" 原創翻譯，",-1)),o(t,{href:"http://linux.cn/"},{default:i(()=>[...n[9]||(n[9]=[e("Linux中國",-1)])]),_:1}),n[12]||(n[12]=e(" 榮譽推出",-1))])])}const k=s(c,[["render",f]]);export{P as __pageData,k as default};
