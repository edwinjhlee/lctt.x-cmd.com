import{_ as a,a0 as i,w as l,s as p,I as o,x as e,a1 as r,A as s,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const R=JSON.parse('{"title":"如何用CentOS上的SARG日志分析器来分析Squid日志 | LCTT x X-CMD","titleTemplate":false,"description":"如何用CentOS上的SARG日志分析器来分析Squid日志 | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用CentOS上的SARG日志分析器来分析Squid日志 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用CentOS上的SARG日志分析器来分析Squid日志 | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140716 How to analyze Squid logs with SARG log analyzer on CentOS","title":"如何用CentOS上的SARG日志分析器来分析Squid日志","tag":"201408","desc":""},"relativePath":"201408/20140716 How to analyze Squid logs with SARG log analyzer on CentOS.md","filePath":"[post].md"}'),u={name:"201408/20140716 How to analyze Squid logs with SARG log analyzer on CentOS.md"};function S(m,t,g,f,C,q){const n=i("Link");return l(),p("div",null,[t[16]||(t[16]=o("h1",{id:"如何用centos上的sarg日志分析器来分析squid日志",tabindex:"-1"},[e("如何用CentOS上的SARG日志分析器来分析Squid日志 "),o("a",{class:"header-anchor",href:"#如何用centos上的sarg日志分析器来分析squid日志","aria-label":"Permalink to “如何用CentOS上的SARG日志分析器来分析Squid日志”"},"​")],-1)),o("p",null,[r(n,{href:"http://xmodulo.com/2014/06/squid-transparent-web-proxy-centos-rhel.html"},{default:s(()=>[...t[0]||(t[0]=[e("上一节教程",-1)])]),_:1}),t[1]||(t[1]=e("中，我们展示了如何在CentOS上使用Squid配置透明代理。Squid提供了很多有用的特性，但是分析一个原始Squid日志文件并不直接。比如，你如何分析下面Squid日志中的时间戳和数字？",-1))]),t[17]||(t[17]=d(`<pre><code>1404788984.429   1162 172.17.1.23 TCP_MISS/302 436 GET http://facebook.com/ - DIRECT/173.252.110.27 text/html
1404788985.046  12416 172.17.1.23 TCP_MISS/200 4169 CONNECT stats.pusher.com:443 - DIRECT/173.255.223.127 -
1404788986.124    174 172.17.1.23 TCP_MISS/200 955 POST http://ocsp.digicert.com/ - DIRECT/117.18.237.29 application/ocsp-response
1404788989.738    342 172.17.1.23 TCP_MISS/200 3890 CONNECT www.google.com:443 - DIRECT/74.125.200.106 -
1404788989.757    226 172.17.1.23 TCP_MISS/200 942 POST http://clients1.google.com/ocsp - DIRECT/74.125.200.113 application/ocsp-response
1404788990.839   3939 172.17.1.23 TCP_MISS/200 78944 CONNECT fbstatic-a.akamaihd.net:443 - DIRECT/184.26.162.35 -
1404788990.846   2148 172.17.1.23 TCP_MISS/200 118947 CONNECT fbstatic-a.akamaihd.net:443 - DIRECT/184.26.162.35 -
1404788990.849   2151 172.17.1.23 TCP_MISS/200 76809 CONNECT fbstatic-a.akamaihd.net:443 - DIRECT/184.26.162.35 -
1404788991.140    611 172.17.1.23 TCP_MISS/200 110073 CONNECT fbstatic-a.akamaihd.net:443 - DIRECT/184.26.162.35 –
</code></pre><p>SARG（或者说是Squid分析报告生成器）是一款基于web的工具，用于从Squid日志中生成报告。SARG提供了一个由Squid处理的网络流量视图，易于理解，并且它可以很容易地设置和维护。在下面的教程中，我们会展示<strong>如何在CentOS平台上设置SARG</strong>。</p><p>我们使用yum来安装安装必要的依赖。</p><pre><code># yum install gcc make wget httpd crond 
</code></pre><p>在启动时加载必要的服务</p><pre><code># service httpd start; service crond start
# chkconfig httpd on; chkconfig crond on 
</code></pre><p>现在我们下载并解压SARG</p><pre><code># wget http://downloads.sourceforge.net/project/sarg/sarg/sarg-2.3.8/sarg-2.3.8.tar.gz?
# tar zxvf sarg-2.3.8.tar.gz
# cd sarg-2.3.8 
</code></pre><p><strong>注意</strong>: 对于64位的Linux，log.c的源代码需要用下面的文件打补丁。</p><pre><code>1506c1506
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
</code></pre><p>如下继续并编译/安装SARG</p><pre><code># ./configure
# make
# make install 
</code></pre><p>SARG安装之后，配置文件可以按你的要求修改。下面是一个SARG配置的例子。</p><pre><code># vim /usr/local/etc/sarg.conf 
</code></pre><hr><pre><code>access_log /var/log/squid/access.log
temporary_dir /tmp
output_dir /var/www/html/squid-reports
date_format e     ## We use Europian DD-MM-YYYY format here ##
## we don’t want multiple reports for single day/week/month ##
overwrite_report yes
</code></pre><p>现在是时候测试运行了，我们用调试模式运行sarg来查看是否存在错误。</p><pre><code># sarg -x
</code></pre><p>如果i一切正常，sarg会根系Squid日志，并在/var/www/html/squid-reports下创建报告。报告也可以在浏览器中通过地址http://&lt;服务器IP&gt;/squid-reports/访问。</p><p><img src="https://farm3.staticflickr.com/2931/14631403935_4ff34e07b9_z.jpg" alt=""></p><p><img src="https://farm4.staticflickr.com/3901/14629281644_fec31014c5_z.jpg" alt=""></p><p>、SARG可以用于创建日、周、月度报告。时间范围用“-d”参数来指定，值的形式很可能为day-n、 week-n 或者 month-n，n的值为向前推移的天/周/月的数量。比如，使用week-1,SARG会生成之前一星期的报告。使用day-2,SARG会生成之前两天的报告。</p><p>作为演示，我们会准备一个计划任务来每天运行SARG。</p><pre><code># vim /etc/cron.daily/sarg 
</code></pre><hr><pre><code>#!/bin/sh
/usr/local/bin/sarg -d day-1
</code></pre><p>文件需要可执行权限。</p><pre><code># chmod 755 /usr/local/bin/sarg 
</code></pre><p>现在SARG应该会每天准备关于Squid管理的流量报告。这些报告可以很容易地通过SARG网络接口访问。</p><p>总结一下，SARG一款基于网络的工具，它可以分析Squid日志，并以更详细的方式展示分析。系统管理员可以利用SARG来监视哪些网站被访问了，并跟踪访问量最大的网站和用户。本教程包含了SARG配置工作。你可以进一步自定义配置来满足自己的要求。</p><p>希望这篇教程对您有帮助。</p><hr>`,32)),o("p",null,[r(n,{href:"http://amar-linux.blogspot.com/"},{default:s(()=>[...t[2]||(t[2]=[e("Sarmed Rahman",-1)])]),_:1})]),o("ul",null,[o("li",null,[r(n,{href:"http://twitter.com/SarmedRahman"},{default:s(()=>[...t[3]||(t[3]=[e("Twitter 地址",-1)])]),_:1})]),o("li",null,[r(n,{href:"http://www.linkedin.com/in/sarmedrahman"},{default:s(()=>[...t[4]||(t[4]=[e("LinkedIn 地址",-1)])]),_:1})])]),t[18]||(t[18]=o("p",null,"Sarmed Rahman是一名孟加拉国的IT专业人士。他坚持时不时地写作技术文章，并坚信技术可以通过分享而提高。在空闲时间里，他喜欢打游戏，喜欢和朋友一起度过。",-1)),t[19]||(t[19]=o("hr",null,null,-1)),o("p",null,[t[6]||(t[6]=e("via: ",-1)),r(n,{href:"http://xmodulo.com/2014/07/analyze-squid-logs-sarg-log-analyzer-centos.html"},{default:s(()=>[...t[5]||(t[5]=[e("http://xmodulo.com/2014/07/analyze-squid-logs-sarg-log-analyzer-centos.html",-1)])]),_:1})]),o("p",null,[t[9]||(t[9]=e("译者：",-1)),r(n,{href:"https://github.com/geekpi"},{default:s(()=>[...t[7]||(t[7]=[e("geekpi",-1)])]),_:1}),t[10]||(t[10]=e(" 校对：",-1)),r(n,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...t[8]||(t[8]=[e("Caroline",-1)])]),_:1})]),o("p",null,[t[13]||(t[13]=e("本文由 ",-1)),r(n,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[11]||(t[11]=[e("LCTT",-1)])]),_:1}),t[14]||(t[14]=e(" 原创翻译，",-1)),r(n,{href:"http://linux.cn/"},{default:s(()=>[...t[12]||(t[12]=[e("Linux中国",-1)])]),_:1}),t[15]||(t[15]=e(" 荣誉推出",-1))])])}const h=a(u,[["render",S]]);export{R as __pageData,h as default};
