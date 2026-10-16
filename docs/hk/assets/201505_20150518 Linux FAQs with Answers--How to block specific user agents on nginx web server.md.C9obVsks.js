import{_ as s,a0 as a,w as p,s as x,ao as d,I as o,x as e,a1 as r,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"Linux有問必答：nginx網絡服務器上如何阻止特定用户代理（UA） | LCTT x X-CMD","titleTemplate":false,"description":"Linux有問必答：nginx網絡服務器上如何阻止特定用户代理（UA） | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux有問必答：nginx網絡服務器上如何阻止特定用户代理（UA） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux有問必答：nginx網絡服務器上如何阻止特定用户代理（UA） | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150518 Linux FAQs with Answers--How to block specific user agents on nginx web server","title":"Linux有問必答：nginx網絡服務器上如何阻止特定用户代理（UA）","tag":"201505","desc":""},"relativePath":"201505/20150518 Linux FAQs with Answers--How to block specific user agents on nginx web server.md","filePath":"[post].md"}'),l={name:"201505/20150518 Linux FAQs with Answers--How to block specific user agents on nginx web server.md"};function u(g,n,c,f,m,b){const t=a("Link");return p(),x("div",null,[n[13]||(n[13]=d(`<h1 id="linux有問必答-nginx網絡服務器上如何阻止特定用户代理-ua" tabindex="-1">Linux有問必答：nginx網絡服務器上如何阻止特定用户代理（UA） <a class="header-anchor" href="#linux有問必答-nginx網絡服務器上如何阻止特定用户代理-ua" aria-label="Permalink to “Linux有問必答：nginx網絡服務器上如何阻止特定用户代理（UA）”">​</a></h1><blockquote><p><strong>問題</strong>： 我注意到有一些機器人經常訪問我的nginx驅動的網站，並且進行一些攻擊性的掃描，導致消耗掉了我的網絡服務器的大量資源。我一直嘗試着通過用户代理符串來阻擋這些機器人。我怎樣才能在nginx網絡服務器上阻擋掉特定的用户代理呢？</p></blockquote><p>現代互聯網滋生了大量各種各樣的惡意機器人和網絡爬蟲，比如像惡意軟件機器人、垃圾郵件程序或內容刮刀，這些惡意工具一直偷偷摸摸地掃描你的網站，幹些諸如檢測潛在網站漏洞、收穫電子郵件地址，或者只是從你的網站偷取內容。大多數機器人能夠通過它們的“用户代理”簽名字符串來識別。</p><p>作為第一道防線，你可以嘗試通過將這些機器人的用户代理字符串添加入robots.txt文件來阻止這些惡意軟件機器人訪問你的網站。但是，很不幸的是，該操作只針對那些“行為良好”的機器人，這些機器人被設計遵循robots.txt的規範。許多惡意軟件機器人可以很容易地忽略掉robots.txt，然後隨意掃描你的網站。</p><p>另一個用以阻擋特定機器人的途徑，就是配置你的網絡服務器，通過特定的用户代理字符串拒絕要求提供內容的請求。本文就是説明如何<strong>在nginx網絡服務器上阻擋特定的用户代理</strong>。</p><h3 id="在nginx中將特定用户代理列入黑名單" tabindex="-1">在Nginx中將特定用户代理列入黑名單 <a class="header-anchor" href="#在nginx中將特定用户代理列入黑名單" aria-label="Permalink to “在Nginx中將特定用户代理列入黑名單”">​</a></h3><p>要配置用户代理阻擋列表，請打開你的網站的nginx配置文件，找到<code>server</code>定義部分。該文件可能會放在不同的地方，這取決於你的nginx配置或Linux版本（如，<code>/etc/nginx/nginx.conf</code>,<code>/etc/nginx/sites-enabled/&lt;your-site&gt;</code>,<code>/usr/local/nginx/conf/nginx.conf</code>,<code>/etc/nginx/conf.d/&lt;your-site&gt;</code>）。</p><pre><code>server {
    listen       80 default_server;
    server_name  xmodulo.com;
    root         /usr/share/nginx/html;

    ....
}
</code></pre><p>在打開該配置文件並找到 <code>server</code> 部分後，添加以下 if 聲明到該部分內的某個地方。</p><pre><code>server {
    listen       80 default_server;
    server_name  xmodulo.com;
    root         /usr/share/nginx/html;

    # 大小寫敏感的匹配
    if ($http_user_agent ~ (Antivirx|Arian) {
        return 403;
    }

    #大小寫無關的匹配
    if ($http_user_agent ~* (netcrawl|npbot|malicious)) {
        return 403;
    }

    ....
}
</code></pre><p>如你所想，這些 if 聲明使用正則表達式匹配了任意不良用户字符串，並向匹配的對象返回403 HTTP狀態碼。 <code>$http_user_agent</code>是HTTP請求中的一個包含有用户代理字符串的變量。‘~’操作符針對用户代理字符串進行大小寫敏感匹配，而‘~*’操作符則進行大小寫無關匹配。‘|’操作符是邏輯或，因此，你可以在 if 聲明中放入眾多的用户代理關鍵字，然後將它們全部阻擋掉。</p><p>在修改配置文件後，你必須重新加載nginx以激活阻擋：</p><pre><code>$ sudo /path/to/nginx -s reload
</code></pre><p>你可以通過使用帶有 “--user-agent” 選項的 wget 測試用户代理阻擋。</p><pre><code>$ wget --user-agent &quot;malicious bot&quot; http://&lt;nginx-ip-address&gt;
</code></pre><p><img src="https://farm6.staticflickr.com/5333/17434036358_ef139a6b59_b.jpg" alt=""></p><h3 id="管理nginx中的用户代理黑名單" tabindex="-1">管理Nginx中的用户代理黑名單 <a class="header-anchor" href="#管理nginx中的用户代理黑名單" aria-label="Permalink to “管理Nginx中的用户代理黑名單”">​</a></h3><p>目前為止，我已經展示了在nginx中如何阻擋一些用户代理的HTTP請求。如果你有許多不同類型的網絡爬蟲機器人要阻擋，又該怎麼辦呢？</p><p>由於用户代理黑名單會增長得很大，所以將它們放在nginx的server部分不是個好點子。取而代之的是，你可以創建一個獨立的文件，在該文件中列出所有被阻擋的用户代理。例如，讓我們創建/etc/nginx/useragent.rules，並定義以下面的格式定義所有被阻擋的用户代理的圖譜。</p><pre><code>$ sudo vi /etc/nginx/useragent.rules
</code></pre><hr><pre><code>map $http_user_agent $badagent {
        default         0;
        ~*malicious     1;
        ~*backdoor      1;
        ~*netcrawler    1;
        ~Antivirx       1;
        ~Arian          1;
        ~webbandit      1;
}
</code></pre><p>與先前的配置類似，‘~*’將匹配以大小寫不敏感的方式匹配關鍵字，而‘~’將使用大小寫敏感的正則表達式匹配關鍵字。“default 0”行所表達的意思是，任何其它文件中未被列出的用户代理將被允許。</p><p>接下來，打開你的網站的nginx配置文件，找到裏面包含 http 的部分，然後添加以下行到 http 部分某個位置。</p><pre><code>http {
    .....
    include /etc/nginx/useragent.rules
}
</code></pre><p>注意，該 include 聲明必須出現在 server 部分之前（這就是為什麼我們將它添加到了 http 部分裏）。</p><p>現在，打開nginx配置定義你的服務器的部分，添加以下 if 聲明：</p><pre><code>server {
    ....

    if ($badagent) {
        return 403;
    }

    ....
}
</code></pre><p>最後，重新加載nginx。</p><pre><code>$ sudo /path/to/nginx -s reload
</code></pre><p>現在，任何包含有<code>/etc/nginx/useragent.rules</code>中列出的關鍵字的用户代理將被nginx自動禁止。</p><hr>`,32)),o("p",null,[n[1]||(n[1]=e("via: ",-1)),r(t,{href:"http://ask.xmodulo.com/block-specific-user-agents-nginx-web-server.html"},{default:i(()=>[...n[0]||(n[0]=[e("http://ask.xmodulo.com/block-specific-user-agents-nginx-web-server.html",-1)])]),_:1})]),o("p",null,[n[5]||(n[5]=e("作者：",-1)),r(t,{href:"http://ask.xmodulo.com/author/nanni"},{default:i(()=>[...n[2]||(n[2]=[e("Dan Nanni",-1)])]),_:1}),n[6]||(n[6]=e(" 譯者：",-1)),r(t,{href:"https://github.com/GOLinux"},{default:i(()=>[...n[3]||(n[3]=[e("GOLinux",-1)])]),_:1}),n[7]||(n[7]=e(" 校對：",-1)),r(t,{href:"https://github.com/wxy"},{default:i(()=>[...n[4]||(n[4]=[e("wxy",-1)])]),_:1})]),o("p",null,[n[10]||(n[10]=e("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[8]||(n[8]=[e("LCTT",-1)])]),_:1}),n[11]||(n[11]=e(" 原創翻譯，",-1)),r(t,{href:"https://linux.cn/"},{default:i(()=>[...n[9]||(n[9]=[e("Linux中國",-1)])]),_:1}),n[12]||(n[12]=e(" 榮譽推出",-1))])])}const w=s(l,[["render",u]]);export{T as __pageData,w as default};
