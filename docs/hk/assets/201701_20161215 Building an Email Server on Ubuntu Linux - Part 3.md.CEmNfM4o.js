import{_ as e,a0 as t,w as o,s as d,I as p,x as a,a1 as i,A as l,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"如何在 Ubuntu 上搭建一台 Email 服務器（三） | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Ubuntu 上搭建一台 Email 服務器（三） | LCTT (201701) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Ubuntu 上搭建一台 Email 服務器（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Ubuntu 上搭建一台 Email 服務器（三） | LCTT (201701) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201701/20161215 Building an Email Server on Ubuntu Linux - Part 3","title":"如何在 Ubuntu 上搭建一台 Email 服務器（三）","tag":"201701","desc":""},"relativePath":"201701/20161215 Building an Email Server on Ubuntu Linux - Part 3.md","filePath":"[post].md"}'),c={name:"201701/20161215 Building an Email Server on Ubuntu Linux - Part 3.md"};function u(h,s,g,m,b,f){const n=t("Link");return o(),d("div",null,[s[25]||(s[25]=p("h1",{id:"如何在-ubuntu-上搭建一台-email-服務器-三",tabindex:"-1"},[a("如何在 Ubuntu 上搭建一台 Email 服務器（三） "),p("a",{class:"header-anchor",href:"#如何在-ubuntu-上搭建一台-email-服務器-三","aria-label":"Permalink to “如何在 Ubuntu 上搭建一台 Email 服務器（三）”"},"​")],-1)),s[26]||(s[26]=p("p",null,[p("img",{src:"https://www.linux.com/sites/lcom/files/styles/rendered_file/public/mail-server.jpg?itok=Ox1SCDsV",alt:"Mail server",title:"Mail server"})],-1)),s[27]||(s[27]=p("p",null,"在本系列的最後，我們將詳細介紹如何在 Dovecot 和 Postfix 中設置虛擬用户和郵箱。",-1)),p("p",null,[s[2]||(s[2]=a("歡迎回來，熱心的 Linux 系統管理員們！ 在本系列的",-1)),i(n,{href:"https://linux.cn/article-8071-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("第一部分",-1)])]),_:1}),s[3]||(s[3]=a("和",-1)),i(n,{href:"https://linux.cn/article-8077-1.html"},{default:l(()=>[...s[1]||(s[1]=[a("第二部分",-1)])]),_:1}),s[4]||(s[4]=a("中，我們學習瞭如何將 Postfix 和 Dovecot 組合在一起，搭建一個不錯的 IMAP 和 POP3 郵件服務器。 現在我們將學習設置虛擬用户，以便我們可以管理所有 Dovecot 中的用户。",-1))]),s[28]||(s[28]=r(`<h3 id="抱歉-還不能配置-ssl" tabindex="-1">抱歉，還不能配置 SSL <a class="header-anchor" href="#抱歉-還不能配置-ssl" aria-label="Permalink to “抱歉，還不能配置 SSL”">​</a></h3><p>我知道我答應過教你們如何設置一個受 SSL 保護的服務器。 不幸的是，我低估了這個話題的範圍。 所以，我會下個月再寫一個全面的教程。</p><p>今天，在本系列的最後一部分中，我們將詳細介紹如何在 Dovecot 和 Postfix 中設置虛擬用户和郵箱。 在你看來這是有點奇怪，所以我儘量讓下面的例子簡單點。我們將使用純文本文件和純文本來進行身份驗證。 你也可以選擇使用資料庫後端和較強的加密認證形式，具體請參閲文末鏈接瞭解有關這些的更多信息。</p><h3 id="虛擬用户" tabindex="-1">虛擬用户 <a class="header-anchor" href="#虛擬用户" aria-label="Permalink to “虛擬用户”">​</a></h3><p>我們希望郵件服務器上用的是虛擬用户而不是 Linux 系統用户。使用 Linux 系統用户不能擴展，並且它們會暴露系統登錄賬號，給你的服務器帶來不必要的風險。 設置虛擬用户需要在 Postfix 和 Dovecot 中編輯配置文件。我們將從 Postfix 開始。首先，我們將從一個乾淨、簡化的 <code>/etc /postfix/main.cf</code> 開始。移動你原始的 <code>main.cf</code> 到別處做個備份，創建一個新的乾淨的文件，內容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>compatibility_level=2</span></span>
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
<span class="line"><span>virtual_transport = lmtp:unix:private/dovecot-lmtp0</span></span></code></pre></div><p>你可以直接拷貝這份文件，除了 <code>mynetworks</code> 參數的設置 <code>192.168.0.0/24</code>，它應該是你的本地子網掩碼。</p><p>接下來，創建用户和組 <code>vmail</code> 來擁有你的虛擬郵箱。虛擬郵箱保存在  <code>vmail</code> 的家目錄下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo groupadd -g 5000 vmail</span></span>
<span class="line"><span>$ sudo useradd -m -u 5000 -g 5000 -s /bin/bash vmail</span></span></code></pre></div><p>接下來重新加載 Postfix 配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo postfix reload</span></span>
<span class="line"><span>[sudo] password for carla: </span></span>
<span class="line"><span>postfix/postfix-script: refreshing the Postfix mail system</span></span></code></pre></div><h3 id="dovecot-虛擬用户" tabindex="-1">Dovecot 虛擬用户 <a class="header-anchor" href="#dovecot-虛擬用户" aria-label="Permalink to “Dovecot 虛擬用户”">​</a></h3><p>我們會使用 Dovecot 的 <code>lmtp</code> 協議來連接到 Postfix。你可以這樣安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt-get install dovecot-lmtpd</span></span></code></pre></div><p><code>main.cf</code> 的最後一行涉及到 <code>lmtp</code>。複製這個 <code>/etc/dovecot/dovecot.conf</code> 示例文件來替換已存在的文件。再説一次，我們只使用這一個文件，而不是 <code>/etc/dovecot/conf.d</code> 內的所有文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>protocols = imap pop3 lmtp</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>最後，你可以創建一個含有用户和密碼的文件 <code>/etc/dovecot/passwd</code>。對於純文本驗證，我們只需要用户的完整郵箱地址和密碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alrac@studio:{PLAIN}password</span></span>
<span class="line"><span>layla@studio:{PLAIN}password</span></span>
<span class="line"><span>fred@studio:{PLAIN}password</span></span>
<span class="line"><span>molly@studio:{PLAIN}password</span></span>
<span class="line"><span>benny@studio:{PLAIN}password</span></span></code></pre></div><p>Dovecot 虛擬用户獨立於 Postfix 虛擬用户，因此你需要管理 Dovecot 中的用户。保存所有的設置並重啓 Postfix 和 Dovecot：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo service postfix restart</span></span>
<span class="line"><span>$ sudo service dovecot restart</span></span></code></pre></div><p>現在讓我們使用老朋友 telnet 來看下 Dovecot 是否設置正確。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ telnet studio 110</span></span>
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
<span class="line"><span>Connection closed by foreign host.</span></span></code></pre></div><p>現在一切都好！讓我們用 <code>mail</code> 命令，發送測試消息給我們的用户。確保使用用户的完整電子郵箱地址而不只是用户名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mail benny@studio</span></span>
<span class="line"><span>Subject: hello and welcome!</span></span>
<span class="line"><span>Please enjoy your new mail account!</span></span>
<span class="line"><span>.</span></span></code></pre></div><p>最後一行的<strong>英文句點</strong>表示發送消息。讓我們看下它是否到達了正確的郵箱。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ls -al /home/vmail/studio/benny@studio/.Mail/new</span></span>
<span class="line"><span>total 16</span></span>
<span class="line"><span>drwx------ 2 vmail vmail 4096 Dec 14 12:39 .</span></span>
<span class="line"><span>drwx------ 5 vmail vmail 4096 Dec 14 12:39 ..</span></span>
<span class="line"><span>-rw------- 1 vmail vmail  525 Dec 14 12:39 1481747995.M696591P5790.studio,S=525,W=540</span></span></code></pre></div><p>找到了。這是一封我們可以閲讀的純文本文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ less 1481747995.M696591P5790.studio,S=525,W=540</span></span>
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
<span class="line"><span>Please enjoy your new mail account!</span></span></code></pre></div><p>你還可以使用 telnet 進行測試，如本系列前面部分所述，並在你最喜歡的郵件客户端中設置帳户，如 Thunderbird，Claws-Mail 或 KMail。</p><h3 id="故障排查" tabindex="-1">故障排查 <a class="header-anchor" href="#故障排查" aria-label="Permalink to “故障排查”">​</a></h3><p>當郵件工作不正常時，請檢查日誌文件（請參閲配置示例），然後運行 <code>journalctl -xe</code>。 這時會提供定位輸入錯誤、未安裝包和可以 Google 的短語等所有需要的信息。</p><h3 id="接下來" tabindex="-1">接下來？ <a class="header-anchor" href="#接下來" aria-label="Permalink to “接下來？”">​</a></h3>`,32)),p("p",null,[s[8]||(s[8]=a("假設你的 LAN 名稱服務配置正確，你現在有一台很好用的 LAN 郵件服務器。 顯然，以純文本發送消息不是最佳的，不支持互聯網的郵件也是絕對不可以的。 請參閲 ",-1)),i(n,{href:"http://wiki.dovecot.org/SSL/DovecotConfiguration"},{default:l(()=>[...s[5]||(s[5]=[a("Dovecot SSL 配置",-1)])]),_:1}),s[9]||(s[9]=a("和 ",-1)),i(n,{href:"http://www.postfix.org/TLS_README.html"},{default:l(()=>[...s[6]||(s[6]=[a("Postfix TLS 支持",-1)])]),_:1}),s[10]||(s[10]=a("，",-1)),i(n,{href:"http://wiki2.dovecot.org/HowTo/VirtualUserFlatFilesPostfix"},{default:l(()=>[...s[7]||(s[7]=[a("VirtualUserFlatFilesPostfix",-1)])]),_:1}),s[11]||(s[11]=a(" 涵蓋了 TLS 和資料庫後端。並請期待我之後的 SSL 指南。這次我説的是真的。",-1))]),s[29]||(s[29]=p("hr",null,null,-1)),p("p",null,[s[13]||(s[13]=a("via: ",-1)),i(n,{href:"https://www.linux.com/learn/sysadmin/building-email-server-ubuntu-linux-part-3"},{default:l(()=>[...s[12]||(s[12]=[a("https://www.linux.com/learn/sysadmin/building-email-server-ubuntu-linux-part-3",-1)])]),_:1})]),p("p",null,[s[17]||(s[17]=a("作者：",-1)),i(n,{href:"https://www.linux.com/users/cschroder"},{default:l(()=>[...s[14]||(s[14]=[a("CARLA SCHRODER",-1)])]),_:1}),s[18]||(s[18]=a(" 譯者：",-1)),i(n,{href:"https://github.com/geekpi"},{default:l(()=>[...s[15]||(s[15]=[a("geekpi",-1)])]),_:1}),s[19]||(s[19]=a(" 校對：",-1)),i(n,{href:"https://github.com/jasminepeng"},{default:l(()=>[...s[16]||(s[16]=[a("jasminepeng",-1)])]),_:1})]),p("p",null,[s[22]||(s[22]=a("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[20]||(s[20]=[a("LCTT",-1)])]),_:1}),s[23]||(s[23]=a(" 原創編譯，",-1)),i(n,{href:"https://linux.cn/"},{default:l(()=>[...s[21]||(s[21]=[a("Linux中國",-1)])]),_:1}),s[24]||(s[24]=a(" 榮譽推出",-1))])])}const y=e(c,[["render",u]]);export{x as __pageData,y as default};
