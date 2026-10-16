import{_ as o,a0 as u,w as i,s as c,ao as s,I as r,x as p,a1 as a,A as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"如何在 Ubuntu 15.04 中安装 puppet | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Ubuntu 15.04 中安装 puppet | LCTT (201512) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Ubuntu 15.04 中安装 puppet | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Ubuntu 15.04 中安装 puppet | LCTT (201512) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201512/20150806 Installation Guide for Puppet on Ubuntu 15.04","title":"如何在 Ubuntu 15.04 中安装 puppet","tag":"201512","desc":""},"relativePath":"201512/20150806 Installation Guide for Puppet on Ubuntu 15.04.md","filePath":"[post].md"}'),l={name:"201512/20150806 Installation Guide for Puppet on Ubuntu 15.04.md"};function d(m,e,g,b,h,f){const t=u("Link");return i(),c("div",null,[e[16]||(e[16]=s(`<h1 id="如何在-ubuntu-15-04-中安装-puppet" tabindex="-1">如何在 Ubuntu 15.04 中安装 puppet <a class="header-anchor" href="#如何在-ubuntu-15-04-中安装-puppet" aria-label="Permalink to “如何在 Ubuntu 15.04 中安装 puppet”">​</a></h1><p>大家好，本教程将学习如何在 ubuntu 15.04 上面安装 puppet，它可以用来管理你的服务器基础环境。puppet 是由puppet 实验室（Puppet Labs）开发并维护的一款开源的配置管理软件，它能够帮我们自动化供给、配置和管理服务器的基础环境。不管我们管理的是几个服务器还是数以千计的计算机组成的业务报表体系，puppet 都能够使管理员从繁琐的手动配置调整中解放出来，腾出时间和精力去提系统的升整体效率。它能够确保所有自动化流程作业的一致性、可靠性以及稳定性。它让管理员和开发者更紧密的联系在一起，使开发者更容易产出付出设计良好、简洁清晰的代码。puppet 提供了配置管理和数据中心自动化的两个解决方案。这两个解决方案分别是 <strong>puppet 开源版</strong> 和 <strong>puppet 企业版</strong>。puppet 开源版以 Apache 2.0 许可证发布，它是一个非常灵活、可定制的解决方案，设置初衷是帮助管理员去完成那些重复性操作工作。pupprt 企业版是一个全平台复杂 IT 环境下的成熟解决方案，它除了拥有开源版本所有优势以外还有移动端 apps、只有商业版才有的加强支持，以及模块化和集成管理等。Puppet 使用 SSL 证书来认证主控服务器与代理节点之间的通信。</p><p>本教程将要介绍如何在运行 ubuntu 15.04 的主控服务器和代理节点上面安装开源版的 puppet。在这里，我们用一台服务器做主控服务器（master），管理和控制剩余的当作 puppet 代理节点（agent node）的服务器，这些代理节点将依据主控服务器来进行配置。在 ubuntu 15.04 只需要简单的几步就能安装配置好 puppet，用它来管理我们的服务器基础环境非常的方便。（LCTT 译注：puppet 采用 C/S 架构，所以必须有至少有一台作为服务器，其他作为客户端处理）</p><h3 id="_1-设置主机文件" tabindex="-1">1.设置主机文件 <a class="header-anchor" href="#_1-设置主机文件" aria-label="Permalink to “1.设置主机文件”">​</a></h3><p>在本教程里，我们将使用2台运行 ubuntu 15.04 “Vivid Vervet&quot; 的主机，一台作为主控服务器，另一台作为 puppet 的代理节点。下面是我们将用到的服务器的基础信息。</p><ul><li>puupet 主控服务器 IP：44.55.88.6 ，主机名： puppetmaster</li><li>puppet 代理节点 IP： 45.55.86.39 ，主机名： puppetnode</li></ul><p>我们要在代理节点和服务器这两台机器的 hosts 文件里面都添加上相应的条目，使用 root 或是 sudo 访问权限来编辑 /etc/hosts 文件，命令如下：</p><pre><code># nano /etc/hosts

