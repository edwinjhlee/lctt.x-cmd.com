import{_ as i,a0 as l,w as o,s as r,ao as h,I as p,x as a,a1 as e,A as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"Python 3.5 帶給我們的方便的矩陣以及其他改進 | LCTT x X-CMD","titleTemplate":false,"description":"Python 3.5 帶給我們的方便的矩陣以及其他改進 | LCTT (202106) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Python 3.5 帶給我們的方便的矩陣以及其他改進 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Python 3.5 帶給我們的方便的矩陣以及其他改進 | LCTT (202106) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202106/20210517 Convenient matrices and other improvements Python 3.5 brought us","title":"Python 3.5 帶給我們的方便的矩陣以及其他改進","tag":"202106","desc":""},"relativePath":"202106/20210517 Convenient matrices and other improvements Python 3.5 brought us.md","filePath":"[post].md"}'),d={name:"202106/20210517 Convenient matrices and other improvements Python 3.5 brought us.md"};function u(c,s,g,k,b,f){const n=l("Link");return o(),r("div",null,[s[15]||(s[15]=h(`<h1 id="python-3-5-帶給我們的方便的矩陣以及其他改進" tabindex="-1">Python 3.5 帶給我們的方便的矩陣以及其他改進 <a class="header-anchor" href="#python-3-5-帶給我們的方便的矩陣以及其他改進" aria-label="Permalink to “Python 3.5 帶給我們的方便的矩陣以及其他改進”">​</a></h1><blockquote><p>探索一些未被充分利用但仍然有用的 Python 特性。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202106/01/201953lua9t9f3vvwqbqet.jpg" alt=""></p><p>這是 Python 3.x 首發特性系列文章的第六篇。Python 3.5 在 2015 年首次發佈，儘管它已經發布了很長時間，但它引入的許多特性都沒有被充分利用，而且相當酷。下面是其中的三個。</p><h3 id="操作符" tabindex="-1">@ 操作符 <a class="header-anchor" href="#操作符" aria-label="Permalink to “@ 操作符”">​</a></h3><p><code>@</code> 操作符在 Python 中是獨一無二的，因為在標準庫中沒有任何對象可以實現它！它是為了在有矩陣的數學包中使用而添加的。</p><p>矩陣有兩個乘法的概念。元素積是用 <code>*</code> 運算符完成的。但是矩陣組合（也被認為是乘法）需要自己的符號。它是用 <code>@</code> 完成的。</p><p>例如，將一個“八轉”矩陣（將軸旋轉 45 度）與自身合成，就會產生一個四轉矩陣。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import numpy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hrt2 = 2**0.5 / 2</span></span>
<span class="line"><span>eighth_turn = numpy.array([</span></span>
<span class="line"><span>    [hrt2, hrt2],</span></span>
<span class="line"><span>    [-hrt2, hrt2]</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>eighth_turn @ eighth_turn</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    array([[ 4.26642159e-17,  1.00000000e+00],</span></span>
<span class="line"><span>           [-1.00000000e+00, -4.26642159e-17]])</span></span></code></pre></div><p>浮點數是不精確的，這比較難以看出。從結果中減去四轉矩陣，將其平方相加，然後取其平方根，這樣就比較容易檢查。</p><p>這是新運算符的一個優點：特別是在複雜的公式中，代碼看起來更像基礎數學：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>almost_zero = ((eighth_turn @ eighth_turn) - numpy.array([[0, 1], [-1, 0]]))**2</span></span>
<span class="line"><span>round(numpy.sum(almost_zero) ** 0.5, 10)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    0.0</span></span></code></pre></div><h3 id="參數中的多個關鍵詞字典" tabindex="-1">參數中的多個關鍵詞字典 <a class="header-anchor" href="#參數中的多個關鍵詞字典" aria-label="Permalink to “參數中的多個關鍵詞字典”">​</a></h3><p>Python 3.5 使得調用具有多個關鍵字-參數字典的函數成為可能。這意味着多個默認值的源可以與更清晰的代碼”互操作“。</p><p>例如，這裏有個可笑的關鍵字參數的函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def show_status(</span></span>
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
<span class="line"><span>        print(&quot;More&quot;, more)</span></span></code></pre></div><p>當你在應用中調用這個函數時，有些參數是硬編碼的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>defaults = dict(</span></span>
<span class="line"><span>    the_good=&quot;You dig&quot;,</span></span>
<span class="line"><span>    the_bad=&quot;I have to have respect&quot;,</span></span>
<span class="line"><span>    the_ugly=&quot;Shoot, don&#39;t talk&quot;,</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>從配置文件中讀取更多參數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>others = json.loads(&quot;&quot;&quot;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>&quot;fistful&quot;: &quot;Get three coffins ready&quot;,</span></span>
<span class="line"><span>&quot;dollars&quot;: &quot;Remember me?&quot;,</span></span>
<span class="line"><span>&quot;more&quot;: &quot;It&#39;s a small world&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&quot;&quot;&quot;)</span></span></code></pre></div><p>你可以從兩個源一起調用這個函數，而不必構建一箇中間字典：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>show_status(**defaults, **others)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    Good You dig</span></span>
<span class="line"><span>    Bad I have to have respect</span></span>
<span class="line"><span>    Ugly Shoot, don&#39;t talk</span></span>
<span class="line"><span>    Fist Get three coffins ready</span></span>
<span class="line"><span>    Dollars Remember me?</span></span>
<span class="line"><span>    More It&#39;s a small world</span></span></code></pre></div><h3 id="os-scandir" tabindex="-1">os.scandir <a class="header-anchor" href="#os-scandir" aria-label="Permalink to “os.scandir”">​</a></h3><p><code>os.scandir</code> 函數是一種新的方法來遍歷目錄內容。它返回一個生成器，產生關於每個對象的豐富數據。例如，這裏有一種打印目錄清單的方法，在目錄的末尾跟着 <code>/</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for entry in os.scandir(&quot;.git&quot;):</span></span>
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
<span class="line"><span>    hooks/</span></span></code></pre></div><h3 id="歡迎來到-2015-年" tabindex="-1">歡迎來到 2015 年 <a class="header-anchor" href="#歡迎來到-2015-年" aria-label="Permalink to “歡迎來到 2015 年”">​</a></h3><p>Python 3.5 在六年前就已經發布了，但是在這個版本中首次出現的一些特性非常酷，而且沒有得到充分利用。如果你還沒使用，那麼將他們添加到你的工具箱中。</p><hr>`,32)),p("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://opensource.com/article/21/5/python-35-features"},{default:t(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/21/5/python-35-features",-1)])]),_:1})]),p("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://opensource.com/users/moshez"},{default:t(()=>[...s[2]||(s[2]=[a("Moshe Zadka",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),e(n,{href:"https://github.com/geekpi"},{default:t(()=>[...s[4]||(s[4]=[a("geekpi",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:t(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:t(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const C=i(d,[["render",u]]);export{q as __pageData,C as default};
