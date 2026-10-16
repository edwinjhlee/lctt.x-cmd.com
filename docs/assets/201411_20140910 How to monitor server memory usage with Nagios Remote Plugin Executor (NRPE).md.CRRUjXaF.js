import{_ as o,a0 as s,w as c,s as l,I as t,x as n,a1 as r,A as i,ao as m}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const R=JSON.parse('{"title":"如何用Nagios远程执行插件（NRPE）来检测服务器内存使用率 | LCTT x X-CMD","titleTemplate":false,"description":"如何用Nagios远程执行插件（NRPE）来检测服务器内存使用率 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用Nagios远程执行插件（NRPE）来检测服务器内存使用率 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用Nagios远程执行插件（NRPE）来检测服务器内存使用率 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20140910 How to monitor server memory usage with Nagios Remote Plugin Executor (NRPE)","title":"如何用Nagios远程执行插件（NRPE）来检测服务器内存使用率","tag":"201411","desc":""},"relativePath":"201411/20140910 How to monitor server memory usage with Nagios Remote Plugin Executor (NRPE).md","filePath":"[post].md"}'),d={name:"201411/20140910 How to monitor server memory usage with Nagios Remote Plugin Executor (NRPE).md"};function h(p,e,u,b,g,k){const a=s("Link");return c(),l("div",null,[e[21]||(e[21]=t("h1",{id:"如何用nagios远程执行插件-nrpe-来检测服务器内存使用率",tabindex:"-1"},[n("如何用Nagios远程执行插件（NRPE）来检测服务器内存使用率 "),t("a",{class:"header-anchor",href:"#如何用nagios远程执行插件-nrpe-来检测服务器内存使用率","aria-label":"Permalink to “如何用Nagios远程执行插件（NRPE）来检测服务器内存使用率”"},"​")],-1)),t("p",null,[e[1]||(e[1]=n("在",-1)),r(a,{href:"http://linux.cn/article-4101-1.html"},{default:i(()=>[...e[0]||(e[0]=[n("先前的教程中",-1)])]),_:1}),e[2]||(e[2]=n("，我们已经见到了如何在Nagios设置中设置Nagios远程执行插件（NRPE）。然而，监控内存使用率的脚本和插件并没有在原生的Nagios中。本篇中，我们会看到如何配置NRPE来监控远程服务器上的内存使用率。",-1))]),t("p",null,[e[5]||(e[5]=n("我们要用的监控内存的脚本在",-1)),r(a,{href:"http://exchange.nagios.org/directory/Plugins/Operating-Systems/Solaris/check_mem-2Epl/details"},{default:i(()=>[...e[3]||(e[3]=[n("Nagios 市场",-1)])]),_:1}),e[6]||(e[6]=n("上，在创建者的",-1)),r(a,{href:"https://github.com/justintime/nagios-plugins/blob/master/check_mem/check_mem.pl"},{default:i(()=>[...e[4]||(e[4]=[n("Github仓库",-1)])]),_:1}),e[7]||(e[7]=n("中也可以找到。",-1))]),e[22]||(e[22]=m(`<p>假设我们已经安装了NRPE，我们首先在我们想要监控的服务器上下载脚本。</p><h3 id="准备远程服务器" tabindex="-1">准备远程服务器 <a class="header-anchor" href="#准备远程服务器" aria-label="Permalink to “准备远程服务器”">​</a></h3><h4 id="在-debain-ubuntu-中" tabindex="-1">在 Debain/Ubuntu 中: <a class="header-anchor" href="#在-debain-ubuntu-中" aria-label="Permalink to “在 Debain/Ubuntu 中:”">​</a></h4><pre><code># cd /usr/lib/nagios/plugins/
# wget https://raw.githubusercontent.com/justintime/nagios-plugins/master/check_mem/check_mem.pl
# mv check_mem.pl check_mem
# chmod +x check_mem 
</code></pre><h4 id="在-rhel-centos-中" tabindex="-1">在 RHEL/CentOS 中: <a class="header-anchor" href="#在-rhel-centos-中" aria-label="Permalink to “在 RHEL/CentOS 中:”">​</a></h4><pre><code># cd /usr/lib64/nagios/plugins/ (or /usr/lib/nagios/plugins/ for 32-bit)
# wget https://raw.githubusercontent.com/justintime/nagios-plugins/master/check_mem/check_mem.pl
# mv check_mem.pl check_mem
# chmod +x check_mem
</code></pre><p>你可以通过手工在本地运行下面的命令来检查脚本的输出是否正常。当使用NRPE时，这条命令应该会检测空闲的内存，当可用内存小于20%时会发出警告，并且在可用内存小于10%时会生成一个严重警告。</p><pre><code># ./check_mem -f -w 20 -c 10 
</code></pre><hr><pre><code>OK - 34.0% (2735744 kB) free.|TOTAL=8035340KB;;;; USED=5299596KB;6428272;7231806;; FREE=2735744KB;;;; CACHES=2703504KB;;;;
</code></pre><p>如果你看到像上面那样的输出，那就意味这命令正常工作着。</p><p>现在脚本已经准备好了，我们要定义NRPE检查内存使用率的命令了。如上所述，命令会检查可用内存，在可用率小于20%时发出警报，小于10%时发出严重警告。</p><pre><code># vim /etc/nagios/nrpe.cfg 
</code></pre><h4 id="对于-debian-ubuntu" tabindex="-1">对于 Debian/Ubuntu: <a class="header-anchor" href="#对于-debian-ubuntu" aria-label="Permalink to “对于 Debian/Ubuntu:”">​</a></h4><pre><code>command[check_mem]=/usr/lib/nagios/plugins/check_mem  -f -w 20 -c 10
</code></pre><h4 id="对于-rhel-centos-32-bit" tabindex="-1">对于 RHEL/CentOS 32 bit: <a class="header-anchor" href="#对于-rhel-centos-32-bit" aria-label="Permalink to “对于 RHEL/CentOS 32 bit:”">​</a></h4><pre><code>command[check_mem]=/usr/lib/nagios/plugins/check_mem  -f -w 20 -c 10
</code></pre><h4 id="对于-rhel-centos-64-bit" tabindex="-1">对于 RHEL/CentOS 64 bit: <a class="header-anchor" href="#对于-rhel-centos-64-bit" aria-label="Permalink to “对于 RHEL/CentOS 64 bit:”">​</a></h4><pre><code>command[check_mem]=/usr/lib64/nagios/plugins/check_mem  -f -w 20 -c 10
</code></pre><h3 id="准备-nagios-服务器" tabindex="-1">准备 Nagios 服务器 <a class="header-anchor" href="#准备-nagios-服务器" aria-label="Permalink to “准备 Nagios 服务器”">​</a></h3><p>在Nagios服务器中，我们为NRPE定义了一条自定义命令。该命令可存储在Nagios内的任何目录中。为了让本教程简单，我们会将命令定义放在/etc/nagios目录中。</p><h4 id="对于-debian-ubuntu-1" tabindex="-1">对于 Debian/Ubuntu: <a class="header-anchor" href="#对于-debian-ubuntu-1" aria-label="Permalink to “对于 Debian/Ubuntu:”">​</a></h4><pre><code># vim /etc/nagios3/conf.d/nrpe_command.cfg 
</code></pre><hr><pre><code>define command{
        command_name check_nrpe
        command_line /usr/lib/nagios/plugins/check_nrpe -H &#39;$HOSTADDRESS$&#39;  -c &#39;$ARG1$&#39;
}
</code></pre><h4 id="对于-rhel-centos-32-bit-1" tabindex="-1">对于 RHEL/CentOS 32 bit: <a class="header-anchor" href="#对于-rhel-centos-32-bit-1" aria-label="Permalink to “对于 RHEL/CentOS 32 bit:”">​</a></h4><pre><code># vim /etc/nagios/objects/nrpe_command.cfg 
</code></pre><hr><pre><code>define command{
        command_name check_nrpe
        command_line /usr/lib/nagios/plugins/check_nrpe -H $HOSTADDRESS$ -c $ARG1$
        }
</code></pre><h4 id="对于-rhel-centos-64-bit-1" tabindex="-1">对于 RHEL/CentOS 64 bit: <a class="header-anchor" href="#对于-rhel-centos-64-bit-1" aria-label="Permalink to “对于 RHEL/CentOS 64 bit:”">​</a></h4><pre><code># vim /etc/nagios/objects/nrpe_command.cfg 
</code></pre><hr><pre><code>define command{
        command_name check_nrpe
        command_line /usr/lib64/nagios/plugins/check_nrpe -H $HOSTADDRESS$ -c $ARG1$
        }
</code></pre><p>现在我们定义Nagios的服务检查</p><h4 id="在-debian-ubuntu-上" tabindex="-1">在 Debian/Ubuntu 上: <a class="header-anchor" href="#在-debian-ubuntu-上" aria-label="Permalink to “在 Debian/Ubuntu 上:”">​</a></h4><pre><code># vim /etc/nagios3/conf.d/nrpe_service_check.cfg 
</code></pre><hr><pre><code>define service{
        use                            local-service
        host_name                      remote-server
        service_description            Check RAM
        check_command                  check_nrpe!check_mem
}
</code></pre><h4 id="在-rhel-centos-上" tabindex="-1">在 RHEL/CentOS 上: <a class="header-anchor" href="#在-rhel-centos-上" aria-label="Permalink to “在 RHEL/CentOS 上:”">​</a></h4><pre><code># vim /etc/nagios/objects/nrpe_service_check.cfg 
</code></pre><hr><pre><code>define service{
        use                            local-service
        host_name                      remote-server
        service_description            Check RAM
        check_command                  check_nrpe!check_mem
}
</code></pre><p>最后我们重启Nagios服务</p><h4 id="在-debian-ubuntu-上-1" tabindex="-1">在 Debian/Ubuntu 上: <a class="header-anchor" href="#在-debian-ubuntu-上-1" aria-label="Permalink to “在 Debian/Ubuntu 上:”">​</a></h4><pre><code># service nagios3 restart 
</code></pre><h4 id="在-rhel-centos-6-上" tabindex="-1">在 RHEL/CentOS 6 上: <a class="header-anchor" href="#在-rhel-centos-6-上" aria-label="Permalink to “在 RHEL/CentOS 6 上:”">​</a></h4><pre><code># service nagios restart 
</code></pre><h4 id="在-rhel-centos-7-上" tabindex="-1">在 RHEL/CentOS 7 上: <a class="header-anchor" href="#在-rhel-centos-7-上" aria-label="Permalink to “在 RHEL/CentOS 7 上:”">​</a></h4><pre><code># systemctl restart nagios.service 
</code></pre><h3 id="故障排除" tabindex="-1">故障排除 <a class="header-anchor" href="#故障排除" aria-label="Permalink to “故障排除”">​</a></h3><p>Nagios应该开始在使用NRPE的远程服务器上检查内存使用率了。如果你有任何问题，你可以检查下面这些情况。</p><ul><li>确保NRPE的端口在远程主机上是总是允许的。默认NRPE的端口是TCP 5666。</li><li>你可以尝试通过执行check_nrpe 命令： /usr/lib/nagios/plugins/check_nrpe -H remote-server 手工检查NRPE操作。</li><li>你同样可以尝试运行check_mem 命令：/usr/lib/nagios/plugins/check_nrpe -H remote-server –c check_mem</li><li>在远程服务器上，在/etc/nagios/nrpe.cfg中设置debug=1。重启NRPE服务并检查这些日志文件，/var/log/messages (RHEL/CentOS)或者/var/log/syslog (Debain/Ubuntu)。如果有任何的配置或者权限错误，日志中应该包含了相关的信息。如果日志中没有反映出什么，很有可能是由于请求在某些端口上有过滤而没有到达远程服务器上。</li></ul><p>总结一下，这边教程描述了我们该如何调试NRPE来监控远程服务器的内存使用率。过程只需要下载脚本、定义命令和重启服务就行了。希望这对你们有帮助。</p><hr>`,54)),t("p",null,[e[9]||(e[9]=n("via: ",-1)),r(a,{href:"http://xmodulo.com/2014/09/monitor-server-memory-usage-nagios-remote-plugin-executor.html"},{default:i(()=>[...e[8]||(e[8]=[n("http://xmodulo.com/2014/09/monitor-server-memory-usage-nagios-remote-plugin-executor.html",-1)])]),_:1})]),t("p",null,[e[13]||(e[13]=n("作者：",-1)),r(a,{href:"http://xmodulo.com/author/sarmed"},{default:i(()=>[...e[10]||(e[10]=[n("Sarmed Rahman",-1)])]),_:1}),e[14]||(e[14]=n(" 译者：",-1)),r(a,{href:"https://github.com/geekpi"},{default:i(()=>[...e[11]||(e[11]=[n("geekpi",-1)])]),_:1}),e[15]||(e[15]=n(" 校对：",-1)),r(a,{href:"https://github.com/wxy"},{default:i(()=>[...e[12]||(e[12]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[18]||(e[18]=n("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[16]||(e[16]=[n("LCTT",-1)])]),_:1}),e[19]||(e[19]=n(" 原创翻译，",-1)),r(a,{href:"http://linux.cn/"},{default:i(()=>[...e[17]||(e[17]=[n("Linux中国",-1)])]),_:1}),e[20]||(e[20]=n(" 荣誉推出",-1))])])}const E=o(d,[["render",h]]);export{R as __pageData,E as default};
