import{_ as i,a0 as l,w as r,s as a,ao as m,I as e,x as s,a1 as n,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"Postfix邮件服务器的配置与安全加固 | LCTT x X-CMD","titleTemplate":false,"description":"Postfix邮件服务器的配置与安全加固 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Postfix邮件服务器的配置与安全加固 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Postfix邮件服务器的配置与安全加固 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141120 How to configure and secure your Postfix email server","title":"Postfix邮件服务器的配置与安全加固","tag":"201501","desc":""},"relativePath":"201501/20141120 How to configure and secure your Postfix email server.md","filePath":"[post].md"}'),u={name:"201501/20141120 How to configure and secure your Postfix email server.md"};function f(d,t,x,g,y,T){const o=l("Link");return r(),a("div",null,[t[21]||(t[21]=m(`<h1 id="postfix邮件服务器的配置与安全加固" tabindex="-1">Postfix邮件服务器的配置与安全加固 <a class="header-anchor" href="#postfix邮件服务器的配置与安全加固" aria-label="Permalink to “Postfix邮件服务器的配置与安全加固”">​</a></h1><p><img src="http://techarena51.com/wp-content/uploads/2014/08/postfix.png" alt=""></p><p>当你启动并运行应用服务器后，你就需要一台好的邮件服务器来为你传递邮件。我为我所有的服务器开通了postfix邮件服务，下面就是我常用的配置。</p><h3 id="centos-6上安装postfix" tabindex="-1">CentOS 6上安装Postfix <a class="header-anchor" href="#centos-6上安装postfix" aria-label="Permalink to “CentOS 6上安装Postfix”">​</a></h3><pre><code>yum install postfix
</code></pre><p>默认安装了Sendmail，所以最好将它停掉并移除。</p><pre><code>service sendmail stop
yum remove sendmail
</code></pre><p>Postfix包含了<strong>两个配置文件main.cf和master.cf</strong>，对于基本的配置，你需要修改main.cf。同时，postfix可以像shell变量一样定义参数，并通过$来调用。这些参数不需要再使用前定义，Postfix只在运行中需要时才会查询某个参数。</p><h3 id="配置postfix" tabindex="-1">配置postfix <a class="header-anchor" href="#配置postfix" aria-label="Permalink to “配置postfix”">​</a></h3><pre><code>vim /etc/postfix/main.cf
</code></pre><p>去掉以下行的注释</p><pre><code># 你的主机名
myhostname = yourhostname.com

# 你的发件域
myorigin = $myhostname

# 指定用于接收邮件的网络接口，这里指定 localhost 是因为我们只用来接受本地的程序投递
inet_interfaces = localhost

# 指定所使用的协议，可以使用“all”来增加 IPv6 支持
inet_protocols = ipv4


# 指定所接受的邮件域    
mydestination = $myhostname, localhost.$mydomain, localhost

# 仅转发本地主机的邮件，而不是主机所在的网络
mynetworks_style = host
</code></pre><p>启动postfix</p><pre><code>service postfix start
</code></pre><p>这些基本的postfix配置可以让你的机器发送邮件，你可以通过发送邮件并检查“maillog”日志文件来验证。</p><pre><code>echo test mail | mail -s &quot;test&quot;  leo@techarena51.com &amp;&amp; sudo tail -f /var/log/maillog

# 输出的日志类似如下
Aug 25 14:16:21 vps postfix/smtp[32622]: E6A372DC065D: to=, relay=smtp.mailserver.org[50.56.21.176], delay=0.8, delays=0.1/0/0.43/0.27, dsn=2.0.0, status=sent (250 Great success)
Aug 25 14:16:21 vps postfix/qmgr[5355]: E6A372DC065D: removed
</code></pre><p>但是，上述配置并不够，因为邮件服务大多数时候都会被垃圾邮件挤满，你需要添加SPF、PTR和DKIM记录。即便如此，你的邮件仍然可能被当作垃圾邮件来投递，因为你的IP地址被列入了黑名单，大多数时候是因为你的vps先前被入侵了。</p><p>还有另外一种选择，或者说是更好的方式是使用第三方邮件提供商提供的邮件服务，如Gmail，或者甚至是Mailgun。我使用Mailgun，因为它们提供了每个月10000封免费电子邮件，而Gmail则提供了每天100封左右的邮件。</p><p>在“/etc/postfix/main.cf”中，你需要添加“smtp.mailgun.com”作为你的“转发主机”，并启用“SASL”验证，这样postfix就可以连接并验证到远程Mailgun服务器。</p><p>添加或取消以下行的注释。</p><pre><code>relayhost = [smtp.mailgun.org]
smtp_sasl_auth_enable = yes
smtp_sasl_password_maps=static:your_username:your_password
smtp_sasl_security_options=noanonymous
</code></pre><p>Postfix本身不会实施“SASL”验证，因此你需要安装“cyrus-sasl-plain”。</p><pre><code>sudo yum install cyrus-sasl-plain
</code></pre><p>如果你不安装此包，那么你就会收到这条错误信息“SASL authentication failed; cannot authenticate to server smtp.mailgun.org[50.56.21.176]: no mechanism available)”</p><p>重启postfix</p><pre><code>sudo service postfix restart
</code></pre><h3 id="使用tls加固postfix安全" tabindex="-1">使用TLS加固Postfix安全 <a class="header-anchor" href="#使用tls加固postfix安全" aria-label="Permalink to “使用TLS加固Postfix安全”">​</a></h3>`,27)),e("p",null,[t[1]||(t[1]=s("Postfix支持TLS，它是SSL的后继者，允许你使用基于密钥的验证来加密数据。我推荐你阅读 ",-1)),n(o,{href:"http://www.postfix.org/TLS_README.html"},{default:p(()=>[...t[0]||(t[0]=[s("http://www.postfix.org/TLS_README.html",-1)])]),_:1}),t[2]||(t[2]=s(" ，以了解TLS是怎么和postfix一起工作的。",-1))]),t[22]||(t[22]=e("p",null,"为了使用TLS，你需要生成一个私钥和一个由证书授权机构颁发的证书。在本例中，我将使用自颁发的证书。",-1)),t[23]||(t[23]=e("pre",null,[e("code",null,`sudo yum install mod_ssl openssl
# 生成私钥 
openssl genrsa -out smtp.key 2048 

