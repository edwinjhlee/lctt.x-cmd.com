import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as p,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"使用 Mailmerge 發送定製郵件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Mailmerge 發送定製郵件 | LCTT (202007) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Mailmerge 發送定製郵件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Mailmerge 發送定製郵件 | LCTT (202007) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202007/20190808 Sending custom emails with Python","title":"使用 Mailmerge 發送定製郵件","tag":"202007","desc":""},"relativePath":"202007/20190808 Sending custom emails with Python.md","filePath":"[post].md"}'),g={name:"202007/20190808 Sending custom emails with Python.md"};function m(u,s,c,f,b,h){const e=o("Link");return r(),d("div",null,[s[51]||(s[51]=a("h1",{id:"使用-mailmerge-發送定製郵件",tabindex:"-1"},[n("使用 Mailmerge 發送定製郵件 "),a("a",{class:"header-anchor",href:"#使用-mailmerge-發送定製郵件","aria-label":"Permalink to “使用 Mailmerge 發送定製郵件”"},"​")],-1)),s[52]||(s[52]=a("blockquote",null,[a("p",null,"Mailmerge 是一個可以定製羣發郵件的命令列程序，它可以處理簡單和複雜的郵件。")],-1)),s[53]||(s[53]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202007/25/233710lqkvko0jdbh1jzul.jpg",alt:""})],-1)),s[54]||(s[54]=a("p",null,"電子郵件還是生活的一部分，儘管有種種不足，它仍然是大多數人發送信息的最佳方式，尤其是在按隊列將郵件發送給收件人的自動化方式中。",-1)),a("p",null,[s[2]||(s[2]=n("作為 ",-1)),p(e,{href:"https://docs.fedoraproject.org/en-US/council/fcaic/"},{default:l(()=>[...s[0]||(s[0]=[n("Fedora 社區行動和影響協調員",-1)])]),_:1}),s[3]||(s[3]=n("，我的工作之一就是給人們發送資助旅行相關的好消息，我經常通過電子郵件做這些事。這裏，我將給你展示如何使用 ",-1)),p(e,{href:"https://github.com/awdeorio/mailmerge"},{default:l(()=>[...s[1]||(s[1]=[n("Mailmerge",-1)])]),_:1}),s[4]||(s[4]=n(" 向一羣人發送定製郵件的，Mailmerge 是一個可以處理簡單和複雜的郵件的命令列程序。",-1))]),s[55]||(s[55]=a("h3",{id:"安裝-mailmerge",tabindex:"-1"},[n("安裝 Mailmerge "),a("a",{class:"header-anchor",href:"#安裝-mailmerge","aria-label":"Permalink to “安裝 Mailmerge”"},"​")],-1)),a("p",null,[s[6]||(s[6]=n("在 Fedora 中，Mailmerge 已經打包可用，你可以通過在命令列中運行 ",-1)),s[7]||(s[7]=a("code",null,"sudo dnf install python3-mailmerge",-1)),s[8]||(s[8]=n(" 來安裝它。你還可以使用 ",-1)),s[9]||(s[9]=a("code",null,"pip",-1)),s[10]||(s[10]=n(" 命令從 PyPi 中安裝，具體可以參閲該項目的 ",-1)),p(e,{href:"https://github.com/awdeorio/mailmerge#install"},{default:l(()=>[...s[5]||(s[5]=[n("README",-1)])]),_:1}),s[11]||(s[11]=n("。",-1))]),s[56]||(s[56]=i(`<h3 id="配置-mailmerge" tabindex="-1">配置 Mailmerge <a class="header-anchor" href="#配置-mailmerge" aria-label="Permalink to “配置 Mailmerge”">​</a></h3><p>三個配置文件控制着 Mailmerge 的工作模式。運行 <code>mailmerge --sample</code>，將生成配置文件模板。這些文件包括：</p><ul><li><code>mailmerge_server.conf:</code> 這裏保存着 SMTP 服務端郵件發送相關詳細配置，但你的密碼 <em>不</em> 在這裏保存。</li><li><code>mailmerge_database.csv:</code> 這裏保存每封郵件的定製數據，包括收件人的電子郵件地址。</li><li><code>mailmerge_template.txt:</code> 這裏保存電子郵件的文本，文本中包含佔位符，這些佔位符會使用 <code>mailmerge_database.csv</code> 中的數據替換。</li></ul><h4 id="server-conf" tabindex="-1">Server.conf <a class="header-anchor" href="#server-conf" aria-label="Permalink to “Server.conf”">​</a></h4><p>配置模板文件 <code>mailmerge_server.conf</code> 包含幾個大家應該很熟悉的例子。如果你曾經往手機上添加過電子郵件或者設置過桌面電子郵件客户端，那你就應該看到過這些數據。需要提醒的是要記得把你的用户名更新到這個文件中，尤其是在你使用模板所提供的配置時。</p><h4 id="database-csv" tabindex="-1">Database.csv <a class="header-anchor" href="#database-csv" aria-label="Permalink to “Database.csv”">​</a></h4><p><code>mailmerge_database.csv</code> 這個配置文件稍微有點複雜。最起碼要將郵件接收者的電子郵件地址保存在這裏，其它在電子郵件中任何需要替換的定製信息也要保存在這裏。推薦在創建本文件的佔位符列表時，同步編輯 <code>mailmerge_template.txt</code> 文件。我發現一個有效的做法是，使用電子表格軟件錄入這些數據，完成後導出為 CSV 文件。使用下面的示例文件:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>email,name,number</span></span>
<span class="line"><span>myself@mydomain.com,&quot;Myself&quot;,17</span></span>
<span class="line"><span>bob@bobdomain.com,&quot;Bob&quot;,42</span></span></code></pre></div><p>可以你向這兩個人發送電子郵件，使用他們的名字並告訴他們一個數字。這個示例文件雖然不是特別有趣，但應用了一個重要的原則，那就是：始終讓自己處於郵件接收列表的首位。這樣你可以在向列表全員發送郵件之前，先給自己發送一個測試郵件，以驗證郵件的效果是否如你預期。</p>`,9)),a("p",null,[s[13]||(s[13]=n("任何包含半角逗號的值，都 ",-1)),s[14]||(s[14]=a("strong",null,"必須",-1)),s[15]||(s[15]=n(" 以半角雙引號（",-1)),s[16]||(s[16]=a("code",null,'"',-1)),s[17]||(s[17]=n("）封閉。如果恰好在半角雙引號封閉的區域需要有一個半角雙引號，那就在同一行中連續使用兩個半角雙引號。引號的規則比較有趣，去 ",-1)),p(e,{href:"https://docs.python.org/3/library/csv.html"},{default:l(()=>[...s[12]||(s[12]=[n("Python 3 中關於 CSV 的內容中",-1)])]),_:1}),s[18]||(s[18]=n(" 一探究竟吧。",-1))]),s[57]||(s[57]=a("h4",{id:"template-txt",tabindex:"-1"},[n("Template.txt "),a("a",{class:"header-anchor",href:"#template-txt","aria-label":"Permalink to “Template.txt”"},"​")],-1)),a("p",null,[s[20]||(s[20]=n("我的工作之一，就是為我們 Fedora 貢獻者會議 ",-1)),p(e,{href:"https://flocktofedora.org/"},{default:l(()=>[...s[19]||(s[19]=[n("Flock",-1)])]),_:1}),s[21]||(s[21]=n(" 發送與旅行基金有關的信息。通過簡單的郵件告訴有關的人，他被選中為旅行基金支持的幸運者，以及相應基金支持的詳細信息。與接收者相關的具體信息之一就是我們可以為他的旅行提供多少資助。下面是一份我的節略後的模板文件（為了簡潔，已經移除大量的文本）：",-1))]),s[58]||(s[58]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat mailmerge_template.txt</span></span>
<span class="line"><span>TO: {{Email}}</span></span>
<span class="line"><span>SUBJECT: Flock 2019 Funding Offer</span></span>
<span class="line"><span>FROM: Brian Exelbierd &lt;bexelbie@redhat.com&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hi {{Name}},</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>I am writing you on behalf of the Flock funding committee.  You requested funding for your attendance at Flock.  After careful consideration we are able to offer you the following funding:</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Travel Budget: {{Travel_Budget}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt;snip&gt;&gt;</span></span></code></pre></div><p>模板的起頭定義了郵件的接收者、發送者和主題。在空行之後，是郵件的內容。該郵件需要從 <code>database.csv</code> 文件中獲取接收者的 <code>Email</code> 、<code>Name</code> 和 <code>Travel_Budget</code> 。注意，上述這些佔位符是由雙大括弧（ <code>{{</code>、<code>}}</code> ）封閉的。相應的 <code>mailmerge_database.csv</code> 如下:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat mailmerge_database.csv</span></span>
<span class="line"><span>Name,Email,Travel_Budget</span></span>
<span class="line"><span>Brian,bexelbie@redhat.com,1000</span></span>
<span class="line"><span>PersonA,persona@fedoraproject.org,1500</span></span>
<span class="line"><span>PèrsonB,personb@fedoraproject.org,500</span></span></code></pre></div><p>注意，我把自己的信息放在了首條，這是為了測試方便。除了我，還有另外兩個人的信息在文檔中。列表中的第二個人 PèrsonB，他的名字中有一個包含變音符號的字母，Mailmerge 會對這類字母自動編碼。</p><p>以上包含了模板的全部知識點：寫上你自己的電子郵件信息，並編寫好以雙大括弧封閉的佔位符。接下來創建用來提供前述佔位符具體值的數據文件。現在測試一下電子郵件的效果。</p><h3 id="測試併發送簡單郵件" tabindex="-1">測試併發送簡單郵件 <a class="header-anchor" href="#測試併發送簡單郵件" aria-label="Permalink to “測試併發送簡單郵件”">​</a></h3><h4 id="試運行" tabindex="-1">試運行 <a class="header-anchor" href="#試運行" aria-label="Permalink to “試運行”">​</a></h4><p>測試從郵件的試運行開始，試運行就是講郵件內容顯示出來，所有的佔位符都會被具體值取代。默認情況下，如果你運行不帶參數的命令 <code>mailmerge</code>，它將對收件列表中的第一個人進行試運行:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mailmerge</span></span>
<span class="line"><span>&gt;&gt;&gt; encoding ascii</span></span>
<span class="line"><span>&gt;&gt;&gt; message 0</span></span>
<span class="line"><span>TO: bexelbie@redhat.com</span></span>
<span class="line"><span>SUBJECT: Flock 2019 Funding Offer</span></span>
<span class="line"><span>FROM: Brian Exelbierd &lt;bexelbie@redhat.com&gt;</span></span>
<span class="line"><span>MIME-Version: 1.0</span></span>
<span class="line"><span>Content-Type: text/plain; charset=&quot;us-ascii&quot;</span></span>
<span class="line"><span>Content-Transfer-Encoding: 7bit</span></span>
<span class="line"><span>Date: Sat, 20 Jul 2019 18:17:15 -0000</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hi Brian,</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>I am writing you on behalf of the Flock funding committee.  You requested funding for your attendance at Flock.  After careful consideration we are able to offer you the following funding:</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Travel Budget: 1000</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt;snip&gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; sent message 0 DRY RUN</span></span>
<span class="line"><span>&gt;&gt;&gt; No attachments were sent with the emails.</span></span>
<span class="line"><span>&gt;&gt;&gt; Limit was 1 messages.  To remove the limit, use the --no-limit option.</span></span>
<span class="line"><span>&gt;&gt;&gt; This was a dry run.  To send messages, use the --no-dry-run option.</span></span></code></pre></div><p>從試運行生成的郵件中（列表中的 <code>message 0</code> ，和計算機中很多計數場景一樣，計數從 0 開始），可以看到我的名字及旅行預算是正確的。如果你想檢視所有的郵件，運行 <code>mailmerge --no-limit</code>，告訴 Mailmerge 不要僅僅處理第一個收件人的信息。下面是第三個收件人郵件的試運行結果，用來測試特殊字符的編碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; message 2</span></span>
<span class="line"><span>TO: personb@fedoraproject.org</span></span>
<span class="line"><span>SUBJECT: Flock 2019 Funding Offer</span></span>
<span class="line"><span>FROM: Brian Exelbierd &lt;bexelbie@redhat.com&gt;</span></span>
<span class="line"><span>MIME-Version: 1.0</span></span>
<span class="line"><span>Content-Type: text/plain; charset=&quot;iso-8859-1&quot;</span></span>
<span class="line"><span>Content-Transfer-Encoding: quoted-printable</span></span>
<span class="line"><span>Date: Sat, 20 Jul 2019 18:22:48 -0000</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hi P=E8rsonB,</span></span></code></pre></div><p>沒有問題，<code>P=E8rsonB</code> 是 <code>PèrsonB</code> 的編碼形式。</p><h4 id="發送測試信息" tabindex="-1">發送測試信息 <a class="header-anchor" href="#發送測試信息" aria-label="Permalink to “發送測試信息”">​</a></h4><p>現在，運行 <code>mailmerge --no-dry-run</code>，Mailmerge 將向收件人列表中的第一個人發送電子郵件:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mailmerge --no-dry-run</span></span>
<span class="line"><span>&gt;&gt;&gt; encoding ascii</span></span>
<span class="line"><span>&gt;&gt;&gt; message 0</span></span>
<span class="line"><span>TO: bexelbie@redhat.com</span></span>
<span class="line"><span>SUBJECT: Flock 2019 Funding Offer</span></span>
<span class="line"><span>FROM: Brian Exelbierd &lt;bexelbie@redhat.com&gt;</span></span>
<span class="line"><span>MIME-Version: 1.0</span></span>
<span class="line"><span>Content-Type: text/plain; charset=&quot;us-ascii&quot;</span></span>
<span class="line"><span>Content-Transfer-Encoding: 7bit</span></span>
<span class="line"><span>Date: Sat, 20 Jul 2019 18:25:45 -0000</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hi Brian,</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>I am writing you on behalf of the Flock funding committee.  You requested funding for your attendance at Flock.  After careful consideration we are able to offer you the following funding:</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Travel Budget: 1000</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt;snip&gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; Read SMTP server configuration from mailmerge_server.conf</span></span>
<span class="line"><span>&gt;&gt;&gt;   host = smtp.gmail.com</span></span>
<span class="line"><span>&gt;&gt;&gt;   port = 587</span></span>
<span class="line"><span>&gt;&gt;&gt;   username = bexelbie@redhat.com</span></span>
<span class="line"><span>&gt;&gt;&gt;   security = STARTTLS</span></span>
<span class="line"><span>&gt;&gt;&gt; password for bexelbie@redhat.com on smtp.gmail.com:</span></span>
<span class="line"><span>&gt;&gt;&gt; sent message 0</span></span>
<span class="line"><span>&gt;&gt;&gt; No attachments were sent with the emails.</span></span>
<span class="line"><span>&gt;&gt;&gt; Limit was 1 messages.  To remove the limit, use the --no-limit option.</span></span></code></pre></div><p>在倒數第 4 行，它將要求你輸入你的密碼。如果你使用的是雙因素認證或者域控制登錄，那就需要創建應用密碼來繞過這些控制。如果你使用的是 Gmail 或者類似的系統，可以直接在界面上完成密碼驗證。如果不行的話，聯繫你的郵件系統管理員。上述這些操作不會影響郵件系統的安全性，但是仍然有必要採用複雜的安全性好的密碼。</p><p>我在我的郵件收件箱中，看到了這封格式美觀的測試郵件。如果測試郵件看起來沒有問題，那就可以運行 <code>mailmerge --no-dry-run --no-limit</code> 發送所有的郵件了。</p><h3 id="發送複雜郵件" tabindex="-1">發送複雜郵件 <a class="header-anchor" href="#發送複雜郵件" aria-label="Permalink to “發送複雜郵件”">​</a></h3>`,18)),a("p",null,[s[23]||(s[23]=n("只有充分了解了 ",-1)),p(e,{href:"http://jinja.pocoo.org/docs/latest/templates/"},{default:l(()=>[...s[22]||(s[22]=[n("Jinja2 模板",-1)])]),_:1}),s[24]||(s[24]=n(" ，你才可能充分領略 Mailmerge 真正的威力。在郵件模板中使用條件語句及附帶附件，是很有用的。下面就是一個複雜郵件的模板及對應的數據文件：",-1))]),s[59]||(s[59]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat mailmerge_template.txt</span></span>
<span class="line"><span>TO: {{Email}}</span></span>
<span class="line"><span>SUBJECT: Flock 2019 Funding Offer</span></span>
<span class="line"><span>FROM: Brian Exelbierd &lt;bexelbie@redhat.com&gt;</span></span>
<span class="line"><span>ATTACHMENT: attachments/{{File}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hi {{Name}},</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>I am writing you on behalf of the Flock funding committee.  You requested funding for your attendance at Flock.  After careful consideration we are able to offer you the following funding:</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Travel Budget: {{Travel_Budget}}</span></span>
<span class="line"><span>{% if Hotel == &quot;Yes&quot; -%}</span></span>
<span class="line"><span>Lodging: Lodging in the hotel Wednesday-Sunday (4 nights)</span></span>
<span class="line"><span>{%- endif %}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;&lt;snip&gt;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ cat mailmerge_database.csv</span></span>
<span class="line"><span>Name,Email,Travel_Budget,Hotel,File</span></span>
<span class="line"><span>Brian,bexelbie@redhat.com,1000,Yes,visa_bex.pdf</span></span>
<span class="line"><span>PersonA,persona@fedoraproject.org,1500,No,visa_person_a.pdf</span></span>
<span class="line"><span>PèrsonB,personb@fedoraproject.org,500,Yes,visa_person_b.pdf</span></span></code></pre></div><p>在這個郵件中有兩項新內容。首先是附件，我需要向參加國際旅行的人發送簽證邀請信，幫助他們來 Flock，文件頭的 <code>ATTACHMENT</code> 部分説明了要包含什麼文件；為了保持我的文檔目錄清晰，我將所有需要作為附件的文檔保存於附件子目錄下。其次是包含了關於賓館的條件信息，因為有些人的旅行資金包含了住宿費用，我需要對涉及住宿的人員訴及相關信息，而這是通過 <code>if</code> 判斷實現的:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{% if Hotel == &quot;Yes&quot; -%}</span></span>
<span class="line"><span>Lodging: Lodging in the hotel Wednesday-Sunday (4 nights)</span></span>
<span class="line"><span>{%- endif %}</span></span></code></pre></div>`,3)),a("p",null,[s[26]||(s[26]=n("這和大多數編程語言中的 ",-1)),s[27]||(s[27]=a("code",null,"if",-1)),s[28]||(s[28]=n(" 判斷是一樣的。Jinja2 實力非凡，可以實現多級判斷。通過包含數據元素控制郵件內容，能大大簡化相關的日常工作。空格的正確使用對郵件的易讀性很重要。",-1)),s[29]||(s[29]=a("code",null,"if",-1)),s[30]||(s[30]=n(" 和 ",-1)),s[31]||(s[31]=a("code",null,"endif",-1)),s[32]||(s[32]=n(" 語句中的短線（ ",-1)),s[33]||(s[33]=a("code",null,"-",-1)),s[34]||(s[34]=n(" ）是 Jinja2 控制 ",-1)),p(e,{href:"http://jinja.pocoo.org/docs/2.10/templates/#whitespace-control"},{default:l(()=>[...s[25]||(s[25]=[n("空白字符",-1)])]),_:1}),s[35]||(s[35]=n(" 的一部分。這裏面選項很多，所以還是要通過試驗找到最適合自己的方式。",-1))]),s[60]||(s[60]=i('<p>在上面的例子中，我在數據文件擴充了 <code>Hotel</code> 和 <code>File</code> 兩個字段，這些字段的值控制着賓館信息和附件文件名。另外，在上例中，我和 PèrsonB 有住宿資助，但 PersonA 沒有。</p><p>對於簡單郵件和複雜郵件而言，試運行及正式發送郵件的操作都是相同的。快去試試吧！</p><p>你還可以嘗試在郵件頭中使用條件判斷（ <code>if</code> … <code>endif</code> ），比如你可以使發送給在資料庫中的某人的郵件包含附件，或者改變對部分人改變發送人的信息。</p><h3 id="mailmerge-的優點" tabindex="-1">Mailmerge 的優點 <a class="header-anchor" href="#mailmerge-的優點" aria-label="Permalink to “Mailmerge 的優點”">​</a></h3><p>Mailmerge 是用來批量發送定製郵件的簡潔而高效的工具。每個人只接受到他需要的信息，其它額外的操作和細節都是透明的。</p><p>我還發現，即使是在發送簡單的集團郵件時，相對於使用 CC 或者 BCC 向一組受眾發送一封郵件，採用 Mailmerge 也是非常高效的。很多人使用了郵件過濾，那些不是直接發給他們的郵件，他們一律不會立刻處理。使用 Mailmerge 保證了每名接收者收到的就是自己的郵件。所有的信息會對接收者進行正確過濾，再也不會有人無意間回覆到整個郵件組。</p><hr>',7)),a("p",null,[s[37]||(s[37]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/19/8/sending-custom-emails-python"},{default:l(()=>[...s[36]||(s[36]=[n("https://opensource.com/article/19/8/sending-custom-emails-python",-1)])]),_:1})]),a("p",null,[s[42]||(s[42]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/bexelbie"},{default:l(()=>[...s[38]||(s[38]=[n('Brian "bex" Exelbierd',-1)])]),_:1}),s[43]||(s[43]=n(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[39]||(s[39]=[n("lujun9972",-1)])]),_:1}),s[44]||(s[44]=n(" 譯者：",-1)),p(e,{href:"https://github.com/silentdawn-zz"},{default:l(()=>[...s[40]||(s[40]=[n("silentdawn-zz",-1)])]),_:1}),s[45]||(s[45]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[41]||(s[41]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[48]||(s[48]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[46]||(s[46]=[n("LCTT",-1)])]),_:1}),s[49]||(s[49]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[47]||(s[47]=[n("Linux中國",-1)])]),_:1}),s[50]||(s[50]=n(" 榮譽推出",-1))])])}const x=t(g,[["render",m]]);export{y as __pageData,x as default};
