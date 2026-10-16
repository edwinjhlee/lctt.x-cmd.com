import{_ as i,a0 as t,w as r,s as c,I as a,x as s,a1 as l,A as e,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"如何編寫 C 程序在 Linux 上創建音樂播放列表 | LCTT x X-CMD","titleTemplate":false,"description":"如何編寫 C 程序在 Linux 上創建音樂播放列表 | LCTT (202207) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何編寫 C 程序在 Linux 上創建音樂播放列表 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何編寫 C 程序在 Linux 上創建音樂播放列表 | LCTT (202207) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202207/20220713 How I create music playlists on Linux","title":"如何編寫 C 程序在 Linux 上創建音樂播放列表","tag":"202207","desc":""},"relativePath":"202207/20220713 How I create music playlists on Linux.md","filePath":"[post].md"}'),u={name:"202207/20220713 How I create music playlists on Linux.md"};function d(m,n,f,g,F,L){const p=t("Link");return r(),c("div",null,[n[18]||(n[18]=a("h1",{id:"如何編寫-c-程序在-linux-上創建音樂播放列表",tabindex:"-1"},[s("如何編寫 C 程序在 Linux 上創建音樂播放列表 "),a("a",{class:"header-anchor",href:"#如何編寫-c-程序在-linux-上創建音樂播放列表","aria-label":"Permalink to “如何編寫 C 程序在 Linux 上創建音樂播放列表”"},"​")],-1)),n[19]||(n[19]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202207/26/223349t4yiqd1yikb9k117.jpg",alt:""})],-1)),n[20]||(n[20]=a("blockquote",null,[a("p",null,"使用我在 Linux 上製作的這個 C 程序在旅途中聆聽你喜愛的歌曲。")],-1)),n[21]||(n[21]=a("p",null,"我最近在 Linux 中編寫了一個 C 程序，從我廣泛的 MP3 庫中創建一個較小的隨機 MP3 文件選集。該程序會遍歷一個包含我的 MP3 庫的目錄，然後創建一個包含隨機的、較小的歌曲選集的目錄。然後我將這些 MP3 文件複製到我的智能手機上，以便隨時隨地收聽。",-1)),n[22]||(n[22]=a("p",null,"瑞典是一個人口稀少的國家，有許多農村地區沒有完整的手機覆蓋。這就是在智能手機上擁有 MP3 文件的原因之一。另一個原因是我並不總是有錢購買流媒體服務，所以我喜歡擁有自己喜歡的歌曲的副本。",-1)),a("p",null,[n[1]||(n[1]=s("你可以從它的 ",-1)),l(p,{href:"https://github.com/rikardgn/learnC/blob/main/randMp3Copy.c"},{default:e(()=>[...n[0]||(n[0]=[s("Git 倉庫",-1)])]),_:1}),n[2]||(n[2]=s(" 下載我的應用。我專門為 Linux 編寫了它，部分原因是在 Linux 上很容易找到經過良好測試的文件 I/O 例程。多年前，我嘗試使用專有的 C 庫在 Windows 上編寫相同的程序，但在嘗試文件複製時遇到了困難。Linux 使用户可以輕鬆直接地訪問文件系統。",-1))]),n[23]||(n[23]=o(`<p>本着開源的精神，我沒費多少力氣就找到了 Linux 的文件 I/O 代碼來激發我的靈感。我還發現了一些啓發了我的分配內存的代碼。我編寫了隨機數生成的代碼。</p><p>該程序的工作方式如下所述：</p><ol><li>詢問源目錄和目標目錄。</li><li>詢問存放 MP3 文件的目錄下的文件個數。</li><li>搜索你希望複製的收藏的百分比（從 1.0% 到 88.0%）。如果你有 1000 個文件的集合，並希望從你的集合中複製 125 個文件而不是 120 個文件，你也可以輸入 12.5% 之類的數字。我將上限設置為 88%，因為複製超過 88% 的庫將基本生成與你的基礎庫相似的庫。當然，代碼是開源的，因此你可以根據自己的喜好自由修改。</li><li>使用指針和 <code>malloc</code> 分配內存。一些操作需要內存，包括代表音樂收藏中文件的字符串列表。還有一個列表來保存隨機生成的數字。</li><li>生成所有文件範圍內的隨機數列表（例如，如果集合有 1000 個文件，則為 1 到 1000）。</li><li>複製文件。</li></ol><p>其中一些部分比其他部分更簡單，但代碼只有大約 100 行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;dirent.h&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>這段代碼可能是最複雜的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while(1) {</span></span>
<span class="line"><span>  readByteCount = read(srcFileDesc, buffer, BUF_SIZE);</span></span>
<span class="line"><span>  if (readByteCount &lt;= 0) </span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  writeByteCount = write(dstFileDesc, buffer, readByteCount);</span></span>
<span class="line"><span>  if (writeByteCount &lt;= 0)</span></span>
<span class="line"><span>      exit(4); </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這將從指定的文件中讀取多個字節（<code>readByteCount</code>）到字符緩衝區中。該函數的第一個參數是文件名（<code>srcFileDesc</code>）。第二個參數是一個指向字符緩衝區的指針，這之前在程序中聲明過。該函數的最後一個參數是緩衝區的大小。</p><p>程序返回讀取的字節數（在本例中為 4 個字節）。如果返回的數字為 0 或更少，則第一個 <code>if</code> 子句會跳出循環。</p><p>如果讀取字節數為 0，則所有寫入完成，循環中斷以寫入下一個文件。如果讀取的字節數小於 0，則發生錯誤並退出程序。</p><p>當讀取 4 個字節時，它會寫入它們。<code>write</code> 函數接受三個參數。第一個是要寫入的文件，第二個是字符緩衝區，第三個是要寫入的字節數（4 個字節） .該函數返回寫入的字節數。</p><p>如果寫入了 0 個字節，則發生了寫入錯誤，因此第二個 <code>if</code> 子句退出程序。</p><p><code>while</code> 循環讀取並複製文件，一次 4 個字節，直到文件被複制。複製完成後，你可以將隨機生成的 mp3 文件的目錄複製到你的智能手機。</p><p>複製和寫入例程相當有效，因為它們使用 Linux 中的文件系統調用。</p><h3 id="改進代碼" tabindex="-1">改進代碼 <a class="header-anchor" href="#改進代碼" aria-label="Permalink to “改進代碼”">​</a></h3><p>該程序很簡單，可以在用户界面和靈活性方面進行改進。例如，你可以實現一個計算源目錄中文件數量的函數，這樣你就不必手動輸入它。你可以添加選項，這樣你就可以非交互地傳遞百分比和路徑。但是代碼做了我需要它做的事情，它是 C 編程語言簡單效率的演示。</p><hr>`,17)),a("p",null,[n[4]||(n[4]=s("via: ",-1)),l(p,{href:"https://opensource.com/article/22/7/c-linux-mp3"},{default:e(()=>[...n[3]||(n[3]=[s("https://opensource.com/article/22/7/c-linux-mp3",-1)])]),_:1})]),a("p",null,[n[9]||(n[9]=s("作者：",-1)),l(p,{href:"https://opensource.com/users/rikardgn"},{default:e(()=>[...n[5]||(n[5]=[s("Rikard Grossman-Nielsen",-1)])]),_:1}),n[10]||(n[10]=s(" 選題：",-1)),l(p,{href:"https://github.com/lkxed"},{default:e(()=>[...n[6]||(n[6]=[s("lkxed",-1)])]),_:1}),n[11]||(n[11]=s(" 譯者：",-1)),l(p,{href:"https://github.com/geekpi"},{default:e(()=>[...n[7]||(n[7]=[s("geekpi",-1)])]),_:1}),n[12]||(n[12]=s(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...n[8]||(n[8]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[15]||(n[15]=s("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...n[13]||(n[13]=[s("LCTT",-1)])]),_:1}),n[16]||(n[16]=s(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...n[14]||(n[14]=[s("Linux中國",-1)])]),_:1}),n[17]||(n[17]=s(" 榮譽推出",-1))])])}const b=i(u,[["render",d]]);export{h as __pageData,b as default};
