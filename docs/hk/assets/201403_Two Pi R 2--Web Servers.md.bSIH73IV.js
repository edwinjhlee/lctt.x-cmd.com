import{_ as o,a0 as a,w as p,s as d,I as i,x as t,a1 as r,A as s,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"樹莓派使用實例之：2 Pi R 第二篇：Web服務器 | LCTT x X-CMD","titleTemplate":false,"description":"樹莓派使用實例之：2 Pi R 第二篇：Web服務器 | LCTT (201403) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"樹莓派使用實例之：2 Pi R 第二篇：Web服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"樹莓派使用實例之：2 Pi R 第二篇：Web服務器 | LCTT (201403) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201403/Two Pi R 2--Web Servers","title":"樹莓派使用實例之：2 Pi R 第二篇：Web服務器","tag":"201403","desc":""},"relativePath":"201403/Two Pi R 2--Web Servers.md","filePath":"[post].md"}'),u={name:"201403/Two Pi R 2--Web Servers.md"};function g(x,e,m,b,w,P){const n=a("Link");return p(),d("div",null,[e[17]||(e[17]=i("h1",{id:"樹莓派使用實例之-2-pi-r-第二篇-web服務器",tabindex:"-1"},[t("樹莓派使用實例之：2 Pi R 第二篇：Web服務器 "),i("a",{class:"header-anchor",href:"#樹莓派使用實例之-2-pi-r-第二篇-web服務器","aria-label":"Permalink to “樹莓派使用實例之：2 Pi R 第二篇：Web服務器”"},"​")],-1)),i("p",null,[e[1]||(e[1]=t("在我的上一篇",-1)),r(n,{href:"http://linux.cn/article-2587-1.html"},{default:s(()=>[...e[0]||(e[0]=[t("文章",-1)])]),_:1}),e[2]||(e[2]=t("中講過如何做一個高可用系統：兩個樹莓派佈署上 GlusterFS 集羣文件系統，就變成一個容錯文件服務器了。在這篇文章中我們會基於這個高可用系統構建另一個容錯服務：建立一個簡單的 Web 服務器集羣。",-1))]),e[18]||(e[18]=l(`<p>可能你沒有看過我的上一篇文章，那我就在這裏簡單回顧一下上次的內容。我有兩個樹莓派：Pi1 和 Pi2。Pi1 的 IP 地址為 192.168.0.121，Pi2 的 IP 地址為 192.168.0.122。我把它們組合成為 GlusterFS 集羣系統，共享一個存儲卷，卷名為 gv0。並且這個 gv0 被掛載在兩個樹莓派上，掛載點都是 /mnt/gluster1，這樣一來，兩個樹莓派能同時訪問到這個共享卷。最後我測試了下系統的容錯性，將共享卷掛載到第三個物理機上，並執行共享捲上的一個簡單的腳本：打印系統時間並輸出到 gv0 上的一個文件內，然後輪着關掉兩台樹莓派，檢測這個冗餘系統是否還能用。</p><p>現在我手上有這個經過檢驗的存儲系統，我要做的是把這個系統做成有容錯功能的 Web 服務器集羣。樹莓派的 CPU 處理速度和內存資源都不是很高，好在對付一個靜態 Web 服務器已經是綽綽有餘了。我故意把這個例子做得非常簡單，因為我覺得如果你能擺平這個簡單的例子，你也能處理複雜一點的問題了。</p><h3 id="安裝-nginx" tabindex="-1">安裝 Nginx <a class="header-anchor" href="#安裝-nginx" aria-label="Permalink to “安裝 Nginx”">​</a></h3><p>雖然我也比較喜歡 Apache，但在資源有限的情況下，像 Nginx 這樣功能全、性能高、資源佔用少的 Web 服務器是比較理想的選擇。在 Raspbian 的默認源中存在 Nginx，所以我只要登入一台樹莓派並且輸入以下命令：</p><pre><code>$ sudo apt-get update
$ sudo apt-get install nginx
</code></pre><p>Nginx 安裝好後，創建配置文件 /mnt/gluster1/cluster ，內容如下：</p><pre><code>server {
  root /mnt/gluster1/www;
  index index.html index.htm;
  server_name twopir twopir.example.com;

  location / {
        try_files $uri $uri/ /index.html;
  }
}
</code></pre><p>注意：我這裏把服務器命名為“twopir”，你可以根據自己愛好命名你的網站。另外我把 Web 服務器的根目錄設置為 /mng/gluster1/www。這樣，我就能把我的靜態文件放在這個共享存儲系統內，從而讓兩個樹莓派主機都訪問到它們。</p><p>現在刪除默認的 Nginx 配置文件，將上面配好的配置文件作為 Nginx 的配置文件。在 Debian 系統中，Nginx 將它的配置文件像 Apache 一樣放在 sites-available 和 site-enabled 兩個目錄下面。虛擬主機配置文檔放在 sites-available 中，而 sites-enabled 目錄包含了你想生效的配置文件的軟鏈接。</p><pre><code>$ cd /etc/nginx/sites-available
$ sudo ln -s /mnt/gluster1/cluster .
$ cd /etc/nginx/sites-enabled
$ sudo rm default
$ sudo ln -s /etc/nginx/sites-available/cluster .
</code></pre><p>現在我已經放好了配置文件，但系統還不存在上面所説的 Web 服務器根目錄。下一步就是創建目錄 /mnt/gluster1/www，並複製 index.html 文件進去。當然你也可以建立自己定義的 index.html 文件，但先複製一個已有的文件是個不錯的選擇：</p><pre><code>$ sudo mkdir /mnt/gluster1/www
$ cp /usr/share/nginx/www/index.html /mnt/gluster1/www
</code></pre><p>重啓 Nginx 服務：</p><pre><code>$ sudo /etc/init.d/nginx restart
</code></pre>`,14)),i("p",null,[e[4]||(e[4]=t("現在去 DNS 服務器為192.168.0.121的樹莓派配置記錄。你可以根據自己的情況配置你自己的域名和 IP 地址。現在在瀏覽器上輸入 ",-1)),r(n,{href:"http://twopir/"},{default:s(()=>[...e[3]||(e[3]=[t("http://twopir/",-1)])]),_:1}),e[5]||(e[5]=t(" 然後出現默認的 Nginx 首頁。如果你查看下 /var/log/nginx/access.log 文件，你可以看到點擊網頁留下的記錄。",-1))]),e[19]||(e[19]=l(`<p>Nginx 能正常工作後，配置第二個樹莓派。因為我們已經將配置文件都放在 GlusterFS 共享目錄下，我們現在要做的只是安裝 Nginx，創建相關的軟鏈接，重啓 Nginx：</p><pre><code>$ sudo apt-get update
$ sudo apt-get install nginx
$ cd /etc/nginx/sites-available
$ sudo ln -s /mnt/gluster1/cluster .
$ cd /etc/nginx/sites-enabled
$ sudo rm default
$ sudo ln -s /etc/nginx/sites-available/cluster .
$ sudo /etc/init.d/nginx restart
</code></pre><h3 id="dns-服務器上配置兩條-a-記錄" tabindex="-1">DNS 服務器上配置兩條 A 記錄 <a class="header-anchor" href="#dns-服務器上配置兩條-a-記錄" aria-label="Permalink to “DNS 服務器上配置兩條 A 記錄”">​</a></h3><p>現在兩個主機共享同一份文件，下一步是設置冗餘系統的關鍵步驟。雖然你完全可以設置一個類似心跳的服務用於輪詢檢測哪個樹莓派的 Web 服務是開啓的，但這裏有個更好的方法：給同一個主機名指定兩個 DNS 的 A 記錄，分別指向你的兩個樹莓派（譯註：A 記錄就是將域名轉化為 IP 地址的記錄，DNS 包含很多記錄方式，如 A 記錄、PTR 記錄、MX 記錄等等），這就是傳説中的 DNS 負載均衡，DNS 訪問主機時，如果主機名對應多個 IP 地址，DNS 會隨機返回這些 IP 地址的順序：</p><pre><code>$ dig twopir.example.com A +short
192.168.0.121
192.168.0.122
$ dig twopir.example.com A +short
192.168.0.122
192.168.0.121
</code></pre><p>因為返回隨機的順序，用户可以均勻地往兩台服務器發送請求，這個負載均衡的機制就是由 DNS 服務器的多條 A 記錄來提供。相對於 DNS 的負載均衡技術，我更感興趣的是 Web 瀏覽器如何處理請求失敗的情況。當瀏覽器通過網頁主機獲得兩條 A 記錄，並且第一條記錄所在的主機當機了，瀏覽器幾乎立刻就切到另一條記錄上。切換效率快到用户根本察覺不出來，這可比傳統的心跳線輪循請求主機快多了。</p><p>所以在你正在使用的 DNS 服務器上添加你的樹莓派集羣的兩個 IP 地址，然後試試 dig 命令，就像我在上面使用過的一樣，你也應該能得到兩個 IP 地址。</p><p>當你為同一個域名設置好了兩個 A 記錄，這套集羣就可以提供容錯服務了。打開兩個終端並分別登錄到兩個樹莓派，運行 tail -f /var/log/ngnix/access.log 命令，你可以監視 Web 服務器的訪問情況。當你通過瀏覽器訪問網頁時，你可以看到在一台樹莓派上產生了訪問日誌，而在另外一台的日誌裏什麼也沒有出現。現在你可以刷新幾次頁面，當你覺得你對能成功訪問到 Web 服務器感到滿意了，你可以重啓響應你請求的那台樹莓派，然後再刷新幾次頁面。也許瀏覽器上會出現一個短暫的不可訪問信號，但會馬上重定向到第二台樹莓派上，你會看到一樣的頁面，並且你能通過終端訪問日誌瞭解具體情況。當第一台樹莓派啓動後，你在瀏覽器上根本不會察覺到。</p><p>隨機重啓一台樹莓派，只要有一台在線，Web 服務器就能提供服務。這是一個非常簡單的案例，你可以把你其它的靜態文件放到 /mnt/gluster1/www 上，為你提供真正有價值的服務，現在好好享受你的低成本容錯集羣 Web 服務器吧。</p><hr>`,10)),i("p",null,[e[7]||(e[7]=t("via: ",-1)),r(n,{href:"http://www.linuxjournal.com/content/two-pi-r-2-web-servers"},{default:s(()=>[...e[6]||(e[6]=[t("http://www.linuxjournal.com/content/two-pi-r-2-web-servers",-1)])]),_:1})]),i("p",null,[e[10]||(e[10]=t("譯者：",-1)),r(n,{href:"https://github.com/bazz2"},{default:s(()=>[...e[8]||(e[8]=[t("bazz2",-1)])]),_:1}),e[11]||(e[11]=t(" 校對：",-1)),r(n,{href:"https://github.com/wxy"},{default:s(()=>[...e[9]||(e[9]=[t("wxy",-1)])]),_:1})]),i("p",null,[e[14]||(e[14]=t("本文由 ",-1)),r(n,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[12]||(e[12]=[t("LCTT",-1)])]),_:1}),e[15]||(e[15]=t(" 原創翻譯，",-1)),r(n,{href:"http://linux.cn/"},{default:s(()=>[...e[13]||(e[13]=[t("Linux中國",-1)])]),_:1}),e[16]||(e[16]=t(" 榮譽推出",-1))])])}const S=o(u,[["render",g]]);export{f as __pageData,S as default};
