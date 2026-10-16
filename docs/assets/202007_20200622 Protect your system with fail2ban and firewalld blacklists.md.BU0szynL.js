import{_ as t,a0 as d,w as o,s as r,I as n,x as a,a1 as e,A as l,ao as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"使用 fail2ban 和 FirewallD 黑名单保护你的系统 | LCTT x X-CMD","titleTemplate":false,"description":"使用 fail2ban 和 FirewallD 黑名单保护你的系统 | LCTT (202007) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 fail2ban 和 FirewallD 黑名单保护你的系统 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 fail2ban 和 FirewallD 黑名单保护你的系统 | LCTT (202007) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202007/20200622 Protect your system with fail2ban and firewalld blacklists","title":"使用 fail2ban 和 FirewallD 黑名单保护你的系统","tag":"202007","desc":""},"relativePath":"202007/20200622 Protect your system with fail2ban and firewalld blacklists.md","filePath":"[post].md"}'),c={name:"202007/20200622 Protect your system with fail2ban and firewalld blacklists.md"};function h(b,s,g,u,k,f){const i=d("Link");return o(),r("div",null,[s[21]||(s[21]=n("h1",{id:"使用-fail2ban-和-firewalld-黑名单保护你的系统",tabindex:"-1"},[a("使用 fail2ban 和 FirewallD 黑名单保护你的系统 "),n("a",{class:"header-anchor",href:"#使用-fail2ban-和-firewalld-黑名单保护你的系统","aria-label":"Permalink to “使用 fail2ban 和 FirewallD 黑名单保护你的系统”"},"​")],-1)),s[22]||(s[22]=n("p",null,[n("img",{src:"https://fedoramagazine.org/wp-content/uploads/2020/06/fail2ban-and-firewalld-816x345.png",alt:""})],-1)),s[23]||(s[23]=n("p",null,"如果你运行的服务器有面向公众的 SSH 访问，你可能遇到过恶意登录尝试。本文介绍了如何使用两个实用程序来防止入侵者进入我们的系统。",-1)),n("p",null,[s[1]||(s[1]=a("为了防止反复的 ssh 登录尝试，我们来看看 fail2ban。而且，如果你不经常旅行，基本上停留在一两个国家，你可以将 FirewallD 配置为只允许",-1)),e(i,{href:"https://www.linode.com/community/questions/11143/top-tip-firewalld-and-ipset-country-blacklist"},{default:l(()=>[...s[0]||(s[0]=[a("从你选择的国家访问",-1)])]),_:1}),s[2]||(s[2]=a("。",-1))]),s[24]||(s[24]=p(`<p>首先，让我们为不熟悉这些应用程序的人员介绍一些术语，以完成这项工作：</p><p><strong>fail2ban</strong>：一个守护进程，用于禁止发生多次认证错误的主机。fail2ban 将监控 SystemD 日志，以查找对任何已启用的“<ruby>监狱<rt>jail</rt></ruby>”的失败的验证尝试。在达到指定失败次数后，它将添加一个防火墙规则，在配置的时间内阻止该特定 IP 地址。</p><p><strong>FirewallD</strong>：一个带有 D-Bus 接口的防火墙守护进程，提供动态防火墙。除非你另行决定使用传统的 iptables，否则你已经在所有支持的 Fedora 和 CentOS 上安装了 FirewallD。</p><h3 id="假定前提" tabindex="-1">假定前提 <a class="header-anchor" href="#假定前提" aria-label="Permalink to “假定前提”">​</a></h3><ul><li>主机系统有一个互联网连接，并且要么是直接暴露在互联网上，要么是通过 DMZ（这两个都是非常糟糕的想法，除非你知道你在做什么），要么是有一个端口从路由器转发过来。</li><li>虽然大部分的内容可能适用于其他系统，但本文假设当前系统是 Fedora（31 及以上）或 RHEL/CentOS 8 版本。在 CentOS 上，你必须用 <code>sudo dnf install epel-release</code> 启用 Fedora EPEL 仓库。</li></ul><h3 id="安装与配置" tabindex="-1">安装与配置 <a class="header-anchor" href="#安装与配置" aria-label="Permalink to “安装与配置”">​</a></h3><h4 id="fail2ban" tabindex="-1">Fail2Ban <a class="header-anchor" href="#fail2ban" aria-label="Permalink to “Fail2Ban”">​</a></h4><p>很有可能已经有某个 Firewalld 区已经允许 SSH 访问，但 sshd 服务本身默认没有启用。要手动启动它，并且不在启动时永久启用它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl start sshd</span></span></code></pre></div><p>或者在系统启动时启用，并同时启动它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl enable --now sshd</span></span></code></pre></div><p>下一步就是安装、配置、启用 fail2ban。和往常一样，安装可以通过命令行完成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install fail2ban</span></span></code></pre></div><p>安装完毕后，下一步就是配置“监狱”（你要以设置的任何阈值监视并禁止的服务）。默认情况下，IP 会被禁止 1 小时（这其实不够长）。最好的做法是使用 <code>*.local</code> 文件覆盖系统默认值，而不是直接修改 <code>*.config</code> 文件。如果我们查看我的 <code>jail.local</code>，我们可以看到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat /etc/fail2ban/jail.local</span></span>
<span class="line"><span>[DEFAULT]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># &quot;bantime&quot; is the number of seconds that a host is banned.</span></span>
<span class="line"><span>bantime  = 1d</span></span>
<span class="line"><span></span></span>
<span class="line"><span># A host is banned if it has generated &quot;maxretry&quot; during the last &quot;findtime&quot;</span></span>
<span class="line"><span>findtime  = 1h</span></span>
<span class="line"><span></span></span>
<span class="line"><span># &quot;maxretry&quot; is the number of failures before a host get banned.</span></span>
<span class="line"><span>maxretry = 5</span></span></code></pre></div><p>换成通俗的语言讲，就是在过去一小时内尝试 5 次后，该 IP 将被封禁 1 天。对于多次被封的 IP，也可以选择增加封禁时间，但这是另一篇文章的主题。</p><p>下一步是配置“监狱”。在本教程中显示的是 <code>sshd</code>，但其他服务的步骤大致相同。在 <code>/etc/fail2ban/jail.d</code> 中创建一个配置文件。这是我的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat /etc/fail2ban/jail.d/sshd.local</span></span>
<span class="line"><span>[sshd]</span></span>
<span class="line"><span>enabled = true</span></span></code></pre></div><p>就这么简单! 很多配置已经在为 Fedora 构建的软件包中处理了（提示：我是当前的维护者）。接下来启用并启动 fail2ban 服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl enable --now fail2ban</span></span></code></pre></div><p>希望没有立即出错，如果没有，请使用下面的命令检查 fail2ban 的状态：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl status fail2ban</span></span></code></pre></div><p>如果它没有错误地启动，应该是这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ systemctl status fail2ban</span></span>
<span class="line"><span>● fail2ban.service - Fail2Ban Service</span></span>
<span class="line"><span>Loaded: loaded (/usr/lib/systemd/system/fail2ban.service; disabled; vendor preset: disabled)</span></span>
<span class="line"><span>Active: active (running) since Tue 2020-06-16 07:57:40 CDT; 5s ago</span></span>
<span class="line"><span>Docs: man:fail2ban(1)</span></span>
<span class="line"><span>Process: 11230 ExecStartPre=/bin/mkdir -p /run/fail2ban (code=exited, status=0/SUCCESS)</span></span>
<span class="line"><span>Main PID: 11235 (f2b/server)</span></span>
<span class="line"><span>Tasks: 5 (limit: 4630)</span></span>
<span class="line"><span>Memory: 12.7M</span></span>
<span class="line"><span>CPU: 109ms</span></span>
<span class="line"><span>CGroup: /system.slice/fail2ban.service</span></span>
<span class="line"><span>└─11235 /usr/bin/python3 -s /usr/bin/fail2ban-server -xf start</span></span>
<span class="line"><span>Jun 16 07:57:40 localhost.localdomain systemd[1]: Starting Fail2Ban Service…</span></span>
<span class="line"><span>Jun 16 07:57:40 localhost.localdomain systemd[1]: Started Fail2Ban Service.</span></span>
<span class="line"><span>Jun 16 07:57:41 localhost.localdomain fail2ban-server[11235]: Server ready</span></span></code></pre></div><p>如果是刚刚启动的，fail2ban 不太可能显示任何有意思的信息，但要检查 fail2ban 的状态，并确保“监狱”被启用，请输入：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo fail2ban-client status</span></span>
<span class="line"><span>Status</span></span>
<span class="line"><span>|- Number of jail:      1</span></span>
<span class="line"><span>\`- Jail list:   sshd</span></span></code></pre></div><p>sshd “监狱”的上级状态也会显示出来。如果启用了多个“监狱”，它们会在这里显示出来。</p><p>要查看一个“监狱”的详细状态，只需在前面的命令中添加“监狱”名称。下面是我的系统的输出，它已经运行了一段时间。我已经从输出中删除了被禁止的 IP：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo fail2ban-client status sshd</span></span>
<span class="line"><span>Status for the jail: sshd</span></span>
<span class="line"><span>|- Filter</span></span>
<span class="line"><span>|  |- Currently failed: 8</span></span>
<span class="line"><span>|  |- Total failed:     4399</span></span>
<span class="line"><span>|  \`- Journal matches:  _SYSTEMD_UNIT=sshd.service + _COMM=sshd</span></span>
<span class="line"><span>\`- Actions</span></span>
<span class="line"><span>   |- Currently banned: 101</span></span>
<span class="line"><span>   |- Total banned:     684</span></span>
<span class="line"><span>   \`- Banned IP list:   ...</span></span></code></pre></div><p>监控 fail2ban 日志文件是否有入侵尝试，可以通过“尾随”日志来实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tail -f /var/log/fail2ban.log</span></span></code></pre></div><p><code>tail</code> 是一个很好的命令行工具，默认情况下，它可以显示一个文件的最后 10 行。添加 <code>-f</code> 告诉它尾随文件，这是个观察一个仍在被写入的文件的很好方式。</p><p>由于输出的内容中有真实的 IP，所以这里不会提供样本，但它的可读性很高。<code>INFO</code> 行通常是登录的尝试。如果从一个特定的 IP 地址进行了足够多的尝试，你会看到一个 <code>NOTICE</code> 行显示一个 IP 地址被禁止。在达到禁止时间后，你会看到一个 <code>NOTICE</code> 解禁行。</p><p>注意几个警告行。最常见的情况是，当添加了一个禁止后，fail2ban 发现该 IP 地址已经在其禁止数据库中，这意味着禁止可能无法正常工作。如果是最近安装的 fail2ban 包，它应该被设置为 FirewallD 的富规则。这个包在 fail2ban-0.11.1-6 版本时从 ipset 方式切换到了富规则方式，所以如果你的 fail2ban 安装时间较早，它可能还在尝试使用 ipset 方式，这种方式使用的是传统的 iptables，不是很可靠。</p><h4 id="firewalld-配置" tabindex="-1">FirewallD 配置 <a class="header-anchor" href="#firewalld-配置" aria-label="Permalink to “FirewallD 配置”">​</a></h4><h5 id="被动还是主动" tabindex="-1">被动还是主动？ <a class="header-anchor" href="#被动还是主动" aria-label="Permalink to “被动还是主动？”">​</a></h5><p>有两种策略可以分开或一起使用：<strong>被动</strong>地将单个 IP 地址或<strong>主动</strong>地根据来源国将子网永久列入黑名单。</p><p>对于被动方式，一旦 fail2ban 运行了一段时间，最好再运行 <code>sudo fail2ban-client status sshd</code> 来看看有哪些坏蛋。很可能会有很多被禁止的 IP 地址。选择一个，然后试着对它运行 <code>whois</code>。在输出结果中可能会有很多有趣的信息，但是对于这个方法来说，只有来源国是重要的。为了保持简单，让我们过滤掉除了国家以外的所有信息。</p><p>在这个例子中，我们将使用一些著名的域名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ whois google.com | grep -i country</span></span>
<span class="line"><span>Registrant Country: US</span></span>
<span class="line"><span>Admin Country: US</span></span>
<span class="line"><span>Tech Country: US</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ whois rpmfusion.org | grep -i country</span></span>
<span class="line"><span>Registrant Country: FR</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ whois aliexpress.com | grep -i country</span></span>
<span class="line"><span>Registrant Country: CN</span></span></code></pre></div><p>使用 <code>grep -i</code> 的原因是为了使 <code>grep</code> 不区分大小写，而大多数条目都使用的是 “Country”，而有些条目则是全小写的 “country”，所以这种方法无论如何都能匹配。</p><p>现在知道了尝试入侵的来源国，问题是，“是否有来自这个国家的人有合法的理由连接到这台计算机？”如果答案是否定的，那么封锁整个国家应该是可以接受的。</p><p>从功能上看，主动式方法它与被动式方法没有太大区别，然而，来自有些国家的入侵企图是非常普遍的。如果你的系统既不放在这些国家里，也没有任何源自这些国家的客户，那么为什么不现在就把它们加入黑名单而是等待呢？（LCTT 译注：我的经验是，动辄以国家的范畴而列入黑名单有些过于武断。建议可以将该 IP 所属的 WHOIS 网段放入到黑名单，因为这些网段往往具有相同的使用性质，如都用于用户接入或 IDC 托管，其安全状况也大致相同，因此，如果有来自该网段的某个 IP 的恶意尝试，可以预期该网段内的其它 IP 也可能被利用来做这样的尝试。）</p><h5 id="黑名单脚本和配置" tabindex="-1">黑名单脚本和配置 <a class="header-anchor" href="#黑名单脚本和配置" aria-label="Permalink to “黑名单脚本和配置”">​</a></h5><p>那么如何做到这一点呢？用 FirewallD ipset。我开发了下面的脚本来尽可能地自动化这个过程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># Based on the below article</span></span>
<span class="line"><span># https://www.linode.com/community/questions/11143/top-tip-firewalld-and-ipset-country-blacklist</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Source the blacklisted countries from the configuration file</span></span>
<span class="line"><span>. /etc/blacklist-by-country</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Create a temporary working directory</span></span>
<span class="line"><span>ipdeny_tmp_dir=$(mktemp -d -t blacklist-XXXXXXXXXX)</span></span>
<span class="line"><span>pushd $ipdeny_tmp_dir</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Download the latest network addresses by country file</span></span>
<span class="line"><span>curl -LO http://www.ipdeny.com/ipblocks/data/countries/all-zones.tar.gz</span></span>
<span class="line"><span>tar xf all-zones.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span># For updates, remove the ipset blacklist and recreate</span></span>
<span class="line"><span>if firewall-cmd -q --zone=drop --query-source=ipset:blacklist; then</span></span>
<span class="line"><span>    firewall-cmd -q --permanent --delete-ipset=blacklist</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Create the ipset blacklist which accepts both IP addresses and networks</span></span>
<span class="line"><span>firewall-cmd -q --permanent --new-ipset=blacklist --type=hash:net \\</span></span>
<span class="line"><span>    --option=family=inet --option=hashsize=4096 --option=maxelem=200000 \\</span></span>
<span class="line"><span>    --set-description=&quot;An ipset list of networks or ips to be dropped.&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Add the address ranges by country per ipdeny.com to the blacklist</span></span>
<span class="line"><span>for country in $countries; do</span></span>
<span class="line"><span>    firewall-cmd -q --permanent --ipset=blacklist \\</span></span>
<span class="line"><span>        --add-entries-from-file=./$country.zone &amp;&amp; \\</span></span>
<span class="line"><span>        echo &quot;Added $country to blacklist ipset.&quot;</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Block individual IPs if the configuration file exists and is not empty</span></span>
<span class="line"><span>if [ -s &quot;/etc/blacklist-by-ip&quot; ]; then</span></span>
<span class="line"><span>    echo &quot;Adding IPs blacklists.&quot;</span></span>
<span class="line"><span>    firewall-cmd -q --permanent --ipset=blacklist \\</span></span>
<span class="line"><span>        --add-entries-from-file=/etc/blacklist-by-ip &amp;&amp; \\</span></span>
<span class="line"><span>        echo &quot;Added IPs to blacklist ipset.&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Add the blacklist ipset to the drop zone if not already setup</span></span>
<span class="line"><span>if firewall-cmd -q --zone=drop --query-source=ipset:blacklist; then</span></span>
<span class="line"><span>    echo &quot;Blacklist already in firewalld drop zone.&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;Adding ipset blacklist to firewalld drop zone.&quot;</span></span>
<span class="line"><span>    firewall-cmd --permanent --zone=drop --add-source=ipset:blacklist</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>firewall-cmd -q --reload</span></span>
<span class="line"><span></span></span>
<span class="line"><span>popd</span></span>
<span class="line"><span>rm -rf $ipdeny_tmp_dir</span></span></code></pre></div><p>这个应该安装到 <code>/usr/local/sbin</code>，不要忘了让它可执行！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo chmod +x /usr/local/sbin/firewalld-blacklist</span></span></code></pre></div><p>然后创建一个配置文件 <code>/etc/blacklist-by-country</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Which countries should be blocked?</span></span>
<span class="line"><span># Use the two letter designation separated by a space.</span></span>
<span class="line"><span>countries=&quot;&quot;</span></span></code></pre></div><p>而另一个配置文件 <code>/etc/blacklist-by-ip</code>，每行只有一个 IP，没有任何额外的格式化。</p><p>在这个例子中，从 ipdeny 的区文件中随机选择了 10 个国家：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ls | shuf -n 10 | sed &quot;s/\\.zone//g&quot; | tr &#39;\\n&#39; &#39; &#39;</span></span>
<span class="line"><span>nl ee ie pk is sv na om gp bn</span></span></code></pre></div><p>现在只要在配置文件中加入至少一个国家，就可以运行了！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo firewalld-blacklist</span></span>
<span class="line"><span>  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current</span></span>
<span class="line"><span>                                 Dload  Upload   Total   Spent    Left  Speed</span></span>
<span class="line"><span>100   142  100   142    0     0   1014      0 --:--:-- --:--:-- --:--:--  1014</span></span>
<span class="line"><span>100  662k  100  662k    0     0   989k      0 --:--:-- --:--:-- --:--:--  989k</span></span>
<span class="line"><span>Added nl to blacklist ipset.</span></span>
<span class="line"><span>Added ee to blacklist ipset.</span></span>
<span class="line"><span>Added ie to blacklist ipset.</span></span>
<span class="line"><span>Added pk to blacklist ipset.</span></span>
<span class="line"><span>Added is to blacklist ipset.</span></span>
<span class="line"><span>Added sv to blacklist ipset.</span></span>
<span class="line"><span>Added na to blacklist ipset.</span></span>
<span class="line"><span>Added om to blacklist ipset.</span></span>
<span class="line"><span>Added gp to blacklist ipset.</span></span>
<span class="line"><span>Added bn to blacklist ipset.</span></span>
<span class="line"><span>Adding ipset blacklist to firewalld drop zone.</span></span>
<span class="line"><span>success</span></span></code></pre></div><p>要验证 FirewallD 黑名单是否成功，请检查 <code>drop</code> 区和 <code>blacklist</code> ipset。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo firewall-cmd --info-zone=drop</span></span>
<span class="line"><span>drop (active)</span></span>
<span class="line"><span>  target: DROP</span></span>
<span class="line"><span>  icmp-block-inversion: no</span></span>
<span class="line"><span>  interfaces:</span></span>
<span class="line"><span>  sources: ipset:blacklist</span></span>
<span class="line"><span>  services:</span></span>
<span class="line"><span>  ports:</span></span>
<span class="line"><span>  protocols:</span></span>
<span class="line"><span>  masquerade: no</span></span>
<span class="line"><span>  forward-ports:</span></span>
<span class="line"><span>  source-ports:</span></span>
<span class="line"><span>  icmp-blocks:</span></span>
<span class="line"><span>  rich rules:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo firewall-cmd --info-ipset=blacklist | less</span></span>
<span class="line"><span>blacklist</span></span>
<span class="line"><span>  type: hash:net</span></span>
<span class="line"><span>  options: family=inet hashsize=4096 maxelem=200000</span></span>
<span class="line"><span>  entries:</span></span></code></pre></div><p>第二条命令将输出所有的子网，这些子网是基于被封杀的国家而添加的，可能会相当长。</p><h3 id="那么现在我该怎么做" tabindex="-1">那么现在我该怎么做？ <a class="header-anchor" href="#那么现在我该怎么做" aria-label="Permalink to “那么现在我该怎么做？”">​</a></h3><p>虽然在开始的时候，监控的频率会比较高，但随着时间的推移，入侵尝试的次数应该会随着黑名单的增加而减少。那么目标应该是维护而不是主动监控。</p>`,62)),n("p",null,[s[4]||(s[4]=a("为此，我创建了一个 SystemD 服务文件和定时器，这样每月都会刷新由 ipdeny 维护的每个国家的子网。事实上，这里讨论的所有内容都可以从我的 ",-1)),e(i,{href:"https://pagure.io/firewalld-blacklist"},{default:l(()=>[...s[3]||(s[3]=[a("pagure.io",-1)])]),_:1}),s[5]||(s[5]=a(" 项目中下载。",-1))]),s[25]||(s[25]=p(`<p>是不是很高兴你看完了整篇文章？现在只要把服务文件和定时器下载到 <code>/etc/systemd/system/</code>，并启用定时器就行了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo systemctl daemon-reload</span></span>
<span class="line"><span>$ sudo systemctl enable --now firewalld-blacklist.timer</span></span></code></pre></div><hr>`,3)),n("p",null,[s[7]||(s[7]=a("via: ",-1)),e(i,{href:"https://fedoramagazine.org/protect-your-system-with-fail2ban-and-firewalld-blacklists/"},{default:l(()=>[...s[6]||(s[6]=[a("https://fedoramagazine.org/protect-your-system-with-fail2ban-and-firewalld-blacklists/",-1)])]),_:1})]),n("p",null,[s[12]||(s[12]=a("作者：",-1)),e(i,{href:"https://fedoramagazine.org/author/hobbes1069/"},{default:l(()=>[...s[8]||(s[8]=[a("hobbes1069",-1)])]),_:1}),s[13]||(s[13]=a(" 选题：",-1)),e(i,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[9]||(s[9]=[a("lujun9972",-1)])]),_:1}),s[14]||(s[14]=a(" 译者：",-1)),e(i,{href:"https://github.com/wxy"},{default:l(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1}),s[15]||(s[15]=a(" 校对：",-1)),e(i,{href:"https://github.com/wxy"},{default:l(()=>[...s[11]||(s[11]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[18]||(s[18]=a("本文由 ",-1)),e(i,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原创编译，",-1)),e(i,{href:"https://linux.cn/"},{default:l(()=>[...s[17]||(s[17]=[a("Linux中国",-1)])]),_:1}),s[20]||(s[20]=a(" 荣誉推出",-1))])])}const C=t(c,[["render",h]]);export{w as __pageData,C as default};
