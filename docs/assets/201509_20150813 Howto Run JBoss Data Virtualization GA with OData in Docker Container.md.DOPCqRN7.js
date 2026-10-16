import{_ as i,a0 as s,w as d,s as l,I as n,x as o,a1 as a,A as r,ao as u}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"如何在 Docker 容器中运行支持 OData 的 JBoss 数据虚拟化 GA | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Docker 容器中运行支持 OData 的 JBoss 数据虚拟化 GA | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Docker 容器中运行支持 OData 的 JBoss 数据虚拟化 GA | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Docker 容器中运行支持 OData 的 JBoss 数据虚拟化 GA | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150813 Howto Run JBoss Data Virtualization GA with OData in Docker Container","title":"如何在 Docker 容器中运行支持 OData 的 JBoss 数据虚拟化 GA","tag":"201509","desc":""},"relativePath":"201509/20150813 Howto Run JBoss Data Virtualization GA with OData in Docker Container.md","filePath":"[post].md"}'),p={name:"201509/20150813 Howto Run JBoss Data Virtualization GA with OData in Docker Container.md"};function k(b,t,f,m,D,g){const e=s("Link");return d(),l("div",null,[t[33]||(t[33]=n("h1",{id:"如何在-docker-容器中运行支持-odata-的-jboss-数据虚拟化-ga",tabindex:"-1"},[o("如何在 Docker 容器中运行支持 OData 的 JBoss 数据虚拟化 GA "),n("a",{class:"header-anchor",href:"#如何在-docker-容器中运行支持-odata-的-jboss-数据虚拟化-ga","aria-label":"Permalink to “如何在 Docker 容器中运行支持 OData 的 JBoss 数据虚拟化 GA”"},"​")],-1)),n("p",null,[t[2]||(t[2]=o("大家好，我们今天来学习如何在一个 Docker 容器中运行支持 OData（译者注：Open Data Protocol，开放数据协议） 的 JBoss 数据虚拟化 6.0.0 GA（译者注：GA，General Availability，具体定义可以查看",-1)),a(e,{href:"https://en.wikipedia.org/wiki/Software_release_life_cycle#General_availability_.28GA.29"},{default:r(()=>[...t[0]||(t[0]=[o("WIKI",-1)])]),_:1}),t[3]||(t[3]=o("）。JBoss 数据虚拟化是数据提供和集成解决方案平台，将多种分散的数据源转换为一种数据源统一对待，在正确的时间将所需数据传递给任意的应用或者用户。JBoss 数据虚拟化可以帮助我们将数据快速组合和转换为可重用的商业友好的数据模型，通过开放标准接口简单可用。它提供全面的数据抽取、联合、集成、转换，以及传输功能，将来自一个或多个源的数据组合为可重复使用和共享的灵活数据。要了解更多关于 JBoss 数据虚拟化的信息，可以查看它的",-1)),a(e,{href:"http://www.redhat.com/en/technologies/jboss-middleware/data-virtualization"},{default:r(()=>[...t[1]||(t[1]=[o("官方文档",-1)])]),_:1}),t[4]||(t[4]=o("。Docker 是一个提供开放平台用于打包，装载和以轻量级容器运行任何应用的开源平台。使用 Docker 容器我们可以轻松处理和启用支持 OData 的 JBoss 数据虚拟化。",-1))]),t[34]||(t[34]=n("p",null,"下面是该指南中在 Docker 容器中运行支持 OData 的 JBoss 数据虚拟化的简单步骤。",-1)),t[35]||(t[35]=n("h3",{id:"_1-克隆仓库",tabindex:"-1"},[o("1. 克隆仓库 "),n("a",{class:"header-anchor",href:"#_1-克隆仓库","aria-label":"Permalink to “1. 克隆仓库”"},"​")],-1)),n("p",null,[t[6]||(t[6]=o("首先，我们要用 git 命令从 ",-1)),a(e,{href:"https://github.com/jbossdemocentral/dv-odata-docker-integration-demo"},{default:r(()=>[...t[5]||(t[5]=[o("https://github.com/jbossdemocentral/dv-odata-docker-integration-demo",-1)])]),_:1}),t[7]||(t[7]=o(" 克隆带数据虚拟化的 OData 仓库。假设我们的机器上运行着 Ubuntu 15.04 linux 发行版。我们要使用 apt-get 命令安装 git。",-1))]),t[36]||(t[36]=n("pre",null,[n("code",null,`# apt-get install git
`)],-1)),t[37]||(t[37]=n("p",null,"安装完 git 之后，我们运行下面的命令克隆仓库。",-1)),t[38]||(t[38]=n("pre",null,[n("code",null,`# git clone https://github.com/jbossdemocentral/dv-odata-docker-integration-demo

