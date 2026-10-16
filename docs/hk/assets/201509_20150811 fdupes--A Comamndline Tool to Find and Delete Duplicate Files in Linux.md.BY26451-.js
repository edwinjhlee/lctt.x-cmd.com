import{_ as s,a0 as p,w as r,s as d,ao as c,I as n,x as e,a1 as m,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"fdupes：Linux中查找並刪除重複文件的命令列工具 | LCTT x X-CMD","titleTemplate":false,"description":"fdupes：Linux中查找並刪除重複文件的命令列工具 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"fdupes：Linux中查找並刪除重複文件的命令列工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"fdupes：Linux中查找並刪除重複文件的命令列工具 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150811 fdupes--A Comamndline Tool to Find and Delete Duplicate Files in Linux","title":"fdupes：Linux中查找並刪除重複文件的命令列工具","tag":"201509","desc":""},"relativePath":"201509/20150811 fdupes--A Comamndline Tool to Find and Delete Duplicate Files in Linux.md","filePath":"[post].md"}'),l={name:"201509/20150811 fdupes--A Comamndline Tool to Find and Delete Duplicate Files in Linux.md"};function u(x,t,a,h,f,D){const i=p("Link");return r(),d("div",null,[t[17]||(t[17]=c(`<h1 id="fdupes-linux中查找並刪除重複文件的命令列工具" tabindex="-1">fdupes：Linux中查找並刪除重複文件的命令列工具 <a class="header-anchor" href="#fdupes-linux中查找並刪除重複文件的命令列工具" aria-label="Permalink to “fdupes：Linux中查找並刪除重複文件的命令列工具”">​</a></h1><p>對於大多數計算機用户而言，查找並替換重複的文件是一個常見的需求。查找並移除重複文件真是一項令人不勝其煩的工作，它耗時又耗力。但如果你的機器上跑着GNU/Linux，那麼查找重複文件會變得十分簡單，這多虧了<code>fdupes</code>工具。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/08/find-and-delete-duplicate-files-in-linux.png" alt="Find and Delete Duplicate Files in Linux"></p><p><em>fdupes——在Linux中查找並刪除重複文件</em></p><h3 id="fdupes是啥東東" tabindex="-1">fdupes是啥東東？ <a class="header-anchor" href="#fdupes是啥東東" aria-label="Permalink to “fdupes是啥東東？”">​</a></h3><p><strong>fdupes</strong>是Linux下的一個工具，它由<strong>Adrian Lopez</strong>用C編程語言編寫並基於MIT許可證發行，該應用程序可以在指定的目錄及子目錄中查找重複的文件。fdupes通過對比文件的MD5簽名，以及逐字節比較文件來識別重複內容，fdupes有各種選項，可以實現對文件的列出、刪除、替換為文件副本的硬鏈接等操作。</p><p>文件對比以下列順序開始：</p><p><strong>大小對比 &gt; 部分 MD5 簽名對比 &gt; 完整 MD5 簽名對比 &gt; 逐字節對比</strong></p><h3 id="安裝-fdupes-到-linux" tabindex="-1">安裝 fdupes 到 Linux <a class="header-anchor" href="#安裝-fdupes-到-linux" aria-label="Permalink to “安裝 fdupes 到 Linux”">​</a></h3><p>在基於<strong>Debian</strong>的系統上，如<strong>Ubuntu</strong>和<strong>Linux Mint</strong>，安裝最新版fdupes，用下面的命令手到擒來。</p><pre><code>$ sudo apt-get install fdupes
</code></pre>`,11)),n("p",null,[t[1]||(t[1]=e("在基於CentOS/RHEL和Fedora的系統上，你需要開啓",-1)),m(i,{href:"https://linux.cn/article-2324-1.html"},{default:o(()=>[...t[0]||(t[0]=[e("epel倉庫",-1)])]),_:1}),t[2]||(t[2]=e("來安裝fdupes包。",-1))]),t[18]||(t[18]=n("pre",null,[n("code",null,`# yum install fdupes
# dnf install fdupes    [On Fedora 22 onwards]
`)],-1)),t[19]||(t[19]=n("p",null,[n("strong",null,"注意"),e("：自Fedora 22之後，默認的包管理器yum被dnf取代了。")],-1)),t[20]||(t[20]=n("h3",{id:"fdupes命令如何使用",tabindex:"-1"},[e("fdupes命令如何使用 "),n("a",{class:"header-anchor",href:"#fdupes命令如何使用","aria-label":"Permalink to “fdupes命令如何使用”"},"​")],-1)),t[21]||(t[21]=n("p",null,"1、 作為演示的目的，讓我們來在某個目錄（比如 tecmint）下創建一些重複文件，命令如下：",-1)),t[22]||(t[22]=n("pre",null,[n("code",null,'$ mkdir /home/"$USER"/Desktop/tecmint && cd /home/"$USER"/Desktop/tecmint && for i in {1..15}; do echo "I Love Tecmint. Tecmint is a very nice community of Linux Users." > tecmint${i}.txt ; done\n')],-1)),n("p",null,[t[4]||(t[4]=e("在執行以上命令後，讓我們使用ls",-1)),m(i,{href:"https://linux.cn/article-5109-1.html"},{default:o(()=>[...t[3]||(t[3]=[e("命令",-1)])]),_:1}),t[5]||(t[5]=e("驗證重複文件是否創建。",-1))]),t[23]||(t[23]=c(`<pre><code>$ ls -l

