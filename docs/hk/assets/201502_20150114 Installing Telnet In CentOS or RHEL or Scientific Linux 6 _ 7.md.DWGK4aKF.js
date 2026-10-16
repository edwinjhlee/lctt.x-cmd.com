import{_ as p,a0 as s,w as a,s as d,ao as o,I as l,a1 as i,A as r,x as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const E=JSON.parse('{"title":"在CentOS/RHEL/Scientific Linux 6 & 7 上安裝Telnet | LCTT x X-CMD","titleTemplate":false,"description":"在CentOS/RHEL/Scientific Linux 6 & 7 上安裝Telnet | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在CentOS/RHEL/Scientific Linux 6 & 7 上安裝Telnet | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在CentOS/RHEL/Scientific Linux 6 & 7 上安裝Telnet | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150114 Installing Telnet In CentOS or RHEL or Scientific Linux 6 & 7","title":"在CentOS/RHEL/Scientific Linux 6 & 7 上安裝Telnet","tag":"201502","desc":""},"relativePath":"201502/20150114 Installing Telnet In CentOS or RHEL or Scientific Linux 6 & 7.md","filePath":"[post].md"}'),c={name:"201502/20150114 Installing Telnet In CentOS or RHEL or Scientific Linux 6 & 7.md"};function T(f,e,u,C,m,x){const n=s("Link");return a(),d("div",null,[e[15]||(e[15]=o('<h1 id="在centos-rhel-scientific-linux-6-7-上安裝telnet" tabindex="-1">在CentOS/RHEL/Scientific Linux 6 &amp; 7 上安裝Telnet <a class="header-anchor" href="#在centos-rhel-scientific-linux-6-7-上安裝telnet" aria-label="Permalink to “在CentOS/RHEL/Scientific Linux 6 &amp; 7 上安裝Telnet”">​</a></h1><h4 id="聲明" tabindex="-1">聲明： <a class="header-anchor" href="#聲明" aria-label="Permalink to “聲明：”">​</a></h4><p>在安裝和使用Telnet之前，需要記住以下幾點。</p><ul><li>在公網(WAN)中使用Telnet是非常不好的想法。它會以明文的格式傳輸登入數據。每個人都可以看到明文。</li><li>如果你還是需要Telnet，強烈建議你只在局域網內部使用。</li><li>你可以使用<strong>SSH</strong>作為替代方法。但是確保不要用root用户登錄。</li></ul><h3 id="telnet是什麼" tabindex="-1">Telnet是什麼？ <a class="header-anchor" href="#telnet是什麼" aria-label="Permalink to “Telnet是什麼？”">​</a></h3>',5)),l("p",null,[i(n,{href:"http://en.wikipedia.org/wiki/Telnet"},{default:r(()=>[...e[0]||(e[0]=[t("Telnet",-1)])]),_:1}),e[1]||(e[1]=t(" 是用於通過TCP/IP網絡遠程登錄計算機的協議。一旦與遠程計算機建立了連接，它就會成為一個虛擬終端且允許你與遠程計算機通信。",-1))]),e[16]||(e[16]=o(`<p>在本篇教程中，我們會展示如何安裝Telnet並且如何通過Telnet訪問遠程系統。</p><h3 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h3><p>打開終端並輸入下面的命令來安裝telnet：</p><pre><code>yum install telnet telnet-server -y
</code></pre><p>現在telnet已經安裝在你的服務器上了。接下來編輯文件<strong>/etc/xinetd.d/telnet</strong>：</p><pre><code>vi /etc/xinetd.d/telnet
</code></pre><p>設置 <strong>disable = no</strong>:</p><pre><code># default: on
# description: The telnet server serves telnet sessions; it uses \\
#       unencrypted username/password pairs for authentication.
service telnet
{
        flags           = REUSE
        socket_type     = stream
        wait            = no
        user            = root
        server          = /usr/sbin/in.telnetd
        log_on_failure  += USERID
        disable         = no
}
</code></pre><p>保存並退出文件。記住我們不必在CentOS 7做這步。</p><p>接下來使用下面的命令重啓telnet服務：</p><p>在CentOS 6.x 系統中：</p><pre><code>service xinetd start
</code></pre><p>讓這個服務在每次重啓時都會啓動：</p><p>在CentOS 6上：</p><pre><code>chkconfig telnet on
chkconfig xinetd on
</code></pre><p>在CentOS 7上：</p><pre><code>systemctl start telnet.socket
systemctl enable telnet.socket
</code></pre><p>讓telnet的默認端口<strong>23</strong>可以通過防火牆和路由器。要讓telnet端口可以通過防火牆，在CentOS 6.x系統中編輯下面的文件：</p><pre><code>vi /etc/sysconfig/iptables
</code></pre><p>加入如下行“-A INPUT -p tcp -m state --state NEW --dport 23 -j ACCEPT”：</p><pre><code># Firewall configuration written by system-config-firewall
# Manual customization of this file is not recommended.
*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -p tcp -m state --state NEW --dport 23 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT
</code></pre><p>保存並退出文件。重啓iptables服務：</p><pre><code>service iptables restart
</code></pre><p>在CentOS 7中，運行下面的命令讓telnet服務可以通過防火牆。</p><pre><code>firewall-cmd --permanent --add-port=23/tcp
firewall-cmd --reload
</code></pre><p>就是這樣。現在telnet服務就可以使用了。</p><h4 id="創建用户" tabindex="-1">創建用户 <a class="header-anchor" href="#創建用户" aria-label="Permalink to “創建用户”">​</a></h4><p>創建一個測試用户，比如用户名是“<strong>sk</strong>”，密碼是“<strong>centos</strong>“:</p><pre><code>useradd sk
passwd sk
</code></pre><h4 id="客户端配置" tabindex="-1">客户端配置 <a class="header-anchor" href="#客户端配置" aria-label="Permalink to “客户端配置”">​</a></h4><p>安裝telnet包：</p><pre><code>yum install telnet
</code></pre><p>在基於DEB的系統中：</p><pre><code>sudo apt-get install telnet
</code></pre><p>現在，打開終端，嘗試訪問你的服務器（遠程主機）。</p><p>如果你的客户端是Linux系統，打開終端並輸入下面的命令來連接到telnet服務器上。</p><pre><code>telnet 192.168.1.150
</code></pre><p>輸入服務器上已經創建的用户名和密碼：</p><p>示例輸出:</p><pre><code>Trying 192.168.1.150...
Connected to 192.168.1.150.
Escape character is &#39;^]&#39;.

Kernel 3.10.0-123.13.2.el7.x86_64 on an x86_64
server1 login: sk
Password: 
[sk@server1 ~]$
</code></pre><p>如你所見，已經成功從本地訪問遠程主機了。</p><p>如果你的系統是windows，進入<strong>開始 -&gt; 運行 -&gt; 命令提示符</strong>。</p><p>在命令提示符中，輸入命令：</p><pre><code>telnet 192.168.1.150
</code></pre><p><strong>192.168.1.150</strong>是遠程主機IP地址。</p><p>現在你就可以連接到你的服務器上了。</p><p>就是這樣。</p><p>乾杯！</p><hr>`,49)),l("p",null,[e[3]||(e[3]=t("via: ",-1)),i(n,{href:"http://www.unixmen.com/installing-telnet-centosrhelscientific-linux-6-7/"},{default:r(()=>[...e[2]||(e[2]=[t("http://www.unixmen.com/installing-telnet-centosrhelscientific-linux-6-7/",-1)])]),_:1})]),l("p",null,[e[7]||(e[7]=t("作者：",-1)),i(n,{href:"http://www.unixmen.com/author/sk/"},{default:r(()=>[...e[4]||(e[4]=[t("SK",-1)])]),_:1}),e[8]||(e[8]=t(" 譯者：",-1)),i(n,{href:"https://github.com/geekpi"},{default:r(()=>[...e[5]||(e[5]=[t("geekpi",-1)])]),_:1}),e[9]||(e[9]=t(" 校對：",-1)),i(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[6]||(e[6]=[t("wxy",-1)])]),_:1})]),l("p",null,[e[12]||(e[12]=t("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[10]||(e[10]=[t("LCTT",-1)])]),_:1}),e[13]||(e[13]=t(" 原創翻譯，",-1)),i(n,{href:"http://linux.cn/"},{default:r(()=>[...e[11]||(e[11]=[t("Linux中國",-1)])]),_:1}),e[14]||(e[14]=t(" 榮譽推出",-1))])])}const h=p(c,[["render",T]]);export{E as __pageData,h as default};
