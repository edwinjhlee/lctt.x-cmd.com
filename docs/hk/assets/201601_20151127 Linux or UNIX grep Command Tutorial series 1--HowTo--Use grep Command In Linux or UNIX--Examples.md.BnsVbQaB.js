import{_ as t,a0 as i,w as d,s,ao as l,I as a,x as r,a1 as o,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"grep 命令系列：如何在 Linux/UNIX 中使用 grep 命令 | LCTT x X-CMD","titleTemplate":false,"description":"grep 命令系列：如何在 Linux/UNIX 中使用 grep 命令 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"grep 命令系列：如何在 Linux/UNIX 中使用 grep 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"grep 命令系列：如何在 Linux/UNIX 中使用 grep 命令 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151127 Linux or UNIX grep Command Tutorial series 1--HowTo--Use grep Command In Linux or UNIX--Examples","title":"grep 命令系列：如何在 Linux/UNIX 中使用 grep 命令","tag":"201601","desc":""},"relativePath":"201601/20151127 Linux or UNIX grep Command Tutorial series 1--HowTo--Use grep Command In Linux or UNIX--Examples.md","filePath":"[post].md"}'),g={name:"201601/20151127 Linux or UNIX grep Command Tutorial series 1--HowTo--Use grep Command In Linux or UNIX--Examples.md"};function c(m,e,u,x,h,b){const p=i("Link");return d(),s("div",null,[e[13]||(e[13]=l(`<h1 id="grep-命令系列-如何在-linux-unix-中使用-grep-命令" tabindex="-1">grep 命令系列：如何在 Linux/UNIX 中使用 grep 命令 <a class="header-anchor" href="#grep-命令系列-如何在-linux-unix-中使用-grep-命令" aria-label="Permalink to “grep 命令系列：如何在 Linux/UNIX 中使用 grep 命令”">​</a></h1><p>我該怎樣在 Linux、Apple OS X 及其他類 UNIX 系統中使用 grep 命令，你能給我展示一些簡單的例子嗎？</p><p>grep 命令用來搜索文本，或從給定的文件中搜索行內包含了給定字符串或單詞的文件。通常來説，grep 顯示匹配到的行。使用 grep 來搜索包括一個或多個正則表達式匹配到的文本行，然後只顯示匹配到的行。grep 被視作在 Linux/ Unix 系統中最有用的命令之一。</p><h3 id="你知道嗎" tabindex="-1">你知道嗎 <a class="header-anchor" href="#你知道嗎" aria-label="Permalink to “你知道嗎”">​</a></h3><p>grep 這個名字，來源於一個 Unix/Linux 中的古老的文本編輯器 ed 中執行相似操作的命令：</p><pre><code>g/re/p
</code></pre><h3 id="grep-命令的語法" tabindex="-1">grep 命令的語法 <a class="header-anchor" href="#grep-命令的語法" aria-label="Permalink to “grep 命令的語法”">​</a></h3><p>語法如下所示:</p><pre><code>grep &#39;word&#39; 文件名
grep &#39;word&#39; 文件1 文件2 文件3
grep &#39;字符串1 字符串2&#39;  文件名
cat 某個文件 | grep &#39;某個東西&#39;
command | grep &#39;某個東西&#39;
command 選項1 | grep &#39;數據&#39;
grep --color &#39;數據&#39; 文件名
</code></pre><p>###怎麼樣使用 grep 來搜索一個文件###</p><p>搜索 /etc/passwd 文件下的 boo 用户,輸入:</p><pre><code>$ grep boo /etc/passwd
</code></pre><p>輸出內容:</p><pre><code>foo:x:1000:1000:foo,,,:/home/foo:/bin/ksh
</code></pre><p>可以使用 grep 去強制忽略大小寫。例如，使用 -i 選項可以匹配 boo, Boo, BOO 和其他組合：</p><pre><code>$ grep -i &quot;boo&quot; /etc/passwd
</code></pre><h3 id="遞歸使用-grep" tabindex="-1">遞歸使用 grep <a class="header-anchor" href="#遞歸使用-grep" aria-label="Permalink to “遞歸使用 grep”">​</a></h3><p>你可以遞歸地使用 grep 進行搜索。例如，在文件目錄下面搜索所有包含字符串“192.168.1.5”的文件</p><pre><code>$ grep -r &quot;192.168.1.5&quot; /etc/
</code></pre><p>或者是：</p><pre><code>$ grep -R &quot;192.168.1.5&quot; /etc/
</code></pre><p>示例輸出:</p><pre><code>/etc/ppp/options:# ms-wins 192.168.1.50
/etc/ppp/options:# ms-wins 192.168.1.51
/etc/NetworkManager/system-connections/Wired connection 1:addresses1=192.168.1.5;24;192.168.1.2;
</code></pre><p>你會看到搜索到 192.168.1.5 的結果每一行都前綴以找到匹配的文件名（例如：/etc/ppp/options）。輸出之中包含的文件名可以加 -h 選項來禁止輸出：</p><pre><code>$ grep -h -R &quot;192.168.1.5&quot; /etc/
</code></pre><p>或者</p><pre><code>$ grep -hR &quot;192.168.1.5&quot; /etc/
</code></pre><p>示例輸出:</p><pre><code># ms-wins 192.168.1.50
# ms-wins 192.168.1.51
addresses1=192.168.1.5;24;192.168.1.2;
</code></pre><h3 id="使用-grep-去搜索文本" tabindex="-1">使用 grep 去搜索文本 <a class="header-anchor" href="#使用-grep-去搜索文本" aria-label="Permalink to “使用 grep 去搜索文本”">​</a></h3><p>當你搜索 boo 時，grep 命令將會匹配 fooboo，boo123, barfoo35 和其他所有包含 boo 的字符串，你可以使用 -w 選項去強制只輸出那些僅僅包含那個整個單詞的行（LCTT譯註：即該字符串兩側是英文單詞分隔符，如空格，標點符號，和末端等，因此對中文這種沒有斷字符號的語言並不適用。）。</p><pre><code>$ grep -w &quot;boo&quot; file
</code></pre><h3 id="使用-grep-命令去搜索兩個不同的單詞" tabindex="-1">使用 grep 命令去搜索兩個不同的單詞 <a class="header-anchor" href="#使用-grep-命令去搜索兩個不同的單詞" aria-label="Permalink to “使用 grep 命令去搜索兩個不同的單詞”">​</a></h3><p>使用 egrep 命令如下:</p><pre><code>$ egrep -w &#39;word1|word2&#39; /path/to/file
</code></pre><p>（LCTT 譯註：這裏使用到了正則表達式，因此使用的是 egrep 命令，即擴展的 grep 命令。）</p><h3 id="統計文本匹配到的行數" tabindex="-1">統計文本匹配到的行數 <a class="header-anchor" href="#統計文本匹配到的行數" aria-label="Permalink to “統計文本匹配到的行數”">​</a></h3><p>grep 命令可以通過加 -c 參數顯示每個文件中匹配到的次數：</p><pre><code>$ grep -c &#39;word&#39; /path/to/file
</code></pre><p>傳遞 -n 選項可以輸出的行前加入匹配到的行的行號：</p><pre><code>$ grep -n &#39;root&#39; /etc/passwd
</code></pre><p>示例輸出:</p><pre><code>1:root:x:0:0:root:/root:/bin/bash
1042:rootdoor:x:0:0:rootdoor:/home/rootdoor:/bin/csh
3319:initrootapp:x:0:0:initrootapp:/home/initroot:/bin/ksh
</code></pre><h3 id="反轉匹配-不匹配" tabindex="-1">反轉匹配（不匹配） <a class="header-anchor" href="#反轉匹配-不匹配" aria-label="Permalink to “反轉匹配（不匹配）”">​</a></h3><p>可以使用 -v 選項來輸出不包含匹配項的內容，輸出內容僅僅包含那些不含給定單詞的行，例如輸出所有不包含 bar 單詞的行：</p><pre><code>$ grep -v bar /path/to/file
</code></pre><h3 id="unix-linux-管道與-grep-命令" tabindex="-1">UNIX/Linux 管道與 grep 命令 <a class="header-anchor" href="#unix-linux-管道與-grep-命令" aria-label="Permalink to “UNIX/Linux 管道與 grep 命令”">​</a></h3><p>grep 常常與管道一起使用，在這個例子中，顯示硬盤設備的名字：</p><pre><code># dmesg | egrep &#39;(s|h)d[a-z]&#39;
</code></pre><p>顯示 CPU 型號：</p><pre><code># cat /proc/cpuinfo | grep -i &#39;Model&#39;
</code></pre><p>然而，以上命令也可以按照以下方法使用，不使用管道:</p><pre><code># grep -i &#39;Model&#39; /proc/cpuinfo
</code></pre><p>示例輸出:</p><pre><code>model		: 30
model name	: Intel(R) Core(TM) i7 CPU       Q 820  @ 1.73GHz
model		: 30
model name	: Intel(R) Core(TM) i7 CPU       Q 820  @ 1.73GHz
</code></pre><h3 id="如何僅僅顯示匹配到內容的文件名字" tabindex="-1">如何僅僅顯示匹配到內容的文件名字? <a class="header-anchor" href="#如何僅僅顯示匹配到內容的文件名字" aria-label="Permalink to “如何僅僅顯示匹配到內容的文件名字?”">​</a></h3><p>使用 -l 選項去顯示那些文件內容中包含 main() 的文件名：</p><pre><code>$ grep -l &#39;main&#39; *.c
</code></pre><p>最後，你可以強制 grep 以彩色輸出：</p><pre><code>$ grep --color vivek /etc/passwd
</code></pre><p>示例輸出：</p><p><img src="http://files.cyberciti.biz/uploads/faq/2007/08/grep_command_examples.png" alt="Grep command in action"></p><hr>`,63)),a("p",null,[e[1]||(e[1]=r("via: ",-1)),o(p,{href:"http://www.cyberciti.biz/faq/howto-use-grep-command-in-linux-unix/"},{default:n(()=>[...e[0]||(e[0]=[r("http://www.cyberciti.biz/faq/howto-use-grep-command-in-linux-unix/",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=r("作者：Vivek Gite 譯者：",-1)),o(p,{href:"https://github.com/zky001"},{default:n(()=>[...e[2]||(e[2]=[r("zky001",-1)])]),_:1}),e[5]||(e[5]=r(" 校對：",-1)),o(p,{href:"https://github.com/wxy"},{default:n(()=>[...e[3]||(e[3]=[r("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=r("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[6]||(e[6]=[r("LCTT",-1)])]),_:1}),e[9]||(e[9]=r(" 原創編譯，",-1)),o(p,{href:"https://linux.cn/"},{default:n(()=>[...e[7]||(e[7]=[r("Linux中國",-1)])]),_:1}),e[10]||(e[10]=r(" 榮譽推出",-1))]),a("p",null,[e[12]||(e[12]=r("校對者ID： [1]:",-1)),o(p,{href:"http://bash.cyberciti.biz/guide/Pipes"},{default:n(()=>[...e[11]||(e[11]=[r("http://bash.cyberciti.biz/guide/Pipes",-1)])]),_:1})])])}const L=t(g,[["render",c]]);export{w as __pageData,L as default};
