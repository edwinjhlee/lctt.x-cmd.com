import{_ as l,a0 as o,w as r,s as d,I as a,x as n,a1 as e,A as p,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const R=JSON.parse('{"title":"如何在 Apache Kafka 中通过 KSQL 分析 Twitter 数据 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Apache Kafka 中通过 KSQL 分析 Twitter 数据 | LCTT (201711) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Apache Kafka 中通过 KSQL 分析 Twitter 数据 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Apache Kafka 中通过 KSQL 分析 Twitter 数据 | LCTT (201711) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201711/20171010 Getting Started Analyzing Twitter Data in Apache Kafka through KSQL","title":"如何在 Apache Kafka 中通过 KSQL 分析 Twitter 数据","tag":"201711","desc":""},"relativePath":"201711/20171010 Getting Started Analyzing Twitter Data in Apache Kafka through KSQL.md","filePath":"[post].md"}'),u={name:"201711/20171010 Getting Started Analyzing Twitter Data in Apache Kafka through KSQL.md"};function c(g,s,k,h,f,b){const t=o("Link");return r(),d("div",null,[s[52]||(s[52]=a("h1",{id:"如何在-apache-kafka-中通过-ksql-分析-twitter-数据",tabindex:"-1"},[n("如何在 Apache Kafka 中通过 KSQL 分析 Twitter 数据 "),a("a",{class:"header-anchor",href:"#如何在-apache-kafka-中通过-ksql-分析-twitter-数据","aria-label":"Permalink to “如何在 Apache Kafka 中通过 KSQL 分析 Twitter 数据”"},"​")],-1)),a("p",null,[e(t,{href:"https://github.com/confluentinc/ksql/"},{default:p(()=>[...s[0]||(s[0]=[n("KSQL",-1)])]),_:1}),s[1]||(s[1]=n(" 是 Apache Kafka 中的开源的流式 SQL 引擎。它可以让你在 Kafka ",-1)),s[2]||(s[2]=a("ruby",null,[n("主题"),a("rt",null,"topic")],-1)),s[3]||(s[3]=n("上，使用一个简单的并且是交互式的 SQL 接口，很容易地做一些复杂的流处理。在这个短文中，我们将看到如何轻松地配置并运行在一个沙箱中去探索它，并使用大家都喜欢的演示数据库源： Twitter。我们将从推文的原始流中获取，通过使用 KSQL 中的条件去过滤它，来构建一个聚合，如统计每个用户每小时的推文数量。",-1))]),s[53]||(s[53]=a("p",null,[a("img",{src:"https://www.confluent.io/wp-content/uploads/tweet_kafka-1024x617.png",alt:""})],-1)),a("p",null,[s[6]||(s[6]=n("首先， ",-1)),e(t,{href:"https://www.confluent.io/download/"},{default:p(()=>[...s[4]||(s[4]=[n("获取一个 Confluent 平台的副本",-1)])]),_:1}),s[7]||(s[7]=n("。我使用的是 RPM 包，但是，如果你需要的话，你也可以使用 ",-1)),e(t,{href:"https://docs.confluent.io/current/installation.html?"},{default:p(()=>[...s[5]||(s[5]=[n("tar、 zip 等等",-1)])]),_:1}),s[8]||(s[8]=n(" 。启动 Confluent 系统：",-1))]),s[54]||(s[54]=i('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ confluent start</span></span></code></pre></div>',1)),a("p",null,[s[10]||(s[10]=n("（如果你感兴趣，这里有一个 ",-1)),e(t,{href:"https://www.youtube.com/watch?v=ZKqBptBHZTg"},{default:p(()=>[...s[9]||(s[9]=[n("Confluent 命令行的快速教程",-1)])]),_:1}),s[11]||(s[11]=n("）",-1))]),a("p",null,[s[13]||(s[13]=n("我们将使用 Kafka Connect 从 Twitter 上拉取数据。 这个 Twitter 连接器可以在 ",-1)),e(t,{href:"https://github.com/jcustenborder/kafka-connect-twitter"},{default:p(()=>[...s[12]||(s[12]=[n("GitHub",-1)])]),_:1}),s[14]||(s[14]=n(" 上找到。要安装它，像下面这样操作：",-1))]),s[55]||(s[55]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Clone the git repo</span></span>
<span class="line"><span>cd /home/rmoff</span></span>
<span class="line"><span>git clone https://github.com/jcustenborder/kafka-connect-twitter.git</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Compile the code</span></span>
<span class="line"><span>cd kafka-connect-twitter</span></span>
<span class="line"><span>mvn clean package</span></span></code></pre></div>`,2)),a("p",null,[s[16]||(s[16]=n("要让 Kafka Connect 去使用我们构建的",-1)),e(t,{href:"https://docs.confluent.io/current/connect/userguide.html#connect-installing-plugins"},{default:p(()=>[...s[15]||(s[15]=[n("连接器",-1)])]),_:1}),s[17]||(s[17]=n("， 你要去修改配置文件。因为我们使用 Confluent 命令行，真实的配置文件是在 ",-1)),s[18]||(s[18]=a("code",null,"etc/schema-registry/connect-avro-distributed.properties",-1)),s[19]||(s[19]=n("，因此去修改它并增加如下内容：",-1))]),s[56]||(s[56]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>plugin.path=/home/rmoff/kafka-connect-twitter/target/kafka-connect-twitter-0.2-SNAPSHOT.tar.gz</span></span></code></pre></div><p>重启动 Kafka Connect：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>confluent stop connect</span></span>
<span class="line"><span>confluent start connect</span></span></code></pre></div>`,3)),a("p",null,[s[21]||(s[21]=n("一旦你安装好插件，你可以很容易地去配置它。你可以直接使用 Kafka Connect 的 REST API ，或者创建你的配置文件，这就是我要在这里做的。如果你需要全部的方法，请首先访问 Twitter 来获取你的 ",-1)),e(t,{href:"https://apps.twitter.com/"},{default:p(()=>[...s[20]||(s[20]=[n("API 密钥",-1)])]),_:1}),s[22]||(s[22]=n("。",-1))]),s[57]||(s[57]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span> &quot;name&quot;: &quot;twitter_source_json_01&quot;,</span></span>
<span class="line"><span> &quot;config&quot;: {</span></span>
<span class="line"><span>   &quot;connector.class&quot;: &quot;com.github.jcustenborder.kafka.connect.twitter.TwitterSourceConnector&quot;,</span></span>
<span class="line"><span>   &quot;twitter.oauth.accessToken&quot;: &quot;xxxx&quot;,</span></span>
<span class="line"><span>   &quot;twitter.oauth.consumerSecret&quot;: &quot;xxxxx&quot;,</span></span>
<span class="line"><span>   &quot;twitter.oauth.consumerKey&quot;: &quot;xxxx&quot;,</span></span>
<span class="line"><span>   &quot;twitter.oauth.accessTokenSecret&quot;: &quot;xxxxx&quot;,</span></span>
<span class="line"><span>   &quot;kafka.delete.topic&quot;: &quot;twitter_deletes_json_01&quot;,</span></span>
<span class="line"><span>   &quot;value.converter&quot;: &quot;org.apache.kafka.connect.json.JsonConverter&quot;,</span></span>
<span class="line"><span>   &quot;key.converter&quot;: &quot;org.apache.kafka.connect.json.JsonConverter&quot;,</span></span>
<span class="line"><span>   &quot;value.converter.schemas.enable&quot;: false,</span></span>
<span class="line"><span>   &quot;key.converter.schemas.enable&quot;: false,</span></span>
<span class="line"><span>   &quot;kafka.status.topic&quot;: &quot;twitter_json_01&quot;,</span></span>
<span class="line"><span>   &quot;process.deletes&quot;: true,</span></span>
<span class="line"><span>   &quot;filter.keywords&quot;: &quot;rickastley,kafka,ksql,rmoff&quot;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>假设你写这些到 <code>/home/rmoff/twitter-source.json</code>，你可以现在运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ confluent load twitter_source -d /home/rmoff/twitter-source.json</span></span></code></pre></div><p>然后推文就从大家都喜欢的网络明星 [rick] 滚滚而来……</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ kafka-console-consumer --bootstrap-server localhost:9092 --from-beginning --topic twitter_json_01|jq &#39;.Text&#39;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;string&quot;: &quot;RT @rickastley: 30 years ago today I said I was Never Gonna Give You Up. I am a man of my word - Rick x https://t.co/VmbMQA6tQB&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;string&quot;: &quot;RT @mariteg10: @rickastley @Carfestevent Wonderful Rick!!\\nDo not forget Chile!!\\nWe hope you get back someday!!\\nHappy weekend for you!!\\n❤…&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在我们从 KSQL 开始 ! 马上去下载并构建它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cd /home/rmoff</span></span>
<span class="line"><span>git clone https://github.com/confluentinc/ksql.git</span></span>
<span class="line"><span>cd /home/rmoff/ksql</span></span>
<span class="line"><span>mvn clean compile install -DskipTests</span></span></code></pre></div><p>构建完成后，让我们来运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>./bin/ksql-cli local --bootstrap-server localhost:9092</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>                       ======================================</span></span>
<span class="line"><span>                       =      _  __ _____  ____  _          =</span></span>
<span class="line"><span>                       =     | |/ // ____|/ __ \\| |         =</span></span>
<span class="line"><span>                       =     | &#39; /| (___ | |  | | |         =</span></span>
<span class="line"><span>                       =     |  &lt;  \\___ \\| |  | | |         =</span></span>
<span class="line"><span>                       =     | . \\ ____) | |__| | |____     =</span></span>
<span class="line"><span>                       =     |_|\\_\\_____/ \\___\\_\\______|    =</span></span>
<span class="line"><span>                       =                                    =</span></span>
<span class="line"><span>                       =   Streaming SQL Engine for Kafka   =</span></span>
<span class="line"><span>Copyright 2017 Confluent Inc.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CLI v0.1, Server v0.1 located at http://localhost:9098</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Having trouble? Type &#39;help&#39; (case-insensitive) for a rundown of how things work!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ksql&gt;</span></span></code></pre></div><p>使用 KSQL， 我们可以让我们的数据保留在 Kafka 主题上并可以查询它。首先，我们需要去告诉 KSQL 主题上的<ruby>数据模式<rt>schema</rt></ruby>是什么，一个 twitter 消息实际上是一个非常巨大的 JSON 对象， 但是，为了简洁，我们只选出其中几行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; CREATE STREAM twitter_raw (CreatedAt BIGINT, Id BIGINT, Text VARCHAR) WITH (KAFKA_TOPIC=&#39;twitter_json_01&#39;, VALUE_FORMAT=&#39;JSON&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Message  </span></span>
<span class="line"><span>----------------</span></span>
<span class="line"><span>Stream created</span></span></code></pre></div><p>在定义的模式中，我们可以查询这些流。要让 KSQL 从该主题的开始展示数据（而不是默认的当前时间点），运行如下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; SET &#39;auto.offset.reset&#39; = &#39;earliest&#39;;  </span></span>
<span class="line"><span>Successfully changed local property &#39;auto.offset.reset&#39; from &#39;null&#39; to &#39;earliest&#39;</span></span></code></pre></div><p>现在，让我们看看这些数据，我们将使用 LIMIT 从句仅检索一行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; SELECT text FROM twitter_raw LIMIT 1;  </span></span>
<span class="line"><span>RT @rickastley: 30 years ago today I said I was Never Gonna Give You Up. I am a man of my word - Rick x https://t.co/VmbMQA6tQB</span></span>
<span class="line"><span>LIMIT reached for the partition.  </span></span>
<span class="line"><span>Query terminated</span></span>
<span class="line"><span>ksql&gt;</span></span></code></pre></div><p>现在，让我们使用刚刚定义和可用的推文内容的全部数据重新定义该流：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; DROP stream twitter_raw;</span></span>
<span class="line"><span>Message</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>Source TWITTER_RAW was dropped</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ksql&gt; CREATE STREAM twitter_raw (CreatedAt bigint,Id bigint, Text VARCHAR, SOURCE VARCHAR, Truncated VARCHAR, InReplyToStatusId VARCHAR, InReplyToUserId VARCHAR, InReplyToScreenName VARCHAR, GeoLocation VARCHAR, Place VARCHAR, Favorited VARCHAR, Retweeted VARCHAR, FavoriteCount VARCHAR, User VARCHAR, Retweet VARCHAR, Contributors VARCHAR, RetweetCount VARCHAR, RetweetedByMe VARCHAR, CurrentUserRetweetId VARCHAR, PossiblySensitive VARCHAR, Lang VARCHAR, WithheldInCountries VARCHAR, HashtagEntities VARCHAR, UserMentionEntities VARCHAR, MediaEntities VARCHAR, SymbolEntities VARCHAR, URLEntities VARCHAR) WITH (KAFKA_TOPIC=&#39;twitter_json_01&#39;,VALUE_FORMAT=&#39;JSON&#39;);</span></span>
<span class="line"><span>Message</span></span>
<span class="line"><span>----------------</span></span>
<span class="line"><span>Stream created</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ksql&gt;</span></span></code></pre></div><p>现在，我们可以操作和检查更多的最近的数据，使用一般的 SQL 查询：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; SELECT TIMESTAMPTOSTRING(CreatedAt, &#39;yyyy-MM-dd HH:mm:ss.SSS&#39;) AS CreatedAt,\\</span></span>
<span class="line"><span>EXTRACTJSONFIELD(user,&#39;$.ScreenName&#39;) as ScreenName,Text \\</span></span>
<span class="line"><span>FROM twitter_raw \\</span></span>
<span class="line"><span>WHERE LCASE(hashtagentities) LIKE &#39;%oow%&#39; OR \\</span></span>
<span class="line"><span>LCASE(hashtagentities) LIKE &#39;%ksql%&#39;;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2017-09-29 13:59:58.000 | rmoff | Looking forward to talking all about @apachekafka &amp; @confluentinc’s #KSQL at #OOW17 on Sunday 13:45 https://t.co/XbM4eIuzeG</span></span></code></pre></div><p>注意这里没有 LIMIT 从句，因此，你将在屏幕上看到  “continuous query” 的结果。不像关系型数据表中返回一个确定数量结果的查询，一个持续查询会运行在无限的流式数据上， 因此，它总是可能返回更多的记录。点击 Ctrl-C 去中断然后返回到 KSQL 提示符。在以上的查询中我们做了一些事情：</p><ul><li><strong>TIMESTAMPTOSTRING</strong> 将时间戳从 epoch 格式转换到人类可读格式。（LCTT 译注： epoch 指的是一个特定的时间 1970-01-01 00:00:00 UTC）</li><li><strong>EXTRACTJSONFIELD</strong> 来展示数据源中嵌套的用户域中的一个字段，它看起来像：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;CreatedAt&quot;: 1506570308000,</span></span>
<span class="line"><span>    &quot;Text&quot;: &quot;RT @gwenshap: This is the best thing since partitioned bread :) https://t.co/1wbv3KwRM6&quot;,</span></span>
<span class="line"><span>    [...]</span></span>
<span class="line"><span>    &quot;User&quot;: {</span></span>
<span class="line"><span>        &quot;Id&quot;: 82564066,</span></span>
<span class="line"><span>        &quot;Name&quot;: &quot;Robin Moffatt \\uD83C\\uDF7B\\uD83C\\uDFC3\\uD83E\\uDD53&quot;,</span></span>
<span class="line"><span>        &quot;ScreenName&quot;: &quot;rmoff&quot;,</span></span>
<span class="line"><span>        [...]</span></span></code></pre></div><ul><li>应用断言去展示内容，对 #（hashtag）使用模式匹配， 使用 LCASE 去强制小写字母。（LCTT 译注：hashtag 是twitter 中用来标注线索主题的标签）</li></ul>`,24)),a("p",null,[s[24]||(s[24]=n("关于支持的函数列表，请查看 ",-1)),e(t,{href:"https://github.com/confluentinc/ksql/blob/0.1.x/docs/syntax-reference.md"},{default:p(()=>[...s[23]||(s[23]=[n("KSQL 文档",-1)])]),_:1}),s[25]||(s[25]=n("。",-1))]),s[58]||(s[58]=i(`<p>我们可以创建一个从这个数据中得到的流：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; CREATE STREAM twitter AS \\</span></span>
<span class="line"><span>SELECT TIMESTAMPTOSTRING(CreatedAt, &#39;yyyy-MM-dd HH:mm:ss.SSS&#39;) AS CreatedAt,\\</span></span>
<span class="line"><span>EXTRACTJSONFIELD(user,&#39;$.Name&#39;) AS user_Name,\\</span></span>
<span class="line"><span>EXTRACTJSONFIELD(user,&#39;$.ScreenName&#39;) AS user_ScreenName,\\</span></span>
<span class="line"><span>EXTRACTJSONFIELD(user,&#39;$.Location&#39;) AS user_Location,\\</span></span>
<span class="line"><span>EXTRACTJSONFIELD(user,&#39;$.Description&#39;) AS  user_Description,\\</span></span>
<span class="line"><span>Text,hashtagentities,lang \\</span></span>
<span class="line"><span>FROM twitter_raw ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Message  </span></span>
<span class="line"><span>----------------------------  </span></span>
<span class="line"><span>Stream created and running  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>ksql&gt; DESCRIBE twitter;</span></span>
<span class="line"><span>Field            | Type  </span></span>
<span class="line"><span>------------------------------------  </span></span>
<span class="line"><span>ROWTIME          | BIGINT  </span></span>
<span class="line"><span>ROWKEY           | VARCHAR(STRING)  </span></span>
<span class="line"><span>CREATEDAT        | VARCHAR(STRING)  </span></span>
<span class="line"><span>USER_NAME        | VARCHAR(STRING)  </span></span>
<span class="line"><span>USER_SCREENNAME  | VARCHAR(STRING)  </span></span>
<span class="line"><span>USER_LOCATION    | VARCHAR(STRING)  </span></span>
<span class="line"><span>USER_DESCRIPTION | VARCHAR(STRING)  </span></span>
<span class="line"><span>TEXT             | VARCHAR(STRING)  </span></span>
<span class="line"><span>HASHTAGENTITIES  | VARCHAR(STRING)  </span></span>
<span class="line"><span>LANG             | VARCHAR(STRING)  </span></span>
<span class="line"><span>ksql&gt;</span></span></code></pre></div><p>并且查询这个得到的流：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; SELECT CREATEDAT, USER_NAME, TEXT \\</span></span>
<span class="line"><span>FROM TWITTER \\</span></span>
<span class="line"><span>WHERE TEXT LIKE &#39;%KSQL%&#39;;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2017-10-03 23:39:37.000 | Nicola Ferraro | RT @flashdba: Again, I&#39;m really taken with the possibilities opened up by @confluentinc&#39;s KSQL engine #Kafka https://t.co/aljnScgvvs</span></span></code></pre></div><p>在我们结束之前，让我们去看一下怎么去做一些聚合。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; SELECT user_screenname, COUNT(*) \\</span></span>
<span class="line"><span>FROM twitter WINDOW TUMBLING (SIZE 1 HOUR) \\</span></span>
<span class="line"><span>GROUP BY user_screenname HAVING COUNT(*) &gt; 1;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>oracleace | 2  </span></span>
<span class="line"><span>rojulman | 2</span></span>
<span class="line"><span>smokeinpublic | 2  </span></span>
<span class="line"><span>ArtFlowMe | 2  </span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>你将可能得到满屏幕的结果；这是因为 KSQL 在每次给定的时间窗口更新时实际发出聚合值。因为我们设置 KSQL 去读取在主题上的全部消息（<code>SET &#39;auto.offset.reset&#39; = &#39;earliest&#39;;</code>），它是一次性读取这些所有的消息并计算聚合更新。这里有一个微妙之处值得去深入研究。我们的入站推文流正好就是一个流。但是，现有它不能创建聚合，我们实际上是创建了一个表。一个表是在给定时间点的给定键的值的一个快照。 KSQL 聚合数据基于消息的事件时间，并且如果它更新了，通过简单的相关窗口重申去操作后面到达的数据。困惑了吗？ 我希望没有，但是，让我们看一下，如果我们可以用这个例子去说明。 我们将申明我们的聚合作为一个真实的表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; CREATE TABLE user_tweet_count AS \\</span></span>
<span class="line"><span>SELECT user_screenname, count(*) AS  tweet_count \\</span></span>
<span class="line"><span>FROM twitter WINDOW TUMBLING (SIZE 1 HOUR) \\</span></span>
<span class="line"><span>GROUP BY user_screenname ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Message  </span></span>
<span class="line"><span>---------------------------  </span></span>
<span class="line"><span>Table created and running</span></span></code></pre></div><p>看表中的列，这里除了我们要求的外，还有两个隐含列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; DESCRIBE user_tweet_count;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Field           | Type  </span></span>
<span class="line"><span>-----------------------------------  </span></span>
<span class="line"><span>ROWTIME         | BIGINT  </span></span>
<span class="line"><span>ROWKEY          | VARCHAR(STRING)  </span></span>
<span class="line"><span>USER_SCREENNAME | VARCHAR(STRING)  </span></span>
<span class="line"><span>TWEET_COUNT     | BIGINT  </span></span>
<span class="line"><span>ksql&gt;</span></span></code></pre></div><p>我们看一下这些是什么：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; SELECT TIMESTAMPTOSTRING(ROWTIME, &#39;yyyy-MM-dd HH:mm:ss.SSS&#39;) , \\</span></span>
<span class="line"><span>ROWKEY, USER_SCREENNAME, TWEET_COUNT \\</span></span>
<span class="line"><span>FROM user_tweet_count \\</span></span>
<span class="line"><span>WHERE USER_SCREENNAME= &#39;rmoff&#39;;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2017-09-29 11:00:00.000 | rmoff : Window{start=1506708000000 end=-} | rmoff | 2  </span></span>
<span class="line"><span>2017-09-29 12:00:00.000 | rmoff : Window{start=1506711600000 end=-} | rmoff | 4  </span></span>
<span class="line"><span>2017-09-28 22:00:00.000 | rmoff : Window{start=1506661200000 end=-} | rmoff | 2  </span></span>
<span class="line"><span>2017-09-29 09:00:00.000 | rmoff : Window{start=1506700800000 end=-} | rmoff | 4  </span></span>
<span class="line"><span>2017-09-29 15:00:00.000 | rmoff : Window{start=1506722400000 end=-} | rmoff | 2  </span></span>
<span class="line"><span>2017-09-29 13:00:00.000 | rmoff : Window{start=1506715200000 end=-} | rmoff | 6</span></span></code></pre></div><p><code>ROWTIME</code> 是窗口开始时间，  <code>ROWKEY</code> 是 <code>GROUP BY</code>（<code>USER_SCREENNAME</code>）加上窗口的组合。因此，我们可以通过创建另外一个衍生的表来整理一下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; CREATE TABLE USER_TWEET_COUNT_DISPLAY AS \\</span></span>
<span class="line"><span>SELECT TIMESTAMPTOSTRING(ROWTIME, &#39;yyyy-MM-dd HH:mm:ss.SSS&#39;) AS WINDOW_START ,\\</span></span>
<span class="line"><span>USER_SCREENNAME, TWEET_COUNT \\</span></span>
<span class="line"><span>FROM user_tweet_count;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Message  </span></span>
<span class="line"><span>---------------------------  </span></span>
<span class="line"><span>Table created and running</span></span></code></pre></div><p>现在它更易于查询和查看我们感兴趣的数据：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ksql&gt; SELECT WINDOW_START ,  USER_SCREENNAME, TWEET_COUNT \\</span></span>
<span class="line"><span>FROM USER_TWEET_COUNT_DISPLAY WHERE TWEET_COUNT&gt; 20;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2017-09-29 12:00:00.000 | VikasAatOracle | 22  </span></span>
<span class="line"><span>2017-09-28 14:00:00.000 | Throne_ie | 50  </span></span>
<span class="line"><span>2017-09-28 14:00:00.000 | pikipiki_net | 22  </span></span>
<span class="line"><span>2017-09-29 09:00:00.000 | johanlouwers | 22  </span></span>
<span class="line"><span>2017-09-28 09:00:00.000 | yvrk1973 | 24  </span></span>
<span class="line"><span>2017-09-28 13:00:00.000 | cmosoares | 22  </span></span>
<span class="line"><span>2017-09-29 11:00:00.000 | ypoirier | 24  </span></span>
<span class="line"><span>2017-09-28 14:00:00.000 | pikisec | 22  </span></span>
<span class="line"><span>2017-09-29 07:00:00.000 | Throne_ie | 22  </span></span>
<span class="line"><span>2017-09-29 09:00:00.000 | ChrisVoyance | 24  </span></span>
<span class="line"><span>2017-09-28 11:00:00.000 | ChrisVoyance | 28</span></span></code></pre></div><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>所以我们有了它！ 我们可以从 Kafka 中取得数据， 并且很容易使用 KSQL 去探索它。 而不仅是去浏览和转换数据，我们可以很容易地使用 KSQL 从流和表中建立流处理。</p><p><img src="https://www.confluent.io/wp-content/uploads/user_tweet-1024x569.png" alt=""></p><p>如果你对 KSQL 能够做什么感兴趣，去查看：</p>`,20)),a("ul",null,[a("li",null,[e(t,{href:"https://www.confluent.io/blog/ksql-open-source-streaming-sql-for-apache-kafka/"},{default:p(()=>[...s[26]||(s[26]=[n("KSQL 公告",-1)])]),_:1})]),a("li",null,[e(t,{href:"https://www.confluent.io/online-talk/ksql-streaming-sql-for-apache-kafka/"},{default:p(()=>[...s[27]||(s[27]=[n("我们最近的 KSQL 在线研讨会",-1)])]),_:1}),s[29]||(s[29]=n(" 和 ",-1)),e(t,{href:"https://www.confluent.io/kafka-summit-sf17/Databases-and-Stream-Processing-1"},{default:p(()=>[...s[28]||(s[28]=[n("Kafka 峰会讲演",-1)])]),_:1})]),a("li",null,[e(t,{href:"https://www.youtube.com/watch?v=A45uRzJiv7I"},{default:p(()=>[...s[30]||(s[30]=[n("clickstream 演示",-1)])]),_:1}),s[32]||(s[32]=n("，它是 ",-1)),e(t,{href:"https://github.com/confluentinc/ksql"},{default:p(()=>[...s[31]||(s[31]=[n("KSQL 的 GitHub 仓库",-1)])]),_:1}),s[33]||(s[33]=n(" 的一部分",-1))]),a("li",null,[e(t,{href:"https://speakerdeck.com/rmoff/look-ma-no-code-building-streaming-data-pipelines-with-apache-kafka"},{default:p(()=>[...s[34]||(s[34]=[n("我最近做的演讲",-1)])]),_:1}),s[35]||(s[35]=n(" 展示了 KSQL 如何去支持基于流的 ETL 平台",-1))])]),a("p",null,[s[37]||(s[37]=n("记住，KSQL 现在正处于开发者预览阶段。 欢迎在 KSQL 的 GitHub 仓库上提出任何问题， 或者去我们的 ",-1)),e(t,{href:"https://slackpass.io/confluentcommunity"},{default:p(()=>[...s[36]||(s[36]=[n("community Slack group",-1)])]),_:1}),s[38]||(s[38]=n(" 的 #KSQL 频道。",-1))]),s[59]||(s[59]=a("hr",null,null,-1)),a("p",null,[s[40]||(s[40]=n("via: ",-1)),e(t,{href:"https://www.confluent.io/blog/using-ksql-to-analyse-query-and-transform-data-in-kafka"},{default:p(()=>[...s[39]||(s[39]=[n("https://www.confluent.io/blog/using-ksql-to-analyse-query-and-transform-data-in-kafka",-1)])]),_:1})]),a("p",null,[s[44]||(s[44]=n("作者：",-1)),e(t,{href:"https://www.confluent.io/blog/author/robin/"},{default:p(()=>[...s[41]||(s[41]=[n("Robin Moffatt",-1)])]),_:1}),s[45]||(s[45]=n(" 译者：",-1)),e(t,{href:"https://github.com/qhwdw"},{default:p(()=>[...s[42]||(s[42]=[n("qhwdw",-1)])]),_:1}),s[46]||(s[46]=n(" 校对：",-1)),e(t,{href:"https://github.com/wxy"},{default:p(()=>[...s[43]||(s[43]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[49]||(s[49]=n("本文由 ",-1)),e(t,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[47]||(s[47]=[n("LCTT",-1)])]),_:1}),s[50]||(s[50]=n(" 原创编译，",-1)),e(t,{href:"https://linux.cn/"},{default:p(()=>[...s[48]||(s[48]=[n("Linux中国",-1)])]),_:1}),s[51]||(s[51]=n(" 荣誉推出",-1))])])}const A=l(u,[["render",c]]);export{R as __pageData,A as default};
