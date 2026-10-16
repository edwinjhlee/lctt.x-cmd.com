import{_ as i,a0 as o,w as r,s as d,I as a,x as n,a1 as e,A as t,ao as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse('{"title":"在命令列中使用 XMLStarlet 來解析 XML | LCTT x X-CMD","titleTemplate":false,"description":"在命令列中使用 XMLStarlet 來解析 XML | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在命令列中使用 XMLStarlet 來解析 XML | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在命令列中使用 XMLStarlet 來解析 XML | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20210713 Use XMLStarlet to parse XML in your the Linux terminal","title":"在命令列中使用 XMLStarlet 來解析 XML","tag":"202107","desc":""},"relativePath":"202107/20210713 Use XMLStarlet to parse XML in your the Linux terminal.md","filePath":"[post].md"}'),u={name:"202107/20210713 Use XMLStarlet to parse XML in your the Linux terminal.md"};function g(m,s,h,f,c,b){const l=o("Link");return r(),d("div",null,[s[52]||(s[52]=a("h1",{id:"在命令列中使用-xmlstarlet-來解析-xml",tabindex:"-1"},[n("在命令列中使用 XMLStarlet 來解析 XML "),a("a",{class:"header-anchor",href:"#在命令列中使用-xmlstarlet-來解析-xml","aria-label":"Permalink to “在命令列中使用 XMLStarlet 來解析 XML”"},"​")],-1)),s[53]||(s[53]=a("blockquote",null,[a("p",null,"藉助終端上的 XML 工具包 XMLStarlet，你就是 XML 之星。")],-1)),s[54]||(s[54]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202107/29/091327pgssat1oglrzs73z.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("學習解析 XML 通常被認為是一件複雜的事情，但它不一定是這樣。",-1)),e(l,{href:"https://opensource.com/article/21/6/what-xml"},{default:t(()=>[...s[0]||(s[0]=[n("XML 是高度嚴格結構化的",-1)])]),_:1}),s[2]||(s[2]=n("，所以也是相對來説可預測的。也有許多其他工具可以幫助你使這項工作易於管理。",-1))]),a("p",null,[s[4]||(s[4]=n("我最喜歡的 XML 實用程序之一是 ",-1)),e(l,{href:"https://en.wikipedia.org/wiki/XMLStarlet"},{default:t(()=>[...s[3]||(s[3]=[n("XMLStarlet",-1)])]),_:1}),s[5]||(s[5]=n("，這是一個用於終端的 XML 工具包，藉助這個 XML 工具包，你可以驗證、解析、編輯、格式化和轉換 XML 數據。XMLStarLet 是個相對較小的命令，但瀏覽 XML 卻充滿潛力，因此本文演示瞭如何使用它來查詢 XML 數據。",-1))]),s[55]||(s[55]=p('<h3 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h3><p>XMLStarLet 默認安裝在 CentOS、Fedora，和許多其他現代 Linux 發行版上，所以你可以打開終端，輸入 <code>xmlstarlet</code> 來訪問它。如果 XMLStarLet 還沒有被安裝，你的操作系統則會為你安裝它。</p><p>或者，你可以用包管理器安裝 <code>xmlstarlet</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install xmlstarlet</span></span></code></pre></div>',4)),a("p",null,[s[9]||(s[9]=n("在 macOS 上，可以使用 ",-1)),e(l,{href:"https://opensource.com/article/20/11/macports"},{default:t(()=>[...s[6]||(s[6]=[n("MacPorts",-1)])]),_:1}),s[10]||(s[10]=n(" 或 ",-1)),e(l,{href:"https://opensource.com/article/20/6/homebrew-mac"},{default:t(()=>[...s[7]||(s[7]=[n("Homebrew",-1)])]),_:1}),s[11]||(s[11]=n("。在 Windows 上，可以使用 ",-1)),e(l,{href:"https://opensource.com/article/20/3/chocolatey"},{default:t(()=>[...s[8]||(s[8]=[n("Chocolatey",-1)])]),_:1}),s[12]||(s[12]=n("。",-1))]),a("p",null,[s[14]||(s[14]=n("如果都失敗了，你可以從 ",-1)),e(l,{href:"http://xmlstar.sourceforge.net"},{default:t(()=>[...s[13]||(s[13]=[n("Sourceforge 上的源代碼",-1)])]),_:1}),s[15]||(s[15]=n(" 手動安裝它。",-1))]),s[56]||(s[56]=a("h3",{id:"用-xmlstarlet-解析-xml",tabindex:"-1"},[n("用 XMLStarlet 解析 XML "),a("a",{class:"header-anchor",href:"#用-xmlstarlet-解析-xml","aria-label":"Permalink to “用 XMLStarlet 解析 XML”"},"​")],-1)),a("p",null,[s[17]||(s[17]=n("有許多工具可以幫助解析和轉換 XML 數據，包括允許你 ",-1)),e(l,{href:"https://opensource.com/article/21/6/parsing-config-files-java"},{default:t(()=>[...s[16]||(s[16]=[n("編寫自己的解析器",-1)])]),_:1}),s[18]||(s[18]=n(" 的軟件庫，和複雜的命令，如 ",-1)),s[19]||(s[19]=a("code",null,"fop",-1)),s[20]||(s[20]=n(" 和 ",-1)),s[21]||(s[21]=a("code",null,"xsltproc",-1)),s[22]||(s[22]=n("。不過有時你不需要處理 XML 數據；你只需要一個方便的方法從 XML 數據中來提取、更新或驗證重要數據。對於隨手的 XML 交互，我使用 ",-1)),s[23]||(s[23]=a("code",null,"xmlstarlet",-1)),s[24]||(s[24]=n("，這是常見的處理 XML任務的一個典型的“瑞士軍刀”式應用。通過運行 ",-1)),s[25]||(s[25]=a("code",null,"--help",-1)),s[26]||(s[26]=n(" 命令，你可以看到它提供哪些選項：",-1))]),s[57]||(s[57]=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet --help</span></span>
<span class="line"><span>Usage: xmlstarlet [&lt;options&gt;] &lt;command&gt; [&lt;cmd-options&gt;]</span></span>
<span class="line"><span>where &lt;command&gt; is one of:</span></span>
<span class="line"><span>  ed    (or edit)      - Edit/Update XML document(s)</span></span>
<span class="line"><span>  sel   (or select)    - Select data or query XML document(s) (XPATH, etc)</span></span>
<span class="line"><span>  tr    (or transform) - Transform XML document(s) using XSLT</span></span>
<span class="line"><span>  val   (or validate)  - Validate XML document(s) (well-formed/DTD/XSD/RelaxNG)</span></span>
<span class="line"><span>  fo    (or format)    - Format XML document(s)</span></span>
<span class="line"><span>  el    (or elements)  - Display element structure of XML document</span></span>
<span class="line"><span>  c14n  (or canonic)   - XML canonicalization</span></span>
<span class="line"><span>  ls    (or list)      - List directory as XML</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>你可以通過在這些子命令的末尾附加 <code>-help</code> 來獲得進一步的幫助：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet sel --help</span></span>
<span class="line"><span>  -Q or --quiet             - do not write anything to standard output.</span></span>
<span class="line"><span>  -C or --comp              - display generated XSLT</span></span>
<span class="line"><span>  -R or --root              - print root element &amp;lt;xsl-select&amp;gt;</span></span>
<span class="line"><span>  -T or --text              - output is text (default is XML)</span></span>
<span class="line"><span>  -I or --indent            - indent output</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><h4 id="用-sel-命令選擇數據" tabindex="-1">用 sel 命令選擇數據 <a class="header-anchor" href="#用-sel-命令選擇數據" aria-label="Permalink to “用 sel 命令選擇數據”">​</a></h4><p>可以使用 <code>xmlstarlet select</code>（簡稱 <code>sel</code>）命令查看 XML 格式的數據。下面是一個簡單的 XML 文檔：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;no&quot;?&gt;</span></span>
<span class="line"><span>&lt;xml&gt;</span></span>
<span class="line"><span>  &lt;os&gt;</span></span>
<span class="line"><span>   &lt;linux&gt;</span></span>
<span class="line"><span>    &lt;distribution&gt;</span></span>
<span class="line"><span>      &lt;name&gt;Fedora&lt;/name&gt;</span></span>
<span class="line"><span>      &lt;release&gt;7&lt;/release&gt;</span></span>
<span class="line"><span>      &lt;codename&gt;Moonshine&lt;/codename&gt;</span></span>
<span class="line"><span>      &lt;spins&gt;</span></span>
<span class="line"><span>        &lt;name&gt;Live&lt;/name&gt;</span></span>
<span class="line"><span>        &lt;name&gt;Fedora&lt;/name&gt;</span></span>
<span class="line"><span>        &lt;name&gt;Everything&lt;/name&gt;</span></span>
<span class="line"><span>      &lt;/spins&gt;</span></span>
<span class="line"><span>    &lt;/distribution&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;distribution&gt;</span></span>
<span class="line"><span>      &lt;name&gt;Fedora Core&lt;/name&gt;</span></span>
<span class="line"><span>      &lt;release&gt;6&lt;/release&gt;</span></span>
<span class="line"><span>      &lt;codename&gt;Zod&lt;/codename&gt;</span></span>
<span class="line"><span>      &lt;spins&gt;&lt;/spins&gt;</span></span>
<span class="line"><span>    &lt;/distribution&gt;</span></span>
<span class="line"><span>   &lt;/linux&gt;</span></span>
<span class="line"><span>  &lt;/os&gt;    </span></span>
<span class="line"><span>&lt;/xml&gt;</span></span></code></pre></div>`,6)),a("p",null,[s[28]||(s[28]=n("在 XML 文件中查找數據時，你的第一個任務是關注要探索的節點。如果知道節點的路徑，請使用 ",-1)),s[29]||(s[29]=a("code",null,"-value of",-1)),s[30]||(s[30]=n(" 選項指定完整路徑。你越早瀏覽 ",-1)),e(l,{href:"https://opensource.com/article/21/6/what-xml#dom"},{default:t(()=>[...s[27]||(s[27]=[n("文檔對象模型",-1)])]),_:1}),s[31]||(s[31]=n("（DOM）樹，就可以看到更多信息：",-1))]),s[58]||(s[58]=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet select --template \\</span></span>
<span class="line"><span>  --value-of /xml/os/linux/distribution \\</span></span>
<span class="line"><span>  --nl myfile.xml</span></span>
<span class="line"><span>      Fedora</span></span>
<span class="line"><span>      7</span></span>
<span class="line"><span>      Moonshine</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>        Live</span></span>
<span class="line"><span>        Fedora</span></span>
<span class="line"><span>        Everything     </span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>      Fedora Core</span></span>
<span class="line"><span>      6</span></span>
<span class="line"><span>      Zod</span></span></code></pre></div><p><code>--nl</code> 代表“新的一行”，它插入大量的空白，以確保在輸入結果後，終端在新的一行顯示。我已經刪除了樣本輸出中的一些多餘空間。</p><p>通過進一步深入 DOM 樹來凝聚關注點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet select --template \\</span></span>
<span class="line"><span>  --value-of /xml/os/linux/distribution/name \\</span></span>
<span class="line"><span>  --nl myfile.xml</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>Fedora Core</span></span></code></pre></div><h4 id="條件選擇" tabindex="-1">條件選擇 <a class="header-anchor" href="#條件選擇" aria-label="Permalink to “條件選擇”">​</a></h4>`,5)),a("p",null,[s[34]||(s[34]=n("用於導航和解析 XML 的最強大工具之一被稱為 XPath。它規範了 XML 搜索中使用的語法，並從 XML 庫調用函數。XMLStarlet 能夠解析 XPath 表達式，因此可以使用 XPath 函數來有條件的進行選擇。XPath 具有豐富的函數，",-1)),e(l,{href:"https://www.w3.org/TR/1999/REC-xpath-19991116"},{default:t(()=>[...s[32]||(s[32]=[n("由 W3C 提供了詳細文檔",-1)])]),_:1}),s[35]||(s[35]=n("，但我覺得 ",-1)),e(l,{href:"https://developer.mozilla.org/en-US/docs/Web/XPath/Functions"},{default:t(()=>[...s[33]||(s[33]=[n("Mozilla 的 XPath 文檔",-1)])]),_:1}),s[36]||(s[36]=n(" 更簡潔。",-1))]),s[59]||(s[59]=p(`<p>可以使用方括號作為測試函數，將元素的內容與某個值進行比較。下面是對 <code>&lt;name&gt;</code> 元素的值的測試，它僅返回與特定匹配相關聯的版本號。</p><p>想像一下，示例 XML 文件包含以 1 開頭的所有 Fedora 版本。要查看與舊名稱 “Fedora Core” 關聯的所有版本號（該項目從版本 7 開始刪除了名稱中的 “Core”），請執行以下操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet sel --template \\</span></span>
<span class="line"><span>  --value-of &#39;/xml/os/linux/distribution[name = &quot;Fedora Core&quot;]/release&#39; \\</span></span>
<span class="line"><span>  --nl myfile.xml</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>1</span></span></code></pre></div><p>通過將路徑的 <code>--value-of</code> 更改為 <code>/xml/os/linux/distribution[name=“Fedora Core”]/codename</code>，你便可以查看這些版本的所有代號。</p><h3 id="匹配路徑和獲取目標值" tabindex="-1">匹配路徑和獲取目標值 <a class="header-anchor" href="#匹配路徑和獲取目標值" aria-label="Permalink to “匹配路徑和獲取目標值”">​</a></h3><p>將 XML 標記視為節點的一個好處是，一旦找到節點，就可以將其視為當前的數據的“目錄”。它不是一個真正的目錄，至少不是文件系統意義上的目錄，但它是一個可以查詢的數據集合。為了幫助你將目標和“裏面”的數據分開，XMLStarlet 把你試圖用 <code>--match</code> 選項匹配的內容和用 <code>--value-of</code> 選項匹配的數據值進行了區分。</p><p>假設你知道 <code>&lt;spin&gt;</code> 節點包含幾個元素。這就是你的目標節點。一旦到了這裏，就可以使用 <code>--value-of</code> 指定想要哪個元素的值。要查看所有元素，可以使用點（<code>.</code>）來代表當前位置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet sel --template \\</span></span>
<span class="line"><span>  --match &#39;/xml/os/linux/distribution/spin&#39; \\</span></span>
<span class="line"><span>  --value-of &#39;.&#39; --nl myfile.xml \\</span></span>
<span class="line"><span>Live</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>Everything</span></span></code></pre></div><p>與瀏覽 DOM 一樣，可以使用 XPath 表達式來限制返回數據的範圍。在本例中，我使用 <code>last()</code> 函數來檢索 <code>spin</code> 節點中的最後一個元素：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet select --template \\</span></span>
<span class="line"><span>  --match &#39;/xml/os/linux/distribution/spin&#39; \\</span></span>
<span class="line"><span>  --value-of &#39;*[last()]&#39; --nl myfile.xml</span></span>
<span class="line"><span>Everything</span></span></code></pre></div><p>在本例中，我使用 <code>position()</code> 函數選擇 <code>spin</code> 節點中的特定元素：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet select --template \\</span></span>
<span class="line"><span>  --match &#39;/xml/os/linux/distribution/spin&#39; \\</span></span>
<span class="line"><span>  --value-of &#39;*[position() = 2]&#39; --nl myfile.xml</span></span>
<span class="line"><span>Fedora</span></span></code></pre></div><p><code>--match</code> 和 <code>--value</code> 選項可以重疊，因此如何將它們一起使用取決於你自己。對於示例 XML，這兩個表達式執行的是相同的操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet select  --template \\</span></span>
<span class="line"><span>  --match &#39;/xml/os/linux/distribution/spin&#39; \\</span></span>
<span class="line"><span>  --value-of &#39;.&#39; \\</span></span>
<span class="line"><span>  --nl myfile.xml</span></span>
<span class="line"><span>Live</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>Everything     </span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ xmlstarlet select --template \\</span></span>
<span class="line"><span>  --match &#39;/xml/os/linux/distribution&#39; \\</span></span>
<span class="line"><span>  --value-of &#39;spin&#39; \\</span></span>
<span class="line"><span>  --nl myfile.xml</span></span>
<span class="line"><span>Live</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>Everything</span></span></code></pre></div><h3 id="熟悉-xml" tabindex="-1">熟悉 XML <a class="header-anchor" href="#熟悉-xml" aria-label="Permalink to “熟悉 XML”">​</a></h3><p>XML 有時看起來過於冗長和笨拙，但為與之交互和構建的工具卻總是讓我吃驚。如果你想要好好使用 XML，那麼 XMLStarlet 可能是一個很好的切入點。下次要打開 XML 文件查看其結構化數據時，請嘗試使用 XMLStarlet，看看是否可以查詢這些數據。當你對 XML 越熟悉時，它就越能作為一種健壯靈活的數據格式而為你服務。</p><hr>`,17)),a("p",null,[s[38]||(s[38]=n("via: ",-1)),e(l,{href:"https://opensource.com/article/21/7/parse-xml-linux"},{default:t(()=>[...s[37]||(s[37]=[n("https://opensource.com/article/21/7/parse-xml-linux",-1)])]),_:1})]),a("p",null,[s[43]||(s[43]=n("作者：",-1)),e(l,{href:"https://opensource.com/users/seth"},{default:t(()=>[...s[39]||(s[39]=[n("Seth Kenlon",-1)])]),_:1}),s[44]||(s[44]=n(" 選題：",-1)),e(l,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[40]||(s[40]=[n("lujun9972",-1)])]),_:1}),s[45]||(s[45]=n(" 譯者：",-1)),e(l,{href:"https://github.com/zepoch"},{default:t(()=>[...s[41]||(s[41]=[n("zepoch",-1)])]),_:1}),s[46]||(s[46]=n(" 校對：",-1)),e(l,{href:"https://github.com/wxy"},{default:t(()=>[...s[42]||(s[42]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[49]||(s[49]=n("本文由 ",-1)),e(l,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[47]||(s[47]=[n("LCTT",-1)])]),_:1}),s[50]||(s[50]=n(" 原創編譯，",-1)),e(l,{href:"https://linux.cn/"},{default:t(()=>[...s[48]||(s[48]=[n("Linux中國",-1)])]),_:1}),s[51]||(s[51]=n(" 榮譽推出",-1))])])}const X=i(u,[["render",g]]);export{L as __pageData,X as default};
