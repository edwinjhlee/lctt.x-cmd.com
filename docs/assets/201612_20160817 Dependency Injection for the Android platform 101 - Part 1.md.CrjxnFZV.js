import{_ as l,W as o,s as d,u as r,I as s,ah as i,w as a,Z as e,A as t}from"./chunks/framework.Dx7wo2et.js";import"./chunks/theme.CjgFg8Ql.js";const f=JSON.parse('{"title":"安卓平台上的依赖注入（一） | LCTT x X-CMD","titleTemplate":false,"description":"安卓平台上的依赖注入（一） | LCTT (201612) | X-CMD","frontmatter":{"pageClass":"x-blog","head":[["meta",{"name":"og:title","content":"安卓平台上的依赖注入（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"安卓平台上的依赖注入（一） | LCTT (201612) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201612/20160817 Dependency Injection for the Android platform 101 - Part 1","title":"安卓平台上的依赖注入（一）","tag":"201612"},"relativePath":"201612/20160817 Dependency Injection for the Android platform 101 - Part 1.md","filePath":"[post].md"}'),c={name:"201612/20160817 Dependency Injection for the Android platform 101 - Part 1.md"};function g(u,n,m,b,v,h){const p=o("Link");return r(),d("div",null,[n[30]||(n[30]=s("h1",{id:"安卓平台上的依赖注入-一",tabindex:"-1"},[a("安卓平台上的依赖注入（一） "),s("a",{class:"header-anchor",href:"#安卓平台上的依赖注入-一","aria-label":"Permalink to 安卓平台上的依赖注入（一）"},"​")],-1)),n[31]||(n[31]=s("p",null,[s("img",{src:"https://d262ilb51hltx0.cloudfront.net/max/2000/1*YWlAzAY20KLLGIyyD_mzZw.png",alt:""})],-1)),n[32]||(n[32]=s("p",null,"刚开始学习软件工程的时候，我们经常会碰到像这样的事情：",-1)),n[33]||(n[33]=s("blockquote",null,[s("p",null,"软件应该符合 SOLID 原则。")],-1)),n[34]||(n[34]=s("p",null,"但这句话实际是什么意思？让我们看看 SOLID 中每个字母在架构里所代表的重要含义，例如：",-1)),s("ul",null,[s("li",null,[e(p,{href:"https://en.wikipedia.org/wiki/Single_responsibility_principle"},{default:t(()=>n[0]||(n[0]=[a("S - 单职责原则")])),_:1})]),s("li",null,[e(p,{href:"https://en.wikipedia.org/wiki/Open/closed_principle"},{default:t(()=>n[1]||(n[1]=[a("O - 开闭原则")])),_:1})]),s("li",null,[e(p,{href:"http://liskov_substitution_principle/"},{default:t(()=>n[2]||(n[2]=[a("L - Liskov 替换原则")])),_:1})]),s("li",null,[e(p,{href:"https://en.wikipedia.org/wiki/Interface_segregation_principle"},{default:t(()=>n[3]||(n[3]=[a("I - 接口分离原则")])),_:1})]),s("li",null,[e(p,{href:"https://en.wikipedia.org/wiki/Dependency_inversion_principle"},{default:t(()=>n[4]||(n[4]=[a("D - 依赖反转原则")])),_:1}),n[5]||(n[5]=a(" 这也是依赖注入（dependency injection）的核心概念。"))])]),n[35]||(n[35]=i(`<p>简单来说，我们需要提供一个类，这个类有它所需要的所有对象，以便实现其功能。</p><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to 概述">​</a></h3><p>依赖注入听起来像是描述非常复杂的东西的一个术语，但实际上它很简单，看下面这个例子你就明白了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class NoDependencyInjection {</span></span>
<span class="line"><span>  private Dependency d;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  public NoDependencyInjection() {</span></span>
<span class="line"><span>    d = new Dependency();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class DependencyInjection {</span></span>
<span class="line"><span>  private Dependency d;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  public DependencyInjection(Dependency d) {</span></span>
<span class="line"><span>    this.d = d;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>正如我们所见，第一种情况是我们在构造器里创建了依赖对象，但在第二种情况下，它作为参数被传递给构造器，这就是我们所说的依赖注入（dependency injection）。这样做是为了让我们所写的类不依靠特定依赖关系的实现，却能直接使用它。</p><p>参数传递的目标是构造器，我们就称之为构造器依赖注入；或者是某个方法，就称之为方法依赖注入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Example {</span></span>
<span class="line"><span>  private ConstructorDependency cd;</span></span>
<span class="line"><span>  private MethodDependency md;</span></span>
<span class="line"><span>  Example(ConstructorDependency cd) {</span></span>
<span class="line"><span>    this.cd = cd; //Constructor Dependency Injection</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  public setMethodDependency(MethodDependency md) {</span></span>
<span class="line"><span>    this.md = md; //Method Dependency Injection</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,7)),s("p",null,[n[8]||(n[8]=a("要是你想总体深入地了解依赖注入，可以看看由 ")),e(p,{href:"https://twitter.com/danlew42"},{default:t(()=>n[6]||(n[6]=[a("Dan Lew")])),_:1}),n[9]||(n[9]=a(" 发表的")),e(p,{href:"https://realm.io/news/daniel-lew-dependency-injection-dagger/"},{default:t(()=>n[7]||(n[7]=[a("精彩的演讲")])),_:1}),n[10]||(n[10]=a("，事实上是这个演讲启迪了这篇概述。"))]),s("p",null,[n[12]||(n[12]=a("在 Android 平台，当需要框架来处理依赖注入这个特殊的问题时，我们有不同的选择，其中最有名的框架就是 ")),e(p,{href:"http://google.github.io/dagger/"},{default:t(()=>n[11]||(n[11]=[a("Dagger 2")])),_:1}),n[13]||(n[13]=a("。它最开始是由 Square 公司（LCTT 译注：Square 是美国一家移动支付公司）的一些很棒的开发者开发出来的，然后慢慢发展成由 Google 自己开发。首先开发出来的是 Dagger 1，然后 Big G 接手这个项目发布了第二个版本，做了很多改动，比如以注解（annotation）为基础，在编译的时候完成其任务。"))]),n[36]||(n[36]=i(`<h3 id="导入框架" tabindex="-1">导入框架 <a class="header-anchor" href="#导入框架" aria-label="Permalink to 导入框架">​</a></h3><p>安装 Dagger 并不难，但需要导入 <code>android-apt</code> 插件，通过向项目的根目录下的 <code>build.gradle</code> 文件中添加它的依赖关系：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>buildscript{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  dependencies{</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    classpath ‘com.neenbedankt.gradle.plugins:android-apt:1.8’</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后，我们需要将 <code>android-apt</code> 插件应用到项目 <code>build.gradle</code> 文件，放在文件顶部 Android application 那一句的下一行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apply plugin: ‘com.neenbedankt.android-apt’</span></span></code></pre></div><p>这个时候，我们只用添加依赖关系，然后就能使用库及其注解（annotation）了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dependencies{</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    compile ‘com.google.dagger:dagger:2.6’ </span></span>
<span class="line"><span>    apt ‘com.google.dagger:dagger-compiler:2.6’</span></span>
<span class="line"><span>    provided ‘javax.annotation:jsr250-api:1.0’</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,7)),s("blockquote",null,[s("p",null,[n[15]||(n[15]=a("需要加上最后一个依赖关系是因为 @Generated 注解在 Android 里还不可用，但它是")),e(p,{href:"https://docs.oracle.com/javase/7/docs/api/javax/annotation/Generated.html"},{default:t(()=>n[14]||(n[14]=[a("原生的 Java 注解")])),_:1}),n[16]||(n[16]=a("。"))])]),n[37]||(n[37]=i(`<h3 id="dagger-模块" tabindex="-1">Dagger 模块 <a class="header-anchor" href="#dagger-模块" aria-label="Permalink to Dagger 模块">​</a></h3><p>要注入依赖，首先需要告诉框架我们能提供什么（比如说上下文）以及特定的对象应该怎样创建。为了完成注入，我们用 <code>@Module</code> 注释对一个特殊的类进行了注解（这样 Dagger 就能识别它了），寻找 <code>@Provide</code> 注解的方法，生成图表，能够返回我们所请求的对象。</p><p>看下面的例子，这里我们创建了一个模块，它会返回给我们 <code>ConnectivityManager</code>，所以我们要把 <code>Context</code> 对象传给这个模块的构造器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Module</span></span>
<span class="line"><span>public class ApplicationModule {</span></span>
<span class="line"><span>  private final Context context;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public ApplicationModule(Context context) {</span></span>
<span class="line"><span>    this.context = context;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Provides @Singleton</span></span>
<span class="line"><span>  public Context providesContext() {</span></span>
<span class="line"><span>    return context;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Provides @Singleton</span></span>
<span class="line"><span>  public ConnectivityManager providesConnectivityManager(Context context) {</span></span>
<span class="line"><span>    return (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>Dagger 中十分有意思的一点是简单地注解一个方法来提供一个单例（Singleton），就能处理所有从 Java 中继承过来的问题。</p></blockquote><h3 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to 组件">​</a></h3><p>当我们有一个模块的时候，我们需要告诉 Dagger 想把依赖注入到哪里：我们在一个组件（Component）里完成依赖注入，这是一个我们特别创建的特殊注解接口。我们在这个接口里创造不同的方法，而接口的参数是我们想注入依赖关系的类。</p><p>下面给出一个例子并告诉 Dagger 我们想要 <code>MainActivity</code> 类能够接受 <code>ConnectivityManager</code>（或者在图表里的其它依赖对象）。我们只要做类似以下的事：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Singleton</span></span>
<span class="line"><span>@Component(modules = {ApplicationModule.class})</span></span>
<span class="line"><span>public interface ApplicationComponent {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void inject(MainActivity activity);</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>正如我们所见，@Component 注解有几个参数，一个是所支持的模块的数组，代表它能提供的依赖。这里既可以是 <code>Context</code> 也可以是 <code>ConnectivityManager</code>，因为它们在 <code>ApplicationModule</code> 类中有声明。</p></blockquote><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to 用法">​</a></h3><p>这时，我们要做的是尽快创建组件（比如在应用的 <code>onCreate</code> 阶段）并返回它，那么类就能用它来注入依赖了：</p><blockquote><p>为了让框架自动生成 <code>DaggerApplicationComponent</code>，我们需要构建项目以便 Dagger 能够扫描我们的代码，并生成我们需要的部分。</p></blockquote><p>在 <code>MainActivity</code> 里，我们要做的两件事是用 <code>@Inject</code> 注解符对想要注入的属性进行注解，调用我们在 <code>ApplicationComponent</code> 接口中声明的方法（请注意后面一部分会因我们使用的注入类型的不同而变化，但这里简单起见我们不去管它），然后依赖就被注入了，我们就能自由使用他们：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public class MainActivity extends AppCompatActivity {</span></span>
<span class="line"><span>  @Inject</span></span>
<span class="line"><span>  ConnectivityManager manager;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Override</span></span>
<span class="line"><span>  protected void onCreate(Bundle savedInstanceState) {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    ((App) getApplication()).getComponent().inject(this);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to 总结">​</a></h3><p>当然了，我们可以手动注入依赖，管理所有不同的对象，但 Dagger 消除了很多比如模板这样的“噪声”，给我们提供有用的附加品（比如 <code>Singleton</code>），而仅用 Java 处理将会很糟糕。</p><hr>`,18)),s("p",null,[n[18]||(n[18]=a("via: ")),e(p,{href:"https://medium.com/di-101/di-101-part-1-81896c2858a0#.3hg0jj14o"},{default:t(()=>n[17]||(n[17]=[a("https://medium.com/di-101/di-101-part-1-81896c2858a0#.3hg0jj14o")])),_:1})]),s("p",null,[n[22]||(n[22]=a("作者:")),e(p,{href:"https://medium.com/@_tiwiz"},{default:t(()=>n[19]||(n[19]=[a("Roberto Orgiu")])),_:1}),n[23]||(n[23]=a(" 译者:")),e(p,{href:"https://github.com/GitFuture"},{default:t(()=>n[20]||(n[20]=[a("GitFuture")])),_:1}),n[24]||(n[24]=a(" 校对:")),e(p,{href:"https://github.com/wxy"},{default:t(()=>n[21]||(n[21]=[a("wxy")])),_:1})]),s("p",null,[n[27]||(n[27]=a("本文由 ")),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>n[25]||(n[25]=[a("LCTT")])),_:1}),n[28]||(n[28]=a(" 原创编译，")),e(p,{href:"https://linux.cn/"},{default:t(()=>n[26]||(n[26]=[a("Linux中国")])),_:1}),n[29]||(n[29]=a(" 荣誉推出"))])])}const k=l(c,[["render",g]]);export{f as __pageData,k as default};
