import{_ as i,a0 as o,w as g,s as c,ao as p,I as l,x as a,a1 as t,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"編寫你的第一行 HTML 代碼，來幫助蝙蝠俠寫一封情書 | LCTT x X-CMD","titleTemplate":false,"description":"編寫你的第一行 HTML 代碼，來幫助蝙蝠俠寫一封情書 | LCTT (201812) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"編寫你的第一行 HTML 代碼，來幫助蝙蝠俠寫一封情書 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"編寫你的第一行 HTML 代碼，來幫助蝙蝠俠寫一封情書 | LCTT (201812) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201812/20180131 For your first HTML code lets help Batman write a love letter","title":"編寫你的第一行 HTML 代碼，來幫助蝙蝠俠寫一封情書","tag":"201812","desc":""},"relativePath":"201812/20180131 For your first HTML code lets help Batman write a love letter.md","filePath":"[post].md"}'),h={name:"201812/20180131 For your first HTML code lets help Batman write a love letter.md"};function d(r,s,u,m,k,y){const n=o("Link");return g(),c("div",null,[s[19]||(s[19]=p('<h1 id="編寫你的第一行-html-代碼-來幫助蝙蝠俠寫一封情書" tabindex="-1">編寫你的第一行 HTML 代碼，來幫助蝙蝠俠寫一封情書 <a class="header-anchor" href="#編寫你的第一行-html-代碼-來幫助蝙蝠俠寫一封情書" aria-label="Permalink to “編寫你的第一行 HTML 代碼，來幫助蝙蝠俠寫一封情書”">​</a></h1><p><img src="https://cdn-images-1.medium.com/max/1000/1*kZxbQJTdb4jn_frfqpRg9g.jpeg" alt=""></p><p>在一個美好的夜晚，你的肚子拒絕消化你在晚餐吃的大塊披薩，所以你不得不在睡夢中衝進洗手間。</p><p>在浴室裏，當你在思考為什麼會發生這種情況時，你聽到一個來自通風口的低沉聲音：“嘿，我是蝙蝠俠。”</p><p>這時，你會怎麼做呢？</p><p>在你恐慌並處於關鍵時刻之前，蝙蝠俠説：“我需要你的幫助。我是一個超級極客，但我不懂 HTML。我需要用 HTML 寫一封情書，你願意幫助我嗎？”</p><p>誰會拒絕蝙蝠俠的請求呢，對吧？所以讓我們用 HTML 來寫一封蝙蝠俠的情書。</p><h3 id="你的第一個-html-文件" tabindex="-1">你的第一個 HTML 文件 <a class="header-anchor" href="#你的第一個-html-文件" aria-label="Permalink to “你的第一個 HTML 文件”">​</a></h3><p>HTML 網頁與你電腦上的其它文件一樣。就同一個 .doc 文件以 MS Word 打開，.jpg 文件在圖像查看器中打開一樣，一個 .html 文件在瀏覽器中打開。</p>',9)),l("p",null,[s[1]||(s[1]=a("那麼，讓我們來創建一個 .html 文件。你可以在 Notepad 或其它任何編輯器中完成此任務，但我建議使用 VS Code。",-1)),t(n,{href:"https://code.visualstudio.com/"},{default:e(()=>[...s[0]||(s[0]=[a("在這裏下載並安裝 VS Code",-1)])]),_:1}),s[2]||(s[2]=a("。它是免費的，也是我唯一喜歡的微軟產品。",-1))]),s[20]||(s[20]=p(`<p>在系統中創建一個目錄，將其命名為 “HTML Practice”（不帶引號）。在這個目錄中，再創建一個名為 “Batman&#39;s Love Letter”（不帶引號）的目錄，這將是我們的項目根目錄。這意味着我們所有與這個項目相關的文件都會在這裏。</p><p>打開 VS Code，按下 <code>ctrl+n</code> 創建一個新文件，按下 <code>ctrl+s</code> 保存文件。切換到 “Batman&#39;s Love Letter” 文件夾並將其命名為 “loveletter.html”，然後單擊保存。</p><p>現在，如果你在文件資源管理器中雙擊它，它將在你的默認瀏覽器中打開。我建議使用 Firefox 來進行 web 開發，但 Chrome 也可以。</p><p>讓我們將這個過程與我們已經熟悉的東西聯繫起來。還記得你第一次拿到電腦嗎？我做的第一件事是打開 MS Paint 並繪製一些東西。你在 Paint 中繪製一些東西並將其另存為圖像，然後你可以在圖像查看器中查看該圖像。之後，如果要再次編輯該圖像，你在 Paint 中重新打開它，編輯並保存它。</p><p>我們目前的流程非常相似。正如我們使用 Paint 創建和編輯圖像一樣，我們使用 VS Code 來創建和編輯 HTML 文件。就像我們使用圖像查看器查看圖像一樣，我們使用瀏覽器來查看我們的 HTML 頁面。</p><h3 id="html-中的段落" tabindex="-1">HTML 中的段落 <a class="header-anchor" href="#html-中的段落" aria-label="Permalink to “HTML 中的段落”">​</a></h3><p>我們有一個空的 HTML 文件，以下是蝙蝠俠想在他的情書中寫的第一段。</p><p>“After all the battles we fought together, after all the difficult times we saw together, and after all the good and bad moments we’ve been through, I think it’s time I let you know how I feel about you.”</p><p>複製這些到 VS Code 中的 loveletter.html。單擊 “View -&gt; Toggle Word Wrap (alt+z)” 自動換行。</p><p>保存並在瀏覽器中打開它。如果它已經打開，單擊瀏覽器中的刷新按鈕。</p><p>瞧！那是你的第一個網頁！</p><p>我們的第一段已準備就緒，但這不是在 HTML 中編寫段落的推薦方法。我們有一種特定的方法讓瀏覽器知道一個文本是一個段落。</p><p>如果你用 <code>&lt;p&gt;</code> 和 <code>&lt;/p&gt;</code> 來包裹文本，那麼瀏覽器將識別 <code>&lt;p&gt;</code> 和 <code>&lt;/p&gt;</code> 中的文本是一個段落。我們這樣做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p&gt;After all the battles we fought together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.&lt;/p&gt;</span></span></code></pre></div><p>通過在 <code>&lt;p&gt;</code> 和 <code>&lt;/p&gt;</code>中編寫段落，你創建了一個 HTML 元素。一個網頁就是 HTML 元素的集合。</p><p>讓我們首先來認識一些術語：<code>&lt;p&gt;</code> 是開始標籤，<code>&lt;/p&gt;</code> 是結束標籤，“p” 是標籤名稱。元素開始和結束標籤之間的文本是元素的內容。</p><h3 id="style-屬性" tabindex="-1">“style” 屬性 <a class="header-anchor" href="#style-屬性" aria-label="Permalink to ““style” 屬性”">​</a></h3><p>在上面，你將看到文本覆蓋屏幕的整個寬度。</p><p>我們不希望這樣。沒有人想要閲讀這麼長的行。讓我們設定段落寬度為 550px。</p><p>我們可以通過使用元素的 <code>style</code> 屬性來實現。你可以在其 <code>style</code> 屬性中定義元素的樣式（例如，在我們的示例中為寬度）。以下行將在 <code>p</code> 元素上創建一個空樣式屬性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p style=&quot;&quot;&gt;...&lt;/p&gt;</span></span></code></pre></div><p>你看到那個空的 <code>&quot;&quot;</code> 了嗎？這就是我們定義元素外觀的地方。現在我們要將寬度設置為 550px。我們這樣做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>    After all the battles we fought together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>&lt;/p&gt;</span></span></code></pre></div><p>我們將 <code>width</code> 屬性設置為 <code>550px</code>，用冒號 <code>:</code> 分隔，以分號 <code>;</code> 結束。</p><p>另外，注意我們如何將 <code>&lt;p&gt;</code> 和 <code>&lt;/p&gt;</code> 放在單獨的行中，文本內容用一個製表符縮進。像這樣設置代碼使其更具可讀性。</p><h3 id="html-中的列表" tabindex="-1">HTML 中的列表 <a class="header-anchor" href="#html-中的列表" aria-label="Permalink to “HTML 中的列表”">​</a></h3><p>接下來，蝙蝠俠希望列出他所欽佩的人的一些優點，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>You complete my darkness with your light. I love:</span></span>
<span class="line"><span>- the way you see good in the worst things</span></span>
<span class="line"><span>- the way you handle emotionally difficult situations</span></span>
<span class="line"><span>- the way you look at Justice</span></span>
<span class="line"><span>I have learned a lot from you. You have occupied a special place in my heart over time.</span></span></code></pre></div><p>這看起來很簡單。</p><p>讓我們繼續，在 <code>&lt;/p&gt;</code> 下面複製所需的文本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>&lt;/p&gt;</span></span>
<span class="line"><span>&lt;p style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>    - the way you see good in the worse</span></span>
<span class="line"><span>    - the way you handle emotionally difficult situations</span></span>
<span class="line"><span>    - the way you look at Justice</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>&lt;/p&gt;</span></span></code></pre></div><p>保存並刷新瀏覽器。</p><p><img src="https://cdn-images-1.medium.com/max/1000/1*M0Ae5ZpRTucNyucfaaz4uw.jpeg" alt=""></p><p>哇！這裏發生了什麼，我們的列表在哪裏？</p><p>如果你仔細觀察，你會發現沒有顯示換行符。在代碼中我們在新的一行中編寫列表項，但這些項在瀏覽器中顯示在一行中。</p><p>如果你想在 HTML（新行）中插入換行符，你必須使用 <code>&lt;br&gt;</code>。讓我們來使用 <code>&lt;br&gt;</code>，看看它長什麼樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>&lt;/p&gt;</span></span>
<span class="line"><span>&lt;p style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love: &lt;br&gt;</span></span>
<span class="line"><span>    - the way you see good in the worse &lt;br&gt;</span></span>
<span class="line"><span>    - the way you handle emotionally difficult situations &lt;br&gt;</span></span>
<span class="line"><span>    - the way you look at Justice &lt;br&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>&lt;/p&gt;</span></span></code></pre></div><p>保存並刷新：</p><p><img src="https://cdn-images-1.medium.com/max/1000/1*Mj4Sr_jUliidxFpEtu0pXw.jpeg" alt=""></p><p>好的，現在它看起來就像我們想要的那樣！</p><p>另外，注意我們沒有寫一個 <code>&lt;/br&gt;</code>。有些標籤不需要結束標籤（它們被稱為自閉合標籤）。</p><p>還有一件事：我們沒有在兩個段落之間使用 <code>&lt;br&gt;</code>，但第二個段落仍然是從一個新行開始，這是因為 <code>&lt;p&gt;</code> 元素會自動插入換行符。</p><p>我們使用純文本編寫列表，但是有兩個標籤可以供我們使用來達到相同的目的：<code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>。</p><p>讓我們解釋一下名字的意思：ul 代表<ruby>無序列表<rt>Unordered List</rt></ruby>，li 代表<ruby>列表項目<rt>List Item</rt></ruby>。讓我們使用它們來展示我們的列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>&lt;/p&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>  You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>&lt;/p&gt;</span></span></code></pre></div><p>在複製代碼之前，注意差異部分：</p><ul><li>我們刪除了所有的 <code>&lt;br&gt;</code>，因為每個 <code>&lt;li&gt;</code> 會自動顯示在新行中</li><li>我們將每個列表項包含在 <code>&lt;li&gt;</code> 和 <code>&lt;/li&gt;</code> 之間</li><li>我們將所有列表項的集合包裹在 <code>&lt;ul&gt;</code> 和 <code>&lt;/ul&gt;</code> 之間</li><li>我們沒有像 <code>&lt;p&gt;</code> 元素那樣定義 <code>&lt;ul&gt;</code> 元素的寬度。這是因為 <code>&lt;ul&gt;</code> 是 <code>&lt;p&gt;</code> 的子節點，<code>&lt;p&gt;</code> 已經被約束到 550px，所以 <code>&lt;ul&gt;</code> 不會超出這個範圍。</li></ul><p>讓我們保存文件並刷新瀏覽器以查看結果：</p><p><img src="https://cdn-images-1.medium.com/max/1000/1*aPlMpYVZESPwgUO3Iv-qCA.jpeg" alt=""></p><p>你會立即注意到在每個列表項之前顯示了重點標誌。我們現在不需要在每個列表項之前寫 “-”。</p><p>經過仔細檢查，你會注意到最後一行超出 550px 寬度。這是為什麼？因為 HTML 不允許 <code>&lt;ul&gt;</code> 元素出現在 <code>&lt;p&gt;</code> 元素中。讓我們將第一行和最後一行放在單獨的 <code>&lt;p&gt;</code> 元素中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>&lt;/p&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>&lt;/p&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;ul style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>  &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>&lt;/p&gt;</span></span></code></pre></div><p>保存並刷新。</p><p>注意，這次我們還定義了 <code>&lt;ul&gt;</code> 元素的寬度。那是因為我們現在已經將 <code>&lt;ul&gt;</code> 元素放在了 <code>&lt;p&gt;</code> 元素之外。</p><p>定義情書中所有元素的寬度會變得很麻煩。我們有一個特定的元素用於此目的：<code>&lt;div&gt;</code> 元素。一個 <code>&lt;div&gt;</code> 元素就是一個通用容器，用於對內容進行分組，以便輕鬆設置樣式。</p><p>讓我們用 <code>&lt;div&gt;</code> 元素包裝整個情書，併為其賦予寬度：550px 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>棒極了，我們的代碼現在看起來簡潔多了。</p><h3 id="html-中的標題" tabindex="-1">HTML 中的標題 <a class="header-anchor" href="#html-中的標題" aria-label="Permalink to “HTML 中的標題”">​</a></h3><p>到目前為止，蝙蝠俠對結果很高興，他希望在情書上標題。他想寫一個標題： “Bat Letter”。當然，你已經看到這個名字了，不是嗎？😄</p><p>你可以使用 <code>&lt;h1&gt;</code>、<code>&lt;h2&gt;</code>、<code>&lt;h3&gt;</code>、<code>&lt;h4&gt;</code>、<code>&lt;h5&gt;</code> 和 <code>&lt;h6&gt;</code> 標籤來添加標題，<code>&lt;h1&gt;</code> 是最大的標題和最主要的標題，<code>&lt;h6&gt;</code> 是最小的標題。</p><p><img src="https://cdn-images-1.medium.com/max/1000/1*Ud-NzfT-SrMgur1WX4LCkQ.jpeg" alt=""></p><p>讓我們在第二段之前使用 <code>&lt;h1&gt;</code> 做主標題和一個副標題：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Bat Letter&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  &lt;h2&gt;You are the light of my life&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>保存，刷新。</p><p><img src="https://cdn-images-1.medium.com/max/1000/1*rzyIl-gHug3nQChqfscU3w.jpeg" alt=""></p><h3 id="html-中的圖像" tabindex="-1">HTML 中的圖像 <a class="header-anchor" href="#html-中的圖像" aria-label="Permalink to “HTML 中的圖像”">​</a></h3><p>我們的情書尚未完成，但在繼續之前，缺少一件大事：蝙蝠俠標誌。你見過是蝙蝠俠的東西但沒有蝙蝠俠的標誌嗎？</p><p>並沒有。</p><p>所以，讓我們在情書中添加一個蝙蝠俠標誌。</p><p>在 HTML 中包含圖像就像在一個 Word 文件中包含圖像一樣。在 MS Word 中，你到 “菜單 -&gt; 插入 -&gt; 圖像 -&gt; 然後導航到圖像位置為止 -&gt; 選擇圖像 -&gt; 單擊插入”。</p><p>在 HTML 中，我們使用 <code>&lt;img&gt;</code> 標籤讓瀏覽器知道我們需要加載的圖像，而不是單擊菜單。我們在 <code>src</code> 屬性中寫入文件的位置和名稱。如果圖像在項目根目錄中，我們可以簡單地在 <code>src</code> 屬性中寫入圖像文件的名稱。</p>`,77)),l("p",null,[s[4]||(s[4]=a("在我們深入編碼之前，從",-1)),t(n,{href:"https://www.pexels.com/photo/batman-black-and-white-logo-93596/"},{default:e(()=>[...s[3]||(s[3]=[a("這裏",-1)])]),_:1}),s[5]||(s[5]=a("下載蝙蝠俠標誌。你可能希望裁剪圖像中的額外空白區域。複製項目根目錄中的圖像並將其重命名為 “bat-logo.jpeg”。",-1))]),s[21]||(s[21]=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Bat Letter&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;img src=&quot;bat-logo.jpeg&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;h2&gt;You are the light of my life&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>我們在第 3 行包含了 <code>&lt;img&gt;</code> 標籤。這個標籤也是一個自閉合的標籤，所以我們不需要寫 <code>&lt;/img&gt;</code>。在 <code>src</code> 屬性中，我們給出了圖像文件的名稱。這個名稱應與圖像名稱完全相同，包括擴展名（.jpeg）及其大小寫。</p><p>保存並刷新，查看結果。</p><p><img src="https://cdn-images-1.medium.com/max/1000/1*uMNWAISOACJlzDOONcrGXw.jpeg" alt=""></p><p>該死的！剛剛發生了什麼？</p><p>當使用 <code>&lt;img&gt;</code> 標籤包含圖像時，默認情況下，圖像將以其原始分辨率顯示。在我們的例子中，圖像比 550px 寬得多。讓我們使用 <code>style</code> 屬性定義它的寬度：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Bat Letter&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;img src=&quot;bat-logo.jpeg&quot; style=&quot;width:100%&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;h2&gt;You are the light of my life&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>你會注意到，這次我們定義寬度使用了 “%” 而不是 “px”。當我們在 “%” 中定義寬度時，它將佔據父元素寬度的百分比。因此，100% 的 550px 將為我們提供 550px。</p><p>保存並刷新，查看結果。</p><p><img src="https://cdn-images-1.medium.com/max/1000/1*5c0ngx3BFVlyyP6UNtfYyg.jpeg" alt=""></p><p>太棒了！這讓蝙蝠俠的臉露出了羞澀的微笑 😃。</p><h3 id="html-中的粗體和斜體" tabindex="-1">HTML 中的粗體和斜體 <a class="header-anchor" href="#html-中的粗體和斜體" aria-label="Permalink to “HTML 中的粗體和斜體”">​</a></h3><p>現在蝙蝠俠想在最後幾段中承認他的愛。他有以下文本供你用 HTML 編寫：</p><p>“I have a confession to make</p><p>It feels like my chest <em>does</em> have a heart. You make my heart beat. Your smile brings a smile to my face, your pain brings pain to my heart.</p><p>I don’t show my emotions, but I think this man behind the mask is falling for you.”</p><p>當閲讀到這裏時，你會問蝙蝠俠：“等等，這是給誰的？”蝙蝠俠説：</p><p>“這是給超人的。”</p><p><img src="https://cdn-images-1.medium.com/max/1000/1*UNDvfIZQJ1Q_goHc-F-IPA.jpeg" alt=""></p><p>你説：哦！我還以為是給神奇女俠的呢。</p><p>蝙蝠俠説：不，這是給超人的，請在最後寫上 “I love you Superman.”。</p><p>好的，我們來寫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Bat Letter&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;img src=&quot;bat-logo.jpeg&quot; style=&quot;width:100%&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;h2&gt;You are the light of my life&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;I have a confession to make&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    It feels like my chest does have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I don&#39;t show my emotions, but I think this man behind the mask is falling for you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;I love you Superman.&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    Your not-so-secret-lover, &lt;br&gt;</span></span>
<span class="line"><span>    Batman</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>這封信差不多完成了，蝙蝠俠另外想再做兩次改變。蝙蝠俠希望在最後段落的第一句中的 “does” 一詞是斜體，而 “I love you Superman” 這句話是粗體的。</p><p>我們使用 <code>&lt;em&gt;</code> 和 <code>&lt;strong&gt;</code> 以斜體和粗體顯示文本。讓我們來更新這些更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div style=&quot;width:550px;&quot;&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Bat Letter&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;img src=&quot;bat-logo.jpeg&quot; style=&quot;width:100%&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  &lt;h2&gt;You are the light of my life&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;I have a confession to make&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I don&#39;t show my emotions, but I think this man behind the mask is falling for you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    Your not-so-secret-lover, &lt;br&gt;</span></span>
<span class="line"><span>    Batman</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p><img src="https://cdn-images-1.medium.com/max/1000/1*6hZdQJglbHUcEEHzouk2eA.jpeg" alt=""></p><h3 id="html-中的樣式" tabindex="-1">HTML 中的樣式 <a class="header-anchor" href="#html-中的樣式" aria-label="Permalink to “HTML 中的樣式”">​</a></h3><p>你可以通過三種方式設置樣式或定義 HTML 元素的外觀：</p><ul><li>內聯樣式：我們使用元素的 <code>style</code> 屬性來編寫樣式。這是我們迄今為止使用的，但這不是一個好的實踐。</li><li>嵌入式樣式：我們在由 <code>&lt;style&gt;</code> 和 <code>&lt;/style&gt;</code> 包裹的 “style” 元素中編寫所有樣式。</li><li>鏈接樣式表：我們在具有 .css 擴展名的單獨文件中編寫所有元素的樣式。此文件稱為樣式表。</li></ul><p>讓我們來看看如何定義 <code>&lt;div&gt;</code> 的內聯樣式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div style=&quot;width:550px;&quot;&gt;</span></span></code></pre></div><p>我們可以在 <code>&lt;style&gt;</code> 和 <code>&lt;/style&gt;</code> 裏面寫同樣的樣式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>div{</span></span>
<span class="line"><span>  width:550px;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在嵌入式樣式中，我們編寫的樣式是與元素分開的。所以我們需要一種方法來關聯元素及其樣式。第一個單詞 “div” 就做了這樣的活。它讓瀏覽器知道花括號 <code>{...}</code> 裏面的所有樣式都屬於 “div” 元素。由於這種語法確定要應用樣式的元素，因此它稱為一個選擇器。</p><p>我們編寫樣式的方式保持不變：屬性（<code>width</code>）和值（<code>550px</code>）用冒號（<code>:</code>）分隔，以分號（<code>;</code>）結束。</p><p>讓我們從 <code>&lt;div&gt;</code> 和 <code>&lt;img&gt;</code> 元素中刪除內聯樣式，將其寫入 <code>&lt;style&gt;</code> 元素：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>  div{</span></span>
<span class="line"><span>    width:550px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  img{</span></span>
<span class="line"><span>    width:100%;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Bat Letter&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;img src=&quot;bat-logo.jpeg&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  &lt;h2&gt;You are the light of my life&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;I have a confession to make&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I don&#39;t show my emotions, but I think this man behind the mask is falling for you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    Your not-so-secret-lover, &lt;br&gt;</span></span>
<span class="line"><span>    Batman</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>保存並刷新，結果應保持不變。</p><p>但是有一個大問題，如果我們的 HTML 文件中有多個 <code>&lt;div&gt;</code> 和 <code>&lt;img&gt;</code> 元素該怎麼辦？這樣我們在 <code>&lt;style&gt;</code> 元素中為 div 和 img 定義的樣式就會應用於頁面上的每個 div 和 img。</p><p>如果你在以後的代碼中添加另一個 div，那麼該 div 也將變為 550px 寬。我們並不希望這樣。</p><p>我們想要將我們的樣式應用於現在正在使用的特定 div 和 img。為此，我們需要為 div 和 img 元素提供唯一的 id。以下是使用 <code>id</code> 屬性為元素賦予 id 的方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div id=&quot;letter-container&quot;&gt;</span></span></code></pre></div><p>以下是如何在嵌入式樣式中將此 id 用作選擇器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#letter-container{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>注意 <code>#</code> 符號。它表示它是一個 id，<code>{...}</code> 中的樣式應該只應用於具有該特定 id 的元素。</p><p>讓我們來應用它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>  #letter-container{</span></span>
<span class="line"><span>    width:550px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  #header-bat-logo{</span></span>
<span class="line"><span>    width:100%;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div id=&quot;letter-container&quot;&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Bat Letter&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;img id=&quot;header-bat-logo&quot; src=&quot;bat-logo.jpeg&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  &lt;h2&gt;You are the light of my life&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;I have a confession to make&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I don&#39;t show my emotions, but I think this man behind the mask is falling for you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    Your not-so-secret-lover, &lt;br&gt;</span></span>
<span class="line"><span>    Batman</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>HTML 已經準備好了嵌入式樣式。</p><p>但是，你可以看到，隨着我們包含越來越多的樣式，<code>&lt;style&gt;&lt;/style&gt;</code> 將變得很大。這可能很快會混亂我們的主 HTML 文件。</p><p>因此，讓我們更進一步，通過將 <code>&lt;style&gt;</code> 標籤內的內容複製到一個新文件來使用鏈接樣式。</p><p>在項目根目錄中創建一個新文件，將其另存為 “style.css”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#letter-container{</span></span>
<span class="line"><span>  width:550px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>#header-bat-logo{</span></span>
<span class="line"><span>  width:100%;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我們不需要在 CSS 文件中寫 <code>&lt;style&gt;</code> 和 <code>&lt;/style&gt;</code>。</p><p>我們需要使用 HTML 文件中的 <code>&lt;link&gt;</code> 標籤來將新創建的 CSS 文件鏈接到 HTML 文件。以下是我們如何做到這一點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;&gt;</span></span></code></pre></div><p>我們使用 <code>&lt;link&gt;</code> 元素在 HTML 文檔中包含外部資源，它主要用於鏈接樣式表。我們使用的三個屬性是：</p><ul><li><code>rel</code>：關係。鏈接文件與文檔的關係。具有 .css 擴展名的文件稱為樣式表，因此我們保留 rel=“stylesheet”。</li><li><code>type</code>：鏈接文件的類型；對於一個 CSS 文件來説它是 “text/css”。</li><li><code>href</code>：超文本參考。鏈接文件的位置。</li></ul><p>link 元素的結尾沒有 <code>&lt;/link&gt;</code>。因此，<code>&lt;link&gt;</code> 也是一個自閉合的標籤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;link rel=&quot;gf&quot; type=&quot;cute&quot; href=&quot;girl.next.door&quot;&gt;</span></span></code></pre></div><p>如果只是得到一個女朋友，那麼很容易：D</p><p>可惜沒有那麼簡單，讓我們繼續前進。</p><p>這是我們 “loveletter.html” 的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;&gt;</span></span>
<span class="line"><span>&lt;div id=&quot;letter-container&quot;&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Bat Letter&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;img id=&quot;header-bat-logo&quot; src=&quot;bat-logo.jpeg&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;You are the light of my life&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;I have a confession to make&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I don&#39;t show my emotions, but I think this man behind the mask is falling for you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    Your not-so-secret-lover, &lt;br&gt;</span></span>
<span class="line"><span>    Batman</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>“style.css” 內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#letter-container{</span></span>
<span class="line"><span>  width:550px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>#header-bat-logo{</span></span>
<span class="line"><span>  width:100%;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>保存文件並刷新，瀏覽器中的輸出應保持不變。</p><h3 id="一些手續" tabindex="-1">一些手續 <a class="header-anchor" href="#一些手續" aria-label="Permalink to “一些手續”">​</a></h3><p>我們的情書已經準備好給蝙蝠俠，但還有一些正式的片段。</p><p>與其他任何編程語言一樣，HTML 自出生以來（1990 年）經歷過許多版本，當前版本是 HTML5。</p><p>那麼，瀏覽器如何知道你使用哪個版本的 HTML 來編寫頁面呢？要告訴瀏覽器你正在使用 HTML5，你需要在頁面頂部包含 <code>&lt;!DOCTYPE html&gt;</code>。對於舊版本的 HTML，這行不同，但你不需要了解它們，因為我們不再使用它們了。</p><p>此外，在之前的 HTML 版本中，我們曾經將整個文檔封裝在 <code>&lt;html&gt;&lt;/html&gt;</code> 標籤內。整個文件分為兩個主要部分：頭部在 <code>&lt;head&gt;&lt;/head&gt;</code> 裏面，主體在 <code>&lt;body&gt;&lt;/body&gt;</code> 裏面。這在 HTML5 中不是必須的，但由於兼容性原因，我們仍然這樣做。讓我們用 <code>&lt;Doctype&gt;</code>, <code>&lt;html&gt;</code>、 <code>&lt;head&gt;</code> 和 <code>&lt;body&gt;</code> 更新我們的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div id=&quot;letter-container&quot;&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Bat Letter&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;img id=&quot;header-bat-logo&quot; src=&quot;bat-logo.jpeg&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;You are the light of my life&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;I have a confession to make&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I don&#39;t show my emotions, but I think this man behind the mask is falling for you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    Your not-so-secret-lover, &lt;br&gt;</span></span>
<span class="line"><span>    Batman</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>主要內容在 <code>&lt;body&gt;</code> 裏面，元信息在 <code>&lt;head&gt;</code> 裏面。所以我們把 <code>&lt;div&gt;</code> 保存在 <code>&lt;body&gt;</code> 裏面並加載 <code>&lt;head&gt;</code> 裏面的樣式表。</p><p>保存並刷新，你的 HTML 頁面應顯示與之前相同的內容。</p><h3 id="html-的標題" tabindex="-1">HTML 的標題 <a class="header-anchor" href="#html-的標題" aria-label="Permalink to “HTML 的標題”">​</a></h3><p>我發誓，這是最後一次改變。</p><p>你可能已經注意到選項卡的標題正在顯示 HTML 文件的路徑：</p><p><img src="https://cdn-images-1.medium.com/max/1000/1*PASKm4ji29hbcZXVSP8afg.jpeg" alt=""></p><p>我們可以使用 <code>&lt;title&gt;</code> 標籤來定義 HTML 文件的標題。標題標籤也像鏈接標籤一樣在 <code>&lt;head&gt;</code> 內部。讓我們我們在標題中加上 “Bat Letter”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>  &lt;title&gt;Bat Letter&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div id=&quot;letter-container&quot;&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Bat Letter&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;img id=&quot;header-bat-logo&quot; src=&quot;bat-logo.jpeg&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we&#39;ve been through, I think it&#39;s time I let you know how I feel about you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;You are the light of my life&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    You complete my darkness with your light. I love:</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you see good in the worse&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;the way you look at Justice&lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I have learned a lot from you. You have occupied a special place in my heart over the time.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;I have a confession to make&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    I don&#39;t show my emotions, but I think this man behind the mask is falling for you.</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;</span></span>
<span class="line"><span>    Your not-so-secret-lover, &lt;br&gt;</span></span>
<span class="line"><span>    Batman</span></span>
<span class="line"><span>  &lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>保存並刷新，你將看到在選項卡上顯示的是 “Bat Letter” 而不是文件路徑。</p><p>蝙蝠俠的情書現在已經完成。</p><p>恭喜！你用 HTML 製作了蝙蝠俠的情書。</p><p><img src="https://cdn-images-1.medium.com/max/1000/1*qC8qtrYtxAB6cJfm9aVOOQ.jpeg" alt=""></p><h3 id="我們學到了什麼" tabindex="-1">我們學到了什麼 <a class="header-anchor" href="#我們學到了什麼" aria-label="Permalink to “我們學到了什麼”">​</a></h3><p>我們學習了以下新概念：</p><ul><li>一個 HTML 文檔的結構</li><li>在 HTML 中如何寫元素（<code>&lt;p&gt;&lt;/p&gt;</code>）</li><li>如何使用 style 屬性在元素內編寫樣式（這稱為內聯樣式，儘可能避免這種情況）</li><li>如何在 <code>&lt;style&gt;...&lt;/style&gt;</code> 中編寫元素的樣式（這稱為嵌入式樣式）</li><li>在 HTML 中如何使用 <code>&lt;link&gt;</code> 在單獨的文件中編寫樣式並鏈接它（這稱為鏈接樣式表）</li><li>什麼是標籤名稱，屬性，開始標籤和結束標籤</li><li>如何使用 id 屬性為一個元素賦予 id</li><li>CSS 中的標籤選擇器和 id 選擇器</li></ul><p>我們學習了以下 HTML 標籤：</p><ul><li><code>&lt;p&gt;</code>：用於段落</li><li><code>&lt;br&gt;</code>：用於換行</li><li><code>&lt;ul&gt;</code>、<code>&lt;li&gt;</code>：顯示列表</li><li><code>&lt;div&gt;</code>：用於分組我們信件的元素</li><li><code>&lt;h1&gt;</code>、<code>&lt;h2&gt;</code>：用於標題和子標題</li><li><code>&lt;img&gt;</code>：用於插入圖像</li><li><code>&lt;strong&gt;</code>、<code>&lt;em&gt;</code>：用於粗體和斜體文字樣式</li><li><code>&lt;style&gt;</code>：用於嵌入式樣式</li><li><code>&lt;link&gt;</code>：用於包含外部樣式表</li><li><code>&lt;html&gt;</code>：用於包裹整個 HTML 文檔</li><li><code>&lt;!DOCTYPE html&gt;</code>：讓瀏覽器知道我們正在使用 HTML5</li><li><code>&lt;head&gt;</code>：包裹元信息，如 <code>&lt;link&gt;</code> 和 <code>&lt;title&gt;</code></li><li><code>&lt;body&gt;</code>：用於實際顯示的 HTML 頁面的主體</li><li><code>&lt;title&gt;</code>：用於 HTML 頁面的標題</li></ul><p>我們學習了以下 CSS 屬性：</p><ul><li>width：用於定義元素的寬度</li><li>CSS 單位：“px” 和 “%”</li></ul><p>朋友們，這就是今天的全部了，下一個教程中見。</p><hr><p>作者簡介：開發者 + 作者 | supersarkar.com | twitter.com/supersarkar</p><hr>`,104)),l("p",null,[s[7]||(s[7]=a("via: ",-1)),t(n,{href:"https://medium.freecodecamp.org/for-your-first-html-code-lets-help-batman-write-a-love-letter-64c203b9360b"},{default:e(()=>[...s[6]||(s[6]=[a("https://medium.freecodecamp.org/for-your-first-html-code-lets-help-batman-write-a-love-letter-64c203b9360b",-1)])]),_:1})]),l("p",null,[s[11]||(s[11]=a("作者：",-1)),t(n,{href:"https://medium.freecodecamp.org/@supersarkar"},{default:e(()=>[...s[8]||(s[8]=[a("Kunal Sarkar",-1)])]),_:1}),s[12]||(s[12]=a(" 譯者：",-1)),t(n,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[9]||(s[9]=[a("MjSeven",-1)])]),_:1}),s[13]||(s[13]=a(" 校對：",-1)),t(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[16]||(s[16]=a("本文由 ",-1)),t(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[14]||(s[14]=[a("LCTT",-1)])]),_:1}),s[17]||(s[17]=a(" 原創編譯，",-1)),t(n,{href:"https://linux.cn/"},{default:e(()=>[...s[15]||(s[15]=[a("Linux中國",-1)])]),_:1}),s[18]||(s[18]=a(" 榮譽推出",-1))])])}const w=i(h,[["render",d]]);export{v as __pageData,w as default};
