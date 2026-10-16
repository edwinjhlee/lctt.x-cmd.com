import{_ as r,a0 as a,w as u,s as d,ao as l,I as t,a1 as o,A as i,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse(`{"title":"在Debian 7/Ubuntu 13.10 上使用隧道封裝SSH連接 | LCTT x X-CMD","titleTemplate":false,"description":"在Debian 7/Ubuntu 13.10 上使用隧道封裝SSH連接 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Debian 7/Ubuntu 13.10 上使用隧道封裝SSH連接 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Debian 7/Ubuntu 13.10 上使用隧道封裝SSH連接 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/Tunnel SSH Connections Over SSL Using 'Stunnel' On Debian 7  Ubuntu 13.10","title":"在Debian 7/Ubuntu 13.10 上使用隧道封裝SSH連接","tag":"201401","desc":""},"relativePath":"201401/Tunnel SSH Connections Over SSL Using 'Stunnel' On Debian 7  Ubuntu 13.10.md","filePath":"[post].md"}`),p={name:"201401/Tunnel SSH Connections Over SSL Using 'Stunnel' On Debian 7  Ubuntu 13.10.md"};function c(g,e,b,S,h,m){const s=a("Link");return u(),d("div",null,[e[12]||(e[12]=l(`<h1 id="在debian-7-ubuntu-13-10-上使用隧道封裝ssh連接" tabindex="-1">在Debian 7/Ubuntu 13.10 上使用隧道封裝SSH連接 <a class="header-anchor" href="#在debian-7-ubuntu-13-10-上使用隧道封裝ssh連接" aria-label="Permalink to “在Debian 7/Ubuntu 13.10 上使用隧道封裝SSH連接”">​</a></h1><p><strong>隧道</strong> 被設計用於遠端客户端和本地(可通過inetd啓動)或遠端服務器間的SSL加密封裝。它可以用於為inetd進程增加SSL功能，像POP2（譯註：厄，POP2這個服務還有人用麼？），POP3和IMAP服務而不必改變程序代碼。隧道使用OpenSSL庫用於加密，因此它支持任何被編譯進庫的加密算法。簡而言之，隧道可以使任何一個不安全的端口變得安全加密。</p><p>在本篇中，我會描述如何通過SSL水稻封裝SSH。這個步驟非常簡單。你需要在你的客户端PC和遠程PC都已經安裝運行了sshd。</p><p>我正在使用下面提到的兩個系統。</p><p>遠程系統:</p><pre><code>操作系統: Debian 7
IP 地址: 192.168.1.200/24
</code></pre><p>客户端(本地) 系統:</p><pre><code>操作系統: Ubuntu 13.04 desktop
IP 地址: 192.168.1.100/24
</code></pre><h4 id="配置遠程系統" tabindex="-1">配置遠程系統 <a class="header-anchor" href="#配置遠程系統" aria-label="Permalink to “配置遠程系統”">​</a></h4><p>讓我們在遠程Debian 7服務器上安裝stunnel包。</p><pre><code># apt-get install stunnel4
</code></pre><p>現在讓我們像下面那樣創建一個SSL證書。</p><pre><code># openssl genrsa 1024 &gt; stunnel.key
</code></pre><p>示例輸出:</p><pre><code>Generating RSA private key, 1024 bit long modulus
............................................++++++
...................++++++
e is 65537 (0x10001)

# openssl req -new -key stunnel.key -x509 -days 1000 -out stunnel.crt
</code></pre><p>你會被詢問若干個問題如國家、州、公司細節等。</p><pre><code>You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [AU]:IN
State or Province Name (full name) [Some-State]:Tamilnadu
Locality Name (eg, city) []:Erode
Organization Name (eg, company) [Internet Widgits Pty Ltd]:unixmen
Organizational Unit Name (eg, section) []:Technical
Common Name (e.g. server FQDN or YOUR name) []:server.unixmen.com
Email Address []:sk@unixmen.com

# cat stunnel.crt stunnel.key &gt; stunnel.pem
# mv stunnel.pem /etc/stunnel/
</code></pre><p>現在我們需要配置stunnel來將 <strong>443(https)</strong>隧道到<strong>22(ssh)</strong>。這可以通過在<strong>/etc/stunnel/</strong>目錄下創建<strong>stunnel.conf</strong>文件來實現：</p><pre><code> # vi /etc/stunnel/stunnel.conf
</code></pre><p>並加入下面的行:</p><pre><code>pid = /var/run/stunnel.pid
cert = /etc/stunnel/stunnel.pem
[ssh]
accept = 192.168.1.200:443
connect = 127.0.0.1:22
</code></pre><p>上面的幾行説明了stunnel在哪裏尋找證書文件和哪裏接收和轉發ssh鏈接。在本例中，stunnel會接收來自443端口的流量並會轉發給22端口。</p><p>保存並關閉文件。</p><p>現在讓我們啓用stunnel服務。要這麼做，編輯文件 <strong>/etc/default/stunnel4</strong>:</p><pre><code># vi /etc/default/stunnel4
</code></pre><p>改變行從 <strong>ENABLED = 0</strong> 到 <strong>1</strong>。</p><pre><code># /etc/default/stunnel
# Julien LEMOINE &lt;speedblue@debian.org&gt;
# September 2003

# Change to one to enable stunnel automatic startup
ENABLED=1
FILES=&quot;/etc/stunnel/*.conf&quot;
OPTIONS=&quot;&quot;

# Change to one to enable ppp restart scripts
PPP_RESTART=0
</code></pre><p>接着使用命令啓用stunnel服務:</p><pre><code># service stunnel4 start
</code></pre><h4 id="配置本地系統" tabindex="-1">配置本地系統 <a class="header-anchor" href="#配置本地系統" aria-label="Permalink to “配置本地系統”">​</a></h4><p>用這個命令安裝stunnel:</p><pre><code>$ sudo apt-get install stunnel4
</code></pre><p>我們需要遠程系統上相同的證書文件(stunnel.pem)。複製遠程系統上的 <strong>stunnel.pem</strong>文件到我們本地系統中並在相同的位置保存(也就是 /etc/stunnel)。</p><p>在 <strong>/etc/stunnel/</strong>目錄下創建新的文件<strong>stunnel.conf</strong>：</p><pre><code>$ sudo vi /etc/stunnel/stunnel.conf
</code></pre><p>加入下面的行:</p><pre><code>pid = /var/run/stunnel.pid
cert = /etc/stunnel/stunnel.pem
client=yes
[ssh]
accept=443
connect=192.168.1.200:443
</code></pre><p>保存並關閉文件。這裏的192.168.1.200是我們的遠程系統IP。</p><p>現在讓我們啓用stunnel服務。要這麼做，編輯文件<strong>/etc/default/stunnel4</strong>:</p><pre><code>$ sudo vi /etc/default/stunnel4
</code></pre><p>改變行從 <strong>ENABLED = 0</strong> 到 <strong>1</strong>.</p><pre><code># /etc/default/stunnel
# Julien LEMOINE &lt;speedblue@debian.org&gt;
# September 2003

# Change to one to enable stunnel automatic startup
ENABLED=1
FILES=&quot;/etc/stunnel/*.conf&quot;
OPTIONS=&quot;&quot;

# Change to one to enable ppp restart scripts
PPP_RESTART=0
</code></pre><p>接着使用命令啓用stunnel服務:</p><pre><code>$ sudo service stunnel4 start
</code></pre><h4 id="測試ssh連接" tabindex="-1">測試SSH連接 <a class="header-anchor" href="#測試ssh連接" aria-label="Permalink to “測試SSH連接”">​</a></h4><p>現在這樣已經很好了，你可以使用命令連接到你的遠程機器上了：</p><pre><code>$ ssh sk@localhost -v -p 443
</code></pre><p>示例輸出:</p><pre><code>OpenSSH_6.1p1 Debian-4, OpenSSL 1.0.1c 10 May 2012
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: Applying options for *
debug1: Connecting to localhost [127.0.0.1] port 443.
debug1: Connection established.
debug1: identity file /home/sk/.ssh/id_rsa type -1
debug1: identity file /home/sk/.ssh/id_rsa-cert type -1
debug1: identity file /home/sk/.ssh/id_dsa type -1
debug1: identity file /home/sk/.ssh/id_dsa-cert type -1
debug1: identity file /home/sk/.ssh/id_ecdsa type -1
debug1: identity file /home/sk/.ssh/id_ecdsa-cert type -1
debug1: Remote protocol version 2.0, remote software version OpenSSH_6.0p1 Debian-4
debug1: match: OpenSSH_6.0p1 Debian-4 pat OpenSSH*
debug1: Enabling compatibility mode for protocol 2.0
debug1: Local version string SSH-2.0-OpenSSH_6.1p1 Debian-4
debug1: SSH2_MSG_KEXINIT sent
debug1: SSH2_MSG_KEXINIT received
debug1: kex: server-&gt;client aes128-ctr hmac-md5 none
debug1: kex: client-&gt;server aes128-ctr hmac-md5 none
debug1: sending SSH2_MSG_KEX_ECDH_INIT
debug1: expecting SSH2_MSG_KEX_ECDH_REPLY
debug1: Server host key: ECDSA 78:05:ba:1b:73:02:75:86:10:33:8c:0f:21:61:d4:de
debug1: Host &#39;[localhost]:443&#39; is known and matches the ECDSA host key.
debug1: Found key in /home/sk/.ssh/known_hosts:12
debug1: ssh_ecdsa_verify: signature correct
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug1: SSH2_MSG_NEWKEYS received
debug1: Roaming not allowed by server
debug1: SSH2_MSG_SERVICE_REQUEST sent
debug1: SSH2_MSG_SERVICE_ACCEPT received
debug1: Authentications that can continue: publickey,password
debug1: Next authentication method: publickey
debug1: Trying private key: /home/sk/.ssh/id_rsa
debug1: Trying private key: /home/sk/.ssh/id_dsa
debug1: Trying private key: /home/sk/.ssh/id_ecdsa
debug1: Next authentication method: password
sk@localhost&#39;s password: #   ## Enter your remote system user password
debug1: Authentication succeeded (password).
Authenticated to localhost ([127.0.0.1]:443).
debug1: channel 0: new [client-session]
debug1: Requesting no-more-sessions@openssh.com
debug1: Entering interactive session.
debug1: Sending environment.
debug1: Sending env LC_PAPER = en_IN.UTF-8
debug1: Sending env LC_ADDRESS = en_IN.UTF-8
debug1: Sending env LC_MONETARY = en_IN.UTF-8
debug1: Sending env LC_NUMERIC = en_IN.UTF-8
debug1: Sending env LC_TELEPHONE = en_IN.UTF-8
debug1: Sending env LC_IDENTIFICATION = en_IN.UTF-8
debug1: Sending env LANG = en_US.UTF-8
debug1: Sending env LC_MEASUREMENT = en_IN.UTF-8
debug1: Sending env LC_TIME = en_IN.UTF-8
debug1: Sending env LC_NAME = en_IN.UTF-8
Linux server 3.2.0-4-486 #1 Debian 3.2.51-1 i686

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
You have new mail.
Last login: Mon Dec 30 15:12:22 2013 from localhost
sk@server:~$
</code></pre><p>或者你可以簡單地使用下面的命令:</p><pre><code>$ ssh -p 443 sk@localhost
</code></pre><p>示例輸出:</p><pre><code>sk@localhost&#39;s password: 
Linux server 3.2.0-4-486 #1 Debian 3.2.51-1 i686

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
You have new mail.
Last login: Mon Dec 30 15:22:08 2013 from localhost
sk@server:~$
</code></pre><p>現在你可以用ssh連接到你的遠程機器上了，但是所有的流量通過SSL隧道。</p><p>你已經完成了！即使ssh的默認端口被防火牆阻止了，你仍然可以使用SSH到你的遠程系統。</p><p>參考鏈接:</p>`,56)),t("ul",null,[t("li",null,[t("strong",null,[o(s,{href:"https://www.stunnel.org/index.html"},{default:i(()=>[...e[0]||(e[0]=[n("stunnel 主頁",-1)])]),_:1})])])]),e[13]||(e[13]=t("hr",null,null,-1)),t("p",null,[e[2]||(e[2]=n("via: ",-1)),o(s,{href:"http://www.unixmen.com/tunnel-ssh-connections-ssl-using-stunnel-debian-7-ubuntu-13-10/"},{default:i(()=>[...e[1]||(e[1]=[n("http://www.unixmen.com/tunnel-ssh-connections-ssl-using-stunnel-debian-7-ubuntu-13-10/",-1)])]),_:1})]),t("p",null,[e[5]||(e[5]=n("譯者：",-1)),o(s,{href:"https://github.com/geekpi"},{default:i(()=>[...e[3]||(e[3]=[n("geekpi",-1)])]),_:1}),e[6]||(e[6]=n(" 校對：",-1)),o(s,{href:"https://github.com/wxy"},{default:i(()=>[...e[4]||(e[4]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[9]||(e[9]=n("本文由 ",-1)),o(s,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[7]||(e[7]=[n("LCTT",-1)])]),_:1}),e[10]||(e[10]=n(" 原創翻譯，",-1)),o(s,{href:"http://linux.cn/"},{default:i(()=>[...e[8]||(e[8]=[n("Linux中國",-1)])]),_:1}),e[11]||(e[11]=n(" 榮譽推出",-1))])])}const E=r(p,[["render",c]]);export{T as __pageData,E as default};
