import{_ as l,a0 as e,w as t,s as c,ao as p,I as a,x as n,a1 as o,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"使用 badIPs.com 保护你的服务器，并通过 Fail2ban 报告恶意 IP | LCTT x X-CMD","titleTemplate":false,"description":"使用 badIPs.com 保护你的服务器，并通过 Fail2ban 报告恶意 IP | LCTT (201704) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 badIPs.com 保护你的服务器，并通过 Fail2ban 报告恶意 IP | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 badIPs.com 保护你的服务器，并通过 Fail2ban 报告恶意 IP | LCTT (201704) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201704/20170209 How to protect your server with badIPs.com and report IPs with Fail2ban on Debian","title":"使用 badIPs.com 保护你的服务器，并通过 Fail2ban 报告恶意 IP","tag":"201704","desc":""},"relativePath":"201704/20170209 How to protect your server with badIPs.com and report IPs with Fail2ban on Debian.md","filePath":"[post].md"}'),d={name:"201704/20170209 How to protect your server with badIPs.com and report IPs with Fail2ban on Debian.md"};function b(h,s,u,g,w,f){const i=e("Link");return t(),c("div",null,[s[8]||(s[8]=p('<h1 id="使用-badips-com-保护你的服务器-并通过-fail2ban-报告恶意-ip" tabindex="-1">使用 badIPs.com 保护你的服务器，并通过 Fail2ban 报告恶意 IP <a class="header-anchor" href="#使用-badips-com-保护你的服务器-并通过-fail2ban-报告恶意-ip" aria-label="Permalink to “使用 badIPs.com 保护你的服务器，并通过 Fail2ban 报告恶意 IP”">​</a></h1><p>这篇指南向你介绍使用 badips 滥用追踪器（abuse tracker） 和 Fail2ban 保护你的服务器或计算机的步骤。我已经在 Debian 8 Jessie 和 Debian 7 Wheezy 系统上进行了测试。</p><p><strong>什么是 badIPs？</strong></p><p>BadIps 是通过 [fail2ban][8] 报告为不良 IP 的列表。</p><p>这个指南包括两个部分，第一部分介绍列表的使用，第二部分介绍数据注入。</p><h3 id="使用-badips-列表" tabindex="-1">使用 badIPs 列表 <a class="header-anchor" href="#使用-badips-列表" aria-label="Permalink to “使用 badIPs 列表”">​</a></h3><h4 id="定义安全等级和类别" tabindex="-1">定义安全等级和类别 <a class="header-anchor" href="#定义安全等级和类别" aria-label="Permalink to “定义安全等级和类别”">​</a></h4><p>你可以通过使用 REST API 获取 IP 地址列表。</p>',8)),a("ul",null,[a("li",null,[s[1]||(s[1]=n("当你使用 GET 请求获取 URL：[",-1)),o(i,{href:"https://www.badips.com/get/categories"},{default:r(()=>[...s[0]||(s[0]=[n("https://www.badips.com/get/categories",-1)])]),_:1}),s[2]||(s[2]=n("][9] 后，你就可以看到服务中现有的所有不同类别。",-1))]),s[3]||(s[3]=a("li",null,[n("第二步，决定适合你的等级。 参考 badips 应该有所帮助（我个人使用 "),a("code",null,"scope = 3"),n("）：")],-1)),s[4]||(s[4]=a("li",null,"如果你想要编译一个统计信息模块或者将数据用于实验目的，那么你应该用等级 0 开始。",-1)),s[5]||(s[5]=a("li",null,"如果你想用防火墙保护你的服务器或者网站，使用等级 2。可能也要和你的结果相结合，尽管它们可能没有超过 0 或 1 的情况。",-1)),s[6]||(s[6]=a("li",null,"如果你想保护一个网络商店、或高流量、赚钱的电子商务服务器，我推荐你使用值 3 或 4。当然还是要和你的结果相结合。",-1)),s[7]||(s[7]=a("li",null,"如果你是偏执狂，那就使用 5。",-1))]),s[9]||(s[9]=p(`<p>现在你已经有了两个变量，通过把它们两者连接起来获取你的链接。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http://www.badips.com/get/list/{{SERVICE}}/{{LEVEL}}</span></span></code></pre></div><p>注意：像我一样，你可以获取所有服务。在这种情况下把服务的名称改为 <code>any</code>。</p><p>最终的 URL 就是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>https://www.badips.com/get/list/any/3</span></span></code></pre></div><h3 id="创建脚本" tabindex="-1">创建脚本 <a class="header-anchor" href="#创建脚本" aria-label="Permalink to “创建脚本”">​</a></h3><p>所有都完成了之后，我们就会创建一个简单的脚本。</p><p>1、 把你的列表放到一个临时文件。</p><p>2、 在 iptables 中创建一个链（chain）（只需要创建一次）。（LCTT 译注：iptables 可能包括多个表（tables），表可能包括多个链（chains），链可能包括多个规则（rules））</p><p>3、 把所有链接到该链的数据（旧条目）刷掉。</p><p>4、 把每个 IP 链接到这个新的链。</p><p>5、 完成后，阻塞所有链接到该链的 INPUT / OUTPUT /FORWARD 请求。</p><p>6、 删除我们的临时文件。</p><p>为此，我们创建脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cd /home/&lt;user&gt;/</span></span>
<span class="line"><span>vi myBlacklist.sh</span></span></code></pre></div><p>把以下内容输入到文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>### based on this version http://www.timokorthals.de/?p=334</span></span>
<span class="line"><span>### adapted by Stéphane T.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_ipt=/sbin/iptables    ### iptables 路径（应该是这个）</span></span>
<span class="line"><span>_input=badips.db       ### 数据库的名称（会用这个名称下载）</span></span>
<span class="line"><span>_pub_if=eth0           ### 连接到互联网的设备（执行 $ifconfig 获取）</span></span>
<span class="line"><span>_droplist=droplist     ### iptables 中链的名称（如果你已经有这么一个名称的链，你就换另外一个）</span></span>
<span class="line"><span>_level=3               ### Blog（LCTT 译注：Bad log）等级：不怎么坏（0）、确认坏（3）、相当坏（5）（从 www.badips.com 获取详情）</span></span>
<span class="line"><span>_service=any           ### 记录日志的服务（从 www.badips.com 获取详情）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 获取不良 IPs</span></span>
<span class="line"><span>wget -qO- http://www.badips.com/get/list/\${_service}/$_level &gt; $_input || { echo &quot;$0: Unable to download ip list.&quot;; exit 1; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 设置我们的黑名单 ###</span></span>
<span class="line"><span>### 首先清除该链</span></span>
<span class="line"><span>$_ipt --flush $_droplist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 创建新的链</span></span>
<span class="line"><span>### 首次运行时取消下面一行的注释</span></span>
<span class="line"><span># $_ipt -N $_droplist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 过滤掉注释和空行</span></span>
<span class="line"><span>### 保存每个 ip 到 $ip</span></span>
<span class="line"><span>for ip in \`cat $_input\`</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>	### 添加到 $_droplist</span></span>
<span class="line"><span>	$_ipt -A $_droplist -i \${_pub_if} -s $ip -j LOG --log-prefix &quot;Drop Bad IP List &quot;</span></span>
<span class="line"><span>	$_ipt -A $_droplist -i \${_pub_if} -s $ip -j DROP</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 最后，插入或者追加到我们的黑名单列表</span></span>
<span class="line"><span>$_ipt -I INPUT -j $_droplist</span></span>
<span class="line"><span>$_ipt -I OUTPUT -j $_droplist</span></span>
<span class="line"><span>$_ipt -I FORWARD -j $_droplist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 删除你的临时文件</span></span>
<span class="line"><span>rm $_input</span></span>
<span class="line"><span>exit 0</span></span></code></pre></div><p>完成这些后，你应该创建一个定时任务定期更新我们的黑名单。</p><p>为此，我使用 crontab 在每天晚上 11:30（在我的延迟备份之前） 运行脚本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>crontab -e</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>23 30 * * * /home/&lt;user&gt;/myBlacklist.sh #Block BAD IPS</span></span></code></pre></div><p>别忘了更改脚本的权限：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chmod + x myBlacklist.sh</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在终于完成了，你的服务器/计算机应该更安全了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你也可以像下面这样手动运行脚本：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>cd /home/&lt;user&gt;/</span></span>
<span class="line"><span>./myBlacklist.sh</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>它可能要花费一些时间，因此期间别中断脚本。事实上，耗时取决于该脚本的最后一行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 使用 Fail2ban 向 badIPs 报告 IP 地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在本篇指南的第二部分，我会向你展示如何通过使用 Fail2ban 向 badips.com 网站报告不良 IP 地址。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### Fail2ban &gt;= 0.8.12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通过 Fail2ban 完成报告。取决于你 Fail2ban 的版本，你要使用本章的第一或第二节。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果你 fail2ban 的版本是 0.8.12 或更新版本。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>fail2ban-server --version</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在每个你要报告的类别中，添加一个 action。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>[ssh]</span></span>
<span class="line"><span>enabled = true</span></span>
<span class="line"><span>action = iptables-multiport</span></span>
<span class="line"><span>         badips[category=ssh]</span></span>
<span class="line"><span>port = ssh</span></span>
<span class="line"><span>filter = sshd</span></span>
<span class="line"><span>logpath = /var/log/auth.log</span></span>
<span class="line"><span>maxretry= 6</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正如你看到的，类别是 SSH，从 ([https://www.badips.com/get/categories][11]) 查找正确类别。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### Fail2ban &lt; 0.8.12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果版本是 0.8.12 之前，你需要新建一个 action。你可以从 [https://www.badips.com/asset/fail2ban/badips.conf][12] 下载。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>wget https://www.badips.com/asset/fail2ban/badips.conf -O /etc/fail2ban/action.d/badips.conf</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在上面的 badips.conf 中，你可以像前面那样激活每个类别，也可以全局启用它：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>cd /etc/fail2ban/</span></span>
<span class="line"><span>vi jail.conf</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>[DEFAULT]</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>banaction = iptables-multiport</span></span>
<span class="line"><span>            badips</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在重启 fail2ban - 从现在开始它就应该开始报告了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	service fail2ban restart</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 你的 IP 报告统计信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后一步 - 没那么有用。你可以创建一个密钥。  但如果你想看你的数据，这一步就很有帮助。  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>复制/粘贴下面的命令，你的控制台中就会出现一个 JSON 响应。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>wget https://www.badips.com/get/key -qO -</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;err&quot;:&quot;&quot;,</span></span>
<span class="line"><span>  &quot;suc&quot;:&quot;new key 5f72253b673eb49fc64dd34439531b5cca05327f has been set.&quot;,</span></span>
<span class="line"><span>  &quot;key&quot;:&quot;5f72253b673eb49fc64dd34439531b5cca05327f&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>到 [badips][13] 网站，输入你的 “key” 并点击 “statistics”。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在你就可以看到不同类别的统计信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>via: https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>作者：[Stephane T][a]</span></span>
<span class="line"><span>译者：[ictlyh](https://github.com/ictlyh)</span></span>
<span class="line"><span>校对：[wxy](https://github.com/wxy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>本文由 [LCTT](https://github.com/LCTT/TranslateProject) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[a]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/</span></span>
<span class="line"><span>[1]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#define-your-security-level-and-category</span></span>
<span class="line"><span>[2]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#failban-gt-</span></span>
<span class="line"><span>[3]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#failban-ltnbsp</span></span>
<span class="line"><span>[4]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#use-the-badips-list</span></span>
<span class="line"><span>[5]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#lets-create-the-script</span></span>
<span class="line"><span>[6]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#report-ip-addresses-to-badips-with-failban</span></span>
<span class="line"><span>[7]:https://www.howtoforge.com/tutorial/protect-your-server-computer-with-badips-and-fail2ban/#statistics-of-your-ip-reporting</span></span>
<span class="line"><span>[8]:http://www.fail2ban.org/</span></span>
<span class="line"><span>[9]:https://www.badips.com/get/categories</span></span>
<span class="line"><span>[10]:http://www.timokorthals.de/?p=334</span></span>
<span class="line"><span>[11]:https://www.badips.com/get/categories</span></span>
<span class="line"><span>[12]:https://www.badips.com/asset/fail2ban/badips.conf</span></span>
<span class="line"><span>[13]:https://www.badips.com/</span></span></code></pre></div>`,23))])}const y=l(d,[["render",b]]);export{_ as __pageData,y as default};
