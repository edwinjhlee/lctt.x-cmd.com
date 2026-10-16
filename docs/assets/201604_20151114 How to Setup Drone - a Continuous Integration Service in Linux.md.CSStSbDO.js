import{_ as a,a0 as p,w as s,s as l,I as o,x as n,a1 as r,A as d,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"如何在 linux 上配置持续集成服务 - Drone | LCTT x X-CMD","titleTemplate":false,"description":"如何在 linux 上配置持续集成服务 - Drone | LCTT (201604) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 linux 上配置持续集成服务 - Drone | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 linux 上配置持续集成服务 - Drone | LCTT (201604) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201604/20151114 How to Setup Drone - a Continuous Integration Service in Linux","title":"如何在 linux 上配置持续集成服务 - Drone","tag":"201604","desc":""},"relativePath":"201604/20151114 How to Setup Drone - a Continuous Integration Service in Linux.md","filePath":"[post].md"}'),u={name:"201604/20151114 How to Setup Drone - a Continuous Integration Service in Linux.md"};function c(b,e,h,g,m,k){const t=p("Link");return s(),l("div",null,[e[25]||(e[25]=o("h1",{id:"如何在-linux-上配置持续集成服务-drone",tabindex:"-1"},[n("如何在 linux 上配置持续集成服务 - Drone "),o("a",{class:"header-anchor",href:"#如何在-linux-上配置持续集成服务-drone","aria-label":"Permalink to “如何在 linux 上配置持续集成服务 - Drone”"},"​")],-1)),o("p",null,[e[1]||(e[1]=n("如果你对一次又一次的克隆、构建、测试和部署代码感到厌倦了，可以考虑一下持续集成。持续集成简称 CI，是一种像我们一样的频繁提交的代码库，构建、测试和部署的软件工程实践。CI 可以帮助我们快速的集成新代码到已有的代码库。如果这个过程是自动化进行的，那么就会提高开发的速度，因为这可以减少开发人员手工构建和测试的时间。",-1)),r(t,{href:"https://drone.io/"},{default:d(()=>[...e[0]||(e[0]=[n("Drone",-1)])]),_:1}),e[2]||(e[2]=n(" 是一个自由开源项目，用来提供一个非常棒的持续集成服务的环境，采用 Apache 2.0 协议发布。它已经集成近很多代码库提供商，比如 Github、Bitbucket 以及 Google Code，它可以从代码库提取代码，使我们可以对包括 PHP, Node, Ruby, Go, Dart, Python, C/C++, JAVA 等等在内的各种语言编译构建。它是如此一个强大的平台，它使用了容器和 docker 技术，这让用户每次构建都可以在保证隔离的条件下完全控制他们自己的构建环境。",-1))]),e[26]||(e[26]=i(`<h3 id="_1-安装-docker" tabindex="-1">1. 安装 Docker <a class="header-anchor" href="#_1-安装-docker" aria-label="Permalink to “1. 安装 Docker”">​</a></h3><p>首先，我们要安装 docker，因为这是 Drone 的工作流的最关键的元素。Drone 合理的利用了 docker 来构建和测试应用。容器技术提高了应用部署的效率。要安装 docker ，我们需要在不同的 linux 发行版本运行下面对应的命令，我们这里会说明 Ubuntu 14.04 和 CentOS 7 两个版本。</p><h4 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-label="Permalink to “Ubuntu”">​</a></h4><p>要在 Ubuntu 上安装 Docker ，我们只需要运行下面的命令。</p><pre><code># apt-get update
# apt-get install docker.io
</code></pre><p>安装之后我们需要使用<code>service</code> 命令重启 docker 引擎。</p><pre><code># service docker restart
</code></pre><p>然后我们让 docker 在系统启动时自动启动。</p><pre><code># update-rc.d docker defaults

Adding system startup for /etc/init.d/docker ...
/etc/rc0.d/K20docker -&gt; ../init.d/docker
/etc/rc1.d/K20docker -&gt; ../init.d/docker
/etc/rc6.d/K20docker -&gt; ../init.d/docker
/etc/rc2.d/S20docker -&gt; ../init.d/docker
/etc/rc3.d/S20docker -&gt; ../init.d/docker
/etc/rc4.d/S20docker -&gt; ../init.d/docker
/etc/rc5.d/S20docker -&gt; ../init.d/docker
</code></pre><h4 id="centos" tabindex="-1">CentOS <a class="header-anchor" href="#centos" aria-label="Permalink to “CentOS”">​</a></h4><p>第一，我们要更新机器上已经安装的软件包。我们可以使用下面的命令。</p><pre><code>#  sudo yum update
</code></pre><p>要在 centos 上安装 docker，我们可以简单的运行下面的命令。</p><pre><code>#  curl -sSL https://get.docker.com/ | sh
</code></pre><p>安装好 docker 引擎之后我么只需要简单使用下面的<code>systemd</code> 命令启动 docker，因为 centos 7 的默认初始化系统是 systemd。</p><pre><code># systemctl start docker
</code></pre><p>然后我们要让 docker 在系统启动时自动启动。</p><pre><code># systemctl enable docker

