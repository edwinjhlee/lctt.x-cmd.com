import{_ as l,a0 as p,w as d,s as a,ao as o,I as i,x as e,a1 as n,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"systemd的運行級別與服務管理命令簡介 | LCTT x X-CMD","titleTemplate":false,"description":"systemd的運行級別與服務管理命令簡介 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"systemd的運行級別與服務管理命令簡介 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"systemd的運行級別與服務管理命令簡介 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141112 Intro to Systemd Runlevels and Service Management Commands","title":"systemd的運行級別與服務管理命令簡介","tag":"201412","desc":""},"relativePath":"201412/20141112 Intro to Systemd Runlevels and Service Management Commands.md","filePath":"[post].md"}'),u={name:"201412/20141112 Intro to Systemd Runlevels and Service Management Commands.md"};function m(g,t,y,f,S,T){const s=p("Link");return d(),a("div",null,[t[21]||(t[21]=o(`<h1 id="systemd的運行級別與服務管理命令簡介" tabindex="-1">systemd的運行級別與服務管理命令簡介 <a class="header-anchor" href="#systemd的運行級別與服務管理命令簡介" aria-label="Permalink to “systemd的運行級別與服務管理命令簡介”">​</a></h1><p><img src="http://www.linux.com/images/stories/41373/Linux_kernel_unified_hierarchy_cgroups_and_systemd.svg.png" alt=""></p><p>從很久很久以前我們就在使用靜態運行級別。而systemd提供了更為動態靈活的機制，來管控你的系統。</p><p>在開始介紹systemd命令前，讓我們先簡單的回顧一下歷史。在Linux世界裏，有一個很奇怪的現象，一方面Linux和自由軟件（FOSS）在不斷的向前推進，另一方面人們對這些變化卻不斷的抱怨。這就是為什麼我要在此稍稍提及那些反對systemd所引起的爭論的原因，因為我依然記得歷史上有不少類似的爭論：</p><ul><li>軟件包（Pacakge）是邪惡的，因為真正的Linux用户會從源碼構建他所想要的的一切，並嚴格的管理系統中安裝的軟件。</li><li>解析依賴關係的包管理器是邪惡的，真正的Linux用户會手動解決這些該死的依賴關係。</li><li>apt-get總能把事情幹好，所以只有Yum是邪惡的。</li><li>Red Hat簡直就是Linux中的微軟。</li><li>好樣的，Ubuntu！</li><li>滾蛋吧，Ubuntu！</li></ul><p>諸如此類...就像我之前常常説的一樣，變化總是讓人沮喪。這些該死的變化攪亂了我的工作流程，這可不是一件小事情，任何業務流程的中斷，都會直接影響到生產力。但是，我們現在還處於計算機發展的嬰兒期，在未來的很長的一段時間內將會持續有快速的變化和發展。想必大家應該都認識一些因循守舊的人，在他們的心裏，商品一旦買回家以後就是恆久不變的，就像是買了一把扳手、一套傢俱或是一個粉紅色的火烈鳥草坪裝飾品。就是這些人，仍然在堅持使用Windows Vista，甚至還有人在使用運行Windows 95的老破爛機器和CRT顯示器。他們不能理解為什麼要去換一台新機器。老的還能用啊，不是麼？</p><p>這讓我回憶起了我在維護老電腦上的一項偉大的成就，那台破電腦真的早就該淘汰掉。從前我有個朋友有一台286的老機器，安裝了一個極其老的MS-DOS版本。她使用這台電腦來處理一些簡單的任務，比如説約會、日記、記賬等，我還用BASIC給她寫了一個簡單的記賬軟件。她不用關注任何安全更新，是這樣麼？因為它壓根都沒有聯網。所以我會時不時給她維修一下電腦，更換電阻、電容、電源或者是CMOS電池什麼的。它竟然還一直能用。它那袖珍的琥珀CRT顯示器變得越來越暗，在使用了20多年後，終於退出了歷史舞台。現在我的這位朋友，換了一台運行Linux的老Thinkpad，來幹同樣的活。</p><p>前面的話題有點偏題了，下面抓緊時間開始介紹systemd。</p><p>###運行級別 vs. 狀態###</p><p>SysVInit使用靜態的運行級別來構建不同的啓動狀態，大部分發布版本中提供了以下5個運行級別：</p><ul><li>單用户模式（Single-user mode）</li><li>多用户模式，不啓動網絡服務（Multi-user mode without network services started）</li><li>多用户模式，啓動網絡服務（Multi-user mode with network services started）</li><li>系統關機（System shutdown）</li><li>系統重啓（System reboot）</li></ul><p>對於我來説，使用多個運行級別並沒有太大的好處，但它們卻一直在系統中存在着。 不同於運行級別，systemd可以創建不同的狀態，狀態提供了靈活的機制來設置啓動時的配置項。這些狀態是由多個unit文件組成的，狀態又叫做啓動目標（target）。啓動目標有一個清晰的描述性命名，而不是像運行級別那樣使用數字。unit文件可以控制服務、設備、套接字和掛載點。參考下/usr/lib/systemd/system/graphical.target，這是CentOS 7默認的啓動目標：</p><pre><code>[Unit]
Description=Graphical Interface
Documentation=man:systemd.special(7)
Requires=multi-user.target
After=multi-user.target
Conflicts=rescue.target
Wants=display-manager.service
AllowIsolate=yes
[Install]
Alias=default.target
</code></pre><p>現在再看看unit文件長什麼樣？ 我來給大家找個例子。 unit文件存放在下面的兩個目錄下：</p><ul><li>/etc/systemd/system/</li><li>/usr/lib/systemd/system/</li></ul><p>我們可以修改第一個目錄中的文件來進行自定義配置，而第二個目錄中的文件是包安裝時保存的備份。<strong>/etc/systemd/system/</strong>的優先級高於<strong>/usr/lib/systemd/system/</strong>。不錯，用户優先級高於機器。下面是Apache Web server的unit文件：</p><pre><code>[Unit]
Description=The Apache HTTP Server
After=network.target remote-fs.target nss-lookup.target
[Service]
Type=notify
EnvironmentFile=/etc/sysconfig/httpd
ExecStart=/usr/sbin/httpd/ $OPTIONS -DFOREGROUND
ExecReload=/usr/sbin/httpd $OPTIONS -k graceful
ExecStop=/bin/kill -WINCH \${MAINPID}
KillSignal=SIGCONT
PrivateTmp=true
[Install]
WantedBy=multi.user.target
</code></pre><p>就算是對於新手而言，上面的文件也是非常簡單易懂的。這可比SysVInit的init文件要簡單多了，為了便於比較，下面截取了/etc/init.d/apache2的一個片段：</p><pre><code>SCRIPTNAME=&quot;\${0##*/}&quot;
SCRIPTNAME=&quot;\${SCRIPTNAME##[KS][0-9][0-9]}&quot;
if [ -n &quot;$APACHE_CONFDIR&quot; ] ; then
	if [ &quot;\${APACHE_CONFDIR##/etc/apache2-}&quot; != &quot;\${APACHE_CONFDIR}&quot; ] ; then
	        DIR_SUFFIX=&quot;\${APACHE_CONFDIR##/etc/apache2-}&quot;
	else
	        DIR_SUFFIX=
</code></pre><p>整個文件一共有410行。</p><p>你可以檢查unit文件的依賴關係，我常常被這些複雜的依賴關係給嚇到：</p><pre><code>$ systemctl list-dependencies httpd.service
</code></pre><h3 id="cgroups" tabindex="-1">cgroups <a class="header-anchor" href="#cgroups" aria-label="Permalink to “cgroups”">​</a></h3>`,23)),i("p",null,[t[1]||(t[1]=e("cgroups，或者叫控制組，在Linux內核裏已經出現好幾年了，但直到systemd的出現才被真正使用起來。",-1)),n(s,{href:"https://www.kernel.org/doc/Documentation/cgroups/cgroups.txt"},{default:r(()=>[...t[0]||(t[0]=[e("The kernel documentation",-1)])]),_:1}),t[2]||(t[2]=e("中是這樣描述cgroups的：“控制組提供層次化的機制來管理任務組，使用它可以聚合和拆分任務組，並管理任務組後續產生的子任務。”換句話説，它提供了多種有效的方式來控制、限制和分配資源。systemd使用了cgroups，你可以便捷的查看它，使用下面的命令可以展示你係統中的整個cgroup樹：",-1))]),t[22]||(t[22]=o(`<pre><code>$ systemd-cgls
</code></pre><p>你可以使用ps命令來進行查看cgroup樹：</p><pre><code>$ ps xawf -eo pid,user,cgroup,args
</code></pre><p>###常用命令集###</p><p>下面的命令列展示瞭如何為守護進程重新裝載配置文件，注意不是systemd服務文件。 使用這個命令能夠激活新的配置項，且儘可能少的打斷業務進程，下面以Apache為例：</p><pre><code># systemctl reload httpd.service
</code></pre><p>重新裝載服務文件（service file）需要完全停止和重新啓動服務。如果服務掛死了，用下面的命令列可以恢復它：</p><pre><code># systemctl restart httpd.service
</code></pre><p>你還可以用一個命令重啓所有的守護進程。這個命令會重新裝載所有守護進程的unit文件，然後重新生成依賴關係樹：</p><pre><code># systemctl daemon-reload
</code></pre><p>在非特權模式下，你也可以進行重啓、掛起、關機操作：</p><pre><code>$ systemctl reboot
$ systemctl suspend
$ systemctl poweroff
</code></pre>`,12)),i("p",null,[t[5]||(t[5]=e("按照慣例，最後給大家介紹一些systemd的學習材料。",-1)),n(s,{href:"http://www.linux.com/learn/tutorials/524577-here-we-go-again-another-linux-init-intro-to-systemd"},{default:r(()=>[...t[3]||(t[3]=[e("Here We Go Again, Another Linux Init: Intro to systemd",-1)])]),_:1}),t[6]||(t[6]=e(" 和 ",-1)),n(s,{href:"http://www.linux.com/learn/tutorials/788613-understanding-and-using-systemd"},{default:r(()=>[...t[4]||(t[4]=[e("Understanding and Using Systemd",-1)])]),_:1}),t[7]||(t[7]=e(" 是不錯的入門材料，這兩份文檔裏會鏈接到更多其他資源。",-1))]),t[23]||(t[23]=i("hr",null,null,-1)),i("p",null,[t[9]||(t[9]=e("via: ",-1)),n(s,{href:"http://www.linux.com/learn/tutorials/794615-systemd-runlevels-and-service-management"},{default:r(()=>[...t[8]||(t[8]=[e("http://www.linux.com/learn/tutorials/794615-systemd-runlevels-and-service-management",-1)])]),_:1})]),i("p",null,[t[13]||(t[13]=e("作者：",-1)),n(s,{href:"http://www.linux.com/community/forums/person/3734"},{default:r(()=>[...t[10]||(t[10]=[e("Carla Schroder",-1)])]),_:1}),t[14]||(t[14]=e(" 譯者：",-1)),n(s,{href:"https://github.com/coloka"},{default:r(()=>[...t[11]||(t[11]=[e("coloka",-1)])]),_:1}),t[15]||(t[15]=e(" 校對：",-1)),n(s,{href:"https://github.com/wxy"},{default:r(()=>[...t[12]||(t[12]=[e("wxy",-1)])]),_:1})]),i("p",null,[t[18]||(t[18]=e("本文由 ",-1)),n(s,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[16]||(t[16]=[e("LCTT",-1)])]),_:1}),t[19]||(t[19]=e(" 原創翻譯，",-1)),n(s,{href:"http://linux.cn/"},{default:r(()=>[...t[17]||(t[17]=[e("Linux中國",-1)])]),_:1}),t[20]||(t[20]=e(" 榮譽推出",-1))])])}const x=l(u,[["render",m]]);export{w as __pageData,x as default};
