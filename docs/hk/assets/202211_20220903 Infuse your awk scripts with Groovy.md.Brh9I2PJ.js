import{_ as o,a0 as t,w as r,s as d,I as a,x as s,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"為你的 awk 腳本注入 Groovy | LCTT x X-CMD","titleTemplate":false,"description":"為你的 awk 腳本注入 Groovy | LCTT (202211) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"為你的 awk 腳本注入 Groovy | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"為你的 awk 腳本注入 Groovy | LCTT (202211) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202211/20220903 Infuse your awk scripts with Groovy","title":"為你的 awk 腳本注入 Groovy","tag":"202211","desc":""},"relativePath":"202211/20220903 Infuse your awk scripts with Groovy.md","filePath":"[post].md"}'),c={name:"202211/20220903 Infuse your awk scripts with Groovy.md"};function g(u,n,f,k,m,b){const p=t("Link");return r(),d("div",null,[n[37]||(n[37]=a("h1",{id:"為你的-awk-腳本注入-groovy",tabindex:"-1"},[s("為你的 awk 腳本注入 Groovy "),a("a",{class:"header-anchor",href:"#為你的-awk-腳本注入-groovy","aria-label":"Permalink to “為你的 awk 腳本注入 Groovy”"},"​")],-1)),n[38]||(n[38]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202211/09/100129hp5bze5bbbbmddw6.jpg",alt:""})],-1)),n[39]||(n[39]=a("blockquote",null,[a("p",null,"awk 和 Groovy 相輔相成，可以創建強大、有用的腳本。")],-1)),a("p",null,[n[1]||(n[1]=s("最近我寫了一個使用 Groovy 腳本來清理我的音樂文件中的標籤的系列。我開發了一個 ",-1)),e(p,{href:"https://opensource.com/article/22/8/music-tagging-framework-groovy"},{default:l(()=>[...n[0]||(n[0]=[s("框架",-1)])]),_:1}),n[2]||(n[2]=s("，可以識別我的音樂目錄的結構，並使用它來遍歷音樂文件。在該系列的最後一篇文章中，我從框架中分離出一個實用類，我的腳本可以用它來處理文件。",-1))]),n[40]||(n[40]=a("p",null,"這個獨立的框架讓我想起了很多 awk 的工作方式。對於那些不熟悉 awk 的人來説，你學習下這本電子書：",-1)),a("blockquote",null,[a("p",null,[a("strong",null,[e(p,{href:"https://opensource.com/downloads/awk-ebook"},{default:l(()=>[...n[3]||(n[3]=[s("《awk 實用指南》",-1)])]),_:1})])])]),n[41]||(n[41]=a("p",null,[s("我從 1984 年開始大量使用 awk，當時我們的小公司買了第一台“真正的”計算機，它運行的是 System V Unix。對我來説，awk 是非常完美的：它有"),a("ruby",null,[s("關聯內存"),a("rt",null,"associative memory")]),s("——將數組視為由字符串而不是數字來索引的。它內置了正則表達式，似乎專為處理數據而生，尤其是在處理數據列時，而且結構緊湊，易於學習。最後，它非常適合在 Unix 工作流使用，從標準輸入或文件中讀取數據並寫入到輸出，數據不需要經過其他的轉換就出現在了輸入流中。")],-1)),n[42]||(n[42]=a("p",null,"説 awk 是我日常計算工具箱中的一個重要部分一點也不為過。然而，在我使用 awk 的過程中，有幾件事讓我感到不滿意。",-1)),a("p",null,[n[5]||(n[5]=s("可能主要的問題是 awk 善於處理以分隔字段呈現的數據，但很奇怪它不善於處理 CSV 文件，因為 CSV 文件的字段被引號包圍時可以嵌入逗號分隔符。另外，自 awk 發明以來，正則表達式已經有了很大的發展，我們需要記住兩套正則表達式的語法規則，而這並不利於編寫無 bug 的代碼。",-1)),e(p,{href:"http://regex.info/blog/2006-09-15/247"},{default:l(()=>[...n[4]||(n[4]=[s("一套這樣的規則已經很糟糕了",-1)])]),_:1}),n[6]||(n[6]=s("。",-1))]),n[43]||(n[43]=a("p",null,[s("由於 awk 是一門簡潔的語言，因此它缺少很多我認為有用的東西，比如更豐富的基礎類型、結構體、"),a("code",null,"switch"),s(" 語句等等。")],-1)),a("p",null,[n[8]||(n[8]=s("相比之下，Groovy 擁有這些能力：可以使用 ",-1)),e(p,{href:"http://opencsv.sourceforge.net/"},{default:l(()=>[...n[7]||(n[7]=[s("OpenCSV 庫",-1)])]),_:1}),n[9]||(n[9]=s("，它很擅長處理 CSV 文件、Java 正則表達式和強大的匹配運算符、豐富的基礎類型、類、",-1)),n[10]||(n[10]=a("code",null,"switch",-1)),n[11]||(n[11]=s(" 語句等等。",-1))]),n[44]||(n[44]=a("p",null,"Groovy 所缺乏的是簡單的面向管道的概念，即把要處理數據作為一個傳入的流，以及把處理過的數據作為一個傳出的流。",-1)),n[45]||(n[45]=a("p",null,"但我的音樂目錄處理框架讓我想到，也許我可以創建一個 Groovy 版本的 awk “引擎”。這就是我寫這篇文章的目的。",-1)),n[46]||(n[46]=a("h3",{id:"安裝-java-和-groovy",tabindex:"-1"},[s("安裝 Java 和 Groovy "),a("a",{class:"header-anchor",href:"#安裝-java-和-groovy","aria-label":"Permalink to “安裝 Java 和 Groovy”"},"​")],-1)),a("p",null,[n[14]||(n[14]=s("Groovy 是基於 Java 的，需要先安裝 Java。最新的、合適的 Java 和 Groovy 版本可能都在你的 Linux 發行版的軟件庫中。Groovy 也可以按照 ",-1)),e(p,{href:"https://groovy.apache.org/download.html"},{default:l(()=>[...n[12]||(n[12]=[s("Groovy 主頁",-1)])]),_:1}),n[15]||(n[15]=s(" 上的説明進行安裝。對於 Linux 用户來説，一個不錯的選擇是 ",-1)),e(p,{href:"https://opensource.com/article/22/3/manage-java-versions-sdkman"},{default:l(()=>[...n[13]||(n[13]=[s("SDKMan",-1)])]),_:1}),n[16]||(n[16]=s("，它可以用來獲得多個版本的 Java、Groovy 和其他許多相關工具。在這篇文章中，我使用的是 SDK 的版本：",-1))]),n[47]||(n[47]=i(`<ul><li>Java：OpenJDK 11 的 11.0.12 的開源版本</li><li>Groovy：3.0.8</li></ul><h3 id="使用-groovy-創建-awk" tabindex="-1">使用 Groovy 創建 awk <a class="header-anchor" href="#使用-groovy-創建-awk" aria-label="Permalink to “使用 Groovy 創建 awk”">​</a></h3><p>這裏的基本想法是將打開一個或多個文件進行處理、將每行分割成字段、以及提供對數據流的訪問等複雜情況封裝在三個部分：</p><ul><li>在處理數據之前</li><li>在處理每行數據時</li><li>在處理完所有數據之後</li></ul><p>我並不打算用 Groovy 來取代 awk。相反，我只是在努力實現我的典型用例，那就是：</p><ul><li>使用一個腳本文件而不是在命令列寫代碼</li><li>處理一個或多個輸入文件</li><li>設置默認的分隔符為 <code>|</code>，並基於這個分隔符分割所有行</li><li>使用 OpenCSV 完成分割工作（awk 做不到）</li></ul><h3 id="框架類" tabindex="-1">框架類 <a class="header-anchor" href="#框架類" aria-label="Permalink to “框架類”">​</a></h3><p>下面是用 Groovy 類實現的 “awk 引擎”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@Grab(&#39;com.opencsv:opencsv:5.6&#39;)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>雖然這看起來是相當多的代碼，但許多行是因為太長換行了（例如，通常你會合並第 38 行和第 39 行，第 41 行和第 42 行，等等）。讓我們逐行看一下。</p>`,10)),a("p",null,[n[18]||(n[18]=s("第 1 行使用 ",-1)),n[19]||(n[19]=a("code",null,"@Grab",-1)),n[20]||(n[20]=s(" 註解從 ",-1)),e(p,{href:"https://mvnrepository.com/artifact/com.opencsv/opencsv"},{default:l(()=>[...n[17]||(n[17]=[s("Maven Central",-1)])]),_:1}),n[21]||(n[21]=s(" 獲取 OpenCSV 庫的 5.6 本週。不需要 XML。",-1))]),n[48]||(n[48]=i(`<p>第 2 行我引入了 OpenCSV 的 <code>CSVReader</code> 類</p><p>第 3 行，像 Java 一樣，我聲明瞭一個 <code>public</code> 實用類 <code>AwkEngine</code>。</p><p>第 11-13 行定義了腳本所使用的 Groovy 閉包實例，作為該類的鈎子。像任何 Groovy 類一樣，它們“默認是 <code>public</code>”，但 Groovy 將這些字段創建為 <code>private</code>，並對其進行外部引用（使用 Groovy 提供的 getter 和 setter 方法）。我將在下面的示例腳本中進一步解釋這個問題。</p><p>第 14-16 行聲明瞭 <code>private</code> 字段 —— 字段分隔符，一個指示文件第一行是否為標題的標誌，以及一個文件名的列表。</p><p>第 17-31 行定義了三個構造函數。第一個接收命令列參數。第二個接收字段的分隔符。第三個接收指示第一行是否為標題的標誌。</p><p>第 31-67 行定義了引擎本身，即 <code>go()</code> 方法。</p><p>第 33 行調用了 <code>onBegin()</code> 閉包（等同於 awk 的 <code>BEGIN {}</code> 語句）。</p><p>第 34 行初始化流的 <code>recordNumber</code>（等同於 awk 的 <code>NR</code> 變量）為 0（注意我這裏是從 00 而不是 1 開始的）。</p><p>第 35-65 行使用 <code>each</code> <code>{}</code> 來循環處理列表中的文件。</p><p>第 36 行初始化文件的 <code>fileRecordNumber</code>（等同於 awk 的 <code>FNR</code> 變量）為 0（從 0 而不是 1 開始）。</p><p>第 37-64 行獲取一個文件對應的 <code>Reader</code> 實例並處理它。</p><p>第 38-39 行獲取一個 <code>CSVReader</code> 實例。</p><p>第 40 行檢測第一行是否為標題。</p><p>如果第一行是標題，那麼在 41-42 行會從第一行獲取字段的標題名字列表。</p><p>第 43-54 行處理其他的行。</p><p>第 44-48 行把字段的值複製到 <code>name:value</code> 的映射中。</p><p>第 49-51 行調用 <code>onEachLine()</code> 閉包（等同於 awk 程序 <code>BEGIN {}</code> 和 <code>END {}</code> 之間的部分，不同的是，這裏不能輸入執行條件），傳入的參數是 <code>name:value</code> 映射、處理過的總行數、文件名和該文件處理過的行數。</p><p>第 52-53 行是處理過的總行數和該文件處理過的行數的自增。</p><p>如果第一行不是標題：</p><p>第 56-62 行處理每一行。</p><p>第 57-59 調用 <code>onEachLine()</code> 閉包，傳入的參數是字段值的數組、處理過的總行數、文件名和該文件處理過的行數。</p><p>第 60-61 行是處理過的總行數和該文件處理過的行數的自增。</p><p>第 66 行調用 <code>onEnd()</code> 閉包（等同於 awk 的 <code>END {}</code>）。</p><p>這就是該框架的內容。現在你可以編譯它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovyc AwkEngine.groovy</span></span></code></pre></div><p>一點註釋：</p><p>如果傳入的參數不是一個文件，編譯就會失敗，並出現標準的 Groovy 堆棧跟蹤，看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Caught: java.io.FileNotFoundException: not-a-file (No such file or directory)</span></span>
<span class="line"><span>java.io.FileNotFoundException: not-a-file (No such file or directory)</span></span>
<span class="line"><span>at AwkEngine$_go_closure1.doCall(AwkEngine.groovy:46)</span></span></code></pre></div><p>OpenCSV 可能會返回 <code>String[]</code> 值，不像 Groovy 中的 <code>List</code> 值那樣方便（例如，數組沒有 <code>each {}</code>）。第 41-42 行將標題字段值數組轉換為 list，因此第 57 行的 <code>fieldsByNumber</code> 可能也應該轉換為 list。</p><h3 id="在腳本中使用這個框架" tabindex="-1">在腳本中使用這個框架 <a class="header-anchor" href="#在腳本中使用這個框架" aria-label="Permalink to “在腳本中使用這個框架”">​</a></h3><p>下面是一個使用 <code>AwkEngine</code> 來處理 <code>/etc/group</code> 之類由冒號分隔並沒有標題的文件的簡單腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def ae = new AwkEngine(args, &#39;:&#39;)</span></span>
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
<span class="line"><span>ae.go()</span></span></code></pre></div><p>第 1 行 調用的有兩個參數的構造函數，傳入了參數列表，並定義冒號為分隔符。</p><p>第 2 行定義一個腳本級的變量 <code>lineCount</code>，用來記錄處理過的行數（注意，Groovy 閉包不要求定義在外部的變量為 <code>final</code>）。</p><p>第 3-5 行定義 <code>onBegin()</code> 閉包，在標準輸出中打印出 “in begin” 字符串。</p><p>第 6-10 行定義 <code>onEachLine()</code> 閉包，打印文件名和前 10 行字段，無論是否為前 10 行，處理過的總行數 <code>lineCount</code> 都會自增。</p><p>第 11-14 行定義 <code>onEnd()</code> 閉包，打印 “in end” 字符串和處理過的總行數。</p><p>第 15 行運行腳本，使用 <code>AwkEngine</code>。</p><p>像下面一樣運行一下腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovy Test1Awk.groovy /etc/group</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><p>當然，編譯框架類生成的 <code>.class</code> 文件需要在 classpath 中，這樣才能正常運行。通常你可以用 <code>jar</code> 把這些 class 文件打包起來。</p><p>我非常喜歡 Groovy 對行為委託的支持，這在其他語言中需要各種詭異的手段。許多年來，Java 需要匿名類和相當多的額外代碼。Lambda 已經在很大程度上解決了這個問題，但它們仍然不能引用其範圍之外的非 final 變量。</p><p>下面是另一個更有趣的腳本，它很容易讓人想起我對 awk 的典型使用方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def ae = new AwkEngine(args, &#39;;&#39;, true)</span></span>
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
<span class="line"><span>ae.go()</span></span></code></pre></div><p>第 1 行調用了三個函數的構造方法，<code>true</code> 表示這是“真正的 CSV” 文件，第一行為標題。由於它是西班牙語的文件，因此它的逗號表示數字的<code>點</code>，標準的分隔符是分號。</p><p>第 2-4 行定義 <code>onBegin()</code> 閉包，這裏什麼也不做。</p><p>第 5 行定義一個（空的）<code>LinkedHashmap</code>，鍵是 String 類型，值是 Integer 類型。數據文件來自於智利最近的人口普查，你要在這個腳本中計算出智利每個地區的人口數量。</p><p>第 6-11 行處理文件中的行（加上標題一共有 180,500 行）—— 請注意在這個案例中，由於你定義 第 1 行為 CSV 列的標題，因此 <code>fields</code> 參數會成為 <code>LinkedHashMap&lt;String,String&gt;</code> 實例。</p><p>第 7-10 行是 <code>regionCount</code> 映射計數增加，鍵是 <code>REGION</code> 字段的值，值是 <code>PERSONAS</code> 字段的值 —— 請注意，與 awk 不同，在 Groovy 中你不能在賦值操作的右邊使用一個不存在的映射而期望得到空值或零值。</p><p>第 12-16 行，打印每個地區的人口數量。</p><p>第 17 行運行腳本，調用 <code>AwkEngine</code> 。</p><p>像下面一樣運行一下腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ groovy Test2Awk.groovy ~/Downloads/Censo2017/ManzanaEntidad_CSV/Censo*csv</span></span>
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
<span class="line"><span>$</span></span></code></pre></div><p>以上為全部內容。對於那些喜歡 awk 但又希望得到更多的東西的人，我希望你能喜歡這種 Groovy 的方法。</p><hr>`,55)),a("p",null,[n[23]||(n[23]=s("via: ",-1)),e(p,{href:"https://opensource.com/article/22/9/awk-groovy"},{default:l(()=>[...n[22]||(n[22]=[s("https://opensource.com/article/22/9/awk-groovy",-1)])]),_:1})]),a("p",null,[n[28]||(n[28]=s("作者：",-1)),e(p,{href:"https://opensource.com/users/clhermansen"},{default:l(()=>[...n[24]||(n[24]=[s("Chris Hermansen",-1)])]),_:1}),n[29]||(n[29]=s(" 選題：",-1)),e(p,{href:"https://github.com/lkxed"},{default:l(()=>[...n[25]||(n[25]=[s("lkxed",-1)])]),_:1}),n[30]||(n[30]=s(" 譯者：",-1)),e(p,{href:"https://github.com/lxbwolf"},{default:l(()=>[...n[26]||(n[26]=[s("lxbwolf",-1)])]),_:1}),n[31]||(n[31]=s(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...n[27]||(n[27]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[34]||(n[34]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[32]||(n[32]=[s("LCTT",-1)])]),_:1}),n[35]||(n[35]=s(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...n[33]||(n[33]=[s("Linux中國",-1)])]),_:1}),n[36]||(n[36]=s(" 榮譽推出",-1))])])}const w=o(c,[["render",g]]);export{y as __pageData,w as default};
