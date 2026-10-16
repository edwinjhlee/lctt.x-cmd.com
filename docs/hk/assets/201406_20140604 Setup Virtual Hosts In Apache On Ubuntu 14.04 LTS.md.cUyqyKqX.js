import{_ as i,a0 as s,w as p,s as u,ao as r,I as t,x as n,a1 as o,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"在Ubuntu 14.04 LTS系統中設置Apache虛擬主機 | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu 14.04 LTS系統中設置Apache虛擬主機 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu 14.04 LTS系統中設置Apache虛擬主機 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu 14.04 LTS系統中設置Apache虛擬主機 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140604 Setup Virtual Hosts In Apache On Ubuntu 14.04 LTS","title":"在Ubuntu 14.04 LTS系統中設置Apache虛擬主機","tag":"201406","desc":""},"relativePath":"201406/20140604 Setup Virtual Hosts In Apache On Ubuntu 14.04 LTS.md","filePath":"[post].md"}'),d={name:"201406/20140604 Setup Virtual Hosts In Apache On Ubuntu 14.04 LTS.md"};function c(m,e,h,g,f,w){const l=s("Link");return p(),u("div",null,[e[20]||(e[20]=r(`<h1 id="在ubuntu-14-04-lts系統中設置apache虛擬主機" tabindex="-1">在Ubuntu 14.04 LTS系統中設置Apache虛擬主機 <a class="header-anchor" href="#在ubuntu-14-04-lts系統中設置apache虛擬主機" aria-label="Permalink to “在Ubuntu 14.04 LTS系統中設置Apache虛擬主機”">​</a></h1><p><strong>虛擬主機</strong>常用於在一個單獨的IP地址上提供多個域名的網站服務。如果有人想在單個VPS的單個IP地址運行多個網站，這是非常有用的。</p><p>在這個教程中，讓我告訴你如何設置在Ubuntu 14.04 LTS的Apache網頁服務器設置虛擬主機。請注意，這個教程只針對Ubuntu14.04的32位版本。</p><p>我不保證它也可以工作在其它更低的Ubuntu版本或者Ubuntu衍生版本（雖然可能過程是類似的）。</p><p>###方案###</p><p>在這個教程中，我會使用Ubuntu 14.04 32位 LTS，並搭建2個測試網站分別命名為“<strong>unixmen1.local</strong>” 和 “<strong>unixmen2.local</strong>”.我的測試機分別為<strong>192.168.1.250/24</strong>和<strong>server.unixmen.local</strong>。你可以根據你的需要更改虛擬域名。</p><p>###安裝Apache網站服務器###</p><p>安裝apache服務器之前，我們來更新一下我們的Ubuntu服務器：</p><pre><code>sudo apt-get update
</code></pre><p>然後，用下面命令來安裝apache網絡服務器：</p><pre><code>sudo apt-get install apache2
</code></pre>`,11)),t("p",null,[e[1]||(e[1]=n("安裝apache服務器之後，讓我們通過這個URL ",-1)),t("strong",null,[o(l,{href:"http://xn--IP-0p3ct5kfufm8ahdo48l9c3ada/"},{default:a(()=>[...e[0]||(e[0]=[n("http://你的服務器的IP地址/",-1)])]),_:1})]),e[2]||(e[2]=n(" 來測試網站服務器是否正常工作 ",-1)),e[3]||(e[3]=t("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/06/Apache2-Ubuntu-Default-Page-It-works-Mozilla-Firefox_001.png",alt:""},null,-1))]),e[21]||(e[21]=r(`<p>如你所見，apache服務器已經工作了。</p><p>###設置虛擬主機###</p><h4 id="_1-創建虛擬目錄" tabindex="-1">1.創建虛擬目錄 <a class="header-anchor" href="#_1-創建虛擬目錄" aria-label="Permalink to “1.創建虛擬目錄”">​</a></h4><p>現在，讓我們繼續安裝虛擬主機。正如我先前所述，我要新建2台虛擬主機分別命名為“<strong>unixmen1.local</strong>”和“<strong>unixmen2.local</strong>”.</p><p>創建一個公用的文件夾來存放這兩台虛擬主機的數據。</p><p>首先，讓我們為unixmen1.local這個站點創建一個目錄：</p><pre><code>sudo mkdir -p /var/www/unixmen1.local/public_html
</code></pre><p>接着，為for unixmen2.local站點創建一個目錄：</p><pre><code>sudo mkdir -p /var/www/unixmen2.local/public_html
</code></pre><h3 id="_2-設置所有者和權限" tabindex="-1">2. 設置所有者和權限 <a class="header-anchor" href="#_2-設置所有者和權限" aria-label="Permalink to “2. 設置所有者和權限”">​</a></h3><p>上面目錄現在只有root擁有權限。我們需要修改這2個目錄的擁有權給普通用户，而不僅僅是root用户。</p><pre><code>sudo chown -R $USER:$USER /var/www/unixmen1.local/public_html/
sudo chown -R $USER:$USER /var/www/unixmen2.local/public_html/
</code></pre><p>“<strong>$USER</strong>”變量指向了當前的登錄用户。</p><p>設置讀寫權限給apache網頁根目錄（/var/www）及其子目錄，這樣每個人都可以從目錄中讀取文件。</p><pre><code>sudo chmod -R 755 /var/www/
</code></pre><p>這樣，我們就創建好了一些文件夾來保存網絡相關數據並分配必要的權限和所屬用户。</p><h4 id="_4-為虛擬主機創建示例頁" tabindex="-1">4. 為虛擬主機創建示例頁 <a class="header-anchor" href="#_4-為虛擬主機創建示例頁" aria-label="Permalink to “4. 為虛擬主機創建示例頁”">​</a></h4><p>現在，我們給網站增加示例頁。第一步，讓我們給虛擬主機<strong>unixmen1.local</strong>創建一個示例頁。</p><p>給unixmen1.local虛擬主機創建一個示例頁，</p><pre><code>sudo vi /var/www/unixmen1.local/public_html/index.html
</code></pre><p>添加以下內容：</p><pre><code>&lt;html&gt;
 &lt;head&gt;
 &lt;title&gt;www.unixmen1.local&lt;/title&gt;
 &lt;/head&gt;
 &lt;body&gt;
 &lt;h1&gt;Welcome To Unixmen1.local website&lt;/h1&gt;
 &lt;/body&gt;
