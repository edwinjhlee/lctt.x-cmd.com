import{_ as a,a0 as i,w as n,s as l,ao as c,I as o,x as r,a1 as t,A as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"grep 命令系列：grep 中的正则表达式 | LCTT x X-CMD","titleTemplate":false,"description":"grep 命令系列：grep 中的正则表达式 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"grep 命令系列：grep 中的正则表达式 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"grep 命令系列：grep 中的正则表达式 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151127 Linux or UNIX grep Command Tutorial series 2--Regular Expressions In grep","title":"grep 命令系列：grep 中的正则表达式","tag":"201601","desc":""},"relativePath":"201601/20151127 Linux or UNIX grep Command Tutorial series 2--Regular Expressions In grep.md","filePath":"[post].md"}'),g={name:"201601/20151127 Linux or UNIX grep Command Tutorial series 2--Regular Expressions In grep.md"};function s(h,e,u,v,b,k){const p=i("Link");return n(),l("div",null,[e[11]||(e[11]=c(`<h1 id="grep-命令系列-grep-中的正则表达式" tabindex="-1">grep 命令系列：grep 中的正则表达式 <a class="header-anchor" href="#grep-命令系列-grep-中的正则表达式" aria-label="Permalink to “grep 命令系列：grep 中的正则表达式”">​</a></h1><p>在 Linux 、类 Unix 系统中我该如何使用 Grep 命令的正则表达式呢？</p><p>Linux 附带有 GNU grep 命令工具，它支持扩展正则表达式（extended regular expressions），而且 GNU grep 在所有的 Linux 系统中都是默认有的。Grep 命令被用于搜索定位存储在您服务器或工作站上的任何信息。</p><h3 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to “正则表达式”">​</a></h3><p>正则表达式就是用于匹配每行输入的一种模式，模式是指一串字符序列。下面是范例：</p><pre><code>^w1
w1|w2
[^ ]
</code></pre><h4 id="grep-正则表达式示例" tabindex="-1">grep 正则表达式示例 <a class="header-anchor" href="#grep-正则表达式示例" aria-label="Permalink to “grep 正则表达式示例”">​</a></h4><p>在 /etc/passswd 目录中搜索 &#39;vivek&#39;</p><pre><code>grep vivek /etc/passwd
</code></pre><p>输出例子:</p><pre><code>vivek:x:1000:1000:Vivek Gite,,,:/home/vivek:/bin/bash
vivekgite:x:1001:1001::/home/vivekgite:/bin/sh
gitevivek:x:1002:1002::/home/gitevivek:/bin/sh
</code></pre><p>搜索大小写任意的 vivek(即不区分大小写的搜索)</p><pre><code>grep -i -w vivek /etc/passwd
</code></pre><p>搜索大小写任意的 vivek 或 raj</p><pre><code>grep -E -i -w &#39;vivek|raj&#39; /etc/passwd
</code></pre><p>上面最后的例子显示的，就是一个扩展的正则表达式的模式。</p><h3 id="锚点" tabindex="-1">锚点 <a class="header-anchor" href="#锚点" aria-label="Permalink to “锚点”">​</a></h3><p>你可以分别使用 ^ 和 $ 符号来正则匹配输入行的开始或结尾。下面的例子搜索显示仅仅以 vivek 开始的输入行：</p><pre><code>grep ^vivek /etc/passwd
</code></pre><p>输出例子:</p><pre><code>vivek:x:1000:1000:Vivek Gite,,,:/home/vivek:/bin/bash
vivekgite:x:1001:1001::/home/vivekgite:/bin/sh
</code></pre><p>你可以仅仅只搜索出以单词 vivek 开始的行，即不显示 vivekgit、vivekg 等（LCTT 译注：即该单词后面是空格、符号等英文的单词分隔符。）</p><pre><code>grep -w ^vivek /etc/passwd
</code></pre><p>找出以单词 word 结尾的行：</p><pre><code>grep &#39;foo$&#39; 文件名
</code></pre><p>匹配仅仅只包含 foo 的行：</p><pre><code>grep &#39;^foo$&#39; 文件名
</code></pre><p>如下所示的例子可以搜索空行：</p><pre><code>grep &#39;^$&#39; 文件名
</code></pre><h3 id="字符类" tabindex="-1">字符类 <a class="header-anchor" href="#字符类" aria-label="Permalink to “字符类”">​</a></h3><p>匹配 Vivek 或 vivek：</p><pre><code>grep &#39;[vV]ivek&#39; 文件名
</code></pre><p>或者</p><pre><code>grep &#39;[vV][iI][Vv][Ee][kK]&#39; 文件名
</code></pre><p>也可以匹配数字 (即匹配 vivek1 或 Vivek2 等等):</p><pre><code>grep -w &#39;[vV]ivek[0-9]&#39; 文件名
</code></pre><p>可以匹配两个数字字符(即 foo11、foo12 等):</p><pre><code>grep &#39;foo[0-9][0-9]&#39; 文件名
</code></pre><p>不仅仅局限于数字，也能匹配至少一个字母的:</p><pre><code>grep &#39;[A-Za-z]&#39; 文件名
</code></pre><p>显示含有 &quot;w&quot; 或 &quot;n&quot; 字符的所有行：</p><pre><code>grep [wn] 文件名
</code></pre><p>放在括号内的表达式，即包在 &quot;[:&quot; 和 &quot;:]&quot; 之间的字符类的名字，它表示的是属于此类的所有字符列表。标准的字符类名称如下：</p><ul><li>[:alnum:] - 字母数字字符</li><li>[:alpha:] - 字母字符</li><li>[:blank:] - 空字符: 空格键符 和 制表符</li><li>[:digit:] - 数字: &#39;0 1 2 3 4 5 6 7 8 9&#39;</li><li>[:lower:] - 小写字母: &#39;a b c d e f g h i j k l m n o p q r s t u v w x y z&#39;</li><li>[:space:] - 空格字符: 制表符、换行符、垂直制表符、换页符、回车符和空格键符</li><li>[:upper:] - 大写字母: &#39;A B C D E F G H I J K L M N O P Q R S T U V W X Y Z&#39;</li></ul><p>在这个例子所示的是匹配所有大写字母:</p><pre><code>grep &#39;[:upper:]&#39; 文件名
</code></pre><h3 id="通配符" tabindex="-1">通配符 <a class="header-anchor" href="#通配符" aria-label="Permalink to “通配符”">​</a></h3><p>你可以使用 &quot;.&quot; 来匹配单个字符。例子中匹配以 &quot;b&quot; 开头以 &quot;t&quot; 结尾的3个字符的单词：</p><pre><code>grep &#39;\\&lt;b.t\\&gt;&#39; 文件名
</code></pre><p>在这儿,</p><ul><li><code>\\&lt;</code> 匹配单词前面的空字符串</li><li><code>\\&gt;</code> 匹配单词后面的空字符串</li></ul><p>打印出只有两个字符的所有行:</p><pre><code>grep &#39;^..$&#39; 文件名
</code></pre><p>显示以一个点和一个数字开头的行：</p><pre><code>grep &#39;^\\.[0-9]&#39; 文件名
</code></pre><h4 id="点字符转义" tabindex="-1">点字符转义 <a class="header-anchor" href="#点字符转义" aria-label="Permalink to “点字符转义”">​</a></h4><p>下面要匹配到 IP 地址为 192.168.1.254 的正则式是不正确的：（LCTT 译注：可以匹配到该 IP 地址，但是也有可能匹配到间隔符号不是点的类似格式）</p><pre><code>grep &#39;192.168.1.254&#39; /etc/hosts
</code></pre><p>三个点字符都需要转义：</p><pre><code>grep &#39;192\\.168\\.1\\.254&#39; /etc/hosts
</code></pre><p>下面的例子只能匹配出 IP 地址：（LCTT 译注：实际上由于 IP 地址中数字的取值范围，该正则表达式并不精确）</p><pre><code>egrep &#39;[[:digit:]]{1,3}\\.[[:digit:]]{1,3}\\.[[:digit:]]{1,3}\\.[[:digit:]]{1,3}&#39; 文件名
</code></pre><h3 id="怎么样搜索以-符号开头的匹配模式" tabindex="-1">怎么样搜索以 - 符号开头的匹配模式？ <a class="header-anchor" href="#怎么样搜索以-符号开头的匹配模式" aria-label="Permalink to “怎么样搜索以 - 符号开头的匹配模式？”">​</a></h3><p>要使用 -e 选项来搜索匹配 &#39;--test--&#39; 字符串，如果不使用 -e 选项，grep 命令会试图把 &#39;--test--&#39; 当作自己的选项参数来解析：</p><pre><code>grep -e &#39;--test--&#39; 文件名
</code></pre><h3 id="怎么使用-grep-的-或-匹配" tabindex="-1">怎么使用 grep 的“或”匹配? <a class="header-anchor" href="#怎么使用-grep-的-或-匹配" aria-label="Permalink to “怎么使用 grep 的“或”匹配?”">​</a></h3><p>使用如下的语法：</p><pre><code>grep -E &#39;word1|word2&#39; 文件名
或
egrep &#39;word1|word2&#39; 文件名
</code></pre><p>或者是</p><pre><code>grep &#39;word1\\|word2&#39; 文件名
</code></pre><h3 id="怎么使用-grep-的-和-匹配" tabindex="-1">怎么使用 grep 的“和”匹配? <a class="header-anchor" href="#怎么使用-grep-的-和-匹配" aria-label="Permalink to “怎么使用 grep 的“和”匹配?”">​</a></h3><p>使用下面的语法来显示既包含 &#39;word1&#39; 又包含 &#39;word2&#39; 的所有行</p><pre><code>grep &#39;word1&#39; 文件名 | grep &#39;word2&#39;
</code></pre><h3 id="怎么样使用序列检测" tabindex="-1">怎么样使用序列检测? <a class="header-anchor" href="#怎么样使用序列检测" aria-label="Permalink to “怎么样使用序列检测?”">​</a></h3><p>使用如下的语法，您可以检测一个字符在序列中重复出现次数：</p><pre><code>{N}
{N,}
{min,max}
</code></pre><p>要匹配字符 “v&quot; 出现两次：</p><pre><code>egrep &quot;v{2}&quot; 文件名
</code></pre><p>下面的命令能匹配到 &quot;col&quot; 和 &quot;cool&quot; ：</p><pre><code>egrep &#39;co{1,2}l&#39; 文件名
</code></pre><p>下面的命令将会匹配出至少有三个 &#39;c&#39; 字符的所有行。</p><pre><code>egrep &#39;c{3,}&#39; 文件名
</code></pre><p>下面的例子会匹配 91-1234567890（即二个数字-十个数字） 这种格式的手机号。</p><pre><code>grep &quot;[[:digit:]]\\{2\\}[ -]\\?[[:digit:]]\\{10\\}&quot; 文件名
</code></pre><h3 id="怎么样使-grep-命令高亮显示" tabindex="-1">怎么样使 grep 命令高亮显示？### <a class="header-anchor" href="#怎么样使-grep-命令高亮显示" aria-label="Permalink to “怎么样使 grep 命令高亮显示？###”">​</a></h3><p>使用如下的语法：</p><pre><code>grep --color 正则表达式 文件名
</code></pre><h3 id="怎么样仅仅只显示匹配出的字符-而不是匹配出的行" tabindex="-1">怎么样仅仅只显示匹配出的字符，而不是匹配出的行？ <a class="header-anchor" href="#怎么样仅仅只显示匹配出的字符-而不是匹配出的行" aria-label="Permalink to “怎么样仅仅只显示匹配出的字符，而不是匹配出的行？”">​</a></h3><p>使用如下语法：</p><pre><code>grep -o 正则表达式 文件名
</code></pre><h3 id="正则表达式限定符" tabindex="-1">正则表达式限定符### <a class="header-anchor" href="#正则表达式限定符" aria-label="Permalink to “正则表达式限定符###”">​</a></h3><div class="table-wrap"><table><thead><tr><th>限定符</th><th>描述</th></tr></thead><tbody><tr><td><code>.</code></td><td>匹配任意的一个字符。</td></tr><tr><td><code>?</code></td><td>匹配前面的子表达式，最多一次。</td></tr><tr><td><code>*</code></td><td>匹配前面的子表达式零次或多次。</td></tr><tr><td><code>+</code></td><td>匹配前面的子表达式一次或多次。</td></tr><tr><td><code>{N}</code></td><td>匹配前面的子表达式 N 次。</td></tr><tr><td><code>{N,}</code></td><td>匹配前面的子表达式 N 次到多次。</td></tr><tr><td><code>{N,M}</code></td><td>匹配前面的子表达式 N 到 M 次，至少 N 次至多 M 次。</td></tr><tr><td><code>-</code></td><td>只要不是在序列开始、结尾或者序列的结束点上，表示序列范围。</td></tr><tr><td><code>^</code></td><td>匹配一行开始的空字符串；也表示字符不在要匹配的列表中。</td></tr><tr><td><code>$</code></td><td>匹配一行末尾的空字符串。</td></tr><tr><td><code>\\b</code></td><td>匹配一个单词前后的空字符串。</td></tr><tr><td><code>\\B</code></td><td>匹配一个单词中间的空字符串。</td></tr><tr><td><code>\\&lt;</code></td><td>匹配单词前面的空字符串。</td></tr><tr><td><code>\\&gt;</code></td><td>匹配单词后面的空字符串。</td></tr></tbody></table></div><h4 id="grep-和-egrep" tabindex="-1">grep 和 egrep <a class="header-anchor" href="#grep-和-egrep" aria-label="Permalink to “grep 和 egrep”">​</a></h4><p>egrep 等同于 <strong>grep -E</strong> 。它会以扩展的正则表达式的模式来解释模式。下面来自 grep 的帮助页：</p><pre><code>基本的正则表达式元字符  ?、+、 {、 |、 ( 和 ) 已经失去了它们原来的意义，要使用的话用反斜线的版本 \\?、\\+、\\{、\\|、\\( 和 \\) 来代替。
传统的 egrep 并不支持 { 元字符，一些 egrep 的实现是以 \\{ 替代的，所以一个可移植的脚本应该避免在 grep -E 使用 { 符号，要匹配字面的 { 应该使用 [}]。 
GNU grep -E 试图支持传统的用法，如果 { 出在在无效的间隔规范字符串这前，它就会假定 { 不是特殊字符。
例如，grep -E &#39;{1&#39; 命令搜索包含 {1 两个字符的串，而不会报出正则表达式语法错误。
POSIX.2 标准允许这种操作的扩展，但在可移植脚本文件里应该避免这样使用。
</code></pre><p>参考:</p><ul><li>grep 和 regex 帮助手册页(7)</li><li>grep 的 info 页</li></ul><hr>`,98)),o("p",null,[e[1]||(e[1]=r("via: ",-1)),t(p,{href:"http://www.cyberciti.biz/faq/grep-regular-expressions/"},{default:d(()=>[...e[0]||(e[0]=[r("http://www.cyberciti.biz/faq/grep-regular-expressions/",-1)])]),_:1})]),o("p",null,[e[4]||(e[4]=r("作者：Vivek Gite 译者：",-1)),t(p,{href:"https://github.com/runningwater"},{default:d(()=>[...e[2]||(e[2]=[r("runningwater",-1)])]),_:1}),e[5]||(e[5]=r(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:d(()=>[...e[3]||(e[3]=[r("wxy",-1)])]),_:1})]),o("p",null,[e[8]||(e[8]=r("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[6]||(e[6]=[r("LCTT",-1)])]),_:1}),e[9]||(e[9]=r(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:d(()=>[...e[7]||(e[7]=[r("Linux中国",-1)])]),_:1}),e[10]||(e[10]=r(" 荣誉推出",-1))])])}const w=a(g,[["render",s]]);export{f as __pageData,w as default};
