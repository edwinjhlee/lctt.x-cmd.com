import{_ as l,a0 as i,w as r,s as o,I as a,x as n,a1 as t,A as e,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"构建一个即时消息应用（四）：消息 | LCTT x X-CMD","titleTemplate":false,"description":"构建一个即时消息应用（四）：消息 | LCTT (202010) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"构建一个即时消息应用（四）：消息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"构建一个即时消息应用（四）：消息 | LCTT (202010) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202010/20180710 Building a Messenger App- Messages","title":"构建一个即时消息应用（四）：消息","tag":"202010","desc":""},"relativePath":"202010/20180710 Building a Messenger App- Messages.md","filePath":"[post].md"}'),u={name:"202010/20180710 Building a Messenger App- Messages.md"};function d(g,s,m,f,h,x){const p=i("Link");return r(),o("div",null,[s[19]||(s[19]=a("h1",{id:"构建一个即时消息应用-四-消息",tabindex:"-1"},[n("构建一个即时消息应用（四）：消息 "),a("a",{class:"header-anchor",href:"#构建一个即时消息应用-四-消息","aria-label":"Permalink to “构建一个即时消息应用（四）：消息”"},"​")],-1)),s[20]||(s[20]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202010/04/114458z1p1188epequ686p.jpg",alt:""})],-1)),s[21]||(s[21]=a("p",null,"本文是该系列的第四篇。",-1)),a("ul",null,[a("li",null,[t(p,{href:"https://linux.cn/article-11396-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("第一篇: 模式",-1)])]),_:1})]),a("li",null,[t(p,{href:"https://linux.cn/article-11510-1.html"},{default:e(()=>[...s[1]||(s[1]=[n("第二篇: OAuth",-1)])]),_:1})]),a("li",null,[t(p,{href:"https://linux.cn/article-12056-1.html"},{default:e(()=>[...s[2]||(s[2]=[n("第三篇: 对话",-1)])]),_:1})])]),s[22]||(s[22]=c(`<p>在这篇文章中，我们将对端点进行编码，以创建一条消息并列出它们，同时还将编写一个端点以更新参与者上次阅读消息的时间。 首先在 <code>main()</code> 函数中添加这些路由。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;POST&quot;, &quot;/api/conversations/:conversationID/messages&quot;, requireJSON(guard(createMessage)))</span></span>
<span class="line"><span>router.HandleFunc(&quot;GET&quot;, &quot;/api/conversations/:conversationID/messages&quot;, guard(getMessages))</span></span>
<span class="line"><span>router.HandleFunc(&quot;POST&quot;, &quot;/api/conversations/:conversationID/read_messages&quot;, guard(readMessages))</span></span></code></pre></div><p>消息会进入对话，因此端点包含对话 ID。</p><h3 id="创建消息" tabindex="-1">创建消息 <a class="header-anchor" href="#创建消息" aria-label="Permalink to “创建消息”">​</a></h3><p>该端点处理对 <code>/api/conversations/{conversationID}/messages</code> 的 POST 请求，其 JSON 主体仅包含消息内容，并返回新创建的消息。它有两个副作用：更新对话 <code>last_message_id</code> 以及更新参与者 <code>messages_read_at</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func createMessage(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>	var input struct {</span></span>
<span class="line"><span>		Content string \`json:&quot;content&quot;\`</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	defer r.Body.Close()</span></span>
<span class="line"><span>	if err := json.NewDecoder(r.Body).Decode(&amp;input); err != nil {</span></span>
<span class="line"><span>		http.Error(w, err.Error(), http.StatusBadRequest)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	errs := make(map[string]string)</span></span>
<span class="line"><span>	input.Content = removeSpaces(input.Content)</span></span>
<span class="line"><span>	if input.Content == &quot;&quot; {</span></span>
<span class="line"><span>		errs[&quot;content&quot;] = &quot;Message content required&quot;</span></span>
<span class="line"><span>	} else if len([]rune(input.Content)) &gt; 480 {</span></span>
<span class="line"><span>		errs[&quot;content&quot;] = &quot;Message too long. 480 max&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if len(errs) != 0 {</span></span>
<span class="line"><span>		respond(w, Errors{errs}, http.StatusUnprocessableEntity)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ctx := r.Context()</span></span>
<span class="line"><span>	authUserID := ctx.Value(keyAuthUserID).(string)</span></span>
<span class="line"><span>	conversationID := way.Param(ctx, &quot;conversationID&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	tx, err := db.BeginTx(ctx, nil)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not begin tx: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	defer tx.Rollback()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	isParticipant, err := queryParticipantExistance(ctx, tx, authUserID, conversationID)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not query participant existance: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if !isParticipant {</span></span>
<span class="line"><span>		http.Error(w, &quot;Conversation not found&quot;, http.StatusNotFound)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var message Message</span></span>
<span class="line"><span>	if err := tx.QueryRowContext(ctx, \`</span></span>
<span class="line"><span>		INSERT INTO messages (content, user_id, conversation_id) VALUES</span></span>
<span class="line"><span>			($1, $2, $3)</span></span>
<span class="line"><span>		RETURNING id, created_at</span></span>
<span class="line"><span>	\`, input.Content, authUserID, conversationID).Scan(</span></span>
<span class="line"><span>		&amp;message.ID,</span></span>
<span class="line"><span>		&amp;message.CreatedAt,</span></span>
<span class="line"><span>	); err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not insert message: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if _, err := tx.ExecContext(ctx, \`</span></span>
<span class="line"><span>		UPDATE conversations SET last_message_id = $1</span></span>
<span class="line"><span>		WHERE id = $2</span></span>
<span class="line"><span>	\`, message.ID, conversationID); err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not update conversation last message ID: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if err = tx.Commit(); err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not commit tx to create a message: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	go func() {</span></span>
<span class="line"><span>		if err = updateMessagesReadAt(nil, authUserID, conversationID); err != nil {</span></span>
<span class="line"><span>			log.Printf(&quot;could not update messages read at: %v\\n&quot;, err)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	message.Content = input.Content</span></span>
<span class="line"><span>	message.UserID = authUserID</span></span>
<span class="line"><span>	message.ConversationID = conversationID</span></span>
<span class="line"><span>	// TODO: notify about new message.</span></span>
<span class="line"><span>	message.Mine = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	respond(w, message, http.StatusCreated)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>首先，它将请求正文解码为包含消息内容的结构。然后，它验证内容不为空并且少于 480 个字符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var rxSpaces = regexp.MustCompile(&quot;\\\\s+&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func removeSpaces(s string) string {</span></span>
<span class="line"><span>	if s == &quot;&quot; {</span></span>
<span class="line"><span>		return s</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	lines := make([]string, 0)</span></span>
<span class="line"><span>	for _, line := range strings.Split(s, &quot;\\n&quot;) {</span></span>
<span class="line"><span>		line = rxSpaces.ReplaceAllLiteralString(line, &quot; &quot;)</span></span>
<span class="line"><span>		line = strings.TrimSpace(line)</span></span>
<span class="line"><span>		if line != &quot;&quot; {</span></span>
<span class="line"><span>			lines = append(lines, line)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return strings.Join(lines, &quot;\\n&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这是删除空格的函数。它遍历每一行，删除两个以上的连续空格，然后回非空行。</p><p>验证之后，它将启动一个 SQL 事务。首先，它查询对话中的参与者是否存在。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func queryParticipantExistance(ctx context.Context, tx *sql.Tx, userID, conversationID string) (bool, error) {</span></span>
<span class="line"><span>	if ctx == nil {</span></span>
<span class="line"><span>		ctx = context.Background()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var exists bool</span></span>
<span class="line"><span>	if err := tx.QueryRowContext(ctx, \`SELECT EXISTS (</span></span>
<span class="line"><span>		SELECT 1 FROM participants</span></span>
<span class="line"><span>		WHERE user_id = $1 AND conversation_id = $2</span></span>
<span class="line"><span>	)\`, userID, conversationID).Scan(&amp;exists); err != nil {</span></span>
<span class="line"><span>		return false, err</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return exists, nil</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我将其提取到一个函数中，因为稍后可以重用。</p><p>如果用户不是对话参与者，我们将返回一个 <code>404 NOT Found</code> 错误。</p><p>然后，它插入消息并更新对话 <code>last_message_id</code>。从这时起，由于我们不允许删除消息，因此 <code>last_message_id</code> 不能为 <code>NULL</code>。</p><p>接下来提交事务，并在 goroutine 中更新参与者 <code>messages_read_at</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func updateMessagesReadAt(ctx context.Context, userID, conversationID string) error {</span></span>
<span class="line"><span>	if ctx == nil {</span></span>
<span class="line"><span>		ctx = context.Background()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if _, err := db.ExecContext(ctx, \`</span></span>
<span class="line"><span>		UPDATE participants SET messages_read_at = now()</span></span>
<span class="line"><span>		WHERE user_id = $1 AND conversation_id = $2</span></span>
<span class="line"><span>	\`, userID, conversationID); err != nil {</span></span>
<span class="line"><span>		return err</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return nil</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在回复这条新消息之前，我们必须通知一下。这是我们将要在下一篇文章中编写的实时部分，因此我在那里留一了个注释。</p><h3 id="获取消息" tabindex="-1">获取消息 <a class="header-anchor" href="#获取消息" aria-label="Permalink to “获取消息”">​</a></h3><p>这个端点处理对 <code>/api/conversations/{conversationID}/messages</code> 的 GET 请求。 它用一个包含会话中所有消息的 JSON 数组进行响应。它还具有更新参与者 <code>messages_read_at</code> 的副作用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func getMessages(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>	ctx := r.Context()</span></span>
<span class="line"><span>	authUserID := ctx.Value(keyAuthUserID).(string)</span></span>
<span class="line"><span>	conversationID := way.Param(ctx, &quot;conversationID&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	tx, err := db.BeginTx(ctx, &amp;sql.TxOptions{ReadOnly: true})</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not begin tx: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	defer tx.Rollback()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	isParticipant, err := queryParticipantExistance(ctx, tx, authUserID, conversationID)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not query participant existance: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if !isParticipant {</span></span>
<span class="line"><span>		http.Error(w, &quot;Conversation not found&quot;, http.StatusNotFound)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	rows, err := tx.QueryContext(ctx, \`</span></span>
<span class="line"><span>		SELECT</span></span>
<span class="line"><span>			id,</span></span>
<span class="line"><span>			content,</span></span>
<span class="line"><span>			created_at,</span></span>
<span class="line"><span>			user_id = $1 AS mine</span></span>
<span class="line"><span>		FROM messages</span></span>
<span class="line"><span>		WHERE messages.conversation_id = $2</span></span>
<span class="line"><span>		ORDER BY messages.created_at DESC</span></span>
<span class="line"><span>	\`, authUserID, conversationID)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not query messages: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	defer rows.Close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	messages := make([]Message, 0)</span></span>
<span class="line"><span>	for rows.Next() {</span></span>
<span class="line"><span>		var message Message</span></span>
<span class="line"><span>		if err = rows.Scan(</span></span>
<span class="line"><span>			&amp;message.ID,</span></span>
<span class="line"><span>			&amp;message.Content,</span></span>
<span class="line"><span>			&amp;message.CreatedAt,</span></span>
<span class="line"><span>			&amp;message.Mine,</span></span>
<span class="line"><span>		); err != nil {</span></span>
<span class="line"><span>			respondError(w, fmt.Errorf(&quot;could not scan message: %v&quot;, err))</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		messages = append(messages, message)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if err = rows.Err(); err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not iterate over messages: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if err = tx.Commit(); err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not commit tx to get messages: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	go func() {</span></span>
<span class="line"><span>		if err = updateMessagesReadAt(nil, authUserID, conversationID); err != nil {</span></span>
<span class="line"><span>			log.Printf(&quot;could not update messages read at: %v\\n&quot;, err)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	respond(w, messages, http.StatusOK)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>首先，它以只读模式开始一个 SQL 事务。检查参与者是否存在，并查询所有消息。在每条消息中，我们使用当前经过身份验证的用户 ID 来了解用户是否拥有该消息（<code>mine</code>）。 然后，它提交事务，在 goroutine 中更新参与者 <code>messages_read_at</code> 并以消息响应。</p><h3 id="读取消息" tabindex="-1">读取消息 <a class="header-anchor" href="#读取消息" aria-label="Permalink to “读取消息”">​</a></h3><p>该端点处理对 <code>/api/conversations/{conversationID}/read_messages</code> 的 POST 请求。 没有任何请求或响应主体。 在前端，每次有新消息到达实时流时，我们都会发出此请求。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func readMessages(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span>	ctx := r.Context()</span></span>
<span class="line"><span>	authUserID := ctx.Value(keyAuthUserID).(string)</span></span>
<span class="line"><span>	conversationID := way.Param(ctx, &quot;conversationID&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if err := updateMessagesReadAt(ctx, authUserID, conversationID); err != nil {</span></span>
<span class="line"><span>		respondError(w, fmt.Errorf(&quot;could not update messages read at: %v&quot;, err))</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	w.WriteHeader(http.StatusNoContent)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>它使用了与更新参与者 <code>messages_read_at</code> 相同的函数。</p><hr><p>到此为止。实时消息是后台仅剩的部分了。请等待下一篇文章。</p>`,27)),a("ul",null,[a("li",null,[t(p,{href:"https://github.com/nicolasparada/go-messenger-demo"},{default:e(()=>[...s[3]||(s[3]=[n("源代码",-1)])]),_:1})])]),s[23]||(s[23]=a("hr",null,null,-1)),a("p",null,[s[5]||(s[5]=n("via: ",-1)),t(p,{href:"https://nicolasparada.netlify.com/posts/go-messenger-messages/"},{default:e(()=>[...s[4]||(s[4]=[n("https://nicolasparada.netlify.com/posts/go-messenger-messages/",-1)])]),_:1})]),a("p",null,[s[10]||(s[10]=n("作者：",-1)),t(p,{href:"https://nicolasparada.netlify.com/"},{default:e(()=>[...s[6]||(s[6]=[n("Nicolás Parada",-1)])]),_:1}),s[11]||(s[11]=n(" 选题：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[7]||(s[7]=[n("lujun9972",-1)])]),_:1}),s[12]||(s[12]=n(" 译者：",-1)),t(p,{href:"https://github.com/gxlct008"},{default:e(()=>[...s[8]||(s[8]=[n("gxlct008",-1)])]),_:1}),s[13]||(s[13]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[15]||(s[15]=[n("Linux中国",-1)])]),_:1}),s[18]||(s[18]=n(" 荣誉推出",-1))])])}const b=l(u,[["render",d]]);export{v as __pageData,b as default};
