import{_ as o,a0 as u,w as i,s as c,ao as s,I as r,x as p,a1 as a,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"如何在 Ubuntu 15.04 中安裝 puppet | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Ubuntu 15.04 中安裝 puppet | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Ubuntu 15.04 中安裝 puppet | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Ubuntu 15.04 中安裝 puppet | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20150806 Installation Guide for Puppet on Ubuntu 15.04","title":"如何在 Ubuntu 15.04 中安裝 puppet","tag":"201512","desc":""},"relativePath":"201512/20150806 Installation Guide for Puppet on Ubuntu 15.04.md","filePath":"[post].md"}'),l={name:"201512/20150806 Installation Guide for Puppet on Ubuntu 15.04.md"};function d(m,e,g,b,h,f){const t=u("Link");return i(),c("div",null,[e[16]||(e[16]=s(`<h1 id="如何在-ubuntu-15-04-中安裝-puppet" tabindex="-1">如何在 Ubuntu 15.04 中安裝 puppet <a class="header-anchor" href="#如何在-ubuntu-15-04-中安裝-puppet" aria-label="Permalink to “如何在 Ubuntu 15.04 中安裝 puppet”">​</a></h1><p>大家好，本教程將學習如何在 ubuntu 15.04 上面安裝 puppet，它可以用來管理你的服務器基礎環境。puppet 是由puppet 實驗室（Puppet Labs）開發並維護的一款開源的配置管理軟件，它能夠幫我們自動化供給、配置和管理服務器的基礎環境。不管我們管理的是幾個服務器還是數以千計的計算機組成的業務報表體系，puppet 都能夠使管理員從繁瑣的手動配置調整中解放出來，騰出時間和精力去提系統的升整體效率。它能夠確保所有自動化流程作業的一致性、可靠性以及穩定性。它讓管理員和開發者更緊密的聯繫在一起，使開發者更容易產出付出設計良好、簡潔清晰的代碼。puppet 提供了配置管理和數據中心自動化的兩個解決方案。這兩個解決方案分別是 <strong>puppet 開源版</strong> 和 <strong>puppet 企業版</strong>。puppet 開源版以 Apache 2.0 許可證發佈，它是一個非常靈活、可定製的解決方案，設置初衷是幫助管理員去完成那些重複性操作工作。pupprt 企業版是一個全平台複雜 IT 環境下的成熟解決方案，它除了擁有開源版本所有優勢以外還有移動端 apps、只有商業版才有的加強支持，以及模組化和集成管理等。Puppet 使用 SSL 證書來認證主控服務器與代理節點之間的通信。</p><p>本教程將要介紹如何在運行 ubuntu 15.04 的主控服務器和代理節點上面安裝開源版的 puppet。在這裏，我們用一台服務器做主控服務器（master），管理和控制剩餘的當作 puppet 代理節點（agent node）的服務器，這些代理節點將依據主控服務器來進行配置。在 ubuntu 15.04 只需要簡單的幾步就能安裝配置好 puppet，用它來管理我們的服務器基礎環境非常的方便。（LCTT 譯註：puppet 採用 C/S 架構，所以必須有至少有一台作為服務器，其他作為客户端處理）</p><h3 id="_1-設置主機文件" tabindex="-1">1.設置主機文件 <a class="header-anchor" href="#_1-設置主機文件" aria-label="Permalink to “1.設置主機文件”">​</a></h3><p>在本教程裏，我們將使用2台運行 ubuntu 15.04 “Vivid Vervet&quot; 的主機，一台作為主控服務器，另一台作為 puppet 的代理節點。下面是我們將用到的服務器的基礎信息。</p><ul><li>puupet 主控服務器 IP：44.55.88.6 ，主機名： puppetmaster</li><li>puppet 代理節點 IP： 45.55.86.39 ，主機名： puppetnode</li></ul><p>我們要在代理節點和服務器這兩台機器的 hosts 文件裏面都添加上相應的條目，使用 root 或是 sudo 訪問權限來編輯 /etc/hosts 文件，命令如下：</p><pre><code># nano /etc/hosts

