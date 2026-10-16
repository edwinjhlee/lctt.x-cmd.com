import{_ as l,a0 as o,w as r,s as g,I as a,x as n,a1 as t,A as i,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"使用 Kafka 和 MongoDB 進行 Go 異步處理 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Kafka 和 MongoDB 進行 Go 異步處理 | LCTT (201808) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Kafka 和 MongoDB 進行 Go 異步處理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Kafka 和 MongoDB 進行 Go 異步處理 | LCTT (201808) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201808/20180429 Asynchronous Processing with Go using Kafka and MongoDB","title":"使用 Kafka 和 MongoDB 進行 Go 異步處理","tag":"201808","desc":""},"relativePath":"201808/20180429 Asynchronous Processing with Go using Kafka and MongoDB.md","filePath":"[post].md"}'),k={name:"201808/20180429 Asynchronous Processing with Go using Kafka and MongoDB.md"};function u(d,s,f,c,m,b){const p=o("Link");return r(),g("div",null,[s[39]||(s[39]=a("h1",{id:"使用-kafka-和-mongodb-進行-go-異步處理",tabindex:"-1"},[n("使用 Kafka 和 MongoDB 進行 Go 異步處理 "),a("a",{class:"header-anchor",href:"#使用-kafka-和-mongodb-進行-go-異步處理","aria-label":"Permalink to “使用 Kafka 和 MongoDB 進行 Go 異步處理”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("在我前面的Blog文章 “",-1)),t(p,{href:"https://www.melvinvivas.com/my-first-go-microservice/"},{default:i(()=>[...s[0]||(s[0]=[n("我的第一個 Go 微服務：使用 MongoDB 和 Docker 多階段構建",-1)])]),_:1}),s[2]||(s[2]=n("” 中，我創建了一個 Go 微服務示例，它發佈一個 REST 式的 http 端點，並將從 HTTP POST 中接收到的數據保存到 MongoDB 資料庫。",-1))]),s[40]||(s[40]=a("p",null,"在這個示例中，我將數據的保存和 MongoDB 分離，並創建另一個微服務去處理它。我還添加了 Kafka 為消息層服務，這樣微服務就可以異步處理它自己關心的東西了。",-1)),a("blockquote",null,[a("p",null,[s[4]||(s[4]=n("如果你有時間去看，我將這個Blog文章的整個過程錄製到 ",-1)),t(p,{href:"https://youtu.be/xa0Yia1jdu8"},{default:i(()=>[...s[3]||(s[3]=[n("這個視頻中了",-1)])]),_:1}),s[5]||(s[5]=n(" 😃",-1))])]),s[41]||(s[41]=a("p",null,"下面是這個使用了兩個微服務的簡單的異步處理示例的上層架構圖。",-1)),s[42]||(s[42]=a("p",null,[a("img",{src:"https://www.melvinvivas.com/content/images/2018/04/rest-kafka-mongo-microservice-draw-io.jpg",alt:"rest-kafka-mongo-microservice-draw-io"})],-1)),s[43]||(s[43]=a("p",null,"微服務 1 —— 是一個 REST 式微服務，它從一個 /POST http 調用中接收數據。接收到請求之後，它從 http 請求中檢索數據，並將它保存到 Kafka。保存之後，它通過 /POST 發送相同的數據去響應調用者。",-1)),s[44]||(s[44]=a("p",null,"微服務 2 —— 是一個訂閲了 Kafka 中的一個主題的微服務，微服務 1 的數據保存在該主題。一旦消息被微服務消費之後，它接着保存數據到 MongoDB 中。",-1)),s[45]||(s[45]=a("p",null,"在你繼續之前，我們需要能夠去運行這些微服務的幾件東西：",-1)),a("ol",null,[a("li",null,[t(p,{href:"https://kafka.apache.org/downloads"},{default:i(()=>[...s[6]||(s[6]=[n("下載 Kafka",-1)])]),_:1}),s[7]||(s[7]=n(" —— 我使用的版本是 kafka_2.11-1.1.0",-1))]),a("li",null,[s[9]||(s[9]=n("安裝 ",-1)),t(p,{href:"https://github.com/confluentinc/confluent-kafka-go"},{default:i(()=>[...s[8]||(s[8]=[n("librdkafka",-1)])]),_:1}),s[10]||(s[10]=n(" —— 不幸的是，這個庫應該在目標系統中",-1))]),a("li",null,[s[12]||(s[12]=n("安裝 ",-1)),t(p,{href:"https://github.com/confluentinc/confluent-kafka-go"},{default:i(()=>[...s[11]||(s[11]=[n("Kafka Go 客户端",-1)])]),_:1})]),a("li",null,[s[14]||(s[14]=n("運行 MongoDB。你可以去看我的 ",-1)),t(p,{href:"https://www.melvinvivas.com/my-first-go-microservice/"},{default:i(()=>[...s[13]||(s[13]=[n("以前的文章",-1)])]),_:1}),s[15]||(s[15]=n(" 中關於這一塊的內容，那篇文章中我使用了一個 MongoDB docker 鏡像。",-1))])]),s[46]||(s[46]=e(`<p>我們開始吧！</p><p>首先，啓動 Kafka，在你運行 Kafka 服務器之前，你需要運行 Zookeeper。下面是示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd /&lt;download path&gt;/kafka_2.11-1.1.0</span></span>
<span class="line"><span>$ bin/zookeeper-server-start.sh config/zookeeper.properties</span></span></code></pre></div><p>接着運行 Kafka —— 我使用 9092 端口連接到 Kafka。如果你需要改變端口，只需要在 <code>config/server.properties</code> 中配置即可。如果你像我一樣是個新手，我建議你現在還是使用默認端口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bin/kafka-server-start.sh config/server.properties</span></span></code></pre></div><p>Kafka 跑起來之後，我們需要 MongoDB。它很簡單，只需要使用這個 <code>docker-compose.yml</code> 即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>version: &#39;3&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  mongodb:</span></span>
<span class="line"><span>    image: mongo</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;27017:27017&quot;</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - &quot;mongodata:/data/db&quot;</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - network1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>volumes:</span></span>
<span class="line"><span>   mongodata:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span>   network1:</span></span></code></pre></div><p>使用 Docker Compose 去運行 MongoDB docker 容器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>docker-compose up</span></span></code></pre></div><p>這裏是微服務 1 的相關代碼。我只是修改了我前面的示例去保存到 Kafka 而不是 MongoDB：</p>`,10)),a("p",null,[t(p,{href:"https://github.com/donvito/learngo/tree/master/rest-kafka-mongo-microservice/rest-to-kafka"},{default:i(()=>[...s[16]||(s[16]=[n("rest-to-kafka/rest-kafka-sample.go",-1)])]),_:1})]),s[47]||(s[47]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func jobsPostHandler(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//Retrieve body from http request</span></span>
<span class="line"><span>	b, err := ioutil.ReadAll(r.Body)</span></span>
<span class="line"><span>	defer r.Body.Close()</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		panic(err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//Save data into Job struct</span></span>
<span class="line"><span>	var _job Job</span></span>
<span class="line"><span>	err = json.Unmarshal(b, &amp;_job)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		http.Error(w, err.Error(), 500)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	saveJobToKafka(_job)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//Convert job struct into json</span></span>
<span class="line"><span>	jsonString, err := json.Marshal(_job)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		http.Error(w, err.Error(), 500)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//Set content-type http header</span></span>
<span class="line"><span>	w.Header().Set(&quot;content-type&quot;, &quot;application/json&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//Send back data as response</span></span>
<span class="line"><span>	w.Write(jsonString)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func saveJobToKafka(job Job) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fmt.Println(&quot;save to kafka&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	jsonString, err := json.Marshal(job)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	jobString := string(jsonString)</span></span>
<span class="line"><span>	fmt.Print(jobString)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	p, err := kafka.NewProducer(&amp;kafka.ConfigMap{&quot;bootstrap.servers&quot;: &quot;localhost:9092&quot;})</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		panic(err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Produce messages to topic (asynchronously)</span></span>
<span class="line"><span>	topic := &quot;jobs-topic1&quot;</span></span>
<span class="line"><span>	for _, word := range []string{string(jobString)} {</span></span>
<span class="line"><span>		p.Produce(&amp;kafka.Message{</span></span>
<span class="line"><span>			TopicPartition: kafka.TopicPartition{Topic: &amp;topic, Partition: kafka.PartitionAny},</span></span>
<span class="line"><span>			Value:          []byte(word),</span></span>
<span class="line"><span>		}, nil)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏是微服務 2 的代碼。在這個代碼中最重要的東西是從 Kafka 中消費數據，保存部分我已經在前面的Blog文章中討論過了。這裏代碼的重點部分是從 Kafka 中消費數據：</p>`,2)),a("p",null,[t(p,{href:"https://github.com/donvito/learngo/tree/master/rest-kafka-mongo-microservice/kafka-to-mongo"},{default:i(()=>[...s[17]||(s[17]=[n("kafka-to-mongo/kafka-mongo-sample.go",-1)])]),_:1})]),s[48]||(s[48]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//Create MongoDB session</span></span>
<span class="line"><span>	session := initialiseMongo()</span></span>
<span class="line"><span>	mongoStore.session = session</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	receiveFromKafka()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func receiveFromKafka() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fmt.Println(&quot;Start receiving from Kafka&quot;)</span></span>
<span class="line"><span>	c, err := kafka.NewConsumer(&amp;kafka.ConfigMap{</span></span>
<span class="line"><span>		&quot;bootstrap.servers&quot;: &quot;localhost:9092&quot;,</span></span>
<span class="line"><span>		&quot;group.id&quot;:          &quot;group-id-1&quot;,</span></span>
<span class="line"><span>		&quot;auto.offset.reset&quot;: &quot;earliest&quot;,</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		panic(err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	c.SubscribeTopics([]string{&quot;jobs-topic1&quot;}, nil)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		msg, err := c.ReadMessage(-1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if err == nil {</span></span>
<span class="line"><span>			fmt.Printf(&quot;Received from Kafka %s: %s\\n&quot;, msg.TopicPartition, string(msg.Value))</span></span>
<span class="line"><span>			job := string(msg.Value)</span></span>
<span class="line"><span>			saveJobToMongo(job)</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			fmt.Printf(&quot;Consumer error: %v (%v)\\n&quot;, err, msg)</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	c.Close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func saveJobToMongo(jobString string) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fmt.Println(&quot;Save to MongoDB&quot;)</span></span>
<span class="line"><span>	col := mongoStore.session.DB(database).C(collection)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//Save data into Job struct</span></span>
<span class="line"><span>	var _job Job</span></span>
<span class="line"><span>	b := []byte(jobString)</span></span>
<span class="line"><span>	err := json.Unmarshal(b, &amp;_job)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		panic(err)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//Insert job into MongoDB</span></span>
<span class="line"><span>	errMongo := col.Insert(_job)</span></span>
<span class="line"><span>	if errMongo != nil {</span></span>
<span class="line"><span>		panic(errMongo)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	fmt.Printf(&quot;Saved to MongoDB : %s&quot;, jobString)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們來演示一下，運行微服務 1。確保 Kafka 已經運行了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run rest-kafka-sample.go</span></span></code></pre></div><p>我使用 Postman 向微服務 1 發送數據。</p><p><img src="https://www.melvinvivas.com/content/images/2018/04/Screenshot-2018-04-29-22.20.33.png" alt="Screenshot-2018-04-29-22.20.33"></p><p>這裏是日誌，你可以在微服務 1 中看到。當你看到這些的時候，説明已經接收到了來自 Postman 發送的數據，並且已經保存到了 Kafka。</p><p><img src="https://www.melvinvivas.com/content/images/2018/04/Screenshot-2018-04-29-22.22.00.png" alt="Screenshot-2018-04-29-22.22.00"></p><p>因為我們尚未運行微服務 2，數據被微服務 1 只保存在了 Kafka。我們來消費它並通過運行的微服務 2 來將它保存到 MongoDB。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run kafka-mongo-sample.go</span></span></code></pre></div><p>現在，你將在微服務 2 上看到消費的數據，並將它保存到了 MongoDB。</p><p><img src="https://www.melvinvivas.com/content/images/2018/04/Screenshot-2018-04-29-22.24.15.png" alt="Screenshot-2018-04-29-22.24.15"></p><p>檢查一下數據是否保存到了 MongoDB。如果有數據，我們成功了！</p><p><img src="https://www.melvinvivas.com/content/images/2018/04/Screenshot-2018-04-29-22.26.39.png" alt="Screenshot-2018-04-29-22.26.39"></p><p>完整的源代碼可以在這裏找到：</p>`,14)),a("p",null,[t(p,{href:"https://github.com/donvito/learngo/tree/master/rest-kafka-mongo-microservice"},{default:i(()=>[...s[18]||(s[18]=[n("https://github.com/donvito/learngo/tree/master/rest-kafka-mongo-microservice",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("現在是廣告時間：如果你喜歡這篇文章，請在 Twitter ",-1)),t(p,{href:"https://twitter.com/donvito"},{default:i(()=>[...s[19]||(s[19]=[n("@donvito",-1)])]),_:1}),s[23]||(s[23]=n(" 上關注我。我的 Twitter 上有關於 Docker、Kubernetes、GoLang、Cloud、DevOps、Agile 和 Startups 的內容。歡迎你們在 ",-1)),t(p,{href:"https://github.com/donvito"},{default:i(()=>[...s[20]||(s[20]=[n("GitHub",-1)])]),_:1}),s[24]||(s[24]=n(" 和 ",-1)),t(p,{href:"https://www.linkedin.com/in/melvinvivas/"},{default:i(()=>[...s[21]||(s[21]=[n("LinkedIn",-1)])]),_:1}),s[25]||(s[25]=n(" 關注我。",-1))]),s[49]||(s[49]=a("p",null,"開心地玩吧！",-1)),s[50]||(s[50]=a("hr",null,null,-1)),a("p",null,[s[27]||(s[27]=n("via: ",-1)),t(p,{href:"https://www.melvinvivas.com/developing-microservices-using-kafka-and-mongodb/"},{default:i(()=>[...s[26]||(s[26]=[n("https://www.melvinvivas.com/developing-microservices-using-kafka-and-mongodb/",-1)])]),_:1})]),a("p",null,[s[31]||(s[31]=n("作者：",-1)),t(p,{href:"https://www.melvinvivas.com/author/melvin/"},{default:i(()=>[...s[28]||(s[28]=[n("Melvin Vivas",-1)])]),_:1}),s[32]||(s[32]=n(" 譯者：",-1)),t(p,{href:"https://github.com/qhwdw"},{default:i(()=>[...s[29]||(s[29]=[n("qhwdw",-1)])]),_:1}),s[33]||(s[33]=n(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[30]||(s[30]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[34]||(s[34]=[n("LCTT",-1)])]),_:1}),s[37]||(s[37]=n(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...s[35]||(s[35]=[n("Linux中國",-1)])]),_:1}),s[38]||(s[38]=n(" 榮譽推出",-1))])])}const T=l(k,[["render",u]]);export{w as __pageData,T as default};
