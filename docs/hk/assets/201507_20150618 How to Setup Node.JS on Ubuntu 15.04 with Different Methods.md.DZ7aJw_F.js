import{_ as r,a0 as l,w as u,s as i,ao as p,I as d,x as o,a1 as t,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const J=JSON.parse('{"title":"在Ubuntu下安裝Node.JS的不同方式 | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu下安裝Node.JS的不同方式 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu下安裝Node.JS的不同方式 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu下安裝Node.JS的不同方式 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150618 How to Setup Node.JS on Ubuntu 15.04 with Different Methods","title":"在Ubuntu下安裝Node.JS的不同方式","tag":"201507","desc":""},"relativePath":"201507/20150618 How to Setup Node.JS on Ubuntu 15.04 with Different Methods.md","filePath":"[post].md"}'),s={name:"201507/20150618 How to Setup Node.JS on Ubuntu 15.04 with Different Methods.md"};function h(c,e,b,g,N,m){const n=l("Link");return u(),i("div",null,[e[13]||(e[13]=p(`<h1 id="在ubuntu下安裝node-js的不同方式" tabindex="-1">在Ubuntu下安裝Node.JS的不同方式 <a class="header-anchor" href="#在ubuntu下安裝node-js的不同方式" aria-label="Permalink to “在Ubuntu下安裝Node.JS的不同方式”">​</a></h1><p>如果你要在Ubuntu 15.04上安裝Node.js的話，這篇教程對你來説肯定很重要。Node.js從本質上來説就是一個運行在服務端上的封裝好了輸入輸出流的javascript程序。Node.js巧妙的使用單線程的事件循環來處理高吞吐量和非阻塞IO。同時它也是一個提供了通過操作系統讀寫文件和網絡操作功能的平台層。所以這篇文章將展示在Ubuntu 15.04 server上不同的安裝Node.Js的方式。</p><h3 id="安裝node-js-的方法" tabindex="-1">安裝Node.JS 的方法### <a class="header-anchor" href="#安裝node-js-的方法" aria-label="Permalink to “安裝Node.JS 的方法###”">​</a></h3><p>有許多安裝Node.JS的不同的方法，我們可以選擇其一。通過本篇文章我們將手把手帶着你在Ubuntu 15.04上安裝Node.Js，在此之前請卸載舊版本的包以免發生包衝突。</p><ul><li>從源代碼安裝Node.JS</li><li>用包管理器安裝Node.JS</li><li>從Github遠程庫安裝Node.JS</li><li>用NVM安裝Node.JS</li></ul><h3 id="_1-從源代碼安裝node-js" tabindex="-1">1) 從源代碼安裝Node.JS <a class="header-anchor" href="#_1-從源代碼安裝node-js" aria-label="Permalink to “1) 從源代碼安裝Node.JS”">​</a></h3><p>讓我們開始從源代碼安裝Node.JS之前，請確認系統上的所有的依賴包都已經更新到最新版本。然後跟着以下步驟來開始安裝：</p><h4 id="步驟1-升級系統" tabindex="-1">步驟1: 升級系統 <a class="header-anchor" href="#步驟1-升級系統" aria-label="Permalink to “步驟1: 升級系統”">​</a></h4><p>用以下命令來升級系統，並且安裝一些Node.JS必要的包。</p><pre><code>root@ubuntu-15:~# apt-get update

root@ubuntu-15:~# apt-get install python gcc make g++
</code></pre><h4 id="步驟2-獲取node-js的源代碼" tabindex="-1">步驟2: 獲取Node.JS的源代碼 <a class="header-anchor" href="#步驟2-獲取node-js的源代碼" aria-label="Permalink to “步驟2: 獲取Node.JS的源代碼”">​</a></h4><p>安裝好依賴包之後我們可以從官方網站上下載Node.JS的源代碼。下載以及解壓的命令如下：</p><pre><code>root@ubuntu-15:~# wget http://nodejs.org/dist/v0.12.4/node-v0.12.4.tar.gz
root@ubuntu-15:~# tar zxvf node-v0.12.4.tar.gz
</code></pre><h4 id="步驟3-開始安裝" tabindex="-1">步驟3: 開始安裝 <a class="header-anchor" href="#步驟3-開始安裝" aria-label="Permalink to “步驟3: 開始安裝”">​</a></h4><p>現在我們進入源代碼的目錄，然後運行.configure文件</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/13.png" alt="NodeJS Configure"></p><pre><code>root@ubuntu-15:~# ls
node-v0.12.4 node-v0.12.4.tar.gz
root@ubuntu-15:~# cd node-v0.12.4/
root@ubuntu-15:~/node-v0.12.4# ./configure
root@ubuntu-15:~/node-v0.12.4# make install
</code></pre><h4 id="安裝後測試" tabindex="-1">安裝後測試 <a class="header-anchor" href="#安裝後測試" aria-label="Permalink to “安裝後測試”">​</a></h4><p>只要運行一下上面的命令就順利安裝好了Node.JS，現在我們來確認一下版本信息和測試以下Node.JS是否可以運行輸出。</p><pre><code>root@ubuntu-15:~/node-v0.12.4# node -v
v0.12.4
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/21.png" alt="Node.Js Test"></p><p>創建一個以.js為擴展名的文件然後用Node的命令運行</p><pre><code>root@ubuntu-15:~/node-v0.12.4# touch helo_test.js
root@ubuntu-15:~/node-v0.12.4# vim helo_test.js
console.log(&#39;Hello World&#39;);
</code></pre><p>現在我們用Node的命令運行文件</p><pre><code>root@ubuntu-15:~/node-v0.12.4# node helo_test.js
Hello World
</code></pre><p>輸出的結果證明我們已經成功的在Ubuntu 15.04安裝好了Node.JS，同時我們也能運行JavaScript文件。</p><h3 id="_2-利用包管理器安裝node-js" tabindex="-1">2) 利用包管理器安裝Node.JS <a class="header-anchor" href="#_2-利用包管理器安裝node-js" aria-label="Permalink to “2) 利用包管理器安裝Node.JS”">​</a></h3><p>在Ubuntu下用包管理器安裝Node.JS是非常簡單的，只要增加NodeSource的個人軟件包檔案（PPA）即可。</p><p>我們將下面通過PPA安裝Node.JS</p><h4 id="步驟1-用curl獲取源代碼" tabindex="-1">步驟1: 用curl獲取源代碼 <a class="header-anchor" href="#步驟1-用curl獲取源代碼" aria-label="Permalink to “步驟1: 用curl獲取源代碼”">​</a></h4><p>在我們用curl獲取源代碼之前，我們必須先升級操作系統，然後用curl命令獲取NodeSource添加到本地倉庫。</p><pre><code>root@ubuntu-15:~#apt-get update
root@ubuntu-15:~# curl -sL https://deb.nodesource.com/setup | sudo bash -
</code></pre><p>curl將運行以下任務</p><pre><code>## Installing the NodeSource Node.js 0.10 repo...
## Populating apt-get cache...
## Confirming &quot;vivid&quot; is supported...
## Adding the NodeSource signing key to your keyring...
## Creating apt sources list file for the NodeSource Node.js 0.10 repo...
## Running \`apt-get update\` for you...
Fetched 6,411 B in 5s (1,077 B/s)
Reading package lists... Done
## Run \`apt-get install nodejs\` (as root) to install Node.js 0.10 and npm
</code></pre><h4 id="步驟2-安裝nodejs和npm" tabindex="-1">步驟2: 安裝NodeJS和NPM <a class="header-anchor" href="#步驟2-安裝nodejs和npm" aria-label="Permalink to “步驟2: 安裝NodeJS和NPM”">​</a></h4><p>運行以上命令之後如果輸出如上所示，我們可以用apt-get命令來安裝NodeJS和NPM包。</p><pre><code>root@ubuntu-15:~# apt-get install nodejs
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/31.png" alt="NodeJS Install"></p><h4 id="步驟3-安裝一些必備的工具" tabindex="-1">步驟3: 安裝一些必備的工具 <a class="header-anchor" href="#步驟3-安裝一些必備的工具" aria-label="Permalink to “步驟3: 安裝一些必備的工具”">​</a></h4><p>通過以下命令來安裝編譯安裝一些我們必需的本地插件。</p><pre><code>root@ubuntu-15:~# apt-get install -y build-essential
</code></pre><h4 id="通過node-js-shell來測試" tabindex="-1">通過Node.JS Shell來測試 <a class="header-anchor" href="#通過node-js-shell來測試" aria-label="Permalink to “通過Node.JS Shell來測試”">​</a></h4><p>測試Node.JS的步驟與之前使用源代碼安裝相似，通過以下node命令來確認Node.JS是否完全安裝好:</p><pre><code>root@ubuntu-15:~# node
&gt; console.log(&#39;Node.js Installed Using Package Manager&#39;);
Node.js Installed Using Package Manager
</code></pre><hr><pre><code>root@ubuntu-15:~# node
&gt; a = [1,2,3,4,5]
[ 1, 2, 3, 4, 5 ]
&gt; typeof a
&#39;object&#39;
&gt; 5 + 2
7
&gt;
(^C again to quit)
&gt;
root@ubuntu-15:~#
</code></pre><h4 id="使用nodejs應用進行簡單的測試" tabindex="-1">使用NodeJS應用進行簡單的測試 <a class="header-anchor" href="#使用nodejs應用進行簡單的測試" aria-label="Permalink to “使用NodeJS應用進行簡單的測試”">​</a></h4><p>REPL是一個Node.js的shell，任何有效的JavaScript代碼都能在REPL下運行通過。所以讓我們看看在Node.JS下的REPL是什麼樣子吧。</p><pre><code>root@ubuntu-15:~# node
&gt; var repl = require(&quot;repl&quot;);
undefined
&gt; repl.start(&quot;&gt; &quot;);

Press Enter and it will show out put like this:
&gt; { domain: null,
_events: {},
_maxListeners: 10,
useGlobal: false,
ignoreUndefined: false,
eval: [Function],
inputStream:
{ _connecting: false,
_handle:
{ fd: 0,
writeQueueSize: 0,
owner: [Circular],
onread: [Function: onread],
reading: true },
_readableState:
{ highWaterMark: 0,
buffer: [],
length: 0,
pipes: null,
...
...
</code></pre><p>以下是可以在REPL下使用的命令列表</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/4.png" alt="REPL Manual"></p><h4 id="使用nodejs的包管理器" tabindex="-1">使用NodeJS的包管理器 <a class="header-anchor" href="#使用nodejs的包管理器" aria-label="Permalink to “使用NodeJS的包管理器”">​</a></h4><p>NPM是一個提供給node腳本持續生命力的命令列工具，它能通過package.json來安裝和管理依賴包。最開始從初始化命令init開始</p><pre><code>root@ubuntu-15:~# npm init
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/51.png" alt="NPM starting"></p><h3 id="_3-從github遠程庫安裝node-js" tabindex="-1">3) 從Github遠程庫安裝Node.JS <a class="header-anchor" href="#_3-從github遠程庫安裝node-js" aria-label="Permalink to “3) 從Github遠程庫安裝Node.JS”">​</a></h3><p>在這個方法中我們需要一些步驟來把Node.JS從Github的遠程的倉庫克隆到本地倉庫目錄</p><p>在開始克隆（clone）包到本地並且配製之前，我們要先安裝以下依賴包</p><pre><code>root@ubuntu-15:~# apt-get install g++ curl make libssl-dev apache2-utils git-core
</code></pre><p>現在我們開始用git命令克隆到本地並且轉到配製目錄</p><pre><code>root@ubuntu-15:~# git clone git://github.com/ry/node.git
root@ubuntu-15:~# cd node/
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/61.png" alt="Git Clone NodeJS"></p><p>clone倉庫之後，通過運行.config命令來編譯生成完整的安裝包。</p><pre><code>root@ubuntu-15:~# ./configure
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/7.png" alt="Configure Node"></p><p>運行make install命令之後耐心等待幾分鐘，程序將會安裝好Node.JS。</p><pre><code>root@ubuntu-15:~/node# make install

root@ubuntu-15:~/node# node -v
v0.13.0-pre
</code></pre><h4 id="測試node-js" tabindex="-1">測試Node.JS <a class="header-anchor" href="#測試node-js" aria-label="Permalink to “測試Node.JS”">​</a></h4><pre><code>root@ubuntu-15:~/node# node
&gt; a = [1,2,3,4,5,6,7]
[ 1, 2, 3, 4, 5, 6, 7 ]
&gt; typeof a
&#39;object&#39;
&gt; 6 + 5
11
&gt;
(^C again to quit)
&gt;
root@ubuntu-15:~/node#
</code></pre><h3 id="_4-通過nvm安裝node-js" tabindex="-1">4) 通過NVM安裝Node.JS <a class="header-anchor" href="#_4-通過nvm安裝node-js" aria-label="Permalink to “4) 通過NVM安裝Node.JS”">​</a></h3><p>在最後一種方法中我們我們將用NVM來比較容易安裝Node.JS。安裝和配製Node.JS，這是最好的方法之一，它可以供我們選擇要安裝的版本。</p><p>在安裝之前，請確認本機以前的安裝包已經被卸載。</p><h4 id="步驟1-安裝依賴包" tabindex="-1">步驟1: 安裝依賴包 <a class="header-anchor" href="#步驟1-安裝依賴包" aria-label="Permalink to “步驟1: 安裝依賴包”">​</a></h4><p>首先升級Ubuntu Server系統，然後安裝以下安裝Node.JS和使用NVM所要依賴的包。用curl命令從git上下載NVM到本地倉庫：</p><pre><code>root@ubuntu-15:~# apt-get install build-essential libssl-dev
root@ubuntu-15:~# curl https://raw.githubusercontent.com/creationix/nvm/v0.16.1/install.sh | sh
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/81.png" alt="NVM Curl"></p><h4 id="步驟2-修改home環境" tabindex="-1">步驟2: 修改Home環境 <a class="header-anchor" href="#步驟2-修改home環境" aria-label="Permalink to “步驟2: 修改Home環境”">​</a></h4><p>用curl從NVM下載必需的包到用户的home目錄之後，我們需要修改bash的配置文件添加NVM，之後只要重新登錄中斷或者用如下命令更新即可。</p><pre><code>root@ubuntu-15:~# source ~/.profile
</code></pre><p>現在我們可以用NVM來設置默認的NVM的版本，或者用如下命令來指定之前版本：</p><pre><code>root@ubuntu-15:~# nvm ls
root@ubuntu-15:~# nvm alias default 0.12.4
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/91.png" alt="NVM Default"></p><h4 id="步驟3-使用nvm" tabindex="-1">步驟3: 使用NVM <a class="header-anchor" href="#步驟3-使用nvm" aria-label="Permalink to “步驟3: 使用NVM”">​</a></h4><p>我們已經通過NVM成功的安裝了Node.JS，所以我們現在可以使用各種有用的命令。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/101.png" alt="NVM Manual"></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>現在我們已經準備好了在服務端安裝Node.JS，你可以從我們説的四種方式中選擇最合適你的方式在最新的Ubuntu 15.04上來安裝Node.JS，安裝好之後你就可以利用Node.JS來編寫你的代碼。</p><hr>`,88)),d("p",null,[e[1]||(e[1]=o("via: ",-1)),t(n,{href:"http://linoxide.com/ubuntu-how-to/setup-node-js-ubuntu-15-04-different-methods/"},{default:a(()=>[...e[0]||(e[0]=[o("http://linoxide.com/ubuntu-how-to/setup-node-js-ubuntu-15-04-different-methods/",-1)])]),_:1})]),d("p",null,[e[5]||(e[5]=o("作者：",-1)),t(n,{href:"http://linoxide.com/author/kashifs/"},{default:a(()=>[...e[2]||(e[2]=[o("Kashif Siddique",-1)])]),_:1}),e[6]||(e[6]=o(" 譯者：",-1)),t(n,{href:"https://github.com/NearTan"},{default:a(()=>[...e[3]||(e[3]=[o("NearTan",-1)])]),_:1}),e[7]||(e[7]=o(" 校對：",-1)),t(n,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[o("wxy",-1)])]),_:1})]),d("p",null,[e[10]||(e[10]=o("本文由 ",-1)),t(n,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[o("LCTT",-1)])]),_:1}),e[11]||(e[11]=o(" 原創翻譯，",-1)),t(n,{href:"https://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[o("Linux中國",-1)])]),_:1}),e[12]||(e[12]=o(" 榮譽推出",-1))])])}const x=r(s,[["render",h]]);export{J as __pageData,x as default};
