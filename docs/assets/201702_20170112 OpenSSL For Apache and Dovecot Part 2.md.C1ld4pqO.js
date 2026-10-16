import{_ as i,a0 as t,w as o,s as c,I as a,x as n,a1 as e,A as l,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"OpenSSL 在 Apache 和 Dovecot 下的使用（二） | LCTT x X-CMD","titleTemplate":false,"description":"OpenSSL 在 Apache 和 Dovecot 下的使用（二） | LCTT (201702) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"OpenSSL 在 Apache 和 Dovecot 下的使用（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"OpenSSL 在 Apache 和 Dovecot 下的使用（二） | LCTT (201702) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201702/20170112 OpenSSL For Apache and Dovecot Part 2","title":"OpenSSL 在 Apache 和 Dovecot 下的使用（二）","tag":"201702","desc":""},"relativePath":"201702/20170112 OpenSSL For Apache and Dovecot Part 2.md","filePath":"[post].md"}'),d={name:"201702/20170112 OpenSSL For Apache and Dovecot Part 2.md"};function u(h,s,m,f,g,b){const p=t("Link");return o(),c("div",null,[s[29]||(s[29]=a("h1",{id:"openssl-在-apache-和-dovecot-下的使用-二",tabindex:"-1"},[n("OpenSSL 在 Apache 和 Dovecot 下的使用（二） "),a("a",{class:"header-anchor",href:"#openssl-在-apache-和-dovecot-下的使用-二","aria-label":"Permalink to “OpenSSL 在 Apache 和 Dovecot 下的使用（二）”"},"​")],-1)),s[30]||(s[30]=a("p",null,[a("img",{src:"https://www.linux.com/sites/lcom/files/styles/rendered_file/public/key-openssl_0.jpg?itok=FDO3qAOt",alt:"OpenSSL",title:"OpenSSL"})],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"本篇中，Carla Schroder 会解释如何使用 OpenSSL 保护你的 Postfix/Dovecot 邮件服务器")],-1)),a("p",null,[e(p,{href:"https://www.linux.com/licenses/category/creative-commons-zero"},{default:l(()=>[...s[0]||(s[0]=[n("Creative Commons Zero",-1)])]),_:1}),s[1]||(s[1]=n("Pixabay",-1))]),a("p",null,[s[3]||(s[3]=n("在",-1)),e(p,{href:"https://linux.cn/article-8167-1.html"},{default:l(()=>[...s[2]||(s[2]=[n("上周",-1)])]),_:1}),s[4]||(s[4]=n("，作为我们 OpenSSL 系列的一部分，我们学习了如何配置 Apache 以使用 OpenSSL 并强制所有会话使用 HTTPS。 今天，我们将使用 OpenSSL 保护我们的 Postfix/Dovecot 邮件服务器。这些示例基于前面的教程; 请参阅最后的参考资料部分，了解本系列中以前的所有教程的链接。",-1))]),a("p",null,[s[6]||(s[6]=n("你需要配置 Postfix 以及 Dovecot 都使用 OpenSSL，我们将使用我们在",-1)),e(p,{href:"https://linux.cn/article-8167-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("OpenSSL 在 Apache 和 Dovecot 下的使用（一）",-1)])]),_:1}),s[7]||(s[7]=n("中创建的密钥和证书。",-1))]),s[32]||(s[32]=r(`<h3 id="postfix-配置" tabindex="-1">Postfix 配置 <a class="header-anchor" href="#postfix-配置" aria-label="Permalink to “Postfix 配置”">​</a></h3><p>你必须编辑 <code>/etc/postfix/main.cf</code> 以及 <code>/etc/postfix/master.cf</code>。实例的 <code>main.cf</code> 是完整的配置，基于我们先前的教程。替换成你自己的 OpenSSL 密钥和证书名以及本地网络地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>compatibility_level=2</span></span>
<span class="line"><span>smtpd_banner = $myhostname ESMTP $mail_name (Ubuntu/GNU)</span></span>
<span class="line"><span>biff = no</span></span>
<span class="line"><span>append_dot_mydomain = no</span></span>
<span class="line"><span></span></span>
<span class="line"><span>myhostname = localhost</span></span>
<span class="line"><span>alias_maps = hash:/etc/aliases</span></span>
<span class="line"><span>alias_database = hash:/etc/aliases</span></span>
<span class="line"><span>myorigin = $myhostname</span></span>
<span class="line"><span>mynetworks = 127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128 192.168.0.0/24</span></span>
<span class="line"><span>mailbox_size_limit = 0</span></span>
<span class="line"><span>recipient_delimiter = +</span></span>
<span class="line"><span>inet_interfaces = all</span></span>
<span class="line"><span></span></span>
<span class="line"><span>virtual_mailbox_domains = /etc/postfix/vhosts.txt</span></span>
<span class="line"><span>virtual_mailbox_base = /home/vmail</span></span>
<span class="line"><span>virtual_mailbox_maps = hash:/etc/postfix/vmaps.txt</span></span>
<span class="line"><span>virtual_minimum_uid = 1000</span></span>
<span class="line"><span>virtual_uid_maps = static:5000</span></span>
<span class="line"><span>virtual_gid_maps = static:5000</span></span>
<span class="line"><span>virtual_transport = lmtp:unix:private/dovecot-lmtp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>smtpd_tls_cert_file=/etc/ssl/certs/test-com.pem</span></span>
<span class="line"><span>smtpd_tls_key_file=/etc/ssl/private/test-com.key</span></span>
<span class="line"><span>smtpd_use_tls=yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>smtpd_sasl_auth_enable = yes</span></span>
<span class="line"><span>smtpd_sasl_type = dovecot</span></span>
<span class="line"><span>smtpd_sasl_path = private/auth</span></span>
<span class="line"><span>smtpd_sasl_authenticated_header = yes</span></span></code></pre></div><p>在 <code>master.cf</code> 取消 <code>submission inet</code> 部分的注释，并编辑 <code>smtpd_recipient_restrictions</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#submission inet n  -  y  -  - smtpd</span></span>
<span class="line"><span>  -o syslog_name=postfix/submission</span></span>
<span class="line"><span>  -o smtpd_tls_security_level=encrypt</span></span>
<span class="line"><span>  -o smtpd_sasl_auth_enable=yes</span></span>
<span class="line"><span>  -o milter_macro_daemon_name=ORIGINATING</span></span>
<span class="line"><span>  -o smtpd_recipient_restrictions=permit_mynetworks,permit_sasl_authenticated,reject</span></span>
<span class="line"><span>  -o smtpd_tls_wrappermode=no</span></span></code></pre></div><p>完成后重新加载 Postfix：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo service postfix reload</span></span></code></pre></div><h3 id="dovecot-配置" tabindex="-1">Dovecot 配置 <a class="header-anchor" href="#dovecot-配置" aria-label="Permalink to “Dovecot 配置”">​</a></h3><p>在我们以前的教程中，我们为 Dovecot 创建了一个单一配置文件 <code>/etc/dovecot/dovecot.conf</code>，而不是使用多个默认配置文件。这是一个基于我们以前的教程的完整配置。再说一次，使用你自己的 OpenSSL 密钥和证书，以及你自己的 <code>userdb</code> 的 home 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>protocols = imap pop3 lmtp</span></span>
<span class="line"><span>log_path = /var/log/dovecot.log</span></span>
<span class="line"><span>info_log_path = /var/log/dovecot-info.log</span></span>
<span class="line"><span>disable_plaintext_auth = no</span></span>
<span class="line"><span>mail_location = maildir:~/.Mail</span></span>
<span class="line"><span>pop3_uidl_format = %g</span></span>
<span class="line"><span>auth_mechanisms = plain</span></span>
<span class="line"><span></span></span>
<span class="line"><span>passdb {</span></span>
<span class="line"><span>  driver = passwd-file</span></span>
<span class="line"><span>  args = /etc/dovecot/passwd</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>userdb {</span></span>
<span class="line"><span>  driver = static</span></span>
<span class="line"><span>  args = uid=vmail gid=vmail home=/home/vmail/studio/%u</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service lmtp {</span></span>
<span class="line"><span> unix_listener /var/spool/postfix/private/dovecot-lmtp {</span></span>
<span class="line"><span>   group = postfix</span></span>
<span class="line"><span>   mode = 0600</span></span>
<span class="line"><span>   user = postfix</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protocol lmtp {</span></span>
<span class="line"><span>  postmaster_address = postmaster@studio</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service lmtp {</span></span>
<span class="line"><span>  user = vmail</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service auth {</span></span>
<span class="line"><span>  unix_listener /var/spool/postfix/private/auth {</span></span>
<span class="line"><span>    mode = 0660</span></span>
<span class="line"><span>        user=postfix</span></span>
<span class="line"><span>        group=postfix</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ssl=required</span></span>
<span class="line"><span>ssl_cert = &lt;/etc/ssl/certs/test-com.pem</span></span>
<span class="line"><span>ssl_key = &lt;/etc/ssl/private/test-com.key</span></span></code></pre></div><p>重启 Dovecot:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo service postfix reload</span></span></code></pre></div><h3 id="用-telnet-测试" tabindex="-1">用 telnet 测试 <a class="header-anchor" href="#用-telnet-测试" aria-label="Permalink to “用 telnet 测试”">​</a></h3><p>就像我们以前一样，现在我们可以通过使用 telnet 发送消息来测试我们的设置。 但是等等，你说 telnet 不支持 TLS/SSL，那么这样怎么办呢？首先通过使用 <code>openssl s_client</code> 打开一个加密会话。<code>openssl s_client</code> 的输出将显示你的证书及其指纹和大量其它信息，以便你知道你的服务器正在使用正确的证书。会话建立后输入的命令都是不以数字开头的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ openssl s_client -starttls smtp -connect studio:25</span></span>
<span class="line"><span>CONNECTED(00000003)</span></span>
<span class="line"><span>[masses of output snipped]</span></span>
<span class="line"><span>    Verify return code: 0 (ok)</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>250 SMTPUTF8</span></span>
<span class="line"><span>EHLO studio</span></span>
<span class="line"><span>250-localhost</span></span>
<span class="line"><span>250-PIPELINING</span></span>
<span class="line"><span>250-SIZE 10240000</span></span>
<span class="line"><span>250-VRFY</span></span>
<span class="line"><span>250-ETRN</span></span>
<span class="line"><span>250-AUTH PLAIN</span></span>
<span class="line"><span>250-ENHANCEDSTATUSCODES</span></span>
<span class="line"><span>250-8BITMIME</span></span>
<span class="line"><span>250-DSN</span></span>
<span class="line"><span>250 SMTPUTF8</span></span>
<span class="line"><span>mail from: &lt;carla@domain.com&gt;</span></span>
<span class="line"><span>250 2.1.0 Ok</span></span>
<span class="line"><span>rcpt to: &lt;alrac@studio&gt;</span></span>
<span class="line"><span>250 2.1.5 Ok</span></span>
<span class="line"><span>data</span></span>
<span class="line"><span>354 End data with .subject: TLS/SSL test</span></span>
<span class="line"><span>Hello, we are testing TLS/SSL. Looking good so far.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>250 2.0.0 Ok: queued as B9B529FE59</span></span>
<span class="line"><span>quit</span></span>
<span class="line"><span>221 2.0.0 Bye</span></span></code></pre></div><p>你应该可以在邮件客户端中看到一条新邮件，并在打开时要求你验证 SSL 证书。你也可以使用 <code>openssl s_client</code> 来测试 Dovecot 的 POP3 和 IMAP 服务。此示例测试加密的 POP3，第 5 号消息是我们在 telnet（如上）中创建的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ openssl s_client -connect studio:995</span></span>
<span class="line"><span>CONNECTED(00000003)</span></span>
<span class="line"><span>[masses of output snipped]</span></span>
<span class="line"><span>    Verify return code: 0 (ok)</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>+OK Dovecot ready</span></span>
<span class="line"><span>user alrac@studio </span></span>
<span class="line"><span>+OK</span></span>
<span class="line"><span>pass password</span></span>
<span class="line"><span>+OK Logged in.</span></span>
<span class="line"><span>list</span></span>
<span class="line"><span>+OK 5 messages:</span></span>
<span class="line"><span>1 499</span></span>
<span class="line"><span>2 504</span></span>
<span class="line"><span>3 514</span></span>
<span class="line"><span>4 513</span></span>
<span class="line"><span>5 565</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>retr 5</span></span>
<span class="line"><span>+OK 565 octets</span></span>
<span class="line"><span>Return-Path: &lt;carla@domain.com&gt;</span></span>
<span class="line"><span>Delivered-To: alrac@studio</span></span>
<span class="line"><span>Received: from localhost</span></span>
<span class="line"><span>        by studio.alrac.net (Dovecot) with LMTP id y8G5C8aablgKIQAAYelYQA</span></span>
<span class="line"><span>        for &lt;alrac@studio&gt;; Thu, 05 Jan 2017 11:13:10 -0800</span></span>
<span class="line"><span>Received: from studio (localhost [127.0.0.1])</span></span>
<span class="line"><span>        by localhost (Postfix) with ESMTPS id B9B529FE59</span></span>
<span class="line"><span>        for &lt;alrac@studio&gt;; Thu,  5 Jan 2017 11:12:13 -0800 (PST)</span></span>
<span class="line"><span>subject: TLS/SSL test</span></span>
<span class="line"><span>Message-Id: &lt;20170105191240.B9B529FE59@localhost&gt;</span></span>
<span class="line"><span>Date: Thu,  5 Jan 2017 11:12:13 -0800 (PST)</span></span>
<span class="line"><span>From: carla@domain.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hello, we are testing TLS/SSL. Looking good so far.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>quit</span></span>
<span class="line"><span>+OK Logging out.</span></span>
<span class="line"><span>closed</span></span></code></pre></div><h3 id="现在做什么" tabindex="-1">现在做什么？ <a class="header-anchor" href="#现在做什么" aria-label="Permalink to “现在做什么？”">​</a></h3><p>现在你有一个功能良好的，具有合适的 TLS/SSL 保护的邮件服务器了。我鼓励你深入学习 Postfix 以及 Dovecot； 这些教程中的示例尽可能地简单，不包括对安全性、防病毒扫描程序、垃圾邮件过滤器或任何其他高级功能的调整。我认为当你有一个基本工作系统时更容易学习高级功能。</p><p>下周回到 openSUSE 包管理备忘录上。</p><h3 id="资源" tabindex="-1">资源 <a class="header-anchor" href="#资源" aria-label="Permalink to “资源”">​</a></h3>`,21)),a("ul",null,[a("li",null,[e(p,{href:"https://linux.cn/article-8167-1.html"},{default:l(()=>[...s[8]||(s[8]=[n("为 Apache 和 Dovecot 使用 OpenSSL",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8071-1.html"},{default:l(()=>[...s[9]||(s[9]=[n("如何在 Ubuntu Linux 上构建电子邮件服务器",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8077-1.html"},{default:l(()=>[...s[10]||(s[10]=[n("在 Ubuntu Linux 上构建电子邮件服务器：第2部分",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8088-1.html"},{default:l(()=>[...s[11]||(s[11]=[n("在 Ubuntu Linux 上构建电子邮件服务器：第3部分",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.linux.com/learn/apache-ubuntu-linux-beginners"},{default:l(()=>[...s[12]||(s[12]=[n("给初学者看的在 Ubuntu Linux 上使用 Apache",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.linux.com/learn/apache-ubuntu-linux-beginners-part-2"},{default:l(()=>[...s[13]||(s[13]=[n("给初学者看的在 Ubuntu Linux 上使用 Apache：第二部分",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.linux.com/learn/apache-centos-linux-beginners"},{default:l(()=>[...s[14]||(s[14]=[n("给初学者看的在 CentOS Linux 上使用 Apache",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.linux.com/learn/quieting-scary-web-browser-ssl-alerts"},{default:l(()=>[...s[15]||(s[15]=[n("消灭让人害怕的 web 浏览器 SSL 警告",-1)])]),_:1})])]),s[33]||(s[33]=a("hr",null,null,-1)),a("p",null,[s[17]||(s[17]=n("via: ",-1)),e(p,{href:"https://www.linux.com/learn/intro-to-linux/openssl-apache-and-dovecot-part-2"},{default:l(()=>[...s[16]||(s[16]=[n("https://www.linux.com/learn/intro-to-linux/openssl-apache-and-dovecot-part-2",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),e(p,{href:"https://www.linux.com/users/cschroder"},{default:l(()=>[...s[18]||(s[18]=[n("CARLA SCHRODER",-1)])]),_:1}),s[22]||(s[22]=n(" 译者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:l(()=>[...s[19]||(s[19]=[n("geekpi",-1)])]),_:1}),s[23]||(s[23]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[26]||(s[26]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[24]||(s[24]=[n("LCTT",-1)])]),_:1}),s[27]||(s[27]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[25]||(s[25]=[n("Linux中国",-1)])]),_:1}),s[28]||(s[28]=n(" 荣誉推出",-1))])])}const x=i(d,[["render",u]]);export{S as __pageData,x as default};
