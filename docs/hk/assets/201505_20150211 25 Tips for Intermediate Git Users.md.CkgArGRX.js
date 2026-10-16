import{_ as n,a0 as p,w as d,s,I as i,x as a,a1 as r,A as o,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"25個 Git 進階技巧 | LCTT x X-CMD","titleTemplate":false,"description":"25個 Git 進階技巧 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"25個 Git 進階技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"25個 Git 進階技巧 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150211 25 Tips for Intermediate Git Users","title":"25個 Git 進階技巧","tag":"201505","desc":""},"relativePath":"201505/20150211 25 Tips for Intermediate Git Users.md","filePath":"[post].md"}'),c={name:"201505/20150211 25 Tips for Intermediate Git Users.md"};function h(g,e,f,m,b,u){const t=p("Link");return d(),s("div",null,[e[18]||(e[18]=i("h1",{id:"_25個-git-進階技巧",tabindex:"-1"},[a("25個 Git 進階技巧 "),i("a",{class:"header-anchor",href:"#_25個-git-進階技巧","aria-label":"Permalink to “25個 Git 進階技巧”"},"​")],-1)),i("p",null,[e[2]||(e[2]=a("我已經使用git差不多18個月了，覺得自己對它應該已經非常瞭解。然後來自GitHub的",-1)),r(t,{href:"http://gitcasts.com/about"},{default:o(()=>[...e[0]||(e[0]=[a("Scott Chacon",-1)])]),_:1}),e[3]||(e[3]=a("過來給LVS做培訓（",-1)),r(t,{href:"http://www.lvs.co.uk/"},{default:o(()=>[...e[1]||(e[1]=[a("LVS是一個賭博軟件供應商和開發商",-1)])]),_:1}),e[4]||(e[4]=a("，從2013年開始的合同），而我在第一天裏就學到了很多。",-1))]),e[19]||(e[19]=l(`<p>作為一個對git感覺良好的人，我覺得分享從社區裏掌握的一些有價值的信息，也許能幫某人解決問題而不用做太深入研究。</p><h3 id="基本技巧" tabindex="-1">基本技巧 <a class="header-anchor" href="#基本技巧" aria-label="Permalink to “基本技巧”">​</a></h3><h4 id="_1-安裝後的第一步" tabindex="-1">1. 安裝後的第一步 <a class="header-anchor" href="#_1-安裝後的第一步" aria-label="Permalink to “1. 安裝後的第一步”">​</a></h4><p>在安裝好git後，你第一件該做的事是設置你的名字和電子郵箱，因為每次提交都要用到這些信息：</p><pre><code>$ git config --global user.name &quot;Some One&quot;
$ git config --global user.email &quot;someone@gmail.com&quot;
</code></pre><h4 id="_2-git是基於指針的" tabindex="-1">2. Git是基於指針的 <a class="header-anchor" href="#_2-git是基於指針的" aria-label="Permalink to “2. Git是基於指針的”">​</a></h4><p>保存在git裏的一切都是文件。當你創建一個提交的時候，會建立一個包含你的提交信息和相關數據（名字，郵件地址，日期/時間，前一個提交，等等）的文件，並把它鏈接到一個樹文件中。這個樹文件中包含了對象或其他樹的列表。這裏的提到的對象（或二進制大對象）是和本次提交相關的實際內容（它也是一個文件，另外，儘管文件名並沒有包含在對象裏，但是存儲在樹中）。所有這些文件都使用對象的SHA-1哈希值作為文件名。</p><p>用這種方式，分支和標籤就是簡單的文件（基本上是這樣），包含指向該提交的SHA-1哈希值。使用這些索引會帶來優秀的靈活性和速度，比如創建一個新分支就是簡單地用分支名字和所分出的那個提交的SHA-1索引來創建一個文件。當然，你不需要自己做這些，而只要使用Git命令列工具（或者GUI），但是實際上就是這麼簡單。</p><p>你也許聽説過叫HEAD的索引。這只是簡單的一個文件，包含了你當前指向的那個提交的SHA-1索引值。如果你正在解決一次合併衝突然後看到了HEAD，這並不是一個特別的分支或分支上的一個必需的特殊位置，只是標明你當前所在位置。</p><p>所有的分支指針都保存在.git/refs/heads裏，HEAD在.git/HEAD裏，而標籤保存在.git/refs/tags裏 - 自己可以隨便進去看看。</p><h4 id="_3-兩個爸爸-父節點-你沒看錯" tabindex="-1">3. 兩個爸爸（父節點） - 你沒看錯！ <a class="header-anchor" href="#_3-兩個爸爸-父節點-你沒看錯" aria-label="Permalink to “3. 兩個爸爸（父節點） - 你沒看錯！”">​</a></h4><p>在歷史中查看一個合併提交的信息時，你將看到有兩個父節點（不同於工作副本上的常規提交的情況）。第一個父節點是你所在的分支，第二個是你合併過來的分支。</p><h4 id="_4-合併衝突" tabindex="-1">4. 合併衝突 <a class="header-anchor" href="#_4-合併衝突" aria-label="Permalink to “4. 合併衝突”">​</a></h4><p>目前我相信你碰到過合併衝突並且解決過。通常是編輯一下文件，去掉&lt;&lt;&lt;&lt;，====，&gt;&gt;&gt;&gt;標誌，保留需要留下的代碼。有時能夠看到這兩個修改之前的代碼會很不錯，比如，在這兩個現在衝突的分支之前的改動。下面是一種方式：</p><pre><code>$ git diff --merge
diff --cc dummy.rb  
index 5175dde,0c65895..4a00477  
--- a/dummy.rb
+++ b/dummy.rb
@@@ -1,5 -1,5 +1,5 @@@
  class MyFoo
    def say
