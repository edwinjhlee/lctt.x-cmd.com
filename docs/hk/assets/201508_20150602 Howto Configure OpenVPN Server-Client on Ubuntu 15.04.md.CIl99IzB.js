import{_ as a,a0 as s,w as l,s as u,I as t,x as n,a1 as o,A as r,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"在 Ubuntu 15.04 上配置 OpenVPN 服務器和客户端 | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 15.04 上配置 OpenVPN 服務器和客户端 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 15.04 上配置 OpenVPN 服務器和客户端 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 15.04 上配置 OpenVPN 服務器和客户端 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150602 Howto Configure OpenVPN Server-Client on Ubuntu 15.04","title":"在 Ubuntu 15.04 上配置 OpenVPN 服務器和客户端","tag":"201508","desc":""},"relativePath":"201508/20150602 Howto Configure OpenVPN Server-Client on Ubuntu 15.04.md","filePath":"[post].md"}'),d={name:"201508/20150602 Howto Configure OpenVPN Server-Client on Ubuntu 15.04.md"};function c(m,e,v,N,y,f){const p=s("Link");return l(),u("div",null,[e[18]||(e[18]=t("h1",{id:"在-ubuntu-15-04-上配置-openvpn-服務器和客户端",tabindex:"-1"},[n("在 Ubuntu 15.04 上配置 OpenVPN 服務器和客户端 "),t("a",{class:"header-anchor",href:"#在-ubuntu-15-04-上配置-openvpn-服務器和客户端","aria-label":"Permalink to “在 Ubuntu 15.04 上配置 OpenVPN 服務器和客户端”"},"​")],-1)),e[19]||(e[19]=t("p",null,"虛擬專用網（VPN）常指幾種通過其它網絡建立連接技術。它之所以被稱為“虛擬”，是因為各個節點間的連接不是通過物理線路實現的，而“專用”是指如果沒有網絡所有者的正確授權是不能被公開訪問到。",-1)),e[20]||(e[20]=t("p",null,[t("img",{src:"http://blog.linoxide.com/wp-content/uploads/2015/05/vpn_custom_illustration.jpg",alt:""})],-1)),t("p",null,[o(p,{href:"https://openvpn.net/"},{default:r(()=>[...e[0]||(e[0]=[n("OpenVPN",-1)])]),_:1}),e[1]||(e[1]=n("軟件藉助TUN/TAP驅動使用TCP和UDP協議來傳輸數據。UDP協議和TUN驅動允許NAT後的用户建立到OpenVPN服務器的連接。此外，OpenVPN允許指定自定義端口。它提供了更多的靈活配置，可以幫助你避免防火牆限制。",-1))]),e[21]||(e[21]=i(`<p>OpenVPN中，由OpenSSL庫和傳輸層安全協議（TLS）提供了安全和加密。TLS是SSL協議的一個改進版本。</p><p>OpenSSL提供了兩種加密方法：對稱和非對稱。下面，我們展示瞭如何配置OpenVPN的服務器端，以及如何配置使用帶有公共密鑰基礎結構（PKI）的非對稱加密和TLS協議。</p><h3 id="服務器端配置" tabindex="-1">服務器端配置 <a class="header-anchor" href="#服務器端配置" aria-label="Permalink to “服務器端配置”">​</a></h3><p>首先，我們必須安裝OpenVPN軟件。在Ubuntu 15.04和其它帶有‘apt’包管理器的Unix系統中，可以通過如下命令安裝：</p><pre><code>sudo apt-get install openvpn
</code></pre><p>然後，我們必須配置一個密鑰對，這可以通過默認的“openssl”工具完成。但是，這種方式十分難。這也是我們使用“easy-rsa”來實現此目的的原因。接下來的命令會將“easy-rsa”安裝到系統中。</p><pre><code>sudo apt-get unstall easy-rsa
</code></pre><p><strong>注意</strong>： 所有接下來的命令要以超級用户權限執行，如在使用<code>sudo -i</code>命令後執行，或者你可以使用<code>sudo -E</code>作為接下來所有命令的前綴。</p><p>開始之前，我們需要拷貝“easy-rsa”到openvpn文件夾。</p><pre><code>mkdir /etc/openvpn/easy-rsa
cp -r /usr/share/easy-rsa /etc/openvpn/easy-rsa
mv /etc/openvpn/easy-rsa/easy-rsa /etc/openvpn/easy-rsa/2.0
</code></pre><p>然後進入到該目錄</p><pre><code>cd /etc/openvpn/easy-rsa/2.0
</code></pre><p>這裏，我們開始密鑰生成進程。</p><p>首先，我們編輯一個“vars”文件。為了簡化生成過程，我們需要在裏面指定數據。這裏是“vars”文件的一個樣例：</p><pre><code>export KEY_COUNTRY=&quot;CN&quot;
export KEY_PROVINCE=&quot;BJ&quot;
export KEY_CITY=&quot;Beijing&quot;
export KEY_ORG=&quot;Linux.CN&quot;
export KEY_EMAIL=&quot;open@vpn.linux.cn&quot;
export KEY_OU=server
</code></pre><p>希望這些字段名稱對你而言已經很清楚，不需要進一步説明了。</p><p>其次，我們需要拷貝openssl配置。另外一個版本已經有現成的配置文件，如果你沒有特定要求，你可以使用它的上一個版本。這裏是1.0.0版本。</p><pre><code>cp openssl-1.0.0.cnf openssl.cnf
</code></pre><p>第三，我們需要加載環境變量，這些變量已經在前面一步中編輯好了。</p><pre><code>source ./vars
</code></pre><p>生成密鑰的最後一步準備工作是清空舊的證書和密鑰，以及生成新密鑰的序列號和索引文件。可以通過以下命令完成。</p><pre><code>./clean-all
</code></pre><p>現在，我們完成了準備工作，準備好啓動生成進程了。讓我們先來生成證書。</p><pre><code>./build-ca
</code></pre><p>在對話中，我們可以看到默認的變量，這些變量是我們先前在“vars”中指定的。我們可以檢查一下，如有必要進行編輯，然後按回車幾次。對話如下</p><pre><code>Generating a 2048 bit RSA private key
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
</code></pre><p>接下來，我們需要生成一個服務器密鑰</p><pre><code>./build-key-server server
</code></pre><p>該命令的對話如下：</p><pre><code>Generating a 2048 bit RSA private key
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
</code></pre><p>這裏，最後兩個關於“簽署證書”和“提交”的問題，我們必須回答“yes”。</p><p>現在，我們已經有了證書和服務器密鑰。下一步，就是去省城Diffie-Hellman密鑰。執行以下命令，耐心等待。在接下來的幾分鐘內，我們將看到許多點和加號。</p><pre><code>./build-dh
</code></pre><p>該命令的輸出樣例如下</p><pre><code>Generating DH parameters, 2048 bit long safe prime, generator 2
This is going to take a long time
................................+................&lt;許多的點&gt;
</code></pre><p>在漫長的等待之後，我們可以繼續生成最後的密鑰了，該密鑰用於TLS驗證。命令如下：</p><pre><code>openvpn --genkey --secret keys/ta.key
</code></pre><p>現在，生成完畢，我們可以移動所有生成的文件到最後的位置中。</p><pre><code>cp -r /etc/openvpn/easy-rsa/2.0/keys/ /etc/openvpn/
</code></pre><p>最後，我們來創建OpenVPN配置文件。讓我們從樣例中拷貝過來吧：</p><pre><code>cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz /etc/openvpn/
cd /etc/openvpn
gunzip -d /etc/openvpn/server.conf.gz
</code></pre><p>然後編輯</p><pre><code>vim /etc/openvpn/server.conf
</code></pre><p>我們需要指定密鑰的自定義路徑</p><pre><code>ca /etc/openvpn/keys/ca.crt
cert /etc/openvpn/keys/server.crt
key /etc/openvpn/keys/server.key # This file should be kept secret
dh /etc/openvpn/keys/dh2048.pem
</code></pre><p>一切就緒。在重啓OpenVPN後，服務器端配置就完成了。</p><pre><code>service openvpn restart
</code></pre><h3 id="unix的客户端配置" tabindex="-1">Unix的客户端配置 <a class="header-anchor" href="#unix的客户端配置" aria-label="Permalink to “Unix的客户端配置”">​</a></h3><p>假定我們有一台裝有類Unix操作系統的設備，比如Ubuntu 15.04，並安裝有OpenVPN。我們想要連接到前面建立的OpenVPN服務器。首先，我們需要為客户端生成密鑰。為了生成該密鑰，請轉到服務器上的對應目錄中：</p><pre><code>cd /etc/openvpn/easy-rsa/2.0
</code></pre><p>加載環境變量</p><pre><code>source vars
</code></pre><p>然後創建客户端密鑰</p><pre><code>./build-key client
</code></pre><p>我們將看到一個與先前關於服務器密鑰生成部分的章節描述一樣的對話，填入客户端的實際信息。</p><p>如果需要密碼保護密鑰，你需要運行另外一個命令，命令如下</p><pre><code>./build-key-pass client
</code></pre><p>在此種情況下，在建立VPN連接時，會提示你輸入密碼。</p><p>現在，我們需要將以下文件從服務器拷貝到客户端/etc/openvpn/keys/文件夾。</p><p>服務器文件列表：</p><ul><li>ca.crt,</li><li>dh2048.pem,</li><li>client.crt,</li><li>client.key,</li><li>ta.key.</li></ul><p>在此之後，我們轉到客户端，準備配置文件。配置文件位於/etc/openvpn/client.conf，內容如下</p><pre><code>dev tun
proto udp

