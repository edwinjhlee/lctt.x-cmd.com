import{_ as i,a0 as r,w as o,s as d,I as a,x as n,a1 as e,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"理解软件设计模式 | LCTT x X-CMD","titleTemplate":false,"description":"理解软件设计模式 | LCTT (201908) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"理解软件设计模式 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"理解软件设计模式 | LCTT (201908) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201908/20190715 Understanding software design patterns","title":"理解软件设计模式","tag":"201908","desc":""},"relativePath":"201908/20190715 Understanding software design patterns.md","filePath":"[post].md"}'),u={name:"201908/20190715 Understanding software design patterns.md"};function g(b,s,c,k,f,v){const p=r("Link");return o(),d("div",null,[s[65]||(s[65]=a("h1",{id:"理解软件设计模式",tabindex:"-1"},[n("理解软件设计模式 "),a("a",{class:"header-anchor",href:"#理解软件设计模式","aria-label":"Permalink to “理解软件设计模式”"},"​")],-1)),s[66]||(s[66]=a("blockquote",null,[a("p",null,"设计模式可以帮助消除冗余代码。学习如何利用 Java 使用单例模式、工厂模式和观察者模式。")],-1)),s[67]||(s[67]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201908/10/080849ygyqtrw88f2qtzk4.jpg",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("如果你是一名正在致力于计算机科学或者相关学科的程序员或者学生，很快，你将会遇到一条术语 “",-1)),s[3]||(s[3]=a("ruby",null,[n("软件设计模式"),a("rt",null,"software design pattern")],-1)),s[4]||(s[4]=n("”。根据维基百科，“",-1)),a("em",null,[e(p,{href:"https://en.wikipedia.org/wiki/Software_design_pattern"},{default:l(()=>[...s[0]||(s[0]=[n("软件设计模式",-1)])]),_:1}),s[1]||(s[1]=n("是在平常的软件设计工作中所遭遇的问题的一种通用的、可重复使用的解决方案",-1))]),s[5]||(s[5]=n("”。我对该定义的理解是：当在从事于一个编码项目时，你经常会思考，“嗯，这里貌似是冗余代码，我觉得是否能改变这些代码使之更灵活和便于修改？”因此，你会开始考虑怎样分割那些保持不变的内容和需要经常改变的内容。",-1))]),s[68]||(s[68]=a("blockquote",null,[a("p",null,[a("strong",null,"设计模式"),n("是一种通过分割那些保持不变的部分和经常变化的部分，让你的代码更容易修改的方法。")])],-1)),a("p",null,[s[8]||(s[8]=n("不出意外的话，每个从事编程项目的人都可能会有同样的思考。特别是那些工业级别的项目，在那里通常工作着数十甚至数百名开发者；协作过程表明必须有一些标准和规则来使代码更加优雅并适应变化。这就是为什么我们有了 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},{default:l(()=>[...s[6]||(s[6]=[n("面向对象编程",-1)])]),_:1}),s[9]||(s[9]=n("（OOP）和 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Software_framework"},{default:l(()=>[...s[7]||(s[7]=[n("软件框架工具",-1)])]),_:1}),s[10]||(s[10]=n("。设计模式有点类似于 OOP，但它通过将变化视为自然开发过程的一部分而进一步发展。基本上，设计模式利用了一些 OOP 的思想，比如抽象和接口，但是专注于改变的过程。",-1))]),s[69]||(s[69]=a("p",null,[n("当你开始开发项目时，你经常会听到这样一个术语"),a("em",null,"重构"),n("，它意味着"),a("em",null,"通过改变代码使它变得更优雅和可复用"),n("；这就是设计模式耀眼的地方。当你处理现有代码时（无论是由其他人构建还是你自己过去构建的），了解设计模式可以帮助你以不同的方式看待事物，你将发现问题以及改进代码的方法。")],-1)),s[70]||(s[70]=a("p",null,"有很多种设计模式，其中单例模式、工厂模式和观察者模式三种最受欢迎，在这篇文章中我将会一一介绍它们。",-1)),s[71]||(s[71]=a("h3",{id:"如何遵循本指南",tabindex:"-1"},[n("如何遵循本指南 "),a("a",{class:"header-anchor",href:"#如何遵循本指南","aria-label":"Permalink to “如何遵循本指南”"},"​")],-1)),a("p",null,[s[13]||(s[13]=n("无论你是一位有经验的编程工作者还是一名刚刚接触的新手，我想让这篇教程让每个人都很容易理解。设计模式概念并不容易理解，减少开始旅程时的学习曲线始终是首要任务。因此，除了这篇带有图表和代码片段的文章外，我还创建了一个 ",-1)),e(p,{href:"https://github.com/bryantson/OpensourceDotComDemos/tree/master/TopDesignPatterns"},{default:l(()=>[...s[11]||(s[11]=[n("GitHub 仓库",-1)])]),_:1}),s[14]||(s[14]=n("，你可以克隆仓库并在你的电脑上运行这些代码来实现这三种设计模式。你也可以观看我创建的 ",-1)),e(p,{href:"https://www.youtube.com/watch?v=VlBXYtLI7kE&feature=youtu.be"},{default:l(()=>[...s[12]||(s[12]=[n("YouTube视频",-1)])]),_:1}),s[15]||(s[15]=n("。",-1))]),s[72]||(s[72]=a("h4",{id:"必要条件",tabindex:"-1"},[n("必要条件 "),a("a",{class:"header-anchor",href:"#必要条件","aria-label":"Permalink to “必要条件”"},"​")],-1)),s[73]||(s[73]=a("p",null,"如果你只是想了解一般的设计模式思想，则无需克隆示例项目或安装任何工具。但是，如果要运行示例代码，你需要安装以下工具：",-1)),a("ul",null,[a("li",null,[s[17]||(s[17]=a("strong",null,"Java 开发套件（JDK）",-1)),s[18]||(s[18]=n("：我强烈建议使用 ",-1)),e(p,{href:"https://openjdk.java.net/"},{default:l(()=>[...s[16]||(s[16]=[n("OpenJDK",-1)])]),_:1}),s[19]||(s[19]=n("。",-1))]),a("li",null,[s[21]||(s[21]=a("strong",null,"Apache Maven",-1)),s[22]||(s[22]=n("：这个简单的项目使用 ",-1)),e(p,{href:"https://maven.apache.org/"},{default:l(()=>[...s[20]||(s[20]=[n("Apache Maven",-1)])]),_:1}),s[23]||(s[23]=n(" 构建；好的是许多 IDE 自带了Maven。",-1))]),a("li",null,[s[26]||(s[26]=a("strong",null,"交互式开发编辑器（IDE）",-1)),s[27]||(s[27]=n("：我使用 ",-1)),e(p,{href:"https://www.jetbrains.com/idea/download/#section=mac"},{default:l(()=>[...s[24]||(s[24]=[n("社区版 IntelliJ",-1)])]),_:1}),s[28]||(s[28]=n("，但是你也可以使用 ",-1)),e(p,{href:"https://www.eclipse.org/ide/"},{default:l(()=>[...s[25]||(s[25]=[n("Eclipse IDE",-1)])]),_:1}),s[29]||(s[29]=n(" 或者其他你喜欢的 Java IDE。",-1))]),a("li",null,[s[31]||(s[31]=a("strong",null,"Git",-1)),s[32]||(s[32]=n("：如果你想克隆这个工程，你需要 ",-1)),e(p,{href:"https://git-scm.com/"},{default:l(()=>[...s[30]||(s[30]=[n("Git",-1)])]),_:1}),s[33]||(s[33]=n(" 客户端。",-1))])]),s[74]||(s[74]=t('<p>安装好 Git 后运行下列命令克隆这个工程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git clone https://github.com/bryantson/OpensourceDotComDemos.git</span></span></code></pre></div><p>然后在你喜欢的 IDE 中，你可以将 TopDesignPatterns 仓库中的代码作为 Apache Maven 项目导入。</p>',3)),a("p",null,[s[35]||(s[35]=n("我使用的是 Java，但你也可以使用支持",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)"},{default:l(()=>[...s[34]||(s[34]=[n("抽象原则",-1)])]),_:1}),s[36]||(s[36]=n("的任何编程语言来实现设计模式。",-1))]),s[75]||(s[75]=a("h3",{id:"单例模式-避免每次创建一个对象",tabindex:"-1"},[n("单例模式：避免每次创建一个对象 "),a("a",{class:"header-anchor",href:"#单例模式-避免每次创建一个对象","aria-label":"Permalink to “单例模式：避免每次创建一个对象”"},"​")],-1)),a("p",null,[a("ruby",null,[e(p,{href:"https://en.wikipedia.org/wiki/Singleton_pattern"},{default:l(()=>[...s[37]||(s[37]=[n("单例模式",-1)])]),_:1}),s[38]||(s[38]=a("rt",null,"singleton pattern",-1))]),s[39]||(s[39]=n("是非常流行的设计模式，它的实现相对来说很简单，因为你只需要一个类。然而，许多开发人员争论单例设计模式的是否利大于弊，因为它缺乏明显的好处并且容易被滥用。很少有开发人员直接实现单例；相反，像 Spring Framework 和 Google Guice 等编程框架内置了单例设计模式的特性。",-1))]),s[76]||(s[76]=t(`<p>但是了解单例模式仍然有巨大的用处。单例模式确保一个类仅创建一次且提供了一个对它的全局访问点。</p><blockquote><p><strong>单例模式</strong>：确保仅创建一个实例且避免在同一个项目中创建多个实例。</p></blockquote><p>下面这幅图展示了典型的类对象创建过程。当客户端请求创建一个对象时，构造函数会创建或者实例化一个对象并调用方法返回这个类给调用者。但是每次请求一个对象都会发生这样的情况：构造函数被调用，一个新的对象被创建并且它返回了一个独一无二的对象。我猜面向对象语言的创建者有每次都创建一个新对象的理由，但是单例过程的支持者说这是冗余的且浪费资源。</p><p><img src="https://opensource.com/sites/default/files/uploads/designpatterns1_normalclassinstantiation.jpg" alt="Normal class instantiation" title="Normal class instantiation"></p><p>下面这幅图使用单例模式创建对象。这里，构造函数仅当对象首次通过调用预先设计好的 <code>getInstance()</code> 方法时才会被调用。这通常通过检查该值是否为 <code>null</code> 来完成，并且这个对象被作为私有变量保存在单例类的内部。下次 <code>getInstance()</code> 被调用时，这个类会返回第一次被创建的对象。而没有新的对象产生；它只是返回旧的那一个。</p><p><img src="https://opensource.com/sites/default/files/uploads/designpatterns2_singletonpattern.jpg" alt="Singleton pattern instantiation" title="Singleton pattern instantiation"></p><p>下面这段代码展示了创建单例模式最简单的方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.singleton;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在调用方，这里展示了如何调用单例类来获取对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Opensource newObject = Opensource.getInstance();</span></span></code></pre></div><p>这段代码很好的验证了单例模式的思想：</p><ol><li>当 <code>getInstance()</code> 被调用时，它通过检查 <code>null</code> 值来检查对象是否已经被创建。</li><li>如果值为 <code>null</code>，它会创建一个新对象并把它保存到私有域，返回这个对象给调用者。否则直接返回之前被创建的对象。</li></ol><p>单例模式实现的主要问题是它忽略了并行进程。当多个进程使用线程同时访问资源时，这个问题就产生了。对于这种情况有对应的解决方案，它被称为<em>双重检查锁</em>，用于多线程安全，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.singleton;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>再强调一下前面的观点，确保只有在你认为这是一个安全的选择时才直接实现你的单例模式。最好的方法是通过使用一个制作精良的编程框架来利用单例功能。</p><h3 id="工厂模式-将对象创建委派给工厂类以隐藏创建逻辑" tabindex="-1">工厂模式：将对象创建委派给工厂类以隐藏创建逻辑 <a class="header-anchor" href="#工厂模式-将对象创建委派给工厂类以隐藏创建逻辑" aria-label="Permalink to “工厂模式：将对象创建委派给工厂类以隐藏创建逻辑”">​</a></h3>`,16)),a("p",null,[a("ruby",null,[e(p,{href:"https://en.wikipedia.org/wiki/Factory_method_pattern"},{default:l(()=>[...s[40]||(s[40]=[n("工厂模式",-1)])]),_:1}),s[41]||(s[41]=a("rt",null,"factory pattern",-1))]),s[42]||(s[42]=n("是另一种众所周知的设计模式，但是有一小点复杂。实现工厂模式的方法有很多，而下列的代码示例为最简单的实现方式。为了创建对象，工厂模式定义了一个接口，让它的子类去决定实例化哪一个类。",-1))]),s[77]||(s[77]=t(`<blockquote><p><strong>工厂模式</strong>：将对象创建委派给工厂类，因此它能隐藏创建逻辑。</p></blockquote><p>下列的图片展示了最简单的工厂模式是如何实现的。</p><p><img src="https://opensource.com/sites/default/files/uploads/designpatterns3_factorypattern.jpg" alt="Factory pattern" title="Factory pattern"></p><p>客户端请求工厂类创建类型为 x 的某个对象，而不是客户端直接调用对象创建。根据其类型，工厂模式决定要创建和返回的对象。</p><p>在下列代码示例中，<code>OpensourceFactory</code> 是工厂类实现，它从调用者那里获取<em>类型</em>并根据该输入值决定要创建和返回的对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.factory;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p><code>OpenSourceJVMServer</code> 是一个 100% 的抽象类（即接口类），它指示要实现的是什么，而不是怎样实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.factory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface OpensourceJVMServers {</span></span>
<span class="line"><span>    public void startServer();</span></span>
<span class="line"><span>    public void stopServer();</span></span>
<span class="line"><span>    public String getName();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这是一个 <code>OpensourceJVMServers</code> 类的实现示例。当 <code>RedHat</code> 被作为类型传递给工厂类，<code>WildFly</code> 服务器将被创建：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.factory;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="观察者模式-订阅主题并获取相关更新的通知" tabindex="-1">观察者模式：订阅主题并获取相关更新的通知 <a class="header-anchor" href="#观察者模式-订阅主题并获取相关更新的通知" aria-label="Permalink to “观察者模式：订阅主题并获取相关更新的通知”">​</a></h3>`,11)),a("p",null,[s[45]||(s[45]=n("最后是",-1)),a("ruby",null,[e(p,{href:"https://en.wikipedia.org/wiki/Observer_pattern"},{default:l(()=>[...s[43]||(s[43]=[n("观察者模式",-1)])]),_:1}),s[44]||(s[44]=a("rt",null,"observer pattern",-1))]),s[46]||(s[46]=n("。像单例模式那样，很少有专业的程序员直接实现观察者模式。但是，许多消息队列和数据服务实现都借用了观察者模式的概念。观察者模式在对象之间定义了一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都将被自动地通知和更新。",-1))]),s[78]||(s[78]=t(`<blockquote><p><strong>观察者模式</strong>：如果有更新，那么订阅了该话题/主题的客户端将被通知。</p></blockquote><p>理解观察者模式的最简单方法是想象一个邮件列表，你可以在其中订阅任何主题，无论是开源、技术、名人、烹饪还是您感兴趣的任何其他内容。每个主题维护者一个它的订阅者列表，在观察者模式中它们相当于观察者。当某一个主题更新时，它所有的订阅者（观察者）都将被通知这次改变。并且订阅者总是能取消某一个主题的订阅。</p><p>如下图所示，客户端可以订阅不同的主题并添加观察者以获得最新信息的通知。因为观察者不断的监听着这个主题，这个观察者会通知客户端任何发生的改变。</p><p><img src="https://opensource.com/sites/default/files/uploads/designpatterns4_observerpattern.jpg" alt="Observer pattern" title="Observer pattern"></p><p>让我们来看看观察者模式的代码示例，从主题/话题类开始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.observer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface Topic {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void addObserver(Observer observer);</span></span>
<span class="line"><span>    public void deleteObserver(Observer observer);</span></span>
<span class="line"><span>    public void notifyObservers();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这段代码描述了一个为不同的主题去实现已定义方法的接口。注意一个观察者如何被添加、移除和通知的。</p><p>这是一个主题的实现示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.observer;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这段代码定义了一个特定主题的实现。当发生改变时，这个实现调用它自己的方法。注意这将获取观察者的数量，它以列表方式存储，并且可以通知和维护观察者。</p><p>这是一个观察者类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.observer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public interface Observer {</span></span>
<span class="line"><span>    public void update(int totalAttendees, int totalSpeakers, String nameEvent);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个类定义了一个接口，不同的观察者可以实现该接口以执行特定的操作。</p><p>例如，实现了该接口的观察者可以在会议上打印出与会者和发言人的数量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package org.opensource.demo.observer;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="接下来" tabindex="-1">接下来 <a class="header-anchor" href="#接下来" aria-label="Permalink to “接下来”">​</a></h3><p>现在你已经阅读了这篇对于设计模式的介绍引导，你还可以去寻求了解其他设计模式，例如外观模式，模版模式和装饰器模式。也有一些并发和分布式系统的设计模式如断路器模式和锚定模式。</p>`,17)),a("p",null,[s[48]||(s[48]=n("可是，我相信最好的磨砺你的技能的方式首先是通过在你的业余项目或者练习中实现这些设计模式。你甚至可以开始考虑如何在实际项目中应用这些设计模式。接下来，我强烈建议你查看 OOP 的 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/SOLID"},{default:l(()=>[...s[47]||(s[47]=[n("SOLID 原则",-1)])]),_:1}),s[49]||(s[49]=n("。之后，你就准备好了解其他设计模式。",-1))]),s[79]||(s[79]=a("hr",null,null,-1)),a("p",null,[s[51]||(s[51]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/7/understanding-software-design-patterns"},{default:l(()=>[...s[50]||(s[50]=[n("https://opensource.com/article/19/7/understanding-software-design-patterns",-1)])]),_:1})]),a("p",null,[s[56]||(s[56]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/brsonhttps://opensource.com/users/erezhttps://opensource.com/users/brson"},{default:l(()=>[...s[52]||(s[52]=[n("Bryant Son",-1)])]),_:1}),s[57]||(s[57]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[53]||(s[53]=[n("lujun9972",-1)])]),_:1}),s[58]||(s[58]=n(" 译者：",-1)),e(p,{href:"https://github.com/arrowfeng"},{default:l(()=>[...s[54]||(s[54]=[n("arrowfeng",-1)])]),_:1}),s[59]||(s[59]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[55]||(s[55]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[62]||(s[62]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[60]||(s[60]=[n("LCTT",-1)])]),_:1}),s[63]||(s[63]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[61]||(s[61]=[n("Linux中国",-1)])]),_:1}),s[64]||(s[64]=n(" 荣誉推出",-1))])])}const S=i(u,[["render",g]]);export{y as __pageData,S as default};
