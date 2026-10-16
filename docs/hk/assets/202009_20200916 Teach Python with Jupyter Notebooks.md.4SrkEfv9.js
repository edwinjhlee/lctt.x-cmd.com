import{_ as l,a0 as i,w as o,s as r,I as e,x as n,a1 as p,A as t,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const m=JSON.parse('{"title":"用 Jupyter Notebook 教 Python | LCTT x X-CMD","titleTemplate":false,"description":"用 Jupyter Notebook 教 Python | LCTT (202009) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Jupyter Notebook 教 Python | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Jupyter Notebook 教 Python | LCTT (202009) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202009/20200916 Teach Python with Jupyter Notebooks","title":"用 Jupyter Notebook 教 Python","tag":"202009","desc":""},"relativePath":"202009/20200916 Teach Python with Jupyter Notebooks.md","filePath":"[post].md"}'),u={name:"202009/20200916 Teach Python with Jupyter Notebooks.md"};function d(h,s,g,_,k,b){const a=i("Link");return o(),r("div",null,[s[32]||(s[32]=e("h1",{id:"用-jupyter-notebook-教-python",tabindex:"-1"},[n("用 Jupyter Notebook 教 Python "),e("a",{class:"header-anchor",href:"#用-jupyter-notebook-教-python","aria-label":"Permalink to “用 Jupyter Notebook 教 Python”"},"​")],-1)),s[33]||(s[33]=e("blockquote",null,[e("p",null,"有了 Jupyter、PyHamcrest，用一點測試的代碼把它們連在一起，你就可以教任何適用於單元測試的 Python 內容。")],-1)),s[34]||(s[34]=e("p",null,[e("img",{src:"https://img.linux.net.cn/data/attachment/album/202009/24/045721mubdfdx1tb11fibi.jpg",alt:""})],-1)),e("p",null,[s[1]||(s[1]=n("關於 Ruby 社區的一些事情一直讓我印象深刻，其中兩個例子是對測試的承諾和對易於上手的強調。這兩方面最好的例子是 ",-1)),p(a,{href:"https://github.com/edgecase/ruby_koans"},{default:t(()=>[...s[0]||(s[0]=[n("Ruby Koans",-1)])]),_:1}),s[2]||(s[2]=n("，在這裏你可以通過修復測試來學習 Ruby。",-1))]),e("p",null,[s[5]||(s[5]=n("要是我們能把這些神奇的工具也用於 Python，我們應該可以做得更好。是的，使用 ",-1)),p(a,{href:"https://jupyter.org/"},{default:t(()=>[...s[3]||(s[3]=[n("Jupyter Notebook",-1)])]),_:1}),s[6]||(s[6]=n("、",-1)),p(a,{href:"https://github.com/hamcrest/PyHamcrest"},{default:t(()=>[...s[4]||(s[4]=[n("PyHamcrest",-1)])]),_:1}),s[7]||(s[7]=n("，再加上一點類似於膠帶的粘合代碼，我們可以做出一個包括教學、可工作的代碼和需要修復的代碼的教程。",-1))]),e("p",null,[s[12]||(s[12]=n("首先，需要一些“膠布”。通常，你會使用一些漂亮的命令列測試器來做測試，比如 ",-1)),p(a,{href:"https://docs.pytest.org/en/stable/"},{default:t(()=>[...s[8]||(s[8]=[n("pytest",-1)])]),_:1}),s[13]||(s[13]=n(" 或 ",-1)),p(a,{href:"https://github.com/Julian/Virtue"},{default:t(()=>[...s[9]||(s[9]=[n("virtue",-1)])]),_:1}),s[14]||(s[14]=n("。通常，你甚至不會直接運行它。你使用像 ",-1)),p(a,{href:"https://tox.readthedocs.io/en/latest/"},{default:t(()=>[...s[10]||(s[10]=[n("tox",-1)])]),_:1}),s[15]||(s[15]=n(" 或 ",-1)),p(a,{href:"https://nox.thea.codes/en/stable/"},{default:t(()=>[...s[11]||(s[11]=[n("nox",-1)])]),_:1}),s[16]||(s[16]=n(" 這樣的工具來運行它。然而，對於 Jupyter 來説，你需要寫一小段粘合代碼，可以直接在其中運行測試。",-1))]),s[35]||(s[35]=c(`<p>幸運的是，這個代碼又短又簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def run_test(klass):</span></span>
<span class="line"><span>    suite = unittest.TestLoader().loadTestsFromTestCase(klass)</span></span>
<span class="line"><span>    unittest.TextTestRunner(verbosity=2).run(suite)</span></span>
<span class="line"><span>    return klass</span></span></code></pre></div><p>現在，裝備已經就緒，可以進行第一次練習了。</p><p>在教學中，從一個簡單的練習開始，建立信心總是一個好主意。</p><p>那麼，讓我們來修復一個非常簡單的測試：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestNumbers(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    def test_equality(self):</span></span>
<span class="line"><span>        expected_value = 3 # 只改這一行</span></span>
<span class="line"><span>        self.assertEqual(1+1, expected_value)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    test_equality (__main__.TestNumbers) ... FAIL</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ======================================================================</span></span>
<span class="line"><span>    FAIL: test_equality (__main__.TestNumbers)</span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Traceback (most recent call last):</span></span>
<span class="line"><span>      File &quot;&lt;ipython-input-7-5ebe25bc00f3&gt;&quot;, line 6, in test_equality</span></span>
<span class="line"><span>        self.assertEqual(1+1, expected_value)</span></span>
<span class="line"><span>    AssertionError: 2 != 3</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Ran 1 test in 0.002s</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    FAILED (failures=1)</span></span></code></pre></div><p>“只改這一行” 對學生來説是一個有用的標記。它準確地表明瞭需要修改的內容。否則，學生可以通過將第一行改為 <code>return</code> 來修復測試。</p><p>在這種情況下，修復很容易：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestNumbers(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    def test_equality(self):</span></span>
<span class="line"><span>        expected_value = 2 # 修復後的代碼行</span></span>
<span class="line"><span>        self.assertEqual(1+1, expected_value)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    test_equality (__main__.TestNumbers) ... ok</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Ran 1 test in 0.002s</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    OK</span></span></code></pre></div><p>然而，很快，<code>unittest</code> 庫的原生斷言將被證明是不夠的。在 <code>pytest</code> 中，通過重寫 <code>assert</code> 中的字節碼來解決這個問題，使其具有神奇的屬性和各種啓發式方法。但這在 Jupyter notebook 中就不容易實現了。是時候挖出一個好的斷言庫了：PyHamcrest。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from hamcrest import *</span></span>
<span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestList(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    def test_equality(self):</span></span>
<span class="line"><span>        things = [1,</span></span>
<span class="line"><span>                  5, # 只改這一行</span></span>
<span class="line"><span>                  3]</span></span>
<span class="line"><span>        assert_that(things, has_items(1, 2, 3))</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    test_equality (__main__.TestList) ... FAIL</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ======================================================================</span></span>
<span class="line"><span>    FAIL: test_equality (__main__.TestList)</span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Traceback (most recent call last):</span></span>
<span class="line"><span>      File &quot;&lt;ipython-input-11-96c91225ee7d&gt;&quot;, line 8, in test_equality</span></span>
<span class="line"><span>        assert_that(things, has_items(1, 2, 3))</span></span>
<span class="line"><span>    AssertionError:</span></span>
<span class="line"><span>    Expected: (a sequence containing &lt;1&gt; and a sequence containing &lt;2&gt; and a sequence containing &lt;3&gt;)</span></span>
<span class="line"><span>         but: a sequence containing &lt;2&gt; was &lt;[1, 5, 3]&gt;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Ran 1 test in 0.004s</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    FAILED (failures=1)</span></span></code></pre></div><p>PyHamcrest 不僅擅長靈活的斷言，它還擅長清晰的錯誤信息。正因為如此，問題就顯而易見了。<code>[1, 5, 3]</code> 不包含 <code>2</code>，而且看起來很醜：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestList(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    def test_equality(self):</span></span>
<span class="line"><span>        things = [1,</span></span>
<span class="line"><span>                  2, # 改完的行</span></span>
<span class="line"><span>                  3]</span></span>
<span class="line"><span>        assert_that(things, has_items(1, 2, 3))</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    test_equality (__main__.TestList) ... ok</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Ran 1 test in 0.001s</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    OK</span></span></code></pre></div><p>使用 Jupyter、PyHamcrest 和一點測試的粘合代碼，你可以教授任何適用於單元測試的 Python 主題。</p><p>例如，下面可以幫助展示 Python 從字符串中去掉空白的不同方法之間的差異。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>source_string = &quot;  hello world  &quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestList(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    # 這是個贈品：它可以工作！</span></span>
<span class="line"><span>    def test_complete_strip(self):</span></span>
<span class="line"><span>        result = source_string.strip()</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;hello&quot;), ends_with(&quot;world&quot;)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_start_strip(self):</span></span>
<span class="line"><span>        result = source_string # 只改這一行</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;hello&quot;), ends_with(&quot;world  &quot;)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_end_strip(self):</span></span>
<span class="line"><span>        result = source_string # 只改這一行</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;  hello&quot;), ends_with(&quot;world&quot;)))</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    test_complete_strip (__main__.TestList) ... ok</span></span>
<span class="line"><span>    test_end_strip (__main__.TestList) ... FAIL</span></span>
<span class="line"><span>    test_start_strip (__main__.TestList) ... FAIL</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ======================================================================</span></span>
<span class="line"><span>    FAIL: test_end_strip (__main__.TestList)</span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Traceback (most recent call last):</span></span>
<span class="line"><span>      File &quot;&lt;ipython-input-16-3db7465bd5bf&gt;&quot;, line 19, in test_end_strip</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>    AssertionError:</span></span>
<span class="line"><span>    Expected: (a string starting with &#39;  hello&#39; and a string ending with &#39;world&#39;)</span></span>
<span class="line"><span>         but: a string ending with &#39;world&#39; was &#39;  hello world  &#39;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ======================================================================</span></span>
<span class="line"><span>    FAIL: test_start_strip (__main__.TestList)</span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Traceback (most recent call last):</span></span>
<span class="line"><span>      File &quot;&lt;ipython-input-16-3db7465bd5bf&gt;&quot;, line 14, in test_start_strip</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>    AssertionError:</span></span>
<span class="line"><span>    Expected: (a string starting with &#39;hello&#39; and a string ending with &#39;world  &#39;)</span></span>
<span class="line"><span>         but: a string starting with &#39;hello&#39; was &#39;  hello world  &#39;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Ran 3 tests in 0.006s</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    FAILED (failures=2)</span></span></code></pre></div><p>理想情況下，學生們會意識到 <code>.lstrip()</code> 和 <code>.rstrip()</code> 這兩個方法可以滿足他們的需要。但如果他們不這樣做，而是試圖到處使用 <code>.strip()</code> 的話：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>source_string = &quot;  hello world  &quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestList(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    # 這是個贈品：它可以工作！</span></span>
<span class="line"><span>    def test_complete_strip(self):</span></span>
<span class="line"><span>        result = source_string.strip()</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;hello&quot;), ends_with(&quot;world&quot;)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_start_strip(self):</span></span>
<span class="line"><span>        result = source_string.strip() # 改完的行</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;hello&quot;), ends_with(&quot;world  &quot;)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_end_strip(self):</span></span>
<span class="line"><span>        result = source_string.strip() # 改完的行</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;  hello&quot;), ends_with(&quot;world&quot;)))</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    test_complete_strip (__main__.TestList) ... ok</span></span>
<span class="line"><span>    test_end_strip (__main__.TestList) ... FAIL</span></span>
<span class="line"><span>    test_start_strip (__main__.TestList) ... FAIL</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ======================================================================</span></span>
<span class="line"><span>    FAIL: test_end_strip (__main__.TestList)</span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Traceback (most recent call last):</span></span>
<span class="line"><span>      File &quot;&lt;ipython-input-17-6f9cfa1a997f&gt;&quot;, line 19, in test_end_strip</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>    AssertionError:</span></span>
<span class="line"><span>    Expected: (a string starting with &#39;  hello&#39; and a string ending with &#39;world&#39;)</span></span>
<span class="line"><span>         but: a string starting with &#39;  hello&#39; was &#39;hello world&#39;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ======================================================================</span></span>
<span class="line"><span>    FAIL: test_start_strip (__main__.TestList)</span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Traceback (most recent call last):</span></span>
<span class="line"><span>      File &quot;&lt;ipython-input-17-6f9cfa1a997f&gt;&quot;, line 14, in test_start_strip</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>    AssertionError:</span></span>
<span class="line"><span>    Expected: (a string starting with &#39;hello&#39; and a string ending with &#39;world  &#39;)</span></span>
<span class="line"><span>         but: a string ending with &#39;world  &#39; was &#39;hello world&#39;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Ran 3 tests in 0.007s</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    FAILED (failures=2)</span></span></code></pre></div><p>他們會得到一個不同的錯誤信息，顯示去除了過多的空白：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>source_string = &quot;  hello world  &quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestList(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    # 這是個贈品：它可以工作！</span></span>
<span class="line"><span>    def test_complete_strip(self):</span></span>
<span class="line"><span>        result = source_string.strip()</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;hello&quot;), ends_with(&quot;world&quot;)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_start_strip(self):</span></span>
<span class="line"><span>        result = source_string.lstrip() # Fixed this line</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;hello&quot;), ends_with(&quot;world  &quot;)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_end_strip(self):</span></span>
<span class="line"><span>        result = source_string.rstrip() # Fixed this line</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;  hello&quot;), ends_with(&quot;world&quot;)))</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    test_complete_strip (__main__.TestList) ... ok</span></span>
<span class="line"><span>    test_end_strip (__main__.TestList) ... ok</span></span>
<span class="line"><span>    test_start_strip (__main__.TestList) ... ok</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Ran 3 tests in 0.005s</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    OK</span></span></code></pre></div><p>在一個比較真實的教程中，會有更多的例子和更多的解釋。這種使用 Jupyter Notebook 的技巧，有的例子可以用，有的例子需要修正，可以用於實時教學，可以用於視頻課，甚至，可以用更多的其它零散用途，讓學生自己完成一個教程。</p><p>現在就去分享你的知識吧!</p><hr>`,30)),e("p",null,[s[18]||(s[18]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/20/9/teach-python-jupyter"},{default:t(()=>[...s[17]||(s[17]=[n("https://opensource.com/article/20/9/teach-python-jupyter",-1)])]),_:1})]),e("p",null,[s[23]||(s[23]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/moshez"},{default:t(()=>[...s[19]||(s[19]=[n("Moshe Zadka",-1)])]),_:1}),s[24]||(s[24]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[20]||(s[20]=[n("lujun9972",-1)])]),_:1}),s[25]||(s[25]=n(" 譯者：",-1)),p(a,{href:"https://github.com/wxy"},{default:t(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1}),s[26]||(s[26]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:t(()=>[...s[22]||(s[22]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[29]||(s[29]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[27]||(s[27]=[n("LCTT",-1)])]),_:1}),s[30]||(s[30]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:t(()=>[...s[28]||(s[28]=[n("Linux中國",-1)])]),_:1}),s[31]||(s[31]=n(" 榮譽推出",-1))])])}const q=l(u,[["render",d]]);export{m as __pageData,q as default};
