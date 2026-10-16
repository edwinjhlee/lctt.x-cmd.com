import{_ as l,a0 as p,w as a,s as o,ao as r,I as d,x as e,a1 as f,A as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"舉例説明Linux diff 命令 | LCTT x X-CMD","titleTemplate":false,"description":"舉例説明Linux diff 命令 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"舉例説明Linux diff 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"舉例説明Linux diff 命令 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Linux diff Command Explained With Examples","title":"舉例説明Linux diff 命令","tag":"201311","desc":""},"relativePath":"201311/Linux diff Command Explained With Examples.md","filePath":"[post].md"}'),s={name:"201311/Linux diff Command Explained With Examples.md"};function m(x,i,u,g,c,h){const n=p("Link");return a(),o("div",null,[i[14]||(i[14]=r(`<h1 id="舉例説明linux-diff-命令" tabindex="-1">舉例説明Linux diff 命令 <a class="header-anchor" href="#舉例説明linux-diff-命令" aria-label="Permalink to “舉例説明Linux diff 命令”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/11/linux-diff-command.png" alt=""></p><p>在比較文件的時候，通常會用基於GUI的軟件。很少有人真正會為了這個目的使用命令列工具。雖然説使用命令列來比較文件/目錄並不像一件小事兒那樣容易，但是如果你是一個Linux使用者，那麼我想你應該知道如何通過命令列比較文件，因為一旦使用了它，你會認為它絕對是一個快速的方法。</p><p>在本篇中，我們將通過一些實例來學習如何使用diff命令。</p><h3 id="linux-diff-命令" tabindex="-1">Linux diff 命令 <a class="header-anchor" href="#linux-diff-命令" aria-label="Permalink to “Linux diff 命令”">​</a></h3><p>讓我們通過一些實際的例子理解diff命令。</p><p>假設我們有兩個文件(file1 和 file2)：</p><pre><code>$ cat file1
Hi,
Hello,
How are you?
I am fine,
Thank you.


$ cat file2
Hello,
Hi,
How are you?
I am fine.
</code></pre><p>你可以看見兩個文件有些小的不同。現在，讓我們看看diff命令如何找出兩者的不同的。</p><p>像這樣運行diff命令:</p><pre><code>$ diff file1 file2
1d0
&lt; Hi, 
2a2 
&gt; Hi,
4,5c4
&lt; I am fine,
&lt; Thank you.
--- 
&gt; I am fine.
</code></pre><p>你可以看見diff後面跟了兩個文件的名字作為命令列的參數，並且它在輸出中生成了差異比較。輸出並不容易理解。理由是，這是被計算機使用的而不是為了人類。儘管如此，讓我們一步步解碼輸出：</p><p><strong>注意</strong> – 在下面的文本中，file1和file2將被當作舊文件和新文件。</p><pre><code>1d0
&lt; Hi,
</code></pre><p>這裏，1d0這一行意味着舊文件的第一行應該被刪除(d)以使兩個文件的第一行同步。舊文件中需要被刪除的行以&#39;&lt;&#39;標記。</p><pre><code>2a2
&gt; Hi,
</code></pre><p>這裏，2a2行意味着新文件中的第二行應該加到舊文件的第二行後。要添加的行顯示在輸出的下一行用&#39;&gt;&#39;標記。</p><pre><code>4,5c4
&lt; I am fine,
&lt; Thank you.
---
&gt; I am fine.
</code></pre><p>這裏，4,5c4這一行意味着在舊文件中的4到5行現在已被改變並且需要用新文件中的第4行代替。添加和刪除的行分別用&#39;&gt;&#39;和&#39;&lt;&#39;表示。</p><p>那麼，來總結一下,</p><ul><li>首先diff命令的第一個參數被視為舊文件而第二個參數被視為新文件。</li><li>像1d0、2a2、4,5c4這種表達式可以用語法解碼為 <strong>[舊文件的行號或者行的範圍][行為][新文件的行號或者行的範圍]</strong>。這裏的&#39;行為&#39;可以是追加,刪除或者改變替換。</li><li>&#39;&lt;&#39;代表刪除的行，而&#39;&gt;&#39;代表添加的行。</li></ul><p>除了文件外，diff命令還可以比較兩個目錄。讓我們通過一個例子學習。</p><p>這裏是&#39;new_dir&#39;目錄包含的內容:</p><pre><code>$ ls new_dir/
file file2 frnd frnd1.cpp log1.txt log3.txt log5.txt
file1 file name with spaces frnd1 frnd.cpp log2.txt log4.txt
</code></pre><p>這是&#39;orig_dir&#39;目錄含有的內容：(譯註：原文為and here are the contents of a directory named ‘old_dir’ ，其中&#39;old_dir&#39;應為筆誤。)</p><pre><code>$ ls orig_dir/
file1 file name with spaces frnd1 frnd.cpp log2.txt log4.txt test
file2 frnd frnd1.cpp log1.txt log3.txt log5.txt
</code></pre><p>下面是diff命令執行後的輸出：</p><pre><code>$ diff new_dir/ orig_dir/
Only in new_dir/: file
Only in orig_dir/: test
</code></pre><p>你可以看到當diff命令被用來比較這兩個目錄時，很容易就會顯示兩個文件中缺失的文件。</p><p>下面是一些在命令列下常用的選項:</p><h3 id="_1-用-i-忽略大小寫" tabindex="-1">1. 用 -i 忽略大小寫 <a class="header-anchor" href="#_1-用-i-忽略大小寫" aria-label="Permalink to “1. 用 -i 忽略大小寫”">​</a></h3><p>如果兩個文件含有相同的文本但是大小寫不同，diff命令仍會默認報告它不同。</p><p>比如:</p><pre><code>$ cat file1
HI

