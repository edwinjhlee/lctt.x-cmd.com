import{_ as n,a0 as o,w as l,s as d,ao as p,I as i,x as t,a1 as a,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const B=JSON.parse('{"title":"如何在Linux裏使用xargs命令 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux裏使用xargs命令 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux裏使用xargs命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux裏使用xargs命令 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20140928 How to use xargs command in Linux","title":"如何在Linux裏使用xargs命令","tag":"201411","desc":""},"relativePath":"201411/20140928 How to use xargs command in Linux.md","filePath":"[post].md"}'),x={name:"201411/20140928 How to use xargs command in Linux.md"};function g(f,e,m,u,h,c){const r=o("Link");return l(),d("div",null,[e[13]||(e[13]=p(`<h1 id="如何在linux裏使用xargs命令" tabindex="-1">如何在Linux裏使用xargs命令 <a class="header-anchor" href="#如何在linux裏使用xargs命令" aria-label="Permalink to “如何在Linux裏使用xargs命令”">​</a></h1><p>你是否遇到過這樣的情況，需要一遍又一遍地對多個文件執行同樣的操作？如果有過，那你肯定會深有感觸這是多麼的無聊和效率低下。還好有種簡單的方式，可以在基於Unix的操作系統中使用xargs命令解決這個煩惱。通過這個命令你可以有效地處理多個文件，節省你的時間和精力。在這篇教程中，你可以學到如何一次性對多個文件執行命令或腳本操作，再也不用擔心像單獨處理無數個日誌或數據文件那樣嚇人的任務了。</p><p>xargs命令有兩個要點。第一，你必須列出目標文件。第二，你必須指定對每個文件需要執行的命令或腳本。</p><p>這篇教程會涉及三個應用場景，xargs命令被用來處理分佈在不同目錄下的文件：</p><ol><li>計算所有文件的行數</li><li>打印指定文件的第一行</li><li>對每個文件執行一個自定義腳本</li></ol><p>請看下面這個叫xargstest的目錄（用tree命令以及-i和-f選項顯示了目錄樹結構，這樣可以避免縮進顯示而且每個文件都會帶有完整路徑）：</p><pre><code>$ tree -if xargstest/ 
</code></pre><p><img src="https://farm3.staticflickr.com/2942/15334985981_ce1a192def.jpg" alt=""></p><p>這六個文件的內容分別如下：</p><p><img src="https://farm4.staticflickr.com/3882/15346287662_a3084a8e4f_o.png" alt=""></p><p>這個<strong>xargstest</strong>目錄，以及它包含的子目錄和文件將用在下面的例子中。</p><h3 id="場景1-計算所有文件的行數" tabindex="-1">場景1：計算所有文件的行數 <a class="header-anchor" href="#場景1-計算所有文件的行數" aria-label="Permalink to “場景1：計算所有文件的行數”">​</a></h3><p>就像之前提到的，使用xargs命令的第一個要點是一個用來運行命令或腳本的文件列表。我們可以用find命令來確定和列出目標文件。選項<strong>-name &#39;file??&#39;</strong>指定了xargstest目錄下那些名字以&quot;file&quot;開頭並跟隨兩個任意字符的文件才是匹配的。這個搜索默認是遞歸的，意思是find命令會在xargstest和它的子目錄下搜索匹配的文件。</p><pre><code>$ find xargstest/ -name &#39;file??&#39; 
</code></pre><hr><pre><code>xargstest/dir3/file3B
xargstest/dir3/file3A
xargstest/dir1/file1A
xargstest/dir1/file1B
xargstest/dir2/file2B
xargstest/dir2/file2A
</code></pre><p>我們可以通過管道把結果發給sort命令讓文件名按順序排列：</p><pre><code>$ find xargstest/ -name &#39;file??&#39; | sort 
</code></pre><hr><pre><code>xargstest/dir1/file1A
xargstest/dir1/file1B
xargstest/dir2/file2A
xargstest/dir2/file2B
xargstest/dir3/file3A
xargstest/dir3/file3B
</code></pre><p>然後我們需要第二個要素，就是需要執行的命令。我們使用帶有-l選項的wc命令來計算每個文件包含的換行符數目（會在輸出的每一行的前面打印出來）：</p><pre><code>$ find xargstest/ -name &#39;file??&#39; | sort | xargs wc -l 
</code></pre><hr><pre><code> 1 xargstest/dir1/file1A
 2 xargstest/dir1/file1B
 3 xargstest/dir2/file2A
 4 xargstest/dir2/file2B
 5 xargstest/dir3/file3A
 6 xargstest/dir3/file3B
21 total
</code></pre><p>可以看到，不用對每個文件手動執行一次wc -l命令，而xargs命令可以讓你在一步裏完成所有操作。那些之前看起來無法完成的任務，例如單獨處理數百個文件，現在可以相當輕鬆地完成了。</p><h3 id="場景2-打印指定文件的第一行" tabindex="-1">場景2：打印指定文件的第一行 <a class="header-anchor" href="#場景2-打印指定文件的第一行" aria-label="Permalink to “場景2：打印指定文件的第一行”">​</a></h3><p>既然你已經有一些使用xargs命令的基礎，你可以自由選擇執行什麼命令。有時，你也許希望只對一部分文件執行操作而忽略其他的。在這種情況下，你可以使用find命令的-name選項以及?通配符（匹配任意單個字符）來選中特定文件並通過管道輸出給xargs命令。舉個例子，如果你想打印以“B”字符結尾的文件而忽略以“A”結尾的文件的第一行，可以使用下面的find、xargs和head命令組合來完成（head -n1會打印一個文件的第一行）：</p><pre><code>$ find xargstest/ -name &#39;file?B&#39; | sort | xargs head -n1 
</code></pre><hr><pre><code>==&gt; xargstest/dir1/file1B &lt;==
one

==&gt; xargstest/dir2/file2B &lt;==
one

==&gt; xargstest/dir3/file3B &lt;==
one
</code></pre><p>你將看到只有以“B”結尾的文件會被處理，而所有以“A”結尾的文件都被忽略了。</p><h3 id="場景3-對每個文件執行一個自定義腳本" tabindex="-1">場景3：對每個文件執行一個自定義腳本 <a class="header-anchor" href="#場景3-對每個文件執行一個自定義腳本" aria-label="Permalink to “場景3：對每個文件執行一個自定義腳本”">​</a></h3><p>最後，你也許希望對一些文件執行一個自定義腳本（例如Bash、Python或是Perl）。要做到這一點，只要簡單地用你的自定義腳本名字替換掉之前例子中的wc和head命令就好了：</p><pre><code>$ find xargstest/ -name &#39;file??&#39; | xargs myscript.sh 
</code></pre><p>自定義腳本<strong>myscript.sh</strong>需要寫成接受一個文件名作為參數並處理這個文件。上面的命令將為find命令找到的每個文件分別調用腳本。</p><p>注意一下上面的例子中的文件名並沒有包含空格。通常來説，在Linux環境下操作沒有空格的文件名會舒服很多。如果你實在是需要處理名字中帶有空格的文件，上邊的命令就不能用了，需要稍微處理一下來讓它可以被接受。這可以通過find命令的-print0選項（它會打印完整的文件名到標準輸出，並以空字符結尾），以及xargs命令的-0選項（它會以空字符作為字符串結束標記）來實現，就像下面的例子：</p><pre><code>$ find xargstest/ -name &#39;file*&#39; -print0 | xargs -0 myscript.sh 
</code></pre><p>注意一下，-name選項所跟的參數已經改為&#39;file*&#39;，意思是所有以&quot;file&quot;開頭而結尾可以是任意字符的文件都會被選中。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>在看完這篇教程後你應該會理解xargs命令的作用，以及如何應用到自己的工作中。很快你就可以有時間享受這個命令所帶來的高效率，而不用把你的時間耗費在一些重複的任務上了。想了解更詳細的信息以及更多的選項，你可以在終端中輸入&#39;man xargs&#39;命令來查看xargs的文檔。</p><hr>`,41)),i("p",null,[e[1]||(e[1]=t("via: ",-1)),a(r,{href:"http://xmodulo.com/xargs-command-linux.html"},{default:s(()=>[...e[0]||(e[0]=[t("http://xmodulo.com/xargs-command-linux.html",-1)])]),_:1})]),i("p",null,[e[5]||(e[5]=t("作者：",-1)),a(r,{href:"http://xmodulo.com/author/joshua"},{default:s(()=>[...e[2]||(e[2]=[t("Joshua Reed",-1)])]),_:1}),e[6]||(e[6]=t(" 譯者：",-1)),a(r,{href:"https://github.com/zpl1025"},{default:s(()=>[...e[3]||(e[3]=[t("zpl1025",-1)])]),_:1}),e[7]||(e[7]=t(" 校對：",-1)),a(r,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...e[4]||(e[4]=[t("Caroline",-1)])]),_:1})]),i("p",null,[e[10]||(e[10]=t("本文由 ",-1)),a(r,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原創翻譯，",-1)),a(r,{href:"http://linux.cn/"},{default:s(()=>[...e[9]||(e[9]=[t("Linux中國",-1)])]),_:1}),e[12]||(e[12]=t(" 榮譽推出",-1))])])}const C=n(x,[["render",g]]);export{B as __pageData,C as default};