-     puts &quot;Bonjour&quot;
 -    puts &quot;Hello world&quot;
++    puts &quot;Annyong Haseyo&quot;
    end
  end
</code></pre><p>如果是二進制文件，比較差異就沒那麼簡單了...通常你要做的就是測試這個二進制文件的兩個版本來決定保留哪個（或者在二進制文件編輯器裏手工複製衝突部分）。從一個特定分支獲取文件拷貝（比如説你在合併master和feature123兩個分支）：</p><pre><code>$ git checkout master flash/foo.fla # 或者...
$ git checkout feature132 flash/foo.fla
$ # 然後...
$ git add flash/foo.fla
</code></pre><p>另一種方式是通過git輸出文件 - 你可以輸出到另外的文件名，然後當你決定了要用哪個後，再將選定的正確文件複製為正常的文件名：</p><pre><code>$ git show master:flash/foo.fla &gt; master-foo.fla
$ git show feature132:flash/foo.fla &gt; feature132-foo.fla
$ # 檢出master-foo.fla和feature132-foo.fla
$ # 假如説我們決定來自feature132的文件是正確的
$ rm flash/foo.fla
$ mv feature132-foo.fla flash/foo.fla
$ rm master-foo.fla
$ git add flash/foo.fla
</code></pre><p>更新：感謝Carl在原Blog文章上評論裏的提醒，你實際上可以用“git checkout —ours flash/foo.fla”和“git checkout —theirs flash/foo.fla”來檢出特定版本的文件，而不用記住你在合併的分支名字。就我個人來説喜歡更精確一點，但這也是一種方式...</p><p>記着在解決完衝突後要將文件加入提交（像我上面做的那樣）。</p><h3 id="服務器-分支和標籤" tabindex="-1">服務器，分支和標籤 <a class="header-anchor" href="#服務器-分支和標籤" aria-label="Permalink to “服務器，分支和標籤”">​</a></h3><h4 id="_5-遠端服務器" tabindex="-1">5. 遠端服務器 <a class="header-anchor" href="#_5-遠端服務器" aria-label="Permalink to “5. 遠端服務器”">​</a></h4><p>git的一個超強大的功能就是可以有不止一個遠端服務器（實際上你一直都在一個本地倉庫上工作）。你並不是一定都要有這些服務器的寫權限，你可以有多個可以讀取的服務器（用來合併他們的工作）然後寫入到另外一個倉庫。添加一個新的遠端服務器很簡單：</p><pre><code>$ git remote add john git@github.com:johnsomeone/someproject.git
</code></pre><p>如果你想查看遠端服務器的信息可以這樣做：</p><pre><code># 顯示每個遠端服務器的URL
$ git remote -v 

