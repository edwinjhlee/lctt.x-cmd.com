import{_ as l,a0 as i,w as s,s as d,ao as p,I as a,x as t,a1 as o,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"grep 命令系列：如何只查看配置文件中未被注释的有效配置行 | LCTT x X-CMD","titleTemplate":false,"description":"grep 命令系列：如何只查看配置文件中未被注释的有效配置行 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"grep 命令系列：如何只查看配置文件中未被注释的有效配置行 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"grep 命令系列：如何只查看配置文件中未被注释的有效配置行 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151127 Linux or UNIX grep Command Tutorial series 7--Uncommented Lines of a Config File","title":"grep 命令系列：如何只查看配置文件中未被注释的有效配置行","tag":"201601","desc":""},"relativePath":"201601/20151127 Linux or UNIX grep Command Tutorial series 7--Uncommented Lines of a Config File.md","filePath":"[post].md"}'),u={name:"201601/20151127 Linux or UNIX grep Command Tutorial series 7--Uncommented Lines of a Config File.md"};function m(g,e,f,c,h,q){const n=i("Link");return s(),d("div",null,[e[19]||(e[19]=p(`<h1 id="grep-命令系列-如何只查看配置文件中未被注释的有效配置行" tabindex="-1">grep 命令系列：如何只查看配置文件中未被注释的有效配置行 <a class="header-anchor" href="#grep-命令系列-如何只查看配置文件中未被注释的有效配置行" aria-label="Permalink to “grep 命令系列：如何只查看配置文件中未被注释的有效配置行”">​</a></h1><p>大多数的Linux和类Unix系统的配置文件中都有许多的注释行，但是有时候我只想看其中的有效配置行。那我怎么才能只看到quid.conf或httpd.conf这样的配置文件中的非注释命令行呢？怎么去掉这些注释或者空行呢？</p><p>我们可以使用 UNIX/BSD/OS X/Linux 这些操作系统自身提供的 grep，sed，awk，perl或者其他文本处理工具来查看配置文件中的有效配置命令行。</p><h3 id="grep-命令示例——去掉注释" tabindex="-1">grep 命令示例——去掉注释 <a class="header-anchor" href="#grep-命令示例——去掉注释" aria-label="Permalink to “grep 命令示例——去掉注释”">​</a></h3><p>可以按照如下示例使用grep命令:</p><pre><code>$ grep -v &quot;^#&quot; /path/to/config/file
$ grep -v &quot;^#&quot; /etc/apache2/apache2.conf
</code></pre><p>示例输出:</p><pre><code>ServerRoot &quot;/etc/apache2&quot;
 
LockFile /var/lock/apache2/accept.lock
 
PidFile \${APACHE_PID_FILE}
 
Timeout 300
 
KeepAlive On
 
MaxKeepAliveRequests 100
 
KeepAliveTimeout 15
 
 
&lt;IfModule mpm_prefork_module&gt;
    StartServers          5
    MinSpareServers       5
    MaxSpareServers      10
    MaxClients          150
    MaxRequestsPerChild   0
&lt;/IfModule&gt;
 
&lt;IfModule mpm_worker_module&gt;
    StartServers          2
    MinSpareThreads      25
    MaxSpareThreads      75
    ThreadLimit          64
    ThreadsPerChild      25
    MaxClients          150
    MaxRequestsPerChild   0
&lt;/IfModule&gt;
 
&lt;IfModule mpm_event_module&gt;
    StartServers          2
    MaxClients          150
    MinSpareThreads      25
    MaxSpareThreads      75
    ThreadLimit          64
    ThreadsPerChild      25
    MaxRequestsPerChild   0
&lt;/IfModule&gt;

User \${APACHE_RUN_USER}
Group \${APACHE_RUN_GROUP}
 
 
AccessFileName .htaccess
 
&lt;Files ~ &quot;^\\.ht&quot;&gt;
    Order allow,deny
    Deny from all
    Satisfy all
&lt;/Files&gt;
 
DefaultType text/plain
 
 
HostnameLookups Off
 
ErrorLog /var/log/apache2/error.log
 
LogLevel warn
 
