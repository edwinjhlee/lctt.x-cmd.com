import{_ as a,a0 as i,w as l,s,ao as d,I as n,x as p,a1 as r,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"使用GDB命令行调试器调试C/C++程序 | LCTT x X-CMD","titleTemplate":false,"description":"使用GDB命令行调试器调试C/C++程序 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用GDB命令行调试器调试C/C++程序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用GDB命令行调试器调试C/C++程序 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/How-to-debug-a-C or C++ program with GDB command-line debugger","title":"使用GDB命令行调试器调试C/C++程序","tag":"201411","desc":""},"relativePath":"201411/How-to-debug-a-C or C++ program with GDB command-line debugger.md","filePath":"[post].md"}'),m={name:"201411/How-to-debug-a-C or C++ program with GDB command-line debugger.md"};function u(g,e,c,f,b,C){const t=i("Link");return l(),s("div",null,[e[19]||(e[19]=d(`<h1 id="使用gdb命令行调试器调试c-c-程序" tabindex="-1">使用GDB命令行调试器调试C/C++程序 <a class="header-anchor" href="#使用gdb命令行调试器调试c-c-程序" aria-label="Permalink to “使用GDB命令行调试器调试C/C++程序”">​</a></h1><p>没有调试器的情况下编写程序时最糟糕的状况是什么？编译时跪着祈祷不要出错？用血祭召唤恶魔帮你运行可执行程序？或者在每一行代码间添加printf(&quot;test&quot;)语句来定位错误点？如你所知，编写程序时不使用调试器的话是不方便的。幸好，linux下调试还是很方便的。大多数人使用的IDE都集成了调试器，但 linux 最著名的调试器是命令行形式的C/C++调试器GDB。然而，与其他命令行工具一致，DGB需要一定的练习才能完全掌握。这里，我会告诉你GDB的基本情况及使用方法。</p><p>###安装GDB###</p><p>大多数的发行版仓库中都有GDB</p><p>Debian 或 Ubuntu</p><pre><code>$ sudo apt-get install gdb
</code></pre><p>Arch Linux</p><pre><code>$ sudo pacman -S gdb
</code></pre><p>Fedora,CentOS 或 RHEL：</p><pre><code>$sudo yum install gdb
</code></pre>`,10)),n("p",null,[e[1]||(e[1]=p("如果在仓库中找不到的话，可以从",-1)),r(t,{href:"https://www.gnu.org/software/gdb/"},{default:o(()=>[...e[0]||(e[0]=[p("官网中下载",-1)])]),_:1}),e[2]||(e[2]=p("。",-1))]),e[20]||(e[20]=d(`<p>###示例代码###</p><p>当学习GDB时，最好有一份代码，动手试验。下列代码是我编写的简单例子，它可以很好的体现GDB的特性。将它拷贝下来并且进行实验——这是最好的方法。</p><pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
 
