import{_ as i,a0 as r,w as o,s as c,I as a,x as n,a1 as e,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"讓我們做個簡單的解釋器（三） | LCTT x X-CMD","titleTemplate":false,"description":"讓我們做個簡單的解釋器（三） | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"讓我們做個簡單的解釋器（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"讓我們做個簡單的解釋器（三） | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20150812 Let-s Build A Simple Interpreter. Part 3.","title":"讓我們做個簡單的解釋器（三）","tag":"201804","desc":""},"relativePath":"201804/20150812 Let-s Build A Simple Interpreter. Part 3..md","filePath":"[post].md"}'),u={name:"201804/20150812 Let-s Build A Simple Interpreter. Part 3..md"};function f(d,s,g,k,m,h){const p=r("Link");return o(),c("div",null,[s[30]||(s[30]=a("h1",{id:"讓我們做個簡單的解釋器-三",tabindex:"-1"},[n("讓我們做個簡單的解釋器（三） "),a("a",{class:"header-anchor",href:"#讓我們做個簡單的解釋器-三","aria-label":"Permalink to “讓我們做個簡單的解釋器（三）”"},"​")],-1)),s[31]||(s[31]=a("p",null,"早上醒來的時候，我就在想：“為什麼我們學習一個新技能這麼難？”",-1)),s[32]||(s[32]=a("p",null,"我不認為那是因為它很難。我認為原因可能在於我們花了太多的時間，而這件難事需要有豐富的閲歷和足夠的知識，然而我們要把這樣的知識轉換成技能所用的練習時間又不夠。",-1)),s[33]||(s[33]=a("p",null,"拿游泳來説，你可以花上幾天時間來閲讀很多有關游泳的書籍，花幾個小時和資深的游泳者和教練交流，觀看所有可以獲得的訓練視頻，但你第一次跳進水池的時候，仍然會像一個石頭那樣沉入水中，",-1)),a("p",null,[s[2]||(s[2]=n("要點在於：你認為自己有多瞭解那件事都無關緊要 —— 你得通過練習把知識變成技能。為了幫你練習，我把訓練放在了這個系列的 ",-1)),e(p,{href:"https://linux.cn/article-9399-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第一部分",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),e(p,{href:"https://linux.cn/article-9520-1.html"},{default:l(()=>[...s[1]||(s[1]=[n("第二部分",-1)])]),_:1}),s[4]||(s[4]=n(" 了。當然，你會在今後的文章中看到更多練習，我保證 ：)",-1))]),s[34]||(s[34]=t(`<p>好，讓我們開始今天的學習。</p><p>到現在為止，你已經知道了怎樣解釋像 “7 + 3” 或者 “12 - 9” 這樣的兩個整數相加減的算術表達式。今天我要説的是怎麼解析（識別）、解釋有多個數字相加減的算術表達式，比如 “7 - 3 + 2 - 1”。</p><p>文中的這個算術表達式可以用下面的這個語法圖表示：</p><p><img src="https://ruslanspivak.com/lsbasi-part3/lsbasi_part3_syntax_diagram.png" alt=""></p><p>什麼是<ruby>語法圖<rt>syntax diagram</rt></ruby>？ <strong>語法圖</strong> 是對一門編程語言中的語法規則進行圖像化的表示。基本上，一個語法圖就能告訴你哪些語句可以在程序中出現，哪些不能出現。</p><p>語法圖很容易讀懂：按照箭頭指向的路徑。某些路徑表示的是判斷，有些表示的是循環。</p><p>你可以按照以下的方式讀上面的語法圖：一個 term 後面可以是加號或者減號，接着可以是另一個 term，這個 term 後面又可以是一個加號或者減號，後面又是一個 term，如此循環。從字面上你就能讀懂這個圖片了。或許你會奇怪，“term” 是什麼、對於本文來説，“term” 就是個整數。</p><p>語法圖有兩個主要的作用：</p><ul><li>它們用圖形的方式表示一個編程語言的特性（語法）。</li><li>它們可以用來幫你寫出解析器 —— 你可以根據下列簡單規則把圖片轉換成代碼。</li></ul><p>你已經知道，識別出記號流中的詞組的過程就叫做 <strong>解析</strong>。解釋器或者編譯器執行這個任務的部分叫做 <strong>解析器</strong>。解析也稱為 <strong>語法分析</strong>，並且解析器這個名字很合適，你猜的對，就是 <strong>語法分析器</strong>。</p><p>根據上面的語法圖，下面這些表達式都是合法的：</p><ul><li>3</li><li>3 + 4</li><li>7 - 3 + 2 - 1</li></ul><p>因為算術表達式的語法規則在不同的編程語言裏面是很相近的，我們可以用 Python shell 來“測試”語法圖。打開 Python shell，運行下面的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; 3</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>&gt;&gt;&gt; 3 + 4</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>&gt;&gt;&gt; 7 - 3 + 2 - 1</span></span>
<span class="line"><span>5</span></span></code></pre></div><p>意料之中。</p><p>表達式 “3 + ” 不是一個有效的數學表達式，根據語法圖，加號後面必須要有個 term （整數），否則就是語法錯誤。然後，自己在 Python shell 裏面運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; 3 +</span></span>
<span class="line"><span>  File &quot;&lt;stdin&gt;&quot;, line 1</span></span>
<span class="line"><span>    3 +</span></span>
<span class="line"><span>      ^</span></span>
<span class="line"><span>SyntaxError: invalid syntax</span></span></code></pre></div><p>能用 Python shell 來做這樣的測試非常棒，讓我們把上面的語法圖轉換成代碼，用我們自己的解釋器來測試，怎麼樣？</p>`,18)),a("p",null,[s[7]||(s[7]=n("從之前的文章裏（",-1)),e(p,{href:"https://linux.cn/article-9399-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("第一部分",-1)])]),_:1}),s[8]||(s[8]=n(" 和 ",-1)),e(p,{href:"https://linux.cn/article-9520-1.html"},{default:l(()=>[...s[6]||(s[6]=[n("第二部分",-1)])]),_:1}),s[9]||(s[9]=n("）你知道 ",-1)),s[10]||(s[10]=a("code",null,"expr",-1)),s[11]||(s[11]=n(" 方法包含了我們的解析器和解釋器。再説一遍，解析器僅僅識別出結構，確保它與某些特性對應，而解釋器實際上是在解析器成功識別（解析）特性之後，就立即對錶達式進行評估。",-1))]),s[35]||(s[35]=t(`<p>以下代碼片段顯示了對應於圖表的解析器代碼。語法圖裏面的矩形方框（term）變成了 term 方法，用於解析整數，expr 方法和語法圖的流程一致：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def term(self):</span></span>
<span class="line"><span>    self.eat(INTEGER)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def expr(self):</span></span>
<span class="line"><span>    # 把當前標記設為從輸入中拿到的第一個標記</span></span>
<span class="line"><span>    self.current_token = self.get_next_token()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    self.term()</span></span>
<span class="line"><span>    while self.current_token.type in (PLUS, MINUS):</span></span>
<span class="line"><span>        token = self.current_token</span></span>
<span class="line"><span>        if token.type == PLUS:</span></span>
<span class="line"><span>            self.eat(PLUS)</span></span>
<span class="line"><span>            self.term()</span></span>
<span class="line"><span>        elif token.type == MINUS:</span></span>
<span class="line"><span>            self.eat(MINUS)</span></span>
<span class="line"><span>            self.term()</span></span></code></pre></div><p>你能看到 <code>expr</code> 首先調用了 <code>term</code> 方法。然後 <code>expr</code> 方法裏面的 <code>while</code> 循環可以執行 0 或多次。在循環裏面解析器基於標記做出判斷（是加號還是減號）。花一些時間，你就知道，上述代碼確實是遵循着語法圖的算術表達式流程。</p><p>解析器並不解釋任何東西：如果它識別出了一個表達式，它就靜默着，如果沒有識別出來，就會拋出一個語法錯誤。改一下 <code>expr</code> 方法，加入解釋器的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def term(self):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Return an INTEGER token value&quot;&quot;&quot;</span></span>
<span class="line"><span>    token = self.current_token</span></span>
<span class="line"><span>    self.eat(INTEGER)</span></span>
<span class="line"><span>    return token.value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def expr(self):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Parser / Interpreter &quot;&quot;&quot;</span></span>
<span class="line"><span>    # 將輸入中的第一個標記設置成當前標記</span></span>
<span class="line"><span>    self.current_token = self.get_next_token()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    result = self.term()</span></span>
<span class="line"><span>    while self.current_token.type in (PLUS, MINUS):</span></span>
<span class="line"><span>        token = self.current_token</span></span>
<span class="line"><span>        if token.type == PLUS:</span></span>
<span class="line"><span>            self.eat(PLUS)</span></span>
<span class="line"><span>            result = result + self.term()</span></span>
<span class="line"><span>        elif token.type == MINUS:</span></span>
<span class="line"><span>            self.eat(MINUS)</span></span>
<span class="line"><span>            result = result - self.term()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return result</span></span></code></pre></div><p>因為解釋器需要評估一個表達式， <code>term</code> 方法被改成返回一個整型值，<code>expr</code> 方法被改成在合適的地方執行加法或減法操作，並返回解釋的結果。儘管代碼很直白，我建議花點時間去理解它。</p><p>進行下一步，看看完整的解釋器代碼，好不？</p><p>這是新版計算器的源代碼，它可以處理包含有任意多個加法和減法運算的有效的數學表達式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 標記類型</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># EOF （end-of-file 文件末尾）標記是用來表示所有輸入都解析完成</span></span>
<span class="line"><span>INTEGER, PLUS, MINUS, EOF = &#39;INTEGER&#39;, &#39;PLUS&#39;, &#39;MINUS&#39;, &#39;EOF&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Token(object):</span></span>
<span class="line"><span>    def __init__(self, type, value):</span></span>
<span class="line"><span>        # token 類型: INTEGER, PLUS, MINUS, or EOF</span></span>
<span class="line"><span>        self.type = type</span></span>
<span class="line"><span>        # token 值: 非負整數值, &#39;+&#39;, &#39;-&#39;, 或無</span></span>
<span class="line"><span>        self.value = value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __str__(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;String representation of the class instance.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Examples:</span></span>
<span class="line"><span>            Token(INTEGER, 3)</span></span>
<span class="line"><span>            Token(PLUS, &#39;+&#39;)</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        return &#39;Token({type}, {value})&#39;.format(</span></span>
<span class="line"><span>            type=self.type,</span></span>
<span class="line"><span>            value=repr(self.value)</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __repr__(self):</span></span>
<span class="line"><span>        return self.__str__()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Interpreter(object):</span></span>
<span class="line"><span>    def __init__(self, text):</span></span>
<span class="line"><span>        # 客户端字符輸入， 例如. &quot;3 + 5&quot;, &quot;12 - 5&quot;, </span></span>
<span class="line"><span>        self.text = text</span></span>
<span class="line"><span>        # self.pos is an index into self.text</span></span>
<span class="line"><span>        self.pos = 0</span></span>
<span class="line"><span>        # 當前標記實例</span></span>
<span class="line"><span>        self.current_token = None</span></span>
<span class="line"><span>        self.current_char = self.text[self.pos]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ##########################################################</span></span>
<span class="line"><span>    # Lexer code                                             #</span></span>
<span class="line"><span>    ##########################################################</span></span>
<span class="line"><span>    def error(self):</span></span>
<span class="line"><span>        raise Exception(&#39;Invalid syntax&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def advance(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Advance the \`pos\` pointer and set the \`current_char\` variable.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.pos += 1</span></span>
<span class="line"><span>        if self.pos &gt; len(self.text) - 1:</span></span>
<span class="line"><span>            self.current_char = None  # Indicates end of input</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.current_char = self.text[self.pos]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def skip_whitespace(self):</span></span>
<span class="line"><span>        while self.current_char is not None and self.current_char.isspace():</span></span>
<span class="line"><span>            self.advance()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def integer(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Return a (multidigit) integer consumed from the input.&quot;&quot;&quot;</span></span>
<span class="line"><span>        result = &#39;&#39;</span></span>
<span class="line"><span>        while self.current_char is not None and self.current_char.isdigit():</span></span>
<span class="line"><span>            result += self.current_char</span></span>
<span class="line"><span>            self.advance()</span></span>
<span class="line"><span>        return int(result)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_next_token(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Lexical analyzer (also known as scanner or tokenizer)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        This method is responsible for breaking a sentence</span></span>
<span class="line"><span>        apart into tokens. One token at a time.</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        while self.current_char is not None:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if self.current_char.isspace():</span></span>
<span class="line"><span>                self.skip_whitespace()</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if self.current_char.isdigit():</span></span>
<span class="line"><span>                return Token(INTEGER, self.integer())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if self.current_char == &#39;+&#39;:</span></span>
<span class="line"><span>                self.advance()</span></span>
<span class="line"><span>                return Token(PLUS, &#39;+&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if self.current_char == &#39;-&#39;:</span></span>
<span class="line"><span>                self.advance()</span></span>
<span class="line"><span>                return Token(MINUS, &#39;-&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            self.error()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return Token(EOF, None)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ##########################################################</span></span>
<span class="line"><span>    # Parser / Interpreter code                              #</span></span>
<span class="line"><span>    ##########################################################</span></span>
<span class="line"><span>    def eat(self, token_type):</span></span>
<span class="line"><span>        # 將當前的標記類型與傳入的標記類型作比較，如果他們相匹配，就</span></span>
<span class="line"><span>        # “eat” 掉當前的標記並將下一個標記賦給 self.current_token，</span></span>
<span class="line"><span>        # 否則拋出一個異常</span></span>
<span class="line"><span>        if self.current_token.type == token_type:</span></span>
<span class="line"><span>            self.current_token = self.get_next_token()</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.error()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def term(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Return an INTEGER token value.&quot;&quot;&quot;</span></span>
<span class="line"><span>        token = self.current_token</span></span>
<span class="line"><span>        self.eat(INTEGER)</span></span>
<span class="line"><span>        return token.value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def expr(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Arithmetic expression parser / interpreter.&quot;&quot;&quot;</span></span>
<span class="line"><span>        # 將輸入中的第一個標記設置成當前標記</span></span>
<span class="line"><span>        self.current_token = self.get_next_token()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        result = self.term()</span></span>
<span class="line"><span>        while self.current_token.type in (PLUS, MINUS):</span></span>
<span class="line"><span>            token = self.current_token</span></span>
<span class="line"><span>            if token.type == PLUS:</span></span>
<span class="line"><span>                self.eat(PLUS)</span></span>
<span class="line"><span>                result = result + self.term()</span></span>
<span class="line"><span>            elif token.type == MINUS:</span></span>
<span class="line"><span>                self.eat(MINUS)</span></span>
<span class="line"><span>                result = result - self.term()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            # To run under Python3 replace &#39;raw_input&#39; call</span></span>
<span class="line"><span>            # 要在 Python3 下運行，請把 ‘raw_input’ 的調用換成 ‘input’</span></span>
<span class="line"><span>            text = raw_input(&#39;calc&gt; &#39;)</span></span>
<span class="line"><span>        except EOFError:</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>        if not text:</span></span>
<span class="line"><span>            continue</span></span>
<span class="line"><span>        interpreter = Interpreter(text)</span></span>
<span class="line"><span>        result = interpreter.expr()</span></span>
<span class="line"><span>        print(result)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div>`,9)),a("p",null,[s[13]||(s[13]=n("把上面的代碼保存到 ",-1)),s[14]||(s[14]=a("code",null,"calc3.py",-1)),s[15]||(s[15]=n(" 文件中，或者直接從 ",-1)),e(p,{href:"https://github.com/rspivak/lsbasi/blob/master/part3/calc3.py"},{default:l(()=>[...s[12]||(s[12]=[n("GitHub",-1)])]),_:1}),s[16]||(s[16]=n(" 上下載。試着運行它。看看它能不能處理我之前給你看過的語法圖裏面派生出的數學表達式。",-1))]),s[36]||(s[36]=t(`<p>這是我在自己的筆記本上運行的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python calc3.py</span></span>
<span class="line"><span>calc&gt; 3</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>calc&gt; 7 - 4</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>calc&gt; 10 + 5</span></span>
<span class="line"><span>15</span></span>
<span class="line"><span>calc&gt; 7 - 3 + 2 - 1</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>calc&gt; 10 + 1 + 2 - 3 + 4 + 6 - 15</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>calc&gt; 3 +</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;calc3.py&quot;, line 147, in &lt;module&gt;</span></span>
<span class="line"><span>    main()</span></span>
<span class="line"><span>  File &quot;calc3.py&quot;, line 142, in main</span></span>
<span class="line"><span>    result = interpreter.expr()</span></span>
<span class="line"><span>  File &quot;calc3.py&quot;, line 123, in expr</span></span>
<span class="line"><span>    result = result + self.term()</span></span>
<span class="line"><span>  File &quot;calc3.py&quot;, line 110, in term</span></span>
<span class="line"><span>    self.eat(INTEGER)</span></span>
<span class="line"><span>  File &quot;calc3.py&quot;, line 105, in eat</span></span>
<span class="line"><span>    self.error()</span></span>
<span class="line"><span>  File &quot;calc3.py&quot;, line 45, in error</span></span>
<span class="line"><span>    raise Exception(&#39;Invalid syntax&#39;)</span></span>
<span class="line"><span>Exception: Invalid syntax</span></span></code></pre></div><p>記得我在文章開始時提過的練習嗎：它們在這兒，我保證過的：)</p><p><img src="https://ruslanspivak.com/lsbasi-part3/lsbasi_part3_exercises.png" alt=""></p><ul><li>畫出只包含乘法和除法的數學表達式的語法圖，比如 “7 * 4 / 2 * 3”。認真點，拿只鋼筆或鉛筆，試着畫一個。 修改計算器的源代碼，解釋只包含乘法和除法的數學表達式。比如 “7 * 4 / 2 * 3”。</li><li>從頭寫一個可以處理像 “7 - 3 + 2 - 1” 這樣的數學表達式的解釋器。用你熟悉的編程語言，不看示例代碼自己思考着寫出代碼。做的時候要想一想這裏麪包含的組件：一個詞法分析器，讀取輸入並轉換成標記流，一個解析器，從詞法分析器提供的記號流中獲取，並且嘗試識別流中的結構，一個解釋器，在解析器成功解析（識別）有效的數學表達式後產生結果。把這些要點串起來。花一點時間把你獲得的知識變成一個可以運行的數學表達式的解釋器。</li></ul><p><strong>檢驗你的理解。</strong></p><ol><li>什麼是語法圖？</li><li>什麼是語法分析？</li><li>什麼是語法分析器？</li></ol><p>嘿，看！你看完了所有內容。感謝你們堅持到今天，而且沒有忘記練習。😃 下次我會帶着新的文章回來，盡請期待。</p><hr>`,9)),a("p",null,[s[18]||(s[18]=n("via: ",-1)),e(p,{href:"https://ruslanspivak.com/lsbasi-part3/"},{default:l(()=>[...s[17]||(s[17]=[n("https://ruslanspivak.com/lsbasi-part3/",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("作者：",-1)),e(p,{href:"https://ruslanspivak.com"},{default:l(()=>[...s[19]||(s[19]=[n("Ruslan Spivak",-1)])]),_:1}),s[23]||(s[23]=n(" 譯者：",-1)),e(p,{href:"https://github.com/BriFuture"},{default:l(()=>[...s[20]||(s[20]=[n("BriFuture",-1)])]),_:1}),s[24]||(s[24]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[26]||(s[26]=[n("Linux中國",-1)])]),_:1}),s[29]||(s[29]=n(" 榮譽推出",-1))])])}const q=i(u,[["render",f]]);export{b as __pageData,q as default};