Cloning into 'dv-odata-docker-integration-demo'...
remote: Counting objects: 96, done.
remote: Total 96 (delta 0), reused 0 (delta 0), pack-reused 96
Unpacking objects: 100% (96/96), done.
Checking connectivity... done.
`)],-1)),t[39]||(t[39]=n("h3",{id:"_2-下载-jboss-数据虚拟化安装器",tabindex:"-1"},[o("2. 下载 JBoss 数据虚拟化安装器 "),n("a",{class:"header-anchor",href:"#_2-下载-jboss-数据虚拟化安装器","aria-label":"Permalink to “2. 下载 JBoss 数据虚拟化安装器”"},"​")],-1)),n("p",null,[t[9]||(t[9]=o("现在，我们需要从下载页 ",-1)),a(e,{href:"http://www.jboss.org/products/datavirt/download/"},{default:r(()=>[...t[8]||(t[8]=[o("http://www.jboss.org/products/datavirt/download/",-1)])]),_:1}),t[10]||(t[10]=o(" 下载 JBoss 数据虚拟化安装器。下载了 ",-1)),t[11]||(t[11]=n("strong",null,"jboss-dv-installer-6.0.0.GA-redhat-4.jar",-1)),t[12]||(t[12]=o(" 后，我们把它保存在名为 ",-1)),t[13]||(t[13]=n("strong",null,"software",-1)),t[14]||(t[14]=o(" 的目录下。",-1))]),t[40]||(t[40]=u(`<h3 id="_3-创建-docker-镜像" tabindex="-1">3. 创建 Docker 镜像 <a class="header-anchor" href="#_3-创建-docker-镜像" aria-label="Permalink to “3. 创建 Docker 镜像”">​</a></h3><p>下一步，下载了 JBoss 数据虚拟化安装器之后，我们打算使用 Dockerfile 和刚从仓库中克隆的资源创建 docker 镜像。</p><pre><code># cd dv-odata-docker-integration-demo/
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
</code></pre><p>注意：在这里我们假设你已经安装了 docker 并正在运行。</p><h3 id="_4-启动-docker-容器" tabindex="-1">4. 启动 Docker 容器 <a class="header-anchor" href="#_4-启动-docker-容器" aria-label="Permalink to “4. 启动 Docker 容器”">​</a></h3><p>创建了支持 oData 的 JBoss 数据虚拟化 Docker 镜像之后，我们打算运行 docker 容器并用 -P 标签指定端口。我们运行下面的命令来实现。</p><pre><code># docker run -p 8080:8080 -d -t jbossdv600

