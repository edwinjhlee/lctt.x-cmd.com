import{_ as t,a0 as i,w as o,s as r,ao as g,I as l,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"使用 Python 為你的油箱加油 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 為你的油箱加油 | LCTT (201810) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 為你的油箱加油 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 為你的油箱加油 | LCTT (201810) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201810/20181008 Python at the pump- A script for filling your gas tank","title":"使用 Python 為你的油箱加油","tag":"201810","desc":""},"relativePath":"201810/20181008 Python at the pump- A script for filling your gas tank.md","filePath":"[post].md"}'),h={name:"201810/20181008 Python at the pump- A script for filling your gas tank.md"};function d(c,s,u,k,f,m){const a=i("Link");return o(),r("div",null,[s[15]||(s[15]=g(`<h1 id="使用-python-為你的油箱加油" tabindex="-1">使用 Python 為你的油箱加油 <a class="header-anchor" href="#使用-python-為你的油箱加油" aria-label="Permalink to “使用 Python 為你的油箱加油”">​</a></h1><blockquote><p>我來介紹一下我是如何使用 Python 來節省成本的。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/bulb-light-energy-power-idea.png?itok=zTEEmTZB" alt=""></p><p>我最近在開一輛燒 93 號汽油的車子。根據汽車製造商的説法，它只需要加 91 號汽油就可以了。然而，在美國只能買到 87 號、89 號、93 號汽油。而我家附近的汽油的物價水平是每增加一號，每加侖就要多付 30 美分，因此如果加 93 號汽油，每加侖就要多花 60 美分。為什麼不能節省一些錢呢？</p><p>一開始很簡單，只需要先加滿 93 號汽油，然後在油量表顯示油箱半滿的時候，用 89 號汽油加滿，就得到一整箱 91 號汽油了。但接下來就麻煩了，剩下半箱 91 號汽油加上半箱 93 號汽油，只會變成一箱 92 號汽油，再接下來呢？如果繼續算下去，只會越來越混亂。這個時候 Python 就派上用場了。</p><p>我的方案是，可以根據汽油的實時狀態，不斷向油箱中加入 93 號汽油或者 89 號汽油，而最終目標是使油箱內汽油的號數不低於 91。我需要做的是隻是通過一些算法來判斷新舊汽油混合之後的號數。使用多項式方程或許也可以解決這個問題，但如果使用 Python，好像只需要進行循環就可以了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># octane.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span>o = 93.0</span></span>
<span class="line"><span>newgas = 93.0   # 這個變量記錄上一次加入的汽油號數</span></span>
<span class="line"><span>i = 1</span></span>
<span class="line"><span>while i &lt; 21:                   # 20 次迭代 (加油次數)</span></span>
<span class="line"><span>    if newgas == 89.0:          # 如果上一次加的是 89 號汽油，改加 93 號汽油</span></span>
<span class="line"><span>        newgas = 93.0</span></span>
<span class="line"><span>        o = newgas/2 + o/2      # 當油箱半滿的時候就加油</span></span>
<span class="line"><span>    else:                       # 如果上一次加的是 93 號汽油，則改加 89 號汽油</span></span>
<span class="line"><span>        newgas = 89.0</span></span>
<span class="line"><span>        o = newgas/2 + o/2      # 當油箱半滿的時候就加油</span></span>
<span class="line"><span>    print str(i) + &#39;: &#39;+ str(o)</span></span>
<span class="line"><span>    i += 1</span></span></code></pre></div><p>在代碼中，我首先將變量 <code>o</code>（油箱中的當前混合汽油號數）和變量 <code>newgas</code>（上一次加入的汽油號數）的初始值都設為 93，然後循環 20 次，也就是分別加入 89 號汽油和 93 號汽油一共 20 次，以保持混合汽油號數穩定。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1: 91.0</span></span>
<span class="line"><span>2: 92.0</span></span>
<span class="line"><span>3: 90.5</span></span>
<span class="line"><span>4: 91.75</span></span>
<span class="line"><span>5: 90.375</span></span>
<span class="line"><span>6: 91.6875</span></span>
<span class="line"><span>7: 90.34375</span></span>
<span class="line"><span>8: 91.671875</span></span>
<span class="line"><span>9: 90.3359375</span></span>
<span class="line"><span>10: 91.66796875</span></span>
<span class="line"><span>11: 90.333984375</span></span>
<span class="line"><span>12: 91.6669921875</span></span>
<span class="line"><span>13: 90.3334960938</span></span>
<span class="line"><span>14: 91.6667480469</span></span>
<span class="line"><span>15: 90.3333740234</span></span>
<span class="line"><span>16: 91.6666870117</span></span>
<span class="line"><span>17: 90.3333435059</span></span>
<span class="line"><span>18: 91.6666717529</span></span>
<span class="line"><span>19: 90.3333358765</span></span>
<span class="line"><span>20: 91.6666679382</span></span></code></pre></div><p>從以上數據來看，只需要 10 到 15 次循環，汽油號數就比較穩定了，也相當接近 91 號汽油的目標。這種交替混合直到穩定的現象看起來很有趣，每次交替加入同等量的不同號數汽油，都會趨於穩定。實際上，即使加入的 89 號汽油和 93 號汽油的量不同，也會趨於穩定。</p><p>因此，我嘗試了不同的比例，我認為加入的 93 號汽油需要比 89 號汽油更多一點。在儘量少補充新汽油的情況下，我最終計算到的結果是 89 號汽油要在油箱大約 7/12 滿的時候加進去，而 93 號汽油則要在油箱 1/4 滿的時候才加進去。</p><p>我的循環將會更改成這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    if newgas == 89.0:            </span></span>
<span class="line"><span>                                 </span></span>
<span class="line"><span>        newgas = 93.0</span></span>
<span class="line"><span>        o = 3*newgas/4 + o/4      </span></span>
<span class="line"><span>    else:                        </span></span>
<span class="line"><span>        newgas = 89.0</span></span>
<span class="line"><span>        o = 5*newgas/12 + 7*o/12</span></span></code></pre></div><p>以下是從第十次加油開始的混合汽油號數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>10: 92.5122272978</span></span>
<span class="line"><span>11: 91.0487992571</span></span>
<span class="line"><span>12: 92.5121998143</span></span>
<span class="line"><span>13: 91.048783225</span></span>
<span class="line"><span>14: 92.5121958062</span></span>
<span class="line"><span>15: 91.048780887</span></span></code></pre></div><p>如你所見，這個調整會令混合汽油號數始終略高於 91。當然，我的油量表並沒有 1/12 的刻度，但是 7/12 略小於 5/8，我可以近似地計算。</p><p>一個更簡單地方案是每次都首先加滿 93 號汽油，然後在油箱半滿時加入 89 號汽油直到耗盡，這可能會是我的常規方案。就我個人而言，這種方法並不太好，有時甚至會產生一些麻煩。但對於長途旅行來説，這種方案會相對簡便一些。有時我也會因為油價突然下跌而購買一些汽油，所以，這個方案是我可以考慮的一系列選項之一。</p><p>當然最重要的是：開車不寫碼，寫碼不開車！</p><hr>`,19)),l("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/18/10/python-gas-pump"},{default:e(()=>[...s[0]||(s[0]=[n("https://opensource.com/article/18/10/python-gas-pump",-1)])]),_:1})]),l("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/greg-p"},{default:e(()=>[...s[2]||(s[2]=[n("Greg Pittman",-1)])]),_:1}),s[7]||(s[7]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 譯者：",-1)),p(a,{href:"https://github.com/HankChow"},{default:e(()=>[...s[4]||(s[4]=[n("HankChow",-1)])]),_:1}),s[9]||(s[9]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中國",-1)])]),_:1}),s[14]||(s[14]=n(" 榮譽推出",-1))])])}const T=t(h,[["render",d]]);export{C as __pageData,T as default};
