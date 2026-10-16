import{_ as u,a0 as o,w as l,s as r,ao as a,I as i,a1 as s,A as p,x as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"Linux/Unix 桌面趣事：召喚一羣企鵝在桌面上行走 | LCTT x X-CMD","titleTemplate":false,"description":"Linux/Unix 桌面趣事：召喚一羣企鵝在桌面上行走 | LCTT (201603) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux/Unix 桌面趣事：召喚一羣企鵝在桌面上行走 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux/Unix 桌面趣事：召喚一羣企鵝在桌面上行走 | LCTT (201603) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201603/20151215 Linux Desktop Fun--Summon Swarms Of Penguins To Waddle About The Desktop","title":"Linux/Unix 桌面趣事：召喚一羣企鵝在桌面上行走","tag":"201603","desc":""},"relativePath":"201603/20151215 Linux Desktop Fun--Summon Swarms Of Penguins To Waddle About The Desktop.md","filePath":"[post].md"}'),d={name:"201603/20151215 Linux Desktop Fun--Summon Swarms Of Penguins To Waddle About The Desktop.md"};function g(m,n,x,f,T,h){const t=o("Link");return l(),r("div",null,[n[19]||(n[19]=a(`<h1 id="linux-unix-桌面趣事-召喚一羣企鵝在桌面上行走" tabindex="-1">Linux/Unix 桌面趣事：召喚一羣企鵝在桌面上行走 <a class="header-anchor" href="#linux-unix-桌面趣事-召喚一羣企鵝在桌面上行走" aria-label="Permalink to “Linux/Unix 桌面趣事：召喚一羣企鵝在桌面上行走”">​</a></h1><p>XPenguins 是一個在窗口播放可愛動物動畫的程序。默認情況下，將會從屏幕上方掉落企鵝，沿着你的窗口頂部行走，在窗口漂浮起來，踩上滑板，和做其他類似的有趣的事情。現在，你可以把這些可愛的小企鵝大軍入侵別人的桌面了。</p><h3 id="安裝xpenguins" tabindex="-1">安裝XPenguins <a class="header-anchor" href="#安裝xpenguins" aria-label="Permalink to “安裝XPenguins”">​</a></h3><p>打開終端（選擇程序-&gt;附件-&gt;終端），接着輸入下面的命令來安裝 XPenguins。首先，輸入 <code>apt-get update</code> 通過請求配置的倉庫刷新包的信息，接着安裝需要的程序：</p><pre><code>$ sudo apt-get update
$ sudo apt-get install xpenguins
</code></pre><h3 id="我本地如何啓動-xpenguins" tabindex="-1">我本地如何啓動 XPenguins？ <a class="header-anchor" href="#我本地如何啓動-xpenguins" aria-label="Permalink to “我本地如何啓動 XPenguins？”">​</a></h3><p>輸入下面的命令：</p><pre><code>$ xpenguins
</code></pre><p>示例輸出：</p><p><img src="http://files.cyberciti.biz/uploads/tips/2011/07/Workspace-1_002_12_07_2011.png" alt="An army of cute little penguins invading the screen"></p><p><em>一支可愛企鵝軍隊正在入侵屏幕。</em></p><p><img src="http://files.cyberciti.biz/uploads/tips/2011/07/Workspace-1_001_12_07_2011.png" alt="Linux: Cute little penguins walking along the tops of your windows"></p><p><em>可愛的小企鵝沿着窗口的頂部行走。</em></p><p><img src="http://files.cyberciti.biz/uploads/tips/2011/07/xpenguins-screenshot.jpg" alt="Xpenguins Screenshot"></p><p><em>Xpenguins 截圖</em></p><p>移動窗口時小心點，小傢伙們很容易被壓壞。如果你發送中斷程序（Ctrl-C），它們會爆炸。</p><h3 id="主題" tabindex="-1">主題 <a class="header-anchor" href="#主題" aria-label="Permalink to “主題”">​</a></h3><p>要列出主題，輸入：</p><pre><code>$ xpenguins -l
</code></pre><p>示例輸出：</p><pre><code>Big Penguins
Bill
Classic Penguins
Penguins
Turtles
</code></pre><p>你可以用下面的命令使用其他的主題：</p><pre><code>$ xpenguins --theme &quot;Big Penguins&quot; --theme &quot;Turtles&quot;
</code></pre><p>你可以用下面的命令安裝額外的主題：</p><pre><code>$ cd /tmp
$ wget http://xpenguins.seul.org/xpenguins_themes-1.0.tar.gz
$ tar -zxvf xpenguins_themes-1.0.tar.gz
$ mkdir ~/.xpenguins
$ mv -v themes ~/.xpenguins/
$ xpenguins -l
</code></pre><p>示例輸出：</p><pre><code>Lemmings
Sonic the Hedgehog
The Simpsons
Winnie the Pooh
Worms
Big Penguins
Bill
Classic Penguins
Penguins
Turtles
</code></pre><p>已一個隨機主題開始，輸入：</p><pre><code>$ xpenguins --random-theme
</code></pre><p>要加載所有的主題並且同時運行，輸入：</p><pre><code>$ xpenguins --all
</code></pre><p>更多鏈接何信息：</p>`,32)),i("ul",null,[i("li",null,[s(t,{href:"http://xpenguins.seul.org/"},{default:p(()=>[...n[0]||(n[0]=[e("XPenguins",-1)])]),_:1}),n[1]||(n[1]=e(" 主頁。",-1))]),n[7]||(n[7]=i("li",null,"man penguins",-1)),i("li",null,[n[4]||(n[4]=e("更多 Linux/Unix 桌面樂趣在",-1)),s(t,{href:"http://www.cyberciti.biz/tips/displays-animations-when-accidentally-you-type-sl-instead-of-ls.html"},{default:p(()=>[...n[2]||(n[2]=[e("蒸汽火車",-1)])]),_:1}),n[5]||(n[5]=e("和",-1)),s(t,{href:"http://www.cyberciti.biz/tips/linux-unix-apple-osx-terminal-ascii-aquarium.html"},{default:p(()=>[...n[3]||(n[3]=[e("終端ASCII水族館",-1)])]),_:1}),n[6]||(n[6]=e("。",-1))])]),n[20]||(n[20]=i("hr",null,null,-1)),i("p",null,[n[9]||(n[9]=e("via: ",-1)),s(t,{href:"http://www.cyberciti.biz/tips/linux-cute-little-xpenguins-walk-along-tops-ofyour-windows.html"},{default:p(()=>[...n[8]||(n[8]=[e("http://www.cyberciti.biz/tips/linux-cute-little-xpenguins-walk-along-tops-ofyour-windows.html",-1)])]),_:1})]),i("p",null,[n[12]||(n[12]=e("作者：Vivek Gite 譯者：",-1)),s(t,{href:"https://github.com/geekpi"},{default:p(()=>[...n[10]||(n[10]=[e("geekpi",-1)])]),_:1}),n[13]||(n[13]=e(" 校對：",-1)),s(t,{href:"https://github.com/wxy"},{default:p(()=>[...n[11]||(n[11]=[e("wxy",-1)])]),_:1})]),i("p",null,[n[16]||(n[16]=e("本文由 ",-1)),s(t,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...n[14]||(n[14]=[e("LCTT",-1)])]),_:1}),n[17]||(n[17]=e(" 原創編譯，",-1)),s(t,{href:"https://linux.cn/"},{default:p(()=>[...n[15]||(n[15]=[e("Linux中國",-1)])]),_:1}),n[18]||(n[18]=e(" 榮譽推出",-1))])])}const k=u(d,[["render",g]]);export{P as __pageData,k as default};
