import{_ as c,a0 as a,w as s,s as f,ao as p,I as i,x as t,a1 as n,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"如何在 Ubuntu 上安装配置管理系统 Chef （大厨） | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Ubuntu 上安装配置管理系统 Chef （大厨） | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Ubuntu 上安装配置管理系统 Chef （大厨） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Ubuntu 上安装配置管理系统 Chef （大厨） | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150717 How to Configure Chef (server or client) on Ubuntu 14.04 or 15.04","title":"如何在 Ubuntu 上安装配置管理系统 Chef （大厨）","tag":"201508","desc":""},"relativePath":"201508/20150717 How to Configure Chef (server or client) on Ubuntu 14.04 or 15.04.md","filePath":"[post].md"}'),u={name:"201508/20150717 How to Configure Chef (server or client) on Ubuntu 14.04 or 15.04.md"};function d(h,e,l,m,g,b){const o=a("Link");return s(),f("div",null,[e[20]||(e[20]=p(`<h1 id="如何在-ubuntu-上安装配置管理系统-chef-大厨" tabindex="-1">如何在 Ubuntu 上安装配置管理系统 Chef （大厨） <a class="header-anchor" href="#如何在-ubuntu-上安装配置管理系统-chef-大厨" aria-label="Permalink to “如何在 Ubuntu 上安装配置管理系统 Chef （大厨）”">​</a></h1><p>Chef是面对IT专业人员的一款配置管理和自动化工具，它可以配置和管理你的基础设施，无论它在本地还是在云上。它可以用于加速应用部署并协调多个系统管理员和开发人员的工作，这涉及到可支持大量的客户群的成百上千的服务器和程序。chef最有用的是让基础设施变成代码。一旦你掌握了Chef，你可以获得一流的网络IT支持来自动化管理你的云端基础设施或者终端用户。</p><p>下面是我们将要在本篇中要设置和配置Chef的主要组件。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/chef.png" alt=""></p><h3 id="安装chef的要求和版本" tabindex="-1">安装Chef的要求和版本 <a class="header-anchor" href="#安装chef的要求和版本" aria-label="Permalink to “安装Chef的要求和版本”">​</a></h3><p>我们将在下面的基础环境下设置Chef配置管理系统。</p><div class="table-wrap"><table><thead><tr><th>管理和配置工具：Chef</th><th></th></tr></thead><tbody><tr><td>基础操作系统</td><td>Ubuntu 14.04.1 LTS (x86_64)</td></tr><tr><td>Chef Server</td><td>Version 12.1.0</td></tr><tr><td>Chef Manage</td><td>Version 1.17.0</td></tr><tr><td>Chef Development Kit</td><td>Version 0.6.2</td></tr><tr><td>内存和CPU</td><td>4 GB  , 2.0+2.0 GHz</td></tr></tbody></table></div><h3 id="chef服务端的安装和配置" tabindex="-1">Chef服务端的安装和配置 <a class="header-anchor" href="#chef服务端的安装和配置" aria-label="Permalink to “Chef服务端的安装和配置”">​</a></h3><p>Chef服务端是核心组件，它存储配置以及其他和工作站交互的配置数据。让我们在他们的官网下载最新的安装文件。</p><p>我使用下面的命令来下载和安装它。</p><p>####1) 下载Chef服务端</p><pre><code>root@ubuntu-14-chef:/tmp# wget https://web-dl.packagecloud.io/chef/stable/packages/ubuntu/trusty/chef-server-core_12.1.0-1_amd64.deb
</code></pre><p>####2) 安装Chef服务端</p><pre><code>root@ubuntu-14-chef:/tmp# dpkg -i chef-server-core_12.1.0-1_amd64.deb
</code></pre><p>####3) 重新配置Chef服务端</p><p>现在运行下面的命令来启动所有的chef服务端服务，这步也许会花费一些时间，因为它有许多不同一起工作的服务组成来创建一个正常运作的系统。</p><pre><code>root@ubuntu-14-chef:/tmp# chef-server-ctl reconfigure
</code></pre><p>chef服务端启动命令&#39;chef-server-ctl reconfigure&#39;需要运行两次，这样就会在安装后看到这样的输出。</p><pre><code>Chef Client finished, 342/350 resources updated in 113.71139964 seconds
opscode Reconfigured!
</code></pre><p>####4) 重启系统</p><p>安装完成后重启系统使系统能最好的工作，不然我们或许会在创建用户的时候看到下面的SSL连接错误。</p><pre><code>ERROR: Errno::ECONNRESET: Connection reset by peer - SSL_connect
</code></pre><p>####5) 创建新的管理员</p><p>运行下面的命令来创建一个新的管理员账户及其配置。创建过程中，用户的RSA私钥会自动生成，它需要保存到一个安全的地方。--file选项会保存RSA私钥到指定的路径下。</p><pre><code>root@ubuntu-14-chef:/tmp# chef-server-ctl user-create kashi kashi kashi kashif.fareedi@gmail.com kashi123 --filename /root/kashi.pem
</code></pre><h3 id="chef服务端的管理设置" tabindex="-1">Chef服务端的管理设置 <a class="header-anchor" href="#chef服务端的管理设置" aria-label="Permalink to “Chef服务端的管理设置”">​</a></h3><p>Chef Manage是一个针对企业Chef用户的管理控制台，它提供了可视化的web用户界面，可以管理节点、数据包、规则、环境、Cookbook 和基于角色的访问控制（RBAC）</p><p>####1) 下载Chef Manage</p><p>从官网复制链接并下载chef manage的安装包。</p><pre><code>root@ubuntu-14-chef:~# wget https://web-dl.packagecloud.io/chef/stable/packages/ubuntu/trusty/opscode-manage_1.17.0-1_amd64.deb
</code></pre><p>####2) 安装Chef Manage</p><p>使用下面的命令在root的家目录下安装它。</p><pre><code>root@ubuntu-14-chef:~# chef-server-ctl install opscode-manage --path /root
</code></pre><p>####3) 重启Chef Manage和服务端</p><p>安装完成后我们需要运行下面的命令来重启chef manage和服务端。</p><pre><code>root@ubuntu-14-chef:~# opscode-manage-ctl reconfigure
root@ubuntu-14-chef:~# chef-server-ctl reconfigure
</code></pre><h3 id="chef-manage网页控制台" tabindex="-1">Chef Manage网页控制台 <a class="header-anchor" href="#chef-manage网页控制台" aria-label="Permalink to “Chef Manage网页控制台”">​</a></h3><p>我们可以使用localhost或它的全称域名来访问网页控制台，并用已经创建的管理员登录</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/5-chef-web.png" alt="chef amanage"></p><p>####1) Chef Manage创建新的组织</p><p>你或许被要求创建新的组织，或者也可以接受其他组织的邀请。如下所示，使用缩写和全名来创建一个新的组织。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/7-create-org.png" alt="Create Org"></p><p>####2) 用命令行创建新的组织</p><p>我们同样也可以运行下面的命令来创建新的组织。</p><pre><code>root@ubuntu-14-chef:~# chef-server-ctl org-create linux Linoxide Linux Org. --association_user kashi --filename linux.pem
</code></pre><h3 id="设置工作站" tabindex="-1">设置工作站 <a class="header-anchor" href="#设置工作站" aria-label="Permalink to “设置工作站”">​</a></h3>`,46)),i("p",null,[e[3]||(e[3]=t("我们已经完成安装chef服务端，现在我们可以开始创建任何recipes（",-1)),n(o,{href:"https://docs.chef.io/recipes.html"},{default:r(()=>[...e[0]||(e[0]=[t("基础配置元素",-1)])]),_:1}),e[4]||(e[4]=t("）、cookbooks（",-1)),n(o,{href:"https://docs.chef.io/cookbooks.html"},{default:r(()=>[...e[1]||(e[1]=[t("基础配置集",-1)])]),_:1}),e[5]||(e[5]=t("）、attributes（",-1)),n(o,{href:"https://docs.chef.io/attributes.html"},{default:r(()=>[...e[2]||(e[2]=[t("节点属性",-1)])]),_:1}),e[6]||(e[6]=t("）和其他任何的我们想要对Chef做的修改。",-1))]),e[21]||(e[21]=p(`<p>####1) 在Chef服务端上创建新的用户和组织</p><p>为了设置工作站，我们用命令行创建一个新的用户和组织。</p><pre><code>root@ubuntu-14-chef:~# chef-server-ctl user-create bloger Bloger Kashif bloger.kashif@gmail.com bloger123 --filename bloger.pem

