import{_ as c,a0 as l,w as o,s as i,ao as s,I as n,x as t,a1 as p,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse(`{"title":"25 個有用 Apache ‘.htaccess’ 技巧 | LCTT x X-CMD","titleTemplate":false,"description":"25 個有用 Apache ‘.htaccess’ 技巧 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"25 個有用 Apache ‘.htaccess’ 技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"25 個有用 Apache ‘.htaccess’ 技巧 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150127 25 Useful Apache '.htaccess' Tricks to Secure and Customize Websites","title":"25 個有用 Apache ‘.htaccess’ 技巧","tag":"201507","desc":""},"relativePath":"201507/20150127 25 Useful Apache '.htaccess' Tricks to Secure and Customize Websites.md","filePath":"[post].md"}`),h={name:"201507/20150127 25 Useful Apache '.htaccess' Tricks to Secure and Customize Websites.md"};function d(m,e,w,u,_,T){const a=l("Link");return o(),i("div",null,[e[26]||(e[26]=s('<h1 id="_25-個有用-apache-htaccess-技巧" tabindex="-1">25 個有用 Apache ‘.htaccess’ 技巧 <a class="header-anchor" href="#_25-個有用-apache-htaccess-技巧" aria-label="Permalink to “25 個有用 Apache ‘.htaccess’ 技巧”">​</a></h1><p>網站是我們生活中重要的一部分。它們是實現擴大業務、分享知識以及其它更多功能的方式。早期受制於只能提供靜態內容，隨着動態客户端和服務器端腳本語言的引入和現有靜態語言的持續改進，例如從 html 到 html5，動態網站成為可能，剩下的也許在不久的將來也會實現。</p><p>對於網站，隨之而來的是需要一個能向全球大規模用户顯示站點的某個東西。這個需求可以通過託管網站的服務器實現。這包括一系列的服務器，例如：Apache HTTP Server、Joomla 以及 允許個人擁有自己網站的 WordPress。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/01/htaccess-tricks.jpg" alt="Apache htaccess 小技巧"></p><p><em>25 個 htaccess 小技巧</em></p><p>想要擁有一個網站，可以創建一個自己的本地服務器，或者聯繫任何上面提到的或其它服務器管理員來託管他的網站。但實際問題也從這點開始。網站的性能主要取決於以下因素：</p><ul><li>網站消耗的帶寬。</li><li>面對黑客，網站有多安全。</li><li>對資料庫進行數據檢索時的優化。</li><li>顯示導航菜單和提供更多 UI 功能時的用户友好性。</li></ul><p>除此之外，保證託管網站服務器成功的多種因素還包括：</p><ul><li>對於一個流行站點的數據壓縮量。</li><li>同時為多個對請求同一或不同站點的用户服務的能力。</li><li>保證網站上輸入的機密數據安全，例如：Email、信用卡信息等等。</li><li>允許更多的選項用於增強站點的動態性。</li></ul><p>這篇文章討論一個服務器提供的用於增強網站性能和提高針對壞機器人、熱鏈等的安全性的功能：‘.htaccess’ 文件。</p><h3 id="htaccess-是什麼" tabindex="-1">.htaccess 是什麼？ <a class="header-anchor" href="#htaccess-是什麼" aria-label="Permalink to “.htaccess 是什麼？”">​</a></h3><p>htaccess (hypertext access，超文本訪問) 是為網站所有者提供用於控制服務器環境變量以及其它參數的選項，從而增強他們網站的功能的文件。這些文件可以在網站目錄樹的任何一個目錄中，並向該目錄以及目錄中的文件和子目錄提供功能。</p><p>這些功能是什麼呢？其實這些是服務器的指令，例如命令服務器執行特定任務的行，這些命令只對該文件所在目錄中的文件和子目錄有效。這些文件默認是隱藏的，因為所有操作系統和網站服務器默認配置為忽略它們，但如果查看隱藏文件的話，你就可以看到這些特殊文件。後續章節的話題將討論能控制什麼類型的參數。</p><p>注意：如果 .htaccess 文件保存在 /apache/home/www/Gunjit/ 目錄，那麼它會向該目錄中的所有文件和子目錄提供命令，但如果該目錄包含一個名為 /Gunjit/images/ 子目錄，且該子目錄中也有一個 .htaccess 文件，那麼這個子目錄中的命令會覆蓋父目錄中 .htaccess 文件(或者目錄層次結構中更上層的文件)提供的命令。</p><h3 id="apache-server-和-htaccess-文件" tabindex="-1">Apache Server 和 .htaccess 文件 <a class="header-anchor" href="#apache-server-和-htaccess-文件" aria-label="Permalink to “Apache Server 和 .htaccess 文件”">​</a></h3>',15)),n("p",null,[e[1]||(e[1]=t("Apache HTTP Server 俗稱為 Apache，是為了表示對一個有卓越戰爭策略技能的美洲土著部落的尊敬而命名。它基於 ",-1)),p(a,{href:"https://en.wikipedia.org/wiki/NCSA_HTTPd"},{default:r(()=>[...e[0]||(e[0]=[t("NCSA HTTPd 服務器",-1)])]),_:1}),e[2]||(e[2]=t(" ，是用 C/C++ 和 XML 建立的跨平台 Web 服務器，它在萬維網的成長和發展中起到了關鍵作用。",-1))]),e[27]||(e[27]=s(`<p>它最常用於 UNIX，但 Apache 也能用於多種平台，包括 FreeBSD、Linux、Windows、Mac OS、Novel Netware 等。在 2009 年，Apache 成為第一個為超過一億站點提供服務的服務器。</p><p>Apache 服務器可以讓 www/ 目錄中的每個用户有一個單獨的 .htaccess 文件。儘管這些文件是隱藏的，但如果需要的話可以使它們可見。在 www/ 目錄中可以有很多子目錄，每個子目錄通過用户名或所有者名稱命名，包含了一個站點。除此之外你可以在每個子目錄中有一個 .htaccess 文件，像之前所述用於配置子目錄中的文件。</p><p>下面介紹如果配置 Apache 服務器上的 htaccess 文件。</p><h3 id="apache-服務器上的配置" tabindex="-1">Apache 服務器上的配置 <a class="header-anchor" href="#apache-服務器上的配置" aria-label="Permalink to “Apache 服務器上的配置”">​</a></h3><p>這裏有兩種情況：</p><h4 id="在自己的服務器上託管網站" tabindex="-1">在自己的服務器上託管網站 <a class="header-anchor" href="#在自己的服務器上託管網站" aria-label="Permalink to “在自己的服務器上託管網站”">​</a></h4><p>在這種情況下，如果沒有啓用 .htaccess 文件，你可以通過在 http.conf(Apache HTTP 守護進程的默認配置文件) 中找到 <code>&lt;Directories&gt;</code> 部分啓用。</p><pre><code>&lt;Directory &quot;/var/www/htdocs&quot;&gt;
</code></pre><p>定位如下行</p><pre><code>AllowOverride None 
</code></pre><p>更改為</p><pre><code>AllowOverride All
</code></pre><p>現在，重啓 Apache 後就啓用了 .htaccess。</p><h4 id="在不同的託管服務提供商的服務器上託管網站" tabindex="-1">在不同的託管服務提供商的服務器上託管網站 <a class="header-anchor" href="#在不同的託管服務提供商的服務器上託管網站" aria-label="Permalink to “在不同的託管服務提供商的服務器上託管網站”">​</a></h4><p>在這種情況下最好諮詢託管管理員，如果他們允許訪問 .htaccess 文件的話。</p><h3 id="用於網站的-25-個-apache-web-服務器-htaccess-小技巧" tabindex="-1">用於網站的 25 個 Apache Web 服務器 ‘.htaccess’ 小技巧 <a class="header-anchor" href="#用於網站的-25-個-apache-web-服務器-htaccess-小技巧" aria-label="Permalink to “用於網站的 25 個 Apache Web 服務器 ‘.htaccess’ 小技巧”">​</a></h3><h4 id="_1-如何在-htaccess-文件中啓用-mod-rewrite" tabindex="-1">1. 如何在 .htaccess 文件中啓用 mod_rewrite <a class="header-anchor" href="#_1-如何在-htaccess-文件中啓用-mod-rewrite" aria-label="Permalink to “1. 如何在 .htaccess 文件中啓用 mod_rewrite”">​</a></h4><p>mod_rewrite 選項允許你使用重定向並通過重定向到其它 URL 來隱藏你真實的 URL。這個選項非常有用，允許你用短的容易記憶的 URL 替換長 URL。</p><p>要允許 mod_rewrite，只需要在你的 .htaccess 文件的第一行添加如下一行。</p><pre><code>Options +FollowSymLinks
</code></pre><p>該選項允許你跟蹤符號鏈接從而在站點中啓用 mod_rewrite。後面會介紹用短 URL 替換。（LCTT 譯註：+FollowSymLinks 只是啓用 mod_rewrite 的前提之一，還需要在全局和虛擬機中設置 <code>RewriteEngine on</code> 才能啓用重寫模組。）</p><h4 id="_2-如何允許或禁止對站點的訪問" tabindex="-1">2. 如何允許或禁止對站點的訪問 <a class="header-anchor" href="#_2-如何允許或禁止對站點的訪問" aria-label="Permalink to “2. 如何允許或禁止對站點的訪問”">​</a></h4><p>通過使用 order、allow 和 deny 關鍵字，htaccess 文件可以允許或者禁止對站點或目錄中子目錄或文件的訪問。</p><p><strong>只允許 IP 192.168.3.1 的訪問</strong></p><pre><code>Order Allow, Deny
Deny from All
Allow from 192.168.3.1

或

Order Allow, Deny
Allow from 192.168.3.1
</code></pre><p>這裏的 Order 關鍵字指定處理 allow 和 deny 訪問的順序。對於上面的 ‘Order’ 語句，首先會處理 Allow 語句，然後是 deny 語句。</p><p><strong>只禁止某個 IP 的訪問</strong></p><p>下面一行的意思是除了 IP 地址 192.168.3.1，允許所有用户訪問網站。</p><pre><code>Order Allow, Deny
Deny from 192.168.3.1
Allow from All

或

Order Deny, Allow
Deny from 192.168.3.1
</code></pre><h4 id="_3-為不同錯誤碼生成-apache-錯誤文檔" tabindex="-1">3. 為不同錯誤碼生成 Apache 錯誤文檔 <a class="header-anchor" href="#_3-為不同錯誤碼生成-apache-錯誤文檔" aria-label="Permalink to “3. 為不同錯誤碼生成 Apache 錯誤文檔”">​</a></h4><p>用簡單幾行，我們可以解決當用户/客户端請求一個站點上不可用的網頁時服務器產生的錯誤碼的錯誤文檔，例如我們大部分人見過的瀏覽器中顯示的 ‘404 Page not found’。‘.htaccess’ 文件指定了發生這些錯誤情況時採取何種操作。</p><p>要做到這點，需要添加下面的行到 ‘.htaccess’ 文件：</p><pre><code>ErrorDocument &lt;error-code&gt; &lt;path-of-document/string-representing-html-file-content&gt;
</code></pre><p>‘ErrorDocument’ 是一個關鍵字，error-code 可以是 401、403、404、500 或任何有效的表示錯誤的代碼，最後 ‘path-of-document’ 表示本地機器上的路徑（如果你使用的是你自己的本地服務器） 或服務器上的路徑（如果你使用任何其它服務器來託管網站）。</p><p><strong>例子：</strong></p><pre><code>ErrorDocument 404 /error-docs/error-404.html
</code></pre><p>上面一行設置客户請求任何無效頁面，服務器報告 404 錯誤時顯示 error-docs 目錄下的 ‘error-404.html’ 文檔。</p><pre><code>ErrorDocument 404 &quot;&lt;html&gt;&lt;head&gt;&lt;title&gt;404 Page not found&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;p&gt;The page you request is not present. Check the URL you have typed&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;&quot;
</code></pre><p>上面的表示也正確，其中字符串相當於一個普通的 html 文件。</p><h4 id="_4-設置-取消-apache-服務器環境變量" tabindex="-1">4. 設置/取消 Apache 服務器環境變量 <a class="header-anchor" href="#_4-設置-取消-apache-服務器環境變量" aria-label="Permalink to “4. 設置/取消 Apache 服務器環境變量”">​</a></h4><p>在 .htaccess 文件中你可以設置或者取消站點所有者可以更改的全局環境變量。要設置或取消環境變量，你需要在你的 .htaccess 文件中添加下面的行。</p><p><strong>設置環境變量</strong></p><pre><code>SetEnv OWNER “Gunjit Khera”
</code></pre><p><strong>取消環境變量</strong></p><pre><code>UnsetEnv OWNER
</code></pre><h4 id="_5-為文件定義不同-mime-類型" tabindex="-1">5. 為文件定義不同 MIME 類型 <a class="header-anchor" href="#_5-為文件定義不同-mime-類型" aria-label="Permalink to “5. 為文件定義不同 MIME 類型”">​</a></h4><p>MIME（多用途 Internet 多媒體擴展）是瀏覽器運行任何頁面所默認識別的類型。你可以在 .htaccess 文件中為你的站點定義 MIME 類型，然後服務器就可以識別你定義類型的文件並運行。</p><pre><code>&lt;IfModule mod_mime.c&gt;
	AddType	application/javascript		js
	AddType application/x-font-ttf		ttf ttc
&lt;/IfModule&gt;
</code></pre><p>這裏，mod_mime.c 是用於控制定義不同 MIME 類型的模組，如果在你的系統中已經安裝了這個模組，那麼你就可以用該模組去為你站點中不同的擴展名定義不同的 MIME 類型，從而讓服務器可以理解這些文件。</p><h4 id="_6-如何在-apache-中限制上傳和下載的大小" tabindex="-1">6. 如何在 Apache 中限制上傳和下載的大小 <a class="header-anchor" href="#_6-如何在-apache-中限制上傳和下載的大小" aria-label="Permalink to “6. 如何在 Apache 中限制上傳和下載的大小”">​</a></h4><p>.htaccess 文件允許你能夠控制某個用户從你的站點（通過 PHP）單次上傳數據量的大小（LCTT 譯註：原文有誤，修改）。要做到這點你只需要添加下面的行到你的 .htaccess 文件：</p><pre><code>php_value upload_max_filesize 20M
php_value post_max_size 20M
php_value max_execution_time 200
php_value max_input_time 200
</code></pre><p>上面的行設置最大上傳大小、最大POST 提交數據大小、最長執行時間（例如，允許用户在他的本地機器上單次執行一個請求的最大時間）、限制的最大輸入時間。</p><h4 id="_7-讓用户不能在你的站點上在線播放-mp3-和其它文件" tabindex="-1">7. 讓用户不能在你的站點上在線播放 .mp3 和其它文件 <a class="header-anchor" href="#_7-讓用户不能在你的站點上在線播放-mp3-和其它文件" aria-label="Permalink to “7. 讓用户不能在你的站點上在線播放 .mp3 和其它文件”">​</a></h4><p>大部分情況下，人們在下載檢查音樂質量之前會在網站上播放等等。作為一個聰明的銷售者，你可以添加一個簡單的功能，不允許任何用户在線播放音樂或視頻，而是必須下載完成後才能播放。這非常有用，因為（無緩衝的）在線播放音樂和視頻會消耗很多帶寬。</p><p>要添加下面的行到你的 .htaccess 文件：</p><pre><code>AddType application/octet-stream .mp3 .zip 
</code></pre><h4 id="_8-為站點設置目錄索引" tabindex="-1">8. 為站點設置目錄索引 <a class="header-anchor" href="#_8-為站點設置目錄索引" aria-label="Permalink to “8. 為站點設置目錄索引”">​</a></h4><p>大部分網站開發者都知道第一個顯示的頁面是哪個，例如一個站點的首頁，被命名為 ‘index.html’。我們大部分也見過這個。但是如何設置呢？</p><p>.htaccess 文件提供了一種方式用於列出一個客户端請求訪問網站的主頁面時會順序掃描的一些網頁集合，相應地如果找到了列出的頁面中的任何一個就會作為站點的主頁面並顯示給用户。</p><p>需要添加下面的行產生所需的效果。</p><pre><code>DirectoryIndex index.html index.php yourpage.php
</code></pre><p>上面一行指定如果有任何訪問首頁的請求到來，首先會在目錄中順序搜索上面列出的網頁：如果發現了 index.html 則顯示為主頁面，否則會找下一個頁面，例如 index.php，如此直到你在列表中輸入的最後一個頁面。</p><h4 id="_9-如何為文件啓用-gzip-壓縮以節省網站帶寬" tabindex="-1">9. 如何為文件啓用 GZip 壓縮以節省網站帶寬 <a class="header-anchor" href="#_9-如何為文件啓用-gzip-壓縮以節省網站帶寬" aria-label="Permalink to “9. 如何為文件啓用 GZip 壓縮以節省網站帶寬”">​</a></h4><p>繁忙的站點通常比只佔少量空間的輕量級站點運行更慢，這是常見的現象。因為對於繁忙的站點需要時間加載巨大的腳本文件和圖片以在客户端的 Web 瀏覽器上顯示。</p><p>通常的機制是這樣的，當瀏覽器請求一個 web 頁面時，服務器提供給瀏覽器該頁面，並在瀏覽器端顯示該 web 頁面，瀏覽器需要下載該頁面並運行頁面內的腳本。</p><p>這裏 GZip 壓縮所做的就是節省單個用户的服務時間而不用增加帶寬。服務器上站點的源文件以壓縮形式保存，當用户請求到來的時候，這些文件以壓縮形式傳送，然後在客户端上解壓（LCTT 譯註：原文此處有誤）。這改善了帶寬限制。</p><p>下面的行允許你壓縮站點的源文件，但要求在你的服務器上安裝 mod_deflate.c 模組。</p><pre><code>&lt;IfModule mod_deflate.c&gt;
	AddOutputFilterByType DEFLATE text/plain
	AddOutputFilterByType DEFLATE text/html
	AddOutputFilterByType DEFLATE text/xml
	AddOutputFilterByType DEFLATE application/html
	AddOutputFilterByType DEFLATE application/javascript
	AddOutputFilterByType DEFLATE application/x-javascript
&lt;/IfModule&gt;
</code></pre><h4 id="_10-處理文件類型" tabindex="-1">10. 處理文件類型 <a class="header-anchor" href="#_10-處理文件類型" aria-label="Permalink to “10. 處理文件類型”">​</a></h4><p>服務器默認的有一些特定情況。例如：在服務器上運行 .php 文件，顯示 .txt 文件。像這些我們可以以源代碼形式只顯示一些可執行 cgi 腳本或文件而不是執行它們（LCTT 譯註：這是為了避免攻擊者通過上傳惡意腳本，進而在服務器上執行惡意腳本進行破壞和竊取）。</p><p>要做到這點在 .htaccess 文件中有如下行。</p><pre><code>RemoveHandler cgi-script .php .pl .py
AddType text/plain .php .pl .py
</code></pre><p>這些行告訴服務器只顯示而不執行 .pl (perl 腳本)、.php (PHP 文件) 和 .py (Python 文件) 。</p><h4 id="_11-為-apache-服務器設置時區" tabindex="-1">11. 為 Apache 服務器設置時區 <a class="header-anchor" href="#_11-為-apache-服務器設置時區" aria-label="Permalink to “11. 為 Apache 服務器設置時區”">​</a></h4><p>從 .htaccess 文件可用於為服務器設置時區可以看出它的能力和重要性。這可以通過設置一個服務器為每個託管站點提供的一系列全局環境變量中的 ‘TZ’ 完成。</p><p>由於這個原因，我們可以在網站上看到根據我們的時區顯示的時間。也許服務器上其他擁有網站的人會根據他居住地點的位置設置時區。</p><p>下面的一行為服務器設置時區。</p><pre><code>SetEnv TZ India/Kolkata
</code></pre><h4 id="_12-如果在站點上啓用緩存控制" tabindex="-1">12. 如果在站點上啓用緩存控制 <a class="header-anchor" href="#_12-如果在站點上啓用緩存控制" aria-label="Permalink to “12. 如果在站點上啓用緩存控制”">​</a></h4><p>瀏覽器很有趣的一個功能是，很多時間你可以看到，當多次同時打開一個網站和第一次打開相比前者會更快。但為什麼會這樣呢？事實上，瀏覽器在它的緩存中保存了一些通常訪問的頁面用於加快後面的訪問。</p><p>但保存多長時間呢？這取決於你自己。例如，你的 .htaccess 文件中設置的緩存控制時間。.htaccess 文件指定了站點的網頁可以在瀏覽器緩存中保存的時間，時間到期後需要重新驗證緩存，頁面可能會從緩存中刪除然後在下次用户訪問站點的時候重建。</p><p>下面的行為你的站點實現緩存控制。</p><pre><code>&lt;FilesMatch &quot;\\.(ico|png|jpeg|svg|ttf)$&quot;&gt;
	Header Set Cache-Control &quot;max-age=3600, public&quot;
&lt;/FilesMatch&gt;
&lt;FilesMatch &quot;\\.(js|css)$&quot;&gt;
	Header Set Cache-Control &quot;public&quot;
	Header Set Expires &quot;Sat, 24 Jan 2015 16:00:00 GMT&quot;
&lt;/FilesMatch&gt;
</code></pre><p>上面的行允許緩存 .htaccess 文件所在目錄中的頁面一小時。</p><h4 id="_13-files-配置單個文件" tabindex="-1">13. <code>&lt;files&gt;</code> 配置單個文件 <a class="header-anchor" href="#_13-files-配置單個文件" aria-label="Permalink to “13. &lt;files&gt; 配置單個文件”">​</a></h4><p>通常 .htaccess 文件中的內容會對該文件所在目錄中的所有文件和子目錄起作用，但是你也可以對特殊文件設置一些特殊權限，例如只禁止對某個文件的訪問等等。</p><p>要做到這點，你需要在文件中以類似方式添加 <code>&lt;Files&gt;</code> 標記：</p><pre><code>&lt;files conf.html=&quot;&quot;&gt;
Order allow, deny
Deny from 188.100.100.0
&lt;/files&gt;
</code></pre><p>這是一個禁止 IP 188.100.100.0 訪問 ‘conf.html’ 的簡單例子，但是你也可以添加介紹過的 .htaccess 文件的任何功能，包括將要介紹的功能，例如：緩存控制、GZip 壓縮。</p><p>大部分服務器會用這個功能增強 .htaccess 文件的安全，這也是我們在瀏覽器上看不到 .htaccess 文件的原因。在後面的章節中會介紹如何給文件授權。</p><h4 id="_14-啓用在-cgi-bin-目錄以外運行-cgi-腳本" tabindex="-1">14. 啓用在 cgi-bin 目錄以外運行 CGI 腳本 <a class="header-anchor" href="#_14-啓用在-cgi-bin-目錄以外運行-cgi-腳本" aria-label="Permalink to “14. 啓用在 cgi-bin 目錄以外運行 CGI 腳本”">​</a></h4><p>通常服務器運行的 CGI 腳本都保存在 cgi-bin 目錄中，但是你可以在你需要的目錄運行 CGI 腳本，只需要在所需的目錄中的 .htaccess 文件添加下面的行，如果沒有該文件就創建一個，並添加下面的行：</p><pre><code>AddHandler cgi-script .cgi
Options +ExecCGI
</code></pre><h4 id="_15-如何用-htaccess-在站點上啓用-ssi" tabindex="-1">15.如何用 .htaccess 在站點上啓用 SSI <a class="header-anchor" href="#_15-如何用-htaccess-在站點上啓用-ssi" aria-label="Permalink to “15.如何用 .htaccess 在站點上啓用 SSI”">​</a></h4><p>服務器端包括（SSI）顧名思義是和服務器部分相關的東西。這是什麼呢？通常當我們在站點上有很多頁面的時候，我們在主頁上會有一個顯示到其它頁面鏈接的導航菜單，我們可以啓用 SSI 選項允許導航菜單中顯示的所有頁面完全包含在主頁面中。</p><p>SSI 允許多個頁面包含同樣的內容，因此只需要編輯一個文件就行，從而可以節省很多磁盤空間。對於 .shtml 文件，服務器默認啓用了該選項。</p><p>如果你想要對 .html 啓用該選項，你需要添加下面的行：</p><pre><code>AddHandler server-parsed .html
</code></pre><p>這樣 html 文件中如下部分會被替換為 SSI。</p><pre><code>&lt;!--#inlcude virtual=&quot;gk/document.html&quot;--&gt;
</code></pre><h4 id="_16-如何防止網站列出目錄列表" tabindex="-1">16. 如何防止網站列出目錄列表 <a class="header-anchor" href="#_16-如何防止網站列出目錄列表" aria-label="Permalink to “16. 如何防止網站列出目錄列表”">​</a></h4><p>為防止任何客户端在本地機器羅列服務器上的網站目錄列表，添加下面的行到你不想列出的目錄的文件中。</p><pre><code>Options -Indexes
</code></pre><h4 id="_17-更改默認字符集和語言頭" tabindex="-1">17. 更改默認字符集和語言頭 <a class="header-anchor" href="#_17-更改默認字符集和語言頭" aria-label="Permalink to “17. 更改默認字符集和語言頭”">​</a></h4><p>.htaccess 文件允許你更改網站使用的字符集，例如 ASCII 或 UNICODE，UTF-8 等，以及用於顯示內容的默認語言。</p><p>在服務器的全局環境變量之後添加下面語句可以實現上述功能。</p><pre><code>AddDefaultCharset UTF-8
DefaultLanguage en-US
</code></pre><h4 id="_18-重定向一個非-www-url-到-www-url" tabindex="-1">18. 重定向一個非 www URL 到 www URL <a class="header-anchor" href="#_18-重定向一個非-www-url-到-www-url" aria-label="Permalink to “18. 重定向一個非 www URL 到 www URL”">​</a></h4><p>在開始解釋之前，首先看看如何啓用該功能，添加下列行到 .htaccess 文件。</p><pre><code>RewriteEngine ON
RewriteCond %{HTTP_HOST} ^abc\\.net$
RewriteRule (.*) http://www.abc.net/$1 [R=301,L]
</code></pre><p>上面的行啓用重寫引擎，然後在第二行檢查所有涉及到主機 abc.net 或 環境變量 HTTP_HOST 為 “abc.net” 的 URL。</p>`,112)),n("p",null,[e[4]||(e[4]=t("對於所有這樣的 URL，代碼永久重定向它們(如果啓用了 R=301 規則)到新 URL ",-1)),p(a,{href:"http://www.abc.net/$1%EF%BC%8C%E5%85%B6%E4%B8%AD"},{default:r(()=>[...e[3]||(e[3]=[t("http://www.abc.net/$1，其中",-1)])]),_:1}),e[5]||(e[5]=t(" $1 是主機為 abc.net 的非 www URL。非 www URL 是大括號內的內容，並通過 $1 引用。",-1))]),e[28]||(e[28]=s(`<p><strong>重寫 URL 的重定向規則</strong></p><p>重寫功能簡單的説，就是用短而易記的 URL 替換長而難以記憶的 URL。但是，在開始這個話題之前，這裏有一些本文後面會使用的特殊字符的規則和約定。</p><p><strong>特殊符號：</strong></p><pre><code>符號      		含義
^         -  	字符串開頭
$         -  	字符串結尾
|         -  	或 [a|b] ： a 或 b
[a-z]     -  	a 到 z 的任意字母
+         -  	之前字母的一次或多次出現
*         -  	之前字母的零次或多次出現
?         -  	之前字母的零次或一次出現
</code></pre><p><strong>常量和它們的含義：</strong></p><pre><code>常量     		含義
NC          -  	區分大小寫
L           -  	最後的規則 – 停止處理後面規則
R           -  	臨時重定向到新 URL
R=301       -  	永久重定向到新 URL
F           -  	禁止發送 403 頭給用户
P           -  	代理 - 獲取遠程內容代替部分並返回
G           -  	Gone， 不再存在
S=x         -  	跳過後面的 x 條規則
T=mime-type -  	強制指定 MIME 類型
E=var:value -  	設置環境變量 var 的值為 value
H=handler   -  	設置處理器
PT          -  	Pass through - 用於 URL 還有額外的頭
QSA         -  	將查詢字符串追加到替換 URL 
</code></pre><h4 id="_19-重定向整個站點到-https" tabindex="-1">19. 重定向整個站點到 https <a class="header-anchor" href="#_19-重定向整個站點到-https" aria-label="Permalink to “19. 重定向整個站點到 https”">​</a></h4><p>下面的行會幫助你轉換整個網站到 https：</p><pre><code>RewriteEngine ON
RewriteCond %{HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</code></pre><p>上面的行啓用重寫引擎，然後檢查環境變量 HTTPS 的值。如果設置了那麼重寫所有網站頁面到 https。</p><h4 id="_20-一個自定義重寫例子" tabindex="-1">20.一個自定義重寫例子 <a class="header-anchor" href="#_20-一個自定義重寫例子" aria-label="Permalink to “20.一個自定義重寫例子”">​</a></h4>`,11)),n("p",null,[e[8]||(e[8]=t("例如，重定向 url ‘",-1)),p(a,{href:"http://www.abc.net?p=100&q=20%E2%80%99"},{default:r(()=>[...e[6]||(e[6]=[t("http://www.abc.net?p=100&q=20’",-1)])]),_:1}),e[9]||(e[9]=t(" 到 ‘",-1)),p(a,{href:"http://www.abc.net/10020pq%E2%80%99%E3%80%82"},{default:r(()=>[...e[7]||(e[7]=[t("http://www.abc.net/10020pq’。",-1)])]),_:1})]),e[29]||(e[29]=s(`<pre><code>RewriteEngine ON
RewriteRule ^http://www.abc.net/([0-9]+)([0-9]+)pq$ ^http://www.abc.net?p=$1&amp;q=$2
</code></pre><p>在上面的行中，$1 表示第一個括號，$2 表示第二個括號。</p><h4 id="_21-重命名-htaccess-文件" tabindex="-1">21. 重命名 htaccess 文件 <a class="header-anchor" href="#_21-重命名-htaccess-文件" aria-label="Permalink to “21. 重命名 htaccess 文件”">​</a></h4><p>為了防止入侵者和其他人查看 .htaccess 文件，你可以重命名該文件，這樣就不能通過客户端瀏覽器訪問。實現該目標的語句是：</p><pre><code>AccessFileName	htac.cess
</code></pre><h4 id="_22-如何為你的網站禁用圖片盜鏈" tabindex="-1">22. 如何為你的網站禁用圖片盜鏈 <a class="header-anchor" href="#_22-如何為你的網站禁用圖片盜鏈" aria-label="Permalink to “22. 如何為你的網站禁用圖片盜鏈”">​</a></h4><p>網站帶寬消耗比較大的另外一個重要問題是盜鏈問題，這是其它站點用於顯示你網站的圖片而鏈接到你的網站的鏈接，這會消耗你的帶寬。這問題也被成為 ‘帶寬盜竊’。</p><p>一個常見現象是當一個網站要顯示其它網站所包含的圖片時，由於該鏈接需要從你的網站加載內容，消耗你站點的帶寬而為其它站點顯示圖片。為了防止出現這種情況，比如對於 .gif、.jpeg 圖片等，下面的代碼行會有所幫助：</p><pre><code>RewriteEngine ON
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERERER} !^http://(www\\.)?mydomain.com/.*$ [NC]
RewriteRule \\.(gif|jpeg|png)$ - [F].
</code></pre><p>上面的行檢查 HTTP_REFERER 是否沒有設為空或沒有設為你站點上的任何鏈接。如果是這樣的話，你網頁上的所有圖片會用 403 禁止訪問代替。</p><h4 id="_23-如何將用户重定向到維護頁面" tabindex="-1">23. 如何將用户重定向到維護頁面 <a class="header-anchor" href="#_23-如何將用户重定向到維護頁面" aria-label="Permalink to “23. 如何將用户重定向到維護頁面”">​</a></h4><p>如果你的網站需要進行維護並且你想向所有需要訪問該網站的你的所有客户通知這個消息，對於這種情況，你可以添加下面的行到你的 .htaccess 文件，從而只允許管理員訪問並替換所有訪問 .jpg、.css、.gif、.js 等的頁面內容。</p><pre><code>RewriteCond %{REQUEST_URI} !^/admin/ [NC]
RewriteCond %{REQUEST_URI} !^((.*).css|(.*).js|(.*).png|(.*).jpg)	 [NC]
RewriteRule ^(.*)$ /ErrorDocs/Maintainence_Page.html [NC,L,U,QSA]
</code></pre><p>這些行檢查請求 URL 是否包含任何例如以 ‘/admin/’ 開頭的管理頁面的請求，或任何到 ‘.png, .jpg, .js, .css’ 頁面的請求，對於任何這樣的請求，用 ‘ErrorDocs/Maintainence_Page.html’ 替換那個頁面。</p><h4 id="_24-映射-ip-地址到域名" tabindex="-1">24. 映射 IP 地址到域名 <a class="header-anchor" href="#_24-映射-ip-地址到域名" aria-label="Permalink to “24. 映射 IP 地址到域名”">​</a></h4><p>名稱服務器是將特定 IP 地址轉換為域名的服務器。這種映射也可以在 .htaccess 文件中用以下形式指定。</p><pre><code># 為了將IP地址 L.M.N.O 映射到域名 www.hellovisit.com
RewriteCond %{HTTP_HOST} ^L\\.M\\.N\\.O$ [NC]
RewriteRule ^(.*)$ http://www.hellovisit.com/$1 [L,R=301]
</code></pre>`,17)),n("p",null,[e[11]||(e[11]=t("上面的行檢查任何頁面的主機是否包含類似 L.M.N.O 的 IP 地址，如果是的話第三行會通過永久重定向將頁面映射到域名 ",-1)),p(a,{href:"http://www.hellovisit.com"},{default:r(()=>[...e[10]||(e[10]=[t("http://www.hellovisit.com",-1)])]),_:1}),e[12]||(e[12]=t("。",-1))]),e[30]||(e[30]=s(`<h4 id="_25-filesmatch-標籤" tabindex="-1">25. FilesMatch 標籤 <a class="header-anchor" href="#_25-filesmatch-標籤" aria-label="Permalink to “25. FilesMatch 標籤”">​</a></h4><p>類似用於應用條件到單個文件的 <code>&lt;files&gt;</code> 標籤，<code>&lt;FilesMatch&gt;</code> 能用於匹配一組文件並對該組文件應用一些條件，如下：</p><pre><code>&lt;FilesMatch “\\.(png|jpg)$”&gt;
Order Allow, Deny 
Deny from All
&lt;/FilesMatch&gt;
</code></pre><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>.htaccess 文件能實現的小技巧還有很多。這告訴了我們這個文件有多麼強大，通過該文件能給你的站點添加多少安全性、動態性以及其它功能。</p><p>我們已經在這篇文章中盡最大努力覆蓋儘可能多的 htaccess 小技巧，但如果我們缺少了任何重要的技巧，或者你願意告訴我們你的 htaccess 想法和技巧，你可以在下面的評論框中提交，我們也會在文章中進行介紹。</p><hr>`,7)),n("p",null,[e[14]||(e[14]=t("via: ",-1)),p(a,{href:"http://www.tecmint.com/apache-htaccess-tricks/"},{default:r(()=>[...e[13]||(e[13]=[t("http://www.tecmint.com/apache-htaccess-tricks/",-1)])]),_:1})]),n("p",null,[e[18]||(e[18]=t("作者：",-1)),p(a,{href:"http://www.tecmint.com/author/gunjitk94/"},{default:r(()=>[...e[15]||(e[15]=[t("Gunjit Khera",-1)])]),_:1}),e[19]||(e[19]=t(" 譯者：",-1)),p(a,{href:"https://github.com/ictlyh"},{default:r(()=>[...e[16]||(e[16]=[t("ictlyh",-1)])]),_:1}),e[20]||(e[20]=t(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:r(()=>[...e[17]||(e[17]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[23]||(e[23]=t("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[21]||(e[21]=[t("LCTT",-1)])]),_:1}),e[24]||(e[24]=t(" 原創翻譯，",-1)),p(a,{href:"http://linux.cn/"},{default:r(()=>[...e[22]||(e[22]=[t("Linux中國",-1)])]),_:1}),e[25]||(e[25]=t(" 榮譽推出",-1))])])}const A=c(h,[["render",d]]);export{b as __pageData,A as default};
