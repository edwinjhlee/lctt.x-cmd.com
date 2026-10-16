import{_ as l,a0 as o,w as d,s as g,ao as t,I as a,x as n,a1 as p,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"如何用 Python 解析 HTML | LCTT x X-CMD","titleTemplate":false,"description":"如何用 Python 解析 HTML | LCTT (201803) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用 Python 解析 HTML | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用 Python 解析 HTML | LCTT (201803) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201803/20180129 Parsing HTML with Python","title":"如何用 Python 解析 HTML","tag":"201803","desc":""},"relativePath":"201803/20180129 Parsing HTML with Python.md","filePath":"[post].md"}'),r={name:"201803/20180129 Parsing HTML with Python.md"};function c(u,s,m,h,f,k){const e=o("Link");return d(),g("div",null,[s[28]||(s[28]=t('<h1 id="如何用-python-解析-html" tabindex="-1">如何用 Python 解析 HTML <a class="header-anchor" href="#如何用-python-解析-html" aria-label="Permalink to “如何用 Python 解析 HTML”">​</a></h1><p>用一些简单的脚本，可以很容易地清理文档和其它大量的 HTML 文件。但是首先你需要解析它们。 <img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/bus_html_code.png?itok=VjUmGsnl" alt=""></p><p>图片由 Jason Baker 为 Opensource.com 所作。</p><p>作为 Scribus 文档团队的长期成员，我要随时了解最新的源代码更新，以便对文档进行更新和补充。 我最近在刚升级到 Fedora 27 系统的计算机上使用 Subversion 进行检出操作时，对于下载该文档所需要的时间我感到很惊讶，文档由 HTML 页面和相关图像组成。 我恐怕该项目的文档看起来比项目本身大得多，并且怀疑其中的一些内容是“僵尸”文档——不再使用的 HTML 文件以及 HTML 中无法访问到的图像。</p><p>我决定为自己创建一个项目来解决这个问题。 一种方法是搜索未使用的现有图像文件。 如果我可以扫描所有 HTML 文件中的图像引用，然后将该列表与实际图像文件进行比较，那么我可能会看到不匹配的文件。</p><p>这是一个典型的图像标签：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;img src=&quot;images/edit_shapes.png&quot; ALT=&quot;Edit examples&quot; ALIGN=left&gt;</span></span></code></pre></div>',7)),a("p",null,[s[1]||(s[1]=n("我对 ",-1)),s[2]||(s[2]=a("code",null,"src=",-1)),s[3]||(s[3]=n(" 之后的第一组引号之间的部分很感兴趣。 在寻找了一些解决方案后，我找到一个名为 ",-1)),p(e,{href:"https://www.crummy.com/software/BeautifulSoup/"},{default:i(()=>[...s[0]||(s[0]=[n("BeautifulSoup",-1)])]),_:1}),s[4]||(s[4]=n(" 的 Python 模块。 脚本的核心部分如下所示：",-1))]),s[29]||(s[29]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>soup = BeautifulSoup(all_text, &#39;html.parser&#39;)</span></span>
<span class="line"><span>match = soup.findAll(&quot;img&quot;)</span></span>
<span class="line"><span>if len(match) &gt; 0:</span></span>
<span class="line"><span>    for m in match:</span></span>
<span class="line"><span>        imagelist.append(str(m))</span></span></code></pre></div><p>我们可以使用这个 <code>findAll</code> 方法来挖出图片标签。 这是一小部分输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;img src=&quot;images/pdf-form-ht3.png&quot;/&gt;&lt;img src=&quot;images/pdf-form-ht4.png&quot;/&gt;&lt;img src=&quot;images/pdf-form-ht5.png&quot;/&gt;&lt;img src=&quot;images/pdf-form-ht6.png&quot;/&gt;&lt;img align=&quot;middle&quot; alt=&quot;GSview - Advanced Options Panel&quot; src=&quot;images/gsadv1.png&quot; title=&quot;GSview - Advanced Options Panel&quot;/&gt;&lt;img align=&quot;middle&quot; alt=&quot;Scribus External Tools Preferences&quot; src=&quot;images/gsadv2.png&quot; title=&quot;Scribus External Tools Preferences&quot;/&gt;</span></span></code></pre></div>`,3)),a("p",null,[s[6]||(s[6]=n("到现在为止还挺好。我原以为下一步就可以搞定了，但是当我在脚本中尝试了一些字符串方法时，它返回了有关标记的错误而不是字符串的错误。 我将输出保存到一个文件中，并在 ",-1)),p(e,{href:"https://www.kde.org/applications/utilities/kwrite/"},{default:i(()=>[...s[5]||(s[5]=[n("KWrite",-1)])]),_:1}),s[7]||(s[7]=n(" 中进行编辑。 KWrite 的一个好处是你可以使用正则表达式（regex）来做“查找和替换”操作，所以我可以用 ",-1)),s[8]||(s[8]=a("code",null,"\\n<img",-1)),s[9]||(s[9]=n(" 替换 ",-1)),s[10]||(s[10]=a("code",null,"<img",-1)),s[11]||(s[11]=n("，这样可以看得更清楚。 KWrite 的另一个好处是，如果你用正则表达式做了一个不明智的选择，你还可以撤消。",-1))]),s[30]||(s[30]=t(`<p>但我认为，肯定有比这更好的东西，所以我转而使用正则表达式，或者更具体地说 Python 的 <code>re</code> 模块。 这个新脚本的相关部分如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>match = re.findall(r&#39;src=&quot;(.*)/&gt;&#39;, all_text)</span></span>
<span class="line"><span>if len(match)&gt;0:</span></span>
<span class="line"><span>    for m in match:</span></span>
<span class="line"><span>        imagelist.append(m)</span></span></code></pre></div><p>它的一小部分输出如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>images/cmcanvas.png&quot; title=&quot;Context Menu for the document canvas&quot; alt=&quot;Context Menu for the document canvas&quot; /&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;br images/eps-imp1.png&quot; title=&quot;EPS preview in a file dialog&quot; alt=&quot;EPS preview in a file dialog&quot; images/eps-imp5.png&quot; title=&quot;Colors imported from an EPS file&quot; alt=&quot;Colors imported from an EPS file&quot; images/eps-imp4.png&quot; title=&quot;EPS font substitution&quot; alt=&quot;EPS font substitution&quot; images/eps-imp2.png&quot; title=&quot;EPS import progress&quot; alt=&quot;EPS import progress&quot; images/eps-imp3.png&quot; title=&quot;Bitmap conversion failure&quot; alt=&quot;Bitmap conversion failure&quot;</span></span></code></pre></div><p>乍一看，它看起来与上面的输出类似，并且附带有去除图像的标签部分的好处，但是有令人费解的是还夹杂着表格标签和其他内容。 我认为这涉及到这个正则表达式 <code>src=&quot;(.*)/&gt;</code>，这被称为<em>贪婪</em>，意味着它不一定停止在遇到 <code>/&gt;</code> 的第一个实例。我应该补充一点，我也尝试过 <code>src=&quot;(.*)&quot;</code>，这真的没有什么更好的效果，我不是一个正则表达式专家（只是做了这个），找了各种方法来改进这一点但是并没什么用。</p><p>做了一系列的事情之后，甚至尝试了 Perl 的 <code>HTML::Parser</code> 模块，最终我试图将这与我为 Scribus 编写的一些脚本进行比较，这些脚本逐个字符的分析文本内容，然后采取一些行动。 为了最终目的，我终于想出了所有这些方法，并且完全不需要正则表达式或 HTML 解析器。 让我们回到展示的那个 <code>img</code> 标签的例子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;img src=&quot;images/edit_shapes.png&quot; ALT=&quot;Edit examples&quot; ALIGN=left&gt;</span></span></code></pre></div><p>我决定回到 <code>src=</code> 这一块。 一种方法是等待 <code>s</code> 出现，然后看下一个字符是否是 <code>r</code>，下一个是 <code>c</code>，下一个是否 <code>=</code>。 如果是这样，那就匹配上了！ 那么两个双引号之间的内容就是我所需要的。 这种方法的问题在于需要连续识别上面这样的结构。 一种查看代表一行 HTML 文本的字符串的方法是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for c in all_text:</span></span></code></pre></div><p>但是这个逻辑太乱了，以至于不能持续匹配到前面的 <code>c</code>，还有之前的字符，更之前的字符，更更之前的字符。</p><p>最后，我决定专注于 <code>=</code> 并使用索引方法，以便我可以轻松地引用字符串中的任何先前或将来的字符。 这里是搜索部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    index = 3</span></span>
<span class="line"><span>    while index &lt; linelength:</span></span>
<span class="line"><span>        if (all_text[index] == &#39;=&#39;):</span></span>
<span class="line"><span>            if (all_text[index-3] == &#39;s&#39;) and (all_text[index-2] == &#39;r&#39;) and (all_text[index-1] == &#39;c&#39;):</span></span>
<span class="line"><span>                imagefound(all_text, imagelist, index)</span></span>
<span class="line"><span>                index += 1</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                index += 1</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            index += 1</span></span></code></pre></div><p>我用第四个字符开始搜索（索引从 0 开始），所以我在下面没有出现索引错误，并且实际上，在每一行的第四个字符之前不会有等号。 第一个测试是看字符串中是否出现了 <code>=</code>，如果没有，我们就会前进。 如果我们确实看到一个等号，那么我们会看前三个字符是否是 <code>s</code>、<code>r</code> 和 <code>c</code>。 如果全都匹配了，就调用函数 <code>imagefound</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def imagefound(all_text, imagelist, index):</span></span>
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
<span class="line"><span>            return</span></span></code></pre></div><p>我们给函数发送当前索引，它代表着 <code>=</code>。 我们知道下一个字符将会是 <code>&quot;</code>，所以我们跳过两个字符，并开始向名为 <code>newimage</code> 的控制字符串添加字符，直到我们发现下一个 <code>&quot;</code>，此时我们完成了一次匹配。 我们将字符串加一个换行符（<code>\\n</code>）添加到列表 <code>imagelist</code> 中并返回（<code>return</code>），请记住，在剩余的这个 HTML 字符串中可能会有更多图片标签，所以我们马上回到搜索循环中。</p><p>以下是我们的输出现在的样子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>images/text-frame-link.png</span></span>
<span class="line"><span>images/text-frame-unlink.png</span></span>
<span class="line"><span>images/gimpoptions1.png</span></span>
<span class="line"><span>images/gimpoptions3.png</span></span>
<span class="line"><span>images/gimpoptions2.png</span></span>
<span class="line"><span>images/fontpref3.png</span></span>
<span class="line"><span>images/font-subst.png</span></span>
<span class="line"><span>images/fontpref2.png</span></span>
<span class="line"><span>images/fontpref1.png</span></span>
<span class="line"><span>images/dtp-studio.png</span></span></code></pre></div><p>啊，干净多了，而这只花费几秒钟的时间。 我本可以将索引前移 7 步来剪切 <code>images/</code> 部分，但我更愿意把这个部分保存下来，以确保我没有剪切掉图像文件名的第一个字母，这很容易用 KWrite 编辑成功 —— 你甚至不需要正则表达式。 做完这些并保存文件后，下一步就是运行我编写的另一个脚本 <code>sortlist.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
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
<span class="line"><span>outfile.close()</span></span></code></pre></div><p>这会读取文件内容，并存储为列表，对其排序，然后另存为另一个文件。 之后，我可以做到以下几点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ls /home/gregp/development/Scribus15x/doc/en/images/*.png &gt; &#39;/tmp/actual_images.txt&#39;</span></span></code></pre></div><p>然后我需要在该文件上运行 <code>sortlist.py</code>，因为 <code>ls</code> 方法的排序与 Python 不同。 我原本可以在这些文件上运行比较脚本，但我更愿意以可视方式进行操作。 最后，我成功找到了 42 个图像，这些图像没有来自文档的 HTML 引用。</p><p>这是我的完整解析脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
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
<span class="line"><span>print str(imageno) + &quot; images were found and saved&quot;</span></span></code></pre></div><p>脚本名称为 <code>parseimg4.py</code>，这并不能真实反映我陆续编写的脚本数量（包括微调的和大改的以及丢弃并重新开始写的）。 请注意，我已经对这些目录和文件名进行了硬编码，但是很容易变得通用化，让用户输入这些信息。 同样，因为它们是工作脚本，所以我将输出发送到 <code>/tmp</code> 目录，所以一旦重新启动系统，它们就会消失。</p><p>这不是故事的结尾，因为下一个问题是：僵尸 HTML 文件怎么办？ 任何未使用的文件都可能会引用图像，不能被前面的方法所找出。 我们有一个 <code>menu.xml</code> 文件作为联机手册的目录，但我还需要考虑 TOC（LCTT 译注：TOC 是 table of contents 的缩写）中列出的某些文件可能引用了不在 TOC 中的文件，是的，我确实找到了一些这样的文件。</p><p>最后我可以说，这是一个比图像搜索更简单的任务，而且开发的过程对我有很大的帮助。</p><h3 id="关于作者" tabindex="-1">关于作者 <a class="header-anchor" href="#关于作者" aria-label="Permalink to “关于作者”">​</a></h3>`,28)),a("p",null,[p(e,{href:"https://opensource.com/users/greg-p"},{default:i(()=>[...s[12]||(s[12]=[a("img",{src:"https://opensource.com/sites/default/files/styles/profile_pictures/public/20150529_gregp.jpg?itok=nv02g6PV",alt:""},null,-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("Greg Pittman 是 Kentucky 州 Louisville 市的一名退休的神经学家，从二十世纪六十年代的 Fortran IV 语言开始长期以来对计算机和编程有着浓厚的兴趣。 当 Linux 和开源软件出现的时候，Greg 深受启发，去学习更多知识，并实现最终贡献的承诺。 他是 Scribus 团队的成员。",-1)),p(e,{href:"https://opensource.com/users/greg-p"},{default:i(()=>[...s[13]||(s[13]=[n("更多关于我",-1)])]),_:1})]),s[31]||(s[31]=a("hr",null,null,-1)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/18/1/parsing-html-python"},{default:i(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/18/1/parsing-html-python",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/greg-p"},{default:i(()=>[...s[17]||(s[17]=[n("Greg Pittman",-1)])]),_:1}),s[21]||(s[21]=n(" 译者：",-1)),p(e,{href:"https://github.com/Flowsnow"},{default:i(()=>[...s[18]||(s[18]=[n("Flowsnow",-1)])]),_:1}),s[22]||(s[22]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[19]||(s[19]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[25]||(s[25]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[23]||(s[23]=[n("LCTT",-1)])]),_:1}),s[26]||(s[26]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[24]||(s[24]=[n("Linux中国",-1)])]),_:1}),s[27]||(s[27]=n(" 荣誉推出",-1))])])}const y=l(r,[["render",c]]);export{q as __pageData,y as default};
