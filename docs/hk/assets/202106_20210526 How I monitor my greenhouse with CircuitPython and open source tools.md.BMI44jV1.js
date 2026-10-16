import{_ as l,a0 as o,w as r,s as u,I as a,x as n,a1 as p,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"我如何用 CircuitPython 和開源工具監控温室 | LCTT x X-CMD","titleTemplate":false,"description":"我如何用 CircuitPython 和開源工具監控温室 | LCTT (202106) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"我如何用 CircuitPython 和開源工具監控温室 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"我如何用 CircuitPython 和開源工具監控温室 | LCTT (202106) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202106/20210526 How I monitor my greenhouse with CircuitPython and open source tools","title":"我如何用 CircuitPython 和開源工具監控温室","tag":"202106","desc":""},"relativePath":"202106/20210526 How I monitor my greenhouse with CircuitPython and open source tools.md","filePath":"[post].md"}'),d={name:"202106/20210526 How I monitor my greenhouse with CircuitPython and open source tools.md"};function m(f,s,g,h,c,y){const t=o("Link");return r(),u("div",null,[s[78]||(s[78]=a("h1",{id:"我如何用-circuitpython-和開源工具監控温室",tabindex:"-1"},[n("我如何用 CircuitPython 和開源工具監控温室 "),a("a",{class:"header-anchor",href:"#我如何用-circuitpython-和開源工具監控温室","aria-label":"Permalink to “我如何用 CircuitPython 和開源工具監控温室”"},"​")],-1)),s[79]||(s[79]=a("blockquote",null,[a("p",null,"使用微控制器、傳感器、Python 以及 MQTT 持續追蹤温室的温度、濕度以及環境光。")],-1)),s[80]||(s[80]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/zanda-photography-unsplash-greenhouse.jpg?itok=ZMnZyNMM",alt:"種有西紅柿的温室花園",title:"Greenhouse garden with tomatoes"})],-1)),a("p",null,[s[1]||(s[1]=n("CircuitPython 提供了一種和微控制器板進行交互的革命性方式。這篇文章介紹瞭如何使用 CircuitPython 來監測温室的温度、濕度以及環境光，並且使用 CircuitPython MQTT 客户端將結果發佈到一個 ",-1)),p(t,{href:"https://mqtt.org/"},{default:e(()=>[...s[0]||(s[0]=[n("MQTT",-1)])]),_:1}),s[2]||(s[2]=n()),s[3]||(s[3]=a("ruby",null,[n("中介"),a("rt",null,"broker")],-1)),s[4]||(s[4]=n("。你可以在若干個程序中訂閲 MQTT 隊列並進一步處理信息。",-1))]),a("p",null,[s[6]||(s[6]=n("這個項目使用一個簡單的 Python 程序來運行 Web 服務器，它發佈一個 Prometheus 格式的採集端點，拉取監控指標到 ",-1)),p(t,{href:"https://prometheus.io/"},{default:e(()=>[...s[5]||(s[5]=[n("Prometheus",-1)])]),_:1}),s[7]||(s[7]=n(" 進行不間斷的監控。",-1))]),s[81]||(s[81]=a("h3",{id:"關於-circuitpython",tabindex:"-1"},[n("關於 CircuitPython "),a("a",{class:"header-anchor",href:"#關於-circuitpython","aria-label":"Permalink to “關於 CircuitPython”"},"​")],-1)),a("p",null,[p(t,{href:"https://circuitpython.io/"},{default:e(()=>[...s[8]||(s[8]=[n("CircuitPython",-1)])]),_:1}),s[11]||(s[11]=n(" 是一個由 ",-1)),p(t,{href:"https://adafruit.com"},{default:e(()=>[...s[9]||(s[9]=[n("Adafruit",-1)])]),_:1}),s[12]||(s[12]=n(" 創建的開源 Python 發行版，用於運行在低成本微控制器開發板上。CircuitPython 為與 ",-1)),p(t,{href:"https://circuitpython.org/downloads"},{default:e(()=>[...s[10]||(s[10]=[n("兼容的開發板",-1)])]),_:1}),s[13]||(s[13]=n(" 的交互提供了簡單的開發體驗。你可以在連接你的開發板時掛載的 ",-1)),s[14]||(s[14]=a("code",null,"CIRCUITPYTHON",-1)),s[15]||(s[15]=n(" 根驅動器上創建一個 ",-1)),s[16]||(s[16]=a("code",null,"code.py",-1)),s[17]||(s[17]=n(" 文件來啓動你的程序。CircuitPython 還為開發板提供了一個串行連接，包含一個交互式解釋器（REPL）會話，你可以使用 Python 代碼實時和開發板進行交互。",-1))]),a("p",null,[s[21]||(s[21]=n("Adafruit 的網站提供了大量的文檔，可以幫助你開始使用 CircuitPython。首先，參考下《",-1)),p(t,{href:"https://learn.adafruit.com/welcome-to-circuitpython"},{default:e(()=>[...s[18]||(s[18]=[n("歡迎來到 CircuitPython",-1)])]),_:1}),s[22]||(s[22]=n("》指南。這份指南能夠幫助你開始使用 CircuitPython 在開發板上運行代碼以及和 REPL 交互。它還記錄瞭如何安裝 Adafruit 的 CircuitPython 庫合集和範例，可以用在它出售的許多開發板和傳感器上。接下來，閲讀《",-1)),p(t,{href:"https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials"},{default:e(()=>[...s[19]||(s[19]=[n("CircuitPython 基礎",-1)])]),_:1}),s[23]||(s[23]=n("》指南來學習更多關於其功能的信息，裏面還有鏈接指向在特定及兼容的開發板上使用 CircuitPython 的相關信息。最後，就如所有開源軟件一樣，你可以深入 ",-1)),p(t,{href:"https://github.com/adafruit/circuitpython"},{default:e(()=>[...s[20]||(s[20]=[n("CircuitPython 的源碼",-1)])]),_:1}),s[24]||(s[24]=n("，發佈議題，以及做出貢獻。",-1))]),s[82]||(s[82]=a("h3",{id:"微控制器設置",tabindex:"-1"},[n("微控制器設置 "),a("a",{class:"header-anchor",href:"#微控制器設置","aria-label":"Permalink to “微控制器設置”"},"​")],-1)),s[83]||(s[83]=a("p",null,"微控制器系統非常簡單。要完成這個示例項目，你會需要：",-1)),a("ul",null,[s[39]||(s[39]=a("li",null,[a("strong",null,"樹莓派 4"),n("：你需要一台電腦來給微控制器系統編程，我用的是樹莓派 4。")],-1)),a("li",null,[s[26]||(s[26]=a("strong",null,"CircuitPython 兼容的微控制器",-1)),s[27]||(s[27]=n("：我用的是 ",-1)),p(t,{href:"https://www.adafruit.com/product/4769"},{default:e(()=>[...s[25]||(s[25]=[n("Adafruit Feather S2",-1)])]),_:1}),s[28]||(s[28]=n("，帶有內置 WiFi，環境光傳感器，Qwiic 線纜輸入。",-1))]),s[40]||(s[40]=a("li",null,[a("strong",null,"微控制器 WiFi"),n("：Feather S2 內置了 WiFi。如果你的微控制器沒有，你需要給開發板找個 WiFi 擴展板。")],-1)),a("li",null,[s[30]||(s[30]=a("strong",null,"傳感器",-1)),s[31]||(s[31]=n("：Feather S2 有個內置的環境光傳感器，所以我還需要一個温濕度傳感器。有很多不同廠商的產品可以選擇，包括 Adafruit、SparkFun、亞馬遜。我用的是一個 ",-1)),p(t,{href:"https://www.adafruit.com/product/3251"},{default:e(()=>[...s[29]||(s[29]=[n("Adafruit 傳感器",-1)])]),_:1}),s[32]||(s[32]=n("，帶有 Feather S2 輸入兼容的 Qwiic 線纜。儘管多數 SparkFun 傳感器可以在 Adafruit 庫下工作，但如果你不是從 Adafruit 購買的傳感器，你可能還是需要自己去找到它兼容 CircuitPython 的 Python 庫。",-1))]),a("li",null,[s[35]||(s[35]=a("strong",null,"跳線和線纜",-1)),s[36]||(s[36]=n("：為了避免使用麪包板或焊接，我使用 ",-1)),p(t,{href:"https://www.adafruit.com/product/4399"},{default:e(()=>[...s[33]||(s[33]=[n("Adafruit Qwiic 線纜",-1)])]),_:1}),s[37]||(s[37]=n("。SparkFun 銷售的包含不同長度的",-1)),p(t,{href:"https://www.sparkfun.com/products/15081"},{default:e(()=>[...s[34]||(s[34]=[n("線纜套裝",-1)])]),_:1}),s[38]||(s[38]=n("中也有它。",-1))])]),s[84]||(s[84]=a("p",null,"在將微控制器連接到你的電腦之前，將傳感器連接到微控制器上。",-1)),s[85]||(s[85]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/uploads/connectsensors-microcontroller.jpg",alt:"將傳感器連接到微控制器上",title:"Connecting sensors to microcontroller"})],-1)),s[86]||(s[86]=a("p",null,"現在你可以將微控制器用 USB 數據線連接到你的電腦。",-1)),s[87]||(s[87]=a("h3",{id:"mqtt-中介",tabindex:"-1"},[n("MQTT 中介 "),a("a",{class:"header-anchor",href:"#mqtt-中介","aria-label":"Permalink to “MQTT 中介”"},"​")],-1)),a("p",null,[s[44]||(s[44]=n("你可以使用 ",-1)),p(t,{href:"https://pimylifeup.com/raspberry-pi-mosquitto-mqtt-server/"},{default:e(()=>[...s[41]||(s[41]=[n("這份説明",-1)])]),_:1}),s[45]||(s[45]=n(" 來在樹莓派的系統上安裝 ",-1)),p(t,{href:"https://mosquitto.org/"},{default:e(()=>[...s[42]||(s[42]=[n("Mosquitto MQTT 中介",-1)])]),_:1}),s[46]||(s[46]=n(" 和 Mosquitto 客户端。如果你想把樹莓派做為長期服務器使用，在你的網絡上給樹莓派 4 設置一個靜態 IP 地址。Mosquitto 中介運行起來之後，創建一份 ",-1)),p(t,{href:"https://mosquitto.org/documentation/authentication-methods/"},{default:e(()=>[...s[43]||(s[43]=[n("用户名/密碼文件",-1)])]),_:1}),s[47]||(s[47]=n("，設置客户端向中介發佈和訂閲消息時用的認證信息。",-1))]),s[88]||(s[88]=i('<p>你可以用樹莓派上的 Mosquitto 客户端來測試 MQTT 中介。打開兩個終端（如果你是無界面運行的話打開兩個 SSH 會話）：</p><p>在終端一輸入：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mosquitto_sub -h localhost -u $user -P $pass -t &quot;mqtt/test&quot;</span></span></code></pre></div><p>這條命令會啓動一個持續運行的進程，監聽發佈到 <code>mqtt/test</code> 隊列的消息。</p><p>在終端二輸入：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mosquitto_pub -h localhost -u $user -P $pass -t &quot;mqtt/test&quot; -m hello`</span></span></code></pre></div><p>這條命令會向 <code>mqtt/test</code> 隊列發佈一條消息，它應該會顯示在終端一的輸出裏。</p><p>現在你可以中止終端一運行的 <code>sub</code> 命令了。</p><p>Mosquitto 中介允許客户端發佈消息到任何隊列，甚至沒有任何訂閲的隊列也可以。這些消息會永久丟失，但這不會阻止客户端繼續發佈消息。</p><p>打開第三個終端，訂閲下列隊列（你的控制器會發布消息到這些隊列上）：</p><ul><li>greenhouse/temperature</li><li>greenhouse/light</li><li>greenhouse/humidity</li></ul><h3 id="給微控制器編碼" tabindex="-1">給微控制器編碼 <a class="header-anchor" href="#給微控制器編碼" aria-label="Permalink to “給微控制器編碼”">​</a></h3><p>現在你已經準備好給微控制器編碼，發佈它的監測指標到樹莓派 4 上運行的 MQTT 中介上了。</p>',13)),a("p",null,[s[50]||(s[50]=n("Adafruit 有 ",-1)),p(t,{href:"https://learn.adafruit.com/mqtt-in-circuitpython"},{default:e(()=>[...s[48]||(s[48]=[n("出色的文檔",-1)])]),_:1}),s[51]||(s[51]=n("，指導你使用 ",-1)),p(t,{href:"https://circuitpython.org/libraries"},{default:e(()=>[...s[49]||(s[49]=[n("CircuitPython 庫合集",-1)])]),_:1}),s[52]||(s[52]=n(" 的庫來將你的微控制器連接到 WiFi 路由器，併發布監測指標到 MQTT 中介上。",-1))]),s[89]||(s[89]=i(`<p>安裝下列庫到 <code>CIRCUITPYTHON/lib</code> 目錄，温室監控會用到它們。這些庫在 Adafruit 的 CircuitPython 庫合集中都有提供：</p><ul><li><code>adafruit_bus_device</code>：一個帶有多個 .mpy 文件的 Python 包文件夾（.mpy 是經過壓縮的 Python 文件，用以節省空間）</li><li><code>adafruit_requests</code>：單個 .mpy 文件</li><li><code>adafruit_register</code>：一個包文件夾</li><li><code>adafruit_minimqtt</code>：一個包文件夾</li><li><code>adafruit_si7021</code>：單個 .mpy 文件，用來支持温濕度傳感器</li></ul><p>庫裝好了之後，將以下代碼寫入 <code>CIRCUITPYTHON</code> 文件夾的 <code>code.py</code> 文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import time</span></span>
<span class="line"><span>import ssl</span></span>
<span class="line"><span>import socketpool</span></span>
<span class="line"><span>import wifi</span></span>
<span class="line"><span>import adafruit_minimqtt.adafruit_minimqtt as MQTT</span></span>
<span class="line"><span>import board</span></span>
<span class="line"><span>from digitalio import DigitalInOut, Direction, Pull</span></span>
<span class="line"><span>from analogio import AnalogIn</span></span>
<span class="line"><span>import adafruit_si7021</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Add a secrets.py to your filesystem that has a dictionary called secrets with &quot;ssid&quot; and</span></span>
<span class="line"><span># &quot;password&quot; keys with your WiFi credentials. DO NOT share that file or commit it into Git or other</span></span>
<span class="line"><span># source control.</span></span>
<span class="line"><span># pylint: disable=no-name-in-module,wrong-import-order</span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>        from secrets import secrets</span></span>
<span class="line"><span>except ImportError:</span></span>
<span class="line"><span>        print(&quot;WiFi secrets are kept in secrets.py, please add them there!&quot;)</span></span>
<span class="line"><span>        raise</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>print(&quot;Connecting to %s&quot; % secrets[&quot;ssid&quot;])</span></span>
<span class="line"><span>wifi.radio.connect(secrets[&quot;ssid&quot;], secrets[&quot;password&quot;])</span></span>
<span class="line"><span>print(&quot;Connected to %s!&quot; % secrets[&quot;ssid&quot;])</span></span>
<span class="line"><span>### Feeds ###</span></span>
<span class="line"><span>light_feed = &quot;greenhouse/light&quot;</span></span>
<span class="line"><span>temp_feed = &quot;greenhouse/temperature&quot;</span></span>
<span class="line"><span>humidity_feed = &quot;greenhouse/humidity&quot;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Define callback methods which are called when events occur</span></span>
<span class="line"><span># pylint: disable=unused-argument, redefined-outer-name</span></span>
<span class="line"><span>def connected(client, userdata, flags, rc):</span></span>
<span class="line"><span>        # This function will be called when the client is connected</span></span>
<span class="line"><span>        # successfully to the broker.</span></span>
<span class="line"><span>        print(&quot;Connected to MQTT!&quot;)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>def disconnected(client, userdata, rc):</span></span>
<span class="line"><span>        # This method is called when the client is disconnected</span></span>
<span class="line"><span>        print(&quot;Disconnected from MQTT!&quot;)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>def get_voltage(pin):</span></span>
<span class="line"><span>        return (pin.value * 3.3) / 65536</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Create a socket pool</span></span>
<span class="line"><span>pool = socketpool.SocketPool(wifi.radio)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Set up a MiniMQTT Client</span></span>
<span class="line"><span>mqtt_client = MQTT.MQTT(</span></span>
<span class="line"><span>        broker=secrets[&quot;broker&quot;],</span></span>
<span class="line"><span>        port=secrets[&quot;port&quot;],</span></span>
<span class="line"><span>        username=secrets[&quot;aio_username&quot;],</span></span>
<span class="line"><span>        password=secrets[&quot;aio_key&quot;],</span></span>
<span class="line"><span>        socket_pool=pool,</span></span>
<span class="line"><span>        ssl_context=ssl.create_default_context(),</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Setup the callback methods above</span></span>
<span class="line"><span>mqtt_client.on_connect = connected</span></span>
<span class="line"><span>mqtt_client.on_disconnect = disconnected</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Connect the client to the MQTT broker.</span></span>
<span class="line"><span>print(&quot;Connecting to MQTT...&quot;)</span></span>
<span class="line"><span>mqtt_client.connect()</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Create library object using our Bus I2C port</span></span>
<span class="line"><span>sensor = adafruit_si7021.SI7021(board.I2C())</span></span>
<span class="line"><span>light_pin = AnalogIn(board.IO4)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>        # Poll the message queue</span></span>
<span class="line"><span>        mqtt_client.loop()</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        # get the current temperature</span></span>
<span class="line"><span>        light_val = get_voltage(light_pin)</span></span>
<span class="line"><span>        temp_val = ((sensor.temperature * 9)/5) + 32</span></span>
<span class="line"><span>        humidity_val = sensor.relative_humidity</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        # Send a new messages</span></span>
<span class="line"><span>        mqtt_client.publish(light_feed, light_val)</span></span>
<span class="line"><span>        mqtt_client.publish(temp_feed, temp_val)</span></span>
<span class="line"><span>        mqtt_client.publish(humidity_feed, humidity_val)</span></span>
<span class="line"><span>        time.sleep(0.5)</span></span></code></pre></div><p>保存你的代碼。然後連接到串行監視器，看程序連接到你的 MQTT 中介。你還可以將樹莓派 4 上的終端切換到訂閲了它的發佈隊列的終端來查看輸出。</p><h3 id="處理監測指標" tabindex="-1">處理監測指標 <a class="header-anchor" href="#處理監測指標" aria-label="Permalink to “處理監測指標”">​</a></h3><p>像 MQTT 這樣的發佈/訂閲工作流給微控制器系統提供了諸多好處。你可以有多個微控制器 + 傳感器來回報同一個系統的不同指標或並行回報相同指標的若干讀數。你還可以有多個不同進程訂閲各個隊列，並行地對這些消息進行回應。甚至還可以有多個進程訂閲相同的隊列，對消息做出不同的動作，比如數值過高時發送通知郵件或將消息發送到另一個 MQTT 隊列上去。</p><p>另一個選項是讓一個微控制器訂閲一個外部隊列，可以發送信號告訴微控制器做出動作，比如關閉或開始一個新會話。最後，發佈/訂閲工作流對低功耗微控制器系統更佳（比如那些使用電池或太陽能的系統），因為這些設備可以在更長的延遲週期後批量發佈監測指標，並在回報的間隔期間關閉大量消耗電量的 WiFi 廣播。</p>`,8)),a("p",null,[s[56]||(s[56]=n("要處理這些監測指標，我創建了一個 Python 客户端，使用 ",-1)),p(t,{href:"https://pypi.org/project/paho-mqtt/"},{default:e(()=>[...s[53]||(s[53]=[n("Paho Python MQTT 客户端",-1)])]),_:1}),s[57]||(s[57]=n(" 訂閲監測指標隊列。我還使用官方的 ",-1)),p(t,{href:"https://pypi.org/project/prometheus-client"},{default:e(()=>[...s[54]||(s[54]=[n("Prometheus Python 客户端",-1)])]),_:1}),s[58]||(s[58]=n(" 創建了一個 Web 服務器，它產生一個符合 Prometheus 標準的採集端點，使用這些監測指標作為面板信息。",-1)),p(t,{href:"https://opensource.com/article/21/3/iot-measure-raspberry-pi"},{default:e(()=>[...s[55]||(s[55]=[n("Prometheus 服務器",-1)])]),_:1}),s[59]||(s[59]=n("和 Mosquitto MQTT 中介我都是運行在同一個樹莓派 4 上的。",-1))]),s[90]||(s[90]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from prometheus_client import start_http_server, Gauge</span></span>
<span class="line"><span>import random</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span>import paho.mqtt.client as mqtt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gauge = {</span></span>
<span class="line"><span>  &quot;greenhouse/light&quot;: Gauge(&#39;light&#39;,&#39;light in lumens&#39;),</span></span>
<span class="line"><span>  &quot;greenhouse/temperature&quot;: Gauge(&#39;temperature&#39;, &#39;temperature in fahrenheit&#39;),</span></span>
<span class="line"><span>  &quot;greenhouse/humidity&quot;: Gauge(&#39;humidity&#39;,&#39;relative % humidity&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>        from mqtt_secrets import mqtt_secrets</span></span>
<span class="line"><span>except ImportError:</span></span>
<span class="line"><span>        print(&quot;WiFi secrets are kept in secrets.py, please add them there!&quot;)</span></span>
<span class="line"><span>        raise</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def on_connect(client, userdata, flags, rc):</span></span>
<span class="line"><span>        print(&quot;Connected with result code &quot;+str(rc))</span></span>
<span class="line"><span>        # Subscribing in on_connect() means that if we lose the connection and</span></span>
<span class="line"><span>        # reconnect then subscriptions will be renewed.</span></span>
<span class="line"><span>        client.subscribe(&quot;greenhouse/light&quot;)</span></span>
<span class="line"><span>        client.subscribe(&#39;greenhouse/temperature&#39;)</span></span>
<span class="line"><span>        client.subscribe(&#39;greenhouse/humidity&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def on_message(client, userdata, msg):</span></span>
<span class="line"><span>        topic = msg.topic</span></span>
<span class="line"><span>        payload = msg.payload</span></span>
<span class="line"><span>        gauge[topic].set(payload)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client = mqtt.Client()</span></span>
<span class="line"><span>client.username_pw_set(mqtt_secrets[&quot;mqtt_user&quot;],mqtt_secrets[&#39;mqtt_password&#39;])</span></span>
<span class="line"><span>client.on_connect = on_connect</span></span>
<span class="line"><span>client.on_message = on_message</span></span>
<span class="line"><span>client.connect(&#39;localhost&#39;,1883,60)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>        # Start up the server to expose the metrics.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        client = mqtt.Client()</span></span>
<span class="line"><span>        client.username_pw_set(&#39;london&#39;,&#39;abc123&#39;)</span></span>
<span class="line"><span>        client.on_connect = on_connect</span></span>
<span class="line"><span>        client.on_message = on_message</span></span>
<span class="line"><span>        client.connect(&#39;localhost&#39;,1883,60)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        start_http_server(8000)</span></span>
<span class="line"><span>        client.loop_forever()</span></span></code></pre></div><p>然後我配置 Prometheus 服務器採集端點數據到 <code>localhost:8000</code>。</p>`,2)),a("p",null,[s[61]||(s[61]=n("你可以在 Github 上訪問 ",-1)),p(t,{href:"https://github.com/dmlond/greenhouse_mqtt_microcontroller"},{default:e(()=>[...s[60]||(s[60]=[n("温室 MQTT 微控制器",-1)])]),_:1}),s[62]||(s[62]=n(" 這個項目的代碼，項目採用 MIT 許可證授權。",-1))]),s[91]||(s[91]=a("hr",null,null,-1)),a("p",null,[s[64]||(s[64]=n("via: ",-1)),p(t,{href:"https://opensource.com/article/21/5/monitor-greenhouse-open-source"},{default:e(()=>[...s[63]||(s[63]=[n("https://opensource.com/article/21/5/monitor-greenhouse-open-source",-1)])]),_:1})]),a("p",null,[s[69]||(s[69]=n("作者：",-1)),p(t,{href:"https://opensource.com/users/dmlond"},{default:e(()=>[...s[65]||(s[65]=[n("Darin London",-1)])]),_:1}),s[70]||(s[70]=n(" 選題：",-1)),p(t,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[66]||(s[66]=[n("lujun9972",-1)])]),_:1}),s[71]||(s[71]=n(" 譯者：",-1)),p(t,{href:"https://github.com/alim0x"},{default:e(()=>[...s[67]||(s[67]=[n("alim0x",-1)])]),_:1}),s[72]||(s[72]=n(" 校對：",-1)),p(t,{href:"https://github.com/wxy"},{default:e(()=>[...s[68]||(s[68]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[75]||(s[75]=n("本文由 ",-1)),p(t,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[73]||(s[73]=[n("LCTT",-1)])]),_:1}),s[76]||(s[76]=n(" 原創編譯，",-1)),p(t,{href:"https://linux.cn/"},{default:e(()=>[...s[74]||(s[74]=[n("Linux中國",-1)])]),_:1}),s[77]||(s[77]=n(" 榮譽推出",-1))])])}const C=l(d,[["render",m]]);export{b as __pageData,C as default};