45.55.88.6 puppetmaster.example.com puppetmaster
45.55.86.39 puppetnode.example.com puppetnode
</code></pre><p>注意，puppet 主控服务器必使用 8140 端口来运行，所以请务必保证开启8140端口。</p><h3 id="_2-用-ntp-更新时间" tabindex="-1">2. 用 NTP 更新时间 <a class="header-anchor" href="#_2-用-ntp-更新时间" aria-label="Permalink to “2. 用 NTP 更新时间”">​</a></h3><p>puppet 代理节点所使用系统时间必须要准确，这样可以避免代理证书出现问题。如果有时间差异，那么证书将过期失效，所以服务器与代理节点的系统时间必须互相同步。我们使用 NTP（Network Time Protocol，网络时间协议）来同步时间。<strong>在服务器与代理节点上面分别</strong>运行以下命令来同步时间。</p><pre><code># ntpdate pool.ntp.org

17 Jun 00:17:08 ntpdate[882]: adjust time server 66.175.209.17 offset -0.001938 sec    
</code></pre><p>（LCTT 译注：显示类似的输出结果表示运行正常）</p><p>如果没有安装 ntp，请使用下面的命令更新你的软件仓库，安装并运行ntp服务</p><pre><code># apt-get update &amp;&amp; sudo apt-get -y install ntp ; service ntp restart
</code></pre><h3 id="_3-安装主控服务器软件" tabindex="-1">3. 安装主控服务器软件 <a class="header-anchor" href="#_3-安装主控服务器软件" aria-label="Permalink to “3. 安装主控服务器软件”">​</a></h3><p>安装开源版本的 puppet 有很多的方法。在本教程中我们在 puppet 实验室官网下载一个名为 puppetlabs-release 的软件包的软件源，安装后它将为我们在软件源里面添加 puppetmaster-passenger。puppetmaster-passenger 包括带有 apache 的 puppet 主控服务器。我们开始下载这个软件包：</p><pre><code># cd /tmp/
# wget https://apt.puppetlabs.com/puppetlabs-release-trusty.deb

--2015-06-17 00:19:26-- https://apt.puppetlabs.com/puppetlabs-release-trusty.deb
Resolving apt.puppetlabs.com (apt.puppetlabs.com)... 192.155.89.90, 2600:3c03::f03c:91ff:fedb:6b1d
Connecting to apt.puppetlabs.com (apt.puppetlabs.com)|192.155.89.90|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 7384 (7.2K) [application/x-debian-package]
Saving to: ‘puppetlabs-release-trusty.deb’

puppetlabs-release-tr 100%[===========================&gt;] 7.21K --.-KB/s in 0.06s

2015-06-17 00:19:26 (130 KB/s) - ‘puppetlabs-release-trusty.deb’ saved [7384/7384]
</code></pre><p>下载完成，我们来安装它：</p><pre><code># dpkg -i puppetlabs-release-trusty.deb

Selecting previously unselected package puppetlabs-release.
(Reading database ... 85899 files and directories currently installed.)
Preparing to unpack puppetlabs-release-trusty.deb ...
Unpacking puppetlabs-release (1.0-11) ...
Setting up puppetlabs-release (1.0-11) ...
</code></pre><p>使用 apt 包管理命令更新一下本地的软件源：</p><pre><code># apt-get update
</code></pre><p>现在我们就可以安装 puppetmaster-passenger 了</p><pre><code># apt-get install puppetmaster-passenger
</code></pre><p><strong>提示</strong>: 在安装的时候可能会报错：</p><pre><code>Warning: Setting templatedir is deprecated.see http://links.puppetlabs.com/env-settings-deprecations (at /usr/lib/ruby/vendor_ruby/puppet/settings.rb:1139:in \`issue_deprecation_warning&#39;)
</code></pre><p>不过不用担心，忽略掉它就好，我们只需要在设置配置文件的时候把这一项禁用就行了。</p><p>如何来查看puppet 主控服务器是否已经安装成功了呢？非常简单，只需要使用下面的命令查看它的版本就可以了。</p><pre><code># puppet --version