total 60
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint10.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint11.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint12.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint13.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint14.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint15.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint1.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint2.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint3.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint4.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint5.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint6.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint7.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint8.txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9.txt
</code></pre><p>上面的腳本創建了<strong>15</strong>個文件，名稱分別為tecmint1.txt，tecmint2.txt……tecmint15.txt，並且每個文件的數據相同，如</p><pre><code>&quot;I Love Tecmint. Tecmint is a very nice community of Linux Users.&quot;
</code></pre><p>2、 現在在<strong>tecmint</strong>文件夾內搜索重複的文件。</p><pre><code>$ fdupes /home/$USER/Desktop/tecmint 

/home/tecmint/Desktop/tecmint/tecmint13.txt
/home/tecmint/Desktop/tecmint/tecmint8.txt
/home/tecmint/Desktop/tecmint/tecmint11.txt
/home/tecmint/Desktop/tecmint/tecmint3.txt
/home/tecmint/Desktop/tecmint/tecmint4.txt
/home/tecmint/Desktop/tecmint/tecmint6.txt
/home/tecmint/Desktop/tecmint/tecmint7.txt
/home/tecmint/Desktop/tecmint/tecmint9.txt
/home/tecmint/Desktop/tecmint/tecmint10.txt
/home/tecmint/Desktop/tecmint/tecmint2.txt
/home/tecmint/Desktop/tecmint/tecmint5.txt
/home/tecmint/Desktop/tecmint/tecmint14.txt
/home/tecmint/Desktop/tecmint/tecmint1.txt
/home/tecmint/Desktop/tecmint/tecmint15.txt
/home/tecmint/Desktop/tecmint/tecmint12.txt
</code></pre><p>3、 使用<strong>-r</strong>選項在每個目錄包括其子目錄中遞歸搜索重複文件。</p><p>它會遞歸搜索所有文件和文件夾，花一點時間來掃描重複文件，時間的長短取決於文件和文件夾的數量。在此其間，終端中會顯示全部過程，像下面這樣。</p><pre><code>$ fdupes -r /home

Progress [37780/54747] 69%
</code></pre><p>4、 使用<strong>-S</strong>選項來查看某個文件夾內找到的重複文件的大小。</p><pre><code>$ fdupes -S /home/$USER/Desktop/tecmint

65 bytes each:                          
/home/tecmint/Desktop/tecmint/tecmint13.txt
/home/tecmint/Desktop/tecmint/tecmint8.txt
/home/tecmint/Desktop/tecmint/tecmint11.txt
/home/tecmint/Desktop/tecmint/tecmint3.txt
/home/tecmint/Desktop/tecmint/tecmint4.txt
/home/tecmint/Desktop/tecmint/tecmint6.txt
/home/tecmint/Desktop/tecmint/tecmint7.txt
/home/tecmint/Desktop/tecmint/tecmint9.txt
/home/tecmint/Desktop/tecmint/tecmint10.txt
/home/tecmint/Desktop/tecmint/tecmint2.txt
/home/tecmint/Desktop/tecmint/tecmint5.txt
/home/tecmint/Desktop/tecmint/tecmint14.txt
/home/tecmint/Desktop/tecmint/tecmint1.txt
/home/tecmint/Desktop/tecmint/tecmint15.txt
/home/tecmint/Desktop/tecmint/tecmint12.txt
</code></pre><p>5、 你可以同時使用<strong>-S</strong>和<strong>-r</strong>選項來查看所有涉及到的目錄和子目錄中的重複文件的大小，如下：</p><pre><code>$ fdupes -Sr /home/avi/Desktop/

