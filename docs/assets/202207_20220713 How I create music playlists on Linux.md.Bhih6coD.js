import{_ as i,a0 as t,w as r,s as c,I as a,x as s,a1 as l,A as e,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const h=JSON.parse('{"title":"如何编写 C 程序在 Linux 上创建音乐播放列表 | LCTT x X-CMD","titleTemplate":false,"description":"如何编写 C 程序在 Linux 上创建音乐播放列表 | LCTT (202207) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何编写 C 程序在 Linux 上创建音乐播放列表 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何编写 C 程序在 Linux 上创建音乐播放列表 | LCTT (202207) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202207/20220713 How I create music playlists on Linux","title":"如何编写 C 程序在 Linux 上创建音乐播放列表","tag":"202207","desc":""},"relativePath":"202207/20220713 How I create music playlists on Linux.md","filePath":"[post].md"}'),u={name:"202207/20220713 How I create music playlists on Linux.md"};function d(m,n,f,g,F,L){const p=t("Link");return r(),c("div",null,[n[18]||(n[18]=a("h1",{id:"如何编写-c-程序在-linux-上创建音乐播放列表",tabindex:"-1"},[s("如何编写 C 程序在 Linux 上创建音乐播放列表 "),a("a",{class:"header-anchor",href:"#如何编写-c-程序在-linux-上创建音乐播放列表","aria-label":"Permalink to “如何编写 C 程序在 Linux 上创建音乐播放列表”"},"​")],-1)),n[19]||(n[19]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202207/26/223349t4yiqd1yikb9k117.jpg",alt:""})],-1)),n[20]||(n[20]=a("blockquote",null,[a("p",null,"使用我在 Linux 上制作的这个 C 程序在旅途中聆听你喜爱的歌曲。")],-1)),n[21]||(n[21]=a("p",null,"我最近在 Linux 中编写了一个 C 程序，从我广泛的 MP3 库中创建一个较小的随机 MP3 文件选集。该程序会遍历一个包含我的 MP3 库的目录，然后创建一个包含随机的、较小的歌曲选集的目录。然后我将这些 MP3 文件复制到我的智能手机上，以便随时随地收听。",-1)),n[22]||(n[22]=a("p",null,"瑞典是一个人口稀少的国家，有许多农村地区没有完整的手机覆盖。这就是在智能手机上拥有 MP3 文件的原因之一。另一个原因是我并不总是有钱购买流媒体服务，所以我喜欢拥有自己喜欢的歌曲的副本。",-1)),a("p",null,[n[1]||(n[1]=s("你可以从它的 ",-1)),l(p,{href:"https://github.com/rikardgn/learnC/blob/main/randMp3Copy.c"},{default:e(()=>[...n[0]||(n[0]=[s("Git 仓库",-1)])]),_:1}),n[2]||(n[2]=s(" 下载我的应用。我专门为 Linux 编写了它，部分原因是在 Linux 上很容易找到经过良好测试的文件 I/O 例程。多年前，我尝试使用专有的 C 库在 Windows 上编写相同的程序，但在尝试文件复制时遇到了困难。Linux 使用户可以轻松直接地访问文件系统。",-1))]),n[23]||(n[23]=o(`<p>本着开源的精神，我没费多少力气就找到了 Linux 的文件 I/O 代码来激发我的灵感。我还发现了一些启发了我的分配内存的代码。我编写了随机数生成的代码。</p><p>该程序的工作方式如下所述：</p><ol><li>询问源目录和目标目录。</li><li>询问存放 MP3 文件的目录下的文件个数。</li><li>搜索你希望复制的收藏的百分比（从 1.0% 到 88.0%）。如果你有 1000 个文件的集合，并希望从你的集合中复制 125 个文件而不是 120 个文件，你也可以输入 12.5% 之类的数字。我将上限设置为 88%，因为复制超过 88% 的库将基本生成与你的基础库相似的库。当然，代码是开源的，因此你可以根据自己的喜好自由修改。</li><li>使用指针和 <code>malloc</code> 分配内存。一些操作需要内存，包括代表音乐收藏中文件的字符串列表。还有一个列表来保存随机生成的数字。</li><li>生成所有文件范围内的随机数列表（例如，如果集合有 1000 个文件，则为 1 到 1000）。</li><li>复制文件。</li></ol><p>其中一些部分比其他部分更简单，但代码只有大约 100 行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;dirent.h&gt;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span>#include &lt;sys/types.h&gt; /* include necessary header files */</span></span>
<span class="line"><span>#include &lt;fcntl.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span>#include &lt;time.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define BUF_SIZE 4096 /* use buffer of 4096 bytes */</span></span>
<span class="line"><span>#define OUTPUT_MODE 0700 /*protect output file */</span></span>
<span class="line"><span>#define MAX_STR_LEN 256</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(void) {</span></span>
<span class="line"><span>  DIR *d;</span></span>
<span class="line"><span>  struct dirent *dir;</span></span>
<span class="line"><span>  char strTemp[256], srcFile[256],</span></span>
<span class="line"><span>  dstFile[256], srcDir[256], dstDir[256];</span></span>
<span class="line"><span>  char **ptrFileLst;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  char buffer[BUF_SIZE];</span></span>
<span class="line"><span>  int nrOfStrs=-1, srcFileDesc,</span></span>
<span class="line"><span>  dstFileDesc, readByteCount,</span></span>
<span class="line"><span>  writeByteCount, numFiles;</span></span>
<span class="line"><span>  int indPtrFileAcc, q;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  float nrFilesCopy;</span></span>
<span class="line"><span>  // vars for generatingRandNumList</span></span>
<span class="line"><span>  int i, k, curRanNum, curLstInd,</span></span>
<span class="line"><span>  numFound, numsToGen, largNumRange;</span></span>
<span class="line"><span>  int *numLst;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  float procFilesCopy;</span></span>
<span class="line"><span>  printf(&quot;Enter name of source Directory\\n&quot;);</span></span>
<span class="line"><span>  scanf(&quot;%s&quot;, srcDir);</span></span>
<span class="line"><span>  printf(&quot;Enter name of destionation Directory\\n&quot;);</span></span>
<span class="line"><span>  scanf(&quot;%s&quot;, dstDir);</span></span>
<span class="line"><span>  printf(&quot;How many files does the directory with mp3 files contain?\\n&quot;);</span></span>
<span class="line"><span>  scanf(&quot;%d&quot;, &amp;numFiles);</span></span>
<span class="line"><span>  printf(&quot;What percent of the files do you wish to make a random selection of\\n&quot;);</span></span>
<span class="line"><span>  printf(&quot;enter a number between 1 and 88\\n&quot;);</span></span>
<span class="line"><span>  scanf(&quot;%f&quot;, &amp;procFilesCopy);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // allocate memory for filesList, list of random numbers</span></span>
<span class="line"><span>  ptrFileLst= (char**) malloc(numFiles * sizeof(char*));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (i = 0; i &lt; numFiles; i++) {</span></span>
<span class="line"><span>    ptrFileLst[i] = (char*)malloc(MAX_STR_LEN * sizeof(char));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  largNumRange = numFiles;</span></span>
<span class="line"><span>  nrFilesCopy = (procFilesCopy / 100) * numFiles;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  numsToGen = (int)((procFilesCopy / 100) * numFiles);</span></span>
<span class="line"><span>  printf(&quot;nrFilesCopy=%f&quot;, nrFilesCopy);</span></span>
<span class="line"><span>  printf(&quot;NumsToGen=%d&quot;, numsToGen);</span></span>
<span class="line"><span>  numLst = malloc(numsToGen * sizeof(int));</span></span>
<span class="line"><span>  srand(time(0));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  numLst[0] = rand() % largNumRange + 1;</span></span>
<span class="line"><span>  numFound=0;</span></span>
<span class="line"><span>  do { </span></span>
<span class="line"><span>    curRanNum = (int)rand() % largNumRange + 1;</span></span>
<span class="line"><span>    if (numLst[0] == curRanNum) {</span></span>
<span class="line"><span>      numFound=1; </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } while(numFound == 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  numLst[1] = curRanNum;</span></span>
<span class="line"><span>  getchar();</span></span>
<span class="line"><span>  curLstInd = 1;</span></span>
<span class="line"><span>  i = 0;</span></span>
<span class="line"><span>  while(1) {</span></span>
<span class="line"><span>    do {</span></span>
<span class="line"><span>      numFound = 0;</span></span>
<span class="line"><span>      curRanNum = (int)rand() % largNumRange + 1;</span></span>
<span class="line"><span>      for (int k = 0; k &lt;= curLstInd; k++){</span></span>
<span class="line"><span>        if (numLst[k] == curRanNum)</span></span>
<span class="line"><span>        numFound = 1;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } while(numFound == 1);</span></span>
<span class="line"><span>    numLst[curLstInd+1] = curRanNum;</span></span>
<span class="line"><span>    curLstInd++;</span></span>
<span class="line"><span>    i++;</span></span>
<span class="line"><span>    // numsToGen=Total numbers to generate minus two</span></span>
<span class="line"><span>    // already generated by the code above this loop</span></span>
<span class="line"><span>    if (i == (numsToGen-2))</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    d = opendir(srcDir);</span></span>
<span class="line"><span>    if (d) {</span></span>
<span class="line"><span>      while ( (dir = readdir(d)) != NULL ) {</span></span>
<span class="line"><span>      strcpy(strTemp, dir-&gt;d_name);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (strTemp[0] != &#39;.&#39;) {</span></span>
<span class="line"><span>        nrOfStrs++;</span></span>
<span class="line"><span>        strcpy(ptrFileLst[nrOfStrs], strTemp);</span></span>
<span class="line"><span>      } </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    closedir(d); </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (q = 0; q &lt;= curLstInd; q++) {</span></span>
<span class="line"><span>    indPtrFileAcc = numLst[q];</span></span>
<span class="line"><span>    strcpy(srcFile, srcDir);</span></span>
<span class="line"><span>    strcat(srcFile, &quot;/&quot;);</span></span>
<span class="line"><span>    strcat(srcFile, ptrFileLst[indPtrFileAcc]);</span></span>
<span class="line"><span>    strcpy(dstFile, dstDir);</span></span>
<span class="line"><span>    strcat(dstFile, &quot;/&quot;);</span></span>
<span class="line"><span>    strcat(dstFile, ptrFileLst[indPtrFileAcc]);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    srcFileDesc = open(srcFile, O_RDONLY);</span></span>
<span class="line"><span>    dstFileDesc = creat(dstFile, OUTPUT_MODE);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while(1) {</span></span>
<span class="line"><span>      readByteCount = read(srcFileDesc, buffer, BUF_SIZE);</span></span>
<span class="line"><span>      if (readByteCount &lt;= 0) </span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      writeByteCount = write(dstFileDesc, buffer, readByteCount);</span></span>
<span class="line"><span>      if(writeByteCount &lt;= 0)</span></span>
<span class="line"><span>        exit(4);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //close the files </span></span>
<span class="line"><span>    close(srcFileDesc);</span></span>
<span class="line"><span>    close(dstFileDesc); </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这段代码可能是最复杂的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while(1) {</span></span>
<span class="line"><span>  readByteCount = read(srcFileDesc, buffer, BUF_SIZE);</span></span>
<span class="line"><span>  if (readByteCount &lt;= 0) </span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  writeByteCount = write(dstFileDesc, buffer, readByteCount);</span></span>
<span class="line"><span>  if (writeByteCount &lt;= 0)</span></span>
<span class="line"><span>      exit(4); </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这将从指定的文件中读取多个字节（<code>readByteCount</code>）到字符缓冲区中。该函数的第一个参数是文件名（<code>srcFileDesc</code>）。第二个参数是一个指向字符缓冲区的指针，这之前在程序中声明过。该函数的最后一个参数是缓冲区的大小。</p><p>程序返回读取的字节数（在本例中为 4 个字节）。如果返回的数字为 0 或更少，则第一个 <code>if</code> 子句会跳出循环。</p><p>如果读取字节数为 0，则所有写入完成，循环中断以写入下一个文件。如果读取的字节数小于 0，则发生错误并退出程序。</p><p>当读取 4 个字节时，它会写入它们。<code>write</code> 函数接受三个参数。第一个是要写入的文件，第二个是字符缓冲区，第三个是要写入的字节数（4 个字节） .该函数返回写入的字节数。</p><p>如果写入了 0 个字节，则发生了写入错误，因此第二个 <code>if</code> 子句退出程序。</p><p><code>while</code> 循环读取并复制文件，一次 4 个字节，直到文件被复制。复制完成后，你可以将随机生成的 mp3 文件的目录复制到你的智能手机。</p><p>复制和写入例程相当有效，因为它们使用 Linux 中的文件系统调用。</p><h3 id="改进代码" tabindex="-1">改进代码 <a class="header-anchor" href="#改进代码" aria-label="Permalink to “改进代码”">​</a></h3><p>该程序很简单，可以在用户界面和灵活性方面进行改进。例如，你可以实现一个计算源目录中文件数量的函数，这样你就不必手动输入它。你可以添加选项，这样你就可以非交互地传递百分比和路径。但是代码做了我需要它做的事情，它是 C 编程语言简单效率的演示。</p><hr>`,17)),a("p",null,[n[4]||(n[4]=s("via: ",-1)),l(p,{href:"https://opensource.com/article/22/7/c-linux-mp3"},{default:e(()=>[...n[3]||(n[3]=[s("https://opensource.com/article/22/7/c-linux-mp3",-1)])]),_:1})]),a("p",null,[n[9]||(n[9]=s("作者：",-1)),l(p,{href:"https://opensource.com/users/rikardgn"},{default:e(()=>[...n[5]||(n[5]=[s("Rikard Grossman-Nielsen",-1)])]),_:1}),n[10]||(n[10]=s(" 选题：",-1)),l(p,{href:"https://github.com/lkxed"},{default:e(()=>[...n[6]||(n[6]=[s("lkxed",-1)])]),_:1}),n[11]||(n[11]=s(" 译者：",-1)),l(p,{href:"https://github.com/geekpi"},{default:e(()=>[...n[7]||(n[7]=[s("geekpi",-1)])]),_:1}),n[12]||(n[12]=s(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...n[8]||(n[8]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[15]||(n[15]=s("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[13]||(n[13]=[s("LCTT",-1)])]),_:1}),n[16]||(n[16]=s(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...n[14]||(n[14]=[s("Linux中国",-1)])]),_:1}),n[17]||(n[17]=s(" 荣誉推出",-1))])])}const b=i(u,[["render",d]]);export{h as __pageData,b as default};
