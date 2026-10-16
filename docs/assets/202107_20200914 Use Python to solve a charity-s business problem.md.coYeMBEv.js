import{_ as l,a0 as t,w as o,s as r,I as a,x as s,a1 as e,A as i,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"使用 Python 来解决慈善机构的业务问题 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 来解决慈善机构的业务问题 | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 来解决慈善机构的业务问题 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 来解决慈善机构的业务问题 | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20200914 Use Python to solve a charity-s business problem","title":"使用 Python 来解决慈善机构的业务问题","tag":"202107","desc":""},"relativePath":"202107/20200914 Use Python to solve a charity-s business problem.md","filePath":"[post].md"}'),c={name:"202107/20200914 Use Python to solve a charity-s business problem.md"};function d(h,n,m,y,b,g){const p=t("Link");return o(),r("div",null,[n[23]||(n[23]=a("h1",{id:"使用-python-来解决慈善机构的业务问题",tabindex:"-1"},[s("使用 Python 来解决慈善机构的业务问题 "),a("a",{class:"header-anchor",href:"#使用-python-来解决慈善机构的业务问题","aria-label":"Permalink to “使用 Python 来解决慈善机构的业务问题”"},"​")],-1)),n[24]||(n[24]=a("blockquote",null,[a("p",null,"比较不同的编程语言如何解决同一个问题是一个很有趣的事情，也很有指导意义。接下来，我们就来讲一讲如何用 Python 来解决。")],-1)),n[25]||(n[25]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202107/02/124241fzuzo7kflrf7g77v.jpg",alt:""})],-1)),a("p",null,[n[1]||(n[1]=s("在我这一系列的 ",-1)),e(p,{href:"https://opensource.com/article/20/8/solving-problem-groovy"},{default:i(()=>[...n[0]||(n[0]=[s("第一篇文章",-1)])]),_:1}),n[2]||(n[2]=s(" 里，我描述了这样子的一个问题，如何将一大批的救助物资分为具有相同价值的物品，并将其分发给社区中的困难住户。我也曾写过用不同的编程语言写一些小程序来解决这样子的小问题以及比较这些程序时如何工作的。",-1))]),a("p",null,[n[5]||(n[5]=s("在第一篇文章中，我是使用了 ",-1)),e(p,{href:"https://groovy-lang.org/"},{default:i(()=>[...n[3]||(n[3]=[s("Groovy",-1)])]),_:1}),n[6]||(n[6]=s(" 语言来解决问题的。Groovy 在很多方面都与 ",-1)),e(p,{href:"https://www.python.org/"},{default:i(()=>[...n[4]||(n[4]=[s("Python",-1)])]),_:1}),n[7]||(n[7]=s(" 很相似，但是在语法上她更像 C 语言和 Java。因此，使用 Python 来创造一个相同的解决方案应该会很有趣且更有意义。",-1))]),n[26]||(n[26]=u(`<h3 id="使用-python-的解决方案" tabindex="-1">使用 Python 的解决方案 <a class="header-anchor" href="#使用-python-的解决方案" aria-label="Permalink to “使用 Python 的解决方案”">​</a></h3><p>使用 Java 时，我会声明一个工具类来保存元组数据（新的记录功能将会很好地用于这个需求）。使用 Groovy 时，我就是用了该语言的映射功能，我也将在 Python 使用相同的机制。</p><p>使用一个字典列表来保存从批发商处批发来的货物：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>packs = [</span></span>
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
<span class="line"><span>        {&#39;item&#39;:&#39;Soap&#39;,&#39;brand&#39;:&#39;Sunny Day&#39;,&#39;units&#39;:6,&#39;price&#39;:1794,&#39;quantity&#39;:2}]</span></span></code></pre></div><p>大米有一包，每包中有 10 袋大米，意大利面条有十包，每包中有一袋意大利面条。上述代码中，变量 <code>packs</code> 被设置为 Python 字典列表。这与 Groovy 的方法非常相似。关于 Groovy 和 Python 之间的区别，有几点需要注意：</p><ol><li>在 Python 中，无需关键字来定义变量 <code>packs</code>，Python 变量初始化时需要设置一个值。</li><li>Python 字典中的词键（例如，<code>item</code>、<code>brand</code>、<code>units</code>、<code>price</code>、 <code>quantity</code>）需要引号来表明它们是字符串；Groovy 假定这些是字符串，但也接受引号。</li><li>在 Python 中，符号 <code>{ ... }</code> 表明一个字典声明； Groovy 使用与列表相同的方括号，但两种情况下的结构都必须具有键值对。</li></ol><p>当然，表中的价格不是以美元计算的。</p><p>接下来，打开散装包。例如，打开大米的单个散装包装，将产出 10 单元大米； 也就是说，产出的单元总数是 <code>units * quantity</code>。 Groovy 脚本使用一个名为 <code>collectMany</code> 的方便的函数，该函数可用于展平列表列表。 据我所知，Python 没有类似的东西，所以使用两个列表推导式来产生相同的结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>units = [[{&#39;item&#39;:pack[&#39;item&#39;],&#39;brand&#39;:pack[&#39;brand&#39;],</span></span>
<span class="line"><span>        &#39;price&#39;:(pack[&#39;price&#39;] / pack[&#39;units&#39;])}] *</span></span>
<span class="line"><span>        (pack[&#39;units&#39;] * pack[&#39;quantity&#39;]) for pack in packs]</span></span>
<span class="line"><span>units = [x for sublist in units for x in sublist]</span></span></code></pre></div><p>第一个列表可理解为（分配给单元）构建字典列表列表。 第二个将其“扁平化”为字典列表。 请注意，Python 和 Groovy 都提供了一个 <code>*</code> 运算符，它接受左侧的列表和右侧的数字 <code>N</code>，并复制列表 <code>N</code> 次。</p><p>最后一步是将这些单元的大米之类的重新包装到篮子（<code>hamper</code>）中以进行分发。 就像在 Groovy 版本中一样，你需要更具体地了解理想的篮子数，当你只剩下几个单元时，你最好不要过度限制，即可以做一些随机分配：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>valueIdeal = 5000</span></span>
<span class="line"><span>valueMax = valueIdeal * 1.1</span></span></code></pre></div><p>很好！ 重新打包篮子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import random</span></span>
<span class="line"><span>hamperNumber = 0              # 导入 Python 的随机数生成器工具并初始化篮子数</span></span>
<span class="line"><span>while len(units) &amp;gt; 0:      # 只要有更多可用的单元，这个 \`while\` 循环就会将单元重新分配到篮子中：</span></span>
<span class="line"><span>    hamperNumber += 1</span></span>
<span class="line"><span>    hamper = []</span></span>
<span class="line"><span>    value = 0</span></span>
<span class="line"><span>    canAdd = True              # 增加篮子编号，得到一个新的空篮子（单元的列表），并将其值设为 0； 开始假设你可以向篮子中添加更多物品。</span></span>
<span class="line"><span>    while canAdd:              # 这个 \`while\` 循环将尽可能多地向篮子添加单元（Groovy 代码使用了 \`for\` 循环，但 Python 的 \`for\` 循环期望迭代某些东西，而 Groovy 则是为更传统的 C 形式的 \`for\` 循环形式）：</span></span>
<span class="line"><span>        u = random.randint(0,len(units)-1)  # 获取一个介于 0 和剩余单元数减 1 之间的随机数。</span></span>
<span class="line"><span>        canAdd = False                      # 假设你找不到更多要添加的单元。</span></span>
<span class="line"><span>        o = 0                               # 创建一个变量，用于从你正在寻找要放入篮子中的物品的起点的偏移量。</span></span>
<span class="line"><span>        while o &lt; len(units):               # 从随机选择的索引开始，这个 \`while\` 循环将尝试找到一个可以添加到篮子的单元（再次注意，Python \`for\` 循环可能不适合这里，因为列表的长度将在迭代中中发生变化）。</span></span>
<span class="line"><span>            uo = (u + o) % len(units)</span></span>
<span class="line"><span>            unit = units[uo]</span></span>
<span class="line"><span>            unitPrice = unit[&#39;price&#39;]          # 找出要查看的单元（随机起点+偏移量）并获得其价格。</span></span>
<span class="line"><span>            if len(units) &lt; 3 or not (unit in hamper) and (value + unitPrice) &lt; valueMax:</span></span>
<span class="line"><span>                                               # 如果只剩下几个，或者添加单元后篮子的价值不太高，你可以将此单元添加到篮子中。</span></span>
<span class="line"><span>                hamper.append(unit)</span></span>
<span class="line"><span>                value += unitPrice</span></span>
<span class="line"><span>                units.pop(u)                   # 将单元添加到篮子中，按单价增加 篮子数，从可用单元列表中删除该单元。</span></span>
<span class="line"><span>                canAdd = len(units) &gt; 0</span></span>
<span class="line"><span>                break                          # 只要还有剩余单元，你就可以添加更多单元，因此可以跳出此循环继续寻找。</span></span>
<span class="line"><span>            o += 1                             # 增加偏移量。</span></span>
<span class="line"><span>                                            # 在退出这个 \`while\` 循环时，如果你检查了所有剩余的单元并且找不到单元可以添加到篮子中，那么篮子就完成了搜索； 否则，你找到了一个，可以继续寻找更多。</span></span>
<span class="line"><span>    print(&#39;&#39;)</span></span>
<span class="line"><span>    print(&#39;Hamper&#39;,hamperNumber,&#39;value&#39;,value)</span></span>
<span class="line"><span>    for item in hamper:</span></span>
<span class="line"><span>        print(&#39;%-25s%-25s%7.2f&#39; % (item[&#39;item&#39;],item[&#39;brand&#39;],item[&#39;price&#39;])) # 打印出篮子的内容。</span></span>
<span class="line"><span>    print(&#39;Remaining units&#39;,len(units))                                       # 打印出剩余的单元信息。</span></span></code></pre></div><p>一些澄清如上面的注释。</p><p>运行此代码时，输出看起来与 Groovy 程序的输出非常相似：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hamper 1 value 5304.0</span></span>
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
<span class="line"><span>Remaining units 0</span></span></code></pre></div><p>最后一个篮子在内容和价值上有所简化。</p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>乍一看，这个程序的 Python 和 Groovy 版本之间没有太大区别。 两者都有一组相似的结构，这使得处理列表和字典非常简单。 两者都不需要很多“样板代码”或其他“繁杂”操作。</p><p>此外，使用 Groovy 时，向篮子中添加单元还是一件比较繁琐的事情。 你需要在单元列表中随机选择一个位置，然后从该位置开始，遍历列表，直到找到一个价格允许的且包含它的单元，或者直到你用完列表为止。 当只剩下几件物品时，你需要将它们扔到最后一个篮子里。</p><p>另一个值得一提的问题是：这不是一种特别有效的方法。 从列表中删除元素、极其多的重复表达式还有一些其它的问题使得这不太适合解决这种大数据重新分配问题。 尽管如此，它仍然在我的老机器上运行。</p><p>如果你觉得我在这段代码中使用 <code>while</code> 循环并改变其中的数据感到不舒服，你可能希望我让它更有用一些。 我想不出一种方法不使用 Python 中的 map 和 reduce 函数，并结合随机选择的单元进行重新打包。 你可以吗？</p><p>在下一篇文章中，我将使用 Java 重新执行此操作，以了解 Groovy 和 Python 的工作量减少了多少，未来的文章将介绍 Julia 和 Go。</p><hr>`,25)),a("p",null,[n[9]||(n[9]=s("via: ",-1)),e(p,{href:"https://opensource.com/article/20/9/solve-problem-python"},{default:i(()=>[...n[8]||(n[8]=[s("https://opensource.com/article/20/9/solve-problem-python",-1)])]),_:1})]),a("p",null,[n[14]||(n[14]=s("作者：",-1)),e(p,{href:"https://opensource.com/users/clhermansen"},{default:i(()=>[...n[10]||(n[10]=[s("Chris Hermansen",-1)])]),_:1}),n[15]||(n[15]=s(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...n[11]||(n[11]=[s("lujun9972",-1)])]),_:1}),n[16]||(n[16]=s(" 译者：",-1)),e(p,{href:"https://github.com/zepoch"},{default:i(()=>[...n[12]||(n[12]=[s("zepoch",-1)])]),_:1}),n[17]||(n[17]=s(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...n[13]||(n[13]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[20]||(n[20]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[18]||(n[18]=[s("LCTT",-1)])]),_:1}),n[21]||(n[21]=s(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...n[19]||(n[19]=[s("Linux中国",-1)])]),_:1}),n[22]||(n[22]=s(" 荣誉推出",-1))])])}const C=l(c,[["render",d]]);export{v as __pageData,C as default};
