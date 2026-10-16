import{_ as i,a0 as r,w as o,s as c,ao as t,I as l,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const E=JSON.parse('{"title":"讓我們做個簡單的解釋器（一） | LCTT x X-CMD","titleTemplate":false,"description":"讓我們做個簡單的解釋器（一） | LCTT (201803) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"讓我們做個簡單的解釋器（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"讓我們做個簡單的解釋器（一） | LCTT (201803) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201803/20150615 Let-s Build A Simple Interpreter. Part 1.","title":"讓我們做個簡單的解釋器（一）","tag":"201803","desc":""},"relativePath":"201803/20150615 Let-s Build A Simple Interpreter. Part 1..md","filePath":"[post].md"}'),u={name:"201803/20150615 Let-s Build A Simple Interpreter. Part 1..md"};function g(d,s,k,f,_,b){const a=r("Link");return o(),c("div",null,[s[27]||(s[27]=t('<h1 id="讓我們做個簡單的解釋器-一" tabindex="-1">讓我們做個簡單的解釋器（一） <a class="header-anchor" href="#讓我們做個簡單的解釋器-一" aria-label="Permalink to “讓我們做個簡單的解釋器（一）”">​</a></h1><blockquote><p>“如果你不知道編譯器是怎麼工作的，那你就不知道電腦是怎麼工作的。如果你不能百分百確定，那就是不知道它們是如何工作的。” --Steve Yegge</p></blockquote><p>就是這樣。想一想。你是萌新還是一個資深的軟件開發者實際上都無關緊要：如果你不知道<ruby>編譯器<rt>compiler</rt></ruby>和<ruby>解釋器<rt>interpreter</rt></ruby>是怎麼工作的，那麼你就不知道電腦是怎麼工作的。就這麼簡單。</p><p>所以，你知道編譯器和解釋器是怎麼工作的嗎？我是説，你百分百確定自己知道他們怎麼工作嗎？如果不知道。</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_i_dont_know.png" alt=""></p><p>或者如果你不知道但你非常想要了解它。</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_omg.png" alt=""></p><p>不用擔心。如果你能堅持跟着這個系列做下去，和我一起構建一個解釋器和編譯器，最後你將會知道他們是怎麼工作的。並且你會變成一個自信滿滿的快樂的人。至少我希望如此。</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_i_know.png" alt=""></p><p>為什麼要學習編譯器和解釋器？有三點理由。</p><ol><li>要寫出一個解釋器或編譯器，你需要有很多的專業知識，並能融會貫通。寫一個解釋器或編譯器能幫你加強這些能力，成為一個更厲害的軟件開發者。而且，你要學的技能對編寫軟件非常有用，而不是僅僅侷限於解釋器或編譯器。</li><li>你確實想要了解電腦是怎麼工作的。通常解釋器和編譯器看上去很魔幻。你或許不習慣這種魔力。你會想去揭開構建解釋器和編譯器那層神秘的面紗，瞭解它們的原理，把事情做好。</li><li>你想要創建自己的編程語言或者特定領域的語言。如果你創建了一個，你還要為它創建一個解釋器或者編譯器。最近，興起了對新的編程語言的興趣。你能看到幾乎每天都有一門新的編程語言橫空出世：Elixir，Go，Rust，還有很多。</li></ol><p>好，但什麼是解釋器和編譯器？</p><p><strong>解釋器</strong> 和 <strong>編譯器</strong> 的任務是把用高級語言寫的源程序翻譯成其他的格式。很奇怪，是不是？忍一忍，稍後你會在這個系列學到到底把源程序翻譯成什麼東西。</p><p>這時你可能會奇怪解釋器和編譯器之間有什麼區別。為了實現這個系列的目的，我們規定一下，如果有個翻譯器把源程序翻譯成機器語言，那它就是 <strong>編譯器</strong>。如果一個翻譯器可以處理並執行源程序，卻不用把它翻譯器機器語言，那它就是 <strong>解釋器</strong>。直觀上它看起來像這樣：</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_compiler_interpreter.png" alt=""></p><p>我希望你現在確信你很想學習構建一個編譯器和解釋器。你期望在這個教程裏學習解釋器的哪些知識呢？</p>',16)),l("p",null,[s[2]||(s[2]=n("你看這樣如何。你和我一起為 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/Pascal_%28programming_language%29"},{default:e(()=>[...s[0]||(s[0]=[n("Pascal",-1)])]),_:1}),s[3]||(s[3]=n(" 語言的一個大子集做一個簡單的解釋器。在這個系列結束的時候你能做出一個可以運行的 Pascal 解釋器和一個像 Python 的 ",-1)),p(a,{href:"https://docs.python.org/2/library/pdb.html"},{default:e(()=>[...s[1]||(s[1]=[n("pdb",-1)])]),_:1}),s[4]||(s[4]=n(" 那樣的源代碼級別的調試器。",-1))]),s[28]||(s[28]=t(`<p>你或許會問，為什麼是 Pascal？一方面，它不是我為了這個系列而提出的一個虛構的語言：它是真實存在的一門編程語言，有很多重要的語言結構。有些陳舊但有用的計算機書籍使用 Pascal 編程語言作為示例（我知道對於選擇一門語言來構建解釋器，這個理由並不令人信服，但我認為學一門非主流的語言也不錯 :））。</p><p>這有個 Pascal 中的階乘函數示例，你將能用自己的解釋器解釋代碼，還能夠用可交互的源碼級調試器進行調試，你可以這樣創造：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>program factorial;</span></span>
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
<span class="line"><span>end.</span></span></code></pre></div><p>這個 Pascal 解釋器的實現語言會使用 Python，但你也可以用其他任何語言，因為這裏展示的思想不依賴任何特殊的實現語言。好，讓我們開始幹活。準備好了，出發！</p><p>你會從編寫一個簡單的算術表達式解析器，也就是常説的計算器，開始學習解釋器和編譯器。今天的目標非常簡單：讓你的計算器能處理兩個個位數相加，比如 <code>3+5</code>。下面是你的計算器的源代碼——不好意思，是解釋器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 標記類型</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># EOF （end-of-file 文件末尾）標記是用來表示所有輸入都解析完成</span></span>
<span class="line"><span>INTEGER, PLUS, EOF = &#39;INTEGER&#39;, &#39;PLUS&#39;, &#39;EOF&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Token(object):</span></span>
<span class="line"><span>    def __init__(self, type, value):</span></span>
<span class="line"><span>        # token 類型: INTEGER, PLUS, MINUS, or EOF</span></span>
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
<span class="line"><span>        # 用户輸入字符串, 例如 &quot;3+5&quot;</span></span>
<span class="line"><span>        self.text = text</span></span>
<span class="line"><span>        # self.pos 是 self.text 的索引</span></span>
<span class="line"><span>        self.pos = 0</span></span>
<span class="line"><span>        # 當前標記實例</span></span>
<span class="line"><span>        self.current_token = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def error(self):</span></span>
<span class="line"><span>        raise Exception(&#39;Error parsing input&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_next_token(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;詞法分析器（也説成掃描器或者標記器）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        該方法負責把一個句子分成若干個標記。每次處理一個標記</span></span>
<span class="line"><span>        &quot;&quot;&quot;</span></span>
<span class="line"><span>        text = self.text</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # self.pos 索引到達了 self.text 的末尾嗎？</span></span>
<span class="line"><span>        # 如果到了，就返回 EOF 標記，因為沒有更多的</span></span>
<span class="line"><span>        # 能轉換成標記的輸入了</span></span>
<span class="line"><span>        if self.pos &gt; len(text) - 1:</span></span>
<span class="line"><span>            return Token(EOF, None)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 從 self.pos 位置獲取當前的字符，</span></span>
<span class="line"><span>        # 基於單個字符判斷要生成哪種標記</span></span>
<span class="line"><span>        current_char = text[self.pos]</span></span>
<span class="line"><span>        # 如果字符是一個數字，就把他轉換成一個整數，生成一個 INTEGER # 標記，累加 self.pos 索引，指向數字後面的下一個字符，</span></span>
<span class="line"><span>        # 並返回 INTEGER 標記</span></span>
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
<span class="line"><span>        # 將當前的標記類型與傳入的標記類型作比較，如果他們相匹配，就</span></span>
<span class="line"><span>        # “eat” 掉當前的標記並將下一個標記賦給 self.current_token，</span></span>
<span class="line"><span>        # 否則拋出一個異常</span></span>
<span class="line"><span>        if self.current_token.type == token_type:</span></span>
<span class="line"><span>            self.current_token = self.get_next_token()</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.error()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def expr(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;expr -&gt; INTEGER PLUS INTEGER&quot;&quot;&quot;</span></span>
<span class="line"><span>        # 將輸入中的第一個標記設置成當前標記</span></span>
<span class="line"><span>        self.current_token = self.get_next_token()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 我們期望當前標記是個位數。</span></span>
<span class="line"><span>        left = self.current_token</span></span>
<span class="line"><span>        self.eat(INTEGER)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 期望當前標記是 ‘+’ 號</span></span>
<span class="line"><span>        op = self.current_token</span></span>
<span class="line"><span>        self.eat(PLUS)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 我們期望當前標記是個位數。</span></span>
<span class="line"><span>        right = self.current_token</span></span>
<span class="line"><span>        self.eat(INTEGER)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 上述操作完成後，self.current_token 被設成 EOF 標記</span></span>
<span class="line"><span>        # 這時成功找到 INTEGER PLUS INTEGER 標記序列</span></span>
<span class="line"><span>        # 這個方法就可以返回兩個整數相加的結果了，</span></span>
<span class="line"><span>        # 即高效的解釋了用户輸入</span></span>
<span class="line"><span>        result = left.value + right.value</span></span>
<span class="line"><span>        return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            # 要在 Python3 下運行，請把 ‘raw_input’ 換成 ‘input’</span></span>
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
<span class="line"><span>    main()</span></span></code></pre></div>`,6)),l("p",null,[s[6]||(s[6]=n("把上面的代碼保存到 ",-1)),s[7]||(s[7]=l("code",null,"calc1.py",-1)),s[8]||(s[8]=n(" 文件，或者直接從 ",-1)),p(a,{href:"https://github.com/rspivak/lsbasi/blob/master/part1/calc1.py"},{default:e(()=>[...s[5]||(s[5]=[n("GitHub",-1)])]),_:1}),s[9]||(s[9]=n(" 上下載。在你深入研究代碼前，在命令列裏面運行它看看效果。試一試！這是我筆記本上的示例會話（如果你想在 Python3 下運行，你要把 ",-1)),s[10]||(s[10]=l("code",null,"raw_input",-1)),s[11]||(s[11]=n(" 換成 ",-1)),s[12]||(s[12]=l("code",null,"input",-1)),s[13]||(s[13]=n("）：",-1))]),s[29]||(s[29]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python calc1.py</span></span>
<span class="line"><span>calc&gt; 3+4</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>calc&gt; 3+5</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>calc&gt; 3+9</span></span>
<span class="line"><span>12</span></span>
<span class="line"><span>calc&gt;</span></span></code></pre></div><p>要讓你的簡易計算器正常工作，不拋出異常，你的輸入要遵守以下幾個規則：</p><ul><li>只允許輸入個位數</li><li>此時支持的唯一一個運算符是加法</li><li>輸入中不允許有任何的空格符號</li></ul><p>要讓計算器變得簡單，這些限制非常必要。不用擔心，你很快就會讓它變得很複雜。</p><p>好，現在讓我們深入它，看看解釋器是怎麼工作，它是怎麼評估出算術表達式的。</p><p>當你在命令列中輸入一個表達式 <code>3+5</code>，解釋器就獲得了字符串 “3+5”。為了讓解釋器能夠真正理解要用這個字符串做什麼，它首先要把輸入 “3+5” 分到叫做 <code>token</code>（標記）的容器裏。<ruby>標記<rt>token</rt></ruby> 是一個擁有類型和值的對象。比如説，對字符 “3” 而言，標記的類型是 INTEGER 整數，對應的值是 3。</p><p>把輸入字符串分成標記的過程叫<ruby>詞法分析<rt>lexical analysis</rt></ruby>。因此解釋器的需要做的第一步是讀取輸入字符，並將其轉換成標記流。解釋器中的這一部分叫做<ruby>詞法分析器<rt>lexical analyzer</rt></ruby>，或者簡短點叫 <strong>lexer</strong>。你也可以給它起別的名字，諸如<ruby>掃描器<rt>scanner</rt></ruby>或者<ruby>標記器<rt>tokenizer</rt></ruby>。它們指的都是同一個東西：解釋器或編譯器中將輸入字符轉換成標記流的那部分。</p><p><code>Interpreter</code> 類中的 <code>get_next_token</code> 方法就是詞法分析器。每次調用它的時候，你都能從傳入解釋器的輸入字符中獲得創建的下一個標記。仔細看看這個方法，看看它是如何完成把字符轉換成標記的任務的。輸入被存在可變文本中，它保存了輸入的字符串和關於該字符串的索引（把字符串想像成字符數組）。<code>pos</code> 開始時設為 0，指向字符 ‘3’。這個方法一開始檢查字符是不是數字，如果是，就將 <code>pos</code> 加 1，並返回一個 INTEGER 類型的標記實例，並把字符 ‘3’ 的值設為整數，也就是整數 3：</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_lexer1.png" alt=""></p><p>現在 <code>pos</code> 指向文本中的 ‘+’ 號。下次調用這個方法的時候，它會測試 <code>pos</code> 位置的字符是不是個數字，然後檢測下一個字符是不是個加號，就是這樣。結果這個方法把 <code>pos</code> 加 1，返回一個新創建的標記，類型是 PLUS，值為 ‘+’。</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_lexer2.png" alt=""></p><p><code>pos</code> 現在指向字符 ‘5’。當你再調用 <code>get_next_token</code> 方法時，該方法會檢查這是不是個數字，就是這樣，然後它把 <code>pos</code> 加 1，返回一個新的 INTEGER 標記，該標記的值被設為整數 5：</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_lexer3.png" alt=""></p><p>因為 <code>pos</code> 索引現在到了字符串 “3+5” 的末尾，你每次調用 <code>get_next_token</code> 方法時，它將會返回 EOF 標記：</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_lexer4.png" alt=""></p><p>自己試一試，看看計算器裏的詞法分析器的運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; from calc1 import Interpreter</span></span>
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
<span class="line"><span>&gt;&gt;&gt;</span></span></code></pre></div><p>既然你的解釋器能夠從輸入字符中獲取標記流，解釋器需要對它做點什麼：它需要在詞法分析器 <code>get_next_token</code> 中獲取的標記流中找出相應的結構。你的解釋器應該能夠找到流中的結構：INTEGER -&gt; PLUS -&gt; INTEGER。就是這樣，它嘗試找出標記的序列：整數後面要跟着加號，加號後面要跟着整數。</p><p>負責找出並解釋結構的方法就是 <code>expr</code>。該方法檢驗標記序列確實與期望的標記序列是對應的，比如 INTEGER -&gt; PLUS -&gt; INTEGER。成功確認了這個結構後，就會生成加號左右兩邊的標記的值相加的結果，這樣就成功解釋你輸入到解釋器中的算術表達式了。</p><p><code>expr</code> 方法用了一個助手方法 <code>eat</code> 來檢驗傳入的標記類型是否與當前的標記類型相匹配。在匹配到傳入的標記類型後，<code>eat</code> 方法會獲取下一個標記，並將其賦給 <code>current_token</code> 變量，然後高效地 “吃掉” 當前匹配的標記，並將標記流的虛擬指針向後移動。如果標記流的結構與期望的 INTEGER -&gt; PLUS -&gt; INTEGER 標記序列不對應，<code>eat</code> 方法就拋出一個異常。</p><p>讓我們回顧下解釋器做了什麼來對算術表達式進行評估的：</p><ul><li>解釋器接受輸入字符串，比如説 “3+5”</li><li>解釋器調用 <code>expr</code> 方法，在詞法分析器 <code>get_next_token</code> 返回的標記流中找出結構。這個結構就是 INTEGER -&gt; PLUS -&gt; INTEGER 這樣的格式。在確認了格式後，它就通過把兩個整型標記相加來解釋輸入，因為此時對於解釋器來説很清楚，它要做的就是把兩個整數 3 和 5 進行相加。</li></ul><p>恭喜。你剛剛學習了怎麼構建自己的第一個解釋器！</p><p>現在是時候做練習了。</p><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_exercises2.png" alt=""></p><p>看了這篇文章，你肯定覺得不夠，是嗎？好，準備好做這些練習：</p><ol><li>修改代碼，允許輸入多位數，比如 “12+3”</li><li>添加一個方法忽略空格符，讓你的計算器能夠處理帶有空白的輸入，比如 “12 + 3”</li><li>修改代碼，用 ‘-’ 號而非 ‘+’ 號去執行減法比如 “7-5”</li></ol><p><strong>檢驗你的理解</strong></p><ol><li>什麼是解釋器？</li><li>什麼是編譯器</li><li>解釋器和編譯器有什麼差別？</li><li>什麼是標記?</li><li>將輸入分隔成若干個標記的過程叫什麼？</li><li>解釋器中進行詞法分析的部分叫什麼？</li><li>解釋器或編譯器中進行詞法分析的部分有哪些其他的常見名字？</li></ol><p>在結束本文前，我衷心希望你能留下學習解釋器和編譯器的承諾。並且現在就開始做。不要把它留到以後。不要拖延。如果你已經看完了本文，就開始吧。如果已經仔細看完了但是還沒做什麼練習 —— 現在就開始做吧。如果已經開始做練習了，那就把剩下的做完。你懂得。而且你知道嗎？簽下承諾書，今天就開始學習解釋器和編譯器！</p><blockquote><p>本人， ______，身體健全，思想正常，在此承諾從今天開始學習解釋器和編譯器，直到我百分百了解它們是怎麼工作的！</p></blockquote><blockquote></blockquote><blockquote><p>簽字人:</p></blockquote><blockquote><p>日期:</p></blockquote><p><img src="https://ruslanspivak.com/lsbasi-part1/lsbasi_part1_commitment_pledge.png" alt=""></p><p>簽字，寫上日期，把它放在你每天都能看到的地方，確保你能堅守承諾。謹記你的承諾：</p><blockquote><p>“承諾就是，你説自己會去做的事，在你説完就一直陪着你的東西。” —— Darren Hardy</p></blockquote><p>好，今天的就結束了。這個系列的下一篇文章裏，你將會擴展自己的計算器，讓它能夠處理更復雜的算術表達式。敬請期待。</p><hr>`,39)),l("p",null,[s[15]||(s[15]=n("via: ",-1)),p(a,{href:"https://ruslanspivak.com/lsbasi-part1/"},{default:e(()=>[...s[14]||(s[14]=[n("https://ruslanspivak.com/lsbasi-part1/",-1)])]),_:1})]),l("p",null,[s[19]||(s[19]=n("作者：",-1)),p(a,{href:"https://ruslanspivak.com"},{default:e(()=>[...s[16]||(s[16]=[n("Ruslan Spivak",-1)])]),_:1}),s[20]||(s[20]=n(" 譯者：",-1)),p(a,{href:"https://github.com/BriFuture"},{default:e(()=>[...s[17]||(s[17]=[n("BriFuture",-1)])]),_:1}),s[21]||(s[21]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[18]||(s[18]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[24]||(s[24]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[23]||(s[23]=[n("Linux中國",-1)])]),_:1}),s[26]||(s[26]=n(" 榮譽推出",-1))])])}const x=i(u,[["render",g]]);export{E as __pageData,x as default};
