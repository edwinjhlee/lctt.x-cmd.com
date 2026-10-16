import{_ as s,a0 as p,w as r,s as d,ao as c,I as n,x as e,a1 as m,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"fdupes：Linux中查找并删除重复文件的命令行工具 | LCTT x X-CMD","titleTemplate":false,"description":"fdupes：Linux中查找并删除重复文件的命令行工具 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"fdupes：Linux中查找并删除重复文件的命令行工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"fdupes：Linux中查找并删除重复文件的命令行工具 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150811 fdupes--A Comamndline Tool to Find and Delete Duplicate Files in Linux","title":"fdupes：Linux中查找并删除重复文件的命令行工具","tag":"201509","desc":""},"relativePath":"201509/20150811 fdupes--A Comamndline Tool to Find and Delete Duplicate Files in Linux.md","filePath":"[post].md"}'),l={name:"201509/20150811 fdupes--A Comamndline Tool to Find and Delete Duplicate Files in Linux.md"};function u(x,t,a,h,f,D){const i=p("Link");return r(),d("div",null,[t[17]||(t[17]=c(`<h1 id="fdupes-linux中查找并删除重复文件的命令行工具" tabindex="-1">fdupes：Linux中查找并删除重复文件的命令行工具 <a class="header-anchor" href="#fdupes-linux中查找并删除重复文件的命令行工具" aria-label="Permalink to “fdupes：Linux中查找并删除重复文件的命令行工具”">​</a></h1><p>对于大多数计算机用户而言，查找并替换重复的文件是一个常见的需求。查找并移除重复文件真是一项令人不胜其烦的工作，它耗时又耗力。但如果你的机器上跑着GNU/Linux，那么查找重复文件会变得十分简单，这多亏了<code>fdupes</code>工具。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/08/find-and-delete-duplicate-files-in-linux.png" alt="Find and Delete Duplicate Files in Linux"></p><p><em>fdupes——在Linux中查找并删除重复文件</em></p><h3 id="fdupes是啥东东" tabindex="-1">fdupes是啥东东？ <a class="header-anchor" href="#fdupes是啥东东" aria-label="Permalink to “fdupes是啥东东？”">​</a></h3><p><strong>fdupes</strong>是Linux下的一个工具，它由<strong>Adrian Lopez</strong>用C编程语言编写并基于MIT许可证发行，该应用程序可以在指定的目录及子目录中查找重复的文件。fdupes通过对比文件的MD5签名，以及逐字节比较文件来识别重复内容，fdupes有各种选项，可以实现对文件的列出、删除、替换为文件副本的硬链接等操作。</p><p>文件对比以下列顺序开始：</p><p><strong>大小对比 &gt; 部分 MD5 签名对比 &gt; 完整 MD5 签名对比 &gt; 逐字节对比</strong></p><h3 id="安装-fdupes-到-linux" tabindex="-1">安装 fdupes 到 Linux <a class="header-anchor" href="#安装-fdupes-到-linux" aria-label="Permalink to “安装 fdupes 到 Linux”">​</a></h3><p>在基于<strong>Debian</strong>的系统上，如<strong>Ubuntu</strong>和<strong>Linux Mint</strong>，安装最新版fdupes，用下面的命令手到擒来。</p><pre><code>$ sudo apt-get install fdupes
</code></pre>`,11)),n("p",null,[t[1]||(t[1]=e("在基于CentOS/RHEL和Fedora的系统上，你需要开启",-1)),m(i,{href:"https://linux.cn/article-2324-1.html"},{default:o(()=>[...t[0]||(t[0]=[e("epel仓库",-1)])]),_:1}),t[2]||(t[2]=e("来安装fdupes包。",-1))]),t[18]||(t[18]=n("pre",null,[n("code",null,`# yum install fdupes
# dnf install fdupes    [On Fedora 22 onwards]
`)],-1)),t[19]||(t[19]=n("p",null,[n("strong",null,"注意"),e("：自Fedora 22之后，默认的包管理器yum被dnf取代了。")],-1)),t[20]||(t[20]=n("h3",{id:"fdupes命令如何使用",tabindex:"-1"},[e("fdupes命令如何使用 "),n("a",{class:"header-anchor",href:"#fdupes命令如何使用","aria-label":"Permalink to “fdupes命令如何使用”"},"​")],-1)),t[21]||(t[21]=n("p",null,"1、 作为演示的目的，让我们来在某个目录（比如 tecmint）下创建一些重复文件，命令如下：",-1)),t[22]||(t[22]=n("pre",null,[n("code",null,'$ mkdir /home/"$USER"/Desktop/tecmint && cd /home/"$USER"/Desktop/tecmint && for i in {1..15}; do echo "I Love Tecmint. Tecmint is a very nice community of Linux Users." > tecmint${i}.txt ; done\n')],-1)),n("p",null,[t[4]||(t[4]=e("在执行以上命令后，让我们使用ls",-1)),m(i,{href:"https://linux.cn/article-5109-1.html"},{default:o(()=>[...t[3]||(t[3]=[e("命令",-1)])]),_:1}),t[5]||(t[5]=e("验证重复文件是否创建。",-1))]),t[23]||(t[23]=c(`<pre><code>$ ls -l

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
</code></pre><p>上面的脚本创建了<strong>15</strong>个文件，名称分别为tecmint1.txt，tecmint2.txt……tecmint15.txt，并且每个文件的数据相同，如</p><pre><code>&quot;I Love Tecmint. Tecmint is a very nice community of Linux Users.&quot;
</code></pre><p>2、 现在在<strong>tecmint</strong>文件夹内搜索重复的文件。</p><pre><code>$ fdupes /home/$USER/Desktop/tecmint 

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
</code></pre><p>3、 使用<strong>-r</strong>选项在每个目录包括其子目录中递归搜索重复文件。</p><p>它会递归搜索所有文件和文件夹，花一点时间来扫描重复文件，时间的长短取决于文件和文件夹的数量。在此其间，终端中会显示全部过程，像下面这样。</p><pre><code>$ fdupes -r /home

