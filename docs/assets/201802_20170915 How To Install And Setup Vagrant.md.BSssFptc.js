import{_ as i,a0 as o,w as r,s as c,ao as t,I as l,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"如何安装并设置 Vagrant | LCTT x X-CMD","titleTemplate":false,"description":"如何安装并设置 Vagrant | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何安装并设置 Vagrant | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何安装并设置 Vagrant | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20170915 How To Install And Setup Vagrant","title":"如何安装并设置 Vagrant","tag":"201802","desc":""},"relativePath":"201802/20170915 How To Install And Setup Vagrant.md","filePath":"[post].md"}'),h={name:"201802/20170915 How To Install And Setup Vagrant.md"};function d(u,s,g,b,m,f){const n=o("Link");return r(),c("div",null,[s[16]||(s[16]=t('<h1 id="如何安装并设置-vagrant" tabindex="-1">如何安装并设置 Vagrant <a class="header-anchor" href="#如何安装并设置-vagrant" aria-label="Permalink to “如何安装并设置 Vagrant”">​</a></h1><p>Vagrant 对于虚拟机来说是一个强大的工具，在这里我们将研究如何在 Ubuntu 上设置和使用 Virtualbox 和 Vagrant 来提供可复制的虚拟机。</p><h3 id="虚拟机-并不复杂" tabindex="-1">虚拟机，并不复杂 <a class="header-anchor" href="#虚拟机-并不复杂" aria-label="Permalink to “虚拟机，并不复杂”">​</a></h3><p>多年来，开发人员一直使用虚拟机作为其工作流程的一部分，允许他们交换和更改运行软件的环境，这通常是为了防止项目之间的冲突，例如需要 php 5.3 的项目 A 和需要 php 5.4 的项目 B。</p><p>并且使用虚拟机意味着你只需要你正在使用的计算机就行，而不需要专用硬件来镜像你的生产环境。</p><p>当多个开发人员在一个项目上工作时，它也很方便，他们都可以运行一个包含所有需求的环境，但是维护多台机器并确保所有的需求都具有相同的版本是非常困难的，这时 Vagrant 就能派上用场了。</p><h4 id="使用虚拟机的好处" tabindex="-1">使用虚拟机的好处 <a class="header-anchor" href="#使用虚拟机的好处" aria-label="Permalink to “使用虚拟机的好处”">​</a></h4><ul><li>你的虚拟机与主机环境是分开的</li><li>你可以根据你代码的要求裁剪一个定制虚拟机</li><li>不会影响其他虚拟机</li><li>可以运行在你的主机上无法运行的程序，例如在 Ubuntu 中运行一些只能在 Windows 运行的软件</li></ul><h3 id="什么是-vagrant" tabindex="-1">什么是 Vagrant <a class="header-anchor" href="#什么是-vagrant" aria-label="Permalink to “什么是 Vagrant”">​</a></h3><p>简而言之，这是一个与虚拟机一起工作的工具，可以让你自动创建和删除虚拟机。</p><p>它围绕一个名为 <code>VagrantFile</code> 的配置文件而工作，这个配置文件告诉 Vagrant 你想要安装的操作系统，以及一些其他选项，如 IP 和目录同步。 你还可以在虚拟机上添加一个命令的配置脚本。</p><p>通过共享这个 <code>VagrantFile</code>，项目的所有开发人员全可以使用完全相同的虚拟机。</p><h3 id="安装要求" tabindex="-1">安装要求 <a class="header-anchor" href="#安装要求" aria-label="Permalink to “安装要求”">​</a></h3><h4 id="安装-virtualbox" tabindex="-1">安装 VirtualBox <a class="header-anchor" href="#安装-virtualbox" aria-label="Permalink to “安装 VirtualBox”">​</a></h4><p>VirtualBox 是运行虚拟机的程序，它可以从 Ubuntu 仓库中安装。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt-get install virtualbox</span></span></code></pre></div><h4 id="安装-vagrant" tabindex="-1">安装 Vagrant <a class="header-anchor" href="#安装-vagrant" aria-label="Permalink to “安装 Vagrant”">​</a></h4>',17)),l("p",null,[s[1]||(s[1]=a("对于 Vagrant 本身，你要前往 ",-1)),p(n,{href:"https://www.vagrantup.com/downloads.html"},{default:e(()=>[...s[0]||(s[0]=[a("https://www.vagrantup.com/downloads.html ",-1)])]),_:1}),s[2]||(s[2]=a(" 查看适用于你的操作系统的安装软件包。",-1))]),s[17]||(s[17]=t(`<h4 id="安装增强功能" tabindex="-1">安装增强功能 <a class="header-anchor" href="#安装增强功能" aria-label="Permalink to “安装增强功能”">​</a></h4><p>如果你打算与虚拟机共享任何文件夹，则需要安装以下插件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant plugin install vagrant-vbguest</span></span></code></pre></div><h3 id="配置-vagrant" tabindex="-1">配置 Vagrant <a class="header-anchor" href="#配置-vagrant" aria-label="Permalink to “配置 Vagrant”">​</a></h3><p>首先我们需要为 Vagrant 创建一个文件夹。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mkdir ~/Vagrant/test-vm</span></span>
<span class="line"><span>cd ~/Vagrant/test-vm</span></span></code></pre></div><p>创建 VagrantFile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant init</span></span></code></pre></div><p>开启虚拟机：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant up</span></span></code></pre></div><p>登录机器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vagrant-ssh</span></span></code></pre></div><p>此时，你将拥有一个基本的 vagrant 机器，以及一个名为 <code>VagrantFile</code> 的文件。</p><h3 id="定制" tabindex="-1">定制 <a class="header-anchor" href="#定制" aria-label="Permalink to “定制”">​</a></h3><p>在上面的步骤中创建的 <code>VagrantFile</code> 看起来类似于以下内容</p><p>VagrantFile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># -*- mode: ruby -*-</span></span>
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
<span class="line"><span>end</span></span></code></pre></div><p>现在这个 <code>VagrantFile</code> 将创建基本的虚拟机。但 Vagrant 背后的理念是让虚拟机为我们的特定任务而配置，所以我们删除注释和调整配置。</p><p>VagrantFile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># -*- mode: ruby -*-</span></span>
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
<span class="line"><span>end</span></span></code></pre></div><p>现在我们有一个简单的 <code>VagrantFile</code>，它将 Linux 版本设置为 debian jessie，设置一个 IP 给我们使用，同步我们感兴趣的文件夹，并最后运行 <code>install.sh</code>，这是我们可以运行 shell 命令的地方。</p><p>install.sh：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#! /usr/bin/env bash</span></span>
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
<span class="line"><span>echo &quot;Provisioning Completed&quot;</span></span></code></pre></div><p>通过上面的步骤，在你的目录中会有 <code>VagrantFile</code> 和 <code>install.sh</code>，运行 vagrant 会做下面的事情：</p><ul><li>采用 Debian Jessie 来创建虚拟机</li><li>将机器的 IP 设置为 192.168.33.10</li><li>同步 <code>~/Projects</code> 和 <code>/var/www/</code> 目录</li><li>安装并设置 Apache、Mysql、PHP、Git、Vim</li><li>安装并运行 Composer</li><li>安装 Nodejs 和 gulp</li><li>创建一个 MySQL 数据库</li><li>创建自签名证书</li></ul><p>通过与其他人共享 <code>VagrantFile</code> 和 <code>install.sh</code>，你可以在两台不同的机器上使用完全相同的环境。</p><hr>`,27)),l("p",null,[s[4]||(s[4]=a("via: ",-1)),p(n,{href:"https://www.chris-shaw.com/blog/how-to-install-and-setup-vagrant"},{default:e(()=>[...s[3]||(s[3]=[a("https://www.chris-shaw.com/blog/how-to-install-and-setup-vagrant",-1)])]),_:1})]),l("p",null,[s[8]||(s[8]=a("作者：",-1)),p(n,{href:"https://www.chris-shaw.com"},{default:e(()=>[...s[5]||(s[5]=[a("Christopher Shaw",-1)])]),_:1}),s[9]||(s[9]=a(" 译者：",-1)),p(n,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[6]||(s[6]=[a("MjSeven",-1)])]),_:1}),s[10]||(s[10]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[7]||(s[7]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[13]||(s[13]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[11]||(s[11]=[a("LCTT",-1)])]),_:1}),s[14]||(s[14]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[12]||(s[12]=[a("Linux中国",-1)])]),_:1}),s[15]||(s[15]=a(" 荣誉推出",-1))])])}const w=i(h,[["render",d]]);export{q as __pageData,w as default};
