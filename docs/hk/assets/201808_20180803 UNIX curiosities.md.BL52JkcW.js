import{_ as t,a0 as o,w as r,s as d,ao as l,I as i,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"UNIX 的怪東西 | LCTT x X-CMD","titleTemplate":false,"description":"UNIX 的怪東西 | LCTT (201808) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"UNIX 的怪東西 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"UNIX 的怪東西 | LCTT (201808) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201808/20180803 UNIX curiosities","title":"UNIX 的怪東西","tag":"201808","desc":""},"relativePath":"201808/20180803 UNIX curiosities.md","filePath":"[post].md"}'),u={name:"201808/20180803 UNIX curiosities.md"};function f(g,s,m,k,c,T){const a=o("Link");return r(),d("div",null,[s[27]||(s[27]=l(`<h1 id="unix-的怪東西" tabindex="-1">UNIX 的怪東西 <a class="header-anchor" href="#unix-的怪東西" aria-label="Permalink to “UNIX 的怪東西”">​</a></h1><p>最近我在用我編寫的各種工具做更多 UNIX 下的事情，我遇到了兩個有趣的問題。這些都不是 “bug”，而是我沒想到的行為。</p><h3 id="線程安全的-printf" tabindex="-1">線程安全的 printf <a class="header-anchor" href="#線程安全的-printf" aria-label="Permalink to “線程安全的 printf”">​</a></h3><p>我有一個 C 程序從磁盤讀取一些圖像，進行一些處理，並將有關這些圖像的輸出寫入 STDOUT。偽代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for(imagefilename in images)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    results = process(imagefilename);</span></span>
<span class="line"><span>    printf(results);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>對於每個圖像都是獨立處理的，因此我自然希望將處理任務分配在各個 CPU 之間以加快速度。我通常使用 <code>fork()</code>，所以我寫了這個：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for(child in children)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    pipe = create_pipe();</span></span>
<span class="line"><span>    worker(pipe);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// main parent process</span></span>
<span class="line"><span>for(imagefilename in images)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    write(pipe[i_image % N_children], imagefilename)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>worker()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    while(1)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        imagefilename = read(pipe);</span></span>
<span class="line"><span>        results = process(imagefilename);</span></span>
<span class="line"><span>        printf(results);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,7)),i("p",null,[s[1]||(s[1]=n("這是正常的做法：我為 IPC 創建管道，並通過這些管道給子進程 worker 發送圖像名。每個 worker _能夠_通過另一組管道將其結果寫回主進程，但這很痛苦，所以每個 worker 都直接寫入共享 STDOUT。這工作正常，但正如人們所預料的那樣，對 STDOUT 的寫入發生衝突，因此各種圖像的結果最終會混雜在一起。那很糟糕。我不想自己設置個鎖，但幸運的是 GNU libc 為它提供了函數：",-1)),p(a,{href:"https://www.gnu.org/software/libc/manual/html_node/Streams-and-Threads.html"},{default:e(()=>[...s[0]||(s[0]=[n("flockfile()",-1)])]),_:1}),s[2]||(s[2]=n("。我把它們放進去了……但是沒有用！為什麼？因為 ",-1)),s[3]||(s[3]=i("code",null,"flockfile()",-1)),s[4]||(s[4]=n(" 最終因為 ",-1)),s[5]||(s[5]=i("code",null,"fork()",-1)),s[6]||(s[6]=n(" 的寫時複製行為而被限制在單個子進程中。即 ",-1)),s[7]||(s[7]=i("code",null,"fork()",-1)),s[8]||(s[8]=n("提供的額外安全性（與線程相比），這實際上最終破壞了鎖。",-1))]),s[28]||(s[28]=l(`<p>我沒有嘗試使用其他鎖機制（例如 pthread 互斥鎖），但我可以想像它們會遇到類似的問題。我想保持簡單，所以將輸出發送回父輸出是不可能的：這給程序員和運行程序的計算機制造了更多的工作。</p><p>解決方案：使用線程而不是 <code>fork()</code>。這有製造冗餘管道的好的副作用。最終的偽代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for(children)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    pthread_create(worker, child_index);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>for(children)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    pthread_join(child);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>worker(child_index)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    for(i_image = child_index; i_image &lt; N_images; i_image += N_children)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        results = process(images[i_image]);</span></span>
<span class="line"><span>        flockfile(stdout);</span></span>
<span class="line"><span>        printf(results);</span></span>
<span class="line"><span>        funlockfile(stdout);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這更簡單，如預期的那樣工作。我猜有時線程更好。</p><h3 id="將部分讀取的文件傳遞給子進程" tabindex="-1">將部分讀取的文件傳遞給子進程 <a class="header-anchor" href="#將部分讀取的文件傳遞給子進程" aria-label="Permalink to “將部分讀取的文件傳遞給子進程”">​</a></h3>`,5)),i("p",null,[s[10]||(s[10]=n("對於各種 ",-1)),p(a,{href:"http://www.github.com/dkogan/vnlog"},{default:e(()=>[...s[9]||(s[9]=[n("vnlog",-1)])]),_:1}),s[11]||(s[11]=n(" 工具，我需要實現這個操作序列：",-1))]),s[29]||(s[29]=l("<ol><li>進程打開一個關閉 <code>O_CLOEXEC</code> 標誌的文件</li><li>進程讀取此文件的一部分（在 vnlog 的情況下直到圖例的末尾）</li><li>進程調用 <code>exec()</code> 以調用另一個程序來處理已經打開的文件的其餘部分</li></ol><p>第二個程序可能需要命令列中的文件名而不是已打開的文件描述符，因為第二個程序可能自己調用 <code>​​open()</code>。如果我傳遞文件名，這個新程序將重新打開文件，然後從頭開始讀取文件，而不是從原始程序停止的位置開始讀取。在我的程序上不可以這樣做，因此將文件名傳遞給第二個程序是行不通的。</p><p>所以我真的需要以某種方式傳遞已經打開的文件描述符。我在使用 Linux（其他操作系統可能在這裏表現不同），所以我理論上可以通過傳遞 <code>/dev/fd/N</code> 而不是文件名來實現。但事實證明這也不起作用。在 Linux上（再説一次，也許是特定於 Linux）對於普通文件 <code>/dev/fd/N</code> 是原始文件的符號鏈接。所以這最終做的是與傳遞文件名完全相同的事情。</p><p>但有一個臨時方案！如果我們正在讀取管道而不是文件，那麼沒有什麼可以符號鏈接，並且 <code>/dev/fd/N</code> 最終將原始管道傳遞給第二個進程，然後程序正常工作。我可以通過將上面的 <code>open(&quot;filename&quot;)</code> 更改為 <code>popen(&quot;cat filename&quot;)</code> 之類的東西來偽裝。呸！這真的是我們所能做到最好的嗎？這在 BSD 上看上去會怎麼樣？</p><hr>",5)),i("p",null,[s[13]||(s[13]=n("via: ",-1)),p(a,{href:"http://notes.secretsauce.net/notes/2018/08/03_unix-curiosities.html"},{default:e(()=>[...s[12]||(s[12]=[n("http://notes.secretsauce.net/notes/2018/08/03_unix-curiosities.html",-1)])]),_:1})]),i("p",null,[s[18]||(s[18]=n("作者：",-1)),p(a,{href:"http://notes.secretsauce.net/"},{default:e(()=>[...s[14]||(s[14]=[n("Dima Kogan",-1)])]),_:1}),s[19]||(s[19]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[15]||(s[15]=[n("lujun9972",-1)])]),_:1}),s[20]||(s[20]=n(" 譯者：",-1)),p(a,{href:"https://github.com/geekpi"},{default:e(()=>[...s[16]||(s[16]=[n("geekpi",-1)])]),_:1}),s[21]||(s[21]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[24]||(s[24]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[23]||(s[23]=[n("Linux中國",-1)])]),_:1}),s[26]||(s[26]=n(" 榮譽推出",-1))])])}const x=t(u,[["render",f]]);export{C as __pageData,x as default};
