import{_ as n,a0 as i,w as d,s as l,ao as c,I as p,x as t,a1 as a,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const j=JSON.parse('{"title":"如何用mod_jk连接器来集成Apache2和Tomcat 7 | LCTT x X-CMD","titleTemplate":false,"description":"如何用mod_jk连接器来集成Apache2和Tomcat 7 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用mod_jk连接器来集成Apache2和Tomcat 7 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用mod_jk连接器来集成Apache2和Tomcat 7 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150429 How To Integrate Apache2 With Tomcat 7 Using mod_jk Connector","title":"如何用mod_jk连接器来集成Apache2和Tomcat 7","tag":"201506","desc":""},"relativePath":"201506/20150429 How To Integrate Apache2 With Tomcat 7 Using mod_jk Connector.md","filePath":"[post].md"}'),m={name:"201506/20150429 How To Integrate Apache2 With Tomcat 7 Using mod_jk Connector.md"};function s(h,e,k,T,u,g){const o=i("Link");return d(),l("div",null,[e[13]||(e[13]=c(`<h1 id="如何用mod-jk连接器来集成apache2和tomcat-7" tabindex="-1">如何用mod_jk连接器来集成Apache2和Tomcat 7 <a class="header-anchor" href="#如何用mod-jk连接器来集成apache2和tomcat-7" aria-label="Permalink to “如何用mod_jk连接器来集成Apache2和Tomcat 7”">​</a></h1><p>Apache是最流行的web服务器，它通常用来接收客户端的请求并响应。它得到一个URL并将它翻译成一个文件名（或者静态请求），并将文件从本地磁盘中取出，通过因特网返回；或者将它翻译成程序执行它，接着将输出返回给请求方。如果web服务器不能处理和完成请求，它会返回一个错误信息。</p><p>在本篇中，我们会列出Apache的特性以及我们该如何用mod_jk连接器来集成Tomcat 7和Tomcat 8.</p><h3 id="apache的特性" tabindex="-1">Apache的特性 <a class="header-anchor" href="#apache的特性" aria-label="Permalink to “Apache的特性”">​</a></h3><p>如我们所说Apache是最流行的web服务器。下面是流行背后的原因：</p><ul><li>它是自由工具，你可以很简单地下载和安装</li><li>它开放源码，因此你可以查看源码，调整它，优化它，并且修复错误和安全漏洞。也可以增加新的功能和模块。</li><li>它可以用在只有一两个页面的小网站，或者是有成千上万个页面的大网站，每月处理上百万的常规访问者的请求。它可以同时处理静态和动态内容。</li><li>改进的缓存模块（mod_cache、 mod_disk_cache、 mod_mem_cache）。</li><li>Apache 2 支持 IPv6.</li></ul><h3 id="tomcat-的目录" tabindex="-1">Tomcat 的目录 <a class="header-anchor" href="#tomcat-的目录" aria-label="Permalink to “Tomcat 的目录”">​</a></h3><p>\${tomcat_home} 是tomcat的根目录。你的tomcat安装应该有下面的子目录：</p><ul><li>\${tomcat_home}\\conf – 存放不同配置文件的地方</li><li>\${tomcat_home}\\webapps – 包含示例程序</li><li>\${tomcat_home}\\bin – 存放你的Web服务器的插件的地方</li></ul><h3 id="mod-jk-模块" tabindex="-1">Mod_jk 模块 <a class="header-anchor" href="#mod-jk-模块" aria-label="Permalink to “Mod_jk 模块”">​</a></h3><p>mod_jk有两种可接受的方式：二进制或者源码。取决于你运行的web服务器的平台，也许有符合你的平台的二进制版本的mod_jk。如果有的话建议使用这个。</p><p>mod_jk模块在这些平台上开发及测试过：</p><ul><li>Linux、 FreeBSD、 AIX、 HP-UX、 MacOS X、 Solaris ，应该在主流的支持Apache 1.3 和/或者 2.x的Unix平台上都工作。</li><li>WinNT 4.0-i386 SP4/SP5/SP6a (应该可以与其他的服务包一起工作), Win2K 和 WinXP 和 Win98</li><li>Cygwin (需要你有apache服务器及autoconf/automake支持工具)</li><li>Netware</li><li>i5/OS V5R4 (System I) ，带有 Apache HTTP Server 2.0.58。 确保已经安装了最新的 Apache PTF</li><li>Tomcat 3.2 到 Tomcat 8</li></ul><p>The mod_jk 需要两个组件：</p><ul><li><strong>mod_jk.xxx</strong> – Apache HTTP服务器模块，取决于你的操作系统，它可能是mod_jk.so、mod_jk.nlm或者mod_jk.SRVPGM。</li><li><strong>workers.properties</strong> - 描述Worker （Tomcat进程）所用的主机以及处理器使用的端口。在下载的源码的conf目录下找到示例的workers.properties文件。</li></ul><p>和Apache HTTP服务器其他的模块一样，mod_jk应该安装在你的Apache服务器下的模块目录下：/usr/lib/apache，而且你应该更新你的<strong>httpd.conf</strong>文件。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h3><p>在开始安装前，非root用户需要使用“sudo”特权。现在我们开始安装，我们将使用下面的命令来安装Apache2和Tomcat：</p><pre><code>sudo apt-get install apache2    
sudo apt-get install tomcat7
sudo apt-get install tomcat7-admin
</code></pre><p>下面，我们将会使用如下的命令来创建一个测试程序：</p><pre><code>cd /var/lib/tomcat7/webapps
sudo mkdir tomcat-demo
sudo mkdir tomcat-demo/goodmoring
sudo vim tomcat-demo/helloworld/index.jsp
</code></pre><p>并粘贴下面的代码到上述的 index.jsp：</p><pre><code>&lt;HTML&gt; 
 &lt;HEAD&gt;  
  &lt;TITLE&gt;Good Morning&lt;/TITLE&gt; 
 &lt;/HEAD&gt; 
 &lt;BODY&gt;  
  &lt;H1&gt;Good Morning&lt;/H1&gt;   
  Today is: &lt;%= new java.util.Date().toString() %&gt; 
 &lt;/BODY&gt;
&lt;/HTML&gt;
</code></pre><p>一切完毕后，我们将使用下面的命令安装和配置mod_jk:</p><pre><code>sudo apt-get install libapache2-mod-jk
</code></pre><p>我们需要使用下面的命令启用Tomcat的8443转发端口：</p><pre><code>sudo vim /etc/tomcat7/server.xml
</code></pre><p>解除下面的注释行：</p><pre><code>&lt;Connector port=&quot;8009&quot; protocol=&quot;AJP/1.3&quot; redirectPort=&quot;8443&quot; /&gt;
</code></pre><p>之后，我们将用下面的命令为Apache创建workers.properties文件：</p><pre><code>sudo vim /etc/apache2/workers.properties
</code></pre><p>粘贴下面的行：</p><pre><code># Define 1 real worker using ajp13 
 worker.list=worker 
 # Set properties for worker (ajp13) 
 worker.worker.type=ajp13 
 worker.worker.host=localhost
 worker.worker.port=8009
</code></pre><p>现在我们将使用下面的命令来让Apache使用这个worker：</p><pre><code>sudo vim /etc/apache2/mods-available/jk.conf
</code></pre><p>我们将JkWorkersFile属性成下面这行：</p><pre><code>/etc/apache2/workers.properties
</code></pre><p>最后配置Apache交给Tomcat处理的URL</p><pre><code>sudo vim /etc/apache2/sites-enabled/000-default
</code></pre><p>我们将在配置文件中下面的行：</p><pre><code>&lt;VirtualHost *:80&gt;
.......................................
.......................................
JkMount /tomcat-demo* worker1
&lt;/VirtualHost *:80&gt;
</code></pre><p>现在用下面的命令重启服务来检查它们的功能：</p><pre><code>sudo /etc/init.d/tomcat7 restart
sudo /etc/init.d/apache2 restart
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>在本篇中我们展示了你该如何使用mod_jk连接器配置和安装Apache2以及Tomcat7。</p><hr>`,46)),p("p",null,[e[1]||(e[1]=t("via: ",-1)),a(o,{href:"http://www.unixmen.com/integrate-apache2-tomcat-7-using-mod_jk-connector/"},{default:r(()=>[...e[0]||(e[0]=[t("http://www.unixmen.com/integrate-apache2-tomcat-7-using-mod_jk-connector/",-1)])]),_:1})]),p("p",null,[e[5]||(e[5]=t("作者：",-1)),a(o,{href:"http://www.unixmen.com/author/anis/"},{default:r(()=>[...e[2]||(e[2]=[t("anismaj",-1)])]),_:1}),e[6]||(e[6]=t(" 译者：",-1)),a(o,{href:"https://github.com/geekpi"},{default:r(()=>[...e[3]||(e[3]=[t("geekpi",-1)])]),_:1}),e[7]||(e[7]=t(" 校对：",-1)),a(o,{href:"https://github.com/wxy"},{default:r(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),p("p",null,[e[10]||(e[10]=t("本文由 ",-1)),a(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原创翻译，",-1)),a(o,{href:"http://linux.cn/"},{default:r(()=>[...e[9]||(e[9]=[t("Linux中国",-1)])]),_:1}),e[12]||(e[12]=t(" 荣誉推出",-1))])])}const A=n(m,[["render",s]]);export{j as __pageData,A as default};
