import{_ as t,a0 as o,w as c,s as d,ao as l,I as i,x as a,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"我的個人電子郵件系統設置：notmuch、mbsync、Postfix 和 dovecot | LCTT x X-CMD","titleTemplate":false,"description":"我的個人電子郵件系統設置：notmuch、mbsync、Postfix 和 dovecot | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"我的個人電子郵件系統設置：notmuch、mbsync、Postfix 和 dovecot | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"我的個人電子郵件系統設置：notmuch、mbsync、Postfix 和 dovecot | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20171223 My personal Email setup - Notmuch, mbsync, postfix and dovecot","title":"我的個人電子郵件系統設置：notmuch、mbsync、Postfix 和 dovecot","tag":"201812","desc":""},"relativePath":"201812/20171223 My personal Email setup - Notmuch, mbsync, postfix and dovecot.md","filePath":"[post].md"}'),r={name:"201812/20171223 My personal Email setup - Notmuch, mbsync, postfix and dovecot.md"};function h(m,s,u,g,f,y){const n=o("Link");return c(),d("div",null,[s[18]||(s[18]=l(`<h1 id="我的個人電子郵件系統設置-notmuch、mbsync、postfix-和-dovecot" tabindex="-1">我的個人電子郵件系統設置：notmuch、mbsync、Postfix 和 dovecot <a class="header-anchor" href="#我的個人電子郵件系統設置-notmuch、mbsync、postfix-和-dovecot" aria-label="Permalink to “我的個人電子郵件系統設置：notmuch、mbsync、Postfix 和 dovecot”">​</a></h1><p>我使用個人電子郵件系統已經相當長的時間了，但是一直沒有記錄過文檔。最近我換了我的筆記本電腦（職業變更導致的變動），我在試圖重新創建本地郵件系統時迷茫了。所以這篇文章是一個給自己看的文檔，這樣我就不用費勁就能再次搭建出來。</p><h3 id="服務器端" tabindex="-1">服務器端 <a class="header-anchor" href="#服務器端" aria-label="Permalink to “服務器端”">​</a></h3><p>我運行自己的郵件服務器，並使用 Postfix 作為 SMTP 服務器，用 Dovecot 實現 IMAP。我不打算詳細介紹如何配置這些設置，因為我的設置主要是通過使用 Jonas 為 Redpill 基礎架構創建的腳本完成的。什麼是 Redpill？（用 Jonas 自己的話説）：</p><blockquote><p>&lt;jonas&gt; Redpill 是一個概念：一種設置 Debian hosts 去跨組織協作的方式</p><p>&lt;jonas&gt; 我發展了這個概念，並將其首次用於 Redpill 網中網：redpill.dk，其中涉及到了我自己的網絡（jones.dk），我的主要客户的網絡（homebase.dk），一個包括 Skolelinux Germany（free-owl.de）的在德國的網絡，和 Vasudev 的網絡（copyninja.info）</p></blockquote><p>除此之外， 我還有一個 dovecot sieve 過濾，根據郵件的來源，對郵件進行高級分類，將其放到各種文件夾中。所有的規則都存在於每個有郵件地址的賬户下的 <code>~/dovecot.sieve</code> 文件中。</p><p>再次，我不會詳細介紹如何設置這些東西，因為這不是我這個帖子的目標。</p><h3 id="在我的筆記本電腦上" tabindex="-1">在我的筆記本電腦上 <a class="header-anchor" href="#在我的筆記本電腦上" aria-label="Permalink to “在我的筆記本電腦上”">​</a></h3><p>在我的筆記本電腦上，我已經按照 4 個部分設置</p><ol><li>郵件同步：使用 <code>mbsync</code> 命令完成</li><li>分類：使用 notmuch 完成</li><li>閲讀：使用 notmuch-emacs 完成</li><li>郵件發送：使用作為中繼服務器和 SMTP 客户端運行的 Postfix 完成。</li></ol><h3 id="郵件同步" tabindex="-1">郵件同步 <a class="header-anchor" href="#郵件同步" aria-label="Permalink to “郵件同步”">​</a></h3><p>郵件同步是使用 <code>mbsync</code> 工具完成的， 我以前是 OfflineIMAP 的用户，最近切換到 <code>mbsync</code>，因為我覺得它比 OfflineIMAP 的配置更輕量、更簡單。該命令是由 isync 包提供的。</p><p>配置文件是 <code>~/.mbsyncrc</code>。下面是我的例子與一些個人設置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>IMAPAccount  copyninja</span></span>
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
<span class="line"><span>Sync All</span></span></code></pre></div><p>對上述配置中的一些有趣部分進行一下説明。一個是 PassCmd，它允許你提供 shell 命令來獲取帳户的密碼。這樣可以避免在配置文件中填寫密碼。我使用 gpg 的對稱加密，並在我的磁盤上存儲密碼。這當然是由 Unix ACL 保護安全的。</p><p>實際上，我想使用我的公鑰來加密文件，但當腳本在後台或通過 systemd 運行時，解鎖文件看起來很困難 （或者説幾乎不可能）。如果你有更好的建議，我洗耳恭聽:-)。</p><p>下一個指令部分是 Patterns。這使你可以有選擇地同步來自郵件服務器的郵件。這對我來説真的很有幫助，可以排除所有的 “[Gmail]/ folders” 垃圾目錄。</p><h3 id="郵件分類" tabindex="-1">郵件分類 <a class="header-anchor" href="#郵件分類" aria-label="Permalink to “郵件分類”">​</a></h3><p>一旦郵件到達你的本地設備，我們需要一種方法來輕鬆地在郵件讀取器中讀取郵件。我最初的設置使用本地 dovecot 實例提供同步的 Maildir，並在 Gnus 中閲讀。這種設置相比於設置所有的服務器軟件是有點大題小作，但 Gnus 無法很好地應付 Maildir 格式，這是最好的方法。這個設置也有一個缺點，那就是在你快速搜索郵件時，要搜索大量郵件。而這就是 notmuch 的用武之地。</p><p>notmuch 允許我輕鬆索引上千兆字節的郵件檔案而找到我需要的東西。我已經創建了一個小腳本，它結合了執行 <code>mbsync</code> 和 <code>notmuch</code>。我使用 dovecot sieve 來基於實際上創建在服務器端的 Maildirs 標記郵件。下面是我的完整 shell 腳本，它執行同步分類和刪除垃圾郵件的任務。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/sh</span></span>
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
<span class="line"><span>done</span></span></code></pre></div><p>因此，在運行 <code>mbsync</code> 之前，我搜索所有標記為“deleted”的郵件，並將其從系統中刪除。接下來，我在我的帳户上查找標記為“Spam”的郵件，並將其移動到“Spam”文件夾。你沒看錯，這些郵件逃脱了垃圾郵件過濾器進入到我的收件箱，並被我親自標記為垃圾郵件。</p><p>運行 <code>mbsync</code> 後，我基於它們的文件夾標記郵件（搜索字符串 <code>folder:</code>）。這讓我可以很容易地得到一個郵件列表的內容，而不需要記住列表地址。</p><h3 id="閲讀郵件" tabindex="-1">閲讀郵件 <a class="header-anchor" href="#閲讀郵件" aria-label="Permalink to “閲讀郵件”">​</a></h3>`,24)),i("p",null,[s[1]||(s[1]=a("現在，我們已經實現同步和分類郵件，是時候來設置閲讀部分。我使用 notmuch-emacs 界面來閲讀郵件。我使用 emacs 的 Spacemacs 風格，所以我花了一些時間寫了一個私有層，它將我所有的快捷鍵和分類集中在一個地方，而不會擾亂我的整個 ",-1)),s[2]||(s[2]=i("code",null,".spacemacs",-1)),s[3]||(s[3]=a(" 文件。你可以在 ",-1)),p(n,{href:"https://source.copyninja.info/notmuch-emacs-layer.git/"},{default:e(()=>[...s[0]||(s[0]=[a("notmuch-emacs-layer 倉庫",-1)])]),_:1}),s[4]||(s[4]=a(" 找到我的私有層的代碼。",-1))]),s[19]||(s[19]=l(`<h3 id="發送郵件" tabindex="-1">發送郵件 <a class="header-anchor" href="#發送郵件" aria-label="Permalink to “發送郵件”">​</a></h3><p>能閲讀郵件這還不夠，我們也需要能夠回覆郵件。而這是最近是我感到迷茫的一個略顯棘手的部分，以至於不得不寫這篇文章，這樣我就不會再忘記了。（當然也不必在網絡上參考一些過時的帖子。）</p><p>我的系統發送郵件使用 Postfix 作為 SMTP 客户端，使用我自己的 SMTP 服務器作為它的中繼主機。中繼的問題是，它不能是具有動態 IP 的主機。有兩種方法可以允許具有動態 IP 的主機使用中繼服務器， 一種是將郵件來源的 IP 地址放入 <code>my_network</code> 或第二個使用 SASL 身份驗證。</p><p>我的首選方法是使用 SASL 身份驗證。為此，我首先要為每台機器創建一個單獨的賬户，它將把郵件中繼到我的主服務器上。想法是不使用我的主帳户 SASL 進行身份驗證。（最初我使用的是主賬户，但 Jonas 給出了可行的按賬户的想法）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>adduser &lt;hostname&gt;_relay</span></span></code></pre></div><p>這裏替換 <code>&lt;hostname&gt;</code> 為你的筆記本電腦的名稱或任何你正在使用的設備。現在我們需要調整 Postfix 作為中繼服務器。因此，在 Postfix 配置中添加以下行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># SASL authentication</span></span>
<span class="line"><span>smtp_sasl_auth_enable = yes</span></span>
<span class="line"><span>smtp_tls_security_level = encrypt</span></span>
<span class="line"><span>smtp_sasl_tls_security_options = noanonymous</span></span>
<span class="line"><span>relayhost = [smtp.copyninja.info]:submission</span></span>
<span class="line"><span>smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd</span></span></code></pre></div><p>因此， 這裏的 <code>relayhost</code> 是用於將郵件轉發到互聯網的 Postfix 實例的服務器名稱。<code>submission</code> 的部分 Postfix 將郵件轉發到端口 587（安全端口）。<code>smtp_sasl_tls_security_options</code> 設置為不允許匿名連接。這是必須的，以便中繼服務器信任你的移動主機，並同意為你轉發郵件。</p><p><code>/etc/postfix/sasl_passwd</code> 是你需要存儲用於服務器 SASL 身份驗證的帳户密碼的文件。將以下內容放入其中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[smtp.example.com]:submission user:password</span></span></code></pre></div><p>用你已放入 <code>relayhost</code> 配置的 SMTP 服務器名稱替換 <code>smtp.example.com</code>。用你創建的 <code>&lt;hostname&gt;_relay</code> 用户及其密碼替換 <code>user</code> 和 <code>passwd</code>。</p><p>若要保護 <code>sasl_passwd</code> 文件，併為 Postfix 創建它的哈希文件，使用以下命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chown root:root /etc/postfix/sasl_passwd</span></span>
<span class="line"><span>chmod 0600 /etc/postfix/sasl_passwd</span></span>
<span class="line"><span>postmap /etc/postfix/sasl_passwd</span></span></code></pre></div><p>最後一條命令將創建 <code>/etc/postfix/sasl_passwd.db</code> 文件，它是你的文件的 <code>/etc/postfix/sasl_passwd</code> 的哈希文件，具有相同的所有者和權限。現在重新加載 Postfix，並使用 <code>mail</code> 命令檢查郵件是否從你的系統中發出。</p><h3 id="bonus-的部分" tabindex="-1">Bonus 的部分 <a class="header-anchor" href="#bonus-的部分" aria-label="Permalink to “Bonus 的部分”">​</a></h3><p>好吧，因為我有一個腳本創建以上結合了郵件的同步和分類。我繼續創建了一個 systemd 計時器，以定期同步後台的郵件。就我而言，每 10 分鐘一次。下面是 <code>mailsync.timer</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[Unit]</span></span>
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
<span class="line"><span>WantedBy=default.target</span></span></code></pre></div><p>下面是 mailsync.service 服務，這是 mailsync.timer 執行我們的腳本所需要的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Check Mail</span></span>
<span class="line"><span>RefuseManualStart=no</span></span>
<span class="line"><span>RefuseManualStop=yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=oneshot</span></span>
<span class="line"><span>ExecStart=/usr/local/bin/mail-sync</span></span>
<span class="line"><span>StandardOutput=syslog</span></span>
<span class="line"><span>StandardError=syslog</span></span></code></pre></div><p>將這些文件置於 <code>/etc/systemd/user</code> 目錄下並運行以下代碼去開啓它們：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemctl enable --user mailsync.timer</span></span>
<span class="line"><span>systemctl enable --user mailsync.service</span></span>
<span class="line"><span>systemctl start --user mailsync.timer</span></span></code></pre></div><p>這就是我從系統同步和發送郵件的方式。我從 Jonas Smedegaard 那裏瞭解到了 afew，他審閲了這篇帖子。因此， 下一步， 我將嘗試使用 afew 改進我的 notmuch 配置，當然還會有一個後續的帖子:-)。</p><hr>`,23)),i("p",null,[s[6]||(s[6]=a("via: ",-1)),p(n,{href:"https://copyninja.info/blog/email_setup.html"},{default:e(()=>[...s[5]||(s[5]=[a("https://copyninja.info/blog/email_setup.html",-1)])]),_:1})]),i("p",null,[s[10]||(s[10]=a("作者：",-1)),p(n,{href:"https://copyninja.info"},{default:e(()=>[...s[7]||(s[7]=[a("copyninja",-1)])]),_:1}),s[11]||(s[11]=a(" 譯者：",-1)),p(n,{href:"https://github.com/lixinyuxx"},{default:e(()=>[...s[8]||(s[8]=[a("lixinyuxx",-1)])]),_:1}),s[12]||(s[12]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[9]||(s[9]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[15]||(s[15]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[13]||(s[13]=[a("LCTT",-1)])]),_:1}),s[16]||(s[16]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[14]||(s[14]=[a("Linux中國",-1)])]),_:1}),s[17]||(s[17]=a(" 榮譽推出",-1))])])}const x=t(r,[["render",h]]);export{v as __pageData,x as default};
