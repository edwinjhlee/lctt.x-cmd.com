import{_ as i,a0 as o,w as l,s as d,ao as c,I as p,x as a,a1 as r,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"在linux中創建和解壓文檔的11個 tar 命令例子 | LCTT x X-CMD","titleTemplate":false,"description":"在linux中創建和解壓文檔的11個 tar 命令例子 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在linux中創建和解壓文檔的11個 tar 命令例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在linux中創建和解壓文檔的11個 tar 命令例子 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150225 10 quick tar command examples to create or extract archives in Linux","title":"在linux中創建和解壓文檔的11個 tar 命令例子","tag":"201503","desc":""},"relativePath":"201503/20150225 10 quick tar command examples to create or extract archives in Linux.md","filePath":"[post].md"}'),b={name:"201503/20150225 10 quick tar command examples to create or extract archives in Linux.md"};function s(x,t,u,z,h,f){const e=o("Link");return l(),d("div",null,[t[13]||(t[13]=c(`<h1 id="在linux中創建和解壓文檔的11個-tar-命令例子" tabindex="-1">在linux中創建和解壓文檔的11個 tar 命令例子 <a class="header-anchor" href="#在linux中創建和解壓文檔的11個-tar-命令例子" aria-label="Permalink to “在linux中創建和解壓文檔的11個 tar 命令例子”">​</a></h1><h3 id="linux中的tar命令" tabindex="-1">linux中的tar命令### <a class="header-anchor" href="#linux中的tar命令" aria-label="Permalink to “linux中的tar命令###”">​</a></h3><p>tar（磁帶歸檔）命令是linux系統中被經常用來將文件存入到一個歸檔文件中的命令。</p><p>其常見的文件擴展包括：.tar.gz 和 .tar.bz2, 分別表示通過了gzip或bzip算法進一步進行了壓縮。</p><p>在本教程中我們會管中窺豹一下在linux桌面或服務器版本中使用tar命令來處理一些創建和解壓歸檔文件的日常工作的例子。</p><h3 id="使用tar命令" tabindex="-1">使用tar命令### <a class="header-anchor" href="#使用tar命令" aria-label="Permalink to “使用tar命令###”">​</a></h3><p>tar命令在大部分linux系統默認情況下都是可用的，所以你不用單獨安裝該軟件。</p><blockquote><p>tar命令具有兩個壓縮格式，gzip和bzip，該命令的“z”選項用來指定gzip，“j”選項用來指定bzip。同時也可以創建非壓縮歸檔文件。</p></blockquote><h4 id="_1-解壓一個tar-gz歸檔" tabindex="-1">1.解壓一個tar.gz歸檔 <a class="header-anchor" href="#_1-解壓一個tar-gz歸檔" aria-label="Permalink to “1.解壓一個tar.gz歸檔”">​</a></h4><p>一般常見的用法是用來解壓歸檔文件，下面的命令將會把文件從一個tar.gz歸檔文件中解壓出來。</p><pre><code>$ tar -xvzf tarfile.tar.gz
</code></pre><p>這裏對這些參數做一個簡單解釋-</p><blockquote><p>x - 解壓文件</p></blockquote><blockquote><p>v - 冗長模式，在解壓每個文件時打印出文件的名稱。</p></blockquote><blockquote><p>z - 該文件是一個使用 gzip 壓縮的文件。</p></blockquote><blockquote><p>f - 使用接下來的tar歸檔來進行操作。</p></blockquote><p>這些就是一些需要記住的重要選項。</p><p><strong>解壓 tar.bz2/bzip 歸檔文件</strong></p><p>具有bz2擴展名的文件是使用bzip算法進行壓縮的，但是tar命令也可以對其進行處理，但是需要通過使用“j”選項來替換“z”選項。</p><pre><code>$ tar -xvjf archivefile.tar.bz2
</code></pre><h4 id="_2-將文件解壓到一個指定的目錄或路徑" tabindex="-1">2.將文件解壓到一個指定的目錄或路徑 <a class="header-anchor" href="#_2-將文件解壓到一個指定的目錄或路徑" aria-label="Permalink to “2.將文件解壓到一個指定的目錄或路徑”">​</a></h4><p>為了將文件解壓到一個指定的目錄中，使用“-C”選項來指定路徑，此處的“C”是大寫“C”。</p><pre><code>$ tar -xvzf abc.tar.gz -C /opt/folder/
</code></pre><p>然後，首先需要確認目標目錄是否存在，畢竟tar命令並不會為你創建目錄，所以如果目標目錄不存在的情況下該命令會失敗。</p><p>####3. 提取出單個文件 ####</p><p>為了從一個歸檔文件中提取出單個文件，只需要將文件名按照以下方式將其放置在命令後面。</p><pre><code>$ tar -xz -f abc.tar.gz &quot;./new/abc.txt&quot;
</code></pre><p>在上述命令中，可以按照以下方式來指定多個文件。</p><pre><code>$ tar -xz -f abc.tar.gz &quot;./new/cde.txt&quot; &quot;./new/abc.txt&quot;
</code></pre><h4 id="_4-使用通配符來解壓多個文件" tabindex="-1">4.使用通配符來解壓多個文件 <a class="header-anchor" href="#_4-使用通配符來解壓多個文件" aria-label="Permalink to “4.使用通配符來解壓多個文件”">​</a></h4><p>通配符可以用來解壓於給定通配符匹配的一批文件，例如所有以&quot;.txt&quot;作為擴展名的文件。</p><pre><code>$ tar -xz -f abc.tar.gz --wildcards &quot;*.txt&quot;
</code></pre><h4 id="_5-列出並檢索tar歸檔文件中的內容" tabindex="-1">5. 列出並檢索tar歸檔文件中的內容 <a class="header-anchor" href="#_5-列出並檢索tar歸檔文件中的內容" aria-label="Permalink to “5. 列出並檢索tar歸檔文件中的內容”">​</a></h4><p>如果你僅僅想要列出而不是解壓tar歸檔文件的中的內容，使用“-t”（test）選項， 下面的命令用來打印一個使用gzip壓縮過的tar歸檔文件中的內容。</p><pre><code>$ tar -tz -f abc.tar.gz
./new/
./new/cde.txt
./new/subdir/
./new/subdir/in.txt
./new/abc.txt
...
</code></pre><p>可以將輸出通過管道定向到grep來搜索一個文件，或者定向到less命令來瀏覽內容列表。 使用&quot;v&quot;冗長選項將會打印出每個文件的額外詳細信息。</p><p>對於 tar.bz2/bzip文件，需要使用&quot;j&quot;選項。</p><p>結合上述的命令和grep命令來檢索歸檔文件，如下所示。簡單吧！</p><pre><code>$ tar -tvz -f abc.tar.gz | grep abc.txt
-rw-rw-r-- enlightened/enlightened 0 2015-01-13 11:40 ./new/abc.txt
</code></pre><h4 id="_6-創建一個tar-tar-gz歸檔文件" tabindex="-1">6.創建一個tar/tar.gz歸檔文件 <a class="header-anchor" href="#_6-創建一個tar-tar-gz歸檔文件" aria-label="Permalink to “6.創建一個tar/tar.gz歸檔文件”">​</a></h4><p>現在我們已經學過了如何解壓一個tar歸檔文件，是時候開始創建一個新的tar歸檔文件了。tar命令可以用來將所選的文件或整個目錄放入到一個歸檔文件中，以下是相應的樣例。</p><p>下面的命令使用一個目錄來創建一個tar歸檔文件，它會將該目錄中所有的文件和子目錄都加入到歸檔文件中。</p><pre><code>$ tar -cvf abc.tar ./new/
./new/
./new/cde.txt
./new/abc.txt
</code></pre><p>上述命令不會創建一個壓縮的的歸檔文件，只是一個普通的歸檔文件，只是將多個文件放入到一個歸檔文件中並沒有真正地壓縮每個文件。</p><p>為了使用壓縮，可以分別使用“z”或“j”選項進行gzip或bzip壓縮算法。</p><pre><code>$ tar -cvzf abc.tar.gz ./new/
</code></pre><blockquote><p>文件的擴展名其實並不真正有什麼影響。“tar.gz” 和“tgz”是gzip壓縮算法壓縮文件的常見擴展名。 “tar.bz2”和“tbz”是bzip壓縮算法壓縮文件的常見擴展名（LCTT 譯註：歸檔是否是壓縮的和採用哪種壓縮方式並不取決於其擴展名，擴展名只是為了便於辨識。）。</p></blockquote><h4 id="_7-在添加文件之前進行確認" tabindex="-1">7. 在添加文件之前進行確認 <a class="header-anchor" href="#_7-在添加文件之前進行確認" aria-label="Permalink to “7. 在添加文件之前進行確認”">​</a></h4><p>一個有用的選項是“w”，該選項使得tar命令在添加每個文件到歸檔文件之前來讓用户進行確認，有時候這會很有用。</p><p>使用該選項時，只有用户輸入“y”時的文件才會被加入到歸檔文件中，如果你不輸入任何東西，其默認表示是一個“n”。</p><pre><code># 添加指定文件

