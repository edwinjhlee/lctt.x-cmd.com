import{_ as t,a0 as o,w as c,s as r,ao as i,I as a,x as n,a1 as e,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"想学习区块链？那就用 Python 构建一个 | LCTT x X-CMD","titleTemplate":false,"description":"想学习区块链？那就用 Python 构建一个 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"想学习区块链？那就用 Python 构建一个 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"想学习区块链？那就用 Python 构建一个 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20171024 Learn Blockchains by Building One","title":"想学习区块链？那就用 Python 构建一个","tag":"201807","desc":""},"relativePath":"201807/20171024 Learn Blockchains by Building One.md","filePath":"[post].md"}'),d={name:"201807/20171024 Learn Blockchains by Building One.md"};function h(u,s,f,k,g,b){const p=o("Link");return c(),r("div",null,[s[43]||(s[43]=i('<h1 id="想学习区块链-那就用-python-构建一个" tabindex="-1">想学习区块链？那就用 Python 构建一个 <a class="header-anchor" href="#想学习区块链-那就用-python-构建一个" aria-label="Permalink to “想学习区块链？那就用 Python 构建一个”">​</a></h1><blockquote><p>了解区块链是如何工作的最快的方法是构建一个。</p></blockquote><p><img src="https://cdn-images-1.medium.com/max/2000/1*zutLn_-fZZhy7Ari-x-JWQ.jpeg" alt=""></p><p>你看到这篇文章是因为和我一样，对加密货币的大热而感到兴奋。并且想知道区块链是如何工作的 —— 它们背后的技术基础是什么。</p><p>但是理解区块链并不容易 —— 至少对我来说是这样。我徜徉在各种难懂的视频中，并且因为示例太少而陷入深深的挫败感中。</p><p>我喜欢在实践中学习。这会使得我在代码层面上处理主要问题，从而可以让我坚持到底。如果你也是这么做的，在本指南结束的时候，你将拥有一个功能正常的区块链，并且实实在在地理解了它的工作原理。</p><h3 id="开始之前" tabindex="-1">开始之前 … <a class="header-anchor" href="#开始之前" aria-label="Permalink to “开始之前 …”">​</a></h3><p>记住，区块链是一个 <em>不可更改的、有序的</em> 记录（被称为区块）的链。它们可以包括<ruby>交易<rt>transaction</rt></ruby>、文件或者任何你希望的真实数据。最重要的是它们是通过使用_哈希_链接到一起的。</p>',8)),a("p",null,[s[1]||(s[1]=n("如果你不知道哈希是什么，",-1)),e(p,{href:"https://learncryptography.com/hash-functions/what-are-hash-functions"},{default:l(()=>[...s[0]||(s[0]=[n("这里有解释",-1)])]),_:1}),s[2]||(s[2]=n("。",-1))]),s[44]||(s[44]=a("p",null,[a("strong",null,[a("em",null,"本指南的目标读者是谁？")]),n(" 你应该能轻松地读、写一些基本的 Python 代码，并能够理解 HTTP 请求是如何工作的，因为我们讨论的区块链将基于 HTTP。")],-1)),a("p",null,[s[4]||(s[4]=a("strong",null,[a("em",null,"我需要做什么？")],-1)),s[5]||(s[5]=n(" 确保安装了 ",-1)),e(p,{href:"https://www.python.org/downloads/"},{default:l(()=>[...s[3]||(s[3]=[n("Python 3.6",-1)])]),_:1}),s[6]||(s[6]=n("+（以及 ",-1)),s[7]||(s[7]=a("code",null,"pip",-1)),s[8]||(s[8]=n("），还需要去安装 Flask 和非常好用的 Requests 库：",-1))]),s[45]||(s[45]=i('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pip install Flask==0.12.2 requests==2.18.4</span></span></code></pre></div>',1)),a("p",null,[s[10]||(s[10]=n("当然，你也需要一个 HTTP 客户端，像 ",-1)),e(p,{href:"https://www.getpostman.com"},{default:l(()=>[...s[9]||(s[9]=[n("Postman",-1)])]),_:1}),s[11]||(s[11]=n(" 或者 cURL。哪个都行。",-1))]),a("p",null,[s[13]||(s[13]=a("strong",null,[a("em",null,"最终的代码在哪里可以找到？")],-1)),s[14]||(s[14]=n(" 源代码在 ",-1)),e(p,{href:"https://github.com/dvf/blockchain"},{default:l(()=>[...s[12]||(s[12]=[n("这里",-1)])]),_:1}),s[15]||(s[15]=n("。",-1))]),s[46]||(s[46]=a("h3",{id:"第-1-步-构建一个区块链",tabindex:"-1"},[n("第 1 步：构建一个区块链 "),a("a",{class:"header-anchor",href:"#第-1-步-构建一个区块链","aria-label":"Permalink to “第 1 步：构建一个区块链”"},"​")],-1)),a("p",null,[s[18]||(s[18]=n("打开你喜欢的文本编辑器或者 IDE，我个人喜欢 ",-1)),e(p,{href:"https://www.jetbrains.com/pycharm/"},{default:l(()=>[...s[16]||(s[16]=[n("PyCharm",-1)])]),_:1}),s[19]||(s[19]=n("。创建一个名为 ",-1)),s[20]||(s[20]=a("code",null,"blockchain.py",-1)),s[21]||(s[21]=n(" 的新文件。我将仅使用一个文件，如果你看晕了，可以去参考 ",-1)),e(p,{href:"https://github.com/dvf/blockchain"},{default:l(()=>[...s[17]||(s[17]=[n("源代码",-1)])]),_:1}),s[22]||(s[22]=n("。",-1))]),s[47]||(s[47]=i(`<h4 id="描述一个区块链" tabindex="-1">描述一个区块链 <a class="header-anchor" href="#描述一个区块链" aria-label="Permalink to “描述一个区块链”">​</a></h4><p>我们将创建一个 <code>Blockchain</code> 类，它的构造函数将去初始化一个空列表（去存储我们的区块链），以及另一个列表去保存交易。下面是我们的类规划：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Blockchain(object):</span></span>
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
<span class="line"><span>        pass</span></span></code></pre></div><p><em>我们的 Blockchain 类的原型</em></p><p>我们的 <code>Blockchain</code> 类负责管理链。它将存储交易并且有一些为链中增加新区块的辅助性质的方法。现在我们开始去充实一些类的方法。</p><h4 id="区块是什么样子的" tabindex="-1">区块是什么样子的？ <a class="header-anchor" href="#区块是什么样子的" aria-label="Permalink to “区块是什么样子的？”">​</a></h4><p>每个区块有一个索引、一个时间戳（Unix 时间）、一个交易的列表、一个证明（后面会详细解释）、以及前一个区块的哈希。</p><p>单个区块的示例应该是下面的样子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>block = {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p><em>我们的区块链中的块示例</em></p><p>此刻，链的概念应该非常明显 —— 每个新区块包含它自身的信息和前一个区域的哈希。<strong>这一点非常重要，因为这就是区块链不可更改的原因</strong>：如果攻击者修改了一个早期的区块，那么<strong>所有</strong>的后续区块将包含错误的哈希。</p><p><em>这样做有意义吗？如果没有，就让时间来埋葬它吧 —— 这就是区块链背后的核心思想。</em></p><h4 id="添加交易到一个区块" tabindex="-1">添加交易到一个区块 <a class="header-anchor" href="#添加交易到一个区块" aria-label="Permalink to “添加交易到一个区块”">​</a></h4><p>我们将需要一种区块中添加交易的方式。我们的 <code>new_transaction()</code> 就是做这个的，它非常简单明了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Blockchain(object):</span></span>
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
<span class="line"><span>        return self.last_block[&#39;index&#39;] + 1</span></span></code></pre></div><p>在 <code>new_transaction()</code> 运行后将在列表中添加一个交易，它返回添加交易后的那个区块的索引 —— 那个区块接下来将被挖矿。提交交易的用户后面会用到这些。</p><h4 id="创建新区块" tabindex="-1">创建新区块 <a class="header-anchor" href="#创建新区块" aria-label="Permalink to “创建新区块”">​</a></h4><p>当我们的 <code>Blockchain</code> 被实例化后，我们需要一个创世区块（一个没有祖先的区块）来播种它。我们也需要去添加一些 “证明” 到创世区块，它是挖矿（工作量证明 PoW）的成果。我们在后面将讨论更多挖矿的内容。</p><p>除了在我们的构造函数中创建创世区块之外，我们还需要写一些方法，如 <code>new_block()</code>、<code>new_transaction()</code> 以及 <code>hash()</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import hashlib</span></span>
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
<span class="line"><span>        return hashlib.sha256(block_string).hexdigest()</span></span></code></pre></div><p>上面的内容简单明了 —— 我添加了一些注释和文档字符串，以使代码清晰可读。到此为止，表示我们的区块链基本上要完成了。但是，你肯定想知道新区块是如何被创建、打造或者挖矿的。</p><h4 id="理解工作量证明" tabindex="-1">理解工作量证明 <a class="header-anchor" href="#理解工作量证明" aria-label="Permalink to “理解工作量证明”">​</a></h4><p><ruby>工作量证明<rt>Proof of Work</rt></ruby>（PoW）算法是在区块链上创建或者挖出新区块的方法。PoW 的目标是去撞出一个能够解决问题的数字。这个数字必须满足“找到它很困难但是验证它很容易”的条件 —— 网络上的任何人都可以计算它。这就是 PoW 背后的核心思想。</p><p>我们来看一个非常简单的示例来帮助你了解它。</p><p>我们来解决一个问题，一些整数 <code>x</code> 乘以另外一个整数 <code>y</code> 的结果的哈希值必须以 <code>0</code> 结束。因此，<code>hash(x * y) = ac23dc…0</code>。为简单起见，我们先把 <code>x = 5</code> 固定下来。在 Python 中的实现如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from hashlib import sha256</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x = 5</span></span>
<span class="line"><span>y = 0  # We don&#39;t know what y should be yet...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while sha256(f&#39;{x*y}&#39;.encode()).hexdigest()[-1] != &quot;0&quot;:</span></span>
<span class="line"><span>    y += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(f&#39;The solution is y = {y}&#39;)</span></span></code></pre></div><p>在这里的答案是 <code>y = 21</code>。因为它产生的哈希值是以 0 结尾的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>hash(5 * 21) = 1253e9373e...5e3600155e860</span></span></code></pre></div>`,28)),a("p",null,[s[24]||(s[24]=n("在比特币中，工作量证明算法被称之为 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Hashcash"},{default:l(()=>[...s[23]||(s[23]=[n("Hashcash",-1)])]),_:1}),s[25]||(s[25]=n("。与我们上面的例子没有太大的差别。这就是矿工们进行竞赛以决定谁来创建新块的算法。一般来说，其难度取决于在一个字符串中所查找的字符数量。然后矿工会因其做出的求解而得到奖励的币——在一个交易当中。",-1))]),s[48]||(s[48]=i(`<p>网络上的任何人都可以很容易地去核验它的答案。</p><h4 id="实现基本的-pow" tabindex="-1">实现基本的 PoW <a class="header-anchor" href="#实现基本的-pow" aria-label="Permalink to “实现基本的 PoW”">​</a></h4><p>为我们的区块链来实现一个简单的算法。我们的规则与上面的示例类似：</p><blockquote><p>找出一个数字 <code>p</code>，它与前一个区块的答案进行哈希运算得到一个哈希值，这个哈希值的前四位必须是由 <code>0</code> 组成。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import hashlib</span></span>
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
<span class="line"><span>		return guess_hash[:4] == &quot;0000&quot;</span></span></code></pre></div><p>为了调整算法的难度，我们可以修改前导 0 的数量。但是 4 个零已经足够难了。你会发现，将前导 0 的数量每增加一，那么找到正确答案所需要的时间难度将大幅增加。</p><p>我们的类基本完成了，现在我们开始去使用 HTTP 请求与它交互。</p><h3 id="第-2-步-以-api-方式去访问我们的区块链" tabindex="-1">第 2 步：以 API 方式去访问我们的区块链 <a class="header-anchor" href="#第-2-步-以-api-方式去访问我们的区块链" aria-label="Permalink to “第 2 步：以 API 方式去访问我们的区块链”">​</a></h3><p>我们将使用 Python Flask 框架。它是个微框架，使用它去做端点到 Python 函数的映射很容易。这样我们可以使用 HTTP 请求基于 web 来与我们的区块链对话。</p><p>我们将创建三个方法：</p><ul><li><code>/transactions/new</code> 在一个区块上创建一个新交易</li><li><code>/mine</code> 告诉我们的服务器去挖矿一个新区块</li><li><code>/chain</code> 返回完整的区块链</li></ul><h4 id="配置-flask" tabindex="-1">配置 Flask <a class="header-anchor" href="#配置-flask" aria-label="Permalink to “配置 Flask”">​</a></h4><p>我们的 “服务器” 将在我们的区块链网络中产生一个单个的节点。我们来创建一些样板代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import hashlib</span></span>
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
<span class="line"><span>    app.run(host=&#39;0.0.0.0&#39;, port=5000)</span></span></code></pre></div><p>对上面的代码，我们做添加一些详细的解释：</p>`,15)),a("ul",null,[a("li",null,[s[27]||(s[27]=n("Line 15：实例化我们的节点。更多关于 Flask 的知识读 ",-1)),e(p,{href:"http://flask.pocoo.org/docs/0.12/quickstart/#a-minimal-application"},{default:l(()=>[...s[26]||(s[26]=[n("这里",-1)])]),_:1}),s[28]||(s[28]=n("。",-1))]),s[29]||(s[29]=i("<li>Line 18：为我们的节点创建一个随机的名字。</li><li>Line 21：实例化我们的区块链类。</li><li>Line 24–26：创建 <code>/mine</code> 端点，这是一个 GET 请求。</li><li>Line 28–30：创建 <code>/transactions/new</code> 端点，这是一个 POST 请求，因为我们要发送数据给它。</li><li>Line 32–38：创建 <code>/chain</code> 端点，它返回全部区块链。</li><li>Line 40–41：在 5000 端口上运行服务器。</li>",6))]),s[49]||(s[49]=i(`<h4 id="交易端点" tabindex="-1">交易端点 <a class="header-anchor" href="#交易端点" aria-label="Permalink to “交易端点”">​</a></h4><p>这就是对一个交易的请求，它是用户发送给服务器的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span> &quot;sender&quot;: &quot;my address&quot;,</span></span>
<span class="line"><span> &quot;recipient&quot;: &quot;someone else&#39;s address&quot;,</span></span>
<span class="line"><span> &quot;amount&quot;: 5</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>因为我们已经有了添加交易到块中的类方法，剩下的就很容易了。让我们写个函数来添加交易：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import hashlib</span></span>
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
<span class="line"><span>	return jsonify(response), 201</span></span></code></pre></div><p><em>创建交易的方法</em></p><h4 id="挖矿端点" tabindex="-1">挖矿端点 <a class="header-anchor" href="#挖矿端点" aria-label="Permalink to “挖矿端点”">​</a></h4><p>我们的挖矿端点是见证奇迹的地方，它实现起来很容易。它要做三件事情：</p><ol><li>计算工作量证明</li><li>因为矿工（我们）添加一个交易而获得报酬，奖励矿工（我们） 1 个币</li><li>通过将它添加到链上而打造一个新区块</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import hashlib</span></span>
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
<span class="line"><span>	return jsonify(response), 200</span></span></code></pre></div><p>注意，挖掘出的区块的接收方是我们的节点地址。现在，我们所做的大部分工作都只是与我们的 <code>Blockchain</code> 类的方法进行交互的。到目前为止，我们已经做完了，现在开始与我们的区块链去交互。</p><h3 id="第-3-步-与我们的区块链去交互" tabindex="-1">第 3 步：与我们的区块链去交互 <a class="header-anchor" href="#第-3-步-与我们的区块链去交互" aria-label="Permalink to “第 3 步：与我们的区块链去交互”">​</a></h3><p>你可以使用简单的 cURL 或者 Postman 通过网络与我们的 API 去交互。</p><p>启动服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python blockchain.py</span></span>
<span class="line"><span>* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)</span></span></code></pre></div><p>我们通过生成一个 <code>GET</code> 请求到 <code>http://localhost:5000/mine</code> 去尝试挖一个区块：</p><p><img src="https://cdn-images-1.medium.com/max/1600/1*ufYwRmWgQeA-Jxg0zgYLOA.png" alt=""></p><p><em>使用 Postman 去生成一个 GET 请求</em></p><p>我们通过生成一个 <code>POST</code> 请求到 <code>http://localhost:5000/transactions/new</code> 去创建一个区块，请求数据包含我们的交易结构：</p><p><img src="https://cdn-images-1.medium.com/max/1600/1*O89KNbEWj1vigMZ6VelHAg.png" alt=""></p><p><em>使用 Postman 去生成一个 POST 请求</em></p><p>如果你不使用 Postman，也可以使用 cURL 去生成一个等价的请求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -X POST -H &quot;Content-Type: application/json&quot; -d &#39;{</span></span>
<span class="line"><span> &quot;sender&quot;: &quot;d4ee26eee15148ee92c6cd394edd974e&quot;,</span></span>
<span class="line"><span> &quot;recipient&quot;: &quot;someone-other-address&quot;,</span></span>
<span class="line"><span> &quot;amount&quot;: 5</span></span>
<span class="line"><span>}&#39; &quot;http://localhost:5000/transactions/new&quot;</span></span></code></pre></div><p>我重启动我的服务器，然后我挖到了两个区块，这样总共有了 3 个区块。我们通过请求 <code>http://localhost:5000/chain</code> 来检查整个区块链：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="第-4-步-共识" tabindex="-1">第 4 步：共识 <a class="header-anchor" href="#第-4-步-共识" aria-label="Permalink to “第 4 步：共识”">​</a></h3><p>这是很酷的一个地方。我们已经有了一个基本的区块链，它可以接收交易并允许我们去挖掘出新区块。但是区块链的整个重点在于它是<ruby>去中心化的<rt>decentralized</rt></ruby>。而如果它们是去中心化的，那我们如何才能确保它们表示在同一个区块链上？这就是<ruby>共识<rt>Consensus</rt></ruby>问题，如果我们希望在我们的网络上有多于一个的节点运行，那么我们将必须去实现一个共识算法。</p><h4 id="注册新节点" tabindex="-1">注册新节点 <a class="header-anchor" href="#注册新节点" aria-label="Permalink to “注册新节点”">​</a></h4><p>在我们能实现一个共识算法之前，我们需要一个办法去让一个节点知道网络上的邻居节点。我们网络上的每个节点都保留有一个该网络上其它节点的注册信息。因此，我们需要更多的端点：</p><ol><li><code>/nodes/register</code> 以 URL 的形式去接受一个新节点列表</li><li><code>/nodes/resolve</code> 去实现我们的共识算法，由它来解决任何的冲突 —— 确保节点有一个正确的链。</li></ol><p>我们需要去修改我们的区块链的构造函数，来提供一个注册节点的方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
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
<span class="line"><span>		self.nodes.add(parsed_url.netloc)</span></span></code></pre></div><p><em>一个添加邻居节点到我们的网络的方法</em></p><p>注意，我们将使用一个 <code>set()</code> 去保存节点列表。这是一个非常合算的方式，它将确保添加的节点是<ruby>幂等<rt>idempotent</rt></ruby>的 —— 这意味着不论你将特定的节点添加多少次，它都是精确地只出现一次。</p><h4 id="实现共识算法" tabindex="-1">实现共识算法 <a class="header-anchor" href="#实现共识算法" aria-label="Permalink to “实现共识算法”">​</a></h4><p>正如前面提到的，当一个节点与另一个节点有不同的链时就会产生冲突。为解决冲突，我们制定一个规则，即最长的有效的链才是权威的链。换句话说就是，网络上最长的链就是事实上的区块链。使用这个算法，可以在我们的网络上节点之间达到共识。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
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
<span class="line"><span>		return False</span></span></code></pre></div><p>第一个方法 <code>valid_chain()</code> 是负责来检查链是否有效，它通过遍历区块链上的每个区块并验证它们的哈希和工作量证明来检查这个区块链是否有效。</p><p><code>resolve_conflicts()</code> 方法用于遍历所有的邻居节点，下载它们的链并使用上面的方法去验证它们是否有效。<strong>如果找到有效的链，确定谁是最长的链，然后我们就用最长的链来替换我们的当前的链。</strong></p><p>在我们的 API 上来注册两个端点，一个用于添加邻居节点，另一个用于解决冲突：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@app.route(&#39;/nodes/register&#39;, methods=[&#39;POST&#39;])</span></span>
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
<span class="line"><span>	return jsonify(response), 200</span></span></code></pre></div><p>这种情况下，如果你愿意，可以使用不同的机器来做，然后在你的网络上启动不同的节点。或者是在同一台机器上使用不同的端口启动另一个进程。我是在我的机器上使用了不同的端口启动了另一个节点，并将它注册到了当前的节点上。因此，我现在有了两个节点：<code>http://localhost:5000</code> 和 <code>http://localhost:5001</code>。</p><p><img src="https://cdn-images-1.medium.com/max/1600/1*Dd78u-gmtwhQWHhPG3qMTQ.png" alt=""></p><p><em>注册一个新节点</em></p><p>我接着在节点 2 上挖出一些新区块，以确保这个链是最长的。之后我在节点 1 上以 <code>GET</code> 方式调用了 <code>/nodes/resolve</code>，这时，节点 1 上的链被共识算法替换成节点 2 上的链了：</p><p><img src="https://cdn-images-1.medium.com/max/1600/1*SGO5MWVf7GguIxfz6S8NVw.png" alt=""></p><p><em>工作中的共识算法</em></p><p>然后将它们封装起来 … 找一些朋友来帮你一起测试你的区块链。</p><hr><p>我希望以上内容能够鼓舞你去创建一些新的东西。我是加密货币的狂热拥护者，因此我相信区块链将迅速改变我们对经济、政府和记录保存的看法。</p><p><strong>更新：</strong> 我正计划继续它的第二部分，其中我将扩展我们的区块链，使它具备交易验证机制，同时讨论一些你可以在其上产生你自己的区块链的方式。（LCTT 译注：第二篇并没有~！）</p><hr>`,52)),a("p",null,[s[31]||(s[31]=n("via: ",-1)),e(p,{href:"https://hackernoon.com/learn-blockchains-by-building-one-117428612f46"},{default:l(()=>[...s[30]||(s[30]=[n("https://hackernoon.com/learn-blockchains-by-building-one-117428612f46",-1)])]),_:1})]),a("p",null,[s[35]||(s[35]=n("作者：",-1)),e(p,{href:"https://hackernoon.com/@vanflymen?source=post_header_lockup"},{default:l(()=>[...s[32]||(s[32]=[n("Daniel van Flymen",-1)])]),_:1}),s[36]||(s[36]=n(" 译者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:l(()=>[...s[33]||(s[33]=[n("qhwdw",-1)])]),_:1}),s[37]||(s[37]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[34]||(s[34]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[40]||(s[40]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[38]||(s[38]=[n("LCTT",-1)])]),_:1}),s[41]||(s[41]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[39]||(s[39]=[n("Linux中国",-1)])]),_:1}),s[42]||(s[42]=n(" 荣誉推出",-1))])])}const y=t(d,[["render",h]]);export{_ as __pageData,y as default};
