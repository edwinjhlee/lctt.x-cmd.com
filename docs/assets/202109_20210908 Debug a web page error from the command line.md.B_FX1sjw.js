import{_ as l,a0 as o,w as i,s as r,ao as c,I as t,x as s,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"从命令行使用 wget 调试网页错误 | LCTT x X-CMD","titleTemplate":false,"description":"从命令行使用 wget 调试网页错误 | LCTT (202109) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"从命令行使用 wget 调试网页错误 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"从命令行使用 wget 调试网页错误 | LCTT (202109) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202109/20210908 Debug a web page error from the command line","title":"从命令行使用 wget 调试网页错误","tag":"202109","desc":""},"relativePath":"202109/20210908 Debug a web page error from the command line.md","filePath":"[post].md"}'),d={name:"202109/20210908 Debug a web page error from the command line.md"};function u(g,n,m,f,h,T){const a=o("Link");return i(),r("div",null,[n[15]||(n[15]=c(`<h1 id="从命令行使用-wget-调试网页错误" tabindex="-1">从命令行使用 wget 调试网页错误 <a class="header-anchor" href="#从命令行使用-wget-调试网页错误" aria-label="Permalink to “从命令行使用 wget 调试网页错误”">​</a></h1><blockquote><p>调试 Web 服务器的一种方法是使用 wget 命令行程序。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202109/17/225018elcip4pii4qcknir.jpg" alt=""></p><p>有时在管理一个网站时，事情会被搞得一团糟。你可能会删除一些陈旧的内容，用重定向到其他页面来代替。后来，在做了其他改动后，你发现一些网页变得完全无法访问了。你可能会在浏览器中看到一个错误：“该页面没有正确重定向”，并建议你检查你的 cookie。</p><p><img src="https://opensource.com/sites/default/files/uploads/firefox-redirect-loop.png" alt="Redirect loop example in Firefox" title="Redirect loop example in Firefox"></p><p>调试这种情况的一个方法是使用 <code>wget</code> 命令行程序，使用 <code>-S</code> 选项来显示所有的服务器响应。当使用 <code>wget</code> 进行调试时，我也喜欢使用 <code>-O</code> 选项将输出保存到一些临时文件中，以备以后需要查看其内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wget -O /tmp/test.html -S http://10.0.0.11/announce/</span></span>
<span class="line"><span>--2021-08-24 17:09:49--  http://10.0.0.11/announce/</span></span>
<span class="line"><span>Connecting to 10.0.0.11:80... connected.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP request sent, awaiting response... </span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 302 Found</span></span>
<span class="line"><span>Date: Tue, 24 Aug 2021 22:09:49 GMT</span></span>
<span class="line"><span>Server: Apache/2.4.48 (Fedora)</span></span>
<span class="line"><span>X-Powered-By: PHP/7.4.21</span></span>
<span class="line"><span>Location: http://10.0.0.11/assets/</span></span>
<span class="line"><span>Content-Length: 0</span></span>
<span class="line"><span>Keep-Alive: timeout=5, max=100</span></span>
<span class="line"><span>Connection: Keep-Alive</span></span>
<span class="line"><span>Content-Type: text/html; charset=UTF-8</span></span>
<span class="line"><span>Location: http://10.0.0.11/assets/ [following]</span></span>
<span class="line"><span>--2021-08-24 17:09:49--  http://10.0.0.11/assets/</span></span>
<span class="line"><span>Reusing existing connection to 10.0.0.11:80.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP request sent, awaiting response... </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>HTTP/1.1 302 Found</span></span>
<span class="line"><span>Date: Tue, 24 Aug 2021 22:09:49 GMT</span></span>
<span class="line"><span>Server: Apache/2.4.48 (Fedora)</span></span>
<span class="line"><span>X-Powered-By: PHP/7.4.21</span></span>
<span class="line"><span>Location: http://10.0.0.11/announce/</span></span>
<span class="line"><span>Content-Length: 0</span></span>
<span class="line"><span>Keep-Alive: timeout=5, max=99</span></span>
<span class="line"><span>Connection: Keep-Alive</span></span>
<span class="line"><span>Content-Type: text/html; charset=UTF-8</span></span>
<span class="line"><span>Location: http://10.0.0.11/announce/ [following]</span></span>
<span class="line"><span>--2021-08-24 17:09:49--  http://10.0.0.11/announce/</span></span>
<span class="line"><span>Reusing existing connection to 10.0.0.11:80.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>20 redirections exceeded.</span></span></code></pre></div><p>我在这个输出中省略了很多重复的内容。通过阅读服务器的响应，你可以看到 <code>http://10.0.0.11/announce/</code> 立即重定向到 <code>http://10.0.0.11/assets/</code>，然后又重定向到 <code>http://10.0.0.11/announce/</code>。以此类推。这是一个无休止的循环，<code>wget</code> 将在 20 次重定向后退出。但有了这些调试信息，你可以修复重定向，避免循环。</p><hr>`,9)),t("p",null,[n[1]||(n[1]=s("via: ",-1)),e(a,{href:"https://opensource.com/article/21/9/wget-debug-web-server"},{default:p(()=>[...n[0]||(n[0]=[s("https://opensource.com/article/21/9/wget-debug-web-server",-1)])]),_:1})]),t("p",null,[n[6]||(n[6]=s("作者：",-1)),e(a,{href:"https://opensource.com/users/jim-hall"},{default:p(()=>[...n[2]||(n[2]=[s("Jim Hall",-1)])]),_:1}),n[7]||(n[7]=s(" 选题：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...n[3]||(n[3]=[s("lujun9972",-1)])]),_:1}),n[8]||(n[8]=s(" 译者：",-1)),e(a,{href:"https://github.com/geekpi"},{default:p(()=>[...n[4]||(n[4]=[s("geekpi",-1)])]),_:1}),n[9]||(n[9]=s(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...n[5]||(n[5]=[s("wxy",-1)])]),_:1})]),t("p",null,[n[12]||(n[12]=s("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...n[10]||(n[10]=[s("LCTT",-1)])]),_:1}),n[13]||(n[13]=s(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...n[11]||(n[11]=[s("Linux中国",-1)])]),_:1}),n[14]||(n[14]=s(" 荣誉推出",-1))])])}const C=l(d,[["render",u]]);export{x as __pageData,C as default};
