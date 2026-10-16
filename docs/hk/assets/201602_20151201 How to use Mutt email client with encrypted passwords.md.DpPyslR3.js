import{_ as r,a0 as s,w as l,s as i,I as o,x as e,a1 as n,A as a,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"如何 Mutt 郵件客户端中使用密文密碼 | LCTT x X-CMD","titleTemplate":false,"description":"如何 Mutt 郵件客户端中使用密文密碼 | LCTT (201602) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何 Mutt 郵件客户端中使用密文密碼 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何 Mutt 郵件客户端中使用密文密碼 | LCTT (201602) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201602/20151201 How to use Mutt email client with encrypted passwords","title":"如何 Mutt 郵件客户端中使用密文密碼","tag":"201602","desc":""},"relativePath":"201602/20151201 How to use Mutt email client with encrypted passwords.md","filePath":"[post].md"}'),m={name:"201602/20151201 How to use Mutt email client with encrypted passwords.md"};function g(d,t,G,M,P,f){const p=s("Link");return l(),i("div",null,[t[24]||(t[24]=o("h1",{id:"如何-mutt-郵件客户端中使用密文密碼",tabindex:"-1"},[e("如何 Mutt 郵件客户端中使用密文密碼 "),o("a",{class:"header-anchor",href:"#如何-mutt-郵件客户端中使用密文密碼","aria-label":"Permalink to “如何 Mutt 郵件客户端中使用密文密碼”"},"​")],-1)),o("p",null,[t[1]||(t[1]=e("Mutt 是一個 Linux/UNIX 終端環境下的開源的郵件客户端。Mutt 以及 ",-1)),n(p,{href:"http://xmodulo.com/gmail-command-line-linux-alpine.html"},{default:a(()=>[...t[0]||(t[0]=[e("Alpine",-1)])]),_:1}),t[2]||(t[2]=e(" 在 Linux 命令列愛好者中有着最忠誠的追隨者，這不是沒有原因的。想一下你所期待郵件客户端應有的功能，Mutt 擁有：多協議支持（例如，POP3、IMAP 和 SMTP），S/MIME 和 PGP/GPG 集成，會話線索，顏色標記，可定製宏/快捷鍵，等等。另外，基於命令列的 Mutt 相比粗重的基於瀏覽器的郵件客户端（如：Gmail，Ymail）或圖形用户界面的郵件客户端（如：Thunderbird，MS Outlook）而言，是一個使用電子郵件的輕量級替代品。",-1))]),t[25]||(t[25]=u(`<p>當你想使用 Mutt 通過公司的 SMTP/IMAP 服務器訪問或發送郵件，或取代網頁郵件服務，可能所關心的一個問題是如何保護您的郵件憑據（如：SMTP/IMAP 密碼），它們存儲在一個純文本 Mutt 配置文件（~/.muttrc）中。</p><p>對於這些人對安全的擔憂，確實有一個容易的方法來<strong>加密 Mutt 配置文件</strong>*，以防止這種風險。在這個教程中，我描述瞭如何加密 Mutt 敏感配置，比如使用 GnuPG（GPG）加密 SMTP/IMAP 密碼，GPG 是一個開源的 OpenPGP 實現。</p><h3 id="第一步-可選-創建-gpg-密鑰" tabindex="-1">第一步 （可選）：創建 GPG 密鑰 <a class="header-anchor" href="#第一步-可選-創建-gpg-密鑰" aria-label="Permalink to “第一步 （可選）：創建 GPG 密鑰”">​</a></h3><p>因為我們將要使用 GPG 加密 Mutt 配置文件，如果你沒有 GPG 密鑰，第一步就是創建一個（公鑰/私鑰對）。如果有，請忽略這步。</p><p>創建一個新 GPG 密鑰，輸入下面命令：</p><pre><code>$ gpg --gen-key
</code></pre><p>選擇密鑰類型（RSA），密鑰長度（2048 bits），和過期時間（0 代表不過期）。當出現用户 ID 提示時，輸入關聯到該公鑰/私鑰對的名字（Dan Nanni） 和郵箱地址（myemail@email.com）。最後，輸入一個密碼來保護你的私鑰。</p><p><img src="https://c2.staticflickr.com/6/5726/22808727824_7735f11157_c.jpg" alt=""></p><p>生成一個 GPG 密鑰需要大量的隨機字節來構成熵，所以在生成密鑰期間確保在你的系統上執行一些隨機行為（如：敲打鍵盤，移動鼠標或者讀寫磁盤）。根據密鑰長度，生成 GPG 密鑰要花幾分鐘或更多時間。</p><p><img src="https://c1.staticflickr.com/1/644/23328597612_6ac5a29944_c.jpg" alt=""></p><h3 id="第二步-加密-mutt-敏感配置" tabindex="-1">第二步：加密 Mutt 敏感配置 <a class="header-anchor" href="#第二步-加密-mutt-敏感配置" aria-label="Permalink to “第二步：加密 Mutt 敏感配置”">​</a></h3><p>下一步，在 ~/.mutt 目錄創建一個新的文本文件，然後把一些你想隱藏的 Mutt 敏感配置放進去。這個例子裏，我指定了 SMTP/IMAP 密碼。</p><pre><code>$ mkdir ~/.mutt
$ vi ~/.mutt/password
</code></pre><hr><pre><code>set smtp_pass=&quot;XXXXXXX&quot;
set imap_pass=&quot;XXXXXXX&quot;
</code></pre><p>現在通過 GPG 使用你的公鑰加密這個文件如下：</p><pre><code>$ gpg -r myemail@email.com -e ~/.mutt/password
</code></pre><p>這將創建 ~/.mutt/password.gpg，這是一個原始文件的 GPG 加密版本。</p><p>然後刪除 ~/.mutt/password，只保留 GPG 加密版本。</p><h3 id="第三步-創建完整-mutt-配置文件" tabindex="-1">第三步：創建完整 Mutt 配置文件 <a class="header-anchor" href="#第三步-創建完整-mutt-配置文件" aria-label="Permalink to “第三步：創建完整 Mutt 配置文件”">​</a></h3><p>現在你已經在一個單獨的文件放置了加密的 Mutt 敏感配置，你可以在 ~/.muttrc 指定其餘的 Mutt 配置。然後增加下面這行在 ~/.muttrc 末尾。</p><pre><code>source &quot;gpg -d ~/.mutt/password.gpg |&quot;
</code></pre><p>當你啓動 Mutt 時，這行將解密 ~/.mutt/password.gpg ，然後將解密內容應用到你的 Mutt 配置中。</p>`,23)),o("p",null,[t[4]||(t[4]=e("下面展示一個完整 Mutt 配置例子，這可以讓你通過 Mutt 訪問 Gmail，而沒有暴露你的 SMTP/IMAP 密碼。用你的 Gmail ID 替代下面的 ",-1)),t[5]||(t[5]=o("code",null,"yourgmailaccount",-1)),t[6]||(t[6]=e("，此外你也需要在",-1)),n(p,{href:"https://www.google.com/settings/u/1/security"},{default:a(()=>[...t[3]||(t[3]=[e("你的 Goolgle 賬户設置",-1)])]),_:1}),t[7]||(t[7]=e("中啓用“支持不太安全的應用訪問”。",-1))]),t[26]||(t[26]=u(`<pre><code>set from = &quot;yourgmailaccount@gmail.com&quot;
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
</code></pre><h3 id="第四步-可選-配置-gpg-代理" tabindex="-1">第四步（可選）：配置 GPG 代理 <a class="header-anchor" href="#第四步-可選-配置-gpg-代理" aria-label="Permalink to “第四步（可選）：配置 GPG 代理”">​</a></h3><p>這時候，你將可以使用加密了IMAP/SMTP 密碼的 Mutt。然而，每次你運行 Mutt，你都要先被提示輸入一個 GPG 密碼來使用你的私鑰解密 IMAP/SMTP 密碼。</p><p><img src="https://c2.staticflickr.com/6/5667/23437064775_20c874940f_c.jpg" alt=""></p><p>如果你想避免這樣的 GPG 密碼提示，你可以部署一個 gpg-agent。它以後台守護進程方式運行，gpg-agent 可以安全地緩存你的 GPG 密碼，無需手工干預，gpg 可以自動從 gpg-agent 獲得你的 GPG 密碼。如果你正在使用 Linux 桌面，你可以配置使用一些等同於 gpg-agent 的特定的桌面軟件，例如，GNOME 桌面的 gnome-keyring-daemon。</p><p>你可以在基於 Debian 系統安裝 gpg-agent：</p><pre><code>$ sudo apt-get install gpg-agent
</code></pre><p>gpg-agent 在基於 Red Hat 的系統上是預裝好的。</p><p>現在增加下面這些到你的 .bashrc 文件中。</p><pre><code>envfile=&quot;$HOME/.gnupg/gpg-agent.env&quot;
if [[ -e &quot;$envfile&quot; ]] &amp;&amp; kill -0 $(grep GPG_AGENT_INFO &quot;$envfile&quot; | cut -d: -f 2) 2&gt;/dev/null; then
    eval &quot;$(cat &quot;$envfile&quot;)&quot;
