import{_ as i,a0 as o,w as r,s as d,ao as t,I as l,x as a,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"通过 AWS 的 Lambda 和 API Gateway 走向 Serverless | LCTT x X-CMD","titleTemplate":false,"description":"通过 AWS 的 Lambda 和 API Gateway 走向 Serverless | LCTT (201610) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通过 AWS 的 Lambda 和 API Gateway 走向 Serverless | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通过 AWS 的 Lambda 和 API Gateway 走向 Serverless | LCTT (201610) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201610/20160807 Going Serverless with AWS Lambda and API Gateway","title":"通过 AWS 的 Lambda 和 API Gateway 走向 Serverless","tag":"201610","desc":""},"relativePath":"201610/20160807 Going Serverless with AWS Lambda and API Gateway.md","filePath":"[post].md"}'),u={name:"201610/20160807 Going Serverless with AWS Lambda and API Gateway.md"};function c(g,s,h,b,m,k){const n=o("Link");return r(),d("div",null,[s[19]||(s[19]=t('<h1 id="通过-aws-的-lambda-和-api-gateway-走向-serverless" tabindex="-1">通过 AWS 的 Lambda 和 API Gateway 走向 Serverless <a class="header-anchor" href="#通过-aws-的-lambda-和-api-gateway-走向-serverless" aria-label="Permalink to “通过 AWS 的 Lambda 和 API Gateway 走向 Serverless”">​</a></h1><p>近来，在计算领域出现了很多关于 serverless 的讨论。serverless 是一个概念，它允许你提供代码或可执行程序给某个服务，由服务来为你执行它们，而你无需自己管理服务器。这就是所谓的执行即服务（execution-as-a-service），它带来了很多机会，同时也遇到了它独有的挑战。</p><h3 id="简短回忆下计算领域的发展" tabindex="-1">简短回忆下计算领域的发展 <a class="header-anchor" href="#简短回忆下计算领域的发展" aria-label="Permalink to “简短回忆下计算领域的发展”">​</a></h3><p>早期，出现了……好吧，这有点复杂。很早的时候，出现了机械计算机，后来又有了埃尼阿克 ENIAC（Electronic Numerical Integrator And Computer，很早的电子计算机)，但是都没有规模生产。直到大型机出现后，计算领域才快速发展。</p><ul><li>上世纪 50 年代 - 大型机</li><li>上世纪 60 年代 - 微型机</li><li>1994 - 机架服务器</li><li>2001 - 刀片服务器</li><li>本世纪初 - 虚拟服务器</li><li>2006 - 服务器云化</li><li>2013 - 容器化</li><li>2014 - serverless（计算资源服务化）</li></ul><blockquote><p>这些日期是大概的发布或者流行日期，无需和我争论时间的准确性。</p></blockquote><p>计算领域的演进趋势是执行的功能单元越来越小。每一次演进通常都意味着运维负担的减小和运维灵活性的增加。</p><h3 id="发展前景" tabindex="-1">发展前景 <a class="header-anchor" href="#发展前景" aria-label="Permalink to “发展前景”">​</a></h3><p>喔，Serverless！但是，serverless 能给我们带来什么好处? 我们将面临什么挑战呢?</p><p><strong>未执行代码时无需付费。</strong>我认为，这是个巨大的卖点。当无人访问你的站点或用你的 API 时，你无需付钱。没有持续支出的基础设施成本，仅仅支付你需要的部分。换句话说，这履行了云计算的承诺：“仅仅支付你真正用的资源”。</p><p><strong>无需维护服务器，也无需考虑服务器安全。</strong>服务器的维护和安全将由你的服务提供商来处理（当然，你也可以架设自己的 serverless 主机，只是这似乎是在向错误的方向前进）。由于你的执行时间也是受限的，安全补丁也被简化了，因为完全不需要重启。这些都应该由你的服务提供商无缝地处理。</p><p><strong>无限的可扩展性。</strong>这是又一个大的好处。假设你又开发了一个 Pokemon Go, 与其频繁地把站点下线维护升级，不如用 serverless 来不断地扩展。当然，这也是个双刃剑，大量的账单也会随之而来。如果你的业务的利润强依赖于站点上线率的话，serverless 确实能帮上忙。</p><p><strong>强制的微服务架构。</strong>这也有两面性，一方面，微服务似乎是一种好的构建灵活可扩展的、容错的架构的方式。另一方面，如果你的业务没有按照这种方式设计，你将很难在已有的架构中引入 serverless。</p><h3 id="但是现在你被限制在他们的平台上" tabindex="-1">但是现在你被限制在<strong>他们的</strong>平台上 <a class="header-anchor" href="#但是现在你被限制在他们的平台上" aria-label="Permalink to “但是现在你被限制在他们的平台上”">​</a></h3><p><strong>受限的环境。</strong>你只能用服务提供商提供的环境，你想在 Rust 中用 serverless？你可能不会太幸运。</p><p><strong>受限的预装包。</strong>你只有提供商预装的包。但是你或许能够提供你自己的包。</p><p><strong>受限的执行时间。</strong>你的 Function 只可以运行这么长时间。如果你必须处理 1TB 的文件，你可能需要有一个解决办法或者用其他方案。</p><p><strong>强制的微服务架构。</strong>参考上面的描述。</p><p><strong>受限的监视和诊断能力。</strong>例如，你的代码<strong>在</strong>干什么? 在 serverless 中，基本不可能在调试器中设置断点和跟踪流程。你仍然可以像往常一样记录日志并发出统计度量，但是这带来的帮助很有限，无法定位在 serverless 环境中发生的难点问题。</p><h3 id="竞争领域" tabindex="-1">竞争领域 <a class="header-anchor" href="#竞争领域" aria-label="Permalink to “竞争领域”">​</a></h3><p>自从 2014 年出现 AWS Lambda 以后，serverless 的提供商已经增加了一些。下面是一些主流的服务提供商:</p><ul><li>AWS Lambda - 起步最早的</li><li>OpenWhisk - 在 IBM 的 Bluemix 云上可用</li><li>Google Cloud Functions</li><li>Azure Functions</li></ul><p>这些平台都有它们的相对优势和劣势（例如，Azure 支持 C#，或者紧密集成在其他提供商的平台上）。这里面最大的玩家是 AWS。</p><h3 id="通过-aws-的-lambda-和-api-gateway-构建你的第一个-api" tabindex="-1">通过 AWS 的 Lambda 和 API Gateway 构建你的第一个 API <a class="header-anchor" href="#通过-aws-的-lambda-和-api-gateway-构建你的第一个-api" aria-label="Permalink to “通过 AWS 的 Lambda 和 API Gateway 构建你的第一个 API”">​</a></h3>',24)),l("p",null,[s[1]||(s[1]=a("我们来试一试 serverless。我们将用 AWS Lambda 和 API Gateway 来构建一个能返回 ",-1)),e(n,{href:"http://blog.ryankelly.us/2016/07/11/jimmy.html"},{default:p(()=>[...s[0]||(s[0]=[a("Jimmy",-1)])]),_:1}),s[2]||(s[2]=a(" 所说的“Guru Meditations”的 API。",-1))]),l("p",null,[s[4]||(s[4]=a("所有代码在 ",-1)),e(n,{href:"https://github.com/f0rk/meditations"},{default:p(()=>[...s[3]||(s[3]=[a("GitHub",-1)])]),_:1}),s[5]||(s[5]=a(" 上可以找到。",-1))]),s[20]||(s[20]=t(`<p>API文档：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>POST /</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;status&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>    &quot;meditation&quot;: &quot;did u mention banana cognac shower&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="怎样组织工程文件" tabindex="-1">怎样组织工程文件 <a class="header-anchor" href="#怎样组织工程文件" aria-label="Permalink to “怎样组织工程文件”">​</a></h3><p>文件结构树:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.</span></span>
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
<span class="line"><span>    └── zip.sh</span></span></code></pre></div><p>AWS 中的信息（想了解这里究竟在做什么的详细信息，可查看源码 <code>tools/deploy.py</code>）。</p><ul><li><strong>API。</strong>实际构建的对象。它在 AWS 中表示为一个单独的对象。</li><li><strong>执行角色。</strong>在 AWS 中，每个 Function 作为一个单独的角色执行。在这里就是 meditations。</li><li><strong>角色策略。</strong>每个 Function 作为一个角色执行，每个角色需要权限来干活。我们的 Lambda Function 不干太多活，故我们只添加一些日志记录权限。</li><li><strong>Lambda Function。</strong>运行我们的代码的地方。</li><li><strong>Swagger。</strong> Swagger 是 API 的规范。API Gateway 支持解析 swagger 的定义来为 API 配置大部分资源。</li><li><strong>部署。</strong>API Gateway 提供部署的概念。我们只需要为我们的 API 用一个就行（例如，所有的都用生产或者 yolo等)，但是得知道它们是存在的，并且对于真正的产品级服务，你可能想用开发和暂存环境。</li><li><strong>监控。</strong>在我们的业务崩溃的情况下（或者因为使用产生大量账单时），我们想以云告警查看方式为这些错误和费用添加一些监控。注意你应该修改 <code>tools/deploy.py</code> 来正确地设置你的 email。</li></ul><h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to “代码”">​</a></h3><p>Lambda Function 将从一个硬编码列表中随机选择一个并返回 guru meditations，非常简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import logging</span></span>
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
<span class="line"><span>    }</span></span></code></pre></div><h3 id="deploy-py-脚本" tabindex="-1">deploy.py 脚本 <a class="header-anchor" href="#deploy-py-脚本" aria-label="Permalink to “deploy.py 脚本”">​</a></h3><p>这个脚本相当长，我没法贴在这里。它基本只是遍历上述“AWS 中的信息”下的项目，确保每项都存在。</p><h3 id="我们来部署这个脚本" tabindex="-1">我们来部署这个脚本 <a class="header-anchor" href="#我们来部署这个脚本" aria-label="Permalink to “我们来部署这个脚本”">​</a></h3><p>只需运行 <code>./tools/deploy.py</code>。</p><p>基本完成了。不过似乎在权限申请上有些问题，由于 API Gateway 没有权限去执行你的 Function，所以你的 Lambda Function 将不能执行，报错应该是“Execution failed due to configuration error: Invalid permissions on Lambda function”。我不知道怎么用 botocore 添加权限。你可以通过 AWS console 来解决这个问题，找到你的 API, 进到 <code>/POST</code> 端点，进到“integration request”，点击“Lambda Function”旁边的编辑图标，修改它，然后保存。此时将弹出一个窗口提示“You are about to give API Gateway permission to invoke your Lambda function”， 点击“OK”。</p><p>当你完成后，记录下 <code>./tools/deploy.py</code> 打印出的 URL，像下面这样调用它，然后查看你的新 API 的行为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -X POST https://a1b2c3d4.execute-api.us-east-1.amazonaws.com/prod/</span></span>
<span class="line"><span>{&quot;status&quot;: &quot;success&quot;, &quot;meditation&quot;: &quot;the count of machines abides&quot;}</span></span></code></pre></div><h3 id="本地运行" tabindex="-1">本地运行 <a class="header-anchor" href="#本地运行" aria-label="Permalink to “本地运行”">​</a></h3><p>不幸的是，AWS Lambda 没有好的方法能在本地运行你的代码。在这个例子里，我们将用一个简单的 flask 服务器来在本地托管合适的端点，并调用 handler 函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from __future__ import absolute_import</span></span>
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
<span class="line"><span>app.run(host=&quot;0.0.0.0&quot;)</span></span></code></pre></div><p>你可以在仓库中用 <code>./tools/serve.sh</code> 运行它，像这样调用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -X POST http://localhost:5000/</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;meditation&quot;: &quot;your solution requires a blood eagle&quot;,</span></span>
<span class="line"><span>    &quot;status&quot;: &quot;success&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to “测试”">​</a></h3><p>你总是应该测试你的代码。我们的测试方法是导入并运行我们的 handler 函数。这是最基本的 python 测试方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from __future__ import absolute_import</span></span>
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
<span class="line"><span>        self.assertTrue(&quot;meditation&quot; in response)</span></span></code></pre></div><p>你可以在仓库里通过 nose2 运行这个测试代码。</p><h3 id="更多前景" tabindex="-1">更多前景 <a class="header-anchor" href="#更多前景" aria-label="Permalink to “更多前景”">​</a></h3><ul><li><strong>和 AWS 服务的无缝集成。</strong>通过 boto，你可以完美地轻易连接到任何其他的 AWS 服务。你可以轻易地让你的执行角色用 IAM 访问这些服务。你可以从 S3 取文件或放文件到 S3，连接到 Dynamo DB，调用其他 Lambda Function，等等。</li><li><strong>访问数据库。</strong>你也可以轻易地访问远程数据库。在你的 Lambda handler 模块的最上面连接数据库，并在handler 函数中执行查询。你很可能必须从它的安装位置上传相关的包内容才能使它正常工作。可能你也需要静态编译某些库。</li><li><strong>调用其他 webservices。</strong>API Gateway 也是一种把 webservices 的输出从一个格式转换成另一个格式的方法。你可以充分利用这个特点通过不同的 webservices 来代理调用，或者当业务变更时提供后向兼容能力。</li></ul><hr>`,29)),l("p",null,[s[7]||(s[7]=a("via: ",-1)),e(n,{href:"http://blog.ryankelly.us/2016/08/07/going-serverless-with-aws-lambda-and-api-gateway.html"},{default:p(()=>[...s[6]||(s[6]=[a("http://blog.ryankelly.us/2016/08/07/going-serverless-with-aws-lambda-and-api-gateway.html",-1)])]),_:1})]),l("p",null,[s[11]||(s[11]=a("作者：",-1)),e(n,{href:"https://github.com/f0rk/blog.ryankelly.us/"},{default:p(()=>[...s[8]||(s[8]=[a("Ryan Kelly",-1)])]),_:1}),s[12]||(s[12]=a(" 译者：",-1)),e(n,{href:"https://github.com/messon007"},{default:p(()=>[...s[9]||(s[9]=[a("messon007",-1)])]),_:1}),s[13]||(s[13]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[16]||(s[16]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[14]||(s[14]=[a("LCTT",-1)])]),_:1}),s[17]||(s[17]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[15]||(s[15]=[a("Linux中国",-1)])]),_:1}),s[18]||(s[18]=a(" 荣誉推出",-1))])])}const A=i(u,[["render",c]]);export{q as __pageData,A as default};
