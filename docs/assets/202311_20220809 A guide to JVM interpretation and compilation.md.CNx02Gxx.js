import{_ as l,a0 as t,w as o,s as c,ao as d,I as i,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"JVM 解释和编译指南 | LCTT x X-CMD","titleTemplate":false,"description":"JVM 解释和编译指南 | LCTT (202311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"JVM 解释和编译指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"JVM 解释和编译指南 | LCTT (202311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202311/20220809 A guide to JVM interpretation and compilation","title":"JVM 解释和编译指南","tag":"202311","desc":""},"relativePath":"202311/20220809 A guide to JVM interpretation and compilation.md","filePath":"[post].md"}'),r={name:"202311/20220809 A guide to JVM interpretation and compilation.md"};function h(b,s,g,u,k,m){const n=t("Link");return o(),c("div",null,[s[15]||(s[15]=d(`<h1 id="jvm-解释和编译指南" tabindex="-1">JVM 解释和编译指南 <a class="header-anchor" href="#jvm-解释和编译指南" aria-label="Permalink to “JVM 解释和编译指南”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202311/06/093552kheiob71meqierhd.png" alt=""></p><blockquote><p>通过理解解释、即时编译和预先编译之间的区别，有效地使用它们。</p></blockquote><p>Java 是一种跨平台的编程语言。程序源代码会被编译为 <ruby>字节码<rt>bytecode</rt></ruby>，然后字节码在运行时被转换为 <ruby>机器码<rt>machine code</rt></ruby>。<ruby>解释器<rt>interpreter</rt></ruby> 在物理机器上模拟出的抽象计算机上执行字节码指令。<ruby>即时<rt>just-in-time</rt></ruby>（JIT）编译发生在运行期，而 <ruby>预先<rt>ahead-of-time</rt></ruby>（AOT）编译发生在构建期。</p><p>本文将说明解释器、JIT 和 AOT 分别何时起作用，以及如何在 JIT 和 AOT 之间权衡。</p><h3 id="源代码、字节码、机器码" tabindex="-1">源代码、字节码、机器码 <a class="header-anchor" href="#源代码、字节码、机器码" aria-label="Permalink to “源代码、字节码、机器码”">​</a></h3><p>应用程序通常是由 C、C++ 或 Java 等编程语言编写。用这些高级编程语言编写的指令集合称为源代码。源代码是人类可读的。要在目标机器上执行它，需要将源代码转换为机器可读的机器码。这个转换工作通常是由 <ruby>编译器<rt>compiler</rt></ruby> 来完成的。</p><p>然而，在 Java 中，源代码首先被转换为一种中间形式，称为字节码。字节码是平台无关的，所以 Java 被称为平台无关编程语言。Java 编译器 <code>javac</code> 将源代码转换为字节码。然后解释器解释执行字节码。</p><p>下面是一个简单的 Java 程序, <code>Hello.java</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//Hello.java</span></span>
<span class="line"><span>public class Hello {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>         System.out.println(&quot;Inside Hello World!&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用 <code>javac</code> 编译它，生成包含字节码的 <code>Hello.class</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javac Hello.java</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>Hello.class  Hello.java</span></span></code></pre></div><p>现在，使用 <code>javap</code> 来反汇编 <code>Hello.class</code> 文件的内容。使用 <code>javap</code> 时如果不指定任何选项，它将打印基本信息，包括编译这个 <code>.class</code> 文件的源文件、包名称、公共和受保护字段以及类的方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javap Hello.class</span></span>
<span class="line"><span>Compiled from &quot;Hello.java&quot;</span></span>
<span class="line"><span>public class Hello {</span></span>
<span class="line"><span>    public Hello();</span></span>
<span class="line"><span>    public static void main(java.lang.String[]);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>要查看 <code>.class</code> 文件中的字节码内容，使用 <code>-c</code> 选项：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javap -c Hello.class</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>要获取更详细的信息，使用 <code>-v</code> 选项：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javap -v Hello.class</span></span></code></pre></div><h3 id="解释器-jit-和-aot" tabindex="-1">解释器，JIT 和 AOT <a class="header-anchor" href="#解释器-jit-和-aot" aria-label="Permalink to “解释器，JIT 和 AOT”">​</a></h3><p>解释器负责在物理机器上模拟出的抽象计算机上执行字节码指令。当使用 <code>javac</code> 编译源代码，然后使用 <code>java</code> 执行时，解释器在程序运行时运行并完成它的目标。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javac Hello.java</span></span>
<span class="line"><span>$ java Hello</span></span>
<span class="line"><span>Inside Hello World!</span></span></code></pre></div><p>JIT 编译器也在运行期发挥作用。当解释器解释 Java 程序时，另一个称为运行时 <ruby>分析器<rt>profiler</rt></ruby> 的组件将静默地监视程序的执行，统计各部分代码被解释的次数。基于这些统计信息可以检测出程序的 <ruby>热点<rt>hotspot</rt></ruby>，即那些经常被解释的代码。一旦代码被解释次数超过设定的阈值，它们满足被 JIT 编译器直接转换为机器码的条件。所以 JIT 编译器也被称为分析优化的编译器。从字节码到机器码的转换是在程序运行过程中进行的，因此称为即时编译。JIT 减少了解释器将同一组指令模拟为机器码的负担。</p><p>AOT 编译器在构建期编译代码。在构建时将需要频繁解释和 JIT 编译的代码直接编译为机器码可以缩短 <ruby>Java 虚拟机<rt>Java Virtual Machine</rt></ruby>（JVM） 的<ruby>预热<rt>warm-up</rt></ruby>时间。（LCTT 译注：Java 程序启动后首先字节码被解释执行，此时执行效率较低。等到程序运行了足够的时间后，代码热点被检测出来，JIT 开始发挥作用，程序运行效率提升。JIT 发挥作用之前的过程就是预热。）AOT 是在 Java 9 中引入的一个实验性特性。<code>jaotc</code> 使用 Graal 编译器（它本身也是用 Java 编写的）来实现 AOT 编译。</p><p>以 <code>Hello.java</code> 为例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//Hello.java</span></span>
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
<span class="line"><span>Inside Hello World!</span></span></code></pre></div><h3 id="解释和编译发生的时机" tabindex="-1">解释和编译发生的时机 <a class="header-anchor" href="#解释和编译发生的时机" aria-label="Permalink to “解释和编译发生的时机”">​</a></h3><p>下面通过例子来展示 Java 在什么时候使用解释器，以及 JIT 和 AOT 何时参与进来。这里有一个简单的程序 <code>Demo.java</code> :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//Demo.java</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在这个程序的 <code>main()</code> 方法中创建了一个 <code>Demo</code> 对象的实例，并调用该实例的 <code>square()</code>方法，然后显示 <code>for</code> 循环迭代变量的平方值。编译并运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javac Demo.java</span></span>
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
<span class="line"><span>--------------------------------</span></span></code></pre></div><p>上面的结果是由谁产生的呢？是解释器，JIT 还是 AOT？在目前的情况下，它完全是通过解释产生的。我是怎么得出这个结论的呢？只有代码被解释的次数必须超过某个阈值时，这些热点代码片段才会被加入 JIT 编译队列。只有这时，JIT 编译才会发挥作用。使用以下命令查看 JDK 11 中的该阈值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -XX:+PrintFlagsFinal -version | grep CompileThreshold</span></span>
<span class="line"><span> intx CompileThreshold     = 10000                                      {pd product} {default}</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>openjdk version &quot;11.0.13&quot; 2021-10-19</span></span>
<span class="line"><span>OpenJDK Runtime Environment 18.9 (build 11.0.13+8)</span></span>
<span class="line"><span>OpenJDK 64-Bit Server VM 18.9 (build 11.0.13+8, mixed mode, sharing)</span></span></code></pre></div><p>上面的输出表明，一段代码被解释 10,000 次才符合 JIT 编译的条件。这个阈值是否可以手动调整呢？是否有 JVM 标志可以指示出方法是否被 JIT 编译了呢？答案是肯定的，而且有多种方式可以达到这个目的。</p><p>使用 <code>-XX:+PrintCompilation</code> 选项可以查看一个方法是否被 JIT 编译。除此之外，使用 <code>-Xbatch</code> 标志可以提高输出的可读性。如果解释和 JIT 同时发生，<code>-Xbatch</code> 可以帮助区分两者的输出。使用这些标志如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -Xbatch  -XX:+PrintCompilation  Demo</span></span>
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
<span class="line"><span>--------------------------------</span></span></code></pre></div><p>注意，上面命令的实际输出太长了，这里我只是截取了一部分。输出很长的原因是除了 <code>Demo</code> 程序的代码外，JDK 内部类的函数也被编译了。由于我的重点是 <code>Demo.java</code> 代码，我希望排除内部包的函数来简化输出。通过选项 <code>-XX:CompileCommandFile</code> 可以禁用内部类的 JIT：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -Xbatch -XX:+PrintCompilation -XX:CompileCommandFile=hotspot_compiler Demo</span></span></code></pre></div><p>在选项 <code>-XX:CompileCommandFile</code> 指定的文件 <code>hotspot_compiler</code> 中包含了要排除的包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat hotspot_compiler</span></span>
<span class="line"><span>quiet</span></span>
<span class="line"><span>exclude java/* *</span></span>
<span class="line"><span>exclude jdk/* *</span></span>
<span class="line"><span>exclude sun/* *</span></span></code></pre></div><p>第一行的 <code>quiet</code> 告诉 JVM 不要输出任何关于被排除类的内容。用 <code>-XX:CompileThreshold</code> 将 JIT 阈值设置为 5。这意味着在解释 5 次之后，就会进行 JIT 编译：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -Xbatch -XX:+PrintCompilation -XX:CompileCommandFile=hotspot_compiler \\</span></span>
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
<span class="line"><span>--------------------------------</span></span></code></pre></div><p>好像输出结果跟只用解释时并没有什么区别。根据 Oracle 的文档，这是因为只有禁用 <code>TieredCompilation</code> 时 <code>-XX:CompileThreshold</code> 才会生效：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -Xbatch -XX:+PrintCompilation -XX:CompileCommandFile=hotspot_compiler \\</span></span>
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
<span class="line"><span>Time taken= 52393</span></span></code></pre></div><p>可以看到在第五次迭代之后，代码片段被 JIT 编译了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>--------------------------------</span></span>
<span class="line"><span>5 iteration</span></span>
<span class="line"><span>        214   56        b       Demo::&lt;init&gt; (5 bytes)</span></span>
<span class="line"><span>        215   57        b       Demo::square (16 bytes)</span></span>
<span class="line"><span>Square(i) = 25</span></span>
<span class="line"><span>Time taken= 983002</span></span>
<span class="line"><span>--------------------------------</span></span></code></pre></div><p>可以看到，与 <code>square()</code> 方法一起，构造方法也被 JIT 编译了。在 <code>for</code> 循环中调用 <code>square()</code> 之前要先构造 <code>Demo</code> 实例，所以构造方法的解释次数同样达到 JIT 编译阈值。这个例子说明了在解释发生之后何时 JIT 会介入。</p><p>要查看编译后的代码，需要使用 <code>-XX:+PrintAssembly</code> 标志，该标志仅在库路径中有反汇编器时才起作用。对于 OpenJDK，使用 <code>hsdis</code> 作为反汇编器。下载合适版本的反汇编程序库，在本例中是 <code>hsdis-amd64.so</code>，并将其放在 <code>Java_HOME/lib/server</code> 目录下。使用时还需要在 <code>-XX:+PrintAssembly</code> 之前增加 <code>-XX:+UnlockDiagnosticVMOptions</code> 选项。否则，JVM 会给你一个警告。</p><p>完整命令如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -Xbatch -XX:+PrintCompilation -XX:CompileCommandFile=hotspot_compiler \\ -XX:-TieredCompilation -XX:CompileThreshold=5 -XX:+UnlockDiagnosticVMOptions \\ -XX:+PrintAssembly Demo</span></span>
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
<span class="line"><span>Time taken= 52888</span></span></code></pre></div><p>我只截取了输出中与 <code>Demo.java</code> 相关的部分。</p><p>现在再来看看 AOT 编译。它是在 JDK9 中引入的特性。AOT 是用于生成 <code>.so</code> 这样的库文件的静态编译器。用 AOT 可以将指定的类编译成 <code>.so</code> 库。这个库可以直接执行，而不用解释或 JIT 编译。如果 JVM 没有检测到 AOT 编译的代码，它会进行常规的解释和 JIT 编译。</p><p>使用 AOT 编译的命令如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jaotc --output=libDemo.so Demo.class</span></span></code></pre></div><p>用下面的命令来查看共享库的符号表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nm libDemo.so</span></span></code></pre></div><p>要使用生成的 <code>.so</code> 库，使用 <code>-XX:+UnlockExperimentalVMOptions</code> 和 <code>-XX:AOTLibrary</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -XX:+UnlockExperimentalVMOptions -XX:AOTLibrary=./libDemo.so Demo</span></span>
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
<span class="line"><span>Time taken= 42085</span></span></code></pre></div><p>从输出上看，跟完全用解释的情况没有区别。为了确认 AOT 发挥了作用，使用 <code>-XX:+PrintAOT</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -XX:+UnlockExperimentalVMOptions -XX:AOTLibrary=./libDemo.so -XX:+PrintAOT Demo</span></span>
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
<span class="line"><span>Time taken= 53586</span></span></code></pre></div><p>要确认没有发生 JIT 编译，用如下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -XX:+UnlockExperimentalVMOptions -Xbatch -XX:+PrintCompilation \\ -XX:CompileCommandFile=hotspot_compiler -XX:-TieredCompilation \\ -XX:CompileThreshold=3 -XX:AOTLibrary=./libDemo.so -XX:+PrintAOT Demo</span></span>
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
<span class="line"><span>Time taken= 59554</span></span></code></pre></div><p>需要特别注意的是，修改被 AOT 编译了的源代码后，一定要重新生成 <code>.so</code> 库文件。否则，过时的的 AOT 编译库文件不会起作用。例如，修改 <code>square()</code> 方法，使其计算立方值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//Demo.java</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>重新编译 <code>Demo.java</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java Demo.java</span></span></code></pre></div><p>但不重新生成 <code>libDemo.so</code>。使用下面命令运行 <code>Demo</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -XX:+UnlockExperimentalVMOptions -Xbatch -XX:+PrintCompilation -XX:CompileCommandFile=hotspot_compiler -XX:-TieredCompilation -XX:CompileThreshold=3 -XX:AOTLibrary=./libDemo.so -XX:+PrintAOT Demo</span></span>
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
<span class="line"><span>Time taken= 47132</span></span></code></pre></div><p>可以看到，虽然旧版本的 <code>libDemo.so</code> 被加载了，但 JVM 检测出它已经过时了。每次生成 <code>.class</code> 文件时，都会在类文件中添加一个指纹，并在 AOT 库中保存该指纹。修改源代码后类指纹与旧的 AOT 库中的指纹不匹配了，所以没有执行 AOT 编译生成的原生机器码。从输出可以看出，现在实际上是 JIT 在起作用（注意 <code>-XX:CompileThreshold</code> 被设置为了 3）。</p><h3 id="aot-和-jit-之间的权衡" tabindex="-1">AOT 和 JIT 之间的权衡 <a class="header-anchor" href="#aot-和-jit-之间的权衡" aria-label="Permalink to “AOT 和 JIT 之间的权衡”">​</a></h3><p>如果你的目标是减少 JVM 的预热时间，请使用 AOT，这可以减少运行时负担。问题是 AOT 没有足够的数据来决定哪段代码需要预编译为原生代码。相比之下，JIT 在运行时起作用，却对预热时间有一定的影响。然而，它将有足够的分析数据来更高效地编译和反编译代码。</p><p><em>（题图：MJ/ed3e6e15-56c7-4c1d-aff1-84a225faeeeb）</em></p><hr>`,72)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/22/8/interpret-compile-java"},{default:e(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/22/8/interpret-compile-java",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/jayashree-huttanagoudar"},{default:e(()=>[...s[2]||(s[2]=[a("Jayashree Huttanagoudar",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),p(n,{href:"https://github.com/lkxed"},{default:e(()=>[...s[3]||(s[3]=[a("lkxed",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),p(n,{href:"https://github.com/toknow-gh"},{default:e(()=>[...s[4]||(s[4]=[a("toknow-gh",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const y=l(r,[["render",h]]);export{T as __pageData,y as default};