int main(int argc, char **argv)
{
    int i;
    int a=0, b=0, c=0;
    double d;
    for (i=0; i&lt;100; i++)
    {
        a++;
        if (i&gt;97)
            d = i / 2.0;
        b++;
    }
    return 0;
}
</code></pre><p>###GDB的使用###</p><p>首先最重要的，你需要使用编译器的 “-g“选项来编译程序，这样可执行程序才能通过GDB来运行。通过下列语句开始调试：</p><pre><code>$ gdb -tui [executable&#39;s name]
</code></pre><p>使用”-tui“选项可以将代码显示在一个漂亮的交互式窗口内（所以被称为“文本用户界面 TUI”），在这个窗口内可以使用光标来操控，同时在下面的GDB shell中输入命令。</p><p><img src="https://farm3.staticflickr.com/2947/15397534362_ac0b5692c8_z.jpg" alt=""></p><p>现在我们可以在程序的任何地方设置断点。你可以通过下列命令来为当前源文件的某一行设置断点。</p><pre><code>break [行号]
</code></pre><p>或者为一个特定的函数设置断点：</p><pre><code>break [函数名]
</code></pre><p>甚至可以设置条件断点</p><pre><code>break [行号] if [条件]
</code></pre><p>例如，在我们的示例代码中，可以设置如下：</p><pre><code>break 11 if i &gt; 97
</code></pre><p><img src="https://farm3.staticflickr.com/2948/15374839066_8c7c0eb8a4_o.png" alt=""></p><p>这样，程序循环97次之后停留在“a++”语句上。这样是非常方便的，避免了我们需要手动循环97次。</p><p>最后但也是很重要的是，我们可以设置一个“观察断点”，当这个被观察的变量发生变化时，程序会被停止。</p><pre><code>watch [变量]
</code></pre><p>这里我们可以设置如下：</p><pre><code>watch d
</code></pre><p>当d的值发生变化时程序会停止运行（例如，当i&gt;97为真时）。</p><p>当设置断点后，使用&quot;run&quot;命令开始运行程序，或按如下所示：</p><pre><code>r [程序的输入参数（如果有的话）]
</code></pre><p>gdb中，大多数的命令单词都可以简写为一个字母。</p><p>不出意外，程序会停留在11行。这里，我们可以做些有趣的事情。下列命令：</p><pre><code>bt
</code></pre><p>回溯功能（backtrace）可以让我们知道程序如何到达这条语句的。</p><p><img src="https://farm3.staticflickr.com/2943/15211202760_1e77a3bb2e_z.jpg" alt=""></p><pre><code>info locals
</code></pre><p>这条语句会显示所有的局部变量以及它们的值（你可以看到，我没有为ｄ设置初始值，所以它现在的值是任意值）。</p><p>当然：</p><p><img src="https://farm4.staticflickr.com/3843/15374838916_8b65e4e3c7_z.jpg" alt=""></p><pre><code>p [变量]
</code></pre><p>这个命令可以显示特定变量的值，而更进一步：</p><pre><code>ptype [变量]
</code></pre><p>可以显示变量的类型。所以这里可以确定d是double型。</p><p><img src="https://farm4.staticflickr.com/3881/15397534242_3cb6163252_o.jpg" alt=""></p><p>既然已经到这一步了，我么不妨这么做：</p><pre><code>set var [变量] = [新的值]
</code></pre><p>这样会覆盖变量的值。不过需要注意，你不能创建一个新的变量或改变变量的类型。我们可以这样做：</p><pre><code>set var a = 0
</code></pre><p><img src="https://farm3.staticflickr.com/2949/15211357497_d28963a9eb_o.png" alt=""></p><p>如其他优秀的调试器一样，我们可以单步调试：</p><pre><code>step
</code></pre><p>使用如上命令，运行到下一条语句，有可能进入到一个函数里面。或者使用：</p><pre><code>next
</code></pre><p>这可以直接运行下一条语句，而不进入子函数内部。</p><p><img src="https://farm4.staticflickr.com/3927/15397863215_fb2f5912ac_o.jpg" alt=""></p><p>结束测试后，删除断点：</p><pre><code>delete [行号]
</code></pre><p>从当前断点继续运行程序：</p><pre><code>continue
</code></pre><p>退出GDB：</p><pre><code>quit
</code></pre>`,56)),n("p",null,[e[4]||(e[4]=p("总之，有了GDB，编译时不用祈祷上帝了，运行时不用血祭了，再也不用printf(“test“）了。当然，这里所讲的并不完整，而且GDB的功能远远不止于此。所以我强烈建议你自己更加深入的学习它。我现在感兴趣的是将GDB整合到Vim中。同时，这里有一个",-1)),r(t,{href:"http://users.ece.utexas.edu/~adnan/gdb-refcard.pdf"},{default:o(()=>[...e[3]||(e[3]=[p("备忘录",-1)])]),_:1}),e[5]||(e[5]=p("记录了GDB所有的命令行，以供查阅。",-1))]),e[21]||(e[21]=n("p",null,"你对GDB有什么看法？你会将它与图形调试器对比吗，它有什么优势呢？对于将GDB集成到Vim有什么看法呢？将你的想法写到评论里。",-1)),e[22]||(e[22]=n("hr",null,null,-1)),n("p",null,[e[7]||(e[7]=p("via: ",-1)),r(t,{href:"http://xmodulo.com/gdb-command-line-debugger.html"},{default:o(()=>[...e[6]||(e[6]=[p("http://xmodulo.com/gdb-command-line-debugger.html",-1)])]),_:1})]),n("p",null,[e[11]||(e[11]=p("作者：",-1)),r(t,{href:"http://xmodulo.com/author/adrien"},{default:o(()=>[...e[8]||(e[8]=[p("Adrien Brochard",-1)])]),_:1}),e[12]||(e[12]=p(" 译者：",-1)),r(t,{href:"https://github.com/SPccman"},{default:o(()=>[...e[9]||(e[9]=[p("SPccman",-1)])]),_:1}),e[13]||(e[13]=p(" 校对：",-1)),r(t,{href:"https://github.com/wxy"},{default:o(()=>[...e[10]||(e[10]=[p("wxy",-1)])]),_:1})]),n("p",null,[e[16]||(e[16]=p("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[14]||(e[14]=[p("LCTT",-1)])]),_:1}),e[17]||(e[17]=p(" 原创翻译，",-1)),r(t,{href:"http://linux.cn/"},{default:o(()=>[...e[15]||(e[15]=[p("Linux中国",-1)])]),_:1}),e[18]||(e[18]=p(" 荣誉推出",-1))])])}const G=a(m,[["render",u]]);export{T as __pageData,G as default};
