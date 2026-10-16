import{_ as l,a0 as i,w as o,s as r,I as e,x as n,a1 as p,A as t,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const m=JSON.parse('{"title":"用 Jupyter Notebook 教 Python | LCTT x X-CMD","titleTemplate":false,"description":"用 Jupyter Notebook 教 Python | LCTT (202009) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 Jupyter Notebook 教 Python | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 Jupyter Notebook 教 Python | LCTT (202009) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202009/20200916 Teach Python with Jupyter Notebooks","title":"用 Jupyter Notebook 教 Python","tag":"202009","desc":""},"relativePath":"202009/20200916 Teach Python with Jupyter Notebooks.md","filePath":"[post].md"}'),u={name:"202009/20200916 Teach Python with Jupyter Notebooks.md"};function d(h,s,g,_,k,b){const a=i("Link");return o(),r("div",null,[s[32]||(s[32]=e("h1",{id:"用-jupyter-notebook-教-python",tabindex:"-1"},[n("用 Jupyter Notebook 教 Python "),e("a",{class:"header-anchor",href:"#用-jupyter-notebook-教-python","aria-label":"Permalink to “用 Jupyter Notebook 教 Python”"},"​")],-1)),s[33]||(s[33]=e("blockquote",null,[e("p",null,"有了 Jupyter、PyHamcrest，用一点测试的代码把它们连在一起，你就可以教任何适用于单元测试的 Python 内容。")],-1)),s[34]||(s[34]=e("p",null,[e("img",{src:"https://img.linux.net.cn/data/attachment/album/202009/24/045721mubdfdx1tb11fibi.jpg",alt:""})],-1)),e("p",null,[s[1]||(s[1]=n("关于 Ruby 社区的一些事情一直让我印象深刻，其中两个例子是对测试的承诺和对易于上手的强调。这两方面最好的例子是 ",-1)),p(a,{href:"https://github.com/edgecase/ruby_koans"},{default:t(()=>[...s[0]||(s[0]=[n("Ruby Koans",-1)])]),_:1}),s[2]||(s[2]=n("，在这里你可以通过修复测试来学习 Ruby。",-1))]),e("p",null,[s[5]||(s[5]=n("要是我们能把这些神奇的工具也用于 Python，我们应该可以做得更好。是的，使用 ",-1)),p(a,{href:"https://jupyter.org/"},{default:t(()=>[...s[3]||(s[3]=[n("Jupyter Notebook",-1)])]),_:1}),s[6]||(s[6]=n("、",-1)),p(a,{href:"https://github.com/hamcrest/PyHamcrest"},{default:t(()=>[...s[4]||(s[4]=[n("PyHamcrest",-1)])]),_:1}),s[7]||(s[7]=n("，再加上一点类似于胶带的粘合代码，我们可以做出一个包括教学、可工作的代码和需要修复的代码的教程。",-1))]),e("p",null,[s[12]||(s[12]=n("首先，需要一些“胶布”。通常，你会使用一些漂亮的命令行测试器来做测试，比如 ",-1)),p(a,{href:"https://docs.pytest.org/en/stable/"},{default:t(()=>[...s[8]||(s[8]=[n("pytest",-1)])]),_:1}),s[13]||(s[13]=n(" 或 ",-1)),p(a,{href:"https://github.com/Julian/Virtue"},{default:t(()=>[...s[9]||(s[9]=[n("virtue",-1)])]),_:1}),s[14]||(s[14]=n("。通常，你甚至不会直接运行它。你使用像 ",-1)),p(a,{href:"https://tox.readthedocs.io/en/latest/"},{default:t(()=>[...s[10]||(s[10]=[n("tox",-1)])]),_:1}),s[15]||(s[15]=n(" 或 ",-1)),p(a,{href:"https://nox.thea.codes/en/stable/"},{default:t(()=>[...s[11]||(s[11]=[n("nox",-1)])]),_:1}),s[16]||(s[16]=n(" 这样的工具来运行它。然而，对于 Jupyter 来说，你需要写一小段粘合代码，可以直接在其中运行测试。",-1))]),s[35]||(s[35]=c(`<p>幸运的是，这个代码又短又简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def run_test(klass):</span></span>
<span class="line"><span>    suite = unittest.TestLoader().loadTestsFromTestCase(klass)</span></span>
<span class="line"><span>    unittest.TextTestRunner(verbosity=2).run(suite)</span></span>
<span class="line"><span>    return klass</span></span></code></pre></div><p>现在，装备已经就绪，可以进行第一次练习了。</p><p>在教学中，从一个简单的练习开始，建立信心总是一个好主意。</p><p>那么，让我们来修复一个非常简单的测试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestNumbers(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    def test_equality(self):</span></span>
<span class="line"><span>        expected_value = 3 # 只改这一行</span></span>
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
<span class="line"><span>    FAILED (failures=1)</span></span></code></pre></div><p>“只改这一行” 对学生来说是一个有用的标记。它准确地表明了需要修改的内容。否则，学生可以通过将第一行改为 <code>return</code> 来修复测试。</p><p>在这种情况下，修复很容易：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestNumbers(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    def test_equality(self):</span></span>
<span class="line"><span>        expected_value = 2 # 修复后的代码行</span></span>
<span class="line"><span>        self.assertEqual(1+1, expected_value)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    test_equality (__main__.TestNumbers) ... ok</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    ----------------------------------------------------------------------</span></span>
<span class="line"><span>    Ran 1 test in 0.002s</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    OK</span></span></code></pre></div><p>然而，很快，<code>unittest</code> 库的原生断言将被证明是不够的。在 <code>pytest</code> 中，通过重写 <code>assert</code> 中的字节码来解决这个问题，使其具有神奇的属性和各种启发式方法。但这在 Jupyter notebook 中就不容易实现了。是时候挖出一个好的断言库了：PyHamcrest。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from hamcrest import *</span></span>
<span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestList(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    def test_equality(self):</span></span>
<span class="line"><span>        things = [1,</span></span>
<span class="line"><span>                  5, # 只改这一行</span></span>
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
<span class="line"><span>    FAILED (failures=1)</span></span></code></pre></div><p>PyHamcrest 不仅擅长灵活的断言，它还擅长清晰的错误信息。正因为如此，问题就显而易见了。<code>[1, 5, 3]</code> 不包含 <code>2</code>，而且看起来很丑：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@run_test</span></span>
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
<span class="line"><span>    OK</span></span></code></pre></div><p>使用 Jupyter、PyHamcrest 和一点测试的粘合代码，你可以教授任何适用于单元测试的 Python 主题。</p><p>例如，下面可以帮助展示 Python 从字符串中去掉空白的不同方法之间的差异。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>source_string = &quot;  hello world  &quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestList(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    # 这是个赠品：它可以工作！</span></span>
<span class="line"><span>    def test_complete_strip(self):</span></span>
<span class="line"><span>        result = source_string.strip()</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;hello&quot;), ends_with(&quot;world&quot;)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_start_strip(self):</span></span>
<span class="line"><span>        result = source_string # 只改这一行</span></span>
<span class="line"><span>        assert_that(result,</span></span>
<span class="line"><span>                   all_of(starts_with(&quot;hello&quot;), ends_with(&quot;world  &quot;)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_end_strip(self):</span></span>
<span class="line"><span>        result = source_string # 只改这一行</span></span>
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
<span class="line"><span>    FAILED (failures=2)</span></span></code></pre></div><p>理想情况下，学生们会意识到 <code>.lstrip()</code> 和 <code>.rstrip()</code> 这两个方法可以满足他们的需要。但如果他们不这样做，而是试图到处使用 <code>.strip()</code> 的话：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>source_string = &quot;  hello world  &quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestList(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    # 这是个赠品：它可以工作！</span></span>
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
<span class="line"><span>    FAILED (failures=2)</span></span></code></pre></div><p>他们会得到一个不同的错误信息，显示去除了过多的空白：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>source_string = &quot;  hello world  &quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@run_test</span></span>
<span class="line"><span>class TestList(unittest.TestCase):</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    # 这是个赠品：它可以工作！</span></span>
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
<span class="line"><span>    OK</span></span></code></pre></div><p>在一个比较真实的教程中，会有更多的例子和更多的解释。这种使用 Jupyter Notebook 的技巧，有的例子可以用，有的例子需要修正，可以用于实时教学，可以用于视频课，甚至，可以用更多的其它零散用途，让学生自己完成一个教程。</p><p>现在就去分享你的知识吧!</p><hr>`,30)),e("p",null,[s[18]||(s[18]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/20/9/teach-python-jupyter"},{default:t(()=>[...s[17]||(s[17]=[n("https://opensource.com/article/20/9/teach-python-jupyter",-1)])]),_:1})]),e("p",null,[s[23]||(s[23]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/moshez"},{default:t(()=>[...s[19]||(s[19]=[n("Moshe Zadka",-1)])]),_:1}),s[24]||(s[24]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:t(()=>[...s[20]||(s[20]=[n("lujun9972",-1)])]),_:1}),s[25]||(s[25]=n(" 译者：",-1)),p(a,{href:"https://github.com/wxy"},{default:t(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1}),s[26]||(s[26]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:t(()=>[...s[22]||(s[22]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[29]||(s[29]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[27]||(s[27]=[n("LCTT",-1)])]),_:1}),s[30]||(s[30]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:t(()=>[...s[28]||(s[28]=[n("Linux中国",-1)])]),_:1}),s[31]||(s[31]=n(" 荣誉推出",-1))])])}const q=l(u,[["render",d]]);export{m as __pageData,q as default};