65 bytes each:                          
/home/tecmint/Desktop/tecmint/tecmint13.txt
/home/tecmint/Desktop/tecmint/tecmint8.txt
/home/tecmint/Desktop/tecmint/tecmint11.txt
/home/tecmint/Desktop/tecmint/tecmint3.txt
/home/tecmint/Desktop/tecmint/tecmint4.txt
/home/tecmint/Desktop/tecmint/tecmint6.txt
/home/tecmint/Desktop/tecmint/tecmint7.txt
/home/tecmint/Desktop/tecmint/tecmint9.txt
/home/tecmint/Desktop/tecmint/tecmint10.txt
/home/tecmint/Desktop/tecmint/tecmint2.txt
/home/tecmint/Desktop/tecmint/tecmint5.txt
/home/tecmint/Desktop/tecmint/tecmint14.txt
/home/tecmint/Desktop/tecmint/tecmint1.txt
/home/tecmint/Desktop/tecmint/tecmint15.txt
/home/tecmint/Desktop/tecmint/tecmint12.txt

107 bytes each:
/home/tecmint/Desktop/resume_files/r-csc.html
/home/tecmint/Desktop/resume_files/fc.html
</code></pre><p>6、 不同於在一個或所有文件夾內遞歸搜索，你可以選擇按要求有選擇性地在兩個或三個文件夾內進行搜索。不必再提醒你了吧，如有需要，你可以使用<strong>-S</strong>和/或<strong>-r</strong>選項。</p><pre><code>$ fdupes /home/avi/Desktop/ /home/avi/Templates/
</code></pre><p>7、 要刪除重複文件，同時保留一個副本，你可以使用<code>-d</code>選項。使用該選項，你必須額外小心，否則最終結果可能會是文件/數據的丟失。鄭重提醒，此操作不可恢復。</p><pre><code>$ fdupes -d /home/$USER/Desktop/tecmint

[1] /home/tecmint/Desktop/tecmint/tecmint13.txt
[2] /home/tecmint/Desktop/tecmint/tecmint8.txt
[3] /home/tecmint/Desktop/tecmint/tecmint11.txt
[4] /home/tecmint/Desktop/tecmint/tecmint3.txt
[5] /home/tecmint/Desktop/tecmint/tecmint4.txt
[6] /home/tecmint/Desktop/tecmint/tecmint6.txt
[7] /home/tecmint/Desktop/tecmint/tecmint7.txt
[8] /home/tecmint/Desktop/tecmint/tecmint9.txt
[9] /home/tecmint/Desktop/tecmint/tecmint10.txt
[10] /home/tecmint/Desktop/tecmint/tecmint2.txt
[11] /home/tecmint/Desktop/tecmint/tecmint5.txt
[12] /home/tecmint/Desktop/tecmint/tecmint14.txt
[13] /home/tecmint/Desktop/tecmint/tecmint1.txt
[14] /home/tecmint/Desktop/tecmint/tecmint15.txt
[15] /home/tecmint/Desktop/tecmint/tecmint12.txt

Set 1 of 1, preserve files [1 - 15, all]: 
</code></pre><p>你可能注意到了，所有重複的文件被列了出來，並給出刪除提示，一個一個來，或者指定範圍，或者一次性全部刪除。你可以選擇一個範圍，就像下面這樣，來刪除指定範圍內的文件。</p><pre><code>Set 1 of 1, preserve files [1 - 15, all]: 2-15

   [-] /home/tecmint/Desktop/tecmint/tecmint13.txt
   [+] /home/tecmint/Desktop/tecmint/tecmint8.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint11.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint3.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint4.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint6.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint7.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint9.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint10.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint2.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint5.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint14.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint1.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint15.txt
   [-] /home/tecmint/Desktop/tecmint/tecmint12.txt
