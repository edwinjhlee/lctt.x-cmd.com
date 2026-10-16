import{_ as s,a0 as i,w as d,s as c,ao as r,I as o,x as e,a1 as a,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"互聯網掃描器 ZMap 完全手冊 | LCTT x X-CMD","titleTemplate":false,"description":"互聯網掃描器 ZMap 完全手冊 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"互聯網掃描器 ZMap 完全手冊 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"互聯網掃描器 ZMap 完全手冊 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150401 ZMap Documentation","title":"互聯網掃描器 ZMap 完全手冊","tag":"201507","desc":""},"relativePath":"201507/20150401 ZMap Documentation.md","filePath":"[post].md"}'),l={name:"201507/20150401 ZMap Documentation.md"};function u(g,t,m,h,f,b){const p=i("Link");return d(),c("div",null,[t[26]||(t[26]=r(`<h1 id="互聯網掃描器-zmap-完全手冊" tabindex="-1">互聯網掃描器 ZMap 完全手冊 <a class="header-anchor" href="#互聯網掃描器-zmap-完全手冊" aria-label="Permalink to “互聯網掃描器 ZMap 完全手冊”">​</a></h1><ol><li>初識 ZMap</li><li>最佳掃描習慣</li><li>命令列參數</li><li>附加信息 <ol><li>TCP SYN 探測模組</li><li>ICMP Echo 探測模組</li><li>UDP 探測模組</li><li>配置文件</li><li>詳細</li><li>結果輸出</li><li>黑名單</li><li>速度限制與抽樣</li><li>發送多個探測</li></ol></li><li>ZMap 擴展 <ol><li>示例應用程序</li><li>編寫探測和輸出模組</li></ol></li></ol><hr><h3 id="初識-zmap" tabindex="-1">初識 ZMap <a class="header-anchor" href="#初識-zmap" aria-label="Permalink to “初識 ZMap”">​</a></h3><p>ZMap被設計用來針對整個IPv4地址空間或其中的大部分實施綜合掃描的工具。ZMap是研究者手中的利器，但在運行ZMap時，請注意，您很有可能正在以每秒140萬個包的速度掃描整個IPv4地址空間 。我們建議用户即使在實施小範圍掃描之前，也聯繫一下本地網絡的管理員並參考我們列舉的<a href="#bestpractices">最佳掃描體驗</a>。</p><p>默認情況下，ZMap會對於指定端口實施儘可能大速率的TCP SYN掃描。較為保守的情況下，對10,000個隨機的地址的80端口以10Mbps的速度掃描，如下所示：</p><pre><code>$ zmap --bandwidth=10M --target-port=80 --max-targets=10000 --output-file=results.csv 
</code></pre><p>或者更加簡潔地寫成：</p><pre><code>$ zmap -B 10M -p 80 -n 10000 -o results.csv
</code></pre><p>ZMap也可用於掃描特定子網或CIDR地址塊。例如，僅掃描10.0.0.0/8和192.168.0.0/16的80端口，運行指令如下：</p><pre><code>zmap -p 80 -o results.csv 10.0.0.0/8 192.168.0.0/16
</code></pre><p>如果掃描進行的順利，ZMap會每秒輸出類似以下內容的狀態更新：</p><pre><code>0% (1h51m left); send: 28777 562 Kp/s (560 Kp/s avg); recv: 1192 248 p/s (231 p/s avg); hits: 0.04%
0% (1h51m left); send: 34320 554 Kp/s (559 Kp/s avg); recv: 1442 249 p/s (234 p/s avg); hits: 0.04%
0% (1h50m left); send: 39676 535 Kp/s (555 Kp/s avg); recv: 1663 220 p/s (232 p/s avg); hits: 0.04%
0% (1h50m left); send: 45372 570 Kp/s (557 Kp/s avg); recv: 1890 226 p/s (232 p/s avg); hits: 0.04%
</code></pre><p>這些更新信息提供了掃描的即時狀態並表示成：</p><pre><code>完成進度% (剩餘時間); send: 發出包的數量 即時速率 (平均發送速率); recv: 接收包的數量 接收率 (平均接收率); hits: 命中率
</code></pre><p>如果您不知道您所在網絡能支持的掃描速率，您可能要嘗試不同的掃描速率和帶寬限制直到掃描效果開始下降，藉此找出當前網絡能夠支持的最快速度。</p><p>默認情況下，ZMap會輸出不同IP地址的列表（例如，根據SYN ACK數據包的情況），像下面這樣。其<a href="#output">輸出結果</a>還有幾種附加的格式（如，JSON和Redis），可以用作生成<a href="#verbosity">程序可解析的掃描統計</a>。 同樣，可以指定附加的<a href="#outputfields">輸出字段</a>並使用<a href="#outputfilter">輸出過濾</a>來過濾輸出的結果。</p><pre><code>115.237.116.119
23.9.117.80
207.118.204.141
217.120.143.111
50.195.22.82
</code></pre><p>我們強烈建議您使用<a href="#blacklisting">黑名單文件</a>，以排除預留的/未分配的IP地址空間（如，RFC1918 規定的私有地址、組播地址），以及網絡中需要排除在您掃描之外的地址。默認情況下，ZMap將採用位於 <code>/etc/zmap/blacklist.conf</code>的這個簡單的<a href="#blacklisting">黑名單文件</a>中所包含的預留和未分配地址。如果您需要某些特定設置，比如每次運行ZMap時的最大帶寬或<a href="#blacklisting">黑名單文件</a>，您可以在文件<code>/etc/zmap/zmap.conf</code>中指定或使用自定義<a href="#config">配置文件</a>。</p><p>如果您正試圖解決掃描的相關問題，有幾個選項可以幫助您調試。首先，您可以通過添加<code>--dryrun</code>實施<a href="#dryrun">預掃</a>，以此來分析包可能會發送到網絡的何處。此外，還可以通過設置&#39;--verbosity=n\`來更改<a href="#verbosity">日誌詳細程度</a>。</p><h3 id="最佳掃描體驗" tabindex="-1">最佳掃描體驗 <a class="header-anchor" href="#最佳掃描體驗" aria-label="Permalink to “最佳掃描體驗”">​</a></h3><p><a name="bestpractices"></a></p><p>我們為針對互聯網進行掃描的研究者提供了一些建議，以此來引導養成良好的互聯網合作氛圍。</p><ul><li>密切協同本地的網絡管理員，以減少風險和調查</li><li>確認掃描不會使本地網絡或上游供應商癱瘓</li><li>在發起掃描的源地址的網頁和DNS條目中申明你的掃描是善意的</li><li>明確解釋你的掃描中所有連接的目的和範圍</li><li>提供一個簡單的退出掃描的方法並及時響應請求</li><li>實施掃描時，不使用比研究對象需求更大的掃描範圍或更快的掃描頻率</li><li>如果可以，將掃描流量分佈到不同的時間或源地址上</li></ul><p>即使不聲明，使用掃描的研究者也應該避免利用漏洞或訪問受保護的資源，並遵守其轄區內任何特殊的法律規定。</p><h3 id="命令列參數" tabindex="-1">命令列參數 <a class="header-anchor" href="#命令列參數" aria-label="Permalink to “命令列參數”">​</a></h3><p><a name="args"></a></p><h4 id="通用選項" tabindex="-1">通用選項 <a class="header-anchor" href="#通用選項" aria-label="Permalink to “通用選項”">​</a></h4><p>這些選項是實施簡單掃描時最常用的選項。我們注意到某些選項取決於所使用的<a href="#probemodule">探測模組</a>或<a href="#outputmodule">輸出模組</a>（如，在實施ICMP Echo掃描時是不需要使用目的端口的）。</p><p><strong>-p, --target-port=port</strong></p><p>要掃描的目標TCP端口號（例如，443）</p><p><strong>-o, --output-file=name</strong></p><p>將結果寫入該文件，使用<code>-</code>代表輸出到標準輸出。</p><p><strong>-b, --blacklist-file=path</strong></p><p>文件中被排除的子網使用CIDR表示法（如192.168.0.0/16），一個一行。建議您使用此方法排除RFC 1918地址、組播地址、IANA預留空間等IANA專用地址。在conf/blacklist.example中提供了一個以此為目的示例黑名單文件。</p><h4 id="掃描選項" tabindex="-1">掃描選項 <a class="header-anchor" href="#掃描選項" aria-label="Permalink to “掃描選項”">​</a></h4><p><strong>-n, --max-targets=n</strong></p><p>限制探測目標的數量。後面跟的可以是一個數字（例如&#39;-n 1000<code>），或可掃描地址空間的百分比（例如，</code>-n 0.1％\`，不包括黑名單）</p><p><strong>-N, --max-results=n</strong></p><p>收到多少結果後退出</p><p><strong>-t, --max-runtime=secs</strong></p><p>限制發送報文的時間</p><p><strong>-r, --rate=pps</strong></p><p>設置發包速率，以包/秒為單位</p><p><strong>-B, --bandwidth=bps</strong></p><p>以比特/秒設置傳輸速率（支持使用後綴G，M或K（如<code>-B 10M</code>就是速度10 mbps）的。設置會覆蓋<code>--rate</code>。</p><p><strong>-c, --cooldown-time=secs</strong></p><p>發送完成後等待多久繼續接收回包（默認值= 8）</p><p><strong>-e, --seed=n</strong></p><p>地址排序種子。如果要用多個ZMap以相同的順序掃描地址，那麼就可以使用這個參數。</p><p><strong>--shards=n</strong></p><p>將掃描分片/區，使其可多個ZMap中執行（默認值= 1）。啓用分片時，<code>--seed</code>參數是必需的。</p><p><strong>--shard=n</strong></p><p>選擇掃描的分片（默認值= 0）。n的範圍在[0，N)，其中N為碎片的總數。啓用分片時，<code>--seed</code>參數是必需的。</p><p><strong>-T, --sender-threads=n</strong></p><p>用於發送數據包的線程數（默認值= 1）</p><p><strong>-P, --probes=n</strong></p><p>發送到每個IP的探測數（默認值= 1）</p><p><strong>-d, --dryrun</strong></p><p>用標準輸出打印出每個包，而不是將其發送（用於調試）</p><h4 id="網絡選項" tabindex="-1">網絡選項 <a class="header-anchor" href="#網絡選項" aria-label="Permalink to “網絡選項”">​</a></h4><p><strong>-s, --source-port=port|range</strong></p><p>發送數據包的源端口</p><p><strong>-S, --source-ip=ip|range</strong></p><p>發送數據包的源地址。可以僅僅是一個IP，也可以是一個範圍（如，10.0.0.1-10.0.0.9）</p><p><strong>-G, --gateway-mac=addr</strong></p><p>數據包發送到的網關MAC地址（用以防止自動檢測不工作的情況）</p><p><strong>-i, --interface=name</strong></p><p>使用的網絡接口</p><h4 id="探測選項" tabindex="-1">探測選項 <a class="header-anchor" href="#探測選項" aria-label="Permalink to “探測選項”">​</a></h4><p>ZMap允許用户指定並添加自己所需要的<a href="#probemodule">探測模組</a>。 探測模組的職責就是生成要發送的探測包，並處理主機回覆的響應包。</p><p><strong>--list-probe-modules</strong></p><p>列出可用探測模組（如tcp_synscan）</p><p><strong>-M, --probe-module=name</strong></p><p>選擇<a href="#probemodule">探測模組</a>（默認值= tcp_synscan）</p><p><strong>--probe-args=args</strong></p><p>向模組傳遞參數</p><p><strong>--list-output-fields</strong></p><p>列出可用的輸出模組</p><h4 id="輸出選項" tabindex="-1">輸出選項 <a class="header-anchor" href="#輸出選項" aria-label="Permalink to “輸出選項”">​</a></h4><p>ZMap允許用户指定和編寫他們自己的<a href="#outputmodule">輸出模組</a>。輸出模組負責處理由探測模組返回的字段，並將它們輸出給用户。用户可以指定輸出的字段，並過濾相應字段。</p><p><strong>--list-output-modules</strong></p><p>列出可用輸出模組（如tcp_synscan）</p><p><strong>-O, --output-module=name</strong></p><p>選擇<a href="#outputmodule">輸出模組</a>（默認值為csv）</p><p><strong>--output-args=args</strong></p><p>傳遞給輸出模組的參數</p><p><strong>-f, --output-fields=fields</strong></p><p>輸出的字段列表，以逗號分割</p><p><strong>--output-filter</strong></p><p>指定輸出<a href="#outputfilter">過濾器</a>對<a href="#probemodule">探測模組</a>定義字段進行過濾</p><h4 id="附加選項" tabindex="-1">附加選項 <a class="header-anchor" href="#附加選項" aria-label="Permalink to “附加選項”">​</a></h4><p><strong>-C, --config=filename</strong></p><p>加載<a href="#config">配置文件</a>，可以指定其他路徑。</p><p><strong>-q, --quiet</strong></p><p>不必每秒刷新輸出</p><p><strong>-g, --summary</strong></p><p>在掃描結束後打印配置和結果彙總信息</p><p><strong>-v, --verbosity=n</strong></p><p>日誌詳細程度（0-5，默認值= 3）</p><p><strong>-h, --help</strong></p><p>打印幫助並退出</p><p><strong>-V, --version</strong></p><p>打印版本並退出</p><h3 id="附加信息" tabindex="-1">附加信息 <a class="header-anchor" href="#附加信息" aria-label="Permalink to “附加信息”">​</a></h3><p><a name="additional"></a></p><h4 id="tcp-syn-掃描" tabindex="-1">TCP SYN 掃描 <a class="header-anchor" href="#tcp-syn-掃描" aria-label="Permalink to “TCP SYN 掃描”">​</a></h4><p>在執行TCP SYN掃描時，ZMap需要指定一個目標端口，也支持指定發起掃描的源端口範圍。</p><p><strong>-p, --target-port=port</strong></p><p>掃描的TCP端口（例如 443）</p><p><strong>-s, --source-port=port|range</strong></p><p>發送掃描數據包的源端口（例如 40000-50000）</p><p><strong>警示！</strong> ZMap基於Linux內核使用RST包來應答SYN/ACK包響應，以關閉掃描器打開的連接。ZMap是在Ethernet層完成包的發送的，這樣做是為了減少跟蹤打開的TCP連接和路由尋路帶來的內核開銷。因此，如果您有跟蹤連接建立的防火牆規則，如類似於<code>-A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT</code>的netfilter規則，將阻止SYN/ACK包到達內核。這不會妨礙到ZMap記錄應答，但它會阻止RST包被送回，最終被掃描主機的連接會一直打開，直到超時後斷開。我們強烈建議您在執行ZMap時，選擇一組主機上未使用且防火牆允許訪問的端口，加在<code>-s</code>後（如 <code>-s &#39;50000-60000&#39; </code> ）。</p><h4 id="icmp-echo-請求掃描" tabindex="-1">ICMP Echo 請求掃描 <a class="header-anchor" href="#icmp-echo-請求掃描" aria-label="Permalink to “ICMP Echo 請求掃描”">​</a></h4><p>雖然在默認情況下ZMap執行的是TCP SYN掃描，但它也支持使用ICMP echo請求掃描。在這種掃描方式下ICMP echo請求包被髮送到每個主機，並以收到ICMP應答包作為答覆。實施ICMP掃描可以通過選擇icmp_echoscan掃描模組來執行，如下：</p><pre><code>$ zmap --probe-module=icmp_echoscan
</code></pre><h4 id="udp-數據報掃描" tabindex="-1">UDP 數據報掃描 <a class="header-anchor" href="#udp-數據報掃描" aria-label="Permalink to “UDP 數據報掃描”">​</a></h4><p>ZMap還額外支持UDP探測，它會發出任意UDP數據報給每個主機，並接收UDP或ICMP不可達的應答。ZMap可以通過使用--probe-args命令列選項來設置四種不同的UDP載荷。這些是：可在命令列設置可打印的ASCII 碼的‘text’載荷和十六進制載荷的‘hex’，外部文件中包含載荷的‘file’，和通過動態字段生成的載荷的‘template’。為了得到UDP響應，請使用-f參數確保您指定的“data”字段處於輸出範圍。</p><p>下面的例子將發送兩個字節&#39;ST&#39;，即PCAnwywhere的&#39;status&#39;請求，到UDP端口5632。</p><pre><code>$ zmap -M udp -p 5632 --probe-args=text:ST -N 100 -f saddr,data -o -
</code></pre><p>下面的例子將發送字節“0X02”，即SQL Server的&#39;client broadcast&#39;請求，到UDP端口1434。</p><pre><code>$ zmap -M udp -p 1434 --probe-args=hex:02 -N 100 -f saddr,data -o -
</code></pre><p>下面的例子將發送一個NetBIOS狀態請求到UDP端口137。使用一個ZMap自帶的載荷文件。</p><pre><code>$ zmap -M udp -p 1434 --probe-args=file:netbios_137.pkt -N 100 -f saddr,data -o -
</code></pre><p>下面的例子將發送SIP的&#39;OPTIONS&#39;請求到UDP端口5060。使用附ZMap自帶的模板文件。</p><pre><code>$ zmap -M udp -p 1434 --probe-args=file:sip_options.tpl -N 100 -f saddr,data -o -
</code></pre><p>UDP載荷模板仍處於實驗階段。當您在更多的使用一個以上的發送線程（-T）時可能會遇到崩潰和一個明顯的相比靜態載荷性能降低的表現。模板僅僅是一個由一個或多個使用\${}將字段説明封裝成序列構成的載荷文件。某些協議，特別是SIP，需要載荷來反射包中的源和目的包。其他協議，如portmapper和DNS，每個請求包含的字段應該是隨機的，或降低被Zamp掃描的多宿主系統的風險。</p><p>以下的載荷模板將發送SIP OPTIONS請求到每一個目的地：</p><pre><code>OPTIONS sip:\${RAND_ALPHA=8}@\${DADDR} SIP/2.0
Via: SIP/2.0/UDP \${SADDR}:\${SPORT};branch=\${RAND_ALPHA=6}.\${RAND_DIGIT=10};rport;alias
From: sip:\${RAND_ALPHA=8}@\${SADDR}:\${SPORT};tag=\${RAND_DIGIT=8}
To: sip:\${RAND_ALPHA=8}@\${DADDR}
Call-ID: \${RAND_DIGIT=10}@\${SADDR}
CSeq: 1 OPTIONS
Contact: sip:\${RAND_ALPHA=8}@\${SADDR}:\${SPORT}
Content-Length: 0
Max-Forwards: 20
User-Agent: \${RAND_ALPHA=8}
Accept: text/plain
</code></pre><p>就像在上面的例子中展示的那樣，注意每行行末以\\r\\n結尾，請求以\\r\\n\\r\\n結尾，大多數SIP實現都可以正確處理它。一個可以工作的例子放在ZMap的examples/udp-payloads目錄下 (sip_options.tpl).</p><p>當前實現了下面的模板字段：</p><ul><li><strong>SADDR</strong>: 源IP地址的點分十進制格式</li><li><strong>SADDR_N</strong>: 源IP地址的網絡字節序格式</li><li><strong>DADDR</strong>: 目的IP地址的點分十進制格式</li><li><strong>DADDR_N</strong>: 目的IP地址的網絡字節序格式</li><li><strong>SPORT</strong>: 源端口的ascii格式</li><li><strong>SPORT_N</strong>: 源端口的網絡字節序格式</li><li><strong>DPORT</strong>: 目的端口的ascii格式</li><li><strong>DPORT_N</strong>: 目的端口的網絡字節序格式</li><li><strong>RAND_BYTE</strong>: 隨機字節(0-255)，長度由=(length) 參數決定</li><li><strong>RAND_DIGIT</strong>: 隨機數字0-9，長度由=(length) 參數決定</li><li><strong>RAND_ALPHA</strong>: 隨機大寫字母A-Z，長度由=(length) 參數決定</li><li><strong>RAND_ALPHANUM</strong>: 隨機大寫字母A-Z和隨機數字0-9，長度由=(length) 參數決定</li></ul><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to “配置文件”">​</a></h3><p><a name="config"></a></p><p>ZMap支持使用配置文件來代替在命令列上指定所有要求的選項。配置中可以通過每行指定一個長名稱的選項和對應的值來創建：</p><pre><code>interface &quot;eth1&quot;
source-ip 1.1.1.4-1.1.1.8
gateway-mac b4:23:f9:28:fa:2d # upstream gateway
cooldown-time 300 # seconds
blacklist-file /etc/zmap/blacklist.conf
output-file ~/zmap-output
quiet
summary
</code></pre><p>然後ZMap就可以按照配置文件並指定一些必要的附加參數運行了：</p><pre><code>$ zmap --config=~/.zmap.conf --target-port=443
</code></pre><h3 id="詳細" tabindex="-1">詳細 <a class="header-anchor" href="#詳細" aria-label="Permalink to “詳細”">​</a></h3><p><a name="verbosity"></a></p><p>ZMap可以在屏幕上生成多種類型的輸出。默認情況下，Zmap將每隔1秒打印出相似的基本進度信息。可以通過設置<code>--quiet</code>來禁用。</p><pre><code>0:01 12%; send: 10000 done (15.1 Kp/s avg); recv: 144 143 p/s (141 p/s avg); hits: 1.44%
</code></pre><p>ZMap同樣也可以根據掃描配置打印如下消息，可以通過&#39;--verbosity\`參數加以控制。</p><pre><code>Aug 11 16:16:12.813 [INFO] zmap: started
Aug 11 16:16:12.817 [DEBUG] zmap: no interface provided. will use eth0
Aug 11 16:17:03.971 [DEBUG] cyclic: primitive root: 3489180582
Aug 11 16:17:03.971 [DEBUG] cyclic: starting point: 46588
Aug 11 16:17:03.975 [DEBUG] blacklist: 3717595507 addresses allowed to be scanned
Aug 11 16:17:03.975 [DEBUG] send: will send from 1 address on 28233 source ports
Aug 11 16:17:03.975 [DEBUG] send: using bandwidth 10000000 bits/s, rate set to 14880 pkt/s
Aug 11 16:17:03.985 [DEBUG] recv: thread started
</code></pre><p>ZMap還支持在掃描之後打印出一個的可grep的彙總信息，類似於下面這樣，可以通過調用<code>--summary</code>來實現。</p><pre><code>cnf	target-port				443
cnf	source-port-range-begin			32768
cnf	source-port-range-end			61000
cnf	source-addr-range-begin			1.1.1.4
cnf	source-addr-range-end			1.1.1.8
cnf	maximum-packets				4294967295
cnf	maximum-runtime				0
cnf	permutation-seed			0
cnf	cooldown-period				300
cnf	send-interface				eth1
cnf	rate					45000
env	nprocessors				16
exc	send-start-time				Fri Jan 18 01:47:35 2013
exc	send-end-time				Sat Jan 19 00:47:07 2013
exc	recv-start-time				Fri Jan 18 01:47:35 2013
exc	recv-end-time				Sat Jan 19 00:52:07 2013
exc	sent					3722335150
exc	blacklisted				572632145
exc	first-scanned				1318129262
exc	hit-rate				0.874102
exc	synack-received-unique			32537000
exc	synack-received-total			36689941
exc	synack-cooldown-received-unique		193
exc	synack-cooldown-received-total		1543
exc	rst-received-unique			141901021
exc	rst-received-total			166779002
adv	source-port-secret			37952
adv	permutation-gen				4215763218
</code></pre><h3 id="結果輸出" tabindex="-1">結果輸出 <a class="header-anchor" href="#結果輸出" aria-label="Permalink to “結果輸出”">​</a></h3><a name="output"></a><p>ZMap可以通過<strong>輸出模組</strong>生成不同格式的結果。默認情況下，ZMap只支持<strong>csv</strong>的輸出，但是可以通過編譯支持<strong>redis</strong>和<strong>json</strong> 。可以使用<strong>輸出過濾</strong>來過濾這些發送到輸出模組上的結果。輸出模組輸出的字段由用户指定。默認情況如果沒有指定輸出文件，ZMap將以csv格式返回結果，而不會生成特定結果。也可以編寫自己的輸出模組;請參閲<a href="#exteding">編寫輸出模組</a>。</p><p><strong>-o, --output-file=p</strong></p><p>輸出寫入文件地址</p><p><strong>-O, --output-module=p</strong></p><p>調用自定義輸出模組</p><p><strong>-f, --output-fields=p</strong></p><p>以逗號分隔的輸出的字段列表</p><p><strong>--output-filter=filter</strong></p><p>對給定的探測指定字段輸出過濾</p><p><strong>--list-output-modules</strong></p><p>列出可用輸出模組</p><p><strong>--list-output-fields</strong></p><p>列出給定的探測的可用輸出字段</p><h4 id="輸出字段" tabindex="-1">輸出字段 <a class="header-anchor" href="#輸出字段" aria-label="Permalink to “輸出字段”">​</a></h4><p>除了IP地址之外，ZMap有很多字段。這些字段可以通過在給定探測模組上運行<code>--list-output-fields</code>來查看。</p><pre><code>$ zmap --probe-module=&quot;tcp_synscan&quot; --list-output-fields
saddr           string: 應答包中的源IP地址
saddr-raw          int: 網絡字節格式的源IP地址
daddr           string: 應答包中的目的IP地址
daddr-raw          int: 網絡字節格式的目的IP地址
ipid               int: 應答包中的IP識別號
ttl                int: 應答包中的ttl（存活時間）值
sport              int: TCP 源端口
dport              int: TCP 目的端口
seqnum             int: TCP 序列號
acknum             int: TCP Ack號
window             int: TCP 窗口
classification  string: 包類型
success            int: 是應答包成功
repeat             int: 是否是來自主機的重複響應
cooldown           int: 是否是在冷卻時間內收到的響應
timestamp-str   string: 響應抵達時的時間戳使用ISO8601格式
timestamp-ts       int: 響應抵達時的時間戳使用UNIX紀元開始的秒數
timestamp-us       int: 時間戳的微秒部分(例如 從&#39;timestamp-ts&#39;的幾微秒)
</code></pre><p>可以通過使用<code>--output-fields=fields</code>或<code>-f</code>來選擇選擇輸出字段，任意組合的輸出字段可以被指定為逗號分隔的列表。例如：</p><pre><code>$ zmap -p 80 -f &quot;response,saddr,daddr,sport,seq,ack,in_cooldown,is_repeat,timestamp&quot; -o output.csv
</code></pre><h4 id="過濾輸出" tabindex="-1">過濾輸出 <a class="header-anchor" href="#過濾輸出" aria-label="Permalink to “過濾輸出”">​</a></h4><p>在傳到輸出模組之前，探測模組生成的結果可以先過濾。過濾是針對探測模組的輸出字段的。過濾使用類似於SQL的簡單過濾語法寫成，通過ZMap的<strong>--output-filter</strong>選項來指定。輸出過濾通常用於過濾掉重複的結果，或僅傳輸成功的響應到輸出模組。</p><p>過濾表達式的形式為<code>&lt;字段名&gt; &lt;操作符&gt; &lt;值&gt;</code>。<code>&lt;值&gt;</code>的類型必須是一個字符串或一串無符號整數並且匹配<code>&lt;字段名&gt;</code>類型。對於整數比較有效的操作符是<code>= !=, &lt;, &gt;, &lt;=, &gt;=</code>。字符串比較的操作是=，!=。<code>--list-output-fields</code>可以打印那些可供探測模組選擇的字段和類型，然後退出。</p><p>複合型的過濾操作，可以通過使用<code>&amp;&amp;</code>（邏輯與）和<code>||</code>（邏輯或）這樣的運算符來組合出特殊的過濾操作。</p><p><strong>示例</strong></p><p>書寫一則過濾僅顯示成功的、不重複的應答</p><pre><code>--output-filter=&quot;success = 1 &amp;&amp; repeat = 0&quot;
</code></pre><p>過濾出RST分類並且TTL大於10的包，或者SYNACK分類的包</p><pre><code>--output-filter=&quot;(classification = rst &amp;&amp; ttl &gt; 10) || classification = synack&quot;
</code></pre><h4 id="csv" tabindex="-1">CSV <a class="header-anchor" href="#csv" aria-label="Permalink to “CSV”">​</a></h4><p>csv模組將會生成以逗號分隔各個要求輸出的字段的文件。例如，以下的指令將生成名為<code>output.csv</code>的CSV文件。</p><pre><code>$ zmap -p 80 -f &quot;response,saddr,daddr,sport,seq,ack,in_cooldown,is_repeat,timestamp&quot; -o output.csv
</code></pre><hr><pre><code>#響應, 源地址, 目的地址, 源端口, 目的端口, 序列號, 應答, 是否是冷卻模式, 是否重複, 時間戳
response, saddr, daddr, sport, dport, seq, ack, in_cooldown, is_repeat, timestamp
synack, 159.174.153.144, 10.0.0.9, 80, 40555, 3050964427, 3515084203, 0, 0,2013-08-15 18:55:47.681
rst, 141.209.175.1, 10.0.0.9, 80, 40136, 0, 3272553764, 0, 0,2013-08-15 18:55:47.683
rst, 72.36.213.231, 10.0.0.9, 80, 56642, 0, 2037447916, 0, 0,2013-08-15 18:55:47.691
rst, 148.8.49.150, 10.0.0.9, 80, 41672, 0, 1135824975, 0, 0,2013-08-15 18:55:47.692
rst, 50.165.166.206, 10.0.0.9, 80, 38858, 0, 535206863, 0, 0,2013-08-15 18:55:47.694
rst, 65.55.203.135, 10.0.0.9, 80, 50008, 0, 4071709905, 0, 0,2013-08-15 18:55:47.700
synack, 50.57.166.186, 10.0.0.9, 80, 60650, 2813653162, 993314545, 0, 0,2013-08-15 18:55:47.704
synack, 152.75.208.114, 10.0.0.9, 80, 52498, 460383682, 4040786862, 0, 0,2013-08-15 18:55:47.707
synack, 23.72.138.74, 10.0.0.9, 80, 33480, 810393698, 486476355, 0, 0,2013-08-15 18:55:47.710
</code></pre><h4 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to “Redis”">​</a></h4><p>Redis的輸出模組允許地址被添加到一個Redis的隊列，而不是保存到文件，允許ZMap將它與之後的處理工具結合使用。</p><p><strong>注意!</strong> ZMap默認不會編譯Redis功能。如果你從源碼構建ZMap，可以在CMake的時候加上<code>-DWITH_REDIS=ON</code>來增加Redis支持。</p><h4 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to “JSON”">​</a></h4><p>JSON輸出模組用起來類似於CSV模組，只是以JSON格式寫入到文件。JSON文件能輕鬆地導入到其它可以讀取JSON的程序中。</p><p><strong>注意！</strong>，ZMap默認不會編譯JSON功能。如果你從源碼構建ZMap，可以在CMake的時候加上<code>-DWITH_JSON=ON</code>來增加JSON支持。</p><h3 id="黑名單和白名單" tabindex="-1">黑名單和白名單 <a class="header-anchor" href="#黑名單和白名單" aria-label="Permalink to “黑名單和白名單”">​</a></h3><p><a name="blacklisting"></a></p><p>ZMap同時支持對網絡前綴做黑名單和白名單。如果ZMap不加黑名單和白名單參數，他將會掃描所有的IPv4地址（包括本地的，保留的以及組播地址）。如果指定了黑名單文件，那麼在黑名單中的網絡前綴將不再掃描；如果指定了白名單文件，只有那些網絡前綴在白名單內的才會掃描。白名單和黑名單文件可以協同使用；黑名單優先於白名單（例如：如果您在白名單中指定了10.0.0.0/8並在黑名單中指定了10.1.0.0/16，那麼10.1.0.0/16將不會掃描）。白名單和黑名單文件可以在命令列中指定，如下所示：</p><p><strong>-b, --blacklist-file=path</strong></p><p>文件用於記錄黑名單子網，以CIDR（無類域間路由）的表示法，例如192.168.0.0/16</p><p><strong>-w, --whitelist-file=path</strong></p><p>文件用於記錄限制掃描的子網，以CIDR的表示法，例如192.168.0.0/16</p><p>黑名單文件的每行都需要以CIDR的表示格式書寫，一行單一的網絡前綴。允許使用<code>#</code>加以備註。例如：</p><pre><code># IANA（英特網編號管理局）記錄的用於特殊目的的IPv4地址
# http://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml
# 更新於2013-05-22

0.0.0.0/8           # RFC1122: 網絡中的所有主機
10.0.0.0/8          # RFC1918: 私有地址
100.64.0.0/10       # RFC6598: 共享地址空間
127.0.0.0/8         # RFC1122: 迴環地址
169.254.0.0/16      # RFC3927: 本地鏈路地址
172.16.0.0/12       # RFC1918: 私有地址
192.0.0.0/24        # RFC6890: IETF協議預留
192.0.2.0/24        # RFC5737: 測試地址1
192.88.99.0/24      # RFC3068: IPv6轉換到IPv4的任播
192.168.0.0/16      # RFC1918: 私有地址
192.18.0.0/15       # RFC2544: 檢測地址
198.51.100.0/24     # RFC5737: 測試地址2
203.0.113.0/24      # RFC5737: 測試地址3
240.0.0.0/4         # RFC1112: 預留地址
255.255.255.255/32  # RFC0919: 限制廣播地址

# IANA記錄的用於組播的地址空間
# http://www.iana.org/assignments/multicast-addresses/multicast-addresses.xhtml
# 更新於2013-06-25

224.0.0.0/4         # RFC5771: 組播/預留地址ed
</code></pre><p>如果您只是想掃描因特網中隨機的一部分地址，使用<a href="#ratelimiting">抽樣</a>檢出，來代替使用白名單和黑名單。</p><p><strong>注意！</strong>ZMap默認設置使用<code>/etc/zmap/blacklist.conf</code>作為黑名單文件，其中包含有本地的地址空間和預留的IP空間。通過編輯<code>/etc/zmap/zmap.conf</code>可以改變默認的配置。</p><h3 id="速度限制與抽樣" tabindex="-1">速度限制與抽樣 <a class="header-anchor" href="#速度限制與抽樣" aria-label="Permalink to “速度限制與抽樣”">​</a></h3><p><a name="ratelimiting"></a></p><p>默認情況下，ZMap將以您當前網卡所能支持的最快速度掃描。以我們對於常用硬件的經驗，這通常是理論上Gbit以太網速度的95-98%，這可能比您的上游提供商可處理的速度還要快。ZMap是不會自動的根據您的上游提供商來調整發送速率的。您可能需要手動的調整發送速率來減少丟包和錯誤結果。</p><p><strong>-r, --rate=pps</strong></p><p>設置最大發送速率以包/秒為單位</p><p><strong>-B, --bandwidth=bps</strong></p><p>設置發送速率以比特/秒(支持G,M和K後綴)。這會覆蓋--rate參數。</p><p>ZMap同樣支持對IPv4地址空間進行指定最大目標數和/或最長運行時間的隨機採樣。由於每次對主機的掃描是通過隨機排序生成的，限制掃描的主機個數為N就會隨機抽選N個主機。命令選項如下：</p><p><strong>-n, --max-targets=n</strong></p><p>探測目標上限數量</p><p><strong>-N, --max-results=n</strong></p><p>結果上限數量（累積收到這麼多結果後退出）</p><p><strong>-t, --max-runtime=s</strong></p><p>發送數據包時間長度上限（以秒為單位）</p><p><strong>-s, --seed=n</strong></p><p>種子用以選擇地址的排列方式。使用不同ZMap執行掃描操作時將種子設成相同的值可以保證相同的掃描順序。</p><p>舉個例子，如果您想要多次掃描同樣的一百萬個互聯網主機，您可以設定排序種子和掃描主機的上限數量，大致如下所示：</p><pre><code>zmap -p 443 -s 3 -n 1000000 -o results
</code></pre><p>為了確定哪一百萬主機將要被掃描，您可以執行預掃，只打印數據包而非發送，並非真的實施掃描。</p><pre><code>zmap -p 443 -s 3 -n 1000000 --dryrun | grep daddr
	| awk -F&#39;daddr: &#39; &#39;{print $2}&#39; | sed &#39;s/ |.*//;&#39; 
</code></pre><h3 id="發送多個數據包" tabindex="-1">發送多個數據包 <a class="header-anchor" href="#發送多個數據包" aria-label="Permalink to “發送多個數據包”">​</a></h3><p>ZMap支持向每個主機發送多個探測。增加這個數量既增加了掃描時間又增加了到達的主機數量。然而，我們發現，增加的掃描時間（每個額外掃描的增加近100％）遠遠大於到達的主機數量（每個額外掃描的增加近1％）。</p><p><strong>-P, --probes=n</strong></p><p>向每個IP發出的獨立探測個數（默認值=1）</p><h3 id="示例應用" tabindex="-1">示例應用 <a class="header-anchor" href="#示例應用" aria-label="Permalink to “示例應用”">​</a></h3><p>ZMap專為向大量主機發起連接並尋找那些正確響應而設計。然而，我們意識到許多用户需要執行一些後續處理，如執行應用程序級別的握手。例如，用户在80端口實施TCP SYN掃描也許想要實施一個簡單的GET請求，還有用户掃描443端口可能希望完成TLS握手。</p><h4 id="banner獲取" tabindex="-1">Banner獲取 <a class="header-anchor" href="#banner獲取" aria-label="Permalink to “Banner獲取”">​</a></h4><p>我們收錄了一個示例程序，banner-grab，伴隨ZMap使用可以讓用户從監聽狀態的TCP服務器上接收到消息。Banner-grab連接到提供的服務器上，發送一個可選的消息，然後打印出收到的第一個消息。這個工具可以用來獲取banner，例如HTTP服務的回覆的具體指令，telnet登陸提示，或SSH服務的字符串。</p><p>下面的例子尋找了1000個監聽80端口的服務器，並向每個發送一個簡單的GET請求，存儲他們的64位編碼響應至http-banners.out</p><pre><code>$ zmap -p 80 -N 1000 -B 10M -o - | ./banner-grab-tcp -p 80 -c 500 -d ./http-req &gt; out
</code></pre><p>如果想知道更多使用<code>banner-grab</code>的細節,可以參考<code>examples/banner-grab</code>中的README文件。</p><p><strong>注意！</strong> ZMap和banner-grab（如例子中）同時運行可能會比較顯著的影響對方的表現和精度。確保不讓ZMap佔滿banner-grab-tcp的併發連接，不然banner-grab將會落後於標準輸入的讀入，導致阻塞ZMap的輸出寫入。我們推薦使用較慢掃描速率的ZMap，同時提升banner-grab-tcp的併發性至3000以內（注意 併發連接&gt;1000需要您使用<code>ulimit -SHn 100000</code>和<code>ulimit -HHn 100000</code>來增加每個進程的最大文件描述符數量）。當然，這些參數取決於您服務器的性能、連接成功率（hit-rate）；我們鼓勵開發者在運行大型掃描之前先進行小樣本的試驗。</p><h4 id="建立套接字" tabindex="-1">建立套接字 <a class="header-anchor" href="#建立套接字" aria-label="Permalink to “建立套接字”">​</a></h4><p>我們也收錄了另一種形式的banner-grab，就是forge-socket， 重複利用服務器發出的SYN-ACK，連接並最終取得banner。在<code>banner-grab-tcp</code>中，ZMap向每個服務器發送一個SYN，並監聽服務器發回的帶有SYN+ACK的應答。運行ZMap主機的內核接受應答後發送RST，這樣就沒有與該包關聯活動連接。程序banner-grab必須在這之後創建一個新的TCP連接到從服務器獲取數據。</p><p>在forge-socket中，我們利用內核中同名的模組，使我們可以創建任意參數的TCP連接。可以通過抑制內核的RST包，並重用SYN+ACK的參數取代該包而創建套接字，通過這個套接字收發數據和我們平時使用的連接套接字並沒有什麼不同。</p>`,232)),o("p",null,[t[1]||(t[1]=e("要使用forge-socket，您需要forge-socket內核模組，從",-1)),a(p,{href:"https://github.com/ewust/forge_socket/"},{default:n(()=>[...t[0]||(t[0]=[e("github",-1)])]),_:1}),t[2]||(t[2]=e("上可以獲得。您需要",-1)),t[3]||(t[3]=o("code",null,"git clone git@github.com:ewust/forge_socket.git",-1)),t[4]||(t[4]=e("至ZMap源碼根目錄，然後cd進入forge_socket目錄，運行make。以root身份運行",-1)),t[5]||(t[5]=o("code",null,"insmod forge_socket.ko",-1)),t[6]||(t[6]=e(" 來安裝該內核模組。",-1))]),t[27]||(t[27]=r(`<p>您也需要告知內核不要發送RST包。一個簡單的在全系統禁用RST包的方法是使用<strong>iptables</strong>。以root身份運行<code>iptables -A OUTPUT -p tcp -m tcp --tcp-flgas RST,RST RST,RST -j DROP</code>即可，當然您也可以加上一項<code>--dport X</code>將禁用侷限於所掃描的端口（X）上。掃描完成後移除這項設置，以root身份運行<code>iptables -D OUTPUT -p tcp -m tcp --tcp-flags RST,RST RST,RST -j DROP</code>即可。</p><p>現在應該可以建立forge-socket的ZMap示例程序了。運行需要使用<strong>extended_file</strong>ZMap<a href="#outputmodule">輸出模組</a>：</p><pre><code>$ zmap -p 80 -N 1000 -B 10M -O extended_file -o - | \\
    ./forge-socket -c 500 -d ./http-req &gt; ./http-banners.out
</code></pre><p>詳細內容可以參考<code>examples/forge-socket</code>目錄下的README。</p><hr><h3 id="編寫探測和輸出模組" tabindex="-1">編寫探測和輸出模組 <a class="header-anchor" href="#編寫探測和輸出模組" aria-label="Permalink to “編寫探測和輸出模組”">​</a></h3><p><a name="extending"></a></p><p>ZMap可以通過<strong>探測模組</strong>來擴展支持不同類型的掃描，通過<strong>輸出模組</strong>增加不同類型的輸出結果。註冊過的探測和輸出模組可以在命令列中列出：</p><p><strong>--list-probe-modules</strong></p><p>列出安裝過的探測模組</p><p><strong>--list-output-modules</strong></p><p>列出安裝過的輸出模組</p><h4 id="輸出模組" tabindex="-1">輸出模組 <a class="header-anchor" href="#輸出模組" aria-label="Permalink to “輸出模組”">​</a></h4><p><a name="outputmodule"></a></p><p>ZMap的輸出和輸出後處理可以通過實現和註冊掃描器的<strong>輸出模組</strong>來擴展。輸出模組在接收每一個應答包時都會收到一個回調。然而默認提供的模組僅提供簡單的輸出，這些模組同樣支持更多的輸出後處理（例如：重複跟蹤或輸出AS號碼來代替IP地址）。</p>`,15)),o("p",null,[t[8]||(t[8]=e("通過定義一個新的output_module結構來創建輸出模組，並在",-1)),a(p,{href:"https://github.com/zmap/zmap/blob/v1.0.0/src/output_modules/output_modules.c"},{default:n(()=>[...t[7]||(t[7]=[e("output_modules.c",-1)])]),_:1}),t[9]||(t[9]=e("中註冊：",-1))]),t[28]||(t[28]=r(`<pre><code>typedef struct output_module {
    const char          *name;           // 在命令列如何引用輸出模組
    unsigned            update_interval; // 以秒為單位的更新間隔
	
    output_init_cb      init;            // 在掃描器初始化的時候調用
    output_update_cb    start;           // 在掃描器開始的時候調用
    output_update_cb    update;          // 每次更新間隔調用，秒為單位
    output_update_cb    close;           // 掃描終止後調用
	
    output_packet_cb    process_ip;      // 接收到應答時調用

    const char          *helptext;       // 會在--list-output-modules時打印在屏幕上
  
} output_module_t;
</code></pre><p>輸出模組必須有名稱，通過名稱可以在命令列調用，並且通常會實現<code>success_ip</code>和常見的<code>other_ip</code>回調。process_ip的回調由每個收到並經由<strong>probe module</strong>過濾的應答包調用。應答是否被認定為成功並不確定（比如，它可以是一個TCP的RST）。這些回調必須定義匹配<code>output_packet_cb</code>定義的函數:</p><pre><code>int (*output_packet_cb) (

    ipaddr_n_t    saddr,         // 網絡字節格式的發起掃描主機IP地址
    ipaddr_n_t    daddr,         // 網絡字節格式的目的IP地址
    
    const char*   response_type, // 發送模組的數據包分類
    
    int           is_repeat,     // {0: 主機的第一個應答, 1: 後續的應答}
    int           in_cooldown,   // {0: 非冷卻狀態, 1: 掃描器處於冷卻中}
    
    const u_char* packet,        // 指向IP包的iphdr結構體的指針
    size_t        packet_len     // 包的長度，以字節為單位
);
</code></pre><p>輸出模組還可以通過註冊回調，執行在掃描初始化的時候（諸如打開輸出文件的任務）、在掃描開始階段（諸如記錄黑名單的任務）、在掃描的常規間隔（諸如狀態更新的任務）、在關閉的時候（諸如關掉所有打開的文件描述符）。提供的這些回調可以完整的訪問掃描配置和當前狀態：</p><pre><code>int (*output_update_cb)(struct state_conf*, struct state_send*, struct state_recv*);
</code></pre>`,5)),o("p",null,[t[12]||(t[12]=e("這些定義在",-1)),a(p,{href:"https://github.com/zmap/zmap/blob/master/src/output_modules/output_modules.h"},{default:n(()=>[...t[10]||(t[10]=[e("output_modules.h",-1)])]),_:1}),t[13]||(t[13]=e("中。在",-1)),a(p,{href:"https://github.com/zmap/zmap/blob/master/src/output_modules/module_csv.c"},{default:n(()=>[...t[11]||(t[11]=[e("src/output_modules/module_csv.c",-1)])]),_:1}),t[14]||(t[14]=e("中有可用示例。",-1))]),t[29]||(t[29]=r(`<h4 id="探測模組" tabindex="-1">探測模組 <a class="header-anchor" href="#探測模組" aria-label="Permalink to “探測模組”">​</a></h4><p><a name="probemodule"></a></p><p>數據包由<strong>探測模組</strong>構造，它可以創建各種包和不同類型的響應。ZMap默認擁有兩個掃描模組：<code>tcp_synscan</code>和<code>icmp_echoscan</code>。默認情況下，ZMap使用<code>tcp_synscan</code>來發送TCP SYN包並對每個主機的響應分類，如打開時（收到SYN+ACK）或關閉時（收到RST）。ZMap允許開發者編寫自己的ZMap探測模組，使用如下的API：</p><p>任何類型的掃描都必須通過開發和註冊<code>send_module_t</code>結構中的回調來實現：</p><pre><code>typedef struct probe_module {
    const char               *name;             // 如何在命令列調用掃描
    size_t                   packet_length;     // 探測包有多長(必須是靜態的)
    
    const char               *pcap_filter;      // 對收到的響應實施PCAP過濾
    size_t                   pcap_snaplen;      // libpcap 捕獲的最大字節數 
    uint8_t                  port_args;         // 設為1，如果ZMap需要用户指定--target-port
    
    probe_global_init_cb     global_initialize; // 在掃描初始化會時被調用一次
    probe_thread_init_cb     thread_initialize; // 每個包緩存區的線程中被調用一次
    probe_make_packet_cb     make_packet;       // 每個主機更新包的時候被調用一次
    probe_validate_packet_cb validate_packet;   // 每收到一個包被調用一次，
                                                // 如果包無效返回0，
                                                // 非零則有效。
    
    probe_print_packet_cb    print_packet;      // 如果在預掃模式下被每個包都調用
    probe_classify_packet_cb process_packet;    // 由區分響應的接收器調用
    probe_close_cb           close;             // 掃描終止後被調用

    fielddef_t               *fields            // 該模組指定的字段的定義
    int                      numfields          // 字段的數量
    
} probe_module_t;
</code></pre><p>在掃描操作初始化時會調用一次<code>global_initialize</code>，可以用來實施一些必要的全局配置和初始化操作。然而，<code>global_initialize</code>並不能訪問包緩衝區，那裏是線程特定的。代替的，<code>thread_initialize</code>在每個發送線程初始化的時候被調用，提供對於緩衝區的訪問，可以用來構建探測包和全局的源和目的值。此回調應用於構建主機不可知的包結構，甚至只有特定值（如：目的主機和校驗和），需要隨着每個主機更新。例如，以太網頭部信息在交換時不會變更（減去校驗和是由NIC硬件計算的）因此可以事先定義以減少掃描時間開銷。</p><p>調用回調參數<code>make_packet</code>是為了讓被掃描的主機允許<strong>探測模組</strong>更新主機指定的值，同時提供IP地址、一個非透明的驗證字符串和探測數目（如下所示）。探測模組負責在探測中放置儘可能多的驗證字符串，即便當服務器返回的應答為空時，探測模組也能驗證它的當前狀態。例如，針對TCP SYN掃描，tcp_synscan探測模組會使用TCP源端口和序列號的格式存儲驗證字符串。響應包（SYN+ACK）將包含目的端口和確認號的預期值。</p><pre><code>int make_packet(
    void        *packetbuf,  // 包的緩衝區
    ipaddr_n_t  src_ip,      // 網絡字節格式源IP
    ipaddr_n_t	dst_ip,      // 網絡字節格式目的IP
    uint32_t    *validation, // 探測中的有效字符串
    int         probe_num    // 如果向每個主機發送多重探測，
                             // 該值為我們對於該主機
                             // 正在發送的探測數目
);
</code></pre><p>掃描模組也應該定義<code>pcap_filter</code>、<code>validate_packet</code>和<code>process_packet</code>。只有符合PCAP過濾器的包才會被掃描。舉個例子，在一個TCP SYN掃描的情況下，我們只想要調查TCP SYN / ACK或RST TCP數據包，並利用類似<code>tcp &amp;&amp; tcp[13] &amp; 4 != 0 || tcp[13] == 18</code>的過濾方法。<code>validate_packet</code>函數將會被每個滿足PCAP過濾條件的包調用。如果驗證返回的值非零，將會調用<code>process_packet</code>函數，並使用<code>fields</code>定義的字段和包中的數據填充字段集。舉個例子，如下代碼為TCP synscan探測模組處理了一個數據包。</p><pre><code>void synscan_process_packet(const u_char *packet, uint32_t len, fieldset_t *fs)
{
    struct iphdr *ip_hdr = (struct iphdr *)&amp;packet[sizeof(struct ethhdr)];
    struct tcphdr *tcp = (struct tcphdr*)((char *)ip_hdr 
            + (sizeof(struct iphdr)));

    fs_add_uint64(fs, &quot;sport&quot;, (uint64_t) ntohs(tcp-&gt;source)); 
    fs_add_uint64(fs, &quot;dport&quot;, (uint64_t) ntohs(tcp-&gt;dest));
    fs_add_uint64(fs, &quot;seqnum&quot;, (uint64_t) ntohl(tcp-&gt;seq));
    fs_add_uint64(fs, &quot;acknum&quot;, (uint64_t) ntohl(tcp-&gt;ack_seq));
    fs_add_uint64(fs, &quot;window&quot;, (uint64_t) ntohs(tcp-&gt;window));

    if (tcp-&gt;rst) { // RST packet
        fs_add_string(fs, &quot;classification&quot;, (char*) &quot;rst&quot;, 0);
        fs_add_uint64(fs, &quot;success&quot;, 0);
    } else { // SYNACK packet
        fs_add_string(fs, &quot;classification&quot;, (char*) &quot;synack&quot;, 0);
        fs_add_uint64(fs, &quot;success&quot;, 1);
    }
}
</code></pre><hr>`,11)),o("p",null,[t[16]||(t[16]=e("via: ",-1)),a(p,{href:"https://zmap.io/documentation.html"},{default:n(()=>[...t[15]||(t[15]=[e("https://zmap.io/documentation.html",-1)])]),_:1})]),o("p",null,[t[19]||(t[19]=e("譯者：",-1)),a(p,{href:"https://github.com/martin2011qi"},{default:n(()=>[...t[17]||(t[17]=[e("martin2011qi",-1)])]),_:1}),t[20]||(t[20]=e(" 校對：",-1)),a(p,{href:"https://github.com/wxy"},{default:n(()=>[...t[18]||(t[18]=[e("wxy",-1)])]),_:1})]),o("p",null,[t[23]||(t[23]=e("本文由 ",-1)),a(p,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...t[21]||(t[21]=[e("LCTT",-1)])]),_:1}),t[24]||(t[24]=e(" 原創翻譯，",-1)),a(p,{href:"http://linux.cn/"},{default:n(()=>[...t[22]||(t[22]=[e("Linux中國",-1)])]),_:1}),t[25]||(t[25]=e(" 榮譽推出",-1))])])}const k=s(l,[["render",u]]);export{T as __pageData,k as default};
