import{_ as i,a0 as l,w as d,s as r,I as n,x as a,a1 as t,A as e,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"如何使用 Protobuf 做数据交换 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Protobuf 做数据交换 | LCTT (201911) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Protobuf 做数据交换 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Protobuf 做数据交换 | LCTT (201911) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201911/20191018 How to use Protobuf for data interchange","title":"如何使用 Protobuf 做数据交换","tag":"201911","desc":""},"relativePath":"201911/20191018 How to use Protobuf for data interchange.md","filePath":"[post].md"}'),u={name:"201911/20191018 How to use Protobuf for data interchange.md"};function c(b,s,m,g,f,h){const p=l("Link");return d(),r("div",null,[s[54]||(s[54]=n("h1",{id:"如何使用-protobuf-做数据交换",tabindex:"-1"},[a("如何使用 Protobuf 做数据交换 "),n("a",{class:"header-anchor",href:"#如何使用-protobuf-做数据交换","aria-label":"Permalink to “如何使用 Protobuf 做数据交换”"},"​")],-1)),s[55]||(s[55]=n("blockquote",null,[n("p",null,"在以不同语言编写并在不同平台上运行的应用程序之间交换数据时，Protobuf 编码可提高效率。")],-1)),s[56]||(s[56]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/201911/22/075757pn2fxfth30ntwefg.jpg",alt:""})],-1)),n("p",null,[s[1]||(s[1]=n("ruby",null,[a("协议缓冲区"),n("rt",null,"Protocol Buffers")],-1)),s[2]||(s[2]=a("（",-1)),t(p,{href:"https://developers.google.com/protocol-buffers/"},{default:e(()=>[...s[0]||(s[0]=[a("Protobufs",-1)])]),_:1}),s[3]||(s[3]=a("）像 XML 和 JSON 一样，可以让用不同语言编写并在不同平台上运行的应用程序交换数据。例如，用 Go 编写的发送程序可以在 Protobuf 中对以 Go 表示的销售订单数据进行编码，然后用 Java 编写的接收方可以对它进行解码，以获取所接收订单数据的 Java 表示方式。这是在网络连接上的结构示意图：",-1))]),s[57]||(s[57]=n("blockquote",null,[n("p",null,"Go 销售订单 ---> Pbuf 编码 ---> 网络 ---> Pbuf 界面 ---> Java 销售订单")],-1)),s[58]||(s[58]=n("p",null,"与 XML 和 JSON 相比，Protobuf 编码是二进制而不是文本，这会使调试复杂化。但是，正如本文中的代码示例所确认的那样，Protobuf 编码在大小上比 XML 或 JSON 编码要有效得多。",-1)),s[59]||(s[59]=n("p",null,[a("Protobuf 以另一种方式提供了这种有效性。在实现级别，Protobuf 和其他编码系统对结构化数据进行"),n("ruby",null,[a("序列化"),n("rt",null,"serialize")]),a("和"),n("ruby",null,[a("反序列化"),n("rt",null,"deserialize")]),a("。序列化将特定语言的数据结构转换为字节流，反序列化是将字节流转换回特定语言的数据结构的逆运算。序列化和反序列化可能成为数据交换的瓶颈，因为这些操作会占用大量 CPU。高效的序列化和反序列化是 Protobuf 的另一个设计目标。")],-1)),n("p",null,[s[6]||(s[6]=a("最近的编码技术，例如 Protobuf 和 FlatBuffers，源自 1990 年代初期的 ",-1)),t(p,{href:"https://en.wikipedia.org/wiki/DCE/RPC"},{default:e(()=>[...s[4]||(s[4]=[a("DCE/RPC",-1)])]),_:1}),s[7]||(s[7]=a("（",-1)),s[8]||(s[8]=n("ruby",null,[a("分布式计算环境/远程过程调用"),n("rt",null,"Distributed Computing Environment/Remote Procedure Call")],-1)),s[9]||(s[9]=a("）计划。与 DCE/RPC 一样，Protobuf 在数据交换中为 ",-1)),t(p,{href:"https://en.wikipedia.org/wiki/Interface_description_language"},{default:e(()=>[...s[5]||(s[5]=[a("IDL",-1)])]),_:1}),s[10]||(s[10]=a("（接口定义语言）和编码层做出了贡献。",-1))]),s[60]||(s[60]=o(`<p>本文将着眼于这两层，然后提供 Go 和 Java 中的代码示例以充实 Protobuf 的细节，并表明 Protobuf 是易于使用的。</p><h3 id="protobuf-作为一个-idl-和编码层" tabindex="-1">Protobuf 作为一个 IDL 和编码层 <a class="header-anchor" href="#protobuf-作为一个-idl-和编码层" aria-label="Permalink to “Protobuf 作为一个 IDL 和编码层”">​</a></h3><p>像 Protobuf 一样，DCE/RPC 被设计为与语言和平台无关。适当的库和实用程序允许任何语言和平台用于 DCE/RPC 领域。此外，DCE/RPC 体系结构非常优雅。IDL 文档是一侧的远程过程与另一侧的调用者之间的协定。Protobuf 也是以 IDL 文档为中心的。</p><p>IDL 文档是文本，在 DCE/RPC 中，使用基本 C 语法以及元数据的语法扩展（方括号）和一些新的关键字，例如 <code>interface</code>。这是一个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[uuid (2d6ead46-05e3-11ca-7dd1-426909beabcd), version(1.0)]</span></span>
<span class="line"><span>interface echo {</span></span>
<span class="line"><span>   const long int ECHO_SIZE = 512;</span></span>
<span class="line"><span>   void echo(</span></span>
<span class="line"><span>      [in]          handle_t h,</span></span>
<span class="line"><span>      [in, string]  idl_char from_client[ ],</span></span>
<span class="line"><span>      [out, string] idl_char from_service[ECHO_SIZE]</span></span>
<span class="line"><span>   );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>该 IDL 文档声明了一个名为 <code>echo</code> 的过程，该过程带有三个参数：类型为 <code>handle_t</code>（实现指针）和 <code>idl_char</code>（ASCII 字符数组）的 <code>[in]</code> 参数被传递给远程过程，而 <code>[out]</code> 参数（也是一个字符串）从该过程中传回。在此示例中，<code>echo</code> 过程不会显式返回值（<code>echo</code> 左侧的 <code>void</code>），但也可以返回值。返回值，以及一个或多个 <code>[out]</code> 参数，允许远程过程任意返回许多值。下一节将介绍 Protobuf IDL，它的语法不同，但同样用作数据交换中的协定。</p><p>DCE/RPC 和 Protobuf 中的 IDL 文档是创建用于交换数据的基础结构代码的实用程序的输入：</p><blockquote><p>IDL 文档 ---&gt; DCE/PRC 或 Protobuf 实用程序 ---&gt; 数据交换的支持代码</p></blockquote><p>作为相对简单的文本，IDL 是同样便于人类阅读的关于数据交换细节的文档（特别是交换的数据项的数量和每个项的数据类型）。</p>`,9)),n("p",null,[s[12]||(s[12]=a("Protobuf 可用于现代 RPC 系统，例如 ",-1)),t(p,{href:"https://grpc.io/"},{default:e(()=>[...s[11]||(s[11]=[a("gRPC",-1)])]),_:1}),s[13]||(s[13]=a("；但是 Protobuf 本身仅提供 IDL 层和编码层，用于从发送者传递到接收者的消息。与原本的 DCE/RPC 一样，Protobuf 编码是二进制的，但效率更高。",-1))]),s[61]||(s[61]=o('<p>目前，XML 和 JSON 编码仍在通过 Web 服务等技术进行的数据交换中占主导地位，这些技术利用 Web 服务器、传输协议（例如 TCP、HTTP）以及标准库和实用程序等原有的基础设施来处理 XML 和 JSON 文档。 此外，各种类型的数据库系统可以存储 XML 和 JSON 文档，甚至旧式关系型系统也可以轻松生成查询结果的 XML 编码。现在，每种通用编程语言都具有支持 XML 和 JSON 的库。那么，是什么让我们回到 Protobuf 之类的<strong>二进制</strong>编码系统呢？</p><p>让我们看一下负十进制值 <code>-128</code>。以 2 的补码二进制表示形式（在系统和语言中占主导地位）中，此值可以存储在单个 8 位字节中：<code>10000000</code>。此整数值在 XML 或 JSON 中的文本编码需要多个字节。例如，UTF-8 编码需要四个字节的字符串，即 <code>-128</code>，即每个字符一个字节（十六进制，值为 <code>0x2d</code>、<code>0x31</code>、<code>0x32</code> 和 <code>0x38</code>）。XML 和 JSON 还添加了标记字符，例如尖括号和大括号。有关 Protobuf 编码的详细信息下面就会介绍，但现在的关注点是一个通用点：文本编码的压缩性明显低于二进制编码。</p><h3 id="在-go-中使用-protobuf-的示例" tabindex="-1">在 Go 中使用 Protobuf 的示例 <a class="header-anchor" href="#在-go-中使用-protobuf-的示例" aria-label="Permalink to “在 Go 中使用 Protobuf 的示例”">​</a></h3><p>我的代码示例着重于 Protobuf 而不是 RPC。以下是第一个示例的概述：</p><ul><li>名为 <code>dataitem.proto</code> 的 IDL 文件定义了一个 Protobuf 消息，它具有六个不同类型的字段：具有不同范围的整数值、固定大小的浮点值以及两个不同长度的字符串。</li><li>Protobuf 编译器使用 IDL 文件生成 Go 版本（以及后面的 Java 版本）的 Protobuf 消息及支持函数。</li><li>Go 应用程序使用随机生成的值填充原生的 Go 数据结构，然后将结果序列化为本地文件。为了进行比较， XML 和 JSON 编码也被序列化为本地文件。</li><li>作为测试，Go 应用程序通过反序列化 Protobuf 文件的内容来重建其原生数据结构的实例。</li><li>作为语言中立性测试，Java 应用程序还会对 Protobuf 文件的内容进行反序列化以获取原生数据结构的实例。</li></ul>',5)),n("p",null,[t(p,{href:"http://condor.depaul.edu/mkalin"},{default:e(()=>[...s[14]||(s[14]=[a("我的网站",-1)])]),_:1}),s[15]||(s[15]=a("上提供了该 IDL 文件以及两个 Go 和一个 Java 源文件，打包为 ZIP 文件。",-1))]),s[62]||(s[62]=o(`<p>最重要的 Protobuf IDL 文档如下所示。该文档存储在文件 <code>dataitem.proto</code> 中，并具有常规的<code>.proto</code> 扩展名。</p><h4 id="示例-1、protobuf-idl-文档" tabindex="-1">示例 1、Protobuf IDL 文档 <a class="header-anchor" href="#示例-1、protobuf-idl-文档" aria-label="Permalink to “示例 1、Protobuf IDL 文档”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>syntax = &quot;proto3&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>package main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message DataItem {</span></span>
<span class="line"><span>  int64  oddA  = 1;</span></span>
<span class="line"><span>  int64  evenA = 2;</span></span>
<span class="line"><span>  int32  oddB  = 3;</span></span>
<span class="line"><span>  int32  evenB = 4;</span></span>
<span class="line"><span>  float  small = 5;</span></span>
<span class="line"><span>  float  big   = 6;</span></span>
<span class="line"><span>  string short = 7;</span></span>
<span class="line"><span>  string long  = 8;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>该 IDL 使用当前的 proto3 而不是较早的 proto2 语法。软件包名称（在本例中为 <code>main</code>）是可选的，但是惯例使用它以避免名称冲突。这个结构化的消息包含八个字段，每个字段都有一个 Protobuf 数据类型（例如，<code>int64</code>、<code>string</code>）、名称（例如，<code>oddA</code>、<code>short</code>）和一个等号 <code>=</code> 之后的数字标签（即键）。标签（在此示例中为 1 到 8）是唯一的整数标识符，用于确定字段序列化的顺序。</p><p>Protobuf 消息可以嵌套到任意级别，而一个消息可以是另外一个消息的字段类型。这是一个使用 <code>DataItem</code> 消息作为字段类型的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>message DataItems {</span></span>
<span class="line"><span>  repeated DataItem item = 1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>单个 <code>DataItems</code> 消息由重复的（零个或多个）<code>DataItem</code> 消息组成。</p><p>为了清晰起见，Protobuf 还支持枚举类型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enum PartnershipStatus {</span></span>
<span class="line"><span>  reserved &quot;FREE&quot;, &quot;CONSTRAINED&quot;, &quot;OTHER&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>reserved</code> 限定符确保用于实现这三个符号名的数值不能重复使用。</p>`,10)),n("p",null,[s[17]||(s[17]=a("为了生成一个或多个声明 Protobuf 消息结构的特定于语言的版本，包含这些结构的 IDL 文件被传递到",-1)),s[18]||(s[18]=n("code",null,"protoc",-1)),s[19]||(s[19]=a(" 编译器（可在 ",-1)),t(p,{href:"https://github.com/protocolbuffers/protobuf"},{default:e(()=>[...s[16]||(s[16]=[a("Protobuf GitHub 存储库",-1)])]),_:1}),s[20]||(s[20]=a("中找到）。对于 Go 代码，可以以通常的方式安装支持的 Protobuf 库（这里以 ",-1)),s[21]||(s[21]=n("code",null,"％",-1)),s[22]||(s[22]=a(" 作为命令行提示符）：",-1))]),s[63]||(s[63]=o('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% go get github.com/golang/protobuf/proto</span></span></code></pre></div><p>将 Protobuf IDL 文件 <code>dataitem.proto</code> 编译为 Go 源代码的命令是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% protoc --go_out=. dataitem.proto</span></span></code></pre></div><p>标志 <code>--go_out</code> 指示编译器生成 Go 源代码。其他语言也有类似的标志。在这种情况下，结果是一个名为 <code>dataitem.pb.go</code> 的文件，该文件足够小，可以将其基本内容复制到 Go 应用程序中。以下是生成的代码的主要部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var _ = proto.Marshal</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>type DataItem struct {</span></span>\n<span class="line"><span>   OddA  int64   `protobuf:&quot;varint,1,opt,name=oddA&quot; json:&quot;oddA,omitempty&quot;`</span></span>\n<span class="line"><span>   EvenA int64   `protobuf:&quot;varint,2,opt,name=evenA&quot; json:&quot;evenA,omitempty&quot;`</span></span>\n<span class="line"><span>   OddB  int32   `protobuf:&quot;varint,3,opt,name=oddB&quot; json:&quot;oddB,omitempty&quot;`</span></span>\n<span class="line"><span>   EvenB int32   `protobuf:&quot;varint,4,opt,name=evenB&quot; json:&quot;evenB,omitempty&quot;`</span></span>\n<span class="line"><span>   Small float32 `protobuf:&quot;fixed32,5,opt,name=small&quot; json:&quot;small,omitempty&quot;`</span></span>\n<span class="line"><span>   Big   float32 `protobuf:&quot;fixed32,6,opt,name=big&quot; json:&quot;big,omitempty&quot;`</span></span>\n<span class="line"><span>   Short string  `protobuf:&quot;bytes,7,opt,name=short&quot; json:&quot;short,omitempty&quot;`</span></span>\n<span class="line"><span>   Long  string  `protobuf:&quot;bytes,8,opt,name=long&quot; json:&quot;long,omitempty&quot;`</span></span>\n<span class="line"><span>}</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>func (m *DataItem) Reset()         { *m = DataItem{} }</span></span>\n<span class="line"><span>func (m *DataItem) String() string { return proto.CompactTextString(m) }</span></span>\n<span class="line"><span>func (*DataItem) ProtoMessage()    {}</span></span>\n<span class="line"><span>func init() {}</span></span></code></pre></div><p>编译器生成的代码具有 Go 结构 <code>DataItem</code>，该结构导出 Go 字段（名称现已大写开头），该字段与 Protobuf IDL 中声明的名称匹配。该结构字段具有标准的 Go 数据类型：<code>int32</code>、<code>int64</code>、<code>float32</code> 和 <code>string</code>。在每个字段行的末尾，是描述 Protobuf 类型的字符串，提供 Protobuf IDL 文档中的数字标签及有关 JSON 信息的元数据，这将在后面讨论。</p><p>此外也有函数；最重要的是 <code>Proto.Marshal</code>，用于将 <code>DataItem</code> 结构的实例序列化为 Protobuf 格式。辅助函数包括：清除 <code>DataItem</code> 结构的 <code>Reset</code>，生成 <code>DataItem</code> 的单行字符串表示的 <code>String</code>。</p><p>描述 Protobuf 编码的元数据应在更详细地分析 Go 程序之前进行仔细研究。</p><h3 id="protobuf-编码" tabindex="-1">Protobuf 编码 <a class="header-anchor" href="#protobuf-编码" aria-label="Permalink to “Protobuf 编码”">​</a></h3><p>Protobuf 消息的结构为键/值对的集合，其中数字标签为键，相应的字段为值。字段名称（例如，<code>oddA</code> 和 <code>small</code>）是供人类阅读的，但是 <code>protoc</code> 编译器的确使用了字段名称来生成特定于语言的对应名称。例如，Protobuf IDL 中的 <code>oddA</code> 和 <code>small</code> 名称在 Go 结构中分别成为字段 <code>OddA</code> 和 <code>Small</code>。</p>',10)),n("p",null,[s[24]||(s[24]=a("键和它们的值都被编码，但是有一个重要的区别：一些数字值具有固定大小的 32 或 64 位的编码，而其他数字（包括消息标签）则是 ",-1)),s[25]||(s[25]=n("code",null,"varint",-1)),s[26]||(s[26]=a(" 编码的，位数取决于整数的绝对值。例如，整数值 1 到 15 需要 8 位 ",-1)),s[27]||(s[27]=n("code",null,"varint",-1)),s[28]||(s[28]=a(" 编码，而值 16 到 2047 需要 16 位。",-1)),s[29]||(s[29]=n("code",null,"varint",-1)),s[30]||(s[30]=a(" 编码在本质上与 UTF-8 编码类似（但细节不同），它偏爱较小的整数值而不是较大的整数值。（有关详细分析，请参见 Protobuf ",-1)),t(p,{href:"https://developers.google.com/protocol-buffers/docs/encoding"},{default:e(()=>[...s[23]||(s[23]=[a("编码指南",-1)])]),_:1}),s[31]||(s[31]=a("）结果是，Protobuf 消息应该在字段中具有较小的整数值（如果可能），并且键数应尽可能少，但每个字段至少得有一个键。",-1))]),s[64]||(s[64]=o(`<p>下表 1 列出了 Protobuf 编码的要点：</p><div class="table-wrap"><table><thead><tr><th>编码</th><th>示例类型</th><th>长度</th></tr></thead><tbody><tr><td><code>varint</code></td><td><code>int32</code>、<code>uint32</code>、<code>int64</code></td><td>可变长度</td></tr><tr><td><code>fixed</code></td><td><code>fixed32</code>、<code>float</code>、<code>double</code></td><td>固定的 32 位或 64 位长度</td></tr><tr><td>字节序列</td><td><code>string</code>、<code>bytes</code></td><td>序列长度</td></tr></tbody></table></div><p><em>表 1. Protobuf 数据类型</em></p><p>未明确固定长度的整数类型是 <code>varint</code> 编码的；因此，在 <code>varint</code> 类型中，例如 <code>uint32</code>（<code>u</code> 代表无符号），数字 32 描述了整数的范围（在这种情况下为 0 到 2^32 - 1），而不是其位的大小，该位大小取决于值。相比之下，对于固定长度类型（例如 <code>fixed32</code> 或 <code>double</code>），Protobuf 编码分别需要 32 位和 64 位。Protobuf 中的字符串是字节序列；因此，字段编码的大小就是字节序列的长度。</p><p>另一个高效的方法值得一提。回想一下前面的示例，其中的 <code>DataItems</code> 消息由重复的 <code>DataItem</code> 实例组成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>message DataItems {</span></span>
<span class="line"><span>  repeated DataItem item = 1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>repeated</code> 表示 <code>DataItem</code> 实例是<em>打包的</em>：集合具有单个标签，在这里是 1。因此，具有重复的 <code>DataItem</code> 实例的 <code>DataItems</code> 消息比具有多个但单独的 <code>DataItem</code> 字段、每个字段都需要自己的标签的消息的效率更高。</p><p>了解了这一背景，让我们回到 Go 程序。</p><h3 id="dataitem-程序的细节" tabindex="-1">dataItem 程序的细节 <a class="header-anchor" href="#dataitem-程序的细节" aria-label="Permalink to “dataItem 程序的细节”">​</a></h3><p><code>dataItem</code> 程序创建一个 <code>DataItem</code> 实例，并使用适当类型的随机生成的值填充字段。Go 有一个 <code>rand</code> 包，带有用于生成伪随机整数和浮点值的函数，而我的 <code>randString</code> 函数可以从字符集中生成指定长度的伪随机字符串。设计目标是要有一个具有不同类型和位大小的字段值的 <code>DataItem</code> 实例。例如，<code>OddA</code> 和 <code>EvenA</code> 值分别是 64 位非负整数值的奇数和偶数；但是 <code>OddB</code> 和 <code>EvenB</code> 变体的大小为 32 位，并存放 0 到 2047 之间的小整数值。随机浮点值的大小为 32 位，字符串为 16（<code>Short</code>）和 32（<code>Long</code>）字符的长度。这是用随机值填充 <code>DataItem</code> 结构的代码段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 可变长度整数</span></span>
<span class="line"><span>n1 := rand.Int63()        // 大整数</span></span>
<span class="line"><span>if (n1 &amp; 1) == 0 { n1++ } // 确保其是奇数</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>n3 := rand.Int31() % UpperBound // 小整数</span></span>
<span class="line"><span>if (n3 &amp; 1) == 0 { n3++ }       // 确保其是奇数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 固定长度浮点数</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>t1 := rand.Float32()</span></span>
<span class="line"><span>t2 := rand.Float32()</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>// 字符串</span></span>
<span class="line"><span>str1 := randString(StrShort)</span></span>
<span class="line"><span>str2 := randString(StrLong)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 消息</span></span>
<span class="line"><span>dataItem := &amp;DataItem {</span></span>
<span class="line"><span>   OddA:  n1,</span></span>
<span class="line"><span>   EvenA: n2,</span></span>
<span class="line"><span>   OddB:  n3,</span></span>
<span class="line"><span>   EvenB: n4,</span></span>
<span class="line"><span>   Big:   f1,</span></span>
<span class="line"><span>   Small: f2,</span></span>
<span class="line"><span>   Short: str1,</span></span>
<span class="line"><span>   Long:  str2,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>创建并填充值后，<code>DataItem</code> 实例将以 XML、JSON 和 Protobuf 进行编码，每种编码均写入本地文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func encodeAndserialize(dataItem *DataItem) {</span></span>
<span class="line"><span>   bytes, _ := xml.MarshalIndent(dataItem, &quot;&quot;, &quot; &quot;)  // Xml to dataitem.xml</span></span>
<span class="line"><span>   ioutil.WriteFile(XmlFile, bytes, 0644)            // 0644 is file access permissions</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bytes, _ = json.MarshalIndent(dataItem, &quot;&quot;, &quot; &quot;)  // Json to dataitem.json</span></span>
<span class="line"><span>   ioutil.WriteFile(JsonFile, bytes, 0644)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bytes, _ = proto.Marshal(dataItem)                // Protobuf to dataitem.pbuf</span></span>
<span class="line"><span>   ioutil.WriteFile(PbufFile, bytes, 0644)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这三个序列化函数使用术语 <code>marshal</code>，它与 <code>serialize</code> 意思大致相同。如代码所示，三个 <code>Marshal</code> 函数均返回一个字节数组，然后将其写入文件。（为简单起见，忽略可能的错误处理。）在示例运行中，文件大小为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dataitem.xml:  262 bytes</span></span>
<span class="line"><span>dataitem.json: 212 bytes</span></span>
<span class="line"><span>dataitem.pbuf:  88 bytes</span></span></code></pre></div><p>Protobuf 编码明显小于其他两个编码方案。通过消除缩进字符（在这种情况下为空白和换行符），可以稍微减小 XML 和 JSON 序列化的大小。</p><p>以下是 <code>dataitem.json</code> 文件，该文件最终是由 <code>json.MarshalIndent</code> 调用产生的，并添加了以 <code>##</code> 开头的注释：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span> &quot;oddA&quot;:  4744002665212642479,                ## 64-bit &gt;= 0</span></span>
<span class="line"><span> &quot;evenA&quot;: 2395006495604861128,                ## ditto</span></span>
<span class="line"><span> &quot;oddB&quot;:  57,                                 ## 32-bit &gt;= 0 but &lt; 2048</span></span>
<span class="line"><span> &quot;evenB&quot;: 468,                                ## ditto</span></span>
<span class="line"><span> &quot;small&quot;: 0.7562016,                          ## 32-bit floating-point</span></span>
<span class="line"><span> &quot;big&quot;:   0.85202795,                         ## ditto</span></span>
<span class="line"><span> &quot;short&quot;: &quot;ClH1oDaTtoX$HBN5&quot;,                 ## 16 random chars</span></span>
<span class="line"><span> &quot;long&quot;:  &quot;xId0rD3Cri%3Wt%^QjcFLJgyXBu9^DZI&quot;  ## 32 random chars</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>尽管这些序列化的数据写入到本地文件中，但是也可以使用相同的方法将数据写入网络连接的输出流。</p><h3 id="测试序列化和反序列化" tabindex="-1">测试序列化和反序列化 <a class="header-anchor" href="#测试序列化和反序列化" aria-label="Permalink to “测试序列化和反序列化”">​</a></h3><p>Go 程序接下来通过将先前写入 <code>dataitem.pbuf</code> 文件的字节反序列化为 <code>DataItem</code> 实例来运行基本测试。这是代码段，其中去除了错误检查部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>filebytes, err := ioutil.ReadFile(PbufFile) // get the bytes from the file</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>testItem.Reset()                            // clear the DataItem structure</span></span>
<span class="line"><span>err = proto.Unmarshal(filebytes, testItem)  // deserialize into a DataItem instance</span></span></code></pre></div><p>用于 Protbuf 反序列化的 <code>proto.Unmarshal</code> 函数与 <code>proto.Marshal</code> 函数相反。原始的 <code>DataItem</code> 和反序列化的副本将被打印出来以确认完全匹配：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Original:</span></span>
<span class="line"><span>2041519981506242154 3041486079683013705 1192 1879</span></span>
<span class="line"><span>0.572123 0.326855</span></span>
<span class="line"><span>boPb#T0O8Xd&amp;Ps5EnSZqDg4Qztvo7IIs 9vH66AiGSQgCDxk&amp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Deserialized:</span></span>
<span class="line"><span>2041519981506242154 3041486079683013705 1192 1879</span></span>
<span class="line"><span>0.572123 0.326855</span></span>
<span class="line"><span>boPb#T0O8Xd&amp;Ps5EnSZqDg4Qztvo7IIs 9vH66AiGSQgCDxk&amp;</span></span></code></pre></div><h3 id="一个-java-protobuf-客户端" tabindex="-1">一个 Java Protobuf 客户端 <a class="header-anchor" href="#一个-java-protobuf-客户端" aria-label="Permalink to “一个 Java Protobuf 客户端”">​</a></h3><p>用 Java 写的示例是为了确认 Protobuf 的语言中立性。原始 IDL 文件可用于生成 Java 支持代码，其中涉及嵌套类。但是，为了抑制警告信息，可以进行一些补充。这是修订版，它指定了一个 <code>DataMsg</code> 作为外部类的名称，内部类在该 Protobuf 消息后面自动命名为 <code>DataItem</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>syntax = &quot;proto3&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>package main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>option java_outer_classname = &quot;DataMsg&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message DataItem {</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>进行此更改后，<code>protoc</code> 编译与以前相同，只是所期望的输出现在是 Java 而不是 Go：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% protoc --java_out=. dataitem.proto</span></span></code></pre></div>`,29)),n("p",null,[s[33]||(s[33]=a("生成的源文件（在名为 ",-1)),s[34]||(s[34]=n("code",null,"main",-1)),s[35]||(s[35]=a(" 的子目录中）为 ",-1)),s[36]||(s[36]=n("code",null,"DataMsg.java",-1)),s[37]||(s[37]=a("，长度约为 1,120 行：Java 并不简洁。编译然后运行 Java 代码需要具有 Protobuf 库支持的 JAR 文件。该文件位于 ",-1)),t(p,{href:"https://mvnrepository.com/artifact/com.google.protobuf/protobuf-java"},{default:e(()=>[...s[32]||(s[32]=[a("Maven 存储库",-1)])]),_:1}),s[38]||(s[38]=a("中。",-1))]),s[65]||(s[65]=o(`<p>放置好这些片段后，我的测试代码相对较短（并且在 ZIP 文件中以 <code>Main.java</code> 形式提供）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main;</span></span>
<span class="line"><span>import java.io.FileInputStream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>   public static void main(String[] args) {</span></span>
<span class="line"><span>      String path = &quot;dataitem.pbuf&quot;;  // from the Go program&#39;s serialization</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>         DataMsg.DataItem deserial =</span></span>
<span class="line"><span>           DataMsg.DataItem.newBuilder().mergeFrom(new FileInputStream(path)).build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         System.out.println(deserial.getOddA()); // 64-bit odd</span></span>
<span class="line"><span>         System.out.println(deserial.getLong()); // 32-character string</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      catch(Exception e) { System.err.println(e); }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当然，生产级的测试将更加彻底，但是即使是该初步测试也可以证明 Protobuf 的语言中立性：<code>dataitem.pbuf</code> 文件是 Go 程序对 Go 语言版的 <code>DataItem</code> 进行序列化的结果，并且该文件中的字节被反序列化以产生一个 Java 语言的 <code>DataItem</code> 实例。Java 测试的输出与 Go 测试的输出相同。</p><h3 id="用-numpairs-程序来结束" tabindex="-1">用 numPairs 程序来结束 <a class="header-anchor" href="#用-numpairs-程序来结束" aria-label="Permalink to “用 numPairs 程序来结束”">​</a></h3><p>让我们以一个示例作为结尾，来突出 Protobuf 效率，但又强调在任何编码技术中都会涉及到的成本。考虑以下 Protobuf IDL 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>syntax = &quot;proto3&quot;;</span></span>
<span class="line"><span>package main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message NumPairs {</span></span>
<span class="line"><span>  repeated NumPair pair = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message NumPair {</span></span>
<span class="line"><span>  int32 odd = 1;</span></span>
<span class="line"><span>  int32 even = 2;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>NumPair</code> 消息由两个 <code>int32</code> 值以及每个字段的整数标签组成。<code>NumPairs</code> 消息是嵌入的 <code>NumPair</code> 消息的序列。</p><p>Go 语言的 <code>numPairs</code> 程序（如下）创建了 200 万个 <code>NumPair</code> 实例，每个实例都附加到 <code>NumPairs</code> 消息中。该消息可以按常规方式进行序列化和反序列化。</p><h4 id="示例-2、numpairs-程序" tabindex="-1">示例 2、numPairs 程序 <a class="header-anchor" href="#示例-2、numpairs-程序" aria-label="Permalink to “示例 2、numPairs 程序”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>   &quot;math/rand&quot;</span></span>
<span class="line"><span>   &quot;time&quot;</span></span>
<span class="line"><span>   &quot;encoding/xml&quot;</span></span>
<span class="line"><span>   &quot;encoding/json&quot;</span></span>
<span class="line"><span>   &quot;io/ioutil&quot;</span></span>
<span class="line"><span>   &quot;github.com/golang/protobuf/proto&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// protoc-generated code: start</span></span>
<span class="line"><span>var _ = proto.Marshal</span></span>
<span class="line"><span>type NumPairs struct {</span></span>
<span class="line"><span>   Pair []*NumPair \`protobuf:&quot;bytes,1,rep,name=pair&quot; json:&quot;pair,omitempty&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (m *NumPairs) Reset()         { *m = NumPairs{} }</span></span>
<span class="line"><span>func (m *NumPairs) String() string { return proto.CompactTextString(m) }</span></span>
<span class="line"><span>func (*NumPairs) ProtoMessage()    {}</span></span>
<span class="line"><span>func (m *NumPairs) GetPair() []*NumPair {</span></span>
<span class="line"><span>   if m != nil { return m.Pair }</span></span>
<span class="line"><span>   return nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type NumPair struct {</span></span>
<span class="line"><span>   Odd  int32 \`protobuf:&quot;varint,1,opt,name=odd&quot; json:&quot;odd,omitempty&quot;\`</span></span>
<span class="line"><span>   Even int32 \`protobuf:&quot;varint,2,opt,name=even&quot; json:&quot;even,omitempty&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (m *NumPair) Reset()         { *m = NumPair{} }</span></span>
<span class="line"><span>func (m *NumPair) String() string { return proto.CompactTextString(m) }</span></span>
<span class="line"><span>func (*NumPair) ProtoMessage()    {}</span></span>
<span class="line"><span>func init() {}</span></span>
<span class="line"><span>// protoc-generated code: finish</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var numPairsStruct NumPairs</span></span>
<span class="line"><span>var numPairs = &amp;numPairsStruct</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func encodeAndserialize() {</span></span>
<span class="line"><span>   // XML encoding</span></span>
<span class="line"><span>   filename := &quot;./pairs.xml&quot;</span></span>
<span class="line"><span>   bytes, _ := xml.MarshalIndent(numPairs, &quot;&quot;, &quot; &quot;)</span></span>
<span class="line"><span>   ioutil.WriteFile(filename, bytes, 0644)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // JSON encoding</span></span>
<span class="line"><span>   filename = &quot;./pairs.json&quot;</span></span>
<span class="line"><span>   bytes, _ = json.MarshalIndent(numPairs, &quot;&quot;, &quot; &quot;)</span></span>
<span class="line"><span>   ioutil.WriteFile(filename, bytes, 0644)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // ProtoBuf encoding</span></span>
<span class="line"><span>   filename = &quot;./pairs.pbuf&quot;</span></span>
<span class="line"><span>   bytes, _ = proto.Marshal(numPairs)</span></span>
<span class="line"><span>   ioutil.WriteFile(filename, bytes, 0644)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const HowMany = 200 * 100  * 100 // two million</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>   rand.Seed(time.Now().UnixNano())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // uncomment the modulus operations to get the more efficient version</span></span>
<span class="line"><span>   for i := 0; i &lt; HowMany; i++ {</span></span>
<span class="line"><span>      n1 := rand.Int31() // % 2047</span></span>
<span class="line"><span>      if (n1 &amp; 1) == 0 { n1++ } // ensure it&#39;s odd</span></span>
<span class="line"><span>      n2 := rand.Int31() // % 2047</span></span>
<span class="line"><span>      if (n2 &amp; 1) == 1 { n2++ } // ensure it&#39;s even</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      next := &amp;NumPair {</span></span>
<span class="line"><span>                 Odd:  n1,</span></span>
<span class="line"><span>                 Even: n2,</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>      numPairs.Pair = append(numPairs.Pair, next)</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   encodeAndserialize()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>每个 <code>NumPair</code> 中随机生成的奇数和偶数值的范围在 0 到 20 亿之间变化。就原始数据（而非编码数据）而言，Go 程序中生成的整数总共为 16MB：每个 <code>NumPair</code> 为两个整数，总计为 400 万个整数，每个值的大小为四个字节。</p><p>为了进行比较，下表列出了 XML、JSON 和 Protobuf 编码的示例 <code>NumsPairs</code> 消息的 200 万个 <code>NumPair</code> 实例。原始数据也包括在内。由于 <code>numPairs</code> 程序生成随机值，因此样本运行的输出有所不同，但接近表中显示的大小。</p><div class="table-wrap"><table><thead><tr><th>编码</th><th>文件</th><th>字节大小</th><th>Pbuf/其它 比例</th></tr></thead><tbody><tr><td>无</td><td>pairs.raw</td><td>16MB</td><td>169%</td></tr><tr><td>Protobuf</td><td>pairs.pbuf</td><td>27MB</td><td>—</td></tr><tr><td>JSON</td><td>pairs.json</td><td>100MB</td><td>27%</td></tr><tr><td>XML</td><td>pairs.xml</td><td>126MB</td><td>21%</td></tr></tbody></table></div><p><em>表 2. 16MB 整数的编码开销</em></p><p>不出所料，Protobuf 和之后的 XML 和 JSON 差别明显。Protobuf 编码大约是 JSON 的四分之一，是 XML 的五分之一。但是原始数据清楚地表明 Protobuf 也会产生编码开销：序列化的 Protobuf 消息比原始数据大 11MB。包括 Protobuf 在内的任何编码都涉及结构化数据，这不可避免地会增加字节。</p><p>序列化的 200 万个 <code>NumPair</code> 实例中的每个实例都包含<strong>四</strong>个整数值：Go 结构中的 <code>Even</code> 和 <code>Odd</code> 字段分别一个，而 Protobuf 编码中的每个字段、每个标签一个。对于原始数据（而不是编码数据），每个实例将达到 16 个字节，样本 <code>NumPairs</code> 消息中有 200 万个实例。但是 Protobuf 标记（如 <code>NumPair</code> 字段中的 <code>int32</code> 值）使用 <code>varint</code> 编码，因此字节长度有所不同。特别是，小的整数值（在这种情况下，包括标签在内）需要不到四个字节进行编码。</p><p>如果对 <code>numPairs</code> 程序进行了修改，以使两个 <code>NumPair</code> 字段的值小于 2048，且其编码为一或两个字节，则 Protobuf 编码将从 27MB 下降到 16MB，这正是原始数据的大小。下表总结了样本运行中的新编码大小。</p><div class="table-wrap"><table><thead><tr><th>编码</th><th>文件</th><th>字节大小</th><th>Pbuf/其它 比例</th></tr></thead><tbody><tr><td>None</td><td>pairs.raw</td><td>16MB</td><td>100%</td></tr><tr><td>Protobuf</td><td>pairs.pbuf</td><td>16MB</td><td>—</td></tr><tr><td>JSON</td><td>pairs.json</td><td>77MB</td><td>21%</td></tr><tr><td>XML</td><td>pairs.xml</td><td>103MB</td><td>15%</td></tr></tbody></table></div><p><em>表 3. 编码 16MB 的小于 2048 的整数</em></p><p>总之，修改后的 <code>numPairs</code> 程序的字段值小于 2048，可减少原始数据中每个四字节整数值的大小。但是 Protobuf 编码仍然需要标签，这些标签会在 Protobuf 消息中添加字节。Protobuf 编码确实会增加消息大小，但是如果要编码相对较小的整数值（无论是字段还是键），则可以通过 <code>varint</code> 因子来减少此开销。</p><p>对于包含混合类型的结构化数据（且整数值相对较小）的中等大小的消息，Protobuf 明显优于 XML 和 JSON 等选项。在其他情况下，数据可能不适合 Protobuf 编码。例如，如果两个应用程序需要共享大量文本记录或大整数值，则可以采用压缩而不是编码技术。</p><hr>`,22)),n("p",null,[s[40]||(s[40]=a("via: ",-1)),t(p,{href:"https://opensource.com/article/19/10/protobuf-data-interchange"},{default:e(()=>[...s[39]||(s[39]=[a("https://opensource.com/article/19/10/protobuf-data-interchange",-1)])]),_:1})]),n("p",null,[s[45]||(s[45]=a("作者：",-1)),t(p,{href:"https://opensource.com/users/mkalindepauledu"},{default:e(()=>[...s[41]||(s[41]=[a("Marty Kalin",-1)])]),_:1}),s[46]||(s[46]=a(" 选题：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[42]||(s[42]=[a("lujun9972",-1)])]),_:1}),s[47]||(s[47]=a(" 译者：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[43]||(s[43]=[a("wxy",-1)])]),_:1}),s[48]||(s[48]=a(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[44]||(s[44]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[51]||(s[51]=a("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[49]||(s[49]=[a("LCTT",-1)])]),_:1}),s[52]||(s[52]=a(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[50]||(s[50]=[a("Linux中国",-1)])]),_:1}),s[53]||(s[53]=a(" 荣誉推出",-1))])])}const q=i(u,[["render",c]]);export{v as __pageData,q as default};
