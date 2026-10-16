import{_ as t,a0 as o,w as d,s as r,ao as l,I as n,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"Java 中初始化数组 | LCTT x X-CMD","titleTemplate":false,"description":"Java 中初始化数组 | LCTT (201911) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Java 中初始化数组 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Java 中初始化数组 | LCTT (201911) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201911/20191022 Initializing arrays in Java","title":"Java 中初始化数组","tag":"201911","desc":""},"relativePath":"201911/20191022 Initializing arrays in Java.md","filePath":"[post].md"}'),c={name:"201911/20191022 Initializing arrays in Java.md"};function g(u,s,k,h,b,f){const i=o("Link");return d(),r("div",null,[s[55]||(s[55]=l('<h1 id="java-中初始化数组" tabindex="-1">Java 中初始化数组 <a class="header-anchor" href="#java-中初始化数组" aria-label="Permalink to “Java 中初始化数组”">​</a></h1><blockquote><p>数组是一种有用的数据类型，用于管理在连续内存位置中建模最好的集合元素。下面是如何有效地使用它们。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/java-coffee-mug.jpg?itok=Bj6rQo8r" alt="Coffee beans and a cup of coffee" title="Coffee beans and a cup of coffee"></p><p>有使用 C 或者 FORTRAN 语言编程经验的人会对数组的概念很熟悉。它们基本上是一个连续的内存块，其中每个位置都是某种数据类型：整型、浮点型或者诸如此类的数据类型。</p><p>Java 的情况与此类似，但是有一些额外的问题。</p><h3 id="一个数组的示例" tabindex="-1">一个数组的示例 <a class="header-anchor" href="#一个数组的示例" aria-label="Permalink to “一个数组的示例”">​</a></h3><p>让我们在 Java 中创建一个长度为 10 的整型数组：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int[] ia = new int[10];</span></span></code></pre></div><p>上面的代码片段会发生什么？从左到右依次是：</p>',9)),n("ol",null,[s[9]||(s[9]=l("<li>最左边的 <code>int[]</code> 将变量的<em>类型</em>声明为 <code>int</code> 数组（由 <code>[]</code> 表示）。</li><li>它的右边是变量的名称，当前为 <code>ia</code>。</li><li>接下来，<code>=</code> 告诉我们，左侧定义的变量赋值为右侧的内容。</li>",3)),n("li",null,[s[1]||(s[1]=a("在 ",-1)),s[2]||(s[2]=n("code",null,"=",-1)),s[3]||(s[3]=a(" 的右侧，我们看到了 ",-1)),s[4]||(s[4]=n("code",null,"new",-1)),s[5]||(s[5]=a("，它在 Java 中表示一个对象正在",-1)),s[6]||(s[6]=n("em",null,"被初始化中",-1)),s[7]||(s[7]=a("，这意味着已为其分配存储空间并调用了其构造函数（",-1)),p(i,{href:"https://opensource.com/article/19/8/what-object-java"},{default:e(()=>[...s[0]||(s[0]=[a("请参见此处以获取更多信息",-1)])]),_:1}),s[8]||(s[8]=a("）。",-1))]),s[10]||(s[10]=n("li",null,[a("然后，我们看到 "),n("code",null,"int[10]"),a("，它告诉我们正在初始化的这个对象是包含 10 个整型的数组。")],-1))]),s[56]||(s[56]=l(`<p>因为 Java 是强类型的，所以变量 <code>ia</code> 的类型必须跟 <code>=</code> 右侧表达式的类型兼容。</p><h3 id="初始化示例数组" tabindex="-1">初始化示例数组 <a class="header-anchor" href="#初始化示例数组" aria-label="Permalink to “初始化示例数组”">​</a></h3><p>让我们把这个简单的数组放在一段代码中，并尝试运行一下。将以下内容保存到一个名为 <code>Test1.java</code> 的文件中，使用 <code>javac</code> 编译，使用 <code>java</code> 运行（当然是在终端中）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import java.lang.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Test1 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        int[] ia = new int[10];                              // 见下文注 1</span></span>
<span class="line"><span>        System.out.println(&quot;ia is &quot; + ia.getClass());        // 见下文注 2</span></span>
<span class="line"><span>        for (int i = 0; i &lt; ia.length; i++)                  // 见下文注 3</span></span>
<span class="line"><span>            System.out.println(&quot;ia[&quot; + i + &quot;] = &quot; + ia[i]);  // 见下文注 4</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>让我们来看看最重要的部分。</p><ol><li>我们声明和初始化了长度为 10 的整型数组，即 <code>ia</code>，这显而易见。</li><li>在下面的行中，我们看到表达式 <code>ia.getClass()</code>。没错，<code>ia</code> 是属于一个<em>类</em>的<em>对象</em>，这行代码将告诉我们是哪个类。</li><li>在紧接的下一行中，我们看到了一个循环 <code>for (int i = 0; i &lt; ia.length; i++)</code>，它定义了一个循环索引变量 <code>i</code>，该变量遍历了从 0 到比 <code>ia.length</code> 小 1 的序列，这个表达式告诉我们在数组 <code>ia</code> 中定义了多少个元素。</li><li>接下来，循环体打印出 <code>ia</code> 的每个元素的值。</li></ol><p>当这个程序编译和运行时，它产生以下结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>me@mydesktop:~/Java$ javac Test1.java</span></span>
<span class="line"><span>me@mydesktop:~/Java$ java Test1</span></span>
<span class="line"><span>ia is class [I</span></span>
<span class="line"><span>ia[0] = 0</span></span>
<span class="line"><span>ia[1] = 0</span></span>
<span class="line"><span>ia[2] = 0</span></span>
<span class="line"><span>ia[3] = 0</span></span>
<span class="line"><span>ia[4] = 0</span></span>
<span class="line"><span>ia[5] = 0</span></span>
<span class="line"><span>ia[6] = 0</span></span>
<span class="line"><span>ia[7] = 0</span></span>
<span class="line"><span>ia[8] = 0</span></span>
<span class="line"><span>ia[9] = 0</span></span>
<span class="line"><span>me@mydesktop:~/Java$</span></span></code></pre></div><p><code>ia.getClass()</code> 的输出的字符串表示形式是 <code>[I</code>，它是“整数数组”的简写。与 C 语言类似，Java 数组以第 0 个元素开始，扩展到第 <code>&lt;数组大小&gt; - 1</code> 个元素。如上所见，我们可以看到数组 <code>ia</code> 的每个元素都（似乎由数组构造函数）设置为零。</p><p>所以，就这些吗？声明类型，使用适当的初始化器，就完成了吗?</p><p>好吧，并没有。在 Java 中有许多其它方法来初始化数组。</p><h3 id="为什么我要初始化一个数组-有其它方式吗" tabindex="-1">为什么我要初始化一个数组，有其它方式吗？ <a class="header-anchor" href="#为什么我要初始化一个数组-有其它方式吗" aria-label="Permalink to “为什么我要初始化一个数组，有其它方式吗？”">​</a></h3><p>像所有好的问题一样，这个问题的答案是“视情况而定”。在这种情况下，答案取决于初始化后我们希望对数组做什么。</p><p>在某些情况下，数组自然会作为一种累加器出现。例如，假设我们正在编程实现计算小型办公室中一组电话分机接收和拨打的电话数量。一共有 8 个分机，编号为 1 到 8，加上话务员的分机，编号为 0。 因此，我们可以声明两个数组：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int[] callsMade;</span></span>
<span class="line"><span>int[] callsReceived;</span></span></code></pre></div><p>然后，每当我们开始一个新的累计呼叫统计数据的周期时，我们就将每个数组初始化为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>callsMade = new int[9];</span></span>
<span class="line"><span>callsReceived = new int[9];</span></span></code></pre></div><p>在每个累计通话统计数据的最后阶段，我们可以打印出统计数据。粗略地说，我们可能会看到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import java.lang.*;</span></span>
<span class="line"><span>import java.io.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Test2 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int[] callsMade;</span></span>
<span class="line"><span>        int[] callsReceived;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 初始化呼叫计数器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        callsMade = new int[9];</span></span>
<span class="line"><span>        callsReceived = new int[9];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 处理呼叫……</span></span>
<span class="line"><span>        //   分机拨打电话：callsMade[ext]++</span></span>
<span class="line"><span>        //   分机接听电话：callsReceived[ext]++</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 汇总通话统计</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        System.out.printf(&quot;%3s%25s%25s\\n&quot;, &quot;ext&quot;, &quot; calls made&quot;,</span></span>
<span class="line"><span>                &quot;calls received&quot;);</span></span>
<span class="line"><span>        for (int ext = 0; ext &lt; callsMade.length; ext++) {</span></span>
<span class="line"><span>            System.out.printf(&quot;%3d%25d%25d\\n&quot;, ext,</span></span>
<span class="line"><span>                    callsMade[ext], callsReceived[ext]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这会产生这样的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>me@mydesktop:~/Java$ javac Test2.java</span></span>
<span class="line"><span>me@mydesktop:~/Java$ java Test2</span></span>
<span class="line"><span>ext               calls made           calls received</span></span>
<span class="line"><span>  0                        0                        0</span></span>
<span class="line"><span>  1                        0                        0</span></span>
<span class="line"><span>  2                        0                        0</span></span>
<span class="line"><span>  3                        0                        0</span></span>
<span class="line"><span>  4                        0                        0</span></span>
<span class="line"><span>  5                        0                        0</span></span>
<span class="line"><span>  6                        0                        0</span></span>
<span class="line"><span>  7                        0                        0</span></span>
<span class="line"><span>  8                        0                        0</span></span>
<span class="line"><span>me@mydesktop:~/Java$</span></span></code></pre></div><p>看来这一天呼叫中心不是很忙。</p><p>在上面的累加器示例中，我们看到由数组初始化程序设置的零起始值可以满足我们的需求。但是在其它情况下，这个起始值可能不是正确的选择。</p><p>例如，在某些几何计算中，我们可能需要将二维数组初始化为单位矩阵（除沿主对角线———左上角到右下角——以外所有全是零）。我们可以选择这样做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>double[][] m = new double[3][3];</span></span>
<span class="line"><span>for (int d = 0; d &lt; 3; d++) {</span></span>
<span class="line"><span>    m[d][d] = 1.0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这种情况下，我们依靠数组初始化器 <code>new double[3][3]</code> 将数组设置为零，然后使用循环将主对角线上的元素设置为 1。在这种简单情况下，我们可以使用 Java 提供的快捷方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>double[][] m = {</span></span>
<span class="line"><span>        {1.0, 0.0, 0.0},</span></span>
<span class="line"><span>        {0.0, 1.0, 0.0},</span></span>
<span class="line"><span>        {0.0, 0.0, 1.0}};</span></span></code></pre></div><p>这种可视结构特别适用于这种应用程序，在这种应用程序中，它便于复查数组的实际布局。但是在这种情况下，行数和列数只在运行时确定时，我们可能会看到这样的东西:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int nrc;</span></span>
<span class="line"><span>// 一些代码确定行数和列数 = nrc</span></span>
<span class="line"><span>double[][] m = new double[nrc][nrc];</span></span>
<span class="line"><span>for (int d = 0; d &lt; nrc; d++) {</span></span>
<span class="line"><span>    m[d][d] = 1.0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>值得一提的是，Java 中的二维数组实际上是数组的数组，没有什么能阻止无畏的程序员让这些第二层数组中的每个数组的长度都不同。也就是说，下面这样的事情是完全合法的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int [][] differentLengthRows = {</span></span>
<span class="line"><span>     {1, 2, 3, 4, 5},</span></span>
<span class="line"><span>     {6, 7, 8, 9},</span></span>
<span class="line"><span>     {10, 11, 12},</span></span>
<span class="line"><span>     {13, 14},</span></span>
<span class="line"><span>     {15}};</span></span></code></pre></div>`,31)),n("p",null,[s[12]||(s[12]=a("在涉及不规则形状矩阵的各种线性代数应用中，可以应用这种类型的结构（有关更多信息，请参见",-1)),p(i,{href:"https://en.wikipedia.org/wiki/Irregular_matrix"},{default:e(()=>[...s[11]||(s[11]=[a("此 Wikipedia 文章",-1)])]),_:1}),s[13]||(s[13]=a("）。除此之外，既然我们了解到二维数组实际上是数组的数组，那么以下内容也就不足为奇了：",-1))]),s[57]||(s[57]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>differentLengthRows.length</span></span></code></pre></div><p>可以告诉我们二维数组 <code>differentLengthRows</code> 的行数，并且：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>differentLengthRows[i].length</span></span></code></pre></div><p>告诉我们 <code>differentLengthRows</code> 第 <code>i</code> 行的列数。</p><h3 id="深入理解数组" tabindex="-1">深入理解数组 <a class="header-anchor" href="#深入理解数组" aria-label="Permalink to “深入理解数组”">​</a></h3><p>考虑到在运行时确定数组大小的想法，我们看到数组在实例化之前仍需要我们知道该大小。但是，如果在处理完所有数据之前我们不知道大小怎么办？这是否意味着我们必须先处理一次以找出数组的大小，然后再次处理？这可能很难做到，尤其是如果我们只有一次机会使用数据时。</p>',6)),n("p",null,[p(i,{href:"https://en.wikipedia.org/wiki/Java_collections_framework"},{default:e(()=>[...s[14]||(s[14]=[a("Java 集合框架",-1)])]),_:1}),s[16]||(s[16]=a("很好地解决了这个问题。提供的其中一项是 ",-1)),s[17]||(s[17]=n("code",null,"ArrayList",-1)),s[18]||(s[18]=a(" 类，它类似于数组，但可以动态扩展。为了演示 ",-1)),s[19]||(s[19]=n("code",null,"ArrayList",-1)),s[20]||(s[20]=a(" 的工作原理，让我们创建一个 ",-1)),s[21]||(s[21]=n("code",null,"ArrayList",-1)),s[22]||(s[22]=a(" 对象并将其初始化为前 20 个",-1)),p(i,{href:"https://en.wikipedia.org/wiki/Fibonacci_number"},{default:e(()=>[...s[15]||(s[15]=[a("斐波那契数字",-1)])]),_:1}),s[23]||(s[23]=a("：",-1))]),s[58]||(s[58]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import java.lang.*;</span></span>
<span class="line"><span>import java.util.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Test3 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ArrayList&lt;Integer&gt; fibos = new ArrayList&lt;Integer&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        fibos.add(0);</span></span>
<span class="line"><span>        fibos.add(1);</span></span>
<span class="line"><span>        for (int i = 2; i &lt; 20; i++) {</span></span>
<span class="line"><span>            fibos.add(fibos.get(i - 1) + fibos.get(i - 2));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (int i = 0; i &lt; fibos.size(); i++) {</span></span>
<span class="line"><span>            System.out.println(&quot;fibonacci &quot; + i + &quot; = &quot; + fibos.get(i));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的代码中，我们看到：</p><ul><li>用于存储多个 <code>Integer</code> 的 <code>ArrayList</code> 的声明和实例化。</li><li>使用 <code>add()</code> 附加到 <code>ArrayList</code> 实例。</li><li>使用 <code>get()</code> 通过索引号检索元素。</li><li>使用 <code>size()</code> 来确定 <code>ArrayList</code> 实例中已经有多少个元素。</li></ul><p>这里没有展示 <code>put()</code> 方法，它的作用是将一个值放在给定的索引号上。</p><p>该程序的输出为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fibonacci 0 = 0</span></span>
<span class="line"><span>fibonacci 1 = 1</span></span>
<span class="line"><span>fibonacci 2 = 1</span></span>
<span class="line"><span>fibonacci 3 = 2</span></span>
<span class="line"><span>fibonacci 4 = 3</span></span>
<span class="line"><span>fibonacci 5 = 5</span></span>
<span class="line"><span>fibonacci 6 = 8</span></span>
<span class="line"><span>fibonacci 7 = 13</span></span>
<span class="line"><span>fibonacci 8 = 21</span></span>
<span class="line"><span>fibonacci 9 = 34</span></span>
<span class="line"><span>fibonacci 10 = 55</span></span>
<span class="line"><span>fibonacci 11 = 89</span></span>
<span class="line"><span>fibonacci 12 = 144</span></span>
<span class="line"><span>fibonacci 13 = 233</span></span>
<span class="line"><span>fibonacci 14 = 377</span></span>
<span class="line"><span>fibonacci 15 = 610</span></span>
<span class="line"><span>fibonacci 16 = 987</span></span>
<span class="line"><span>fibonacci 17 = 1597</span></span>
<span class="line"><span>fibonacci 18 = 2584</span></span>
<span class="line"><span>fibonacci 19 = 4181</span></span></code></pre></div><p><code>ArrayList</code> 实例也可以通过其它方式初始化。例如，可以给 <code>ArrayList</code> 构造器提供一个数组，或者在编译过程中知道初始元素时也可以使用 <code>List.of()</code> 和 <code>array.aslist()</code> 方法。我发现自己并不经常使用这些方式，因为我对 <code>ArrayList</code> 的主要用途是当我只想读取一次数据时。</p><p>此外，对于那些喜欢在加载数据后使用数组的人，可以使用 <code>ArrayList</code> 的 <code>toArray()</code> 方法将其实例转换为数组；或者，在初始化 <code>ArrayList</code> 实例之后，返回到当前数组本身。</p><p>Java 集合框架提供了另一种类似数组的数据结构，称为 <code>Map</code>（映射）。我所说的“类似数组”是指 <code>Map</code> 定义了一个对象集合，它的值可以通过一个键来设置或检索，但与数组（或 <code>ArrayList</code>）不同，这个键不需要是整型数；它可以是 <code>String</code> 或任何其它复杂对象。</p><p>例如，我们可以创建一个 <code>Map</code>，其键为 <code>String</code>，其值为 <code>Integer</code> 类型，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Map&lt;String, Integer&gt; stoi = new Map&lt;String, Integer&gt;();</span></span></code></pre></div><p>然后我们可以对这个 <code>Map</code> 进行如下初始化：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>stoi.set(&quot;one&quot;,1);</span></span>
<span class="line"><span>stoi.set(&quot;two&quot;,2);</span></span>
<span class="line"><span>stoi.set(&quot;three&quot;,3);</span></span></code></pre></div><p>等类似操作。稍后，当我们想要知道 <code>&quot;three&quot;</code> 的数值时，我们可以通过下面的方式将其检索出来：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>stoi.get(&quot;three&quot;);</span></span></code></pre></div>`,15)),n("p",null,[s[25]||(s[25]=a("在我的认知中，",-1)),s[26]||(s[26]=n("code",null,"Map",-1)),s[27]||(s[27]=a(" 对于将第三方数据集中出现的字符串转换为我的数据集中的一致代码值非常有用。作为",-1)),p(i,{href:"https://towardsdatascience.com/data-science-for-startups-data-pipelines-786f6746a59a"},{default:e(()=>[...s[24]||(s[24]=[a("数据转换管道",-1)])]),_:1}),s[28]||(s[28]=a("的一部分，我经常会构建一个小型的独立程序，用作在处理数据之前清理数据；为此，我几乎总是会使用一个或多个 ",-1)),s[29]||(s[29]=n("code",null,"Map",-1)),s[30]||(s[30]=a("。",-1))]),s[59]||(s[59]=l(`<p>值得一提的是，<code>ArrayList</code> 的 <code>ArrayList</code> 和 <code>Map</code> 的 <code>Map</code> 是很可能的，有时也是合理的。例如，假设我们在看树，我们对按树种和年龄范围累计树的数目感兴趣。假设年龄范围定义是一组字符串值（“young”、“mid”、“mature” 和 “old”），物种是 “Douglas fir”、“western red cedar” 等字符串值，那么我们可以将这个 <code>Map</code> 中的 <code>Map</code> 定义为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Map&lt;String, Map&lt;String, Integer&gt;&gt; counter = new Map&lt;String, Map&lt;String, Integer&gt;&gt;();</span></span></code></pre></div><p>这里需要注意的一件事是，以上内容仅为 <code>Map</code> 的<em>行</em>创建存储。因此，我们的累加代码可能类似于：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 假设我们已经知道了物种和年龄范围</span></span>
<span class="line"><span>if (!counter.containsKey(species)) {</span></span>
<span class="line"><span>    counter.put(species,new Map&lt;String, Integer&gt;());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if (!counter.get(species).containsKey(ageRange)) {</span></span>
<span class="line"><span>    counter.get(species).put(ageRange,0);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>此时，我们可以这样开始累加：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>counter.get(species).put(ageRange, counter.get(species).get(ageRange) + 1);</span></span></code></pre></div>`,6)),n("p",null,[s[33]||(s[33]=a("最后，值得一提的是（Java 8 中的新特性）Streams 还可以用来初始化数组、",-1)),s[34]||(s[34]=n("code",null,"ArrayList",-1)),s[35]||(s[35]=a(" 实例和 ",-1)),s[36]||(s[36]=n("code",null,"Map",-1)),s[37]||(s[37]=a(" 实例。关于此特性的详细讨论可以在",-1)),p(i,{href:"https://stackoverflow.com/questions/36885371/lambda-expression-to-initialize-array"},{default:e(()=>[...s[31]||(s[31]=[a("此处",-1)])]),_:1}),s[38]||(s[38]=a("和",-1)),p(i,{href:"https://stackoverflow.com/questions/32868665/how-to-initialize-a-map-using-a-lambda"},{default:e(()=>[...s[32]||(s[32]=[a("此处",-1)])]),_:1}),s[39]||(s[39]=a("中找到。",-1))]),s[60]||(s[60]=n("hr",null,null,-1)),n("p",null,[s[41]||(s[41]=a("via: ",-1)),p(i,{href:"https://opensource.com/article/19/10/initializing-arrays-java"},{default:e(()=>[...s[40]||(s[40]=[a("https://opensource.com/article/19/10/initializing-arrays-java",-1)])]),_:1})]),n("p",null,[s[46]||(s[46]=a("作者：",-1)),p(i,{href:"https://opensource.com/users/clhermansen"},{default:e(()=>[...s[42]||(s[42]=[a("Chris Hermansen",-1)])]),_:1}),s[47]||(s[47]=a(" 选题：",-1)),p(i,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[43]||(s[43]=[a("lujun9972",-1)])]),_:1}),s[48]||(s[48]=a(" 译者：",-1)),p(i,{href:"https://github.com/laingke"},{default:e(()=>[...s[44]||(s[44]=[a("laingke",-1)])]),_:1}),s[49]||(s[49]=a(" 校对：",-1)),p(i,{href:"https://github.com/wxy"},{default:e(()=>[...s[45]||(s[45]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[52]||(s[52]=a("本文由 ",-1)),p(i,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[50]||(s[50]=[a("LCTT",-1)])]),_:1}),s[53]||(s[53]=a(" 原创编译，",-1)),p(i,{href:"https://linux.cn/"},{default:e(()=>[...s[51]||(s[51]=[a("Linux中国",-1)])]),_:1}),s[54]||(s[54]=a(" 荣誉推出",-1))])])}const C=t(c,[["render",g]]);export{y as __pageData,C as default};
