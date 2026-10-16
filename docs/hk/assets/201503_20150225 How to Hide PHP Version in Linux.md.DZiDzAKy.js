import{_ as i,a0 as o,w as l,s as r,ao as d,I as a,x as e,a1 as s,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const H=JSON.parse('{"title":"如何在Linux服務器中隱藏PHP版本 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux服務器中隱藏PHP版本 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux服務器中隱藏PHP版本 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux服務器中隱藏PHP版本 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150225 How to Hide PHP Version in Linux","title":"如何在Linux服務器中隱藏PHP版本","tag":"201503","desc":""},"relativePath":"201503/20150225 How to Hide PHP Version in Linux.md","filePath":"[post].md"}'),u={name:"201503/20150225 How to Hide PHP Version in Linux.md"};function h(f,n,x,P,m,w){const t=o("Link");return l(),r("div",null,[n[18]||(n[18]=d(`<h1 id="如何在linux服務器中隱藏php版本" tabindex="-1">如何在Linux服務器中隱藏PHP版本 <a class="header-anchor" href="#如何在linux服務器中隱藏php版本" aria-label="Permalink to “如何在Linux服務器中隱藏PHP版本”">​</a></h1><p>通常，大多數默認設置安裝的web服務器存在信息泄露，這其中之一就是PHP。PHP 是如今流行的服務端html嵌入式語言（之一？）。在如今這個充滿挑戰的時代，有許多攻擊者會嘗試發現你服務端的漏洞。因此，我會簡單描述如何在Linux服務器中隱藏PHP信息。</p><p>默認上<strong>expose_php</strong>默認是開的。關閉“expose_php”參數可以使php隱藏它的版本信息。</p><pre><code>[root@centos66 ~]# vi /etc/php.ini
</code></pre><p>在你的php.ini, 定位到含有expose_php的那行把On設成Off：</p><pre><code>expose_php = Off
</code></pre><p>在此之前，web服務器頭看上去就像這樣：</p><pre><code>[root@centos66 ~]# curl -I http://www.ehowstuff.com/
</code></pre><hr><pre><code>HTTP/1.1 200 OK
Server: nginx
Content-Type: text/html; charset=UTF-8
Vary: Accept-Encoding
X-Powered-By: PHP/5.3.3
X-Pingback: http://www.ehowstuff.com/xmlrpc.php
Date: Wed, 11 Feb 2015 14:10:43 GMT
X-Page-Speed: 1.9.32.2-4321
Cache-Control: max-age=0, no-cache
</code></pre><p>更改並重啓 Web 服務後，php就不會在web服務頭中顯示版本了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>Date: Wed, 11 Feb 2015 15:38:14 GMT</span></span>
<span class="line"><span>Content-Type: text/html; charset=UTF-8</span></span>
<span class="line"><span>Vary: Accept-Encoding</span></span>
<span class="line"><span>X-Pingback: http://www.ehowstuff.com/xmlrpc.php</span></span>
<span class="line"><span>Date: Wed, 11 Feb 2015 14:10:43 GMT</span></span>
<span class="line"><span>X-Page-Speed: 1.9.32.2-4321</span></span>
<span class="line"><span>Cache-Control: max-age=0, no-cache</span></span></code></pre></div>`,12)),a("p",null,[n[1]||(n[1]=e("LCTT譯註：除了 PHP 的版本之外，Web 服務器也會默認泄露版本號。如果使用 Apache 服務器，請",-1)),s(t,{href:"http://linux.cn/article-3642-1.html"},{default:p(()=>[...n[0]||(n[0]=[e("參照此文章關閉Apache 版本顯示",-1)])]),_:1}),n[2]||(n[2]=e("；如果使用 Nginx 服務器，請在 http 段內加入",-1)),n[3]||(n[3]=a("code",null,"server_tokens off;",-1)),n[4]||(n[4]=e(" 配置。以上修改請記得重啓相關服務。",-1))]),n[19]||(n[19]=a("hr",null,null,-1)),a("p",null,[n[6]||(n[6]=e("via: ",-1)),s(t,{href:"http://www.ehowstuff.com/how-to-hide-php-version-in-linux/"},{default:p(()=>[...n[5]||(n[5]=[e("http://www.ehowstuff.com/how-to-hide-php-version-in-linux/",-1)])]),_:1})]),a("p",null,[n[10]||(n[10]=e("作者：",-1)),s(t,{href:"http://www.ehowstuff.com/author/mhstar/"},{default:p(()=>[...n[7]||(n[7]=[e("skytech",-1)])]),_:1}),n[11]||(n[11]=e(" 譯者：",-1)),s(t,{href:"https://github.com/geekpi"},{default:p(()=>[...n[8]||(n[8]=[e("geekpi",-1)])]),_:1}),n[12]||(n[12]=e(" 校對：",-1)),s(t,{href:"https://github.com/wxy"},{default:p(()=>[...n[9]||(n[9]=[e("wxy",-1)])]),_:1})]),a("p",null,[n[15]||(n[15]=e("本文由 ",-1)),s(t,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...n[13]||(n[13]=[e("LCTT",-1)])]),_:1}),n[16]||(n[16]=e(" 原創翻譯，",-1)),s(t,{href:"http://linux.cn/"},{default:p(()=>[...n[14]||(n[14]=[e("Linux中國",-1)])]),_:1}),n[17]||(n[17]=e(" 榮譽推出",-1))])])}const C=i(u,[["render",h]]);export{H as __pageData,C as default};
