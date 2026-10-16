import{_ as c,a0 as a,w as s,s as f,ao as p,I as i,x as t,a1 as n,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"如何在 Ubuntu 上安裝配置管理系統 Chef （大廚） | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Ubuntu 上安裝配置管理系統 Chef （大廚） | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Ubuntu 上安裝配置管理系統 Chef （大廚） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Ubuntu 上安裝配置管理系統 Chef （大廚） | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150717 How to Configure Chef (server or client) on Ubuntu 14.04 or 15.04","title":"如何在 Ubuntu 上安裝配置管理系統 Chef （大廚）","tag":"201508","desc":""},"relativePath":"201508/20150717 How to Configure Chef (server or client) on Ubuntu 14.04 or 15.04.md","filePath":"[post].md"}'),u={name:"201508/20150717 How to Configure Chef (server or client) on Ubuntu 14.04 or 15.04.md"};function d(h,e,l,m,g,b){const o=a("Link");return s(),f("div",null,[e[20]||(e[20]=p(`<h1 id="如何在-ubuntu-上安裝配置管理系統-chef-大廚" tabindex="-1">如何在 Ubuntu 上安裝配置管理系統 Chef （大廚） <a class="header-anchor" href="#如何在-ubuntu-上安裝配置管理系統-chef-大廚" aria-label="Permalink to “如何在 Ubuntu 上安裝配置管理系統 Chef （大廚）”">​</a></h1><p>Chef是面對IT專業人員的一款配置管理和自動化工具，它可以配置和管理你的基礎設施，無論它在本地還是在雲上。它可以用於加速應用部署並協調多個系統管理員和開發人員的工作，這涉及到可支持大量的客户羣的成百上千的服務器和程序。chef最有用的是讓基礎設施變成代碼。一旦你掌握了Chef，你可以獲得一流的網絡IT支持來自動化管理你的雲端基礎設施或者終端用户。</p><p>下面是我們將要在本篇中要設置和配置Chef的主要組件。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/chef.png" alt=""></p><h3 id="安裝chef的要求和版本" tabindex="-1">安裝Chef的要求和版本 <a class="header-anchor" href="#安裝chef的要求和版本" aria-label="Permalink to “安裝Chef的要求和版本”">​</a></h3><p>我們將在下面的基礎環境下設置Chef配置管理系統。</p><div class="table-wrap"><table><thead><tr><th>管理和配置工具：Chef</th><th></th></tr></thead><tbody><tr><td>基礎操作系統</td><td>Ubuntu 14.04.1 LTS (x86_64)</td></tr><tr><td>Chef Server</td><td>Version 12.1.0</td></tr><tr><td>Chef Manage</td><td>Version 1.17.0</td></tr><tr><td>Chef Development Kit</td><td>Version 0.6.2</td></tr><tr><td>內存和CPU</td><td>4 GB  , 2.0+2.0 GHz</td></tr></tbody></table></div><h3 id="chef服務端的安裝和配置" tabindex="-1">Chef服務端的安裝和配置 <a class="header-anchor" href="#chef服務端的安裝和配置" aria-label="Permalink to “Chef服務端的安裝和配置”">​</a></h3><p>Chef服務端是核心組件，它存儲配置以及其他和工作站交互的配置數據。讓我們在他們的官網下載最新的安裝文件。</p><p>我使用下面的命令來下載和安裝它。</p><p>####1) 下載Chef服務端</p><pre><code>root@ubuntu-14-chef:/tmp# wget https://web-dl.packagecloud.io/chef/stable/packages/ubuntu/trusty/chef-server-core_12.1.0-1_amd64.deb
</code></pre><p>####2) 安裝Chef服務端</p><pre><code>root@ubuntu-14-chef:/tmp# dpkg -i chef-server-core_12.1.0-1_amd64.deb
</code></pre><p>####3) 重新配置Chef服務端</p><p>現在運行下面的命令來啓動所有的chef服務端服務，這步也許會花費一些時間，因為它有許多不同一起工作的服務組成來創建一個正常運作的系統。</p><pre><code>root@ubuntu-14-chef:/tmp# chef-server-ctl reconfigure
</code></pre><p>chef服務端啓動命令&#39;chef-server-ctl reconfigure&#39;需要運行兩次，這樣就會在安裝後看到這樣的輸出。</p><pre><code>Chef Client finished, 342/350 resources updated in 113.71139964 seconds
opscode Reconfigured!
</code></pre><p>####4) 重啓系統</p><p>安裝完成後重啓系統使系統能最好的工作，不然我們或許會在創建用户的時候看到下面的SSL連接錯誤。</p><pre><code>ERROR: Errno::ECONNRESET: Connection reset by peer - SSL_connect
</code></pre><p>####5) 創建新的管理員</p><p>運行下面的命令來創建一個新的管理員賬户及其配置。創建過程中，用户的RSA私鑰會自動生成，它需要保存到一個安全的地方。--file選項會保存RSA私鑰到指定的路徑下。</p><pre><code>root@ubuntu-14-chef:/tmp# chef-server-ctl user-create kashi kashi kashi kashif.fareedi@gmail.com kashi123 --filename /root/kashi.pem
</code></pre><h3 id="chef服務端的管理設置" tabindex="-1">Chef服務端的管理設置 <a class="header-anchor" href="#chef服務端的管理設置" aria-label="Permalink to “Chef服務端的管理設置”">​</a></h3><p>Chef Manage是一個針對企業Chef用户的管理控制台，它提供了可視化的web用户界面，可以管理節點、數據包、規則、環境、Cookbook 和基於角色的訪問控制（RBAC）</p><p>####1) 下載Chef Manage</p><p>從官網複製鏈接並下載chef manage的安裝包。</p><pre><code>root@ubuntu-14-chef:~# wget https://web-dl.packagecloud.io/chef/stable/packages/ubuntu/trusty/opscode-manage_1.17.0-1_amd64.deb
</code></pre><p>####2) 安裝Chef Manage</p><p>使用下面的命令在root的家目錄下安裝它。</p><pre><code>root@ubuntu-14-chef:~# chef-server-ctl install opscode-manage --path /root
</code></pre><p>####3) 重啓Chef Manage和服務端</p><p>安裝完成後我們需要運行下面的命令來重啓chef manage和服務端。</p><pre><code>root@ubuntu-14-chef:~# opscode-manage-ctl reconfigure
root@ubuntu-14-chef:~# chef-server-ctl reconfigure
</code></pre><h3 id="chef-manage網頁控制台" tabindex="-1">Chef Manage網頁控制台 <a class="header-anchor" href="#chef-manage網頁控制台" aria-label="Permalink to “Chef Manage網頁控制台”">​</a></h3><p>我們可以使用localhost或它的全稱域名來訪問網頁控制台，並用已經創建的管理員登錄</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/5-chef-web.png" alt="chef amanage"></p><p>####1) Chef Manage創建新的組織</p><p>你或許被要求創建新的組織，或者也可以接受其他組織的邀請。如下所示，使用縮寫和全名來創建一個新的組織。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/7-create-org.png" alt="Create Org"></p><p>####2) 用命令列創建新的組織</p><p>我們同樣也可以運行下面的命令來創建新的組織。</p><pre><code>root@ubuntu-14-chef:~# chef-server-ctl org-create linux Linoxide Linux Org. --association_user kashi --filename linux.pem
</code></pre><h3 id="設置工作站" tabindex="-1">設置工作站 <a class="header-anchor" href="#設置工作站" aria-label="Permalink to “設置工作站”">​</a></h3>`,46)),i("p",null,[e[3]||(e[3]=t("我們已經完成安裝chef服務端，現在我們可以開始創建任何recipes（",-1)),n(o,{href:"https://docs.chef.io/recipes.html"},{default:r(()=>[...e[0]||(e[0]=[t("基礎配置元素",-1)])]),_:1}),e[4]||(e[4]=t("）、cookbooks（",-1)),n(o,{href:"https://docs.chef.io/cookbooks.html"},{default:r(()=>[...e[1]||(e[1]=[t("基礎配置集",-1)])]),_:1}),e[5]||(e[5]=t("）、attributes（",-1)),n(o,{href:"https://docs.chef.io/attributes.html"},{default:r(()=>[...e[2]||(e[2]=[t("節點屬性",-1)])]),_:1}),e[6]||(e[6]=t("）和其他任何的我們想要對Chef做的修改。",-1))]),e[21]||(e[21]=p(`<p>####1) 在Chef服務端上創建新的用户和組織</p><p>為了設置工作站，我們用命令列創建一個新的用户和組織。</p><pre><code>root@ubuntu-14-chef:~# chef-server-ctl user-create bloger Bloger Kashif bloger.kashif@gmail.com bloger123 --filename bloger.pem

