import{_ as i,a0 as r,w as o,s as u,I as a,x as n,a1 as l,A as e,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"让我们做个简单的解释器（二） | LCTT x X-CMD","titleTemplate":false,"description":"让我们做个简单的解释器（二） | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"让我们做个简单的解释器（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"让我们做个简单的解释器（二） | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20150703 Let-s Build A Simple Interpreter. Part 2.","title":"让我们做个简单的解释器（二）","tag":"201804","desc":""},"relativePath":"201804/20150703 Let-s Build A Simple Interpreter. Part 2..md","filePath":"[post].md"}'),c={name:"201804/20150703 Let-s Build A Simple Interpreter. Part 2..md"};function f(d,s,_,g,T,k){const p=r("Link");return o(),u("div",null,[s[26]||(s[26]=a("h1",{id:"让我们做个简单的解释器-二",tabindex:"-1"},[n("让我们做个简单的解释器（二） "),a("a",{class:"header-anchor",href:"#让我们做个简单的解释器-二","aria-label":"Permalink to “让我们做个简单的解释器（二）”"},"​")],-1)),s[27]||(s[27]=a("p",null,"在一本叫做 《高效思考的 5 要素》 的书中，作者 Burger 和 Starbird 讲述了一个关于他们如何研究 Tony Plog 的故事，他是一位举世闻名的交响曲名家，为一些有才华的演奏者开创了一个大师班。这些学生一开始演奏复杂的乐曲，他们演奏的非常好。然后他们被要求演奏非常基础简单的乐曲。当他们演奏这些乐曲时，与之前所演奏的相比，听起来非常幼稚。在他们结束演奏后，老师也演奏了同样的乐曲，但是听上去非常娴熟。差别令人震惊。Tony 解释道，精通简单音符可以让人更好的掌握复杂的部分。这个例子很清晰 —— 要成为真正的名家，必须要掌握简单基础的思想。",-1)),s[28]||(s[28]=a("p",null,"故事中的例子明显不仅仅适用于音乐，而且适用于软件开发。这个故事告诉我们不要忽视繁琐工作中简单基础的概念的重要性，哪怕有时候这让人感觉是一种倒退。尽管熟练掌握一门工具或者框架非常重要，了解它们背后的原理也是极其重要的。正如 Palph Waldo Emerson 所说：",-1)),s[29]||(s[29]=a("blockquote",null,[a("p",null,"“如果你只学习方法，你就会被方法束缚。但如果你知道原理，就可以发明自己的方法。”")],-1)),s[30]||(s[30]=a("p",null,"有鉴于此，让我们再次深入了解解释器和编译器。",-1)),a("p",null,[s[1]||(s[1]=n("今天我会向你们展示一个全新的计算器，与 ",-1)),l(p,{href:"https://linux.cn/article-9399-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("第一部分",-1)])]),_:1}),s[2]||(s[2]=n(" 相比，它可以做到：",-1))]),s[31]||(s[31]=t(`<ol><li>处理输入字符串任意位置的空白符</li><li>识别输入字符串中的多位整数</li><li>做两个整数之间的减法（目前它仅能加减整数）</li></ol><p>新版本计算器的源代码在这里，它可以做到上述的所有事情：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 标记类型</span></span>
<span class="line"><span># EOF （end-of-file 文件末尾）标记是用来表示所有输入都解析完成</span></span>
<span class="line"><span>INTEGER, PLUS, MINUS, EOF = &#39;INTEGER&#39;, &#39;PLUS&#39;, &#39;MINUS&#39;, &#39;EOF&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Token(object):</span></span>
<span class="line"><span>    def __init__(self, type, value):</span></span>
<span class="line"><span>        # token 类型: INTEGER, PLUS, MINUS, or EOF</span></span>
<span class="line"><span>        self.type = type</span></span>
<span class="line"><span>        # token 值: 非负整数值, &#39;+&#39;, &#39;-&#39;, 或无</span></span>
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
<span class="line"><span>        # 客户端字符输入， 例如. &quot;3 + 5&quot;, &quot;12 - 5&quot;, </span></span>
<span class="line"><span>        self.text = text</span></span>
<span class="line"><span>        # self.pos 是 self.text 的索引</span></span>
<span class="line"><span>        self.pos = 0</span></span>
<span class="line"><span>        # 当前标记实例</span></span>
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
<span class="line"><span>        # 将当前的标记类型与传入的标记类型作比较，如果他们相匹配，就</span></span>
<span class="line"><span>        # “eat” 掉当前的标记并将下一个标记赋给 self.current_token，</span></span>
<span class="line"><span>        # 否则抛出一个异常</span></span>
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
<span class="line"><span>        # 将输入中的第一个标记设置成当前标记</span></span>
<span class="line"><span>        self.current_token = self.get_next_token()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 当前标记应该是一个整数</span></span>
<span class="line"><span>        left = self.current_token</span></span>
<span class="line"><span>        self.eat(INTEGER)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 当前标记应该是 ‘+’ 或 ‘-’</span></span>
<span class="line"><span>        op = self.current_token</span></span>
<span class="line"><span>        if op.type == PLUS:</span></span>
<span class="line"><span>            self.eat(PLUS)</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.eat(MINUS)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 当前标记应该是一个整数</span></span>
<span class="line"><span>        right = self.current_token</span></span>
<span class="line"><span>        self.eat(INTEGER)</span></span>
<span class="line"><span>        # 在上述函数调用后，self.current_token 就被设为 EOF 标记</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 这时要么是成功地找到 INTEGER PLUS INTEGER，要么是 INTEGER MINUS INTEGER</span></span>
<span class="line"><span>        # 序列的标记，并且这个方法可以仅仅返回两个整数的加或减的结果，就能高效解释客户端的输入</span></span>
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
<span class="line"><span>    main()</span></span></code></pre></div>`,3)),a("p",null,[s[4]||(s[4]=n("把上面的代码保存到 ",-1)),s[5]||(s[5]=a("code",null,"calc2.py",-1)),s[6]||(s[6]=n(" 文件中，或者直接从 ",-1)),l(p,{href:"https://github.com/rspivak/lsbasi/blob/master/part2/calc2.py"},{default:e(()=>[...s[3]||(s[3]=[n("GitHub",-1)])]),_:1}),s[7]||(s[7]=n(" 上下载。试着运行它。看看它是不是正常工作：它应该能够处理输入中任意位置的空白符；能够接受多位的整数，并且能够对两个整数做减法和加法。",-1))]),s[32]||(s[32]=t(`<p>这是我在自己的笔记本上运行的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python calc2.py</span></span>
<span class="line"><span>calc&gt; 27 + 3</span></span>
<span class="line"><span>30</span></span>
<span class="line"><span>calc&gt; 27 - 7</span></span>
<span class="line"><span>20</span></span>
<span class="line"><span>calc&gt;</span></span></code></pre></div>`,2)),a("p",null,[s[9]||(s[9]=n("与 ",-1)),l(p,{href:"https://linux.cn/article-9399-1.html"},{default:e(()=>[...s[8]||(s[8]=[n("第一部分",-1)])]),_:1}),s[10]||(s[10]=n(" 的版本相比，主要的代码改动有：",-1))]),s[33]||(s[33]=a("ol",null,[a("li",null,[a("code",null,"get_next_token"),n(" 方法重写了很多。增加指针位置的逻辑之前是放在一个单独的方法中。")]),a("li",null,[n("增加了一些方法："),a("code",null,"skip_whitespace"),n(" 用于忽略空白字符，"),a("code",null,"integer"),n(" 用于处理输入字符的多位整数。")]),a("li",null,[a("code",null,"expr"),n(" 方法修改成了可以识别 “整数 -> 减号 -> 整数” 词组和 “整数 -> 加号 -> 整数” 词组。在成功识别相应的词组后，这个方法现在可以解释加法和减法。")])],-1)),a("p",null,[l(p,{href:"https://linux.cn/article-9399-1.html"},{default:e(()=>[...s[11]||(s[11]=[n("第一部分",-1)])]),_:1}),s[12]||(s[12]=t(" 中你学到了两个重要的概念，叫做 <ruby>标记<rt>token</rt></ruby> 和<ruby>词法分析<rt>lexical analyzer</rt></ruby>。现在我想谈一谈<ruby>词法<rt>lexeme</rt></ruby>、 <ruby>解析<rt>parsing</rt></ruby> 和<ruby>解析器<rt>parser</rt></ruby>。",11))]),s[34]||(s[34]=t('<p>你已经知道了标记。但是为了让我详细的讨论标记，我需要谈一谈词法。词法是什么？<ruby>词法<rt>lexeme</rt></ruby>是一个<ruby>标记<rt>token</rt></ruby>中的字符序列。在下图中你可以看到一些关于标记的例子，这可以让它们之间的关系变得清晰：</p><p><img src="https://ruslanspivak.com/lsbasi-part2/lsbasi_part2_lexemes.png" alt=""></p><p>现在还记得我们的朋友，<code>expr</code> 方法吗？我之前说过，这是数学表达式实际被解释的地方。但是你要先识别这个表达式有哪些词组才能解释它，比如它是加法还是减法。<code>expr</code> 方法最重要的工作是：它从 <code>get_next_token</code> 方法中得到流，并找出该标记流的结构，然后解释已经识别出的词组，产生数学表达式的结果。</p><p>在标记流中找出结构的过程，或者换种说法，识别标记流中的词组的过程就叫<ruby>解析<rt>parsing</rt></ruby>。解释器或者编译器中执行这个任务的部分就叫做<ruby>解析器<rt>parser</rt></ruby>。</p><p>现在你知道 <code>expr</code> 方法就是你的解释器的部分，<ruby>解析<rt>parsing</rt></ruby>和<ruby>解释<rt>interpreting</rt></ruby>都在这里发生 —— <code>expr</code> 方法首先尝试识别（解析）标记流里的 “整数 -&gt; 加法 -&gt; 整数” 或者 “整数 -&gt; 减法 -&gt; 整数” 词组，成功识别后 （解析了） 其中一个词组，这个方法就开始解释它，返回两个整数的和或差。</p><p>又到了练习的时间。</p><p><img src="https://ruslanspivak.com/lsbasi-part2/lsbasi_part2_exercises.png" alt=""></p><ol><li>扩展这个计算器，让它能够计算两个整数的乘法</li><li>扩展这个计算器，让它能够计算两个整数的除法</li><li>修改代码，让它能够解释包含了任意数量的加法和减法的表达式，比如 “9 - 5 + 3 + 11”</li></ol><p><strong>检验你的理解：</strong></p><ol><li>词法是什么？</li><li>找出标记流结构的过程叫什么，或者换种说法，识别标记流中一个词组的过程叫什么？</li><li>解释器（编译器）执行解析的部分叫什么？</li></ol><p>希望你喜欢今天的内容。在该系列的下一篇文章里你就能扩展计算器从而处理更多复杂的算术表达式。敬请期待。</p><hr>',12)),a("p",null,[s[14]||(s[14]=n("via: ",-1)),l(p,{href:"https://ruslanspivak.com/lsbasi-part2/"},{default:e(()=>[...s[13]||(s[13]=[n("https://ruslanspivak.com/lsbasi-part2/",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("作者：",-1)),l(p,{href:"https://ruslanspivak.com"},{default:e(()=>[...s[15]||(s[15]=[n("Ruslan Spivak",-1)])]),_:1}),s[19]||(s[19]=n(" 译者：",-1)),l(p,{href:"https://github.com/BriFuture"},{default:e(()=>[...s[16]||(s[16]=[n("BriFuture",-1)])]),_:1}),s[20]||(s[20]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[21]||(s[21]=[n("LCTT",-1)])]),_:1}),s[24]||(s[24]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[22]||(s[22]=[n("Linux中国",-1)])]),_:1}),s[25]||(s[25]=n(" 荣誉推出",-1))])])}const y=i(c,[["render",f]]);export{x as __pageData,y as default};