$ tar -czw -f abc.tar.gz ./new/*
add ‘./new/abc.txt’?y
add ‘./new/cde.txt’?y
add ‘./new/newfile.txt’?n
add ‘./new/subdir’?y
add ‘./new/subdir/in.txt’?n

#現在列出所有被加入的文件

$ tar -t -f abc.tar.gz 
./new/abc.txt
./new/cde.txt
./new/subdir/
</code></pre><h4 id="_8-加入文件到存在的歸檔文件中" tabindex="-1">8. 加入文件到存在的歸檔文件中 <a class="header-anchor" href="#_8-加入文件到存在的歸檔文件中" aria-label="Permalink to “8. 加入文件到存在的歸檔文件中”">​</a></h4><p>“r”選項可以被用來將文件加入到已存在的歸檔文件中，而不用創建一個新的歸檔文件，下面是一個簡單的樣例：</p><pre><code>$ tar -rv -f abc.tar abc.txt
</code></pre><blockquote><p>文件並不能加入到已壓縮的歸檔文件中（gz 或 bzip）。文件只能被加入到普通的歸檔文件中。</p></blockquote><h4 id="_9-將文件加入到壓縮的歸檔文件中-tar-gz-tar-bz2" tabindex="-1">9. 將文件加入到壓縮的歸檔文件中（tar.gz/tar.bz2) <a class="header-anchor" href="#_9-將文件加入到壓縮的歸檔文件中-tar-gz-tar-bz2" aria-label="Permalink to “9. 將文件加入到壓縮的歸檔文件中（tar.gz/tar.bz2)”">​</a></h4><p>之前已經提到了不可能將文件加入到已壓縮的歸檔文件中，然而依然可以通過簡單的一些把戲來完成。使用gunzip命令來解壓縮歸檔文件，然後將文件加入到歸檔文件中後重新進行壓縮。</p><pre><code>$ gunzip archive.tar.gz
$ tar -rf archive.tar ./path/to/file
$ gzip archive.tar
</code></pre><p>對於bzip文件分別使用bzip2和bunzip2。</p><h4 id="_10-通過tar來進行備份" tabindex="-1">10.通過tar來進行備份 <a class="header-anchor" href="#_10-通過tar來進行備份" aria-label="Permalink to “10.通過tar來進行備份”">​</a></h4><p>一個真實的場景是在固定的時間間隔內來備份目錄，tar命令可以通過cron調度來實現這樣的一個備份，以下是一個樣例 ：</p><pre><code>$ tar -cvz -f archive-$(date +%Y%m%d).tar.gz ./new/
</code></pre><p>使用cron來運行上述的命令會保持創建類似以下名稱的備份文件 ：&#39;archive-20150218.tar.gz&#39;。</p><p>當然，需要確保日益增長的歸檔文件不會導致磁盤空間的溢出。</p><h4 id="_11-在創建歸檔文件時進行驗證" tabindex="-1">11. 在創建歸檔文件時進行驗證 <a class="header-anchor" href="#_11-在創建歸檔文件時進行驗證" aria-label="Permalink to “11. 在創建歸檔文件時進行驗證”">​</a></h4><p>&quot;W&quot;選項可以用來在創建歸檔文件之後進行驗證，以下是一個簡單例子。</p><pre><code>$ tar -cvW -f abc.tar ./new/
./new/
./new/cde.txt
./new/subdir/
./new/subdir/in.txt
./new/newfile.txt
./new/abc.txt
Verify ./new/
Verify ./new/cde.txt
Verify ./new/subdir/
Verify ./new/subdir/in.txt
Verify ./new/newfile.txt                                                                                                                              
Verify ./new/abc.txt
</code></pre><p>需要注意的是驗證動作不能在壓縮過的歸檔文件上進行，只能在非壓縮的tar歸檔文件上執行。</p><p>這次就先到此為止，可以通過“man tar”命令來查看tar命令的的手冊。</p><hr>`,70)),p("p",null,[t[1]||(t[1]=a("via: ",-1)),r(e,{href:"http://www.binarytides.com/linux-tar-command/"},{default:n(()=>[...t[0]||(t[0]=[a("http://www.binarytides.com/linux-tar-command/",-1)])]),_:1})]),p("p",null,[t[5]||(t[5]=a("作者：",-1)),r(e,{href:"https://plus.google.com/117145272367995638274/posts"},{default:n(()=>[...t[2]||(t[2]=[a("Silver Moon",-1)])]),_:1}),t[6]||(t[6]=a(" 譯者：",-1)),r(e,{href:"https://github.com/theo-l"},{default:n(()=>[...t[3]||(t[3]=[a("theo-l",-1)])]),_:1}),t[7]||(t[7]=a(" 校對：",-1)),r(e,{href:"https://github.com/wxy"},{default:n(()=>[...t[4]||(t[4]=[a("wxy",-1)])]),_:1})]),p("p",null,[t[10]||(t[10]=a("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...t[8]||(t[8]=[a("LCTT",-1)])]),_:1}),t[11]||(t[11]=a(" 原創翻譯，",-1)),r(e,{href:"http://linux.cn/"},{default:n(()=>[...t[9]||(t[9]=[a("Linux中國",-1)])]),_:1}),t[12]||(t[12]=a(" 榮譽推出",-1))])])}const _=i(b,[["render",s]]);export{w as __pageData,_ as default};
