import{_ as o,a0 as a,w as r,s as l,I as i,x as t,a1 as s,A as p,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const I=JSON.parse('{"title":"在Linux中使用Openswan搭建站点到站点的IPsec VPN 隧道 | LCTT x X-CMD","titleTemplate":false,"description":"在Linux中使用Openswan搭建站点到站点的IPsec VPN 隧道 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Linux中使用Openswan搭建站点到站点的IPsec VPN 隧道 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Linux中使用Openswan搭建站点到站点的IPsec VPN 隧道 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/How to create a site-to-site IPsec VPN tunnel using Openswan in Linux","title":"在Linux中使用Openswan搭建站点到站点的IPsec VPN 隧道","tag":"201411","desc":""},"relativePath":"201411/How to create a site-to-site IPsec VPN tunnel using Openswan in Linux.md","filePath":"[post].md"}'),d={name:"201411/How to create a site-to-site IPsec VPN tunnel using Openswan in Linux.md"};function u(P,e,f,m,b,g){const n=a("Link");return r(),l("div",null,[e[16]||(e[16]=i("h1",{id:"在linux中使用openswan搭建站点到站点的ipsec-vpn-隧道",tabindex:"-1"},[t("在Linux中使用Openswan搭建站点到站点的IPsec VPN 隧道 "),i("a",{class:"header-anchor",href:"#在linux中使用openswan搭建站点到站点的ipsec-vpn-隧道","aria-label":"Permalink to “在Linux中使用Openswan搭建站点到站点的IPsec VPN 隧道”"},"​")],-1)),e[17]||(e[17]=i("p",null,"虚拟私有网络（VPN）隧道是通过Internet隧道技术将两个不同地理位置的网络安全的连接起来的技术。当两个网络是使用私有IP地址的私有局域网络时，它们之间是不能相互访问的，这时使用隧道技术就可以使得两个子网内的主机进行通讯。例如，VPN隧道技术经常被用于大型机构中不同办公区域子网的连接。",-1)),i("p",null,[e[1]||(e[1]=t("有时，使用VPN隧道仅仅是因为它很安全。服务提供商与公司会使用这样一种方式架设网络，他们将重要的服务器（如，数据库，VoIP，银行服务器）放置到一个子网内，仅仅让有权限的用户通过VPN隧道进行访问。如果需要搭建一个安全的VPN隧道，通常会选用",-1)),s(n,{href:"http://en.wikipedia.org/wiki/IPsec"},{default:p(()=>[...e[0]||(e[0]=[t("IPsec",-1)])]),_:1}),e[2]||(e[2]=t("，因为IPsec VPN隧道被多重安全层所保护。",-1))]),e[18]||(e[18]=c(`<p>这篇指导文章将会告诉你如何构建站点到站点的 VPN隧道。</p><h3 id="拓扑结构" tabindex="-1">拓扑结构 <a class="header-anchor" href="#拓扑结构" aria-label="Permalink to “拓扑结构”">​</a></h3><p>这边指导文章将按照以下的拓扑结构来构建一个IPsec 隧道。</p><p><img src="https://farm4.staticflickr.com/3838/15004668831_fd260b7f1e_z.jpg" alt=""></p><p><img src="https://farm6.staticflickr.com/5559/15004668821_36e02ab8b0_z.jpg" alt=""></p><p><img src="https://farm6.staticflickr.com/5571/14821245117_3f677e4d58_z.jpg" alt=""></p><h3 id="安装软件包以及准备vpn服务器" tabindex="-1">安装软件包以及准备VPN服务器 <a class="header-anchor" href="#安装软件包以及准备vpn服务器" aria-label="Permalink to “安装软件包以及准备VPN服务器”">​</a></h3><p>一般情况下，你仅能管理A点，但是根据需求，你可能需要同时管理A点与B点。我们从安装Openswan软件开始。</p><p>基于Red Hat的系统（CentOS，Fedora，或RHEL）:</p><pre><code># yum install openswan lsof
</code></pre><p>在基于Debian的系统（Debian，Ubuntu或Linux Mint):</p><pre><code># apt-get install openswan
</code></pre><p>现在禁用VPN的重定向功能，如果有服务器，可以执行下列命令：</p><pre><code># for vpn in /proc/sys/net/ipv4/conf/*;
# do echo 0 &gt; $vpn/accept_redirects;
# echo 0 &gt; $vpn/send_redirects;
# done 
</code></pre><p>接下来，允许IP转发并且禁重定向功能。</p><pre><code> # vim /etc/sysctl.conf 
</code></pre><hr><pre><code>net.ipv4.ip_forward = 1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
</code></pre><p>重加载 /etc/sysctl.conf文件：</p><pre><code> # sysctl -p
</code></pre><p>在防火墙中启用所需的端口，并保证不与系统当前的规则冲突。</p><pre><code># iptables -A INPUT -p udp --dport 500 -j ACCEPT
# iptables -A INPUT -p tcp --dport 4500 -j ACCEPT
# iptables -A INPUT -p udp --dport 4500 -j ACCEPT
</code></pre><p>最后，我们为NAT创建防火墙规则。</p><pre><code> # iptables -t nat -A POSTROUTING -s site-A-private-subnet -d site-B-private-subnet -j SNAT --to site-A-Public-IP 
</code></pre><p>请确保上述防火墙规则是持久有效的（LCTT 译注：你可以save这些规则或加到启动脚本中）。</p><h4 id="注意" tabindex="-1">注意： <a class="header-anchor" href="#注意" aria-label="Permalink to “注意：”">​</a></h4><ul><li>你可以使用MASQUERAD替代SNAT(iptables)。理论上说它也能正常工作，但是有可能会与VPS发生冲突，所以我仍然建议使用SNAT。</li><li>如果你同时在管理B点，那么在B点也设置同样的规则。</li><li>直连路由则不需要SNAT。</li></ul><h3 id="准备配置文件" tabindex="-1">准备配置文件 <a class="header-anchor" href="#准备配置文件" aria-label="Permalink to “准备配置文件”">​</a></h3><p>我们将要用来配置的第一个文件是ipsec.conf。不论你将要配置哪一台服务器，总是将你这端的服务器看成是左边的，而将远端的看作是右边的。以下配置是在站点A的VPN服务器做的。</p><pre><code># vim /etc/ipsec.conf 
</code></pre><hr><pre><code>## general configuration parameters ##
 
config setup
        plutodebug=all
        plutostderrlog=/var/log/pluto.log
        protostack=netkey
        nat_traversal=yes
        virtual_private=%v4:10.0.0.0/8,%v4:192.168.0.0/16,%v4:172.16.0.0/16
        ## disable opportunistic encryption in Red Hat ##
        oe=off
 
## disable opportunistic encryption in Debian ##
## Note: this is a separate declaration statement ##
include /etc/ipsec.d/examples/no_oe.conf
 
## connection definition in Red Hat ##
conn demo-connection-redhat
        authby=secret
        auto=start
        ike=3des-md5
        ## phase 1 ##
        keyexchange=ike
        ## phase 2 ##
        phase2=esp
        phase2alg=3des-md5
        compress=no
        pfs=yes
        type=tunnel
        left=&lt;siteA-public-IP&gt;
        leftsourceip=&lt;siteA-public-IP&gt;
        leftsubnet=&lt;siteA-private-subnet&gt;/netmask
        ## for direct routing ##
        leftsubnet=&lt;siteA-public-IP&gt;/32
        leftnexthop=%defaultroute
        right=&lt;siteB-public-IP&gt;
        rightsubnet=&lt;siteB-private-subnet&gt;/netmask
 
## connection definition in Debian ##
conn demo-connection-debian
        authby=secret
        auto=start
        ## phase 1 ##
        keyexchange=ike
        ## phase 2 ##
        esp=3des-md5
        pfs=yes
        type=tunnel
        left=&lt;siteA-public-IP&gt;
        leftsourceip=&lt;siteA-public-IP&gt;
        leftsubnet=&lt;siteA-private-subnet&gt;/netmask
        ## for direct routing ##
        leftsubnet=&lt;siteA-public-IP&gt;/32
        leftnexthop=%defaultroute
        right=&lt;siteB-public-IP&gt;
        rightsubnet=&lt;siteB-private-subnet&gt;/netmask
</code></pre><p>有许多方式实现身份验证。这里使用预共享密钥，并将它添加到文件 /etc/ipsec.secrets。</p><pre><code> # vim /etc/ipsec.secrets 
</code></pre><hr><pre><code>siteA-public-IP  siteB-public-IP:  PSK  &quot;pre-shared-key&quot;
## in case of multiple sites ##
siteA-public-IP  siteC-public-IP:  PSK  &quot;corresponding-pre-shared-key&quot;
</code></pre><h3 id="启动服务并排除故障" tabindex="-1">启动服务并排除故障 <a class="header-anchor" href="#启动服务并排除故障" aria-label="Permalink to “启动服务并排除故障”">​</a></h3><p>目前，服务器已经可以创建站点到站点的VPN隧道了。如果你可以管理B站点，请确认已经为B服务器配置了所需的参数。对于基于Red Hat的系统，使用chkconfig命令以确定这项服务以设置为开机自启动。</p><pre><code> # /etc/init.d/ipsec restart 
</code></pre><p>如果所有服务器没有问题的话，那么可以打通隧道了。注意以下内容后，你可以使用ping命令来测试隧道。</p><ol><li>A点不可达B点的子网，当隧道没有启动时ping不通。</li><li>隧道启动后，在A点直接ping B点的子网IP，是可以ping通的。</li></ol><p>并且，到达目的子网的路由也会出现在服务器的路由表中。（LCTT译注：这里“子网”指的是site-B，“服务器”指的是site-A）</p><pre><code> # ip route 
</code></pre><hr><pre><code>[siteB-private-subnet] via [siteA-gateway] dev eth0 src [siteA-public-IP]
default via [siteA-gateway] dev eth0
</code></pre><p>另外，我们可以使用命令来检测隧道的状态。</p><pre><code> # service ipsec status 
</code></pre><hr><pre><code>IPsec running  - pluto pid: 20754
pluto pid 20754
1 tunnels up
some eroutes exist
</code></pre><hr><pre><code> # ipsec auto --status 
</code></pre><hr><pre><code>## output truncated ##
000 &quot;demo-connection-debian&quot;:     myip=&lt;siteA-public-IP&gt;; hisip=unset;
000 &quot;demo-connection-debian&quot;:   ike_life: 3600s; ipsec_life: 28800s; rekey_margin: 540s; rekey_fuzz: 100%; keyingtries: 0; nat_keepalive: yes
000 &quot;demo-connection-debian&quot;:   policy: PSK+ENCRYPT+TUNNEL+PFS+UP+IKEv2ALLOW+SAREFTRACK+lKOD+rKOD; prio: 32,28; interface: eth0;

## output truncated ##
000 #184: &quot;demo-connection-debian&quot;:500 STATE_QUICK_R2 (IPsec SA established); EVENT_SA_REPLACE in 1653s; newest IPSEC; eroute owner; isakmp#183; idle; import:not set

## output truncated ##
000 #183: &quot;demo-connection-debian&quot;:500 STATE_MAIN_I4 (ISAKMP SA established); EVENT_SA_REPLACE in 1093s; newest ISAKMP; lastdpd=-1s(seq in:0 out:0); idle; import:not set
</code></pre><p>日志文件/var/log/pluto.log记录了关于身份验证，密钥交换以及隧道处于不同时期的一些信息。如果你的隧道无法启动了，可以查看这个文档。</p><p>如果你确信所有配置都是正确的，但是你的隧道任然无法启动，那么你需要检查以下的事件。</p><ol><li>很多ISP会过滤IPsec端口。确认你的网络ISP允许使用UDP 500， TCP/UDP 4500端口。你可以试着在远端通过telnet连接服务器的IPsec端口。</li><li>确认所用的端口在服务器防火墙规则中是允许的。</li><li>确认两端服务器的预共享密钥是一致的。</li><li>左边和右边的参数应该正确配置在两端的服务器上</li><li>如果你遇到的是NAT问题，试着使用SNAT替换MASQUERADING。</li></ol><p>总结，这篇指导重点在于使用Openswan搭建站点到站点IPsec VPN的流程。管理员可以使用VPN使得一些重要的资源仅能通过隧道来获取，这对于加强安全性很有效果。同时VPN确保数据不被监听以及劫持。</p><p>希望对你有帮助。让我知道你的意。</p><hr>`,59)),i("p",null,[e[4]||(e[4]=t("via: ",-1)),s(n,{href:"http://xmodulo.com/2014/08/create-site-to-site-ipsec-vpn-tunnel-openswan-linux.html"},{default:p(()=>[...e[3]||(e[3]=[t("http://xmodulo.com/2014/08/create-site-to-site-ipsec-vpn-tunnel-openswan-linux.html",-1)])]),_:1})]),i("p",null,[e[8]||(e[8]=t("作者：",-1)),s(n,{href:"http://xmodulo.com/author/sarmed"},{default:p(()=>[...e[5]||(e[5]=[t("Sarmed Rahman",-1)])]),_:1}),e[9]||(e[9]=t(" 译者：",-1)),s(n,{href:"https://github.com/SPccman"},{default:p(()=>[...e[6]||(e[6]=[t("SPccman",-1)])]),_:1}),e[10]||(e[10]=t(" 校对：",-1)),s(n,{href:"https://github.com/wxy"},{default:p(()=>[...e[7]||(e[7]=[t("wxy",-1)])]),_:1})]),i("p",null,[e[13]||(e[13]=t("本文由 ",-1)),s(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[11]||(e[11]=[t("LCTT",-1)])]),_:1}),e[14]||(e[14]=t(" 原创翻译，",-1)),s(n,{href:"http://linux.cn/"},{default:p(()=>[...e[12]||(e[12]=[t("Linux中国",-1)])]),_:1}),e[15]||(e[15]=t(" 荣誉推出",-1))])])}const T=o(d,[["render",u]]);export{I as __pageData,T as default};
