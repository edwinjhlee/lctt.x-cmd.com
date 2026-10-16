import{_ as t,a0 as l,w as c,s as o,I as i,x as a,a1 as e,A as p,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"學習用 Git 變基來改變歷史！ | LCTT x X-CMD","titleTemplate":false,"description":"學習用 Git 變基來改變歷史！ | LCTT (202006) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"學習用 Git 變基來改變歷史！ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"學習用 Git 變基來改變歷史！ | LCTT (202006) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202006/20190510 Learn to change history with git rebase","title":"學習用 Git 變基來改變歷史！","tag":"202006","desc":""},"relativePath":"202006/20190510 Learn to change history with git rebase.md","filePath":"[post].md"}'),h={name:"202006/20190510 Learn to change history with git rebase.md"};function g(r,s,u,b,k,m){const n=l("Link");return c(),o("div",null,[s[17]||(s[17]=i("h1",{id:"學習用-git-變基來改變歷史",tabindex:"-1"},[a("學習用 Git 變基來改變歷史！ "),i("a",{class:"header-anchor",href:"#學習用-git-變基來改變歷史","aria-label":"Permalink to “學習用 Git 變基來改變歷史！”"},"​")],-1)),i("p",null,[e(n,{href:"https://git-scm.com/"},{default:p(()=>[...s[0]||(s[0]=[a("Git",-1)])]),_:1}),s[1]||(s[1]=a(" 核心的附加價值之一就是編輯歷史記錄的能力。與將歷史記錄視為神聖的記錄的版本控制系統不同，在 Git 中，我們可以修改歷史記錄以適應我們的需要。這為我們提供了很多強大的工具，讓我們可以像使用重構來維護良好的軟件設計實踐一樣，編織良好的提交歷史。這些工具對於新手甚至是有經驗的 Git 用户來説可能會有些令人生畏，但本指南將幫助我們揭開強大的 git-rebase 的神秘面紗。",-1))]),s[18]||(s[18]=d(`<blockquote><p>值得注意的是：一般建議不要修改公共分支、共享分支或穩定分支的歷史記錄。編輯特性分支和個人分支的歷史記錄是可以的，編輯還沒有推送的提交也是可以的。在編輯完提交後，可以使用 <code>git push -f</code> 來強制推送你的修改到個人分支或特性分支。</p></blockquote><p>儘管有這麼可怕的警告，但值得一提的是，本指南中提到的一切都是非破壞性操作。實際上，在 Git 中永久丟失數據是相當困難的。本指南結尾介紹了在犯錯誤時進行糾正的方法。</p><h3 id="設置沙盒" tabindex="-1">設置沙盒 <a class="header-anchor" href="#設置沙盒" aria-label="Permalink to “設置沙盒”">​</a></h3><p>我們不想破壞你的任何實際的版本庫，所以在整個指南中，我們將使用一個沙盒版本庫。運行這些命令來開始工作。[^1]</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git init /tmp/rebase-sandbox</span></span>
<span class="line"><span>cd /tmp/rebase-sandbox</span></span>
<span class="line"><span>git commit --allow-empty -m&quot;Initial commit&quot;</span></span></code></pre></div><p>如果你遇到麻煩，只需運行 <code>rm -rf /tmp/rebase-sandbox</code>，並重新運行這些步驟即可重新開始。本指南的每一步都可以在新的沙箱上運行，所以沒有必要重做每個任務。</p><h3 id="修正最近的提交" tabindex="-1">修正最近的提交 <a class="header-anchor" href="#修正最近的提交" aria-label="Permalink to “修正最近的提交”">​</a></h3><p>讓我們從簡單的事情開始：修復你最近的提交。讓我們向沙盒中添加一個文件，並犯個錯誤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello wrold!&quot; &gt;greeting.txt</span></span>
<span class="line"><span>git add greeting.txt</span></span>
<span class="line"><span>git commit -m&quot;Add greeting.txt&quot;</span></span></code></pre></div><p>修復這個錯誤是非常容易的。我們只需要編輯文件，然後用 <code>--amend</code> 提交就可以了，就像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello world!&quot; &gt;greeting.txt</span></span>
<span class="line"><span>git commit -a --amend</span></span></code></pre></div><p>指定 <code>-a</code> 會自動將所有 Git 已經知道的文件進行暫存（例如 Git 添加的），而 <code>--amend</code> 會將更改的內容壓扁到最近的提交中。保存並退出你的編輯器（如果需要，你現在可以修改提交信息）。你可以通過運行 <code>git show</code> 看到修復的提交。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>commit f5f19fbf6d35b2db37dcac3a55289ff9602e4d00 (HEAD -&gt; master)</span></span>
<span class="line"><span>Author: Drew DeVault </span></span>
<span class="line"><span>Date:   Sun Apr 28 11:09:47 2019 -0400</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Add greeting.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>diff --git a/greeting.txt b/greeting.txt</span></span>
<span class="line"><span>new file mode 100644</span></span>
<span class="line"><span>index 0000000..cd08755</span></span>
<span class="line"><span>--- /dev/null</span></span>
<span class="line"><span>+++ b/greeting.txt</span></span>
<span class="line"><span>@@ -0,0 +1 @@</span></span>
<span class="line"><span>+Hello world!</span></span></code></pre></div><h3 id="修復較舊的提交" tabindex="-1">修復較舊的提交 <a class="header-anchor" href="#修復較舊的提交" aria-label="Permalink to “修復較舊的提交”">​</a></h3><p><code>--amend</code> 僅適用於最近的提交。如果你需要修正一個較舊的提交會怎麼樣？讓我們從相應地設置沙盒開始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello!&quot; &gt;greeting.txt</span></span>
<span class="line"><span>git add greeting.txt</span></span>
<span class="line"><span>git commit -m&quot;Add greeting.txt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Goodbye world!&quot; &gt;farewell.txt</span></span>
<span class="line"><span>git add farewell.txt</span></span>
<span class="line"><span>git commit -m&quot;Add farewell.txt&quot;</span></span></code></pre></div><p>看起來 <code>greeting.txt </code> 像是丟失了 <code>&quot;world&quot;</code>。讓我們正常地寫個提交來解決這個問題：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello world!&quot; &gt;greeting.txt</span></span>
<span class="line"><span>git commit -a -m&quot;fixup greeting.txt&quot;</span></span></code></pre></div><p>現在文件看起來正確，但是我們的歷史記錄可以更好一點 —— 讓我們使用新的提交來“修復”（<code>fixup</code>）最後一個提交。為此，我們需要引入一個新工具：交互式變基。我們將以這種方式編輯最後三個提交，因此我們將運行 <code>git rebase -i HEAD~3</code>（<code>-i</code> 代表交互式）。這樣會打開文本編輯器，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 8d3fc77 Add greeting.txt</span></span>
<span class="line"><span>pick 2a73a77 Add farewell.txt</span></span>
<span class="line"><span>pick 0b9d0bb fixup greeting.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Rebase f5f19fb..0b9d0bb onto f5f19fb (3 commands)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Commands:</span></span>
<span class="line"><span># p, pick &lt;commit&gt; = use commit</span></span>
<span class="line"><span># f, fixup &lt;commit&gt; = like &quot;squash&quot;, but discard this commit&#39;s log message</span></span></code></pre></div><p>這是變基計劃，通過編輯此文件，你可以指導 Git 如何編輯歷史記錄。我已經將該摘要削減為僅與變基計劃這一部分相關的細節，但是你可以在文本編輯器中瀏覽完整的摘要。</p><p>當我們保存並關閉編輯器時，Git 將從其歷史記錄中刪除所有這些提交，然後一次執行一行。默認情況下，它將選取（<code>pick</code>）每個提交，將其從堆中召喚出來並添加到分支中。如果我們對此文件根本沒有做任何編輯，則將直接回到起點，按原樣選取每個提交。現在，我們將使用我最喜歡的功能之一：修復（<code>fixup</code>）。編輯第三行，將操作從 <code>pick</code> 更改為 <code>fixup</code>，並將其立即移至我們要“修復”的提交之後：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 8d3fc77 Add greeting.txt</span></span>
<span class="line"><span>fixup 0b9d0bb fixup greeting.txt</span></span>
<span class="line"><span>pick 2a73a77 Add farewell.txt</span></span></code></pre></div><blockquote><p><strong>技巧</strong>：我們也可以只用 <code>f</code> 來縮寫它，以加快下次的速度。</p></blockquote><p>保存並退出編輯器，Git 將運行這些命令。我們可以檢查日誌以驗證結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git log -2 --oneline</span></span>
<span class="line"><span>fcff6ae (HEAD -&gt; master) Add farewell.txt</span></span>
<span class="line"><span>a479e94 Add greeting.txt</span></span></code></pre></div><h3 id="將多個提交壓扁為一個" tabindex="-1">將多個提交壓扁為一個 <a class="header-anchor" href="#將多個提交壓扁為一個" aria-label="Permalink to “將多個提交壓扁為一個”">​</a></h3><p>在工作時，當你達到較小的里程碑或修復以前的提交中的錯誤時，你可能會發現寫很多提交很有用。但是，在將你的工作合併到 <code>master</code> 分支之前，將這些提交“壓扁”（<code>squash</code>）到一起以使歷史記錄更清晰可能很有用。為此，我們將使用“壓扁”（<code>squash </code>）操作。讓我們從編寫一堆提交開始，如果要加快速度，只需複製並粘貼這些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git checkout -b squash</span></span>
<span class="line"><span>for c in H e l l o , &#39; &#39; w o r l d; do</span></span>
<span class="line"><span>    echo &quot;$c&quot; &gt;&gt;squash.txt</span></span>
<span class="line"><span>    git add squash.txt</span></span>
<span class="line"><span>    git commit -m&quot;Add &#39;$c&#39; to squash.txt&quot;</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>要製作出一個寫着 “Hello，world” 的文件，要做很多事情！讓我們開始另一個交互式變基，將它們壓扁在一起。請注意，我們首先簽出了一個分支來進行嘗試。因此，因為我們使用 <code>git rebase -i master</code> 進行的分支，我們可以快速變基所有提交。結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 1e85199 Add &#39;H&#39; to squash.txt</span></span>
<span class="line"><span>pick fff6631 Add &#39;e&#39; to squash.txt</span></span>
<span class="line"><span>pick b354c74 Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span>pick 04aaf74 Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span>pick 9b0f720 Add &#39;o&#39; to squash.txt</span></span>
<span class="line"><span>pick 66b114d Add &#39;,&#39; to squash.txt</span></span>
<span class="line"><span>pick dc158cd Add &#39; &#39; to squash.txt</span></span>
<span class="line"><span>pick dfcf9d6 Add &#39;w&#39; to squash.txt</span></span>
<span class="line"><span>pick 7a85f34 Add &#39;o&#39; to squash.txt</span></span>
<span class="line"><span>pick c275c27 Add &#39;r&#39; to squash.txt</span></span>
<span class="line"><span>pick a513fd1 Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span>pick 6b608ae Add &#39;d&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Rebase 1af1b46..6b608ae onto 1af1b46 (12 commands)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Commands:</span></span>
<span class="line"><span># p, pick &lt;commit&gt; = use commit</span></span>
<span class="line"><span># s, squash &lt;commit&gt; = use commit, but meld into previous commit</span></span></code></pre></div><blockquote><p><strong>技巧</strong>：你的本地 <code>master</code> 分支獨立於遠程 <code>master</code> 分支而發展，並且 Git 將遠程分支存儲為 <code>origin/master</code>。結合這種技巧，<code>git rebase -i origin/master</code> 通常是一種非常方便的方法，可以變基所有尚未合併到上游的提交！</p></blockquote><p>我們將把所有這些更改壓扁到第一個提交中。為此，將第一行除外的每個“選取”（<code>pick</code>）操作都更改為“壓扁”（<code>squash</code>），如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 1e85199 Add &#39;H&#39; to squash.txt</span></span>
<span class="line"><span>squash fff6631 Add &#39;e&#39; to squash.txt</span></span>
<span class="line"><span>squash b354c74 Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span>squash 04aaf74 Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span>squash 9b0f720 Add &#39;o&#39; to squash.txt</span></span>
<span class="line"><span>squash 66b114d Add &#39;,&#39; to squash.txt</span></span>
<span class="line"><span>squash dc158cd Add &#39; &#39; to squash.txt</span></span>
<span class="line"><span>squash dfcf9d6 Add &#39;w&#39; to squash.txt</span></span>
<span class="line"><span>squash 7a85f34 Add &#39;o&#39; to squash.txt</span></span>
<span class="line"><span>squash c275c27 Add &#39;r&#39; to squash.txt</span></span>
<span class="line"><span>squash a513fd1 Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span>squash 6b608ae Add &#39;d&#39; to squash.txt</span></span></code></pre></div><p>保存並關閉編輯器時，Git 會考慮片刻，然後再次打開編輯器以修改最終的提交消息。你會看到以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># This is a combination of 12 commits.</span></span>
<span class="line"><span># This is the 1st commit message:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;H&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #2:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;e&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #3:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #4:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #5:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;o&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #6:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;,&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #7:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39; &#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #8:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;w&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #9:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;o&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #10:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;r&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #11:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the commit message #12:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Add &#39;d&#39; to squash.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Please enter the commit message for your changes. Lines starting</span></span>
<span class="line"><span># with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Date:      Sun Apr 28 14:21:56 2019 -0400</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># interactive rebase in progress; onto 1af1b46</span></span>
<span class="line"><span># Last commands done (12 commands done):</span></span>
<span class="line"><span>#    squash a513fd1 Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span>#    squash 6b608ae Add &#39;d&#39; to squash.txt</span></span>
<span class="line"><span># No commands remaining.</span></span>
<span class="line"><span># You are currently rebasing branch &#39;squash&#39; on &#39;1af1b46&#39;.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Changes to be committed:</span></span>
<span class="line"><span>#   new file:   squash.txt</span></span>
<span class="line"><span>#</span></span></code></pre></div><p>默認情況下，這是所有要壓扁的提交的消息的組合，但是像這樣將其保留肯定不是你想要的。不過，舊的提交消息在編寫新的提交消息時可能很有用，所以放在這裏以供參考。</p><blockquote><p><strong>提示</strong>：你在上一節中瞭解的“修復”（<code>fixup</code>）命令也可以用於此目的，但它會丟棄壓扁的提交的消息。</p></blockquote><p>讓我們刪除所有內容，並用更好的提交消息替換它，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Add squash.txt with contents &quot;Hello, world&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Please enter the commit message for your changes. Lines starting</span></span>
<span class="line"><span># with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Date:      Sun Apr 28 14:21:56 2019 -0400</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># interactive rebase in progress; onto 1af1b46</span></span>
<span class="line"><span># Last commands done (12 commands done):</span></span>
<span class="line"><span>#    squash a513fd1 Add &#39;l&#39; to squash.txt</span></span>
<span class="line"><span>#    squash 6b608ae Add &#39;d&#39; to squash.txt</span></span>
<span class="line"><span># No commands remaining.</span></span>
<span class="line"><span># You are currently rebasing branch &#39;squash&#39; on &#39;1af1b46&#39;.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Changes to be committed:</span></span>
<span class="line"><span>#   new file:   squash.txt</span></span>
<span class="line"><span>#</span></span></code></pre></div><p>保存並退出編輯器，然後檢查你的 Git 日誌，成功！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>commit c785f476c7dff76f21ce2cad7c51cf2af00a44b6 (HEAD -&gt; squash)</span></span>
<span class="line"><span>Author: Drew DeVault</span></span>
<span class="line"><span>Date:   Sun Apr 28 14:21:56 2019 -0400</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Add squash.txt with contents &quot;Hello, world&quot;</span></span></code></pre></div><p>在繼續之前，讓我們將所做的更改拉入 <code>master</code> 分支中，並擺脱掉這一草稿。我們可以像使用 <code>git merge</code> 一樣使用 <code>git rebase</code>，但是它避免了創建合併提交：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git checkout master</span></span>
<span class="line"><span>git rebase squash</span></span>
<span class="line"><span>git branch -D squash</span></span></code></pre></div><p>除非我們實際上正在合併無關的歷史記錄，否則我們通常希望避免使用 <code>git merge</code>。如果你有兩個不同的分支，則 <code>git merge</code> 對於記錄它們合併的時間非常有用。在正常工作過程中，變基通常更為合適。</p><h3 id="將一個提交拆分為多個" tabindex="-1">將一個提交拆分為多個 <a class="header-anchor" href="#將一個提交拆分為多個" aria-label="Permalink to “將一個提交拆分為多個”">​</a></h3><p>有時會發生相反的問題：一個提交太大了。讓我們來看一看拆分它們。這次，讓我們寫一些實際的代碼。從一個簡單的 C 程序 [^2] 開始（你仍然可以將此代碼段複製並粘貼到你的 shell 中以快速執行此操作）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat &lt;&lt;EOF &gt;main.c</span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>首先提交它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git add main.c</span></span>
<span class="line"><span>git commit -m&quot;Add C program skeleton&quot;</span></span></code></pre></div><p>然後把這個程序擴展一些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat &lt;&lt;EOF &gt;main.c</span></span>
<span class="line"><span>#include &amp;ltstdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const char *get_name() {</span></span>
<span class="line"><span>    static char buf[128];</span></span>
<span class="line"><span>    scanf(&quot;%s&quot;, buf);</span></span>
<span class="line"><span>    return buf;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>    printf(&quot;What&#39;s your name? &quot;);</span></span>
<span class="line"><span>    const char *name = get_name();</span></span>
<span class="line"><span>    printf(&quot;Hello, %s!\\n&quot;, name);</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>提交之後，我們就可以準備學習如何將其拆分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git commit -a -m&quot;Flesh out C program&quot;</span></span></code></pre></div><p>第一步是啓動交互式變基。讓我們用 <code>git rebase -i HEAD~2</code> 來變基這兩個提交，給出的變基計劃如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 237b246 Add C program skeleton</span></span>
<span class="line"><span>pick b3f188b Flesh out C program</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Rebase c785f47..b3f188b onto c785f47 (2 commands)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Commands:</span></span>
<span class="line"><span># p, pick &lt;commit&gt; = use commit</span></span>
<span class="line"><span># e, edit &lt;commit&gt; = use commit, but stop for amending</span></span></code></pre></div><p>將第二個提交的命令從 <code>pick</code> 更改為 <code>edit</code>，然後保存並關閉編輯器。Git 會考慮一秒鐘，然後向你建議：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Stopped at b3f188b...  Flesh out C program</span></span>
<span class="line"><span>You can amend the commit now, with</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  git commit --amend</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Once you are satisfied with your changes, run</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  git rebase --continue</span></span></code></pre></div><p>我們可以按照以下説明為提交<em>添加</em>新的更改，但我們可以通過運行 <code>git reset HEAD^</code> 來進行“軟重置” [^3]。如果在此之後運行 <code>git status</code>，你將看到它取消了提交最新的提交，並將其更改添加到工作樹中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Last commands done (2 commands done):</span></span>
<span class="line"><span>   pick 237b246 Add C program skeleton</span></span>
<span class="line"><span>   edit b3f188b Flesh out C program</span></span>
<span class="line"><span>No commands remaining.</span></span>
<span class="line"><span>You are currently splitting a commit while rebasing branch &#39;master&#39; on &#39;c785f47&#39;.</span></span>
<span class="line"><span>  (Once your working directory is clean, run &quot;git rebase --continue&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Changes not staged for commit:</span></span>
<span class="line"><span>  (use &quot;git add ...&quot; to update what will be committed)</span></span>
<span class="line"><span>  (use &quot;git checkout -- ...&quot; to discard changes in working directory)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  modified:   main.c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)</span></span></code></pre></div><p>為了對此進行拆分，我們將進行<em>交互式提交</em>。這使我們能夠選擇性地僅提交工作樹中的特定更改。運行 <code>git commit -p</code> 開始此過程，你將看到以下提示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>diff --git a/main.c b/main.c</span></span>
<span class="line"><span>index b1d9c2c..3463610 100644</span></span>
<span class="line"><span>--- a/main.c</span></span>
<span class="line"><span>+++ b/main.c</span></span>
<span class="line"><span>@@ -1,3 +1,14 @@</span></span>
<span class="line"><span>+#include &amp;ltstdio.h&gt;</span></span>
<span class="line"><span>+</span></span>
<span class="line"><span>+const char *get_name() {</span></span>
<span class="line"><span>+    static char buf[128];</span></span>
<span class="line"><span>+    scanf(&quot;%s&quot;, buf);</span></span>
<span class="line"><span>+    return buf;</span></span>
<span class="line"><span>+}</span></span>
<span class="line"><span>+</span></span>
<span class="line"><span> int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>+    printf(&quot;What&#39;s your name? &quot;);</span></span>
<span class="line"><span>+    const char *name = get_name();</span></span>
<span class="line"><span>+    printf(&quot;Hello, %s!\\n&quot;, name);</span></span>
<span class="line"><span>     return 0;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>Stage this hunk [y,n,q,a,d,s,e,?]?</span></span></code></pre></div><p>Git 僅向你提供了一個“大塊”（即單個更改）以進行提交。不過，這太大了，讓我們使用 <code>s</code> 命令將這個“大塊”拆分成較小的部分。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Split into 2 hunks.</span></span>
<span class="line"><span>@@ -1 +1,9 @@</span></span>
<span class="line"><span>+#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>+</span></span>
<span class="line"><span>+const char *get_name() {</span></span>
<span class="line"><span>+    static char buf[128];</span></span>
<span class="line"><span>+    scanf(&quot;%s&quot;, buf);</span></span>
<span class="line"><span>+    return buf;</span></span>
<span class="line"><span>+}</span></span>
<span class="line"><span>+</span></span>
<span class="line"><span> int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>Stage this hunk [y,n,q,a,d,j,J,g,/,e,?]?</span></span></code></pre></div><blockquote><p><strong>提示</strong>：如果你對其他選項感到好奇，請按 <code>?</code> 彙總顯示。</p></blockquote><p>這個大塊看起來更好：單一、獨立的更改。讓我們按 <code>y</code> 來回答問題（並暫存那個“大塊”），然後按 <code>q</code> 以“退出”交互式會話並繼續進行提交。會彈出編輯器，要求輸入合適的提交消息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Add get_name function to C program</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Please enter the commit message for your changes. Lines starting</span></span>
<span class="line"><span># with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># interactive rebase in progress; onto c785f47</span></span>
<span class="line"><span># Last commands done (2 commands done):</span></span>
<span class="line"><span>#    pick 237b246 Add C program skeleton</span></span>
<span class="line"><span>#    edit b3f188b Flesh out C program</span></span>
<span class="line"><span># No commands remaining.</span></span>
<span class="line"><span># You are currently splitting a commit while rebasing branch &#39;master&#39; on &#39;c785f47&#39;.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Changes to be committed:</span></span>
<span class="line"><span>#   modified:   main.c</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Changes not staged for commit:</span></span>
<span class="line"><span>#   modified:   main.c</span></span>
<span class="line"><span>#</span></span></code></pre></div><p>保存並關閉編輯器，然後我們進行第二次提交。我們可以執行另一次交互式提交，但是由於我們只想在此提交中包括其餘更改，因此我們將執行以下操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git commit -a -m&quot;Prompt user for their name&quot;</span></span>
<span class="line"><span>git rebase --continue</span></span></code></pre></div><p>最後一條命令告訴 Git 我們已經完成了此提交的編輯，並繼續執行下一個變基命令。這樣就行了！運行 <code>git log</code> 來查看你的勞動成果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git log -3 --oneline</span></span>
<span class="line"><span>fe19cc3 (HEAD -&gt; master) Prompt user for their name</span></span>
<span class="line"><span>659a489 Add get_name function to C program</span></span>
<span class="line"><span>237b246 Add C program skeleton</span></span></code></pre></div><h3 id="重新排序提交" tabindex="-1">重新排序提交 <a class="header-anchor" href="#重新排序提交" aria-label="Permalink to “重新排序提交”">​</a></h3><p>這很簡單。讓我們從設置沙箱開始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Goodbye now!&quot; &gt;farewell.txt</span></span>
<span class="line"><span>git add farewell.txt</span></span>
<span class="line"><span>git commit -m&quot;Add farewell.txt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Hello there!&quot; &gt;greeting.txt</span></span>
<span class="line"><span>git add greeting.txt</span></span>
<span class="line"><span>git commit -m&quot;Add greeting.txt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;How&#39;re you doing?&quot; &gt;inquiry.txt</span></span>
<span class="line"><span>git add inquiry.txt</span></span>
<span class="line"><span>git commit -m&quot;Add inquiry.txt&quot;</span></span></code></pre></div><p>現在 <code>git log</code> 看起來應如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>f03baa5 (HEAD -&gt; master) Add inquiry.txt</span></span>
<span class="line"><span>a4cebf7 Add greeting.txt</span></span>
<span class="line"><span>90bb015 Add farewell.txt</span></span></code></pre></div><p>顯然，這都是亂序。讓我們對過去的 3 個提交進行交互式變基來解決此問題。運行 <code>git rebase -i HEAD~3</code>，這個變基規劃將出現：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 90bb015 Add farewell.txt</span></span>
<span class="line"><span>pick a4cebf7 Add greeting.txt</span></span>
<span class="line"><span>pick f03baa5 Add inquiry.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Rebase fe19cc3..f03baa5 onto fe19cc3 (3 commands)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Commands:</span></span>
<span class="line"><span># p, pick &lt;commit&gt; = use commit</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># These lines can be re-ordered; they are executed from top to bottom.</span></span></code></pre></div><p>現在，解決方法很簡單：只需按照你希望提交出現的順序重新排列這些行。應該看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick a4cebf7 Add greeting.txt</span></span>
<span class="line"><span>pick f03baa5 Add inquiry.txt</span></span>
<span class="line"><span>pick 90bb015 Add farewell.txt</span></span></code></pre></div><p>保存並關閉你的編輯器，而 Git 將為你完成其餘工作。請注意，在實踐中這樣做可能會導致衝突，參看下面章節以獲取解決衝突的幫助。</p><h3 id="git-pull-rebase" tabindex="-1">git pull --rebase <a class="header-anchor" href="#git-pull-rebase" aria-label="Permalink to “git pull --rebase”">​</a></h3><p>如果你一直在由上游更新的分支 <code>&lt;branch&gt;</code>（比如説原始遠程）上做一些提交，通常 <code>git pull</code> 會創建一個合併提交。在這方面，<code>git pull</code> 的默認行為等同於：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git fetch origin &lt;branch&gt;</span></span>
<span class="line"><span>git merge origin/&lt;branch&gt;</span></span></code></pre></div><p>假設本地分支 <code>&lt;branch&gt;</code> 配置為從原始遠程跟蹤 <code>&lt;branch&gt;</code> 分支，即：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git config branch.&lt;branch&gt;.remote</span></span>
<span class="line"><span>origin</span></span>
<span class="line"><span>$ git config branch.&lt;branch&gt;.merge</span></span>
<span class="line"><span>refs/heads/&lt;branch&gt;</span></span></code></pre></div><p>還有另一種選擇，它通常更有用，並且會讓歷史記錄更清晰：<code>git pull --rebase</code>。與合併方式不同，這基本上 [^4] 等效於以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git fetch origin</span></span>
<span class="line"><span>git rebase origin/&lt;branch&gt;</span></span></code></pre></div><p>合併方式更簡單易懂，但是如果你瞭解如何使用 <code>git rebase</code>，那麼變基方式幾乎可以做到你想要做的任何事情。如果願意，可以將其設置為默認行為，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git config --global pull.rebase true</span></span></code></pre></div><p>當你執行此操作時，從技術上講，你在應用我們在下一節中討論的過程……因此，讓我們也解釋一下故意執行此操作的含義。</p><h3 id="使用-git-rebase-來變基" tabindex="-1">使用 git rebase 來變基 <a class="header-anchor" href="#使用-git-rebase-來變基" aria-label="Permalink to “使用 git rebase 來變基”">​</a></h3><p>具有諷刺意味的是，我最少使用的 Git 變基功能是它以之命名的功能：變基分支。假設你有以下分支：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>A--B--C--D--&gt; master</span></span>
<span class="line"><span>   \\--E--F--&gt; feature-1</span></span>
<span class="line"><span>      \\--G--&gt; feature-2</span></span></code></pre></div><p>事實證明，<code>feature-2</code> 不依賴於 <code>feature-1</code> 的任何更改，它依賴於提交 E，因此你可以將其作為基礎脱離 <code>master</code>。因此，解決方法是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git rebase --onto master feature-1 feature-2</span></span></code></pre></div><p>非交互式變基對所有牽連的提交都執行默認操作（<code>pick</code>）[^5] ，它只是簡單地將不在 <code>feature-1</code> 中的 <code>feature-2</code> 中提交重放到 <code>master</code> 上。你的歷史記錄現在看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>A--B--C--D--&gt; master</span></span>
<span class="line"><span>   |     \\--G--&gt; feature-2</span></span>
<span class="line"><span>   \\--E--F--&gt; feature-1</span></span></code></pre></div><h3 id="解決衝突" tabindex="-1">解決衝突 <a class="header-anchor" href="#解決衝突" aria-label="Permalink to “解決衝突”">​</a></h3><p>解決合併衝突的詳細信息不在本指南的範圍內，將來請你注意另一篇指南。假設你熟悉通常的解決衝突的方法，那麼這裏是專門適用於變基的部分。</p><p>有時，在進行變基時會遇到合併衝突，你可以像處理其他任何合併衝突一樣處理該衝突。Git 將在受影響的文件中設置衝突標記，<code>git status</code> 將顯示你需要解決的問題，並且你可以使用 <code>git add</code> 或 <code>git rm</code> 將文件標記為已解決。但是，在 <code>git rebase</code> 的上下文中，你應該注意兩個選項。</p><p>首先是如何完成衝突解決。解決由於 <code>git merge</code> 引起的衝突時，與其使用 <code>git commit</code> 那樣的命令，更適當的變基命令是 <code>git rebase --continue</code>。但是，還有一個可用的選項：<code>git rebase --skip</code>。 這將跳過你正在處理的提交，它不會包含在變基中。這在執行非交互性變基時最常見，這時 Git 不會意識到它從“其他”分支中提取的提交是與“我們”分支上衝突的提交的更新版本。</p><h3 id="幫幫我-我把它弄壞了" tabindex="-1">幫幫我！ 我把它弄壞了！ <a class="header-anchor" href="#幫幫我-我把它弄壞了" aria-label="Permalink to “幫幫我！ 我把它弄壞了！”">​</a></h3><p>毫無疑問，變基有時會很難。如果你犯了一個錯誤，並因此而丟失了所需的提交，那麼可以使用 <code>git reflog</code> 來節省下一天的時間。運行此命令將向你顯示更改一個引用（即分支和標記）的每個操作。每行顯示你的舊引用所指向的內容，你可對你認為丟失的 Git 提交執行 <code>git cherry-pick</code>、<code>git checkout</code>、<code>git show</code> 或任何其他操作。</p><p>[^1]: 我們添加了一個空的初始提交以簡化本教程的其餘部分，因為要對版本庫的初始提交進行變基需要特殊的命令（即<code> git rebase --root</code>）。 [^2]: 如果要編譯此程序，請運行 <code>cc -o main main.c</code>，然後運行 <code>./main</code> 查看結果。 [^3]: 實際上，這是“混合重置”。“軟重置”（使用 <code>git reset --soft</code> 完成）將暫存更改，因此你無需再次 <code>git add</code> 添加它們，並且可以一次性提交所有更改。這不是我們想要的。我們希望選擇性地暫存部分更改，以拆分提交。 [^4]: 實際上，這取決於上游分支本身是否已變基或刪除/壓扁了某些提交。<code>git pull --rebase</code> 嘗試通過在 <code>git rebase</code> 和 <code>git merge-base</code> 中使用 “<ruby>復刻點<rt>fork-point</rt></ruby>” 機制來從這種情況中恢復，以避免變基非本地提交。 [^5]: 實際上，這取決於 Git 的版本。直到 2.26.0 版，默認的非交互行為以前與交互行為稍有不同，這種方式通常並不重要。</p><hr>`,106)),i("p",null,[s[3]||(s[3]=a("via: ",-1)),e(n,{href:"https://git-rebase.io/"},{default:p(()=>[...s[2]||(s[2]=[a("https://git-rebase.io/",-1)])]),_:1})]),i("p",null,[s[8]||(s[8]=a("作者：",-1)),e(n,{href:"https://git-rebase.io/"},{default:p(()=>[...s[4]||(s[4]=[a("git-rebase",-1)])]),_:1}),s[9]||(s[9]=a(" 選題：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[5]||(s[5]=[a("lujun9972",-1)])]),_:1}),s[10]||(s[10]=a(" 譯者：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[6]||(s[6]=[a("wxy",-1)])]),_:1}),s[11]||(s[11]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[7]||(s[7]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[14]||(s[14]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[12]||(s[12]=[a("LCTT",-1)])]),_:1}),s[15]||(s[15]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[13]||(s[13]=[a("Linux中國",-1)])]),_:1}),s[16]||(s[16]=a(" 榮譽推出",-1))])])}const y=t(h,[["render",g]]);export{q as __pageData,y as default};
