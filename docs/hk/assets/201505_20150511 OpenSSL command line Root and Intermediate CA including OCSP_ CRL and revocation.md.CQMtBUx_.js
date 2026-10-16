import{_ as i,a0 as c,w as s,s as d,ao as p,I as o,x as n,a1 as a,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"建立你自己的 CA 服務：OpenSSL 命令列 CA 操作快速指南 | LCTT x X-CMD","titleTemplate":false,"description":"建立你自己的 CA 服務：OpenSSL 命令列 CA 操作快速指南 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"建立你自己的 CA 服務：OpenSSL 命令列 CA 操作快速指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"建立你自己的 CA 服務：OpenSSL 命令列 CA 操作快速指南 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150511 OpenSSL command line Root and Intermediate CA including OCSP, CRL and revocation","title":"建立你自己的 CA 服務：OpenSSL 命令列 CA 操作快速指南","tag":"201505","desc":""},"relativePath":"201505/20150511 OpenSSL command line Root and Intermediate CA including OCSP, CRL and revocation.md","filePath":"[post].md"}'),l={name:"201505/20150511 OpenSSL command line Root and Intermediate CA including OCSP, CRL and revocation.md"};function m(u,e,y,C,f,g){const t=c("Link");return s(),d("div",null,[e[11]||(e[11]=p(`<h1 id="建立你自己的-ca-服務-openssl-命令列-ca-操作快速指南" tabindex="-1">建立你自己的 CA 服務：OpenSSL 命令列 CA 操作快速指南 <a class="header-anchor" href="#建立你自己的-ca-服務-openssl-命令列-ca-操作快速指南" aria-label="Permalink to “建立你自己的 CA 服務：OpenSSL 命令列 CA 操作快速指南”">​</a></h1><p>這些是關於使用 OpenSSL 生成證書授權（CA）、中間證書授權和末端證書的速記隨筆，內容包括 OCSP、CRL 和 CA 頒發者信息，以及指定頒發和有效期限等。</p><p>我們將建立我們自己的根 CA，我們將使用根 CA 來生成一箇中間 CA 的例子，我們將使用中間 CA 來簽署末端用户證書。</p><h3 id="根-ca" tabindex="-1">根 CA <a class="header-anchor" href="#根-ca" aria-label="Permalink to “根 CA”">​</a></h3><p>創建根 CA 授權目錄並切換到該目錄：</p><pre><code>mkdir ~/SSLCA/root/
cd ~/SSLCA/root/
</code></pre><p>為我們的根 CA 生成一個8192位長的 SHA-256 RSA 密鑰：</p><pre><code>openssl genrsa -aes256 -out rootca.key 8192
</code></pre><p>樣例輸出：</p><pre><code>Generating RSA private key, 8192 bit long modulus
.........++
....................................................................................................................++
e is 65537 (0x10001)
</code></pre><p>如果你想要用密碼保護該密鑰，請添加 <code>-aes256</code> 選項。</p><p>創建自簽名根 CA 證書 <code>ca.crt</code>；你需要為你的根 CA 提供一個身份：</p><pre><code>openssl req -sha256 -new -x509 -days 1826 -key rootca.key -out rootca.crt
</code></pre><p>樣例輸出：</p><pre><code>You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [AU]:NL
State or Province Name (full name) [Some-State]:Zuid Holland
Locality Name (eg, city) []:Rotterdam
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Sparkling Network
Organizational Unit Name (eg, section) []:Sparkling CA
Common Name (e.g. server FQDN or YOUR name) []:Sparkling Root CA
Email Address []:
</code></pre><p>創建一個存儲 CA 序列的文件：</p><pre><code>touch certindex
echo 1000 &gt; certserial
echo 1000 &gt; crlnumber
</code></pre><p>放置 CA 配置文件，該文件持有 CRL 和 OCSP 末端的存根。</p><pre><code># vim ca.conf
[ ca ]
default_ca = myca

