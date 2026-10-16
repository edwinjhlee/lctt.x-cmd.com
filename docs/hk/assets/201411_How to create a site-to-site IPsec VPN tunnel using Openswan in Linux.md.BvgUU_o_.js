import{_ as o,a0 as a,w as r,s as l,I as i,x as t,a1 as s,A as p,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const I=JSON.parse('{"title":"在Linux中使用Openswan搭建站點到站點的IPsec VPN 隧道 | LCTT x X-CMD","titleTemplate":false,"description":"在Linux中使用Openswan搭建站點到站點的IPsec VPN 隧道 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Linux中使用Openswan搭建站點到站點的IPsec VPN 隧道 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Linux中使用Openswan搭建站點到站點的IPsec VPN 隧道 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/How to create a site-to-site IPsec VPN tunnel using Openswan in Linux","title":"在Linux中使用Openswan搭建站點到站點的IPsec VPN 隧道","tag":"201411","desc":""},"relativePath":"201411/How to create a site-to-site IPsec VPN tunnel using Openswan in Linux.md","filePath":"[post].md"}'),d={name:"201411/How to create a site-to-site IPsec VPN tunnel using Openswan in Linux.md"};function u(P,e,f,m,b,g){const n=a("Link");return r(),l("div",null,[e[16]||(e[16]=i("h1",{id:"在linux中使用openswan搭建站點到站點的ipsec-vpn-隧道",tabindex:"-1"},[t("在Linux中使用Openswan搭建站點到站點的IPsec VPN 隧道 "),i("a",{class:"header-anchor",href:"#在linux中使用openswan搭建站點到站點的ipsec-vpn-隧道","aria-label":"Permalink to “在Linux中使用Openswan搭建站點到站點的IPsec VPN 隧道”"},"​")],-1)),e[17]||(e[17]=i("p",null,"虛擬私有網絡（VPN）隧道是通過Internet隧道技術將兩個不同地理位置的網絡安全的連接起來的技術。當兩個網絡是使用私有IP地址的私有局域網絡時，它們之間是不能相互訪問的，這時使用隧道技術就可以使得兩個子網內的主機進行通訊。例如，VPN隧道技術經常被用於大型機構中不同辦公區域子網的連接。",-1)),i("p",null,[e[1]||(e[1]=t("有時，使用VPN隧道僅僅是因為它很安全。服務提供商與公司會使用這樣一種方式架設網絡，他們將重要的服務器（如，資料庫，VoIP，銀行服務器）放置到一個子網內，僅僅讓有權限的用户通過VPN隧道進行訪問。如果需要搭建一個安全的VPN隧道，通常會選用",-1)),s(n,{href:"http://en.wikipedia.org/wiki/IPsec"},{default:p(()=>[...e[0]||(e[0]=[t("IPsec",-1)])]),_:1}),e[2]||(e[2]=t("，因為IPsec VPN隧道被多重安全層所保護。",-1))]),e[18]||(e[18]=c(`<p>這篇指導文章將會告訴你如何構建站點到站點的 VPN隧道。</p><h3 id="拓撲結構" tabindex="-1">拓撲結構 <a class="header-anchor" href="#拓撲結構" aria-label="Permalink to “拓撲結構”">​</a></h3><p>這邊指導文章將按照以下的拓撲結構來構建一個IPsec 隧道。</p><p><img src="https://farm4.staticflickr.com/3838/15004668831_fd260b7f1e_z.jpg" alt=""></p><p><img src="https://farm6.staticflickr.com/5559/15004668821_36e02ab8b0_z.jpg" alt=""></p><p><img src="https://farm6.staticflickr.com/5571/14821245117_3f677e4d58_z.jpg" alt=""></p><h3 id="安裝軟件包以及準備vpn服務器" tabindex="-1">安裝軟件包以及準備VPN服務器 <a class="header-anchor" href="#安裝軟件包以及準備vpn服務器" aria-label="Permalink to “安裝軟件包以及準備VPN服務器”">​</a></h3><p>一般情況下，你僅能管理A點，但是根據需求，你可能需要同時管理A點與B點。我們從安裝Openswan軟件開始。</p><p>基於Red Hat的系統（CentOS，Fedora，或RHEL）:</p><pre><code># yum install openswan lsof
</code></pre><p>在基於Debian的系統（Debian，Ubuntu或Linux Mint):</p><pre><code># apt-get install openswan
</code></pre><p>現在禁用VPN的重定向功能，如果有服務器，可以執行下列命令：</p><pre><code># for vpn in /proc/sys/net/ipv4/conf/*;
# do echo 0 &gt; $vpn/accept_redirects;
# echo 0 &gt; $vpn/send_redirects;
# done 
</code></pre><p>接下來，允許IP轉發並且禁重定向功能。</p><pre><code> # vim /etc/sysctl.conf 
</code></pre><hr><pre><code>net.ipv4.ip_forward = 1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
</code></pre><p>重加載 /etc/sysctl.conf文件：</p><pre><code> # sysctl -p
</code></pre><p>在防火牆中啓用所需的端口，並保證不與系統當前的規則衝突。</p><pre><code># iptables -A INPUT -p udp --dport 500 -j ACCEPT
# iptables -A INPUT -p tcp --dport 4500 -j ACCEPT
# iptables -A INPUT -p udp --dport 4500 -j ACCEPT
</code></pre><p>最後，我們為NAT創建防火牆規則。</p><pre><code> # iptables -t nat -A POSTROUTING -s site-A-private-subnet -d site-B-private-subnet -j SNAT --to site-A-Public-IP 
</code></pre><p>請確保上述防火牆規則是持久有效的（LCTT 譯註：你可以save這些規則或加到啓動腳本中）。</p><h4 id="注意" tabindex="-1">注意： <a class="header-anchor" href="#注意" aria-label="Permalink to “注意：”">​</a></h4><ul><li>你可以使用MASQUERAD替代SNAT(iptables)。理論上説它也能正常工作，但是有可能會與VPS發生衝突，所以我仍然建議使用SNAT。</li><li>如果你同時在管理B點，那麼在B點也設置同樣的規則。</li><li>直連路由則不需要SNAT。</li></ul><h3 id="準備配置文件" tabindex="-1">準備配置文件 <a class="header-anchor" href="#準備配置文件" aria-label="Permalink to “準備配置文件”">​</a></h3><p>我們將要用來配置的第一個文件是ipsec.conf。不論你將要配置哪一台服務器，總是將你這端的服務器看成是左邊的，而將遠端的看作是右邊的。以下配置是在站點A的VPN服務器做的。</p><pre><code># vim /etc/ipsec.conf 
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
</code></pre><p>有許多方式實現身份驗證。這裏使用預共享密鑰，並將它添加到文件 /etc/ipsec.secrets。</p><pre><code> # vim /etc/ipsec.secrets 
</code></pre><hr><pre><code>siteA-public-IP  siteB-public-IP:  PSK  &quot;pre-shared-key&quot;
## in case of multiple sites ##
siteA-public-IP  siteC-public-IP:  PSK  &quot;corresponding-pre-shared-key&quot;
</code></pre><h3 id="啓動服務並排除故障" tabindex="-1">啓動服務並排除故障 <a class="header-anchor" href="#啓動服務並排除故障" aria-label="Permalink to “啓動服務並排除故障”">​</a></h3><p>目前，服務器已經可以創建站點到站點的VPN隧道了。如果你可以管理B站點，請確認已經為B服務器配置了所需的參數。對於基於Red Hat的系統，使用chkconfig命令以確定這項服務以設置為開機自啓動。</p><pre><code> # /etc/init.d/ipsec restart 
</code></pre><p>如果所有服務器沒有問題的話，那麼可以打通隧道了。注意以下內容後，你可以使用ping命令來測試隧道。</p><ol><li>A點不可達B點的子網，當隧道沒有啓動時ping不通。</li><li>隧道啓動後，在A點直接ping B點的子網IP，是可以ping通的。</li></ol><p>並且，到達目的子網的路由也會出現在服務器的路由表中。（LCTT譯註：這裏“子網”指的是site-B，“服務器”指的是site-A）</p><pre><code> # ip route 
</code></pre><hr><pre><code>[siteB-private-subnet] via [siteA-gateway] dev eth0 src [siteA-public-IP]
default via [siteA-gateway] dev eth0
</code></pre><p>另外，我們可以使用命令來檢測隧道的狀態。</p><pre><code> # service ipsec status 
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
</code></pre><p>日誌文件/var/log/pluto.log記錄了關於身份驗證，密鑰交換以及隧道處於不同時期的一些信息。如果你的隧道無法啓動了，可以查看這個文檔。</p><p>如果你確信所有配置都是正確的，但是你的隧道任然無法啓動，那麼你需要檢查以下的事件。</p><ol><li>很多ISP會過濾IPsec端口。確認你的網絡ISP允許使用UDP 500， TCP/UDP 4500端口。你可以試着在遠端通過telnet連接服務器的IPsec端口。</li><li>確認所用的端口在服務器防火牆規則中是允許的。</li><li>確認兩端服務器的預共享密鑰是一致的。</li><li>左邊和右邊的參數應該正確配置在兩端的服務器上</li><li>如果你遇到的是NAT問題，試着使用SNAT替換MASQUERADING。</li></ol><p>總結，這篇指導重點在於使用Openswan搭建站點到站點IPsec VPN的流程。管理員可以使用VPN使得一些重要的資源僅能通過隧道來獲取，這對於加強安全性很有效果。同時VPN確保數據不被監聽以及劫持。</p><p>希望對你有幫助。讓我知道你的意。</p><hr>`,59)),i("p",null,[e[4]||(e[4]=t("via: ",-1)),s(n,{href:"http://xmodulo.com/2014/08/create-site-to-site-ipsec-vpn-tunnel-openswan-linux.html"},{default:p(()=>[...e[3]||(e[3]=[t("http://xmodulo.com/2014/08/create-site-to-site-ipsec-vpn-tunnel-openswan-linux.html",-1)])]),_:1})]),i("p",null,[e[8]||(e[8]=t("作者：",-1)),s(n,{href:"http://xmodulo.com/author/sarmed"},{default:p(()=>[...e[5]||(e[5]=[t("Sarmed Rahman",-1)])]),_:1}),e[9]||(e[9]=t(" 譯者：",-1)),s(n,{href:"https://github.com/SPccman"},{default:p(()=>[...e[6]||(e[6]=[t("SPccman",-1)])]),_:1}),e[10]||(e[10]=t(" 校對：",-1)),s(n,{href:"https://github.com/wxy"},{default:p(()=>[...e[7]||(e[7]=[t("wxy",-1)])]),_:1})]),i("p",null,[e[13]||(e[13]=t("本文由 ",-1)),s(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[11]||(e[11]=[t("LCTT",-1)])]),_:1}),e[14]||(e[14]=t(" 原創翻譯，",-1)),s(n,{href:"http://linux.cn/"},{default:p(()=>[...e[12]||(e[12]=[t("Linux中國",-1)])]),_:1}),e[15]||(e[15]=t(" 榮譽推出",-1))])])}const T=o(d,[["render",u]]);export{I as __pageData,T as default};
