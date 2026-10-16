import{_ as i,a0 as r,w as o,s as c,I as a,x as n,a1 as e,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"让我们做个简单的解释器（三） | LCTT x X-CMD","titleTemplate":false,"description":"让我们做个简单的解释器（三） | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"让我们做个简单的解释器（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"让我们做个简单的解释器（三） | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20150812 Let-s Build A Simple Interpreter. Part 3.","title":"让我们做个简单的解释器（三）","tag":"201804","desc":""},"relativePath":"201804/20150812 Let-s Build A Simple Interpreter. Part 3..md","filePath":"[post].md"}'),u={name:"201804/20150812 Let-s Build A Simple Interpreter. Part 3..md"};function f(d,s,g,k,m,h){const p=r("Link");return o(),c("div",null,[s[30]||(s[30]=a("h1",{id:"让我们做个简单的解释器-三",tabindex:"-1"},[n("让我们做个简单的解释器（三） "),a("a",{class:"header-anchor",href:"#让我们做个简单的解释器-三","aria-label":"Permalink to “让我们做个简单的解释器（三）”"},"​")],-1)),s[31]||(s[31]=a("p",null,"早上醒来的时候，我就在想：“为什么我们学习一个新技能这么难？”",-1)),s[32]||(s[32]=a("p",null,"我不认为那是因为它很难。我认为原因可能在于我们花了太多的时间，而这件难事需要有丰富的阅历和足够的知识，然而我们要把这样的知识转换成技能所用的练习时间又不够。",-1)),s[33]||(s[33]=a("p",null,"拿游泳来说，你可以花上几天时间来阅读很多有关游泳的书籍，花几个小时和资深的游泳者和教练交流，观看所有可以获得的训练视频，但你第一次跳进水池的时候，仍然会像一个石头那样沉入水中，",-1)),a("p",null,[s[2]||(s[2]=n("要点在于：你认为自己有多了解那件事都无关紧要 —— 你得通过练习把知识变成技能。为了帮你练习，我把训练放在了这个系列的 ",-1)),e(p,{href:"https://linux.cn/article-9399-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第一部分",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),e(p,{href:"https://linux.cn/article-9520-1.html"},{default:l(()=>[...s[1]||(s[1]=[n("第二部分",-1)])]),_:1}),s[4]||(s[4]=n(" 了。当然，你会在今后的文章中看到更多练习，我保证 ：)",-1))]),s[34]||(s[34]=t(`<p>好，让我们开始今天的学习。</p><p>到现在为止，你已经知道了怎样解释像 “7 + 3” 或者 “12 - 9” 这样的两个整数相加减的算术表达式。今天我要说的是怎么解析（识别）、解释有多个数字相加减的算术表达式，比如 “7 - 3 + 2 - 1”。</p><p>文中的这个算术表达式可以用下面的这个语法图表示：</p><p><img src="https://ruslanspivak.com/lsbasi-part3/lsbasi_part3_syntax_diagram.png" alt=""></p><p>什么是<ruby>语法图<rt>syntax diagram</rt></ruby>？ <strong>语法图</strong> 是对一门编程语言中的语法规则进行图像化的表示。基本上，一个语法图就能告诉你哪些语句可以在程序中出现，哪些不能出现。</p><p>语法图很容易读懂：按照箭头指向的路径。某些路径表示的是判断，有些表示的是循环。</p><p>你可以按照以下的方式读上面的语法图：一个 term 后面可以是加号或者减号，接着可以是另一个 term，这个 term 后面又可以是一个加号或者减号，后面又是一个 term，如此循环。从字面上你就能读懂这个图片了。或许你会奇怪，“term” 是什么、对于本文来说，“term” 就是个整数。</p><p>语法图有两个主要的作用：</p><ul><li>它们用图形的方式表示一个编程语言的特性（语法）。</li><li>它们可以用来帮你写出解析器 —— 你可以根据下列简单规则把图片转换成代码。</li></ul><p>你已经知道，识别出记号流中的词组的过程就叫做 <strong>解析</strong>。解释器或者编译器执行这个任务的部分叫做 <strong>解析器</strong>。解析也称为 <strong>语法分析</strong>，并且解析器这个名字很合适，你猜的对，就是 <strong>语法分析器</strong>。</p><p>根据上面的语法图，下面这些表达式都是合法的：</p><ul><li>3</li><li>3 + 4</li><li>7 - 3 + 2 - 1</li></ul><p>因为算术表达式的语法规则在不同的编程语言里面是很相近的，我们可以用 Python shell 来“测试”语法图。打开 Python shell，运行下面的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; 3</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>&gt;&gt;&gt; 3 + 4</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>&gt;&gt;&gt; 7 - 3 + 2 - 1</span></span>
<span class="line"><span>5</span></span></code></pre></div><p>意料之中。</p><p>表达式 “3 + ” 不是一个有效的数学表达式，根据语法图，加号后面必须要有个 term （整数），否则就是语法错误。然后，自己在 Python shell 里面运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; 3 +</span></span>
<span class="line"><span>  File &quot;&lt;stdin&gt;&quot;, line 1</span></span>
<span class="line"><span>    3 +</span></span>
<span class="line"><span>      ^</span></span>
<span class="line"><span>SyntaxError: invalid syntax</span></span></code></pre></div><p>能用 Python shell 来做这样的测试非常棒，让我们把上面的语法图转换成代码，用我们自己的解释器来测试，怎么样？</p>`,18)),a("p",null,[s[7]||(s[7]=n("从之前的文章里（",-1)),e(p,{href:"https://linux.cn/article-9399-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("第一部分",-1)])]),_:1}),s[8]||(s[8]=n(" 和 ",-1)),e(p,{href:"https://linux.cn/article-9520-1.html"},{default:l(()=>[...s[6]||(s[6]=[n("第二部分",-1)])]),_:1}),s[9]||(s[9]=n("）你知道 ",-1)),s[10]||(s[10]=a("code",null,"expr",-1)),s[11]||(s[11]=n(" 方法包含了我们的解析器和解释器。再说一遍，解析器仅仅识别出结构，确保它与某些特性对应，而解释器实际上是在解析器成功识别（解析）特性之后，就立即对表达式进行评估。",-1))]),s[35]||(s[35]=t(`<p>以下代码片段显示了对应于图表的解析器代码。语法图里面的矩形方框（term）变成了 term 方法，用于解析整数，expr 方法和语法图的流程一致：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def term(self):</span></span>
<span class="line"><span>    self.eat(INTEGER)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def expr(self):</span></span>
<span class="line"><span>    # 把当前标记设为从输入中拿到的第一个标记</span></span>
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
<span class="line"><span>            self.term()</span></span></code></pre></div><p>你能看到 <code>expr</code> 首先调用了 <code>term</code> 方法。然后 <code>expr</code> 方法里面的 <code>while</code> 循环可以执行 0 或多次。在循环里面解析器基于标记做出判断（是加号还是减号）。花一些时间，你就知道，上述代码确实是遵循着语法图的算术表达式流程。</p><p>解析器并不解释任何东西：如果它识别出了一个表达式，它就静默着，如果没有识别出来，就会抛出一个语法错误。改一下 <code>expr</code> 方法，加入解释器的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def term(self):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Return an INTEGER token value&quot;&quot;&quot;</span></span>
<span class="line"><span>    token = self.current_token</span></span>
<span class="line"><span>    self.eat(INTEGER)</span></span>
<span class="line"><span>    return token.value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def expr(self):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Parser / Interpreter &quot;&quot;&quot;</span></span>
<span class="line"><span>    # 将输入中的第一个标记设置成当前标记</span></span>
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
<span class="line"><span>    return result</span></span></code></pre></div><p>因为解释器需要评估一个表达式， <code>term</code> 方法被改成返回一个整型值，<code>expr</code> 方法被改成在合适的地方执行加法或减法操作，并返回解释的结果。尽管代码很直白，我建议花点时间去理解它。</p><p>进行下一步，看看完整的解释器代码，好不？</p><p>这是新版计算器的源代码，它可以处理包含有任意多个加法和减法运算的有效的数学表达式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 标记类型</span></span>
<span class="line"><span>#</span></span>
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
<span class="line"><span>        # 客户端字符输入， 例如. &quot;3 + 5&quot;, &quot;12 - 5&quot;, </span></span>
<span class="line"><span>        self.text = text</span></span>
<span class="line"><span>        # self.pos is an index into self.text</span></span>
<span class="line"><span>        self.pos = 0</span></span>
<span class="line"><span>        # 当前标记实例</span></span>
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
<span class="line"><span>        # 将当前的标记类型与传入的标记类型作比较，如果他们相匹配，就</span></span>
<span class="line"><span>        # “eat” 掉当前的标记并将下一个标记赋给 self.current_token，</span></span>
<span class="line"><span>        # 否则抛出一个异常</span></span>
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
<span class="line"><span>        # 将输入中的第一个标记设置成当前标记</span></span>
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
<span class="line"><span>            # 要在 Python3 下运行，请把 ‘raw_input’ 的调用换成 ‘input’</span></span>
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
<span class="line"><span>    main()</span></span></code></pre></div>`,9)),a("p",null,[s[13]||(s[13]=n("把上面的代码保存到 ",-1)),s[14]||(s[14]=a("code",null,"calc3.py",-1)),s[15]||(s[15]=n(" 文件中，或者直接从 ",-1)),e(p,{href:"https://github.com/rspivak/lsbasi/blob/master/part3/calc3.py"},{default:l(()=>[...s[12]||(s[12]=[n("GitHub",-1)])]),_:1}),s[16]||(s[16]=n(" 上下载。试着运行它。看看它能不能处理我之前给你看过的语法图里面派生出的数学表达式。",-1))]),s[36]||(s[36]=t(`<p>这是我在自己的笔记本上运行的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python calc3.py</span></span>
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
<span class="line"><span>Exception: Invalid syntax</span></span></code></pre></div><p>记得我在文章开始时提过的练习吗：它们在这儿，我保证过的：)</p><p><img src="https://ruslanspivak.com/lsbasi-part3/lsbasi_part3_exercises.png" alt=""></p><ul><li>画出只包含乘法和除法的数学表达式的语法图，比如 “7 * 4 / 2 * 3”。认真点，拿只钢笔或铅笔，试着画一个。 修改计算器的源代码，解释只包含乘法和除法的数学表达式。比如 “7 * 4 / 2 * 3”。</li><li>从头写一个可以处理像 “7 - 3 + 2 - 1” 这样的数学表达式的解释器。用你熟悉的编程语言，不看示例代码自己思考着写出代码。做的时候要想一想这里面包含的组件：一个词法分析器，读取输入并转换成标记流，一个解析器，从词法分析器提供的记号流中获取，并且尝试识别流中的结构，一个解释器，在解析器成功解析（识别）有效的数学表达式后产生结果。把这些要点串起来。花一点时间把你获得的知识变成一个可以运行的数学表达式的解释器。</li></ul><p><strong>检验你的理解。</strong></p><ol><li>什么是语法图？</li><li>什么是语法分析？</li><li>什么是语法分析器？</li></ol><p>嘿，看！你看完了所有内容。感谢你们坚持到今天，而且没有忘记练习。😃 下次我会带着新的文章回来，尽请期待。</p><hr>`,9)),a("p",null,[s[18]||(s[18]=n("via: ",-1)),e(p,{href:"https://ruslanspivak.com/lsbasi-part3/"},{default:l(()=>[...s[17]||(s[17]=[n("https://ruslanspivak.com/lsbasi-part3/",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("作者：",-1)),e(p,{href:"https://ruslanspivak.com"},{default:l(()=>[...s[19]||(s[19]=[n("Ruslan Spivak",-1)])]),_:1}),s[23]||(s[23]=n(" 译者：",-1)),e(p,{href:"https://github.com/BriFuture"},{default:l(()=>[...s[20]||(s[20]=[n("BriFuture",-1)])]),_:1}),s[24]||(s[24]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[26]||(s[26]=[n("Linux中国",-1)])]),_:1}),s[29]||(s[29]=n(" 荣誉推出",-1))])])}const q=i(u,[["render",f]]);export{b as __pageData,q as default};