[ crl_ext ]
issuerAltName=issuer:copy 
authorityKeyIdentifier=keyid:always

 [ myca ]
 dir = ./
 new_certs_dir = $dir
 unique_subject = no
 certificate = $dir/rootca.crt
 database = $dir/certindex
 private_key = $dir/rootca.key
 serial = $dir/certserial
 default_days = 730
 default_md = sha1
 policy = myca_policy
 x509_extensions = myca_extensions
 crlnumber = $dir/crlnumber
 default_crl_days = 730

 [ myca_policy ]
 commonName = supplied
 stateOrProvinceName = supplied
 countryName = optional
 emailAddress = optional
 organizationName = supplied
 organizationalUnitName = optional

 [ myca_extensions ]
 basicConstraints = critical,CA:TRUE
 keyUsage = critical,any
 subjectKeyIdentifier = hash
 authorityKeyIdentifier = keyid:always,issuer
 keyUsage = digitalSignature,keyEncipherment,cRLSign,keyCertSign
 extendedKeyUsage = serverAuth
 crlDistributionPoints = @crl_section
 subjectAltName  = @alt_names
 authorityInfoAccess = @ocsp_section

 [ v3_ca ]
 basicConstraints = critical,CA:TRUE,pathlen:0
 keyUsage = critical,any
 subjectKeyIdentifier = hash
 authorityKeyIdentifier = keyid:always,issuer
 keyUsage = digitalSignature,keyEncipherment,cRLSign,keyCertSign
 extendedKeyUsage = serverAuth
 crlDistributionPoints = @crl_section
 subjectAltName  = @alt_names
 authorityInfoAccess = @ocsp_section

 [alt_names]
 DNS.0 = Sparkling Intermidiate CA 1
 DNS.1 = Sparkling CA Intermidiate 1

 [crl_section]
 URI.0 = http://pki.sparklingca.com/SparklingRoot.crl
 URI.1 = http://pki.backup.com/SparklingRoot.crl

 [ocsp_section]
 caIssuers;URI.0 = http://pki.sparklingca.com/SparklingRoot.crt
 caIssuers;URI.1 = http://pki.backup.com/SparklingRoot.crt
 OCSP;URI.0 = http://pki.sparklingca.com/ocsp/
 OCSP;URI.1 = http://pki.backup.com/ocsp/
</code></pre><p>如果你需要設置某個特定的證書生效/過期日期，請添加以下內容到<code>[myca]</code>：</p><pre><code># format: YYYYMMDDHHMMSS
default_enddate = 20191222035911
default_startdate = 20181222035911
</code></pre><h3 id="創建中間-ca" tabindex="-1">創建中間 CA### <a class="header-anchor" href="#創建中間-ca" aria-label="Permalink to “創建中間 CA###”">​</a></h3><p>生成中間 CA （名為 intermediate1）的私鑰：</p><pre><code>openssl genrsa -out intermediate1.key 4096
</code></pre><p>生成中間 CA 的 CSR：</p><pre><code>openssl req -new -sha256 -key intermediate1.key -out intermediate1.csr
</code></pre><p>樣例輸出：</p><pre><code>You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [AU]:NL
State or Province Name (full name) [Some-State]:Zuid Holland
Locality Name (eg, city) []:Rotterdam
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Sparkling Network
Organizational Unit Name (eg, section) []:Sparkling CA
Common Name (e.g. server FQDN or YOUR name) []:Sparkling Intermediate CA
Email Address []:

Please enter the following &#39;extra&#39; attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
</code></pre><p>確保中間 CA 的主體（CN）和根 CA 不同。</p><p>用根 CA 簽署 中間 CA 的 CSR：</p><pre><code>openssl ca -batch -config ca.conf -notext -in intermediate1.csr -out intermediate1.crt
</code></pre><p>樣例輸出：</p><pre><code>Using configuration from ca.conf
Check that the request matches the signature
Signature ok
The Subject&#39;s Distinguished Name is as follows
countryName           :PRINTABLE:&#39;NL&#39;
stateOrProvinceName   :ASN.1 12:&#39;Zuid Holland&#39;
localityName          :ASN.1 12:&#39;Rotterdam&#39;
organizationName      :ASN.1 12:&#39;Sparkling Network&#39;
organizationalUnitName:ASN.1 12:&#39;Sparkling CA&#39;
commonName            :ASN.1 12:&#39;Sparkling Intermediate CA&#39;
Certificate is to be certified until Mar 30 15:07:43 2017 GMT (730 days)

Write out database with 1 new entries
Data Base Updated
</code></pre><p>生成 CRL（同時採用 PEM 和 DER 格式）：</p><pre><code>openssl ca -config ca.conf -gencrl -keyfile rootca.key -cert rootca.crt -out rootca.crl.pem

