import{_ as l,a0 as o,w as d,s as c,ao as t,I as n,x as a,a1 as i,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"i3 窗口管理器終極定製指南 | LCTT x X-CMD","titleTemplate":false,"description":"i3 窗口管理器終極定製指南 | LCTT (202306) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"i3 窗口管理器終極定製指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"i3 窗口管理器終極定製指南 | LCTT (202306) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202306/20230425.1 ⭐️⭐️⭐️ The Ultimate Guide to i3 Customization in Linux","title":"i3 窗口管理器終極定製指南","tag":"202306","desc":""},"relativePath":"202306/20230425.1 ⭐️⭐️⭐️ The Ultimate Guide to i3 Customization in Linux.md","filePath":"[post].md"}'),r={name:"202306/20230425.1 ⭐️⭐️⭐️ The Ultimate Guide to i3 Customization in Linux.md"};function g(u,s,h,b,k,f){const p=o("Link");return d(),c("div",null,[s[90]||(s[90]=t('<h1 id="i3-窗口管理器終極定製指南" tabindex="-1">i3 窗口管理器終極定製指南 <a class="header-anchor" href="#i3-窗口管理器終極定製指南" aria-label="Permalink to “i3 窗口管理器終極定製指南”">​</a></h1><blockquote><p>在這份超詳細的指南中瞭解如何通過 i3 窗口管理器來自定義系統的外觀和體驗。</p></blockquote><p>你可能在網上（尤其是通過 <code>r/unixporn</code> 子區）看到過很多炫酷的截圖，用户可以根據個人喜好自定義他們的桌面並與大家分享。</p><p>這是因為 Linux 允許你自定義桌面體驗的方方面面。</p><p>而結果？就是比任何 Mac 或 Windows 系統<strong>更具視覺和感知效果</strong>。</p><p>來看一下這個 😌</p><p><img src="https://itsfoss.com/content/images/2023/04/linux-mint-i3.jpg" alt=""></p><p><strong>看起來像一個 Linux Mint 系統嗎？</strong> 😲</p><p>但是你怎樣才能做到這樣呢？<strong>自定義你的 Linux 桌面外觀是很困難的</strong>。</p><p>答案就在於 <strong>窗口管理器</strong>。如果你能配置好窗口管理器，你就能自定義外觀。</p>',10)),n("p",null,[s[1]||(s[1]=a("在本指南中，我將引導你完成使用 ",-1)),s[2]||(s[2]=n("strong",null,"i3 窗口管理器",-1)),s[3]||(s[3]=a(" 進行基本配置。它是 ",-1)),i(p,{href:"https://itsfoss.com/best-window-managers/"},{default:e(()=>[...s[0]||(s[0]=[a("Linux 上最好的窗口管理器之一",-1)])]),_:1}),s[4]||(s[4]=a("。",-1))]),n("blockquote",null,[n("p",null,[s[6]||(s[6]=a("💡 “",-1)),s[7]||(s[7]=n("ruby",null,[a("加料"),n("rt",null,"Rice")],-1)),s[8]||(s[8]=a("” 是一個常用的詞彙，用來指代在桌面上進行視覺改進和自定義。",-1)),s[9]||(s[9]=n("strong",null,"引用自",-1)),s[10]||(s[10]=a()),i(p,{href:"https://www.reddit.com/r/unixporn"},{default:e(()=>[...s[5]||(s[5]=[a("/r/unixporn",-1)])]),_:1}),s[11]||(s[11]=a(" （LCTT 譯註：“加料”一詞來自於購買便宜的亞洲汽車，並給它們安裝售後零件，以讓它更好地類似於賽車。）",-1))])]),s[91]||(s[91]=n("p",null,"在遵循本指南之前，你需要了解以下內容：",-1)),s[92]||(s[92]=n("ul",null,[n("li",null,[a("在本指南中，"),n("strong",null,"我將使用 Arch Linux"),a(" 來演示步驟，但你可以使用你喜歡的任何發行版，結果也是一樣的。")]),n("li",null,[a("請記住，本指南是 "),n("strong",null,"對 i3 進行“加料”定製的基礎"),a("。")])],-1)),s[93]||(s[93]=n("p",null,"在按照本指南進行操作後，你應該得到以下預期結果：",-1)),s[94]||(s[94]=n("p",null,[n("img",{src:"https://itsfoss.com/content/images/2023/04/How-to-configure-i3-window-manager-with-i3blocks-and-i3gaps-in-linux.png",alt:"如何在 Linux 中配置 i3 窗口管理器、i3blocks 和 i3gaps"})],-1)),n("blockquote",null,[n("p",null,[s[13]||(s[13]=a("📥 為了節省你的時間，我已經在 ",-1)),i(p,{href:"https://github.com/itsfoss/text-files/tree/master/i3_config_files"},{default:e(()=>[...s[12]||(s[12]=[a("GitHub",-1)])]),_:1}),s[14]||(s[14]=a(" 上上傳了與本文相關的所有 i3 配置文件，你可以通過這些文件實現我們在本文中所期望的最終外觀。",-1))])]),n("blockquote",null,[n("p",null,[n("strong",null,[i(p,{href:"https://github.com/itsfoss/text-files/tree/master/i3_config_files"},{default:e(()=>[...s[15]||(s[15]=[a("下載 i3 配置文件",-1)])]),_:1})])])]),s[95]||(s[95]=t('<p><strong>首先</strong>，讓我們開始安裝 <strong>i3 窗口管理器</strong>。</p><h3 id="在-linux-上安裝-i3-窗口管理器" tabindex="-1">在 Linux 上安裝 i3 窗口管理器 <a class="header-anchor" href="#在-linux-上安裝-i3-窗口管理器" aria-label="Permalink to “在 Linux 上安裝 i3 窗口管理器”">​</a></h3><p>基於 Ubuntu/Debian：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install xorg lightdm lightdm-gtk-greeter i3-wm i3lock i3status i3blocks dmenu terminator</span></span></code></pre></div><p>Arch Linux：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S xorg lightdm lightdm-gtk-greeter i3-wm i3lock i3status i3blocks dmenu terminator</span></span></code></pre></div><p>當你完成安裝後，使用以下命令啓用 lightdm 服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo systemctl enable lightdm.service</span></span></code></pre></div><p>然後啓動 lightdm 服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo systemctl start lightdm.service</span></span></code></pre></div><p>這將啓動 lightdm 登錄界面，並要求你輸入用户名密碼。</p><p>如果你安裝了多個桌面環境，你可以從選擇菜單中選擇 i3：</p><p><img src="https://itsfoss.com/content/images/2023/04/use-lightdm-to-use-the-i3-wm-in-arch.png" alt="在 Arch Linux 上使用 lightdm 使用 i3 窗口管理器"></p><p>當首次登錄 i3 時，它會詢問你是否要創建一個 i3 配置文件。</p><p>按下回車鍵創建一個新的 i3 配置文件：</p><p><img src="https://itsfoss.com/content/images/2023/04/create-configuration-file-for-i3.png" alt="生成 i3 配置文件"></p><p>接下來，它會詢問你選擇 <code>Win</code> 或 <code>Alt</code> 鍵哪個作為修飾鍵（<code>mod</code>）。</p><p>我建議你選擇 <code>Win</code>（或者 <code>Super</code> 鍵），因為大多數用户已經習慣將其用作快捷鍵：</p><p><img src="https://itsfoss.com/content/images/2023/04/choose-the-mod-key-in-i3.png" alt=""></p><p>現在你可以開始使用 i3 窗口管理器了。</p><p>但在我們開始定製之前，讓我先介紹一下你如何使用 i3。</p><h3 id="i3-窗口管理器的按鍵綁定" tabindex="-1">i3 窗口管理器的按鍵綁定 <a class="header-anchor" href="#i3-窗口管理器的按鍵綁定" aria-label="Permalink to “i3 窗口管理器的按鍵綁定”">​</a></h3><p>讓我們從基礎知識開始。</p><p>窗口管理器的基本功能是將多個窗口水平和垂直地組合在一起，這樣你就可以同時監視多個進程。</p><p>結果是這樣的：</p><p><img src="https://itsfoss.com/content/images/2023/04/Using-I3-on-arch-linux.png" alt="在 Arch Linux 上使用 i3"></p><p>你可以使用以下按鍵綁定執行更多操作：</p><div class="table-wrap"><table><thead><tr><th style="text-align:left;">按鍵綁定</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Mod + Enter</code></td><td style="text-align:left;">打開終端。</td></tr><tr><td style="text-align:left;"><code>Mod + ←</code></td><td style="text-align:left;">切換到左側窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + →</code></td><td style="text-align:left;">切換到右側窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + ↑</code></td><td style="text-align:left;">切換到上方窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + ↓</code></td><td style="text-align:left;">切換到下方窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + ←</code></td><td style="text-align:left;">將窗口移動到左側。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + →</code></td><td style="text-align:left;">將窗口移動到右側。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + ↑</code></td><td style="text-align:left;">將窗口移動到上方。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + ↓</code></td><td style="text-align:left;">將窗口移動到下方。</td></tr><tr><td style="text-align:left;"><code>Mod + f</code></td><td style="text-align:left;">將焦點窗口切換到全屏模式。</td></tr><tr><td style="text-align:left;"><code>Mod + v</code></td><td style="text-align:left;">下一個窗口將垂直放置。</td></tr><tr><td style="text-align:left;"><code>Mod + h</code></td><td style="text-align:left;">下一個窗口將水平放置。</td></tr><tr><td style="text-align:left;"><code>Mod + s</code></td><td style="text-align:left;">啓用堆疊式窗口布局。</td></tr><tr><td style="text-align:left;"><code>Mod + w</code></td><td style="text-align:left;">啓用選項卡式窗口布局。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + Space</code></td><td style="text-align:left;">啓用浮動窗口（針對焦點窗口）。</td></tr><tr><td style="text-align:left;"><code>Mod + 鼠標左鍵單擊</code></td><td style="text-align:left;">使用鼠標拖動整個窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + 0-9</code></td><td style="text-align:left;">切換到另一個工作區。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + 0-9</code></td><td style="text-align:left;">將窗口移動到另一個工作區。</td></tr><tr><td style="text-align:left;"><code>Mod + d</code></td><td style="text-align:left;">打開應用程序啓動器（D 菜單）。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + q</code></td><td style="text-align:left;">關閉焦點窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + c</code></td><td style="text-align:left;">重新加載 i3 配置文件。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + r</code></td><td style="text-align:left;">重啓 i3 窗口管理器。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + e</code></td><td style="text-align:left;">退出 i3 窗口管理器。</td></tr></tbody></table></div><p>我知道按鍵綁定很多，但如果你每天練習它們，你很快就會習慣。</p><p>如果你想知道，你可以根據需要更改按鍵綁定，後面的指南中我會分享如何做到這一點。</p><p>現在，讓我們來看看配置部分。</p><h3 id="在-arch-linux-中啓用-aur" tabindex="-1">在 Arch Linux 中啓用 AUR <a class="header-anchor" href="#在-arch-linux-中啓用-aur" aria-label="Permalink to “在 Arch Linux 中啓用 AUR”">​</a></h3><p>如果你剛剛安裝了 Arch Linux，可能還沒有啓用 AUR。</p><p>這意味着你錯過了 Arch Linux 最重要的特性。</p>',34)),n("p",null,[s[17]||(s[17]=a("要 ",-1)),i(p,{href:"https://itsfoss.com/aur-arch-linux/"},{default:e(()=>[...s[16]||(s[16]=[a("啓用 AUR",-1)])]),_:1}),s[18]||(s[18]=a("，你需要使用 AUR 包管理器。在這裏，我將使用 ",-1)),s[19]||(s[19]=n("code",null,"yay",-1)),s[20]||(s[20]=a("。",-1))]),s[96]||(s[96]=t('<p>首先，安裝 <code>git</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S git</span></span></code></pre></div><p>現在，克隆 <code>yay</code> 存儲庫並切換到 <code>yay</code> 目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git clone https://aur.archlinux.org/yay-git.git &amp;&amp; cd yay</span></span></code></pre></div><p>最後，構建包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>makepkg -si</span></span></code></pre></div>',6)),n("p",null,[s[22]||(s[22]=a("還有其他一些 ",-1)),i(p,{href:"https://itsfoss.com/best-aur-helpers/"},{default:e(()=>[...s[21]||(s[21]=[a("AUR 包管理器",-1)])]),_:1}),s[23]||(s[23]=a("，比如 Paru，如果你想使用除 ",-1)),s[24]||(s[24]=n("code",null,"yay",-1)),s[25]||(s[25]=a(" 之外的其他工具，你可以繼續或者探索其他選項。",-1))]),s[97]||(s[97]=t('<h3 id="更改-i3-窗口管理器的分辨率" tabindex="-1">更改 i3 窗口管理器的分辨率 <a class="header-anchor" href="#更改-i3-窗口管理器的分辨率" aria-label="Permalink to “更改 i3 窗口管理器的分辨率”">​</a></h3><p>如果你使用虛擬機運行窗口管理器，可能會遇到問題，尤其是顯示分辨率可能被鎖定在 <code>1024x768</code> 上，就像我一樣。</p><p>因此，你需要執行以下命令，指定所需的顯示分辨率：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>xrandr --output [顯示名稱] --mode [分辨率]</span></span></code></pre></div><p>要找到已連接顯示器的名稱，你需要使用以下形式的 <code>xrandr</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>xrandr | grep -w &#39;connected&#39;</span></span></code></pre></div><p><img src="https://itsfoss.com/content/images/2023/04/find-connected-display-in-I3.png" alt="在 i3 中查找已連接顯示器"></p><p>在我的情況下，顯示名稱是 <code>Virtual-1</code>。</p><p>因此，如果我想將分辨率更改為 <code>1920*1080</code>，我需要執行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>xrandr --output Virtual-1 --mode 1920x1080</span></span></code></pre></div><p><strong>但這只是暫時生效</strong>。要使其永久生效，你需要在 i3 配置文件中進行更改。</p><p>首先，打開配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div>',13)),n("p",null,[s[27]||(s[27]=a("通過按下 ",-1)),s[28]||(s[28]=n("code",null,"Alt + /",-1)),s[29]||(s[29]=a(" 來在 ",-1)),s[30]||(s[30]=n("code",null,"nano",-1)),s[31]||(s[31]=a(" 中 ",-1)),i(p,{href:"https://linuxhandbook.com/beginning-end-file-nano/"},{default:e(()=>[...s[26]||(s[26]=[a("跳到文件末尾",-1)])]),_:1}),s[32]||(s[32]=a("，並使用以下語法來永久更改顯示分辨率：",-1))]),s[98]||(s[98]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 顯示分辨率</span></span>
<span class="line"><span>exec_always xrandr --output [顯示名稱] --mode [分辨率]</span></span></code></pre></div><p>結果應該是這樣的：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-display-resolution-in-I3-permanently.png" alt="在 i3 中永久更改顯示分辨率"></p>`,3)),n("p",null,[s[34]||(s[34]=a("完成後，",-1)),i(p,{href:"https://linuxhandbook.com/nano-save-exit/"},{default:e(()=>[...s[33]||(s[33]=[a("保存更改並退出 nano",-1)])]),_:1}),s[35]||(s[35]=a(" 文本編輯器。",-1))]),s[99]||(s[99]=t(`<p>現在，使用 <code>Mod + Shift + r</code> 重新啓動 i3 窗口管理器，以使你對配置文件所做的更改生效！</p><h3 id="在-i3-窗口管理器中更改壁紙" tabindex="-1">在 i3 窗口管理器中更改壁紙 <a class="header-anchor" href="#在-i3-窗口管理器中更改壁紙" aria-label="Permalink to “在 i3 窗口管理器中更改壁紙”">​</a></h3><p>默認情況下，i3 的外觀比較陳舊，你可能想切換回之前的桌面環境。</p><p>但是通過更改壁紙，你可以改變整個系統的氛圍。</p><p>在 i3 中有多種方式可以更改壁紙，但在這裏，我將向你展示如何使用 <code>feh</code> 實用工具。</p><p>首先，讓我們從安裝開始：</p><p>對於基於 <strong>Arch 的發行版</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S feh</span></span></code></pre></div><p>對於 <strong>Ubuntu/Debian</strong> 系的發行版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install feh</span></span></code></pre></div><p>安裝完成後，你可以從互聯網上下載你喜歡的壁紙。接下來，<strong>打開 i3 配置文件</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>跳到文件的末尾，使用如下所示的 <code>feh</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 顯示壁紙</span></span>
<span class="line"><span>exec_always feh --bg-fill /path/to/wallpaper</span></span></code></pre></div><p>在我的情況下，壁紙位於 <code>Downloads</code> 目錄中，所以我的命令如下：</p><p><img src="https://itsfoss.com/content/images/2023/04/Use-feh-utility-to-change-background-in-I3-window-manager.png" alt="使用 feh 實用工具在 I3 窗口管理器中更改背景"></p><p>保存更改並退出 <code>nano</code> 文本編輯器。</p><p>為了使配置文件的更改生效，使用 <code>Mod + Shift + r</code> 重新啓動 i3 窗口管理器。</p><p>我的效果如下：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-wallpaper-in-I3-window-manager.png" alt="在 i3 窗口管理器中更改壁紙"></p><h3 id="自定義-i3-鎖屏界面" tabindex="-1">自定義 i3 鎖屏界面 <a class="header-anchor" href="#自定義-i3-鎖屏界面" aria-label="Permalink to “自定義 i3 鎖屏界面”">​</a></h3><p>默認情況下，如果你想鎖定系統，你需要執行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>i3lock</span></span></code></pre></div><p>鎖屏界面如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/how-to-lock-the-I3-window-manager.gif" alt="鎖定 i3 窗口管理器"></p><p>下面，我將向你展示：</p><ul><li>如何創建自定義快捷方式以鎖定 i3 會話</li><li>如何更改鎖屏界面的壁紙</li></ul><p>為了使鎖屏界面更加美觀，你需要使用 <code>i3lock-color</code> 包。</p><p>但首先，你需要移除現有的 <code>i3lock</code>，因為它會與 <code>i3lock-color</code> 衝突：</p><p>在 Arch Linux 上移除它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -R i3lock</span></span></code></pre></div><p>對於 Ubuntu/Debian 用户：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt remove i3lock</span></span></code></pre></div><p>完成後，你可以使用 AUR 包管理器安裝 <code>i3lock-color</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yay i3lock-color</span></span></code></pre></div>`,35)),n("p",null,[s[37]||(s[37]=a("如果你使用的是基於 Ubuntu 的系統，你需要從頭編譯它。你可以在他們的 GitHub 頁面上找到 ",-1)),i(p,{href:"https://github.com/Raymo111/i3lock-color"},{default:e(()=>[...s[36]||(s[36]=[a("詳細的説明",-1)])]),_:1}),s[38]||(s[38]=a("。",-1))]),s[100]||(s[100]=t(`<p>安裝完成後，讓我們創建一個新目錄並創建一個新文件來存儲鎖屏界面的配置：</p><p>安裝好 <code>i3lock-color</code> 後，你可以創建一個新目錄並創建一個新文件來存儲鎖屏界面的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir ~/.config/scripts &amp;&amp; nano ~/.config/scripts/lock</span></span></code></pre></div><p>將以下文件內容粘貼到文件中，定義鎖屏界面的樣式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BLANK=&#39;#00000000&#39;</span></span>
<span class="line"><span>CLEAR=&#39;#ffffff22&#39;</span></span>
<span class="line"><span>DEFAULT=&#39;#00897bE6&#39;</span></span>
<span class="line"><span>TEXT=&#39;#00897bE6&#39;</span></span>
<span class="line"><span>WRONG=&#39;#880000bb&#39;</span></span>
<span class="line"><span>VERIFYING=&#39;#00564dE6&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i3lock \\</span></span>
<span class="line"><span>--insidever-color=$CLEAR     \\</span></span>
<span class="line"><span>--ringver-color=$VERIFYING   \\</span></span>
<span class="line"><span>\\</span></span>
<span class="line"><span>--insidewrong-color=$CLEAR   \\</span></span>
<span class="line"><span>--ringwrong-color=$WRONG     \\</span></span>
<span class="line"><span>\\</span></span>
<span class="line"><span>--inside-color=$BLANK        \\</span></span>
<span class="line"><span>--ring-color=$DEFAULT        \\</span></span>
<span class="line"><span>--line-color=$BLANK          \\</span></span>
<span class="line"><span>--separator-color=$DEFAULT   \\</span></span>
<span class="line"><span>\\</span></span>
<span class="line"><span>--verif-color=$TEXT          \\</span></span>
<span class="line"><span>--wrong-color=$TEXT          \\</span></span>
<span class="line"><span>--time-color=$TEXT           \\</span></span>
<span class="line"><span>--date-color=$TEXT           \\</span></span>
<span class="line"><span>--layout-color=$TEXT         \\</span></span>
<span class="line"><span>--keyhl-color=$WRONG         \\</span></span>
<span class="line"><span>--bshl-color=$WRONG          \\</span></span>
<span class="line"><span>\\</span></span>
<span class="line"><span>--screen 1                   \\</span></span>
<span class="line"><span>--blur 9                     \\</span></span>
<span class="line"><span>--clock                      \\</span></span>
<span class="line"><span>--indicator                  \\</span></span>
<span class="line"><span>--time-str=&quot;%H:%M:%S&quot;        \\</span></span>
<span class="line"><span>--date-str=&quot;%A, %Y-%m-%d&quot;       \\</span></span>
<span class="line"><span>--keylayout 1                \\</span></span></code></pre></div><p>保存更改並退出文本編輯器。</p><blockquote><p>📋 在網上可以找到各種不同的 i3 鎖屏樣式的 bash 腳本。這只是一個示例，對於大多數情況來説是一個較為簡單的選項。</p></blockquote>`,7)),n("p",null,[s[40]||(s[40]=a("現在，使用 ",-1)),i(p,{href:"https://linuxhandbook.com/chmod-command/"},{default:e(()=>[...s[39]||(s[39]=[a("chmod 命令",-1)])]),_:1}),s[41]||(s[41]=a(" 將該文件設置為可執行文件：",-1))]),s[101]||(s[101]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x .config/scripts/lock</span></span></code></pre></div><p>接下來，你需要對配置文件進行一些更改，以添加該配置文件的路徑以使其生效。</p><p>此外，我將向你展示如何使用自定義鍵盤快捷鍵鎖定屏幕。</p><p>首先，打開配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>使用 <code>Alt + /</code> 跳至行尾並粘貼以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 鎖屏快捷鍵</span></span>
<span class="line"><span>bindsym $mod+x exec /home/$USER/.config/scripts/lock</span></span></code></pre></div><p>在上面的示例中，我將 <code>mod + x</code> 作為鎖定屏幕的快捷鍵，你可以選擇任何你喜歡的快捷鍵。</p><p>最後的配置文件將如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/how-to-use-i3lock-color-in-arch-linux-1.png" alt="如何在 Arch Linux 中使用 i3lock-color"></p><p>相當不錯，不是嗎？</p><h3 id="在-i3-窗口管理器中更改主題和圖標" tabindex="-1">在 i3 窗口管理器中更改主題和圖標 <a class="header-anchor" href="#在-i3-窗口管理器中更改主題和圖標" aria-label="Permalink to “在 i3 窗口管理器中更改主題和圖標”">​</a></h3><p>我知道你可能會想到這個問題。</p><p>你為什麼需要圖標呢？你並不僅僅使用窗口管理器來使用命令列工具。</p><p>有時候，使用圖形界面更加方便，比如使用文件管理器。所以，在處理這些工具時，你希望界面看起來更好看？</p><p>因此，在本部分中，我將向你展示：</p><ul><li>如何在 i3 中更改主題</li><li>如何在 i3 中更改圖標</li></ul><p>讓我們從安裝主題開始。</p><p>在這裏，我將使用 <code>materia-gtk-theme</code> 和 <code>papirus</code> 圖標，但你可以使用任何你喜歡的主題和圖標。</p><p>在 Arch 中安裝主題，使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S materia-gtk-theme papirus-icon-theme</span></span></code></pre></div><p>在 Ubuntu/Debian 系統中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install materia-gtk-theme papirus-icon-theme</span></span></code></pre></div><p>但僅僅安裝還不能完成任務。<strong>你需要像使用 GNOME “<ruby>調整<rt>Tweaks</rt></ruby>” 應用更改主題一樣來應用主題。</strong></p><p><strong>在 i3 中，你可以使用 <code>lxappearance</code> 工具</strong> 來更改主題和圖標。</p><p>在 Arch 中安裝 <code>lxappearance</code>，使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S lxappearance</span></span></code></pre></div><p>在 Ubuntu/Debian 系統中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install lxappearance</span></span></code></pre></div><p>安裝完成後，使用 <code>Mod + d</code> 啓動 D 菜單，然後輸入 <code>lxappearance</code>，並在第一個結果上按回車鍵。</p><p>在這裏，選擇你喜歡的主題。我這裏選擇 <code>Materia-dark</code>。</p><p>選擇主題後，點擊應用按鈕以應用更改：</p><p><img src="https://itsfoss.com/content/images/2023/04/Change-theme-in-I3-window-manager-using-lxappearance.png" alt=""></p><p>同樣地，要更改圖標，選擇 “<ruby>圖標主題<rt>Icon Theme</rt></ruby>”，選擇圖標主題，然後點擊應用按鈕：</p><p><img src="https://itsfoss.com/content/images/2023/04/Change-icons-in-I3-window-manager-using-lxappearance.png" alt="使用 lxappearance 更改 i3 窗口管理器中的圖標"></p><p>應用主題和圖標後，我的文件管理器如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-theme-and-icon-in-i3-window-manager.png" alt="在 i3 窗口管理器中更改主題和圖標"></p><h3 id="在-i3-窗口管理器中為工作區設置圖標" tabindex="-1">在 i3 窗口管理器中為工作區設置圖標 <a class="header-anchor" href="#在-i3-窗口管理器中為工作區設置圖標" aria-label="Permalink to “在 i3 窗口管理器中為工作區設置圖標”">​</a></h3><p>默認情況下，工作區僅由數字表示，這並不是你想要使用工作區的最理想方式。</p><p>因此，在本部分中，我將引導你如何使用合適的圖標更改工作區的名稱。</p><p>為了在配置文件中使用圖標，首先你需要安裝名為 <code>Awesome</code> 的新字體：</p><p>對於基於 Arch 的發行版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S ttf-font-awesome</span></span></code></pre></div><p>對於 Ubuntu/Debian 系統：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install fonts-font-awesome</span></span></code></pre></div><p>安裝完成後，打開 i3 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在這個配置文件中，找到工作區的部分，你將會看到為每個工作區給出的變量：</p><p><img src="https://itsfoss.com/content/images/2023/04/workspace-variables-in-I3-config-file.png" alt="在 i3 配置文件中的工作區變量"></p><p>在這個部分，你需要用你想要的名稱替換給出的工作區數字。</p><p>我將把第一個工作區命名為 “programs”，因為<strong>在本教程的後面部分，我將展示如何將特定的應用程序分配到特定的工作區。</strong></p><p>我主要使用前 5 個工作區，所以我會相應地命名它們：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 定義默認工作區的名稱，稍後我們將在其中配置鍵綁定。</span></span>
<span class="line"><span># 我們使用變量來避免在多個地方重複使用名稱。</span></span>
<span class="line"><span>set $ws1 &quot;1: Terminal&quot;</span></span>
<span class="line"><span>set $ws2 &quot;2: Firefox&quot;</span></span>
<span class="line"><span>set $ws3 &quot;3: VMWare&quot;</span></span>
<span class="line"><span>set $ws4 &quot;4: Spotify&quot;</span></span>
<span class="line"><span>set $ws5 &quot;5: Shutter&quot;</span></span>
<span class="line"><span>set $ws6 &quot;6&quot;</span></span>
<span class="line"><span>set $ws7 &quot;7&quot;</span></span>
<span class="line"><span>set $ws8 &quot;8&quot;</span></span>
<span class="line"><span>set $ws9 &quot;9&quot;</span></span>
<span class="line"><span>set $ws10 &quot;10&quot;</span></span></code></pre></div><p>現在讓我們為配置文件中提到的每個應用程序添加圖標。</p>`,54)),n("p",null,[s[43]||(s[43]=a("你可以 ",-1)),i(p,{href:"https://fontawesome.com/v5/cheatsheet"},{default:e(()=>[...s[42]||(s[42]=[a("參考 awesome 字體的備忘單",-1)])]),_:1}),s[44]||(s[44]=a(" 來找到合適的圖標。",-1))]),s[102]||(s[102]=t(`<p>將圖標複製粘貼到名稱前面：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 定義默認工作區的名稱，稍後我們將在其中配置鍵綁定。</span></span>
<span class="line"><span># 我們使用變量來避免在多個地方重複使用名稱。</span></span>
<span class="line"><span>set $ws1 &quot;1:  Terminal&quot;</span></span>
<span class="line"><span>set $ws2 &quot;2:  Firefox&quot;</span></span>
<span class="line"><span>set $ws3 &quot;3:  VMWare&quot;</span></span>
<span class="line"><span>set $ws4 &quot;4:  Spotify&quot;</span></span>
<span class="line"><span>set $ws5 &quot;5:  Shutter&quot;</span></span>
<span class="line"><span>set $ws6 &quot;6&quot;</span></span>
<span class="line"><span>set $ws7 &quot;7&quot;</span></span>
<span class="line"><span>set $ws8 &quot;8&quot;</span></span>
<span class="line"><span>set $ws9 &quot;9&quot;</span></span>
<span class="line"><span>set $ws10 &quot;10&quot;</span></span></code></pre></div><p>不要擔心它看起來可怕！</p><p>完成後，使用 <code>Mod + e</code> 退出 i3，然後再次登錄以應用你剛剛所做的更改。</p><p>我的效果如下圖所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/workspace-icons.png" alt=""></p><p>字體看起來太小？是時候解決這個問題了！</p><h3 id="在-i3-中更改標題窗口和狀態欄的字體" tabindex="-1">在 i3 中更改標題窗口和狀態欄的字體 <a class="header-anchor" href="#在-i3-中更改標題窗口和狀態欄的字體" aria-label="Permalink to “在 i3 中更改標題窗口和狀態欄的字體”">​</a></h3><p>首先，讓我們安裝新的字體（我將在這裏使用 Ubuntu 字體）。</p><p>要在 Arch 上安裝 Ubuntu 字體，請執行以下操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S ttf-ubuntu-font-family</span></span></code></pre></div><p>如果你使用的是 Ubuntu，你已經安裝了這些字體！</p><p>安裝完成後，打開配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在配置文件中，找到 <code>font pango:monospace 8</code> 這一行，這是默認字體。</p><p>找到那行後，添加字體名稱和大小，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>font pango:Ubuntu Regular 14</span></span></code></pre></div><p>然後，使用 <code>Mod + Shift + r</code> 重新啓動窗口管理器，這樣就完成了工作：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-font-of-the-workspace-and-titlebar-in-I3-window-manager.png" alt=""></p><h3 id="在-i3-窗口管理器中分配應用程序到工作區" tabindex="-1">在 i3 窗口管理器中分配應用程序到工作區 <a class="header-anchor" href="#在-i3-窗口管理器中分配應用程序到工作區" aria-label="Permalink to “在 i3 窗口管理器中分配應用程序到工作區”">​</a></h3><p>在給工作區命名之後，你會想要將特定的軟件分配到相應的工作區中。</p><p>例如，如果我將第二個工作區命名為 “Firefox”，那麼我只想在該工作區中使用 Firefox。</p><p>那麼要如何實現呢？</p><p>為了做到這一點，你需要找到每個要分配的應用程序的類名。</p><p><strong>聽起來複雜？</strong> 讓我告訴你如何做。</p><p>首先，將應用程序和終端並排打開。例如，在這個例子中，我將 Firefox 和終端並排打開：</p><p><img src="https://itsfoss.com/content/images/2023/04/open-application-and-terminal-side-by-side.png" alt="並排打開應用程序和終端"></p><p>現在，在終端中執行 <code>xprop</code> 命令，它會改變鼠標指針的形狀：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>xprop</span></span></code></pre></div><p>接下來，將鼠標懸停在應用程序上，並在應用程序窗口內的任何位置單擊，如圖所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/find-the-class-name-in-i3-window-manager.gif" alt="在 i3 窗口管理器中查找類名"></p><p>類名將在以下行的最後一個字符串中找到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>WM_CLASS(STRING) = &quot;Navigator&quot;, &quot;firefox&quot;</span></span></code></pre></div><p>在我的情況下，Firefox 瀏覽器的類名將是 <code>firefox</code>。</p><p>對所有你想要分配到工作區的應用程序重複這個過程。</p><p><strong>一旦你知道每個你想要分配到工作區的應用程序的類名，打開配置文件：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>使用 <code>Alt + /</code> 將 <code>nano</code> 定位到文件末尾，並使用以下語法將應用程序分配到工作區：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 分配應用到工作區</span></span>
<span class="line"><span>for_window [class=&quot;類名&quot;] move to workspace $[工作區變量]</span></span></code></pre></div><p>作為參考，下面是我為不同應用程序分配了 4 個工作區後的配置文件示例：</p><p><img src="https://itsfoss.com/content/images/2023/04/Allocate-specific-applications-to-specific-workspaces-in-I3-window-manager.png" alt="將應用分配到工作區"></p><p>現在，無論在哪個工作區打開任何應用程序，它都會自動放置在配置的工作區中。非常方便！ 😊</p><h3 id="在-i3-窗口管理器中讓終端變透明" tabindex="-1">在 i3 窗口管理器中讓終端變透明 <a class="header-anchor" href="#在-i3-窗口管理器中讓終端變透明" aria-label="Permalink to “在 i3 窗口管理器中讓終端變透明”">​</a></h3><p>要啓用透明效果，你需要安裝 <code>picom</code> 合成器並對配置文件進行一些更改。</p><p>讓我們從安裝開始。</p><p>對於基於 Arch 的發行版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S picom</span></span></code></pre></div><p>對於基於 Ubuntu/Debian 的發行版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install picom</span></span></code></pre></div><p>安裝完成後，你需要告訴系統使用 <code>picom</code>。</p><p>首先打開配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在配置文件的末尾插入以下行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 使用 picom 合成器實現透明效果</span></span>
<span class="line"><span>exec_always picom -f</span></span></code></pre></div><p>這裏，我使用 <code>-f</code> 標誌來在切換工作區、打開新應用程序等時啓用淡入淡出效果。</p><p>保存並退出文本編輯器。</p><p>現在，使用 <code>Mod + Shift + r</code> 重新啓動 i3。</p><p>接下來，打開終端，打開 “<ruby>首選項<rt>Preference</rt></ruby>”，然後選擇“<ruby>配置文件<rt>Profiles</rt></ruby>”，選擇“<ruby>背景<rt>Background</rt></ruby>”，然後選擇“<ruby>透明背景<rt>Transparent background</rt></ruby>”選項。</p><p>從這裏，你可以調整透明度：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-terminal-background-transperency-in-I3-window-manager.png" alt="在 i3 窗口管理器中更改終端背景透明度"></p><h3 id="在-i3-窗口管理器中自定義狀態欄" tabindex="-1">在 i3 窗口管理器中自定義狀態欄 <a class="header-anchor" href="#在-i3-窗口管理器中自定義狀態欄" aria-label="Permalink to “在 i3 窗口管理器中自定義狀態欄”">​</a></h3><p>默認情況下，狀態欄顯示各種信息，但沒有圖標。</p><p>因此，在這個部分，我將展示如何從狀態欄中刪除一些元素以及如何為它們添加圖標。</p><p>但是，在這裏，我將在 <code>/etc/i3status.conf</code> 中創建一個原始狀態欄的副本，以便如果出現任何錯誤，你可以隨時恢復到默認配置。</p><p>首先，在 <code>.config</code> 目錄下創建一個新的目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir .config/i3status</span></span></code></pre></div>`,66)),n("p",null,[s[46]||(s[46]=a("在以下命令中，我使用了 ",-1)),i(p,{href:"https://linuxhandbook.com/cp-command/"},{default:e(()=>[...s[45]||(s[45]=[a("cp 命令來複制文件",-1)])]),_:1}),s[47]||(s[47]=a("：",-1))]),s[103]||(s[103]=t('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo cp /etc/i3status.conf ~/.config/i3status/i3status.conf</span></span></code></pre></div>',1)),n("p",null,[s[49]||(s[49]=a("接下來，使用 ",-1)),i(p,{href:"https://linuxhandbook.com/chown-command/"},{default:e(()=>[...s[48]||(s[48]=[a("chown 命令更改所有者",-1)])]),_:1}),s[50]||(s[50]=a("，以便你可以進行所需的更改：",-1))]),s[104]||(s[104]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chown $USER:$USER ~/.config/i3status/i3status.conf</span></span></code></pre></div><p>現在，你需要通過修改 i3 配置文件來指示窗口管理器使用新的 i3status 配置文件。首先打開配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在該配置文件中查找 <code>status_command i3status</code> 這一行。這是你將提供新狀態配置文件路徑的行。</p><p>找到該行後，進行以下更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bar {</span></span>
<span class="line"><span>    status_command i3status -c /home/$USER/.config/i3status/i3status.conf</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最終的結果應該如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-the-path-of-the-i3-status-config-in-I3-window-manager.png" alt="在 i3 窗口管理器中更改 i3 狀態配置路徑"></p><p>保存更改並退出文本編輯器。</p><p>現在，讓我們從狀態欄中刪除不必要的指示器。</p><p>首先，打開 i3status 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano .config/i3status/i3status.conf</span></span></code></pre></div><p>在這裏，你可以將以 <code>order</code> 開頭的行註釋掉，這些行實際上是指示器的變量。</p><p><strong>例如，在這裏</strong>，我禁用了 <code>ipv6</code>、<code>wireless _first_</code>、<code>battery all</code> 和 <code>load</code> 這些對我來説不必要的指示器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#order += &quot;ipv6&quot;</span></span>
<span class="line"><span>#order += &quot;wireless _first_&quot;</span></span>
<span class="line"><span>order += &quot;ethernet _first_&quot;</span></span>
<span class="line"><span>#order += &quot;battery all&quot;</span></span>
<span class="line"><span>order += &quot;disk /&quot;</span></span>
<span class="line"><span>#order += &quot;load&quot;</span></span>
<span class="line"><span>order += &quot;memory&quot;</span></span>
<span class="line"><span>order += &quot;tztime local&quot;</span></span></code></pre></div>`,15)),n("p",null,[s[52]||(s[52]=a("然後，",-1)),i(p,{href:"https://fontawesome.com/v5/cheatsheet"},{default:e(()=>[...s[51]||(s[51]=[a("在瀏覽器中打開 awesome font 列表",-1)])]),_:1}),s[53]||(s[53]=a("，找到與狀態欄中列出的項目相關的適當圖標。",-1))]),s[105]||(s[105]=t(`<p>在我的設置中，我刪除了以下內容：</p><ul><li>刪除了顯示可用內存的行</li><li>刪除了顯示以太網連接速度的行</li></ul><p>最終，我的狀態欄如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/Customize-the-status-bar-in-the-I3-window-manager.png" alt="自定義 i3 窗口管理器中的狀態欄"></p><h3 id="在-i3-窗口管理器中改變顏色方案" tabindex="-1">在 i3 窗口管理器中改變顏色方案 <a class="header-anchor" href="#在-i3-窗口管理器中改變顏色方案" aria-label="Permalink to “在 i3 窗口管理器中改變顏色方案”">​</a></h3><p>更改 i3 窗口管理器中的顏色方案是這個指南中最重要的部分，因為窗口管理器最吸引人的地方就是你選擇的窗口裝飾顏色。</p><blockquote><p>📋 我將為每個顏色聲明變量，這樣你只需更改變量本身的值，就可以輕鬆地獲得新的顏色方案。</p></blockquote><p>首先，打開 i3 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>使用 <code>Alt + /</code> 快捷鍵到達文件末尾，並使用以下語法添加變量來存儲顏色：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 窗口的色彩方案</span></span>
<span class="line"><span>set $bgcolor    #523d64</span></span>
<span class="line"><span>set $in-bgcolor #363636</span></span>
<span class="line"><span>set $text       #ffffff</span></span>
<span class="line"><span>set $u-bgcolor  #ff0000</span></span>
<span class="line"><span>set $indicator  #a8a3c1</span></span>
<span class="line"><span>set $in-text    #969696</span></span>
<span class="line"><span>#                       邊框            背景            文本            指示器（顯示下一個窗口位置的線條）     </span></span>
<span class="line"><span>client.focused          $bgcolor        $bgcolor        $text           $indicator</span></span>
<span class="line"><span>client.unfocused        $in-bgcolor     $in-bgcolor     $in-text        $in-bgcolor</span></span>
<span class="line"><span>client.focused_inactive $in-bgcolor     $in-bgcolor     $in-text        $in-bgcolor</span></span>
<span class="line"><span>client.urgent           $u-bgcolor      $u-bgcolor      $text           $u-bgcolor</span></span></code></pre></div><p>在這裏：</p><ul><li><code>bgcolor</code> 表示背景色。</li><li><code>in-bgcolor</code> 表示非活動窗口的背景色。</li><li><code>text</code> 是文本顏色。</li><li><code>u-bgcolor</code> 表示緊急操作的背景色。</li><li><code>indicator</code> 是標示下一個窗口位置的線條的顏色。</li><li><code>in-text</code> 是非活動窗口的文本顏色。</li></ul><p>對於本指南，我僅使用了四個基本類別：</p><ul><li><code>client.focused</code> 定義了焦點窗口的顏色。</li><li><code>client.unfocused</code> 定義了失去焦點時窗口的裝飾。</li><li><code>client.focused_inactive</code> 當其中一個容器處於焦點但當前沒有焦點時，顯示的顏色。</li><li><code>client.urgent</code> 定義了緊急操作時的顏色。</li></ul>`,15)),n("blockquote",null,[n("p",null,[s[55]||(s[55]=a("💡 除了這四個類別，還有更多類別，請參考 ",-1)),i(p,{href:"https://i3wm.org/docs/userguide.html#client_colors"},{default:e(()=>[...s[54]||(s[54]=[a("官方 i3 配置手冊",-1)])]),_:1}),s[56]||(s[56]=a(" 以瞭解更多信息。",-1))])]),s[106]||(s[106]=t(`<p>一旦你對配置文件進行了更改，請使用 <code>Mod + Shift + r</code> 重新啓動 i3。</p><p>如果你按照我的顏色方案，設置應該如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-window-colors-in-I3-window-manager.png" alt="更改 I3 窗口管理器中的窗口顏色"></p><p>那麼，狀態欄的顏色怎麼辦？當然可以改！</p><h4 id="更改-i3-窗口管理器中狀態欄的顏色方案" tabindex="-1">更改 i3 窗口管理器中狀態欄的顏色方案 <a class="header-anchor" href="#更改-i3-窗口管理器中狀態欄的顏色方案" aria-label="Permalink to “更改 i3 窗口管理器中狀態欄的顏色方案”">​</a></h4><p>在本節中，你將意識到為什麼我使用變量來存儲顏色，因為我將使用相同的變量來為我的狀態欄上色！</p><p>要在狀態欄中使用顏色，你需要在 i3 配置文件的 <code>bar {...}</code> 部分進行更改。</p><p>首先，打開配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在配置文件中查找 <code>bar {...}</code> 部分。</p><p>找到該部分後，創建一個顏色部分，併為狀態欄定義顏色和類別，與你為窗口所做的相同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bar {</span></span>
<span class="line"><span>        status_command i3status -c /home/$USER/.config/i3status/i3status.conf</span></span>
<span class="line"><span>        colors {</span></span>
<span class="line"><span>                background $bgcolor</span></span>
<span class="line"><span>                separator #191919</span></span>
<span class="line"><span>                #                       border          background      text</span></span>
<span class="line"><span>                focused_workspace       $bgcolor        $bgcolor        $text</span></span>
<span class="line"><span>                inactive_workspace      $in-bgcolor     $in-bgcolor     $text</span></span>
<span class="line"><span>                urgent_workspace        $u-bgcolor      $u-bgcolor      $text   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在這裏，我使用了 <code>focused_workspace</code>、<code>inactive_workspace</code> 和 <code>urgent_workspace</code> 這三個類別，根據需要定義了相應的顏色。</p><p>保存更改後，重新啓動 i3，狀態欄也會顯示顏色。</p><h3 id="設置-i3-狀態欄的透明度" tabindex="-1">設置 i3 狀態欄的透明度 <a class="header-anchor" href="#設置-i3-狀態欄的透明度" aria-label="Permalink to “設置 i3 狀態欄的透明度”">​</a></h3><p>本節將向你展示如何使 i3 狀態欄透明。</p><p>在此之前，讓我們先更改 i3 狀態欄的字體。</p><p>這裏，我將使用 Droid 字體，使其看起來乾淨而帶有一種極客風格。</p><p>要在 Arch Linux 上安裝 Droid 字體，請使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S ttf-droid</span></span></code></pre></div><p>對於 Ubuntu/Debian 系統，請使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install fonts-droid-fallback</span></span></code></pre></div><p>安裝完成後，打開配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>進入 <code>bar {...}</code> 部分，並按下面的示例輸入字體名稱和大小：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>font pango: Droid Sans Mono 11</span></span></code></pre></div><p><img src="https://itsfoss.com/content/images/2023/04/change-fonts-in-i3-status-bar.png" alt="在 i3 狀態欄中更改字體"></p><p>完成後，請重新啓動 i3，字體將會被更改！</p><p>要使狀態欄透明，你可以使用現有十六進制代碼中的額外兩個數字來定義透明度。</p>`,29)),n("p",null,[s[58]||(s[58]=a("如果你想要控制透明度，我建議你查看 ",-1)),i(p,{href:"https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4"},{default:e(()=>[...s[57]||(s[57]=[a("此指南，其中提供了從 0 到 100% 透明度的代碼範圍",-1)])]),_:1}),s[59]||(s[59]=a("。",-1))]),s[107]||(s[107]=t(`<p>為此，我將在配置文件中使用兩個新變量。首先，打開配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在這裏，我為背景顏色添加了 60% 的透明度，併為非活躍背景顏色添加了 30% 的透明度：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>set $bgcolor    #523d6499</span></span>
<span class="line"><span>set $in-bgcolor #3636364D</span></span></code></pre></div><p>如果你仔細觀察，我在現有的十六進制顏色代碼中添加了兩位數字來定義透明度。例如，使用 <code>99</code> 來表示 <code>60%</code> 的透明度，而使用 <code>4D</code> 來表示 <code>30%</code> 的透明度。</p><p>此外，我添加了兩個新變量，透明度不同但顏色相同，作為背景使用，使其看起來更好：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>set $focused-ws #523d6480</span></span>
<span class="line"><span>set $bar-color  #523d640D</span></span></code></pre></div><p>完成後，讓我們修改 <code>bar {...}</code> 部分來應用透明度。</p><p>在 <code>bar {...}</code> 中添加兩行代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>i3bar_command i3bar --transparency</span></span>
<span class="line"><span>tray_output none</span></span></code></pre></div><p>請注意，使用 <code>tray_output none</code>，它將不會在托盤中顯示任何圖標。如果你不希望出現這種行為，則可以跳過此行，只添加第一行以實現透明度。</p><p>一旦完成，修改狀態欄的顏色方案，例如更改背景顏色、邊框和活動工作區的背景。</p><p>修改後，配置文件應如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/config-file-to-make-the-I3-bar-transparent-in-I3-window-manager-1.png" alt="使 i3 狀態欄透明的配置文件（i3 窗口管理器）"></p><p>為了使你所做的更改生效，請重新啓動 i3，你將得到透明的窗口和狀態欄：</p><p><img src="https://itsfoss.com/content/images/2023/04/make-I3-status-bar-and-windows-transparent-in-I3-window-manager-3.png" alt="在 i3 窗口管理器中使狀態欄和窗口透明"></p><h3 id="在窗口管理器中使用-i3blocks" tabindex="-1">在窗口管理器中使用 i3blocks <a class="header-anchor" href="#在窗口管理器中使用-i3blocks" aria-label="Permalink to “在窗口管理器中使用 i3blocks”">​</a></h3><p>默認的 i3 狀態欄在我看來毫無用處；怎麼樣讓它變得有用起來呢？</p><p>在本部分，我將解釋如何添加以下功能：</p><ul><li>軟件包更新</li><li>內存使用情況</li><li>磁盤使用情況</li><li>音量指示器</li><li>Spotify 指示器</li></ul><blockquote><p>📋 要實現這些功能，你需要使用一些腳本，這些腳本將允許你向狀態欄添加所需的操作。不用擔心，我不會讓你手動輸入腳本；GitHub 上有各種腳本可供選擇，幾乎涵蓋了你所需的所有方面。</p></blockquote><p>但在此之前，你需要進行一些配置，以存儲腳本並指示 i3 使用 i3block 的配置，而不是使用 i3bar。</p><p>如果你在本指南的開頭按照給定的説明進行操作，那麼 i3blocks 已經安裝好了，並且配置文件位於 <code>/etc/i3blocks.conf</code>。</p><p><em>如果你希望快速下載塊配置文件以進行設置而不閲讀其他內容，請點擊以下鏈接：</em></p>`,24)),n("blockquote",null,[n("p",null,[n("strong",null,[i(p,{href:"https://github.com/itsfoss/text-files/tree/master/i3_config_files"},{default:e(()=>[...s[60]||(s[60]=[a("i3 配置文件",-1)])]),_:1})])])]),s[108]||(s[108]=t(`<p>在本教程中，我將創建一個副本，使用它代替原始的配置文件，因此首先我們要創建一個目錄來存儲配置文件的副本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir ~/.config/i3blocks</span></span></code></pre></div><p>現在，創建一個原始配置文件的副本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo cp /etc/i3blocks.conf ~/.config/i3blocks/</span></span></code></pre></div><p>最後，使用 <code>chown</code> 命令更改文件的所有者，以便你進行所需的更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chown $USER:$USER ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>要啓用 i3blocks，在 i3 配置文件中進行一些更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>進入 <code>bar {...}</code> 部分，在這裏，你需要將 <code>status_command</code> 更改為 <code>i3blocks</code> 並添加 i3blocks 配置文件的路徑，如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/enable-i3blocks-in-i3-window-manager.png" alt="在 i3 窗口管理器中啓用 i3blocks"></p><p>完成後，使用 <code>Mod + Shift + r</code> 重新啓動 i3 窗口管理器，整個狀態欄都會被更改，並顯示如下：</p><p><img src="https://itsfoss.com/content/images/2023/04/the-default-look-of-the-i3blocks-in-i3-window-manager.png" alt="i3 窗口管理器中 i3blocks 的默認外觀"></p><p>不要擔心，你將很快使狀態欄比以前的 i3bar 更有價值和好看。</p><h4 id="添加磁盤塊" tabindex="-1">添加磁盤塊 <a class="header-anchor" href="#添加磁盤塊" aria-label="Permalink to “添加磁盤塊”">​</a></h4><p>如果你想要顯示磁盤剩餘空間，可以添加此塊。</p><p>在這裏，我將使用 <code>nano</code> 創建並打開用於磁盤塊的配置文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/scripts/disk</span></span></code></pre></div><p>然後粘貼以下行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span>DIR=&quot;\${DIR:-$BLOCK_INSTANCE}&quot;</span></span>
<span class="line"><span>DIR=&quot;\${DIR:-$HOME}&quot;</span></span>
<span class="line"><span>ALERT_LOW=&quot;\${ALERT_LOW:-$1}&quot;</span></span>
<span class="line"><span>ALERT_LOW=&quot;\${ALERT_LOW:-10}&quot; # color will turn red under this value (default: 10%)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LOCAL_FLAG=&quot;-l&quot;</span></span>
<span class="line"><span>if [ &quot;$1&quot; = &quot;-n&quot; ] || [ &quot;$2&quot; = &quot;-n&quot; ]; then</span></span>
<span class="line"><span>    LOCAL_FLAG=&quot;&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>df -h -P $LOCAL_FLAG &quot;$DIR&quot; | awk -v label=&quot;$LABEL&quot; -v alert_low=$ALERT_LOW &#39;</span></span>
<span class="line"><span>/\\/.*/ {</span></span>
<span class="line"><span>	# full text</span></span>
<span class="line"><span>	print label $4</span></span>
<span class="line"><span>	# short text</span></span>
<span class="line"><span>	print label $4</span></span>
<span class="line"><span>	use=$5</span></span>
<span class="line"><span>	# no need to continue parsing</span></span>
<span class="line"><span>	exit 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>END {</span></span>
<span class="line"><span>	gsub(/%$/,&quot;&quot;,use)</span></span>
<span class="line"><span>	if (100 - use &lt; alert_low) {</span></span>
<span class="line"><span>		# color</span></span>
<span class="line"><span>		print &quot;#FF0000&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&#39;</span></span></code></pre></div><p>保存更改並從文本編輯器中退出。</p><p>現在，將此文件設置為可執行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x ~/.config/scripts/disk</span></span></code></pre></div><p>接下來，打開 I3blocks 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>根據你想要放置磁盤塊的位置，粘貼以下行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[disk]</span></span>
<span class="line"><span>command=/home/$USER/.config/scripts/disk</span></span>
<span class="line"><span>LABEL=</span></span>
<span class="line"><span>#DIR=$HOME</span></span>
<span class="line"><span>#ALERT_LOW=10</span></span>
<span class="line"><span>interval=30</span></span></code></pre></div><p>完成後，保存更改並使用 <code>Mod + Shift + r</code> 重新啓動 i3，狀態欄中將顯示帶有磁盤圖標的可用磁盤空間。</p><h4 id="添加內存塊" tabindex="-1">添加內存塊 <a class="header-anchor" href="#添加內存塊" aria-label="Permalink to “添加內存塊”">​</a></h4><p>這將是狀態欄中指示系統中已使用內存的塊。</p><p>首先，創建並打開一個新文件用於新的塊：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/scripts/memory</span></span></code></pre></div><p>然後在新文件中粘貼以下行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span>TYPE=&quot;\${BLOCK_INSTANCE:-mem}&quot;</span></span>
<span class="line"><span>PERCENT=&quot;\${PERCENT:-true}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>awk -v type=$TYPE -v percent=$PERCENT &#39;</span></span>
<span class="line"><span>/^MemTotal:/ {</span></span>
<span class="line"><span>	mem_total=$2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/^MemFree:/ {</span></span>
<span class="line"><span>	mem_free=$2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/^Buffers:/ {</span></span>
<span class="line"><span>	mem_free+=$2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/^Cached:/ {</span></span>
<span class="line"><span>	mem_free+=$2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/^SwapTotal:/ {</span></span>
<span class="line"><span>	swap_total=$2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/^SwapFree:/ {</span></span>
<span class="line"><span>	swap_free=$2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>END {</span></span>
<span class="line"><span>	if (type == &quot;swap&quot;) {</span></span>
<span class="line"><span>		free=swap_free/1024/1024</span></span>
<span class="line"><span>		used=(swap_total-swap_free)/1024/1024</span></span>
<span class="line"><span>		total=swap_total/1024/1024</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		free=mem_free/1024/1024</span></span>
<span class="line"><span>		used=(mem_total-mem_free)/1024/1024</span></span>
<span class="line"><span>		total=mem_total/1024/1024</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	pct=0</span></span>
<span class="line"><span>	if (total &gt; 0) {</span></span>
<span class="line"><span>		pct=used/total*100</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	# full text</span></span>
<span class="line"><span>	if (percent == &quot;true&quot; ) {</span></span>
<span class="line"><span>		printf(&quot;%.1fG/%.1fG (%.f%%)\\n&quot;, used, total, pct)</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		printf(&quot;%.1fG/%.1fG\\n&quot;, used, total)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	# short text</span></span>
<span class="line"><span>	printf(&quot;%.f%%\\n&quot;, pct)</span></span>
<span class="line"><span>	# color</span></span>
<span class="line"><span>	if (pct &gt; 90) {</span></span>
<span class="line"><span>		print(&quot;#FF0000&quot;)</span></span>
<span class="line"><span>	} else if (pct &gt; 80) {</span></span>
<span class="line"><span>		print(&quot;#FFAE00&quot;)</span></span>
<span class="line"><span>	} else if (pct &gt; 70) {</span></span>
<span class="line"><span>		print(&quot;#FFF600&quot;)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&#39; /proc/meminfo</span></span></code></pre></div><p>保存更改並從文本編輯器中退出。</p><p>現在，要使其生效，你需要使用以下命令將此文件設置為可執行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x ~/.config/scripts/memory</span></span></code></pre></div><p>接下來，打開 i3blocks 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>並將以下內容粘貼到你希望在狀態欄中顯示內存使用情況的位置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[memory]</span></span>
<span class="line"><span>command=/home/$USER/.config/scripts/memory</span></span>
<span class="line"><span>label=</span></span>
<span class="line"><span>interval=30</span></span></code></pre></div><p>保存更改並從文本編輯器中退出。重新啓動 i3 以使更改生效！</p><h4 id="添加更新指示塊" tabindex="-1">添加更新指示塊 <a class="header-anchor" href="#添加更新指示塊" aria-label="Permalink to “添加更新指示塊”">​</a></h4><p>這是最有幫助的指示器，它顯示需要更新的舊軟件包數量。</p><p>首先，使用以下命令安裝依賴項以使其正常工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S pacman-contrib</span></span></code></pre></div><p>現在，創建一個新文件來存儲腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/scripts/arch-update</span></span></code></pre></div><p>然後粘貼以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span>import subprocess</span></span>
<span class="line"><span>from subprocess import check_output</span></span>
<span class="line"><span>import argparse</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import re</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def create_argparse():</span></span>
<span class="line"><span>    def _default(name, default=&#39;&#39;, arg_type=str):</span></span>
<span class="line"><span>        val = default</span></span>
<span class="line"><span>        if name in os.environ:</span></span>
<span class="line"><span>            val = os.environ[name]</span></span>
<span class="line"><span>        return arg_type(val)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    strbool = lambda s: s.lower() in [&#39;t&#39;, &#39;true&#39;, &#39;1&#39;]</span></span>
<span class="line"><span>    strlist = lambda s: s.split()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    parser = argparse.ArgumentParser(description=&#39;Check for pacman updates&#39;)</span></span>
<span class="line"><span>    parser.add_argument(</span></span>
<span class="line"><span>        &#39;-b&#39;,</span></span>
<span class="line"><span>        &#39;--base_color&#39;,</span></span>
<span class="line"><span>        default = _default(&#39;BASE_COLOR&#39;, &#39;green&#39;),</span></span>
<span class="line"><span>        help=&#39;base color of the output(default=green)&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    parser.add_argument(</span></span>
<span class="line"><span>        &#39;-u&#39;,</span></span>
<span class="line"><span>        &#39;--updates_available_color&#39;,</span></span>
<span class="line"><span>        default = _default(&#39;UPDATE_COLOR&#39;, &#39;yellow&#39;),</span></span>
<span class="line"><span>        help=&#39;color of the output, when updates are available(default=yellow)&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    parser.add_argument(</span></span>
<span class="line"><span>        &#39;-a&#39;,</span></span>
<span class="line"><span>        &#39;--aur&#39;,</span></span>
<span class="line"><span>        action = &#39;store_const&#39;,</span></span>
<span class="line"><span>        const = True,</span></span>
<span class="line"><span>        default = _default(&#39;AUR&#39;, &#39;False&#39;, strbool),</span></span>
<span class="line"><span>        help=&#39;Include AUR packages. Attn: Yaourt must be installed&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    parser.add_argument(</span></span>
<span class="line"><span>        &#39;-y&#39;,</span></span>
<span class="line"><span>        &#39;--aur_yay&#39;,</span></span>
<span class="line"><span>        action = &#39;store_const&#39;,</span></span>
<span class="line"><span>        const = True,</span></span>
<span class="line"><span>        default = _default(&#39;AUR_YAY&#39;, &#39;False&#39;, strbool),</span></span>
<span class="line"><span>        help=&#39;Include AUR packages. Attn: Yay must be installed&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    parser.add_argument(</span></span>
<span class="line"><span>        &#39;-q&#39;,</span></span>
<span class="line"><span>        &#39;--quiet&#39;,</span></span>
<span class="line"><span>        action = &#39;store_const&#39;,</span></span>
<span class="line"><span>        const = True,</span></span>
<span class="line"><span>        default = _default(&#39;QUIET&#39;, &#39;False&#39;, strbool),</span></span>
<span class="line"><span>        help = &#39;Do not produce output when system is up to date&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    parser.add_argument(</span></span>
<span class="line"><span>        &#39;-w&#39;,</span></span>
<span class="line"><span>        &#39;--watch&#39;,</span></span>
<span class="line"><span>        nargs=&#39;*&#39;,</span></span>
<span class="line"><span>        default = _default(&#39;WATCH&#39;, arg_type=strlist),</span></span>
<span class="line"><span>        help=&#39;Explicitly watch for specified packages. &#39;</span></span>
<span class="line"><span>        &#39;Listed elements are treated as regular expressions for matching.&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    return parser.parse_args()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def get_updates():</span></span>
<span class="line"><span>    output = &#39;&#39;</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        output = check_output([&#39;checkupdates&#39;]).decode(&#39;utf-8&#39;)</span></span>
<span class="line"><span>    except subprocess.CalledProcessError as exc:</span></span>
<span class="line"><span>        # checkupdates exits with 2 and no output if no updates are available.</span></span>
<span class="line"><span>        # we ignore this case and go on</span></span>
<span class="line"><span>        if not (exc.returncode == 2 and not exc.output):</span></span>
<span class="line"><span>            raise exc</span></span>
<span class="line"><span>    if not output:</span></span>
<span class="line"><span>        return []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    updates = [line.split(&#39; &#39;)[0]</span></span>
<span class="line"><span>               for line in output.split(&#39;\\n&#39;)</span></span>
<span class="line"><span>               if line]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return updates</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def get_aur_yaourt_updates():</span></span>
<span class="line"><span>    output = &#39;&#39;</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        output = check_output([&#39;yaourt&#39;, &#39;-Qua&#39;]).decode(&#39;utf-8&#39;)</span></span>
<span class="line"><span>    except subprocess.CalledProcessError as exc:</span></span>
<span class="line"><span>        # yaourt exits with 1 and no output if no updates are available.</span></span>
<span class="line"><span>        # we ignore this case and go on</span></span>
<span class="line"><span>        if not (exc.returncode == 1 and not exc.output):</span></span>
<span class="line"><span>            raise exc</span></span>
<span class="line"><span>    if not output:</span></span>
<span class="line"><span>        return []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    aur_updates = [line.split(&#39; &#39;)[0]</span></span>
<span class="line"><span>                   for line in output.split(&#39;\\n&#39;)</span></span>
<span class="line"><span>                   if line.startswith(&#39;aur/&#39;)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return aur_updates</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def get_aur_yay_updates():</span></span>
<span class="line"><span>    output = check_output([&#39;yay&#39;, &#39;-Qua&#39;]).decode(&#39;utf-8&#39;)</span></span>
<span class="line"><span>    if not output:</span></span>
<span class="line"><span>        return []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    aur_updates = [line.split(&#39; &#39;)[0] for line in output.split(&#39;\\n&#39;) if line]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return aur_updates</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def matching_updates(updates, watch_list):</span></span>
<span class="line"><span>    matches = set()</span></span>
<span class="line"><span>    for u in updates:</span></span>
<span class="line"><span>        for w in watch_list:</span></span>
<span class="line"><span>            if re.match(w, u):</span></span>
<span class="line"><span>                matches.add(u)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return matches</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>label = os.environ.get(&quot;LABEL&quot;,&quot;&quot;)</span></span>
<span class="line"><span>message = &quot;{0}&lt;span color=&#39;{1}&#39;&gt;{2}&lt;/span&gt;&quot;</span></span>
<span class="line"><span>args = create_argparse()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>updates = get_updates()</span></span>
<span class="line"><span>if args.aur:</span></span>
<span class="line"><span>    updates += get_aur_yaourt_updates()</span></span>
<span class="line"><span>elif args.aur_yay:</span></span>
<span class="line"><span>    updates += get_aur_yay_updates()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>update_count = len(updates)</span></span>
<span class="line"><span>if update_count &gt; 0:</span></span>
<span class="line"><span>    if update_count == 1:</span></span>
<span class="line"><span>      info = str(update_count) + &#39; update available&#39;</span></span>
<span class="line"><span>      short_info = str(update_count) + &#39; update&#39;</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>      info = str(update_count) + &#39; updates available&#39;</span></span>
<span class="line"><span>      short_info = str(update_count) + &#39; updates&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    matches = matching_updates(updates, args.watch)</span></span>
<span class="line"><span>    if matches:</span></span>
<span class="line"><span>        info += &#39; [{0}]&#39;.format(&#39;, &#39;.join(matches))</span></span>
<span class="line"><span>        short_info += &#39;*&#39;</span></span>
<span class="line"><span>    print(message.format(label, args.updates_available_color, info))</span></span>
<span class="line"><span>    print(message.format(label, args.updates_available_color, short_info))</span></span>
<span class="line"><span>elif not args.quiet:</span></span>
<span class="line"><span>    print(message.format(label, args.base_color, &#39;system up to date&#39;))</span></span></code></pre></div><p>保存更改並從文本編輯器中退出。</p><p>現在，使用以下命令將此文件設置為可執行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x ~/.config/scripts/arch-update</span></span></code></pre></div><p>接下來，打開 i3blocks 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>並將以下內容粘貼到所需的位置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[arch-update]</span></span>
<span class="line"><span>command=/home/$USER/.config/scripts/arch-update</span></span>
<span class="line"><span>interval=3600</span></span>
<span class="line"><span>markup=pango</span></span>
<span class="line"><span>LABEL=</span></span></code></pre></div><p>保存更改並重新加載 i3 窗口管理器，它將顯示需要更新的軟件包數量。</p>`,57)),n("p",null,[s[62]||(s[62]=a("如果你正在使用 Ubuntu，你可以 ",-1)),i(p,{href:"https://github.com/vivien/i3blocks-contrib/tree/master/apt-upgrades"},{default:e(()=>[...s[61]||(s[61]=[a("按照 GitHub 頁面上的説明",-1)])]),_:1}),s[63]||(s[63]=a(" 進行操作。",-1))]),s[109]||(s[109]=t(`<h4 id="添加音量指示塊" tabindex="-1">添加音量指示塊 <a class="header-anchor" href="#添加音量指示塊" aria-label="Permalink to “添加音量指示塊”">​</a></h4><p>添加音量指示塊需要一些努力，因為你希望它的行為符合預期。你需要實現以下功能：</p><ul><li>使用媒體控制鍵管理音量的鍵綁定</li><li>添加一個指示音量的音量塊</li></ul><p>但要做到這一點，首先你需要安裝一些依賴項。</p><p>如果你使用的是 Arch Linux，請使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S pulseaudio-alsa pulseaudio-bluetooth pulseaudio-equalizer pulseaudio-jack alsa-utils playerctl</span></span></code></pre></div><p>如果你使用的是 Ubuntu/Debian 系統，請使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install pulseaudio-module-bluetooth pulseaudio-equalizer pulseaudio-module-jack alsa-utils playerctl</span></span></code></pre></div><p>接下來，讓我們看看如何在 i3 窗口管理器中啓用媒體控制鍵。</p><p>首先，打開 i3 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>轉到文件的末尾，並粘貼以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Key bindings for Media control keys</span></span>
<span class="line"><span>bindsym XF86AudioPlay exec playerctl play</span></span>
<span class="line"><span>bindsym XF86AudioPause exec playerctl pause</span></span>
<span class="line"><span>bindsym XF86AudioNext exec playerctl next</span></span>
<span class="line"><span>bindsym XF86AudioPrev exec playerctl previous</span></span></code></pre></div><p>現在，讓我們為此塊創建一個新文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/scripts/volume</span></span></code></pre></div><p>然後粘貼以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span>if [[ -z &quot;$MIXER&quot; ]] ; then</span></span>
<span class="line"><span>    MIXER=&quot;default&quot;</span></span>
<span class="line"><span>    if command -v pulseaudio &gt;/dev/null 2&gt;&amp;1 &amp;&amp; pulseaudio --check ; then</span></span>
<span class="line"><span>        # pulseaudio is running, but not all installations use &quot;pulse&quot;</span></span>
<span class="line"><span>        if amixer -D pulse info &gt;/dev/null 2&gt;&amp;1 ; then</span></span>
<span class="line"><span>            MIXER=&quot;pulse&quot;</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    [ -n &quot;$(lsmod | grep jack)&quot; ] &amp;&amp; MIXER=&quot;jackplug&quot;</span></span>
<span class="line"><span>    MIXER=&quot;\${2:-$MIXER}&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>if [[ -z &quot;$SCONTROL&quot; ]] ; then</span></span>
<span class="line"><span>    SCONTROL=&quot;\${BLOCK_INSTANCE:-$(amixer -D $MIXER scontrols |</span></span>
<span class="line"><span>                      sed -n &quot;s/Simple mixer control &#39;\\([^&#39;]*\\)&#39;,0/\\1/p&quot; |</span></span>
<span class="line"><span>                      head -n1</span></span>
<span class="line"><span>                    )}&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># The first parameter sets the step to change the volume by (and units to display)</span></span>
<span class="line"><span># This may be in in % or dB (eg. 5% or 3dB)</span></span>
<span class="line"><span>if [[ -z &quot;$STEP&quot; ]] ; then</span></span>
<span class="line"><span>    STEP=&quot;\${1:-5%}&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NATURAL_MAPPING=\${NATURAL_MAPPING:-0}</span></span>
<span class="line"><span>if [[ &quot;$NATURAL_MAPPING&quot; != &quot;0&quot; ]] ; then</span></span>
<span class="line"><span>    AMIXER_PARAMS=&quot;-M&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#------------------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>capability() { # Return &quot;Capture&quot; if the device is a capture device</span></span>
<span class="line"><span>  amixer $AMIXER_PARAMS -D $MIXER get $SCONTROL |</span></span>
<span class="line"><span>    sed -n &quot;s/  Capabilities:.*cvolume.*/Capture/p&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>volume() {</span></span>
<span class="line"><span>  amixer $AMIXER_PARAMS -D $MIXER get $SCONTROL $(capability)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>保存更改並退出配置文件。</p><p>接下來，打開 I3blocks 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>然後粘貼以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[volume]</span></span>
<span class="line"><span>command=/home/$USER/.config/scripts/volume</span></span>
<span class="line"><span>LABEL=♪</span></span>
<span class="line"><span>#LABEL=VOL </span></span>
<span class="line"><span>interval=1</span></span>
<span class="line"><span>signal=10</span></span>
<span class="line"><span>#STEP=5%</span></span>
<span class="line"><span>MIXER=default</span></span>
<span class="line"><span>#SCONTROL=[determined automatically]</span></span>
<span class="line"><span>#NATURAL_MAPPING=0</span></span></code></pre></div><p>保存更改並重新加載 i3，從現在開始，音量快捷鍵將起作用，並且指示器將按預期工作！</p><blockquote><p>💡 如果遇到音頻/視頻不工作等問題，請使用此命令，它應該解決該問題：</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemctl --user disable --now pipewire.{socket,service} &amp;&amp; systemctl --user mask pipewire.socket</span></span></code></pre></div><h4 id="添加-spotify-塊" tabindex="-1">添加 Spotify 塊 <a class="header-anchor" href="#添加-spotify-塊" aria-label="Permalink to “添加 Spotify 塊”">​</a></h4>`,26)),n("p",null,[s[65]||(s[65]=a("我將使用 ",-1)),i(p,{href:"https://github.com/firatakandere"},{default:e(()=>[...s[64]||(s[64]=[a("firatakandere",-1)])]),_:1}),s[66]||(s[66]=a(" 的腳本來添加此功能。在繼續之前，你可以先查看一下該腳本。",-1))]),s[110]||(s[110]=t(`<p>首先，創建並打開一個用於 Spotify 塊的新文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/scripts/spotify.py</span></span></code></pre></div><p>然後粘貼以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import dbus</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>    bus = dbus.SessionBus()</span></span>
<span class="line"><span>    spotify = bus.get_object(&quot;org.mpris.MediaPlayer2.spotify&quot;, &quot;/org/mpris/MediaPlayer2&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if os.environ.get(&#39;BLOCK_BUTTON&#39;):</span></span>
<span class="line"><span>        control_iface = dbus.Interface(spotify, &#39;org.mpris.MediaPlayer2.Player&#39;)</span></span>
<span class="line"><span>        if (os.environ[&#39;BLOCK_BUTTON&#39;] == &#39;1&#39;):</span></span>
<span class="line"><span>            control_iface.Previous()</span></span>
<span class="line"><span>        elif (os.environ[&#39;BLOCK_BUTTON&#39;] == &#39;2&#39;):</span></span>
<span class="line"><span>            control_iface.PlayPause()</span></span>
<span class="line"><span>        elif (os.environ[&#39;BLOCK_BUTTON&#39;] == &#39;3&#39;):</span></span>
<span class="line"><span>            control_iface.Next()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    spotify_iface = dbus.Interface(spotify, &#39;org.freedesktop.DBus.Properties&#39;)</span></span>
<span class="line"><span>    props = spotify_iface.Get(&#39;org.mpris.MediaPlayer2.Player&#39;, &#39;Metadata&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (sys.version_info &gt; (3, 0)):</span></span>
<span class="line"><span>        print(str(props[&#39;xesam:artist&#39;][0]) + &quot; - &quot; + str(props[&#39;xesam:title&#39;]))</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        print(props[&#39;xesam:artist&#39;][0] + &quot; - &quot; + props[&#39;xesam:title&#39;]).encode(&#39;utf-8&#39;)</span></span>
<span class="line"><span>    exit</span></span>
<span class="line"><span>except dbus.exceptions.DBusException:</span></span>
<span class="line"><span>    exit</span></span></code></pre></div><p>完成後，使用以下命令使其可執行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x ~/.config/scripts/spotify.py</span></span></code></pre></div><p>現在，打開 I3blocks 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>然後粘貼以下內容（建議將其粘貼到塊的開頭）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[spotify]</span></span>
<span class="line"><span>label=</span></span>
<span class="line"><span>command=/home/$USER/.config/scripts/spotify.py</span></span>
<span class="line"><span>color=#81b71a</span></span>
<span class="line"><span>interval=5</span></span></code></pre></div><p>保存更改，退出配置文件，並重新啓動 i3。</p><p>添加了我提到的塊後，狀態欄將如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/blocks-i3.jpg" alt="在 i3 窗口管理器中定製 i3blocks "></p><p>你可以查看我的主屏幕，其中包含這些塊（點擊下方的圖片查看）。</p><p><img src="https://itsfoss.com/content/images/2023/04/Customize-the-I3blocks-in-I3-window-manager.png" alt="在 i3 窗口管理器中定製 i3blocks "></p><blockquote><p>📋 如果你對那些默認塊（文檔和問候語）的位置感到困惑，我用了幾個註釋將它們禁用以實現所示的外觀！</p></blockquote><h3 id="在-linux-中使用-i3gaps" tabindex="-1">在 Linux 中使用 i3gaps <a class="header-anchor" href="#在-linux-中使用-i3gaps" aria-label="Permalink to “在 Linux 中使用 i3gaps”">​</a></h3><p>如果你想在窗口之間添加間隙，可以使用 <code>i3gaps</code>。在顏色方案之後，<code>i3gaps</code> 是這個指南中最關鍵的元素。</p><p>要使用間隙，你必須對 i3 配置文件進行一些更改。</p><p>打開 i3 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>轉到文件的末尾，並粘貼以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># default gaps</span></span>
<span class="line"><span>gaps inner 15</span></span>
<span class="line"><span>gaps outer 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span># gaps</span></span>
<span class="line"><span>set $mode_gaps Gaps: (o)uter, (i)nner, (h)orizontal, (v)ertical, (t)op, (r)ight, (b)ottom, (l)eft</span></span>
<span class="line"><span>set $mode_gaps_outer Outer Gaps: +|-|0 (local), Shift + +|-|0 (global)</span></span>
<span class="line"><span>set $mode_gaps_inner Inner Gaps: +|-|0 (local), Shift + +|-|0 (global)</span></span>
<span class="line"><span>set $mode_gaps_horiz Horizontal Gaps: +|-|0 (local), Shift + +|-|0 (global)</span></span>
<span class="line"><span>set $mode_gaps_verti Vertical Gaps: +|-|0 (local), Shift + +|-|0 (global)</span></span>
<span class="line"><span>set $mode_gaps_top Top Gaps: +|-|0 (local), Shift + +|-|0 (global)</span></span>
<span class="line"><span>set $mode_gaps_right Right Gaps: +|-|0 (local), Shift + +|-|0 (global)</span></span>
<span class="line"><span>set $mode_gaps_bottom Bottom Gaps: +|-|0 (local), Shift + +|-|0 (global)</span></span>
<span class="line"><span>set $mode_gaps_left Left Gaps: +|-|0 (local), Shift + +|-|0 (global)</span></span>
<span class="line"><span>bindsym $mod+Shift+g mode &quot;$mode_gaps&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mode &quot;$mode_gaps&quot; {</span></span>
<span class="line"><span>        bindsym o      mode &quot;$mode_gaps_outer&quot;</span></span>
<span class="line"><span>        bindsym i      mode &quot;$mode_gaps_inner&quot;</span></span>
<span class="line"><span>        bindsym h      mode &quot;$mode_gaps_horiz&quot;</span></span>
<span class="line"><span>        bindsym v      mode &quot;$mode_gaps_verti&quot;</span></span>
<span class="line"><span>        bindsym t      mode &quot;$mode_gaps_top&quot;</span></span>
<span class="line"><span>        bindsym r      mode &quot;$mode_gaps_right&quot;</span></span>
<span class="line"><span>        bindsym b      mode &quot;$mode_gaps_bottom&quot;</span></span>
<span class="line"><span>        bindsym l      mode &quot;$mode_gaps_left&quot;</span></span>
<span class="line"><span>        bindsym Return mode &quot;$mode_gaps&quot;</span></span>
<span class="line"><span>        bindsym Escape mode &quot;default&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mode &quot;$mode_gaps_outer&quot; {</span></span>
<span class="line"><span>        bindsym plus  gaps outer current plus 5</span></span>
<span class="line"><span>        bindsym minus gaps outer current minus 5</span></span>
<span class="line"><span>        bindsym 0     gaps outer current set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Shift+plus  gaps outer all plus 5</span></span>
<span class="line"><span>        bindsym Shift+minus gaps outer all minus 5</span></span>
<span class="line"><span>        bindsym Shift+0     gaps outer all set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Return mode &quot;$mode_gaps&quot;</span></span>
<span class="line"><span>        bindsym Escape mode &quot;default&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>mode &quot;$mode_gaps_inner&quot; {</span></span>
<span class="line"><span>        bindsym plus  gaps inner current plus 5</span></span>
<span class="line"><span>        bindsym minus gaps inner current minus 5</span></span>
<span class="line"><span>        bindsym 0     gaps inner current set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Shift+plus  gaps inner all plus 5</span></span>
<span class="line"><span>        bindsym Shift+minus gaps inner all minus 5</span></span>
<span class="line"><span>        bindsym Shift+0     gaps inner all set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Return mode &quot;$mode_gaps&quot;</span></span>
<span class="line"><span>        bindsym Escape mode &quot;default&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>mode &quot;$mode_gaps_horiz&quot; {</span></span>
<span class="line"><span>        bindsym plus  gaps horizontal current plus 5</span></span>
<span class="line"><span>        bindsym minus gaps horizontal current minus 5</span></span>
<span class="line"><span>        bindsym 0     gaps horizontal current set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Shift+plus  gaps horizontal all plus 5</span></span>
<span class="line"><span>        bindsym Shift+minus gaps horizontal all minus 5</span></span>
<span class="line"><span>        bindsym Shift+0     gaps horizontal all set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Return mode &quot;$mode_gaps&quot;</span></span>
<span class="line"><span>        bindsym Escape mode &quot;default&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>mode &quot;$mode_gaps_verti&quot; {</span></span>
<span class="line"><span>        bindsym plus  gaps vertical current plus 5</span></span>
<span class="line"><span>        bindsym minus gaps vertical current minus 5</span></span>
<span class="line"><span>        bindsym 0     gaps vertical current set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Shift+plus  gaps vertical all plus 5</span></span>
<span class="line"><span>        bindsym Shift+minus gaps vertical all minus 5</span></span>
<span class="line"><span>        bindsym Shift+0     gaps vertical all set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Return mode &quot;$mode_gaps&quot;</span></span>
<span class="line"><span>        bindsym Escape mode &quot;default&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>mode &quot;$mode_gaps_top&quot; {</span></span>
<span class="line"><span>        bindsym plus  gaps top current plus 5</span></span>
<span class="line"><span>        bindsym minus gaps top current minus 5</span></span>
<span class="line"><span>        bindsym 0     gaps top current set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Shift+plus  gaps top all plus 5</span></span>
<span class="line"><span>        bindsym Shift+minus gaps top all minus 5</span></span>
<span class="line"><span>        bindsym Shift+0     gaps top all set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Return mode &quot;$mode_gaps&quot;</span></span>
<span class="line"><span>        bindsym Escape mode &quot;default&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>mode &quot;$mode_gaps_right&quot; {</span></span>
<span class="line"><span>        bindsym plus  gaps right current plus 5</span></span>
<span class="line"><span>        bindsym minus gaps right current minus 5</span></span>
<span class="line"><span>        bindsym 0     gaps right current set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Shift+plus  gaps right all plus 5</span></span>
<span class="line"><span>        bindsym Shift+minus gaps right all minus 5</span></span>
<span class="line"><span>        bindsym Shift+0     gaps right all set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Return mode &quot;$mode_gaps&quot;</span></span>
<span class="line"><span>        bindsym Escape mode &quot;default&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>mode &quot;$mode_gaps_bottom&quot; {</span></span>
<span class="line"><span>        bindsym plus  gaps bottom current plus 5</span></span>
<span class="line"><span>        bindsym minus gaps bottom current minus 5</span></span>
<span class="line"><span>        bindsym 0     gaps bottom current set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Shift+plus  gaps bottom all plus 5</span></span>
<span class="line"><span>        bindsym Shift+minus gaps bottom all minus 5</span></span>
<span class="line"><span>        bindsym Shift+0     gaps bottom all set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Return mode &quot;$mode_gaps&quot;</span></span>
<span class="line"><span>        bindsym Escape mode &quot;default&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>mode &quot;$mode_gaps_left&quot; {</span></span>
<span class="line"><span>        bindsym plus  gaps left current plus 5</span></span>
<span class="line"><span>        bindsym minus gaps left current minus 5</span></span>
<span class="line"><span>        bindsym 0     gaps left current set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Shift+plus  gaps left all plus 5</span></span>
<span class="line"><span>        bindsym Shift+minus gaps left all minus 5</span></span>
<span class="line"><span>        bindsym Shift+0     gaps left all set 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        bindsym Return mode &quot;$mode_gaps&quot;</span></span>
<span class="line"><span>        bindsym Escape mode &quot;default&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>保存更改並退出配置文件。</p><p>使用 <code>Mod + Shift + r</code> 重新加載 i3，並會看到窗口之間的間隙：</p><p><img src="https://itsfoss.com/content/images/2023/04/use-i3gaps-in-i3-window-manager.png" alt="在 i3 窗口管理器中使用 i3gaps"></p><p>但是，如果你想調整間隙的大小怎麼辦？這非常簡單，只需要簡單的步驟即可完成：</p><ul><li>按下 <code>Mod + Shift + g</code> 進入間隙模式</li><li>使用給定的選項選擇要更改的內容</li><li>使用 <code>+</code> 或 <code>-</code> 增加/減小間隙</li><li>完成後，按 <code>Esc</code> 鍵退出間隙模式</li></ul><p>就是這樣！</p><h3 id="我們忘記自定義終端了嗎" tabindex="-1">我們忘記自定義終端了嗎？ <a class="header-anchor" href="#我們忘記自定義終端了嗎" aria-label="Permalink to “我們忘記自定義終端了嗎？”">​</a></h3>`,30)),n("p",null,[s[69]||(s[69]=a("不用擔心；你可以 ",-1)),i(p,{href:"https://itsfoss.com/zsh-ubuntu/"},{default:e(()=>[...s[67]||(s[67]=[a("切換到 Zsh",-1)])]),_:1}),s[70]||(s[70]=a("，這是一個不同的 shell，使終端看起來與眾不同，或者探索一些鮮為人知的 ",-1)),i(p,{href:"https://itsfoss.com/shells-linux/"},{default:e(()=>[...s[68]||(s[68]=[a("Linux Shell",-1)])]),_:1}),s[71]||(s[71]=a("。",-1))]),n("p",null,[s[74]||(s[74]=a("無論如何，你都可以 ",-1)),i(p,{href:"https://itsfoss.com/customize-linux-terminal/"},{default:e(()=>[...s[72]||(s[72]=[a("自定義現有終端",-1)])]),_:1}),s[75]||(s[75]=a("，或選擇不同的 ",-1)),i(p,{href:"https://itsfoss.com/linux-terminal-emulators/"},{default:e(()=>[...s[73]||(s[73]=[a("終端模擬器",-1)])]),_:1}),s[76]||(s[76]=a("。",-1))]),s[111]||(s[111]=n("p",null,[n("strong",null,"我希望你不再畏難如何美化系統！"),a(" 😎")],-1)),s[112]||(s[112]=n("p",null,[n("em",null,"如果你有任何建議或想展示你的配置，請在評論部分留言。")],-1)),s[113]||(s[113]=n("p",null,[n("em",null,"（題圖：MJ/2874542d-6a8f-4b27-8e65-477389a0dcca）")],-1)),s[114]||(s[114]=n("hr",null,null,-1)),n("p",null,[s[78]||(s[78]=a("via: ",-1)),i(p,{href:"https://itsfoss.com/i3-customization/"},{default:e(()=>[...s[77]||(s[77]=[a("https://itsfoss.com/i3-customization/",-1)])]),_:1})]),n("p",null,[s[82]||(s[82]=a("作者：",-1)),i(p,{href:"https://itsfoss.com/author/sagar/"},{default:e(()=>[...s[79]||(s[79]=[a("Sagar Sharma",-1)])]),_:1}),s[83]||(s[83]=a(" 選題：",-1)),i(p,{href:"https://github.com/lkxed/"},{default:e(()=>[...s[80]||(s[80]=[a("lkxed",-1)])]),_:1}),s[84]||(s[84]=a(" 譯者：ChatGPT 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[81]||(s[81]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[87]||(s[87]=a("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[85]||(s[85]=[a("LCTT",-1)])]),_:1}),s[88]||(s[88]=a(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[86]||(s[86]=[a("Linux中國",-1)])]),_:1}),s[89]||(s[89]=a(" 榮譽推出",-1))])])}const C=l(r,[["render",g]]);export{x as __pageData,C as default};
