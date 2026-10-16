import{_ as l,a0 as o,w as c,s as d,ao as t,I as p,x as a,a1 as e,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"學習用工具來駕馭 Git 歷史 | LCTT x X-CMD","titleTemplate":false,"description":"學習用工具來駕馭 Git 歷史 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"學習用工具來駕馭 Git 歷史 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"學習用工具來駕馭 Git 歷史 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20160606 Learn your tools Navigating your Git History","title":"學習用工具來駕馭 Git 歷史","tag":"201802","desc":""},"relativePath":"201802/20160606 Learn your tools Navigating your Git History.md","filePath":"[post].md"}'),r={name:"201802/20160606 Learn your tools Navigating your Git History.md"};function g(b,s,h,u,f,m){const n=o("Link");return c(),d("div",null,[s[27]||(s[27]=t(`<h1 id="學習用工具來駕馭-git-歷史" tabindex="-1">學習用工具來駕馭 Git 歷史 <a class="header-anchor" href="#學習用工具來駕馭-git-歷史" aria-label="Permalink to “學習用工具來駕馭 Git 歷史”">​</a></h1><p>在你的日常工作中，不可能每天都從頭開始去開發一個新的應用程序。而真實的情況是，在日常工作中，我們大多數時候所面對的都是遺留下來的一個代碼庫，去修改一些特性的內容或者現存的一些代碼行，這是我們在日常工作中很重要的一部分。而這也就是分佈式版本控制系統 <code>git</code> 的價值所在。現在，我們來深入瞭解怎麼去使用 <code>git</code> 的歷史以及如何很輕鬆地去瀏覽它的歷史。</p><h3 id="git-歷史" tabindex="-1">Git 歷史 <a class="header-anchor" href="#git-歷史" aria-label="Permalink to “Git 歷史”">​</a></h3><p>首先和最重要的事是，什麼是 <code>git</code> 歷史？正如其名字一樣，它是一個 <code>git</code> 倉庫的提交歷史。它包含一堆提交信息，其中有它們的作者的名字、該提交的哈希值以及提交日期。查看一個 <code>git</code> 倉庫歷史的方法很簡單，就是一個 <code>git log</code> 命令。</p><blockquote><p><em>旁註：為便於本文的演示，我們使用 Ruby on Rails 的倉庫的 <code>master</code> 分支。之所以選擇它的理由是因為，Rails 有良好的 <code>git</code> 歷史，漂亮的提交信息、引用以及對每個變更的解釋。如果考慮到代碼庫的大小、維護者的年齡和數量，Rails 肯定是我見過的最好的倉庫。當然了，我並不是説其它的 <code>git</code> 倉庫做的不好，它只是我見過的比較好的一個倉庫。</em></p></blockquote><p>那麼，回到 Rails 倉庫。如果你在 Ralis 倉庫上運行 <code>git log</code>。你將看到如下所示的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>commit 66ebbc4952f6cfb37d719f63036441ef98149418</span></span>
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
<span class="line"><span>	[skip ci] Make header bullets consistent in engines.md</span></span></code></pre></div><p>正如你所見，<code>git log</code> 展示了提交的哈希、作者及其 email 以及該提交創建的日期。當然，<code>git</code> 輸出的可定製性很強大，它允許你去定製 <code>git log</code> 命令的輸出格式。比如説，我們只想看提交信息的第一行，我們可以運行 <code>git log --oneline</code>，它將輸出一個更緊湊的日誌：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>66ebbc4 Dont re-define class SQLite3Adapter on test</span></span>
<span class="line"><span>755f6bf Merge pull request #25263 from abhishekjain16/doc_accessor_thread</span></span>
<span class="line"><span>f7b850e [skip ci] Fix grammar4e85538 Merge branch &#39;master&#39; of github.com:rails/docrails</span></span>
<span class="line"><span>082a515 Merge pull request #25243 from sukesan1984/add_i18n_validation_test</span></span>
<span class="line"><span>4bd11d4 Merge pull request #25258 from alexcameron89/master</span></span>
<span class="line"><span>e98caf8 [skip ci] Make header bullets consistent in engines.md</span></span>
<span class="line"><span>99d8d45 Merge pull request #25254 from kamipo/fix_debug_helper_test</span></span>
<span class="line"><span>818397c Merge pull request #25240 from matthewd/reloadable-channels</span></span>
<span class="line"><span>2c5a8ba Don&#39;t blank pad day of the month when formatting dates</span></span>
<span class="line"><span>14ff8e7 Fix debug helper test</span></span></code></pre></div><p>如果你想看 <code>git log</code> 的全部選項，我建議你去查閲 <code>git log</code> 的 man 頁面，你可以在一個終端中輸入 <code>man git-log</code> 或者 <code>git help log</code> 來獲得。</p>`,10)),p("blockquote",null,[p("p",null,[p("em",null,[s[2]||(s[2]=a("小提示：如果你覺得 ",-1)),s[3]||(s[3]=p("code",null,"git log",-1)),s[4]||(s[4]=a(" 看起來太恐怖或者過於複雜，或者你覺得看它太無聊了，我建議你去尋找一些 ",-1)),s[5]||(s[5]=p("code",null,"git",-1)),s[6]||(s[6]=a(" 的 GUI 或命令列工具。在之前，我使用過 ",-1)),e(n,{href:"http://gitx.frim.nl/"},{default:i(()=>[...s[0]||(s[0]=[a("GitX",-1)])]),_:1}),s[7]||(s[7]=a(" ，我覺得它很不錯，但是，由於我看命令列更“親切”一些，在我嘗試了 ",-1)),e(n,{href:"https://github.com/jonas/tig"},{default:i(()=>[...s[1]||(s[1]=[a("tig",-1)])]),_:1}),s[8]||(s[8]=a(" 之後，就再也沒有去用過它。",-1))])])]),s[28]||(s[28]=t(`<h3 id="尋找尼莫" tabindex="-1">尋找尼莫 <a class="header-anchor" href="#尋找尼莫" aria-label="Permalink to “尋找尼莫”">​</a></h3><p>現在，我們已經知道了關於 <code>git log</code> 命令的一些很基礎的知識之後，我們來看一下，在我們的日常工作中如何使用它更加高效地瀏覽歷史。</p><p>假如，我們懷疑在 <code>String#classify</code> 方法中有一個預期之外的行為，我們希望能夠找出原因，並且定位出實現它的代碼行。</p><p>為達到上述目的，你可以使用的第一個命令是 <code>git grep</code>，通過它可以找到這個方法定義在什麼地方。簡單來説，這個命令輸出了匹配特定模式的那些行。現在，我們來找出定義它的方法，它非常簡單 —— 我們對  <code>def classify</code> 運行 grep，然後看到的輸出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>➜  git grep &#39;def classify&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>activesupport/lib/active_support/core_ext/string/inflections.rb:	def classifyactivesupport/lib/active_support/inflector/methods.rb:    def classify(table_name)tools/profile:    def classify</span></span></code></pre></div><p>現在，雖然我們已經看到這個方法是在哪裏創建的，但是，並不能夠確定它是哪一行。如果，我們在 <code>git grep</code> 命令上增加 <code>-n</code> 標誌，<code>git</code> 將提供匹配的行號：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>➜  git grep -n &#39;def classify&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>activesupport/lib/active_support/core_ext/string/inflections.rb:205:  def classifyactivesupport/lib/active_support/inflector/methods.rb:186:    def classify(table_name)tools/profile:112:    def classify</span></span></code></pre></div><p>更好看了，是吧？考慮到上下文，我們可以很輕鬆地找到，這個方法在 <code>activesupport/lib/active_support/core_ext/string/inflections.rb</code> 的第 205 行的 <code>classify</code> 方法，它看起來像這樣，是不是很容易？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Creates a class name from a plural table name like Rails does for table names to models.</span></span>
<span class="line"><span># Note that this returns a string and not a class. (To convert to an actual class</span></span>
<span class="line"><span># follow +classify+ with +constantize+.)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#	&#39;ham_and_eggs&#39;.classify # =&gt; &quot;HamAndEgg&quot;</span></span>
<span class="line"><span>#   &#39;posts&#39;.classify        # =&gt; &quot;Post&quot;</span></span>
<span class="line"><span>	def classify</span></span>
<span class="line"><span>		ActiveSupport::Inflector.classify(self)</span></span>
<span class="line"><span>	end</span></span></code></pre></div><p>儘管我們找到的這個方法是在 <code>String</code> 上的一個常見的調用，它調用了 <code>ActiveSupport::Inflector</code> 上的另一個同名的方法。根據之前的 <code>git grep</code> 的結果，我們可以很輕鬆地發現結果的第二行， <code>activesupport/lib/active_support/inflector/methods.rb</code> 在 186 行上。我們正在尋找的方法是這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Creates a class name from a plural table name like Rails does for table</span></span>
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
<span class="line"><span>end</span></span></code></pre></div><p>酷！考慮到 Rails 倉庫的大小，我們藉助 <code>git grep</code> 找到它，用時都沒有超越 30 秒。</p><h3 id="那麼-最後的變更是什麼" tabindex="-1">那麼，最後的變更是什麼？ <a class="header-anchor" href="#那麼-最後的變更是什麼" aria-label="Permalink to “那麼，最後的變更是什麼？”">​</a></h3><p>現在，我們已經找到了所要找的方法，現在，我們需要搞清楚這個文件所經歷的變更。由於我們已經知道了正確的文件名和行數，我們可以使用 <code>git blame</code>。這個命令展示了一個文件中每一行的最後修訂者和修訂的內容。我們來看一下這個文件最後的修訂都做了什麼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git blame activesupport/lib/active_support/inflector/methods.rb</span></span></code></pre></div><p>雖然我們得到了這個文件每一行的最後的變更，但是，我們更感興趣的是對特定方法（176 到 189 行）的最後變更。讓我們在 <code>git blame</code> 命令上增加一個選項，讓它只顯示那些行的變化。此外，我們將在命令上增加一個 <code>-s</code> （忽略）選項，去跳過那一行變更時的作者名字和修訂（提交）的時間戳：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git blame -L 176,189 -s activesupport/lib/active_support/inflector/methods.rb</span></span>
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
<span class="line"><span>51cd6bb8 189)     end</span></span></code></pre></div><p>現在，<code>git blame</code> 命令的輸出展示了指定行的全部內容以及它們各自的修訂。讓我們來看一下指定的修訂，換句話説就是，每個變更都修訂了什麼，我們可以使用 <code>git show</code> 命令。當指定一個修訂哈希（像 <code>66d6e7be</code>）作為一個參數時，它將展示這個修訂的全部內容。包括作者名字、時間戳以及完整的修訂內容。我們來看一下 188 行最後的修訂都做了什麼？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git show 5bb1d4d2</span></span></code></pre></div>`,19)),p("p",null,[s[11]||(s[11]=a("你親自做實驗了嗎？如果沒有做，我直接告訴你結果，這個令人驚歎的 ",-1)),e(n,{href:"https://github.com/rails/rails/commit/5bb1d4d288d019e276335465d0389fd2f5246bfd"},{default:i(()=>[...s[9]||(s[9]=[a("提交",-1)])]),_:1}),s[12]||(s[12]=a(" 是由 ",-1)),e(n,{href:"https://twitter.com/schneems"},{default:i(()=>[...s[10]||(s[10]=[a("Schneems",-1)])]),_:1}),s[13]||(s[13]=a(" 完成的，他通過使用 frozen 字符串做了一個非常有趣的性能優化，這在我們當前的場景中是非常有意義的。但是，由於我們在這個假設的調試會話中，這樣做並不能告訴我們當前問題所在。因此，我們怎麼樣才能夠通過研究來發現，我們選定的方法經過了哪些變更？",-1))]),s[29]||(s[29]=t(`<h3 id="搜索日誌" tabindex="-1">搜索日誌 <a class="header-anchor" href="#搜索日誌" aria-label="Permalink to “搜索日誌”">​</a></h3><p>現在，我們回到 <code>git</code> 日誌，現在的問題是，怎麼能夠看到 <code>classify</code> 方法經歷了哪些修訂？</p><p><code>git log</code> 命令非常強大，因此它提供了非常多的列表選項。我們嘗試使用 <code>-p</code> 選項去看一下保存了這個文件的 <code>git</code> 日誌內容，這個選項的意思是在 <code>git</code> 日誌中顯示這個文件的完整補丁:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git log -p activesupport/lib/active_support/inflector/methods.rb</span></span></code></pre></div><p>這將給我們展示一個很長的修訂列表，顯示了對這個文件的每個修訂。但是，正如下面所顯示的，我們感興趣的是對指定行的修訂。對命令做一個小的修改，只顯示我們希望的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git log -L 176,189:activesupport/lib/active_support/inflector/methods.rb</span></span></code></pre></div><p><code>git log</code> 命令接受 <code>-L</code> 選項，它用一個行的範圍和文件名做為參數。它的格式可能有點奇怪，格式解釋如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git log -L &lt;start-line&gt;,&lt;end-line&gt;:&lt;path-to-file&gt;</span></span></code></pre></div><p>當我們運行這個命令之後，我們可以看到對這些行的一個修訂列表，它將帶我們找到創建這個方法的第一個修訂：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>commit 51xd6bb829c418c5fbf75de1dfbb177233b1b154</span></span>
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
<span class="line"><span>+    end</span></span></code></pre></div><p>現在，我們再來看一下 —— 它是在 2011 年提交的。<code>git</code> 可以讓我們重回到這個時間。這是一個很好的例子，它充分説明了足夠的提交信息對於重新瞭解當時的上下文環境是多麼的重要，因為從這個提交信息中，我們並不能獲得足夠的信息來重新理解當時的創建這個方法的上下文環境，但是，話説回來，你<strong>不應該</strong>對此感到惱怒，因為，你看到的這些項目，它們的作者都是無償提供他們的工作時間和精力來做開源工作的。（向開源項目貢獻者致敬！）</p><p>回到我們的正題，我們並不能確認 <code>classify</code> 方法最初實現是怎麼回事，考慮到這個第一次的提交只是一個重構。現在，如果你認為，“或許、有可能、這個方法不在 176 行到 189 行的範圍之內，那麼就你應該在這個文件中擴大搜索範圍”，這樣想是對的。我們看到在它的修訂提交的信息中提到了“重構”這個詞，它意味着這個方法可能在那個文件中是真實存在的，而且是在重構之後它才存在於那個行的範圍內。</p><p>但是，我們如何去確認這一點呢？不管你信不信，<code>git</code> 可以再次幫助你。<code>git log</code> 命令有一個 <code>-S</code> 選項，它可以傳遞一個特定的字符串作為參數，然後去查找代碼變更（添加或者刪除）。也就是説，如果我們執行 <code>git log -S classify</code> 這樣的命令，我們可以看到所有包含 <code>classify</code> 字符串的變更行的提交。</p><p>如果你在 Ralis 倉庫上運行上述命令，首先你會發現這個命令運行有點慢。但是，你應該會發現 <code>git</code> 實際上解析了在那個倉庫中的所有修訂來匹配這個字符串，其實它的運行速度是非常快的。在你的指尖下 <code>git</code> 再次展示了它的強大之處。因此，如果去找關於 <code>classify</code> 方法的第一個修訂，我們可以運行如下的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git log -S &#39;def classify&#39;</span></span></code></pre></div><p>它將返回所有這個方法的引用和修改的地方。如果你一直往下看，你將看到日誌中它的最後的提交：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>commit db045dbbf60b53dbe013ef25554fd013baf88134</span></span>
<span class="line"><span>Author: David Heinemeier Hansson &lt;foo@bar.com&gt;</span></span>
<span class="line"><span>Date:   Wed Nov 24 01:04:44 2004 +0000</span></span>
<span class="line"><span>	Initial</span></span>
<span class="line"><span>    git-svn-id: http://svn-commit.rubyonrails.org/rails/trunk@4 5ecf4fe2-1ee6-0310-87b1-e25e094e27de</span></span></code></pre></div><p>很酷！是吧？它初次被提交到 Rails，是由 DHH 在一個 <code>svn</code> 倉庫上做的！這意味着 <code>classify</code> 大概在一開始就被提交到了 Rails 倉庫。現在，我們去看一下這個提交的所有變更信息，我們運行如下的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git show db045dbbf60b53dbe013ef25554fd013baf88134</span></span></code></pre></div><p>非常好！我們終於找到它的根源了。現在，我們使用 <code>git log -S &#39;def classify&#39;</code> 的輸出，結合 <code>git log -L</code> 命令來跟蹤這個方法都發生了哪些變更。</p><h3 id="下次見" tabindex="-1">下次見 <a class="header-anchor" href="#下次見" aria-label="Permalink to “下次見”">​</a></h3><p>當然，我們並沒有真的去修改任何 bug，因為我們只是去嘗試使用一些 <code>git</code> 命令，來演示如何查看 <code>classify</code> 方法的演變歷史。但是不管怎樣，<code>git</code> 是一個非常強大的工具，我們必須學好它、用好它。我希望這篇文章可以幫助你掌握更多的關於如何使用 <code>git</code> 的知識。</p><p>你喜歡這些內容嗎？</p><hr><p>作者簡介：</p><p>後端工程師，對 Ruby、Go、微服務、構建彈性架構來解決大規模部署帶來的挑戰很感興趣。我在阿姆斯特丹的 Rails Girls 擔任顧問，維護着一個小而精的列表，並且經常為開源做貢獻。</p><p>那個列表是我寫的關於軟件開發、編程語言以及任何我感興趣的東西。</p><hr>`,28)),p("p",null,[s[15]||(s[15]=a("via: ",-1)),e(n,{href:"https://ieftimov.com/learn-your-tools-navigating-git-history"},{default:i(()=>[...s[14]||(s[14]=[a("https://ieftimov.com/learn-your-tools-navigating-git-history",-1)])]),_:1})]),p("p",null,[s[19]||(s[19]=a("作者：",-1)),e(n,{href:"https://ieftimov.com/"},{default:i(()=>[...s[16]||(s[16]=[a("Ilija Eftimov",-1)])]),_:1}),s[20]||(s[20]=a(" 譯者：",-1)),e(n,{href:"https://github.com/qhwdw"},{default:i(()=>[...s[17]||(s[17]=[a("qhwdw",-1)])]),_:1}),s[21]||(s[21]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[18]||(s[18]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[24]||(s[24]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[22]||(s[22]=[a("LCTT",-1)])]),_:1}),s[25]||(s[25]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:i(()=>[...s[23]||(s[23]=[a("Linux中國",-1)])]),_:1}),s[26]||(s[26]=a(" 榮譽推出",-1))])])}const C=l(r,[["render",g]]);export{v as __pageData,C as default};
