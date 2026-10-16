import{_ as n,a0 as i,w as d,s as l,ao as c,I as p,x as t,a1 as a,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const j=JSON.parse('{"title":"如何用mod_jk連接器來集成Apache2和Tomcat 7 | LCTT x X-CMD","titleTemplate":false,"description":"如何用mod_jk連接器來集成Apache2和Tomcat 7 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用mod_jk連接器來集成Apache2和Tomcat 7 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用mod_jk連接器來集成Apache2和Tomcat 7 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150429 How To Integrate Apache2 With Tomcat 7 Using mod_jk Connector","title":"如何用mod_jk連接器來集成Apache2和Tomcat 7","tag":"201506","desc":""},"relativePath":"201506/20150429 How To Integrate Apache2 With Tomcat 7 Using mod_jk Connector.md","filePath":"[post].md"}'),m={name:"201506/20150429 How To Integrate Apache2 With Tomcat 7 Using mod_jk Connector.md"};function s(h,e,k,T,u,g){const o=i("Link");return d(),l("div",null,[e[13]||(e[13]=c(`<h1 id="如何用mod-jk連接器來集成apache2和tomcat-7" tabindex="-1">如何用mod_jk連接器來集成Apache2和Tomcat 7 <a class="header-anchor" href="#如何用mod-jk連接器來集成apache2和tomcat-7" aria-label="Permalink to “如何用mod_jk連接器來集成Apache2和Tomcat 7”">​</a></h1><p>Apache是最流行的web服務器，它通常用來接收客户端的請求並響應。它得到一個URL並將它翻譯成一個文件名（或者靜態請求），並將文件從本地磁盤中取出，通過因特網返回；或者將它翻譯成程序執行它，接着將輸出返回給請求方。如果web服務器不能處理和完成請求，它會返回一個錯誤信息。</p><p>在本篇中，我們會列出Apache的特性以及我們該如何用mod_jk連接器來集成Tomcat 7和Tomcat 8.</p><h3 id="apache的特性" tabindex="-1">Apache的特性 <a class="header-anchor" href="#apache的特性" aria-label="Permalink to “Apache的特性”">​</a></h3><p>如我們所説Apache是最流行的web服務器。下面是流行背後的原因：</p><ul><li>它是自由工具，你可以很簡單地下載和安裝</li><li>它開放源碼，因此你可以查看源碼，調整它，優化它，並且修復錯誤和安全漏洞。也可以增加新的功能和模組。</li><li>它可以用在只有一兩個頁面的小網站，或者是有成千上萬個頁面的大網站，每月處理上百萬的常規訪問者的請求。它可以同時處理靜態和動態內容。</li><li>改進的緩存模組（mod_cache、 mod_disk_cache、 mod_mem_cache）。</li><li>Apache 2 支持 IPv6.</li></ul><h3 id="tomcat-的目錄" tabindex="-1">Tomcat 的目錄 <a class="header-anchor" href="#tomcat-的目錄" aria-label="Permalink to “Tomcat 的目錄”">​</a></h3><p>\${tomcat_home} 是tomcat的根目錄。你的tomcat安裝應該有下面的子目錄：</p><ul><li>\${tomcat_home}\\conf – 存放不同配置文件的地方</li><li>\${tomcat_home}\\webapps – 包含示例程序</li><li>\${tomcat_home}\\bin – 存放你的Web服務器的插件的地方</li></ul><h3 id="mod-jk-模組" tabindex="-1">Mod_jk 模組 <a class="header-anchor" href="#mod-jk-模組" aria-label="Permalink to “Mod_jk 模組”">​</a></h3><p>mod_jk有兩種可接受的方式：二進制或者源碼。取決於你運行的web服務器的平台，也許有符合你的平台的二進制版本的mod_jk。如果有的話建議使用這個。</p><p>mod_jk模組在這些平台上開發及測試過：</p><ul><li>Linux、 FreeBSD、 AIX、 HP-UX、 MacOS X、 Solaris ，應該在主流的支持Apache 1.3 和/或者 2.x的Unix平台上都工作。</li><li>WinNT 4.0-i386 SP4/SP5/SP6a (應該可以與其他的服務包一起工作), Win2K 和 WinXP 和 Win98</li><li>Cygwin (需要你有apache服務器及autoconf/automake支持工具)</li><li>Netware</li><li>i5/OS V5R4 (System I) ，帶有 Apache HTTP Server 2.0.58。 確保已經安裝了最新的 Apache PTF</li><li>Tomcat 3.2 到 Tomcat 8</li></ul><p>The mod_jk 需要兩個組件：</p><ul><li><strong>mod_jk.xxx</strong> – Apache HTTP服務器模組，取決於你的操作系統，它可能是mod_jk.so、mod_jk.nlm或者mod_jk.SRVPGM。</li><li><strong>workers.properties</strong> - 描述Worker （Tomcat進程）所用的主機以及處理器使用的端口。在下載的源碼的conf目錄下找到示例的workers.properties文件。</li></ul><p>和Apache HTTP服務器其他的模組一樣，mod_jk應該安裝在你的Apache服務器下的模組目錄下：/usr/lib/apache，而且你應該更新你的<strong>httpd.conf</strong>文件。</p><h3 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h3><p>在開始安裝前，非root用户需要使用“sudo”特權。現在我們開始安裝，我們將使用下面的命令來安裝Apache2和Tomcat：</p><pre><code>sudo apt-get install apache2    
sudo apt-get install tomcat7
sudo apt-get install tomcat7-admin
</code></pre><p>下面，我們將會使用如下的命令來創建一個測試程序：</p><pre><code>cd /var/lib/tomcat7/webapps
sudo mkdir tomcat-demo
sudo mkdir tomcat-demo/goodmoring
sudo vim tomcat-demo/helloworld/index.jsp
</code></pre><p>並粘貼下面的代碼到上述的 index.jsp：</p><pre><code>&lt;HTML&gt; 
 &lt;HEAD&gt;  
  &lt;TITLE&gt;Good Morning&lt;/TITLE&gt; 
 &lt;/HEAD&gt; 
 &lt;BODY&gt;  
  &lt;H1&gt;Good Morning&lt;/H1&gt;   
  Today is: &lt;%= new java.util.Date().toString() %&gt; 
 &lt;/BODY&gt;
&lt;/HTML&gt;
</code></pre><p>一切完畢後，我們將使用下面的命令安裝和配置mod_jk:</p><pre><code>sudo apt-get install libapache2-mod-jk
</code></pre><p>我們需要使用下面的命令啓用Tomcat的8443轉發端口：</p><pre><code>sudo vim /etc/tomcat7/server.xml
</code></pre><p>解除下面的註釋行：</p><pre><code>&lt;Connector port=&quot;8009&quot; protocol=&quot;AJP/1.3&quot; redirectPort=&quot;8443&quot; /&gt;
</code></pre><p>之後，我們將用下面的命令為Apache創建workers.properties文件：</p><pre><code>sudo vim /etc/apache2/workers.properties
</code></pre><p>粘貼下面的行：</p><pre><code># Define 1 real worker using ajp13 
 worker.list=worker 
 # Set properties for worker (ajp13) 
 worker.worker.type=ajp13 
 worker.worker.host=localhost
 worker.worker.port=8009
</code></pre><p>現在我們將使用下面的命令來讓Apache使用這個worker：</p><pre><code>sudo vim /etc/apache2/mods-available/jk.conf
</code></pre><p>我們將JkWorkersFile屬性成下面這行：</p><pre><code>/etc/apache2/workers.properties
</code></pre><p>最後配置Apache交給Tomcat處理的URL</p><pre><code>sudo vim /etc/apache2/sites-enabled/000-default
</code></pre><p>我們將在配置文件中下面的行：</p><pre><code>&lt;VirtualHost *:80&gt;
.......................................
.......................................
JkMount /tomcat-demo* worker1
&lt;/VirtualHost *:80&gt;
</code></pre><p>現在用下面的命令重啓服務來檢查它們的功能：</p><pre><code>sudo /etc/init.d/tomcat7 restart
sudo /etc/init.d/apache2 restart
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>在本篇中我們展示了你該如何使用mod_jk連接器配置和安裝Apache2以及Tomcat7。</p><hr>`,46)),p("p",null,[e[1]||(e[1]=t("via: ",-1)),a(o,{href:"http://www.unixmen.com/integrate-apache2-tomcat-7-using-mod_jk-connector/"},{default:r(()=>[...e[0]||(e[0]=[t("http://www.unixmen.com/integrate-apache2-tomcat-7-using-mod_jk-connector/",-1)])]),_:1})]),p("p",null,[e[5]||(e[5]=t("作者：",-1)),a(o,{href:"http://www.unixmen.com/author/anis/"},{default:r(()=>[...e[2]||(e[2]=[t("anismaj",-1)])]),_:1}),e[6]||(e[6]=t(" 譯者：",-1)),a(o,{href:"https://github.com/geekpi"},{default:r(()=>[...e[3]||(e[3]=[t("geekpi",-1)])]),_:1}),e[7]||(e[7]=t(" 校對：",-1)),a(o,{href:"https://github.com/wxy"},{default:r(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),p("p",null,[e[10]||(e[10]=t("本文由 ",-1)),a(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原創翻譯，",-1)),a(o,{href:"http://linux.cn/"},{default:r(()=>[...e[9]||(e[9]=[t("Linux中國",-1)])]),_:1}),e[12]||(e[12]=t(" 榮譽推出",-1))])])}const A=n(m,[["render",s]]);export{j as __pageData,A as default};
