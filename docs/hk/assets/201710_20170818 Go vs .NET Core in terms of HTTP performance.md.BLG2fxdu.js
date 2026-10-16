import{_ as t,a0 as o,w as r,s as c,I as a,x as n,a1 as i,A as e,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"論 HTTP 性能，Go 與 .NET Core 一爭雌雄 | LCTT x X-CMD","titleTemplate":false,"description":"論 HTTP 性能，Go 與 .NET Core 一爭雌雄 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"論 HTTP 性能，Go 與 .NET Core 一爭雌雄 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"論 HTTP 性能，Go 與 .NET Core 一爭雌雄 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170818 Go vs .NET Core in terms of HTTP performance","title":"論 HTTP 性能，Go 與 .NET Core 一爭雌雄","tag":"201710","desc":""},"relativePath":"201710/20170818 Go vs .NET Core in terms of HTTP performance.md","filePath":"[post].md"}'),u={name:"201710/20170818 Go vs .NET Core in terms of HTTP performance.md"};function d(g,s,h,m,b,k){const p=o("Link");return r(),c("div",null,[s[88]||(s[88]=a("h1",{id:"論-http-性能-go-與-net-core-一爭雌雄",tabindex:"-1"},[n("論 HTTP 性能，Go 與 .NET Core 一爭雌雄 "),a("a",{class:"header-anchor",href:"#論-http-性能-go-與-net-core-一爭雌雄","aria-label":"Permalink to “論 HTTP 性能，Go 與 .NET Core 一爭雌雄”"},"​")],-1)),s[89]||(s[89]=a("p",null,[a("img",{src:"https://cdn-images-1.medium.com/max/1200/1*60T60jSMO5yxUqJQmLZa4A.png",alt:""})],-1)),s[90]||(s[90]=a("p",null,"朋友們，你們好！",-1)),s[91]||(s[91]=a("p",null,"近來，我聽到了大量的關於新出的 .NET Core 和其性能的討論，尤其在 Web 服務方面的討論更甚。",-1)),s[92]||(s[92]=a("p",null,"因為是新出的，我不想立馬就比較兩個不同的東西，所以我耐心等待，想等發佈更穩定的版本後再進行。",-1)),a("p",null,[s[1]||(s[1]=n("本週一（8 月 14 日），微軟",-1)),i(p,{href:"https://blogs.msdn.microsoft.com/dotnet/2017/08/14/announcing-net-core-2-0/"},{default:e(()=>[...s[0]||(s[0]=[n("發佈 .NET Core 2.0 版本",-1)])]),_:1}),s[2]||(s[2]=n("，因此，我準備開始。您們認為呢？",-1))]),a("p",null,[s[4]||(s[4]=n("如前面所提的，我們會比較它們相同的東西，比如應用程序、預期響應及運行時的穩定性，所以我們不會把像對 JSON 或者 XML 的編碼、解碼這些煩多的事情加入比較遊戲中來，僅僅只會使用簡單的文本消息。為了公平起見，我們會分別使用 Go 和 .NET Core 的 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"},{default:e(()=>[...s[3]||(s[3]=[n("MVC 架構模式",-1)])]),_:1}),s[5]||(s[5]=n("。",-1))]),s[93]||(s[93]=a("h3",{id:"參賽選手",tabindex:"-1"},[n("參賽選手 "),a("a",{class:"header-anchor",href:"#參賽選手","aria-label":"Permalink to “參賽選手”"},"​")],-1)),a("p",null,[i(p,{href:"https://golang.org/"},{default:e(()=>[...s[6]||(s[6]=[n("Go",-1)])]),_:1}),s[8]||(s[8]=n(" （或稱 Golang）： 是一種",-1)),i(p,{href:"http://www.tiobe.com/tiobe-index/"},{default:e(()=>[...s[7]||(s[7]=[n("快速增長",-1)])]),_:1}),s[9]||(s[9]=n("的開源編程語言，旨在構建出簡單、快捷和穩定可靠的應用軟件。",-1))]),s[94]||(s[94]=a("p",null,"用於支持 Go 語言的 MVC web 框架並不多，還好我們找到了 Iris ，可勝任此工作。",-1)),a("p",null,[i(p,{href:"http://iris-go.com/"},{default:e(()=>[...s[10]||(s[10]=[n("Iris",-1)])]),_:1}),s[11]||(s[11]=n("： 支持 Go 語言的快速、簡單和高效的微型 Web 框架。它為您的下一代網站、API 或分佈式應用程序奠定了精美的表現方式和易於使用的基礎。",-1))]),a("p",null,[i(p,{href:"https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29"},{default:e(()=>[...s[12]||(s[12]=[n("C#",-1)])]),_:1}),s[14]||(s[14]=n("： 是一種通用的、面向對象的編程語言。其開發團隊由 ",-1)),i(p,{href:"https://twitter.com/ahejlsberg"},{default:e(()=>[...s[13]||(s[13]=[n("Anders Hejlsberg",-1)])]),_:1}),s[15]||(s[15]=n(" 領導。",-1))]),a("p",null,[i(p,{href:"https://www.microsoft.com/net/"},{default:e(()=>[...s[16]||(s[16]=[n(".NET Core",-1)])]),_:1}),s[17]||(s[17]=n("： 跨平台，可以在極少時間內開發出高性能的應用程序。",-1))]),a("p",null,[s[20]||(s[20]=n("可從 ",-1)),i(p,{href:"https://golang.org/dl"},{default:e(()=>[...s[18]||(s[18]=[n("https://golang.org/dl",-1)])]),_:1}),s[21]||(s[21]=n(" 下載 Go ，從 ",-1)),i(p,{href:"https://www.microsoft.com/net/core"},{default:e(()=>[...s[19]||(s[19]=[n("https://www.microsoft.com/net/core",-1)])]),_:1}),s[22]||(s[22]=n(" 下載 .NET Core。",-1))]),s[95]||(s[95]=l('<p>在下載和安裝好這些軟件後，還需要為 Go 安裝 Iris。安裝很簡單，僅僅只需要打開終端，然後執行如下語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go get -u github.com/kataras/iris</span></span></code></pre></div><h3 id="基準" tabindex="-1">基準 <a class="header-anchor" href="#基準" aria-label="Permalink to “基準”">​</a></h3><h4 id="硬件" tabindex="-1">硬件 <a class="header-anchor" href="#硬件" aria-label="Permalink to “硬件”">​</a></h4><ul><li>處理器： Intel(R) Core(TM) i7–4710HQ CPU @ 2.50GHz 2.50GHz</li><li>內存： 8.00 GB</li></ul><h4 id="軟件" tabindex="-1">軟件 <a class="header-anchor" href="#軟件" aria-label="Permalink to “軟件”">​</a></h4>',6)),a("ul",null,[s[34]||(s[34]=a("li",null,"操作系統： 微軟 Windows [10.0.15063 版本]， 電源計劃設置為“高性能”",-1)),a("li",null,[s[24]||(s[24]=n("HTTP 基準工具： ",-1)),i(p,{href:"https://github.com/codesenberg/bombardier"},{default:e(()=>[...s[23]||(s[23]=[n("https://github.com/codesenberg/bombardier",-1)])]),_:1}),s[25]||(s[25]=n("， 使用最新的 1.1 版本。",-1))]),a("li",null,[s[27]||(s[27]=n(".NET Core： ",-1)),i(p,{href:"https://www.microsoft.com/net/core"},{default:e(()=>[...s[26]||(s[26]=[n("https://www.microsoft.com/net/core",-1)])]),_:1}),s[28]||(s[28]=n("， 使用最新的 2.0 版本。",-1))]),a("li",null,[s[31]||(s[31]=n("Iris： ",-1)),i(p,{href:"https://github.com/kataras/iris"},{default:e(()=>[...s[29]||(s[29]=[n("https://github.com/kataras/iris",-1)])]),_:1}),s[32]||(s[32]=n("， 使用基於 ",-1)),i(p,{href:"https://golang.org/"},{default:e(()=>[...s[30]||(s[30]=[n("Go 1.8.3",-1)])]),_:1}),s[33]||(s[33]=n(" 構建的最新 8.3 版本。",-1))])]),s[96]||(s[96]=a("p",null,"兩個應用程序都通過請求路徑 “api/values/{id}” 返回文本“值”。",-1)),s[97]||(s[97]=a("h5",{id:"net-core-mvc",tabindex:"-1"},[n(".NET Core MVC "),a("a",{class:"header-anchor",href:"#net-core-mvc","aria-label":"Permalink to “.NET Core MVC”"},"​")],-1)),s[98]||(s[98]=a("p",null,[a("img",{src:"https://cdn-images-1.medium.com/max/1600/1*v2VJL3-I3bLyuehntuqfng.png",alt:""})],-1)),a("p",null,[s[36]||(s[36]=n("Logo 由 ",-1)),i(p,{href:"https://github.com/campusMVP/dotnetCoreLogoPack"},{default:e(()=>[...s[35]||(s[35]=[n("Pablo Iglesias",-1)])]),_:1}),s[37]||(s[37]=n(" 設計。",-1))]),s[99]||(s[99]=l(`<p>可以使用 <code>dotnet new webapi</code> 命令創建項目，其 <code>webapi</code> 模板會為您生成代碼，代碼包含 <code>GET</code> 請求方法的 <code>返回“值”</code>。</p><p>源代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Generic;</span></span>
<span class="line"><span>using System.IO;</span></span>
<span class="line"><span>using System.Linq;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span>using Microsoft.AspNetCore;</span></span>
<span class="line"><span>using Microsoft.AspNetCore.Hosting;</span></span>
<span class="line"><span>using Microsoft.Extensions.Configuration;</span></span>
<span class="line"><span>using Microsoft.Extensions.Logging;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace netcore_mvc</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public class Program</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public static void Main(string[] args)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            BuildWebHost(args).Run();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public static IWebHost BuildWebHost(string[] args) =&gt;</span></span>
<span class="line"><span>            WebHost.CreateDefaultBuilder(args)</span></span>
<span class="line"><span>                .UseStartup&lt;Startup&gt;()</span></span>
<span class="line"><span>                .Build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Generic;</span></span>
<span class="line"><span>using System.Linq;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span>using Microsoft.AspNetCore.Builder;</span></span>
<span class="line"><span>using Microsoft.AspNetCore.Hosting;</span></span>
<span class="line"><span>using Microsoft.Extensions.Configuration;</span></span>
<span class="line"><span>using Microsoft.Extensions.DependencyInjection;</span></span>
<span class="line"><span>using Microsoft.Extensions.Logging;</span></span>
<span class="line"><span>using Microsoft.Extensions.Options;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace netcore_mvc</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public class Startup</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public Startup(IConfiguration configuration)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            Configuration = configuration;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public IConfiguration Configuration { get; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // This method gets called by the runtime. Use this method to add services to the container.</span></span>
<span class="line"><span>        public void ConfigureServices(IServiceCollection services)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            services.AddMvcCore();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.</span></span>
<span class="line"><span>        public void Configure(IApplicationBuilder app, IHostingEnvironment env)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            app.UseMvc();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Generic;</span></span>
<span class="line"><span>using System.Linq;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span>using Microsoft.AspNetCore.Mvc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace netcore_mvc.Controllers</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // ValuesController is the equivalent</span></span>
<span class="line"><span>    // \`ValuesController\` of the Iris 8.3 mvc application.</span></span>
<span class="line"><span>    [Route(&quot;api/[controller]&quot;)]</span></span>
<span class="line"><span>    public class ValuesController : Controller</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        // Get handles &quot;GET&quot; requests to &quot;api/values/{id}&quot;.</span></span>
<span class="line"><span>        [HttpGet(&quot;{id}&quot;)]</span></span>
<span class="line"><span>        public string Get(int id)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return &quot;value&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Put handles &quot;PUT&quot; requests to &quot;api/values/{id}&quot;.</span></span>
<span class="line"><span>        [HttpPut(&quot;{id}&quot;)]</span></span>
<span class="line"><span>        public void Put(int id, [FromBody]string value)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Delete handles &quot;DELETE&quot; requests to &quot;api/values/{id}&quot;.</span></span>
<span class="line"><span>        [HttpDelete(&quot;{id}&quot;)]</span></span>
<span class="line"><span>        public void Delete(int id)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>運行 .NET Core web 服務項目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd netcore-mvc</span></span>
<span class="line"><span>$ dotnet run -c Release</span></span>
<span class="line"><span>Hosting environment: Production</span></span>
<span class="line"><span>Content root path: C:\\mygopath\\src\\github.com\\kataras\\iris\\_benchmarks\\netcore-mvc</span></span>
<span class="line"><span>Now listening on: http://localhost:5000</span></span>
<span class="line"><span>Application started. Press Ctrl+C to shut down.</span></span></code></pre></div><p>運行和定位 HTTP 基準工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bombardier -c 125 -n 5000000 http://localhost:5000/api/values/5</span></span>
<span class="line"><span>Bombarding http://localhost:5000/api/values/5 with 5000000 requests using 125 connections</span></span>
<span class="line"><span> 5000000 / 5000000 [=====================================================] 100.00% 2m3s</span></span>
<span class="line"><span>Done!</span></span>
<span class="line"><span>Statistics        Avg      Stdev        Max</span></span>
<span class="line"><span>  Reqs/sec     40226.03    8724.30     161919</span></span>
<span class="line"><span>  Latency        3.09ms     1.40ms   169.12ms</span></span>
<span class="line"><span>  HTTP codes:</span></span>
<span class="line"><span>    1xx - 0, 2xx - 5000000, 3xx - 0, 4xx - 0, 5xx - 0</span></span>
<span class="line"><span>    others - 0</span></span>
<span class="line"><span>  Throughput:     8.91MB/s</span></span></code></pre></div><h5 id="iris-mvc" tabindex="-1">Iris MVC <a class="header-anchor" href="#iris-mvc" aria-label="Permalink to “Iris MVC”">​</a></h5><p><img src="https://cdn-images-1.medium.com/max/1600/1*zf4BjL-7MQNJGikw5E-iNA.png" alt=""></p>`,11)),a("p",null,[s[39]||(s[39]=n("Logo 由 ",-1)),i(p,{href:"https://github.com/santoshanand"},{default:e(()=>[...s[38]||(s[38]=[n("Santosh Anand",-1)])]),_:1}),s[40]||(s[40]=n(" 設計。",-1))]),s[100]||(s[100]=l(`<p>源代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;github.com/kataras/iris&quot;</span></span>
<span class="line"><span>	&quot;github.com/kataras/iris/_benchmarks/iris-mvc/controllers&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	app := iris.New()</span></span>
<span class="line"><span>	app.Controller(&quot;/api/values/{id}&quot;, new(controllers.ValuesController))</span></span>
<span class="line"><span>	app.Run(iris.Addr(&quot;:5000&quot;), iris.WithoutVersionChecker)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>view raw</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package controllers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;github.com/kataras/iris/mvc&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ValuesController is the equivalent</span></span>
<span class="line"><span>// \`ValuesController\` of the .net core 2.0 mvc application.</span></span>
<span class="line"><span>type ValuesController struct {</span></span>
<span class="line"><span>	mvc.Controller</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Get handles &quot;GET&quot; requests to &quot;api/values/{id}&quot;.</span></span>
<span class="line"><span>func (vc *ValuesController) Get() {</span></span>
<span class="line"><span>	// id,_ := vc.Params.GetInt(&quot;id&quot;)</span></span>
<span class="line"><span>	vc.Ctx.WriteString(&quot;value&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Put handles &quot;PUT&quot; requests to &quot;api/values/{id}&quot;.</span></span>
<span class="line"><span>func (vc *ValuesController) Put() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Delete handles &quot;DELETE&quot; requests to &quot;api/values/{id}&quot;.</span></span>
<span class="line"><span>func (vc *ValuesController) Delete() {}</span></span></code></pre></div><p>運行 Go web 服務項目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd iris-mvc</span></span>
<span class="line"><span>$ go run main.go</span></span>
<span class="line"><span>Now listening on: http://localhost:5000</span></span>
<span class="line"><span>Application started. Press CTRL+C to shut down.</span></span></code></pre></div><p>運行和定位 HTTP 基準工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bombardier -c 125 -n 5000000 http://localhost:5000/api/values/5</span></span>
<span class="line"><span>Bombarding http://localhost:5000/api/values/5 with 5000000 requests using 125 connections</span></span>
<span class="line"><span> 5000000 / 5000000 [======================================================] 100.00% 47s</span></span>
<span class="line"><span>Done!</span></span>
<span class="line"><span>Statistics        Avg      Stdev        Max</span></span>
<span class="line"><span>  Reqs/sec    105643.81    7687.79     122564</span></span>
<span class="line"><span>  Latency        1.18ms   366.55us    22.01ms</span></span>
<span class="line"><span>  HTTP codes:</span></span>
<span class="line"><span>    1xx - 0, 2xx - 5000000, 3xx - 0, 4xx - 0, 5xx - 0</span></span>
<span class="line"><span>    others - 0</span></span>
<span class="line"><span>  Throughput:    19.65MB/s</span></span></code></pre></div><p>想通過圖片來理解的人，我也把我的屏幕截屏出來了！</p>`,8)),a("p",null,[s[42]||(s[42]=n("請點擊",-1)),i(p,{href:"https://github.com/kataras/iris/tree/master/_benchmarks/screens"},{default:e(()=>[...s[41]||(s[41]=[n("這兒",-1)])]),_:1}),s[43]||(s[43]=n("可以看到這些屏幕快照。",-1))]),s[101]||(s[101]=l('<h4 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h4><ul><li>完成 <code>5000000 個請求</code>的時間 - 越短越好。</li><li>請求次數/每秒 - 越大越好。</li><li>等待時間 — 越短越好。</li><li>吞吐量 — 越大越好。</li><li>內存使用 — 越小越好。</li><li>LOC (代碼行數) — 越少越好。</li></ul><p>.NET Core MVC 應用程序，使用 86 行代碼，運行 2 分鐘 8 秒，每秒接納 39311.56 個請求，平均 3.19ms 等待，最大時到 229.73ms，內存使用大約為 126MB（不包括 dotnet 框架）。</p><p>Iris MVC 應用程序，使用 27 行代碼，運行 47 秒，每秒接納 105643.71 個請求，平均 1.18ms 等待，最大時到 22.01ms，內存使用大約為 12MB。</p><blockquote><p>還有另外一個模板的基準，滾動到底部。</p></blockquote><p><strong>2017 年 8 月 20 號更新</strong></p>',6)),a("p",null,[s[47]||(s[47]=n("[Josh Clark] ",-1)),i(p,{href:"https://twitter.com/clarkis117"},{default:e(()=>[...s[44]||(s[44]=[n("24",-1)])]),_:1}),s[48]||(s[48]=n(" 和 [Scott Hanselman] ",-1)),i(p,{href:"https://twitter.com/shanselman"},{default:e(()=>[...s[45]||(s[45]=[n("25",-1)])]),_:1}),s[49]||(s[49]=n("在此 [tweet 評論] ",-1)),i(p,{href:"https://twitter.com/shanselman/status/899005786826788865"},{default:e(()=>[...s[46]||(s[46]=[n("26",-1)])]),_:1}),s[50]||(s[50]=n("上指出，.NET Core ",-1)),s[51]||(s[51]=a("code",null,"Startup.cs",-1)),s[52]||(s[52]=n(" 文件中 ",-1)),s[53]||(s[53]=a("code",null,"services.AddMvc();",-1)),s[54]||(s[54]=n(" 這行可以替換為 ",-1)),s[55]||(s[55]=a("code",null,"services.AddMvcCore();",-1)),s[56]||(s[56]=n("。我聽從他們的意見，修改代碼，重新運行基準，該文章的 .NET Core 應用程序的基準輸出已經修改。",-1))]),s[102]||(s[102]=l("<p>@topdawgevh @shanselman 他們也在使用 <code>AddMvc()</code> 而不是 <code>AddMvcCore()</code> ...，難道都不包含中間件？</p><p>—  @clarkis117</p><p>@clarkis117 @topdawgevh Cool @MakisMaropoulos @ben_a_adams @davidfowl 我們來看看。認真學習下怎麼使用更簡單的性能默認值。</p><p>—  @shanselman</p><p>@shanselman @clarkis117 @topdawgevh @ben_a_adams @davidfowl @shanselman @ben_a_adams @davidfowl 謝謝您們的反饋意見。我已經修改，更新了結果，沒什麼不同。對其它的建議，我非常歡迎。</p><p>—  @MakisMaropoulos</p><blockquote><p>它有點稍微的不同但相差不大（從 8.61MB/s 到 8.91MB/s）</p></blockquote>",7)),a("p",null,[s[58]||(s[58]=n("想要了解跟 ",-1)),s[59]||(s[59]=a("code",null,"services.AddMvc()",-1)),s[60]||(s[60]=n(" 標準比較結果的，可以點擊",-1)),i(p,{href:"https://github.com/kataras/iris/blob/master/_benchmarks/screens/5m_requests_netcore-mvc.png"},{default:e(()=>[...s[57]||(s[57]=[n("這兒",-1)])]),_:1}),s[61]||(s[61]=n("。",-1))]),s[103]||(s[103]=l(`<h3 id="想再多瞭解點兒嗎" tabindex="-1">想再多瞭解點兒嗎? <a class="header-anchor" href="#想再多瞭解點兒嗎" aria-label="Permalink to “想再多瞭解點兒嗎?”">​</a></h3><p>我們再製定一個基準，產生 <code>1000000 次請求</code>，這次會通過視圖引擎由模板生成 <code>HTML</code> 頁面。</p><h4 id="net-core-mvc-使用的模板" tabindex="-1">.NET Core MVC 使用的模板 <a class="header-anchor" href="#net-core-mvc-使用的模板" aria-label="Permalink to “.NET Core MVC 使用的模板”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>using System;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace netcore_mvc_templates.Models</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public class ErrorViewModel</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public string Title { get; set; }</span></span>
<span class="line"><span>        public int Code { get; set; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Generic;</span></span>
<span class="line"><span>using System.Diagnostics;</span></span>
<span class="line"><span>using System.Linq;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span>using Microsoft.AspNetCore.Mvc;</span></span>
<span class="line"><span>using netcore_mvc_templates.Models;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace netcore_mvc_templates.Controllers</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   public class HomeController : Controller</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>       public IActionResult Index()</span></span>
<span class="line"><span>       {</span></span>
<span class="line"><span>           return View();</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       public IActionResult About()</span></span>
<span class="line"><span>       {</span></span>
<span class="line"><span>           ViewData[&quot;Message&quot;] = &quot;Your application description page.&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           return View();</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       public IActionResult Contact()</span></span>
<span class="line"><span>       {</span></span>
<span class="line"><span>           ViewData[&quot;Message&quot;] = &quot;Your contact page.&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           return View();</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       public IActionResult Error()</span></span>
<span class="line"><span>       {</span></span>
<span class="line"><span>           return View(new ErrorViewModel { Title = &quot;Error&quot;, Code = 500});</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Generic;</span></span>
<span class="line"><span>using System.IO;</span></span>
<span class="line"><span>using System.Linq;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span>using Microsoft.AspNetCore;</span></span>
<span class="line"><span>using Microsoft.AspNetCore.Hosting;</span></span>
<span class="line"><span>using Microsoft.Extensions.Configuration;</span></span>
<span class="line"><span>using Microsoft.Extensions.Logging;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace netcore_mvc_templates</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public class Program</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public static void Main(string[] args)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            BuildWebHost(args).Run();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public static IWebHost BuildWebHost(string[] args) =&gt;</span></span>
<span class="line"><span>            WebHost.CreateDefaultBuilder(args)</span></span>
<span class="line"><span>                .UseStartup&lt;Startup&gt;()</span></span>
<span class="line"><span>                .Build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Generic;</span></span>
<span class="line"><span>using System.Linq;</span></span>
<span class="line"><span>using System.Threading.Tasks;</span></span>
<span class="line"><span>using Microsoft.AspNetCore.Builder;</span></span>
<span class="line"><span>using Microsoft.AspNetCore.Hosting;</span></span>
<span class="line"><span>using Microsoft.Extensions.Configuration;</span></span>
<span class="line"><span>using Microsoft.Extensions.DependencyInjection;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace netcore_mvc_templates</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public class Startup</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        public Startup(IConfiguration configuration)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            Configuration = configuration;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public IConfiguration Configuration { get; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // This method gets called by the runtime. Use this method to add services to the container.</span></span>
<span class="line"><span>        public void ConfigureServices(IServiceCollection services)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            /*  An unhandled exception was thrown by the application.</span></span>
<span class="line"><span>                System.InvalidOperationException: No service for type</span></span>
<span class="line"><span>                &#39;Microsoft.AspNetCore.Mvc.ViewFeatures.ITempDataDictionaryFactory&#39; has been registered.</span></span>
<span class="line"><span>                Solution: Use AddMvc() instead of AddMvcCore() in Startup.cs and it will work.</span></span>
<span class="line"><span>            */</span></span>
<span class="line"><span>            // services.AddMvcCore();</span></span>
<span class="line"><span>            services.AddMvc();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.</span></span>
<span class="line"><span>        public void Configure(IApplicationBuilder app, IHostingEnvironment env)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            app.UseStaticFiles();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            app.UseMvc(routes =&gt;</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                routes.MapRoute(</span></span>
<span class="line"><span>                    name: &quot;default&quot;,</span></span>
<span class="line"><span>                    template: &quot;{controller=Home}/{action=Index}/{id?}&quot;);</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/*</span></span>
<span class="line"><span>wwwroot/css</span></span>
<span class="line"><span>wwwroot/images</span></span>
<span class="line"><span>wwwroot/js</span></span>
<span class="line"><span>wwwroot/lib</span></span>
<span class="line"><span>wwwroot/favicon.ico</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Views/Shared/_Layout.cshtml</span></span>
<span class="line"><span>Views/Shared/Error.cshtml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Views/Home/About.cshtml</span></span>
<span class="line"><span>Views/Home/Contact.cshtml</span></span>
<span class="line"><span>Views/Home/Index.cshtml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>These files are quite long to be shown in this article but you can view them at: </span></span>
<span class="line"><span>https://github.com/kataras/iris/tree/master/_benchmarks/netcore-mvc-templates</span></span></code></pre></div><p>運行 .NET Core 服務項目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd netcore-mvc-templates</span></span>
<span class="line"><span>$ dotnet run -c Release</span></span>
<span class="line"><span>Hosting environment: Production</span></span>
<span class="line"><span>Content root path: C:\\mygopath\\src\\github.com\\kataras\\iris\\_benchmarks\\netcore-mvc-templates</span></span>
<span class="line"><span>Now listening on: http://localhost:5000</span></span>
<span class="line"><span>Application started. Press Ctrl+C to shut down.</span></span></code></pre></div><p>運行 HTTP 基準工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Bombarding http://localhost:5000 with 1000000 requests using 125 connections</span></span>
<span class="line"><span> 1000000 / 1000000 [====================================================] 100.00% 1m20s</span></span>
<span class="line"><span>Done!</span></span>
<span class="line"><span>Statistics Avg Stdev Max</span></span>
<span class="line"><span> Reqs/sec 11738.60 7741.36 125887</span></span>
<span class="line"><span> Latency 10.10ms 22.10ms 1.97s</span></span>
<span class="line"><span> HTTP codes:</span></span>
<span class="line"><span> 1xx — 0, 2xx — 1000000, 3xx — 0, 4xx — 0, 5xx — 0</span></span>
<span class="line"><span> others — 0</span></span>
<span class="line"><span> Throughput: 89.03MB/s</span></span></code></pre></div><h4 id="iris-mvc-使用的模板" tabindex="-1">Iris MVC 使用的模板 <a class="header-anchor" href="#iris-mvc-使用的模板" aria-label="Permalink to “Iris MVC 使用的模板”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package controllers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;github.com/kataras/iris/mvc&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type AboutController struct{ mvc.Controller }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (c *AboutController) Get() {</span></span>
<span class="line"><span>	c.Data[&quot;Title&quot;] = &quot;About&quot;</span></span>
<span class="line"><span>	c.Data[&quot;Message&quot;] = &quot;Your application description page.&quot;</span></span>
<span class="line"><span>	c.Tmpl = &quot;about.html&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package controllers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;github.com/kataras/iris/mvc&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type ContactController struct{ mvc.Controller }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (c *ContactController) Get() {</span></span>
<span class="line"><span>	c.Data[&quot;Title&quot;] = &quot;Contact&quot;</span></span>
<span class="line"><span>	c.Data[&quot;Message&quot;] = &quot;Your contact page.&quot;</span></span>
<span class="line"><span>	c.Tmpl = &quot;contact.html&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package models</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// HTTPError a silly structure to keep our error page data.</span></span>
<span class="line"><span>type HTTPError struct {</span></span>
<span class="line"><span>	Title string</span></span>
<span class="line"><span>	Code  int</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package controllers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;github.com/kataras/iris/mvc&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type IndexController struct{ mvc.Controller }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (c *IndexController) Get() {</span></span>
<span class="line"><span>	c.Data[&quot;Title&quot;] = &quot;Home Page&quot;</span></span>
<span class="line"><span>	c.Tmpl = &quot;index.html&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;github.com/kataras/iris/_benchmarks/iris-mvc-templates/controllers&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&quot;github.com/kataras/iris&quot;</span></span>
<span class="line"><span>	&quot;github.com/kataras/iris/context&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const (</span></span>
<span class="line"><span>	// templatesDir is the exactly the same path that .NET Core is using for its templates,</span></span>
<span class="line"><span>	// in order to reduce the size in the repository.</span></span>
<span class="line"><span>	// Change the &quot;C\\\\mygopath&quot; to your own GOPATH.</span></span>
<span class="line"><span>	templatesDir = &quot;C:\\\\mygopath\\\\src\\\\github.com\\\\kataras\\\\iris\\\\_benchmarks\\\\netcore-mvc-templates\\\\wwwroot&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	app := iris.New()</span></span>
<span class="line"><span>	app.Configure(configure)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	app.Controller(&quot;/&quot;, new(controllers.IndexController))</span></span>
<span class="line"><span>	app.Controller(&quot;/about&quot;, new(controllers.AboutController))</span></span>
<span class="line"><span>	app.Controller(&quot;/contact&quot;, new(controllers.ContactController))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	app.Run(iris.Addr(&quot;:5000&quot;), iris.WithoutVersionChecker)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func configure(app *iris.Application) {</span></span>
<span class="line"><span>	app.RegisterView(iris.HTML(&quot;./views&quot;, &quot;.html&quot;).Layout(&quot;shared/layout.html&quot;))</span></span>
<span class="line"><span>	app.StaticWeb(&quot;/public&quot;, templatesDir)</span></span>
<span class="line"><span>	app.OnAnyErrorCode(onError)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type err struct {</span></span>
<span class="line"><span>	Title string</span></span>
<span class="line"><span>	Code  int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func onError(ctx context.Context) {</span></span>
<span class="line"><span>	ctx.ViewData(&quot;&quot;, err{&quot;Error&quot;, ctx.GetStatusCode()})</span></span>
<span class="line"><span>	ctx.View(&quot;shared/error.html&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/*</span></span>
<span class="line"><span>../netcore-mvc-templates/wwwroot/css</span></span>
<span class="line"><span>../netcore-mvc-templates/wwwroot/images</span></span>
<span class="line"><span>../netcore-mvc-templates/wwwroot/js</span></span>
<span class="line"><span>../netcore-mvc-templates/wwwroot/lib</span></span>
<span class="line"><span>../netcore-mvc-templates/wwwroot/favicon.ico</span></span>
<span class="line"><span>views/shared/layout.html</span></span>
<span class="line"><span>views/shared/error.html</span></span>
<span class="line"><span>views/about.html</span></span>
<span class="line"><span>views/contact.html</span></span>
<span class="line"><span>views/index.html</span></span>
<span class="line"><span>These files are quite long to be shown in this article but you can view them at: </span></span>
<span class="line"><span>https://github.com/kataras/iris/tree/master/_benchmarks/iris-mvc-templates</span></span>
<span class="line"><span>*/</span></span></code></pre></div><p>運行 Go 服務項目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd iris-mvc-templates</span></span>
<span class="line"><span>$ go run main.go</span></span>
<span class="line"><span>Now listening on: http://localhost:5000</span></span>
<span class="line"><span>Application started. Press CTRL+C to shut down.</span></span></code></pre></div><p>運行 HTTP 基準工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Bombarding http://localhost:5000 with 1000000 requests using 125 connections</span></span>
<span class="line"><span> 1000000 / 1000000 [======================================================] 100.00% 37s</span></span>
<span class="line"><span>Done!</span></span>
<span class="line"><span>Statistics Avg Stdev Max</span></span>
<span class="line"><span> Reqs/sec 26656.76 1944.73 31188</span></span>
<span class="line"><span> Latency 4.69ms 1.20ms 22.52ms</span></span>
<span class="line"><span> HTTP codes:</span></span>
<span class="line"><span> 1xx — 0, 2xx — 1000000, 3xx — 0, 4xx — 0, 5xx — 0</span></span>
<span class="line"><span> others — 0</span></span>
<span class="line"><span> Throughput: 192.51MB/s</span></span></code></pre></div><h4 id="總結-1" tabindex="-1">總結 <a class="header-anchor" href="#總結-1" aria-label="Permalink to “總結”">​</a></h4><ul><li>完成 <code>1000000 個請求</code>的時間 - 越短越好。</li><li>請求次數/每秒 - 越大越好。</li><li>等待時間 — 越短越好。</li><li>內存使用 — 越小越好。</li><li>吞吐量 — 越大越好。</li></ul><p>.NET Core MVC 模板應用程序，運行 1 分鐘 20 秒，每秒接納 11738.60 個請求，同時每秒生成 89.03M 頁面，平均 10.10ms 等待，最大時到 1.97s，內存使用大約為 193MB（不包括 dotnet 框架）。</p><p>Iris MVC 模板應用程序，運行 37 秒，每秒接納 26656.76 個請求，同時每秒生成 192.51M 頁面，平均 1.18ms 等待，最大時到 22.52ms，內存使用大約為 17MB。</p><h3 id="接下來呢" tabindex="-1">接下來呢？ <a class="header-anchor" href="#接下來呢" aria-label="Permalink to “接下來呢？”">​</a></h3>`,28)),a("p",null,[i(p,{href:"https://github.com/kataras/iris/tree/master/_benchmarks"},{default:e(()=>[...s[62]||(s[62]=[n("這裏",-1)])]),_:1}),s[63]||(s[63]=n("有上面所示的源代碼，請下載下來，在您本地以同樣的基準運行，然後把運行結果在這兒給大家分享。",-1))]),a("p",null,[s[65]||(s[65]=n("想添加 Go 或 C# .net core WEB 服務框架到列表的朋友請向",-1)),i(p,{href:"https://github.com/kataras/iris"},{default:e(()=>[...s[64]||(s[64]=[n("這個倉庫",-1)])]),_:1}),s[66]||(s[66]=n("的 ",-1)),s[67]||(s[67]=a("code",null,"_benchmarks ",-1)),s[68]||(s[68]=n(" 目錄推送 PR。",-1))]),a("p",null,[s[70]||(s[70]=n("我也需要親自感謝下 ",-1)),i(p,{href:"https://dev.to/kataras/go-vsnet-core-in-terms-of-http-performance"},{default:e(()=>[...s[69]||(s[69]=[n("dev.to",-1)])]),_:1}),s[71]||(s[71]=n(" 團隊，感謝把我的這篇文章分享到他們的 Twitter 賬户。",-1))]),s[104]||(s[104]=a("p",null,"感謝大家真心反饋，玩得開心！",-1)),s[105]||(s[105]=a("h4",{id:"更新-2017-年-8-月-21-週一",tabindex:"-1"},[n("更新 : 2017 年 8 月 21 ，週一 "),a("a",{class:"header-anchor",href:"#更新-2017-年-8-月-21-週一","aria-label":"Permalink to “更新 : 2017 年 8 月 21 ，週一”"},"​")],-1)),s[106]||(s[106]=a("p",null,"很多人聯繫我，希望看到一個基於 .NET Core 的較低級別 Kestrel 的基準測試文章。",-1)),a("p",null,[s[73]||(s[73]=n("因此我完成了，請點擊下面的",-1)),i(p,{href:"https://medium.com/@kataras/iris-go-vs-net-core-kestrel-in-terms-of-http-performance-806195dc93d5"},{default:e(()=>[...s[72]||(s[72]=[n("鏈接",-1)])]),_:1}),s[74]||(s[74]=n("來了解 Kestrel 和 Iris 之間的性能差異，它還包含一個會話存儲管理基準！",-1))]),s[107]||(s[107]=a("hr",null,null,-1)),a("p",null,[s[76]||(s[76]=n("via: ",-1)),i(p,{href:"https://hackernoon.com/go-vs-net-core-in-terms-of-http-performance-7535a61b67b8"},{default:e(()=>[...s[75]||(s[75]=[n("https://hackernoon.com/go-vs-net-core-in-terms-of-http-performance-7535a61b67b8",-1)])]),_:1})]),a("p",null,[s[80]||(s[80]=n("作者：",-1)),i(p,{href:"https://hackernoon.com/@kataras?source=post_header_lockup"},{default:e(()=>[...s[77]||(s[77]=[n("Gerasimos Maropoulos",-1)])]),_:1}),s[81]||(s[81]=n(" 譯者：",-1)),i(p,{href:"https://github.com/runningwater"},{default:e(()=>[...s[78]||(s[78]=[n("runningwater",-1)])]),_:1}),s[82]||(s[82]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[79]||(s[79]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[85]||(s[85]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[83]||(s[83]=[n("LCTT",-1)])]),_:1}),s[86]||(s[86]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[84]||(s[84]=[n("Linux中國",-1)])]),_:1}),s[87]||(s[87]=n(" 榮譽推出",-1))])])}const T=t(u,[["render",d]]);export{v as __pageData,T as default};