45.55.88.6 puppetmaster.example.com puppetmaster
45.55.86.39 puppetnode.example.com puppetnode
</code></pre><p>注意，puppet 主控服務器必使用 8140 端口來運行，所以請務必保證開啓8140端口。</p><h3 id="_2-用-ntp-更新時間" tabindex="-1">2. 用 NTP 更新時間 <a class="header-anchor" href="#_2-用-ntp-更新時間" aria-label="Permalink to “2. 用 NTP 更新時間”">​</a></h3><p>puppet 代理節點所使用系統時間必須要準確，這樣可以避免代理證書出現問題。如果有時間差異，那麼證書將過期失效，所以服務器與代理節點的系統時間必須互相同步。我們使用 NTP（Network Time Protocol，網絡時間協議）來同步時間。<strong>在服務器與代理節點上面分別</strong>運行以下命令來同步時間。</p><pre><code># ntpdate pool.ntp.org

17 Jun 00:17:08 ntpdate[882]: adjust time server 66.175.209.17 offset -0.001938 sec    
</code></pre><p>（LCTT 譯註：顯示類似的輸出結果表示運行正常）</p><p>如果沒有安裝 ntp，請使用下面的命令更新你的軟件倉庫，安裝並運行ntp服務</p><pre><code># apt-get update &amp;&amp; sudo apt-get -y install ntp ; service ntp restart
</code></pre><h3 id="_3-安裝主控服務器軟件" tabindex="-1">3. 安裝主控服務器軟件 <a class="header-anchor" href="#_3-安裝主控服務器軟件" aria-label="Permalink to “3. 安裝主控服務器軟件”">​</a></h3><p>安裝開源版本的 puppet 有很多的方法。在本教程中我們在 puppet 實驗室官網下載一個名為 puppetlabs-release 的軟件包的軟件源，安裝後它將為我們在軟件源裏面添加 puppetmaster-passenger。puppetmaster-passenger 包括帶有 apache 的 puppet 主控服務器。我們開始下載這個軟件包：</p><pre><code># cd /tmp/
# wget https://apt.puppetlabs.com/puppetlabs-release-trusty.deb

--2015-06-17 00:19:26-- https://apt.puppetlabs.com/puppetlabs-release-trusty.deb
Resolving apt.puppetlabs.com (apt.puppetlabs.com)... 192.155.89.90, 2600:3c03::f03c:91ff:fedb:6b1d
Connecting to apt.puppetlabs.com (apt.puppetlabs.com)|192.155.89.90|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 7384 (7.2K) [application/x-debian-package]
Saving to: ‘puppetlabs-release-trusty.deb’

puppetlabs-release-tr 100%[===========================&gt;] 7.21K --.-KB/s in 0.06s

2015-06-17 00:19:26 (130 KB/s) - ‘puppetlabs-release-trusty.deb’ saved [7384/7384]
</code></pre><p>下載完成，我們來安裝它：</p><pre><code># dpkg -i puppetlabs-release-trusty.deb

Selecting previously unselected package puppetlabs-release.
(Reading database ... 85899 files and directories currently installed.)
Preparing to unpack puppetlabs-release-trusty.deb ...
Unpacking puppetlabs-release (1.0-11) ...
Setting up puppetlabs-release (1.0-11) ...
</code></pre><p>使用 apt 包管理命令更新一下本地的軟件源：</p><pre><code># apt-get update
</code></pre><p>現在我們就可以安裝 puppetmaster-passenger 了</p><pre><code># apt-get install puppetmaster-passenger
</code></pre><p><strong>提示</strong>: 在安裝的時候可能會報錯：</p><pre><code>Warning: Setting templatedir is deprecated.see http://links.puppetlabs.com/env-settings-deprecations (at /usr/lib/ruby/vendor_ruby/puppet/settings.rb:1139:in \`issue_deprecation_warning&#39;)
</code></pre><p>不過不用擔心，忽略掉它就好，我們只需要在設置配置文件的時候把這一項禁用就行了。</p><p>如何來查看puppet 主控服務器是否已經安裝成功了呢？非常簡單，只需要使用下面的命令查看它的版本就可以了。</p><pre><code># puppet --version

