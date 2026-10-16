import{_ as t,a0 as c,w as o,s as r,ao as l,I as i,x as n,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"使用 gorilla/mux 進行 HTTP 請求路由和驗證 | LCTT x X-CMD","titleTemplate":false,"description":"使用 gorilla/mux 進行 HTTP 請求路由和驗證 | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 gorilla/mux 進行 HTTP 請求路由和驗證 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 gorilla/mux 進行 HTTP 請求路由和驗證 | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20180814 HTTP request routing and validation with gorilla-mux","title":"使用 gorilla/mux 進行 HTTP 請求路由和驗證","tag":"201812","desc":""},"relativePath":"201812/20180814 HTTP request routing and validation with gorilla-mux.md","filePath":"[post].md"}'),d={name:"201812/20180814 HTTP request routing and validation with gorilla-mux.md"};function u(h,s,g,q,k,b){const a=c("Link");return o(),r("div",null,[s[28]||(s[28]=l(`<h1 id="使用-gorilla-mux-進行-http-請求路由和驗證" tabindex="-1">使用 gorilla/mux 進行 HTTP 請求路由和驗證 <a class="header-anchor" href="#使用-gorilla-mux-進行-http-請求路由和驗證" aria-label="Permalink to “使用 gorilla/mux 進行 HTTP 請求路由和驗證”">​</a></h1><blockquote><p>gorilla/mux 包以直觀的 API 提供了 HTTP 請求路由、驗證和其它服務。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/data_metrics_analytics_desktop_laptop.png?itok=9QXd7AUr" alt=""></p><p>Go 網絡庫包括 <code>http.ServeMux</code> 結構類型，它支持 HTTP 請求多路複用（路由）：Web 服務器將託管資源的 HTTP 請求與諸如 <code>/sales4today</code> 之類的 URI 路由到代碼處理程序；處理程序在發送 HTTP 響應（通常是 HTML 頁面）之前執行適當的邏輯。 這是該體系的草圖：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>             +-----------+     +--------+     +---------+</span></span>
<span class="line"><span>HTTP 請求----&gt;| web 服務器 |----&gt;| 路由   |----&gt;| 處理程序  |</span></span>
<span class="line"><span>             +-----------+     +--------+     +---------+</span></span></code></pre></div><p>調用 <code>ListenAndServe</code> 方法後啓動 HTTP 服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http.ListenAndServe(&quot;:8888&quot;, nil) // args: port &amp; router</span></span></code></pre></div><p>第二個參數 <code>nil</code> 意味着 <code>DefaultServeMux</code> 用於請求路由。</p><p><code>gorilla/mux</code> 庫包含 <code>mux.Router</code> 類型，可替代 <code>DefaultServeMux</code> 或自定義請求多路複用器。 在 <code>ListenAndServe</code> 調用中，<code>mux.Router</code> 實例將代替 <code>nil</code> 作為第二個參數。 下面的示例代碼很好的説明了為什麼 <code>mux.Router</code>如此吸引人：</p><h3 id="_1、一個簡單的-crud-web-應用程序" tabindex="-1">1、一個簡單的 CRUD web 應用程序 <a class="header-anchor" href="#_1、一個簡單的-crud-web-應用程序" aria-label="Permalink to “1、一個簡單的 CRUD web 應用程序”">​</a></h3><p>crud web 應用程序（見下文）支持四種 CRUD（創建/讀取/更新/刪除）操作，它們分別對應四種 HTTP 請求方法：POST、GET、PUT 和 DELETE。 在這個 CRUD 應用程序中，所管理的資源是套話與反套話的列表，每個都是套話及其反面的的套話，例如這對：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Out of sight, out of mind. Absence makes the heart grow fonder.</span></span></code></pre></div><p>可以添加新的套話對，可以編輯或刪除現有的套話對。</p><p>CRUD web 應用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>   &quot;gorilla/mux&quot;</span></span>
<span class="line"><span>   &quot;net/http&quot;</span></span>
<span class="line"><span>   &quot;fmt&quot;</span></span>
<span class="line"><span>   &quot;strconv&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const GETALL string = &quot;GETALL&quot;</span></span>
<span class="line"><span>const GETONE string = &quot;GETONE&quot;</span></span>
<span class="line"><span>const POST string   = &quot;POST&quot;</span></span>
<span class="line"><span>const PUT string    = &quot;PUT&quot;</span></span>
<span class="line"><span>const DELETE string = &quot;DELETE&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type clichePair struct {</span></span>
<span class="line"><span>   Id      int</span></span>
<span class="line"><span>   Cliche  string</span></span>
<span class="line"><span>   Counter string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Message sent to goroutine that accesses the requested resource.</span></span>
<span class="line"><span>type crudRequest struct {</span></span>
<span class="line"><span>   verb     string</span></span>
<span class="line"><span>   cp       *clichePair</span></span>
<span class="line"><span>   id       int</span></span>
<span class="line"><span>   cliche   string</span></span>
<span class="line"><span>   counter  string</span></span>
<span class="line"><span>   confirm  chan string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var clichesList = []*clichePair{}</span></span>
<span class="line"><span>var masterId = 1</span></span>
<span class="line"><span>var crudRequests chan *crudRequest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// GET /</span></span>
<span class="line"><span>// GET /cliches</span></span>
<span class="line"><span>func ClichesAll(res http.ResponseWriter, req *http.Request) {</span></span>
<span class="line"><span>   cr := &amp;crudRequest{verb: GETALL, confirm: make(chan string)}</span></span>
<span class="line"><span>   completeRequest(cr, res, &quot;read all&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// GET /cliches/id</span></span>
<span class="line"><span>func ClichesOne(res http.ResponseWriter, req *http.Request) {</span></span>
<span class="line"><span>   id := getIdFromRequest(req)</span></span>
<span class="line"><span>   cr := &amp;crudRequest{verb: GETONE, id: id, confirm: make(chan string)}</span></span>
<span class="line"><span>   completeRequest(cr, res, &quot;read one&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// POST /cliches</span></span>
<span class="line"><span>func ClichesCreate(res http.ResponseWriter, req *http.Request) {</span></span>
<span class="line"><span>   cliche, counter := getDataFromRequest(req)</span></span>
<span class="line"><span>   cp := new(clichePair)</span></span>
<span class="line"><span>   cp.Cliche = cliche</span></span>
<span class="line"><span>   cp.Counter = counter</span></span>
<span class="line"><span>   cr := &amp;crudRequest{verb: POST, cp: cp, confirm: make(chan string)}</span></span>
<span class="line"><span>   completeRequest(cr, res, &quot;create&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// PUT /cliches/id</span></span>
<span class="line"><span>func ClichesEdit(res http.ResponseWriter, req *http.Request) {</span></span>
<span class="line"><span>   id := getIdFromRequest(req)</span></span>
<span class="line"><span>   cliche, counter := getDataFromRequest(req)</span></span>
<span class="line"><span>   cr := &amp;crudRequest{verb: PUT, id: id, cliche: cliche, counter: counter, confirm: make(chan string)}</span></span>
<span class="line"><span>   completeRequest(cr, res, &quot;edit&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// DELETE /cliches/id</span></span>
<span class="line"><span>func ClichesDelete(res http.ResponseWriter, req *http.Request) {</span></span>
<span class="line"><span>   id := getIdFromRequest(req)</span></span>
<span class="line"><span>   cr := &amp;crudRequest{verb: DELETE, id: id, confirm: make(chan string)}</span></span>
<span class="line"><span>   completeRequest(cr, res, &quot;delete&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func completeRequest(cr *crudRequest, res http.ResponseWriter, logMsg string) {</span></span>
<span class="line"><span>   crudRequests&lt;-cr</span></span>
<span class="line"><span>   msg := &lt;-cr.confirm</span></span>
<span class="line"><span>   res.Write([]byte(msg))</span></span>
<span class="line"><span>   logIt(logMsg)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>   populateClichesList()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // From now on, this gorountine alone accesses the clichesList.</span></span>
<span class="line"><span>   crudRequests = make(chan *crudRequest, 8)</span></span>
<span class="line"><span>   go func() { // resource manager</span></span>
<span class="line"><span>      for {</span></span>
<span class="line"><span>         select {</span></span>
<span class="line"><span>         case req := &lt;-crudRequests:</span></span>
<span class="line"><span>         if req.verb == GETALL {</span></span>
<span class="line"><span>            req.confirm&lt;-readAll()</span></span>
<span class="line"><span>         } else if req.verb == GETONE {</span></span>
<span class="line"><span>            req.confirm&lt;-readOne(req.id)</span></span>
<span class="line"><span>         } else if req.verb == POST {</span></span>
<span class="line"><span>            req.confirm&lt;-addPair(req.cp)</span></span>
<span class="line"><span>         } else if req.verb == PUT {</span></span>
<span class="line"><span>            req.confirm&lt;-editPair(req.id, req.cliche, req.counter)</span></span>
<span class="line"><span>         } else if req.verb == DELETE {</span></span>
<span class="line"><span>            req.confirm&lt;-deletePair(req.id)</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }()</span></span>
<span class="line"><span>   startServer()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func startServer() {</span></span>
<span class="line"><span>   router := mux.NewRouter()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // Dispatch map for CRUD operations.</span></span>
<span class="line"><span>   router.HandleFunc(&quot;/&quot;, ClichesAll).Methods(&quot;GET&quot;)</span></span>
<span class="line"><span>   router.HandleFunc(&quot;/cliches&quot;, ClichesAll).Methods(&quot;GET&quot;)</span></span>
<span class="line"><span>   router.HandleFunc(&quot;/cliches/{id:[0-9]+}&quot;, ClichesOne).Methods(&quot;GET&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   router.HandleFunc(&quot;/cliches&quot;, ClichesCreate).Methods(&quot;POST&quot;)</span></span>
<span class="line"><span>   router.HandleFunc(&quot;/cliches/{id:[0-9]+}&quot;, ClichesEdit).Methods(&quot;PUT&quot;)</span></span>
<span class="line"><span>   router.HandleFunc(&quot;/cliches/{id:[0-9]+}&quot;, ClichesDelete).Methods(&quot;DELETE&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   http.Handle(&quot;/&quot;, router) // enable the router</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // Start the server.</span></span>
<span class="line"><span>   port := &quot;:8888&quot;</span></span>
<span class="line"><span>   fmt.Println(&quot;\\nListening on port &quot; + port)</span></span>
<span class="line"><span>   http.ListenAndServe(port, router); // mux.Router now in play</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Return entire list to requester.</span></span>
<span class="line"><span>func readAll() string {</span></span>
<span class="line"><span>   msg := &quot;\\n&quot;</span></span>
<span class="line"><span>   for _, cliche := range clichesList {</span></span>
<span class="line"><span>      next := strconv.Itoa(cliche.Id) + &quot;: &quot; + cliche.Cliche + &quot;  &quot; + cliche.Counter + &quot;\\n&quot;</span></span>
<span class="line"><span>      msg += next</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   return msg</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Return specified clichePair to requester.</span></span>
<span class="line"><span>func readOne(id int) string {</span></span>
<span class="line"><span>   msg := &quot;\\n&quot; + &quot;Bad Id: &quot; + strconv.Itoa(id) + &quot;\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   index := findCliche(id)</span></span>
<span class="line"><span>   if index &gt;= 0 {</span></span>
<span class="line"><span>      cliche := clichesList[index]</span></span>
<span class="line"><span>      msg = &quot;\\n&quot; + strconv.Itoa(id) + &quot;: &quot; + cliche.Cliche + &quot;  &quot; + cliche.Counter + &quot;\\n&quot;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   return msg</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Create a new clichePair and add to list</span></span>
<span class="line"><span>func addPair(cp *clichePair) string {</span></span>
<span class="line"><span>   cp.Id = masterId</span></span>
<span class="line"><span>   masterId++</span></span>
<span class="line"><span>   clichesList = append(clichesList, cp)</span></span>
<span class="line"><span>   return &quot;\\nCreated: &quot; + cp.Cliche + &quot; &quot; + cp.Counter + &quot;\\n&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Edit an existing clichePair</span></span>
<span class="line"><span>func editPair(id int, cliche string, counter string) string {</span></span>
<span class="line"><span>   msg := &quot;\\n&quot; + &quot;Bad Id: &quot; + strconv.Itoa(id) + &quot;\\n&quot;</span></span>
<span class="line"><span>   index := findCliche(id)</span></span>
<span class="line"><span>   if index &gt;= 0 {</span></span>
<span class="line"><span>      clichesList[index].Cliche = cliche</span></span>
<span class="line"><span>      clichesList[index].Counter = counter</span></span>
<span class="line"><span>      msg = &quot;\\nCliche edited: &quot; + cliche + &quot; &quot; + counter + &quot;\\n&quot;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   return msg</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Delete a clichePair</span></span>
<span class="line"><span>func deletePair(id int) string {</span></span>
<span class="line"><span>   idStr := strconv.Itoa(id)</span></span>
<span class="line"><span>   msg := &quot;\\n&quot; + &quot;Bad Id: &quot; + idStr + &quot;\\n&quot;</span></span>
<span class="line"><span>   index := findCliche(id)</span></span>
<span class="line"><span>   if index &gt;= 0 {</span></span>
<span class="line"><span>      clichesList = append(clichesList[:index], clichesList[index + 1:]...)</span></span>
<span class="line"><span>      msg = &quot;\\nCliche &quot; + idStr + &quot; deleted\\n&quot;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   return msg</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//*** utility functions</span></span>
<span class="line"><span>func findCliche(id int) int {</span></span>
<span class="line"><span>   for i := 0; i &lt; len(clichesList); i++ {</span></span>
<span class="line"><span>      if id == clichesList[i].Id {</span></span>
<span class="line"><span>         return i;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   return -1 // not found</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func getIdFromRequest(req *http.Request) int {</span></span>
<span class="line"><span>   vars := mux.Vars(req)</span></span>
<span class="line"><span>   id, _ := strconv.Atoi(vars[&quot;id&quot;])</span></span>
<span class="line"><span>   return id</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func getDataFromRequest(req *http.Request) (string, string) {</span></span>
<span class="line"><span>   // Extract the user-provided data for the new clichePair</span></span>
<span class="line"><span>   req.ParseForm()</span></span>
<span class="line"><span>   form := req.Form</span></span>
<span class="line"><span>   cliche := form[&quot;cliche&quot;][0]    // 1st and only member of a list</span></span>
<span class="line"><span>   counter := form[&quot;counter&quot;][0]  // ditto</span></span>
<span class="line"><span>   return cliche, counter</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func logIt(msg string) {</span></span>
<span class="line"><span>   fmt.Println(msg)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func populateClichesList() {</span></span>
<span class="line"><span>   var cliches = []string {</span></span>
<span class="line"><span>      &quot;Out of sight, out of mind.&quot;,</span></span>
<span class="line"><span>      &quot;A penny saved is a penny earned.&quot;,</span></span>
<span class="line"><span>      &quot;He who hesitates is lost.&quot;,</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   var counterCliches = []string {</span></span>
<span class="line"><span>      &quot;Absence makes the heart grow fonder.&quot;,</span></span>
<span class="line"><span>      &quot;Penny-wise and dollar-foolish.&quot;,</span></span>
<span class="line"><span>      &quot;Look before you leap.&quot;,</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   for i := 0; i &lt; len(cliches); i++ {</span></span>
<span class="line"><span>      cp := new(clichePair)</span></span>
<span class="line"><span>      cp.Id = masterId</span></span>
<span class="line"><span>      masterId++</span></span>
<span class="line"><span>      cp.Cliche = cliches[i]</span></span>
<span class="line"><span>      cp.Counter = counterCliches[i]</span></span>
<span class="line"><span>      clichesList = append(clichesList, cp)</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,15)),i("p",null,[s[1]||(s[1]=n("為了專注於請求路由和驗證，CRUD 應用程序不使用 HTML 頁面作為請求響應。 相反，請求會產生明文響應消息：套話對的列表是對 GET 請求的響應，確認新的套話對已添加到列表中是對 POST 請求的響應，依此類推。 這種簡化使得使用命令列實用程序（如 ",-1)),e(a,{href:"https://curl.haxx.se/"},{default:p(()=>[...s[0]||(s[0]=[n("curl",-1)])]),_:1}),s[2]||(s[2]=n("）可以輕鬆地測試應用程序，尤其是 ",-1)),s[3]||(s[3]=i("code",null,"gorilla/mux",-1)),s[4]||(s[4]=n(" 組件。",-1))]),i("p",null,[s[7]||(s[7]=i("code",null,"gorilla/mux",-1)),s[8]||(s[8]=n(" 包可以從 ",-1)),e(a,{href:"https://github.com/gorilla/mux"},{default:p(()=>[...s[5]||(s[5]=[n("GitHub",-1)])]),_:1}),s[9]||(s[9]=n(" 安裝。 CRUD app 無限期運行；因此，應使用 ",-1)),s[10]||(s[10]=i("code",null,"Control-C",-1)),s[11]||(s[11]=n(" 或同等命令終止。 CRUD 應用程序的代碼，以及自述文件和簡單的 curl 測試，可以在[我的網站] ",-1)),e(a,{href:"http://condor.depaul.edu/mkalin"},{default:p(()=>[...s[6]||(s[6]=[n("3",-1)])]),_:1}),s[12]||(s[12]=n("上找到。",-1))]),s[29]||(s[29]=l(`<h3 id="_2、請求路由" tabindex="-1">2、請求路由 <a class="header-anchor" href="#_2、請求路由" aria-label="Permalink to “2、請求路由”">​</a></h3><p><code>mux.Router</code> 擴展了 REST 風格的路由，它賦給 HTTP 方法（例如，GET）和 URL 末尾的 URI 或路徑（例如 <code>/cliches</code>）相同的權重。 URI 用作 HTTP 動詞（方法）的名詞。 例如，在HTTP請求中有一個起始行，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GET /cliches</span></span></code></pre></div><p>意味着得到所有的套話對，而一個起始線，如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>POST /cliches</span></span></code></pre></div><p>意味着從 HTTP 正文中的數據創建一個套話對。</p><p>在 CRUD web 應用程序中，有五個函數充當 HTTP 請求的五種變體的請求處理程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ClichesAll(...)    # GET: 獲取所有的套話對</span></span>
<span class="line"><span>ClichesOne(...)    # GET: 獲取指定的套話對</span></span>
<span class="line"><span>ClichesCreate(...) # POST: 創建新的套話對</span></span>
<span class="line"><span>ClichesEdit(...)   # PUT: 編輯現有的套話對</span></span>
<span class="line"><span>ClichesDelete(...) # DELETE: 刪除指定的套話對</span></span></code></pre></div><p>每個函數都有兩個參數：一個 <code>http.ResponseWriter</code> 用於向請求者發送一個響應，一個指向 <code>http.Request</code> 的指針，該指針封裝了底層 HTTP 請求的信息。 使用 <code>gorilla/mux</code> 包可以輕鬆地將這些請求處理程序註冊到Web服務器，並執行基於正則表達式的驗證。</p><p>CRUD 應用程序中的 <code>startServer</code> 函數註冊請求處理程序。 考慮這對註冊，<code>router</code> 作為 <code>mux.Router</code> 實例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/&quot;, ClichesAll).Methods(&quot;GET&quot;)</span></span>
<span class="line"><span>router.HandleFunc(&quot;/cliches&quot;, ClichesAll).Methods(&quot;GET&quot;)</span></span></code></pre></div><p>這些語句意味着對單斜線 <code>/</code> 或 <code>/cliches</code> 的 GET 請求應該路由到 <code>ClichesAll</code> 函數，然後處理請求。 例如，curl 請求（使用 <code>％</code> 作為命令列提示符）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% curl --request GET localhost:8888/</span></span></code></pre></div><p>會產生如下結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1: Out of sight, out of mind.  Absence makes the heart grow fonder.</span></span>
<span class="line"><span>2: A penny saved is a penny earned.  Penny-wise and dollar-foolish.</span></span>
<span class="line"><span>3: He who hesitates is lost.  Look before you leap.</span></span></code></pre></div><p>這三個套話對是 CRUD 應用程序中的初始數據。</p><p>在這句註冊語句中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/cliches&quot;, ClichesAll).Methods(&quot;GET&quot;)</span></span>
<span class="line"><span>router.HandleFunc(&quot;/cliches&quot;, ClichesCreate).Methods(&quot;POST&quot;)</span></span></code></pre></div><p>URI 是相同的（<code>/cliches</code>），但動詞不同：第一種情況下為 GET 請求，第二種情況下為 POST 請求。 此註冊舉例説明了 REST 樣式的路由，因為僅動詞的不同就足以將請求分派給兩個不同的處理程序。</p><p>註冊中允許多個 HTTP 方法，儘管這會影響 REST 風格路由的精髓：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/cliches&quot;, DoItAll).Methods(&quot;POST&quot;, &quot;GET&quot;)</span></span></code></pre></div><p>除了動詞和 URI 之外，還可以在功能上路由 HTTP 請求。 例如，註冊</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/cliches&quot;, ClichesCreate).Schemes(&quot;https&quot;).Methods(&quot;POST&quot;)</span></span></code></pre></div><p>要求對 POST 請求進行 HTTPS 訪問以創建新的套話對。以類似的方式，註冊可能需要具有指定的 HTTP 頭元素（例如，認證憑證）的請求。</p><h3 id="_3、-request-validation" tabindex="-1">3、 Request validation <a class="header-anchor" href="#_3、-request-validation" aria-label="Permalink to “3、 Request validation”">​</a></h3><p><code>gorilla/mux</code> 包採用簡單，直觀的方法通過正則表達式進行請求驗證。 考慮此請求處理程序以獲取一個操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/cliches/{id:[0-9]+}&quot;, ClichesOne).Methods(&quot;GET&quot;)</span></span></code></pre></div><p>此註冊排除了 HTTP 請求，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% curl --request GET localhost:8888/cliches/foo</span></span></code></pre></div><p>因為 foo 不是十進制數字。該請求導致熟悉的 404（未找到）狀態碼。 在此處理程序註冊中包含正則表達式模式可確保僅在請求 URI 以十進制整數值結束時才調用 <code>ClichesOne</code> 函數來處理請求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% curl --request GET localhost:8888/cliches/3  # ok</span></span></code></pre></div><p>另一個例子，請求如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% curl --request PUT --data &quot;...&quot; localhost:8888/cliches</span></span></code></pre></div><p>此請求導致狀態代碼為 405（錯誤方法），因為 /cliches URI 在 CRUD 應用程序中僅在 GET 和 POST 請求中註冊。 像 GET 請求一樣，PUT 請求必須在 URI 的末尾包含一個數字 id：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/cliches/{id:[0-9]+}&quot;, ClichesEdit).Methods(&quot;PUT&quot;)</span></span></code></pre></div><h3 id="_4、併發問題" tabindex="-1">4、併發問題 <a class="header-anchor" href="#_4、併發問題" aria-label="Permalink to “4、併發問題”">​</a></h3><p><code>gorilla/mux</code> 路由器作為單獨的 Go 協程執行對已註冊的請求處理程序的每次調用，這意味着併發性被內置於包中。 例如，如果有十個同時發出的請求，例如</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% curl --request POST --data &quot;...&quot; localhost:8888/cliches</span></span></code></pre></div><p>然後 <code>mux.Router</code> 啓動十個 Go 協程來執行 <code>ClichesCreate</code> 處理程序。</p><p>GET all、GET one、POST、PUT 和 DELETE 中的五個請求操作中，最後三個改變了所請求的資源，即包含套話對的共享 <code>clichesList</code>。 因此，CRUD app 需要通過協調對 <code>clichesList</code> 的訪問來保證安全的併發性。 在不同但等效的術語中，CRUD app 必須防止 <code>clichesList</code> 上的競爭條件。 在生產環境中，可以使用資料庫系統來存儲諸如 <code>clichesList</code> 之類的資源，然後可以通過資料庫事務來管理安全併發。</p><p>CRUD 應用程序採用推薦的Go方法來實現安全併發：</p><ul><li>只有一個 Go 協程，資源管理器在 CRUD app <code>startServer</code> 函數中啓動，一旦 Web 服務器開始偵聽請求，就可以訪問 <code>clichesList</code>。</li><li>諸如 <code>ClichesCreate</code> 和 <code>ClichesAll</code> 之類的請求處理程序向 Go 通道發送（指向）<code>crudRequest</code> 實例（默認情況下是線程安全的），並且資源管理器單獨從該通道讀取。 然後，資源管理器對 <code>clichesList</code> 執行請求的操作。</li></ul><p>安全併發體系結構繪製如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>            crudRequest                讀/寫</span></span>
<span class="line"><span></span></span>
<span class="line"><span>請求處理程序 -------------&gt; 資源託管者 ------------&gt; 套話列表</span></span></code></pre></div><p>在這種架構中，不需要顯式鎖定 <code>clichesList</code>，因為一旦 CRUD 請求開始進入，只有一個 Go 協程（資源管理器）訪問 <code>clichesList</code>。</p><p>為了使 CRUD 應用程序儘可能保持併發，在一方請求處理程序與另一方的單一資源管理器之間進行有效的分工至關重要。 在這裏，為了審查，是 <code>ClichesCreate</code> 請求處理程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func ClichesCreate(res http.ResponseWriter, req *http.Request) {</span></span>
<span class="line"><span>   cliche, counter := getDataFromRequest(req)</span></span>
<span class="line"><span>   cp := new(clichePair)</span></span>
<span class="line"><span>   cp.Cliche = cliche</span></span>
<span class="line"><span>   cp.Counter = counter</span></span>
<span class="line"><span>   cr := &amp;crudRequest{verb: POST, cp: cp, confirm: make(chan string)}</span></span>
<span class="line"><span>   completeRequest(cr, res, &quot;create&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>ClichesCreate</code> 調用實用函數 <code>getDataFromRequest</code>，它從 POST 請求中提取新的套話和反套話。 然後 <code>ClichesCreate</code> 函數創建一個新的 <code>ClichePair</code>，設置兩個字段，並創建一個 <code>crudRequest</code> 發送給單個資源管理器。 此請求包括一個確認通道，資源管理器使用該通道將信息返回給請求處理程序。 所有設置工作都可以在不涉及資源管理器的情況下完成，因為尚未訪問 <code>clichesList</code>。</p><p>請求處理程序調用實用程序函數，該函數從 POST 請求中提取新的套話和反套話。 然後，該函數創建一個新的，設置兩個字段，並創建一個 crudRequest 發送到單個資源管理器。 此請求包括一個確認通道，資源管理器使用該通道將信息返回給請求處理程序。 所有設置工作都可以在不涉及資源管理器的情況下完成，因為尚未訪問它。</p><p><code>completeRequest</code> 實用程序函數在 <code>ClichesCreate</code> 函數和其他請求處理程序的末尾調用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>completeRequest(cr, res, &quot;create&quot;) // shown above</span></span></code></pre></div><p>通過將 <code>crudRequest</code> 放入 <code>crudRequests</code> 頻道，使資源管理器發揮作用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func completeRequest(cr *crudRequest, res http.ResponseWriter, logMsg string) {</span></span>
<span class="line"><span>   crudRequests&lt;-cr          // 向資源託管者發送請求</span></span>
<span class="line"><span>   msg := &lt;-cr.confirm       // 等待確認</span></span>
<span class="line"><span>   res.Write([]byte(msg))    // 向請求方發送確認</span></span>
<span class="line"><span>   logIt(logMsg)             // 打印到標準輸出</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>對於 POST 請求，資源管理器調用實用程序函數 <code>addPair</code>，它會更改 <code>clichesList</code> 資源：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func addPair(cp *clichePair) string {</span></span>
<span class="line"><span>   cp.Id = masterId  // 分配一個唯一的 ID </span></span>
<span class="line"><span>   masterId++        // 更新 ID 計數器</span></span>
<span class="line"><span>   clichesList = append(clichesList, cp) // 更新列表</span></span>
<span class="line"><span>   return &quot;\\nCreated: &quot; + cp.Cliche + &quot; &quot; + cp.Counter + &quot;\\n&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>資源管理器為其他 CRUD 操作調用類似的實用程序函數。 值得重複的是，一旦 Web 服務器開始接受請求，資源管理器就是唯一可以讀取或寫入 <code>clichesList</code> 的 goroutine。</p><p>對於任何類型的 Web 應用程序，<code>gorilla/mux</code> 包在簡單直觀的 API 中提供請求路由、請求驗證和相關服務。 CRUD web 應用程序突出了軟件包的主要功能。</p><hr>`,58)),i("p",null,[s[14]||(s[14]=n("via: ",-1)),e(a,{href:"https://opensource.com/article/18/8/http-request-routing-validation-gorillamux"},{default:p(()=>[...s[13]||(s[13]=[n("https://opensource.com/article/18/8/http-request-routing-validation-gorillamux",-1)])]),_:1})]),i("p",null,[s[19]||(s[19]=n("作者：",-1)),e(a,{href:"https://opensource.com/users/mkalindepauledu"},{default:p(()=>[...s[15]||(s[15]=[n("Marty Kalin",-1)])]),_:1}),s[20]||(s[20]=n(" 選題：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[16]||(s[16]=[n("lujun9972",-1)])]),_:1}),s[21]||(s[21]=n(" 譯者：",-1)),e(a,{href:"https://github.com/yongshouzhang"},{default:p(()=>[...s[17]||(s[17]=[n("yongshouzhang",-1)])]),_:1}),s[22]||(s[22]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[18]||(s[18]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[25]||(s[25]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[23]||(s[23]=[n("LCTT",-1)])]),_:1}),s[26]||(s[26]=n(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[24]||(s[24]=[n("Linux中國",-1)])]),_:1}),s[27]||(s[27]=n(" 榮譽推出",-1))])])}const C=t(d,[["render",u]]);export{T as __pageData,C as default};
