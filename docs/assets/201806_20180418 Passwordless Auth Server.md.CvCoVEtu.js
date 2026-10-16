import{_ as l,a0 as r,w as o,s as d,I as a,x as n,a1 as e,A as t,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"无密码验证：服务器 | LCTT x X-CMD","titleTemplate":false,"description":"无密码验证：服务器 | LCTT (201806) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"无密码验证：服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"无密码验证：服务器 | LCTT (201806) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201806/20180418 Passwordless Auth Server","title":"无密码验证：服务器","tag":"201806","desc":""},"relativePath":"201806/20180418 Passwordless Auth Server.md","filePath":"[post].md"}'),c={name:"201806/20180418 Passwordless Auth Server.md"};function u(h,s,g,k,b,f){const p=r("Link");return o(),d("div",null,[s[58]||(s[58]=a("h1",{id:"无密码验证-服务器",tabindex:"-1"},[n("无密码验证：服务器 "),a("a",{class:"header-anchor",href:"#无密码验证-服务器","aria-label":"Permalink to “无密码验证：服务器”"},"​")],-1)),s[59]||(s[59]=a("p",null,"无密码验证可以让你只输入一个 email 而无需输入密码即可登入系统。这是一种比传统的电子邮件/密码验证方式登入更安全的方法。",-1)),a("p",null,[s[1]||(s[1]=n("下面我将为你展示，如何在 ",-1)),e(p,{href:"https://golang.org/"},{default:t(()=>[...s[0]||(s[0]=[n("Go",-1)])]),_:1}),s[2]||(s[2]=n(" 中实现一个 HTTP API 去提供这种服务。",-1))]),s[60]||(s[60]=a("h3",{id:"流程",tabindex:"-1"},[n("流程 "),a("a",{class:"header-anchor",href:"#流程","aria-label":"Permalink to “流程”"},"​")],-1)),s[61]||(s[61]=a("ul",null,[a("li",null,"用户输入他的电子邮件地址。"),a("li",null,"服务器创建一个临时的一次性使用的代码（就像一个临时密码一样）关联到用户，然后给用户邮箱中发送一个“魔法链接”。"),a("li",null,"用户点击魔法链接。"),a("li",null,"服务器提取魔法链接中的代码，获取关联的用户，并且使用一个新的 JWT 重定向到客户端。"),a("li",null,"在每次有新请求时，客户端使用 JWT 去验证用户。")],-1)),s[62]||(s[62]=a("h3",{id:"必需条件",tabindex:"-1"},[n("必需条件 "),a("a",{class:"header-anchor",href:"#必需条件","aria-label":"Permalink to “必需条件”"},"​")],-1)),a("ul",null,[a("li",null,[s[4]||(s[4]=n("数据库：我们为这个服务使用了一个叫 ",-1)),e(p,{href:"https://www.cockroachlabs.com/"},{default:t(()=>[...s[3]||(s[3]=[n("CockroachDB",-1)])]),_:1}),s[5]||(s[5]=n(" 的 SQL 数据库。它非常像 postgres，但它是用 Go 写的。",-1))]),a("li",null,[s[7]||(s[7]=n("SMTP 服务器：我们将使用一个第三方的邮件服务器去发送邮件。开发的时我们使用 ",-1)),e(p,{href:"https://mailtrap.io/"},{default:t(()=>[...s[6]||(s[6]=[n("mailtrap",-1)])]),_:1}),s[8]||(s[8]=n("。Mailtrap 发送所有的邮件到它的收件箱，因此，你在测试时不需要创建多个假邮件帐户。",-1))])]),a("p",null,[s[10]||(s[10]=n("从 ",-1)),e(p,{href:"https://golang.org/dl/"},{default:t(()=>[...s[9]||(s[9]=[n("Go 的主页",-1)])]),_:1}),s[11]||(s[11]=n(" 上安装它，然后使用 ",-1)),s[12]||(s[12]=a("code",null,"go version",-1)),s[13]||(s[13]=n("（1.10.1 atm）命令去检查它能否正常工作。",-1))]),a("p",null,[s[15]||(s[15]=n("从 ",-1)),e(p,{href:"https://www.cockroachlabs.com/docs/stable/install-cockroachdb.html"},{default:t(()=>[...s[14]||(s[14]=[n("CockroachDB 的主页",-1)])]),_:1}),s[16]||(s[16]=n(" 上下载它，展开它并添加到你的 ",-1)),s[17]||(s[17]=a("code",null,"PATH",-1)),s[18]||(s[18]=n(" 变量中。使用 ",-1)),s[19]||(s[19]=a("code",null,"cockroach version",-1)),s[20]||(s[20]=n("（2.0 atm）命令检查它能否正常工作。",-1))]),s[63]||(s[63]=i(`<h3 id="数据库模式" tabindex="-1">数据库模式 <a class="header-anchor" href="#数据库模式" aria-label="Permalink to “数据库模式”">​</a></h3><p>现在，我们在 <code>GOPATH</code> 目录下为这个项目创建一个目录，然后使用 <code>cockroach start</code> 启动一个新的 CockroachDB 节点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cockroach start --insecure --host 127.0.0.1</span></span></code></pre></div><p>它会输出一些内容，找到 SQL 地址行，它将显示像 <code>postgresql://root@127.0.0.1:26257?sslmode=disable</code> 这样的内容。稍后我们将使用它去连接到数据库。</p><p>使用如下的内容去创建一个 <code>schema.sql</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>DROP DATABASE IF EXISTS passwordless_demo CASCADE;</span></span>
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
<span class="line"><span>    (&#39;john@passwordless.local&#39;, &#39;john_doe&#39;);</span></span></code></pre></div><p>这个脚本创建了一个名为 <code>passwordless_demo</code> 的数据库、两个名为 <code>users</code> 和 <code>verification_codes</code> 的表，以及为了稍后测试而插入的一些假用户。每个验证代码都与用户关联并保存创建时间，以用于去检查验证代码是否过期。</p><p>在另外的终端中使用 <code>cockroach sql</code> 命令去运行这个脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat schema.sql | cockroach sql --insecure</span></span></code></pre></div><h3 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to “环境配置”">​</a></h3><p>需要配置两个环境变量：<code>SMTP_USERNAME</code> 和 <code>SMTP_PASSWORD</code>，你可以从你的 mailtrap 帐户中获得它们。将在我们的程序中用到它们。</p><h3 id="go-依赖" tabindex="-1">Go 依赖 <a class="header-anchor" href="#go-依赖" aria-label="Permalink to “Go 依赖”">​</a></h3><p>我们需要下列的 Go 包：</p>`,13)),a("ul",null,[a("li",null,[e(p,{href:"https://github.com/lib/pq"},{default:t(()=>[...s[21]||(s[21]=[n("github.com/lib/pq",-1)])]),_:1}),s[22]||(s[22]=n("：它是 CockroachDB 使用的 postgres 驱动",-1))]),a("li",null,[e(p,{href:"https://github.com/matryer/way"},{default:t(()=>[...s[23]||(s[23]=[n("github.com/matryer/way",-1)])]),_:1}),s[24]||(s[24]=n(": 路由器",-1))]),a("li",null,[e(p,{href:"https://github.com/dgrijalva/jwt-go"},{default:t(()=>[...s[25]||(s[25]=[n("github.com/dgrijalva/jwt-go",-1)])]),_:1}),s[26]||(s[26]=n(": JWT 实现",-1))])]),s[64]||(s[64]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go get -u github.com/lib/pq</span></span>
<span class="line"><span>go get -u github.com/matryer/way</span></span>
<span class="line"><span>go get -u github.com/dgrijalva/jwt-go</span></span></code></pre></div><h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to “代码”">​</a></h3><h4 id="初始化函数" tabindex="-1">初始化函数 <a class="header-anchor" href="#初始化函数" aria-label="Permalink to “初始化函数”">​</a></h4><p>创建 <code>main.go</code> 并且通过 <code>init</code> 函数里的环境变量中取得一些配置来启动。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var config struct {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><ul><li><code>appURL</code> 将去构建我们的 “魔法链接”。</li><li><code>port</code> 将要启动的 HTTP 服务器。</li><li><code>databaseURL</code> 是 CockroachDB 地址，我添加 <code>/passwordless_demo</code> 前面的数据库地址去表示数据库名字。</li><li><code>jwtKey</code> 用于签名 JWT。</li><li><code>smtpAddr</code> 是 <code>SMTP_HOST</code> + <code>SMTP_PORT</code> 的联合；我们将使用它去发送邮件。</li><li><code>smtpUsername</code> 和 <code>smtpPassword</code> 是两个必需的变量。</li><li><code>smtpAuth</code> 也是用于发送邮件。</li></ul><p><code>env</code> 函数允许我们去获得环境变量，不存在时返回一个回退值。</p><h4 id="主函数" tabindex="-1">主函数 <a class="header-anchor" href="#主函数" aria-label="Permalink to “主函数”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var db *sql.DB</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>首先，打开数据库连接。记得要加载驱动。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import (</span></span>
<span class="line"><span>    _ &quot;github.com/lib/pq&quot;</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>然后，我们创建路由器并定义一些端点。对于无密码流程来说，我们使用两个端点：<code>/api/passwordless/start</code> 发送魔法链接，和 <code>/api/passwordless/verify_redirect</code> 用 JWT 响应。</p><p>最后，我们启动服务器。</p><p>你可以创建空处理程序和中间件去测试服务器启动。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func createUser(w http.ResponseWriter, r *http.Request) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>接下来：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go build</span></span>
<span class="line"><span>./passwordless-demo</span></span></code></pre></div><p>我们在目录中有了一个 “passwordless-demo”，但是你的目录中可能与示例不一样，<code>go build</code> 将创建一个同名的可执行文件。如果你没有关闭前面的 cockroach 节点，并且你正确配置了 <code>SMTP_USERNAME</code> 和 <code>SMTP_PASSWORD</code> 变量，你将看到命令 <code>starting server at http://localhost/ </code> 没有错误输出。</p><h4 id="请求-json-的中间件" tabindex="-1">请求 JSON 的中间件 <a class="header-anchor" href="#请求-json-的中间件" aria-label="Permalink to “请求 JSON 的中间件”">​</a></h4><p>端点需要从请求体中解码 JSON，因此要确保请求是 <code>application/json</code> 类型。因为它是一个通用的东西，我将它解耦到中间件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func jsonRequired(next http.HandlerFunc) http.HandlerFunc {</span></span>
<span class="line"><span>    return func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>        ct := r.Header.Get(&quot;Content-Type&quot;)</span></span>
<span class="line"><span>        isJSON := strings.HasPrefix(ct, &quot;application/json&quot;)</span></span>
<span class="line"><span>        if !isJSON {</span></span>
<span class="line"><span>            respondJSON(w, &quot;JSON body required&quot;, http.StatusUnsupportedMediaType)</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        next(w, r)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>实现很容易。首先它从请求头中获得内容的类型，然后检查它是否是以 “application/json” 开始，如果不是则以 <code>415 Unsupported Media Type</code> 提前返回。</p><h4 id="响应-json-的函数" tabindex="-1">响应 JSON 的函数 <a class="header-anchor" href="#响应-json-的函数" aria-label="Permalink to “响应 JSON 的函数”">​</a></h4><p>以 JSON 响应是非常通用的做法，因此我把它提取到函数中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func respondJSON(w http.ResponseWriter, payload interface{}, code int) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>首先，对原始类型做一个类型判断，并将它们封装到一个 <code>map</code>。然后将它们编组到 JSON，设置响应内容类型和状态码，并写 JSON。如果 JSON 编组失败，则响应一个内部错误。</p><h4 id="响应内部错误的函数" tabindex="-1">响应内部错误的函数 <a class="header-anchor" href="#响应内部错误的函数" aria-label="Permalink to “响应内部错误的函数”">​</a></h4><p><code>respondInternalError</code> 是一个响应 <code>500 Internal Server Error</code> 的函数，但是也同时将错误输出到控制台。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func respondInternalError(w http.ResponseWriter, err error) {</span></span>
<span class="line"><span>    log.Println(err)</span></span>
<span class="line"><span>    respondJSON(w,</span></span>
<span class="line"><span>        http.StatusText(http.StatusInternalServerError),</span></span>
<span class="line"><span>        http.StatusInternalServerError)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="创建用户的处理程序" tabindex="-1">创建用户的处理程序 <a class="header-anchor" href="#创建用户的处理程序" aria-label="Permalink to “创建用户的处理程序”">​</a></h4><p>下面开始编写 <code>createUser</code> 处理程序，因为它非常容易并且是 REST 式的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type User struct {</span></span>
<span class="line"><span>    ID       string \`json:&quot;id&quot;\`</span></span>
<span class="line"><span>    Email    string \`json:&quot;email&quot;\`</span></span>
<span class="line"><span>    Username string \`json:&quot;username&quot;\`</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>User</code> 类型和 <code>users</code> 表相似。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var (</span></span>
<span class="line"><span>    rxEmail = regexp.MustCompile(&quot;^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$&quot;)</span></span>
<span class="line"><span>    rxUsername = regexp.MustCompile(&quot;^[a-zA-Z][\\\\w|-]{1,17}$&quot;)</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>这些正则表达式是分别用于去验证电子邮件和用户名的。这些都很简单，可以根据你的需要随意去适配。</p><p>现在，在 <code>createUser</code> 函数内部，我们将开始解码请求体。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var user User</span></span>
<span class="line"><span>if err := json.NewDecoder(r.Body).Decode(&amp;user); err != nil {</span></span>
<span class="line"><span>    respondJSON(w, err.Error(), http.StatusBadRequest)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>defer r.Body.Close()</span></span></code></pre></div><p>我们将使用请求体去创建一个 JSON 解码器来解码出一个用户指针。如果发生错误则返回一个 <code>400 Bad Request</code>。不要忘记关闭请求体读取器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>errs := make(map[string]string)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这是我如何做验证；一个简单的 <code>map</code> 并检查如果 <code>len(errs) != 0</code>，则使用 <code>422 Unprocessable Entity</code> 去返回。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>err := db.QueryRowContext(r.Context(), \`</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个 SQL 查询使用一个给定的 email 和用户名去插入一个新用户，并返回自动生成的 id，每个 <code>$</code> 将被接下来传递给 <code>QueryRowContext</code> 的参数替换掉。</p><p>因为 <code>users</code> 表在 <code>email</code> 和 <code>username</code> 字段上有唯一性约束，因此我将检查 “unique_violation” 错误并返回 <code>403 Forbidden</code> 或者返回一个内部错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>respondJSON(w, user, http.StatusCreated)</span></span></code></pre></div><p>最后使用创建的用户去响应。</p><h4 id="无密码验证开始部分的处理程序" tabindex="-1">无密码验证开始部分的处理程序 <a class="header-anchor" href="#无密码验证开始部分的处理程序" aria-label="Permalink to “无密码验证开始部分的处理程序”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type PasswordlessStartRequest struct {</span></span>
<span class="line"><span>    Email       string \`json:&quot;email&quot;\`</span></span>
<span class="line"><span>    RedirectURI string \`json:&quot;redirectUri&quot;\`</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个结构体含有 <code>passwordlessStart</code> 的请求体：希望去登入的用户 email、来自客户端的重定向 URI（这个应用中将使用我们的 API）如：<code>https://frontend.app/callback</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var magicLinkTmpl = template.Must(template.ParseFiles(&quot;templates/magic-link.html&quot;))</span></span></code></pre></div><p>我们将使用 golang 模板引擎去构建邮件，因此需要你在 <code>templates</code> 目录中，用如下的内容创建一个 <code>magic-link.html</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
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
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>这个模板是给用户发送魔法链接邮件用的。你可以根据你的需要去随意调整它。</p><p>现在， 进入 <code>passwordlessStart</code> 函数内部：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var input PasswordlessStartRequest</span></span>
<span class="line"><span>if err := json.NewDecoder(r.Body).Decode(&amp;input); err != nil {</span></span>
<span class="line"><span>    respondJSON(w, err.Error(), http.StatusBadRequest)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>defer r.Body.Close()</span></span></code></pre></div><p>首先，我们像前面一样解码请求体。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>errs := make(map[string]string)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我们使用 golang 的 URL 解析器去验证重定向 URI，检查那个 URI 是否为绝对地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var verificationCode string</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个 SQL 查询将插入一个验证代码，这个代码通过给定的 email 关联到用户，并且返回一个自动生成的 id。因为有可能会出现用户不存在的情况，那样的话子查询可能解析为 <code>NULL</code>，这将导致在 <code>user_id</code> 字段上因违反 <code>NOT NULL</code> 约束而导致失败，因此需要对这种情况进行检查，如果用户不存在，则返回 <code>404 Not Found</code> 或者一个内部错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>q := make(url.Values)</span></span>
<span class="line"><span>q.Set(&quot;verification_code&quot;, verificationCode)</span></span>
<span class="line"><span>q.Set(&quot;redirect_uri&quot;, input.RedirectURI)</span></span>
<span class="line"><span>magicLink := *config.appURL</span></span>
<span class="line"><span>magicLink.Path = &quot;/api/passwordless/verify_redirect&quot;</span></span>
<span class="line"><span>magicLink.RawQuery = q.Encode()</span></span></code></pre></div><p>现在，构建魔法链接并设置查询字符串中的 <code>verification_code</code> 和 <code>redirect_uri</code> 的值。如：<code>http://localhost/api/passwordless/verify_redirect?verification_code=some_code&amp;redirect_uri=https://frontend.app/callback</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var body bytes.Buffer</span></span>
<span class="line"><span>data := map[string]string{&quot;MagicLink&quot;: magicLink.String()}</span></span>
<span class="line"><span>if err := magicLinkTmpl.Execute(&amp;body, data); err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not execute magic link template: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们将得到的魔法链接模板的内容保存到缓冲区中。如果发生错误则返回一个内部错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>to := mail.Address{Address: input.Email}</span></span>
<span class="line"><span>if err := sendMail(to, &quot;Magic Link&quot;, body.String()); err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not mail magic link: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在来写给用户发邮件的 <code>sendMail</code> 函数。如果发生错误则返回一个内部错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>w.WriteHeader(http.StatusNoContent)</span></span></code></pre></div><p>最后，设置响应状态码为 <code>204 No Content</code>。对于成功的状态码，客户端不需要很多数据。</p><h4 id="发送邮件函数" tabindex="-1">发送邮件函数 <a class="header-anchor" href="#发送邮件函数" aria-label="Permalink to “发送邮件函数”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func sendMail(to mail.Address, subject, body string) error {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个函数创建一个基本的 HTML 邮件结构体并使用 SMTP 服务器去发送它。邮件的内容你可以随意定制，我喜欢使用比较简单的内容。</p><h4 id="无密码验证重定向的处理程序" tabindex="-1">无密码验证重定向的处理程序 <a class="header-anchor" href="#无密码验证重定向的处理程序" aria-label="Permalink to “无密码验证重定向的处理程序”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var rxUUID = regexp.MustCompile(&quot;^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$&quot;)</span></span></code></pre></div><p>首先，这个正则表达式去验证一个 UUID（即验证代码）。</p><p>现在进入 <code>passwordlessVerifyRedirect</code> 函数内部：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>q := r.URL.Query()</span></span>
<span class="line"><span>verificationCode := q.Get(&quot;verification_code&quot;)</span></span>
<span class="line"><span>redirectURI := q.Get(&quot;redirect_uri&quot;)</span></span></code></pre></div><p><code>/api/passwordless/verify_redirect</code> 是一个 <code>GET</code> 端点，以便于我们从查询字符串中读取数据。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>errs := make(map[string]string)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>类似的验证，我们保存解析后的重定向 URI 到一个 <code>callback</code> 变量中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var userID string</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个 SQL 查询通过给定的 id 去删除相应的验证代码，并且确保它创建之后时间不超过 15 分钟，它也返回关联的 <code>user_id</code>。如果没有检索到内容，意味着代码不存在或者已过期，我们返回一个响应信息，否则就返回一个内部错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>expiresAt := time.Now().Add(time.Hour * 24 * 60)</span></span>
<span class="line"><span>tokenString, err := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{</span></span>
<span class="line"><span>    Subject:   userID,</span></span>
<span class="line"><span>    ExpiresAt: expiresAt.Unix(),</span></span>
<span class="line"><span>}).SignedString(config.jwtKey)</span></span>
<span class="line"><span>if err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not create JWT: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这些是如何去创建 JWT。我们为 JWT 设置一个 60 天的过期值，你也可以设置更短的时间（大约 2 周），并添加一个新端点去刷新令牌，但是不要搞的过于复杂。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>expiresAtB, err := expiresAt.MarshalText()</span></span>
<span class="line"><span>if err != nil {</span></span>
<span class="line"><span>    respondInternalError(w, fmt.Errorf(&quot;could not marshal expiration date: %v&quot;, err))</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>f := make(url.Values)</span></span>
<span class="line"><span>f.Set(&quot;jwt&quot;, tokenString)</span></span>
<span class="line"><span>f.Set(&quot;expires_at&quot;, string(expiresAtB))</span></span>
<span class="line"><span>callback.Fragment = f.Encode()</span></span></code></pre></div><p>我们去规划重定向；你可使用查询字符串去添加 JWT，但是更常见的是使用一个哈希片段。如：<code>https://frontend.app/callback#jwt=token_here&amp;expires_at=some_date</code>.</p><p>过期日期可以从 JWT 中提取出来，但是这样做的话，就需要在客户端上实现一个 JWT 库来解码它，因此为了简化，我将它加到这里。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http.Redirect(w, r, callback.String(), http.StatusFound)</span></span></code></pre></div><p>最后我们使用一个 <code>302 Found</code> 重定向。</p><hr><p>无密码的流程已经完成。现在需要去写 <code>getAuthUser</code> 端点的代码了，它用于获取当前验证用户的信息。你应该还记得，这个端点使用了 <code>guard</code> 中间件。</p><h4 id="使用-auth-中间件" tabindex="-1">使用 Auth 中间件 <a class="header-anchor" href="#使用-auth-中间件" aria-label="Permalink to “使用 Auth 中间件”">​</a></h4><p>在编写 <code>guard</code> 中间件之前，我将编写一个不需要验证的分支。目的是，如果没有传递 JWT，它将不去验证用户。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type ContextKey struct {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>JWT 将在每次请求时以 <code>Bearer &lt;token_here&gt;</code> 格式包含在 <code>Authorization</code> 头中。因此，如果没有提供令牌，我们将直接通过，进入接下来的中间件。</p><p>我们创建一个解析器来解析令牌。如果解析失败则返回 <code>401 Unauthorized</code>。</p><p>然后我们从 JWT 中提取出要求的内容，并添加 <code>Subject</code>（就是用户 ID）到需要的地方。</p><h4 id="guard-中间件" tabindex="-1">Guard 中间件 <a class="header-anchor" href="#guard-中间件" aria-label="Permalink to “Guard 中间件”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func guard(next http.HandlerFunc) http.HandlerFunc {</span></span>
<span class="line"><span>    return withAuth(func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>        _, ok := r.Context().Value(keyAuthUserID).(string)</span></span>
<span class="line"><span>        if !ok {</span></span>
<span class="line"><span>            respondJSON(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        next(w, r)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在，<code>guard</code> 将使用 <code>withAuth</code> 并从请求内容中提取出验证用户的 ID。如果提取失败，它将返回 <code>401 Unauthorized</code>，提取成功则继续下一步。</p><h4 id="获取-auth-用户" tabindex="-1">获取 Auth 用户 <a class="header-anchor" href="#获取-auth-用户" aria-label="Permalink to “获取 Auth 用户”">​</a></h4><p>在 <code>getAuthUser</code> 处理程序内部：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ctx := r.Context()</span></span>
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
<span class="line"><span>respondJSON(w, user, http.StatusOK)</span></span></code></pre></div><p>首先，我们从请求内容中提取验证用户的 ID，我们使用这个 ID 去获取用户。如果没有获取到内容，则发送一个 <code>418 I&#39;m a teapot</code>，或者一个内部错误。最后，我们将用这个用户去响应。</p><h4 id="获取-user-函数" tabindex="-1">获取 User 函数 <a class="header-anchor" href="#获取-user-函数" aria-label="Permalink to “获取 User 函数”">​</a></h4><p>下面你看到的是 <code>fetchUser</code> 函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func fetchUser(ctx context.Context, id string) (User, error) {</span></span>
<span class="line"><span>    user := User{ID: id}</span></span>
<span class="line"><span>    err := db.QueryRowContext(ctx, \`</span></span>
<span class="line"><span>        SELECT email, username FROM users WHERE id = $1</span></span>
<span class="line"><span>    \`, id).Scan(&amp;user.Email, &amp;user.Username)</span></span>
<span class="line"><span>    return user, err</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我将它解耦是因为通过 ID 来获取用户是个常做的事。</p><hr>`,107)),a("p",null,[s[28]||(s[28]=n("以上就是全部的代码。你可以自己去构建它和测试它。",-1)),e(p,{href:"https://go-passwordless-demo.herokuapp.com/"},{default:t(()=>[...s[27]||(s[27]=[n("这里",-1)])]),_:1}),s[29]||(s[29]=n(" 还有一个 demo 你可以试用一下。",-1))]),a("p",null,[s[31]||(s[31]=n("如果你在 mailtrap 上点击之后出现有关 ",-1)),s[32]||(s[32]=a("code",null,"脚本运行被拦截，因为文档的框架是沙箱化的，并且没有设置 'allow-scripts' 权限",-1)),s[33]||(s[33]=n(" 的问题，你可以尝试右键点击 “在新标签中打开链接“。这样做是安全的，因为邮件内容是 ",-1)),e(p,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox"},{default:t(()=>[...s[30]||(s[30]=[n("沙箱化的",-1)])]),_:1}),s[34]||(s[34]=n("。我在 ",-1)),s[35]||(s[35]=a("code",null,"localhost",-1)),s[36]||(s[36]=n(" 上有时也会出现这个问题，但是我认为你一旦以 ",-1)),s[37]||(s[37]=a("code",null,"https://",-1)),s[38]||(s[38]=n(" 方式部署到服务器上应该不会出现这个问题了。",-1))]),a("p",null,[s[40]||(s[40]=n("如果有任何问题，请在我的 ",-1)),e(p,{href:"https://github.com/nicolasparada/go-passwordless-demo"},{default:t(()=>[...s[39]||(s[39]=[n("GitHub repo",-1)])]),_:1}),s[41]||(s[41]=n(" 留言或者提交 PRs",-1))]),a("p",null,[s[43]||(s[43]=n("以后，我为这个 API 写了一个客户端作为这篇文章的",-1)),e(p,{href:"https://nicolasparada.netlify.com/posts/passwordless-auth-client/"},{default:t(()=>[...s[42]||(s[42]=[n("第二部分",-1)])]),_:1}),s[44]||(s[44]=n("。",-1))]),s[65]||(s[65]=a("hr",null,null,-1)),a("p",null,[s[46]||(s[46]=n("via: ",-1)),e(p,{href:"https://nicolasparada.netlify.com/posts/passwordless-auth-server/"},{default:t(()=>[...s[45]||(s[45]=[n("https://nicolasparada.netlify.com/posts/passwordless-auth-server/",-1)])]),_:1})]),a("p",null,[s[50]||(s[50]=n("作者：",-1)),e(p,{href:"https://nicolasparada.netlify.com/"},{default:t(()=>[...s[47]||(s[47]=[n("Nicolás Parada",-1)])]),_:1}),s[51]||(s[51]=n(" 译者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:t(()=>[...s[48]||(s[48]=[n("qhwdw",-1)])]),_:1}),s[52]||(s[52]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[49]||(s[49]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[55]||(s[55]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[53]||(s[53]=[n("LCTT",-1)])]),_:1}),s[56]||(s[56]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:t(()=>[...s[54]||(s[54]=[n("Linux中国",-1)])]),_:1}),s[57]||(s[57]=n(" 荣誉推出",-1))])])}const S=l(c,[["render",u]]);export{y as __pageData,S as default};
