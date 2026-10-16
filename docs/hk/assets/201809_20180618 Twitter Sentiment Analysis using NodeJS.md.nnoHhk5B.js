import{_ as l,a0 as o,w as r,s as d,I as a,x as n,a1 as t,A as p,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"用 NodeJS 進行 Twitter 情感分析 | LCTT x X-CMD","titleTemplate":false,"description":"用 NodeJS 進行 Twitter 情感分析 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 NodeJS 進行 Twitter 情感分析 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 NodeJS 進行 Twitter 情感分析 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180618 Twitter Sentiment Analysis using NodeJS","title":"用 NodeJS 進行 Twitter 情感分析","tag":"201809","desc":""},"relativePath":"201809/20180618 Twitter Sentiment Analysis using NodeJS.md","filePath":"[post].md"}'),c={name:"201809/20180618 Twitter Sentiment Analysis using NodeJS.md"};function u(g,s,w,k,f,h){const e=o("Link");return r(),d("div",null,[s[38]||(s[38]=a("h1",{id:"用-nodejs-進行-twitter-情感分析",tabindex:"-1"},[n("用 NodeJS 進行 Twitter 情感分析 "),a("a",{class:"header-anchor",href:"#用-nodejs-進行-twitter-情感分析","aria-label":"Permalink to “用 NodeJS 進行 Twitter 情感分析”"},"​")],-1)),s[39]||(s[39]=a("p",null,[a("img",{src:"https://i.imgur.com/7hIfpzt.png",alt:""})],-1)),s[40]||(s[40]=a("p",null,"如果你想知道大家對某件事情的看法，Twitter 是最好的地方了。Twitter 是觀點持續不斷的湧現出來的地方，每秒鐘大概有 6000 條新 Twitter 發送出來。因特網上的發展很快，如果你想與時俱進或者跟上潮流，Twitter 就是你要去的地方。",-1)),a("p",null,[s[1]||(s[1]=n("現在，我們生活在一個數據為王的時代，很多公司都善於運用 Twitter 上的數據。根據測量到的他們新產品的人氣，嘗試預測之後的市場趨勢，分析 Twitter 上的數據有很多用處。通過數據，商人把產品賣給合適的用户，收集關於他們品牌和改進的反饋，或者獲取他們產品或促銷活動失敗的原因。不僅僅是商人，很多政治和經濟上的決定是在觀察人們意見的基礎上所作的。今天，我會試着讓你感受下關於 Twitter 的簡單 ",-1)),t(e,{href:"https://en.wikipedia.org/wiki/Sentiment_analysis"},{default:p(()=>[...s[0]||(s[0]=[n("情感分析",-1)])]),_:1}),s[2]||(s[2]=n("，判斷這個 Twitter 是正能量、負能量還是中性的。這不會像專業人士所用的那麼複雜，但至少，它會讓你知道挖掘觀念的想法。",-1))]),s[41]||(s[41]=i('<p>我們將使用 NodeJs，因為 JavaScript 太常用了，而且它還是最容易入門的語言。</p><h3 id="前置條件" tabindex="-1">前置條件: <a class="header-anchor" href="#前置條件" aria-label="Permalink to “前置條件:”">​</a></h3><ul><li>安裝了 NodeJs 和 NPM</li><li>有 NodeJs 和 NPM 包的經驗</li><li>熟悉命令列。</li></ul><p>好了，就是這樣。開始吧。</p><h3 id="開始" tabindex="-1">開始 <a class="header-anchor" href="#開始" aria-label="Permalink to “開始”">​</a></h3><p>為了你的項目新建一個目錄，進入這個目錄下面。打開終端（或是命令列）。進入剛創建的目錄下面，運行命令 <code>npm init -y</code>。這會在這個目錄下創建一個 <code>package.json</code> 文件。現在我們可以安裝需要的 npm 包了。只需要創建一個新文件，命名為 <code>index.js</code> 然後我們就完成了初始的編碼。</p><h3 id="獲取推文" tabindex="-1">獲取推文 <a class="header-anchor" href="#獲取推文" aria-label="Permalink to “獲取推文”">​</a></h3>',7)),a("p",null,[s[5]||(s[5]=n("好了，我們想要分析 Twitter ，為了實現這個目的，我們需要以編程的方式訪問 Twitter。為此，我們要用到 ",-1)),t(e,{href:"https://github.com/ttezel/twit"},{default:p(()=>[...s[3]||(s[3]=[n("twit",-1)])]),_:1}),s[6]||(s[6]=n(" 包。因此，先用 ",-1)),s[7]||(s[7]=a("code",null,"npm i wit",-1)),s[8]||(s[8]=n(" 命令安裝它。我們還需要註冊一個 App，以通過我們的賬户來訪問 Twitter 的 API。點擊這個 ",-1)),t(e,{href:"https://boostlog.io/@anshulc95/apps.twitter.com"},{default:p(()=>[...s[4]||(s[4]=[n("鏈接",-1)])]),_:1}),s[9]||(s[9]=n("，填寫所有項目，從 “Keys and Access Token” 標籤頁中複製 “Consumer Key”、“Consumer Secret”、“Access token” 和 “Access Token Secret” 這幾項到一個 ",-1)),s[10]||(s[10]=a("code",null,".env",-1)),s[11]||(s[11]=n(" 文件中，就像這樣：",-1))]),s[42]||(s[42]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># .env</span></span>
<span class="line"><span># replace the stars with values you copied</span></span>
<span class="line"><span>CONSUMER_KEY=************</span></span>
<span class="line"><span>CONSUMER_SECRET=************</span></span>
<span class="line"><span>ACCESS_TOKEN=************</span></span>
<span class="line"><span>ACCESS_TOKEN_SECRET=************</span></span></code></pre></div><p>現在開始。</p><p>用你最喜歡的代碼編輯器打開 <code>index.js</code>。我們需要用 <code>npm i dotenv</code> 命令安裝 <code>dotenv</code> 包來讀取 <code>.env</code> 文件。好了，創建一個 API 實例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const Twit = require(&#39;twit&#39;);</span></span>
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
<span class="line"><span>let api = new Twit(config_twitter);</span></span></code></pre></div><p>這裏已經用所需的配置文件建立了到 Twitter 上的連接。但我們什麼事情都沒做。先定義個獲取推文的函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>async function get_tweets(q, count) {</span></span>
<span class="line"><span>    let tweets = await api.get(&#39;search/tweets&#39;, {q, count, tweet_mode: &#39;extended&#39;});</span></span>
<span class="line"><span>    return tweets.data.statuses.map(tweet =&gt; tweet.full_text);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這是個 async 函數，因為 <code>api.get</code> 函數返回一個 promise 對象，而不是 <code>then</code> 鏈，我想通過這種簡單的方式獲取推文。它接收兩個參數 <code>q</code> 和 <code>count</code>，<code>q</code> 是查詢或者我們想要搜索的關鍵字，<code>count</code> 是讓這個 <code>api</code> 返回的推文數量。</p><p>目前為止我們擁有了一個從 Twitter 上獲取完整文本的簡單方法。不過這裏有個問題，現在我們要獲取的文本中可能包含某些連接或者由於轉推而被截斷了。所以我們會編寫另一個函數，拆解並返回推文的文本，即便是轉發的推文，並且其中有鏈接的話就刪除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function get_text(tweet) {</span></span>
<span class="line"><span>    let txt = tweet.retweeted_status ? tweet.retweeted_status.full_text : tweet.full_text;</span></span>
<span class="line"><span>    return txt.split(/ |\\n/).filter(v =&gt; !v.startsWith(&#39;http&#39;)).join(&#39; &#39;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function get_tweets(q, count) {</span></span>
<span class="line"><span>    let tweets = await api.get(&#39;search/tweets&#39;, {q, count, &#39;tweet_mode&#39;: &#39;extended&#39;});</span></span>
<span class="line"><span>    return tweets.data.statuses.map(get_text);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9)),a("p",null,[s[13]||(s[13]=n("現在我們拿到了文本。下一步是從文本中獲取情感。為此我們會使用 ",-1)),s[14]||(s[14]=a("code",null,"npm",-1)),s[15]||(s[15]=n(" 中的另一個包 —— ",-1)),t(e,{href:"https://www.npmjs.com/package/sentiment"},{default:p(()=>[...s[12]||(s[12]=[a("code",null,"sentiment",-1)])]),_:1}),s[16]||(s[16]=n("。讓我們像安裝其他包那樣安裝 ",-1)),s[17]||(s[17]=a("code",null,"sentiment",-1)),s[18]||(s[18]=n("，添加到腳本中。",-1))]),s[43]||(s[43]=i('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const sentiment = require(&#39;sentiment&#39;)</span></span></code></pre></div>',1)),a("p",null,[s[20]||(s[20]=a("code",null,"sentiment",-1)),s[21]||(s[21]=n(" 用起來很簡單。我們只用把 ",-1)),s[22]||(s[22]=a("code",null,"sentiment",-1)),s[23]||(s[23]=n(" 函數用在我們想要分析的文本上，它就能返回文本的相對分數。如果分數小於 0，它表達的就是消極情感，大於 0 的分數是積極情感，而 0，如你所料，表示中性的情感。基於此，我們將會把推文打印成不同的顏色 —— 綠色表示積極，紅色表示消極，藍色表示中性。為此，我們會用到 ",-1)),t(e,{href:"https://www.npmjs.com/package/colors"},{default:p(()=>[...s[19]||(s[19]=[a("code",null,"colors",-1)])]),_:1}),s[24]||(s[24]=n(" 包。先安裝這個包，然後添加到腳本中。",-1))]),s[44]||(s[44]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const colors = require(&#39;colors/safe&#39;);</span></span></code></pre></div><p>好了，現在把所有東西都整合到 <code>main</code> 函數中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>async function main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>最後，執行 <code>main</code> 函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>main();</span></span></code></pre></div><p>就是這樣，一個簡單的分析推文中的基本情感的腳本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\\\ full script</span></span>
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
<span class="line"><span>main();</span></span></code></pre></div><hr>`,8)),a("p",null,[s[26]||(s[26]=n("via: ",-1)),t(e,{href:"https://boostlog.io/@anshulc95/twitter-sentiment-analysis-using-nodejs-5ad1331247018500491f3b6a"},{default:p(()=>[...s[25]||(s[25]=[n("https://boostlog.io/@anshulc95/twitter-sentiment-analysis-using-nodejs-5ad1331247018500491f3b6a",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("作者：",-1)),t(e,{href:"https://boostlog.io/@anshulc95"},{default:p(()=>[...s[27]||(s[27]=[n("Anshul Chauhan",-1)])]),_:1}),s[31]||(s[31]=n(" 譯者：",-1)),t(e,{href:"https://github.com/BriFuture"},{default:p(()=>[...s[28]||(s[28]=[n("BriFuture",-1)])]),_:1}),s[32]||(s[32]=n(" 校對：",-1)),t(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[29]||(s[29]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[35]||(s[35]=n("本文由 ",-1)),t(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[33]||(s[33]=[n("LCTT",-1)])]),_:1}),s[36]||(s[36]=n(" 原創編譯，",-1)),t(e,{href:"https://linux.cn/"},{default:p(()=>[...s[34]||(s[34]=[n("Linux中國",-1)])]),_:1}),s[37]||(s[37]=n(" 榮譽推出",-1))])])}const C=l(c,[["render",u]]);export{b as __pageData,C as default};
