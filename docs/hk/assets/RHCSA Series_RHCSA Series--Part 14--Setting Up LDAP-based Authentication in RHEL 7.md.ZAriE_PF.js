import{_ as r,a0 as l,w as s,s as i,ao as a,I as p,x as n,a1 as t,A as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"RHCSA 系列（十四）： 在 RHEL 7 中設置基於 LDAP 的認證 | LCTT x X-CMD","titleTemplate":false,"description":"RHCSA 系列（十四）： 在 RHEL 7 中設置基於 LDAP 的認證 | LCTT (RHCSA Series) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RHCSA 系列（十四）： 在 RHEL 7 中設置基於 LDAP 的認證 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RHCSA 系列（十四）： 在 RHEL 7 中設置基於 LDAP 的認證 | LCTT (RHCSA Series) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"RHCSA Series/RHCSA Series--Part 14--Setting Up LDAP-based Authentication in RHEL 7","title":"RHCSA 系列（十四）： 在 RHEL 7 中設置基於 LDAP 的認證","tag":"RHCSA Series","desc":""},"relativePath":"RHCSA Series/RHCSA Series--Part 14--Setting Up LDAP-based Authentication in RHEL 7.md","filePath":"[post].md"}'),c={name:"RHCSA Series/RHCSA Series--Part 14--Setting Up LDAP-based Authentication in RHEL 7.md"};function m(u,e,g,A,D,L){const o=l("Link");return s(),i("div",null,[e[22]||(e[22]=a(`<h1 id="rhcsa-系列-十四-在-rhel-7-中設置基於-ldap-的認證" tabindex="-1">RHCSA 系列（十四）： 在 RHEL 7 中設置基於 LDAP 的認證 <a class="header-anchor" href="#rhcsa-系列-十四-在-rhel-7-中設置基於-ldap-的認證" aria-label="Permalink to “RHCSA 系列（十四）： 在 RHEL 7 中設置基於 LDAP 的認證”">​</a></h1><p>在這篇文章中，我們將首先羅列一些 LDAP 的基礎知識（它是什麼，它被用於何處以及為什麼會被這樣使用），然後向你展示如何使用 RHEL 7 系統來設置一個 LDAP 服務器以及配置一個客户端來使用它達到認證的目的。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/setup-ldap-server-and-configure-client-authentication.png" alt="設置 LDAP 服務器及客户端認證"></p><p><em>RHCSA 系列：設置 LDAP 服務器及客户端認證 – Part 14</em></p><p>正如你將看到的那樣，關於認證，還存在其他可能的應用場景，但在這篇指南中，我們將只關注基於 LDAP 的認證。另外，請記住，由於這個話題的廣泛性，在這裏我們將只涵蓋它的基礎知識，但你可以參考位於總結部分中列出的文檔，以此來了解更加深入的細節。</p><p>基於相同的原因，你將注意到：為了簡潔起見，我已經決定省略了幾個位於 man 頁中 LDAP 工具的參考，但相應命令的解釋是近在咫尺的（例如，輸入 man ldapadd）。</p><p>那還是讓我們開始吧。</p><p><strong>我們的測試環境</strong></p><p>我們的測試環境包含兩台 RHEL 7機器：</p><pre><code>Server: 192.168.0.18. FQDN: rhel7.mydomain.com
Client: 192.168.0.20. FQDN: ldapclient.mydomain.com
</code></pre>`,10)),p("p",null,[e[1]||(e[1]=n("如若你想，你可以使用在 ",-1)),t(o,{href:"https://linux.cn/article-6335-1.html"},{default:d(()=>[...e[0]||(e[0]=[n("RHCSA 系列（十二）: 使用 Kickstart 完成 RHEL 7 的自動化安裝",-1)])]),_:1}),e[2]||(e[2]=n(" 中使用 Kickstart 安裝的機子來作為客户端。",-1))]),e[23]||(e[23]=a(`<h4 id="ldap-是什麼" tabindex="-1">LDAP 是什麼？ <a class="header-anchor" href="#ldap-是什麼" aria-label="Permalink to “LDAP 是什麼？”">​</a></h4><p>LDAP 代表輕量級目錄訪問協議（Lightweight Directory Access Protocol），並包含在一系列協議之中，這些協議允許一個客户端通過網絡去獲取集中存儲的信息（例如所登錄的 shell 的路徑，家目錄的絕對路徑，或者其他典型的系統用户信息），而這些信息可以從不同的地方訪問到或被很多終端用户獲取到（另一個例子是含有某個公司所有僱員的家庭地址和電話號碼的目錄）。</p><p>對於那些被賦予了權限可以使用這些信息的人來説，將這些信息進行集中管理意味着可以更容易地維護和獲取。</p><p>下面的圖表提供了一個簡化了的關於 LDAP 的示意圖，在下面將會進行更多的描述：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-Diagram.png" alt="LDAP 示意圖"></p><p><em>LDAP 示意圖</em></p><p>下面是對上面示意圖的一個詳細解釋。</p><ul><li>在一個 LDAP 目錄中，一個條目（entry）代表一個獨立單元或信息，被所謂的 Distinguished Name（DN，區別名） 唯一識別。</li><li>一個屬性（attribute）是一些與某個條目相關的信息（例如地址，有效的聯繫電話號碼和郵箱地址）。</li><li>每個屬性被分配有一個或多個值（value），這些值被包含在一個以空格為分隔符的列表中。每個條目中那個唯一的值被稱為一個 Relative Distinguished Name（RDN，相對區別名）。</li></ul><p>接下來，就讓我們進入到有關服務器和客户端安裝的內容。</p><h3 id="安裝和配置一個-ldap-服務器和客户端" tabindex="-1">安裝和配置一個 LDAP 服務器和客户端 <a class="header-anchor" href="#安裝和配置一個-ldap-服務器和客户端" aria-label="Permalink to “安裝和配置一個 LDAP 服務器和客户端”">​</a></h3><p>在 RHEL 7 中， LDAP 由 OpenLDAP 實現。為了安裝服務器和客户端，分別使用下面的命令：</p><pre><code># yum update &amp;&amp; yum install openldap openldap-clients openldap-servers
# yum update &amp;&amp; yum install openldap openldap-clients nss-pam-ldapd
</code></pre><p>一旦安裝完成，我們還需要關注一些事情。除非顯示地提示，下面的步驟都只在服務器上執行：</p><p><strong>1. 在服務器和客户端上，為了確保 SELinux 不會妨礙擋道，長久地開啓下列的布爾值：</strong></p><pre><code># setsebool -P allow_ypbind=0 authlogin_nsswitch_use_ldap=0
</code></pre><p>其中 <code>allow_ypbind</code> 為基於 LDAP 的認證所需要，而 <code>authlogin_nsswitch_use_ldap</code>則可能會被某些應用所需要。</p><p><strong>2. 開啓並啓動服務：</strong></p><pre><code># systemctl enable slapd.service
# systemctl start slapd.service
</code></pre>`,18)),p("p",null,[e[4]||(e[4]=n("記住你也可以使用 ",-1)),t(o,{href:"http://www.tecmint.com/manage-services-using-systemd-and-systemctl-in-linux/"},{default:d(()=>[...e[3]||(e[3]=[n("systemctl",-1)])]),_:1}),e[5]||(e[5]=n(" 來禁用，重啓或停止服務：",-1))]),e[24]||(e[24]=a(`<pre><code># systemctl disable slapd.service
# systemctl restart slapd.service
# systemctl stop slapd.service
</code></pre><p><strong>3. 由於 slapd 服務是由 ldap 用户來運行的（你可以使用 <code>ps -e -o pid,uname,comm | grep slapd</code> 來驗證），為了使得服務器能夠更改由管理工具創建的條目，該用户應該有目錄 <code>/var/lib/ldap</code> 的所有權，而這些管理工具僅可以由 root 用户來運行（緊接着有更多這方面的內容）。</strong></p><p>在遞歸地更改這個目錄的所有權之前，將 slapd 的示例資料庫配置文件複製進這個目錄：</p><pre><code># cp /usr/share/openldap-servers/DB_CONFIG.example /var/lib/ldap/DB_CONFIG
# chown -R ldap:ldap /var/lib/ldap
</code></pre><p><strong>4. 設置一個 OpenLDAP 管理用户並設置密碼：</strong></p><pre><code># slappasswd
</code></pre><p>正如下一幅圖所展示的那樣：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Set-LDAP-Admin-Password.png" alt="設置 LDAP 管理密碼"></p><p><em>設置 LDAP 管理密碼</em></p><p>然後以下面的內容創建一個 LDIF 文件(<code>ldaprootpasswd.ldif</code>)：</p><pre><code>dn: olcDatabase={0}config,cn=config
changetype: modify
add: olcRootPW
olcRootPW: {SSHA}PASSWORD
</code></pre><p>其中：</p><ul><li>PASSWORD 是先前得到的經過哈希處理的字符串。</li><li>cn=config 指的是全局配置選項。</li><li>olcDatabase 指的是一個特定的資料庫實例的名稱，並且通常可以在 <code>/etc/openldap/slapd.d/cn=config</code> 目錄中發現。</li></ul><p>根據上面提供的理論背景，<code>ldaprootpasswd.ldif</code> 文件將添加一個條目到 LDAP 目錄中。在那個條目中，每一行代表一個屬性鍵值對（其中 dn，changetype，add 和 olcRootPW 為屬性，每個冒號右邊的字符串為相應的鍵值）。</p><p>隨着我們的進一步深入，請記住上面的這些，並注意到在這篇文章的餘下部分，我們使用相同的 Common Names（通用名） <code>(cn=)</code>，而這些餘下的步驟中的每一步都將與其上一步相關。</p><p><strong>5. 現在，通過特別指定相對於 ldap 服務的 URI ，添加相應的 LDAP 條目，其中只有 protocol/host/port 這幾個域被允許使用。</strong></p><pre><code># ldapadd -H ldapi:/// -f ldaprootpasswd.ldif
</code></pre><p>上面命令的輸出應該與下面的圖像相似：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-Configuration.png" alt="LDAP 配置"></p><p><em>LDAP 配置</em></p><p>接着從 <code>/etc/openldap/schema</code> 目錄導入一個基本的 LDAP 定義：</p><pre><code># for def in cosine.ldif nis.ldif inetorgperson.ldif; do ldapadd -H ldapi:/// -f /etc/openldap/schema/$def; done
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-Definitions.png" alt="LDAP 定義"></p><p><em>LDAP 定義</em></p><p><strong>6. 讓 LDAP 在它的資料庫中使用你的域名。</strong></p><p>以下面的內容創建另一個 LDIF 文件，我們稱之為 <code>ldapdomain.ldif</code>， 然後酌情替換這個文件中的域名（在域名部分（Domain Component） dc=） 和密碼：</p><pre><code>dn: olcDatabase={1}monitor,cn=config
changetype: modify
replace: olcAccess
olcAccess: {0}to * by dn.base=&quot;gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth&quot;
  read by dn.base=&quot;cn=Manager,dc=mydomain,dc=com&quot; read by * none

dn: olcDatabase={2}hdb,cn=config
changetype: modify
replace: olcSuffix
olcSuffix: dc=mydomain,dc=com

dn: olcDatabase={2}hdb,cn=config
changetype: modify
replace: olcRootDN
olcRootDN: cn=Manager,dc=mydomain,dc=com

dn: olcDatabase={2}hdb,cn=config
changetype: modify
add: olcRootPW
olcRootPW: {SSHA}PASSWORD

dn: olcDatabase={2}hdb,cn=config
changetype: modify
add: olcAccess
olcAccess: {0}to attrs=userPassword,shadowLastChange by
  dn=&quot;cn=Manager,dc=mydomain,dc=com&quot; write by anonymous auth by self write by * none
olcAccess: {1}to dn.base=&quot;&quot; by * read
olcAccess: {2}to * by dn=&quot;cn=Manager,dc=mydomain,dc=com&quot; write by * read
</code></pre><p>接着使用下面的命令來加載：</p><pre><code># ldapmodify -H ldapi:/// -f ldapdomain.ldif
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-Domain-Configuration.png" alt="LDAP 域名配置"></p><p><em>LDAP 域名配置</em></p><p><strong>7. 現在，該是添加一些條目到我們的 LDAP 目錄的時候了。在下面的文件中，屬性和鍵值由一個冒號<code>(:)</code> 所分隔，這個文件我們將命名為 <code>baseldapdomain.ldif</code>:</strong></p><pre><code>dn: dc=mydomain,dc=com
objectClass: top
objectClass: dcObject
objectclass: organization
o: mydomain com
dc: mydomain

dn: cn=Manager,dc=mydomain,dc=com
objectClass: organizationalRole
cn: Manager
description: Directory Manager

dn: ou=People,dc=mydomain,dc=com
objectClass: organizationalUnit
ou: People

dn: ou=Group,dc=mydomain,dc=com
objectClass: organizationalUnit
ou: Group
</code></pre><p>添加條目到 LDAP 目錄中：</p><pre><code># ldapadd -x -D cn=Manager,dc=mydomain,dc=com -W -f baseldapdomain.ldif
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Add-LDAP-Domain-Configuration.png" alt="添加 LDAP 域名，屬性和鍵值"></p><p><em>添加 LDAP 域名，屬性和鍵值</em></p><p><strong>8. 創建一個名為 ldapuser 的 LDAP 用户(<code>adduser ldapuser</code>)，然後在<code>ldapgroup.ldif</code> 中為一個 LDAP 組創建定義。</strong></p><pre><code># adduser ldapuser
# vi ldapgroup.ldif
</code></pre><p>添加下面的內容：</p><pre><code>dn: cn=Manager,ou=Group,dc=mydomain,dc=com
objectClass: top
objectClass: posixGroup
gidNumber: 1004
</code></pre><p>其中 gidNumber 是 ldapuser 在 <code>/etc/group</code> 中的 GID，然後加載這個文件：</p><pre><code># ldapadd -x -W -D &quot;cn=Manager,dc=mydomain,dc=com&quot; -f ldapgroup.ldif
</code></pre><p><strong>9. 為用户 ldapuser 添加一個帶有定義的 LDIF 文件（<code>ldapuser.ldif</code>）：</strong></p><pre><code>dn: uid=ldapuser,ou=People,dc=mydomain,dc=com
objectClass: top
objectClass: account
objectClass: posixAccount
objectClass: shadowAccount
cn: ldapuser
uid: ldapuser
uidNumber: 1004
gidNumber: 1004
homeDirectory: /home/ldapuser
userPassword: {SSHA}fiN0YqzbDuDI0Fpqq9UudWmjZQY28S3M
loginShell: /bin/bash
gecos: ldapuser
shadowLastChange: 0
shadowMax: 0
shadowWarning: 0
</code></pre><p>並加載它：</p><pre><code># ldapadd -x -D cn=Manager,dc=mydomain,dc=com -W -f ldapuser.ldif
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-User-Configuration.png" alt="LDAP 用户配置"></p><p><em>LDAP 用户配置</em></p><p>相似地，你可以刪除你剛剛創建的用户條目：</p><pre><code># ldapdelete -x -W -D cn=Manager,dc=mydomain,dc=com &quot;uid=ldapuser,ou=People,dc=mydomain,dc=com&quot;
</code></pre><p><strong>10. 允許有關 ldap 的通信通過防火牆：</strong></p><pre><code># firewall-cmd --add-service=ldap
</code></pre><p><strong>11. 最後，但並非最不重要的是使用 LDAP 開啓客户端的認證。</strong></p><p>為了在最後一步中對我們有所幫助，我們將使用 authconfig 工具（一個配置系統認證資源的界面）。</p><p>使用下面的命令，在通過 LDAP 服務器認證成功後，假如請求的用户的家目錄不存在，則將會被創建：</p><pre><code># authconfig --enableldap --enableldapauth --ldapserver=rhel7.mydomain.com --ldapbasedn=&quot;dc=mydomain,dc=com&quot; --enablemkhomedir --update
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-Client-Configuration.png" alt="LDAP 客户端認證"></p><p><em>LDAP 客户端認證</em></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>`,60)),p("p",null,[e[7]||(e[7]=n("在這篇文章中，我們已經解釋瞭如何利用一個 LDAP 服務器來設置基本的認證。若想對當前這個指南里描述的設置進行更深入的配置，請參考位於 RHEL 系統管理員指南里的 ",-1)),t(o,{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/ch-Directory_Servers.html"},{default:d(()=>[...e[6]||(e[6]=[n("第 13 章 – LDAP 的配置",-1)])]),_:1}),e[8]||(e[8]=n("，並特別注意使用 TLS 來進行安全設定。",-1))]),e[25]||(e[25]=p("p",null,"請隨意使用下面的評論框來留下你的提問。",-1)),e[26]||(e[26]=p("hr",null,null,-1)),p("p",null,[e[10]||(e[10]=n("via: ",-1)),t(o,{href:"http://www.tecmint.com/setup-ldap-server-and-configure-client-authentication/"},{default:d(()=>[...e[9]||(e[9]=[n("http://www.tecmint.com/setup-ldap-server-and-configure-client-authentication/",-1)])]),_:1})]),p("p",null,[e[14]||(e[14]=n("作者：",-1)),t(o,{href:"http://www.tecmint.com/author/gacanepa/"},{default:d(()=>[...e[11]||(e[11]=[n("Gabriel Cánepa",-1)])]),_:1}),e[15]||(e[15]=n(" 譯者：",-1)),t(o,{href:"https://github.com/FSSlc"},{default:d(()=>[...e[12]||(e[12]=[n("FSSlc",-1)])]),_:1}),e[16]||(e[16]=n(" 校對：",-1)),t(o,{href:"https://github.com/wxy"},{default:d(()=>[...e[13]||(e[13]=[n("wxy",-1)])]),_:1})]),p("p",null,[e[19]||(e[19]=n("本文由 ",-1)),t(o,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[17]||(e[17]=[n("LCTT",-1)])]),_:1}),e[20]||(e[20]=n(" 原創翻譯，",-1)),t(o,{href:"https://linux.cn/"},{default:d(()=>[...e[18]||(e[18]=[n("Linux中國",-1)])]),_:1}),e[21]||(e[21]=n(" 榮譽推出",-1))])])}const w=r(c,[["render",m]]);export{b as __pageData,w as default};
