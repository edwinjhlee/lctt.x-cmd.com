import{_ as i,a0 as o,w as l,s as d,ao as c,I as p,x as a,a1 as r,A as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"在linux中创建和解压文档的11个 tar 命令例子 | LCTT x X-CMD","titleTemplate":false,"description":"在linux中创建和解压文档的11个 tar 命令例子 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在linux中创建和解压文档的11个 tar 命令例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在linux中创建和解压文档的11个 tar 命令例子 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150225 10 quick tar command examples to create or extract archives in Linux","title":"在linux中创建和解压文档的11个 tar 命令例子","tag":"201503","desc":""},"relativePath":"201503/20150225 10 quick tar command examples to create or extract archives in Linux.md","filePath":"[post].md"}'),b={name:"201503/20150225 10 quick tar command examples to create or extract archives in Linux.md"};function s(x,t,u,z,h,f){const e=o("Link");return l(),d("div",null,[t[13]||(t[13]=c(`<h1 id="在linux中创建和解压文档的11个-tar-命令例子" tabindex="-1">在linux中创建和解压文档的11个 tar 命令例子 <a class="header-anchor" href="#在linux中创建和解压文档的11个-tar-命令例子" aria-label="Permalink to “在linux中创建和解压文档的11个 tar 命令例子”">​</a></h1><h3 id="linux中的tar命令" tabindex="-1">linux中的tar命令### <a class="header-anchor" href="#linux中的tar命令" aria-label="Permalink to “linux中的tar命令###”">​</a></h3><p>tar（磁带归档）命令是linux系统中被经常用来将文件存入到一个归档文件中的命令。</p><p>其常见的文件扩展包括：.tar.gz 和 .tar.bz2, 分别表示通过了gzip或bzip算法进一步进行了压缩。</p><p>在本教程中我们会管中窥豹一下在linux桌面或服务器版本中使用tar命令来处理一些创建和解压归档文件的日常工作的例子。</p><h3 id="使用tar命令" tabindex="-1">使用tar命令### <a class="header-anchor" href="#使用tar命令" aria-label="Permalink to “使用tar命令###”">​</a></h3><p>tar命令在大部分linux系统默认情况下都是可用的，所以你不用单独安装该软件。</p><blockquote><p>tar命令具有两个压缩格式，gzip和bzip，该命令的“z”选项用来指定gzip，“j”选项用来指定bzip。同时也可以创建非压缩归档文件。</p></blockquote><h4 id="_1-解压一个tar-gz归档" tabindex="-1">1.解压一个tar.gz归档 <a class="header-anchor" href="#_1-解压一个tar-gz归档" aria-label="Permalink to “1.解压一个tar.gz归档”">​</a></h4><p>一般常见的用法是用来解压归档文件，下面的命令将会把文件从一个tar.gz归档文件中解压出来。</p><pre><code>$ tar -xvzf tarfile.tar.gz
</code></pre><p>这里对这些参数做一个简单解释-</p><blockquote><p>x - 解压文件</p></blockquote><blockquote><p>v - 冗长模式，在解压每个文件时打印出文件的名称。</p></blockquote><blockquote><p>z - 该文件是一个使用 gzip 压缩的文件。</p></blockquote><blockquote><p>f - 使用接下来的tar归档来进行操作。</p></blockquote><p>这些就是一些需要记住的重要选项。</p><p><strong>解压 tar.bz2/bzip 归档文件</strong></p><p>具有bz2扩展名的文件是使用bzip算法进行压缩的，但是tar命令也可以对其进行处理，但是需要通过使用“j”选项来替换“z”选项。</p><pre><code>$ tar -xvjf archivefile.tar.bz2
</code></pre><h4 id="_2-将文件解压到一个指定的目录或路径" tabindex="-1">2.将文件解压到一个指定的目录或路径 <a class="header-anchor" href="#_2-将文件解压到一个指定的目录或路径" aria-label="Permalink to “2.将文件解压到一个指定的目录或路径”">​</a></h4><p>为了将文件解压到一个指定的目录中，使用“-C”选项来指定路径，此处的“C”是大写“C”。</p><pre><code>$ tar -xvzf abc.tar.gz -C /opt/folder/
</code></pre><p>然后，首先需要确认目标目录是否存在，毕竟tar命令并不会为你创建目录，所以如果目标目录不存在的情况下该命令会失败。</p><p>####3. 提取出单个文件 ####</p><p>为了从一个归档文件中提取出单个文件，只需要将文件名按照以下方式将其放置在命令后面。</p><pre><code>$ tar -xz -f abc.tar.gz &quot;./new/abc.txt&quot;
</code></pre><p>在上述命令中，可以按照以下方式来指定多个文件。</p><pre><code>$ tar -xz -f abc.tar.gz &quot;./new/cde.txt&quot; &quot;./new/abc.txt&quot;
</code></pre><h4 id="_4-使用通配符来解压多个文件" tabindex="-1">4.使用通配符来解压多个文件 <a class="header-anchor" href="#_4-使用通配符来解压多个文件" aria-label="Permalink to “4.使用通配符来解压多个文件”">​</a></h4><p>通配符可以用来解压于给定通配符匹配的一批文件，例如所有以&quot;.txt&quot;作为扩展名的文件。</p><pre><code>$ tar -xz -f abc.tar.gz --wildcards &quot;*.txt&quot;
</code></pre><h4 id="_5-列出并检索tar归档文件中的内容" tabindex="-1">5. 列出并检索tar归档文件中的内容 <a class="header-anchor" href="#_5-列出并检索tar归档文件中的内容" aria-label="Permalink to “5. 列出并检索tar归档文件中的内容”">​</a></h4><p>如果你仅仅想要列出而不是解压tar归档文件的中的内容，使用“-t”（test）选项， 下面的命令用来打印一个使用gzip压缩过的tar归档文件中的内容。</p><pre><code>$ tar -tz -f abc.tar.gz
./new/
./new/cde.txt
./new/subdir/
./new/subdir/in.txt
./new/abc.txt
...
</code></pre><p>可以将输出通过管道定向到grep来搜索一个文件，或者定向到less命令来浏览内容列表。 使用&quot;v&quot;冗长选项将会打印出每个文件的额外详细信息。</p><p>对于 tar.bz2/bzip文件，需要使用&quot;j&quot;选项。</p><p>结合上述的命令和grep命令来检索归档文件，如下所示。简单吧！</p><pre><code>$ tar -tvz -f abc.tar.gz | grep abc.txt
-rw-rw-r-- enlightened/enlightened 0 2015-01-13 11:40 ./new/abc.txt
</code></pre><h4 id="_6-创建一个tar-tar-gz归档文件" tabindex="-1">6.创建一个tar/tar.gz归档文件 <a class="header-anchor" href="#_6-创建一个tar-tar-gz归档文件" aria-label="Permalink to “6.创建一个tar/tar.gz归档文件”">​</a></h4><p>现在我们已经学过了如何解压一个tar归档文件，是时候开始创建一个新的tar归档文件了。tar命令可以用来将所选的文件或整个目录放入到一个归档文件中，以下是相应的样例。</p><p>下面的命令使用一个目录来创建一个tar归档文件，它会将该目录中所有的文件和子目录都加入到归档文件中。</p><pre><code>$ tar -cvf abc.tar ./new/
./new/
./new/cde.txt
./new/abc.txt
</code></pre><p>上述命令不会创建一个压缩的的归档文件，只是一个普通的归档文件，只是将多个文件放入到一个归档文件中并没有真正地压缩每个文件。</p><p>为了使用压缩，可以分别使用“z”或“j”选项进行gzip或bzip压缩算法。</p><pre><code>$ tar -cvzf abc.tar.gz ./new/
</code></pre><blockquote><p>文件的扩展名其实并不真正有什么影响。“tar.gz” 和“tgz”是gzip压缩算法压缩文件的常见扩展名。 “tar.bz2”和“tbz”是bzip压缩算法压缩文件的常见扩展名（LCTT 译注：归档是否是压缩的和采用哪种压缩方式并不取决于其扩展名，扩展名只是为了便于辨识。）。</p></blockquote><h4 id="_7-在添加文件之前进行确认" tabindex="-1">7. 在添加文件之前进行确认 <a class="header-anchor" href="#_7-在添加文件之前进行确认" aria-label="Permalink to “7. 在添加文件之前进行确认”">​</a></h4><p>一个有用的选项是“w”，该选项使得tar命令在添加每个文件到归档文件之前来让用户进行确认，有时候这会很有用。</p><p>使用该选项时，只有用户输入“y”时的文件才会被加入到归档文件中，如果你不输入任何东西，其默认表示是一个“n”。</p><pre><code># 添加指定文件

