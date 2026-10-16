import{_ as r,a0 as c,w as i,s as d,ao as s,I as p,x as a,a1 as n,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"一些關於Java的句子 | LCTT x X-CMD","titleTemplate":false,"description":"一些關於Java的句子 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一些關於Java的句子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一些關於Java的句子 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141127 Some Sentences about Java","title":"一些關於Java的句子","tag":"201412","desc":""},"relativePath":"201412/20141127 Some Sentences about Java.md","filePath":"[post].md"}'),l={name:"201412/20141127 Some Sentences about Java.md"};function v(f,e,b,m,u,h){const t=c("Link");return i(),d("div",null,[e[13]||(e[13]=s(`<h1 id="一些關於java的句子" tabindex="-1">一些關於Java的句子 <a class="header-anchor" href="#一些關於java的句子" aria-label="Permalink to “一些關於Java的句子”">​</a></h1><p>本文並沒有什麼新鮮的。我只是收集了一些不太重要的語句，但這些語句可能對初級程序員來説很重要。也就是些無聊的舊東西。</p><p>如果以下的這些你都知道的話，那麼你比Java的瞭解已經超過了對一個平常的家庭主婦的瞭解。我不知道清楚所有的這些是否是有意義的。即使不知道其中的一些特性，你照樣也可以成為一個相當不錯的Java程序員。然而，本文中許多的新信息可能表明你還有很大的發展空間。</p><h3 id="java中有四種不同的訪問類型-而不是三種" tabindex="-1">Java中有四種不同的訪問類型(而不是三種) <a class="header-anchor" href="#java中有四種不同的訪問類型-而不是三種" aria-label="Permalink to “Java中有四種不同的訪問類型(而不是三種)”">​</a></h3><p>這四種類型包括：<code>private</code>, package private (包訪問權限，無修飾符，又叫default, 譯者注)。如果你在類中定義一個元素時並不加任何訪問類型修飾符，它將被默認設置為包訪問權限(package private)，而不是<code>public</code>或者<code>protected</code>。</p><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/four-levels-of-protection.png" alt="Java中有四種級別的訪問類型"></p><p><em>Java有四個級別的訪問類型。</em></p><p>從另一方面來説，如果在接口中，你不指定方法的訪問修飾符，那麼它將是<code>public</code>類型的。你也可以顯式地指定它為<code>public</code>類型， 但這並不符合SONAR（一個開源代碼質量管理平台，譯者注）的代碼質量管理思想。</p><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/protection-is-transitive.png" alt="訪問類型是傳遞的"></p><p><em>訪問類型是傳遞的</em></p><blockquote><p>我的“在Java中允許選擇性的在接口的方法中寫<code>public</code>”的觀點是一個技術錯誤。</p></blockquote><p>同樣你也可在接口的字段前寫<code>final</code>，甚至是<code>static</code>。這説明這些字段可以是非靜態或非final嗎？不是的，接口中的字段中總是final和static的。</p><h3 id="protected和package-private是不一樣的" tabindex="-1">Protected和package private是不一樣的 <a class="header-anchor" href="#protected和package-private是不一樣的" aria-label="Permalink to “Protected和package private是不一樣的”">​</a></h3><p>Package private（或者default）訪問類型可以使得相同包(package)下其他類能夠訪問這些字段或方法。保護類型(<code>protected</code>)的方法和字段可以被相同包下的類使用(這和package private是一樣的)，同時它也可以被其他類使用，只要那個類繼承了這個包含這些<code>protected</code>方法或字段的類。</p><h3 id="protected是可傳遞的" tabindex="-1">Protected是可傳遞的 <a class="header-anchor" href="#protected是可傳遞的" aria-label="Permalink to “Protected是可傳遞的”">​</a></h3><p>如果有三個包a、b、c，每個包都分別包含A、B、C類，而且B繼承A，C繼承B，那麼C可以訪問A中的protected字段和方法。</p><pre><code>package a;

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
</code></pre><h3 id="接口不能定義protected方法" tabindex="-1">接口不能定義protected方法 <a class="header-anchor" href="#接口不能定義protected方法" aria-label="Permalink to “接口不能定義protected方法”">​</a></h3><p>很多人認為可以在接口中定義<code>protected</code>方法。如果你這麼做的話，編譯器很快就會毫不留情地給你報錯。順便説下，這也就是我為什麼認為允許<code>public</code>關鍵字在接口中是一個技術錯誤，它會讓人覺得還可以寫其他訪問類型似的。</p><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/private-is-the-new-public.png" alt="Private is the new public"></p><p><em>private是一種新的public</em></p><p>如果你還想在一個接口的方法中聲明protected方法,你可能還不理解封裝的含義。</p><h3 id="此private非彼private" tabindex="-1">此private非彼private <a class="header-anchor" href="#此private非彼private" aria-label="Permalink to “此private非彼private”">​</a></h3><p>私有變量和方法在編譯單元內是可見的。如果這聽起來太神秘的話，換種説法：幾乎就是在同一個Java文件中。這比“在它們被定義的類中”聽起來好理解些。它們在同一編譯單元的類和接口中也是可見的。嵌套類可以看到類中封裝的私有字段和方法。然而，當前封閉類也可以看到該類下任何深度下類中的私有方法和字段。</p><pre><code>package a;

class Private {
	private class PrivateInPrivate {
		private Object object;
	}

