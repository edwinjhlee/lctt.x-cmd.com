import{_ as l,a0 as t,w as o,s as c,ao as d,I as i,x as a,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"Java 循环语句的简要指南 | LCTT x X-CMD","titleTemplate":false,"description":"Java 循环语句的简要指南 | LCTT (202301) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Java 循环语句的简要指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Java 循环语句的简要指南 | LCTT (202301) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202301/20230114.0 ⭐️ A 4-minute guide to Java loops","title":"Java 循环语句的简要指南","tag":"202301","desc":""},"relativePath":"202301/20230114.0 ⭐️ A 4-minute guide to Java loops.md","filePath":"[post].md"}'),h={name:"202301/20230114.0 ⭐️ A 4-minute guide to Java loops.md"};function r(u,s,g,k,b,m){const n=t("Link");return o(),c("div",null,[s[15]||(s[15]=d(`<h1 id="java-循环语句的简要指南" tabindex="-1">Java 循环语句的简要指南 <a class="header-anchor" href="#java-循环语句的简要指南" aria-label="Permalink to “Java 循环语句的简要指南”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202301/31/093057lesc38vufbuzustm.jpg" alt=""></p><blockquote><p>无论你使用的是 <code>while</code> 循环、<code>do</code>/<code>while</code> 循环，还是无限循环，了解循环的工作原理对 Java 编程至关重要。</p></blockquote><p>只要某些预定的条件为真，一个 <code>while</code> 循环就会执行一组任务。这被认为是一个控制结构，可以指导程序的流程。它是一种你可以通过定义一个条件来告诉你的代码要做什么的方法，它可以测试它，并根据它发现的情况采取行动。Java 中的两种 <code>while</code> 循环是 <code>while</code> 和 <code>do</code>/<code>while</code>。</p><h3 id="java-while-循环" tabindex="-1">Java while 循环 <a class="header-anchor" href="#java-while-循环" aria-label="Permalink to “Java while 循环”">​</a></h3><p><code>while</code> 循环的目的是对数据进行迭代，直到某个条件得到满足。要创建一个 <code>while</code> 循环，你需要提供一个可以测试的条件，然后是你想要运行的代码。Java 有几个内置的测试函数，其中最简单的是数学运算符（<code>&lt;</code>, <code>&gt;</code>, <code>==</code>, 等等）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Example {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int count = 0;</span></span>
<span class="line"><span>  while (count &lt; 5) {</span></span>
<span class="line"><span>    System.out.printf(&quot;%d &quot;, count);</span></span>
<span class="line"><span>    count++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个简单的例子中，条件是变量 <code>count</code> 小于 5。因为 <code>count</code> 被实例化为 0，然后在 <code>while</code> 循环的代码中增加 1，所以程序总共迭代了 5 次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./while.java</span></span>
<span class="line"><span>0 1 2 3 4</span></span></code></pre></div><p>在它进行第六次迭代之前，条件不再是真的，所以循环结束。</p><p><code>while</code> 循环的条件语句是至关重要的。弄错了可能意味着你的循环永远不会执行。例如，假设你把 <code>count == 5</code> 作为条件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while (count == 5) {</span></span>
<span class="line"><span>    System.out.printf(&quot;%d &quot;, count);</span></span>
<span class="line"><span>    count++;</span></span></code></pre></div><p>当你运行这段代码时，它的构建和运行都很成功，但什么也没有发生：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./while.java</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>循环被跳过了，因为 <code>count</code> 被设置为 0，而且在第一次遇到 while 循环的时候，它还是 0。循环从未开始，<code>count</code> 也从未被递增。</p><p>与此相反的是，当一个条件开始为真，并且永远不会为假时，这将导致一个无限循环。</p><h3 id="java-do-while-循环" tabindex="-1">Java do while 循环 <a class="header-anchor" href="#java-do-while-循环" aria-label="Permalink to “Java do while 循环”">​</a></h3><p>与 <code>while</code> 循环相似，<code>do</code>/<code>while</code> 循环在每次迭代结束时测试条件，而不是在开始时测试条件。有了这个循环，循环中的代码至少运行一次，因为没有进入的入口，只有退出的出口:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Example {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int count = 9;</span></span>
<span class="line"><span>  do {</span></span>
<span class="line"><span>      System.out.printf(&quot;%d &quot;, count);</span></span>
<span class="line"><span>      count++;</span></span>
<span class="line"><span>    } while(count == 5);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这个示例代码中，<code>count</code> 被设置为 9。循环重复的条件是 <code>count</code> 等于 5，但是 9 不等于 5。不过，这个检查要到第一次迭代结束时才进行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./do.java</span></span>
<span class="line"><span>9</span></span></code></pre></div><h3 id="java-无限循环" tabindex="-1">Java 无限循环 <a class="header-anchor" href="#java-无限循环" aria-label="Permalink to “Java 无限循环”">​</a></h3><p>无限循环，正如它的名字所示，永远不会结束。有时它们是被错误地创建的，但无限循环确实有一个有效的场景。有时你想让一个进程无限地继续下去（在功能上是无限的，因为你不能保证你需要它什么时候停止），因此你可能会把你的条件设置为不可能满足的东西。</p><p>假设你写了一个应用程序，在僵尸天启期间计算留在你附近的僵尸的数量。为了模拟需要多少个循环才能达到 0 个僵尸的不确定性，我的演示代码从操作系统中检索了一个时间戳，并将计数器（<code>c</code>）的值设置为从该时间戳得出的某个数字。因为这是一个简单的例子，你不会真的想陷入一个无限循环，这段代码倒数到 0，并使用 <code>break</code> 函数来强制结束循环：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Example {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  long myTime = System.currentTimeMillis();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int c;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if ( myTime%2 == 0 ) {</span></span>
<span class="line"><span>      c = 128;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>      c = 1024;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while(true) {</span></span>
<span class="line"><span>    System.out.printf(&quot;%d Zombies\\n&quot;, c);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // break for convenience</span></span>
<span class="line"><span>    if ( c &lt;= 0 ) { break; }</span></span>
<span class="line"><span>    c--;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可能要运行几次才能触发不同的僵尸总数，但有时你的程序会迭代 128 次，有时会迭代 1024 次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./zcount.java</span></span>
<span class="line"><span>1024 Zombies</span></span>
<span class="line"><span>1023 Zombies</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>0 Zombies</span></span></code></pre></div><p>你能说出为什么循环的终点是 0 而不是 -1 吗？</p><h3 id="java-循环" tabindex="-1">Java 循环 <a class="header-anchor" href="#java-循环" aria-label="Permalink to “Java 循环”">​</a></h3><p>循环使你能够控制程序的执行流程。迭代在编程中很常见，无论你使用 <code>while</code> 循环、<code>do</code>/<code>while</code> 循环还是无限循环，了解循环的工作原理都是至关重要的。</p><hr>`,31)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://opensource.com/article/23/1/java-loops"},{default:p(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/23/1/java-loops",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://opensource.com/users/seth"},{default:p(()=>[...s[2]||(s[2]=[a("Seth Kenlon",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),e(n,{href:"https://github.com/lkxed"},{default:p(()=>[...s[3]||(s[3]=[a("lkxed",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),e(n,{href:"https://github.com/geekpi"},{default:p(()=>[...s[4]||(s[4]=[a("geekpi",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const w=l(h,[["render",r]]);export{x as __pageData,w as default};
