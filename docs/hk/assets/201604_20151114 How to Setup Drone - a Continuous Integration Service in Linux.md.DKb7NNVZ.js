import{_ as a,a0 as p,w as s,s as l,I as o,x as n,a1 as r,A as d,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"如何在 linux 上配置持續集成服務 - Drone | LCTT x X-CMD","titleTemplate":false,"description":"如何在 linux 上配置持續集成服務 - Drone | LCTT (201604) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 linux 上配置持續集成服務 - Drone | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 linux 上配置持續集成服務 - Drone | LCTT (201604) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201604/20151114 How to Setup Drone - a Continuous Integration Service in Linux","title":"如何在 linux 上配置持續集成服務 - Drone","tag":"201604","desc":""},"relativePath":"201604/20151114 How to Setup Drone - a Continuous Integration Service in Linux.md","filePath":"[post].md"}'),u={name:"201604/20151114 How to Setup Drone - a Continuous Integration Service in Linux.md"};function c(b,e,h,g,m,k){const t=p("Link");return s(),l("div",null,[e[25]||(e[25]=o("h1",{id:"如何在-linux-上配置持續集成服務-drone",tabindex:"-1"},[n("如何在 linux 上配置持續集成服務 - Drone "),o("a",{class:"header-anchor",href:"#如何在-linux-上配置持續集成服務-drone","aria-label":"Permalink to “如何在 linux 上配置持續集成服務 - Drone”"},"​")],-1)),o("p",null,[e[1]||(e[1]=n("如果你對一次又一次的克隆、構建、測試和部署代碼感到厭倦了，可以考慮一下持續集成。持續集成簡稱 CI，是一種像我們一樣的頻繁提交的代碼庫，構建、測試和部署的軟件工程實踐。CI 可以幫助我們快速的集成新代碼到已有的代碼庫。如果這個過程是自動化進行的，那麼就會提高開發的速度，因為這可以減少開發人員手工構建和測試的時間。",-1)),r(t,{href:"https://drone.io/"},{default:d(()=>[...e[0]||(e[0]=[n("Drone",-1)])]),_:1}),e[2]||(e[2]=n(" 是一個自由開源項目，用來提供一個非常棒的持續集成服務的環境，採用 Apache 2.0 協議發佈。它已經集成近很多代碼庫提供商，比如 Github、Bitbucket 以及 Google Code，它可以從代碼庫提取代碼，使我們可以對包括 PHP, Node, Ruby, Go, Dart, Python, C/C++, JAVA 等等在內的各種語言編譯構建。它是如此一個強大的平台，它使用了容器和 docker 技術，這讓用户每次構建都可以在保證隔離的條件下完全控制他們自己的構建環境。",-1))]),e[26]||(e[26]=i(`<h3 id="_1-安裝-docker" tabindex="-1">1. 安裝 Docker <a class="header-anchor" href="#_1-安裝-docker" aria-label="Permalink to “1. 安裝 Docker”">​</a></h3><p>首先，我們要安裝 docker，因為這是 Drone 的工作流的最關鍵的元素。Drone 合理的利用了 docker 來構建和測試應用。容器技術提高了應用部署的效率。要安裝 docker ，我們需要在不同的 linux 發行版本運行下面對應的命令，我們這裏會説明 Ubuntu 14.04 和 CentOS 7 兩個版本。</p><h4 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-label="Permalink to “Ubuntu”">​</a></h4><p>要在 Ubuntu 上安裝 Docker ，我們只需要運行下面的命令。</p><pre><code># apt-get update
# apt-get install docker.io
</code></pre><p>安裝之後我們需要使用<code>service</code> 命令重啓 docker 引擎。</p><pre><code># service docker restart
</code></pre><p>然後我們讓 docker 在系統啓動時自動啓動。</p><pre><code># update-rc.d docker defaults

Adding system startup for /etc/init.d/docker ...
/etc/rc0.d/K20docker -&gt; ../init.d/docker
/etc/rc1.d/K20docker -&gt; ../init.d/docker
/etc/rc6.d/K20docker -&gt; ../init.d/docker
/etc/rc2.d/S20docker -&gt; ../init.d/docker
/etc/rc3.d/S20docker -&gt; ../init.d/docker
/etc/rc4.d/S20docker -&gt; ../init.d/docker
/etc/rc5.d/S20docker -&gt; ../init.d/docker
</code></pre><h4 id="centos" tabindex="-1">CentOS <a class="header-anchor" href="#centos" aria-label="Permalink to “CentOS”">​</a></h4><p>第一，我們要更新機器上已經安裝的軟件包。我們可以使用下面的命令。</p><pre><code>#  sudo yum update
</code></pre><p>要在 centos 上安裝 docker，我們可以簡單的運行下面的命令。</p><pre><code>#  curl -sSL https://get.docker.com/ | sh
</code></pre><p>安裝好 docker 引擎之後我麼只需要簡單使用下面的<code>systemd</code> 命令啓動 docker，因為 centos 7 的默認初始化系統是 systemd。</p><pre><code># systemctl start docker
</code></pre><p>然後我們要讓 docker 在系統啓動時自動啓動。</p><pre><code># systemctl enable docker

