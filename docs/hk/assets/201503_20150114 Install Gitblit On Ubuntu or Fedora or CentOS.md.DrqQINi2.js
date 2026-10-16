import{_ as s,a0 as l,w as d,s as p,I as n,x as i,a1 as r,A as o,ao as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"在Ubuntu/Fedora/CentOS中安裝Gitblit | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu/Fedora/CentOS中安裝Gitblit | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu/Fedora/CentOS中安裝Gitblit | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu/Fedora/CentOS中安裝Gitblit | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150114 Install Gitblit On Ubuntu or Fedora or CentOS","title":"在Ubuntu/Fedora/CentOS中安裝Gitblit","tag":"201503","desc":""},"relativePath":"201503/20150114 Install Gitblit On Ubuntu or Fedora or CentOS.md","filePath":"[post].md"}'),g={name:"201503/20150114 Install Gitblit On Ubuntu or Fedora or CentOS.md"};function u(b,t,m,I,F,O){const e=l("Link");return d(),p("div",null,[t[27]||(t[27]=n("h1",{id:"在ubuntu-fedora-centos中安裝gitblit",tabindex:"-1"},[i("在Ubuntu/Fedora/CentOS中安裝Gitblit "),n("a",{class:"header-anchor",href:"#在ubuntu-fedora-centos中安裝gitblit","aria-label":"Permalink to “在Ubuntu/Fedora/CentOS中安裝Gitblit”"},"​")],-1)),t[28]||(t[28]=n("p",null,[n("strong",null,"Git"),i("是一款注重速度、數據完整性、分佈式支持和非線性工作流的分佈式版本控制工具。Git最初由Linus Torvalds在2005年為Linux內核開發而設計，如今已經成為被廣泛接受的版本控制系統。")],-1)),t[29]||(t[29]=n("p",null,"和其他大多數分佈式版本控制系統比起來，不像大多數客户端-服務端的系統，每個Git工作目錄是一個完整的倉庫，帶有完整的歷史記錄和完整的版本跟蹤能力，不需要依賴網絡或者中心服務器。像Linux內核一樣，Git也是在GPLv2許可證下分發的自由軟件。",-1)),n("p",null,[t[2]||(t[2]=i("本篇教程我會演示如何安裝 gitlit 服務器。gitlit的最新穩定版是1.6.2。",-1)),r(e,{href:"http://gitblit.com/"},{default:o(()=>[...t[0]||(t[0]=[i("Gitblit",-1)])]),_:1}),t[3]||(t[3]=i("是一款開源、純Java開發的用於管理、瀏覽和提供",-1)),r(e,{href:"http://git-scm.com/"},{default:o(()=>[...t[1]||(t[1]=[i("Git",-1)])]),_:1}),t[4]||(t[4]=i("倉庫服務的軟件。它被設計成一款為希望託管中心倉庫的小型工作組服務的工具。",-1))]),t[30]||(t[30]=a(`<pre><code>mkdir -p /opt/gitblit; cd /opt/gitblit; wget http://dl.bintray.com/gitblit/releases/gitblit-1.6.2.tar.gz
</code></pre><h3 id="列出解壓後目錄內容" tabindex="-1">列出解壓後目錄內容： <a class="header-anchor" href="#列出解壓後目錄內容" aria-label="Permalink to “列出解壓後目錄內容：”">​</a></h3><pre><code>root@vps124229 [/opt/gitblit]# ls
./                      docs/                 gitblit-stop.sh*            LICENSE              service-ubuntu.sh*
../                     ext/                  install-service-centos.sh*  migrate-tickets.sh*
add-indexed-branch.sh*  gitblit-1.6.2.tar.gz  install-service-fedora.sh*  NOTICE
authority.sh*           gitblit.jar           install-service-ubuntu.sh*  reindex-tickets.sh*
data/                   gitblit.sh*           java-proxy-config.sh*       service-centos.sh*
</code></pre><p>默認配置文件在data/gitblit.properties，你可以根據需要自己修改。</p><h3 id="啓動gitlit服務" tabindex="-1">啓動gitlit服務： <a class="header-anchor" href="#啓動gitlit服務" aria-label="Permalink to “啓動gitlit服務：”">​</a></h3><p><strong>通過service命令：</strong></p><pre><code>root@vps124229 [/opt/gitblit]# cp service-centos.sh /etc/init.d/gitblit
root@vps124229 [/opt/gitblit]# chkconfig --add gitblit
root@vps124229 [/opt/gitblit]# service gitblit  start
Starting gitblit server
.
</code></pre><p><strong>手動啓動：</strong></p><pre><code>root@vps124229 [/opt/gitblit]# java -jar gitblit.jar --baseFolder data
2015-01-10 09:16:53 [INFO ] *****************************************************************
2015-01-10 09:16:53 [INFO ]             _____  _  _    _      _  _  _
2015-01-10 09:16:53 [INFO ]            |  __ \\(_)| |  | |    | |(_)| |
2015-01-10 09:16:53 [INFO ]            | |  \\/ _ | |_ | |__  | | _ | |_
2015-01-10 09:16:53 [INFO ]            | | __ | || __|| &#39;_ \\ | || || __|
2015-01-10 09:16:53 [INFO ]            | |_\\ \\| || |_ | |_) || || || |_
2015-01-10 09:16:53 [INFO ]             \\____/|_| \\__||_.__/ |_||_| \\__|
2015-01-10 09:16:53 [INFO ]                          Gitblit v1.6.2
2015-01-10 09:16:53 [INFO ] 
2015-01-10 09:16:53 [INFO ] *****************************************************************
2015-01-10 09:16:53 [INFO ] Running on Linux (3.8.13-xxxx-grs-ipv6-64-vps)
2015-01-10 09:16:53 [INFO ] Logging initialized @842ms
2015-01-10 09:16:54 [INFO ] Using JCE Unlimited Strength Jurisdiction Policy files
2015-01-10 09:16:54 [INFO ] Setting up HTTPS transport on port 8443
2015-01-10 09:16:54 [INFO ]    certificate alias = localhost
2015-01-10 09:16:54 [INFO ]    keyStorePath   = /opt/gitblit/data/serverKeyStore.jks
2015-01-10 09:16:54 [INFO ]    trustStorePath = /opt/gitblit/data/serverTrustStore.jks
2015-01-10 09:16:54 [INFO ]    crlPath        = /opt/gitblit/data/certs/caRevocationList.crl
2015-01-10 09:16:54 [INFO ] Shutdown Monitor listening on port 8081
2015-01-10 09:16:54 [INFO ] jetty-9.2.3.v20140905
2015-01-10 09:16:55 [INFO ] NO JSP Support for /, did not find org.apache.jasper.servlet.JspServlet
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] ----[com.gitblit.manager.IRuntimeManager]----
2015-01-10 09:16:55 [INFO ] Basefolder  : /opt/gitblit/data
2015-01-10 09:16:55 [INFO ] Settings    : /opt/gitblit/data/gitblit.properties
2015-01-10 09:16:55 [INFO ] JVM timezone: America/Montreal (EST -0500)
2015-01-10 09:16:55 [INFO ] App timezone: America/Montreal (EST -0500)
2015-01-10 09:16:55 [INFO ] JVM locale  : en_US
2015-01-10 09:16:55 [INFO ] App locale  : &lt;client&gt;
2015-01-10 09:16:55 [INFO ] PF4J runtime mode is &#39;deployment&#39;
2015-01-10 09:16:55 [INFO ] Enabled plugins: []
2015-01-10 09:16:55 [INFO ] Disabled plugins: []
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] ----[com.gitblit.manager.INotificationManager]----
2015-01-10 09:16:55 [WARN ] Mail service disabled.
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] ----[com.gitblit.manager.IUserManager]----
2015-01-10 09:16:55 [INFO ] ConfigUserService(/opt/gitblit/data/users.conf)
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] ----[com.gitblit.manager.IAuthenticationManager]----
2015-01-10 09:16:55 [INFO ] External authentication disabled.
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] ----    [com.gitblit.transport.ssh.IPublicKeyManager]----
2015-01-10 09:16:55 [INFO ] FileKeyManager (/opt/gitblit/data/ssh)
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] ----[com.gitblit.manager.IRepositoryManager]----
2015-01-10 09:16:55 [INFO ] Repositories folder : /opt/gitblit/data/git
2015-01-10 09:16:55 [INFO ] Identifying repositories...
2015-01-10 09:16:55 [INFO ] 0 repositories identified with calculated folder sizes in 11 msecs
2015-01-10 09:16:55 [INFO ] Lucene will process indexed branches every 2 minutes.
2015-01-10 09:16:55 [INFO ] Garbage Collector (GC) is disabled.
2015-01-10 09:16:55 [INFO ] Mirror service is disabled.
2015-01-10 09:16:55 [INFO ] Alias UTF-9 &amp; UTF-18 encodings as UTF-8 in JGit
2015-01-10 09:16:55 [INFO ] Preparing 14 day commit cache. please wait...
2015-01-10 09:16:55 [INFO ] 0 repositories identified with calculated folder sizes in 0 msecs
2015-01-10 09:16:55 [INFO ] built 14 day commit cache of 0 commits across 0 repositories in 2 msecs
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] ----[com.gitblit.manager.IProjectManager]----
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] ----[com.gitblit.manager.IFederationManager]----
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] ----[com.gitblit.manager.IGitblit]----
2015-01-10 09:16:55 [INFO ] Starting services manager...
2015-01-10 09:16:55 [INFO ] Federation passphrase is blank! This server can not be PULLED from.
2015-01-10 09:16:55 [INFO ] Fanout PubSub service is disabled.
2015-01-10 09:16:55 [INFO ] Git Daemon is listening on 0.0.0.0:9418
2015-01-10 09:16:55 [INFO ] SSH Daemon (NIO2) is listening on 0.0.0.0:29418
2015-01-10 09:16:55 [WARN ] No ticket service configured.
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] ----[com.gitblit.manager.IPluginManager]----
2015-01-10 09:16:55 [INFO ] No plugins
2015-01-10 09:16:55 [INFO ] 
2015-01-10 09:16:55 [INFO ] All managers started.
</code></pre>`,9)),n("p",null,[t[7]||(t[7]=i("打開瀏覽器，依據你的配置進入",-1)),n("strong",null,[r(e,{href:"http://localhost:8080"},{default:o(()=>[...t[5]||(t[5]=[i("http://localhost:8080",-1)])]),_:1})]),t[8]||(t[8]=i(" 或者 ",-1)),n("strong",null,[r(e,{href:"https://localhost:8443"},{default:o(()=>[...t[6]||(t[6]=[i("https://localhost:8443",-1)])]),_:1})]),t[9]||(t[9]=i("。 輸入默認的管理員授權：",-1)),t[10]||(t[10]=n("strong",null,"admin / admin",-1)),t[11]||(t[11]=i(" 並點擊",-1)),t[12]||(t[12]=n("strong",null,"Login",-1)),t[13]||(t[13]=i(" 按鈕",-1))]),t[31]||(t[31]=a(`<p><img src="http://1102047360.rsc.cdn77.org/wp-content/uploads/2015/01/snapshot2.png" alt="snapshot2"></p><h3 id="添加用户" tabindex="-1">添加用户： <a class="header-anchor" href="#添加用户" aria-label="Permalink to “添加用户：”">​</a></h3><p><img src="http://1102047360.rsc.cdn77.org/wp-content/uploads/2015/01/snapshot1.png" alt="snapshot1"></p><p>###添加倉庫：###</p><p><img src="http://1102047360.rsc.cdn77.org/wp-content/uploads/2015/01/snapshot3.png" alt="snapshot3"></p><h3 id="用命令列創建新的倉庫" tabindex="-1">用命令列創建新的倉庫： <a class="header-anchor" href="#用命令列創建新的倉庫" aria-label="Permalink to “用命令列創建新的倉庫：”">​</a></h3><pre><code>touch README.md
git init
git add README.md
git commit -m &quot;first commit&quot;
git remote add origin ssh://admin@142.4.202.70:29418/Programming.git
git push -u origin master
</code></pre><h3 id="從命令列推送已有的倉庫" tabindex="-1">從命令列推送已有的倉庫： <a class="header-anchor" href="#從命令列推送已有的倉庫" aria-label="Permalink to “從命令列推送已有的倉庫：”">​</a></h3><pre><code>git remote add origin ssh://admin@142.4.202.70:29418/Programming.git
git push -u origin master
</code></pre><p>完成！</p><hr>`,11)),n("p",null,[t[15]||(t[15]=i("via: ",-1)),r(e,{href:"http://www.unixmen.com/install-gitblit-ubuntu-fedora-centos/"},{default:o(()=>[...t[14]||(t[14]=[i("http://www.unixmen.com/install-gitblit-ubuntu-fedora-centos/",-1)])]),_:1})]),n("p",null,[t[19]||(t[19]=i("作者：",-1)),r(e,{href:"http://www.unixmen.com/author/pirat9/"},{default:o(()=>[...t[16]||(t[16]=[i("M.el Khamlichi",-1)])]),_:1}),t[20]||(t[20]=i(" 譯者：",-1)),r(e,{href:"https://github.com/geekpi"},{default:o(()=>[...t[17]||(t[17]=[i("geekpi",-1)])]),_:1}),t[21]||(t[21]=i(" 校對：",-1)),r(e,{href:"https://github.com/wxy"},{default:o(()=>[...t[18]||(t[18]=[i("wxy",-1)])]),_:1})]),n("p",null,[t[24]||(t[24]=i("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[22]||(t[22]=[i("LCTT",-1)])]),_:1}),t[25]||(t[25]=i(" 原創翻譯，",-1)),r(e,{href:"http://linux.cn/"},{default:o(()=>[...t[23]||(t[23]=[i("Linux中國",-1)])]),_:1}),t[26]||(t[26]=i(" 榮譽推出",-1))])])}const S=s(g,[["render",u]]);export{h as __pageData,S as default};
