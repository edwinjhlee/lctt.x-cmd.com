import{_ as i,W as o,s as d,u as r,I as s,ah as l,w as a,Z as e,A as t}from"./chunks/framework.B4JzB-Td.js";import"./chunks/theme.Xs8fIzCW.js";const k=JSON.parse('{"title":"HTTPie：替代 Curl 和 Wget 的现代 HTTP 命令行客户端 | LCTT x X-CMD","titleTemplate":false,"description":"HTTPie：替代 Curl 和 Wget 的现代 HTTP 命令行客户端 | LCTT (201904) | X-CMD","frontmatter":{"pageClass":"x-blog","head":[["meta",{"name":"og:title","content":"HTTPie：替代 Curl 和 Wget 的现代 HTTP 命令行客户端 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"HTTPie：替代 Curl 和 Wget 的现代 HTTP 命令行客户端 | LCTT (201904) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201904/20190417 HTTPie - A Modern Command Line HTTP Client For Curl And Wget Alternative","title":"HTTPie：替代 Curl 和 Wget 的现代 HTTP 命令行客户端","tag":"201904"},"relativePath":"201904/20190417 HTTPie - A Modern Command Line HTTP Client For Curl And Wget Alternative.md","filePath":"[post].md"}'),c={name:"201904/20190417 HTTPie - A Modern Command Line HTTP Client For Curl And Wget Alternative.md"};function u(g,n,T,h,m,b){const p=o("Link");return r(),d("div",null,[n[39]||(n[39]=s("h1",{id:"httpie-替代-curl-和-wget-的现代-http-命令行客户端",tabindex:"-1"},[a("HTTPie：替代 Curl 和 Wget 的现代 HTTP 命令行客户端 "),s("a",{class:"header-anchor",href:"#httpie-替代-curl-和-wget-的现代-http-命令行客户端","aria-label":"Permalink to HTTPie：替代 Curl 和 Wget 的现代 HTTP 命令行客户端"},"​")],-1)),n[40]||(n[40]=s("p",null,[a("大多数时间我们会使用 "),s("code",null,"curl"),a(" 命令或是 "),s("code",null,"wget"),a(" 命令下载文件或者做其他事。")],-1)),s("p",null,[n[1]||(n[1]=a("我们以前曾写过 ")),e(p,{href:"https://www.2daygeek.com/best-4-command-line-download-managers-accelerators-for-linux/"},{default:t(()=>n[0]||(n[0]=[a("最佳命令行下载管理器")])),_:1}),n[2]||(n[2]=a(" 的文章。你可以点击相应的 URL 连接来浏览这些文章。"))]),s("ul",null,[s("li",null,[e(p,{href:"https://www.2daygeek.com/aria2-linux-command-line-download-utility-tool/"},{default:t(()=>n[3]||(n[3]=[a("aria2 – Linux 下的多协议命令行下载工具")])),_:1})]),s("li",null,[e(p,{href:"https://www.2daygeek.com/axel-linux-command-line-download-accelerator/"},{default:t(()=>n[4]||(n[4]=[a("Axel – Linux 下的轻量级命令行下载加速器")])),_:1})]),s("li",null,[e(p,{href:"https://www.2daygeek.com/wget-linux-command-line-download-utility-tool/"},{default:t(()=>n[5]||(n[5]=[a("Wget – Linux 下的标准命令行下载工具")])),_:1})]),s("li",null,[e(p,{href:"https://www.2daygeek.com/curl-linux-command-line-download-manager/"},{default:t(()=>n[6]||(n[6]=[a("curl – Linux 下的实用的命令行下载工具")])),_:1})])]),n[41]||(n[41]=l('<p>今天我们将讨论同样的话题。这个实用程序名为 HTTPie。</p><p>它是现代命令行 http 客户端，也是 <code>curl</code> 和 <code>wget</code> 命令的最佳替代品。</p><h3 id="什么是-httpie" tabindex="-1">什么是 HTTPie？ <a class="header-anchor" href="#什么是-httpie" aria-label="Permalink to 什么是 HTTPie？">​</a></h3><p>HTTPie (发音是 aitch-tee-tee-pie) 是一个 HTTP 命令行客户端。</p><p>HTTPie 工具是现代的 HTTP 命令行客户端，它能通过命令行界面与 Web 服务进行交互。</p><p>它提供一个简单的 <code>http</code> 命令，允许使用简单而自然的语法发送任意的 HTTP 请求，并会显示彩色的输出。</p><p>HTTPie 能用于测试、调试及与 HTTP 服务器交互。</p><h3 id="主要特点" tabindex="-1">主要特点 <a class="header-anchor" href="#主要特点" aria-label="Permalink to 主要特点">​</a></h3><ul><li>具表达力的和直观语法</li><li>格式化的及彩色化的终端输出</li><li>内置 JSON 支持</li><li>表单和文件上传</li><li>HTTPS、代理和认证</li><li>任意请求数据</li><li>自定义头部</li><li>持久化会话</li><li>类似 <code>wget</code> 的下载</li><li>支持 Python 2.7 和 3.x</li></ul><h3 id="在-linux-下如何安装-httpie" tabindex="-1">在 Linux 下如何安装 HTTPie <a class="header-anchor" href="#在-linux-下如何安装-httpie" aria-label="Permalink to 在 Linux 下如何安装 HTTPie">​</a></h3><p>大部分 Linux 发行版都提供了系统包管理器，可以用它来安装。</p>',11)),s("p",null,[n[8]||(n[8]=a("Fedora 系统，使用 ")),e(p,{href:"https://www.2daygeek.com/dnf-command-examples-manage-packages-fedora-system/"},{default:t(()=>n[7]||(n[7]=[a("DNF 命令")])),_:1}),n[9]||(n[9]=a(" 来安装 httpie："))]),n[42]||(n[42]=l('<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo dnf install httpie</span></span></code></pre></div>',1)),s("p",null,[n[12]||(n[12]=a("Debian/Ubuntu 系统，使用 ")),e(p,{href:"https://www.2daygeek.com/apt-get-apt-cache-command-examples-manage-packages-debian-ubuntu-systems/"},{default:t(()=>n[10]||(n[10]=[a("APT-GET 命令")])),_:1}),n[13]||(n[13]=a(" 或 ")),e(p,{href:"https://www.2daygeek.com/apt-command-examples-manage-packages-debian-ubuntu-systems/"},{default:t(()=>n[11]||(n[11]=[a("APT 命令")])),_:1}),n[14]||(n[14]=a(" 来安装 HTTPie。"))]),n[43]||(n[43]=l('<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo apt install httpie</span></span></code></pre></div>',1)),s("p",null,[n[16]||(n[16]=a("基于 Arch Linux 的系统，使用 ")),e(p,{href:"https://www.2daygeek.com/pacman-command-examples-manage-packages-arch-linux-system/"},{default:t(()=>n[15]||(n[15]=[a("Pacman 命令")])),_:1}),n[17]||(n[17]=a(" 来安装 HTTPie。"))]),n[44]||(n[44]=l('<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo pacman -S httpie</span></span></code></pre></div>',1)),s("p",null,[n[19]||(n[19]=a("RHEL/CentOS 的系统，使用 ")),e(p,{href:"https://www.2daygeek.com/yum-command-examples-manage-packages-rhel-centos-systems/"},{default:t(()=>n[18]||(n[18]=[a("YUM 命令")])),_:1}),n[20]||(n[20]=a(" 来安装 HTTPie。"))]),n[45]||(n[45]=l('<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo yum install httpie</span></span></code></pre></div>',1)),s("p",null,[n[22]||(n[22]=a("openSUSE Leap 系统，使用 ")),e(p,{href:"https://www.2daygeek.com/zypper-command-examples-manage-packages-opensuse-system/"},{default:t(()=>n[21]||(n[21]=[a("Zypper 命令")])),_:1}),n[23]||(n[23]=a(" 来安装 HTTPie。"))]),n[46]||(n[46]=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo zypper install httpie</span></span></code></pre></div><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to 用法">​</a></h3><h4 id="如何使用-httpie-请求-url" tabindex="-1">如何使用 HTTPie 请求 URL？ <a class="header-anchor" href="#如何使用-httpie-请求-url" aria-label="Permalink to 如何使用 HTTPie 请求 URL？">​</a></h4><p>HTTPie 的基本用法是将网站的 URL 作为参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># http 2daygeek.com</span></span>
<span class="line"><span>HTTP/1.1 301 Moved Permanently</span></span>
<span class="line"><span>CF-RAY: 4c4a618d0c02ce6d-LHR</span></span>
<span class="line"><span>Cache-Control: max-age=3600</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Date: Tue, 09 Apr 2019 06:21:28 GMT</span></span>
<span class="line"><span>Expires: Tue, 09 Apr 2019 07:21:28 GMT</span></span>
<span class="line"><span>Location: https://2daygeek.com/</span></span>
<span class="line"><span>Server: cloudflare</span></span>
<span class="line"><span>Transfer-Encoding: chunked</span></span>
<span class="line"><span>Vary: Accept-Encoding</span></span></code></pre></div><h4 id="如何使用-httpie-下载文件" tabindex="-1">如何使用 HTTPie 下载文件 <a class="header-anchor" href="#如何使用-httpie-下载文件" aria-label="Permalink to 如何使用 HTTPie 下载文件">​</a></h4><p>你可以使用带 <code>--download</code> 参数的 HTTPie 命令下载文件。类似于 <code>wget</code> 命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># http --download https://www.2daygeek.com/wp-content/uploads/2019/04/Anbox-Easy-Way-To-Run-Android-Apps-On-Linux.png</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Accept-Ranges: bytes</span></span>
<span class="line"><span>CF-Cache-Status: HIT</span></span>
<span class="line"><span>CF-RAY: 4c4a65d5ca360a66-LHR</span></span>
<span class="line"><span>Cache-Control: public, max-age=7200</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Content-Length: 32066</span></span>
<span class="line"><span>Content-Type: image/png</span></span>
<span class="line"><span>Date: Tue, 09 Apr 2019 06:24:23 GMT</span></span>
<span class="line"><span>Expect-CT: max-age=604800, report-uri=&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span></span>
<span class="line"><span>Expires: Tue, 09 Apr 2019 08:24:23 GMT</span></span>
<span class="line"><span>Last-Modified: Mon, 08 Apr 2019 04:54:25 GMT</span></span>
<span class="line"><span>Server: cloudflare</span></span>
<span class="line"><span>Set-Cookie: __cfduid=dd2034b2f95ae42047e082f59f2b964f71554791063; expires=Wed, 08-Apr-20 06:24:23 GMT; path=/; domain=.2daygeek.com; HttpOnly; Secure</span></span>
<span class="line"><span>Vary: Accept-Encoding</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Downloading 31.31 kB to &quot;Anbox-Easy-Way-To-Run-Android-Apps-On-Linux.png&quot;</span></span>
<span class="line"><span>Done. 31.31 kB in 0.01187s (2.58 MB/s)</span></span></code></pre></div><p>你还可以使用 <code>-o</code> 参数用不同的名称保存输出文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># http --download https://www.2daygeek.com/wp-content/uploads/2019/04/Anbox-Easy-Way-To-Run-Android-Apps-On-Linux.png -o Anbox-1.png</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Accept-Ranges: bytes</span></span>
<span class="line"><span>CF-Cache-Status: HIT</span></span>
<span class="line"><span>CF-RAY: 4c4a68194daa0a66-LHR</span></span>
<span class="line"><span>Cache-Control: public, max-age=7200</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Content-Length: 32066</span></span>
<span class="line"><span>Content-Type: image/png</span></span>
<span class="line"><span>Date: Tue, 09 Apr 2019 06:25:56 GMT</span></span>
<span class="line"><span>Expect-CT: max-age=604800, report-uri=&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span></span>
<span class="line"><span>Expires: Tue, 09 Apr 2019 08:25:56 GMT</span></span>
<span class="line"><span>Last-Modified: Mon, 08 Apr 2019 04:54:25 GMT</span></span>
<span class="line"><span>Server: cloudflare</span></span>
<span class="line"><span>Set-Cookie: __cfduid=d3eea753081690f9a2d36495a74407dd71554791156; expires=Wed, 08-Apr-20 06:25:56 GMT; path=/; domain=.2daygeek.com; HttpOnly; Secure</span></span>
<span class="line"><span>Vary: Accept-Encoding</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Downloading 31.31 kB to &quot;Anbox-1.png&quot;</span></span>
<span class="line"><span>Done. 31.31 kB in 0.01551s (1.97 MB/s)</span></span></code></pre></div><h4 id="如何使用-httpie-恢复部分下载" tabindex="-1">如何使用 HTTPie 恢复部分下载？ <a class="header-anchor" href="#如何使用-httpie-恢复部分下载" aria-label="Permalink to 如何使用 HTTPie 恢复部分下载？">​</a></h4><p>你可以使用带 <code>-c</code> 参数的 HTTPie 继续下载。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># http --download --continue https://speed.hetzner.de/100MB.bin -o 100MB.bin</span></span>
<span class="line"><span>HTTP/1.1 206 Partial Content</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Content-Length: 100442112</span></span>
<span class="line"><span>Content-Range: bytes 4415488-104857599/104857600</span></span>
<span class="line"><span>Content-Type: application/octet-stream</span></span>
<span class="line"><span>Date: Tue, 09 Apr 2019 06:32:52 GMT</span></span>
<span class="line"><span>ETag: &quot;5253f0fd-6400000&quot;</span></span>
<span class="line"><span>Last-Modified: Tue, 08 Oct 2013 11:48:13 GMT</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>Strict-Transport-Security: max-age=15768000; includeSubDomains</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Downloading 100.00 MB to &quot;100MB.bin&quot;</span></span>
<span class="line"><span> |  24.14 %   24.14 MB    1.12 MB/s  0:01:07 ETA^C</span></span></code></pre></div><p>你根据下面的输出验证是否同一个文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[email protected]:/var/log# ls -lhtr 100MB.bin</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 25M Apr  9 01:33 100MB.bin</span></span></code></pre></div><h4 id="如何使用-httpie-上传文件" tabindex="-1">如何使用 HTTPie 上传文件？ <a class="header-anchor" href="#如何使用-httpie-上传文件" aria-label="Permalink to 如何使用 HTTPie 上传文件？">​</a></h4><p>你可以通过使用带有小于号 <code>&lt;</code> 的 HTTPie 命令上传文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ http https://transfer.sh &lt; Anbox-1.png</span></span></code></pre></div><h4 id="如何使用带有重定向符号-下载文件" tabindex="-1">如何使用带有重定向符号 &gt; 下载文件？ <a class="header-anchor" href="#如何使用带有重定向符号-下载文件" aria-label="Permalink to 如何使用带有重定向符号 &gt; 下载文件？">​</a></h4><p>你可以使用带有重定向 <code>&gt;</code> 符号的 HTTPie 命令下载文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># http https://www.2daygeek.com/wp-content/uploads/2019/03/How-To-Install-And-Enable-Flatpak-Support-On-Linux-1.png &gt; Flatpak.png</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ls -ltrh Flatpak.png</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 47K Apr  9 01:44 Flatpak.png</span></span></code></pre></div><h4 id="发送一个-http-get-请求" tabindex="-1">发送一个 HTTP GET 请求？ <a class="header-anchor" href="#发送一个-http-get-请求" aria-label="Permalink to 发送一个 HTTP GET 请求？">​</a></h4><p>您可以在请求中发送 HTTP GET 方法。GET 方法会使用给定的 URI，从给定服务器检索信息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># http GET httpie.org</span></span>
<span class="line"><span>HTTP/1.1 301 Moved Permanently</span></span>
<span class="line"><span>CF-RAY: 4c4a83a3f90dcbe6-SIN</span></span>
<span class="line"><span>Cache-Control: max-age=3600</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Date: Tue, 09 Apr 2019 06:44:44 GMT</span></span>
<span class="line"><span>Expires: Tue, 09 Apr 2019 07:44:44 GMT</span></span>
<span class="line"><span>Location: https://httpie.org/</span></span>
<span class="line"><span>Server: cloudflare</span></span>
<span class="line"><span>Transfer-Encoding: chunked</span></span>
<span class="line"><span>Vary: Accept-Encoding</span></span></code></pre></div><h4 id="提交表单" tabindex="-1">提交表单? <a class="header-anchor" href="#提交表单" aria-label="Permalink to 提交表单?">​</a></h4><p>使用以下格式提交表单。POST 请求用于向服务器发送数据，例如客户信息、文件上传等。要使用 HTML 表单。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># http -f POST Ubuntu18.2daygeek.com hello=&#39;World&#39;</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Accept-Ranges: bytes</span></span>
<span class="line"><span>Connection: Keep-Alive</span></span>
<span class="line"><span>Content-Encoding: gzip</span></span>
<span class="line"><span>Content-Length: 3138</span></span>
<span class="line"><span>Content-Type: text/html</span></span>
<span class="line"><span>Date: Tue, 09 Apr 2019 06:48:12 GMT</span></span>
<span class="line"><span>ETag: &quot;2aa6-5844bf1b047fc-gzip&quot;</span></span>
<span class="line"><span>Keep-Alive: timeout=5, max=100</span></span>
<span class="line"><span>Last-Modified: Sun, 17 Mar 2019 15:29:55 GMT</span></span>
<span class="line"><span>Server: Apache/2.4.29 (Ubuntu)</span></span>
<span class="line"><span>Vary: Accept-Encoding</span></span></code></pre></div><p>运行下面的指令以查看正在发送的请求。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># http -v Ubuntu18.2daygeek.com</span></span>
<span class="line"><span>GET / HTTP/1.1</span></span>
<span class="line"><span>Accept: */*</span></span>
<span class="line"><span>Accept-Encoding: gzip, deflate</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Host: ubuntu18.2daygeek.com</span></span>
<span class="line"><span>User-Agent: HTTPie/0.9.8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hello=World</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Accept-Ranges: bytes</span></span>
<span class="line"><span>Connection: Keep-Alive</span></span>
<span class="line"><span>Content-Encoding: gzip</span></span>
<span class="line"><span>Content-Length: 3138</span></span>
<span class="line"><span>Content-Type: text/html</span></span>
<span class="line"><span>Date: Tue, 09 Apr 2019 06:48:30 GMT</span></span>
<span class="line"><span>ETag: &quot;2aa6-5844bf1b047fc-gzip&quot;</span></span>
<span class="line"><span>Keep-Alive: timeout=5, max=100</span></span>
<span class="line"><span>Last-Modified: Sun, 17 Mar 2019 15:29:55 GMT</span></span>
<span class="line"><span>Server: Apache/2.4.29 (Ubuntu)</span></span>
<span class="line"><span>Vary: Accept-Encoding</span></span></code></pre></div><h4 id="http-认证" tabindex="-1">HTTP 认证？ <a class="header-anchor" href="#http-认证" aria-label="Permalink to HTTP 认证？">​</a></h4><p>当前支持的身份验证认证方案是基本认证（Basic）和摘要验证（Digest）。</p><p>基本认证：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ http -a username:password example.org</span></span></code></pre></div><p>摘要验证：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ http -A digest -a username:password example.org</span></span></code></pre></div><p>提示输入密码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ http -a username example.org</span></span></code></pre></div><hr>`,38)),s("p",null,[n[25]||(n[25]=a("via: ")),e(p,{href:"https://www.2daygeek.com/httpie-curl-wget-alternative-http-client-linux/"},{default:t(()=>n[24]||(n[24]=[a("https://www.2daygeek.com/httpie-curl-wget-alternative-http-client-linux/")])),_:1})]),s("p",null,[n[30]||(n[30]=a("作者：")),e(p,{href:"https://www.2daygeek.com/author/magesh/"},{default:t(()=>n[26]||(n[26]=[a("Magesh Maruthamuthu")])),_:1}),n[31]||(n[31]=a(" 选题：")),e(p,{href:"https://github.com/lujun9972"},{default:t(()=>n[27]||(n[27]=[a("lujun9972")])),_:1}),n[32]||(n[32]=a(" 译者：")),e(p,{href:"https://github.com/zgj1024"},{default:t(()=>n[28]||(n[28]=[a("zgj1024")])),_:1}),n[33]||(n[33]=a(" 校对：")),e(p,{href:"https://github.com/wxy"},{default:t(()=>n[29]||(n[29]=[a("wxy")])),_:1})]),s("p",null,[n[36]||(n[36]=a("本文由 ")),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>n[34]||(n[34]=[a("LCTT")])),_:1}),n[37]||(n[37]=a(" 原创编译，")),e(p,{href:"https://linux.cn/"},{default:t(()=>n[35]||(n[35]=[a("Linux中国")])),_:1}),n[38]||(n[38]=a(" 荣誉推出"))])])}const x=i(c,[["render",u]]);export{k as __pageData,x as default};