openssl crl -inform PEM -in rootca.crl.pem -outform DER -out rootca.crl
</code></pre><p>每次使用該 CA 簽署證書後，請生成 CRL。</p><p>如果你需要撤銷該中間證書：</p><pre><code>openssl ca -config ca.conf -revoke intermediate1.crt -keyfile rootca.key -cert rootca.crt
</code></pre><h3 id="配置中間-ca" tabindex="-1">配置中間 CA <a class="header-anchor" href="#配置中間-ca" aria-label="Permalink to “配置中間 CA”">​</a></h3><p>為該中間 CA 創建一個新文件夾，然後進入該文件夾：</p><pre><code>mkdir ~/SSLCA/intermediate1/
cd ~/SSLCA/intermediate1/
</code></pre><p>從根 CA 拷貝中間證書和密鑰：</p><pre><code>cp ~/SSLCA/root/intermediate1.key ./
cp ~/SSLCA/root/intermediate1.crt ./
</code></pre><p>創建索引文件：</p><pre><code>touch certindex
echo 1000 &gt; certserial
echo 1000 &gt; crlnumber
</code></pre><p>創建一個新的 <code>ca.conf</code> 文件：</p><pre><code># vim ca.conf
[ ca ]
default_ca = myca

[ crl_ext ]
issuerAltName=issuer:copy 
authorityKeyIdentifier=keyid:always

 [ myca ]
 dir = ./
 new_certs_dir = $dir
 unique_subject = no
 certificate = $dir/intermediate1.crt
 database = $dir/certindex
 private_key = $dir/intermediate1.key
 serial = $dir/certserial
 default_days = 365
 default_md = sha1
 policy = myca_policy
 x509_extensions = myca_extensions
 crlnumber = $dir/crlnumber
 default_crl_days = 365

 [ myca_policy ]
 commonName = supplied
 stateOrProvinceName = supplied
 countryName = optional
 emailAddress = optional
 organizationName = supplied
 organizationalUnitName = optional

 [ myca_extensions ]
 basicConstraints = critical,CA:FALSE
 keyUsage = critical,any
 subjectKeyIdentifier = hash
 authorityKeyIdentifier = keyid:always,issuer
 keyUsage = digitalSignature,keyEncipherment
 extendedKeyUsage = serverAuth
 crlDistributionPoints = @crl_section
 subjectAltName  = @alt_names
 authorityInfoAccess = @ocsp_section

 [alt_names]
 DNS.0 = example.com
 DNS.1 = example.org

 [crl_section]
 URI.0 = http://pki.sparklingca.com/SparklingIntermidiate1.crl
 URI.1 = http://pki.backup.com/SparklingIntermidiate1.crl

 [ocsp_section]
 caIssuers;URI.0 = http://pki.sparklingca.com/SparklingIntermediate1.crt
 caIssuers;URI.1 = http://pki.backup.com/SparklingIntermediate1.crt
 OCSP;URI.0 = http://pki.sparklingca.com/ocsp/
 OCSP;URI.1 = http://pki.backup.com/ocsp/
</code></pre><p>修改 <code>[alt_names]</code> 部分，添加你需要的主體備選名。如果你不需要主體備選名，請移除該部分包括<code>subjectAltName = @alt_names</code>的行。</p><p>如果你需要設置一個指定的生效/到期日期，請添加以下內容到 <code>[myca]</code>：</p><pre><code># format: YYYYMMDDHHMMSS
default_enddate = 20191222035911
default_startdate = 20181222035911
</code></pre><p>生成一個空白 CRL（同時以 PEM 和 DER 格式）：</p><pre><code>openssl ca -config ca.conf -gencrl -keyfile rootca.key -cert rootca.crt -out rootca.crl.pem

openssl crl -inform PEM -in rootca.crl.pem -outform DER -out rootca.crl
</code></pre><h3 id="生成末端用户證書" tabindex="-1">生成末端用户證書 <a class="header-anchor" href="#生成末端用户證書" aria-label="Permalink to “生成末端用户證書”">​</a></h3><p>我們使用這個新的中間 CA 來生成一個末端用户證書，請重複以下操作來使用該 CA 為每個用户簽署。</p><pre><code>mkdir enduser-certs
</code></pre><p>生成末端用户的私鑰：</p><pre><code>openssl genrsa -out enduser-certs/enduser-example.com.key 4096
</code></pre><p>生成末端用户的 CSR：</p><pre><code>openssl req -new -sha256 -key enduser-certs/enduser-example.com.key -out enduser-certs/enduser-example.com.csr
</code></pre><p>樣例輸出：</p><pre><code>You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [AU]:NL
State or Province Name (full name) [Some-State]:Noord Holland
Locality Name (eg, city) []:Amsterdam
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Example Inc
Organizational Unit Name (eg, section) []:IT Dept
Common Name (e.g. server FQDN or YOUR name) []:example.com
Email Address []:

