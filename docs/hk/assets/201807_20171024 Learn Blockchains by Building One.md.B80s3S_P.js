import{_ as t,a0 as o,w as c,s as r,ao as i,I as a,x as n,a1 as e,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"想學習區塊鏈？那就用 Python 構建一個 | LCTT x X-CMD","titleTemplate":false,"description":"想學習區塊鏈？那就用 Python 構建一個 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"想學習區塊鏈？那就用 Python 構建一個 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"想學習區塊鏈？那就用 Python 構建一個 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20171024 Learn Blockchains by Building One","title":"想學習區塊鏈？那就用 Python 構建一個","tag":"201807","desc":""},"relativePath":"201807/20171024 Learn Blockchains by Building One.md","filePath":"[post].md"}'),d={name:"201807/20171024 Learn Blockchains by Building One.md"};function h(u,s,f,k,g,b){const p=o("Link");return c(),r("div",null,[s[43]||(s[43]=i('<h1 id="想學習區塊鏈-那就用-python-構建一個" tabindex="-1">想學習區塊鏈？那就用 Python 構建一個 <a class="header-anchor" href="#想學習區塊鏈-那就用-python-構建一個" aria-label="Permalink to “想學習區塊鏈？那就用 Python 構建一個”">​</a></h1><blockquote><p>瞭解區塊鏈是如何工作的最快的方法是構建一個。</p></blockquote><p><img src="https://cdn-images-1.medium.com/max/2000/1*zutLn_-fZZhy7Ari-x-JWQ.jpeg" alt=""></p><p>你看到這篇文章是因為和我一樣，對加密貨幣的大熱而感到興奮。並且想知道區塊鏈是如何工作的 —— 它們背後的技術基礎是什麼。</p><p>但是理解區塊鏈並不容易 —— 至少對我來説是這樣。我徜徉在各種難懂的視頻中，並且因為示例太少而陷入深深的挫敗感中。</p><p>我喜歡在實踐中學習。這會使得我在代碼層面上處理主要問題，從而可以讓我堅持到底。如果你也是這麼做的，在本指南結束的時候，你將擁有一個功能正常的區塊鏈，並且實實在在地理解了它的工作原理。</p><h3 id="開始之前" tabindex="-1">開始之前 … <a class="header-anchor" href="#開始之前" aria-label="Permalink to “開始之前 …”">​</a></h3><p>記住，區塊鏈是一個 <em>不可更改的、有序的</em> 記錄（被稱為區塊）的鏈。它們可以包括<ruby>交易<rt>transaction</rt></ruby>、文件或者任何你希望的真實數據。最重要的是它們是通過使用_哈希_鏈接到一起的。</p>',8)),a("p",null,[s[1]||(s[1]=n("如果你不知道哈希是什麼，",-1)),e(p,{href:"https://learncryptography.com/hash-functions/what-are-hash-functions"},{default:l(()=>[...s[0]||(s[0]=[n("這裏有解釋",-1)])]),_:1}),s[2]||(s[2]=n("。",-1))]),s[44]||(s[44]=a("p",null,[a("strong",null,[a("em",null,"本指南的目標讀者是誰？")]),n(" 你應該能輕鬆地讀、寫一些基本的 Python 代碼，並能夠理解 HTTP 請求是如何工作的，因為我們討論的區塊鏈將基於 HTTP。")],-1)),a("p",null,[s[4]||(s[4]=a("strong",null,[a("em",null,"我需要做什麼？")],-1)),s[5]||(s[5]=n(" 確保安裝了 ",-1)),e(p,{href:"https://www.python.org/downloads/"},{default:l(()=>[...s[3]||(s[3]=[n("Python 3.6",-1)])]),_:1}),s[6]||(s[6]=n("+（以及 ",-1)),s[7]||(s[7]=a("code",null,"pip",-1)),s[8]||(s[8]=n("），還需要去安裝 Flask 和非常好用的 Requests 庫：",-1))]),s[45]||(s[45]=i('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pip install Flask==0.12.2 requests==2.18.4</span></span></code></pre></div>',1)),a("p",null,[s[10]||(s[10]=n("當然，你也需要一個 HTTP 客户端，像 ",-1)),e(p,{href:"https://www.getpostman.com"},{default:l(()=>[...s[9]||(s[9]=[n("Postman",-1)])]),_:1}),s[11]||(s[11]=n(" 或者 cURL。哪個都行。",-1))]),a("p",null,[s[13]||(s[13]=a("strong",null,[a("em",null,"最終的代碼在哪裏可以找到？")],-1)),s[14]||(s[14]=n(" 源代碼在 ",-1)),e(p,{href:"https://github.com/dvf/blockchain"},{default:l(()=>[...s[12]||(s[12]=[n("這裏",-1)])]),_:1}),s[15]||(s[15]=n("。",-1))]),s[46]||(s[46]=a("h3",{id:"第-1-步-構建一個區塊鏈",tabindex:"-1"},[n("第 1 步：構建一個區塊鏈 "),a("a",{class:"header-anchor",href:"#第-1-步-構建一個區塊鏈","aria-label":"Permalink to “第 1 步：構建一個區塊鏈”"},"​")],-1)),a("p",null,[s[18]||(s[18]=n("打開你喜歡的文本編輯器或者 IDE，我個人喜歡 ",-1)),e(p,{href:"https://www.jetbrains.com/pycharm/"},{default:l(()=>[...s[16]||(s[16]=[n("PyCharm",-1)])]),_:1}),s[19]||(s[19]=n("。創建一個名為 ",-1)),s[20]||(s[20]=a("code",null,"blockchain.py",-1)),s[21]||(s[21]=n(" 的新文件。我將僅使用一個文件，如果你看暈了，可以去參考 ",-1)),e(p,{href:"https://github.com/dvf/blockchain"},{default:l(()=>[...s[17]||(s[17]=[n("源代碼",-1)])]),_:1}),s[22]||(s[22]=n("。",-1))]),s[47]||(s[47]=i(`<h4 id="描述一個區塊鏈" tabindex="-1">描述一個區塊鏈 <a class="header-anchor" href="#描述一個區塊鏈" aria-label="Permalink to “描述一個區塊鏈”">​</a></h4><p>我們將創建一個 <code>Blockchain</code> 類，它的構造函數將去初始化一個空列表（去存儲我們的區塊鏈），以及另一個列表去保存交易。下面是我們的類規劃：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Blockchain(object):</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self.chain = []</span></span>
<span class="line"><span>        self.current_transactions = []</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    def new_block(self):</span></span>
<span class="line"><span>        # Creates a new Block and adds it to the chain</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def new_transaction(self):</span></span>
<span class="line"><span>        # Adds a new transaction to the list of transactions</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @staticmethod</span></span>
<span class="line"><span>    def hash(block):</span></span>
<span class="line"><span>        # Hashes a Block</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @property</span></span>
<span class="line"><span>    def last_block(self):</span></span>
<span class="line"><span>        # Returns the last Block in the chain</span></span>
<span class="line"><span>        pass</span></span></code></pre></div><p><em>我們的 Blockchain 類的原型</em></p><p>我們的 <code>Blockchain</code> 類負責管理鏈。它將存儲交易並且有一些為鏈中增加新區塊的輔助性質的方法。現在我們開始去充實一些類的方法。</p><h4 id="區塊是什麼樣子的" tabindex="-1">區塊是什麼樣子的？ <a class="header-anchor" href="#區塊是什麼樣子的" aria-label="Permalink to “區塊是什麼樣子的？”">​</a></h4><p>每個區塊有一個索引、一個時間戳（Unix 時間）、一個交易的列表、一個證明（後面會詳細解釋）、以及前一個區塊的哈希。</p><p>單個區塊的示例應該是下面的樣子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>block = {</span></span>
<span class="line"><span>    &#39;index&#39;: 1,</span></span>
<span class="line"><span>    &#39;timestamp&#39;: 1506057125.900785,</span></span>
<span class="line"><span>    &#39;transactions&#39;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &#39;sender&#39;: &quot;8527147fe1f5426f9dd545de4b27ee00&quot;,</span></span>
<span class="line"><span>            &#39;recipient&#39;: &quot;a77f5cdfa2934df3954a5c7c7da5df1f&quot;,</span></span>
<span class="line"><span>            &#39;amount&#39;: 5,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &#39;proof&#39;: 324984774000,</span></span>
<span class="line"><span>    &#39;previous_hash&#39;: &quot;2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>我們的區塊鏈中的塊示例</em></p><p>此刻，鏈的概念應該非常明顯 —— 每個新區塊包含它自身的信息和前一個區域的哈希。<strong>這一點非常重要，因為這就是區塊鏈不可更改的原因</strong>：如果攻擊者修改了一個早期的區塊，那麼<strong>所有</strong>的後續區塊將包含錯誤的哈希。</p><p><em>這樣做有意義嗎？如果沒有，就讓時間來埋葬它吧 —— 這就是區塊鏈背後的核心思想。</em></p><h4 id="添加交易到一個區塊" tabindex="-1">添加交易到一個區塊 <a class="header-anchor" href="#添加交易到一個區塊" aria-label="Permalink to “添加交易到一個區塊”">​</a></h4><p>我們將需要一種區塊中添加交易的方式。我們的 <code>new_transaction()</code> 就是做這個的，它非常簡單明瞭：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Blockchain(object):</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def new_transaction(self, sender, recipient, amount):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        Creates a new transaction to go into the next mined Block</span></span>
<span class="line"><span>        :param sender: &lt;str&gt; Address of the Sender</span></span>
<span class="line"><span>        :param recipient: &lt;str&gt; Address of the Recipient</span></span>
<span class="line"><span>        :param amount: &lt;int&gt; Amount</span></span>
<span class="line"><span>        :return: &lt;int&gt; The index of the Block that will hold this transaction</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.current_transactions.append({</span></span>
<span class="line"><span>            &#39;sender&#39;: sender,</span></span>
<span class="line"><span>            &#39;recipient&#39;: recipient,</span></span>
<span class="line"><span>            &#39;amount&#39;: amount,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return self.last_block[&#39;index&#39;] + 1</span></span></code></pre></div><p>在 <code>new_transaction()</code> 運行後將在列表中添加一個交易，它返回添加交易後的那個區塊的索引 —— 那個區塊接下來將被挖礦。提交交易的用户後面會用到這些。</p><h4 id="創建新區塊" tabindex="-1">創建新區塊 <a class="header-anchor" href="#創建新區塊" aria-label="Permalink to “創建新區塊”">​</a></h4><p>當我們的 <code>Blockchain</code> 被實例化後，我們需要一個創世區塊（一個沒有祖先的區塊）來播種它。我們也需要去添加一些 “證明” 到創世區塊，它是挖礦（工作量證明 PoW）的成果。我們在後面將討論更多挖礦的內容。</p><p>除了在我們的構造函數中創建創世區塊之外，我們還需要寫一些方法，如 <code>new_block()</code>、<code>new_transaction()</code> 以及 <code>hash()</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import hashlib</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>from time import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Blockchain(object):</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self.current_transactions = []</span></span>
<span class="line"><span>        self.chain = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # Create the genesis block</span></span>
<span class="line"><span>        self.new_block(previous_hash=1, proof=100)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def new_block(self, proof, previous_hash=None):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        Create a new Block in the Blockchain</span></span>
<span class="line"><span>        :param proof: &lt;int&gt; The proof given by the Proof of Work algorithm</span></span>
<span class="line"><span>        :param previous_hash: (Optional) &lt;str&gt; Hash of previous Block</span></span>
<span class="line"><span>        :return: &lt;dict&gt; New Block</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        block = {</span></span>
<span class="line"><span>            &#39;index&#39;: len(self.chain) + 1,</span></span>
<span class="line"><span>            &#39;timestamp&#39;: time(),</span></span>
<span class="line"><span>            &#39;transactions&#39;: self.current_transactions,</span></span>
<span class="line"><span>            &#39;proof&#39;: proof,</span></span>
<span class="line"><span>            &#39;previous_hash&#39;: previous_hash or self.hash(self.chain[-1]),</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # Reset the current list of transactions</span></span>
<span class="line"><span>        self.current_transactions = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.chain.append(block)</span></span>
<span class="line"><span>        return block</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def new_transaction(self, sender, recipient, amount):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        Creates a new transaction to go into the next mined Block</span></span>
<span class="line"><span>        :param sender: &lt;str&gt; Address of the Sender</span></span>
<span class="line"><span>        :param recipient: &lt;str&gt; Address of the Recipient</span></span>
<span class="line"><span>        :param amount: &lt;int&gt; Amount</span></span>
<span class="line"><span>        :return: &lt;int&gt; The index of the Block that will hold this transaction</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        self.current_transactions.append({</span></span>
<span class="line"><span>            &#39;sender&#39;: sender,</span></span>
<span class="line"><span>            &#39;recipient&#39;: recipient,</span></span>
<span class="line"><span>            &#39;amount&#39;: amount,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return self.last_block[&#39;index&#39;] + 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @property</span></span>
<span class="line"><span>    def last_block(self):</span></span>
<span class="line"><span>        return self.chain[-1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @staticmethod</span></span>
<span class="line"><span>    def hash(block):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        Creates a SHA-256 hash of a Block</span></span>
<span class="line"><span>        :param block: &lt;dict&gt; Block</span></span>
<span class="line"><span>        :return: &lt;str&gt;</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # We must make sure that the Dictionary is Ordered, or we&#39;ll have inconsistent hashes</span></span>
<span class="line"><span>        block_string = json.dumps(block, sort_keys=True).encode()</span></span>
<span class="line"><span>        return hashlib.sha256(block_string).hexdigest()</span></span></code></pre></div><p>上面的內容簡單明瞭 —— 我添加了一些註釋和文檔字符串，以使代碼清晰可讀。到此為止，表示我們的區塊鏈基本上要完成了。但是，你肯定想知道新區塊是如何被創建、打造或者挖礦的。</p><h4 id="理解工作量證明" tabindex="-1">理解工作量證明 <a class="header-anchor" href="#理解工作量證明" aria-label="Permalink to “理解工作量證明”">​</a></h4><p><ruby>工作量證明<rt>Proof of Work</rt></ruby>（PoW）算法是在區塊鏈上創建或者挖出新區塊的方法。PoW 的目標是去撞出一個能夠解決問題的數字。這個數字必須滿足“找到它很困難但是驗證它很容易”的條件 —— 網絡上的任何人都可以計算它。這就是 PoW 背後的核心思想。</p><p>我們來看一個非常簡單的示例來幫助你瞭解它。</p><p>我們來解決一個問題，一些整數 <code>x</code> 乘以另外一個整數 <code>y</code> 的結果的哈希值必須以 <code>0</code> 結束。因此，<code>hash(x * y) = ac23dc…0</code>。為簡單起見，我們先把 <code>x = 5</code> 固定下來。在 Python 中的實現如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from hashlib import sha256</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x = 5</span></span>
<span class="line"><span>y = 0  # We don&#39;t know what y should be yet...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while sha256(f&#39;{x*y}&#39;.encode()).hexdigest()[-1] != &quot;0&quot;:</span></span>
<span class="line"><span>    y += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(f&#39;The solution is y = {y}&#39;)</span></span></code></pre></div><p>在這裏的答案是 <code>y = 21</code>。因為它產生的哈希值是以 0 結尾的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>hash(5 * 21) = 1253e9373e...5e3600155e860</span></span></code></pre></div>`,28)),a("p",null,[s[24]||(s[24]=n("在比特幣中，工作量證明算法被稱之為 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Hashcash"},{default:l(()=>[...s[23]||(s[23]=[n("Hashcash",-1)])]),_:1}),s[25]||(s[25]=n("。與我們上面的例子沒有太大的差別。這就是礦工們進行競賽以決定誰來創建新塊的算法。一般來説，其難度取決於在一個字符串中所查找的字符數量。然後礦工會因其做出的求解而得到獎勵的幣——在一個交易當中。",-1))]),s[48]||(s[48]=i(`<p>網絡上的任何人都可以很容易地去核驗它的答案。</p><h4 id="實現基本的-pow" tabindex="-1">實現基本的 PoW <a class="header-anchor" href="#實現基本的-pow" aria-label="Permalink to “實現基本的 PoW”">​</a></h4><p>為我們的區塊鏈來實現一個簡單的算法。我們的規則與上面的示例類似：</p><blockquote><p>找出一個數字 <code>p</code>，它與前一個區塊的答案進行哈希運算得到一個哈希值，這個哈希值的前四位必須是由 <code>0</code> 組成。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import hashlib</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from time import time</span></span>
<span class="line"><span>from uuid import uuid4</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Blockchain(object):</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    def proof_of_work(self, last_proof):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        Simple Proof of Work Algorithm:</span></span>
<span class="line"><span>         - Find a number p&#39; such that hash(pp&#39;) contains leading 4 zeroes, where p is the previous p&#39;</span></span>
<span class="line"><span>         - p is the previous proof, and p&#39; is the new proof</span></span>
<span class="line"><span>        :param last_proof: &lt;int&gt;</span></span>
<span class="line"><span>        :return: &lt;int&gt;</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        proof = 0</span></span>
<span class="line"><span>        while self.valid_proof(last_proof, proof) is False:</span></span>
<span class="line"><span>            proof += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return proof</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @staticmethod</span></span>
<span class="line"><span>    def valid_proof(last_proof, proof):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        Validates the Proof: Does hash(last_proof, proof) contain 4 leading zeroes?</span></span>
<span class="line"><span>        :param last_proof: &lt;int&gt; Previous Proof</span></span>
<span class="line"><span>        :param proof: &lt;int&gt; Current Proof</span></span>
<span class="line"><span>        :return: &lt;bool&gt; True if correct, False if not.</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        guess = f&#39;{last_proof}{proof}&#39;.encode()</span></span>
<span class="line"><span>        guess_hash = hashlib.sha256(guess).hexdigest()</span></span>
<span class="line"><span>		return guess_hash[:4] == &quot;0000&quot;</span></span></code></pre></div><p>為了調整算法的難度，我們可以修改前導 0 的數量。但是 4 個零已經足夠難了。你會發現，將前導 0 的數量每增加一，那麼找到正確答案所需要的時間難度將大幅增加。</p><p>我們的類基本完成了，現在我們開始去使用 HTTP 請求與它交互。</p><h3 id="第-2-步-以-api-方式去訪問我們的區塊鏈" tabindex="-1">第 2 步：以 API 方式去訪問我們的區塊鏈 <a class="header-anchor" href="#第-2-步-以-api-方式去訪問我們的區塊鏈" aria-label="Permalink to “第 2 步：以 API 方式去訪問我們的區塊鏈”">​</a></h3><p>我們將使用 Python Flask 框架。它是個微框架，使用它去做端點到 Python 函數的映射很容易。這樣我們可以使用 HTTP 請求基於 web 來與我們的區塊鏈對話。</p><p>我們將創建三個方法：</p><ul><li><code>/transactions/new</code> 在一個區塊上創建一個新交易</li><li><code>/mine</code> 告訴我們的服務器去挖礦一個新區塊</li><li><code>/chain</code> 返回完整的區塊鏈</li></ul><h4 id="配置-flask" tabindex="-1">配置 Flask <a class="header-anchor" href="#配置-flask" aria-label="Permalink to “配置 Flask”">​</a></h4><p>我們的 “服務器” 將在我們的區塊鏈網絡中產生一個單個的節點。我們來創建一些樣板代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import hashlib</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>from textwrap import dedent</span></span>
<span class="line"><span>from time import time</span></span>
<span class="line"><span>from uuid import uuid4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from flask import Flask</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Blockchain(object):</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Instantiate our Node</span></span>
<span class="line"><span>app = Flask(__name__)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Generate a globally unique address for this node</span></span>
<span class="line"><span>node_identifier = str(uuid4()).replace(&#39;-&#39;, &#39;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Instantiate the Blockchain</span></span>
<span class="line"><span>blockchain = Blockchain()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>@app.route(&#39;/mine&#39;, methods=[&#39;GET&#39;])</span></span>
<span class="line"><span>def mine():</span></span>
<span class="line"><span>    return &quot;We&#39;ll mine a new Block&quot;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>@app.route(&#39;/transactions/new&#39;, methods=[&#39;POST&#39;])</span></span>
<span class="line"><span>def new_transaction():</span></span>
<span class="line"><span>    return &quot;We&#39;ll add a new transaction&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@app.route(&#39;/chain&#39;, methods=[&#39;GET&#39;])</span></span>
<span class="line"><span>def full_chain():</span></span>
<span class="line"><span>    response = {</span></span>
<span class="line"><span>        &#39;chain&#39;: blockchain.chain,</span></span>
<span class="line"><span>        &#39;length&#39;: len(blockchain.chain),</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return jsonify(response), 200</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    app.run(host=&#39;0.0.0.0&#39;, port=5000)</span></span></code></pre></div><p>對上面的代碼，我們做添加一些詳細的解釋：</p>`,15)),a("ul",null,[a("li",null,[s[27]||(s[27]=n("Line 15：實例化我們的節點。更多關於 Flask 的知識讀 ",-1)),e(p,{href:"http://flask.pocoo.org/docs/0.12/quickstart/#a-minimal-application"},{default:l(()=>[...s[26]||(s[26]=[n("這裏",-1)])]),_:1}),s[28]||(s[28]=n("。",-1))]),s[29]||(s[29]=i("<li>Line 18：為我們的節點創建一個隨機的名字。</li><li>Line 21：實例化我們的區塊鏈類。</li><li>Line 24–26：創建 <code>/mine</code> 端點，這是一個 GET 請求。</li><li>Line 28–30：創建 <code>/transactions/new</code> 端點，這是一個 POST 請求，因為我們要發送數據給它。</li><li>Line 32–38：創建 <code>/chain</code> 端點，它返回全部區塊鏈。</li><li>Line 40–41：在 5000 端口上運行服務器。</li>",6))]),s[49]||(s[49]=i(`<h4 id="交易端點" tabindex="-1">交易端點 <a class="header-anchor" href="#交易端點" aria-label="Permalink to “交易端點”">​</a></h4><p>這就是對一個交易的請求，它是用户發送給服務器的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span> &quot;sender&quot;: &quot;my address&quot;,</span></span>
<span class="line"><span> &quot;recipient&quot;: &quot;someone else&#39;s address&quot;,</span></span>
<span class="line"><span> &quot;amount&quot;: 5</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>因為我們已經有了添加交易到塊中的類方法，剩下的就很容易了。讓我們寫個函數來添加交易：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import hashlib</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>from textwrap import dedent</span></span>
<span class="line"><span>from time import time</span></span>
<span class="line"><span>from uuid import uuid4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from flask import Flask, jsonify, request</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@app.route(&#39;/transactions/new&#39;, methods=[&#39;POST&#39;])</span></span>
<span class="line"><span>def new_transaction():</span></span>
<span class="line"><span>    values = request.get_json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Check that the required fields are in the POST&#39;ed data</span></span>
<span class="line"><span>    required = [&#39;sender&#39;, &#39;recipient&#39;, &#39;amount&#39;]</span></span>
<span class="line"><span>    if not all(k in values for k in required):</span></span>
<span class="line"><span>        return &#39;Missing values&#39;, 400</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Create a new Transaction</span></span>
<span class="line"><span>    index = blockchain.new_transaction(values[&#39;sender&#39;], values[&#39;recipient&#39;], values[&#39;amount&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    response = {&#39;message&#39;: f&#39;Transaction will be added to Block {index}&#39;}</span></span>
<span class="line"><span>	return jsonify(response), 201</span></span></code></pre></div><p><em>創建交易的方法</em></p><h4 id="挖礦端點" tabindex="-1">挖礦端點 <a class="header-anchor" href="#挖礦端點" aria-label="Permalink to “挖礦端點”">​</a></h4><p>我們的挖礦端點是見證奇蹟的地方，它實現起來很容易。它要做三件事情：</p><ol><li>計算工作量證明</li><li>因為礦工（我們）添加一個交易而獲得報酬，獎勵礦工（我們） 1 個幣</li><li>通過將它添加到鏈上而打造一個新區塊</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import hashlib</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from time import time</span></span>
<span class="line"><span>from uuid import uuid4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from flask import Flask, jsonify, request</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@app.route(&#39;/mine&#39;, methods=[&#39;GET&#39;])</span></span>
<span class="line"><span>def mine():</span></span>
<span class="line"><span>    # We run the proof of work algorithm to get the next proof...</span></span>
<span class="line"><span>    last_block = blockchain.last_block</span></span>
<span class="line"><span>    last_proof = last_block[&#39;proof&#39;]</span></span>
<span class="line"><span>    proof = blockchain.proof_of_work(last_proof)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # We must receive a reward for finding the proof.</span></span>
<span class="line"><span>    # The sender is &quot;0&quot; to signify that this node has mined a new coin.</span></span>
<span class="line"><span>    blockchain.new_transaction(</span></span>
<span class="line"><span>        sender=&quot;0&quot;,</span></span>
<span class="line"><span>        recipient=node_identifier,</span></span>
<span class="line"><span>        amount=1,</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Forge the new Block by adding it to the chain</span></span>
<span class="line"><span>    previous_hash = blockchain.hash(last_block)</span></span>
<span class="line"><span>    block = blockchain.new_block(proof, previous_hash)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    response = {</span></span>
<span class="line"><span>        &#39;message&#39;: &quot;New Block Forged&quot;,</span></span>
<span class="line"><span>        &#39;index&#39;: block[&#39;index&#39;],</span></span>
<span class="line"><span>        &#39;transactions&#39;: block[&#39;transactions&#39;],</span></span>
<span class="line"><span>        &#39;proof&#39;: block[&#39;proof&#39;],</span></span>
<span class="line"><span>        &#39;previous_hash&#39;: block[&#39;previous_hash&#39;],</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>	return jsonify(response), 200</span></span></code></pre></div><p>注意，挖掘出的區塊的接收方是我們的節點地址。現在，我們所做的大部分工作都只是與我們的 <code>Blockchain</code> 類的方法進行交互的。到目前為止，我們已經做完了，現在開始與我們的區塊鏈去交互。</p><h3 id="第-3-步-與我們的區塊鏈去交互" tabindex="-1">第 3 步：與我們的區塊鏈去交互 <a class="header-anchor" href="#第-3-步-與我們的區塊鏈去交互" aria-label="Permalink to “第 3 步：與我們的區塊鏈去交互”">​</a></h3><p>你可以使用簡單的 cURL 或者 Postman 通過網絡與我們的 API 去交互。</p><p>啓動服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python blockchain.py</span></span>
<span class="line"><span>* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)</span></span></code></pre></div><p>我們通過生成一個 <code>GET</code> 請求到 <code>http://localhost:5000/mine</code> 去嘗試挖一個區塊：</p><p><img src="https://cdn-images-1.medium.com/max/1600/1*ufYwRmWgQeA-Jxg0zgYLOA.png" alt=""></p><p><em>使用 Postman 去生成一個 GET 請求</em></p><p>我們通過生成一個 <code>POST</code> 請求到 <code>http://localhost:5000/transactions/new</code> 去創建一個區塊，請求數據包含我們的交易結構：</p><p><img src="https://cdn-images-1.medium.com/max/1600/1*O89KNbEWj1vigMZ6VelHAg.png" alt=""></p><p><em>使用 Postman 去生成一個 POST 請求</em></p><p>如果你不使用 Postman，也可以使用 cURL 去生成一個等價的請求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -X POST -H &quot;Content-Type: application/json&quot; -d &#39;{</span></span>
<span class="line"><span> &quot;sender&quot;: &quot;d4ee26eee15148ee92c6cd394edd974e&quot;,</span></span>
<span class="line"><span> &quot;recipient&quot;: &quot;someone-other-address&quot;,</span></span>
<span class="line"><span> &quot;amount&quot;: 5</span></span>
<span class="line"><span>}&#39; &quot;http://localhost:5000/transactions/new&quot;</span></span></code></pre></div><p>我重啓動我的服務器，然後我挖到了兩個區塊，這樣總共有了 3 個區塊。我們通過請求 <code>http://localhost:5000/chain</code> 來檢查整個區塊鏈：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;chain&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;index&quot;: 1,</span></span>
<span class="line"><span>      &quot;previous_hash&quot;: 1,</span></span>
<span class="line"><span>      &quot;proof&quot;: 100,</span></span>
<span class="line"><span>      &quot;timestamp&quot;: 1506280650.770839,</span></span>
<span class="line"><span>      &quot;transactions&quot;: []</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;index&quot;: 2,</span></span>
<span class="line"><span>      &quot;previous_hash&quot;: &quot;c099bc...bfb7&quot;,</span></span>
<span class="line"><span>      &quot;proof&quot;: 35293,</span></span>
<span class="line"><span>      &quot;timestamp&quot;: 1506280664.717925,</span></span>
<span class="line"><span>      &quot;transactions&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;amount&quot;: 1,</span></span>
<span class="line"><span>          &quot;recipient&quot;: &quot;8bbcb347e0634905b0cac7955bae152b&quot;,</span></span>
<span class="line"><span>          &quot;sender&quot;: &quot;0&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;index&quot;: 3,</span></span>
<span class="line"><span>      &quot;previous_hash&quot;: &quot;eff91a...10f2&quot;,</span></span>
<span class="line"><span>      &quot;proof&quot;: 35089,</span></span>
<span class="line"><span>      &quot;timestamp&quot;: 1506280666.1086972,</span></span>
<span class="line"><span>      &quot;transactions&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;amount&quot;: 1,</span></span>
<span class="line"><span>          &quot;recipient&quot;: &quot;8bbcb347e0634905b0cac7955bae152b&quot;,</span></span>
<span class="line"><span>          &quot;sender&quot;: &quot;0&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;length&quot;: 3</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="第-4-步-共識" tabindex="-1">第 4 步：共識 <a class="header-anchor" href="#第-4-步-共識" aria-label="Permalink to “第 4 步：共識”">​</a></h3><p>這是很酷的一個地方。我們已經有了一個基本的區塊鏈，它可以接收交易並允許我們去挖掘出新區塊。但是區塊鏈的整個重點在於它是<ruby>去中心化的<rt>decentralized</rt></ruby>。而如果它們是去中心化的，那我們如何才能確保它們表示在同一個區塊鏈上？這就是<ruby>共識<rt>Consensus</rt></ruby>問題，如果我們希望在我們的網絡上有多於一個的節點運行，那麼我們將必須去實現一個共識算法。</p><h4 id="註冊新節點" tabindex="-1">註冊新節點 <a class="header-anchor" href="#註冊新節點" aria-label="Permalink to “註冊新節點”">​</a></h4><p>在我們能實現一個共識算法之前，我們需要一個辦法去讓一個節點知道網絡上的鄰居節點。我們網絡上的每個節點都保留有一個該網絡上其它節點的註冊信息。因此，我們需要更多的端點：</p><ol><li><code>/nodes/register</code> 以 URL 的形式去接受一個新節點列表</li><li><code>/nodes/resolve</code> 去實現我們的共識算法，由它來解決任何的衝突 —— 確保節點有一個正確的鏈。</li></ol><p>我們需要去修改我們的區塊鏈的構造函數，來提供一個註冊節點的方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>from urllib.parse import urlparse</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Blockchain(object):</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>        self.nodes = set()</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def register_node(self, address):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        Add a new node to the list of nodes</span></span>
<span class="line"><span>        :param address: &lt;str&gt; Address of node. Eg. &#39;http://192.168.0.5:5000&#39;</span></span>
<span class="line"><span>        :return: None</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        parsed_url = urlparse(address)</span></span>
<span class="line"><span>		self.nodes.add(parsed_url.netloc)</span></span></code></pre></div><p><em>一個添加鄰居節點到我們的網絡的方法</em></p><p>注意，我們將使用一個 <code>set()</code> 去保存節點列表。這是一個非常合算的方式，它將確保添加的節點是<ruby>冪等<rt>idempotent</rt></ruby>的 —— 這意味着不論你將特定的節點添加多少次，它都是精確地只出現一次。</p><h4 id="實現共識算法" tabindex="-1">實現共識算法 <a class="header-anchor" href="#實現共識算法" aria-label="Permalink to “實現共識算法”">​</a></h4><p>正如前面提到的，當一個節點與另一個節點有不同的鏈時就會產生衝突。為解決衝突，我們制定一個規則，即最長的有效的鏈才是權威的鏈。換句話説就是，網絡上最長的鏈就是事實上的區塊鏈。使用這個算法，可以在我們的網絡上節點之間達到共識。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>import requests</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Blockchain(object)</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def valid_chain(self, chain):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        Determine if a given blockchain is valid</span></span>
<span class="line"><span>        :param chain: &lt;list&gt; A blockchain</span></span>
<span class="line"><span>        :return: &lt;bool&gt; True if valid, False if not</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        last_block = chain[0]</span></span>
<span class="line"><span>        current_index = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while current_index &lt; len(chain):</span></span>
<span class="line"><span>            block = chain[current_index]</span></span>
<span class="line"><span>            print(f&#39;{last_block}&#39;)</span></span>
<span class="line"><span>            print(f&#39;{block}&#39;)</span></span>
<span class="line"><span>            print(&quot;\\n-----------\\n&quot;)</span></span>
<span class="line"><span>            # Check that the hash of the block is correct</span></span>
<span class="line"><span>            if block[&#39;previous_hash&#39;] != self.hash(last_block):</span></span>
<span class="line"><span>                return False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            # Check that the Proof of Work is correct</span></span>
<span class="line"><span>            if not self.valid_proof(last_block[&#39;proof&#39;], block[&#39;proof&#39;]):</span></span>
<span class="line"><span>                return False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            last_block = block</span></span>
<span class="line"><span>            current_index += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def resolve_conflicts(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        This is our Consensus Algorithm, it resolves conflicts</span></span>
<span class="line"><span>        by replacing our chain with the longest one in the network.</span></span>
<span class="line"><span>        :return: &lt;bool&gt; True if our chain was replaced, False if not</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        neighbours = self.nodes</span></span>
<span class="line"><span>        new_chain = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # We&#39;re only looking for chains longer than ours</span></span>
<span class="line"><span>        max_length = len(self.chain)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # Grab and verify the chains from all the nodes in our network</span></span>
<span class="line"><span>        for node in neighbours:</span></span>
<span class="line"><span>            response = requests.get(f&#39;http://{node}/chain&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if response.status_code == 200:</span></span>
<span class="line"><span>                length = response.json()[&#39;length&#39;]</span></span>
<span class="line"><span>                chain = response.json()[&#39;chain&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                # Check if the length is longer and the chain is valid</span></span>
<span class="line"><span>                if length &gt; max_length and self.valid_chain(chain):</span></span>
<span class="line"><span>                    max_length = length</span></span>
<span class="line"><span>                    new_chain = chain</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # Replace our chain if we discovered a new, valid chain longer than ours</span></span>
<span class="line"><span>        if new_chain:</span></span>
<span class="line"><span>            self.chain = new_chain</span></span>
<span class="line"><span>            return True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		return False</span></span></code></pre></div><p>第一個方法 <code>valid_chain()</code> 是負責來檢查鏈是否有效，它通過遍歷區塊鏈上的每個區塊並驗證它們的哈希和工作量證明來檢查這個區塊鏈是否有效。</p><p><code>resolve_conflicts()</code> 方法用於遍歷所有的鄰居節點，下載它們的鏈並使用上面的方法去驗證它們是否有效。<strong>如果找到有效的鏈，確定誰是最長的鏈，然後我們就用最長的鏈來替換我們的當前的鏈。</strong></p><p>在我們的 API 上來註冊兩個端點，一個用於添加鄰居節點，另一個用於解決衝突：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@app.route(&#39;/nodes/register&#39;, methods=[&#39;POST&#39;])</span></span>
<span class="line"><span>def register_nodes():</span></span>
<span class="line"><span>    values = request.get_json()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    nodes = values.get(&#39;nodes&#39;)</span></span>
<span class="line"><span>    if nodes is None:</span></span>
<span class="line"><span>        return &quot;Error: Please supply a valid list of nodes&quot;, 400</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for node in nodes:</span></span>
<span class="line"><span>        blockchain.register_node(node)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    response = {</span></span>
<span class="line"><span>        &#39;message&#39;: &#39;New nodes have been added&#39;,</span></span>
<span class="line"><span>        &#39;total_nodes&#39;: list(blockchain.nodes),</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return jsonify(response), 201</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>@app.route(&#39;/nodes/resolve&#39;, methods=[&#39;GET&#39;])</span></span>
<span class="line"><span>def consensus():</span></span>
<span class="line"><span>    replaced = blockchain.resolve_conflicts()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if replaced:</span></span>
<span class="line"><span>        response = {</span></span>
<span class="line"><span>            &#39;message&#39;: &#39;Our chain was replaced&#39;,</span></span>
<span class="line"><span>            &#39;new_chain&#39;: blockchain.chain</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        response = {</span></span>
<span class="line"><span>            &#39;message&#39;: &#39;Our chain is authoritative&#39;,</span></span>
<span class="line"><span>            &#39;chain&#39;: blockchain.chain</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return jsonify(response), 200</span></span></code></pre></div><p>這種情況下，如果你願意，可以使用不同的機器來做，然後在你的網絡上啓動不同的節點。或者是在同一台機器上使用不同的端口啓動另一個進程。我是在我的機器上使用了不同的端口啓動了另一個節點，並將它註冊到了當前的節點上。因此，我現在有了兩個節點：<code>http://localhost:5000</code> 和 <code>http://localhost:5001</code>。</p><p><img src="https://cdn-images-1.medium.com/max/1600/1*Dd78u-gmtwhQWHhPG3qMTQ.png" alt=""></p><p><em>註冊一個新節點</em></p><p>我接着在節點 2 上挖出一些新區塊，以確保這個鏈是最長的。之後我在節點 1 上以 <code>GET</code> 方式調用了 <code>/nodes/resolve</code>，這時，節點 1 上的鏈被共識算法替換成節點 2 上的鏈了：</p><p><img src="https://cdn-images-1.medium.com/max/1600/1*SGO5MWVf7GguIxfz6S8NVw.png" alt=""></p><p><em>工作中的共識算法</em></p><p>然後將它們封裝起來 … 找一些朋友來幫你一起測試你的區塊鏈。</p><hr><p>我希望以上內容能夠鼓舞你去創建一些新的東西。我是加密貨幣的狂熱擁護者，因此我相信區塊鏈將迅速改變我們對經濟、政府和記錄保存的看法。</p><p><strong>更新：</strong> 我正計劃繼續它的第二部分，其中我將擴展我們的區塊鏈，使它具備交易驗證機制，同時討論一些你可以在其上產生你自己的區塊鏈的方式。（LCTT 譯註：第二篇並沒有~！）</p><hr>`,52)),a("p",null,[s[31]||(s[31]=n("via: ",-1)),e(p,{href:"https://hackernoon.com/learn-blockchains-by-building-one-117428612f46"},{default:l(()=>[...s[30]||(s[30]=[n("https://hackernoon.com/learn-blockchains-by-building-one-117428612f46",-1)])]),_:1})]),a("p",null,[s[35]||(s[35]=n("作者：",-1)),e(p,{href:"https://hackernoon.com/@vanflymen?source=post_header_lockup"},{default:l(()=>[...s[32]||(s[32]=[n("Daniel van Flymen",-1)])]),_:1}),s[36]||(s[36]=n(" 譯者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:l(()=>[...s[33]||(s[33]=[n("qhwdw",-1)])]),_:1}),s[37]||(s[37]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[34]||(s[34]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[40]||(s[40]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[38]||(s[38]=[n("LCTT",-1)])]),_:1}),s[41]||(s[41]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[39]||(s[39]=[n("Linux中國",-1)])]),_:1}),s[42]||(s[42]=n(" 榮譽推出",-1))])])}const y=t(d,[["render",h]]);export{_ as __pageData,y as default};