3.8.1
</code></pre><p>現在我們已經安裝好了 puppet 主控服務器。因為我們使用的是配合 apache 的 passenger，由 apache 來控制 puppet 主控服務器，當 apache 運行時 puppet 主控才運行。</p><p>在開始之前，我們需要通過停止 apache 服務來讓 puppet 主控服務器停止運行。</p><pre><code># systemctl stop apache2
</code></pre><h3 id="_4-使用-apt-工具鎖定主控服務器的版本" tabindex="-1">4. 使用 Apt 工具鎖定主控服務器的版本 <a class="header-anchor" href="#_4-使用-apt-工具鎖定主控服務器的版本" aria-label="Permalink to “4. 使用 Apt 工具鎖定主控服務器的版本”">​</a></h3><p>現在已經安裝了 3.8.1 版的 puppet，我們鎖定這個版本不讓它隨意升級，因為升級會造成配置文件混亂。 使用 apt 工具來鎖定它，這裏我們需要使用文本編輯器來創建一個新的文件 <strong>/etc/apt/preferences.d/00-puppet.pref</strong></p><pre><code># nano /etc/apt/preferences.d/00-puppet.pref
</code></pre><p>在新創建的文件裏面添加以下內容：</p><pre><code># /etc/apt/preferences.d/00-puppet.pref
Package: puppet puppet-common puppetmaster-passenger
Pin: version 3.8*
Pin-Priority: 501
</code></pre><p>這樣在以後的系統軟件升級中， puppet 主控服務器將不會跟隨系統軟件一起升級。</p><h3 id="_5-配置-puppet-主控服務器" tabindex="-1">5. 配置 Puppet 主控服務器### <a class="header-anchor" href="#_5-配置-puppet-主控服務器" aria-label="Permalink to “5. 配置 Puppet 主控服務器###”">​</a></h3><p>Puppet 主控服務器作為一個證書發行機構，需要生成它自己的證書，用於簽署所有代理的證書的請求。首先我們要刪除所有在該軟件包安裝過程中創建出來的 ssl 證書。本地默認的 puppet 證書放在 /var/lib/puppet/ssl。因此我們只需要使用 rm 命令來整個移除這些證書就可以了。</p><pre><code># rm -rf /var/lib/puppet/ssl
</code></pre><p>現在來配置該證書，在創建 puppet 主控服務器證書時，我們需要包括代理節點與主控服務器溝通所用的每個 DNS 名稱。使用文本編輯器來修改服務器的配置文件 puppet.conf</p><pre><code># nano /etc/puppet/puppet.conf
</code></pre><p>輸出的結果像下面這樣</p><pre><code>[main]
logdir=/var/log/puppet
vardir=/var/lib/puppet
ssldir=/var/lib/puppet/ssl
rundir=/var/run/puppet
factpath=$vardir/lib/facter
templatedir=$confdir/templates

[master]
# These are needed when the puppetmaster is run by passenger
# and can safely be removed if webrick is used.
ssl_client_header = SSL_CLIENT_S_DN
ssl_client_verify_header = SSL_CLIENT_VERIFY
</code></pre><p>在這我們需要註釋掉 templatedir 這行使它失效。然後在文件的 <code>[main]</code> 小節的結尾添加下面的信息。</p><pre><code>server = puppetmaster
environment = production
runinterval = 1h
strict_variables = true
certname = puppetmaster
dns_alt_names = puppetmaster, puppetmaster.example.com
</code></pre>`,47)),r("p",null,[e[1]||(e[1]=p("還有很多你可能用的到的配置選項。 如果你有需要，在 Puppet 實驗室有一份詳細的描述文件供你閲讀： ",-1)),a(t,{href:"https://docs.puppetlabs.com/puppet/latest/reference/config_file_main.html"},{default:n(()=>[...e[0]||(e[0]=[p("Main Config File (puppet.conf)",-1)])]),_:1}),e[2]||(e[2]=p("。",-1))]),e[17]||(e[17]=s(`<p>編輯完成後保存退出。</p><p>使用下面的命令來生成一個新的證書。</p><pre><code># puppet master --verbose --no-daemonize

