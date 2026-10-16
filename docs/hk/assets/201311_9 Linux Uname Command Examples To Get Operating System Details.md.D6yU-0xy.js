import{_ as i,a0 as s,w as p,s as m,ao as d,I as o,x as n,a1 as t,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"九個uname命令獲取Linux系統詳情的實例 | LCTT x X-CMD","titleTemplate":false,"description":"九個uname命令獲取Linux系統詳情的實例 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"九個uname命令獲取Linux系統詳情的實例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"九個uname命令獲取Linux系統詳情的實例 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/9 Linux Uname Command Examples To Get Operating System Details","title":"九個uname命令獲取Linux系統詳情的實例","tag":"201311","desc":""},"relativePath":"201311/9 Linux Uname Command Examples To Get Operating System Details.md","filePath":"[post].md"}'),l={name:"201311/9 Linux Uname Command Examples To Get Operating System Details.md"};function u(x,e,h,c,g,_){const a=s("Link");return p(),m("div",null,[e[11]||(e[11]=d(`<h1 id="九個uname命令獲取linux系統詳情的實例" tabindex="-1">九個uname命令獲取Linux系統詳情的實例 <a class="header-anchor" href="#九個uname命令獲取linux系統詳情的實例" aria-label="Permalink to “九個uname命令獲取Linux系統詳情的實例”">​</a></h1><p>當你在控制台模式下，無法通過“鼠標右鍵 &gt; 關於”獲取操作系統的信息。這時，在Linux下，你可以使用<strong>uname</strong>命令，幫助你完成這些工作。 Uname是<strong>unix name</strong>的縮寫。在控制台中實際使用的時候只需鍵入<strong>uname</strong>。</p><p>當你輸入uname不帶參數時，它僅僅顯示你的操作系統的名字。</p><pre><code># uname

Linux
</code></pre><p>也許這還不能滿足你的需要。所以你需要加上一些參數，來使uname顯示你所需要的信息。</p><p>以下是uname參數的列表:</p><h3 id="_1-內核名稱" tabindex="-1">1. 內核名稱 <a class="header-anchor" href="#_1-內核名稱" aria-label="Permalink to “1. 內核名稱”">​</a></h3><p>你可以用<strong>-s</strong>參數，顯示內核名稱。（譯註：可以在其他的類Unix系統上運行這個命令看看，比如mac就會顯示Darwin）</p><pre><code># uname -s

Linux
</code></pre><p>輸出信息會跟uname不帶參數時輸出的一樣。</p><h3 id="_2-內核發行版" tabindex="-1">2. 內核發行版 <a class="header-anchor" href="#_2-內核發行版" aria-label="Permalink to “2. 內核發行版”">​</a></h3><p>如果你想知道你正在使用哪個內核發行版（指不同的內核打包版本），就可以用<strong>-r</strong>參數</p><pre><code># uname -r

2.6.18-371.1.2.el5
</code></pre><h3 id="_3-內核版本" tabindex="-1">3. 內核版本 <a class="header-anchor" href="#_3-內核版本" aria-label="Permalink to “3. 內核版本”">​</a></h3><p>除一些內核信息外，用<strong>-v</strong>參數uname也能獲取更詳細的內核版本信息（譯註：不是版本號，是指該內核建立的時間和CPU架構等）。</p><pre><code># uname -v

#1 SMP Tue Oct 22 12:57:43 EDT 2013
</code></pre><h3 id="_4-節點名" tabindex="-1">4. 節點名 <a class="header-anchor" href="#_4-節點名" aria-label="Permalink to “4. 節點名”">​</a></h3><p>參數 -n 會提供給你節點的主機名。舉例來説，如果你的主機名是“dev-machine”，<strong>-n</strong>參數就會把主機名打印出來。</p><pre><code># uname -n

dev-machine
</code></pre><p>對於RedHat和CentOS用户來説，你也可以通過<strong>/etc/redhat_release</strong>文件來查看：</p><pre><code># cat /etc/redhat_release

