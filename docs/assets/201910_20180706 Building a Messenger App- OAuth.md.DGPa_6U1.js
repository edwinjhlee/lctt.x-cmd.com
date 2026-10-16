import{_ as l,a0 as i,w as r,s as o,I as a,x as n,a1 as t,A as e,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"构建一个即时消息应用（二）：OAuth | LCTT x X-CMD","titleTemplate":false,"description":"构建一个即时消息应用（二）：OAuth | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"构建一个即时消息应用（二）：OAuth | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"构建一个即时消息应用（二）：OAuth | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20180706 Building a Messenger App- OAuth","title":"构建一个即时消息应用（二）：OAuth","tag":"201910","desc":""},"relativePath":"201910/20180706 Building a Messenger App- OAuth.md","filePath":"[post].md"}'),c={name:"201910/20180706 Building a Messenger App- OAuth.md"};function d(h,s,g,b,q,f){const p=i("Link");return r(),o("div",null,[s[21]||(s[21]=a("h1",{id:"构建一个即时消息应用-二-oauth",tabindex:"-1"},[n("构建一个即时消息应用（二）：OAuth "),a("a",{class:"header-anchor",href:"#构建一个即时消息应用-二-oauth","aria-label":"Permalink to “构建一个即时消息应用（二）：OAuth”"},"​")],-1)),a("p",null,[t(p,{href:"https://linux.cn/article-11396-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("上一篇：模式",-1)])]),_:1}),s[1]||(s[1]=n("。",-1))]),s[22]||(s[22]=a("p",null,"在这篇帖子中，我们将会通过为应用添加社交登录功能进入后端开发。",-1)),s[23]||(s[23]=a("p",null,"社交登录的工作方式十分简单：用户点击链接，然后重定向到 GitHub 授权页面。当用户授予我们对他的个人信息的访问权限之后，就会重定向回登录页面。下一次尝试登录时，系统将不会再次请求授权，也就是说，我们的应用已经记住了这个用户。这使得整个登录流程看起来就和你用鼠标单击一样快。",-1)),a("p",null,[s[3]||(s[3]=n("如果进一步考虑其内部实现的话，过程就会变得复杂起来。首先，我们需要注册一个新的 ",-1)),t(p,{href:"https://github.com/settings/applications/new"},{default:e(()=>[...s[2]||(s[2]=[n("GitHub OAuth 应用",-1)])]),_:1}),s[4]||(s[4]=n("。",-1))]),s[24]||(s[24]=u(`<p>这一步中，比较重要的是回调 URL。我们将它设置为 <code>http://localhost:3000/api/oauth/github/callback</code>。这是因为，在开发过程中，我们总是在本地主机上工作。一旦你要将应用交付生产，请使用正确的回调 URL 注册一个新的应用。</p><p>注册以后，你将会收到“客户端 id”和“安全密钥”。安全起见，请不要与任何人分享他们 👀</p><p>顺便让我们开始写一些代码吧。现在，创建一个 <code>main.go</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;database/sql&quot;</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;log&quot;</span></span>
<span class="line"><span>	&quot;net/http&quot;</span></span>
<span class="line"><span>	&quot;net/url&quot;</span></span>
<span class="line"><span>	&quot;os&quot;</span></span>
<span class="line"><span>	&quot;strconv&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&quot;github.com/gorilla/securecookie&quot;</span></span>
<span class="line"><span>	&quot;github.com/joho/godotenv&quot;</span></span>
<span class="line"><span>	&quot;github.com/knq/jwt&quot;</span></span>
<span class="line"><span>	_ &quot;github.com/lib/pq&quot;</span></span>
<span class="line"><span>	&quot;github.com/matryer/way&quot;</span></span>
<span class="line"><span>	&quot;golang.org/x/oauth2&quot;</span></span>
<span class="line"><span>	&quot;golang.org/x/oauth2/github&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var origin *url.URL</span></span>
<span class="line"><span>var db *sql.DB</span></span>
<span class="line"><span>var githubOAuthConfig *oauth2.Config</span></span>
<span class="line"><span>var cookieSigner *securecookie.SecureCookie</span></span>
<span class="line"><span>var jwtSigner jwt.Signer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	godotenv.Load()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	port := intEnv(&quot;PORT&quot;, 3000)</span></span>
<span class="line"><span>	originString := env(&quot;ORIGIN&quot;, fmt.Sprintf(&quot;http://localhost:%d/&quot;, port))</span></span>
<span class="line"><span>	databaseURL := env(&quot;DATABASE_URL&quot;, &quot;postgresql://root@127.0.0.1:26257/messenger?sslmode=disable&quot;)</span></span>
<span class="line"><span>	githubClientID := os.Getenv(&quot;GITHUB_CLIENT_ID&quot;)</span></span>
<span class="line"><span>	githubClientSecret := os.Getenv(&quot;GITHUB_CLIENT_SECRET&quot;)</span></span>
<span class="line"><span>	hashKey := env(&quot;HASH_KEY&quot;, &quot;secret&quot;)</span></span>
<span class="line"><span>	jwtKey := env(&quot;JWT_KEY&quot;, &quot;secret&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var err error</span></span>
<span class="line"><span>	if origin, err = url.Parse(originString); err != nil || !origin.IsAbs() {</span></span>
<span class="line"><span>		log.Fatal(&quot;invalid origin&quot;)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if i, err := strconv.Atoi(origin.Port()); err == nil {</span></span>
<span class="line"><span>		port = i</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if githubClientID == &quot;&quot; || githubClientSecret == &quot;&quot; {</span></span>
<span class="line"><span>		log.Fatalf(&quot;remember to set both $GITHUB_CLIENT_ID and $GITHUB_CLIENT_SECRET&quot;)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if db, err = sql.Open(&quot;postgres&quot;, databaseURL); err != nil {</span></span>
<span class="line"><span>		log.Fatalf(&quot;could not open database connection: %v\\n&quot;, err)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	defer db.Close()</span></span>
<span class="line"><span>	if err = db.Ping(); err != nil {</span></span>
<span class="line"><span>		log.Fatalf(&quot;could not ping to db: %v\\n&quot;, err)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	githubRedirectURL := *origin</span></span>
<span class="line"><span>	githubRedirectURL.Path = &quot;/api/oauth/github/callback&quot;</span></span>
<span class="line"><span>	githubOAuthConfig = &amp;oauth2.Config{</span></span>
<span class="line"><span>		ClientID:     githubClientID,</span></span>
<span class="line"><span>		ClientSecret: githubClientSecret,</span></span>
<span class="line"><span>		Endpoint:     github.Endpoint,</span></span>
<span class="line"><span>		RedirectURL:  githubRedirectURL.String(),</span></span>
<span class="line"><span>		Scopes:       []string{&quot;read:user&quot;},</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	cookieSigner = securecookie.New([]byte(hashKey), nil).MaxAge(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	jwtSigner, err = jwt.HS256.New([]byte(jwtKey))</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		log.Fatalf(&quot;could not create JWT signer: %v\\n&quot;, err)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	router := way.NewRouter()</span></span>
<span class="line"><span>	router.HandleFunc(&quot;GET&quot;, &quot;/api/oauth/github&quot;, githubOAuthStart)</span></span>
<span class="line"><span>	router.HandleFunc(&quot;GET&quot;, &quot;/api/oauth/github/callback&quot;, githubOAuthCallback)</span></span>
<span class="line"><span>	router.HandleFunc(&quot;GET&quot;, &quot;/api/auth_user&quot;, guard(getAuthUser))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	log.Printf(&quot;accepting connections on port %d\\n&quot;, port)</span></span>
<span class="line"><span>	log.Printf(&quot;starting server at %s\\n&quot;, origin.String())</span></span>
<span class="line"><span>	addr := fmt.Sprintf(&quot;:%d&quot;, port)</span></span>
<span class="line"><span>	if err = http.ListenAndServe(addr, router); err != nil {</span></span>
<span class="line"><span>		log.Fatalf(&quot;could not start server: %v\\n&quot;, err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func env(key, fallbackValue string) string {</span></span>
<span class="line"><span>	v, ok := os.LookupEnv(key)</span></span>
<span class="line"><span>	if !ok {</span></span>
<span class="line"><span>		return fallbackValue</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return v</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func intEnv(key string, fallbackValue int) int {</span></span>
<span class="line"><span>	v, ok := os.LookupEnv(key)</span></span>
<span class="line"><span>	if !ok {</span></span>
<span class="line"><span>		return fallbackValue</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	i, err := strconv.Atoi(v)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		return fallbackValue</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return i</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>安装依赖项：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go get -u github.com/gorilla/securecookie</span></span>
<span class="line"><span>go get -u github.com/joho/godotenv</span></span>
<span class="line"><span>go get -u github.com/knq/jwt</span></span>
<span class="line"><span>go get -u github.com/lib/pq</span></span>
<span class="line"><span>ge get -u github.com/matoous/go-nanoid</span></span>
<span class="line"><span>go get -u github.com/matryer/way</span></span>
<span class="line"><span>go get -u golang.org/x/oauth2</span></span></code></pre></div><p>我们将会使用 <code>.env</code> 文件来保存密钥和其他配置。请创建这个文件，并保证里面至少包含以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GITHUB_CLIENT_ID=your_github_client_id</span></span>
<span class="line"><span>GITHUB_CLIENT_SECRET=your_github_client_secret</span></span></code></pre></div><p>我们还要用到的其他环境变量有：</p><ul><li><code>PORT</code>：服务器运行的端口，默认值是 <code>3000</code>。</li><li><code>ORIGIN</code>：你的域名，默认值是 <code>http://localhost:3000/</code>。我们也可以在这里指定端口。</li><li><code>DATABASE_URL</code>：Cockroach 数据库的地址。默认值是 <code>postgresql://root@127.0.0.1:26257/messenger?sslmode=disable</code>。</li><li><code>HASH_KEY</code>：用于为 cookie 签名的密钥。没错，我们会使用已签名的 cookie 来确保安全。</li><li><code>JWT_KEY</code>：用于签署 JSON <ruby>网络令牌<rt>Web Token</rt></ruby>的密钥。</li></ul><p>因为代码中已经设定了默认值，所以你也不用把它们写到 <code>.env</code> 文件中。</p><p>在读取配置并连接到数据库之后，我们会创建一个 OAuth 配置。我们会使用 <code>ORIGIN</code> 信息来构建回调 URL（就和我们在 GitHub 页面上注册的一样）。我们的数据范围设置为 “read:user”。这会允许我们读取公开的用户信息，这里我们只需要他的用户名和头像就够了。然后我们会初始化 cookie 和 JWT 签名器。定义一些端点并启动服务器。</p><p>在实现 HTTP 处理程序之前，让我们编写一些函数来发送 HTTP 响应。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func respond(w http.ResponseWriter, v interface{}, statusCode int) {</span></span>
<span class="line"><span>	b, err := json.Marshal(v)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not marshal response: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	w.Header().Set(&quot;Content-Type&quot;, &quot;application/json; charset=utf-8&quot;)</span></span>
<span class="line"><span>	w.WriteHeader(statusCode)</span></span>
<span class="line"><span>	w.Write(b)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func respondError(w http.ResponseWriter, err error) {</span></span>
<span class="line"><span>	log.Println(err)</span></span>
<span class="line"><span>	http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>第一个函数用来发送 JSON，而第二个将错误记录到控制台并返回一个 <code>500 Internal Server Error</code> 错误信息。</p><h3 id="oauth-开始" tabindex="-1">OAuth 开始 <a class="header-anchor" href="#oauth-开始" aria-label="Permalink to “OAuth 开始”">​</a></h3><p>所以，用户点击写着 “Access with GitHub” 的链接。该链接指向 <code>/api/oauth/github</code>，这将会把用户重定向到 github。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func githubOAuthStart(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>	state, err := gonanoid.Nanoid()</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not generte state: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	stateCookieValue, err := cookieSigner.Encode(&quot;state&quot;, state)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not encode state cookie: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	http.SetCookie(w, &amp;http.Cookie{</span></span>
<span class="line"><span>		Name:     &quot;state&quot;,</span></span>
<span class="line"><span>		Value:    stateCookieValue,</span></span>
<span class="line"><span>		Path:     &quot;/api/oauth/github&quot;,</span></span>
<span class="line"><span>		HttpOnly: true,</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	http.Redirect(w, r, githubOAuthConfig.AuthCodeURL(state), http.StatusTemporaryRedirect)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>OAuth2 使用一种机制来防止 CSRF 攻击，因此它需要一个“状态”（<code>state</code>）。我们使用 <code>Nanoid()</code> 来创建一个随机字符串，并用这个字符串作为状态。我们也把它保存为一个 cookie。</p><h3 id="oauth-回调" tabindex="-1">OAuth 回调 <a class="header-anchor" href="#oauth-回调" aria-label="Permalink to “OAuth 回调”">​</a></h3><p>一旦用户授权我们访问他的个人信息，他将会被重定向到这个端点。这个 URL 的查询字符串上将会包含状态（<code>state</code>）和授权码（<code>code</code>）： <code>/api/oauth/github/callback?state=&amp;code=</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const jwtLifetime = time.Hour * 24 * 14</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type GithubUser struct {</span></span>
<span class="line"><span>	ID        int     \`json:&quot;id&quot;\`</span></span>
<span class="line"><span>	Login     string  \`json:&quot;login&quot;\`</span></span>
<span class="line"><span>	AvatarURL *string \`json:&quot;avatar_url,omitempty&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type User struct {</span></span>
<span class="line"><span>	ID        string  \`json:&quot;id&quot;\`</span></span>
<span class="line"><span>	Username  string  \`json:&quot;username&quot;\`</span></span>
<span class="line"><span>	AvatarURL *string \`json:&quot;avatarUrl&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func githubOAuthCallback(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>	stateCookie, err := r.Cookie(&quot;state&quot;)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		http.Error(w, http.StatusText(http.StatusTeapot), http.StatusTeapot)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	http.SetCookie(w, &amp;http.Cookie{</span></span>
<span class="line"><span>		Name:     &quot;state&quot;,</span></span>
<span class="line"><span>		Value:    &quot;&quot;,</span></span>
<span class="line"><span>		MaxAge:   -1,</span></span>
<span class="line"><span>		HttpOnly: true,</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var state string</span></span>
<span class="line"><span>	if err = cookieSigner.Decode(&quot;state&quot;, stateCookie.Value, &amp;state); err != nil {</span></span>
<span class="line"><span>		http.Error(w, http.StatusText(http.StatusTeapot), http.StatusTeapot)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	q := r.URL.Query()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if state != q.Get(&quot;state&quot;) {</span></span>
<span class="line"><span>		http.Error(w, http.StatusText(http.StatusTeapot), http.StatusTeapot)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ctx := r.Context()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	t, err := githubOAuthConfig.Exchange(ctx, q.Get(&quot;code&quot;))</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not fetch github token: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	client := githubOAuthConfig.Client(ctx, t)</span></span>
<span class="line"><span>	resp, err := client.Get(&quot;https://api.github.com/user&quot;)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not fetch github user: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var githubUser GithubUser</span></span>
<span class="line"><span>	if err = json.NewDecoder(resp.Body).Decode(&amp;githubUser); err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not decode github user: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	defer resp.Body.Close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	tx, err := db.BeginTx(ctx, nil)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not begin tx: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var user User</span></span>
<span class="line"><span>	if err = tx.QueryRowContext(ctx, \`</span></span>
<span class="line"><span>		SELECT id, username, avatar_url FROM users WHERE github_id = $1</span></span>
<span class="line"><span>	\`, githubUser.ID).Scan(&amp;user.ID, &amp;user.Username, &amp;user.AvatarURL); err == sql.ErrNoRows {</span></span>
<span class="line"><span>		if err = tx.QueryRowContext(ctx, \`</span></span>
<span class="line"><span>			INSERT INTO users (username, avatar_url, github_id) VALUES ($1, $2, $3)</span></span>
<span class="line"><span>			RETURNING id</span></span>
<span class="line"><span>		\`, githubUser.Login, githubUser.AvatarURL, githubUser.ID).Scan(&amp;user.ID); err != nil {</span></span>
<span class="line"><span>			respondError(w, fmt.Errorf(&quot;could not insert user: %v&quot;, err))</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		user.Username = githubUser.Login</span></span>
<span class="line"><span>		user.AvatarURL = githubUser.AvatarURL</span></span>
<span class="line"><span>	} else if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not query user by github ID: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if err = tx.Commit(); err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not commit to finish github oauth: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	exp := time.Now().Add(jwtLifetime)</span></span>
<span class="line"><span>	token, err := jwtSigner.Encode(jwt.Claims{</span></span>
<span class="line"><span>		Subject:    user.ID,</span></span>
<span class="line"><span>		Expiration: json.Number(strconv.FormatInt(exp.Unix(), 10)),</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not create token: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	expiresAt, _ := exp.MarshalText()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	data := make(url.Values)</span></span>
<span class="line"><span>	data.Set(&quot;token&quot;, string(token))</span></span>
<span class="line"><span>	data.Set(&quot;expires_at&quot;, string(expiresAt))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	http.Redirect(w, r, &quot;/callback?&quot;+data.Encode(), http.StatusTemporaryRedirect)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>首先，我们会尝试使用之前保存的状态对 cookie 进行解码。并将其与查询字符串中的状态进行比较。如果它们不匹配，我们会返回一个 <code>418 I&#39;m teapot</code>（未知来源）错误。</p><p>接着，我们使用授权码生成一个令牌。这个令牌被用于创建 HTTP 客户端来向 GitHub API 发出请求。所以最终我们会向 <code>https://api.github.com/user</code> 发送一个 GET 请求。这个端点将会以 JSON 格式向我们提供当前经过身份验证的用户信息。我们将会解码这些内容，一并获取用户的 ID、登录名（用户名）和头像 URL。</p><p>然后我们将会尝试在数据库上找到具有该 GitHub ID 的用户。如果没有找到，就使用该数据创建一个新的。</p><p>之后，对于新创建的用户，我们会发出一个将用户 ID 作为主题（<code>Subject</code>）的 JSON 网络令牌，并使用该令牌重定向到前端，查询字符串中一并包含该令牌的到期日（<code>Expiration</code>）。</p><p>这一 Web 应用也会被用在其他帖子，但是重定向的链接会是 <code>/callback?token=&amp;expires_at=</code>。在那里，我们将会利用 JavaScript 从 URL 中获取令牌和到期日，并通过 <code>Authorization</code> 标头中的令牌以 <code>Bearer token_here</code> 的形式对 <code>/api/auth_user</code> 进行 GET 请求，来获取已认证的身份用户并将其保存到 localStorage。</p><h3 id="guard-中间件" tabindex="-1">Guard 中间件 <a class="header-anchor" href="#guard-中间件" aria-label="Permalink to “Guard 中间件”">​</a></h3><p>为了获取当前已经过身份验证的用户，我们设计了 Guard 中间件。这是因为在接下来的文章中，我们会有很多需要进行身份认证的端点，而中间件将会允许我们共享这一功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type ContextKey struct {</span></span>
<span class="line"><span>	Name string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var keyAuthUserID = ContextKey{&quot;auth_user_id&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func guard(handler http.HandlerFunc) http.HandlerFunc {</span></span>
<span class="line"><span>	return func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>		var token string</span></span>
<span class="line"><span>		if a := r.Header.Get(&quot;Authorization&quot;); strings.HasPrefix(a, &quot;Bearer &quot;) {</span></span>
<span class="line"><span>			token = a[7:]</span></span>
<span class="line"><span>		} else if t := r.URL.Query().Get(&quot;token&quot;); t != &quot;&quot; {</span></span>
<span class="line"><span>			token = t</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			http.Error(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		var claims jwt.Claims</span></span>
<span class="line"><span>		if err := jwtSigner.Decode([]byte(token), &amp;claims); err != nil {</span></span>
<span class="line"><span>			http.Error(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		ctx := r.Context()</span></span>
<span class="line"><span>		ctx = context.WithValue(ctx, keyAuthUserID, claims.Subject)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		handler(w, r.WithContext(ctx))</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>首先，我们尝试从 <code>Authorization</code> 标头或者是 URL 查询字符串中的 <code>token</code> 字段中读取令牌。如果没有找到，我们需要返回 <code>401 Unauthorized</code>（未授权）错误。然后我们将会对令牌中的申明进行解码，并使用该主题作为当前已经过身份验证的用户 ID。</p><p>现在，我们可以用这一中间件来封装任何需要授权的 <code>http.handlerFunc</code>，并且在处理函数的上下文中保有已经过身份验证的用户 ID。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var guarded = guard(func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>    authUserID := r.Context().Value(keyAuthUserID).(string)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="获取认证用户" tabindex="-1">获取认证用户 <a class="header-anchor" href="#获取认证用户" aria-label="Permalink to “获取认证用户”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func getAuthUser(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>	ctx := r.Context()</span></span>
<span class="line"><span>	authUserID := ctx.Value(keyAuthUserID).(string)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var user User</span></span>
<span class="line"><span>	if err := db.QueryRowContext(ctx, \`</span></span>
<span class="line"><span>		SELECT username, avatar_url FROM users WHERE id = $1</span></span>
<span class="line"><span>	\`, authUserID).Scan(&amp;user.Username, &amp;user.AvatarURL); err == sql.ErrNoRows {</span></span>
<span class="line"><span>		http.Error(w, http.StatusText(http.StatusTeapot), http.StatusTeapot)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	} else if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not query auth user: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	user.ID = authUserID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	respond(w, user, http.StatusOK)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我们使用 Guard 中间件来获取当前经过身份认证的用户 ID 并查询数据库。</p><p>这一部分涵盖了后端的 OAuth 流程。在下一篇帖子中，我们将会看到如何开始与其他用户的对话。</p>`,37)),a("ul",null,[a("li",null,[t(p,{href:"https://github.com/nicolasparada/go-messenger-demo"},{default:e(()=>[...s[5]||(s[5]=[n("源代码",-1)])]),_:1})])]),s[25]||(s[25]=a("hr",null,null,-1)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),t(p,{href:"https://nicolasparada.netlify.com/posts/go-messenger-oauth/"},{default:e(()=>[...s[6]||(s[6]=[n("https://nicolasparada.netlify.com/posts/go-messenger-oauth/",-1)])]),_:1})]),a("p",null,[s[12]||(s[12]=n("作者：",-1)),t(p,{href:"https://nicolasparada.netlify.com/"},{default:e(()=>[...s[8]||(s[8]=[n("Nicolás Parada",-1)])]),_:1}),s[13]||(s[13]=n(" 选题：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[9]||(s[9]=[n("lujun9972",-1)])]),_:1}),s[14]||(s[14]=n(" 译者：",-1)),t(p,{href:"https://github.com/PsiACE"},{default:e(()=>[...s[10]||(s[10]=[n("PsiACE",-1)])]),_:1}),s[15]||(s[15]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[11]||(s[11]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[16]||(s[16]=[n("LCTT",-1)])]),_:1}),s[19]||(s[19]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[17]||(s[17]=[n("Linux中国",-1)])]),_:1}),s[20]||(s[20]=n(" 荣誉推出",-1))])])}const C=l(c,[["render",d]]);export{v as __pageData,C as default};
