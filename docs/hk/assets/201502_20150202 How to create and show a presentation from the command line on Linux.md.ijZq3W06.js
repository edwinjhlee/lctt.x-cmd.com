import{_ as s,a0 as r,w as d,s as p,I as e,x as n,a1 as i,A as o,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"如何在Linux命令列中創建以及展示演示稿 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux命令列中創建以及展示演示稿 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux命令列中創建以及展示演示稿 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux命令列中創建以及展示演示稿 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150202 How to create and show a presentation from the command line on Linux","title":"如何在Linux命令列中創建以及展示演示稿","tag":"201502","desc":""},"relativePath":"201502/20150202 How to create and show a presentation from the command line on Linux.md","filePath":"[post].md"}'),m={name:"201502/20150202 How to create and show a presentation from the command line on Linux.md"};function u(h,t,f,x,g,b){const a=r("Link");return d(),p("div",null,[t[27]||(t[27]=e("h1",{id:"如何在linux命令列中創建以及展示演示稿",tabindex:"-1"},[n("如何在Linux命令列中創建以及展示演示稿 "),e("a",{class:"header-anchor",href:"#如何在linux命令列中創建以及展示演示稿","aria-label":"Permalink to “如何在Linux命令列中創建以及展示演示稿”"},"​")],-1)),t[28]||(t[28]=e("p",null,"你在準備一場演講的時候，腦海可能會先被圖文並茂、形象華麗的演示圖稿所佔據。誠然，沒有人會否認一份生動形象的演講稿所帶來的積極作用。然而，並非所有的演講都需要TED Talk的質量。更多時候，演講稿只為傳達特定的信息。 而這個，使用文本信息足以完成。在這種情況下，你的時間可以更好的花在信息的蒐集和核實上面，而不是在谷歌圖片搜索（Google Image）上尋找好看的圖片。",-1)),e("p",null,[t[2]||(t[2]=n("在Linux的世界裏，有幾個不同的方式供你選擇來做演講。比如帶有大量多媒體展示、視覺衝擊效果極佳的",-1)),i(a,{href:"http://bartaz.github.io/impress.js/"},{default:o(()=>[...t[0]||(t[0]=[n("Impress.js",-1)])]),_:1}),t[3]||(t[3]=n("，專為LaTex用户提供的Beamer，等等。而如果你苦於尋找一種簡單的方式來創建並且展示文本演示稿，",-1)),i(a,{href:"https://github.com/visit1985/mdp"},{default:o(()=>[...t[1]||(t[1]=[n("mdp",-1)])]),_:1}),t[4]||(t[4]=n(" 就能幫你實現。",-1))]),t[29]||(t[29]=e("h3",{id:"什麼是mdp",tabindex:"-1"},[n("什麼是Mdp？ "),e("a",{class:"header-anchor",href:"#什麼是mdp","aria-label":"Permalink to “什麼是Mdp？”"},"​")],-1)),e("p",null,[t[6]||(t[6]=n("mdp是Linux下一款基於ncurses的命令列演示工具。我喜歡mdp在於它對",-1)),i(a,{href:"http://daringfireball.net/projects/markdown/"},{default:o(()=>[...t[5]||(t[5]=[n("markdown",-1)])]),_:1}),t[7]||(t[7]=n("的支持，使得我很容易以熟悉的markdown格式來創建幻燈片。自然，它還可以很輕鬆地用HTML格式來發布幻燈片。另一個好處是它支持UTF-8字符編碼，這讓非英語字符（如希臘或西里爾字母）的展示也變得很方便。",-1))]),t[30]||(t[30]=l(`<h3 id="在linux中安裝mdp" tabindex="-1">在Linux中安裝Mdp <a class="header-anchor" href="#在linux中安裝mdp" aria-label="Permalink to “在Linux中安裝Mdp”">​</a></h3><p>mdp的依賴需求很少（如 ncursesw），這使得安裝非常簡單。</p><h4 id="debian、ubuntu或者它們的衍生版" tabindex="-1">Debian、Ubuntu或者它們的衍生版 <a class="header-anchor" href="#debian、ubuntu或者它們的衍生版" aria-label="Permalink to “Debian、Ubuntu或者它們的衍生版”">​</a></h4><pre><code>$ sudo apt-get install git gcc make libncursesw5-dev
$ git clone https://github.com/visit1985/mdp.git
$ cd mdp
$ make
$ sudo make install 
</code></pre><h4 id="fedora或者centos-rhel" tabindex="-1">Fedora或者CentOS/RHEL <a class="header-anchor" href="#fedora或者centos-rhel" aria-label="Permalink to “Fedora或者CentOS/RHEL”">​</a></h4><pre><code>$ sudo yum install git gcc make ncurses-devel
$ git clone https://github.com/visit1985/mdp.git
$ cd mdp
$ make
$ sudo make install 
</code></pre><h4 id="arch-linux" tabindex="-1">Arch Linux <a class="header-anchor" href="#arch-linux" aria-label="Permalink to “Arch Linux”">​</a></h4>`,7)),e("p",null,[t[9]||(t[9]=n("Arch Linux可以通過",-1)),i(a,{href:"https://aur.archlinux.org/packages/mdp-git/"},{default:o(()=>[...t[8]||(t[8]=[n("AUR",-1)])]),_:1}),t[10]||(t[10]=n("輕鬆安裝mdp。",-1))]),t[31]||(t[31]=l(`<h3 id="在命令列中創建演示稿" tabindex="-1">在命令列中創建演示稿 <a class="header-anchor" href="#在命令列中創建演示稿" aria-label="Permalink to “在命令列中創建演示稿”">​</a></h3><p>安裝mdp完畢，你可以使用你喜歡的文本編輯器來輕鬆創建一個演示稿。如果你熟悉markdown的話，很快就可以駕馭mdp。而對於那些不熟悉markdown的人來説，學習mdp最好的方式就是從一個實例着手。</p><p>這裏有一份6頁的演示稿樣本可供參考。</p><pre><code>%title: Sample Presentation made with mdp (Xmodulo.com)
%author: Dan Nanni
%date: 2015-01-28
 