else
    eval &quot;$(gpg-agent --daemon --allow-preset-passphrase --write-env-file &quot;$envfile&quot;)&quot;
fi
export GPG_AGENT_INFO
</code></pre><p>重載 .bashrc，或簡單的登出然後重新登錄。</p><pre><code>$ source ~/.bashrc
</code></pre><p>現在確認 GPG_AGENT_INFO 環境變量已經設置妥當。</p><pre><code>$ echo $GPG_AGENT_INFO

/tmp/gpg-0SKJw8/S.gpg-agent:942:1
</code></pre><p>並且，當你輸入 gpg-agent 命令時，你應該看到下面的信息。</p><pre><code>$ gpg-agent

gpg-agent: gpg-agent running and available
</code></pre><p>一旦 gpg-agent 啓動運行，它將會在第一次提示你輸入密碼時緩存你的 GPG 密碼。隨後你多次運行 Mutt ，都不會被提示要 GPG 密碼（gpg-agent 一直開着，緩存就不會過期）。</p><p><img src="https://c1.staticflickr.com/1/664/22809928093_3be57698ce_c.jpg" alt=""></p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3>`,19)),o("p",null,[t[9]||(t[9]=e("在這個指導裏，我提供一個使用 GnuPG 加密如 SMTP/IMAP 密碼這樣的 Mutt 敏感配置的方法。注意，如果你想在 Mutt 上使用 GnuPG 來加密或簽名你的郵件，你可以參考",-1)),n(p,{href:"http://dev.mutt.org/trac/wiki/MuttGuide/UseGPG"},{default:a(()=>[...t[8]||(t[8]=[e("官方指南",-1)])]),_:1}),t[10]||(t[10]=e("關於 GPG 與 Mutt 結合的部分。",-1))]),t[27]||(t[27]=o("p",null,"如果你知道任何使用 Mutt 的安全技巧，歡迎分享它。",-1)),t[28]||(t[28]=o("hr",null,null,-1)),o("p",null,[t[12]||(t[12]=e("via: ",-1)),n(p,{href:"http://xmodulo.com/mutt-email-client-encrypted-passwords.html"},{default:a(()=>[...t[11]||(t[11]=[e("http://xmodulo.com/mutt-email-client-encrypted-passwords.html",-1)])]),_:1})]),o("p",null,[t[16]||(t[16]=e("作者：",-1)),n(p,{href:"http://xmodulo.com/author/nanni"},{default:a(()=>[...t[13]||(t[13]=[e("Dan Nanni",-1)])]),_:1}),t[17]||(t[17]=e(" 譯者：",-1)),n(p,{href:"https://github.com/wyangsun"},{default:a(()=>[...t[14]||(t[14]=[e("wyangsun",-1)])]),_:1}),t[18]||(t[18]=e(" 校對：",-1)),n(p,{href:"https://github.com/wxy"},{default:a(()=>[...t[15]||(t[15]=[e("wxy",-1)])]),_:1})]),o("p",null,[t[21]||(t[21]=e("本文由 ",-1)),n(p,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[19]||(t[19]=[e("LCTT",-1)])]),_:1}),t[22]||(t[22]=e(" 原創編譯，",-1)),n(p,{href:"https://linux.cn/"},{default:a(()=>[...t[20]||(t[20]=[e("Linux中國",-1)])]),_:1}),t[23]||(t[23]=e(" 榮譽推出",-1))])])}const w=r(m,[["render",g]]);export{c as __pageData,w as default};
