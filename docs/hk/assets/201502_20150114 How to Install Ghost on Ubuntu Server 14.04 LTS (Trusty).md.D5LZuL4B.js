import{_ as a,a0 as u,w as d,s as p,ao as l,I as n,x as e,a1 as s,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"如何在Ubuntu Server 14.04 LTS(Trusty) 上安裝Ghost | LCTT x X-CMD","titleTemplate":false,"description":"如何在Ubuntu Server 14.04 LTS(Trusty) 上安裝Ghost | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Ubuntu Server 14.04 LTS(Trusty) 上安裝Ghost | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Ubuntu Server 14.04 LTS(Trusty) 上安裝Ghost | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150114 How to Install Ghost on Ubuntu Server 14.04 LTS (Trusty)","title":"如何在Ubuntu Server 14.04 LTS(Trusty) 上安裝Ghost","tag":"201502","desc":""},"relativePath":"201502/20150114 How to Install Ghost on Ubuntu Server 14.04 LTS (Trusty).md","filePath":"[post].md"}'),i={name:"201502/20150114 How to Install Ghost on Ubuntu Server 14.04 LTS (Trusty).md"};function h(T,t,g,b,m,S){const o=u("Link");return d(),p("div",null,[t[13]||(t[13]=l(`<h1 id="如何在ubuntu-server-14-04-lts-trusty-上安裝ghost" tabindex="-1">如何在Ubuntu Server 14.04 LTS(Trusty) 上安裝Ghost <a class="header-anchor" href="#如何在ubuntu-server-14-04-lts-trusty-上安裝ghost" aria-label="Permalink to “如何在Ubuntu Server 14.04 LTS(Trusty) 上安裝Ghost”">​</a></h1><p>今天我們將會在Ubuntu Server 14.04 LTS (Trusty)上安裝一個Blog平台Ghost。</p><p>Ghost是一款設計優美的發佈平台，很容易使用且對任何人都免費。它是免費的開源軟件（FOSS），它的源碼在Github上。截至2015年1月（LCTT 譯註：原文為2014，應為2015），它的界面很簡單還有分析面板。編輯使用的是很便利的分屏顯示。</p><p>因此有了這篇步驟明確的在Ubuntu Server上安裝Ghost的教程：</p><h3 id="_1-升級ubuntu" tabindex="-1">1. 升級Ubuntu <a class="header-anchor" href="#_1-升級ubuntu" aria-label="Permalink to “1. 升級Ubuntu”">​</a></h3><p>第一步是運行Ubuntu軟件升級並安裝一系列需要的額外包。</p><pre><code>sudo apt-get update
sudo apt-get upgrade -y
sudo aptitude install -y build-essential zip vim wget
</code></pre><h3 id="_2-下載並安裝-node-js-源碼" tabindex="-1">2. 下載並安裝 Node.js 源碼 <a class="header-anchor" href="#_2-下載並安裝-node-js-源碼" aria-label="Permalink to “2. 下載並安裝 Node.js 源碼”">​</a></h3><pre><code>wget http://nodejs.org/dist/node-latest.tar.gz
tar -xzf node-latest.tar.gz
cd node-v*
</code></pre><p>現在，我們使用下面的命令安裝Node.js：</p><pre><code>./configure
make
sudo make install
</code></pre><h3 id="_3-下載並安裝ghost" tabindex="-1">3. 下載並安裝Ghost <a class="header-anchor" href="#_3-下載並安裝ghost" aria-label="Permalink to “3. 下載並安裝Ghost”">​</a></h3><pre><code>sudo mkdir -p /var/www/
cd /var/www/
sudo wget https://ghost.org/zip/ghost-latest.zip
sudo unzip -d ghost ghost-latest.zip
cd ghost/
sudo npm install --production
</code></pre><h3 id="_4-配置ghost" tabindex="-1">4. 配置Ghost <a class="header-anchor" href="#_4-配置ghost" aria-label="Permalink to “4. 配置Ghost”">​</a></h3><pre><code>sudo nano config.example.js
</code></pre><p>在“Production”字段，將：</p><pre><code>host: &#39;127.0.0.1&#39;,
</code></pre><p>修改成</p><pre><code>host: &#39;0.0.0.0&#39;,
</code></pre><h3 id="創建ghost用户" tabindex="-1">創建Ghost用户 <a class="header-anchor" href="#創建ghost用户" aria-label="Permalink to “創建Ghost用户”">​</a></h3><pre><code>sudo adduser --shell /bin/bash --gecos &#39;Ghost application&#39; ghost
sudo chown -R ghost:ghost /var/www/ghost/
</code></pre><p>現在啓動Ghost，你需要以“ghost”用户登錄。</p><pre><code>su - ghost
cd /var/www/ghost/
</code></pre><p>現在，你已經以“ghost”用户登錄，並可啓動Ghost：</p><pre><code>npm start --production
</code></pre><hr>`,26)),n("p",null,[t[1]||(t[1]=e("via: ",-1)),s(o,{href:"http://linoxide.com/ubuntu-how-to/install-ghost-ubuntu-server-14-04/"},{default:r(()=>[...t[0]||(t[0]=[e("http://linoxide.com/ubuntu-how-to/install-ghost-ubuntu-server-14-04/",-1)])]),_:1})]),n("p",null,[t[5]||(t[5]=e("作者：",-1)),s(o,{href:"http://linoxide.com/author/arunp/"},{default:r(()=>[...t[2]||(t[2]=[e("Arun Pyasi",-1)])]),_:1}),t[6]||(t[6]=e(" 譯者：",-1)),s(o,{href:"https://github.com/geekpi"},{default:r(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校對：",-1)),s(o,{href:"https://github.com/wxy"},{default:r(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),n("p",null,[t[10]||(t[10]=e("本文由 ",-1)),s(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原創翻譯，",-1)),s(o,{href:"http://linux.cn/"},{default:r(()=>[...t[9]||(t[9]=[e("Linux中國",-1)])]),_:1}),t[12]||(t[12]=e(" 榮譽推出",-1))])])}const _=a(i,[["render",h]]);export{w as __pageData,_ as default};
