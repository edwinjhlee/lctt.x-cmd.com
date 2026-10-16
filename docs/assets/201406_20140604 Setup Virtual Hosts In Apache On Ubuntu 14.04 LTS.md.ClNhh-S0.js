import{_ as i,a0 as s,w as p,s as u,ao as r,I as t,x as n,a1 as o,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"在Ubuntu 14.04 LTS系统中设置Apache虚拟主机 | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu 14.04 LTS系统中设置Apache虚拟主机 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu 14.04 LTS系统中设置Apache虚拟主机 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu 14.04 LTS系统中设置Apache虚拟主机 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140604 Setup Virtual Hosts In Apache On Ubuntu 14.04 LTS","title":"在Ubuntu 14.04 LTS系统中设置Apache虚拟主机","tag":"201406","desc":""},"relativePath":"201406/20140604 Setup Virtual Hosts In Apache On Ubuntu 14.04 LTS.md","filePath":"[post].md"}'),d={name:"201406/20140604 Setup Virtual Hosts In Apache On Ubuntu 14.04 LTS.md"};function c(m,e,h,g,f,w){const l=s("Link");return p(),u("div",null,[e[20]||(e[20]=r(`<h1 id="在ubuntu-14-04-lts系统中设置apache虚拟主机" tabindex="-1">在Ubuntu 14.04 LTS系统中设置Apache虚拟主机 <a class="header-anchor" href="#在ubuntu-14-04-lts系统中设置apache虚拟主机" aria-label="Permalink to “在Ubuntu 14.04 LTS系统中设置Apache虚拟主机”">​</a></h1><p><strong>虚拟主机</strong>常用于在一个单独的IP地址上提供多个域名的网站服务。如果有人想在单个VPS的单个IP地址运行多个网站，这是非常有用的。</p><p>在这个教程中，让我告诉你如何设置在Ubuntu 14.04 LTS的Apache网页服务器设置虚拟主机。请注意，这个教程只针对Ubuntu14.04的32位版本。</p><p>我不保证它也可以工作在其它更低的Ubuntu版本或者Ubuntu衍生版本（虽然可能过程是类似的）。</p><p>###方案###</p><p>在这个教程中，我会使用Ubuntu 14.04 32位 LTS，并搭建2个测试网站分别命名为“<strong>unixmen1.local</strong>” 和 “<strong>unixmen2.local</strong>”.我的测试机分别为<strong>192.168.1.250/24</strong>和<strong>server.unixmen.local</strong>。你可以根据你的需要更改虚拟域名。</p><p>###安装Apache网站服务器###</p><p>安装apache服务器之前，我们来更新一下我们的Ubuntu服务器：</p><pre><code>sudo apt-get update
</code></pre><p>然后，用下面命令来安装apache网络服务器：</p><pre><code>sudo apt-get install apache2
</code></pre>`,11)),t("p",null,[e[1]||(e[1]=n("安装apache服务器之后，让我们通过这个URL ",-1)),t("strong",null,[o(l,{href:"http://xn--IP-0p3cl7jf7fm8ahdo48l9c3ada/"},{default:a(()=>[...e[0]||(e[0]=[n("http://你的服务器的IP地址/",-1)])]),_:1})]),e[2]||(e[2]=n(" 来测试网站服务器是否正常工作 ",-1)),e[3]||(e[3]=t("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/06/Apache2-Ubuntu-Default-Page-It-works-Mozilla-Firefox_001.png",alt:""},null,-1))]),e[21]||(e[21]=r(`<p>如你所见，apache服务器已经工作了。</p><p>###设置虚拟主机###</p><h4 id="_1-创建虚拟目录" tabindex="-1">1.创建虚拟目录 <a class="header-anchor" href="#_1-创建虚拟目录" aria-label="Permalink to “1.创建虚拟目录”">​</a></h4><p>现在，让我们继续安装虚拟主机。正如我先前所述，我要新建2台虚拟主机分别命名为“<strong>unixmen1.local</strong>”和“<strong>unixmen2.local</strong>”.</p><p>创建一个公用的文件夹来存放这两台虚拟主机的数据。</p><p>首先，让我们为unixmen1.local这个站点创建一个目录：</p><pre><code>sudo mkdir -p /var/www/unixmen1.local/public_html
</code></pre><p>接着，为for unixmen2.local站点创建一个目录：</p><pre><code>sudo mkdir -p /var/www/unixmen2.local/public_html
</code></pre><h3 id="_2-设置所有者和权限" tabindex="-1">2. 设置所有者和权限 <a class="header-anchor" href="#_2-设置所有者和权限" aria-label="Permalink to “2. 设置所有者和权限”">​</a></h3><p>上面目录现在只有root拥有权限。我们需要修改这2个目录的拥有权给普通用户，而不仅仅是root用户。</p><pre><code>sudo chown -R $USER:$USER /var/www/unixmen1.local/public_html/
sudo chown -R $USER:$USER /var/www/unixmen2.local/public_html/
</code></pre><p>“<strong>$USER</strong>”变量指向了当前的登录用户。</p><p>设置读写权限给apache网页根目录（/var/www）及其子目录，这样每个人都可以从目录中读取文件。</p><pre><code>sudo chmod -R 755 /var/www/
</code></pre><p>这样，我们就创建好了一些文件夹来保存网络相关数据并分配必要的权限和所属用户。</p><h4 id="_4-为虚拟主机创建示例页" tabindex="-1">4. 为虚拟主机创建示例页 <a class="header-anchor" href="#_4-为虚拟主机创建示例页" aria-label="Permalink to “4. 为虚拟主机创建示例页”">​</a></h4><p>现在，我们给网站增加示例页。第一步，让我们给虚拟主机<strong>unixmen1.local</strong>创建一个示例页。</p><p>给unixmen1.local虚拟主机创建一个示例页，</p><pre><code>sudo vi /var/www/unixmen1.local/public_html/index.html
</code></pre><p>添加以下内容：</p><pre><code>&lt;html&gt;
 &lt;head&gt;
 &lt;title&gt;www.unixmen1.local&lt;/title&gt;
 &lt;/head&gt;
 &lt;body&gt;
 &lt;h1&gt;Welcome To Unixmen1.local website&lt;/h1&gt;
 &lt;/body&gt;
