import{_ as i,a0 as l,w as o,s as u,I as a,x as n,a1 as t,A as e,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"Python 突变测试介绍 | LCTT x X-CMD","titleTemplate":false,"description":"Python 突变测试介绍 | LCTT (202011) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Python 突变测试介绍 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Python 突变测试介绍 | LCTT (202011) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202011/20200720 An introduction to mutation testing in Python","title":"Python 突变测试介绍","tag":"202011","desc":""},"relativePath":"202011/20200720 An introduction to mutation testing in Python.md","filePath":"[post].md"}'),d={name:"202011/20200720 An introduction to mutation testing in Python.md"};function g(h,s,m,c,b,k){const p=l("Link");return o(),u("div",null,[s[23]||(s[23]=a("h1",{id:"python-突变测试介绍",tabindex:"-1"},[n("Python 突变测试介绍 "),a("a",{class:"header-anchor",href:"#python-突变测试介绍","aria-label":"Permalink to “Python 突变测试介绍”"},"​")],-1)),s[24]||(s[24]=a("blockquote",null,[a("p",null,"通过突变测试来修复未知的 bug。")],-1)),s[25]||(s[25]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202011/29/230106ie9xc89dj3jx1yj9.jpg",alt:""})],-1)),s[26]||(s[26]=a("p",null,"你一定对所有内容都进行了测试，也许你甚至在项目仓库中有一个徽章，标明有 100% 的测试覆盖率，但是这些测试真的帮到你了吗？你怎么知道的？",-1)),s[27]||(s[27]=a("p",null,[n("开发人员很清楚单元测试的"),a("em",null,"成本"),n("。测试必须要编写。有时它们无法按照预期工作：存在假告警或者抖动测试。在不更改任何代码的情况下有时成功，有时失败。通过单元测试发现的小问题很有价值，但是通常它们悄无声息的出现在开发人员的机器上，并且在提交到版本控制之前就已得到修复。但真正令人担忧的问题大多是看不见的。最糟糕的是，"),a("em",null,"丢失的告警"),n("是完全不可见的：你看不到没能捕获的错误，直到出现在用户手上 —— 有时甚至连用户都看不到。")],-1)),a("p",null,[s[2]||(s[2]=n("有一种测试可以使不可见的错误变为可见：",-1)),a("ruby",null,[t(p,{href:"https://opensource.com/article/19/8/mutation-testing-evolution-tdd"},{default:e(()=>[...s[0]||(s[0]=[n("突变测试",-1)])]),_:1}),s[1]||(s[1]=a("rt",null,"mutation testing",-1))]),s[3]||(s[3]=n("。",-1))]),s[28]||(s[28]=a("p",null,"变异测试通过算法修改源代码，并检查每次测试是否都有“变异体”存活。任何在单元测试中幸存下来的变异体都是问题：这意味着对代码的修改（可能会引入错误）没有被标准测试套件捕获。",-1)),a("p",null,[t(p,{href:"https://opensource.com/resources/python"},{default:e(()=>[...s[4]||(s[4]=[n("Python",-1)])]),_:1}),s[5]||(s[5]=n(" 中用于突变测试的一个框架是 ",-1)),s[6]||(s[6]=a("code",null,"mutmut",-1)),s[7]||(s[7]=n("。",-1))]),s[29]||(s[29]=r(`<p>假设你需要编写代码来计算钟表中时针和分针之间的角度，直到最接近的度数，代码可能会这样写：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def hours_hand(hour, minutes):</span></span>
<span class="line"><span>    base = (hour % 12 ) * (360 // 12)</span></span>
<span class="line"><span>    correction = int((minutes / 60) * (360 // 12))</span></span>
<span class="line"><span>    return base + correction</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def minutes_hand(hour, minutes):</span></span>
<span class="line"><span>    return minutes * (360 // 60)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def between(hour, minutes):</span></span>
<span class="line"><span>    return abs(hours_hand(hour, minutes) - minutes_hand(hour, minutes))</span></span></code></pre></div><p>首先，写一个简单的单元测试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import angle</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def test_twelve():</span></span>
<span class="line"><span>    assert angle.between(12, 00) == 0</span></span></code></pre></div><p>足够了吗？代码没有 <code>if</code> 语句，所以如果你查看覆盖率：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ coverage run \`which pytest\`</span></span>
<span class="line"><span>============================= test session starts ==============================</span></span>
<span class="line"><span>platform linux -- Python 3.8.3, pytest-5.4.3, py-1.8.2, pluggy-0.13.1</span></span>
<span class="line"><span>rootdir: /home/moshez/src/mut-mut-test</span></span>
<span class="line"><span>collected 1 item                                                              </span></span>
<span class="line"><span></span></span>
<span class="line"><span>tests/test_angle.py .                                                    [100%]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>============================== 1 passed in 0.01s ===============================</span></span></code></pre></div><p>完美！测试通过，覆盖率为 100%，你真的是一个测试专家。但是，当你使用突变测试时，覆盖率会变成多少？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mutmut run --paths-to-mutate angle.py</span></span>
<span class="line"><span>&lt;snip&gt;</span></span>
<span class="line"><span>Legend for output:</span></span>
<span class="line"><span>🎉 Killed mutants.   The goal is for everything to end up in this bucket.</span></span>
<span class="line"><span>⏰ Timeout.          Test suite took 10 times as long as the baseline so were killed.</span></span>
<span class="line"><span>🤔 Suspicious.       Tests took a long time, but not long enough to be fatal.</span></span>
<span class="line"><span>🙁 Survived.         This means your tests needs to be expanded.</span></span>
<span class="line"><span>🔇 Skipped.          Skipped.</span></span>
<span class="line"><span>&lt;snip&gt;</span></span>
<span class="line"><span>⠋ 21/21  🎉 5  ⏰ 0  🤔 0  🙁 16  🔇 0</span></span></code></pre></div><p>天啊，在 21 个突变体中，有 16 个存活。只有 5 个通过了突变测试，但是，这意味着什么呢？</p><p>对于每个突变测试，<code>mutmut</code> 会修改部分源代码，以模拟潜在的错误，修改的一个例子是将 <code>&gt;</code> 比较更改为 <code>&gt;=</code>，查看会发生什么。如果没有针对这个边界条件的单元测试，那么这个突变将会“存活”：这是一个没有任何测试用例能够检测到的潜在错误。</p><p>是时候编写更好的单元测试了。很容易检查使用 <code>results</code> 所做的更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mutmut results</span></span>
<span class="line"><span>&lt;snip&gt;</span></span>
<span class="line"><span>Survived 🙁 (16)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---- angle.py (16) ----</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4-7, 9-14, 16-21</span></span>
<span class="line"><span>$ mutmut apply 4</span></span>
<span class="line"><span>$ git diff</span></span>
<span class="line"><span>diff --git a/angle.py b/angle.py</span></span>
<span class="line"><span>index b5dca41..3939353 100644</span></span>
<span class="line"><span>--- a/angle.py</span></span>
<span class="line"><span>+++ b/angle.py</span></span>
<span class="line"><span>@@ -1,6 +1,6 @@</span></span>
<span class="line"><span> def hours_hand(hour, minutes):</span></span>
<span class="line"><span>     hour = hour % 12</span></span>
<span class="line"><span>-    base = hour * (360 // 12)</span></span>
<span class="line"><span>+    base = hour / (360 // 12)</span></span>
<span class="line"><span>     correction = int((minutes / 60) * (360 // 12))</span></span>
<span class="line"><span>     return base + correction</span></span></code></pre></div><p>这是 <code>mutmut</code> 执行突变的一个典型例子，它会分析源代码并将运算符更改为不同的运算符：减法变加法。在本例中由乘法变为除法。一般来说，单元测试应该在操作符更换时捕获错误。否则，它们将无法有效地测试行为。按照这种逻辑，<code>mutmut</code> 会遍历源代码仔细检查你的测试。</p><p>你可以使用 <code>mutmut apply</code> 来应用失败的突变体。事实证明你几乎没有检查过 <code>hour</code> 参数是否被正确使用。修复它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git diff</span></span>
<span class="line"><span>diff --git a/tests/test_angle.py b/tests/test_angle.py</span></span>
<span class="line"><span>index f51d43a..1a2e4df 100644</span></span>
<span class="line"><span>--- a/tests/test_angle.py</span></span>
<span class="line"><span>+++ b/tests/test_angle.py</span></span>
<span class="line"><span>@@ -2,3 +2,6 @@ import angle</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> def test_twelve():</span></span>
<span class="line"><span>     assert angle.between(12, 00) == 0</span></span>
<span class="line"><span>+</span></span>
<span class="line"><span>+def test_three():</span></span>
<span class="line"><span>+    assert angle.between(3, 00) == 90</span></span></code></pre></div><p>以前，你只测试了 12 点钟，现在增加一个 3 点钟的测试就足够了吗？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mutmut run --paths-to-mutate angle.py</span></span>
<span class="line"><span>&lt;snip&gt;</span></span>
<span class="line"><span>⠋ 21/21  🎉 7  ⏰ 0  🤔 0  🙁 14  🔇 0</span></span></code></pre></div><p>这项新测试成功杀死了两个突变体，比以前更好，当然还有很长的路要走。我不会一一解决剩下的 14 个测试用例，因为我认为模式已经很明确了。（你能将它们降低到零吗？）</p><p>变异测试和覆盖率一样，是一种工具，它允许你查看测试套件的全面程度。使用它使得测试用例需要改进：那些幸存的突变体中的任何一个都是人类在篡改代码时可能犯的错误，以及潜伏在程序中的隐藏错误。继续测试，愉快地搜寻 bug 吧。</p><hr>`,20)),a("p",null,[s[9]||(s[9]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/20/7/mutmut-python"},{default:e(()=>[...s[8]||(s[8]=[n("https://opensource.com/article/20/7/mutmut-python",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/moshez"},{default:e(()=>[...s[10]||(s[10]=[n("Moshe Zadka",-1)])]),_:1}),s[15]||(s[15]=n(" 选题：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[11]||(s[11]=[n("lujun9972",-1)])]),_:1}),s[16]||(s[16]=n(" 译者：",-1)),t(p,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[12]||(s[12]=[n("MjSeven",-1)])]),_:1}),s[17]||(s[17]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[19]||(s[19]=[n("Linux中国",-1)])]),_:1}),s[22]||(s[22]=n(" 荣誉推出",-1))])])}const v=i(d,[["render",g]]);export{C as __pageData,v as default};
