import{_ as l,a0 as o,w as r,s as u,ao as i,I as n,a1 as t,A as p,x as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"用 Python 測試 API 的 3 種方式 | LCTT x X-CMD","titleTemplate":false,"description":"用 Python 測試 API 的 3 種方式 | LCTT (202208) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Python 測試 API 的 3 種方式 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Python 測試 API 的 3 種方式 | LCTT (202208) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202208/20210921 3 ways to test your API with Python","title":"用 Python 測試 API 的 3 種方式","tag":"202208","desc":""},"relativePath":"202208/20210921 3 ways to test your API with Python.md","filePath":"[post].md"}'),d={name:"202208/20210921 3 ways to test your API with Python.md"};function c(h,s,k,q,g,f){const e=o("Link");return r(),u("div",null,[s[47]||(s[47]=i('<h1 id="用-python-測試-api-的-3-種方式" tabindex="-1">用 Python 測試 API 的 3 種方式 <a class="header-anchor" href="#用-python-測試-api-的-3-種方式" aria-label="Permalink to “用 Python 測試 API 的 3 種方式”">​</a></h1><blockquote><p>單元測試可能令人生畏，但是這些 Python 模組會使你的生活變得更容易。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202208/18/180800clp08p82pi838zrs.jpg" alt=""></p><p>在這個教程中，你將學到如何對執行 HTTP 請求代碼的進行單元測試。也就是説，你將看到用 Python 對 API 進行單元測試的藝術。</p><p>單元測試是指對單個行為的測試。在測試中，一個眾所周知的經驗法則就是隔離那些需要外部依賴的代碼。</p><p>比如，當測試一段執行 HTTP 請求的代碼時，建議在測試過程中，把真正的調用替換成一個假的的調用。這種情況下，每次運行測試的時候，就可以對它進行單元測試，而不需要執行一個真正的 HTTP 請求。</p><p>問題就是，<em>怎樣才能隔離這些代碼？</em></p><p>這就是我希望在這篇博文中回答的問題！我不僅會向你展示如果去做，而且也會權衡不同方法之間的優點和缺點。</p><p>要求：</p>',9)),n("ul",null,[n("li",null,[t(e,{href:"https://miguendes.me/how-i-set-up-my-python-workspace"},{default:p(()=>[...s[0]||(s[0]=[a("Python 3.8",-1)])]),_:1})]),s[1]||(s[1]=n("li",null,"pytest-mock",-1)),s[2]||(s[2]=n("li",null,"requests",-1)),s[3]||(s[3]=n("li",null,"flask",-1)),s[4]||(s[4]=n("li",null,"responses",-1)),s[5]||(s[5]=n("li",null,"VCR.py",-1))]),s[48]||(s[48]=n("h3",{id:"使用一個天氣狀況-rest-api-的演示程序",tabindex:"-1"},[a("使用一個天氣狀況 REST API 的演示程序 "),n("a",{class:"header-anchor",href:"#使用一個天氣狀況-rest-api-的演示程序","aria-label":"Permalink to “使用一個天氣狀況 REST API 的演示程序”"},"​")],-1)),s[49]||(s[49]=n("p",null,"為了更好的解決這個問題，假設你正在創建一個天氣狀況的應用。這個應用使用第三方天氣狀況 REST API 來檢索一個城市的天氣信息。其中一個需求是生成一個簡單的 HTML 頁面，像下面這個圖片：",-1)),s[50]||(s[50]=n("p",null,[n("img",{src:"https://opensource.com/sites/default/files/sbzkkiywh.jpeg",alt:"web page displaying London weather"})],-1)),s[51]||(s[51]=n("p",null,[n("em",null,"倫敦的天氣，OpenWeatherMap。圖片是作者自己製作的。")],-1)),n("p",null,[s[7]||(s[7]=a("為了獲得天氣的信息，必須得去某個地方找。幸運的是，通過 ",-1)),t(e,{href:"https://miguendes.me/how-i-set-up-my-python-workspace"},{default:p(()=>[...s[6]||(s[6]=[a("OpenWeatherMap",-1)])]),_:1}),s[8]||(s[8]=a(" 的 REST API 服務，可以獲得一切需要的信息。",-1))]),s[52]||(s[52]=i(`<p><em>好的，很棒，但是我該怎麼用呢？</em></p><p>通過發送一個 <code>GET</code> 請求到：<code>https://api.openweathermap.org/data/2.5/weather?q={city_name}&amp;appid={api_key}&amp;units=metric</code>，就可以獲得你所需要的所有東西。在這個教程中，我會把城市名字設置成一個參數，並確定使用公制單位。</p><h3 id="檢索數據" tabindex="-1">檢索數據 <a class="header-anchor" href="#檢索數據" aria-label="Permalink to “檢索數據”">​</a></h3><p>使用 <code>requests</code> 模組來檢索天氣數據。你可以創建一個接收城市名字作為參數的函數，然後返回一個 JSON。JSON 包含温度、天氣狀況的描述、日出和日落時間等數據。</p><p>下面的例子演示了這樣一個函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def find_weather_for(city: str) -&gt; dict:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Queries the weather API and returns the weather data for a particular city.&quot;&quot;&quot;</span></span>
<span class="line"><span>    url = API.format(city_name=city, api_key=API_KEY)</span></span>
<span class="line"><span>    resp = requests.get(url)</span></span>
<span class="line"><span>    return resp.json()</span></span></code></pre></div><p>這個 URL 是由兩個全局變量構成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>BASE_URL = &quot;https://api.openweathermap.org/data/2.5/weather&quot;</span></span>
<span class="line"><span>API = BASE_URL + &quot;?q={city_name}&amp;amp;appid={api_key}&amp;amp;units=metric&quot;</span></span></code></pre></div><p>API 以這個格式返回了一個 JSON：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>  &quot;cod&quot;: 200</span></span></code></pre></div><p>當調用 <code>resp.json()</code> 的時候，數據是以 Python 字典的形式返回的。為了封裝所有細節，可以用 <code>dataclass</code> 來表示它們。這個類有一個工廠方法，可以獲得這個字典並且返回一個 <code>WeatherInfo</code> 實例。</p><p>這種辦法很好，因為可以保持這種表示方法的穩定。比如，如果 API 改變了 JSON 的結構，就可以在同一個地方（<code>from_dict</code> 方法中）修改邏輯。其他代碼不會受影響。你也可以從不同的源獲得信息，然後把它們都整合到 <code>from_dict</code> 方法中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@dataclass</span></span>
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
<span class="line"><span>        )</span></span></code></pre></div><p>現在來創建一個叫做 <code>retrieve_weather</code> 的函數。使用這個函數調用 API，然後返回一個 <code>WeatherInfo</code>，這樣就可創建你自己的 HTML 頁面。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def retrieve_weather(city: str) -&gt; WeatherInfo:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Finds the weather for a city and returns a WeatherInfo instance.&quot;&quot;&quot;</span></span>
<span class="line"><span>    data = find_weather_for(city)</span></span>
<span class="line"><span>    return WeatherInfo.from_dict(data)</span></span></code></pre></div><p>很好，我們的 app 現在有一些基礎了。在繼續之前，對這些函數進行單元測試。</p><h3 id="_1、使用-mock-測試-api" tabindex="-1">1、使用 mock 測試 API <a class="header-anchor" href="#_1、使用-mock-測試-api" aria-label="Permalink to “1、使用 mock 測試 API”">​</a></h3>`,17)),n("p",null,[t(e,{href:"https://en.wikipedia.org/wiki/Mock_object"},{default:p(()=>[...s[9]||(s[9]=[a("根據維基百科",-1)])]),_:1}),s[10]||(s[10]=i("，<ruby>模擬對象<rt>mock object</rt></ruby>是通過模仿真實對象來模擬它行為的一個對象。在 Python 中，你可以使用 <code>unittest.mock</code> 庫來<ruby>模擬<rt>mock</rt></ruby>任何對象，這個庫是標準庫中的一部分。為了測試 <code>retrieve_weather</code> 函數，可以模擬 <code>requests.get</code>，然後返回靜態數據。",11))]),s[53]||(s[53]=n("h4",{id:"pytest-mock",tabindex:"-1"},[a("pytest-mock "),n("a",{class:"header-anchor",href:"#pytest-mock","aria-label":"Permalink to “pytest-mock”"},"​")],-1)),n("p",null,[s[12]||(s[12]=a("在這個教程中，會使用 ",-1)),s[13]||(s[13]=n("code",null,"pytest",-1)),s[14]||(s[14]=a(" 作為測試框架。通過插件，",-1)),s[15]||(s[15]=n("code",null,"pytest",-1)),s[16]||(s[16]=a(" 庫是非常具有擴展性的。為了完成我們的模擬目標，要用 ",-1)),s[17]||(s[17]=n("code",null,"pytest-mock",-1)),s[18]||(s[18]=a("。這個插件抽象化了大量 ",-1)),s[19]||(s[19]=n("code",null,"unittest.mock",-1)),s[20]||(s[20]=a(" 中的設置，也會讓你的代碼更簡潔。如果你感興趣的話，我在 ",-1)),t(e,{href:"https://miguendes.me/7-pytest-plugins-you-must-definitely-use"},{default:p(()=>[...s[11]||(s[11]=[a("另一篇博文中",-1)])]),_:1}),s[21]||(s[21]=a(" 會有更多的討論。",-1))]),s[54]||(s[54]=i(`<p><em>好的，言歸正傳，現在看代碼。</em></p><p>下面是一個 <code>retrieve_weather</code> 函數的完整測試用例。這個測試使用了兩個 <code>fixture</code>：一個是由 <code>pytest-mock</code> 插件提供的 <code>mocker</code> fixture, 還有一個是我們自己的。就是從之前請求中保存的靜態數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@pytest.fixture()</span></span>
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
<span class="line"><span>    assert weather_info == WeatherInfo.from_dict(fake_weather_info)</span></span></code></pre></div><p>如果運行這個測試，會獲得下面的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>============================= test session starts ==============================</span></span>
<span class="line"><span>...[omitted]...</span></span>
<span class="line"><span>tests/test_weather_app.py::test_retrieve_weather_using_mocks PASSED      [100%]</span></span>
<span class="line"><span>============================== 1 passed in 0.20s ===============================</span></span>
<span class="line"><span>Process finished with exit code 0</span></span></code></pre></div><p>很好，測試通過了！但是...生活並非一帆風順。這個測試有優點，也有缺點。現在來看一下。</p><h4 id="優點" tabindex="-1">優點 <a class="header-anchor" href="#優點" aria-label="Permalink to “優點”">​</a></h4><p>好的，有一個之前討論過的優點就是，通過模擬 API 的返回值，測試變得簡單了。將通信和 API 隔離，這樣測試就可以預測了。這樣總會返回你需要的東西。</p><h4 id="缺點" tabindex="-1">缺點 <a class="header-anchor" href="#缺點" aria-label="Permalink to “缺點”">​</a></h4><p>對於缺點，問題就是，如果不再想用 <code>requests</code> 了，並且決定回到標準庫的 <code>urllib</code>，怎麼辦。每次改變 <code>find_weather_for</code> 的代碼，都得去適配測試。好的測試是，當你修改代碼實現的時候，測試時不需要改變的。所以，通過模擬，你最終把測試和實現耦合在了一起。</p><p>而且，另一個不好的方面是你需要在調用函數之前進行大量設置——至少是三行代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>    # Creates a fake requests response object</span></span>
<span class="line"><span>    fake_resp = mocker.Mock()</span></span>
<span class="line"><span>    # Mock the json method to return the static weather data</span></span>
<span class="line"><span>    fake_resp.json = mocker.Mock(return_value=fake_weather_info)</span></span>
<span class="line"><span>    # Mock the status code</span></span>
<span class="line"><span>    fake_resp.status_code = HTTPStatus.OK</span></span>
<span class="line"><span>...</span></span></code></pre></div><p><em>我可以做的更好嗎？</em></p><p>是的，請繼續看。我現在看看怎麼改進一點。</p><h3 id="使用-responses" tabindex="-1">使用 responses <a class="header-anchor" href="#使用-responses" aria-label="Permalink to “使用 responses”">​</a></h3><p>用 <code>mocker</code> 功能模擬 <code>requests</code> 有點問題，就是有很多設置。避免這個問題的一個好辦法就是使用一個庫，可以攔截 <code>requests</code> 調用並且給它們 <ruby>打補丁<rt>patch</rt></ruby>。有不止一個庫可以做這件事，但是對我來説最簡單的是 <code>responses</code>。我們來看一下怎麼用，並且替換 <code>mock</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@responses.activate</span></span>
<span class="line"><span>def test_retrieve_weather_using_responses(fake_weather_info):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Given a city name, test that a HTML report about the weather is generated</span></span>
<span class="line"><span>    correctly.&quot;&quot;&quot;</span></span>
<span class="line"><span>    api_uri = API.format(city_name=&quot;London&quot;, api_key=API_KEY)</span></span>
<span class="line"><span>    responses.add(responses.GET, api_uri, json=fake_weather_info, status=HTTPStatus.OK)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    weather_info = retrieve_weather(city=&quot;London&quot;)</span></span>
<span class="line"><span>    assert weather_info == WeatherInfo.from_dict(fake_weather_info)</span></span></code></pre></div><p>這個函數再次使用了我們的 <code>fake_weather_info</code> fixture。</p><p>然後運行測試：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>============================= test session starts ==============================</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>tests/test_weather_app.py::test_retrieve_weather_using_responses PASSED  [100%]</span></span>
<span class="line"><span>============================== 1 passed in 0.19s ===============================</span></span></code></pre></div><p>非常好！測試也通過了。但是...並不是那麼棒。</p><h4 id="優點-1" tabindex="-1">優點 <a class="header-anchor" href="#優點-1" aria-label="Permalink to “優點”">​</a></h4><p>使用諸如 <code>responses</code> 這樣的庫，好的方面就是不需要再給 <code>requests</code> <ruby>打補丁<rt>patch</rt></ruby>。通過將這層抽象交給庫，可以減少一些設置。然而，如果你沒注意到的話，還是有一些問題。</p><h4 id="缺點-1" tabindex="-1">缺點 <a class="header-anchor" href="#缺點-1" aria-label="Permalink to “缺點”">​</a></h4><p>和 <code>unittest.mock</code> 很像，測試和實現再一次耦合了。如果替換 <code>requests</code>，測試就不能用了。</p><h3 id="_2、使用適配器測試-api" tabindex="-1">2、使用適配器測試 API <a class="header-anchor" href="#_2、使用適配器測試-api" aria-label="Permalink to “2、使用適配器測試 API”">​</a></h3><p><em>如果用模擬讓測試耦合了，我能做什麼？</em></p><p>設想下面的場景：假如説你不能再用 <code>requests</code> 了，而且必須要用 <code>urllib</code> 替換，因為這是 Python 自帶的。不僅僅是這樣，你瞭解了不要把測試代碼和實現耦合，並且你想今後都避免這種情況。你想替換 <code>urllib</code>，也不想重寫測試了。</p><p>事實證明，你可以抽象出執行 <code>GET</code> 請求的代碼。</p><p><em>真的嗎？怎麼做？</em></p><p>可以使用<ruby>適配器<rt>adapter</rt></ruby>來抽象它。適配器是一種用來封裝其他類的接口，並作為新接口暴露出來的一種設計模式。用這種方式，就可以修改適配器而不需要修改代碼了。比如，在 <code>find_weather_for</code> 函數中，封裝關於 <code>requests</code> 的所有細節，然後把這部分暴露給只接受 URL 的函數。</p><p>所以，這個：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def find_weather_for(city: str) -&gt; dict:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Queries the weather API and returns the weather data for a particular city.&quot;&quot;&quot;</span></span>
<span class="line"><span>    url = API.format(city_name=city, api_key=API_KEY)</span></span>
<span class="line"><span>    resp = requests.get(url)</span></span>
<span class="line"><span>    return resp.json()</span></span></code></pre></div><p>變成這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def find_weather_for(city: str) -&gt; dict:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Queries the weather API and returns the weather data for a particular city.&quot;&quot;&quot;</span></span>
<span class="line"><span>    url = API.format(city_name=city, api_key=API_KEY)</span></span>
<span class="line"><span>    return adapter(url)</span></span></code></pre></div><p>然後適配器變成這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def requests_adapter(url: str) -&gt; dict:</span></span>
<span class="line"><span>    resp = requests.get(url)</span></span>
<span class="line"><span>    return resp.json()</span></span></code></pre></div><p>現在到了重構 <code>retrieve_weather</code> 函數的時候：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def retrieve_weather(city: str) -&gt; WeatherInfo:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Finds the weather for a city and returns a WeatherInfo instance.&quot;&quot;&quot;</span></span>
<span class="line"><span>    data = find_weather_for(city, adapter=requests_adapter)</span></span>
<span class="line"><span>    return WeatherInfo.from_dict(data)</span></span></code></pre></div><p>所以，如果你決定改為使用 <code>urllib</code> 的實現，只要換一下適配器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def urllib_adapter(url: str) -&gt; dict:</span></span>
<span class="line"><span>    &quot;&quot;&quot;An adapter that encapsulates urllib.urlopen&quot;&quot;&quot;</span></span>
<span class="line"><span>    with urllib.request.urlopen(url) as response:</span></span>
<span class="line"><span>        resp = response.read()</span></span>
<span class="line"><span>    return json.loads(resp)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def retrieve_weather(city: str) -&gt; WeatherInfo:</span></span>
<span class="line"><span>    &quot;&quot;&quot;Finds the weather for a city and returns a WeatherInfo instance.&quot;&quot;&quot;</span></span>
<span class="line"><span>    data = find_weather_for(city, adapter=urllib_adapter)</span></span>
<span class="line"><span>    return WeatherInfo.from_dict(data)</span></span></code></pre></div><p><em>好的，那測試怎麼做？</em></p><p>為了測試 <code>retrieve_weather</code>, 只要創建一個在測試過程中使用的假的適配器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@responses.activate</span></span>
<span class="line"><span>def test_retrieve_weather_using_adapter(</span></span>
<span class="line"><span>    fake_weather_info,</span></span>
<span class="line"><span>):</span></span>
<span class="line"><span>    def fake_adapter(url: str):</span></span>
<span class="line"><span>        return fake_weather_info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    weather_info = retrieve_weather(city=&quot;London&quot;, adapter=fake_adapter)</span></span>
<span class="line"><span>    assert weather_info == WeatherInfo.from_dict(fake_weather_info)</span></span></code></pre></div><p>如果運行測試，會獲得：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>============================= test session starts ==============================</span></span>
<span class="line"><span>tests/test_weather_app.py::test_retrieve_weather_using_adapter PASSED    [100%]</span></span>
<span class="line"><span>============================== 1 passed in 0.22s ===============================</span></span></code></pre></div><h4 id="優點-2" tabindex="-1">優點 <a class="header-anchor" href="#優點-2" aria-label="Permalink to “優點”">​</a></h4>`,49)),n("p",null,[s[24]||(s[24]=a("這個方法的優點是可以成功將測試和實現解耦。使用",-1)),n("ruby",null,[t(e,{href:"https://stackoverflow.com/questions/130794/what-is-dependency-injection"},{default:p(()=>[...s[22]||(s[22]=[a("依賴注入",-1)])]),_:1}),s[23]||(s[23]=n("rt",null,"dependency injection",-1))]),s[25]||(s[25]=a("在測試期間注入一個假的適配器。你也可以在任何時候更換適配器，包括在運行時。這些事情都不會改變任何行為。",-1))]),s[55]||(s[55]=i(`<h4 id="缺點-2" tabindex="-1">缺點 <a class="header-anchor" href="#缺點-2" aria-label="Permalink to “缺點”">​</a></h4><p>缺點就是，因為你在測試中用了假的適配器，如果在實現中往適配器中引入了一個 bug，測試的時候就不會發現。比如説，往 <code>requests</code> 傳入了一個有問題的參數，像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def requests_adapter(url: str) -&gt; dict:</span></span>
<span class="line"><span>    resp = requests.get(url, headers=&lt;some broken headers&gt;)</span></span>
<span class="line"><span>    return resp.json()</span></span></code></pre></div><p>在生產環境中，適配器會有問題，而且單元測試沒辦法發現。但是事實是，之前的方法也會有同樣的問題。這就是為什麼不僅要單元測試，並且總是要集成測試。也就是説，要考慮另一個選項。</p><h3 id="_3、使用-vcr-py-測試-api" tabindex="-1">3、使用 VCR.py 測試 API <a class="header-anchor" href="#_3、使用-vcr-py-測試-api" aria-label="Permalink to “3、使用 VCR.py 測試 API”">​</a></h3><p>現在終於到了討論我們最後一個選項了。誠實地説，我也是最近才發現這個。我用<ruby>模擬<rt>mock</rt></ruby>也很長時間了，而且總是有一些問題。<code>VCR.py</code> 是一個庫，它可以簡化很多 HTTP 請求的測試。</p><p>它的工作原理是將第一次運行測試的 HTTP 交互記錄為一個 YAML 文件，叫做 <code>cassette</code>。請求和響應都會被序列化。當第二次運行測試的時候，<code>VCT.py</code> 將攔截對請求的調用，並且返回一個響應。</p><p>現在看一下下面如何使用 <code>VCR.py</code> 測試 <code>retrieve_weather</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@vcr.use_cassette()</span></span>
<span class="line"><span>def test_retrieve_weather_using_vcr(fake_weather_info):</span></span>
<span class="line"><span>    weather_info = retrieve_weather(city=&quot;London&quot;)</span></span>
<span class="line"><span>    assert weather_info == WeatherInfo.from_dict(fake_weather_info)</span></span></code></pre></div><p><em>天吶，就這樣？沒有設置？<code>@vcr.use_cassette()</code> 是什麼？</em></p><p>是的，就這樣！沒有設置，只要一個 <code>pytest</code> 標註告訴 VCR 去攔截調用，然後保存 cassette 文件。</p><p><em>cassette 文件是什麼樣？</em></p><p>好問題。這個文件裏有很多東西。這是因為 VCR 保存了交互中的所有細節。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interactions:</span></span>
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
<span class="line"><span>version: 1</span></span></code></pre></div><p><em>確實很多！</em></p><p>真的！好的方面就是你不需要留意它。<code>VCR.py</code> 會為你安排好一切。</p><h4 id="優點-3" tabindex="-1">優點 <a class="header-anchor" href="#優點-3" aria-label="Permalink to “優點”">​</a></h4><p>現在看一下優點，我可以至少列出五個：</p><ul><li>沒有設置代碼。</li><li>測試仍然是分離的，所以很快。</li><li>測試是確定的。</li><li>如果你改了請求，比如説用了錯誤的 header，測試會失敗。</li><li>沒有與代碼實現耦合，所以你可以換適配器，而且測試會通過。唯一有關係的東西就是請求必須是一樣的。</li></ul><h4 id="缺點-3" tabindex="-1">缺點 <a class="header-anchor" href="#缺點-3" aria-label="Permalink to “缺點”">​</a></h4><p>再與模擬相比較，除了避免了錯誤，還是有一些問題。</p><p>如果 API 提供者出於某種原因修改了數據格式，測試仍然會通過。幸運的是，這種情況並不經常發生，而且在這種重大改變之前，API 提供者通常會給他們的 API 提供不同版本。</p><p>另一個需要考慮的事情是<ruby>就地<rt>in place</rt></ruby><ruby>端到端<rt>end-to-end</rt></ruby>測試。每次服務器運行的時候，這些測試都會調用。顧名思義，這是一個範圍更廣、更慢的測試。它們會比單元測試覆蓋更多。事實上，並不是每個項目都需要使用它們。所以，就我看來，<code>VCR.py</code> 對於大多數人的需求來説都綽綽有餘。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>就這麼多了。我希望今天你瞭解了一些有用的東西。測試 API 客户端應用可能會有點嚇人。然而，當武裝了合適的工具和知識，你就可以馴服這個野獸。</p>`,25)),n("p",null,[s[27]||(s[27]=a("在 ",-1)),t(e,{href:"https://github.com/miguendes/tutorials/tree/master/testing_http"},{default:p(()=>[...s[26]||(s[26]=[a("我的 Github",-1)])]),_:1}),s[28]||(s[28]=a(" 上可以找到這個完整的應用。",-1))]),n("p",null,[n("em",null,[s[30]||(s[30]=a("這篇文章最早發表在 ",-1)),t(e,{href:"https://miguendes.me/3-ways-to-test-api-client-applications-in-python"},{default:p(()=>[...s[29]||(s[29]=[a("作者的個人Blog",-1)])]),_:1}),s[31]||(s[31]=a("，授權轉載",-1))])]),s[56]||(s[56]=n("hr",null,null,-1)),n("p",null,[s[33]||(s[33]=a("via: ",-1)),t(e,{href:"https://opensource.com/article/21/9/unit-test-python"},{default:p(()=>[...s[32]||(s[32]=[a("https://opensource.com/article/21/9/unit-test-python",-1)])]),_:1})]),n("p",null,[s[38]||(s[38]=a("作者：",-1)),t(e,{href:"https://opensource.com/users/miguendes"},{default:p(()=>[...s[34]||(s[34]=[a("Miguel Brito",-1)])]),_:1}),s[39]||(s[39]=a(" 選題：",-1)),t(e,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[35]||(s[35]=[a("lujun9972",-1)])]),_:1}),s[40]||(s[40]=a(" 譯者：",-1)),t(e,{href:"https://github.com/Yufei-Yan"},{default:p(()=>[...s[36]||(s[36]=[a("Yufei-Yan",-1)])]),_:1}),s[41]||(s[41]=a(" 校對：",-1)),t(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[37]||(s[37]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[44]||(s[44]=a("本文由 ",-1)),t(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[42]||(s[42]=[a("LCTT",-1)])]),_:1}),s[45]||(s[45]=a(" 原創編譯，",-1)),t(e,{href:"https://linux.cn/"},{default:p(()=>[...s[43]||(s[43]=[a("Linux中國",-1)])]),_:1}),s[46]||(s[46]=a(" 榮譽推出",-1))])])}const _=l(d,[["render",c]]);export{y as __pageData,_ as default};