ln -s &#39;/usr/lib/systemd/system/docker.service&#39; &#39;/etc/systemd/system/multi-user.target.wants/docker.service&#39;
</code></pre><h3 id="_2-安裝-sqlite-驅動" tabindex="-1">2. 安裝 SQlite 驅動 <a class="header-anchor" href="#_2-安裝-sqlite-驅動" aria-label="Permalink to “2. 安裝 SQlite 驅動”">​</a></h3><p>Drone 默認使用 SQlite3 資料庫服務器來保存數據和信息。它會在 /var/lib/drone/ 自動創建名為 drone.sqlite 的資料庫來處理資料庫模式的創建和遷移。要安裝 SQlite3 我們要完成以下幾步。</p><h4 id="ubuntu-14-04" tabindex="-1">Ubuntu 14.04 <a class="header-anchor" href="#ubuntu-14-04" aria-label="Permalink to “Ubuntu 14.04”">​</a></h4><p>因為 SQlite3 存在於 Ubuntu 14.04 的默認軟件庫，我們只需要簡單的使用 apt 命令安裝它。</p><pre><code># apt-get install libsqlite3-dev
</code></pre><h4 id="centos-7" tabindex="-1">CentOS 7 <a class="header-anchor" href="#centos-7" aria-label="Permalink to “CentOS 7”">​</a></h4><p>要在 Centos 7 上安裝需要使用下面的 yum 命令。</p><pre><code># yum install sqlite-devel
</code></pre><h3 id="_3-安裝-drone" tabindex="-1">3. 安裝 Drone <a class="header-anchor" href="#_3-安裝-drone" aria-label="Permalink to “3. 安裝 Drone”">​</a></h3><p>最後，我們安裝好依賴的軟件，我們現在更進一步的接近安裝 Drone。在這一步裏我們只簡單的從官方鏈接下載對應的二進制軟件包，然後使用默認軟件包管理器安裝 Drone。</p><h4 id="ubuntu-1" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu-1" aria-label="Permalink to “Ubuntu”">​</a></h4>`,29)),o("p",null,[e[4]||(e[4]=n("我們將使用 wget 從官方的 ",-1)),r(t,{href:"http://downloads.drone.io/master/drone.deb"},{default:d(()=>[...e[3]||(e[3]=[n("Debian 文件下載鏈接",-1)])]),_:1}),e[5]||(e[5]=n("下載 drone 的 debian 軟件包。下面就是下載命令。",-1))]),e[27]||(e[27]=o("pre",null,[o("code",null,`# wget downloads.drone.io/master/drone.deb

Resolving downloads.drone.io (downloads.drone.io)... 54.231.48.98
Connecting to downloads.drone.io (downloads.drone.io)|54.231.48.98|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 7722384 (7.4M) [application/x-debian-package]
Saving to: 'drone.deb'
100%[======================================>] 7,722,384 1.38MB/s in 17s
2015-11-06 14:09:28 (456 KB/s) - 'drone.deb' saved [7722384/7722384]
`)],-1)),e[28]||(e[28]=o("p",null,"下載好之後，我們將使用 dpkg 軟件包管理器安裝它。",-1)),e[29]||(e[29]=o("pre",null,[o("code",null,`# dpkg -i drone.deb

Selecting previously unselected package drone.
(Reading database ... 28077 files and directories currently installed.)
Preparing to unpack drone.deb ...
Unpacking drone (0.3.0-alpha-1442513246) ...
Setting up drone (0.3.0-alpha-1442513246) ...
Your system ubuntu 14: using upstart to control Drone
drone start/running, process 9512
`)],-1)),e[30]||(e[30]=o("h4",{id:"centos-1",tabindex:"-1"},[n("CentOS "),o("a",{class:"header-anchor",href:"#centos-1","aria-label":"Permalink to “CentOS”"},"​")],-1)),o("p",null,[e[7]||(e[7]=n("在 CentOS 機器上我們要使用 wget 命令從",-1)),r(t,{href:"http://downloads.drone.io/master/drone.rpm"},{default:d(()=>[...e[6]||(e[6]=[n("下載鏈接",-1)])]),_:1}),e[8]||(e[8]=n("下載 RPM 包。",-1))]),e[31]||(e[31]=i(`<pre><code># wget downloads.drone.io/master/drone.rpm