</code></pre><p>8、 從安全角度出發，你可能想要打印<code>fdupes</code>的輸出結果到文件中，然後檢查文本文件來決定要刪除什麼文件。這可以降低意外刪除文件的風險。你可以這麼做：</p><pre><code>$ fdupes -Sr /home &gt; /home/fdupes.txt
</code></pre><p><strong>注意</strong>：你應該替換<code>/home</code>為你想要的文件夾。同時，如果你想要遞歸搜索並打印大小，可以使用<code>-r</code>和<code>-S</code>選項。</p><p>9、 你可以使用<code>-f</code>選項來忽略每個匹配集中的首個文件。</p><p>首先列出該目錄中的文件。</p><pre><code>$ ls -l /home/$USER/Desktop/tecmint

total 20
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9 (3rd copy).txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9 (4th copy).txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9 (another copy).txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9 (copy).txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9.txt
</code></pre><p>然後，忽略掉每個匹配集中的首個文件。</p><pre><code>$ fdupes -f /home/$USER/Desktop/tecmint

/home/tecmint/Desktop/tecmint9 (copy).txt
/home/tecmint/Desktop/tecmint9 (3rd copy).txt
/home/tecmint/Desktop/tecmint9 (another copy).txt
/home/tecmint/Desktop/tecmint9 (4th copy).txt
</code></pre><p>10、 檢查已安裝的fdupes版本。</p><pre><code>$ fdupes --version

fdupes 1.51
</code></pre><p>11、 如果你需要關於fdupes的幫助，可以使用<code>-h</code>開關。</p><pre><code>$ fdupes -h

Usage: fdupes [options] DIRECTORY...

 -r --recurse     	for every directory given follow subdirectories
                  	encountered within
 -R --recurse:    	for each directory given after this option follow
                  	subdirectories encountered within (note the &#39;:&#39; at
                  	the end of the option, manpage for more details)
 -s --symlinks    	follow symlinks
 -H --hardlinks   	normally, when two or more files point to the same
                  	disk area they are treated as non-duplicates; this
                  	option will change this behavior
 -n --noempty     	exclude zero-length files from consideration
 -A --nohidden    	exclude hidden files from consideration
 -f --omitfirst   	omit the first file in each set of matches
 -1 --sameline    	list each set of matches on a single line
 -S --size        	show size of duplicate files
 -m --summarize   	summarize dupe information
 -q --quiet       	hide progress indicator
 -d --delete      	prompt user for files to preserve and delete all
                  	others; important: under particular circumstances,
                  	data may be lost when using this option together
                  	with -s or --symlinks, or when specifying a
                  	particular directory more than once; refer to the
                  	fdupes documentation for additional information
 -N --noprompt    	together with --delete, preserve the first file in
                  	each set of duplicates and delete the rest without
                  	prompting the user
 -v --version     	display fdupes version
 -h --help        	display this help message
</code></pre><p>到此為止了。讓我知道你以前怎麼在Linux中查找並刪除重複文件的吧？同時，也讓我知道你關於這個工具的看法。在下面的評論部分中提供你有價值的反饋吧，別忘了為我們點贊並分享，幫助我們擴散哦。</p><p>我正在使用另外一個移除重複文件的工具，它叫<strong>fslint</strong>。很快就會把使用心得分享給大家哦，你們一定會喜歡看的。</p><hr>`,33)),n("p",null,[t[7]||(t[7]=e("via: ",-1)),m(i,{href:"http://www.tecmint.com/fdupes-find-and-delete-duplicate-files-in-linux/"},{default:o(()=>[...t[6]||(t[6]=[e("http://www.tecmint.com/fdupes-find-and-delete-duplicate-files-in-linux/",-1)])]),_:1})]),n("p",null,[t[10]||(t[10]=e("作者：",-1)),m(i,{href:"https://github.com/GOLinux"},{default:o(()=>[...t[8]||(t[8]=[e("GOLinux",-1)])]),_:1}),t[11]||(t[11]=e(" 校對：",-1)),m(i,{href:"https://github.com/wxy"},{default:o(()=>[...t[9]||(t[9]=[e("wxy",-1)])]),_:1})]),n("p",null,[t[14]||(t[14]=e("本文由 ",-1)),m(i,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[12]||(t[12]=[e("LCTT",-1)])]),_:1}),t[15]||(t[15]=e(" 原創翻譯，",-1)),m(i,{href:"http://linux.cn/"},{default:o(()=>[...t[13]||(t[13]=[e("Linux中國",-1)])]),_:1}),t[16]||(t[16]=e(" 榮譽推出",-1))])])}const T=s(l,[["render",u]]);export{w as __pageData,T as default};