root@ubuntu-14-chef:~# chef-server-ctl org-create blogs Linoxide Blogs Inc. --association_user bloger --filename blogs.pem
</code></pre><p>####2) 下載工作站入門套件</p><p>在工作站的網頁控制台中下載保存入門套件，它用於與服務端協同工作</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/8-download-kit.png" alt="Starter Kit"></p><p>####3) 下載套件後，點擊&quot;Proceed&quot;</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/9-download-kit.png" alt="starter kit"></p><h3 id="用於工作站的chef開發套件設置" tabindex="-1">用於工作站的Chef開發套件設置 <a class="header-anchor" href="#用於工作站的chef開發套件設置" aria-label="Permalink to “用於工作站的Chef開發套件設置”">​</a></h3><p>Chef開發套件是一款包含開發chef所需的所有工具的軟件包。它捆綁了由Chef開發的帶Chef客户端的工具。</p><p>####1) 下載 Chef DK</p><p>我們可以從它的官網鏈接中下載開發包，並選擇操作系統來下載chef開發包。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/10-CDK.png" alt="Chef DK"></p><p>複製鏈接並用wget下載</p><pre><code>root@ubuntu-15-WKS:~# wget https://opscode-omnibus-packages.s3.amazonaws.com/ubuntu/12.04/x86_64/chefdk_0.6.2-1_amd64.deb
</code></pre><p>####2) Chef開發套件安裝</p><p>使用dpkg命令安裝開發套件</p><pre><code>root@ubuntu-15-WKS:~# dpkg -i chefdk_0.6.2-1_amd64.deb
</code></pre><p>####3) Chef DK 驗證</p><p>使用下面的命令驗證客户端是否已經正確安裝。</p><pre><code>root@ubuntu-15-WKS:~# chef verify
</code></pre><hr><pre><code>Running verification for component &#39;berkshelf&#39;
Running verification for component &#39;test-kitchen&#39;
Running verification for component &#39;chef-client&#39;
Running verification for component &#39;chef-dk&#39;
Running verification for component &#39;chefspec&#39;
Running verification for component &#39;rubocop&#39;
Running verification for component &#39;fauxhai&#39;
Running verification for component &#39;knife-spork&#39;
Running verification for component &#39;kitchen-vagrant&#39;
Running verification for component &#39;package installation&#39;
Running verification for component &#39;openssl&#39;
..............
---------------------------------------------
Verification of component &#39;rubocop&#39; succeeded.
Verification of component &#39;knife-spork&#39; succeeded.
Verification of component &#39;openssl&#39; succeeded.
Verification of component &#39;berkshelf&#39; succeeded.
Verification of component &#39;chef-dk&#39; succeeded.
Verification of component &#39;fauxhai&#39; succeeded.
Verification of component &#39;test-kitchen&#39; succeeded.
Verification of component &#39;kitchen-vagrant&#39; succeeded.
Verification of component &#39;chef-client&#39; succeeded.
Verification of component &#39;chefspec&#39; succeeded.
Verification of component &#39;package installation&#39; succeeded.
</code></pre><p>####4) 連接Chef服務端</p><p>我們將創建 ~/.chef並從chef服務端複製兩個用户和組織的pem文件到chef的文件到這個目錄下。</p><pre><code>root@ubuntu-14-chef:~# scp bloger.pem blogs.pem kashi.pem linux.pem root@172.25.10.172:/.chef/
</code></pre><hr><pre><code>root@172.25.10.172&#39;s password:
bloger.pem 100% 1674 1.6KB/s 00:00
blogs.pem 100% 1674 1.6KB/s 00:00
kashi.pem 100% 1678 1.6KB/s 00:00
linux.pem 100% 1678 1.6KB/s 00:00
</code></pre><p>####5) 編輯配置來管理chef環境</p><p>現在使用下面的內容創建&quot;~/.chef/knife.rb&quot;。</p><pre><code>root@ubuntu-15-WKS:/.chef# vim knife.rb
current_dir = File.dirname(__FILE__)

