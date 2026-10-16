import{_ as t,a0 as i,w as o,s as r,ao as g,I as l,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"使用 Python 为你的油箱加油 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 为你的油箱加油 | LCTT (201810) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 为你的油箱加油 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 为你的油箱加油 | LCTT (201810) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201810/20181008 Python at the pump- A script for filling your gas tank","title":"使用 Python 为你的油箱加油","tag":"201810","desc":""},"relativePath":"201810/20181008 Python at the pump- A script for filling your gas tank.md","filePath":"[post].md"}'),h={name:"201810/20181008 Python at the pump- A script for filling your gas tank.md"};function d(c,s,u,k,f,m){const a=i("Link");return o(),r("div",null,[s[15]||(s[15]=g(`<h1 id="使用-python-为你的油箱加油" tabindex="-1">使用 Python 为你的油箱加油 <a class="header-anchor" href="#使用-python-为你的油箱加油" aria-label="Permalink to “使用 Python 为你的油箱加油”">​</a></h1><blockquote><p>我来介绍一下我是如何使用 Python 来节省成本的。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/bulb-light-energy-power-idea.png?itok=zTEEmTZB" alt=""></p><p>我最近在开一辆烧 93 号汽油的车子。根据汽车制造商的说法，它只需要加 91 号汽油就可以了。然而，在美国只能买到 87 号、89 号、93 号汽油。而我家附近的汽油的物价水平是每增加一号，每加仑就要多付 30 美分，因此如果加 93 号汽油，每加仑就要多花 60 美分。为什么不能节省一些钱呢？</p><p>一开始很简单，只需要先加满 93 号汽油，然后在油量表显示油箱半满的时候，用 89 号汽油加满，就得到一整箱 91 号汽油了。但接下来就麻烦了，剩下半箱 91 号汽油加上半箱 93 号汽油，只会变成一箱 92 号汽油，再接下来呢？如果继续算下去，只会越来越混乱。这个时候 Python 就派上用场了。</p><p>我的方案是，可以根据汽油的实时状态，不断向油箱中加入 93 号汽油或者 89 号汽油，而最终目标是使油箱内汽油的号数不低于 91。我需要做的是只是通过一些算法来判断新旧汽油混合之后的号数。使用多项式方程或许也可以解决这个问题，但如果使用 Python，好像只需要进行循环就可以了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span># octane.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span>o = 93.0</span></span>
<span class="line"><span>newgas = 93.0   # 这个变量记录上一次加入的汽油号数</span></span>
<span class="line"><span>i = 1</span></span>
<span class="line"><span>while i &lt; 21:                   # 20 次迭代 (加油次数)</span></span>
<span class="line"><span>    if newgas == 89.0:          # 如果上一次加的是 89 号汽油，改加 93 号汽油</span></span>
<span class="line"><span>        newgas = 93.0</span></span>
<span class="line"><span>        o = newgas/2 + o/2      # 当油箱半满的时候就加油</span></span>
<span class="line"><span>    else:                       # 如果上一次加的是 93 号汽油，则改加 89 号汽油</span></span>
<span class="line"><span>        newgas = 89.0</span></span>
<span class="line"><span>        o = newgas/2 + o/2      # 当油箱半满的时候就加油</span></span>
<span class="line"><span>    print str(i) + &#39;: &#39;+ str(o)</span></span>
<span class="line"><span>    i += 1</span></span></code></pre></div><p>在代码中，我首先将变量 <code>o</code>（油箱中的当前混合汽油号数）和变量 <code>newgas</code>（上一次加入的汽油号数）的初始值都设为 93，然后循环 20 次，也就是分别加入 89 号汽油和 93 号汽油一共 20 次，以保持混合汽油号数稳定。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1: 91.0</span></span>
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
<span class="line"><span>20: 91.6666679382</span></span></code></pre></div><p>从以上数据来看，只需要 10 到 15 次循环，汽油号数就比较稳定了，也相当接近 91 号汽油的目标。这种交替混合直到稳定的现象看起来很有趣，每次交替加入同等量的不同号数汽油，都会趋于稳定。实际上，即使加入的 89 号汽油和 93 号汽油的量不同，也会趋于稳定。</p><p>因此，我尝试了不同的比例，我认为加入的 93 号汽油需要比 89 号汽油更多一点。在尽量少补充新汽油的情况下，我最终计算到的结果是 89 号汽油要在油箱大约 7/12 满的时候加进去，而 93 号汽油则要在油箱 1/4 满的时候才加进去。</p><p>我的循环将会更改成这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    if newgas == 89.0:            </span></span>
<span class="line"><span>                                 </span></span>
<span class="line"><span>        newgas = 93.0</span></span>
<span class="line"><span>        o = 3*newgas/4 + o/4      </span></span>
<span class="line"><span>    else:                        </span></span>
<span class="line"><span>        newgas = 89.0</span></span>
<span class="line"><span>        o = 5*newgas/12 + 7*o/12</span></span></code></pre></div><p>以下是从第十次加油开始的混合汽油号数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>10: 92.5122272978</span></span>
<span class="line"><span>11: 91.0487992571</span></span>
<span class="line"><span>12: 92.5121998143</span></span>
<span class="line"><span>13: 91.048783225</span></span>
<span class="line"><span>14: 92.5121958062</span></span>
<span class="line"><span>15: 91.048780887</span></span></code></pre></div><p>如你所见，这个调整会令混合汽油号数始终略高于 91。当然，我的油量表并没有 1/12 的刻度，但是 7/12 略小于 5/8，我可以近似地计算。</p><p>一个更简单地方案是每次都首先加满 93 号汽油，然后在油箱半满时加入 89 号汽油直到耗尽，这可能会是我的常规方案。就我个人而言，这种方法并不太好，有时甚至会产生一些麻烦。但对于长途旅行来说，这种方案会相对简便一些。有时我也会因为油价突然下跌而购买一些汽油，所以，这个方案是我可以考虑的一系列选项之一。</p><p>当然最重要的是：开车不写码，写码不开车！</p><hr>`,19)),l("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/18/10/python-gas-pump"},{default:e(()=>[...s[0]||(s[0]=[n("https://opensource.com/article/18/10/python-gas-pump",-1)])]),_:1})]),l("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/greg-p"},{default:e(()=>[...s[2]||(s[2]=[n("Greg Pittman",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),p(a,{href:"https://github.com/HankChow"},{default:e(()=>[...s[4]||(s[4]=[n("HankChow",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const T=t(h,[["render",d]]);export{C as __pageData,T as default};
