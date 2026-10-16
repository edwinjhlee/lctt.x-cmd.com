import{_ as r,a0 as c,w as i,s as d,ao as s,I as p,x as a,a1 as n,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"一些关于Java的句子 | LCTT x X-CMD","titleTemplate":false,"description":"一些关于Java的句子 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一些关于Java的句子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一些关于Java的句子 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141127 Some Sentences about Java","title":"一些关于Java的句子","tag":"201412","desc":""},"relativePath":"201412/20141127 Some Sentences about Java.md","filePath":"[post].md"}'),l={name:"201412/20141127 Some Sentences about Java.md"};function v(f,e,b,m,u,h){const t=c("Link");return i(),d("div",null,[e[13]||(e[13]=s(`<h1 id="一些关于java的句子" tabindex="-1">一些关于Java的句子 <a class="header-anchor" href="#一些关于java的句子" aria-label="Permalink to “一些关于Java的句子”">​</a></h1><p>本文并没有什么新鲜的。我只是收集了一些不太重要的语句，但这些语句可能对初级程序员来说很重要。也就是些无聊的旧东西。</p><p>如果以下的这些你都知道的话，那么你比Java的了解已经超过了对一个平常的家庭主妇的了解。我不知道清楚所有的这些是否是有意义的。即使不知道其中的一些特性，你照样也可以成为一个相当不错的Java程序员。然而，本文中许多的新信息可能表明你还有很大的发展空间。</p><h3 id="java中有四种不同的访问类型-而不是三种" tabindex="-1">Java中有四种不同的访问类型(而不是三种) <a class="header-anchor" href="#java中有四种不同的访问类型-而不是三种" aria-label="Permalink to “Java中有四种不同的访问类型(而不是三种)”">​</a></h3><p>这四种类型包括：<code>private</code>, package private (包访问权限，无修饰符，又叫default, 译者注)。如果你在类中定义一个元素时并不加任何访问类型修饰符，它将被默认设置为包访问权限(package private)，而不是<code>public</code>或者<code>protected</code>。</p><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/four-levels-of-protection.png" alt="Java中有四种级别的访问类型"></p><p><em>Java有四个级别的访问类型。</em></p><p>从另一方面来说，如果在接口中，你不指定方法的访问修饰符，那么它将是<code>public</code>类型的。你也可以显式地指定它为<code>public</code>类型， 但这并不符合SONAR（一个开源代码质量管理平台，译者注）的代码质量管理思想。</p><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/protection-is-transitive.png" alt="访问类型是传递的"></p><p><em>访问类型是传递的</em></p><blockquote><p>我的“在Java中允许选择性的在接口的方法中写<code>public</code>”的观点是一个技术错误。</p></blockquote><p>同样你也可在接口的字段前写<code>final</code>，甚至是<code>static</code>。这说明这些字段可以是非静态或非final吗？不是的，接口中的字段中总是final和static的。</p><h3 id="protected和package-private是不一样的" tabindex="-1">Protected和package private是不一样的 <a class="header-anchor" href="#protected和package-private是不一样的" aria-label="Permalink to “Protected和package private是不一样的”">​</a></h3><p>Package private（或者default）访问类型可以使得相同包(package)下其他类能够访问这些字段或方法。保护类型(<code>protected</code>)的方法和字段可以被相同包下的类使用(这和package private是一样的)，同时它也可以被其他类使用，只要那个类继承了这个包含这些<code>protected</code>方法或字段的类。</p><h3 id="protected是可传递的" tabindex="-1">Protected是可传递的 <a class="header-anchor" href="#protected是可传递的" aria-label="Permalink to “Protected是可传递的”">​</a></h3><p>如果有三个包a、b、c，每个包都分别包含A、B、C类，而且B继承A，C继承B，那么C可以访问A中的protected字段和方法。</p><pre><code>package a;

public class A {
	protected void a() {

	}
}
package b;

import a.A;

public class B extends A {
	protected void b() {
		a();
	}
}
package c;

import b.B;

public class C extends B {
	protected void c() {
		a();
	}
}
</code></pre><h3 id="接口不能定义protected方法" tabindex="-1">接口不能定义protected方法 <a class="header-anchor" href="#接口不能定义protected方法" aria-label="Permalink to “接口不能定义protected方法”">​</a></h3><p>很多人认为可以在接口中定义<code>protected</code>方法。如果你这么做的话，编译器很快就会毫不留情地给你报错。顺便说下，这也就是我为什么认为允许<code>public</code>关键字在接口中是一个技术错误，它会让人觉得还可以写其他访问类型似的。</p><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/private-is-the-new-public.png" alt="Private is the new public"></p><p><em>private是一种新的public</em></p><p>如果你还想在一个接口的方法中声明protected方法,你可能还不理解封装的含义。</p><h3 id="此private非彼private" tabindex="-1">此private非彼private <a class="header-anchor" href="#此private非彼private" aria-label="Permalink to “此private非彼private”">​</a></h3><p>私有变量和方法在编译单元内是可见的。如果这听起来太神秘的话，换种说法：几乎就是在同一个Java文件中。这比“在它们被定义的类中”听起来好理解些。它们在同一编译单元的类和接口中也是可见的。嵌套类可以看到类中封装的私有字段和方法。然而，当前封闭类也可以看到该类下任何深度下类中的私有方法和字段。</p><pre><code>package a;

class Private {
	private class PrivateInPrivate {
		private Object object;
	}

