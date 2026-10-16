import{_ as l,a0 as t,w as o,s as c,ao as d,I as i,x as a,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"JVM 解釋和編譯指南 | LCTT x X-CMD","titleTemplate":false,"description":"JVM 解釋和編譯指南 | LCTT (202311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"JVM 解釋和編譯指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"JVM 解釋和編譯指南 | LCTT (202311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202311/20220809 A guide to JVM interpretation and compilation","title":"JVM 解釋和編譯指南","tag":"202311","desc":""},"relativePath":"202311/20220809 A guide to JVM interpretation and compilation.md","filePath":"[post].md"}'),r={name:"202311/20220809 A guide to JVM interpretation and compilation.md"};function h(b,s,g,u,k,m){const n=t("Link");return o(),c("div",null,[s[15]||(s[15]=d(`<h1 id="jvm-解釋和編譯指南" tabindex="-1">JVM 解釋和編譯指南 <a class="header-anchor" href="#jvm-解釋和編譯指南" aria-label="Permalink to “JVM 解釋和編譯指南”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202311/06/093552kheiob71meqierhd.png" alt=""></p><blockquote><p>通過理解解釋、即時編譯和預先編譯之間的區別，有效地使用它們。</p></blockquote><p>Java 是一種跨平台的編程語言。程序源代碼會被編譯為 <ruby>字節碼<rt>bytecode</rt></ruby>，然後字節碼在運行時被轉換為 <ruby>機器碼<rt>machine code</rt></ruby>。<ruby>解釋器<rt>interpreter</rt></ruby> 在物理機器上模擬出的抽象計算機上執行字節碼指令。<ruby>即時<rt>just-in-time</rt></ruby>（JIT）編譯發生在運行期，而 <ruby>預先<rt>ahead-of-time</rt></ruby>（AOT）編譯發生在構建期。</p><p>本文將説明解釋器、JIT 和 AOT 分別何時起作用，以及如何在 JIT 和 AOT 之間權衡。</p><h3 id="源代碼、字節碼、機器碼" tabindex="-1">源代碼、字節碼、機器碼 <a class="header-anchor" href="#源代碼、字節碼、機器碼" aria-label="Permalink to “源代碼、字節碼、機器碼”">​</a></h3><p>應用程序通常是由 C、C++ 或 Java 等編程語言編寫。用這些高級編程語言編寫的指令集合稱為源代碼。源代碼是人類可讀的。要在目標機器上執行它，需要將源代碼轉換為機器可讀的機器碼。這個轉換工作通常是由 <ruby>編譯器<rt>compiler</rt></ruby> 來完成的。</p><p>然而，在 Java 中，源代碼首先被轉換為一種中間形式，稱為字節碼。字節碼是平台無關的，所以 Java 被稱為平台無關編程語言。Java 編譯器 <code>javac</code> 將源代碼轉換為字節碼。然後解釋器解釋執行字節碼。</p><p>下面是一個簡單的 Java 程序, <code>Hello.java</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//Hello.java</span></span>
<span class="line"><span>public class Hello {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>         System.out.println(&quot;Inside Hello World!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用 <code>javac</code> 編譯它，生成包含字節碼的 <code>Hello.class</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javac Hello.java</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>Hello.class  Hello.java</span></span></code></pre></div><p>現在，使用 <code>javap</code> 來反彙編 <code>Hello.class</code> 文件的內容。使用 <code>javap</code> 時如果不指定任何選項，它將打印基本信息，包括編譯這個 <code>.class</code> 文件的源文件、包名稱、公共和受保護字段以及類的方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javap Hello.class</span></span>
<span class="line"><span>Compiled from &quot;Hello.java&quot;</span></span>
<span class="line"><span>public class Hello {</span></span>
<span class="line"><span>    public Hello();</span></span>
<span class="line"><span>    public static void main(java.lang.String[]);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>要查看 <code>.class</code> 文件中的字節碼內容，使用 <code>-c</code> 選項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javap -c Hello.class</span></span>
<span class="line"><span>Compiled from &quot;Hello.java&quot;</span></span>
<span class="line"><span>public class Hello {</span></span>
<span class="line"><span>  public Hello();</span></span>
<span class="line"><span>        Code:</span></span>
<span class="line"><span>           0: aload_0</span></span>
<span class="line"><span>           1: invokespecial #1                      // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span>           4: return</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public static void main(java.lang.String[]);</span></span>
<span class="line"><span>        Code:</span></span>
<span class="line"><span>           0: getstatic         #2                      // Field java/lang/System.out:Ljava/io/PrintStream;</span></span>
<span class="line"><span>           3: ldc               #3                      // String Inside Hello World!</span></span>
<span class="line"><span>           5: invokevirtual #4                      // Method    </span></span>
<span class="line"><span>java/io/PrintStream.println:(Ljava/lang/String;)V</span></span>
<span class="line"><span>           8: return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>要獲取更詳細的信息，使用 <code>-v</code> 選項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javap -v Hello.class</span></span></code></pre></div><h3 id="解釋器-jit-和-aot" tabindex="-1">解釋器，JIT 和 AOT <a class="header-anchor" href="#解釋器-jit-和-aot" aria-label="Permalink to “解釋器，JIT 和 AOT”">​</a></h3><p>解釋器負責在物理機器上模擬出的抽象計算機上執行字節碼指令。當使用 <code>javac</code> 編譯源代碼，然後使用 <code>java</code> 執行時，解釋器在程序運行時運行並完成它的目標。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javac Hello.java</span></span>
<span class="line"><span>$ java Hello</span></span>
<span class="line"><span>Inside Hello World!</span></span></code></pre></div><p>JIT 編譯器也在運行期發揮作用。當解釋器解釋 Java 程序時，另一個稱為運行時 <ruby>分析器<rt>profiler</rt></ruby> 的組件將靜默地監視程序的執行，統計各部分代碼被解釋的次數。基於這些統計信息可以檢測出程序的 <ruby>熱點<rt>hotspot</rt></ruby>，即那些經常被解釋的代碼。一旦代碼被解釋次數超過設定的閾值，它們滿足被 JIT 編譯器直接轉換為機器碼的條件。所以 JIT 編譯器也被稱為分析優化的編譯器。從字節碼到機器碼的轉換是在程序運行過程中進行的，因此稱為即時編譯。JIT 減少了解釋器將同一組指令模擬為機器碼的負擔。</p><p>AOT 編譯器在構建期編譯代碼。在構建時將需要頻繁解釋和 JIT 編譯的代碼直接編譯為機器碼可以縮短 <ruby>Java 虛擬機<rt>Java Virtual Machine</rt></ruby>（JVM） 的<ruby>預熱<rt>warm-up</rt></ruby>時間。（LCTT 譯註：Java 程序啓動後首先字節碼被解釋執行，此時執行效率較低。等到程序運行了足夠的時間後，代碼熱點被檢測出來，JIT 開始發揮作用，程序運行效率提升。JIT 發揮作用之前的過程就是預熱。）AOT 是在 Java 9 中引入的一個實驗性特性。<code>jaotc</code> 使用 Graal 編譯器（它本身也是用 Java 編寫的）來實現 AOT 編譯。</p><p>以 <code>Hello.java</code> 為例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//Hello.java</span></span>
<span class="line"><span>public class Hello {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        System.out.println(&quot;Inside Hello World!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ javac Hello.java</span></span>
<span class="line"><span>$ jaotc --output libHello.so Hello.class</span></span>
<span class="line"><span>$ java -XX:+UnlockExperimentalVMOptions -XX:AOTLibrary=./libHello.so Hello</span></span>
<span class="line"><span>Inside Hello World!</span></span></code></pre></div><h3 id="解釋和編譯發生的時機" tabindex="-1">解釋和編譯發生的時機 <a class="header-anchor" href="#解釋和編譯發生的時機" aria-label="Permalink to “解釋和編譯發生的時機”">​</a></h3><p>下面通過例子來展示 Java 在什麼時候使用解釋器，以及 JIT 和 AOT 何時參與進來。這裏有一個簡單的程序 <code>Demo.java</code> :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//Demo.java</span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span>    public int square(int i) throws Exception {</span></span>
<span class="line"><span>        return(i*i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span>        for (int i = 1; i &lt;= 10; i++) {</span></span>
<span class="line"><span>            System.out.println(&quot;call &quot; + Integer.valueOf(i));</span></span>
<span class="line"><span>            long a = System.nanoTime();</span></span>
<span class="line"><span>            Int r = new Demo().square(i);</span></span>
<span class="line"><span>            System.out.println(&quot;Square(i) = &quot; + r);</span></span>
<span class="line"><span>            long b = System.nanoTime();</span></span>
<span class="line"><span>            System.out.println(&quot;elapsed= &quot; + (b-a));</span></span>
<span class="line"><span>            System.out.println(&quot;--------------------------------&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在這個程序的 <code>main()</code> 方法中創建了一個 <code>Demo</code> 對象的實例，並調用該實例的 <code>square()</code>方法，然後顯示 <code>for</code> 循環迭代變量的平方值。編譯並運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javac Demo.java</span></span>
<span class="line"><span>$ java Demo</span></span>
<span class="line"><span>1 iteration</span></span>
<span class="line"><span>Square(i) = 1</span></span>
<span class="line"><span>Time taken= 8432439</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>2 iteration</span></span>
<span class="line"><span>Square(i) = 4</span></span>
<span class="line"><span>Time taken= 54631</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>10 iteration</span></span>
<span class="line"><span>Square(i) = 100</span></span>
<span class="line"><span>Time taken= 66498</span></span>
<span class="line"><span>--------------------------------</span></span></code></pre></div><p>上面的結果是由誰產生的呢？是解釋器，JIT 還是 AOT？在目前的情況下，它完全是通過解釋產生的。我是怎麼得出這個結論的呢？只有代碼被解釋的次數必須超過某個閾值時，這些熱點代碼片段才會被加入 JIT 編譯隊列。只有這時，JIT 編譯才會發揮作用。使用以下命令查看 JDK 11 中的該閾值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -XX:+PrintFlagsFinal -version | grep CompileThreshold</span></span>
<span class="line"><span> intx CompileThreshold     = 10000                                      {pd product} {default}</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>openjdk version &quot;11.0.13&quot; 2021-10-19</span></span>
<span class="line"><span>OpenJDK Runtime Environment 18.9 (build 11.0.13+8)</span></span>
<span class="line"><span>OpenJDK 64-Bit Server VM 18.9 (build 11.0.13+8, mixed mode, sharing)</span></span></code></pre></div><p>上面的輸出表明，一段代碼被解釋 10,000 次才符合 JIT 編譯的條件。這個閾值是否可以手動調整呢？是否有 JVM 標誌可以指示出方法是否被 JIT 編譯了呢？答案是肯定的，而且有多種方式可以達到這個目的。</p><p>使用 <code>-XX:+PrintCompilation</code> 選項可以查看一個方法是否被 JIT 編譯。除此之外，使用 <code>-Xbatch</code> 標誌可以提高輸出的可讀性。如果解釋和 JIT 同時發生，<code>-Xbatch</code> 可以幫助區分兩者的輸出。使用這些標誌如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -Xbatch  -XX:+PrintCompilation  Demo</span></span>
<span class="line"><span>         34        1        b  3           java.util.concurrent.ConcurrentHashMap::tabAt (22 bytes)</span></span>
<span class="line"><span>         35        2         n 0           jdk.internal.misc.Unsafe::getObjectVolatile (native)   </span></span>
<span class="line"><span>         35        3        b  3           java.lang.Object::&lt;init&gt; (1 bytes)</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>        210  269         n 0           java.lang.reflect.Array::newArray (native)   (static)</span></span>
<span class="line"><span>        211  270        b  3           java.lang.String::substring (58 bytes)</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>10 iteration</span></span>
<span class="line"><span>Square(i) = 100</span></span>
<span class="line"><span>Time taken= 50150</span></span>
<span class="line"><span>--------------------------------</span></span></code></pre></div><p>注意，上面命令的實際輸出太長了，這裏我只是截取了一部分。輸出很長的原因是除了 <code>Demo</code> 程序的代碼外，JDK 內部類的函數也被編譯了。由於我的重點是 <code>Demo.java</code> 代碼，我希望排除內部包的函數來簡化輸出。通過選項 <code>-XX:CompileCommandFile</code> 可以禁用內部類的 JIT：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -Xbatch -XX:+PrintCompilation -XX:CompileCommandFile=hotspot_compiler Demo</span></span></code></pre></div><p>在選項 <code>-XX:CompileCommandFile</code> 指定的文件 <code>hotspot_compiler</code> 中包含了要排除的包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat hotspot_compiler</span></span>
<span class="line"><span>quiet</span></span>
<span class="line"><span>exclude java/* *</span></span>
<span class="line"><span>exclude jdk/* *</span></span>
<span class="line"><span>exclude sun/* *</span></span></code></pre></div><p>第一行的 <code>quiet</code> 告訴 JVM 不要輸出任何關於被排除類的內容。用 <code>-XX:CompileThreshold</code> 將 JIT 閾值設置為 5。這意味着在解釋 5 次之後，就會進行 JIT 編譯：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -Xbatch -XX:+PrintCompilation -XX:CompileCommandFile=hotspot_compiler \\</span></span>
<span class="line"><span>-XX:CompileThreshold=5 Demo</span></span>
<span class="line"><span>        47      1       n 0     java.lang.invoke.MethodHandle::linkToStatic(LLLLLL)L (native)   </span></span>
<span class="line"><span>           (static)</span></span>
<span class="line"><span>        47      2       n 0     java.lang.invoke.MethodHandle::invokeBasic(LLLLL)L (native)   </span></span>
<span class="line"><span>        47      3       n 0     java.lang.invoke.MethodHandle::linkToSpecial(LLLLLLL)L (native)   </span></span>
<span class="line"><span>           (static)</span></span>
<span class="line"><span>        48      4       n 0     java.lang.invoke.MethodHandle::linkToStatic(L)I (native)   (static)</span></span>
<span class="line"><span>        48      5       n 0     java.lang.invoke.MethodHandle::invokeBasic()I (native)   </span></span>
<span class="line"><span>        48      6       n 0     java.lang.invoke.MethodHandle::linkToSpecial(LL)I (native)   </span></span>
<span class="line"><span>           (static)</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>        1 iteration</span></span>
<span class="line"><span>        69   40         n 0     java.lang.invoke.MethodHandle::linkToStatic(ILIIL)I (native)   </span></span>
<span class="line"><span>           (static)</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>Square(i) = 1</span></span>
<span class="line"><span>        78   48         n 0     java.lang.invoke.MethodHandle::linkToStatic(ILIJL)I (native)   </span></span>
<span class="line"><span>(static)</span></span>
<span class="line"><span>        79   49         n 0     java.lang.invoke.MethodHandle::invokeBasic(ILIJ)I (native)   </span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>        86   54         n 0     java.lang.invoke.MethodHandle::invokeBasic(J)L (native)   </span></span>
<span class="line"><span>        87   55         n 0     java.lang.invoke.MethodHandle::linkToSpecial(LJL)L (native)   </span></span>
<span class="line"><span>(static)</span></span>
<span class="line"><span>Time taken= 8962738</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>2 iteration</span></span>
<span class="line"><span>Square(i) = 4</span></span>
<span class="line"><span>Time taken= 26759</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>10 iteration</span></span>
<span class="line"><span>Square(i) = 100</span></span>
<span class="line"><span>Time taken= 26492</span></span>
<span class="line"><span>--------------------------------</span></span></code></pre></div><p>好像輸出結果跟只用解釋時並沒有什麼區別。根據 Oracle 的文檔，這是因為只有禁用 <code>TieredCompilation</code> 時 <code>-XX:CompileThreshold</code> 才會生效：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -Xbatch -XX:+PrintCompilation -XX:CompileCommandFile=hotspot_compiler \\</span></span>
<span class="line"><span>-XX:-TieredCompilation -XX:CompileThreshold=5 Demo</span></span>
<span class="line"><span>124     1       n       java.lang.invoke.MethodHandle::linkToStatic(LLLLLL)L (native)   (static)</span></span>
<span class="line"><span>127     2       n       java.lang.invoke.MethodHandle::invokeBasic(LLLLL)L (native)   </span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>1 iteration</span></span>
<span class="line"><span>        187   40        n       java.lang.invoke.MethodHandle::linkToStatic(ILIIL)I (native)   (static)</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>(native)   (static)</span></span>
<span class="line"><span>        212   54        n       java.lang.invoke.MethodHandle::invokeBasic(J)L (native)   </span></span>
<span class="line"><span>        212   55        n       java.lang.invoke.MethodHandle::linkToSpecial(LJL)L (native)   (static)</span></span>
<span class="line"><span>Time taken= 12337415</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>4 iteration</span></span>
<span class="line"><span>Square(i) = 16</span></span>
<span class="line"><span>Time taken= 37183</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>5 iteration</span></span>
<span class="line"><span>        214   56        b       Demo::&lt;init&gt; (5 bytes)</span></span>
<span class="line"><span>        215   57        b       Demo::square (16 bytes)</span></span>
<span class="line"><span>Square(i) = 25</span></span>
<span class="line"><span>Time taken= 983002</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>6 iteration</span></span>
<span class="line"><span>Square(i) = 36</span></span>
<span class="line"><span>Time taken= 81589</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>10 iteration</span></span>
<span class="line"><span>Square(i) = 100</span></span>
<span class="line"><span>Time taken= 52393</span></span></code></pre></div><p>可以看到在第五次迭代之後，代碼片段被 JIT 編譯了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--------------------------------</span></span>
<span class="line"><span>5 iteration</span></span>
<span class="line"><span>        214   56        b       Demo::&lt;init&gt; (5 bytes)</span></span>
<span class="line"><span>        215   57        b       Demo::square (16 bytes)</span></span>
<span class="line"><span>Square(i) = 25</span></span>
<span class="line"><span>Time taken= 983002</span></span>
<span class="line"><span>--------------------------------</span></span></code></pre></div><p>可以看到，與 <code>square()</code> 方法一起，構造方法也被 JIT 編譯了。在 <code>for</code> 循環中調用 <code>square()</code> 之前要先構造 <code>Demo</code> 實例，所以構造方法的解釋次數同樣達到 JIT 編譯閾值。這個例子説明了在解釋發生之後何時 JIT 會介入。</p><p>要查看編譯後的代碼，需要使用 <code>-XX:+PrintAssembly</code> 標誌，該標誌僅在庫路徑中有反彙編器時才起作用。對於 OpenJDK，使用 <code>hsdis</code> 作為反彙編器。下載合適版本的反彙編程序庫，在本例中是 <code>hsdis-amd64.so</code>，並將其放在 <code>Java_HOME/lib/server</code> 目錄下。使用時還需要在 <code>-XX:+PrintAssembly</code> 之前增加 <code>-XX:+UnlockDiagnosticVMOptions</code> 選項。否則，JVM 會給你一個警告。</p><p>完整命令如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -Xbatch -XX:+PrintCompilation -XX:CompileCommandFile=hotspot_compiler \\ -XX:-TieredCompilation -XX:CompileThreshold=5 -XX:+UnlockDiagnosticVMOptions \\ -XX:+PrintAssembly Demo</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>5 iteration</span></span>
<span class="line"><span>        178   56        b       Demo::&lt;init&gt; (5 bytes)</span></span>
<span class="line"><span>Compiled method (c2)    178   56                Demo::&lt;init&gt; (5 bytes)</span></span>
<span class="line"><span> total in heap  [0x00007fd4d08dad10,0x00007fd4d08dafe0] = 720</span></span>
<span class="line"><span> relocation     [0x00007fd4d08dae88,0x00007fd4d08daea0] = 24</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span> handler table  [0x00007fd4d08dafc8,0x00007fd4d08dafe0] = 24</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span> dependencies   [0x00007fd4d08db3c0,0x00007fd4d08db3c8] = 8</span></span>
<span class="line"><span> handler table  [0x00007fd4d08db3c8,0x00007fd4d08db3f8] = 48</span></span>
<span class="line"><span>----------------------------------------------------------------------</span></span>
<span class="line"><span>Demo.square(I)I  [0x00007fd4d08db1c0, 0x00007fd4d08db2b8]  248 bytes</span></span>
<span class="line"><span>[Entry Point]</span></span>
<span class="line"><span>[Constants]</span></span>
<span class="line"><span>  # {method} {0x00007fd4b841f4b0} &#39;square&#39; &#39;(I)I&#39; in &#39;Demo&#39;</span></span>
<span class="line"><span>  # this:       rsi:rsi   = &#39;Demo&#39;</span></span>
<span class="line"><span>  # parm0:      rdx     = int</span></span>
<span class="line"><span>  #             [sp+0x20]  (sp of caller)</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>[Stub Code]</span></span>
<span class="line"><span>  0x00007fd4d08db280: movabs $0x0,%rbx          ;   {no_reloc}</span></span>
<span class="line"><span>  0x00007fd4d08db28a: jmpq   0x00007fd4d08db28a  ;   {runtime_call}</span></span>
<span class="line"><span>  0x00007fd4d08db28f: movabs $0x0,%rbx          ;   {static_stub}</span></span>
<span class="line"><span>  0x00007fd4d08db299: jmpq   0x00007fd4d08db299  ;   {runtime_call}</span></span>
<span class="line"><span>[Exception Handler]</span></span>
<span class="line"><span>  0x00007fd4d08db29e: jmpq   0x00007fd4d08bb880  ;   {runtime_call ExceptionBlob}</span></span>
<span class="line"><span>[Deopt Handler Code]</span></span>
<span class="line"><span>  0x00007fd4d08db2a3: callq  0x00007fd4d08db2a8</span></span>
<span class="line"><span>  0x00007fd4d08db2a8: subq   $0x5,(%rsp)</span></span>
<span class="line"><span>  0x00007fd4d08db2ad: jmpq   0x00007fd4d08a01a0  ;   {runtime_call DeoptimizationBlob}</span></span>
<span class="line"><span>  0x00007fd4d08db2b2: hlt    </span></span>
<span class="line"><span>  0x00007fd4d08db2b3: hlt    </span></span>
<span class="line"><span>  0x00007fd4d08db2b4: hlt    </span></span>
<span class="line"><span>  0x00007fd4d08db2b5: hlt    </span></span>
<span class="line"><span>  0x00007fd4d08db2b6: hlt    </span></span>
<span class="line"><span>  0x00007fd4d08db2b7: hlt    </span></span>
<span class="line"><span>ImmutableOopMap{rbp=NarrowOop }pc offsets: 96</span></span>
<span class="line"><span>ImmutableOopMap{}pc offsets: 112</span></span>
<span class="line"><span>ImmutableOopMap{rbp=Oop }pc offsets: 148 Square(i) = 25</span></span>
<span class="line"><span>Time taken= 2567698</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>6 iteration</span></span>
<span class="line"><span>Square(i) = 36</span></span>
<span class="line"><span>Time taken= 76752</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>10 iteration</span></span>
<span class="line"><span>Square(i) = 100</span></span>
<span class="line"><span>Time taken= 52888</span></span></code></pre></div><p>我只截取了輸出中與 <code>Demo.java</code> 相關的部分。</p><p>現在再來看看 AOT 編譯。它是在 JDK9 中引入的特性。AOT 是用於生成 <code>.so</code> 這樣的庫文件的靜態編譯器。用 AOT 可以將指定的類編譯成 <code>.so</code> 庫。這個庫可以直接執行，而不用解釋或 JIT 編譯。如果 JVM 沒有檢測到 AOT 編譯的代碼，它會進行常規的解釋和 JIT 編譯。</p><p>使用 AOT 編譯的命令如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jaotc --output=libDemo.so Demo.class</span></span></code></pre></div><p>用下面的命令來查看共享庫的符號表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nm libDemo.so</span></span></code></pre></div><p>要使用生成的 <code>.so</code> 庫，使用 <code>-XX:+UnlockExperimentalVMOptions</code> 和 <code>-XX:AOTLibrary</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -XX:+UnlockExperimentalVMOptions -XX:AOTLibrary=./libDemo.so Demo</span></span>
<span class="line"><span>1 iteration</span></span>
<span class="line"><span>Square(i) = 1</span></span>
<span class="line"><span>Time taken= 7831139</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>2 iteration</span></span>
<span class="line"><span>Square(i) = 4</span></span>
<span class="line"><span>Time taken= 36619</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>10 iteration</span></span>
<span class="line"><span>Square(i) = 100</span></span>
<span class="line"><span>Time taken= 42085</span></span></code></pre></div><p>從輸出上看，跟完全用解釋的情況沒有區別。為了確認 AOT 發揮了作用，使用 <code>-XX:+PrintAOT</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -XX:+UnlockExperimentalVMOptions -XX:AOTLibrary=./libDemo.so -XX:+PrintAOT Demo</span></span>
<span class="line"><span>         28        1         loaded        ./libDemo.so  aot library</span></span>
<span class="line"><span>         80        1         aot[ 1]   Demo.main([Ljava/lang/String;)V</span></span>
<span class="line"><span>         80        2         aot[ 1]   Demo.square(I)I</span></span>
<span class="line"><span>         80        3         aot[ 1]   Demo.&lt;init&gt;()V</span></span>
<span class="line"><span>1 iteration</span></span>
<span class="line"><span>Square(i) = 1</span></span>
<span class="line"><span>Time taken= 7252921</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>2 iteration</span></span>
<span class="line"><span>Square(i) = 4</span></span>
<span class="line"><span>Time taken= 57443</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>10 iteration</span></span>
<span class="line"><span>Square(i) = 100</span></span>
<span class="line"><span>Time taken= 53586</span></span></code></pre></div><p>要確認沒有發生 JIT 編譯，用如下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -XX:+UnlockExperimentalVMOptions -Xbatch -XX:+PrintCompilation \\ -XX:CompileCommandFile=hotspot_compiler -XX:-TieredCompilation \\ -XX:CompileThreshold=3 -XX:AOTLibrary=./libDemo.so -XX:+PrintAOT Demo</span></span>
<span class="line"><span>         19        1         loaded        ./libDemo.so  aot library</span></span>
<span class="line"><span>         77        1         aot[ 1]   Demo.square(I)I</span></span>
<span class="line"><span>         77        2         aot[ 1]   Demo.main([Ljava/lang/String;)V</span></span>
<span class="line"><span>         77        3         aot[ 1]   Demo.&lt;init&gt;()V</span></span>
<span class="line"><span>         77        2         aot[ 1]   Demo.main([Ljava/lang/String;)V   made not entrant</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>4 iteration</span></span>
<span class="line"><span>Square(i) = 16</span></span>
<span class="line"><span>Time taken= 43366</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>10 iteration</span></span>
<span class="line"><span>Square(i) = 100</span></span>
<span class="line"><span>Time taken= 59554</span></span></code></pre></div><p>需要特別注意的是，修改被 AOT 編譯了的源代碼後，一定要重新生成 <code>.so</code> 庫文件。否則，過時的的 AOT 編譯庫文件不會起作用。例如，修改 <code>square()</code> 方法，使其計算立方值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//Demo.java</span></span>
<span class="line"><span>public class Demo {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int square(int i) throws Exception {</span></span>
<span class="line"><span>        return(i*i*i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span>        for (int i = 1; i &lt;= 10; i++) {</span></span>
<span class="line"><span>          System.out.println(&quot;&quot; + Integer.valueOf(i)+&quot; iteration&quot;);</span></span>
<span class="line"><span>          long start = System.nanoTime();</span></span>
<span class="line"><span>          int r= new Demo().square(i);</span></span>
<span class="line"><span>          System.out.println(&quot;Square(i) = &quot; + r);</span></span>
<span class="line"><span>          long end = System.nanoTime();</span></span>
<span class="line"><span>          System.out.println(&quot;Time taken= &quot; + (end-start));</span></span>
<span class="line"><span>          System.out.println(&quot;--------------------------------&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重新編譯 <code>Demo.java</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java Demo.java</span></span></code></pre></div><p>但不重新生成 <code>libDemo.so</code>。使用下面命令運行 <code>Demo</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -XX:+UnlockExperimentalVMOptions -Xbatch -XX:+PrintCompilation -XX:CompileCommandFile=hotspot_compiler -XX:-TieredCompilation -XX:CompileThreshold=3 -XX:AOTLibrary=./libDemo.so -XX:+PrintAOT Demo</span></span>
<span class="line"><span>         20        1         loaded        ./libDemo.so  aot library</span></span>
<span class="line"><span>         74        1         n           java.lang.invoke.MethodHandle::linkToStatic(LLLLLL)L (native)   (static)</span></span>
<span class="line"><span>2 iteration</span></span>
<span class="line"><span>sqrt(i) = 8</span></span>
<span class="line"><span>Time taken= 43838</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>3 iteration</span></span>
<span class="line"><span>        137   56        b            Demo::&lt;init&gt; (5 bytes)</span></span>
<span class="line"><span>        138   57        b            Demo::square (6 bytes)</span></span>
<span class="line"><span>sqrt(i) = 27</span></span>
<span class="line"><span>Time taken= 534649</span></span>
<span class="line"><span>--------------------------------</span></span>
<span class="line"><span>4 iteration</span></span>
<span class="line"><span>sqrt(i) = 64</span></span>
<span class="line"><span>Time taken= 51916</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>10 iteration</span></span>
<span class="line"><span>sqrt(i) = 1000</span></span>
<span class="line"><span>Time taken= 47132</span></span></code></pre></div><p>可以看到，雖然舊版本的 <code>libDemo.so</code> 被加載了，但 JVM 檢測出它已經過時了。每次生成 <code>.class</code> 文件時，都會在類文件中添加一個指紋，並在 AOT 庫中保存該指紋。修改源代碼後類指紋與舊的 AOT 庫中的指紋不匹配了，所以沒有執行 AOT 編譯生成的原生機器碼。從輸出可以看出，現在實際上是 JIT 在起作用（注意 <code>-XX:CompileThreshold</code> 被設置為了 3）。</p><h3 id="aot-和-jit-之間的權衡" tabindex="-1">AOT 和 JIT 之間的權衡 <a class="header-anchor" href="#aot-和-jit-之間的權衡" aria-label="Permalink to “AOT 和 JIT 之間的權衡”">​</a></h3><p>如果你的目標是減少 JVM 的預熱時間，請使用 AOT，這可以減少運行時負擔。問題是 AOT 沒有足夠的數據來決定哪段代碼需要預編譯為原生代碼。相比之下，JIT 在運行時起作用，卻對預熱時間有一定的影響。然而，它將有足夠的分析數據來更高效地編譯和反編譯代碼。</p><p><em>（題圖：MJ/ed3e6e15-56c7-4c1d-aff1-84a225faeeeb）</em></p><hr>`,72)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/22/8/interpret-compile-java"},{default:e(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/22/8/interpret-compile-java",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/jayashree-huttanagoudar"},{default:e(()=>[...s[2]||(s[2]=[a("Jayashree Huttanagoudar",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),p(n,{href:"https://github.com/lkxed"},{default:e(()=>[...s[3]||(s[3]=[a("lkxed",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),p(n,{href:"https://github.com/toknow-gh"},{default:e(()=>[...s[4]||(s[4]=[a("toknow-gh",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const y=l(r,[["render",h]]);export{T as __pageData,y as default};
