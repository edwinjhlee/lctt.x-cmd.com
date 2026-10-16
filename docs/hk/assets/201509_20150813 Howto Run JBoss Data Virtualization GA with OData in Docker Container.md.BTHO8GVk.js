import{_ as i,a0 as s,w as d,s as l,I as n,x as o,a1 as a,A as r,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"如何在 Docker 容器中運行支持 OData 的 JBoss 數據虛擬化 GA | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Docker 容器中運行支持 OData 的 JBoss 數據虛擬化 GA | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Docker 容器中運行支持 OData 的 JBoss 數據虛擬化 GA | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Docker 容器中運行支持 OData 的 JBoss 數據虛擬化 GA | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150813 Howto Run JBoss Data Virtualization GA with OData in Docker Container","title":"如何在 Docker 容器中運行支持 OData 的 JBoss 數據虛擬化 GA","tag":"201509","desc":""},"relativePath":"201509/20150813 Howto Run JBoss Data Virtualization GA with OData in Docker Container.md","filePath":"[post].md"}'),p={name:"201509/20150813 Howto Run JBoss Data Virtualization GA with OData in Docker Container.md"};function k(b,t,f,m,D,g){const e=s("Link");return d(),l("div",null,[t[33]||(t[33]=n("h1",{id:"如何在-docker-容器中運行支持-odata-的-jboss-數據虛擬化-ga",tabindex:"-1"},[o("如何在 Docker 容器中運行支持 OData 的 JBoss 數據虛擬化 GA "),n("a",{class:"header-anchor",href:"#如何在-docker-容器中運行支持-odata-的-jboss-數據虛擬化-ga","aria-label":"Permalink to “如何在 Docker 容器中運行支持 OData 的 JBoss 數據虛擬化 GA”"},"​")],-1)),n("p",null,[t[2]||(t[2]=o("大家好，我們今天來學習如何在一個 Docker 容器中運行支持 OData（譯者注：Open Data Protocol，開放數據協議） 的 JBoss 數據虛擬化 6.0.0 GA（譯者注：GA，General Availability，具體定義可以查看",-1)),a(e,{href:"https://en.wikipedia.org/wiki/Software_release_life_cycle#General_availability_.28GA.29"},{default:r(()=>[...t[0]||(t[0]=[o("WIKI",-1)])]),_:1}),t[3]||(t[3]=o("）。JBoss 數據虛擬化是數據提供和集成解決方案平台，將多種分散的數據源轉換為一種數據源統一對待，在正確的時間將所需數據傳遞給任意的應用或者用户。JBoss 數據虛擬化可以幫助我們將數據快速組合和轉換為可重用的商業友好的數據模型，通過開放標準接口簡單可用。它提供全面的數據抽取、聯合、集成、轉換，以及傳輸功能，將來自一個或多個源的數據組合為可重複使用和共享的靈活數據。要了解更多關於 JBoss 數據虛擬化的信息，可以查看它的",-1)),a(e,{href:"http://www.redhat.com/en/technologies/jboss-middleware/data-virtualization"},{default:r(()=>[...t[1]||(t[1]=[o("官方文檔",-1)])]),_:1}),t[4]||(t[4]=o("。Docker 是一個提供開放平台用於打包，裝載和以輕量級容器運行任何應用的開源平台。使用 Docker 容器我們可以輕鬆處理和啓用支持 OData 的 JBoss 數據虛擬化。",-1))]),t[34]||(t[34]=n("p",null,"下面是該指南中在 Docker 容器中運行支持 OData 的 JBoss 數據虛擬化的簡單步驟。",-1)),t[35]||(t[35]=n("h3",{id:"_1-克隆倉庫",tabindex:"-1"},[o("1. 克隆倉庫 "),n("a",{class:"header-anchor",href:"#_1-克隆倉庫","aria-label":"Permalink to “1. 克隆倉庫”"},"​")],-1)),n("p",null,[t[6]||(t[6]=o("首先，我們要用 git 命令從 ",-1)),a(e,{href:"https://github.com/jbossdemocentral/dv-odata-docker-integration-demo"},{default:r(()=>[...t[5]||(t[5]=[o("https://github.com/jbossdemocentral/dv-odata-docker-integration-demo",-1)])]),_:1}),t[7]||(t[7]=o(" 克隆帶數據虛擬化的 OData 倉庫。假設我們的機器上運行着 Ubuntu 15.04 linux 發行版。我們要使用 apt-get 命令安裝 git。",-1))]),t[36]||(t[36]=n("pre",null,[n("code",null,`# apt-get install git
`)],-1)),t[37]||(t[37]=n("p",null,"安裝完 git 之後，我們運行下面的命令克隆倉庫。",-1)),t[38]||(t[38]=n("pre",null,[n("code",null,`# git clone https://github.com/jbossdemocentral/dv-odata-docker-integration-demo

