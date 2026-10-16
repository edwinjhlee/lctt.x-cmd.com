import{_ as i,a0 as a,w as r,s as u,ao as l,I as n,x as o,a1 as p,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const c=JSON.parse('{"title":"为 Kodi 自制遥控器 | LCTT x X-CMD","titleTemplate":false,"description":"为 Kodi 自制遥控器 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"为 Kodi 自制遥控器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"为 Kodi 自制遥控器 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150616 XBMC--build a remote control","title":"为 Kodi 自制遥控器","tag":"201507","desc":""},"relativePath":"201507/20150616 XBMC--build a remote control.md","filePath":"[post].md"}'),d={name:"201507/20150616 XBMC--build a remote control.md"};function m(g,t,q,b,y,f){const e=a("Link");return r(),u("div",null,[t[33]||(t[33]=l(`<h1 id="为-kodi-自制遥控器" tabindex="-1">为 Kodi 自制遥控器 <a class="header-anchor" href="#为-kodi-自制遥控器" aria-label="Permalink to “为 Kodi 自制遥控器”">​</a></h1><p><strong>通过运行在 Android 手机上的自制遥控器来控制你的家庭媒体播放器。</strong></p><p><strong>Kodi</strong> 是一款很优秀的软件，能够将几乎所有电脑变身成媒体中心。它可以播放音乐和视频，显示图片，甚至还能显示天气预报。为了在配置成家庭影院后方便使用，你可以通过手机 app 访问运行在连接到 Wi-Fi 的 XBMC 机器上的服务来控制它。可以找到很多这种工具，几乎覆盖所有智能手机系统。</p><blockquote><p><strong>XBMC</strong></p><p>Kodi 原名叫做 XBMC，在你阅读这篇文章的时候，<strong>XBMC</strong> 已经成为历史。因为法律原因（因为名字 <strong>XBMC</strong> 或 X**-Box Media Center** 里引用了不再支持的过时硬件）项目组决定使用新的名字 <strong>Kodi</strong>。不过，除了名字，其他的都会保持原样。或者说除开通常新版本中所期待的大量新改进。这一般不会影响到遥控软件，它应该能在已有的 <strong>XBMC</strong> 系统和新的 Kodi 系统上都能工作。</p></blockquote><p>我们目前已经配置好了一个用于播放音乐的 <strong>Kodi</strong> 系统，不过我们找到的所有 Kodi 遥控没一个好用的，特别是和媒体中心连接的电视没打开的时候。它们都有点太复杂了，集成了太多功能在手机的小屏幕上。我们希望能有这样的系统，从最开始就是设计成只用于访问音乐库和电台插件，所以我们决定自己实现一个。它不需要用到 Kodi 的所有功能，因为除了音乐以外的任务，我们可以简单地切换使用通用的 Kodi 遥控。我们的测试系统是一个刷了 RaspBMC 发行版的树莓派，但是我们要做的工具并不受限于树莓派或Kodi那个发行版，它应该可以匹配任何安装了相关插件的基于 Linux 的 Kodi 系统。</p><p>首先，遥控程序需要一个用户界面。大多数 Kodi 遥控程序都是独立的 app。不过对于我们要做的这个音乐控制程序，我们希望用户可以不用安装任何东西就可以使用。显然我们需要使用网页界面。Kodi 本身自带网页服务器，但是为了获得更多权限，我们还是使用了独立的网页框架。在同一台电脑上跑两个以上网页服务器没有问题，只不过它们不能使用相同的端口。</p><p>有几个网页框架可以使用。而我们选用 Bottle 是因为它是一个简单高效的框架，而且我们也确实用不到任何高级功能。Bottle 是一个 Python 模块，所以这也将是我们编写服务器模块的语言。</p><p>你应该能在软件包管理器里找到 Bottle。在基于 Debian 的系统（包括 RaspBMC）里，你可以通过下面的命令安装：</p><pre><code>sudo apt-get install python-bottle
</code></pre><p>遥控程序实际上只是连接用户和系统的中间层。Bottle 提供了和用户交互的方式，而我们将通过 JSON API 来和 <strong>Kodi</strong> 交互。这样可以让我们通过发送 JSON 格式消息的方式去控制媒体播放器。</p><p>我们将用到一个叫做 xbmcjson 的简单 XBMC JASON API 封装。足够用来发送控制请求，而不需要关心实际的 JSON 格式以及和服务器通讯的无聊事。它没有包含在 PIP 包管理中，所以你得直接从 <strong>GitHub</strong> 安装：</p><pre><code>git clone https://github.com/jcsaaddupuy/python-xbmc.git
cd python-xbmc
sudo python setup.py install
</code></pre><p>万事俱备，只欠代码。</p><h4 id="先从-bottle-开始" tabindex="-1">先从 Bottle 开始 <a class="header-anchor" href="#先从-bottle-开始" aria-label="Permalink to “先从 Bottle 开始”">​</a></h4><p>我们程序的基本结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from xbmcjson import XBMC</span></span>
<span class="line"><span>from bottle import route, run, template, redirect, static_file, request</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>xbmc = XBMC(&quot;http://192.168.0.5/jsonrpc&quot;, &quot;xbmc&quot;, &quot;xbmc&quot;)</span></span>
<span class="line"><span>@route(&#39;/hello/&lt;name&gt;&#39;)</span></span>
<span class="line"><span>def index(name):</span></span>
<span class="line"><span>return template(&#39;&lt;h1&gt;Hello {{name}}!&lt;/h1&gt;&#39;, name=name)</span></span>
<span class="line"><span>run(host=&quot;0.0.0.0&quot;, port=8000)</span></span></code></pre></div><p>这样程序将连接到 <strong>Kodi</strong>（不过实际上用不到）；然后 Bottle 会开始提供网站服务。在我们的代码里，它将监听主机 0.0.0.0（意味着允许所有主机连接）的端口 8000。它只设定了一个站点，就是 /hello/XXXX，这里的 XXXX 可以是任何内容。不管 XXXX 是什么都将作为参数名传递给 index()。然后再替换进去 HTML 网页模版。</p><p>你可以先试着把上面内容写到一个文件（我们取的名字是 remote.py），然后用下面的命令启动：</p><pre><code>python remote.py
</code></pre><p>然后你可以在浏览器里访问 localhost:8000/hello/world 看看模版生效的效果。</p><p>@route() 用来设定网页服务器的路径，而函数 index() 会返回该路径的数据。通常是返回由模版生成的 HTML 页面，但是并不是说只能这样（后面会看到）。</p><p>随后，我们将给应用添加更多页面入口，让它变成一个全功能的 Kodi 遥控，但仍将采用相同代码结构。</p><p>XBMC JSON API 接口可以从和 Kodi 机器同网段的任意电脑上访问。也就是说你可以在自己的笔记本上开发，然后再布置到媒体中心上，而不需要浪费时间上传每次改动。</p><p>模版 - 比如前面例子里的那个简单模版 - 是一种结合 Python 和 HTML 来控制输出的方式。理论上，这俩能做很多很多事，但是会非常混乱。我们将只是用它们来生成正确格式的数据。不过，在开始动手之前，我们先得准备点数据。</p>`,24)),n("blockquote",null,[t[3]||(t[3]=n("p",null,[n("strong",null,"Paste")],-1)),t[4]||(t[4]=n("p",null,"Bottle 自带网页服务器，我们用它来测试遥控程序。不过，我们发现它性能有时不够好。当我们的遥控程序正式上线时，我们希望页面能更快一点显示出来。Bottle 可以和很多不同的网页服务器配合工作，而我们发现 Paste 用起来非常不错。而要使用的话，只要简单地安装（Debian 系统里的 python-paste 包），然后修改一下代码里的 run 调用：",-1)),t[5]||(t[5]=n("pre",null,[n("code",null,`run(host=hostname, port=hostport, server="paste")
`)],-1)),n("p",null,[t[1]||(t[1]=o("你可以在 ",-1)),p(e,{href:"http://bottlepy.org/docs/dev/deployment.html"},{default:s(()=>[...t[0]||(t[0]=[o("http://bottlepy.org/docs/dev/deployment.html",-1)])]),_:1}),t[2]||(t[2]=o(" 找到如何使用其他服务器的相关细节。",-1))])]),t[34]||(t[34]=l(`<h4 id="从-kodi-获取数据" tabindex="-1">从 Kodi 获取数据 <a class="header-anchor" href="#从-kodi-获取数据" aria-label="Permalink to “从 Kodi 获取数据”">​</a></h4><p>XBMC JSON API 分成 14 个命名空间：JSONRPC, Player, Playlist, Files, AudioLibrary, VideoLibrary, Input, Application, System, Favourites, Profiles, Settings, Textures 和 XBMC。每个都可以通过 Python 的 XBMC 对象访问（Favourites 除外，明显是个疏忽）。每个命名空间都包含许多方法用于对程序的控制。例如，Playlist.GetItems() 可以用来获取某个特定播放列表的内容。服务器会返回给我们 JSON 格式的数据，但 xbmcjson 模块会为我们转化成 Python 词典。</p><p>我们需要用到 Kodi 里的两个组件来控制播放：播放器和播放列表。播放器处理播放列表并在每首歌结束时从列表里取下一首。为了查看当前正在播放的内容，我们需要获取正在工作的播放器的 ID，然后根据它找到当前播放列表的 ID。这个可以通过下面的代码来实现：</p><pre><code>def get_playlistid():
player = xbmc.Player.GetActivePlayers()
if len(player[&#39;result&#39;]) &gt; 0:
playlist_data = xbmc.Player.GetProperties({&quot;playerid&quot;:0, &quot;properties&quot;:[&quot;playlistid&quot;]})
if len(playlist_data[&#39;result&#39;]) &gt; 0 and &quot;playlistid&quot; in playlist_data[&#39;result&#39;].keys():
return playlist_data[&#39;result&#39;][&#39;playlistid&#39;]
return -1
</code></pre><p>如果当前没有播放器在工作（就是说，返回数据的结果部分的长度是 0），或者当前播放器没有处理播放列表，这样的话函数会返回 -1。其他时候，它会返回当前播放列表的数字 ID。</p><p>当我们拿到当前播放列表的 ID 后，就可以获取该列表的细节内容。按照我们的需求，有两个重要的地方：播放列表里包含的项，以及当前播放所处的位置（已经播放过的项并不会从播放列表移除，只是移动当前播放位置）。</p><pre><code>def get_playlist():
playlistid = get_playlistid()
if playlistid &gt;= 0:
data = xbmc.Playlist.GetItems({&quot;playlistid&quot;:playlistid, &quot;properties&quot;: [&quot;title&quot;, &quot;album&quot;, &quot;artist&quot;, &quot;file&quot;]})
position_data = xbmc.Player.GetProperties({&quot;playerid&quot;:0, &#39;properties&#39;:[&quot;position&quot;]})
position = int(position_data[&#39;result&#39;][&#39;position&#39;])
return data[&#39;result&#39;][&#39;items&#39;][position:], position
return [], -1
</code></pre><p>这样可以返回正在播放的项开始的列表（因为我们并不关心已经播放过的内容），而且也包含了用来从列表里移除项的位置信息。</p><p><img src="http://www.linuxvoice.com/wp-content/uploads/2015/04/xbmc2-large.jpg" alt="Image"></p>`,9)),n("p",null,[t[7]||(t[7]=o("API 文档在这里：",-1)),p(e,{href:"http://wiki.xbmc.org/?title=JSON-RPC_API/v6"},{default:s(()=>[...t[6]||(t[6]=[o("http://wiki.xbmc.org/?title=JSON-RPC_API/v6",-1)])]),_:1}),t[8]||(t[8]=o("。它列出了所有支持的函数，但是关于具体如何使用的描述有点太简单了。",-1))]),t[35]||(t[35]=l(`<blockquote><p><strong>JSON</strong></p><p>JSON 是 JavaScript Object Notation 的缩写，最初设计用于 JavaScript 对象的序列化。目前仍然起到这个作用，但是它也是用来编码任意数据的一种很好用的方式。</p><p>JSON 对象都是这样的格式：</p><pre><code>{property1:value1, property2:value2, property3:value3}
</code></pre><p>支持任意数目的属性/值配对。对 Python 程序员来说，看上去和字典数据结构很相似，不过这两个确实很像。</p><p>在字典数据结构里，值本身可以是另一个 JSON 对象，或者一个列表，所以下面的格式也是正确的：</p><pre><code>{&quot;name&quot;:&quot;Ben&quot;, &quot;jobs&quot;:[&quot;cook&quot;, &quot;bottle-washer&quot;], &quot;appearance&quot;: {&quot;height&quot;:195, &quot;skin&quot;:&quot;fair&quot;}}
</code></pre><p>JSON 通常在网络服务中用来发送和接收数据，并且大多数编程语言都能很好地支持，所以如果你熟悉 Python 的话，你应该可以使用你熟悉的编程语言调用相同的接口来轻松地控制 Kodi。</p></blockquote><h4 id="整合到一起" tabindex="-1">整合到一起 <a class="header-anchor" href="#整合到一起" aria-label="Permalink to “整合到一起”">​</a></h4><p>把之前的功能连接到 HTML 页面很简单：</p><pre><code>@route(&#39;/juke&#39;)
def index():
current_playlist, position = get_playlist()
return template(&#39;list&#39;, playlist=current_playlist, offset = position)
</code></pre><p>只需要抓取播放列表（调用我们之前定义的函数），然后将结果传递给负责显示的模版。</p><p>负责显示列表数据的模版的主要部分是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;h2&gt;Currently Playing:&lt;/h2&gt;</span></span>
<span class="line"><span>% if playlist is not None:</span></span>
<span class="line"><span>% position = offset</span></span>
<span class="line"><span>% for song in playlist:</span></span>
<span class="line"><span>&lt;strong&gt; {{song[&#39;title&#39;]}} &lt;/strong&gt;</span></span>
<span class="line"><span>% if song[&#39;type&#39;] == &#39;unknown&#39;:</span></span>
<span class="line"><span>Radio</span></span>
<span class="line"><span>% else:</span></span>
<span class="line"><span>{{song[&#39;artist&#39;][0]}}</span></span>
<span class="line"><span>% end</span></span>
<span class="line"><span>% if position != offset:</span></span>
<span class="line"><span>&lt;a href=&quot;/remove/{{position}}&quot;&gt;remove&lt;/a&gt;</span></span>
<span class="line"><span>% else:</span></span>
<span class="line"><span>&lt;a href=&quot;/skip/{{position}}&quot;&gt;skip&lt;/a&gt;</span></span>
<span class="line"><span>% end</span></span>
<span class="line"><span>&lt;br&gt;</span></span>
<span class="line"><span>% position += 1</span></span>
<span class="line"><span>% end</span></span></code></pre></div><p>可以看到，模版大部分是用 HTML 写的，只有一小部分用来控制输出的其他代码。用两个大括号括起来的变量是输出位置（像我们在第一个 &#39;hello world&#39; 例子里看到的）。你也可以嵌入以百分号开头的 Python 代码。因为没有缩进，你需要用一个 <code>% end</code> 来结束当前的代码块（就像循环或 if 语句）。</p><p>这个模版首先检查列表是否为空，然后遍历里面的每一项。每一项会用粗体显示歌曲名字，然后是艺术家名字，然后是一个是否跳过（如果是当前正在播的歌曲）或从列表移除的链接。所有歌曲的类型都是 &#39;song&#39;，如果类型是 &#39;unknown&#39;，那就不是歌曲而是网络电台。</p><p>/remove/ 和 /skip/ 路径只是简单地封装了 XBMC 控制功能，在改动生效后重新加载 /juke：</p><pre><code>@route(&#39;/skip/&lt;position&gt;&#39;)
def index(position):
print xbmc.Player.GoTo({&#39;playerid&#39;:0, &#39;to&#39;:&#39;next&#39;})
redirect(&quot;/juke&quot;)
@route(&#39;/remove/&lt;position&gt;&#39;)
def index(position):
playlistid = get_playlistid()
if playlistid &gt;= 0:
xbmc.Playlist.Remove({&#39;playlistid&#39;:int(playlistid), &#39;position&#39;:int(position)})
redirect(&quot;/juke&quot;)
</code></pre><p>当然，如果不能往列表里添加歌曲的话那这个列表管理功能也不行。</p><p>因为一旦播放列表结束，它就消失了，所以你需要重新创建一个，这会让事情复杂一些。而且有点让人迷惑的是，播放列表是通过调用 Playlist.Clear() 方法来创建的。这个方法也还用来删除包含网络电台（类型是 unknown）的播放列表。另一个麻烦的地方是列表里的网络电台开始播放后就不会停，所以如果当前在播网络电台，也会需要清除播放列表。</p><p>这些页面包含了指向 /play/&lt;songid&gt; 的链接来播放歌曲。通过下面的代码处理：</p><pre><code>@route(&#39;/play/&lt;id&gt;&#39;)
def index(id):
playlistid = get_playlistid()
playlist, not_needed= get_playlist()
if playlistid &lt; 0 or playlist[0][&#39;type&#39;] == &#39;unknown&#39;:
xbmc.Playlist.Clear({&quot;playlistid&quot;:0})
xbmc.Playlist.Add({&quot;playlistid&quot;:0, &quot;item&quot;:{&quot;songid&quot;:int(id)}})
xbmc.Player.open({&quot;item&quot;:{&quot;playlistid&quot;:0}})
playlistid = 0
else:
xbmc.Playlist.Add({&quot;playlistid&quot;:playlistid, &quot;item&quot;:{&quot;songid&quot;:int(id)}})
remove_duplicates(playlistid)
redirect(&quot;/juke&quot;)
</code></pre><p>最后一件事情是实现 remove_duplicates 调用。这并不是必须的 - 而且还有人并不喜欢这个 - 不过可以保证同一首歌不会多次出现在播放列表里。</p><p>我们也实现了一些页面用来列出收藏歌曲里所有艺术家，以及列出指定艺术家的歌曲和专辑。这些都非常简单，和 /juke 页面基本类似。</p><p><img src="http://www.linuxvoice.com/wp-content/uploads/2015/04/xbmc1-large.jpg" alt="Image"></p><p>还需要处理一下 UI，不过功能已经有了。</p><blockquote><p><strong>日志</strong></p><p>通常拿到 XBMC JSON API 并不清楚能用来做什么，而且它的文档也有点模糊。找出如何使用的一种方式是看别的遥控程序是怎么做的。如果打开日志功能，就可以在使用其他遥控程序的时候看到哪个 API 被调用了，然后就可以应用到在自己的代码里。</p><p>要打开日志功能，把 Kodi 媒体中心 接到显示器上，再依次进入设置 &gt; 系统 &gt; 调试，打开允许调试日志。在打开日志功能后，还需要登录到 Kodi 机器上（比如通过 SSH），然后就可以查看日志了。日志文件的位置应该显示在 Kodi 界面左上角。在 RaspBMC 系统里，文件位置是 /home/pi/.xbmc/temp/xbmc.log。你可以通过下面的命令实时监视哪个 API 接口被调用了：</p><pre><code>cd /home/pi/.xbmc/temp
tail -f xbmc.log | grep &quot;JSON&quot;
</code></pre></blockquote><h4 id="增加功能" tabindex="-1">增加功能 <a class="header-anchor" href="#增加功能" aria-label="Permalink to “增加功能”">​</a></h4><p>上面的代码都是用来播放 Kodi 媒体库里的歌曲的，但我们还希望能播放网络电台。每个插件都有自己的独立 URL 可以通过普通的 XBMC JSON 命令来获取信息。举个例子，要从电台插件里获取选中的电台，可以使用；</p><pre><code>@route(&#39;/radio/&#39;)
def index():
my_stations = xbmc.Files.GetDirectory({&quot;directory&quot;:&quot;plugin://plugin.audio.radio_de/stations/my/&quot;, &quot;properties&quot;:
[&quot;title&quot;,&quot;thumbnail&quot;,&quot;playcount&quot;,&quot;artist&quot;,&quot;album&quot;,&quot;episode&quot;,&quot;season&quot;,&quot;showtitle&quot;]})
if &#39;result&#39; in my_stations.keys():
return template(&#39;radio&#39;, stations=my_stations[&#39;result&#39;][&#39;files&#39;])
else:
return template(&#39;error&#39;, error=&#39;radio&#39;)
</code></pre><p>这样可以返回一个可以和歌曲一样能添加到播放列表的文件。不过，这些文件能一直播下去，所以（之前说过）在添加其他歌曲的时候需要重新创建列表。</p><h4 id="共享歌曲" tabindex="-1">共享歌曲 <a class="header-anchor" href="#共享歌曲" aria-label="Permalink to “共享歌曲”">​</a></h4><p>除了伺服页面模版，Bottle 还支持静态文件，方便用于那些不会因为用户输入而改变的内容。可以是 CSS 文件，一张图片或是一首 MP3 歌曲。在我们的简单遥控程序里（目前）还没有任何用来美化的 CSS 或图片，不过我们增加了一个下载歌曲的途径。这个可以让媒体中心变成一个存放歌曲的 NAS 盒子。在需要传输大量数据的时候，最好还是用类似 Samba 的功能，但只是下几首歌到手机上的话使用静态文件也是很好的方式。</p><p>通过歌曲 ID 来下载的 Bottle 代码：</p><pre><code>@route(&#39;/download/&lt;id&gt;&#39;)
def index(id):
data = xbmc.AudioLibrary.GetSongDetails({&quot;songid&quot;:int(id), &quot;properties&quot;:[&quot;file&quot;]})
full_filename = data[&#39;result&#39;][&#39;songdetails&#39;][&#39;file&#39;]
path, filename = os.path.split(full_filename)
return static_file(filename, root=path, download=True)
</code></pre><p>应用的时候，只需要为 /songsby/ 页面里的相应 ID 加个链接。</p>`,29)),n("p",null,[t[10]||(t[10]=o("我们已经把所有的代码过了一遍，不过还需要一点工作来把它们集合到一起。可以自己去 GitHub 页面 ",-1)),p(e,{href:"https://github.com/ben-ev/xbmc-remote"},{default:s(()=>[...t[9]||(t[9]=[o("https://github.com/ben-ev/xbmc-remote",-1)])]),_:1}),t[11]||(t[11]=o(" 看下。",-1))]),t[36]||(t[36]=n("blockquote",null,[n("p",null,[n("strong",null,"设置")]),n("p",null,"我们的遥控程序已经开发完成，还需要保证让它在媒体中心每次开机的时候都能启动。有几种方式，最简单的是在 /etc/rc.local 里增加一行命令来启动。我们的文件位置在 /opt/xbmc-remote/remote.py，其他文件也和它一起。然后在 /etc/rc.local 最后的 exit 0 之前增加了下面一行。"),n("pre",null,[n("code",null,`cd /opt/xbmc-remote && python remote.py &
`)])],-1)),n("blockquote",null,[t[18]||(t[18]=n("p",null,[n("strong",null,"GitHub")],-1)),t[19]||(t[19]=n("p",null,"这个项目目前还只是个架子，但是 - 我们运营杂志就意味着没有太多自由时间来编程。不过，我们启动了一个 GitHub 项目，希望能持续完善， 而如果你觉得这个项目有用的话，欢迎做出贡献。",-1)),n("p",null,[t[13]||(t[13]=o("要查看最新的进展，请访问 ",-1)),p(e,{href:"https://github.com/ben-ev/xbmc-remote"},{default:s(()=>[...t[12]||(t[12]=[o("https://github.com/ben-ev/xbmc-remote",-1)])]),_:1}),t[14]||(t[14]=o(" 看看所处的状态。你可以从页面里获取最新的代码，或者通过命令行复制。",-1))]),n("p",null,[t[16]||(t[16]=o("如果你希望改善它，可以复制项目到你自己的分支开发，然后在功能完成后发起合并请求。关于如何使用 GitHub 的更多信息，请访问 ",-1)),p(e,{href:"https://github.com/features"},{default:s(()=>[...t[15]||(t[15]=[o("https://github.com/features",-1)])]),_:1}),t[17]||(t[17]=o("。",-1))])]),t[37]||(t[37]=n("hr",null,null,-1)),n("p",null,[t[21]||(t[21]=o("via: ",-1)),p(e,{href:"http://www.linuxvoice.com/xbmc-build-a-remote-control/"},{default:s(()=>[...t[20]||(t[20]=[o("http://www.linuxvoice.com/xbmc-build-a-remote-control/",-1)])]),_:1})]),n("p",null,[t[25]||(t[25]=o("作者：",-1)),p(e,{href:"http://www.linuxvoice.com/author/ben_everard/"},{default:s(()=>[...t[22]||(t[22]=[o("Ben Everard",-1)])]),_:1}),t[26]||(t[26]=o(" 译者：",-1)),p(e,{href:"https://github.com/zpl1025"},{default:s(()=>[...t[23]||(t[23]=[o("zpl1025",-1)])]),_:1}),t[27]||(t[27]=o(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:s(()=>[...t[24]||(t[24]=[o("wxy",-1)])]),_:1})]),n("p",null,[t[30]||(t[30]=o("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[28]||(t[28]=[o("LCTT",-1)])]),_:1}),t[31]||(t[31]=o(" 原创翻译，",-1)),p(e,{href:"https://linux.cn/"},{default:s(()=>[...t[29]||(t[29]=[o("Linux中国",-1)])]),_:1}),t[32]||(t[32]=o(" 荣誉推出",-1))])])}const k=i(d,[["render",m]]);export{c as __pageData,k as default};