root@ubuntu-14-chef:~# chef-server-ctl org-create blogs Linoxide Blogs Inc. --association_user bloger --filename blogs.pem
</code></pre><p>####2) 下载工作站入门套件</p><p>在工作站的网页控制台中下载保存入门套件，它用于与服务端协同工作</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/8-download-kit.png" alt="Starter Kit"></p><p>####3) 下载套件后，点击&quot;Proceed&quot;</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/9-download-kit.png" alt="starter kit"></p><h3 id="用于工作站的chef开发套件设置" tabindex="-1">用于工作站的Chef开发套件设置 <a class="header-anchor" href="#用于工作站的chef开发套件设置" aria-label="Permalink to “用于工作站的Chef开发套件设置”">​</a></h3><p>Chef开发套件是一款包含开发chef所需的所有工具的软件包。它捆绑了由Chef开发的带Chef客户端的工具。</p><p>####1) 下载 Chef DK</p><p>我们可以从它的官网链接中下载开发包，并选择操作系统来下载chef开发包。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/07/10-CDK.png" alt="Chef DK"></p><p>复制链接并用wget下载</p><pre><code>root@ubuntu-15-WKS:~# wget https://opscode-omnibus-packages.s3.amazonaws.com/ubuntu/12.04/x86_64/chefdk_0.6.2-1_amd64.deb
</code></pre><p>####2) Chef开发套件安装</p><p>使用dpkg命令安装开发套件</p><pre><code>root@ubuntu-15-WKS:~# dpkg -i chefdk_0.6.2-1_amd64.deb
</code></pre><p>####3) Chef DK 验证</p><p>使用下面的命令验证客户端是否已经正确安装。</p><pre><code>root@ubuntu-15-WKS:~# chef verify
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
</code></pre><p>####4) 连接Chef服务端</p><p>我们将创建 ~/.chef并从chef服务端复制两个用户和组织的pem文件到chef的文件到这个目录下。</p><pre><code>root@ubuntu-14-chef:~# scp bloger.pem blogs.pem kashi.pem linux.pem root@172.25.10.172:/.chef/
</code></pre><hr><pre><code>root@172.25.10.172&#39;s password:
bloger.pem 100% 1674 1.6KB/s 00:00
blogs.pem 100% 1674 1.6KB/s 00:00
kashi.pem 100% 1678 1.6KB/s 00:00
linux.pem 100% 1678 1.6KB/s 00:00
</code></pre><p>####5) 编辑配置来管理chef环境</p><p>现在使用下面的内容创建&quot;~/.chef/knife.rb&quot;。</p><pre><code>root@ubuntu-15-WKS:/.chef# vim knife.rb
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
</code></pre><p>创建knife.rb中指定的“~/cookbooks”文件夹。</p><pre><code>root@ubuntu-15-WKS:/# mkdir cookbooks
</code></pre><p>####6) 测试Knife配置</p><p>运行“knife user list”和“knife client list”来验证knife是否在工作。</p><pre><code>root@ubuntu-15-WKS:/.chef# knife user list
</code></pre><p>第一次运行的时候可能会看到下面的错误，这是因为工作站上还没有chef服务端的SSL证书。</p><pre><code>ERROR: SSL Validation failure connecting to host: 172.25.10.173 - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed
ERROR: Could not establish a secure connection to the server.
Use \`knife ssl check\` to troubleshoot your SSL configuration.
If your Chef Server uses a self-signed certificate, you can use
\`knife ssl fetch\` to make knife trust the server&#39;s certificates.
</code></pre><p>要从上面的命令中恢复，运行下面的命令来获取ssl证书，并重新运行knife user和client list，这时候应该就可以了。</p><pre><code>root@ubuntu-15-WKS:/.chef# knife ssl fetch
WARNING: Certificates from 172.25.10.173 will be fetched and placed in your trusted_cert
directory (/.chef/trusted_certs).
</code></pre><p>knife没有办法验证这些是有效的证书。你应该在下载时候验证这些证书的真实性。</p><p>在/.chef/trusted_certs/ubuntu-14-chef_test_com.crt下面添加ubuntu-14-chef.test.com的证书。</p><p>在上面的命令取得ssl证书后，接着运行下面的命令。</p><pre><code>root@ubuntu-15-WKS:/.chef#knife client list
kashi-linux
</code></pre><h3 id="配置与chef服务端交互的新节点" tabindex="-1">配置与chef服务端交互的新节点 <a class="header-anchor" href="#配置与chef服务端交互的新节点" aria-label="Permalink to “配置与chef服务端交互的新节点”">​</a></h3><p>节点是执行所有基础设施自动化的chef客户端。因此，在配置完chef-server和knife工作站后，通过配置新的与chef-server交互的节点，来添加新的服务端到我们的chef环境下。</p><p>我们使用下面的命令来添加新的节点与chef服务端工作。</p><pre><code>root@ubuntu-15-WKS:~# knife bootstrap 172.25.10.170 --ssh-user root --ssh-password kashi123 --node-name mydns
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
</code></pre><p>之后我们可以在knife节点列表下看到新创建的节点，它也会在新节点创建新的客户端。</p><pre><code>root@ubuntu-15-WKS:~# knife node list
mydns
</code></pre><p>相似地我们只要提供ssh证书通过上面的knife命令，就可以在chef设施上创建多个节点。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>本篇我们学习了chef管理工具并通过安装和配置设置基本了解了它的组件。我希望你在学习安装和配置Chef服务端以及它的工作站和客户端节点中获得乐趣。</p><hr>`,56)),i("p",null,[e[8]||(e[8]=t("via: ",-1)),n(o,{href:"http://linoxide.com/ubuntu-how-to/install-configure-chef-ubuntu-14-04-15-04/"},{default:r(()=>[...e[7]||(e[7]=[t("http://linoxide.com/ubuntu-how-to/install-configure-chef-ubuntu-14-04-15-04/",-1)])]),_:1})]),i("p",null,[e[12]||(e[12]=t("作者：",-1)),n(o,{href:"http://linoxide.com/author/kashifs/"},{default:r(()=>[...e[9]||(e[9]=[t("Kashif Siddique",-1)])]),_:1}),e[13]||(e[13]=t(" 译者：",-1)),n(o,{href:"https://github.com/geekpi"},{default:r(()=>[...e[10]||(e[10]=[t("geekpi",-1)])]),_:1}),e[14]||(e[14]=t(" 校对：",-1)),n(o,{href:"https://github.com/wxy"},{default:r(()=>[...e[11]||(e[11]=[t("wxy",-1)])]),_:1})]),i("p",null,[e[17]||(e[17]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[15]||(e[15]=[t("LCTT",-1)])]),_:1}),e[18]||(e[18]=t(" 原创翻译，",-1)),n(o,{href:"https://linux.cn/"},{default:r(()=>[...e[16]||(e[16]=[t("Linux中国",-1)])]),_:1}),e[19]||(e[19]=t(" 荣誉推出",-1))])])}const v=c(u,[["render",d]]);export{_ as __pageData,v as default};