--2015-11-06 11:06:45-- http://downloads.drone.io/master/drone.rpm
Resolving downloads.drone.io (downloads.drone.io)... 54.231.114.18
Connecting to downloads.drone.io (downloads.drone.io)|54.231.114.18|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 7763311 (7.4M) [application/x-redhat-package-manager]
Saving to: ‘drone.rpm’
100%[======================================&gt;] 7,763,311 1.18MB/s in 20s
2015-11-06 11:07:06 (374 KB/s) - ‘drone.rpm’ saved [7763311/7763311]
</code></pre><p>然後我們使用 yum 安裝 rpm 包。</p><pre><code># yum localinstall drone.rpm
</code></pre><h3 id="_4-配置端口" tabindex="-1">4. 配置端口 <a class="header-anchor" href="#_4-配置端口" aria-label="Permalink to “4. 配置端口”">​</a></h3><p>安裝完成之後，我們要先進行配置才能工作起來。drone 的配置文件在<strong>/etc/drone/drone.toml</strong> 。默認情況下 drone 的 web 接口使用的是80，而這也是 http 默認的端口，如果我們修改它，請按下面所示的修改配置文件裏 server 塊對應的值。</p><pre><code>[server]
port=&quot;:80&quot;
</code></pre><h3 id="_5-集成-github" tabindex="-1">5. 集成 Github <a class="header-anchor" href="#_5-集成-github" aria-label="Permalink to “5. 集成 Github”">​</a></h3>`,7)),o("p",null,[e[10]||(e[10]=n("為了運行 Drone 我們必須設置最少一個和 GitHub、GitHub 企業版，Gitlab，Gogs，Bitbucket 關聯的集成點。在本文裏我們只集成了 github，但是如果我們要集成其他的服務，我們可以在配置文件做修改。為了集成 github 我們需要在github 的設置裏創建一個新的應用：",-1)),r(t,{href:"https://github.com/settings/developers"},{default:d(()=>[...e[9]||(e[9]=[n("https://github.com/settings/developers",-1)])]),_:1}),e[11]||(e[11]=n(" 。",-1))]),e[32]||(e[32]=i(`<p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/registering-app-github.png" alt="Registering App Github"></p><p>要創建一個應用，我們需要在 <code>New Application</code> 頁面點擊 <code>Register</code>，然後如下所示填表。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/registering-OAuth-app-github.png" alt="Registering OAuth app github"></p><p>我們應該保證在應用的配置項裏設置了<strong>授權回調鏈接</strong>，鏈接看起來類似 <code>http://drone.linoxide.com/api/auth/github.com</code>。然後我們點擊註冊應用。所有都做好之後我們會看到我們需要在我們的 Drone 配置文件裏配置的客户端 ID 和客户端密鑰。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/client-id-secret-token.png" alt="Client ID and Secret Token"></p><p>在這些都完成之後我們需要使用文本編輯器編輯 drone 配置文件，比如使用下面的命令。</p><pre><code># nano /etc/drone/drone.toml
</code></pre><p>然後我們會在 drone 的配置文件裏面找到<code>[github]</code> 部分，緊接着的是下面所示的配置內容</p><pre><code>[github]
client=&quot;3dd44b969709c518603c&quot;
secret=&quot;4ee261abdb431bdc5e96b19cc3c498403853632a&quot;
# orgs=[]
# open=false
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-github-drone-e1446835124465.png" alt="Configuring Github Drone"></p><h3 id="_6-配置-smtp-服務器" tabindex="-1">6. 配置 SMTP 服務器 <a class="header-anchor" href="#_6-配置-smtp-服務器" aria-label="Permalink to “6. 配置 SMTP 服務器”">​</a></h3><p>如果我們想讓 drone 使用 email 發送通知，那麼我們需要在 SMTP 配置裏面設置我們的 SMTP 服務器。如果我們已經有了一個 SMTP 服務，那就只需要簡單的使用它的配置文件就行了，但是因為我們沒有一個 SMTP 服務器，我們需要安裝一個 MTA 比如 Postfix，然後在 drone 配置文件裏配置好 SMTP。</p><h4 id="ubuntu-2" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu-2" aria-label="Permalink to “Ubuntu”">​</a></h4><p>在 ubuntu 裏使用下面的 apt 命令安裝 postfix。</p><pre><code># apt-get install postfix
</code></pre><h4 id="centos-2" tabindex="-1">CentOS <a class="header-anchor" href="#centos-2" aria-label="Permalink to “CentOS”">​</a></h4><p>在 CentOS 裏使用下面的 yum 命令安裝 postfix。</p><pre><code># yum install postfix
</code></pre><p>安裝好之後，我們需要編輯我們的 postfix 配置文件。</p><pre><code># nano /etc/postfix/main.cf
</code></pre><p>然後我們要把 myhostname 的值替換為我們自己的 FQDN，比如 drone.linoxide.com。</p><pre><code>myhostname = drone.linoxide.com
</code></pre><p>現在開始配置 drone 配置文件裏的 SMTP 部分。</p><pre><code># nano /etc/drone/drone.toml
</code></pre><p>找到<code>[smtp]</code> 部分補充上下面的內容。</p><pre><code>[smtp]
host = &quot;drone.linoxide.com&quot;
port = &quot;587&quot;
from = &quot;root@drone.linoxide.com&quot;
user = &quot;root&quot;
pass = &quot;password&quot;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-smtp-drone.png" alt="Configuring SMTP Drone"></p><p>注意：這裏的 <strong>user</strong> 和 <strong>pass</strong> 參數強烈推薦一定要改成某個具體用户的配置。</p><h3 id="_7-配置-worker" tabindex="-1">7. 配置 Worker <a class="header-anchor" href="#_7-配置-worker" aria-label="Permalink to “7. 配置 Worker”">​</a></h3><p>如我們所知的 drone 利用了 docker 完成構建、測試任務，我們需要把 docker 配置為 drone 的 worker。要完成這些需要修改 drone 配置文件裏的<code>[worker]</code> 部分。</p><pre><code># nano /etc/drone/drone.toml
</code></pre><p>然後取消底下幾行的註釋並且補充上下面的內容。</p><pre><code>[worker]
nodes=[
&quot;unix:///var/run/docker.sock&quot;,
&quot;unix:///var/run/docker.sock&quot;
]
</code></pre><p>這裏我們只設置了兩個節點，這意味着上面的配置文件只能同時執行2 個構建操作。要提高併發性可以增大節點的值。</p><pre><code>[worker]
nodes=[
&quot;unix:///var/run/docker.sock&quot;,
&quot;unix:///var/run/docker.sock&quot;,
&quot;unix:///var/run/docker.sock&quot;,
&quot;unix:///var/run/docker.sock&quot;
]
</code></pre><p>使用上面的配置文件 drone 被配置為使用本地的 docker 守護程序可以同時構建4個任務。</p><h3 id="_8-重啓-drone" tabindex="-1">8. 重啓 Drone <a class="header-anchor" href="#_8-重啓-drone" aria-label="Permalink to “8. 重啓 Drone”">​</a></h3><p>最後，當所有的安裝和配置都準備好之後，我們現在要在本地的 linux 機器上啓動 drone 服務器。</p><h4 id="ubuntu-3" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu-3" aria-label="Permalink to “Ubuntu”">​</a></h4><p>因為 ubuntu 14.04 使用了 sysvinit 作為默認的初始化系統，所以只需要簡單執行下面的 service 命令就可以啓動 drone 了。</p><pre><code># service drone restart
</code></pre><p>要讓 drone 在系統啓動時也自動運行，需要運行下面的命令。</p><pre><code># update-rc.d drone defaults
</code></pre><h4 id="centos-3" tabindex="-1">CentOS <a class="header-anchor" href="#centos-3" aria-label="Permalink to “CentOS”">​</a></h4><p>因為 CentOS 7使用 systemd 作為初始化系統，所以只需要運行下面的 systemd 命令就可以重啓 drone。</p><pre><code># systemctl restart drone
</code></pre><p>要讓 drone 自動運行只需要運行下面的命令。</p><pre><code># systemctl enable drone
</code></pre><h3 id="_9-添加防火牆例外規則" tabindex="-1">9. 添加防火牆例外規則 <a class="header-anchor" href="#_9-添加防火牆例外規則" aria-label="Permalink to “9. 添加防火牆例外規則”">​</a></h3><p>眾所周知 drone 默認使用了80 端口而我們又沒有修改它，所以我們需要配置防火牆程序允許80 端口（http）開放並允許其他機器可以通過網絡連接。</p><h4 id="ubuntu-14-04-1" tabindex="-1">Ubuntu 14.04 <a class="header-anchor" href="#ubuntu-14-04-1" aria-label="Permalink to “Ubuntu 14.04”">​</a></h4><p>iptables 是最流行的防火牆程序，並且 ubuntu 默認安裝了它。我們需要修改 iptable 以暴露端口80，這樣我們才能讓 drone 的 web 界面在網絡上被大家訪問。</p><pre><code># iptables -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT
# /etc/init.d/iptables save
</code></pre><h4 id="centos-7-1" tabindex="-1">CentOS 7 <a class="header-anchor" href="#centos-7-1" aria-label="Permalink to “CentOS 7”">​</a></h4><p>因為 CentOS 7 默認安裝了 systemd，它使用 firewalld 作為防火牆程序。為了在 firewalld 上打開80端口（http 服務），我們需要執行下面的命令。</p><pre><code># firewall-cmd --permanent --add-service=http

