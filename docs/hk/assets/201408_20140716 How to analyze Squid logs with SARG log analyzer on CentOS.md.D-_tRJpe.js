import{_ as a,a0 as i,w as l,s as p,I as o,x as e,a1 as r,A as s,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const R=JSON.parse('{"title":"如何用CentOS上的SARG日誌分析器來分析Squid日誌 | LCTT x X-CMD","titleTemplate":false,"description":"如何用CentOS上的SARG日誌分析器來分析Squid日誌 | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用CentOS上的SARG日誌分析器來分析Squid日誌 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用CentOS上的SARG日誌分析器來分析Squid日誌 | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140716 How to analyze Squid logs with SARG log analyzer on CentOS","title":"如何用CentOS上的SARG日誌分析器來分析Squid日誌","tag":"201408","desc":""},"relativePath":"201408/20140716 How to analyze Squid logs with SARG log analyzer on CentOS.md","filePath":"[post].md"}'),u={name:"201408/20140716 How to analyze Squid logs with SARG log analyzer on CentOS.md"};function S(m,t,g,f,C,q){const n=i("Link");return l(),p("div",null,[t[16]||(t[16]=o("h1",{id:"如何用centos上的sarg日誌分析器來分析squid日誌",tabindex:"-1"},[e("如何用CentOS上的SARG日誌分析器來分析Squid日誌 "),o("a",{class:"header-anchor",href:"#如何用centos上的sarg日誌分析器來分析squid日誌","aria-label":"Permalink to “如何用CentOS上的SARG日誌分析器來分析Squid日誌”"},"​")],-1)),o("p",null,[r(n,{href:"http://xmodulo.com/2014/06/squid-transparent-web-proxy-centos-rhel.html"},{default:s(()=>[...t[0]||(t[0]=[e("上一節教程",-1)])]),_:1}),t[1]||(t[1]=e("中，我們展示瞭如何在CentOS上使用Squid配置透明代理。Squid提供了很多有用的特性，但是分析一個原始Squid日誌文件並不直接。比如，你如何分析下面Squid日誌中的時間戳和數字？",-1))]),t[17]||(t[17]=d(`<pre><code>1404788984.429   1162 172.17.1.23 TCP_MISS/302 436 GET http://facebook.com/ - DIRECT/173.252.110.27 text/html
1404788985.046  12416 172.17.1.23 TCP_MISS/200 4169 CONNECT stats.pusher.com:443 - DIRECT/173.255.223.127 -
1404788986.124    174 172.17.1.23 TCP_MISS/200 955 POST http://ocsp.digicert.com/ - DIRECT/117.18.237.29 application/ocsp-response
1404788989.738    342 172.17.1.23 TCP_MISS/200 3890 CONNECT www.google.com:443 - DIRECT/74.125.200.106 -
1404788989.757    226 172.17.1.23 TCP_MISS/200 942 POST http://clients1.google.com/ocsp - DIRECT/74.125.200.113 application/ocsp-response
1404788990.839   3939 172.17.1.23 TCP_MISS/200 78944 CONNECT fbstatic-a.akamaihd.net:443 - DIRECT/184.26.162.35 -
1404788990.846   2148 172.17.1.23 TCP_MISS/200 118947 CONNECT fbstatic-a.akamaihd.net:443 - DIRECT/184.26.162.35 -
1404788990.849   2151 172.17.1.23 TCP_MISS/200 76809 CONNECT fbstatic-a.akamaihd.net:443 - DIRECT/184.26.162.35 -
1404788991.140    611 172.17.1.23 TCP_MISS/200 110073 CONNECT fbstatic-a.akamaihd.net:443 - DIRECT/184.26.162.35 –
</code></pre><p>SARG（或者説是Squid分析報告生成器）是一款基於web的工具，用於從Squid日誌中生成報告。SARG提供了一個由Squid處理的網絡流量視圖，易於理解，並且它可以很容易地設置和維護。在下面的教程中，我們會展示<strong>如何在CentOS平台上設置SARG</strong>。</p><p>我們使用yum來安裝安裝必要的依賴。</p><pre><code># yum install gcc make wget httpd crond 
</code></pre><p>在啓動時加載必要的服務</p><pre><code># service httpd start; service crond start
# chkconfig httpd on; chkconfig crond on 
</code></pre><p>現在我們下載並解壓SARG</p><pre><code># wget http://downloads.sourceforge.net/project/sarg/sarg/sarg-2.3.8/sarg-2.3.8.tar.gz?
# tar zxvf sarg-2.3.8.tar.gz
# cd sarg-2.3.8 
</code></pre><p><strong>注意</strong>: 對於64位的Linux，log.c的源代碼需要用下面的文件打補丁。</p><pre><code>1506c1506
&lt;            if (fprintf(ufile-&gt;file, &quot;%s\\t%s\\t%s\\t%s\\t%&quot;PRIi64&quot;\\t%s\\t%ld\\t%s\\n&quot;,dia,hora,ip,url,nbytes,code,elap_time,smartfilter)&lt;=0) {
---
&gt;            if (fprintf(ufile-&gt;file, &quot;%s\\t%s\\t%s\\t%s\\t%&quot;PRIi64&quot;\\t%s\\t%ld\\t%s\\n&quot;,dia,hora,ip,url,(int64_t)nbytes,code,elap_time,smartfilter)&lt;=0) {
1513c1513
&lt;                fprintf(fp_log, &quot;%s\\t%s\\t%s\\t%s\\t%s\\t%&quot;PRIi64&quot;\\t%s\\t%ld\\t%s\\n&quot;,dia,hora,user,ip,url,nbytes,code,elap_time,smartfilter);
---
&gt;                fprintf(fp_log, &quot;%s\\t%s\\t%s\\t%s\\t%s\\t%&quot;PRIi64&quot;\\t%s\\t%ld\\t%s\\n&quot;,dia,hora,user,ip,url,(int64_t)nbytes,code,elap_time,smartfilter);
1564c1564
&lt;                printf(&quot;LEN=\\t%&quot;PRIi64&quot;\\n&quot;,nbytes);
---
&gt;                printf(&quot;LEN=\\t%&quot;PRIi64&quot;\\n&quot;,(int64_t)nbytes);
</code></pre><p>如下繼續並編譯/安裝SARG</p><pre><code># ./configure
# make
# make install 
</code></pre><p>SARG安裝之後，配置文件可以按你的要求修改。下面是一個SARG配置的例子。</p><pre><code># vim /usr/local/etc/sarg.conf 
</code></pre><hr><pre><code>access_log /var/log/squid/access.log
temporary_dir /tmp
output_dir /var/www/html/squid-reports
date_format e     ## We use Europian DD-MM-YYYY format here ##
## we don’t want multiple reports for single day/week/month ##
overwrite_report yes
</code></pre><p>現在是時候測試運行了，我們用調試模式運行sarg來查看是否存在錯誤。</p><pre><code># sarg -x
</code></pre><p>如果i一切正常，sarg會根系Squid日誌，並在/var/www/html/squid-reports下創建報告。報告也可以在瀏覽器中通過地址http://&lt;服務器IP&gt;/squid-reports/訪問。</p><p><img src="https://farm3.staticflickr.com/2931/14631403935_4ff34e07b9_z.jpg" alt=""></p><p><img src="https://farm4.staticflickr.com/3901/14629281644_fec31014c5_z.jpg" alt=""></p><p>、SARG可以用於創建日、周、月度報告。時間範圍用“-d”參數來指定，值的形式很可能為day-n、 week-n 或者 month-n，n的值為向前推移的天/周/月的數量。比如，使用week-1,SARG會生成之前一星期的報告。使用day-2,SARG會生成之前兩天的報告。</p><p>作為演示，我們會準備一個計劃任務來每天運行SARG。</p><pre><code># vim /etc/cron.daily/sarg 
</code></pre><hr><pre><code>#!/bin/sh
/usr/local/bin/sarg -d day-1
</code></pre><p>文件需要可執行權限。</p><pre><code># chmod 755 /usr/local/bin/sarg 
</code></pre><p>現在SARG應該會每天準備關於Squid管理的流量報告。這些報告可以很容易地通過SARG網絡接口訪問。</p><p>總結一下，SARG一款基於網絡的工具，它可以分析Squid日誌，並以更詳細的方式展示分析。系統管理員可以利用SARG來監視哪些網站被訪問了，並跟蹤訪問量最大的網站和用户。本教程包含了SARG配置工作。你可以進一步自定義配置來滿足自己的要求。</p><p>希望這篇教程對您有幫助。</p><hr>`,32)),o("p",null,[r(n,{href:"http://amar-linux.blogspot.com/"},{default:s(()=>[...t[2]||(t[2]=[e("Sarmed Rahman",-1)])]),_:1})]),o("ul",null,[o("li",null,[r(n,{href:"http://twitter.com/SarmedRahman"},{default:s(()=>[...t[3]||(t[3]=[e("Twitter 地址",-1)])]),_:1})]),o("li",null,[r(n,{href:"http://www.linkedin.com/in/sarmedrahman"},{default:s(()=>[...t[4]||(t[4]=[e("LinkedIn 地址",-1)])]),_:1})])]),t[18]||(t[18]=o("p",null,"Sarmed Rahman是一名孟加拉國的IT專業人士。他堅持時不時地寫作技術文章，並堅信技術可以通過分享而提高。在空閒時間裏，他喜歡打遊戲，喜歡和朋友一起度過。",-1)),t[19]||(t[19]=o("hr",null,null,-1)),o("p",null,[t[6]||(t[6]=e("via: ",-1)),r(n,{href:"http://xmodulo.com/2014/07/analyze-squid-logs-sarg-log-analyzer-centos.html"},{default:s(()=>[...t[5]||(t[5]=[e("http://xmodulo.com/2014/07/analyze-squid-logs-sarg-log-analyzer-centos.html",-1)])]),_:1})]),o("p",null,[t[9]||(t[9]=e("譯者：",-1)),r(n,{href:"https://github.com/geekpi"},{default:s(()=>[...t[7]||(t[7]=[e("geekpi",-1)])]),_:1}),t[10]||(t[10]=e(" 校對：",-1)),r(n,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...t[8]||(t[8]=[e("Caroline",-1)])]),_:1})]),o("p",null,[t[13]||(t[13]=e("本文由 ",-1)),r(n,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[11]||(t[11]=[e("LCTT",-1)])]),_:1}),t[14]||(t[14]=e(" 原創翻譯，",-1)),r(n,{href:"http://linux.cn/"},{default:s(()=>[...t[12]||(t[12]=[e("Linux中國",-1)])]),_:1}),t[15]||(t[15]=e(" 榮譽推出",-1))])])}const h=a(u,[["render",S]]);export{R as __pageData,h as default};
