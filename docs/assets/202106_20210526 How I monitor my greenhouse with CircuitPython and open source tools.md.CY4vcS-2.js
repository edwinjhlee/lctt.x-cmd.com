import{_ as l,W as o,s as r,u,I as a,ah as i,w as s,Z as p,A as e}from"./chunks/framework.DPWZnL3N.js";import"./chunks/theme.DZmP8ALZ.js";const b=JSON.parse('{"title":"我如何用 CircuitPython 和开源工具监控温室 | LCTT x X-CMD","titleTemplate":false,"description":"我如何用 CircuitPython 和开源工具监控温室 | LCTT (202106) | X-CMD","frontmatter":{"pageClass":"x-blog","head":[["meta",{"name":"og:title","content":"我如何用 CircuitPython 和开源工具监控温室 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"我如何用 CircuitPython 和开源工具监控温室 | LCTT (202106) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202106/20210526 How I monitor my greenhouse with CircuitPython and open source tools","title":"我如何用 CircuitPython 和开源工具监控温室","tag":"202106"},"relativePath":"202106/20210526 How I monitor my greenhouse with CircuitPython and open source tools.md","filePath":"[post].md"}'),d={name:"202106/20210526 How I monitor my greenhouse with CircuitPython and open source tools.md"};function m(f,n,c,g,h,y){const t=o("Link");return u(),r("div",null,[n[78]||(n[78]=a("h1",{id:"我如何用-circuitpython-和开源工具监控温室",tabindex:"-1"},[s("我如何用 CircuitPython 和开源工具监控温室 "),a("a",{class:"header-anchor",href:"#我如何用-circuitpython-和开源工具监控温室","aria-label":"Permalink to 我如何用 CircuitPython 和开源工具监控温室"},"​")],-1)),n[79]||(n[79]=a("blockquote",null,[a("p",null,"使用微控制器、传感器、Python 以及 MQTT 持续追踪温室的温度、湿度以及环境光。")],-1)),n[80]||(n[80]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/zanda-photography-unsplash-greenhouse.jpg?itok=ZMnZyNMM",alt:"种有西红柿的温室花园",title:"Greenhouse garden with tomatoes"})],-1)),a("p",null,[n[1]||(n[1]=s("CircuitPython 提供了一种和微控制器板进行交互的革命性方式。这篇文章介绍了如何使用 CircuitPython 来监测温室的温度、湿度以及环境光，并且使用 CircuitPython MQTT 客户端将结果发布到一个 ")),p(t,{href:"https://mqtt.org/"},{default:e(()=>n[0]||(n[0]=[s("MQTT")])),_:1}),n[2]||(n[2]=s()),n[3]||(n[3]=a("ruby",null,[s("中介"),a("rt",null,"broker")],-1)),n[4]||(n[4]=s("。你可以在若干个程序中订阅 MQTT 队列并进一步处理信息。"))]),a("p",null,[n[6]||(n[6]=s("这个项目使用一个简单的 Python 程序来运行 Web 服务器，它发布一个 Prometheus 格式的采集端点，拉取监控指标到 ")),p(t,{href:"https://prometheus.io/"},{default:e(()=>n[5]||(n[5]=[s("Prometheus")])),_:1}),n[7]||(n[7]=s(" 进行不间断的监控。"))]),n[81]||(n[81]=a("h3",{id:"关于-circuitpython",tabindex:"-1"},[s("关于 CircuitPython "),a("a",{class:"header-anchor",href:"#关于-circuitpython","aria-label":"Permalink to 关于 CircuitPython"},"​")],-1)),a("p",null,[p(t,{href:"https://circuitpython.io/"},{default:e(()=>n[8]||(n[8]=[s("CircuitPython")])),_:1}),n[11]||(n[11]=s(" 是一个由 ")),p(t,{href:"https://adafruit.com"},{default:e(()=>n[9]||(n[9]=[s("Adafruit")])),_:1}),n[12]||(n[12]=s(" 创建的开源 Python 发行版，用于运行在低成本微控制器开发板上。CircuitPython 为与 ")),p(t,{href:"https://circuitpython.org/downloads"},{default:e(()=>n[10]||(n[10]=[s("兼容的开发板")])),_:1}),n[13]||(n[13]=s(" 的交互提供了简单的开发体验。你可以在连接你的开发板时挂载的 ")),n[14]||(n[14]=a("code",null,"CIRCUITPYTHON",-1)),n[15]||(n[15]=s(" 根驱动器上创建一个 ")),n[16]||(n[16]=a("code",null,"code.py",-1)),n[17]||(n[17]=s(" 文件来启动你的程序。CircuitPython 还为开发板提供了一个串行连接，包含一个交互式解释器（REPL）会话，你可以使用 Python 代码实时和开发板进行交互。"))]),a("p",null,[n[21]||(n[21]=s("Adafruit 的网站提供了大量的文档，可以帮助你开始使用 CircuitPython。首先，参考下《")),p(t,{href:"https://learn.adafruit.com/welcome-to-circuitpython"},{default:e(()=>n[18]||(n[18]=[s("欢迎来到 CircuitPython")])),_:1}),n[22]||(n[22]=s("》指南。这份指南能够帮助你开始使用 CircuitPython 在开发板上运行代码以及和 REPL 交互。它还记录了如何安装 Adafruit 的 CircuitPython 库合集和范例，可以用在它出售的许多开发板和传感器上。接下来，阅读《")),p(t,{href:"https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials"},{default:e(()=>n[19]||(n[19]=[s("CircuitPython 基础")])),_:1}),n[23]||(n[23]=s("》指南来学习更多关于其功能的信息，里面还有链接指向在特定及兼容的开发板上使用 CircuitPython 的相关信息。最后，就如所有开源软件一样，你可以深入 ")),p(t,{href:"https://github.com/adafruit/circuitpython"},{default:e(()=>n[20]||(n[20]=[s("CircuitPython 的源码")])),_:1}),n[24]||(n[24]=s("，发布议题，以及做出贡献。"))]),n[82]||(n[82]=a("h3",{id:"微控制器设置",tabindex:"-1"},[s("微控制器设置 "),a("a",{class:"header-anchor",href:"#微控制器设置","aria-label":"Permalink to 微控制器设置"},"​")],-1)),n[83]||(n[83]=a("p",null,"微控制器系统非常简单。要完成这个示例项目，你会需要：",-1)),a("ul",null,[n[39]||(n[39]=a("li",null,[a("strong",null,"树莓派 4"),s("：你需要一台电脑来给微控制器系统编程，我用的是树莓派 4。")],-1)),a("li",null,[n[26]||(n[26]=a("strong",null,"CircuitPython 兼容的微控制器",-1)),n[27]||(n[27]=s("：我用的是 ")),p(t,{href:"https://www.adafruit.com/product/4769"},{default:e(()=>n[25]||(n[25]=[s("Adafruit Feather S2")])),_:1}),n[28]||(n[28]=s("，带有内置 WiFi，环境光传感器，Qwiic 线缆输入。"))]),n[40]||(n[40]=a("li",null,[a("strong",null,"微控制器 WiFi"),s("：Feather S2 内置了 WiFi。如果你的微控制器没有，你需要给开发板找个 WiFi 扩展板。")],-1)),a("li",null,[n[30]||(n[30]=a("strong",null,"传感器",-1)),n[31]||(n[31]=s("：Feather S2 有个内置的环境光传感器，所以我还需要一个温湿度传感器。有很多不同厂商的产品可以选择，包括 Adafruit、SparkFun、亚马逊。我用的是一个 ")),p(t,{href:"https://www.adafruit.com/product/3251"},{default:e(()=>n[29]||(n[29]=[s("Adafruit 传感器")])),_:1}),n[32]||(n[32]=s("，带有 Feather S2 输入兼容的 Qwiic 线缆。尽管多数 SparkFun 传感器可以在 Adafruit 库下工作，但如果你不是从 Adafruit 购买的传感器，你可能还是需要自己去找到它兼容 CircuitPython 的 Python 库。"))]),a("li",null,[n[35]||(n[35]=a("strong",null,"跳线和线缆",-1)),n[36]||(n[36]=s("：为了避免使用面包板或焊接，我使用 ")),p(t,{href:"https://www.adafruit.com/product/4399"},{default:e(()=>n[33]||(n[33]=[s("Adafruit Qwiic 线缆")])),_:1}),n[37]||(n[37]=s("。SparkFun 销售的包含不同长度的")),p(t,{href:"https://www.sparkfun.com/products/15081"},{default:e(()=>n[34]||(n[34]=[s("线缆套装")])),_:1}),n[38]||(n[38]=s("中也有它。"))])]),n[84]||(n[84]=a("p",null,"在将微控制器连接到你的电脑之前，将传感器连接到微控制器上。",-1)),n[85]||(n[85]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/uploads/connectsensors-microcontroller.jpg",alt:"将传感器连接到微控制器上",title:"Connecting sensors to microcontroller"})],-1)),n[86]||(n[86]=a("p",null,"现在你可以将微控制器用 USB 数据线连接到你的电脑。",-1)),n[87]||(n[87]=a("h3",{id:"mqtt-中介",tabindex:"-1"},[s("MQTT 中介 "),a("a",{class:"header-anchor",href:"#mqtt-中介","aria-label":"Permalink to MQTT 中介"},"​")],-1)),a("p",null,[n[44]||(n[44]=s("你可以使用 ")),p(t,{href:"https://pimylifeup.com/raspberry-pi-mosquitto-mqtt-server/"},{default:e(()=>n[41]||(n[41]=[s("这份说明")])),_:1}),n[45]||(n[45]=s(" 来在树莓派的系统上安装 ")),p(t,{href:"https://mosquitto.org/"},{default:e(()=>n[42]||(n[42]=[s("Mosquitto MQTT 中介")])),_:1}),n[46]||(n[46]=s(" 和 Mosquitto 客户端。如果你想把树莓派做为长期服务器使用，在你的网络上给树莓派 4 设置一个静态 IP 地址。Mosquitto 中介运行起来之后，创建一份 ")),p(t,{href:"https://mosquitto.org/documentation/authentication-methods/"},{default:e(()=>n[43]||(n[43]=[s("用户名/密码文件")])),_:1}),n[47]||(n[47]=s("，设置客户端向中介发布和订阅消息时用的认证信息。"))]),n[88]||(n[88]=i('<p>你可以用树莓派上的 Mosquitto 客户端来测试 MQTT 中介。打开两个终端（如果你是无界面运行的话打开两个 SSH 会话）：</p><p>在终端一输入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mosquitto_sub -h localhost -u $user -P $pass -t &quot;mqtt/test&quot;</span></span></code></pre></div><p>这条命令会启动一个持续运行的进程，监听发布到 <code>mqtt/test</code> 队列的消息。</p><p>在终端二输入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mosquitto_pub -h localhost -u $user -P $pass -t &quot;mqtt/test&quot; -m hello`</span></span></code></pre></div><p>这条命令会向 <code>mqtt/test</code> 队列发布一条消息，它应该会显示在终端一的输出里。</p><p>现在你可以中止终端一运行的 <code>sub</code> 命令了。</p><p>Mosquitto 中介允许客户端发布消息到任何队列，甚至没有任何订阅的队列也可以。这些消息会永久丢失，但这不会阻止客户端继续发布消息。</p><p>打开第三个终端，订阅下列队列（你的控制器会发布消息到这些队列上）：</p><ul><li>greenhouse/temperature</li><li>greenhouse/light</li><li>greenhouse/humidity</li></ul><h3 id="给微控制器编码" tabindex="-1">给微控制器编码 <a class="header-anchor" href="#给微控制器编码" aria-label="Permalink to 给微控制器编码">​</a></h3><p>现在你已经准备好给微控制器编码，发布它的监测指标到树莓派 4 上运行的 MQTT 中介上了。</p>',13)),a("p",null,[n[50]||(n[50]=s("Adafruit 有 ")),p(t,{href:"https://learn.adafruit.com/mqtt-in-circuitpython"},{default:e(()=>n[48]||(n[48]=[s("出色的文档")])),_:1}),n[51]||(n[51]=s("，指导你使用 ")),p(t,{href:"https://circuitpython.org/libraries"},{default:e(()=>n[49]||(n[49]=[s("CircuitPython 库合集")])),_:1}),n[52]||(n[52]=s(" 的库来将你的微控制器连接到 WiFi 路由器，并发布监测指标到 MQTT 中介上。"))]),n[89]||(n[89]=i(`<p>安装下列库到 <code>CIRCUITPYTHON/lib</code> 目录，温室监控会用到它们。这些库在 Adafruit 的 CircuitPython 库合集中都有提供：</p><ul><li><code>adafruit_bus_device</code>：一个带有多个 .mpy 文件的 Python 包文件夹（.mpy 是经过压缩的 Python 文件，用以节省空间）</li><li><code>adafruit_requests</code>：单个 .mpy 文件</li><li><code>adafruit_register</code>：一个包文件夹</li><li><code>adafruit_minimqtt</code>：一个包文件夹</li><li><code>adafruit_si7021</code>：单个 .mpy 文件，用来支持温湿度传感器</li></ul><p>库装好了之后，将以下代码写入 <code>CIRCUITPYTHON</code> 文件夹的 <code>code.py</code> 文件中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import time</span></span>
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
<span class="line"><span>        time.sleep(0.5)</span></span></code></pre></div><p>保存你的代码。然后连接到串行监视器，看程序连接到你的 MQTT 中介。你还可以将树莓派 4 上的终端切换到订阅了它的发布队列的终端来查看输出。</p><h3 id="处理监测指标" tabindex="-1">处理监测指标 <a class="header-anchor" href="#处理监测指标" aria-label="Permalink to 处理监测指标">​</a></h3><p>像 MQTT 这样的发布/订阅工作流给微控制器系统提供了诸多好处。你可以有多个微控制器 + 传感器来回报同一个系统的不同指标或并行回报相同指标的若干读数。你还可以有多个不同进程订阅各个队列，并行地对这些消息进行回应。甚至还可以有多个进程订阅相同的队列，对消息做出不同的动作，比如数值过高时发送通知邮件或将消息发送到另一个 MQTT 队列上去。</p><p>另一个选项是让一个微控制器订阅一个外部队列，可以发送信号告诉微控制器做出动作，比如关闭或开始一个新会话。最后，发布/订阅工作流对低功耗微控制器系统更佳（比如那些使用电池或太阳能的系统），因为这些设备可以在更长的延迟周期后批量发布监测指标，并在回报的间隔期间关闭大量消耗电量的 WiFi 广播。</p>`,8)),a("p",null,[n[56]||(n[56]=s("要处理这些监测指标，我创建了一个 Python 客户端，使用 ")),p(t,{href:"https://pypi.org/project/paho-mqtt/"},{default:e(()=>n[53]||(n[53]=[s("Paho Python MQTT 客户端")])),_:1}),n[57]||(n[57]=s(" 订阅监测指标队列。我还使用官方的 ")),p(t,{href:"https://pypi.org/project/prometheus-client"},{default:e(()=>n[54]||(n[54]=[s("Prometheus Python 客户端")])),_:1}),n[58]||(n[58]=s(" 创建了一个 Web 服务器，它产生一个符合 Prometheus 标准的采集端点，使用这些监测指标作为面板信息。")),p(t,{href:"https://opensource.com/article/21/3/iot-measure-raspberry-pi"},{default:e(()=>n[55]||(n[55]=[s("Prometheus 服务器")])),_:1}),n[59]||(n[59]=s("和 Mosquitto MQTT 中介我都是运行在同一个树莓派 4 上的。"))]),n[90]||(n[90]=i(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from prometheus_client import start_http_server, Gauge</span></span>
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
<span class="line"><span>        client.loop_forever()</span></span></code></pre></div><p>然后我配置 Prometheus 服务器采集端点数据到 <code>localhost:8000</code>。</p>`,2)),a("p",null,[n[61]||(n[61]=s("你可以在 Github 上访问 ")),p(t,{href:"https://github.com/dmlond/greenhouse_mqtt_microcontroller"},{default:e(()=>n[60]||(n[60]=[s("温室 MQTT 微控制器")])),_:1}),n[62]||(n[62]=s(" 这个项目的代码，项目采用 MIT 许可证授权。"))]),n[91]||(n[91]=a("hr",null,null,-1)),a("p",null,[n[64]||(n[64]=s("via: ")),p(t,{href:"https://opensource.com/article/21/5/monitor-greenhouse-open-source"},{default:e(()=>n[63]||(n[63]=[s("https://opensource.com/article/21/5/monitor-greenhouse-open-source")])),_:1})]),a("p",null,[n[69]||(n[69]=s("作者：")),p(t,{href:"https://opensource.com/users/dmlond"},{default:e(()=>n[65]||(n[65]=[s("Darin London")])),_:1}),n[70]||(n[70]=s(" 选题：")),p(t,{href:"https://github.com/lujun9972"},{default:e(()=>n[66]||(n[66]=[s("lujun9972")])),_:1}),n[71]||(n[71]=s(" 译者：")),p(t,{href:"https://github.com/alim0x"},{default:e(()=>n[67]||(n[67]=[s("alim0x")])),_:1}),n[72]||(n[72]=s(" 校对：")),p(t,{href:"https://github.com/wxy"},{default:e(()=>n[68]||(n[68]=[s("wxy")])),_:1})]),a("p",null,[n[75]||(n[75]=s("本文由 ")),p(t,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>n[73]||(n[73]=[s("LCTT")])),_:1}),n[76]||(n[76]=s(" 原创编译，")),p(t,{href:"https://linux.cn/"},{default:e(()=>n[74]||(n[74]=[s("Linux中国")])),_:1}),n[77]||(n[77]=s(" 荣誉推出"))])])}const C=l(d,[["render",m]]);export{b as __pageData,C as default};
