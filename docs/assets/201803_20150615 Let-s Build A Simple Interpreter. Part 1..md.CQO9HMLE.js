import{_ as i,a0 as r,w as o,s as c,ao as t,I as l,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const E=JSON.parse('{"title":"让我们做个简单的解释器（一） | LCTT x X-CMD","titleTemplate":false,"description":"让我们做个简单的解释器（一） | LCTT (201803) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"让我们做个简单的解释器（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"让我们做个简单的解释器（一） | LCTT (201803) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201803/20150615 Let-s Build A Simple Interpreter. Part 1.","title":"让我们做个简单的解释器（一）","tag":"201803","desc":""},"relativePath":"201803/20150615 Let-s Build A Simple Interpreter. Part 1..md","filePath":"[post].md"}'),u={name:"201803/20150615 Let-s Build A Simple Interpreter. Part 1..md"};function g(d,s,k,f,_,b){const a=r("Link");return o(),c("div",null,[s[27]||(s[27]=t('<h1 id="让我们做个简单的解释器-一" tabindex="-1">让我们做个简单的解释器（一） <a class="header-anchor" href="#让我们做个简单的解释器-一" aria-label="Permalink to “让我们做个简单的解释器（一）”">​</a></h1><blockquote><p>“如果你不知道编译器是怎么工作的，那你就不知道电脑是怎么工作的。如果你不能百分百确定，那就是不知道它们是如何工作的。” --Steve Yegge</p></blockquote><p>就是这样。想一想。你是萌新还是一个资深的软件开发者实际上都无关紧要：如果你不知道<ruby>编译器<rt>compiler</rt></ruby>和<ruby>解释器<rt>interpreter</rt></ruby>是怎么工作的，那么你就不知道电脑是怎么工作的。就这么简单。</p><p>所以，你知道编译器和解释器是怎么工作的吗？我是说，你百分百确定自己知道他们怎么工作吗？如果不知道。</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_i_dont_know.png" alt=""></p><p>或者如果你不知道但你非常想要了解它。</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_omg.png" alt=""></p><p>不用担心。如果你能坚持跟着这个系列做下去，和我一起构建一个解释器和编译器，最后你将会知道他们是怎么工作的。并且你会变成一个自信满满的快乐的人。至少我希望如此。</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_i_know.png" alt=""></p><p>为什么要学习编译器和解释器？有三点理由。</p><ol><li>要写出一个解释器或编译器，你需要有很多的专业知识，并能融会贯通。写一个解释器或编译器能帮你加强这些能力，成为一个更厉害的软件开发者。而且，你要学的技能对编写软件非常有用，而不是仅仅局限于解释器或编译器。</li><li>你确实想要了解电脑是怎么工作的。通常解释器和编译器看上去很魔幻。你或许不习惯这种魔力。你会想去揭开构建解释器和编译器那层神秘的面纱，了解它们的原理，把事情做好。</li><li>你想要创建自己的编程语言或者特定领域的语言。如果你创建了一个，你还要为它创建一个解释器或者编译器。最近，兴起了对新的编程语言的兴趣。你能看到几乎每天都有一门新的编程语言横空出世：Elixir，Go，Rust，还有很多。</li></ol><p>好，但什么是解释器和编译器？</p><p><strong>解释器</strong> 和 <strong>编译器</strong> 的任务是把用高级语言写的源程序翻译成其他的格式。很奇怪，是不是？忍一忍，稍后你会在这个系列学到到底把源程序翻译成什么东西。</p><p>这时你可能会奇怪解释器和编译器之间有什么区别。为了实现这个系列的目的，我们规定一下，如果有个翻译器把源程序翻译成机器语言，那它就是 <strong>编译器</strong>。如果一个翻译器可以处理并执行源程序，却不用把它翻译器机器语言，那它就是 <strong>解释器</strong>。直观上它看起来像这样：</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_compiler_interpreter.png" alt=""></p><p>我希望你现在确信你很想学习构建一个编译器和解释器。你期望在这个教程里学习解释器的哪些知识呢？</p>',16)),l("p",null,[s[2]||(s[2]=n("你看这样如何。你和我一起为 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/Pascal_%28programming_language%29"},{default:e(()=>[...s[0]||(s[0]=[n("Pascal",-1)])]),_:1}),s[3]||(s[3]=n(" 语言的一个大子集做一个简单的解释器。在这个系列结束的时候你能做出一个可以运行的 Pascal 解释器和一个像 Python 的 ",-1)),p(a,{href:"https://docs.python.org/2/library/pdb.html"},{default:e(()=>[...s[1]||(s[1]=[n("pdb",-1)])]),_:1}),s[4]||(s[4]=n(" 那样的源代码级别的调试器。",-1))]),s[28]||(s[28]=t(`<p>你或许会问，为什么是 Pascal？一方面，它不是我为了这个系列而提出的一个虚构的语言：它是真实存在的一门编程语言，有很多重要的语言结构。有些陈旧但有用的计算机书籍使用 Pascal 编程语言作为示例（我知道对于选择一门语言来构建解释器，这个理由并不令人信服，但我认为学一门非主流的语言也不错 :））。</p><p>这有个 Pascal 中的阶乘函数示例，你将能用自己的解释器解释代码，还能够用可交互的源码级调试器进行调试，你可以这样创造：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>program factorial;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function factorial(n: integer): longint;</span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>    if n = 0 then</span></span>
<span class="line"><span>        factorial := 1</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        factorial := n * factorial(n - 1);</span></span>
<span class="line"><span>end;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var</span></span>
<span class="line"><span>    n: integer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>begin</span></span>
<span class="line"><span>    for n := 0 to 16 do</span></span>
<span class="line"><span>        writeln(n, &#39;! = &#39;, factorial(n));</span></span>
<span class="line"><span>end.</span></span></code></pre></div><p>这个 Pascal 解释器的实现语言会使用 Python，但你也可以用其他任何语言，因为这里展示的思想不依赖任何特殊的实现语言。好，让我们开始干活。准备好了，出发！</p><p>你会从编写一个简单的算术表达式解析器，也就是常说的计算器，开始学习解释器和编译器。今天的目标非常简单：让你的计算器能处理两个个位数相加，比如 <code>3+5</code>。下面是你的计算器的源代码——不好意思，是解释器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 标记类型</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># EOF （end-of-file 文件末尾）标记是用来表示所有输入都解析完成</span></span>
<span class="line"><span>INTEGER, PLUS, EOF = &#39;INTEGER&#39;, &#39;PLUS&#39;, &#39;EOF&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Token(object):</span></span>
<span class="line"><span>    def __init__(self, type, value):</span></span>
<span class="line"><span>        # token 类型: INTEGER, PLUS, MINUS, or EOF</span></span>
<span class="line"><span>        self.type = type</span></span>
<span class="line"><span>        # token 值: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, &#39;+&#39;, 或 None</span></span>
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
<span class="line"><span>        # 用户输入字符串, 例如 &quot;3+5&quot;</span></span>
<span class="line"><span>        self.text = text</span></span>
<span class="line"><span>        # self.pos 是 self.text 的索引</span></span>
<span class="line"><span>        self.pos = 0</span></span>
<span class="line"><span>        # 当前标记实例</span></span>
<span class="line"><span>        self.current_token = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def error(self):</span></span>
<span class="line"><span>        raise Exception(&#39;Error parsing input&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_next_token(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;词法分析器（也说成扫描器或者标记器）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        该方法负责把一个句子分成若干个标记。每次处理一个标记</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        text = self.text</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # self.pos 索引到达了 self.text 的末尾吗？</span></span>
<span class="line"><span>        # 如果到了，就返回 EOF 标记，因为没有更多的</span></span>
<span class="line"><span>        # 能转换成标记的输入了</span></span>
<span class="line"><span>        if self.pos &gt; len(text) - 1:</span></span>
<span class="line"><span>            return Token(EOF, None)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 从 self.pos 位置获取当前的字符，</span></span>
<span class="line"><span>        # 基于单个字符判断要生成哪种标记</span></span>
<span class="line"><span>        current_char = text[self.pos]</span></span>
<span class="line"><span>        # 如果字符是一个数字，就把他转换成一个整数，生成一个 INTEGER # 标记，累加 self.pos 索引，指向数字后面的下一个字符，</span></span>
<span class="line"><span>        # 并返回 INTEGER 标记</span></span>
<span class="line"><span>        if current_char.isdigit():</span></span>
<span class="line"><span>            token = Token(INTEGER, int(current_char))</span></span>
<span class="line"><span>            self.pos += 1</span></span>
<span class="line"><span>            return token</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if current_char == &#39;+&#39;:</span></span>
<span class="line"><span>            token = Token(PLUS, current_char)</span></span>
<span class="line"><span>            self.pos += 1</span></span>
<span class="line"><span>            return token</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.error()</span></span>
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
<span class="line"><span>        &quot;&quot;&quot;expr -&gt; INTEGER PLUS INTEGER&quot;&quot;&quot;</span></span>
<span class="line"><span>        # 将输入中的第一个标记设置成当前标记</span></span>
<span class="line"><span>        self.current_token = self.get_next_token()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 我们期望当前标记是个位数。</span></span>
<span class="line"><span>        left = self.current_token</span></span>
<span class="line"><span>        self.eat(INTEGER)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 期望当前标记是 ‘+’ 号</span></span>
<span class="line"><span>        op = self.current_token</span></span>
<span class="line"><span>        self.eat(PLUS)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 我们期望当前标记是个位数。</span></span>
<span class="line"><span>        right = self.current_token</span></span>
<span class="line"><span>        self.eat(INTEGER)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 上述操作完成后，self.current_token 被设成 EOF 标记</span></span>
<span class="line"><span>        # 这时成功找到 INTEGER PLUS INTEGER 标记序列</span></span>
<span class="line"><span>        # 这个方法就可以返回两个整数相加的结果了，</span></span>
<span class="line"><span>        # 即高效的解释了用户输入</span></span>
<span class="line"><span>        result = left.value + right.value</span></span>
<span class="line"><span>        return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            # 要在 Python3 下运行，请把 ‘raw_input’ 换成 ‘input’</span></span>
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
<span class="line"><span>    main()</span></span></code></pre></div>`,6)),l("p",null,[s[6]||(s[6]=n("把上面的代码保存到 ",-1)),s[7]||(s[7]=l("code",null,"calc1.py",-1)),s[8]||(s[8]=n(" 文件，或者直接从 ",-1)),p(a,{href:"https://github.com/rspivak/lsbasi/blob/master/part1/calc1.py"},{default:e(()=>[...s[5]||(s[5]=[n("GitHub",-1)])]),_:1}),s[9]||(s[9]=n(" 上下载。在你深入研究代码前，在命令行里面运行它看看效果。试一试！这是我笔记本上的示例会话（如果你想在 Python3 下运行，你要把 ",-1)),s[10]||(s[10]=l("code",null,"raw_input",-1)),s[11]||(s[11]=n(" 换成 ",-1)),s[12]||(s[12]=l("code",null,"input",-1)),s[13]||(s[13]=n("）：",-1))]),s[29]||(s[29]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python calc1.py</span></span>
<span class="line"><span>calc&gt; 3+4</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>calc&gt; 3+5</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>calc&gt; 3+9</span></span>
<span class="line"><span>12</span></span>
<span class="line"><span>calc&gt;</span></span></code></pre></div><p>要让你的简易计算器正常工作，不抛出异常，你的输入要遵守以下几个规则：</p><ul><li>只允许输入个位数</li><li>此时支持的唯一一个运算符是加法</li><li>输入中不允许有任何的空格符号</li></ul><p>要让计算器变得简单，这些限制非常必要。不用担心，你很快就会让它变得很复杂。</p><p>好，现在让我们深入它，看看解释器是怎么工作，它是怎么评估出算术表达式的。</p><p>当你在命令行中输入一个表达式 <code>3+5</code>，解释器就获得了字符串 “3+5”。为了让解释器能够真正理解要用这个字符串做什么，它首先要把输入 “3+5” 分到叫做 <code>token</code>（标记）的容器里。<ruby>标记<rt>token</rt></ruby> 是一个拥有类型和值的对象。比如说，对字符 “3” 而言，标记的类型是 INTEGER 整数，对应的值是 3。</p><p>把输入字符串分成标记的过程叫<ruby>词法分析<rt>lexical analysis</rt></ruby>。因此解释器的需要做的第一步是读取输入字符，并将其转换成标记流。解释器中的这一部分叫做<ruby>词法分析器<rt>lexical analyzer</rt></ruby>，或者简短点叫 <strong>lexer</strong>。你也可以给它起别的名字，诸如<ruby>扫描器<rt>scanner</rt></ruby>或者<ruby>标记器<rt>tokenizer</rt></ruby>。它们指的都是同一个东西：解释器或编译器中将输入字符转换成标记流的那部分。</p><p><code>Interpreter</code> 类中的 <code>get_next_token</code> 方法就是词法分析器。每次调用它的时候，你都能从传入解释器的输入字符中获得创建的下一个标记。仔细看看这个方法，看看它是如何完成把字符转换成标记的任务的。输入被存在可变文本中，它保存了输入的字符串和关于该字符串的索引（把字符串想象成字符数组）。<code>pos</code> 开始时设为 0，指向字符 ‘3’。这个方法一开始检查字符是不是数字，如果是，就将 <code>pos</code> 加 1，并返回一个 INTEGER 类型的标记实例，并把字符 ‘3’ 的值设为整数，也就是整数 3：</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_lexer1.png" alt=""></p><p>现在 <code>pos</code> 指向文本中的 ‘+’ 号。下次调用这个方法的时候，它会测试 <code>pos</code> 位置的字符是不是个数字，然后检测下一个字符是不是个加号，就是这样。结果这个方法把 <code>pos</code> 加 1，返回一个新创建的标记，类型是 PLUS，值为 ‘+’。</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_lexer2.png" alt=""></p><p><code>pos</code> 现在指向字符 ‘5’。当你再调用 <code>get_next_token</code> 方法时，该方法会检查这是不是个数字，就是这样，然后它把 <code>pos</code> 加 1，返回一个新的 INTEGER 标记，该标记的值被设为整数 5：</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_lexer3.png" alt=""></p><p>因为 <code>pos</code> 索引现在到了字符串 “3+5” 的末尾，你每次调用 <code>get_next_token</code> 方法时，它将会返回 EOF 标记：</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_lexer4.png" alt=""></p><p>自己试一试，看看计算器里的词法分析器的运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; from calc1 import Interpreter</span></span>
<span class="line"><span>&gt;&gt;&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; interpreter = Interpreter(&#39;3+5&#39;)</span></span>
<span class="line"><span>&gt;&gt;&gt; interpreter.get_next_token()</span></span>
<span class="line"><span>Token(INTEGER, 3)</span></span>
<span class="line"><span>&gt;&gt;&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; interpreter.get_next_token()</span></span>
<span class="line"><span>Token(PLUS, &#39;+&#39;)</span></span>
<span class="line"><span>&gt;&gt;&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; interpreter.get_next_token()</span></span>
<span class="line"><span>Token(INTEGER, 5)</span></span>
<span class="line"><span>&gt;&gt;&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; interpreter.get_next_token()</span></span>
<span class="line"><span>Token(EOF, None)</span></span>
<span class="line"><span>&gt;&gt;&gt;</span></span></code></pre></div><p>既然你的解释器能够从输入字符中获取标记流，解释器需要对它做点什么：它需要在词法分析器 <code>get_next_token</code> 中获取的标记流中找出相应的结构。你的解释器应该能够找到流中的结构：INTEGER -&gt; PLUS -&gt; INTEGER。就是这样，它尝试找出标记的序列：整数后面要跟着加号，加号后面要跟着整数。</p><p>负责找出并解释结构的方法就是 <code>expr</code>。该方法检验标记序列确实与期望的标记序列是对应的，比如 INTEGER -&gt; PLUS -&gt; INTEGER。成功确认了这个结构后，就会生成加号左右两边的标记的值相加的结果，这样就成功解释你输入到解释器中的算术表达式了。</p><p><code>expr</code> 方法用了一个助手方法 <code>eat</code> 来检验传入的标记类型是否与当前的标记类型相匹配。在匹配到传入的标记类型后，<code>eat</code> 方法会获取下一个标记，并将其赋给 <code>current_token</code> 变量，然后高效地 “吃掉” 当前匹配的标记，并将标记流的虚拟指针向后移动。如果标记流的结构与期望的 INTEGER -&gt; PLUS -&gt; INTEGER 标记序列不对应，<code>eat</code> 方法就抛出一个异常。</p><p>让我们回顾下解释器做了什么来对算术表达式进行评估的：</p><ul><li>解释器接受输入字符串，比如说 “3+5”</li><li>解释器调用 <code>expr</code> 方法，在词法分析器 <code>get_next_token</code> 返回的标记流中找出结构。这个结构就是 INTEGER -&gt; PLUS -&gt; INTEGER 这样的格式。在确认了格式后，它就通过把两个整型标记相加来解释输入，因为此时对于解释器来说很清楚，它要做的就是把两个整数 3 和 5 进行相加。</li></ul><p>恭喜。你刚刚学习了怎么构建自己的第一个解释器！</p><p>现在是时候做练习了。</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_exercises2.png" alt=""></p><p>看了这篇文章，你肯定觉得不够，是吗？好，准备好做这些练习：</p><ol><li>修改代码，允许输入多位数，比如 “12+3”</li><li>添加一个方法忽略空格符，让你的计算器能够处理带有空白的输入，比如 “12 + 3”</li><li>修改代码，用 ‘-’ 号而非 ‘+’ 号去执行减法比如 “7-5”</li></ol><p><strong>检验你的理解</strong></p><ol><li>什么是解释器？</li><li>什么是编译器</li><li>解释器和编译器有什么差别？</li><li>什么是标记?</li><li>将输入分隔成若干个标记的过程叫什么？</li><li>解释器中进行词法分析的部分叫什么？</li><li>解释器或编译器中进行词法分析的部分有哪些其他的常见名字？</li></ol><p>在结束本文前，我衷心希望你能留下学习解释器和编译器的承诺。并且现在就开始做。不要把它留到以后。不要拖延。如果你已经看完了本文，就开始吧。如果已经仔细看完了但是还没做什么练习 —— 现在就开始做吧。如果已经开始做练习了，那就把剩下的做完。你懂得。而且你知道吗？签下承诺书，今天就开始学习解释器和编译器！</p><blockquote><p>本人， ______，身体健全，思想正常，在此承诺从今天开始学习解释器和编译器，直到我百分百了解它们是怎么工作的！</p></blockquote><blockquote></blockquote><blockquote><p>签字人:</p></blockquote><blockquote><p>日期:</p></blockquote><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_commitment_pledge.png" alt=""></p><p>签字，写上日期，把它放在你每天都能看到的地方，确保你能坚守承诺。谨记你的承诺：</p><blockquote><p>“承诺就是，你说自己会去做的事，在你说完就一直陪着你的东西。” —— Darren Hardy</p></blockquote><p>好，今天的就结束了。这个系列的下一篇文章里，你将会扩展自己的计算器，让它能够处理更复杂的算术表达式。敬请期待。</p><hr>`,39)),l("p",null,[s[15]||(s[15]=n("via: ",-1)),p(a,{href:"https://ruslanspivak.com/lsbasi-part1/"},{default:e(()=>[...s[14]||(s[14]=[n("https://ruslanspivak.com/lsbasi-part1/",-1)])]),_:1})]),l("p",null,[s[19]||(s[19]=n("作者：",-1)),p(a,{href:"https://ruslanspivak.com"},{default:e(()=>[...s[16]||(s[16]=[n("Ruslan Spivak",-1)])]),_:1}),s[20]||(s[20]=n(" 译者：",-1)),p(a,{href:"https://github.com/BriFuture"},{default:e(()=>[...s[17]||(s[17]=[n("BriFuture",-1)])]),_:1}),s[21]||(s[21]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[18]||(s[18]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[24]||(s[24]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[23]||(s[23]=[n("Linux中国",-1)])]),_:1}),s[26]||(s[26]=n(" 荣誉推出",-1))])])}const x=i(u,[["render",g]]);export{E as __pageData,x as default};
