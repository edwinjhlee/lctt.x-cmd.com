import{_ as u,a0 as o,w as l,s as r,ao as a,I as i,a1 as s,A as p,x as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"Linux/Unix 桌面趣事：召唤一群企鹅在桌面上行走 | LCTT x X-CMD","titleTemplate":false,"description":"Linux/Unix 桌面趣事：召唤一群企鹅在桌面上行走 | LCTT (201603) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux/Unix 桌面趣事：召唤一群企鹅在桌面上行走 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux/Unix 桌面趣事：召唤一群企鹅在桌面上行走 | LCTT (201603) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201603/20151215 Linux Desktop Fun--Summon Swarms Of Penguins To Waddle About The Desktop","title":"Linux/Unix 桌面趣事：召唤一群企鹅在桌面上行走","tag":"201603","desc":""},"relativePath":"201603/20151215 Linux Desktop Fun--Summon Swarms Of Penguins To Waddle About The Desktop.md","filePath":"[post].md"}'),d={name:"201603/20151215 Linux Desktop Fun--Summon Swarms Of Penguins To Waddle About The Desktop.md"};function g(m,n,x,f,T,h){const t=o("Link");return l(),r("div",null,[n[19]||(n[19]=a(`<h1 id="linux-unix-桌面趣事-召唤一群企鹅在桌面上行走" tabindex="-1">Linux/Unix 桌面趣事：召唤一群企鹅在桌面上行走 <a class="header-anchor" href="#linux-unix-桌面趣事-召唤一群企鹅在桌面上行走" aria-label="Permalink to “Linux/Unix 桌面趣事：召唤一群企鹅在桌面上行走”">​</a></h1><p>XPenguins 是一个在窗口播放可爱动物动画的程序。默认情况下，将会从屏幕上方掉落企鹅，沿着你的窗口顶部行走，在窗口漂浮起来，踩上滑板，和做其他类似的有趣的事情。现在，你可以把这些可爱的小企鹅大军入侵别人的桌面了。</p><h3 id="安装xpenguins" tabindex="-1">安装XPenguins <a class="header-anchor" href="#安装xpenguins" aria-label="Permalink to “安装XPenguins”">​</a></h3><p>打开终端（选择程序-&gt;附件-&gt;终端），接着输入下面的命令来安装 XPenguins。首先，输入 <code>apt-get update</code> 通过请求配置的仓库刷新包的信息，接着安装需要的程序：</p><pre><code>$ sudo apt-get update
$ sudo apt-get install xpenguins
</code></pre><h3 id="我本地如何启动-xpenguins" tabindex="-1">我本地如何启动 XPenguins？ <a class="header-anchor" href="#我本地如何启动-xpenguins" aria-label="Permalink to “我本地如何启动 XPenguins？”">​</a></h3><p>输入下面的命令：</p><pre><code>$ xpenguins
</code></pre><p>示例输出：</p><p><img src="http://files.cyberciti.biz/uploads/tips/2011/07/Workspace-1_002_12_07_2011.png" alt="An army of cute little penguins invading the screen"></p><p><em>一支可爱企鹅军队正在入侵屏幕。</em></p><p><img src="http://files.cyberciti.biz/uploads/tips/2011/07/Workspace-1_001_12_07_2011.png" alt="Linux: Cute little penguins walking along the tops of your windows"></p><p><em>可爱的小企鹅沿着窗口的顶部行走。</em></p><p><img src="http://files.cyberciti.biz/uploads/tips/2011/07/xpenguins-screenshot.jpg" alt="Xpenguins Screenshot"></p><p><em>Xpenguins 截图</em></p><p>移动窗口时小心点，小家伙们很容易被压坏。如果你发送中断程序（Ctrl-C），它们会爆炸。</p><h3 id="主题" tabindex="-1">主题 <a class="header-anchor" href="#主题" aria-label="Permalink to “主题”">​</a></h3><p>要列出主题，输入：</p><pre><code>$ xpenguins -l
</code></pre><p>示例输出：</p><pre><code>Big Penguins
Bill
Classic Penguins
Penguins
Turtles
</code></pre><p>你可以用下面的命令使用其他的主题：</p><pre><code>$ xpenguins --theme &quot;Big Penguins&quot; --theme &quot;Turtles&quot;
</code></pre><p>你可以用下面的命令安装额外的主题：</p><pre><code>$ cd /tmp
$ wget http://xpenguins.seul.org/xpenguins_themes-1.0.tar.gz
$ tar -zxvf xpenguins_themes-1.0.tar.gz
$ mkdir ~/.xpenguins
$ mv -v themes ~/.xpenguins/
$ xpenguins -l
</code></pre><p>示例输出：</p><pre><code>Lemmings
Sonic the Hedgehog
The Simpsons
Winnie the Pooh
Worms
Big Penguins
Bill
Classic Penguins
Penguins
Turtles
</code></pre><p>已一个随机主题开始，输入：</p><pre><code>$ xpenguins --random-theme
</code></pre><p>要加载所有的主题并且同时运行，输入：</p><pre><code>$ xpenguins --all
</code></pre><p>更多链接何信息：</p>`,32)),i("ul",null,[i("li",null,[s(t,{href:"http://xpenguins.seul.org/"},{default:p(()=>[...n[0]||(n[0]=[e("XPenguins",-1)])]),_:1}),n[1]||(n[1]=e(" 主页。",-1))]),n[7]||(n[7]=i("li",null,"man penguins",-1)),i("li",null,[n[4]||(n[4]=e("更多 Linux/Unix 桌面乐趣在",-1)),s(t,{href:"http://www.cyberciti.biz/tips/displays-animations-when-accidentally-you-type-sl-instead-of-ls.html"},{default:p(()=>[...n[2]||(n[2]=[e("蒸汽火车",-1)])]),_:1}),n[5]||(n[5]=e("和",-1)),s(t,{href:"http://www.cyberciti.biz/tips/linux-unix-apple-osx-terminal-ascii-aquarium.html"},{default:p(()=>[...n[3]||(n[3]=[e("终端ASCII水族馆",-1)])]),_:1}),n[6]||(n[6]=e("。",-1))])]),n[20]||(n[20]=i("hr",null,null,-1)),i("p",null,[n[9]||(n[9]=e("via: ",-1)),s(t,{href:"http://www.cyberciti.biz/tips/linux-cute-little-xpenguins-walk-along-tops-ofyour-windows.html"},{default:p(()=>[...n[8]||(n[8]=[e("http://www.cyberciti.biz/tips/linux-cute-little-xpenguins-walk-along-tops-ofyour-windows.html",-1)])]),_:1})]),i("p",null,[n[12]||(n[12]=e("作者：Vivek Gite 译者：",-1)),s(t,{href:"https://github.com/geekpi"},{default:p(()=>[...n[10]||(n[10]=[e("geekpi",-1)])]),_:1}),n[13]||(n[13]=e(" 校对：",-1)),s(t,{href:"https://github.com/wxy"},{default:p(()=>[...n[11]||(n[11]=[e("wxy",-1)])]),_:1})]),i("p",null,[n[16]||(n[16]=e("本文由 ",-1)),s(t,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...n[14]||(n[14]=[e("LCTT",-1)])]),_:1}),n[17]||(n[17]=e(" 原创编译，",-1)),s(t,{href:"https://linux.cn/"},{default:p(()=>[...n[15]||(n[15]=[e("Linux中国",-1)])]),_:1}),n[18]||(n[18]=e(" 荣誉推出",-1))])])}const k=u(d,[["render",g]]);export{P as __pageData,k as default};
