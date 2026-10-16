import{_ as r,a0 as t,w as c,s as p,I as n,x as o,a1 as a,A as i,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"如何用 Nagios 監控通用服務 | LCTT x X-CMD","titleTemplate":false,"description":"如何用 Nagios 監控通用服務 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用 Nagios 監控通用服務 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用 Nagios 監控通用服務 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150601 How to monitor common services with Nagios","title":"如何用 Nagios 監控通用服務","tag":"201507","desc":""},"relativePath":"201507/20150601 How to monitor common services with Nagios.md","filePath":"[post].md"}'),l={name:"201507/20150601 How to monitor common services with Nagios.md"};function g(m,e,h,f,u,v){const s=t("Link");return c(),p("div",null,[e[16]||(e[16]=n("h1",{id:"如何用-nagios-監控通用服務",tabindex:"-1"},[o("如何用 Nagios 監控通用服務 "),n("a",{class:"header-anchor",href:"#如何用-nagios-監控通用服務","aria-label":"Permalink to “如何用 Nagios 監控通用服務”"},"​")],-1)),e[17]||(e[17]=n("p",null,"Nagios內置了很多腳本來監控服務。本篇會使用其中一些來檢查通用服務如MySql、Apache、DNS等等。",-1)),n("p",null,[e[1]||(e[1]=o("為了保證本篇集中在系統監控，我們不會在這裏配置主機組或者模板，它們已經在 ",-1)),a(s,{href:"https://linux.cn/article-2436-1.html"},{default:i(()=>[...e[0]||(e[0]=[o("前面的教程",-1)])]),_:1}),e[2]||(e[2]=o("中覆蓋了，它們可以滿足需要了。",-1))]),e[18]||(e[18]=d(`<h3 id="在命令列中運行nagios" tabindex="-1">在命令列中運行Nagios <a class="header-anchor" href="#在命令列中運行nagios" aria-label="Permalink to “在命令列中運行Nagios”">​</a></h3><p>通常建議在添加到Nagios前，先在命令列中運行Nagios服務檢測腳本。它會給出執行是否成功以及腳本的輸出將會看上去的樣子。</p><p>這些腳本存儲在 /etc/nagios-plugins/config/ ，可執行文件在 /usr/lib/nagios/plugins/。</p><p>下面就是該怎麼做</p><pre><code>root@nagios:~# cd /etc/nagios-plugins/config/
</code></pre><p>提供的腳本包含了語法幫助。示例包含了部分輸出。</p><pre><code>root@nagios:~# cat /etc/nagios-plugins/config/tcp_udp.cfg
</code></pre><hr><pre><code># &#39;check_tcp&#39; command definition
define command{
        command_name    check_tcp
        command_line    /usr/lib/nagios/plugins/check_tcp -H &#39;$HOSTADDRESS$&#39; -p &#39;$ARG1$&#39;
</code></pre><p>瞭解了語法，TCP 80端口可以用下面的方法檢查。</p><pre><code>root@nagios:~# /usr/lib/nagios/plugins/check_tcp -H 10.10.10.1 -p 80
</code></pre><hr><pre><code>TCP OK - 0.000 second response time on port 80|time=0.000222s;;;0.000000;10.000000
</code></pre><h3 id="示例拓撲" tabindex="-1">示例拓撲 <a class="header-anchor" href="#示例拓撲" aria-label="Permalink to “示例拓撲”">​</a></h3><p>本片中使用下面三台服務器。每台服務器運行多個通用服務。Nagios服務器現在運行的是Ubuntu。</p><ul><li>Server 1 (10.10.10.1) : MySQL, Apache2</li><li>Server 2 (10.10.10.2) : Postfix, Apache2</li><li>Server 3 (10.10.10.3) : DNS</li></ul><p>首先，這些服務器被定義在了Nagios中。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/example.cfg
</code></pre><hr><pre><code>define host{
        use                     generic-host            
        host_name               test-server-1
        alias                   test-server-1
        address                 10.10.10.1
        }

define host{
        use                     generic-host            
        host_name               test-server-2
        alias                   test-server-2
        address                 10.10.10.2
        }

define host{
        use                     generic-host            
        host_name               test-server-3
        alias                   test-server-3
        address                 10.10.10.3
        }
</code></pre><h3 id="監控mysql服務" tabindex="-1">監控MySQL服務 <a class="header-anchor" href="#監控mysql服務" aria-label="Permalink to “監控MySQL服務”">​</a></h3><h4 id="mysql-監控需要" tabindex="-1">MySQL 監控需要 <a class="header-anchor" href="#mysql-監控需要" aria-label="Permalink to “MySQL 監控需要”">​</a></h4><ul><li>通過檢查3306端口來檢測MySQL是否運行中。</li><li>檢測特定的資料庫&#39;testDB&#39;是否可用。</li></ul><h4 id="mysql-服務器設置" tabindex="-1">MySQL 服務器設置 <a class="header-anchor" href="#mysql-服務器設置" aria-label="Permalink to “MySQL 服務器設置”">​</a></h4><p>開始檢測MySQL時，需要記住MySQL默認只監聽迴環接口127.0.0.1。這增加了資料庫的安全。手動調節需要告訴MySQL該監聽什麼其他接口。下面是該怎麼做。</p><p>這個設置要在所有的MySQL服務器上完成。</p><pre><code>root@nagios:~# vim /etc/mysql/my.cnf
</code></pre><p>下面這行被註釋掉以監聽所有網絡接口。</p><pre><code>#bind-address           = 127.0.0.1
</code></pre><p>同樣，MySQL也不會讓任意主機來連接它。需要為localhost和“任意”主機創建MySQL用户‘nagios’，接着在所有的資料庫中為這個用户授予ALL權限，會這將在會用在監控中。</p><p>下面的設置對所有的MySQL服務器都已經設置。</p><pre><code>root@nagios:~# mysql -u root –p
## MySQL root 密碼 ##
</code></pre><p>在MySQL服務器中創建&#39;nagios@localhost&#39;用户。</p><pre><code>mysql&gt; CREATE USER &#39;nagios&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;nagios-pass&#39;;
mysql&gt; GRANT ALL PRIVILEGES ON *.* TO &#39;nagios&#39;@&#39;localhost&#39;;
</code></pre><p>創建&#39;nagios@任意主機&#39;用户。（LCTT 譯註：實際上這兩個是同一個用户，只是分別授權給localhost和任意主機的訪問；因為它們所用的密碼的同一個，修改任何一個，另外一個也相應變化。）</p><pre><code>mysql&gt; CREATE USER &#39;nagios&#39;@&#39;%&#39; IDENTIFIED BY &#39;nagios-pass&#39;;
mysql&gt; GRANT ALL PRIVILEGES ON *.* TO &#39;nagios&#39;@&#39;%&#39;;
 
mysql&gt; FLUSH PRIVILEGES;
</code></pre><p>這使MySQL監聽所有的網絡接口，同樣接受來自用户&#39;nagios&#39;的進入連接。</p><p>請注意，這種修改可能有安全隱患，所以需要提示幾點：</p><ul><li>這個設置將會暴露MySQL給所有的接口，包括外網。確保只有合法的網絡訪問是非常重要的。應該使用防火牆和TCP wrapper等過濾器。</li><li>MySQL用户‘nagios’的密碼應該非常強。如果只有幾台Nagios服務器，那麼應該創建&#39;nagios@服務器名&#39;用户而不是任意用户的&#39;nagios@%&#39;。</li></ul><h4 id="對mysql的nagios配置" tabindex="-1">對MySQL的Nagios配置 <a class="header-anchor" href="#對mysql的nagios配置" aria-label="Permalink to “對MySQL的Nagios配置”">​</a></h4><p>按如下配置來做一些調整。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/services_nagios2.cfg
</code></pre><hr><pre><code>define service{
use			generic-service
host_name		test-server-1
;hostgroup can be used instead as well

service_description		Check MYSQL via TCP port
check_command			check_tcp!3306
        }

define service{
use				generic-service
host_name			test-server-1
;hostgroup can be used instead as well

service_description	Check availability of database &#39;testDB&#39;
check_command	check_mysql_database!nagios!nagios-pass!testDB
;check_mysql!userName!userPassword!databaseName
        }
</code></pre><p>這樣，Nagios就可以同時監控MySQL服務器及其資料庫的可用性。</p><h3 id="監控apache服務器" tabindex="-1">監控Apache服務器 <a class="header-anchor" href="#監控apache服務器" aria-label="Permalink to “監控Apache服務器”">​</a></h3><p>Nagios同樣也可以監控Apache服務。</p><h4 id="apache監控需要" tabindex="-1">Apache監控需要 <a class="header-anchor" href="#apache監控需要" aria-label="Permalink to “Apache監控需要”">​</a></h4><ul><li>監控apache服務是否可用</li></ul><p>這個任務非常簡單因為Nagios有一個內置命令。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/services_nagios2.cfg
</code></pre><hr><pre><code>define service{
use			generic-service
host_name		test-server-1, test-server-2
service_description	Check Apache Web Server
check_command		check_http
        }
</code></pre><p>現在就非常簡單了。</p><h3 id="監控dns服務" tabindex="-1">監控DNS服務 <a class="header-anchor" href="#監控dns服務" aria-label="Permalink to “監控DNS服務”">​</a></h3><p>Nagios通過向DNS服務器查詢一個完全限定域名（FQDN），或者使用dig工具來查詢。默認用於查詢的FQDN的是www.google.com，但是這個可以按需改變。按照下面的文件修改來完成這個任務。</p><pre><code>root@nagios:~# vim /etc/nagios-plugins/config/dns.cfg
</code></pre><hr><pre><code>## The -H portion can be modified to replace Google ##
define command{
command_name    check_dns
command_line    /usr/lib/nagios/plugins/check_dns -H www.google.com -s &#39;$HOSTADDRESS$&#39;
}
</code></pre><p>編輯下面的行。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/services_nagios2.cfg
</code></pre><hr><pre><code>## Nagios asks server-3 to resolve the IP for google.com ##
define service{
use                             generic-service
host_name                       test-server-3
service_description     Check DNS
check_command           check_dns
        }

## Nagios asks server-3 to dig google.com ##
define service{
use                             generic-service
host_name                       test-server-3
service_description     Check DNS via dig
check_command           check_dig!www.google.com
        }
</code></pre><h3 id="監控郵件服務器" tabindex="-1">監控郵件服務器 <a class="header-anchor" href="#監控郵件服務器" aria-label="Permalink to “監控郵件服務器”">​</a></h3><p>Nagios可以監控不同的郵件服務組件如SMTP、POP、IMAP和mailq。之前提過，server-2設置了Postfix郵件服務。Nagios將被配置來監控SMTP和郵件隊列。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/services_nagios2.cfg
</code></pre><hr><pre><code>define service{
use                     generic-service
host_name               test-server-2
service_description     Check SMTP
check_command           check_smtp
        }

define service{
use                     generic-service
host_name               test-server-2
service_description     Check Mail Queue
check_command           check_mailq_postfix!50!100
					;warning at 50, critical at 100
        }
</code></pre><p>下面的截屏顯示了目前配置監控服務的概覽。</p><p><img src="http://farm8.staticflickr.com/7333/11428095956_2868bbdfcc_z.jpg" alt=""></p><h3 id="基於端口自定義監控程序" tabindex="-1">基於端口自定義監控程序 <a class="header-anchor" href="#基於端口自定義監控程序" aria-label="Permalink to “基於端口自定義監控程序”">​</a></h3><p>讓我們假設如下定製程序同樣運行在網絡中，監聽着一個特定的端口。</p><ul><li>測試1號服務器：定製程序（TCP端口 12345）</li></ul><p>做一些小的調整，Nagios也可以幫助我們監控這個程序。</p><pre><code>root@nagios:~# vim /etc/nagios3/conf.d/services_nagios2.cfg
</code></pre><hr><pre><code>define service{
use                     generic-service
host_name               test-server-1
service_description     Check server 1 custom application
check_command           check_tcp!12345
        }
</code></pre><p>在結束之前的提示，Nagios可以監控網絡很多其他的方面。存儲在/etc/nagios-plugins/config/中的腳本為Nagios提供了很棒的能力。</p><p>一些Nagios提供的腳本被僅限於本地服務器，比如，服務器負載、進程併發數量、登錄用户數量等。這些檢查可以提供Nagios服務器內有用的信息。</p><p>希望這篇文章對你有用。</p><hr>`,81)),n("p",null,[e[4]||(e[4]=o("via: ",-1)),a(s,{href:"http://xmodulo.com/monitor-common-services-nagios.html"},{default:i(()=>[...e[3]||(e[3]=[o("http://xmodulo.com/monitor-common-services-nagios.html",-1)])]),_:1})]),n("p",null,[e[8]||(e[8]=o("作者：",-1)),a(s,{href:"http://xmodulo.com/author/sarmed"},{default:i(()=>[...e[5]||(e[5]=[o("Sarmed Rahman",-1)])]),_:1}),e[9]||(e[9]=o(" 譯者：",-1)),a(s,{href:"https://github.com/geekpi"},{default:i(()=>[...e[6]||(e[6]=[o("geekpi",-1)])]),_:1}),e[10]||(e[10]=o(" 校對：",-1)),a(s,{href:"https://github.com/wxy"},{default:i(()=>[...e[7]||(e[7]=[o("wxy",-1)])]),_:1})]),n("p",null,[e[13]||(e[13]=o("本文由 ",-1)),a(s,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[11]||(e[11]=[o("LCTT",-1)])]),_:1}),e[14]||(e[14]=o(" 原創翻譯，",-1)),a(s,{href:"https://linux.cn/"},{default:i(()=>[...e[12]||(e[12]=[o("Linux中國",-1)])]),_:1}),e[15]||(e[15]=o(" 榮譽推出",-1))])])}const k=r(l,[["render",g]]);export{S as __pageData,k as default};
