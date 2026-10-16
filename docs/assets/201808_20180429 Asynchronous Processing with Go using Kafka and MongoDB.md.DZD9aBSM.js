import{_ as l,a0 as o,w as r,s as g,I as a,x as n,a1 as t,A as i,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"使用 Kafka 和 MongoDB 进行 Go 异步处理 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Kafka 和 MongoDB 进行 Go 异步处理 | LCTT (201808) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Kafka 和 MongoDB 进行 Go 异步处理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Kafka 和 MongoDB 进行 Go 异步处理 | LCTT (201808) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201808/20180429 Asynchronous Processing with Go using Kafka and MongoDB","title":"使用 Kafka 和 MongoDB 进行 Go 异步处理","tag":"201808","desc":""},"relativePath":"201808/20180429 Asynchronous Processing with Go using Kafka and MongoDB.md","filePath":"[post].md"}'),k={name:"201808/20180429 Asynchronous Processing with Go using Kafka and MongoDB.md"};function u(d,s,f,c,m,b){const p=o("Link");return r(),g("div",null,[s[39]||(s[39]=a("h1",{id:"使用-kafka-和-mongodb-进行-go-异步处理",tabindex:"-1"},[n("使用 Kafka 和 MongoDB 进行 Go 异步处理 "),a("a",{class:"header-anchor",href:"#使用-kafka-和-mongodb-进行-go-异步处理","aria-label":"Permalink to “使用 Kafka 和 MongoDB 进行 Go 异步处理”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("在我前面的博客文章 “",-1)),t(p,{href:"https://www.melvinvivas.com/my-first-go-microservice/"},{default:i(()=>[...s[0]||(s[0]=[n("我的第一个 Go 微服务：使用 MongoDB 和 Docker 多阶段构建",-1)])]),_:1}),s[2]||(s[2]=n("” 中，我创建了一个 Go 微服务示例，它发布一个 REST 式的 http 端点，并将从 HTTP POST 中接收到的数据保存到 MongoDB 数据库。",-1))]),s[40]||(s[40]=a("p",null,"在这个示例中，我将数据的保存和 MongoDB 分离，并创建另一个微服务去处理它。我还添加了 Kafka 为消息层服务，这样微服务就可以异步处理它自己关心的东西了。",-1)),a("blockquote",null,[a("p",null,[s[4]||(s[4]=n("如果你有时间去看，我将这个博客文章的整个过程录制到 ",-1)),t(p,{href:"https://youtu.be/xa0Yia1jdu8"},{default:i(()=>[...s[3]||(s[3]=[n("这个视频中了",-1)])]),_:1}),s[5]||(s[5]=n(" 😃",-1))])]),s[41]||(s[41]=a("p",null,"下面是这个使用了两个微服务的简单的异步处理示例的上层架构图。",-1)),s[42]||(s[42]=a("p",null,[a("img",{src:"https://www.melvinvivas.com/content/images/2018/04/rest-kafka-mongo-microservice-draw-io.jpg",alt:"rest-kafka-mongo-microservice-draw-io"})],-1)),s[43]||(s[43]=a("p",null,"微服务 1 —— 是一个 REST 式微服务，它从一个 /POST http 调用中接收数据。接收到请求之后，它从 http 请求中检索数据，并将它保存到 Kafka。保存之后，它通过 /POST 发送相同的数据去响应调用者。",-1)),s[44]||(s[44]=a("p",null,"微服务 2 —— 是一个订阅了 Kafka 中的一个主题的微服务，微服务 1 的数据保存在该主题。一旦消息被微服务消费之后，它接着保存数据到 MongoDB 中。",-1)),s[45]||(s[45]=a("p",null,"在你继续之前，我们需要能够去运行这些微服务的几件东西：",-1)),a("ol",null,[a("li",null,[t(p,{href:"https://kafka.apache.org/downloads"},{default:i(()=>[...s[6]||(s[6]=[n("下载 Kafka",-1)])]),_:1}),s[7]||(s[7]=n(" —— 我使用的版本是 kafka_2.11-1.1.0",-1))]),a("li",null,[s[9]||(s[9]=n("安装 ",-1)),t(p,{href:"https://github.com/confluentinc/confluent-kafka-go"},{default:i(()=>[...s[8]||(s[8]=[n("librdkafka",-1)])]),_:1}),s[10]||(s[10]=n(" —— 不幸的是，这个库应该在目标系统中",-1))]),a("li",null,[s[12]||(s[12]=n("安装 ",-1)),t(p,{href:"https://github.com/confluentinc/confluent-kafka-go"},{default:i(()=>[...s[11]||(s[11]=[n("Kafka Go 客户端",-1)])]),_:1})]),a("li",null,[s[14]||(s[14]=n("运行 MongoDB。你可以去看我的 ",-1)),t(p,{href:"https://www.melvinvivas.com/my-first-go-microservice/"},{default:i(()=>[...s[13]||(s[13]=[n("以前的文章",-1)])]),_:1}),s[15]||(s[15]=n(" 中关于这一块的内容，那篇文章中我使用了一个 MongoDB docker 镜像。",-1))])]),s[46]||(s[46]=e(`<p>我们开始吧！</p><p>首先，启动 Kafka，在你运行 Kafka 服务器之前，你需要运行 Zookeeper。下面是示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd /&lt;download path&gt;/kafka_2.11-1.1.0</span></span>
<span class="line"><span>$ bin/zookeeper-server-start.sh config/zookeeper.properties</span></span></code></pre></div><p>接着运行 Kafka —— 我使用 9092 端口连接到 Kafka。如果你需要改变端口，只需要在 <code>config/server.properties</code> 中配置即可。如果你像我一样是个新手，我建议你现在还是使用默认端口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bin/kafka-server-start.sh config/server.properties</span></span></code></pre></div><p>Kafka 跑起来之后，我们需要 MongoDB。它很简单，只需要使用这个 <code>docker-compose.yml</code> 即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>version: &#39;3&#39;</span></span>
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
<span class="line"><span>   network1:</span></span></code></pre></div><p>使用 Docker Compose 去运行 MongoDB docker 容器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>docker-compose up</span></span></code></pre></div><p>这里是微服务 1 的相关代码。我只是修改了我前面的示例去保存到 Kafka 而不是 MongoDB：</p>`,10)),a("p",null,[t(p,{href:"https://github.com/donvito/learngo/tree/master/rest-kafka-mongo-microservice/rest-to-kafka"},{default:i(()=>[...s[16]||(s[16]=[n("rest-to-kafka/rest-kafka-sample.go",-1)])]),_:1})]),s[47]||(s[47]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func jobsPostHandler(w http.ResponseWriter, r *http.Request) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这里是微服务 2 的代码。在这个代码中最重要的东西是从 Kafka 中消费数据，保存部分我已经在前面的博客文章中讨论过了。这里代码的重点部分是从 Kafka 中消费数据：</p>`,2)),a("p",null,[t(p,{href:"https://github.com/donvito/learngo/tree/master/rest-kafka-mongo-microservice/kafka-to-mongo"},{default:i(()=>[...s[17]||(s[17]=[n("kafka-to-mongo/kafka-mongo-sample.go",-1)])]),_:1})]),s[48]||(s[48]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我们来演示一下，运行微服务 1。确保 Kafka 已经运行了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run rest-kafka-sample.go</span></span></code></pre></div><p>我使用 Postman 向微服务 1 发送数据。</p><p><img src="https://www.melvinvivas.com/content/images/2018/04/Screenshot-2018-04-29-22.20.33.png" alt="Screenshot-2018-04-29-22.20.33"></p><p>这里是日志，你可以在微服务 1 中看到。当你看到这些的时候，说明已经接收到了来自 Postman 发送的数据，并且已经保存到了 Kafka。</p><p><img src="https://www.melvinvivas.com/content/images/2018/04/Screenshot-2018-04-29-22.22.00.png" alt="Screenshot-2018-04-29-22.22.00"></p><p>因为我们尚未运行微服务 2，数据被微服务 1 只保存在了 Kafka。我们来消费它并通过运行的微服务 2 来将它保存到 MongoDB。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go run kafka-mongo-sample.go</span></span></code></pre></div><p>现在，你将在微服务 2 上看到消费的数据，并将它保存到了 MongoDB。</p><p><img src="https://www.melvinvivas.com/content/images/2018/04/Screenshot-2018-04-29-22.24.15.png" alt="Screenshot-2018-04-29-22.24.15"></p><p>检查一下数据是否保存到了 MongoDB。如果有数据，我们成功了！</p><p><img src="https://www.melvinvivas.com/content/images/2018/04/Screenshot-2018-04-29-22.26.39.png" alt="Screenshot-2018-04-29-22.26.39"></p><p>完整的源代码可以在这里找到：</p>`,14)),a("p",null,[t(p,{href:"https://github.com/donvito/learngo/tree/master/rest-kafka-mongo-microservice"},{default:i(()=>[...s[18]||(s[18]=[n("https://github.com/donvito/learngo/tree/master/rest-kafka-mongo-microservice",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("现在是广告时间：如果你喜欢这篇文章，请在 Twitter ",-1)),t(p,{href:"https://twitter.com/donvito"},{default:i(()=>[...s[19]||(s[19]=[n("@donvito",-1)])]),_:1}),s[23]||(s[23]=n(" 上关注我。我的 Twitter 上有关于 Docker、Kubernetes、GoLang、Cloud、DevOps、Agile 和 Startups 的内容。欢迎你们在 ",-1)),t(p,{href:"https://github.com/donvito"},{default:i(()=>[...s[20]||(s[20]=[n("GitHub",-1)])]),_:1}),s[24]||(s[24]=n(" 和 ",-1)),t(p,{href:"https://www.linkedin.com/in/melvinvivas/"},{default:i(()=>[...s[21]||(s[21]=[n("LinkedIn",-1)])]),_:1}),s[25]||(s[25]=n(" 关注我。",-1))]),s[49]||(s[49]=a("p",null,"开心地玩吧！",-1)),s[50]||(s[50]=a("hr",null,null,-1)),a("p",null,[s[27]||(s[27]=n("via: ",-1)),t(p,{href:"https://www.melvinvivas.com/developing-microservices-using-kafka-and-mongodb/"},{default:i(()=>[...s[26]||(s[26]=[n("https://www.melvinvivas.com/developing-microservices-using-kafka-and-mongodb/",-1)])]),_:1})]),a("p",null,[s[31]||(s[31]=n("作者：",-1)),t(p,{href:"https://www.melvinvivas.com/author/melvin/"},{default:i(()=>[...s[28]||(s[28]=[n("Melvin Vivas",-1)])]),_:1}),s[32]||(s[32]=n(" 译者：",-1)),t(p,{href:"https://github.com/qhwdw"},{default:i(()=>[...s[29]||(s[29]=[n("qhwdw",-1)])]),_:1}),s[33]||(s[33]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[30]||(s[30]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[34]||(s[34]=[n("LCTT",-1)])]),_:1}),s[37]||(s[37]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...s[35]||(s[35]=[n("Linux中国",-1)])]),_:1}),s[38]||(s[38]=n(" 荣誉推出",-1))])])}const T=l(k,[["render",u]]);export{w as __pageData,T as default};