# 提供更多詳細信息
$ git remote show name 
</code></pre><p>你隨時都可以查看本地分支和遠端分支的差異：</p><pre><code>$ git diff master..john/master
</code></pre><p>你也可以查看沒有在遠端分支上的HEAD的改動：</p><pre><code>$ git log remote/branch..
# 注意：..後面沒有結束的特定引用
</code></pre><h4 id="_6-標籤" tabindex="-1">6. 標籤 <a class="header-anchor" href="#_6-標籤" aria-label="Permalink to “6. 標籤”">​</a></h4><p>在git裏有兩種類型的標籤 - 輕量級標籤和帶註釋標籤。記住技巧2裏説過git是基於指針的，這兩者之間的差異也很簡單。輕量級標籤只是一個簡單的指向一次提交的帶名字指針。你隨時都可以將它指向另一個提交。帶註釋標籤是一個指向標籤對象的帶名字指針，帶有自己的信息和歷史。因為有自己的信息，它可以根據需要用GPG簽名。</p><p>建立這兩種類型的標籤都很簡單（只有一個命令列開關的差異）</p><pre><code>$ git tag to-be-tested
$ git tag -a v1.1.0 # 會提示輸入標籤的信息
</code></pre><h4 id="_7-建立分支" tabindex="-1">7. 建立分支 <a class="header-anchor" href="#_7-建立分支" aria-label="Permalink to “7. 建立分支”">​</a></h4><p>在git裏建立分支非常簡單（而且像閃電一樣快，因為它只需要創建一個小於100字節的文件）。用普通方式建立新分支並切換過去：</p><pre><code>$ git branch feature132
$ git checkout feature132
</code></pre><p>當然，如果你確定自己直接切換到新建的分支，可以用一個命令實現：</p><pre><code>$ git checkout -b feature132
</code></pre><p>如果你想重命名一個本地分支也很簡單（可以顯示發生了什麼的較長的方式）：</p><pre><code>$ git checkout -b twitter-experiment feature132
$ git branch -d feature132
</code></pre><p>更新：你也可以（像Brian Palmer在原Blog文章的評論裏提出的）只用“git branch”的-m開關在一個命令裏實現（像Mike提出的，如果你只指定了一個分支參數，就會重命名當前分支）：</p><pre><code>$ git branch -m twitter-experiment
$ git branch -m feature132 twitter-experiment
</code></pre><h4 id="_8-合併分支" tabindex="-1">8. 合併分支 <a class="header-anchor" href="#_8-合併分支" aria-label="Permalink to “8. 合併分支”">​</a></h4><p>也許在將來的某個時候，你希望將改動合併。有兩種方式：</p><pre><code>$ git checkout master
$ git merge feature83 # 或者...
$ git rebase feature83
</code></pre><p>merge和rebase之間的差別是merge會嘗試處理改動並建立一個新的混合了兩者的提交。rebase會嘗試把你從一個分支最後一次分離後的所有改動，一個個加到該分支的HEAD上。不過，在已經將分支推到遠端服務器後不要再rebase了 - 這會引起衝突/問題。</p><p>如果你不確定在哪些分支上還有獨有的工作 - 所以你也不知道哪些分支需要合併而哪些可以刪除，git branch有兩個開關可以幫你：</p><pre><code># 顯示已經全部合併到當前分支的分支
$ git branch --merged