Info: Creating a new SSL key for ca
Info: Creating a new SSL certificate request for ca
Info: Certificate Request fingerprint (SHA256): F6:2F:69:89:BA:A5:5E:FF:7F:94:15:6B:A7:C4:20:CE:23:C7:E3:C9:63:53:E0:F2:76:D7:2E:E0:BF:BD:A6:78
...
Notice: puppetmaster has a waiting certificate request
Notice: Signed certificate request for puppetmaster
Notice: Removing file Puppet::SSL::CertificateRequest puppetmaster at &#39;/var/lib/puppet/ssl/ca/requests/puppetmaster.pem&#39;
Notice: Removing file Puppet::SSL::CertificateRequest puppetmaster at &#39;/var/lib/puppet/ssl/certificate_requests/puppetmaster.pem&#39;
Notice: Starting Puppet master version 3.8.1
^CNotice: Caught INT; storing stop
Notice: Processing stop
</code></pre><p>至此，證書已經生成。一旦我們看到 <strong>Notice: Starting Puppet master version 3.8.1</strong>，就表明證書就已經制作好了。我們按下 CTRL-C 回到 shell 命令列。</p><p>查看新生成證書的信息，可以使用下面的命令。</p><pre><code># puppet cert list -all

+ &quot;puppetmaster&quot; (SHA256) 33:28:97:86:A1:C3:2F:73:10:D1:FB:42:DA:D5:42:69:71:84:F0:E2:8A:01:B9:58:38:90:E4:7D:B7:25:23:EC (alt names: &quot;DNS:puppetmaster&quot;, &quot;DNS:puppetmaster.example.com&quot;)
</code></pre><h3 id="_6-創建一個-puppet-清單" tabindex="-1">6. 創建一個 Puppet 清單 <a class="header-anchor" href="#_6-創建一個-puppet-清單" aria-label="Permalink to “6. 創建一個 Puppet 清單”">​</a></h3><p>默認的主要清單（Manifest）是 /etc/puppet/manifests/site.pp。 這個主要清單文件包括了用於在代理節點執行的配置定義。現在我們來創建一個清單文件：</p><pre><code># nano /etc/puppet/manifests/site.pp
</code></pre><p>在剛打開的文件裏面添加下面這幾行：</p><pre><code># execute &#39;apt-get update&#39;
exec { &#39;apt-update&#39;: # exec resource named &#39;apt-update&#39;
command =&gt; &#39;/usr/bin/apt-get update&#39; # command this resource will run
}