Progress [37780/54747] 69%
</code></pre><p>4、 使用<strong>-S</strong>选项来查看某个文件夹内找到的重复文件的大小。</p><pre><code>$ fdupes -S /home/$USER/Desktop/tecmint

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
</code></pre><p>5、 你可以同时使用<strong>-S</strong>和<strong>-r</strong>选项来查看所有涉及到的目录和子目录中的重复文件的大小，如下：</p><pre><code>$ fdupes -Sr /home/avi/Desktop/

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
</code></pre><p>6、 不同于在一个或所有文件夹内递归搜索，你可以选择按要求有选择性地在两个或三个文件夹内进行搜索。不必再提醒你了吧，如有需要，你可以使用<strong>-S</strong>和/或<strong>-r</strong>选项。</p><pre><code>$ fdupes /home/avi/Desktop/ /home/avi/Templates/
</code></pre><p>7、 要删除重复文件，同时保留一个副本，你可以使用<code>-d</code>选项。使用该选项，你必须额外小心，否则最终结果可能会是文件/数据的丢失。郑重提醒，此操作不可恢复。</p><pre><code>$ fdupes -d /home/$USER/Desktop/tecmint

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
</code></pre><p>你可能注意到了，所有重复的文件被列了出来，并给出删除提示，一个一个来，或者指定范围，或者一次性全部删除。你可以选择一个范围，就像下面这样，来删除指定范围内的文件。</p><pre><code>Set 1 of 1, preserve files [1 - 15, all]: 2-15

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
</code></pre><p>8、 从安全角度出发，你可能想要打印<code>fdupes</code>的输出结果到文件中，然后检查文本文件来决定要删除什么文件。这可以降低意外删除文件的风险。你可以这么做：</p><pre><code>$ fdupes -Sr /home &gt; /home/fdupes.txt
</code></pre><p><strong>注意</strong>：你应该替换<code>/home</code>为你想要的文件夹。同时，如果你想要递归搜索并打印大小，可以使用<code>-r</code>和<code>-S</code>选项。</p><p>9、 你可以使用<code>-f</code>选项来忽略每个匹配集中的首个文件。</p><p>首先列出该目录中的文件。</p><pre><code>$ ls -l /home/$USER/Desktop/tecmint

total 20
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9 (3rd copy).txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9 (4th copy).txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9 (another copy).txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9 (copy).txt
-rw-r--r-- 1 tecmint tecmint 65 Aug  8 11:22 tecmint9.txt
</code></pre><p>然后，忽略掉每个匹配集中的首个文件。</p><pre><code>$ fdupes -f /home/$USER/Desktop/tecmint

/home/tecmint/Desktop/tecmint9 (copy).txt
/home/tecmint/Desktop/tecmint9 (3rd copy).txt
/home/tecmint/Desktop/tecmint9 (another copy).txt
/home/tecmint/Desktop/tecmint9 (4th copy).txt
</code></pre><p>10、 检查已安装的fdupes版本。</p><pre><code>$ fdupes --version

fdupes 1.51
</code></pre><p>11、 如果你需要关于fdupes的帮助，可以使用<code>-h</code>开关。</p><pre><code>$ fdupes -h

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
</code></pre><p>到此为止了。让我知道你以前怎么在Linux中查找并删除重复文件的吧？同时，也让我知道你关于这个工具的看法。在下面的评论部分中提供你有价值的反馈吧，别忘了为我们点赞并分享，帮助我们扩散哦。</p><p>我正在使用另外一个移除重复文件的工具，它叫<strong>fslint</strong>。很快就会把使用心得分享给大家哦，你们一定会喜欢看的。</p><hr>`,33)),n("p",null,[t[7]||(t[7]=e("via: ",-1)),m(i,{href:"http://www.tecmint.com/fdupes-find-and-delete-duplicate-files-in-linux/"},{default:o(()=>[...t[6]||(t[6]=[e("http://www.tecmint.com/fdupes-find-and-delete-duplicate-files-in-linux/",-1)])]),_:1})]),n("p",null,[t[10]||(t[10]=e("作者：",-1)),m(i,{href:"https://github.com/GOLinux"},{default:o(()=>[...t[8]||(t[8]=[e("GOLinux",-1)])]),_:1}),t[11]||(t[11]=e(" 校对：",-1)),m(i,{href:"https://github.com/wxy"},{default:o(()=>[...t[9]||(t[9]=[e("wxy",-1)])]),_:1})]),n("p",null,[t[14]||(t[14]=e("本文由 ",-1)),m(i,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[12]||(t[12]=[e("LCTT",-1)])]),_:1}),t[15]||(t[15]=e(" 原创翻译，",-1)),m(i,{href:"http://linux.cn/"},{default:o(()=>[...t[13]||(t[13]=[e("Linux中国",-1)])]),_:1}),t[16]||(t[16]=e(" 荣誉推出",-1))])])}const T=s(l,[["render",u]]);export{w as __pageData,T as default};
