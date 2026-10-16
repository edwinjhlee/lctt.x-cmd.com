import{_ as r,a0 as i,w as s,s as a,ao as p,I as t,x as e,a1 as l,A as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"在Linux中模擬擊鍵和鼠標移動 | LCTT x X-CMD","titleTemplate":false,"description":"在Linux中模擬擊鍵和鼠標移動 | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Linux中模擬擊鍵和鼠標移動 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Linux中模擬擊鍵和鼠標移動 | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140711 How to simulate key press and mouse movement in Linux","title":"在Linux中模擬擊鍵和鼠標移動","tag":"201408","desc":""},"relativePath":"201408/20140711 How to simulate key press and mouse movement in Linux.md","filePath":"[post].md"}'),u={name:"201408/20140711 How to simulate key press and mouse movement in Linux.md"};function x(m,o,f,T,L,y){const n=i("Link");return s(),a("div",null,[o[17]||(o[17]=p(`<h1 id="在linux中模擬擊鍵和鼠標移動" tabindex="-1">在Linux中模擬擊鍵和鼠標移動 <a class="header-anchor" href="#在linux中模擬擊鍵和鼠標移動" aria-label="Permalink to “在Linux中模擬擊鍵和鼠標移動”">​</a></h1><pre><code>
你是否曾經擁有一個夢
    ——你的計算機\`
         可以自動為你幹活？
或許，並非因為
    你剛看了終結者。
然而，除此之外
    腳本和任務自動化
        是每個高級用户追尋的夢
如果今天
    有許多的解決方案
        可以滿足這個目標
那麼
    有時候
       就難以從那眾多之中採擷那
       簡潔、聰明而又高效的一個
我
    不能假裝
       是我自己發現了它
而與此同時
    卻偏愛着那個
       整潔的軟體——xdotool
其方法是如此直觀
    正如它作為X11自動化工具的表露
轉換思想
    xdotool可以通過讀取文本文件
       模擬擊鍵的旋律
           以及鼠標的曼舞
</code></pre><h3 id="讓xdotool在linux定居" tabindex="-1">讓Xdotool在Linux定居 <a class="header-anchor" href="#讓xdotool在linux定居" aria-label="Permalink to “讓Xdotool在Linux定居”">​</a></h3><p>對於Ubuntu，Debian或者Linux Mint，你能夠只做：</p><pre><code>$ sudo apt-get install xdotool 
</code></pre><p>對於Fedora，請使用yum命令：</p><pre><code>$ sudo yum install xdotool 
</code></pre>`,7)),t("p",null,[o[1]||(o[1]=e("對於CentOS用户，可以在",-1)),l(n,{href:"http://xmodulo.com/2013/03/how-to-set-up-epel-repository-on-centos.html"},{default:d(()=>[...o[0]||(o[0]=[e("EPEL repo",-1)])]),_:1}),o[2]||(o[2]=e("中找到該包。在啓用EPEL倉庫後，只要使用上面的yum命令就可以達成你的願望。",-1))]),o[18]||(o[18]=t("p",null,"對於Arch用户，可在Community倉庫中找到該包：",-1)),o[19]||(o[19]=t("pre",null,[t("code",null,`$ sudo pacman -S xdotool 
`)],-1)),t("p",null,[o[4]||(o[4]=e("如果你還是找不到你的發行版的對應xdotool，你可以從它的",-1)),l(n,{href:"http://www.semicomplete.com/projects/xdotool/"},{default:d(()=>[...o[3]||(o[3]=[e("官方站點",-1)])]),_:1}),o[5]||(o[5]=e("下載。",-1))]),o[20]||(o[20]=p(`<h3 id="xdotool基本功" tabindex="-1">Xdotool基本功 <a class="header-anchor" href="#xdotool基本功" aria-label="Permalink to “Xdotool基本功”">​</a></h3><p>雖然xdotool是那樣的直觀，但它仍然是個腳本程序。因此，為了要正確地使用它，你還是得了解它的語法。不過敬請放心，相對於程序的功能而言，語法還是比較簡單易學的。</p><p>首先，模擬擊鍵是很容易的。你可以從終端敲入下面的命令：</p><pre><code>$ xdotool key [name of the key] 
</code></pre><p>如果你想要連接兩個鍵，可以在它們之間使用“+”操作符。它看起來像這樣：</p><pre><code>$ xdotool key alt+Tab 
</code></pre><p>這兩個組合鍵可以為你切換窗口。</p><p>要想讓xdotool幫你輸入，可以使用以下命令：</p><pre><code>$ xdotool type &#39;&#39; 
</code></pre><p>這些對於基本的擊鍵而言已經足夠了。但是，xdotool的眾多長處之一，就是它可以獲取特定窗口的焦點。它可以獲取右邊的窗口，然後在裏面輸入，所有你記錄下的按鍵都不會人間蒸發，而是老老實實的如你所願的出現在那裏。要獲得該功能，一個簡單的命令可以搞定：</p><pre><code>$ xdotool search --name [name of the window] key [keys to press]
</code></pre><p>該命令將在打開的窗口中搜索對應名稱的窗口，並聚焦於該窗口，然後模擬擊鍵。</p><p>來點更高級的，但很有用哦，xdotool可以模擬鼠標移動和點擊，看這命令：</p><pre><code>$ xdotool mousemove x y 
</code></pre><p>你可以將光標定位到屏幕座標（x，y）（像素）。你也可以使用“click”參數來組合：</p><pre><code>$ xdotool mousemove x y click 1 
</code></pre><p>這會讓鼠標移動到（x，y），然後點擊鼠標左鍵。“1”代表鼠標左鍵，“2”則是滾輪，“3”則是右鍵。</p><p>最後，一旦你這些命令根植於你腦海，你也許想要實際轉儲於文件來編輯並試着玩玩。鑑於此，就會有超過一個語句以上的內容了。你需要的就是寫一個bash腳本了：</p><pre><code>#!/bin/bash

xdotool [command 1]
xdotool [command 2]
etc
</code></pre><p>或者你可以使用：</p><pre><code>$ xdotool [filename] 
</code></pre><p>這裏你將命令寫入到一個獨立的文件中，然後通過將文件名作為xdotool命令的參數。</p><h3 id="意外收穫" tabindex="-1">意外收穫 <a class="header-anchor" href="#意外收穫" aria-label="Permalink to “意外收穫”">​</a></h3><p>作為本文的一個意外收穫，這裏是xdotool的一個具體實例。你可能聽説過，也可能沒聽説過Bing —— 微軟的搜索引擎。在後面的實例中，你會看到你可能從沒聽過Bing獎勵：一個程序，可以讓你用Bing積分兑取亞馬遜的禮物卡和其它的一些禮物卡。要賺取這些積分，你可以每天在Bing上搜索累計達30次，每次搜索你都會獲得0.5個積分。換句話説，你必須把Bing設為默認搜索引擎，並每天使用它。</p><p>或者，你可以使用xdotool腳本，在這個腳本中，會自動聚焦到Firefox（你可以用你喜歡的瀏覽器來取代它），並使用fortune命令生成一些隨機單詞來實施搜索。大約30秒之內，你的日常搜索任務就完成了。</p><pre><code>#!/bin/bash
 
for i in {1..30}
do
  WID=\`xdotool search --title &quot;Mozilla Firefox&quot; | head -1\`
  xdotool windowfocus $WID
  xdotool key ctrl+l
  xdotool key Tab
  SENTENCE=&quot;$(fortune | cut -d&#39; &#39; -f1-3 | head -1)&quot;
  xdotool type $SENTENCE
  xdotool key &quot;Return&quot;
  sleep 4
done
</code></pre><p>下面來個小結吧：我真的很喜歡xdotool，即便它的完整功能超越了本文涵蓋的範圍。這對於腳本和任務自動化而言，確實是種平易的方式。負面的問題是，它可能不是最有效率的一個。但我要再説一遍，它忠於職守了，而且學習起來也不是那麼麻煩。</p><p>你對xdotool怎麼看呢？你是否更喜歡另外一個自動化工具，而不是它呢？為什麼呢？請在評論中告訴我們吧。</p><hr>`,29)),t("p",null,[o[7]||(o[7]=e("via: ",-1)),l(n,{href:"http://xmodulo.com/2014/07/simulate-key-press-mouse-movement-linux.html"},{default:d(()=>[...o[6]||(o[6]=[e("http://xmodulo.com/2014/07/simulate-key-press-mouse-movement-linux.html",-1)])]),_:1})]),t("p",null,[o[10]||(o[10]=e("譯者：",-1)),l(n,{href:"https://github.com/GOLinux"},{default:d(()=>[...o[8]||(o[8]=[e("GOLinux",-1)])]),_:1}),o[11]||(o[11]=e(" 校對：",-1)),l(n,{href:"https://github.com/wxy"},{default:d(()=>[...o[9]||(o[9]=[e(" wxy",-1)])]),_:1})]),t("p",null,[o[14]||(o[14]=e("本文由 ",-1)),l(n,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...o[12]||(o[12]=[e("LCTT",-1)])]),_:1}),o[15]||(o[15]=e(" 原創翻譯，",-1)),l(n,{href:"http://linux.cn/"},{default:d(()=>[...o[13]||(o[13]=[e("Linux中國",-1)])]),_:1}),o[16]||(o[16]=e(" 榮譽推出",-1))])])}const h=r(u,[["render",x]]);export{b as __pageData,h as default};
