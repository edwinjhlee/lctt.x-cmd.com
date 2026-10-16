import{_ as a,a0 as m,w as l,s as p,I as s,x as t,a1 as i,A as n,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"如何使用 systemd 中的定時器 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 systemd 中的定時器 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 systemd 中的定時器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 systemd 中的定時器 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140928 How to Use Systemd Timers","title":"如何使用 systemd 中的定時器","tag":"201410","desc":""},"relativePath":"201410/20140928 How to Use Systemd Timers.md","filePath":"[post].md"}'),d={name:"201410/20140928 How to Use Systemd Timers.md"};function y(u,e,g,T,h,f){const r=m("Link");return l(),p("div",null,[e[24]||(e[24]=s("h1",{id:"如何使用-systemd-中的定時器",tabindex:"-1"},[t("如何使用 systemd 中的定時器 "),s("a",{class:"header-anchor",href:"#如何使用-systemd-中的定時器","aria-label":"Permalink to “如何使用 systemd 中的定時器”"},"​")],-1)),s("p",null,[e[2]||(e[2]=t("我最近在寫一些執行備份工作的腳本，我決定使用",-1)),i(r,{href:"https://fedoraproject.org/wiki/User:Johannbg/QA/Systemd/Systemd.timer"},{default:n(()=>[...e[0]||(e[0]=[t("systemd timers",-1)])]),_:1}),e[3]||(e[3]=t("而不是對我而已更熟悉的",-1)),i(r,{href:"https://en.wikipedia.org/wiki/Cron"},{default:n(()=>[...e[1]||(e[1]=[t("cron jobs",-1)])]),_:1}),e[4]||(e[4]=t("來管理它們。",-1))]),e[25]||(e[25]=o(`<p>在我使用時，出現了很多問題需要我去各個地方找資料，這個過程非常麻煩。因此，我想要把我目前所做的記錄下來，方便自己的記憶，也方便讀者不必像我這樣，滿世界的找資料了。</p><p>在我下面提到的步驟中有其他的選擇，但是這裏是最簡單的方法。在此之前，請查看<strong>systemd.service</strong>, <strong>systemd.timer</strong>,和<strong>systemd.target</strong>的幫助頁面(man)，學習你能用它們做些什麼。</p><h3 id="運行一個簡單的腳本" tabindex="-1">運行一個簡單的腳本 <a class="header-anchor" href="#運行一個簡單的腳本" aria-label="Permalink to “運行一個簡單的腳本”">​</a></h3><p>假設你有一個腳本叫：<strong>/usr/local/bin/myscript</strong> ，你想要每隔一小時就運行一次。</p><h4 id="service-文件" tabindex="-1">Service 文件 <a class="header-anchor" href="#service-文件" aria-label="Permalink to “Service 文件”">​</a></h4><p>第一步，創建一個service文件，根據你Linux的發行版本放到相應的系統目錄(在Arch中，這個目錄是<strong>/etc/systemd/system/</strong> 或 <strong>/usr/lib/systemd/system</strong>)</p><p>myscript.service</p><pre><code>[Unit]
Description=MyScript

[Service]
Type=simple
ExecStart=/usr/local/bin/myscript
</code></pre><p>注意，務必將<strong>Type</strong>變量的值設置為&quot;simple&quot;而不是&quot;oneshot&quot;。使用&quot;oneshot&quot;使得腳本只在第一次運行，之後系統會認為你不想再次運行它，從而關掉我們接下去創建的定時器(Timer)。</p><h4 id="timer-文件" tabindex="-1">Timer 文件 <a class="header-anchor" href="#timer-文件" aria-label="Permalink to “Timer 文件”">​</a></h4><p>第二步，創建一個timer文件，把它放在第一步中service文件放置的目錄。</p><p>myscript.timer</p><pre><code>[Unit]
Description=Runs myscript every hour

[Timer]
# 首次運行要在啓動後10分鐘後 
OnBootSec=10min
# 每次運行間隔時間
OnUnitActiveSec=1h
Unit=myscript.service

