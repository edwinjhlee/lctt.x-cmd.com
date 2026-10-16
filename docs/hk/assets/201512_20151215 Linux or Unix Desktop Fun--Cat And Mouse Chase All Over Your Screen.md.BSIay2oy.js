import{_ as s,a0 as l,w as d,s as p,ao as i,I as a,x as o,a1 as t,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"Linux/Unix桌面趣事：顯示器裏的貓和老鼠 | LCTT x X-CMD","titleTemplate":false,"description":"Linux/Unix桌面趣事：顯示器裏的貓和老鼠 | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux/Unix桌面趣事：顯示器裏的貓和老鼠 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux/Unix桌面趣事：顯示器裏的貓和老鼠 | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20151215 Linux or Unix Desktop Fun--Cat And Mouse Chase All Over Your Screen","title":"Linux/Unix桌面趣事：顯示器裏的貓和老鼠","tag":"201512","desc":""},"relativePath":"201512/20151215 Linux or Unix Desktop Fun--Cat And Mouse Chase All Over Your Screen.md","filePath":"[post].md"}'),u={name:"201512/20151215 Linux or Unix Desktop Fun--Cat And Mouse Chase All Over Your Screen.md"};function k(g,e,m,x,c,f){const n=l("Link");return d(),p("div",null,[e[11]||(e[11]=i(`<h1 id="linux-unix桌面趣事-顯示器裏的貓和老鼠" tabindex="-1">Linux/Unix桌面趣事：顯示器裏的貓和老鼠 <a class="header-anchor" href="#linux-unix桌面趣事-顯示器裏的貓和老鼠" aria-label="Permalink to “Linux/Unix桌面趣事：顯示器裏的貓和老鼠”">​</a></h1><p>Oneko 是一個有趣的應用。它會把你的光標變成一隻老鼠，並在後面創建一個可愛的小貓，並且始終追逐着老鼠光標。單詞“neko”在日語中的意思是老鼠。它最初是一位日本人開發的 Macintosh 桌面附件。</p><h3 id="安裝-oneko" tabindex="-1">安裝 oneko <a class="header-anchor" href="#安裝-oneko" aria-label="Permalink to “安裝 oneko”">​</a></h3><p>試下下面的命令：</p><pre><code>$ sudo apt-get install oneko
</code></pre><p>示例輸出：</p><pre><code>[sudo] password for vivek:
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following NEW packages will be installed:
  oneko
0 upgraded, 1 newly installed, 0 to remove and 10 not upgraded.
Need to get 38.6 kB of archives.
After this operation, 168 kB of additional disk space will be used.
Get:1 http://debian.osuosl.org/debian/ squeeze/main oneko amd64 1.2.sakura.6-7 [38.6 kB]
Fetched 38.6 kB in 1s (25.9 kB/s)
Selecting previously deselected package oneko.
(Reading database ... 274152 files and directories currently installed.)
Unpacking oneko (from .../oneko_1.2.sakura.6-7_amd64.deb) ...
Processing triggers for menu ...
Processing triggers for man-db ...
Setting up oneko (1.2.sakura.6-7) ...
Processing triggers for menu ...
</code></pre><p>FreeBSD 用户輸入下面的命令安裝 oneko：</p><pre><code># cd /usr/ports/games/oneko
# make install clean
</code></pre><h3 id="我該如何使用-oneko" tabindex="-1">我該如何使用 oneko？ <a class="header-anchor" href="#我該如何使用-oneko" aria-label="Permalink to “我該如何使用 oneko？”">​</a></h3><p>輸入下面的命令：</p><pre><code>$ oneko
</code></pre><p>你可以把貓變成 “tora-neko”，一隻像白老虎條紋的貓：</p><pre><code>$ oneko -tora
</code></pre><h3 id="不喜歡貓" tabindex="-1">不喜歡貓? <a class="header-anchor" href="#不喜歡貓" aria-label="Permalink to “不喜歡貓?”">​</a></h3><p>你可以用狗代替貓：</p><pre><code>$ oneko -dog
</code></pre><p>下面可以用櫻花代替貓：</p><pre><code>$ oneko -sakura
</code></pre><p>用大道寺代替貓：</p><pre><code>$ oneko -tomoyo
</code></pre><h3 id="查看相關媒體" tabindex="-1">查看相關媒體 <a class="header-anchor" href="#查看相關媒體" aria-label="Permalink to “查看相關媒體”">​</a></h3><p>這個教程同樣也有視頻格式：</p><p>注：youtube 視頻</p>`,24)),e[12]||(e[12]=a("iframe",{width:"596",height:"335",frameborder:"0",allowfullscreen:"",src:"http://www.youtube.com/embed/Nm3SkXThL0s"},null,-1)),e[13]||(e[13]=i('<p>(Video.01: 示例 - 在 Linux 下安裝和使用 oneko)</p><h3 id="其他選項" tabindex="-1">其他選項 <a class="header-anchor" href="#其他選項" aria-label="Permalink to “其他選項”">​</a></h3><p>你可以傳入下面的選項</p><ol><li><strong>-tofocus</strong>：讓貓在獲得焦點的窗口頂部奔跑。當獲得焦點的窗口不在視野中時，貓像平常那樣追逐老鼠。</li><li><strong>-position 座標</strong> ：指定X和Y來調整貓相對老鼠的位置</li><li><strong>-rv</strong>：將前景色和背景色對調</li><li><strong>-fg 顏色</strong> : 前景色 (比如 oneko -dog -fg red)。</li><li><strong>-bg 顏色</strong> : 背景色 (比如 oneko -dog -bg green)。</li><li>查看 oneko 的手冊獲取更多信息。</li></ol><hr>',5)),a("p",null,[e[1]||(e[1]=o("via: ",-1)),t(n,{href:"http://www.cyberciti.biz/open-source/oneko-app-creates-cute-cat-chasing-around-your-mouse/"},{default:r(()=>[...e[0]||(e[0]=[o("http://www.cyberciti.biz/open-source/oneko-app-creates-cute-cat-chasing-around-your-mouse/",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=o("作者：Vivek Gite 譯者：",-1)),t(n,{href:"https://github.com/geekpi"},{default:r(()=>[...e[2]||(e[2]=[o("geekpi",-1)])]),_:1}),e[5]||(e[5]=o(" 校對：",-1)),t(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[3]||(e[3]=[o("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=o("本文由 ",-1)),t(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[o("LCTT",-1)])]),_:1}),e[9]||(e[9]=o(" 原創編譯，",-1)),t(n,{href:"https://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[o("Linux中國",-1)])]),_:1}),e[10]||(e[10]=o(" 榮譽推出",-1))])])}const _=s(u,[["render",k]]);export{T as __pageData,_ as default};
