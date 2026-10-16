import{_ as o,a0 as t,w as r,s as d,I as a,x as s,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"为你的 awk 脚本注入 Groovy | LCTT x X-CMD","titleTemplate":false,"description":"为你的 awk 脚本注入 Groovy | LCTT (202211) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"为你的 awk 脚本注入 Groovy | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"为你的 awk 脚本注入 Groovy | LCTT (202211) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202211/20220903 Infuse your awk scripts with Groovy","title":"为你的 awk 脚本注入 Groovy","tag":"202211","desc":""},"relativePath":"202211/20220903 Infuse your awk scripts with Groovy.md","filePath":"[post].md"}'),c={name:"202211/20220903 Infuse your awk scripts with Groovy.md"};function g(u,n,f,k,m,b){const p=t("Link");return r(),d("div",null,[n[37]||(n[37]=a("h1",{id:"为你的-awk-脚本注入-groovy",tabindex:"-1"},[s("为你的 awk 脚本注入 Groovy "),a("a",{class:"header-anchor",href:"#为你的-awk-脚本注入-groovy","aria-label":"Permalink to “为你的 awk 脚本注入 Groovy”"},"​")],-1)),n[38]||(n[38]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202211/09/100129hp5bze5bbbbmddw6.jpg",alt:""})],-1)),n[39]||(n[39]=a("blockquote",null,[a("p",null,"awk 和 Groovy 相辅相成，可以创建强大、有用的脚本。")],-1)),a("p",null,[n[1]||(n[1]=s("最近我写了一个使用 Groovy 脚本来清理我的音乐文件中的标签的系列。我开发了一个 ",-1)),e(p,{href:"https://opensource.com/article/22/8/music-tagging-framework-groovy"},{default:l(()=>[...n[0]||(n[0]=[s("框架",-1)])]),_:1}),n[2]||(n[2]=s("，可以识别我的音乐目录的结构，并使用它来遍历音乐文件。在该系列的最后一篇文章中，我从框架中分离出一个实用类，我的脚本可以用它来处理文件。",-1))]),n[40]||(n[40]=a("p",null,"这个独立的框架让我想起了很多 awk 的工作方式。对于那些不熟悉 awk 的人来说，你学习下这本电子书：",-1)),a("blockquote",null,[a("p",null,[a("strong",null,[e(p,{href:"https://opensource.com/downloads/awk-ebook"},{default:l(()=>[...n[3]||(n[3]=[s("《awk 实用指南》",-1)])]),_:1})])])]),n[41]||(n[41]=a("p",null,[s("我从 1984 年开始大量使用 awk，当时我们的小公司买了第一台“真正的”计算机，它运行的是 System V Unix。对我来说，awk 是非常完美的：它有"),a("ruby",null,[s("关联内存"),a("rt",null,"associative memory")]),s("——将数组视为由字符串而不是数字来索引的。它内置了正则表达式，似乎专为处理数据而生，尤其是在处理数据列时，而且结构紧凑，易于学习。最后，它非常适合在 Unix 工作流使用，从标准输入或文件中读取数据并写入到输出，数据不需要经过其他的转换就出现在了输入流中。")],-1)),n[42]||(n[42]=a("p",null,"说 awk 是我日常计算工具箱中的一个重要部分一点也不为过。然而，在我使用 awk 的过程中，有几件事让我感到不满意。",-1)),a("p",null,[n[5]||(n[5]=s("可能主要的问题是 awk 善于处理以分隔字段呈现的数据，但很奇怪它不善于处理 CSV 文件，因为 CSV 文件的字段被引号包围时可以嵌入逗号分隔符。另外，自 awk 发明以来，正则表达式已经有了很大的发展，我们需要记住两套正则表达式的语法规则，而这并不利于编写无 bug 的代码。",-1)),e(p,{href:"http://regex.info/blog/2006-09-15/247"},{default:l(()=>[...n[4]||(n[4]=[s("一套这样的规则已经很糟糕了",-1)])]),_:1}),n[6]||(n[6]=s("。",-1))]),n[43]||(n[43]=a("p",null,[s("由于 awk 是一门简洁的语言，因此它缺少很多我认为有用的东西，比如更丰富的基础类型、结构体、"),a("code",null,"switch"),s(" 语句等等。")],-1)),a("p",null,[n[8]||(n[8]=s("相比之下，Groovy 拥有这些能力：可以使用 ",-1)),e(p,{href:"http://opencsv.sourceforge.net/"},{default:l(()=>[...n[7]||(n[7]=[s("OpenCSV 库",-1)])]),_:1}),n[9]||(n[9]=s("，它很擅长处理 CSV 文件、Java 正则表达式和强大的匹配运算符、丰富的基础类型、类、",-1)),n[10]||(n[10]=a("code",null,"switch",-1)),n[11]||(n[11]=s(" 语句等等。",-1))]),n[44]||(n[44]=a("p",null,"Groovy 所缺乏的是简单的面向管道的概念，即把要处理数据作为一个传入的流，以及把处理过的数据作为一个传出的流。",-1)),n[45]||(n[45]=a("p",null,"但我的音乐目录处理框架让我想到，也许我可以创建一个 Groovy 版本的 awk “引擎”。这就是我写这篇文章的目的。",-1)),n[46]||(n[46]=a("h3",{id:"安装-java-和-groovy",tabindex:"-1"},[s("安装 Java 和 Groovy "),a("a",{class:"header-anchor",href:"#安装-java-和-groovy","aria-label":"Permalink to “安装 Java 和 Groovy”"},"​")],-1)),a("p",null,[n[14]||(n[14]=s("Groovy 是基于 Java 的，需要先安装 Java。最新的、合适的 Java 和 Groovy 版本可能都在你的 Linux 发行版的软件库中。Groovy 也可以按照 ",-1)),e(p,{href:"https://groovy.apache.org/download.html"},{default:l(()=>[...n[12]||(n[12]=[s("Groovy 主页",-1)])]),_:1}),n[15]||(n[15]=s(" 上的说明进行安装。对于 Linux 用户来说，一个不错的选择是 ",-1)),e(p,{href:"https://opensource.com/article/22/3/manage-java-versions-sdkman"},{default:l(()=>[...n[13]||(n[13]=[s("SDKMan",-1)])]),_:1}),n[16]||(n[16]=s("，它可以用来获得多个版本的 Java、Groovy 和其他许多相关工具。在这篇文章中，我使用的是 SDK 的版本：",-1))]),n[47]||(n[47]=i(`<ul><li>Java：OpenJDK 11 的 11.0.12 的开源版本</li><li>Groovy：3.0.8</li></ul><h3 id="使用-groovy-创建-awk" tabindex="-1">使用 Groovy 创建 awk <a class="header-anchor" href="#使用-groovy-创建-awk" aria-label="Permalink to “使用 Groovy 创建 awk”">​</a></h3><p>这里的基本想法是将打开一个或多个文件进行处理、将每行分割成字段、以及提供对数据流的访问等复杂情况封装在三个部分：</p><ul><li>在处理数据之前</li><li>在处理每行数据时</li><li>在处理完所有数据之后</li></ul><p>我并不打算用 Groovy 来取代 awk。相反，我只是在努力实现我的典型用例，那就是：</p><ul><li>使用一个脚本文件而不是在命令行写代码</li><li>处理一个或多个输入文件</li><li>设置默认的分隔符为 <code>|</code>，并基于这个分隔符分割所有行</li><li>使用 OpenCSV 完成分割工作（awk 做不到）</li></ul><h3 id="框架类" tabindex="-1">框架类 <a class="header-anchor" href="#框架类" aria-label="Permalink to “框架类”">​</a></h3><p>下面是用 Groovy 类实现的 “awk 引擎”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@Grab(&#39;com.opencsv:opencsv:5.6&#39;)</span></span>
<span class="line"><span>import com.opencsv.CSVReader</span></span>
<span class="line"><span>public class AwkEngine {</span></span>
<span class="line"><span>    // With admiration and respect for</span></span>
<span class="line"><span>    //     Alfred Aho</span></span>
<span class="line"><span>    //     Peter Weinberger</span></span>
<span class="line"><span>    //     Brian Kernighan</span></span>
<span class="line"><span>    // Thank you for the enormous value</span></span>
<span class="line"><span>    // brought my job by the awk</span></span>
<span class="line"><span>    // programming language</span></span>
<span class="line"><span>    Closure onBegin</span></span>
<span class="line"><span>    Closure onEachLine</span></span>
<span class="line"><span>    Closure onEnd</span></span>
<span class="line"><span>    private String fieldSeparator</span></span>
<span class="line"><span>    private boolean isFirstLineHeader</span></span>
<span class="line"><span>    private ArrayList&lt;String&gt; fileNameList</span></span>
<span class="line"><span>    public AwkEngine(args) {</span></span>
<span class="line"><span>        this.fileNameList = args</span></span>
<span class="line"><span>        this.fieldSeparator = &quot;|&quot;</span></span>
<span class="line"><span>        this.isFirstLineHeader = false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public AwkEngine(args, fieldSeparator) {</span></span>
<span class="line"><span>        this.fileNameList = args</span></span>
<span class="line"><span>        this.fieldSeparator = fieldSeparator</span></span>
<span class="line"><span>        this.isFirstLineHeader = false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public AwkEngine(args, fieldSeparator, isFirstLineHeader) {</span></span>
<span class="line"><span>        this.fileNameList = args</span></span>
<span class="line"><span>        this.fieldSeparator = fieldSeparator</span></span>
<span class="line"><span>        this.isFirstLineHeader = isFirstLineHeader</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void go() {</span></span>
<span class="line"><span>        this.onBegin()</span></span>
<span class="line"><span>        int recordNumber = 0</span></span>
<span class="line"><span>        fileNameList.each { fileName -&gt;</span></span>
<span class="line"><span>            int fileRecordNumber = 0</span></span>
<span class="line"><span>            new File(fileName).withReader { reader -&gt;</span></span>
<span class="line"><span>                def csvReader = new CSVReader(reader,</span></span>
<span class="line"><span>                    this.fieldSeparator.charAt(0))</span></span>
<span class="line"><span>                if (isFirstLineHeader) {</span></span>
<span class="line"><span>                    def csvFieldNames = csvReader.readNext() as</span></span>
<span class="line"><span>                        ArrayList&lt;String&gt;</span></span>
<span class="line"><span>                    csvReader.each { fieldsByNumber -&gt;</span></span>
<span class="line"><span>                        def fieldsByName = csvFieldNames.</span></span>
<span class="line"><span>                            withIndex().</span></span>
<span class="line"><span>                            collectEntries { name, index -&gt;</span></span>
<span class="line"><span>                                [name, fieldsByNumber[index]]</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        this.onEachLine(fieldsByName,</span></span>
<span class="line"><span>                                recordNumber, fileName,</span></span>
<span class="line"><span>                                fileRecordNumber)</span></span>
<span class="line"><span>                        recordNumber++</span></span>
<span class="line"><span>                        fileRecordNumber++</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    csvReader.each { fieldsByNumber -&gt;</span></span>
<span class="line"><span>                        this.onEachLine(fieldsByNumber,</span></span>
<span class="line"><span>                            recordNumber, fileName,</span></span>
<span class="line"><span>                            fileRecordNumber)</span></span>
<span class="line"><span>                        recordNumber++</span></span>
<span class="line"><span>                        fileRecordNumber++</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        this.onEnd()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>虽然这看起来是相当多的代码，但许多行是因为太长换行了（例如，通常你会合并第 38 行和第 39 行，第 41 行和第 42 行，等等）。让我们逐行看一下。</p>`,10)),a("p",null,[n[18]||(n[18]=s("第 1 行使用 ",-1)),n[19]||(n[19]=a("code",null,"@Grab",-1)),n[20]||(n[20]=s(" 注解从 ",-1)),e(p,{href:"https://mvnrepository.com/artifact/com.opencsv/opencsv"},{default:l(()=>[...n[17]||(n[17]=[s("Maven Central",-1)])]),_:1}),n[21]||(n[21]=s(" 获取 OpenCSV 库的 5.6 本周。不需要 XML。",-1))]),n[48]||(n[48]=i(`<p>第 2 行我引入了 OpenCSV 的 <code>CSVReader</code> 类</p><p>第 3 行，像 Java 一样，我声明了一个 <code>public</code> 实用类 <code>AwkEngine</code>。</p><p>第 11-13 行定义了脚本所使用的 Groovy 闭包实例，作为该类的钩子。像任何 Groovy 类一样，它们“默认是 <code>public</code>”，但 Groovy 将这些字段创建为 <code>private</code>，并对其进行外部引用（使用 Groovy 提供的 getter 和 setter 方法）。我将在下面的示例脚本中进一步解释这个问题。</p><p>第 14-16 行声明了 <code>private</code> 字段 —— 字段分隔符，一个指示文件第一行是否为标题的标志，以及一个文件名的列表。</p><p>第 17-31 行定义了三个构造函数。第一个接收命令行参数。第二个接收字段的分隔符。第三个接收指示第一行是否为标题的标志。</p><p>第 31-67 行定义了引擎本身，即 <code>go()</code> 方法。</p><p>第 33 行调用了 <code>onBegin()</code> 闭包（等同于 awk 的 <code>BEGIN {}</code> 语句）。</p><p>第 34 行初始化流的 <code>recordNumber</code>（等同于 awk 的 <code>NR</code> 变量）为 0（注意我这里是从 00 而不是 1 开始的）。</p><p>第 35-65 行使用 <code>each</code> <code>{}</code> 来循环处理列表中的文件。</p><p>第 36 行初始化文件的 <code>fileRecordNumber</code>（等同于 awk 的 <code>FNR</code> 变量）为 0（从 0 而不是 1 开始）。</p><p>第 37-64 行获取一个文件对应的 <code>Reader</code> 实例并处理它。</p><p>第 38-39 行获取一个 <code>CSVReader</code> 实例。</p><p>第 40 行检测第一行是否为标题。</p><p>如果第一行是标题，那么在 41-42 行会从第一行获取字段的标题名字列表。</p><p>第 43-54 行处理其他的行。</p><p>第 44-48 行把字段的值复制到 <code>name:value</code> 的映射中。</p><p>第 49-51 行调用 <code>onEachLine()</code> 闭包（等同于 awk 程序 <code>BEGIN {}</code> 和 <code>END {}</code> 之间的部分，不同的是，这里不能输入执行条件），传入的参数是 <code>name:value</code> 映射、处理过的总行数、文件名和该文件处理过的行数。</p><p>第 52-53 行是处理过的总行数和该文件处理过的行数的自增。</p><p>如果第一行不是标题：</p><p>第 56-62 行处理每一行。</p><p>第 57-59 调用 <code>onEachLine()</code> 闭包，传入的参数是字段值的数组、处理过的总行数、文件名和该文件处理过的行数。</p><p>第 60-61 行是处理过的总行数和该文件处理过的行数的自增。</p><p>第 66 行调用 <code>onEnd()</code> 闭包（等同于 awk 的 <code>END {}</code>）。</p><p>这就是该框架的内容。现在你可以编译它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovyc AwkEngine.groovy</span></span></code></pre></div><p>一点注释：</p><p>如果传入的参数不是一个文件，编译就会失败，并出现标准的 Groovy 堆栈跟踪，看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Caught: java.io.FileNotFoundException: not-a-file (No such file or directory)</span></span>
<span class="line"><span>java.io.FileNotFoundException: not-a-file (No such file or directory)</span></span>
<span class="line"><span>at AwkEngine$_go_closure1.doCall(AwkEngine.groovy:46)</span></span></code></pre></div><p>OpenCSV 可能会返回 <code>String[]</code> 值，不像 Groovy 中的 <code>List</code> 值那样方便（例如，数组没有 <code>each {}</code>）。第 41-42 行将标题字段值数组转换为 list，因此第 57 行的 <code>fieldsByNumber</code> 可能也应该转换为 list。</p><h3 id="在脚本中使用这个框架" tabindex="-1">在脚本中使用这个框架 <a class="header-anchor" href="#在脚本中使用这个框架" aria-label="Permalink to “在脚本中使用这个框架”">​</a></h3><p>下面是一个使用 <code>AwkEngine</code> 来处理 <code>/etc/group</code> 之类由冒号分隔并没有标题的文件的简单脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def ae = new AwkEngine(args, &#39;:&#39;)</span></span>
<span class="line"><span>int lineCount = 0</span></span>
<span class="line"><span>ae.onBegin = {</span></span>
<span class="line"><span>    println “in begin”</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>ae.onEachLine = { fields, recordNumber, fileName, fileRecordNumber -&gt;</span></span>
<span class="line"><span>    if (lineCount &lt; 10)</span></span>
<span class="line"><span>        println “fileName $fileName fields $fields”</span></span>
<span class="line"><span>    lineCount++</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>ae.onEnd = {</span></span>
<span class="line"><span>    println “in end”</span></span>
<span class="line"><span>    println “$lineCount line(s) read”</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ae.go()</span></span></code></pre></div><p>第 1 行 调用的有两个参数的构造函数，传入了参数列表，并定义冒号为分隔符。</p><p>第 2 行定义一个脚本级的变量 <code>lineCount</code>，用来记录处理过的行数（注意，Groovy 闭包不要求定义在外部的变量为 <code>final</code>）。</p><p>第 3-5 行定义 <code>onBegin()</code> 闭包，在标准输出中打印出 “in begin” 字符串。</p><p>第 6-10 行定义 <code>onEachLine()</code> 闭包，打印文件名和前 10 行字段，无论是否为前 10 行，处理过的总行数 <code>lineCount</code> 都会自增。</p><p>第 11-14 行定义 <code>onEnd()</code> 闭包，打印 “in end” 字符串和处理过的总行数。</p><p>第 15 行运行脚本，使用 <code>AwkEngine</code>。</p><p>像下面一样运行一下脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovy Test1Awk.groovy /etc/group</span></span>
<span class="line"><span>in begin</span></span>
<span class="line"><span>fileName /etc/group fields [root, x, 0, ]</span></span>
<span class="line"><span>fileName /etc/group fields [daemon, x, 1, ]</span></span>
<span class="line"><span>fileName /etc/group fields [bin, x, 2, ]</span></span>
<span class="line"><span>fileName /etc/group fields [sys, x, 3, ]</span></span>
<span class="line"><span>fileName /etc/group fields [adm, x, 4, syslog,clh]</span></span>
<span class="line"><span>fileName /etc/group fields [tty, x, 5, ]</span></span>
<span class="line"><span>fileName /etc/group fields [disk, x, 6, ]</span></span>
<span class="line"><span>fileName /etc/group fields [lp, x, 7, ]</span></span>
<span class="line"><span>fileName /etc/group fields [mail, x, 8, ]</span></span>
<span class="line"><span>fileName /etc/group fields [news, x, 9, ]</span></span>
<span class="line"><span>in end</span></span>
<span class="line"><span>78 line(s) read</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>当然，编译框架类生成的 <code>.class</code> 文件需要在 classpath 中，这样才能正常运行。通常你可以用 <code>jar</code> 把这些 class 文件打包起来。</p><p>我非常喜欢 Groovy 对行为委托的支持，这在其他语言中需要各种诡异的手段。许多年来，Java 需要匿名类和相当多的额外代码。Lambda 已经在很大程度上解决了这个问题，但它们仍然不能引用其范围之外的非 final 变量。</p><p>下面是另一个更有趣的脚本，它很容易让人想起我对 awk 的典型使用方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def ae = new AwkEngine(args, &#39;;&#39;, true)</span></span>
<span class="line"><span>ae.onBegin = {</span></span>
<span class="line"><span>    // nothing to do here</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>def regionCount = [:]</span></span>
<span class="line"><span>    ae.onEachLine = { fields, recordNumber, fileName, fileRecordNumber -&gt;</span></span>
<span class="line"><span>        regionCount[fields.REGION] =</span></span>
<span class="line"><span>            (regionCount.containsKey(fields.REGION) ?</span></span>
<span class="line"><span>                regionCount[fields.REGION] : 0) +</span></span>
<span class="line"><span>            (fields.PERSONAS as Integer)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>ae.onEnd = {</span></span>
<span class="line"><span>    regionCount.each { region, population -&gt;</span></span>
<span class="line"><span>        println “Region $region population $population”</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ae.go()</span></span></code></pre></div><p>第 1 行调用了三个函数的构造方法，<code>true</code> 表示这是“真正的 CSV” 文件，第一行为标题。由于它是西班牙语的文件，因此它的逗号表示数字的<code>点</code>，标准的分隔符是分号。</p><p>第 2-4 行定义 <code>onBegin()</code> 闭包，这里什么也不做。</p><p>第 5 行定义一个（空的）<code>LinkedHashmap</code>，键是 String 类型，值是 Integer 类型。数据文件来自于智利最近的人口普查，你要在这个脚本中计算出智利每个地区的人口数量。</p><p>第 6-11 行处理文件中的行（加上标题一共有 180,500 行）—— 请注意在这个案例中，由于你定义 第 1 行为 CSV 列的标题，因此 <code>fields</code> 参数会成为 <code>LinkedHashMap&lt;String,String&gt;</code> 实例。</p><p>第 7-10 行是 <code>regionCount</code> 映射计数增加，键是 <code>REGION</code> 字段的值，值是 <code>PERSONAS</code> 字段的值 —— 请注意，与 awk 不同，在 Groovy 中你不能在赋值操作的右边使用一个不存在的映射而期望得到空值或零值。</p><p>第 12-16 行，打印每个地区的人口数量。</p><p>第 17 行运行脚本，调用 <code>AwkEngine</code> 。</p><p>像下面一样运行一下脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovy Test2Awk.groovy ~/Downloads/Censo2017/ManzanaEntidad_CSV/Censo*csv</span></span>
<span class="line"><span>Region 1 population 330558</span></span>
<span class="line"><span>Region 2 population 607534</span></span>
<span class="line"><span>Region 3 population 286168</span></span>
<span class="line"><span>Region 4 population 757586</span></span>
<span class="line"><span>Region 5 population 1815902</span></span>
<span class="line"><span>Region 6 population 914555</span></span>
<span class="line"><span>Region 7 population 1044950</span></span>
<span class="line"><span>Region 8 population 1556805</span></span>
<span class="line"><span>Region 16 population 480609</span></span>
<span class="line"><span>Region 9 population 957224</span></span>
<span class="line"><span>Region 10 population 828708</span></span>
<span class="line"><span>Region 11 population 103158</span></span>
<span class="line"><span>Region 12 population 166533</span></span>
<span class="line"><span>Region 13 population 7112808</span></span>
<span class="line"><span>Region 14 population 384837</span></span>
<span class="line"><span>Region 15 population 226068</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>以上为全部内容。对于那些喜欢 awk 但又希望得到更多的东西的人，我希望你能喜欢这种 Groovy 的方法。</p><hr>`,55)),a("p",null,[n[23]||(n[23]=s("via: ",-1)),e(p,{href:"https://opensource.com/article/22/9/awk-groovy"},{default:l(()=>[...n[22]||(n[22]=[s("https://opensource.com/article/22/9/awk-groovy",-1)])]),_:1})]),a("p",null,[n[28]||(n[28]=s("作者：",-1)),e(p,{href:"https://opensource.com/users/clhermansen"},{default:l(()=>[...n[24]||(n[24]=[s("Chris Hermansen",-1)])]),_:1}),n[29]||(n[29]=s(" 选题：",-1)),e(p,{href:"https://github.com/lkxed"},{default:l(()=>[...n[25]||(n[25]=[s("lkxed",-1)])]),_:1}),n[30]||(n[30]=s(" 译者：",-1)),e(p,{href:"https://github.com/lxbwolf"},{default:l(()=>[...n[26]||(n[26]=[s("lxbwolf",-1)])]),_:1}),n[31]||(n[31]=s(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...n[27]||(n[27]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[34]||(n[34]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[32]||(n[32]=[s("LCTT",-1)])]),_:1}),n[35]||(n[35]=s(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...n[33]||(n[33]=[s("Linux中国",-1)])]),_:1}),n[36]||(n[36]=s(" 荣誉推出",-1))])])}const w=o(c,[["render",g]]);export{y as __pageData,w as default};