&lt;/html&gt;
</code></pre><p>保存并关闭文件。</p><p>同样的，添加示例页到第二台虚拟主机。</p><pre><code>sudo vi /var/www/unixmen2.local/public_html/index.html
</code></pre><p>添加以下内容：</p><pre><code>&lt;html&gt;
 &lt;head&gt;
 &lt;title&gt;www.unixmen2.local&lt;/title&gt;
 &lt;/head&gt;
 &lt;body&gt;
 &lt;h1&gt;Welcome To Unixmen2.local website&lt;/h1&gt;
 &lt;/body&gt;
&lt;/html&gt;
</code></pre><p>保存并关闭文件。</p><h4 id="_5-创建虚拟主机配置文件" tabindex="-1">5. 创建虚拟主机配置文件#### <a class="header-anchor" href="#_5-创建虚拟主机配置文件" aria-label="Permalink to “5. 创建虚拟主机配置文件####”">​</a></h4><p>默认情况下，apache有一个默认的虚拟主机文件叫000-default.conf。我们将会复制<strong>000-default.conf</strong>文件内容到我们新的虚拟主机配置文件中。</p><pre><code>sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/unixmen1.local.conf
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/unixmen2.local.conf
</code></pre><p>确保虚拟主机配置文件末尾包含.conf扩展名。</p><p>现在，修改unximen1.local.conf文件以符合需求。</p><pre><code>sudo vi /etc/apache2/sites-available/unixmen1.local.conf
</code></pre><p>使相关的变化直接呈现在unixmen1站点中（译注：以“#”开头的注释行可以忽略。）。</p><pre><code>&lt;VirtualHost *:80&gt;
        # The ServerName directive sets the request scheme, hostname and port that
        # the server uses to identify itself. This is used when creating
        # redirection URLs. In the context of virtual hosts, the ServerName
        # specifies what hostname must appear in the request&#39;s Host: header to
        # match this virtual host. For the default virtual host (this file) this
        # value is not decisive as it is used as a last resort host regardless.
        # However, you must set it for any further virtual host explicitly.
        #ServerName www.example.com

        ServerAdmin webmaster@unixmen1.local
        ServerName unixmen1.local
        ServerAlias www.unixmen1.local
        DocumentRoot /var/www/unixmen1.local/public_html

        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # It is also possible to configure the loglevel for particular
        # modules, e.g.
        #LogLevel info ssl:warn

        ErrorLog \${APACHE_LOG_DIR}/error.log
        CustomLog \${APACHE_LOG_DIR}/access.log combined

        # For most configuration files from conf-available/, which are
        # enabled or disabled at a global level, it is possible to
        # include a line for only one particular virtual host. For example the
        # following line enables the CGI configuration for this host only
        # after it has been globally disabled with &quot;a2disconf&quot;.
        #Include conf-available/serve-cgi-bin.conf
