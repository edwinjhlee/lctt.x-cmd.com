import{_ as i,a0 as o,w as r,s as c,I as a,x as s,a1 as p,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"使用 Java 解析 XML 文件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Java 解析 XML 文件 | LCTT (202203) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Java 解析 XML 文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Java 解析 XML 文件 | LCTT (202203) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202203/20210707 Parsing config files with Java","title":"使用 Java 解析 XML 文件","tag":"202203","desc":""},"relativePath":"202203/20210707 Parsing config files with Java.md","filePath":"[post].md"}'),d={name:"202203/20210707 Parsing config files with Java.md"};function m(u,n,g,f,y,h){const e=o("Link");return r(),c("div",null,[n[44]||(n[44]=a("h1",{id:"使用-java-解析-xml-文件",tabindex:"-1"},[s("使用 Java 解析 XML 文件 "),a("a",{class:"header-anchor",href:"#使用-java-解析-xml-文件","aria-label":"Permalink to “使用 Java 解析 XML 文件”"},"​")],-1)),n[45]||(n[45]=a("blockquote",null,[a("p",null,"在你使用 Java 編寫軟件時實現持久化配置。")],-1)),n[46]||(n[46]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202203/22/091553wf2gvj20fn4wfgpw.jpg",alt:""})],-1)),a("p",null,[n[1]||(n[1]=s("當你編寫一個應用時，你通常都會希望用户能夠定製化他們和應用交互的方式，以及應用與系統進行交互的方式。這種方式通常被稱為 “",-1)),n[2]||(n[2]=a("ruby",null,[s("偏好"),a("rt",null,"preference")],-1)),n[3]||(n[3]=s("” 或者 “",-1)),n[4]||(n[4]=a("ruby",null,[s("設置"),a("rt",null,"setting")],-1)),n[5]||(n[5]=s("”，它們被保存在一個 “偏好文件” 或者 “配置文件” 中，有時也直接簡稱為 “",-1)),n[6]||(n[6]=a("ruby",null,[s("配置"),a("rt",null,"config")],-1)),n[7]||(n[7]=s("”。配置文件可以有很多種格式，包括 INI、JSON、YAML 和 XML。每一種編程語言解析這些格式的方式都不同。本文主要討論，當你在使用 ",-1)),p(e,{href:"https://opensource.com/resources/java"},{default:l(()=>[...n[0]||(n[0]=[s("Java 編程語言",-1)])]),_:1}),n[8]||(n[8]=s(" 來編寫軟件時，實現持久化配置的方式。",-1))]),n[47]||(n[47]=a("h3",{id:"選擇一個格式",tabindex:"-1"},[s("選擇一個格式 "),a("a",{class:"header-anchor",href:"#選擇一個格式","aria-label":"Permalink to “選擇一個格式”"},"​")],-1)),n[48]||(n[48]=a("p",null,"編寫配置文件是一件相當複雜的事情。我曾經試過把配置項使用逗號分隔保存在一個文本文件裏，也試過把配置項保存在非常詳細的 YAML 和 XML 中。對於配置文件來説，最重要是要有一致性和規律性，它們使你可以簡單快速地編寫代碼，從配置文件中解析出數據；同時，當用户決定要做出修改時，很方便地保存和更新配置。",-1)),a("p",null,[n[10]||(n[10]=s("目前有 ",-1)),p(e,{href:"https://opensource.com/article/21/6/what-config-files"},{default:l(()=>[...n[9]||(n[9]=[s("幾種流行的配置文件格式",-1)])]),_:1}),n[11]||(n[11]=s("。對於大多數常見的配置文件格式，Java 都有對應的",-1)),n[12]||(n[12]=a("ruby",null,[s("庫"),a("rt",null,"library")],-1)),n[13]||(n[13]=s("。在本文中，我將使用 XML 格式。對於一些項目，你可能會選擇使用 XML，因為它的一個突出特點是能夠為包含的數據提供大量相關的元數據，而在另外一些項目中，你可能會因為 XML 的冗長而不選擇它。在 Java 中使用 XML 是非常容易的，因為它默認包含了許多健壯的 XML 庫。",-1))]),n[49]||(n[49]=t(`<h3 id="xml-基礎" tabindex="-1">XML 基礎 <a class="header-anchor" href="#xml-基礎" aria-label="Permalink to “XML 基礎”">​</a></h3><p>討論 XML 可是一個大話題。我有一本關於 XML 的書，它有超過 700 頁的內容。幸運的是，使用 XML 並不需要非常瞭解它的諸多特性。就像 HTML 一樣，XML 是一個帶有開始和結束標記的分層標記語言，每一個標記（標籤）內可以包含零個或更多數據。下面是一個 XML 的簡單示例片段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;xml&gt;</span></span>
<span class="line"><span>  &lt;node&gt;</span></span>
<span class="line"><span>    &lt;element&gt;Penguin&lt;/element&gt;</span></span>
<span class="line"><span>  &lt;/node&gt;</span></span>
<span class="line"><span>&lt;/xml&gt;</span></span></code></pre></div><p>在這個 <ruby>自我描述的<rt>self-descriptive</rt></ruby> 例子中，XML 解析器使用了以下幾個概念：</p><ul><li><ruby>文檔<rt>Document</rt></ruby>：<code>&lt;xml&gt;</code> 標籤標誌着一個 <em>文檔</em> 的開始，<code>&lt;/xml&gt;</code> 標籤標誌着這個文檔的結束。</li><li><ruby>節點<rt>Node</rt></ruby>：<code>&lt;node&gt;</code> 標籤代表了一個 <em>節點</em>。</li><li><ruby>元素<rt>Element</rt></ruby>：<code>&lt;element&gt;Penguin&lt;/element&gt;</code> 中，從開頭的 <code>&lt;</code> 到最後的 <code>&gt;</code> 表示了一個 <em>元素</em>。</li><li><ruby>內容<rt>Content</rt></ruby>： 在 <code>&lt;element&gt;</code> 元素裏，字符串 <code>Penguin</code> 就是 <em>內容</em>。</li></ul><p>不管你信不信，只要瞭解了以上幾個概念，你就可以開始編寫、解析 XML 文件了。</p><h3 id="創建一個示例配置文件" tabindex="-1">創建一個示例配置文件 <a class="header-anchor" href="#創建一個示例配置文件" aria-label="Permalink to “創建一個示例配置文件”">​</a></h3><p>要學習如何解析 XML 文件，只需要一個極簡的示例文件就夠了。假設現在有一個配置文件，裏面保存的是關於一個圖形界面窗口的屬性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;xml&gt;</span></span>
<span class="line"><span>  &lt;window&gt;</span></span>
<span class="line"><span>    &lt;theme&gt;Dark&lt;/theme&gt;</span></span>
<span class="line"><span>    &lt;fullscreen&gt;0&lt;/fullscreen&gt;</span></span>
<span class="line"><span>    &lt;icons&gt;Tango&lt;/icons&gt;</span></span>
<span class="line"><span>&lt;/window&gt;</span></span>
<span class="line"><span>&lt;/xml&gt;</span></span></code></pre></div><p>創建一個名為 <code>~/.config/DemoXMLParser</code> 的目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir ~/.config/DemoXMLParser</span></span></code></pre></div>`,11)),a("p",null,[n[15]||(n[15]=s("在 Linux 中，",-1)),n[16]||(n[16]=a("code",null,"~/.config",-1)),n[17]||(n[17]=s(" 目錄是存放配置文件的默認位置，這是在 ",-1)),p(e,{href:"https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html"},{default:l(()=>[...n[14]||(n[14]=[s("自由桌面工作組",-1)])]),_:1}),n[18]||(n[18]=s(" 的規範中定義的。如果你正在使用一個不遵守 ",-1)),n[19]||(n[19]=a("ruby",null,[s("自由桌面工作組"),a("rt",null,"Freedesktop")],-1)),n[20]||(n[20]=s(" 標準的操作系統，你也仍然可以使用這個目錄，只不過你需要自己創建這些目錄了。",-1))]),n[50]||(n[50]=a("p",null,[s("複製 XML 的示例配置文件，粘貼並保存為 "),a("code",null,"~/.config/DemoXMLParser/myconfig.xml"),s(" 文件。")],-1)),n[51]||(n[51]=a("h3",{id:"使用-java-解析-xml",tabindex:"-1"},[s("使用 Java 解析 XML "),a("a",{class:"header-anchor",href:"#使用-java-解析-xml","aria-label":"Permalink to “使用 Java 解析 XML”"},"​")],-1)),a("p",null,[n[22]||(n[22]=s("如果你是 Java 的初學者，你可以先閲讀我寫的 ",-1)),p(e,{href:"https://opensource.com/article/19/10/java-basics"},{default:l(()=>[...n[21]||(n[21]=[s("面向 Java 入門開發者的 7 個小技巧",-1)])]),_:1}),n[23]||(n[23]=s("。一旦你對 Java 比較熟悉了，打開你最喜愛的集成開發工具（IDE），創建一個新工程。我會把我的新工程命名為 ",-1)),n[24]||(n[24]=a("code",null,"myConfigParser",-1)),n[25]||(n[25]=s("。",-1))]),n[52]||(n[52]=t(`<p>剛開始先不要太關注依賴導入和異常捕獲這些，你可以先嚐試用 <code>javax</code> 和 <code>java.io</code> 包裏的標準 Java 擴展來實例化一個解析器。如果你使用了 IDE，它會提示你導入合適的依賴。如果沒有，你也可以在文章稍後的部分找到完整的代碼，裏面就有完整的依賴列表。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Path configPath = Paths.get(System.getProperty(&quot;user.home&quot;), &quot;.config&quot;, &quot;DemoXMLParser&quot;);</span></span>
<span class="line"><span>File configFile = new File(configPath.toString(), &quot;myconfig.xml&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DocumentBuilder builder = null;</span></span>
<span class="line"><span>builder = factory.newDocumentBuilder();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Document doc = null;</span></span>
<span class="line"><span>doc = builder.parse(configFile);</span></span>
<span class="line"><span>doc.getDocumentElement().normalize();</span></span></code></pre></div><p>這段示例代碼使用了 <code>java.nio.Paths</code> 類來找到用户的主目錄，然後在拼接上默認配置文件的路徑。接着，它用 <code>java.io.File</code> 類來把配置文件定義為一個 <code>File</code> 對象。</p><p>緊接着，它使用了 <code>javax.xml.parsers.DocumentBuilder</code> 和 <code>javax.xml.parsers.DocumentBuilderFactory</code> 這兩個類來創建一個內部的文檔構造器，這樣 Java 程序就可以導入並解析 XML 數據了。</p><p>最後，Java 創建一個叫 <code>doc</code> 的文檔對象，並且把 <code>configFile</code> 文件加載到這個對象裏。通過使用 <code>org.w3c.dom</code> 包，它讀取並規範化了 XML 數據。</p><p>基本上就是這樣啦。理論上來講，你已經完成了數據解析的工作。可是，如果你不能夠訪問數據的話，數據解析也沒有多少用處嘛。所以，就讓我們再來寫一些查詢，從你的配置中讀取重要的屬性值吧。</p><h3 id="使用-java-訪問-xml-的值" tabindex="-1">使用 Java 訪問 XML 的值 <a class="header-anchor" href="#使用-java-訪問-xml-的值" aria-label="Permalink to “使用 Java 訪問 XML 的值”">​</a></h3><p>從你已經讀取的 XML 文檔中獲取數據，其實就是要先找到一個特定的節點，然後遍歷它包含的所有元素。通常我們會使用多個循環語句來遍歷節點中的元素，但是為了保持代碼可讀性，我會盡可能少地使用循環語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>NodeList nodes = doc.getElementsByTagName(&quot;window&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (int i = 0; i &lt; nodes.getLength(); i++) {</span></span>
<span class="line"><span> Node mynode = nodes.item(i);</span></span>
<span class="line"><span> System.out.println(&quot;Property = &quot; + mynode.getNodeName());</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span> if (mynode.getNodeType() == Node.ELEMENT_NODE) {</span></span>
<span class="line"><span>   Element myelement = (Element) mynode;</span></span>
<span class="line"><span>             </span></span>
<span class="line"><span>   System.out.println(&quot;Theme = &quot; + myelement.getElementsByTagName(&quot;theme&quot;).item(0).getTextContent());</span></span>
<span class="line"><span>   System.out.println(&quot;Fullscreen = &quot; + myelement.getElementsByTagName(&quot;fullscreen&quot;).item(0).getTextContent());</span></span>
<span class="line"><span>   System.out.println(&quot;Icon set = &quot; + myelement.getElementsByTagName(&quot;icons&quot;).item(0).getTextContent());</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這段示例代碼使用了 <code>org.w3c.dom.NodeList</code> 類，創建了一個名為 <code>nodes</code> 的 <code>NodeList</code> 對象。這個對象包含了所有名字匹配字符串 <code>window</code> 的子節點，實際上這樣的節點只有一個，因為本文的示例配置文件中只配置了一個。</p>`,10)),a("p",null,[n[27]||(n[27]=t("緊接着，它使用了一個 <code>for</code> 循環來遍歷 <code>nodes</code> 列表。具體過程是：根據節點出現的順序逐個取出，然後交給一個 <code>if-then</code> 子句處理。這個 <code>if-then</code> 子句創建了一個名為 <code>myelement</code> 的 <code>Element</code> 對象，其中包含了當前節點下的所有元素。你可以使用例如 <code>getChildNodes</code> 和 <code>getElementById</code> 方法來查詢這些元素，項目中還 ",17)),p(e,{href:"https://www.w3.org/2003/01/dom2-javadoc/org/w3c/dom/Document.html"},{default:l(()=>[...n[26]||(n[26]=[s("記錄了",-1)])]),_:1}),n[28]||(n[28]=s(" 其他查詢方法。",-1))]),n[53]||(n[53]=t(`<p>在這個示例中，每個元素就是配置的鍵。而配置的值儲存在元素的內容中，你可以使用 <code>.getTextContent</code> 方法來提取出配置的值。</p><p>在你的 IDE 中運行代碼（或者運行編譯後的二進制文件）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./DemoXMLParser.java</span></span>
<span class="line"><span>Property = window</span></span>
<span class="line"><span>Theme = Dark</span></span>
<span class="line"><span>Fullscreen = 0</span></span>
<span class="line"><span>Icon set = Tango</span></span></code></pre></div><p>下面是完整的代碼示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package myConfigParser;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.File;</span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.nio.file.Path;</span></span>
<span class="line"><span>import java.nio.file.Paths;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.xml.parsers.DocumentBuilder;</span></span>
<span class="line"><span>import javax.xml.parsers.DocumentBuilderFactory;</span></span>
<span class="line"><span>import javax.xml.parsers.ParserConfigurationException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.w3c.dom.Document;</span></span>
<span class="line"><span>import org.w3c.dom.Element;</span></span>
<span class="line"><span>import org.w3c.dom.NamedNodeMap;</span></span>
<span class="line"><span>import org.w3c.dom.Node;</span></span>
<span class="line"><span>import org.w3c.dom.NodeList;</span></span>
<span class="line"><span>import org.xml.sax.SAXException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ConfigParser {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public static void main(String[] args) {</span></span>
<span class="line"><span>                Path configPath = Paths.get(System.getProperty(&quot;user.home&quot;), &quot;.config&quot;, &quot;DemoXMLParser&quot;);</span></span>
<span class="line"><span>                File configFile = new File(configPath.toString(), &quot;myconfig.xml&quot;);</span></span>
<span class="line"><span>                DocumentBuilderFactory factory =</span></span>
<span class="line"><span>                DocumentBuilderFactory.newInstance();</span></span>
<span class="line"><span>                DocumentBuilder builder = null;</span></span>
<span class="line"><span>               </span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                        builder = factory.newDocumentBuilder();</span></span>
<span class="line"><span>                } catch (ParserConfigurationException e) {</span></span>
<span class="line"><span>                        e.printStackTrace();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>                Document doc = null;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                        doc = builder.parse(configFile);</span></span>
<span class="line"><span>                } catch (SAXException e) {</span></span>
<span class="line"><span>                        e.printStackTrace();</span></span>
<span class="line"><span>                } catch (IOException e) {</span></span>
<span class="line"><span>                        e.printStackTrace();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        doc.getDocumentElement().normalize();</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        NodeList nodes = doc.getElementsByTagName(&quot;window&quot;);</span></span>
<span class="line"><span>        for (int i = 0; i &lt; nodes.getLength(); i++) {</span></span>
<span class="line"><span>           Node mynode = nodes.item(i);</span></span>
<span class="line"><span>           System.out.println(&quot;Property = &quot; + mynode.getNodeName());</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>           if (mynode.getNodeType() == Node.ELEMENT_NODE) {</span></span>
<span class="line"><span>               Element myelement = (Element) mynode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               System.out.println(&quot;Theme = &quot; + myelement.getElementsByTagName(&quot;theme&quot;).item(0).getTextContent());</span></span>
<span class="line"><span>               System.out.println(&quot;Fullscreen = &quot; + myelement.getElementsByTagName(&quot;fullscreen&quot;).item(0).getTextContent());</span></span>
<span class="line"><span>               System.out.println(&quot;Icon set = &quot; + myelement.getElementsByTagName(&quot;icons&quot;).item(0).getTextContent());</span></span>
<span class="line"><span>           } // close if</span></span>
<span class="line"><span>        } // close for</span></span>
<span class="line"><span>    } // close method</span></span>
<span class="line"><span>} //close class</span></span></code></pre></div><h3 id="使用-java-更新-xml" tabindex="-1">使用 Java 更新 XML <a class="header-anchor" href="#使用-java-更新-xml" aria-label="Permalink to “使用 Java 更新 XML”">​</a></h3><p>用户時不時地會改變某個偏好項，這時候 <code>org.w3c.dom</code> 庫就可以幫助你更新某個 XML 元素的內容。你只需要選擇這個 XML 元素，就像你讀取它時那樣。不過，此時你不再使用 <code>.getTextContent</code> 方法，而是使用 <code>.setTextContent</code> 方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>updatePref = myelement.getElementsByTagName(&quot;fullscreen&quot;).item(0);</span></span>
<span class="line"><span>updatePref.setTextContent(&quot;1&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>System.out.println(&quot;Updated fullscreen to &quot; + myelement.getElementsByTagName(&quot;fullscreen&quot;).item(0).getTextContent());</span></span></code></pre></div><p>這麼做會改變應用程序內存中的 XML 文檔，但是還沒有把數據寫回到磁盤上。配合使用 <code>javax</code> 和 <code>w3c</code> 庫，你就可以把讀取到的 XML 內容寫回到配置文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>TransformerFactory transformerFactory = TransformerFactory.newInstance();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Transformer xtransform;</span></span>
<span class="line"><span>xtransform = transformerFactory.newTransformer();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DOMSource mydom = new DOMSource(doc);</span></span>
<span class="line"><span>StreamResult streamResult = new StreamResult(configFile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>xtransform.transform(mydom, streamResult);</span></span></code></pre></div><p>這麼做會沒有警告地寫入轉換後的數據，並覆蓋掉之前的配置。</p><p>下面是完整的代碼，包括更新 XML 的操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package myConfigParser;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.File;</span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.nio.file.Path;</span></span>
<span class="line"><span>import java.nio.file.Paths;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.xml.parsers.DocumentBuilder;</span></span>
<span class="line"><span>import javax.xml.parsers.DocumentBuilderFactory;</span></span>
<span class="line"><span>import javax.xml.parsers.ParserConfigurationException;</span></span>
<span class="line"><span>import javax.xml.transform.Transformer;</span></span>
<span class="line"><span>import javax.xml.transform.TransformerException;</span></span>
<span class="line"><span>import javax.xml.transform.TransformerFactory;</span></span>
<span class="line"><span>import javax.xml.transform.dom.DOMSource;</span></span>
<span class="line"><span>import javax.xml.transform.stream.StreamResult;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.w3c.dom.Document;</span></span>
<span class="line"><span>import org.w3c.dom.Element;</span></span>
<span class="line"><span>import org.w3c.dom.Node;</span></span>
<span class="line"><span>import org.w3c.dom.NodeList;</span></span>
<span class="line"><span>import org.xml.sax.SAXException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ConfigParser {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public static void main(String[] args) {</span></span>
<span class="line"><span>                Path configPath = Paths.get(System.getProperty(&quot;user.home&quot;), &quot;.config&quot;, &quot;DemoXMLParser&quot;);</span></span>
<span class="line"><span>                File configFile = new File(configPath.toString(), &quot;myconfig.xml&quot;);</span></span>
<span class="line"><span>                DocumentBuilderFactory factory =</span></span>
<span class="line"><span>                DocumentBuilderFactory.newInstance();</span></span>
<span class="line"><span>                DocumentBuilder builder = null;</span></span>
<span class="line"><span>               </span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                        builder = factory.newDocumentBuilder();</span></span>
<span class="line"><span>                } catch (ParserConfigurationException e) {</span></span>
<span class="line"><span>                        // TODO Auto-generated catch block</span></span>
<span class="line"><span>                        e.printStackTrace();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>                Document doc = null;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                        doc = builder.parse(configFile);</span></span>
<span class="line"><span>                } catch (SAXException e) {</span></span>
<span class="line"><span>                        // TODO Auto-generated catch block</span></span>
<span class="line"><span>                        e.printStackTrace();</span></span>
<span class="line"><span>                } catch (IOException e) {</span></span>
<span class="line"><span>                        // TODO Auto-generated catch block</span></span>
<span class="line"><span>                        e.printStackTrace();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        doc.getDocumentElement().normalize();</span></span>
<span class="line"><span>        Node updatePref = null;</span></span>
<span class="line"><span>//        NodeList nodes = doc.getChildNodes();</span></span>
<span class="line"><span>        NodeList nodes = doc.getElementsByTagName(&quot;window&quot;);</span></span>
<span class="line"><span>        for (int i = 0; i &lt; nodes.getLength(); i++) {</span></span>
<span class="line"><span>           Node mynode = nodes.item(i);</span></span>
<span class="line"><span>           System.out.println(&quot;Property = &quot; + mynode.getNodeName());</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>           if (mynode.getNodeType() == Node.ELEMENT_NODE) {</span></span>
<span class="line"><span>               Element myelement = (Element) mynode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               System.out.println(&quot;Theme = &quot; + myelement.getElementsByTagName(&quot;theme&quot;).item(0).getTextContent());</span></span>
<span class="line"><span>               System.out.println(&quot;Fullscreen = &quot; + myelement.getElementsByTagName(&quot;fullscreen&quot;).item(0).getTextContent());</span></span>
<span class="line"><span>               System.out.println(&quot;Icon set = &quot; + myelement.getElementsByTagName(&quot;icons&quot;).item(0).getTextContent());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               updatePref = myelement.getElementsByTagName(&quot;fullscreen&quot;).item(0);</span></span>
<span class="line"><span>               updatePref.setTextContent(&quot;2&quot;);</span></span>
<span class="line"><span>               System.out.println(&quot;Updated fullscreen to &quot; + myelement.getElementsByTagName(&quot;fullscreen&quot;).item(0).getTextContent());          </span></span>
<span class="line"><span>           } // close if</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>        }// close for</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // write DOM back to the file</span></span>
<span class="line"><span>        TransformerFactory transformerFactory = TransformerFactory.newInstance();</span></span>
<span class="line"><span>        Transformer xtransform;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        DOMSource mydom = new DOMSource(doc);</span></span>
<span class="line"><span>        StreamResult streamResult = new StreamResult(configFile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>                xtransform = transformerFactory.newTransformer();</span></span>
<span class="line"><span>                xtransform.transform(mydom, streamResult);</span></span>
<span class="line"><span>        } catch (TransformerException e) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>                       </span></span>
<span class="line"><span>    } // close method</span></span>
<span class="line"><span>} //close class</span></span></code></pre></div><h3 id="如何保證配置不出問題" tabindex="-1">如何保證配置不出問題 <a class="header-anchor" href="#如何保證配置不出問題" aria-label="Permalink to “如何保證配置不出問題”">​</a></h3><p>編寫配置文件看上去是一個還挺簡單的任務。一開始，你可能會用一個簡單的文本格式，因為你的應用程序只要寥寥幾個配置項而已。但是，隨着你引入了更多的配置項，讀取或者寫入錯誤的數據可能會給你的應用程序帶來意料之外的錯誤。一種幫助你保持配置過程安全、不出錯的方法，就是使用類似 XML 的規範格式，然後依靠你用的編程語言的內置功能來處理這些複雜的事情。</p><p>這也正是我喜歡使用 Java 和 XML 的原因。每當我試圖讀取錯誤的配置值時，Java 就會提醒我。通常，這是由於我在代碼中試圖獲取的節點，並不存在於我期望的 XML 路徑中。XML 這種高度結構化的格式幫助了代碼保持可靠性，這對用户和開發者來説都是有好處的。</p><hr>`,17)),a("p",null,[n[30]||(n[30]=s("via: ",-1)),p(e,{href:"https://opensource.com/article/21/7/parsing-config-files-java"},{default:l(()=>[...n[29]||(n[29]=[s("https://opensource.com/article/21/7/parsing-config-files-java",-1)])]),_:1})]),a("p",null,[n[35]||(n[35]=s("作者：",-1)),p(e,{href:"https://opensource.com/users/seth"},{default:l(()=>[...n[31]||(n[31]=[s("Seth Kenlon",-1)])]),_:1}),n[36]||(n[36]=s(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...n[32]||(n[32]=[s("lujun9972",-1)])]),_:1}),n[37]||(n[37]=s(" 譯者：",-1)),p(e,{href:"https://github.com/lkxed"},{default:l(()=>[...n[33]||(n[33]=[s("lkxed",-1)])]),_:1}),n[38]||(n[38]=s(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...n[34]||(n[34]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[41]||(n[41]=s("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[39]||(n[39]=[s("LCTT",-1)])]),_:1}),n[42]||(n[42]=s(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...n[40]||(n[40]=[s("Linux中國",-1)])]),_:1}),n[43]||(n[43]=s(" 榮譽推出",-1))])])}const T=i(d,[["render",m]]);export{x as __pageData,T as default};
