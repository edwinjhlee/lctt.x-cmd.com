import{_ as t,a0 as o,w as r,s as d,ao as i,I as n,x as s,a1 as e,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"如何在 Java 中使用方法 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Java 中使用方法 | LCTT (202301) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Java 中使用方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Java 中使用方法 | LCTT (202301) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202301/20230110.3 ⭐️⭐️ How to use methods in Java","title":"如何在 Java 中使用方法","tag":"202301","desc":""},"relativePath":"202301/20230110.3 ⭐️⭐️ How to use methods in Java.md","filePath":"[post].md"}'),c={name:"202301/20230110.3 ⭐️⭐️ How to use methods in Java.md"};function u(m,a,g,h,b,k){const p=o("Link");return r(),d("div",null,[a[27]||(a[27]=i(`<h1 id="如何在-java-中使用方法" tabindex="-1">如何在 Java 中使用方法 <a class="header-anchor" href="#如何在-java-中使用方法" aria-label="Permalink to “如何在 Java 中使用方法”">​</a></h1><blockquote><p>在這個簡便的教程中，我們可以瞭解到 Java 中方法的定義，如何使用方法，以及何時使用方法。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202301/24/003036jk84quk8ngdqgd8z.jpg" alt=""></p><p>Java 中的方法（在許多其他編程語言中稱為“函數”）是被組合在一起並標記為可重用的一塊代碼。方法很有用，因為它們允許你在不重寫相同代碼的情況下，執行相同的操作或一系列操作，這不僅意味着你的工作量減少，還意味着出現問題時需要維護和調試的代碼減少。</p><p>方法存在於類中，因此標準 Java 樣板代碼適用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Example {</span></span>
<span class="line"><span>  // 在此寫代碼</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在這樣一個簡單的單文件應用程序中，包定義並不是絕對必要的，但它是一個很好的習慣，而且大多數 IDE 都強制執行它。</p><p>默認情況下，Java 會尋找在類中運行的 <code>main</code> 方法。方法可以是公有的或私有的，也可以是靜態的或非靜態的，但 <code>main</code> 方法必須是公有的、靜態的，Java 編譯器才能識別和使用它。當方法是公有的時，它可以從類外部執行。要在程序啓動時調用 <code>Example</code> 類，其 <code>main</code> 方法必須是可訪問的，因此將其設置為 <code>public</code>。</p><p>下面是兩個方法的簡單演示：一個 <code>main</code> 方法在調用 <code>Example</code> 類時默認執行，另一個 <code>report</code> 方法接受 <code>main</code> 的輸入並執行簡單操作。</p><p>為了模擬任意數據輸入，我使用了 <code>if</code>-<code>then</code> 語句，該語句根據你啓動應用程序的時間在兩個字符串之間進行選擇。換句話説，<code>main</code> 方法首先設置一些數據（在現實生活中，這些數據可以來自用户輸入，也可以來自應用程序其他地方的其他方法），然後 “調用” <code>report</code>方法，將處理後的數據作為輸入提供：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Example {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    // 生成一些數據</span></span>
<span class="line"><span>    long myTime = System.currentTimeMillis();</span></span>
<span class="line"><span>    String weather;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if ( myTime%2 == 0 ) {</span></span>
<span class="line"><span>      weather = &quot;party&quot;;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      weather = &quot;apocalypse&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 調用其他方法</span></span>
<span class="line"><span>    report(weather);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  private static void report(String day) {</span></span>
<span class="line"><span>    System.out.printf(&quot;Welcome to the zombie %s\\n&quot;, day);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>運行代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./Example.java</span></span>
<span class="line"><span>Welcome to the zombie apocalypse</span></span>
<span class="line"><span>$ java ./Example.java</span></span>
<span class="line"><span>Welcome to the zombie party</span></span></code></pre></div><p>請注意，同一 <code>report</code> 方法有兩個不同的結果。當然，在這個簡單的演示中，不需要第二種方法。模擬數據生成的 <code>if</code>-<code>then</code> 語句可能生成了相同的結果。但是，當一個方法執行一項複雜的任務時，比如將圖像調整為縮略圖，然後使用調整後的圖像在屏幕上生成小部件，那麼附加組件的“費用”就很有意義了。</p><h3 id="何時使用-java-方法" tabindex="-1">何時使用 Java 方法 <a class="header-anchor" href="#何時使用-java-方法" aria-label="Permalink to “何時使用 Java 方法”">​</a></h3>`,15)),n("p",null,[a[1]||(a[1]=s("很難知道何時使用方法，何時只將數據發送到 ",-1)),e(p,{href:"https://opensource.com/article/20/1/javastream"},{default:l(()=>[...a[0]||(a[0]=[s("Java 流",-1)])]),_:1}),a[2]||(a[2]=s(" 或循環中。如果你面臨這個決定，答案通常是使用一種方法。原因如下：",-1))]),a[28]||(a[28]=n("ul",null,[n("li",null,"方法開銷少。它們不會給代碼增加處理開銷。"),n("li",null,"方法減少代碼的行數。"),n("li",null,[s("方法是特定的。查找名為 "),n("code",null,"resizeImage"),s(" 的方法通常比查找隱藏在從驅動器加載圖像的函數中某個循環中的代碼更容易。")]),n("li",null,[s("方法是可重用的。當你第一次編寫方法時，你可能會 "),n("em",null,"認為"),s(" 它只對應用程序中的一個任務有用。然而，隨着應用程序的編寫，你可能會發現自己正在使用一種你認為“已完成”的方法。")])],-1)),a[29]||(a[29]=n("h3",{id:"函數式編程與面向對象編程",tabindex:"-1"},[s("函數式編程與面向對象編程 "),n("a",{class:"header-anchor",href:"#函數式編程與面向對象編程","aria-label":"Permalink to “函數式編程與面向對象編程”"},"​")],-1)),n("p",null,[a[4]||(a[4]=s("函數式編程利用方法作為執行任務的主要構造。創建一個方法，該方法接受一種數據，處理該數據，並輸出新數據。將許多方法串在一起，你就擁有了一個動態且功能強大的應用程序。像 C 和 ",-1)),e(p,{href:"https://opensource.com/article/22/11/lua-worth-learning"},{default:l(()=>[...a[3]||(a[3]=[s("Lua",-1)])]),_:1}),a[5]||(a[5]=s(" 這樣的編程語言就是這種編碼風格的例子。",-1))]),a[30]||(a[30]=i(`<p>用代碼完成任務的另一種方式是 Java 使用的面向對象模型。在面向對象編程中，方法是模板的組成部分。你可以創建對象，而不是將數據從一個方法發送到另一個方法，並可以通過使用它們的方法來更改它們。</p><p>從面向對象的角度來看，這是一個簡單的 “殭屍末日” 演示程序。在函數方法中，我使用一種方法生成數據，另一種方法使用該數據執行操作。面向對象的等價物是具有表示工作單元的類。這個示例應用程序向用户顯示一條當天的消息，宣佈這一天會有殭屍派對或是殭屍末日。編寫一個“天”對象，然後查詢該對象以瞭解其特性是有意義的。作為演示面向對象構造的不同方面的藉口，新的示例應用程序還將統計有多少殭屍出現在派對上（或末日）。</p><p>Java 為每個類使用一個文件，因此要創建的第一個文件是 <code>Day.Java</code>，它用作 <code>Day</code> 對象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.Random;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 類</span></span>
<span class="line"><span>public class Day {</span></span>
<span class="line"><span>    public static String weather;</span></span>
<span class="line"><span>    public int count;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 構造方法</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在“類”部分中，創建了兩個域：天象 <code>weather</code> 和計數 <code>count</code>。<code>weather</code> 是靜態的。在一天的過程中（在這種假想的情況下），<code>weather</code> 不會改變。要麼是派對 <code>paradise</code>，要麼是末日 <code>apocalypse</code>，持續了一整天。然而，殭屍的數量在一天中會增加。</p>`,5)),n("p",null,[a[7]||(a[7]=s("在“構造方法”部分，確定當天的天象。它是作為一個 ",-1)),e(p,{href:"https://opensource.com/article/19/6/what-java-constructor"},{default:l(()=>[...a[6]||(a[6]=[s("構造方法",-1)])]),_:1}),a[8]||(a[8]=s(" 完成的，因為它只在類最初被調用時發生一次。",-1))]),a[31]||(a[31]=i(`<p>在“方法”部分，<code>report</code> 方法只返回由構造方法確定和設置的天象報告。然而，<code>counter</code> 方法生成一個隨機數，並將其添加到當前殭屍計數中。</p><p>換句話説，這個類做了三件不同的事情：</p><ul><li>表示應用程序定義的“天”。</li><li>設置當天不變的天氣報告。</li><li>設置一天中不斷增加的殭屍數量。</li></ul><p>要使用這所有，請創建第二個文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.opensource.example;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,5)),n("p",null,[a[10]||(a[10]=s("因為現在有兩個文件，所以使用 Java IDE 運行代碼是最簡單的，但是如果不想使用 IDE，可以創建自己的 ",-1)),e(p,{href:"https://opensource.com/article/21/8/fastjar"},{default:l(()=>[...a[9]||(a[9]=[s("JAR 文件",-1)])]),_:1}),a[11]||(a[11]=s("。運行代碼以查看結果：",-1))]),a[32]||(a[32]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Welcome to a zombie apocalypse</span></span>
<span class="line"><span>Welcome to a zombie apocalypse</span></span>
<span class="line"><span>There are 35 zombies out today.</span></span>
<span class="line"><span>UPDATE: 67 zombies. UPDATE: 149 zombies.</span></span></code></pre></div><p>無論調用 <code>report</code> 方法多少次，<code>weather</code> 都保持不變，但調用 <code>counter</code> 方法的次數越多，殭屍的數量就會增加。</p><h3 id="java-方法" tabindex="-1">Java 方法 <a class="header-anchor" href="#java-方法" aria-label="Permalink to “Java 方法”">​</a></h3><p>方法（或函數）是編程中的重要組成。在 Java 中，你可以將它們作為函數式編程的單個類的一部分使用，也可以在面向對象編程的類之間使用它們。兩種類型的編程對於解決同一個問題有不同的視角，因此沒有對與錯之分。通過反覆嘗試，積累一點經驗，你會知道哪一個最適合某個特定的問題。</p><hr>`,5)),n("p",null,[a[13]||(a[13]=s("via: ",-1)),e(p,{href:"https://opensource.com/article/23/1/java-methods"},{default:l(()=>[...a[12]||(a[12]=[s("https://opensource.com/article/23/1/java-methods",-1)])]),_:1})]),n("p",null,[a[18]||(a[18]=s("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:l(()=>[...a[14]||(a[14]=[s("Seth Kenlon",-1)])]),_:1}),a[19]||(a[19]=s(" 選題：",-1)),e(p,{href:"https://github.com/lkxed"},{default:l(()=>[...a[15]||(a[15]=[s("lkxed",-1)])]),_:1}),a[20]||(a[20]=s(" 譯者：",-1)),e(p,{href:"https://github.com/ZhangZhanhaoxiang"},{default:l(()=>[...a[16]||(a[16]=[s("ZhangZhanhaoxiang",-1)])]),_:1}),a[21]||(a[21]=s(" 校對：",-1)),e(p,{href:"https://github.com/%E6%A0%A1%E5%B0%8D%E8%80%85ID"},{default:l(()=>[...a[17]||(a[17]=[s("wxy",-1)])]),_:1})]),n("p",null,[a[24]||(a[24]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...a[22]||(a[22]=[s("LCTT",-1)])]),_:1}),a[25]||(a[25]=s(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...a[23]||(a[23]=[s("Linux中國",-1)])]),_:1}),a[26]||(a[26]=s(" 榮譽推出",-1))])])}const T=t(c,[["render",u]]);export{y as __pageData,T as default};
