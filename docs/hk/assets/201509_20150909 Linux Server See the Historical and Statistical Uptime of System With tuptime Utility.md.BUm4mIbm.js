import{_ as r,a0 as u,w as d,s as m,I as i,x as e,a1 as n,A as p,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"使用 tuptime 工具查看 Linux 服務器系統的開機時間的歷史和統計 | LCTT x X-CMD","titleTemplate":false,"description":"使用 tuptime 工具查看 Linux 服務器系統的開機時間的歷史和統計 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 tuptime 工具查看 Linux 服務器系統的開機時間的歷史和統計 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 tuptime 工具查看 Linux 服務器系統的開機時間的歷史和統計 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150909 Linux Server See the Historical and Statistical Uptime of System With tuptime Utility","title":"使用 tuptime 工具查看 Linux 服務器系統的開機時間的歷史和統計","tag":"201509","desc":""},"relativePath":"201509/20150909 Linux Server See the Historical and Statistical Uptime of System With tuptime Utility.md","filePath":"[post].md"}'),a={name:"201509/20150909 Linux Server See the Historical and Statistical Uptime of System With tuptime Utility.md"};function l(y,t,c,g,x,S){const s=u("Link");return d(),m("div",null,[t[17]||(t[17]=i("h1",{id:"使用-tuptime-工具查看-linux-服務器系統的開機時間的歷史和統計",tabindex:"-1"},[e("使用 tuptime 工具查看 Linux 服務器系統的開機時間的歷史和統計 "),i("a",{class:"header-anchor",href:"#使用-tuptime-工具查看-linux-服務器系統的開機時間的歷史和統計","aria-label":"Permalink to “使用 tuptime 工具查看 Linux 服務器系統的開機時間的歷史和統計”"},"​")],-1)),t[18]||(t[18]=i("p",null,"你可以使用下面的工具來查看 Linux 或類 Unix 系統運行了多長時間：",-1)),t[19]||(t[19]=i("ul",null,[i("li",null,"uptime ： 告訴你服務器運行了多長的時間。"),i("li",null,"lastt ： 顯示重啓和關機時間。"),i("li",null,"tuptime ： 報告系統的運行時間歷史和運行時間統計，這是指重啓之間的運行時間。和 uptime 命令類似，不過輸出結果更有意思。")],-1)),t[20]||(t[20]=i("h3",{id:"找出系統上次重啓時間和日期",tabindex:"-1"},[e("找出系統上次重啓時間和日期 "),i("a",{class:"header-anchor",href:"#找出系統上次重啓時間和日期","aria-label":"Permalink to “找出系統上次重啓時間和日期”"},"​")],-1)),i("p",null,[t[1]||(t[1]=e("你",-1)),n(s,{href:"http://www.cyberciti.biz/hardware/howto-see-historical-statistical-uptime-on-linux-server/"},{default:p(()=>[...t[0]||(t[0]=[e("可以使用下面的命令來獲取Linux操作系統的上次重啓和關機時間及日期",-1)])]),_:1}),t[2]||(t[2]=e("（在OSX/類Unix系統上也可以用）：",-1))]),t[21]||(t[21]=o(`<pre><code>### 顯示系統重啓和關機時間
who -b
last reboot
last shutdown
### 開機信息
uptime
cat /proc/uptime
awk &#39;{ print &quot;up &quot; $1 /60 &quot; minutes&quot;}&#39; /proc/uptime
w
</code></pre><p><strong>樣例輸出：</strong></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/uptime-w-awk-outputs.jpg" alt="Fig.01: Various Linux commands in action to find out the server uptime"></p><p><em>圖01：用於找出服務器開機時間的多個Linux命令</em></p><p>###跟 tuptime 問打個招呼吧###</p><p>tuptime 命令列工具可以報告基於 Linux 的系統上的下列信息：</p><ol><li>系統啓動次數統計</li><li>註冊首次啓動時間（也就是安裝時間）</li><li>正常關機和意外關機統計</li><li>平均開機時間和故障停機時間</li><li>當前開機時間</li><li>首次啓動以來的開機和故障停機率</li><li>累積系統開機時間、故障停機時間和合計</li><li>報告每次啓動、開機時間、關機和故障停機時間</li></ol><h4 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h4>`,8)),i("p",null,[t[4]||(t[4]=e("輸入",-1)),n(s,{href:"http://www.cyberciti.biz/faq/debian-ubunut-linux-download-a-git-repository/"},{default:p(()=>[...t[3]||(t[3]=[e("下面的命令來克隆 git 倉庫到 Linux 系統中",-1)])]),_:1}),t[5]||(t[5]=e("：",-1))]),t[22]||(t[22]=o(`<pre><code>$ cd /tmp
$ git clone https://github.com/rfrail3/tuptime.git
$ ls
$ cd tuptime
$ ls
</code></pre><p><strong>樣例輸出：</strong></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/git-install-tuptime.jpg" alt="Fig.02: Cloning a git repo"></p><p><em>圖02：克隆git倉庫</em></p><p>確保你安裝了帶有 sys，optparse，os，re，string，sqlite3，datetime，disutils 和 locale 模組的 Python v2.7。</p><p>你可以像下面這樣來安裝：</p><pre><code>$ sudo tuptime-install.sh
</code></pre><p>或者，可以手工安裝（基於 systemd 或非 systemd ）：</p><pre><code>$ sudo cp /tmp/tuptime/latest/cron.d/tuptime /etc/cron.d/tuptime
</code></pre><p>如果系統是systemd的，拷貝服務文件並啓用：</p><pre><code>$ sudo cp /tmp/tuptime/latest/systemd/tuptime.service /lib/systemd/system/
$ sudo systemctl enable tuptime.service
</code></pre><p>如果系統不是systemd的，拷貝初始化文件：</p><pre><code>$ sudo cp /tmp/tuptime/latest/init.d/tuptime.init.d-debian7 /etc/init.d/tuptime
$ sudo update-rc.d tuptime defaults
</code></pre><p>####運行####</p><p>只需輸入以下命令：</p><pre><code>$ sudo tuptime
</code></pre><p><strong>樣例輸出：</strong></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/tuptime-output.jpg" alt="Fig.03: tuptime in action"></p><p><em>圖03：tuptime工作中</em></p><p>在一次更新內核後，我重啓了系統，然後再次輸入了同樣的命令：</p><pre><code>$ sudo tuptime
System startups:	2   since   03:52:16 PM 08/21/2015
System shutdowns:	1 ok   -   0 bad
Average uptime: 	7 days, 16 hours, 48 minutes and 3 seconds
Average downtime: 	2 hours, 30 minutes and 5 seconds
Current uptime: 	5 minutes and 28 seconds   since   06:23:06 AM 09/06/2015
Uptime rate: 		98.66 %
Downtime rate: 		1.34 %
System uptime: 		15 days, 9 hours, 36 minutes and 7 seconds
System downtime: 	5 hours, 0 minutes and 11 seconds
System life: 		15 days, 14 hours, 36 minutes and 18 seconds
</code></pre><p>你可以像下面這樣修改日期和時間格式：</p><pre><code>$ sudo tuptime -d &#39;%H:%M:%S %m-%d-%Y&#39;
</code></pre><p><strong>樣例輸出：</strong></p><pre><code>System startups:	1   since   15:52:16 08-21-2015
System shutdowns:	0 ok   -   0 bad
Average uptime: 	15 days, 9 hours, 21 minutes and 19 seconds
Average downtime: 	0 seconds
Current uptime: 	15 days, 9 hours, 21 minutes and 19 seconds   since   15:52:16 08-21-2015
Uptime rate: 		100.0 %
Downtime rate: 		0.0 %
System uptime: 		15 days, 9 hours, 21 minutes and 19 seconds
System downtime: 	0 seconds
System life: 		15 days, 9 hours, 21 minutes and 19 seconds
</code></pre><p>計算每次啓動、開機時間、關機和故障停機時間：</p><pre><code>$ sudo tuptime -e
</code></pre><p><strong>樣例輸出：</strong></p><pre><code>Startup:  1  at  03:52:16 PM 08/21/2015
Uptime:   15 days, 9 hours, 22 minutes and 33 seconds
 
