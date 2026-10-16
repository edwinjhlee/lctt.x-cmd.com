import{_ as s,a0 as i,w as l,s as d,I as t,x as n,a1 as a,A as p,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"十步搭建 OpenVPN，享受你的隱私生活 | LCTT x X-CMD","titleTemplate":false,"description":"十步搭建 OpenVPN，享受你的隱私生活 | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十步搭建 OpenVPN，享受你的隱私生活 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十步搭建 OpenVPN，享受你的隱私生活 | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140701 Get OpenVPN up and running, enjoy your privacy","title":"十步搭建 OpenVPN，享受你的隱私生活","tag":"201408","desc":""},"relativePath":"201408/20140701 Get OpenVPN up and running, enjoy your privacy.md","filePath":"[post].md"}'),u={name:"201408/20140701 Get OpenVPN up and running, enjoy your privacy.md"};function c(m,e,P,N,y,v){const o=i("Link");return l(),d("div",null,[e[42]||(e[42]=t("h1",{id:"十步搭建-openvpn-享受你的隱私生活",tabindex:"-1"},[n("十步搭建 OpenVPN，享受你的隱私生活 "),t("a",{class:"header-anchor",href:"#十步搭建-openvpn-享受你的隱私生活","aria-label":"Permalink to “十步搭建 OpenVPN，享受你的隱私生活”"},"​")],-1)),e[43]||(e[43]=t("p",null,[t("img",{src:"http://parabing.com/assets/uploads/2014/06/openVPN-featured.jpg",alt:""})],-1)),e[44]||(e[44]=t("blockquote",null,[t("p",null,"我們支持保護隱私，不為我們有自己的秘密需要保護，只是我們認為保護隱私應該成為一項基本人權。所以我們堅信無論誰在什麼時候行使這項權利，都應該不受拘束的獲取必須的工具和服務。OpenVPN就是這樣一種服務並且有多種工具(客户端) 來讓我們利用並享受這種服務。")],-1)),t("p",null,[e[1]||(e[1]=n("通過與一個",-1)),a(o,{href:"http://zh.wikipedia.org/wiki/Openvpn"},{default:p(()=>[...e[0]||(e[0]=[n("OpenVPN",-1)])]),_:1}),e[2]||(e[2]=n("服務器建立連接，我們基本上在我們的設備和遠端運行OpenVPN的主機之間建立了一個安全的通信通道。儘管在兩個端點之間的通信可能被截獲，但是信息是經過高強度加密的所以實際上它對於攻擊者沒什麼用。OpenVPN除了扮演加密通信通道的調解人，我們也可以通過設置使服務器扮演互聯網網關的角色。通過這種方式，我們可以",-1)),e[3]||(e[3]=t("strong",null,"連接任何不安全的Wifi",-1)),e[4]||(e[4]=n("，然後迅速的鏈接到遠程的OpenVPN服務器，然後在不需要考慮偷窺的人或者無聊的管理員的情況下運行需要上網的程序。(注意:OpenVPN服務器旁還是需要信任的管理員的。)",-1))]),t("p",null,[e[6]||(e[6]=n("這篇文章將一步一步的教會你如何在",-1)),a(o,{href:"http://www.ubuntu.com/server"},{default:p(()=>[...e[5]||(e[5]=[n("Ubuntu Server 14.04 LTS",-1)])]),_:1}),e[7]||(e[7]=n("上安裝OpenVPN。OpenVPN所在的主機可能是雲上的一台VPS，一台在我們家裏某台電腦上運行的虛擬機，或者是一個老到你都快忘了的設備。",-1))]),e[45]||(e[45]=r(`<h3 id="第一步-準備系統" tabindex="-1">第一步 準備系統 <a class="header-anchor" href="#第一步-準備系統" aria-label="Permalink to “第一步 準備系統”">​</a></h3><p>我們需要Ubuntu Server主機的一個命令列終端，比如通過SSH從遠程訪問它。首先需要更新它的本地倉庫數據:</p><pre><code>sub0@delta:~$ sudo apt-get update
</code></pre><p>進行操作系統和已安裝的包的升級，輸入:</p><pre><code>sub0@delta:~$ sudo apt-get dist-upgrade
</code></pre><p>如果升級了新內核，那就需要重啓。當更新完成後，就該安裝OpenVPN了:</p><pre><code>sub0@delta:~$ sudo apt-get -y install openvpn easy-rsa dnsmasq
</code></pre><p>注意，我們用apt-get安裝了三個包:</p><ul><li>openvpn提供了OpenVPN的核心</li><li>easy-rsa包含了一些有用的密鑰管理腳本</li><li>dnsmasq是當我們的OpenVPN所在的主機將扮演客户端的路由器時會用到的域名服務器</li></ul><h3 id="第二步-生成證書和私鑰" tabindex="-1">第二步 生成證書和私鑰 <a class="header-anchor" href="#第二步-生成證書和私鑰" aria-label="Permalink to “第二步 生成證書和私鑰”">​</a></h3><p>這是安裝OpenVPN中最重要和最關鍵的一步，目的是建立公鑰基礎設施(PKI)。包括如下內容:</p><ul><li>為OpenVPN服務器創建一個證書(公鑰)和一個私鑰</li><li>為每個OpenVPN客户端創建證書和私鑰</li><li>建立一個證書頒發機構(CA)並創建證書和私鑰。這個私鑰用來給OpenVPN服務器和客户端的證書籤名</li></ul><p>從最後一個做起，我們先建立一個目錄:</p><pre><code>sub0@delta:~$ sudo mkdir /etc/openvpn/easy-rsa
</code></pre><p>然後把easy-rsa的文件拷過去:</p><pre><code>sub0@delta:~$ sudo cp -r /usr/share/easy-rsa/* /etc/openvpn/easy-rsa
</code></pre><p>在我們創建CA的私鑰之前，我們先編輯/etc/openvpn/easy-rsa/vars(我們喜歡用nano編輯器，不過這只是我們的喜好，你愛用什麼用什麼):</p><pre><code>sub0@delta:~$ sudo nano /etc/openvpn/easy-rsa/vars
</code></pre><p>在文件的尾部，我們設置主證書和密鑰的信息:</p><pre><code>export KEY_COUNTRY=&quot;GR&quot;
export KEY_PROVINCE=&quot;Central Macedonia&quot;
export KEY_CITY=&quot;Thessaloniki&quot;
export KEY_ORG=&quot;Parabing Creations&quot;
export KEY_EMAIL=&quot;nobody@parabing.com&quot;
export KEY_CN=&quot;VPNsRUS&quot;
export KEY_NAME=&quot;VPNsRUS&quot;
export KEY_OU=&quot;Parabing&quot;
export KEY_ALTNAMES=&quot;VPNsRUS&quot;
</code></pre><p>你可以根據自己的情況設置不同的值。特別注意最後KEY_ALTNAMES這一行，儘管這不是原本vars文件中有的但是我們還是把它加到文件的尾部，不然build-ca腳本會運行失敗。</p><p>保存更改，我們得按[CTRL+O]然後按[Enter]。想退出nano，請按[CTRL+X]。現在，我們要獲得root訪問權限，繼續生成主證書和私鑰(LCTT譯註:請注意命令列賬户發生了改變):</p><pre><code>sub0@delta:~$ sudo su
root@delta:/home/sub0# cd /etc/openvpn/easy-rsa
root@delta:/etc/openvpn/easy-rsa# source vars
NOTE: If you run ./clean-all, I will be doing a rm -rf on /etc/openvpn/easy-rsa/keys
root@delta:/etc/openvpn/easy-rsa# sh clean-all
root@delta:/etc/openvpn/easy-rsa# sh build-ca
Generating a 1024 bit RSA private key
...++++++
................++++++
writing new private key to &#39;ca.key&#39;
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [GR]:
State or Province Name (full name) [Central Macedonia]:
Locality Name (eg, city) [Thessaloniki]:
Organization Name (eg, company) [Parabing Creations]:
Organizational Unit Name (eg, section) [Parabing]:
Common Name (eg, your name or your server&#39;s hostname) [VPNsRUS]:
Name [VPNsRUS]:
Email Address [nobody@parabing.com]:
root@delta:/etc/openvpn/easy-rsa#
</code></pre><p>在我們的例子中，所有問題的答案都選擇了默認的。在運行了build-ca腳本後，我們就獲得了主證書文件(keys/ca.crt)和對應的私鑰(keys/ca.key)。私鑰必須不計代價的保密。</p><h3 id="第三步-生成openvpn服務器的證書和私鑰" tabindex="-1">第三步 生成OpenVPN服務器的證書和私鑰 <a class="header-anchor" href="#第三步-生成openvpn服務器的證書和私鑰" aria-label="Permalink to “第三步 生成OpenVPN服務器的證書和私鑰”">​</a></h3><p>在我們為OpenVPN服務器生成證書和密鑰之前，我們得給他起個名。我決定把它叫&quot;delta&quot;，然後運行build-key-server腳本來獲取證書和密鑰:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# sh build-key-server delta
Generating a 1024 bit RSA private key
....++++++
...++++++
writing new private key to &#39;delta.key&#39;
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [GR]:
State or Province Name (full name) [Central Macedonia]:
Locality Name (eg, city) [Thessaloniki]:
Organization Name (eg, company) [Parabing Creations]:
Organizational Unit Name (eg, section) [Parabing]:
Common Name (eg, your name or your server&#39;s hostname) [delta]:
Name [VPNsRUS]:deltaVPN
Email Address [nobody@parabing.com]:
 
Please enter the following &#39;extra&#39; attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
Using configuration from /etc/openvpn/easy-rsa/openssl-1.0.0.cnf
Check that the request matches the signature
Signature ok
The Subject&#39;s Distinguished Name is as follows
countryName           :PRINTABLE:&#39;GR&#39;
stateOrProvinceName   :PRINTABLE:&#39;Central Macedonia&#39;
localityName          :PRINTABLE:&#39;Thessaloniki&#39;
organizationName      :PRINTABLE:&#39;Parabing Creations&#39;
organizationalUnitName:PRINTABLE:&#39;Parabing&#39;
commonName            :PRINTABLE:&#39;delta&#39;
name                  :PRINTABLE:&#39;deltaVPN&#39;
emailAddress          :IA5STRING:&#39;nobody@parabing.com&#39;
Certificate is to be certified until Apr  7 08:06:02 2024 GMT (3650 days)
Sign the certificate? [y/n]:y
  
1 out of 1 certificate requests certified, commit? [y/n]y
Write out database with 1 new entries
Data Base Updated
root@delta:/etc/openvpn/easy-rsa#
</code></pre><p>當腳本成功運行完的時候，我們就得到了服務器的證書(keys/delta.crt)和私鑰(keys/delta.key)。注意服務器證書被CA的私鑰簽名了。</p><h3 id="第四步-生成diffie-hellman參數" tabindex="-1">第四步 生成Diffie-Hellman參數 <a class="header-anchor" href="#第四步-生成diffie-hellman參數" aria-label="Permalink to “第四步 生成Diffie-Hellman參數”">​</a></h3><p>幸虧有了Diffie-Hellman參數，我們才能在不安全的通信通道里安全的交換密鑰。為了生成它我們需要鍵入:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# sh build-dh
Generating DH parameters, 2048 bit long safe prime, generator 2
This is going to take a long time
.......................+.....................................+..
...........................+..+.....................+...........
..............................................+.................
.......................+........................................
................................................+...............
.......................................++*++*++*
root@delta:/etc/openvpn/easy-rsa#
</code></pre><p>證書，私鑰和包含Diffie-Hellman參數的文件已生成，它們都儲存在/etc/openvpn/easy-rsa/keys，所以我們到現在為止已經有如下五個文件了:</p><ol><li><strong>ca.crt</strong> – 證書頒發機構(CA)的證書</li><li><strong>ca.key</strong> – CA的私鑰</li><li><strong>delta.crt</strong> – OpenVPN服務器的證書</li><li><strong>delta.key</strong> – OpenVPN服務器的私鑰</li><li><strong>dh2048.pem</strong> – Diffie-Hellman參數文件</li></ol><p>你自己的OpenVPN服務器命名可能和我們的不同。現在我們需要拷貝除了ca.key的文件到/etc/openvpn:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# cd keys
root@delta:/etc/openvpn/easy-rsa/keys# cp ca.crt delta.crt delta.key dh2048.pem /etc/openvpn
root@delta:/etc/openvpn/easy-rsa/keys# cd ..
root@delta:/etc/openvpn/easy-rsa#
</code></pre><h3 id="第五步-為openvpn客户端生成證書和私鑰" tabindex="-1">第五步 為OpenVPN客户端生成證書和私鑰 <a class="header-anchor" href="#第五步-為openvpn客户端生成證書和私鑰" aria-label="Permalink to “第五步 為OpenVPN客户端生成證書和私鑰”">​</a></h3><p>試想我們的筆記本要連接OpenVPN服務器。為了實現這個很常見的情況，我們首先需要為客户端(比如:我們的筆記本)生成證書和私鑰，在/etc/openvpn/easy-rsa有一個腳本幫我們完成這項工作:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# source vars
NOTE: If you run ./clean-all, I will be doing a rm -rf on /etc/openvpn/easy-rsa/keys
root@delta:/etc/openvpn/easy-rsa# ./build-key laptop
Generating a 1024 bit RSA private key
.......................................++++++
...................................................................................................++++++
writing new private key to &#39;laptop.key&#39;
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [GR]:
State or Province Name (full name) [Central Macedonia]:
Locality Name (eg, city) [Thessaloniki]:
Organization Name (eg, company) [Parabing Creations]:
Organizational Unit Name (eg, section) [Parabing]:
Common Name (eg, your name or your server&#39;s hostname) [laptop]:
Name [VPNsRUS]:
Email Address [nobody@parabing.com]:
  
Please enter the following &#39;extra&#39; attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
Using configuration from /etc/openvpn/easy-rsa/openssl-1.0.0.cnf
Check that the request matches the signature
Signature ok
The Subject&#39;s Distinguished Name is as follows
countryName           :PRINTABLE:&#39;GR&#39;
stateOrProvinceName   :PRINTABLE:&#39;Central Macedonia&#39;
localityName          :PRINTABLE:&#39;Thessaloniki&#39;
organizationName      :PRINTABLE:&#39;Parabing Creations&#39;
organizationalUnitName:PRINTABLE:&#39;Parabing&#39;
commonName            :PRINTABLE:&#39;laptop&#39;
name                  :PRINTABLE:&#39;VPNsRUS&#39;
emailAddress          :IA5STRING:&#39;nobody@parabing.com&#39;
Certificate is to be certified until Apr  7 18:00:51 2024 GMT (3650 days)
Sign the certificate? [y/n]:y
  
1 out of 1 certificate requests certified, commit? [y/n]y
Write out database with 1 new entries
Data Base Updated
root@delta:/etc/openvpn/easy-rsa#
</code></pre><p>我們為密鑰選取的名字是&quot;laptop&quot;，當build-key腳本運行完之後，我們就得到了在keys/laptop.crt的證書和在keys/laptop.key的私鑰。有了這兩個文件和CA的證書，我們得把這三個文件拷貝到用户有(比如用户sub0)權訪問的地方。比如我們可以在用户的home目錄中新建一個目錄並把三個文件拷貝過去:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# mkdir /home/sub0/ovpn-client
root@delta:/etc/openvpn/easy-rsa# cd keys
root@delta:/etc/openvpn/easy-rsa/keys# cp ca.crt laptop.crt laptop.key /home/sub0/ovpn-client
root@delta:/etc/openvpn/easy-rsa/keys# chown -R sub0:sub0 /home/sub0/ovpn-client
root@delta:/etc/openvpn/easy-rsa/keys# cd ..
root@delta:/etc/openvpn/easy-rsa#
</code></pre><p>ovpn-client文件夾必須安全的拷貝到我們的筆記本電腦上。我們可以給多個客户端分發這三個文件。當然了，等我們需要一個不一樣的證書-私鑰對的時候只要再次運行build-key腳本即可。</p><h3 id="第六步-openvpn服務器設置" tabindex="-1">第六步 -- OpenVPN服務器設置 <a class="header-anchor" href="#第六步-openvpn服務器設置" aria-label="Permalink to “第六步 -- OpenVPN服務器設置”">​</a></h3><p>等會我們的OpenVPN服務器就要啓動並運行了。但是開始的時候，我們需要更改一些設置。在/usr/share/doc/openvpn/examples/sample-config-files中有一個示例配置文件，它很適合我們的教程，這個文件叫server.conf.gz:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# cd /etc/openvpn
root@delta:/etc/openvpn# cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz .
root@delta:/etc/openvpn# gunzip -d server.conf.gz
root@delta:/etc/openvpn# mv server.conf delta.conf
root@delta:/etc/openvpn#
</code></pre><p>如你所見，我們把server.conf.gz拷貝到/etc/openvpn，解壓並重命名到delta.conf。你可以按個人喜好給OpenVPN服務器配置文件取名字，但是它必須有&quot;.conf&quot;擴展名。我們現在用nano打開配置文件:</p><pre><code>root@delta:/etc/openvpn# nano delta.conf
</code></pre><p>下面是我們應該做出的更改。</p><ul><li><p>首先，定位到這一行</p><p>cert server.crt key server.key</p></li></ul><p>確認OpenVPN服務器證書和私鑰的位置和名稱，在我們的例子中，這兩行要改成</p><pre><code>cert delta.crt
key delta.key
</code></pre><ul><li><p>然後定位到這一行</p><p>dh dh1024.pem</p></li></ul><p>用&quot;2048&quot;代替&quot;1024&quot;:</p><pre><code>dh dh2048.pem
</code></pre><ul><li><p>在配置文件的末尾，我們添加下面這兩行:</p><p>push &quot;redirect-gateway def1&quot; push &quot;dhcp-option DNS 10.8.0.1&quot;</p></li></ul><p>最後這兩行指示客户端用OpenVPN作為默認的網關，並用10.8.0.1作為DNS服務器。注意10.8.0.1是OpenVPN啓動時自動創建的隧道接口的IP。如果客户用別的域名解析服務，那麼我們就得提防不安全的DNS服務器。為了避免這種泄露，我們建議所有OpenVPN客户端使用10.8.0.1作為DNS服務器。</p><p>我們以這種方式來開始運行OpenVPN服務器:</p><pre><code>root@delta:/etc/openvpn# service openvpn start
</code></pre><p>默認的，OpenVPN服務器監聽1194/UDP端口。一種查看的方法是使用netstat工具:</p><pre><code>root@delta:/etc/openvpn# netstat -anup
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
udp        0      0 0.0.0.0:54149           0.0.0.0:*                           555/dhclient
udp        0      0 0.0.0.0:1194            0.0.0.0:*                           3024/openvpn
udp        0      0 0.0.0.0:53              0.0.0.0:*                           2756/dnsmasq
udp        0      0 0.0.0.0:68              0.0.0.0:*                           555/dhclient
udp6       0      0 :::60622                :::*                                555/dhclient
udp6       0      0 :::53                   :::*                                2756/dnsmasq
</code></pre><p>看起來一切運行的不錯，但是我們還沒設置DNS服務器呢。</p><h3 id="第七步-為openvpn客户端搭建dns" tabindex="-1">第七步 為OpenVPN客户端搭建DNS <a class="header-anchor" href="#第七步-為openvpn客户端搭建dns" aria-label="Permalink to “第七步 為OpenVPN客户端搭建DNS”">​</a></h3><p>這就是為什麼我們要安裝dnsmasq的原因，打開它的配置文件。</p><pre><code>root@delta:/etc/openvpn# nano /etc/dnsmasq.conf
</code></pre><p>定位到這行:</p><pre><code>#listen-address=
</code></pre><p>把它換成下面這樣:</p><pre><code>listen-address=127.0.0.1, 10.8.0.1
</code></pre><p>然後定位到這行:</p><pre><code>#bind-interfaces
</code></pre><p>把&quot;#&quot;刪了:</p><pre><code>bind-interfaces
</code></pre><p>為了讓dnsmasq應用這些更改，我們重啓它:</p><pre><code>root@delta:/etc/openvpn# service dnsmasq restart
 * Restarting DNS forwarder and DHCP server dnsmasq [ OK ]
root@delta:/etc/openvpn#
</code></pre><p>現在，dnamasq在本地迴環(lo)和隧道(tun0)接口監聽DNS請求。netstat的輸出看起來是這個樣子的:</p><pre><code>root@delta:/etc/openvpn# netstat -anup
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
udp        0      0 0.0.0.0:57219           0.0.0.0:*                           638/dhclient
udp        0      0 0.0.0.0:1194            0.0.0.0:*                           911/openvpn
udp        0      0 127.0.0.1:53            0.0.0.0:*                           1385/dnsmasq
udp        0      0 10.8.0.1:53             0.0.0.0:*                           1385/dnsmasq
udp        0      0 0.0.0.0:68              0.0.0.0:*                           638/dhclient
udp6       0      0 :::39148                :::*                                638/dhclient
</code></pre><h3 id="第八步-路由功能" tabindex="-1">第八步 路由功能 <a class="header-anchor" href="#第八步-路由功能" aria-label="Permalink to “第八步 路由功能”">​</a></h3><p>我們希望在一些機器或虛擬機上運行的OpneVPN有路由的功能，這意味着要開啓IP轉發。為了打開它，我們用root賬户鍵入:</p><pre><code>root@delta:/etc/openvpn# echo &quot;1&quot; &gt; /proc/sys/net/ipv4/ip_forward
</code></pre><p>為了讓這個設置重啓也好用，我們編輯 /etc/sysctl.conf:</p><pre><code>root@delta:/etc/openvpn# nano /etc/sysctl.conf
</code></pre><p>編輯這行:</p><pre><code>#net.ipv4.ip_forward=1
</code></pre><p>把&quot;#&quot;刪了:</p><pre><code>net.ipv4.ip_forward=1
</code></pre><p>還需要激活一些iptables相關的規則:</p><pre><code>root@delta:/etc/openvpn# iptables -A FORWARD -m state --state RELATED,ESTABLISHED -j ACCEPT
root@delta:/etc/openvpn# iptables -A FORWARD -s 10.8.0.0/24 -j ACCEPT
root@delta:/etc/openvpn# iptables -A FORWARD -j REJECT
root@delta:/etc/openvpn# iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
root@delta:/etc/openvpn#
</code></pre><p>當然了，我們希望每次Ubuntu啓動的時候，這些規則都好用。所以我們得把它們加到/etc/rc.local裏:</p><pre><code>#!/bin/sh -e
#
# rc.local
#
# This script is executed at the end of each multiuser runlevel.
# Make sure that the script will &quot;exit 0&quot; on success or any other
# value on error.
#
# In order to enable or disable this script just change the execution
# bits.
#
# By default this script does nothing.
  
iptables -A FORWARD -m state --state RELATED,ESTABLISHED -j ACCEPT
iptables -A FORWARD -s 10.8.0.0/24 -j ACCEPT
iptables -A FORWARD -j REJECT
iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
  
service dnsmasq restart
 
exit 0
</code></pre><p>請注意倒數第二行:</p><p>service dnsmasq restart</p><blockquote><p>這非常重要:在系統啓動時，dnsmasq會嘗試在OpenVPN之前啓動。但是OpenVPN啓動之前是沒有隧道(tun0)接口的，所以dnsmasq自然就掛了。過了一陣，當/etc/rc.local讀到隧道(tun0)接口出現時，它會在這時重啓dnsmasq然後就一切如你所願了。</p></blockquote><h3 id="第九步-客户端設置" tabindex="-1">第九步 客户端設置 <a class="header-anchor" href="#第九步-客户端設置" aria-label="Permalink to “第九步 客户端設置”">​</a></h3><p>在第五步，我們在用户的home目錄裏我們建立了ovpn-client文件夾(在我們的例子裏是/home/sub0)。在哪裏有CA的證書和客户端證書和私鑰。現在只缺客户端配置文件了，在/usr/share/doc/openvpn/examples/sample-config-files有一個示例配置文件:</p><pre><code>root@delta:/etc/openvpn# exit
exit
sub0@delta:~$ cd ~/ovpn-client
sub0@delta:~/ovpn-client$ cp /usr/share/doc/openvpn/examples/sample-config-files/client.conf .
sub0@delta:~/ovpn-client$
</code></pre><p>我們需要編輯client.conf，定位到這一行:</p><pre><code>remote my-server-1 1194
</code></pre><p>&quot;my-server-1&quot;是一個佔位符，現在我們要把它換成我們自己服務器的公網域名或IP。如果我們已經給服務器分配域名了，那隻要把它填到my-server-1的位置。如果沒有域名，那麼得獲取公網IP。如何獲取呢?一種方式是鍵入下列命令:</p><pre><code>sub0@delta:~/ovpn-client$ curl ipecho.net/plain ; echo
</code></pre>`,98)),t("p",null,[e[9]||(e[9]=n("(如果不是一個數字的IP地址， 或是發生錯誤，那就等會再試。)所以我們現在知道我們的服務器公網IP了，但是它是動態的還是靜態的呢?當我們把服務器架設在家或者辦公室的時候，極有可能就是動態IP。如果是動態IP的話，可以用免費的動態域名服務(DDNS)，比如",-1)),a(o,{href:"http://www.noip.com"},{default:p(()=>[...e[8]||(e[8]=[n("No-IP",-1)])]),_:1}),e[10]||(e[10]=n("的服務。如果使用No-IP，假設我們選擇了免費的域名dnsalias.net，那麼這一行應該像這樣填寫:",-1))]),e[46]||(e[46]=r(`<pre><code>remote ovpn.dnsalias.net 1194
</code></pre><p>&quot;ovpn&quot;是我們給服務器起的主機名。如果我們的服務器在雲上，那麼它可能有一個靜態IP。如果有靜態IP的話，那麼這一行應該是這樣的:</p><pre><code>remote 1.2.3.4 1194
</code></pre><p>還要修改兩行:</p><pre><code>cert client.crt
key client.key
</code></pre><p>在我們的例子裏，客户端的證書和密鑰的名字分別是laptop.crt和laptop.key所以我們的client.conf要包含下面這兩行:</p><pre><code>cert laptop.crt
key laptop.key
</code></pre><p>在確認保存client.conf的修改之後，我們需要安全的把整個ovpn-client文件夾傳輸到客户端。一種方式是使用scp命令(安全拷貝或在SSH上拷貝)。另一種方式由優秀而免費的軟件FileZilla提供，使用在SSH上運行的FTP(SFTP)。</p><h3 id="第十步-連接並測試" tabindex="-1">第十步 連接並測試 <a class="header-anchor" href="#第十步-連接並測試" aria-label="Permalink to “第十步 連接並測試”">​</a></h3><p><img src="http://parabing.com/assets/uploads/2014/06/01-Firewall.png" alt=""></p><p>所以我們到底怎麼樣才能鏈接到遠程的OpenVPN服務器的呢?它完全取決於我們手中現有的設備類型，當然也取決於所運行的操作系統。我們將在四種不同類別的操作系統上運行，Linux， Windows， OS X和iOS/Android。注意，無論在什麼設備和系統上，我們都得在OpenVPN服務器的本地網絡外才能連接成功。此外，如果在服務器前有防火牆，我們需要增加一條這樣的規則:</p><p><em>把所有從1194/UDP端口收到的包轉發到服務器公網接口的1194/UDP端口。</em></p><p>這是一個簡單的防火牆規則。事不宜遲，讓我們與我們難以置信的OpenVPN服務器建立第一個連接吧。</p><p><strong>Linux</strong>: 我們只需安裝openvpn包。一種連接遠程OpenVPN服務器的方式是新建一個終端，切換到ovpn-client文件夾並以root身份或使用sudo來鍵入下列命令:</p><pre><code>/usr/sbin/openvpn --config client.conf
</code></pre><p>任何時候如果我們需要終止OpenVPN，按[CTRL+C]就行了。</p>`,16)),t("p",null,[e[12]||(e[12]=t("strong",null,"Windows",-1)),e[13]||(e[13]=n(": 有一個免費的OpenVPN客户端軟件叫做",-1)),a(o,{href:"http://swupdate.openvpn.net/downloads/openvpn-client.msi"},{default:p(()=>[...e[11]||(e[11]=[n("OpenVPN Desktop Client",-1)])]),_:1}),e[14]||(e[14]=n("。 配置文件client.conf需要重命名成client.ovpn，這就是我們需要提供給OpenVPN Desktop Client的文件。程序會讀取client.ovpn並給OpenVPN服務器生成一個新的連接配置。",-1))]),e[47]||(e[47]=t("p",null,[t("img",{src:"http://parabing.com/assets/uploads/2014/06/02-Connected.jpg",alt:""})],-1)),t("p",null,[e[17]||(e[17]=t("strong",null,"OS X",-1)),e[18]||(e[18]=n(": ",-1)),a(o,{href:"https://code.google.com/p/tunnelblick"},{default:p(()=>[...e[15]||(e[15]=[n("tunnelblick",-1)])]),_:1}),e[19]||(e[19]=n("是一款可以連接OpenVPN的免費開源OS X軟件。",-1)),a(o,{href:"https://www.sparklabs.com/viscosity"},{default:p(()=>[...e[16]||(e[16]=[n("Viscosity",-1)])]),_:1}),e[20]||(e[20]=n("也可以但它是商業軟件，不過我們喜歡。Viscosity會讀取client.conf並給OpenVPN服務器生成一個新的連接配置。",-1))]),t("p",null,[e[23]||(e[23]=t("strong",null,"iOS/Android",-1)),e[24]||(e[24]=n(": OpenVPN connect是絕佳的選擇。它是免費的且可以從",-1)),a(o,{href:"https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8"},{default:p(()=>[...e[21]||(e[21]=[n("App Store",-1)])]),_:1}),e[25]||(e[25]=n("和",-1)),a(o,{href:"https://play.google.com/store/apps/details?id=net.openvpn.openvpn"},{default:p(()=>[...e[22]||(e[22]=[n("Google Play store",-1)])]),_:1}),e[26]||(e[26]=n("獲得",-1))]),e[48]||(e[48]=t("p",null,"不管是什麼平台，有時我們想檢驗我們是否真的使用OpenVPN連接了。一種檢驗方法是完成下面這簡單的4步:",-1)),e[49]||(e[49]=t("p",null,"在連接到OpenVPN服務器前我們需要…",-1)),t("ul",null,[t("li",null,[e[28]||(e[28]=n("打開",-1)),a(o,{href:"http://www.whatip.com/"},{default:p(()=>[...e[27]||(e[27]=[n("whatip.com",-1)])]),_:1}),e[29]||(e[29]=n("記錄我們的公網IP",-1))]),e[30]||(e[30]=t("li",null,"打開[dnsleaktest.com][10]，運行標準測試(standard test)，記錄我們的域名解析服務器",-1))]),e[50]||(e[50]=r('<p><img src="http://parabing.com/assets/uploads/2014/06/03-DNS.png" alt=""></p><p>在連接到OpenVPN服務器後重復這兩部。如果我們獲取到兩個不同的公網IP，這意味着我們的網絡出口已在遠端OpenVPN服務器那。此外，如果獲取了兩個不同的域名解析服務器，那麼就不存在DNS泄露的問題了。</p><h3 id="感言" tabindex="-1">感言 <a class="header-anchor" href="#感言" aria-label="Permalink to “感言”">​</a></h3><p>我用了三個不同的OpenVPN服務器，都是定製的。 一個運行在希臘Thessaloniki的家庭辦公室的pfSense路由。當我不在辦公室時，我用這個服務器安全的連接到局域網。剩下的兩個服務器在兩個不同的VPS上，一個在冰島雷克雅未克，另一個在美國紐澤西州。當我在外面且需要任意用一個WiFi熱點的時候，我不必考慮安全問題:我只需簡單的連接到雷克雅未克的服務器然後正常上網。有時我想看看那些限制用户地理位置在美國的服務。在這種不太常見的情況下，新澤西的服務器就派上用場了，當我連接時，我就獲得了美國的一個公網IP，這樣就可以訪問有地理位置限制的服務了。值得注意的是，一些服務會把一些知名的VPN公司的IP列入黑名單。這是在你選的VPS提供商建立自己的OpenVPN<em>十分重要</em>的一個優點:這不大可能被列入黑名單。</p><p>無論你的物理位置在哪， OpenVPN確保客户端和服務器之間的數據流是高度加密的。沒有OpenVPN的數據則是另一種情況。 取決於不同的應用層協議，它可能仍然是加密的，但它也可能是未加密的。所以除非你對OpenVPN服務器和它的本地網絡有絕對的控制權，你不能完全相信另一端的管理員。這種精神是顯而易見的:如果你真的在乎你自己的隱私，那麼你需要注意你的行為可能在破壞它。</p><p>一個例子是我們希望點對點傳輸。我們有一個在雲上配置好的OpenVPN服務器。當需要任意用一個WiFi熱點的時候，你沒有絲毫的擔心，因為你連在OpenVPN服務器上。然後你打開你最喜歡的電子郵件客户端從一個依然使用SMTP的老服務器收信。你猜會發生什麼?你的用户名和密碼以未加密的純文本格式離開OpenVPN服務器。與此同時一個在你OpenVPN服務器附近的鬼鬼祟祟的管理員很容易就嗅探出你的證書並記錄到他們越來越長的名叫&quot;random happy people.txt&quot;的列表。</p><p>所以你該做什麼?很簡單。你應該繼續使用OpenVPN服務器，但不要使用應用了舊的或不安全的協議的應用程序。</p><p>享受你的OpenVPN服務器吧!</p><hr>',9)),t("p",null,[e[32]||(e[32]=n("via: ",-1)),a(o,{href:"http://parabing.com/2014/06/openvpn-on-ubuntu/"},{default:p(()=>[...e[31]||(e[31]=[n("http://parabing.com/2014/06/openvpn-on-ubuntu/",-1)])]),_:1})]),t("p",null,[e[35]||(e[35]=n("譯者：",-1)),a(o,{href:"https://github.com/2q1w2007"},{default:p(()=>[...e[33]||(e[33]=[n("2q1w2007",-1)])]),_:1}),e[36]||(e[36]=n(" 校對：",-1)),a(o,{href:"https://github.com/wxy"},{default:p(()=>[...e[34]||(e[34]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[39]||(e[39]=n("本文由 ",-1)),a(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[37]||(e[37]=[n("LCTT",-1)])]),_:1}),e[40]||(e[40]=n(" 原創翻譯，",-1)),a(o,{href:"http://linux.cn/"},{default:p(()=>[...e[38]||(e[38]=[n("Linux中國",-1)])]),_:1}),e[41]||(e[41]=n(" 榮譽推出",-1))])])}const h=s(u,[["render",c]]);export{g as __pageData,h as default};