	Object m() {
		return new PrivateInPrivate().object;
	}
}
</code></pre><p>後者並不廣為人知，事實上也很少有用到。</p><h3 id="private是類的訪問級別而不是對象" tabindex="-1">Private是類的訪問級別而不是對象 <a class="header-anchor" href="#private是類的訪問級別而不是對象" aria-label="Permalink to “Private是類的訪問級別而不是對象”">​</a></h3><p>如果你可以訪問一個變量或方法，那麼不管它屬於哪個對象你都可以訪問它。如果<code>this.a</code>可以訪問到，那<code>another.a</code>也可以訪問到，只要它們是同一個類的實例。同一個類的實例對象可以隨意調用其他實例的變量或方法。不過這樣的代碼一般都沒有意義。現實生活中異常是<code>equals()</code>(由Eclipse生成， 15 - 18行)：</p><pre><code>package a;

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
</code></pre><p>###靜態(static)類可能有很多實例 ###</p><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/protection-is-class-feature.png" alt="Protection is not object level. It is class level."></p><p><em>訪問類型不是對象級別的而是類級別的。</em></p><p>那些不支持有任何實例的類，通常被稱為實用工具類。它們只包含靜態字段和靜態方法以及唯一的不被該類的任何靜態方法調用的私有構造函數。在Java 8中也可以有這樣的一個野獸(這個詞翻譯不通，譯者注)在接口中實現，因為Java 8的接口可以有靜態方法。我不覺得我們應該使用這個特性而不是實用工具類。我也不完全確信我們應該使用實用工具類。</p><p>靜態類總是在另一個類或接口中。它們是嵌套類。他們是靜態的,就像靜態方法不能訪問類的實例方法和字段一樣，靜態內部類也不能訪問嵌入類的實例方法和字段。這是因為內部類沒有嵌入類實例的引用（或者説是指針，如果你喜歡這麼叫的話）。內部類（內部類,也即非靜態嵌套類, 譯者注)，而非靜態嵌套類, 沒有嵌入類的一個實例，它是無法被創建的。每個內部類的實例都具有嵌入類實例的一個引用，因此一個內部類可以訪問嵌入類的實例方法和字段。</p><p>因為這個原因，要是沒有外部類的一個實例，你就不能創建一個內部類。當然，如果是當前對象，也就是<code>this</code>的話，你就可以不需要指定它。在這種情況下你可以使用<code>new</code>, 在這種情況下,也就是<code>this.new</code>的簡式。在一個靜態的環境中,例如從一個靜態方法，你必須指定內部類應該創建哪個封閉類的實例。見第10行:</p><pre><code>package a;

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
</code></pre><h3 id="匿名類只能訪問final變量" tabindex="-1">匿名類只能訪問final變量 <a class="header-anchor" href="#匿名類只能訪問final變量" aria-label="Permalink to “匿名類只能訪問final變量”">​</a></h3><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/effective-final.png" alt="Variable has to be effective final"></p><p><em>變量必須是有效的final</em></p><p>當一個匿名類被定義在一個方法中，它可以訪問局部變量如果該變量是<code>final</code>的。但這説的有點模糊。它們不得不聲明成final,他們還必須是有效final。這也是Java 8中發佈的一些特性。你不需要聲明這些變量為<code>final</code>型，但它們仍然必須是有效的<code>final</code>。</p><p><img src="http://a3ab771892fd198a96736e50.javacodegeeks.netdna-cdn.com/wp-content/uploads/2014/11/java_ee_-_javabeantester_src_main_java_com_javax0_jbt_blog_java_-_eclipse_-__users_verhasp_github_javax_blog.png" alt="Java 8 does not require final, only effective final"></p><p><em>Java 8並不要求<code>final</code>，只要求有效final。</em></p><p>為什麼你需要對一些東西聲明<code>final</code>,當它被檢查必須是這樣的。就像方法的參數。它們也必須是<code>final</code>的。你説這不是Java所必須的嗎?嗯,你是對的。這只是一個良好的編程風格所必須的。</p><hr>`,44)),p("p",null,[e[1]||(e[1]=a("via: ",-1)),n(t,{href:"http://www.javacodegeeks.com/2014/11/some-sentences-about-java.html"},{default:o(()=>[...e[0]||(e[0]=[a("http://www.javacodegeeks.com/2014/11/some-sentences-about-java.html",-1)])]),_:1})]),p("p",null,[e[5]||(e[5]=a("作者：",-1)),n(t,{href:"http://www.javacodegeeks.com/author/peter-verhas/"},{default:o(()=>[...e[2]||(e[2]=[a("Peter Verhas",-1)])]),_:1}),e[6]||(e[6]=a(" 譯者：",-1)),n(t,{href:"https://github.com/a598799539"},{default:o(()=>[...e[3]||(e[3]=[a("a598799539",-1)])]),_:1}),e[7]||(e[7]=a(" 校對：",-1)),n(t,{href:"https://github.com/wxy"},{default:o(()=>[...e[4]||(e[4]=[a("wxy",-1)])]),_:1})]),p("p",null,[e[10]||(e[10]=a("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[8]||(e[8]=[a("LCTT",-1)])]),_:1}),e[11]||(e[11]=a(" 原創翻譯，",-1)),n(t,{href:"http://linux.cn/"},{default:o(()=>[...e[9]||(e[9]=[a("Linux中國",-1)])]),_:1}),e[12]||(e[12]=a(" 榮譽推出",-1))])])}const P=r(l,[["render",v]]);export{k as __pageData,P as default};
