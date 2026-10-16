import{_ as p,a0 as i,w as s,s as l,ao as c,I as a,x as t,a1 as o,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"grep 命令系列：從文件中搜索並顯示文件名 | LCTT x X-CMD","titleTemplate":false,"description":"grep 命令系列：從文件中搜索並顯示文件名 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"grep 命令系列：從文件中搜索並顯示文件名 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"grep 命令系列：從文件中搜索並顯示文件名 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151127 Linux or UNIX grep Command Tutorial series 5--Grep From Files and Display the File Name","title":"grep 命令系列：從文件中搜索並顯示文件名","tag":"201601","desc":""},"relativePath":"201601/20151127 Linux or UNIX grep Command Tutorial series 5--Grep From Files and Display the File Name.md","filePath":"[post].md"}'),d={name:"201601/20151127 Linux or UNIX grep Command Tutorial series 5--Grep From Files and Display the File Name.md"};function m(u,e,g,f,b,T){const r=i("Link");return s(),l("div",null,[e[11]||(e[11]=c(`<h1 id="grep-命令系列-從文件中搜索並顯示文件名" tabindex="-1">grep 命令系列：從文件中搜索並顯示文件名 <a class="header-anchor" href="#grep-命令系列-從文件中搜索並顯示文件名" aria-label="Permalink to “grep 命令系列：從文件中搜索並顯示文件名”">​</a></h1><p>我怎樣從幾個文件中搜索（grep），並只顯示匹配到的文件的文件名？</p><p>當你從不止一個的文件中搜索時，默認它將顯示文件名：</p><pre><code>grep &quot;word&quot; 文件名
grep root /etc/*
</code></pre><p>示例輸出：</p><pre><code>/etc/bash.bashrc:       See &quot;man sudo_root&quot; for details.
/etc/crontab:17 *       * * *   root    cd / &amp;&amp; run-parts --report /etc/cron.hourly
/etc/crontab:25 6       * * *   root    test -x /usr/sbin/anacron || ( cd / &amp;&amp; run-parts --report /etc/cron.daily )
/etc/crontab:47 6       * * 7   root    test -x /usr/sbin/anacron || ( cd / &amp;&amp; run-parts --report /etc/cron.weekly )
/etc/crontab:52 6       1 * *   root    test -x /usr/sbin/anacron || ( cd / &amp;&amp; run-parts --report /etc/cron.monthly )
/etc/group:root:x:0:
grep: /etc/gshadow: Permission denied
/etc/logrotate.conf:    create 0664 root utmp
/etc/logrotate.conf:    create 0660 root utmp
</code></pre><p>每行開始的第一個部分是文件名（如：/etc/crontab、/etc/group）。使用 -l 選項可以只顯示文件名：</p><pre><code>grep -l &quot;string&quot; filename
grep -l root /etc/*
</code></pre><p>示例輸出：</p><pre><code>/etc/aliases
/etc/arpwatch.conf
grep: /etc/at.deny: Permission denied
/etc/bash.bashrc
/etc/bash_completion
/etc/ca-certificates.conf
/etc/crontab
/etc/group
</code></pre><p>你也可以逆轉輸出；使用 -L 選項來輸出<strong>那些不匹配的文件的文件名</strong>：</p><pre><code>grep -L &quot;word&quot; filename
grep -L root /etc/*
</code></pre><p>示例輸出：</p><pre><code>/etc/apm
/etc/apparmor
/etc/apparmor.d
/etc/apport
/etc/apt
/etc/avahi
/etc/bash_completion.d
/etc/bindresvport.blacklist
/etc/blkid.conf
/etc/bluetooth
/etc/bogofilter.cf
/etc/bonobo-activation
/etc/brlapi.key
</code></pre><hr>`,15)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),o(r,{href:"http://www.cyberciti.biz/faq/grep-from-files-and-display-the-file-name/"},{default:n(()=>[...e[0]||(e[0]=[t("http://www.cyberciti.biz/faq/grep-from-files-and-display-the-file-name/",-1)])]),_:1})]),a("p",null,[e[4]||(e[4]=t("作者：Vivek Gite 譯者：",-1)),o(r,{href:"https://github.com/wxy"},{default:n(()=>[...e[2]||(e[2]=[t("wxy",-1)])]),_:1}),e[5]||(e[5]=t(" 校對：",-1)),o(r,{href:"https://github.com/wxy"},{default:n(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[8]||(e[8]=t("本文由 ",-1)),o(r,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原創編譯，",-1)),o(r,{href:"https://linux.cn/"},{default:n(()=>[...e[7]||(e[7]=[t("Linux中國",-1)])]),_:1}),e[10]||(e[10]=t(" 榮譽推出",-1))])])}const C=p(d,[["render",m]]);export{h as __pageData,C as default};
