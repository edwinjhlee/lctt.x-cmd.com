import{_ as l,a0 as o,w as d,s as r,ao as t,I as i,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"在没有 Kotlin 的世界与 Android 共舞 | LCTT x X-CMD","titleTemplate":false,"description":"在没有 Kotlin 的世界与 Android 共舞 | LCTT (201705) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在没有 Kotlin 的世界与 Android 共舞 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在没有 Kotlin 的世界与 Android 共舞 | LCTT (201705) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201705/20161221 Living Android without Kotlin","title":"在没有 Kotlin 的世界与 Android 共舞","tag":"201705","desc":""},"relativePath":"201705/20161221 Living Android without Kotlin.md","filePath":"[post].md"}'),c={name:"201705/20161221 Living Android without Kotlin.md"};function g(h,s,m,k,b,u){const n=o("Link");return d(),r("div",null,[s[16]||(s[16]=t(`<h1 id="在没有-kotlin-的世界与-android-共舞" tabindex="-1">在没有 Kotlin 的世界与 Android 共舞 <a class="header-anchor" href="#在没有-kotlin-的世界与-android-共舞" aria-label="Permalink to “在没有 Kotlin 的世界与 Android 共舞”">​</a></h1><p><img src="https://cdn-images-1.medium.com/max/2000/1*Fd349rzh3XWwSbCP2IV7zA.jpeg" alt=""></p><blockquote><p>开始投入一件事比远离它更容易。 — Donald Rumsfeld</p></blockquote><p>没有 Kotlin 的生活就像在触摸板上玩魔兽争霸 3。购买鼠标很简单，但如果你的新雇主不想让你在生产中使用 Kotlin，你该怎么办？</p><p>下面有一些选择。</p><ul><li>与你的产品负责人争取获得使用 Kotlin 的权利。</li><li>使用 Kotlin 并且不告诉其他人因为你知道最好的东西是只适合你的。</li><li>擦掉你的眼泪，自豪地使用 Java。</li></ul><p>想象一下，你在和产品负责人的斗争中失败，作为一个专业的工程师，你不能在没有同意的情况下私自去使用那些时髦的技术。我知道这听起来非常恐怖，特别当你已经品尝到 Kotlin 的好处时，不过不要失去生活的信念。</p><p>在文章接下来的部分，我想简短地描述一些 Kotlin 的特征，使你通过一些知名的工具和库，可以应用到你的 Android 里的 Java 代码中去。对于 Kotlin 和 Java 的基本认识是需要的。</p><h3 id="数据类" tabindex="-1">数据类 <a class="header-anchor" href="#数据类" aria-label="Permalink to “数据类”">​</a></h3><p>我想你肯定已经喜欢上 Kotlin 的数据类。对于你来说，得到 <code>equals()</code>、 <code>hashCode()</code>、 <code>toString()</code> 和 <code>copy()</code> 这些是很容易的。具体来说，<code>data</code> 关键字还可以按照声明顺序生成对应于属性的 <code>componentN()</code> 函数。 它们用于解构声明。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>data class Person(val name: String)</span></span>
<span class="line"><span>val (riddle) = Person(&quot;Peter&quot;)</span></span>
<span class="line"><span>println(riddle)</span></span></code></pre></div><p>你知道什么会被打印出来吗？确实，它不会是从 <code>Person</code> 类的 <code>toString()</code> 返回的值。这是解构声明的作用，它赋值从 <code>name</code> 到 <code>riddle</code>。使用园括号 <code>(riddle)</code> 编译器知道它必须使用解构声明机制。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>val (riddle): String = Person(&quot;Peter&quot;).component1()</span></span>
<span class="line"><span>println(riddle) // prints Peter)</span></span></code></pre></div><blockquote><p>这个代码没编译。它就是展示了构造声明怎么工作的。</p></blockquote><p>正如你可以看到 <code>data</code> 关键字是一个超级有用的语言特性，所以你能做什么把它带到你的 Java 世界？ 使用注释处理器并修改抽象语法树（Abstract Syntax Tree）。 如果你想更深入，请阅读文章末尾列出的文章（Project Lombok— Trick Explained）。</p><p>使用项目 Lombok 你可以实现 <code>data</code>关键字所提供的几乎相同的功能。 不幸的是，没有办法进行解构声明。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import lombok.Data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Data class Person {</span></span>
<span class="line"><span>    final String name;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>@Data</code> 注解生成 <code>equals()</code>、<code>hashCode()</code> 和 <code>toString()</code>。 此外，它为所有字段创建 getter，为所有非最终字段创建setter，并为所有必填字段（final）创建构造函数。 值得注意的是，Lombok 仅用于编译，因此库代码不会添加到您的最终的 .apk。</p><h3 id="lambda-表达式" tabindex="-1">Lambda 表达式 <a class="header-anchor" href="#lambda-表达式" aria-label="Permalink to “Lambda 表达式”">​</a></h3><p>Android 工程师有一个非常艰难的生活，因为 Android 中缺乏 Java 8 的特性，而且其中之一是 lambda 表达式。 Lambda 是很棒的，因为它们为你减少了成吨的样板。 你可以在回调和流中使用它们。 在 Kotlin 中，lambda 表达式是内置的，它们看起来比它们在 Java 中看起来好多了。 此外，lambda 的字节码可以直接插入到调用方法的字节码中，因此方法计数不会增加。 它可以使用内联函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>button.setOnClickListener { println(&quot;Hello World&quot;) }</span></span></code></pre></div><p>最近 Google 宣布在 Android 中支持 Java 8 的特性，由于 Jack 编译器，你可以在你的代码中使用 lambda。还要提及的是，它们在 API 23 或者更低的级别都可用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>button.setOnClickListener(view -&gt; System.out.println(&quot;Hello World!&quot;));</span></span></code></pre></div><p>怎样使用它们？就只用添加下面几行到你的 <code>build.gradle</code> 文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>defaultConfig {</span></span>
<span class="line"><span>    jackOptions {</span></span>
<span class="line"><span>        enabled true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>compileOptions {</span></span>
<span class="line"><span>    sourceCompatibility JavaVersion.VERSION_1_8</span></span>
<span class="line"><span>    targetCompatibility JavaVersion.VERSION_1_8</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你不喜欢用 Jack 编译器，或者你由于一些原因不能使用它，这里有一个不同的解决方案提供给你。Retrolambda 项目允许你在 Java 7，6 或者 5 上运行带有 lambda 表达式的 Java 8 代码，下面是设置过程。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dependencies {</span></span>
<span class="line"><span>    classpath &#39;me.tatarka:gradle-retrolambda:3.4.0&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apply plugin: &#39;me.tatarka.retrolambda&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>compileOptions {</span></span>
<span class="line"><span>    sourceCompatibility JavaVersion.VERSION_1_8</span></span>
<span class="line"><span>    targetCompatibility JavaVersion.VERSION_1_8</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>正如我前面提到的，在 Kotlin 下的 lambda 内联函数不增加方法计数，但是如何在 Jack 或者 Retrolambda 下使用它们呢？ 显然，它们不是没成本的，隐藏的成本如下。</p><p><img src="https://cdn-images-1.medium.com/max/800/1*H7h2MB2auMslMkdaDtqAfg.png" alt=""></p>`,29)),i("p",null,[i("em",null,[s[1]||(s[1]=a("该表展示了使用不同版本的 Retrolambda 和 Jack 编译器生成的方法数量。该比较结果来自 Jake Wharton 的“",-1)),p(n,{href:"http://jakewharton.com/exploring-java-hidden-costs/"},{default:e(()=>[...s[0]||(s[0]=[a("探索 Java 的隐藏成本",-1)])]),_:1}),s[2]||(s[2]=a("” 技术讨论之中。",-1))])]),s[17]||(s[17]=t(`<h3 id="数据操作" tabindex="-1">数据操作 <a class="header-anchor" href="#数据操作" aria-label="Permalink to “数据操作”">​</a></h3><p>Kotlin 引入了高阶函数作为流的替代。 当您必须将一组数据转换为另一组数据或过滤集合时，它们非常有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fun foo(persons: MutableList&lt;Person&gt;) {</span></span>
<span class="line"><span>    persons.filter { it.age &gt;= 21 }</span></span>
<span class="line"><span>           .filter { it.name.startsWith(&quot;P&quot;) }</span></span>
<span class="line"><span>           .map { it.name }</span></span>
<span class="line"><span>           .sorted()</span></span>
<span class="line"><span>           .forEach(::println)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data class Person(val name: String, val age: Int)</span></span></code></pre></div><p>流也由 Google 通过 Jack 编译器提供。 不幸的是，Jack 不使用 Lombok，因为它在编译代码时跳过生成中间的 <code>.class</code> 文件，而 Lombok 却依赖于这些文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void foo(List&lt;Person&gt; persons) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这简直太好了，所以 catch 在哪里？ 令人悲伤的是，流从 API 24 才可用。谷歌做了好事，但哪个应用程序有用 <code>minSdkVersion = 24</code>？</p><p>幸运的是，Android 平台有一个很好的提供许多很棒的库的开源社区。Lightweight-Stream-API 就是其中的一个，它包含了 Java 7 及以下版本的基于迭代器的流实现。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import lombok.Data;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>上面的例子结合了 Lombok、Retrolambda 和 Lightweight-Stream-API，它看起来几乎和 Kotlin 一样棒。使用静态工厂方法允许您将任何 Iterable 转换为流，并对其应用 lambda，就像 Java 8 流一样。 将静态调用 <code>Stream.of(persons)</code> 包装为 Iterable 类型的扩展函数是完美的，但是 Java 不支持它。</p><h3 id="扩展函数" tabindex="-1">扩展函数 <a class="header-anchor" href="#扩展函数" aria-label="Permalink to “扩展函数”">​</a></h3><p>扩展机制提供了向类添加功能而无需继承它的能力。 这个众所周知的概念非常适合 Android 世界，这就是 Kotlin 在该社区很受欢迎的原因。</p><p>有没有技术或魔术将扩展功能添加到你的 Java 工具箱？ 因 Lombok，你可以使用它们作为一个实验功能。 根据 Lombok 文档的说明，他们想把它从实验状态移出，基本上没有什么变化的话很快。 让我们重构最后一个例子，并将 <code>Stream.of(persons)</code> 包装成扩展函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import lombok.Data;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>所有的方法是 <code>public</code>、<code>static</code> 的，并且至少有一个参数的类型不是原始的，因而是扩展方法。 <code>@ExtensionMethod</code> 注解允许你指定一个包含你的扩展函数的类。 你也可以传递数组，而不是使用一个 <code>.class</code> 对象。</p><hr><p>我完全知道我的一些想法是非常有争议的，特别是 Lombok，我也知道，有很多的库，可以使你的生活更轻松。请不要犹豫在评论里分享你的经验。干杯!</p><p><img src="https://cdn-images-1.medium.com/max/800/1*peB9mmElOn6xwR3eH0HXXA.png" alt=""></p><hr><p>作者简介：</p><p><img src="https://cdn-images-1.medium.com/fit/c/60/60/1*l7_L6VCKzkOm0gq4Kplnkw.jpeg" alt=""></p><p>Coder and professional dreamer @ Grid Dynamics</p><hr>`,22)),i("p",null,[s[4]||(s[4]=a("via: ",-1)),p(n,{href:"https://medium.com/proandroiddev/living-android-without-kotlin-db7391a2b170"},{default:e(()=>[...s[3]||(s[3]=[a("https://medium.com/proandroiddev/living-android-without-kotlin-db7391a2b170",-1)])]),_:1})]),i("p",null,[s[8]||(s[8]=a("作者：",-1)),p(n,{href:"https://hackernoon.com/@piotr.slesarew?source=post_header_lockup"},{default:e(()=>[...s[5]||(s[5]=[a("Piotr Ślesarew",-1)])]),_:1}),s[9]||(s[9]=a(" 译者：",-1)),p(n,{href:"https://github.com/DockerChen"},{default:e(()=>[...s[6]||(s[6]=[a("DockerChen",-1)])]),_:1}),s[10]||(s[10]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[7]||(s[7]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[13]||(s[13]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[11]||(s[11]=[a("LCTT",-1)])]),_:1}),s[14]||(s[14]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[12]||(s[12]=[a("Linux中国",-1)])]),_:1}),s[15]||(s[15]=a(" 荣誉推出",-1))])])}const y=l(c,[["render",g]]);export{C as __pageData,y as default};