ln -s &#39;/usr/lib/systemd/system/docker.service&#39; &#39;/etc/systemd/system/multi-user.target.wants/docker.service&#39;
</code></pre><h3 id="_2-安装-sqlite-驱动" tabindex="-1">2. 安装 SQlite 驱动 <a class="header-anchor" href="#_2-安装-sqlite-驱动" aria-label="Permalink to “2. 安装 SQlite 驱动”">​</a></h3><p>Drone 默认使用 SQlite3 数据库服务器来保存数据和信息。它会在 /var/lib/drone/ 自动创建名为 drone.sqlite 的数据库来处理数据库模式的创建和迁移。要安装 SQlite3 我们要完成以下几步。</p><h4 id="ubuntu-14-04" tabindex="-1">Ubuntu 14.04 <a class="header-anchor" href="#ubuntu-14-04" aria-label="Permalink to “Ubuntu 14.04”">​</a></h4><p>因为 SQlite3 存在于 Ubuntu 14.04 的默认软件库，我们只需要简单的使用 apt 命令安装它。</p><pre><code># apt-get install libsqlite3-dev
</code></pre><h4 id="centos-7" tabindex="-1">CentOS 7 <a class="header-anchor" href="#centos-7" aria-label="Permalink to “CentOS 7”">​</a></h4><p>要在 Centos 7 上安装需要使用下面的 yum 命令。</p><pre><code># yum install sqlite-devel
</code></pre><h3 id="_3-安装-drone" tabindex="-1">3. 安装 Drone <a class="header-anchor" href="#_3-安装-drone" aria-label="Permalink to “3. 安装 Drone”">​</a></h3><p>最后，我们安装好依赖的软件，我们现在更进一步的接近安装 Drone。在这一步里我们只简单的从官方链接下载对应的二进制软件包，然后使用默认软件包管理器安装 Drone。</p><h4 id="ubuntu-1" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu-1" aria-label="Permalink to “Ubuntu”">​</a></h4>`,29)),o("p",null,[e[4]||(e[4]=n("我们将使用 wget 从官方的 ",-1)),r(t,{href:"http://downloads.drone.io/master/drone.deb"},{default:d(()=>[...e[3]||(e[3]=[n("Debian 文件下载链接",-1)])]),_:1}),e[5]||(e[5]=n("下载 drone 的 debian 软件包。下面就是下载命令。",-1))]),e[27]||(e[27]=o("pre",null,[o("code",null,`# wget downloads.drone.io/master/drone.deb

Resolving downloads.drone.io (downloads.drone.io)... 54.231.48.98
Connecting to downloads.drone.io (downloads.drone.io)|54.231.48.98|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 7722384 (7.4M) [application/x-debian-package]
Saving to: 'drone.deb'
100%[======================================>] 7,722,384 1.38MB/s in 17s
2015-11-06 14:09:28 (456 KB/s) - 'drone.deb' saved [7722384/7722384]
`)],-1)),e[28]||(e[28]=o("p",null,"下载好之后，我们将使用 dpkg 软件包管理器安装它。",-1)),e[29]||(e[29]=o("pre",null,[o("code",null,`# dpkg -i drone.deb

Selecting previously unselected package drone.
(Reading database ... 28077 files and directories currently installed.)
Preparing to unpack drone.deb ...
Unpacking drone (0.3.0-alpha-1442513246) ...
Setting up drone (0.3.0-alpha-1442513246) ...
Your system ubuntu 14: using upstart to control Drone
drone start/running, process 9512
`)],-1)),e[30]||(e[30]=o("h4",{id:"centos-1",tabindex:"-1"},[n("CentOS "),o("a",{class:"header-anchor",href:"#centos-1","aria-label":"Permalink to “CentOS”"},"​")],-1)),o("p",null,[e[7]||(e[7]=n("在 CentOS 机器上我们要使用 wget 命令从",-1)),r(t,{href:"http://downloads.drone.io/master/drone.rpm"},{default:d(()=>[...e[6]||(e[6]=[n("下载链接",-1)])]),_:1}),e[8]||(e[8]=n("下载 RPM 包。",-1))]),e[31]||(e[31]=i(`<pre><code># wget downloads.drone.io/master/drone.rpm

