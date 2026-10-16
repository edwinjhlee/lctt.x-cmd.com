import{_ as l,a0 as t,w as o,s as d,I as a,x as n,a1 as e,A as i,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"如何在 Ubuntu 环境下搭建邮件服务器（二） | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Ubuntu 环境下搭建邮件服务器（二） | LCTT (201612) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Ubuntu 环境下搭建邮件服务器（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Ubuntu 环境下搭建邮件服务器（二） | LCTT (201612) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201612/20161215 Building an Email Server on Ubuntu Linux - Part 2","title":"如何在 Ubuntu 环境下搭建邮件服务器（二）","tag":"201612","desc":""},"relativePath":"201612/20161215 Building an Email Server on Ubuntu Linux - Part 2.md","filePath":"[post].md"}'),r={name:"201612/20161215 Building an Email Server on Ubuntu Linux - Part 2.md"};function u(h,s,g,b,k,m){const p=t("Link");return o(),d("div",null,[s[22]||(s[22]=a("h1",{id:"如何在-ubuntu-环境下搭建邮件服务器-二",tabindex:"-1"},[n("如何在 Ubuntu 环境下搭建邮件服务器（二） "),a("a",{class:"header-anchor",href:"#如何在-ubuntu-环境下搭建邮件服务器-二","aria-label":"Permalink to “如何在 Ubuntu 环境下搭建邮件服务器（二）”"},"​")],-1)),s[23]||(s[23]=a("p",null,[a("img",{src:"https://www.linux.com/sites/lcom/files/styles/rendered_file/public/dovecot-email.jpg?itok=tY4veggw",alt:"Dovecot email",title:"Dovecot email"})],-1)),a("p",null,[s[1]||(s[1]=n("本教程的第 2 部分将介绍如何使用 Dovecot 将邮件从 Postfix 服务器移动到用户的收件箱。以",-1)),e(p,{href:"https://www.linux.com/licenses/category/creative-commons-zero"},{default:i(()=>[...s[0]||(s[0]=[n("Creative Commons Zero",-1)])]),_:1}),s[2]||(s[2]=n(" 方式授权发布",-1))]),a("p",null,[s[4]||(s[4]=n("在",-1)),e(p,{href:"https://linux.cn/article-8071-1.html"},{default:i(()=>[...s[3]||(s[3]=[n("第一部分",-1)])]),_:1}),s[5]||(s[5]=n("中，我们安装并测试了 Postfix SMTP 服务器。Postfix 或任何 SMTP 服务器都不是一个完整的邮件服务器，因为它所做的只是在 SMTP 服务器之间移动邮件。我们需要 Dovecot 将邮件从 Postfix 服务器移动到用户的收件箱中。",-1))]),s[24]||(s[24]=c(`<p>Dovecot 支持两种标准邮件协议：IMAP（Internet 邮件访问协议）和 POP3（邮局协议）。 IMAP 服务器会在服务器上保留所有邮件。您的用户可以选择将邮件下载到计算机或仅在服务器上访问它们。 IMAP 对于有多台机器的用户是方便的。但对你而言需要更多的工作，因为你必须确保你的服务器始终可用，而且 IMAP 服务器需要大量的存储和内存。</p><p>POP3 是较旧的协议。POP3 服务器可以比 IMAP 服务器服务更多的用户，因为邮件会下载到用户的计算机。大多数邮件客户端可以选择在服务器上保留一定天数的邮件，因此 POP3 的行为有点像 IMAP。但它又不是 IMAP，当你像 IMAP 那样（在多台计算机上使用它时）那么常常会下载多次或意外删除。</p><h3 id="安装-dovecot" tabindex="-1">安装 Dovecot <a class="header-anchor" href="#安装-dovecot" aria-label="Permalink to “安装 Dovecot”">​</a></h3><p>启动你的 Ubuntu 系统并安装 Dovecot：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt-get install dovecot-imapd dovecot-pop3d</span></span></code></pre></div><p>它会安装可用的配置，并在完成后自动启动，你可以用 <code>ps ax | grep dovecot</code> 确认：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps ax | grep dovecot</span></span>
<span class="line"><span>15988 ?  Ss 0:00 /usr/sbin/dovecot</span></span>
<span class="line"><span>15990 ?  S  0:00 dovecot/anvil</span></span>
<span class="line"><span>15991 ?  S  0:00 dovecot/log</span></span></code></pre></div><p>打开你的 Postfix 配置文件 <code>/etc/postfix/main.cf</code>，确保配置了maildir 而不是 mbox 的邮件存储方式，mbox 是给每个用户一个单一大文件，而 maildir 是每条消息都存储为一个文件。大量的小文件比一个庞大的文件更稳定且易于管理。添加如下两行，第二行告诉 Postfix 你需要 maildir 格式，并且在每个用户的家目录下创建一个 <code>.Mail</code> 目录。你可以取任何名字，不一定要是 <code>.Mail</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mail_spool_directory = /var/mail</span></span>
<span class="line"><span>home_mailbox = .Mail/</span></span></code></pre></div><p>现在调整你的 Dovecot 配置。首先把原始的 <code>dovecot.conf</code> 文件重命名放到一边，因为它会调用存放在 <code>conf.d</code> 中的文件，在你刚刚开始学习时把配置放一起更简单些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mv /etc/dovecot/dovecot.conf /etc/dovecot/dovecot-oldconf</span></span></code></pre></div><p>现在创建一个新的 <code>/etc/dovecot/dovecot.conf</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>disable_plaintext_auth = no</span></span>
<span class="line"><span>mail_location = maildir:~/.Mail</span></span>
<span class="line"><span>namespace inbox {</span></span>
<span class="line"><span>  inbox = yes</span></span>
<span class="line"><span>  mailbox Drafts {</span></span>
<span class="line"><span>    special_use = \\Drafts</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  mailbox Sent {</span></span>
<span class="line"><span>    special_use = \\Sent</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  mailbox Trash {</span></span>
<span class="line"><span>    special_use = \\Trash</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>passdb {</span></span>
<span class="line"><span>  driver = pam</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>protocols = &quot; imap pop3&quot;</span></span>
<span class="line"><span>ssl = no</span></span>
<span class="line"><span>userdb {</span></span>
<span class="line"><span>  driver = passwd</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意 <code>mail_location = maildir</code> 必须和 <code>main.cf</code> 中的 <code>home_mailbox</code> 参数匹配。保存你的更改并重新加载 Postfix 和 Dovecot 配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo postfix reload</span></span>
<span class="line"><span>$ sudo dovecot reload</span></span></code></pre></div><h3 id="快速导出配置" tabindex="-1">快速导出配置 <a class="header-anchor" href="#快速导出配置" aria-label="Permalink to “快速导出配置”">​</a></h3><p>使用下面的命令来快速查看你的 Postfix 和 Dovecot 配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ postconf -n</span></span>
<span class="line"><span>$ doveconf -n</span></span></code></pre></div><h3 id="测试-dovecot" tabindex="-1">测试 Dovecot <a class="header-anchor" href="#测试-dovecot" aria-label="Permalink to “测试 Dovecot”">​</a></h3><p>现在再次启动 telnet，并且给自己发送一条测试消息。粗体显示的是你输入的命令。<code>studio</code> 是我服务器的主机名，因此你必须用自己的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ telnet studio 25</span></span>
<span class="line"><span>Trying 127.0.1.1...</span></span>
<span class="line"><span>Connected to studio.</span></span>
<span class="line"><span>Escape character is &#39;^]&#39;.</span></span>
<span class="line"><span>220 studio.router ESMTP Postfix (Ubuntu)</span></span>
<span class="line"><span>EHLO studio</span></span>
<span class="line"><span>250-studio.router</span></span>
<span class="line"><span>250-PIPELINING</span></span>
<span class="line"><span>250-SIZE 10240000</span></span>
<span class="line"><span>250-VRFY</span></span>
<span class="line"><span>250-ETRN</span></span>
<span class="line"><span>250-STARTTLS</span></span>
<span class="line"><span>250-ENHANCEDSTATUSCODES</span></span>
<span class="line"><span>250-8BITMIME</span></span>
<span class="line"><span>250-DSN</span></span>
<span class="line"><span>250 SMTPUTF8</span></span>
<span class="line"><span>mail from: tester@test.net</span></span>
<span class="line"><span>250 2.1.0 Ok</span></span>
<span class="line"><span>rcpt to: carla@studio</span></span>
<span class="line"><span>250 2.1.5 Ok</span></span>
<span class="line"><span>data</span></span>
<span class="line"><span>354 End data with .Date: November 25, 2016</span></span>
<span class="line"><span>From: tester</span></span>
<span class="line"><span>Message-ID: first-test</span></span>
<span class="line"><span>Subject: mail server test</span></span>
<span class="line"><span>Hi carla,</span></span>
<span class="line"><span>Are you reading this? Let me know if you didn&#39;t get this.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>250 2.0.0 Ok: queued as 0C261A1F0F</span></span>
<span class="line"><span>quit</span></span>
<span class="line"><span>221 2.0.0 Bye                                                                   </span></span>
<span class="line"><span>Connection closed by foreign host.</span></span></code></pre></div><p>现在请求 Dovecot 来取回你的新消息，使用你的 Linux 用户名和密码登录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>$ telnet studio 110                                            </span></span>
<span class="line"><span>Trying 127.0.0.1...                                                             </span></span>
<span class="line"><span>Connected to studio.                                                         </span></span>
<span class="line"><span>Escape character is &#39;^]&#39;.                                                       </span></span>
<span class="line"><span>+OK Dovecot ready.                                                              </span></span>
<span class="line"><span>user carla</span></span>
<span class="line"><span>+OK</span></span>
<span class="line"><span>pass password</span></span>
<span class="line"><span>+OK Logged in.</span></span>
<span class="line"><span>stat</span></span>
<span class="line"><span>+OK 2 809</span></span>
<span class="line"><span>list</span></span>
<span class="line"><span>+OK 2 messages:</span></span>
<span class="line"><span>1 383</span></span>
<span class="line"><span>2 426</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>retr 2</span></span>
<span class="line"><span>+OK 426 octets</span></span>
<span class="line"><span>Return-Path: &lt;tester@test.net&gt;</span></span>
<span class="line"><span>X-Original-To: carla@studio</span></span>
<span class="line"><span>Delivered-To: carla@studio</span></span>
<span class="line"><span>Received: from studio (localhost [127.0.0.1])</span></span>
<span class="line"><span>        by studio.router (Postfix) with ESMTP id 0C261A1F0F</span></span>
<span class="line"><span>        for &lt;carla@studio&gt;; Wed, 30 Nov 2016 17:18:57 -0800 (PST)</span></span>
<span class="line"><span>Date: November 25, 2016</span></span>
<span class="line"><span>From: tester@studio.router</span></span>
<span class="line"><span>Message-ID: first-test</span></span>
<span class="line"><span>Subject: mail server test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hi carla,</span></span>
<span class="line"><span>Are you reading this? Let me know if you didn&#39;t get this.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>quit</span></span>
<span class="line"><span>+OK Logging out.</span></span>
<span class="line"><span>Connection closed by foreign host.</span></span></code></pre></div><p>花一点时间比较第一个例子中输入的消息和第二个例子中接收的消息。 返回地址和日期是很容易伪造的，但 Postfix 不会被愚弄。大多数邮件客户端默认显示一个最小的标头集，但是你需要读取完整的标头才能查看真实的回溯。</p><p>你也可以在你的 <code>~/Mail/cur</code> 目录中查看你的邮件，它们是普通文本，我已经有两封测试邮件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls .Mail/cur/</span></span>
<span class="line"><span>1480540325.V806I28e0229M351743.studio:2,S</span></span>
<span class="line"><span>1480555224.V806I28e000eM41463.studio:2,S</span></span></code></pre></div><h3 id="测试-imap" tabindex="-1">测试 IMAP <a class="header-anchor" href="#测试-imap" aria-label="Permalink to “测试 IMAP”">​</a></h3><p>我们 Dovecot 同时启用了 POP3 和 IMAP 服务，因此让我们使用 telnet 测试 IMAP。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ telnet studio imap2   </span></span>
<span class="line"><span>Trying 127.0.1.1...</span></span>
<span class="line"><span>Connected to studio.</span></span>
<span class="line"><span>Escape character is &#39;^]&#39;.</span></span>
<span class="line"><span>* OK [CAPABILITY IMAP4rev1 LITERAL+ SASL-IR LOGIN-REFERRALS </span></span>
<span class="line"><span>ID ENABLE IDLE AUTH=PLAIN] Dovecot ready.</span></span>
<span class="line"><span>A1 LOGIN carla password</span></span>
<span class="line"><span>A1 OK [CAPABILITY IMAP4rev1 LITERAL+ SASL-IR LOGIN-REFERRALS </span></span>
<span class="line"><span>ID ENABLE IDLE SORT SORT=DISPLAY THREAD=REFERENCES THREAD=REFS </span></span>
<span class="line"><span>THREAD=ORDEREDSUBJECT MULTIAPPEND URL-PARTIAL CATENATE UNSELECT </span></span>
<span class="line"><span>CHILDREN NAMESPACE UIDPLUS LIST-EXTENDED I18NLEVEL=1 CONDSTORE </span></span>
<span class="line"><span>QRESYNC ESEARCH ESORT SEARCHRES WITHIN CONTEXT=SEARCH LIST-STATUS </span></span>
<span class="line"><span>BINARY MOVE SPECIAL-USE] Logged in</span></span>
<span class="line"><span>A2 LIST &quot;&quot; &quot;*&quot;</span></span>
<span class="line"><span>* LIST (\\HasNoChildren) &quot;.&quot; INBOX</span></span>
<span class="line"><span>A2 OK List completed (0.000 + 0.000 secs).</span></span>
<span class="line"><span>A3 EXAMINE INBOX</span></span>
<span class="line"><span>* FLAGS (\\Answered \\Flagged \\Deleted \\Seen \\Draft)</span></span>
<span class="line"><span>* OK [PERMANENTFLAGS ()] Read-only mailbox.</span></span>
<span class="line"><span>* 2 EXISTS</span></span>
<span class="line"><span>* 0 RECENT</span></span>
<span class="line"><span>* OK [UIDVALIDITY 1480539462] UIDs valid</span></span>
<span class="line"><span>* OK [UIDNEXT 3] Predicted next UID</span></span>
<span class="line"><span>* OK [HIGHESTMODSEQ 1] Highest</span></span>
<span class="line"><span>A3 OK [READ-ONLY] Examine completed (0.000 + 0.000 secs).</span></span>
<span class="line"><span>A4 logout</span></span>
<span class="line"><span>* BYE Logging out</span></span>
<span class="line"><span>A4 OK Logout completed.</span></span>
<span class="line"><span>Connection closed by foreign host</span></span></code></pre></div><h3 id="thunderbird-邮件客户端" tabindex="-1">Thunderbird 邮件客户端 <a class="header-anchor" href="#thunderbird-邮件客户端" aria-label="Permalink to “Thunderbird 邮件客户端”">​</a></h3><p>图 1 中的屏幕截图显示了我局域网上另一台主机上的图形邮件客户端中的邮件。</p><p><img src="https://www.linux.com/sites/lcom/files/styles/rendered_file/public/thunderbird-mail.png?itok=IkWK5Ti_" alt="thunderbird mail" title="thunderbird mail"></p><p><em>图1： Thunderbird mail</em></p><p>此时，你已有一个可以工作的 IMAP 和 POP3 邮件服务器，并且你也知道该如何测试你的服务器。你的用户可以在他们设置邮件客户端时选择要使用的协议。如果您只想支持一个邮件协议，那么只需要在您的 Dovecot 配置中留下你要的协议名字。</p>`,34)),a("p",null,[s[7]||(s[7]=n("然而，这还远远没有完成。这是一个非常简单、没有加密的、大门敞开的安装。它也只适用于与邮件服务器在同一系统上的用户。这是不可扩展的，并具有一些安全风险，例如没有密码保护。 我们会在",-1)),e(p,{href:"https://www.linux.com/learn/sysadmin/building-email-server-ubuntu-linux-part-3"},{default:i(()=>[...s[6]||(s[6]=[n("下篇",-1)])]),_:1}),s[8]||(s[8]=n("了解如何创建与系统用户分开的邮件用户，以及如何添加加密。",-1))]),s[25]||(s[25]=a("hr",null,null,-1)),a("p",null,[s[10]||(s[10]=n("via: ",-1)),e(p,{href:"https://www.linux.com/learn/sysadmin/building-email-server-ubuntu-linux-part-2"},{default:i(()=>[...s[9]||(s[9]=[n("https://www.linux.com/learn/sysadmin/building-email-server-ubuntu-linux-part-2",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),e(p,{href:"https://www.linux.com/users/cschroder"},{default:i(()=>[...s[11]||(s[11]=[n("CARLA SCHRODER",-1)])]),_:1}),s[15]||(s[15]=n(" 译者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:i(()=>[...s[12]||(s[12]=[n("geekpi",-1)])]),_:1}),s[16]||(s[16]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[19]||(s[19]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[17]||(s[17]=[n("LCTT",-1)])]),_:1}),s[20]||(s[20]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[18]||(s[18]=[n("Linux中国",-1)])]),_:1}),s[21]||(s[21]=n(" 荣誉推出",-1))])])}const E=l(r,[["render",u]]);export{T as __pageData,E as default};