3.8.1
</code></pre><p>现在我们已经安装好了 puppet 主控服务器。因为我们使用的是配合 apache 的 passenger，由 apache 来控制 puppet 主控服务器，当 apache 运行时 puppet 主控才运行。</p><p>在开始之前，我们需要通过停止 apache 服务来让 puppet 主控服务器停止运行。</p><pre><code># systemctl stop apache2
</code></pre><h3 id="_4-使用-apt-工具锁定主控服务器的版本" tabindex="-1">4. 使用 Apt 工具锁定主控服务器的版本 <a class="header-anchor" href="#_4-使用-apt-工具锁定主控服务器的版本" aria-label="Permalink to “4. 使用 Apt 工具锁定主控服务器的版本”">​</a></h3><p>现在已经安装了 3.8.1 版的 puppet，我们锁定这个版本不让它随意升级，因为升级会造成配置文件混乱。 使用 apt 工具来锁定它，这里我们需要使用文本编辑器来创建一个新的文件 <strong>/etc/apt/preferences.d/00-puppet.pref</strong></p><pre><code># nano /etc/apt/preferences.d/00-puppet.pref
</code></pre><p>在新创建的文件里面添加以下内容：</p><pre><code># /etc/apt/preferences.d/00-puppet.pref
Package: puppet puppet-common puppetmaster-passenger
Pin: version 3.8*
Pin-Priority: 501
</code></pre><p>这样在以后的系统软件升级中， puppet 主控服务器将不会跟随系统软件一起升级。</p><h3 id="_5-配置-puppet-主控服务器" tabindex="-1">5. 配置 Puppet 主控服务器### <a class="header-anchor" href="#_5-配置-puppet-主控服务器" aria-label="Permalink to “5. 配置 Puppet 主控服务器###”">​</a></h3><p>Puppet 主控服务器作为一个证书发行机构，需要生成它自己的证书，用于签署所有代理的证书的请求。首先我们要删除所有在该软件包安装过程中创建出来的 ssl 证书。本地默认的 puppet 证书放在 /var/lib/puppet/ssl。因此我们只需要使用 rm 命令来整个移除这些证书就可以了。</p><pre><code># rm -rf /var/lib/puppet/ssl
</code></pre><p>现在来配置该证书，在创建 puppet 主控服务器证书时，我们需要包括代理节点与主控服务器沟通所用的每个 DNS 名称。使用文本编辑器来修改服务器的配置文件 puppet.conf</p><pre><code># nano /etc/puppet/puppet.conf
</code></pre><p>输出的结果像下面这样</p><pre><code>[main]
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
</code></pre><p>在这我们需要注释掉 templatedir 这行使它失效。然后在文件的 <code>[main]</code> 小节的结尾添加下面的信息。</p><pre><code>server = puppetmaster
environment = production
runinterval = 1h
strict_variables = true
certname = puppetmaster
dns_alt_names = puppetmaster, puppetmaster.example.com
</code></pre>`,47)),r("p",null,[e[1]||(e[1]=p("还有很多你可能用的到的配置选项。 如果你有需要，在 Puppet 实验室有一份详细的描述文件供你阅读： ",-1)),a(t,{href:"https://docs.puppetlabs.com/puppet/latest/reference/config_file_main.html"},{default:n(()=>[...e[0]||(e[0]=[p("Main Config File (puppet.conf)",-1)])]),_:1}),e[2]||(e[2]=p("。",-1))]),e[17]||(e[17]=s(`<p>编辑完成后保存退出。</p><p>使用下面的命令来生成一个新的证书。</p><pre><code># puppet master --verbose --no-daemonize

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
</code></pre><p>至此，证书已经生成。一旦我们看到 <strong>Notice: Starting Puppet master version 3.8.1</strong>，就表明证书就已经制作好了。我们按下 CTRL-C 回到 shell 命令行。</p><p>查看新生成证书的信息，可以使用下面的命令。</p><pre><code># puppet cert list -all