Include /etc/apache2/mods-enabled/*.load
Include /etc/apache2/mods-enabled/*.conf
 
Include /etc/apache2/httpd.conf
 
Include /etc/apache2/ports.conf
 
LogFormat &quot;%v:%p %h %l %u %t \\&quot;%r\\&quot; %&gt;s %O \\&quot;%{Referer}i\\&quot; \\&quot;%{User-Agent}i\\&quot;&quot; vhost_combined
LogFormat &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %O \\&quot;%{Referer}i\\&quot; \\&quot;%{User-Agent}i\\&quot;&quot; combined
LogFormat &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %O&quot; common
LogFormat &quot;%{Referer}i -&gt; %U&quot; referer
LogFormat &quot;%{User-agent}i&quot; agent
 
CustomLog /var/log/apache2/other_vhosts_access.log vhost_combined
 
 
 
Include /etc/apache2/conf.d/
 
Include /etc/apache2/sites-enabled/
</code></pre>`,8)),a("p",null,[e[1]||(e[1]=t("想要跳过其中的空行，可以使用 ",-1)),o(n,{href:"http://www.cyberciti.biz/faq/grep-regular-expressions/"},{default:r(()=>[...e[0]||(e[0]=[t("egrep 命令",-1)])]),_:1}),e[2]||(e[2]=t(", 示例:",-1))]),e[20]||(e[20]=p(`<pre><code>egrep -v &quot;^#|^$&quot; /etc/apache2/apache2.conf
## or pass it to the page such as more or less ##
egrep -v &quot;^#|^$&quot; /etc/apache2/apache2.conf | less
 
## Bash function ######################################
## or create function or alias and use it as follows ##
## viewconfig /etc/squid/squid.conf                  ##
#######################################################
viewconfig(){
   local f=&quot;$1&quot;
   [ -f &quot;$1&quot; ] &amp;&amp; command egrep -v &quot;^#|^$&quot; &quot;$f&quot; || echo &quot;Error $1 file not found.&quot;
}
</code></pre><p>示例输出:</p><p><img src="http://s0.cyberciti.org/uploads/faq/2008/05/grep-strip-out-comments-blank-lines.jpg" alt="Fig.01: Unix/Linux Egrep Strip Out Comments Blank Lines"></p><p><em>图 01: Unix/Linux Egrep 除去注释行和空行</em></p><h3 id="理解-grep-egrep-命令行选项" tabindex="-1">理解 grep/egrep 命令行选项 <a class="header-anchor" href="#理解-grep-egrep-命令行选项" aria-label="Permalink to “理解 grep/egrep 命令行选项”">​</a></h3><p>-v 选项，选择出不匹配的命令行。该选项适用于所有基于posix的系统。正则表达式 <code>^$</code> 匹配出所有的非空行， <code>^#</code> 匹配出所有的不以“#”开头的非注释行。</p><h3 id="sed-命令示例" tabindex="-1">sed 命令示例 <a class="header-anchor" href="#sed-命令示例" aria-label="Permalink to “sed 命令示例”">​</a></h3><p>可以按照如下示例使用 GNU 上的 sed 命令:</p><pre><code>$ sed &#39;/ *#/d; /^ *$/d&#39; /path/to/file
$ sed &#39;/ *#/d; /^ *$/d&#39; /etc/apache2/apache2.conf
</code></pre><p>GNU 或 BSD 上的 sed 也可以修改配置文件。下面的命令的作用是原地编辑文件，并以特定（比如 .bak）备份文件：</p><pre><code>sed -i&#39;.bak.2015.12.27&#39; &#39;/ *#/d; /^ *$/d&#39; /etc/apache2/apache2.conf
</code></pre>`,11)),a("p",null,[e[5]||(e[5]=t("更多信息见参考手册 - ",-1)),o(n,{href:"http://www.manpager.com/linux/man1/grep.1.html"},{default:r(()=>[...e[3]||(e[3]=[t("grep(1)",-1)])]),_:1}),e[6]||(e[6]=t(", ",-1)),o(n,{href:"http://www.manpager.com/linux/man1/sed.1.html"},{default:r(()=>[...e[4]||(e[4]=[t("sed(1)",-1)])]),_:1}),e[7]||(e[7]=t("。",-1))]),e[21]||(e[21]=a("hr",null,null,-1)),a("p",null,[e[9]||(e[9]=t("via: ",-1)),o(n,{href:"http://www.cyberciti.biz/faq/shell-display-uncommented-lines-only/"},{default:r(()=>[...e[8]||(e[8]=[t("http://www.cyberciti.biz/faq/shell-display-uncommented-lines-only/",-1)])]),_:1})]),a("p",null,[e[12]||(e[12]=t("作者：Vivek Gite 译者：",-1)),o(n,{href:"https://github.com/sonofelice"},{default:r(()=>[...e[10]||(e[10]=[t("sonofelice",-1)])]),_:1}),e[13]||(e[13]=t(" 校对：",-1)),o(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[11]||(e[11]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[16]||(e[16]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[14]||(e[14]=[t("LCTT",-1)])]),_:1}),e[17]||(e[17]=t(" 原创编译，",-1)),o(n,{href:"https://linux.cn/"},{default:r(()=>[...e[15]||(e[15]=[t("Linux中国",-1)])]),_:1}),e[18]||(e[18]=t(" 荣誉推出",-1))])])}const L=l(u,[["render",m]]);export{C as __pageData,L as default};