--2015-11-06 11:06:45-- http://downloads.drone.io/master/drone.rpm
Resolving downloads.drone.io (downloads.drone.io)... 54.231.114.18
Connecting to downloads.drone.io (downloads.drone.io)|54.231.114.18|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 7763311 (7.4M) [application/x-redhat-package-manager]
Saving to: ‘drone.rpm’
100%[======================================&gt;] 7,763,311 1.18MB/s in 20s
2015-11-06 11:07:06 (374 KB/s) - ‘drone.rpm’ saved [7763311/7763311]
</code></pre><p>然后我们使用 yum 安装 rpm 包。</p><pre><code># yum localinstall drone.rpm
</code></pre><h3 id="_4-配置端口" tabindex="-1">4. 配置端口 <a class="header-anchor" href="#_4-配置端口" aria-label="Permalink to “4. 配置端口”">​</a></h3><p>安装完成之后，我们要先进行配置才能工作起来。drone 的配置文件在<strong>/etc/drone/drone.toml</strong> 。默认情况下 drone 的 web 接口使用的是80，而这也是 http 默认的端口，如果我们修改它，请按下面所示的修改配置文件里 server 块对应的值。</p><pre><code>[server]
port=&quot;:80&quot;
</code></pre><h3 id="_5-集成-github" tabindex="-1">5. 集成 Github <a class="header-anchor" href="#_5-集成-github" aria-label="Permalink to “5. 集成 Github”">​</a></h3>`,7)),o("p",null,[e[10]||(e[10]=n("为了运行 Drone 我们必须设置最少一个和 GitHub、GitHub 企业版，Gitlab，Gogs，Bitbucket 关联的集成点。在本文里我们只集成了 github，但是如果我们要集成其他的服务，我们可以在配置文件做修改。为了集成 github 我们需要在github 的设置里创建一个新的应用：",-1)),r(t,{href:"https://github.com/settings/developers"},{default:d(()=>[...e[9]||(e[9]=[n("https://github.com/settings/developers",-1)])]),_:1}),e[11]||(e[11]=n(" 。",-1))]),e[32]||(e[32]=i(`<p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/registering-app-github.png" alt="Registering App Github"></p><p>要创建一个应用，我们需要在 <code>New Application</code> 页面点击 <code>Register</code>，然后如下所示填表。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/registering-OAuth-app-github.png" alt="Registering OAuth app github"></p><p>我们应该保证在应用的配置项里设置了<strong>授权回调链接</strong>，链接看起来类似 <code>http://drone.linoxide.com/api/auth/github.com</code>。然后我们点击注册应用。所有都做好之后我们会看到我们需要在我们的 Drone 配置文件里配置的客户端 ID 和客户端密钥。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/client-id-secret-token.png" alt="Client ID and Secret Token"></p><p>在这些都完成之后我们需要使用文本编辑器编辑 drone 配置文件，比如使用下面的命令。</p><pre><code># nano /etc/drone/drone.toml
</code></pre><p>然后我们会在 drone 的配置文件里面找到<code>[github]</code> 部分，紧接着的是下面所示的配置内容</p><pre><code>[github]
client=&quot;3dd44b969709c518603c&quot;
secret=&quot;4ee261abdb431bdc5e96b19cc3c498403853632a&quot;
# orgs=[]
# open=false
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-github-drone-e1446835124465.png" alt="Configuring Github Drone"></p><h3 id="_6-配置-smtp-服务器" tabindex="-1">6. 配置 SMTP 服务器 <a class="header-anchor" href="#_6-配置-smtp-服务器" aria-label="Permalink to “6. 配置 SMTP 服务器”">​</a></h3><p>如果我们想让 drone 使用 email 发送通知，那么我们需要在 SMTP 配置里面设置我们的 SMTP 服务器。如果我们已经有了一个 SMTP 服务，那就只需要简单的使用它的配置文件就行了，但是因为我们没有一个 SMTP 服务器，我们需要安装一个 MTA 比如 Postfix，然后在 drone 配置文件里配置好 SMTP。</p><h4 id="ubuntu-2" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu-2" aria-label="Permalink to “Ubuntu”">​</a></h4><p>在 ubuntu 里使用下面的 apt 命令安装 postfix。</p><pre><code># apt-get install postfix
</code></pre><h4 id="centos-2" tabindex="-1">CentOS <a class="header-anchor" href="#centos-2" aria-label="Permalink to “CentOS”">​</a></h4><p>在 CentOS 里使用下面的 yum 命令安装 postfix。</p><pre><code># yum install postfix
</code></pre><p>安装好之后，我们需要编辑我们的 postfix 配置文件。</p><pre><code># nano /etc/postfix/main.cf
</code></pre><p>然后我们要把 myhostname 的值替换为我们自己的 FQDN，比如 drone.linoxide.com。</p><pre><code>myhostname = drone.linoxide.com
</code></pre><p>现在开始配置 drone 配置文件里的 SMTP 部分。</p><pre><code># nano /etc/drone/drone.toml
</code></pre><p>找到<code>[smtp]</code> 部分补充上下面的内容。</p><pre><code>[smtp]
host = &quot;drone.linoxide.com&quot;
port = &quot;587&quot;
from = &quot;root@drone.linoxide.com&quot;
user = &quot;root&quot;
pass = &quot;password&quot;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-smtp-drone.png" alt="Configuring SMTP Drone"></p><p>注意：这里的 <strong>user</strong> 和 <strong>pass</strong> 参数强烈推荐一定要改成某个具体用户的配置。</p><h3 id="_7-配置-worker" tabindex="-1">7. 配置 Worker <a class="header-anchor" href="#_7-配置-worker" aria-label="Permalink to “7. 配置 Worker”">​</a></h3><p>如我们所知的 drone 利用了 docker 完成构建、测试任务，我们需要把 docker 配置为 drone 的 worker。要完成这些需要修改 drone 配置文件里的<code>[worker]</code> 部分。</p><pre><code># nano /etc/drone/drone.toml
</code></pre><p>然后取消底下几行的注释并且补充上下面的内容。</p><pre><code>[worker]
nodes=[
&quot;unix:///var/run/docker.sock&quot;,
&quot;unix:///var/run/docker.sock&quot;
]
</code></pre><p>这里我们只设置了两个节点，这意味着上面的配置文件只能同时执行2 个构建操作。要提高并发性可以增大节点的值。</p><pre><code>[worker]
nodes=[
&quot;unix:///var/run/docker.sock&quot;,
&quot;unix:///var/run/docker.sock&quot;,
&quot;unix:///var/run/docker.sock&quot;,
&quot;unix:///var/run/docker.sock&quot;
]
</code></pre><p>使用上面的配置文件 drone 被配置为使用本地的 docker 守护程序可以同时构建4个任务。</p><h3 id="_8-重启-drone" tabindex="-1">8. 重启 Drone <a class="header-anchor" href="#_8-重启-drone" aria-label="Permalink to “8. 重启 Drone”">​</a></h3><p>最后，当所有的安装和配置都准备好之后，我们现在要在本地的 linux 机器上启动 drone 服务器。</p><h4 id="ubuntu-3" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu-3" aria-label="Permalink to “Ubuntu”">​</a></h4><p>因为 ubuntu 14.04 使用了 sysvinit 作为默认的初始化系统，所以只需要简单执行下面的 service 命令就可以启动 drone 了。</p><pre><code># service drone restart
</code></pre><p>要让 drone 在系统启动时也自动运行，需要运行下面的命令。</p><pre><code># update-rc.d drone defaults
</code></pre><h4 id="centos-3" tabindex="-1">CentOS <a class="header-anchor" href="#centos-3" aria-label="Permalink to “CentOS”">​</a></h4><p>因为 CentOS 7使用 systemd 作为初始化系统，所以只需要运行下面的 systemd 命令就可以重启 drone。</p><pre><code># systemctl restart drone
</code></pre><p>要让 drone 自动运行只需要运行下面的命令。</p><pre><code># systemctl enable drone
</code></pre><h3 id="_9-添加防火墙例外规则" tabindex="-1">9. 添加防火墙例外规则 <a class="header-anchor" href="#_9-添加防火墙例外规则" aria-label="Permalink to “9. 添加防火墙例外规则”">​</a></h3><p>众所周知 drone 默认使用了80 端口而我们又没有修改它，所以我们需要配置防火墙程序允许80 端口（http）开放并允许其他机器可以通过网络连接。</p><h4 id="ubuntu-14-04-1" tabindex="-1">Ubuntu 14.04 <a class="header-anchor" href="#ubuntu-14-04-1" aria-label="Permalink to “Ubuntu 14.04”">​</a></h4><p>iptables 是最流行的防火墙程序，并且 ubuntu 默认安装了它。我们需要修改 iptable 以暴露端口80，这样我们才能让 drone 的 web 界面在网络上被大家访问。</p><pre><code># iptables -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT
# /etc/init.d/iptables save
</code></pre><h4 id="centos-7-1" tabindex="-1">CentOS 7 <a class="header-anchor" href="#centos-7-1" aria-label="Permalink to “CentOS 7”">​</a></h4><p>因为 CentOS 7 默认安装了 systemd，它使用 firewalld 作为防火墙程序。为了在 firewalld 上打开80端口（http 服务），我们需要执行下面的命令。</p><pre><code># firewall-cmd --permanent --add-service=http