# 顯示沒有合併到當前分支的分支
$ git branch --no-merged
</code></pre><h4 id="_9-遠端分支" tabindex="-1">9. 遠端分支 <a class="header-anchor" href="#_9-遠端分支" aria-label="Permalink to “9. 遠端分支”">​</a></h4><p>如果你在本地有一個分支希望推到遠端服務器上，你可以用一行命令推送上去：</p><pre><code>$ git push origin twitter-experiment:refs/heads/twitter-experiment
# origin是我們服務器的名字，而twitter-experiment是分支名字
</code></pre><p>更新：感謝Erlend在原Blog文章上的評論 - 這個實際上和<code>git push origin twitter-experiment</code>效果一樣，不過使用完整的語法，你可以在兩者之間使用不同的分支名（這樣本地分支可以是<code>add-ssl-support</code>而遠端是<code>issue-1723</code>）。</p><p>如果你想在遠端服務器上刪除一個分支（注意分支名前面的冒號）：</p><pre><code>$ git push origin :twitter-experiment
</code></pre><p>如果你想查看所有遠端分支的狀態可以這樣做：</p><pre><code>$ git remote show origin
</code></pre><p>這個命令可能會列出服務器上一些以前有過但現在已經不在了的分支。如果碰到這種情況你可以用下面的命令從你本地分支裏清理掉：</p><pre><code>$ git remote prune
</code></pre><p>最後，如果你想在本地跟蹤一個遠端分支，普通的方式是：</p><pre><code>$ git branch --track myfeature origin/myfeature
$ git checkout myfeature
</code></pre><p>不過，新版的git在使用-b標記檢出分支時會自動設定跟蹤：</p><pre><code>$ git checkout -b myfeature origin/myfeature
</code></pre><h3 id="在儲藏點-索引和文件系統中保存內容" tabindex="-1">在儲藏點，索引和文件系統中保存內容 <a class="header-anchor" href="#在儲藏點-索引和文件系統中保存內容" aria-label="Permalink to “在儲藏點，索引和文件系統中保存內容”">​</a></h3><h4 id="_10-儲藏" tabindex="-1">10. 儲藏 <a class="header-anchor" href="#_10-儲藏" aria-label="Permalink to “10. 儲藏”">​</a></h4><p>在git裏你可以把當前工作狀態放進一個儲藏堆棧中，然後可以再取出來。最簡單的情形是下面這樣：</p><pre><code>$ git stash
# 做點其他事情...
$ git stash pop
</code></pre><p>許多人建議使用<code>git stash apply</code>來代替pop，不過如果這樣做的話最後會遺留一個很長的儲藏列表。而“pop”會在全部加載後自動從堆棧中移除。如果使用過<code>git stash apply</code>，你也可以使用下面的命令從堆棧上移除最後一項：</p><pre><code>$ git stash drop
</code></pre><p>git會基於當前的提交信息自動創建評論。如果你更希望有自定義信息的話（因為它可能和前一個提交沒有任何聯繫）：</p><pre><code>$ git stash save &quot;My stash message&quot;
</code></pre><p>如果你希望從列表中取出一個特定的儲藏點（不一定非得是最後一個）可以先列出它們然後用下面的方式取出：</p><pre><code>$ git stash list
  stash@{0}: On master: Changed to German
  stash@{1}: On master: Language is now Italian
$ git stash apply stash@{1}
</code></pre><h4 id="_11-交互式添加" tabindex="-1">11. 交互式添加 <a class="header-anchor" href="#_11-交互式添加" aria-label="Permalink to “11. 交互式添加”">​</a></h4><p>在subversion的世界裏你只能修改文件然後提交所有改動。而在git裏你有強大得多的方式來提交部分文件或者甚至是部分補丁。提交部分文件或文件中的部分改動你需要進入交互式模式：</p><pre><code>$ git add -i
           staged     unstaged path


*** Commands ***
  1: status      2: update   3: revert   4: add untracked
  5: patch      6: diff     7: quit     8: help
What now&gt;  
</code></pre><p>這會讓你進入一個基於菜單的交互式提示。你可以使用命令中的數字或高亮的字母（如果你在終端裏打開了高亮的話）來進入相應的模式。然後就只是輸入你希望操作的文件的數字了（你可以使用這樣的格式，1或者1-4或2,4,7）。</p><p>如果你想進入補丁模式（交互式模式下按‘p’或‘5’），你也可以直接進入：</p><pre><code>$ git add -p    
diff --git a/dummy.rb b/dummy.rb  
index 4a00477..f856fb0 100644  
--- a/dummy.rb
+++ b/dummy.rb
@@ -1,5 +1,5 @@
 class MyFoo
   def say
