import{_ as l,a0 as t,w as c,s as o,ao as d,I as e,x as n,a1 as i,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"在 Linux 中分割和重组文件 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中分割和重组文件 | LCTT (201708) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中分割和重组文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中分割和重组文件 | LCTT (201708) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201708/20170824 Splitting and Re-Assembling Files in Linux","title":"在 Linux 中分割和重组文件","tag":"201708","desc":""},"relativePath":"201708/20170824 Splitting and Re-Assembling Files in Linux.md","filePath":"[post].md"}'),h={name:"201708/20170824 Splitting and Re-Assembling Files in Linux.md"};function r(g,s,k,u,b,f){const a=t("Link");return c(),o("div",null,[s[13]||(s[13]=d(`<h1 id="在-linux-中分割和重组文件" tabindex="-1">在 Linux 中分割和重组文件 <a class="header-anchor" href="#在-linux-中分割和重组文件" aria-label="Permalink to “在 Linux 中分割和重组文件”">​</a></h1><p><img src="https://www.linux.com/sites/lcom/files/styles/rendered_file/public/split-files.png?itok=kZTP_VF9" alt="csplit" title="csplit"></p><p>非常有用的 <code>csplit</code> 命令可以将单个文件分割成多个文件。Carla Schroder 解释说。</p><p>Linux 有几个用于分割文件的工具程序。那么你为什么要分割文件呢？一个用例是将大文件分割成更小的尺寸，以便它适用于比较小的存储介质，比如 U 盘。当您遇到 FAT32（最大文件大小为 4GB），且您的文件大于此时，通过 U 盘传输文件也是一个很好的技巧。另一个用例是加速网络文件传输，因为小文件的并行传输通常更快。</p><p>我们将学习如何使用 <code>csplit</code>，<code>split</code> 和 <code>cat</code> 来重新整理文件，然后再将文件合并在一起。这些操作在任何文件类型下都有用：文本、图片、音频文件、ISO 镜像文件等。</p><h3 id="使用-csplit-分割文件" tabindex="-1">使用 csplit 分割文件 <a class="header-anchor" href="#使用-csplit-分割文件" aria-label="Permalink to “使用 csplit 分割文件”">​</a></h3><p><code>csplit</code> 是这些有趣的小命令中的一个，它永远伴你左右，一旦开始用它就离不开了。<code>csplit</code> 将单个文件分割成多个文件。这个示例演示了最简单的使用方法，它将文件 foo.txt 分为三个文件，以行号 17 和 33 作为分割点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt 17 33</span></span>
<span class="line"><span>2591</span></span>
<span class="line"><span>3889</span></span>
<span class="line"><span>2359</span></span></code></pre></div><p><code>csplit</code> 在当前目录下创建了三个新文件，并以字节为单位打印出新文件的大小。默认情况下，每个新文件名为 <code>xx_nn</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>xx00</span></span>
<span class="line"><span>xx01</span></span>
<span class="line"><span>xx02</span></span></code></pre></div><p>您可以使用 <code>head</code> 命令查看每个新文件的前十行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ head xx*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>==&gt; xx00 &lt;==</span></span>
<span class="line"><span>Foo File</span></span>
<span class="line"><span>by Carla Schroder</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Foo text</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Foo subheading</span></span>
<span class="line"><span></span></span>
<span class="line"><span>More foo text</span></span>
<span class="line"><span></span></span>
<span class="line"><span>==&gt; xx01 &lt;==</span></span>
<span class="line"><span>Foo text</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Foo subheading</span></span>
<span class="line"><span></span></span>
<span class="line"><span>More foo text</span></span>
<span class="line"><span></span></span>
<span class="line"><span>==&gt; xx02 &lt;==</span></span>
<span class="line"><span>Foo text</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Foo subheading</span></span>
<span class="line"><span></span></span>
<span class="line"><span>More foo text</span></span></code></pre></div><p>如果要将文件分割成包含相同行数的多个文件怎么办？可以指定行数，然后将重复次数放在在花括号中。此示例重复分割 4 次，并将剩下的转储到最后一个文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt 5 {4}</span></span>
<span class="line"><span>57</span></span>
<span class="line"><span>1488</span></span>
<span class="line"><span>249</span></span>
<span class="line"><span>1866</span></span>
<span class="line"><span>3798</span></span></code></pre></div><p>您可以使用星号通配符来告诉 <code>csplit</code> 尽可能多地重复分割。这听起来很酷，但是如果文件不能等分，则可能会失败（LCTT 译注：低版本的 <code>csplit</code> 不支持此参数）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt 10 {*}</span></span>
<span class="line"><span>1545</span></span>
<span class="line"><span>2115</span></span>
<span class="line"><span>1848</span></span>
<span class="line"><span>1901</span></span>
<span class="line"><span>csplit: &#39;10&#39;: line number out of range on repetition 4</span></span>
<span class="line"><span>1430</span></span></code></pre></div><p>默认的行为是删除发生错误时的输出文件。你可以用 <code>-k</code> 选项来解决这个问题，当有错误时，它就不会删除输出文件。另一个行为是每次运行 <code>csplit</code> 时，它将覆盖之前创建的文件，所以你需要使用新的文件名来分别保存它们。使用 <code>--prefix= _prefix_</code> 来设置一个不同的文件前缀：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit -k --prefix=mine foo.txt 5 {*}  </span></span>
<span class="line"><span>57</span></span>
<span class="line"><span>1488</span></span>
<span class="line"><span>249</span></span>
<span class="line"><span>1866</span></span>
<span class="line"><span>993</span></span>
<span class="line"><span>csplit: &#39;5&#39;: line number out of range on repetition 9</span></span>
<span class="line"><span>437</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>mine00</span></span>
<span class="line"><span>mine01</span></span>
<span class="line"><span>mine02</span></span>
<span class="line"><span>mine03 </span></span>
<span class="line"><span>mine04</span></span>
<span class="line"><span>mine05</span></span></code></pre></div><p>选项 <code>-n</code> 可用于改变对文件进行编号的数字位数（默认是 2 位）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit -n 3 --prefix=mine foo.txt 5 {4}</span></span>
<span class="line"><span>57</span></span>
<span class="line"><span>1488</span></span>
<span class="line"><span>249</span></span>
<span class="line"><span>1866</span></span>
<span class="line"><span>1381</span></span>
<span class="line"><span>3798</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>mine000</span></span>
<span class="line"><span>mine001</span></span>
<span class="line"><span>mine002</span></span>
<span class="line"><span>mine003</span></span>
<span class="line"><span>mine004</span></span>
<span class="line"><span>mine005</span></span></code></pre></div><p><code>csplit</code> 中的 “c” 是上下文（context）的意思。这意味着你可以根据任意匹配的方式或者巧妙的正则表达式来分割文件。下面的例子将文件分为两部分。第一个文件在包含第一次出现 “fie” 的前一行处结束，第二个文件则以包含 “fie” 的行开头。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt /fie/</span></span></code></pre></div><p>在每次出现 “fie” 时分割文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt /fie/ {*}</span></span></code></pre></div><p>在 “fie” 前五次出现的地方分割文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt /fie/ {5}</span></span></code></pre></div><p>仅当内容以包含 “fie” 的行开始时才复制，并且省略前面的所有内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit myfile %fie%</span></span></code></pre></div><h3 id="将文件分割成不同大小" tabindex="-1">将文件分割成不同大小 <a class="header-anchor" href="#将文件分割成不同大小" aria-label="Permalink to “将文件分割成不同大小”">​</a></h3><p><code>split</code> 与 <code>csplit</code> 类似。它将文件分割成特定的大小，当您将大文件分割成小的多媒体文件或者使用网络传送时，这就非常棒了。默认的大小为 1000 行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ split foo.mv</span></span>
<span class="line"><span>$ ls -hl</span></span>
<span class="line"><span>266K Aug 21 16:58 xaa</span></span>
<span class="line"><span>267K Aug 21 16:58 xab</span></span>
<span class="line"><span>315K Aug 21 16:58 xac</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>它们分割出来的大小相似，但你可以指定任何你想要的大小。这个例子中是 20M 字节：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ split -b 20M foo.mv</span></span></code></pre></div><p>尺寸单位缩写为 K，M，G，T，P，E，Z，Y（1024 的幂）或者 KB，MB，GB 等等（1000 的幂）。</p><p>为文件名选择你自己的前缀和后缀：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ split -a 3 --numeric-suffixes=9 --additional-suffix=mine foo.mv SB</span></span>
<span class="line"><span>240K Aug 21 17:44 SB009mine</span></span>
<span class="line"><span>214K Aug 21 17:44 SB010mine</span></span>
<span class="line"><span>220K Aug 21 17:44 SB011mine</span></span></code></pre></div><p><code>-a</code> 选项控制编号的数字位置。<code>--numeric-suffixes</code> 设置编号的开始值。默认前缀为 <code>x</code>，你也可以通过在文件名后输入它来设置一个不同的前缀。</p><h3 id="将分割后的文件合并" tabindex="-1">将分割后的文件合并 <a class="header-anchor" href="#将分割后的文件合并" aria-label="Permalink to “将分割后的文件合并”">​</a></h3><p>你可能想在某个时候重组你的文件。常用的 <code>cat</code> 命令就用在这里：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat SB0* &gt; foo2.txt</span></span></code></pre></div><p>示例中的星号通配符将匹配到所有以 SB0 开头的文件，这可能不会得到您想要的结果。您可以使用问号通配符进行更精确的匹配，每个字符使用一个问号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat SB0?????? &gt; foo2.txt</span></span></code></pre></div><p>和往常一样，请查阅相关的手册和信息页面以获取完整的命令选项。</p><hr>`,44)),e("p",null,[s[1]||(s[1]=n("via: ",-1)),i(a,{href:"https://www.linux.com/learn/intro-to-linux/2017/8/splitting-and-re-assembling-files-linux"},{default:p(()=>[...s[0]||(s[0]=[n("https://www.linux.com/learn/intro-to-linux/2017/8/splitting-and-re-assembling-files-linux",-1)])]),_:1})]),e("p",null,[s[5]||(s[5]=n("作者：",-1)),i(a,{href:"https://www.linux.com/users/cschroder"},{default:p(()=>[...s[2]||(s[2]=[n("CARLA SCHRODER",-1)])]),_:1}),s[6]||(s[6]=n(" 译者：",-1)),i(a,{href:"https://github.com/firmianay"},{default:p(()=>[...s[3]||(s[3]=[n("firmianay",-1)])]),_:1}),s[7]||(s[7]=n(" 校对：",-1)),i(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[4]||(s[4]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[10]||(s[10]=n("本文由 ",-1)),i(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[8]||(s[8]=[n("LCTT",-1)])]),_:1}),s[11]||(s[11]=n(" 原创编译，",-1)),i(a,{href:"https://linux.cn/"},{default:p(()=>[...s[9]||(s[9]=[n("Linux中国",-1)])]),_:1}),s[12]||(s[12]=n(" 荣誉推出",-1))])])}const C=l(h,[["render",r]]);export{y as __pageData,C as default};
