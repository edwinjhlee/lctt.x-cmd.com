import{_ as r,a0 as l,w as s,s as i,ao as a,I as p,x as n,a1 as t,A as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"RHCSA 系列（十四）： 在 RHEL 7 中设置基于 LDAP 的认证 | LCTT x X-CMD","titleTemplate":false,"description":"RHCSA 系列（十四）： 在 RHEL 7 中设置基于 LDAP 的认证 | LCTT (RHCSA Series) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RHCSA 系列（十四）： 在 RHEL 7 中设置基于 LDAP 的认证 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RHCSA 系列（十四）： 在 RHEL 7 中设置基于 LDAP 的认证 | LCTT (RHCSA Series) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"RHCSA Series/RHCSA Series--Part 14--Setting Up LDAP-based Authentication in RHEL 7","title":"RHCSA 系列（十四）： 在 RHEL 7 中设置基于 LDAP 的认证","tag":"RHCSA Series","desc":""},"relativePath":"RHCSA Series/RHCSA Series--Part 14--Setting Up LDAP-based Authentication in RHEL 7.md","filePath":"[post].md"}'),c={name:"RHCSA Series/RHCSA Series--Part 14--Setting Up LDAP-based Authentication in RHEL 7.md"};function m(u,e,g,A,D,L){const o=l("Link");return s(),i("div",null,[e[22]||(e[22]=a(`<h1 id="rhcsa-系列-十四-在-rhel-7-中设置基于-ldap-的认证" tabindex="-1">RHCSA 系列（十四）： 在 RHEL 7 中设置基于 LDAP 的认证 <a class="header-anchor" href="#rhcsa-系列-十四-在-rhel-7-中设置基于-ldap-的认证" aria-label="Permalink to “RHCSA 系列（十四）： 在 RHEL 7 中设置基于 LDAP 的认证”">​</a></h1><p>在这篇文章中，我们将首先罗列一些 LDAP 的基础知识（它是什么，它被用于何处以及为什么会被这样使用），然后向你展示如何使用 RHEL 7 系统来设置一个 LDAP 服务器以及配置一个客户端来使用它达到认证的目的。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/setup-ldap-server-and-configure-client-authentication.png" alt="设置 LDAP 服务器及客户端认证"></p><p><em>RHCSA 系列：设置 LDAP 服务器及客户端认证 – Part 14</em></p><p>正如你将看到的那样，关于认证，还存在其他可能的应用场景，但在这篇指南中，我们将只关注基于 LDAP 的认证。另外，请记住，由于这个话题的广泛性，在这里我们将只涵盖它的基础知识，但你可以参考位于总结部分中列出的文档，以此来了解更加深入的细节。</p><p>基于相同的原因，你将注意到：为了简洁起见，我已经决定省略了几个位于 man 页中 LDAP 工具的参考，但相应命令的解释是近在咫尺的（例如，输入 man ldapadd）。</p><p>那还是让我们开始吧。</p><p><strong>我们的测试环境</strong></p><p>我们的测试环境包含两台 RHEL 7机器：</p><pre><code>Server: 192.168.0.18. FQDN: rhel7.mydomain.com
Client: 192.168.0.20. FQDN: ldapclient.mydomain.com
</code></pre>`,10)),p("p",null,[e[1]||(e[1]=n("如若你想，你可以使用在 ",-1)),t(o,{href:"https://linux.cn/article-6335-1.html"},{default:d(()=>[...e[0]||(e[0]=[n("RHCSA 系列（十二）: 使用 Kickstart 完成 RHEL 7 的自动化安装",-1)])]),_:1}),e[2]||(e[2]=n(" 中使用 Kickstart 安装的机子来作为客户端。",-1))]),e[23]||(e[23]=a(`<h4 id="ldap-是什么" tabindex="-1">LDAP 是什么？ <a class="header-anchor" href="#ldap-是什么" aria-label="Permalink to “LDAP 是什么？”">​</a></h4><p>LDAP 代表轻量级目录访问协议（Lightweight Directory Access Protocol），并包含在一系列协议之中，这些协议允许一个客户端通过网络去获取集中存储的信息（例如所登录的 shell 的路径，家目录的绝对路径，或者其他典型的系统用户信息），而这些信息可以从不同的地方访问到或被很多终端用户获取到（另一个例子是含有某个公司所有雇员的家庭地址和电话号码的目录）。</p><p>对于那些被赋予了权限可以使用这些信息的人来说，将这些信息进行集中管理意味着可以更容易地维护和获取。</p><p>下面的图表提供了一个简化了的关于 LDAP 的示意图，在下面将会进行更多的描述：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-Diagram.png" alt="LDAP 示意图"></p><p><em>LDAP 示意图</em></p><p>下面是对上面示意图的一个详细解释。</p><ul><li>在一个 LDAP 目录中，一个条目（entry）代表一个独立单元或信息，被所谓的 Distinguished Name（DN，区别名） 唯一识别。</li><li>一个属性（attribute）是一些与某个条目相关的信息（例如地址，有效的联系电话号码和邮箱地址）。</li><li>每个属性被分配有一个或多个值（value），这些值被包含在一个以空格为分隔符的列表中。每个条目中那个唯一的值被称为一个 Relative Distinguished Name（RDN，相对区别名）。</li></ul><p>接下来，就让我们进入到有关服务器和客户端安装的内容。</p><h3 id="安装和配置一个-ldap-服务器和客户端" tabindex="-1">安装和配置一个 LDAP 服务器和客户端 <a class="header-anchor" href="#安装和配置一个-ldap-服务器和客户端" aria-label="Permalink to “安装和配置一个 LDAP 服务器和客户端”">​</a></h3><p>在 RHEL 7 中， LDAP 由 OpenLDAP 实现。为了安装服务器和客户端，分别使用下面的命令：</p><pre><code># yum update &amp;&amp; yum install openldap openldap-clients openldap-servers
# yum update &amp;&amp; yum install openldap openldap-clients nss-pam-ldapd
</code></pre><p>一旦安装完成，我们还需要关注一些事情。除非显示地提示，下面的步骤都只在服务器上执行：</p><p><strong>1. 在服务器和客户端上，为了确保 SELinux 不会妨碍挡道，长久地开启下列的布尔值：</strong></p><pre><code># setsebool -P allow_ypbind=0 authlogin_nsswitch_use_ldap=0
</code></pre><p>其中 <code>allow_ypbind</code> 为基于 LDAP 的认证所需要，而 <code>authlogin_nsswitch_use_ldap</code>则可能会被某些应用所需要。</p><p><strong>2. 开启并启动服务：</strong></p><pre><code># systemctl enable slapd.service
# systemctl start slapd.service
</code></pre>`,18)),p("p",null,[e[4]||(e[4]=n("记住你也可以使用 ",-1)),t(o,{href:"http://www.tecmint.com/manage-services-using-systemd-and-systemctl-in-linux/"},{default:d(()=>[...e[3]||(e[3]=[n("systemctl",-1)])]),_:1}),e[5]||(e[5]=n(" 来禁用，重启或停止服务：",-1))]),e[24]||(e[24]=a(`<pre><code># systemctl disable slapd.service
# systemctl restart slapd.service
# systemctl stop slapd.service
</code></pre><p><strong>3. 由于 slapd 服务是由 ldap 用户来运行的（你可以使用 <code>ps -e -o pid,uname,comm | grep slapd</code> 来验证），为了使得服务器能够更改由管理工具创建的条目，该用户应该有目录 <code>/var/lib/ldap</code> 的所有权，而这些管理工具仅可以由 root 用户来运行（紧接着有更多这方面的内容）。</strong></p><p>在递归地更改这个目录的所有权之前，将 slapd 的示例数据库配置文件复制进这个目录：</p><pre><code># cp /usr/share/openldap-servers/DB_CONFIG.example /var/lib/ldap/DB_CONFIG
# chown -R ldap:ldap /var/lib/ldap
</code></pre><p><strong>4. 设置一个 OpenLDAP 管理用户并设置密码：</strong></p><pre><code># slappasswd
</code></pre><p>正如下一幅图所展示的那样：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Set-LDAP-Admin-Password.png" alt="设置 LDAP 管理密码"></p><p><em>设置 LDAP 管理密码</em></p><p>然后以下面的内容创建一个 LDIF 文件(<code>ldaprootpasswd.ldif</code>)：</p><pre><code>dn: olcDatabase={0}config,cn=config
changetype: modify
add: olcRootPW
olcRootPW: {SSHA}PASSWORD
</code></pre><p>其中：</p><ul><li>PASSWORD 是先前得到的经过哈希处理的字符串。</li><li>cn=config 指的是全局配置选项。</li><li>olcDatabase 指的是一个特定的数据库实例的名称，并且通常可以在 <code>/etc/openldap/slapd.d/cn=config</code> 目录中发现。</li></ul><p>根据上面提供的理论背景，<code>ldaprootpasswd.ldif</code> 文件将添加一个条目到 LDAP 目录中。在那个条目中，每一行代表一个属性键值对（其中 dn，changetype，add 和 olcRootPW 为属性，每个冒号右边的字符串为相应的键值）。</p><p>随着我们的进一步深入，请记住上面的这些，并注意到在这篇文章的余下部分，我们使用相同的 Common Names（通用名） <code>(cn=)</code>，而这些余下的步骤中的每一步都将与其上一步相关。</p><p><strong>5. 现在，通过特别指定相对于 ldap 服务的 URI ，添加相应的 LDAP 条目，其中只有 protocol/host/port 这几个域被允许使用。</strong></p><pre><code># ldapadd -H ldapi:/// -f ldaprootpasswd.ldif
</code></pre><p>上面命令的输出应该与下面的图像相似：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-Configuration.png" alt="LDAP 配置"></p><p><em>LDAP 配置</em></p><p>接着从 <code>/etc/openldap/schema</code> 目录导入一个基本的 LDAP 定义：</p><pre><code># for def in cosine.ldif nis.ldif inetorgperson.ldif; do ldapadd -H ldapi:/// -f /etc/openldap/schema/$def; done
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-Definitions.png" alt="LDAP 定义"></p><p><em>LDAP 定义</em></p><p><strong>6. 让 LDAP 在它的数据库中使用你的域名。</strong></p><p>以下面的内容创建另一个 LDIF 文件，我们称之为 <code>ldapdomain.ldif</code>， 然后酌情替换这个文件中的域名（在域名部分（Domain Component） dc=） 和密码：</p><pre><code>dn: olcDatabase={1}monitor,cn=config
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
</code></pre><p>接着使用下面的命令来加载：</p><pre><code># ldapmodify -H ldapi:/// -f ldapdomain.ldif
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-Domain-Configuration.png" alt="LDAP 域名配置"></p><p><em>LDAP 域名配置</em></p><p><strong>7. 现在，该是添加一些条目到我们的 LDAP 目录的时候了。在下面的文件中，属性和键值由一个冒号<code>(:)</code> 所分隔，这个文件我们将命名为 <code>baseldapdomain.ldif</code>:</strong></p><pre><code>dn: dc=mydomain,dc=com
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
</code></pre><p>添加条目到 LDAP 目录中：</p><pre><code># ldapadd -x -D cn=Manager,dc=mydomain,dc=com -W -f baseldapdomain.ldif
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Add-LDAP-Domain-Configuration.png" alt="添加 LDAP 域名，属性和键值"></p><p><em>添加 LDAP 域名，属性和键值</em></p><p><strong>8. 创建一个名为 ldapuser 的 LDAP 用户(<code>adduser ldapuser</code>)，然后在<code>ldapgroup.ldif</code> 中为一个 LDAP 组创建定义。</strong></p><pre><code># adduser ldapuser
# vi ldapgroup.ldif
</code></pre><p>添加下面的内容：</p><pre><code>dn: cn=Manager,ou=Group,dc=mydomain,dc=com
objectClass: top
objectClass: posixGroup
gidNumber: 1004
</code></pre><p>其中 gidNumber 是 ldapuser 在 <code>/etc/group</code> 中的 GID，然后加载这个文件：</p><pre><code># ldapadd -x -W -D &quot;cn=Manager,dc=mydomain,dc=com&quot; -f ldapgroup.ldif
</code></pre><p><strong>9. 为用户 ldapuser 添加一个带有定义的 LDIF 文件（<code>ldapuser.ldif</code>）：</strong></p><pre><code>dn: uid=ldapuser,ou=People,dc=mydomain,dc=com
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
</code></pre><p>并加载它：</p><pre><code># ldapadd -x -D cn=Manager,dc=mydomain,dc=com -W -f ldapuser.ldif
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-User-Configuration.png" alt="LDAP 用户配置"></p><p><em>LDAP 用户配置</em></p><p>相似地，你可以删除你刚刚创建的用户条目：</p><pre><code># ldapdelete -x -W -D cn=Manager,dc=mydomain,dc=com &quot;uid=ldapuser,ou=People,dc=mydomain,dc=com&quot;
</code></pre><p><strong>10. 允许有关 ldap 的通信通过防火墙：</strong></p><pre><code># firewall-cmd --add-service=ldap
</code></pre><p><strong>11. 最后，但并非最不重要的是使用 LDAP 开启客户端的认证。</strong></p><p>为了在最后一步中对我们有所帮助，我们将使用 authconfig 工具（一个配置系统认证资源的界面）。</p><p>使用下面的命令，在通过 LDAP 服务器认证成功后，假如请求的用户的家目录不存在，则将会被创建：</p><pre><code># authconfig --enableldap --enableldapauth --ldapserver=rhel7.mydomain.com --ldapbasedn=&quot;dc=mydomain,dc=com&quot; --enablemkhomedir --update
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/LDAP-Client-Configuration.png" alt="LDAP 客户端认证"></p><p><em>LDAP 客户端认证</em></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3>`,60)),p("p",null,[e[7]||(e[7]=n("在这篇文章中，我们已经解释了如何利用一个 LDAP 服务器来设置基本的认证。若想对当前这个指南里描述的设置进行更深入的配置，请参考位于 RHEL 系统管理员指南里的 ",-1)),t(o,{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/ch-Directory_Servers.html"},{default:d(()=>[...e[6]||(e[6]=[n("第 13 章 – LDAP 的配置",-1)])]),_:1}),e[8]||(e[8]=n("，并特别注意使用 TLS 来进行安全设定。",-1))]),e[25]||(e[25]=p("p",null,"请随意使用下面的评论框来留下你的提问。",-1)),e[26]||(e[26]=p("hr",null,null,-1)),p("p",null,[e[10]||(e[10]=n("via: ",-1)),t(o,{href:"http://www.tecmint.com/setup-ldap-server-and-configure-client-authentication/"},{default:d(()=>[...e[9]||(e[9]=[n("http://www.tecmint.com/setup-ldap-server-and-configure-client-authentication/",-1)])]),_:1})]),p("p",null,[e[14]||(e[14]=n("作者：",-1)),t(o,{href:"http://www.tecmint.com/author/gacanepa/"},{default:d(()=>[...e[11]||(e[11]=[n("Gabriel Cánepa",-1)])]),_:1}),e[15]||(e[15]=n(" 译者：",-1)),t(o,{href:"https://github.com/FSSlc"},{default:d(()=>[...e[12]||(e[12]=[n("FSSlc",-1)])]),_:1}),e[16]||(e[16]=n(" 校对：",-1)),t(o,{href:"https://github.com/wxy"},{default:d(()=>[...e[13]||(e[13]=[n("wxy",-1)])]),_:1})]),p("p",null,[e[19]||(e[19]=n("本文由 ",-1)),t(o,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[17]||(e[17]=[n("LCTT",-1)])]),_:1}),e[20]||(e[20]=n(" 原创翻译，",-1)),t(o,{href:"https://linux.cn/"},{default:d(()=>[...e[18]||(e[18]=[n("Linux中国",-1)])]),_:1}),e[21]||(e[21]=n(" 荣誉推出",-1))])])}const w=r(c,[["render",m]]);export{b as __pageData,w as default};
