import{_ as e,a0 as t,w as o,s as d,I as p,x as a,a1 as i,A as l,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"如何在 Ubuntu 上搭建一台 Email 服务器（三） | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Ubuntu 上搭建一台 Email 服务器（三） | LCTT (201701) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Ubuntu 上搭建一台 Email 服务器（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Ubuntu 上搭建一台 Email 服务器（三） | LCTT (201701) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201701/20161215 Building an Email Server on Ubuntu Linux - Part 3","title":"如何在 Ubuntu 上搭建一台 Email 服务器（三）","tag":"201701","desc":""},"relativePath":"201701/20161215 Building an Email Server on Ubuntu Linux - Part 3.md","filePath":"[post].md"}'),c={name:"201701/20161215 Building an Email Server on Ubuntu Linux - Part 3.md"};function u(h,s,g,m,b,f){const n=t("Link");return o(),d("div",null,[s[25]||(s[25]=p("h1",{id:"如何在-ubuntu-上搭建一台-email-服务器-三",tabindex:"-1"},[a("如何在 Ubuntu 上搭建一台 Email 服务器（三） "),p("a",{class:"header-anchor",href:"#如何在-ubuntu-上搭建一台-email-服务器-三","aria-label":"Permalink to “如何在 Ubuntu 上搭建一台 Email 服务器（三）”"},"​")],-1)),s[26]||(s[26]=p("p",null,[p("img",{src:"https://www.linux.com/sites/lcom/files/styles/rendered_file/public/mail-server.jpg?itok=Ox1SCDsV",alt:"Mail server",title:"Mail server"})],-1)),s[27]||(s[27]=p("p",null,"在本系列的最后，我们将详细介绍如何在 Dovecot 和 Postfix 中设置虚拟用户和邮箱。",-1)),p("p",null,[s[2]||(s[2]=a("欢迎回来，热心的 Linux 系统管理员们！ 在本系列的",-1)),i(n,{href:"https://linux.cn/article-8071-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("第一部分",-1)])]),_:1}),s[3]||(s[3]=a("和",-1)),i(n,{href:"https://linux.cn/article-8077-1.html"},{default:l(()=>[...s[1]||(s[1]=[a("第二部分",-1)])]),_:1}),s[4]||(s[4]=a("中，我们学习了如何将 Postfix 和 Dovecot 组合在一起，搭建一个不错的 IMAP 和 POP3 邮件服务器。 现在我们将学习设置虚拟用户，以便我们可以管理所有 Dovecot 中的用户。",-1))]),s[28]||(s[28]=r(`<h3 id="抱歉-还不能配置-ssl" tabindex="-1">抱歉，还不能配置 SSL <a class="header-anchor" href="#抱歉-还不能配置-ssl" aria-label="Permalink to “抱歉，还不能配置 SSL”">​</a></h3><p>我知道我答应过教你们如何设置一个受 SSL 保护的服务器。 不幸的是，我低估了这个话题的范围。 所以，我会下个月再写一个全面的教程。</p><p>今天，在本系列的最后一部分中，我们将详细介绍如何在 Dovecot 和 Postfix 中设置虚拟用户和邮箱。 在你看来这是有点奇怪，所以我尽量让下面的例子简单点。我们将使用纯文本文件和纯文本来进行身份验证。 你也可以选择使用数据库后端和较强的加密认证形式，具体请参阅文末链接了解有关这些的更多信息。</p><h3 id="虚拟用户" tabindex="-1">虚拟用户 <a class="header-anchor" href="#虚拟用户" aria-label="Permalink to “虚拟用户”">​</a></h3><p>我们希望邮件服务器上用的是虚拟用户而不是 Linux 系统用户。使用 Linux 系统用户不能扩展，并且它们会暴露系统登录账号，给你的服务器带来不必要的风险。 设置虚拟用户需要在 Postfix 和 Dovecot 中编辑配置文件。我们将从 Postfix 开始。首先，我们将从一个干净、简化的 <code>/etc /postfix/main.cf</code> 开始。移动你原始的 <code>main.cf</code> 到别处做个备份，创建一个新的干净的文件，内容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>compatibility_level=2</span></span>
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
<span class="line"><span>virtual_transport = lmtp:unix:private/dovecot-lmtp0</span></span></code></pre></div><p>你可以直接拷贝这份文件，除了 <code>mynetworks</code> 参数的设置 <code>192.168.0.0/24</code>，它应该是你的本地子网掩码。</p><p>接下来，创建用户和组 <code>vmail</code> 来拥有你的虚拟邮箱。虚拟邮箱保存在  <code>vmail</code> 的家目录下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo groupadd -g 5000 vmail</span></span>
<span class="line"><span>$ sudo useradd -m -u 5000 -g 5000 -s /bin/bash vmail</span></span></code></pre></div><p>接下来重新加载 Postfix 配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo postfix reload</span></span>
<span class="line"><span>[sudo] password for carla: </span></span>
<span class="line"><span>postfix/postfix-script: refreshing the Postfix mail system</span></span></code></pre></div><h3 id="dovecot-虚拟用户" tabindex="-1">Dovecot 虚拟用户 <a class="header-anchor" href="#dovecot-虚拟用户" aria-label="Permalink to “Dovecot 虚拟用户”">​</a></h3><p>我们会使用 Dovecot 的 <code>lmtp</code> 协议来连接到 Postfix。你可以这样安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt-get install dovecot-lmtpd</span></span></code></pre></div><p><code>main.cf</code> 的最后一行涉及到 <code>lmtp</code>。复制这个 <code>/etc/dovecot/dovecot.conf</code> 示例文件来替换已存在的文件。再说一次，我们只使用这一个文件，而不是 <code>/etc/dovecot/conf.d</code> 内的所有文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>protocols = imap pop3 lmtp</span></span>
<span class="line"><span>log_path = /var/log/dovecot.log</span></span>
<span class="line"><span>info_log_path = /var/log/dovecot-info.log</span></span>
<span class="line"><span>ssl = no</span></span>
<span class="line"><span>disable_plaintext_auth = no</span></span>
<span class="line"><span>mail_location = maildir:~/.Mail</span></span>
<span class="line"><span>pop3_uidl_format = %g</span></span>
<span class="line"><span>auth_verbose = yes</span></span>
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
<span class="line"><span>service lmtp {</span></span>
<span class="line"><span>  user = vmail</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后，你可以创建一个含有用户和密码的文件 <code>/etc/dovecot/passwd</code>。对于纯文本验证，我们只需要用户的完整邮箱地址和密码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alrac@studio:{PLAIN}password</span></span>
<span class="line"><span>layla@studio:{PLAIN}password</span></span>
<span class="line"><span>fred@studio:{PLAIN}password</span></span>
<span class="line"><span>molly@studio:{PLAIN}password</span></span>
<span class="line"><span>benny@studio:{PLAIN}password</span></span></code></pre></div><p>Dovecot 虚拟用户独立于 Postfix 虚拟用户，因此你需要管理 Dovecot 中的用户。保存所有的设置并重启 Postfix 和 Dovecot：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo service postfix restart</span></span>
<span class="line"><span>$ sudo service dovecot restart</span></span></code></pre></div><p>现在让我们使用老朋友 telnet 来看下 Dovecot 是否设置正确。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ telnet studio 110</span></span>
<span class="line"><span>Trying 127.0.1.1...</span></span>
<span class="line"><span>Connected to studio.</span></span>
<span class="line"><span>Escape character is &#39;^]&#39;.</span></span>
<span class="line"><span>+OK Dovecot ready.</span></span>
<span class="line"><span>user molly@studio</span></span>
<span class="line"><span>+OK</span></span>
<span class="line"><span>pass password</span></span>
<span class="line"><span>+OK Logged in.</span></span>
<span class="line"><span>quit</span></span>
<span class="line"><span>+OK Logging out.</span></span>
<span class="line"><span>Connection closed by foreign host.</span></span></code></pre></div><p>现在一切都好！让我们用 <code>mail</code> 命令，发送测试消息给我们的用户。确保使用用户的完整电子邮箱地址而不只是用户名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mail benny@studio</span></span>
<span class="line"><span>Subject: hello and welcome!</span></span>
<span class="line"><span>Please enjoy your new mail account!</span></span>
<span class="line"><span>.</span></span></code></pre></div><p>最后一行的<strong>英文句点</strong>表示发送消息。让我们看下它是否到达了正确的邮箱。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ls -al /home/vmail/studio/benny@studio/.Mail/new</span></span>
<span class="line"><span>total 16</span></span>
<span class="line"><span>drwx------ 2 vmail vmail 4096 Dec 14 12:39 .</span></span>
<span class="line"><span>drwx------ 5 vmail vmail 4096 Dec 14 12:39 ..</span></span>
<span class="line"><span>-rw------- 1 vmail vmail  525 Dec 14 12:39 1481747995.M696591P5790.studio,S=525,W=540</span></span></code></pre></div><p>找到了。这是一封我们可以阅读的纯文本文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ less 1481747995.M696591P5790.studio,S=525,W=540</span></span>
<span class="line"><span>Return-Path: &lt;carla@localhost&gt;</span></span>
<span class="line"><span>Delivered-To: benny@studio</span></span>
<span class="line"><span>Received: from localhost</span></span>
<span class="line"><span>        by studio (Dovecot) with LMTP id V01ZKRuuUVieFgAABiesew</span></span>
<span class="line"><span>        for &lt;benny@studio&gt;; Wed, 14 Dec 2016 12:39:55 -0800</span></span>
<span class="line"><span>Received: by localhost (Postfix, from userid 1000)</span></span>
<span class="line"><span>        id 9FD9CA1F58; Wed, 14 Dec 2016 12:39:55 -0800 (PST)</span></span>
<span class="line"><span>Date: Wed, 14 Dec 2016 12:39:55 -0800</span></span>
<span class="line"><span>To: benny@studio</span></span>
<span class="line"><span>Subject: hello and welcome!</span></span>
<span class="line"><span>User-Agent: s-nail v14.8.6</span></span>
<span class="line"><span>Message-Id: &lt;20161214203955.9FD9CA1F58@localhost&gt;</span></span>
<span class="line"><span>From: carla@localhost (carla)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Please enjoy your new mail account!</span></span></code></pre></div><p>你还可以使用 telnet 进行测试，如本系列前面部分所述，并在你最喜欢的邮件客户端中设置帐户，如 Thunderbird，Claws-Mail 或 KMail。</p><h3 id="故障排查" tabindex="-1">故障排查 <a class="header-anchor" href="#故障排查" aria-label="Permalink to “故障排查”">​</a></h3><p>当邮件工作不正常时，请检查日志文件（请参阅配置示例），然后运行 <code>journalctl -xe</code>。 这时会提供定位输入错误、未安装包和可以 Google 的短语等所有需要的信息。</p><h3 id="接下来" tabindex="-1">接下来？ <a class="header-anchor" href="#接下来" aria-label="Permalink to “接下来？”">​</a></h3>`,32)),p("p",null,[s[8]||(s[8]=a("假设你的 LAN 名称服务配置正确，你现在有一台很好用的 LAN 邮件服务器。 显然，以纯文本发送消息不是最佳的，不支持互联网的邮件也是绝对不可以的。 请参阅 ",-1)),i(n,{href:"http://wiki.dovecot.org/SSL/DovecotConfiguration"},{default:l(()=>[...s[5]||(s[5]=[a("Dovecot SSL 配置",-1)])]),_:1}),s[9]||(s[9]=a("和 ",-1)),i(n,{href:"http://www.postfix.org/TLS_README.html"},{default:l(()=>[...s[6]||(s[6]=[a("Postfix TLS 支持",-1)])]),_:1}),s[10]||(s[10]=a("，",-1)),i(n,{href:"http://wiki2.dovecot.org/HowTo/VirtualUserFlatFilesPostfix"},{default:l(()=>[...s[7]||(s[7]=[a("VirtualUserFlatFilesPostfix",-1)])]),_:1}),s[11]||(s[11]=a(" 涵盖了 TLS 和数据库后端。并请期待我之后的 SSL 指南。这次我说的是真的。",-1))]),s[29]||(s[29]=p("hr",null,null,-1)),p("p",null,[s[13]||(s[13]=a("via: ",-1)),i(n,{href:"https://www.linux.com/learn/sysadmin/building-email-server-ubuntu-linux-part-3"},{default:l(()=>[...s[12]||(s[12]=[a("https://www.linux.com/learn/sysadmin/building-email-server-ubuntu-linux-part-3",-1)])]),_:1})]),p("p",null,[s[17]||(s[17]=a("作者：",-1)),i(n,{href:"https://www.linux.com/users/cschroder"},{default:l(()=>[...s[14]||(s[14]=[a("CARLA SCHRODER",-1)])]),_:1}),s[18]||(s[18]=a(" 译者：",-1)),i(n,{href:"https://github.com/geekpi"},{default:l(()=>[...s[15]||(s[15]=[a("geekpi",-1)])]),_:1}),s[19]||(s[19]=a(" 校对：",-1)),i(n,{href:"https://github.com/jasminepeng"},{default:l(()=>[...s[16]||(s[16]=[a("jasminepeng",-1)])]),_:1})]),p("p",null,[s[22]||(s[22]=a("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[20]||(s[20]=[a("LCTT",-1)])]),_:1}),s[23]||(s[23]=a(" 原创编译，",-1)),i(n,{href:"https://linux.cn/"},{default:l(()=>[...s[21]||(s[21]=[a("Linux中国",-1)])]),_:1}),s[24]||(s[24]=a(" 荣誉推出",-1))])])}const y=e(c,[["render",u]]);export{x as __pageData,y as default};
