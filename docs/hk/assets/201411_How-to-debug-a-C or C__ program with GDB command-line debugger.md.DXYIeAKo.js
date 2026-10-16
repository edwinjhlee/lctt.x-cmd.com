import{_ as a,a0 as i,w as l,s,ao as d,I as n,x as p,a1 as r,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"使用GDB命令列調試器調試C/C++程序 | LCTT x X-CMD","titleTemplate":false,"description":"使用GDB命令列調試器調試C/C++程序 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用GDB命令列調試器調試C/C++程序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用GDB命令列調試器調試C/C++程序 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/How-to-debug-a-C or C++ program with GDB command-line debugger","title":"使用GDB命令列調試器調試C/C++程序","tag":"201411","desc":""},"relativePath":"201411/How-to-debug-a-C or C++ program with GDB command-line debugger.md","filePath":"[post].md"}'),m={name:"201411/How-to-debug-a-C or C++ program with GDB command-line debugger.md"};function u(g,e,c,f,b,C){const t=i("Link");return l(),s("div",null,[e[19]||(e[19]=d(`<h1 id="使用gdb命令列調試器調試c-c-程序" tabindex="-1">使用GDB命令列調試器調試C/C++程序 <a class="header-anchor" href="#使用gdb命令列調試器調試c-c-程序" aria-label="Permalink to “使用GDB命令列調試器調試C/C++程序”">​</a></h1><p>沒有調試器的情況下編寫程序時最糟糕的狀況是什麼？編譯時跪着祈禱不要出錯？用血祭召喚惡魔幫你運行可執行程序？或者在每一行代碼間添加printf(&quot;test&quot;)語句來定位錯誤點？如你所知，編寫程序時不使用調試器的話是不方便的。幸好，linux下調試還是很方便的。大多數人使用的IDE都集成了調試器，但 linux 最著名的調試器是命令列形式的C/C++調試器GDB。然而，與其他命令列工具一致，DGB需要一定的練習才能完全掌握。這裏，我會告訴你GDB的基本情況及使用方法。</p><p>###安裝GDB###</p><p>大多數的發行版倉庫中都有GDB</p><p>Debian 或 Ubuntu</p><pre><code>$ sudo apt-get install gdb
</code></pre><p>Arch Linux</p><pre><code>$ sudo pacman -S gdb
</code></pre><p>Fedora,CentOS 或 RHEL：</p><pre><code>$sudo yum install gdb
</code></pre>`,10)),n("p",null,[e[1]||(e[1]=p("如果在倉庫中找不到的話，可以從",-1)),r(t,{href:"https://www.gnu.org/software/gdb/"},{default:o(()=>[...e[0]||(e[0]=[p("官網中下載",-1)])]),_:1}),e[2]||(e[2]=p("。",-1))]),e[20]||(e[20]=d(`<p>###示例代碼###</p><p>當學習GDB時，最好有一份代碼，動手試驗。下列代碼是我編寫的簡單例子，它可以很好的體現GDB的特性。將它拷貝下來並且進行實驗——這是最好的方法。</p><pre><code>#include &lt;stdio.h&gt;
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
</code></pre><p>###GDB的使用###</p><p>首先最重要的，你需要使用編譯器的 “-g“選項來編譯程序，這樣可執行程序才能通過GDB來運行。通過下列語句開始調試：</p><pre><code>$ gdb -tui [executable&#39;s name]
</code></pre><p>使用”-tui“選項可以將代碼顯示在一個漂亮的交互式窗口內（所以被稱為“文本用户界面 TUI”），在這個窗口內可以使用光標來操控，同時在下面的GDB shell中輸入命令。</p><p><img src="https://farm3.staticflickr.com/2947/15397534362_ac0b5692c8_z.jpg" alt=""></p><p>現在我們可以在程序的任何地方設置斷點。你可以通過下列命令來為當前源文件的某一行設置斷點。</p><pre><code>break [行號]
</code></pre><p>或者為一個特定的函數設置斷點：</p><pre><code>break [函數名]
</code></pre><p>甚至可以設置條件斷點</p><pre><code>break [行號] if [條件]
</code></pre><p>例如，在我們的示例代碼中，可以設置如下：</p><pre><code>break 11 if i &gt; 97
</code></pre><p><img src="https://farm3.staticflickr.com/2948/15374839066_8c7c0eb8a4_o.png" alt=""></p><p>這樣，程序循環97次之後停留在“a++”語句上。這樣是非常方便的，避免了我們需要手動循環97次。</p><p>最後但也是很重要的是，我們可以設置一個“觀察斷點”，當這個被觀察的變量發生變化時，程序會被停止。</p><pre><code>watch [變量]
</code></pre><p>這裏我們可以設置如下：</p><pre><code>watch d
</code></pre><p>當d的值發生變化時程序會停止運行（例如，當i&gt;97為真時）。</p><p>當設置斷點後，使用&quot;run&quot;命令開始運行程序，或按如下所示：</p><pre><code>r [程序的輸入參數（如果有的話）]
</code></pre><p>gdb中，大多數的命令單詞都可以簡寫為一個字母。</p><p>不出意外，程序會停留在11行。這裏，我們可以做些有趣的事情。下列命令：</p><pre><code>bt
</code></pre><p>回溯功能（backtrace）可以讓我們知道程序如何到達這條語句的。</p><p><img src="https://farm3.staticflickr.com/2943/15211202760_1e77a3bb2e_z.jpg" alt=""></p><pre><code>info locals
</code></pre><p>這條語句會顯示所有的局部變量以及它們的值（你可以看到，我沒有為ｄ設置初始值，所以它現在的值是任意值）。</p><p>當然：</p><p><img src="https://farm4.staticflickr.com/3843/15374838916_8b65e4e3c7_z.jpg" alt=""></p><pre><code>p [變量]
</code></pre><p>這個命令可以顯示特定變量的值，而更進一步：</p><pre><code>ptype [變量]
</code></pre><p>可以顯示變量的類型。所以這裏可以確定d是double型。</p><p><img src="https://farm4.staticflickr.com/3881/15397534242_3cb6163252_o.jpg" alt=""></p><p>既然已經到這一步了，我麼不妨這麼做：</p><pre><code>set var [變量] = [新的值]
</code></pre><p>這樣會覆蓋變量的值。不過需要注意，你不能創建一個新的變量或改變變量的類型。我們可以這樣做：</p><pre><code>set var a = 0
</code></pre><p><img src="https://farm3.staticflickr.com/2949/15211357497_d28963a9eb_o.png" alt=""></p><p>如其他優秀的調試器一樣，我們可以單步調試：</p><pre><code>step
</code></pre><p>使用如上命令，運行到下一條語句，有可能進入到一個函數里面。或者使用：</p><pre><code>next
</code></pre><p>這可以直接運行下一條語句，而不進入子函數內部。</p><p><img src="https://farm4.staticflickr.com/3927/15397863215_fb2f5912ac_o.jpg" alt=""></p><p>結束測試後，刪除斷點：</p><pre><code>delete [行號]
</code></pre><p>從當前斷點繼續運行程序：</p><pre><code>continue
</code></pre><p>退出GDB：</p><pre><code>quit
</code></pre>`,56)),n("p",null,[e[4]||(e[4]=p("總之，有了GDB，編譯時不用祈禱上帝了，運行時不用血祭了，再也不用printf(“test“）了。當然，這裏所講的並不完整，而且GDB的功能遠遠不止於此。所以我強烈建議你自己更加深入的學習它。我現在感興趣的是將GDB整合到Vim中。同時，這裏有一個",-1)),r(t,{href:"http://users.ece.utexas.edu/~adnan/gdb-refcard.pdf"},{default:o(()=>[...e[3]||(e[3]=[p("備忘錄",-1)])]),_:1}),e[5]||(e[5]=p("記錄了GDB所有的命令列，以供查閲。",-1))]),e[21]||(e[21]=n("p",null,"你對GDB有什麼看法？你會將它與圖形調試器對比嗎，它有什麼優勢呢？對於將GDB集成到Vim有什麼看法呢？將你的想法寫到評論裏。",-1)),e[22]||(e[22]=n("hr",null,null,-1)),n("p",null,[e[7]||(e[7]=p("via: ",-1)),r(t,{href:"http://xmodulo.com/gdb-command-line-debugger.html"},{default:o(()=>[...e[6]||(e[6]=[p("http://xmodulo.com/gdb-command-line-debugger.html",-1)])]),_:1})]),n("p",null,[e[11]||(e[11]=p("作者：",-1)),r(t,{href:"http://xmodulo.com/author/adrien"},{default:o(()=>[...e[8]||(e[8]=[p("Adrien Brochard",-1)])]),_:1}),e[12]||(e[12]=p(" 譯者：",-1)),r(t,{href:"https://github.com/SPccman"},{default:o(()=>[...e[9]||(e[9]=[p("SPccman",-1)])]),_:1}),e[13]||(e[13]=p(" 校對：",-1)),r(t,{href:"https://github.com/wxy"},{default:o(()=>[...e[10]||(e[10]=[p("wxy",-1)])]),_:1})]),n("p",null,[e[16]||(e[16]=p("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[14]||(e[14]=[p("LCTT",-1)])]),_:1}),e[17]||(e[17]=p(" 原創翻譯，",-1)),r(t,{href:"http://linux.cn/"},{default:o(()=>[...e[15]||(e[15]=[p("Linux中國",-1)])]),_:1}),e[18]||(e[18]=p(" 榮譽推出",-1))])])}const G=a(m,[["render",u]]);export{T as __pageData,G as default};