$ tar -czw -f abc.tar.gz ./new/*
add ‘./new/abc.txt’?y
add ‘./new/cde.txt’?y
add ‘./new/newfile.txt’?n
add ‘./new/subdir’?y
add ‘./new/subdir/in.txt’?n

#现在列出所有被加入的文件

$ tar -t -f abc.tar.gz 
./new/abc.txt
./new/cde.txt
./new/subdir/
</code></pre><h4 id="_8-加入文件到存在的归档文件中" tabindex="-1">8. 加入文件到存在的归档文件中 <a class="header-anchor" href="#_8-加入文件到存在的归档文件中" aria-label="Permalink to “8. 加入文件到存在的归档文件中”">​</a></h4><p>“r”选项可以被用来将文件加入到已存在的归档文件中，而不用创建一个新的归档文件，下面是一个简单的样例：</p><pre><code>$ tar -rv -f abc.tar abc.txt
</code></pre><blockquote><p>文件并不能加入到已压缩的归档文件中（gz 或 bzip）。文件只能被加入到普通的归档文件中。</p></blockquote><h4 id="_9-将文件加入到压缩的归档文件中-tar-gz-tar-bz2" tabindex="-1">9. 将文件加入到压缩的归档文件中（tar.gz/tar.bz2) <a class="header-anchor" href="#_9-将文件加入到压缩的归档文件中-tar-gz-tar-bz2" aria-label="Permalink to “9. 将文件加入到压缩的归档文件中（tar.gz/tar.bz2)”">​</a></h4><p>之前已经提到了不可能将文件加入到已压缩的归档文件中，然而依然可以通过简单的一些把戏来完成。使用gunzip命令来解压缩归档文件，然后将文件加入到归档文件中后重新进行压缩。</p><pre><code>$ gunzip archive.tar.gz
$ tar -rf archive.tar ./path/to/file
$ gzip archive.tar
</code></pre><p>对于bzip文件分别使用bzip2和bunzip2。</p><h4 id="_10-通过tar来进行备份" tabindex="-1">10.通过tar来进行备份 <a class="header-anchor" href="#_10-通过tar来进行备份" aria-label="Permalink to “10.通过tar来进行备份”">​</a></h4><p>一个真实的场景是在固定的时间间隔内来备份目录，tar命令可以通过cron调度来实现这样的一个备份，以下是一个样例 ：</p><pre><code>$ tar -cvz -f archive-$(date +%Y%m%d).tar.gz ./new/
</code></pre><p>使用cron来运行上述的命令会保持创建类似以下名称的备份文件 ：&#39;archive-20150218.tar.gz&#39;。</p><p>当然，需要确保日益增长的归档文件不会导致磁盘空间的溢出。</p><h4 id="_11-在创建归档文件时进行验证" tabindex="-1">11. 在创建归档文件时进行验证 <a class="header-anchor" href="#_11-在创建归档文件时进行验证" aria-label="Permalink to “11. 在创建归档文件时进行验证”">​</a></h4><p>&quot;W&quot;选项可以用来在创建归档文件之后进行验证，以下是一个简单例子。</p><pre><code>$ tar -cvW -f abc.tar ./new/
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
</code></pre><p>需要注意的是验证动作不能在压缩过的归档文件上进行，只能在非压缩的tar归档文件上执行。</p><p>这次就先到此为止，可以通过“man tar”命令来查看tar命令的的手册。</p><hr>`,70)),p("p",null,[t[1]||(t[1]=a("via: ",-1)),r(e,{href:"http://www.binarytides.com/linux-tar-command/"},{default:n(()=>[...t[0]||(t[0]=[a("http://www.binarytides.com/linux-tar-command/",-1)])]),_:1})]),p("p",null,[t[5]||(t[5]=a("作者：",-1)),r(e,{href:"https://plus.google.com/117145272367995638274/posts"},{default:n(()=>[...t[2]||(t[2]=[a("Silver Moon",-1)])]),_:1}),t[6]||(t[6]=a(" 译者：",-1)),r(e,{href:"https://github.com/theo-l"},{default:n(()=>[...t[3]||(t[3]=[a("theo-l",-1)])]),_:1}),t[7]||(t[7]=a(" 校对：",-1)),r(e,{href:"https://github.com/wxy"},{default:n(()=>[...t[4]||(t[4]=[a("wxy",-1)])]),_:1})]),p("p",null,[t[10]||(t[10]=a("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...t[8]||(t[8]=[a("LCTT",-1)])]),_:1}),t[11]||(t[11]=a(" 原创翻译，",-1)),r(e,{href:"http://linux.cn/"},{default:n(()=>[...t[9]||(t[9]=[a("Linux中国",-1)])]),_:1}),t[12]||(t[12]=a(" 荣誉推出",-1))])])}const _=i(b,[["render",s]]);export{w as __pageData,_ as default};
