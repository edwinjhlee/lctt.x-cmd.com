import{_ as i,a0 as t,w as o,s as c,I as a,x as n,a1 as e,A as l,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"使用开源库 GObject 和 libsoup 提升 C 语言编程能力 | LCTT x X-CMD","titleTemplate":false,"description":"使用开源库 GObject 和 libsoup 提升 C 语言编程能力 | LCTT (202209) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用开源库 GObject 和 libsoup 提升 C 语言编程能力 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用开源库 GObject 和 libsoup 提升 C 语言编程能力 | LCTT (202209) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202209/20220505 Boost the power of C with these open source libraries","title":"使用开源库 GObject 和 libsoup 提升 C 语言编程能力","tag":"202209","desc":""},"relativePath":"202209/20220505 Boost the power of C with these open source libraries.md","filePath":"[post].md"}'),d={name:"202209/20220505 Boost the power of C with these open source libraries.md"};function u(g,s,h,_,b,k){const p=t("Link");return o(),c("div",null,[s[19]||(s[19]=a("h1",{id:"使用开源库-gobject-和-libsoup-提升-c-语言编程能力",tabindex:"-1"},[n("使用开源库 GObject 和 libsoup 提升 C 语言编程能力 "),a("a",{class:"header-anchor",href:"#使用开源库-gobject-和-libsoup-提升-c-语言编程能力","aria-label":"Permalink to “使用开源库 GObject 和 libsoup 提升 C 语言编程能力”"},"​")],-1)),s[20]||(s[20]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202209/24/145218s1s1xk6s1mm2kg1x.jpg",alt:""})],-1)),a("blockquote",null,[a("p",null,[s[2]||(s[2]=n("开源库 GObject 和 libsoup 做了很多工作，因此你可以专注于使用 C 语言开发神奇的应用。 ",-1)),a("ruby",null,[e(p,{href:"https://docs.gtk.org/gobject/concepts.html"},{default:l(()=>[...s[0]||(s[0]=[n("GLib 对象系统",-1)])]),_:1}),s[1]||(s[1]=a("rt",null,"Object System",-1))]),s[3]||(s[3]=n("（GObject）是一个为 C 语言提供灵活且可扩展的面向对象框架的库。在这篇文章中，我将使用该库的 2.4 版本进行演示。",-1))])]),s[21]||(s[21]=r(`<p>GObject 库继承了 ANSI C 标准，拥有一些常见的数据类型，例如：</p><ul><li><code>gchar</code>：字符型</li><li><code>guchar</code>：无符号字符型</li><li><code>gunichar</code>：32 位定宽 Unicode 字符型</li><li><code>gboolean</code>：布尔型</li><li><code>gint8</code>、<code>gint16</code>、<code>gint32</code>、<code>gint64</code>：有符号 8、16、32 和 64 位整数</li><li><code>guint8</code>、<code>guint16</code>、<code>guint32</code>、<code>guint64</code>：无符号 8、16、32 和 64 位整数</li><li><code>gfloat</code>：IEEE 754 标准单精度浮点数</li><li><code>gdouble</code>：IEEE 754 标准双精度浮点数</li><li><code>gpointer</code>：泛指针</li></ul><h3 id="函数指针" tabindex="-1">函数指针 <a class="header-anchor" href="#函数指针" aria-label="Permalink to “函数指针”">​</a></h3><p>GObject 库还引入了类和接口的类型和对象体系。之所以可以，是因为 ANSI C 语言可以理解函数指针。</p><p>你可以这样做来声明函数指针：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void (*my_callback)(gpointer data);</span></span></code></pre></div><p>首先，你需要给变量 <code>my_callback</code> 赋值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void my_callback_func(gpointer data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  //do something</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my_callback = my_callback_func;</span></span></code></pre></div><p>函数指针 <code>my_callback</code> 可以这样来调用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gpointer data;</span></span>
<span class="line"><span>data = g_malloc(512 * sizeof(gint16));</span></span>
<span class="line"><span>my_callback(data);</span></span></code></pre></div><h3 id="对象类" tabindex="-1">对象类 <a class="header-anchor" href="#对象类" aria-label="Permalink to “对象类”">​</a></h3><p><code>GObject</code> 基类由 2 个结构（<code>GObject</code> 和 <code>GObjectClass</code>）组成，你可以继承它们以实现你自己的对象。</p><p>你需要在结构体中先嵌入 <code>GObject</code> 和 <code>GObjectClass</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct _MyObject</span></span>
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
<span class="line"><span>GType my_object_get_type(void);</span></span></code></pre></div><p>对象的实现包含了公有成员。GObject 也提供了私有成员的方法。这实际上是 C 源文件中的一个结构，而不是在头文件。该类通常只包含函数指针。</p><p>一个接口不能派生自另一个接口，比如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct _MyInterface</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  GInterface ginterface;</span></span>
<span class="line"><span>  //your interface methods</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>通过调用 <code>g_object_get()</code> 和 <code>g_object_set()</code> 函数来访问属性。若要获取属性，你必须提供特定类型的返回位置。建议先初始化返回位置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gchar *str</span></span>
<span class="line"><span></span></span>
<span class="line"><span>str = NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>g_object_get(gobject,</span></span>
<span class="line"><span>  &quot;my-name&quot;, &amp;str,</span></span>
<span class="line"><span>  NULL);</span></span></code></pre></div><p>或者你想要设置属性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>g_object_set(gobject,</span></span>
<span class="line"><span>  &quot;my-name&quot;, &quot;Anderson&quot;,</span></span>
<span class="line"><span>  NULL);</span></span></code></pre></div><h3 id="libsoup-http-库" tabindex="-1">libsoup HTTP 库 <a class="header-anchor" href="#libsoup-http-库" aria-label="Permalink to “libsoup HTTP 库”">​</a></h3><p><code>libsoup</code> 项目为 GNOME 提供了 HTTP 客服端和服务端使用的库。它使用 GObjects 和 glib 主循环与集成到 GNOME 应用，并且还具有用于命令行的同步 API。</p><p>首先，创建一个特定身份验证回调的 <code>libsoup</code> 会话。你也可以使用 cookie。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SoupSession *soup_session;</span></span>
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
<span class="line"><span>  G_CALLBACK(my_authenticate_callback), NULL);</span></span></code></pre></div><p>然后你可以像这样创建一个 HTTP GET 请求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SoupMessage *msg;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>当网络服务器进行身份认证时，会调用身份认证回调函数。</p><p>这是一个函数签名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define MY_AUTHENTICATE_LOGIN &quot;my-username&quot;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="一个-libsoup-服务器" tabindex="-1">一个 libsoup 服务器 <a class="header-anchor" href="#一个-libsoup-服务器" aria-label="Permalink to “一个 libsoup 服务器”">​</a></h3><p>想要基础的 HTTP 身份认证能够运行，你需要指定回调函数和服务器上下文路径。然后再添加一个带有另一个回调的处理程序。</p><p>下面这个例子展示了在 8080 端口监听任何 IPv4 地址的消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SoupServer *soup_server;</span></span>
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
<span class="line"><span>  ip4_socket, 0, &amp;error);</span></span></code></pre></div><p>示例代码中，有两个回调函数。一个处理身份认证，另一个处理对它的请求。</p><p>假设你想要网页服务器允许用户名为 <code>my-username</code> 和口令为 <code>my-password</code> 的凭证登录，并且用一个随机且唯一的用户 ID 字符串设置会话 cookie。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gboolean my_xmlrpc_server_auth_callback(SoupAuthDomain *domain,</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>对上下文路径 <code>my-xmlrpc</code> 进行处理的函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void my_xmlrpc_server_callback(SoupServer *soup_server,</span></span>
<span class="line"><span>  SoupMessage *msg,</span></span>
<span class="line"><span>  const char *path,</span></span>
<span class="line"><span>  GHashTable *query,</span></span>
<span class="line"><span>  SoupClientContext *client,</span></span>
<span class="line"><span>  MyObject *my_object)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  GSList *cookie;</span></span>
<span class="line"><span>  cookie = soup_cookies_from_request(msg);</span></span>
<span class="line"><span>  //check cookies</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="更加强大的-c-语言" tabindex="-1">更加强大的 C 语言 <a class="header-anchor" href="#更加强大的-c-语言" aria-label="Permalink to “更加强大的 C 语言”">​</a></h3><p>希望我的示例展现了 GObject 和 libsoup 项目给 C 语言带来了真正的提升。像这样在字面意义上扩展 C 语言，可以使 C 语言更易于使用。它们已经为你做了许多工作，这样你可以专注于用 C 语言开发简单、直接的应用程序了。</p><hr>`,42)),a("p",null,[s[5]||(s[5]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/22/5/libsoup-gobject-c"},{default:l(()=>[...s[4]||(s[4]=[n("https://opensource.com/article/22/5/libsoup-gobject-c",-1)])]),_:1})]),a("p",null,[s[10]||(s[10]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/joel2001k"},{default:l(()=>[...s[6]||(s[6]=[n("Joël Krähemann",-1)])]),_:1}),s[11]||(s[11]=n(" 选题：",-1)),e(p,{href:"https://github.com/lkxed"},{default:l(()=>[...s[7]||(s[7]=[n("lkxed",-1)])]),_:1}),s[12]||(s[12]=n(" 译者：",-1)),e(p,{href:"https://github.com/Donkey-Hao"},{default:l(()=>[...s[8]||(s[8]=[n("Donkey-Hao",-1)])]),_:1}),s[13]||(s[13]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[15]||(s[15]=[n("Linux中国",-1)])]),_:1}),s[18]||(s[18]=n(" 荣誉推出",-1))])])}const C=i(d,[["render",u]]);export{f as __pageData,C as default};
