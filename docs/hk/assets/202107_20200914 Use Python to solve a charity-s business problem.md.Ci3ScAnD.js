import{_ as l,a0 as t,w as o,s as r,I as a,x as s,a1 as e,A as i,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"使用 Python 來解決慈善機構的業務問題 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 來解決慈善機構的業務問題 | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 來解決慈善機構的業務問題 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 來解決慈善機構的業務問題 | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20200914 Use Python to solve a charity-s business problem","title":"使用 Python 來解決慈善機構的業務問題","tag":"202107","desc":""},"relativePath":"202107/20200914 Use Python to solve a charity-s business problem.md","filePath":"[post].md"}'),c={name:"202107/20200914 Use Python to solve a charity-s business problem.md"};function d(h,n,m,y,b,g){const p=t("Link");return o(),r("div",null,[n[23]||(n[23]=a("h1",{id:"使用-python-來解決慈善機構的業務問題",tabindex:"-1"},[s("使用 Python 來解決慈善機構的業務問題 "),a("a",{class:"header-anchor",href:"#使用-python-來解決慈善機構的業務問題","aria-label":"Permalink to “使用 Python 來解決慈善機構的業務問題”"},"​")],-1)),n[24]||(n[24]=a("blockquote",null,[a("p",null,"比較不同的編程語言如何解決同一個問題是一個很有趣的事情，也很有指導意義。接下來，我們就來講一講如何用 Python 來解決。")],-1)),n[25]||(n[25]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202107/02/124241fzuzo7kflrf7g77v.jpg",alt:""})],-1)),a("p",null,[n[1]||(n[1]=s("在我這一系列的 ",-1)),e(p,{href:"https://opensource.com/article/20/8/solving-problem-groovy"},{default:i(()=>[...n[0]||(n[0]=[s("第一篇文章",-1)])]),_:1}),n[2]||(n[2]=s(" 裏，我描述了這樣子的一個問題，如何將一大批的救助物資分為具有相同價值的物品，並將其分發給社區中的困難住户。我也曾寫過用不同的編程語言寫一些小程序來解決這樣子的小問題以及比較這些程序時如何工作的。",-1))]),a("p",null,[n[5]||(n[5]=s("在第一篇文章中，我是使用了 ",-1)),e(p,{href:"https://groovy-lang.org/"},{default:i(()=>[...n[3]||(n[3]=[s("Groovy",-1)])]),_:1}),n[6]||(n[6]=s(" 語言來解決問題的。Groovy 在很多方面都與 ",-1)),e(p,{href:"https://www.python.org/"},{default:i(()=>[...n[4]||(n[4]=[s("Python",-1)])]),_:1}),n[7]||(n[7]=s(" 很相似，但是在語法上她更像 C 語言和 Java。因此，使用 Python 來創造一個相同的解決方案應該會很有趣且更有意義。",-1))]),n[26]||(n[26]=u(`<h3 id="使用-python-的解決方案" tabindex="-1">使用 Python 的解決方案 <a class="header-anchor" href="#使用-python-的解決方案" aria-label="Permalink to “使用 Python 的解決方案”">​</a></h3><p>使用 Java 時，我會聲明一個工具類來保存元組數據（新的記錄功能將會很好地用於這個需求）。使用 Groovy 時，我就是用了該語言的映射功能，我也將在 Python 使用相同的機制。</p><p>使用一個字典列表來保存從批發商處批發來的貨物：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>packs = [</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Rice&#39;,&#39;brand&#39;:&#39;Best Family&#39;,&#39;units&#39;:10,&#39;price&#39;:5650,&#39;quantity&#39;:1},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Spaghetti&#39;,&#39;brand&#39;:&#39;Best Family&#39;,&#39;units&#39;:1,&#39;price&#39;:327,&#39;quantity&#39;:10},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Sardines&#39;,&#39;brand&#39;:&#39;Fresh Caught&#39;,&#39;units&#39;:3,&#39;price&#39;:2727,&#39;quantity&#39;:3},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Chickpeas&#39;,&#39;brand&#39;:&#39;Southern Style&#39;,&#39;units&#39;:2,&#39;price&#39;:2600,&#39;quantity&#39;:5},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Lentils&#39;,&#39;brand&#39;:&#39;Southern Style&#39;,&#39;units&#39;:2,&#39;price&#39;:2378,&#39;quantity&#39;:5},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Vegetable oil&#39;,&#39;brand&#39;:&#39;Crafco&#39;,&#39;units&#39;:12,&#39;price&#39;:10020,&#39;quantity&#39;:1},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;UHT milk&#39;,&#39;brand&#39;:&#39;Atlantic&#39;,&#39;units&#39;:6,&#39;price&#39;:4560,&#39;quantity&#39;:2},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Flour&#39;,&#39;brand&#39;:&#39;Neighbor Mills&#39;,&#39;units&#39;:10,&#39;price&#39;:5200,&#39;quantity&#39;:1},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Tomato sauce&#39;,&#39;brand&#39;:&#39;Best Family&#39;,&#39;units&#39;:1,&#39;price&#39;:190,&#39;quantity&#39;:10},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Sugar&#39;,&#39;brand&#39;:&#39;Good Price&#39;,&#39;units&#39;:1,&#39;price&#39;:565,&#39;quantity&#39;:10},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Tea&#39;,&#39;brand&#39;:&#39;Superior&#39;,&#39;units&#39;:5,&#39;price&#39;:2720,&#39;quantity&#39;:2},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Coffee&#39;,&#39;brand&#39;:&#39;Colombia Select&#39;,&#39;units&#39;:2,&#39;price&#39;:4180,&#39;quantity&#39;:5},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Tofu&#39;,&#39;brand&#39;:&#39;Gourmet Choice&#39;,&#39;units&#39;:1,&#39;price&#39;:1580,&#39;quantity&#39;:10},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Bleach&#39;,&#39;brand&#39;:&#39;Blanchite&#39;,&#39;units&#39;:5,&#39;price&#39;:3550,&#39;quantity&#39;:2},</span></span>
<span class="line"><span>        {&#39;item&#39;:&#39;Soap&#39;,&#39;brand&#39;:&#39;Sunny Day&#39;,&#39;units&#39;:6,&#39;price&#39;:1794,&#39;quantity&#39;:2}]</span></span></code></pre></div><p>大米有一包，每包中有 10 袋大米，意大利麪條有十包，每包中有一袋意大利麪條。上述代碼中，變量 <code>packs</code> 被設置為 Python 字典列表。這與 Groovy 的方法非常相似。關於 Groovy 和 Python 之間的區別，有幾點需要注意：</p><ol><li>在 Python 中，無需關鍵字來定義變量 <code>packs</code>，Python 變量初始化時需要設置一個值。</li><li>Python 字典中的詞鍵（例如，<code>item</code>、<code>brand</code>、<code>units</code>、<code>price</code>、 <code>quantity</code>）需要引號來表明它們是字符串；Groovy 假定這些是字符串，但也接受引號。</li><li>在 Python 中，符號 <code>{ ... }</code> 表明一個字典聲明； Groovy 使用與列表相同的方括號，但兩種情況下的結構都必須具有鍵值對。</li></ol><p>當然，表中的價格不是以美元計算的。</p><p>接下來，打開散裝包。例如，打開大米的單個散裝包裝，將產出 10 單元大米； 也就是説，產出的單元總數是 <code>units * quantity</code>。 Groovy 腳本使用一個名為 <code>collectMany</code> 的方便的函數，該函數可用於展平列表列表。 據我所知，Python 沒有類似的東西，所以使用兩個列表推導式來產生相同的結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>units = [[{&#39;item&#39;:pack[&#39;item&#39;],&#39;brand&#39;:pack[&#39;brand&#39;],</span></span>
<span class="line"><span>        &#39;price&#39;:(pack[&#39;price&#39;] / pack[&#39;units&#39;])}] *</span></span>
<span class="line"><span>        (pack[&#39;units&#39;] * pack[&#39;quantity&#39;]) for pack in packs]</span></span>
<span class="line"><span>units = [x for sublist in units for x in sublist]</span></span></code></pre></div><p>第一個列表可理解為（分配給單元）構建字典列表列表。 第二個將其“扁平化”為字典列表。 請注意，Python 和 Groovy 都提供了一個 <code>*</code> 運算符，它接受左側的列表和右側的數字 <code>N</code>，並複製列表 <code>N</code> 次。</p><p>最後一步是將這些單元的大米之類的重新包裝到籃子（<code>hamper</code>）中以進行分發。 就像在 Groovy 版本中一樣，你需要更具體地瞭解理想的籃子數，當你只剩下幾個單元時，你最好不要過度限制，即可以做一些隨機分配：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>valueIdeal = 5000</span></span>
<span class="line"><span>valueMax = valueIdeal * 1.1</span></span></code></pre></div><p>很好！ 重新打包籃子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import random</span></span>
<span class="line"><span>hamperNumber = 0              # 導入 Python 的隨機數生成器工具並初始化籃子數</span></span>
<span class="line"><span>while len(units) &amp;gt; 0:      # 只要有更多可用的單元，這個 \`while\` 循環就會將單元重新分配到籃子中：</span></span>
<span class="line"><span>    hamperNumber += 1</span></span>
<span class="line"><span>    hamper = []</span></span>
<span class="line"><span>    value = 0</span></span>
<span class="line"><span>    canAdd = True              # 增加籃子編號，得到一個新的空籃子（單元的列表），並將其值設為 0； 開始假設你可以向籃子中添加更多物品。</span></span>
<span class="line"><span>    while canAdd:              # 這個 \`while\` 循環將盡可能多地向籃子添加單元（Groovy 代碼使用了 \`for\` 循環，但 Python 的 \`for\` 循環期望迭代某些東西，而 Groovy 則是為更傳統的 C 形式的 \`for\` 循環形式）：</span></span>
<span class="line"><span>        u = random.randint(0,len(units)-1)  # 獲取一個介於 0 和剩餘單元數減 1 之間的隨機數。</span></span>
<span class="line"><span>        canAdd = False                      # 假設你找不到更多要添加的單元。</span></span>
<span class="line"><span>        o = 0                               # 創建一個變量，用於從你正在尋找要放入籃子中的物品的起點的偏移量。</span></span>
<span class="line"><span>        while o &lt; len(units):               # 從隨機選擇的索引開始，這個 \`while\` 循環將嘗試找到一個可以添加到籃子的單元（再次注意，Python \`for\` 循環可能不適合這裏，因為列表的長度將在迭代中中發生變化）。</span></span>
<span class="line"><span>            uo = (u + o) % len(units)</span></span>
<span class="line"><span>            unit = units[uo]</span></span>
<span class="line"><span>            unitPrice = unit[&#39;price&#39;]          # 找出要查看的單元（隨機起點+偏移量）並獲得其價格。</span></span>
<span class="line"><span>            if len(units) &lt; 3 or not (unit in hamper) and (value + unitPrice) &lt; valueMax:</span></span>
<span class="line"><span>                                               # 如果只剩下幾個，或者添加單元后籃子的價值不太高，你可以將此單元添加到籃子中。</span></span>
<span class="line"><span>                hamper.append(unit)</span></span>
<span class="line"><span>                value += unitPrice</span></span>
<span class="line"><span>                units.pop(u)                   # 將單元添加到籃子中，按單價增加 籃子數，從可用單元列表中刪除該單元。</span></span>
<span class="line"><span>                canAdd = len(units) &gt; 0</span></span>
<span class="line"><span>                break                          # 只要還有剩餘單元，你就可以添加更多單元，因此可以跳出此循環繼續尋找。</span></span>
<span class="line"><span>            o += 1                             # 增加偏移量。</span></span>
<span class="line"><span>                                            # 在退出這個 \`while\` 循環時，如果你檢查了所有剩餘的單元並且找不到單元可以添加到籃子中，那麼籃子就完成了搜索； 否則，你找到了一個，可以繼續尋找更多。</span></span>
<span class="line"><span>    print(&#39;&#39;)</span></span>
<span class="line"><span>    print(&#39;Hamper&#39;,hamperNumber,&#39;value&#39;,value)</span></span>
<span class="line"><span>    for item in hamper:</span></span>
<span class="line"><span>        print(&#39;%-25s%-25s%7.2f&#39; % (item[&#39;item&#39;],item[&#39;brand&#39;],item[&#39;price&#39;])) # 打印出籃子的內容。</span></span>
<span class="line"><span>    print(&#39;Remaining units&#39;,len(units))                                       # 打印出剩餘的單元信息。</span></span></code></pre></div><p>一些澄清如上面的註釋。</p><p>運行此代碼時，輸出看起來與 Groovy 程序的輸出非常相似：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hamper 1 value 5304.0</span></span>
<span class="line"><span>UHT milk                 Atlantic                  760.00</span></span>
<span class="line"><span>Tomato sauce             Best Family               190.00</span></span>
<span class="line"><span>Rice                     Best Family               565.00</span></span>
<span class="line"><span>Coffee                   Colombia Select          2090.00</span></span>
<span class="line"><span>Sugar                    Good Price                565.00</span></span>
<span class="line"><span>Vegetable oil            Crafco                    835.00</span></span>
<span class="line"><span>Soap                     Sunny Day                 299.00</span></span>
<span class="line"><span>Remaining units 148</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hamper 2 value 5428.0</span></span>
<span class="line"><span>Tea                      Superior                  544.00</span></span>
<span class="line"><span>Lentils                  Southern Style           1189.00</span></span>
<span class="line"><span>Flour                    Neighbor Mills            520.00</span></span>
<span class="line"><span>Tofu                     Gourmet Choice           1580.00</span></span>
<span class="line"><span>Vegetable oil            Crafco                    835.00</span></span>
<span class="line"><span>UHT milk                 Atlantic                  760.00</span></span>
<span class="line"><span>Remaining units 142</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hamper 3 value 5424.0</span></span>
<span class="line"><span>Soap                     Sunny Day                 299.00</span></span>
<span class="line"><span>Chickpeas                Southern Style           1300.00</span></span>
<span class="line"><span>Sardines                 Fresh Caught              909.00</span></span>
<span class="line"><span>Rice                     Best Family               565.00</span></span>
<span class="line"><span>Vegetable oil            Crafco                    835.00</span></span>
<span class="line"><span>Spaghetti                Best Family               327.00</span></span>
<span class="line"><span>Lentils                  Southern Style           1189.00</span></span>
<span class="line"><span>Remaining units 135</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hamper 21 value 5145.0</span></span>
<span class="line"><span>Tomato sauce             Best Family               190.00</span></span>
<span class="line"><span>Tea                      Superior                  544.00</span></span>
<span class="line"><span>Chickpeas                Southern Style           1300.00</span></span>
<span class="line"><span>Spaghetti                Best Family               327.00</span></span>
<span class="line"><span>UHT milk                 Atlantic                  760.00</span></span>
<span class="line"><span>Vegetable oil            Crafco                    835.00</span></span>
<span class="line"><span>Lentils                  Southern Style           1189.00</span></span>
<span class="line"><span>Remaining units 4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hamper 22 value 2874.0</span></span>
<span class="line"><span>Sardines                 Fresh Caught              909.00</span></span>
<span class="line"><span>Vegetable oil            Crafco                    835.00</span></span>
<span class="line"><span>Rice                     Best Family               565.00</span></span>
<span class="line"><span>Rice                     Best Family               565.00</span></span>
<span class="line"><span>Remaining units 0</span></span></code></pre></div><p>最後一個籃子在內容和價值上有所簡化。</p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>乍一看，這個程序的 Python 和 Groovy 版本之間沒有太大區別。 兩者都有一組相似的結構，這使得處理列表和字典非常簡單。 兩者都不需要很多“樣板代碼”或其他“繁雜”操作。</p><p>此外，使用 Groovy 時，向籃子中添加單元還是一件比較繁瑣的事情。 你需要在單元列表中隨機選擇一個位置，然後從該位置開始，遍歷列表，直到找到一個價格允許的且包含它的單元，或者直到你用完列表為止。 當只剩下幾件物品時，你需要將它們扔到最後一個籃子裏。</p><p>另一個值得一提的問題是：這不是一種特別有效的方法。 從列表中刪除元素、極其多的重複表達式還有一些其它的問題使得這不太適合解決這種大數據重新分配問題。 儘管如此，它仍然在我的老機器上運行。</p><p>如果你覺得我在這段代碼中使用 <code>while</code> 循環並改變其中的數據感到不舒服，你可能希望我讓它更有用一些。 我想不出一種方法不使用 Python 中的 map 和 reduce 函數，並結合隨機選擇的單元進行重新打包。 你可以嗎？</p><p>在下一篇文章中，我將使用 Java 重新執行此操作，以瞭解 Groovy 和 Python 的工作量減少了多少，未來的文章將介紹 Julia 和 Go。</p><hr>`,25)),a("p",null,[n[9]||(n[9]=s("via: ",-1)),e(p,{href:"https://opensource.com/article/20/9/solve-problem-python"},{default:i(()=>[...n[8]||(n[8]=[s("https://opensource.com/article/20/9/solve-problem-python",-1)])]),_:1})]),a("p",null,[n[14]||(n[14]=s("作者：",-1)),e(p,{href:"https://opensource.com/users/clhermansen"},{default:i(()=>[...n[10]||(n[10]=[s("Chris Hermansen",-1)])]),_:1}),n[15]||(n[15]=s(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...n[11]||(n[11]=[s("lujun9972",-1)])]),_:1}),n[16]||(n[16]=s(" 譯者：",-1)),e(p,{href:"https://github.com/zepoch"},{default:i(()=>[...n[12]||(n[12]=[s("zepoch",-1)])]),_:1}),n[17]||(n[17]=s(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...n[13]||(n[13]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[20]||(n[20]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[18]||(n[18]=[s("LCTT",-1)])]),_:1}),n[21]||(n[21]=s(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...n[19]||(n[19]=[s("Linux中國",-1)])]),_:1}),n[22]||(n[22]=s(" 榮譽推出",-1))])])}const C=l(c,[["render",d]]);export{v as __pageData,C as default};
