import{_ as l,a0 as o,w as i,s as r,ao as c,I as t,x as s,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"從命令列使用 wget 調試網頁錯誤 | LCTT x X-CMD","titleTemplate":false,"description":"從命令列使用 wget 調試網頁錯誤 | LCTT (202109) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"從命令列使用 wget 調試網頁錯誤 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"從命令列使用 wget 調試網頁錯誤 | LCTT (202109) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202109/20210908 Debug a web page error from the command line","title":"從命令列使用 wget 調試網頁錯誤","tag":"202109","desc":""},"relativePath":"202109/20210908 Debug a web page error from the command line.md","filePath":"[post].md"}'),d={name:"202109/20210908 Debug a web page error from the command line.md"};function u(g,n,m,f,h,T){const a=o("Link");return i(),r("div",null,[n[15]||(n[15]=c(`<h1 id="從命令列使用-wget-調試網頁錯誤" tabindex="-1">從命令列使用 wget 調試網頁錯誤 <a class="header-anchor" href="#從命令列使用-wget-調試網頁錯誤" aria-label="Permalink to “從命令列使用 wget 調試網頁錯誤”">​</a></h1><blockquote><p>調試 Web 服務器的一種方法是使用 wget 命令列程序。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202109/17/225018elcip4pii4qcknir.jpg" alt=""></p><p>有時在管理一個網站時，事情會被搞得一團糟。你可能會刪除一些陳舊的內容，用重定向到其他頁面來代替。後來，在做了其他改動後，你發現一些網頁變得完全無法訪問了。你可能會在瀏覽器中看到一個錯誤：“該頁面沒有正確重定向”，並建議你檢查你的 cookie。</p><p><img src="https://opensource.com/sites/default/files/uploads/firefox-redirect-loop.png" alt="Redirect loop example in Firefox" title="Redirect loop example in Firefox"></p><p>調試這種情況的一個方法是使用 <code>wget</code> 命令列程序，使用 <code>-S</code> 選項來顯示所有的服務器響應。當使用 <code>wget</code> 進行調試時，我也喜歡使用 <code>-O</code> 選項將輸出保存到一些臨時文件中，以備以後需要查看其內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wget -O /tmp/test.html -S http://10.0.0.11/announce/</span></span>
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
<span class="line"><span>20 redirections exceeded.</span></span></code></pre></div><p>我在這個輸出中省略了很多重複的內容。通過閲讀服務器的響應，你可以看到 <code>http://10.0.0.11/announce/</code> 立即重定向到 <code>http://10.0.0.11/assets/</code>，然後又重定向到 <code>http://10.0.0.11/announce/</code>。以此類推。這是一個無休止的循環，<code>wget</code> 將在 20 次重定向後退出。但有了這些調試信息，你可以修復重定向，避免循環。</p><hr>`,9)),t("p",null,[n[1]||(n[1]=s("via: ",-1)),e(a,{href:"https://opensource.com/article/21/9/wget-debug-web-server"},{default:p(()=>[...n[0]||(n[0]=[s("https://opensource.com/article/21/9/wget-debug-web-server",-1)])]),_:1})]),t("p",null,[n[6]||(n[6]=s("作者：",-1)),e(a,{href:"https://opensource.com/users/jim-hall"},{default:p(()=>[...n[2]||(n[2]=[s("Jim Hall",-1)])]),_:1}),n[7]||(n[7]=s(" 選題：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...n[3]||(n[3]=[s("lujun9972",-1)])]),_:1}),n[8]||(n[8]=s(" 譯者：",-1)),e(a,{href:"https://github.com/geekpi"},{default:p(()=>[...n[4]||(n[4]=[s("geekpi",-1)])]),_:1}),n[9]||(n[9]=s(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...n[5]||(n[5]=[s("wxy",-1)])]),_:1})]),t("p",null,[n[12]||(n[12]=s("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...n[10]||(n[10]=[s("LCTT",-1)])]),_:1}),n[13]||(n[13]=s(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...n[11]||(n[11]=[s("Linux中國",-1)])]),_:1}),n[14]||(n[14]=s(" 榮譽推出",-1))])])}const C=l(d,[["render",u]]);export{x as __pageData,C as default};
