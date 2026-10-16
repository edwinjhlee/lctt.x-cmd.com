import{_ as e,a0 as i,w as o,s as r,I as a,x as n,a1 as t,A as l,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"一个转换花引号的 gawk 脚本 | LCTT x X-CMD","titleTemplate":false,"description":"一个转换花引号的 gawk 脚本 | LCTT (201808) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一个转换花引号的 gawk 脚本 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一个转换花引号的 gawk 脚本 | LCTT (201808) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201808/20180806 A gawk script to convert smart quotes","title":"一个转换花引号的 gawk 脚本","tag":"201808","desc":""},"relativePath":"201808/20180806 A gawk script to convert smart quotes.md","filePath":"[post].md"}'),g={name:"201808/20180806 A gawk script to convert smart quotes.md"};function c(d,s,h,q,m,k){const p=i("Link");return o(),r("div",null,[s[23]||(s[23]=a("h1",{id:"一个转换花引号的-gawk-脚本",tabindex:"-1"},[n("一个转换花引号的 gawk 脚本 "),a("a",{class:"header-anchor",href:"#一个转换花引号的-gawk-脚本","aria-label":"Permalink to “一个转换花引号的 gawk 脚本”"},"​")],-1)),s[24]||(s[24]=a("blockquote",null,[a("p",null,"下载我的 awk 秘籍。")],-1)),s[25]||(s[25]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/osdc_520x292_opensourceprescription.png?itok=gFrc_GTH",alt:""})],-1)),s[26]||(s[26]=a("p",null,"我管理着一个个人网站，用手工编辑网站上的网页。由于网站上的页面并不多，这种方法对我很适合，可以让我对网站代码的细节一清二楚。",-1)),s[27]||(s[27]=a("p",null,'最近我升级了网站的设计样式，我决定把所有的普通引号都转换成“花引号”，即在打印材料中使用的那种引号：用 “” 来代替 ""。',-1)),s[28]||(s[28]=a("p",null,"手工修改所有的引号太耗时了，因此我决定将这个转换所有 HTML 文件中引号的过程自动化。不过通过程序或脚本来实现该功能需要费点劲。这个脚本需要知道何时将普通引号转换成花引号，并决定使用哪种引号（LCTT 译注：左引号还是右引号，单引号还是双引号）。",-1)),a("p",null,[s[2]||(s[2]=n("有多种方法可以转换引号。Greg Pittman 写过一个 ",-1)),t(p,{href:"https://opensource.com/article/17/3/python-scribus-smart-quotes"},{default:l(()=>[...s[0]||(s[0]=[n("Python 脚本",-1)])]),_:1}),s[3]||(s[3]=n(" 来修正文本中的花引号。而我自己使用 GNU ",-1)),t(p,{href:"https://opensource.com/downloads/cheat-sheet-awk-features"},{default:l(()=>[...s[1]||(s[1]=[n("awk",-1)])]),_:1}),s[4]||(s[4]=n(" (gawk) 来实现。",-1))]),a("blockquote",null,[a("p",null,[s[6]||(s[6]=n("下载我的 awk 秘籍。",-1)),t(p,{href:"https://opensource.com/downloads/cheat-sheet-awk-features"},{default:l(()=>[...s[5]||(s[5]=[n("免费下载",-1)])]),_:1}),s[7]||(s[7]=n("。",-1))])]),s[29]||(s[29]=u(`<p>开始之前，我写了一个简单的 gawk 函数来评估单个字符。若该字符是一个引号，这该函数判断是输出普通引号还是花引号。函数查看前一个字符；若前一个字符是空格，则函数输出左花引号。否则函数输出右花引号。脚本对单引号的处理方式也一样。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function smartquote (char, prevchar) {</span></span>
<span class="line"><span>        # print smart quotes depending on the previous character</span></span>
<span class="line"><span>        # otherwise just print the character as-is</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (prevchar ~ /\\s/) {</span></span>
<span class="line"><span>                # prev char is a space</span></span>
<span class="line"><span>                if (char == &quot;&#39;&quot;) {</span></span>
<span class="line"><span>                        printf(&quot;&amp;lsquo;&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                else if (char == &quot;\\&quot;&quot;) {</span></span>
<span class="line"><span>                        printf(&quot;&amp;ldquo;&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                else {</span></span>
<span class="line"><span>                        printf(&quot;%c&quot;, char);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>                # prev char is not a space</span></span>
<span class="line"><span>                if (char == &quot;&#39;&quot;) {</span></span>
<span class="line"><span>                        printf(&quot;&amp;rsquo;&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                else if (char == &quot;\\&quot;&quot;) {</span></span>
<span class="line"><span>                        printf(&quot;&amp;rdquo;&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                else {</span></span>
<span class="line"><span>                        printf(&quot;%c&quot;, char);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个 gawk 脚本的主体部分通过该函数处理 HTML 输入文件的一个个字符。该脚本在 HTML 标签内部逐字原样输出所有内容（比如，<code>&lt;html lang=&quot;en&quot;&gt;</code>）。在 HTML 标签外，脚本使用 <code>smartquote()</code> 函数来输出文本。<code>smartquote()</code> 函数来评估是输出普通引号还是花引号。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function smartquote (char, prevchar) {</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BEGIN {htmltag = 0}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>        # for each line, scan one letter at a time:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        linelen = length($0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        prev = &quot;\\n&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (i = 1; i &lt;= linelen; i++) {</span></span>
<span class="line"><span>                char = substr($0, i, 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (char == &quot;&lt;&quot;) {</span></span>
<span class="line"><span>                        htmltag = 1;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (htmltag == 1) {</span></span>
<span class="line"><span>                        printf(&quot;%c&quot;, char);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                else {</span></span>
<span class="line"><span>                        smartquote(char, prev);</span></span>
<span class="line"><span>                        prev = char;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (char == &quot;&gt;&quot;) {</span></span>
<span class="line"><span>                        htmltag = 0;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # add trailing newline at end of each line</span></span>
<span class="line"><span>        printf (&quot;\\n&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下面是一个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gawk -f quotes.awk test.html &gt; test2.html</span></span></code></pre></div><p>其输入为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Test page&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/test.css&quot; /&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot; /&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;&lt;a href=&quot;/&quot;&gt;&lt;img src=&quot;logo.png&quot; alt=&quot;Website logo&quot; /&gt;&lt;/a&gt;&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;p&gt;&quot;Hi there!&quot;&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;It&#39;s and its.&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>其输出为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Test page&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/test.css&quot; /&gt;</span></span>
<span class="line"><span>  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot; /&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;&lt;a href=&quot;/&quot;&gt;&lt;img src=&quot;logo.png&quot; alt=&quot;Website logo&quot; /&gt;&lt;/a&gt;&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;p&gt;&amp;ldquo;Hi there!&amp;rdquo;&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;It&amp;rsquo;s and its.&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><hr>`,11)),a("p",null,[s[9]||(s[9]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/18/8/gawk-script-convert-smart-quotes"},{default:l(()=>[...s[8]||(s[8]=[n("https://opensource.com/article/18/8/gawk-script-convert-smart-quotes",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/jim-hall"},{default:l(()=>[...s[10]||(s[10]=[n("Jim Hall",-1)])]),_:1}),s[15]||(s[15]=n(" 选题：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[11]||(s[11]=[n("lujun9972",-1)])]),_:1}),s[16]||(s[16]=n(" 译者：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[12]||(s[12]=[n("lujun9972",-1)])]),_:1}),s[17]||(s[17]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:l(()=>[...s[19]||(s[19]=[n("Linux中国",-1)])]),_:1}),s[22]||(s[22]=n(" 荣誉推出",-1))])])}const T=e(g,[["render",c]]);export{w as __pageData,T as default};
