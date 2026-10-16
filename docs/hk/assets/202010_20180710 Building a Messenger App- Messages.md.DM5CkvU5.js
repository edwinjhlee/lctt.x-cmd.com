import{_ as l,a0 as i,w as r,s as o,I as a,x as n,a1 as t,A as e,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"構建一個即時消息應用（四）：消息 | LCTT x X-CMD","titleTemplate":false,"description":"構建一個即時消息應用（四）：消息 | LCTT (202010) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"構建一個即時消息應用（四）：消息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"構建一個即時消息應用（四）：消息 | LCTT (202010) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202010/20180710 Building a Messenger App- Messages","title":"構建一個即時消息應用（四）：消息","tag":"202010","desc":""},"relativePath":"202010/20180710 Building a Messenger App- Messages.md","filePath":"[post].md"}'),u={name:"202010/20180710 Building a Messenger App- Messages.md"};function d(g,s,m,f,h,x){const p=i("Link");return r(),o("div",null,[s[19]||(s[19]=a("h1",{id:"構建一個即時消息應用-四-消息",tabindex:"-1"},[n("構建一個即時消息應用（四）：消息 "),a("a",{class:"header-anchor",href:"#構建一個即時消息應用-四-消息","aria-label":"Permalink to “構建一個即時消息應用（四）：消息”"},"​")],-1)),s[20]||(s[20]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202010/04/114458z1p1188epequ686p.jpg",alt:""})],-1)),s[21]||(s[21]=a("p",null,"本文是該系列的第四篇。",-1)),a("ul",null,[a("li",null,[t(p,{href:"https://linux.cn/article-11396-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("第一篇: 模式",-1)])]),_:1})]),a("li",null,[t(p,{href:"https://linux.cn/article-11510-1.html"},{default:e(()=>[...s[1]||(s[1]=[n("第二篇: OAuth",-1)])]),_:1})]),a("li",null,[t(p,{href:"https://linux.cn/article-12056-1.html"},{default:e(()=>[...s[2]||(s[2]=[n("第三篇: 對話",-1)])]),_:1})])]),s[22]||(s[22]=c(`<p>在這篇文章中，我們將對端點進行編碼，以創建一條消息並列出它們，同時還將編寫一個端點以更新參與者上次閲讀消息的時間。 首先在 <code>main()</code> 函數中添加這些路由。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.HandleFunc(&quot;POST&quot;, &quot;/api/conversations/:conversationID/messages&quot;, requireJSON(guard(createMessage)))</span></span>
<span class="line"><span>router.HandleFunc(&quot;GET&quot;, &quot;/api/conversations/:conversationID/messages&quot;, guard(getMessages))</span></span>
<span class="line"><span>router.HandleFunc(&quot;POST&quot;, &quot;/api/conversations/:conversationID/read_messages&quot;, guard(readMessages))</span></span></code></pre></div><p>消息會進入對話，因此端點包含對話 ID。</p><h3 id="創建消息" tabindex="-1">創建消息 <a class="header-anchor" href="#創建消息" aria-label="Permalink to “創建消息”">​</a></h3><p>該端點處理對 <code>/api/conversations/{conversationID}/messages</code> 的 POST 請求，其 JSON 主體僅包含消息內容，並返回新創建的消息。它有兩個副作用：更新對話 <code>last_message_id</code> 以及更新參與者 <code>messages_read_at</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func createMessage(w http.ResponseWriter, r *http.Request) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>首先，它將請求正文解碼為包含消息內容的結構。然後，它驗證內容不為空並且少於 480 個字符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var rxSpaces = regexp.MustCompile(&quot;\\\\s+&quot;)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>這是刪除空格的函數。它遍歷每一行，刪除兩個以上的連續空格，然後回非空行。</p><p>驗證之後，它將啓動一個 SQL 事務。首先，它查詢對話中的參與者是否存在。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func queryParticipantExistance(ctx context.Context, tx *sql.Tx, userID, conversationID string) (bool, error) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我將其提取到一個函數中，因為稍後可以重用。</p><p>如果用户不是對話參與者，我們將返回一個 <code>404 NOT Found</code> 錯誤。</p><p>然後，它插入消息並更新對話 <code>last_message_id</code>。從這時起，由於我們不允許刪除消息，因此 <code>last_message_id</code> 不能為 <code>NULL</code>。</p><p>接下來提交事務，並在 goroutine 中更新參與者 <code>messages_read_at</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func updateMessagesReadAt(ctx context.Context, userID, conversationID string) error {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在回覆這條新消息之前，我們必須通知一下。這是我們將要在下一篇文章中編寫的實時部分，因此我在那裏留一了個註釋。</p><h3 id="獲取消息" tabindex="-1">獲取消息 <a class="header-anchor" href="#獲取消息" aria-label="Permalink to “獲取消息”">​</a></h3><p>這個端點處理對 <code>/api/conversations/{conversationID}/messages</code> 的 GET 請求。 它用一個包含會話中所有消息的 JSON 數組進行響應。它還具有更新參與者 <code>messages_read_at</code> 的副作用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func getMessages(w http.ResponseWriter, r *http.Request) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>首先，它以只讀模式開始一個 SQL 事務。檢查參與者是否存在，並查詢所有消息。在每條消息中，我們使用當前經過身份驗證的用户 ID 來了解用户是否擁有該消息（<code>mine</code>）。 然後，它提交事務，在 goroutine 中更新參與者 <code>messages_read_at</code> 並以消息響應。</p><h3 id="讀取消息" tabindex="-1">讀取消息 <a class="header-anchor" href="#讀取消息" aria-label="Permalink to “讀取消息”">​</a></h3><p>該端點處理對 <code>/api/conversations/{conversationID}/read_messages</code> 的 POST 請求。 沒有任何請求或響應主體。 在前端，每次有新消息到達實時流時，我們都會發出此請求。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func readMessages(w http.ResponseWriter, r *http.Request) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>它使用了與更新參與者 <code>messages_read_at</code> 相同的函數。</p><hr><p>到此為止。實時消息是後台僅剩的部分了。請等待下一篇文章。</p>`,27)),a("ul",null,[a("li",null,[t(p,{href:"https://github.com/nicolasparada/go-messenger-demo"},{default:e(()=>[...s[3]||(s[3]=[n("源代碼",-1)])]),_:1})])]),s[23]||(s[23]=a("hr",null,null,-1)),a("p",null,[s[5]||(s[5]=n("via: ",-1)),t(p,{href:"https://nicolasparada.netlify.com/posts/go-messenger-messages/"},{default:e(()=>[...s[4]||(s[4]=[n("https://nicolasparada.netlify.com/posts/go-messenger-messages/",-1)])]),_:1})]),a("p",null,[s[10]||(s[10]=n("作者：",-1)),t(p,{href:"https://nicolasparada.netlify.com/"},{default:e(()=>[...s[6]||(s[6]=[n("Nicolás Parada",-1)])]),_:1}),s[11]||(s[11]=n(" 選題：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[7]||(s[7]=[n("lujun9972",-1)])]),_:1}),s[12]||(s[12]=n(" 譯者：",-1)),t(p,{href:"https://github.com/gxlct008"},{default:e(()=>[...s[8]||(s[8]=[n("gxlct008",-1)])]),_:1}),s[13]||(s[13]=n(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[15]||(s[15]=[n("Linux中國",-1)])]),_:1}),s[18]||(s[18]=n(" 榮譽推出",-1))])])}const b=l(u,[["render",d]]);export{v as __pageData,b as default};
