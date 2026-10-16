import{_ as l,a0 as e,w as o,s as r,I as n,x as s,a1 as t,A as i,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"在 Java 和 Groovy 中创建和初始化列表的不同 | LCTT x X-CMD","titleTemplate":false,"description":"在 Java 和 Groovy 中创建和初始化列表的不同 | LCTT (202203) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Java 和 Groovy 中创建和初始化列表的不同 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Java 和 Groovy 中创建和初始化列表的不同 | LCTT (202203) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202203/20220125 Creating and initializing lists in Java and Groovy","title":"在 Java 和 Groovy 中创建和初始化列表的不同","tag":"202203","desc":""},"relativePath":"202203/20220125 Creating and initializing lists in Java and Groovy.md","filePath":"[post].md"}'),d={name:"202203/20220125 Creating and initializing lists in Java and Groovy.md"};function v(c,a,g,y,f,h){const p=e("Link");return o(),r("div",null,[a[26]||(a[26]=n("h1",{id:"在-java-和-groovy-中创建和初始化列表的不同",tabindex:"-1"},[s("在 Java 和 Groovy 中创建和初始化列表的不同 "),n("a",{class:"header-anchor",href:"#在-java-和-groovy-中创建和初始化列表的不同","aria-label":"Permalink to “在 Java 和 Groovy 中创建和初始化列表的不同”"},"​")],-1)),a[27]||(a[27]=n("blockquote",null,[n("p",null,"首先在 Java 中创建初始化一个整数列表，然后在 Groovy 中做同样的事。")],-1)),a[28]||(a[28]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202203/29/214023b4r9rauua1gjp59l.jpg",alt:""})],-1)),n("p",null,[a[1]||(a[1]=s("我非常喜欢 ",-1)),t(p,{href:"http://www.groovy-lang.org/"},{default:i(()=>[...a[0]||(a[0]=[s("Groovy 编程语言",-1)])]),_:1}),a[2]||(a[2]=s("。我喜欢它是因为我喜欢 Java，尽管 Java 有时候感觉很笨拙。正因为我是那么喜欢 Java，其他运行在 JVM 上语言都不能吸引我。比方说 Kotlin、Scala 还有 Clojure 语言，它们感觉上就和 Java 不一样，因为它们对于什么是好的编程语言的理解不同。Groovy 和它们都不一样，在我看来，Groovy 是一个完美的选项，特别是对于一部分程序员来说，他们喜欢 Java，但是又需要一个更灵活、更紧凑，并且有时候更直接的语言。",-1))]),a[29]||(a[29]=n("p",null,[n("ruby",null,[s("列表"),n("rt",null,"List")]),s(" 这种数据结构是一个很好的例子，它可以容纳一个无序的列表，列表中的元素可以是数字、字符串或者对象，程序员可以用某种方式高效地遍历这些元素，特别是对于编写和维护脚本的人来说，“高效”的关键就是要有简洁清晰的表达，而不需要一大堆“仪式”，把代码的意图都变模糊了。")],-1)),a[30]||(a[30]=n("h3",{id:"安装-java-和-groovy",tabindex:"-1"},[s("安装 Java 和 Groovy "),n("a",{class:"header-anchor",href:"#安装-java-和-groovy","aria-label":"Permalink to “安装 Java 和 Groovy”"},"​")],-1)),n("p",null,[a[4]||(a[4]=s("Groovy 是基于 Java 的，因此需要同时安装一个 Java 才行。你的 Linux 发行版的仓库中可能有最近的比较好的 Java 版本。或者，你也可以在根据 ",-1)),t(p,{href:"http://www.groovy-lang.org/install.html"},{default:i(()=>[...a[3]||(a[3]=[s("这些指导",-1)])]),_:1}),a[5]||(a[5]=s(" 来安装 Groovy。对于 Linux 用户来说，SDKMan 是一个不错的代替选项，你可以使用它来获取多个 Java 和 Groovy 版本，以及许多其他的相关工具。在这篇文章中，我使用的 SDK 发行版是：",-1))]),a[31]||(a[31]=u(`<ul><li>Java: OpenJDK 11 的 11.0.12-open 版本</li><li>Groovy: 3.0.8 版本</li></ul><h3 id="言归正传" tabindex="-1">言归正传 <a class="header-anchor" href="#言归正传" aria-label="Permalink to “言归正传”">​</a></h3><p>Java 中有很多方法可以实例化并初始化列表，从它最初被引入的时候就有了（我记得是在 Java 1.5 的时候，但请不要引用我的话）。在这些方法里，有两个有趣的方法，它们涉及到了 <code>java.util.Arrays</code> 和 <code>java.util.List</code> 这两个类。</p><h4 id="使用-java-util-arrays-类" tabindex="-1">使用 java.util.Arrays 类 <a class="header-anchor" href="#使用-java-util-arrays-类" aria-label="Permalink to “使用 java.util.Arrays 类”">​</a></h4><p><code>java.util.Arrays</code> 类定义了一个 <code>asList()</code> 静态方法，它可以被用来创建一个基于数组的列表，因此大小是不可变的，尽管其中的元素是可以被修改的。下面是它的使用方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var a1 = Arrays.asList(1,2,3,4,5,6,7,8,9,10); // immutable list of mutable elements</span></span>
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
<span class="line"><span>System.out.println(&quot;a1 = &quot; + a1); // not reached</span></span></code></pre></div><h4 id="使用-java-util-list-类" tabindex="-1">使用 java.util.List 类 <a class="header-anchor" href="#使用-java-util-list-类" aria-label="Permalink to “使用 java.util.List 类”">​</a></h4><p><code>java.util.List</code> 类定义了一个 <code>of()</code> 静态方法，它可以被用来创建一个不可变的列表，其中的元素是否可变要取决于它们本身是否支持修改。下面是它的使用方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var a2 = List.of(1,2,3,4,5,6,7,8,9,10);</span></span>
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
<span class="line"><span>System.out.println(&quot;a2 = &quot; + a2); // not reached</span></span></code></pre></div><p>因此，我可以使用 <code>Arrays.asList()</code>，也可以使用 <code>List.of()</code> 方法，前提是如果我想要的是一个大小不能改变、且不关心元素是否可变的列表。</p><p>如果我想要初始化一个可变的列表，我更倾向于把这些不可变的列表作为参数传给一个列表构造器，就像下面这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var a1 = new ArrayList&lt;Integer&gt;(Arrays.asList(1,2,3,4,5,6,7,8,9,10));</span></span>
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
<span class="line"><span>// a1 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]</span></span></code></pre></div><p>注意，这个 <code>Arrays.asList()</code> 方法是用来初始化这个新的 <code>ArrayList&lt;Integer&gt;()</code> 的，也就是说，它为这个传进来的列表创建了一个可变的拷贝。</p><p>现在，或许只有我这么想，但是这种方式确实看起来需要理解很多关于 <code>java.util.Arrays</code> 和 <code>java.util.List</code> 类的细节才行，而我只是想要创建并初始化一个数字列表而已（尽管真正使用到的语句并没有太多“仪式”）。下面是真正用到的那行代码，仅供参考：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var a1 = new ArrayList&lt;Integer&gt;(Arrays.asList(1,2,3,4,5,6,7,8,9,10));</span></span></code></pre></div><h3 id="groovy-是怎么做的" tabindex="-1">Groovy 是怎么做的 <a class="header-anchor" href="#groovy-是怎么做的" aria-label="Permalink to “Groovy 是怎么做的”">​</a></h3><p>下面来看看在 Groovy 中如何实现上述需求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
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
<span class="line"><span>// a1 = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]</span></span></code></pre></div><p>我们一眼就能发现，Groovy 使用了 <code>def</code> 关键字而不是 <code>var</code> 关键字。我还发现了，仅仅是把一系列的类型（在这个例子里是整数）放进括号里，我就得到了一个创建好的列表。此外，这样创建出来的列表完全就是我想要的：一个可变的 <code>ArrayList</code> 实例。</p><p>现在，或许再一次只有我这么想，但是上面的代码看起来要简单多得多 —— 不用记住 <code>.of()</code> 和 <code>.asList()</code> 返回的是“<ruby>半不变<rt>semi-mutable</rt></ruby>”的结果，也不用为它们做一些补偿。另外一个好处是，我现在可以使用括号和下标来引用列表中的某个特定元素，而不用这个叫 <code>set()</code> 方法。另外，这个跟在列表后面的 <code>&lt;&lt;</code> 操作符也很方便，我再也不用调用 <code>add()</code> 方法来添加元素啦。还有，你注意到代码中没有分号了吗？没错，在 Groovy 里，句末的分号并不是必须的。最后，我们来看看字符串插值，只要在字符串里用 <code>$变量</code> 或者 <code>\${表达式}</code> 就可以实现了哦！</p><p>在 Groovy 世界中还藏着许多“有待发掘”的东西。上面的列表定义其实是一个动态类型（Groovy 中默认）和 Java 中的静态类型的对比。在上面的 Groovy 代码定义的那一行，变量 <code>a1</code> 的类型是在运行的时候，根据等号右边的表达式的计算结果推断出来的。现在我们都知道，动态语言可以给我们带来强大的功能，有了强大的功能，我们有了很多机会去尝试不同的东西。对于那些不喜欢动态类型的程序员来说，Groovy 也支持静态类型。</p><h3 id="groovy-相关资源" tabindex="-1">Groovy 相关资源 <a class="header-anchor" href="#groovy-相关资源" aria-label="Permalink to “Groovy 相关资源”">​</a></h3>`,22)),n("p",null,[a[8]||(a[8]=s("Apache Groovy 网站上有非常多的文档。另一个很棒的 Groovy 资源是 ",-1)),t(p,{href:"https://www.mrhaki.com/"},{default:i(()=>[...a[6]||(a[6]=[s("Mr. Haki",-1)])]),_:1}),a[9]||(a[9]=s("。学习 Groovy 还有一个很棒的原因，那就是可以接着学习 ",-1)),t(p,{href:"https://grails.org/"},{default:i(()=>[...a[7]||(a[7]=[s("Grails",-1)])]),_:1}),a[10]||(a[10]=s("，后者是一个优秀的、高效率的全栈 Web 框架，基于许多优秀组件构建而成，比如有 Hibernate、Spring Boot 和 Micronaut 等。",-1))]),a[32]||(a[32]=n("hr",null,null,-1)),n("p",null,[a[12]||(a[12]=s("via: ",-1)),t(p,{href:"https://opensource.com/article/22/1/creating-lists-groovy-java"},{default:i(()=>[...a[11]||(a[11]=[s("https://opensource.com/article/22/1/creating-lists-groovy-java",-1)])]),_:1})]),n("p",null,[a[17]||(a[17]=s("作者：",-1)),t(p,{href:"https://opensource.com/users/clhermansen"},{default:i(()=>[...a[13]||(a[13]=[s("Chris Hermansen",-1)])]),_:1}),a[18]||(a[18]=s(" 选题：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...a[14]||(a[14]=[s("lujun9972",-1)])]),_:1}),a[19]||(a[19]=s(" 译者：",-1)),t(p,{href:"https://github.com/lkxed"},{default:i(()=>[...a[15]||(a[15]=[s("lkxed",-1)])]),_:1}),a[20]||(a[20]=s(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...a[16]||(a[16]=[s("wxy",-1)])]),_:1})]),n("p",null,[a[23]||(a[23]=s("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...a[21]||(a[21]=[s("LCTT",-1)])]),_:1}),a[24]||(a[24]=s(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...a[22]||(a[22]=[s("Linux中国",-1)])]),_:1}),a[25]||(a[25]=s(" 荣誉推出",-1))])])}const q=l(d,[["render",v]]);export{k as __pageData,q as default};
