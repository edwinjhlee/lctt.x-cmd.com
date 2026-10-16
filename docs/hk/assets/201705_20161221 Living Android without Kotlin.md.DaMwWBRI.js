import{_ as l,a0 as o,w as d,s as r,ao as t,I as i,x as a,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"在沒有 Kotlin 的世界與 Android 共舞 | LCTT x X-CMD","titleTemplate":false,"description":"在沒有 Kotlin 的世界與 Android 共舞 | LCTT (201705) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在沒有 Kotlin 的世界與 Android 共舞 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在沒有 Kotlin 的世界與 Android 共舞 | LCTT (201705) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201705/20161221 Living Android without Kotlin","title":"在沒有 Kotlin 的世界與 Android 共舞","tag":"201705","desc":""},"relativePath":"201705/20161221 Living Android without Kotlin.md","filePath":"[post].md"}'),c={name:"201705/20161221 Living Android without Kotlin.md"};function g(h,s,m,k,b,u){const n=o("Link");return d(),r("div",null,[s[16]||(s[16]=t(`<h1 id="在沒有-kotlin-的世界與-android-共舞" tabindex="-1">在沒有 Kotlin 的世界與 Android 共舞 <a class="header-anchor" href="#在沒有-kotlin-的世界與-android-共舞" aria-label="Permalink to “在沒有 Kotlin 的世界與 Android 共舞”">​</a></h1><p><img src="https://cdn-images-1.medium.com/max/2000/1*Fd349rzh3XWwSbCP2IV7zA.jpeg" alt=""></p><blockquote><p>開始投入一件事比遠離它更容易。 — Donald Rumsfeld</p></blockquote><p>沒有 Kotlin 的生活就像在觸摸板上玩魔獸爭霸 3。購買鼠標很簡單，但如果你的新僱主不想讓你在生產中使用 Kotlin，你該怎麼辦？</p><p>下面有一些選擇。</p><ul><li>與你的產品負責人爭取獲得使用 Kotlin 的權利。</li><li>使用 Kotlin 並且不告訴其他人因為你知道最好的東西是隻適合你的。</li><li>擦掉你的眼淚，自豪地使用 Java。</li></ul><p>想像一下，你在和產品負責人的鬥爭中失敗，作為一個專業的工程師，你不能在沒有同意的情況下私自去使用那些時髦的技術。我知道這聽起來非常恐怖，特別當你已經品嚐到 Kotlin 的好處時，不過不要失去生活的信念。</p><p>在文章接下來的部分，我想簡短地描述一些 Kotlin 的特徵，使你通過一些知名的工具和庫，可以應用到你的 Android 裏的 Java 代碼中去。對於 Kotlin 和 Java 的基本認識是需要的。</p><h3 id="數據類" tabindex="-1">數據類 <a class="header-anchor" href="#數據類" aria-label="Permalink to “數據類”">​</a></h3><p>我想你肯定已經喜歡上 Kotlin 的數據類。對於你來説，得到 <code>equals()</code>、 <code>hashCode()</code>、 <code>toString()</code> 和 <code>copy()</code> 這些是很容易的。具體來説，<code>data</code> 關鍵字還可以按照聲明順序生成對應於屬性的 <code>componentN()</code> 函數。 它們用於解構聲明。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>data class Person(val name: String)</span></span>
<span class="line"><span>val (riddle) = Person(&quot;Peter&quot;)</span></span>
<span class="line"><span>println(riddle)</span></span></code></pre></div><p>你知道什麼會被打印出來嗎？確實，它不會是從 <code>Person</code> 類的 <code>toString()</code> 返回的值。這是解構聲明的作用，它賦值從 <code>name</code> 到 <code>riddle</code>。使用園括號 <code>(riddle)</code> 編譯器知道它必須使用解構聲明機制。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>val (riddle): String = Person(&quot;Peter&quot;).component1()</span></span>
<span class="line"><span>println(riddle) // prints Peter)</span></span></code></pre></div><blockquote><p>這個代碼沒編譯。它就是展示了構造聲明怎麼工作的。</p></blockquote><p>正如你可以看到 <code>data</code> 關鍵字是一個超級有用的語言特性，所以你能做什麼把它帶到你的 Java 世界？ 使用註釋處理器並修改抽象語法樹（Abstract Syntax Tree）。 如果你想更深入，請閲讀文章末尾列出的文章（Project Lombok— Trick Explained）。</p><p>使用項目 Lombok 你可以實現 <code>data</code>關鍵字所提供的幾乎相同的功能。 不幸的是，沒有辦法進行解構聲明。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data class Person {</span></span>
<span class="line"><span>    final String name;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>@Data</code> 註解生成 <code>equals()</code>、<code>hashCode()</code> 和 <code>toString()</code>。 此外，它為所有字段創建 getter，為所有非最終字段創建setter，併為所有必填字段（final）創建構造函數。 值得注意的是，Lombok 僅用於編譯，因此庫代碼不會添加到您的最終的 .apk。</p><h3 id="lambda-表達式" tabindex="-1">Lambda 表達式 <a class="header-anchor" href="#lambda-表達式" aria-label="Permalink to “Lambda 表達式”">​</a></h3><p>Android 工程師有一個非常艱難的生活，因為 Android 中缺乏 Java 8 的特性，而且其中之一是 lambda 表達式。 Lambda 是很棒的，因為它們為你減少了成噸的樣板。 你可以在回調和流中使用它們。 在 Kotlin 中，lambda 表達式是內置的，它們看起來比它們在 Java 中看起來好多了。 此外，lambda 的字節碼可以直接插入到調用方法的字節碼中，因此方法計數不會增加。 它可以使用內聯函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>button.setOnClickListener { println(&quot;Hello World&quot;) }</span></span></code></pre></div><p>最近 Google 宣佈在 Android 中支持 Java 8 的特性，由於 Jack 編譯器，你可以在你的代碼中使用 lambda。還要提及的是，它們在 API 23 或者更低的級別都可用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>button.setOnClickListener(view -&gt; System.out.println(&quot;Hello World!&quot;));</span></span></code></pre></div><p>怎樣使用它們？就只用添加下面幾行到你的 <code>build.gradle</code> 文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>defaultConfig {</span></span>
<span class="line"><span>    jackOptions {</span></span>
<span class="line"><span>        enabled true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>compileOptions {</span></span>
<span class="line"><span>    sourceCompatibility JavaVersion.VERSION_1_8</span></span>
<span class="line"><span>    targetCompatibility JavaVersion.VERSION_1_8</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你不喜歡用 Jack 編譯器，或者你由於一些原因不能使用它，這裏有一個不同的解決方案提供給你。Retrolambda 項目允許你在 Java 7，6 或者 5 上運行帶有 lambda 表達式的 Java 8 代碼，下面是設置過程。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dependencies {</span></span>
<span class="line"><span>    classpath &#39;me.tatarka:gradle-retrolambda:3.4.0&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apply plugin: &#39;me.tatarka.retrolambda&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>compileOptions {</span></span>
<span class="line"><span>    sourceCompatibility JavaVersion.VERSION_1_8</span></span>
<span class="line"><span>    targetCompatibility JavaVersion.VERSION_1_8</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>正如我前面提到的，在 Kotlin 下的 lambda 內聯函數不增加方法計數，但是如何在 Jack 或者 Retrolambda 下使用它們呢？ 顯然，它們不是沒成本的，隱藏的成本如下。</p><p><img src="https://cdn-images-1.medium.com/max/800/1*H7h2MB2auMslMkdaDtqAfg.png" alt=""></p>`,29)),i("p",null,[i("em",null,[s[1]||(s[1]=a("該表展示了使用不同版本的 Retrolambda 和 Jack 編譯器生成的方法數量。該比較結果來自 Jake Wharton 的“",-1)),p(n,{href:"http://jakewharton.com/exploring-java-hidden-costs/"},{default:e(()=>[...s[0]||(s[0]=[a("探索 Java 的隱藏成本",-1)])]),_:1}),s[2]||(s[2]=a("” 技術討論之中。",-1))])]),s[17]||(s[17]=t(`<h3 id="數據操作" tabindex="-1">數據操作 <a class="header-anchor" href="#數據操作" aria-label="Permalink to “數據操作”">​</a></h3><p>Kotlin 引入了高階函數作為流的替代。 當您必須將一組數據轉換為另一組數據或過濾集合時，它們非常有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fun foo(persons: MutableList&lt;Person&gt;) {</span></span>
<span class="line"><span>    persons.filter { it.age &gt;= 21 }</span></span>
<span class="line"><span>           .filter { it.name.startsWith(&quot;P&quot;) }</span></span>
<span class="line"><span>           .map { it.name }</span></span>
<span class="line"><span>           .sorted()</span></span>
<span class="line"><span>           .forEach(::println)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data class Person(val name: String, val age: Int)</span></span></code></pre></div><p>流也由 Google 通過 Jack 編譯器提供。 不幸的是，Jack 不使用 Lombok，因為它在編譯代碼時跳過生成中間的 <code>.class</code> 文件，而 Lombok 卻依賴於這些文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void foo(List&lt;Person&gt; persons) {</span></span>
<span class="line"><span>    persons.stream()</span></span>
<span class="line"><span>           .filter(it -&gt; it.getAge() &gt;= 21)</span></span>
<span class="line"><span>           .filter(it -&gt; it.getName().startsWith(&quot;P&quot;))</span></span>
<span class="line"><span>           .map(Person::getName)</span></span>
<span class="line"><span>           .sorted()</span></span>
<span class="line"><span>           .forEach(System.out::println);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Person {</span></span>
<span class="line"><span>    final private String name;</span></span>
<span class="line"><span>    final private int age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Person(String name, int age) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String getName() { return name; }</span></span>
<span class="line"><span>    int getAge() { return age; }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這簡直太好了，所以 catch 在哪裏？ 令人悲傷的是，流從 API 24 才可用。谷歌做了好事，但哪個應用程序有用 <code>minSdkVersion = 24</code>？</p><p>幸運的是，Android 平台有一個很好的提供許多很棒的庫的開源社區。Lightweight-Stream-API 就是其中的一個，它包含了 Java 7 及以下版本的基於迭代器的流實現。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span>import com.annimon.stream.Stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void foo(List&lt;Person&gt; persons) {</span></span>
<span class="line"><span>    Stream.of(persons)</span></span>
<span class="line"><span>          .filter(it -&gt; it.getAge() &gt;= 21)</span></span>
<span class="line"><span>          .filter(it -&gt; it.getName().startsWith(&quot;P&quot;))</span></span>
<span class="line"><span>          .map(Person::getName)</span></span>
<span class="line"><span>          .sorted()</span></span>
<span class="line"><span>          .forEach(System.out::println);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data class Person {</span></span>
<span class="line"><span>    final String name;</span></span>
<span class="line"><span>    final int age;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的例子結合了 Lombok、Retrolambda 和 Lightweight-Stream-API，它看起來幾乎和 Kotlin 一樣棒。使用靜態工廠方法允許您將任何 Iterable 轉換為流，並對其應用 lambda，就像 Java 8 流一樣。 將靜態調用 <code>Stream.of(persons)</code> 包裝為 Iterable 類型的擴展函數是完美的，但是 Java 不支持它。</p><h3 id="擴展函數" tabindex="-1">擴展函數 <a class="header-anchor" href="#擴展函數" aria-label="Permalink to “擴展函數”">​</a></h3><p>擴展機制提供了向類添加功能而無需繼承它的能力。 這個眾所周知的概念非常適合 Android 世界，這就是 Kotlin 在該社區很受歡迎的原因。</p><p>有沒有技術或魔術將擴展功能添加到你的 Java 工具箱？ 因 Lombok，你可以使用它們作為一個實驗功能。 根據 Lombok 文檔的説明，他們想把它從實驗狀態移出，基本上沒有什麼變化的話很快。 讓我們重構最後一個例子，並將 <code>Stream.of(persons)</code> 包裝成擴展函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span>import lombok.experimental.ExtensionMethod;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@ExtensionMethod(Streams.class)</span></span>
<span class="line"><span>public class Foo {</span></span>
<span class="line"><span>    void foo(List&lt;Person&gt; persons) {</span></span>
<span class="line"><span>        persons.toStream()</span></span>
<span class="line"><span>               .filter(it -&gt; it.getAge() &gt;= 21)</span></span>
<span class="line"><span>               .filter(it -&gt; it.getName().startsWith(&quot;P&quot;))</span></span>
<span class="line"><span>               .map(Person::getName)</span></span>
<span class="line"><span>               .sorted()</span></span>
<span class="line"><span>               .forEach(System.out::println);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data class Person {</span></span>
<span class="line"><span>    final String name;</span></span>
<span class="line"><span>    final int age;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Streams {</span></span>
<span class="line"><span>    static &lt;T&gt; Stream&lt;T&gt; toStream(List&lt;T&gt; list) {</span></span>
<span class="line"><span>        return Stream.of(list);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>所有的方法是 <code>public</code>、<code>static</code> 的，並且至少有一個參數的類型不是原始的，因而是擴展方法。 <code>@ExtensionMethod</code> 註解允許你指定一個包含你的擴展函數的類。 你也可以傳遞數組，而不是使用一個 <code>.class</code> 對象。</p><hr><p>我完全知道我的一些想法是非常有爭議的，特別是 Lombok，我也知道，有很多的庫，可以使你的生活更輕鬆。請不要猶豫在評論裏分享你的經驗。乾杯!</p><p><img src="https://cdn-images-1.medium.com/max/800/1*peB9mmElOn6xwR3eH0HXXA.png" alt=""></p><hr><p>作者簡介：</p><p><img src="https://cdn-images-1.medium.com/fit/c/60/60/1*l7_L6VCKzkOm0gq4Kplnkw.jpeg" alt=""></p><p>Coder and professional dreamer @ Grid Dynamics</p><hr>`,22)),i("p",null,[s[4]||(s[4]=a("via: ",-1)),p(n,{href:"https://medium.com/proandroiddev/living-android-without-kotlin-db7391a2b170"},{default:e(()=>[...s[3]||(s[3]=[a("https://medium.com/proandroiddev/living-android-without-kotlin-db7391a2b170",-1)])]),_:1})]),i("p",null,[s[8]||(s[8]=a("作者：",-1)),p(n,{href:"https://hackernoon.com/@piotr.slesarew?source=post_header_lockup"},{default:e(()=>[...s[5]||(s[5]=[a("Piotr Ślesarew",-1)])]),_:1}),s[9]||(s[9]=a(" 譯者：",-1)),p(n,{href:"https://github.com/DockerChen"},{default:e(()=>[...s[6]||(s[6]=[a("DockerChen",-1)])]),_:1}),s[10]||(s[10]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[7]||(s[7]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[13]||(s[13]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[11]||(s[11]=[a("LCTT",-1)])]),_:1}),s[14]||(s[14]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[12]||(s[12]=[a("Linux中國",-1)])]),_:1}),s[15]||(s[15]=a(" 榮譽推出",-1))])])}const y=l(c,[["render",g]]);export{C as __pageData,y as default};
