import{_ as p,a0 as s,w as a,s as d,ao as o,I as l,a1 as i,A as r,x as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const E=JSON.parse('{"title":"在CentOS/RHEL/Scientific Linux 6 & 7 上安装Telnet | LCTT x X-CMD","titleTemplate":false,"description":"在CentOS/RHEL/Scientific Linux 6 & 7 上安装Telnet | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在CentOS/RHEL/Scientific Linux 6 & 7 上安装Telnet | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在CentOS/RHEL/Scientific Linux 6 & 7 上安装Telnet | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150114 Installing Telnet In CentOS or RHEL or Scientific Linux 6 & 7","title":"在CentOS/RHEL/Scientific Linux 6 & 7 上安装Telnet","tag":"201502","desc":""},"relativePath":"201502/20150114 Installing Telnet In CentOS or RHEL or Scientific Linux 6 & 7.md","filePath":"[post].md"}'),c={name:"201502/20150114 Installing Telnet In CentOS or RHEL or Scientific Linux 6 & 7.md"};function T(f,e,u,C,m,x){const n=s("Link");return a(),d("div",null,[e[15]||(e[15]=o('<h1 id="在centos-rhel-scientific-linux-6-7-上安装telnet" tabindex="-1">在CentOS/RHEL/Scientific Linux 6 &amp; 7 上安装Telnet <a class="header-anchor" href="#在centos-rhel-scientific-linux-6-7-上安装telnet" aria-label="Permalink to “在CentOS/RHEL/Scientific Linux 6 &amp; 7 上安装Telnet”">​</a></h1><h4 id="声明" tabindex="-1">声明： <a class="header-anchor" href="#声明" aria-label="Permalink to “声明：”">​</a></h4><p>在安装和使用Telnet之前，需要记住以下几点。</p><ul><li>在公网(WAN)中使用Telnet是非常不好的想法。它会以明文的格式传输登入数据。每个人都可以看到明文。</li><li>如果你还是需要Telnet，强烈建议你只在局域网内部使用。</li><li>你可以使用<strong>SSH</strong>作为替代方法。但是确保不要用root用户登录。</li></ul><h3 id="telnet是什么" tabindex="-1">Telnet是什么？ <a class="header-anchor" href="#telnet是什么" aria-label="Permalink to “Telnet是什么？”">​</a></h3>',5)),l("p",null,[i(n,{href:"http://en.wikipedia.org/wiki/Telnet"},{default:r(()=>[...e[0]||(e[0]=[t("Telnet",-1)])]),_:1}),e[1]||(e[1]=t(" 是用于通过TCP/IP网络远程登录计算机的协议。一旦与远程计算机建立了连接，它就会成为一个虚拟终端且允许你与远程计算机通信。",-1))]),e[16]||(e[16]=o(`<p>在本篇教程中，我们会展示如何安装Telnet并且如何通过Telnet访问远程系统。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h3><p>打开终端并输入下面的命令来安装telnet：</p><pre><code>yum install telnet telnet-server -y
</code></pre><p>现在telnet已经安装在你的服务器上了。接下来编辑文件<strong>/etc/xinetd.d/telnet</strong>：</p><pre><code>vi /etc/xinetd.d/telnet
</code></pre><p>设置 <strong>disable = no</strong>:</p><pre><code># default: on
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
</code></pre><p>保存并退出文件。记住我们不必在CentOS 7做这步。</p><p>接下来使用下面的命令重启telnet服务：</p><p>在CentOS 6.x 系统中：</p><pre><code>service xinetd start
</code></pre><p>让这个服务在每次重启时都会启动：</p><p>在CentOS 6上：</p><pre><code>chkconfig telnet on
chkconfig xinetd on
</code></pre><p>在CentOS 7上：</p><pre><code>systemctl start telnet.socket
systemctl enable telnet.socket
</code></pre><p>让telnet的默认端口<strong>23</strong>可以通过防火墙和路由器。要让telnet端口可以通过防火墙，在CentOS 6.x系统中编辑下面的文件：</p><pre><code>vi /etc/sysconfig/iptables
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
</code></pre><p>保存并退出文件。重启iptables服务：</p><pre><code>service iptables restart
</code></pre><p>在CentOS 7中，运行下面的命令让telnet服务可以通过防火墙。</p><pre><code>firewall-cmd --permanent --add-port=23/tcp
firewall-cmd --reload
</code></pre><p>就是这样。现在telnet服务就可以使用了。</p><h4 id="创建用户" tabindex="-1">创建用户 <a class="header-anchor" href="#创建用户" aria-label="Permalink to “创建用户”">​</a></h4><p>创建一个测试用户，比如用户名是“<strong>sk</strong>”，密码是“<strong>centos</strong>“:</p><pre><code>useradd sk
passwd sk
</code></pre><h4 id="客户端配置" tabindex="-1">客户端配置 <a class="header-anchor" href="#客户端配置" aria-label="Permalink to “客户端配置”">​</a></h4><p>安装telnet包：</p><pre><code>yum install telnet
</code></pre><p>在基于DEB的系统中：</p><pre><code>sudo apt-get install telnet
</code></pre><p>现在，打开终端，尝试访问你的服务器（远程主机）。</p><p>如果你的客户端是Linux系统，打开终端并输入下面的命令来连接到telnet服务器上。</p><pre><code>telnet 192.168.1.150
</code></pre><p>输入服务器上已经创建的用户名和密码：</p><p>示例输出:</p><pre><code>Trying 192.168.1.150...
Connected to 192.168.1.150.
Escape character is &#39;^]&#39;.

Kernel 3.10.0-123.13.2.el7.x86_64 on an x86_64
server1 login: sk
Password: 
[sk@server1 ~]$
</code></pre><p>如你所见，已经成功从本地访问远程主机了。</p><p>如果你的系统是windows，进入<strong>开始 -&gt; 运行 -&gt; 命令提示符</strong>。</p><p>在命令提示符中，输入命令：</p><pre><code>telnet 192.168.1.150
</code></pre><p><strong>192.168.1.150</strong>是远程主机IP地址。</p><p>现在你就可以连接到你的服务器上了。</p><p>就是这样。</p><p>干杯！</p><hr>`,49)),l("p",null,[e[3]||(e[3]=t("via: ",-1)),i(n,{href:"http://www.unixmen.com/installing-telnet-centosrhelscientific-linux-6-7/"},{default:r(()=>[...e[2]||(e[2]=[t("http://www.unixmen.com/installing-telnet-centosrhelscientific-linux-6-7/",-1)])]),_:1})]),l("p",null,[e[7]||(e[7]=t("作者：",-1)),i(n,{href:"http://www.unixmen.com/author/sk/"},{default:r(()=>[...e[4]||(e[4]=[t("SK",-1)])]),_:1}),e[8]||(e[8]=t(" 译者：",-1)),i(n,{href:"https://github.com/geekpi"},{default:r(()=>[...e[5]||(e[5]=[t("geekpi",-1)])]),_:1}),e[9]||(e[9]=t(" 校对：",-1)),i(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[6]||(e[6]=[t("wxy",-1)])]),_:1})]),l("p",null,[e[12]||(e[12]=t("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[10]||(e[10]=[t("LCTT",-1)])]),_:1}),e[13]||(e[13]=t(" 原创翻译，",-1)),i(n,{href:"http://linux.cn/"},{default:r(()=>[...e[11]||(e[11]=[t("Linux中国",-1)])]),_:1}),e[14]||(e[14]=t(" 荣誉推出",-1))])])}const h=p(c,[["render",T]]);export{E as __pageData,h as default};
