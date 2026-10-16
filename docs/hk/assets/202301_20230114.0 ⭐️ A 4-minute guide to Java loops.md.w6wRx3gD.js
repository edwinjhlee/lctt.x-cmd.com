import{_ as l,a0 as t,w as o,s as c,ao as d,I as i,x as a,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"Java 循環語句的簡要指南 | LCTT x X-CMD","titleTemplate":false,"description":"Java 循環語句的簡要指南 | LCTT (202301) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Java 循環語句的簡要指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Java 循環語句的簡要指南 | LCTT (202301) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202301/20230114.0 ⭐️ A 4-minute guide to Java loops","title":"Java 循環語句的簡要指南","tag":"202301","desc":""},"relativePath":"202301/20230114.0 ⭐️ A 4-minute guide to Java loops.md","filePath":"[post].md"}'),h={name:"202301/20230114.0 ⭐️ A 4-minute guide to Java loops.md"};function r(u,s,g,k,b,m){const n=t("Link");return o(),c("div",null,[s[15]||(s[15]=d(`<h1 id="java-循環語句的簡要指南" tabindex="-1">Java 循環語句的簡要指南 <a class="header-anchor" href="#java-循環語句的簡要指南" aria-label="Permalink to “Java 循環語句的簡要指南”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202301/31/093057lesc38vufbuzustm.jpg" alt=""></p><blockquote><p>無論你使用的是 <code>while</code> 循環、<code>do</code>/<code>while</code> 循環，還是無限循環，瞭解循環的工作原理對 Java 編程至關重要。</p></blockquote><p>只要某些預定的條件為真，一個 <code>while</code> 循環就會執行一組任務。這被認為是一個控制結構，可以指導程序的流程。它是一種你可以通過定義一個條件來告訴你的代碼要做什麼的方法，它可以測試它，並根據它發現的情況採取行動。Java 中的兩種 <code>while</code> 循環是 <code>while</code> 和 <code>do</code>/<code>while</code>。</p><h3 id="java-while-循環" tabindex="-1">Java while 循環 <a class="header-anchor" href="#java-while-循環" aria-label="Permalink to “Java while 循環”">​</a></h3><p><code>while</code> 循環的目的是對數據進行迭代，直到某個條件得到滿足。要創建一個 <code>while</code> 循環，你需要提供一個可以測試的條件，然後是你想要運行的代碼。Java 有幾個內置的測試函數，其中最簡單的是數學運算符（<code>&lt;</code>, <code>&gt;</code>, <code>==</code>, 等等）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在這個簡單的例子中，條件是變量 <code>count</code> 小於 5。因為 <code>count</code> 被實例化為 0，然後在 <code>while</code> 循環的代碼中增加 1，所以程序總共迭代了 5 次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./while.java</span></span>
<span class="line"><span>0 1 2 3 4</span></span></code></pre></div><p>在它進行第六次迭代之前，條件不再是真的，所以循環結束。</p><p><code>while</code> 循環的條件語句是至關重要的。弄錯了可能意味着你的循環永遠不會執行。例如，假設你把 <code>count == 5</code> 作為條件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while (count == 5) {</span></span>
<span class="line"><span>    System.out.printf(&quot;%d &quot;, count);</span></span>
<span class="line"><span>    count++;</span></span></code></pre></div><p>當你運行這段代碼時，它的構建和運行都很成功，但什麼也沒有發生：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./while.java</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>循環被跳過了，因為 <code>count</code> 被設置為 0，而且在第一次遇到 while 循環的時候，它還是 0。循環從未開始，<code>count</code> 也從未被遞增。</p><p>與此相反的是，當一個條件開始為真，並且永遠不會為假時，這將導致一個無限循環。</p><h3 id="java-do-while-循環" tabindex="-1">Java do while 循環 <a class="header-anchor" href="#java-do-while-循環" aria-label="Permalink to “Java do while 循環”">​</a></h3><p>與 <code>while</code> 循環相似，<code>do</code>/<code>while</code> 循環在每次迭代結束時測試條件，而不是在開始時測試條件。有了這個循環，循環中的代碼至少運行一次，因為沒有進入的入口，只有退出的出口:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在這個示例代碼中，<code>count</code> 被設置為 9。循環重複的條件是 <code>count</code> 等於 5，但是 9 不等於 5。不過，這個檢查要到第一次迭代結束時才進行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./do.java</span></span>
<span class="line"><span>9</span></span></code></pre></div><h3 id="java-無限循環" tabindex="-1">Java 無限循環 <a class="header-anchor" href="#java-無限循環" aria-label="Permalink to “Java 無限循環”">​</a></h3><p>無限循環，正如它的名字所示，永遠不會結束。有時它們是被錯誤地創建的，但無限循環確實有一個有效的場景。有時你想讓一個進程無限地繼續下去（在功能上是無限的，因為你不能保證你需要它什麼時候停止），因此你可能會把你的條件設置為不可能滿足的東西。</p><p>假設你寫了一個應用程序，在殭屍天啓期間計算留在你附近的殭屍的數量。為了模擬需要多少個循環才能達到 0 個殭屍的不確定性，我的演示代碼從操作系統中檢索了一個時間戳，並將計數器（<code>c</code>）的值設置為從該時間戳得出的某個數字。因為這是一個簡單的例子，你不會真的想陷入一個無限循環，這段代碼倒數到 0，並使用 <code>break</code> 函數來強制結束循環：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>你可能要運行幾次才能觸發不同的殭屍總數，但有時你的程序會迭代 128 次，有時會迭代 1024 次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./zcount.java</span></span>
<span class="line"><span>1024 Zombies</span></span>
<span class="line"><span>1023 Zombies</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>0 Zombies</span></span></code></pre></div><p>你能説出為什麼循環的終點是 0 而不是 -1 嗎？</p><h3 id="java-循環" tabindex="-1">Java 循環 <a class="header-anchor" href="#java-循環" aria-label="Permalink to “Java 循環”">​</a></h3><p>循環使你能夠控制程序的執行流程。迭代在編程中很常見，無論你使用 <code>while</code> 循環、<code>do</code>/<code>while</code> 循環還是無限循環，瞭解循環的工作原理都是至關重要的。</p><hr>`,31)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://opensource.com/article/23/1/java-loops"},{default:p(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/23/1/java-loops",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://opensource.com/users/seth"},{default:p(()=>[...s[2]||(s[2]=[a("Seth Kenlon",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),e(n,{href:"https://github.com/lkxed"},{default:p(()=>[...s[3]||(s[3]=[a("lkxed",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),e(n,{href:"https://github.com/geekpi"},{default:p(()=>[...s[4]||(s[4]=[a("geekpi",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const w=l(h,[["render",r]]);export{x as __pageData,w as default};
