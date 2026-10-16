import{_ as a,a0 as m,w as l,s as p,I as s,x as t,a1 as i,A as n,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"如何使用 systemd 中的定时器 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 systemd 中的定时器 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 systemd 中的定时器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 systemd 中的定时器 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140928 How to Use Systemd Timers","title":"如何使用 systemd 中的定时器","tag":"201410","desc":""},"relativePath":"201410/20140928 How to Use Systemd Timers.md","filePath":"[post].md"}'),d={name:"201410/20140928 How to Use Systemd Timers.md"};function y(u,e,g,T,h,f){const r=m("Link");return l(),p("div",null,[e[24]||(e[24]=s("h1",{id:"如何使用-systemd-中的定时器",tabindex:"-1"},[t("如何使用 systemd 中的定时器 "),s("a",{class:"header-anchor",href:"#如何使用-systemd-中的定时器","aria-label":"Permalink to “如何使用 systemd 中的定时器”"},"​")],-1)),s("p",null,[e[2]||(e[2]=t("我最近在写一些执行备份工作的脚本，我决定使用",-1)),i(r,{href:"https://fedoraproject.org/wiki/User:Johannbg/QA/Systemd/Systemd.timer"},{default:n(()=>[...e[0]||(e[0]=[t("systemd timers",-1)])]),_:1}),e[3]||(e[3]=t("而不是对我而已更熟悉的",-1)),i(r,{href:"https://en.wikipedia.org/wiki/Cron"},{default:n(()=>[...e[1]||(e[1]=[t("cron jobs",-1)])]),_:1}),e[4]||(e[4]=t("来管理它们。",-1))]),e[25]||(e[25]=o(`<p>在我使用时，出现了很多问题需要我去各个地方找资料，这个过程非常麻烦。因此，我想要把我目前所做的记录下来，方便自己的记忆，也方便读者不必像我这样，满世界的找资料了。</p><p>在我下面提到的步骤中有其他的选择，但是这里是最简单的方法。在此之前，请查看<strong>systemd.service</strong>, <strong>systemd.timer</strong>,和<strong>systemd.target</strong>的帮助页面(man)，学习你能用它们做些什么。</p><h3 id="运行一个简单的脚本" tabindex="-1">运行一个简单的脚本 <a class="header-anchor" href="#运行一个简单的脚本" aria-label="Permalink to “运行一个简单的脚本”">​</a></h3><p>假设你有一个脚本叫：<strong>/usr/local/bin/myscript</strong> ，你想要每隔一小时就运行一次。</p><h4 id="service-文件" tabindex="-1">Service 文件 <a class="header-anchor" href="#service-文件" aria-label="Permalink to “Service 文件”">​</a></h4><p>第一步，创建一个service文件，根据你Linux的发行版本放到相应的系统目录(在Arch中，这个目录是<strong>/etc/systemd/system/</strong> 或 <strong>/usr/lib/systemd/system</strong>)</p><p>myscript.service</p><pre><code>[Unit]
Description=MyScript

[Service]
Type=simple
ExecStart=/usr/local/bin/myscript
</code></pre><p>注意，务必将<strong>Type</strong>变量的值设置为&quot;simple&quot;而不是&quot;oneshot&quot;。使用&quot;oneshot&quot;使得脚本只在第一次运行，之后系统会认为你不想再次运行它，从而关掉我们接下去创建的定时器(Timer)。</p><h4 id="timer-文件" tabindex="-1">Timer 文件 <a class="header-anchor" href="#timer-文件" aria-label="Permalink to “Timer 文件”">​</a></h4><p>第二步，创建一个timer文件，把它放在第一步中service文件放置的目录。</p><p>myscript.timer</p><pre><code>[Unit]
Description=Runs myscript every hour

[Timer]
# 首次运行要在启动后10分钟后 
OnBootSec=10min
# 每次运行间隔时间
OnUnitActiveSec=1h
Unit=myscript.service

