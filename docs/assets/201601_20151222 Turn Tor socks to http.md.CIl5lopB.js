import{_ as n,W as a,s as i,u as d,ah as l,I as s,w as t,Z as e,A as p}from"./chunks/framework.DRqsSc0o.js";import"./chunks/theme.DlTh90wK.js";const y=JSON.parse('{"title":"将 Tor socks 转换成 http 代理 | LCTT x X-CMD","titleTemplate":false,"description":"将 Tor socks 转换成 http 代理 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"将 Tor socks 转换成 http 代理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"将 Tor socks 转换成 http 代理 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151222 Turn Tor socks to http","title":"将 Tor socks 转换成 http 代理","tag":"201601"},"relativePath":"201601/20151222 Turn Tor socks to http.md","filePath":"[post].md"}'),c={name:"201601/20151222 Turn Tor socks to http.md"};function h(T,o,u,x,f,k){const r=a("Link");return d(),i("div",null,[o[13]||(o[13]=l(`<h1 id="将-tor-socks-转换成-http-代理" tabindex="-1">将 Tor socks 转换成 http 代理 <a class="header-anchor" href="#将-tor-socks-转换成-http-代理" aria-label="Permalink to 将 Tor socks 转换成 http 代理">​</a></h1><p><img src="http://1426826955.rsc.cdn77.org/wp-content/uploads/2015/12/tor-593x445.jpg" alt=""></p><p>你可以通过不同的 Tor 工具来使用 Tor 服务，如 Tor 浏览器、Foxyproxy 和其它东西，像 wget 和 aria2 这样的下载管理器不能直接使用 Tor socks 开始匿名下载，因此我们需要一些工具来将 Tor socks 转换成 http 代理，这样就能用它来下载了。</p><p><strong>注意</strong>：本教程基于 Debian ，其他发行版会有些不同，因此如果你的发行版是基于 Debian 的，就可以直接使用下面的配置了。</p><h3 id="polipo" tabindex="-1">Polipo <a class="header-anchor" href="#polipo" aria-label="Permalink to Polipo">​</a></h3><p>这个服务会使用 8123 端口和 127.0.0.1 的 IP 地址，使用下面的命令来在计算机上安装 Polipo：</p><pre><code>sudo apt install polipo
</code></pre><p>现在使用如下命令打开 Polipo 的配置文件：</p><pre><code>sudo nano /etc/polipo/config
</code></pre><p>在文件最后加入下面的行：</p><pre><code>proxyAddress = &quot;::0&quot;
allowedClients = 192.168.1.0/24
socksParentProxy = &quot;localhost:9050&quot;
socksProxyType = socks5
</code></pre><p>用如下的命令来重启 Polipo：</p><pre><code>sudo service polipo restart
</code></pre><p>现在 Polipo 已经安装好了！在匿名的世界里做你想做的吧！下面是使用的例子：</p><pre><code>pdmt -l &quot;link&quot; -i 127.0.01 -p 8123
</code></pre><p>通过上面的命令 PDMT（Persian 下载器终端）会匿名地下载你的文件。</p><h3 id="proxychains" tabindex="-1">Proxychains <a class="header-anchor" href="#proxychains" aria-label="Permalink to Proxychains">​</a></h3><p>在此服务中你可以设置使用 Tor 或者 Lantern 代理，但是在使用上它和 Polipo 和 Privoxy 有点不同，它不需要使用任何端口！使用下面的命令来安装：</p><pre><code>sudo apt install proxychains
</code></pre><p>用这条命令来打开配置文件：</p><pre><code>sudo nano /etc/proxychains.conf
</code></pre><p>现在添加下面的代码到文件底部，这里是 Tor 的端口和 IP：</p><pre><code>socks5 127.0.0.1 9050
</code></pre><p>如果你在命令的前面加上“proxychains”并运行，它就能通过 Tor 代理来运行：</p><pre><code>proxychains firefoxt
proxychains aria2c
proxychains wget
</code></pre><h3 id="privoxy" tabindex="-1">Privoxy <a class="header-anchor" href="#privoxy" aria-label="Permalink to Privoxy">​</a></h3><p>Privoxy 使用 8118 端口，可以很轻松地通过 privoxy 包来安装：</p><pre><code>sudo apt install privoxy
</code></pre><p>我们现在要修改配置文件：</p><pre><code>sudo nano /etc/pivoxy/config
</code></pre><p>在文件底部加入下面的行：</p><pre><code>forward-socks5 / 127.0.0.1:9050  .
forward-socks4a / 127.0.0.1:9050 .
forward-socks5t             /     127.0.0.1:9050 .
forward         192.168.*.*/     .
forward            10.*.*.*/     .
forward           127.*.*.*/     .
forward           localhost/     .
</code></pre><p>重启服务：</p><pre><code>sudo service privoxy restart
</code></pre><p>服务已经好了！端口是 8118，IP 是 127.0.0.1，就尽情使用吧！</p><hr>`,36)),s("p",null,[o[1]||(o[1]=t("via: ")),e(r,{href:"http://www.unixmen.com/turn-tor-socks-http/"},{default:p(()=>o[0]||(o[0]=[t("http://www.unixmen.com/turn-tor-socks-http/")])),_:1})]),s("p",null,[o[5]||(o[5]=t("作者：")),e(r,{href:"http://www.unixmen.com/author/hossein/"},{default:p(()=>o[2]||(o[2]=[t("Hossein heydari")])),_:1}),o[6]||(o[6]=t(" 译者：")),e(r,{href:"https://github.com/geekpi"},{default:p(()=>o[3]||(o[3]=[t("geekpi")])),_:1}),o[7]||(o[7]=t(" 校对：")),e(r,{href:"https://github.com/wxy"},{default:p(()=>o[4]||(o[4]=[t("wxy")])),_:1})]),s("p",null,[o[10]||(o[10]=t("本文由 ")),e(r,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>o[8]||(o[8]=[t("LCTT")])),_:1}),o[11]||(o[11]=t(" 原创编译，")),e(r,{href:"https://linux.cn/"},{default:p(()=>o[9]||(o[9]=[t("Linux中国")])),_:1}),o[12]||(o[12]=t(" 荣誉推出"))])])}const w=n(c,[["render",h]]);export{y as __pageData,w as default};