+ &quot;puppetmaster&quot; (SHA256) 33:28:97:86:A1:C3:2F:73:10:D1:FB:42:DA:D5:42:69:71:84:F0:E2:8A:01:B9:58:38:90:E4:7D:B7:25:23:EC (alt names: &quot;DNS:puppetmaster&quot;, &quot;DNS:puppetmaster.example.com&quot;)
</code></pre><h3 id="_6-创建一个-puppet-清单" tabindex="-1">6. 创建一个 Puppet 清单 <a class="header-anchor" href="#_6-创建一个-puppet-清单" aria-label="Permalink to “6. 创建一个 Puppet 清单”">​</a></h3><p>默认的主要清单（Manifest）是 /etc/puppet/manifests/site.pp。 这个主要清单文件包括了用于在代理节点执行的配置定义。现在我们来创建一个清单文件：</p><pre><code># nano /etc/puppet/manifests/site.pp
</code></pre><p>在刚打开的文件里面添加下面这几行：</p><pre><code># execute &#39;apt-get update&#39;
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
</code></pre><p>以上这几行的意思是给代理节点部署 apache web 服务。</p><h3 id="_7-运行-puppet-主控服务" tabindex="-1">7. 运行 puppet 主控服务 <a class="header-anchor" href="#_7-运行-puppet-主控服务" aria-label="Permalink to “7. 运行 puppet 主控服务”">​</a></h3><p>已经准备好运行 puppet 主控服务器 了，那么开启 apache 服务来让它启动</p><pre><code># systemctl start apache2
</code></pre><p>我们 puppet 主控服务器已经运行，不过它还不能管理任何代理节点。现在我们给 puppet 主控服务器添加代理节点.</p><p><strong>提示</strong>: 如果报错</p><pre><code>Job for apache2.service failed. see &quot;systemctl status apache2.service&quot; and &quot;journalctl -xe&quot; for details.
</code></pre><p>肯定是 apache 服务器有一些问题，我们可以使用 root 或是 sudo 访问权限来运行<strong>apachectl start</strong>查看它输出的日志。在本教程执行过程中, 我们发现一个 <strong>/etc/apache2/sites-enabled/puppetmaster.conf</strong> 的证书配置问题。修改其中的<strong>SSLCertificateFile /var/lib/puppet/ssl/certs/server.pem <strong>为 <strong>SSLCertificateFile /var/lib/puppet/ssl/certs/puppetmaster.pem</strong>，然后注释掉后面这行</strong>SSLCertificateKeyFile</strong> 。然后在命令行重新启动 apache。</p><h3 id="_8-安装-puppet-代理节点的软件包" tabindex="-1">8. 安装 Puppet 代理节点的软件包 <a class="header-anchor" href="#_8-安装-puppet-代理节点的软件包" aria-label="Permalink to “8. 安装 Puppet 代理节点的软件包”">​</a></h3><p>我们已经准备好了 puppet 的服务器，现在需要一个可以管理的代理节点，我们将安装 puppet 代理软件到节点上去。这里我们要给每一个需要管理的节点安装代理软件，并且确保这些节点能够通过 DNS 查询到服务器主机。下面将 安装最新的代理软件到 节点 puppetnode.example.com 上。</p><p>在代理节点上使用下面的命令下载 puppet 实验室提供的软件包：</p><pre><code># cd /tmp/
# wget https://apt.puppetlabs.com/puppetlabs-release-trusty.deb\\

--2015-06-17 00:54:42-- https://apt.puppetlabs.com/puppetlabs-release-trusty.deb
Resolving apt.puppetlabs.com (apt.puppetlabs.com)... 192.155.89.90, 2600:3c03::f03c:91ff:fedb:6b1d
Connecting to apt.puppetlabs.com (apt.puppetlabs.com)|192.155.89.90|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 7384 (7.2K) [application/x-debian-package]
Saving to: ‘puppetlabs-release-trusty.deb’

puppetlabs-release-tr 100%[===========================&gt;] 7.21K --.-KB/s in 0.04s

