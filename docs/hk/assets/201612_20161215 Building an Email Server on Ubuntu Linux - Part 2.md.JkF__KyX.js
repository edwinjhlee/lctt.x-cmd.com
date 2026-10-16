import{_ as l,a0 as t,w as o,s as d,I as a,x as n,a1 as e,A as i,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"如何在 Ubuntu 環境下搭建郵件服務器（二） | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Ubuntu 環境下搭建郵件服務器（二） | LCTT (201612) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Ubuntu 環境下搭建郵件服務器（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Ubuntu 環境下搭建郵件服務器（二） | LCTT (201612) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201612/20161215 Building an Email Server on Ubuntu Linux - Part 2","title":"如何在 Ubuntu 環境下搭建郵件服務器（二）","tag":"201612","desc":""},"relativePath":"201612/20161215 Building an Email Server on Ubuntu Linux - Part 2.md","filePath":"[post].md"}'),r={name:"201612/20161215 Building an Email Server on Ubuntu Linux - Part 2.md"};function u(h,s,g,b,k,m){const p=t("Link");return o(),d("div",null,[s[22]||(s[22]=a("h1",{id:"如何在-ubuntu-環境下搭建郵件服務器-二",tabindex:"-1"},[n("如何在 Ubuntu 環境下搭建郵件服務器（二） "),a("a",{class:"header-anchor",href:"#如何在-ubuntu-環境下搭建郵件服務器-二","aria-label":"Permalink to “如何在 Ubuntu 環境下搭建郵件服務器（二）”"},"​")],-1)),s[23]||(s[23]=a("p",null,[a("img",{src:"https://www.linux.com/sites/lcom/files/styles/rendered_file/public/dovecot-email.jpg?itok=tY4veggw",alt:"Dovecot email",title:"Dovecot email"})],-1)),a("p",null,[s[1]||(s[1]=n("本教程的第 2 部分將介紹如何使用 Dovecot 將郵件從 Postfix 服務器移動到用户的收件箱。以",-1)),e(p,{href:"https://www.linux.com/licenses/category/creative-commons-zero"},{default:i(()=>[...s[0]||(s[0]=[n("Creative Commons Zero",-1)])]),_:1}),s[2]||(s[2]=n(" 方式授權發佈",-1))]),a("p",null,[s[4]||(s[4]=n("在",-1)),e(p,{href:"https://linux.cn/article-8071-1.html"},{default:i(()=>[...s[3]||(s[3]=[n("第一部分",-1)])]),_:1}),s[5]||(s[5]=n("中，我們安裝並測試了 Postfix SMTP 服務器。Postfix 或任何 SMTP 服務器都不是一個完整的郵件服務器，因為它所做的只是在 SMTP 服務器之間移動郵件。我們需要 Dovecot 將郵件從 Postfix 服務器移動到用户的收件箱中。",-1))]),s[24]||(s[24]=c(`<p>Dovecot 支持兩種標準郵件協議：IMAP（Internet 郵件訪問協議）和 POP3（郵局協議）。 IMAP 服務器會在服務器上保留所有郵件。您的用户可以選擇將郵件下載到計算機或僅在服務器上訪問它們。 IMAP 對於有多台機器的用户是方便的。但對你而言需要更多的工作，因為你必須確保你的服務器始終可用，而且 IMAP 服務器需要大量的存儲和內存。</p><p>POP3 是較舊的協議。POP3 服務器可以比 IMAP 服務器服務更多的用户，因為郵件會下載到用户的計算機。大多數郵件客户端可以選擇在服務器上保留一定天數的郵件，因此 POP3 的行為有點像 IMAP。但它又不是 IMAP，當你像 IMAP 那樣（在多台計算機上使用它時）那麼常常會下載多次或意外刪除。</p><h3 id="安裝-dovecot" tabindex="-1">安裝 Dovecot <a class="header-anchor" href="#安裝-dovecot" aria-label="Permalink to “安裝 Dovecot”">​</a></h3><p>啓動你的 Ubuntu 系統並安裝 Dovecot：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt-get install dovecot-imapd dovecot-pop3d</span></span></code></pre></div><p>它會安裝可用的配置，並在完成後自動啓動，你可以用 <code>ps ax | grep dovecot</code> 確認：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps ax | grep dovecot</span></span>
<span class="line"><span>15988 ?  Ss 0:00 /usr/sbin/dovecot</span></span>
<span class="line"><span>15990 ?  S  0:00 dovecot/anvil</span></span>
<span class="line"><span>15991 ?  S  0:00 dovecot/log</span></span></code></pre></div><p>打開你的 Postfix 配置文件 <code>/etc/postfix/main.cf</code>，確保配置了maildir 而不是 mbox 的郵件存儲方式，mbox 是給每個用户一個單一大文件，而 maildir 是每條消息都存儲為一個文件。大量的小文件比一個龐大的文件更穩定且易於管理。添加如下兩行，第二行告訴 Postfix 你需要 maildir 格式，並且在每個用户的家目錄下創建一個 <code>.Mail</code> 目錄。你可以取任何名字，不一定要是 <code>.Mail</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mail_spool_directory = /var/mail</span></span>
<span class="line"><span>home_mailbox = .Mail/</span></span></code></pre></div><p>現在調整你的 Dovecot 配置。首先把原始的 <code>dovecot.conf</code> 文件重命名放到一邊，因為它會調用存放在 <code>conf.d</code> 中的文件，在你剛剛開始學習時把配置放一起更簡單些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo mv /etc/dovecot/dovecot.conf /etc/dovecot/dovecot-oldconf</span></span></code></pre></div><p>現在創建一個新的 <code>/etc/dovecot/dovecot.conf</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>disable_plaintext_auth = no</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>注意 <code>mail_location = maildir</code> 必須和 <code>main.cf</code> 中的 <code>home_mailbox</code> 參數匹配。保存你的更改並重新加載 Postfix 和 Dovecot 配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo postfix reload</span></span>
<span class="line"><span>$ sudo dovecot reload</span></span></code></pre></div><h3 id="快速導出配置" tabindex="-1">快速導出配置 <a class="header-anchor" href="#快速導出配置" aria-label="Permalink to “快速導出配置”">​</a></h3><p>使用下面的命令來快速查看你的 Postfix 和 Dovecot 配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ postconf -n</span></span>
<span class="line"><span>$ doveconf -n</span></span></code></pre></div><h3 id="測試-dovecot" tabindex="-1">測試 Dovecot <a class="header-anchor" href="#測試-dovecot" aria-label="Permalink to “測試 Dovecot”">​</a></h3><p>現在再次啓動 telnet，並且給自己發送一條測試消息。粗體顯示的是你輸入的命令。<code>studio</code> 是我服務器的主機名，因此你必須用自己的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ telnet studio 25</span></span>
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
<span class="line"><span>Connection closed by foreign host.</span></span></code></pre></div><p>現在請求 Dovecot 來取回你的新消息，使用你的 Linux 用户名和密碼登錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
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
<span class="line"><span>Connection closed by foreign host.</span></span></code></pre></div><p>花一點時間比較第一個例子中輸入的消息和第二個例子中接收的消息。 返回地址和日期是很容易偽造的，但 Postfix 不會被愚弄。大多數郵件客户端默認顯示一個最小的標頭集，但是你需要讀取完整的標頭才能查看真實的回溯。</p><p>你也可以在你的 <code>~/Mail/cur</code> 目錄中查看你的郵件，它們是普通文本，我已經有兩封測試郵件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls .Mail/cur/</span></span>
<span class="line"><span>1480540325.V806I28e0229M351743.studio:2,S</span></span>
<span class="line"><span>1480555224.V806I28e000eM41463.studio:2,S</span></span></code></pre></div><h3 id="測試-imap" tabindex="-1">測試 IMAP <a class="header-anchor" href="#測試-imap" aria-label="Permalink to “測試 IMAP”">​</a></h3><p>我們 Dovecot 同時啓用了 POP3 和 IMAP 服務，因此讓我們使用 telnet 測試 IMAP。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ telnet studio imap2   </span></span>
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
<span class="line"><span>Connection closed by foreign host</span></span></code></pre></div><h3 id="thunderbird-郵件客户端" tabindex="-1">Thunderbird 郵件客户端 <a class="header-anchor" href="#thunderbird-郵件客户端" aria-label="Permalink to “Thunderbird 郵件客户端”">​</a></h3><p>圖 1 中的屏幕截圖顯示了我局域網上另一台主機上的圖形郵件客户端中的郵件。</p><p><img src="https://www.linux.com/sites/lcom/files/styles/rendered_file/public/thunderbird-mail.png?itok=IkWK5Ti_" alt="thunderbird mail" title="thunderbird mail"></p><p><em>圖1： Thunderbird mail</em></p><p>此時，你已有一個可以工作的 IMAP 和 POP3 郵件服務器，並且你也知道該如何測試你的服務器。你的用户可以在他們設置郵件客户端時選擇要使用的協議。如果您只想支持一個郵件協議，那麼只需要在您的 Dovecot 配置中留下你要的協議名字。</p>`,34)),a("p",null,[s[7]||(s[7]=n("然而，這還遠遠沒有完成。這是一個非常簡單、沒有加密的、大門敞開的安裝。它也只適用於與郵件服務器在同一系統上的用户。這是不可擴展的，並具有一些安全風險，例如沒有密碼保護。 我們會在",-1)),e(p,{href:"https://www.linux.com/learn/sysadmin/building-email-server-ubuntu-linux-part-3"},{default:i(()=>[...s[6]||(s[6]=[n("下篇",-1)])]),_:1}),s[8]||(s[8]=n("瞭解如何創建與系統用户分開的郵件用户，以及如何添加加密。",-1))]),s[25]||(s[25]=a("hr",null,null,-1)),a("p",null,[s[10]||(s[10]=n("via: ",-1)),e(p,{href:"https://www.linux.com/learn/sysadmin/building-email-server-ubuntu-linux-part-2"},{default:i(()=>[...s[9]||(s[9]=[n("https://www.linux.com/learn/sysadmin/building-email-server-ubuntu-linux-part-2",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),e(p,{href:"https://www.linux.com/users/cschroder"},{default:i(()=>[...s[11]||(s[11]=[n("CARLA SCHRODER",-1)])]),_:1}),s[15]||(s[15]=n(" 譯者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:i(()=>[...s[12]||(s[12]=[n("geekpi",-1)])]),_:1}),s[16]||(s[16]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[19]||(s[19]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[17]||(s[17]=[n("LCTT",-1)])]),_:1}),s[20]||(s[20]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[18]||(s[18]=[n("Linux中國",-1)])]),_:1}),s[21]||(s[21]=n(" 榮譽推出",-1))])])}const E=l(r,[["render",u]]);export{T as __pageData,E as default};
