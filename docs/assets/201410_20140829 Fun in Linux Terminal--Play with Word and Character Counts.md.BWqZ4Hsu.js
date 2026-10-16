import{_ as p,a0 as l,w as i,s as u,I as a,x as n,a1 as r,A as o,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"Linux终端的乐趣之把玩字词计数 | LCTT x X-CMD","titleTemplate":false,"description":"Linux终端的乐趣之把玩字词计数 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux终端的乐趣之把玩字词计数 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux终端的乐趣之把玩字词计数 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140829 Fun in Linux Terminal--Play with Word and Character Counts","title":"Linux终端的乐趣之把玩字词计数","tag":"201410","desc":""},"relativePath":"201410/20140829 Fun in Linux Terminal--Play with Word and Character Counts.md","filePath":"[post].md"}'),s={name:"201410/20140829 Fun in Linux Terminal--Play with Word and Character Counts.md"};function m(h,t,c,x,w,f){const e=l("Link");return i(),u("div",null,[t[16]||(t[16]=a("h1",{id:"linux终端的乐趣之把玩字词计数",tabindex:"-1"},[n("Linux终端的乐趣之把玩字词计数 "),a("a",{class:"header-anchor",href:"#linux终端的乐趣之把玩字词计数","aria-label":"Permalink to “Linux终端的乐趣之把玩字词计数”"},"​")],-1)),t[17]||(t[17]=a("p",null,"Linux 命令行有很多的乐趣，我们可以很容易并且完善地执行很多繁琐的任务。比如，我们计算一个文本文件中字和字符的出现频率，这就是我们打算在这篇文章中讲到的。",-1)),a("p",null,[t[1]||(t[1]=n("立刻来到我们脑海的命令，计算字和字符在一个文本文件中出现频率的 Linux 命令是 [wc 命令] ",-1)),r(e,{href:"http://www.tecmint.com/wc-command-examples/"},{default:o(()=>[...t[0]||(t[0]=[n("1",-1)])]),_:1}),t[2]||(t[2]=n("。",-1))]),t[18]||(t[18]=d(`<p><img src="http://www.tecmint.com/wp-content/uploads/2014/03/Linux-Word-Count.png" alt="Fun with Word and Letter Counts in Shell"></p><p>在使用的脚本来分析文本文件之前，我们必须有一个文本文件。为了保持一致性，我们将创建一个文本文件，man命令的输出如下所述。</p><pre><code>$ man man &gt; man.txt
</code></pre><p>以上命令是将man命令的使用方式导入到<strong>man.txt</strong>文件里。</p><p>我们希望能得到最平常的单词，对之前我们新建的文件执行如下脚本。</p><pre><code>$ cat man.txt | tr &#39; &#39;  &#39;\\012&#39; | tr &#39;[:upper:]&#39; &#39;[:lower:]&#39; | tr -d &#39;[:punct:]&#39; | grep -v &#39;[^a-z]&#39; | sort | uniq -c | sort -rn | head
</code></pre><h3 id="sample-output" tabindex="-1">Sample Output <a class="header-anchor" href="#sample-output" aria-label="Permalink to “Sample Output”">​</a></h3><pre><code>7557 
262 the 
163 to 
112 is 
112 a 
78 of 
78 manual 
76 and 
64 if 
63 be
</code></pre><p>上面的脚本，输出了最常使用的十个单词。</p><p>如何看单个的字母呢？那就用如下的命令。</p><pre><code>$ echo &#39;tecmint team&#39; | fold -w1
</code></pre><h3 id="sample-output-1" tabindex="-1">Sample Output <a class="header-anchor" href="#sample-output-1" aria-label="Permalink to “Sample Output”">​</a></h3><pre><code>t 
e 
c 
m 
i 
n 
t 
t 
e 
a 
m
</code></pre><p><strong>注</strong>: <code>-w1</code>只是设定了长度</p><p>现在我们将从那个文本文件中掰下来的每一个字母，对结果进行排序，得到所需的输出频率的十个最常见的字符。</p><pre><code>$ fold -w1 &lt; man.txt | sort | uniq -c | sort -rn | head
</code></pre><h3 id="sample-output-2" tabindex="-1">Sample Output <a class="header-anchor" href="#sample-output-2" aria-label="Permalink to “Sample Output”">​</a></h3><pre><code>8579  
2413 e
1987 a
1875 t
1644 i
1553 n
1522 o
1514 s
1224 r
1021 l
</code></pre><p>如何区分大小写呢？之前我们都是忽略大小写的。所以，用如下命令。</p><pre><code>$ fold -w1 &lt; man.txt | sort | tr &#39;[:lower:]&#39; &#39;[:upper:]&#39; | uniq -c | sort -rn | head -20
</code></pre><h3 id="sample-output-3" tabindex="-1">Sample Output <a class="header-anchor" href="#sample-output-3" aria-label="Permalink to “Sample Output”">​</a></h3><pre><code>11636  
2504 E 
2079 A 
2005 T 
1729 I 
1645 N 
1632 S 
1580 o
1269 R 
1055 L 
836 H 
791 P 
766 D 
753 C 
725 M 
690 U 
605 F 
504 G 
352 Y 
344 .
</code></pre><p>请检查上面的输出，标点符号居然包括在内。让我们干掉他，用<strong>tr</strong> 命令。GO:</p><pre><code>$ fold -w1 &lt; man.txt | tr &#39;[:lower:]&#39; &#39;[:upper:]&#39; | sort | tr -d &#39;[:punct:]&#39; | uniq -c | sort -rn | head -20
</code></pre><h3 id="sample-output-4" tabindex="-1">Sample Output <a class="header-anchor" href="#sample-output-4" aria-label="Permalink to “Sample Output”">​</a></h3><pre><code>  11636  
  2504 E 
  2079 A 
  2005 T 
  1729 I 
  1645 N 
  1632 S 
  1580 O 
  1550 
  1269 R 
  1055 L 
   836 H 
   791 P 
   766 D 
   753 C 
   725 M 
   690 U 
   605 F 
   504 G 
   352 Y
