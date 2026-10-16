import{_ as i,a0 as t,w as o,s as r,I as a,x as n,a1 as e,A as l,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse('{"title":"Linux 防火墙 ufw 简介 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 防火墙 ufw 简介 | LCTT (202004) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 防火墙 ufw 简介 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 防火墙 ufw 简介 | LCTT (202004) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202004/20200325 Linux firewall basics with ufw","title":"Linux 防火墙 ufw 简介","tag":"202004","desc":""},"relativePath":"202004/20200325 Linux firewall basics with ufw.md","filePath":"[post].md"}'),d={name:"202004/20200325 Linux firewall basics with ufw.md"};function c(h,s,g,f,k,w){const p=t("Link");return o(),r("div",null,[s[23]||(s[23]=a("h1",{id:"linux-防火墙-ufw-简介",tabindex:"-1"},[n("Linux 防火墙 ufw 简介 "),a("a",{class:"header-anchor",href:"#linux-防火墙-ufw-简介","aria-label":"Permalink to “Linux 防火墙 ufw 简介”"},"​")],-1)),s[24]||(s[24]=a("blockquote",null,[a("p",null,"我们来研究下 Linux 上的 ufw（简单防火墙），为你更改防火墙提供一些见解和命令。")],-1)),s[25]||(s[25]=a("p",null,[a("img",{src:"https://images.idgesg.net/images/article/2019/06/cso_network_security_encryption_automation_by_vertigo3d_gettyimages-597931354_2400x1600-100798880-large.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=a("code",null,"ufw",-1)),s[2]||(s[2]=n("（",-1)),s[3]||(s[3]=a("ruby",null,[n("简单防火墙"),a("rt",null,"Uncomplicated FireWall")],-1)),s[4]||(s[4]=n("）真正地简化了 ",-1)),e(p,{href:"https://www.networkworld.com/article/2716098/working-with-iptables.html"},{default:l(()=>[...s[0]||(s[0]=[n("iptables",-1)])]),_:1}),s[5]||(s[5]=n("，它从出现的这几年，已经成为 Ubuntu 和 Debian 等系统上的默认防火墙。而且 ",-1)),s[6]||(s[6]=a("code",null,"ufw",-1)),s[7]||(s[7]=n(" 出乎意料的简单，这对新管理员来说是一个福音，否则他们可能需要投入大量时间来学习防火墙管理。",-1))]),s[26]||(s[26]=u(`<p><code>ufw</code> 也有 GUI 客户端（例如 <code>gufw</code>），但是 <code>ufw</code> 命令通常在命令行上执行的。本文介绍了一些使用 <code>ufw</code> 的命令，并研究了它的工作方式。</p><p>首先，快速查看 <code>ufw</code> 配置的方法是查看其配置文件 —— <code>/etc/default/ufw</code>。使用下面的命令可以查看其配置，使用 <code>grep</code> 来抑制了空行和注释（以 # 开头的行）的显示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep -v &#39;^#\\|^$&#39; /etc/default/ufw</span></span>
<span class="line"><span>IPV6=yes</span></span>
<span class="line"><span>DEFAULT_INPUT_POLICY=&quot;DROP&quot;</span></span>
<span class="line"><span>DEFAULT_OUTPUT_POLICY=&quot;ACCEPT&quot;</span></span>
<span class="line"><span>DEFAULT_FORWARD_POLICY=&quot;DROP&quot;</span></span>
<span class="line"><span>DEFAULT_APPLICATION_POLICY=&quot;SKIP&quot;</span></span>
<span class="line"><span>MANAGE_BUILTINS=no</span></span>
<span class="line"><span>IPT_SYSCTL=/etc/ufw/sysctl.conf</span></span>
<span class="line"><span>IPT_MODULES=&quot;nf_conntrack_ftp nf_nat_ftp nf_conntrack_netbios_ns&quot;</span></span></code></pre></div><p>正如你所看到的，默认策略是丢弃输入但允许输出。允许你接受特定的连接的其它规则是需要单独配置的。</p><p><code>ufw</code> 命令的基本语法如下所示，但是这个概要并不意味着你只需要输入 <code>ufw</code> 就行，而是一个告诉你需要哪些参数的快速提示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ufw [--dry-run] [options] [rule syntax]</span></span></code></pre></div><p><code>--dry-run</code> 选项意味着 <code>ufw</code> 不会运行你指定的命令，但会显示给你如果执行后的结果。但是它会显示假如更改后的整个规则集，因此你要做有好多行输出的准备。</p><p>要检查 <code>ufw</code> 的状态，请运行以下命令。注意，即使是这个命令也需要使用 <code>sudo</code> 或 root 账户。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw status</span></span>
<span class="line"><span>Status: active</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To                         Action      From</span></span>
<span class="line"><span>--                         ------      ----</span></span>
<span class="line"><span>22                         ALLOW       192.168.0.0/24</span></span>
<span class="line"><span>9090                       ALLOW       Anywhere</span></span>
<span class="line"><span>9090 (v6)                  ALLOW       Anywhere (v6)</span></span></code></pre></div><p>否则，你会看到以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ufw status</span></span>
<span class="line"><span>ERROR: You need to be root to run this script</span></span></code></pre></div><p>加上 <code>verbose</code> 选项会提供一些其它细节：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw status verbose</span></span>
<span class="line"><span>Status: active</span></span>
<span class="line"><span>Logging: on (low)</span></span>
<span class="line"><span>Default: deny (incoming), allow (outgoing), disabled (routed)</span></span>
<span class="line"><span>New profiles: skip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To                         Action      From</span></span>
<span class="line"><span>--                         ------      ----</span></span>
<span class="line"><span>22                         ALLOW IN    192.168.0.0/24</span></span>
<span class="line"><span>9090                       ALLOW IN    Anywhere</span></span>
<span class="line"><span>9090 (v6)                  ALLOW IN    Anywhere (v6)</span></span></code></pre></div><p>你可以使用以下命令轻松地通过端口号允许和拒绝连接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw allow 80         &lt;== 允许 http 访问</span></span>
<span class="line"><span>$ sudo ufw deny 25              &lt;== 拒绝 smtp 访问</span></span></code></pre></div><p>你可以查看 <code>/etc/services</code> 文件来找到端口号和服务名称之间的联系。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep 80/ /etc/services</span></span>
<span class="line"><span>http            80/tcp          www             # WorldWideWeb HTTP</span></span>
<span class="line"><span>socks           1080/tcp                        # socks proxy server</span></span>
<span class="line"><span>socks           1080/udp</span></span>
<span class="line"><span>http-alt        8080/tcp        webcache        # WWW caching service</span></span>
<span class="line"><span>http-alt        8080/udp</span></span>
<span class="line"><span>amanda          10080/tcp                       # amanda backup services</span></span>
<span class="line"><span>amanda          10080/udp</span></span>
<span class="line"><span>canna           5680/tcp                        # cannaserver</span></span></code></pre></div><p>或者，你可以命令中直接使用服务的名称。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw allow http</span></span>
<span class="line"><span>Rule added</span></span>
<span class="line"><span>Rule added (v6)</span></span>
<span class="line"><span>$ sudo ufw allow https</span></span>
<span class="line"><span>Rule added</span></span>
<span class="line"><span>Rule added (v6)</span></span></code></pre></div><p>进行更改后，你应该再次检查状态来查看是否生效：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw status</span></span>
<span class="line"><span>Status: active</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To                         Action      From</span></span>
<span class="line"><span>--                         ------      ----</span></span>
<span class="line"><span>22                         ALLOW       192.168.0.0/24</span></span>
<span class="line"><span>9090                       ALLOW       Anywhere</span></span>
<span class="line"><span>80/tcp                     ALLOW       Anywhere         &lt;==</span></span>
<span class="line"><span>443/tcp                    ALLOW       Anywhere         &lt;==</span></span>
<span class="line"><span>9090 (v6)                  ALLOW       Anywhere (v6)</span></span>
<span class="line"><span>80/tcp (v6)                ALLOW       Anywhere (v6)    &lt;==</span></span>
<span class="line"><span>443/tcp (v6)               ALLOW       Anywhere (v6)    &lt;==</span></span></code></pre></div><p><code>ufw</code> 遵循的规则存储在 <code>/etc/ufw</code> 目录中。注意，你需要 root 用户访问权限才能查看这些文件，每个文件都包含大量规则。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -ltr /etc/ufw</span></span>
<span class="line"><span>total 48</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 1391 Aug 15  2017 sysctl.conf</span></span>
<span class="line"><span>-rw-r----- 1 root root 1004 Aug 17  2017 after.rules</span></span>
<span class="line"><span>-rw-r----- 1 root root  915 Aug 17  2017 after6.rules</span></span>
<span class="line"><span>-rw-r----- 1 root root 1130 Jan  5  2018 before.init</span></span>
<span class="line"><span>-rw-r----- 1 root root 1126 Jan  5  2018 after.init</span></span>
<span class="line"><span>-rw-r----- 1 root root 2537 Mar 25  2019 before.rules</span></span>
<span class="line"><span>-rw-r----- 1 root root 6700 Mar 25  2019 before6.rules</span></span>
<span class="line"><span>drwxr-xr-x 3 root root 4096 Nov 12 08:21 applications.d</span></span>
<span class="line"><span>-rw-r--r-- 1 root root  313 Mar 18 17:30 ufw.conf</span></span>
<span class="line"><span>-rw-r----- 1 root root 1711 Mar 19 10:42 user.rules</span></span>
<span class="line"><span>-rw-r----- 1 root root 1530 Mar 19 10:42 user6.rules</span></span></code></pre></div><p>本文前面所作的更改，为 <code>http</code> 访问添加了端口 <code>80</code> 和为 <code>https</code> 访问添加了端口 <code>443</code>，在 <code>user.rules</code> 和 <code>user6.rules</code> 文件中看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># grep &quot; 80 &quot; user*.rules</span></span>
<span class="line"><span>user6.rules:### tuple ### allow tcp 80 ::/0 any ::/0 in</span></span>
<span class="line"><span>user6.rules:-A ufw6-user-input -p tcp --dport 80 -j ACCEPT</span></span>
<span class="line"><span>user.rules:### tuple ### allow tcp 80 0.0.0.0/0 any 0.0.0.0/0 in</span></span>
<span class="line"><span>user.rules:-A ufw-user-input -p tcp --dport 80 -j ACCEPT</span></span>
<span class="line"><span>You have new mail in /var/mail/root</span></span>
<span class="line"><span># grep 443 user*.rules</span></span>
<span class="line"><span>user6.rules:### tuple ### allow tcp 443 ::/0 any ::/0 in</span></span>
<span class="line"><span>user6.rules:-A ufw6-user-input -p tcp --dport 443 -j ACCEPT</span></span>
<span class="line"><span>user.rules:### tuple ### allow tcp 443 0.0.0.0/0 any 0.0.0.0/0 in</span></span>
<span class="line"><span>user.rules:-A ufw-user-input -p tcp --dport 443 -j ACCEPT</span></span></code></pre></div><p>使用 <code>ufw</code>，你还可以使用以下命令轻松地阻止来自一个 IP 地址的连接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw deny from 208.176.0.50</span></span>
<span class="line"><span>Rule added</span></span></code></pre></div><p><code>status</code> 命令将显示更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw status verbose</span></span>
<span class="line"><span>Status: active</span></span>
<span class="line"><span>Logging: on (low)</span></span>
<span class="line"><span>Default: deny (incoming), allow (outgoing), disabled (routed)</span></span>
<span class="line"><span>New profiles: skip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To                         Action      From</span></span>
<span class="line"><span>--                         ------      ----</span></span>
<span class="line"><span>22                         ALLOW IN    192.168.0.0/24</span></span>
<span class="line"><span>9090                       ALLOW IN    Anywhere</span></span>
<span class="line"><span>80/tcp                     ALLOW IN    Anywhere</span></span>
<span class="line"><span>443/tcp                    ALLOW IN    Anywhere</span></span>
<span class="line"><span>Anywhere                   DENY IN     208.176.0.50             &lt;== new</span></span>
<span class="line"><span>9090 (v6)                  ALLOW IN    Anywhere (v6)</span></span>
<span class="line"><span>80/tcp (v6)                ALLOW IN    Anywhere (v6)</span></span>
<span class="line"><span>443/tcp (v6)               ALLOW IN    Anywhere (v6)</span></span></code></pre></div><p>总而言之，<code>ufw</code> 不仅容易配置，而且且容易理解。</p><hr>`,31)),a("p",null,[s[9]||(s[9]=n("via: ",-1)),e(p,{href:"https://www.networkworld.com/article/3533551/linux-firewall-basics-with-ufw.html"},{default:l(()=>[...s[8]||(s[8]=[n("https://www.networkworld.com/article/3533551/linux-firewall-basics-with-ufw.html",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),e(p,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:l(()=>[...s[10]||(s[10]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[15]||(s[15]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[11]||(s[11]=[n("lujun9972",-1)])]),_:1}),s[16]||(s[16]=n(" 译者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:l(()=>[...s[12]||(s[12]=[n("MjSeven",-1)])]),_:1}),s[17]||(s[17]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[19]||(s[19]=[n("Linux中国",-1)])]),_:1}),s[22]||(s[22]=n(" 荣誉推出",-1))])])}const v=i(d,[["render",c]]);export{L as __pageData,v as default};