&lt;/VirtualHost&gt;
</code></pre><p>同理，修改第二台主机文件。</p><pre><code>sudo vi /etc/apache2/sites-available/unixmen2.local.conf
</code></pre><p>使相关的修改在unixmen2 站点呈现出来。</p><pre><code>&lt;VirtualHost *:80&gt;
        # The ServerName directive sets the request scheme, hostname and port that
        # the server uses to identify itself. This is used when creating
        # redirection URLs. In the context of virtual hosts, the ServerName
        # specifies what hostname must appear in the request&#39;s Host: header to
        # match this virtual host. For the default virtual host (this file) this
        # value is not decisive as it is used as a last resort host regardless.
        # However, you must set it for any further virtual host explicitly.
        #ServerName www.example.com

        ServerAdmin webmaster@unixmen2.local
        ServerName unixmen2.local
        ServerAlias www.unixmen2.local
        DocumentRoot /var/www/unixmen2.local/public_html

        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # It is also possible to configure the loglevel for particular
        # modules, e.g.
        #LogLevel info ssl:warn

        ErrorLog \${APACHE_LOG_DIR}/error.log
        CustomLog \${APACHE_LOG_DIR}/access.log combined

        # For most configuration files from conf-available/, which are
        # enabled or disabled at a global level, it is possible to
        # include a line for only one particular virtual host. For example the
        # following line enables the CGI configuration for this host only
        # after it has been globally disabled with &quot;a2disconf&quot;.
        #Include conf-available/serve-cgi-bin.conf
&lt;/VirtualHost&gt;
</code></pre><p>修改虚拟主机文件后，禁用默认的虚拟主机配置（000.default.conf)，然后启用新的虚拟主机配置，如下所示。</p><pre><code>sudo a2dissite 000-default.conf
sudo a2ensite unixmen1.local.conf
sudo a2ensite unixmen2.local.conf
</code></pre><p>最后，重启apache服务器。</p><pre><code>sudo service apache2 restart
</code></pre><p>就是这样。现在，我们成功地配置了apach虚拟主机在我们的Ubuntu服务器上</p><p>###测试虚拟主机###</p><p>编辑<strong>/etc/hosts</strong>文件，</p><pre><code>sudo vi /etc/hosts
</code></pre><p>在文件末尾添加如下所示的虚拟域名。</p><pre><code>192.168.1.250   unixmen1.local
192.168.1.250   unixmen2.local
</code></pre><p>保存并关闭文件。</p>`,51)),t("p",null,[e[6]||(e[6]=n("打开你的浏览器并访问",-1)),t("strong",null,[o(l,{href:"http://unixmen1.local"},{default:a(()=>[...e[4]||(e[4]=[n("http://unixmen1.local",-1)])]),_:1})]),e[7]||(e[7]=n(" 或 ",-1)),t("strong",null,[o(l,{href:"http://unixmen2.local"},{default:a(()=>[...e[5]||(e[5]=[n("http://unixmen2.local",-1)])]),_:1})]),e[8]||(e[8]=n("。你将会看到我们之前创建的示例页。",-1))]),e[22]||(e[22]=t("p",null,[t("strong",null,"Unixmen1.local 测试页:")],-1)),e[23]||(e[23]=t("p",null,[t("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/06/www.unixmen1.local-Mozilla-Firefox_004.png",alt:""})],-1)),e[24]||(e[24]=t("p",null,[t("strong",null,"Unixmen2.local 测试页")],-1)),e[25]||(e[25]=t("p",null,[t("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/06/www.unixmen2.local-Mozilla-Firefox_005.png",alt:""})],-1)),e[26]||(e[26]=t("p",null,"如果你想从你的远程系统访问这些站点，你需要在你的DNS服务器添加实际域名记录。不过，我没有真实的域名和DNS服务器，我只想通过我的本地系统测试，那么它刚好如我所愿地工作。",-1)),e[27]||(e[27]=t("p",null,"Cheers！",-1)),e[28]||(e[28]=t("hr",null,null,-1)),t("p",null,[e[10]||(e[10]=n("via: ",-1)),o(l,{href:"http://www.unixmen.com/setup-virtual-hosts-apache-ubuntu-14-04-lts/"},{default:a(()=>[...e[9]||(e[9]=[n("http://www.unixmen.com/setup-virtual-hosts-apache-ubuntu-14-04-lts/",-1)])]),_:1})]),t("p",null,[e[13]||(e[13]=n("译者：",-1)),o(l,{href:"https://github.com/disylee"},{default:a(()=>[...e[11]||(e[11]=[n("disylee",-1)])]),_:1}),e[14]||(e[14]=n(" 校对：",-1)),o(l,{href:"https://github.com/wxy"},{default:a(()=>[...e[12]||(e[12]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[17]||(e[17]=n("本文由 ",-1)),o(l,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[15]||(e[15]=[n("LCTT",-1)])]),_:1}),e[18]||(e[18]=n(" 原创翻译，",-1)),o(l,{href:"http://linux.cn/"},{default:a(()=>[...e[16]||(e[16]=[n("Linux中国",-1)])]),_:1}),e[19]||(e[19]=n(" 荣誉推出",-1))])])}const T=i(d,[["render",c]]);export{v as __pageData,T as default};
