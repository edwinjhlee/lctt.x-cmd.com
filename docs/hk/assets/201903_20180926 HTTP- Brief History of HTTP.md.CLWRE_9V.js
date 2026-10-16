import{_ as i,a0 as T,w as o,s as r,ao as t,I as l,x as s,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"HTTP 簡史 | LCTT x X-CMD","titleTemplate":false,"description":"HTTP 簡史 | LCTT (201903) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"HTTP 簡史 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"HTTP 簡史 | LCTT (201903) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201903/20180926 HTTP- Brief History of HTTP","title":"HTTP 簡史","tag":"201903","desc":""},"relativePath":"201903/20180926 HTTP- Brief History of HTTP.md","filePath":"[post].md"}'),c={name:"201903/20180926 HTTP- Brief History of HTTP.md"};function P(d,n,H,u,b,h){const a=T("Link");return o(),r("div",null,[n[23]||(n[23]=t(`<h1 id="http-簡史" tabindex="-1">HTTP 簡史 <a class="header-anchor" href="#http-簡史" aria-label="Permalink to “HTTP 簡史”">​</a></h1><p>譯註：本文來源於 2013 年出版的《High Performance Browser Networking》的第九章，因此有些信息略有過時。事實上，現在 HTTP/2 已經有相當的不是，而新的 HTTP/3 也在設計和標準制定當中。</p><h3 id="介紹" tabindex="-1">介紹 <a class="header-anchor" href="#介紹" aria-label="Permalink to “介紹”">​</a></h3><p><ruby>超文本傳輸協議<rt>Hypertext Transfer Protocol</rt></ruby>（HTTP）是互聯網上最普遍和廣泛採用的應用程序協議之一。它是客户端和服務器之間的通用語言，支持現代 Web。從最初作為單個的關鍵字和文檔路徑開始，它已成為不僅僅是瀏覽器的首選協議，而且幾乎是所有連接互聯網硬件和軟件應用程序的首選協議。</p><p>在本文中，我們將簡要回顧 HTTP 協議的發展歷史。對 HTTP 不同語義的完整討論超出了本文的範圍，但理解 HTTP 的關鍵設計變更以及每個變更背後的動機將為我們討論 HTTP 性能提供必要的背景，特別是在 HTTP/2 中即將進行的許多改進。</p><h3 id="http-0-9-單行協議" tabindex="-1">HTTP 0.9: 單行協議 <a class="header-anchor" href="#http-0-9-單行協議" aria-label="Permalink to “HTTP 0.9: 單行協議”">​</a></h3><p><ruby>蒂姆·伯納斯·李<rt>Tim Berners-Lee</rt></ruby> 最初的 HTTP 提案在設計時考慮到了簡單性，以幫助他採用他的另一個新想法：<ruby>萬維網<rt>World Wide Web</rt></ruby>。這個策略看起來奏效了：注意，他是一個有抱負的協議設計者。</p><p>1991 年，伯納斯·李概述了這個新協議的動機，並列出了幾個高級設計目標：文件傳輸功能、請求超文檔存檔索引搜索的能力，格式協商以及將客户端引用到另一個服務器的能力。為了證明該理論的實際應用，構建了一個簡單原型，它實現了所提議功能的一小部分。</p><ul><li>客户端請求是一個 ASCII 字符串。</li><li>客户端請求以回車符（CRLF）終止。</li><li>服務器響應是 ASCII 字符流。</li><li>服務器響應是一種超文本標記語言（HTML）。</li><li>文檔傳輸完成後連接終止。</li></ul><p>然而，即使這聽起來也比實際複雜得多。這些規則支持的是一種非常簡單的，對 Telnet 友好的協議，一些 Web 服務器至今仍然支持這種協議：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$&gt; telnet google.com 80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Connected to 74.125.xxx.xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GET /about/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(hypertext response)</span></span>
<span class="line"><span>(connection closed)</span></span></code></pre></div><p>請求包含這樣一行：<code>GET</code> 方法和請求文檔的路徑。響應是一個超文本文檔，沒有標題或任何其他元數據，只有 HTML。真的是再簡單不過了。此外，由於之前的交互是預期協議的子集，因此它獲得了一個非官方的 HTTP 0.9 標籤。其餘的，就像他們所説的，都是歷史。</p><p>從 1991 年這些不起眼的開始，HTTP 就有了自己的生命，並在接下來幾年裏迅速發展。讓我們快速回顧一下 HTTP 0.9 的特性：</p><ul><li>採用客户端-服務器架構，是一種請求-響應協議。</li><li>採用 ASCII 協議，運行在 TCP/IP 鏈路上。</li><li>旨在傳輸超文本文檔（HTML）。</li><li>每次請求後，服務器和客户端之間的連接都將關閉。</li></ul><blockquote><p>流行的 Web 服務器，如 Apache 和 Nginx，仍然支持 HTTP 0.9 協議，部分原因是因為它沒有太多功能！如果你感興趣，打開 Telnet 會話並嘗試通過 HTTP 0.9 訪問 google.com 或你最喜歡的網站，並檢查早期協議的行為和限制。</p></blockquote><h3 id="http-1-0-快速增長和-informational-rfc" tabindex="-1">HTTP/1.0: 快速增長和 Informational RFC <a class="header-anchor" href="#http-1-0-快速增長和-informational-rfc" aria-label="Permalink to “HTTP/1.0: 快速增長和 Informational RFC”">​</a></h3><p>1991 年至 1995 年期間，HTML 規範和一種稱為 “web 瀏覽器”的新型軟件快速發展，面向消費者的公共互聯網基礎設施也開始出現並快速增長。</p><blockquote><p><strong>完美風暴：1990 年代初的互聯網熱潮</strong></p></blockquote><blockquote><p>基於蒂姆·伯納斯·李最初的瀏覽器原型，美國國家超級計算機應用中心（NCSA）的一個團隊決定實現他們自己的版本。就這樣，第一個流行的瀏覽器誕生了：NCSA Mosaic。1994 年 10 月，NCSA 團隊的一名程序員 Marc Andreessen 與 Jim Clark 合作創建了 Mosaic Communications，該公司後來改名為 Netscape（網景），並於 1994 年 12 月發佈了 Netscape Navigator 1.0。從這一點來説，已經很清楚了，萬維網已經不僅僅是學術上的好奇心了。</p></blockquote><blockquote><p>實際上，同年在瑞士日內瓦組織了第一次萬維網會議，這導致<ruby>萬維網聯盟<rt>World Wide Web Consortium</rt></ruby>（W3C）的成立，以幫助指導 HTML 的發展。同樣，在 IETF 內部建立了一個並行的<ruby>HTTP 工作組<rt>HTTP Working Group</rt></ruby>（HTTP-WG），專注於改進 HTTP 協議。後來這兩個團體一直對 Web 的發展起着重要作用。</p></blockquote><blockquote><p>最後，完美風暴來臨，CompuServe，AOL 和 Prodigy 在 1994-1995 年的同一時間開始向公眾提供撥號上網服務。憑藉這股迅速的浪潮，Netscape 在 1995 年 8 月 9 日憑藉其成功的 IPO 創造了歷史。這預示着互聯網熱潮已經到來，人人都想分一杯羹！</p></blockquote><p>不斷增長的新 Web 所需功能及其在公共網站上的應用場景很快暴露了 HTTP 0.9 的許多基礎限制：我們需要一種能夠提供超文本文檔、提供關於請求和響應的更豐富的元數據，支持內容協商等等的協議。相應地，新興的 Web 開發人員社區通過一個特殊的過程生成了大量實驗性的 HTTP 服務器和客户端實現來回應：實現，部署，並查看其他人是否採用它。</p><p>從這些急速增長的實驗開始，一系列最佳實踐和常見模式開始出現。1996 年 5 月，<ruby>HTTP 工作組<rt>HTTP Working Group</rt></ruby>（HTTP-WG）發佈了 RFC 1945，它記錄了許多被廣泛使用的 HTTP/1.0 實現的“常見用法”。請注意，這只是一個信息性 RFC：HTTP/1.0，如你所知的，它不是一個正式規範或 Internet 標準！</p><p>話雖如此，HTTP/1.0 請求看起來應該是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$&gt; telnet website.org 80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Connected to xxx.xxx.xxx.xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GET /rfc/rfc1945.txt HTTP/1.0 ❶</span></span>
<span class="line"><span>User-Agent: CERN-LineMode/2.15 libwww/2.17b3</span></span>
<span class="line"><span>Accept: */*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.0 200 OK ❷</span></span>
<span class="line"><span>Content-Type: text/plain</span></span>
<span class="line"><span>Content-Length: 137582</span></span>
<span class="line"><span>Expires: Thu, 01 Dec 1997 16:00:00 GMT</span></span>
<span class="line"><span>Last-Modified: Wed, 1 May 1996 12:45:26 GMT</span></span>
<span class="line"><span>Server: Apache 0.84</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(plain-text response)</span></span>
<span class="line"><span>(connection closed)</span></span></code></pre></div><ul><li>❶ 請求行有 HTTP 版本號，後面跟請求頭</li><li>❷ 響應狀態，後跟響應頭</li></ul><p>前面的交互並不是 HTTP/1.0 功能的詳盡列表，但它確實説明了一些關鍵的協議更改：</p><ul><li>請求可能多個由換行符分隔的請求頭字段組成。</li><li>響應對象的前綴是響應狀態行。</li><li>響應對象有自己的一組由換行符分隔的響應頭字段。</li><li>響應對象不限於超文本。</li><li>每次請求後，服務器和客户端之間的連接都將關閉。</li></ul><p>請求頭和響應頭都保留為 ASCII 編碼，但響應對象本身可以是任何類型：HTML 文件、純文本文件、圖像或任何其他內容類型。因此，HTTP 的“超文本傳輸”部分在引入後不久就變成了用詞不當。實際上，HTTP 已經迅速發展成為一種超媒體傳輸，但最初的名稱沒有改變。</p><p>除了媒體類型協商之外，RFC 還記錄了許多其他常用功能：內容編碼、字符集支持、多部分類型、授權、緩存、代理行為、日期格式等。</p>`,30)),l("blockquote",null,[l("p",null,[n[2]||(n[2]=s("今天，幾乎所有 Web 上的服務器都可以並且仍將使用 HTTP/1.0。不過，現在你應該更加清楚了！每個請求都需要一個新的 TCP 連接，這會對 HTTP/1.0 造成嚴重的性能損失。參見",-1)),p(a,{href:"https://hpbn.co/building-blocks-of-tcp/#three-way-handshake"},{default:e(()=>[...n[0]||(n[0]=[s("三次握手",-1)])]),_:1}),n[3]||(n[3]=s("，接着會",-1)),p(a,{href:"https://hpbn.co/building-blocks-of-tcp/#slow-start"},{default:e(()=>[...n[1]||(n[1]=[s("慢啓動",-1)])]),_:1}),n[4]||(n[4]=s("。",-1))])]),n[24]||(n[24]=t(`<h3 id="http-1-1-internet-標準" tabindex="-1">HTTP/1.1: Internet 標準 <a class="header-anchor" href="#http-1-1-internet-標準" aria-label="Permalink to “HTTP/1.1: Internet 標準”">​</a></h3><p>將 HTTP 轉變為官方 IETF 互聯網標準的工作與圍繞 HTTP/1.0 的文檔工作並行進行，並計劃從 1995 年至 1999 年完成。事實上，第一個正式的 HTTP/1.1 標準定義於 RFC 2068，它在 HTTP/1.0 發佈大約六個月後，即 1997 年 1 月正式發佈。兩年半後，即 1999 年 6 月，一些新的改進和更新被納入標準，並作為 RFC 2616 發佈。</p><p>HTTP/1.1 標準解決了早期版本中發現的許多協議歧義，並引入了一些關鍵的性能優化：保持連接，分塊編碼傳輸，字節範圍請求，附加緩存機制，傳輸編碼和請求管道。</p><p>有了這些功能，我們現在可以審視一下由任何現代 HTTP 瀏覽器和客户端執行的典型 HTTP/1.1 會話：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$&gt; telnet website.org 80</span></span>
<span class="line"><span>Connected to xxx.xxx.xxx.xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GET /index.html HTTP/1.1 ❶</span></span>
<span class="line"><span>Host: website.org</span></span>
<span class="line"><span>User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4)... (snip)</span></span>
<span class="line"><span>Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span>
<span class="line"><span>Accept-Encoding: gzip,deflate,sdch</span></span>
<span class="line"><span>Accept-Language: en-US,en;q=0.8</span></span>
<span class="line"><span>Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.3</span></span>
<span class="line"><span>Cookie: __qca=P0-800083390... (snip)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK ❷</span></span>
<span class="line"><span>Server: nginx/1.0.11</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Content-Type: text/html; charset=utf-8</span></span>
<span class="line"><span>Via: HTTP/1.1 GWA</span></span>
<span class="line"><span>Date: Wed, 25 Jul 2012 20:23:35 GMT</span></span>
<span class="line"><span>Expires: Wed, 25 Jul 2012 20:23:35 GMT</span></span>
<span class="line"><span>Cache-Control: max-age=0, no-cache</span></span>
<span class="line"><span>Transfer-Encoding: chunked</span></span>
<span class="line"><span></span></span>
<span class="line"><span>100 ❸</span></span>
<span class="line"><span>&lt;!doctype html&gt;</span></span>
<span class="line"><span>(snip)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>100</span></span>
<span class="line"><span>(snip)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0 ❹</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GET /favicon.ico HTTP/1.1 ❺</span></span>
<span class="line"><span>Host: www.website.org</span></span>
<span class="line"><span>User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4)... (snip)</span></span>
<span class="line"><span>Accept: */*</span></span>
<span class="line"><span>Referer: http://website.org/</span></span>
<span class="line"><span>Connection: close ❻</span></span>
<span class="line"><span>Accept-Encoding: gzip,deflate,sdch</span></span>
<span class="line"><span>Accept-Language: en-US,en;q=0.8</span></span>
<span class="line"><span>Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.3</span></span>
<span class="line"><span>Cookie: __qca=P0-800083390... (snip)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK ❼</span></span>
<span class="line"><span>Server: nginx/1.0.11</span></span>
<span class="line"><span>Content-Type: image/x-icon</span></span>
<span class="line"><span>Content-Length: 3638</span></span>
<span class="line"><span>Connection: close</span></span>
<span class="line"><span>Last-Modified: Thu, 19 Jul 2012 17:51:44 GMT</span></span>
<span class="line"><span>Cache-Control: max-age=315360000</span></span>
<span class="line"><span>Accept-Ranges: bytes</span></span>
<span class="line"><span>Via: HTTP/1.1 GWA</span></span>
<span class="line"><span>Date: Sat, 21 Jul 2012 21:35:22 GMT</span></span>
<span class="line"><span>Expires: Thu, 31 Dec 2037 23:55:55 GMT</span></span>
<span class="line"><span>Etag: W/PSA-GAu26oXbDi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(icon data)</span></span>
<span class="line"><span>(connection closed)</span></span></code></pre></div><ul><li>❶ 請求的 HTML 文件，包括編、字符集和 cookie 元數據</li><li>❷ 原始 HTML 請求的分塊響應</li><li>❸ 以 ASCII 十六進制數字（256 字節）表示塊中的八位元的數量</li><li>❹ 分塊流響應結束</li><li>❺ 在相同的 TCP 連接上請求一個圖標文件</li><li>❻ 通知服務器不再重用連接</li><li>❼ 圖標響應後，然後關閉連接</li></ul>`,6)),l("p",null,[n[6]||(n[6]=s("哇，這裏發生了很多事情！第一個也是最明顯的區別是我們有兩個對象請求，一個用於 HTML 頁面，另一個用於圖像，它們都通過一個連接完成。這就是保持連接的實際應用，它允許我們重用現有的 TCP 連接到同一個主機的多個請求，提供一個更快的最終用户體驗。參見",-1)),p(a,{href:"https://hpbn.co/building-blocks-of-tcp/#optimizing-for-tcp"},{default:e(()=>[...n[5]||(n[5]=[s("TCP 優化",-1)])]),_:1}),n[7]||(n[7]=s("。",-1))]),n[25]||(n[25]=t('<p>要終止持久連接，注意第二個客户端請求通過 <code>Connection</code> 請求頭向服務器發送顯示的 <code>close</code>。類似地，一旦傳輸響應，服務器就可以通知客户端關閉當前 TCP 連接。從技術上講，任何一方都可以在沒有此類信號的情況下終止 TCP 連接，但客户端和服務器應儘可能提供此類信號，以便雙方都啓用更好的連接重用策略。</p><blockquote><p>HTTP/1.1 改變了 HTTP 協議的語義，默認情況下使用保持連接。這意味着，除非另有説明（通過 <code>Connection:close</code> 頭），否則服務器應默認保持連接打開。</p></blockquote><blockquote><p>但是，同樣的功能也被反向移植到 HTTP/1.0 上，通過 <code>Connection:keep-Alive</code> 頭啓用。因此，如果你使用 HTTP/1.1，從技術上講，你不需要 <code>Connection:keep-Alive</code> 頭，但許多客户端仍然選擇提供它。</p></blockquote><p>此外，HTTP/1.1 協議還添加了內容、編碼、字符集，甚至語言協商、傳輸編碼、緩存指令、客户端 cookie，以及可以針對每個請求協商的十幾個其他功能。</p><p>我們不打算詳細討論每個 HTTP/1.1 特性的語義。這個主題可以寫一本專門的書了，已經有了很多很棒的書。相反，前面的示例很好地説明了 HTTP 的快速進展和演變，以及每個客户端-服務器交換的錯綜複雜的過程，裏面發生了很多事情！</p><blockquote><p>要了解 HTTP 協議所有內部工作原理，參考 David Gourley 和 Brian Totty 共同撰寫的權威指南： The Definitive Guide。</p></blockquote><h3 id="http-2-提高傳輸性能" tabindex="-1">HTTP/2: 提高傳輸性能 <a class="header-anchor" href="#http-2-提高傳輸性能" aria-label="Permalink to “HTTP/2: 提高傳輸性能”">​</a></h3><p>RFC 2616 自發布以來，已經成為互聯網空前增長的基礎：數十億各種形狀和大小的設備，從台式電腦到我們口袋裏的小型網絡設備，每天都在使用 HTTP 來傳送新聞，視頻，在我們生活中的數百萬的其他網絡應用程序都在依靠它。</p><p>一開始是一個簡單的，用於檢索超文本的簡單協議，很快演變成了一種通用的超媒體傳輸，現在十年過去了，它幾乎可以為你所能想像到的任何用例提供支持。可以使用協議的服務器無處不在，客户端也可以使用協議，這意味着現在許多應用程序都是專門在 HTTP 之上設計和部署的。</p><p>需要一個協議來控制你的咖啡壺？RFC 2324 已經涵蓋了超文本咖啡壺控制協議（HTCPCP/1.0）- 它原本是 IETF 在愚人節開的一個玩笑，但在我們這個超鏈接的新世界中，它不僅僅意味着一個玩笑。</p><blockquote><p>超文本傳輸協議（HTTP）是一個應用程序級的協議，用於分佈式、協作、超媒體信息系統。它是一種通用的、無狀態的協議，可以通過擴展請求方法、錯誤碼和頭，用於超出超文本之外的許多任務，比如名稱服務器和分佈式對象管理系統。HTTP 的一個特性是數據表示的類型和協商，允許獨立於傳輸的數據構建系統。</p><p>RFC 2616: HTTP/1.1, June 1999</p></blockquote><p>HTTP 協議的簡單性是它最初被採用和快速增長的原因。事實上，現在使用 HTTP 作為主要控制和數據協議的嵌入式設備（傳感器，執行器和咖啡壺）並不罕見。但在其自身成功的重壓下，隨着我們越來越多地繼續將日常互動轉移到網絡 —— 社交、電子郵件、新聞和視頻，以及越來越多的個人和工作空間，它也開始顯示出壓力的跡象。用户和 Web 開發人員現在都要求 HTTP/1.1 提供近乎實時的響應能力和協議 性能，如果不進行一些修改，就無法滿足這些要求。</p><p>為了應對這些新挑戰，HTTP 必須繼續發展，因此 HTTPbis 工作組在 2012 年初宣佈了一項針對 HTTP/2 的新計劃：</p><blockquote><p>已經有一個協議中出現了新的實現經驗和興趣，該協議保留了 HTTP 的語義，但是沒有保留 HTTP/1.x 的消息框架和語法，這些問題已經被確定為妨礙性能和鼓勵濫用底層傳輸。</p><p>工作組將使用有序的雙向流中生成 HTTP 當前語義的新表達式的規範。與 HTTP/1.x 一樣，主要傳輸目標是 TCP，但是應該可以使用其他方式傳輸。</p><p>HTTP/2 charter, January 2012</p></blockquote><p>HTTP/2 的主要重點是提高傳輸性能並支持更低的延遲和更高的吞吐量。主要的版本增量聽起來像是一個很大的步驟，但就性能而言，它將是一個重大的步驟，但重要的是要注意，沒有任何高級協議語義收到影響：所有的 HTTP 頭，值和用例是相同的。</p><p>任何現有的網站或應用程序都可以並且將通過 HTTP/2 傳送而無需修改。你無需修改應用程序標記來利用 HTTP/2。HTTP 服務器將來一定會使用 HTTP/2，但這對大多數用户來説應該是透明的升級。如果工作組實現目標，唯一的區別應該是我們的應用程序以更低的延遲和更好的網絡連接利用率來傳送數據。</p><p>話雖如此，但我們不要走的太遠了。在討論新的 HTTP/2 協議功能之前，有必要回顧一下我們現有的 HTTP/1.1 部署和性能最佳實踐。HTTP/2 工作組正在新規範上取得快速的進展，但即使最終標準已經完成並準備就緒，在可預見的未來，我們仍然必須支持舊的 HTTP/1.1 客户端，實際上，這得十年或更長時間。</p><hr>',18)),l("p",null,[n[9]||(n[9]=s("via: ",-1)),p(a,{href:"https://hpbn.co/brief-history-of-http/#http-09-the-one-line-protocol"},{default:e(()=>[...n[8]||(n[8]=[s("https://hpbn.co/brief-history-of-http/#http-09-the-one-line-protocol",-1)])]),_:1})]),l("p",null,[n[14]||(n[14]=s("作者：",-1)),p(a,{href:"https://www.igvita.com/"},{default:e(()=>[...n[10]||(n[10]=[s("Ilya Grigorik",-1)])]),_:1}),n[15]||(n[15]=s(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...n[11]||(n[11]=[s("lujun9972",-1)])]),_:1}),n[16]||(n[16]=s(" 譯者：",-1)),p(a,{href:"https://github.com/MjSeven"},{default:e(()=>[...n[12]||(n[12]=[s("MjSeven",-1)])]),_:1}),n[17]||(n[17]=s(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...n[13]||(n[13]=[s("wxy",-1)])]),_:1})]),l("p",null,[n[20]||(n[20]=s("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[18]||(n[18]=[s("LCTT",-1)])]),_:1}),n[21]||(n[21]=s(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...n[19]||(n[19]=[s("Linux中國",-1)])]),_:1}),n[22]||(n[22]=s(" 榮譽推出",-1))])])}const k=i(c,[["render",P]]);export{f as __pageData,k as default};