	Object m() {
		return new PrivateInPrivate().object;
	}
}
</code></pre><p>后者并不广为人知，事实上也很少有用到。</p><h3 id="private是类的访问级别而不是对象" tabindex="-1">Private是类的访问级别而不是对象 <a class="header-anchor" href="#private是类的访问级别而不是对象" aria-label="Permalink to “Private是类的访问级别而不是对象”">​</a></h3><p>如果你可以访问一个变量或方法，那么不管它属于哪个对象你都可以访问它。如果<code>this.a</code>可以访问到，那<code>another.a</code>也可以访问到，只要它们是同一个类的实例。同一个类的实例对象可以随意调用其他实例的变量或方法。不过这样的代码一般都没有意义。现实生活中异常是<code>equals()</code>(由Eclipse生成， 15 - 18行)：</p><pre><code>package a;

public class PrivateIsClass {
	private Object object;

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PrivateIsClass other = (PrivateIsClass) obj;
		if (object == null) {
			if (other.object != null)
				return false;
		} else if (!object.equals(other.object))
			return false;
		return true;
	}
}
</code></pre><p>###静态(static)类可能有很多实例 ###</p><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/protection-is-class-feature.png" alt="Protection is not object level. It is class level."></p><p><em>访问类型不是对象级别的而是类级别的。</em></p><p>那些不支持有任何实例的类，通常被称为实用工具类。它们只包含静态字段和静态方法以及唯一的不被该类的任何静态方法调用的私有构造函数。在Java 8中也可以有这样的一个野兽(这个词翻译不通，译者注)在接口中实现，因为Java 8的接口可以有静态方法。我不觉得我们应该使用这个特性而不是实用工具类。我也不完全确信我们应该使用实用工具类。</p><p>静态类总是在另一个类或接口中。它们是嵌套类。他们是静态的,就像静态方法不能访问类的实例方法和字段一样，静态内部类也不能访问嵌入类的实例方法和字段。这是因为内部类没有嵌入类实例的引用（或者说是指针，如果你喜欢这么叫的话）。内部类（内部类,也即非静态嵌套类, 译者注)，而非静态嵌套类, 没有嵌入类的一个实例，它是无法被创建的。每个内部类的实例都具有嵌入类实例的一个引用，因此一个内部类可以访问嵌入类的实例方法和字段。</p><p>因为这个原因，要是没有外部类的一个实例，你就不能创建一个内部类。当然，如果是当前对象，也就是<code>this</code>的话，你就可以不需要指定它。在这种情况下你可以使用<code>new</code>, 在这种情况下,也就是<code>this.new</code>的简式。在一个静态的环境中,例如从一个静态方法，你必须指定内部类应该创建哪个封闭类的实例。见第10行:</p><pre><code>package a;

class Nesting {
	static class Nested {}
	class Inner {}
	void method(){
		Inner inner = new Inner();
	}
	static void staticMethod(){
		Inner inner = new Nesting().new Inner();
	}
}
</code></pre><h3 id="匿名类只能访问final变量" tabindex="-1">匿名类只能访问final变量 <a class="header-anchor" href="#匿名类只能访问final变量" aria-label="Permalink to “匿名类只能访问final变量”">​</a></h3><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/effective-final.png" alt="Variable has to be effective final"></p><p><em>变量必须是有效的final</em></p><p>当一个匿名类被定义在一个方法中，它可以访问局部变量如果该变量是<code>final</code>的。但这说的有点模糊。它们不得不声明成final,他们还必须是有效final。这也是Java 8中发布的一些特性。你不需要声明这些变量为<code>final</code>型，但它们仍然必须是有效的<code>final</code>。</p><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/java_ee_-_javabeantester_src_main_java_com_javax0_jbt_blog_java_-_eclipse_-__users_verhasp_github_javax_blog.png" alt="Java 8 does not require final, only effective final"></p><p><em>Java 8并不要求<code>final</code>，只要求有效final。</em></p><p>为什么你需要对一些东西声明<code>final</code>,当它被检查必须是这样的。就像方法的参数。它们也必须是<code>final</code>的。你说这不是Java所必须的吗?嗯,你是对的。这只是一个良好的编程风格所必须的。</p><hr>`,44)),p("p",null,[e[1]||(e[1]=a("via: ",-1)),n(t,{href:"http://www.javacodegeeks.com/2014/11/some-sentences-about-java.html"},{default:o(()=>[...e[0]||(e[0]=[a("http://www.javacodegeeks.com/2014/11/some-sentences-about-java.html",-1)])]),_:1})]),p("p",null,[e[5]||(e[5]=a("作者：",-1)),n(t,{href:"http://www.javacodegeeks.com/author/peter-verhas/"},{default:o(()=>[...e[2]||(e[2]=[a("Peter Verhas",-1)])]),_:1}),e[6]||(e[6]=a(" 译者：",-1)),n(t,{href:"https://github.com/a598799539"},{default:o(()=>[...e[3]||(e[3]=[a("a598799539",-1)])]),_:1}),e[7]||(e[7]=a(" 校对：",-1)),n(t,{href:"https://github.com/wxy"},{default:o(()=>[...e[4]||(e[4]=[a("wxy",-1)])]),_:1})]),p("p",null,[e[10]||(e[10]=a("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[8]||(e[8]=[a("LCTT",-1)])]),_:1}),e[11]||(e[11]=a(" 原创翻译，",-1)),n(t,{href:"http://linux.cn/"},{default:o(()=>[...e[9]||(e[9]=[a("Linux中国",-1)])]),_:1}),e[12]||(e[12]=a(" 荣誉推出",-1))])])}const P=r(l,[["render",v]]);export{k as __pageData,P as default};
