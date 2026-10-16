import{_ as t,a0 as o,w as r,s as d,I as n,x as a,a1 as p,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何使用 Apache 控制命令检查它的模块是否已经启用或加载 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Apache 控制命令检查它的模块是否已经启用或加载 | LCTT (201611) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Apache 控制命令检查它的模块是否已经启用或加载 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Apache 控制命令检查它的模块是否已经启用或加载 | LCTT (201611) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201611/20161115-How-to-Check-Which-Apache-Modules-are-Enabled-Loaded in Linux","title":"如何使用 Apache 控制命令检查它的模块是否已经启用或加载","tag":"201611","desc":""},"relativePath":"201611/20161115-How-to-Check-Which-Apache-Modules-are-Enabled-Loaded in Linux.md","filePath":"[post].md"}'),c={name:"201611/20161115-How-to-Check-Which-Apache-Modules-are-Enabled-Loaded in Linux.md"};function h(u,s,g,m,k,f){const e=o("Link");return r(),d("div",null,[s[31]||(s[31]=n("h1",{id:"如何使用-apache-控制命令检查它的模块是否已经启用或加载",tabindex:"-1"},[a("如何使用 Apache 控制命令检查它的模块是否已经启用或加载 "),n("a",{class:"header-anchor",href:"#如何使用-apache-控制命令检查它的模块是否已经启用或加载","aria-label":"Permalink to “如何使用 Apache 控制命令检查它的模块是否已经启用或加载”"},"​")],-1)),s[32]||(s[32]=n("p",null,"本篇中，我们会简要地讨论 Apache 服务器前端以及如何列出或查看已经启用的 Apache 模块。",-1)),n("p",null,[s[1]||(s[1]=a("Apache 基于模块化的理念而构建，这样就可以让 web 管理员添加不同的模块来扩展主要的功能及",-1)),p(e,{href:"http://www.tecmint.com/apache-performance-tuning/"},{default:l(()=>[...s[0]||(s[0]=[a("增强性能",-1)])]),_:1}),s[2]||(s[2]=a("。",-1))]),s[33]||(s[33]=n("p",null,"常见的 Apache 模块有：",-1)),n("ol",null,[n("li",null,[s[4]||(s[4]=a("mod_ssl – 提供了 ",-1)),p(e,{href:"http://www.tecmint.com/install-lets-encrypt-ssl-certificate-to-secure-apache-on-rhel-centos/"},{default:l(()=>[...s[3]||(s[3]=[a("HTTPS 功能",-1)])]),_:1}),s[5]||(s[5]=a("。",-1))]),n("li",null,[s[7]||(s[7]=a("mod_rewrite – 可以用正则表达式匹配 url 样式，并且使用 ",-1)),p(e,{href:"http://www.tecmint.com/apache-htaccess-tricks/"},{default:l(()=>[...s[6]||(s[6]=[a(".htaccess 技巧",-1)])]),_:1}),s[8]||(s[8]=a("来进行透明转发，或者提供 HTTP 状态码回应。",-1))]),n("li",null,[s[10]||(s[10]=a("mod_security – 用于",-1)),p(e,{href:"http://www.tecmint.com/protect-apache-using-mod_security-and-mod_evasive-on-rhel-centos-fedora/"},{default:l(()=>[...s[9]||(s[9]=[a("保护 Apache 免于暴力破解或者 DDoS 攻击",-1)])]),_:1}),s[11]||(s[11]=a("。",-1))]),n("li",null,[s[13]||(s[13]=a("mod_status - 用于",-1)),p(e,{href:"http://www.tecmint.com/monitor-apache-web-server-load-and-page-statistics/"},{default:l(()=>[...s[12]||(s[12]=[a("监测 Apache 的负载及页面统计",-1)])]),_:1}),s[14]||(s[14]=a("。",-1))])]),s[34]||(s[34]=i(`<p>在 Linux 中 <code>apachectl</code> 或者 <code>apache2ctl</code>用于控制 Apache 服务器，是 Apache 的前端。</p><p>你可以用下面的命令显示 <code>apache2ctl</code> 的使用信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ apache2ctl help</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>$ apachectl help</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Usage: /usr/sbin/httpd [-D name] [-d directory] [-f file]</span></span>
<span class="line"><span>                       [-C &quot;directive&quot;] [-c &quot;directive&quot;]</span></span>
<span class="line"><span>                       [-k start|restart|graceful|graceful-stop|stop]</span></span>
<span class="line"><span>                       [-v] [-V] [-h] [-l] [-L] [-t] [-S]</span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -D name            : define a name for use in  directives</span></span>
<span class="line"><span>  -d directory       : specify an alternate initial ServerRoot</span></span>
<span class="line"><span>  -f file            : specify an alternate ServerConfigFile</span></span>
<span class="line"><span>  -C &quot;directive&quot;     : process directive before reading config files</span></span>
<span class="line"><span>  -c &quot;directive&quot;     : process directive after reading config files</span></span>
<span class="line"><span>  -e level           : show startup errors of level (see LogLevel)</span></span>
<span class="line"><span>  -E file            : log startup errors to file</span></span>
<span class="line"><span>  -v                 : show version number</span></span>
<span class="line"><span>  -V                 : show compile settings</span></span>
<span class="line"><span>  -h                 : list available command line options (this page)</span></span>
<span class="line"><span>  -l                 : list compiled in modules</span></span>
<span class="line"><span>  -L                 : list available configuration directives</span></span>
<span class="line"><span>  -t -D DUMP_VHOSTS  : show parsed settings (currently only vhost settings)</span></span>
<span class="line"><span>  -S                 : a synonym for -t -D DUMP_VHOSTS</span></span>
<span class="line"><span>  -t -D DUMP_MODULES : show all loaded modules </span></span>
<span class="line"><span>  -M                 : a synonym for -t -D DUMP_MODULES</span></span>
<span class="line"><span>  -t                 : run syntax check for config files</span></span></code></pre></div><p><code>apache2ctl</code> 可以工作在两种模式下，SysV init 模式和直通模式。在 SysV init 模式下，<code>apache2ctl</code> 用如下的简单的单命令形式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ apachectl command</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>$ apache2ctl command</span></span></code></pre></div>`,6)),n("p",null,[s[16]||(s[16]=a("比如要启动并检查它的状态，运行这两个命令。如果你是普通用户，使用 ",-1)),p(e,{href:"http://www.tecmint.com/su-vs-sudo-and-how-to-configure-sudo-in-linux/"},{default:l(()=>[...s[15]||(s[15]=[a("sudo 命令",-1)])]),_:1}),s[17]||(s[17]=a("来以 root 用户权限来运行：",-1))]),s[35]||(s[35]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apache2ctl start</span></span>
<span class="line"><span>$ sudo apache2ctl status</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>tecmint@TecMint ~ $ sudo apache2ctl start</span></span>
<span class="line"><span>AH00558: apache2: Could not reliably determine the server&#39;s fully qualified domain name, using 127.0.1.1\\. Set the &#39;ServerName&#39; directive globally to suppress this message</span></span>
<span class="line"><span>httpd (pid 1456) already running</span></span>
<span class="line"><span>tecmint@TecMint ~ $ sudo apache2ctl status</span></span>
<span class="line"><span>Apache Server Status for localhost (via 127.0.0.1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Server Version: Apache/2.4.18 (Ubuntu)</span></span>
<span class="line"><span>Server MPM: prefork</span></span>
<span class="line"><span>Server Built: 2016-07-14T12:32:26</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Current Time: Tuesday, 15-Nov-2016 11:47:28 IST</span></span>
<span class="line"><span>Restart Time: Tuesday, 15-Nov-2016 10:21:46 IST</span></span>
<span class="line"><span>Parent Server Config. Generation: 2</span></span>
<span class="line"><span>Parent Server MPM Generation: 1</span></span>
<span class="line"><span>Server uptime: 1 hour 25 minutes 41 seconds</span></span>
<span class="line"><span>Server load: 0.97 0.94 0.77</span></span>
<span class="line"><span>Total accesses: 2 - Total Traffic: 3 kB</span></span>
<span class="line"><span>CPU Usage: u0 s0 cu0 cs0</span></span>
<span class="line"><span>.000389 requests/sec - 0 B/second - 1536 B/request</span></span>
<span class="line"><span>1 requests currently being processed, 4 idle workers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__W__...........................................................</span></span>
<span class="line"><span>................................................................</span></span>
<span class="line"><span>......................</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Scoreboard Key:</span></span>
<span class="line"><span>&quot;_&quot; Waiting for Connection, &quot;S&quot; Starting up, &quot;R&quot; Reading Request,</span></span>
<span class="line"><span>&quot;W&quot; Sending Reply, &quot;K&quot; Keepalive (read), &quot;D&quot; DNS Lookup,</span></span>
<span class="line"><span>&quot;C&quot; Closing connection, &quot;L&quot; Logging, &quot;G&quot; Gracefully finishing,</span></span>
<span class="line"><span>&quot;I&quot; Idle cleanup of worker, &quot;.&quot; Open slot with no current process</span></span></code></pre></div><p>当在直通模式下，<code>apache2ctl</code> 可以用下面的语法带上所有 Apache 的参数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ apachectl [apache-argument]</span></span>
<span class="line"><span>$ apache2ctl [apache-argument]</span></span></code></pre></div><p>可以用下面的命令列出所有的 Apache 参数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ apache2 help    [在基于Debian的系统中]</span></span>
<span class="line"><span>$ httpd help      [在RHEL的系统中]</span></span></code></pre></div><h3 id="检查启用的-apache-模块" tabindex="-1">检查启用的 Apache 模块 <a class="header-anchor" href="#检查启用的-apache-模块" aria-label="Permalink to “检查启用的 Apache 模块”">​</a></h3><p>因此，为了检测你的 Apache 服务器启动了哪些模块，在你的发行版中运行适当的命令，<code>-t -D DUMP_MODULES</code> 是一个用于显示所有启用的模块的 Apache 参数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---------------  在基于 Debian 的系统中 --------------- </span></span>
<span class="line"><span>$ apache2ctl -t -D DUMP_MODULES   </span></span>
<span class="line"><span>或者 </span></span>
<span class="line"><span>$ apache2ctl -M</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---------------  在 RHEL 的系统中 --------------- </span></span>
<span class="line"><span>$ apachectl -t -D DUMP_MODULES   </span></span>
<span class="line"><span>或者 </span></span>
<span class="line"><span>$ httpd -M</span></span>
<span class="line"><span>$ apache2ctl -M</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@tecmint httpd]# apachectl -M</span></span>
<span class="line"><span>Loaded Modules:</span></span>
<span class="line"><span> core_module (static)</span></span>
<span class="line"><span> mpm_prefork_module (static)</span></span>
<span class="line"><span> http_module (static)</span></span>
<span class="line"><span> so_module (static)</span></span>
<span class="line"><span> auth_basic_module (shared)</span></span>
<span class="line"><span> auth_digest_module (shared)</span></span>
<span class="line"><span> authn_file_module (shared)</span></span>
<span class="line"><span> authn_alias_module (shared)</span></span>
<span class="line"><span> authn_anon_module (shared)</span></span>
<span class="line"><span> authn_dbm_module (shared)</span></span>
<span class="line"><span> authn_default_module (shared)</span></span>
<span class="line"><span> authz_host_module (shared)</span></span>
<span class="line"><span> authz_user_module (shared)</span></span>
<span class="line"><span> authz_owner_module (shared)</span></span>
<span class="line"><span> authz_groupfile_module (shared)</span></span>
<span class="line"><span> authz_dbm_module (shared)</span></span>
<span class="line"><span> authz_default_module (shared)</span></span>
<span class="line"><span> ldap_module (shared)</span></span>
<span class="line"><span> authnz_ldap_module (shared)</span></span>
<span class="line"><span> include_module (shared)</span></span>
<span class="line"><span>....</span></span></code></pre></div><p>就是这样！在这篇简单的教程中，我们解释了如何使用 Apache 前端工具来列出启动的 apache 模块。记住你可以在下面的反馈表中给我们留下你的问题或者留言。</p><hr>`,13)),n("p",null,[s[19]||(s[19]=a("via: ",-1)),p(e,{href:"http://www.tecmint.com/check-apache-modules-enabled"},{default:l(()=>[...s[18]||(s[18]=[a("http://www.tecmint.com/check-apache-modules-enabled",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("作者：",-1)),p(e,{href:"http://www.tecmint.com/author/aaronkili/"},{default:l(()=>[...s[20]||(s[20]=[a("Aaron Kili",-1)])]),_:1}),s[24]||(s[24]=a(" 译者：",-1)),p(e,{href:"https://github.com/geekpi"},{default:l(()=>[...s[21]||(s[21]=[a("geekpi",-1)])]),_:1}),s[25]||(s[25]=a(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[22]||(s[22]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[28]||(s[28]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[26]||(s[26]=[a("LCTT",-1)])]),_:1}),s[29]||(s[29]=a(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[27]||(s[27]=[a("Linux中国",-1)])]),_:1}),s[30]||(s[30]=a(" 荣誉推出",-1))])])}const C=t(c,[["render",h]]);export{y as __pageData,C as default};
