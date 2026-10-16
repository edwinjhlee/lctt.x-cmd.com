import{_ as i,a0 as l,w as d,s as r,I as n,x as a,a1 as t,A as e,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"如何使用 Protobuf 做數據交換 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Protobuf 做數據交換 | LCTT (201911) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Protobuf 做數據交換 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Protobuf 做數據交換 | LCTT (201911) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201911/20191018 How to use Protobuf for data interchange","title":"如何使用 Protobuf 做數據交換","tag":"201911","desc":""},"relativePath":"201911/20191018 How to use Protobuf for data interchange.md","filePath":"[post].md"}'),u={name:"201911/20191018 How to use Protobuf for data interchange.md"};function c(b,s,m,g,f,h){const p=l("Link");return d(),r("div",null,[s[54]||(s[54]=n("h1",{id:"如何使用-protobuf-做數據交換",tabindex:"-1"},[a("如何使用 Protobuf 做數據交換 "),n("a",{class:"header-anchor",href:"#如何使用-protobuf-做數據交換","aria-label":"Permalink to “如何使用 Protobuf 做數據交換”"},"​")],-1)),s[55]||(s[55]=n("blockquote",null,[n("p",null,"在以不同語言編寫並在不同平台上運行的應用程序之間交換數據時，Protobuf 編碼可提高效率。")],-1)),s[56]||(s[56]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/201911/22/075757pn2fxfth30ntwefg.jpg",alt:""})],-1)),n("p",null,[s[1]||(s[1]=n("ruby",null,[a("協議緩衝區"),n("rt",null,"Protocol Buffers")],-1)),s[2]||(s[2]=a("（",-1)),t(p,{href:"https://developers.google.com/protocol-buffers/"},{default:e(()=>[...s[0]||(s[0]=[a("Protobufs",-1)])]),_:1}),s[3]||(s[3]=a("）像 XML 和 JSON 一樣，可以讓用不同語言編寫並在不同平台上運行的應用程序交換數據。例如，用 Go 編寫的發送程序可以在 Protobuf 中對以 Go 表示的銷售訂單數據進行編碼，然後用 Java 編寫的接收方可以對它進行解碼，以獲取所接收訂單數據的 Java 表示方式。這是在網絡連接上的結構示意圖：",-1))]),s[57]||(s[57]=n("blockquote",null,[n("p",null,"Go 銷售訂單 ---> Pbuf 編碼 ---> 網絡 ---> Pbuf 界面 ---> Java 銷售訂單")],-1)),s[58]||(s[58]=n("p",null,"與 XML 和 JSON 相比，Protobuf 編碼是二進制而不是文本，這會使調試複雜化。但是，正如本文中的代碼示例所確認的那樣，Protobuf 編碼在大小上比 XML 或 JSON 編碼要有效得多。",-1)),s[59]||(s[59]=n("p",null,[a("Protobuf 以另一種方式提供了這種有效性。在實現級別，Protobuf 和其他編碼系統對結構化數據進行"),n("ruby",null,[a("序列化"),n("rt",null,"serialize")]),a("和"),n("ruby",null,[a("反序列化"),n("rt",null,"deserialize")]),a("。序列化將特定語言的數據結構轉換為字節流，反序列化是將字節流轉換回特定語言的數據結構的逆運算。序列化和反序列化可能成為數據交換的瓶頸，因為這些操作會佔用大量 CPU。高效的序列化和反序列化是 Protobuf 的另一個設計目標。")],-1)),n("p",null,[s[6]||(s[6]=a("最近的編碼技術，例如 Protobuf 和 FlatBuffers，源自 1990 年代初期的 ",-1)),t(p,{href:"https://en.wikipedia.org/wiki/DCE/RPC"},{default:e(()=>[...s[4]||(s[4]=[a("DCE/RPC",-1)])]),_:1}),s[7]||(s[7]=a("（",-1)),s[8]||(s[8]=n("ruby",null,[a("分佈式計算環境/遠程過程調用"),n("rt",null,"Distributed Computing Environment/Remote Procedure Call")],-1)),s[9]||(s[9]=a("）計劃。與 DCE/RPC 一樣，Protobuf 在數據交換中為 ",-1)),t(p,{href:"https://en.wikipedia.org/wiki/Interface_description_language"},{default:e(()=>[...s[5]||(s[5]=[a("IDL",-1)])]),_:1}),s[10]||(s[10]=a("（接口定義語言）和編碼層做出了貢獻。",-1))]),s[60]||(s[60]=o(`<p>本文將着眼於這兩層，然後提供 Go 和 Java 中的代碼示例以充實 Protobuf 的細節，並表明 Protobuf 是易於使用的。</p><h3 id="protobuf-作為一個-idl-和編碼層" tabindex="-1">Protobuf 作為一個 IDL 和編碼層 <a class="header-anchor" href="#protobuf-作為一個-idl-和編碼層" aria-label="Permalink to “Protobuf 作為一個 IDL 和編碼層”">​</a></h3><p>像 Protobuf 一樣，DCE/RPC 被設計為與語言和平台無關。適當的庫和實用程序允許任何語言和平台用於 DCE/RPC 領域。此外，DCE/RPC 體系結構非常優雅。IDL 文檔是一側的遠程過程與另一側的調用者之間的協定。Protobuf 也是以 IDL 文檔為中心的。</p><p>IDL 文檔是文本，在 DCE/RPC 中，使用基本 C 語法以及元數據的語法擴展（方括號）和一些新的關鍵字，例如 <code>interface</code>。這是一個例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[uuid (2d6ead46-05e3-11ca-7dd1-426909beabcd), version(1.0)]</span></span>
<span class="line"><span>interface echo {</span></span>
<span class="line"><span>   const long int ECHO_SIZE = 512;</span></span>
<span class="line"><span>   void echo(</span></span>
<span class="line"><span>      [in]          handle_t h,</span></span>
<span class="line"><span>      [in, string]  idl_char from_client[ ],</span></span>
<span class="line"><span>      [out, string] idl_char from_service[ECHO_SIZE]</span></span>
<span class="line"><span>   );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>該 IDL 文檔聲明瞭一個名為 <code>echo</code> 的過程，該過程帶有三個參數：類型為 <code>handle_t</code>（實現指針）和 <code>idl_char</code>（ASCII 字符數組）的 <code>[in]</code> 參數被傳遞給遠程過程，而 <code>[out]</code> 參數（也是一個字符串）從該過程中傳回。在此示例中，<code>echo</code> 過程不會顯式返回值（<code>echo</code> 左側的 <code>void</code>），但也可以返回值。返回值，以及一個或多個 <code>[out]</code> 參數，允許遠程過程任意返回許多值。下一節將介紹 Protobuf IDL，它的語法不同，但同樣用作數據交換中的協定。</p><p>DCE/RPC 和 Protobuf 中的 IDL 文檔是創建用於交換數據的基礎結構代碼的實用程序的輸入：</p><blockquote><p>IDL 文檔 ---&gt; DCE/PRC 或 Protobuf 實用程序 ---&gt; 數據交換的支持代碼</p></blockquote><p>作為相對簡單的文本，IDL 是同樣便於人類閲讀的關於數據交換細節的文檔（特別是交換的數據項的數量和每個項的數據類型）。</p>`,9)),n("p",null,[s[12]||(s[12]=a("Protobuf 可用於現代 RPC 系統，例如 ",-1)),t(p,{href:"https://grpc.io/"},{default:e(()=>[...s[11]||(s[11]=[a("gRPC",-1)])]),_:1}),s[13]||(s[13]=a("；但是 Protobuf 本身僅提供 IDL 層和編碼層，用於從發送者傳遞到接收者的消息。與原本的 DCE/RPC 一樣，Protobuf 編碼是二進制的，但效率更高。",-1))]),s[61]||(s[61]=o('<p>目前，XML 和 JSON 編碼仍在通過 Web 服務等技術進行的數據交換中佔主導地位，這些技術利用 Web 服務器、傳輸協議（例如 TCP、HTTP）以及標準庫和實用程序等原有的基礎設施來處理 XML 和 JSON 文檔。 此外，各種類型的資料庫系統可以存儲 XML 和 JSON 文檔，甚至舊式關係型系統也可以輕鬆生成查詢結果的 XML 編碼。現在，每種通用編程語言都具有支持 XML 和 JSON 的庫。那麼，是什麼讓我們回到 Protobuf 之類的<strong>二進制</strong>編碼系統呢？</p><p>讓我們看一下負十進制值 <code>-128</code>。以 2 的補碼二進制表示形式（在系統和語言中佔主導地位）中，此值可以存儲在單個 8 位字節中：<code>10000000</code>。此整數值在 XML 或 JSON 中的文本編碼需要多個字節。例如，UTF-8 編碼需要四個字節的字符串，即 <code>-128</code>，即每個字符一個字節（十六進制，值為 <code>0x2d</code>、<code>0x31</code>、<code>0x32</code> 和 <code>0x38</code>）。XML 和 JSON 還添加了標記字符，例如尖括號和大括號。有關 Protobuf 編碼的詳細信息下面就會介紹，但現在的關注點是一個通用點：文本編碼的壓縮性明顯低於二進制編碼。</p><h3 id="在-go-中使用-protobuf-的示例" tabindex="-1">在 Go 中使用 Protobuf 的示例 <a class="header-anchor" href="#在-go-中使用-protobuf-的示例" aria-label="Permalink to “在 Go 中使用 Protobuf 的示例”">​</a></h3><p>我的代碼示例着重於 Protobuf 而不是 RPC。以下是第一個示例的概述：</p><ul><li>名為 <code>dataitem.proto</code> 的 IDL 文件定義了一個 Protobuf 消息，它具有六個不同類型的字段：具有不同範圍的整數值、固定大小的浮點值以及兩個不同長度的字符串。</li><li>Protobuf 編譯器使用 IDL 文件生成 Go 版本（以及後面的 Java 版本）的 Protobuf 消息及支持函數。</li><li>Go 應用程序使用隨機生成的值填充原生的 Go 數據結構，然後將結果序列化為本地文件。為了進行比較， XML 和 JSON 編碼也被序列化為本地文件。</li><li>作為測試，Go 應用程序通過反序列化 Protobuf 文件的內容來重建其原生數據結構的實例。</li><li>作為語言中立性測試，Java 應用程序還會對 Protobuf 文件的內容進行反序列化以獲取原生數據結構的實例。</li></ul>',5)),n("p",null,[t(p,{href:"http://condor.depaul.edu/mkalin"},{default:e(()=>[...s[14]||(s[14]=[a("我的網站",-1)])]),_:1}),s[15]||(s[15]=a("上提供了該 IDL 文件以及兩個 Go 和一個 Java 源文件，打包為 ZIP 文件。",-1))]),s[62]||(s[62]=o(`<p>最重要的 Protobuf IDL 文檔如下所示。該文檔存儲在文件 <code>dataitem.proto</code> 中，並具有常規的<code>.proto</code> 擴展名。</p><h4 id="示例-1、protobuf-idl-文檔" tabindex="-1">示例 1、Protobuf IDL 文檔 <a class="header-anchor" href="#示例-1、protobuf-idl-文檔" aria-label="Permalink to “示例 1、Protobuf IDL 文檔”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>syntax = &quot;proto3&quot;;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>該 IDL 使用當前的 proto3 而不是較早的 proto2 語法。軟件包名稱（在本例中為 <code>main</code>）是可選的，但是慣例使用它以避免名稱衝突。這個結構化的消息包含八個字段，每個字段都有一個 Protobuf 數據類型（例如，<code>int64</code>、<code>string</code>）、名稱（例如，<code>oddA</code>、<code>short</code>）和一個等號 <code>=</code> 之後的數字標籤（即鍵）。標籤（在此示例中為 1 到 8）是唯一的整數標識符，用於確定字段序列化的順序。</p><p>Protobuf 消息可以嵌套到任意級別，而一個消息可以是另外一個消息的字段類型。這是一個使用 <code>DataItem</code> 消息作為字段類型的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>message DataItems {</span></span>
<span class="line"><span>  repeated DataItem item = 1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>單個 <code>DataItems</code> 消息由重複的（零個或多個）<code>DataItem</code> 消息組成。</p><p>為了清晰起見，Protobuf 還支持枚舉類型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enum PartnershipStatus {</span></span>
<span class="line"><span>  reserved &quot;FREE&quot;, &quot;CONSTRAINED&quot;, &quot;OTHER&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>reserved</code> 限定符確保用於實現這三個符號名的數值不能重複使用。</p>`,10)),n("p",null,[s[17]||(s[17]=a("為了生成一個或多個聲明 Protobuf 消息結構的特定於語言的版本，包含這些結構的 IDL 文件被傳遞到",-1)),s[18]||(s[18]=n("code",null,"protoc",-1)),s[19]||(s[19]=a(" 編譯器（可在 ",-1)),t(p,{href:"https://github.com/protocolbuffers/protobuf"},{default:e(()=>[...s[16]||(s[16]=[a("Protobuf GitHub 存儲庫",-1)])]),_:1}),s[20]||(s[20]=a("中找到）。對於 Go 代碼，可以以通常的方式安裝支持的 Protobuf 庫（這裏以 ",-1)),s[21]||(s[21]=n("code",null,"％",-1)),s[22]||(s[22]=a(" 作為命令列提示符）：",-1))]),s[63]||(s[63]=o('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% go get github.com/golang/protobuf/proto</span></span></code></pre></div><p>將 Protobuf IDL 文件 <code>dataitem.proto</code> 編譯為 Go 源代碼的命令是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% protoc --go_out=. dataitem.proto</span></span></code></pre></div><p>標誌 <code>--go_out</code> 指示編譯器生成 Go 源代碼。其他語言也有類似的標誌。在這種情況下，結果是一個名為 <code>dataitem.pb.go</code> 的文件，該文件足夠小，可以將其基本內容複製到 Go 應用程序中。以下是生成的代碼的主要部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var _ = proto.Marshal</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>type DataItem struct {</span></span>\n<span class="line"><span>   OddA  int64   `protobuf:&quot;varint,1,opt,name=oddA&quot; json:&quot;oddA,omitempty&quot;`</span></span>\n<span class="line"><span>   EvenA int64   `protobuf:&quot;varint,2,opt,name=evenA&quot; json:&quot;evenA,omitempty&quot;`</span></span>\n<span class="line"><span>   OddB  int32   `protobuf:&quot;varint,3,opt,name=oddB&quot; json:&quot;oddB,omitempty&quot;`</span></span>\n<span class="line"><span>   EvenB int32   `protobuf:&quot;varint,4,opt,name=evenB&quot; json:&quot;evenB,omitempty&quot;`</span></span>\n<span class="line"><span>   Small float32 `protobuf:&quot;fixed32,5,opt,name=small&quot; json:&quot;small,omitempty&quot;`</span></span>\n<span class="line"><span>   Big   float32 `protobuf:&quot;fixed32,6,opt,name=big&quot; json:&quot;big,omitempty&quot;`</span></span>\n<span class="line"><span>   Short string  `protobuf:&quot;bytes,7,opt,name=short&quot; json:&quot;short,omitempty&quot;`</span></span>\n<span class="line"><span>   Long  string  `protobuf:&quot;bytes,8,opt,name=long&quot; json:&quot;long,omitempty&quot;`</span></span>\n<span class="line"><span>}</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>func (m *DataItem) Reset()         { *m = DataItem{} }</span></span>\n<span class="line"><span>func (m *DataItem) String() string { return proto.CompactTextString(m) }</span></span>\n<span class="line"><span>func (*DataItem) ProtoMessage()    {}</span></span>\n<span class="line"><span>func init() {}</span></span></code></pre></div><p>編譯器生成的代碼具有 Go 結構 <code>DataItem</code>，該結構導出 Go 字段（名稱現已大寫開頭），該字段與 Protobuf IDL 中聲明的名稱匹配。該結構字段具有標準的 Go 數據類型：<code>int32</code>、<code>int64</code>、<code>float32</code> 和 <code>string</code>。在每個字段行的末尾，是描述 Protobuf 類型的字符串，提供 Protobuf IDL 文檔中的數字標籤及有關 JSON 信息的元數據，這將在後面討論。</p><p>此外也有函數；最重要的是 <code>Proto.Marshal</code>，用於將 <code>DataItem</code> 結構的實例序列化為 Protobuf 格式。輔助函數包括：清除 <code>DataItem</code> 結構的 <code>Reset</code>，生成 <code>DataItem</code> 的單行字符串表示的 <code>String</code>。</p><p>描述 Protobuf 編碼的元數據應在更詳細地分析 Go 程序之前進行仔細研究。</p><h3 id="protobuf-編碼" tabindex="-1">Protobuf 編碼 <a class="header-anchor" href="#protobuf-編碼" aria-label="Permalink to “Protobuf 編碼”">​</a></h3><p>Protobuf 消息的結構為鍵/值對的集合，其中數字標籤為鍵，相應的字段為值。字段名稱（例如，<code>oddA</code> 和 <code>small</code>）是供人類閲讀的，但是 <code>protoc</code> 編譯器的確使用了字段名稱來生成特定於語言的對應名稱。例如，Protobuf IDL 中的 <code>oddA</code> 和 <code>small</code> 名稱在 Go 結構中分別成為字段 <code>OddA</code> 和 <code>Small</code>。</p>',10)),n("p",null,[s[24]||(s[24]=a("鍵和它們的值都被編碼，但是有一個重要的區別：一些數字值具有固定大小的 32 或 64 位的編碼，而其他數字（包括消息標籤）則是 ",-1)),s[25]||(s[25]=n("code",null,"varint",-1)),s[26]||(s[26]=a(" 編碼的，位數取決於整數的絕對值。例如，整數值 1 到 15 需要 8 位 ",-1)),s[27]||(s[27]=n("code",null,"varint",-1)),s[28]||(s[28]=a(" 編碼，而值 16 到 2047 需要 16 位。",-1)),s[29]||(s[29]=n("code",null,"varint",-1)),s[30]||(s[30]=a(" 編碼在本質上與 UTF-8 編碼類似（但細節不同），它偏愛較小的整數值而不是較大的整數值。（有關詳細分析，請參見 Protobuf ",-1)),t(p,{href:"https://developers.google.com/protocol-buffers/docs/encoding"},{default:e(()=>[...s[23]||(s[23]=[a("編碼指南",-1)])]),_:1}),s[31]||(s[31]=a("）結果是，Protobuf 消息應該在字段中具有較小的整數值（如果可能），並且鍵數應儘可能少，但每個字段至少得有一個鍵。",-1))]),s[64]||(s[64]=o(`<p>下表 1 列出了 Protobuf 編碼的要點：</p><div class="table-wrap"><table><thead><tr><th>編碼</th><th>示例類型</th><th>長度</th></tr></thead><tbody><tr><td><code>varint</code></td><td><code>int32</code>、<code>uint32</code>、<code>int64</code></td><td>可變長度</td></tr><tr><td><code>fixed</code></td><td><code>fixed32</code>、<code>float</code>、<code>double</code></td><td>固定的 32 位或 64 位長度</td></tr><tr><td>字節序列</td><td><code>string</code>、<code>bytes</code></td><td>序列長度</td></tr></tbody></table></div><p><em>表 1. Protobuf 數據類型</em></p><p>未明確固定長度的整數類型是 <code>varint</code> 編碼的；因此，在 <code>varint</code> 類型中，例如 <code>uint32</code>（<code>u</code> 代表無符號），數字 32 描述了整數的範圍（在這種情況下為 0 到 2^32 - 1），而不是其位的大小，該位大小取決於值。相比之下，對於固定長度類型（例如 <code>fixed32</code> 或 <code>double</code>），Protobuf 編碼分別需要 32 位和 64 位。Protobuf 中的字符串是字節序列；因此，字段編碼的大小就是字節序列的長度。</p><p>另一個高效的方法值得一提。回想一下前面的示例，其中的 <code>DataItems</code> 消息由重複的 <code>DataItem</code> 實例組成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>message DataItems {</span></span>
<span class="line"><span>  repeated DataItem item = 1;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>repeated</code> 表示 <code>DataItem</code> 實例是<em>打包的</em>：集合具有單個標籤，在這裏是 1。因此，具有重複的 <code>DataItem</code> 實例的 <code>DataItems</code> 消息比具有多個但單獨的 <code>DataItem</code> 字段、每個字段都需要自己的標籤的消息的效率更高。</p><p>瞭解了這一背景，讓我們回到 Go 程序。</p><h3 id="dataitem-程序的細節" tabindex="-1">dataItem 程序的細節 <a class="header-anchor" href="#dataitem-程序的細節" aria-label="Permalink to “dataItem 程序的細節”">​</a></h3><p><code>dataItem</code> 程序創建一個 <code>DataItem</code> 實例，並使用適當類型的隨機生成的值填充字段。Go 有一個 <code>rand</code> 包，帶有用於生成偽隨機整數和浮點值的函數，而我的 <code>randString</code> 函數可以從字符集中生成指定長度的偽隨機字符串。設計目標是要有一個具有不同類型和位大小的字段值的 <code>DataItem</code> 實例。例如，<code>OddA</code> 和 <code>EvenA</code> 值分別是 64 位非負整數值的奇數和偶數；但是 <code>OddB</code> 和 <code>EvenB</code> 變體的大小為 32 位，並存放 0 到 2047 之間的小整數值。隨機浮點值的大小為 32 位，字符串為 16（<code>Short</code>）和 32（<code>Long</code>）字符的長度。這是用隨機值填充 <code>DataItem</code> 結構的代碼段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 可變長度整數</span></span>
<span class="line"><span>n1 := rand.Int63()        // 大整數</span></span>
<span class="line"><span>if (n1 &amp; 1) == 0 { n1++ } // 確保其是奇數</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>n3 := rand.Int31() % UpperBound // 小整數</span></span>
<span class="line"><span>if (n3 &amp; 1) == 0 { n3++ }       // 確保其是奇數</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 固定長度浮點數</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>創建並填充值後，<code>DataItem</code> 實例將以 XML、JSON 和 Protobuf 進行編碼，每種編碼均寫入本地文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func encodeAndserialize(dataItem *DataItem) {</span></span>
<span class="line"><span>   bytes, _ := xml.MarshalIndent(dataItem, &quot;&quot;, &quot; &quot;)  // Xml to dataitem.xml</span></span>
<span class="line"><span>   ioutil.WriteFile(XmlFile, bytes, 0644)            // 0644 is file access permissions</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bytes, _ = json.MarshalIndent(dataItem, &quot;&quot;, &quot; &quot;)  // Json to dataitem.json</span></span>
<span class="line"><span>   ioutil.WriteFile(JsonFile, bytes, 0644)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bytes, _ = proto.Marshal(dataItem)                // Protobuf to dataitem.pbuf</span></span>
<span class="line"><span>   ioutil.WriteFile(PbufFile, bytes, 0644)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這三個序列化函數使用術語 <code>marshal</code>，它與 <code>serialize</code> 意思大致相同。如代碼所示，三個 <code>Marshal</code> 函數均返回一個字節數組，然後將其寫入文件。（為簡單起見，忽略可能的錯誤處理。）在示例運行中，文件大小為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dataitem.xml:  262 bytes</span></span>
<span class="line"><span>dataitem.json: 212 bytes</span></span>
<span class="line"><span>dataitem.pbuf:  88 bytes</span></span></code></pre></div><p>Protobuf 編碼明顯小於其他兩個編碼方案。通過消除縮進字符（在這種情況下為空白和換行符），可以稍微減小 XML 和 JSON 序列化的大小。</p><p>以下是 <code>dataitem.json</code> 文件，該文件最終是由 <code>json.MarshalIndent</code> 調用產生的，並添加了以 <code>##</code> 開頭的註釋：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span> &quot;oddA&quot;:  4744002665212642479,                ## 64-bit &gt;= 0</span></span>
<span class="line"><span> &quot;evenA&quot;: 2395006495604861128,                ## ditto</span></span>
<span class="line"><span> &quot;oddB&quot;:  57,                                 ## 32-bit &gt;= 0 but &lt; 2048</span></span>
<span class="line"><span> &quot;evenB&quot;: 468,                                ## ditto</span></span>
<span class="line"><span> &quot;small&quot;: 0.7562016,                          ## 32-bit floating-point</span></span>
<span class="line"><span> &quot;big&quot;:   0.85202795,                         ## ditto</span></span>
<span class="line"><span> &quot;short&quot;: &quot;ClH1oDaTtoX$HBN5&quot;,                 ## 16 random chars</span></span>
<span class="line"><span> &quot;long&quot;:  &quot;xId0rD3Cri%3Wt%^QjcFLJgyXBu9^DZI&quot;  ## 32 random chars</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>儘管這些序列化的數據寫入到本地文件中，但是也可以使用相同的方法將數據寫入網絡連接的輸出流。</p><h3 id="測試序列化和反序列化" tabindex="-1">測試序列化和反序列化 <a class="header-anchor" href="#測試序列化和反序列化" aria-label="Permalink to “測試序列化和反序列化”">​</a></h3><p>Go 程序接下來通過將先前寫入 <code>dataitem.pbuf</code> 文件的字節反序列化為 <code>DataItem</code> 實例來運行基本測試。這是代碼段，其中去除了錯誤檢查部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>filebytes, err := ioutil.ReadFile(PbufFile) // get the bytes from the file</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>testItem.Reset()                            // clear the DataItem structure</span></span>
<span class="line"><span>err = proto.Unmarshal(filebytes, testItem)  // deserialize into a DataItem instance</span></span></code></pre></div><p>用於 Protbuf 反序列化的 <code>proto.Unmarshal</code> 函數與 <code>proto.Marshal</code> 函數相反。原始的 <code>DataItem</code> 和反序列化的副本將被打印出來以確認完全匹配：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Original:</span></span>
<span class="line"><span>2041519981506242154 3041486079683013705 1192 1879</span></span>
<span class="line"><span>0.572123 0.326855</span></span>
<span class="line"><span>boPb#T0O8Xd&amp;Ps5EnSZqDg4Qztvo7IIs 9vH66AiGSQgCDxk&amp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Deserialized:</span></span>
<span class="line"><span>2041519981506242154 3041486079683013705 1192 1879</span></span>
<span class="line"><span>0.572123 0.326855</span></span>
<span class="line"><span>boPb#T0O8Xd&amp;Ps5EnSZqDg4Qztvo7IIs 9vH66AiGSQgCDxk&amp;</span></span></code></pre></div><h3 id="一個-java-protobuf-客户端" tabindex="-1">一個 Java Protobuf 客户端 <a class="header-anchor" href="#一個-java-protobuf-客户端" aria-label="Permalink to “一個 Java Protobuf 客户端”">​</a></h3><p>用 Java 寫的示例是為了確認 Protobuf 的語言中立性。原始 IDL 文件可用於生成 Java 支持代碼，其中涉及嵌套類。但是，為了抑制警告信息，可以進行一些補充。這是修訂版，它指定了一個 <code>DataMsg</code> 作為外部類的名稱，內部類在該 Protobuf 消息後面自動命名為 <code>DataItem</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>syntax = &quot;proto3&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>package main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>option java_outer_classname = &quot;DataMsg&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message DataItem {</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>進行此更改後，<code>protoc</code> 編譯與以前相同，只是所期望的輸出現在是 Java 而不是 Go：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% protoc --java_out=. dataitem.proto</span></span></code></pre></div>`,29)),n("p",null,[s[33]||(s[33]=a("生成的源文件（在名為 ",-1)),s[34]||(s[34]=n("code",null,"main",-1)),s[35]||(s[35]=a(" 的子目錄中）為 ",-1)),s[36]||(s[36]=n("code",null,"DataMsg.java",-1)),s[37]||(s[37]=a("，長度約為 1,120 行：Java 並不簡潔。編譯然後運行 Java 代碼需要具有 Protobuf 庫支持的 JAR 文件。該文件位於 ",-1)),t(p,{href:"https://mvnrepository.com/artifact/com.google.protobuf/protobuf-java"},{default:e(()=>[...s[32]||(s[32]=[a("Maven 存儲庫",-1)])]),_:1}),s[38]||(s[38]=a("中。",-1))]),s[65]||(s[65]=o(`<p>放置好這些片段後，我的測試代碼相對較短（並且在 ZIP 文件中以 <code>Main.java</code> 形式提供）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>當然，生產級的測試將更加徹底，但是即使是該初步測試也可以證明 Protobuf 的語言中立性：<code>dataitem.pbuf</code> 文件是 Go 程序對 Go 語言版的 <code>DataItem</code> 進行序列化的結果，並且該文件中的字節被反序列化以產生一個 Java 語言的 <code>DataItem</code> 實例。Java 測試的輸出與 Go 測試的輸出相同。</p><h3 id="用-numpairs-程序來結束" tabindex="-1">用 numPairs 程序來結束 <a class="header-anchor" href="#用-numpairs-程序來結束" aria-label="Permalink to “用 numPairs 程序來結束”">​</a></h3><p>讓我們以一個示例作為結尾，來突出 Protobuf 效率，但又強調在任何編碼技術中都會涉及到的成本。考慮以下 Protobuf IDL 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>syntax = &quot;proto3&quot;;</span></span>
<span class="line"><span>package main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message NumPairs {</span></span>
<span class="line"><span>  repeated NumPair pair = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message NumPair {</span></span>
<span class="line"><span>  int32 odd = 1;</span></span>
<span class="line"><span>  int32 even = 2;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>NumPair</code> 消息由兩個 <code>int32</code> 值以及每個字段的整數標籤組成。<code>NumPairs</code> 消息是嵌入的 <code>NumPair</code> 消息的序列。</p><p>Go 語言的 <code>numPairs</code> 程序（如下）創建了 200 萬個 <code>NumPair</code> 實例，每個實例都附加到 <code>NumPairs</code> 消息中。該消息可以按常規方式進行序列化和反序列化。</p><h4 id="示例-2、numpairs-程序" tabindex="-1">示例 2、numPairs 程序 <a class="header-anchor" href="#示例-2、numpairs-程序" aria-label="Permalink to “示例 2、numPairs 程序”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>每個 <code>NumPair</code> 中隨機生成的奇數和偶數值的範圍在 0 到 20 億之間變化。就原始數據（而非編碼數據）而言，Go 程序中生成的整數總共為 16MB：每個 <code>NumPair</code> 為兩個整數，總計為 400 萬個整數，每個值的大小為四個字節。</p><p>為了進行比較，下表列出了 XML、JSON 和 Protobuf 編碼的示例 <code>NumsPairs</code> 消息的 200 萬個 <code>NumPair</code> 實例。原始數據也包括在內。由於 <code>numPairs</code> 程序生成隨機值，因此樣本運行的輸出有所不同，但接近表中顯示的大小。</p><div class="table-wrap"><table><thead><tr><th>編碼</th><th>文件</th><th>字節大小</th><th>Pbuf/其它 比例</th></tr></thead><tbody><tr><td>無</td><td>pairs.raw</td><td>16MB</td><td>169%</td></tr><tr><td>Protobuf</td><td>pairs.pbuf</td><td>27MB</td><td>—</td></tr><tr><td>JSON</td><td>pairs.json</td><td>100MB</td><td>27%</td></tr><tr><td>XML</td><td>pairs.xml</td><td>126MB</td><td>21%</td></tr></tbody></table></div><p><em>表 2. 16MB 整數的編碼開銷</em></p><p>不出所料，Protobuf 和之後的 XML 和 JSON 差別明顯。Protobuf 編碼大約是 JSON 的四分之一，是 XML 的五分之一。但是原始數據清楚地表明 Protobuf 也會產生編碼開銷：序列化的 Protobuf 消息比原始數據大 11MB。包括 Protobuf 在內的任何編碼都涉及結構化數據，這不可避免地會增加字節。</p><p>序列化的 200 萬個 <code>NumPair</code> 實例中的每個實例都包含<strong>四</strong>個整數值：Go 結構中的 <code>Even</code> 和 <code>Odd</code> 字段分別一個，而 Protobuf 編碼中的每個字段、每個標籤一個。對於原始數據（而不是編碼數據），每個實例將達到 16 個字節，樣本 <code>NumPairs</code> 消息中有 200 萬個實例。但是 Protobuf 標記（如 <code>NumPair</code> 字段中的 <code>int32</code> 值）使用 <code>varint</code> 編碼，因此字節長度有所不同。特別是，小的整數值（在這種情況下，包括標籤在內）需要不到四個字節進行編碼。</p><p>如果對 <code>numPairs</code> 程序進行了修改，以使兩個 <code>NumPair</code> 字段的值小於 2048，且其編碼為一或兩個字節，則 Protobuf 編碼將從 27MB 下降到 16MB，這正是原始數據的大小。下表總結了樣本運行中的新編碼大小。</p><div class="table-wrap"><table><thead><tr><th>編碼</th><th>文件</th><th>字節大小</th><th>Pbuf/其它 比例</th></tr></thead><tbody><tr><td>None</td><td>pairs.raw</td><td>16MB</td><td>100%</td></tr><tr><td>Protobuf</td><td>pairs.pbuf</td><td>16MB</td><td>—</td></tr><tr><td>JSON</td><td>pairs.json</td><td>77MB</td><td>21%</td></tr><tr><td>XML</td><td>pairs.xml</td><td>103MB</td><td>15%</td></tr></tbody></table></div><p><em>表 3. 編碼 16MB 的小於 2048 的整數</em></p><p>總之，修改後的 <code>numPairs</code> 程序的字段值小於 2048，可減少原始數據中每個四字節整數值的大小。但是 Protobuf 編碼仍然需要標籤，這些標籤會在 Protobuf 消息中添加字節。Protobuf 編碼確實會增加消息大小，但是如果要編碼相對較小的整數值（無論是字段還是鍵），則可以通過 <code>varint</code> 因子來減少此開銷。</p><p>對於包含混合類型的結構化數據（且整數值相對較小）的中等大小的消息，Protobuf 明顯優於 XML 和 JSON 等選項。在其他情況下，數據可能不適合 Protobuf 編碼。例如，如果兩個應用程序需要共享大量文本記錄或大整數值，則可以採用壓縮而不是編碼技術。</p><hr>`,22)),n("p",null,[s[40]||(s[40]=a("via: ",-1)),t(p,{href:"https://opensource.com/article/19/10/protobuf-data-interchange"},{default:e(()=>[...s[39]||(s[39]=[a("https://opensource.com/article/19/10/protobuf-data-interchange",-1)])]),_:1})]),n("p",null,[s[45]||(s[45]=a("作者：",-1)),t(p,{href:"https://opensource.com/users/mkalindepauledu"},{default:e(()=>[...s[41]||(s[41]=[a("Marty Kalin",-1)])]),_:1}),s[46]||(s[46]=a(" 選題：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[42]||(s[42]=[a("lujun9972",-1)])]),_:1}),s[47]||(s[47]=a(" 譯者：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[43]||(s[43]=[a("wxy",-1)])]),_:1}),s[48]||(s[48]=a(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[44]||(s[44]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[51]||(s[51]=a("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[49]||(s[49]=[a("LCTT",-1)])]),_:1}),s[52]||(s[52]=a(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[50]||(s[50]=[a("Linux中國",-1)])]),_:1}),s[53]||(s[53]=a(" 榮譽推出",-1))])])}const q=i(u,[["render",c]]);export{v as __pageData,q as default};