CentOS release 5.10 (Final)
</code></pre><p>如果不是基於RedHat的發行版，你可以查看<strong>/etc/issue</strong>文件.類似如下：</p><pre><code># cat /etc/issue

Linux Mint Olivia \\n \\l:
</code></pre><h3 id="_5-硬件名稱" tabindex="-1">5.硬件名稱 <a class="header-anchor" href="#_5-硬件名稱" aria-label="Permalink to “5.硬件名稱”">​</a></h3><p>如果你想知道用的是哪類機器，你可以嘗試<strong>-m</strong>參數。它將告訴你關於硬件的信息。</p><pre><code># uname -m

i686
</code></pre><p>i686表明了你用的是32位的操作系統，如果是X86_64則表明你用的是64位的系統。</p><h3 id="_6-硬件平台" tabindex="-1">6. 硬件平台 <a class="header-anchor" href="#_6-硬件平台" aria-label="Permalink to “6. 硬件平台”">​</a></h3><p>與硬件名稱類似，-i參數會顯示你的硬件平台（譯註：硬件名稱i686是屬於硬件平台i386系列的）。</p><pre><code># uname -i

i386
</code></pre><p>同樣，i386意味這是正在運行一個32位的系統，如果輸出的是X86_64則説明你正在運行一個64位的系統。</p><h3 id="_7-處理器類型" tabindex="-1">7. 處理器類型 <a class="header-anchor" href="#_7-處理器類型" aria-label="Permalink to “7. 處理器類型”">​</a></h3><p>你可以用<strong>-p</strong>參數查看處理器類型。如果uname無法識別，它會顯示 ‘unknown’ 作為輸出。</p><pre><code># uname -p

i686
</code></pre><h3 id="_8-操作系統" tabindex="-1">8. 操作系統 <a class="header-anchor" href="#_8-操作系統" aria-label="Permalink to “8. 操作系統”">​</a></h3><p>uname也可以透露你正在運行的操作系統信息，用<strong>-o</strong>參數可以實現這個目的。</p><pre><code># uname -o

GNU/Linux
</code></pre><h3 id="_9-所有信息" tabindex="-1">9. 所有信息 <a class="header-anchor" href="#_9-所有信息" aria-label="Permalink to “9. 所有信息”">​</a></h3><p>有一個參數可以展示所有的信息！這就是<strong>-a</strong>參數，它會顯示所有信息。如果<strong>-i和-p</strong>輸出為unknown則默認會被省略。</p><pre><code># uname -a

Linux dev-machine 2.6.18-371.1.2.el5 #1 SMP Tue Oct 22 12:57:43 EDT 2013 i686 i686 i386 GNU/Linux
</code></pre><p>以上就是關於uname命令的使用。請敬請期待更多的命令！</p><p>謝謝閲讀！</p><hr>`,43)),o("p",null,[e[1]||(e[1]=n("via: ",-1)),t(a,{href:"http://linoxide.com/linux-command/uname-command/"},{default:r(()=>[...e[0]||(e[0]=[n("http://linoxide.com/linux-command/uname-command/",-1)])]),_:1})]),o("p",null,[e[4]||(e[4]=n("譯者：",-1)),t(a,{href:"https://github.com/Luoxcat"},{default:r(()=>[...e[2]||(e[2]=[n("Luoxcat",-1)])]),_:1}),e[5]||(e[5]=n(" 校對：",-1)),t(a,{href:"http://blog.csdn.net/tinyeyeser"},{default:r(()=>[...e[3]||(e[3]=[n("Mr小眼兒",-1)])]),_:1})]),o("p",null,[e[8]||(e[8]=n("本文由 ",-1)),t(a,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[n("LCTT",-1)])]),_:1}),e[9]||(e[9]=n(" 原創翻譯，",-1)),t(a,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[n("Linux中國",-1)])]),_:1}),e[10]||(e[10]=n(" 榮譽推出",-1))])])}const b=i(l,[["render",u]]);export{f as __pageData,b as default};
