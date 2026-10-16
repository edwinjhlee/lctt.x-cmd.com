import{_ as i,a0 as p,w as s,s as l,ao as o,I as r,x as a,a1 as n,A as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const D=JSON.parse('{"title":"Linux date命令 - 顯示和設置系統日期與時間 | LCTT x X-CMD","titleTemplate":false,"description":"Linux date命令 - 顯示和設置系統日期與時間 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux date命令 - 顯示和設置系統日期與時間 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux date命令 - 顯示和設置系統日期與時間 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Linux date command – Display and Set System Date and Time","title":"Linux date命令 - 顯示和設置系統日期與時間","tag":"201312","desc":""},"relativePath":"201312/Linux date command – Display and Set System Date and Time.md","filePath":"[post].md"}'),m={name:"201312/Linux date command – Display and Set System Date and Time.md"};function c(u,e,h,T,g,x){const t=p("Link");return s(),l("div",null,[e[14]||(e[14]=o(`<h1 id="linux-date命令-顯示和設置系統日期與時間" tabindex="-1">Linux date命令 - 顯示和設置系統日期與時間 <a class="header-anchor" href="#linux-date命令-顯示和設置系統日期與時間" aria-label="Permalink to “Linux date命令 - 顯示和設置系統日期與時間”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/12/date-linux-command.jpg" alt=""></p><p>操作系統上的時間也許只是當做一個時鐘。特別在控制台下, 我們通常並不認為時間有什麼重要的。但是對於管理員，這種認識是錯誤的。你知道錯誤的日期和時間會導致你不能編譯程序麼?</p><p>因為日期和時間很重要，這或許就是開發網絡時間協議(NTP:Network Time Protocol)的原因。讓我們瞭解下date命令是如何工作的。</p><h3 id="顯示系統日期" tabindex="-1">顯示系統日期 <a class="header-anchor" href="#顯示系統日期" aria-label="Permalink to “顯示系統日期”">​</a></h3><p>要顯示系統日期,只要輸入:</p><pre><code>$ date
Thu Dec 5 22:55:41 WIB 2013
</code></pre><h3 id="格式化顯示日期" tabindex="-1">格式化顯示日期 <a class="header-anchor" href="#格式化顯示日期" aria-label="Permalink to “格式化顯示日期”">​</a></h3><p>日期有很多格式。如果你不喜歡默認的格式，你可以換一種格式。你可能會想&quot;為什麼我需要改變格式? 默認的輸出對我足夠了。&quot;</p><p>是的，你説的對，但是當你在編程時，默認輸出或許無法滿足你的需求，因此需要一些自定義輸出。</p><h3 id="rfc-2822-的日期與時間輸出格式" tabindex="-1">RFC 2822 的日期與時間輸出格式 <a class="header-anchor" href="#rfc-2822-的日期與時間輸出格式" aria-label="Permalink to “RFC 2822 的日期與時間輸出格式”">​</a></h3><pre><code>$ date -R
Thu, 05 Dec 2013 23:40:53 +0700
</code></pre><p><strong>RFC 2822</strong> 的格式像這樣 : <strong>星期, 日-月-年, 小時:分鐘:秒 時區</strong></p><p>時區 +0700 等同於 GMT +7。</p><p>默認上<strong>date</strong>使用的是定義在<strong>/etc/localtime</strong>的時區。有效時區數據定義在<strong>/usr/share/timezones</strong>。</p><h3 id="顯示或者設置協調世界時" tabindex="-1">顯示或者設置協調世界時 <a class="header-anchor" href="#顯示或者設置協調世界時" aria-label="Permalink to “顯示或者設置協調世界時”">​</a></h3>`,16)),r("p",null,[e[1]||(e[1]=a("在 ",-1)),n(t,{href:"http://en.wikipedia.org/wiki/Coordinated_Universal_Time"},{default:d(()=>[...e[0]||(e[0]=[a("Wikipedia",-1)])]),_:1}),e[2]||(e[2]=a("上, UTC 意思是",-1))]),e[15]||(e[15]=o(`<blockquote><p>世界上主要的時鐘和時間的標準。這是格林位置標準時間幾個非常相近的替代者之一。</p></blockquote><p>以UTC形式顯示日期和時間, 使用 -u 參數</p><pre><code>$ date -u
Thu Dec 5 16:45:58:UTC 2013
</code></pre><h3 id="使用格式化選項" tabindex="-1">使用格式化選項 <a class="header-anchor" href="#使用格式化選項" aria-label="Permalink to “使用格式化選項”">​</a></h3><p>要自定義你的日期格式, <strong>使用加號 (+)</strong></p><pre><code>$ date +”Day : %d Month : %m Year : %Y”
Day: 05 Month: 12 Year: 2013
</code></pre><ul><li>$ date +%D 12/05/13</li></ul><p><strong>%D</strong> 格式是 <strong>年/月/日 的格式</strong>.</p><p>如果你想的話，你可以輸出日期的名字。下面是一些例子:</p><pre><code>$ date +”%a %b %d %y”
Fri 06 Dec 2013

$ date +”%A %B %d %Y”
Friday December 06 2013

$ date +”%A %B %d %Y %T”
Friday December 06 2013 00:30:37 

$ date +”%A %B-%d-%Y %c”
Friday December-06-2013 12:30:37 AM WIB
</code></pre><p>還有很多的日期格式。只要輸入:</p><pre><code>$ date –help
</code></pre><p>或者</p><pre><code>$ man date
</code></pre><p>來顯示date命令的語法和參數。</p><p>基本上，date命令會翻譯所有所有的百分號(%)開頭的格式和輸出在引號(&quot;&quot;)內所有的內容。</p><h3 id="設置系統日期和時間" tabindex="-1">設置系統日期和時間 <a class="header-anchor" href="#設置系統日期和時間" aria-label="Permalink to “設置系統日期和時間”">​</a></h3><p>通常地，你希望你的系統日期和時間是自動設置的。如果由於一些原因，你想要手動修改它，我們可以使用這個命令。</p><pre><code># date –set=”20140125 09:17:00”
</code></pre><p>這會<strong>設置</strong>你當前的系統日期和時間到<strong>一月 25, 2014 and 09:17:00 AM。請注意</strong>,你<strong>必須</strong>擁有root特權來這麼做。不然你會得到這樣一個錯誤。</p><pre><code>date: cannot set date: Operation not permitted
Sat Jan 25 09:17:00 WIB 2014
</code></pre><h3 id="重置你的時間" tabindex="-1">重置你的時間 <a class="header-anchor" href="#重置你的時間" aria-label="Permalink to “重置你的時間”">​</a></h3><p>如果你希望重置你的系統日期和時間到原始值，你可以用這個技巧。</p><pre><code># hwclock
Fri 06 Dec 2013 03:44:10 AM WIB -0.314082 seconds
</code></pre><p>這回設置你的系統日期和時間到hwclock命令的輸出的樣子。</p><h3 id="在腳本中使用date命令" tabindex="-1">在腳本中使用date命令 <a class="header-anchor" href="#在腳本中使用date命令" aria-label="Permalink to “在腳本中使用date命令”">​</a></h3><p>還記得我之前説為什麼你需要改變date的輸出麼?一個答案是你或許需要編程。讓我們看下bash腳本下的一個例子。</p><pre><code>$ vi display.date

#! /bin/bash
DATETIME=$(date +”DATE: %a %b-%d-%Y TIME: %T WEEK NUMBER: %W”)
echo $DATETIME
</code></pre><p>保存並運行它:</p><pre><code>$ ./display.date
DATE : Fri Dec-06-2013 TIME: 03:08:19 WEEK Number :40
</code></pre><p>如果你發現權限拒絕錯誤信息,輸入:</p><pre><code>$ chmod 755 display.date
</code></pre><h3 id="在備份流程中使用date" tabindex="-1">在備份流程中使用date <a class="header-anchor" href="#在備份流程中使用date" aria-label="Permalink to “在備份流程中使用date”">​</a></h3><p>另外一個例子是子你備份流程中使用date。</p><pre><code>$ date +%F
2013-12-06

$ tar zcfv /daily_backup/backup-\`date +%F\`.tar.gz /home/pungki/Documents
</code></pre><p>它會壓縮文件夾<strong>/home/pungki/Documents</strong>到一個位於<strong>/daily_backup folder</strong>的文件<strong>backup-2013-12-06.tar.gz</strong>中。（譯註：通過“\` 命令 \`”來在命令列內嵌其它命令，這個字符不是單引號，而是和波浪號~同一個鍵位的那個符號。）</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>date可能被認為在某些方面不重要。但是date扮演了一個重要的角色。要想知道關於date命令更多的細節，在你的控制台下輸入man date訪問man頁面。</p><hr>`,39)),r("p",null,[e[4]||(e[4]=a("via: ",-1)),n(t,{href:"http://linoxide.com/linux-command/date-command-linux/"},{default:d(()=>[...e[3]||(e[3]=[a("http://linoxide.com/linux-command/date-command-linux/",-1)])]),_:1})]),r("p",null,[e[7]||(e[7]=a("譯者：",-1)),n(t,{href:"https://github.com/geekpi"},{default:d(()=>[...e[5]||(e[5]=[a("geekpi",-1)])]),_:1}),e[8]||(e[8]=a(" 校對：",-1)),n(t,{href:"https://github.com/wxy"},{default:d(()=>[...e[6]||(e[6]=[a("wxy",-1)])]),_:1})]),r("p",null,[e[11]||(e[11]=a("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[9]||(e[9]=[a("LCTT",-1)])]),_:1}),e[12]||(e[12]=a(" 原創翻譯，",-1)),n(t,{href:"http://linux.cn/"},{default:d(()=>[...e[10]||(e[10]=[a("Linux中國",-1)])]),_:1}),e[13]||(e[13]=a(" 榮譽推出",-1))])])}const k=i(m,[["render",c]]);export{D as __pageData,k as default};
