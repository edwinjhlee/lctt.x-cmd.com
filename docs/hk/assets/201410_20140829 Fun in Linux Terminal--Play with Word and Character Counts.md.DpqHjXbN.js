import{_ as p,a0 as l,w as i,s as u,I as a,x as n,a1 as r,A as o,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"Linux終端的樂趣之把玩字詞計數 | LCTT x X-CMD","titleTemplate":false,"description":"Linux終端的樂趣之把玩字詞計數 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux終端的樂趣之把玩字詞計數 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux終端的樂趣之把玩字詞計數 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140829 Fun in Linux Terminal--Play with Word and Character Counts","title":"Linux終端的樂趣之把玩字詞計數","tag":"201410","desc":""},"relativePath":"201410/20140829 Fun in Linux Terminal--Play with Word and Character Counts.md","filePath":"[post].md"}'),s={name:"201410/20140829 Fun in Linux Terminal--Play with Word and Character Counts.md"};function m(h,t,c,x,w,f){const e=l("Link");return i(),u("div",null,[t[16]||(t[16]=a("h1",{id:"linux終端的樂趣之把玩字詞計數",tabindex:"-1"},[n("Linux終端的樂趣之把玩字詞計數 "),a("a",{class:"header-anchor",href:"#linux終端的樂趣之把玩字詞計數","aria-label":"Permalink to “Linux終端的樂趣之把玩字詞計數”"},"​")],-1)),t[17]||(t[17]=a("p",null,"Linux 命令列有很多的樂趣，我們可以很容易並且完善地執行很多繁瑣的任務。比如，我們計算一個文本文件中字和字符的出現頻率，這就是我們打算在這篇文章中講到的。",-1)),a("p",null,[t[1]||(t[1]=n("立刻來到我們腦海的命令，計算字和字符在一個文本文件中出現頻率的 Linux 命令是 [wc 命令] ",-1)),r(e,{href:"http://www.tecmint.com/wc-command-examples/"},{default:o(()=>[...t[0]||(t[0]=[n("1",-1)])]),_:1}),t[2]||(t[2]=n("。",-1))]),t[18]||(t[18]=d(`<p><img src="http://www.tecmint.com/wp-content/uploads/2014/03/Linux-Word-Count.png" alt="Fun with Word and Letter Counts in Shell"></p><p>在使用的腳本來分析文本文件之前，我們必須有一個文本文件。為了保持一致性，我們將創建一個文本文件，man命令的輸出如下所述。</p><pre><code>$ man man &gt; man.txt
</code></pre><p>以上命令是將man命令的使用方式導入到<strong>man.txt</strong>文件裏。</p><p>我們希望能得到最平常的單詞，對之前我們新建的文件執行如下腳本。</p><pre><code>$ cat man.txt | tr &#39; &#39;  &#39;\\012&#39; | tr &#39;[:upper:]&#39; &#39;[:lower:]&#39; | tr -d &#39;[:punct:]&#39; | grep -v &#39;[^a-z]&#39; | sort | uniq -c | sort -rn | head
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
</code></pre><p>上面的腳本，輸出了最常使用的十個單詞。</p><p>如何看單個的字母呢？那就用如下的命令。</p><pre><code>$ echo &#39;tecmint team&#39; | fold -w1
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
</code></pre><p><strong>注</strong>: <code>-w1</code>只是設定了長度</p><p>現在我們將從那個文本文件中掰下來的每一個字母，對結果進行排序，得到所需的輸出頻率的十個最常見的字符。</p><pre><code>$ fold -w1 &lt; man.txt | sort | uniq -c | sort -rn | head
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
</code></pre><p>如何區分大小寫呢？之前我們都是忽略大小寫的。所以，用如下命令。</p><pre><code>$ fold -w1 &lt; man.txt | sort | tr &#39;[:lower:]&#39; &#39;[:upper:]&#39; | uniq -c | sort -rn | head -20
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
</code></pre><p>請檢查上面的輸出，標點符號居然包括在內。讓我們幹掉他，用<strong>tr</strong> 命令。GO:</p><pre><code>$ fold -w1 &lt; man.txt | tr &#39;[:lower:]&#39; &#39;[:upper:]&#39; | sort | tr -d &#39;[:punct:]&#39; | uniq -c | sort -rn | head -20
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
</code></pre><p>現在，我們有了三個文本，那就讓我們用如下命令查看結果吧。</p><pre><code>$ cat *.txt | fold -w1 | tr &#39;[:lower:]&#39; &#39;[:upper:]&#39; | sort | tr -d &#39;[:punct:]&#39; | uniq -c | sort -rn | head -8
</code></pre><h3 id="sample-output-5" tabindex="-1">Sample Output <a class="header-anchor" href="#sample-output-5" aria-label="Permalink to “Sample Output”">​</a></h3><pre><code>  11636  
   2504 E 
   2079 A 
   2005 T 
   1729 I 
   1645 N 
   1632 S 
   1580 O
</code></pre><p>下一步我們將會生成那些罕見的至少十個字母長的單詞。以下是簡單的腳本：</p><pre><code>$ cat man.txt | tr &#39;&#39; &#39;\\012&#39; | tr &#39;[:upper:]&#39; &#39;[:lower:]&#39; | tr -d &#39;[:punct:]&#39; | tr -d &#39;[0-9]&#39; | sort | uniq -c | sort -n |  grep -E &#39;..................&#39; | head
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
</code></pre><p><strong>注</strong>: 上面的.越來越多，其實，我們可以使用.{10} 得到同樣的效果。</p><p>這些簡單的腳本，讓我們知道最頻繁出現的單詞和英語中的字符。</p><p>現在結束了。下次我會在這裏講到另一個有趣的話題，你應該會喜歡讀。還有別忘了向我們提供您的寶貴意見。</p><hr>`,38)),a("p",null,[t[4]||(t[4]=n("via: ",-1)),r(e,{href:"http://www.tecmint.com/play-with-word-and-character-counts-in-linux/"},{default:o(()=>[...t[3]||(t[3]=[n("http://www.tecmint.com/play-with-word-and-character-counts-in-linux/",-1)])]),_:1})]),a("p",null,[t[8]||(t[8]=n("作者：",-1)),r(e,{href:"http://www.tecmint.com/author/avishek/"},{default:o(()=>[...t[5]||(t[5]=[n("Avishek Kumar",-1)])]),_:1}),t[9]||(t[9]=n(" 譯者：",-1)),r(e,{href:"https://github.com/MikeCoder"},{default:o(()=>[...t[6]||(t[6]=[n("MikeCoder",-1)])]),_:1}),t[10]||(t[10]=n(" 校對：",-1)),r(e,{href:"https://github.com/wxy"},{default:o(()=>[...t[7]||(t[7]=[n("wxy",-1)])]),_:1})]),a("p",null,[t[13]||(t[13]=n("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[11]||(t[11]=[n("LCTT",-1)])]),_:1}),t[14]||(t[14]=n(" 原創翻譯，",-1)),r(e,{href:"http://linux.cn/"},{default:o(()=>[...t[12]||(t[12]=[n("Linux中國",-1)])]),_:1}),t[15]||(t[15]=n(" 榮譽推出",-1))])])}const L=p(s,[["render",m]]);export{b as __pageData,L as default};
