import{_ as l,a0 as o,w as d,s as c,ao as t,I as n,x as a,a1 as i,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"i3 窗口管理器终极定制指南 | LCTT x X-CMD","titleTemplate":false,"description":"i3 窗口管理器终极定制指南 | LCTT (202306) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"i3 窗口管理器终极定制指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"i3 窗口管理器终极定制指南 | LCTT (202306) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202306/20230425.1 ⭐️⭐️⭐️ The Ultimate Guide to i3 Customization in Linux","title":"i3 窗口管理器终极定制指南","tag":"202306","desc":""},"relativePath":"202306/20230425.1 ⭐️⭐️⭐️ The Ultimate Guide to i3 Customization in Linux.md","filePath":"[post].md"}'),r={name:"202306/20230425.1 ⭐️⭐️⭐️ The Ultimate Guide to i3 Customization in Linux.md"};function g(u,s,h,b,k,f){const p=o("Link");return d(),c("div",null,[s[90]||(s[90]=t('<h1 id="i3-窗口管理器终极定制指南" tabindex="-1">i3 窗口管理器终极定制指南 <a class="header-anchor" href="#i3-窗口管理器终极定制指南" aria-label="Permalink to “i3 窗口管理器终极定制指南”">​</a></h1><blockquote><p>在这份超详细的指南中了解如何通过 i3 窗口管理器来自定义系统的外观和体验。</p></blockquote><p>你可能在网上（尤其是通过 <code>r/unixporn</code> 子区）看到过很多炫酷的截图，用户可以根据个人喜好自定义他们的桌面并与大家分享。</p><p>这是因为 Linux 允许你自定义桌面体验的方方面面。</p><p>而结果？就是比任何 Mac 或 Windows 系统<strong>更具视觉和感知效果</strong>。</p><p>来看一下这个 😌</p><p><img src="https://itsfoss.com/content/images/2023/04/linux-mint-i3.jpg" alt=""></p><p><strong>看起来像一个 Linux Mint 系统吗？</strong> 😲</p><p>但是你怎样才能做到这样呢？<strong>自定义你的 Linux 桌面外观是很困难的</strong>。</p><p>答案就在于 <strong>窗口管理器</strong>。如果你能配置好窗口管理器，你就能自定义外观。</p>',10)),n("p",null,[s[1]||(s[1]=a("在本指南中，我将引导你完成使用 ",-1)),s[2]||(s[2]=n("strong",null,"i3 窗口管理器",-1)),s[3]||(s[3]=a(" 进行基本配置。它是 ",-1)),i(p,{href:"https://itsfoss.com/best-window-managers/"},{default:e(()=>[...s[0]||(s[0]=[a("Linux 上最好的窗口管理器之一",-1)])]),_:1}),s[4]||(s[4]=a("。",-1))]),n("blockquote",null,[n("p",null,[s[6]||(s[6]=a("💡 “",-1)),s[7]||(s[7]=n("ruby",null,[a("加料"),n("rt",null,"Rice")],-1)),s[8]||(s[8]=a("” 是一个常用的词汇，用来指代在桌面上进行视觉改进和自定义。",-1)),s[9]||(s[9]=n("strong",null,"引用自",-1)),s[10]||(s[10]=a()),i(p,{href:"https://www.reddit.com/r/unixporn"},{default:e(()=>[...s[5]||(s[5]=[a("/r/unixporn",-1)])]),_:1}),s[11]||(s[11]=a(" （LCTT 译注：“加料”一词来自于购买便宜的亚洲汽车，并给它们安装售后零件，以让它更好地类似于赛车。）",-1))])]),s[91]||(s[91]=n("p",null,"在遵循本指南之前，你需要了解以下内容：",-1)),s[92]||(s[92]=n("ul",null,[n("li",null,[a("在本指南中，"),n("strong",null,"我将使用 Arch Linux"),a(" 来演示步骤，但你可以使用你喜欢的任何发行版，结果也是一样的。")]),n("li",null,[a("请记住，本指南是 "),n("strong",null,"对 i3 进行“加料”定制的基础"),a("。")])],-1)),s[93]||(s[93]=n("p",null,"在按照本指南进行操作后，你应该得到以下预期结果：",-1)),s[94]||(s[94]=n("p",null,[n("img",{src:"https://itsfoss.com/content/images/2023/04/How-to-configure-i3-window-manager-with-i3blocks-and-i3gaps-in-linux.png",alt:"如何在 Linux 中配置 i3 窗口管理器、i3blocks 和 i3gaps"})],-1)),n("blockquote",null,[n("p",null,[s[13]||(s[13]=a("📥 为了节省你的时间，我已经在 ",-1)),i(p,{href:"https://github.com/itsfoss/text-files/tree/master/i3_config_files"},{default:e(()=>[...s[12]||(s[12]=[a("GitHub",-1)])]),_:1}),s[14]||(s[14]=a(" 上上传了与本文相关的所有 i3 配置文件，你可以通过这些文件实现我们在本文中所期望的最终外观。",-1))])]),n("blockquote",null,[n("p",null,[n("strong",null,[i(p,{href:"https://github.com/itsfoss/text-files/tree/master/i3_config_files"},{default:e(()=>[...s[15]||(s[15]=[a("下载 i3 配置文件",-1)])]),_:1})])])]),s[95]||(s[95]=t('<p><strong>首先</strong>，让我们开始安装 <strong>i3 窗口管理器</strong>。</p><h3 id="在-linux-上安装-i3-窗口管理器" tabindex="-1">在 Linux 上安装 i3 窗口管理器 <a class="header-anchor" href="#在-linux-上安装-i3-窗口管理器" aria-label="Permalink to “在 Linux 上安装 i3 窗口管理器”">​</a></h3><p>基于 Ubuntu/Debian：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install xorg lightdm lightdm-gtk-greeter i3-wm i3lock i3status i3blocks dmenu terminator</span></span></code></pre></div><p>Arch Linux：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S xorg lightdm lightdm-gtk-greeter i3-wm i3lock i3status i3blocks dmenu terminator</span></span></code></pre></div><p>当你完成安装后，使用以下命令启用 lightdm 服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo systemctl enable lightdm.service</span></span></code></pre></div><p>然后启动 lightdm 服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo systemctl start lightdm.service</span></span></code></pre></div><p>这将启动 lightdm 登录界面，并要求你输入用户名密码。</p><p>如果你安装了多个桌面环境，你可以从选择菜单中选择 i3：</p><p><img src="https://itsfoss.com/content/images/2023/04/use-lightdm-to-use-the-i3-wm-in-arch.png" alt="在 Arch Linux 上使用 lightdm 使用 i3 窗口管理器"></p><p>当首次登录 i3 时，它会询问你是否要创建一个 i3 配置文件。</p><p>按下回车键创建一个新的 i3 配置文件：</p><p><img src="https://itsfoss.com/content/images/2023/04/create-configuration-file-for-i3.png" alt="生成 i3 配置文件"></p><p>接下来，它会询问你选择 <code>Win</code> 或 <code>Alt</code> 键哪个作为修饰键（<code>mod</code>）。</p><p>我建议你选择 <code>Win</code>（或者 <code>Super</code> 键），因为大多数用户已经习惯将其用作快捷键：</p><p><img src="https://itsfoss.com/content/images/2023/04/choose-the-mod-key-in-i3.png" alt=""></p><p>现在你可以开始使用 i3 窗口管理器了。</p><p>但在我们开始定制之前，让我先介绍一下你如何使用 i3。</p><h3 id="i3-窗口管理器的按键绑定" tabindex="-1">i3 窗口管理器的按键绑定 <a class="header-anchor" href="#i3-窗口管理器的按键绑定" aria-label="Permalink to “i3 窗口管理器的按键绑定”">​</a></h3><p>让我们从基础知识开始。</p><p>窗口管理器的基本功能是将多个窗口水平和垂直地组合在一起，这样你就可以同时监视多个进程。</p><p>结果是这样的：</p><p><img src="https://itsfoss.com/content/images/2023/04/Using-I3-on-arch-linux.png" alt="在 Arch Linux 上使用 i3"></p><p>你可以使用以下按键绑定执行更多操作：</p><div class="table-wrap"><table><thead><tr><th style="text-align:left;">按键绑定</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Mod + Enter</code></td><td style="text-align:left;">打开终端。</td></tr><tr><td style="text-align:left;"><code>Mod + ←</code></td><td style="text-align:left;">切换到左侧窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + →</code></td><td style="text-align:left;">切换到右侧窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + ↑</code></td><td style="text-align:left;">切换到上方窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + ↓</code></td><td style="text-align:left;">切换到下方窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + ←</code></td><td style="text-align:left;">将窗口移动到左侧。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + →</code></td><td style="text-align:left;">将窗口移动到右侧。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + ↑</code></td><td style="text-align:left;">将窗口移动到上方。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + ↓</code></td><td style="text-align:left;">将窗口移动到下方。</td></tr><tr><td style="text-align:left;"><code>Mod + f</code></td><td style="text-align:left;">将焦点窗口切换到全屏模式。</td></tr><tr><td style="text-align:left;"><code>Mod + v</code></td><td style="text-align:left;">下一个窗口将垂直放置。</td></tr><tr><td style="text-align:left;"><code>Mod + h</code></td><td style="text-align:left;">下一个窗口将水平放置。</td></tr><tr><td style="text-align:left;"><code>Mod + s</code></td><td style="text-align:left;">启用堆叠式窗口布局。</td></tr><tr><td style="text-align:left;"><code>Mod + w</code></td><td style="text-align:left;">启用选项卡式窗口布局。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + Space</code></td><td style="text-align:left;">启用浮动窗口（针对焦点窗口）。</td></tr><tr><td style="text-align:left;"><code>Mod + 鼠标左键单击</code></td><td style="text-align:left;">使用鼠标拖动整个窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + 0-9</code></td><td style="text-align:left;">切换到另一个工作区。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + 0-9</code></td><td style="text-align:left;">将窗口移动到另一个工作区。</td></tr><tr><td style="text-align:left;"><code>Mod + d</code></td><td style="text-align:left;">打开应用程序启动器（D 菜单）。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + q</code></td><td style="text-align:left;">关闭焦点窗口。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + c</code></td><td style="text-align:left;">重新加载 i3 配置文件。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + r</code></td><td style="text-align:left;">重启 i3 窗口管理器。</td></tr><tr><td style="text-align:left;"><code>Mod + Shift + e</code></td><td style="text-align:left;">退出 i3 窗口管理器。</td></tr></tbody></table></div><p>我知道按键绑定很多，但如果你每天练习它们，你很快就会习惯。</p><p>如果你想知道，你可以根据需要更改按键绑定，后面的指南中我会分享如何做到这一点。</p><p>现在，让我们来看看配置部分。</p><h3 id="在-arch-linux-中启用-aur" tabindex="-1">在 Arch Linux 中启用 AUR <a class="header-anchor" href="#在-arch-linux-中启用-aur" aria-label="Permalink to “在 Arch Linux 中启用 AUR”">​</a></h3><p>如果你刚刚安装了 Arch Linux，可能还没有启用 AUR。</p><p>这意味着你错过了 Arch Linux 最重要的特性。</p>',34)),n("p",null,[s[17]||(s[17]=a("要 ",-1)),i(p,{href:"https://itsfoss.com/aur-arch-linux/"},{default:e(()=>[...s[16]||(s[16]=[a("启用 AUR",-1)])]),_:1}),s[18]||(s[18]=a("，你需要使用 AUR 包管理器。在这里，我将使用 ",-1)),s[19]||(s[19]=n("code",null,"yay",-1)),s[20]||(s[20]=a("。",-1))]),s[96]||(s[96]=t('<p>首先，安装 <code>git</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S git</span></span></code></pre></div><p>现在，克隆 <code>yay</code> 存储库并切换到 <code>yay</code> 目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>git clone https://aur.archlinux.org/yay-git.git &amp;&amp; cd yay</span></span></code></pre></div><p>最后，构建包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>makepkg -si</span></span></code></pre></div>',6)),n("p",null,[s[22]||(s[22]=a("还有其他一些 ",-1)),i(p,{href:"https://itsfoss.com/best-aur-helpers/"},{default:e(()=>[...s[21]||(s[21]=[a("AUR 包管理器",-1)])]),_:1}),s[23]||(s[23]=a("，比如 Paru，如果你想使用除 ",-1)),s[24]||(s[24]=n("code",null,"yay",-1)),s[25]||(s[25]=a(" 之外的其他工具，你可以继续或者探索其他选项。",-1))]),s[97]||(s[97]=t('<h3 id="更改-i3-窗口管理器的分辨率" tabindex="-1">更改 i3 窗口管理器的分辨率 <a class="header-anchor" href="#更改-i3-窗口管理器的分辨率" aria-label="Permalink to “更改 i3 窗口管理器的分辨率”">​</a></h3><p>如果你使用虚拟机运行窗口管理器，可能会遇到问题，尤其是显示分辨率可能被锁定在 <code>1024x768</code> 上，就像我一样。</p><p>因此，你需要执行以下命令，指定所需的显示分辨率：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>xrandr --output [显示名称] --mode [分辨率]</span></span></code></pre></div><p>要找到已连接显示器的名称，你需要使用以下形式的 <code>xrandr</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>xrandr | grep -w &#39;connected&#39;</span></span></code></pre></div><p><img src="https://itsfoss.com/content/images/2023/04/find-connected-display-in-I3.png" alt="在 i3 中查找已连接显示器"></p><p>在我的情况下，显示名称是 <code>Virtual-1</code>。</p><p>因此，如果我想将分辨率更改为 <code>1920*1080</code>，我需要执行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>xrandr --output Virtual-1 --mode 1920x1080</span></span></code></pre></div><p><strong>但这只是暂时生效</strong>。要使其永久生效，你需要在 i3 配置文件中进行更改。</p><p>首先，打开配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div>',13)),n("p",null,[s[27]||(s[27]=a("通过按下 ",-1)),s[28]||(s[28]=n("code",null,"Alt + /",-1)),s[29]||(s[29]=a(" 来在 ",-1)),s[30]||(s[30]=n("code",null,"nano",-1)),s[31]||(s[31]=a(" 中 ",-1)),i(p,{href:"https://linuxhandbook.com/beginning-end-file-nano/"},{default:e(()=>[...s[26]||(s[26]=[a("跳到文件末尾",-1)])]),_:1}),s[32]||(s[32]=a("，并使用以下语法来永久更改显示分辨率：",-1))]),s[98]||(s[98]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 显示分辨率</span></span>
<span class="line"><span>exec_always xrandr --output [显示名称] --mode [分辨率]</span></span></code></pre></div><p>结果应该是这样的：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-display-resolution-in-I3-permanently.png" alt="在 i3 中永久更改显示分辨率"></p>`,3)),n("p",null,[s[34]||(s[34]=a("完成后，",-1)),i(p,{href:"https://linuxhandbook.com/nano-save-exit/"},{default:e(()=>[...s[33]||(s[33]=[a("保存更改并退出 nano",-1)])]),_:1}),s[35]||(s[35]=a(" 文本编辑器。",-1))]),s[99]||(s[99]=t(`<p>现在，使用 <code>Mod + Shift + r</code> 重新启动 i3 窗口管理器，以使你对配置文件所做的更改生效！</p><h3 id="在-i3-窗口管理器中更改壁纸" tabindex="-1">在 i3 窗口管理器中更改壁纸 <a class="header-anchor" href="#在-i3-窗口管理器中更改壁纸" aria-label="Permalink to “在 i3 窗口管理器中更改壁纸”">​</a></h3><p>默认情况下，i3 的外观比较陈旧，你可能想切换回之前的桌面环境。</p><p>但是通过更改壁纸，你可以改变整个系统的氛围。</p><p>在 i3 中有多种方式可以更改壁纸，但在这里，我将向你展示如何使用 <code>feh</code> 实用工具。</p><p>首先，让我们从安装开始：</p><p>对于基于 <strong>Arch 的发行版</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S feh</span></span></code></pre></div><p>对于 <strong>Ubuntu/Debian</strong> 系的发行版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install feh</span></span></code></pre></div><p>安装完成后，你可以从互联网上下载你喜欢的壁纸。接下来，<strong>打开 i3 配置文件</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>跳到文件的末尾，使用如下所示的 <code>feh</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 显示壁纸</span></span>
<span class="line"><span>exec_always feh --bg-fill /path/to/wallpaper</span></span></code></pre></div><p>在我的情况下，壁纸位于 <code>Downloads</code> 目录中，所以我的命令如下：</p><p><img src="https://itsfoss.com/content/images/2023/04/Use-feh-utility-to-change-background-in-I3-window-manager.png" alt="使用 feh 实用工具在 I3 窗口管理器中更改背景"></p><p>保存更改并退出 <code>nano</code> 文本编辑器。</p><p>为了使配置文件的更改生效，使用 <code>Mod + Shift + r</code> 重新启动 i3 窗口管理器。</p><p>我的效果如下：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-wallpaper-in-I3-window-manager.png" alt="在 i3 窗口管理器中更改壁纸"></p><h3 id="自定义-i3-锁屏界面" tabindex="-1">自定义 i3 锁屏界面 <a class="header-anchor" href="#自定义-i3-锁屏界面" aria-label="Permalink to “自定义 i3 锁屏界面”">​</a></h3><p>默认情况下，如果你想锁定系统，你需要执行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>i3lock</span></span></code></pre></div><p>锁屏界面如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/how-to-lock-the-I3-window-manager.gif" alt="锁定 i3 窗口管理器"></p><p>下面，我将向你展示：</p><ul><li>如何创建自定义快捷方式以锁定 i3 会话</li><li>如何更改锁屏界面的壁纸</li></ul><p>为了使锁屏界面更加美观，你需要使用 <code>i3lock-color</code> 包。</p><p>但首先，你需要移除现有的 <code>i3lock</code>，因为它会与 <code>i3lock-color</code> 冲突：</p><p>在 Arch Linux 上移除它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -R i3lock</span></span></code></pre></div><p>对于 Ubuntu/Debian 用户：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt remove i3lock</span></span></code></pre></div><p>完成后，你可以使用 AUR 包管理器安装 <code>i3lock-color</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yay i3lock-color</span></span></code></pre></div>`,35)),n("p",null,[s[37]||(s[37]=a("如果你使用的是基于 Ubuntu 的系统，你需要从头编译它。你可以在他们的 GitHub 页面上找到 ",-1)),i(p,{href:"https://github.com/Raymo111/i3lock-color"},{default:e(()=>[...s[36]||(s[36]=[a("详细的说明",-1)])]),_:1}),s[38]||(s[38]=a("。",-1))]),s[100]||(s[100]=t(`<p>安装完成后，让我们创建一个新目录并创建一个新文件来存储锁屏界面的配置：</p><p>安装好 <code>i3lock-color</code> 后，你可以创建一个新目录并创建一个新文件来存储锁屏界面的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir ~/.config/scripts &amp;&amp; nano ~/.config/scripts/lock</span></span></code></pre></div><p>将以下文件内容粘贴到文件中，定义锁屏界面的样式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/sh</span></span>
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
<span class="line"><span>--keylayout 1                \\</span></span></code></pre></div><p>保存更改并退出文本编辑器。</p><blockquote><p>📋 在网上可以找到各种不同的 i3 锁屏样式的 bash 脚本。这只是一个示例，对于大多数情况来说是一个较为简单的选项。</p></blockquote>`,7)),n("p",null,[s[40]||(s[40]=a("现在，使用 ",-1)),i(p,{href:"https://linuxhandbook.com/chmod-command/"},{default:e(()=>[...s[39]||(s[39]=[a("chmod 命令",-1)])]),_:1}),s[41]||(s[41]=a(" 将该文件设置为可执行文件：",-1))]),s[101]||(s[101]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x .config/scripts/lock</span></span></code></pre></div><p>接下来，你需要对配置文件进行一些更改，以添加该配置文件的路径以使其生效。</p><p>此外，我将向你展示如何使用自定义键盘快捷键锁定屏幕。</p><p>首先，打开配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>使用 <code>Alt + /</code> 跳至行尾并粘贴以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 锁屏快捷键</span></span>
<span class="line"><span>bindsym $mod+x exec /home/$USER/.config/scripts/lock</span></span></code></pre></div><p>在上面的示例中，我将 <code>mod + x</code> 作为锁定屏幕的快捷键，你可以选择任何你喜欢的快捷键。</p><p>最后的配置文件将如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/how-to-use-i3lock-color-in-arch-linux-1.png" alt="如何在 Arch Linux 中使用 i3lock-color"></p><p>相当不错，不是吗？</p><h3 id="在-i3-窗口管理器中更改主题和图标" tabindex="-1">在 i3 窗口管理器中更改主题和图标 <a class="header-anchor" href="#在-i3-窗口管理器中更改主题和图标" aria-label="Permalink to “在 i3 窗口管理器中更改主题和图标”">​</a></h3><p>我知道你可能会想到这个问题。</p><p>你为什么需要图标呢？你并不仅仅使用窗口管理器来使用命令行工具。</p><p>有时候，使用图形界面更加方便，比如使用文件管理器。所以，在处理这些工具时，你希望界面看起来更好看？</p><p>因此，在本部分中，我将向你展示：</p><ul><li>如何在 i3 中更改主题</li><li>如何在 i3 中更改图标</li></ul><p>让我们从安装主题开始。</p><p>在这里，我将使用 <code>materia-gtk-theme</code> 和 <code>papirus</code> 图标，但你可以使用任何你喜欢的主题和图标。</p><p>在 Arch 中安装主题，使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S materia-gtk-theme papirus-icon-theme</span></span></code></pre></div><p>在 Ubuntu/Debian 系统中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install materia-gtk-theme papirus-icon-theme</span></span></code></pre></div><p>但仅仅安装还不能完成任务。<strong>你需要像使用 GNOME “<ruby>调整<rt>Tweaks</rt></ruby>” 应用更改主题一样来应用主题。</strong></p><p><strong>在 i3 中，你可以使用 <code>lxappearance</code> 工具</strong> 来更改主题和图标。</p><p>在 Arch 中安装 <code>lxappearance</code>，使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S lxappearance</span></span></code></pre></div><p>在 Ubuntu/Debian 系统中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install lxappearance</span></span></code></pre></div><p>安装完成后，使用 <code>Mod + d</code> 启动 D 菜单，然后输入 <code>lxappearance</code>，并在第一个结果上按回车键。</p><p>在这里，选择你喜欢的主题。我这里选择 <code>Materia-dark</code>。</p><p>选择主题后，点击应用按钮以应用更改：</p><p><img src="https://itsfoss.com/content/images/2023/04/Change-theme-in-I3-window-manager-using-lxappearance.png" alt=""></p><p>同样地，要更改图标，选择 “<ruby>图标主题<rt>Icon Theme</rt></ruby>”，选择图标主题，然后点击应用按钮：</p><p><img src="https://itsfoss.com/content/images/2023/04/Change-icons-in-I3-window-manager-using-lxappearance.png" alt="使用 lxappearance 更改 i3 窗口管理器中的图标"></p><p>应用主题和图标后，我的文件管理器如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-theme-and-icon-in-i3-window-manager.png" alt="在 i3 窗口管理器中更改主题和图标"></p><h3 id="在-i3-窗口管理器中为工作区设置图标" tabindex="-1">在 i3 窗口管理器中为工作区设置图标 <a class="header-anchor" href="#在-i3-窗口管理器中为工作区设置图标" aria-label="Permalink to “在 i3 窗口管理器中为工作区设置图标”">​</a></h3><p>默认情况下，工作区仅由数字表示，这并不是你想要使用工作区的最理想方式。</p><p>因此，在本部分中，我将引导你如何使用合适的图标更改工作区的名称。</p><p>为了在配置文件中使用图标，首先你需要安装名为 <code>Awesome</code> 的新字体：</p><p>对于基于 Arch 的发行版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S ttf-font-awesome</span></span></code></pre></div><p>对于 Ubuntu/Debian 系统：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install fonts-font-awesome</span></span></code></pre></div><p>安装完成后，打开 i3 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在这个配置文件中，找到工作区的部分，你将会看到为每个工作区给出的变量：</p><p><img src="https://itsfoss.com/content/images/2023/04/workspace-variables-in-I3-config-file.png" alt="在 i3 配置文件中的工作区变量"></p><p>在这个部分，你需要用你想要的名称替换给出的工作区数字。</p><p>我将把第一个工作区命名为 “programs”，因为<strong>在本教程的后面部分，我将展示如何将特定的应用程序分配到特定的工作区。</strong></p><p>我主要使用前 5 个工作区，所以我会相应地命名它们：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 定义默认工作区的名称，稍后我们将在其中配置键绑定。</span></span>
<span class="line"><span># 我们使用变量来避免在多个地方重复使用名称。</span></span>
<span class="line"><span>set $ws1 &quot;1: Terminal&quot;</span></span>
<span class="line"><span>set $ws2 &quot;2: Firefox&quot;</span></span>
<span class="line"><span>set $ws3 &quot;3: VMWare&quot;</span></span>
<span class="line"><span>set $ws4 &quot;4: Spotify&quot;</span></span>
<span class="line"><span>set $ws5 &quot;5: Shutter&quot;</span></span>
<span class="line"><span>set $ws6 &quot;6&quot;</span></span>
<span class="line"><span>set $ws7 &quot;7&quot;</span></span>
<span class="line"><span>set $ws8 &quot;8&quot;</span></span>
<span class="line"><span>set $ws9 &quot;9&quot;</span></span>
<span class="line"><span>set $ws10 &quot;10&quot;</span></span></code></pre></div><p>现在让我们为配置文件中提到的每个应用程序添加图标。</p>`,54)),n("p",null,[s[43]||(s[43]=a("你可以 ",-1)),i(p,{href:"https://fontawesome.com/v5/cheatsheet"},{default:e(()=>[...s[42]||(s[42]=[a("参考 awesome 字体的备忘单",-1)])]),_:1}),s[44]||(s[44]=a(" 来找到合适的图标。",-1))]),s[102]||(s[102]=t(`<p>将图标复制粘贴到名称前面：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 定义默认工作区的名称，稍后我们将在其中配置键绑定。</span></span>
<span class="line"><span># 我们使用变量来避免在多个地方重复使用名称。</span></span>
<span class="line"><span>set $ws1 &quot;1:  Terminal&quot;</span></span>
<span class="line"><span>set $ws2 &quot;2:  Firefox&quot;</span></span>
<span class="line"><span>set $ws3 &quot;3:  VMWare&quot;</span></span>
<span class="line"><span>set $ws4 &quot;4:  Spotify&quot;</span></span>
<span class="line"><span>set $ws5 &quot;5:  Shutter&quot;</span></span>
<span class="line"><span>set $ws6 &quot;6&quot;</span></span>
<span class="line"><span>set $ws7 &quot;7&quot;</span></span>
<span class="line"><span>set $ws8 &quot;8&quot;</span></span>
<span class="line"><span>set $ws9 &quot;9&quot;</span></span>
<span class="line"><span>set $ws10 &quot;10&quot;</span></span></code></pre></div><p>不要担心它看起来可怕！</p><p>完成后，使用 <code>Mod + e</code> 退出 i3，然后再次登录以应用你刚刚所做的更改。</p><p>我的效果如下图所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/workspace-icons.png" alt=""></p><p>字体看起来太小？是时候解决这个问题了！</p><h3 id="在-i3-中更改标题窗口和状态栏的字体" tabindex="-1">在 i3 中更改标题窗口和状态栏的字体 <a class="header-anchor" href="#在-i3-中更改标题窗口和状态栏的字体" aria-label="Permalink to “在 i3 中更改标题窗口和状态栏的字体”">​</a></h3><p>首先，让我们安装新的字体（我将在这里使用 Ubuntu 字体）。</p><p>要在 Arch 上安装 Ubuntu 字体，请执行以下操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S ttf-ubuntu-font-family</span></span></code></pre></div><p>如果你使用的是 Ubuntu，你已经安装了这些字体！</p><p>安装完成后，打开配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在配置文件中，找到 <code>font pango:monospace 8</code> 这一行，这是默认字体。</p><p>找到那行后，添加字体名称和大小，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>font pango:Ubuntu Regular 14</span></span></code></pre></div><p>然后，使用 <code>Mod + Shift + r</code> 重新启动窗口管理器，这样就完成了工作：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-font-of-the-workspace-and-titlebar-in-I3-window-manager.png" alt=""></p><h3 id="在-i3-窗口管理器中分配应用程序到工作区" tabindex="-1">在 i3 窗口管理器中分配应用程序到工作区 <a class="header-anchor" href="#在-i3-窗口管理器中分配应用程序到工作区" aria-label="Permalink to “在 i3 窗口管理器中分配应用程序到工作区”">​</a></h3><p>在给工作区命名之后，你会想要将特定的软件分配到相应的工作区中。</p><p>例如，如果我将第二个工作区命名为 “Firefox”，那么我只想在该工作区中使用 Firefox。</p><p>那么要如何实现呢？</p><p>为了做到这一点，你需要找到每个要分配的应用程序的类名。</p><p><strong>听起来复杂？</strong> 让我告诉你如何做。</p><p>首先，将应用程序和终端并排打开。例如，在这个例子中，我将 Firefox 和终端并排打开：</p><p><img src="https://itsfoss.com/content/images/2023/04/open-application-and-terminal-side-by-side.png" alt="并排打开应用程序和终端"></p><p>现在，在终端中执行 <code>xprop</code> 命令，它会改变鼠标指针的形状：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>xprop</span></span></code></pre></div><p>接下来，将鼠标悬停在应用程序上，并在应用程序窗口内的任何位置单击，如图所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/find-the-class-name-in-i3-window-manager.gif" alt="在 i3 窗口管理器中查找类名"></p><p>类名将在以下行的最后一个字符串中找到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>WM_CLASS(STRING) = &quot;Navigator&quot;, &quot;firefox&quot;</span></span></code></pre></div><p>在我的情况下，Firefox 浏览器的类名将是 <code>firefox</code>。</p><p>对所有你想要分配到工作区的应用程序重复这个过程。</p><p><strong>一旦你知道每个你想要分配到工作区的应用程序的类名，打开配置文件：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>使用 <code>Alt + /</code> 将 <code>nano</code> 定位到文件末尾，并使用以下语法将应用程序分配到工作区：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 分配应用到工作区</span></span>
<span class="line"><span>for_window [class=&quot;类名&quot;] move to workspace $[工作区变量]</span></span></code></pre></div><p>作为参考，下面是我为不同应用程序分配了 4 个工作区后的配置文件示例：</p><p><img src="https://itsfoss.com/content/images/2023/04/Allocate-specific-applications-to-specific-workspaces-in-I3-window-manager.png" alt="将应用分配到工作区"></p><p>现在，无论在哪个工作区打开任何应用程序，它都会自动放置在配置的工作区中。非常方便！ 😊</p><h3 id="在-i3-窗口管理器中让终端变透明" tabindex="-1">在 i3 窗口管理器中让终端变透明 <a class="header-anchor" href="#在-i3-窗口管理器中让终端变透明" aria-label="Permalink to “在 i3 窗口管理器中让终端变透明”">​</a></h3><p>要启用透明效果，你需要安装 <code>picom</code> 合成器并对配置文件进行一些更改。</p><p>让我们从安装开始。</p><p>对于基于 Arch 的发行版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S picom</span></span></code></pre></div><p>对于基于 Ubuntu/Debian 的发行版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install picom</span></span></code></pre></div><p>安装完成后，你需要告诉系统使用 <code>picom</code>。</p><p>首先打开配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在配置文件的末尾插入以下行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 使用 picom 合成器实现透明效果</span></span>
<span class="line"><span>exec_always picom -f</span></span></code></pre></div><p>这里，我使用 <code>-f</code> 标志来在切换工作区、打开新应用程序等时启用淡入淡出效果。</p><p>保存并退出文本编辑器。</p><p>现在，使用 <code>Mod + Shift + r</code> 重新启动 i3。</p><p>接下来，打开终端，打开 “<ruby>首选项<rt>Preference</rt></ruby>”，然后选择“<ruby>配置文件<rt>Profiles</rt></ruby>”，选择“<ruby>背景<rt>Background</rt></ruby>”，然后选择“<ruby>透明背景<rt>Transparent background</rt></ruby>”选项。</p><p>从这里，你可以调整透明度：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-terminal-background-transperency-in-I3-window-manager.png" alt="在 i3 窗口管理器中更改终端背景透明度"></p><h3 id="在-i3-窗口管理器中自定义状态栏" tabindex="-1">在 i3 窗口管理器中自定义状态栏 <a class="header-anchor" href="#在-i3-窗口管理器中自定义状态栏" aria-label="Permalink to “在 i3 窗口管理器中自定义状态栏”">​</a></h3><p>默认情况下，状态栏显示各种信息，但没有图标。</p><p>因此，在这个部分，我将展示如何从状态栏中删除一些元素以及如何为它们添加图标。</p><p>但是，在这里，我将在 <code>/etc/i3status.conf</code> 中创建一个原始状态栏的副本，以便如果出现任何错误，你可以随时恢复到默认配置。</p><p>首先，在 <code>.config</code> 目录下创建一个新的目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir .config/i3status</span></span></code></pre></div>`,66)),n("p",null,[s[46]||(s[46]=a("在以下命令中，我使用了 ",-1)),i(p,{href:"https://linuxhandbook.com/cp-command/"},{default:e(()=>[...s[45]||(s[45]=[a("cp 命令来复制文件",-1)])]),_:1}),s[47]||(s[47]=a("：",-1))]),s[103]||(s[103]=t('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo cp /etc/i3status.conf ~/.config/i3status/i3status.conf</span></span></code></pre></div>',1)),n("p",null,[s[49]||(s[49]=a("接下来，使用 ",-1)),i(p,{href:"https://linuxhandbook.com/chown-command/"},{default:e(()=>[...s[48]||(s[48]=[a("chown 命令更改所有者",-1)])]),_:1}),s[50]||(s[50]=a("，以便你可以进行所需的更改：",-1))]),s[104]||(s[104]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chown $USER:$USER ~/.config/i3status/i3status.conf</span></span></code></pre></div><p>现在，你需要通过修改 i3 配置文件来指示窗口管理器使用新的 i3status 配置文件。首先打开配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在该配置文件中查找 <code>status_command i3status</code> 这一行。这是你将提供新状态配置文件路径的行。</p><p>找到该行后，进行以下更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bar {</span></span>
<span class="line"><span>    status_command i3status -c /home/$USER/.config/i3status/i3status.conf</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最终的结果应该如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-the-path-of-the-i3-status-config-in-I3-window-manager.png" alt="在 i3 窗口管理器中更改 i3 状态配置路径"></p><p>保存更改并退出文本编辑器。</p><p>现在，让我们从状态栏中删除不必要的指示器。</p><p>首先，打开 i3status 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano .config/i3status/i3status.conf</span></span></code></pre></div><p>在这里，你可以将以 <code>order</code> 开头的行注释掉，这些行实际上是指示器的变量。</p><p><strong>例如，在这里</strong>，我禁用了 <code>ipv6</code>、<code>wireless _first_</code>、<code>battery all</code> 和 <code>load</code> 这些对我来说不必要的指示器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#order += &quot;ipv6&quot;</span></span>
<span class="line"><span>#order += &quot;wireless _first_&quot;</span></span>
<span class="line"><span>order += &quot;ethernet _first_&quot;</span></span>
<span class="line"><span>#order += &quot;battery all&quot;</span></span>
<span class="line"><span>order += &quot;disk /&quot;</span></span>
<span class="line"><span>#order += &quot;load&quot;</span></span>
<span class="line"><span>order += &quot;memory&quot;</span></span>
<span class="line"><span>order += &quot;tztime local&quot;</span></span></code></pre></div>`,15)),n("p",null,[s[52]||(s[52]=a("然后，",-1)),i(p,{href:"https://fontawesome.com/v5/cheatsheet"},{default:e(()=>[...s[51]||(s[51]=[a("在浏览器中打开 awesome font 列表",-1)])]),_:1}),s[53]||(s[53]=a("，找到与状态栏中列出的项目相关的适当图标。",-1))]),s[105]||(s[105]=t(`<p>在我的设置中，我删除了以下内容：</p><ul><li>删除了显示可用内存的行</li><li>删除了显示以太网连接速度的行</li></ul><p>最终，我的状态栏如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/Customize-the-status-bar-in-the-I3-window-manager.png" alt="自定义 i3 窗口管理器中的状态栏"></p><h3 id="在-i3-窗口管理器中改变颜色方案" tabindex="-1">在 i3 窗口管理器中改变颜色方案 <a class="header-anchor" href="#在-i3-窗口管理器中改变颜色方案" aria-label="Permalink to “在 i3 窗口管理器中改变颜色方案”">​</a></h3><p>更改 i3 窗口管理器中的颜色方案是这个指南中最重要的部分，因为窗口管理器最吸引人的地方就是你选择的窗口装饰颜色。</p><blockquote><p>📋 我将为每个颜色声明变量，这样你只需更改变量本身的值，就可以轻松地获得新的颜色方案。</p></blockquote><p>首先，打开 i3 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>使用 <code>Alt + /</code> 快捷键到达文件末尾，并使用以下语法添加变量来存储颜色：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 窗口的色彩方案</span></span>
<span class="line"><span>set $bgcolor    #523d64</span></span>
<span class="line"><span>set $in-bgcolor #363636</span></span>
<span class="line"><span>set $text       #ffffff</span></span>
<span class="line"><span>set $u-bgcolor  #ff0000</span></span>
<span class="line"><span>set $indicator  #a8a3c1</span></span>
<span class="line"><span>set $in-text    #969696</span></span>
<span class="line"><span>#                       边框            背景            文本            指示器（显示下一个窗口位置的线条）     </span></span>
<span class="line"><span>client.focused          $bgcolor        $bgcolor        $text           $indicator</span></span>
<span class="line"><span>client.unfocused        $in-bgcolor     $in-bgcolor     $in-text        $in-bgcolor</span></span>
<span class="line"><span>client.focused_inactive $in-bgcolor     $in-bgcolor     $in-text        $in-bgcolor</span></span>
<span class="line"><span>client.urgent           $u-bgcolor      $u-bgcolor      $text           $u-bgcolor</span></span></code></pre></div><p>在这里：</p><ul><li><code>bgcolor</code> 表示背景色。</li><li><code>in-bgcolor</code> 表示非活动窗口的背景色。</li><li><code>text</code> 是文本颜色。</li><li><code>u-bgcolor</code> 表示紧急操作的背景色。</li><li><code>indicator</code> 是标示下一个窗口位置的线条的颜色。</li><li><code>in-text</code> 是非活动窗口的文本颜色。</li></ul><p>对于本指南，我仅使用了四个基本类别：</p><ul><li><code>client.focused</code> 定义了焦点窗口的颜色。</li><li><code>client.unfocused</code> 定义了失去焦点时窗口的装饰。</li><li><code>client.focused_inactive</code> 当其中一个容器处于焦点但当前没有焦点时，显示的颜色。</li><li><code>client.urgent</code> 定义了紧急操作时的颜色。</li></ul>`,15)),n("blockquote",null,[n("p",null,[s[55]||(s[55]=a("💡 除了这四个类别，还有更多类别，请参考 ",-1)),i(p,{href:"https://i3wm.org/docs/userguide.html#client_colors"},{default:e(()=>[...s[54]||(s[54]=[a("官方 i3 配置手册",-1)])]),_:1}),s[56]||(s[56]=a(" 以了解更多信息。",-1))])]),s[106]||(s[106]=t(`<p>一旦你对配置文件进行了更改，请使用 <code>Mod + Shift + r</code> 重新启动 i3。</p><p>如果你按照我的颜色方案，设置应该如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/change-window-colors-in-I3-window-manager.png" alt="更改 I3 窗口管理器中的窗口颜色"></p><p>那么，状态栏的颜色怎么办？当然可以改！</p><h4 id="更改-i3-窗口管理器中状态栏的颜色方案" tabindex="-1">更改 i3 窗口管理器中状态栏的颜色方案 <a class="header-anchor" href="#更改-i3-窗口管理器中状态栏的颜色方案" aria-label="Permalink to “更改 i3 窗口管理器中状态栏的颜色方案”">​</a></h4><p>在本节中，你将意识到为什么我使用变量来存储颜色，因为我将使用相同的变量来为我的状态栏上色！</p><p>要在状态栏中使用颜色，你需要在 i3 配置文件的 <code>bar {...}</code> 部分进行更改。</p><p>首先，打开配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在配置文件中查找 <code>bar {...}</code> 部分。</p><p>找到该部分后，创建一个颜色部分，并为状态栏定义颜色和类别，与你为窗口所做的相同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bar {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在这里，我使用了 <code>focused_workspace</code>、<code>inactive_workspace</code> 和 <code>urgent_workspace</code> 这三个类别，根据需要定义了相应的颜色。</p><p>保存更改后，重新启动 i3，状态栏也会显示颜色。</p><h3 id="设置-i3-状态栏的透明度" tabindex="-1">设置 i3 状态栏的透明度 <a class="header-anchor" href="#设置-i3-状态栏的透明度" aria-label="Permalink to “设置 i3 状态栏的透明度”">​</a></h3><p>本节将向你展示如何使 i3 状态栏透明。</p><p>在此之前，让我们先更改 i3 状态栏的字体。</p><p>这里，我将使用 Droid 字体，使其看起来干净而带有一种极客风格。</p><p>要在 Arch Linux 上安装 Droid 字体，请使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S ttf-droid</span></span></code></pre></div><p>对于 Ubuntu/Debian 系统，请使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install fonts-droid-fallback</span></span></code></pre></div><p>安装完成后，打开配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>进入 <code>bar {...}</code> 部分，并按下面的示例输入字体名称和大小：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>font pango: Droid Sans Mono 11</span></span></code></pre></div><p><img src="https://itsfoss.com/content/images/2023/04/change-fonts-in-i3-status-bar.png" alt="在 i3 状态栏中更改字体"></p><p>完成后，请重新启动 i3，字体将会被更改！</p><p>要使状态栏透明，你可以使用现有十六进制代码中的额外两个数字来定义透明度。</p>`,29)),n("p",null,[s[58]||(s[58]=a("如果你想要控制透明度，我建议你查看 ",-1)),i(p,{href:"https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4"},{default:e(()=>[...s[57]||(s[57]=[a("此指南，其中提供了从 0 到 100% 透明度的代码范围",-1)])]),_:1}),s[59]||(s[59]=a("。",-1))]),s[107]||(s[107]=t(`<p>为此，我将在配置文件中使用两个新变量。首先，打开配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>在这里，我为背景颜色添加了 60% 的透明度，并为非活跃背景颜色添加了 30% 的透明度：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>set $bgcolor    #523d6499</span></span>
<span class="line"><span>set $in-bgcolor #3636364D</span></span></code></pre></div><p>如果你仔细观察，我在现有的十六进制颜色代码中添加了两位数字来定义透明度。例如，使用 <code>99</code> 来表示 <code>60%</code> 的透明度，而使用 <code>4D</code> 来表示 <code>30%</code> 的透明度。</p><p>此外，我添加了两个新变量，透明度不同但颜色相同，作为背景使用，使其看起来更好：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>set $focused-ws #523d6480</span></span>
<span class="line"><span>set $bar-color  #523d640D</span></span></code></pre></div><p>完成后，让我们修改 <code>bar {...}</code> 部分来应用透明度。</p><p>在 <code>bar {...}</code> 中添加两行代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>i3bar_command i3bar --transparency</span></span>
<span class="line"><span>tray_output none</span></span></code></pre></div><p>请注意，使用 <code>tray_output none</code>，它将不会在托盘中显示任何图标。如果你不希望出现这种行为，则可以跳过此行，只添加第一行以实现透明度。</p><p>一旦完成，修改状态栏的颜色方案，例如更改背景颜色、边框和活动工作区的背景。</p><p>修改后，配置文件应如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/config-file-to-make-the-I3-bar-transparent-in-I3-window-manager-1.png" alt="使 i3 状态栏透明的配置文件（i3 窗口管理器）"></p><p>为了使你所做的更改生效，请重新启动 i3，你将得到透明的窗口和状态栏：</p><p><img src="https://itsfoss.com/content/images/2023/04/make-I3-status-bar-and-windows-transparent-in-I3-window-manager-3.png" alt="在 i3 窗口管理器中使状态栏和窗口透明"></p><h3 id="在窗口管理器中使用-i3blocks" tabindex="-1">在窗口管理器中使用 i3blocks <a class="header-anchor" href="#在窗口管理器中使用-i3blocks" aria-label="Permalink to “在窗口管理器中使用 i3blocks”">​</a></h3><p>默认的 i3 状态栏在我看来毫无用处；怎么样让它变得有用起来呢？</p><p>在本部分，我将解释如何添加以下功能：</p><ul><li>软件包更新</li><li>内存使用情况</li><li>磁盘使用情况</li><li>音量指示器</li><li>Spotify 指示器</li></ul><blockquote><p>📋 要实现这些功能，你需要使用一些脚本，这些脚本将允许你向状态栏添加所需的操作。不用担心，我不会让你手动输入脚本；GitHub 上有各种脚本可供选择，几乎涵盖了你所需的所有方面。</p></blockquote><p>但在此之前，你需要进行一些配置，以存储脚本并指示 i3 使用 i3block 的配置，而不是使用 i3bar。</p><p>如果你在本指南的开头按照给定的说明进行操作，那么 i3blocks 已经安装好了，并且配置文件位于 <code>/etc/i3blocks.conf</code>。</p><p><em>如果你希望快速下载块配置文件以进行设置而不阅读其他内容，请点击以下链接：</em></p>`,24)),n("blockquote",null,[n("p",null,[n("strong",null,[i(p,{href:"https://github.com/itsfoss/text-files/tree/master/i3_config_files"},{default:e(()=>[...s[60]||(s[60]=[a("i3 配置文件",-1)])]),_:1})])])]),s[108]||(s[108]=t(`<p>在本教程中，我将创建一个副本，使用它代替原始的配置文件，因此首先我们要创建一个目录来存储配置文件的副本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir ~/.config/i3blocks</span></span></code></pre></div><p>现在，创建一个原始配置文件的副本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo cp /etc/i3blocks.conf ~/.config/i3blocks/</span></span></code></pre></div><p>最后，使用 <code>chown</code> 命令更改文件的所有者，以便你进行所需的更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chown $USER:$USER ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>要启用 i3blocks，在 i3 配置文件中进行一些更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>进入 <code>bar {...}</code> 部分，在这里，你需要将 <code>status_command</code> 更改为 <code>i3blocks</code> 并添加 i3blocks 配置文件的路径，如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/enable-i3blocks-in-i3-window-manager.png" alt="在 i3 窗口管理器中启用 i3blocks"></p><p>完成后，使用 <code>Mod + Shift + r</code> 重新启动 i3 窗口管理器，整个状态栏都会被更改，并显示如下：</p><p><img src="https://itsfoss.com/content/images/2023/04/the-default-look-of-the-i3blocks-in-i3-window-manager.png" alt="i3 窗口管理器中 i3blocks 的默认外观"></p><p>不要担心，你将很快使状态栏比以前的 i3bar 更有价值和好看。</p><h4 id="添加磁盘块" tabindex="-1">添加磁盘块 <a class="header-anchor" href="#添加磁盘块" aria-label="Permalink to “添加磁盘块”">​</a></h4><p>如果你想要显示磁盘剩余空间，可以添加此块。</p><p>在这里，我将使用 <code>nano</code> 创建并打开用于磁盘块的配置文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/scripts/disk</span></span></code></pre></div><p>然后粘贴以下行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
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
<span class="line"><span>&#39;</span></span></code></pre></div><p>保存更改并从文本编辑器中退出。</p><p>现在，将此文件设置为可执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x ~/.config/scripts/disk</span></span></code></pre></div><p>接下来，打开 I3blocks 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>根据你想要放置磁盘块的位置，粘贴以下行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[disk]</span></span>
<span class="line"><span>command=/home/$USER/.config/scripts/disk</span></span>
<span class="line"><span>LABEL=</span></span>
<span class="line"><span>#DIR=$HOME</span></span>
<span class="line"><span>#ALERT_LOW=10</span></span>
<span class="line"><span>interval=30</span></span></code></pre></div><p>完成后，保存更改并使用 <code>Mod + Shift + r</code> 重新启动 i3，状态栏中将显示带有磁盘图标的可用磁盘空间。</p><h4 id="添加内存块" tabindex="-1">添加内存块 <a class="header-anchor" href="#添加内存块" aria-label="Permalink to “添加内存块”">​</a></h4><p>这将是状态栏中指示系统中已使用内存的块。</p><p>首先，创建并打开一个新文件用于新的块：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/scripts/memory</span></span></code></pre></div><p>然后在新文件中粘贴以下行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
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
<span class="line"><span>&#39; /proc/meminfo</span></span></code></pre></div><p>保存更改并从文本编辑器中退出。</p><p>现在，要使其生效，你需要使用以下命令将此文件设置为可执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x ~/.config/scripts/memory</span></span></code></pre></div><p>接下来，打开 i3blocks 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>并将以下内容粘贴到你希望在状态栏中显示内存使用情况的位置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[memory]</span></span>
<span class="line"><span>command=/home/$USER/.config/scripts/memory</span></span>
<span class="line"><span>label=</span></span>
<span class="line"><span>interval=30</span></span></code></pre></div><p>保存更改并从文本编辑器中退出。重新启动 i3 以使更改生效！</p><h4 id="添加更新指示块" tabindex="-1">添加更新指示块 <a class="header-anchor" href="#添加更新指示块" aria-label="Permalink to “添加更新指示块”">​</a></h4><p>这是最有帮助的指示器，它显示需要更新的旧软件包数量。</p><p>首先，使用以下命令安装依赖项以使其正常工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S pacman-contrib</span></span></code></pre></div><p>现在，创建一个新文件来存储脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/scripts/arch-update</span></span></code></pre></div><p>然后粘贴以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
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
<span class="line"><span>    print(message.format(label, args.base_color, &#39;system up to date&#39;))</span></span></code></pre></div><p>保存更改并从文本编辑器中退出。</p><p>现在，使用以下命令将此文件设置为可执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x ~/.config/scripts/arch-update</span></span></code></pre></div><p>接下来，打开 i3blocks 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>并将以下内容粘贴到所需的位置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[arch-update]</span></span>
<span class="line"><span>command=/home/$USER/.config/scripts/arch-update</span></span>
<span class="line"><span>interval=3600</span></span>
<span class="line"><span>markup=pango</span></span>
<span class="line"><span>LABEL=</span></span></code></pre></div><p>保存更改并重新加载 i3 窗口管理器，它将显示需要更新的软件包数量。</p>`,57)),n("p",null,[s[62]||(s[62]=a("如果你正在使用 Ubuntu，你可以 ",-1)),i(p,{href:"https://github.com/vivien/i3blocks-contrib/tree/master/apt-upgrades"},{default:e(()=>[...s[61]||(s[61]=[a("按照 GitHub 页面上的说明",-1)])]),_:1}),s[63]||(s[63]=a(" 进行操作。",-1))]),s[109]||(s[109]=t(`<h4 id="添加音量指示块" tabindex="-1">添加音量指示块 <a class="header-anchor" href="#添加音量指示块" aria-label="Permalink to “添加音量指示块”">​</a></h4><p>添加音量指示块需要一些努力，因为你希望它的行为符合预期。你需要实现以下功能：</p><ul><li>使用媒体控制键管理音量的键绑定</li><li>添加一个指示音量的音量块</li></ul><p>但要做到这一点，首先你需要安装一些依赖项。</p><p>如果你使用的是 Arch Linux，请使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo pacman -S pulseaudio-alsa pulseaudio-bluetooth pulseaudio-equalizer pulseaudio-jack alsa-utils playerctl</span></span></code></pre></div><p>如果你使用的是 Ubuntu/Debian 系统，请使用以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt install pulseaudio-module-bluetooth pulseaudio-equalizer pulseaudio-module-jack alsa-utils playerctl</span></span></code></pre></div><p>接下来，让我们看看如何在 i3 窗口管理器中启用媒体控制键。</p><p>首先，打开 i3 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>转到文件的末尾，并粘贴以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Key bindings for Media control keys</span></span>
<span class="line"><span>bindsym XF86AudioPlay exec playerctl play</span></span>
<span class="line"><span>bindsym XF86AudioPause exec playerctl pause</span></span>
<span class="line"><span>bindsym XF86AudioNext exec playerctl next</span></span>
<span class="line"><span>bindsym XF86AudioPrev exec playerctl previous</span></span></code></pre></div><p>现在，让我们为此块创建一个新文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/scripts/volume</span></span></code></pre></div><p>然后粘贴以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>保存更改并退出配置文件。</p><p>接下来，打开 I3blocks 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>然后粘贴以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[volume]</span></span>
<span class="line"><span>command=/home/$USER/.config/scripts/volume</span></span>
<span class="line"><span>LABEL=♪</span></span>
<span class="line"><span>#LABEL=VOL </span></span>
<span class="line"><span>interval=1</span></span>
<span class="line"><span>signal=10</span></span>
<span class="line"><span>#STEP=5%</span></span>
<span class="line"><span>MIXER=default</span></span>
<span class="line"><span>#SCONTROL=[determined automatically]</span></span>
<span class="line"><span>#NATURAL_MAPPING=0</span></span></code></pre></div><p>保存更改并重新加载 i3，从现在开始，音量快捷键将起作用，并且指示器将按预期工作！</p><blockquote><p>💡 如果遇到音频/视频不工作等问题，请使用此命令，它应该解决该问题：</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemctl --user disable --now pipewire.{socket,service} &amp;&amp; systemctl --user mask pipewire.socket</span></span></code></pre></div><h4 id="添加-spotify-块" tabindex="-1">添加 Spotify 块 <a class="header-anchor" href="#添加-spotify-块" aria-label="Permalink to “添加 Spotify 块”">​</a></h4>`,26)),n("p",null,[s[65]||(s[65]=a("我将使用 ",-1)),i(p,{href:"https://github.com/firatakandere"},{default:e(()=>[...s[64]||(s[64]=[a("firatakandere",-1)])]),_:1}),s[66]||(s[66]=a(" 的脚本来添加此功能。在继续之前，你可以先查看一下该脚本。",-1))]),s[110]||(s[110]=t(`<p>首先，创建并打开一个用于 Spotify 块的新文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/scripts/spotify.py</span></span></code></pre></div><p>然后粘贴以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/python</span></span>
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
<span class="line"><span>    exit</span></span></code></pre></div><p>完成后，使用以下命令使其可执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x ~/.config/scripts/spotify.py</span></span></code></pre></div><p>现在，打开 I3blocks 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3blocks/i3blocks.conf</span></span></code></pre></div><p>然后粘贴以下内容（建议将其粘贴到块的开头）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[spotify]</span></span>
<span class="line"><span>label=</span></span>
<span class="line"><span>command=/home/$USER/.config/scripts/spotify.py</span></span>
<span class="line"><span>color=#81b71a</span></span>
<span class="line"><span>interval=5</span></span></code></pre></div><p>保存更改，退出配置文件，并重新启动 i3。</p><p>添加了我提到的块后，状态栏将如下所示：</p><p><img src="https://itsfoss.com/content/images/2023/04/blocks-i3.jpg" alt="在 i3 窗口管理器中定制 i3blocks "></p><p>你可以查看我的主屏幕，其中包含这些块（点击下方的图片查看）。</p><p><img src="https://itsfoss.com/content/images/2023/04/Customize-the-I3blocks-in-I3-window-manager.png" alt="在 i3 窗口管理器中定制 i3blocks "></p><blockquote><p>📋 如果你对那些默认块（文档和问候语）的位置感到困惑，我用了几个注释将它们禁用以实现所示的外观！</p></blockquote><h3 id="在-linux-中使用-i3gaps" tabindex="-1">在 Linux 中使用 i3gaps <a class="header-anchor" href="#在-linux-中使用-i3gaps" aria-label="Permalink to “在 Linux 中使用 i3gaps”">​</a></h3><p>如果你想在窗口之间添加间隙，可以使用 <code>i3gaps</code>。在颜色方案之后，<code>i3gaps</code> 是这个指南中最关键的元素。</p><p>要使用间隙，你必须对 i3 配置文件进行一些更改。</p><p>打开 i3 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nano ~/.config/i3/config</span></span></code></pre></div><p>转到文件的末尾，并粘贴以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># default gaps</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>保存更改并退出配置文件。</p><p>使用 <code>Mod + Shift + r</code> 重新加载 i3，并会看到窗口之间的间隙：</p><p><img src="https://itsfoss.com/content/images/2023/04/use-i3gaps-in-i3-window-manager.png" alt="在 i3 窗口管理器中使用 i3gaps"></p><p>但是，如果你想调整间隙的大小怎么办？这非常简单，只需要简单的步骤即可完成：</p><ul><li>按下 <code>Mod + Shift + g</code> 进入间隙模式</li><li>使用给定的选项选择要更改的内容</li><li>使用 <code>+</code> 或 <code>-</code> 增加/减小间隙</li><li>完成后，按 <code>Esc</code> 键退出间隙模式</li></ul><p>就是这样！</p><h3 id="我们忘记自定义终端了吗" tabindex="-1">我们忘记自定义终端了吗？ <a class="header-anchor" href="#我们忘记自定义终端了吗" aria-label="Permalink to “我们忘记自定义终端了吗？”">​</a></h3>`,30)),n("p",null,[s[69]||(s[69]=a("不用担心；你可以 ",-1)),i(p,{href:"https://itsfoss.com/zsh-ubuntu/"},{default:e(()=>[...s[67]||(s[67]=[a("切换到 Zsh",-1)])]),_:1}),s[70]||(s[70]=a("，这是一个不同的 shell，使终端看起来与众不同，或者探索一些鲜为人知的 ",-1)),i(p,{href:"https://itsfoss.com/shells-linux/"},{default:e(()=>[...s[68]||(s[68]=[a("Linux Shell",-1)])]),_:1}),s[71]||(s[71]=a("。",-1))]),n("p",null,[s[74]||(s[74]=a("无论如何，你都可以 ",-1)),i(p,{href:"https://itsfoss.com/customize-linux-terminal/"},{default:e(()=>[...s[72]||(s[72]=[a("自定义现有终端",-1)])]),_:1}),s[75]||(s[75]=a("，或选择不同的 ",-1)),i(p,{href:"https://itsfoss.com/linux-terminal-emulators/"},{default:e(()=>[...s[73]||(s[73]=[a("终端模拟器",-1)])]),_:1}),s[76]||(s[76]=a("。",-1))]),s[111]||(s[111]=n("p",null,[n("strong",null,"我希望你不再畏难如何美化系统！"),a(" 😎")],-1)),s[112]||(s[112]=n("p",null,[n("em",null,"如果你有任何建议或想展示你的配置，请在评论部分留言。")],-1)),s[113]||(s[113]=n("p",null,[n("em",null,"（题图：MJ/2874542d-6a8f-4b27-8e65-477389a0dcca）")],-1)),s[114]||(s[114]=n("hr",null,null,-1)),n("p",null,[s[78]||(s[78]=a("via: ",-1)),i(p,{href:"https://itsfoss.com/i3-customization/"},{default:e(()=>[...s[77]||(s[77]=[a("https://itsfoss.com/i3-customization/",-1)])]),_:1})]),n("p",null,[s[82]||(s[82]=a("作者：",-1)),i(p,{href:"https://itsfoss.com/author/sagar/"},{default:e(()=>[...s[79]||(s[79]=[a("Sagar Sharma",-1)])]),_:1}),s[83]||(s[83]=a(" 选题：",-1)),i(p,{href:"https://github.com/lkxed/"},{default:e(()=>[...s[80]||(s[80]=[a("lkxed",-1)])]),_:1}),s[84]||(s[84]=a(" 译者：ChatGPT 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[81]||(s[81]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[87]||(s[87]=a("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[85]||(s[85]=[a("LCTT",-1)])]),_:1}),s[88]||(s[88]=a(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[86]||(s[86]=[a("Linux中国",-1)])]),_:1}),s[89]||(s[89]=a(" 荣誉推出",-1))])])}const C=l(r,[["render",g]]);export{x as __pageData,C as default};
