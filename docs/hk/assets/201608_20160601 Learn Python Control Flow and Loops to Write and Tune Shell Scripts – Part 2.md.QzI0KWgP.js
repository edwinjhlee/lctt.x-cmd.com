import{_ as l,a0 as o,w as r,s as h,I as a,x as s,a1 as t,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"Linux 平台下 Python 腳本編程入門（二） | LCTT x X-CMD","titleTemplate":false,"description":"Linux 平台下 Python 腳本編程入門（二） | LCTT (201608) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 平台下 Python 腳本編程入門（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 平台下 Python 腳本編程入門（二） | LCTT (201608) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201608/20160601 Learn Python Control Flow and Loops to Write and Tune Shell Scripts – Part 2","title":"Linux 平台下 Python 腳本編程入門（二）","tag":"201608","desc":""},"relativePath":"201608/20160601 Learn Python Control Flow and Loops to Write and Tune Shell Scripts – Part 2.md","filePath":"[post].md"}'),d={name:"201608/20160601 Learn Python Control Flow and Loops to Write and Tune Shell Scripts – Part 2.md"};function u(c,n,g,m,y,b){const p=o("Link");return r(),h("div",null,[n[32]||(n[32]=a("h1",{id:"linux-平台下-python-腳本編程入門-二",tabindex:"-1"},[s("Linux 平台下 Python 腳本編程入門（二） "),a("a",{class:"header-anchor",href:"#linux-平台下-python-腳本編程入門-二","aria-label":"Permalink to “Linux 平台下 Python 腳本編程入門（二）”"},"​")],-1)),a("p",null,[n[1]||(n[1]=s("在“",-1)),t(p,{href:"http://www.tecmint.com/learn-python-programming-and-scripting-in-linux/"},{default:e(()=>[...n[0]||(n[0]=[s("Linux 平台下 Python 腳本編程入門",-1)])]),_:1}),n[2]||(n[2]=s("”系列之前的文章裏，我們向你介紹了 Python 的簡介，它的命令列 shell 和 IDLE（LCTT 譯註：python 自帶的一個 IDE）。我們也演示瞭如何進行算術運算、如何在變量中存儲值、還有如何打印那些值到屏幕上。最後，我們通過一個練習示例講解了面向對象編程中方法和屬性概念。",-1))]),n[33]||(n[33]=i(`<p><img src="http://www.tecmint.com/wp-content/uploads/2016/06/Write-Shell-Scripts-in-Python-Programming.png" alt=""></p><p><em>在 Python 編程中寫 Linux Shell 腳本</em></p><p>本篇中，我們會討論控制流（根據用户輸入的信息、計算的結果，或者一個變量的當前值選擇不同的動作行為）和循環（自動重複執行任務），接着應用我們目前所學東西來編寫一個簡單的 shell 腳本，這個腳本會顯示操作系統類型、主機名、內核版本、版本號和機器硬件架構。</p><p>這個例子儘管很基礎，但是會幫助我們證明，比起使用一般的 bash 工具，我們通過發揮 Python 面向對象的特性來編寫 shell 腳本會更簡單些。</p><p>換句話説，我們想從這裏出發：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># uname -snrvm</span></span></code></pre></div><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Check-Hostname-of-Linux.png" alt=""></p><p><em>檢查 Linux 的主機名</em></p><p>到</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Check-Linux-Hostname-Using-Python-Script.png" alt=""></p><p><em>用 Python 腳本來檢查 Linux 的主機名</em></p><p>或者</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Script-to-Check-Linux-System-Information.png" alt=""></p><p><em>用腳本檢查 Linux 系統信息</em></p><p>看着不錯，不是嗎？那我們就挽起袖子，開幹吧。</p><h3 id="python-中的控制流" tabindex="-1">Python 中的控制流 <a class="header-anchor" href="#python-中的控制流" aria-label="Permalink to “Python 中的控制流”">​</a></h3><p>如我們剛説那樣，控制流允許我們根據一個給定的條件，選擇不同的輸出結果。在 Python 中最簡單的實現就是一個 <code>if</code>/<code>else</code> 語句。</p><p>基本語法是這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if 條件:</span></span>
<span class="line"><span>    # 動作 1</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    # 動作 2</span></span></code></pre></div><p>當“條件”求值為真（true），下面的代碼塊就會被執行（<code># 動作 1</code>代表的部分）。否則，else 下面的代碼就會運行。 “條件”可以是任何表達式，只要可以求得值為真或者假。</p><p>舉個例子：</p><ol><li><code>1 &lt; 3</code> # 真</li><li><code>firstName == &quot;Gabriel&quot;</code> # 對 firstName 為 Gabriel 的人是真，對其他不叫 Gabriel 的人為假</li></ol><ul><li>在第一個例子中，我們比較了兩個值，判斷 1 是否小於 3。</li><li>在第二個例子中，我們比較了 firstName（一個變量）與字符串 “Gabriel”，看在當前執行的位置，firstName 的值是否等於該字符串。</li><li>條件和 else 表達式都必須跟着一個冒號（<code>:</code>）。</li><li><strong>縮進在 Python 中非常重要</strong>。同樣縮進下的行被認為是相同的代碼塊。</li></ul>`,23)),a("p",null,[n[4]||(n[4]=s("請注意，",-1)),n[5]||(n[5]=a("code",null,"if",-1)),n[6]||(n[6]=s("/",-1)),n[7]||(n[7]=a("code",null,"else",-1)),n[8]||(n[8]=s(" 表達式只是 Python 中許多控制流工具的一個而已。我們先在這裏瞭解以下，後面會用在我們的腳本中。你可以在",-1)),t(p,{href:"http://please%20note%20that%20the%20if%20/%20else%20statement%20is%20only%20one%20of%20the%20many%20control%20flow%20tools%20available%20in%20Python.%20We%20reviewed%20it%20here%20since%20we%20will%20use%20it%20in%20our%20script%20later.%20You%20can%20learn%20more%20about%20the%20rest%20of%20the%20tools%20in%20the%20official%20docs."},{default:e(()=>[...n[3]||(n[3]=[s("官方文檔",-1)])]),_:1}),n[9]||(n[9]=s("中學到更多工具。",-1))]),n[34]||(n[34]=i(`<h3 id="python-中的循環" tabindex="-1">Python 中的循環 <a class="header-anchor" href="#python-中的循環" aria-label="Permalink to “Python 中的循環”">​</a></h3><p>簡單來説，一個循環就是一組指令或者表達式序列，可以按順序一直執行，只要條件為真，或者對列表裏每個項目執行一一次。</p><p>Python 中最簡單的循環，就是用 for 循環迭代一個給定列表的元素，或者對一個字符串從第一個字符開始到執行到最後一個字符結束。</p><p>基本語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for x in example:</span></span>
<span class="line"><span>	# do this</span></span></code></pre></div><p>這裏的 example 可以是一個列表或者一個字符串。如果是列表，變量 x 就代表列表中每個元素；如果是字符串，x 就代表字符串中每個字符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; rockBands = []</span></span>
<span class="line"><span>&gt;&gt;&gt; rockBands.append(&quot;Roxette&quot;)</span></span>
<span class="line"><span>&gt;&gt;&gt; rockBands.append(&quot;Guns N&#39; Roses&quot;)</span></span>
<span class="line"><span>&gt;&gt;&gt; rockBands.append(&quot;U2&quot;)</span></span>
<span class="line"><span>&gt;&gt;&gt; for x in rockBands:</span></span>
<span class="line"><span>    	print(x)</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>&gt;&gt;&gt; firstName = &quot;Gabriel&quot;</span></span>
<span class="line"><span>&gt;&gt;&gt; for x in firstName:</span></span>
<span class="line"><span>    	print(x)</span></span></code></pre></div><p>上面例子的輸出如下圖所示：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Learn-Loops-in-Python.png" alt=""></p><p><em>學習 Python 中的循環</em></p><h3 id="python-模組" tabindex="-1">Python 模組 <a class="header-anchor" href="#python-模組" aria-label="Permalink to “Python 模組”">​</a></h3><p>很明顯，必須有個辦法將一系列的 Python 指令和表達式保存到文件裏，然後在需要的時候取出來。</p><p>準確來説模組就是這樣的。比如，os 模組提供了一個到操作系統的底層的接口，可以允許我們做許多通常在命令列下執行的操作。</p><p>沒錯，os 模組包含了許多可以用來調用的方法和屬性，就如我們之前文章裏講解的那樣。不過，我們需要使用 <code>import</code> 關鍵詞導入（或者叫包含）模組到運行環境裏來：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import os</span></span></code></pre></div><p>我們來打印出當前的工作目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; os.getcwd()</span></span></code></pre></div><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Learn-Python-Modules.png" alt=""></p><p><em>學習 Python 模組</em></p><p>現在，讓我們把這些結合在一起（包括之前文章裏討論的概念），編寫需要的腳本。</p><h3 id="python-腳本" tabindex="-1">Python 腳本 <a class="header-anchor" href="#python-腳本" aria-label="Permalink to “Python 腳本”">​</a></h3><p>以一段聲明文字開始一個腳本是個不錯的想法，它可以表明腳本的目的、發佈所依據的許可證，以及一個列出做出的修改的修訂歷史。儘管這主要是個人喜好，但這會讓我們的工作看起來比較專業。</p><p>這裏有個腳本，可以輸出這篇文章最前面展示的那樣。腳本做了大量的註釋，可以讓大家可以理解發生了什麼。</p><p>在進行下一步之前，花點時間來理解它。注意，我們是如何使用一個 <code>if</code>/<code>else</code> 結構，判斷每個字段標題的長度是否比字段本身的值還大。</p><p>基於比較結果，我們用空字符去填充一個字段標題和下一個之間的空格。同時，我們使用一定數量的短線作為字段標題與其值之間的分割符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/python3</span></span>
<span class="line"><span># 如果你沒有安裝 Python 3 ，那麼修改這一行為 #!/usr/bin/python</span></span>
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
<span class="line"><span>### 導入 os 模組</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 將 os.uname() 的輸出賦值給 systemInfo 變量</span></span>
<span class="line"><span>### os.uname() 會返回五個字符串元組（sysname, nodename, release, version, machine）</span></span>
<span class="line"><span>### 參見文檔：https://docs.python.org/3.2/library/os.html#module-os</span></span>
<span class="line"><span>systemInfo = os.uname()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 這是一個固定的數組，用於描述腳本輸出的字段標題</span></span>
<span class="line"><span>headers = [&quot;Operating system&quot;,&quot;Hostname&quot;,&quot;Release&quot;,&quot;Version&quot;,&quot;Machine&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 初始化索引值，用於定義每一步迭代中</span></span>
<span class="line"><span>### systemInfo 和字段標題的索引</span></span>
<span class="line"><span>index = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 字段標題變量的初始值</span></span>
<span class="line"><span>caption = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 值變量的初始值</span></span>
<span class="line"><span>values = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 分隔線變量的初始值</span></span>
<span class="line"><span>separators = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 開始循環</span></span>
<span class="line"><span>for item in systemInfo:</span></span>
<span class="line"><span>    if len(item) &lt; len(headers[index]):</span></span>
<span class="line"><span>   	 ### 一個包含橫線的字符串，橫線長度等於item[index] 或 headers[index]</span></span>
<span class="line"><span>   	 ### 要重複一個字符，用引號圈起來並用星號（*）乘以所需的重複次數 </span></span>
<span class="line"><span>   	 separators = separators + &quot;-&quot; * len(headers[index]) + &quot; &quot;</span></span>
<span class="line"><span>   	 caption = caption + headers[index] + &quot; &quot;</span></span>
<span class="line"><span>   	 values = values + systemInfo[index] + &quot; &quot; * (len(headers[index]) - len(item)) + &quot; &quot;</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>   	 separators = separators + &quot;-&quot; * len(item) + &quot; &quot;</span></span>
<span class="line"><span>   	 caption =  caption + headers[index] + &quot; &quot; * (len(item) - len(headers[index]) + 1)</span></span>
<span class="line"><span>   	 values = values + item + &quot; &quot;</span></span>
<span class="line"><span>    ### 索引加 1</span></span>
<span class="line"><span>    index = index + 1</span></span>
<span class="line"><span>### 終止循環</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 輸出轉換為大寫的變量（字段標題）名</span></span>
<span class="line"><span>print(caption.upper())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 輸出分隔線</span></span>
<span class="line"><span>print(separators)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 輸出值（systemInfo 中的項目）</span></span>
<span class="line"><span>print(values)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 步驟：</span></span>
<span class="line"><span>### 1) 保持該腳本為 uname.py （或任何你想要的名字）</span></span>
<span class="line"><span>### 並通過如下命令給其執行權限：</span></span>
<span class="line"><span>### chmod +x uname.py</span></span>
<span class="line"><span>### 2) 執行它；</span></span>
<span class="line"><span>### ./uname.py</span></span></code></pre></div><p>如果你已經按照上述描述將上面的腳本保存到一個文件裏，並給文件增加了執行權限，那麼運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># chmod +x uname.py</span></span>
<span class="line"><span># ./uname.py</span></span></code></pre></div><p>如果試圖運行腳本時你得到了如下的錯誤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-bash: ./uname.py: /usr/bin/python3: bad interpreter: No such file or directory</span></span></code></pre></div><p>這意味着你沒有安裝 Python3。如果那樣的話，你要麼安裝 Python3 的包，要麼替換解釋器那行（如果如之前文章裏概述的那樣，跟着下面的步驟去更新 Python 執行文件的軟連接，要特別注意並且非常小心）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/python3</span></span></code></pre></div><p>為</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/python</span></span></code></pre></div><p>這樣會通過使用已經安裝好的 Python 2 去執行該腳本。</p><p><strong>注意</strong>：該腳本在 Python 2.x 與 Pyton 3.x 上都測試成功過了。</p><p>儘管比較粗糙，你可以認為該腳本就是一個 Python 模組。這意味着你可以在 IDLE 中打開它（File → Open… → Select file)：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Open-Python-in-IDLE.png" alt=""></p><p><em>在 IDLE 中打開 Python</em></p><p>一個包含有文件內容的新窗口就會打開。然後執行 Run → Run module（或者按 F5）。腳本的輸出就會在原始的 Shell 裏顯示出來：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/05/Run-Python-Script.png" alt=""></p><p><em>執行 Python 腳本</em></p>`,42)),a("p",null,[n[12]||(n[12]=s("如果你想純粹用 bash 寫一個腳本，也獲得同樣的結果，你可能需要結合使用 ",-1)),t(p,{href:"http://www.tecmint.com/use-linux-awk-command-to-filter-text-string-in-files/"},{default:e(()=>[...n[10]||(n[10]=[s("awk",-1)])]),_:1}),n[13]||(n[13]=s("、",-1)),t(p,{href:"http://www.tecmint.com/sed-command-to-create-edit-and-manipulate-files-in-linux/"},{default:e(()=>[...n[11]||(n[11]=[s("sed",-1)])]),_:1}),n[14]||(n[14]=s("，並且藉助複雜的方法來存儲與獲得列表中的元素（不要忘了使用 tr 命令將小寫字母轉為大寫）。",-1))]),n[35]||(n[35]=a("p",null,"另外，在所有的 Linux 系統版本中都至少集成了一個 Python 版本（2.x 或者 3.x，或者兩者都有）。你還需要依賴 shell 去完成同樣的目標嗎？那樣你可能需要為不同的 shell 編寫不同的版本。",-1)),n[36]||(n[36]=a("p",null,"這裏演示了面向對象編程的特性，它會成為一個系統管理員得力的助手。",-1)),a("p",null,[n[16]||(n[16]=a("strong",null,"注意",-1)),n[17]||(n[17]=s("：你可以在我的 Github 倉庫裏獲得 ",-1)),t(p,{href:"https://github.com/gacanepa/scripts/blob/master/python/uname.py"},{default:e(()=>[...n[15]||(n[15]=[s("這個 python 腳本",-1)])]),_:1}),n[18]||(n[18]=s("（或者其他的）。",-1))]),n[37]||(n[37]=a("h3",{id:"總結",tabindex:"-1"},[s("總結 "),a("a",{class:"header-anchor",href:"#總結","aria-label":"Permalink to “總結”"},"​")],-1)),n[38]||(n[38]=a("p",null,"這篇文章裏，我們講解了 Python 中控制流、循環/迭代、和模組的概念。我們也演示瞭如何利用 Python 中面向對象編程的方法和屬性來簡化複雜的 shell 腳本。",-1)),n[39]||(n[39]=a("p",null,"你有任何其他希望去驗證的想法嗎？開始吧，寫出自己的 Python 腳本，如果有任何問題可以諮詢我們。不必猶豫，在分割線下面留下評論，我們會盡快回復你。",-1)),n[40]||(n[40]=a("hr",null,null,-1)),a("p",null,[n[20]||(n[20]=s("via: ",-1)),t(p,{href:"http://www.tecmint.com/learn-python-programming-to-write-linux-shell-scripts/"},{default:e(()=>[...n[19]||(n[19]=[s("http://www.tecmint.com/learn-python-programming-to-write-linux-shell-scripts/",-1)])]),_:1})]),a("p",null,[n[24]||(n[24]=s("作者：",-1)),t(p,{href:"http://www.tecmint.com/author/gacanepa/"},{default:e(()=>[...n[21]||(n[21]=[s("Gabriel Cánepa",-1)])]),_:1}),n[25]||(n[25]=s(" 譯者：",-1)),t(p,{href:"https://github.com/wi-cuckoo"},{default:e(()=>[...n[22]||(n[22]=[s("wi-cuckoo",-1)])]),_:1}),n[26]||(n[26]=s(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...n[23]||(n[23]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[29]||(n[29]=s("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[27]||(n[27]=[s("LCTT",-1)])]),_:1}),n[30]||(n[30]=s(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...n[28]||(n[28]=[s("Linux中國",-1)])]),_:1}),n[31]||(n[31]=s(" 榮譽推出",-1))])])}const P=l(d,[["render",u]]);export{x as __pageData,P as default};