log_level :info
log_location STDOUT
node_name &quot;kashi&quot;
client_key &quot;#{current_dir}/kashi.pem&quot;
validation_client_name &quot;kashi-linux&quot;
validation_key &quot;#{current_dir}/linux.pem&quot;
chef_server_url &quot;https://172.25.10.173/organizations/linux&quot;
cache_type &#39;BasicFile&#39;
cache_options( :path =&gt; &quot;#{ENV[&#39;HOME&#39;]}/.chef/checksums&quot; )
cookbook_path [&quot;#{current_dir}/../cookbooks&quot;]
</code></pre><p>創建knife.rb中指定的“~/cookbooks”文件夾。</p><pre><code>root@ubuntu-15-WKS:/# mkdir cookbooks
</code></pre><p>####6) 測試Knife配置</p><p>運行“knife user list”和“knife client list”來驗證knife是否在工作。</p><pre><code>root@ubuntu-15-WKS:/.chef# knife user list
</code></pre><p>第一次運行的時候可能會看到下面的錯誤，這是因為工作站上還沒有chef服務端的SSL證書。</p><pre><code>ERROR: SSL Validation failure connecting to host: 172.25.10.173 - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed
ERROR: Could not establish a secure connection to the server.
Use \`knife ssl check\` to troubleshoot your SSL configuration.
If your Chef Server uses a self-signed certificate, you can use
\`knife ssl fetch\` to make knife trust the server&#39;s certificates.
</code></pre><p>要從上面的命令中恢復，運行下面的命令來獲取ssl證書，並重新運行knife user和client list，這時候應該就可以了。</p><pre><code>root@ubuntu-15-WKS:/.chef# knife ssl fetch
WARNING: Certificates from 172.25.10.173 will be fetched and placed in your trusted_cert
directory (/.chef/trusted_certs).
</code></pre><p>knife沒有辦法驗證這些是有效的證書。你應該在下載時候驗證這些證書的真實性。</p><p>在/.chef/trusted_certs/ubuntu-14-chef_test_com.crt下面添加ubuntu-14-chef.test.com的證書。</p><p>在上面的命令取得ssl證書後，接着運行下面的命令。</p><pre><code>root@ubuntu-15-WKS:/.chef#knife client list
kashi-linux
</code></pre><h3 id="配置與chef服務端交互的新節點" tabindex="-1">配置與chef服務端交互的新節點 <a class="header-anchor" href="#配置與chef服務端交互的新節點" aria-label="Permalink to “配置與chef服務端交互的新節點”">​</a></h3><p>節點是執行所有基礎設施自動化的chef客户端。因此，在配置完chef-server和knife工作站後，通過配置新的與chef-server交互的節點，來添加新的服務端到我們的chef環境下。</p><p>我們使用下面的命令來添加新的節點與chef服務端工作。</p><pre><code>root@ubuntu-15-WKS:~# knife bootstrap 172.25.10.170 --ssh-user root --ssh-password kashi123 --node-name mydns
</code></pre><hr><pre><code>Doing old-style registration with the validation key at /.chef/linux.pem...
Delete your validation key in order to use your user credentials instead

Connecting to 172.25.10.170
172.25.10.170 Installing Chef Client...
172.25.10.170 --2015-07-04 22:21:16-- https://www.opscode.com/chef/install.sh
172.25.10.170 Resolving www.opscode.com (www.opscode.com)... 184.106.28.91
172.25.10.170 Connecting to www.opscode.com (www.opscode.com)|184.106.28.91|:443... connected.
172.25.10.170 HTTP request sent, awaiting response... 200 OK
172.25.10.170 Length: 18736 (18K) [application/x-sh]
172.25.10.170 Saving to: ‘STDOUT’
172.25.10.170
100%[======================================&gt;] 18,736 --.-K/s in 0s
172.25.10.170
172.25.10.170 2015-07-04 22:21:17 (200 MB/s) - written to stdout [18736/18736]
172.25.10.170
172.25.10.170 Downloading Chef 12 for ubuntu...
172.25.10.170 downloading https://www.opscode.com/chef/metadata?v=12&amp;prerelease=false&amp;nightlies=false&amp;p=ubuntu&amp;pv=14.04&amp;m=x86_64
172.25.10.170 to file /tmp/install.sh.26024/metadata.txt
172.25.10.170 trying wget...
</code></pre><p>之後我們可以在knife節點列表下看到新創建的節點，它也會在新節點創建新的客户端。</p><pre><code>root@ubuntu-15-WKS:~# knife node list
mydns
</code></pre><p>相似地我們只要提供ssh證書通過上面的knife命令，就可以在chef設施上創建多個節點。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>本篇我們學習了chef管理工具並通過安裝和配置設置基本瞭解了它的組件。我希望你在學習安裝和配置Chef服務端以及它的工作站和客户端節點中獲得樂趣。</p><hr>`,56)),i("p",null,[e[8]||(e[8]=t("via: ",-1)),n(o,{href:"http://linoxide.com/ubuntu-how-to/install-configure-chef-ubuntu-14-04-15-04/"},{default:r(()=>[...e[7]||(e[7]=[t("http://linoxide.com/ubuntu-how-to/install-configure-chef-ubuntu-14-04-15-04/",-1)])]),_:1})]),i("p",null,[e[12]||(e[12]=t("作者：",-1)),n(o,{href:"http://linoxide.com/author/kashifs/"},{default:r(()=>[...e[9]||(e[9]=[t("Kashif Siddique",-1)])]),_:1}),e[13]||(e[13]=t(" 譯者：",-1)),n(o,{href:"https://github.com/geekpi"},{default:r(()=>[...e[10]||(e[10]=[t("geekpi",-1)])]),_:1}),e[14]||(e[14]=t(" 校對：",-1)),n(o,{href:"https://github.com/wxy"},{default:r(()=>[...e[11]||(e[11]=[t("wxy",-1)])]),_:1})]),i("p",null,[e[17]||(e[17]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[15]||(e[15]=[t("LCTT",-1)])]),_:1}),e[18]||(e[18]=t(" 原創翻譯，",-1)),n(o,{href:"https://linux.cn/"},{default:r(()=>[...e[16]||(e[16]=[t("Linux中國",-1)])]),_:1}),e[19]||(e[19]=t(" 榮譽推出",-1))])])}const v=c(u,[["render",d]]);export{_ as __pageData,v as default};