success

# firewall-cmd --reload

success
</code></pre><h3 id="_10-访问-web-界面" tabindex="-1">10. 访问 web 界面 <a class="header-anchor" href="#_10-访问-web-界面" aria-label="Permalink to “10. 访问 web 界面”">​</a></h3><p>现在我们将在我们最喜欢的浏览器上通过 web 界面打开 drone。要完成这些我们要把浏览器指向运行 drone 的服务器。因为 drone 默认使用80 端口而我们有没有修改过，所以我们只需要在浏览器里根据我们的配置输入<code>http://ip-address/</code> 或 <code>http://drone.linoxide.com</code> 就行了。在我们正确的完成了上述操作后，我们就可以看到登录界面了。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/login-github-drone-e1446834688394.png" alt="Login Github Drone"></p><p>因为在上面的步骤里配置了 Github，我们现在只需要简单的选择 github 然后进入应用授权步骤，这些完成后我们就可以进入工作台了。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/drone-dashboard.png" alt="Drone Dashboard"></p><p>这里它会同步我们在 github 上的代码库，然后询问我们要在 drone 上构建那个代码库。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/activate-repository-e1446835574595.png" alt="Activate Repository"></p><p>这一步完成后，它会询问我们在代码库里添加<code>.drone.yml</code> 文件的新名称，并且在这个文件里定义构建的过程和配置项，比如使用那个 docker 镜像，执行那些命令和脚本来编译，等等。</p><p>我们按照下面的内容来配置我们的<code>.drone.yml</code>。</p><pre><code>image: python
script:
 - python helloworld.py
 - echo &quot;Build has been completed.&quot;
