import{_ as e,a0 as o,w as r,s as d,I as a,x as n,a1 as i,A as t,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"“Exit Trap” 讓你的 Bash 腳本更穩固可靠 | LCTT x X-CMD","titleTemplate":false,"description":"“Exit Trap” 讓你的 Bash 腳本更穩固可靠 | LCTT (201805) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"“Exit Trap” 讓你的 Bash 腳本更穩固可靠 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"“Exit Trap” 讓你的 Bash 腳本更穩固可靠 | LCTT (201805) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201805/20180101 How Exit Traps Can Make Your Bash Scripts Way More Robust And Reliable","title":"“Exit Trap” 讓你的 Bash 腳本更穩固可靠","tag":"201805","desc":""},"relativePath":"201805/20180101 How Exit Traps Can Make Your Bash Scripts Way More Robust And Reliable.md","filePath":"[post].md"}'),u={name:"201805/20180101 How Exit Traps Can Make Your Bash Scripts Way More Robust And Reliable.md"};function h(b,s,c,f,g,k){const p=o("Link");return r(),d("div",null,[s[33]||(s[33]=a("h1",{id:"exit-trap-讓你的-bash-腳本更穩固可靠",tabindex:"-1"},[n("“Exit Trap” 讓你的 Bash 腳本更穩固可靠 "),a("a",{class:"header-anchor",href:"#exit-trap-讓你的-bash-腳本更穩固可靠","aria-label":"Permalink to ““Exit Trap” 讓你的 Bash 腳本更穩固可靠”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("有個簡單實用的技巧可以讓你的 bash 腳本更穩健 -- 確保總是執行必要的收尾工作，哪怕是在發生異常的時候。要做到這一點，秘訣就是 bash 提供的一個叫做 EXIT 的偽信號，你可以 ",-1)),i(p,{href:"http://www.gnu.org/software/bash/manual/bashref.html#index-trap"},{default:t(()=>[...s[0]||(s[0]=[n("trap",-1)])]),_:1}),s[2]||(s[2]=n(" 它，當腳本因為任何原因退出時，相應的命令或函數就會執行。我們來看看它是如何工作的。",-1))]),s[34]||(s[34]=l(`<p>基本的代碼結構看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>function finish {</span></span>
<span class="line"><span>  # 你的收尾代碼</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>trap finish EXIT</span></span></code></pre></div><p>你可以把任何你覺得務必要運行的代碼放在這個 <code>finish</code> 函數里。一個很好的例子是：創建一個臨時目錄，事後再刪除它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>scratch=$(mktemp -d -t tmp.XXXXXXXXXX)</span></span>
<span class="line"><span>function finish {</span></span>
<span class="line"><span>  rm -rf &quot;$scratch&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>trap finish EXIT</span></span></code></pre></div>`,4)),a("p",null,[s[4]||(s[4]=n("這樣，在你的核心代碼中，你就可以在這個 ",-1)),s[5]||(s[5]=a("code",null,"$scratch",-1)),s[6]||(s[6]=n(" 目錄裏下載、生成、操作中間或臨時數據了。^",-1)),i(p,{href:"http://redsymbol.net/articles/bash-exit-traps/#footnote-1"},{default:t(()=>[...s[3]||(s[3]=[n("注1",-1)])]),_:1})]),s[35]||(s[35]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 下載所有版本的 linux 內核…… 為了科學研究！</span></span>
<span class="line"><span>for major in {1..4}; do</span></span>
<span class="line"><span>  for minor in {0..99}; do</span></span>
<span class="line"><span>    for patchlevel in {0..99}; do</span></span>
<span class="line"><span>      tarball=&quot;linux-\${major}-\${minor}-\${patchlevel}.tar.bz2&quot;</span></span>
<span class="line"><span>      curl -q &quot;http://kernel.org/path/to/$tarball&quot; -o &quot;$scratch/$tarball&quot; || true</span></span>
<span class="line"><span>      if [ -f &quot;$scratch/$tarball&quot; ]; then</span></span>
<span class="line"><span>        tar jxf &quot;$scratch/$tarball&quot;</span></span>
<span class="line"><span>      fi</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span># 整合成單個文件</span></span>
<span class="line"><span># 複製到目標位置</span></span>
<span class="line"><span>cp &quot;$scratch/frankenstein-linux.tar.bz2&quot; &quot;$1&quot;</span></span>
<span class="line"><span># 腳本結束， scratch 目錄自動被刪除</span></span></code></pre></div><p>比較一下如果不用 <code>trap</code> ，你是怎麼刪除 <code>scratch</code> 目錄的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># 別這樣做！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scratch=$(mktemp -d -t tmp.XXXXXXXXXX)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在這裏插入你的幾十上百行代碼</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 都搞定了，退出之前把目錄刪除</span></span>
<span class="line"><span>rm -rf &quot;$scratch&quot;</span></span></code></pre></div><p>這有什麼問題麼？很多：</p><ul><li><p>如果運行出錯導致腳本提前退出， <code>scratch</code> 目錄及裏面的內容不會被刪除。這會導致資料泄漏，可能引發安全問題。</p></li><li><p>如果這個腳本的設計初衷就是在腳本末尾以前退出，那麼你必須手動複製粘貼 <code>rm</code> 命令到每一個出口。</p></li><li><p>這也給維護帶來了麻煩。如果今後在腳本某處添加了一個 <code>exit</code> ，你很可能就忘了加上刪除操作 -- 從而製造潛在的安全漏洞。</p></li></ul><h3 id="無論如何-服務要在線" tabindex="-1">無論如何，服務要在線 <a class="header-anchor" href="#無論如何-服務要在線" aria-label="Permalink to “無論如何，服務要在線”">​</a></h3><p>另外一個場景： 想像一下你正在運行一些自動化系統運維任務，要臨時關閉一項服務，最後這項服務需要重啓，而且要萬無一失，即使腳本運行出錯。那麼你可以這樣做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function finish {</span></span>
<span class="line"><span>    # 重啓服務</span></span>
<span class="line"><span>    sudo /etc/init.d/something start</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>trap finish EXIT</span></span>
<span class="line"><span>sudo /etc/init.d/something stop</span></span>
<span class="line"><span># 主要任務代碼</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 腳本結束，執行 finish 函數重啓服務</span></span></code></pre></div><p>一個具體的實例：比如 Ubuntu 服務器上運行着 MongoDB ，你要為 crond 寫一個腳本來臨時關閉服務並做一些日常維護工作。你應該這樣寫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function finish {</span></span>
<span class="line"><span>    # 重啓服務</span></span>
<span class="line"><span>    sudo service mongdb start</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>trap finish EXIT</span></span>
<span class="line"><span># 關閉 mongod 服務</span></span>
<span class="line"><span>sudo service mongdb stop</span></span>
<span class="line"><span># （如果 mongod 配置了 fork ，比如 replica set ，你可能需要執行 “sudo killall --wait /usr/bin/mongod”）</span></span></code></pre></div><h3 id="控制開銷" tabindex="-1">控制開銷 <a class="header-anchor" href="#控制開銷" aria-label="Permalink to “控制開銷”">​</a></h3><p>有一種情況特別能體現 EXIT <code>trap</code> 的價值：如果你的腳本運行過程中需要初始化一下成本高昂的資源，結束時要確保把它們釋放掉。比如你在 AWS (Amazon Web Services) 上工作，要在腳本中創建一個鏡像。</p>`,12)),a("p",null,[s[8]||(s[8]=n("（名詞解釋: 在亞馬遜雲上的運行的服務器叫“",-1)),i(p,{href:"http://aws.amazon.com/ec2/"},{default:t(()=>[...s[7]||(s[7]=[n("實例",-1)])]),_:1}),s[9]||(s[9]=n("”。實例從",-1)),s[10]||(s[10]=a("ruby",null,[n("亞馬遜機器鏡像"),a("rt",null,"Amazon Machine Image")],-1)),s[11]||(s[11]=n("創建而來，通常被稱為 “AMI” 或 “鏡像” 。AMI 相當於某個特殊時間點的服務器快照。）",-1))]),s[36]||(s[36]=l(`<p>我們可以這樣創建一個自定義的 AMI ：</p><ol><li>基於一個基準 AMI 運行一個實例（例如，啓動一個服務器）。</li><li>在實例中手動或運行腳本來做一些修改。</li><li>用修改後的實例創建一個鏡像。</li><li>如果不再需要這個實例，可以將其刪除。</li></ol><p>最後一步<strong>相當重要</strong>。如果你的腳本沒有把實例刪除掉，它會一直運行並計費。（到月底你的賬單讓你大跌眼鏡時，恐怕哭都來不及了！）</p><p>如果把 AMI 的創建封裝在腳本里，我們就可以利用 <code>trap</code> EXIT 來刪除實例了。我們還可以用上 EC2 的命令列工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># 定義基準 AMI 的 ID</span></span>
<span class="line"><span>ami=$1</span></span>
<span class="line"><span># 保存臨時實例的 ID</span></span>
<span class="line"><span>instance=&#39;&#39;</span></span>
<span class="line"><span># 作為 IT 人，讓我們看看 scratch 目錄的另類用法</span></span>
<span class="line"><span>scratch=$(mktemp -d -t tmp.XXXXXXXXXX)</span></span>
<span class="line"><span>function finish {</span></span>
<span class="line"><span>    if [ -n &quot;$instance&quot; ]; then</span></span>
<span class="line"><span>        ec2-terminate-instances &quot;$instance&quot;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    rm -rf &quot;$scratch&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>trap finish EXIT</span></span>
<span class="line"><span># 創建實例，將輸出(包含實例 ID )保存到 scratch 目錄下的文件裏</span></span>
<span class="line"><span>ec2-run-instances &quot;$ami&quot; &gt; &quot;$scratch/run-instance&quot;</span></span>
<span class="line"><span># 提取實例 ID</span></span>
<span class="line"><span>instance=$(grep &#39;^INSTANCE&#39; &quot;$scratch/run-instance&quot; | cut -f 2)</span></span></code></pre></div>`,5)),a("p",null,[s[13]||(s[13]=n("腳本執行到這裏，實例（EC2 服務器）已經開始運行 ^",-1)),i(p,{href:"http://redsymbol.net/articles/bash-exit-traps/#footnote-2"},{default:t(()=>[...s[12]||(s[12]=[n("注2",-1)])]),_:1}),s[14]||(s[14]=n("。接下來你可以做任何事情：在實例中安裝軟件，修改配置文件等，然後為最終版本創建一個鏡像。實例會在腳本結束時被刪除 -- 即使腳本因錯誤而提前退出。（請確保實例創建成功後再運行業務代碼。）",-1))]),s[37]||(s[37]=l('<h3 id="更多應用" tabindex="-1">更多應用 <a class="header-anchor" href="#更多應用" aria-label="Permalink to “更多應用”">​</a></h3><p>這篇文章只講了些皮毛。我已經使用這個 bash 技巧很多年了，現在還能不時發現一些有趣的用法。你也可以把這個方法應用到你自己的場景中，從而提升你的 bash 腳本的可靠性。</p><h3 id="尾註" tabindex="-1">尾註 <a class="header-anchor" href="#尾註" aria-label="Permalink to “尾註”">​</a></h3><ul><li>注1. <code>mktemp</code> 的選項 <code>-t</code> 在 Linux 上是可選的，在 OS X 上是必需的。帶上此選項可以讓你的腳本有更好的可移植性。</li><li>注2. 如果只是為了獲取實例 ID ，我們不用創建文件，直接寫成 <code>instance=$(ec2-run-instances &quot;$ami&quot; | grep &#39;^INSTANCE&#39; | cut -f 2)</code> 就可以。但把輸出寫入文件可以記錄更多有用信息，便於調試 ，代碼可讀性也更強。</li></ul>',4)),a("p",null,[s[17]||(s[17]=n("作者簡介：美國加利福尼亞舊金山的作家，軟件工程師，企業家。",-1)),i(p,{href:"https://www.amazon.com/d/0692878971"},{default:t(()=>[...s[15]||(s[15]=[n("Powerful Python",-1)])]),_:1}),s[18]||(s[18]=n(" 的作者，他的 ",-1)),i(p,{href:"https://powerfulpython.com/blog/"},{default:t(()=>[...s[16]||(s[16]=[n("blog",-1)])]),_:1}),s[19]||(s[19]=n("。",-1))]),s[38]||(s[38]=a("hr",null,null,-1)),a("p",null,[s[21]||(s[21]=n("via: ",-1)),i(p,{href:"http://redsymbol.net/articles/bash-exit-traps/"},{default:t(()=>[...s[20]||(s[20]=[n("http://redsymbol.net/articles/bash-exit-traps/",-1)])]),_:1})]),a("p",null,[s[25]||(s[25]=n("作者：",-1)),i(p,{href:"http://redsymbol.net/"},{default:t(()=>[...s[22]||(s[22]=[n("aaron maxwell",-1)])]),_:1}),s[26]||(s[26]=n(" 譯者：",-1)),i(p,{href:"https://github.com/Dotcra"},{default:t(()=>[...s[23]||(s[23]=[n("Dotcra",-1)])]),_:1}),s[27]||(s[27]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[24]||(s[24]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[28]||(s[28]=[n("LCTT",-1)])]),_:1}),s[31]||(s[31]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:t(()=>[...s[29]||(s[29]=[n("Linux中國",-1)])]),_:1}),s[32]||(s[32]=n(" 榮譽推出",-1))])])}const C=e(u,[["render",h]]);export{x as __pageData,C as default};
