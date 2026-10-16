import{_ as t,a0 as o,w as r,s as u,I as a,x as n,a1 as p,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"通過 Slack 監視慢 SQL 查詢 | LCTT x X-CMD","titleTemplate":false,"description":"通過 Slack 監視慢 SQL 查詢 | LCTT (201711) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通過 Slack 監視慢 SQL 查詢 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通過 Slack 監視慢 SQL 查詢 | LCTT (201711) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201711/20171015 Monitoring Slow SQL Queries via Slack","title":"通過 Slack 監視慢 SQL 查詢","tag":"201711","desc":""},"relativePath":"201711/20171015 Monitoring Slow SQL Queries via Slack.md","filePath":"[post].md"}'),d={name:"201711/20171015 Monitoring Slow SQL Queries via Slack.md"};function g(k,s,m,b,f,q){const l=o("Link");return r(),u("div",null,[s[61]||(s[61]=a("h1",{id:"通過-slack-監視慢-sql-查詢",tabindex:"-1"},[n("通過 Slack 監視慢 SQL 查詢 "),a("a",{class:"header-anchor",href:"#通過-slack-監視慢-sql-查詢","aria-label":"Permalink to “通過 Slack 監視慢 SQL 查詢”"},"​")],-1)),s[62]||(s[62]=a("blockquote",null,[a("p",null,"一個獲得關於慢查詢、意外錯誤和其它重要日誌通知的簡單 Go 秘訣。")],-1)),s[63]||(s[63]=a("p",null,[a("img",{src:"https://c1.staticflickr.com/5/4466/37053205213_2ee912141c_b.jpg",alt:""})],-1)),s[64]||(s[64]=a("p",null,"我的 Slack bot 提示我一個運行了很長時間 SQL 查詢。我應該儘快解決它。",-1)),s[65]||(s[65]=a("p",null,[a("strong",null,"我們不能管理我們無法去測量的東西。"),n("每個後台應用程序都需要我們去監視它在資料庫上的性能。如果一個特定的查詢隨着數據量增長變慢，你必須在它變得太慢之前去優化它。")],-1)),s[66]||(s[66]=a("p",null,"由於 Slack 已經成為我們工作的中心，它也在改變我們監視系統的方式。 雖然我們已經有非常不錯的監視工具，如果在系統中任何東西有正在惡化的趨勢，讓 Slack 機器人告訴我們，也是非常棒的主意。比如，一個太長時間才完成的 SQL 查詢，或者，在一個特定的 Go 包中發生一個致命的錯誤。",-1)),a("p",null,[s[2]||(s[2]=n("在這篇Blog文章中，我們將告訴你，通過使用已經支持這些特性的",-1)),p(l,{href:"http://azer.bike/journal/monitoring-slow-sql-queries-via-slack/?utm_source=dbweekly&utm_medium=email#logger"},{default:e(()=>[...s[0]||(s[0]=[n("一個簡單的日誌系統",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),p(l,{href:"http://azer.bike/journal/monitoring-slow-sql-queries-via-slack/?utm_source=dbweekly&utm_medium=email#crud"},{default:e(()=>[...s[1]||(s[1]=[n("一個已存在的資料庫庫（database library）",-1)])]),_:1}),s[4]||(s[4]=n(" 怎麼去設置來達到這個目的。",-1))]),s[67]||(s[67]=a("h3",{id:"使用記錄器",tabindex:"-1"},[n("使用記錄器 "),a("a",{class:"header-anchor",href:"#使用記錄器","aria-label":"Permalink to “使用記錄器”"},"​")],-1)),a("p",null,[p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[5]||(s[5]=[n("logger",-1)])]),_:1}),s[6]||(s[6]=n(" 是一個為 Go 庫和應用程序使用設計的小型庫。在這個例子中我們使用了它的三個重要的特性：",-1))]),s[68]||(s[68]=i(`<ul><li>它為測量性能提供了一個簡單的定時器。</li><li>支持複雜的輸出過濾器，因此，你可以從指定的包中選擇日誌。例如，你可以告訴記錄器僅從資料庫包中輸出，並且僅輸出超過 500 ms 的定時器日誌。</li><li>它有一個 Slack 鈎子，因此，你可以過濾並將日誌輸入到 Slack。</li></ul><p>讓我們看一下在這個例子中，怎麼去使用定時器，稍後我們也將去使用過濾器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>運行這個程序沒有輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run example-01.go</span></span>
<span class="line"><span>Bye</span></span></code></pre></div>`,5)),a("p",null,[s[8]||(s[8]=n("記錄器是",-1)),p(l,{href:"http://www.linfo.org/rule_of_silence.html"},{default:e(()=>[...s[7]||(s[7]=[n("缺省靜默的",-1)])]),_:1}),s[9]||(s[9]=n("，因此，它可以在庫的內部使用。我們簡單地通過一個環境變量去查看日誌：",-1))]),s[69]||(s[69]=i(`<p>例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ LOG=database@timer go run example-01.go</span></span>
<span class="line"><span>01:08:54.997 database(250.095587ms): Connected to database.</span></span>
<span class="line"><span>Bye</span></span></code></pre></div><p>上面的示例我們使用了 <code>database@timer</code> 過濾器去查看 <code>database</code> 包中輸出的定時器日誌。你也可以試一下其它的過濾器，比如：</p><ul><li><code>LOG=*</code>: 所有日誌</li><li><code>LOG=users@error,database</code>: 所有來自 <code>users</code> 的錯誤日誌，所有來自 <code>database</code> 的所有日誌</li><li><code>LOG=*@timer,database@info</code>: 來自所有包的定時器日誌和錯誤日誌，以及來自 <code>database</code> 的所有日誌</li><li><code>LOG=*,users@mute</code>: 除了 <code>users</code> 之外的所有日誌</li></ul><h3 id="發送日誌到-slack" tabindex="-1">發送日誌到 Slack <a class="header-anchor" href="#發送日誌到-slack" aria-label="Permalink to “發送日誌到 Slack”">​</a></h3>`,5)),a("p",null,[s[11]||(s[11]=n("控制台日誌是用於開發環境的，但是我們需要產品提供一個友好的界面。感謝 ",-1)),p(l,{href:"https://github.com/azer/logger-slack-hook"},{default:e(()=>[...s[10]||(s[10]=[n("slack-hook",-1)])]),_:1}),s[12]||(s[12]=n("， 我們可以很容易地在上面的示例中，使用 Slack 去整合它：",-1))]),s[70]||(s[70]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我們來解釋一下，在上面的示例中我們做了什麼：</p>`,2)),a("ul",null,[a("li",null,[s[14]||(s[14]=n("行 #5: 設置入站 webhook url。這個 URL ",-1)),p(l,{href:"https://my.slack.com/services/new/incoming-webhook/"},{default:e(()=>[...s[13]||(s[13]=[n("鏈接在這裏",-1)])]),_:1}),s[15]||(s[15]=n("。",-1))]),s[16]||(s[16]=a("li",null,"行 #6: 選擇流日誌的入口通道。",-1)),s[17]||(s[17]=a("li",null,"行 #7: 顯示的發送者的用户名。",-1)),s[18]||(s[18]=a("li",null,"行 #11: 使用流過濾器，僅輸出時間超過 200 ms 的定時器日誌。",-1))]),a("p",null,[s[20]||(s[20]=n("希望這個示例能給你提供一個大概的思路。如果你有更多的問題，去看這個 ",-1)),p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[19]||(s[19]=[n("記錄器",-1)])]),_:1}),s[21]||(s[21]=n("的文檔。",-1))]),s[71]||(s[71]=a("h3",{id:"一個真實的示例-crud",tabindex:"-1"},[n("一個真實的示例： CRUD "),a("a",{class:"header-anchor",href:"#一個真實的示例-crud","aria-label":"Permalink to “一個真實的示例： CRUD”"},"​")],-1)),a("p",null,[p(l,{href:"https://github.com/azer/crud"},{default:e(()=>[...s[22]||(s[22]=[n("crud",-1)])]),_:1}),s[24]||(s[24]=n(" 是一個用於 Go 的資料庫的 ORM 式的類庫，它有一個隱藏特性是內部日誌系統使用 ",-1)),p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[23]||(s[23]=[n("logger",-1)])]),_:1}),s[25]||(s[25]=n(" 。這可以讓我們很容易地去監視正在運行的 SQL 查詢。",-1))]),s[72]||(s[72]=i(`<h4 id="查詢" tabindex="-1">查詢 <a class="header-anchor" href="#查詢" aria-label="Permalink to “查詢”">​</a></h4><p>這有一個通過給定的 e-mail 去返回用户名的簡單查詢：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func GetUserNameByEmail (email string) (string, error) {</span></span>
<span class="line"><span>  var name string</span></span>
<span class="line"><span>  if err := DB.Read(&amp;name, &quot;SELECT name FROM user WHERE email=?&quot;, email); err != nil {</span></span>
<span class="line"><span>    return &quot;&quot;, err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return name, nil</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>好吧，這個太短了， 感覺好像缺少了什麼，讓我們增加全部的上下文：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,5)),a("p",null,[s[27]||(s[27]=n("因此，我們有一個通過環境變量 ",-1)),s[28]||(s[28]=a("code",null,"DATABASE_URL",-1)),s[29]||(s[29]=n(" 連接到 MySQL 資料庫的 ",-1)),p(l,{href:"https://github.com/azer/crud"},{default:e(()=>[...s[26]||(s[26]=[n("crud",-1)])]),_:1}),s[30]||(s[30]=n(" 實例。如果我們運行這個程序，將看到有一行輸出：",-1))]),s[73]||(s[73]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ DATABASE_URL=root:123456@/testdb go run example.go</span></span>
<span class="line"><span>Your username is: azer</span></span></code></pre></div>`,1)),a("p",null,[s[32]||(s[32]=n("正如我前面提到的，日誌是 ",-1)),p(l,{href:"http://www.linfo.org/rule_of_silence.html"},{default:e(()=>[...s[31]||(s[31]=[n("缺省靜默的",-1)])]),_:1}),s[33]||(s[33]=n("。讓我們看一下 crud 的內部日誌：",-1))]),s[74]||(s[74]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ LOG=crud go run example.go</span></span>
<span class="line"><span>22:56:29.691 crud(0): SQL Query Executed: SELECT username FROM user WHERE email=&#39;foo@bar.com&#39;</span></span>
<span class="line"><span>Your username is: azer</span></span></code></pre></div><p>這很簡單，並且足夠我們去查看在我們的開發環境中查詢是怎麼執行的。</p><h4 id="crud-和-slack-整合" tabindex="-1">CRUD 和 Slack 整合 <a class="header-anchor" href="#crud-和-slack-整合" aria-label="Permalink to “CRUD 和 Slack 整合”">​</a></h4><p>記錄器是為配置管理應用程序級的“內部日誌系統”而設計的。這意味着，你可以通過在你的應用程序級配置記錄器，讓 crud 的日誌流入 Slack ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在上面的代碼中：</p>`,6)),a("ul",null,[a("li",null,[s[36]||(s[36]=n("我們導入了 ",-1)),p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[34]||(s[34]=[n("logger",-1)])]),_:1}),s[37]||(s[37]=n(" 和 ",-1)),p(l,{href:"https://github.com/azer/logger-slack-hook"},{default:e(()=>[...s[35]||(s[35]=[n("logger-slack-hook",-1)])]),_:1}),s[38]||(s[38]=n(" 庫。",-1))]),a("li",null,[s[40]||(s[40]=n("我們配置記錄器日誌流入 Slack。這個配置覆蓋了代碼庫中 ",-1)),p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[39]||(s[39]=[n("記錄器",-1)])]),_:1}),s[41]||(s[41]=n(" 所有的用法， 包括第三方依賴。",-1))]),s[42]||(s[42]=a("li",null,"我們使用了流過濾器，僅輸出 MySQL 包中超過 250 ms 的定時器日誌。",-1))]),s[75]||(s[75]=a("p",null,"這種使用方法可以被擴展，而不僅是慢查詢報告。我個人使用它去跟蹤指定包中的重要錯誤， 也用於統計一些類似新用户登入或生成支付的日誌。",-1)),s[76]||(s[76]=a("h3",{id:"在這篇文章中提到的包",tabindex:"-1"},[n("在這篇文章中提到的包 "),a("a",{class:"header-anchor",href:"#在這篇文章中提到的包","aria-label":"Permalink to “在這篇文章中提到的包”"},"​")],-1)),a("ul",null,[a("li",null,[p(l,{href:"https://github.com/azer/crud"},{default:e(()=>[...s[43]||(s[43]=[n("crud",-1)])]),_:1})]),a("li",null,[p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[44]||(s[44]=[n("logger",-1)])]),_:1})]),a("li",null,[p(l,{href:"https://github.com/azer/logger"},{default:e(()=>[...s[45]||(s[45]=[n("logger-slack-hook",-1)])]),_:1})])]),a("p",null,[p(l,{href:"https://twitter.com/afrikaradyo"},{default:e(()=>[...s[46]||(s[46]=[n("告訴我們",-1)])]),_:1}),s[47]||(s[47]=n(" 如果你有任何的問題或建議。",-1))]),s[77]||(s[77]=a("hr",null,null,-1)),a("p",null,[s[49]||(s[49]=n("via: ",-1)),p(l,{href:"http://azer.bike/journal/monitoring-slow-sql-queries-via-slack/"},{default:e(()=>[...s[48]||(s[48]=[n("http://azer.bike/journal/monitoring-slow-sql-queries-via-slack/",-1)])]),_:1})]),a("p",null,[s[53]||(s[53]=n("作者：",-1)),p(l,{href:"http://azer.bike/"},{default:e(()=>[...s[50]||(s[50]=[n("Azer Koçulu",-1)])]),_:1}),s[54]||(s[54]=n(" 譯者：",-1)),p(l,{href:"https://github.com/qhwdw"},{default:e(()=>[...s[51]||(s[51]=[n("qhwdw",-1)])]),_:1}),s[55]||(s[55]=n(" 校對：",-1)),p(l,{href:"https://github.com/wxy"},{default:e(()=>[...s[52]||(s[52]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[58]||(s[58]=n("本文由 ",-1)),p(l,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[56]||(s[56]=[n("LCTT",-1)])]),_:1}),s[59]||(s[59]=n(" 原創編譯，",-1)),p(l,{href:"https://linux.cn/"},{default:e(()=>[...s[57]||(s[57]=[n("Linux中國",-1)])]),_:1}),s[60]||(s[60]=n(" 榮譽推出",-1))])])}const C=t(d,[["render",g]]);export{T as __pageData,C as default};
