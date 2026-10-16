import{_ as t,a0 as o,w as r,s as d,ao as i,I as n,x as s,a1 as e,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何在 Java 中使用方法 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Java 中使用方法 | LCTT (202301) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Java 中使用方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Java 中使用方法 | LCTT (202301) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202301/20230110.3 ⭐️⭐️ How to use methods in Java","title":"如何在 Java 中使用方法","tag":"202301","desc":""},"relativePath":"202301/20230110.3 ⭐️⭐️ How to use methods in Java.md","filePath":"[post].md"}'),c={name:"202301/20230110.3 ⭐️⭐️ How to use methods in Java.md"};function u(m,a,g,h,b,k){const p=o("Link");return r(),d("div",null,[a[27]||(a[27]=i(`<h1 id="如何在-java-中使用方法" tabindex="-1">如何在 Java 中使用方法 <a class="header-anchor" href="#如何在-java-中使用方法" aria-label="Permalink to “如何在 Java 中使用方法”">​</a></h1><blockquote><p>在这个简便的教程中，我们可以了解到 Java 中方法的定义，如何使用方法，以及何时使用方法。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202301/24/003036jk84quk8ngdqgd8z.jpg" alt=""></p><p>Java 中的方法（在许多其他编程语言中称为“函数”）是被组合在一起并标记为可重用的一块代码。方法很有用，因为它们允许你在不重写相同代码的情况下，执行相同的操作或一系列操作，这不仅意味着你的工作量减少，还意味着出现问题时需要维护和调试的代码减少。</p><p>方法存在于类中，因此标准 Java 样板代码适用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Example {</span></span>
<span class="line"><span>  // 在此写代码</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这样一个简单的单文件应用程序中，包定义并不是绝对必要的，但它是一个很好的习惯，而且大多数 IDE 都强制执行它。</p><p>默认情况下，Java 会寻找在类中运行的 <code>main</code> 方法。方法可以是公有的或私有的，也可以是静态的或非静态的，但 <code>main</code> 方法必须是公有的、静态的，Java 编译器才能识别和使用它。当方法是公有的时，它可以从类外部执行。要在程序启动时调用 <code>Example</code> 类，其 <code>main</code> 方法必须是可访问的，因此将其设置为 <code>public</code>。</p><p>下面是两个方法的简单演示：一个 <code>main</code> 方法在调用 <code>Example</code> 类时默认执行，另一个 <code>report</code> 方法接受 <code>main</code> 的输入并执行简单操作。</p><p>为了模拟任意数据输入，我使用了 <code>if</code>-<code>then</code> 语句，该语句根据你启动应用程序的时间在两个字符串之间进行选择。换句话说，<code>main</code> 方法首先设置一些数据（在现实生活中，这些数据可以来自用户输入，也可以来自应用程序其他地方的其他方法），然后 “调用” <code>report</code>方法，将处理后的数据作为输入提供：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Example {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    // 生成一些数据</span></span>
<span class="line"><span>    long myTime = System.currentTimeMillis();</span></span>
<span class="line"><span>    String weather;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if ( myTime%2 == 0 ) {</span></span>
<span class="line"><span>      weather = &quot;party&quot;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      weather = &quot;apocalypse&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 调用其他方法</span></span>
<span class="line"><span>    report(weather);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  private static void report(String day) {</span></span>
<span class="line"><span>    System.out.printf(&quot;Welcome to the zombie %s\\n&quot;, day);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>运行代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./Example.java</span></span>
<span class="line"><span>Welcome to the zombie apocalypse</span></span>
<span class="line"><span>$ java ./Example.java</span></span>
<span class="line"><span>Welcome to the zombie party</span></span></code></pre></div><p>请注意，同一 <code>report</code> 方法有两个不同的结果。当然，在这个简单的演示中，不需要第二种方法。模拟数据生成的 <code>if</code>-<code>then</code> 语句可能生成了相同的结果。但是，当一个方法执行一项复杂的任务时，比如将图像调整为缩略图，然后使用调整后的图像在屏幕上生成小部件，那么附加组件的“费用”就很有意义了。</p><h3 id="何时使用-java-方法" tabindex="-1">何时使用 Java 方法 <a class="header-anchor" href="#何时使用-java-方法" aria-label="Permalink to “何时使用 Java 方法”">​</a></h3>`,15)),n("p",null,[a[1]||(a[1]=s("很难知道何时使用方法，何时只将数据发送到 ",-1)),e(p,{href:"https://opensource.com/article/20/1/javastream"},{default:l(()=>[...a[0]||(a[0]=[s("Java 流",-1)])]),_:1}),a[2]||(a[2]=s(" 或循环中。如果你面临这个决定，答案通常是使用一种方法。原因如下：",-1))]),a[28]||(a[28]=n("ul",null,[n("li",null,"方法开销少。它们不会给代码增加处理开销。"),n("li",null,"方法减少代码的行数。"),n("li",null,[s("方法是特定的。查找名为 "),n("code",null,"resizeImage"),s(" 的方法通常比查找隐藏在从驱动器加载图像的函数中某个循环中的代码更容易。")]),n("li",null,[s("方法是可重用的。当你第一次编写方法时，你可能会 "),n("em",null,"认为"),s(" 它只对应用程序中的一个任务有用。然而，随着应用程序的编写，你可能会发现自己正在使用一种你认为“已完成”的方法。")])],-1)),a[29]||(a[29]=n("h3",{id:"函数式编程与面向对象编程",tabindex:"-1"},[s("函数式编程与面向对象编程 "),n("a",{class:"header-anchor",href:"#函数式编程与面向对象编程","aria-label":"Permalink to “函数式编程与面向对象编程”"},"​")],-1)),n("p",null,[a[4]||(a[4]=s("函数式编程利用方法作为执行任务的主要构造。创建一个方法，该方法接受一种数据，处理该数据，并输出新数据。将许多方法串在一起，你就拥有了一个动态且功能强大的应用程序。像 C 和 ",-1)),e(p,{href:"https://opensource.com/article/22/11/lua-worth-learning"},{default:l(()=>[...a[3]||(a[3]=[s("Lua",-1)])]),_:1}),a[5]||(a[5]=s(" 这样的编程语言就是这种编码风格的例子。",-1))]),a[30]||(a[30]=i(`<p>用代码完成任务的另一种方式是 Java 使用的面向对象模型。在面向对象编程中，方法是模板的组成部分。你可以创建对象，而不是将数据从一个方法发送到另一个方法，并可以通过使用它们的方法来更改它们。</p><p>从面向对象的角度来看，这是一个简单的 “僵尸末日” 演示程序。在函数方法中，我使用一种方法生成数据，另一种方法使用该数据执行操作。面向对象的等价物是具有表示工作单元的类。这个示例应用程序向用户显示一条当天的消息，宣布这一天会有僵尸派对或是僵尸末日。编写一个“天”对象，然后查询该对象以了解其特性是有意义的。作为演示面向对象构造的不同方面的借口，新的示例应用程序还将统计有多少僵尸出现在派对上（或末日）。</p><p>Java 为每个类使用一个文件，因此要创建的第一个文件是 <code>Day.Java</code>，它用作 <code>Day</code> 对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.Random;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 类</span></span>
<span class="line"><span>public class Day {</span></span>
<span class="line"><span>    public static String weather;</span></span>
<span class="line"><span>    public int count;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 构造方法</span></span>
<span class="line"><span>  public Day() {</span></span>
<span class="line"><span>    long myTime = System.currentTimeMillis();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if ( myTime%2 == 0 ) {</span></span>
<span class="line"><span>      weather = &quot;paradise&quot;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      weather = &quot;apocalypse&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 方法</span></span>
<span class="line"><span>  public String report() {</span></span>
<span class="line"><span>      return weather;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public int counter() {</span></span>
<span class="line"><span>    Random rand = new Random();</span></span>
<span class="line"><span>    count = count + rand.nextInt(100);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return(count);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在“类”部分中，创建了两个域：天象 <code>weather</code> 和计数 <code>count</code>。<code>weather</code> 是静态的。在一天的过程中（在这种假想的情况下），<code>weather</code> 不会改变。要么是派对 <code>paradise</code>，要么是末日 <code>apocalypse</code>，持续了一整天。然而，僵尸的数量在一天中会增加。</p>`,5)),n("p",null,[a[7]||(a[7]=s("在“构造方法”部分，确定当天的天象。它是作为一个 ",-1)),e(p,{href:"https://opensource.com/article/19/6/what-java-constructor"},{default:l(()=>[...a[6]||(a[6]=[s("构造方法",-1)])]),_:1}),a[8]||(a[8]=s(" 完成的，因为它只在类最初被调用时发生一次。",-1))]),a[31]||(a[31]=i(`<p>在“方法”部分，<code>report</code> 方法只返回由构造方法确定和设置的天象报告。然而，<code>counter</code> 方法生成一个随机数，并将其添加到当前僵尸计数中。</p><p>换句话说，这个类做了三件不同的事情：</p><ul><li>表示应用程序定义的“天”。</li><li>设置当天不变的天气报告。</li><li>设置一天中不断增加的僵尸数量。</li></ul><p>要使用这所有，请创建第二个文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Example {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    Day myDay = new Day();</span></span>
<span class="line"><span>    String foo = myDay.report();</span></span>
<span class="line"><span>    String bar = myDay.report();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    System.out.printf(&quot;Welcome to a zombie %s\\n&quot;, foo);</span></span>
<span class="line"><span>    System.out.printf(&quot;Welcome to a zombie %s\\n&quot;, bar);</span></span>
<span class="line"><span>    System.out.printf(&quot;There are %d zombies out today.\\n&quot;, myDay.counter());</span></span>
<span class="line"><span>    System.out.printf(&quot;UPDATE: %d zombies. &quot;, myDay.counter());</span></span>
<span class="line"><span>    System.out.printf(&quot;UPDATE: %d zombies. &quot;, myDay.counter());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,5)),n("p",null,[a[10]||(a[10]=s("因为现在有两个文件，所以使用 Java IDE 运行代码是最简单的，但是如果不想使用 IDE，可以创建自己的 ",-1)),e(p,{href:"https://opensource.com/article/21/8/fastjar"},{default:l(()=>[...a[9]||(a[9]=[s("JAR 文件",-1)])]),_:1}),a[11]||(a[11]=s("。运行代码以查看结果：",-1))]),a[32]||(a[32]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Welcome to a zombie apocalypse</span></span>
<span class="line"><span>Welcome to a zombie apocalypse</span></span>
<span class="line"><span>There are 35 zombies out today.</span></span>
<span class="line"><span>UPDATE: 67 zombies. UPDATE: 149 zombies.</span></span></code></pre></div><p>无论调用 <code>report</code> 方法多少次，<code>weather</code> 都保持不变，但调用 <code>counter</code> 方法的次数越多，僵尸的数量就会增加。</p><h3 id="java-方法" tabindex="-1">Java 方法 <a class="header-anchor" href="#java-方法" aria-label="Permalink to “Java 方法”">​</a></h3><p>方法（或函数）是编程中的重要组成。在 Java 中，你可以将它们作为函数式编程的单个类的一部分使用，也可以在面向对象编程的类之间使用它们。两种类型的编程对于解决同一个问题有不同的视角，因此没有对与错之分。通过反复尝试，积累一点经验，你会知道哪一个最适合某个特定的问题。</p><hr>`,5)),n("p",null,[a[13]||(a[13]=s("via: ",-1)),e(p,{href:"https://opensource.com/article/23/1/java-methods"},{default:l(()=>[...a[12]||(a[12]=[s("https://opensource.com/article/23/1/java-methods",-1)])]),_:1})]),n("p",null,[a[18]||(a[18]=s("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:l(()=>[...a[14]||(a[14]=[s("Seth Kenlon",-1)])]),_:1}),a[19]||(a[19]=s(" 选题：",-1)),e(p,{href:"https://github.com/lkxed"},{default:l(()=>[...a[15]||(a[15]=[s("lkxed",-1)])]),_:1}),a[20]||(a[20]=s(" 译者：",-1)),e(p,{href:"https://github.com/ZhangZhanhaoxiang"},{default:l(()=>[...a[16]||(a[16]=[s("ZhangZhanhaoxiang",-1)])]),_:1}),a[21]||(a[21]=s(" 校对：",-1)),e(p,{href:"https://github.com/%E6%A0%A1%E5%AF%B9%E8%80%85ID"},{default:l(()=>[...a[17]||(a[17]=[s("wxy",-1)])]),_:1})]),n("p",null,[a[24]||(a[24]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...a[22]||(a[22]=[s("LCTT",-1)])]),_:1}),a[25]||(a[25]=s(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...a[23]||(a[23]=[s("Linux中国",-1)])]),_:1}),a[26]||(a[26]=s(" 荣誉推出",-1))])])}const T=t(c,[["render",u]]);export{y as __pageData,T as default};
