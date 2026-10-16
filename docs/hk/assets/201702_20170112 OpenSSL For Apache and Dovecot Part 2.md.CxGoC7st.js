import{_ as i,a0 as t,w as o,s as c,I as a,x as n,a1 as e,A as l,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"OpenSSL 在 Apache 和 Dovecot 下的使用（二） | LCTT x X-CMD","titleTemplate":false,"description":"OpenSSL 在 Apache 和 Dovecot 下的使用（二） | LCTT (201702) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"OpenSSL 在 Apache 和 Dovecot 下的使用（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"OpenSSL 在 Apache 和 Dovecot 下的使用（二） | LCTT (201702) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201702/20170112 OpenSSL For Apache and Dovecot Part 2","title":"OpenSSL 在 Apache 和 Dovecot 下的使用（二）","tag":"201702","desc":""},"relativePath":"201702/20170112 OpenSSL For Apache and Dovecot Part 2.md","filePath":"[post].md"}'),d={name:"201702/20170112 OpenSSL For Apache and Dovecot Part 2.md"};function u(h,s,m,f,g,b){const p=t("Link");return o(),c("div",null,[s[29]||(s[29]=a("h1",{id:"openssl-在-apache-和-dovecot-下的使用-二",tabindex:"-1"},[n("OpenSSL 在 Apache 和 Dovecot 下的使用（二） "),a("a",{class:"header-anchor",href:"#openssl-在-apache-和-dovecot-下的使用-二","aria-label":"Permalink to “OpenSSL 在 Apache 和 Dovecot 下的使用（二）”"},"​")],-1)),s[30]||(s[30]=a("p",null,[a("img",{src:"https://www.linux.com/sites/lcom/files/styles/rendered_file/public/key-openssl_0.jpg?itok=FDO3qAOt",alt:"OpenSSL",title:"OpenSSL"})],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"本篇中，Carla Schroder 會解釋如何使用 OpenSSL 保護你的 Postfix/Dovecot 郵件服務器")],-1)),a("p",null,[e(p,{href:"https://www.linux.com/licenses/category/creative-commons-zero"},{default:l(()=>[...s[0]||(s[0]=[n("Creative Commons Zero",-1)])]),_:1}),s[1]||(s[1]=n("Pixabay",-1))]),a("p",null,[s[3]||(s[3]=n("在",-1)),e(p,{href:"https://linux.cn/article-8167-1.html"},{default:l(()=>[...s[2]||(s[2]=[n("上週",-1)])]),_:1}),s[4]||(s[4]=n("，作為我們 OpenSSL 系列的一部分，我們學習瞭如何配置 Apache 以使用 OpenSSL 並強制所有會話使用 HTTPS。 今天，我們將使用 OpenSSL 保護我們的 Postfix/Dovecot 郵件服務器。這些示例基於前面的教程; 請參閲最後的參考資料部分，瞭解本系列中以前的所有教程的鏈接。",-1))]),a("p",null,[s[6]||(s[6]=n("你需要配置 Postfix 以及 Dovecot 都使用 OpenSSL，我們將使用我們在",-1)),e(p,{href:"https://linux.cn/article-8167-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("OpenSSL 在 Apache 和 Dovecot 下的使用（一）",-1)])]),_:1}),s[7]||(s[7]=n("中創建的密鑰和證書。",-1))]),s[32]||(s[32]=r(`<h3 id="postfix-配置" tabindex="-1">Postfix 配置 <a class="header-anchor" href="#postfix-配置" aria-label="Permalink to “Postfix 配置”">​</a></h3><p>你必須編輯 <code>/etc/postfix/main.cf</code> 以及 <code>/etc/postfix/master.cf</code>。實例的 <code>main.cf</code> 是完整的配置，基於我們先前的教程。替換成你自己的 OpenSSL 密鑰和證書名以及本地網絡地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>compatibility_level=2</span></span>
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
<span class="line"><span>smtpd_sasl_authenticated_header = yes</span></span></code></pre></div><p>在 <code>master.cf</code> 取消 <code>submission inet</code> 部分的註釋，並編輯 <code>smtpd_recipient_restrictions</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#submission inet n  -  y  -  - smtpd</span></span>
<span class="line"><span>  -o syslog_name=postfix/submission</span></span>
<span class="line"><span>  -o smtpd_tls_security_level=encrypt</span></span>
<span class="line"><span>  -o smtpd_sasl_auth_enable=yes</span></span>
<span class="line"><span>  -o milter_macro_daemon_name=ORIGINATING</span></span>
<span class="line"><span>  -o smtpd_recipient_restrictions=permit_mynetworks,permit_sasl_authenticated,reject</span></span>
<span class="line"><span>  -o smtpd_tls_wrappermode=no</span></span></code></pre></div><p>完成後重新加載 Postfix：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo service postfix reload</span></span></code></pre></div><h3 id="dovecot-配置" tabindex="-1">Dovecot 配置 <a class="header-anchor" href="#dovecot-配置" aria-label="Permalink to “Dovecot 配置”">​</a></h3><p>在我們以前的教程中，我們為 Dovecot 創建了一個單一配置文件 <code>/etc/dovecot/dovecot.conf</code>，而不是使用多個默認配置文件。這是一個基於我們以前的教程的完整配置。再説一次，使用你自己的 OpenSSL 密鑰和證書，以及你自己的 <code>userdb</code> 的 home 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>protocols = imap pop3 lmtp</span></span>
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
<span class="line"><span>ssl_key = &lt;/etc/ssl/private/test-com.key</span></span></code></pre></div><p>重啓 Dovecot:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo service postfix reload</span></span></code></pre></div><h3 id="用-telnet-測試" tabindex="-1">用 telnet 測試 <a class="header-anchor" href="#用-telnet-測試" aria-label="Permalink to “用 telnet 測試”">​</a></h3><p>就像我們以前一樣，現在我們可以通過使用 telnet 發送消息來測試我們的設置。 但是等等，你説 telnet 不支持 TLS/SSL，那麼這樣怎麼辦呢？首先通過使用 <code>openssl s_client</code> 打開一個加密會話。<code>openssl s_client</code> 的輸出將顯示你的證書及其指紋和大量其它信息，以便你知道你的服務器正在使用正確的證書。會話建立後輸入的命令都是不以數字開頭的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ openssl s_client -starttls smtp -connect studio:25</span></span>
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
<span class="line"><span>221 2.0.0 Bye</span></span></code></pre></div><p>你應該可以在郵件客户端中看到一條新郵件，並在打開時要求你驗證 SSL 證書。你也可以使用 <code>openssl s_client</code> 來測試 Dovecot 的 POP3 和 IMAP 服務。此示例測試加密的 POP3，第 5 號消息是我們在 telnet（如上）中創建的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ openssl s_client -connect studio:995</span></span>
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
<span class="line"><span>closed</span></span></code></pre></div><h3 id="現在做什麼" tabindex="-1">現在做什麼？ <a class="header-anchor" href="#現在做什麼" aria-label="Permalink to “現在做什麼？”">​</a></h3><p>現在你有一個功能良好的，具有合適的 TLS/SSL 保護的郵件服務器了。我鼓勵你深入學習 Postfix 以及 Dovecot； 這些教程中的示例儘可能地簡單，不包括對安全性、防病毒掃描程序、垃圾郵件過濾器或任何其他高級功能的調整。我認為當你有一個基本工作系統時更容易學習高級功能。</p><p>下週回到 openSUSE 包管理備忘錄上。</p><h3 id="資源" tabindex="-1">資源 <a class="header-anchor" href="#資源" aria-label="Permalink to “資源”">​</a></h3>`,21)),a("ul",null,[a("li",null,[e(p,{href:"https://linux.cn/article-8167-1.html"},{default:l(()=>[...s[8]||(s[8]=[n("為 Apache 和 Dovecot 使用 OpenSSL",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8071-1.html"},{default:l(()=>[...s[9]||(s[9]=[n("如何在 Ubuntu Linux 上構建電子郵件服務器",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8077-1.html"},{default:l(()=>[...s[10]||(s[10]=[n("在 Ubuntu Linux 上構建電子郵件服務器：第2部分",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8088-1.html"},{default:l(()=>[...s[11]||(s[11]=[n("在 Ubuntu Linux 上構建電子郵件服務器：第3部分",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.linux.com/learn/apache-ubuntu-linux-beginners"},{default:l(()=>[...s[12]||(s[12]=[n("給初學者看的在 Ubuntu Linux 上使用 Apache",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.linux.com/learn/apache-ubuntu-linux-beginners-part-2"},{default:l(()=>[...s[13]||(s[13]=[n("給初學者看的在 Ubuntu Linux 上使用 Apache：第二部分",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.linux.com/learn/apache-centos-linux-beginners"},{default:l(()=>[...s[14]||(s[14]=[n("給初學者看的在 CentOS Linux 上使用 Apache",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://www.linux.com/learn/quieting-scary-web-browser-ssl-alerts"},{default:l(()=>[...s[15]||(s[15]=[n("消滅讓人害怕的 web 瀏覽器 SSL 警告",-1)])]),_:1})])]),s[33]||(s[33]=a("hr",null,null,-1)),a("p",null,[s[17]||(s[17]=n("via: ",-1)),e(p,{href:"https://www.linux.com/learn/intro-to-linux/openssl-apache-and-dovecot-part-2"},{default:l(()=>[...s[16]||(s[16]=[n("https://www.linux.com/learn/intro-to-linux/openssl-apache-and-dovecot-part-2",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),e(p,{href:"https://www.linux.com/users/cschroder"},{default:l(()=>[...s[18]||(s[18]=[n("CARLA SCHRODER",-1)])]),_:1}),s[22]||(s[22]=n(" 譯者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:l(()=>[...s[19]||(s[19]=[n("geekpi",-1)])]),_:1}),s[23]||(s[23]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[26]||(s[26]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[24]||(s[24]=[n("LCTT",-1)])]),_:1}),s[27]||(s[27]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[25]||(s[25]=[n("Linux中國",-1)])]),_:1}),s[28]||(s[28]=n(" 榮譽推出",-1))])])}const x=i(d,[["render",u]]);export{S as __pageData,x as default};
