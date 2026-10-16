import{_ as t,a0 as o,w as c,s as r,ao as i,I as n,x as a,a1 as e,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"Mock 在 Python 單元測試中的使用 | LCTT x X-CMD","titleTemplate":false,"description":"Mock 在 Python 單元測試中的使用 | LCTT (201608) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Mock 在 Python 單元測試中的使用 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Mock 在 Python 單元測試中的使用 | LCTT (201608) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201608/20160618 An Introduction to Mocking in Python","title":"Mock 在 Python 單元測試中的使用","tag":"201608","desc":""},"relativePath":"201608/20160618 An Introduction to Mocking in Python.md","filePath":"[post].md"}'),d={name:"201608/20160618 An Introduction to Mocking in Python.md"};function m(h,s,u,k,f,g){const p=o("Link");return c(),r("div",null,[s[49]||(s[49]=i('<h1 id="mock-在-python-單元測試中的使用" tabindex="-1">Mock 在 Python 單元測試中的使用 <a class="header-anchor" href="#mock-在-python-單元測試中的使用" aria-label="Permalink to “Mock 在 Python 單元測試中的使用”">​</a></h1><p>本文講述的是 Python 中 Mock 的使用。</p><h3 id="如何執行單元測試而不用考驗你的耐心" tabindex="-1">如何執行單元測試而不用考驗你的耐心 <a class="header-anchor" href="#如何執行單元測試而不用考驗你的耐心" aria-label="Permalink to “如何執行單元測試而不用考驗你的耐心”">​</a></h3><p>很多時候，我們編寫的軟件會直接與那些被標記為“垃圾”的服務交互。用外行人的話説：服務對我們的應用程序很重要，但是我們想要的是交互，而不是那些不想要的副作用，這裏的“不想要”是在自動化測試運行的語境中説的。例如：我們正在寫一個社交 app，並且想要測試一下 &quot;發佈到 Facebook&quot; 的新功能，但是不想每次運行測試集的時候真的發佈到 Facebook。</p><p>Python 的 <code>unittest</code> 庫包含了一個名為 <code>unittest.mock</code> 或者可以稱之為依賴的子包，簡稱為 <code>mock</code> —— 其提供了極其強大和有用的方法，通過它們可以模擬（mock）並去除那些我們不希望的副作用。</p><p><img src="https://assets.toptal.io/uploads/blog/image/252/toptal-blog-image-1389090346415.png" alt=""></p>',6)),n("p",null,[n("em",null,[s[2]||(s[2]=a("注意：",-1)),s[3]||(s[3]=n("code",null,"mock",-1)),s[4]||(s[4]=a()),e(p,{href:"http://www.python.org/dev/peps/pep-0417/"},{default:l(()=>[...s[0]||(s[0]=[a("最近被收錄",-1)])]),_:1}),s[5]||(s[5]=a("到了 Python 3.3 的標準庫中；先前發佈的版本必須通過 ",-1)),e(p,{href:"https://pypi.python.org/pypi/mock"},{default:l(()=>[...s[1]||(s[1]=[a("PyPI",-1)])]),_:1}),s[6]||(s[6]=a(" 下載 Mock 庫。",-1))])]),s[50]||(s[50]=i(`<h3 id="恐懼系統調用" tabindex="-1">恐懼系統調用 <a class="header-anchor" href="#恐懼系統調用" aria-label="Permalink to “恐懼系統調用”">​</a></h3><p>再舉另一個例子，我們在接下來的部分都會用到它，這是就是<strong>系統調用</strong>。不難發現，這些系統調用都是主要的模擬對象：無論你是正在寫一個可以彈出 CD 驅動器的腳本，還是一個用來刪除 /tmp 下過期的緩存文件的 Web 服務，或者一個綁定到 TCP 端口的 socket 服務器，這些調用都是在你的單元測試上下文中不希望產生的副作用。</p><p>作為一個開發者，你需要更關心你的庫是否成功地調用了一個可以彈出 CD 的系統函數（使用了正確的參數等等），而不是切身經歷 CD 托盤每次在測試執行的時候都打開了。（或者更糟糕的是，彈出了很多次，在一個單元測試運行期間多個測試都引用了彈出代碼！）</p><p>同樣，保持單元測試的效率和性能意味着需要讓如此多的“緩慢代碼”遠離自動測試，比如文件系統和網絡訪問。</p><p>對於第一個例子來説，我們要從原始形式換成使用 <code>mock</code> 重構一個標準 Python 測試用例。我們會演示如何使用 mock 寫一個測試用例，使我們的測試更加智能、快速，並展示更多關於我們軟件的工作原理。</p><h3 id="一個簡單的刪除函數" tabindex="-1">一個簡單的刪除函數 <a class="header-anchor" href="#一個簡單的刪除函數" aria-label="Permalink to “一個簡單的刪除函數”">​</a></h3><p>我們都有過需要從文件系統中一遍又一遍的刪除文件的時候，因此，讓我們在 Python 中寫一個可以使我們的腳本更加輕易完成此功能的函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def rm(filename):</span></span>
<span class="line"><span>    os.remove(filename)</span></span></code></pre></div><p>很明顯，我們的 <code>rm</code> 方法此時無法提供比 <code>os.remove</code> 方法更多的相關功能，但我們可以在這裏添加更多的功能，使我們的基礎代碼逐步改善。</p><p>讓我們寫一個傳統的測試用例，即，沒有使用 <code>mock</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
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
<span class="line"><span>        self.assertFalse(os.path.isfile(self.tmpfilepath), &quot;Failed to remove the file.&quot;)</span></span></code></pre></div><p>我們的測試用例相當簡單，但是在它每次運行的時候，它都會創建一個臨時文件並且隨後刪除。此外，我們沒有辦法測試我們的 <code>rm</code> 方法是否正確地將我們的參數向下傳遞給 <code>os.remove</code> 調用。我們可以基於以上的測試<em>認為</em>它做到了，但還有很多需要改進的地方。</p><h4 id="使用-mock-重構" tabindex="-1">使用 Mock 重構 <a class="header-anchor" href="#使用-mock-重構" aria-label="Permalink to “使用 Mock 重構”">​</a></h4><p>讓我們使用 mock 重構我們的測試用例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
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
<span class="line"><span>        mock_os.remove.assert_called_with(&quot;any path&quot;)</span></span></code></pre></div><p>使用這些重構，我們從根本上改變了測試用例的操作方式。現在，我們有一個可以用於驗證其他功能的內部對象。</p><h5 id="潛在陷阱" tabindex="-1">潛在陷阱 <a class="header-anchor" href="#潛在陷阱" aria-label="Permalink to “潛在陷阱”">​</a></h5><p>第一件需要注意的事情就是，我們使用了 <code>mock.patch</code> 方法裝飾器，用於模擬位於 <code>mymodule.os</code> 的對象，並且將 mock 注入到我們的測試用例方法。那麼只是模擬 <code>os</code> 本身，而不是 <code>mymodule.os</code> 下 <code>os</code> 的引用（LCTT 譯註：注意 <code>@mock.patch(&#39;mymodule.os&#39;)</code> 便是模擬 <code>mymodule.os</code> 下的 <code>os</code>），會不會更有意義呢？</p><p>當然，當涉及到導入和管理模組，Python 的用法就像蛇一樣靈活。在運行時，<code>mymodule</code> 模組有它自己的被導入到本模組局部作用域的 <code>os</code>。因此，如果我們模擬 <code>os</code>，我們是看不到 mock 在 <code>mymodule</code> 模組中的模仿作用的。</p><p>這句話需要深刻地記住：</p><blockquote><p>模擬一個東西要看它用在何處，而不是來自哪裏。</p></blockquote><p>如果你需要為 <code>myproject.app.MyElaborateClass</code> 模擬 <code>tempfile</code> 模組，你可能需要將 mock 用於 <code>myproject.app.tempfile</code>，而其他模組保持自己的導入。</p><p>先將那個陷阱放一邊，讓我們繼續模擬。</p><h4 id="向-rm-中加入驗證" tabindex="-1">向 ‘rm’ 中加入驗證 <a class="header-anchor" href="#向-rm-中加入驗證" aria-label="Permalink to “向 ‘rm’ 中加入驗證”">​</a></h4><p>之前定義的 rm 方法相當的簡單。在盲目地刪除之前，我們傾向於驗證一個路徑是否存在，並驗證其是否是一個文件。讓我們重構 rm 使其變得更加智能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import os.path</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def rm(filename):</span></span>
<span class="line"><span>    if os.path.isfile(filename):</span></span>
<span class="line"><span>        os.remove(filename)</span></span></code></pre></div><p>很好。現在，讓我們調整測試用例來保持測試的覆蓋率。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
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
<span class="line"><span>        mock_os.remove.assert_called_with(&quot;any path&quot;)</span></span></code></pre></div><p>我們的測試用例完全改變了。現在我們可以在沒有任何副作用的情況下核實並驗證方法的內部功能。</p><h4 id="將文件刪除作為服務" tabindex="-1">將文件刪除作為服務 <a class="header-anchor" href="#將文件刪除作為服務" aria-label="Permalink to “將文件刪除作為服務”">​</a></h4><p>到目前為止，我們只是將 mock 應用在函數上，並沒應用在需要傳遞參數的對象和實例的方法上。我們現在開始涵蓋對象的方法。</p><p>首先，我們將 <code>rm</code> 方法重構成一個服務類。實際上將這樣一個簡單的函數轉換成一個對象，在本質上這不是一個合理的需求，但它能夠幫助我們瞭解 <code>mock</code> 的關鍵概念。讓我們開始重構：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
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
<span class="line"><span>            os.remove(filename)</span></span></code></pre></div><p>你會注意到我們的測試用例沒有太大變化：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
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
<span class="line"><span>        mock_os.remove.assert_called_with(&quot;any path&quot;)</span></span></code></pre></div><p>很好，我們知道 <code>RemovalService</code> 會如預期般的工作。接下來讓我們創建另一個服務，將 <code>RemovalService</code> 聲明為它的一個依賴：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
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
<span class="line"><span>        self.removal_service.rm(filename)</span></span></code></pre></div><p>因為我們的測試覆蓋了 <code>RemovalService</code>，因此我們不會對我們測試用例中 <code>UploadService</code> 的內部函數 <code>rm</code> 進行驗證。相反，我們將調用 <code>UploadService</code> 的 <code>RemovalService.rm</code> 方法來進行簡單測試（當然沒有其他副作用），我們通過之前的測試用例便能知道它可以正確地工作。</p><p>這裏有兩種方法來實現測試：</p><ol><li>模擬 RemovalService.rm 方法本身。</li><li>在 UploadService 的構造函數中提供一個模擬實例。</li></ol><p>因為這兩種方法都是單元測試中非常重要的方法，所以我們將同時對這兩種方法進行回顧。</p><h5 id="方法-1-模擬實例的方法" tabindex="-1">方法 1：模擬實例的方法 <a class="header-anchor" href="#方法-1-模擬實例的方法" aria-label="Permalink to “方法 1：模擬實例的方法”">​</a></h5><p><code>mock</code> 庫有一個特殊的方法裝飾器，可以模擬對象實例的方法和屬性，即 <code>@mock.patch.object decorator</code> 裝飾器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
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
<span class="line"><span>        removal_service.rm.assert_called_with(&quot;my uploaded file&quot;)</span></span></code></pre></div><p>非常棒！我們驗證了 <code>UploadService</code> 成功調用了我們實例的 <code>rm</code> 方法。你是否注意到一些有趣的地方？這種修補機制（patching mechanism）實際上替換了我們測試用例中的所有 <code>RemovalService</code> 實例的 <code>rm</code> 方法。這意味着我們可以檢查實例本身。如果你想要了解更多，可以試着在你模擬的代碼下斷點，以對這種修補機制的原理獲得更好的認識。</p><h5 id="陷阱-裝飾順序" tabindex="-1">陷阱：裝飾順序 <a class="header-anchor" href="#陷阱-裝飾順序" aria-label="Permalink to “陷阱：裝飾順序”">​</a></h5>`,46)),n("p",null,[s[8]||(s[8]=a("當我們在測試方法中使用多個裝飾器，其順序是很重要的，並且很容易混亂。基本上，當裝飾器被映射到方法參數時，",-1)),e(p,{href:"http://www.voidspace.org.uk/python/mock/patch.html#nesting-patch-decorators"},{default:l(()=>[...s[7]||(s[7]=[a("裝飾器的工作順序是反向的",-1)])]),_:1}),s[9]||(s[9]=a("。思考這個例子：",-1))]),s[51]||(s[51]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    @mock.patch(&#39;mymodule.sys&#39;)</span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os&#39;)</span></span>
<span class="line"><span>    @mock.patch(&#39;mymodule.os.path&#39;)</span></span>
<span class="line"><span>    def test_something(self, mock_os_path, mock_os, mock_sys):</span></span>
<span class="line"><span>        pass</span></span></code></pre></div>`,1)),n("p",null,[s[11]||(s[11]=a("注意到我們的參數和裝飾器的順序是反向匹配了嗎？這部分是由 ",-1)),e(p,{href:"http://docs.python.org/2/reference/compound_stmts.html#function-definitions"},{default:l(()=>[...s[10]||(s[10]=[a("Python 的工作方式",-1)])]),_:1}),s[12]||(s[12]=a("所導致的。這裏是使用多個裝飾器的情況下它們執行順序的偽代碼：",-1))]),s[52]||(s[52]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>patch_sys(patch_os(patch_os_path(test_something)))</span></span></code></pre></div><p>因為 <code>sys</code> 補丁位於最外層，所以它最晚執行，使得它成為實際測試方法參數的最後一個參數。請特別注意這一點，並且在運行你的測試用例時，使用調試器來保證正確的參數以正確的順序注入。</p><h5 id="方法-2-創建-mock-實例" tabindex="-1">方法 2：創建 Mock 實例 <a class="header-anchor" href="#方法-2-創建-mock-實例" aria-label="Permalink to “方法 2：創建 Mock 實例”">​</a></h5><p>我們可以使用構造函數為 <code>UploadService</code> 提供一個 Mock 實例，而不是模擬特定的實例方法。我更推薦方法 1，因為它更加精確，但在多數情況，方法 2 或許更加有效和必要。讓我們再次重構測試用例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
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
<span class="line"><span>        mock_removal_service.rm.assert_called_with(&quot;my uploaded file&quot;)</span></span></code></pre></div><p>在這個例子中，我們甚至不需要修補任何功能，只需為 <code>RemovalService</code> 類創建一個 auto-spec，然後將實例注入到我們的 <code>UploadService</code> 以驗證功能。</p><p><code>mock.create_autospec</code> 方法為類提供了一個同等功能實例。實際上來説，這意味着在使用返回的實例進行交互的時候，如果使用了非法的方式將會引發異常。更具體地説，如果一個方法被調用時的參數數目不正確，將引發一個異常。這對於重構來説是非常重要。當一個庫發生變化的時候，中斷測試正是所期望的。如果不使用 auto-spec，儘管底層的實現已經被破壞，我們的測試仍然會通過。</p><h5 id="陷阱-mock-mock-和-mock-magicmock-類" tabindex="-1">陷阱：mock.Mock 和 mock.MagicMock 類 <a class="header-anchor" href="#陷阱-mock-mock-和-mock-magicmock-類" aria-label="Permalink to “陷阱：mock.Mock 和 mock.MagicMock 類”">​</a></h5>`,8)),n("p",null,[s[15]||(s[15]=n("code",null,"mock",-1)),s[16]||(s[16]=a(" 庫包含了兩個重要的類 ",-1)),e(p,{href:"http://www.voidspace.org.uk/python/mock/mock.html"},{default:l(()=>[...s[13]||(s[13]=[a("mock.Mock",-1)])]),_:1}),s[17]||(s[17]=a(" 和 ",-1)),e(p,{href:"http://www.voidspace.org.uk/python/mock/magicmock.html#magic-mock"},{default:l(()=>[...s[14]||(s[14]=[a("mock.MagicMock",-1)])]),_:1}),s[18]||(s[18]=a("，大多數內部函數都是建立在這兩個類之上的。當在選擇使用 ",-1)),s[19]||(s[19]=n("code",null,"mock.Mock",-1)),s[20]||(s[20]=a(" 實例、",-1)),s[21]||(s[21]=n("code",null,"mock.MagicMock",-1)),s[22]||(s[22]=a(" 實例還是 auto-spec 的時候，通常傾向於選擇使用 auto-spec，因為對於未來的變化，它更能保持測試的健全。這是因為 ",-1)),s[23]||(s[23]=n("code",null,"mock.Mock",-1)),s[24]||(s[24]=a(" 和 ",-1)),s[25]||(s[25]=n("code",null,"mock.MagicMock",-1)),s[26]||(s[26]=a(" 會無視底層的 API，接受所有的方法調用和屬性賦值。比如下面這個用例：",-1))]),s[53]||(s[53]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Target(object):</span></span>
<span class="line"><span>    def apply(value):</span></span>
<span class="line"><span>        return value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def method(target, value):</span></span>
<span class="line"><span>    return target.apply(value)</span></span></code></pre></div><p>我們可以像下面這樣使用 mock.Mock 實例進行測試：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class MethodTestCase(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test_method(self):</span></span>
<span class="line"><span>        target = mock.Mock()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        method(target, &quot;value&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        target.apply.assert_called_with(&quot;value&quot;)</span></span></code></pre></div><p>這個邏輯看似合理，但如果我們修改 <code>Target.apply</code> 方法接受更多參數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Target(object):</span></span>
<span class="line"><span>    def apply(value, are_you_sure):</span></span>
<span class="line"><span>        if are_you_sure:</span></span>
<span class="line"><span>            return value</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            return None</span></span></code></pre></div><p>重新運行你的測試，你會發現它仍能通過。這是因為它不是針對你的 API 創建的。這就是為什麼你總是應該使用 <code>create_autospec</code> 方法，並且在使用 <code>@patch</code>和 <code>@patch.object</code> 裝飾方法時使用 <code>autospec</code> 參數。</p><h3 id="現實例子-模擬-facebook-api-調用" tabindex="-1">現實例子：模擬 Facebook API 調用 <a class="header-anchor" href="#現實例子-模擬-facebook-api-調用" aria-label="Permalink to “現實例子：模擬 Facebook API 調用”">​</a></h3><p>作為這篇文章的結束，我們寫一個更加適用的現實例子，一個在介紹中提及的功能：發佈消息到 Facebook。我將寫一個不錯的包裝類及其對應的測試用例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import facebook</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class SimpleFacebook(object):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, oauth_token):</span></span>
<span class="line"><span>        self.graph = facebook.GraphAPI(oauth_token)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def post_message(self, message):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Posts a message to the Facebook wall.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.graph.put_object(&quot;me&quot;, &quot;feed&quot;, message=message)</span></span></code></pre></div><p>這是我們的測試用例，它可以檢查我們發佈的消息,而不是真正地發佈消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import facebook</span></span>
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
<span class="line"><span>        mock_put_object.assert_called_with(message=&quot;Hello World!&quot;)</span></span></code></pre></div><p>正如我們所看到的，在 Python 中，通過 mock，我們可以非常容易地動手寫一個更加智能的測試用例。</p><h3 id="python-mock-總結" tabindex="-1">Python Mock 總結 <a class="header-anchor" href="#python-mock-總結" aria-label="Permalink to “Python Mock 總結”">​</a></h3>`,13)),n("p",null,[s[29]||(s[29]=a("即使對它的使用還有點不太熟悉，對",-1)),e(p,{href:"http://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters"},{default:l(()=>[...s[27]||(s[27]=[a("單元測試",-1)])]),_:1}),s[30]||(s[30]=a("來説，Python 的 ",-1)),s[31]||(s[31]=n("code",null,"mock",-1)),s[32]||(s[32]=a(" 庫可以説是一個規則改變者。我們已經演示了常見的用例來了解了 ",-1)),s[33]||(s[33]=n("code",null,"mock",-1)),s[34]||(s[34]=a(" 在單元測試中的使用，希望這篇文章能夠幫助 ",-1)),e(p,{href:"http://www.toptal.com/python"},{default:l(()=>[...s[28]||(s[28]=[a("Python 開發者",-1)])]),_:1}),s[35]||(s[35]=a("克服初期的障礙，寫出優秀、經受過考驗的代碼。",-1))]),s[54]||(s[54]=n("hr",null,null,-1)),n("p",null,[s[37]||(s[37]=a("via: ",-1)),e(p,{href:"https://www.toptal.com/python/an-introduction-to-mocking-in-python"},{default:l(()=>[...s[36]||(s[36]=[a("https://www.toptal.com/python/an-introduction-to-mocking-in-python",-1)])]),_:1})]),n("p",null,[s[41]||(s[41]=a("作者：",-1)),e(p,{href:"http://www.slviki.com/"},{default:l(()=>[...s[38]||(s[38]=[a("NAFTULI TZVI KAY",-1)])]),_:1}),s[42]||(s[42]=a(" 譯者：",-1)),e(p,{href:"https://github.com/cposture"},{default:l(()=>[...s[39]||(s[39]=[a("cposture",-1)])]),_:1}),s[43]||(s[43]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[40]||(s[40]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[46]||(s[46]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[44]||(s[44]=[a("LCTT",-1)])]),_:1}),s[47]||(s[47]=a(" 原創翻譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[45]||(s[45]=[a("Linux中國",-1)])]),_:1}),s[48]||(s[48]=a(" 榮譽推出",-1))])])}const _=t(d,[["render",m]]);export{y as __pageData,_ as default};
