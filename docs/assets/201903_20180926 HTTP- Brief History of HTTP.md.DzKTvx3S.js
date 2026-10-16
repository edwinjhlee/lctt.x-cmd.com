import{_ as i,a0 as T,w as o,s as r,ao as t,I as l,x as s,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"HTTP 简史 | LCTT x X-CMD","titleTemplate":false,"description":"HTTP 简史 | LCTT (201903) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"HTTP 简史 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"HTTP 简史 | LCTT (201903) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201903/20180926 HTTP- Brief History of HTTP","title":"HTTP 简史","tag":"201903","desc":""},"relativePath":"201903/20180926 HTTP- Brief History of HTTP.md","filePath":"[post].md"}'),c={name:"201903/20180926 HTTP- Brief History of HTTP.md"};function P(d,n,H,u,b,h){const a=T("Link");return o(),r("div",null,[n[23]||(n[23]=t(`<h1 id="http-简史" tabindex="-1">HTTP 简史 <a class="header-anchor" href="#http-简史" aria-label="Permalink to “HTTP 简史”">​</a></h1><p>译注：本文来源于 2013 年出版的《High Performance Browser Networking》的第九章，因此有些信息略有过时。事实上，现在 HTTP/2 已经有相当的不是，而新的 HTTP/3 也在设计和标准制定当中。</p><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to “介绍”">​</a></h3><p><ruby>超文本传输协议<rt>Hypertext Transfer Protocol</rt></ruby>（HTTP）是互联网上最普遍和广泛采用的应用程序协议之一。它是客户端和服务器之间的通用语言，支持现代 Web。从最初作为单个的关键字和文档路径开始，它已成为不仅仅是浏览器的首选协议，而且几乎是所有连接互联网硬件和软件应用程序的首选协议。</p><p>在本文中，我们将简要回顾 HTTP 协议的发展历史。对 HTTP 不同语义的完整讨论超出了本文的范围，但理解 HTTP 的关键设计变更以及每个变更背后的动机将为我们讨论 HTTP 性能提供必要的背景，特别是在 HTTP/2 中即将进行的许多改进。</p><h3 id="http-0-9-单行协议" tabindex="-1">HTTP 0.9: 单行协议 <a class="header-anchor" href="#http-0-9-单行协议" aria-label="Permalink to “HTTP 0.9: 单行协议”">​</a></h3><p><ruby>蒂姆·伯纳斯·李<rt>Tim Berners-Lee</rt></ruby> 最初的 HTTP 提案在设计时考虑到了简单性，以帮助他采用他的另一个新想法：<ruby>万维网<rt>World Wide Web</rt></ruby>。这个策略看起来奏效了：注意，他是一个有抱负的协议设计者。</p><p>1991 年，伯纳斯·李概述了这个新协议的动机，并列出了几个高级设计目标：文件传输功能、请求超文档存档索引搜索的能力，格式协商以及将客户端引用到另一个服务器的能力。为了证明该理论的实际应用，构建了一个简单原型，它实现了所提议功能的一小部分。</p><ul><li>客户端请求是一个 ASCII 字符串。</li><li>客户端请求以回车符（CRLF）终止。</li><li>服务器响应是 ASCII 字符流。</li><li>服务器响应是一种超文本标记语言（HTML）。</li><li>文档传输完成后连接终止。</li></ul><p>然而，即使这听起来也比实际复杂得多。这些规则支持的是一种非常简单的，对 Telnet 友好的协议，一些 Web 服务器至今仍然支持这种协议：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$&gt; telnet google.com 80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Connected to 74.125.xxx.xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GET /about/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(hypertext response)</span></span>
<span class="line"><span>(connection closed)</span></span></code></pre></div><p>请求包含这样一行：<code>GET</code> 方法和请求文档的路径。响应是一个超文本文档，没有标题或任何其他元数据，只有 HTML。真的是再简单不过了。此外，由于之前的交互是预期协议的子集，因此它获得了一个非官方的 HTTP 0.9 标签。其余的，就像他们所说的，都是历史。</p><p>从 1991 年这些不起眼的开始，HTTP 就有了自己的生命，并在接下来几年里迅速发展。让我们快速回顾一下 HTTP 0.9 的特性：</p><ul><li>采用客户端-服务器架构，是一种请求-响应协议。</li><li>采用 ASCII 协议，运行在 TCP/IP 链路上。</li><li>旨在传输超文本文档（HTML）。</li><li>每次请求后，服务器和客户端之间的连接都将关闭。</li></ul><blockquote><p>流行的 Web 服务器，如 Apache 和 Nginx，仍然支持 HTTP 0.9 协议，部分原因是因为它没有太多功能！如果你感兴趣，打开 Telnet 会话并尝试通过 HTTP 0.9 访问 google.com 或你最喜欢的网站，并检查早期协议的行为和限制。</p></blockquote><h3 id="http-1-0-快速增长和-informational-rfc" tabindex="-1">HTTP/1.0: 快速增长和 Informational RFC <a class="header-anchor" href="#http-1-0-快速增长和-informational-rfc" aria-label="Permalink to “HTTP/1.0: 快速增长和 Informational RFC”">​</a></h3><p>1991 年至 1995 年期间，HTML 规范和一种称为 “web 浏览器”的新型软件快速发展，面向消费者的公共互联网基础设施也开始出现并快速增长。</p><blockquote><p><strong>完美风暴：1990 年代初的互联网热潮</strong></p></blockquote><blockquote><p>基于蒂姆·伯纳斯·李最初的浏览器原型，美国国家超级计算机应用中心（NCSA）的一个团队决定实现他们自己的版本。就这样，第一个流行的浏览器诞生了：NCSA Mosaic。1994 年 10 月，NCSA 团队的一名程序员 Marc Andreessen 与 Jim Clark 合作创建了 Mosaic Communications，该公司后来改名为 Netscape（网景），并于 1994 年 12 月发布了 Netscape Navigator 1.0。从这一点来说，已经很清楚了，万维网已经不仅仅是学术上的好奇心了。</p></blockquote><blockquote><p>实际上，同年在瑞士日内瓦组织了第一次万维网会议，这导致<ruby>万维网联盟<rt>World Wide Web Consortium</rt></ruby>（W3C）的成立，以帮助指导 HTML 的发展。同样，在 IETF 内部建立了一个并行的<ruby>HTTP 工作组<rt>HTTP Working Group</rt></ruby>（HTTP-WG），专注于改进 HTTP 协议。后来这两个团体一直对 Web 的发展起着重要作用。</p></blockquote><blockquote><p>最后，完美风暴来临，CompuServe，AOL 和 Prodigy 在 1994-1995 年的同一时间开始向公众提供拨号上网服务。凭借这股迅速的浪潮，Netscape 在 1995 年 8 月 9 日凭借其成功的 IPO 创造了历史。这预示着互联网热潮已经到来，人人都想分一杯羹！</p></blockquote><p>不断增长的新 Web 所需功能及其在公共网站上的应用场景很快暴露了 HTTP 0.9 的许多基础限制：我们需要一种能够提供超文本文档、提供关于请求和响应的更丰富的元数据，支持内容协商等等的协议。相应地，新兴的 Web 开发人员社区通过一个特殊的过程生成了大量实验性的 HTTP 服务器和客户端实现来回应：实现，部署，并查看其他人是否采用它。</p><p>从这些急速增长的实验开始，一系列最佳实践和常见模式开始出现。1996 年 5 月，<ruby>HTTP 工作组<rt>HTTP Working Group</rt></ruby>（HTTP-WG）发布了 RFC 1945，它记录了许多被广泛使用的 HTTP/1.0 实现的“常见用法”。请注意，这只是一个信息性 RFC：HTTP/1.0，如你所知的，它不是一个正式规范或 Internet 标准！</p><p>话虽如此，HTTP/1.0 请求看起来应该是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$&gt; telnet website.org 80</span></span>
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
<span class="line"><span>(connection closed)</span></span></code></pre></div><ul><li>❶ 请求行有 HTTP 版本号，后面跟请求头</li><li>❷ 响应状态，后跟响应头</li></ul><p>前面的交互并不是 HTTP/1.0 功能的详尽列表，但它确实说明了一些关键的协议更改：</p><ul><li>请求可能多个由换行符分隔的请求头字段组成。</li><li>响应对象的前缀是响应状态行。</li><li>响应对象有自己的一组由换行符分隔的响应头字段。</li><li>响应对象不限于超文本。</li><li>每次请求后，服务器和客户端之间的连接都将关闭。</li></ul><p>请求头和响应头都保留为 ASCII 编码，但响应对象本身可以是任何类型：HTML 文件、纯文本文件、图像或任何其他内容类型。因此，HTTP 的“超文本传输”部分在引入后不久就变成了用词不当。实际上，HTTP 已经迅速发展成为一种超媒体传输，但最初的名称没有改变。</p><p>除了媒体类型协商之外，RFC 还记录了许多其他常用功能：内容编码、字符集支持、多部分类型、授权、缓存、代理行为、日期格式等。</p>`,30)),l("blockquote",null,[l("p",null,[n[2]||(n[2]=s("今天，几乎所有 Web 上的服务器都可以并且仍将使用 HTTP/1.0。不过，现在你应该更加清楚了！每个请求都需要一个新的 TCP 连接，这会对 HTTP/1.0 造成严重的性能损失。参见",-1)),p(a,{href:"https://hpbn.co/building-blocks-of-tcp/#three-way-handshake"},{default:e(()=>[...n[0]||(n[0]=[s("三次握手",-1)])]),_:1}),n[3]||(n[3]=s("，接着会",-1)),p(a,{href:"https://hpbn.co/building-blocks-of-tcp/#slow-start"},{default:e(()=>[...n[1]||(n[1]=[s("慢启动",-1)])]),_:1}),n[4]||(n[4]=s("。",-1))])]),n[24]||(n[24]=t(`<h3 id="http-1-1-internet-标准" tabindex="-1">HTTP/1.1: Internet 标准 <a class="header-anchor" href="#http-1-1-internet-标准" aria-label="Permalink to “HTTP/1.1: Internet 标准”">​</a></h3><p>将 HTTP 转变为官方 IETF 互联网标准的工作与围绕 HTTP/1.0 的文档工作并行进行，并计划从 1995 年至 1999 年完成。事实上，第一个正式的 HTTP/1.1 标准定义于 RFC 2068，它在 HTTP/1.0 发布大约六个月后，即 1997 年 1 月正式发布。两年半后，即 1999 年 6 月，一些新的改进和更新被纳入标准，并作为 RFC 2616 发布。</p><p>HTTP/1.1 标准解决了早期版本中发现的许多协议歧义，并引入了一些关键的性能优化：保持连接，分块编码传输，字节范围请求，附加缓存机制，传输编码和请求管道。</p><p>有了这些功能，我们现在可以审视一下由任何现代 HTTP 浏览器和客户端执行的典型 HTTP/1.1 会话：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$&gt; telnet website.org 80</span></span>
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
<span class="line"><span>(connection closed)</span></span></code></pre></div><ul><li>❶ 请求的 HTML 文件，包括编、字符集和 cookie 元数据</li><li>❷ 原始 HTML 请求的分块响应</li><li>❸ 以 ASCII 十六进制数字（256 字节）表示块中的八位元的数量</li><li>❹ 分块流响应结束</li><li>❺ 在相同的 TCP 连接上请求一个图标文件</li><li>❻ 通知服务器不再重用连接</li><li>❼ 图标响应后，然后关闭连接</li></ul>`,6)),l("p",null,[n[6]||(n[6]=s("哇，这里发生了很多事情！第一个也是最明显的区别是我们有两个对象请求，一个用于 HTML 页面，另一个用于图像，它们都通过一个连接完成。这就是保持连接的实际应用，它允许我们重用现有的 TCP 连接到同一个主机的多个请求，提供一个更快的最终用户体验。参见",-1)),p(a,{href:"https://hpbn.co/building-blocks-of-tcp/#optimizing-for-tcp"},{default:e(()=>[...n[5]||(n[5]=[s("TCP 优化",-1)])]),_:1}),n[7]||(n[7]=s("。",-1))]),n[25]||(n[25]=t('<p>要终止持久连接，注意第二个客户端请求通过 <code>Connection</code> 请求头向服务器发送显示的 <code>close</code>。类似地，一旦传输响应，服务器就可以通知客户端关闭当前 TCP 连接。从技术上讲，任何一方都可以在没有此类信号的情况下终止 TCP 连接，但客户端和服务器应尽可能提供此类信号，以便双方都启用更好的连接重用策略。</p><blockquote><p>HTTP/1.1 改变了 HTTP 协议的语义，默认情况下使用保持连接。这意味着，除非另有说明（通过 <code>Connection:close</code> 头），否则服务器应默认保持连接打开。</p></blockquote><blockquote><p>但是，同样的功能也被反向移植到 HTTP/1.0 上，通过 <code>Connection:keep-Alive</code> 头启用。因此，如果你使用 HTTP/1.1，从技术上讲，你不需要 <code>Connection:keep-Alive</code> 头，但许多客户端仍然选择提供它。</p></blockquote><p>此外，HTTP/1.1 协议还添加了内容、编码、字符集，甚至语言协商、传输编码、缓存指令、客户端 cookie，以及可以针对每个请求协商的十几个其他功能。</p><p>我们不打算详细讨论每个 HTTP/1.1 特性的语义。这个主题可以写一本专门的书了，已经有了很多很棒的书。相反，前面的示例很好地说明了 HTTP 的快速进展和演变，以及每个客户端-服务器交换的错综复杂的过程，里面发生了很多事情！</p><blockquote><p>要了解 HTTP 协议所有内部工作原理，参考 David Gourley 和 Brian Totty 共同撰写的权威指南： The Definitive Guide。</p></blockquote><h3 id="http-2-提高传输性能" tabindex="-1">HTTP/2: 提高传输性能 <a class="header-anchor" href="#http-2-提高传输性能" aria-label="Permalink to “HTTP/2: 提高传输性能”">​</a></h3><p>RFC 2616 自发布以来，已经成为互联网空前增长的基础：数十亿各种形状和大小的设备，从台式电脑到我们口袋里的小型网络设备，每天都在使用 HTTP 来传送新闻，视频，在我们生活中的数百万的其他网络应用程序都在依靠它。</p><p>一开始是一个简单的，用于检索超文本的简单协议，很快演变成了一种通用的超媒体传输，现在十年过去了，它几乎可以为你所能想象到的任何用例提供支持。可以使用协议的服务器无处不在，客户端也可以使用协议，这意味着现在许多应用程序都是专门在 HTTP 之上设计和部署的。</p><p>需要一个协议来控制你的咖啡壶？RFC 2324 已经涵盖了超文本咖啡壶控制协议（HTCPCP/1.0）- 它原本是 IETF 在愚人节开的一个玩笑，但在我们这个超链接的新世界中，它不仅仅意味着一个玩笑。</p><blockquote><p>超文本传输协议（HTTP）是一个应用程序级的协议，用于分布式、协作、超媒体信息系统。它是一种通用的、无状态的协议，可以通过扩展请求方法、错误码和头，用于超出超文本之外的许多任务，比如名称服务器和分布式对象管理系统。HTTP 的一个特性是数据表示的类型和协商，允许独立于传输的数据构建系统。</p><p>RFC 2616: HTTP/1.1, June 1999</p></blockquote><p>HTTP 协议的简单性是它最初被采用和快速增长的原因。事实上，现在使用 HTTP 作为主要控制和数据协议的嵌入式设备（传感器，执行器和咖啡壶）并不罕见。但在其自身成功的重压下，随着我们越来越多地继续将日常互动转移到网络 —— 社交、电子邮件、新闻和视频，以及越来越多的个人和工作空间，它也开始显示出压力的迹象。用户和 Web 开发人员现在都要求 HTTP/1.1 提供近乎实时的响应能力和协议 性能，如果不进行一些修改，就无法满足这些要求。</p><p>为了应对这些新挑战，HTTP 必须继续发展，因此 HTTPbis 工作组在 2012 年初宣布了一项针对 HTTP/2 的新计划：</p><blockquote><p>已经有一个协议中出现了新的实现经验和兴趣，该协议保留了 HTTP 的语义，但是没有保留 HTTP/1.x 的消息框架和语法，这些问题已经被确定为妨碍性能和鼓励滥用底层传输。</p><p>工作组将使用有序的双向流中生成 HTTP 当前语义的新表达式的规范。与 HTTP/1.x 一样，主要传输目标是 TCP，但是应该可以使用其他方式传输。</p><p>HTTP/2 charter, January 2012</p></blockquote><p>HTTP/2 的主要重点是提高传输性能并支持更低的延迟和更高的吞吐量。主要的版本增量听起来像是一个很大的步骤，但就性能而言，它将是一个重大的步骤，但重要的是要注意，没有任何高级协议语义收到影响：所有的 HTTP 头，值和用例是相同的。</p><p>任何现有的网站或应用程序都可以并且将通过 HTTP/2 传送而无需修改。你无需修改应用程序标记来利用 HTTP/2。HTTP 服务器将来一定会使用 HTTP/2，但这对大多数用户来说应该是透明的升级。如果工作组实现目标，唯一的区别应该是我们的应用程序以更低的延迟和更好的网络连接利用率来传送数据。</p><p>话虽如此，但我们不要走的太远了。在讨论新的 HTTP/2 协议功能之前，有必要回顾一下我们现有的 HTTP/1.1 部署和性能最佳实践。HTTP/2 工作组正在新规范上取得快速的进展，但即使最终标准已经完成并准备就绪，在可预见的未来，我们仍然必须支持旧的 HTTP/1.1 客户端，实际上，这得十年或更长时间。</p><hr>',18)),l("p",null,[n[9]||(n[9]=s("via: ",-1)),p(a,{href:"https://hpbn.co/brief-history-of-http/#http-09-the-one-line-protocol"},{default:e(()=>[...n[8]||(n[8]=[s("https://hpbn.co/brief-history-of-http/#http-09-the-one-line-protocol",-1)])]),_:1})]),l("p",null,[n[14]||(n[14]=s("作者：",-1)),p(a,{href:"https://www.igvita.com/"},{default:e(()=>[...n[10]||(n[10]=[s("Ilya Grigorik",-1)])]),_:1}),n[15]||(n[15]=s(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...n[11]||(n[11]=[s("lujun9972",-1)])]),_:1}),n[16]||(n[16]=s(" 译者：",-1)),p(a,{href:"https://github.com/MjSeven"},{default:e(()=>[...n[12]||(n[12]=[s("MjSeven",-1)])]),_:1}),n[17]||(n[17]=s(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...n[13]||(n[13]=[s("wxy",-1)])]),_:1})]),l("p",null,[n[20]||(n[20]=s("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[18]||(n[18]=[s("LCTT",-1)])]),_:1}),n[21]||(n[21]=s(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...n[19]||(n[19]=[s("Linux中国",-1)])]),_:1}),n[22]||(n[22]=s(" 荣誉推出",-1))])])}const k=i(c,[["render",P]]);export{f as __pageData,k as default};