[Install]
WantedBy=multi-user.target
</code></pre><h4 id="授權-運行" tabindex="-1">授權 / 運行 <a class="header-anchor" href="#授權-運行" aria-label="Permalink to “授權 / 運行”">​</a></h4><p>授權並運行的是timer文件，而不是service文件。</p><pre><code># 以 root 身份啓動定時器
systemctl start myscript.timer
# 在系統引導起來後就啓用該定時器 
systemctl enable myscript.timer
</code></pre><h3 id="在同一個timer上運行多個腳本" tabindex="-1">在同一個Timer上運行多個腳本 <a class="header-anchor" href="#在同一個timer上運行多個腳本" aria-label="Permalink to “在同一個Timer上運行多個腳本”">​</a></h3><p>現在我們假設你在相同時間想要運行多個腳本。這種情況，<strong>你需要在上面的文件中做適當的修改</strong>。</p><h4 id="service-文件-1" tabindex="-1">Service 文件 <a class="header-anchor" href="#service-文件-1" aria-label="Permalink to “Service 文件”">​</a></h4>`,19)),s("p",null,[e[6]||(e[6]=t("像我",-1)),i(r,{href:"http://jason.the-graham.com/2013/03/06/how-to-use-systemd-timers/#service-file"},{default:n(()=>[...e[5]||(e[5]=[t("之前説過的",-1)])]),_:1}),e[7]||(e[7]=t("那樣創建你的service文件來運行你的腳本，但是在每個service 文件最後都要包含下面的內容:",-1))]),e[26]||(e[26]=o(`<pre><code>[Install]
WantedBy=mytimer.target
</code></pre><p>如果在你的service 文件中有一些依賴順序，確保你使用<strong>Description</strong>字段中的值具體指定<strong>After=something.service</strong>和<strong>Before=whatever.service</strong>中的參數。</p><p>另外的一種選擇是(或許更加簡單)，創建一個包裝腳本來使用正確的順序來運行命令，並在你的service文件中使用這個腳本。</p><h4 id="timer-文件-1" tabindex="-1">Timer 文件 <a class="header-anchor" href="#timer-文件-1" aria-label="Permalink to “Timer 文件”">​</a></h4>`,4)),s("p",null,[e[9]||(e[9]=t("你只需要一個timer文件，創建",-1)),e[10]||(e[10]=s("strong",null,"mytimer.timer",-1)),e[11]||(e[11]=t("，像我在",-1)),i(r,{href:"4"},{default:n(()=>[...e[8]||(e[8]=[t("上面指出的",-1)])]),_:1}),e[12]||(e[12]=t("。",-1))]),e[27]||(e[27]=o(`<h4 id="target-文件" tabindex="-1">target 文件 <a class="header-anchor" href="#target-文件" aria-label="Permalink to “target 文件”">​</a></h4><p>你可以創建一個以上所有的腳本依賴的target文件。</p><p>mytimer.target</p><pre><code>[Unit]
Description=Mytimer
# Lots more stuff could go here, but it&#39;s situational.
# Look at systemd.unit man page.
</code></pre><h4 id="授權-啓動" tabindex="-1">授權 / 啓動 <a class="header-anchor" href="#授權-啓動" aria-label="Permalink to “授權 / 啓動”">​</a></h4><p>你需要將所有的service文件和timer文件授權。</p><pre><code>systemctl enable script1.service
systemctl enable script2.service
...
systemctl enable mytimer.timer
systemctl start mytimer.service
</code></pre><p>Good luck.</p><hr>`,9)),s("p",null,[e[14]||(e[14]=t("via: ",-1)),i(r,{href:"http://jason.the-graham.com/2013/03/06/how-to-use-systemd-timers/"},{default:n(()=>[...e[13]||(e[13]=[t("http://jason.the-graham.com/2013/03/06/how-to-use-systemd-timers/",-1)])]),_:1})]),s("p",null,[e[17]||(e[17]=t("作者：Jason Graham 譯者：",-1)),i(r,{href:"https://github.com/johnhoow"},{default:n(()=>[...e[15]||(e[15]=[t("johnhoow",-1)])]),_:1}),e[18]||(e[18]=t(" 校對：",-1)),i(r,{href:"https://github.com/wxy"},{default:n(()=>[...e[16]||(e[16]=[t("wxy",-1)])]),_:1})]),s("p",null,[e[21]||(e[21]=t("本文由 ",-1)),i(r,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[19]||(e[19]=[t("LCTT",-1)])]),_:1}),e[22]||(e[22]=t(" 原創翻譯，",-1)),i(r,{href:"http://linux.cn/"},{default:n(()=>[...e[20]||(e[20]=[t("Linux中國",-1)])]),_:1}),e[23]||(e[23]=t(" 榮譽推出",-1))])])}const x=a(d,[["render",y]]);export{S as __pageData,x as default};
