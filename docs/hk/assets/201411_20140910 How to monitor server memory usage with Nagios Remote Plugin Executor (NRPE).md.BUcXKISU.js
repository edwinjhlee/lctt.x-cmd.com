import{_ as o,a0 as s,w as c,s as l,I as t,x as n,a1 as r,A as i,ao as m}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const R=JSON.parse('{"title":"如何用Nagios遠程執行插件（NRPE）來檢測服務器內存使用率 | LCTT x X-CMD","titleTemplate":false,"description":"如何用Nagios遠程執行插件（NRPE）來檢測服務器內存使用率 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用Nagios遠程執行插件（NRPE）來檢測服務器內存使用率 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用Nagios遠程執行插件（NRPE）來檢測服務器內存使用率 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20140910 How to monitor server memory usage with Nagios Remote Plugin Executor (NRPE)","title":"如何用Nagios遠程執行插件（NRPE）來檢測服務器內存使用率","tag":"201411","desc":""},"relativePath":"201411/20140910 How to monitor server memory usage with Nagios Remote Plugin Executor (NRPE).md","filePath":"[post].md"}'),d={name:"201411/20140910 How to monitor server memory usage with Nagios Remote Plugin Executor (NRPE).md"};function h(p,e,u,b,g,k){const a=s("Link");return c(),l("div",null,[e[21]||(e[21]=t("h1",{id:"如何用nagios遠程執行插件-nrpe-來檢測服務器內存使用率",tabindex:"-1"},[n("如何用Nagios遠程執行插件（NRPE）來檢測服務器內存使用率 "),t("a",{class:"header-anchor",href:"#如何用nagios遠程執行插件-nrpe-來檢測服務器內存使用率","aria-label":"Permalink to “如何用Nagios遠程執行插件（NRPE）來檢測服務器內存使用率”"},"​")],-1)),t("p",null,[e[1]||(e[1]=n("在",-1)),r(a,{href:"http://linux.cn/article-4101-1.html"},{default:i(()=>[...e[0]||(e[0]=[n("先前的教程中",-1)])]),_:1}),e[2]||(e[2]=n("，我們已經見到了如何在Nagios設置中設置Nagios遠程執行插件（NRPE）。然而，監控內存使用率的腳本和插件並沒有在原生的Nagios中。本篇中，我們會看到如何配置NRPE來監控遠程服務器上的內存使用率。",-1))]),t("p",null,[e[5]||(e[5]=n("我們要用的監控內存的腳本在",-1)),r(a,{href:"http://exchange.nagios.org/directory/Plugins/Operating-Systems/Solaris/check_mem-2Epl/details"},{default:i(()=>[...e[3]||(e[3]=[n("Nagios 市場",-1)])]),_:1}),e[6]||(e[6]=n("上，在創建者的",-1)),r(a,{href:"https://github.com/justintime/nagios-plugins/blob/master/check_mem/check_mem.pl"},{default:i(()=>[...e[4]||(e[4]=[n("Github倉庫",-1)])]),_:1}),e[7]||(e[7]=n("中也可以找到。",-1))]),e[22]||(e[22]=m(`<p>假設我們已經安裝了NRPE，我們首先在我們想要監控的服務器上下載腳本。</p><h3 id="準備遠程服務器" tabindex="-1">準備遠程服務器 <a class="header-anchor" href="#準備遠程服務器" aria-label="Permalink to “準備遠程服務器”">​</a></h3><h4 id="在-debain-ubuntu-中" tabindex="-1">在 Debain/Ubuntu 中: <a class="header-anchor" href="#在-debain-ubuntu-中" aria-label="Permalink to “在 Debain/Ubuntu 中:”">​</a></h4><pre><code># cd /usr/lib/nagios/plugins/
# wget https://raw.githubusercontent.com/justintime/nagios-plugins/master/check_mem/check_mem.pl
# mv check_mem.pl check_mem
# chmod +x check_mem 
</code></pre><h4 id="在-rhel-centos-中" tabindex="-1">在 RHEL/CentOS 中: <a class="header-anchor" href="#在-rhel-centos-中" aria-label="Permalink to “在 RHEL/CentOS 中:”">​</a></h4><pre><code># cd /usr/lib64/nagios/plugins/ (or /usr/lib/nagios/plugins/ for 32-bit)
# wget https://raw.githubusercontent.com/justintime/nagios-plugins/master/check_mem/check_mem.pl
# mv check_mem.pl check_mem
# chmod +x check_mem
</code></pre><p>你可以通過手工在本地運行下面的命令來檢查腳本的輸出是否正常。當使用NRPE時，這條命令應該會檢測空閒的內存，當可用內存小於20%時會發出警告，並且在可用內存小於10%時會生成一個嚴重警告。</p><pre><code># ./check_mem -f -w 20 -c 10 
</code></pre><hr><pre><code>OK - 34.0% (2735744 kB) free.|TOTAL=8035340KB;;;; USED=5299596KB;6428272;7231806;; FREE=2735744KB;;;; CACHES=2703504KB;;;;
</code></pre><p>如果你看到像上面那樣的輸出，那就意味這命令正常工作着。</p><p>現在腳本已經準備好了，我們要定義NRPE檢查內存使用率的命令了。如上所述，命令會檢查可用內存，在可用率小於20%時發出警報，小於10%時發出嚴重警告。</p><pre><code># vim /etc/nagios/nrpe.cfg 
</code></pre><h4 id="對於-debian-ubuntu" tabindex="-1">對於 Debian/Ubuntu: <a class="header-anchor" href="#對於-debian-ubuntu" aria-label="Permalink to “對於 Debian/Ubuntu:”">​</a></h4><pre><code>command[check_mem]=/usr/lib/nagios/plugins/check_mem  -f -w 20 -c 10
</code></pre><h4 id="對於-rhel-centos-32-bit" tabindex="-1">對於 RHEL/CentOS 32 bit: <a class="header-anchor" href="#對於-rhel-centos-32-bit" aria-label="Permalink to “對於 RHEL/CentOS 32 bit:”">​</a></h4><pre><code>command[check_mem]=/usr/lib/nagios/plugins/check_mem  -f -w 20 -c 10
</code></pre><h4 id="對於-rhel-centos-64-bit" tabindex="-1">對於 RHEL/CentOS 64 bit: <a class="header-anchor" href="#對於-rhel-centos-64-bit" aria-label="Permalink to “對於 RHEL/CentOS 64 bit:”">​</a></h4><pre><code>command[check_mem]=/usr/lib64/nagios/plugins/check_mem  -f -w 20 -c 10
</code></pre><h3 id="準備-nagios-服務器" tabindex="-1">準備 Nagios 服務器 <a class="header-anchor" href="#準備-nagios-服務器" aria-label="Permalink to “準備 Nagios 服務器”">​</a></h3><p>在Nagios服務器中，我們為NRPE定義了一條自定義命令。該命令可存儲在Nagios內的任何目錄中。為了讓本教程簡單，我們會將命令定義放在/etc/nagios目錄中。</p><h4 id="對於-debian-ubuntu-1" tabindex="-1">對於 Debian/Ubuntu: <a class="header-anchor" href="#對於-debian-ubuntu-1" aria-label="Permalink to “對於 Debian/Ubuntu:”">​</a></h4><pre><code># vim /etc/nagios3/conf.d/nrpe_command.cfg 
</code></pre><hr><pre><code>define command{
        command_name check_nrpe
        command_line /usr/lib/nagios/plugins/check_nrpe -H &#39;$HOSTADDRESS$&#39;  -c &#39;$ARG1$&#39;
}
</code></pre><h4 id="對於-rhel-centos-32-bit-1" tabindex="-1">對於 RHEL/CentOS 32 bit: <a class="header-anchor" href="#對於-rhel-centos-32-bit-1" aria-label="Permalink to “對於 RHEL/CentOS 32 bit:”">​</a></h4><pre><code># vim /etc/nagios/objects/nrpe_command.cfg 
</code></pre><hr><pre><code>define command{
        command_name check_nrpe
        command_line /usr/lib/nagios/plugins/check_nrpe -H $HOSTADDRESS$ -c $ARG1$
        }
</code></pre><h4 id="對於-rhel-centos-64-bit-1" tabindex="-1">對於 RHEL/CentOS 64 bit: <a class="header-anchor" href="#對於-rhel-centos-64-bit-1" aria-label="Permalink to “對於 RHEL/CentOS 64 bit:”">​</a></h4><pre><code># vim /etc/nagios/objects/nrpe_command.cfg 
</code></pre><hr><pre><code>define command{
        command_name check_nrpe
        command_line /usr/lib64/nagios/plugins/check_nrpe -H $HOSTADDRESS$ -c $ARG1$
        }
</code></pre><p>現在我們定義Nagios的服務檢查</p><h4 id="在-debian-ubuntu-上" tabindex="-1">在 Debian/Ubuntu 上: <a class="header-anchor" href="#在-debian-ubuntu-上" aria-label="Permalink to “在 Debian/Ubuntu 上:”">​</a></h4><pre><code># vim /etc/nagios3/conf.d/nrpe_service_check.cfg 
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
</code></pre><p>最後我們重啓Nagios服務</p><h4 id="在-debian-ubuntu-上-1" tabindex="-1">在 Debian/Ubuntu 上: <a class="header-anchor" href="#在-debian-ubuntu-上-1" aria-label="Permalink to “在 Debian/Ubuntu 上:”">​</a></h4><pre><code># service nagios3 restart 
</code></pre><h4 id="在-rhel-centos-6-上" tabindex="-1">在 RHEL/CentOS 6 上: <a class="header-anchor" href="#在-rhel-centos-6-上" aria-label="Permalink to “在 RHEL/CentOS 6 上:”">​</a></h4><pre><code># service nagios restart 
</code></pre><h4 id="在-rhel-centos-7-上" tabindex="-1">在 RHEL/CentOS 7 上: <a class="header-anchor" href="#在-rhel-centos-7-上" aria-label="Permalink to “在 RHEL/CentOS 7 上:”">​</a></h4><pre><code># systemctl restart nagios.service 
</code></pre><h3 id="故障排除" tabindex="-1">故障排除 <a class="header-anchor" href="#故障排除" aria-label="Permalink to “故障排除”">​</a></h3><p>Nagios應該開始在使用NRPE的遠程服務器上檢查內存使用率了。如果你有任何問題，你可以檢查下面這些情況。</p><ul><li>確保NRPE的端口在遠程主機上是總是允許的。默認NRPE的端口是TCP 5666。</li><li>你可以嘗試通過執行check_nrpe 命令： /usr/lib/nagios/plugins/check_nrpe -H remote-server 手工檢查NRPE操作。</li><li>你同樣可以嘗試運行check_mem 命令：/usr/lib/nagios/plugins/check_nrpe -H remote-server –c check_mem</li><li>在遠程服務器上，在/etc/nagios/nrpe.cfg中設置debug=1。重啓NRPE服務並檢查這些日誌文件，/var/log/messages (RHEL/CentOS)或者/var/log/syslog (Debain/Ubuntu)。如果有任何的配置或者權限錯誤，日誌中應該包含了相關的信息。如果日誌中沒有反映出什麼，很有可能是由於請求在某些端口上有過濾而沒有到達遠程服務器上。</li></ul><p>總結一下，這邊教程描述了我們該如何調試NRPE來監控遠程服務器的內存使用率。過程只需要下載腳本、定義命令和重啓服務就行了。希望這對你們有幫助。</p><hr>`,54)),t("p",null,[e[9]||(e[9]=n("via: ",-1)),r(a,{href:"http://xmodulo.com/2014/09/monitor-server-memory-usage-nagios-remote-plugin-executor.html"},{default:i(()=>[...e[8]||(e[8]=[n("http://xmodulo.com/2014/09/monitor-server-memory-usage-nagios-remote-plugin-executor.html",-1)])]),_:1})]),t("p",null,[e[13]||(e[13]=n("作者：",-1)),r(a,{href:"http://xmodulo.com/author/sarmed"},{default:i(()=>[...e[10]||(e[10]=[n("Sarmed Rahman",-1)])]),_:1}),e[14]||(e[14]=n(" 譯者：",-1)),r(a,{href:"https://github.com/geekpi"},{default:i(()=>[...e[11]||(e[11]=[n("geekpi",-1)])]),_:1}),e[15]||(e[15]=n(" 校對：",-1)),r(a,{href:"https://github.com/wxy"},{default:i(()=>[...e[12]||(e[12]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[18]||(e[18]=n("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[16]||(e[16]=[n("LCTT",-1)])]),_:1}),e[19]||(e[19]=n(" 原創翻譯，",-1)),r(a,{href:"http://linux.cn/"},{default:i(()=>[...e[17]||(e[17]=[n("Linux中國",-1)])]),_:1}),e[20]||(e[20]=n(" 榮譽推出",-1))])])}const E=o(d,[["render",h]]);export{R as __pageData,E as default};
