import{_ as a,a0 as i,w as n,s as l,ao as c,I as o,x as r,a1 as t,A as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"grep 命令系列：grep 中的正則表達式 | LCTT x X-CMD","titleTemplate":false,"description":"grep 命令系列：grep 中的正則表達式 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"grep 命令系列：grep 中的正則表達式 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"grep 命令系列：grep 中的正則表達式 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151127 Linux or UNIX grep Command Tutorial series 2--Regular Expressions In grep","title":"grep 命令系列：grep 中的正則表達式","tag":"201601","desc":""},"relativePath":"201601/20151127 Linux or UNIX grep Command Tutorial series 2--Regular Expressions In grep.md","filePath":"[post].md"}'),g={name:"201601/20151127 Linux or UNIX grep Command Tutorial series 2--Regular Expressions In grep.md"};function s(h,e,u,v,b,k){const p=i("Link");return n(),l("div",null,[e[11]||(e[11]=c(`<h1 id="grep-命令系列-grep-中的正則表達式" tabindex="-1">grep 命令系列：grep 中的正則表達式 <a class="header-anchor" href="#grep-命令系列-grep-中的正則表達式" aria-label="Permalink to “grep 命令系列：grep 中的正則表達式”">​</a></h1><p>在 Linux 、類 Unix 系統中我該如何使用 Grep 命令的正則表達式呢？</p><p>Linux 附帶有 GNU grep 命令工具，它支持擴展正則表達式（extended regular expressions），而且 GNU grep 在所有的 Linux 系統中都是默認有的。Grep 命令被用於搜索定位存儲在您服務器或工作站上的任何信息。</p><h3 id="正則表達式" tabindex="-1">正則表達式 <a class="header-anchor" href="#正則表達式" aria-label="Permalink to “正則表達式”">​</a></h3><p>正則表達式就是用於匹配每行輸入的一種模式，模式是指一串字符序列。下面是範例：</p><pre><code>^w1
w1|w2
[^ ]
</code></pre><h4 id="grep-正則表達式示例" tabindex="-1">grep 正則表達式示例 <a class="header-anchor" href="#grep-正則表達式示例" aria-label="Permalink to “grep 正則表達式示例”">​</a></h4><p>在 /etc/passswd 目錄中搜索 &#39;vivek&#39;</p><pre><code>grep vivek /etc/passwd
</code></pre><p>輸出例子:</p><pre><code>vivek:x:1000:1000:Vivek Gite,,,:/home/vivek:/bin/bash
vivekgite:x:1001:1001::/home/vivekgite:/bin/sh
gitevivek:x:1002:1002::/home/gitevivek:/bin/sh
</code></pre><p>搜索大小寫任意的 vivek(即不區分大小寫的搜索)</p><pre><code>grep -i -w vivek /etc/passwd
</code></pre><p>搜索大小寫任意的 vivek 或 raj</p><pre><code>grep -E -i -w &#39;vivek|raj&#39; /etc/passwd
</code></pre><p>上面最後的例子顯示的，就是一個擴展的正則表達式的模式。</p><h3 id="錨點" tabindex="-1">錨點 <a class="header-anchor" href="#錨點" aria-label="Permalink to “錨點”">​</a></h3><p>你可以分別使用 ^ 和 $ 符號來正則匹配輸入行的開始或結尾。下面的例子搜索顯示僅僅以 vivek 開始的輸入行：</p><pre><code>grep ^vivek /etc/passwd
</code></pre><p>輸出例子:</p><pre><code>vivek:x:1000:1000:Vivek Gite,,,:/home/vivek:/bin/bash
vivekgite:x:1001:1001::/home/vivekgite:/bin/sh
</code></pre><p>你可以僅僅只搜索出以單詞 vivek 開始的行，即不顯示 vivekgit、vivekg 等（LCTT 譯註：即該單詞後面是空格、符號等英文的單詞分隔符。）</p><pre><code>grep -w ^vivek /etc/passwd
</code></pre><p>找出以單詞 word 結尾的行：</p><pre><code>grep &#39;foo$&#39; 文件名
</code></pre><p>匹配僅僅只包含 foo 的行：</p><pre><code>grep &#39;^foo$&#39; 文件名
</code></pre><p>如下所示的例子可以搜索空行：</p><pre><code>grep &#39;^$&#39; 文件名
</code></pre><h3 id="字符類" tabindex="-1">字符類 <a class="header-anchor" href="#字符類" aria-label="Permalink to “字符類”">​</a></h3><p>匹配 Vivek 或 vivek：</p><pre><code>grep &#39;[vV]ivek&#39; 文件名
</code></pre><p>或者</p><pre><code>grep &#39;[vV][iI][Vv][Ee][kK]&#39; 文件名
</code></pre><p>也可以匹配數字 (即匹配 vivek1 或 Vivek2 等等):</p><pre><code>grep -w &#39;[vV]ivek[0-9]&#39; 文件名
</code></pre><p>可以匹配兩個數字字符(即 foo11、foo12 等):</p><pre><code>grep &#39;foo[0-9][0-9]&#39; 文件名
</code></pre><p>不僅僅侷限於數字，也能匹配至少一個字母的:</p><pre><code>grep &#39;[A-Za-z]&#39; 文件名
</code></pre><p>顯示含有 &quot;w&quot; 或 &quot;n&quot; 字符的所有行：</p><pre><code>grep [wn] 文件名
</code></pre><p>放在括號內的表達式，即包在 &quot;[:&quot; 和 &quot;:]&quot; 之間的字符類的名字，它表示的是屬於此類的所有字符列表。標準的字符類名稱如下：</p><ul><li>[:alnum:] - 字母數字字符</li><li>[:alpha:] - 字母字符</li><li>[:blank:] - 空字符: 空格鍵符 和 製表符</li><li>[:digit:] - 數字: &#39;0 1 2 3 4 5 6 7 8 9&#39;</li><li>[:lower:] - 小寫字母: &#39;a b c d e f g h i j k l m n o p q r s t u v w x y z&#39;</li><li>[:space:] - 空格字符: 製表符、換行符、垂直製表符、換頁符、回車符和空格鍵符</li><li>[:upper:] - 大寫字母: &#39;A B C D E F G H I J K L M N O P Q R S T U V W X Y Z&#39;</li></ul><p>在這個例子所示的是匹配所有大寫字母:</p><pre><code>grep &#39;[:upper:]&#39; 文件名
</code></pre><h3 id="通配符" tabindex="-1">通配符 <a class="header-anchor" href="#通配符" aria-label="Permalink to “通配符”">​</a></h3><p>你可以使用 &quot;.&quot; 來匹配單個字符。例子中匹配以 &quot;b&quot; 開頭以 &quot;t&quot; 結尾的3個字符的單詞：</p><pre><code>grep &#39;\\&lt;b.t\\&gt;&#39; 文件名
</code></pre><p>在這兒,</p><ul><li><code>\\&lt;</code> 匹配單詞前面的空字符串</li><li><code>\\&gt;</code> 匹配單詞後面的空字符串</li></ul><p>打印出只有兩個字符的所有行:</p><pre><code>grep &#39;^..$&#39; 文件名
</code></pre><p>顯示以一個點和一個數字開頭的行：</p><pre><code>grep &#39;^\\.[0-9]&#39; 文件名
</code></pre><h4 id="點字符轉義" tabindex="-1">點字符轉義 <a class="header-anchor" href="#點字符轉義" aria-label="Permalink to “點字符轉義”">​</a></h4><p>下面要匹配到 IP 地址為 192.168.1.254 的正則式是不正確的：（LCTT 譯註：可以匹配到該 IP 地址，但是也有可能匹配到間隔符號不是點的類似格式）</p><pre><code>grep &#39;192.168.1.254&#39; /etc/hosts
</code></pre><p>三個點字符都需要轉義：</p><pre><code>grep &#39;192\\.168\\.1\\.254&#39; /etc/hosts
</code></pre><p>下面的例子只能匹配出 IP 地址：（LCTT 譯註：實際上由於 IP 地址中數字的取值範圍，該正則表達式並不精確）</p><pre><code>egrep &#39;[[:digit:]]{1,3}\\.[[:digit:]]{1,3}\\.[[:digit:]]{1,3}\\.[[:digit:]]{1,3}&#39; 文件名
</code></pre><h3 id="怎麼樣搜索以-符號開頭的匹配模式" tabindex="-1">怎麼樣搜索以 - 符號開頭的匹配模式？ <a class="header-anchor" href="#怎麼樣搜索以-符號開頭的匹配模式" aria-label="Permalink to “怎麼樣搜索以 - 符號開頭的匹配模式？”">​</a></h3><p>要使用 -e 選項來搜索匹配 &#39;--test--&#39; 字符串，如果不使用 -e 選項，grep 命令會試圖把 &#39;--test--&#39; 當作自己的選項參數來解析：</p><pre><code>grep -e &#39;--test--&#39; 文件名
</code></pre><h3 id="怎麼使用-grep-的-或-匹配" tabindex="-1">怎麼使用 grep 的“或”匹配? <a class="header-anchor" href="#怎麼使用-grep-的-或-匹配" aria-label="Permalink to “怎麼使用 grep 的“或”匹配?”">​</a></h3><p>使用如下的語法：</p><pre><code>grep -E &#39;word1|word2&#39; 文件名
或
egrep &#39;word1|word2&#39; 文件名
</code></pre><p>或者是</p><pre><code>grep &#39;word1\\|word2&#39; 文件名
</code></pre><h3 id="怎麼使用-grep-的-和-匹配" tabindex="-1">怎麼使用 grep 的“和”匹配? <a class="header-anchor" href="#怎麼使用-grep-的-和-匹配" aria-label="Permalink to “怎麼使用 grep 的“和”匹配?”">​</a></h3><p>使用下面的語法來顯示既包含 &#39;word1&#39; 又包含 &#39;word2&#39; 的所有行</p><pre><code>grep &#39;word1&#39; 文件名 | grep &#39;word2&#39;
</code></pre><h3 id="怎麼樣使用序列檢測" tabindex="-1">怎麼樣使用序列檢測? <a class="header-anchor" href="#怎麼樣使用序列檢測" aria-label="Permalink to “怎麼樣使用序列檢測?”">​</a></h3><p>使用如下的語法，您可以檢測一個字符在序列中重複出現次數：</p><pre><code>{N}
{N,}
{min,max}
</code></pre><p>要匹配字符 “v&quot; 出現兩次：</p><pre><code>egrep &quot;v{2}&quot; 文件名
</code></pre><p>下面的命令能匹配到 &quot;col&quot; 和 &quot;cool&quot; ：</p><pre><code>egrep &#39;co{1,2}l&#39; 文件名
</code></pre><p>下面的命令將會匹配出至少有三個 &#39;c&#39; 字符的所有行。</p><pre><code>egrep &#39;c{3,}&#39; 文件名
</code></pre><p>下面的例子會匹配 91-1234567890（即二個數字-十個數字） 這種格式的手機號。</p><pre><code>grep &quot;[[:digit:]]\\{2\\}[ -]\\?[[:digit:]]\\{10\\}&quot; 文件名
</code></pre><h3 id="怎麼樣使-grep-命令高亮顯示" tabindex="-1">怎麼樣使 grep 命令高亮顯示？### <a class="header-anchor" href="#怎麼樣使-grep-命令高亮顯示" aria-label="Permalink to “怎麼樣使 grep 命令高亮顯示？###”">​</a></h3><p>使用如下的語法：</p><pre><code>grep --color 正則表達式 文件名
</code></pre><h3 id="怎麼樣僅僅只顯示匹配出的字符-而不是匹配出的行" tabindex="-1">怎麼樣僅僅只顯示匹配出的字符，而不是匹配出的行？ <a class="header-anchor" href="#怎麼樣僅僅只顯示匹配出的字符-而不是匹配出的行" aria-label="Permalink to “怎麼樣僅僅只顯示匹配出的字符，而不是匹配出的行？”">​</a></h3><p>使用如下語法：</p><pre><code>grep -o 正則表達式 文件名
</code></pre><h3 id="正則表達式限定符" tabindex="-1">正則表達式限定符### <a class="header-anchor" href="#正則表達式限定符" aria-label="Permalink to “正則表達式限定符###”">​</a></h3><div class="table-wrap"><table><thead><tr><th>限定符</th><th>描述</th></tr></thead><tbody><tr><td><code>.</code></td><td>匹配任意的一個字符。</td></tr><tr><td><code>?</code></td><td>匹配前面的子表達式，最多一次。</td></tr><tr><td><code>*</code></td><td>匹配前面的子表達式零次或多次。</td></tr><tr><td><code>+</code></td><td>匹配前面的子表達式一次或多次。</td></tr><tr><td><code>{N}</code></td><td>匹配前面的子表達式 N 次。</td></tr><tr><td><code>{N,}</code></td><td>匹配前面的子表達式 N 次到多次。</td></tr><tr><td><code>{N,M}</code></td><td>匹配前面的子表達式 N 到 M 次，至少 N 次至多 M 次。</td></tr><tr><td><code>-</code></td><td>只要不是在序列開始、結尾或者序列的結束點上，表示序列範圍。</td></tr><tr><td><code>^</code></td><td>匹配一行開始的空字符串；也表示字符不在要匹配的列表中。</td></tr><tr><td><code>$</code></td><td>匹配一行末尾的空字符串。</td></tr><tr><td><code>\\b</code></td><td>匹配一個單詞前後的空字符串。</td></tr><tr><td><code>\\B</code></td><td>匹配一個單詞中間的空字符串。</td></tr><tr><td><code>\\&lt;</code></td><td>匹配單詞前面的空字符串。</td></tr><tr><td><code>\\&gt;</code></td><td>匹配單詞後面的空字符串。</td></tr></tbody></table></div><h4 id="grep-和-egrep" tabindex="-1">grep 和 egrep <a class="header-anchor" href="#grep-和-egrep" aria-label="Permalink to “grep 和 egrep”">​</a></h4><p>egrep 等同於 <strong>grep -E</strong> 。它會以擴展的正則表達式的模式來解釋模式。下面來自 grep 的幫助頁：</p><pre><code>基本的正則表達式元字符  ?、+、 {、 |、 ( 和 ) 已經失去了它們原來的意義，要使用的話用反斜線的版本 \\?、\\+、\\{、\\|、\\( 和 \\) 來代替。
傳統的 egrep 並不支持 { 元字符，一些 egrep 的實現是以 \\{ 替代的，所以一個可移植的腳本應該避免在 grep -E 使用 { 符號，要匹配字面的 { 應該使用 [}]。 
GNU grep -E 試圖支持傳統的用法，如果 { 出在在無效的間隔規範字符串這前，它就會假定 { 不是特殊字符。
例如，grep -E &#39;{1&#39; 命令搜索包含 {1 兩個字符的串，而不會報出正則表達式語法錯誤。
POSIX.2 標準允許這種操作的擴展，但在可移植腳本文件裏應該避免這樣使用。
</code></pre><p>參考:</p><ul><li>grep 和 regex 幫助手冊頁(7)</li><li>grep 的 info 頁</li></ul><hr>`,98)),o("p",null,[e[1]||(e[1]=r("via: ",-1)),t(p,{href:"http://www.cyberciti.biz/faq/grep-regular-expressions/"},{default:d(()=>[...e[0]||(e[0]=[r("http://www.cyberciti.biz/faq/grep-regular-expressions/",-1)])]),_:1})]),o("p",null,[e[4]||(e[4]=r("作者：Vivek Gite 譯者：",-1)),t(p,{href:"https://github.com/runningwater"},{default:d(()=>[...e[2]||(e[2]=[r("runningwater",-1)])]),_:1}),e[5]||(e[5]=r(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:d(()=>[...e[3]||(e[3]=[r("wxy",-1)])]),_:1})]),o("p",null,[e[8]||(e[8]=r("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[6]||(e[6]=[r("LCTT",-1)])]),_:1}),e[9]||(e[9]=r(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:d(()=>[...e[7]||(e[7]=[r("Linux中國",-1)])]),_:1}),e[10]||(e[10]=r(" 榮譽推出",-1))])])}const w=a(g,[["render",s]]);export{f as __pageData,w as default};