2015-06-17 00:54:42 (162 KB/s) - ‘puppetlabs-release-trusty.deb’ saved [7384/7384]
</code></pre><p>在 ubuntu 15.04 上我们使用debian包管理系统来安装它，命令如下：</p><pre><code># dpkg -i puppetlabs-release-trusty.deb
</code></pre><p>使用 apt 包管理命令更新一下本地的软件源：</p><pre><code># apt-get update
</code></pre><p>通过远程仓库安装：</p><pre><code># apt-get install puppet
</code></pre><p>Puppet 代理默认是不启动的。这里我们需要使用文本编辑器修改 /etc/default/puppet 文件，使它正常工作：</p><pre><code># nano /etc/default/puppet
</code></pre><p>更改 <strong>START</strong> 的值改成 &quot;yes&quot; 。</p><pre><code>START=yes
</code></pre><p>最后保存并退出。</p><h3 id="_9-使用-apt-工具锁定代理软件的版本" tabindex="-1">9. 使用 Apt 工具锁定代理软件的版本 <a class="header-anchor" href="#_9-使用-apt-工具锁定代理软件的版本" aria-label="Permalink to “9. 使用 Apt 工具锁定代理软件的版本”">​</a></h3><p>和上面的步骤一样为防止随意升级造成的配置文件混乱，我们要使用 apt 工具来把它锁定。具体做法是使用文本编辑器创建一个文件 <strong>/etc/apt/preferences.d/00-puppet.pref</strong></p><pre><code># nano /etc/apt/preferences.d/00-puppet.pref
</code></pre><p>在新建的文件里面加入如下内容</p><pre><code># /etc/apt/preferences.d/00-puppet.pref
Package: puppet puppet-common
Pin: version 3.8*
Pin-Priority: 501
</code></pre><p>这样 puppet 就不会随着系统软件升级而随意升级了。</p><h3 id="_10-配置-puppet-代理节点" tabindex="-1">10. 配置 puppet 代理节点 <a class="header-anchor" href="#_10-配置-puppet-代理节点" aria-label="Permalink to “10. 配置 puppet 代理节点”">​</a></h3><p>我们需要编辑一下代理节点的 puppet.conf 文件，来使它运行。</p><pre><code># nano /etc/puppet/puppet.conf
</code></pre><p>它看起来和服务器的配置文件完全一样。同样注释掉<strong>templatedir</strong>这行。不同的是在这里我们需要删除掉所有关于<code>[master]</code> 的部分。</p><p>假定主控服务器可以通过名字“puppet-master”访问，我们的客户端应该可以和它相互连接通信。如果不行的话，我们需要使用完整的主机域名 puppetmaster.example.com</p><pre><code>[agent]
server = puppetmaster.example.com
certname = puppetnode.example.com
</code></pre><p>在文件的结尾增加上面3行，增加之后文件内容像下面这样：</p><pre><code>[main]
logdir=/var/log/puppet
vardir=/var/lib/puppet
ssldir=/var/lib/puppet/ssl
rundir=/var/run/puppet
factpath=$vardir/lib/facter
#templatedir=$confdir/templates