# install apache2 package
package { &#39;apache2&#39;:
require =&gt; Exec[&#39;apt-update&#39;], # require &#39;apt-update&#39; before installing
ensure =&gt; installed,
}

# ensure apache2 service is running
service { &#39;apache2&#39;:
ensure =&gt; running,
}
</code></pre><p>以上這幾行的意思是給代理節點部署 apache web 服務。</p><h3 id="_7-運行-puppet-主控服務" tabindex="-1">7. 運行 puppet 主控服務 <a class="header-anchor" href="#_7-運行-puppet-主控服務" aria-label="Permalink to “7. 運行 puppet 主控服務”">​</a></h3><p>已經準備好運行 puppet 主控服務器 了，那麼開啓 apache 服務來讓它啓動</p><pre><code># systemctl start apache2
</code></pre><p>我們 puppet 主控服務器已經運行，不過它還不能管理任何代理節點。現在我們給 puppet 主控服務器添加代理節點.</p><p><strong>提示</strong>: 如果報錯</p><pre><code>Job for apache2.service failed. see &quot;systemctl status apache2.service&quot; and &quot;journalctl -xe&quot; for details.
</code></pre><p>肯定是 apache 服務器有一些問題，我們可以使用 root 或是 sudo 訪問權限來運行<strong>apachectl start</strong>查看它輸出的日誌。在本教程執行過程中, 我們發現一個 <strong>/etc/apache2/sites-enabled/puppetmaster.conf</strong> 的證書配置問題。修改其中的<strong>SSLCertificateFile /var/lib/puppet/ssl/certs/server.pem <strong>為 <strong>SSLCertificateFile /var/lib/puppet/ssl/certs/puppetmaster.pem</strong>，然後註釋掉後面這行</strong>SSLCertificateKeyFile</strong> 。然後在命令列重新啓動 apache。</p><h3 id="_8-安裝-puppet-代理節點的軟件包" tabindex="-1">8. 安裝 Puppet 代理節點的軟件包 <a class="header-anchor" href="#_8-安裝-puppet-代理節點的軟件包" aria-label="Permalink to “8. 安裝 Puppet 代理節點的軟件包”">​</a></h3><p>我們已經準備好了 puppet 的服務器，現在需要一個可以管理的代理節點，我們將安裝 puppet 代理軟件到節點上去。這裏我們要給每一個需要管理的節點安裝代理軟件，並且確保這些節點能夠通過 DNS 查詢到服務器主機。下面將 安裝最新的代理軟件到 節點 puppetnode.example.com 上。</p><p>在代理節點上使用下面的命令下載 puppet 實驗室提供的軟件包：</p><pre><code># cd /tmp/
# wget https://apt.puppetlabs.com/puppetlabs-release-trusty.deb\\

--2015-06-17 00:54:42-- https://apt.puppetlabs.com/puppetlabs-release-trusty.deb
Resolving apt.puppetlabs.com (apt.puppetlabs.com)... 192.155.89.90, 2600:3c03::f03c:91ff:fedb:6b1d
Connecting to apt.puppetlabs.com (apt.puppetlabs.com)|192.155.89.90|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 7384 (7.2K) [application/x-debian-package]
Saving to: ‘puppetlabs-release-trusty.deb’

puppetlabs-release-tr 100%[===========================&gt;] 7.21K --.-KB/s in 0.04s

2015-06-17 00:54:42 (162 KB/s) - ‘puppetlabs-release-trusty.deb’ saved [7384/7384]
</code></pre><p>在 ubuntu 15.04 上我們使用debian包管理系統來安裝它，命令如下：</p><pre><code># dpkg -i puppetlabs-release-trusty.deb
</code></pre><p>使用 apt 包管理命令更新一下本地的軟件源：</p><pre><code># apt-get update
</code></pre><p>通過遠程倉庫安裝：</p><pre><code># apt-get install puppet
</code></pre><p>Puppet 代理默認是不啓動的。這裏我們需要使用文本編輯器修改 /etc/default/puppet 文件，使它正常工作：</p><pre><code># nano /etc/default/puppet
</code></pre><p>更改 <strong>START</strong> 的值改成 &quot;yes&quot; 。</p><pre><code>START=yes
</code></pre><p>最後保存並退出。</p><h3 id="_9-使用-apt-工具鎖定代理軟件的版本" tabindex="-1">9. 使用 Apt 工具鎖定代理軟件的版本 <a class="header-anchor" href="#_9-使用-apt-工具鎖定代理軟件的版本" aria-label="Permalink to “9. 使用 Apt 工具鎖定代理軟件的版本”">​</a></h3><p>和上面的步驟一樣為防止隨意升級造成的配置文件混亂，我們要使用 apt 工具來把它鎖定。具體做法是使用文本編輯器創建一個文件 <strong>/etc/apt/preferences.d/00-puppet.pref</strong></p><pre><code># nano /etc/apt/preferences.d/00-puppet.pref
</code></pre><p>在新建的文件裏面加入如下內容</p><pre><code># /etc/apt/preferences.d/00-puppet.pref
Package: puppet puppet-common
Pin: version 3.8*
Pin-Priority: 501
</code></pre><p>這樣 puppet 就不會隨着系統軟件升級而隨意升級了。</p><h3 id="_10-配置-puppet-代理節點" tabindex="-1">10. 配置 puppet 代理節點 <a class="header-anchor" href="#_10-配置-puppet-代理節點" aria-label="Permalink to “10. 配置 puppet 代理節點”">​</a></h3><p>我們需要編輯一下代理節點的 puppet.conf 文件，來使它運行。</p><pre><code># nano /etc/puppet/puppet.conf
</code></pre><p>它看起來和服務器的配置文件完全一樣。同樣註釋掉<strong>templatedir</strong>這行。不同的是在這裏我們需要刪除掉所有關於<code>[master]</code> 的部分。</p><p>假定主控服務器可以通過名字“puppet-master”訪問，我們的客户端應該可以和它相互連接通信。如果不行的話，我們需要使用完整的主機域名 puppetmaster.example.com</p><pre><code>[agent]
server = puppetmaster.example.com
certname = puppetnode.example.com
</code></pre><p>在文件的結尾增加上面3行，增加之後文件內容像下面這樣：</p><pre><code>[main]
logdir=/var/log/puppet
vardir=/var/lib/puppet
ssldir=/var/lib/puppet/ssl
rundir=/var/run/puppet
factpath=$vardir/lib/facter
#templatedir=$confdir/templates

[agent]
server = puppetmaster.example.com
certname = puppetnode.example.com
</code></pre><p>最後保存並退出。</p><p>使用下面的命令來啓動客户端軟件：</p><pre><code># systemctl start puppet
</code></pre><p>如果一切順利的話，我們不會看到命令列有任何輸出。 第一次運行的時候，代理節點會生成一個 ssl 證書並且給服務器發送一個請求，經過簽名確認後，兩台機器就可以互相通信了。</p><p><strong>提示</strong>： 如果這是你添加的第一個代理節點，建議你在添加其他節點前先給這個證書籤名。一旦能夠通過並正常運行，回過頭來再添加其他代理節點。</p><h3 id="_11-在主控服務器上對證書請求進行簽名" tabindex="-1">11. 在主控服務器上對證書請求進行簽名 <a class="header-anchor" href="#_11-在主控服務器上對證書請求進行簽名" aria-label="Permalink to “11. 在主控服務器上對證書請求進行簽名”">​</a></h3><p>第一次運行的時候，代理節點會生成一個 ssl 證書並且給服務器發送一個簽名請求。在主控服務器給代理節點服務器證書籤名之後，主服務器才能和代理服務器通信並且控制代理服務器。</p><p>在主控服務器上使用下面的命令來列出當前的證書請求：</p><pre><code># puppet cert list
&quot;puppetnode.example.com&quot; (SHA256) 31:A1:7E:23:6B:CD:7B:7D:83:98:33:8B:21:01:A6:C4:01:D5:53:3D:A0:0E:77:9A:77:AE:8F:05:4A:9A:50:B2
</code></pre><p>因為只設置了一台代理節點服務器，所以我們將只看到一個請求。看起來類似如上，代理節點的完整域名即其主機名。</p><p>注意有沒有“+”號在前面，代表這個證書有沒有被簽名。</p><p>使用帶有主機名的<strong>puppet cert sign</strong>這個命令來簽署這個簽名請求，如下：</p><pre><code># puppet cert sign puppetnode.example.com
Notice: Signed certificate request for puppetnode.example.com
Notice: Removing file Puppet::SSL::CertificateRequest puppetnode.example.com at &#39;/var/lib/puppet/ssl/ca/requests/puppetnode.example.com.pem&#39;
</code></pre><p>主控服務器現在可以通訊和控制它簽名過的代理節點了。</p><p>如果想簽署所有的當前請求，可以使用 -all 選項，如下所示：</p><pre><code># puppet cert sign --all
</code></pre><h3 id="_12-刪除一個-puppet-證書" tabindex="-1">12. 刪除一個 Puppet 證書 <a class="header-anchor" href="#_12-刪除一個-puppet-證書" aria-label="Permalink to “12. 刪除一個 Puppet 證書”">​</a></h3><p>如果我們想移除一個主機，或者想重建一個主機然後再添加它。下面的例子裏我們將展示如何刪除 puppet 主控服務器上面的一個證書。使用的命令如下：</p><pre><code># puppet cert clean hostname
Notice: Revoked certificate with serial 5
Notice: Removing file Puppet::SSL::Certificate puppetnode.example.com at &#39;/var/lib/puppet/ssl/ca/signed/puppetnode.example.com.pem&#39;
Notice: Removing file Puppet::SSL::Certificate puppetnode.example.com at &#39;/var/lib/puppet/ssl/certs/puppetnode.example.com.pem&#39;
</code></pre><p>如果我們想查看所有的簽署和未簽署的請求，使用下面這條命令：</p><pre><code># puppet cert list --all
+ &quot;puppetmaster&quot; (SHA256) 33:28:97:86:A1:C3:2F:73:10:D1:FB:42:DA:D5:42:69:71:84:F0:E2:8A:01:B9:58:38:90:E4:7D:B7:25:23:EC (alt names: &quot;DNS:puppetmaster&quot;, &quot;DNS:puppetmaster.example.com&quot;) 
</code></pre><h3 id="_13-部署-puppet-清單" tabindex="-1">13. 部署 Puppet 清單 <a class="header-anchor" href="#_13-部署-puppet-清單" aria-label="Permalink to “13. 部署 Puppet 清單”">​</a></h3><p>當配置並完成 puppet 清單後，現在我們需要部署清單到代理節點服務器上。要應用並加載主 puppet 清單，我們可以在代理節點服務器上面使用下面的命令：</p><pre><code># puppet agent --test

Info: Retrieving pluginfacts
Info: Retrieving plugin
Info: Caching catalog for puppetnode.example.com
Info: Applying configuration version &#39;1434563858&#39;
Notice: /Stage[main]/Main/Exec[apt-update]/returns: executed successfully
Notice: Finished catalog run in 10.53 seconds
</code></pre><p>這裏向我們展示了主清單如何立即影響到了一個單一的服務器。</p><p>如果我們打算運行的 puppet 清單與主清單沒有什麼關聯，我們可以簡單使用 puppet apply 帶上相應的清單文件的路徑即可。它僅將清單應用到我們運行該清單的代理節點上。</p><pre><code># puppet apply /etc/puppet/manifest/test.pp
</code></pre><h3 id="_14-為特定節點配置清單" tabindex="-1">14. 為特定節點配置清單 <a class="header-anchor" href="#_14-為特定節點配置清單" aria-label="Permalink to “14. 為特定節點配置清單”">​</a></h3><p>如果我們想部署一個清單到某個特定的節點，我們需要如下配置清單。</p><p>在主控服務器上面使用文本編輯器編輯 /etc/puppet/manifest/site.pp：</p><pre><code># nano /etc/puppet/manifest/site.pp
</code></pre><p>添加下面的內容進去</p><pre><code>node &#39;puppetnode&#39;, &#39;puppetnode1&#39; {
# execute &#39;apt-get update&#39;
exec { &#39;apt-update&#39;: # exec resource named &#39;apt-update&#39;
command =&gt; &#39;/usr/bin/apt-get update&#39; # command this resource will run
}

# install apache2 package
package { &#39;apache2&#39;:
require =&gt; Exec[&#39;apt-update&#39;], # require &#39;apt-update&#39; before installing
ensure =&gt; installed,
}

# ensure apache2 service is running
service { &#39;apache2&#39;:
ensure =&gt; running,
}
}
</code></pre><p>這裏的配置顯示我們將在名為 puppetnode 和 puppetnode1 的2個指定的節點上面安裝 apache 服務。這裏可以添加其他我們需要安裝部署的具體節點進去。</p><h3 id="_15-配置清單模組" tabindex="-1">15. 配置清單模組 <a class="header-anchor" href="#_15-配置清單模組" aria-label="Permalink to “15. 配置清單模組”">​</a></h3><p>模組對於組合任務是非常有用的，在 Puppet 社區有很多人貢獻了自己的模組組件。</p><p>在主控服務器上, 我們將使用 puppet module 命令來安裝 <strong>puppetlabs-apache</strong> 模組。</p><pre><code># puppet module install puppetlabs-apache
</code></pre><p><strong>警告</strong>: 千萬不要在一個已經部署 apache 環境的機器上面使用這個模組，否則它將清空你沒有被 puppet 管理的 apache 配置。</p><p>現在用文本編輯器來修改 <strong>site.pp</strong> ：</p><pre><code># nano /etc/puppet/manifest/site.pp
</code></pre><p>添加下面的內容進去，在 puppetnode 上面安裝 apache 服務。</p><pre><code>node &#39;puppet-node&#39; {
class { &#39;apache&#39;: } # use apache module
apache::vhost { &#39;example.com&#39;: # define vhost resource
port =&gt; &#39;80&#39;,
docroot =&gt; &#39;/var/www/html&#39;
}
}
</code></pre><p>保存退出。然後重新運行該清單來為我們的代理節點部署 apache 配置。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>現在我們已經成功的在 ubuntu 15.04 上面部署並運行 puppet 來管理代理節點服務器的基礎運行環境。我們學習了puppet 是如何工作的，編寫清單文件，節點與主機間使用 ssl 證書認證的認證過程。使用 puppet 開源軟件配置管理工具在眾多的代理節點上來控制、管理和配置重複性任務是非常容易的。如果你有任何的問題，建議，反饋，與我們取得聯繫，我們將第一時間完善更新，謝謝。</p><hr>`,95)),r("p",null,[e[4]||(e[4]=p("via: ",-1)),a(t,{href:"http://linoxide.com/linux-how-to/install-puppet-ubuntu-15-04/"},{default:n(()=>[...e[3]||(e[3]=[p("http://linoxide.com/linux-how-to/install-puppet-ubuntu-15-04/",-1)])]),_:1})]),r("p",null,[e[8]||(e[8]=p("作者：",-1)),a(t,{href:"http://linoxide.com/author/arunp/"},{default:n(()=>[...e[5]||(e[5]=[p("Arun Pyasi",-1)])]),_:1}),e[9]||(e[9]=p(" 譯者：",-1)),a(t,{href:"https://github.com/ivo-wang"},{default:n(()=>[...e[6]||(e[6]=[p("ivo-wang",-1)])]),_:1}),e[10]||(e[10]=p(" 校對：",-1)),a(t,{href:"https://github.com/wxy"},{default:n(()=>[...e[7]||(e[7]=[p("wxy",-1)])]),_:1})]),r("p",null,[e[13]||(e[13]=p("本文由 ",-1)),a(t,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[11]||(e[11]=[p("LCTT",-1)])]),_:1}),e[14]||(e[14]=p(" 原創翻譯，",-1)),a(t,{href:"https://linux.cn/"},{default:n(()=>[...e[12]||(e[12]=[p("Linux中國",-1)])]),_:1}),e[15]||(e[15]=p(" 榮譽推出",-1))])])}const _=o(l,[["render",d]]);export{P as __pageData,_ as default};
