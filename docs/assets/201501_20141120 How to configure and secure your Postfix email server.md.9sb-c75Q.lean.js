import{_ as i,a0 as l,w as r,s as a,ao as m,I as e,x as s,a1 as n,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"Postfix邮件服务器的配置与安全加固 | LCTT x X-CMD","titleTemplate":false,"description":"Postfix邮件服务器的配置与安全加固 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Postfix邮件服务器的配置与安全加固 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Postfix邮件服务器的配置与安全加固 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141120 How to configure and secure your Postfix email server","title":"Postfix邮件服务器的配置与安全加固","tag":"201501","desc":""},"relativePath":"201501/20141120 How to configure and secure your Postfix email server.md","filePath":"[post].md"}'),u={name:"201501/20141120 How to configure and secure your Postfix email server.md"};function f(d,t,x,g,y,T){const o=l("Link");return r(),a("div",null,[t[21]||(t[21]=m("",27)),e("p",null,[t[1]||(t[1]=s("Postfix支持TLS，它是SSL的后继者，允许你使用基于密钥的验证来加密数据。我推荐你阅读 ",-1)),n(o,{href:"http://www.postfix.org/TLS_README.html"},{default:p(()=>[...t[0]||(t[0]=[s("http://www.postfix.org/TLS_README.html",-1)])]),_:1}),t[2]||(t[2]=s(" ，以了解TLS是怎么和postfix一起工作的。",-1))]),t[22]||(t[22]=e("p",null,"为了使用TLS，你需要生成一个私钥和一个由证书授权机构颁发的证书。在本例中，我将使用自颁发的证书。",-1)),t[23]||(t[23]=e("pre",null,[e("code",null,`sudo yum install mod_ssl openssl
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