$ cat file2
hi

$ diff file1 file2
1c1
&lt; HI
---
&gt; hi
</code></pre><p>你可以看見diff命令在輸出中報告了大小寫不同。</p><p>要去除這個默認行為，使用-i選項。</p><p>以下是個例子:</p><pre><code>$ diff -i file1 file2
$
</code></pre><p>這樣你可以看到沒有生成輸出，這是當兩個文件相同時的默認行為。</p><h3 id="_2-用-s-選項報告兩個文件相同" tabindex="-1">2. 用 -s 選項報告兩個文件相同 <a class="header-anchor" href="#_2-用-s-選項報告兩個文件相同" aria-label="Permalink to “2. 用 -s 選項報告兩個文件相同”">​</a></h3><p>在例子1的後面，我們看到如果文件相同diff不會生成報告。雖然這個默認行為不錯但是它仍可能會造成很大疑惑，特別對於新手而言。因此，如果你像樣diff命令明確地報告兩個文件不同，那麼就使用-s命令選項。</p><p>來舉個例子:</p><pre><code>$ diff -is file1 file2
Files file1 and file2 are identical
</code></pre><p>你可以看到我加了-s選項在後面的例子中，這次diff命令會明確地報告兩個文件是相同的。</p><h3 id="_3-使用-b-忽略空格" tabindex="-1">3. 使用 -b 忽略空格 <a class="header-anchor" href="#_3-使用-b-忽略空格" aria-label="Permalink to “3. 使用 -b 忽略空格”">​</a></h3><p>另外一個常用的是diff報告文件存在不同數量的空格。</p><p>舉例説明：</p><pre><code>$ cat file1
Hi, how are you?

$ cat file2
Hi, how are  you?
</code></pre><p>觀察這兩個文件唯一的不同是file2中&#39;are&#39;和&#39;you&#39;之間額外的空格。現在，當使用diff命令比較兩個文件時，輸出如下：</p><pre><code>$ diff file1 file2
1c1
&lt; Hi, how are you?
---
&gt; Hi, how are  you?
</code></pre><p>因此你可以看到diff命令報告了不同。但是如果你想要忽略這些空格，使用 -b 選項。</p><pre><code>$ diff -b file1 file2
$
</code></pre><p>這樣你可以看到由於-b選項，diff命令報告這兩個文件是相同的。</p>`,53)),d("p",null,[i[1]||(i[1]=e("diff命令還提供了更多的命令列選項。閲讀",-1)),f(n,{href:"http://unixhelp.ed.ac.uk/CGI/man-cgi?diff"},{default:t(()=>[...i[0]||(i[0]=[e("man page",-1)])]),_:1}),i[2]||(i[2]=e("來獲取完整的列表。",-1))]),i[15]||(i[15]=d("hr",null,null,-1)),d("p",null,[i[4]||(i[4]=e("via: ",-1)),f(n,{href:"http://linoxide.com/linux-command/linux-diff-command-examples/"},{default:t(()=>[...i[3]||(i[3]=[e("http://linoxide.com/linux-command/linux-diff-command-examples/",-1)])]),_:1})]),d("p",null,[i[7]||(i[7]=e("譯者：",-1)),f(n,{href:"https://github.com/geekpi"},{default:t(()=>[...i[5]||(i[5]=[e("geekpi",-1)])]),_:1}),i[8]||(i[8]=e(" 校對：",-1)),f(n,{href:"https://github.com/carolinewuyan"},{default:t(()=>[...i[6]||(i[6]=[e("Caroline",-1)])]),_:1})]),d("p",null,[i[11]||(i[11]=e("本文由 ",-1)),f(n,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...i[9]||(i[9]=[e("LCTT",-1)])]),_:1}),i[12]||(i[12]=e(" 原創翻譯，",-1)),f(n,{href:"http://linux.cn/"},{default:t(()=>[...i[10]||(i[10]=[e("Linux中國",-1)])]),_:1}),i[13]||(i[13]=e(" 榮譽推出",-1))])])}const $=l(s,[["render",m]]);export{C as __pageData,$ as default};