Cloning into 'dv-odata-docker-integration-demo'...
remote: Counting objects: 96, done.
remote: Total 96 (delta 0), reused 0 (delta 0), pack-reused 96
Unpacking objects: 100% (96/96), done.
Checking connectivity... done.
`)],-1)),t[39]||(t[39]=n("h3",{id:"_2-下載-jboss-數據虛擬化安裝器",tabindex:"-1"},[o("2. 下載 JBoss 數據虛擬化安裝器 "),n("a",{class:"header-anchor",href:"#_2-下載-jboss-數據虛擬化安裝器","aria-label":"Permalink to “2. 下載 JBoss 數據虛擬化安裝器”"},"​")],-1)),n("p",null,[t[9]||(t[9]=o("現在，我們需要從下載頁 ",-1)),a(e,{href:"http://www.jboss.org/products/datavirt/download/"},{default:r(()=>[...t[8]||(t[8]=[o("http://www.jboss.org/products/datavirt/download/",-1)])]),_:1}),t[10]||(t[10]=o(" 下載 JBoss 數據虛擬化安裝器。下載了 ",-1)),t[11]||(t[11]=n("strong",null,"jboss-dv-installer-6.0.0.GA-redhat-4.jar",-1)),t[12]||(t[12]=o(" 後，我們把它保存在名為 ",-1)),t[13]||(t[13]=n("strong",null,"software",-1)),t[14]||(t[14]=o(" 的目錄下。",-1))]),t[40]||(t[40]=u(`<h3 id="_3-創建-docker-鏡像" tabindex="-1">3. 創建 Docker 鏡像 <a class="header-anchor" href="#_3-創建-docker-鏡像" aria-label="Permalink to “3. 創建 Docker 鏡像”">​</a></h3><p>下一步，下載了 JBoss 數據虛擬化安裝器之後，我們打算使用 Dockerfile 和剛從倉庫中克隆的資源創建 docker 鏡像。</p><pre><code># cd dv-odata-docker-integration-demo/
# docker build -t jbossdv600 .

...
Step 22 : USER jboss
---&gt; Running in 129f701febd0
---&gt; 342941381e37
Removing intermediate container 129f701febd0
Step 23 : EXPOSE 8080 9990 31000
---&gt; Running in 61e6d2c26081
---&gt; 351159bb6280
Removing intermediate container 61e6d2c26081
Step 24 : CMD $JBOSS_HOME/bin/standalone.sh -c standalone.xml -b 0.0.0.0 -bmanagement 0.0.0.0
---&gt; Running in a9fed69b3000
---&gt; 407053dc470e
Removing intermediate container a9fed69b3000
Successfully built 407053dc470e
</code></pre><p>注意：在這裏我們假設你已經安裝了 docker 並正在運行。</p><h3 id="_4-啓動-docker-容器" tabindex="-1">4. 啓動 Docker 容器 <a class="header-anchor" href="#_4-啓動-docker-容器" aria-label="Permalink to “4. 啓動 Docker 容器”">​</a></h3><p>創建了支持 oData 的 JBoss 數據虛擬化 Docker 鏡像之後，我們打算運行 docker 容器並用 -P 標籤指定端口。我們運行下面的命令來實現。</p><pre><code># docker run -p 8080:8080 -d -t jbossdv600

7765dee9cd59c49ca26850e88f97c21f46859d2dc1d74166353d898773214c9c
</code></pre><h3 id="_5-獲取容器-ip" tabindex="-1">5. 獲取容器 IP <a class="header-anchor" href="#_5-獲取容器-ip" aria-label="Permalink to “5. 獲取容器 IP”">​</a></h3><p>啓動了 Docker 容器之後，我們想要獲取正在運行的 docker 容器的 IP 地址。要做到這點，我們運行後面添加了正在運行容器 id 號的 docker inspect 命令。</p><pre><code># docker inspect &lt;$containerID&gt;

