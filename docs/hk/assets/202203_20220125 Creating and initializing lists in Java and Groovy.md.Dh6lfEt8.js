import{_ as l,a0 as e,w as o,s as r,I as n,x as s,a1 as t,A as i,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"在 Java 和 Groovy 中創建和初始化列表的不同 | LCTT x X-CMD","titleTemplate":false,"description":"在 Java 和 Groovy 中創建和初始化列表的不同 | LCTT (202203) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Java 和 Groovy 中創建和初始化列表的不同 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Java 和 Groovy 中創建和初始化列表的不同 | LCTT (202203) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202203/20220125 Creating and initializing lists in Java and Groovy","title":"在 Java 和 Groovy 中創建和初始化列表的不同","tag":"202203","desc":""},"relativePath":"202203/20220125 Creating and initializing lists in Java and Groovy.md","filePath":"[post].md"}'),d={name:"202203/20220125 Creating and initializing lists in Java and Groovy.md"};function v(c,a,g,y,f,h){const p=e("Link");return o(),r("div",null,[a[26]||(a[26]=n("h1",{id:"在-java-和-groovy-中創建和初始化列表的不同",tabindex:"-1"},[s("在 Java 和 Groovy 中創建和初始化列表的不同 "),n("a",{class:"header-anchor",href:"#在-java-和-groovy-中創建和初始化列表的不同","aria-label":"Permalink to “在 Java 和 Groovy 中創建和初始化列表的不同”"},"​")],-1)),a[27]||(a[27]=n("blockquote",null,[n("p",null,"首先在 Java 中創建初始化一個整數列表，然後在 Groovy 中做同樣的事。")],-1)),a[28]||(a[28]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202203/29/214023b4r9rauua1gjp59l.jpg",alt:""})],-1)),n("p",null,[a[1]||(a[1]=s("我非常喜歡 ",-1)),t(p,{href:"http://www.groovy-lang.org/"},{default:i(()=>[...a[0]||(a[0]=[s("Groovy 編程語言",-1)])]),_:1}),a[2]||(a[2]=s("。我喜歡它是因為我喜歡 Java，儘管 Java 有時候感覺很笨拙。正因為我是那麼喜歡 Java，其他運行在 JVM 上語言都不能吸引我。比方説 Kotlin、Scala 還有 Clojure 語言，它們感覺上就和 Java 不一樣，因為它們對於什麼是好的編程語言的理解不同。Groovy 和它們都不一樣，在我看來，Groovy 是一個完美的選項，特別是對於一部分程序員來説，他們喜歡 Java，但是又需要一個更靈活、更緊湊，並且有時候更直接的語言。",-1))]),a[29]||(a[29]=n("p",null,[n("ruby",null,[s("列表"),n("rt",null,"List")]),s(" 這種數據結構是一個很好的例子，它可以容納一個無序的列表，列表中的元素可以是數字、字符串或者對象，程序員可以用某種方式高效地遍歷這些元素，特別是對於編寫和維護腳本的人來説，“高效”的關鍵就是要有簡潔清晰的表達，而不需要一大堆“儀式”，把代碼的意圖都變模糊了。")],-1)),a[30]||(a[30]=n("h3",{id:"安裝-java-和-groovy",tabindex:"-1"},[s("安裝 Java 和 Groovy "),n("a",{class:"header-anchor",href:"#安裝-java-和-groovy","aria-label":"Permalink to “安裝 Java 和 Groovy”"},"​")],-1)),n("p",null,[a[4]||(a[4]=s("Groovy 是基於 Java 的，因此需要同時安裝一個 Java 才行。你的 Linux 發行版的倉庫中可能有最近的比較好的 Java 版本。或者，你也可以在根據 ",-1)),t(p,{href:"http://www.groovy-lang.org/install.html"},{default:i(()=>[...a[3]||(a[3]=[s("這些指導",-1)])]),_:1}),a[5]||(a[5]=s(" 來安裝 Groovy。對於 Linux 用户來説，SDKMan 是一個不錯的代替選項，你可以使用它來獲取多個 Java 和 Groovy 版本，以及許多其他的相關工具。在這篇文章中，我使用的 SDK 發行版是：",-1))]),a[31]||(a[31]=u(`<ul><li>Java: OpenJDK 11 的 11.0.12-open 版本</li><li>Groovy: 3.0.8 版本</li></ul><h3 id="言歸正傳" tabindex="-1">言歸正傳 <a class="header-anchor" href="#言歸正傳" aria-label="Permalink to “言歸正傳”">​</a></h3><p>Java 中有很多方法可以實例化並初始化列表，從它最初被引入的時候就有了（我記得是在 Java 1.5 的時候，但請不要引用我的話）。在這些方法裏，有兩個有趣的方法，它們涉及到了 <code>java.util.Arrays</code> 和 <code>java.util.List</code> 這兩個類。</p><h4 id="使用-java-util-arrays-類" tabindex="-1">使用 java.util.Arrays 類 <a class="header-anchor" href="#使用-java-util-arrays-類" aria-label="Permalink to “使用 java.util.Arrays 類”">​</a></h4><p><code>java.util.Arrays</code> 類定義了一個 <code>asList()</code> 靜態方法，它可以被用來創建一個基於數組的列表，因此大小是不可變的，儘管其中的元素是可以被修改的。下面是它的使用方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var a1 = Arrays.asList(1,2,3,4,5,6,7,8,9,10); // immutable list of mutable elements</span></span>
<span class="line"><span></span></span>
<span class="line"><span>System.out.println(&quot;a1 = &quot; + a1);</span></span>
<span class="line"><span>System.out.println(&quot;a1 is an instance of &quot; + a1.getClass());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// output is</span></span>
<span class="line"><span>// a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span>// a1 is an instance of class java.util.Arrays$ArrayList</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a1.set(0,0); // succeeds</span></span>
<span class="line"><span>System.out.println(&quot;a1 = &quot; + a1); // output is</span></span>
<span class="line"><span>// a1 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a1.add(11); // fails producing</span></span>
<span class="line"><span>// Exception in thread &quot;main&quot; java.lang.UnsupportedOperationException</span></span>
<span class="line"><span>System.out.println(&quot;a1 = &quot; + a1); // not reached</span></span></code></pre></div><h4 id="使用-java-util-list-類" tabindex="-1">使用 java.util.List 類 <a class="header-anchor" href="#使用-java-util-list-類" aria-label="Permalink to “使用 java.util.List 類”">​</a></h4><p><code>java.util.List</code> 類定義了一個 <code>of()</code> 靜態方法，它可以被用來創建一個不可變的列表，其中的元素是否可變要取決於它們本身是否支持修改。下面是它的使用方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var a2 = List.of(1,2,3,4,5,6,7,8,9,10);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>System.out.println(&quot;a2 = &quot; + a2);</span></span>
<span class="line"><span>System.out.println(&quot;a2 is an instance of &quot; + a2.getClass());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// output is</span></span>
<span class="line"><span>// a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span>// a2 is an instance of class java.util.ImmutableCollections$ListN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a2.set(0,0); // fails producing</span></span>
<span class="line"><span>// Exception in thread &quot;main&quot; java.lang.UnsupportedOperationException</span></span>
<span class="line"><span>System.out.println(&quot;a2 = &quot; + a2); // not reached</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a2.add(11); // also fails for same reason if above two lines commented out</span></span>
<span class="line"><span>System.out.println(&quot;a2 = &quot; + a2); // not reached</span></span></code></pre></div><p>因此，我可以使用 <code>Arrays.asList()</code>，也可以使用 <code>List.of()</code> 方法，前提是如果我想要的是一個大小不能改變、且不關心元素是否可變的列表。</p><p>如果我想要初始化一個可變的列表，我更傾向於把這些不可變的列表作為參數傳給一個列表構造器，就像下面這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var a1 = new ArrayList&lt;Integer&gt;(Arrays.asList(1,2,3,4,5,6,7,8,9,10));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>System.out.println(&quot;a1 = &quot; + a1);</span></span>
<span class="line"><span>System.out.println(&quot;a1 is an instance of &quot; + a1.getClass());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// output is</span></span>
<span class="line"><span>// a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span>// a1 is an instance of class java.util.ArrayList</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a1.set(0,0);</span></span>
<span class="line"><span>System.out.println(&quot;a1 = &quot; + a1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//output is</span></span>
<span class="line"><span>// a1 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a1.add(11);</span></span>
<span class="line"><span>System.out.println(&quot;a1 = &quot; + a1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// output is</span></span>
<span class="line"><span>// a1 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]</span></span></code></pre></div><p>注意，這個 <code>Arrays.asList()</code> 方法是用來初始化這個新的 <code>ArrayList&lt;Integer&gt;()</code> 的，也就是説，它為這個傳進來的列表創建了一個可變的拷貝。</p><p>現在，或許只有我這麼想，但是這種方式確實看起來需要理解很多關於 <code>java.util.Arrays</code> 和 <code>java.util.List</code> 類的細節才行，而我只是想要創建並初始化一個數字列表而已（儘管真正使用到的語句並沒有太多“儀式”）。下面是真正用到的那行代碼，僅供參考：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var a1 = new ArrayList&lt;Integer&gt;(Arrays.asList(1,2,3,4,5,6,7,8,9,10));</span></span></code></pre></div><h3 id="groovy-是怎麼做的" tabindex="-1">Groovy 是怎麼做的 <a class="header-anchor" href="#groovy-是怎麼做的" aria-label="Permalink to “Groovy 是怎麼做的”">​</a></h3><p>下面來看看在 Groovy 中如何實現上述需求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>println &quot;a1 = $a1&quot;</span></span>
<span class="line"><span>println &quot;a1 is an instance of \${a1.getClass()}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// output is</span></span>
<span class="line"><span>// a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span>// a1 is an instance of class java.util.ArrayList</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a1[0] = 0</span></span>
<span class="line"><span>println &quot;a1 = $a1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// output is</span></span>
<span class="line"><span>// a1 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a1 &lt;&lt; 11</span></span>
<span class="line"><span>println &quot;a1 = $a1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// output is</span></span>
<span class="line"><span>// a1 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]</span></span></code></pre></div><p>我們一眼就能發現，Groovy 使用了 <code>def</code> 關鍵字而不是 <code>var</code> 關鍵字。我還發現了，僅僅是把一系列的類型（在這個例子裏是整數）放進括號裏，我就得到了一個創建好的列表。此外，這樣創建出來的列表完全就是我想要的：一個可變的 <code>ArrayList</code> 實例。</p><p>現在，或許再一次只有我這麼想，但是上面的代碼看起來要簡單多得多 —— 不用記住 <code>.of()</code> 和 <code>.asList()</code> 返回的是“<ruby>半不變<rt>semi-mutable</rt></ruby>”的結果，也不用為它們做一些補償。另外一個好處是，我現在可以使用括號和下標來引用列表中的某個特定元素，而不用這個叫 <code>set()</code> 方法。另外，這個跟在列表後面的 <code>&lt;&lt;</code> 操作符也很方便，我再也不用調用 <code>add()</code> 方法來添加元素啦。還有，你注意到代碼中沒有分號了嗎？沒錯，在 Groovy 裏，句末的分號並不是必須的。最後，我們來看看字符串插值，只要在字符串裏用 <code>$變量</code> 或者 <code>\${表達式}</code> 就可以實現了哦！</p><p>在 Groovy 世界中還藏着許多“有待發掘”的東西。上面的列表定義其實是一個動態類型（Groovy 中默認）和 Java 中的靜態類型的對比。在上面的 Groovy 代碼定義的那一行，變量 <code>a1</code> 的類型是在運行的時候，根據等號右邊的表達式的計算結果推斷出來的。現在我們都知道，動態語言可以給我們帶來強大的功能，有了強大的功能，我們有了很多機會去嘗試不同的東西。對於那些不喜歡動態類型的程序員來説，Groovy 也支持靜態類型。</p><h3 id="groovy-相關資源" tabindex="-1">Groovy 相關資源 <a class="header-anchor" href="#groovy-相關資源" aria-label="Permalink to “Groovy 相關資源”">​</a></h3>`,22)),n("p",null,[a[8]||(a[8]=s("Apache Groovy 網站上有非常多的文檔。另一個很棒的 Groovy 資源是 ",-1)),t(p,{href:"https://www.mrhaki.com/"},{default:i(()=>[...a[6]||(a[6]=[s("Mr. Haki",-1)])]),_:1}),a[9]||(a[9]=s("。學習 Groovy 還有一個很棒的原因，那就是可以接着學習 ",-1)),t(p,{href:"https://grails.org/"},{default:i(()=>[...a[7]||(a[7]=[s("Grails",-1)])]),_:1}),a[10]||(a[10]=s("，後者是一個優秀的、高效率的全棧 Web 框架，基於許多優秀組件構建而成，比如有 Hibernate、Spring Boot 和 Micronaut 等。",-1))]),a[32]||(a[32]=n("hr",null,null,-1)),n("p",null,[a[12]||(a[12]=s("via: ",-1)),t(p,{href:"https://opensource.com/article/22/1/creating-lists-groovy-java"},{default:i(()=>[...a[11]||(a[11]=[s("https://opensource.com/article/22/1/creating-lists-groovy-java",-1)])]),_:1})]),n("p",null,[a[17]||(a[17]=s("作者：",-1)),t(p,{href:"https://opensource.com/users/clhermansen"},{default:i(()=>[...a[13]||(a[13]=[s("Chris Hermansen",-1)])]),_:1}),a[18]||(a[18]=s(" 選題：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...a[14]||(a[14]=[s("lujun9972",-1)])]),_:1}),a[19]||(a[19]=s(" 譯者：",-1)),t(p,{href:"https://github.com/lkxed"},{default:i(()=>[...a[15]||(a[15]=[s("lkxed",-1)])]),_:1}),a[20]||(a[20]=s(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...a[16]||(a[16]=[s("wxy",-1)])]),_:1})]),n("p",null,[a[23]||(a[23]=s("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...a[21]||(a[21]=[s("LCTT",-1)])]),_:1}),a[24]||(a[24]=s(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...a[22]||(a[22]=[s("Linux中國",-1)])]),_:1}),a[25]||(a[25]=s(" 榮譽推出",-1))])])}const q=l(d,[["render",v]]);export{k as __pageData,q as default};
