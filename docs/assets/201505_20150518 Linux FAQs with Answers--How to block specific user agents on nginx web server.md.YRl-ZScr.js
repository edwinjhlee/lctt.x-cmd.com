import{_ as s,a0 as a,w as p,s as x,ao as d,I as o,x as e,a1 as r,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"Linux有问必答：nginx网络服务器上如何阻止特定用户代理（UA） | LCTT x X-CMD","titleTemplate":false,"description":"Linux有问必答：nginx网络服务器上如何阻止特定用户代理（UA） | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux有问必答：nginx网络服务器上如何阻止特定用户代理（UA） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux有问必答：nginx网络服务器上如何阻止特定用户代理（UA） | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150518 Linux FAQs with Answers--How to block specific user agents on nginx web server","title":"Linux有问必答：nginx网络服务器上如何阻止特定用户代理（UA）","tag":"201505","desc":""},"relativePath":"201505/20150518 Linux FAQs with Answers--How to block specific user agents on nginx web server.md","filePath":"[post].md"}'),l={name:"201505/20150518 Linux FAQs with Answers--How to block specific user agents on nginx web server.md"};function u(g,n,c,f,m,b){const t=a("Link");return p(),x("div",null,[n[13]||(n[13]=d(`<h1 id="linux有问必答-nginx网络服务器上如何阻止特定用户代理-ua" tabindex="-1">Linux有问必答：nginx网络服务器上如何阻止特定用户代理（UA） <a class="header-anchor" href="#linux有问必答-nginx网络服务器上如何阻止特定用户代理-ua" aria-label="Permalink to “Linux有问必答：nginx网络服务器上如何阻止特定用户代理（UA）”">​</a></h1><blockquote><p><strong>问题</strong>： 我注意到有一些机器人经常访问我的nginx驱动的网站，并且进行一些攻击性的扫描，导致消耗掉了我的网络服务器的大量资源。我一直尝试着通过用户代理符串来阻挡这些机器人。我怎样才能在nginx网络服务器上阻挡掉特定的用户代理呢？</p></blockquote><p>现代互联网滋生了大量各种各样的恶意机器人和网络爬虫，比如像恶意软件机器人、垃圾邮件程序或内容刮刀，这些恶意工具一直偷偷摸摸地扫描你的网站，干些诸如检测潜在网站漏洞、收获电子邮件地址，或者只是从你的网站偷取内容。大多数机器人能够通过它们的“用户代理”签名字符串来识别。</p><p>作为第一道防线，你可以尝试通过将这些机器人的用户代理字符串添加入robots.txt文件来阻止这些恶意软件机器人访问你的网站。但是，很不幸的是，该操作只针对那些“行为良好”的机器人，这些机器人被设计遵循robots.txt的规范。许多恶意软件机器人可以很容易地忽略掉robots.txt，然后随意扫描你的网站。</p><p>另一个用以阻挡特定机器人的途径，就是配置你的网络服务器，通过特定的用户代理字符串拒绝要求提供内容的请求。本文就是说明如何<strong>在nginx网络服务器上阻挡特定的用户代理</strong>。</p><h3 id="在nginx中将特定用户代理列入黑名单" tabindex="-1">在Nginx中将特定用户代理列入黑名单 <a class="header-anchor" href="#在nginx中将特定用户代理列入黑名单" aria-label="Permalink to “在Nginx中将特定用户代理列入黑名单”">​</a></h3><p>要配置用户代理阻挡列表，请打开你的网站的nginx配置文件，找到<code>server</code>定义部分。该文件可能会放在不同的地方，这取决于你的nginx配置或Linux版本（如，<code>/etc/nginx/nginx.conf</code>,<code>/etc/nginx/sites-enabled/&lt;your-site&gt;</code>,<code>/usr/local/nginx/conf/nginx.conf</code>,<code>/etc/nginx/conf.d/&lt;your-site&gt;</code>）。</p><pre><code>server {
    listen       80 default_server;
    server_name  xmodulo.com;
    root         /usr/share/nginx/html;

    ....
}
</code></pre><p>在打开该配置文件并找到 <code>server</code> 部分后，添加以下 if 声明到该部分内的某个地方。</p><pre><code>server {
    listen       80 default_server;
    server_name  xmodulo.com;
    root         /usr/share/nginx/html;

    # 大小写敏感的匹配
    if ($http_user_agent ~ (Antivirx|Arian) {
        return 403;
    }

    #大小写无关的匹配
    if ($http_user_agent ~* (netcrawl|npbot|malicious)) {
        return 403;
    }

    ....
}
</code></pre><p>如你所想，这些 if 声明使用正则表达式匹配了任意不良用户字符串，并向匹配的对象返回403 HTTP状态码。 <code>$http_user_agent</code>是HTTP请求中的一个包含有用户代理字符串的变量。‘~’操作符针对用户代理字符串进行大小写敏感匹配，而‘~*’操作符则进行大小写无关匹配。‘|’操作符是逻辑或，因此，你可以在 if 声明中放入众多的用户代理关键字，然后将它们全部阻挡掉。</p><p>在修改配置文件后，你必须重新加载nginx以激活阻挡：</p><pre><code>$ sudo /path/to/nginx -s reload
</code></pre><p>你可以通过使用带有 “--user-agent” 选项的 wget 测试用户代理阻挡。</p><pre><code>$ wget --user-agent &quot;malicious bot&quot; http://&lt;nginx-ip-address&gt;
</code></pre><p><img src="https://farm6.staticflickr.com/5333/17434036358_ef139a6b59_b.jpg" alt=""></p><h3 id="管理nginx中的用户代理黑名单" tabindex="-1">管理Nginx中的用户代理黑名单 <a class="header-anchor" href="#管理nginx中的用户代理黑名单" aria-label="Permalink to “管理Nginx中的用户代理黑名单”">​</a></h3><p>目前为止，我已经展示了在nginx中如何阻挡一些用户代理的HTTP请求。如果你有许多不同类型的网络爬虫机器人要阻挡，又该怎么办呢？</p><p>由于用户代理黑名单会增长得很大，所以将它们放在nginx的server部分不是个好点子。取而代之的是，你可以创建一个独立的文件，在该文件中列出所有被阻挡的用户代理。例如，让我们创建/etc/nginx/useragent.rules，并定义以下面的格式定义所有被阻挡的用户代理的图谱。</p><pre><code>$ sudo vi /etc/nginx/useragent.rules
</code></pre><hr><pre><code>map $http_user_agent $badagent {
        default         0;
        ~*malicious     1;
        ~*backdoor      1;
        ~*netcrawler    1;
        ~Antivirx       1;
        ~Arian          1;
        ~webbandit      1;
}
</code></pre><p>与先前的配置类似，‘~*’将匹配以大小写不敏感的方式匹配关键字，而‘~’将使用大小写敏感的正则表达式匹配关键字。“default 0”行所表达的意思是，任何其它文件中未被列出的用户代理将被允许。</p><p>接下来，打开你的网站的nginx配置文件，找到里面包含 http 的部分，然后添加以下行到 http 部分某个位置。</p><pre><code>http {
    .....
    include /etc/nginx/useragent.rules
}
</code></pre><p>注意，该 include 声明必须出现在 server 部分之前（这就是为什么我们将它添加到了 http 部分里）。</p><p>现在，打开nginx配置定义你的服务器的部分，添加以下 if 声明：</p><pre><code>server {
    ....

    if ($badagent) {
        return 403;
    }

    ....
}
</code></pre><p>最后，重新加载nginx。</p><pre><code>$ sudo /path/to/nginx -s reload
</code></pre><p>现在，任何包含有<code>/etc/nginx/useragent.rules</code>中列出的关键字的用户代理将被nginx自动禁止。</p><hr>`,32)),o("p",null,[n[1]||(n[1]=e("via: ",-1)),r(t,{href:"http://ask.xmodulo.com/block-specific-user-agents-nginx-web-server.html"},{default:i(()=>[...n[0]||(n[0]=[e("http://ask.xmodulo.com/block-specific-user-agents-nginx-web-server.html",-1)])]),_:1})]),o("p",null,[n[5]||(n[5]=e("作者：",-1)),r(t,{href:"http://ask.xmodulo.com/author/nanni"},{default:i(()=>[...n[2]||(n[2]=[e("Dan Nanni",-1)])]),_:1}),n[6]||(n[6]=e(" 译者：",-1)),r(t,{href:"https://github.com/GOLinux"},{default:i(()=>[...n[3]||(n[3]=[e("GOLinux",-1)])]),_:1}),n[7]||(n[7]=e(" 校对：",-1)),r(t,{href:"https://github.com/wxy"},{default:i(()=>[...n[4]||(n[4]=[e("wxy",-1)])]),_:1})]),o("p",null,[n[10]||(n[10]=e("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[8]||(n[8]=[e("LCTT",-1)])]),_:1}),n[11]||(n[11]=e(" 原创翻译，",-1)),r(t,{href:"https://linux.cn/"},{default:i(()=>[...n[9]||(n[9]=[e("Linux中国",-1)])]),_:1}),n[12]||(n[12]=e(" 荣誉推出",-1))])])}const w=s(l,[["render",u]]);export{T as __pageData,w as default};
