import{_ as i,a0 as l,w as o,s as r,ao as h,I as p,x as a,a1 as e,A as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"Python 3.5 带给我们的方便的矩阵以及其他改进 | LCTT x X-CMD","titleTemplate":false,"description":"Python 3.5 带给我们的方便的矩阵以及其他改进 | LCTT (202106) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Python 3.5 带给我们的方便的矩阵以及其他改进 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Python 3.5 带给我们的方便的矩阵以及其他改进 | LCTT (202106) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202106/20210517 Convenient matrices and other improvements Python 3.5 brought us","title":"Python 3.5 带给我们的方便的矩阵以及其他改进","tag":"202106","desc":""},"relativePath":"202106/20210517 Convenient matrices and other improvements Python 3.5 brought us.md","filePath":"[post].md"}'),d={name:"202106/20210517 Convenient matrices and other improvements Python 3.5 brought us.md"};function u(c,s,g,k,b,f){const n=l("Link");return o(),r("div",null,[s[15]||(s[15]=h(`<h1 id="python-3-5-带给我们的方便的矩阵以及其他改进" tabindex="-1">Python 3.5 带给我们的方便的矩阵以及其他改进 <a class="header-anchor" href="#python-3-5-带给我们的方便的矩阵以及其他改进" aria-label="Permalink to “Python 3.5 带给我们的方便的矩阵以及其他改进”">​</a></h1><blockquote><p>探索一些未被充分利用但仍然有用的 Python 特性。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202106/01/201953lua9t9f3vvwqbqet.jpg" alt=""></p><p>这是 Python 3.x 首发特性系列文章的第六篇。Python 3.5 在 2015 年首次发布，尽管它已经发布了很长时间，但它引入的许多特性都没有被充分利用，而且相当酷。下面是其中的三个。</p><h3 id="操作符" tabindex="-1">@ 操作符 <a class="header-anchor" href="#操作符" aria-label="Permalink to “@ 操作符”">​</a></h3><p><code>@</code> 操作符在 Python 中是独一无二的，因为在标准库中没有任何对象可以实现它！它是为了在有矩阵的数学包中使用而添加的。</p><p>矩阵有两个乘法的概念。元素积是用 <code>*</code> 运算符完成的。但是矩阵组合（也被认为是乘法）需要自己的符号。它是用 <code>@</code> 完成的。</p><p>例如，将一个“八转”矩阵（将轴旋转 45 度）与自身合成，就会产生一个四转矩阵。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import numpy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hrt2 = 2**0.5 / 2</span></span>
<span class="line"><span>eighth_turn = numpy.array([</span></span>
<span class="line"><span>    [hrt2, hrt2],</span></span>
<span class="line"><span>    [-hrt2, hrt2]</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>eighth_turn @ eighth_turn</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    array([[ 4.26642159e-17,  1.00000000e+00],</span></span>
<span class="line"><span>           [-1.00000000e+00, -4.26642159e-17]])</span></span></code></pre></div><p>浮点数是不精确的，这比较难以看出。从结果中减去四转矩阵，将其平方相加，然后取其平方根，这样就比较容易检查。</p><p>这是新运算符的一个优点：特别是在复杂的公式中，代码看起来更像基础数学：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>almost_zero = ((eighth_turn @ eighth_turn) - numpy.array([[0, 1], [-1, 0]]))**2</span></span>
<span class="line"><span>round(numpy.sum(almost_zero) ** 0.5, 10)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    0.0</span></span></code></pre></div><h3 id="参数中的多个关键词字典" tabindex="-1">参数中的多个关键词字典 <a class="header-anchor" href="#参数中的多个关键词字典" aria-label="Permalink to “参数中的多个关键词字典”">​</a></h3><p>Python 3.5 使得调用具有多个关键字-参数字典的函数成为可能。这意味着多个默认值的源可以与更清晰的代码”互操作“。</p><p>例如，这里有个可笑的关键字参数的函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def show_status(</span></span>
<span class="line"><span>    *,</span></span>
<span class="line"><span>    the_good=None,</span></span>
<span class="line"><span>    the_bad=None,</span></span>
<span class="line"><span>    the_ugly=None,</span></span>
<span class="line"><span>    fistful=None,</span></span>
<span class="line"><span>    dollars=None,</span></span>
<span class="line"><span>    more=None</span></span>
<span class="line"><span>):</span></span>
<span class="line"><span>    if the_good:</span></span>
<span class="line"><span>        print(&quot;Good&quot;, the_good)</span></span>
<span class="line"><span>    if the_bad:</span></span>
<span class="line"><span>        print(&quot;Bad&quot;, the_bad)</span></span>
<span class="line"><span>    if the_ugly:</span></span>
<span class="line"><span>        print(&quot;Ugly&quot;, the_ugly)</span></span>
<span class="line"><span>    if fistful:</span></span>
<span class="line"><span>        print(&quot;Fist&quot;, fistful)</span></span>
<span class="line"><span>    if dollars:</span></span>
<span class="line"><span>        print(&quot;Dollars&quot;, dollars)</span></span>
<span class="line"><span>    if more:</span></span>
<span class="line"><span>        print(&quot;More&quot;, more)</span></span></code></pre></div><p>当你在应用中调用这个函数时，有些参数是硬编码的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>defaults = dict(</span></span>
<span class="line"><span>    the_good=&quot;You dig&quot;,</span></span>
<span class="line"><span>    the_bad=&quot;I have to have respect&quot;,</span></span>
<span class="line"><span>    the_ugly=&quot;Shoot, don&#39;t talk&quot;,</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>从配置文件中读取更多参数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>others = json.loads(&quot;&quot;&quot;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>&quot;fistful&quot;: &quot;Get three coffins ready&quot;,</span></span>
<span class="line"><span>&quot;dollars&quot;: &quot;Remember me?&quot;,</span></span>
<span class="line"><span>&quot;more&quot;: &quot;It&#39;s a small world&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&quot;&quot;&quot;)</span></span></code></pre></div><p>你可以从两个源一起调用这个函数，而不必构建一个中间字典：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>show_status(**defaults, **others)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    Good You dig</span></span>
<span class="line"><span>    Bad I have to have respect</span></span>
<span class="line"><span>    Ugly Shoot, don&#39;t talk</span></span>
<span class="line"><span>    Fist Get three coffins ready</span></span>
<span class="line"><span>    Dollars Remember me?</span></span>
<span class="line"><span>    More It&#39;s a small world</span></span></code></pre></div><h3 id="os-scandir" tabindex="-1">os.scandir <a class="header-anchor" href="#os-scandir" aria-label="Permalink to “os.scandir”">​</a></h3><p><code>os.scandir</code> 函数是一种新的方法来遍历目录内容。它返回一个生成器，产生关于每个对象的丰富数据。例如，这里有一种打印目录清单的方法，在目录的末尾跟着 <code>/</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for entry in os.scandir(&quot;.git&quot;):</span></span>
<span class="line"><span>    print(entry.name + (&quot;/&quot; if entry.is_dir() else &quot;&quot;))</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    refs/</span></span>
<span class="line"><span>    HEAD</span></span>
<span class="line"><span>    logs/</span></span>
<span class="line"><span>    index</span></span>
<span class="line"><span>    branches/</span></span>
<span class="line"><span>    config</span></span>
<span class="line"><span>    objects/</span></span>
<span class="line"><span>    description</span></span>
<span class="line"><span>    COMMIT_EDITMSG</span></span>
<span class="line"><span>    info/</span></span>
<span class="line"><span>    hooks/</span></span></code></pre></div><h3 id="欢迎来到-2015-年" tabindex="-1">欢迎来到 2015 年 <a class="header-anchor" href="#欢迎来到-2015-年" aria-label="Permalink to “欢迎来到 2015 年”">​</a></h3><p>Python 3.5 在六年前就已经发布了，但是在这个版本中首次出现的一些特性非常酷，而且没有得到充分利用。如果你还没使用，那么将他们添加到你的工具箱中。</p><hr>`,32)),p("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://opensource.com/article/21/5/python-35-features"},{default:t(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/21/5/python-35-features",-1)])]),_:1})]),p("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://opensource.com/users/moshez"},{default:t(()=>[...s[2]||(s[2]=[a("Moshe Zadka",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),e(n,{href:"https://github.com/geekpi"},{default:t(()=>[...s[4]||(s[4]=[a("geekpi",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:t(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:t(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const C=i(d,[["render",u]]);export{q as __pageData,C as default};