&lt;/html&gt;
</code></pre><p>保存並關閉文件。</p><p>同樣的，添加示例頁到第二台虛擬主機。</p><pre><code>sudo vi /var/www/unixmen2.local/public_html/index.html
</code></pre><p>添加以下內容：</p><pre><code>&lt;html&gt;
 &lt;head&gt;
 &lt;title&gt;www.unixmen2.local&lt;/title&gt;
 &lt;/head&gt;
 &lt;body&gt;
 &lt;h1&gt;Welcome To Unixmen2.local website&lt;/h1&gt;
 &lt;/body&gt;
&lt;/html&gt;
</code></pre><p>保存並關閉文件。</p><h4 id="_5-創建虛擬主機配置文件" tabindex="-1">5. 創建虛擬主機配置文件#### <a class="header-anchor" href="#_5-創建虛擬主機配置文件" aria-label="Permalink to “5. 創建虛擬主機配置文件####”">​</a></h4><p>默認情況下，apache有一個默認的虛擬主機文件叫000-default.conf。我們將會複製<strong>000-default.conf</strong>文件內容到我們新的虛擬主機配置文件中。</p><pre><code>sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/unixmen1.local.conf
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/unixmen2.local.conf
</code></pre><p>確保虛擬主機配置文件末尾包含.conf擴展名。</p><p>現在，修改unximen1.local.conf文件以符合需求。</p><pre><code>sudo vi /etc/apache2/sites-available/unixmen1.local.conf
</code></pre><p>使相關的變化直接呈現在unixmen1站點中（譯註：以“#”開頭的註釋行可以忽略。）。</p><pre><code>&lt;VirtualHost *:80&gt;
        # The ServerName directive sets the request scheme, hostname and port that
        # the server uses to identify itself. This is used when creating
        # redirection URLs. In the context of virtual hosts, the ServerName
        # specifies what hostname must appear in the request&#39;s Host: header to
        # match this virtual host. For the default virtual host (this file) this
        # value is not decisive as it is used as a last resort host regardless.
        # However, you must set it for any further virtual host explicitly.
        #ServerName www.example.com

        ServerAdmin webmaster@unixmen1.local
        ServerName unixmen1.local
        ServerAlias www.unixmen1.local
        DocumentRoot /var/www/unixmen1.local/public_html

        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # It is also possible to configure the loglevel for particular
        # modules, e.g.
        #LogLevel info ssl:warn

        ErrorLog \${APACHE_LOG_DIR}/error.log
        CustomLog \${APACHE_LOG_DIR}/access.log combined

        # For most configuration files from conf-available/, which are
        # enabled or disabled at a global level, it is possible to
        # include a line for only one particular virtual host. For example the
        # following line enables the CGI configuration for this host only
        # after it has been globally disabled with &quot;a2disconf&quot;.
        #Include conf-available/serve-cgi-bin.conf