success

# firewall-cmd --reload

success
</code></pre><h3 id="_10-訪問-web-界面" tabindex="-1">10. 訪問 web 界面 <a class="header-anchor" href="#_10-訪問-web-界面" aria-label="Permalink to “10. 訪問 web 界面”">​</a></h3><p>現在我們將在我們最喜歡的瀏覽器上通過 web 界面打開 drone。要完成這些我們要把瀏覽器指向運行 drone 的服務器。因為 drone 默認使用80 端口而我們有沒有修改過，所以我們只需要在瀏覽器里根據我們的配置輸入<code>http://ip-address/</code> 或 <code>http://drone.linoxide.com</code> 就行了。在我們正確的完成了上述操作後，我們就可以看到登錄界面了。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/login-github-drone-e1446834688394.png" alt="Login Github Drone"></p><p>因為在上面的步驟裏配置了 Github，我們現在只需要簡單的選擇 github 然後進入應用授權步驟，這些完成後我們就可以進入工作台了。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/drone-dashboard.png" alt="Drone Dashboard"></p><p>這裏它會同步我們在 github 上的代碼庫，然後詢問我們要在 drone 上構建那個代碼庫。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/activate-repository-e1446835574595.png" alt="Activate Repository"></p><p>這一步完成後，它會詢問我們在代碼庫裏添加<code>.drone.yml</code> 文件的新名稱，並且在這個文件裏定義構建的過程和配置項，比如使用那個 docker 鏡像，執行那些命令和腳本來編譯，等等。</p><p>我們按照下面的內容來配置我們的<code>.drone.yml</code>。</p><pre><code>image: python
script:
 - python helloworld.py
 - echo &quot;Build has been completed.&quot;