[Install]
WantedBy=multi-user.target
</code></pre><h4 id="授权-运行" tabindex="-1">授权 / 运行 <a class="header-anchor" href="#授权-运行" aria-label="Permalink to “授权 / 运行”">​</a></h4><p>授权并运行的是timer文件，而不是service文件。</p><pre><code># 以 root 身份启动定时器
systemctl start myscript.timer
# 在系统引导起来后就启用该定时器 
systemctl enable myscript.timer
</code></pre><h3 id="在同一个timer上运行多个脚本" tabindex="-1">在同一个Timer上运行多个脚本 <a class="header-anchor" href="#在同一个timer上运行多个脚本" aria-label="Permalink to “在同一个Timer上运行多个脚本”">​</a></h3><p>现在我们假设你在相同时间想要运行多个脚本。这种情况，<strong>你需要在上面的文件中做适当的修改</strong>。</p><h4 id="service-文件-1" tabindex="-1">Service 文件 <a class="header-anchor" href="#service-文件-1" aria-label="Permalink to “Service 文件”">​</a></h4>`,19)),s("p",null,[e[6]||(e[6]=t("像我",-1)),i(r,{href:"http://jason.the-graham.com/2013/03/06/how-to-use-systemd-timers/#service-file"},{default:n(()=>[...e[5]||(e[5]=[t("之前说过的",-1)])]),_:1}),e[7]||(e[7]=t("那样创建你的service文件来运行你的脚本，但是在每个service 文件最后都要包含下面的内容:",-1))]),e[26]||(e[26]=o(`<pre><code>[Install]
WantedBy=mytimer.target
</code></pre><p>如果在你的service 文件中有一些依赖顺序，确保你使用<strong>Description</strong>字段中的值具体指定<strong>After=something.service</strong>和<strong>Before=whatever.service</strong>中的参数。</p><p>另外的一种选择是(或许更加简单)，创建一个包装脚本来使用正确的顺序来运行命令，并在你的service文件中使用这个脚本。</p><h4 id="timer-文件-1" tabindex="-1">Timer 文件 <a class="header-anchor" href="#timer-文件-1" aria-label="Permalink to “Timer 文件”">​</a></h4>`,4)),s("p",null,[e[9]||(e[9]=t("你只需要一个timer文件，创建",-1)),e[10]||(e[10]=s("strong",null,"mytimer.timer",-1)),e[11]||(e[11]=t("，像我在",-1)),i(r,{href:"4"},{default:n(()=>[...e[8]||(e[8]=[t("上面指出的",-1)])]),_:1}),e[12]||(e[12]=t("。",-1))]),e[27]||(e[27]=o(`<h4 id="target-文件" tabindex="-1">target 文件 <a class="header-anchor" href="#target-文件" aria-label="Permalink to “target 文件”">​</a></h4><p>你可以创建一个以上所有的脚本依赖的target文件。</p><p>mytimer.target</p><pre><code>[Unit]
Description=Mytimer
# Lots more stuff could go here, but it&#39;s situational.
# Look at systemd.unit man page.
</code></pre><h4 id="授权-启动" tabindex="-1">授权 / 启动 <a class="header-anchor" href="#授权-启动" aria-label="Permalink to “授权 / 启动”">​</a></h4><p>你需要将所有的service文件和timer文件授权。</p><pre><code>systemctl enable script1.service
systemctl enable script2.service
...
systemctl enable mytimer.timer
systemctl start mytimer.service
</code></pre><p>Good luck.</p><hr>`,9)),s("p",null,[e[14]||(e[14]=t("via: ",-1)),i(r,{href:"http://jason.the-graham.com/2013/03/06/how-to-use-systemd-timers/"},{default:n(()=>[...e[13]||(e[13]=[t("http://jason.the-graham.com/2013/03/06/how-to-use-systemd-timers/",-1)])]),_:1})]),s("p",null,[e[17]||(e[17]=t("作者：Jason Graham 译者：",-1)),i(r,{href:"https://github.com/johnhoow"},{default:n(()=>[...e[15]||(e[15]=[t("johnhoow",-1)])]),_:1}),e[18]||(e[18]=t(" 校对：",-1)),i(r,{href:"https://github.com/wxy"},{default:n(()=>[...e[16]||(e[16]=[t("wxy",-1)])]),_:1})]),s("p",null,[e[21]||(e[21]=t("本文由 ",-1)),i(r,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[19]||(e[19]=[t("LCTT",-1)])]),_:1}),e[22]||(e[22]=t(" 原创翻译，",-1)),i(r,{href:"http://linux.cn/"},{default:n(()=>[...e[20]||(e[20]=[t("Linux中国",-1)])]),_:1}),e[23]||(e[23]=t(" 荣誉推出",-1))])])}const x=a(d,[["render",y]]);export{S as __pageData,x as default};