-&gt; This is a slide title &lt;-
=========
 
-&gt; mdp is a command-line based presentation tool with markdown support. &lt;-
 
*_Features_*
 
* Multi-level headers
* Code block formatting
* Nested quotes
* Nested list
* Text highlight and underline
* Citation
* UTF-8 special characters
 
-------------------------------------------------
 
-&gt; # Example of nested list &lt;-
 
This is an example of multi-level headers and a nested list.
 
# first-level title
 
second-level
------------
 
- *item 1*
    - sub-item 1
        - sub-sub-item 1
        - sub-sub-item 2
        - sub-sub-item 3
    - sub-item 2
 
-------------------------------------------------
 
-&gt; # Example of code block formatting &lt;-
 
This example shows how to format a code snippet.
 
    1  /* Hello World program */
    2
    3  #include &lt;stdio.h&gt;
    4
    5  int main()
    6  {
    7     printf(&quot;Hello World&quot;);
    8     return 0;
    9  }
 
This example shows inline code: \`sudo reboot\`
 
-------------------------------------------------
 
-&gt; # Example of nested quotes &lt;-
 
This is an example of nested quotes.
 
# three-level nested quotes
 
&gt; This is the first-level quote.
&gt;&gt; This is the second-level quote
&gt;&gt; and continues.
&gt;&gt;&gt; *This is the third-level quote, and so on.*
 
-------------------------------------------------
 
-&gt; # Example of citations &lt;-
 
This example shows how to place a citation inside a presentation.
 
This tutorial is published at [Xmodulo](http://xmodulo.com)
 
You are welcome to connect with me at [LinkedIn](http://www.linkedin.com/in/xmodulo)
 
Pretty cool, huh?
 
-------------------------------------------------
 
-&gt; # Example of UTF-8 special characters &lt;-
 
This example shows UTF-8 special characters.
 
ae = ä, oe = ö, ue = ü, ss = ß
alpha = ?, beta = ?, upsilon = ?, phi = ?
Omega = ?, Delta = ?, Sigma = ?
 
???????????
?rectangle?
???????????
</code></pre><h3 id="在命令列中展示演示稿" tabindex="-1">在命令列中展示演示稿 <a class="header-anchor" href="#在命令列中展示演示稿" aria-label="Permalink to “在命令列中展示演示稿”">​</a></h3><p>當你把以上代碼保存為slide.md的文本文件後，你可以運行以下命令來展示演示稿：</p><pre><code> $ mdp slide.md 
</code></pre><p>你可以通過按鍵 回車/空格/下翻頁/向下光標鍵 (下一張幻燈)、回退/上翻頁/向上光標鍵 (上一張幻燈)、Home (幻燈首頁)、 End (幻燈末頁)或者 數字N (第N頁幻燈)來操作你的演示稿。</p><p>演示稿的標題將在每頁幻燈的頂部展示，而你的名字和頁碼則會出現在幻燈的底部。</p><p><img src="https://farm9.staticflickr.com/8637/16392457702_ec732d0094_c.jpg" alt=""></p><p>這是嵌套列表和多層次標題的實例效果。</p><p><img src="https://farm9.staticflickr.com/8567/16367397606_29be7df633_c.jpg" alt=""></p><p>這是代碼片段和內聯代碼的實例效果。</p><p><img src="https://farm9.staticflickr.com/8682/15770926144_0f982b0863_b.jpg" alt=""></p><p>這是嵌套引用的實例效果。</p><p><img src="https://farm9.staticflickr.com/8587/16393383115_0865c8b89b_c.jpg" alt=""></p><p>這是放置引文的實例效果。</p><p><img src="https://farm8.staticflickr.com/7409/16392457712_ed36c14bc2_c.jpg" alt=""></p><p>這是UTF-8編碼特殊字符支持的實例效果。</p><p><img src="https://farm9.staticflickr.com/8648/16205981560_7fa3debc75_c.jpg" alt=""></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>`,21)),e("p",null,[t[12]||(t[12]=n("在本教程中，我演示了在命令列中如何使用mdp來創建並且展示一個演示稿。mdp的markdown兼容性讓我們省去了學習其它新格式的麻煩，這相對於另一種名為",-1)),i(a,{href:"http://www.ngolde.de/tpp.html"},{default:o(()=>[...t[11]||(t[11]=[n("tpp",-1)])]),_:1}),t[13]||(t[13]=n("的演示工具來説是一個優勢。拘於mdp的侷限性，它可能無法作為你的默認演示工具。但是，值得肯定的是它一定能在某個場合下派上用場。你覺得mdp怎麼樣呢？你還喜歡其它的什麼東西嗎？",-1))]),t[32]||(t[32]=e("hr",null,null,-1)),e("p",null,[t[15]||(t[15]=n("via: ",-1)),i(a,{href:"http://xmodulo.com/presentation-command-line-linux.html"},{default:o(()=>[...t[14]||(t[14]=[n("http://xmodulo.com/presentation-command-line-linux.html",-1)])]),_:1})]),e("p",null,[t[19]||(t[19]=n("作者：",-1)),i(a,{href:"http://xmodulo.com/author/nanni"},{default:o(()=>[...t[16]||(t[16]=[n("Dan Nanni",-1)])]),_:1}),t[20]||(t[20]=n(" 譯者：",-1)),i(a,{href:"https://github.com/soooogreen"},{default:o(()=>[...t[17]||(t[17]=[n("soooogreen",-1)])]),_:1}),t[21]||(t[21]=n(" 校對：",-1)),i(a,{href:"https://github.com/wxy"},{default:o(()=>[...t[18]||(t[18]=[n("wxy",-1)])]),_:1})]),e("p",null,[t[24]||(t[24]=n("本文由 ",-1)),i(a,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[22]||(t[22]=[n("LCTT",-1)])]),_:1}),t[25]||(t[25]=n(" 原創翻譯，",-1)),i(a,{href:"http://linux.cn/"},{default:o(()=>[...t[23]||(t[23]=[n("Linux中國",-1)])]),_:1}),t[26]||(t[26]=n(" 榮譽推出",-1))])])}const L=s(m,[["render",u]]);export{w as __pageData,L as default};
