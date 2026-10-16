import{_ as l,a0 as o,w as r,s as d,I as a,x as n,a1 as t,A as p,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"用 NodeJS 进行 Twitter 情感分析 | LCTT x X-CMD","titleTemplate":false,"description":"用 NodeJS 进行 Twitter 情感分析 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 NodeJS 进行 Twitter 情感分析 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 NodeJS 进行 Twitter 情感分析 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180618 Twitter Sentiment Analysis using NodeJS","title":"用 NodeJS 进行 Twitter 情感分析","tag":"201809","desc":""},"relativePath":"201809/20180618 Twitter Sentiment Analysis using NodeJS.md","filePath":"[post].md"}'),c={name:"201809/20180618 Twitter Sentiment Analysis using NodeJS.md"};function u(g,s,w,k,f,h){const e=o("Link");return r(),d("div",null,[s[38]||(s[38]=a("h1",{id:"用-nodejs-进行-twitter-情感分析",tabindex:"-1"},[n("用 NodeJS 进行 Twitter 情感分析 "),a("a",{class:"header-anchor",href:"#用-nodejs-进行-twitter-情感分析","aria-label":"Permalink to “用 NodeJS 进行 Twitter 情感分析”"},"​")],-1)),s[39]||(s[39]=a("p",null,[a("img",{src:"https://i.imgur.com/7hIfpzt.png",alt:""})],-1)),s[40]||(s[40]=a("p",null,"如果你想知道大家对某件事情的看法，Twitter 是最好的地方了。Twitter 是观点持续不断的涌现出来的地方，每秒钟大概有 6000 条新 Twitter 发送出来。因特网上的发展很快，如果你想与时俱进或者跟上潮流，Twitter 就是你要去的地方。",-1)),a("p",null,[s[1]||(s[1]=n("现在，我们生活在一个数据为王的时代，很多公司都善于运用 Twitter 上的数据。根据测量到的他们新产品的人气，尝试预测之后的市场趋势，分析 Twitter 上的数据有很多用处。通过数据，商人把产品卖给合适的用户，收集关于他们品牌和改进的反馈，或者获取他们产品或促销活动失败的原因。不仅仅是商人，很多政治和经济上的决定是在观察人们意见的基础上所作的。今天，我会试着让你感受下关于 Twitter 的简单 ",-1)),t(e,{href:"https://en.wikipedia.org/wiki/Sentiment_analysis"},{default:p(()=>[...s[0]||(s[0]=[n("情感分析",-1)])]),_:1}),s[2]||(s[2]=n("，判断这个 Twitter 是正能量、负能量还是中性的。这不会像专业人士所用的那么复杂，但至少，它会让你知道挖掘观念的想法。",-1))]),s[41]||(s[41]=i('<p>我们将使用 NodeJs，因为 JavaScript 太常用了，而且它还是最容易入门的语言。</p><h3 id="前置条件" tabindex="-1">前置条件: <a class="header-anchor" href="#前置条件" aria-label="Permalink to “前置条件:”">​</a></h3><ul><li>安装了 NodeJs 和 NPM</li><li>有 NodeJs 和 NPM 包的经验</li><li>熟悉命令行。</li></ul><p>好了，就是这样。开始吧。</p><h3 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to “开始”">​</a></h3><p>为了你的项目新建一个目录，进入这个目录下面。打开终端（或是命令行）。进入刚创建的目录下面，运行命令 <code>npm init -y</code>。这会在这个目录下创建一个 <code>package.json</code> 文件。现在我们可以安装需要的 npm 包了。只需要创建一个新文件，命名为 <code>index.js</code> 然后我们就完成了初始的编码。</p><h3 id="获取推文" tabindex="-1">获取推文 <a class="header-anchor" href="#获取推文" aria-label="Permalink to “获取推文”">​</a></h3>',7)),a("p",null,[s[5]||(s[5]=n("好了，我们想要分析 Twitter ，为了实现这个目的，我们需要以编程的方式访问 Twitter。为此，我们要用到 ",-1)),t(e,{href:"https://github.com/ttezel/twit"},{default:p(()=>[...s[3]||(s[3]=[n("twit",-1)])]),_:1}),s[6]||(s[6]=n(" 包。因此，先用 ",-1)),s[7]||(s[7]=a("code",null,"npm i wit",-1)),s[8]||(s[8]=n(" 命令安装它。我们还需要注册一个 App，以通过我们的账户来访问 Twitter 的 API。点击这个 ",-1)),t(e,{href:"https://boostlog.io/@anshulc95/apps.twitter.com"},{default:p(()=>[...s[4]||(s[4]=[n("链接",-1)])]),_:1}),s[9]||(s[9]=n("，填写所有项目，从 “Keys and Access Token” 标签页中复制 “Consumer Key”、“Consumer Secret”、“Access token” 和 “Access Token Secret” 这几项到一个 ",-1)),s[10]||(s[10]=a("code",null,".env",-1)),s[11]||(s[11]=n(" 文件中，就像这样：",-1))]),s[42]||(s[42]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># .env</span></span>
<span class="line"><span># replace the stars with values you copied</span></span>
<span class="line"><span>CONSUMER_KEY=************</span></span>
<span class="line"><span>CONSUMER_SECRET=************</span></span>
<span class="line"><span>ACCESS_TOKEN=************</span></span>
<span class="line"><span>ACCESS_TOKEN_SECRET=************</span></span></code></pre></div><p>现在开始。</p><p>用你最喜欢的代码编辑器打开 <code>index.js</code>。我们需要用 <code>npm i dotenv</code> 命令安装 <code>dotenv</code> 包来读取 <code>.env</code> 文件。好了，创建一个 API 实例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const Twit = require(&#39;twit&#39;);</span></span>
<span class="line"><span>const dotenv = require(&#39;dotenv&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotenv.config();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { CONSUMER_KEY</span></span>
<span class="line"><span>      , CONSUMER_SECRET</span></span>
<span class="line"><span>      , ACCESS_TOKEN</span></span>
<span class="line"><span>      , ACCESS_TOKEN_SECRET</span></span>
<span class="line"><span>      } = process.env;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const config_twitter = {</span></span>
<span class="line"><span>    consumer_key: CONSUMER_KEY,</span></span>
<span class="line"><span>    consumer_secret: CONSUMER_SECRET,</span></span>
<span class="line"><span>    access_token: ACCESS_TOKEN,</span></span>
<span class="line"><span>    access_token_secret: ACCESS_TOKEN_SECRET,</span></span>
<span class="line"><span>    timeout_ms: 60*1000</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let api = new Twit(config_twitter);</span></span></code></pre></div><p>这里已经用所需的配置文件建立了到 Twitter 上的连接。但我们什么事情都没做。先定义个获取推文的函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>async function get_tweets(q, count) {</span></span>
<span class="line"><span>    let tweets = await api.get(&#39;search/tweets&#39;, {q, count, tweet_mode: &#39;extended&#39;});</span></span>
<span class="line"><span>    return tweets.data.statuses.map(tweet =&gt; tweet.full_text);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这是个 async 函数，因为 <code>api.get</code> 函数返回一个 promise 对象，而不是 <code>then</code> 链，我想通过这种简单的方式获取推文。它接收两个参数 <code>q</code> 和 <code>count</code>，<code>q</code> 是查询或者我们想要搜索的关键字，<code>count</code> 是让这个 <code>api</code> 返回的推文数量。</p><p>目前为止我们拥有了一个从 Twitter 上获取完整文本的简单方法。不过这里有个问题，现在我们要获取的文本中可能包含某些连接或者由于转推而被截断了。所以我们会编写另一个函数，拆解并返回推文的文本，即便是转发的推文，并且其中有链接的话就删除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function get_text(tweet) {</span></span>
<span class="line"><span>    let txt = tweet.retweeted_status ? tweet.retweeted_status.full_text : tweet.full_text;</span></span>
<span class="line"><span>    return txt.split(/ |\\n/).filter(v =&gt; !v.startsWith(&#39;http&#39;)).join(&#39; &#39;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function get_tweets(q, count) {</span></span>
<span class="line"><span>    let tweets = await api.get(&#39;search/tweets&#39;, {q, count, &#39;tweet_mode&#39;: &#39;extended&#39;});</span></span>
<span class="line"><span>    return tweets.data.statuses.map(get_text);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9)),a("p",null,[s[13]||(s[13]=n("现在我们拿到了文本。下一步是从文本中获取情感。为此我们会使用 ",-1)),s[14]||(s[14]=a("code",null,"npm",-1)),s[15]||(s[15]=n(" 中的另一个包 —— ",-1)),t(e,{href:"https://www.npmjs.com/package/sentiment"},{default:p(()=>[...s[12]||(s[12]=[a("code",null,"sentiment",-1)])]),_:1}),s[16]||(s[16]=n("。让我们像安装其他包那样安装 ",-1)),s[17]||(s[17]=a("code",null,"sentiment",-1)),s[18]||(s[18]=n("，添加到脚本中。",-1))]),s[43]||(s[43]=i('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const sentiment = require(&#39;sentiment&#39;)</span></span></code></pre></div>',1)),a("p",null,[s[20]||(s[20]=a("code",null,"sentiment",-1)),s[21]||(s[21]=n(" 用起来很简单。我们只用把 ",-1)),s[22]||(s[22]=a("code",null,"sentiment",-1)),s[23]||(s[23]=n(" 函数用在我们想要分析的文本上，它就能返回文本的相对分数。如果分数小于 0，它表达的就是消极情感，大于 0 的分数是积极情感，而 0，如你所料，表示中性的情感。基于此，我们将会把推文打印成不同的颜色 —— 绿色表示积极，红色表示消极，蓝色表示中性。为此，我们会用到 ",-1)),t(e,{href:"https://www.npmjs.com/package/colors"},{default:p(()=>[...s[19]||(s[19]=[a("code",null,"colors",-1)])]),_:1}),s[24]||(s[24]=n(" 包。先安装这个包，然后添加到脚本中。",-1))]),s[44]||(s[44]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const colors = require(&#39;colors/safe&#39;);</span></span></code></pre></div><p>好了，现在把所有东西都整合到 <code>main</code> 函数中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>async function main() {</span></span>
<span class="line"><span>    let keyword = \\* define the keyword that you want to search for *\\;</span></span>
<span class="line"><span>    let count = \\* define the count of tweets you want *\\;</span></span>
<span class="line"><span>    let tweets = await get_tweets(keyword, count);</span></span>
<span class="line"><span>    for (tweet of tweets) {</span></span>
<span class="line"><span>        let score = sentiment(tweet).comparative;</span></span>
<span class="line"><span>        tweet = \`\${tweet}\\n\`;</span></span>
<span class="line"><span>        if (score &gt; 0) {</span></span>
<span class="line"><span>            tweet = colors.green(tweet);</span></span>
<span class="line"><span>        } else if (score &lt; 0) {</span></span>
<span class="line"><span>            tweet = colors.red(tweet);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            tweet = colors.blue(tweet);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        console.log(tweet);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后，执行 <code>main</code> 函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>main();</span></span></code></pre></div><p>就是这样，一个简单的分析推文中的基本情感的脚本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\\\ full script</span></span>
<span class="line"><span>const Twit = require(&#39;twit&#39;);</span></span>
<span class="line"><span>const dotenv = require(&#39;dotenv&#39;);</span></span>
<span class="line"><span>const sentiment = require(&#39;sentiment&#39;);</span></span>
<span class="line"><span>const colors = require(&#39;colors/safe&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotenv.config();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { CONSUMER_KEY</span></span>
<span class="line"><span>      , CONSUMER_SECRET</span></span>
<span class="line"><span>      , ACCESS_TOKEN</span></span>
<span class="line"><span>      , ACCESS_TOKEN_SECRET</span></span>
<span class="line"><span>      } = process.env;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const config_twitter = {</span></span>
<span class="line"><span>    consumer_key: CONSUMER_KEY,</span></span>
<span class="line"><span>    consumer_secret: CONSUMER_SECRET,</span></span>
<span class="line"><span>    access_token: ACCESS_TOKEN,</span></span>
<span class="line"><span>    access_token_secret: ACCESS_TOKEN_SECRET,</span></span>
<span class="line"><span>    timeout_ms: 60*1000</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let api = new Twit(config_twitter);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function get_text(tweet) {</span></span>
<span class="line"><span>    let txt = tweet.retweeted_status ? tweet.retweeted_status.full_text : tweet.full_text;</span></span>
<span class="line"><span>    return txt.split(/ |\\n/).filter(v =&gt; !v.startsWith(&#39;http&#39;)).join(&#39; &#39;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function get_tweets(q, count) {</span></span>
<span class="line"><span>    let tweets = await api.get(&#39;search/tweets&#39;, {q, count, &#39;tweet_mode&#39;: &#39;extended&#39;});</span></span>
<span class="line"><span>    return tweets.data.statuses.map(get_text);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function main() {</span></span>
<span class="line"><span>    let keyword = &#39;avengers&#39;;</span></span>
<span class="line"><span>    let count = 100;</span></span>
<span class="line"><span>    let tweets = await get_tweets(keyword, count);</span></span>
<span class="line"><span>    for (tweet of tweets) {</span></span>
<span class="line"><span>        let score = sentiment(tweet).comparative;</span></span>
<span class="line"><span>        tweet = \`\${tweet}\\n\`;</span></span>
<span class="line"><span>        if (score &gt; 0) {</span></span>
<span class="line"><span>            tweet = colors.green(tweet);</span></span>
<span class="line"><span>        } else if (score &lt; 0) {</span></span>
<span class="line"><span>            tweet = colors.red(tweet);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            tweet = colors.blue(tweet)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        console.log(tweet)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre></div><hr>`,8)),a("p",null,[s[26]||(s[26]=n("via: ",-1)),t(e,{href:"https://boostlog.io/@anshulc95/twitter-sentiment-analysis-using-nodejs-5ad1331247018500491f3b6a"},{default:p(()=>[...s[25]||(s[25]=[n("https://boostlog.io/@anshulc95/twitter-sentiment-analysis-using-nodejs-5ad1331247018500491f3b6a",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("作者：",-1)),t(e,{href:"https://boostlog.io/@anshulc95"},{default:p(()=>[...s[27]||(s[27]=[n("Anshul Chauhan",-1)])]),_:1}),s[31]||(s[31]=n(" 译者：",-1)),t(e,{href:"https://github.com/BriFuture"},{default:p(()=>[...s[28]||(s[28]=[n("BriFuture",-1)])]),_:1}),s[32]||(s[32]=n(" 校对：",-1)),t(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[29]||(s[29]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[35]||(s[35]=n("本文由 ",-1)),t(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[33]||(s[33]=[n("LCTT",-1)])]),_:1}),s[36]||(s[36]=n(" 原创编译，",-1)),t(e,{href:"https://linux.cn/"},{default:p(()=>[...s[34]||(s[34]=[n("Linux中国",-1)])]),_:1}),s[37]||(s[37]=n(" 荣誉推出",-1))])])}const C=l(c,[["render",u]]);export{b as __pageData,C as default};