7765dee9cd59c49ca26850e88f97c21f46859d2dc1d74166353d898773214c9c
</code></pre><h3 id="_5-获取容器-ip" tabindex="-1">5. 获取容器 IP <a class="header-anchor" href="#_5-获取容器-ip" aria-label="Permalink to “5. 获取容器 IP”">​</a></h3><p>启动了 Docker 容器之后，我们想要获取正在运行的 docker 容器的 IP 地址。要做到这点，我们运行后面添加了正在运行容器 id 号的 docker inspect 命令。</p><pre><code># docker inspect &lt;$containerID&gt;

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
</code></pre><h3 id="_6-web-界面" tabindex="-1">6. Web 界面 <a class="header-anchor" href="#_6-web-界面" aria-label="Permalink to “6. Web 界面”">​</a></h3>`,11)),n("p",null,[t[17]||(t[17]=o("现在，如果一切如期望的那样进行，当我们用浏览器打开 ",-1)),a(e,{href:"http://container-ip:8080/"},{default:r(()=>[...t[15]||(t[15]=[o("http://container-ip:8080/",-1)])]),_:1}),t[18]||(t[18]=o(" 和 ",-1)),a(e,{href:"http://container-ip:9990"},{default:r(()=>[...t[16]||(t[16]=[o("http://container-ip:9990",-1)])]),_:1}),t[19]||(t[19]=o(" 时会看到支持 oData 的 JBoss 数据虚拟化登录界面和 JBoss 管理界面。管理验证的用户名和密码分别是 admin 和 redhat1！数据虚拟化验证的用户名和密码都是 user。之后，我们可以通过 web 界面在内容间导航。",-1))]),t[41]||(t[41]=n("p",null,[n("strong",null,"注意"),o("： 强烈建议在第一次登录后尽快修改密码。")],-1)),t[42]||(t[42]=n("h3",{id:"总结",tabindex:"-1"},[o("总结 "),n("a",{class:"header-anchor",href:"#总结","aria-label":"Permalink to “总结”"},"​")],-1)),t[43]||(t[43]=n("p",null,"终于我们成功地运行了跑着支持 OData 多源虚拟数据库的 JBoss 数据虚拟化 的 Docker 容器。JBoss 数据虚拟化真的是一个很棒的平台，它为多种不同来源的数据进行虚拟化，并将它们转换为商业友好的数据模型，产生通过开放标准接口简单可用的数据。使用 Docker 技术可以简单、安全、快速地部署支持 OData 多源虚拟数据库的 JBoss 数据虚拟化。如果你有任何疑问、建议或者反馈，请在下面的评论框中写下来，以便我们可以改进和更新内容。非常感谢！Enjoy:-)",-1)),t[44]||(t[44]=n("hr",null,null,-1)),n("p",null,[t[21]||(t[21]=o("via: ",-1)),a(e,{href:"http://linoxide.com/linux-how-to/run-jboss-data-virtualization-ga-odata-docker-container/"},{default:r(()=>[...t[20]||(t[20]=[o("http://linoxide.com/linux-how-to/run-jboss-data-virtualization-ga-odata-docker-container/",-1)])]),_:1})]),n("p",null,[t[25]||(t[25]=o("作者：",-1)),a(e,{href:"http://linoxide.com/author/arunp/"},{default:r(()=>[...t[22]||(t[22]=[o("Arun Pyasi",-1)])]),_:1}),t[26]||(t[26]=o(" 译者：",-1)),a(e,{href:"http://www.mutouxiaogui.cn/blog"},{default:r(()=>[...t[23]||(t[23]=[o("ictlyh",-1)])]),_:1}),t[27]||(t[27]=o(" 校对：",-1)),a(e,{href:"https://github.com/wxy"},{default:r(()=>[...t[24]||(t[24]=[o("wxy",-1)])]),_:1})]),n("p",null,[t[30]||(t[30]=o("本文由 ",-1)),a(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[28]||(t[28]=[o("LCTT",-1)])]),_:1}),t[31]||(t[31]=o(" 原创翻译，",-1)),a(e,{href:"https://linux.cn/"},{default:r(()=>[...t[29]||(t[29]=[o("Linux中国",-1)])]),_:1}),t[32]||(t[32]=o(" 荣誉推出",-1))])])}const B=i(p,[["render",k]]);export{x as __pageData,B as default};
