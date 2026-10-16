import{_ as i,a0 as a,w as r,s as u,ao as l,I as n,x as o,a1 as p,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"為 Kodi 自制遙控器 | LCTT x X-CMD","titleTemplate":false,"description":"為 Kodi 自制遙控器 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"為 Kodi 自制遙控器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"為 Kodi 自制遙控器 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150616 XBMC--build a remote control","title":"為 Kodi 自制遙控器","tag":"201507","desc":""},"relativePath":"201507/20150616 XBMC--build a remote control.md","filePath":"[post].md"}'),d={name:"201507/20150616 XBMC--build a remote control.md"};function m(g,t,q,b,y,f){const e=a("Link");return r(),u("div",null,[t[33]||(t[33]=l(`<h1 id="為-kodi-自制遙控器" tabindex="-1">為 Kodi 自制遙控器 <a class="header-anchor" href="#為-kodi-自制遙控器" aria-label="Permalink to “為 Kodi 自制遙控器”">​</a></h1><p><strong>通過運行在 Android 手機上的自制遙控器來控制你的家庭媒體播放器。</strong></p><p><strong>Kodi</strong> 是一款很優秀的軟件，能夠將幾乎所有電腦變身成媒體中心。它可以播放音樂和視頻，顯示圖片，甚至還能顯示天氣預報。為了在配置成家庭影院後方便使用，你可以通過手機 app 訪問運行在連接到 Wi-Fi 的 XBMC 機器上的服務來控制它。可以找到很多這種工具，幾乎覆蓋所有智能手機系統。</p><blockquote><p><strong>XBMC</strong></p><p>Kodi 原名叫做 XBMC，在你閲讀這篇文章的時候，<strong>XBMC</strong> 已經成為歷史。因為法律原因（因為名字 <strong>XBMC</strong> 或 X**-Box Media Center** 裏引用了不再支持的過時硬件）項目組決定使用新的名字 <strong>Kodi</strong>。不過，除了名字，其他的都會保持原樣。或者説除開通常新版本中所期待的大量新改進。這一般不會影響到遙控軟件，它應該能在已有的 <strong>XBMC</strong> 系統和新的 Kodi 系統上都能工作。</p></blockquote><p>我們目前已經配置好了一個用於播放音樂的 <strong>Kodi</strong> 系統，不過我們找到的所有 Kodi 遙控沒一個好用的，特別是和媒體中心連接的電視沒打開的時候。它們都有點太複雜了，集成了太多功能在手機的小屏幕上。我們希望能有這樣的系統，從最開始就是設計成只用於訪問音樂庫和電台插件，所以我們決定自己實現一個。它不需要用到 Kodi 的所有功能，因為除了音樂以外的任務，我們可以簡單地切換使用通用的 Kodi 遙控。我們的測試系統是一個刷了 RaspBMC 發行版的樹莓派，但是我們要做的工具並不受限於樹莓派或Kodi那個發行版，它應該可以匹配任何安裝了相關插件的基於 Linux 的 Kodi 系統。</p><p>首先，遙控程序需要一個用户界面。大多數 Kodi 遙控程序都是獨立的 app。不過對於我們要做的這個音樂控制程序，我們希望用户可以不用安裝任何東西就可以使用。顯然我們需要使用網頁界面。Kodi 本身自帶網頁服務器，但是為了獲得更多權限，我們還是使用了獨立的網頁框架。在同一台電腦上跑兩個以上網頁服務器沒有問題，只不過它們不能使用相同的端口。</p><p>有幾個網頁框架可以使用。而我們選用 Bottle 是因為它是一個簡單高效的框架，而且我們也確實用不到任何高級功能。Bottle 是一個 Python 模組，所以這也將是我們編寫服務器模組的語言。</p><p>你應該能在軟件包管理器裏找到 Bottle。在基於 Debian 的系統（包括 RaspBMC）裏，你可以通過下面的命令安裝：</p><pre><code>sudo apt-get install python-bottle
</code></pre><p>遙控程序實際上只是連接用户和系統的中間層。Bottle 提供了和用户交互的方式，而我們將通過 JSON API 來和 <strong>Kodi</strong> 交互。這樣可以讓我們通過發送 JSON 格式消息的方式去控制媒體播放器。</p><p>我們將用到一個叫做 xbmcjson 的簡單 XBMC JASON API 封裝。足夠用來發送控制請求，而不需要關心實際的 JSON 格式以及和服務器通訊的無聊事。它沒有包含在 PIP 包管理中，所以你得直接從 <strong>GitHub</strong> 安裝：</p><pre><code>git clone https://github.com/jcsaaddupuy/python-xbmc.git
cd python-xbmc
sudo python setup.py install
</code></pre><p>萬事俱備，只欠代碼。</p><h4 id="先從-bottle-開始" tabindex="-1">先從 Bottle 開始 <a class="header-anchor" href="#先從-bottle-開始" aria-label="Permalink to “先從 Bottle 開始”">​</a></h4><p>我們程序的基本結構：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from xbmcjson import XBMC</span></span>
<span class="line"><span>from bottle import route, run, template, redirect, static_file, request</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>xbmc = XBMC(&quot;http://192.168.0.5/jsonrpc&quot;, &quot;xbmc&quot;, &quot;xbmc&quot;)</span></span>
<span class="line"><span>@route(&#39;/hello/&lt;name&gt;&#39;)</span></span>
<span class="line"><span>def index(name):</span></span>
<span class="line"><span>return template(&#39;&lt;h1&gt;Hello {{name}}!&lt;/h1&gt;&#39;, name=name)</span></span>
<span class="line"><span>run(host=&quot;0.0.0.0&quot;, port=8000)</span></span></code></pre></div><p>這樣程序將連接到 <strong>Kodi</strong>（不過實際上用不到）；然後 Bottle 會開始提供網站服務。在我們的代碼裏，它將監聽主機 0.0.0.0（意味着允許所有主機連接）的端口 8000。它只設定了一個站點，就是 /hello/XXXX，這裏的 XXXX 可以是任何內容。不管 XXXX 是什麼都將作為參數名傳遞給 index()。然後再替換進去 HTML 網頁模版。</p><p>你可以先試着把上面內容寫到一個文件（我們取的名字是 remote.py），然後用下面的命令啓動：</p><pre><code>python remote.py
</code></pre><p>然後你可以在瀏覽器裏訪問 localhost:8000/hello/world 看看模版生效的效果。</p><p>@route() 用來設定網頁服務器的路徑，而函數 index() 會返回該路徑的數據。通常是返回由模版生成的 HTML 頁面，但是並不是説只能這樣（後面會看到）。</p><p>隨後，我們將給應用添加更多頁面入口，讓它變成一個全功能的 Kodi 遙控，但仍將採用相同代碼結構。</p><p>XBMC JSON API 接口可以從和 Kodi 機器同網段的任意電腦上訪問。也就是説你可以在自己的筆記本上開發，然後再佈置到媒體中心上，而不需要浪費時間上傳每次改動。</p><p>模版 - 比如前面例子裏的那個簡單模版 - 是一種結合 Python 和 HTML 來控制輸出的方式。理論上，這倆能做很多很多事，但是會非常混亂。我們將只是用它們來生成正確格式的數據。不過，在開始動手之前，我們先得準備點數據。</p>`,24)),n("blockquote",null,[t[3]||(t[3]=n("p",null,[n("strong",null,"Paste")],-1)),t[4]||(t[4]=n("p",null,"Bottle 自帶網頁服務器，我們用它來測試遙控程序。不過，我們發現它性能有時不夠好。當我們的遙控程序正式上線時，我們希望頁面能更快一點顯示出來。Bottle 可以和很多不同的網頁服務器配合工作，而我們發現 Paste 用起來非常不錯。而要使用的話，只要簡單地安裝（Debian 系統裏的 python-paste 包），然後修改一下代碼裏的 run 調用：",-1)),t[5]||(t[5]=n("pre",null,[n("code",null,`run(host=hostname, port=hostport, server="paste")
`)],-1)),n("p",null,[t[1]||(t[1]=o("你可以在 ",-1)),p(e,{href:"http://bottlepy.org/docs/dev/deployment.html"},{default:s(()=>[...t[0]||(t[0]=[o("http://bottlepy.org/docs/dev/deployment.html",-1)])]),_:1}),t[2]||(t[2]=o(" 找到如何使用其他服務器的相關細節。",-1))])]),t[34]||(t[34]=l(`<h4 id="從-kodi-獲取數據" tabindex="-1">從 Kodi 獲取數據 <a class="header-anchor" href="#從-kodi-獲取數據" aria-label="Permalink to “從 Kodi 獲取數據”">​</a></h4><p>XBMC JSON API 分成 14 個命名空間：JSONRPC, Player, Playlist, Files, AudioLibrary, VideoLibrary, Input, Application, System, Favourites, Profiles, Settings, Textures 和 XBMC。每個都可以通過 Python 的 XBMC 對象訪問（Favourites 除外，明顯是個疏忽）。每個命名空間都包含許多方法用於對程序的控制。例如，Playlist.GetItems() 可以用來獲取某個特定播放列表的內容。服務器會返回給我們 JSON 格式的數據，但 xbmcjson 模組會為我們轉化成 Python 詞典。</p><p>我們需要用到 Kodi 裏的兩個組件來控制播放：播放器和播放列表。播放器處理播放列表並在每首歌結束時從列表裏取下一首。為了查看當前正在播放的內容，我們需要獲取正在工作的播放器的 ID，然後根據它找到當前播放列表的 ID。這個可以通過下面的代碼來實現：</p><pre><code>def get_playlistid():
player = xbmc.Player.GetActivePlayers()
if len(player[&#39;result&#39;]) &gt; 0:
playlist_data = xbmc.Player.GetProperties({&quot;playerid&quot;:0, &quot;properties&quot;:[&quot;playlistid&quot;]})
if len(playlist_data[&#39;result&#39;]) &gt; 0 and &quot;playlistid&quot; in playlist_data[&#39;result&#39;].keys():
return playlist_data[&#39;result&#39;][&#39;playlistid&#39;]
return -1
</code></pre><p>如果當前沒有播放器在工作（就是説，返回數據的結果部分的長度是 0），或者當前播放器沒有處理播放列表，這樣的話函數會返回 -1。其他時候，它會返回當前播放列表的數字 ID。</p><p>當我們拿到當前播放列表的 ID 後，就可以獲取該列表的細節內容。按照我們的需求，有兩個重要的地方：播放列表裏包含的項，以及當前播放所處的位置（已經播放過的項並不會從播放列表移除，只是移動當前播放位置）。</p><pre><code>def get_playlist():
playlistid = get_playlistid()
if playlistid &gt;= 0:
data = xbmc.Playlist.GetItems({&quot;playlistid&quot;:playlistid, &quot;properties&quot;: [&quot;title&quot;, &quot;album&quot;, &quot;artist&quot;, &quot;file&quot;]})
position_data = xbmc.Player.GetProperties({&quot;playerid&quot;:0, &#39;properties&#39;:[&quot;position&quot;]})
position = int(position_data[&#39;result&#39;][&#39;position&#39;])
return data[&#39;result&#39;][&#39;items&#39;][position:], position
return [], -1
</code></pre><p>這樣可以返回正在播放的項開始的列表（因為我們並不關心已經播放過的內容），而且也包含了用來從列表裏移除項的位置信息。</p><p><img src="http://www.linuxvoice.com/wp-content/uploads/2015/04/xbmc2-large.jpg" alt="Image"></p>`,9)),n("p",null,[t[7]||(t[7]=o("API 文檔在這裏：",-1)),p(e,{href:"http://wiki.xbmc.org/?title=JSON-RPC_API/v6"},{default:s(()=>[...t[6]||(t[6]=[o("http://wiki.xbmc.org/?title=JSON-RPC_API/v6",-1)])]),_:1}),t[8]||(t[8]=o("。它列出了所有支持的函數，但是關於具體如何使用的描述有點太簡單了。",-1))]),t[35]||(t[35]=l(`<blockquote><p><strong>JSON</strong></p><p>JSON 是 JavaScript Object Notation 的縮寫，最初設計用於 JavaScript 對象的序列化。目前仍然起到這個作用，但是它也是用來編碼任意數據的一種很好用的方式。</p><p>JSON 對象都是這樣的格式：</p><pre><code>{property1:value1, property2:value2, property3:value3}
</code></pre><p>支持任意數目的屬性/值配對。對 Python 程序員來説，看上去和字典數據結構很相似，不過這兩個確實很像。</p><p>在字典數據結構裏，值本身可以是另一個 JSON 對象，或者一個列表，所以下面的格式也是正確的：</p><pre><code>{&quot;name&quot;:&quot;Ben&quot;, &quot;jobs&quot;:[&quot;cook&quot;, &quot;bottle-washer&quot;], &quot;appearance&quot;: {&quot;height&quot;:195, &quot;skin&quot;:&quot;fair&quot;}}
</code></pre><p>JSON 通常在網絡服務中用來發送和接收數據，並且大多數編程語言都能很好地支持，所以如果你熟悉 Python 的話，你應該可以使用你熟悉的編程語言調用相同的接口來輕鬆地控制 Kodi。</p></blockquote><h4 id="整合到一起" tabindex="-1">整合到一起 <a class="header-anchor" href="#整合到一起" aria-label="Permalink to “整合到一起”">​</a></h4><p>把之前的功能連接到 HTML 頁面很簡單：</p><pre><code>@route(&#39;/juke&#39;)
def index():
current_playlist, position = get_playlist()
return template(&#39;list&#39;, playlist=current_playlist, offset = position)
</code></pre><p>只需要抓取播放列表（調用我們之前定義的函數），然後將結果傳遞給負責顯示的模版。</p><p>負責顯示列表數據的模版的主要部分是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;h2&gt;Currently Playing:&lt;/h2&gt;</span></span>
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
<span class="line"><span>% end</span></span></code></pre></div><p>可以看到，模版大部分是用 HTML 寫的，只有一小部分用來控制輸出的其他代碼。用兩個大括號括起來的變量是輸出位置（像我們在第一個 &#39;hello world&#39; 例子裏看到的）。你也可以嵌入以百分號開頭的 Python 代碼。因為沒有縮進，你需要用一個 <code>% end</code> 來結束當前的代碼塊（就像循環或 if 語句）。</p><p>這個模版首先檢查列表是否為空，然後遍歷裏面的每一項。每一項會用粗體顯示歌曲名字，然後是藝術家名字，然後是一個是否跳過（如果是當前正在播的歌曲）或從列表移除的鏈接。所有歌曲的類型都是 &#39;song&#39;，如果類型是 &#39;unknown&#39;，那就不是歌曲而是網絡電台。</p><p>/remove/ 和 /skip/ 路徑只是簡單地封裝了 XBMC 控制功能，在改動生效後重新加載 /juke：</p><pre><code>@route(&#39;/skip/&lt;position&gt;&#39;)
def index(position):
print xbmc.Player.GoTo({&#39;playerid&#39;:0, &#39;to&#39;:&#39;next&#39;})
redirect(&quot;/juke&quot;)
@route(&#39;/remove/&lt;position&gt;&#39;)
def index(position):
playlistid = get_playlistid()
if playlistid &gt;= 0:
xbmc.Playlist.Remove({&#39;playlistid&#39;:int(playlistid), &#39;position&#39;:int(position)})
redirect(&quot;/juke&quot;)
</code></pre><p>當然，如果不能往列表裏添加歌曲的話那這個列表管理功能也不行。</p><p>因為一旦播放列表結束，它就消失了，所以你需要重新創建一個，這會讓事情複雜一些。而且有點讓人迷惑的是，播放列表是通過調用 Playlist.Clear() 方法來創建的。這個方法也還用來刪除包含網絡電台（類型是 unknown）的播放列表。另一個麻煩的地方是列表裏的網絡電台開始播放後就不會停，所以如果當前在播網絡電台，也會需要清除播放列表。</p><p>這些頁面包含了指向 /play/&lt;songid&gt; 的鏈接來播放歌曲。通過下面的代碼處理：</p><pre><code>@route(&#39;/play/&lt;id&gt;&#39;)
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
</code></pre><p>最後一件事情是實現 remove_duplicates 調用。這並不是必須的 - 而且還有人並不喜歡這個 - 不過可以保證同一首歌不會多次出現在播放列表裏。</p><p>我們也實現了一些頁面用來列出收藏歌曲裏所有藝術家，以及列出指定藝術家的歌曲和專輯。這些都非常簡單，和 /juke 頁面基本類似。</p><p><img src="http://www.linuxvoice.com/wp-content/uploads/2015/04/xbmc1-large.jpg" alt="Image"></p><p>還需要處理一下 UI，不過功能已經有了。</p><blockquote><p><strong>日誌</strong></p><p>通常拿到 XBMC JSON API 並不清楚能用來做什麼，而且它的文檔也有點模糊。找出如何使用的一種方式是看別的遙控程序是怎麼做的。如果打開日誌功能，就可以在使用其他遙控程序的時候看到哪個 API 被調用了，然後就可以應用到在自己的代碼裏。</p><p>要打開日誌功能，把 Kodi 媒體中心 接到顯示器上，再依次進入設置 &gt; 系統 &gt; 調試，打開允許調試日誌。在打開日誌功能後，還需要登錄到 Kodi 機器上（比如通過 SSH），然後就可以查看日誌了。日誌文件的位置應該顯示在 Kodi 界面左上角。在 RaspBMC 系統裏，文件位置是 /home/pi/.xbmc/temp/xbmc.log。你可以通過下面的命令實時監視哪個 API 接口被調用了：</p><pre><code>cd /home/pi/.xbmc/temp
tail -f xbmc.log | grep &quot;JSON&quot;
</code></pre></blockquote><h4 id="增加功能" tabindex="-1">增加功能 <a class="header-anchor" href="#增加功能" aria-label="Permalink to “增加功能”">​</a></h4><p>上面的代碼都是用來播放 Kodi 媒體庫裏的歌曲的，但我們還希望能播放網絡電台。每個插件都有自己的獨立 URL 可以通過普通的 XBMC JSON 命令來獲取信息。舉個例子，要從電台插件裏獲取選中的電台，可以使用；</p><pre><code>@route(&#39;/radio/&#39;)
def index():
my_stations = xbmc.Files.GetDirectory({&quot;directory&quot;:&quot;plugin://plugin.audio.radio_de/stations/my/&quot;, &quot;properties&quot;:
[&quot;title&quot;,&quot;thumbnail&quot;,&quot;playcount&quot;,&quot;artist&quot;,&quot;album&quot;,&quot;episode&quot;,&quot;season&quot;,&quot;showtitle&quot;]})
if &#39;result&#39; in my_stations.keys():
return template(&#39;radio&#39;, stations=my_stations[&#39;result&#39;][&#39;files&#39;])
else:
return template(&#39;error&#39;, error=&#39;radio&#39;)
</code></pre><p>這樣可以返回一個可以和歌曲一樣能添加到播放列表的文件。不過，這些文件能一直播下去，所以（之前説過）在添加其他歌曲的時候需要重新創建列表。</p><h4 id="共享歌曲" tabindex="-1">共享歌曲 <a class="header-anchor" href="#共享歌曲" aria-label="Permalink to “共享歌曲”">​</a></h4><p>除了伺服頁面模版，Bottle 還支持靜態文件，方便用於那些不會因為用户輸入而改變的內容。可以是 CSS 文件，一張圖片或是一首 MP3 歌曲。在我們的簡單遙控程序裏（目前）還沒有任何用來美化的 CSS 或圖片，不過我們增加了一個下載歌曲的途徑。這個可以讓媒體中心變成一個存放歌曲的 NAS 盒子。在需要傳輸大量數據的時候，最好還是用類似 Samba 的功能，但只是下幾首歌到手機上的話使用靜態文件也是很好的方式。</p><p>通過歌曲 ID 來下載的 Bottle 代碼：</p><pre><code>@route(&#39;/download/&lt;id&gt;&#39;)
def index(id):
data = xbmc.AudioLibrary.GetSongDetails({&quot;songid&quot;:int(id), &quot;properties&quot;:[&quot;file&quot;]})
full_filename = data[&#39;result&#39;][&#39;songdetails&#39;][&#39;file&#39;]
path, filename = os.path.split(full_filename)
return static_file(filename, root=path, download=True)
</code></pre><p>應用的時候，只需要為 /songsby/ 頁面裏的相應 ID 加個鏈接。</p>`,29)),n("p",null,[t[10]||(t[10]=o("我們已經把所有的代碼過了一遍，不過還需要一點工作來把它們集合到一起。可以自己去 GitHub 頁面 ",-1)),p(e,{href:"https://github.com/ben-ev/xbmc-remote"},{default:s(()=>[...t[9]||(t[9]=[o("https://github.com/ben-ev/xbmc-remote",-1)])]),_:1}),t[11]||(t[11]=o(" 看下。",-1))]),t[36]||(t[36]=n("blockquote",null,[n("p",null,[n("strong",null,"設置")]),n("p",null,"我們的遙控程序已經開發完成，還需要保證讓它在媒體中心每次開機的時候都能啓動。有幾種方式，最簡單的是在 /etc/rc.local 裏增加一行命令來啓動。我們的文件位置在 /opt/xbmc-remote/remote.py，其他文件也和它一起。然後在 /etc/rc.local 最後的 exit 0 之前增加了下面一行。"),n("pre",null,[n("code",null,`cd /opt/xbmc-remote && python remote.py &
`)])],-1)),n("blockquote",null,[t[18]||(t[18]=n("p",null,[n("strong",null,"GitHub")],-1)),t[19]||(t[19]=n("p",null,"這個項目目前還只是個架子，但是 - 我們運營雜誌就意味着沒有太多自由時間來編程。不過，我們啓動了一個 GitHub 項目，希望能持續完善， 而如果你覺得這個項目有用的話，歡迎做出貢獻。",-1)),n("p",null,[t[13]||(t[13]=o("要查看最新的進展，請訪問 ",-1)),p(e,{href:"https://github.com/ben-ev/xbmc-remote"},{default:s(()=>[...t[12]||(t[12]=[o("https://github.com/ben-ev/xbmc-remote",-1)])]),_:1}),t[14]||(t[14]=o(" 看看所處的狀態。你可以從頁面裏獲取最新的代碼，或者通過命令列複製。",-1))]),n("p",null,[t[16]||(t[16]=o("如果你希望改善它，可以複製項目到你自己的分支開發，然後在功能完成後發起合併請求。關於如何使用 GitHub 的更多信息，請訪問 ",-1)),p(e,{href:"https://github.com/features"},{default:s(()=>[...t[15]||(t[15]=[o("https://github.com/features",-1)])]),_:1}),t[17]||(t[17]=o("。",-1))])]),t[37]||(t[37]=n("hr",null,null,-1)),n("p",null,[t[21]||(t[21]=o("via: ",-1)),p(e,{href:"http://www.linuxvoice.com/xbmc-build-a-remote-control/"},{default:s(()=>[...t[20]||(t[20]=[o("http://www.linuxvoice.com/xbmc-build-a-remote-control/",-1)])]),_:1})]),n("p",null,[t[25]||(t[25]=o("作者：",-1)),p(e,{href:"http://www.linuxvoice.com/author/ben_everard/"},{default:s(()=>[...t[22]||(t[22]=[o("Ben Everard",-1)])]),_:1}),t[26]||(t[26]=o(" 譯者：",-1)),p(e,{href:"https://github.com/zpl1025"},{default:s(()=>[...t[23]||(t[23]=[o("zpl1025",-1)])]),_:1}),t[27]||(t[27]=o(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:s(()=>[...t[24]||(t[24]=[o("wxy",-1)])]),_:1})]),n("p",null,[t[30]||(t[30]=o("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[28]||(t[28]=[o("LCTT",-1)])]),_:1}),t[31]||(t[31]=o(" 原創翻譯，",-1)),p(e,{href:"https://linux.cn/"},{default:s(()=>[...t[29]||(t[29]=[o("Linux中國",-1)])]),_:1}),t[32]||(t[32]=o(" 榮譽推出",-1))])])}const k=i(d,[["render",m]]);export{c as __pageData,k as default};
