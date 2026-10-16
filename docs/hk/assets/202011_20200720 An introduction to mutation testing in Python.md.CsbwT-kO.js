import{_ as i,a0 as l,w as o,s as u,I as a,x as n,a1 as t,A as e,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"Python 突變測試介紹 | LCTT x X-CMD","titleTemplate":false,"description":"Python 突變測試介紹 | LCTT (202011) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Python 突變測試介紹 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Python 突變測試介紹 | LCTT (202011) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202011/20200720 An introduction to mutation testing in Python","title":"Python 突變測試介紹","tag":"202011","desc":""},"relativePath":"202011/20200720 An introduction to mutation testing in Python.md","filePath":"[post].md"}'),d={name:"202011/20200720 An introduction to mutation testing in Python.md"};function g(h,s,m,c,b,k){const p=l("Link");return o(),u("div",null,[s[23]||(s[23]=a("h1",{id:"python-突變測試介紹",tabindex:"-1"},[n("Python 突變測試介紹 "),a("a",{class:"header-anchor",href:"#python-突變測試介紹","aria-label":"Permalink to “Python 突變測試介紹”"},"​")],-1)),s[24]||(s[24]=a("blockquote",null,[a("p",null,"通過突變測試來修復未知的 bug。")],-1)),s[25]||(s[25]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202011/29/230106ie9xc89dj3jx1yj9.jpg",alt:""})],-1)),s[26]||(s[26]=a("p",null,"你一定對所有內容都進行了測試，也許你甚至在項目倉庫中有一個徽章，標明有 100% 的測試覆蓋率，但是這些測試真的幫到你了嗎？你怎麼知道的？",-1)),s[27]||(s[27]=a("p",null,[n("開發人員很清楚單元測試的"),a("em",null,"成本"),n("。測試必須要編寫。有時它們無法按照預期工作：存在假告警或者抖動測試。在不更改任何代碼的情況下有時成功，有時失敗。通過單元測試發現的小問題很有價值，但是通常它們悄無聲息的出現在開發人員的機器上，並且在提交到版本控制之前就已得到修復。但真正令人擔憂的問題大多是看不見的。最糟糕的是，"),a("em",null,"丟失的告警"),n("是完全不可見的：你看不到沒能捕獲的錯誤，直到出現在用户手上 —— 有時甚至連用户都看不到。")],-1)),a("p",null,[s[2]||(s[2]=n("有一種測試可以使不可見的錯誤變為可見：",-1)),a("ruby",null,[t(p,{href:"https://opensource.com/article/19/8/mutation-testing-evolution-tdd"},{default:e(()=>[...s[0]||(s[0]=[n("突變測試",-1)])]),_:1}),s[1]||(s[1]=a("rt",null,"mutation testing",-1))]),s[3]||(s[3]=n("。",-1))]),s[28]||(s[28]=a("p",null,"變異測試通過算法修改源代碼，並檢查每次測試是否都有“變異體”存活。任何在單元測試中倖存下來的變異體都是問題：這意味着對代碼的修改（可能會引入錯誤）沒有被標準測試套件捕獲。",-1)),a("p",null,[t(p,{href:"https://opensource.com/resources/python"},{default:e(()=>[...s[4]||(s[4]=[n("Python",-1)])]),_:1}),s[5]||(s[5]=n(" 中用於突變測試的一個框架是 ",-1)),s[6]||(s[6]=a("code",null,"mutmut",-1)),s[7]||(s[7]=n("。",-1))]),s[29]||(s[29]=r(`<p>假設你需要編寫代碼來計算鐘錶中時針和分針之間的角度，直到最接近的度數，代碼可能會這樣寫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def hours_hand(hour, minutes):</span></span>
<span class="line"><span>    base = (hour % 12 ) * (360 // 12)</span></span>
<span class="line"><span>    correction = int((minutes / 60) * (360 // 12))</span></span>
<span class="line"><span>    return base + correction</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def minutes_hand(hour, minutes):</span></span>
<span class="line"><span>    return minutes * (360 // 60)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def between(hour, minutes):</span></span>
<span class="line"><span>    return abs(hours_hand(hour, minutes) - minutes_hand(hour, minutes))</span></span></code></pre></div><p>首先，寫一個簡單的單元測試：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import angle</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def test_twelve():</span></span>
<span class="line"><span>    assert angle.between(12, 00) == 0</span></span></code></pre></div><p>足夠了嗎？代碼沒有 <code>if</code> 語句，所以如果你查看覆蓋率：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ coverage run \`which pytest\`</span></span>
<span class="line"><span>============================= test session starts ==============================</span></span>
<span class="line"><span>platform linux -- Python 3.8.3, pytest-5.4.3, py-1.8.2, pluggy-0.13.1</span></span>
<span class="line"><span>rootdir: /home/moshez/src/mut-mut-test</span></span>
<span class="line"><span>collected 1 item                                                              </span></span>
<span class="line"><span></span></span>
<span class="line"><span>tests/test_angle.py .                                                    [100%]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>============================== 1 passed in 0.01s ===============================</span></span></code></pre></div><p>完美！測試通過，覆蓋率為 100%，你真的是一個測試專家。但是，當你使用突變測試時，覆蓋率會變成多少？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mutmut run --paths-to-mutate angle.py</span></span>
<span class="line"><span>&lt;snip&gt;</span></span>
<span class="line"><span>Legend for output:</span></span>
<span class="line"><span>🎉 Killed mutants.   The goal is for everything to end up in this bucket.</span></span>
<span class="line"><span>⏰ Timeout.          Test suite took 10 times as long as the baseline so were killed.</span></span>
<span class="line"><span>🤔 Suspicious.       Tests took a long time, but not long enough to be fatal.</span></span>
<span class="line"><span>🙁 Survived.         This means your tests needs to be expanded.</span></span>
<span class="line"><span>🔇 Skipped.          Skipped.</span></span>
<span class="line"><span>&lt;snip&gt;</span></span>
<span class="line"><span>⠋ 21/21  🎉 5  ⏰ 0  🤔 0  🙁 16  🔇 0</span></span></code></pre></div><p>天啊，在 21 個突變體中，有 16 個存活。只有 5 個通過了突變測試，但是，這意味着什麼呢？</p><p>對於每個突變測試，<code>mutmut</code> 會修改部分源代碼，以模擬潛在的錯誤，修改的一個例子是將 <code>&gt;</code> 比較更改為 <code>&gt;=</code>，查看會發生什麼。如果沒有針對這個邊界條件的單元測試，那麼這個突變將會“存活”：這是一個沒有任何測試用例能夠檢測到的潛在錯誤。</p><p>是時候編寫更好的單元測試了。很容易檢查使用 <code>results</code> 所做的更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mutmut results</span></span>
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
<span class="line"><span>     return base + correction</span></span></code></pre></div><p>這是 <code>mutmut</code> 執行突變的一個典型例子，它會分析源代碼並將運算符更改為不同的運算符：減法變加法。在本例中由乘法變為除法。一般來説，單元測試應該在操作符更換時捕獲錯誤。否則，它們將無法有效地測試行為。按照這種邏輯，<code>mutmut</code> 會遍歷源代碼仔細檢查你的測試。</p><p>你可以使用 <code>mutmut apply</code> 來應用失敗的突變體。事實證明你幾乎沒有檢查過 <code>hour</code> 參數是否被正確使用。修復它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git diff</span></span>
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
<span class="line"><span>+    assert angle.between(3, 00) == 90</span></span></code></pre></div><p>以前，你只測試了 12 點鐘，現在增加一個 3 點鐘的測試就足夠了嗎？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mutmut run --paths-to-mutate angle.py</span></span>
<span class="line"><span>&lt;snip&gt;</span></span>
<span class="line"><span>⠋ 21/21  🎉 7  ⏰ 0  🤔 0  🙁 14  🔇 0</span></span></code></pre></div><p>這項新測試成功殺死了兩個突變體，比以前更好，當然還有很長的路要走。我不會一一解決剩下的 14 個測試用例，因為我認為模式已經很明確了。（你能將它們降低到零嗎？）</p><p>變異測試和覆蓋率一樣，是一種工具，它允許你查看測試套件的全面程度。使用它使得測試用例需要改進：那些倖存的突變體中的任何一個都是人類在篡改代碼時可能犯的錯誤，以及潛伏在程序中的隱藏錯誤。繼續測試，愉快地搜尋 bug 吧。</p><hr>`,20)),a("p",null,[s[9]||(s[9]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/20/7/mutmut-python"},{default:e(()=>[...s[8]||(s[8]=[n("https://opensource.com/article/20/7/mutmut-python",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/moshez"},{default:e(()=>[...s[10]||(s[10]=[n("Moshe Zadka",-1)])]),_:1}),s[15]||(s[15]=n(" 選題：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[11]||(s[11]=[n("lujun9972",-1)])]),_:1}),s[16]||(s[16]=n(" 譯者：",-1)),t(p,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[12]||(s[12]=[n("MjSeven",-1)])]),_:1}),s[17]||(s[17]=n(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[19]||(s[19]=[n("Linux中國",-1)])]),_:1}),s[22]||(s[22]=n(" 榮譽推出",-1))])])}const v=i(d,[["render",g]]);export{C as __pageData,v as default};
