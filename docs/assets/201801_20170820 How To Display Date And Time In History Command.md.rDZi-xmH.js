import{_ as l,a0 as t,w as o,s as d,ao as c,I as i,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"让 history 命令显示日期和时间 | LCTT x X-CMD","titleTemplate":false,"description":"让 history 命令显示日期和时间 | LCTT (201801) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"让 history 命令显示日期和时间 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"让 history 命令显示日期和时间 | LCTT (201801) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201801/20170820 How To Display Date And Time In History Command","title":"让 history 命令显示日期和时间","tag":"201801","desc":""},"relativePath":"201801/20170820 How To Display Date And Time In History Command.md","filePath":"[post].md"}'),r={name:"201801/20170820 How To Display Date And Time In History Command.md"};function h(g,s,y,u,m,k){const n=t("Link");return o(),d("div",null,[s[13]||(s[13]=c(`<h1 id="让-history-命令显示日期和时间" tabindex="-1">让 history 命令显示日期和时间 <a class="header-anchor" href="#让-history-命令显示日期和时间" aria-label="Permalink to “让 history 命令显示日期和时间”">​</a></h1><p>我们都对 <code>history</code> 命令很熟悉。它将终端上 bash 执行过的所有命令存储到 <code>.bash_history</code> 文件中，来帮助我们复查用户之前执行过的命令。</p><p>默认情况下 <code>history</code> 命令直接显示用户执行的命令而不会输出运行命令时的日期和时间，即使 <code>history</code> 命令记录了这个时间。</p><p>运行 <code>history</code> 命令时，它会检查一个叫做 <code>HISTTIMEFORMAT</code> 的环境变量，这个环境变量指明了如何格式化输出 <code>history</code> 命令中记录的这个时间。</p><p>若该值为 null 或者根本没有设置，则它跟大多数系统默认显示的一样，不会显示日期和时间。</p><p><code>HISTTIMEFORMAT</code> 使用 <code>strftime</code> 来格式化显示时间（<code>strftime</code> - 将日期和时间转换为字符串）。<code>history</code> 命令输出日期和时间能够帮你更容易地追踪问题。</p><ul><li><code>%T</code>： 替换为时间（<code>%H:%M:%S</code>）。</li><li><code>%F</code>： 等同于 <code>%Y-%m-%d</code> （ISO 8601:2000 标准日期格式）。</li></ul><p>下面是 <code>history</code> 命令默认的输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># history</span></span>
<span class="line"><span> 1 yum install -y mysql-server mysql-client</span></span>
<span class="line"><span> 2 service mysqld start</span></span>
<span class="line"><span> 3 sysdig proc.name=sshd</span></span>
<span class="line"><span> 4 sysdig -c topprocs_net</span></span>
<span class="line"><span> 5 sysdig proc.name=sshd</span></span>
<span class="line"><span> 6 sysdig proc.name=sshd | more</span></span>
<span class="line"><span> 7 sysdig fd.name=/var/log/auth.log | more</span></span>
<span class="line"><span> 8 sysdig fd.name=/var/log/mysqld.log</span></span>
<span class="line"><span> 9 sysdig -cl</span></span>
<span class="line"><span> 10 sysdig -i httplog</span></span>
<span class="line"><span> 11 sysdig -i proc_exec_time</span></span>
<span class="line"><span> 12 sysdig -i topprocs_cpu</span></span>
<span class="line"><span> 13 sysdig -c topprocs_cpu</span></span>
<span class="line"><span> 14 sysdig -c tracers_2_statsd</span></span>
<span class="line"><span> 15 sysdig -c topfiles_bytes</span></span>
<span class="line"><span> 16 sysdig -c topprocs_cpu</span></span>
<span class="line"><span> 17 sysdig -c topprocs_cpu &quot;fd.name contains sshd&quot;</span></span>
<span class="line"><span> 18 sysdig -c topprocs_cpu &quot;proc.name contains sshd&quot;</span></span>
<span class="line"><span> 19 csysdig</span></span>
<span class="line"><span> 20 sysdig -c topprocs_cpu</span></span>
<span class="line"><span> 21 rpm --import https://s3.amazonaws.com/download.draios.com/DRAIOS-GPG-KEY.public</span></span>
<span class="line"><span> 22 curl -s -o /etc/yum.repos.d/draios.repo http://download.draios.com/stable/rpm/draios.repo</span></span>
<span class="line"><span> 23 yum install -y epel-release</span></span>
<span class="line"><span> 24 yum update</span></span>
<span class="line"><span> 25 yum makecache</span></span>
<span class="line"><span> 26 yum -y install kernel-devel-$(uname -r)</span></span>
<span class="line"><span> 27 yum -y install sysdig</span></span>
<span class="line"><span> 28 sysdig</span></span>
<span class="line"><span> 29 yum install httpd mysql</span></span>
<span class="line"><span> 30 service httpd start</span></span></code></pre></div><p>根据需求，有三种不同的设置环境变量的方法。</p><ul><li>临时设置当前用户的环境变量</li><li>永久设置当前/其他用户的环境变量</li><li>永久设置所有用户的环境变量</li></ul><p><strong>注意：</strong> 不要忘了在最后那个单引号前加上空格，否则输出会很混乱的。</p><h3 id="方法-1" tabindex="-1">方法 1： <a class="header-anchor" href="#方法-1" aria-label="Permalink to “方法 1：”">​</a></h3><p>运行下面命令为为当前用户临时设置 <code>HISTTIMEFORMAT</code> 变量。这会一直生效到下次重启。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># export HISTTIMEFORMAT=&#39;%F %T &#39;</span></span></code></pre></div><h3 id="方法-2" tabindex="-1">方法 2： <a class="header-anchor" href="#方法-2" aria-label="Permalink to “方法 2：”">​</a></h3><p>将 <code>HISTTIMEFORMAT</code> 变量加到 <code>.bashrc</code> 或 <code>.bash_profile</code> 文件中，让它永久生效。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># echo &#39;HISTTIMEFORMAT=&quot;%F %T &quot;&#39; &gt;&gt; ~/.bashrc</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span># echo &#39;HISTTIMEFORMAT=&quot;%F %T &quot;&#39; &gt;&gt; ~/.bash_profile</span></span></code></pre></div><p>运行下面命令来让文件中的修改生效。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># source ~/.bashrc</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span># source ~/.bash_profile</span></span></code></pre></div><h3 id="方法-3" tabindex="-1">方法 3： <a class="header-anchor" href="#方法-3" aria-label="Permalink to “方法 3：”">​</a></h3><p>将 <code>HISTTIMEFORMAT</code> 变量加入 <code>/etc/profile</code> 文件中，让它对所有用户永久生效。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># echo &#39;HISTTIMEFORMAT=&quot;%F %T &quot;&#39; &gt;&gt; /etc/profile</span></span></code></pre></div><p>运行下面命令来让文件中的修改生效。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># source /etc/profile</span></span></code></pre></div><p>输出结果为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># history</span></span>
<span class="line"><span> 1 2017-08-16 15:30:15 yum install -y mysql-server mysql-client</span></span>
<span class="line"><span> 2 2017-08-16 15:30:15 service mysqld start</span></span>
<span class="line"><span> 3 2017-08-16 15:30:15 sysdig proc.name=sshd</span></span>
<span class="line"><span> 4 2017-08-16 15:30:15 sysdig -c topprocs_net</span></span>
<span class="line"><span> 5 2017-08-16 15:30:15 sysdig proc.name=sshd</span></span>
<span class="line"><span> 6 2017-08-16 15:30:15 sysdig proc.name=sshd | more</span></span>
<span class="line"><span> 7 2017-08-16 15:30:15 sysdig fd.name=/var/log/auth.log | more</span></span>
<span class="line"><span> 8 2017-08-16 15:30:15 sysdig fd.name=/var/log/mysqld.log</span></span>
<span class="line"><span> 9 2017-08-16 15:30:15 sysdig -cl</span></span>
<span class="line"><span> 10 2017-08-16 15:30:15 sysdig -i httplog</span></span>
<span class="line"><span> 11 2017-08-16 15:30:15 sysdig -i proc_exec_time</span></span>
<span class="line"><span> 12 2017-08-16 15:30:15 sysdig -i topprocs_cpu</span></span>
<span class="line"><span> 13 2017-08-16 15:30:15 sysdig -c topprocs_cpu</span></span>
<span class="line"><span> 14 2017-08-16 15:30:15 sysdig -c tracers_2_statsd</span></span>
<span class="line"><span> 15 2017-08-16 15:30:15 sysdig -c topfiles_bytes</span></span>
<span class="line"><span> 16 2017-08-16 15:30:15 sysdig -c topprocs_cpu</span></span>
<span class="line"><span> 17 2017-08-16 15:30:15 sysdig -c topprocs_cpu &quot;fd.name contains sshd&quot;</span></span>
<span class="line"><span> 18 2017-08-16 15:30:15 sysdig -c topprocs_cpu &quot;proc.name contains sshd&quot;</span></span>
<span class="line"><span> 19 2017-08-16 15:30:15 csysdig</span></span>
<span class="line"><span> 20 2017-08-16 15:30:15 sysdig -c topprocs_cpu</span></span>
<span class="line"><span> 21 2017-08-16 15:30:15 rpm --import https://s3.amazonaws.com/download.draios.com/DRAIOS-GPG-KEY.public</span></span>
<span class="line"><span> 22 2017-08-16 15:30:15 curl -s -o /etc/yum.repos.d/draios.repo http://download.draios.com/stable/rpm/draios.repo</span></span>
<span class="line"><span> 23 2017-08-16 15:30:15 yum install -y epel-release</span></span>
<span class="line"><span> 24 2017-08-16 15:30:15 yum update</span></span>
<span class="line"><span> 25 2017-08-16 15:30:15 yum makecache</span></span>
<span class="line"><span> 26 2017-08-16 15:30:15 yum -y install kernel-devel-$(uname -r)</span></span>
<span class="line"><span> 27 2017-08-16 15:30:15 yum -y install sysdig</span></span>
<span class="line"><span> 28 2017-08-16 15:30:15 sysdig</span></span>
<span class="line"><span> 29 2017-08-16 15:30:15 yum install httpd mysql</span></span>
<span class="line"><span> 30 2017-08-16 15:30:15 service httpd start</span></span></code></pre></div><hr>`,28)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://www.2daygeek.com/display-date-time-linux-bash-history-command/"},{default:e(()=>[...s[0]||(s[0]=[a("https://www.2daygeek.com/display-date-time-linux-bash-history-command/",-1)])]),_:1})]),i("p",null,[s[5]||(s[5]=a("作者：",-1)),p(n,{href:"https://www.2daygeek.com/author/2daygeek/"},{default:e(()=>[...s[2]||(s[2]=[a("2daygeek",-1)])]),_:1}),s[6]||(s[6]=a(" 译者：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[7]||(s[7]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[4]||(s[4]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[10]||(s[10]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[8]||(s[8]=[a("LCTT",-1)])]),_:1}),s[11]||(s[11]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[9]||(s[9]=[a("Linux中国",-1)])]),_:1}),s[12]||(s[12]=a(" 荣誉推出",-1))])])}const _=l(r,[["render",h]]);export{f as __pageData,_ as default};
