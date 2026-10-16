import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as p,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"使用 Mailmerge 发送定制邮件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Mailmerge 发送定制邮件 | LCTT (202007) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Mailmerge 发送定制邮件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Mailmerge 发送定制邮件 | LCTT (202007) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202007/20190808 Sending custom emails with Python","title":"使用 Mailmerge 发送定制邮件","tag":"202007","desc":""},"relativePath":"202007/20190808 Sending custom emails with Python.md","filePath":"[post].md"}'),g={name:"202007/20190808 Sending custom emails with Python.md"};function m(u,s,c,f,b,h){const e=o("Link");return r(),d("div",null,[s[51]||(s[51]=a("h1",{id:"使用-mailmerge-发送定制邮件",tabindex:"-1"},[n("使用 Mailmerge 发送定制邮件 "),a("a",{class:"header-anchor",href:"#使用-mailmerge-发送定制邮件","aria-label":"Permalink to “使用 Mailmerge 发送定制邮件”"},"​")],-1)),s[52]||(s[52]=a("blockquote",null,[a("p",null,"Mailmerge 是一个可以定制群发邮件的命令行程序，它可以处理简单和复杂的邮件。")],-1)),s[53]||(s[53]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202007/25/233710lqkvko0jdbh1jzul.jpg",alt:""})],-1)),s[54]||(s[54]=a("p",null,"电子邮件还是生活的一部分，尽管有种种不足，它仍然是大多数人发送信息的最佳方式，尤其是在按队列将邮件发送给收件人的自动化方式中。",-1)),a("p",null,[s[2]||(s[2]=n("作为 ",-1)),p(e,{href:"https://docs.fedoraproject.org/en-US/council/fcaic/"},{default:l(()=>[...s[0]||(s[0]=[n("Fedora 社区行动和影响协调员",-1)])]),_:1}),s[3]||(s[3]=n("，我的工作之一就是给人们发送资助旅行相关的好消息，我经常通过电子邮件做这些事。这里，我将给你展示如何使用 ",-1)),p(e,{href:"https://github.com/awdeorio/mailmerge"},{default:l(()=>[...s[1]||(s[1]=[n("Mailmerge",-1)])]),_:1}),s[4]||(s[4]=n(" 向一群人发送定制邮件的，Mailmerge 是一个可以处理简单和复杂的邮件的命令行程序。",-1))]),s[55]||(s[55]=a("h3",{id:"安装-mailmerge",tabindex:"-1"},[n("安装 Mailmerge "),a("a",{class:"header-anchor",href:"#安装-mailmerge","aria-label":"Permalink to “安装 Mailmerge”"},"​")],-1)),a("p",null,[s[6]||(s[6]=n("在 Fedora 中，Mailmerge 已经打包可用，你可以通过在命令行中运行 ",-1)),s[7]||(s[7]=a("code",null,"sudo dnf install python3-mailmerge",-1)),s[8]||(s[8]=n(" 来安装它。你还可以使用 ",-1)),s[9]||(s[9]=a("code",null,"pip",-1)),s[10]||(s[10]=n(" 命令从 PyPi 中安装，具体可以参阅该项目的 ",-1)),p(e,{href:"https://github.com/awdeorio/mailmerge#install"},{default:l(()=>[...s[5]||(s[5]=[n("README",-1)])]),_:1}),s[11]||(s[11]=n("。",-1))]),s[56]||(s[56]=i(`<h3 id="配置-mailmerge" tabindex="-1">配置 Mailmerge <a class="header-anchor" href="#配置-mailmerge" aria-label="Permalink to “配置 Mailmerge”">​</a></h3><p>三个配置文件控制着 Mailmerge 的工作模式。运行 <code>mailmerge --sample</code>，将生成配置文件模板。这些文件包括：</p><ul><li><code>mailmerge_server.conf:</code> 这里保存着 SMTP 服务端邮件发送相关详细配置，但你的密码 <em>不</em> 在这里保存。</li><li><code>mailmerge_database.csv:</code> 这里保存每封邮件的定制数据，包括收件人的电子邮件地址。</li><li><code>mailmerge_template.txt:</code> 这里保存电子邮件的文本，文本中包含占位符，这些占位符会使用 <code>mailmerge_database.csv</code> 中的数据替换。</li></ul><h4 id="server-conf" tabindex="-1">Server.conf <a class="header-anchor" href="#server-conf" aria-label="Permalink to “Server.conf”">​</a></h4><p>配置模板文件 <code>mailmerge_server.conf</code> 包含几个大家应该很熟悉的例子。如果你曾经往手机上添加过电子邮件或者设置过桌面电子邮件客户端，那你就应该看到过这些数据。需要提醒的是要记得把你的用户名更新到这个文件中，尤其是在你使用模板所提供的配置时。</p><h4 id="database-csv" tabindex="-1">Database.csv <a class="header-anchor" href="#database-csv" aria-label="Permalink to “Database.csv”">​</a></h4><p><code>mailmerge_database.csv</code> 这个配置文件稍微有点复杂。最起码要将邮件接收者的电子邮件地址保存在这里，其它在电子邮件中任何需要替换的定制信息也要保存在这里。推荐在创建本文件的占位符列表时，同步编辑 <code>mailmerge_template.txt</code> 文件。我发现一个有效的做法是，使用电子表格软件录入这些数据，完成后导出为 CSV 文件。使用下面的示例文件:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>email,name,number</span></span>
<span class="line"><span>myself@mydomain.com,&quot;Myself&quot;,17</span></span>
<span class="line"><span>bob@bobdomain.com,&quot;Bob&quot;,42</span></span></code></pre></div><p>可以你向这两个人发送电子邮件，使用他们的名字并告诉他们一个数字。这个示例文件虽然不是特别有趣，但应用了一个重要的原则，那就是：始终让自己处于邮件接收列表的首位。这样你可以在向列表全员发送邮件之前，先给自己发送一个测试邮件，以验证邮件的效果是否如你预期。</p>`,9)),a("p",null,[s[13]||(s[13]=n("任何包含半角逗号的值，都 ",-1)),s[14]||(s[14]=a("strong",null,"必须",-1)),s[15]||(s[15]=n(" 以半角双引号（",-1)),s[16]||(s[16]=a("code",null,'"',-1)),s[17]||(s[17]=n("）封闭。如果恰好在半角双引号封闭的区域需要有一个半角双引号，那就在同一行中连续使用两个半角双引号。引号的规则比较有趣，去 ",-1)),p(e,{href:"https://docs.python.org/3/library/csv.html"},{default:l(()=>[...s[12]||(s[12]=[n("Python 3 中关于 CSV 的内容中",-1)])]),_:1}),s[18]||(s[18]=n(" 一探究竟吧。",-1))]),s[57]||(s[57]=a("h4",{id:"template-txt",tabindex:"-1"},[n("Template.txt "),a("a",{class:"header-anchor",href:"#template-txt","aria-label":"Permalink to “Template.txt”"},"​")],-1)),a("p",null,[s[20]||(s[20]=n("我的工作之一，就是为我们 Fedora 贡献者会议 ",-1)),p(e,{href:"https://flocktofedora.org/"},{default:l(()=>[...s[19]||(s[19]=[n("Flock",-1)])]),_:1}),s[21]||(s[21]=n(" 发送与旅行基金有关的信息。通过简单的邮件告诉有关的人，他被选中为旅行基金支持的幸运者，以及相应基金支持的详细信息。与接收者相关的具体信息之一就是我们可以为他的旅行提供多少资助。下面是一份我的节略后的模板文件（为了简洁，已经移除大量的文本）：",-1))]),s[58]||(s[58]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat mailmerge_template.txt</span></span>
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
<span class="line"><span>&lt;&lt;snip&gt;&gt;</span></span></code></pre></div><p>模板的起头定义了邮件的接收者、发送者和主题。在空行之后，是邮件的内容。该邮件需要从 <code>database.csv</code> 文件中获取接收者的 <code>Email</code> 、<code>Name</code> 和 <code>Travel_Budget</code> 。注意，上述这些占位符是由双大括弧（ <code>{{</code>、<code>}}</code> ）封闭的。相应的 <code>mailmerge_database.csv</code> 如下:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat mailmerge_database.csv</span></span>
<span class="line"><span>Name,Email,Travel_Budget</span></span>
<span class="line"><span>Brian,bexelbie@redhat.com,1000</span></span>
<span class="line"><span>PersonA,persona@fedoraproject.org,1500</span></span>
<span class="line"><span>PèrsonB,personb@fedoraproject.org,500</span></span></code></pre></div><p>注意，我把自己的信息放在了首条，这是为了测试方便。除了我，还有另外两个人的信息在文档中。列表中的第二个人 PèrsonB，他的名字中有一个包含变音符号的字母，Mailmerge 会对这类字母自动编码。</p><p>以上包含了模板的全部知识点：写上你自己的电子邮件信息，并编写好以双大括弧封闭的占位符。接下来创建用来提供前述占位符具体值的数据文件。现在测试一下电子邮件的效果。</p><h3 id="测试并发送简单邮件" tabindex="-1">测试并发送简单邮件 <a class="header-anchor" href="#测试并发送简单邮件" aria-label="Permalink to “测试并发送简单邮件”">​</a></h3><h4 id="试运行" tabindex="-1">试运行 <a class="header-anchor" href="#试运行" aria-label="Permalink to “试运行”">​</a></h4><p>测试从邮件的试运行开始，试运行就是讲邮件内容显示出来，所有的占位符都会被具体值取代。默认情况下，如果你运行不带参数的命令 <code>mailmerge</code>，它将对收件列表中的第一个人进行试运行:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mailmerge</span></span>
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
<span class="line"><span>&gt;&gt;&gt; This was a dry run.  To send messages, use the --no-dry-run option.</span></span></code></pre></div><p>从试运行生成的邮件中（列表中的 <code>message 0</code> ，和计算机中很多计数场景一样，计数从 0 开始），可以看到我的名字及旅行预算是正确的。如果你想检视所有的邮件，运行 <code>mailmerge --no-limit</code>，告诉 Mailmerge 不要仅仅处理第一个收件人的信息。下面是第三个收件人邮件的试运行结果，用来测试特殊字符的编码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; message 2</span></span>
<span class="line"><span>TO: personb@fedoraproject.org</span></span>
<span class="line"><span>SUBJECT: Flock 2019 Funding Offer</span></span>
<span class="line"><span>FROM: Brian Exelbierd &lt;bexelbie@redhat.com&gt;</span></span>
<span class="line"><span>MIME-Version: 1.0</span></span>
<span class="line"><span>Content-Type: text/plain; charset=&quot;iso-8859-1&quot;</span></span>
<span class="line"><span>Content-Transfer-Encoding: quoted-printable</span></span>
<span class="line"><span>Date: Sat, 20 Jul 2019 18:22:48 -0000</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hi P=E8rsonB,</span></span></code></pre></div><p>没有问题，<code>P=E8rsonB</code> 是 <code>PèrsonB</code> 的编码形式。</p><h4 id="发送测试信息" tabindex="-1">发送测试信息 <a class="header-anchor" href="#发送测试信息" aria-label="Permalink to “发送测试信息”">​</a></h4><p>现在，运行 <code>mailmerge --no-dry-run</code>，Mailmerge 将向收件人列表中的第一个人发送电子邮件:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mailmerge --no-dry-run</span></span>
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
<span class="line"><span>&gt;&gt;&gt; Limit was 1 messages.  To remove the limit, use the --no-limit option.</span></span></code></pre></div><p>在倒数第 4 行，它将要求你输入你的密码。如果你使用的是双因素认证或者域控制登录，那就需要创建应用密码来绕过这些控制。如果你使用的是 Gmail 或者类似的系统，可以直接在界面上完成密码验证。如果不行的话，联系你的邮件系统管理员。上述这些操作不会影响邮件系统的安全性，但是仍然有必要采用复杂的安全性好的密码。</p><p>我在我的邮件收件箱中，看到了这封格式美观的测试邮件。如果测试邮件看起来没有问题，那就可以运行 <code>mailmerge --no-dry-run --no-limit</code> 发送所有的邮件了。</p><h3 id="发送复杂邮件" tabindex="-1">发送复杂邮件 <a class="header-anchor" href="#发送复杂邮件" aria-label="Permalink to “发送复杂邮件”">​</a></h3>`,18)),a("p",null,[s[23]||(s[23]=n("只有充分了解了 ",-1)),p(e,{href:"http://jinja.pocoo.org/docs/latest/templates/"},{default:l(()=>[...s[22]||(s[22]=[n("Jinja2 模板",-1)])]),_:1}),s[24]||(s[24]=n(" ，你才可能充分领略 Mailmerge 真正的威力。在邮件模板中使用条件语句及附带附件，是很有用的。下面就是一个复杂邮件的模板及对应的数据文件：",-1))]),s[59]||(s[59]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat mailmerge_template.txt</span></span>
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
<span class="line"><span>PèrsonB,personb@fedoraproject.org,500,Yes,visa_person_b.pdf</span></span></code></pre></div><p>在这个邮件中有两项新内容。首先是附件，我需要向参加国际旅行的人发送签证邀请信，帮助他们来 Flock，文件头的 <code>ATTACHMENT</code> 部分说明了要包含什么文件；为了保持我的文档目录清晰，我将所有需要作为附件的文档保存于附件子目录下。其次是包含了关于宾馆的条件信息，因为有些人的旅行资金包含了住宿费用，我需要对涉及住宿的人员诉及相关信息，而这是通过 <code>if</code> 判断实现的:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{% if Hotel == &quot;Yes&quot; -%}</span></span>
<span class="line"><span>Lodging: Lodging in the hotel Wednesday-Sunday (4 nights)</span></span>
<span class="line"><span>{%- endif %}</span></span></code></pre></div>`,3)),a("p",null,[s[26]||(s[26]=n("这和大多数编程语言中的 ",-1)),s[27]||(s[27]=a("code",null,"if",-1)),s[28]||(s[28]=n(" 判断是一样的。Jinja2 实力非凡，可以实现多级判断。通过包含数据元素控制邮件内容，能大大简化相关的日常工作。空格的正确使用对邮件的易读性很重要。",-1)),s[29]||(s[29]=a("code",null,"if",-1)),s[30]||(s[30]=n(" 和 ",-1)),s[31]||(s[31]=a("code",null,"endif",-1)),s[32]||(s[32]=n(" 语句中的短线（ ",-1)),s[33]||(s[33]=a("code",null,"-",-1)),s[34]||(s[34]=n(" ）是 Jinja2 控制 ",-1)),p(e,{href:"http://jinja.pocoo.org/docs/2.10/templates/#whitespace-control"},{default:l(()=>[...s[25]||(s[25]=[n("空白字符",-1)])]),_:1}),s[35]||(s[35]=n(" 的一部分。这里面选项很多，所以还是要通过试验找到最适合自己的方式。",-1))]),s[60]||(s[60]=i('<p>在上面的例子中，我在数据文件扩充了 <code>Hotel</code> 和 <code>File</code> 两个字段，这些字段的值控制着宾馆信息和附件文件名。另外，在上例中，我和 PèrsonB 有住宿资助，但 PersonA 没有。</p><p>对于简单邮件和复杂邮件而言，试运行及正式发送邮件的操作都是相同的。快去试试吧！</p><p>你还可以尝试在邮件头中使用条件判断（ <code>if</code> … <code>endif</code> ），比如你可以使发送给在数据库中的某人的邮件包含附件，或者改变对部分人改变发送人的信息。</p><h3 id="mailmerge-的优点" tabindex="-1">Mailmerge 的优点 <a class="header-anchor" href="#mailmerge-的优点" aria-label="Permalink to “Mailmerge 的优点”">​</a></h3><p>Mailmerge 是用来批量发送定制邮件的简洁而高效的工具。每个人只接受到他需要的信息，其它额外的操作和细节都是透明的。</p><p>我还发现，即使是在发送简单的集团邮件时，相对于使用 CC 或者 BCC 向一组受众发送一封邮件，采用 Mailmerge 也是非常高效的。很多人使用了邮件过滤，那些不是直接发给他们的邮件，他们一律不会立刻处理。使用 Mailmerge 保证了每名接收者收到的就是自己的邮件。所有的信息会对接收者进行正确过滤，再也不会有人无意间回复到整个邮件组。</p><hr>',7)),a("p",null,[s[37]||(s[37]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/19/8/sending-custom-emails-python"},{default:l(()=>[...s[36]||(s[36]=[n("https://opensource.com/article/19/8/sending-custom-emails-python",-1)])]),_:1})]),a("p",null,[s[42]||(s[42]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/bexelbie"},{default:l(()=>[...s[38]||(s[38]=[n('Brian "bex" Exelbierd',-1)])]),_:1}),s[43]||(s[43]=n(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[39]||(s[39]=[n("lujun9972",-1)])]),_:1}),s[44]||(s[44]=n(" 译者：",-1)),p(e,{href:"https://github.com/silentdawn-zz"},{default:l(()=>[...s[40]||(s[40]=[n("silentdawn-zz",-1)])]),_:1}),s[45]||(s[45]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[41]||(s[41]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[48]||(s[48]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[46]||(s[46]=[n("LCTT",-1)])]),_:1}),s[49]||(s[49]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[47]||(s[47]=[n("Linux中国",-1)])]),_:1}),s[50]||(s[50]=n(" 荣誉推出",-1))])])}const x=t(g,[["render",m]]);export{y as __pageData,x as default};
