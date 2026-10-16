import{_ as t,a0 as o,w as r,s as u,I as a,x as n,a1 as p,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"通过 Slack 监视慢 SQL 查询 | LCTT x X-CMD","titleTemplate":false,"description":"通过 Slack 监视慢 SQL 查询 | LCTT (201711) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通过 Slack 监视慢 SQL 查询 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通过 Slack 监视慢 SQL 查询 | LCTT (201711) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201711/20171015 Monitoring Slow SQL Queries via Slack","title":"通过 Slack 监视慢 SQL 查询","tag":"201711","desc":""},"relativePath":"201711/20171015 Monitoring Slow SQL Queries via Slack.md","filePath":"[post].md"}'),d={name:"201711/20171015 Monitoring Slow SQL Queries via Slack.md"};function g(k,s,m,b,f,q){const l=o("Link");return r(),u("div",null,[s[61]||(s[61]=a("h1",{id:"通过-slack-监视慢-sql-查询",tabindex:"-1"},[n("通过 Slack 监视慢 SQL 查询 "),a("a",{class:"header-anchor",href:"#通过-slack-监视慢-sql-查询","aria-label":"Permalink to “通过 Slack 监视慢 SQL 查询”"},"​")],-1)),s[62]||(s[62]=a("blockquote",null,[a("p",null,"一个获得关于慢查询、意外错误和其它重要日志通知的简单 Go 秘诀。")],-1)),s[63]||(s[63]=a("p",null,[a("img",{src:"https://c1.staticflickr.com/5/4466/37053205213_2ee912141c_b.jpg",alt:""})],-1)),s[64]||(s[64]=a("p",null,"我的 Slack bot 提示我一个运行了很长时间 SQL 查询。我应该尽快解决它。",-1)),s[65]||(s[65]=a("p",null,[a("strong",null,"我们不能管理我们无法去测量的东西。"),n("每个后台应用程序都需要我们去监视它在数据库上的性能。如果一个特定的查询随着数据量增长变慢，你必须在它变得太慢之前去优化它。")],-1)),s[66]||(s[66]=a("p",null,"由于 Slack 已经成为我们工作的中心，它也在改变我们监视系统的方式。 虽然我们已经有非常不错的监视工具，如果在系统中任何东西有正在恶化的趋势，让 Slack 机器人告诉我们，也是非常棒的主意。比如，一个太长时间才完成的 SQL 查询，或者，在一个特定的 Go 包中发生一个致命的错误。",-1)),a("p",null,[s[2]||(s[2]=n("在这篇博客文章中，我们将告诉你，通过使用已经支持这些特性的",-1)),p(l,{href:"http://azer.bike/journal/monitoring-slow-sql-queries-via-slack/?utm_source=dbweekly&utm_medium=email#logger"},{default:e(()=>[...s[0]||(s[0]=[n("一个简单的日志系统",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),p(l,{href:"http://azer.bike/journal/monitoring-slow-sql-queries-via-slack/?utm_source=dbweekly&utm_medium=email#crud"},{default:e(()=>[...s[1]||(s[1]=[n("一个已存在的数据库库（database library）",-1)])]),_:1}),s[4]||(s[4]=n(" 怎么去设置来达到这个目的。",-1))]),s[67]||(s[67]=a("h3",{id:"使用记录器",tabindex:"-1"},[n("使用记录器 "),a("a",{class:"header-anchor",href:"#使用记录器","aria-label":"Permalink to “使用记录器”"},"​")],-1)),a("p",null,[p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[5]||(s[5]=[n("logger",-1)])]),_:1}),s[6]||(s[6]=n(" 是一个为 Go 库和应用程序使用设计的小型库。在这个例子中我们使用了它的三个重要的特性：",-1))]),s[68]||(s[68]=i(`<ul><li>它为测量性能提供了一个简单的定时器。</li><li>支持复杂的输出过滤器，因此，你可以从指定的包中选择日志。例如，你可以告诉记录器仅从数据库包中输出，并且仅输出超过 500 ms 的定时器日志。</li><li>它有一个 Slack 钩子，因此，你可以过滤并将日志输入到 Slack。</li></ul><p>让我们看一下在这个例子中，怎么去使用定时器，稍后我们也将去使用过滤器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;github.com/azer/logger&quot;</span></span>
<span class="line"><span>    &quot;time&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var (</span></span>
<span class="line"><span>  users = logger.New(&quot;users&quot;)</span></span>
<span class="line"><span>  database = logger.New(&quot;database&quot;)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main () {</span></span>
<span class="line"><span>  users.Info(&quot;Hi!&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  timer := database.Timer()</span></span>
<span class="line"><span>  time.Sleep(time.Millisecond * 250) // sleep 250ms</span></span>
<span class="line"><span>  timer.End(&quot;Connected to database&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  users.Error(&quot;Failed to create a new user.&quot;, logger.Attrs{</span></span>
<span class="line"><span>    &quot;e-mail&quot;: &quot;foo@bar.com&quot;,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  database.Info(&quot;Just a random log.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fmt.Println(&quot;Bye.&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>运行这个程序没有输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run example-01.go</span></span>
<span class="line"><span>Bye</span></span></code></pre></div>`,5)),a("p",null,[s[8]||(s[8]=n("记录器是",-1)),p(l,{href:"http://www.linfo.org/rule_of_silence.html"},{default:e(()=>[...s[7]||(s[7]=[n("缺省静默的",-1)])]),_:1}),s[9]||(s[9]=n("，因此，它可以在库的内部使用。我们简单地通过一个环境变量去查看日志：",-1))]),s[69]||(s[69]=i(`<p>例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ LOG=database@timer go run example-01.go</span></span>
<span class="line"><span>01:08:54.997 database(250.095587ms): Connected to database.</span></span>
<span class="line"><span>Bye</span></span></code></pre></div><p>上面的示例我们使用了 <code>database@timer</code> 过滤器去查看 <code>database</code> 包中输出的定时器日志。你也可以试一下其它的过滤器，比如：</p><ul><li><code>LOG=*</code>: 所有日志</li><li><code>LOG=users@error,database</code>: 所有来自 <code>users</code> 的错误日志，所有来自 <code>database</code> 的所有日志</li><li><code>LOG=*@timer,database@info</code>: 来自所有包的定时器日志和错误日志，以及来自 <code>database</code> 的所有日志</li><li><code>LOG=*,users@mute</code>: 除了 <code>users</code> 之外的所有日志</li></ul><h3 id="发送日志到-slack" tabindex="-1">发送日志到 Slack <a class="header-anchor" href="#发送日志到-slack" aria-label="Permalink to “发送日志到 Slack”">​</a></h3>`,5)),a("p",null,[s[11]||(s[11]=n("控制台日志是用于开发环境的，但是我们需要产品提供一个友好的界面。感谢 ",-1)),p(l,{href:"https://github.com/azer/logger-slack-hook"},{default:e(()=>[...s[10]||(s[10]=[n("slack-hook",-1)])]),_:1}),s[12]||(s[12]=n("， 我们可以很容易地在上面的示例中，使用 Slack 去整合它：",-1))]),s[70]||(s[70]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;github.com/azer/logger&quot;</span></span>
<span class="line"><span>  &quot;github.com/azer/logger-slack-hook&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init () {</span></span>
<span class="line"><span>  logger.Hook(&amp;slackhook.Writer{</span></span>
<span class="line"><span>    WebHookURL: &quot;https://hooks.slack.com/services/...&quot;,</span></span>
<span class="line"><span>    Channel: &quot;slow-queries&quot;,</span></span>
<span class="line"><span>    Username: &quot;Query Person&quot;,</span></span>
<span class="line"><span>    Filter: func (log *logger.Log) bool {</span></span>
<span class="line"><span>      return log.Package == &quot;database&quot; &amp;&amp; log.Level == &quot;TIMER&quot; &amp;&amp; log.Elapsed &gt;= 200</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们来解释一下，在上面的示例中我们做了什么：</p>`,2)),a("ul",null,[a("li",null,[s[14]||(s[14]=n("行 #5: 设置入站 webhook url。这个 URL ",-1)),p(l,{href:"https://my.slack.com/services/new/incoming-webhook/"},{default:e(()=>[...s[13]||(s[13]=[n("链接在这里",-1)])]),_:1}),s[15]||(s[15]=n("。",-1))]),s[16]||(s[16]=a("li",null,"行 #6: 选择流日志的入口通道。",-1)),s[17]||(s[17]=a("li",null,"行 #7: 显示的发送者的用户名。",-1)),s[18]||(s[18]=a("li",null,"行 #11: 使用流过滤器，仅输出时间超过 200 ms 的定时器日志。",-1))]),a("p",null,[s[20]||(s[20]=n("希望这个示例能给你提供一个大概的思路。如果你有更多的问题，去看这个 ",-1)),p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[19]||(s[19]=[n("记录器",-1)])]),_:1}),s[21]||(s[21]=n("的文档。",-1))]),s[71]||(s[71]=a("h3",{id:"一个真实的示例-crud",tabindex:"-1"},[n("一个真实的示例： CRUD "),a("a",{class:"header-anchor",href:"#一个真实的示例-crud","aria-label":"Permalink to “一个真实的示例： CRUD”"},"​")],-1)),a("p",null,[p(l,{href:"https://github.com/azer/crud"},{default:e(()=>[...s[22]||(s[22]=[n("crud",-1)])]),_:1}),s[24]||(s[24]=n(" 是一个用于 Go 的数据库的 ORM 式的类库，它有一个隐藏特性是内部日志系统使用 ",-1)),p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[23]||(s[23]=[n("logger",-1)])]),_:1}),s[25]||(s[25]=n(" 。这可以让我们很容易地去监视正在运行的 SQL 查询。",-1))]),s[72]||(s[72]=i(`<h4 id="查询" tabindex="-1">查询 <a class="header-anchor" href="#查询" aria-label="Permalink to “查询”">​</a></h4><p>这有一个通过给定的 e-mail 去返回用户名的简单查询：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func GetUserNameByEmail (email string) (string, error) {</span></span>
<span class="line"><span>  var name string</span></span>
<span class="line"><span>  if err := DB.Read(&amp;name, &quot;SELECT name FROM user WHERE email=?&quot;, email); err != nil {</span></span>
<span class="line"><span>    return &quot;&quot;, err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return name, nil</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>好吧，这个太短了， 感觉好像缺少了什么，让我们增加全部的上下文：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;github.com/azer/crud&quot;</span></span>
<span class="line"><span>  _ &quot;github.com/go-sql-driver/mysql&quot;</span></span>
<span class="line"><span>  &quot;os&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var db *crud.DB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main () {</span></span>
<span class="line"><span>  var err error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  DB, err = crud.Connect(&quot;mysql&quot;, os.Getenv(&quot;DATABASE_URL&quot;))</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    panic(err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  username, err := GetUserNameByEmail(&quot;foo@bar.com&quot;)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    panic(err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fmt.Println(&quot;Your username is: &quot;, username)</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,5)),a("p",null,[s[27]||(s[27]=n("因此，我们有一个通过环境变量 ",-1)),s[28]||(s[28]=a("code",null,"DATABASE_URL",-1)),s[29]||(s[29]=n(" 连接到 MySQL 数据库的 ",-1)),p(l,{href:"https://github.com/azer/crud"},{default:e(()=>[...s[26]||(s[26]=[n("crud",-1)])]),_:1}),s[30]||(s[30]=n(" 实例。如果我们运行这个程序，将看到有一行输出：",-1))]),s[73]||(s[73]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ DATABASE_URL=root:123456@/testdb go run example.go</span></span>
<span class="line"><span>Your username is: azer</span></span></code></pre></div>`,1)),a("p",null,[s[32]||(s[32]=n("正如我前面提到的，日志是 ",-1)),p(l,{href:"http://www.linfo.org/rule_of_silence.html"},{default:e(()=>[...s[31]||(s[31]=[n("缺省静默的",-1)])]),_:1}),s[33]||(s[33]=n("。让我们看一下 crud 的内部日志：",-1))]),s[74]||(s[74]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ LOG=crud go run example.go</span></span>
<span class="line"><span>22:56:29.691 crud(0): SQL Query Executed: SELECT username FROM user WHERE email=&#39;foo@bar.com&#39;</span></span>
<span class="line"><span>Your username is: azer</span></span></code></pre></div><p>这很简单，并且足够我们去查看在我们的开发环境中查询是怎么执行的。</p><h4 id="crud-和-slack-整合" tabindex="-1">CRUD 和 Slack 整合 <a class="header-anchor" href="#crud-和-slack-整合" aria-label="Permalink to “CRUD 和 Slack 整合”">​</a></h4><p>记录器是为配置管理应用程序级的“内部日志系统”而设计的。这意味着，你可以通过在你的应用程序级配置记录器，让 crud 的日志流入 Slack ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;github.com/azer/logger&quot;</span></span>
<span class="line"><span>  &quot;github.com/azer/logger-slack-hook&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init () {</span></span>
<span class="line"><span>  logger.Hook(&amp;slackhook.Writer{</span></span>
<span class="line"><span>    WebHookURL: &quot;https://hooks.slack.com/services/...&quot;,</span></span>
<span class="line"><span>    Channel: &quot;slow-queries&quot;,</span></span>
<span class="line"><span>    Username: &quot;Query Person&quot;,</span></span>
<span class="line"><span>    Filter: func (log *logger.Log) bool {</span></span>
<span class="line"><span>      return log.Package == &quot;mysql&quot; &amp;&amp; log.Level == &quot;TIMER&quot; &amp;&amp; log.Elapsed &gt;= 250</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上面的代码中：</p>`,6)),a("ul",null,[a("li",null,[s[36]||(s[36]=n("我们导入了 ",-1)),p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[34]||(s[34]=[n("logger",-1)])]),_:1}),s[37]||(s[37]=n(" 和 ",-1)),p(l,{href:"https://github.com/azer/logger-slack-hook"},{default:e(()=>[...s[35]||(s[35]=[n("logger-slack-hook",-1)])]),_:1}),s[38]||(s[38]=n(" 库。",-1))]),a("li",null,[s[40]||(s[40]=n("我们配置记录器日志流入 Slack。这个配置覆盖了代码库中 ",-1)),p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[39]||(s[39]=[n("记录器",-1)])]),_:1}),s[41]||(s[41]=n(" 所有的用法， 包括第三方依赖。",-1))]),s[42]||(s[42]=a("li",null,"我们使用了流过滤器，仅输出 MySQL 包中超过 250 ms 的定时器日志。",-1))]),s[75]||(s[75]=a("p",null,"这种使用方法可以被扩展，而不仅是慢查询报告。我个人使用它去跟踪指定包中的重要错误， 也用于统计一些类似新用户登入或生成支付的日志。",-1)),s[76]||(s[76]=a("h3",{id:"在这篇文章中提到的包",tabindex:"-1"},[n("在这篇文章中提到的包 "),a("a",{class:"header-anchor",href:"#在这篇文章中提到的包","aria-label":"Permalink to “在这篇文章中提到的包”"},"​")],-1)),a("ul",null,[a("li",null,[p(l,{href:"https://github.com/azer/crud"},{default:e(()=>[...s[43]||(s[43]=[n("crud",-1)])]),_:1})]),a("li",null,[p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[44]||(s[44]=[n("logger",-1)])]),_:1})]),a("li",null,[p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[45]||(s[45]=[n("logger-slack-hook",-1)])]),_:1})])]),a("p",null,[p(l,{href:"https://twitter.com/afrikaradyo"},{default:e(()=>[...s[46]||(s[46]=[n("告诉我们",-1)])]),_:1}),s[47]||(s[47]=n(" 如果你有任何的问题或建议。",-1))]),s[77]||(s[77]=a("hr",null,null,-1)),a("p",null,[s[49]||(s[49]=n("via: ",-1)),p(l,{href:"http://azer.bike/journal/monitoring-slow-sql-queries-via-slack/"},{default:e(()=>[...s[48]||(s[48]=[n("http://azer.bike/journal/monitoring-slow-sql-queries-via-slack/",-1)])]),_:1})]),a("p",null,[s[53]||(s[53]=n("作者：",-1)),p(l,{href:"http://azer.bike/"},{default:e(()=>[...s[50]||(s[50]=[n("Azer Koçulu",-1)])]),_:1}),s[54]||(s[54]=n(" 译者：",-1)),p(l,{href:"https://github.com/qhwdw"},{default:e(()=>[...s[51]||(s[51]=[n("qhwdw",-1)])]),_:1}),s[55]||(s[55]=n(" 校对：",-1)),p(l,{href:"https://github.com/wxy"},{default:e(()=>[...s[52]||(s[52]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[58]||(s[58]=n("本文由 ",-1)),p(l,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[56]||(s[56]=[n("LCTT",-1)])]),_:1}),s[59]||(s[59]=n(" 原创编译，",-1)),p(l,{href:"https://linux.cn/"},{default:e(()=>[...s[57]||(s[57]=[n("Linux中国",-1)])]),_:1}),s[60]||(s[60]=n(" 荣誉推出",-1))])])}const C=t(d,[["render",g]]);export{T as __pageData,C as default};
