import{_ as t,a0 as o,w as c,s as d,ao as l,I as i,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"我的个人电子邮件系统设置：notmuch、mbsync、Postfix 和 dovecot | LCTT x X-CMD","titleTemplate":false,"description":"我的个人电子邮件系统设置：notmuch、mbsync、Postfix 和 dovecot | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"我的个人电子邮件系统设置：notmuch、mbsync、Postfix 和 dovecot | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"我的个人电子邮件系统设置：notmuch、mbsync、Postfix 和 dovecot | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20171223 My personal Email setup - Notmuch, mbsync, postfix and dovecot","title":"我的个人电子邮件系统设置：notmuch、mbsync、Postfix 和 dovecot","tag":"201812","desc":""},"relativePath":"201812/20171223 My personal Email setup - Notmuch, mbsync, postfix and dovecot.md","filePath":"[post].md"}'),r={name:"201812/20171223 My personal Email setup - Notmuch, mbsync, postfix and dovecot.md"};function h(m,s,u,g,f,y){const n=o("Link");return c(),d("div",null,[s[18]||(s[18]=l(`<h1 id="我的个人电子邮件系统设置-notmuch、mbsync、postfix-和-dovecot" tabindex="-1">我的个人电子邮件系统设置：notmuch、mbsync、Postfix 和 dovecot <a class="header-anchor" href="#我的个人电子邮件系统设置-notmuch、mbsync、postfix-和-dovecot" aria-label="Permalink to “我的个人电子邮件系统设置：notmuch、mbsync、Postfix 和 dovecot”">​</a></h1><p>我使用个人电子邮件系统已经相当长的时间了，但是一直没有记录过文档。最近我换了我的笔记本电脑（职业变更导致的变动），我在试图重新创建本地邮件系统时迷茫了。所以这篇文章是一个给自己看的文档，这样我就不用费劲就能再次搭建出来。</p><h3 id="服务器端" tabindex="-1">服务器端 <a class="header-anchor" href="#服务器端" aria-label="Permalink to “服务器端”">​</a></h3><p>我运行自己的邮件服务器，并使用 Postfix 作为 SMTP 服务器，用 Dovecot 实现 IMAP。我不打算详细介绍如何配置这些设置，因为我的设置主要是通过使用 Jonas 为 Redpill 基础架构创建的脚本完成的。什么是 Redpill？（用 Jonas 自己的话说）：</p><blockquote><p>&lt;jonas&gt; Redpill 是一个概念：一种设置 Debian hosts 去跨组织协作的方式</p><p>&lt;jonas&gt; 我发展了这个概念，并将其首次用于 Redpill 网中网：redpill.dk，其中涉及到了我自己的网络（jones.dk），我的主要客户的网络（homebase.dk），一个包括 Skolelinux Germany（free-owl.de）的在德国的网络，和 Vasudev 的网络（copyninja.info）</p></blockquote><p>除此之外， 我还有一个 dovecot sieve 过滤，根据邮件的来源，对邮件进行高级分类，将其放到各种文件夹中。所有的规则都存在于每个有邮件地址的账户下的 <code>~/dovecot.sieve</code> 文件中。</p><p>再次，我不会详细介绍如何设置这些东西，因为这不是我这个帖子的目标。</p><h3 id="在我的笔记本电脑上" tabindex="-1">在我的笔记本电脑上 <a class="header-anchor" href="#在我的笔记本电脑上" aria-label="Permalink to “在我的笔记本电脑上”">​</a></h3><p>在我的笔记本电脑上，我已经按照 4 个部分设置</p><ol><li>邮件同步：使用 <code>mbsync</code> 命令完成</li><li>分类：使用 notmuch 完成</li><li>阅读：使用 notmuch-emacs 完成</li><li>邮件发送：使用作为中继服务器和 SMTP 客户端运行的 Postfix 完成。</li></ol><h3 id="邮件同步" tabindex="-1">邮件同步 <a class="header-anchor" href="#邮件同步" aria-label="Permalink to “邮件同步”">​</a></h3><p>邮件同步是使用 <code>mbsync</code> 工具完成的， 我以前是 OfflineIMAP 的用户，最近切换到 <code>mbsync</code>，因为我觉得它比 OfflineIMAP 的配置更轻量、更简单。该命令是由 isync 包提供的。</p><p>配置文件是 <code>~/.mbsyncrc</code>。下面是我的例子与一些个人设置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>IMAPAccount  copyninja</span></span>
<span class="line"><span>Host imap.copyninja.info</span></span>
<span class="line"><span>User vasudev</span></span>
<span class="line"><span>PassCmd      &quot;gpg -q --for-your-eyes-only --no-tty --exit-on-status-write-error --batch --passphrase-file ~/path/to/passphrase.txt -d ~/path/to/mailpass.gpg&quot;</span></span>
<span class="line"><span>SSLType IMAPS</span></span>
<span class="line"><span>SSLVersion TLSv1.2</span></span>
<span class="line"><span>CertificateFile /etc/ssl/certs/ca-certificates.crt</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>IMAPAccount gmail-kamathvasudev</span></span>
<span class="line"><span>Host imap.gmail.com</span></span>
<span class="line"><span>User kamathvasudev@gmail.com</span></span>
<span class="line"><span>PassCmd &quot;gpg -q --for-your-eyes-only --no-tty --exit-on-status-write-error --batch --passphrase-file ~/path/to/passphrase.txt -d ~/path/to/mailpass.gpg&quot;</span></span>
<span class="line"><span>SSLType IMAPS</span></span>
<span class="line"><span>SSLVersion TLSv1.2</span></span>
<span class="line"><span>CertificateFile /etc/ssl/certs/ca-certificates.crt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>IMAPStore copyninja-remote</span></span>
<span class="line"><span>Account copyninja</span></span>
<span class="line"><span></span></span>
<span class="line"><span>IMAPStore gmail-kamathvasudev-remote</span></span>
<span class="line"><span>Account gmail-kamathvasudev</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MaildirStore copyninja-local</span></span>
<span class="line"><span>Path ~/Mail/vasudev-copyninja.info/</span></span>
<span class="line"><span>Inbox ~/Mail/vasudev-copyninja.info/INBOX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MaildirStore gmail-kamathvasudev-local</span></span>
<span class="line"><span>Path ~/Mail/Gmail-1/</span></span>
<span class="line"><span>Inbox ~/Mail/Gmail-1/INBOX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Channel copyninja</span></span>
<span class="line"><span>Master :copyninja-remote:</span></span>
<span class="line"><span>Slave :copyninja-local:</span></span>
<span class="line"><span>Patterns *</span></span>
<span class="line"><span>Create Both</span></span>
<span class="line"><span>SyncState *</span></span>
<span class="line"><span>Sync All</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Channel gmail-kamathvasudev</span></span>
<span class="line"><span>Master :gmail-kamathvasudev-remote:</span></span>
<span class="line"><span>Slave :gmail-kamathvasudev-local:</span></span>
<span class="line"><span># Exclude everything under the internal [Gmail] folder, except the interesting folders</span></span>
<span class="line"><span>Patterns * ![Gmail]*</span></span>
<span class="line"><span>Create Both</span></span>
<span class="line"><span>SyncState *</span></span>
<span class="line"><span>Sync All</span></span></code></pre></div><p>对上述配置中的一些有趣部分进行一下说明。一个是 PassCmd，它允许你提供 shell 命令来获取帐户的密码。这样可以避免在配置文件中填写密码。我使用 gpg 的对称加密，并在我的磁盘上存储密码。这当然是由 Unix ACL 保护安全的。</p><p>实际上，我想使用我的公钥来加密文件，但当脚本在后台或通过 systemd 运行时，解锁文件看起来很困难 （或者说几乎不可能）。如果你有更好的建议，我洗耳恭听:-)。</p><p>下一个指令部分是 Patterns。这使你可以有选择地同步来自邮件服务器的邮件。这对我来说真的很有帮助，可以排除所有的 “[Gmail]/ folders” 垃圾目录。</p><h3 id="邮件分类" tabindex="-1">邮件分类 <a class="header-anchor" href="#邮件分类" aria-label="Permalink to “邮件分类”">​</a></h3><p>一旦邮件到达你的本地设备，我们需要一种方法来轻松地在邮件读取器中读取邮件。我最初的设置使用本地 dovecot 实例提供同步的 Maildir，并在 Gnus 中阅读。这种设置相比于设置所有的服务器软件是有点大题小作，但 Gnus 无法很好地应付 Maildir 格式，这是最好的方法。这个设置也有一个缺点，那就是在你快速搜索邮件时，要搜索大量邮件。而这就是 notmuch 的用武之地。</p><p>notmuch 允许我轻松索引上千兆字节的邮件档案而找到我需要的东西。我已经创建了一个小脚本，它结合了执行 <code>mbsync</code> 和 <code>notmuch</code>。我使用 dovecot sieve 来基于实际上创建在服务器端的 Maildirs 标记邮件。下面是我的完整 shell 脚本，它执行同步分类和删除垃圾邮件的任务。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MBSYNC=$(pgrep mbsync)</span></span>
<span class="line"><span>NOTMUCH=$(pgrep notmuch)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ -n &quot;$MBSYNC&quot; -o -n &quot;$NOTMUCH&quot; ]; then</span></span>
<span class="line"><span>   echo &quot;Already running one instance of mail-sync. Exiting...&quot;</span></span>
<span class="line"><span>         exit 0</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Deleting messages tagged as *deleted*&quot;</span></span>
<span class="line"><span>notmuch search --format=text0 --output=files tag:deleted |xargs -0 --no-run-if-empty rm -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Moving spam to Spam folder&quot;</span></span>
<span class="line"><span>notmuch search --format=text0 --output=files tag:Spam and \\</span></span>
<span class="line"><span>  to:vasudev@copyninja.info | \\</span></span>
<span class="line"><span>    xargs -0 -I {} --no-run-if-empty mv -v {} ~/Mail/vasudev-copyninja.info/Spam/cur</span></span>
<span class="line"><span>notmuch search --format=text0 --output=files tag:Spam and</span></span>
<span class="line"><span>  to:vasudev-debian@copyninja.info | \\</span></span>
<span class="line"><span>     xargs -0 -I {} --no-run-if-empty mv -v {} ~/Mail/vasudev-copyninja.info/Spam/cur</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>MDIR=&quot;vasudev-copyninja.info vasudev-debian Gmail-1&quot;</span></span>
<span class="line"><span>mbsync -Va</span></span>
<span class="line"><span>notmuch new</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for mdir in $MDIR; do</span></span>
<span class="line"><span>    echo &quot;Processing $mdir&quot;</span></span>
<span class="line"><span>    for fdir in $(ls -d /home/vasudev/Mail/$mdir/*); do</span></span>
<span class="line"><span>      if [ $(basename $fdir) != &quot;INBOX&quot; ]; then</span></span>
<span class="line"><span>          echo &quot;Tagging for $(basename $fdir)&quot;</span></span>
<span class="line"><span>          notmuch tag +$(basename $fdir) -inbox -- folder:$mdir/$(basename $fdir)</span></span>
<span class="line"><span>      fi</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>因此，在运行 <code>mbsync</code> 之前，我搜索所有标记为“deleted”的邮件，并将其从系统中删除。接下来，我在我的帐户上查找标记为“Spam”的邮件，并将其移动到“Spam”文件夹。你没看错，这些邮件逃脱了垃圾邮件过滤器进入到我的收件箱，并被我亲自标记为垃圾邮件。</p><p>运行 <code>mbsync</code> 后，我基于它们的文件夹标记邮件（搜索字符串 <code>folder:</code>）。这让我可以很容易地得到一个邮件列表的内容，而不需要记住列表地址。</p><h3 id="阅读邮件" tabindex="-1">阅读邮件 <a class="header-anchor" href="#阅读邮件" aria-label="Permalink to “阅读邮件”">​</a></h3>`,24)),i("p",null,[s[1]||(s[1]=a("现在，我们已经实现同步和分类邮件，是时候来设置阅读部分。我使用 notmuch-emacs 界面来阅读邮件。我使用 emacs 的 Spacemacs 风格，所以我花了一些时间写了一个私有层，它将我所有的快捷键和分类集中在一个地方，而不会扰乱我的整个 ",-1)),s[2]||(s[2]=i("code",null,".spacemacs",-1)),s[3]||(s[3]=a(" 文件。你可以在 ",-1)),p(n,{href:"https://source.copyninja.info/notmuch-emacs-layer.git/"},{default:e(()=>[...s[0]||(s[0]=[a("notmuch-emacs-layer 仓库",-1)])]),_:1}),s[4]||(s[4]=a(" 找到我的私有层的代码。",-1))]),s[19]||(s[19]=l(`<h3 id="发送邮件" tabindex="-1">发送邮件 <a class="header-anchor" href="#发送邮件" aria-label="Permalink to “发送邮件”">​</a></h3><p>能阅读邮件这还不够，我们也需要能够回复邮件。而这是最近是我感到迷茫的一个略显棘手的部分，以至于不得不写这篇文章，这样我就不会再忘记了。（当然也不必在网络上参考一些过时的帖子。）</p><p>我的系统发送邮件使用 Postfix 作为 SMTP 客户端，使用我自己的 SMTP 服务器作为它的中继主机。中继的问题是，它不能是具有动态 IP 的主机。有两种方法可以允许具有动态 IP 的主机使用中继服务器， 一种是将邮件来源的 IP 地址放入 <code>my_network</code> 或第二个使用 SASL 身份验证。</p><p>我的首选方法是使用 SASL 身份验证。为此，我首先要为每台机器创建一个单独的账户，它将把邮件中继到我的主服务器上。想法是不使用我的主帐户 SASL 进行身份验证。（最初我使用的是主账户，但 Jonas 给出了可行的按账户的想法）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>adduser &lt;hostname&gt;_relay</span></span></code></pre></div><p>这里替换 <code>&lt;hostname&gt;</code> 为你的笔记本电脑的名称或任何你正在使用的设备。现在我们需要调整 Postfix 作为中继服务器。因此，在 Postfix 配置中添加以下行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># SASL authentication</span></span>
<span class="line"><span>smtp_sasl_auth_enable = yes</span></span>
<span class="line"><span>smtp_tls_security_level = encrypt</span></span>
<span class="line"><span>smtp_sasl_tls_security_options = noanonymous</span></span>
<span class="line"><span>relayhost = [smtp.copyninja.info]:submission</span></span>
<span class="line"><span>smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd</span></span></code></pre></div><p>因此， 这里的 <code>relayhost</code> 是用于将邮件转发到互联网的 Postfix 实例的服务器名称。<code>submission</code> 的部分 Postfix 将邮件转发到端口 587（安全端口）。<code>smtp_sasl_tls_security_options</code> 设置为不允许匿名连接。这是必须的，以便中继服务器信任你的移动主机，并同意为你转发邮件。</p><p><code>/etc/postfix/sasl_passwd</code> 是你需要存储用于服务器 SASL 身份验证的帐户密码的文件。将以下内容放入其中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[smtp.example.com]:submission user:password</span></span></code></pre></div><p>用你已放入 <code>relayhost</code> 配置的 SMTP 服务器名称替换 <code>smtp.example.com</code>。用你创建的 <code>&lt;hostname&gt;_relay</code> 用户及其密码替换 <code>user</code> 和 <code>passwd</code>。</p><p>若要保护 <code>sasl_passwd</code> 文件，并为 Postfix 创建它的哈希文件，使用以下命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chown root:root /etc/postfix/sasl_passwd</span></span>
<span class="line"><span>chmod 0600 /etc/postfix/sasl_passwd</span></span>
<span class="line"><span>postmap /etc/postfix/sasl_passwd</span></span></code></pre></div><p>最后一条命令将创建 <code>/etc/postfix/sasl_passwd.db</code> 文件，它是你的文件的 <code>/etc/postfix/sasl_passwd</code> 的哈希文件，具有相同的所有者和权限。现在重新加载 Postfix，并使用 <code>mail</code> 命令检查邮件是否从你的系统中发出。</p><h3 id="bonus-的部分" tabindex="-1">Bonus 的部分 <a class="header-anchor" href="#bonus-的部分" aria-label="Permalink to “Bonus 的部分”">​</a></h3><p>好吧，因为我有一个脚本创建以上结合了邮件的同步和分类。我继续创建了一个 systemd 计时器，以定期同步后台的邮件。就我而言，每 10 分钟一次。下面是 <code>mailsync.timer</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Check Mail Every 10 minutes</span></span>
<span class="line"><span>RefuseManualStart=no</span></span>
<span class="line"><span>RefuseManualStop=no</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Timer]</span></span>
<span class="line"><span>Persistent=false</span></span>
<span class="line"><span>OnBootSec=5min</span></span>
<span class="line"><span>OnUnitActiveSec=10min</span></span>
<span class="line"><span>Unit=mailsync.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=default.target</span></span></code></pre></div><p>下面是 mailsync.service 服务，这是 mailsync.timer 执行我们的脚本所需要的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Check Mail</span></span>
<span class="line"><span>RefuseManualStart=no</span></span>
<span class="line"><span>RefuseManualStop=yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=oneshot</span></span>
<span class="line"><span>ExecStart=/usr/local/bin/mail-sync</span></span>
<span class="line"><span>StandardOutput=syslog</span></span>
<span class="line"><span>StandardError=syslog</span></span></code></pre></div><p>将这些文件置于 <code>/etc/systemd/user</code> 目录下并运行以下代码去开启它们：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemctl enable --user mailsync.timer</span></span>
<span class="line"><span>systemctl enable --user mailsync.service</span></span>
<span class="line"><span>systemctl start --user mailsync.timer</span></span></code></pre></div><p>这就是我从系统同步和发送邮件的方式。我从 Jonas Smedegaard 那里了解到了 afew，他审阅了这篇帖子。因此， 下一步， 我将尝试使用 afew 改进我的 notmuch 配置，当然还会有一个后续的帖子:-)。</p><hr>`,23)),i("p",null,[s[6]||(s[6]=a("via: ",-1)),p(n,{href:"https://copyninja.info/blog/email_setup.html"},{default:e(()=>[...s[5]||(s[5]=[a("https://copyninja.info/blog/email_setup.html",-1)])]),_:1})]),i("p",null,[s[10]||(s[10]=a("作者：",-1)),p(n,{href:"https://copyninja.info"},{default:e(()=>[...s[7]||(s[7]=[a("copyninja",-1)])]),_:1}),s[11]||(s[11]=a(" 译者：",-1)),p(n,{href:"https://github.com/lixinyuxx"},{default:e(()=>[...s[8]||(s[8]=[a("lixinyuxx",-1)])]),_:1}),s[12]||(s[12]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[9]||(s[9]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[15]||(s[15]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[13]||(s[13]=[a("LCTT",-1)])]),_:1}),s[16]||(s[16]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[14]||(s[14]=[a("Linux中国",-1)])]),_:1}),s[17]||(s[17]=a(" 荣誉推出",-1))])])}const x=t(r,[["render",h]]);export{v as __pageData,x as default};
