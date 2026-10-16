import{_ as i,a0 as o,w as r,s as d,I as a,x as n,a1 as e,A as t,ao as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse('{"title":"在命令行中使用 XMLStarlet 来解析 XML | LCTT x X-CMD","titleTemplate":false,"description":"在命令行中使用 XMLStarlet 来解析 XML | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在命令行中使用 XMLStarlet 来解析 XML | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在命令行中使用 XMLStarlet 来解析 XML | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20210713 Use XMLStarlet to parse XML in your the Linux terminal","title":"在命令行中使用 XMLStarlet 来解析 XML","tag":"202107","desc":""},"relativePath":"202107/20210713 Use XMLStarlet to parse XML in your the Linux terminal.md","filePath":"[post].md"}'),u={name:"202107/20210713 Use XMLStarlet to parse XML in your the Linux terminal.md"};function g(m,s,h,f,c,b){const l=o("Link");return r(),d("div",null,[s[52]||(s[52]=a("h1",{id:"在命令行中使用-xmlstarlet-来解析-xml",tabindex:"-1"},[n("在命令行中使用 XMLStarlet 来解析 XML "),a("a",{class:"header-anchor",href:"#在命令行中使用-xmlstarlet-来解析-xml","aria-label":"Permalink to “在命令行中使用 XMLStarlet 来解析 XML”"},"​")],-1)),s[53]||(s[53]=a("blockquote",null,[a("p",null,"借助终端上的 XML 工具包 XMLStarlet，你就是 XML 之星。")],-1)),s[54]||(s[54]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202107/29/091327pgssat1oglrzs73z.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("学习解析 XML 通常被认为是一件复杂的事情，但它不一定是这样。",-1)),e(l,{href:"https://opensource.com/article/21/6/what-xml"},{default:t(()=>[...s[0]||(s[0]=[n("XML 是高度严格结构化的",-1)])]),_:1}),s[2]||(s[2]=n("，所以也是相对来说可预测的。也有许多其他工具可以帮助你使这项工作易于管理。",-1))]),a("p",null,[s[4]||(s[4]=n("我最喜欢的 XML 实用程序之一是 ",-1)),e(l,{href:"https://en.wikipedia.org/wiki/XMLStarlet"},{default:t(()=>[...s[3]||(s[3]=[n("XMLStarlet",-1)])]),_:1}),s[5]||(s[5]=n("，这是一个用于终端的 XML 工具包，借助这个 XML 工具包，你可以验证、解析、编辑、格式化和转换 XML 数据。XMLStarLet 是个相对较小的命令，但浏览 XML 却充满潜力，因此本文演示了如何使用它来查询 XML 数据。",-1))]),s[55]||(s[55]=p('<h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h3><p>XMLStarLet 默认安装在 CentOS、Fedora，和许多其他现代 Linux 发行版上，所以你可以打开终端，输入 <code>xmlstarlet</code> 来访问它。如果 XMLStarLet 还没有被安装，你的操作系统则会为你安装它。</p><p>或者，你可以用包管理器安装 <code>xmlstarlet</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install xmlstarlet</span></span></code></pre></div>',4)),a("p",null,[s[9]||(s[9]=n("在 macOS 上，可以使用 ",-1)),e(l,{href:"https://opensource.com/article/20/11/macports"},{default:t(()=>[...s[6]||(s[6]=[n("MacPorts",-1)])]),_:1}),s[10]||(s[10]=n(" 或 ",-1)),e(l,{href:"https://opensource.com/article/20/6/homebrew-mac"},{default:t(()=>[...s[7]||(s[7]=[n("Homebrew",-1)])]),_:1}),s[11]||(s[11]=n("。在 Windows 上，可以使用 ",-1)),e(l,{href:"https://opensource.com/article/20/3/chocolatey"},{default:t(()=>[...s[8]||(s[8]=[n("Chocolatey",-1)])]),_:1}),s[12]||(s[12]=n("。",-1))]),a("p",null,[s[14]||(s[14]=n("如果都失败了，你可以从 ",-1)),e(l,{href:"http://xmlstar.sourceforge.net"},{default:t(()=>[...s[13]||(s[13]=[n("Sourceforge 上的源代码",-1)])]),_:1}),s[15]||(s[15]=n(" 手动安装它。",-1))]),s[56]||(s[56]=a("h3",{id:"用-xmlstarlet-解析-xml",tabindex:"-1"},[n("用 XMLStarlet 解析 XML "),a("a",{class:"header-anchor",href:"#用-xmlstarlet-解析-xml","aria-label":"Permalink to “用 XMLStarlet 解析 XML”"},"​")],-1)),a("p",null,[s[17]||(s[17]=n("有许多工具可以帮助解析和转换 XML 数据，包括允许你 ",-1)),e(l,{href:"https://opensource.com/article/21/6/parsing-config-files-java"},{default:t(()=>[...s[16]||(s[16]=[n("编写自己的解析器",-1)])]),_:1}),s[18]||(s[18]=n(" 的软件库，和复杂的命令，如 ",-1)),s[19]||(s[19]=a("code",null,"fop",-1)),s[20]||(s[20]=n(" 和 ",-1)),s[21]||(s[21]=a("code",null,"xsltproc",-1)),s[22]||(s[22]=n("。不过有时你不需要处理 XML 数据；你只需要一个方便的方法从 XML 数据中来提取、更新或验证重要数据。对于随手的 XML 交互，我使用 ",-1)),s[23]||(s[23]=a("code",null,"xmlstarlet",-1)),s[24]||(s[24]=n("，这是常见的处理 XML任务的一个典型的“瑞士军刀”式应用。通过运行 ",-1)),s[25]||(s[25]=a("code",null,"--help",-1)),s[26]||(s[26]=n(" 命令，你可以看到它提供哪些选项：",-1))]),s[57]||(s[57]=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet --help</span></span>
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
<span class="line"><span>[...]</span></span></code></pre></div><p>你可以通过在这些子命令的末尾附加 <code>-help</code> 来获得进一步的帮助：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet sel --help</span></span>
<span class="line"><span>  -Q or --quiet             - do not write anything to standard output.</span></span>
<span class="line"><span>  -C or --comp              - display generated XSLT</span></span>
<span class="line"><span>  -R or --root              - print root element &amp;lt;xsl-select&amp;gt;</span></span>
<span class="line"><span>  -T or --text              - output is text (default is XML)</span></span>
<span class="line"><span>  -I or --indent            - indent output</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><h4 id="用-sel-命令选择数据" tabindex="-1">用 sel 命令选择数据 <a class="header-anchor" href="#用-sel-命令选择数据" aria-label="Permalink to “用 sel 命令选择数据”">​</a></h4><p>可以使用 <code>xmlstarlet select</code>（简称 <code>sel</code>）命令查看 XML 格式的数据。下面是一个简单的 XML 文档：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;no&quot;?&gt;</span></span>
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
<span class="line"><span>&lt;/xml&gt;</span></span></code></pre></div>`,6)),a("p",null,[s[28]||(s[28]=n("在 XML 文件中查找数据时，你的第一个任务是关注要探索的节点。如果知道节点的路径，请使用 ",-1)),s[29]||(s[29]=a("code",null,"-value of",-1)),s[30]||(s[30]=n(" 选项指定完整路径。你越早浏览 ",-1)),e(l,{href:"https://opensource.com/article/21/6/what-xml#dom"},{default:t(()=>[...s[27]||(s[27]=[n("文档对象模型",-1)])]),_:1}),s[31]||(s[31]=n("（DOM）树，就可以看到更多信息：",-1))]),s[58]||(s[58]=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet select --template \\</span></span>
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
<span class="line"><span>      Zod</span></span></code></pre></div><p><code>--nl</code> 代表“新的一行”，它插入大量的空白，以确保在输入结果后，终端在新的一行显示。我已经删除了样本输出中的一些多余空间。</p><p>通过进一步深入 DOM 树来凝聚关注点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet select --template \\</span></span>
<span class="line"><span>  --value-of /xml/os/linux/distribution/name \\</span></span>
<span class="line"><span>  --nl myfile.xml</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>Fedora Core</span></span></code></pre></div><h4 id="条件选择" tabindex="-1">条件选择 <a class="header-anchor" href="#条件选择" aria-label="Permalink to “条件选择”">​</a></h4>`,5)),a("p",null,[s[34]||(s[34]=n("用于导航和解析 XML 的最强大工具之一被称为 XPath。它规范了 XML 搜索中使用的语法，并从 XML 库调用函数。XMLStarlet 能够解析 XPath 表达式，因此可以使用 XPath 函数来有条件的进行选择。XPath 具有丰富的函数，",-1)),e(l,{href:"https://www.w3.org/TR/1999/REC-xpath-19991116"},{default:t(()=>[...s[32]||(s[32]=[n("由 W3C 提供了详细文档",-1)])]),_:1}),s[35]||(s[35]=n("，但我觉得 ",-1)),e(l,{href:"https://developer.mozilla.org/en-US/docs/Web/XPath/Functions"},{default:t(()=>[...s[33]||(s[33]=[n("Mozilla 的 XPath 文档",-1)])]),_:1}),s[36]||(s[36]=n(" 更简洁。",-1))]),s[59]||(s[59]=p(`<p>可以使用方括号作为测试函数，将元素的内容与某个值进行比较。下面是对 <code>&lt;name&gt;</code> 元素的值的测试，它仅返回与特定匹配相关联的版本号。</p><p>想象一下，示例 XML 文件包含以 1 开头的所有 Fedora 版本。要查看与旧名称 “Fedora Core” 关联的所有版本号（该项目从版本 7 开始删除了名称中的 “Core”），请执行以下操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet sel --template \\</span></span>
<span class="line"><span>  --value-of &#39;/xml/os/linux/distribution[name = &quot;Fedora Core&quot;]/release&#39; \\</span></span>
<span class="line"><span>  --nl myfile.xml</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>1</span></span></code></pre></div><p>通过将路径的 <code>--value-of</code> 更改为 <code>/xml/os/linux/distribution[name=“Fedora Core”]/codename</code>，你便可以查看这些版本的所有代号。</p><h3 id="匹配路径和获取目标值" tabindex="-1">匹配路径和获取目标值 <a class="header-anchor" href="#匹配路径和获取目标值" aria-label="Permalink to “匹配路径和获取目标值”">​</a></h3><p>将 XML 标记视为节点的一个好处是，一旦找到节点，就可以将其视为当前的数据的“目录”。它不是一个真正的目录，至少不是文件系统意义上的目录，但它是一个可以查询的数据集合。为了帮助你将目标和“里面”的数据分开，XMLStarlet 把你试图用 <code>--match</code> 选项匹配的内容和用 <code>--value-of</code> 选项匹配的数据值进行了区分。</p><p>假设你知道 <code>&lt;spin&gt;</code> 节点包含几个元素。这就是你的目标节点。一旦到了这里，就可以使用 <code>--value-of</code> 指定想要哪个元素的值。要查看所有元素，可以使用点（<code>.</code>）来代表当前位置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet sel --template \\</span></span>
<span class="line"><span>  --match &#39;/xml/os/linux/distribution/spin&#39; \\</span></span>
<span class="line"><span>  --value-of &#39;.&#39; --nl myfile.xml \\</span></span>
<span class="line"><span>Live</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>Everything</span></span></code></pre></div><p>与浏览 DOM 一样，可以使用 XPath 表达式来限制返回数据的范围。在本例中，我使用 <code>last()</code> 函数来检索 <code>spin</code> 节点中的最后一个元素：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet select --template \\</span></span>
<span class="line"><span>  --match &#39;/xml/os/linux/distribution/spin&#39; \\</span></span>
<span class="line"><span>  --value-of &#39;*[last()]&#39; --nl myfile.xml</span></span>
<span class="line"><span>Everything</span></span></code></pre></div><p>在本例中，我使用 <code>position()</code> 函数选择 <code>spin</code> 节点中的特定元素：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet select --template \\</span></span>
<span class="line"><span>  --match &#39;/xml/os/linux/distribution/spin&#39; \\</span></span>
<span class="line"><span>  --value-of &#39;*[position() = 2]&#39; --nl myfile.xml</span></span>
<span class="line"><span>Fedora</span></span></code></pre></div><p><code>--match</code> 和 <code>--value</code> 选项可以重叠，因此如何将它们一起使用取决于你自己。对于示例 XML，这两个表达式执行的是相同的操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ xmlstarlet select  --template \\</span></span>
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
<span class="line"><span>Everything</span></span></code></pre></div><h3 id="熟悉-xml" tabindex="-1">熟悉 XML <a class="header-anchor" href="#熟悉-xml" aria-label="Permalink to “熟悉 XML”">​</a></h3><p>XML 有时看起来过于冗长和笨拙，但为与之交互和构建的工具却总是让我吃惊。如果你想要好好使用 XML，那么 XMLStarlet 可能是一个很好的切入点。下次要打开 XML 文件查看其结构化数据时，请尝试使用 XMLStarlet，看看是否可以查询这些数据。当你对 XML 越熟悉时，它就越能作为一种健壮灵活的数据格式而为你服务。</p><hr>`,17)),a("p",null,[s[38]||(s[38]=n("via: ",-1)),e(l,{href:"https://opensource.com/article/21/7/parse-xml-linux"},{default:t(()=>[...s[37]||(s[37]=[n("https://opensource.com/article/21/7/parse-xml-linux",-1)])]),_:1})]),a("p",null,[s[43]||(s[43]=n("作者：",-1)),e(l,{href:"https://opensource.com/users/seth"},{default:t(()=>[...s[39]||(s[39]=[n("Seth Kenlon",-1)])]),_:1}),s[44]||(s[44]=n(" 选题：",-1)),e(l,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[40]||(s[40]=[n("lujun9972",-1)])]),_:1}),s[45]||(s[45]=n(" 译者：",-1)),e(l,{href:"https://github.com/zepoch"},{default:t(()=>[...s[41]||(s[41]=[n("zepoch",-1)])]),_:1}),s[46]||(s[46]=n(" 校对：",-1)),e(l,{href:"https://github.com/wxy"},{default:t(()=>[...s[42]||(s[42]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[49]||(s[49]=n("本文由 ",-1)),e(l,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[47]||(s[47]=[n("LCTT",-1)])]),_:1}),s[50]||(s[50]=n(" 原创编译，",-1)),e(l,{href:"https://linux.cn/"},{default:t(()=>[...s[48]||(s[48]=[n("Linux中国",-1)])]),_:1}),s[51]||(s[51]=n(" 荣誉推出",-1))])])}const X=i(u,[["render",g]]);export{L as __pageData,X as default};