</code></pre><p>這一步完成後我們就可以使用 drone 應用裏的 YAML 格式的配置文件來構建我們的應用了。所有對代碼庫的提交和改變此時都會同步到這個倉庫。一旦提交完成了，drone 就會自動開始構建。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/building-application-drone.png" alt="Building Application Drone"></p><p>所有操作都完成後，我們就能在終端看到構建的結果了。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/build-success-drone.png" alt="Build Success Drone"></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>在本文中我們學習瞭如何安裝一個可以工作的使用 drone 的持續集成平台。如果我們願意我們甚至可以從 drone.io 官方提供的服務開始工作。我們可以根據自己的需求從免費的服務或者收費服務開始。它通過漂亮的 web 界面和強大的功能改變了持續集成的世界。它可以集成很多第三方應用和部署平台。如果你有任何問題、建議可以直接反饋給我們，謝謝。</p><hr>`,73)),o("p",null,[e[13]||(e[13]=n("via: ",-1)),r(t,{href:"http://linoxide.com/linux-how-to/setup-drone-continuous-integration-linux/"},{default:d(()=>[...e[12]||(e[12]=[n("http://linoxide.com/linux-how-to/setup-drone-continuous-integration-linux/",-1)])]),_:1})]),o("p",null,[e[17]||(e[17]=n("作者：",-1)),r(t,{href:"http://linoxide.com/author/arunp/"},{default:d(()=>[...e[14]||(e[14]=[n("Arun Pyasi",-1)])]),_:1}),e[18]||(e[18]=n(" 譯者：",-1)),r(t,{href:"https://github.com/oska874"},{default:d(()=>[...e[15]||(e[15]=[n("ezio",-1)])]),_:1}),e[19]||(e[19]=n(" 校對：",-1)),r(t,{href:"https://github.com/wxy"},{default:d(()=>[...e[16]||(e[16]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[22]||(e[22]=n("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[20]||(e[20]=[n("LCTT",-1)])]),_:1}),e[23]||(e[23]=n(" 原創編譯，",-1)),r(t,{href:"https://linux.cn/"},{default:d(()=>[...e[21]||(e[21]=[n("Linux中國",-1)])]),_:1}),e[24]||(e[24]=n(" 榮譽推出",-1))])])}const S=a(u,[["render",c]]);export{w as __pageData,S as default};
