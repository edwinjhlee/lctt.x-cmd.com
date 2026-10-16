import{_ as l,a0 as o,w as c,s as d,ao as t,I as p,x as a,a1 as e,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"学习用工具来驾驭 Git 历史 | LCTT x X-CMD","titleTemplate":false,"description":"学习用工具来驾驭 Git 历史 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"学习用工具来驾驭 Git 历史 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"学习用工具来驾驭 Git 历史 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20160606 Learn your tools Navigating your Git History","title":"学习用工具来驾驭 Git 历史","tag":"201802","desc":""},"relativePath":"201802/20160606 Learn your tools Navigating your Git History.md","filePath":"[post].md"}'),r={name:"201802/20160606 Learn your tools Navigating your Git History.md"};function g(b,s,h,u,f,m){const n=o("Link");return c(),d("div",null,[s[27]||(s[27]=t(`<h1 id="学习用工具来驾驭-git-历史" tabindex="-1">学习用工具来驾驭 Git 历史 <a class="header-anchor" href="#学习用工具来驾驭-git-历史" aria-label="Permalink to “学习用工具来驾驭 Git 历史”">​</a></h1><p>在你的日常工作中，不可能每天都从头开始去开发一个新的应用程序。而真实的情况是，在日常工作中，我们大多数时候所面对的都是遗留下来的一个代码库，去修改一些特性的内容或者现存的一些代码行，这是我们在日常工作中很重要的一部分。而这也就是分布式版本控制系统 <code>git</code> 的价值所在。现在，我们来深入了解怎么去使用 <code>git</code> 的历史以及如何很轻松地去浏览它的历史。</p><h3 id="git-历史" tabindex="-1">Git 历史 <a class="header-anchor" href="#git-历史" aria-label="Permalink to “Git 历史”">​</a></h3><p>首先和最重要的事是，什么是 <code>git</code> 历史？正如其名字一样，它是一个 <code>git</code> 仓库的提交历史。它包含一堆提交信息，其中有它们的作者的名字、该提交的哈希值以及提交日期。查看一个 <code>git</code> 仓库历史的方法很简单，就是一个 <code>git log</code> 命令。</p><blockquote><p><em>旁注：为便于本文的演示，我们使用 Ruby on Rails 的仓库的 <code>master</code> 分支。之所以选择它的理由是因为，Rails 有良好的 <code>git</code> 历史，漂亮的提交信息、引用以及对每个变更的解释。如果考虑到代码库的大小、维护者的年龄和数量，Rails 肯定是我见过的最好的仓库。当然了，我并不是说其它的 <code>git</code> 仓库做的不好，它只是我见过的比较好的一个仓库。</em></p></blockquote><p>那么，回到 Rails 仓库。如果你在 Ralis 仓库上运行 <code>git log</code>。你将看到如下所示的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>commit 66ebbc4952f6cfb37d719f63036441ef98149418</span></span>
<span class="line"><span>Author: Arthur Neves &lt;foo@bar.com&gt;</span></span>
<span class="line"><span>Date:   Fri Jun 3 17:17:38 2016 -0400</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Dont re-define class SQLite3Adapter on test</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    We were declaring  in a few tests, which depending of    the order load will cause an error, as the super class could change.</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>	see https://github.com/rails/rails/commit/ac1c4e141b20c1067af2c2703db6e1b463b985da#commitcomment-17731383</span></span>
<span class="line"><span></span></span>
<span class="line"><span>commit 755f6bf3d3d568bc0af2c636be2f6df16c651eb1</span></span>
<span class="line"><span>Merge: 4e85538 f7b850e</span></span>
<span class="line"><span>Author: Eileen M. Uchitelle &lt;foo@bar.com&gt;</span></span>
<span class="line"><span>Date:   Fri Jun 3 10:21:49 2016 -0400</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Merge pull request #25263 from abhishekjain16/doc_accessor_thread</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    [skip ci] Fix grammar</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>commit f7b850ec9f6036802339e965c8ce74494f731b4a</span></span>
<span class="line"><span>Author: Abhishek Jain &lt;foo@bar.com&gt;</span></span>
<span class="line"><span>Date:   Fri Jun 3 16:49:21 2016 +0530</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>	[skip ci] Fix grammar</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>commit 4e85538dddf47877cacc65cea6c050e349af0405</span></span>
<span class="line"><span>Merge: 082a515 cf2158c</span></span>
<span class="line"><span>Author: Vijay Dev &lt;foo@bar.com&gt;</span></span>
<span class="line"><span>Date:   Fri Jun 3 14:00:47 2016 +0000</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Merge branch &#39;master&#39; of github.com:rails/docrails</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Conflicts:</span></span>
<span class="line"><span>    	guides/source/action_cable_overview.md</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>commit 082a5158251c6578714132e5c4f71bd39f462d71</span></span>
<span class="line"><span>Merge: 4bd11d4 3bd30d9</span></span>
<span class="line"><span>Author: Yves Senn &lt;foo@bar.com&gt;</span></span>
<span class="line"><span>Date:   Fri Jun 3 11:30:19 2016 +0200</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Merge pull request #25243 from sukesan1984/add_i18n_validation_test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Add i18n_validation_test</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>commit 4bd11d46de892676830bca51d3040f29200abbfa</span></span>
<span class="line"><span>Merge: 99d8d45 e98caf8</span></span>
<span class="line"><span>Author: Arthur Nogueira Neves &lt;foo@bar.com&gt;</span></span>
<span class="line"><span>Date:   Thu Jun 2 22:55:52 2016 -0400</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Merge pull request #25258 from alexcameron89/master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	[skip ci] Make header bullets consistent in engines.md</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>commit e98caf81fef54746126d31076c6d346c48ae8e1b</span></span>
<span class="line"><span>Author: Alex Kitchens &lt;foo@bar.com&gt;</span></span>
<span class="line"><span>Date:   Thu Jun 2 21:26:53 2016 -0500</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	[skip ci] Make header bullets consistent in engines.md</span></span></code></pre></div><p>正如你所见，<code>git log</code> 展示了提交的哈希、作者及其 email 以及该提交创建的日期。当然，<code>git</code> 输出的可定制性很强大，它允许你去定制 <code>git log</code> 命令的输出格式。比如说，我们只想看提交信息的第一行，我们可以运行 <code>git log --oneline</code>，它将输出一个更紧凑的日志：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>66ebbc4 Dont re-define class SQLite3Adapter on test</span></span>
<span class="line"><span>755f6bf Merge pull request #25263 from abhishekjain16/doc_accessor_thread</span></span>
<span class="line"><span>f7b850e [skip ci] Fix grammar4e85538 Merge branch &#39;master&#39; of github.com:rails/docrails</span></span>
<span class="line"><span>082a515 Merge pull request #25243 from sukesan1984/add_i18n_validation_test</span></span>
<span class="line"><span>4bd11d4 Merge pull request #25258 from alexcameron89/master</span></span>
<span class="line"><span>e98caf8 [skip ci] Make header bullets consistent in engines.md</span></span>
<span class="line"><span>99d8d45 Merge pull request #25254 from kamipo/fix_debug_helper_test</span></span>
<span class="line"><span>818397c Merge pull request #25240 from matthewd/reloadable-channels</span></span>
<span class="line"><span>2c5a8ba Don&#39;t blank pad day of the month when formatting dates</span></span>
<span class="line"><span>14ff8e7 Fix debug helper test</span></span></code></pre></div><p>如果你想看 <code>git log</code> 的全部选项，我建议你去查阅 <code>git log</code> 的 man 页面，你可以在一个终端中输入 <code>man git-log</code> 或者 <code>git help log</code> 来获得。</p>`,10)),p("blockquote",null,[p("p",null,[p("em",null,[s[2]||(s[2]=a("小提示：如果你觉得 ",-1)),s[3]||(s[3]=p("code",null,"git log",-1)),s[4]||(s[4]=a(" 看起来太恐怖或者过于复杂，或者你觉得看它太无聊了，我建议你去寻找一些 ",-1)),s[5]||(s[5]=p("code",null,"git",-1)),s[6]||(s[6]=a(" 的 GUI 或命令行工具。在之前，我使用过 ",-1)),e(n,{href:"http://gitx.frim.nl/"},{default:i(()=>[...s[0]||(s[0]=[a("GitX",-1)])]),_:1}),s[7]||(s[7]=a(" ，我觉得它很不错，但是，由于我看命令行更“亲切”一些，在我尝试了 ",-1)),e(n,{href:"https://github.com/jonas/tig"},{default:i(()=>[...s[1]||(s[1]=[a("tig",-1)])]),_:1}),s[8]||(s[8]=a(" 之后，就再也没有去用过它。",-1))])])]),s[28]||(s[28]=t(`<h3 id="寻找尼莫" tabindex="-1">寻找尼莫 <a class="header-anchor" href="#寻找尼莫" aria-label="Permalink to “寻找尼莫”">​</a></h3><p>现在，我们已经知道了关于 <code>git log</code> 命令的一些很基础的知识之后，我们来看一下，在我们的日常工作中如何使用它更加高效地浏览历史。</p><p>假如，我们怀疑在 <code>String#classify</code> 方法中有一个预期之外的行为，我们希望能够找出原因，并且定位出实现它的代码行。</p><p>为达到上述目的，你可以使用的第一个命令是 <code>git grep</code>，通过它可以找到这个方法定义在什么地方。简单来说，这个命令输出了匹配特定模式的那些行。现在，我们来找出定义它的方法，它非常简单 —— 我们对  <code>def classify</code> 运行 grep，然后看到的输出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>➜  git grep &#39;def classify&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>activesupport/lib/active_support/core_ext/string/inflections.rb:	def classifyactivesupport/lib/active_support/inflector/methods.rb:    def classify(table_name)tools/profile:    def classify</span></span></code></pre></div><p>现在，虽然我们已经看到这个方法是在哪里创建的，但是，并不能够确定它是哪一行。如果，我们在 <code>git grep</code> 命令上增加 <code>-n</code> 标志，<code>git</code> 将提供匹配的行号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>➜  git grep -n &#39;def classify&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>activesupport/lib/active_support/core_ext/string/inflections.rb:205:  def classifyactivesupport/lib/active_support/inflector/methods.rb:186:    def classify(table_name)tools/profile:112:    def classify</span></span></code></pre></div><p>更好看了，是吧？考虑到上下文，我们可以很轻松地找到，这个方法在 <code>activesupport/lib/active_support/core_ext/string/inflections.rb</code> 的第 205 行的 <code>classify</code> 方法，它看起来像这样，是不是很容易？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Creates a class name from a plural table name like Rails does for table names to models.</span></span>
<span class="line"><span># Note that this returns a string and not a class. (To convert to an actual class</span></span>
<span class="line"><span># follow +classify+ with +constantize+.)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#	&#39;ham_and_eggs&#39;.classify # =&gt; &quot;HamAndEgg&quot;</span></span>
<span class="line"><span>#   &#39;posts&#39;.classify        # =&gt; &quot;Post&quot;</span></span>
<span class="line"><span>	def classify</span></span>
<span class="line"><span>		ActiveSupport::Inflector.classify(self)</span></span>
<span class="line"><span>	end</span></span></code></pre></div><p>尽管我们找到的这个方法是在 <code>String</code> 上的一个常见的调用，它调用了 <code>ActiveSupport::Inflector</code> 上的另一个同名的方法。根据之前的 <code>git grep</code> 的结果，我们可以很轻松地发现结果的第二行， <code>activesupport/lib/active_support/inflector/methods.rb</code> 在 186 行上。我们正在寻找的方法是这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Creates a class name from a plural table name like Rails does for table</span></span>
<span class="line"><span># names to models. Note that this returns a string and not a Class (To</span></span>
<span class="line"><span># convert to an actual class follow +classify+ with constantize).</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#   classify(&#39;ham_and_eggs&#39;) # =&gt; &quot;HamAndEgg&quot;</span></span>
<span class="line"><span>#   classify(&#39;posts&#39;)        # =&gt; &quot;Post&quot;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Singular names are not handled correctly:</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#   classify(&#39;calculus&#39;)     # =&gt; &quot;Calculus&quot;</span></span>
<span class="line"><span>def classify(table_name)</span></span>
<span class="line"><span>	# strip out any leading schema name</span></span>
<span class="line"><span>	camelize(singularize(table_name.to_s.sub(/.*\\./, &#39;&#39;.freeze)))</span></span>
<span class="line"><span>end</span></span></code></pre></div><p>酷！考虑到 Rails 仓库的大小，我们借助 <code>git grep</code> 找到它，用时都没有超越 30 秒。</p><h3 id="那么-最后的变更是什么" tabindex="-1">那么，最后的变更是什么？ <a class="header-anchor" href="#那么-最后的变更是什么" aria-label="Permalink to “那么，最后的变更是什么？”">​</a></h3><p>现在，我们已经找到了所要找的方法，现在，我们需要搞清楚这个文件所经历的变更。由于我们已经知道了正确的文件名和行数，我们可以使用 <code>git blame</code>。这个命令展示了一个文件中每一行的最后修订者和修订的内容。我们来看一下这个文件最后的修订都做了什么：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git blame activesupport/lib/active_support/inflector/methods.rb</span></span></code></pre></div><p>虽然我们得到了这个文件每一行的最后的变更，但是，我们更感兴趣的是对特定方法（176 到 189 行）的最后变更。让我们在 <code>git blame</code> 命令上增加一个选项，让它只显示那些行的变化。此外，我们将在命令上增加一个 <code>-s</code> （忽略）选项，去跳过那一行变更时的作者名字和修订（提交）的时间戳：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git blame -L 176,189 -s activesupport/lib/active_support/inflector/methods.rb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>9fe8e19a 176)	#Creates a class name from a plural table name like Rails does for table</span></span>
<span class="line"><span>5ea3f284 177)	# names to models. Note that this returns a string and not a Class (To</span></span>
<span class="line"><span>9fe8e19a 178)	# convert to an actual class follow +classify+ with #constantize).</span></span>
<span class="line"><span>51cd6bb8 179)   #</span></span>
<span class="line"><span>6d077205 180)   #   classify(&#39;ham_and_eggs&#39;) # =&gt; &quot;HamAndEgg&quot;</span></span>
<span class="line"><span>9fe8e19a 181)   #   classify(&#39;posts&#39;)        # =&gt; &quot;Post&quot;</span></span>
<span class="line"><span>51cd6bb8 182)   #</span></span>
<span class="line"><span>51cd6bb8 183)   # Singular names are not handled correctly:</span></span>
<span class="line"><span>5ea3f284 184)   #</span></span>
<span class="line"><span>66d6e7be 185)   #   classify(&#39;calculus&#39;)     # =&gt; &quot;Calculus&quot;</span></span>
<span class="line"><span>51cd6bb8 186)   def classify(table_name)</span></span>
<span class="line"><span>51cd6bb8 187)     # strip out any leading schema name</span></span>
<span class="line"><span>5bb1d4d2 188)     camelize(singularize(table_name.to_s.sub(/.*\\./, &#39;&#39;.freeze)))</span></span>
<span class="line"><span>51cd6bb8 189)     end</span></span></code></pre></div><p>现在，<code>git blame</code> 命令的输出展示了指定行的全部内容以及它们各自的修订。让我们来看一下指定的修订，换句话说就是，每个变更都修订了什么，我们可以使用 <code>git show</code> 命令。当指定一个修订哈希（像 <code>66d6e7be</code>）作为一个参数时，它将展示这个修订的全部内容。包括作者名字、时间戳以及完整的修订内容。我们来看一下 188 行最后的修订都做了什么？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git show 5bb1d4d2</span></span></code></pre></div>`,19)),p("p",null,[s[11]||(s[11]=a("你亲自做实验了吗？如果没有做，我直接告诉你结果，这个令人惊叹的 ",-1)),e(n,{href:"https://github.com/rails/rails/commit/5bb1d4d288d019e276335465d0389fd2f5246bfd"},{default:i(()=>[...s[9]||(s[9]=[a("提交",-1)])]),_:1}),s[12]||(s[12]=a(" 是由 ",-1)),e(n,{href:"https://twitter.com/schneems"},{default:i(()=>[...s[10]||(s[10]=[a("Schneems",-1)])]),_:1}),s[13]||(s[13]=a(" 完成的，他通过使用 frozen 字符串做了一个非常有趣的性能优化，这在我们当前的场景中是非常有意义的。但是，由于我们在这个假设的调试会话中，这样做并不能告诉我们当前问题所在。因此，我们怎么样才能够通过研究来发现，我们选定的方法经过了哪些变更？",-1))]),s[29]||(s[29]=t(`<h3 id="搜索日志" tabindex="-1">搜索日志 <a class="header-anchor" href="#搜索日志" aria-label="Permalink to “搜索日志”">​</a></h3><p>现在，我们回到 <code>git</code> 日志，现在的问题是，怎么能够看到 <code>classify</code> 方法经历了哪些修订？</p><p><code>git log</code> 命令非常强大，因此它提供了非常多的列表选项。我们尝试使用 <code>-p</code> 选项去看一下保存了这个文件的 <code>git</code> 日志内容，这个选项的意思是在 <code>git</code> 日志中显示这个文件的完整补丁:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git log -p activesupport/lib/active_support/inflector/methods.rb</span></span></code></pre></div><p>这将给我们展示一个很长的修订列表，显示了对这个文件的每个修订。但是，正如下面所显示的，我们感兴趣的是对指定行的修订。对命令做一个小的修改，只显示我们希望的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git log -L 176,189:activesupport/lib/active_support/inflector/methods.rb</span></span></code></pre></div><p><code>git log</code> 命令接受 <code>-L</code> 选项，它用一个行的范围和文件名做为参数。它的格式可能有点奇怪，格式解释如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git log -L &lt;start-line&gt;,&lt;end-line&gt;:&lt;path-to-file&gt;</span></span></code></pre></div><p>当我们运行这个命令之后，我们可以看到对这些行的一个修订列表，它将带我们找到创建这个方法的第一个修订：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>commit 51xd6bb829c418c5fbf75de1dfbb177233b1b154</span></span>
<span class="line"><span>Author: Foo Bar &lt;foo@bar.com&gt;</span></span>
<span class="line"><span>Date:   Tue Jun 7 19:05:09 2011 -0700</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Refactor</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>diff--git a/activesupport/lib/active_support/inflector/methods.rb b/activesupport/lib/active_support/inflector/methods.rb</span></span>
<span class="line"><span>--- a/activesupport/lib/active_support/inflector/methods.rb</span></span>
<span class="line"><span>+++ b/activesupport/lib/active_support/inflector/methods.rb</span></span>
<span class="line"><span>@@ -58,0 +135,14 @@</span></span>
<span class="line"><span>+    # Create a class name from a plural table name like Rails does for table names to models.</span></span>
<span class="line"><span>+    # Note that this returns a string and not a Class. (To convert to an actual class</span></span>
<span class="line"><span>+    # follow +classify+ with +constantize+.)</span></span>
<span class="line"><span>+    #</span></span>
<span class="line"><span>+    # Examples:</span></span>
<span class="line"><span>+    #   &quot;egg_and_hams&quot;.classify # =&gt; &quot;EggAndHam&quot;</span></span>
<span class="line"><span>+    #   &quot;posts&quot;.classify        # =&gt; &quot;Post&quot;</span></span>
<span class="line"><span>+    #</span></span>
<span class="line"><span>+    # Singular names are not handled correctly:</span></span>
<span class="line"><span>+    #   &quot;business&quot;.classify     # =&gt; &quot;Busines&quot;</span></span>
<span class="line"><span>+    def classify(table_name)</span></span>
<span class="line"><span>+      # strip out any leading schema name</span></span>
<span class="line"><span>+      camelize(singularize(table_name.to_s.sub(/.*\\./, &#39;&#39;)))</span></span>
<span class="line"><span>+    end</span></span></code></pre></div><p>现在，我们再来看一下 —— 它是在 2011 年提交的。<code>git</code> 可以让我们重回到这个时间。这是一个很好的例子，它充分说明了足够的提交信息对于重新了解当时的上下文环境是多么的重要，因为从这个提交信息中，我们并不能获得足够的信息来重新理解当时的创建这个方法的上下文环境，但是，话说回来，你<strong>不应该</strong>对此感到恼怒，因为，你看到的这些项目，它们的作者都是无偿提供他们的工作时间和精力来做开源工作的。（向开源项目贡献者致敬！）</p><p>回到我们的正题，我们并不能确认 <code>classify</code> 方法最初实现是怎么回事，考虑到这个第一次的提交只是一个重构。现在，如果你认为，“或许、有可能、这个方法不在 176 行到 189 行的范围之内，那么就你应该在这个文件中扩大搜索范围”，这样想是对的。我们看到在它的修订提交的信息中提到了“重构”这个词，它意味着这个方法可能在那个文件中是真实存在的，而且是在重构之后它才存在于那个行的范围内。</p><p>但是，我们如何去确认这一点呢？不管你信不信，<code>git</code> 可以再次帮助你。<code>git log</code> 命令有一个 <code>-S</code> 选项，它可以传递一个特定的字符串作为参数，然后去查找代码变更（添加或者删除）。也就是说，如果我们执行 <code>git log -S classify</code> 这样的命令，我们可以看到所有包含 <code>classify</code> 字符串的变更行的提交。</p><p>如果你在 Ralis 仓库上运行上述命令，首先你会发现这个命令运行有点慢。但是，你应该会发现 <code>git</code> 实际上解析了在那个仓库中的所有修订来匹配这个字符串，其实它的运行速度是非常快的。在你的指尖下 <code>git</code> 再次展示了它的强大之处。因此，如果去找关于 <code>classify</code> 方法的第一个修订，我们可以运行如下的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git log -S &#39;def classify&#39;</span></span></code></pre></div><p>它将返回所有这个方法的引用和修改的地方。如果你一直往下看，你将看到日志中它的最后的提交：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>commit db045dbbf60b53dbe013ef25554fd013baf88134</span></span>
<span class="line"><span>Author: David Heinemeier Hansson &lt;foo@bar.com&gt;</span></span>
<span class="line"><span>Date:   Wed Nov 24 01:04:44 2004 +0000</span></span>
<span class="line"><span>	Initial</span></span>
<span class="line"><span>    git-svn-id: http://svn-commit.rubyonrails.org/rails/trunk@4 5ecf4fe2-1ee6-0310-87b1-e25e094e27de</span></span></code></pre></div><p>很酷！是吧？它初次被提交到 Rails，是由 DHH 在一个 <code>svn</code> 仓库上做的！这意味着 <code>classify</code> 大概在一开始就被提交到了 Rails 仓库。现在，我们去看一下这个提交的所有变更信息，我们运行如下的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git show db045dbbf60b53dbe013ef25554fd013baf88134</span></span></code></pre></div><p>非常好！我们终于找到它的根源了。现在，我们使用 <code>git log -S &#39;def classify&#39;</code> 的输出，结合 <code>git log -L</code> 命令来跟踪这个方法都发生了哪些变更。</p><h3 id="下次见" tabindex="-1">下次见 <a class="header-anchor" href="#下次见" aria-label="Permalink to “下次见”">​</a></h3><p>当然，我们并没有真的去修改任何 bug，因为我们只是去尝试使用一些 <code>git</code> 命令，来演示如何查看 <code>classify</code> 方法的演变历史。但是不管怎样，<code>git</code> 是一个非常强大的工具，我们必须学好它、用好它。我希望这篇文章可以帮助你掌握更多的关于如何使用 <code>git</code> 的知识。</p><p>你喜欢这些内容吗？</p><hr><p>作者简介：</p><p>后端工程师，对 Ruby、Go、微服务、构建弹性架构来解决大规模部署带来的挑战很感兴趣。我在阿姆斯特丹的 Rails Girls 担任顾问，维护着一个小而精的列表，并且经常为开源做贡献。</p><p>那个列表是我写的关于软件开发、编程语言以及任何我感兴趣的东西。</p><hr>`,28)),p("p",null,[s[15]||(s[15]=a("via: ",-1)),e(n,{href:"https://ieftimov.com/learn-your-tools-navigating-git-history"},{default:i(()=>[...s[14]||(s[14]=[a("https://ieftimov.com/learn-your-tools-navigating-git-history",-1)])]),_:1})]),p("p",null,[s[19]||(s[19]=a("作者：",-1)),e(n,{href:"https://ieftimov.com/"},{default:i(()=>[...s[16]||(s[16]=[a("Ilija Eftimov",-1)])]),_:1}),s[20]||(s[20]=a(" 译者：",-1)),e(n,{href:"https://github.com/qhwdw"},{default:i(()=>[...s[17]||(s[17]=[a("qhwdw",-1)])]),_:1}),s[21]||(s[21]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[18]||(s[18]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[24]||(s[24]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[22]||(s[22]=[a("LCTT",-1)])]),_:1}),s[25]||(s[25]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:i(()=>[...s[23]||(s[23]=[a("Linux中国",-1)])]),_:1}),s[26]||(s[26]=a(" 荣誉推出",-1))])])}const C=l(r,[["render",g]]);export{v as __pageData,C as default};
