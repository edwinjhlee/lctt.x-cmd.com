import{_ as a,a0 as s,w as l,s as u,I as t,x as n,a1 as o,A as r,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"在 Ubuntu 15.04 上配置 OpenVPN 服务器和客户端 | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 15.04 上配置 OpenVPN 服务器和客户端 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 15.04 上配置 OpenVPN 服务器和客户端 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 15.04 上配置 OpenVPN 服务器和客户端 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150602 Howto Configure OpenVPN Server-Client on Ubuntu 15.04","title":"在 Ubuntu 15.04 上配置 OpenVPN 服务器和客户端","tag":"201508","desc":""},"relativePath":"201508/20150602 Howto Configure OpenVPN Server-Client on Ubuntu 15.04.md","filePath":"[post].md"}'),d={name:"201508/20150602 Howto Configure OpenVPN Server-Client on Ubuntu 15.04.md"};function c(m,e,v,N,y,f){const p=s("Link");return l(),u("div",null,[e[18]||(e[18]=t("h1",{id:"在-ubuntu-15-04-上配置-openvpn-服务器和客户端",tabindex:"-1"},[n("在 Ubuntu 15.04 上配置 OpenVPN 服务器和客户端 "),t("a",{class:"header-anchor",href:"#在-ubuntu-15-04-上配置-openvpn-服务器和客户端","aria-label":"Permalink to “在 Ubuntu 15.04 上配置 OpenVPN 服务器和客户端”"},"​")],-1)),e[19]||(e[19]=t("p",null,"虚拟专用网（VPN）常指几种通过其它网络建立连接技术。它之所以被称为“虚拟”，是因为各个节点间的连接不是通过物理线路实现的，而“专用”是指如果没有网络所有者的正确授权是不能被公开访问到。",-1)),e[20]||(e[20]=t("p",null,[t("img",{src:"http://blog.linoxide.com/wp-content/uploads/2015/05/vpn_custom_illustration.jpg",alt:""})],-1)),t("p",null,[o(p,{href:"https://openvpn.net/"},{default:r(()=>[...e[0]||(e[0]=[n("OpenVPN",-1)])]),_:1}),e[1]||(e[1]=n("软件借助TUN/TAP驱动使用TCP和UDP协议来传输数据。UDP协议和TUN驱动允许NAT后的用户建立到OpenVPN服务器的连接。此外，OpenVPN允许指定自定义端口。它提供了更多的灵活配置，可以帮助你避免防火墙限制。",-1))]),e[21]||(e[21]=i(`<p>OpenVPN中，由OpenSSL库和传输层安全协议（TLS）提供了安全和加密。TLS是SSL协议的一个改进版本。</p><p>OpenSSL提供了两种加密方法：对称和非对称。下面，我们展示了如何配置OpenVPN的服务器端，以及如何配置使用带有公共密钥基础结构（PKI）的非对称加密和TLS协议。</p><h3 id="服务器端配置" tabindex="-1">服务器端配置 <a class="header-anchor" href="#服务器端配置" aria-label="Permalink to “服务器端配置”">​</a></h3><p>首先，我们必须安装OpenVPN软件。在Ubuntu 15.04和其它带有‘apt’包管理器的Unix系统中，可以通过如下命令安装：</p><pre><code>sudo apt-get install openvpn
</code></pre><p>然后，我们必须配置一个密钥对，这可以通过默认的“openssl”工具完成。但是，这种方式十分难。这也是我们使用“easy-rsa”来实现此目的的原因。接下来的命令会将“easy-rsa”安装到系统中。</p><pre><code>sudo apt-get unstall easy-rsa
</code></pre><p><strong>注意</strong>： 所有接下来的命令要以超级用户权限执行，如在使用<code>sudo -i</code>命令后执行，或者你可以使用<code>sudo -E</code>作为接下来所有命令的前缀。</p><p>开始之前，我们需要拷贝“easy-rsa”到openvpn文件夹。</p><pre><code>mkdir /etc/openvpn/easy-rsa
cp -r /usr/share/easy-rsa /etc/openvpn/easy-rsa
mv /etc/openvpn/easy-rsa/easy-rsa /etc/openvpn/easy-rsa/2.0
</code></pre><p>然后进入到该目录</p><pre><code>cd /etc/openvpn/easy-rsa/2.0
</code></pre><p>这里，我们开始密钥生成进程。</p><p>首先，我们编辑一个“vars”文件。为了简化生成过程，我们需要在里面指定数据。这里是“vars”文件的一个样例：</p><pre><code>export KEY_COUNTRY=&quot;CN&quot;
export KEY_PROVINCE=&quot;BJ&quot;
export KEY_CITY=&quot;Beijing&quot;
export KEY_ORG=&quot;Linux.CN&quot;
export KEY_EMAIL=&quot;open@vpn.linux.cn&quot;
export KEY_OU=server
</code></pre><p>希望这些字段名称对你而言已经很清楚，不需要进一步说明了。</p><p>其次，我们需要拷贝openssl配置。另外一个版本已经有现成的配置文件，如果你没有特定要求，你可以使用它的上一个版本。这里是1.0.0版本。</p><pre><code>cp openssl-1.0.0.cnf openssl.cnf
</code></pre><p>第三，我们需要加载环境变量，这些变量已经在前面一步中编辑好了。</p><pre><code>source ./vars
</code></pre><p>生成密钥的最后一步准备工作是清空旧的证书和密钥，以及生成新密钥的序列号和索引文件。可以通过以下命令完成。</p><pre><code>./clean-all
</code></pre><p>现在，我们完成了准备工作，准备好启动生成进程了。让我们先来生成证书。</p><pre><code>./build-ca
</code></pre><p>在对话中，我们可以看到默认的变量，这些变量是我们先前在“vars”中指定的。我们可以检查一下，如有必要进行编辑，然后按回车几次。对话如下</p><pre><code>Generating a 2048 bit RSA private key
.............................................+++
...................................................................................................+++
writing new private key to &#39;ca.key&#39;
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [CN]:
State or Province Name (full name) [BJ]:
Locality Name (eg, city) [Beijing]:
Organization Name (eg, company) [Linux.CN]:
Organizational Unit Name (eg, section) [Tech]:
Common Name (eg, your name or your server&#39;s hostname) [Linux.CN CA]:
Name [EasyRSA]:
Email Address [open@vpn.linux.cn]:
</code></pre><p>接下来，我们需要生成一个服务器密钥</p><pre><code>./build-key-server server
</code></pre><p>该命令的对话如下：</p><pre><code>Generating a 2048 bit RSA private key
........................................................................+++
............................+++
writing new private key to &#39;server.key&#39;
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [CN]:
State or Province Name (full name) [BJ]:
Locality Name (eg, city) [Beijing]:
Organization Name (eg, company) [Linux.CN]:
Organizational Unit Name (eg, section) [Tech]:
Common Name (eg, your name or your server&#39;s hostname) [Linux.CN server]:
Name [EasyRSA]:
Email Address [open@vpn.linux.cn]:

Please enter the following &#39;extra&#39; attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
Using configuration from /etc/openvpn/easy-rsa/2.0/openssl-1.0.0.cnf
Check that the request matches the signature
Signature ok
The Subject&#39;s Distinguished Name is as follows
countryName :PRINTABLE:&#39;CN&#39;
stateOrProvinceName :PRINTABLE:&#39;BJ&#39;
localityName :PRINTABLE:&#39;Beijing&#39;
organizationName :PRINTABLE:&#39;Linux.CN&#39;
organizationalUnitName:PRINTABLE:&#39;Tech&#39;
commonName :PRINTABLE:&#39;Linux.CN server&#39;
name :PRINTABLE:&#39;EasyRSA&#39;
emailAddress :IA5STRING:&#39;open@vpn.linux.cn&#39;
Certificate is to be certified until May 22 19:00:25 2025 GMT (3650 days)
Sign the certificate? [y/n]:y
1 out of 1 certificate requests certified, commit? [y/n]y
Write out database with 1 new entries
Data Base Updated
</code></pre><p>这里，最后两个关于“签署证书”和“提交”的问题，我们必须回答“yes”。</p><p>现在，我们已经有了证书和服务器密钥。下一步，就是去省城Diffie-Hellman密钥。执行以下命令，耐心等待。在接下来的几分钟内，我们将看到许多点和加号。</p><pre><code>./build-dh
</code></pre><p>该命令的输出样例如下</p><pre><code>Generating DH parameters, 2048 bit long safe prime, generator 2
This is going to take a long time
................................+................&lt;许多的点&gt;
</code></pre><p>在漫长的等待之后，我们可以继续生成最后的密钥了，该密钥用于TLS验证。命令如下：</p><pre><code>openvpn --genkey --secret keys/ta.key
</code></pre><p>现在，生成完毕，我们可以移动所有生成的文件到最后的位置中。</p><pre><code>cp -r /etc/openvpn/easy-rsa/2.0/keys/ /etc/openvpn/
</code></pre><p>最后，我们来创建OpenVPN配置文件。让我们从样例中拷贝过来吧：</p><pre><code>cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz /etc/openvpn/
cd /etc/openvpn
gunzip -d /etc/openvpn/server.conf.gz
</code></pre><p>然后编辑</p><pre><code>vim /etc/openvpn/server.conf
</code></pre><p>我们需要指定密钥的自定义路径</p><pre><code>ca /etc/openvpn/keys/ca.crt
cert /etc/openvpn/keys/server.crt
key /etc/openvpn/keys/server.key # This file should be kept secret
dh /etc/openvpn/keys/dh2048.pem
</code></pre><p>一切就绪。在重启OpenVPN后，服务器端配置就完成了。</p><pre><code>service openvpn restart
</code></pre><h3 id="unix的客户端配置" tabindex="-1">Unix的客户端配置 <a class="header-anchor" href="#unix的客户端配置" aria-label="Permalink to “Unix的客户端配置”">​</a></h3><p>假定我们有一台装有类Unix操作系统的设备，比如Ubuntu 15.04，并安装有OpenVPN。我们想要连接到前面建立的OpenVPN服务器。首先，我们需要为客户端生成密钥。为了生成该密钥，请转到服务器上的对应目录中：</p><pre><code>cd /etc/openvpn/easy-rsa/2.0
</code></pre><p>加载环境变量</p><pre><code>source vars
</code></pre><p>然后创建客户端密钥</p><pre><code>./build-key client
</code></pre><p>我们将看到一个与先前关于服务器密钥生成部分的章节描述一样的对话，填入客户端的实际信息。</p><p>如果需要密码保护密钥，你需要运行另外一个命令，命令如下</p><pre><code>./build-key-pass client
</code></pre><p>在此种情况下，在建立VPN连接时，会提示你输入密码。</p><p>现在，我们需要将以下文件从服务器拷贝到客户端/etc/openvpn/keys/文件夹。</p><p>服务器文件列表：</p><ul><li>ca.crt,</li><li>dh2048.pem,</li><li>client.crt,</li><li>client.key,</li><li>ta.key.</li></ul><p>在此之后，我们转到客户端，准备配置文件。配置文件位于/etc/openvpn/client.conf，内容如下</p><pre><code>dev tun
proto udp

# 远程 OpenVPN 服务器的 IP 和 端口号
remote 111.222.333.444 1194

resolv-retry infinite

ca /etc/openvpn/keys/ca.crt
cert /etc/openvpn/keys/client.crt
key /etc/openvpn/keys/client.key
tls-client
tls-auth /etc/openvpn/keys/ta.key 1
auth SHA1
cipher BF-CBC
remote-cert-tls server
comp-lzo
persist-key
persist-tun

status openvpn-status.log
log /var/log/openvpn.log
verb 3
mute 20
</code></pre><p>在此之后，我们需要重启OpenVPN以接受新配置。</p><pre><code>service openvpn restart
</code></pre><p>好了，客户端配置完成。</p><h3 id="安卓客户端配置" tabindex="-1">安卓客户端配置 <a class="header-anchor" href="#安卓客户端配置" aria-label="Permalink to “安卓客户端配置”">​</a></h3><p>安卓设备上的OpenVPN配置和Unix系统上的十分类似，我们需要一个含有配置文件、密钥和证书的包。文件列表如下：</p><ul><li>配置文件 (扩展名 .ovpn),</li><li>ca.crt,</li><li>dh2048.pem,</li><li>client.crt,</li><li>client.key.</li></ul><p>客户端密钥生成方式和先前章节所述的一样。</p><p>配置文件内容如下</p><pre><code>client tls-client
dev tun
proto udp

# 远程 OpenVPN 服务器的 IP 和 端口号
remote 111.222.333.444 1194

resolv-retry infinite
nobind
ca ca.crt
cert client.crt
key client.key
dh dh2048.pem
persist-tun
persist-key

verb 3
mute 20
</code></pre><p>所有这些文件我们必须移动我们设备的SD卡上。</p>`,73)),t("p",null,[e[3]||(e[3]=n("然后，我们需要安装一个",-1)),o(p,{href:"https://play.google.com/store/apps/details?id=net.openvpn.openvpn"},{default:r(()=>[...e[2]||(e[2]=[n("OpenVPN Connect",-1)])]),_:1}),e[4]||(e[4]=n(" 应用。",-1))]),e[22]||(e[22]=i('<p>接下来，配置过程很是简单：</p><ul><li>打开 OpenVPN 并选择“Import”选项</li><li>选择“Import Profile from SD card”</li><li>在打开的窗口中导航到我们放置好文件的目录，并选择那个 .ovpn 文件</li><li>应用会要求我们创建一个新的配置文件</li><li>点击“Connect”按钮并稍等一下</li></ul><p>搞定。现在，我们的安卓设备已经通过安全的VPN连接连接到我们的专用网。</p><h3 id="尾声" tabindex="-1">尾声 <a class="header-anchor" href="#尾声" aria-label="Permalink to “尾声”">​</a></h3><p>虽然OpenVPN初始配置花费不少时间，但是简易的客户端配置为我们弥补了时间上的损失，也提供了从任何设备连接的能力。此外，OpenVPN提供了一个很高的安全等级，以及从不同地方连接的能力，包括位于NAT后面的客户端。因此，OpenVPN可以同时在家和企业中使用。</p><hr>',6)),t("p",null,[e[6]||(e[6]=n("via: ",-1)),o(p,{href:"http://linoxide.com/ubuntu-how-to/configure-openvpn-server-client-ubuntu-15-04/"},{default:r(()=>[...e[5]||(e[5]=[n("http://linoxide.com/ubuntu-how-to/configure-openvpn-server-client-ubuntu-15-04/",-1)])]),_:1})]),t("p",null,[e[10]||(e[10]=n("作者：",-1)),o(p,{href:"http://linoxide.com/author/ivanz/"},{default:r(()=>[...e[7]||(e[7]=[n("Ivan Zabrovskiy",-1)])]),_:1}),e[11]||(e[11]=n(" 译者：",-1)),o(p,{href:"https://github.com/GOLinux"},{default:r(()=>[...e[8]||(e[8]=[n("GOLinux",-1)])]),_:1}),e[12]||(e[12]=n(" 校对：",-1)),o(p,{href:"https://github.com/wxy"},{default:r(()=>[...e[9]||(e[9]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[15]||(e[15]=n("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[13]||(e[13]=[n("LCTT",-1)])]),_:1}),e[16]||(e[16]=n(" 原创翻译，",-1)),o(p,{href:"https://linux.cn/"},{default:r(()=>[...e[14]||(e[14]=[n("Linux中国",-1)])]),_:1}),e[17]||(e[17]=n(" 荣誉推出",-1))])])}const T=a(d,[["render",c]]);export{P as __pageData,T as default};
