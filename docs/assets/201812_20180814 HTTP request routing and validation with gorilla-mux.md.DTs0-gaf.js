import{_ as t,a0 as c,w as o,s as r,ao as l,I as i,x as n,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"使用 gorilla/mux 进行 HTTP 请求路由和验证 | LCTT x X-CMD","titleTemplate":false,"description":"使用 gorilla/mux 进行 HTTP 请求路由和验证 | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 gorilla/mux 进行 HTTP 请求路由和验证 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 gorilla/mux 进行 HTTP 请求路由和验证 | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20180814 HTTP request routing and validation with gorilla-mux","title":"使用 gorilla/mux 进行 HTTP 请求路由和验证","tag":"201812","desc":""},"relativePath":"201812/20180814 HTTP request routing and validation with gorilla-mux.md","filePath":"[post].md"}'),d={name:"201812/20180814 HTTP request routing and validation with gorilla-mux.md"};function u(h,s,g,q,k,b){const a=c("Link");return o(),r("div",null,[s[28]||(s[28]=l(`<h1 id="使用-gorilla-mux-进行-http-请求路由和验证" tabindex="-1">使用 gorilla/mux 进行 HTTP 请求路由和验证 <a class="header-anchor" href="#使用-gorilla-mux-进行-http-请求路由和验证" aria-label="Permalink to “使用 gorilla/mux 进行 HTTP 请求路由和验证”">​</a></h1><blockquote><p>gorilla/mux 包以直观的 API 提供了 HTTP 请求路由、验证和其它服务。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/data_metrics_analytics_desktop_laptop.png?itok=9QXd7AUr" alt=""></p><p>Go 网络库包括 <code>http.ServeMux</code> 结构类型，它支持 HTTP 请求多路复用（路由）：Web 服务器将托管资源的 HTTP 请求与诸如 <code>/sales4today</code> 之类的 URI 路由到代码处理程序；处理程序在发送 HTTP 响应（通常是 HTML 页面）之前执行适当的逻辑。 这是该体系的草图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>             +-----------+     +--------+     +---------+</span></span>
<span class="line"><span>HTTP 请求----&gt;| web 服务器 |----&gt;| 路由   |----&gt;| 处理程序  |</span></span>
<span class="line"><span>             +-----------+     +--------+     +---------+</span></span></code></pre></div><p>调用 <code>ListenAndServe</code> 方法后启动 HTTP 服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http.ListenAndServe(&quot;:8888&quot;, nil) // args: port &amp; router</span></span></code></pre></div><p>第二个参数 <code>nil</code> 意味着 <code>DefaultServeMux</code> 用于请求路由。</p><p><code>gorilla/mux</code> 库包含 <code>mux.Router</code> 类型，可替代 <code>DefaultServeMux</code> 或自定义请求多路复用器。 在 <code>ListenAndServe</code> 调用中，<code>mux.Router</code> 实例将代替 <code>nil</code> 作为第二个参数。 下面的示例代码很好的说明了为什么 <code>mux.Router</code>如此吸引人：</p><h3 id="_1、一个简单的-crud-web-应用程序" tabindex="-1">1、一个简单的 CRUD web 应用程序 <a class="header-anchor" href="#_1、一个简单的-crud-web-应用程序" aria-label="Permalink to “1、一个简单的 CRUD web 应用程序”">​</a></h3><p>crud web 应用程序（见下文）支持四种 CRUD（创建/读取/更新/删除）操作，它们分别对应四种 HTTP 请求方法：POST、GET、PUT 和 DELETE。 在这个 CRUD 应用程序中，所管理的资源是套话与反套话的列表，每个都是套话及其反面的的套话，例如这对：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Out of sight, out of mind. Absence makes the heart grow fonder.</span></span></code></pre></div><p>可以添加新的套话对，可以编辑或删除现有的套话对。</p><p>CRUD web 应用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,15)),i("p",null,[s[1]||(s[1]=n("为了专注于请求路由和验证，CRUD 应用程序不使用 HTML 页面作为请求响应。 相反，请求会产生明文响应消息：套话对的列表是对 GET 请求的响应，确认新的套话对已添加到列表中是对 POST 请求的响应，依此类推。 这种简化使得使用命令行实用程序（如 ",-1)),e(a,{href:"https://curl.haxx.se/"},{default:p(()=>[...s[0]||(s[0]=[n("curl",-1)])]),_:1}),s[2]||(s[2]=n("）可以轻松地测试应用程序，尤其是 ",-1)),s[3]||(s[3]=i("code",null,"gorilla/mux",-1)),s[4]||(s[4]=n(" 组件。",-1))]),i("p",null,[s[7]||(s[7]=i("code",null,"gorilla/mux",-1)),s[8]||(s[8]=n(" 包可以从 ",-1)),e(a,{href:"https://github.com/gorilla/mux"},{default:p(()=>[...s[5]||(s[5]=[n("GitHub",-1)])]),_:1}),s[9]||(s[9]=n(" 安装。 CRUD app 无限期运行；因此，应使用 ",-1)),s[10]||(s[10]=i("code",null,"Control-C",-1)),s[11]||(s[11]=n(" 或同等命令终止。 CRUD 应用程序的代码，以及自述文件和简单的 curl 测试，可以在[我的网站] ",-1)),e(a,{href:"http://condor.depaul.edu/mkalin"},{default:p(()=>[...s[6]||(s[6]=[n("3",-1)])]),_:1}),s[12]||(s[12]=n("上找到。",-1))]),s[29]||(s[29]=l(`<h3 id="_2、请求路由" tabindex="-1">2、请求路由 <a class="header-anchor" href="#_2、请求路由" aria-label="Permalink to “2、请求路由”">​</a></h3><p><code>mux.Router</code> 扩展了 REST 风格的路由，它赋给 HTTP 方法（例如，GET）和 URL 末尾的 URI 或路径（例如 <code>/cliches</code>）相同的权重。 URI 用作 HTTP 动词（方法）的名词。 例如，在HTTP请求中有一个起始行，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GET /cliches</span></span></code></pre></div><p>意味着得到所有的套话对，而一个起始线，如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>POST /cliches</span></span></code></pre></div><p>意味着从 HTTP 正文中的数据创建一个套话对。</p><p>在 CRUD web 应用程序中，有五个函数充当 HTTP 请求的五种变体的请求处理程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ClichesAll(...)    # GET: 获取所有的套话对</span></span>
<span class="line"><span>ClichesOne(...)    # GET: 获取指定的套话对</span></span>
<span class="line"><span>ClichesCreate(...) # POST: 创建新的套话对</span></span>
<span class="line"><span>ClichesEdit(...)   # PUT: 编辑现有的套话对</span></span>
<span class="line"><span>ClichesDelete(...) # DELETE: 删除指定的套话对</span></span></code></pre></div><p>每个函数都有两个参数：一个 <code>http.ResponseWriter</code> 用于向请求者发送一个响应，一个指向 <code>http.Request</code> 的指针，该指针封装了底层 HTTP 请求的信息。 使用 <code>gorilla/mux</code> 包可以轻松地将这些请求处理程序注册到Web服务器，并执行基于正则表达式的验证。</p><p>CRUD 应用程序中的 <code>startServer</code> 函数注册请求处理程序。 考虑这对注册，<code>router</code> 作为 <code>mux.Router</code> 实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/&quot;, ClichesAll).Methods(&quot;GET&quot;)</span></span>
<span class="line"><span>router.HandleFunc(&quot;/cliches&quot;, ClichesAll).Methods(&quot;GET&quot;)</span></span></code></pre></div><p>这些语句意味着对单斜线 <code>/</code> 或 <code>/cliches</code> 的 GET 请求应该路由到 <code>ClichesAll</code> 函数，然后处理请求。 例如，curl 请求（使用 <code>％</code> 作为命令行提示符）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% curl --request GET localhost:8888/</span></span></code></pre></div><p>会产生如下结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1: Out of sight, out of mind.  Absence makes the heart grow fonder.</span></span>
<span class="line"><span>2: A penny saved is a penny earned.  Penny-wise and dollar-foolish.</span></span>
<span class="line"><span>3: He who hesitates is lost.  Look before you leap.</span></span></code></pre></div><p>这三个套话对是 CRUD 应用程序中的初始数据。</p><p>在这句注册语句中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/cliches&quot;, ClichesAll).Methods(&quot;GET&quot;)</span></span>
<span class="line"><span>router.HandleFunc(&quot;/cliches&quot;, ClichesCreate).Methods(&quot;POST&quot;)</span></span></code></pre></div><p>URI 是相同的（<code>/cliches</code>），但动词不同：第一种情况下为 GET 请求，第二种情况下为 POST 请求。 此注册举例说明了 REST 样式的路由，因为仅动词的不同就足以将请求分派给两个不同的处理程序。</p><p>注册中允许多个 HTTP 方法，尽管这会影响 REST 风格路由的精髓：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/cliches&quot;, DoItAll).Methods(&quot;POST&quot;, &quot;GET&quot;)</span></span></code></pre></div><p>除了动词和 URI 之外，还可以在功能上路由 HTTP 请求。 例如，注册</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/cliches&quot;, ClichesCreate).Schemes(&quot;https&quot;).Methods(&quot;POST&quot;)</span></span></code></pre></div><p>要求对 POST 请求进行 HTTPS 访问以创建新的套话对。以类似的方式，注册可能需要具有指定的 HTTP 头元素（例如，认证凭证）的请求。</p><h3 id="_3、-request-validation" tabindex="-1">3、 Request validation <a class="header-anchor" href="#_3、-request-validation" aria-label="Permalink to “3、 Request validation”">​</a></h3><p><code>gorilla/mux</code> 包采用简单，直观的方法通过正则表达式进行请求验证。 考虑此请求处理程序以获取一个操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/cliches/{id:[0-9]+}&quot;, ClichesOne).Methods(&quot;GET&quot;)</span></span></code></pre></div><p>此注册排除了 HTTP 请求，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% curl --request GET localhost:8888/cliches/foo</span></span></code></pre></div><p>因为 foo 不是十进制数字。该请求导致熟悉的 404（未找到）状态码。 在此处理程序注册中包含正则表达式模式可确保仅在请求 URI 以十进制整数值结束时才调用 <code>ClichesOne</code> 函数来处理请求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% curl --request GET localhost:8888/cliches/3  # ok</span></span></code></pre></div><p>另一个例子，请求如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% curl --request PUT --data &quot;...&quot; localhost:8888/cliches</span></span></code></pre></div><p>此请求导致状态代码为 405（错误方法），因为 /cliches URI 在 CRUD 应用程序中仅在 GET 和 POST 请求中注册。 像 GET 请求一样，PUT 请求必须在 URI 的末尾包含一个数字 id：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;/cliches/{id:[0-9]+}&quot;, ClichesEdit).Methods(&quot;PUT&quot;)</span></span></code></pre></div><h3 id="_4、并发问题" tabindex="-1">4、并发问题 <a class="header-anchor" href="#_4、并发问题" aria-label="Permalink to “4、并发问题”">​</a></h3><p><code>gorilla/mux</code> 路由器作为单独的 Go 协程执行对已注册的请求处理程序的每次调用，这意味着并发性被内置于包中。 例如，如果有十个同时发出的请求，例如</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% curl --request POST --data &quot;...&quot; localhost:8888/cliches</span></span></code></pre></div><p>然后 <code>mux.Router</code> 启动十个 Go 协程来执行 <code>ClichesCreate</code> 处理程序。</p><p>GET all、GET one、POST、PUT 和 DELETE 中的五个请求操作中，最后三个改变了所请求的资源，即包含套话对的共享 <code>clichesList</code>。 因此，CRUD app 需要通过协调对 <code>clichesList</code> 的访问来保证安全的并发性。 在不同但等效的术语中，CRUD app 必须防止 <code>clichesList</code> 上的竞争条件。 在生产环境中，可以使用数据库系统来存储诸如 <code>clichesList</code> 之类的资源，然后可以通过数据库事务来管理安全并发。</p><p>CRUD 应用程序采用推荐的Go方法来实现安全并发：</p><ul><li>只有一个 Go 协程，资源管理器在 CRUD app <code>startServer</code> 函数中启动，一旦 Web 服务器开始侦听请求，就可以访问 <code>clichesList</code>。</li><li>诸如 <code>ClichesCreate</code> 和 <code>ClichesAll</code> 之类的请求处理程序向 Go 通道发送（指向）<code>crudRequest</code> 实例（默认情况下是线程安全的），并且资源管理器单独从该通道读取。 然后，资源管理器对 <code>clichesList</code> 执行请求的操作。</li></ul><p>安全并发体系结构绘制如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>            crudRequest                读/写</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请求处理程序 -------------&gt; 资源托管者 ------------&gt; 套话列表</span></span></code></pre></div><p>在这种架构中，不需要显式锁定 <code>clichesList</code>，因为一旦 CRUD 请求开始进入，只有一个 Go 协程（资源管理器）访问 <code>clichesList</code>。</p><p>为了使 CRUD 应用程序尽可能保持并发，在一方请求处理程序与另一方的单一资源管理器之间进行有效的分工至关重要。 在这里，为了审查，是 <code>ClichesCreate</code> 请求处理程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func ClichesCreate(res http.ResponseWriter, req *http.Request) {</span></span>
<span class="line"><span>   cliche, counter := getDataFromRequest(req)</span></span>
<span class="line"><span>   cp := new(clichePair)</span></span>
<span class="line"><span>   cp.Cliche = cliche</span></span>
<span class="line"><span>   cp.Counter = counter</span></span>
<span class="line"><span>   cr := &amp;crudRequest{verb: POST, cp: cp, confirm: make(chan string)}</span></span>
<span class="line"><span>   completeRequest(cr, res, &quot;create&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>ClichesCreate</code> 调用实用函数 <code>getDataFromRequest</code>，它从 POST 请求中提取新的套话和反套话。 然后 <code>ClichesCreate</code> 函数创建一个新的 <code>ClichePair</code>，设置两个字段，并创建一个 <code>crudRequest</code> 发送给单个资源管理器。 此请求包括一个确认通道，资源管理器使用该通道将信息返回给请求处理程序。 所有设置工作都可以在不涉及资源管理器的情况下完成，因为尚未访问 <code>clichesList</code>。</p><p>请求处理程序调用实用程序函数，该函数从 POST 请求中提取新的套话和反套话。 然后，该函数创建一个新的，设置两个字段，并创建一个 crudRequest 发送到单个资源管理器。 此请求包括一个确认通道，资源管理器使用该通道将信息返回给请求处理程序。 所有设置工作都可以在不涉及资源管理器的情况下完成，因为尚未访问它。</p><p><code>completeRequest</code> 实用程序函数在 <code>ClichesCreate</code> 函数和其他请求处理程序的末尾调用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>completeRequest(cr, res, &quot;create&quot;) // shown above</span></span></code></pre></div><p>通过将 <code>crudRequest</code> 放入 <code>crudRequests</code> 频道，使资源管理器发挥作用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func completeRequest(cr *crudRequest, res http.ResponseWriter, logMsg string) {</span></span>
<span class="line"><span>   crudRequests&lt;-cr          // 向资源托管者发送请求</span></span>
<span class="line"><span>   msg := &lt;-cr.confirm       // 等待确认</span></span>
<span class="line"><span>   res.Write([]byte(msg))    // 向请求方发送确认</span></span>
<span class="line"><span>   logIt(logMsg)             // 打印到标准输出</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>对于 POST 请求，资源管理器调用实用程序函数 <code>addPair</code>，它会更改 <code>clichesList</code> 资源：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func addPair(cp *clichePair) string {</span></span>
<span class="line"><span>   cp.Id = masterId  // 分配一个唯一的 ID </span></span>
<span class="line"><span>   masterId++        // 更新 ID 计数器</span></span>
<span class="line"><span>   clichesList = append(clichesList, cp) // 更新列表</span></span>
<span class="line"><span>   return &quot;\\nCreated: &quot; + cp.Cliche + &quot; &quot; + cp.Counter + &quot;\\n&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>资源管理器为其他 CRUD 操作调用类似的实用程序函数。 值得重复的是，一旦 Web 服务器开始接受请求，资源管理器就是唯一可以读取或写入 <code>clichesList</code> 的 goroutine。</p><p>对于任何类型的 Web 应用程序，<code>gorilla/mux</code> 包在简单直观的 API 中提供请求路由、请求验证和相关服务。 CRUD web 应用程序突出了软件包的主要功能。</p><hr>`,58)),i("p",null,[s[14]||(s[14]=n("via: ",-1)),e(a,{href:"https://opensource.com/article/18/8/http-request-routing-validation-gorillamux"},{default:p(()=>[...s[13]||(s[13]=[n("https://opensource.com/article/18/8/http-request-routing-validation-gorillamux",-1)])]),_:1})]),i("p",null,[s[19]||(s[19]=n("作者：",-1)),e(a,{href:"https://opensource.com/users/mkalindepauledu"},{default:p(()=>[...s[15]||(s[15]=[n("Marty Kalin",-1)])]),_:1}),s[20]||(s[20]=n(" 选题：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[16]||(s[16]=[n("lujun9972",-1)])]),_:1}),s[21]||(s[21]=n(" 译者：",-1)),e(a,{href:"https://github.com/yongshouzhang"},{default:p(()=>[...s[17]||(s[17]=[n("yongshouzhang",-1)])]),_:1}),s[22]||(s[22]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[18]||(s[18]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[25]||(s[25]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[23]||(s[23]=[n("LCTT",-1)])]),_:1}),s[26]||(s[26]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[24]||(s[24]=[n("Linux中国",-1)])]),_:1}),s[27]||(s[27]=n(" 荣誉推出",-1))])])}const C=t(d,[["render",u]]);export{T as __pageData,C as default};