-    puts &quot;Annyong Haseyo&quot;
+    puts &quot;Guten Tag&quot;
   end
 end
Stage this hunk [y,n,q,a,d,/,e,?]?  
</code></pre><p>你可以看到下方會有一些選項供選擇用來添加該文件的這個改動、該文件的所有改動，等等。使用‘?’命令可以詳細解釋這些選項。</p><h4 id="_12-從文件系統裏保存-取回改動" tabindex="-1">12. 從文件系統裏保存/取回改動 <a class="header-anchor" href="#_12-從文件系統裏保存-取回改動" aria-label="Permalink to “12. 從文件系統裏保存/取回改動”">​</a></h4><p>有些項目（比如Git項目本身）在git文件系統中直接保存額外文件而並沒有將它們加入到版本控制中。</p><p>讓我們從在git中存儲一個隨機文件開始：</p><pre><code>$ echo &quot;Foo&quot; | git hash-object -w --stdin
51fc03a9bb365fae74fd2bf66517b30bf48020cb  
</code></pre><p>這樣這個目標文件就已經保存到資料庫中了，但是如果你沒有設定一個指向它的指針的話它會被當做垃圾回收。最簡單的方式是設定一個標籤：</p><pre><code>$ git tag myfile 51fc03a9bb365fae74fd2bf66517b30bf48020cb
</code></pre><p>注意這裏我們使用了標籤myfile。當我們需要使用這個文件的時候可以這樣做：</p><pre><code>$ git cat-file blob myfile
</code></pre><p>這個對於一些工具文件很有用，開發者可能會用到（密碼，GPG密鑰，等等）但是又不希望每次都檢出到硬盤（尤其是在實際工作中）。</p><h3 id="日誌以及有哪些改動" tabindex="-1">日誌以及有哪些改動？ <a class="header-anchor" href="#日誌以及有哪些改動" aria-label="Permalink to “日誌以及有哪些改動？”">​</a></h3><h4 id="_13-查看日誌" tabindex="-1">13. 查看日誌 <a class="header-anchor" href="#_13-查看日誌" aria-label="Permalink to “13. 查看日誌”">​</a></h4><p>長時間使用 Git 的話，不會沒用過‘git log’來查看最近的提交。不過，有一些技巧來更好地應用。比如，你可以使用下面的命令來查看每次提交的具體改動：</p><pre><code>$ git log -p
</code></pre><p>或者你可以僅僅查看有哪些文件改動：</p><pre><code>$ git log --stat
</code></pre><p>有個很不錯的別名你可以試試，會顯示簡短提交名和一個不錯的分支圖並在一行裏顯示提交信息（有點像gitk，但是是在命令列下）：</p><pre><code>$ git config --global alias.lol &quot;log --pretty=oneline --abbrev-commit --graph --decorate&quot;
$ git lol
* 4d2409a (master) Oops, meant that to be in Korean
* 169b845 Hello world
</code></pre><h4 id="_14-搜索日誌" tabindex="-1">14. 搜索日誌 <a class="header-anchor" href="#_14-搜索日誌" aria-label="Permalink to “14. 搜索日誌”">​</a></h4><p>如果你想找特定提交者可以這樣做：</p><pre><code>$ git log --author=Andy
</code></pre><p>更新：感謝Johannes的評論，我已經去掉了之前這裏的一些有混淆的地方。</p><p>或者你想在提交信息裏找一些相關字段：</p><pre><code>$ git log --grep=&quot;Something in the message&quot;
</code></pre><p>也有一個更強大的叫做pickaxe的命令用來查找包含了刪除或添加的某個特定內容的提交（比如，該內容第一次出現或被刪除）。這可以告訴你什麼時候增加了一行（但這一行裏的某個字符後面被改動過就不行了）：</p><pre><code>$ git log -S &quot;TODO: Check for admin status&quot;
</code></pre><p>假如你改動了一個特定的文件，比如<code>lib/foo.rb</code></p><pre><code>$ git log lib/foo.rb
</code></pre><p>比如説你有一個<code>feature/132</code>分支和<code>feature/145</code>分支，然後你想看看這兩個分支上不在master分支裏的提交（注意^符號是不在的意思）：</p><pre><code>$ git log feature/132 feature/145 ^master
</code></pre><p>你也可以使用ActiveSupport格式的日期來縮小到某個日期範圍：</p><pre><code>$ git log --since=2.months.ago --until=1.day.ago
</code></pre><p>默認情況下會用OR來組合查詢，但你可以輕易地改為AND（如果你有超過一條的查詢標準）</p><pre><code>$ git log --since=2.months.ago --until=1.day.ago --author=andy -S &quot;something&quot; --all-match
</code></pre><h4 id="_15-查看-修改版本" tabindex="-1">15. 查看/修改版本 <a class="header-anchor" href="#_15-查看-修改版本" aria-label="Permalink to “15. 查看/修改版本”">​</a></h4><p>有很多方式可以用來引用一個版本，看你記得哪個：</p><pre><code>$ git show 12a86bc38 # 根據版本
$ git show v1.0.1 # 根據標籤
$ git show feature132 # 根據分支名
$ git show 12a86bc38^ # 一次提交的父節點
$ git show 12a86bc38~2 # 一次提交的祖父節點
$ git show feature132@{yesterday} # 時間相關
$ git show feature132@{2.hours.ago} # 時間相關
</code></pre><p>注意和之前部分有些不同，末尾的^的意思是該提交的父節點 - 開始位置的^的意思是不在這個分支。</p><h4 id="_16-選擇範圍" tabindex="-1">16. 選擇範圍 <a class="header-anchor" href="#_16-選擇範圍" aria-label="Permalink to “16. 選擇範圍”">​</a></h4><p>最簡單的方式：</p><pre><code>$ git log origin/master..new
# [old]..[new] - 所有你還沒有推送的提交
</code></pre><p>你也可以省略[new]，將使用當前的HEAD。</p><h3 id="時光回溯和後悔藥" tabindex="-1">時光回溯和後悔藥 <a class="header-anchor" href="#時光回溯和後悔藥" aria-label="Permalink to “時光回溯和後悔藥”">​</a></h3><h4 id="_17-重置改動" tabindex="-1">17. 重置改動 <a class="header-anchor" href="#_17-重置改動" aria-label="Permalink to “17. 重置改動”">​</a></h4><p>如果你還沒有提交的話可以用下面的命令輕鬆地取消改動：</p><pre><code>$ git reset HEAD lib/foo.rb
</code></pre><p>通常會使用‘unstage’的別名，因為上面的看上去有些不直觀。</p><pre><code>$ git config --global alias.unstage &quot;reset HEAD&quot;
$ git unstage lib/foo.rb
</code></pre><p>如果你已經提交了該文件，你可以做兩件事 - 如果是最後一次提交你還可以改正：</p><pre><code>$ git commit --amend
</code></pre><p>這會取消最後一次提交，把工作分支回退到提交前標記了所有改動的狀態，而且提交信息也都準備好可以修改或直接提交。</p><p>如果你已經提交過多次而且希望全部回退，你可以將分支重置到合適的位置。</p><pre><code>$ git checkout feature132
$ git reset --hard HEAD~2
</code></pre><p>如果你實際上希望將分支指向一個完全不同的SHA1（也許你要將一個分支的HEAD替換到另一個分支，或者之後的某次提交）你可以使用下面的較長的方式：</p><pre><code>$ git checkout FOO
$ git reset --hard SHA
</code></pre><p>實際上有一個快速的方式（不需要先把你的工作分支切換到FOO再前進到SHA）：</p><pre><code>$ git update-ref refs/heads/FOO SHA
</code></pre><h4 id="_18-提交到了錯誤的分支" tabindex="-1">18. 提交到了錯誤的分支 <a class="header-anchor" href="#_18-提交到了錯誤的分支" aria-label="Permalink to “18. 提交到了錯誤的分支”">​</a></h4><p>好吧，假如説你已經提交到了master，但卻應該創建一個叫experimental的主題分支更合適。要移動這些改動，你可以在當前位置創建分支，回退HEAD再檢出新分支：</p><pre><code>$ git branch experimental   # 創建一個指向當前master的位置的指針
$ git reset --hard master~3 # 移動master分支的指針到3個版本之前
$ git checkout experimental
</code></pre><p>如果你的改動是在分支的分支的分支上會更復雜。那樣你需要做的是將分支基礎切換到其他地方：</p><pre><code>$ git branch newtopic STARTPOINT
$ git rebase oldtopic --onto newtopic
</code></pre><h4 id="_19-交互式切換基礎" tabindex="-1">19. 交互式切換基礎 <a class="header-anchor" href="#_19-交互式切換基礎" aria-label="Permalink to “19. 交互式切換基礎”">​</a></h4><p>這是一個我之前看過展示卻沒真正理解過的很讚的功能，現在覺得它就很簡單了。假如説你提交了3次但是你希望更改順序或編輯（或者合併）：</p><pre><code>$ git rebase -i master~3
</code></pre><p>然後這會啓動你的編輯器並帶有一些指令。你所要做的就是修改這些指令來選擇/插入/編輯（或者刪除）提交和保存/退出。然後在編輯完後你可以用<code>git rebase --continue</code>命令來讓每一條指令生效。</p><p>如果你有修改，將會切換到你提交時所處的狀態，之後你需要使用命令git commit --amend來編輯。</p><p><strong>注意：在rebase的時候千萬不要提交 - 只能先添加然後使用參數--continue，--skip或--abort。</strong></p><h4 id="_20-清理" tabindex="-1">20. 清理 <a class="header-anchor" href="#_20-清理" aria-label="Permalink to “20. 清理”">​</a></h4><p>如果你提交了一些內容到你的分支（也許你從SVN導入了一些舊倉庫），然後你希望把某個文件從歷史記錄中全部刪掉：</p><pre><code>$ git filter-branch --tree-filter &#39;rm -f *.class&#39; HEAD
</code></pre><p>如果你已經推送到origin了，但之後提交了一些垃圾改動，你也可以在推送前在本地系統裏這樣做：</p><pre><code>$ git filter-branch --tree-filter &#39;rm -f *.class&#39; origin/master..HEAD
</code></pre><h3 id="其他技巧" tabindex="-1">其他技巧 <a class="header-anchor" href="#其他技巧" aria-label="Permalink to “其他技巧”">​</a></h3><h4 id="_21-你查看過的前一個引用" tabindex="-1">21. 你查看過的前一個引用 <a class="header-anchor" href="#_21-你查看過的前一個引用" aria-label="Permalink to “21. 你查看過的前一個引用”">​</a></h4><p>如果你知道自己之前查看過一個SHA-1，但是隨後做了一些重置/回退的操作，你可以使用reflog命令來列出最近查看過的SHA-1記錄：</p><pre><code>$ git reflog
$ git log -g # 和上面一樣，但是使用&#39;log&#39;格式輸出
</code></pre><h4 id="_22-分支命名" tabindex="-1">22. 分支命名 <a class="header-anchor" href="#_22-分支命名" aria-label="Permalink to “22. 分支命名”">​</a></h4><p>一個可愛的小技巧 - 別忘了分支名並不限於a-z和0-9。名字中可以用/和.將非常方便用來建立偽命名空間或版本，例如：</p><pre><code>$ # 生成版本132的改動歷史
$ git shortlog release/132 ^release/131
$ # 貼上v1.0.1的標籤
$ git tag v1.0.1 release/132
</code></pre><h4 id="_23-找出誰是兇手" tabindex="-1">23. 找出誰是兇手 <a class="header-anchor" href="#_23-找出誰是兇手" aria-label="Permalink to “23. 找出誰是兇手”">​</a></h4><p>通常找出來誰改動了某個文件裏的某行代碼會很有用。實現這個功能的最簡單命令是：</p><pre><code>$ git blame FILE
</code></pre><p>有時候這些改動來自其他文件（如果你合併了兩個文件，或者你移動了某個函數）所以你可以使用下面的命令：</p><pre><code>$ # 顯示內容來自哪個文件
$ git blame -C FILE
</code></pre><p>有時候通過點擊各個改動然後回到很早很早以前來跟蹤改動會很不錯。有一個很好的內建GUI命令來做這個：</p><pre><code>$ git gui blame FILE
</code></pre><h4 id="_24-數據維護" tabindex="-1">24. 數據維護 <a class="header-anchor" href="#_24-數據維護" aria-label="Permalink to “24. 數據維護”">​</a></h4><p>通常git不需要經常維護，它把自己照顧的很好。不過，你可以通過下面的命令查看數據統計：</p><pre><code>$ git count-objects -v
</code></pre><p>如果佔用很多空間的話，你可以選擇在你的本地倉庫做垃圾回收。這不會影響推送或其他人，卻會讓一些命令運行更快而且減少空間佔用：</p><pre><code>$ git gc
</code></pre><p>經常運行完整性檢查也很有意義：</p><pre><code>$ git fsck --full
</code></pre><p>你也可以在末尾加上<code>--auto</code>參數（如果你在服務器上通過crontab經常/每天都運行這個命令的話），然後它只會在必要的時候才執行fsck動作。</p><p>在檢查的時候，看到“dangling”或“unreachable”是正常的，通常這是由回退HEAD或切換基礎的結果。而看到“missing”或“sha1 mismatch”就不對了...找專業人士幫忙吧！</p><h4 id="_25-恢復遺失的分支" tabindex="-1">25. 恢復遺失的分支 <a class="header-anchor" href="#_25-恢復遺失的分支" aria-label="Permalink to “25. 恢復遺失的分支”">​</a></h4><p>如果你使用-D參數刪除了experimental分支，可以用下面的命令重新建立：</p><pre><code>$ git branch experimental SHA1_OF_HASH
</code></pre><p>如果你最近訪問過的話，你通常可以用git reflog來找到SHA1哈希值。</p><p>另一種方式是使用<code>git fsck —lost-found</code>。其中一個dangling的提交就是丟失的HEAD（它只是已刪除分支的HEAD，而HEAD^被引用為當前的HEAD所以它並不處於dangling狀態）</p><h3 id="搞定" tabindex="-1">搞定！ <a class="header-anchor" href="#搞定" aria-label="Permalink to “搞定！”">​</a></h3><p>哇，這是我寫過的最長的一篇Blog，我希望有人能覺得有用。如果你這麼覺得，或者你有任何疑問請在評論裏留言讓我知道...</p><hr>`,184)),i("p",null,[e[6]||(e[6]=a("via: ",-1)),r(t,{href:"https://www.andyjeffries.co.uk/25-tips-for-intermediate-git-users/"},{default:o(()=>[...e[5]||(e[5]=[a("https://www.andyjeffries.co.uk/25-tips-for-intermediate-git-users/",-1)])]),_:1})]),i("p",null,[e[10]||(e[10]=a("作者：",-1)),r(t,{href:"https://www.andyjeffries.co.uk/author/andy-jeffries/"},{default:o(()=>[...e[7]||(e[7]=[a("Andy Jeffries",-1)])]),_:1}),e[11]||(e[11]=a(" 譯者：",-1)),r(t,{href:"https://github.com/zpl1025"},{default:o(()=>[...e[8]||(e[8]=[a("zpl1025",-1)])]),_:1}),e[12]||(e[12]=a(" 校對：",-1)),r(t,{href:"https://github.com/wxy"},{default:o(()=>[...e[9]||(e[9]=[a("wxy",-1)])]),_:1})]),i("p",null,[e[15]||(e[15]=a("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[13]||(e[13]=[a("LCTT",-1)])]),_:1}),e[16]||(e[16]=a(" 原創翻譯，",-1)),r(t,{href:"http://linux.cn/"},{default:o(()=>[...e[14]||(e[14]=[a("Linux中國",-1)])]),_:1}),e[17]||(e[17]=a(" 榮譽推出",-1))])])}const _=n(c,[["render",h]]);export{x as __pageData,_ as default};
