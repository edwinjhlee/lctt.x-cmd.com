import{_ as s,a0 as r,w as d,s as p,I as e,x as n,a1 as i,A as o,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"如何在Linux命令行中创建以及展示演示稿 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux命令行中创建以及展示演示稿 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux命令行中创建以及展示演示稿 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux命令行中创建以及展示演示稿 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150202 How to create and show a presentation from the command line on Linux","title":"如何在Linux命令行中创建以及展示演示稿","tag":"201502","desc":""},"relativePath":"201502/20150202 How to create and show a presentation from the command line on Linux.md","filePath":"[post].md"}'),m={name:"201502/20150202 How to create and show a presentation from the command line on Linux.md"};function u(h,t,f,x,g,b){const a=r("Link");return d(),p("div",null,[t[27]||(t[27]=e("h1",{id:"如何在linux命令行中创建以及展示演示稿",tabindex:"-1"},[n("如何在Linux命令行中创建以及展示演示稿 "),e("a",{class:"header-anchor",href:"#如何在linux命令行中创建以及展示演示稿","aria-label":"Permalink to “如何在Linux命令行中创建以及展示演示稿”"},"​")],-1)),t[28]||(t[28]=e("p",null,"你在准备一场演讲的时候，脑海可能会先被图文并茂、形象华丽的演示图稿所占据。诚然，没有人会否认一份生动形象的演讲稿所带来的积极作用。然而，并非所有的演讲都需要TED Talk的质量。更多时候，演讲稿只为传达特定的信息。 而这个，使用文本信息足以完成。在这种情况下，你的时间可以更好的花在信息的搜集和核实上面，而不是在谷歌图片搜索（Google Image）上寻找好看的图片。",-1)),e("p",null,[t[2]||(t[2]=n("在Linux的世界里，有几个不同的方式供你选择来做演讲。比如带有大量多媒体展示、视觉冲击效果极佳的",-1)),i(a,{href:"http://bartaz.github.io/impress.js/"},{default:o(()=>[...t[0]||(t[0]=[n("Impress.js",-1)])]),_:1}),t[3]||(t[3]=n("，专为LaTex用户提供的Beamer，等等。而如果你苦于寻找一种简单的方式来创建并且展示文本演示稿，",-1)),i(a,{href:"https://github.com/visit1985/mdp"},{default:o(()=>[...t[1]||(t[1]=[n("mdp",-1)])]),_:1}),t[4]||(t[4]=n(" 就能帮你实现。",-1))]),t[29]||(t[29]=e("h3",{id:"什么是mdp",tabindex:"-1"},[n("什么是Mdp？ "),e("a",{class:"header-anchor",href:"#什么是mdp","aria-label":"Permalink to “什么是Mdp？”"},"​")],-1)),e("p",null,[t[6]||(t[6]=n("mdp是Linux下一款基于ncurses的命令行演示工具。我喜欢mdp在于它对",-1)),i(a,{href:"http://daringfireball.net/projects/markdown/"},{default:o(()=>[...t[5]||(t[5]=[n("markdown",-1)])]),_:1}),t[7]||(t[7]=n("的支持，使得我很容易以熟悉的markdown格式来创建幻灯片。自然，它还可以很轻松地用HTML格式来发布幻灯片。另一个好处是它支持UTF-8字符编码，这让非英语字符（如希腊或西里尔字母）的展示也变得很方便。",-1))]),t[30]||(t[30]=l(`<h3 id="在linux中安装mdp" tabindex="-1">在Linux中安装Mdp <a class="header-anchor" href="#在linux中安装mdp" aria-label="Permalink to “在Linux中安装Mdp”">​</a></h3><p>mdp的依赖需求很少（如 ncursesw），这使得安装非常简单。</p><h4 id="debian、ubuntu或者它们的衍生版" tabindex="-1">Debian、Ubuntu或者它们的衍生版 <a class="header-anchor" href="#debian、ubuntu或者它们的衍生版" aria-label="Permalink to “Debian、Ubuntu或者它们的衍生版”">​</a></h4><pre><code>$ sudo apt-get install git gcc make libncursesw5-dev
$ git clone https://github.com/visit1985/mdp.git
$ cd mdp
$ make
$ sudo make install 
</code></pre><h4 id="fedora或者centos-rhel" tabindex="-1">Fedora或者CentOS/RHEL <a class="header-anchor" href="#fedora或者centos-rhel" aria-label="Permalink to “Fedora或者CentOS/RHEL”">​</a></h4><pre><code>$ sudo yum install git gcc make ncurses-devel
$ git clone https://github.com/visit1985/mdp.git
$ cd mdp
$ make
$ sudo make install 
</code></pre><h4 id="arch-linux" tabindex="-1">Arch Linux <a class="header-anchor" href="#arch-linux" aria-label="Permalink to “Arch Linux”">​</a></h4>`,7)),e("p",null,[t[9]||(t[9]=n("Arch Linux可以通过",-1)),i(a,{href:"https://aur.archlinux.org/packages/mdp-git/"},{default:o(()=>[...t[8]||(t[8]=[n("AUR",-1)])]),_:1}),t[10]||(t[10]=n("轻松安装mdp。",-1))]),t[31]||(t[31]=l(`<h3 id="在命令行中创建演示稿" tabindex="-1">在命令行中创建演示稿 <a class="header-anchor" href="#在命令行中创建演示稿" aria-label="Permalink to “在命令行中创建演示稿”">​</a></h3><p>安装mdp完毕，你可以使用你喜欢的文本编辑器来轻松创建一个演示稿。如果你熟悉markdown的话，很快就可以驾驭mdp。而对于那些不熟悉markdown的人来说，学习mdp最好的方式就是从一个实例着手。</p><p>这里有一份6页的演示稿样本可供参考。</p><pre><code>%title: Sample Presentation made with mdp (Xmodulo.com)
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
</code></pre><h3 id="在命令行中展示演示稿" tabindex="-1">在命令行中展示演示稿 <a class="header-anchor" href="#在命令行中展示演示稿" aria-label="Permalink to “在命令行中展示演示稿”">​</a></h3><p>当你把以上代码保存为slide.md的文本文件后，你可以运行以下命令来展示演示稿：</p><pre><code> $ mdp slide.md 
</code></pre><p>你可以通过按键 回车/空格/下翻页/向下光标键 (下一张幻灯)、回退/上翻页/向上光标键 (上一张幻灯)、Home (幻灯首页)、 End (幻灯末页)或者 数字N (第N页幻灯)来操作你的演示稿。</p><p>演示稿的标题将在每页幻灯的顶部展示，而你的名字和页码则会出现在幻灯的底部。</p><p><img src="https://farm9.staticflickr.com/8637/16392457702_ec732d0094_c.jpg" alt=""></p><p>这是嵌套列表和多层次标题的实例效果。</p><p><img src="https://farm9.staticflickr.com/8567/16367397606_29be7df633_c.jpg" alt=""></p><p>这是代码片段和内联代码的实例效果。</p><p><img src="https://farm9.staticflickr.com/8682/15770926144_0f982b0863_b.jpg" alt=""></p><p>这是嵌套引用的实例效果。</p><p><img src="https://farm9.staticflickr.com/8587/16393383115_0865c8b89b_c.jpg" alt=""></p><p>这是放置引文的实例效果。</p><p><img src="https://farm8.staticflickr.com/7409/16392457712_ed36c14bc2_c.jpg" alt=""></p><p>这是UTF-8编码特殊字符支持的实例效果。</p><p><img src="https://farm9.staticflickr.com/8648/16205981560_7fa3debc75_c.jpg" alt=""></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3>`,21)),e("p",null,[t[12]||(t[12]=n("在本教程中，我演示了在命令行中如何使用mdp来创建并且展示一个演示稿。mdp的markdown兼容性让我们省去了学习其它新格式的麻烦，这相对于另一种名为",-1)),i(a,{href:"http://www.ngolde.de/tpp.html"},{default:o(()=>[...t[11]||(t[11]=[n("tpp",-1)])]),_:1}),t[13]||(t[13]=n("的演示工具来说是一个优势。拘于mdp的局限性，它可能无法作为你的默认演示工具。但是，值得肯定的是它一定能在某个场合下派上用场。你觉得mdp怎么样呢？你还喜欢其它的什么东西吗？",-1))]),t[32]||(t[32]=e("hr",null,null,-1)),e("p",null,[t[15]||(t[15]=n("via: ",-1)),i(a,{href:"http://xmodulo.com/presentation-command-line-linux.html"},{default:o(()=>[...t[14]||(t[14]=[n("http://xmodulo.com/presentation-command-line-linux.html",-1)])]),_:1})]),e("p",null,[t[19]||(t[19]=n("作者：",-1)),i(a,{href:"http://xmodulo.com/author/nanni"},{default:o(()=>[...t[16]||(t[16]=[n("Dan Nanni",-1)])]),_:1}),t[20]||(t[20]=n(" 译者：",-1)),i(a,{href:"https://github.com/soooogreen"},{default:o(()=>[...t[17]||(t[17]=[n("soooogreen",-1)])]),_:1}),t[21]||(t[21]=n(" 校对：",-1)),i(a,{href:"https://github.com/wxy"},{default:o(()=>[...t[18]||(t[18]=[n("wxy",-1)])]),_:1})]),e("p",null,[t[24]||(t[24]=n("本文由 ",-1)),i(a,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[22]||(t[22]=[n("LCTT",-1)])]),_:1}),t[25]||(t[25]=n(" 原创翻译，",-1)),i(a,{href:"http://linux.cn/"},{default:o(()=>[...t[23]||(t[23]=[n("Linux中国",-1)])]),_:1}),t[26]||(t[26]=n(" 荣誉推出",-1))])])}const L=s(m,[["render",u]]);export{w as __pageData,L as default};
