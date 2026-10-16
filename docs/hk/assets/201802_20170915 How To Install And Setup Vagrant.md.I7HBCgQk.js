import{_ as i,a0 as o,w as r,s as c,ao as t,I as l,x as a,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"如何安裝並設置 Vagrant | LCTT x X-CMD","titleTemplate":false,"description":"如何安裝並設置 Vagrant | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何安裝並設置 Vagrant | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何安裝並設置 Vagrant | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20170915 How To Install And Setup Vagrant","title":"如何安裝並設置 Vagrant","tag":"201802","desc":""},"relativePath":"201802/20170915 How To Install And Setup Vagrant.md","filePath":"[post].md"}'),h={name:"201802/20170915 How To Install And Setup Vagrant.md"};function d(u,s,g,b,m,f){const n=o("Link");return r(),c("div",null,[s[16]||(s[16]=t('<h1 id="如何安裝並設置-vagrant" tabindex="-1">如何安裝並設置 Vagrant <a class="header-anchor" href="#如何安裝並設置-vagrant" aria-label="Permalink to “如何安裝並設置 Vagrant”">​</a></h1><p>Vagrant 對於虛擬機來説是一個強大的工具，在這裏我們將研究如何在 Ubuntu 上設置和使用 Virtualbox 和 Vagrant 來提供可複製的虛擬機。</p><h3 id="虛擬機-並不複雜" tabindex="-1">虛擬機，並不複雜 <a class="header-anchor" href="#虛擬機-並不複雜" aria-label="Permalink to “虛擬機，並不複雜”">​</a></h3><p>多年來，開發人員一直使用虛擬機作為其工作流程的一部分，允許他們交換和更改運行軟件的環境，這通常是為了防止項目之間的衝突，例如需要 php 5.3 的項目 A 和需要 php 5.4 的項目 B。</p><p>並且使用虛擬機意味着你只需要你正在使用的計算機就行，而不需要專用硬件來鏡像你的生產環境。</p><p>當多個開發人員在一個項目上工作時，它也很方便，他們都可以運行一個包含所有需求的環境，但是維護多台機器並確保所有的需求都具有相同的版本是非常困難的，這時 Vagrant 就能派上用場了。</p><h4 id="使用虛擬機的好處" tabindex="-1">使用虛擬機的好處 <a class="header-anchor" href="#使用虛擬機的好處" aria-label="Permalink to “使用虛擬機的好處”">​</a></h4><ul><li>你的虛擬機與主機環境是分開的</li><li>你可以根據你代碼的要求裁剪一個定製虛擬機</li><li>不會影響其他虛擬機</li><li>可以運行在你的主機上無法運行的程序，例如在 Ubuntu 中運行一些只能在 Windows 運行的軟件</li></ul><h3 id="什麼是-vagrant" tabindex="-1">什麼是 Vagrant <a class="header-anchor" href="#什麼是-vagrant" aria-label="Permalink to “什麼是 Vagrant”">​</a></h3><p>簡而言之，這是一個與虛擬機一起工作的工具，可以讓你自動創建和刪除虛擬機。</p><p>它圍繞一個名為 <code>VagrantFile</code> 的配置文件而工作，這個配置文件告訴 Vagrant 你想要安裝的操作系統，以及一些其他選項，如 IP 和目錄同步。 你還可以在虛擬機上添加一個命令的配置腳本。</p><p>通過共享這個 <code>VagrantFile</code>，項目的所有開發人員全可以使用完全相同的虛擬機。</p><h3 id="安裝要求" tabindex="-1">安裝要求 <a class="header-anchor" href="#安裝要求" aria-label="Permalink to “安裝要求”">​</a></h3><h4 id="安裝-virtualbox" tabindex="-1">安裝 VirtualBox <a class="header-anchor" href="#安裝-virtualbox" aria-label="Permalink to “安裝 VirtualBox”">​</a></h4><p>VirtualBox 是運行虛擬機的程序，它可以從 Ubuntu 倉庫中安裝。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt-get install virtualbox</span></span></code></pre></div><h4 id="安裝-vagrant" tabindex="-1">安裝 Vagrant <a class="header-anchor" href="#安裝-vagrant" aria-label="Permalink to “安裝 Vagrant”">​</a></h4>',17)),l("p",null,[s[1]||(s[1]=a("對於 Vagrant 本身，你要前往 ",-1)),p(n,{href:"https://www.vagrantup.com/downloads.html"},{default:e(()=>[...s[0]||(s[0]=[a("https://www.vagrantup.com/downloads.html ",-1)])]),_:1}),s[2]||(s[2]=a(" 查看適用於你的操作系統的安裝軟件包。",-1))]),s[17]||(s[17]=t(`<h4 id="安裝增強功能" tabindex="-1">安裝增強功能 <a class="header-anchor" href="#安裝增強功能" aria-label="Permalink to “安裝增強功能”">​</a></h4><p>如果你打算與虛擬機共享任何文件夾，則需要安裝以下插件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant plugin install vagrant-vbguest</span></span></code></pre></div><h3 id="配置-vagrant" tabindex="-1">配置 Vagrant <a class="header-anchor" href="#配置-vagrant" aria-label="Permalink to “配置 Vagrant”">​</a></h3><p>首先我們需要為 Vagrant 創建一個文件夾。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir ~/Vagrant/test-vm</span></span>
<span class="line"><span>cd ~/Vagrant/test-vm</span></span></code></pre></div><p>創建 VagrantFile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant init</span></span></code></pre></div><p>開啓虛擬機：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant up</span></span></code></pre></div><p>登錄機器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant-ssh</span></span></code></pre></div><p>此時，你將擁有一個基本的 vagrant 機器，以及一個名為 <code>VagrantFile</code> 的文件。</p><h3 id="定製" tabindex="-1">定製 <a class="header-anchor" href="#定製" aria-label="Permalink to “定製”">​</a></h3><p>在上面的步驟中創建的 <code>VagrantFile</code> 看起來類似於以下內容</p><p>VagrantFile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># -*- mode: ruby -*-</span></span>
<span class="line"><span># vi: set ft=ruby :</span></span>
<span class="line"><span># All Vagrant configuration is done below. The &quot;2&quot; in Vagrant.configure</span></span>
<span class="line"><span># configures the configuration version (we support older styles for</span></span>
<span class="line"><span># backwards compatibility). Please don&#39;t change it unless you know what</span></span>
<span class="line"><span># you&#39;re doing.</span></span>
<span class="line"><span>Vagrant.configure(&quot;2&quot;) do |config|</span></span>
<span class="line"><span>    # The most common configuration options are documented and commented below.</span></span>
<span class="line"><span>    # For a complete reference, please see the online documentation at</span></span>
<span class="line"><span>    # https://docs.vagrantup.com.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Every Vagrant development environment requires a box. You can search for</span></span>
<span class="line"><span>    # boxes at https://vagrantcloud.com/search.</span></span>
<span class="line"><span>    config.vm.box = &quot;base&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Disable automatic box update checking. If you disable this, then</span></span>
<span class="line"><span>    # boxes will only be checked for updates when the user runs</span></span>
<span class="line"><span>    # \`vagrant box outdated\`. This is not recommended.</span></span>
<span class="line"><span>    # config.vm.box_check_update = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Create a forwarded port mapping which allows access to a specific port</span></span>
<span class="line"><span>    # within the machine from a port on the host machine. In the example below,</span></span>
<span class="line"><span>    # accessing &quot;localhost:8080&quot; will access port 80 on the guest machine.</span></span>
<span class="line"><span>    # NOTE: This will enable public access to the opened port</span></span>
<span class="line"><span>    # config.vm.network &quot;forwarded_port&quot;, guest: 80, host: 8080</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Create a forwarded port mapping which allows access to a specific port</span></span>
<span class="line"><span>    # within the machine from a port on the host machine and only allow access</span></span>
<span class="line"><span>    # via 127.0.0.1 to disable public access</span></span>
<span class="line"><span>    # config.vm.network &quot;forwarded_port&quot;, guest: 80, host: 8080, host_ip: &quot;127.0.0.1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Create a private network, which allows host-only access to the machine</span></span>
<span class="line"><span>    # using a specific IP.</span></span>
<span class="line"><span>    # config.vm.network &quot;private_network&quot;, ip: &quot;192.168.33.10&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Create a public network, which generally matched to bridged network.</span></span>
<span class="line"><span>    # Bridged networks make the machine appear as another physical device on</span></span>
<span class="line"><span>    # your network.</span></span>
<span class="line"><span>    # config.vm.network &quot;public_network&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Share an additional folder to the guest VM. The first argument is</span></span>
<span class="line"><span>    # the path on the host to the actual folder. The second argument is</span></span>
<span class="line"><span>    # the path on the guest to mount the folder. And the optional third</span></span>
<span class="line"><span>    # argument is a set of non-required options.</span></span>
<span class="line"><span>    # config.vm.synced_folder &quot;../data&quot;, &quot;/vagrant_data&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Provider-specific configuration so you can fine-tune various</span></span>
<span class="line"><span>    # backing providers for Vagrant. These expose provider-specific options.</span></span>
<span class="line"><span>    # Example for VirtualBox:</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    # config.vm.provider &quot;virtualbox&quot; do |vb|</span></span>
<span class="line"><span>    #   # Display the VirtualBox GUI when booting the machine</span></span>
<span class="line"><span>    #   vb.gui = true</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #   # Customize the amount of memory on the VM:</span></span>
<span class="line"><span>    #   vb.memory = &quot;1024&quot;</span></span>
<span class="line"><span>    # end</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    # View the documentation for the provider you are using for more</span></span>
<span class="line"><span>    # information on available options.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Enable provisioning with a shell script. Additional provisioners such as</span></span>
<span class="line"><span>    # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the</span></span>
<span class="line"><span>    # documentation for more information about their specific syntax and use.</span></span>
<span class="line"><span>    # config.vm.provision &quot;shell&quot;, inline: &lt;&lt;-SHELL</span></span>
<span class="line"><span>    #   apt-get update</span></span>
<span class="line"><span>    #   apt-get install -y apache2</span></span>
<span class="line"><span>    # SHELL</span></span>
<span class="line"><span>end</span></span></code></pre></div><p>現在這個 <code>VagrantFile</code> 將創建基本的虛擬機。但 Vagrant 背後的理念是讓虛擬機為我們的特定任務而配置，所以我們刪除註釋和調整配置。</p><p>VagrantFile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># -*- mode: ruby -*-</span></span>
<span class="line"><span># vi: set ft=ruby :</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vagrant.configure(&quot;2&quot;) do |config|</span></span>
<span class="line"><span>  # Set the Linux Version to Debian Jessie</span></span>
<span class="line"><span>  config.vm.box = &quot;debian/jessie64&quot;</span></span>
<span class="line"><span>  # Set the IP of the Box</span></span>
<span class="line"><span>  config.vm.network &quot;private_network&quot;, ip: &quot;192.168.33.10&quot;</span></span>
<span class="line"><span>  # Sync Our Projects Directory with the WWW directory </span></span>
<span class="line"><span>  config.vm.synced_folder &quot;~/Projects&quot;, &quot;/var/www/&quot;</span></span>
<span class="line"><span>  # Run the following to Provision</span></span>
<span class="line"><span>  config.vm.provision &quot;shell&quot;, path: &quot;install.sh&quot;</span></span>
<span class="line"><span>end</span></span></code></pre></div><p>現在我們有一個簡單的 <code>VagrantFile</code>，它將 Linux 版本設置為 debian jessie，設置一個 IP 給我們使用，同步我們感興趣的文件夾，並最後運行 <code>install.sh</code>，這是我們可以運行 shell 命令的地方。</p><p>install.sh：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#! /usr/bin/env bash</span></span>
<span class="line"><span># Variables</span></span>
<span class="line"><span>DBHOST=localhost</span></span>
<span class="line"><span>DBNAME=dbname</span></span>
<span class="line"><span>DBUSER=dbuser</span></span>
<span class="line"><span>DBPASSWD=test123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;[ Provisioning machine ]&quot;</span></span>
<span class="line"><span>echo &quot;1) Update APT...&quot;</span></span>
<span class="line"><span>apt-get -qq update</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;1) Install Utilities...&quot;</span></span>
<span class="line"><span>apt-get install -y tidy pdftk curl xpdf imagemagick openssl vim git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;2) Installing Apache...&quot;</span></span>
<span class="line"><span>apt-get install -y apache2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;3) Installing PHP and packages...&quot;</span></span>
<span class="line"><span>apt-get install -y php5 libapache2-mod-php5 libssh2-php php-pear php5-cli php5-common php5-curl php5-dev php5-gd php5-imagick php5-imap php5-intl php5-mcrypt php5-memcached php5-mysql php5-pspell php5-xdebug php5-xmlrpc</span></span>
<span class="line"><span>#php5-suhosin-extension, php5-mysqlnd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;4) Installing MySQL...&quot;</span></span>
<span class="line"><span>debconf-set-selections &lt;&lt;&lt; &quot;mysql-server mysql-server/root_password password secret&quot;</span></span>
<span class="line"><span>debconf-set-selections &lt;&lt;&lt; &quot;mysql-server mysql-server/root_password_again password secret&quot;</span></span>
<span class="line"><span>apt-get install -y mysql-server</span></span>
<span class="line"><span>mysql -uroot -p$DBPASSWD -e &quot;CREATE DATABASE $DBNAME&quot;</span></span>
<span class="line"><span>mysql -uroot -p$DBPASSWD -e &quot;grant all privileges on $DBNAME.* to &#39;$DBUSER&#39;@&#39;localhost&#39; identified by &#39;$DBPASSWD&#39;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;5) Generating self signed certificate...&quot;</span></span>
<span class="line"><span>mkdir -p /etc/ssl/localcerts</span></span>
<span class="line"><span>openssl req -new -x509 -days 365 -nodes -subj &quot;/C=US/ST=Denial/L=Springfield/O=Dis/CN=www.example.com&quot; -out /etc/ssl/localcerts/apache.pem -keyout /etc/ssl/localcerts/apache.key</span></span>
<span class="line"><span>chmod 600 /etc/ssl/localcerts/apache*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;6) Setup Apache...&quot;</span></span>
<span class="line"><span>a2enmod rewrite</span></span>
<span class="line"><span>&gt; /etc/apache2/sites-enabled/000-default.conf</span></span>
<span class="line"><span>echo &quot;</span></span>
<span class="line"><span>&lt;VirtualHost *:80&gt;</span></span>
<span class="line"><span>        ServerAdmin webmaster@localhost</span></span>
<span class="line"><span>        DocumentRoot /var/www/</span></span>
<span class="line"><span>        ErrorLog \${APACHE_LOG_DIR}/error.log</span></span>
<span class="line"><span>        CustomLog \${APACHE_LOG_DIR}/access.log combined</span></span>
<span class="line"><span>&lt;/VirtualHost&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot; &gt;&gt; /etc/apache2/sites-enabled/000-default.conf</span></span>
<span class="line"><span>service apache2 restart </span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;7) Composer Install...&quot;</span></span>
<span class="line"><span>curl --silent https://getcomposer.org/installer | php </span></span>
<span class="line"><span>mv composer.phar /usr/local/bin/composer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;8) Install NodeJS...&quot;</span></span>
<span class="line"><span>curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - </span></span>
<span class="line"><span>apt-get -qq update</span></span>
<span class="line"><span>apt-get -y install nodejs </span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;9) Install NPM Packages...&quot;</span></span>
<span class="line"><span>npm install -g gulp gulp-cli</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Provisioning Completed&quot;</span></span></code></pre></div><p>通過上面的步驟，在你的目錄中會有 <code>VagrantFile</code> 和 <code>install.sh</code>，運行 vagrant 會做下面的事情：</p><ul><li>採用 Debian Jessie 來創建虛擬機</li><li>將機器的 IP 設置為 192.168.33.10</li><li>同步 <code>~/Projects</code> 和 <code>/var/www/</code> 目錄</li><li>安裝並設置 Apache、Mysql、PHP、Git、Vim</li><li>安裝並運行 Composer</li><li>安裝 Nodejs 和 gulp</li><li>創建一個 MySQL 資料庫</li><li>創建自簽名證書</li></ul><p>通過與其他人共享 <code>VagrantFile</code> 和 <code>install.sh</code>，你可以在兩台不同的機器上使用完全相同的環境。</p><hr>`,27)),l("p",null,[s[4]||(s[4]=a("via: ",-1)),p(n,{href:"https://www.chris-shaw.com/blog/how-to-install-and-setup-vagrant"},{default:e(()=>[...s[3]||(s[3]=[a("https://www.chris-shaw.com/blog/how-to-install-and-setup-vagrant",-1)])]),_:1})]),l("p",null,[s[8]||(s[8]=a("作者：",-1)),p(n,{href:"https://www.chris-shaw.com"},{default:e(()=>[...s[5]||(s[5]=[a("Christopher Shaw",-1)])]),_:1}),s[9]||(s[9]=a(" 譯者：",-1)),p(n,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[6]||(s[6]=[a("MjSeven",-1)])]),_:1}),s[10]||(s[10]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[7]||(s[7]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[13]||(s[13]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[11]||(s[11]=[a("LCTT",-1)])]),_:1}),s[14]||(s[14]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[12]||(s[12]=[a("Linux中國",-1)])]),_:1}),s[15]||(s[15]=a(" 榮譽推出",-1))])])}const w=i(h,[["render",d]]);export{q as __pageData,w as default};