# 生成 CSR 
openssl req -new -key smtp.key -out smtp.csr

# 生成自签名的钥匙
openssl x509 -req -days 365 -in smtp.csr -signkey smtp.key -out smtp.crt

# 将文件复制到正确的位置
cp smtp.crt /etc/pki/tls/certs
cp smtp.key /etc/pki/tls/private/smtp.key
cp smtp.csr /etc/pki/tls/private/smtp.csr
`)],-1)),t[24]||(t[24]=e("p",null,"打开postfix配置文件，然后添加以下参数。",-1)),t[25]||(t[25]=e("pre",null,[e("code",null,`sudo vim /etc/postfix/main.cf

smtp_tls_security_level = may
smtpd_tls_security_level = may
smtp_tls_note_starttls_offer = yes

smtpd_tls_key_file = /etc/pki/tls/private/smtp.key
smtpd_tls_cert_file = /etc/pki/tls/certs
smtp_tls_CAfile = /etc/ssl/certs/ca.crt
smtp_tls_loglevel = 1
`)],-1)),e("p",null,[t[4]||(t[4]=s("安全级别“may”意味着宣告对远程SMTP客户端上的STARTTLS的支持，但是客户端不需要使用加密。我在这里按照",-1)),n(o,{href:"http://documentation.mailgun.com/user_manual.html#smtp-relay"},{default:p(()=>[...t[3]||(t[3]=[s("mailgun文档",-1)])]),_:1}),t[5]||(t[5]=s("提示使用“may”，但是如果你想要强制使用TLS加密，可以使用“encrypt”。",-1))]),t[26]||(t[26]=e("pre",null,[e("code",null,`service postfix restart
# 发送一封测试邮件
echo test mail | mail -s "test"  test@yourdomain.com && sudo tail -f /var/log/maillog
`)],-1)),t[27]||(t[27]=e("p",null,"你应该会看到以下信息",-1)),t[28]||(t[28]=e("pre",null,[e("code",null,`Aug 21 00:00:06 vps postfix/smtp[4997]: setting up TLS connection to smtp.mailgun.org[50.56.21.176]:587
Aug 21 00:00:06 vps postfix/smtp[4997]: Trusted TLS connection established to smtp.mailgun.org[50.56.21.176]:587: TLSv1.2 with cipher AES256-GCM-SHA384 (256/256 bits)
`)],-1)),t[29]||(t[29]=e("p",null,"如果一切正常，你可以注释掉以下参数。",-1)),t[30]||(t[30]=e("p",null,"“smtp_tls_loglevel = 1”",-1)),e("p",null,[t[7]||(t[7]=s("对于故障排除，我推荐你阅读",-1)),n(o,{href:"http://techarena51.com/index.php/postfix-configuration-and-explanation-of-parameters/"},{default:p(()=>[...t[6]||(t[6]=[s("Postfix小建议和排障命令",-1)])]),_:1})]),t[31]||(t[31]=e("hr",null,null,-1)),e("p",null,[t[9]||(t[9]=s("via: ",-1)),n(o,{href:"http://techarena51.com/index.php/configure-secure-postfix-email-server/"},{default:p(()=>[...t[8]||(t[8]=[s("http://techarena51.com/index.php/configure-secure-postfix-email-server/",-1)])]),_:1})]),e("p",null,[t[13]||(t[13]=s("作者：",-1)),n(o,{href:"http://techarena51.com/"},{default:p(()=>[...t[10]||(t[10]=[s("Leo G",-1)])]),_:1}),t[14]||(t[14]=s(" 译者：",-1)),n(o,{href:"https://github.com/GOLinux"},{default:p(()=>[...t[11]||(t[11]=[s("GOLinux",-1)])]),_:1}),t[15]||(t[15]=s(" 校对：",-1)),n(o,{href:"https://github.com/wxy"},{default:p(()=>[...t[12]||(t[12]=[s("wxy",-1)])]),_:1})]),e("p",null,[t[18]||(t[18]=s("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...t[16]||(t[16]=[s("LCTT",-1)])]),_:1}),t[19]||(t[19]=s(" 原创翻译，",-1)),n(o,{href:"http://linux.cn/"},{default:p(()=>[...t[17]||(t[17]=[s("Linux中国",-1)])]),_:1}),t[20]||(t[20]=s(" 荣誉推出",-1))])])}const L=i(u,[["render",f]]);export{S as __pageData,L as default};