[agent]
server = puppetmaster.example.com
certname = puppetnode.example.com
</code></pre><p>最后保存并退出。</p><p>使用下面的命令来启动客户端软件：</p><pre><code># systemctl start puppet
</code></pre><p>如果一切顺利的话，我们不会看到命令行有任何输出。 第一次运行的时候，代理节点会生成一个 ssl 证书并且给服务器发送一个请求，经过签名确认后，两台机器就可以互相通信了。</p><p><strong>提示</strong>： 如果这是你添加的第一个代理节点，建议你在添加其他节点前先给这个证书签名。一旦能够通过并正常运行，回过头来再添加其他代理节点。</p><h3 id="_11-在主控服务器上对证书请求进行签名" tabindex="-1">11. 在主控服务器上对证书请求进行签名 <a class="header-anchor" href="#_11-在主控服务器上对证书请求进行签名" aria-label="Permalink to “11. 在主控服务器上对证书请求进行签名”">​</a></h3><p>第一次运行的时候，代理节点会生成一个 ssl 证书并且给服务器发送一个签名请求。在主控服务器给代理节点服务器证书签名之后，主服务器才能和代理服务器通信并且控制代理服务器。</p><p>在主控服务器上使用下面的命令来列出当前的证书请求：</p><pre><code># puppet cert list
&quot;puppetnode.example.com&quot; (SHA256) 31:A1:7E:23:6B:CD:7B:7D:83:98:33:8B:21:01:A6:C4:01:D5:53:3D:A0:0E:77:9A:77:AE:8F:05:4A:9A:50:B2
</code></pre><p>因为只设置了一台代理节点服务器，所以我们将只看到一个请求。看起来类似如上，代理节点的完整域名即其主机名。</p><p>注意有没有“+”号在前面，代表这个证书有没有被签名。</p><p>使用带有主机名的<strong>puppet cert sign</strong>这个命令来签署这个签名请求，如下：</p><pre><code># puppet cert sign puppetnode.example.com
Notice: Signed certificate request for puppetnode.example.com
Notice: Removing file Puppet::SSL::CertificateRequest puppetnode.example.com at &#39;/var/lib/puppet/ssl/ca/requests/puppetnode.example.com.pem&#39;
</code></pre><p>主控服务器现在可以通讯和控制它签名过的代理节点了。</p><p>如果想签署所有的当前请求，可以使用 -all 选项，如下所示：</p><pre><code># puppet cert sign --all
</code></pre><h3 id="_12-删除一个-puppet-证书" tabindex="-1">12. 删除一个 Puppet 证书 <a class="header-anchor" href="#_12-删除一个-puppet-证书" aria-label="Permalink to “12. 删除一个 Puppet 证书”">​</a></h3><p>如果我们想移除一个主机，或者想重建一个主机然后再添加它。下面的例子里我们将展示如何删除 puppet 主控服务器上面的一个证书。使用的命令如下：</p><pre><code># puppet cert clean hostname
Notice: Revoked certificate with serial 5
Notice: Removing file Puppet::SSL::Certificate puppetnode.example.com at &#39;/var/lib/puppet/ssl/ca/signed/puppetnode.example.com.pem&#39;
Notice: Removing file Puppet::SSL::Certificate puppetnode.example.com at &#39;/var/lib/puppet/ssl/certs/puppetnode.example.com.pem&#39;
</code></pre><p>如果我们想查看所有的签署和未签署的请求，使用下面这条命令：</p><pre><code># puppet cert list --all
+ &quot;puppetmaster&quot; (SHA256) 33:28:97:86:A1:C3:2F:73:10:D1:FB:42:DA:D5:42:69:71:84:F0:E2:8A:01:B9:58:38:90:E4:7D:B7:25:23:EC (alt names: &quot;DNS:puppetmaster&quot;, &quot;DNS:puppetmaster.example.com&quot;) 
</code></pre><h3 id="_13-部署-puppet-清单" tabindex="-1">13. 部署 Puppet 清单 <a class="header-anchor" href="#_13-部署-puppet-清单" aria-label="Permalink to “13. 部署 Puppet 清单”">​</a></h3><p>当配置并完成 puppet 清单后，现在我们需要部署清单到代理节点服务器上。要应用并加载主 puppet 清单，我们可以在代理节点服务器上面使用下面的命令：</p><pre><code># puppet agent --test

