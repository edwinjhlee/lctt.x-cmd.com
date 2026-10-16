import{_ as l,a0 as o,w as r,s as u,ao as i,I as n,a1 as t,A as p,x as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"用 Python 测试 API 的 3 种方式 | LCTT x X-CMD","titleTemplate":false,"description":"用 Python 测试 API 的 3 种方式 | LCTT (202208) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Python 测试 API 的 3 种方式 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Python 测试 API 的 3 种方式 | LCTT (202208) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202208/20210921 3 ways to test your API with Python","title":"用 Python 测试 API 的 3 种方式","tag":"202208","desc":""},"relativePath":"202208/20210921 3 ways to test your API with Python.md","filePath":"[post].md"}'),d={name:"202208/20210921 3 ways to test your API with Python.md"};function c(h,s,k,q,g,f){const e=o("Link");return r(),u("div",null,[s[47]||(s[47]=i('<h1 id="用-python-测试-api-的-3-种方式" tabindex="-1">用 Python 测试 API 的 3 种方式 <a class="header-anchor" href="#用-python-测试-api-的-3-种方式" aria-label="Permalink to “用 Python 测试 API 的 3 种方式”">​</a></h1><blockquote><p>单元测试可能令人生畏，但是这些 Python 模块会使你的生活变得更容易。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202208/18/180800clp08p82pi838zrs.jpg" alt=""></p><p>在这个教程中，你将学到如何对执行 HTTP 请求代码的进行单元测试。也就是说，你将看到用 Python 对 API 进行单元测试的艺术。</p><p>单元测试是指对单个行为的测试。在测试中，一个众所周知的经验法则就是隔离那些需要外部依赖的代码。</p><p>比如，当测试一段执行 HTTP 请求的代码时，建议在测试过程中，把真正的调用替换成一个假的的调用。这种情况下，每次运行测试的时候，就可以对它进行单元测试，而不需要执行一个真正的 HTTP 请求。</p><p>问题就是，<em>怎样才能隔离这些代码？</em></p><p>这就是我希望在这篇博文中回答的问题！我不仅会向你展示如果去做，而且也会权衡不同方法之间的优点和缺点。</p><p>要求：</p>',9)),n("ul",null,[n("li",null,[t(e,{href:"https://miguendes.me/how-i-set-up-my-python-workspace"},{default:p(()=>[...s[0]||(s[0]=[a("Python 3.8",-1)])]),_:1})]),s[1]||(s[1]=n("li",null,"pytest-mock",-1)),s[2]||(s[2]=n("li",null,"requests",-1)),s[3]||(s[3]=n("li",null,"flask",-1)),s[4]||(s[4]=n("li",null,"responses",-1)),s[5]||(s[5]=n("li",null,"VCR.py",-1))]),s[48]||(s[48]=n("h3",{id:"使用一个天气状况-rest-api-的演示程序",tabindex:"-1"},[a("使用一个天气状况 REST API 的演示程序 "),n("a",{class:"header-anchor",href:"#使用一个天气状况-rest-api-的演示程序","aria-label":"Permalink to “使用一个天气状况 REST API 的演示程序”"},"​")],-1)),s[49]||(s[49]=n("p",null,"为了更好的解决这个问题，假设你正在创建一个天气状况的应用。这个应用使用第三方天气状况 REST API 来检索一个城市的天气信息。其中一个需求是生成一个简单的 HTML 页面，像下面这个图片：",-1)),s[50]||(s[50]=n("p",null,[n("img",{src:"https://opensource.com/sites/default/files/sbzkkiywh.jpeg",alt:"web page displaying London weather"})],-1)),s[51]||(s[51]=n("p",null,[n("em",null,"伦敦的天气，OpenWeatherMap。图片是作者自己制作的。")],-1)),n("p",null,[s[7]||(s[7]=a("为了获得天气的信息，必须得去某个地方找。幸运的是，通过 ",-1)),t(e,{href:"https://miguendes.me/how-i-set-up-my-python-workspace"},{default:p(()=>[...s[6]||(s[6]=[a("OpenWeatherMap",-1)])]),_:1}),s[8]||(s[8]=a(" 的 REST API 服务，可以获得一切需要的信息。",-1))]),s[52]||(s[52]=i(`<p><em>好的，很棒，但是我该怎么用呢？</em></p><p>通过发送一个 <code>GET</code> 请求到：<code>https://api.openweathermap.org/data/2.5/weather?q={city_name}&amp;appid={api_key}&amp;units=metric</code>，就可以获得你所需要的所有东西。在这个教程中，我会把城市名字设置成一个参数，并确定使用公制单位。</p><h3 id="检索数据" tabindex="-1">检索数据 <a class="header-anchor" href="#检索数据" aria-label="Permalink to “检索数据”">​</a></h3><p>使用 <code>requests</code> 模块来检索天气数据。你可以创建一个接收城市名字作为参数的函数，然后返回一个 JSON。JSON 包含温度、天气状况的描述、日出和日落时间等数据。</p><p>下面的例子演示了这样一个函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def find_weather_for(city: str) -&gt; dict:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Queries the weather API and returns the weather data for a particular city.&quot;&quot;&quot;</span></span>
<span class="line"><span>    url = API.format(city_name=city, api_key=API_KEY)</span></span>
<span class="line"><span>    resp = requests.get(url)</span></span>
<span class="line"><span>    return resp.json()</span></span></code></pre></div><p>这个 URL 是由两个全局变量构成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>BASE_URL = &quot;https://api.openweathermap.org/data/2.5/weather&quot;</span></span>
<span class="line"><span>API = BASE_URL + &quot;?q={city_name}&amp;amp;appid={api_key}&amp;amp;units=metric&quot;</span></span></code></pre></div><p>API 以这个格式返回了一个 JSON：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;coord&quot;: {</span></span>
<span class="line"><span>    &quot;lon&quot;: -0.13,</span></span>
<span class="line"><span>    &quot;lat&quot;: 51.51</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;weather&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;id&quot;: 800,</span></span>
<span class="line"><span>      &quot;main&quot;: &quot;Clear&quot;,</span></span>
<span class="line"><span>      &quot;description&quot;: &quot;clear sky&quot;,</span></span>
<span class="line"><span>      &quot;icon&quot;: &quot;01d&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;base&quot;: &quot;stations&quot;,</span></span>
<span class="line"><span>  &quot;main&quot;: {</span></span>
<span class="line"><span>    &quot;temp&quot;: 16.53,</span></span>
<span class="line"><span>    &quot;feels_like&quot;: 15.52,</span></span>
<span class="line"><span>    &quot;temp_min&quot;: 15,</span></span>
<span class="line"><span>    &quot;temp_max&quot;: 17.78,</span></span>
<span class="line"><span>    &quot;pressure&quot;: 1023,</span></span>
<span class="line"><span>    &quot;humidity&quot;: 72</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;visibility&quot;: 10000,</span></span>
<span class="line"><span>  &quot;wind&quot;: {</span></span>
<span class="line"><span>    &quot;speed&quot;: 2.1,</span></span>
<span class="line"><span>    &quot;deg&quot;: 40</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;clouds&quot;: {</span></span>
<span class="line"><span>    &quot;all&quot;: 0</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;dt&quot;: 1600420164,</span></span>
<span class="line"><span>  &quot;sys&quot;: {</span></span>
<span class="line"><span>    &quot;type&quot;: 1,</span></span>
<span class="line"><span>    &quot;id&quot;: 1414,</span></span>
<span class="line"><span>    &quot;country&quot;: &quot;GB&quot;,</span></span>
<span class="line"><span>    &quot;sunrise&quot;: 1600407646,</span></span>
<span class="line"><span>    &quot;sunset&quot;: 1600452509</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;timezone&quot;: 3600,</span></span>
<span class="line"><span>  &quot;id&quot;: 2643743,</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;London&quot;,</span></span>
<span class="line"><span>  &quot;cod&quot;: 200</span></span></code></pre></div><p>当调用 <code>resp.json()</code> 的时候，数据是以 Python 字典的形式返回的。为了封装所有细节，可以用 <code>dataclass</code> 来表示它们。这个类有一个工厂方法，可以获得这个字典并且返回一个 <code>WeatherInfo</code> 实例。</p><p>这种办法很好，因为可以保持这种表示方法的稳定。比如，如果 API 改变了 JSON 的结构，就可以在同一个地方（<code>from_dict</code> 方法中）修改逻辑。其他代码不会受影响。你也可以从不同的源获得信息，然后把它们都整合到 <code>from_dict</code> 方法中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
<span class="line"><span>class WeatherInfo:</span></span>
<span class="line"><span>    temp: float</span></span>
<span class="line"><span>    sunset: str</span></span>
<span class="line"><span>    sunrise: str</span></span>
<span class="line"><span>    temp_min: float</span></span>
<span class="line"><span>    temp_max: float</span></span>
<span class="line"><span>    desc: str</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def from_dict(cls, data: dict) -&gt; &quot;WeatherInfo&quot;:</span></span>
<span class="line"><span>        return cls(</span></span>
<span class="line"><span>            temp=data[&quot;main&quot;][&quot;temp&quot;],</span></span>
<span class="line"><span>            temp_min=data[&quot;main&quot;][&quot;temp_min&quot;],</span></span>
<span class="line"><span>            temp_max=data[&quot;main&quot;][&quot;temp_max&quot;],</span></span>
<span class="line"><span>            desc=data[&quot;weather&quot;][0][&quot;main&quot;],</span></span>
<span class="line"><span>            sunset=format_date(data[&quot;sys&quot;][&quot;sunset&quot;]),</span></span>
<span class="line"><span>            sunrise=format_date(data[&quot;sys&quot;][&quot;sunrise&quot;]),</span></span>
<span class="line"><span>        )</span></span></code></pre></div><p>现在来创建一个叫做 <code>retrieve_weather</code> 的函数。使用这个函数调用 API，然后返回一个 <code>WeatherInfo</code>，这样就可创建你自己的 HTML 页面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def retrieve_weather(city: str) -&gt; WeatherInfo:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Finds the weather for a city and returns a WeatherInfo instance.&quot;&quot;&quot;</span></span>
<span class="line"><span>    data = find_weather_for(city)</span></span>
<span class="line"><span>    return WeatherInfo.from_dict(data)</span></span></code></pre></div><p>很好，我们的 app 现在有一些基础了。在继续之前，对这些函数进行单元测试。</p><h3 id="_1、使用-mock-测试-api" tabindex="-1">1、使用 mock 测试 API <a class="header-anchor" href="#_1、使用-mock-测试-api" aria-label="Permalink to “1、使用 mock 测试 API”">​</a></h3>`,17)),n("p",null,[t(e,{href:"https://en.wikipedia.org/wiki/Mock_object"},{default:p(()=>[...s[9]||(s[9]=[a("根据维基百科",-1)])]),_:1}),s[10]||(s[10]=i("，<ruby>模拟对象<rt>mock object</rt></ruby>是通过模仿真实对象来模拟它行为的一个对象。在 Python 中，你可以使用 <code>unittest.mock</code> 库来<ruby>模拟<rt>mock</rt></ruby>任何对象，这个库是标准库中的一部分。为了测试 <code>retrieve_weather</code> 函数，可以模拟 <code>requests.get</code>，然后返回静态数据。",11))]),s[53]||(s[53]=n("h4",{id:"pytest-mock",tabindex:"-1"},[a("pytest-mock "),n("a",{class:"header-anchor",href:"#pytest-mock","aria-label":"Permalink to “pytest-mock”"},"​")],-1)),n("p",null,[s[12]||(s[12]=a("在这个教程中，会使用 ",-1)),s[13]||(s[13]=n("code",null,"pytest",-1)),s[14]||(s[14]=a(" 作为测试框架。通过插件，",-1)),s[15]||(s[15]=n("code",null,"pytest",-1)),s[16]||(s[16]=a(" 库是非常具有扩展性的。为了完成我们的模拟目标，要用 ",-1)),s[17]||(s[17]=n("code",null,"pytest-mock",-1)),s[18]||(s[18]=a("。这个插件抽象化了大量 ",-1)),s[19]||(s[19]=n("code",null,"unittest.mock",-1)),s[20]||(s[20]=a(" 中的设置，也会让你的代码更简洁。如果你感兴趣的话，我在 ",-1)),t(e,{href:"https://miguendes.me/7-pytest-plugins-you-must-definitely-use"},{default:p(()=>[...s[11]||(s[11]=[a("另一篇博文中",-1)])]),_:1}),s[21]||(s[21]=a(" 会有更多的讨论。",-1))]),s[54]||(s[54]=i(`<p><em>好的，言归正传，现在看代码。</em></p><p>下面是一个 <code>retrieve_weather</code> 函数的完整测试用例。这个测试使用了两个 <code>fixture</code>：一个是由 <code>pytest-mock</code> 插件提供的 <code>mocker</code> fixture, 还有一个是我们自己的。就是从之前请求中保存的静态数据。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@pytest.fixture()</span></span>
<span class="line"><span>def fake_weather_info():</span></span>
<span class="line"><span>    &quot;&quot;&quot;Fixture that returns a static weather data.&quot;&quot;&quot;</span></span>
<span class="line"><span>    with open(&quot;tests/resources/weather.json&quot;) as f:</span></span>
<span class="line"><span>        return json.load(f)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def test_retrieve_weather_using_mocks(mocker, fake_weather_info):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Given a city name, test that a HTML report about the weather is generated</span></span>
<span class="line"><span>    correctly.&quot;&quot;&quot;</span></span>
<span class="line"><span>    # Creates a fake requests response object</span></span>
<span class="line"><span>    fake_resp = mocker.Mock()</span></span>
<span class="line"><span>    # Mock the json method to return the static weather data</span></span>
<span class="line"><span>    fake_resp.json = mocker.Mock(return_value=fake_weather_info)</span></span>
<span class="line"><span>    # Mock the status code</span></span>
<span class="line"><span>    fake_resp.status_code = HTTPStatus.OK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    mocker.patch(&quot;weather_app.requests.get&quot;, return_value=fake_resp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    weather_info = retrieve_weather(city=&quot;London&quot;)</span></span>
<span class="line"><span>    assert weather_info == WeatherInfo.from_dict(fake_weather_info)</span></span></code></pre></div><p>如果运行这个测试，会获得下面的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>============================= test session starts ==============================</span></span>
<span class="line"><span>...[omitted]...</span></span>
<span class="line"><span>tests/test_weather_app.py::test_retrieve_weather_using_mocks PASSED      [100%]</span></span>
<span class="line"><span>============================== 1 passed in 0.20s ===============================</span></span>
<span class="line"><span>Process finished with exit code 0</span></span></code></pre></div><p>很好，测试通过了！但是...生活并非一帆风顺。这个测试有优点，也有缺点。现在来看一下。</p><h4 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to “优点”">​</a></h4><p>好的，有一个之前讨论过的优点就是，通过模拟 API 的返回值，测试变得简单了。将通信和 API 隔离，这样测试就可以预测了。这样总会返回你需要的东西。</p><h4 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to “缺点”">​</a></h4><p>对于缺点，问题就是，如果不再想用 <code>requests</code> 了，并且决定回到标准库的 <code>urllib</code>，怎么办。每次改变 <code>find_weather_for</code> 的代码，都得去适配测试。好的测试是，当你修改代码实现的时候，测试时不需要改变的。所以，通过模拟，你最终把测试和实现耦合在了一起。</p><p>而且，另一个不好的方面是你需要在调用函数之前进行大量设置——至少是三行代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>    # Creates a fake requests response object</span></span>
<span class="line"><span>    fake_resp = mocker.Mock()</span></span>
<span class="line"><span>    # Mock the json method to return the static weather data</span></span>
<span class="line"><span>    fake_resp.json = mocker.Mock(return_value=fake_weather_info)</span></span>
<span class="line"><span>    # Mock the status code</span></span>
<span class="line"><span>    fake_resp.status_code = HTTPStatus.OK</span></span>
<span class="line"><span>...</span></span></code></pre></div><p><em>我可以做的更好吗？</em></p><p>是的，请继续看。我现在看看怎么改进一点。</p><h3 id="使用-responses" tabindex="-1">使用 responses <a class="header-anchor" href="#使用-responses" aria-label="Permalink to “使用 responses”">​</a></h3><p>用 <code>mocker</code> 功能模拟 <code>requests</code> 有点问题，就是有很多设置。避免这个问题的一个好办法就是使用一个库，可以拦截 <code>requests</code> 调用并且给它们 <ruby>打补丁<rt>patch</rt></ruby>。有不止一个库可以做这件事，但是对我来说最简单的是 <code>responses</code>。我们来看一下怎么用，并且替换 <code>mock</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@responses.activate</span></span>
<span class="line"><span>def test_retrieve_weather_using_responses(fake_weather_info):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Given a city name, test that a HTML report about the weather is generated</span></span>
<span class="line"><span>    correctly.&quot;&quot;&quot;</span></span>
<span class="line"><span>    api_uri = API.format(city_name=&quot;London&quot;, api_key=API_KEY)</span></span>
<span class="line"><span>    responses.add(responses.GET, api_uri, json=fake_weather_info, status=HTTPStatus.OK)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    weather_info = retrieve_weather(city=&quot;London&quot;)</span></span>
<span class="line"><span>    assert weather_info == WeatherInfo.from_dict(fake_weather_info)</span></span></code></pre></div><p>这个函数再次使用了我们的 <code>fake_weather_info</code> fixture。</p><p>然后运行测试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>============================= test session starts ==============================</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>tests/test_weather_app.py::test_retrieve_weather_using_responses PASSED  [100%]</span></span>
<span class="line"><span>============================== 1 passed in 0.19s ===============================</span></span></code></pre></div><p>非常好！测试也通过了。但是...并不是那么棒。</p><h4 id="优点-1" tabindex="-1">优点 <a class="header-anchor" href="#优点-1" aria-label="Permalink to “优点”">​</a></h4><p>使用诸如 <code>responses</code> 这样的库，好的方面就是不需要再给 <code>requests</code> <ruby>打补丁<rt>patch</rt></ruby>。通过将这层抽象交给库，可以减少一些设置。然而，如果你没注意到的话，还是有一些问题。</p><h4 id="缺点-1" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-1" aria-label="Permalink to “缺点”">​</a></h4><p>和 <code>unittest.mock</code> 很像，测试和实现再一次耦合了。如果替换 <code>requests</code>，测试就不能用了。</p><h3 id="_2、使用适配器测试-api" tabindex="-1">2、使用适配器测试 API <a class="header-anchor" href="#_2、使用适配器测试-api" aria-label="Permalink to “2、使用适配器测试 API”">​</a></h3><p><em>如果用模拟让测试耦合了，我能做什么？</em></p><p>设想下面的场景：假如说你不能再用 <code>requests</code> 了，而且必须要用 <code>urllib</code> 替换，因为这是 Python 自带的。不仅仅是这样，你了解了不要把测试代码和实现耦合，并且你想今后都避免这种情况。你想替换 <code>urllib</code>，也不想重写测试了。</p><p>事实证明，你可以抽象出执行 <code>GET</code> 请求的代码。</p><p><em>真的吗？怎么做？</em></p><p>可以使用<ruby>适配器<rt>adapter</rt></ruby>来抽象它。适配器是一种用来封装其他类的接口，并作为新接口暴露出来的一种设计模式。用这种方式，就可以修改适配器而不需要修改代码了。比如，在 <code>find_weather_for</code> 函数中，封装关于 <code>requests</code> 的所有细节，然后把这部分暴露给只接受 URL 的函数。</p><p>所以，这个：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def find_weather_for(city: str) -&gt; dict:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Queries the weather API and returns the weather data for a particular city.&quot;&quot;&quot;</span></span>
<span class="line"><span>    url = API.format(city_name=city, api_key=API_KEY)</span></span>
<span class="line"><span>    resp = requests.get(url)</span></span>
<span class="line"><span>    return resp.json()</span></span></code></pre></div><p>变成这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def find_weather_for(city: str) -&gt; dict:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Queries the weather API and returns the weather data for a particular city.&quot;&quot;&quot;</span></span>
<span class="line"><span>    url = API.format(city_name=city, api_key=API_KEY)</span></span>
<span class="line"><span>    return adapter(url)</span></span></code></pre></div><p>然后适配器变成这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def requests_adapter(url: str) -&gt; dict:</span></span>
<span class="line"><span>    resp = requests.get(url)</span></span>
<span class="line"><span>    return resp.json()</span></span></code></pre></div><p>现在到了重构 <code>retrieve_weather</code> 函数的时候：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def retrieve_weather(city: str) -&gt; WeatherInfo:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Finds the weather for a city and returns a WeatherInfo instance.&quot;&quot;&quot;</span></span>
<span class="line"><span>    data = find_weather_for(city, adapter=requests_adapter)</span></span>
<span class="line"><span>    return WeatherInfo.from_dict(data)</span></span></code></pre></div><p>所以，如果你决定改为使用 <code>urllib</code> 的实现，只要换一下适配器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def urllib_adapter(url: str) -&gt; dict:</span></span>
<span class="line"><span>    &quot;&quot;&quot;An adapter that encapsulates urllib.urlopen&quot;&quot;&quot;</span></span>
<span class="line"><span>    with urllib.request.urlopen(url) as response:</span></span>
<span class="line"><span>        resp = response.read()</span></span>
<span class="line"><span>    return json.loads(resp)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def retrieve_weather(city: str) -&gt; WeatherInfo:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Finds the weather for a city and returns a WeatherInfo instance.&quot;&quot;&quot;</span></span>
<span class="line"><span>    data = find_weather_for(city, adapter=urllib_adapter)</span></span>
<span class="line"><span>    return WeatherInfo.from_dict(data)</span></span></code></pre></div><p><em>好的，那测试怎么做？</em></p><p>为了测试 <code>retrieve_weather</code>, 只要创建一个在测试过程中使用的假的适配器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@responses.activate</span></span>
<span class="line"><span>def test_retrieve_weather_using_adapter(</span></span>
<span class="line"><span>    fake_weather_info,</span></span>
<span class="line"><span>):</span></span>
<span class="line"><span>    def fake_adapter(url: str):</span></span>
<span class="line"><span>        return fake_weather_info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    weather_info = retrieve_weather(city=&quot;London&quot;, adapter=fake_adapter)</span></span>
<span class="line"><span>    assert weather_info == WeatherInfo.from_dict(fake_weather_info)</span></span></code></pre></div><p>如果运行测试，会获得：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>============================= test session starts ==============================</span></span>
<span class="line"><span>tests/test_weather_app.py::test_retrieve_weather_using_adapter PASSED    [100%]</span></span>
<span class="line"><span>============================== 1 passed in 0.22s ===============================</span></span></code></pre></div><h4 id="优点-2" tabindex="-1">优点 <a class="header-anchor" href="#优点-2" aria-label="Permalink to “优点”">​</a></h4>`,49)),n("p",null,[s[24]||(s[24]=a("这个方法的优点是可以成功将测试和实现解耦。使用",-1)),n("ruby",null,[t(e,{href:"https://stackoverflow.com/questions/130794/what-is-dependency-injection"},{default:p(()=>[...s[22]||(s[22]=[a("依赖注入",-1)])]),_:1}),s[23]||(s[23]=n("rt",null,"dependency injection",-1))]),s[25]||(s[25]=a("在测试期间注入一个假的适配器。你也可以在任何时候更换适配器，包括在运行时。这些事情都不会改变任何行为。",-1))]),s[55]||(s[55]=i(`<h4 id="缺点-2" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-2" aria-label="Permalink to “缺点”">​</a></h4><p>缺点就是，因为你在测试中用了假的适配器，如果在实现中往适配器中引入了一个 bug，测试的时候就不会发现。比如说，往 <code>requests</code> 传入了一个有问题的参数，像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def requests_adapter(url: str) -&gt; dict:</span></span>
<span class="line"><span>    resp = requests.get(url, headers=&lt;some broken headers&gt;)</span></span>
<span class="line"><span>    return resp.json()</span></span></code></pre></div><p>在生产环境中，适配器会有问题，而且单元测试没办法发现。但是事实是，之前的方法也会有同样的问题。这就是为什么不仅要单元测试，并且总是要集成测试。也就是说，要考虑另一个选项。</p><h3 id="_3、使用-vcr-py-测试-api" tabindex="-1">3、使用 VCR.py 测试 API <a class="header-anchor" href="#_3、使用-vcr-py-测试-api" aria-label="Permalink to “3、使用 VCR.py 测试 API”">​</a></h3><p>现在终于到了讨论我们最后一个选项了。诚实地说，我也是最近才发现这个。我用<ruby>模拟<rt>mock</rt></ruby>也很长时间了，而且总是有一些问题。<code>VCR.py</code> 是一个库，它可以简化很多 HTTP 请求的测试。</p><p>它的工作原理是将第一次运行测试的 HTTP 交互记录为一个 YAML 文件，叫做 <code>cassette</code>。请求和响应都会被序列化。当第二次运行测试的时候，<code>VCT.py</code> 将拦截对请求的调用，并且返回一个响应。</p><p>现在看一下下面如何使用 <code>VCR.py</code> 测试 <code>retrieve_weather</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@vcr.use_cassette()</span></span>
<span class="line"><span>def test_retrieve_weather_using_vcr(fake_weather_info):</span></span>
<span class="line"><span>    weather_info = retrieve_weather(city=&quot;London&quot;)</span></span>
<span class="line"><span>    assert weather_info == WeatherInfo.from_dict(fake_weather_info)</span></span></code></pre></div><p><em>天呐，就这样？没有设置？<code>@vcr.use_cassette()</code> 是什么？</em></p><p>是的，就这样！没有设置，只要一个 <code>pytest</code> 标注告诉 VCR 去拦截调用，然后保存 cassette 文件。</p><p><em>cassette 文件是什么样？</em></p><p>好问题。这个文件里有很多东西。这是因为 VCR 保存了交互中的所有细节。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interactions:</span></span>
<span class="line"><span>- request:</span></span>
<span class="line"><span>    body: null</span></span>
<span class="line"><span>    headers:</span></span>
<span class="line"><span>      Accept:</span></span>
<span class="line"><span>      - &#39;*/*&#39;</span></span>
<span class="line"><span>      Accept-Encoding:</span></span>
<span class="line"><span>      - gzip, deflate</span></span>
<span class="line"><span>      Connection:</span></span>
<span class="line"><span>      - keep-alive</span></span>
<span class="line"><span>      User-Agent:</span></span>
<span class="line"><span>      - python-requests/2.24.0</span></span>
<span class="line"><span>    method: GET</span></span>
<span class="line"><span>    uri: https://api.openweathermap.org/data/2.5/weather?q=London&amp;appid=&lt;YOUR API KEY HERE&gt;&amp;units=metric</span></span>
<span class="line"><span>  response:</span></span>
<span class="line"><span>    body:</span></span>
<span class="line"><span>      string: &#39;{&quot;coord&quot;:{&quot;lon&quot;:-0.13,&quot;lat&quot;:51.51},&quot;weather&quot;:[{&quot;id&quot;:800,&quot;main&quot;:&quot;Clear&quot;,&quot;description&quot;:&quot;clearsky&quot;,&quot;icon&quot;:&quot;01d&quot;}],&quot;base&quot;:&quot;stations&quot;,&quot;main&quot;:{&quot;temp&quot;:16.53,&quot;feels_like&quot;:15.52,&quot;temp_min&quot;:15,&quot;temp_max&quot;:17.78,&quot;pressure&quot;:1023,&quot;humidity&quot;:72},&quot;visibility&quot;:10000,&quot;wind&quot;:{&quot;speed&quot;:2.1,&quot;deg&quot;:40},&quot;clouds&quot;:{&quot;all&quot;:0},&quot;dt&quot;:1600420164,&quot;sys&quot;:{&quot;type&quot;:1,&quot;id&quot;:1414,&quot;country&quot;:&quot;GB&quot;,&quot;sunrise&quot;:1600407646,&quot;sunset&quot;:1600452509},&quot;timezone&quot;:3600,&quot;id&quot;:2643743,&quot;name&quot;:&quot;London&quot;,&quot;cod&quot;:200}&#39;</span></span>
<span class="line"><span>    headers:</span></span>
<span class="line"><span>      Access-Control-Allow-Credentials:</span></span>
<span class="line"><span>      - &#39;true&#39;</span></span>
<span class="line"><span>      Access-Control-Allow-Methods:</span></span>
<span class="line"><span>      - GET, POST</span></span>
<span class="line"><span>      Access-Control-Allow-Origin:</span></span>
<span class="line"><span>      - &#39;*&#39;</span></span>
<span class="line"><span>      Connection:</span></span>
<span class="line"><span>      - keep-alive</span></span>
<span class="line"><span>      Content-Length:</span></span>
<span class="line"><span>      - &#39;454&#39;</span></span>
<span class="line"><span>      Content-Type:</span></span>
<span class="line"><span>      - application/json; charset=utf-8</span></span>
<span class="line"><span>      Date:</span></span>
<span class="line"><span>      - Fri, 18 Sep 2020 10:53:25 GMT</span></span>
<span class="line"><span>      Server:</span></span>
<span class="line"><span>      - openresty</span></span>
<span class="line"><span>      X-Cache-Key:</span></span>
<span class="line"><span>      - /data/2.5/weather?q=london&amp;amp;units=metric</span></span>
<span class="line"><span>    status:</span></span>
<span class="line"><span>      code: 200</span></span>
<span class="line"><span>      message: OK</span></span>
<span class="line"><span>version: 1</span></span></code></pre></div><p><em>确实很多！</em></p><p>真的！好的方面就是你不需要留意它。<code>VCR.py</code> 会为你安排好一切。</p><h4 id="优点-3" tabindex="-1">优点 <a class="header-anchor" href="#优点-3" aria-label="Permalink to “优点”">​</a></h4><p>现在看一下优点，我可以至少列出五个：</p><ul><li>没有设置代码。</li><li>测试仍然是分离的，所以很快。</li><li>测试是确定的。</li><li>如果你改了请求，比如说用了错误的 header，测试会失败。</li><li>没有与代码实现耦合，所以你可以换适配器，而且测试会通过。唯一有关系的东西就是请求必须是一样的。</li></ul><h4 id="缺点-3" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-3" aria-label="Permalink to “缺点”">​</a></h4><p>再与模拟相比较，除了避免了错误，还是有一些问题。</p><p>如果 API 提供者出于某种原因修改了数据格式，测试仍然会通过。幸运的是，这种情况并不经常发生，而且在这种重大改变之前，API 提供者通常会给他们的 API 提供不同版本。</p><p>另一个需要考虑的事情是<ruby>就地<rt>in place</rt></ruby><ruby>端到端<rt>end-to-end</rt></ruby>测试。每次服务器运行的时候，这些测试都会调用。顾名思义，这是一个范围更广、更慢的测试。它们会比单元测试覆盖更多。事实上，并不是每个项目都需要使用它们。所以，就我看来，<code>VCR.py</code> 对于大多数人的需求来说都绰绰有余。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>就这么多了。我希望今天你了解了一些有用的东西。测试 API 客户端应用可能会有点吓人。然而，当武装了合适的工具和知识，你就可以驯服这个野兽。</p>`,25)),n("p",null,[s[27]||(s[27]=a("在 ",-1)),t(e,{href:"https://github.com/miguendes/tutorials/tree/master/testing_http"},{default:p(()=>[...s[26]||(s[26]=[a("我的 Github",-1)])]),_:1}),s[28]||(s[28]=a(" 上可以找到这个完整的应用。",-1))]),n("p",null,[n("em",null,[s[30]||(s[30]=a("这篇文章最早发表在 ",-1)),t(e,{href:"https://miguendes.me/3-ways-to-test-api-client-applications-in-python"},{default:p(()=>[...s[29]||(s[29]=[a("作者的个人博客",-1)])]),_:1}),s[31]||(s[31]=a("，授权转载",-1))])]),s[56]||(s[56]=n("hr",null,null,-1)),n("p",null,[s[33]||(s[33]=a("via: ",-1)),t(e,{href:"https://opensource.com/article/21/9/unit-test-python"},{default:p(()=>[...s[32]||(s[32]=[a("https://opensource.com/article/21/9/unit-test-python",-1)])]),_:1})]),n("p",null,[s[38]||(s[38]=a("作者：",-1)),t(e,{href:"https://opensource.com/users/miguendes"},{default:p(()=>[...s[34]||(s[34]=[a("Miguel Brito",-1)])]),_:1}),s[39]||(s[39]=a(" 选题：",-1)),t(e,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[35]||(s[35]=[a("lujun9972",-1)])]),_:1}),s[40]||(s[40]=a(" 译者：",-1)),t(e,{href:"https://github.com/Yufei-Yan"},{default:p(()=>[...s[36]||(s[36]=[a("Yufei-Yan",-1)])]),_:1}),s[41]||(s[41]=a(" 校对：",-1)),t(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[37]||(s[37]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[44]||(s[44]=a("本文由 ",-1)),t(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[42]||(s[42]=[a("LCTT",-1)])]),_:1}),s[45]||(s[45]=a(" 原创编译，",-1)),t(e,{href:"https://linux.cn/"},{default:p(()=>[...s[43]||(s[43]=[a("Linux中国",-1)])]),_:1}),s[46]||(s[46]=a(" 荣誉推出",-1))])])}const _=l(d,[["render",c]]);export{y as __pageData,_ as default};
