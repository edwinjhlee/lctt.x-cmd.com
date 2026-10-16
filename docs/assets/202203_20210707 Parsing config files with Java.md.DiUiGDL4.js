import{_ as i,a0 as o,w as r,s as c,I as a,x as s,a1 as p,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"使用 Java 解析 XML 文件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Java 解析 XML 文件 | LCTT (202203) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Java 解析 XML 文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Java 解析 XML 文件 | LCTT (202203) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202203/20210707 Parsing config files with Java","title":"使用 Java 解析 XML 文件","tag":"202203","desc":""},"relativePath":"202203/20210707 Parsing config files with Java.md","filePath":"[post].md"}'),d={name:"202203/20210707 Parsing config files with Java.md"};function m(u,n,g,f,y,h){const e=o("Link");return r(),c("div",null,[n[44]||(n[44]=a("h1",{id:"使用-java-解析-xml-文件",tabindex:"-1"},[s("使用 Java 解析 XML 文件 "),a("a",{class:"header-anchor",href:"#使用-java-解析-xml-文件","aria-label":"Permalink to “使用 Java 解析 XML 文件”"},"​")],-1)),n[45]||(n[45]=a("blockquote",null,[a("p",null,"在你使用 Java 编写软件时实现持久化配置。")],-1)),n[46]||(n[46]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202203/22/091553wf2gvj20fn4wfgpw.jpg",alt:""})],-1)),a("p",null,[n[1]||(n[1]=s("当你编写一个应用时，你通常都会希望用户能够定制化他们和应用交互的方式，以及应用与系统进行交互的方式。这种方式通常被称为 “",-1)),n[2]||(n[2]=a("ruby",null,[s("偏好"),a("rt",null,"preference")],-1)),n[3]||(n[3]=s("” 或者 “",-1)),n[4]||(n[4]=a("ruby",null,[s("设置"),a("rt",null,"setting")],-1)),n[5]||(n[5]=s("”，它们被保存在一个 “偏好文件” 或者 “配置文件” 中，有时也直接简称为 “",-1)),n[6]||(n[6]=a("ruby",null,[s("配置"),a("rt",null,"config")],-1)),n[7]||(n[7]=s("”。配置文件可以有很多种格式，包括 INI、JSON、YAML 和 XML。每一种编程语言解析这些格式的方式都不同。本文主要讨论，当你在使用 ",-1)),p(e,{href:"https://opensource.com/resources/java"},{default:l(()=>[...n[0]||(n[0]=[s("Java 编程语言",-1)])]),_:1}),n[8]||(n[8]=s(" 来编写软件时，实现持久化配置的方式。",-1))]),n[47]||(n[47]=a("h3",{id:"选择一个格式",tabindex:"-1"},[s("选择一个格式 "),a("a",{class:"header-anchor",href:"#选择一个格式","aria-label":"Permalink to “选择一个格式”"},"​")],-1)),n[48]||(n[48]=a("p",null,"编写配置文件是一件相当复杂的事情。我曾经试过把配置项使用逗号分隔保存在一个文本文件里，也试过把配置项保存在非常详细的 YAML 和 XML 中。对于配置文件来说，最重要是要有一致性和规律性，它们使你可以简单快速地编写代码，从配置文件中解析出数据；同时，当用户决定要做出修改时，很方便地保存和更新配置。",-1)),a("p",null,[n[10]||(n[10]=s("目前有 ",-1)),p(e,{href:"https://opensource.com/article/21/6/what-config-files"},{default:l(()=>[...n[9]||(n[9]=[s("几种流行的配置文件格式",-1)])]),_:1}),n[11]||(n[11]=s("。对于大多数常见的配置文件格式，Java 都有对应的",-1)),n[12]||(n[12]=a("ruby",null,[s("库"),a("rt",null,"library")],-1)),n[13]||(n[13]=s("。在本文中，我将使用 XML 格式。对于一些项目，你可能会选择使用 XML，因为它的一个突出特点是能够为包含的数据提供大量相关的元数据，而在另外一些项目中，你可能会因为 XML 的冗长而不选择它。在 Java 中使用 XML 是非常容易的，因为它默认包含了许多健壮的 XML 库。",-1))]),n[49]||(n[49]=t(`<h3 id="xml-基础" tabindex="-1">XML 基础 <a class="header-anchor" href="#xml-基础" aria-label="Permalink to “XML 基础”">​</a></h3><p>讨论 XML 可是一个大话题。我有一本关于 XML 的书，它有超过 700 页的内容。幸运的是，使用 XML 并不需要非常了解它的诸多特性。就像 HTML 一样，XML 是一个带有开始和结束标记的分层标记语言，每一个标记（标签）内可以包含零个或更多数据。下面是一个 XML 的简单示例片段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;xml&gt;</span></span>
<span class="line"><span>  &lt;node&gt;</span></span>
<span class="line"><span>    &lt;element&gt;Penguin&lt;/element&gt;</span></span>
<span class="line"><span>  &lt;/node&gt;</span></span>
<span class="line"><span>&lt;/xml&gt;</span></span></code></pre></div><p>在这个 <ruby>自我描述的<rt>self-descriptive</rt></ruby> 例子中，XML 解析器使用了以下几个概念：</p><ul><li><ruby>文档<rt>Document</rt></ruby>：<code>&lt;xml&gt;</code> 标签标志着一个 <em>文档</em> 的开始，<code>&lt;/xml&gt;</code> 标签标志着这个文档的结束。</li><li><ruby>节点<rt>Node</rt></ruby>：<code>&lt;node&gt;</code> 标签代表了一个 <em>节点</em>。</li><li><ruby>元素<rt>Element</rt></ruby>：<code>&lt;element&gt;Penguin&lt;/element&gt;</code> 中，从开头的 <code>&lt;</code> 到最后的 <code>&gt;</code> 表示了一个 <em>元素</em>。</li><li><ruby>内容<rt>Content</rt></ruby>： 在 <code>&lt;element&gt;</code> 元素里，字符串 <code>Penguin</code> 就是 <em>内容</em>。</li></ul><p>不管你信不信，只要了解了以上几个概念，你就可以开始编写、解析 XML 文件了。</p><h3 id="创建一个示例配置文件" tabindex="-1">创建一个示例配置文件 <a class="header-anchor" href="#创建一个示例配置文件" aria-label="Permalink to “创建一个示例配置文件”">​</a></h3><p>要学习如何解析 XML 文件，只需要一个极简的示例文件就够了。假设现在有一个配置文件，里面保存的是关于一个图形界面窗口的属性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;xml&gt;</span></span>
<span class="line"><span>  &lt;window&gt;</span></span>
<span class="line"><span>    &lt;theme&gt;Dark&lt;/theme&gt;</span></span>
<span class="line"><span>    &lt;fullscreen&gt;0&lt;/fullscreen&gt;</span></span>
<span class="line"><span>    &lt;icons&gt;Tango&lt;/icons&gt;</span></span>
<span class="line"><span>&lt;/window&gt;</span></span>
<span class="line"><span>&lt;/xml&gt;</span></span></code></pre></div><p>创建一个名为 <code>~/.config/DemoXMLParser</code> 的目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir ~/.config/DemoXMLParser</span></span></code></pre></div>`,11)),a("p",null,[n[15]||(n[15]=s("在 Linux 中，",-1)),n[16]||(n[16]=a("code",null,"~/.config",-1)),n[17]||(n[17]=s(" 目录是存放配置文件的默认位置，这是在 ",-1)),p(e,{href:"https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html"},{default:l(()=>[...n[14]||(n[14]=[s("自由桌面工作组",-1)])]),_:1}),n[18]||(n[18]=s(" 的规范中定义的。如果你正在使用一个不遵守 ",-1)),n[19]||(n[19]=a("ruby",null,[s("自由桌面工作组"),a("rt",null,"Freedesktop")],-1)),n[20]||(n[20]=s(" 标准的操作系统，你也仍然可以使用这个目录，只不过你需要自己创建这些目录了。",-1))]),n[50]||(n[50]=a("p",null,[s("复制 XML 的示例配置文件，粘贴并保存为 "),a("code",null,"~/.config/DemoXMLParser/myconfig.xml"),s(" 文件。")],-1)),n[51]||(n[51]=a("h3",{id:"使用-java-解析-xml",tabindex:"-1"},[s("使用 Java 解析 XML "),a("a",{class:"header-anchor",href:"#使用-java-解析-xml","aria-label":"Permalink to “使用 Java 解析 XML”"},"​")],-1)),a("p",null,[n[22]||(n[22]=s("如果你是 Java 的初学者，你可以先阅读我写的 ",-1)),p(e,{href:"https://opensource.com/article/19/10/java-basics"},{default:l(()=>[...n[21]||(n[21]=[s("面向 Java 入门开发者的 7 个小技巧",-1)])]),_:1}),n[23]||(n[23]=s("。一旦你对 Java 比较熟悉了，打开你最喜爱的集成开发工具（IDE），创建一个新工程。我会把我的新工程命名为 ",-1)),n[24]||(n[24]=a("code",null,"myConfigParser",-1)),n[25]||(n[25]=s("。",-1))]),n[52]||(n[52]=t(`<p>刚开始先不要太关注依赖导入和异常捕获这些，你可以先尝试用 <code>javax</code> 和 <code>java.io</code> 包里的标准 Java 扩展来实例化一个解析器。如果你使用了 IDE，它会提示你导入合适的依赖。如果没有，你也可以在文章稍后的部分找到完整的代码，里面就有完整的依赖列表。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Path configPath = Paths.get(System.getProperty(&quot;user.home&quot;), &quot;.config&quot;, &quot;DemoXMLParser&quot;);</span></span>
<span class="line"><span>File configFile = new File(configPath.toString(), &quot;myconfig.xml&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DocumentBuilder builder = null;</span></span>
<span class="line"><span>builder = factory.newDocumentBuilder();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Document doc = null;</span></span>
<span class="line"><span>doc = builder.parse(configFile);</span></span>
<span class="line"><span>doc.getDocumentElement().normalize();</span></span></code></pre></div><p>这段示例代码使用了 <code>java.nio.Paths</code> 类来找到用户的主目录，然后在拼接上默认配置文件的路径。接着，它用 <code>java.io.File</code> 类来把配置文件定义为一个 <code>File</code> 对象。</p><p>紧接着，它使用了 <code>javax.xml.parsers.DocumentBuilder</code> 和 <code>javax.xml.parsers.DocumentBuilderFactory</code> 这两个类来创建一个内部的文档构造器，这样 Java 程序就可以导入并解析 XML 数据了。</p><p>最后，Java 创建一个叫 <code>doc</code> 的文档对象，并且把 <code>configFile</code> 文件加载到这个对象里。通过使用 <code>org.w3c.dom</code> 包，它读取并规范化了 XML 数据。</p><p>基本上就是这样啦。理论上来讲，你已经完成了数据解析的工作。可是，如果你不能够访问数据的话，数据解析也没有多少用处嘛。所以，就让我们再来写一些查询，从你的配置中读取重要的属性值吧。</p><h3 id="使用-java-访问-xml-的值" tabindex="-1">使用 Java 访问 XML 的值 <a class="header-anchor" href="#使用-java-访问-xml-的值" aria-label="Permalink to “使用 Java 访问 XML 的值”">​</a></h3><p>从你已经读取的 XML 文档中获取数据，其实就是要先找到一个特定的节点，然后遍历它包含的所有元素。通常我们会使用多个循环语句来遍历节点中的元素，但是为了保持代码可读性，我会尽可能少地使用循环语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>NodeList nodes = doc.getElementsByTagName(&quot;window&quot;);</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这段示例代码使用了 <code>org.w3c.dom.NodeList</code> 类，创建了一个名为 <code>nodes</code> 的 <code>NodeList</code> 对象。这个对象包含了所有名字匹配字符串 <code>window</code> 的子节点，实际上这样的节点只有一个，因为本文的示例配置文件中只配置了一个。</p>`,10)),a("p",null,[n[27]||(n[27]=t("紧接着，它使用了一个 <code>for</code> 循环来遍历 <code>nodes</code> 列表。具体过程是：根据节点出现的顺序逐个取出，然后交给一个 <code>if-then</code> 子句处理。这个 <code>if-then</code> 子句创建了一个名为 <code>myelement</code> 的 <code>Element</code> 对象，其中包含了当前节点下的所有元素。你可以使用例如 <code>getChildNodes</code> 和 <code>getElementById</code> 方法来查询这些元素，项目中还 ",17)),p(e,{href:"https://www.w3.org/2003/01/dom2-javadoc/org/w3c/dom/Document.html"},{default:l(()=>[...n[26]||(n[26]=[s("记录了",-1)])]),_:1}),n[28]||(n[28]=s(" 其他查询方法。",-1))]),n[53]||(n[53]=t(`<p>在这个示例中，每个元素就是配置的键。而配置的值储存在元素的内容中，你可以使用 <code>.getTextContent</code> 方法来提取出配置的值。</p><p>在你的 IDE 中运行代码（或者运行编译后的二进制文件）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./DemoXMLParser.java</span></span>
<span class="line"><span>Property = window</span></span>
<span class="line"><span>Theme = Dark</span></span>
<span class="line"><span>Fullscreen = 0</span></span>
<span class="line"><span>Icon set = Tango</span></span></code></pre></div><p>下面是完整的代码示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package myConfigParser;</span></span>
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
<span class="line"><span>} //close class</span></span></code></pre></div><h3 id="使用-java-更新-xml" tabindex="-1">使用 Java 更新 XML <a class="header-anchor" href="#使用-java-更新-xml" aria-label="Permalink to “使用 Java 更新 XML”">​</a></h3><p>用户时不时地会改变某个偏好项，这时候 <code>org.w3c.dom</code> 库就可以帮助你更新某个 XML 元素的内容。你只需要选择这个 XML 元素，就像你读取它时那样。不过，此时你不再使用 <code>.getTextContent</code> 方法，而是使用 <code>.setTextContent</code> 方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>updatePref = myelement.getElementsByTagName(&quot;fullscreen&quot;).item(0);</span></span>
<span class="line"><span>updatePref.setTextContent(&quot;1&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>System.out.println(&quot;Updated fullscreen to &quot; + myelement.getElementsByTagName(&quot;fullscreen&quot;).item(0).getTextContent());</span></span></code></pre></div><p>这么做会改变应用程序内存中的 XML 文档，但是还没有把数据写回到磁盘上。配合使用 <code>javax</code> 和 <code>w3c</code> 库，你就可以把读取到的 XML 内容写回到配置文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>TransformerFactory transformerFactory = TransformerFactory.newInstance();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Transformer xtransform;</span></span>
<span class="line"><span>xtransform = transformerFactory.newTransformer();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DOMSource mydom = new DOMSource(doc);</span></span>
<span class="line"><span>StreamResult streamResult = new StreamResult(configFile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>xtransform.transform(mydom, streamResult);</span></span></code></pre></div><p>这么做会没有警告地写入转换后的数据，并覆盖掉之前的配置。</p><p>下面是完整的代码，包括更新 XML 的操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package myConfigParser;</span></span>
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
<span class="line"><span>} //close class</span></span></code></pre></div><h3 id="如何保证配置不出问题" tabindex="-1">如何保证配置不出问题 <a class="header-anchor" href="#如何保证配置不出问题" aria-label="Permalink to “如何保证配置不出问题”">​</a></h3><p>编写配置文件看上去是一个还挺简单的任务。一开始，你可能会用一个简单的文本格式，因为你的应用程序只要寥寥几个配置项而已。但是，随着你引入了更多的配置项，读取或者写入错误的数据可能会给你的应用程序带来意料之外的错误。一种帮助你保持配置过程安全、不出错的方法，就是使用类似 XML 的规范格式，然后依靠你用的编程语言的内置功能来处理这些复杂的事情。</p><p>这也正是我喜欢使用 Java 和 XML 的原因。每当我试图读取错误的配置值时，Java 就会提醒我。通常，这是由于我在代码中试图获取的节点，并不存在于我期望的 XML 路径中。XML 这种高度结构化的格式帮助了代码保持可靠性，这对用户和开发者来说都是有好处的。</p><hr>`,17)),a("p",null,[n[30]||(n[30]=s("via: ",-1)),p(e,{href:"https://opensource.com/article/21/7/parsing-config-files-java"},{default:l(()=>[...n[29]||(n[29]=[s("https://opensource.com/article/21/7/parsing-config-files-java",-1)])]),_:1})]),a("p",null,[n[35]||(n[35]=s("作者：",-1)),p(e,{href:"https://opensource.com/users/seth"},{default:l(()=>[...n[31]||(n[31]=[s("Seth Kenlon",-1)])]),_:1}),n[36]||(n[36]=s(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...n[32]||(n[32]=[s("lujun9972",-1)])]),_:1}),n[37]||(n[37]=s(" 译者：",-1)),p(e,{href:"https://github.com/lkxed"},{default:l(()=>[...n[33]||(n[33]=[s("lkxed",-1)])]),_:1}),n[38]||(n[38]=s(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...n[34]||(n[34]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[41]||(n[41]=s("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[39]||(n[39]=[s("LCTT",-1)])]),_:1}),n[42]||(n[42]=s(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...n[40]||(n[40]=[s("Linux中国",-1)])]),_:1}),n[43]||(n[43]=s(" 荣誉推出",-1))])])}const T=i(d,[["render",m]]);export{x as __pageData,T as default};