...
&quot;NetworkSettings&quot;: {
&quot;Bridge&quot;: &quot;&quot;,
&quot;EndpointID&quot;: &quot;3e94c5900ac5954354a89591a8740ce2c653efde9232876bc94878e891564b39&quot;,
&quot;Gateway&quot;: &quot;172.17.42.1&quot;,
&quot;GlobalIPv6Address&quot;: &quot;&quot;,
&quot;GlobalIPv6PrefixLen&quot;: 0,
&quot;HairpinMode&quot;: false,
&quot;IPAddress&quot;: &quot;172.17.0.8&quot;,
&quot;IPPrefixLen&quot;: 16,
&quot;IPv6Gateway&quot;: &quot;&quot;,
&quot;LinkLocalIPv6Address&quot;: &quot;&quot;,
&quot;LinkLocalIPv6PrefixLen&quot;: 0,
</code></pre><h3 id="_6-web-界面" tabindex="-1">6. Web 界面 <a class="header-anchor" href="#_6-web-界面" aria-label="Permalink to “6. Web 界面”">​</a></h3>`,11)),n("p",null,[t[17]||(t[17]=o("現在，如果一切如期望的那樣進行，當我們用瀏覽器打開 ",-1)),a(e,{href:"http://container-ip:8080/"},{default:r(()=>[...t[15]||(t[15]=[o("http://container-ip:8080/",-1)])]),_:1}),t[18]||(t[18]=o(" 和 ",-1)),a(e,{href:"http://container-ip:9990"},{default:r(()=>[...t[16]||(t[16]=[o("http://container-ip:9990",-1)])]),_:1}),t[19]||(t[19]=o(" 時會看到支持 oData 的 JBoss 數據虛擬化登錄界面和 JBoss 管理界面。管理驗證的用户名和密碼分別是 admin 和 redhat1！數據虛擬化驗證的用户名和密碼都是 user。之後，我們可以通過 web 界面在內容間導航。",-1))]),t[41]||(t[41]=n("p",null,[n("strong",null,"注意"),o("： 強烈建議在第一次登錄後儘快修改密碼。")],-1)),t[42]||(t[42]=n("h3",{id:"總結",tabindex:"-1"},[o("總結 "),n("a",{class:"header-anchor",href:"#總結","aria-label":"Permalink to “總結”"},"​")],-1)),t[43]||(t[43]=n("p",null,"終於我們成功地運行了跑着支持 OData 多源虛擬資料庫的 JBoss 數據虛擬化 的 Docker 容器。JBoss 數據虛擬化真的是一個很棒的平台，它為多種不同來源的數據進行虛擬化，並將它們轉換為商業友好的數據模型，產生通過開放標準接口簡單可用的數據。使用 Docker 技術可以簡單、安全、快速地部署支持 OData 多源虛擬資料庫的 JBoss 數據虛擬化。如果你有任何疑問、建議或者反饋，請在下面的評論框中寫下來，以便我們可以改進和更新內容。非常感謝！Enjoy:-)",-1)),t[44]||(t[44]=n("hr",null,null,-1)),n("p",null,[t[21]||(t[21]=o("via: ",-1)),a(e,{href:"http://linoxide.com/linux-how-to/run-jboss-data-virtualization-ga-odata-docker-container/"},{default:r(()=>[...t[20]||(t[20]=[o("http://linoxide.com/linux-how-to/run-jboss-data-virtualization-ga-odata-docker-container/",-1)])]),_:1})]),n("p",null,[t[25]||(t[25]=o("作者：",-1)),a(e,{href:"http://linoxide.com/author/arunp/"},{default:r(()=>[...t[22]||(t[22]=[o("Arun Pyasi",-1)])]),_:1}),t[26]||(t[26]=o(" 譯者：",-1)),a(e,{href:"http://www.mutouxiaogui.cn/blog"},{default:r(()=>[...t[23]||(t[23]=[o("ictlyh",-1)])]),_:1}),t[27]||(t[27]=o(" 校對：",-1)),a(e,{href:"https://github.com/wxy"},{default:r(()=>[...t[24]||(t[24]=[o("wxy",-1)])]),_:1})]),n("p",null,[t[30]||(t[30]=o("本文由 ",-1)),a(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[28]||(t[28]=[o("LCTT",-1)])]),_:1}),t[31]||(t[31]=o(" 原創翻譯，",-1)),a(e,{href:"https://linux.cn/"},{default:r(()=>[...t[29]||(t[29]=[o("Linux中國",-1)])]),_:1}),t[32]||(t[32]=o(" 榮譽推出",-1))])])}const B=i(p,[["render",k]]);export{x as __pageData,B as default};
