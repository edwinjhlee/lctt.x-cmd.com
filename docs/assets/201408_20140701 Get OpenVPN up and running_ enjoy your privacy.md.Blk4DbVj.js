import{_ as s,a0 as i,w as l,s as d,I as t,x as n,a1 as a,A as p,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const g=JSON.parse('{"title":"十步搭建 OpenVPN，享受你的隐私生活 | LCTT x X-CMD","titleTemplate":false,"description":"十步搭建 OpenVPN，享受你的隐私生活 | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十步搭建 OpenVPN，享受你的隐私生活 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十步搭建 OpenVPN，享受你的隐私生活 | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140701 Get OpenVPN up and running, enjoy your privacy","title":"十步搭建 OpenVPN，享受你的隐私生活","tag":"201408","desc":""},"relativePath":"201408/20140701 Get OpenVPN up and running, enjoy your privacy.md","filePath":"[post].md"}'),u={name:"201408/20140701 Get OpenVPN up and running, enjoy your privacy.md"};function c(m,e,P,N,y,v){const o=i("Link");return l(),d("div",null,[e[42]||(e[42]=t("h1",{id:"十步搭建-openvpn-享受你的隐私生活",tabindex:"-1"},[n("十步搭建 OpenVPN，享受你的隐私生活 "),t("a",{class:"header-anchor",href:"#十步搭建-openvpn-享受你的隐私生活","aria-label":"Permalink to “十步搭建 OpenVPN，享受你的隐私生活”"},"​")],-1)),e[43]||(e[43]=t("p",null,[t("img",{src:"http://parabing.com/assets/uploads/2014/06/openVPN-featured.jpg",alt:""})],-1)),e[44]||(e[44]=t("blockquote",null,[t("p",null,"我们支持保护隐私，不为我们有自己的秘密需要保护，只是我们认为保护隐私应该成为一项基本人权。所以我们坚信无论谁在什么时候行使这项权利，都应该不受拘束的获取必须的工具和服务。OpenVPN就是这样一种服务并且有多种工具(客户端) 来让我们利用并享受这种服务。")],-1)),t("p",null,[e[1]||(e[1]=n("通过与一个",-1)),a(o,{href:"http://zh.wikipedia.org/wiki/Openvpn"},{default:p(()=>[...e[0]||(e[0]=[n("OpenVPN",-1)])]),_:1}),e[2]||(e[2]=n("服务器建立连接，我们基本上在我们的设备和远端运行OpenVPN的主机之间建立了一个安全的通信通道。尽管在两个端点之间的通信可能被截获，但是信息是经过高强度加密的所以实际上它对于攻击者没什么用。OpenVPN除了扮演加密通信通道的调解人，我们也可以通过设置使服务器扮演互联网网关的角色。通过这种方式，我们可以",-1)),e[3]||(e[3]=t("strong",null,"连接任何不安全的Wifi",-1)),e[4]||(e[4]=n("，然后迅速的链接到远程的OpenVPN服务器，然后在不需要考虑偷窥的人或者无聊的管理员的情况下运行需要上网的程序。(注意:OpenVPN服务器旁还是需要信任的管理员的。)",-1))]),t("p",null,[e[6]||(e[6]=n("这篇文章将一步一步的教会你如何在",-1)),a(o,{href:"http://www.ubuntu.com/server"},{default:p(()=>[...e[5]||(e[5]=[n("Ubuntu Server 14.04 LTS",-1)])]),_:1}),e[7]||(e[7]=n("上安装OpenVPN。OpenVPN所在的主机可能是云上的一台VPS，一台在我们家里某台电脑上运行的虚拟机，或者是一个老到你都快忘了的设备。",-1))]),e[45]||(e[45]=r(`<h3 id="第一步-准备系统" tabindex="-1">第一步 准备系统 <a class="header-anchor" href="#第一步-准备系统" aria-label="Permalink to “第一步 准备系统”">​</a></h3><p>我们需要Ubuntu Server主机的一个命令行终端，比如通过SSH从远程访问它。首先需要更新它的本地仓库数据:</p><pre><code>sub0@delta:~$ sudo apt-get update
</code></pre><p>进行操作系统和已安装的包的升级，输入:</p><pre><code>sub0@delta:~$ sudo apt-get dist-upgrade
</code></pre><p>如果升级了新内核，那就需要重启。当更新完成后，就该安装OpenVPN了:</p><pre><code>sub0@delta:~$ sudo apt-get -y install openvpn easy-rsa dnsmasq
</code></pre><p>注意，我们用apt-get安装了三个包:</p><ul><li>openvpn提供了OpenVPN的核心</li><li>easy-rsa包含了一些有用的密钥管理脚本</li><li>dnsmasq是当我们的OpenVPN所在的主机将扮演客户端的路由器时会用到的域名服务器</li></ul><h3 id="第二步-生成证书和私钥" tabindex="-1">第二步 生成证书和私钥 <a class="header-anchor" href="#第二步-生成证书和私钥" aria-label="Permalink to “第二步 生成证书和私钥”">​</a></h3><p>这是安装OpenVPN中最重要和最关键的一步，目的是建立公钥基础设施(PKI)。包括如下内容:</p><ul><li>为OpenVPN服务器创建一个证书(公钥)和一个私钥</li><li>为每个OpenVPN客户端创建证书和私钥</li><li>建立一个证书颁发机构(CA)并创建证书和私钥。这个私钥用来给OpenVPN服务器和客户端的证书签名</li></ul><p>从最后一个做起，我们先建立一个目录:</p><pre><code>sub0@delta:~$ sudo mkdir /etc/openvpn/easy-rsa
</code></pre><p>然后把easy-rsa的文件拷过去:</p><pre><code>sub0@delta:~$ sudo cp -r /usr/share/easy-rsa/* /etc/openvpn/easy-rsa
</code></pre><p>在我们创建CA的私钥之前，我们先编辑/etc/openvpn/easy-rsa/vars(我们喜欢用nano编辑器，不过这只是我们的喜好，你爱用什么用什么):</p><pre><code>sub0@delta:~$ sudo nano /etc/openvpn/easy-rsa/vars
</code></pre><p>在文件的尾部，我们设置主证书和密钥的信息:</p><pre><code>export KEY_COUNTRY=&quot;GR&quot;
export KEY_PROVINCE=&quot;Central Macedonia&quot;
export KEY_CITY=&quot;Thessaloniki&quot;
export KEY_ORG=&quot;Parabing Creations&quot;
export KEY_EMAIL=&quot;nobody@parabing.com&quot;
export KEY_CN=&quot;VPNsRUS&quot;
export KEY_NAME=&quot;VPNsRUS&quot;
export KEY_OU=&quot;Parabing&quot;
export KEY_ALTNAMES=&quot;VPNsRUS&quot;
</code></pre><p>你可以根据自己的情况设置不同的值。特别注意最后KEY_ALTNAMES这一行，尽管这不是原本vars文件中有的但是我们还是把它加到文件的尾部，不然build-ca脚本会运行失败。</p><p>保存更改，我们得按[CTRL+O]然后按[Enter]。想退出nano，请按[CTRL+X]。现在，我们要获得root访问权限，继续生成主证书和私钥(LCTT译注:请注意命令行账户发生了改变):</p><pre><code>sub0@delta:~$ sudo su
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
</code></pre><p>在我们的例子中，所有问题的答案都选择了默认的。在运行了build-ca脚本后，我们就获得了主证书文件(keys/ca.crt)和对应的私钥(keys/ca.key)。私钥必须不计代价的保密。</p><h3 id="第三步-生成openvpn服务器的证书和私钥" tabindex="-1">第三步 生成OpenVPN服务器的证书和私钥 <a class="header-anchor" href="#第三步-生成openvpn服务器的证书和私钥" aria-label="Permalink to “第三步 生成OpenVPN服务器的证书和私钥”">​</a></h3><p>在我们为OpenVPN服务器生成证书和密钥之前，我们得给他起个名。我决定把它叫&quot;delta&quot;，然后运行build-key-server脚本来获取证书和密钥:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# sh build-key-server delta
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
</code></pre><p>当脚本成功运行完的时候，我们就得到了服务器的证书(keys/delta.crt)和私钥(keys/delta.key)。注意服务器证书被CA的私钥签名了。</p><h3 id="第四步-生成diffie-hellman参数" tabindex="-1">第四步 生成Diffie-Hellman参数 <a class="header-anchor" href="#第四步-生成diffie-hellman参数" aria-label="Permalink to “第四步 生成Diffie-Hellman参数”">​</a></h3><p>幸亏有了Diffie-Hellman参数，我们才能在不安全的通信通道里安全的交换密钥。为了生成它我们需要键入:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# sh build-dh
Generating DH parameters, 2048 bit long safe prime, generator 2
This is going to take a long time
.......................+.....................................+..
...........................+..+.....................+...........
..............................................+.................
.......................+........................................
................................................+...............
.......................................++*++*++*
root@delta:/etc/openvpn/easy-rsa#
</code></pre><p>证书，私钥和包含Diffie-Hellman参数的文件已生成，它们都储存在/etc/openvpn/easy-rsa/keys，所以我们到现在为止已经有如下五个文件了:</p><ol><li><strong>ca.crt</strong> – 证书颁发机构(CA)的证书</li><li><strong>ca.key</strong> – CA的私钥</li><li><strong>delta.crt</strong> – OpenVPN服务器的证书</li><li><strong>delta.key</strong> – OpenVPN服务器的私钥</li><li><strong>dh2048.pem</strong> – Diffie-Hellman参数文件</li></ol><p>你自己的OpenVPN服务器命名可能和我们的不同。现在我们需要拷贝除了ca.key的文件到/etc/openvpn:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# cd keys
root@delta:/etc/openvpn/easy-rsa/keys# cp ca.crt delta.crt delta.key dh2048.pem /etc/openvpn
root@delta:/etc/openvpn/easy-rsa/keys# cd ..
root@delta:/etc/openvpn/easy-rsa#
</code></pre><h3 id="第五步-为openvpn客户端生成证书和私钥" tabindex="-1">第五步 为OpenVPN客户端生成证书和私钥 <a class="header-anchor" href="#第五步-为openvpn客户端生成证书和私钥" aria-label="Permalink to “第五步 为OpenVPN客户端生成证书和私钥”">​</a></h3><p>试想我们的笔记本要连接OpenVPN服务器。为了实现这个很常见的情况，我们首先需要为客户端(比如:我们的笔记本)生成证书和私钥，在/etc/openvpn/easy-rsa有一个脚本帮我们完成这项工作:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# source vars
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
</code></pre><p>我们为密钥选取的名字是&quot;laptop&quot;，当build-key脚本运行完之后，我们就得到了在keys/laptop.crt的证书和在keys/laptop.key的私钥。有了这两个文件和CA的证书，我们得把这三个文件拷贝到用户有(比如用户sub0)权访问的地方。比如我们可以在用户的home目录中新建一个目录并把三个文件拷贝过去:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# mkdir /home/sub0/ovpn-client
root@delta:/etc/openvpn/easy-rsa# cd keys
root@delta:/etc/openvpn/easy-rsa/keys# cp ca.crt laptop.crt laptop.key /home/sub0/ovpn-client
root@delta:/etc/openvpn/easy-rsa/keys# chown -R sub0:sub0 /home/sub0/ovpn-client
root@delta:/etc/openvpn/easy-rsa/keys# cd ..
root@delta:/etc/openvpn/easy-rsa#
</code></pre><p>ovpn-client文件夹必须安全的拷贝到我们的笔记本电脑上。我们可以给多个客户端分发这三个文件。当然了，等我们需要一个不一样的证书-私钥对的时候只要再次运行build-key脚本即可。</p><h3 id="第六步-openvpn服务器设置" tabindex="-1">第六步 -- OpenVPN服务器设置 <a class="header-anchor" href="#第六步-openvpn服务器设置" aria-label="Permalink to “第六步 -- OpenVPN服务器设置”">​</a></h3><p>等会我们的OpenVPN服务器就要启动并运行了。但是开始的时候，我们需要更改一些设置。在/usr/share/doc/openvpn/examples/sample-config-files中有一个示例配置文件，它很适合我们的教程，这个文件叫server.conf.gz:</p><pre><code>root@delta:/etc/openvpn/easy-rsa# cd /etc/openvpn
root@delta:/etc/openvpn# cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz .
root@delta:/etc/openvpn# gunzip -d server.conf.gz
root@delta:/etc/openvpn# mv server.conf delta.conf
root@delta:/etc/openvpn#
</code></pre><p>如你所见，我们把server.conf.gz拷贝到/etc/openvpn，解压并重命名到delta.conf。你可以按个人喜好给OpenVPN服务器配置文件取名字，但是它必须有&quot;.conf&quot;扩展名。我们现在用nano打开配置文件:</p><pre><code>root@delta:/etc/openvpn# nano delta.conf
</code></pre><p>下面是我们应该做出的更改。</p><ul><li><p>首先，定位到这一行</p><p>cert server.crt key server.key</p></li></ul><p>确认OpenVPN服务器证书和私钥的位置和名称，在我们的例子中，这两行要改成</p><pre><code>cert delta.crt
key delta.key
</code></pre><ul><li><p>然后定位到这一行</p><p>dh dh1024.pem</p></li></ul><p>用&quot;2048&quot;代替&quot;1024&quot;:</p><pre><code>dh dh2048.pem
</code></pre><ul><li><p>在配置文件的末尾，我们添加下面这两行:</p><p>push &quot;redirect-gateway def1&quot; push &quot;dhcp-option DNS 10.8.0.1&quot;</p></li></ul><p>最后这两行指示客户端用OpenVPN作为默认的网关，并用10.8.0.1作为DNS服务器。注意10.8.0.1是OpenVPN启动时自动创建的隧道接口的IP。如果客户用别的域名解析服务，那么我们就得提防不安全的DNS服务器。为了避免这种泄露，我们建议所有OpenVPN客户端使用10.8.0.1作为DNS服务器。</p><p>我们以这种方式来开始运行OpenVPN服务器:</p><pre><code>root@delta:/etc/openvpn# service openvpn start
</code></pre><p>默认的，OpenVPN服务器监听1194/UDP端口。一种查看的方法是使用netstat工具:</p><pre><code>root@delta:/etc/openvpn# netstat -anup
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
udp        0      0 0.0.0.0:54149           0.0.0.0:*                           555/dhclient
udp        0      0 0.0.0.0:1194            0.0.0.0:*                           3024/openvpn
udp        0      0 0.0.0.0:53              0.0.0.0:*                           2756/dnsmasq
udp        0      0 0.0.0.0:68              0.0.0.0:*                           555/dhclient
udp6       0      0 :::60622                :::*                                555/dhclient
udp6       0      0 :::53                   :::*                                2756/dnsmasq
</code></pre><p>看起来一切运行的不错，但是我们还没设置DNS服务器呢。</p><h3 id="第七步-为openvpn客户端搭建dns" tabindex="-1">第七步 为OpenVPN客户端搭建DNS <a class="header-anchor" href="#第七步-为openvpn客户端搭建dns" aria-label="Permalink to “第七步 为OpenVPN客户端搭建DNS”">​</a></h3><p>这就是为什么我们要安装dnsmasq的原因，打开它的配置文件。</p><pre><code>root@delta:/etc/openvpn# nano /etc/dnsmasq.conf
</code></pre><p>定位到这行:</p><pre><code>#listen-address=
</code></pre><p>把它换成下面这样:</p><pre><code>listen-address=127.0.0.1, 10.8.0.1
</code></pre><p>然后定位到这行:</p><pre><code>#bind-interfaces
</code></pre><p>把&quot;#&quot;删了:</p><pre><code>bind-interfaces
</code></pre><p>为了让dnsmasq应用这些更改，我们重启它:</p><pre><code>root@delta:/etc/openvpn# service dnsmasq restart
 * Restarting DNS forwarder and DHCP server dnsmasq [ OK ]
root@delta:/etc/openvpn#
</code></pre><p>现在，dnamasq在本地回环(lo)和隧道(tun0)接口监听DNS请求。netstat的输出看起来是这个样子的:</p><pre><code>root@delta:/etc/openvpn# netstat -anup
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
udp        0      0 0.0.0.0:57219           0.0.0.0:*                           638/dhclient
udp        0      0 0.0.0.0:1194            0.0.0.0:*                           911/openvpn
udp        0      0 127.0.0.1:53            0.0.0.0:*                           1385/dnsmasq
udp        0      0 10.8.0.1:53             0.0.0.0:*                           1385/dnsmasq
udp        0      0 0.0.0.0:68              0.0.0.0:*                           638/dhclient
udp6       0      0 :::39148                :::*                                638/dhclient
</code></pre><h3 id="第八步-路由功能" tabindex="-1">第八步 路由功能 <a class="header-anchor" href="#第八步-路由功能" aria-label="Permalink to “第八步 路由功能”">​</a></h3><p>我们希望在一些机器或虚拟机上运行的OpneVPN有路由的功能，这意味着要开启IP转发。为了打开它，我们用root账户键入:</p><pre><code>root@delta:/etc/openvpn# echo &quot;1&quot; &gt; /proc/sys/net/ipv4/ip_forward
</code></pre><p>为了让这个设置重启也好用，我们编辑 /etc/sysctl.conf:</p><pre><code>root@delta:/etc/openvpn# nano /etc/sysctl.conf
</code></pre><p>编辑这行:</p><pre><code>#net.ipv4.ip_forward=1
</code></pre><p>把&quot;#&quot;删了:</p><pre><code>net.ipv4.ip_forward=1
</code></pre><p>还需要激活一些iptables相关的规则:</p><pre><code>root@delta:/etc/openvpn# iptables -A FORWARD -m state --state RELATED,ESTABLISHED -j ACCEPT
root@delta:/etc/openvpn# iptables -A FORWARD -s 10.8.0.0/24 -j ACCEPT
root@delta:/etc/openvpn# iptables -A FORWARD -j REJECT
root@delta:/etc/openvpn# iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
root@delta:/etc/openvpn#
</code></pre><p>当然了，我们希望每次Ubuntu启动的时候，这些规则都好用。所以我们得把它们加到/etc/rc.local里:</p><pre><code>#!/bin/sh -e
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
</code></pre><p>请注意倒数第二行:</p><p>service dnsmasq restart</p><blockquote><p>这非常重要:在系统启动时，dnsmasq会尝试在OpenVPN之前启动。但是OpenVPN启动之前是没有隧道(tun0)接口的，所以dnsmasq自然就挂了。过了一阵，当/etc/rc.local读到隧道(tun0)接口出现时，它会在这时重启dnsmasq然后就一切如你所愿了。</p></blockquote><h3 id="第九步-客户端设置" tabindex="-1">第九步 客户端设置 <a class="header-anchor" href="#第九步-客户端设置" aria-label="Permalink to “第九步 客户端设置”">​</a></h3><p>在第五步，我们在用户的home目录里我们建立了ovpn-client文件夹(在我们的例子里是/home/sub0)。在哪里有CA的证书和客户端证书和私钥。现在只缺客户端配置文件了，在/usr/share/doc/openvpn/examples/sample-config-files有一个示例配置文件:</p><pre><code>root@delta:/etc/openvpn# exit
exit
sub0@delta:~$ cd ~/ovpn-client
sub0@delta:~/ovpn-client$ cp /usr/share/doc/openvpn/examples/sample-config-files/client.conf .
sub0@delta:~/ovpn-client$
</code></pre><p>我们需要编辑client.conf，定位到这一行:</p><pre><code>remote my-server-1 1194
</code></pre><p>&quot;my-server-1&quot;是一个占位符，现在我们要把它换成我们自己服务器的公网域名或IP。如果我们已经给服务器分配域名了，那只要把它填到my-server-1的位置。如果没有域名，那么得获取公网IP。如何获取呢?一种方式是键入下列命令:</p><pre><code>sub0@delta:~/ovpn-client$ curl ipecho.net/plain ; echo
</code></pre>`,98)),t("p",null,[e[9]||(e[9]=n("(如果不是一个数字的IP地址， 或是发生错误，那就等会再试。)所以我们现在知道我们的服务器公网IP了，但是它是动态的还是静态的呢?当我们把服务器架设在家或者办公室的时候，极有可能就是动态IP。如果是动态IP的话，可以用免费的动态域名服务(DDNS)，比如",-1)),a(o,{href:"http://www.noip.com"},{default:p(()=>[...e[8]||(e[8]=[n("No-IP",-1)])]),_:1}),e[10]||(e[10]=n("的服务。如果使用No-IP，假设我们选择了免费的域名dnsalias.net，那么这一行应该像这样填写:",-1))]),e[46]||(e[46]=r(`<pre><code>remote ovpn.dnsalias.net 1194
</code></pre><p>&quot;ovpn&quot;是我们给服务器起的主机名。如果我们的服务器在云上，那么它可能有一个静态IP。如果有静态IP的话，那么这一行应该是这样的:</p><pre><code>remote 1.2.3.4 1194
</code></pre><p>还要修改两行:</p><pre><code>cert client.crt
key client.key
</code></pre><p>在我们的例子里，客户端的证书和密钥的名字分别是laptop.crt和laptop.key所以我们的client.conf要包含下面这两行:</p><pre><code>cert laptop.crt
key laptop.key
</code></pre><p>在确认保存client.conf的修改之后，我们需要安全的把整个ovpn-client文件夹传输到客户端。一种方式是使用scp命令(安全拷贝或在SSH上拷贝)。另一种方式由优秀而免费的软件FileZilla提供，使用在SSH上运行的FTP(SFTP)。</p><h3 id="第十步-连接并测试" tabindex="-1">第十步 连接并测试 <a class="header-anchor" href="#第十步-连接并测试" aria-label="Permalink to “第十步 连接并测试”">​</a></h3><p><img src="http://parabing.com/assets/uploads/2014/06/01-Firewall.png" alt=""></p><p>所以我们到底怎么样才能链接到远程的OpenVPN服务器的呢?它完全取决于我们手中现有的设备类型，当然也取决于所运行的操作系统。我们将在四种不同类别的操作系统上运行，Linux， Windows， OS X和iOS/Android。注意，无论在什么设备和系统上，我们都得在OpenVPN服务器的本地网络外才能连接成功。此外，如果在服务器前有防火墙，我们需要增加一条这样的规则:</p><p><em>把所有从1194/UDP端口收到的包转发到服务器公网接口的1194/UDP端口。</em></p><p>这是一个简单的防火墙规则。事不宜迟，让我们与我们难以置信的OpenVPN服务器建立第一个连接吧。</p><p><strong>Linux</strong>: 我们只需安装openvpn包。一种连接远程OpenVPN服务器的方式是新建一个终端，切换到ovpn-client文件夹并以root身份或使用sudo来键入下列命令:</p><pre><code>/usr/sbin/openvpn --config client.conf
</code></pre><p>任何时候如果我们需要终止OpenVPN，按[CTRL+C]就行了。</p>`,16)),t("p",null,[e[12]||(e[12]=t("strong",null,"Windows",-1)),e[13]||(e[13]=n(": 有一个免费的OpenVPN客户端软件叫做",-1)),a(o,{href:"http://swupdate.openvpn.net/downloads/openvpn-client.msi"},{default:p(()=>[...e[11]||(e[11]=[n("OpenVPN Desktop Client",-1)])]),_:1}),e[14]||(e[14]=n("。 配置文件client.conf需要重命名成client.ovpn，这就是我们需要提供给OpenVPN Desktop Client的文件。程序会读取client.ovpn并给OpenVPN服务器生成一个新的连接配置。",-1))]),e[47]||(e[47]=t("p",null,[t("img",{src:"http://parabing.com/assets/uploads/2014/06/02-Connected.jpg",alt:""})],-1)),t("p",null,[e[17]||(e[17]=t("strong",null,"OS X",-1)),e[18]||(e[18]=n(": ",-1)),a(o,{href:"https://code.google.com/p/tunnelblick"},{default:p(()=>[...e[15]||(e[15]=[n("tunnelblick",-1)])]),_:1}),e[19]||(e[19]=n("是一款可以连接OpenVPN的免费开源OS X软件。",-1)),a(o,{href:"https://www.sparklabs.com/viscosity"},{default:p(()=>[...e[16]||(e[16]=[n("Viscosity",-1)])]),_:1}),e[20]||(e[20]=n("也可以但它是商业软件，不过我们喜欢。Viscosity会读取client.conf并给OpenVPN服务器生成一个新的连接配置。",-1))]),t("p",null,[e[23]||(e[23]=t("strong",null,"iOS/Android",-1)),e[24]||(e[24]=n(": OpenVPN connect是绝佳的选择。它是免费的且可以从",-1)),a(o,{href:"https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8"},{default:p(()=>[...e[21]||(e[21]=[n("App Store",-1)])]),_:1}),e[25]||(e[25]=n("和",-1)),a(o,{href:"https://play.google.com/store/apps/details?id=net.openvpn.openvpn"},{default:p(()=>[...e[22]||(e[22]=[n("Google Play store",-1)])]),_:1}),e[26]||(e[26]=n("获得",-1))]),e[48]||(e[48]=t("p",null,"不管是什么平台，有时我们想检验我们是否真的使用OpenVPN连接了。一种检验方法是完成下面这简单的4步:",-1)),e[49]||(e[49]=t("p",null,"在连接到OpenVPN服务器前我们需要…",-1)),t("ul",null,[t("li",null,[e[28]||(e[28]=n("打开",-1)),a(o,{href:"http://www.whatip.com/"},{default:p(()=>[...e[27]||(e[27]=[n("whatip.com",-1)])]),_:1}),e[29]||(e[29]=n("记录我们的公网IP",-1))]),e[30]||(e[30]=t("li",null,"打开[dnsleaktest.com][10]，运行标准测试(standard test)，记录我们的域名解析服务器",-1))]),e[50]||(e[50]=r('<p><img src="http://parabing.com/assets/uploads/2014/06/03-DNS.png" alt=""></p><p>在连接到OpenVPN服务器后重复这两部。如果我们获取到两个不同的公网IP，这意味着我们的网络出口已在远端OpenVPN服务器那。此外，如果获取了两个不同的域名解析服务器，那么就不存在DNS泄露的问题了。</p><h3 id="感言" tabindex="-1">感言 <a class="header-anchor" href="#感言" aria-label="Permalink to “感言”">​</a></h3><p>我用了三个不同的OpenVPN服务器，都是定制的。 一个运行在希腊Thessaloniki的家庭办公室的pfSense路由。当我不在办公室时，我用这个服务器安全的连接到局域网。剩下的两个服务器在两个不同的VPS上，一个在冰岛雷克雅未克，另一个在美国纽泽西州。当我在外面且需要任意用一个WiFi热点的时候，我不必考虑安全问题:我只需简单的连接到雷克雅未克的服务器然后正常上网。有时我想看看那些限制用户地理位置在美国的服务。在这种不太常见的情况下，新泽西的服务器就派上用场了，当我连接时，我就获得了美国的一个公网IP，这样就可以访问有地理位置限制的服务了。值得注意的是，一些服务会把一些知名的VPN公司的IP列入黑名单。这是在你选的VPS提供商建立自己的OpenVPN<em>十分重要</em>的一个优点:这不大可能被列入黑名单。</p><p>无论你的物理位置在哪， OpenVPN确保客户端和服务器之间的数据流是高度加密的。没有OpenVPN的数据则是另一种情况。 取决于不同的应用层协议，它可能仍然是加密的，但它也可能是未加密的。所以除非你对OpenVPN服务器和它的本地网络有绝对的控制权，你不能完全相信另一端的管理员。这种精神是显而易见的:如果你真的在乎你自己的隐私，那么你需要注意你的行为可能在破坏它。</p><p>一个例子是我们希望点对点传输。我们有一个在云上配置好的OpenVPN服务器。当需要任意用一个WiFi热点的时候，你没有丝毫的担心，因为你连在OpenVPN服务器上。然后你打开你最喜欢的电子邮件客户端从一个依然使用SMTP的老服务器收信。你猜会发生什么?你的用户名和密码以未加密的纯文本格式离开OpenVPN服务器。与此同时一个在你OpenVPN服务器附近的鬼鬼祟祟的管理员很容易就嗅探出你的证书并记录到他们越来越长的名叫&quot;random happy people.txt&quot;的列表。</p><p>所以你该做什么?很简单。你应该继续使用OpenVPN服务器，但不要使用应用了旧的或不安全的协议的应用程序。</p><p>享受你的OpenVPN服务器吧!</p><hr>',9)),t("p",null,[e[32]||(e[32]=n("via: ",-1)),a(o,{href:"http://parabing.com/2014/06/openvpn-on-ubuntu/"},{default:p(()=>[...e[31]||(e[31]=[n("http://parabing.com/2014/06/openvpn-on-ubuntu/",-1)])]),_:1})]),t("p",null,[e[35]||(e[35]=n("译者：",-1)),a(o,{href:"https://github.com/2q1w2007"},{default:p(()=>[...e[33]||(e[33]=[n("2q1w2007",-1)])]),_:1}),e[36]||(e[36]=n(" 校对：",-1)),a(o,{href:"https://github.com/wxy"},{default:p(()=>[...e[34]||(e[34]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[39]||(e[39]=n("本文由 ",-1)),a(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[37]||(e[37]=[n("LCTT",-1)])]),_:1}),e[40]||(e[40]=n(" 原创翻译，",-1)),a(o,{href:"http://linux.cn/"},{default:p(()=>[...e[38]||(e[38]=[n("Linux中国",-1)])]),_:1}),e[41]||(e[41]=n(" 荣誉推出",-1))])])}const h=s(u,[["render",c]]);export{g as __pageData,h as default};
