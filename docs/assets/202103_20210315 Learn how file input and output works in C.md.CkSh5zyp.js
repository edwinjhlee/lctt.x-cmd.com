import{_ as l,a0 as t,w as c,s as o,ao as d,I as i,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"学习如何用 C 语言来进行文件输入输出操作 | LCTT x X-CMD","titleTemplate":false,"description":"学习如何用 C 语言来进行文件输入输出操作 | LCTT (202103) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"学习如何用 C 语言来进行文件输入输出操作 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"学习如何用 C 语言来进行文件输入输出操作 | LCTT (202103) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202103/20210315 Learn how file input and output works in C","title":"学习如何用 C 语言来进行文件输入输出操作","tag":"202103","desc":""},"relativePath":"202103/20210315 Learn how file input and output works in C.md","filePath":"[post].md"}'),r={name:"202103/20210315 Learn how file input and output works in C.md"};function f(h,s,u,g,k,b){const a=t("Link");return c(),o("div",null,[s[15]||(s[15]=d(`<h1 id="学习如何用-c-语言来进行文件输入输出操作" tabindex="-1">学习如何用 C 语言来进行文件输入输出操作 <a class="header-anchor" href="#学习如何用-c-语言来进行文件输入输出操作" aria-label="Permalink to “学习如何用 C 语言来进行文件输入输出操作”">​</a></h1><blockquote><p>理解 I/O 有助于提升你的效率。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202103/30/222717gyuegz88ryu8ry7i.jpg" alt=""></p><p>如果你打算学习 C 语言的输入、输出，可以从 <code>stdio.h</code> 包含文件开始。正如你从其名字中猜到的，该文件定义了所有的标准（“std”）的输入和输出（“io”）函数。</p><p>大多数人学习的第一个 <code>stdio.h</code> 的函数是打印格式化输出的 <code>printf</code> 函数。或者是用来打印一个字符串的 <code>puts</code> 函数。这些函数非常有用，可以将信息打印给用户，但是如果你想做更多的事情，则需要了解其他函数。</p><p>你可以通过编写一个常见 Linux 命令的副本来了解其中一些功能和方法。<code>cp</code> 命令主要用于复制文件。如果你查看 <code>cp</code> 的帮助手册，可以看到 <code>cp</code> 命令支持非常多的参数和选项。但最简单的功能，就是复制文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cp infile outfile</span></span></code></pre></div><p>你只需使用一些读写文件的基本函数，就可以用 C 语言来自己实现 <code>cp</code> 命令。</p><h3 id="一次读写一个字符" tabindex="-1">一次读写一个字符 <a class="header-anchor" href="#一次读写一个字符" aria-label="Permalink to “一次读写一个字符”">​</a></h3><p>你可以使用 <code>fgetc</code> 和 <code>fputc</code> 函数轻松地进行输入输出。这些函数一次只读写一个字符。该用法被定义在 <code>stdio.h</code>，并且这也很浅显易懂：<code>fgetc</code> 是从文件中读取一个字符，<code>fputc</code> 是将一个字符保存到文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int fgetc(FILE *stream);</span></span>
<span class="line"><span>int fputc(int c, FILE *stream);</span></span></code></pre></div><p>编写 <code>cp</code> 命令需要访问文件。在 C 语言中，你使用 <code>fopen</code> 函数打开一个文件，该函数需要两个参数：文件名和打开文件的模式。模式通常是从文件读取（<code>r</code>）或向文件写入（<code>w</code>）。打开文件的方式也有其他选项，但是对于本教程而言，仅关注于读写操作。</p><p>因此，将一个文件复制到另一个文件就变成了打开源文件和目标文件，接着，不断从第一个文件读取字符，然后将该字符写入第二个文件。<code>fgetc</code> 函数返回从输入文件中读取的单个字符，或者当文件完成后返回文件结束标记（<code>EOF</code>）。一旦读取到 <code>EOF</code>，你就完成了复制操作，就可以关闭两个文件。该代码如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  do {</span></span>
<span class="line"><span>    ch = fgetc(infile);</span></span>
<span class="line"><span>    if (ch != EOF) {</span></span>
<span class="line"><span>      fputc(ch, outfile);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } while (ch != EOF);</span></span></code></pre></div><p>你可以使用此循环编写自己的 <code>cp</code> 程序，以使用 <code>fgetc</code> 和 <code>fputc</code> 函数一次读写一个字符。<code>cp.c</code> 源代码如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char **argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  FILE *infile;</span></span>
<span class="line"><span>  FILE *outfile;</span></span>
<span class="line"><span>  int ch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* parse the command line */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* usage: cp infile outfile */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (argc != 3) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Incorrect usage\\n&quot;);</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Usage: cp infile outfile\\n&quot;);</span></span>
<span class="line"><span>    return 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* open the input file */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  infile = fopen(argv[1], &quot;r&quot;);</span></span>
<span class="line"><span>  if (infile == NULL) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Cannot open file for reading: %s\\n&quot;, argv[1]);</span></span>
<span class="line"><span>    return 2;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* open the output file */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  outfile = fopen(argv[2], &quot;w&quot;);</span></span>
<span class="line"><span>  if (outfile == NULL) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Cannot open file for writing: %s\\n&quot;, argv[2]);</span></span>
<span class="line"><span>    fclose(infile);</span></span>
<span class="line"><span>    return 3;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* copy one file to the other */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* use fgetc and fputc */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  do {</span></span>
<span class="line"><span>    ch = fgetc(infile);</span></span>
<span class="line"><span>    if (ch != EOF) {</span></span>
<span class="line"><span>      fputc(ch, outfile);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } while (ch != EOF);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fclose(infile);</span></span>
<span class="line"><span>  fclose(outfile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以使用 <code>gcc</code> 来将 <code>cp.c</code> 文件编译成一个可执行文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc -Wall -o cp cp.c</span></span></code></pre></div><p><code>-o cp</code> 选项告诉编译器将编译后的程序保存到 <code>cp</code> 文件中。<code>-Wall</code> 选项告诉编译器提示所有可能的警告，如果你没有看到任何警告，则表示一切正常。</p><h3 id="读写数据块" tabindex="-1">读写数据块 <a class="header-anchor" href="#读写数据块" aria-label="Permalink to “读写数据块”">​</a></h3><p>通过每次读写一个字符来实现自己的 <code>cp</code> 命令可以完成这项工作，但这并不是很快。在复制“日常”文件（例如文档和文本文件）时，你可能不会注意到，但是在复制大型文件或通过网络复制文件时，你才会注意到差异。每次处理一个字符需要大量的开销。</p><p>实现此 <code>cp</code> 命令的一种更好的方法是，读取一块的输入数据到内存中（称为缓存），然后将该数据集合写入到第二个文件。这样做的速度要快得多，因为程序可以一次读取更多的数据，这就就减少了从文件中“读取”的次数。</p><p>你可以使用 <code>fread</code> 函数将文件读入一个变量中。这个函数有几个参数：将数据读入的数组或内存缓冲区的指针（<code>ptr</code>），要读取的最小对象的大小（<code>size</code>），要读取对象的个数（<code>nmemb</code>），以及要读取的文件（<code>stream</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);</span></span></code></pre></div><p>不同的选项为更高级的文件输入和输出（例如，读取和写入具有特定数据结构的文件）提供了很大的灵活性。但是，在从一个文件读取数据并将数据写入另一个文件的简单情况下，可以使用一个由字符数组组成的缓冲区。</p><p>你可以使用 <code>fwrite</code> 函数将缓冲区中的数据写入到另一个文件。这使用了与 <code>fread</code> 函数有相似的一组选项：要从中读取数据的数组或内存缓冲区的指针，要读取的最小对象的大小，要读取对象的个数以及要写入的文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);</span></span></code></pre></div><p>如果程序将文件读入缓冲区，然后将该缓冲区写入另一个文件，则数组（<code>ptr</code>）可以是固定大小的数组。例如，你可以使用长度为 200 个字符的字符数组作为缓冲区。</p><p>在该假设下，你需要更改 <code>cp</code> 程序中的循环，以将数据从文件读取到缓冲区中，然后将该缓冲区写入另一个文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  while (!feof(infile)) {</span></span>
<span class="line"><span>    buffer_length = fread(buffer, sizeof(char), 200, infile);</span></span>
<span class="line"><span>    fwrite(buffer, sizeof(char), buffer_length, outfile);</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>这是更新后的 <code>cp</code> 程序的完整源代码，该程序现在使用缓冲区读取和写入数据：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char **argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  FILE *infile;</span></span>
<span class="line"><span>  FILE *outfile;</span></span>
<span class="line"><span>  char buffer[200];</span></span>
<span class="line"><span>  size_t buffer_length;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* parse the command line */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* usage: cp infile outfile */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (argc != 3) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Incorrect usage\\n&quot;);</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Usage: cp infile outfile\\n&quot;);</span></span>
<span class="line"><span>    return 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* open the input file */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  infile = fopen(argv[1], &quot;r&quot;);</span></span>
<span class="line"><span>  if (infile == NULL) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Cannot open file for reading: %s\\n&quot;, argv[1]);</span></span>
<span class="line"><span>    return 2;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* open the output file */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  outfile = fopen(argv[2], &quot;w&quot;);</span></span>
<span class="line"><span>  if (outfile == NULL) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Cannot open file for writing: %s\\n&quot;, argv[2]);</span></span>
<span class="line"><span>    fclose(infile);</span></span>
<span class="line"><span>    return 3;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* copy one file to the other */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* use fread and fwrite */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while (!feof(infile)) {</span></span>
<span class="line"><span>    buffer_length = fread(buffer, sizeof(char), 200, infile);</span></span>
<span class="line"><span>    fwrite(buffer, sizeof(char), buffer_length, outfile);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fclose(infile);</span></span>
<span class="line"><span>  fclose(outfile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>由于你想将此程序与其他程序进行比较，因此请将此源代码另存为 <code>cp2.c</code>。你可以使用 <code>gcc</code> 编译程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc -Wall -o cp2 cp2.c</span></span></code></pre></div><p>和之前一样，<code>-o cp2</code> 选项告诉编译器将编译后的程序保存到 <code>cp2</code> 程序文件中。<code>-Wall</code> 选项告诉编译器打开所有警告。如果你没有看到任何警告，则表示一切正常。</p><h3 id="是的-这真的更快了" tabindex="-1">是的，这真的更快了 <a class="header-anchor" href="#是的-这真的更快了" aria-label="Permalink to “是的，这真的更快了”">​</a></h3><p>使用缓冲区读取和写入数据是实现此版本 <code>cp</code> 程序更好的方法。由于它可以一次将文件的多个数据读取到内存中，因此该程序不需要频繁读取数据。在小文件中，你可能没有注意到使用这两种方案的区别，但是如果你需要复制大文件，或者在较慢的介质（例如通过网络连接）上复制数据时，会发现明显的差距。</p><p>我使用 Linux <code>time</code> 命令进行了比较。此命令可以运行另一个程序，然后告诉你该程序花费了多长时间。对于我的测试，我希望了解所花费时间的差距，因此我复制了系统上的 628 MB CD-ROM 镜像文件。</p><p>我首先使用标准的 Linux 的 <code>cp</code> 命令复制了映像文件，以查看所需多长时间。一开始通过运行 Linux 的 <code>cp</code> 命令，同时我还避免使用 Linux 内置的文件缓存系统，使其不会给程序带来误导性能提升的可能性。使用 Linux <code>cp</code> 进行的测试，总计花费不到一秒钟的时间：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time cp FD13LIVE.iso tmpfile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.040s</span></span>
<span class="line"><span>user    0m0.001s</span></span>
<span class="line"><span>sys     0m0.003s</span></span></code></pre></div><p>运行我自己实现的 <code>cp</code> 命令版本，复制同一文件要花费更长的时间。每次读写一个字符则花了将近五秒钟来复制文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time ./cp FD13LIVE.iso tmpfile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m4.823s</span></span>
<span class="line"><span>user    0m4.100s</span></span>
<span class="line"><span>sys     0m0.571s</span></span></code></pre></div><p>从输入读取数据到缓冲区，然后将该缓冲区写入输出文件则要快得多。使用此方法复制文件花不到一秒钟：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time ./cp2 FD13LIVE.iso tmpfile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.944s</span></span>
<span class="line"><span>user    0m0.224s</span></span>
<span class="line"><span>sys     0m0.608s</span></span></code></pre></div><p>我演示的 <code>cp</code> 程序使用了 200 个字符大小的缓冲区。我确信如果一次将更多文件数据读入内存，该程序将运行得更快。但是，通过这种比较，即使只有 200 个字符的缓冲区，你也已经看到了性能上的巨大差异。</p><hr>`,46)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/21/3/file-io-c"},{default:e(()=>[...s[0]||(s[0]=[n("https://opensource.com/article/21/3/file-io-c",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/jim-hall"},{default:e(()=>[...s[2]||(s[2]=[n("Jim Hall",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),p(a,{href:"https://github.com/wyxplus"},{default:e(()=>[...s[4]||(s[4]=[n("wyxplus",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const v=l(r,[["render",f]]);export{y as __pageData,v as default};