&lt;/VirtualHost&gt;
</code></pre><p>同理，修改第二台主機文件。</p><pre><code>sudo vi /etc/apache2/sites-available/unixmen2.local.conf
</code></pre><p>使相關的修改在unixmen2 站點呈現出來。</p><pre><code>&lt;VirtualHost *:80&gt;
        # The ServerName directive sets the request scheme, hostname and port that
        # the server uses to identify itself. This is used when creating
        # redirection URLs. In the context of virtual hosts, the ServerName
        # specifies what hostname must appear in the request&#39;s Host: header to
        # match this virtual host. For the default virtual host (this file) this
        # value is not decisive as it is used as a last resort host regardless.
        # However, you must set it for any further virtual host explicitly.
        #ServerName www.example.com

        ServerAdmin webmaster@unixmen2.local
        ServerName unixmen2.local
        ServerAlias www.unixmen2.local
        DocumentRoot /var/www/unixmen2.local/public_html

        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # It is also possible to configure the loglevel for particular
        # modules, e.g.
        #LogLevel info ssl:warn

        ErrorLog \${APACHE_LOG_DIR}/error.log
        CustomLog \${APACHE_LOG_DIR}/access.log combined

        # For most configuration files from conf-available/, which are
        # enabled or disabled at a global level, it is possible to
        # include a line for only one particular virtual host. For example the
        # following line enables the CGI configuration for this host only
        # after it has been globally disabled with &quot;a2disconf&quot;.
        #Include conf-available/serve-cgi-bin.conf
&lt;/VirtualHost&gt;
</code></pre><p>修改虛擬主機文件後，禁用默認的虛擬主機配置（000.default.conf)，然後啓用新的虛擬主機配置，如下所示。</p><pre><code>sudo a2dissite 000-default.conf
sudo a2ensite unixmen1.local.conf
sudo a2ensite unixmen2.local.conf
</code></pre><p>最後，重啓apache服務器。</p><pre><code>sudo service apache2 restart
</code></pre><p>就是這樣。現在，我們成功地配置了apach虛擬主機在我們的Ubuntu服務器上</p><p>###測試虛擬主機###</p><p>編輯<strong>/etc/hosts</strong>文件，</p><pre><code>sudo vi /etc/hosts
</code></pre><p>在文件末尾添加如下所示的虛擬域名。</p><pre><code>192.168.1.250   unixmen1.local
192.168.1.250   unixmen2.local
</code></pre><p>保存並關閉文件。</p>`,51)),t("p",null,[e[6]||(e[6]=n("打開你的瀏覽器並訪問",-1)),t("strong",null,[o(l,{href:"http://unixmen1.local"},{default:a(()=>[...e[4]||(e[4]=[n("http://unixmen1.local",-1)])]),_:1})]),e[7]||(e[7]=n(" 或 ",-1)),t("strong",null,[o(l,{href:"http://unixmen2.local"},{default:a(()=>[...e[5]||(e[5]=[n("http://unixmen2.local",-1)])]),_:1})]),e[8]||(e[8]=n("。你將會看到我們之前創建的示例頁。",-1))]),e[22]||(e[22]=t("p",null,[t("strong",null,"Unixmen1.local 測試頁:")],-1)),e[23]||(e[23]=t("p",null,[t("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/06/www.unixmen1.local-Mozilla-Firefox_004.png",alt:""})],-1)),e[24]||(e[24]=t("p",null,[t("strong",null,"Unixmen2.local 測試頁")],-1)),e[25]||(e[25]=t("p",null,[t("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/06/www.unixmen2.local-Mozilla-Firefox_005.png",alt:""})],-1)),e[26]||(e[26]=t("p",null,"如果你想從你的遠程系統訪問這些站點，你需要在你的DNS服務器添加實際域名記錄。不過，我沒有真實的域名和DNS服務器，我只想通過我的本地系統測試，那麼它剛好如我所願地工作。",-1)),e[27]||(e[27]=t("p",null,"Cheers！",-1)),e[28]||(e[28]=t("hr",null,null,-1)),t("p",null,[e[10]||(e[10]=n("via: ",-1)),o(l,{href:"http://www.unixmen.com/setup-virtual-hosts-apache-ubuntu-14-04-lts/"},{default:a(()=>[...e[9]||(e[9]=[n("http://www.unixmen.com/setup-virtual-hosts-apache-ubuntu-14-04-lts/",-1)])]),_:1})]),t("p",null,[e[13]||(e[13]=n("譯者：",-1)),o(l,{href:"https://github.com/disylee"},{default:a(()=>[...e[11]||(e[11]=[n("disylee",-1)])]),_:1}),e[14]||(e[14]=n(" 校對：",-1)),o(l,{href:"https://github.com/wxy"},{default:a(()=>[...e[12]||(e[12]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[17]||(e[17]=n("本文由 ",-1)),o(l,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[15]||(e[15]=[n("LCTT",-1)])]),_:1}),e[18]||(e[18]=n(" 原創翻譯，",-1)),o(l,{href:"http://linux.cn/"},{default:a(()=>[...e[16]||(e[16]=[n("Linux中國",-1)])]),_:1}),e[19]||(e[19]=n(" 榮譽推出",-1))])])}const T=i(d,[["render",c]]);export{v as __pageData,T as default};