</code></pre><p>这一步完成后我们就可以使用 drone 应用里的 YAML 格式的配置文件来构建我们的应用了。所有对代码库的提交和改变此时都会同步到这个仓库。一旦提交完成了，drone 就会自动开始构建。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/building-application-drone.png" alt="Building Application Drone"></p><p>所有操作都完成后，我们就能在终端看到构建的结果了。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/build-success-drone.png" alt="Build Success Drone"></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>在本文中我们学习了如何安装一个可以工作的使用 drone 的持续集成平台。如果我们愿意我们甚至可以从 drone.io 官方提供的服务开始工作。我们可以根据自己的需求从免费的服务或者收费服务开始。它通过漂亮的 web 界面和强大的功能改变了持续集成的世界。它可以集成很多第三方应用和部署平台。如果你有任何问题、建议可以直接反馈给我们，谢谢。</p><hr>`,73)),o("p",null,[e[13]||(e[13]=n("via: ",-1)),r(t,{href:"http://linoxide.com/linux-how-to/setup-drone-continuous-integration-linux/"},{default:d(()=>[...e[12]||(e[12]=[n("http://linoxide.com/linux-how-to/setup-drone-continuous-integration-linux/",-1)])]),_:1})]),o("p",null,[e[17]||(e[17]=n("作者：",-1)),r(t,{href:"http://linoxide.com/author/arunp/"},{default:d(()=>[...e[14]||(e[14]=[n("Arun Pyasi",-1)])]),_:1}),e[18]||(e[18]=n(" 译者：",-1)),r(t,{href:"https://github.com/oska874"},{default:d(()=>[...e[15]||(e[15]=[n("ezio",-1)])]),_:1}),e[19]||(e[19]=n(" 校对：",-1)),r(t,{href:"https://github.com/wxy"},{default:d(()=>[...e[16]||(e[16]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[22]||(e[22]=n("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[20]||(e[20]=[n("LCTT",-1)])]),_:1}),e[23]||(e[23]=n(" 原创编译，",-1)),r(t,{href:"https://linux.cn/"},{default:d(()=>[...e[21]||(e[21]=[n("Linux中国",-1)])]),_:1}),e[24]||(e[24]=n(" 荣誉推出",-1))])])}const S=a(u,[["render",c]]);export{w as __pageData,S as default};
