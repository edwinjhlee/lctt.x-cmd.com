import{_ as c,a0 as d,w as i,s as l,ao as p,I as o,x as t,a1 as r,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"Linux 下如何處理包含空格和特殊字符的文件名 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 下如何處理包含空格和特殊字符的文件名 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 下如何處理包含空格和特殊字符的文件名 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 下如何處理包含空格和特殊字符的文件名 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150610 How to Manipulate Filenames Having Spaces and Special Characters in Linux","title":"Linux 下如何處理包含空格和特殊字符的文件名","tag":"201507","desc":""},"relativePath":"201507/20150610 How to Manipulate Filenames Having Spaces and Special Characters in Linux.md","filePath":"[post].md"}'),h={name:"201507/20150610 How to Manipulate Filenames Having Spaces and Special Characters in Linux.md"};function x(s,e,b,u,m,$){const a=d("Link");return i(),l("div",null,[e[19]||(e[19]=p(`<h1 id="linux-下如何處理包含空格和特殊字符的文件名" tabindex="-1">Linux 下如何處理包含空格和特殊字符的文件名 <a class="header-anchor" href="#linux-下如何處理包含空格和特殊字符的文件名" aria-label="Permalink to “Linux 下如何處理包含空格和特殊字符的文件名”">​</a></h1><p>我們經常會看到文件名和文件夾名。大多數時候文件/文件夾的名字和內容相關並以數字和字母開頭。字母加數字的文件名最常見，應用也很廣泛，但總會需要處理一些包含特殊字符的文件名/文件夾名。</p><p>** 注意 **：我們可能有各種類型的文件，但是為了簡單以及方便實現，在本文中我們只用文本文件（.txt）做演示。</p><p>最常見的文件名例子：</p><pre><code>abc.txt
avi.txt
debian.txt
...
</code></pre><p>數字文件名例子：</p><pre><code>121.txt
3221.txt
674659.txt
...
</code></pre><p>字母數字文件名例子：</p><pre><code>eg84235.txt
3kf43nl2.txt
2323ddw.txt
...
</code></pre><p>包含特殊字符的文件名的例子，並不常見：</p><pre><code>#232.txt
#bkf.txt
#bjsd3469.txt
#121nkfd.txt
-2232.txt
-fbjdew.txt
-gi32kj.txt
--321.txt
--bk34.txt
...
</code></pre><p>一個顯而易見的問題是 - 在這個星球上有誰會創建和處理包含井號<code>(#)</code>，分號<code>(;)</code>，破折號<code>(-)</code>或其他特殊字符的文件/文件夾啊。</p><p>我和你想的一樣，這種文件名確實不常見，不過在你必須得處理這種文件名的時候你的 shell 也不應該出錯或罷工。而且技術上來説，Linux 下的一切比如文件夾、驅動器或其他所有的都被當作文件處理。</p><h3 id="處理名字包含破折號-的文件" tabindex="-1">處理名字包含破折號(-)的文件 <a class="header-anchor" href="#處理名字包含破折號-的文件" aria-label="Permalink to “處理名字包含破折號(-)的文件”">​</a></h3><p>創建以破折號<code>(-)</code>開頭的文件，比如 -abx.txt。</p><pre><code>$ touch -abc.txt
</code></pre><h4 id="測試輸出" tabindex="-1">測試輸出 <a class="header-anchor" href="#測試輸出" aria-label="Permalink to “測試輸出”">​</a></h4><pre><code>touch: invalid option -- &#39;b&#39;
Try &#39;touch --help&#39; for more information.
</code></pre><p>出現上面錯誤的原因是，shell 把破折號<code>(-)</code>之後的內容認作參數了，而很明顯沒有這樣的參數，所以報錯。</p><p>要解決這個問題，我們得告訴 Bash shell（是的，這裏以及本文後面的大多數例子都是基於 BASH 環境）不要將特殊字符（這裏是破折號）後的字符解釋為參數。</p><p>有兩種方法解決這個錯誤：</p><pre><code>$ touch -- -abc.txt		[方法 #1]
$ touch ./-abc.txt		[方法 #2]
</code></pre>`,22)),o("p",null,[e[1]||(e[1]=t("你可以通過運行命令 ls 或 ",-1)),r(a,{href:"https://linux.cn/article-5349-1.html"},{default:n(()=>[...e[0]||(e[0]=[t("ls -l",-1)])]),_:1}),e[2]||(e[2]=t(" 列出詳細信息來檢查通過上面兩種方式創建的文件。",-1))]),e[20]||(e[20]=p(`<pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 11:05 -abc.txt
</code></pre><p>要編輯上述文件可以這樣：</p><pre><code>$ nano -- -abc.txt 
或者 
$ nano ./-abc.txt 
</code></pre><p><strong>注意</strong>：你可以將 nano 替換為任何其他你喜歡的編輯器比如説 vim：</p><pre><code>$ vim -- -abc.txt 
或者 
$ vim ./-abc.txt 
</code></pre><p>如果只是簡單地移動文件可以這樣：</p><pre><code>$ mv -- -abc.txt -a.txt
或者
$ mv -- -a.txt -abc.txt
</code></pre><p>刪除這種文件，可以這樣：</p><pre><code>$ rm -- -abc.txt
或者
$ rm ./-abc.txt 
</code></pre><p>如果一個目錄下有大量這種名字包含破折號的文件，要一次全部刪除的話，可以這樣：</p><pre><code>$ rm ./-*
</code></pre><p><strong>重要：</strong></p><ol><li><p>上面討論的規則可以同樣應用於名字中包含任意數量以及任意位置的連接符號的文件。就是説，-a-b-c.txt，ab-c.txt，abc-.txt，等等。</p></li><li><p>上面討論的規則可以同樣應用於名字中包含任意數量以及任意位置連接符號的文件夾，除了一種情況，在刪除一個文件夾的時候你得這樣使用<code>rm -rf</code>：</p><p>$ rm -rf -- -abc 或者 $ rm -rf ./-abc</p></li></ol><h3 id="處理名字包含井號-的文件" tabindex="-1">處理名字包含井號(#)的文件 <a class="header-anchor" href="#處理名字包含井號-的文件" aria-label="Permalink to “處理名字包含井號(#)的文件”">​</a></h3><p>符號<code>#</code>在 BASH 裏有非常特別的含義。<code>#</code>之後的一切都會被認為是評論，因此會被 BASH 忽略。</p><p><strong>通過例子來加深理解：</strong></p><p>創建一個名字是 #abc.txt 的文件：</p><pre><code>$ touch #abc.txt
</code></pre><h4 id="測試輸出-1" tabindex="-1">測試輸出 <a class="header-anchor" href="#測試輸出-1" aria-label="Permalink to “測試輸出”">​</a></h4><pre><code>touch: missing file operand
Try &#39;touch --help&#39; for more information.
</code></pre>`,20)),o("p",null,[e[4]||(e[4]=t("出現上面錯誤的原因是，BASH 將 #abc.txt 解釋為評論而忽略了。所以",-1)),r(a,{href:"http://www.tecmint.com/8-pratical-examples-of-linux-touch-command/"},{default:n(()=>[...e[3]||(e[3]=[t("命令 touch",-1)])]),_:1}),e[5]||(e[5]=t("沒有收到任何文件作為參數，所以導致這個錯誤。",-1))]),e[21]||(e[21]=p(`<p>要解決這個問題，你可能需要告訴 BASH 不要將 # 解釋為評論。</p><pre><code>$ touch ./#abc.txt
或者
$ touch &#39;#abc.txt&#39;
</code></pre><p>檢查剛創建的文件：</p><pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 12:14 #abc.txt
</code></pre><p>現在創建名字中除了開頭的其他地方包含 # 的文件。</p><pre><code>$ touch ./a#bc.txt
$ touch ./abc#.txt    
或者
$ touch &#39;a#bc.txt&#39;
$ touch &#39;abc#.txt&#39;
</code></pre><p>運行 ‘ls -l‘ 來檢查：</p><pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 12:16 a#bc.txt
-rw-r--r-- 1 avi avi 0 Jun  8 12:16 abc#.txt
</code></pre><p>如果同時創建兩個文件（比如 a 和 #bc）會怎麼樣：</p><pre><code>$ touch a.txt #bc.txt
</code></pre><p>檢查剛創建的文件：</p><pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 12:18 a.txt
</code></pre><p>很明顯上面的例子中只創建了文件 <code>a</code> 而文件 <code>#bc</code> 被忽略了。對於上面的情況我們可以這樣做，</p><pre><code>$ touch a.txt ./#bc.txt
或者
$ touch a.txt &#39;#bc.txt&#39;
</code></pre><p>檢查一下：</p><pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 12:20 a.txt
-rw-r--r-- 1 avi avi 0 Jun  8 12:20 #bc.txt
</code></pre><p>可以這樣移動文件：</p><pre><code>$ mv ./#bc.txt ./#cd.txt
或者
$ mv &#39;#bc.txt&#39; &#39;#cd.txt&#39;
</code></pre><p>這樣拷貝：</p><pre><code>$ cp ./#cd.txt ./#de.txt
或者
$ cp &#39;#cd.txt&#39; &#39;#de.txt&#39;
</code></pre><p>可以使用你喜歡的編輯器來編輯文件：</p><pre><code>$ vi ./#cd.txt
或者
$ vi &#39;#cd.txt&#39;

$ nano ./#cd.txt
或者
$ nano &#39;#cd.txt&#39;
</code></pre><p>這樣刪除：</p><pre><code>$ rm ./#bc.txt 
或者
$ rm &#39;#bc.txt&#39;
</code></pre><p>要刪除所有以井號（#）開頭的文件，可以這樣：</p><pre><code># rm ./#*
</code></pre><h3 id="處理名字包含分號-的文件" tabindex="-1">處理名字包含分號(;)的文件 <a class="header-anchor" href="#處理名字包含分號-的文件" aria-label="Permalink to “處理名字包含分號(;)的文件”">​</a></h3><p>如果你還不知道的話，分號在 BASH 裏起到命令分隔的作用，其他 shell 可能也是一樣的。分號作為分隔符可以讓你一次執行幾個命令。你碰到過名字包含分號的文件嗎？如果沒有的話，這裏有例子。</p><p>創建一個名字包含分號的文件。</p><pre><code>$ touch ;abc.txt
</code></pre><h4 id="測試輸出-2" tabindex="-1">測試輸出 <a class="header-anchor" href="#測試輸出-2" aria-label="Permalink to “測試輸出”">​</a></h4><pre><code>touch: missing file operand
Try &#39;touch --help&#39; for more information.
bash: abc.txt: command not found
</code></pre><p>出現上面錯誤的原因是，在運行上面命令的時候 BASH 會把 touch 解釋為一個命令但是在分號前沒有任何文件參數，所以報告錯誤。然後報告的另一個錯誤找不到命令 <code>abc.txt</code>，只是因為在分號後 BASH 會期望另一個新的命令，而 <code>abc.txt</code> 並不是一個命令。</p><p>要解決這個問題，我們得告訴 BASH 不要將分號解釋為命令分隔符，例如：</p><pre><code>$ touch ./&#39;;abc.txt&#39;
或者
$ touch &#39;;abc.txt&#39;
</code></pre><p><strong>注意</strong>：我們將文件名用單引號 &#39;&#39; 包含起來。這樣可以告訴 BASH 分號 ; 是文件名的一部分而不是命令分隔符。</p><p>對名字包含分號的文件和文件夾的其他操作（就是，拷貝、移動、刪除）可以直接將名字用單引號包含起來就好了。</p><h3 id="處理名字包含其他特殊字符的文件-文件夾" tabindex="-1">處理名字包含其他特殊字符的文件/文件夾 <a class="header-anchor" href="#處理名字包含其他特殊字符的文件-文件夾" aria-label="Permalink to “處理名字包含其他特殊字符的文件/文件夾”">​</a></h3><h4 id="文件名包含加號" tabindex="-1">文件名包含加號 (+) <a class="header-anchor" href="#文件名包含加號" aria-label="Permalink to “文件名包含加號 (+)”">​</a></h4><p>不需要任何特殊處理，按平時的方式做就好了，比如下面測試的文件名。</p><pre><code>$ touch +12.txt 
</code></pre><h4 id="文件名包含美元符" tabindex="-1">文件名包含美元符 ($) <a class="header-anchor" href="#文件名包含美元符" aria-label="Permalink to “文件名包含美元符 ($)”">​</a></h4><p>你需要將文件名用單引號括起來，像處理分號那樣的方式。然後就很簡單了。</p><pre><code>$ touch &#39;$12.txt&#39;
</code></pre><h4 id="文件名包含百分號" tabindex="-1">文件名包含百分號 (%) <a class="header-anchor" href="#文件名包含百分號" aria-label="Permalink to “文件名包含百分號 (%)”">​</a></h4><p>不需要任何特殊處理，當作一個普通文件就可以了。</p><pre><code>$ touch %12.txt
</code></pre><h4 id="文件名包含星號" tabindex="-1">文件名包含星號 (*) <a class="header-anchor" href="#文件名包含星號" aria-label="Permalink to “文件名包含星號 (*)”">​</a></h4><p>需要用單引號括起來或使用反斜槓轉義。（LCTT 譯註：此處原文有誤，已修改。）</p><pre><code>$ touch *12.txt
</code></pre><p>注意：當你需要刪除星號開頭的文件時，千萬不要用類似下面的命令。</p><pre><code>$ rm *
或者
$ rm -rf *
</code></pre><p>而是用這樣的命令，(LCTT 譯註：此處原文有誤，已修改）</p><pre><code>$ rm ./&#39;*.txt&#39;
</code></pre><h4 id="文件名包含歎號" tabindex="-1">文件名包含歎號 (!) <a class="header-anchor" href="#文件名包含歎號" aria-label="Permalink to “文件名包含歎號 (!)”">​</a></h4><p>只要將文件名用單引號括起來，其他的就一樣了。</p><pre><code>$ touch &#39;!12.txt&#39;
</code></pre><h4 id="文件名包含小老鼠" tabindex="-1">文件名包含小老鼠 (@) <a class="header-anchor" href="#文件名包含小老鼠" aria-label="Permalink to “文件名包含小老鼠 (@)”">​</a></h4><p>沒有什麼特別的，可以將名字包含小老鼠的文件當作普通文件。</p><pre><code>$ touch &#39;@12.txt&#39;
</code></pre><h4 id="文件名包含" tabindex="-1">文件名包含 ^ <a class="header-anchor" href="#文件名包含" aria-label="Permalink to “文件名包含 ^”">​</a></h4><p>不需要特殊處理。可以將名字包含 ^ 的文件當作普通文件。</p><pre><code>$ touch ^12.txt
</code></pre><h4 id="文件名包含-1" tabindex="-1">文件名包含 (&amp;) <a class="header-anchor" href="#文件名包含-1" aria-label="Permalink to “文件名包含 (&amp;)”">​</a></h4><p>將文件名用單引號括起來，然後就可以操作了。</p><pre><code>$ touch &#39;&amp;12.txt&#39;
</code></pre><h4 id="文件名包含括號" tabindex="-1">文件名包含括號 () <a class="header-anchor" href="#文件名包含括號" aria-label="Permalink to “文件名包含括號 ()”">​</a></h4><p>如果文件名包含括號，你需要將文件名用單引號括起來。</p><pre><code>$ touch &#39;(12.txt)&#39;
</code></pre><h4 id="文件名包含花括號" tabindex="-1">文件名包含花括號 {} <a class="header-anchor" href="#文件名包含花括號" aria-label="Permalink to “文件名包含花括號 {}”">​</a></h4><p>用單引號括起來或使用反斜槓轉義。（LCTT 譯註：此處原文有誤，已修改）</p><pre><code>$ touch &#39;{12.txt}&#39;
</code></pre><h4 id="文件名包含尖括號" tabindex="-1">文件名包含尖括號 &lt;&gt; <a class="header-anchor" href="#文件名包含尖括號" aria-label="Permalink to “文件名包含尖括號 &lt;&gt;”">​</a></h4><p>名字包含尖括號的文件需要用單引號括起來。</p><pre><code>$ touch &#39;&lt;12.txt&gt;&#39;
</code></pre><h4 id="文件名包含方括號" tabindex="-1">文件名包含方括號 [ ] <a class="header-anchor" href="#文件名包含方括號" aria-label="Permalink to “文件名包含方括號 [ ]”">​</a></h4><p>用單引號括起來或使用反斜槓轉義。（LCTT 譯註：此處原文有誤，已修改）</p><pre><code>$ touch &#39;[12.txt]&#39;
</code></pre><h4 id="文件名包含下劃線" tabindex="-1">文件名包含下劃線 (_) <a class="header-anchor" href="#文件名包含下劃線" aria-label="Permalink to “文件名包含下劃線 (_)”">​</a></h4><p>這個非常普遍，不需要特殊對待。當作普通文件隨意處理。</p><pre><code>$ touch _12.txt
</code></pre><h4 id="文件名包含等號" tabindex="-1">文件名包含等號 (=) <a class="header-anchor" href="#文件名包含等號" aria-label="Permalink to “文件名包含等號 (=)”">​</a></h4><p>用單引號括起來或使用反斜槓轉義。（LCTT 譯註：此處原文有誤，已修改）</p><pre><code>$ touch &#39;=12.txt&#39;
</code></pre><h4 id="處理反斜槓" tabindex="-1">處理反斜槓 () <a class="header-anchor" href="#處理反斜槓" aria-label="Permalink to “處理反斜槓 ()”">​</a></h4><p>反斜槓會告訴 shell 忽略後面字符的特殊含義。你必須將文件名用單引號括起來，就像處理分號那樣。其他的就沒什麼了。</p><pre><code>$ touch &#39;\\12.txt&#39;
</code></pre><h4 id="包含斜槓的特殊情形" tabindex="-1">包含斜槓的特殊情形 <a class="header-anchor" href="#包含斜槓的特殊情形" aria-label="Permalink to “包含斜槓的特殊情形”">​</a></h4><p>除非你的文件系統有問題，否則你不能創建名字包含斜槓的文件。沒辦法轉義斜槓。</p><p>所以如果你能創建類似 ‘/12.txt’ 或者 ‘b/c.txt’ 這樣的文件，那要麼你的文件系統有問題，或者支持 Unicode，這樣你可以創建包含斜槓的文件。只是這樣並不是真的斜槓，而是一個看起來像斜槓的 Unicode 字符。</p><h4 id="文件名包含問號" tabindex="-1">文件名包含問號 (?) <a class="header-anchor" href="#文件名包含問號" aria-label="Permalink to “文件名包含問號 (?)”">​</a></h4><p>用單引號括起來或使用反斜槓轉義。（LCTT 譯註：此處原文有誤，已修改）</p><pre><code>$ touch &#39;?12.txt&#39;
</code></pre><h4 id="文件名包含點" tabindex="-1">文件名包含點 (.) <a class="header-anchor" href="#文件名包含點" aria-label="Permalink to “文件名包含點 (.)”">​</a></h4><p>在 Linux 裏以點 <code>(.)</code> 開頭的文件非常特別，被稱為點文件。它們通常是隱藏的配置文件或系統文件。你需要使用 ls 命令的 ‘-a‘ 或 ‘-A‘ 開關來查看這種文件。</p><p>創建，編輯，重命名和刪除這種文件很直接。</p><pre><code>$ touch .12.txt
</code></pre><p>注意：在 Linux 裏你可能碰到名字包含許多點 <code>(.)</code> 的文件。不像其他操作系統，文件名裏的點並不意味着分隔名字和擴展後綴。你可以創建名字包含多個點的文件：</p><pre><code>$ touch 1.2.3.4.5.6.7.8.9.10.txt
</code></pre><p>檢查一下：</p><pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 14:32 1.2.3.4.5.6.7.8.9.10.txt
</code></pre><h4 id="文件名包含逗號" tabindex="-1">文件名包含逗號 (,) <a class="header-anchor" href="#文件名包含逗號" aria-label="Permalink to “文件名包含逗號 (,)”">​</a></h4><p>你可以在文件名中使用逗號，可以有任意多個而不用特殊對待。就像平時普通名字文件那樣處理。</p><pre><code>$ touch ,12.txt
或者
$ touch ,12,.txt
</code></pre><h4 id="文件名包含冒號" tabindex="-1">文件名包含冒號 (😃 <a class="header-anchor" href="#文件名包含冒號" aria-label="Permalink to “文件名包含冒號 (”">​</a></h4><p>用單引號括起來或使用反斜槓轉義。（LCTT 譯註：此處原文有誤，已修改）</p><pre><code>$ touch &#39;:12.txt&#39;
或者
$ touch &#39;:12:.txt&#39;
</code></pre><h4 id="文件名包含引號-單引號和雙引號" tabindex="-1">文件名包含引號（單引號和雙引號） <a class="header-anchor" href="#文件名包含引號-單引號和雙引號" aria-label="Permalink to “文件名包含引號（單引號和雙引號）”">​</a></h4><p>要在文件名裏使用引號，我們需要使用交替規則。例如，如果你需要在文件名裏使用單引號，那就用雙引號把文件名括起來。而如果你需要在文件名裏使用雙引號，那就用單引號把文件名括起來。（LCTT 譯註：或者如果單引號和雙引號混雜的情況，你也可以用反斜槓轉義。）</p><pre><code>$ touch &quot;15&#39;.txt&quot;

以及

$ touch &#39;15&quot;.txt&#39;
</code></pre><h4 id="文件名包含波浪號" tabindex="-1">文件名包含波浪號 (~) <a class="header-anchor" href="#文件名包含波浪號" aria-label="Permalink to “文件名包含波浪號 (~)”">​</a></h4><p>Linux 下一些像 emacs 這樣的文本編輯器在編輯文件的時候會創建備份文件。這個備份文件的名字是在原文件名後面附加一個波浪號。你可以在文件名任意位置使用波浪號，例如：</p><pre><code>$ touch ~1a.txt
或者
$touch 2b~.txt
</code></pre><h4 id="文件名包含空格" tabindex="-1">文件名包含空格 <a class="header-anchor" href="#文件名包含空格" aria-label="Permalink to “文件名包含空格”">​</a></h4><p>創建名字的字符/單詞之間包含空格的文件，比如 “hi my name is avishek.txt”。</p><p>最好不要在文件名裏使用空格，如果你必須要分隔可讀的名字，可以使用下劃線或橫槓。不過，你還是需要創建這樣的文件的話，你可以用反斜槓來轉義下一個字符。要創建上面名字的文件可以這樣做。</p><pre><code>$ touch hi\\ my\\ name\\ is\\ avishek.txt

hi my name is avishek.txt
</code></pre><p>我已經嘗試覆蓋你可能碰到的所有情況。上面大多數測試都在 BASH Shell 裏完成，可能在其他 shell 下會有差異。</p><p>如果你覺得我遺漏了什麼（這很正常也符合人性），請把你的建議發表到下面的評論裏。保持聯繫，多評論。不要走開！求點贊求分享求擴散！</p><hr>`,120)),o("p",null,[e[7]||(e[7]=t("via: ",-1)),r(a,{href:"http://www.tecmint.com/manage-linux-filenames-with-special-characters/"},{default:n(()=>[...e[6]||(e[6]=[t("http://www.tecmint.com/manage-linux-filenames-with-special-characters/",-1)])]),_:1})]),o("p",null,[e[11]||(e[11]=t("作者：",-1)),r(a,{href:"http://www.tecmint.com/author/avishek/"},{default:n(()=>[...e[8]||(e[8]=[t("Avishek Kumar",-1)])]),_:1}),e[12]||(e[12]=t(" 譯者：",-1)),r(a,{href:"https://github.com/zpl1025"},{default:n(()=>[...e[9]||(e[9]=[t("zpl1025",-1)])]),_:1}),e[13]||(e[13]=t(" 校對：",-1)),r(a,{href:"https://github.com/wxy"},{default:n(()=>[...e[10]||(e[10]=[t("wxy",-1)])]),_:1})]),o("p",null,[e[16]||(e[16]=t("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[14]||(e[14]=[t("LCTT",-1)])]),_:1}),e[17]||(e[17]=t(" 原創翻譯，",-1)),r(a,{href:"https://linux.cn/"},{default:n(()=>[...e[15]||(e[15]=[t("Linux中國",-1)])]),_:1}),e[18]||(e[18]=t(" 榮譽推出",-1))])])}const v=c(h,[["render",x]]);export{k as __pageData,v as default};
