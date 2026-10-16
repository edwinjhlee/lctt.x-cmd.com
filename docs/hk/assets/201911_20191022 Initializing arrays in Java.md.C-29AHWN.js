import{_ as t,a0 as o,w as d,s as r,ao as l,I as n,x as a,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"Java 中初始化數組 | LCTT x X-CMD","titleTemplate":false,"description":"Java 中初始化數組 | LCTT (201911) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Java 中初始化數組 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Java 中初始化數組 | LCTT (201911) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201911/20191022 Initializing arrays in Java","title":"Java 中初始化數組","tag":"201911","desc":""},"relativePath":"201911/20191022 Initializing arrays in Java.md","filePath":"[post].md"}'),c={name:"201911/20191022 Initializing arrays in Java.md"};function g(u,s,k,h,b,f){const i=o("Link");return d(),r("div",null,[s[55]||(s[55]=l('<h1 id="java-中初始化數組" tabindex="-1">Java 中初始化數組 <a class="header-anchor" href="#java-中初始化數組" aria-label="Permalink to “Java 中初始化數組”">​</a></h1><blockquote><p>數組是一種有用的數據類型，用於管理在連續內存位置中建模最好的集合元素。下面是如何有效地使用它們。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/java-coffee-mug.jpg?itok=Bj6rQo8r" alt="Coffee beans and a cup of coffee" title="Coffee beans and a cup of coffee"></p><p>有使用 C 或者 FORTRAN 語言編程經驗的人會對數組的概念很熟悉。它們基本上是一個連續的內存塊，其中每個位置都是某種數據類型：整型、浮點型或者諸如此類的數據類型。</p><p>Java 的情況與此類似，但是有一些額外的問題。</p><h3 id="一個數組的示例" tabindex="-1">一個數組的示例 <a class="header-anchor" href="#一個數組的示例" aria-label="Permalink to “一個數組的示例”">​</a></h3><p>讓我們在 Java 中創建一個長度為 10 的整型數組：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int[] ia = new int[10];</span></span></code></pre></div><p>上面的代碼片段會發生什麼？從左到右依次是：</p>',9)),n("ol",null,[s[9]||(s[9]=l("<li>最左邊的 <code>int[]</code> 將變量的<em>類型</em>聲明為 <code>int</code> 數組（由 <code>[]</code> 表示）。</li><li>它的右邊是變量的名稱，當前為 <code>ia</code>。</li><li>接下來，<code>=</code> 告訴我們，左側定義的變量賦值為右側的內容。</li>",3)),n("li",null,[s[1]||(s[1]=a("在 ",-1)),s[2]||(s[2]=n("code",null,"=",-1)),s[3]||(s[3]=a(" 的右側，我們看到了 ",-1)),s[4]||(s[4]=n("code",null,"new",-1)),s[5]||(s[5]=a("，它在 Java 中表示一個對象正在",-1)),s[6]||(s[6]=n("em",null,"被初始化中",-1)),s[7]||(s[7]=a("，這意味着已為其分配存儲空間並調用了其構造函數（",-1)),p(i,{href:"https://opensource.com/article/19/8/what-object-java"},{default:e(()=>[...s[0]||(s[0]=[a("請參見此處以獲取更多信息",-1)])]),_:1}),s[8]||(s[8]=a("）。",-1))]),s[10]||(s[10]=n("li",null,[a("然後，我們看到 "),n("code",null,"int[10]"),a("，它告訴我們正在初始化的這個對象是包含 10 個整型的數組。")],-1))]),s[56]||(s[56]=l(`<p>因為 Java 是強類型的，所以變量 <code>ia</code> 的類型必須跟 <code>=</code> 右側表達式的類型兼容。</p><h3 id="初始化示例數組" tabindex="-1">初始化示例數組 <a class="header-anchor" href="#初始化示例數組" aria-label="Permalink to “初始化示例數組”">​</a></h3><p>讓我們把這個簡單的數組放在一段代碼中，並嘗試運行一下。將以下內容保存到一個名為 <code>Test1.java</code> 的文件中，使用 <code>javac</code> 編譯，使用 <code>java</code> 運行（當然是在終端中）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import java.lang.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Test1 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        int[] ia = new int[10];                              // 見下文注 1</span></span>
<span class="line"><span>        System.out.println(&quot;ia is &quot; + ia.getClass());        // 見下文注 2</span></span>
<span class="line"><span>        for (int i = 0; i &lt; ia.length; i++)                  // 見下文注 3</span></span>
<span class="line"><span>            System.out.println(&quot;ia[&quot; + i + &quot;] = &quot; + ia[i]);  // 見下文注 4</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>讓我們來看看最重要的部分。</p><ol><li>我們聲明和初始化了長度為 10 的整型數組，即 <code>ia</code>，這顯而易見。</li><li>在下面的行中，我們看到表達式 <code>ia.getClass()</code>。沒錯，<code>ia</code> 是屬於一個<em>類</em>的<em>對象</em>，這行代碼將告訴我們是哪個類。</li><li>在緊接的下一行中，我們看到了一個循環 <code>for (int i = 0; i &lt; ia.length; i++)</code>，它定義了一個循環索引變量 <code>i</code>，該變量遍歷了從 0 到比 <code>ia.length</code> 小 1 的序列，這個表達式告訴我們在數組 <code>ia</code> 中定義了多少個元素。</li><li>接下來，循環體打印出 <code>ia</code> 的每個元素的值。</li></ol><p>當這個程序編譯和運行時，它產生以下結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>me@mydesktop:~/Java$ javac Test1.java</span></span>
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
<span class="line"><span>me@mydesktop:~/Java$</span></span></code></pre></div><p><code>ia.getClass()</code> 的輸出的字符串表示形式是 <code>[I</code>，它是“整數數組”的簡寫。與 C 語言類似，Java 數組以第 0 個元素開始，擴展到第 <code>&lt;數組大小&gt; - 1</code> 個元素。如上所見，我們可以看到數組 <code>ia</code> 的每個元素都（似乎由數組構造函數）設置為零。</p><p>所以，就這些嗎？聲明類型，使用適當的初始化器，就完成了嗎?</p><p>好吧，並沒有。在 Java 中有許多其它方法來初始化數組。</p><h3 id="為什麼我要初始化一個數組-有其它方式嗎" tabindex="-1">為什麼我要初始化一個數組，有其它方式嗎？ <a class="header-anchor" href="#為什麼我要初始化一個數組-有其它方式嗎" aria-label="Permalink to “為什麼我要初始化一個數組，有其它方式嗎？”">​</a></h3><p>像所有好的問題一樣，這個問題的答案是“視情況而定”。在這種情況下，答案取決於初始化後我們希望對數組做什麼。</p><p>在某些情況下，數組自然會作為一種累加器出現。例如，假設我們正在編程實現計算小型辦公室中一組電話分機接收和撥打的電話數量。一共有 8 個分機，編號為 1 到 8，加上話務員的分機，編號為 0。 因此，我們可以聲明兩個數組：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int[] callsMade;</span></span>
<span class="line"><span>int[] callsReceived;</span></span></code></pre></div><p>然後，每當我們開始一個新的累計呼叫統計數據的週期時，我們就將每個數組初始化為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>callsMade = new int[9];</span></span>
<span class="line"><span>callsReceived = new int[9];</span></span></code></pre></div><p>在每個累計通話統計數據的最後階段，我們可以打印出統計數據。粗略地説，我們可能會看到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import java.lang.*;</span></span>
<span class="line"><span>import java.io.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Test2 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int[] callsMade;</span></span>
<span class="line"><span>        int[] callsReceived;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 初始化呼叫計數器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        callsMade = new int[9];</span></span>
<span class="line"><span>        callsReceived = new int[9];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 處理呼叫……</span></span>
<span class="line"><span>        //   分機撥打電話：callsMade[ext]++</span></span>
<span class="line"><span>        //   分機接聽電話：callsReceived[ext]++</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 彙總通話統計</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>這會產生這樣的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>me@mydesktop:~/Java$ javac Test2.java</span></span>
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
<span class="line"><span>me@mydesktop:~/Java$</span></span></code></pre></div><p>看來這一天呼叫中心不是很忙。</p><p>在上面的累加器示例中，我們看到由數組初始化程序設置的零起始值可以滿足我們的需求。但是在其它情況下，這個起始值可能不是正確的選擇。</p><p>例如，在某些幾何計算中，我們可能需要將二維數組初始化為單位矩陣（除沿主對角線———左上角到右下角——以外所有全是零）。我們可以選擇這樣做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>double[][] m = new double[3][3];</span></span>
<span class="line"><span>for (int d = 0; d &lt; 3; d++) {</span></span>
<span class="line"><span>    m[d][d] = 1.0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在這種情況下，我們依靠數組初始化器 <code>new double[3][3]</code> 將數組設置為零，然後使用循環將主對角線上的元素設置為 1。在這種簡單情況下，我們可以使用 Java 提供的快捷方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>double[][] m = {</span></span>
<span class="line"><span>        {1.0, 0.0, 0.0},</span></span>
<span class="line"><span>        {0.0, 1.0, 0.0},</span></span>
<span class="line"><span>        {0.0, 0.0, 1.0}};</span></span></code></pre></div><p>這種可視結構特別適用於這種應用程序，在這種應用程序中，它便於複查數組的實際佈局。但是在這種情況下，行數和列數只在運行時確定時，我們可能會看到這樣的東西:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int nrc;</span></span>
<span class="line"><span>// 一些代碼確定行數和列數 = nrc</span></span>
<span class="line"><span>double[][] m = new double[nrc][nrc];</span></span>
<span class="line"><span>for (int d = 0; d &lt; nrc; d++) {</span></span>
<span class="line"><span>    m[d][d] = 1.0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>值得一提的是，Java 中的二維數組實際上是數組的數組，沒有什麼能阻止無畏的程序員讓這些第二層數組中的每個數組的長度都不同。也就是説，下面這樣的事情是完全合法的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int [][] differentLengthRows = {</span></span>
<span class="line"><span>     {1, 2, 3, 4, 5},</span></span>
<span class="line"><span>     {6, 7, 8, 9},</span></span>
<span class="line"><span>     {10, 11, 12},</span></span>
<span class="line"><span>     {13, 14},</span></span>
<span class="line"><span>     {15}};</span></span></code></pre></div>`,31)),n("p",null,[s[12]||(s[12]=a("在涉及不規則形狀矩陣的各種線性代數應用中，可以應用這種類型的結構（有關更多信息，請參見",-1)),p(i,{href:"https://en.wikipedia.org/wiki/Irregular_matrix"},{default:e(()=>[...s[11]||(s[11]=[a("此 Wikipedia 文章",-1)])]),_:1}),s[13]||(s[13]=a("）。除此之外，既然我們瞭解到二維數組實際上是數組的數組，那麼以下內容也就不足為奇了：",-1))]),s[57]||(s[57]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>differentLengthRows.length</span></span></code></pre></div><p>可以告訴我們二維數組 <code>differentLengthRows</code> 的行數，並且：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>differentLengthRows[i].length</span></span></code></pre></div><p>告訴我們 <code>differentLengthRows</code> 第 <code>i</code> 行的列數。</p><h3 id="深入理解數組" tabindex="-1">深入理解數組 <a class="header-anchor" href="#深入理解數組" aria-label="Permalink to “深入理解數組”">​</a></h3><p>考慮到在運行時確定數組大小的想法，我們看到數組在實例化之前仍需要我們知道該大小。但是，如果在處理完所有數據之前我們不知道大小怎麼辦？這是否意味着我們必須先處理一次以找出數組的大小，然後再次處理？這可能很難做到，尤其是如果我們只有一次機會使用數據時。</p>',6)),n("p",null,[p(i,{href:"https://en.wikipedia.org/wiki/Java_collections_framework"},{default:e(()=>[...s[14]||(s[14]=[a("Java 集合框架",-1)])]),_:1}),s[16]||(s[16]=a("很好地解決了這個問題。提供的其中一項是 ",-1)),s[17]||(s[17]=n("code",null,"ArrayList",-1)),s[18]||(s[18]=a(" 類，它類似於數組，但可以動態擴展。為了演示 ",-1)),s[19]||(s[19]=n("code",null,"ArrayList",-1)),s[20]||(s[20]=a(" 的工作原理，讓我們創建一個 ",-1)),s[21]||(s[21]=n("code",null,"ArrayList",-1)),s[22]||(s[22]=a(" 對象並將其初始化為前 20 個",-1)),p(i,{href:"https://en.wikipedia.org/wiki/Fibonacci_number"},{default:e(()=>[...s[15]||(s[15]=[a("斐波那契數字",-1)])]),_:1}),s[23]||(s[23]=a("：",-1))]),s[58]||(s[58]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import java.lang.*;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>上面的代碼中，我們看到：</p><ul><li>用於存儲多個 <code>Integer</code> 的 <code>ArrayList</code> 的聲明和實例化。</li><li>使用 <code>add()</code> 附加到 <code>ArrayList</code> 實例。</li><li>使用 <code>get()</code> 通過索引號檢索元素。</li><li>使用 <code>size()</code> 來確定 <code>ArrayList</code> 實例中已經有多少個元素。</li></ul><p>這裏沒有展示 <code>put()</code> 方法，它的作用是將一個值放在給定的索引號上。</p><p>該程序的輸出為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fibonacci 0 = 0</span></span>
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
<span class="line"><span>fibonacci 19 = 4181</span></span></code></pre></div><p><code>ArrayList</code> 實例也可以通過其它方式初始化。例如，可以給 <code>ArrayList</code> 構造器提供一個數組，或者在編譯過程中知道初始元素時也可以使用 <code>List.of()</code> 和 <code>array.aslist()</code> 方法。我發現自己並不經常使用這些方式，因為我對 <code>ArrayList</code> 的主要用途是當我只想讀取一次數據時。</p><p>此外，對於那些喜歡在加載數據後使用數組的人，可以使用 <code>ArrayList</code> 的 <code>toArray()</code> 方法將其實例轉換為數組；或者，在初始化 <code>ArrayList</code> 實例之後，返回到當前數組本身。</p><p>Java 集合框架提供了另一種類似數組的數據結構，稱為 <code>Map</code>（映射）。我所説的“類似數組”是指 <code>Map</code> 定義了一個對象集合，它的值可以通過一個鍵來設置或檢索，但與數組（或 <code>ArrayList</code>）不同，這個鍵不需要是整型數；它可以是 <code>String</code> 或任何其它複雜對象。</p><p>例如，我們可以創建一個 <code>Map</code>，其鍵為 <code>String</code>，其值為 <code>Integer</code> 類型，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Map&lt;String, Integer&gt; stoi = new Map&lt;String, Integer&gt;();</span></span></code></pre></div><p>然後我們可以對這個 <code>Map</code> 進行如下初始化：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>stoi.set(&quot;one&quot;,1);</span></span>
<span class="line"><span>stoi.set(&quot;two&quot;,2);</span></span>
<span class="line"><span>stoi.set(&quot;three&quot;,3);</span></span></code></pre></div><p>等類似操作。稍後，當我們想要知道 <code>&quot;three&quot;</code> 的數值時，我們可以通過下面的方式將其檢索出來：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>stoi.get(&quot;three&quot;);</span></span></code></pre></div>`,15)),n("p",null,[s[25]||(s[25]=a("在我的認知中，",-1)),s[26]||(s[26]=n("code",null,"Map",-1)),s[27]||(s[27]=a(" 對於將第三方數據集中出現的字符串轉換為我的數據集中的一致代碼值非常有用。作為",-1)),p(i,{href:"https://towardsdatascience.com/data-science-for-startups-data-pipelines-786f6746a59a"},{default:e(()=>[...s[24]||(s[24]=[a("數據轉換管道",-1)])]),_:1}),s[28]||(s[28]=a("的一部分，我經常會構建一個小型的獨立程序，用作在處理數據之前清理數據；為此，我幾乎總是會使用一個或多個 ",-1)),s[29]||(s[29]=n("code",null,"Map",-1)),s[30]||(s[30]=a("。",-1))]),s[59]||(s[59]=l(`<p>值得一提的是，<code>ArrayList</code> 的 <code>ArrayList</code> 和 <code>Map</code> 的 <code>Map</code> 是很可能的，有時也是合理的。例如，假設我們在看樹，我們對按樹種和年齡範圍累計樹的數目感興趣。假設年齡範圍定義是一組字符串值（“young”、“mid”、“mature” 和 “old”），物種是 “Douglas fir”、“western red cedar” 等字符串值，那麼我們可以將這個 <code>Map</code> 中的 <code>Map</code> 定義為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Map&lt;String, Map&lt;String, Integer&gt;&gt; counter = new Map&lt;String, Map&lt;String, Integer&gt;&gt;();</span></span></code></pre></div><p>這裏需要注意的一件事是，以上內容僅為 <code>Map</code> 的<em>行</em>創建存儲。因此，我們的累加代碼可能類似於：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 假設我們已經知道了物種和年齡範圍</span></span>
<span class="line"><span>if (!counter.containsKey(species)) {</span></span>
<span class="line"><span>    counter.put(species,new Map&lt;String, Integer&gt;());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if (!counter.get(species).containsKey(ageRange)) {</span></span>
<span class="line"><span>    counter.get(species).put(ageRange,0);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>此時，我們可以這樣開始累加：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>counter.get(species).put(ageRange, counter.get(species).get(ageRange) + 1);</span></span></code></pre></div>`,6)),n("p",null,[s[33]||(s[33]=a("最後，值得一提的是（Java 8 中的新特性）Streams 還可以用來初始化數組、",-1)),s[34]||(s[34]=n("code",null,"ArrayList",-1)),s[35]||(s[35]=a(" 實例和 ",-1)),s[36]||(s[36]=n("code",null,"Map",-1)),s[37]||(s[37]=a(" 實例。關於此特性的詳細討論可以在",-1)),p(i,{href:"https://stackoverflow.com/questions/36885371/lambda-expression-to-initialize-array"},{default:e(()=>[...s[31]||(s[31]=[a("此處",-1)])]),_:1}),s[38]||(s[38]=a("和",-1)),p(i,{href:"https://stackoverflow.com/questions/32868665/how-to-initialize-a-map-using-a-lambda"},{default:e(()=>[...s[32]||(s[32]=[a("此處",-1)])]),_:1}),s[39]||(s[39]=a("中找到。",-1))]),s[60]||(s[60]=n("hr",null,null,-1)),n("p",null,[s[41]||(s[41]=a("via: ",-1)),p(i,{href:"https://opensource.com/article/19/10/initializing-arrays-java"},{default:e(()=>[...s[40]||(s[40]=[a("https://opensource.com/article/19/10/initializing-arrays-java",-1)])]),_:1})]),n("p",null,[s[46]||(s[46]=a("作者：",-1)),p(i,{href:"https://opensource.com/users/clhermansen"},{default:e(()=>[...s[42]||(s[42]=[a("Chris Hermansen",-1)])]),_:1}),s[47]||(s[47]=a(" 選題：",-1)),p(i,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[43]||(s[43]=[a("lujun9972",-1)])]),_:1}),s[48]||(s[48]=a(" 譯者：",-1)),p(i,{href:"https://github.com/laingke"},{default:e(()=>[...s[44]||(s[44]=[a("laingke",-1)])]),_:1}),s[49]||(s[49]=a(" 校對：",-1)),p(i,{href:"https://github.com/wxy"},{default:e(()=>[...s[45]||(s[45]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[52]||(s[52]=a("本文由 ",-1)),p(i,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[50]||(s[50]=[a("LCTT",-1)])]),_:1}),s[53]||(s[53]=a(" 原創編譯，",-1)),p(i,{href:"https://linux.cn/"},{default:e(()=>[...s[51]||(s[51]=[a("Linux中國",-1)])]),_:1}),s[54]||(s[54]=a(" 榮譽推出",-1))])])}const C=t(c,[["render",g]]);export{y as __pageData,C as default};