System startups:	1   since   03:52:16 PM 08/21/2015
System shutdowns:	0 ok   -   0 bad
Average uptime: 	15 days, 9 hours, 22 minutes and 33 seconds
Average downtime: 	0 seconds
Current uptime: 	15 days, 9 hours, 22 minutes and 33 seconds   since   03:52:16 PM 08/21/2015
Uptime rate: 		100.0 %
Downtime rate: 		0.0 %
System uptime: 		15 days, 9 hours, 22 minutes and 33 seconds
System downtime: 	0 seconds
System life: 		15 days, 9 hours, 22 minutes and 33 seconds
</code></pre><hr>`,30)),i("p",null,[t[7]||(t[7]=e("via: ",-1)),n(s,{href:"http://www.cyberciti.biz/hardware/howto-see-historical-statistical-uptime-on-linux-server/"},{default:p(()=>[...t[6]||(t[6]=[e("http://www.cyberciti.biz/hardware/howto-see-historical-statistical-uptime-on-linux-server/",-1)])]),_:1})]),i("p",null,[t[10]||(t[10]=e("作者：Vivek Gite 譯者：",-1)),n(s,{href:"https://github.com/GOLinux"},{default:p(()=>[...t[8]||(t[8]=[e("GOLinux",-1)])]),_:1}),t[11]||(t[11]=e(" 校對：",-1)),n(s,{href:"https://github.com/wxy"},{default:p(()=>[...t[9]||(t[9]=[e("wxy",-1)])]),_:1})]),i("p",null,[t[14]||(t[14]=e("本文由 ",-1)),n(s,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...t[12]||(t[12]=[e("LCTT",-1)])]),_:1}),t[15]||(t[15]=e(" 原創編譯，",-1)),n(s,{href:"https://linux.cn/"},{default:p(()=>[...t[13]||(t[13]=[e("Linux中國",-1)])]),_:1}),t[16]||(t[16]=e(" 榮譽推出",-1))])])}const b=r(a,[["render",l]]);export{h as __pageData,b as default};
