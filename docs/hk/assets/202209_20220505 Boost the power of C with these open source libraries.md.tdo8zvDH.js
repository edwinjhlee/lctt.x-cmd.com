import{_ as i,a0 as t,w as o,s as c,I as a,x as n,a1 as e,A as l,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"使用開源庫 GObject 和 libsoup 提升 C 語言編程能力 | LCTT x X-CMD","titleTemplate":false,"description":"使用開源庫 GObject 和 libsoup 提升 C 語言編程能力 | LCTT (202209) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用開源庫 GObject 和 libsoup 提升 C 語言編程能力 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用開源庫 GObject 和 libsoup 提升 C 語言編程能力 | LCTT (202209) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202209/20220505 Boost the power of C with these open source libraries","title":"使用開源庫 GObject 和 libsoup 提升 C 語言編程能力","tag":"202209","desc":""},"relativePath":"202209/20220505 Boost the power of C with these open source libraries.md","filePath":"[post].md"}'),d={name:"202209/20220505 Boost the power of C with these open source libraries.md"};function u(g,s,h,_,b,k){const p=t("Link");return o(),c("div",null,[s[19]||(s[19]=a("h1",{id:"使用開源庫-gobject-和-libsoup-提升-c-語言編程能力",tabindex:"-1"},[n("使用開源庫 GObject 和 libsoup 提升 C 語言編程能力 "),a("a",{class:"header-anchor",href:"#使用開源庫-gobject-和-libsoup-提升-c-語言編程能力","aria-label":"Permalink to “使用開源庫 GObject 和 libsoup 提升 C 語言編程能力”"},"​")],-1)),s[20]||(s[20]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202209/24/145218s1s1xk6s1mm2kg1x.jpg",alt:""})],-1)),a("blockquote",null,[a("p",null,[s[2]||(s[2]=n("開源庫 GObject 和 libsoup 做了很多工作，因此你可以專注於使用 C 語言開發神奇的應用。 ",-1)),a("ruby",null,[e(p,{href:"https://docs.gtk.org/gobject/concepts.html"},{default:l(()=>[...s[0]||(s[0]=[n("GLib 對象系統",-1)])]),_:1}),s[1]||(s[1]=a("rt",null,"Object System",-1))]),s[3]||(s[3]=n("（GObject）是一個為 C 語言提供靈活且可擴展的面向對象框架的庫。在這篇文章中，我將使用該庫的 2.4 版本進行演示。",-1))])]),s[21]||(s[21]=r(`<p>GObject 庫繼承了 ANSI C 標準，擁有一些常見的數據類型，例如：</p><ul><li><code>gchar</code>：字符型</li><li><code>guchar</code>：無符號字符型</li><li><code>gunichar</code>：32 位定寬 Unicode 字符型</li><li><code>gboolean</code>：布爾型</li><li><code>gint8</code>、<code>gint16</code>、<code>gint32</code>、<code>gint64</code>：有符號 8、16、32 和 64 位整數</li><li><code>guint8</code>、<code>guint16</code>、<code>guint32</code>、<code>guint64</code>：無符號 8、16、32 和 64 位整數</li><li><code>gfloat</code>：IEEE 754 標準單精度浮點數</li><li><code>gdouble</code>：IEEE 754 標準雙精度浮點數</li><li><code>gpointer</code>：泛指針</li></ul><h3 id="函數指針" tabindex="-1">函數指針 <a class="header-anchor" href="#函數指針" aria-label="Permalink to “函數指針”">​</a></h3><p>GObject 庫還引入了類和接口的類型和對象體系。之所以可以，是因為 ANSI C 語言可以理解函數指針。</p><p>你可以這樣做來聲明函數指針：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void (*my_callback)(gpointer data);</span></span></code></pre></div><p>首先，你需要給變量 <code>my_callback</code> 賦值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void my_callback_func(gpointer data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  //do something</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my_callback = my_callback_func;</span></span></code></pre></div><p>函數指針 <code>my_callback</code> 可以這樣來調用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gpointer data;</span></span>
<span class="line"><span>data = g_malloc(512 * sizeof(gint16));</span></span>
<span class="line"><span>my_callback(data);</span></span></code></pre></div><h3 id="對象類" tabindex="-1">對象類 <a class="header-anchor" href="#對象類" aria-label="Permalink to “對象類”">​</a></h3><p><code>GObject</code> 基類由 2 個結構（<code>GObject</code> 和 <code>GObjectClass</code>）組成，你可以繼承它們以實現你自己的對象。</p><p>你需要在結構體中先嵌入 <code>GObject</code> 和 <code>GObjectClass</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct _MyObject</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  GObject gobject;</span></span>
<span class="line"><span>  //your fields</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct _MyObjectClass</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  GObjectClass gobject;</span></span>
<span class="line"><span>  //your class methods</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GType my_object_get_type(void);</span></span></code></pre></div><p>對象的實現包含了公有成員。GObject 也提供了私有成員的方法。這實際上是 C 源文件中的一個結構，而不是在頭文件。該類通常只包含函數指針。</p><p>一個接口不能派生自另一個接口，比如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct _MyInterface</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  GInterface ginterface;</span></span>
<span class="line"><span>  //your interface methods</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>通過調用 <code>g_object_get()</code> 和 <code>g_object_set()</code> 函數來訪問屬性。若要獲取屬性，你必須提供特定類型的返回位置。建議先初始化返回位置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gchar *str</span></span>
<span class="line"><span></span></span>
<span class="line"><span>str = NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>g_object_get(gobject,</span></span>
<span class="line"><span>  &quot;my-name&quot;, &amp;str,</span></span>
<span class="line"><span>  NULL);</span></span></code></pre></div><p>或者你想要設置屬性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>g_object_set(gobject,</span></span>
<span class="line"><span>  &quot;my-name&quot;, &quot;Anderson&quot;,</span></span>
<span class="line"><span>  NULL);</span></span></code></pre></div><h3 id="libsoup-http-庫" tabindex="-1">libsoup HTTP 庫 <a class="header-anchor" href="#libsoup-http-庫" aria-label="Permalink to “libsoup HTTP 庫”">​</a></h3><p><code>libsoup</code> 項目為 GNOME 提供了 HTTP 客服端和服務端使用的庫。它使用 GObjects 和 glib 主循環與集成到 GNOME 應用，並且還具有用於命令列的同步 API。</p><p>首先，創建一個特定身份驗證回調的 <code>libsoup</code> 會話。你也可以使用 cookie。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SoupSession *soup_session;</span></span>
<span class="line"><span>SoupCookieJar *jar;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>soup_session = soup_session_new_with_options(SOUP_SESSION_ADD_FEATURE_BY_TYPE, SOUP_TYPE_AUTH_BASIC,</span></span>
<span class="line"><span>  SOUP_SESSION_ADD_FEATURE_BY_TYPE, SOUP_TYPE_AUTH_DIGEST,</span></span>
<span class="line"><span>  NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jar = soup_cookie_jar_text_new(&quot;cookies.txt&quot;,</span></span>
<span class="line"><span>  FALSE);     </span></span>
<span class="line"><span></span></span>
<span class="line"><span>soup_session_add_feature(soup_session, jar);</span></span>
<span class="line"><span>g_signal_connect(soup_session, &quot;authenticate&quot;,</span></span>
<span class="line"><span>  G_CALLBACK(my_authenticate_callback), NULL);</span></span></code></pre></div><p>然後你可以像這樣創建一個 HTTP GET 請求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SoupMessage *msg;</span></span>
<span class="line"><span>SoupMessageHeaders *response_headers;</span></span>
<span class="line"><span>SoupMessageBody *response_body;</span></span>
<span class="line"><span>guint status;</span></span>
<span class="line"><span>GError *error;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>msg = soup_form_request_new(&quot;GET&quot;,</span></span>
<span class="line"><span>  &quot;http://127.0.0.1:8080/my-xmlrpc&quot;,</span></span>
<span class="line"><span>  NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>status = soup_session_send_message(soup_session,</span></span>
<span class="line"><span>  msg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>response_headers = NULL;</span></span>
<span class="line"><span>response_body = NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>g_object_get(msg,</span></span>
<span class="line"><span>  &quot;response-headers&quot;, &amp;response_headers,</span></span>
<span class="line"><span>  &quot;response-body&quot;, &amp;response_body,</span></span>
<span class="line"><span>  NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>g_message(&quot;status %d&quot;, status);</span></span>
<span class="line"><span>cookie = NULL;</span></span>
<span class="line"><span>soup_message_headers_iter_init(&amp;iter,</span></span>
<span class="line"><span>response_headers);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while(soup_message_headers_iter_next(&amp;iter, &amp;name, &amp;value)){    </span></span>
<span class="line"><span>  g_message(&quot;%s: %s&quot;, name, value);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>g_message(&quot;%s&quot;, response_body-&gt;data);</span></span>
<span class="line"><span>if(status == 200){</span></span>
<span class="line"><span>  cookie = soup_cookies_from_response(msg);</span></span>
<span class="line"><span>  while(cookie != NULL){</span></span>
<span class="line"><span>    char *cookie_name;</span></span>
<span class="line"><span>    cookie_name = soup_cookie_get_name(cookie-&gt;data);</span></span>
<span class="line"><span>    //parse cookies</span></span>
<span class="line"><span>    cookie = cookie-&gt;next;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>當網絡服務器進行身份認證時，會調用身份認證回調函數。</p><p>這是一個函數簽名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define MY_AUTHENTICATE_LOGIN &quot;my-username&quot;</span></span>
<span class="line"><span>#define MY_AUTHENTICATE_PASSWORD &quot;my-password&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void my_authenticate_callback(SoupSession *session,</span></span>
<span class="line"><span>  SoupMessage *msg,</span></span>
<span class="line"><span>  SoupAuth *auth,</span></span>
<span class="line"><span>  gboolean retrying,</span></span>
<span class="line"><span>  gpointer user_data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  g_message(&quot;authenticate: ****&quot;);</span></span>
<span class="line"><span>  soup_auth_authenticate(auth,</span></span>
<span class="line"><span>                         MY_AUTHENTICATE_LOGIN,</span></span>
<span class="line"><span>                         MY_AUTHENTICATE_PASSWORD);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="一個-libsoup-服務器" tabindex="-1">一個 libsoup 服務器 <a class="header-anchor" href="#一個-libsoup-服務器" aria-label="Permalink to “一個 libsoup 服務器”">​</a></h3><p>想要基礎的 HTTP 身份認證能夠運行，你需要指定回調函數和服務器上下文路徑。然後再添加一個帶有另一個回調的處理程序。</p><p>下面這個例子展示了在 8080 端口監聽任何 IPv4 地址的消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SoupServer *soup_server;</span></span>
<span class="line"><span>SoupAuthDomain *auth_domain;</span></span>
<span class="line"><span>GSocket *ip4_socket;</span></span>
<span class="line"><span>GSocketAddress *ip4_address;</span></span>
<span class="line"><span>MyObject *my_object;</span></span>
<span class="line"><span>GError *error;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>soup_server = soup_server_new(NULL);</span></span>
<span class="line"><span>auth_domain = soup_auth_domain_basic_new(SOUP_AUTH_DOMAIN_REALM, &quot;my-realm&quot;,</span></span>
<span class="line"><span>  SOUP_AUTH_DOMAIN_BASIC_AUTH_CALLBACK, my_xmlrpc_server_auth_callback,</span></span>
<span class="line"><span>  SOUP_AUTH_DOMAIN_BASIC_AUTH_DATA, my_object,</span></span>
<span class="line"><span>  SOUP_AUTH_DOMAIN_ADD_PATH, &quot;my-xmlrpc&quot;,</span></span>
<span class="line"><span>  NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>soup_server_add_auth_domain(soup_server, auth_domain);</span></span>
<span class="line"><span>soup_server_add_handler(soup_server,</span></span>
<span class="line"><span>  &quot;my-xmlrpc&quot;,</span></span>
<span class="line"><span>  my_xmlrpc_server_callback,</span></span>
<span class="line"><span>  my_object,</span></span>
<span class="line"><span>  NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ip4_socket = g_socket_new(G_SOCKET_FAMILY_IPV4,</span></span>
<span class="line"><span>  G_SOCKET_TYPE_STREAM,</span></span>
<span class="line"><span>  G_SOCKET_PROTOCOL_TCP,</span></span>
<span class="line"><span>  &amp;error);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ip4_address = g_inet_socket_address_new(g_inet_address_new_any(G_SOCKET_FAMILY_IPV4),</span></span>
<span class="line"><span>  8080);</span></span>
<span class="line"><span>error = NULL;</span></span>
<span class="line"><span>g_socket_bind(ip4_socket,</span></span>
<span class="line"><span>  ip4_address,</span></span>
<span class="line"><span>  TRUE,</span></span>
<span class="line"><span>  &amp;error);</span></span>
<span class="line"><span>error = NULL;</span></span>
<span class="line"><span>g_socket_listen(ip4_socket, &amp;error);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error = NULL;</span></span>
<span class="line"><span>soup_server_listen_socket(soup_server,</span></span>
<span class="line"><span>  ip4_socket, 0, &amp;error);</span></span></code></pre></div><p>示例代碼中，有兩個回調函數。一個處理身份認證，另一個處理對它的請求。</p><p>假設你想要網頁服務器允許用户名為 <code>my-username</code> 和口令為 <code>my-password</code> 的憑證登錄，並且用一個隨機且唯一的用户 ID 字符串設置會話 cookie。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gboolean my_xmlrpc_server_auth_callback(SoupAuthDomain *domain,</span></span>
<span class="line"><span>  SoupMessage *msg,</span></span>
<span class="line"><span>  const char *username,</span></span>
<span class="line"><span>  const char *password,</span></span>
<span class="line"><span>  MyObject *my_object)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  if(username == NULL || password == NULL){</span></span>
<span class="line"><span>    return(FALSE);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if(!strcmp(username, &quot;my-username&quot;) &amp;&amp;</span></span>
<span class="line"><span>     !strcmp(password, &quot;my-password&quot;)){</span></span>
<span class="line"><span>    SoupCookie *session_cookie;</span></span>
<span class="line"><span>    GSList *cookie;</span></span>
<span class="line"><span>    gchar *security_token;</span></span>
<span class="line"><span>    cookie = NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    security_token = g_uuid_string_random();</span></span>
<span class="line"><span>    session_cookie = soup_cookie_new(&quot;my-srv-security-token&quot;,</span></span>
<span class="line"><span>      security_token,</span></span>
<span class="line"><span>      &quot;localhost&quot;,</span></span>
<span class="line"><span>      &quot;my-xmlrpc&quot;,</span></span>
<span class="line"><span>      -1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     cookie = g_slist_prepend(cookie,</span></span>
<span class="line"><span>       session_cookie);  </span></span>
<span class="line"><span>     soup_cookies_to_request(cookie,</span></span>
<span class="line"><span>       msg);</span></span>
<span class="line"><span>    return(TRUE);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return(FALSE);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>對上下文路徑 <code>my-xmlrpc</code> 進行處理的函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void my_xmlrpc_server_callback(SoupServer *soup_server,</span></span>
<span class="line"><span>  SoupMessage *msg,</span></span>
<span class="line"><span>  const char *path,</span></span>
<span class="line"><span>  GHashTable *query,</span></span>
<span class="line"><span>  SoupClientContext *client,</span></span>
<span class="line"><span>  MyObject *my_object)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  GSList *cookie;</span></span>
<span class="line"><span>  cookie = soup_cookies_from_request(msg);</span></span>
<span class="line"><span>  //check cookies</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="更加強大的-c-語言" tabindex="-1">更加強大的 C 語言 <a class="header-anchor" href="#更加強大的-c-語言" aria-label="Permalink to “更加強大的 C 語言”">​</a></h3><p>希望我的示例展現了 GObject 和 libsoup 項目給 C 語言帶來了真正的提升。像這樣在字面意義上擴展 C 語言，可以使 C 語言更易於使用。它們已經為你做了許多工作，這樣你可以專注於用 C 語言開發簡單、直接的應用程序了。</p><hr>`,42)),a("p",null,[s[5]||(s[5]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/22/5/libsoup-gobject-c"},{default:l(()=>[...s[4]||(s[4]=[n("https://opensource.com/article/22/5/libsoup-gobject-c",-1)])]),_:1})]),a("p",null,[s[10]||(s[10]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/joel2001k"},{default:l(()=>[...s[6]||(s[6]=[n("Joël Krähemann",-1)])]),_:1}),s[11]||(s[11]=n(" 選題：",-1)),e(p,{href:"https://github.com/lkxed"},{default:l(()=>[...s[7]||(s[7]=[n("lkxed",-1)])]),_:1}),s[12]||(s[12]=n(" 譯者：",-1)),e(p,{href:"https://github.com/Donkey-Hao"},{default:l(()=>[...s[8]||(s[8]=[n("Donkey-Hao",-1)])]),_:1}),s[13]||(s[13]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[15]||(s[15]=[n("Linux中國",-1)])]),_:1}),s[18]||(s[18]=n(" 榮譽推出",-1))])])}const C=i(d,[["render",u]]);export{f as __pageData,C as default};