Info: Retrieving pluginfacts
Info: Retrieving plugin
Info: Caching catalog for puppetnode.example.com
Info: Applying configuration version &#39;1434563858&#39;
Notice: /Stage[main]/Main/Exec[apt-update]/returns: executed successfully
Notice: Finished catalog run in 10.53 seconds
</code></pre><p>这里向我们展示了主清单如何立即影响到了一个单一的服务器。</p><p>如果我们打算运行的 puppet 清单与主清单没有什么关联，我们可以简单使用 puppet apply 带上相应的清单文件的路径即可。它仅将清单应用到我们运行该清单的代理节点上。</p><pre><code># puppet apply /etc/puppet/manifest/test.pp
</code></pre><h3 id="_14-为特定节点配置清单" tabindex="-1">14. 为特定节点配置清单 <a class="header-anchor" href="#_14-为特定节点配置清单" aria-label="Permalink to “14. 为特定节点配置清单”">​</a></h3><p>如果我们想部署一个清单到某个特定的节点，我们需要如下配置清单。</p><p>在主控服务器上面使用文本编辑器编辑 /etc/puppet/manifest/site.pp：</p><pre><code># nano /etc/puppet/manifest/site.pp
</code></pre><p>添加下面的内容进去</p><pre><code>node &#39;puppetnode&#39;, &#39;puppetnode1&#39; {
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
</code></pre><p>这里的配置显示我们将在名为 puppetnode 和 puppetnode1 的2个指定的节点上面安装 apache 服务。这里可以添加其他我们需要安装部署的具体节点进去。</p><h3 id="_15-配置清单模块" tabindex="-1">15. 配置清单模块 <a class="header-anchor" href="#_15-配置清单模块" aria-label="Permalink to “15. 配置清单模块”">​</a></h3><p>模块对于组合任务是非常有用的，在 Puppet 社区有很多人贡献了自己的模块组件。</p><p>在主控服务器上, 我们将使用 puppet module 命令来安装 <strong>puppetlabs-apache</strong> 模块。</p><pre><code># puppet module install puppetlabs-apache
</code></pre><p><strong>警告</strong>: 千万不要在一个已经部署 apache 环境的机器上面使用这个模块，否则它将清空你没有被 puppet 管理的 apache 配置。</p><p>现在用文本编辑器来修改 <strong>site.pp</strong> ：</p><pre><code># nano /etc/puppet/manifest/site.pp
</code></pre><p>添加下面的内容进去，在 puppetnode 上面安装 apache 服务。</p><pre><code>node &#39;puppet-node&#39; {
class { &#39;apache&#39;: } # use apache module
apache::vhost { &#39;example.com&#39;: # define vhost resource
port =&gt; &#39;80&#39;,
docroot =&gt; &#39;/var/www/html&#39;
}
}
</code></pre><p>保存退出。然后重新运行该清单来为我们的代理节点部署 apache 配置。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>现在我们已经成功的在 ubuntu 15.04 上面部署并运行 puppet 来管理代理节点服务器的基础运行环境。我们学习了puppet 是如何工作的，编写清单文件，节点与主机间使用 ssl 证书认证的认证过程。使用 puppet 开源软件配置管理工具在众多的代理节点上来控制、管理和配置重复性任务是非常容易的。如果你有任何的问题，建议，反馈，与我们取得联系，我们将第一时间完善更新，谢谢。</p><hr>`,95)),r("p",null,[e[4]||(e[4]=p("via: ",-1)),a(t,{href:"http://linoxide.com/linux-how-to/install-puppet-ubuntu-15-04/"},{default:n(()=>[...e[3]||(e[3]=[p("http://linoxide.com/linux-how-to/install-puppet-ubuntu-15-04/",-1)])]),_:1})]),r("p",null,[e[8]||(e[8]=p("作者：",-1)),a(t,{href:"http://linoxide.com/author/arunp/"},{default:n(()=>[...e[5]||(e[5]=[p("Arun Pyasi",-1)])]),_:1}),e[9]||(e[9]=p(" 译者：",-1)),a(t,{href:"https://github.com/ivo-wang"},{default:n(()=>[...e[6]||(e[6]=[p("ivo-wang",-1)])]),_:1}),e[10]||(e[10]=p(" 校对：",-1)),a(t,{href:"https://github.com/wxy"},{default:n(()=>[...e[7]||(e[7]=[p("wxy",-1)])]),_:1})]),r("p",null,[e[13]||(e[13]=p("本文由 ",-1)),a(t,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[11]||(e[11]=[p("LCTT",-1)])]),_:1}),e[14]||(e[14]=p(" 原创翻译，",-1)),a(t,{href:"https://linux.cn/"},{default:n(()=>[...e[12]||(e[12]=[p("Linux中国",-1)])]),_:1}),e[15]||(e[15]=p(" 荣誉推出",-1))])])}const _=o(l,[["render",d]]);export{P as __pageData,_ as default};
