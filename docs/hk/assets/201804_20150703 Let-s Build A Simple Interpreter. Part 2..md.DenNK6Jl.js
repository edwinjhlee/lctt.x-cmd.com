import{_ as i,a0 as r,w as o,s as u,I as a,x as n,a1 as l,A as e,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"讓我們做個簡單的解釋器（二） | LCTT x X-CMD","titleTemplate":false,"description":"讓我們做個簡單的解釋器（二） | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"讓我們做個簡單的解釋器（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"讓我們做個簡單的解釋器（二） | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20150703 Let-s Build A Simple Interpreter. Part 2.","title":"讓我們做個簡單的解釋器（二）","tag":"201804","desc":""},"relativePath":"201804/20150703 Let-s Build A Simple Interpreter. Part 2..md","filePath":"[post].md"}'),c={name:"201804/20150703 Let-s Build A Simple Interpreter. Part 2..md"};function f(d,s,_,g,T,k){const p=r("Link");return o(),u("div",null,[s[26]||(s[26]=a("h1",{id:"讓我們做個簡單的解釋器-二",tabindex:"-1"},[n("讓我們做個簡單的解釋器（二） "),a("a",{class:"header-anchor",href:"#讓我們做個簡單的解釋器-二","aria-label":"Permalink to “讓我們做個簡單的解釋器（二）”"},"​")],-1)),s[27]||(s[27]=a("p",null,"在一本叫做 《高效思考的 5 要素》 的書中，作者 Burger 和 Starbird 講述了一個關於他們如何研究 Tony Plog 的故事，他是一位舉世聞名的交響曲名家，為一些有才華的演奏者開創了一個大師班。這些學生一開始演奏複雜的樂曲，他們演奏的非常好。然後他們被要求演奏非常基礎簡單的樂曲。當他們演奏這些樂曲時，與之前所演奏的相比，聽起來非常幼稚。在他們結束演奏後，老師也演奏了同樣的樂曲，但是聽上去非常嫺熟。差別令人震驚。Tony 解釋道，精通簡單音符可以讓人更好的掌握複雜的部分。這個例子很清晰 —— 要成為真正的名家，必須要掌握簡單基礎的思想。",-1)),s[28]||(s[28]=a("p",null,"故事中的例子明顯不僅僅適用於音樂，而且適用於軟件開發。這個故事告訴我們不要忽視繁瑣工作中簡單基礎的概念的重要性，哪怕有時候這讓人感覺是一種倒退。儘管熟練掌握一門工具或者框架非常重要，瞭解它們背後的原理也是極其重要的。正如 Palph Waldo Emerson 所説：",-1)),s[29]||(s[29]=a("blockquote",null,[a("p",null,"“如果你只學習方法，你就會被方法束縛。但如果你知道原理，就可以發明自己的方法。”")],-1)),s[30]||(s[30]=a("p",null,"有鑑於此，讓我們再次深入瞭解解釋器和編譯器。",-1)),a("p",null,[s[1]||(s[1]=n("今天我會向你們展示一個全新的計算器，與 ",-1)),l(p,{href:"https://linux.cn/article-9399-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("第一部分",-1)])]),_:1}),s[2]||(s[2]=n(" 相比，它可以做到：",-1))]),s[31]||(s[31]=t(`<ol><li>處理輸入字符串任意位置的空白符</li><li>識別輸入字符串中的多位整數</li><li>做兩個整數之間的減法（目前它僅能加減整數）</li></ol><p>新版本計算器的源代碼在這裏，它可以做到上述的所有事情：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 標記類型</span></span>
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
<span class="line"><span>            Token(PLUS &#39;+&#39;)</span></span>
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
<span class="line"><span>        # self.pos 是 self.text 的索引</span></span>
<span class="line"><span>        self.pos = 0</span></span>
<span class="line"><span>        # 當前標記實例</span></span>
<span class="line"><span>        self.current_token = None</span></span>
<span class="line"><span>        self.current_char = self.text[self.pos]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def error(self):</span></span>
<span class="line"><span>        raise Exception(&#39;Error parsing input&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def advance(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Advance the &#39;pos&#39; pointer and set the &#39;current_char&#39; variable.&quot;&quot;&quot;</span></span>
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
<span class="line"><span>        apart into tokens.</span></span>
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
<span class="line"><span>    def eat(self, token_type):</span></span>
<span class="line"><span>        # 將當前的標記類型與傳入的標記類型作比較，如果他們相匹配，就</span></span>
<span class="line"><span>        # “eat” 掉當前的標記並將下一個標記賦給 self.current_token，</span></span>
<span class="line"><span>        # 否則拋出一個異常</span></span>
<span class="line"><span>        if self.current_token.type == token_type:</span></span>
<span class="line"><span>            self.current_token = self.get_next_token()</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.error()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def expr(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Parser / Interpreter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        expr -&gt; INTEGER PLUS INTEGER</span></span>
<span class="line"><span>        expr -&gt; INTEGER MINUS INTEGER</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        # 將輸入中的第一個標記設置成當前標記</span></span>
<span class="line"><span>        self.current_token = self.get_next_token()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 當前標記應該是一個整數</span></span>
<span class="line"><span>        left = self.current_token</span></span>
<span class="line"><span>        self.eat(INTEGER)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 當前標記應該是 ‘+’ 或 ‘-’</span></span>
<span class="line"><span>        op = self.current_token</span></span>
<span class="line"><span>        if op.type == PLUS:</span></span>
<span class="line"><span>            self.eat(PLUS)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.eat(MINUS)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 當前標記應該是一個整數</span></span>
<span class="line"><span>        right = self.current_token</span></span>
<span class="line"><span>        self.eat(INTEGER)</span></span>
<span class="line"><span>        # 在上述函數調用後，self.current_token 就被設為 EOF 標記</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 這時要麼是成功地找到 INTEGER PLUS INTEGER，要麼是 INTEGER MINUS INTEGER</span></span>
<span class="line"><span>        # 序列的標記，並且這個方法可以僅僅返回兩個整數的加或減的結果，就能高效解釋客户端的輸入</span></span>
<span class="line"><span>        if op.type == PLUS:</span></span>
<span class="line"><span>            result = left.value + right.value</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            result = left.value - right.value</span></span>
<span class="line"><span>        return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            # To run under Python3 replace &#39;raw_input&#39; call</span></span>
<span class="line"><span>            # with &#39;input&#39;</span></span>
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
<span class="line"><span>    main()</span></span></code></pre></div>`,3)),a("p",null,[s[4]||(s[4]=n("把上面的代碼保存到 ",-1)),s[5]||(s[5]=a("code",null,"calc2.py",-1)),s[6]||(s[6]=n(" 文件中，或者直接從 ",-1)),l(p,{href:"https://github.com/rspivak/lsbasi/blob/master/part2/calc2.py"},{default:e(()=>[...s[3]||(s[3]=[n("GitHub",-1)])]),_:1}),s[7]||(s[7]=n(" 上下載。試着運行它。看看它是不是正常工作：它應該能夠處理輸入中任意位置的空白符；能夠接受多位的整數，並且能夠對兩個整數做減法和加法。",-1))]),s[32]||(s[32]=t(`<p>這是我在自己的筆記本上運行的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python calc2.py</span></span>
<span class="line"><span>calc&gt; 27 + 3</span></span>
<span class="line"><span>30</span></span>
<span class="line"><span>calc&gt; 27 - 7</span></span>
<span class="line"><span>20</span></span>
<span class="line"><span>calc&gt;</span></span></code></pre></div>`,2)),a("p",null,[s[9]||(s[9]=n("與 ",-1)),l(p,{href:"https://linux.cn/article-9399-1.html"},{default:e(()=>[...s[8]||(s[8]=[n("第一部分",-1)])]),_:1}),s[10]||(s[10]=n(" 的版本相比，主要的代碼改動有：",-1))]),s[33]||(s[33]=a("ol",null,[a("li",null,[a("code",null,"get_next_token"),n(" 方法重寫了很多。增加指針位置的邏輯之前是放在一個單獨的方法中。")]),a("li",null,[n("增加了一些方法："),a("code",null,"skip_whitespace"),n(" 用於忽略空白字符，"),a("code",null,"integer"),n(" 用於處理輸入字符的多位整數。")]),a("li",null,[a("code",null,"expr"),n(" 方法修改成了可以識別 “整數 -> 減號 -> 整數” 詞組和 “整數 -> 加號 -> 整數” 詞組。在成功識別相應的詞組後，這個方法現在可以解釋加法和減法。")])],-1)),a("p",null,[l(p,{href:"https://linux.cn/article-9399-1.html"},{default:e(()=>[...s[11]||(s[11]=[n("第一部分",-1)])]),_:1}),s[12]||(s[12]=t(" 中你學到了兩個重要的概念，叫做 <ruby>標記<rt>token</rt></ruby> 和<ruby>詞法分析<rt>lexical analyzer</rt></ruby>。現在我想談一談<ruby>詞法<rt>lexeme</rt></ruby>、 <ruby>解析<rt>parsing</rt></ruby> 和<ruby>解析器<rt>parser</rt></ruby>。",11))]),s[34]||(s[34]=t('<p>你已經知道了標記。但是為了讓我詳細的討論標記，我需要談一談詞法。詞法是什麼？<ruby>詞法<rt>lexeme</rt></ruby>是一個<ruby>標記<rt>token</rt></ruby>中的字符序列。在下圖中你可以看到一些關於標記的例子，這可以讓它們之間的關係變得清晰：</p><p><img src="https://ruslanspivak.com/lsbasi-part2/lsbasi_part2_lexemes.png" alt=""></p><p>現在還記得我們的朋友，<code>expr</code> 方法嗎？我之前説過，這是數學表達式實際被解釋的地方。但是你要先識別這個表達式有哪些詞組才能解釋它，比如它是加法還是減法。<code>expr</code> 方法最重要的工作是：它從 <code>get_next_token</code> 方法中得到流，並找出該標記流的結構，然後解釋已經識別出的詞組，產生數學表達式的結果。</p><p>在標記流中找出結構的過程，或者換種説法，識別標記流中的詞組的過程就叫<ruby>解析<rt>parsing</rt></ruby>。解釋器或者編譯器中執行這個任務的部分就叫做<ruby>解析器<rt>parser</rt></ruby>。</p><p>現在你知道 <code>expr</code> 方法就是你的解釋器的部分，<ruby>解析<rt>parsing</rt></ruby>和<ruby>解釋<rt>interpreting</rt></ruby>都在這裏發生 —— <code>expr</code> 方法首先嚐試識別（解析）標記流裏的 “整數 -&gt; 加法 -&gt; 整數” 或者 “整數 -&gt; 減法 -&gt; 整數” 詞組，成功識別後 （解析了） 其中一個詞組，這個方法就開始解釋它，返回兩個整數的和或差。</p><p>又到了練習的時間。</p><p><img src="https://ruslanspivak.com/lsbasi-part2/lsbasi_part2_exercises.png" alt=""></p><ol><li>擴展這個計算器，讓它能夠計算兩個整數的乘法</li><li>擴展這個計算器，讓它能夠計算兩個整數的除法</li><li>修改代碼，讓它能夠解釋包含了任意數量的加法和減法的表達式，比如 “9 - 5 + 3 + 11”</li></ol><p><strong>檢驗你的理解：</strong></p><ol><li>詞法是什麼？</li><li>找出標記流結構的過程叫什麼，或者換種説法，識別標記流中一個詞組的過程叫什麼？</li><li>解釋器（編譯器）執行解析的部分叫什麼？</li></ol><p>希望你喜歡今天的內容。在該系列的下一篇文章裏你就能擴展計算器從而處理更多複雜的算術表達式。敬請期待。</p><hr>',12)),a("p",null,[s[14]||(s[14]=n("via: ",-1)),l(p,{href:"https://ruslanspivak.com/lsbasi-part2/"},{default:e(()=>[...s[13]||(s[13]=[n("https://ruslanspivak.com/lsbasi-part2/",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("作者：",-1)),l(p,{href:"https://ruslanspivak.com"},{default:e(()=>[...s[15]||(s[15]=[n("Ruslan Spivak",-1)])]),_:1}),s[19]||(s[19]=n(" 譯者：",-1)),l(p,{href:"https://github.com/BriFuture"},{default:e(()=>[...s[16]||(s[16]=[n("BriFuture",-1)])]),_:1}),s[20]||(s[20]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[21]||(s[21]=[n("LCTT",-1)])]),_:1}),s[24]||(s[24]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[22]||(s[22]=[n("Linux中國",-1)])]),_:1}),s[25]||(s[25]=n(" 榮譽推出",-1))])])}const y=i(c,[["render",f]]);export{x as __pageData,y as default};