Please enter the following &#39;extra&#39; attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
</code></pre><p>使用中間 CA 簽署末端用户的 CSR：</p><pre><code>openssl ca -batch -config ca.conf -notext -in enduser-certs/enduser-example.com.csr -out enduser-certs/enduser-example.com.crt
</code></pre><p>樣例輸出：</p><pre><code>Using configuration from ca.conf
Check that the request matches the signature
Signature ok
The Subject&#39;s Distinguished Name is as follows
countryName           :PRINTABLE:&#39;NL&#39;
stateOrProvinceName   :ASN.1 12:&#39;Noord Holland&#39;
localityName          :ASN.1 12:&#39;Amsterdam&#39;
organizationName      :ASN.1 12:&#39;Example Inc&#39;
organizationalUnitName:ASN.1 12:&#39;IT Dept&#39;
commonName            :ASN.1 12:&#39;example.com&#39;
Certificate is to be certified until Mar 30 15:18:26 2016 GMT (365 days)

Write out database with 1 new entries
Data Base Updated
</code></pre><p>生成 CRL（同時以 PEM 和 DER 格式）：</p><pre><code>openssl ca -config ca.conf -gencrl -keyfile intermediate1.key -cert intermediate1.crt -out intermediate1.crl.pem

openssl crl -inform PEM -in intermediate1.crl.pem -outform DER -out intermediate1.crl
</code></pre><p>每次你使用該 CA 簽署證書後，都需要生成 CRL。</p><p>如果你需要撤銷該末端用户證書：</p><pre><code>openssl ca -config ca.conf -revoke enduser-certs/enduser-example.com.crt -keyfile intermediate1.key -cert intermediate1.crt
</code></pre><p>樣例輸出：</p><pre><code>Using configuration from ca.conf
Revoking Certificate 1000.
Data Base Updated
</code></pre><p>通過連接根證書和中間證書來創建證書鏈文件。</p><pre><code>cat ../root/rootca.crt intermediate1.crt &gt; enduser-certs/enduser-example.com.chain
</code></pre><p>發送以下文件給末端用户：</p><pre><code>enduser-example.com.crt
enduser-example.com.key
enduser-example.com.chain
</code></pre><p>你也可以讓末端用户提供他們自己的 CSR，而只發送給他們這個 .crt 文件。不要把它從服務器刪除，否則你就不能撤銷了。</p><h3 id="校驗證書" tabindex="-1">校驗證書 <a class="header-anchor" href="#校驗證書" aria-label="Permalink to “校驗證書”">​</a></h3><p>你可以對證書鏈使用以下命令來驗證末端用户證書：</p><pre><code>openssl verify -CAfile enduser-certs/enduser-example.com.chain enduser-certs/enduser-example.com.crt 
enduser-certs/enduser-example.com.crt: OK
</code></pre><p>你也可以針對 CRL 來驗證。首先，將 PEM 格式的 CRL 和證書鏈相連接：</p><pre><code>cat ../root/rootca.crt intermediate1.crt intermediate1.crl.pem &gt; enduser-certs/enduser-example.com.crl.chain
</code></pre><p>驗證證書：</p><pre><code>openssl verify -crl_check -CAfile enduser-certs/enduser-example.com.crl.chain enduser-certs/enduser-example.com.crt
</code></pre><p>沒有撤銷時的輸出：</p><pre><code>enduser-certs/enduser-example.com.crt: OK
</code></pre><p>撤銷後的輸出如下：</p><pre><code>enduser-certs/enduser-example.com.crt: CN = example.com, ST = Noord Holland, C = NL, O = Example Inc, OU = IT Dept
error 23 at 0 depth lookup:certificate revoked
</code></pre><hr>`,89)),o("p",null,[e[1]||(e[1]=n("via: ",-1)),a(t,{href:"https://raymii.org/s/tutorials/OpenSSL_command_line_Root_and_Intermediate_CA_including_OCSP_CRL%20and_revocation.html"},{default:r(()=>[...e[0]||(e[0]=[n("https://raymii.org/s/tutorials/OpenSSL_command_line_Root_and_Intermediate_CA_including_OCSP_CRL and_revocation.html",-1)])]),_:1})]),o("p",null,[e[4]||(e[4]=n("作者：Remy van Elst 譯者：",-1)),a(t,{href:"https://github.com/GOLinux"},{default:r(()=>[...e[2]||(e[2]=[n("GOLinux",-1)])]),_:1}),e[5]||(e[5]=n(" 校對：",-1)),a(t,{href:"https://github.com/wxy"},{default:r(()=>[...e[3]||(e[3]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[8]||(e[8]=n("本文由 ",-1)),a(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[n("LCTT",-1)])]),_:1}),e[9]||(e[9]=n(" 原創翻譯，",-1)),a(t,{href:"https://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[n("Linux中國",-1)])]),_:1}),e[10]||(e[10]=n(" 榮譽推出",-1))])])}const A=i(l,[["render",m]]);export{k as __pageData,A as default};
