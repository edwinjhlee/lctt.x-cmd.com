import{_ as p,a0 as l,w as i,s as d,ao as a,I as s,a1 as o,A as r,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const A=JSON.parse('{"title":"Debian/Ubuntu系统中安装和配置UFW－简单的防火墙 | LCTT x X-CMD","titleTemplate":false,"description":"Debian/Ubuntu系统中安装和配置UFW－简单的防火墙 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Debian/Ubuntu系统中安装和配置UFW－简单的防火墙 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Debian/Ubuntu系统中安装和配置UFW－简单的防火墙 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/How to Install and Configure UFW – An Un-complicated FireWall in Debian or Ubuntu","title":"Debian/Ubuntu系统中安装和配置UFW－简单的防火墙","tag":"201401","desc":""},"relativePath":"201401/How to Install and Configure UFW – An Un-complicated FireWall in Debian or Ubuntu.md","filePath":"[post].md"}'),u={name:"201401/How to Install and Configure UFW – An Un-complicated FireWall in Debian or Ubuntu.md"};function g(c,t,w,f,h,b){const e=l("Link");return i(),d("div",null,[t[12]||(t[12]=a('<h1 id="debian-ubuntu系统中安装和配置ufw-简单的防火墙" tabindex="-1">Debian/Ubuntu系统中安装和配置UFW－简单的防火墙 <a class="header-anchor" href="#debian-ubuntu系统中安装和配置ufw-简单的防火墙" aria-label="Permalink to “Debian/Ubuntu系统中安装和配置UFW－简单的防火墙”">​</a></h1><p>自从计算机互连后，各种服务迅速发展。用户使用的<strong>电子邮件、社交媒体、在线商城、即时聊天</strong>甚至<strong>网络会议</strong>等服务如雨后春笋般涌现。但从另一方面来说，这些连接服务也具有双刃剑，比如它们当中的<strong>病毒、恶意软件、特洛伊木马</strong>等会向计算机发送恶意消息。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2013/12/UFW-Firewall.jpeg" alt="Ubuntu下的 UFW 防火墙"></p><p><em>安装 UFW 防火墙</em></p><p>作为最大的计算机网络，互联网上可并不都是善意的用户。因此，为了确保我们的计算机或服务器安全，我们需要进行保护。</p><p>在你的计算机或服务器上一个必须有的组件就是<strong>防火墙</strong>。在<strong>维基百科</strong>中，其定义是：</p><blockquote><p>防火墙是计算机中一款应用软件或基于硬件的网络安全系统。它根据应用配置的规则，分析数据包，然后决定是否允许此数据包通过，来控制整个系统的网络数据进出访问权限。</p></blockquote><p><strong>iptables</strong> 是一款广泛使用于服务器的防火墙。它是一款应用程序，它会根据一系列规则来管理服务器上的进出数据流。一般来说，只有可信任的连接才允许进入服务器。但 <strong>iptables</strong> 是在控制台模式下运行，它非常的复杂。不熟悉 iptables 配置规则和命令的用户可以读读下面的文章，它描述了如何使用iptables防火墙。</p>',8)),s("ul",null,[s("li",null,[o(e,{href:"http://www.tecmint.com/basic-guide-on-iptables-linux-firewall-tips-commands/"},{default:r(()=>[...t[0]||(t[0]=[n("iptables 基础 (Linux 防火墙) 指南",-1)])]),_:1})])]),t[13]||(t[13]=a(`<h2 id="debian-ubuntu-系统中安装-ufw-防火墙" tabindex="-1">Debian/Ubuntu 系统中安装 UFW 防火墙 <a class="header-anchor" href="#debian-ubuntu-系统中安装-ufw-防火墙" aria-label="Permalink to “Debian/Ubuntu 系统中安装 UFW 防火墙”">​</a></h2><p>为了降低 <strong>iptables</strong> 设置的复杂度，有许多对应的前端应用。如果你运行的是 <strong>Ubuntu</strong> linux 系统的话， <strong>UFW</strong> 就是一款默认的防火墙工具。我们开始来探讨 <strong>UFW</strong> 防火墙吧。</p><h3 id="什么是-ufw" tabindex="-1">什么是 UFW <a class="header-anchor" href="#什么是-ufw" aria-label="Permalink to “什么是 UFW”">​</a></h3><p><strong>UFW (简单的防火墙)</strong> 是广泛使用的 <strong>iptables 防火墙</strong> 的前端应用，这是非常适合于基于主机的防火墙。UFW 即提供了一套管理<strong>网络过滤器</strong>的框架，又提供了控制防火墙的命令行界面接口。它给那些不熟悉防火墙概念的 Linux 新用户提供了友好、易使用的用户界面。</p><p>同时，另一方面，它也提供了命令行界面，为系统管理员准备了一套复杂的命令，用来设置复杂的防火墙规则。<strong>UFW</strong> 对像 <strong>Debian、Ubuntu</strong> 和 <strong>Linux Mint</strong> 这些发布版本来说也是上上之选。</p><h2 id="ufw-基本用法" tabindex="-1">UFW 基本用法 <a class="header-anchor" href="#ufw-基本用法" aria-label="Permalink to “UFW 基本用法”">​</a></h2><p>首先，用如下命令来检查下系统上是否已经安装了 <strong>UFW</strong> 。</p><pre><code>$ sudo dpkg --get-selections | grep ufw
</code></pre><p>如还没有安装，可以使用 <strong>apt</strong> 命令来安装，如下所示：</p><pre><code>$ sudo apt-get install ufw
</code></pre><p>在使用前，你应该检查下 <strong>UFW</strong> 是否已经在运行。用下面的命令来检查。</p><pre><code>$ sudo ufw status
</code></pre><p>如果你发现状态是： <strong>inactive</strong> , 意思是没有被激活或不起作用。</p><h3 id="启用-禁用-ufw" tabindex="-1">启用/禁用 UFW <a class="header-anchor" href="#启用-禁用-ufw" aria-label="Permalink to “启用/禁用 UFW”">​</a></h3><p>要启用它，你只需在终端下键入如下命令：</p><pre><code>$ sudo ufw enable
</code></pre><p>在系统启动时启用和激活防火墙</p><p>要禁用，只需输入：</p><pre><code>$ sudo ufw disable
</code></pre><h3 id="列出当前ufw规则" tabindex="-1">列出当前UFW规则 <a class="header-anchor" href="#列出当前ufw规则" aria-label="Permalink to “列出当前UFW规则”">​</a></h3><p>在防火墙被激活后，你可以向里面添加你自己的规则。如果你想看看默认的规则，可以输入。</p><pre><code>$ sudo ufw status verbose
</code></pre><p>输出样例：</p><pre><code>Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing)
New profiles: skip
$
</code></pre><h3 id="添加ufw规则" tabindex="-1">添加UFW规则 <a class="header-anchor" href="#添加ufw规则" aria-label="Permalink to “添加UFW规则”">​</a></h3><p>如你所见，默认是不允许所有外部访问连接的。如果你想远程连接你的机器，就得开放相应的端口。例如，你想用 ssh 来连接，下面是添加的命令。</p><h3 id="允许访问" tabindex="-1">允许访问 <a class="header-anchor" href="#允许访问" aria-label="Permalink to “允许访问”">​</a></h3><pre><code>$ sudo ufw allow ssh

[sudo] password for pungki :
Rule added
Rule added (v6)
$
</code></pre><p>再一次检查状态，会看到如下的一些输出。</p><pre><code>$ sudo ufw status

To 		Action 			From
-- 		----------- 		------
22 		ALLOW 			Anywhere
22 		ALLOW 			Anywhere (v6)
</code></pre><p>如果你有很多条规则，想快速的在每条规则上加个序号数字的话，请使用 numbered 参数。</p><pre><code>$ sudo ufw status numbered

To 		Action 			From
------ 		----------- 		------
[1] 22 		ALLOW 			Anywhere
[2] 22 		ALLOW 			Anywhere (v6)
</code></pre><p>第一条规则的意思是<strong>所有</strong>通过<strong>22端口</strong>访问机器的 <strong>tcp</strong> 或 <strong>udp</strong> 数据包都是允许的。如果你希望仅允许 <strong>tcp</strong> 数据包访问应该怎么办？可以在<strong>服务端口</strong>后加个 <strong>tcp</strong> 参数。下面的示例及相应的输出。</p><pre><code>$ sudo ufw allow ssh/tcp

To 		Action 			From
------ 		----------- 		------
22/tcp 		ALLOW 			Anywhere
22/tcp 		ALLOW 			Anywhere (v6)
</code></pre><h3 id="拒绝访问" tabindex="-1">拒绝访问 <a class="header-anchor" href="#拒绝访问" aria-label="Permalink to “拒绝访问”">​</a></h3><p>添加拒绝规则也是同样的招数。我们假设你想拒绝 ftp 访问, 你只需输入</p><pre><code>$ sudo ufw deny ftp

To 		Action 			From
------ 		----------- 		------
21/tcp 		DENY 			Anywhere
21/tcp 		DENY 			Anywhere (v6)
</code></pre><h3 id="添加特定端口" tabindex="-1">添加特定端口 <a class="header-anchor" href="#添加特定端口" aria-label="Permalink to “添加特定端口”">​</a></h3><p>有时候，我们会自定义一个端口而不是使用标准提供的。让我们试着把机器上 <strong>ssh</strong> 的 <strong>22</strong> 端口换成 <strong>2290</strong> 端口，然后允许从 <strong>2290</strong> 端口访问，我们像这样添加：</p><pre><code>$ sudo ufw allow 2290/ssh (译者注：些处演示例子有问题)

To 		Action 			From
-- 		----------- 		------
2290 		ALLOW 			Anywhere
2290 		ALLOW 			Anywhere (v6)
</code></pre><p>你也可以把<strong>端口范围</strong>添加进规则。如果我们想打开从 <strong>2290到2300</strong> 的端口以供 <strong>tcp</strong> 协议使用，命令如下示：</p><pre><code>$ sudo ufw allow 2290:2300/tcp

To 			Action 			From
------ 			----------- 		------
2290:2300/tcp 		ALLOW 			Anywhere
2290:2300/tcp 		ALLOW			Anywhere (v6)
</code></pre><p>同样你想使用 <strong>udp</strong> 的话，如下操作。</p><pre><code>$ sudo ufw allow 2290:2300/udp

To 			Action 			From
------ 			----------- 		------
2290:2300/udp 		ALLOW 			Anywhere
2290:2300/udp 		ALLOW			Anywhere (v6)
</code></pre><p>请注意你得明确的指定是 ‘<strong>tcp</strong>’ 或 ‘<strong>udp</strong>’，否则会出现跟下面类似的错误信息。</p><pre><code>ERROR: Must specify ‘tcp’ or ‘udp’ with multiple ports
</code></pre><h3 id="添加特定-ip" tabindex="-1">添加特定 IP <a class="header-anchor" href="#添加特定-ip" aria-label="Permalink to “添加特定 IP”">​</a></h3><p>前面我们添加的规则都是基于 <strong>服务程序</strong> 或 <strong>端口</strong> 的，UFW 也可以添加基于 <strong>IP 地址</strong>的规则。下面是命令样例。</p><pre><code>$ sudo ufw allow from 192.168.0.104
</code></pre><p>你也可以使用子网掩码来扩宽范围。</p><pre><code>$ sudo ufw allow form 192.168.0.0/24

To 		Action 			From
-- 		----------- 		------
Anywhere	ALLOW 			192.168.0.104
Anywhere	ALLOW 			192.168.0.0/24
</code></pre><p>如你所见， from 参数仅仅限制连接的来源，而目的（用 <strong>To</strong> 列表示）是<strong>所有地方</strong>。让我们看看允许访问 <strong>22端口(ssh)</strong>的例子。</p><pre><code>$ sudo ufw allow to any port 22
</code></pre><p>上面的命令会允许从任何地方以及任何协议都可以访问<strong>22端口</strong>。</p><h3 id="组合参数" tabindex="-1">组合参数 <a class="header-anchor" href="#组合参数" aria-label="Permalink to “组合参数”">​</a></h3><p>对于更具体的规则，你也可以把 <strong>IP 地址</strong>、<strong>协议</strong>和<strong>端口</strong>这些组合在一起用。我们想创建一条规则，限制仅仅来自于 192.168.0.104 的 IP ，而且只能使用 <strong>tcp 协议</strong>和通过 <strong>22端口</strong> 来访问本地资源。我们可以用如下所示的命令。</p><pre><code>$ sudo ufw allow from 192.168.0.104 proto tcp to any port 22
</code></pre><p>创建拒绝规则的命令和允许的规则类似，仅需要把 <strong>allow</strong> 参数换成 <strong>deny</strong> 参数就可以。</p><h3 id="删除规则" tabindex="-1">删除规则 <a class="header-anchor" href="#删除规则" aria-label="Permalink to “删除规则”">​</a></h3><p>某些时候需要删除现有的规则。再一次使用 <strong>UFW</strong> 删除规则是很简单的。在上面的示例中，已经创建了如下的规则，现在你想删除它们。</p><pre><code>To 		Action 			From
-- 		----------- 		------
22/tcp		ALLOW 			192.168.0.104
21/tcp		ALLOW 			Anywhere
21/tcp 		ALLOW 			Anywhere (v6)
</code></pre><p>删除规则有两个方法。</p><p><strong>方法1</strong></p><p>下面的命令将会 <strong>删除</strong> 与 <strong>ftp</strong> 相关的规则。所以像 <strong>21/tcp</strong> 这条 <strong>ftp</strong> 默认访问端口的规则将会被删除掉。</p><pre><code>$ sudo ufw delete allow ftp
</code></pre><p><strong>方法2</strong></p><p>但当你使用如下命令来删除上面例子中的规则时，</p><pre><code>$ sudo ufw delete allow ssh

或者 

$ sudo ufw delete allow 22/tcp
</code></pre><p>会出现如下所示的一些错误</p><pre><code>Could not delete non-existent rule
Could not delete non-existent rule (v6)
</code></pre><p>我们还有一招。上面已经提到过，可以序列数字来代替你想删除的规则。让我们试试。</p><pre><code>$ sudo ufw status numbered

To 		Action 			From
-- 		----------- 		------
[1] 22/tcp		ALLOW 			192.168.0.104
[2] 21/tcp		ALLOW 			Anywhere
[3] 21/tcp 		ALLOW 			Anywhere (v6)
</code></pre><p>然后我们删除正在使用的第一条规则。按 “ <strong>y</strong> ” 就会永久的删除这条规则。</p><pre><code>$ sudo ufw delete 1

Deleting :
Allow from 192.168.0.104 to any port 22 proto tcp
Proceed with operation (y|n)? y
</code></pre><p>从这些用法中你就可以发现它们的不同。 <strong>方法2</strong> 在删除前需要 <strong>用户确认</strong> ，而 <strong>方法1</strong> 不需要。</p><h3 id="重置所有规则" tabindex="-1">重置所有规则### <a class="header-anchor" href="#重置所有规则" aria-label="Permalink to “重置所有规则###”">​</a></h3><p>某些情况下，你也许需要 <strong>删除/重置</strong> 所有的规则。可以输入。</p><pre><code>$ sudo ufw reset

Resetting all rules to installed defaults. Proceed with operation (y|n)? y
</code></pre><p>如果你输入“ <strong>y</strong> ”， <strong>UFW</strong> 在重置你的 ufw 前会备份所有已经存在规则，然后重置。重置操作也会使你的防火墙处于不可用状态，如果你想使用得再一次启用它。</p><h3 id="高级功能" tabindex="-1">高级功能 <a class="header-anchor" href="#高级功能" aria-label="Permalink to “高级功能”">​</a></h3><p>正如我上面所说，UFW防火墙能够做到iptables可以做到的一切。这是通过一些规则文件来完成的，他们只不过是 <strong>iptables-restore</strong> 所对应的文本文件而已。是否可以通过 ufw 命令微调 UFW 的与/或逻辑来增加 iptables 命令其实就是编辑几个文本文件的事。</p><ul><li>/etc/default/ufw: 默认策略的主配置文件，支持 IPv6 和 内核模块。</li><li>/etc/ufw/before[6].rules: 通过 ufw 命令添加进规则之前里面存在的规则会首先计算。</li><li>/etc/ufw/after[6].rules: 通过 ufw 命令添加进规则之后里面存在的规则会进行计算。</li><li>/etc/ufw/sysctl.conf: 内核网络可调参数。</li><li>/etc/ufw/ufw.conf: 设置系统启动时 UFW 是否可用，和设置日志级别。</li></ul><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h2><p><strong>UFW</strong> 作为 iptables 的前端应用，给用户提供了简单的接口界面。使用着不需要去记非常复杂的 iptables 语法。<strong>UFW</strong> 也使用了‘ <strong>简单英语</strong> ’作为它的参数。</p><p>像 <strong>Allow、deny、reset</strong> 就是他们当中的一部分。我相信有很多很多 iptables 前端应用，但 UFW 绝对是那些想要快速、简单的就建立自己的防火墙，而且还很安全的用户的最佳替代品之一。请输入 <strong>man ufw</strong> 查看 <strong>ufw 用户手册</strong>，来了解更多详情。</p><hr>`,86)),s("p",null,[t[2]||(t[2]=n("via: ",-1)),o(e,{href:"http://www.tecmint.com/how-to-install-and-configure-ufw-firewall/"},{default:r(()=>[...t[1]||(t[1]=[n("http://www.tecmint.com/how-to-install-and-configure-ufw-firewall/",-1)])]),_:1})]),s("p",null,[t[5]||(t[5]=n("译者：",-1)),o(e,{href:"https://github.com/runningwater"},{default:r(()=>[...t[3]||(t[3]=[n("runningwater",-1)])]),_:1}),t[6]||(t[6]=n(" 校对：",-1)),o(e,{href:"https://github.com/carolinewuyan"},{default:r(()=>[...t[4]||(t[4]=[n("Caroline",-1)])]),_:1})]),s("p",null,[t[9]||(t[9]=n("本文由 ",-1)),o(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[7]||(t[7]=[n("LCTT",-1)])]),_:1}),t[10]||(t[10]=n(" 原创翻译，",-1)),o(e,{href:"http://linux.cn/"},{default:r(()=>[...t[8]||(t[8]=[n("Linux中国",-1)])]),_:1}),t[11]||(t[11]=n(" 荣誉推出",-1))])])}const U=p(u,[["render",g]]);export{A as __pageData,U as default};
