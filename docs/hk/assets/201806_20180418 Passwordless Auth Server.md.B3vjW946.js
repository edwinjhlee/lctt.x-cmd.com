import{_ as l,a0 as r,w as o,s as d,I as a,x as n,a1 as e,A as t,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"無密碼驗證：服務器 | LCTT x X-CMD","titleTemplate":false,"description":"無密碼驗證：服務器 | LCTT (201806) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"無密碼驗證：服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"無密碼驗證：服務器 | LCTT (201806) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201806/20180418 Passwordless Auth Server","title":"無密碼驗證：服務器","tag":"201806","desc":""},"relativePath":"201806/20180418 Passwordless Auth Server.md","filePath":"[post].md"}'),c={name:"201806/20180418 Passwordless Auth Server.md"};function u(h,s,g,k,b,f){const p=r("Link");return o(),d("div",null,[s[58]||(s[58]=a("h1",{id:"無密碼驗證-服務器",tabindex:"-1"},[n("無密碼驗證：服務器 "),a("a",{class:"header-anchor",href:"#無密碼驗證-服務器","aria-label":"Permalink to “無密碼驗證：服務器”"},"​")],-1)),s[59]||(s[59]=a("p",null,"無密碼驗證可以讓你只輸入一個 email 而無需輸入密碼即可登入系統。這是一種比傳統的電子郵件/密碼驗證方式登入更安全的方法。",-1)),a("p",null,[s[1]||(s[1]=n("下面我將為你展示，如何在 ",-1)),e(p,{href:"https://golang.org/"},{default:t(()=>[...s[0]||(s[0]=[n("Go",-1)])]),_:1}),s[2]||(s[2]=n(" 中實現一個 HTTP API 去提供這種服務。",-1))]),s[60]||(s[60]=a("h3",{id:"流程",tabindex:"-1"},[n("流程 "),a("a",{class:"header-anchor",href:"#流程","aria-label":"Permalink to “流程”"},"​")],-1)),s[61]||(s[61]=a("ul",null,[a("li",null,"用户輸入他的電子郵件地址。"),a("li",null,"服務器創建一個臨時的一次性使用的代碼（就像一個臨時密碼一樣）關聯到用户，然後給用户郵箱中發送一個“魔法鏈接”。"),a("li",null,"用户點擊魔法鏈接。"),a("li",null,"服務器提取魔法鏈接中的代碼，獲取關聯的用户，並且使用一個新的 JWT 重定向到客户端。"),a("li",null,"在每次有新請求時，客户端使用 JWT 去驗證用户。")],-1)),s[62]||(s[62]=a("h3",{id:"必需條件",tabindex:"-1"},[n("必需條件 "),a("a",{class:"header-anchor",href:"#必需條件","aria-label":"Permalink to “必需條件”"},"​")],-1)),a("ul",null,[a("li",null,[s[4]||(s[4]=n("資料庫：我們為這個服務使用了一個叫 ",-1)),e(p,{href:"https://www.cockroachlabs.com/"},{default:t(()=>[...s[3]||(s[3]=[n("CockroachDB",-1)])]),_:1}),s[5]||(s[5]=n(" 的 SQL 資料庫。它非常像 postgres，但它是用 Go 寫的。",-1))]),a("li",null,[s[7]||(s[7]=n("SMTP 服務器：我們將使用一個第三方的郵件服務器去發送郵件。開發的時我們使用 ",-1)),e(p,{href:"https://mailtrap.io/"},{default:t(()=>[...s[6]||(s[6]=[n("mailtrap",-1)])]),_:1}),s[8]||(s[8]=n("。Mailtrap 發送所有的郵件到它的收件箱，因此，你在測試時不需要創建多個假郵件帳户。",-1))])]),a("p",null,[s[10]||(s[10]=n("從 ",-1)),e(p,{href:"https://golang.org/dl/"},{default:t(()=>[...s[9]||(s[9]=[n("Go 的主頁",-1)])]),_:1}),s[11]||(s[11]=n(" 上安裝它，然後使用 ",-1)),s[12]||(s[12]=a("code",null,"go version",-1)),s[13]||(s[13]=n("（1.10.1 atm）命令去檢查它能否正常工作。",-1))]),a("p",null,[s[15]||(s[15]=n("從 ",-1)),e(p,{href:"https://www.cockroachlabs.com/docs/stable/install-cockroachdb.html"},{default:t(()=>[...s[14]||(s[14]=[n("CockroachDB 的主頁",-1)])]),_:1}),s[16]||(s[16]=n(" 上下載它，展開它並添加到你的 ",-1)),s[17]||(s[17]=a("code",null,"PATH",-1)),s[18]||(s[18]=n(" 變量中。使用 ",-1)),s[19]||(s[19]=a("code",null,"cockroach version",-1)),s[20]||(s[20]=n("（2.0 atm）命令檢查它能否正常工作。",-1))]),s[63]||(s[63]=i(`<h3 id="資料庫模式" tabindex="-1">資料庫模式 <a class="header-anchor" href="#資料庫模式" aria-label="Permalink to “資料庫模式”">​</a></h3><p>現在，我們在 <code>GOPATH</code> 目錄下為這個項目創建一個目錄，然後使用 <code>cockroach start</code> 啓動一個新的 CockroachDB 節點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cockroach start --insecure --host 127.0.0.1</span></span></code></pre></div><p>它會輸出一些內容，找到 SQL 地址行，它將顯示像 <code>postgresql://root@127.0.0.1:26257?sslmode=disable</code> 這樣的內容。稍後我們將使用它去連接到資料庫。</p><p>使用如下的內容去創建一個 <code>schema.sql</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>DROP DATABASE IF EXISTS passwordless_demo CASCADE;</span></span>
<span class="line"><span>CREATE DATABASE IF NOT EXISTS passwordless_demo;</span></span>
<span class="line"><span>SET DATABASE = passwordless_demo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE IF NOT EXISTS users (</span></span>
<span class="line"><span>    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),</span></span>
<span class="line"><span>    email STRING UNIQUE,</span></span>
<span class="line"><span>    username STRING UNIQUE</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE IF NOT EXISTS verification_codes (</span></span>
<span class="line"><span>    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),</span></span>
<span class="line"><span>    user_id UUID NOT NULL REFERENCES users ON DELETE CASCADE,</span></span>
<span class="line"><span>    created_at TIMESTAMPTZ NOT NULL DEFAULT now()</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO users (email, username) VALUES</span></span>
<span class="line"><span>    (&#39;john@passwordless.local&#39;, &#39;john_doe&#39;);</span></span></code></pre></div><p>這個腳本創建了一個名為 <code>passwordless_demo</code> 的資料庫、兩個名為 <code>users</code> 和 <code>verification_codes</code> 的表，以及為了稍後測試而插入的一些假用户。每個驗證代碼都與用户關聯並保存創建時間，以用於去檢查驗證代碼是否過期。</p><p>在另外的終端中使用 <code>cockroach sql</code> 命令去運行這個腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat schema.sql | cockroach sql --insecure</span></span></code></pre></div><h3 id="環境配置" tabindex="-1">環境配置 <a class="header-anchor" href="#環境配置" aria-label="Permalink to “環境配置”">​</a></h3><p>需要配置兩個環境變量：<code>SMTP_USERNAME</code> 和 <code>SMTP_PASSWORD</code>，你可以從你的 mailtrap 帳户中獲得它們。將在我們的程序中用到它們。</p><h3 id="go-依賴" tabindex="-1">Go 依賴 <a class="header-anchor" href="#go-依賴" aria-label="Permalink to “Go 依賴”">​</a></h3><p>我們需要下列的 Go 包：</p>`,13)),a("ul",null,[a("li",null,[e(p,{href:"https://github.com/lib/pq"},{default:t(()=>[...s[21]||(s[21]=[n("github.com/lib/pq",-1)])]),_:1}),s[22]||(s[22]=n("：它是 CockroachDB 使用的 postgres 驅動",-1))]),a("li",null,[e(p,{href:"https://github.com/matryer/way"},{default:t(()=>[...s[23]||(s[23]=[n("github.com/matryer/way",-1)])]),_:1}),s[24]||(s[24]=n(": 路由器",-1))]),a("li",null,[e(p,{href:"https://github.com/dgrijalva/jwt-go"},{default:t(()=>[...s[25]||(s[25]=[n("github.com/dgrijalva/jwt-go",-1)])]),_:1}),s[26]||(s[26]=n(": JWT 實現",-1))])]),s[64]||(s[64]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go get -u github.com/lib/pq</span></span>
<span class="line"><span>go get -u github.com/matryer/way</span></span>
<span class="line"><span>go get -u github.com/dgrijalva/jwt-go</span></span></code></pre></div><h3 id="代碼" tabindex="-1">代碼 <a class="header-anchor" href="#代碼" aria-label="Permalink to “代碼”">​</a></h3><h4 id="初始化函數" tabindex="-1">初始化函數 <a class="header-anchor" href="#初始化函數" aria-label="Permalink to “初始化函數”">​</a></h4><p>創建 <code>main.go</code> 並且通過 <code>init</code> 函數里的環境變量中取得一些配置來啓動。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var config struct {</span></span>
<span class="line"><span>    port        int</span></span>
<span class="line"><span>    appURL      *url.URL</span></span>
<span class="line"><span>    databaseURL string</span></span>
<span class="line"><span>    jwtKey      []byte</span></span>
<span class="line"><span>    smtpAddr    string</span></span>
<span class="line"><span>    smtpAuth    smtp.Auth</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func init() {</span></span>
<span class="line"><span>    config.port, _ = strconv.Atoi(env(&quot;PORT&quot;, &quot;80&quot;))</span></span>
<span class="line"><span>    config.appURL, _ = url.Parse(env(&quot;APP_URL&quot;, &quot;http://localhost:&quot;+strconv.Itoa(config.port)+&quot;/&quot;))</span></span>
<span class="line"><span>    config.databaseURL = env(&quot;DATABASE_URL&quot;, &quot;postgresql://root@127.0.0.1:26257/passwordless_demo?sslmode=disable&quot;)</span></span>
<span class="line"><span>    config.jwtKey = []byte(env(&quot;JWT_KEY&quot;, &quot;super-duper-secret-key&quot;))</span></span>
<span class="line"><span>    smtpHost := env(&quot;SMTP_HOST&quot;, &quot;smtp.mailtrap.io&quot;)</span></span>
<span class="line"><span>    config.smtpAddr = net.JoinHostPort(smtpHost, env(&quot;SMTP_PORT&quot;, &quot;25&quot;))</span></span>
<span class="line"><span>    smtpUsername, ok := os.LookupEnv(&quot;SMTP_USERNAME&quot;)</span></span>
<span class="line"><span>    if !ok {</span></span>
<span class="line"><span>        log.Fatalln(&quot;could not find SMTP_USERNAME on environment variables&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    smtpPassword, ok := os.LookupEnv(&quot;SMTP_PASSWORD&quot;)</span></span>
<span class="line"><span>    if !ok {</span></span>
<span class="line"><span>        log.Fatalln(&quot;could not find SMTP_PASSWORD on environment variables&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    config.smtpAuth = smtp.PlainAuth(&quot;&quot;, smtpUsername, smtpPassword, smtpHost)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func env(key, fallbackValue string) string {</span></span>
<span class="line"><span>    v, ok := os.LookupEnv(key)</span></span>
<span class="line"><span>    if !ok {</span></span>
<span class="line"><span>        return fallbackValue</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return v</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><code>appURL</code> 將去構建我們的 “魔法鏈接”。</li><li><code>port</code> 將要啓動的 HTTP 服務器。</li><li><code>databaseURL</code> 是 CockroachDB 地址，我添加 <code>/passwordless_demo</code> 前面的資料庫地址去表示資料庫名字。</li><li><code>jwtKey</code> 用於簽名 JWT。</li><li><code>smtpAddr</code> 是 <code>SMTP_HOST</code> + <code>SMTP_PORT</code> 的聯合；我們將使用它去發送郵件。</li><li><code>smtpUsername</code> 和 <code>smtpPassword</code> 是兩個必需的變量。</li><li><code>smtpAuth</code> 也是用於發送郵件。</li></ul><p><code>env</code> 函數允許我們去獲得環境變量，不存在時返回一個回退值。</p><h4 id="主函數" tabindex="-1">主函數 <a class="header-anchor" href="#主函數" aria-label="Permalink to “主函數”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var db *sql.DB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    var err error</span></span>
<span class="line"><span>    if db, err = sql.Open(&quot;postgres&quot;, config.databaseURL); err != nil {</span></span>
<span class="line"><span>        log.Fatalf(&quot;could not open database connection: %v\\n&quot;, err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    defer db.Close()</span></span>
<span class="line"><span>    if err = db.Ping(); err != nil {</span></span>
<span class="line"><span>        log.Fatalf(&quot;could not ping to database: %v\\n&quot;, err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    router := way.NewRouter()</span></span>
<span class="line"><span>    router.HandleFunc(&quot;POST&quot;, &quot;/api/users&quot;, jsonRequired(createUser))</span></span>
<span class="line"><span>    router.HandleFunc(&quot;POST&quot;, &quot;/api/passwordless/start&quot;, jsonRequired(passwordlessStart))</span></span>
<span class="line"><span>    router.HandleFunc(&quot;GET&quot;, &quot;/api/passwordless/verify_redirect&quot;, passwordlessVerifyRedirect)</span></span>
<span class="line"><span>    router.Handle(&quot;GET&quot;, &quot;/api/auth_user&quot;, authRequired(getAuthUser))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    addr := fmt.Sprintf(&quot;:%d&quot;, config.port)</span></span>
<span class="line"><span>    log.Printf(&quot;starting server at %s \\n&quot;, config.appURL)</span></span>
<span class="line"><span>    log.Fatalf(&quot;could not start server: %v\\n&quot;, http.ListenAndServe(addr, router))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>首先，打開資料庫連接。記得要加載驅動。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
<span class="line"><span>    _ &quot;github.com/lib/pq&quot;</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>然後，我們創建路由器並定義一些端點。對於無密碼流程來説，我們使用兩個端點：<code>/api/passwordless/start</code> 發送魔法鏈接，和 <code>/api/passwordless/verify_redirect</code> 用 JWT 響應。</p><p>最後，我們啓動服務器。</p><p>你可以創建空處理程序和中間件去測試服務器啓動。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func createUser(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>    http.Error(w, http.StatusText(http.StatusNotImplemented), http.StatusNotImplemented)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func passwordlessStart(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>    http.Error(w, http.StatusText(http.StatusNotImplemented), http.StatusNotImplemented)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func passwordlessVerifyRedirect(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>    http.Error(w, http.StatusText(http.StatusNotImplemented), http.StatusNotImplemented)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func getAuthUser(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>    http.Error(w, http.StatusText(http.StatusNotImplemented), http.StatusNotImplemented)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func jsonRequired(next http.HandlerFunc) http.HandlerFunc {</span></span>
<span class="line"><span>    return func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>        next(w, r)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func authRequired(next http.HandlerFunc) http.HandlerFunc {</span></span>
<span class="line"><span>    return func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>        next(w, r)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接下來：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go build</span></span>
<span class="line"><span>./passwordless-demo</span></span></code></pre></div><p>我們在目錄中有了一個 “passwordless-demo”，但是你的目錄中可能與示例不一樣，<code>go build</code> 將創建一個同名的可執行文件。如果你沒有關閉前面的 cockroach 節點，並且你正確配置了 <code>SMTP_USERNAME</code> 和 <code>SMTP_PASSWORD</code> 變量，你將看到命令 <code>starting server at http://localhost/ </code> 沒有錯誤輸出。</p><h4 id="請求-json-的中間件" tabindex="-1">請求 JSON 的中間件 <a class="header-anchor" href="#請求-json-的中間件" aria-label="Permalink to “請求 JSON 的中間件”">​</a></h4><p>端點需要從請求體中解碼 JSON，因此要確保請求是 <code>application/json</code> 類型。因為它是一個通用的東西，我將它解耦到中間件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func jsonRequired(next http.HandlerFunc) http.HandlerFunc {</span></span>
<span class="line"><span>    return func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>        ct := r.Header.Get(&quot;Content-Type&quot;)</span></span>
<span class="line"><span>        isJSON := strings.HasPrefix(ct, &quot;application/json&quot;)</span></span>
<span class="line"><span>        if !isJSON {</span></span>
<span class="line"><span>            respondJSON(w, &quot;JSON body required&quot;, http.StatusUnsupportedMediaType)</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        next(w, r)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>實現很容易。首先它從請求頭中獲得內容的類型，然後檢查它是否是以 “application/json” 開始，如果不是則以 <code>415 Unsupported Media Type</code> 提前返回。</p><h4 id="響應-json-的函數" tabindex="-1">響應 JSON 的函數 <a class="header-anchor" href="#響應-json-的函數" aria-label="Permalink to “響應 JSON 的函數”">​</a></h4><p>以 JSON 響應是非常通用的做法，因此我把它提取到函數中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func respondJSON(w http.ResponseWriter, payload interface{}, code int) {</span></span>
<span class="line"><span>    switch value := payload.(type) {</span></span>
<span class="line"><span>    case string:</span></span>
<span class="line"><span>        payload = map[string]string{&quot;message&quot;: value}</span></span>
<span class="line"><span>    case int:</span></span>
<span class="line"><span>        payload = map[string]int{&quot;value&quot;: value}</span></span>
<span class="line"><span>    case bool:</span></span>
<span class="line"><span>        payload = map[string]bool{&quot;result&quot;: value}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    b, err := json.Marshal(payload)</span></span>
<span class="line"><span>    if err != nil {</span></span>
<span class="line"><span>        respondInternalError(w, fmt.Errorf(&quot;could not marshal response payload: %v&quot;, err))</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    w.Header().Set(&quot;Content-Type&quot;, &quot;application/json; charset=utf-8&quot;)</span></span>
<span class="line"><span>    w.WriteHeader(code)</span></span>
<span class="line"><span>    w.Write(b)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>首先，對原始類型做一個類型判斷，並將它們封裝到一個 <code>map</code>。然後將它們編組到 JSON，設置響應內容類型和狀態碼，並寫 JSON。如果 JSON 編組失敗，則響應一個內部錯誤。</p><h4 id="響應內部錯誤的函數" tabindex="-1">響應內部錯誤的函數 <a class="header-anchor" href="#響應內部錯誤的函數" aria-label="Permalink to “響應內部錯誤的函數”">​</a></h4><p><code>respondInternalError</code> 是一個響應 <code>500 Internal Server Error</code> 的函數，但是也同時將錯誤輸出到控制台。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func respondInternalError(w http.ResponseWriter, err error) {</span></span>
<span class="line"><span>    log.Println(err)</span></span>
<span class="line"><span>    respondJSON(w,</span></span>
<span class="line"><span>        http.StatusText(http.StatusInternalServerError),</span></span>
<span class="line"><span>        http.StatusInternalServerError)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="創建用户的處理程序" tabindex="-1">創建用户的處理程序 <a class="header-anchor" href="#創建用户的處理程序" aria-label="Permalink to “創建用户的處理程序”">​</a></h4><p>下面開始編寫 <code>createUser</code> 處理程序，因為它非常容易並且是 REST 式的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type User struct {</span></span>
<span class="line"><span>    ID       string \`json:&quot;id&quot;\`</span></span>
<span class="line"><span>    Email    string \`json:&quot;email&quot;\`</span></span>
<span class="line"><span>    Username string \`json:&quot;username&quot;\`</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>User</code> 類型和 <code>users</code> 表相似。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var (</span></span>
<span class="line"><span>    rxEmail = regexp.MustCompile(&quot;^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$&quot;)</span></span>
<span class="line"><span>    rxUsername = regexp.MustCompile(&quot;^[a-zA-Z][\\\\w|-]{1,17}$&quot;)</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>這些正則表達式是分別用於去驗證電子郵件和用户名的。這些都很簡單，可以根據你的需要隨意去適配。</p><p>現在，在 <code>createUser</code> 函數內部，我們將開始解碼請求體。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var user User</span></span>
<span class="line"><span>if err := json.NewDecoder(r.Body).Decode(&amp;user); err != nil {</span></span>
<span class="line"><span>    respondJSON(w, err.Error(), http.StatusBadRequest)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>defer r.Body.Close()</span></span></code></pre></div><p>我們將使用請求體去創建一個 JSON 解碼器來解碼出一個用户指針。如果發生錯誤則返回一個 <code>400 Bad Request</code>。不要忘記關閉請求體讀取器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>errs := make(map[string]string)</span></span>
<span class="line"><span>if user.Email == &quot;&quot; {</span></span>
<span class="line"><span>    errs[&quot;email&quot;] = &quot;Email required&quot;</span></span>
<span class="line"><span>} else if !rxEmail.MatchString(user.Email) {</span></span>
<span class="line"><span>    errs[&quot;email&quot;] = &quot;Invalid email&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if user.Username == &quot;&quot; {</span></span>
<span class="line"><span>    errs[&quot;username&quot;] = &quot;Username required&quot;</span></span>
<span class="line"><span>} else if !rxUsername.MatchString(user.Username) {</span></span>
<span class="line"><span>    errs[&quot;username&quot;] = &quot;Invalid username&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if len(errs) != 0 {</span></span>
<span class="line"><span>    respondJSON(w, errs, http.StatusUnprocessableEntity)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這是我如何做驗證；一個簡單的 <code>map</code> 並檢查如果 <code>len(errs) != 0</code>，則使用 <code>422 Unprocessable Entity</code> 去返回。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>err := db.QueryRowContext(r.Context(), \`</span></span>
<span class="line"><span>    INSERT INTO users (email, username) VALUES ($1, $2)</span></span>
<span class="line"><span>    RETURNING id</span></span>
<span class="line"><span>\`, user.Email, user.Username).Scan(&amp;user.ID)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if errPq, ok := err.(*pq.Error); ok &amp;&amp; errPq.Code.Name() == &quot;unique_violation&quot; {</span></span>
<span class="line"><span>    if strings.Contains(errPq.Error(), &quot;email&quot;) {</span></span>
<span class="line"><span>        errs[&quot;email&quot;] = &quot;Email taken&quot;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        errs[&quot;username&quot;] = &quot;Username taken&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    respondJSON(w, errs, http.StatusForbidden)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>} else if err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not insert user: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個 SQL 查詢使用一個給定的 email 和用户名去插入一個新用户，並返回自動生成的 id，每個 <code>$</code> 將被接下來傳遞給 <code>QueryRowContext</code> 的參數替換掉。</p><p>因為 <code>users</code> 表在 <code>email</code> 和 <code>username</code> 字段上有唯一性約束，因此我將檢查 “unique_violation” 錯誤並返回 <code>403 Forbidden</code> 或者返回一個內部錯誤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>respondJSON(w, user, http.StatusCreated)</span></span></code></pre></div><p>最後使用創建的用户去響應。</p><h4 id="無密碼驗證開始部分的處理程序" tabindex="-1">無密碼驗證開始部分的處理程序 <a class="header-anchor" href="#無密碼驗證開始部分的處理程序" aria-label="Permalink to “無密碼驗證開始部分的處理程序”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type PasswordlessStartRequest struct {</span></span>
<span class="line"><span>    Email       string \`json:&quot;email&quot;\`</span></span>
<span class="line"><span>    RedirectURI string \`json:&quot;redirectUri&quot;\`</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個結構體含有 <code>passwordlessStart</code> 的請求體：希望去登入的用户 email、來自客户端的重定向 URI（這個應用中將使用我們的 API）如：<code>https://frontend.app/callback</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var magicLinkTmpl = template.Must(template.ParseFiles(&quot;templates/magic-link.html&quot;))</span></span></code></pre></div><p>我們將使用 golang 模板引擎去構建郵件，因此需要你在 <code>templates</code> 目錄中，用如下的內容創建一個 <code>magic-link.html</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Magic Link&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    Click &lt;a href=&quot;{{ .MagicLink }}&quot; target=&quot;_blank&quot;&gt;here&lt;/a&gt; to login.</span></span>
<span class="line"><span>    &lt;br&gt;</span></span>
<span class="line"><span>    &lt;em&gt;This link expires in 15 minutes and can only be used once.&lt;/em&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>這個模板是給用户發送魔法鏈接郵件用的。你可以根據你的需要去隨意調整它。</p><p>現在， 進入 <code>passwordlessStart</code> 函數內部：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var input PasswordlessStartRequest</span></span>
<span class="line"><span>if err := json.NewDecoder(r.Body).Decode(&amp;input); err != nil {</span></span>
<span class="line"><span>    respondJSON(w, err.Error(), http.StatusBadRequest)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>defer r.Body.Close()</span></span></code></pre></div><p>首先，我們像前面一樣解碼請求體。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>errs := make(map[string]string)</span></span>
<span class="line"><span>if input.Email == &quot;&quot; {</span></span>
<span class="line"><span>    errs[&quot;email&quot;] = &quot;Email required&quot;</span></span>
<span class="line"><span>} else if !rxEmail.MatchString(input.Email) {</span></span>
<span class="line"><span>    errs[&quot;email&quot;] = &quot;Invalid email&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if input.RedirectURI == &quot;&quot; {</span></span>
<span class="line"><span>    errs[&quot;redirectUri&quot;] = &quot;Redirect URI required&quot;</span></span>
<span class="line"><span>} else if u, err := url.Parse(input.RedirectURI); err != nil || !u.IsAbs() {</span></span>
<span class="line"><span>    errs[&quot;redirectUri&quot;] = &quot;Invalid redirect URI&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if len(errs) != 0 {</span></span>
<span class="line"><span>    respondJSON(w, errs, http.StatusUnprocessableEntity)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們使用 golang 的 URL 解析器去驗證重定向 URI，檢查那個 URI 是否為絕對地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var verificationCode string</span></span>
<span class="line"><span>err := db.QueryRowContext(r.Context(), \`</span></span>
<span class="line"><span>    INSERT INTO verification_codes (user_id) VALUES</span></span>
<span class="line"><span>        ((SELECT id FROM users WHERE email = $1))</span></span>
<span class="line"><span>    RETURNING id</span></span>
<span class="line"><span>\`, input.Email).Scan(&amp;verificationCode)</span></span>
<span class="line"><span>if errPq, ok := err.(*pq.Error); ok &amp;&amp; errPq.Code.Name() == &quot;not_null_violation&quot; {</span></span>
<span class="line"><span>    respondJSON(w, &quot;No user found with that email&quot;, http.StatusNotFound)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>} else if err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not insert verification code: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個 SQL 查詢將插入一個驗證代碼，這個代碼通過給定的 email 關聯到用户，並且返回一個自動生成的 id。因為有可能會出現用户不存在的情況，那樣的話子查詢可能解析為 <code>NULL</code>，這將導致在 <code>user_id</code> 字段上因違反 <code>NOT NULL</code> 約束而導致失敗，因此需要對這種情況進行檢查，如果用户不存在，則返回 <code>404 Not Found</code> 或者一個內部錯誤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>q := make(url.Values)</span></span>
<span class="line"><span>q.Set(&quot;verification_code&quot;, verificationCode)</span></span>
<span class="line"><span>q.Set(&quot;redirect_uri&quot;, input.RedirectURI)</span></span>
<span class="line"><span>magicLink := *config.appURL</span></span>
<span class="line"><span>magicLink.Path = &quot;/api/passwordless/verify_redirect&quot;</span></span>
<span class="line"><span>magicLink.RawQuery = q.Encode()</span></span></code></pre></div><p>現在，構建魔法鏈接並設置查詢字符串中的 <code>verification_code</code> 和 <code>redirect_uri</code> 的值。如：<code>http://localhost/api/passwordless/verify_redirect?verification_code=some_code&amp;redirect_uri=https://frontend.app/callback</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var body bytes.Buffer</span></span>
<span class="line"><span>data := map[string]string{&quot;MagicLink&quot;: magicLink.String()}</span></span>
<span class="line"><span>if err := magicLinkTmpl.Execute(&amp;body, data); err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not execute magic link template: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們將得到的魔法鏈接模板的內容保存到緩衝區中。如果發生錯誤則返回一個內部錯誤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>to := mail.Address{Address: input.Email}</span></span>
<span class="line"><span>if err := sendMail(to, &quot;Magic Link&quot;, body.String()); err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not mail magic link: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>現在來寫給用户發郵件的 <code>sendMail</code> 函數。如果發生錯誤則返回一個內部錯誤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>w.WriteHeader(http.StatusNoContent)</span></span></code></pre></div><p>最後，設置響應狀態碼為 <code>204 No Content</code>。對於成功的狀態碼，客户端不需要很多數據。</p><h4 id="發送郵件函數" tabindex="-1">發送郵件函數 <a class="header-anchor" href="#發送郵件函數" aria-label="Permalink to “發送郵件函數”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func sendMail(to mail.Address, subject, body string) error {</span></span>
<span class="line"><span>    from := mail.Address{</span></span>
<span class="line"><span>        Name:    &quot;Passwordless Demo&quot;,</span></span>
<span class="line"><span>        Address: &quot;noreply@&quot; + config.appURL.Host,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    headers := map[string]string{</span></span>
<span class="line"><span>        &quot;From&quot;:         from.String(),</span></span>
<span class="line"><span>        &quot;To&quot;:           to.String(),</span></span>
<span class="line"><span>        &quot;Subject&quot;:      subject,</span></span>
<span class="line"><span>        &quot;Content-Type&quot;: \`text/html; charset=&quot;utf-8&quot;\`,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    msg := &quot;&quot;</span></span>
<span class="line"><span>    for k, v := range headers {</span></span>
<span class="line"><span>        msg += fmt.Sprintf(&quot;%s: %s\\r\\n&quot;, k, v)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    msg += &quot;\\r\\n&quot;</span></span>
<span class="line"><span>    msg += body</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return smtp.SendMail(</span></span>
<span class="line"><span>        config.smtpAddr,</span></span>
<span class="line"><span>        config.smtpAuth,</span></span>
<span class="line"><span>        from.Address,</span></span>
<span class="line"><span>        []string{to.Address},</span></span>
<span class="line"><span>        []byte(msg))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個函數創建一個基本的 HTML 郵件結構體並使用 SMTP 服務器去發送它。郵件的內容你可以隨意定製，我喜歡使用比較簡單的內容。</p><h4 id="無密碼驗證重定向的處理程序" tabindex="-1">無密碼驗證重定向的處理程序 <a class="header-anchor" href="#無密碼驗證重定向的處理程序" aria-label="Permalink to “無密碼驗證重定向的處理程序”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var rxUUID = regexp.MustCompile(&quot;^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$&quot;)</span></span></code></pre></div><p>首先，這個正則表達式去驗證一個 UUID（即驗證代碼）。</p><p>現在進入 <code>passwordlessVerifyRedirect</code> 函數內部：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>q := r.URL.Query()</span></span>
<span class="line"><span>verificationCode := q.Get(&quot;verification_code&quot;)</span></span>
<span class="line"><span>redirectURI := q.Get(&quot;redirect_uri&quot;)</span></span></code></pre></div><p><code>/api/passwordless/verify_redirect</code> 是一個 <code>GET</code> 端點，以便於我們從查詢字符串中讀取數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>errs := make(map[string]string)</span></span>
<span class="line"><span>if verificationCode == &quot;&quot; {</span></span>
<span class="line"><span>    errs[&quot;verification_code&quot;] = &quot;Verification code required&quot;</span></span>
<span class="line"><span>} else if !rxUUID.MatchString(verificationCode) {</span></span>
<span class="line"><span>    errs[&quot;verification_code&quot;] = &quot;Invalid verification code&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var callback *url.URL</span></span>
<span class="line"><span>var err error</span></span>
<span class="line"><span>if redirectURI == &quot;&quot; {</span></span>
<span class="line"><span>    errs[&quot;redirect_uri&quot;] = &quot;Redirect URI required&quot;</span></span>
<span class="line"><span>} else if callback, err = url.Parse(redirectURI); err != nil || !callback.IsAbs() {</span></span>
<span class="line"><span>    errs[&quot;redirect_uri&quot;] = &quot;Invalid redirect URI&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if len(errs) != 0 {</span></span>
<span class="line"><span>    respondJSON(w, errs, http.StatusUnprocessableEntity)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>類似的驗證，我們保存解析後的重定向 URI 到一個 <code>callback</code> 變量中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var userID string</span></span>
<span class="line"><span>if err := db.QueryRowContext(r.Context(), \`</span></span>
<span class="line"><span>    DELETE FROM verification_codes</span></span>
<span class="line"><span>    WHERE id = $1</span></span>
<span class="line"><span>        AND created_at &gt;= now() - INTERVAL &#39;15m&#39;</span></span>
<span class="line"><span>    RETURNING user_id</span></span>
<span class="line"><span>\`, verificationCode).Scan(&amp;userID); err == sql.ErrNoRows {</span></span>
<span class="line"><span>    respondJSON(w, &quot;Link expired or already used&quot;, http.StatusBadRequest)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>} else if err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not delete verification code: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個 SQL 查詢通過給定的 id 去刪除相應的驗證代碼，並且確保它創建之後時間不超過 15 分鐘，它也返回關聯的 <code>user_id</code>。如果沒有檢索到內容，意味着代碼不存在或者已過期，我們返回一個響應信息，否則就返回一個內部錯誤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>expiresAt := time.Now().Add(time.Hour * 24 * 60)</span></span>
<span class="line"><span>tokenString, err := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{</span></span>
<span class="line"><span>    Subject:   userID,</span></span>
<span class="line"><span>    ExpiresAt: expiresAt.Unix(),</span></span>
<span class="line"><span>}).SignedString(config.jwtKey)</span></span>
<span class="line"><span>if err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not create JWT: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這些是如何去創建 JWT。我們為 JWT 設置一個 60 天的過期值，你也可以設置更短的時間（大約 2 周），並添加一個新端點去刷新令牌，但是不要搞的過於複雜。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>expiresAtB, err := expiresAt.MarshalText()</span></span>
<span class="line"><span>if err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not marshal expiration date: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>f := make(url.Values)</span></span>
<span class="line"><span>f.Set(&quot;jwt&quot;, tokenString)</span></span>
<span class="line"><span>f.Set(&quot;expires_at&quot;, string(expiresAtB))</span></span>
<span class="line"><span>callback.Fragment = f.Encode()</span></span></code></pre></div><p>我們去規劃重定向；你可使用查詢字符串去添加 JWT，但是更常見的是使用一個哈希片段。如：<code>https://frontend.app/callback#jwt=token_here&amp;expires_at=some_date</code>.</p><p>過期日期可以從 JWT 中提取出來，但是這樣做的話，就需要在客户端上實現一個 JWT 庫來解碼它，因此為了簡化，我將它加到這裏。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http.Redirect(w, r, callback.String(), http.StatusFound)</span></span></code></pre></div><p>最後我們使用一個 <code>302 Found</code> 重定向。</p><hr><p>無密碼的流程已經完成。現在需要去寫 <code>getAuthUser</code> 端點的代碼了，它用於獲取當前驗證用户的信息。你應該還記得，這個端點使用了 <code>guard</code> 中間件。</p><h4 id="使用-auth-中間件" tabindex="-1">使用 Auth 中間件 <a class="header-anchor" href="#使用-auth-中間件" aria-label="Permalink to “使用 Auth 中間件”">​</a></h4><p>在編寫 <code>guard</code> 中間件之前，我將編寫一個不需要驗證的分支。目的是，如果沒有傳遞 JWT，它將不去驗證用户。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type ContextKey struct {</span></span>
<span class="line"><span>    Name string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var keyAuthUserID = ContextKey{&quot;auth_user_id&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func withAuth(next http.HandlerFunc) http.HandlerFunc {</span></span>
<span class="line"><span>    return func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>        a := r.Header.Get(&quot;Authorization&quot;)</span></span>
<span class="line"><span>        hasToken := strings.HasPrefix(a, &quot;Bearer &quot;)</span></span>
<span class="line"><span>        if !hasToken {</span></span>
<span class="line"><span>            next(w, r)</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        tokenString := a[7:]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        p := jwt.Parser{ValidMethods: []string{jwt.SigningMethodHS256.Name}}</span></span>
<span class="line"><span>        token, err := p.ParseWithClaims(</span></span>
<span class="line"><span>            tokenString,</span></span>
<span class="line"><span>            &amp;jwt.StandardClaims{},</span></span>
<span class="line"><span>            func (*jwt.Token) (interface{}, error) { return config.jwtKey, nil },</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        if err != nil {</span></span>
<span class="line"><span>            respondJSON(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        claims, ok := token.Claims.(*jwt.StandardClaims)</span></span>
<span class="line"><span>        if !ok || !token.Valid {</span></span>
<span class="line"><span>            respondJSON(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ctx := r.Context()</span></span>
<span class="line"><span>        ctx = context.WithValue(ctx, keyAuthUserID, claims.Subject)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        next(w, r.WithContext(ctx))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>JWT 將在每次請求時以 <code>Bearer &lt;token_here&gt;</code> 格式包含在 <code>Authorization</code> 頭中。因此，如果沒有提供令牌，我們將直接通過，進入接下來的中間件。</p><p>我們創建一個解析器來解析令牌。如果解析失敗則返回 <code>401 Unauthorized</code>。</p><p>然後我們從 JWT 中提取出要求的內容，並添加 <code>Subject</code>（就是用户 ID）到需要的地方。</p><h4 id="guard-中間件" tabindex="-1">Guard 中間件 <a class="header-anchor" href="#guard-中間件" aria-label="Permalink to “Guard 中間件”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func guard(next http.HandlerFunc) http.HandlerFunc {</span></span>
<span class="line"><span>    return withAuth(func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>        _, ok := r.Context().Value(keyAuthUserID).(string)</span></span>
<span class="line"><span>        if !ok {</span></span>
<span class="line"><span>            respondJSON(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        next(w, r)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>現在，<code>guard</code> 將使用 <code>withAuth</code> 並從請求內容中提取出驗證用户的 ID。如果提取失敗，它將返回 <code>401 Unauthorized</code>，提取成功則繼續下一步。</p><h4 id="獲取-auth-用户" tabindex="-1">獲取 Auth 用户 <a class="header-anchor" href="#獲取-auth-用户" aria-label="Permalink to “獲取 Auth 用户”">​</a></h4><p>在 <code>getAuthUser</code> 處理程序內部：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ctx := r.Context()</span></span>
<span class="line"><span>authUserID := ctx.Value(keyAuthUserID).(string)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>user, err := fetchUser(ctx, authUserID)</span></span>
<span class="line"><span>if err == sql.ErrNoRows {</span></span>
<span class="line"><span>    respondJSON(w, http.StatusText(http.StatusTeapot), http.StatusTeapot)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>} else if err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not query auth user: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>respondJSON(w, user, http.StatusOK)</span></span></code></pre></div><p>首先，我們從請求內容中提取驗證用户的 ID，我們使用這個 ID 去獲取用户。如果沒有獲取到內容，則發送一個 <code>418 I&#39;m a teapot</code>，或者一個內部錯誤。最後，我們將用這個用户去響應。</p><h4 id="獲取-user-函數" tabindex="-1">獲取 User 函數 <a class="header-anchor" href="#獲取-user-函數" aria-label="Permalink to “獲取 User 函數”">​</a></h4><p>下面你看到的是 <code>fetchUser</code> 函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func fetchUser(ctx context.Context, id string) (User, error) {</span></span>
<span class="line"><span>    user := User{ID: id}</span></span>
<span class="line"><span>    err := db.QueryRowContext(ctx, \`</span></span>
<span class="line"><span>        SELECT email, username FROM users WHERE id = $1</span></span>
<span class="line"><span>    \`, id).Scan(&amp;user.Email, &amp;user.Username)</span></span>
<span class="line"><span>    return user, err</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我將它解耦是因為通過 ID 來獲取用户是個常做的事。</p><hr>`,107)),a("p",null,[s[28]||(s[28]=n("以上就是全部的代碼。你可以自己去構建它和測試它。",-1)),e(p,{href:"https://go-passwordless-demo.herokuapp.com/"},{default:t(()=>[...s[27]||(s[27]=[n("這裏",-1)])]),_:1}),s[29]||(s[29]=n(" 還有一個 demo 你可以試用一下。",-1))]),a("p",null,[s[31]||(s[31]=n("如果你在 mailtrap 上點擊之後出現有關 ",-1)),s[32]||(s[32]=a("code",null,"腳本運行被攔截，因為文檔的框架是沙箱化的，並且沒有設置 'allow-scripts' 權限",-1)),s[33]||(s[33]=n(" 的問題，你可以嘗試右鍵點擊 “在新標籤中打開鏈接“。這樣做是安全的，因為郵件內容是 ",-1)),e(p,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox"},{default:t(()=>[...s[30]||(s[30]=[n("沙箱化的",-1)])]),_:1}),s[34]||(s[34]=n("。我在 ",-1)),s[35]||(s[35]=a("code",null,"localhost",-1)),s[36]||(s[36]=n(" 上有時也會出現這個問題，但是我認為你一旦以 ",-1)),s[37]||(s[37]=a("code",null,"https://",-1)),s[38]||(s[38]=n(" 方式部署到服務器上應該不會出現這個問題了。",-1))]),a("p",null,[s[40]||(s[40]=n("如果有任何問題，請在我的 ",-1)),e(p,{href:"https://github.com/nicolasparada/go-passwordless-demo"},{default:t(()=>[...s[39]||(s[39]=[n("GitHub repo",-1)])]),_:1}),s[41]||(s[41]=n(" 留言或者提交 PRs",-1))]),a("p",null,[s[43]||(s[43]=n("以後，我為這個 API 寫了一個客户端作為這篇文章的",-1)),e(p,{href:"https://nicolasparada.netlify.com/posts/passwordless-auth-client/"},{default:t(()=>[...s[42]||(s[42]=[n("第二部分",-1)])]),_:1}),s[44]||(s[44]=n("。",-1))]),s[65]||(s[65]=a("hr",null,null,-1)),a("p",null,[s[46]||(s[46]=n("via: ",-1)),e(p,{href:"https://nicolasparada.netlify.com/posts/passwordless-auth-server/"},{default:t(()=>[...s[45]||(s[45]=[n("https://nicolasparada.netlify.com/posts/passwordless-auth-server/",-1)])]),_:1})]),a("p",null,[s[50]||(s[50]=n("作者：",-1)),e(p,{href:"https://nicolasparada.netlify.com/"},{default:t(()=>[...s[47]||(s[47]=[n("Nicolás Parada",-1)])]),_:1}),s[51]||(s[51]=n(" 譯者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:t(()=>[...s[48]||(s[48]=[n("qhwdw",-1)])]),_:1}),s[52]||(s[52]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[49]||(s[49]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[55]||(s[55]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[53]||(s[53]=[n("LCTT",-1)])]),_:1}),s[56]||(s[56]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:t(()=>[...s[54]||(s[54]=[n("Linux中國",-1)])]),_:1}),s[57]||(s[57]=n(" 榮譽推出",-1))])])}const S=l(c,[["render",u]]);export{y as __pageData,S as default};