</code></pre><p>现在，我们有了三个文本，那就让我们用如下命令查看结果吧。</p><pre><code>$ cat *.txt | fold -w1 | tr &#39;[:lower:]&#39; &#39;[:upper:]&#39; | sort | tr -d &#39;[:punct:]&#39; | uniq -c | sort -rn | head -8
</code></pre><h3 id="sample-output-5" tabindex="-1">Sample Output <a class="header-anchor" href="#sample-output-5" aria-label="Permalink to “Sample Output”">​</a></h3><pre><code>  11636  
   2504 E 
   2079 A 
   2005 T 
   1729 I 
   1645 N 
   1632 S 
   1580 O
</code></pre><p>下一步我们将会生成那些罕见的至少十个字母长的单词。以下是简单的脚本：</p><pre><code>$ cat man.txt | tr &#39;&#39; &#39;\\012&#39; | tr &#39;[:upper:]&#39; &#39;[:lower:]&#39; | tr -d &#39;[:punct:]&#39; | tr -d &#39;[0-9]&#39; | sort | uniq -c | sort -n |  grep -E &#39;..................&#39; | head
</code></pre><h3 id="sample-output-6" tabindex="-1">Sample Output <a class="header-anchor" href="#sample-output-6" aria-label="Permalink to “Sample Output”">​</a></h3><pre><code>1        ────────────────────────────────────────── 
1        a all 
1        abc             any or all arguments within   are optional 
1               able  see setlocale for precise details 
1        ab              options delimited by  cannot be used together 
1               achieved by using the less environment variable 
1              a child process returned a nonzero exit status 
1               act as if this option was supplied using the name as a filename 
1               activate local mode  format and display  local  manual  files 
1               acute accent
</code></pre><p><strong>注</strong>: 上面的.越来越多，其实，我们可以使用.{10} 得到同样的效果。</p><p>这些简单的脚本，让我们知道最频繁出现的单词和英语中的字符。</p><p>现在结束了。下次我会在这里讲到另一个有趣的话题，你应该会喜欢读。还有别忘了向我们提供您的宝贵意见。</p><hr>`,38)),a("p",null,[t[4]||(t[4]=n("via: ",-1)),r(e,{href:"http://www.tecmint.com/play-with-word-and-character-counts-in-linux/"},{default:o(()=>[...t[3]||(t[3]=[n("http://www.tecmint.com/play-with-word-and-character-counts-in-linux/",-1)])]),_:1})]),a("p",null,[t[8]||(t[8]=n("作者：",-1)),r(e,{href:"http://www.tecmint.com/author/avishek/"},{default:o(()=>[...t[5]||(t[5]=[n("Avishek Kumar",-1)])]),_:1}),t[9]||(t[9]=n(" 译者：",-1)),r(e,{href:"https://github.com/MikeCoder"},{default:o(()=>[...t[6]||(t[6]=[n("MikeCoder",-1)])]),_:1}),t[10]||(t[10]=n(" 校对：",-1)),r(e,{href:"https://github.com/wxy"},{default:o(()=>[...t[7]||(t[7]=[n("wxy",-1)])]),_:1})]),a("p",null,[t[13]||(t[13]=n("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[11]||(t[11]=[n("LCTT",-1)])]),_:1}),t[14]||(t[14]=n(" 原创翻译，",-1)),r(e,{href:"http://linux.cn/"},{default:o(()=>[...t[12]||(t[12]=[n("Linux中国",-1)])]),_:1}),t[15]||(t[15]=n(" 荣誉推出",-1))])])}const L=p(s,[["render",m]]);export{b as __pageData,L as default};
