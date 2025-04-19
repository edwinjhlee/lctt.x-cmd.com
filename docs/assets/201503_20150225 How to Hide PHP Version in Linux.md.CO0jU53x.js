import{_ as a,W as i,s as l,u as r,ah as d,I as o,w as e,Z as p,A as s}from"./chunks/framework.CW1q-D1p.js";import"./chunks/theme.DKZ8RGYq.js";const H=JSON.parse('{"title":"如何在Linux服务器中隐藏PHP版本 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux服务器中隐藏PHP版本 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-blog","head":[["meta",{"name":"og:title","content":"如何在Linux服务器中隐藏PHP版本 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux服务器中隐藏PHP版本 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150225 How to Hide PHP Version in Linux","title":"如何在Linux服务器中隐藏PHP版本","tag":"201503"},"relativePath":"201503/20150225 How to Hide PHP Version in Linux.md","filePath":"[post].md"}'),u={name:"201503/20150225 How to Hide PHP Version in Linux.md"};function P(x,n,f,h,m,w){const t=i("Link");return r(),l("div",null,[n[18]||(n[18]=d(`<h1 id="如何在linux服务器中隐藏php版本" tabindex="-1">如何在Linux服务器中隐藏PHP版本 <a class="header-anchor" href="#如何在linux服务器中隐藏php版本" aria-label="Permalink to 如何在Linux服务器中隐藏PHP版本">​</a></h1><p>通常，大多数默认设置安装的web服务器存在信息泄露，这其中之一就是PHP。PHP 是如今流行的服务端html嵌入式语言（之一？）。在如今这个充满挑战的时代，有许多攻击者会尝试发现你服务端的漏洞。因此，我会简单描述如何在Linux服务器中隐藏PHP信息。</p><p>默认上<strong>expose_php</strong>默认是开的。关闭“expose_php”参数可以使php隐藏它的版本信息。</p><pre><code>[root@centos66 ~]# vi /etc/php.ini
</code></pre><p>在你的php.ini, 定位到含有expose_php的那行把On设成Off：</p><pre><code>expose_php = Off
</code></pre><p>在此之前，web服务器头看上去就像这样：</p><pre><code>[root@centos66 ~]# curl -I http://www.ehowstuff.com/
</code></pre><hr><pre><code>HTTP/1.1 200 OK
Server: nginx
Content-Type: text/html; charset=UTF-8
Vary: Accept-Encoding
X-Powered-By: PHP/5.3.3
X-Pingback: http://www.ehowstuff.com/xmlrpc.php
Date: Wed, 11 Feb 2015 14:10:43 GMT
X-Page-Speed: 1.9.32.2-4321
Cache-Control: max-age=0, no-cache
</code></pre><p>更改并重启 Web 服务后，php就不会在web服务头中显示版本了：</p><div class="language-# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>Date: Wed, 11 Feb 2015 15:38:14 GMT</span></span>
<span class="line"><span>Content-Type: text/html; charset=UTF-8</span></span>
<span class="line"><span>Vary: Accept-Encoding</span></span>
<span class="line"><span>X-Pingback: http://www.ehowstuff.com/xmlrpc.php</span></span>
<span class="line"><span>Date: Wed, 11 Feb 2015 14:10:43 GMT</span></span>
<span class="line"><span>X-Page-Speed: 1.9.32.2-4321</span></span>
<span class="line"><span>Cache-Control: max-age=0, no-cache</span></span></code></pre></div>`,12)),o("p",null,[n[1]||(n[1]=e("LCTT译注：除了 PHP 的版本之外，Web 服务器也会默认泄露版本号。如果使用 Apache 服务器，请")),p(t,{href:"http://linux.cn/article-3642-1.html"},{default:s(()=>n[0]||(n[0]=[e("参照此文章关闭Apache 版本显示")])),_:1}),n[2]||(n[2]=e("；如果使用 Nginx 服务器，请在 http 段内加入")),n[3]||(n[3]=o("code",null,"server_tokens off;",-1)),n[4]||(n[4]=e(" 配置。以上修改请记得重启相关服务。"))]),n[19]||(n[19]=o("hr",null,null,-1)),o("p",null,[n[6]||(n[6]=e("via: ")),p(t,{href:"http://www.ehowstuff.com/how-to-hide-php-version-in-linux/"},{default:s(()=>n[5]||(n[5]=[e("http://www.ehowstuff.com/how-to-hide-php-version-in-linux/")])),_:1})]),o("p",null,[n[10]||(n[10]=e("作者：")),p(t,{href:"http://www.ehowstuff.com/author/mhstar/"},{default:s(()=>n[7]||(n[7]=[e("skytech")])),_:1}),n[11]||(n[11]=e(" 译者：")),p(t,{href:"https://github.com/geekpi"},{default:s(()=>n[8]||(n[8]=[e("geekpi")])),_:1}),n[12]||(n[12]=e(" 校对：")),p(t,{href:"https://github.com/wxy"},{default:s(()=>n[9]||(n[9]=[e("wxy")])),_:1})]),o("p",null,[n[15]||(n[15]=e("本文由 ")),p(t,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>n[13]||(n[13]=[e("LCTT")])),_:1}),n[16]||(n[16]=e(" 原创翻译，")),p(t,{href:"http://linux.cn/"},{default:s(()=>n[14]||(n[14]=[e("Linux中国")])),_:1}),n[17]||(n[17]=e(" 荣誉推出"))])])}const C=a(u,[["render",P]]);export{H as __pageData,C as default};
