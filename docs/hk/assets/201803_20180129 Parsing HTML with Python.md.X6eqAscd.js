import{_ as l,a0 as o,w as d,s as g,ao as t,I as a,x as n,a1 as p,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"如何用 Python 解析 HTML | LCTT x X-CMD","titleTemplate":false,"description":"如何用 Python 解析 HTML | LCTT (201803) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用 Python 解析 HTML | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用 Python 解析 HTML | LCTT (201803) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201803/20180129 Parsing HTML with Python","title":"如何用 Python 解析 HTML","tag":"201803","desc":""},"relativePath":"201803/20180129 Parsing HTML with Python.md","filePath":"[post].md"}'),r={name:"201803/20180129 Parsing HTML with Python.md"};function c(u,s,m,h,f,k){const e=o("Link");return d(),g("div",null,[s[28]||(s[28]=t('<h1 id="如何用-python-解析-html" tabindex="-1">如何用 Python 解析 HTML <a class="header-anchor" href="#如何用-python-解析-html" aria-label="Permalink to “如何用 Python 解析 HTML”">​</a></h1><p>用一些簡單的腳本，可以很容易地清理文檔和其它大量的 HTML 文件。但是首先你需要解析它們。 <img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/bus_html_code.png?itok=VjUmGsnl" alt=""></p><p>圖片由 Jason Baker 為 Opensource.com 所作。</p><p>作為 Scribus 文檔團隊的長期成員，我要隨時瞭解最新的源代碼更新，以便對文檔進行更新和補充。 我最近在剛升級到 Fedora 27 系統的計算機上使用 Subversion 進行檢出操作時，對於下載該文檔所需要的時間我感到很驚訝，文檔由 HTML 頁面和相關圖像組成。 我恐怕該項目的文檔看起來比項目本身大得多，並且懷疑其中的一些內容是“殭屍”文檔——不再使用的 HTML 文件以及 HTML 中無法訪問到的圖像。</p><p>我決定為自己創建一個項目來解決這個問題。 一種方法是搜索未使用的現有圖像文件。 如果我可以掃描所有 HTML 文件中的圖像引用，然後將該列表與實際圖像文件進行比較，那麼我可能會看到不匹配的文件。</p><p>這是一個典型的圖像標籤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;img src=&quot;images/edit_shapes.png&quot; ALT=&quot;Edit examples&quot; ALIGN=left&gt;</span></span></code></pre></div>',7)),a("p",null,[s[1]||(s[1]=n("我對 ",-1)),s[2]||(s[2]=a("code",null,"src=",-1)),s[3]||(s[3]=n(" 之後的第一組引號之間的部分很感興趣。 在尋找了一些解決方案後，我找到一個名為 ",-1)),p(e,{href:"https://www.crummy.com/software/BeautifulSoup/"},{default:i(()=>[...s[0]||(s[0]=[n("BeautifulSoup",-1)])]),_:1}),s[4]||(s[4]=n(" 的 Python 模組。 腳本的核心部分如下所示：",-1))]),s[29]||(s[29]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>soup = BeautifulSoup(all_text, &#39;html.parser&#39;)</span></span>
<span class="line"><span>match = soup.findAll(&quot;img&quot;)</span></span>
<span class="line"><span>if len(match) &gt; 0:</span></span>
<span class="line"><span>    for m in match:</span></span>
<span class="line"><span>        imagelist.append(str(m))</span></span></code></pre></div><p>我們可以使用這個 <code>findAll</code> 方法來挖出圖片標籤。 這是一小部分輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;img src=&quot;images/pdf-form-ht3.png&quot;/&gt;&lt;img src=&quot;images/pdf-form-ht4.png&quot;/&gt;&lt;img src=&quot;images/pdf-form-ht5.png&quot;/&gt;&lt;img src=&quot;images/pdf-form-ht6.png&quot;/&gt;&lt;img align=&quot;middle&quot; alt=&quot;GSview - Advanced Options Panel&quot; src=&quot;images/gsadv1.png&quot; title=&quot;GSview - Advanced Options Panel&quot;/&gt;&lt;img align=&quot;middle&quot; alt=&quot;Scribus External Tools Preferences&quot; src=&quot;images/gsadv2.png&quot; title=&quot;Scribus External Tools Preferences&quot;/&gt;</span></span></code></pre></div>`,3)),a("p",null,[s[6]||(s[6]=n("到現在為止還挺好。我原以為下一步就可以搞定了，但是當我在腳本中嘗試了一些字符串方法時，它返回了有關標記的錯誤而不是字符串的錯誤。 我將輸出保存到一個文件中，並在 ",-1)),p(e,{href:"https://www.kde.org/applications/utilities/kwrite/"},{default:i(()=>[...s[5]||(s[5]=[n("KWrite",-1)])]),_:1}),s[7]||(s[7]=n(" 中進行編輯。 KWrite 的一個好處是你可以使用正則表達式（regex）來做“查找和替換”操作，所以我可以用 ",-1)),s[8]||(s[8]=a("code",null,"\\n<img",-1)),s[9]||(s[9]=n(" 替換 ",-1)),s[10]||(s[10]=a("code",null,"<img",-1)),s[11]||(s[11]=n("，這樣可以看得更清楚。 KWrite 的另一個好處是，如果你用正則表達式做了一個不明智的選擇，你還可以撤消。",-1))]),s[30]||(s[30]=t(`<p>但我認為，肯定有比這更好的東西，所以我轉而使用正則表達式，或者更具體地説 Python 的 <code>re</code> 模組。 這個新腳本的相關部分如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>match = re.findall(r&#39;src=&quot;(.*)/&gt;&#39;, all_text)</span></span>
<span class="line"><span>if len(match)&gt;0:</span></span>
<span class="line"><span>    for m in match:</span></span>
<span class="line"><span>        imagelist.append(m)</span></span></code></pre></div><p>它的一小部分輸出如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>images/cmcanvas.png&quot; title=&quot;Context Menu for the document canvas&quot; alt=&quot;Context Menu for the document canvas&quot; /&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;br images/eps-imp1.png&quot; title=&quot;EPS preview in a file dialog&quot; alt=&quot;EPS preview in a file dialog&quot; images/eps-imp5.png&quot; title=&quot;Colors imported from an EPS file&quot; alt=&quot;Colors imported from an EPS file&quot; images/eps-imp4.png&quot; title=&quot;EPS font substitution&quot; alt=&quot;EPS font substitution&quot; images/eps-imp2.png&quot; title=&quot;EPS import progress&quot; alt=&quot;EPS import progress&quot; images/eps-imp3.png&quot; title=&quot;Bitmap conversion failure&quot; alt=&quot;Bitmap conversion failure&quot;</span></span></code></pre></div><p>乍一看，它看起來與上面的輸出類似，並且附帶有去除圖像的標籤部分的好處，但是有令人費解的是還夾雜着表格標籤和其他內容。 我認為這涉及到這個正則表達式 <code>src=&quot;(.*)/&gt;</code>，這被稱為<em>貪婪</em>，意味着它不一定停止在遇到 <code>/&gt;</code> 的第一個實例。我應該補充一點，我也嘗試過 <code>src=&quot;(.*)&quot;</code>，這真的沒有什麼更好的效果，我不是一個正則表達式專家（只是做了這個），找了各種方法來改進這一點但是並沒什麼用。</p><p>做了一系列的事情之後，甚至嘗試了 Perl 的 <code>HTML::Parser</code> 模組，最終我試圖將這與我為 Scribus 編寫的一些腳本進行比較，這些腳本逐個字符的分析文本內容，然後採取一些行動。 為了最終目的，我終於想出了所有這些方法，並且完全不需要正則表達式或 HTML 解析器。 讓我們回到展示的那個 <code>img</code> 標籤的例子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;img src=&quot;images/edit_shapes.png&quot; ALT=&quot;Edit examples&quot; ALIGN=left&gt;</span></span></code></pre></div><p>我決定回到 <code>src=</code> 這一塊。 一種方法是等待 <code>s</code> 出現，然後看下一個字符是否是 <code>r</code>，下一個是 <code>c</code>，下一個是否 <code>=</code>。 如果是這樣，那就匹配上了！ 那麼兩個雙引號之間的內容就是我所需要的。 這種方法的問題在於需要連續識別上面這樣的結構。 一種查看代表一行 HTML 文本的字符串的方法是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for c in all_text:</span></span></code></pre></div><p>但是這個邏輯太亂了，以至於不能持續匹配到前面的 <code>c</code>，還有之前的字符，更之前的字符，更更之前的字符。</p><p>最後，我決定專注於 <code>=</code> 並使用索引方法，以便我可以輕鬆地引用字符串中的任何先前或將來的字符。 這裏是搜索部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    index = 3</span></span>
<span class="line"><span>    while index &lt; linelength:</span></span>
<span class="line"><span>        if (all_text[index] == &#39;=&#39;):</span></span>
<span class="line"><span>            if (all_text[index-3] == &#39;s&#39;) and (all_text[index-2] == &#39;r&#39;) and (all_text[index-1] == &#39;c&#39;):</span></span>
<span class="line"><span>                imagefound(all_text, imagelist, index)</span></span>
<span class="line"><span>                index += 1</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                index += 1</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            index += 1</span></span></code></pre></div><p>我用第四個字符開始搜索（索引從 0 開始），所以我在下面沒有出現索引錯誤，並且實際上，在每一行的第四個字符之前不會有等號。 第一個測試是看字符串中是否出現了 <code>=</code>，如果沒有，我們就會前進。 如果我們確實看到一個等號，那麼我們會看前三個字符是否是 <code>s</code>、<code>r</code> 和 <code>c</code>。 如果全都匹配了，就調用函數 <code>imagefound</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def imagefound(all_text, imagelist, index):</span></span>
<span class="line"><span>    end = 0</span></span>
<span class="line"><span>    index += 2</span></span>
<span class="line"><span>    newimage = &#39;&#39;</span></span>
<span class="line"><span>    while end == 0:</span></span>
<span class="line"><span>        if (all_text[index] != &#39;&quot;&#39;):</span></span>
<span class="line"><span>            newimage = newimage + all_text[index]</span></span>
<span class="line"><span>            index += 1</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            newimage = newimage + &#39;\\n&#39;</span></span>
<span class="line"><span>            imagelist.append(newimage)</span></span>
<span class="line"><span>            end = 1</span></span>
<span class="line"><span>            return</span></span></code></pre></div><p>我們給函數發送當前索引，它代表着 <code>=</code>。 我們知道下一個字符將會是 <code>&quot;</code>，所以我們跳過兩個字符，並開始向名為 <code>newimage</code> 的控制字符串添加字符，直到我們發現下一個 <code>&quot;</code>，此時我們完成了一次匹配。 我們將字符串加一個換行符（<code>\\n</code>）添加到列表 <code>imagelist</code> 中並返回（<code>return</code>），請記住，在剩餘的這個 HTML 字符串中可能會有更多圖片標籤，所以我們馬上回到搜索循環中。</p><p>以下是我們的輸出現在的樣子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>images/text-frame-link.png</span></span>
<span class="line"><span>images/text-frame-unlink.png</span></span>
<span class="line"><span>images/gimpoptions1.png</span></span>
<span class="line"><span>images/gimpoptions3.png</span></span>
<span class="line"><span>images/gimpoptions2.png</span></span>
<span class="line"><span>images/fontpref3.png</span></span>
<span class="line"><span>images/font-subst.png</span></span>
<span class="line"><span>images/fontpref2.png</span></span>
<span class="line"><span>images/fontpref1.png</span></span>
<span class="line"><span>images/dtp-studio.png</span></span></code></pre></div><p>啊，乾淨多了，而這隻花費幾秒鐘的時間。 我本可以將索引前移 7 步來剪切 <code>images/</code> 部分，但我更願意把這個部分保存下來，以確保我沒有剪切掉圖像文件名的第一個字母，這很容易用 KWrite 編輯成功 —— 你甚至不需要正則表達式。 做完這些並保存文件後，下一步就是運行我編寫的另一個腳本 <code>sortlist.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8  -*-</span></span>
<span class="line"><span># sortlist.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>imagelist = []</span></span>
<span class="line"><span>for line in open(&#39;/tmp/imagelist_parse4.txt&#39;).xreadlines():</span></span>
<span class="line"><span>    imagelist.append(line)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>imagelist.sort()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>outfile = open(&#39;/tmp/imagelist_parse4_sorted.txt&#39;, &#39;w&#39;)</span></span>
<span class="line"><span>outfile.writelines(imagelist)</span></span>
<span class="line"><span>outfile.close()</span></span></code></pre></div><p>這會讀取文件內容，並存儲為列表，對其排序，然後另存為另一個文件。 之後，我可以做到以下幾點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ls /home/gregp/development/Scribus15x/doc/en/images/*.png &gt; &#39;/tmp/actual_images.txt&#39;</span></span></code></pre></div><p>然後我需要在該文件上運行 <code>sortlist.py</code>，因為 <code>ls</code> 方法的排序與 Python 不同。 我原本可以在這些文件上運行比較腳本，但我更願意以可視方式進行操作。 最後，我成功找到了 42 個圖像，這些圖像沒有來自文檔的 HTML 引用。</p><p>這是我的完整解析腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8  -*-</span></span>
<span class="line"><span># parseimg4.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def imagefound(all_text, imagelist, index):</span></span>
<span class="line"><span>    end = 0</span></span>
<span class="line"><span>    index += 2</span></span>
<span class="line"><span>    newimage = &#39;&#39;</span></span>
<span class="line"><span>    while end == 0:</span></span>
<span class="line"><span>        if (all_text[index] != &#39;&quot;&#39;):</span></span>
<span class="line"><span>            newimage = newimage + all_text[index]</span></span>
<span class="line"><span>            index += 1</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            newimage = newimage + &#39;\\n&#39;</span></span>
<span class="line"><span>            imagelist.append(newimage)</span></span>
<span class="line"><span>            end = 1</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>htmlnames = []</span></span>
<span class="line"><span>imagelist = []</span></span>
<span class="line"><span>tempstring = &#39;&#39;</span></span>
<span class="line"><span>filenames = os.listdir(&#39;/home/gregp/development/Scribus15x/doc/en/&#39;)</span></span>
<span class="line"><span>for name in filenames:</span></span>
<span class="line"><span>    if name.endswith(&#39;.html&#39;):</span></span>
<span class="line"><span>        htmlnames.append(name)</span></span>
<span class="line"><span>#print htmlnames</span></span>
<span class="line"><span>for htmlfile in htmlnames:</span></span>
<span class="line"><span>    all_text = open(&#39;/home/gregp/development/Scribus15x/doc/en/&#39; + htmlfile).read()</span></span>
<span class="line"><span>    linelength = len(all_text)</span></span>
<span class="line"><span>    index = 3</span></span>
<span class="line"><span>    while index &lt; linelength:</span></span>
<span class="line"><span>        if (all_text[index] == &#39;=&#39;):</span></span>
<span class="line"><span>            if (all_text[index-3] == &#39;s&#39;) and (all_text[index-2] == &#39;r&#39;) and</span></span>
<span class="line"><span>(all_text[index-1] == &#39;c&#39;):</span></span>
<span class="line"><span>                imagefound(all_text, imagelist, index)</span></span>
<span class="line"><span>                index += 1</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                index += 1</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            index += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>outfile = open(&#39;/tmp/imagelist_parse4.txt&#39;, &#39;w&#39;)</span></span>
<span class="line"><span>outfile.writelines(imagelist)</span></span>
<span class="line"><span>outfile.close()</span></span>
<span class="line"><span>imageno = len(imagelist)</span></span>
<span class="line"><span>print str(imageno) + &quot; images were found and saved&quot;</span></span></code></pre></div><p>腳本名稱為 <code>parseimg4.py</code>，這並不能真實反映我陸續編寫的腳本數量（包括微調的和大改的以及丟棄並重新開始寫的）。 請注意，我已經對這些目錄和文件名進行了硬編碼，但是很容易變得通用化，讓用户輸入這些信息。 同樣，因為它們是工作腳本，所以我將輸出發送到 <code>/tmp</code> 目錄，所以一旦重新啓動系統，它們就會消失。</p><p>這不是故事的結尾，因為下一個問題是：殭屍 HTML 文件怎麼辦？ 任何未使用的文件都可能會引用圖像，不能被前面的方法所找出。 我們有一個 <code>menu.xml</code> 文件作為聯機手冊的目錄，但我還需要考慮 TOC（LCTT 譯註：TOC 是 table of contents 的縮寫）中列出的某些文件可能引用了不在 TOC 中的文件，是的，我確實找到了一些這樣的文件。</p><p>最後我可以説，這是一個比圖像搜索更簡單的任務，而且開發的過程對我有很大的幫助。</p><h3 id="關於作者" tabindex="-1">關於作者 <a class="header-anchor" href="#關於作者" aria-label="Permalink to “關於作者”">​</a></h3>`,28)),a("p",null,[p(e,{href:"https://opensource.com/users/greg-p"},{default:i(()=>[...s[12]||(s[12]=[a("img",{src:"https://opensource.com/sites/default/files/styles/profile_pictures/public/20150529_gregp.jpg?itok=nv02g6PV",alt:""},null,-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("Greg Pittman 是 Kentucky 州 Louisville 市的一名退休的神經學家，從二十世紀六十年代的 Fortran IV 語言開始長期以來對計算機和編程有着濃厚的興趣。 當 Linux 和開源軟件出現的時候，Greg 深受啓發，去學習更多知識，並實現最終貢獻的承諾。 他是 Scribus 團隊的成員。",-1)),p(e,{href:"https://opensource.com/users/greg-p"},{default:i(()=>[...s[13]||(s[13]=[n("更多關於我",-1)])]),_:1})]),s[31]||(s[31]=a("hr",null,null,-1)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/18/1/parsing-html-python"},{default:i(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/18/1/parsing-html-python",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/greg-p"},{default:i(()=>[...s[17]||(s[17]=[n("Greg Pittman",-1)])]),_:1}),s[21]||(s[21]=n(" 譯者：",-1)),p(e,{href:"https://github.com/Flowsnow"},{default:i(()=>[...s[18]||(s[18]=[n("Flowsnow",-1)])]),_:1}),s[22]||(s[22]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[19]||(s[19]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[25]||(s[25]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[23]||(s[23]=[n("LCTT",-1)])]),_:1}),s[26]||(s[26]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[24]||(s[24]=[n("Linux中國",-1)])]),_:1}),s[27]||(s[27]=n(" 榮譽推出",-1))])])}const y=l(r,[["render",c]]);export{q as __pageData,y as default};
