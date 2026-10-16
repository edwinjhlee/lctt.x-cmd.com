import{_ as t,a0 as o,w as c,s as r,ao as i,I as n,x as a,a1 as e,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"Mock 在 Python 单元测试中的使用 | LCTT x X-CMD","titleTemplate":false,"description":"Mock 在 Python 单元测试中的使用 | LCTT (201608) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Mock 在 Python 单元测试中的使用 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Mock 在 Python 单元测试中的使用 | LCTT (201608) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201608/20160618 An Introduction to Mocking in Python","title":"Mock 在 Python 单元测试中的使用","tag":"201608","desc":""},"relativePath":"201608/20160618 An Introduction to Mocking in Python.md","filePath":"[post].md"}'),d={name:"201608/20160618 An Introduction to Mocking in Python.md"};function m(h,s,u,k,f,g){const p=o("Link");return c(),r("div",null,[s[49]||(s[49]=i('<h1 id="mock-在-python-单元测试中的使用" tabindex="-1">Mock 在 Python 单元测试中的使用 <a class="header-anchor" href="#mock-在-python-单元测试中的使用" aria-label="Permalink to “Mock 在 Python 单元测试中的使用”">​</a></h1><p>本文讲述的是 Python 中 Mock 的使用。</p><h3 id="如何执行单元测试而不用考验你的耐心" tabindex="-1">如何执行单元测试而不用考验你的耐心 <a class="header-anchor" href="#如何执行单元测试而不用考验你的耐心" aria-label="Permalink to “如何执行单元测试而不用考验你的耐心”">​</a></h3><p>很多时候，我们编写的软件会直接与那些被标记为“垃圾”的服务交互。用外行人的话说：服务对我们的应用程序很重要，但是我们想要的是交互，而不是那些不想要的副作用，这里的“不想要”是在自动化测试运行的语境中说的。例如：我们正在写一个社交 app，并且想要测试一下 &quot;发布到 Facebook&quot; 的新功能，但是不想每次运行测试集的时候真的发布到 Facebook。</p><p>Python 的 <code>unittest</code> 库包含了一个名为 <code>unittest.mock</code> 或者可以称之为依赖的子包，简称为 <code>mock</code> —— 其提供了极其强大和有用的方法，通过它们可以模拟（mock）并去除那些我们不希望的副作用。</p><p><img src="https://assets.toptal.io/uploads/blog/image/252/toptal-blog-image-1389090346415.png" alt=""></p>',6)),n("p",null,[n("em",null,[s[2]||(s[2]=a("注意：",-1)),s[3]||(s[3]=n("code",null,"mock",-1)),s[4]||(s[4]=a()),e(p,{href:"http://www.python.org/dev/peps/pep-0417/"},{default:l(()=>[...s[0]||(s[0]=[a("最近被收录",-1)])]),_:1}),s[5]||(s[5]=a("到了 Python 3.3 的标准库中；先前发布的版本必须通过 ",-1)),e(p,{href:"https://pypi.python.org/pypi/mock"},{default:l(()=>[...s[1]||(s[1]=[a("PyPI",-1)])]),_:1}),s[6]||(s[6]=a(" 下载 Mock 库。",-1))])]),s[50]||(s[50]=i(`<h3 id="恐惧系统调用" tabindex="-1">恐惧系统调用 <a class="header-anchor" href="#恐惧系统调用" aria-label="Permalink to “恐惧系统调用”">​</a></h3><p>再举另一个例子，我们在接下来的部分都会用到它，这是就是<strong>系统调用</strong>。不难发现，这些系统调用都是主要的模拟对象：无论你是正在写一个可以弹出 CD 驱动器的脚本，还是一个用来删除 /tmp 下过期的缓存文件的 Web 服务，或者一个绑定到 TCP 端口的 socket 服务器，这些调用都是在你的单元测试上下文中不希望产生的副作用。</p><p>作为一个开发者，你需要更关心你的库是否成功地调用了一个可以弹出 CD 的系统函数（使用了正确的参数等等），而不是切身经历 CD 托盘每次在测试执行的时候都打开了。（或者更糟糕的是，弹出了很多次，在一个单元测试运行期间多个测试都引用了弹出代码！）</p><p>同样，保持单元测试的效率和性能意味着需要让如此多的“缓慢代码”远离自动测试，比如文件系统和网络访问。</p><p>对于第一个例子来说，我们要从原始形式换成使用 <code>mock</code> 重构一个标准 Python 测试用例。我们会演示如何使用 mock 写一个测试用例，使我们的测试更加智能、快速，并展示更多关于我们软件的工作原理。</p><h3 id="一个简单的删除函数" tabindex="-1">一个简单的删除函数 <a class="header-anchor" href="#一个简单的删除函数" aria-label="Permalink to “一个简单的删除函数”">​</a></h3><p>我们都有过需要从文件系统中一遍又一遍的删除文件的时候，因此，让我们在 Python 中写一个可以使我们的脚本更加轻易完成此功能的函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def rm(filename):</span></span>
<span class="line"><span>    os.remove(filename)</span></span></code></pre></div><p>很明显，我们的 <code>rm</code> 方法此时无法提供比 <code>os.remove</code> 方法更多的相关功能，但我们可以在这里添加更多的功能，使我们的基础代码逐步改善。</p><p>让我们写一个传统的测试用例，即，没有使用 <code>mock</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from mymodule import rm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os.path</span></span>
<span class="line"><span>import tempfile</span></span>
<span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RmTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    tmpfilepath = os.path.join(tempfile.gettempdir(), &quot;tmp-testfile&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def setUp(self):</span></span>
<span class="line"><span>        with open(self.tmpfilepath, &quot;wb&quot;) as f:</span></span>
<span class="line"><span>            f.write(&quot;Delete me!&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_rm(self):</span></span>
<span class="line"><span>        # remove the file</span></span>
<span class="line"><span>        rm(self.tmpfilepath)</span></span>
<span class="line"><span>        # test that it was actually removed</span></span>
<span class="line"><span>        self.assertFalse(os.path.isfile(self.tmpfilepath), &quot;Failed to remove the file.&quot;)</span></span></code></pre></div><p>我们的测试用例相当简单，但是在它每次运行的时候，它都会创建一个临时文件并且随后删除。此外，我们没有办法测试我们的 <code>rm</code> 方法是否正确地将我们的参数向下传递给 <code>os.remove</code> 调用。我们可以基于以上的测试<em>认为</em>它做到了，但还有很多需要改进的地方。</p><h4 id="使用-mock-重构" tabindex="-1">使用 Mock 重构 <a class="header-anchor" href="#使用-mock-重构" aria-label="Permalink to “使用 Mock 重构”">​</a></h4><p>让我们使用 mock 重构我们的测试用例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from mymodule import rm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import mock</span></span>
<span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RmTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os&#39;)</span></span>
<span class="line"><span>    def test_rm(self, mock_os):</span></span>
<span class="line"><span>        rm(&quot;any path&quot;)</span></span>
<span class="line"><span>        # test that rm called os.remove with the right parameters</span></span>
<span class="line"><span>        mock_os.remove.assert_called_with(&quot;any path&quot;)</span></span></code></pre></div><p>使用这些重构，我们从根本上改变了测试用例的操作方式。现在，我们有一个可以用于验证其他功能的内部对象。</p><h5 id="潜在陷阱" tabindex="-1">潜在陷阱 <a class="header-anchor" href="#潜在陷阱" aria-label="Permalink to “潜在陷阱”">​</a></h5><p>第一件需要注意的事情就是，我们使用了 <code>mock.patch</code> 方法装饰器，用于模拟位于 <code>mymodule.os</code> 的对象，并且将 mock 注入到我们的测试用例方法。那么只是模拟 <code>os</code> 本身，而不是 <code>mymodule.os</code> 下 <code>os</code> 的引用（LCTT 译注：注意 <code>@mock.patch(&#39;mymodule.os&#39;)</code> 便是模拟 <code>mymodule.os</code> 下的 <code>os</code>），会不会更有意义呢？</p><p>当然，当涉及到导入和管理模块，Python 的用法就像蛇一样灵活。在运行时，<code>mymodule</code> 模块有它自己的被导入到本模块局部作用域的 <code>os</code>。因此，如果我们模拟 <code>os</code>，我们是看不到 mock 在 <code>mymodule</code> 模块中的模仿作用的。</p><p>这句话需要深刻地记住：</p><blockquote><p>模拟一个东西要看它用在何处，而不是来自哪里。</p></blockquote><p>如果你需要为 <code>myproject.app.MyElaborateClass</code> 模拟 <code>tempfile</code> 模块，你可能需要将 mock 用于 <code>myproject.app.tempfile</code>，而其他模块保持自己的导入。</p><p>先将那个陷阱放一边，让我们继续模拟。</p><h4 id="向-rm-中加入验证" tabindex="-1">向 ‘rm’ 中加入验证 <a class="header-anchor" href="#向-rm-中加入验证" aria-label="Permalink to “向 ‘rm’ 中加入验证”">​</a></h4><p>之前定义的 rm 方法相当的简单。在盲目地删除之前，我们倾向于验证一个路径是否存在，并验证其是否是一个文件。让我们重构 rm 使其变得更加智能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import os.path</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def rm(filename):</span></span>
<span class="line"><span>    if os.path.isfile(filename):</span></span>
<span class="line"><span>        os.remove(filename)</span></span></code></pre></div><p>很好。现在，让我们调整测试用例来保持测试的覆盖率。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from mymodule import rm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import mock</span></span>
<span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RmTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os.path&#39;)</span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os&#39;)</span></span>
<span class="line"><span>    def test_rm(self, mock_os, mock_path):</span></span>
<span class="line"><span>        # set up the mock</span></span>
<span class="line"><span>        mock_path.isfile.return_value = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        rm(&quot;any path&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # test that the remove call was NOT called.</span></span>
<span class="line"><span>        self.assertFalse(mock_os.remove.called, &quot;Failed to not remove the file if not present.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # make the file &#39;exist&#39;</span></span>
<span class="line"><span>        mock_path.isfile.return_value = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        rm(&quot;any path&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mock_os.remove.assert_called_with(&quot;any path&quot;)</span></span></code></pre></div><p>我们的测试用例完全改变了。现在我们可以在没有任何副作用的情况下核实并验证方法的内部功能。</p><h4 id="将文件删除作为服务" tabindex="-1">将文件删除作为服务 <a class="header-anchor" href="#将文件删除作为服务" aria-label="Permalink to “将文件删除作为服务”">​</a></h4><p>到目前为止，我们只是将 mock 应用在函数上，并没应用在需要传递参数的对象和实例的方法上。我们现在开始涵盖对象的方法。</p><p>首先，我们将 <code>rm</code> 方法重构成一个服务类。实际上将这样一个简单的函数转换成一个对象，在本质上这不是一个合理的需求，但它能够帮助我们了解 <code>mock</code> 的关键概念。让我们开始重构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import os.path</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RemovalService(object):</span></span>
<span class="line"><span>    &quot;&quot;&quot;A service for removing objects from the filesystem.&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def rm(filename):</span></span>
<span class="line"><span>        if os.path.isfile(filename):</span></span>
<span class="line"><span>            os.remove(filename)</span></span></code></pre></div><p>你会注意到我们的测试用例没有太大变化：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from mymodule import RemovalService</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import mock</span></span>
<span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RemovalServiceTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os.path&#39;)</span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os&#39;)</span></span>
<span class="line"><span>    def test_rm(self, mock_os, mock_path):</span></span>
<span class="line"><span>        # instantiate our service</span></span>
<span class="line"><span>        reference = RemovalService()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # set up the mock</span></span>
<span class="line"><span>        mock_path.isfile.return_value = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        reference.rm(&quot;any path&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # test that the remove call was NOT called.</span></span>
<span class="line"><span>        self.assertFalse(mock_os.remove.called, &quot;Failed to not remove the file if not present.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # make the file &#39;exist&#39;</span></span>
<span class="line"><span>        mock_path.isfile.return_value = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        reference.rm(&quot;any path&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mock_os.remove.assert_called_with(&quot;any path&quot;)</span></span></code></pre></div><p>很好，我们知道 <code>RemovalService</code> 会如预期般的工作。接下来让我们创建另一个服务，将 <code>RemovalService</code> 声明为它的一个依赖：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import os.path</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RemovalService(object):</span></span>
<span class="line"><span>    &quot;&quot;&quot;A service for removing objects from the filesystem.&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def rm(self, filename):</span></span>
<span class="line"><span>        if os.path.isfile(filename):</span></span>
<span class="line"><span>            os.remove(filename)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class UploadService(object):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, removal_service):</span></span>
<span class="line"><span>        self.removal_service = removal_service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def upload_complete(self, filename):</span></span>
<span class="line"><span>        self.removal_service.rm(filename)</span></span></code></pre></div><p>因为我们的测试覆盖了 <code>RemovalService</code>，因此我们不会对我们测试用例中 <code>UploadService</code> 的内部函数 <code>rm</code> 进行验证。相反，我们将调用 <code>UploadService</code> 的 <code>RemovalService.rm</code> 方法来进行简单测试（当然没有其他副作用），我们通过之前的测试用例便能知道它可以正确地工作。</p><p>这里有两种方法来实现测试：</p><ol><li>模拟 RemovalService.rm 方法本身。</li><li>在 UploadService 的构造函数中提供一个模拟实例。</li></ol><p>因为这两种方法都是单元测试中非常重要的方法，所以我们将同时对这两种方法进行回顾。</p><h5 id="方法-1-模拟实例的方法" tabindex="-1">方法 1：模拟实例的方法 <a class="header-anchor" href="#方法-1-模拟实例的方法" aria-label="Permalink to “方法 1：模拟实例的方法”">​</a></h5><p><code>mock</code> 库有一个特殊的方法装饰器，可以模拟对象实例的方法和属性，即 <code>@mock.patch.object decorator</code> 装饰器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from mymodule import RemovalService, UploadService</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import mock</span></span>
<span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RemovalServiceTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os.path&#39;)</span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os&#39;)</span></span>
<span class="line"><span>    def test_rm(self, mock_os, mock_path):</span></span>
<span class="line"><span>        # instantiate our service</span></span>
<span class="line"><span>        reference = RemovalService()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # set up the mock</span></span>
<span class="line"><span>        mock_path.isfile.return_value = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        reference.rm(&quot;any path&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # test that the remove call was NOT called.</span></span>
<span class="line"><span>        self.assertFalse(mock_os.remove.called, &quot;Failed to not remove the file if not present.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # make the file &#39;exist&#39;</span></span>
<span class="line"><span>        mock_path.isfile.return_value = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        reference.rm(&quot;any path&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mock_os.remove.assert_called_with(&quot;any path&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class UploadServiceTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @mock.patch.object(RemovalService, &#39;rm&#39;)</span></span>
<span class="line"><span>    def test_upload_complete(self, mock_rm):</span></span>
<span class="line"><span>        # build our dependencies</span></span>
<span class="line"><span>        removal_service = RemovalService()</span></span>
<span class="line"><span>        reference = UploadService(removal_service)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # call upload_complete, which should, in turn, call \`rm\`:</span></span>
<span class="line"><span>        reference.upload_complete(&quot;my uploaded file&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # check that it called the rm method of any RemovalService</span></span>
<span class="line"><span>        mock_rm.assert_called_with(&quot;my uploaded file&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # check that it called the rm method of _our_ removal_service</span></span>
<span class="line"><span>        removal_service.rm.assert_called_with(&quot;my uploaded file&quot;)</span></span></code></pre></div><p>非常棒！我们验证了 <code>UploadService</code> 成功调用了我们实例的 <code>rm</code> 方法。你是否注意到一些有趣的地方？这种修补机制（patching mechanism）实际上替换了我们测试用例中的所有 <code>RemovalService</code> 实例的 <code>rm</code> 方法。这意味着我们可以检查实例本身。如果你想要了解更多，可以试着在你模拟的代码下断点，以对这种修补机制的原理获得更好的认识。</p><h5 id="陷阱-装饰顺序" tabindex="-1">陷阱：装饰顺序 <a class="header-anchor" href="#陷阱-装饰顺序" aria-label="Permalink to “陷阱：装饰顺序”">​</a></h5>`,46)),n("p",null,[s[8]||(s[8]=a("当我们在测试方法中使用多个装饰器，其顺序是很重要的，并且很容易混乱。基本上，当装饰器被映射到方法参数时，",-1)),e(p,{href:"http://www.voidspace.org.uk/python/mock/patch.html#nesting-patch-decorators"},{default:l(()=>[...s[7]||(s[7]=[a("装饰器的工作顺序是反向的",-1)])]),_:1}),s[9]||(s[9]=a("。思考这个例子：",-1))]),s[51]||(s[51]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    @mock.patch(&#39;mymodule.sys&#39;)</span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os&#39;)</span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os.path&#39;)</span></span>
<span class="line"><span>    def test_something(self, mock_os_path, mock_os, mock_sys):</span></span>
<span class="line"><span>        pass</span></span></code></pre></div>`,1)),n("p",null,[s[11]||(s[11]=a("注意到我们的参数和装饰器的顺序是反向匹配了吗？这部分是由 ",-1)),e(p,{href:"http://docs.python.org/2/reference/compound_stmts.html#function-definitions"},{default:l(()=>[...s[10]||(s[10]=[a("Python 的工作方式",-1)])]),_:1}),s[12]||(s[12]=a("所导致的。这里是使用多个装饰器的情况下它们执行顺序的伪代码：",-1))]),s[52]||(s[52]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>patch_sys(patch_os(patch_os_path(test_something)))</span></span></code></pre></div><p>因为 <code>sys</code> 补丁位于最外层，所以它最晚执行，使得它成为实际测试方法参数的最后一个参数。请特别注意这一点，并且在运行你的测试用例时，使用调试器来保证正确的参数以正确的顺序注入。</p><h5 id="方法-2-创建-mock-实例" tabindex="-1">方法 2：创建 Mock 实例 <a class="header-anchor" href="#方法-2-创建-mock-实例" aria-label="Permalink to “方法 2：创建 Mock 实例”">​</a></h5><p>我们可以使用构造函数为 <code>UploadService</code> 提供一个 Mock 实例，而不是模拟特定的实例方法。我更推荐方法 1，因为它更加精确，但在多数情况，方法 2 或许更加有效和必要。让我们再次重构测试用例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from mymodule import RemovalService, UploadService</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import mock</span></span>
<span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RemovalServiceTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os.path&#39;)</span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os&#39;)</span></span>
<span class="line"><span>    def test_rm(self, mock_os, mock_path):</span></span>
<span class="line"><span>        # instantiate our service</span></span>
<span class="line"><span>        reference = RemovalService()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # set up the mock</span></span>
<span class="line"><span>        mock_path.isfile.return_value = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        reference.rm(&quot;any path&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # test that the remove call was NOT called.</span></span>
<span class="line"><span>        self.assertFalse(mock_os.remove.called, &quot;Failed to not remove the file if not present.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # make the file &#39;exist&#39;</span></span>
<span class="line"><span>        mock_path.isfile.return_value = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        reference.rm(&quot;any path&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mock_os.remove.assert_called_with(&quot;any path&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class UploadServiceTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_upload_complete(self, mock_rm):</span></span>
<span class="line"><span>        # build our dependencies</span></span>
<span class="line"><span>        mock_removal_service = mock.create_autospec(RemovalService)</span></span>
<span class="line"><span>        reference = UploadService(mock_removal_service)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # call upload_complete, which should, in turn, call \`rm\`:</span></span>
<span class="line"><span>        reference.upload_complete(&quot;my uploaded file&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # test that it called the rm method</span></span>
<span class="line"><span>        mock_removal_service.rm.assert_called_with(&quot;my uploaded file&quot;)</span></span></code></pre></div><p>在这个例子中，我们甚至不需要修补任何功能，只需为 <code>RemovalService</code> 类创建一个 auto-spec，然后将实例注入到我们的 <code>UploadService</code> 以验证功能。</p><p><code>mock.create_autospec</code> 方法为类提供了一个同等功能实例。实际上来说，这意味着在使用返回的实例进行交互的时候，如果使用了非法的方式将会引发异常。更具体地说，如果一个方法被调用时的参数数目不正确，将引发一个异常。这对于重构来说是非常重要。当一个库发生变化的时候，中断测试正是所期望的。如果不使用 auto-spec，尽管底层的实现已经被破坏，我们的测试仍然会通过。</p><h5 id="陷阱-mock-mock-和-mock-magicmock-类" tabindex="-1">陷阱：mock.Mock 和 mock.MagicMock 类 <a class="header-anchor" href="#陷阱-mock-mock-和-mock-magicmock-类" aria-label="Permalink to “陷阱：mock.Mock 和 mock.MagicMock 类”">​</a></h5>`,8)),n("p",null,[s[15]||(s[15]=n("code",null,"mock",-1)),s[16]||(s[16]=a(" 库包含了两个重要的类 ",-1)),e(p,{href:"http://www.voidspace.org.uk/python/mock/mock.html"},{default:l(()=>[...s[13]||(s[13]=[a("mock.Mock",-1)])]),_:1}),s[17]||(s[17]=a(" 和 ",-1)),e(p,{href:"http://www.voidspace.org.uk/python/mock/magicmock.html#magic-mock"},{default:l(()=>[...s[14]||(s[14]=[a("mock.MagicMock",-1)])]),_:1}),s[18]||(s[18]=a("，大多数内部函数都是建立在这两个类之上的。当在选择使用 ",-1)),s[19]||(s[19]=n("code",null,"mock.Mock",-1)),s[20]||(s[20]=a(" 实例、",-1)),s[21]||(s[21]=n("code",null,"mock.MagicMock",-1)),s[22]||(s[22]=a(" 实例还是 auto-spec 的时候，通常倾向于选择使用 auto-spec，因为对于未来的变化，它更能保持测试的健全。这是因为 ",-1)),s[23]||(s[23]=n("code",null,"mock.Mock",-1)),s[24]||(s[24]=a(" 和 ",-1)),s[25]||(s[25]=n("code",null,"mock.MagicMock",-1)),s[26]||(s[26]=a(" 会无视底层的 API，接受所有的方法调用和属性赋值。比如下面这个用例：",-1))]),s[53]||(s[53]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Target(object):</span></span>
<span class="line"><span>    def apply(value):</span></span>
<span class="line"><span>        return value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def method(target, value):</span></span>
<span class="line"><span>    return target.apply(value)</span></span></code></pre></div><p>我们可以像下面这样使用 mock.Mock 实例进行测试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class MethodTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_method(self):</span></span>
<span class="line"><span>        target = mock.Mock()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        method(target, &quot;value&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        target.apply.assert_called_with(&quot;value&quot;)</span></span></code></pre></div><p>这个逻辑看似合理，但如果我们修改 <code>Target.apply</code> 方法接受更多参数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Target(object):</span></span>
<span class="line"><span>    def apply(value, are_you_sure):</span></span>
<span class="line"><span>        if are_you_sure:</span></span>
<span class="line"><span>            return value</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            return None</span></span></code></pre></div><p>重新运行你的测试，你会发现它仍能通过。这是因为它不是针对你的 API 创建的。这就是为什么你总是应该使用 <code>create_autospec</code> 方法，并且在使用 <code>@patch</code>和 <code>@patch.object</code> 装饰方法时使用 <code>autospec</code> 参数。</p><h3 id="现实例子-模拟-facebook-api-调用" tabindex="-1">现实例子：模拟 Facebook API 调用 <a class="header-anchor" href="#现实例子-模拟-facebook-api-调用" aria-label="Permalink to “现实例子：模拟 Facebook API 调用”">​</a></h3><p>作为这篇文章的结束，我们写一个更加适用的现实例子，一个在介绍中提及的功能：发布消息到 Facebook。我将写一个不错的包装类及其对应的测试用例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import facebook</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class SimpleFacebook(object):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, oauth_token):</span></span>
<span class="line"><span>        self.graph = facebook.GraphAPI(oauth_token)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def post_message(self, message):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Posts a message to the Facebook wall.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.graph.put_object(&quot;me&quot;, &quot;feed&quot;, message=message)</span></span></code></pre></div><p>这是我们的测试用例，它可以检查我们发布的消息,而不是真正地发布消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import facebook</span></span>
<span class="line"><span>import simple_facebook</span></span>
<span class="line"><span>import mock</span></span>
<span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class SimpleFacebookTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @mock.patch.object(facebook.GraphAPI, &#39;put_object&#39;, autospec=True)</span></span>
<span class="line"><span>    def test_post_message(self, mock_put_object):</span></span>
<span class="line"><span>        sf = simple_facebook.SimpleFacebook(&quot;fake oauth token&quot;)</span></span>
<span class="line"><span>        sf.post_message(&quot;Hello World!&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # verify</span></span>
<span class="line"><span>        mock_put_object.assert_called_with(message=&quot;Hello World!&quot;)</span></span></code></pre></div><p>正如我们所看到的，在 Python 中，通过 mock，我们可以非常容易地动手写一个更加智能的测试用例。</p><h3 id="python-mock-总结" tabindex="-1">Python Mock 总结 <a class="header-anchor" href="#python-mock-总结" aria-label="Permalink to “Python Mock 总结”">​</a></h3>`,13)),n("p",null,[s[29]||(s[29]=a("即使对它的使用还有点不太熟悉，对",-1)),e(p,{href:"http://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters"},{default:l(()=>[...s[27]||(s[27]=[a("单元测试",-1)])]),_:1}),s[30]||(s[30]=a("来说，Python 的 ",-1)),s[31]||(s[31]=n("code",null,"mock",-1)),s[32]||(s[32]=a(" 库可以说是一个规则改变者。我们已经演示了常见的用例来了解了 ",-1)),s[33]||(s[33]=n("code",null,"mock",-1)),s[34]||(s[34]=a(" 在单元测试中的使用，希望这篇文章能够帮助 ",-1)),e(p,{href:"http://www.toptal.com/python"},{default:l(()=>[...s[28]||(s[28]=[a("Python 开发者",-1)])]),_:1}),s[35]||(s[35]=a("克服初期的障碍，写出优秀、经受过考验的代码。",-1))]),s[54]||(s[54]=n("hr",null,null,-1)),n("p",null,[s[37]||(s[37]=a("via: ",-1)),e(p,{href:"https://www.toptal.com/python/an-introduction-to-mocking-in-python"},{default:l(()=>[...s[36]||(s[36]=[a("https://www.toptal.com/python/an-introduction-to-mocking-in-python",-1)])]),_:1})]),n("p",null,[s[41]||(s[41]=a("作者：",-1)),e(p,{href:"http://www.slviki.com/"},{default:l(()=>[...s[38]||(s[38]=[a("NAFTULI TZVI KAY",-1)])]),_:1}),s[42]||(s[42]=a(" 译者：",-1)),e(p,{href:"https://github.com/cposture"},{default:l(()=>[...s[39]||(s[39]=[a("cposture",-1)])]),_:1}),s[43]||(s[43]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[40]||(s[40]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[46]||(s[46]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[44]||(s[44]=[a("LCTT",-1)])]),_:1}),s[47]||(s[47]=a(" 原创翻译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[45]||(s[45]=[a("Linux中国",-1)])]),_:1}),s[48]||(s[48]=a(" 荣誉推出",-1))])])}const _=t(d,[["render",m]]);export{y as __pageData,_ as default};
