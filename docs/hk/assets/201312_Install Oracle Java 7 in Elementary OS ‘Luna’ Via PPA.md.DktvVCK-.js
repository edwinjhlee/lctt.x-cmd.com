import{_ as r,a0 as i,w as p,s,ao as d,I as o,x as e,a1 as n,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse(`{"title":"使用PPA在Elementary OS 'Luna'上安裝Oracle Java 7 | LCTT x X-CMD","titleTemplate":false,"description":"使用PPA在Elementary OS 'Luna'上安裝Oracle Java 7 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用PPA在Elementary OS 'Luna'上安裝Oracle Java 7 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用PPA在Elementary OS 'Luna'上安裝Oracle Java 7 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Install Oracle Java 7 in Elementary OS ‘Luna’ Via PPA","title":"使用PPA在Elementary OS 'Luna'上安裝Oracle Java 7","tag":"201312","desc":""},"relativePath":"201312/Install Oracle Java 7 in Elementary OS ‘Luna’ Via PPA.md","filePath":"[post].md"}`),u={name:"201312/Install Oracle Java 7 in Elementary OS ‘Luna’ Via PPA.md"};function m(g,a,c,v,f,b){const t=i("Link");return p(),s("div",null,[a[11]||(a[11]=d(`<h1 id="使用ppa在elementary-os-luna-上安裝oracle-java-7" tabindex="-1">使用PPA在Elementary OS &#39;Luna&#39;上安裝Oracle Java 7 <a class="header-anchor" href="#使用ppa在elementary-os-luna-上安裝oracle-java-7" aria-label="Permalink to “使用PPA在Elementary OS &#39;Luna&#39;上安裝Oracle Java 7”">​</a></h1><p><strong>問題</strong>: 我該如何在 Elemetary OS Luna 上安裝Oracle Java 7？</p><p><strong>回答</strong>: 在 Elementary OS Luna 安裝 Java 7 的步驟如下: 由於Elementary OS是基於Ubuntu，所以我們允許使用具有多種Java包的<strong>WEPUD8 PPA</strong>。</p><ol><li><p>打開終端。</p></li><li><p>運行以下指令添加Java的PPA到你的軟件倉:</p><pre><code> $ sudo add-apt-repository ppa:webupd8team/java

 You are about to add the following PPA to your system:
 Oracle Java (JDK) Installer (automatically downloads and installs Oracle JDK6 / JDK7 / JDK8). There are no actual Java files in this PPA. More info: http://www.webupd8.org/2012/01/install-oracle-java-jdk-7-in-ubuntu-via.html
 Debian installation instructions: http://www.webupd8.org/2012/06/how-to-install-oracle-java-7-in-debian.html
 More info: https://launchpad.net/~webupd8team/+archive/java
 Press [ENTER] to continue or ctrl-c to cancel adding it
</code></pre></li><li><p>按回車繼續</p><pre><code> gpg: keyring \`/tmp/tmpB5WwDG/secring.gpg&#39; created
 gpg: keyring \`/tmp/tmpB5WwDG/pubring.gpg&#39; created
 gpg: requesting key EEA14886 from hkp server keyserver.ubuntu.com
 gpg: /tmp/tmpB5WwDG/trustdb.gpg: trustdb created
 gpg: key EEA14886: public key &quot;Launchpad VLC&quot; imported
 gpg: Total number processed: 1
 gpg: imported: 1 (RSA: 1)
 OK
</code></pre></li><li><p>現在更新你的系統</p><pre><code> $ sudo apt-get update
</code></pre></li><li><p>運行以下命令安裝Java 7:</p><pre><code> $ sudo apt-get install oracle-java7-installer

 [sudo] password for enock:
 Reading package lists... Done
 Building dependency tree
 Reading state information... Done
 The following packages were automatically installed and are no longer required:
 gir1.2-gstreamer-0.10 libilmbase6 libmagickcore4 libmagickwand4 libcdt4
 libmagickcore4-extra liblqr-1-0 imagemagick-common libpathplan4 libopenexr6
 rsync netpbm libgvc5 libnetpbm10 libgraph4
 Use &#39;apt-get autoremove&#39; to remove them.
 The following extra packages will be installed:
 gsfonts-x11 java-common
 Suggested packages:
 default-jre equivs binfmt-support visualvm ttf-baekmuk ttf-unfonts
 ttf-unfonts-core ttf-kochi-gothic ttf-sazanami-gothic ttf-kochi-mincho
 ttf-sazanami-mincho ttf-arphic-uming
 The following NEW packages will be installed:
 gsfonts-x11 java-common oracle-java7-installer
 0 upgraded, 3 newly installed, 0 to remove and 196 not upgraded.
 Need to get 88.5 kB of archives.
 After this operation, 473 kB of additional disk space will be used.
 Do you want to continue [Y/n]?
</code></pre></li><li><p>輸入代表Yes的<strong>Y</strong>以及回車鍵繼續安裝。</p></li><li><p>在安裝過程中，你需要同意條款才能繼續。選擇<strong>OK</strong>。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/11/JDK-ask1.png" alt=""></p></li><li><p>然後選擇<strong>Yes</strong>繼續。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/11/JDK-ask2.png" alt=""></p></li><li><p>現在請等待安裝包的下載與自動安裝:</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2013/11/JDK-Downloading.png" alt=""></p></li><li><p>安裝完成。你可以在終端上查看Java版本:</p><pre><code>$ java -version
java version &quot;1.7.0_45&quot;
Java(TM) SE Runtime Environment (build 1.7.0_45-b18)
Java HotSpot(TM) 64-Bit Server VM (build 24.45-b08, mixed mode)
</code></pre></li></ol><hr>`,5)),o("p",null,[a[1]||(a[1]=e("via: ",-1)),n(t,{href:"http://www.unixmen.com/install-oracle-java-7-elementary-os-luna-via-ppa/"},{default:l(()=>[...a[0]||(a[0]=[e("http://www.unixmen.com/install-oracle-java-7-elementary-os-luna-via-ppa/",-1)])]),_:1})]),o("p",null,[a[4]||(a[4]=e("譯者：",-1)),n(t,{href:"https://github.com/whatever1992"},{default:l(()=>[...a[2]||(a[2]=[e("whatever1992",-1)])]),_:1}),a[5]||(a[5]=e(" 校對：",-1)),n(t,{href:"https://github.com/wxy"},{default:l(()=>[...a[3]||(a[3]=[e("wxy",-1)])]),_:1})]),o("p",null,[a[8]||(a[8]=e("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...a[6]||(a[6]=[e("LCTT",-1)])]),_:1}),a[9]||(a[9]=e(" 原創翻譯，",-1)),n(t,{href:"http://linux.cn/"},{default:l(()=>[...a[7]||(a[7]=[e("Linux中國",-1)])]),_:1}),a[10]||(a[10]=e(" 榮譽推出",-1))])])}const y=r(u,[["render",m]]);export{h as __pageData,y as default};
