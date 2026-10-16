import{_ as l,a0 as i,w as r,s as o,I as a,x as n,a1 as t,A as e,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"構建一個即時消息應用（二）：OAuth | LCTT x X-CMD","titleTemplate":false,"description":"構建一個即時消息應用（二）：OAuth | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"構建一個即時消息應用（二）：OAuth | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"構建一個即時消息應用（二）：OAuth | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20180706 Building a Messenger App- OAuth","title":"構建一個即時消息應用（二）：OAuth","tag":"201910","desc":""},"relativePath":"201910/20180706 Building a Messenger App- OAuth.md","filePath":"[post].md"}'),c={name:"201910/20180706 Building a Messenger App- OAuth.md"};function d(h,s,g,b,q,f){const p=i("Link");return r(),o("div",null,[s[21]||(s[21]=a("h1",{id:"構建一個即時消息應用-二-oauth",tabindex:"-1"},[n("構建一個即時消息應用（二）：OAuth "),a("a",{class:"header-anchor",href:"#構建一個即時消息應用-二-oauth","aria-label":"Permalink to “構建一個即時消息應用（二）：OAuth”"},"​")],-1)),a("p",null,[t(p,{href:"https://linux.cn/article-11396-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("上一篇：模式",-1)])]),_:1}),s[1]||(s[1]=n("。",-1))]),s[22]||(s[22]=a("p",null,"在這篇帖子中，我們將會通過為應用添加社交登錄功能進入後端開發。",-1)),s[23]||(s[23]=a("p",null,"社交登錄的工作方式十分簡單：用户點擊鏈接，然後重定向到 GitHub 授權頁面。當用户授予我們對他的個人信息的訪問權限之後，就會重定向回登錄頁面。下一次嘗試登錄時，系統將不會再次請求授權，也就是説，我們的應用已經記住了這個用户。這使得整個登錄流程看起來就和你用鼠標單擊一樣快。",-1)),a("p",null,[s[3]||(s[3]=n("如果進一步考慮其內部實現的話，過程就會變得複雜起來。首先，我們需要註冊一個新的 ",-1)),t(p,{href:"https://github.com/settings/applications/new"},{default:e(()=>[...s[2]||(s[2]=[n("GitHub OAuth 應用",-1)])]),_:1}),s[4]||(s[4]=n("。",-1))]),s[24]||(s[24]=u(`<p>這一步中，比較重要的是回調 URL。我們將它設置為 <code>http://localhost:3000/api/oauth/github/callback</code>。這是因為，在開發過程中，我們總是在本地主機上工作。一旦你要將應用交付生產，請使用正確的回調 URL 註冊一個新的應用。</p><p>註冊以後，你將會收到“客户端 id”和“安全密鑰”。安全起見，請不要與任何人分享他們 👀</p><p>順便讓我們開始寫一些代碼吧。現在，創建一個 <code>main.go</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>安裝依賴項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go get -u github.com/gorilla/securecookie</span></span>
<span class="line"><span>go get -u github.com/joho/godotenv</span></span>
<span class="line"><span>go get -u github.com/knq/jwt</span></span>
<span class="line"><span>go get -u github.com/lib/pq</span></span>
<span class="line"><span>ge get -u github.com/matoous/go-nanoid</span></span>
<span class="line"><span>go get -u github.com/matryer/way</span></span>
<span class="line"><span>go get -u golang.org/x/oauth2</span></span></code></pre></div><p>我們將會使用 <code>.env</code> 文件來保存密鑰和其他配置。請創建這個文件，並保證裏面至少包含以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GITHUB_CLIENT_ID=your_github_client_id</span></span>
<span class="line"><span>GITHUB_CLIENT_SECRET=your_github_client_secret</span></span></code></pre></div><p>我們還要用到的其他環境變量有：</p><ul><li><code>PORT</code>：服務器運行的端口，默認值是 <code>3000</code>。</li><li><code>ORIGIN</code>：你的域名，默認值是 <code>http://localhost:3000/</code>。我們也可以在這裏指定端口。</li><li><code>DATABASE_URL</code>：Cockroach 資料庫的地址。默認值是 <code>postgresql://root@127.0.0.1:26257/messenger?sslmode=disable</code>。</li><li><code>HASH_KEY</code>：用於為 cookie 簽名的密鑰。沒錯，我們會使用已簽名的 cookie 來確保安全。</li><li><code>JWT_KEY</code>：用於簽署 JSON <ruby>網絡令牌<rt>Web Token</rt></ruby>的密鑰。</li></ul><p>因為代碼中已經設定了默認值，所以你也不用把它們寫到 <code>.env</code> 文件中。</p><p>在讀取配置並連接到資料庫之後，我們會創建一個 OAuth 配置。我們會使用 <code>ORIGIN</code> 信息來構建回調 URL（就和我們在 GitHub 頁面上註冊的一樣）。我們的數據範圍設置為 “read:user”。這會允許我們讀取公開的用户信息，這裏我們只需要他的用户名和頭像就夠了。然後我們會初始化 cookie 和 JWT 簽名器。定義一些端點並啓動服務器。</p><p>在實現 HTTP 處理程序之前，讓我們編寫一些函數來發送 HTTP 響應。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func respond(w http.ResponseWriter, v interface{}, statusCode int) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>第一個函數用來發送 JSON，而第二個將錯誤記錄到控制台並返回一個 <code>500 Internal Server Error</code> 錯誤信息。</p><h3 id="oauth-開始" tabindex="-1">OAuth 開始 <a class="header-anchor" href="#oauth-開始" aria-label="Permalink to “OAuth 開始”">​</a></h3><p>所以，用户點擊寫着 “Access with GitHub” 的鏈接。該鏈接指向 <code>/api/oauth/github</code>，這將會把用户重定向到 github。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func githubOAuthStart(w http.ResponseWriter, r *http.Request) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>OAuth2 使用一種機制來防止 CSRF 攻擊，因此它需要一個“狀態”（<code>state</code>）。我們使用 <code>Nanoid()</code> 來創建一個隨機字符串，並用這個字符串作為狀態。我們也把它保存為一個 cookie。</p><h3 id="oauth-回調" tabindex="-1">OAuth 回調 <a class="header-anchor" href="#oauth-回調" aria-label="Permalink to “OAuth 回調”">​</a></h3><p>一旦用户授權我們訪問他的個人信息，他將會被重定向到這個端點。這個 URL 的查詢字符串上將會包含狀態（<code>state</code>）和授權碼（<code>code</code>）： <code>/api/oauth/github/callback?state=&amp;code=</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const jwtLifetime = time.Hour * 24 * 14</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>首先，我們會嘗試使用之前保存的狀態對 cookie 進行解碼。並將其與查詢字符串中的狀態進行比較。如果它們不匹配，我們會返回一個 <code>418 I&#39;m teapot</code>（未知來源）錯誤。</p><p>接着，我們使用授權碼生成一個令牌。這個令牌被用於創建 HTTP 客户端來向 GitHub API 發出請求。所以最終我們會向 <code>https://api.github.com/user</code> 發送一個 GET 請求。這個端點將會以 JSON 格式向我們提供當前經過身份驗證的用户信息。我們將會解碼這些內容，一併獲取用户的 ID、登錄名（用户名）和頭像 URL。</p><p>然後我們將會嘗試在資料庫上找到具有該 GitHub ID 的用户。如果沒有找到，就使用該數據創建一個新的。</p><p>之後，對於新創建的用户，我們會發出一個將用户 ID 作為主題（<code>Subject</code>）的 JSON 網絡令牌，並使用該令牌重定向到前端，查詢字符串中一併包含該令牌的到期日（<code>Expiration</code>）。</p><p>這一 Web 應用也會被用在其他帖子，但是重定向的鏈接會是 <code>/callback?token=&amp;expires_at=</code>。在那裏，我們將會利用 JavaScript 從 URL 中獲取令牌和到期日，並通過 <code>Authorization</code> 標頭中的令牌以 <code>Bearer token_here</code> 的形式對 <code>/api/auth_user</code> 進行 GET 請求，來獲取已認證的身份用户並將其保存到 localStorage。</p><h3 id="guard-中間件" tabindex="-1">Guard 中間件 <a class="header-anchor" href="#guard-中間件" aria-label="Permalink to “Guard 中間件”">​</a></h3><p>為了獲取當前已經過身份驗證的用户，我們設計了 Guard 中間件。這是因為在接下來的文章中，我們會有很多需要進行身份認證的端點，而中間件將會允許我們共享這一功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type ContextKey struct {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>首先，我們嘗試從 <code>Authorization</code> 標頭或者是 URL 查詢字符串中的 <code>token</code> 字段中讀取令牌。如果沒有找到，我們需要返回 <code>401 Unauthorized</code>（未授權）錯誤。然後我們將會對令牌中的申明進行解碼，並使用該主題作為當前已經過身份驗證的用户 ID。</p><p>現在，我們可以用這一中間件來封裝任何需要授權的 <code>http.handlerFunc</code>，並且在處理函數的上下文中保有已經過身份驗證的用户 ID。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var guarded = guard(func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>    authUserID := r.Context().Value(keyAuthUserID).(string)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="獲取認證用户" tabindex="-1">獲取認證用户 <a class="header-anchor" href="#獲取認證用户" aria-label="Permalink to “獲取認證用户”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func getAuthUser(w http.ResponseWriter, r *http.Request) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我們使用 Guard 中間件來獲取當前經過身份認證的用户 ID 並查詢資料庫。</p><p>這一部分涵蓋了後端的 OAuth 流程。在下一篇帖子中，我們將會看到如何開始與其他用户的對話。</p>`,37)),a("ul",null,[a("li",null,[t(p,{href:"https://github.com/nicolasparada/go-messenger-demo"},{default:e(()=>[...s[5]||(s[5]=[n("源代碼",-1)])]),_:1})])]),s[25]||(s[25]=a("hr",null,null,-1)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),t(p,{href:"https://nicolasparada.netlify.com/posts/go-messenger-oauth/"},{default:e(()=>[...s[6]||(s[6]=[n("https://nicolasparada.netlify.com/posts/go-messenger-oauth/",-1)])]),_:1})]),a("p",null,[s[12]||(s[12]=n("作者：",-1)),t(p,{href:"https://nicolasparada.netlify.com/"},{default:e(()=>[...s[8]||(s[8]=[n("Nicolás Parada",-1)])]),_:1}),s[13]||(s[13]=n(" 選題：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[9]||(s[9]=[n("lujun9972",-1)])]),_:1}),s[14]||(s[14]=n(" 譯者：",-1)),t(p,{href:"https://github.com/PsiACE"},{default:e(()=>[...s[10]||(s[10]=[n("PsiACE",-1)])]),_:1}),s[15]||(s[15]=n(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[11]||(s[11]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[16]||(s[16]=[n("LCTT",-1)])]),_:1}),s[19]||(s[19]=n(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[17]||(s[17]=[n("Linux中國",-1)])]),_:1}),s[20]||(s[20]=n(" 榮譽推出",-1))])])}const C=l(c,[["render",d]]);export{v as __pageData,C as default};
