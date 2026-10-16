import{_ as r,a0 as s,w as l,s as i,I as o,x as e,a1 as n,A as a,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const c=JSON.parse('{"title":"如何 Mutt 邮件客户端中使用密文密码 | LCTT x X-CMD","titleTemplate":false,"description":"如何 Mutt 邮件客户端中使用密文密码 | LCTT (201602) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何 Mutt 邮件客户端中使用密文密码 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何 Mutt 邮件客户端中使用密文密码 | LCTT (201602) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201602/20151201 How to use Mutt email client with encrypted passwords","title":"如何 Mutt 邮件客户端中使用密文密码","tag":"201602","desc":""},"relativePath":"201602/20151201 How to use Mutt email client with encrypted passwords.md","filePath":"[post].md"}'),m={name:"201602/20151201 How to use Mutt email client with encrypted passwords.md"};function g(d,t,G,M,P,f){const p=s("Link");return l(),i("div",null,[t[24]||(t[24]=o("h1",{id:"如何-mutt-邮件客户端中使用密文密码",tabindex:"-1"},[e("如何 Mutt 邮件客户端中使用密文密码 "),o("a",{class:"header-anchor",href:"#如何-mutt-邮件客户端中使用密文密码","aria-label":"Permalink to “如何 Mutt 邮件客户端中使用密文密码”"},"​")],-1)),o("p",null,[t[1]||(t[1]=e("Mutt 是一个 Linux/UNIX 终端环境下的开源的邮件客户端。Mutt 以及 ",-1)),n(p,{href:"http://xmodulo.com/gmail-command-line-linux-alpine.html"},{default:a(()=>[...t[0]||(t[0]=[e("Alpine",-1)])]),_:1}),t[2]||(t[2]=e(" 在 Linux 命令行爱好者中有着最忠诚的追随者，这不是没有原因的。想一下你所期待邮件客户端应有的功能，Mutt 拥有：多协议支持（例如，POP3、IMAP 和 SMTP），S/MIME 和 PGP/GPG 集成，会话线索，颜色标记，可定制宏/快捷键，等等。另外，基于命令行的 Mutt 相比粗重的基于浏览器的邮件客户端（如：Gmail，Ymail）或图形用户界面的邮件客户端（如：Thunderbird，MS Outlook）而言，是一个使用电子邮件的轻量级替代品。",-1))]),t[25]||(t[25]=u(`<p>当你想使用 Mutt 通过公司的 SMTP/IMAP 服务器访问或发送邮件，或取代网页邮件服务，可能所关心的一个问题是如何保护您的邮件凭据（如：SMTP/IMAP 密码），它们存储在一个纯文本 Mutt 配置文件（~/.muttrc）中。</p><p>对于这些人对安全的担忧，确实有一个容易的方法来<strong>加密 Mutt 配置文件</strong>*，以防止这种风险。在这个教程中，我描述了如何加密 Mutt 敏感配置，比如使用 GnuPG（GPG）加密 SMTP/IMAP 密码，GPG 是一个开源的 OpenPGP 实现。</p><h3 id="第一步-可选-创建-gpg-密钥" tabindex="-1">第一步 （可选）：创建 GPG 密钥 <a class="header-anchor" href="#第一步-可选-创建-gpg-密钥" aria-label="Permalink to “第一步 （可选）：创建 GPG 密钥”">​</a></h3><p>因为我们将要使用 GPG 加密 Mutt 配置文件，如果你没有 GPG 密钥，第一步就是创建一个（公钥/私钥对）。如果有，请忽略这步。</p><p>创建一个新 GPG 密钥，输入下面命令：</p><pre><code>$ gpg --gen-key
</code></pre><p>选择密钥类型（RSA），密钥长度（2048 bits），和过期时间（0 代表不过期）。当出现用户 ID 提示时，输入关联到该公钥/私钥对的名字（Dan Nanni） 和邮箱地址（myemail@email.com）。最后，输入一个密码来保护你的私钥。</p><p><img src="https://c2.staticflickr.com/6/5726/22808727824_7735f11157_c.jpg" alt=""></p><p>生成一个 GPG 密钥需要大量的随机字节来构成熵，所以在生成密钥期间确保在你的系统上执行一些随机行为（如：敲打键盘，移动鼠标或者读写磁盘）。根据密钥长度，生成 GPG 密钥要花几分钟或更多时间。</p><p><img src="https://c1.staticflickr.com/1/644/23328597612_6ac5a29944_c.jpg" alt=""></p><h3 id="第二步-加密-mutt-敏感配置" tabindex="-1">第二步：加密 Mutt 敏感配置 <a class="header-anchor" href="#第二步-加密-mutt-敏感配置" aria-label="Permalink to “第二步：加密 Mutt 敏感配置”">​</a></h3><p>下一步，在 ~/.mutt 目录创建一个新的文本文件，然后把一些你想隐藏的 Mutt 敏感配置放进去。这个例子里，我指定了 SMTP/IMAP 密码。</p><pre><code>$ mkdir ~/.mutt
$ vi ~/.mutt/password
</code></pre><hr><pre><code>set smtp_pass=&quot;XXXXXXX&quot;
set imap_pass=&quot;XXXXXXX&quot;
</code></pre><p>现在通过 GPG 使用你的公钥加密这个文件如下：</p><pre><code>$ gpg -r myemail@email.com -e ~/.mutt/password
</code></pre><p>这将创建 ~/.mutt/password.gpg，这是一个原始文件的 GPG 加密版本。</p><p>然后删除 ~/.mutt/password，只保留 GPG 加密版本。</p><h3 id="第三步-创建完整-mutt-配置文件" tabindex="-1">第三步：创建完整 Mutt 配置文件 <a class="header-anchor" href="#第三步-创建完整-mutt-配置文件" aria-label="Permalink to “第三步：创建完整 Mutt 配置文件”">​</a></h3><p>现在你已经在一个单独的文件放置了加密的 Mutt 敏感配置，你可以在 ~/.muttrc 指定其余的 Mutt 配置。然后增加下面这行在 ~/.muttrc 末尾。</p><pre><code>source &quot;gpg -d ~/.mutt/password.gpg |&quot;
</code></pre><p>当你启动 Mutt 时，这行将解密 ~/.mutt/password.gpg ，然后将解密内容应用到你的 Mutt 配置中。</p>`,23)),o("p",null,[t[4]||(t[4]=e("下面展示一个完整 Mutt 配置例子，这可以让你通过 Mutt 访问 Gmail，而没有暴露你的 SMTP/IMAP 密码。用你的 Gmail ID 替代下面的 ",-1)),t[5]||(t[5]=o("code",null,"yourgmailaccount",-1)),t[6]||(t[6]=e("，此外你也需要在",-1)),n(p,{href:"https://www.google.com/settings/u/1/security"},{default:a(()=>[...t[3]||(t[3]=[e("你的 Goolgle 账户设置",-1)])]),_:1}),t[7]||(t[7]=e("中启用“支持不太安全的应用访问”。",-1))]),t[26]||(t[26]=u(`<pre><code>set from = &quot;yourgmailaccount@gmail.com&quot;
set realname = &quot;Your Name&quot;
set smtp_url = &quot;smtp://yourgmailaccount@smtp.gmail.com:587/&quot;
set imap_user = &quot;yourgmailaccount@gmail.com&quot;
set folder = &quot;imaps://imap.gmail.com:993&quot;
set spoolfile = &quot;+INBOX&quot;
set postponed = &quot;+[Google Mail]/Drafts&quot;
set trash = &quot;+[Google Mail]/Trash&quot;
set header_cache =~/.mutt/cache/headers
set message_cachedir =~/.mutt/cache/bodies
set certificate_file =~/.mutt/certificates
set move = no
set imap_keepalive = 900
 
# encrypted IMAP/SMTP passwords
source &quot;gpg -d ~/.mutt/password.gpg |&quot;
</code></pre><h3 id="第四步-可选-配置-gpg-代理" tabindex="-1">第四步（可选）：配置 GPG 代理 <a class="header-anchor" href="#第四步-可选-配置-gpg-代理" aria-label="Permalink to “第四步（可选）：配置 GPG 代理”">​</a></h3><p>这时候，你将可以使用加密了IMAP/SMTP 密码的 Mutt。然而，每次你运行 Mutt，你都要先被提示输入一个 GPG 密码来使用你的私钥解密 IMAP/SMTP 密码。</p><p><img src="https://c2.staticflickr.com/6/5667/23437064775_20c874940f_c.jpg" alt=""></p><p>如果你想避免这样的 GPG 密码提示，你可以部署一个 gpg-agent。它以后台守护进程方式运行，gpg-agent 可以安全地缓存你的 GPG 密码，无需手工干预，gpg 可以自动从 gpg-agent 获得你的 GPG 密码。如果你正在使用 Linux 桌面，你可以配置使用一些等同于 gpg-agent 的特定的桌面软件，例如，GNOME 桌面的 gnome-keyring-daemon。</p><p>你可以在基于 Debian 系统安装 gpg-agent：</p><pre><code>$ sudo apt-get install gpg-agent
</code></pre><p>gpg-agent 在基于 Red Hat 的系统上是预装好的。</p><p>现在增加下面这些到你的 .bashrc 文件中。</p><pre><code>envfile=&quot;$HOME/.gnupg/gpg-agent.env&quot;
if [[ -e &quot;$envfile&quot; ]] &amp;&amp; kill -0 $(grep GPG_AGENT_INFO &quot;$envfile&quot; | cut -d: -f 2) 2&gt;/dev/null; then
    eval &quot;$(cat &quot;$envfile&quot;)&quot;
else
    eval &quot;$(gpg-agent --daemon --allow-preset-passphrase --write-env-file &quot;$envfile&quot;)&quot;
fi
export GPG_AGENT_INFO
</code></pre><p>重载 .bashrc，或简单的登出然后重新登录。</p><pre><code>$ source ~/.bashrc
</code></pre><p>现在确认 GPG_AGENT_INFO 环境变量已经设置妥当。</p><pre><code>$ echo $GPG_AGENT_INFO

/tmp/gpg-0SKJw8/S.gpg-agent:942:1
</code></pre><p>并且，当你输入 gpg-agent 命令时，你应该看到下面的信息。</p><pre><code>$ gpg-agent

gpg-agent: gpg-agent running and available
</code></pre><p>一旦 gpg-agent 启动运行，它将会在第一次提示你输入密码时缓存你的 GPG 密码。随后你多次运行 Mutt ，都不会被提示要 GPG 密码（gpg-agent 一直开着，缓存就不会过期）。</p><p><img src="https://c1.staticflickr.com/1/664/22809928093_3be57698ce_c.jpg" alt=""></p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3>`,19)),o("p",null,[t[9]||(t[9]=e("在这个指导里，我提供一个使用 GnuPG 加密如 SMTP/IMAP 密码这样的 Mutt 敏感配置的方法。注意，如果你想在 Mutt 上使用 GnuPG 来加密或签名你的邮件，你可以参考",-1)),n(p,{href:"http://dev.mutt.org/trac/wiki/MuttGuide/UseGPG"},{default:a(()=>[...t[8]||(t[8]=[e("官方指南",-1)])]),_:1}),t[10]||(t[10]=e("关于 GPG 与 Mutt 结合的部分。",-1))]),t[27]||(t[27]=o("p",null,"如果你知道任何使用 Mutt 的安全技巧，欢迎分享它。",-1)),t[28]||(t[28]=o("hr",null,null,-1)),o("p",null,[t[12]||(t[12]=e("via: ",-1)),n(p,{href:"http://xmodulo.com/mutt-email-client-encrypted-passwords.html"},{default:a(()=>[...t[11]||(t[11]=[e("http://xmodulo.com/mutt-email-client-encrypted-passwords.html",-1)])]),_:1})]),o("p",null,[t[16]||(t[16]=e("作者：",-1)),n(p,{href:"http://xmodulo.com/author/nanni"},{default:a(()=>[...t[13]||(t[13]=[e("Dan Nanni",-1)])]),_:1}),t[17]||(t[17]=e(" 译者：",-1)),n(p,{href:"https://github.com/wyangsun"},{default:a(()=>[...t[14]||(t[14]=[e("wyangsun",-1)])]),_:1}),t[18]||(t[18]=e(" 校对：",-1)),n(p,{href:"https://github.com/wxy"},{default:a(()=>[...t[15]||(t[15]=[e("wxy",-1)])]),_:1})]),o("p",null,[t[21]||(t[21]=e("本文由 ",-1)),n(p,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[19]||(t[19]=[e("LCTT",-1)])]),_:1}),t[22]||(t[22]=e(" 原创编译，",-1)),n(p,{href:"https://linux.cn/"},{default:a(()=>[...t[20]||(t[20]=[e("Linux中国",-1)])]),_:1}),t[23]||(t[23]=e(" 荣誉推出",-1))])])}const w=r(m,[["render",g]]);export{c as __pageData,w as default};
