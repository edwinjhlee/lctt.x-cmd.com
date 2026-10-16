import{_ as l,a0 as o,w as r,s as h,I as a,x as s,a1 as t,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"Linux 平台下 Python 脚本编程入门（二） | LCTT x X-CMD","titleTemplate":false,"description":"Linux 平台下 Python 脚本编程入门（二） | LCTT (201608) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 平台下 Python 脚本编程入门（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 平台下 Python 脚本编程入门（二） | LCTT (201608) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201608/20160601 Learn Python Control Flow and Loops to Write and Tune Shell Scripts – Part 2","title":"Linux 平台下 Python 脚本编程入门（二）","tag":"201608","desc":""},"relativePath":"201608/20160601 Learn Python Control Flow and Loops to Write and Tune Shell Scripts – Part 2.md","filePath":"[post].md"}'),d={name:"201608/20160601 Learn Python Control Flow and Loops to Write and Tune Shell Scripts – Part 2.md"};function u(c,n,g,m,y,b){const p=o("Link");return r(),h("div",null,[n[32]||(n[32]=a("h1",{id:"linux-平台下-python-脚本编程入门-二",tabindex:"-1"},[s("Linux 平台下 Python 脚本编程入门（二） "),a("a",{class:"header-anchor",href:"#linux-平台下-python-脚本编程入门-二","aria-label":"Permalink to “Linux 平台下 Python 脚本编程入门（二）”"},"​")],-1)),a("p",null,[n[1]||(n[1]=s("在“",-1)),t(p,{href:"http://www.tecmint.com/learn-python-programming-and-scripting-in-linux/"},{default:e(()=>[...n[0]||(n[0]=[s("Linux 平台下 Python 脚本编程入门",-1)])]),_:1}),n[2]||(n[2]=s("”系列之前的文章里，我们向你介绍了 Python 的简介，它的命令行 shell 和 IDLE（LCTT 译注：python 自带的一个 IDE）。我们也演示了如何进行算术运算、如何在变量中存储值、还有如何打印那些值到屏幕上。最后，我们通过一个练习示例讲解了面向对象编程中方法和属性概念。",-1))]),n[33]||(n[33]=i(`<p><img src="http://www.tecmint.com/wp-content/uploads/2016/06/Write-Shell-Scripts-in-Python-Programming.png" alt=""></p><p><em>在 Python 编程中写 Linux Shell 脚本</em></p><p>本篇中，我们会讨论控制流（根据用户输入的信息、计算的结果，或者一个变量的当前值选择不同的动作行为）和循环（自动重复执行任务），接着应用我们目前所学东西来编写一个简单的 shell 脚本，这个脚本会显示操作系统类型、主机名、内核版本、版本号和机器硬件架构。</p><p>这个例子尽管很基础，但是会帮助我们证明，比起使用一般的 bash 工具，我们通过发挥 Python 面向对象的特性来编写 shell 脚本会更简单些。</p><p>换句话说，我们想从这里出发：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># uname -snrvm</span></span></code></pre></div><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Check-Hostname-of-Linux.png" alt=""></p><p><em>检查 Linux 的主机名</em></p><p>到</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Check-Linux-Hostname-Using-Python-Script.png" alt=""></p><p><em>用 Python 脚本来检查 Linux 的主机名</em></p><p>或者</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Script-to-Check-Linux-System-Information.png" alt=""></p><p><em>用脚本检查 Linux 系统信息</em></p><p>看着不错，不是吗？那我们就挽起袖子，开干吧。</p><h3 id="python-中的控制流" tabindex="-1">Python 中的控制流 <a class="header-anchor" href="#python-中的控制流" aria-label="Permalink to “Python 中的控制流”">​</a></h3><p>如我们刚说那样，控制流允许我们根据一个给定的条件，选择不同的输出结果。在 Python 中最简单的实现就是一个 <code>if</code>/<code>else</code> 语句。</p><p>基本语法是这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if 条件:</span></span>
<span class="line"><span>    # 动作 1</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    # 动作 2</span></span></code></pre></div><p>当“条件”求值为真（true），下面的代码块就会被执行（<code># 动作 1</code>代表的部分）。否则，else 下面的代码就会运行。 “条件”可以是任何表达式，只要可以求得值为真或者假。</p><p>举个例子：</p><ol><li><code>1 &lt; 3</code> # 真</li><li><code>firstName == &quot;Gabriel&quot;</code> # 对 firstName 为 Gabriel 的人是真，对其他不叫 Gabriel 的人为假</li></ol><ul><li>在第一个例子中，我们比较了两个值，判断 1 是否小于 3。</li><li>在第二个例子中，我们比较了 firstName（一个变量）与字符串 “Gabriel”，看在当前执行的位置，firstName 的值是否等于该字符串。</li><li>条件和 else 表达式都必须跟着一个冒号（<code>:</code>）。</li><li><strong>缩进在 Python 中非常重要</strong>。同样缩进下的行被认为是相同的代码块。</li></ul>`,23)),a("p",null,[n[4]||(n[4]=s("请注意，",-1)),n[5]||(n[5]=a("code",null,"if",-1)),n[6]||(n[6]=s("/",-1)),n[7]||(n[7]=a("code",null,"else",-1)),n[8]||(n[8]=s(" 表达式只是 Python 中许多控制流工具的一个而已。我们先在这里了解以下，后面会用在我们的脚本中。你可以在",-1)),t(p,{href:"http://please%20note%20that%20the%20if%20/%20else%20statement%20is%20only%20one%20of%20the%20many%20control%20flow%20tools%20available%20in%20Python.%20We%20reviewed%20it%20here%20since%20we%20will%20use%20it%20in%20our%20script%20later.%20You%20can%20learn%20more%20about%20the%20rest%20of%20the%20tools%20in%20the%20official%20docs."},{default:e(()=>[...n[3]||(n[3]=[s("官方文档",-1)])]),_:1}),n[9]||(n[9]=s("中学到更多工具。",-1))]),n[34]||(n[34]=i(`<h3 id="python-中的循环" tabindex="-1">Python 中的循环 <a class="header-anchor" href="#python-中的循环" aria-label="Permalink to “Python 中的循环”">​</a></h3><p>简单来说，一个循环就是一组指令或者表达式序列，可以按顺序一直执行，只要条件为真，或者对列表里每个项目执行一一次。</p><p>Python 中最简单的循环，就是用 for 循环迭代一个给定列表的元素，或者对一个字符串从第一个字符开始到执行到最后一个字符结束。</p><p>基本语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for x in example:</span></span>
<span class="line"><span>	# do this</span></span></code></pre></div><p>这里的 example 可以是一个列表或者一个字符串。如果是列表，变量 x 就代表列表中每个元素；如果是字符串，x 就代表字符串中每个字符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; rockBands = []</span></span>
<span class="line"><span>&gt;&gt;&gt; rockBands.append(&quot;Roxette&quot;)</span></span>
<span class="line"><span>&gt;&gt;&gt; rockBands.append(&quot;Guns N&#39; Roses&quot;)</span></span>
<span class="line"><span>&gt;&gt;&gt; rockBands.append(&quot;U2&quot;)</span></span>
<span class="line"><span>&gt;&gt;&gt; for x in rockBands:</span></span>
<span class="line"><span>    	print(x)</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>&gt;&gt;&gt; firstName = &quot;Gabriel&quot;</span></span>
<span class="line"><span>&gt;&gt;&gt; for x in firstName:</span></span>
<span class="line"><span>    	print(x)</span></span></code></pre></div><p>上面例子的输出如下图所示：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Learn-Loops-in-Python.png" alt=""></p><p><em>学习 Python 中的循环</em></p><h3 id="python-模块" tabindex="-1">Python 模块 <a class="header-anchor" href="#python-模块" aria-label="Permalink to “Python 模块”">​</a></h3><p>很明显，必须有个办法将一系列的 Python 指令和表达式保存到文件里，然后在需要的时候取出来。</p><p>准确来说模块就是这样的。比如，os 模块提供了一个到操作系统的底层的接口，可以允许我们做许多通常在命令行下执行的操作。</p><p>没错，os 模块包含了许多可以用来调用的方法和属性，就如我们之前文章里讲解的那样。不过，我们需要使用 <code>import</code> 关键词导入（或者叫包含）模块到运行环境里来：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import os</span></span></code></pre></div><p>我们来打印出当前的工作目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; os.getcwd()</span></span></code></pre></div><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Learn-Python-Modules.png" alt=""></p><p><em>学习 Python 模块</em></p><p>现在，让我们把这些结合在一起（包括之前文章里讨论的概念），编写需要的脚本。</p><h3 id="python-脚本" tabindex="-1">Python 脚本 <a class="header-anchor" href="#python-脚本" aria-label="Permalink to “Python 脚本”">​</a></h3><p>以一段声明文字开始一个脚本是个不错的想法，它可以表明脚本的目的、发布所依据的许可证，以及一个列出做出的修改的修订历史。尽管这主要是个人喜好，但这会让我们的工作看起来比较专业。</p><p>这里有个脚本，可以输出这篇文章最前面展示的那样。脚本做了大量的注释，可以让大家可以理解发生了什么。</p><p>在进行下一步之前，花点时间来理解它。注意，我们是如何使用一个 <code>if</code>/<code>else</code> 结构，判断每个字段标题的长度是否比字段本身的值还大。</p><p>基于比较结果，我们用空字符去填充一个字段标题和下一个之间的空格。同时，我们使用一定数量的短线作为字段标题与其值之间的分割符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/python3</span></span>
<span class="line"><span># 如果你没有安装 Python 3 ，那么修改这一行为 #!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Script name: uname.py</span></span>
<span class="line"><span># Purpose: Illustrate Python&#39;s OOP capabilities to write shell scripts more easily</span></span>
<span class="line"><span># License: GPL v3 (http://www.gnu.org/licenses/gpl.html)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Copyright (C) 2016 Gabriel Alejandro Cánepa</span></span>
<span class="line"><span># ​Facebook / Skype / G+ / Twitter / Github: gacanepa</span></span>
<span class="line"><span># Email: gacanepa (at) gmail (dot) com</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This program is free software: you can redistribute it and/or modify</span></span>
<span class="line"><span># it under the terms of the GNU General Public License as published by</span></span>
<span class="line"><span># the Free Software Foundation, either version 3 of the License, or</span></span>
<span class="line"><span># (at your option) any later version.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This program is distributed in the hope that it will be useful,</span></span>
<span class="line"><span># but WITHOUT ANY WARRANTY; without even the implied warranty of</span></span>
<span class="line"><span># MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the</span></span>
<span class="line"><span># GNU General Public License for more details.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># You should have received a copy of the GNU General Public License</span></span>
<span class="line"><span># along with this program.  If not, see .</span></span>
<span class="line"><span></span></span>
<span class="line"><span># REVISION HISTORY</span></span>
<span class="line"><span># DATE   	  VERSION AUTHOR    	 CHANGE DESCRIPTION</span></span>
<span class="line"><span># ---------- ------- --------------</span></span>
<span class="line"><span># 2016-05-28 1.0     Gabriel Cánepa    Initial version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 导入 os 模块</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 将 os.uname() 的输出赋值给 systemInfo 变量</span></span>
<span class="line"><span>### os.uname() 会返回五个字符串元组（sysname, nodename, release, version, machine）</span></span>
<span class="line"><span>### 参见文档：https://docs.python.org/3.2/library/os.html#module-os</span></span>
<span class="line"><span>systemInfo = os.uname()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 这是一个固定的数组，用于描述脚本输出的字段标题</span></span>
<span class="line"><span>headers = [&quot;Operating system&quot;,&quot;Hostname&quot;,&quot;Release&quot;,&quot;Version&quot;,&quot;Machine&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 初始化索引值，用于定义每一步迭代中</span></span>
<span class="line"><span>### systemInfo 和字段标题的索引</span></span>
<span class="line"><span>index = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 字段标题变量的初始值</span></span>
<span class="line"><span>caption = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 值变量的初始值</span></span>
<span class="line"><span>values = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 分隔线变量的初始值</span></span>
<span class="line"><span>separators = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 开始循环</span></span>
<span class="line"><span>for item in systemInfo:</span></span>
<span class="line"><span>    if len(item) &lt; len(headers[index]):</span></span>
<span class="line"><span>   	 ### 一个包含横线的字符串，横线长度等于item[index] 或 headers[index]</span></span>
<span class="line"><span>   	 ### 要重复一个字符，用引号圈起来并用星号（*）乘以所需的重复次数 </span></span>
<span class="line"><span>   	 separators = separators + &quot;-&quot; * len(headers[index]) + &quot; &quot;</span></span>
<span class="line"><span>   	 caption = caption + headers[index] + &quot; &quot;</span></span>
<span class="line"><span>   	 values = values + systemInfo[index] + &quot; &quot; * (len(headers[index]) - len(item)) + &quot; &quot;</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>   	 separators = separators + &quot;-&quot; * len(item) + &quot; &quot;</span></span>
<span class="line"><span>   	 caption =  caption + headers[index] + &quot; &quot; * (len(item) - len(headers[index]) + 1)</span></span>
<span class="line"><span>   	 values = values + item + &quot; &quot;</span></span>
<span class="line"><span>    ### 索引加 1</span></span>
<span class="line"><span>    index = index + 1</span></span>
<span class="line"><span>### 终止循环</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 输出转换为大写的变量（字段标题）名</span></span>
<span class="line"><span>print(caption.upper())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 输出分隔线</span></span>
<span class="line"><span>print(separators)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输出值（systemInfo 中的项目）</span></span>
<span class="line"><span>print(values)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 步骤：</span></span>
<span class="line"><span>### 1) 保持该脚本为 uname.py （或任何你想要的名字）</span></span>
<span class="line"><span>### 并通过如下命令给其执行权限：</span></span>
<span class="line"><span>### chmod +x uname.py</span></span>
<span class="line"><span>### 2) 执行它；</span></span>
<span class="line"><span>### ./uname.py</span></span></code></pre></div><p>如果你已经按照上述描述将上面的脚本保存到一个文件里，并给文件增加了执行权限，那么运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># chmod +x uname.py</span></span>
<span class="line"><span># ./uname.py</span></span></code></pre></div><p>如果试图运行脚本时你得到了如下的错误：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-bash: ./uname.py: /usr/bin/python3: bad interpreter: No such file or directory</span></span></code></pre></div><p>这意味着你没有安装 Python3。如果那样的话，你要么安装 Python3 的包，要么替换解释器那行（如果如之前文章里概述的那样，跟着下面的步骤去更新 Python 执行文件的软连接，要特别注意并且非常小心）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/python3</span></span></code></pre></div><p>为</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/python</span></span></code></pre></div><p>这样会通过使用已经安装好的 Python 2 去执行该脚本。</p><p><strong>注意</strong>：该脚本在 Python 2.x 与 Pyton 3.x 上都测试成功过了。</p><p>尽管比较粗糙，你可以认为该脚本就是一个 Python 模块。这意味着你可以在 IDLE 中打开它（File → Open… → Select file)：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Open-Python-in-IDLE.png" alt=""></p><p><em>在 IDLE 中打开 Python</em></p><p>一个包含有文件内容的新窗口就会打开。然后执行 Run → Run module（或者按 F5）。脚本的输出就会在原始的 Shell 里显示出来：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Run-Python-Script.png" alt=""></p><p><em>执行 Python 脚本</em></p>`,42)),a("p",null,[n[12]||(n[12]=s("如果你想纯粹用 bash 写一个脚本，也获得同样的结果，你可能需要结合使用 ",-1)),t(p,{href:"http://www.tecmint.com/use-linux-awk-command-to-filter-text-string-in-files/"},{default:e(()=>[...n[10]||(n[10]=[s("awk",-1)])]),_:1}),n[13]||(n[13]=s("、",-1)),t(p,{href:"http://www.tecmint.com/sed-command-to-create-edit-and-manipulate-files-in-linux/"},{default:e(()=>[...n[11]||(n[11]=[s("sed",-1)])]),_:1}),n[14]||(n[14]=s("，并且借助复杂的方法来存储与获得列表中的元素（不要忘了使用 tr 命令将小写字母转为大写）。",-1))]),n[35]||(n[35]=a("p",null,"另外，在所有的 Linux 系统版本中都至少集成了一个 Python 版本（2.x 或者 3.x，或者两者都有）。你还需要依赖 shell 去完成同样的目标吗？那样你可能需要为不同的 shell 编写不同的版本。",-1)),n[36]||(n[36]=a("p",null,"这里演示了面向对象编程的特性，它会成为一个系统管理员得力的助手。",-1)),a("p",null,[n[16]||(n[16]=a("strong",null,"注意",-1)),n[17]||(n[17]=s("：你可以在我的 Github 仓库里获得 ",-1)),t(p,{href:"https://github.com/gacanepa/scripts/blob/master/python/uname.py"},{default:e(()=>[...n[15]||(n[15]=[s("这个 python 脚本",-1)])]),_:1}),n[18]||(n[18]=s("（或者其他的）。",-1))]),n[37]||(n[37]=a("h3",{id:"总结",tabindex:"-1"},[s("总结 "),a("a",{class:"header-anchor",href:"#总结","aria-label":"Permalink to “总结”"},"​")],-1)),n[38]||(n[38]=a("p",null,"这篇文章里，我们讲解了 Python 中控制流、循环/迭代、和模块的概念。我们也演示了如何利用 Python 中面向对象编程的方法和属性来简化复杂的 shell 脚本。",-1)),n[39]||(n[39]=a("p",null,"你有任何其他希望去验证的想法吗？开始吧，写出自己的 Python 脚本，如果有任何问题可以咨询我们。不必犹豫，在分割线下面留下评论，我们会尽快回复你。",-1)),n[40]||(n[40]=a("hr",null,null,-1)),a("p",null,[n[20]||(n[20]=s("via: ",-1)),t(p,{href:"http://www.tecmint.com/learn-python-programming-to-write-linux-shell-scripts/"},{default:e(()=>[...n[19]||(n[19]=[s("http://www.tecmint.com/learn-python-programming-to-write-linux-shell-scripts/",-1)])]),_:1})]),a("p",null,[n[24]||(n[24]=s("作者：",-1)),t(p,{href:"http://www.tecmint.com/author/gacanepa/"},{default:e(()=>[...n[21]||(n[21]=[s("Gabriel Cánepa",-1)])]),_:1}),n[25]||(n[25]=s(" 译者：",-1)),t(p,{href:"https://github.com/wi-cuckoo"},{default:e(()=>[...n[22]||(n[22]=[s("wi-cuckoo",-1)])]),_:1}),n[26]||(n[26]=s(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...n[23]||(n[23]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[29]||(n[29]=s("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[27]||(n[27]=[s("LCTT",-1)])]),_:1}),n[30]||(n[30]=s(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...n[28]||(n[28]=[s("Linux中国",-1)])]),_:1}),n[31]||(n[31]=s(" 荣誉推出",-1))])])}const P=l(d,[["render",u]]);export{x as __pageData,P as default};