# 遠程 OpenVPN 服務器的 IP 和 端口號
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
</code></pre><p>在此之後，我們需要重啓OpenVPN以接受新配置。</p><pre><code>service openvpn restart
</code></pre><p>好了，客户端配置完成。</p><h3 id="安卓客户端配置" tabindex="-1">安卓客户端配置 <a class="header-anchor" href="#安卓客户端配置" aria-label="Permalink to “安卓客户端配置”">​</a></h3><p>安卓設備上的OpenVPN配置和Unix系統上的十分類似，我們需要一個含有配置文件、密鑰和證書的包。文件列表如下：</p><ul><li>配置文件 (擴展名 .ovpn),</li><li>ca.crt,</li><li>dh2048.pem,</li><li>client.crt,</li><li>client.key.</li></ul><p>客户端密鑰生成方式和先前章節所述的一樣。</p><p>配置文件內容如下</p><pre><code>client tls-client
dev tun
proto udp

# 遠程 OpenVPN 服務器的 IP 和 端口號
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
</code></pre><p>所有這些文件我們必須移動我們設備的SD卡上。</p>`,73)),t("p",null,[e[3]||(e[3]=n("然後，我們需要安裝一個",-1)),o(p,{href:"https://play.google.com/store/apps/details?id=net.openvpn.openvpn"},{default:r(()=>[...e[2]||(e[2]=[n("OpenVPN Connect",-1)])]),_:1}),e[4]||(e[4]=n(" 應用。",-1))]),e[22]||(e[22]=i('<p>接下來，配置過程很是簡單：</p><ul><li>打開 OpenVPN 並選擇“Import”選項</li><li>選擇“Import Profile from SD card”</li><li>在打開的窗口中導航到我們放置好文件的目錄，並選擇那個 .ovpn 文件</li><li>應用會要求我們創建一個新的配置文件</li><li>點擊“Connect”按鈕並稍等一下</li></ul><p>搞定。現在，我們的安卓設備已經通過安全的VPN連接連接到我們的專用網。</p><h3 id="尾聲" tabindex="-1">尾聲 <a class="header-anchor" href="#尾聲" aria-label="Permalink to “尾聲”">​</a></h3><p>雖然OpenVPN初始配置花費不少時間，但是簡易的客户端配置為我們彌補了時間上的損失，也提供了從任何設備連接的能力。此外，OpenVPN提供了一個很高的安全等級，以及從不同地方連接的能力，包括位於NAT後面的客户端。因此，OpenVPN可以同時在家和企業中使用。</p><hr>',6)),t("p",null,[e[6]||(e[6]=n("via: ",-1)),o(p,{href:"http://linoxide.com/ubuntu-how-to/configure-openvpn-server-client-ubuntu-15-04/"},{default:r(()=>[...e[5]||(e[5]=[n("http://linoxide.com/ubuntu-how-to/configure-openvpn-server-client-ubuntu-15-04/",-1)])]),_:1})]),t("p",null,[e[10]||(e[10]=n("作者：",-1)),o(p,{href:"http://linoxide.com/author/ivanz/"},{default:r(()=>[...e[7]||(e[7]=[n("Ivan Zabrovskiy",-1)])]),_:1}),e[11]||(e[11]=n(" 譯者：",-1)),o(p,{href:"https://github.com/GOLinux"},{default:r(()=>[...e[8]||(e[8]=[n("GOLinux",-1)])]),_:1}),e[12]||(e[12]=n(" 校對：",-1)),o(p,{href:"https://github.com/wxy"},{default:r(()=>[...e[9]||(e[9]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[15]||(e[15]=n("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[13]||(e[13]=[n("LCTT",-1)])]),_:1}),e[16]||(e[16]=n(" 原創翻譯，",-1)),o(p,{href:"https://linux.cn/"},{default:r(()=>[...e[14]||(e[14]=[n("Linux中國",-1)])]),_:1}),e[17]||(e[17]=n(" 榮譽推出",-1))])])}const T=a(d,[["render",c]]);export{P as __pageData,T as default};
