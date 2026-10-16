import{_ as e,a0 as i,w as o,s as r,I as a,x as n,a1 as t,A as l,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"使用 JavaScript 增强你的文档 | LCTT x X-CMD","titleTemplate":false,"description":"使用 JavaScript 增强你的文档 | LCTT (202212) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 JavaScript 增强你的文档 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 JavaScript 增强你的文档 | LCTT (202212) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202212/20221215.2 ⭐️⭐️ Improve your documentation with JavaScript","title":"使用 JavaScript 增强你的文档","tag":"202212","desc":""},"relativePath":"202212/20221215.2 ⭐️⭐️ Improve your documentation with JavaScript.md","filePath":"[post].md"}'),u={name:"202212/20221215.2 ⭐️⭐️ Improve your documentation with JavaScript.md"};function d(g,s,h,m,b,k){const p=i("Link");return o(),r("div",null,[s[18]||(s[18]=a("h1",{id:"使用-javascript-增强你的文档",tabindex:"-1"},[n("使用 JavaScript 增强你的文档 "),a("a",{class:"header-anchor",href:"#使用-javascript-增强你的文档","aria-label":"Permalink to “使用 JavaScript 增强你的文档”"},"​")],-1)),s[19]||(s[19]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202212/23/100615quu385qf83bu3p35.jpg",alt:""})],-1)),s[20]||(s[20]=a("blockquote",null,[a("p",null,"让你的开源项目文档充满活力，从而吸引各种经验水平的用户。")],-1)),s[21]||(s[21]=a("p",null,"开源软件项目通常拥有非常多样化的用户人群。有些用户非常擅长使用该系统，并且只需要很少的文档。对于这些实力派用户，文档只需要提供必要的提示，并且可以包含更多的技术信息，比如说在 Shell 中运行的命令行。有些用户可能只是初学者。这些用户需要更多的帮助来设置系统并学习如何使用它。",-1)),s[22]||(s[22]=a("p",null,"写一个同时适合这两个用户群体的文档是令人生畏的。网站文档需要在 “提供详细的技术信息” 和 “提供更多的概述和指导” 之间寻求一个平衡。这是一个很难找到的平衡。如果你的文档不能同时满足这两个用户人群，那么考虑一下另外一个选择 —— 动态文档。",-1)),a("p",null,[s[1]||(s[1]=n("探索在网页中添加一点 ",-1)),t(p,{href:"https://opensource.com/downloads/learn-javascript"},{default:l(()=>[...s[0]||(s[0]=[n("JavaScript",-1)])]),_:1}),s[2]||(s[2]=n(" 使用户可以选择自己想看的内容。",-1))]),s[23]||(s[23]=c(`<h3 id="构建你的内容" tabindex="-1">构建你的内容 <a class="header-anchor" href="#构建你的内容" aria-label="Permalink to “构建你的内容”">​</a></h3><p>你可以把例程添加的你的文档中需要同时满足 <ruby>专家<rt>expert</rt></ruby> 和 <ruby>初学者<rt>novice</rt></ruby> 的地方。在这个例程中，我们可以使用一个虚构的名为 AwesmeProject 的音乐播放器。</p><p>你可以用 HTML 编写一个简短的安装文档，通过 HTML 的 <ruby>类<rt>class</rt></ruby> 功能同时为专家和初学者提供操作指南。</p><p>例如，你可以用下面的代码来为专家定义一个段落：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p class=&quot;expert reader&quot;&gt;</span></span></code></pre></div><p>这同时指派了 “专家类” 和 “读者类”。你可以用下面的代码来为初学者创建一个相同的段落。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p class=&quot;novice reader&quot;&gt;</span></span></code></pre></div><p>完整的 HTML 文件同时包含初学者的段落和专家的段落。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;title&gt;How to install the software&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h1&gt;How to install the software&lt;/h1&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;Thanks for installing AwesomeProject! With AwesomeProject,</span></span>
<span class="line"><span>you can manage your music collection like a wizard.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;But first, we need to install it:&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p class=&quot;expert reader&quot;&gt;You can install AwesomeProject from</span></span>
<span class="line"><span>source. Download the tar file, extract it, then run:</span></span>
<span class="line"><span>&lt;code&gt;./configure ; make ; make install&lt;/code&gt;&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p class=&quot;novice reader&quot;&gt;AwesomeProject is available in</span></span>
<span class="line"><span>most Linux distributions. Check your graphical package manager and search for AwesomeProject to install it.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>例子中的 HTML 文档没有与之关联的样式表，所以浏览器中会显示所有的段落。</p><p><img src="https://opensource.com/sites/default/files/2022-12/publishonec.textblack.png" alt="Image of html in black text."></p><p>我们可在文档中添加一些简单的样式来为 <ruby>读者<rt>reader</rt></ruby>、<ruby>专家<rt>expert</rt></ruby> 或者 <ruby>初学者<rt>novice</rt></ruby> 突出任何元素。为了使不同的文本更容易区分，让我们把读者类的背景颜色设置成米白色，专家类的字体颜色设置为深红色，初学者的字体颜色则设置为深蓝色。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;title&gt;How to install the software&lt;/title&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.reader {</span></span>
<span class="line"><span>background-color: ghostwhite;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.expert {</span></span>
<span class="line"><span>color: darkred;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.novice {</span></span>
<span class="line"><span>color: darkblue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h1&gt;How to install the software&lt;/h1&gt;</span></span></code></pre></div><p>当你在浏览器中查看这个网页时，这些样式有助于突出这两个段落。安装指导的所有段落都有一个米白色背景，因为他们都有 <ruby>读者<rt>reader</rt></ruby> 这个类。第一个段落的字体是深红色的，这是由 <ruby>专家<rt>expert</rt></ruby> 这个类定义的。第二个段落的字体是深蓝色的，则是由 <ruby>初学者<rt>novice</rt></ruby> 这个类定义的。</p><p><img src="https://opensource.com/sites/default/files/2022-12/publishone.red_.blue_.png" alt="Image of html in red and black text."></p><h3 id="添加-javascript-控件" tabindex="-1">添加 JavaScript 控件 <a class="header-anchor" href="#添加-javascript-控件" aria-label="Permalink to “添加 JavaScript 控件”">​</a></h3><p>这些类的应用，使你可以添加一些简单的 JavaScript 函数，只显示其中一个内容块。一个方法是，首先给所有的读者类元素设置 <code>display:none</code> 。这会将内容隐藏，使其不会在页面上显示。然后，用函数将你想显示的类元素设置为 <code>display:block</code> :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>function readerview(audience) {</span></span>
<span class="line"><span>  var list, item;</span></span>
<span class="line"><span>  // hide all class=&quot;reader&quot;</span></span>
<span class="line"><span>  list = document.getElementsByClassName(&quot;reader&quot;);</span></span>
<span class="line"><span>  for (item = 0; item &lt; list.length; item++) {</span></span>
<span class="line"><span>    list[item].style.display = &quot;none&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // show all class=audience</span></span>
<span class="line"><span>  list = document.getElementsByClassName(audience);</span></span>
<span class="line"><span>  for (item = 0; item &lt; list.length; item++) {</span></span>
<span class="line"><span>    list[item].style.display = &quot;block&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>要在 HTML 文档中使用这个 JavaScript，你可以吧这个功能附加到一个按钮上。由于 <code>readerview</code> 函数需要一个<ruby>听众<rt>audience</rt></ruby>（这应该是相对那个虚拟音乐播放器来说的）作为参数，你可以使用你想查看的听众类别来调用这个函数，可以是<ruby>读者<rt>reader</rt></ruby>，<ruby>专家<rt>expert</rt></ruby> 或者 <ruby>初学者<rt>novice</rt></ruby> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>&lt;title&gt;How to install the software&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    .reader {</span></span>
<span class="line"><span>    background-color: ghostwhite;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .expert {</span></span>
<span class="line"><span>    color: darkred;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .novice {</span></span>
<span class="line"><span>    color: darkblue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>function readerview(audience) {</span></span>
<span class="line"><span>  var list, item;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // hide all class=&quot;reader&quot;</span></span>
<span class="line"><span>  list = document.getElementsByClassName(&quot;reader&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (item = 0; item &lt; list.length; item++) {</span></span>
<span class="line"><span>    list[item].style.display = &quot;none&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // show all class=audience</span></span>
<span class="line"><span>  list = document.getElementsByClassName(audience);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (item = 0; item &lt; list.length; item++) {</span></span>
<span class="line"><span>    list[item].style.display = &quot;block&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;h1&gt;How to install the software&lt;/h1&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;nav&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;button onclick=&quot;readerview(&#39;novice&#39;)&quot;&gt;view novice text&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;button onclick=&quot;readerview(&#39;expert&#39;)&quot;&gt;view expert text&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/nav&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;Thanks for installing AwesomeProject! With AwesomeProject,</span></span>
<span class="line"><span>you can manage your music collection like a wizard.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;But first, we need to install it:&lt;/p&gt;</span></span>
<span class="line"><span>&lt;p class=&quot;expert reader&quot;&gt;You can install AwesomeProject from</span></span>
<span class="line"><span>source. Download the tar file, extract it, then run</span></span>
<span class="line"><span>&lt;code&gt;./configure ; make ; make install&lt;/code&gt;&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p class=&quot;novice reader&quot;&gt;AwesomeProject is available in</span></span>
<span class="line"><span>most Linux distributions. Check your graphical package</span></span>
<span class="line"><span>manager and search for AwesomeProject to install it.&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>有了这些设置，用户可以在网页上选择他们想看的文本。</p><p><img src="https://opensource.com/sites/default/files/2022-12/publishone.novicexpert.png" alt="Image of window that allows you to select between novice and expert text."></p><p>点击任何一个按钮都将只显示用户想要阅读的文本。例如，如果你点击了 “<ruby>阅读初学者内容<rt>view novice text</rt></ruby>” 按钮，你就只会看到蓝色段落。</p><p><img src="https://opensource.com/sites/default/files/2022-12/publishone.blue_.png" alt="Image showing blue text when you press the novice button."></p><p>点击 “<ruby>阅读专家内容<rt>view expert text</rt></ruby>” 按钮，就会隐藏初学者文本，只显示红色的专家文本。</p><p><img src="https://opensource.com/sites/default/files/2022-12/publishone.red_.png" alt="Image of red text after the expert button is clicked."></p><h3 id="将此扩展到你的文档" tabindex="-1">将此扩展到你的文档 <a class="header-anchor" href="#将此扩展到你的文档" aria-label="Permalink to “将此扩展到你的文档”">​</a></h3><p>如果你的项目需要你为不同的听众编写多个操作文档，你可以考虑使用这种方法，一次发布，多次阅读。为所有的用户编写一个文档，是每个人都能很容易的发现和分享你项目的文档。而你也不必同时维护尽在细节上有所不同的多个文档。</p><hr>`,29)),a("p",null,[s[4]||(s[4]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/22/12/dynamic-documentation-javascript"},{default:l(()=>[...s[3]||(s[3]=[n("https://opensource.com/article/22/12/dynamic-documentation-javascript",-1)])]),_:1})]),a("p",null,[s[9]||(s[9]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/jim-hall"},{default:l(()=>[...s[5]||(s[5]=[n("Jim Hall",-1)])]),_:1}),s[10]||(s[10]=n(" 选题：",-1)),t(p,{href:"https://github.com/lkxed"},{default:l(()=>[...s[6]||(s[6]=[n("lkxed",-1)])]),_:1}),s[11]||(s[11]=n(" 译者：",-1)),t(p,{href:"https://github.com/duoluoxiaosehng"},{default:l(()=>[...s[7]||(s[7]=[n("duoluoxiaosheng",-1)])]),_:1}),s[12]||(s[12]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[8]||(s[8]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:l(()=>[...s[14]||(s[14]=[n("Linux中国",-1)])]),_:1}),s[17]||(s[17]=n(" 荣誉推出",-1))])])}const w=e(u,[["render",d]]);export{v as __pageData,w as default};
