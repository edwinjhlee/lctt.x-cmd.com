import{_ as n,a0 as a,w as i,s as d,ao as l,I as s,x as t,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"將 Tor socks 轉換成 http 代理 | LCTT x X-CMD","titleTemplate":false,"description":"將 Tor socks 轉換成 http 代理 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"將 Tor socks 轉換成 http 代理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"將 Tor socks 轉換成 http 代理 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151222 Turn Tor socks to http","title":"將 Tor socks 轉換成 http 代理","tag":"201601","desc":""},"relativePath":"201601/20151222 Turn Tor socks to http.md","filePath":"[post].md"}'),c={name:"201601/20151222 Turn Tor socks to http.md"};function T(h,o,x,u,f,k){const r=a("Link");return i(),d("div",null,[o[13]||(o[13]=l(`<h1 id="將-tor-socks-轉換成-http-代理" tabindex="-1">將 Tor socks 轉換成 http 代理 <a class="header-anchor" href="#將-tor-socks-轉換成-http-代理" aria-label="Permalink to “將 Tor socks 轉換成 http 代理”">​</a></h1><p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2015/12/tor-593x445.jpg" alt=""></p><p>你可以通過不同的 Tor 工具來使用 Tor 服務，如 Tor 瀏覽器、Foxyproxy 和其它東西，像 wget 和 aria2 這樣的下載管理器不能直接使用 Tor socks 開始匿名下載，因此我們需要一些工具來將 Tor socks 轉換成 http 代理，這樣就能用它來下載了。</p><p><strong>注意</strong>：本教程基於 Debian ，其他發行版會有些不同，因此如果你的發行版是基於 Debian 的，就可以直接使用下面的配置了。</p><h3 id="polipo" tabindex="-1">Polipo <a class="header-anchor" href="#polipo" aria-label="Permalink to “Polipo”">​</a></h3><p>這個服務會使用 8123 端口和 127.0.0.1 的 IP 地址，使用下面的命令來在計算機上安裝 Polipo：</p><pre><code>sudo apt install polipo
</code></pre><p>現在使用如下命令打開 Polipo 的配置文件：</p><pre><code>sudo nano /etc/polipo/config
</code></pre><p>在文件最後加入下面的行：</p><pre><code>proxyAddress = &quot;::0&quot;
allowedClients = 192.168.1.0/24
socksParentProxy = &quot;localhost:9050&quot;
socksProxyType = socks5
</code></pre><p>用如下的命令來重啓 Polipo：</p><pre><code>sudo service polipo restart
</code></pre><p>現在 Polipo 已經安裝好了！在匿名的世界裏做你想做的吧！下面是使用的例子：</p><pre><code>pdmt -l &quot;link&quot; -i 127.0.01 -p 8123
</code></pre><p>通過上面的命令 PDMT（Persian 下載器終端）會匿名地下載你的文件。</p><h3 id="proxychains" tabindex="-1">Proxychains <a class="header-anchor" href="#proxychains" aria-label="Permalink to “Proxychains”">​</a></h3><p>在此服務中你可以設置使用 Tor 或者 Lantern 代理，但是在使用上它和 Polipo 和 Privoxy 有點不同，它不需要使用任何端口！使用下面的命令來安裝：</p><pre><code>sudo apt install proxychains
</code></pre><p>用這條命令來打開配置文件：</p><pre><code>sudo nano /etc/proxychains.conf
</code></pre><p>現在添加下面的代碼到文件底部，這裏是 Tor 的端口和 IP：</p><pre><code>socks5 127.0.0.1 9050
</code></pre><p>如果你在命令的前面加上“proxychains”並運行，它就能通過 Tor 代理來運行：</p><pre><code>proxychains firefoxt
proxychains aria2c
proxychains wget
</code></pre><h3 id="privoxy" tabindex="-1">Privoxy <a class="header-anchor" href="#privoxy" aria-label="Permalink to “Privoxy”">​</a></h3><p>Privoxy 使用 8118 端口，可以很輕鬆地通過 privoxy 包來安裝：</p><pre><code>sudo apt install privoxy
</code></pre><p>我們現在要修改配置文件：</p><pre><code>sudo nano /etc/pivoxy/config
</code></pre><p>在文件底部加入下面的行：</p><pre><code>forward-socks5 / 127.0.0.1:9050  .
forward-socks4a / 127.0.0.1:9050 .
forward-socks5t             /     127.0.0.1:9050 .
forward         192.168.*.*/     .
forward            10.*.*.*/     .
forward           127.*.*.*/     .
forward           localhost/     .
</code></pre><p>重啓服務：</p><pre><code>sudo service privoxy restart
</code></pre><p>服務已經好了！端口是 8118，IP 是 127.0.0.1，就盡情使用吧！</p><hr>`,36)),s("p",null,[o[1]||(o[1]=t("via: ",-1)),e(r,{href:"http://www.unixmen.com/turn-tor-socks-http/"},{default:p(()=>[...o[0]||(o[0]=[t("http://www.unixmen.com/turn-tor-socks-http/",-1)])]),_:1})]),s("p",null,[o[5]||(o[5]=t("作者：",-1)),e(r,{href:"http://www.unixmen.com/author/hossein/"},{default:p(()=>[...o[2]||(o[2]=[t("Hossein heydari",-1)])]),_:1}),o[6]||(o[6]=t(" 譯者：",-1)),e(r,{href:"https://github.com/geekpi"},{default:p(()=>[...o[3]||(o[3]=[t("geekpi",-1)])]),_:1}),o[7]||(o[7]=t(" 校對：",-1)),e(r,{href:"https://github.com/wxy"},{default:p(()=>[...o[4]||(o[4]=[t("wxy",-1)])]),_:1})]),s("p",null,[o[10]||(o[10]=t("本文由 ",-1)),e(r,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...o[8]||(o[8]=[t("LCTT",-1)])]),_:1}),o[11]||(o[11]=t(" 原創編譯，",-1)),e(r,{href:"https://linux.cn/"},{default:p(()=>[...o[9]||(o[9]=[t("Linux中國",-1)])]),_:1}),o[12]||(o[12]=t(" 榮譽推出",-1))])])}const w=n(c,[["render",T]]);export{y as __pageData,w as default};
