import{_ as l,a0 as t,w as c,s as o,ao as d,I as e,x as n,a1 as i,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"在 Linux 中分割和重組文件 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中分割和重組文件 | LCTT (201708) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中分割和重組文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中分割和重組文件 | LCTT (201708) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201708/20170824 Splitting and Re-Assembling Files in Linux","title":"在 Linux 中分割和重組文件","tag":"201708","desc":""},"relativePath":"201708/20170824 Splitting and Re-Assembling Files in Linux.md","filePath":"[post].md"}'),h={name:"201708/20170824 Splitting and Re-Assembling Files in Linux.md"};function r(g,s,k,u,b,f){const a=t("Link");return c(),o("div",null,[s[13]||(s[13]=d(`<h1 id="在-linux-中分割和重組文件" tabindex="-1">在 Linux 中分割和重組文件 <a class="header-anchor" href="#在-linux-中分割和重組文件" aria-label="Permalink to “在 Linux 中分割和重組文件”">​</a></h1><p><img src="https://www.linux.com/sites/lcom/files/styles/rendered_file/public/split-files.png?itok=kZTP_VF9" alt="csplit" title="csplit"></p><p>非常有用的 <code>csplit</code> 命令可以將單個文件分割成多個文件。Carla Schroder 解釋説。</p><p>Linux 有幾個用於分割文件的工具程序。那麼你為什麼要分割文件呢？一個用例是將大文件分割成更小的尺寸，以便它適用於比較小的存儲介質，比如 U 盤。當您遇到 FAT32（最大文件大小為 4GB），且您的文件大於此時，通過 U 盤傳輸文件也是一個很好的技巧。另一個用例是加速網絡文件傳輸，因為小文件的並行傳輸通常更快。</p><p>我們將學習如何使用 <code>csplit</code>，<code>split</code> 和 <code>cat</code> 來重新整理文件，然後再將文件合併在一起。這些操作在任何文件類型下都有用：文本、圖片、音頻文件、ISO 鏡像文件等。</p><h3 id="使用-csplit-分割文件" tabindex="-1">使用 csplit 分割文件 <a class="header-anchor" href="#使用-csplit-分割文件" aria-label="Permalink to “使用 csplit 分割文件”">​</a></h3><p><code>csplit</code> 是這些有趣的小命令中的一個，它永遠伴你左右，一旦開始用它就離不開了。<code>csplit</code> 將單個文件分割成多個文件。這個示例演示了最簡單的使用方法，它將文件 foo.txt 分為三個文件，以行號 17 和 33 作為分割點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt 17 33</span></span>
<span class="line"><span>2591</span></span>
<span class="line"><span>3889</span></span>
<span class="line"><span>2359</span></span></code></pre></div><p><code>csplit</code> 在當前目錄下創建了三個新文件，並以字節為單位打印出新文件的大小。默認情況下，每個新文件名為 <code>xx_nn</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>xx00</span></span>
<span class="line"><span>xx01</span></span>
<span class="line"><span>xx02</span></span></code></pre></div><p>您可以使用 <code>head</code> 命令查看每個新文件的前十行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ head xx*</span></span>
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
<span class="line"><span>More foo text</span></span></code></pre></div><p>如果要將文件分割成包含相同行數的多個文件怎麼辦？可以指定行數，然後將重複次數放在在花括號中。此示例重複分割 4 次，並將剩下的轉儲到最後一個文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt 5 {4}</span></span>
<span class="line"><span>57</span></span>
<span class="line"><span>1488</span></span>
<span class="line"><span>249</span></span>
<span class="line"><span>1866</span></span>
<span class="line"><span>3798</span></span></code></pre></div><p>您可以使用星號通配符來告訴 <code>csplit</code> 儘可能多地重複分割。這聽起來很酷，但是如果文件不能等分，則可能會失敗（LCTT 譯註：低版本的 <code>csplit</code> 不支持此參數）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt 10 {*}</span></span>
<span class="line"><span>1545</span></span>
<span class="line"><span>2115</span></span>
<span class="line"><span>1848</span></span>
<span class="line"><span>1901</span></span>
<span class="line"><span>csplit: &#39;10&#39;: line number out of range on repetition 4</span></span>
<span class="line"><span>1430</span></span></code></pre></div><p>默認的行為是刪除發生錯誤時的輸出文件。你可以用 <code>-k</code> 選項來解決這個問題，當有錯誤時，它就不會刪除輸出文件。另一個行為是每次運行 <code>csplit</code> 時，它將覆蓋之前創建的文件，所以你需要使用新的文件名來分別保存它們。使用 <code>--prefix= _prefix_</code> 來設置一個不同的文件前綴：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit -k --prefix=mine foo.txt 5 {*}  </span></span>
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
<span class="line"><span>mine05</span></span></code></pre></div><p>選項 <code>-n</code> 可用於改變對文件進行編號的數字位數（默認是 2 位）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit -n 3 --prefix=mine foo.txt 5 {4}</span></span>
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
<span class="line"><span>mine005</span></span></code></pre></div><p><code>csplit</code> 中的 “c” 是上下文（context）的意思。這意味着你可以根據任意匹配的方式或者巧妙的正則表達式來分割文件。下面的例子將文件分為兩部分。第一個文件在包含第一次出現 “fie” 的前一行處結束，第二個文件則以包含 “fie” 的行開頭。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt /fie/</span></span></code></pre></div><p>在每次出現 “fie” 時分割文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt /fie/ {*}</span></span></code></pre></div><p>在 “fie” 前五次出現的地方分割文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit foo.txt /fie/ {5}</span></span></code></pre></div><p>僅當內容以包含 “fie” 的行開始時才複製，並且省略前面的所有內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ csplit myfile %fie%</span></span></code></pre></div><h3 id="將文件分割成不同大小" tabindex="-1">將文件分割成不同大小 <a class="header-anchor" href="#將文件分割成不同大小" aria-label="Permalink to “將文件分割成不同大小”">​</a></h3><p><code>split</code> 與 <code>csplit</code> 類似。它將文件分割成特定的大小，當您將大文件分割成小的多媒體文件或者使用網絡傳送時，這就非常棒了。默認的大小為 1000 行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ split foo.mv</span></span>
<span class="line"><span>$ ls -hl</span></span>
<span class="line"><span>266K Aug 21 16:58 xaa</span></span>
<span class="line"><span>267K Aug 21 16:58 xab</span></span>
<span class="line"><span>315K Aug 21 16:58 xac</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>它們分割出來的大小相似，但你可以指定任何你想要的大小。這個例子中是 20M 字節：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ split -b 20M foo.mv</span></span></code></pre></div><p>尺寸單位縮寫為 K，M，G，T，P，E，Z，Y（1024 的冪）或者 KB，MB，GB 等等（1000 的冪）。</p><p>為文件名選擇你自己的前綴和後綴：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ split -a 3 --numeric-suffixes=9 --additional-suffix=mine foo.mv SB</span></span>
<span class="line"><span>240K Aug 21 17:44 SB009mine</span></span>
<span class="line"><span>214K Aug 21 17:44 SB010mine</span></span>
<span class="line"><span>220K Aug 21 17:44 SB011mine</span></span></code></pre></div><p><code>-a</code> 選項控制編號的數字位置。<code>--numeric-suffixes</code> 設置編號的開始值。默認前綴為 <code>x</code>，你也可以通過在文件名後輸入它來設置一個不同的前綴。</p><h3 id="將分割後的文件合併" tabindex="-1">將分割後的文件合併 <a class="header-anchor" href="#將分割後的文件合併" aria-label="Permalink to “將分割後的文件合併”">​</a></h3><p>你可能想在某個時候重組你的文件。常用的 <code>cat</code> 命令就用在這裏：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat SB0* &gt; foo2.txt</span></span></code></pre></div><p>示例中的星號通配符將匹配到所有以 SB0 開頭的文件，這可能不會得到您想要的結果。您可以使用問號通配符進行更精確的匹配，每個字符使用一個問號：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat SB0?????? &gt; foo2.txt</span></span></code></pre></div><p>和往常一樣，請查閲相關的手冊和信息頁面以獲取完整的命令選項。</p><hr>`,44)),e("p",null,[s[1]||(s[1]=n("via: ",-1)),i(a,{href:"https://www.linux.com/learn/intro-to-linux/2017/8/splitting-and-re-assembling-files-linux"},{default:p(()=>[...s[0]||(s[0]=[n("https://www.linux.com/learn/intro-to-linux/2017/8/splitting-and-re-assembling-files-linux",-1)])]),_:1})]),e("p",null,[s[5]||(s[5]=n("作者：",-1)),i(a,{href:"https://www.linux.com/users/cschroder"},{default:p(()=>[...s[2]||(s[2]=[n("CARLA SCHRODER",-1)])]),_:1}),s[6]||(s[6]=n(" 譯者：",-1)),i(a,{href:"https://github.com/firmianay"},{default:p(()=>[...s[3]||(s[3]=[n("firmianay",-1)])]),_:1}),s[7]||(s[7]=n(" 校對：",-1)),i(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[4]||(s[4]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[10]||(s[10]=n("本文由 ",-1)),i(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[8]||(s[8]=[n("LCTT",-1)])]),_:1}),s[11]||(s[11]=n(" 原創編譯，",-1)),i(a,{href:"https://linux.cn/"},{default:p(()=>[...s[9]||(s[9]=[n("Linux中國",-1)])]),_:1}),s[12]||(s[12]=n(" 榮譽推出",-1))])])}const C=l(h,[["render",r]]);export{y as __pageData,C as default};
