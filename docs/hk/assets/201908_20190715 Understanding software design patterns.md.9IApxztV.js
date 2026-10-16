import{_ as i,a0 as r,w as o,s as d,I as a,x as n,a1 as e,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"理解軟件設計模式 | LCTT x X-CMD","titleTemplate":false,"description":"理解軟件設計模式 | LCTT (201908) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"理解軟件設計模式 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"理解軟件設計模式 | LCTT (201908) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201908/20190715 Understanding software design patterns","title":"理解軟件設計模式","tag":"201908","desc":""},"relativePath":"201908/20190715 Understanding software design patterns.md","filePath":"[post].md"}'),u={name:"201908/20190715 Understanding software design patterns.md"};function g(b,s,c,k,f,v){const p=r("Link");return o(),d("div",null,[s[65]||(s[65]=a("h1",{id:"理解軟件設計模式",tabindex:"-1"},[n("理解軟件設計模式 "),a("a",{class:"header-anchor",href:"#理解軟件設計模式","aria-label":"Permalink to “理解軟件設計模式”"},"​")],-1)),s[66]||(s[66]=a("blockquote",null,[a("p",null,"設計模式可以幫助消除冗餘代碼。學習如何利用 Java 使用單例模式、工廠模式和觀察者模式。")],-1)),s[67]||(s[67]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201908/10/080849ygyqtrw88f2qtzk4.jpg",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("如果你是一名正在致力於計算機科學或者相關學科的程序員或者學生，很快，你將會遇到一條術語 “",-1)),s[3]||(s[3]=a("ruby",null,[n("軟件設計模式"),a("rt",null,"software design pattern")],-1)),s[4]||(s[4]=n("”。根據維基百科，“",-1)),a("em",null,[e(p,{href:"https://en.wikipedia.org/wiki/Software_design_pattern"},{default:l(()=>[...s[0]||(s[0]=[n("軟件設計模式",-1)])]),_:1}),s[1]||(s[1]=n("是在平常的軟件設計工作中所遭遇的問題的一種通用的、可重複使用的解決方案",-1))]),s[5]||(s[5]=n("”。我對該定義的理解是：當在從事於一個編碼項目時，你經常會思考，“嗯，這裏貌似是冗餘代碼，我覺得是否能改變這些代碼使之更靈活和便於修改？”因此，你會開始考慮怎樣分割那些保持不變的內容和需要經常改變的內容。",-1))]),s[68]||(s[68]=a("blockquote",null,[a("p",null,[a("strong",null,"設計模式"),n("是一種通過分割那些保持不變的部分和經常變化的部分，讓你的代碼更容易修改的方法。")])],-1)),a("p",null,[s[8]||(s[8]=n("不出意外的話，每個從事編程項目的人都可能會有同樣的思考。特別是那些工業級別的項目，在那裏通常工作着數十甚至數百名開發者；協作過程表明必須有一些標準和規則來使代碼更加優雅並適應變化。這就是為什麼我們有了 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},{default:l(()=>[...s[6]||(s[6]=[n("面向對象編程",-1)])]),_:1}),s[9]||(s[9]=n("（OOP）和 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Software_framework"},{default:l(()=>[...s[7]||(s[7]=[n("軟件框架工具",-1)])]),_:1}),s[10]||(s[10]=n("。設計模式有點類似於 OOP，但它通過將變化視為自然開發過程的一部分而進一步發展。基本上，設計模式利用了一些 OOP 的思想，比如抽象和接口，但是專注於改變的過程。",-1))]),s[69]||(s[69]=a("p",null,[n("當你開始開發項目時，你經常會聽到這樣一個術語"),a("em",null,"重構"),n("，它意味着"),a("em",null,"通過改變代碼使它變得更優雅和可複用"),n("；這就是設計模式耀眼的地方。當你處理現有代碼時（無論是由其他人構建還是你自己過去構建的），瞭解設計模式可以幫助你以不同的方式看待事物，你將發現問題以及改進代碼的方法。")],-1)),s[70]||(s[70]=a("p",null,"有很多種設計模式，其中單例模式、工廠模式和觀察者模式三種最受歡迎，在這篇文章中我將會一一介紹它們。",-1)),s[71]||(s[71]=a("h3",{id:"如何遵循本指南",tabindex:"-1"},[n("如何遵循本指南 "),a("a",{class:"header-anchor",href:"#如何遵循本指南","aria-label":"Permalink to “如何遵循本指南”"},"​")],-1)),a("p",null,[s[13]||(s[13]=n("無論你是一位有經驗的編程工作者還是一名剛剛接觸的新手，我想讓這篇教程讓每個人都很容易理解。設計模式概念並不容易理解，減少開始旅程時的學習曲線始終是首要任務。因此，除了這篇帶有圖表和代碼片段的文章外，我還創建了一個 ",-1)),e(p,{href:"https://github.com/bryantson/OpensourceDotComDemos/tree/master/TopDesignPatterns"},{default:l(()=>[...s[11]||(s[11]=[n("GitHub 倉庫",-1)])]),_:1}),s[14]||(s[14]=n("，你可以克隆倉庫並在你的電腦上運行這些代碼來實現這三種設計模式。你也可以觀看我創建的 ",-1)),e(p,{href:"https://www.youtube.com/watch?v=VlBXYtLI7kE&feature=youtu.be"},{default:l(()=>[...s[12]||(s[12]=[n("YouTube視頻",-1)])]),_:1}),s[15]||(s[15]=n("。",-1))]),s[72]||(s[72]=a("h4",{id:"必要條件",tabindex:"-1"},[n("必要條件 "),a("a",{class:"header-anchor",href:"#必要條件","aria-label":"Permalink to “必要條件”"},"​")],-1)),s[73]||(s[73]=a("p",null,"如果你只是想了解一般的設計模式思想，則無需克隆示例項目或安裝任何工具。但是，如果要運行示例代碼，你需要安裝以下工具：",-1)),a("ul",null,[a("li",null,[s[17]||(s[17]=a("strong",null,"Java 開發套件（JDK）",-1)),s[18]||(s[18]=n("：我強烈建議使用 ",-1)),e(p,{href:"https://openjdk.java.net/"},{default:l(()=>[...s[16]||(s[16]=[n("OpenJDK",-1)])]),_:1}),s[19]||(s[19]=n("。",-1))]),a("li",null,[s[21]||(s[21]=a("strong",null,"Apache Maven",-1)),s[22]||(s[22]=n("：這個簡單的項目使用 ",-1)),e(p,{href:"https://maven.apache.org/"},{default:l(()=>[...s[20]||(s[20]=[n("Apache Maven",-1)])]),_:1}),s[23]||(s[23]=n(" 構建；好的是許多 IDE 自帶了Maven。",-1))]),a("li",null,[s[26]||(s[26]=a("strong",null,"交互式開發編輯器（IDE）",-1)),s[27]||(s[27]=n("：我使用 ",-1)),e(p,{href:"https://www.jetbrains.com/idea/download/#section=mac"},{default:l(()=>[...s[24]||(s[24]=[n("社區版 IntelliJ",-1)])]),_:1}),s[28]||(s[28]=n("，但是你也可以使用 ",-1)),e(p,{href:"https://www.eclipse.org/ide/"},{default:l(()=>[...s[25]||(s[25]=[n("Eclipse IDE",-1)])]),_:1}),s[29]||(s[29]=n(" 或者其他你喜歡的 Java IDE。",-1))]),a("li",null,[s[31]||(s[31]=a("strong",null,"Git",-1)),s[32]||(s[32]=n("：如果你想克隆這個工程，你需要 ",-1)),e(p,{href:"https://git-scm.com/"},{default:l(()=>[...s[30]||(s[30]=[n("Git",-1)])]),_:1}),s[33]||(s[33]=n(" 客户端。",-1))])]),s[74]||(s[74]=t('<p>安裝好 Git 後運行下列命令克隆這個工程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git clone https://github.com/bryantson/OpensourceDotComDemos.git</span></span></code></pre></div><p>然後在你喜歡的 IDE 中，你可以將 TopDesignPatterns 倉庫中的代碼作為 Apache Maven 項目導入。</p>',3)),a("p",null,[s[35]||(s[35]=n("我使用的是 Java，但你也可以使用支持",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)"},{default:l(()=>[...s[34]||(s[34]=[n("抽象原則",-1)])]),_:1}),s[36]||(s[36]=n("的任何編程語言來實現設計模式。",-1))]),s[75]||(s[75]=a("h3",{id:"單例模式-避免每次創建一個對象",tabindex:"-1"},[n("單例模式：避免每次創建一個對象 "),a("a",{class:"header-anchor",href:"#單例模式-避免每次創建一個對象","aria-label":"Permalink to “單例模式：避免每次創建一個對象”"},"​")],-1)),a("p",null,[a("ruby",null,[e(p,{href:"https://en.wikipedia.org/wiki/Singleton_pattern"},{default:l(()=>[...s[37]||(s[37]=[n("單例模式",-1)])]),_:1}),s[38]||(s[38]=a("rt",null,"singleton pattern",-1))]),s[39]||(s[39]=n("是非常流行的設計模式，它的實現相對來説很簡單，因為你只需要一個類。然而，許多開發人員爭論單例設計模式的是否利大於弊，因為它缺乏明顯的好處並且容易被濫用。很少有開發人員直接實現單例；相反，像 Spring Framework 和 Google Guice 等編程框架內置了單例設計模式的特性。",-1))]),s[76]||(s[76]=t(`<p>但是瞭解單例模式仍然有巨大的用處。單例模式確保一個類僅創建一次且提供了一個對它的全局訪問點。</p><blockquote><p><strong>單例模式</strong>：確保僅創建一個實例且避免在同一個項目中創建多個實例。</p></blockquote><p>下面這幅圖展示了典型的類對象創建過程。當客户端請求創建一個對象時，構造函數會創建或者實例化一個對象並調用方法返回這個類給調用者。但是每次請求一個對象都會發生這樣的情況：構造函數被調用，一個新的對象被創建並且它返回了一個獨一無二的對象。我猜面向對象語言的創建者有每次都創建一個新對象的理由，但是單例過程的支持者説這是冗餘的且浪費資源。</p><p><img src="https://opensource.com/sites/default/files/uploads/designpatterns1_normalclassinstantiation.jpg" alt="Normal class instantiation" title="Normal class instantiation"></p><p>下面這幅圖使用單例模式創建對象。這裏，構造函數僅當對象首次通過調用預先設計好的 <code>getInstance()</code> 方法時才會被調用。這通常通過檢查該值是否為 <code>null</code> 來完成，並且這個對象被作為私有變量保存在單例類的內部。下次 <code>getInstance()</code> 被調用時，這個類會返回第一次被創建的對象。而沒有新的對象產生；它只是返回舊的那一個。</p><p><img src="https://opensource.com/sites/default/files/uploads/designpatterns2_singletonpattern.jpg" alt="Singleton pattern instantiation" title="Singleton pattern instantiation"></p><p>下面這段代碼展示了創建單例模式最簡單的方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.singleton;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class OpensourceSingleton {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static OpensourceSingleton uniqueInstance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private OpensourceSingleton() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static OpensourceSingleton getInstance() {</span></span>
<span class="line"><span>        if (uniqueInstance == null) {</span></span>
<span class="line"><span>            uniqueInstance = new OpensourceSingleton();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return uniqueInstance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在調用方，這裏展示瞭如何調用單例類來獲取對象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Opensource newObject = Opensource.getInstance();</span></span></code></pre></div><p>這段代碼很好的驗證了單例模式的思想：</p><ol><li>當 <code>getInstance()</code> 被調用時，它通過檢查 <code>null</code> 值來檢查對象是否已經被創建。</li><li>如果值為 <code>null</code>，它會創建一個新對象並把它保存到私有域，返回這個對象給調用者。否則直接返回之前被創建的對象。</li></ol><p>單例模式實現的主要問題是它忽略了並行進程。當多個進程使用線程同時訪問資源時，這個問題就產生了。對於這種情況有對應的解決方案，它被稱為<em>雙重檢查鎖</em>，用於多線程安全，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.singleton;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ImprovedOpensourceSingleton {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private volatile static ImprovedOpensourceSingleton uniqueInstance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private ImprovedOpensourceSingleton() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static ImprovedOpensourceSingleton getInstance() {</span></span>
<span class="line"><span>        if (uniqueInstance == null) {</span></span>
<span class="line"><span>            synchronized (ImprovedOpensourceSingleton.class) {</span></span>
<span class="line"><span>                if (uniqueInstance == null) {</span></span>
<span class="line"><span>                    uniqueInstance = new ImprovedOpensourceSingleton();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return uniqueInstance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>再強調一下前面的觀點，確保只有在你認為這是一個安全的選擇時才直接實現你的單例模式。最好的方法是通過使用一個製作精良的編程框架來利用單例功能。</p><h3 id="工廠模式-將對象創建委派給工廠類以隱藏創建邏輯" tabindex="-1">工廠模式：將對象創建委派給工廠類以隱藏創建邏輯 <a class="header-anchor" href="#工廠模式-將對象創建委派給工廠類以隱藏創建邏輯" aria-label="Permalink to “工廠模式：將對象創建委派給工廠類以隱藏創建邏輯”">​</a></h3>`,16)),a("p",null,[a("ruby",null,[e(p,{href:"https://en.wikipedia.org/wiki/Factory_method_pattern"},{default:l(()=>[...s[40]||(s[40]=[n("工廠模式",-1)])]),_:1}),s[41]||(s[41]=a("rt",null,"factory pattern",-1))]),s[42]||(s[42]=n("是另一種眾所周知的設計模式，但是有一小點複雜。實現工廠模式的方法有很多，而下列的代碼示例為最簡單的實現方式。為了創建對象，工廠模式定義了一個接口，讓它的子類去決定實例化哪一個類。",-1))]),s[77]||(s[77]=t(`<blockquote><p><strong>工廠模式</strong>：將對象創建委派給工廠類，因此它能隱藏創建邏輯。</p></blockquote><p>下列的圖片展示了最簡單的工廠模式是如何實現的。</p><p><img src="https://opensource.com/sites/default/files/uploads/designpatterns3_factorypattern.jpg" alt="Factory pattern" title="Factory pattern"></p><p>客户端請求工廠類創建類型為 x 的某個對象，而不是客户端直接調用對象創建。根據其類型，工廠模式決定要創建和返回的對象。</p><p>在下列代碼示例中，<code>OpensourceFactory</code> 是工廠類實現，它從調用者那裏獲取<em>類型</em>並根據該輸入值決定要創建和返回的對象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.factory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class OpensourceFactory {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public OpensourceJVMServers getServerByVendor(String name) {</span></span>
<span class="line"><span>        if(name.equals(&quot;Apache&quot;)) {</span></span>
<span class="line"><span>            return new Tomcat();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if(name.equals(&quot;Eclipse&quot;)) {</span></span>
<span class="line"><span>            return new Jetty();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (name.equals(&quot;RedHat&quot;)) {</span></span>
<span class="line"><span>            return new WildFly();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            return null;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>OpenSourceJVMServer</code> 是一個 100% 的抽象類（即接口類），它指示要實現的是什麼，而不是怎樣實現：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.factory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface OpensourceJVMServers {</span></span>
<span class="line"><span>    public void startServer();</span></span>
<span class="line"><span>    public void stopServer();</span></span>
<span class="line"><span>    public String getName();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這是一個 <code>OpensourceJVMServers</code> 類的實現示例。當 <code>RedHat</code> 被作為類型傳遞給工廠類，<code>WildFly</code> 服務器將被創建：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.factory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class WildFly implements OpensourceJVMServers {</span></span>
<span class="line"><span>    public void startServer() {</span></span>
<span class="line"><span>        System.out.println(&quot;Starting WildFly Server...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void stopServer() {</span></span>
<span class="line"><span>        System.out.println(&quot;Shutting Down WildFly Server...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return &quot;WildFly&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="觀察者模式-訂閲主題並獲取相關更新的通知" tabindex="-1">觀察者模式：訂閲主題並獲取相關更新的通知 <a class="header-anchor" href="#觀察者模式-訂閲主題並獲取相關更新的通知" aria-label="Permalink to “觀察者模式：訂閲主題並獲取相關更新的通知”">​</a></h3>`,11)),a("p",null,[s[45]||(s[45]=n("最後是",-1)),a("ruby",null,[e(p,{href:"https://en.wikipedia.org/wiki/Observer_pattern"},{default:l(()=>[...s[43]||(s[43]=[n("觀察者模式",-1)])]),_:1}),s[44]||(s[44]=a("rt",null,"observer pattern",-1))]),s[46]||(s[46]=n("。像單例模式那樣，很少有專業的程序員直接實現觀察者模式。但是，許多消息隊列和數據服務實現都借用了觀察者模式的概念。觀察者模式在對象之間定義了一對多的依賴關係，當一個對象的狀態發生改變時，所有依賴它的對象都將被自動地通知和更新。",-1))]),s[78]||(s[78]=t(`<blockquote><p><strong>觀察者模式</strong>：如果有更新，那麼訂閲了該話題/主題的客户端將被通知。</p></blockquote><p>理解觀察者模式的最簡單方法是想像一個郵件列表，你可以在其中訂閲任何主題，無論是開源、技術、名人、烹飪還是您感興趣的任何其他內容。每個主題維護者一個它的訂閲者列表，在觀察者模式中它們相當於觀察者。當某一個主題更新時，它所有的訂閲者（觀察者）都將被通知這次改變。並且訂閲者總是能取消某一個主題的訂閲。</p><p>如下圖所示，客户端可以訂閲不同的主題並添加觀察者以獲得最新信息的通知。因為觀察者不斷的監聽着這個主題，這個觀察者會通知客户端任何發生的改變。</p><p><img src="https://opensource.com/sites/default/files/uploads/designpatterns4_observerpattern.jpg" alt="Observer pattern" title="Observer pattern"></p><p>讓我們來看看觀察者模式的代碼示例，從主題/話題類開始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.observer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface Topic {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void addObserver(Observer observer);</span></span>
<span class="line"><span>    public void deleteObserver(Observer observer);</span></span>
<span class="line"><span>    public void notifyObservers();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這段代碼描述了一個為不同的主題去實現已定義方法的接口。注意一個觀察者如何被添加、移除和通知的。</p><p>這是一個主題的實現示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.observer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Conference implements Topic {</span></span>
<span class="line"><span>    private List&lt;Observer&gt; listObservers;</span></span>
<span class="line"><span>    private int totalAttendees;</span></span>
<span class="line"><span>    private int totalSpeakers;</span></span>
<span class="line"><span>    private String nameEvent;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Conference() {</span></span>
<span class="line"><span>        listObservers = new ArrayList&lt;Observer&gt;();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void addObserver(Observer observer) {</span></span>
<span class="line"><span>        listObservers.add(observer);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void deleteObserver(Observer observer) {</span></span>
<span class="line"><span>        int i = listObservers.indexOf(observer);</span></span>
<span class="line"><span>        if (i &gt;= 0) {</span></span>
<span class="line"><span>            listObservers.remove(i);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void notifyObservers() {</span></span>
<span class="line"><span>        for (int i=0, nObservers = listObservers.size(); i &lt; nObservers; ++ i) {</span></span>
<span class="line"><span>            Observer observer = listObservers.get(i);</span></span>
<span class="line"><span>            observer.update(totalAttendees,totalSpeakers,nameEvent);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setConferenceDetails(int totalAttendees, int totalSpeakers, String nameEvent) {</span></span>
<span class="line"><span>        this.totalAttendees = totalAttendees;</span></span>
<span class="line"><span>        this.totalSpeakers = totalSpeakers;</span></span>
<span class="line"><span>        this.nameEvent = nameEvent;</span></span>
<span class="line"><span>        notifyObservers();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這段代碼定義了一個特定主題的實現。當發生改變時，這個實現調用它自己的方法。注意這將獲取觀察者的數量，它以列表方式存儲，並且可以通知和維護觀察者。</p><p>這是一個觀察者類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.observer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface Observer {</span></span>
<span class="line"><span>    public void update(int totalAttendees, int totalSpeakers, String nameEvent);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個類定義了一個接口，不同的觀察者可以實現該接口以執行特定的操作。</p><p>例如，實現了該接口的觀察者可以在會議上打印出與會者和發言人的數量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.observer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class MonitorConferenceAttendees implements Observer {</span></span>
<span class="line"><span>    private int totalAttendees;</span></span>
<span class="line"><span>    private int totalSpeakers;</span></span>
<span class="line"><span>    private String nameEvent;</span></span>
<span class="line"><span>    private Topic topic;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MonitorConferenceAttendees(Topic topic) {</span></span>
<span class="line"><span>        this.topic = topic;</span></span>
<span class="line"><span>        topic.addObserver(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void update(int totalAttendees, int totalSpeakers, String nameEvent) {</span></span>
<span class="line"><span>        this.totalAttendees = totalAttendees;</span></span>
<span class="line"><span>        this.totalSpeakers = totalSpeakers;</span></span>
<span class="line"><span>        this.nameEvent = nameEvent;</span></span>
<span class="line"><span>        printConferenceInfo();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void printConferenceInfo() {</span></span>
<span class="line"><span>        System.out.println(this.nameEvent + &quot; has &quot; + totalSpeakers + &quot; speakers and &quot; + totalAttendees + &quot; attendees&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="接下來" tabindex="-1">接下來 <a class="header-anchor" href="#接下來" aria-label="Permalink to “接下來”">​</a></h3><p>現在你已經閲讀了這篇對於設計模式的介紹引導，你還可以去尋求瞭解其他設計模式，例如外觀模式，模版模式和裝飾器模式。也有一些併發和分佈式系統的設計模式如斷路器模式和錨定模式。</p>`,17)),a("p",null,[s[48]||(s[48]=n("可是，我相信最好的磨礪你的技能的方式首先是通過在你的業餘項目或者練習中實現這些設計模式。你甚至可以開始考慮如何在實際項目中應用這些設計模式。接下來，我強烈建議你查看 OOP 的 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/SOLID"},{default:l(()=>[...s[47]||(s[47]=[n("SOLID 原則",-1)])]),_:1}),s[49]||(s[49]=n("。之後，你就準備好了解其他設計模式。",-1))]),s[79]||(s[79]=a("hr",null,null,-1)),a("p",null,[s[51]||(s[51]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/7/understanding-software-design-patterns"},{default:l(()=>[...s[50]||(s[50]=[n("https://opensource.com/article/19/7/understanding-software-design-patterns",-1)])]),_:1})]),a("p",null,[s[56]||(s[56]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/brsonhttps://opensource.com/users/erezhttps://opensource.com/users/brson"},{default:l(()=>[...s[52]||(s[52]=[n("Bryant Son",-1)])]),_:1}),s[57]||(s[57]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[53]||(s[53]=[n("lujun9972",-1)])]),_:1}),s[58]||(s[58]=n(" 譯者：",-1)),e(p,{href:"https://github.com/arrowfeng"},{default:l(()=>[...s[54]||(s[54]=[n("arrowfeng",-1)])]),_:1}),s[59]||(s[59]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[55]||(s[55]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[62]||(s[62]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[60]||(s[60]=[n("LCTT",-1)])]),_:1}),s[63]||(s[63]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[61]||(s[61]=[n("Linux中國",-1)])]),_:1}),s[64]||(s[64]=n(" 榮譽推出",-1))])])}const S=i(u,[["render",g]]);export{y as __pageData,S as default};
