import{_ as r,a0 as l,w as u,s as i,ao as p,I as d,x as o,a1 as t,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const J=JSON.parse('{"title":"在Ubuntu下安装Node.JS的不同方式 | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu下安装Node.JS的不同方式 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu下安装Node.JS的不同方式 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu下安装Node.JS的不同方式 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150618 How to Setup Node.JS on Ubuntu 15.04 with Different Methods","title":"在Ubuntu下安装Node.JS的不同方式","tag":"201507","desc":""},"relativePath":"201507/20150618 How to Setup Node.JS on Ubuntu 15.04 with Different Methods.md","filePath":"[post].md"}'),s={name:"201507/20150618 How to Setup Node.JS on Ubuntu 15.04 with Different Methods.md"};function h(c,e,b,g,N,m){const n=l("Link");return u(),i("div",null,[e[13]||(e[13]=p(`<h1 id="在ubuntu下安装node-js的不同方式" tabindex="-1">在Ubuntu下安装Node.JS的不同方式 <a class="header-anchor" href="#在ubuntu下安装node-js的不同方式" aria-label="Permalink to “在Ubuntu下安装Node.JS的不同方式”">​</a></h1><p>如果你要在Ubuntu 15.04上安装Node.js的话，这篇教程对你来说肯定很重要。Node.js从本质上来说就是一个运行在服务端上的封装好了输入输出流的javascript程序。Node.js巧妙的使用单线程的事件循环来处理高吞吐量和非阻塞IO。同时它也是一个提供了通过操作系统读写文件和网络操作功能的平台层。所以这篇文章将展示在Ubuntu 15.04 server上不同的安装Node.Js的方式。</p><h3 id="安装node-js-的方法" tabindex="-1">安装Node.JS 的方法### <a class="header-anchor" href="#安装node-js-的方法" aria-label="Permalink to “安装Node.JS 的方法###”">​</a></h3><p>有许多安装Node.JS的不同的方法，我们可以选择其一。通过本篇文章我们将手把手带着你在Ubuntu 15.04上安装Node.Js，在此之前请卸载旧版本的包以免发生包冲突。</p><ul><li>从源代码安装Node.JS</li><li>用包管理器安装Node.JS</li><li>从Github远程库安装Node.JS</li><li>用NVM安装Node.JS</li></ul><h3 id="_1-从源代码安装node-js" tabindex="-1">1) 从源代码安装Node.JS <a class="header-anchor" href="#_1-从源代码安装node-js" aria-label="Permalink to “1) 从源代码安装Node.JS”">​</a></h3><p>让我们开始从源代码安装Node.JS之前，请确认系统上的所有的依赖包都已经更新到最新版本。然后跟着以下步骤来开始安装：</p><h4 id="步骤1-升级系统" tabindex="-1">步骤1: 升级系统 <a class="header-anchor" href="#步骤1-升级系统" aria-label="Permalink to “步骤1: 升级系统”">​</a></h4><p>用以下命令来升级系统，并且安装一些Node.JS必要的包。</p><pre><code>root@ubuntu-15:~# apt-get update

root@ubuntu-15:~# apt-get install python gcc make g++
</code></pre><h4 id="步骤2-获取node-js的源代码" tabindex="-1">步骤2: 获取Node.JS的源代码 <a class="header-anchor" href="#步骤2-获取node-js的源代码" aria-label="Permalink to “步骤2: 获取Node.JS的源代码”">​</a></h4><p>安装好依赖包之后我们可以从官方网站上下载Node.JS的源代码。下载以及解压的命令如下：</p><pre><code>root@ubuntu-15:~# wget http://nodejs.org/dist/v0.12.4/node-v0.12.4.tar.gz
root@ubuntu-15:~# tar zxvf node-v0.12.4.tar.gz
</code></pre><h4 id="步骤3-开始安装" tabindex="-1">步骤3: 开始安装 <a class="header-anchor" href="#步骤3-开始安装" aria-label="Permalink to “步骤3: 开始安装”">​</a></h4><p>现在我们进入源代码的目录，然后运行.configure文件</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/13.png" alt="NodeJS Configure"></p><pre><code>root@ubuntu-15:~# ls
node-v0.12.4 node-v0.12.4.tar.gz
root@ubuntu-15:~# cd node-v0.12.4/
root@ubuntu-15:~/node-v0.12.4# ./configure
root@ubuntu-15:~/node-v0.12.4# make install
</code></pre><h4 id="安装后测试" tabindex="-1">安装后测试 <a class="header-anchor" href="#安装后测试" aria-label="Permalink to “安装后测试”">​</a></h4><p>只要运行一下上面的命令就顺利安装好了Node.JS，现在我们来确认一下版本信息和测试以下Node.JS是否可以运行输出。</p><pre><code>root@ubuntu-15:~/node-v0.12.4# node -v
v0.12.4
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/21.png" alt="Node.Js Test"></p><p>创建一个以.js为扩展名的文件然后用Node的命令运行</p><pre><code>root@ubuntu-15:~/node-v0.12.4# touch helo_test.js
root@ubuntu-15:~/node-v0.12.4# vim helo_test.js
console.log(&#39;Hello World&#39;);
</code></pre><p>现在我们用Node的命令运行文件</p><pre><code>root@ubuntu-15:~/node-v0.12.4# node helo_test.js
Hello World
</code></pre><p>输出的结果证明我们已经成功的在Ubuntu 15.04安装好了Node.JS，同时我们也能运行JavaScript文件。</p><h3 id="_2-利用包管理器安装node-js" tabindex="-1">2) 利用包管理器安装Node.JS <a class="header-anchor" href="#_2-利用包管理器安装node-js" aria-label="Permalink to “2) 利用包管理器安装Node.JS”">​</a></h3><p>在Ubuntu下用包管理器安装Node.JS是非常简单的，只要增加NodeSource的个人软件包档案（PPA）即可。</p><p>我们将下面通过PPA安装Node.JS</p><h4 id="步骤1-用curl获取源代码" tabindex="-1">步骤1: 用curl获取源代码 <a class="header-anchor" href="#步骤1-用curl获取源代码" aria-label="Permalink to “步骤1: 用curl获取源代码”">​</a></h4><p>在我们用curl获取源代码之前，我们必须先升级操作系统，然后用curl命令获取NodeSource添加到本地仓库。</p><pre><code>root@ubuntu-15:~#apt-get update
root@ubuntu-15:~# curl -sL https://deb.nodesource.com/setup | sudo bash -
</code></pre><p>curl将运行以下任务</p><pre><code>## Installing the NodeSource Node.js 0.10 repo...
## Populating apt-get cache...
## Confirming &quot;vivid&quot; is supported...
## Adding the NodeSource signing key to your keyring...
## Creating apt sources list file for the NodeSource Node.js 0.10 repo...
## Running \`apt-get update\` for you...
Fetched 6,411 B in 5s (1,077 B/s)
Reading package lists... Done
## Run \`apt-get install nodejs\` (as root) to install Node.js 0.10 and npm
</code></pre><h4 id="步骤2-安装nodejs和npm" tabindex="-1">步骤2: 安装NodeJS和NPM <a class="header-anchor" href="#步骤2-安装nodejs和npm" aria-label="Permalink to “步骤2: 安装NodeJS和NPM”">​</a></h4><p>运行以上命令之后如果输出如上所示，我们可以用apt-get命令来安装NodeJS和NPM包。</p><pre><code>root@ubuntu-15:~# apt-get install nodejs
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/31.png" alt="NodeJS Install"></p><h4 id="步骤3-安装一些必备的工具" tabindex="-1">步骤3: 安装一些必备的工具 <a class="header-anchor" href="#步骤3-安装一些必备的工具" aria-label="Permalink to “步骤3: 安装一些必备的工具”">​</a></h4><p>通过以下命令来安装编译安装一些我们必需的本地插件。</p><pre><code>root@ubuntu-15:~# apt-get install -y build-essential
</code></pre><h4 id="通过node-js-shell来测试" tabindex="-1">通过Node.JS Shell来测试 <a class="header-anchor" href="#通过node-js-shell来测试" aria-label="Permalink to “通过Node.JS Shell来测试”">​</a></h4><p>测试Node.JS的步骤与之前使用源代码安装相似，通过以下node命令来确认Node.JS是否完全安装好:</p><pre><code>root@ubuntu-15:~# node
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
</code></pre><h4 id="使用nodejs应用进行简单的测试" tabindex="-1">使用NodeJS应用进行简单的测试 <a class="header-anchor" href="#使用nodejs应用进行简单的测试" aria-label="Permalink to “使用NodeJS应用进行简单的测试”">​</a></h4><p>REPL是一个Node.js的shell，任何有效的JavaScript代码都能在REPL下运行通过。所以让我们看看在Node.JS下的REPL是什么样子吧。</p><pre><code>root@ubuntu-15:~# node
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
</code></pre><p>以下是可以在REPL下使用的命令列表</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/4.png" alt="REPL Manual"></p><h4 id="使用nodejs的包管理器" tabindex="-1">使用NodeJS的包管理器 <a class="header-anchor" href="#使用nodejs的包管理器" aria-label="Permalink to “使用NodeJS的包管理器”">​</a></h4><p>NPM是一个提供给node脚本持续生命力的命令行工具，它能通过package.json来安装和管理依赖包。最开始从初始化命令init开始</p><pre><code>root@ubuntu-15:~# npm init
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/51.png" alt="NPM starting"></p><h3 id="_3-从github远程库安装node-js" tabindex="-1">3) 从Github远程库安装Node.JS <a class="header-anchor" href="#_3-从github远程库安装node-js" aria-label="Permalink to “3) 从Github远程库安装Node.JS”">​</a></h3><p>在这个方法中我们需要一些步骤来把Node.JS从Github的远程的仓库克隆到本地仓库目录</p><p>在开始克隆（clone）包到本地并且配制之前，我们要先安装以下依赖包</p><pre><code>root@ubuntu-15:~# apt-get install g++ curl make libssl-dev apache2-utils git-core
</code></pre><p>现在我们开始用git命令克隆到本地并且转到配制目录</p><pre><code>root@ubuntu-15:~# git clone git://github.com/ry/node.git
root@ubuntu-15:~# cd node/
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/61.png" alt="Git Clone NodeJS"></p><p>clone仓库之后，通过运行.config命令来编译生成完整的安装包。</p><pre><code>root@ubuntu-15:~# ./configure
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/7.png" alt="Configure Node"></p><p>运行make install命令之后耐心等待几分钟，程序将会安装好Node.JS。</p><pre><code>root@ubuntu-15:~/node# make install

root@ubuntu-15:~/node# node -v
v0.13.0-pre
</code></pre><h4 id="测试node-js" tabindex="-1">测试Node.JS <a class="header-anchor" href="#测试node-js" aria-label="Permalink to “测试Node.JS”">​</a></h4><pre><code>root@ubuntu-15:~/node# node
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
</code></pre><h3 id="_4-通过nvm安装node-js" tabindex="-1">4) 通过NVM安装Node.JS <a class="header-anchor" href="#_4-通过nvm安装node-js" aria-label="Permalink to “4) 通过NVM安装Node.JS”">​</a></h3><p>在最后一种方法中我们我们将用NVM来比较容易安装Node.JS。安装和配制Node.JS，这是最好的方法之一，它可以供我们选择要安装的版本。</p><p>在安装之前，请确认本机以前的安装包已经被卸载。</p><h4 id="步骤1-安装依赖包" tabindex="-1">步骤1: 安装依赖包 <a class="header-anchor" href="#步骤1-安装依赖包" aria-label="Permalink to “步骤1: 安装依赖包”">​</a></h4><p>首先升级Ubuntu Server系统，然后安装以下安装Node.JS和使用NVM所要依赖的包。用curl命令从git上下载NVM到本地仓库：</p><pre><code>root@ubuntu-15:~# apt-get install build-essential libssl-dev
root@ubuntu-15:~# curl https://raw.githubusercontent.com/creationix/nvm/v0.16.1/install.sh | sh
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/81.png" alt="NVM Curl"></p><h4 id="步骤2-修改home环境" tabindex="-1">步骤2: 修改Home环境 <a class="header-anchor" href="#步骤2-修改home环境" aria-label="Permalink to “步骤2: 修改Home环境”">​</a></h4><p>用curl从NVM下载必需的包到用户的home目录之后，我们需要修改bash的配置文件添加NVM，之后只要重新登录中断或者用如下命令更新即可。</p><pre><code>root@ubuntu-15:~# source ~/.profile
</code></pre><p>现在我们可以用NVM来设置默认的NVM的版本，或者用如下命令来指定之前版本：</p><pre><code>root@ubuntu-15:~# nvm ls
root@ubuntu-15:~# nvm alias default 0.12.4
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/91.png" alt="NVM Default"></p><h4 id="步骤3-使用nvm" tabindex="-1">步骤3: 使用NVM <a class="header-anchor" href="#步骤3-使用nvm" aria-label="Permalink to “步骤3: 使用NVM”">​</a></h4><p>我们已经通过NVM成功的安装了Node.JS，所以我们现在可以使用各种有用的命令。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/101.png" alt="NVM Manual"></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>现在我们已经准备好了在服务端安装Node.JS，你可以从我们说的四种方式中选择最合适你的方式在最新的Ubuntu 15.04上来安装Node.JS，安装好之后你就可以利用Node.JS来编写你的代码。</p><hr>`,88)),d("p",null,[e[1]||(e[1]=o("via: ",-1)),t(n,{href:"http://linoxide.com/ubuntu-how-to/setup-node-js-ubuntu-15-04-different-methods/"},{default:a(()=>[...e[0]||(e[0]=[o("http://linoxide.com/ubuntu-how-to/setup-node-js-ubuntu-15-04-different-methods/",-1)])]),_:1})]),d("p",null,[e[5]||(e[5]=o("作者：",-1)),t(n,{href:"http://linoxide.com/author/kashifs/"},{default:a(()=>[...e[2]||(e[2]=[o("Kashif Siddique",-1)])]),_:1}),e[6]||(e[6]=o(" 译者：",-1)),t(n,{href:"https://github.com/NearTan"},{default:a(()=>[...e[3]||(e[3]=[o("NearTan",-1)])]),_:1}),e[7]||(e[7]=o(" 校对：",-1)),t(n,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[o("wxy",-1)])]),_:1})]),d("p",null,[e[10]||(e[10]=o("本文由 ",-1)),t(n,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[o("LCTT",-1)])]),_:1}),e[11]||(e[11]=o(" 原创翻译，",-1)),t(n,{href:"https://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[o("Linux中国",-1)])]),_:1}),e[12]||(e[12]=o(" 荣誉推出",-1))])])}const x=r(s,[["render",h]]);export{J as __pageData,x as default};
