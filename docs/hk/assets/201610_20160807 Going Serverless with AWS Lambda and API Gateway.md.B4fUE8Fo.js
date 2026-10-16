import{_ as i,a0 as o,w as r,s as d,ao as t,I as l,x as a,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"通過 AWS 的 Lambda 和 API Gateway 走向 Serverless | LCTT x X-CMD","titleTemplate":false,"description":"通過 AWS 的 Lambda 和 API Gateway 走向 Serverless | LCTT (201610) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通過 AWS 的 Lambda 和 API Gateway 走向 Serverless | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通過 AWS 的 Lambda 和 API Gateway 走向 Serverless | LCTT (201610) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201610/20160807 Going Serverless with AWS Lambda and API Gateway","title":"通過 AWS 的 Lambda 和 API Gateway 走向 Serverless","tag":"201610","desc":""},"relativePath":"201610/20160807 Going Serverless with AWS Lambda and API Gateway.md","filePath":"[post].md"}'),u={name:"201610/20160807 Going Serverless with AWS Lambda and API Gateway.md"};function c(g,s,h,b,m,k){const n=o("Link");return r(),d("div",null,[s[19]||(s[19]=t('<h1 id="通過-aws-的-lambda-和-api-gateway-走向-serverless" tabindex="-1">通過 AWS 的 Lambda 和 API Gateway 走向 Serverless <a class="header-anchor" href="#通過-aws-的-lambda-和-api-gateway-走向-serverless" aria-label="Permalink to “通過 AWS 的 Lambda 和 API Gateway 走向 Serverless”">​</a></h1><p>近來，在計算領域出現了很多關於 serverless 的討論。serverless 是一個概念，它允許你提供代碼或可執行程序給某個服務，由服務來為你執行它們，而你無需自己管理服務器。這就是所謂的執行即服務（execution-as-a-service），它帶來了很多機會，同時也遇到了它獨有的挑戰。</p><h3 id="簡短回憶下計算領域的發展" tabindex="-1">簡短回憶下計算領域的發展 <a class="header-anchor" href="#簡短回憶下計算領域的發展" aria-label="Permalink to “簡短回憶下計算領域的發展”">​</a></h3><p>早期，出現了……好吧，這有點複雜。很早的時候，出現了機械計算機，後來又有了埃尼阿克 ENIAC（Electronic Numerical Integrator And Computer，很早的電子計算機)，但是都沒有規模生產。直到大型機出現後，計算領域才快速發展。</p><ul><li>上世紀 50 年代 - 大型機</li><li>上世紀 60 年代 - 微型機</li><li>1994 - 機架服務器</li><li>2001 - 刀片服務器</li><li>本世紀初 - 虛擬服務器</li><li>2006 - 服務器雲化</li><li>2013 - 容器化</li><li>2014 - serverless（計算資源服務化）</li></ul><blockquote><p>這些日期是大概的發佈或者流行日期，無需和我爭論時間的準確性。</p></blockquote><p>計算領域的演進趨勢是執行的功能單元越來越小。每一次演進通常都意味着運維負擔的減小和運維靈活性的增加。</p><h3 id="發展前景" tabindex="-1">發展前景 <a class="header-anchor" href="#發展前景" aria-label="Permalink to “發展前景”">​</a></h3><p>喔，Serverless！但是，serverless 能給我們帶來什麼好處? 我們將面臨什麼挑戰呢?</p><p><strong>未執行代碼時無需付費。</strong>我認為，這是個巨大的賣點。當無人訪問你的站點或用你的 API 時，你無需付錢。沒有持續支出的基礎設施成本，僅僅支付你需要的部分。換句話説，這履行了雲計算的承諾：“僅僅支付你真正用的資源”。</p><p><strong>無需維護服務器，也無需考慮服務器安全。</strong>服務器的維護和安全將由你的服務提供商來處理（當然，你也可以架設自己的 serverless 主機，只是這似乎是在向錯誤的方向前進）。由於你的執行時間也是受限的，安全補丁也被簡化了，因為完全不需要重啓。這些都應該由你的服務提供商無縫地處理。</p><p><strong>無限的可擴展性。</strong>這是又一個大的好處。假設你又開發了一個 Pokemon Go, 與其頻繁地把站點下線維護升級，不如用 serverless 來不斷地擴展。當然，這也是個雙刃劍，大量的賬單也會隨之而來。如果你的業務的利潤強依賴於站點上線率的話，serverless 確實能幫上忙。</p><p><strong>強制的微服務架構。</strong>這也有兩面性，一方面，微服務似乎是一種好的構建靈活可擴展的、容錯的架構的方式。另一方面，如果你的業務沒有按照這種方式設計，你將很難在已有的架構中引入 serverless。</p><h3 id="但是現在你被限制在他們的平台上" tabindex="-1">但是現在你被限制在<strong>他們的</strong>平台上 <a class="header-anchor" href="#但是現在你被限制在他們的平台上" aria-label="Permalink to “但是現在你被限制在他們的平台上”">​</a></h3><p><strong>受限的環境。</strong>你只能用服務提供商提供的環境，你想在 Rust 中用 serverless？你可能不會太幸運。</p><p><strong>受限的預裝包。</strong>你只有提供商預裝的包。但是你或許能夠提供你自己的包。</p><p><strong>受限的執行時間。</strong>你的 Function 只可以運行這麼長時間。如果你必須處理 1TB 的文件，你可能需要有一個解決辦法或者用其他方案。</p><p><strong>強制的微服務架構。</strong>參考上面的描述。</p><p><strong>受限的監視和診斷能力。</strong>例如，你的代碼<strong>在</strong>幹什麼? 在 serverless 中，基本不可能在調試器中設置斷點和跟蹤流程。你仍然可以像往常一樣記錄日誌併發出統計度量，但是這帶來的幫助很有限，無法定位在 serverless 環境中發生的難點問題。</p><h3 id="競爭領域" tabindex="-1">競爭領域 <a class="header-anchor" href="#競爭領域" aria-label="Permalink to “競爭領域”">​</a></h3><p>自從 2014 年出現 AWS Lambda 以後，serverless 的提供商已經增加了一些。下面是一些主流的服務提供商:</p><ul><li>AWS Lambda - 起步最早的</li><li>OpenWhisk - 在 IBM 的 Bluemix 雲上可用</li><li>Google Cloud Functions</li><li>Azure Functions</li></ul><p>這些平台都有它們的相對優勢和劣勢（例如，Azure 支持 C#，或者緊密集成在其他提供商的平台上）。這裏面最大的玩家是 AWS。</p><h3 id="通過-aws-的-lambda-和-api-gateway-構建你的第一個-api" tabindex="-1">通過 AWS 的 Lambda 和 API Gateway 構建你的第一個 API <a class="header-anchor" href="#通過-aws-的-lambda-和-api-gateway-構建你的第一個-api" aria-label="Permalink to “通過 AWS 的 Lambda 和 API Gateway 構建你的第一個 API”">​</a></h3>',24)),l("p",null,[s[1]||(s[1]=a("我們來試一試 serverless。我們將用 AWS Lambda 和 API Gateway 來構建一個能返回 ",-1)),e(n,{href:"http://blog.ryankelly.us/2016/07/11/jimmy.html"},{default:p(()=>[...s[0]||(s[0]=[a("Jimmy",-1)])]),_:1}),s[2]||(s[2]=a(" 所説的“Guru Meditations”的 API。",-1))]),l("p",null,[s[4]||(s[4]=a("所有代碼在 ",-1)),e(n,{href:"https://github.com/f0rk/meditations"},{default:p(()=>[...s[3]||(s[3]=[a("GitHub",-1)])]),_:1}),s[5]||(s[5]=a(" 上可以找到。",-1))]),s[20]||(s[20]=t(`<p>API文檔：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>POST /</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;status&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>    &quot;meditation&quot;: &quot;did u mention banana cognac shower&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="怎樣組織工程文件" tabindex="-1">怎樣組織工程文件 <a class="header-anchor" href="#怎樣組織工程文件" aria-label="Permalink to “怎樣組織工程文件”">​</a></h3><p>文件結構樹:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── LICENSE</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── server</span></span>
<span class="line"><span>│   ├── __init__.py</span></span>
<span class="line"><span>│   ├── meditate.py</span></span>
<span class="line"><span>│   └── swagger.json</span></span>
<span class="line"><span>├── setup.py</span></span>
<span class="line"><span>├── tests</span></span>
<span class="line"><span>│   └── test_server</span></span>
<span class="line"><span>│       └── test_meditate.py</span></span>
<span class="line"><span>└── tools</span></span>
<span class="line"><span>    ├── deploy.py</span></span>
<span class="line"><span>    ├── serve.py</span></span>
<span class="line"><span>    ├── serve.sh</span></span>
<span class="line"><span>    ├── setup.sh</span></span>
<span class="line"><span>    └── zip.sh</span></span></code></pre></div><p>AWS 中的信息（想了解這裏究竟在做什麼的詳細信息，可查看源碼 <code>tools/deploy.py</code>）。</p><ul><li><strong>API。</strong>實際構建的對象。它在 AWS 中表示為一個單獨的對象。</li><li><strong>執行角色。</strong>在 AWS 中，每個 Function 作為一個單獨的角色執行。在這裏就是 meditations。</li><li><strong>角色策略。</strong>每個 Function 作為一個角色執行，每個角色需要權限來幹活。我們的 Lambda Function 不幹太多活，故我們只添加一些日誌記錄權限。</li><li><strong>Lambda Function。</strong>運行我們的代碼的地方。</li><li><strong>Swagger。</strong> Swagger 是 API 的規範。API Gateway 支持解析 swagger 的定義來為 API 配置大部分資源。</li><li><strong>部署。</strong>API Gateway 提供部署的概念。我們只需要為我們的 API 用一個就行（例如，所有的都用生產或者 yolo等)，但是得知道它們是存在的，並且對於真正的產品級服務，你可能想用開發和暫存環境。</li><li><strong>監控。</strong>在我們的業務崩潰的情況下（或者因為使用產生大量賬單時），我們想以雲告警查看方式為這些錯誤和費用添加一些監控。注意你應該修改 <code>tools/deploy.py</code> 來正確地設置你的 email。</li></ul><h3 id="代碼" tabindex="-1">代碼 <a class="header-anchor" href="#代碼" aria-label="Permalink to “代碼”">​</a></h3><p>Lambda Function 將從一個硬編碼列表中隨機選擇一個並返回 guru meditations，非常簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import logging</span></span>
<span class="line"><span>import random</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>logger = logging.getLogger()</span></span>
<span class="line"><span>logger.setLevel(logging.INFO)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def handler(event, context):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    logger.info(u&quot;received request with id &#39;{}&#39;&quot;.format(context.aws_request_id))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    meditations = [</span></span>
<span class="line"><span>    &quot;off to a regex/&quot;,</span></span>
<span class="line"><span>    &quot;the count of machines abides&quot;,</span></span>
<span class="line"><span>    &quot;you wouldn&#39;t fax a bat&quot;,</span></span>
<span class="line"><span>    &quot;HAZARDOUS CHEMICALS + RKELLY&quot;,</span></span>
<span class="line"><span>    &quot;your solution requires a blood eagle&quot;,</span></span>
<span class="line"><span>    &quot;testing is broken because I&#39;m lazy&quot;,</span></span>
<span class="line"><span>    &quot;did u mention banana cognac shower&quot;,</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    meditation = random.choice(meditations)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        &quot;status&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>        &quot;meditation&quot;: meditation,</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="deploy-py-腳本" tabindex="-1">deploy.py 腳本 <a class="header-anchor" href="#deploy-py-腳本" aria-label="Permalink to “deploy.py 腳本”">​</a></h3><p>這個腳本相當長，我沒法貼在這裏。它基本只是遍歷上述“AWS 中的信息”下的項目，確保每項都存在。</p><h3 id="我們來部署這個腳本" tabindex="-1">我們來部署這個腳本 <a class="header-anchor" href="#我們來部署這個腳本" aria-label="Permalink to “我們來部署這個腳本”">​</a></h3><p>只需運行 <code>./tools/deploy.py</code>。</p><p>基本完成了。不過似乎在權限申請上有些問題，由於 API Gateway 沒有權限去執行你的 Function，所以你的 Lambda Function 將不能執行，報錯應該是“Execution failed due to configuration error: Invalid permissions on Lambda function”。我不知道怎麼用 botocore 添加權限。你可以通過 AWS console 來解決這個問題，找到你的 API, 進到 <code>/POST</code> 端點，進到“integration request”，點擊“Lambda Function”旁邊的編輯圖標，修改它，然後保存。此時將彈出一個窗口提示“You are about to give API Gateway permission to invoke your Lambda function”， 點擊“OK”。</p><p>當你完成後，記錄下 <code>./tools/deploy.py</code> 打印出的 URL，像下面這樣調用它，然後查看你的新 API 的行為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -X POST https://a1b2c3d4.execute-api.us-east-1.amazonaws.com/prod/</span></span>
<span class="line"><span>{&quot;status&quot;: &quot;success&quot;, &quot;meditation&quot;: &quot;the count of machines abides&quot;}</span></span></code></pre></div><h3 id="本地運行" tabindex="-1">本地運行 <a class="header-anchor" href="#本地運行" aria-label="Permalink to “本地運行”">​</a></h3><p>不幸的是，AWS Lambda 沒有好的方法能在本地運行你的代碼。在這個例子裏，我們將用一個簡單的 flask 服務器來在本地託管合適的端點，並調用 handler 函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from __future__ import absolute_import</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from flask import Flask, jsonify</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from server.meditate import handler</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = Flask(__name__)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@app.route(&quot;/&quot;, methods=[&quot;POST&quot;])</span></span>
<span class="line"><span>def index():</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    class FakeContext(object):</span></span>
<span class="line"><span>        aws_request_id = &quot;XXX&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return jsonify(**handler(None, FakeContext()))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.run(host=&quot;0.0.0.0&quot;)</span></span></code></pre></div><p>你可以在倉庫中用 <code>./tools/serve.sh</code> 運行它，像這樣調用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -X POST http://localhost:5000/</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;meditation&quot;: &quot;your solution requires a blood eagle&quot;,</span></span>
<span class="line"><span>    &quot;status&quot;: &quot;success&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="測試" tabindex="-1">測試 <a class="header-anchor" href="#測試" aria-label="Permalink to “測試”">​</a></h3><p>你總是應該測試你的代碼。我們的測試方法是導入並運行我們的 handler 函數。這是最基本的 python 測試方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from __future__ import absolute_import</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from server.meditate import handler</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class SubmitTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_submit(self):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        class FakeContext(object):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            aws_request_id = &quot;XXX&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        response = handler(None, FakeContext())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.assertEquals(response[&quot;status&quot;], &quot;success&quot;)</span></span>
<span class="line"><span>        self.assertTrue(&quot;meditation&quot; in response)</span></span></code></pre></div><p>你可以在倉庫裏通過 nose2 運行這個測試代碼。</p><h3 id="更多前景" tabindex="-1">更多前景 <a class="header-anchor" href="#更多前景" aria-label="Permalink to “更多前景”">​</a></h3><ul><li><strong>和 AWS 服務的無縫集成。</strong>通過 boto，你可以完美地輕易連接到任何其他的 AWS 服務。你可以輕易地讓你的執行角色用 IAM 訪問這些服務。你可以從 S3 取文件或放文件到 S3，連接到 Dynamo DB，調用其他 Lambda Function，等等。</li><li><strong>訪問資料庫。</strong>你也可以輕易地訪問遠程資料庫。在你的 Lambda handler 模組的最上面連接資料庫，並在handler 函數中執行查詢。你很可能必須從它的安裝位置上傳相關的包內容才能使它正常工作。可能你也需要靜態編譯某些庫。</li><li><strong>調用其他 webservices。</strong>API Gateway 也是一種把 webservices 的輸出從一個格式轉換成另一個格式的方法。你可以充分利用這個特點通過不同的 webservices 來代理調用，或者當業務變更時提供後向兼容能力。</li></ul><hr>`,29)),l("p",null,[s[7]||(s[7]=a("via: ",-1)),e(n,{href:"http://blog.ryankelly.us/2016/08/07/going-serverless-with-aws-lambda-and-api-gateway.html"},{default:p(()=>[...s[6]||(s[6]=[a("http://blog.ryankelly.us/2016/08/07/going-serverless-with-aws-lambda-and-api-gateway.html",-1)])]),_:1})]),l("p",null,[s[11]||(s[11]=a("作者：",-1)),e(n,{href:"https://github.com/f0rk/blog.ryankelly.us/"},{default:p(()=>[...s[8]||(s[8]=[a("Ryan Kelly",-1)])]),_:1}),s[12]||(s[12]=a(" 譯者：",-1)),e(n,{href:"https://github.com/messon007"},{default:p(()=>[...s[9]||(s[9]=[a("messon007",-1)])]),_:1}),s[13]||(s[13]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[16]||(s[16]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[14]||(s[14]=[a("LCTT",-1)])]),_:1}),s[17]||(s[17]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[15]||(s[15]=[a("Linux中國",-1)])]),_:1}),s[18]||(s[18]=a(" 榮譽推出",-1))])])}const A=i(u,[["render",c]]);export{q as __pageData,A as default};
