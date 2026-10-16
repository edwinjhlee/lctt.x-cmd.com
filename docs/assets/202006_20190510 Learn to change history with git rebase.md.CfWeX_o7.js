import{_ as t,a0 as l,w as c,s as o,I as i,x as a,a1 as e,A as p,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"学习用 Git 变基来改变历史！ | LCTT x X-CMD","titleTemplate":false,"description":"学习用 Git 变基来改变历史！ | LCTT (202006) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"学习用 Git 变基来改变历史！ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"学习用 Git 变基来改变历史！ | LCTT (202006) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202006/20190510 Learn to change history with git rebase","title":"学习用 Git 变基来改变历史！","tag":"202006","desc":""},"relativePath":"202006/20190510 Learn to change history with git rebase.md","filePath":"[post].md"}'),h={name:"202006/20190510 Learn to change history with git rebase.md"};function g(r,s,u,b,k,m){const n=l("Link");return c(),o("div",null,[s[17]||(s[17]=i("h1",{id:"学习用-git-变基来改变历史",tabindex:"-1"},[a("学习用 Git 变基来改变历史！ "),i("a",{class:"header-anchor",href:"#学习用-git-变基来改变历史","aria-label":"Permalink to “学习用 Git 变基来改变历史！”"},"​")],-1)),i("p",null,[e(n,{href:"https://git-scm.com/"},{default:p(()=>[...s[0]||(s[0]=[a("Git",-1)])]),_:1}),s[1]||(s[1]=a(" 核心的附加价值之一就是编辑历史记录的能力。与将历史记录视为神圣的记录的版本控制系统不同，在 Git 中，我们可以修改历史记录以适应我们的需要。这为我们提供了很多强大的工具，让我们可以像使用重构来维护良好的软件设计实践一样，编织良好的提交历史。这些工具对于新手甚至是有经验的 Git 用户来说可能会有些令人生畏，但本指南将帮助我们揭开强大的 git-rebase 的神秘面纱。",-1))]),s[18]||(s[18]=d(`<blockquote><p>值得注意的是：一般建议不要修改公共分支、共享分支或稳定分支的历史记录。编辑特性分支和个人分支的历史记录是可以的，编辑还没有推送的提交也是可以的。在编辑完提交后，可以使用 <code>git push -f</code> 来强制推送你的修改到个人分支或特性分支。</p></blockquote><p>尽管有这么可怕的警告，但值得一提的是，本指南中提到的一切都是非破坏性操作。实际上，在 Git 中永久丢失数据是相当困难的。本指南结尾介绍了在犯错误时进行纠正的方法。</p><h3 id="设置沙盒" tabindex="-1">设置沙盒 <a class="header-anchor" href="#设置沙盒" aria-label="Permalink to “设置沙盒”">​</a></h3><p>我们不想破坏你的任何实际的版本库，所以在整个指南中，我们将使用一个沙盒版本库。运行这些命令来开始工作。[^1]</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git init /tmp/rebase-sandbox</span></span>
<span class="line"><span>cd /tmp/rebase-sandbox</span></span>
<span class="line"><span>git commit --allow-empty -m&quot;Initial commit&quot;</span></span></code></pre></div><p>如果你遇到麻烦，只需运行 <code>rm -rf /tmp/rebase-sandbox</code>，并重新运行这些步骤即可重新开始。本指南的每一步都可以在新的沙箱上运行，所以没有必要重做每个任务。</p><h3 id="修正最近的提交" tabindex="-1">修正最近的提交 <a class="header-anchor" href="#修正最近的提交" aria-label="Permalink to “修正最近的提交”">​</a></h3><p>让我们从简单的事情开始：修复你最近的提交。让我们向沙盒中添加一个文件，并犯个错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello wrold!&quot; &gt;greeting.txt</span></span>
<span class="line"><span>git add greeting.txt</span></span>
<span class="line"><span>git commit -m&quot;Add greeting.txt&quot;</span></span></code></pre></div><p>修复这个错误是非常容易的。我们只需要编辑文件，然后用 <code>--amend</code> 提交就可以了，就像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello world!&quot; &gt;greeting.txt</span></span>
<span class="line"><span>git commit -a --amend</span></span></code></pre></div><p>指定 <code>-a</code> 会自动将所有 Git 已经知道的文件进行暂存（例如 Git 添加的），而 <code>--amend</code> 会将更改的内容压扁到最近的提交中。保存并退出你的编辑器（如果需要，你现在可以修改提交信息）。你可以通过运行 <code>git show</code> 看到修复的提交。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>commit f5f19fbf6d35b2db37dcac3a55289ff9602e4d00 (HEAD -&gt; master)</span></span>
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
<span class="line"><span>+Hello world!</span></span></code></pre></div><h3 id="修复较旧的提交" tabindex="-1">修复较旧的提交 <a class="header-anchor" href="#修复较旧的提交" aria-label="Permalink to “修复较旧的提交”">​</a></h3><p><code>--amend</code> 仅适用于最近的提交。如果你需要修正一个较旧的提交会怎么样？让我们从相应地设置沙盒开始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello!&quot; &gt;greeting.txt</span></span>
<span class="line"><span>git add greeting.txt</span></span>
<span class="line"><span>git commit -m&quot;Add greeting.txt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Goodbye world!&quot; &gt;farewell.txt</span></span>
<span class="line"><span>git add farewell.txt</span></span>
<span class="line"><span>git commit -m&quot;Add farewell.txt&quot;</span></span></code></pre></div><p>看起来 <code>greeting.txt </code> 像是丢失了 <code>&quot;world&quot;</code>。让我们正常地写个提交来解决这个问题：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Hello world!&quot; &gt;greeting.txt</span></span>
<span class="line"><span>git commit -a -m&quot;fixup greeting.txt&quot;</span></span></code></pre></div><p>现在文件看起来正确，但是我们的历史记录可以更好一点 —— 让我们使用新的提交来“修复”（<code>fixup</code>）最后一个提交。为此，我们需要引入一个新工具：交互式变基。我们将以这种方式编辑最后三个提交，因此我们将运行 <code>git rebase -i HEAD~3</code>（<code>-i</code> 代表交互式）。这样会打开文本编辑器，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 8d3fc77 Add greeting.txt</span></span>
<span class="line"><span>pick 2a73a77 Add farewell.txt</span></span>
<span class="line"><span>pick 0b9d0bb fixup greeting.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Rebase f5f19fb..0b9d0bb onto f5f19fb (3 commands)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Commands:</span></span>
<span class="line"><span># p, pick &lt;commit&gt; = use commit</span></span>
<span class="line"><span># f, fixup &lt;commit&gt; = like &quot;squash&quot;, but discard this commit&#39;s log message</span></span></code></pre></div><p>这是变基计划，通过编辑此文件，你可以指导 Git 如何编辑历史记录。我已经将该摘要削减为仅与变基计划这一部分相关的细节，但是你可以在文本编辑器中浏览完整的摘要。</p><p>当我们保存并关闭编辑器时，Git 将从其历史记录中删除所有这些提交，然后一次执行一行。默认情况下，它将选取（<code>pick</code>）每个提交，将其从堆中召唤出来并添加到分支中。如果我们对此文件根本没有做任何编辑，则将直接回到起点，按原样选取每个提交。现在，我们将使用我最喜欢的功能之一：修复（<code>fixup</code>）。编辑第三行，将操作从 <code>pick</code> 更改为 <code>fixup</code>，并将其立即移至我们要“修复”的提交之后：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 8d3fc77 Add greeting.txt</span></span>
<span class="line"><span>fixup 0b9d0bb fixup greeting.txt</span></span>
<span class="line"><span>pick 2a73a77 Add farewell.txt</span></span></code></pre></div><blockquote><p><strong>技巧</strong>：我们也可以只用 <code>f</code> 来缩写它，以加快下次的速度。</p></blockquote><p>保存并退出编辑器，Git 将运行这些命令。我们可以检查日志以验证结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git log -2 --oneline</span></span>
<span class="line"><span>fcff6ae (HEAD -&gt; master) Add farewell.txt</span></span>
<span class="line"><span>a479e94 Add greeting.txt</span></span></code></pre></div><h3 id="将多个提交压扁为一个" tabindex="-1">将多个提交压扁为一个 <a class="header-anchor" href="#将多个提交压扁为一个" aria-label="Permalink to “将多个提交压扁为一个”">​</a></h3><p>在工作时，当你达到较小的里程碑或修复以前的提交中的错误时，你可能会发现写很多提交很有用。但是，在将你的工作合并到 <code>master</code> 分支之前，将这些提交“压扁”（<code>squash</code>）到一起以使历史记录更清晰可能很有用。为此，我们将使用“压扁”（<code>squash </code>）操作。让我们从编写一堆提交开始，如果要加快速度，只需复制并粘贴这些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git checkout -b squash</span></span>
<span class="line"><span>for c in H e l l o , &#39; &#39; w o r l d; do</span></span>
<span class="line"><span>    echo &quot;$c&quot; &gt;&gt;squash.txt</span></span>
<span class="line"><span>    git add squash.txt</span></span>
<span class="line"><span>    git commit -m&quot;Add &#39;$c&#39; to squash.txt&quot;</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>要制作出一个写着 “Hello，world” 的文件，要做很多事情！让我们开始另一个交互式变基，将它们压扁在一起。请注意，我们首先签出了一个分支来进行尝试。因此，因为我们使用 <code>git rebase -i master</code> 进行的分支，我们可以快速变基所有提交。结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 1e85199 Add &#39;H&#39; to squash.txt</span></span>
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
<span class="line"><span># s, squash &lt;commit&gt; = use commit, but meld into previous commit</span></span></code></pre></div><blockquote><p><strong>技巧</strong>：你的本地 <code>master</code> 分支独立于远程 <code>master</code> 分支而发展，并且 Git 将远程分支存储为 <code>origin/master</code>。结合这种技巧，<code>git rebase -i origin/master</code> 通常是一种非常方便的方法，可以变基所有尚未合并到上游的提交！</p></blockquote><p>我们将把所有这些更改压扁到第一个提交中。为此，将第一行除外的每个“选取”（<code>pick</code>）操作都更改为“压扁”（<code>squash</code>），如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 1e85199 Add &#39;H&#39; to squash.txt</span></span>
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
<span class="line"><span>squash 6b608ae Add &#39;d&#39; to squash.txt</span></span></code></pre></div><p>保存并关闭编辑器时，Git 会考虑片刻，然后再次打开编辑器以修改最终的提交消息。你会看到以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># This is a combination of 12 commits.</span></span>
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
<span class="line"><span>#</span></span></code></pre></div><p>默认情况下，这是所有要压扁的提交的消息的组合，但是像这样将其保留肯定不是你想要的。不过，旧的提交消息在编写新的提交消息时可能很有用，所以放在这里以供参考。</p><blockquote><p><strong>提示</strong>：你在上一节中了解的“修复”（<code>fixup</code>）命令也可以用于此目的，但它会丢弃压扁的提交的消息。</p></blockquote><p>让我们删除所有内容，并用更好的提交消息替换它，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Add squash.txt with contents &quot;Hello, world&quot;</span></span>
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
<span class="line"><span>#</span></span></code></pre></div><p>保存并退出编辑器，然后检查你的 Git 日志，成功！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>commit c785f476c7dff76f21ce2cad7c51cf2af00a44b6 (HEAD -&gt; squash)</span></span>
<span class="line"><span>Author: Drew DeVault</span></span>
<span class="line"><span>Date:   Sun Apr 28 14:21:56 2019 -0400</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Add squash.txt with contents &quot;Hello, world&quot;</span></span></code></pre></div><p>在继续之前，让我们将所做的更改拉入 <code>master</code> 分支中，并摆脱掉这一草稿。我们可以像使用 <code>git merge</code> 一样使用 <code>git rebase</code>，但是它避免了创建合并提交：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git checkout master</span></span>
<span class="line"><span>git rebase squash</span></span>
<span class="line"><span>git branch -D squash</span></span></code></pre></div><p>除非我们实际上正在合并无关的历史记录，否则我们通常希望避免使用 <code>git merge</code>。如果你有两个不同的分支，则 <code>git merge</code> 对于记录它们合并的时间非常有用。在正常工作过程中，变基通常更为合适。</p><h3 id="将一个提交拆分为多个" tabindex="-1">将一个提交拆分为多个 <a class="header-anchor" href="#将一个提交拆分为多个" aria-label="Permalink to “将一个提交拆分为多个”">​</a></h3><p>有时会发生相反的问题：一个提交太大了。让我们来看一看拆分它们。这次，让我们写一些实际的代码。从一个简单的 C 程序 [^2] 开始（你仍然可以将此代码段复制并粘贴到你的 shell 中以快速执行此操作）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat &lt;&lt;EOF &gt;main.c</span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>首先提交它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git add main.c</span></span>
<span class="line"><span>git commit -m&quot;Add C program skeleton&quot;</span></span></code></pre></div><p>然后把这个程序扩展一些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat &lt;&lt;EOF &gt;main.c</span></span>
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
<span class="line"><span>EOF</span></span></code></pre></div><p>提交之后，我们就可以准备学习如何将其拆分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git commit -a -m&quot;Flesh out C program&quot;</span></span></code></pre></div><p>第一步是启动交互式变基。让我们用 <code>git rebase -i HEAD~2</code> 来变基这两个提交，给出的变基计划如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 237b246 Add C program skeleton</span></span>
<span class="line"><span>pick b3f188b Flesh out C program</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Rebase c785f47..b3f188b onto c785f47 (2 commands)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Commands:</span></span>
<span class="line"><span># p, pick &lt;commit&gt; = use commit</span></span>
<span class="line"><span># e, edit &lt;commit&gt; = use commit, but stop for amending</span></span></code></pre></div><p>将第二个提交的命令从 <code>pick</code> 更改为 <code>edit</code>，然后保存并关闭编辑器。Git 会考虑一秒钟，然后向你建议：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Stopped at b3f188b...  Flesh out C program</span></span>
<span class="line"><span>You can amend the commit now, with</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  git commit --amend</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Once you are satisfied with your changes, run</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  git rebase --continue</span></span></code></pre></div><p>我们可以按照以下说明为提交<em>添加</em>新的更改，但我们可以通过运行 <code>git reset HEAD^</code> 来进行“软重置” [^3]。如果在此之后运行 <code>git status</code>，你将看到它取消了提交最新的提交，并将其更改添加到工作树中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Last commands done (2 commands done):</span></span>
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
<span class="line"><span>no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)</span></span></code></pre></div><p>为了对此进行拆分，我们将进行<em>交互式提交</em>。这使我们能够选择性地仅提交工作树中的特定更改。运行 <code>git commit -p</code> 开始此过程，你将看到以下提示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>diff --git a/main.c b/main.c</span></span>
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
<span class="line"><span>Stage this hunk [y,n,q,a,d,s,e,?]?</span></span></code></pre></div><p>Git 仅向你提供了一个“大块”（即单个更改）以进行提交。不过，这太大了，让我们使用 <code>s</code> 命令将这个“大块”拆分成较小的部分。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Split into 2 hunks.</span></span>
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
<span class="line"><span>Stage this hunk [y,n,q,a,d,j,J,g,/,e,?]?</span></span></code></pre></div><blockquote><p><strong>提示</strong>：如果你对其他选项感到好奇，请按 <code>?</code> 汇总显示。</p></blockquote><p>这个大块看起来更好：单一、独立的更改。让我们按 <code>y</code> 来回答问题（并暂存那个“大块”），然后按 <code>q</code> 以“退出”交互式会话并继续进行提交。会弹出编辑器，要求输入合适的提交消息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Add get_name function to C program</span></span>
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
<span class="line"><span>#</span></span></code></pre></div><p>保存并关闭编辑器，然后我们进行第二次提交。我们可以执行另一次交互式提交，但是由于我们只想在此提交中包括其余更改，因此我们将执行以下操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git commit -a -m&quot;Prompt user for their name&quot;</span></span>
<span class="line"><span>git rebase --continue</span></span></code></pre></div><p>最后一条命令告诉 Git 我们已经完成了此提交的编辑，并继续执行下一个变基命令。这样就行了！运行 <code>git log</code> 来查看你的劳动成果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git log -3 --oneline</span></span>
<span class="line"><span>fe19cc3 (HEAD -&gt; master) Prompt user for their name</span></span>
<span class="line"><span>659a489 Add get_name function to C program</span></span>
<span class="line"><span>237b246 Add C program skeleton</span></span></code></pre></div><h3 id="重新排序提交" tabindex="-1">重新排序提交 <a class="header-anchor" href="#重新排序提交" aria-label="Permalink to “重新排序提交”">​</a></h3><p>这很简单。让我们从设置沙箱开始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &quot;Goodbye now!&quot; &gt;farewell.txt</span></span>
<span class="line"><span>git add farewell.txt</span></span>
<span class="line"><span>git commit -m&quot;Add farewell.txt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Hello there!&quot; &gt;greeting.txt</span></span>
<span class="line"><span>git add greeting.txt</span></span>
<span class="line"><span>git commit -m&quot;Add greeting.txt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;How&#39;re you doing?&quot; &gt;inquiry.txt</span></span>
<span class="line"><span>git add inquiry.txt</span></span>
<span class="line"><span>git commit -m&quot;Add inquiry.txt&quot;</span></span></code></pre></div><p>现在 <code>git log</code> 看起来应如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>f03baa5 (HEAD -&gt; master) Add inquiry.txt</span></span>
<span class="line"><span>a4cebf7 Add greeting.txt</span></span>
<span class="line"><span>90bb015 Add farewell.txt</span></span></code></pre></div><p>显然，这都是乱序。让我们对过去的 3 个提交进行交互式变基来解决此问题。运行 <code>git rebase -i HEAD~3</code>，这个变基规划将出现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick 90bb015 Add farewell.txt</span></span>
<span class="line"><span>pick a4cebf7 Add greeting.txt</span></span>
<span class="line"><span>pick f03baa5 Add inquiry.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Rebase fe19cc3..f03baa5 onto fe19cc3 (3 commands)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Commands:</span></span>
<span class="line"><span># p, pick &lt;commit&gt; = use commit</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># These lines can be re-ordered; they are executed from top to bottom.</span></span></code></pre></div><p>现在，解决方法很简单：只需按照你希望提交出现的顺序重新排列这些行。应该看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pick a4cebf7 Add greeting.txt</span></span>
<span class="line"><span>pick f03baa5 Add inquiry.txt</span></span>
<span class="line"><span>pick 90bb015 Add farewell.txt</span></span></code></pre></div><p>保存并关闭你的编辑器，而 Git 将为你完成其余工作。请注意，在实践中这样做可能会导致冲突，参看下面章节以获取解决冲突的帮助。</p><h3 id="git-pull-rebase" tabindex="-1">git pull --rebase <a class="header-anchor" href="#git-pull-rebase" aria-label="Permalink to “git pull --rebase”">​</a></h3><p>如果你一直在由上游更新的分支 <code>&lt;branch&gt;</code>（比如说原始远程）上做一些提交，通常 <code>git pull</code> 会创建一个合并提交。在这方面，<code>git pull</code> 的默认行为等同于：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git fetch origin &lt;branch&gt;</span></span>
<span class="line"><span>git merge origin/&lt;branch&gt;</span></span></code></pre></div><p>假设本地分支 <code>&lt;branch&gt;</code> 配置为从原始远程跟踪 <code>&lt;branch&gt;</code> 分支，即：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git config branch.&lt;branch&gt;.remote</span></span>
<span class="line"><span>origin</span></span>
<span class="line"><span>$ git config branch.&lt;branch&gt;.merge</span></span>
<span class="line"><span>refs/heads/&lt;branch&gt;</span></span></code></pre></div><p>还有另一种选择，它通常更有用，并且会让历史记录更清晰：<code>git pull --rebase</code>。与合并方式不同，这基本上 [^4] 等效于以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git fetch origin</span></span>
<span class="line"><span>git rebase origin/&lt;branch&gt;</span></span></code></pre></div><p>合并方式更简单易懂，但是如果你了解如何使用 <code>git rebase</code>，那么变基方式几乎可以做到你想要做的任何事情。如果愿意，可以将其设置为默认行为，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git config --global pull.rebase true</span></span></code></pre></div><p>当你执行此操作时，从技术上讲，你在应用我们在下一节中讨论的过程……因此，让我们也解释一下故意执行此操作的含义。</p><h3 id="使用-git-rebase-来变基" tabindex="-1">使用 git rebase 来变基 <a class="header-anchor" href="#使用-git-rebase-来变基" aria-label="Permalink to “使用 git rebase 来变基”">​</a></h3><p>具有讽刺意味的是，我最少使用的 Git 变基功能是它以之命名的功能：变基分支。假设你有以下分支：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>A--B--C--D--&gt; master</span></span>
<span class="line"><span>   \\--E--F--&gt; feature-1</span></span>
<span class="line"><span>      \\--G--&gt; feature-2</span></span></code></pre></div><p>事实证明，<code>feature-2</code> 不依赖于 <code>feature-1</code> 的任何更改，它依赖于提交 E，因此你可以将其作为基础脱离 <code>master</code>。因此，解决方法是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git rebase --onto master feature-1 feature-2</span></span></code></pre></div><p>非交互式变基对所有牵连的提交都执行默认操作（<code>pick</code>）[^5] ，它只是简单地将不在 <code>feature-1</code> 中的 <code>feature-2</code> 中提交重放到 <code>master</code> 上。你的历史记录现在看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>A--B--C--D--&gt; master</span></span>
<span class="line"><span>   |     \\--G--&gt; feature-2</span></span>
<span class="line"><span>   \\--E--F--&gt; feature-1</span></span></code></pre></div><h3 id="解决冲突" tabindex="-1">解决冲突 <a class="header-anchor" href="#解决冲突" aria-label="Permalink to “解决冲突”">​</a></h3><p>解决合并冲突的详细信息不在本指南的范围内，将来请你注意另一篇指南。假设你熟悉通常的解决冲突的方法，那么这里是专门适用于变基的部分。</p><p>有时，在进行变基时会遇到合并冲突，你可以像处理其他任何合并冲突一样处理该冲突。Git 将在受影响的文件中设置冲突标记，<code>git status</code> 将显示你需要解决的问题，并且你可以使用 <code>git add</code> 或 <code>git rm</code> 将文件标记为已解决。但是，在 <code>git rebase</code> 的上下文中，你应该注意两个选项。</p><p>首先是如何完成冲突解决。解决由于 <code>git merge</code> 引起的冲突时，与其使用 <code>git commit</code> 那样的命令，更适当的变基命令是 <code>git rebase --continue</code>。但是，还有一个可用的选项：<code>git rebase --skip</code>。 这将跳过你正在处理的提交，它不会包含在变基中。这在执行非交互性变基时最常见，这时 Git 不会意识到它从“其他”分支中提取的提交是与“我们”分支上冲突的提交的更新版本。</p><h3 id="帮帮我-我把它弄坏了" tabindex="-1">帮帮我！ 我把它弄坏了！ <a class="header-anchor" href="#帮帮我-我把它弄坏了" aria-label="Permalink to “帮帮我！ 我把它弄坏了！”">​</a></h3><p>毫无疑问，变基有时会很难。如果你犯了一个错误，并因此而丢失了所需的提交，那么可以使用 <code>git reflog</code> 来节省下一天的时间。运行此命令将向你显示更改一个引用（即分支和标记）的每个操作。每行显示你的旧引用所指向的内容，你可对你认为丢失的 Git 提交执行 <code>git cherry-pick</code>、<code>git checkout</code>、<code>git show</code> 或任何其他操作。</p><p>[^1]: 我们添加了一个空的初始提交以简化本教程的其余部分，因为要对版本库的初始提交进行变基需要特殊的命令（即<code> git rebase --root</code>）。 [^2]: 如果要编译此程序，请运行 <code>cc -o main main.c</code>，然后运行 <code>./main</code> 查看结果。 [^3]: 实际上，这是“混合重置”。“软重置”（使用 <code>git reset --soft</code> 完成）将暂存更改，因此你无需再次 <code>git add</code> 添加它们，并且可以一次性提交所有更改。这不是我们想要的。我们希望选择性地暂存部分更改，以拆分提交。 [^4]: 实际上，这取决于上游分支本身是否已变基或删除/压扁了某些提交。<code>git pull --rebase</code> 尝试通过在 <code>git rebase</code> 和 <code>git merge-base</code> 中使用 “<ruby>复刻点<rt>fork-point</rt></ruby>” 机制来从这种情况中恢复，以避免变基非本地提交。 [^5]: 实际上，这取决于 Git 的版本。直到 2.26.0 版，默认的非交互行为以前与交互行为稍有不同，这种方式通常并不重要。</p><hr>`,106)),i("p",null,[s[3]||(s[3]=a("via: ",-1)),e(n,{href:"https://git-rebase.io/"},{default:p(()=>[...s[2]||(s[2]=[a("https://git-rebase.io/",-1)])]),_:1})]),i("p",null,[s[8]||(s[8]=a("作者：",-1)),e(n,{href:"https://git-rebase.io/"},{default:p(()=>[...s[4]||(s[4]=[a("git-rebase",-1)])]),_:1}),s[9]||(s[9]=a(" 选题：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[5]||(s[5]=[a("lujun9972",-1)])]),_:1}),s[10]||(s[10]=a(" 译者：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[6]||(s[6]=[a("wxy",-1)])]),_:1}),s[11]||(s[11]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[7]||(s[7]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[14]||(s[14]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[12]||(s[12]=[a("LCTT",-1)])]),_:1}),s[15]||(s[15]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[13]||(s[13]=[a("Linux中国",-1)])]),_:1}),s[16]||(s[16]=a(" 荣誉推出",-1))])])}const y=t(h,[["render",g]]);export{q as __pageData,y as default};
