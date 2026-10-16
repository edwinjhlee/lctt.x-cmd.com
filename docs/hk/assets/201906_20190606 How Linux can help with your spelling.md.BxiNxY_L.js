import{_ as i,a0 as t,w as o,s as r,ao as d,I as n,x as a,a1 as p,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"如何用 Linux 幫助你拼寫 | LCTT x X-CMD","titleTemplate":false,"description":"如何用 Linux 幫助你拼寫 | LCTT (201906) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用 Linux 幫助你拼寫 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用 Linux 幫助你拼寫 | LCTT (201906) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201906/20190606 How Linux can help with your spelling","title":"如何用 Linux 幫助你拼寫","tag":"201906","desc":""},"relativePath":"201906/20190606 How Linux can help with your spelling.md","filePath":"[post].md"}'),c={name:"201906/20190606 How Linux can help with your spelling.md"};function h(g,s,k,u,b,m){const e=t("Link");return o(),r("div",null,[s[18]||(s[18]=d(`<h1 id="如何用-linux-幫助你拼寫" tabindex="-1">如何用 Linux 幫助你拼寫 <a class="header-anchor" href="#如何用-linux-幫助你拼寫" aria-label="Permalink to “如何用 Linux 幫助你拼寫”">​</a></h1><blockquote><p>無論你是糾結一個難以理解的單詞，還是在將報告發給老闆之前再檢查一遍，Linux 都可以幫助你解決拼寫問題。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/201906/17/214715jayk1k1kbiatkido.jpg" alt="Sandra Henry-Stocker"></p><p>Linux 為數據分析和自動化提供了各種工具，它也幫助我們解決了一個一直都在糾結的問題 —— 拼寫！無論在寫每週報告時努力拼出一個單詞，還是在提交商業計劃書之前想要藉助計算機的“眼睛”來找出你的拼寫錯誤。現在我們來看一下它是如何幫助你的。</p><h3 id="look" tabindex="-1">look <a class="header-anchor" href="#look" aria-label="Permalink to “look”">​</a></h3><p><code>look</code> 是其中一款工具。如果你知道一個單詞的開頭，你就可以用這個命令來獲取以這些字母開頭的單詞列表。除非提供了替代詞源，否則 <code>look</code> 將使用 <code>/usr/share/dict/words</code> 中的內容來為你標識單詞。這個文件有數十萬個單詞，可以滿足我們日常使用的大多數英語單詞的需要，但是它可能不包含我們計算機領域中的一些人傾向於使用的更加生僻的單詞，如 zettabyte。</p><p><code>look</code> 命令的語法非常簡單。輸入 <code>look word</code> ，它將遍歷單詞文件中的所有單詞並找到匹配項。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ look amelio</span></span>
<span class="line"><span>ameliorable</span></span>
<span class="line"><span>ameliorableness</span></span>
<span class="line"><span>ameliorant</span></span>
<span class="line"><span>ameliorate</span></span>
<span class="line"><span>ameliorated</span></span>
<span class="line"><span>ameliorates</span></span>
<span class="line"><span>ameliorating</span></span>
<span class="line"><span>amelioration</span></span>
<span class="line"><span>ameliorations</span></span>
<span class="line"><span>ameliorativ</span></span>
<span class="line"><span>ameliorative</span></span>
<span class="line"><span>amelioratively</span></span>
<span class="line"><span>ameliorator</span></span>
<span class="line"><span>amelioratory</span></span></code></pre></div><p>如果你遇到系統中單詞列表中未包含的單詞，將無法獲得任何輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ look zetta</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>如果你沒有看到你所希望出現的單詞，也不要絕望。你可以在你的單詞文件中添加單詞，甚至引用一個完全不同的單詞列表，在網上找一個或者乾脆自己創建一個。你甚至不必將添加的單詞放在按字母順序排列的正確位置；只需將其添加到文件的末尾即可。但是，你必須以 root 用户身份執行此操作。例如（要注意 <code>&gt;&gt;</code>！）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># echo “zettabyte” &gt;&gt; /usr/share/dict/words</span></span></code></pre></div><p>當使用不同的單詞列表時，例如這個例子中的 “jargon” ，你只需要添加文件的名稱。如果不採用默認文件時，請使用完整路徑。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ look nybble /usr/share/dict/jargon</span></span>
<span class="line"><span>nybble</span></span>
<span class="line"><span>nybbles</span></span></code></pre></div><p><code>look</code> 命令大小寫不敏感，因此你不必關心要查找的單詞是否應該大寫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ look zet</span></span>
<span class="line"><span>ZETA</span></span>
<span class="line"><span>Zeta</span></span>
<span class="line"><span>zeta</span></span>
<span class="line"><span>zetacism</span></span>
<span class="line"><span>Zetana</span></span>
<span class="line"><span>zetas</span></span>
<span class="line"><span>Zetes</span></span>
<span class="line"><span>zetetic</span></span>
<span class="line"><span>Zethar</span></span>
<span class="line"><span>Zethus</span></span>
<span class="line"><span>Zetland</span></span>
<span class="line"><span>Zetta</span></span></code></pre></div><p>當然，不是所有的單詞列表都是一樣的。一些 Linux 發行版在單詞文件中提供了<em>多得多</em>的內容。你的文件中可能有十萬或者更多倍的單詞。</p><p>在我的一個 Linux 系統中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -l /usr/share/dict/words</span></span>
<span class="line"><span>102402 /usr/share/dict/words</span></span></code></pre></div><p>在另一個系統中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -l /usr/share/dict/words</span></span>
<span class="line"><span>479828 /usr/share/dict/words</span></span></code></pre></div><p>請記住，<code>look</code> 命令只適用於通過單詞開頭查找，但如果你不想從單詞的開頭查找，還可以使用其他選項。</p><h3 id="grep" tabindex="-1">grep <a class="header-anchor" href="#grep" aria-label="Permalink to “grep”">​</a></h3><p>我們深愛的 <code>grep</code> 命令像其他工具一樣可以從一個單詞文件中選出單詞。如果你正在找以某些字母開頭或結尾的單詞，使用 <code>grep</code> 命令是自然而然的事情。它可以通過單詞的開頭、結尾或中間部分來匹配單詞。系統中的單詞文件可以像使用 <code>look</code> 命令時在 <code>grep</code> 命令中輕鬆使用。不過唯一的缺點是你需要指定文件，這一點與 <code>look</code> 不盡相同。</p><p>在單詞的開頭前加上 <code>^</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep ^terra /usr/share/dict/words</span></span>
<span class="line"><span>terrace</span></span>
<span class="line"><span>terrace&#39;s</span></span>
<span class="line"><span>terraced</span></span>
<span class="line"><span>terraces</span></span>
<span class="line"><span>terracing</span></span>
<span class="line"><span>terrain</span></span>
<span class="line"><span>terrain&#39;s</span></span>
<span class="line"><span>terrains</span></span>
<span class="line"><span>terrapin</span></span>
<span class="line"><span>terrapin&#39;s</span></span>
<span class="line"><span>terrapins</span></span>
<span class="line"><span>terraria</span></span>
<span class="line"><span>terrarium</span></span>
<span class="line"><span>terrarium&#39;s</span></span>
<span class="line"><span>terrariums</span></span></code></pre></div><p>在單詞的結尾後加上 <code>$</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep bytes$ /usr/share/dict/words</span></span>
<span class="line"><span>bytes</span></span>
<span class="line"><span>gigabytes</span></span>
<span class="line"><span>kilobytes</span></span>
<span class="line"><span>megabytes</span></span>
<span class="line"><span>terabytes</span></span></code></pre></div><p>使用 <code>grep</code> 時，你需要考慮大小寫，不過 <code>grep</code> 命令也提供了一些選項。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep ^[Zz]et /usr/share/dict/words</span></span>
<span class="line"><span>Zeta</span></span>
<span class="line"><span>zeta</span></span>
<span class="line"><span>zetacism</span></span>
<span class="line"><span>Zetana</span></span>
<span class="line"><span>zetas</span></span>
<span class="line"><span>Zetes</span></span>
<span class="line"><span>zetetic</span></span>
<span class="line"><span>Zethar</span></span>
<span class="line"><span>Zethus</span></span>
<span class="line"><span>Zetland</span></span>
<span class="line"><span>Zetta</span></span>
<span class="line"><span>zettabyte</span></span></code></pre></div><p>為單詞文件添加軟連接能使這種搜索方式更加便捷：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ln -s /usr/share/dict/words words</span></span>
<span class="line"><span>$ grep ^[Zz]et words</span></span>
<span class="line"><span>Zeta</span></span>
<span class="line"><span>zeta</span></span>
<span class="line"><span>zetacism</span></span>
<span class="line"><span>Zetana</span></span>
<span class="line"><span>zetas</span></span>
<span class="line"><span>Zetes</span></span>
<span class="line"><span>zetetic</span></span>
<span class="line"><span>Zethar</span></span>
<span class="line"><span>Zethus</span></span>
<span class="line"><span>Zetland</span></span>
<span class="line"><span>Zetta</span></span>
<span class="line"><span>zettabytye</span></span></code></pre></div><h3 id="aspell" tabindex="-1">aspell <a class="header-anchor" href="#aspell" aria-label="Permalink to “aspell”">​</a></h3><p><code>aspell</code> 命令提供了一種不同的方式。它提供了一種方法來檢查你提供給它的任何文件或文本的拼寫。你可以通過管道將文本傳遞給它，然後它會告訴你哪些單詞看起來有拼寫錯誤。如果所有單詞都拼寫正確，則不會有任何輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo Did I mispell that? | aspell list</span></span>
<span class="line"><span>mispell</span></span>
<span class="line"><span>$ echo I can hardly wait to try out aspell | aspell list</span></span>
<span class="line"><span>aspell</span></span>
<span class="line"><span>$ echo Did I misspell anything? | aspell list</span></span>
<span class="line"><span>$</span></span></code></pre></div><p><code>list</code> 參數告訴 <code>aspell</code> 為標準輸入單詞提供拼寫錯誤的單詞列表。</p><p>你還可以使用 <code>aspell</code> 來定位和更正文本文件中的單詞。如果它發現一個拼寫錯誤的單詞，它將為你提供一個相似（但拼寫正確的）單詞列表來替換這個單詞，你也可以將該單詞加入個人詞庫（<code>~/.aspell.en.pws</code>）並忽略拼寫錯誤，或者完全中止進程（使文件保持處理前的狀態）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ aspell -c mytext</span></span></code></pre></div><p>一旦 <code>aspell</code> 發現一個單詞出現了拼寫錯誤，它將會為不正確的 “mispell” 提供一個選項列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1) mi spell                             6) misplay</span></span>
<span class="line"><span>2) mi-spell                             7) spell</span></span>
<span class="line"><span>3) misspell                             8) misapply</span></span>
<span class="line"><span>4) Ispell                               9) Aspell</span></span>
<span class="line"><span>5) misspells                            0) dispel</span></span>
<span class="line"><span>i) Ignore                               I) Ignore all</span></span>
<span class="line"><span>r) Replace                              R) Replace all</span></span>
<span class="line"><span>a) Add                                  l) Add Lower</span></span>
<span class="line"><span>b) Abort                                x) Exit</span></span></code></pre></div><p>請注意，備選單詞和拼寫是數字編號的，而其他選項是由字母選項表示的。你可以選擇備選拼寫中的一項或者自己輸入替換項。“Abort” 選項將使文件保持不變，即使你已經為某些單詞選擇了替換。你選擇添加的單詞將被插入到本地單詞文件中（例如 <code>~/.aspell.en.pws</code>）。</p><h4 id="其他單詞列表" tabindex="-1">其他單詞列表 <a class="header-anchor" href="#其他單詞列表" aria-label="Permalink to “其他單詞列表”">​</a></h4><p>厭倦了英語？ <code>aspell</code> 命令可以在其他語言中使用，只要你添加了相關語言的單詞列表。例如，在 Debian 系統中添加法語的詞庫，你可以這樣做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt install aspell-fr</span></span></code></pre></div><p>這個新的詞庫文件會被安裝為 <code>/usr/share/dict/French</code>。為了使用它，你只需要簡單地告訴 <code>aspell</code> 你想要使用替換的單詞列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ aspell --lang=fr -c mytext</span></span></code></pre></div><p>這種情況下，當 <code>aspell</code> 讀到單詞 “one” 時，你可能會看到下面的情況：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1) once                                 6) orné</span></span>
<span class="line"><span>2) onde                                 7) ne</span></span>
<span class="line"><span>3) ondé                                 8) né</span></span>
<span class="line"><span>4) onze                                 9) on</span></span>
<span class="line"><span>5) orne                                 0) cône</span></span>
<span class="line"><span>i) Ignore                               I) Ignore all</span></span>
<span class="line"><span>r) Replace                              R) Replace all</span></span>
<span class="line"><span>a) Add                                  l) Add Lower</span></span>
<span class="line"><span>b) Abort                                x) Exit</span></span></code></pre></div>`,48)),n("p",null,[s[1]||(s[1]=a("你也可以從 ",-1)),p(e,{href:"ftp://ftp.gnu.org/gnu/aspell/dict/0index.html"},{default:l(()=>[...s[0]||(s[0]=[a("GNU 官網",-1)])]),_:1}),s[2]||(s[2]=a("獲取其他語言的詞庫。",-1))]),s[19]||(s[19]=n("h3",{id:"總結",tabindex:"-1"},[a("總結 "),n("a",{class:"header-anchor",href:"#總結","aria-label":"Permalink to “總結”"},"​")],-1)),s[20]||(s[20]=n("p",null,[a("即使你是全國拼字比賽的冠軍，你可能偶爾也會需要一點拼寫方面的幫助，哪怕只是為了找出你手滑打錯的單詞。"),n("code",null,"aspell"),a(" 工具，加上 "),n("code",null,"look"),a(" 和 "),n("code",null,"grep"),a(" 命令已經準備來助你一臂之力了。")],-1)),s[21]||(s[21]=n("hr",null,null,-1)),n("p",null,[s[4]||(s[4]=a("via: ",-1)),p(e,{href:"https://www.networkworld.com/article/3400942/how-linux-can-help-with-your-spelling.html"},{default:l(()=>[...s[3]||(s[3]=[a("https://www.networkworld.com/article/3400942/how-linux-can-help-with-your-spelling.html",-1)])]),_:1})]),n("p",null,[s[9]||(s[9]=a("作者：",-1)),p(e,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:l(()=>[...s[5]||(s[5]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[10]||(s[10]=a(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[6]||(s[6]=[a("lujun9972",-1)])]),_:1}),s[11]||(s[11]=a(" 譯者：",-1)),p(e,{href:"https://github.com/Modrisco"},{default:l(()=>[...s[7]||(s[7]=[a("Modrisco",-1)])]),_:1}),s[12]||(s[12]=a(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[8]||(s[8]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[15]||(s[15]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[13]||(s[13]=[a("LCTT",-1)])]),_:1}),s[16]||(s[16]=a(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[14]||(s[14]=[a("Linux中國",-1)])]),_:1}),s[17]||(s[17]=a(" 榮譽推出",-1))])])}const w=i(c,[["render",h]]);export{x as __pageData,w as default};
