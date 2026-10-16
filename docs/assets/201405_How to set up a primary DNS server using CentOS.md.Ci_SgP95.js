import{_ as s,a0 as l,w as i,s as m,I as t,x as r,a1 as n,A as o,ao as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"CentOS上配置主DNS服务器的简易指南 | LCTT x X-CMD","titleTemplate":false,"description":"CentOS上配置主DNS服务器的简易指南 | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"CentOS上配置主DNS服务器的简易指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"CentOS上配置主DNS服务器的简易指南 | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/How to set up a primary DNS server using CentOS","title":"CentOS上配置主DNS服务器的简易指南","tag":"201405","desc":""},"relativePath":"201405/How to set up a primary DNS server using CentOS.md","filePath":"[post].md"}'),N={name:"201405/How to set up a primary DNS server using CentOS.md"};function c(u,e,S,x,h,D){const d=l("Link"),a=l("tt");return i(),m("div",null,[e[30]||(e[30]=t("h1",{id:"centos上配置主dns服务器的简易指南",tabindex:"-1"},[r("CentOS上配置主DNS服务器的简易指南 "),t("a",{class:"header-anchor",href:"#centos上配置主dns服务器的简易指南","aria-label":"Permalink to “CentOS上配置主DNS服务器的简易指南”"},"​")],-1)),e[31]||(e[31]=t("p",null,"任何运作中的域名至少有两台DNS服务器，一台称为主域名服务器（比如叫做ns1），而另一台称为从域名服务器（比如叫做ns2）。这些服务器通常用于故障转移：如果一台宕机，另外一台就激活成为DNS服务器（译注：此处译者有不同意见，事实上两个或更多的DNS服务器是共同工作的，并不是第一台停止服务后，第二台才接替工作。解析器是随机选择一个DNS服务器进行询问，如果超时则会询问下一个，这是多个DNS的故障容错机制）。也可以实现包括负载均衡、防火墙和集群在内的更为复杂的故障转移机制。",-1)),e[32]||(e[32]=t("p",null,"一个域的所有DNS条目都会被添加到主域名服务器，从服务器只会根据主服务器上的SOA记录的序列号参数从主服务器同步所有信息。",-1)),t("p",null,[e[1]||(e[1]=r("此教程将会讲述",-1)),e[2]||(e[2]=t("strong",null,"如何创建一台在CentOS上运行的主DNS服务器",-1)),e[3]||(e[3]=r("。请注意，本教程中提到的DNS服务器将会是一台开放DNS服务器，这也就是说该服务器将会回应来自任何IP地址的查询。对于DNS服务器的访问控制将在",-1)),n(d,{href:"http://xmodulo.com/2014/04/close-open-dns-resolver.html"},{default:o(()=>[...e[0]||(e[0]=[r("此教程",-1)])]),_:1}),e[4]||(e[4]=r("中讨论（译注：开放的DNS服务器是一个安全隐患。）。",-1))]),e[33]||(e[33]=p(`<p>在开始之前，我想要提一下的是，DNS可以在chroot环境中配置，也可以在非chroot环境中配置。chroot环境将DNS服务器限制在系统中某个特定目录中，以避免让服务器具有系统级的访问权限。在此环境中，任何DNS服务器的安全漏洞不会导致整个系统的破坏。将DNS服务器置于chroot环境中，对于部署测试也很有用。</p><h3 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to “目标”">​</a></h3><p>我们将在基于域名example.tst的测试环境中配置一台DNS服务器，这个域名是虚假的（并不真实存在的）。这样，我们就不会意外干扰到其它真实的域名。</p><p>在该域中，有以下三台服务器。</p><table><tbody><tr><td>服务器</td><td>IP地址</td><td>托管的服务</td><td>完全限定域名（FQDN）</td></tr><tr><td>Server A</td><td>172.16.1.1</td><td>Mail</td><td>mail.example.tst</td></tr><tr><td>Server B</td><td>172.16.1.2</td><td>Web, FTP</td><td>www.example.tst<br>ftp.example.tst</td></tr><tr><td>Server C</td><td>172.16.1.3</td><td>Primary DNS server</td><td>ns1.example.tst</td></tr></tbody></table><p>我们将会配置一台主域名服务器，并添加上表中必要的域和DNS记录。</p><h3 id="设置主机名" tabindex="-1">设置主机名 <a class="header-anchor" href="#设置主机名" aria-label="Permalink to “设置主机名”">​</a></h3><p>所有的主机名必须以完全限定域名的方式正确定义，可以通过以下方法完成设置。</p><pre><code># vim /etc/sysconfig/network 
</code></pre><blockquote><p>HOSTNAME=ns1.example.tst</p></blockquote><p>注：该文件中指定的主机名参数在服务器启动后才会启用（译注：或者网络服务重启后），因此，该设置不会马上生效。下面的命令可以立刻临时性地修改主机名。</p><pre><code># hostname ns1.example.tst 
</code></pre><p>一旦设置，主机名可以通过以下命令验证。</p><pre><code># hostname 
</code></pre><blockquote><p>ns1.example.tst</p></blockquote><p>在进入下一步之前，请确保上述三台服务器上的主机名已经设置正确。</p><h3 id="安装软件包" tabindex="-1">安装软件包 <a class="header-anchor" href="#安装软件包" aria-label="Permalink to “安装软件包”">​</a></h3><p>我们将使用bind来配置DNS服务，该软件可以很方便地通过yum来安装。</p><p>不使用chroot环境的：</p><pre><code># yum install bind bind-chroot 
</code></pre><p>使用chroot环境的：</p><pre><code># yum install bind bind-chroot 
</code></pre><h3 id="准备配置文件" tabindex="-1">准备配置文件 <a class="header-anchor" href="#准备配置文件" aria-label="Permalink to “准备配置文件”">​</a></h3><p>正如前面提到的，bind可以在chroot环境下配置，或者在非chroot环境下配置，配置文件的路径会因为是否安装chroot包而不同。</p>`,24)),t("table",null,[t("tbody",null,[e[13]||(e[13]=t("tr",null,[t("td"),t("td",null,"配置文件路径"),t("td",null,"区域文件路径")],-1)),t("tr",null,[t("td",null,[e[6]||(e[6]=r(" 不带有 ",-1)),n(a,null,{default:o(()=>[...e[5]||(e[5]=[r("chroot",-1)])]),_:1})]),e[7]||(e[7]=t("td",null," /etc/ ",-1)),e[8]||(e[8]=t("td",null," /var/named/ ",-1))]),t("tr",null,[t("td",null,[e[10]||(e[10]=r(" 带有 ",-1)),n(a,null,{default:o(()=>[...e[9]||(e[9]=[r("chroot",-1)])]),_:1})]),e[11]||(e[11]=t("td",null," /var/named/chroot/etc/ ",-1)),e[12]||(e[12]=t("td",null," /var/named/chroot/var/named/ ",-1))])])]),e[34]||(e[34]=p(`<p>可以使用默认提供的named.conf配置文件，但是为了更方便使用，我们将使用另外一个简单的配置文件模板。</p><p>非<code>chroot</code>环境：</p><pre><code># cp /usr/share/doc/bind-9.8.2/sample/etc/named.rfc1912.zones /etc/named.conf
</code></pre><p><code>chroot</code>环境：</p><pre><code># cp /usr/share/doc/bind-9.8.2/sample/etc/named.rfc1912.zones /var/named/chroot/etc/named.conf
</code></pre><p>现在来备份并修改配置文件。</p><p>非<code>chroot</code>环境：</p><pre><code># vim /etc/named.conf 
</code></pre><p><code>chroot</code>环境：</p><pre><code># vim /var/named/chroot/etc/named.conf 
</code></pre><p>添加/修改以下行：</p><pre><code>options {
## 区域文件存放目录 ##
directory &quot;/var/named&quot;;

## 对于非本地权威域的请求转发到 Google 的公开 DNS 服务器 ##
forwarders { 8.8.8.8; };
};

## 申明一个本地域 example.tst ##
zone &quot;example.tst&quot; IN {
        type master;
        file &quot;example-fz&quot;; ## 存储文件名，放在 /var/named ##
        allow-update { none; };
};

## 为IP段 172.16.1.0 提供反向解析 ##
zone &quot;1.16.172.in-addr.arpa&quot; IN {
        type master;
        file &quot;rz-172-16-1&quot;; ## 存储文件名，放在 /var/named ##
        allow-update { none; };
};
</code></pre><h3 id="准备区域文件" tabindex="-1">准备区域文件 <a class="header-anchor" href="#准备区域文件" aria-label="Permalink to “准备区域文件”">​</a></h3><p>那些默认的区域文件会自动创建到<code>/var/named</code> 或者<code>/var/named/chroot/var/named</code> (<code>chroot</code>环境)。如果在这些地方找不到这些文件，<code>/usr/share/doc/bind</code>目录中提供了模板文件，可以从这里拷贝。</p><p>假设默认区域文件没有提供，我们可以从<code>/usr</code>拷贝模板文件。</p><p>非<code>chroot</code>环境：</p><pre><code># cp /usr/share/doc/bind-9.8.2/sample/var/named/named.* /var/named/
</code></pre><p><code>chroot</code>环境：</p><pre><code># cp /usr/share/doc/bind-9.8.2/sample/var/named/named.* /var/named/chroot/var/named
</code></pre><p>很好！由于现在默认的区域文件已经准备好，我们可以为example.tst和172.16.1.0网络创建区域文件了，以下要点必须时刻谨记。</p><ul><li>区域文件中的特殊字符‘@’意味着空。（译注：意即代表本域。）</li><li>所有的完全限定域名必须以点‘.’结束。如：example.tst.如果没有这个点，你会发生问题。（译注：即会被当做当前@所代表的域的子域。）</li></ul><h4 id="_1-转发区域-本地权威域" tabindex="-1">1. 转发区域（本地权威域） <a class="header-anchor" href="#_1-转发区域-本地权威域" aria-label="Permalink to “1. 转发区域（本地权威域）”">​</a></h4><p>转发区域包含了名称到IP地址的映射。对于公开的域，域名托管提供商的DNS服务器存储了转发区域文件。（译注：转发区域即本地的权威域，由这个服务器自身提供权威的解析数据）</p><p>非<code>chroot</code>环境：</p><pre><code># vim /var/named/example-fz 
</code></pre><p><code>chroot</code>环境：</p><pre><code># vim /var/named/chroot/var/named/example-fz 
</code></pre><hr><pre><code>$TTL 1D
@       IN SOA  ns1.example.tst. sarmed.example.tst. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
IN NS      ns1.example.tst.
IN A       172.16.1.3
mail		IN A		172.16.1.1
		IN MX 10	mail.example.tst.
www		IN A		172.16.1.2
ns1		IN A		172.16.1.3
ftp		IN CNAME	www.example.tst.
</code></pre><p><strong>说明</strong>：在区域文件中，SOA是开始授权（Start Of Authority）的意思。它的值的第一段是授权名称服务器的完全限定域名。完全限定域名后面跟着的是电子邮件地址。由于不能在sarmed@example.tst这样的格式中使用‘@’符号（译注：@有特定意义，代表本域。），我们将电子邮件地址重写成sarmed.example.tst.这样的格式。</p><p>以下是典型的常用DNS记录类型：</p><ul><li><strong>NS</strong>：域名服务器</li><li><strong>A</strong>: 地址记录，记录主机名到IP地址的映射（译注，此处原文有误。）</li><li><strong>MX</strong>: 邮件交换记录。这里我们只用了一个邮件交换记录，设置其优先级为10。如果有多个邮件交换记录，我们可以使用多个数值优先级，数字小的优先级最高。例如，MX 0比MX 1优先级更高。</li><li><strong>CNAME</strong>: 标准名。如果在一台单一服务器上托管了多个服务，也很可能将多个名称解析到某个单一服务器。CNAME指定了一台服务器可能有的其它名称，并且将它们指向具有实际A记录的名称。</li></ul><h4 id="_2-反向区域" tabindex="-1">2. 反向区域 <a class="header-anchor" href="#_2-反向区域" aria-label="Permalink to “2. 反向区域”">​</a></h4><p>反向区域包含了IP地址到名称的映射。这里，我们为172.16.1.0网络创建反向区域。在正式的域中，公共IP区块的拥有者拥有的DNS服务器存储反向区域文件。（某些服务，如邮件服务，要求IP地址具备正确的反向解析才能正常工作。而IP的反向解析，通常是由IP的拥有者如接入商或IDC来负责解析。）</p><p>非<code>chroot</code>环境：</p><pre><code># vim /var/named/rz-172-16-1 
</code></pre><p><code>chroot</code>环境：</p><pre><code># vim /var/named/chroot/var/named/rz-172-16-1 
</code></pre><hr><pre><code>$TTL 1D
@       IN SOA  ns1.example.tst. sarmed.example.tst. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
IN NS      ns1.example.tst.
1		IN PTR	mail.example.tst.
2		IN PTR	www.example.tst.
3		IN PTR	ns1.example.tst.
</code></pre><p><strong>说明</strong>:除了下面的参数外，反向区域文件中的大多数参数和转发区域文件中的相同。</p><ul><li>PTR: IP反向解析记录，指向一个反向限定域名。</li></ul><h3 id="结束工作" tabindex="-1">结束工作 <a class="header-anchor" href="#结束工作" aria-label="Permalink to “结束工作”">​</a></h3><p>既然区域文件已经准备好，我们接下来调整它们的权限。</p><p>非<code>chroot</code>环境：</p><pre><code># chgrp named /var/named/* 
</code></pre><p><code>chroot</code>环境：</p><pre><code># chgrp named /var/named/chroot/var/named/* 
</code></pre><p>现在，我们为DNS服务器设置IP地址。</p><pre><code># vim /etc/resolv.conf 
</code></pre><blockquote><p>nameserver 172.16.1.3</p></blockquote><p>最后，我们可以启动DNS服务，并确保将它添加到启动服务中。</p><pre><code># service named restart
# chkconfig named on 
</code></pre><p>DNS服务器起动后，建议关注一下日志文件/var/log/messages，这里头包含了后台运行的一些有用信息。如果没有发现错误，我们可以开始测试DNS服务器。</p><h3 id="测试dns" tabindex="-1">测试DNS <a class="header-anchor" href="#测试dns" aria-label="Permalink to “测试DNS”">​</a></h3><p>我们可以使用dig或者nslookup来测试DNS。首先，我们需要安装必要的软件包。</p><pre><code># yum install bind-utils 
</code></pre><h4 id="_1-使用dig测试转发区域" tabindex="-1">1. 使用dig测试转发区域 <a class="header-anchor" href="#_1-使用dig测试转发区域" aria-label="Permalink to “1. 使用dig测试转发区域”">​</a></h4><p>使用dig来测试时，必须时刻关注状态信息：“NOERROR”，任何其它值都表明存在问题。</p><pre><code># dig example.tst 
</code></pre><hr><pre><code>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY,  status: NOERROR, id: 31184

;; QUESTION SECTION:
;example.com.                   IN      A

;; ANSWER SECTION:
example.com.            86400   IN      A       172.16.1.3

;; AUTHORITY SECTION:
example.com.            86400   IN      NS      ns1.example.com.

;; ADDITIONAL SECTION:
ns1.example.com.        86400   IN      A       172.16.1.3
</code></pre><h4 id="_2-使用dig测试ptr记录" tabindex="-1">2. 使用dig测试PTR记录 <a class="header-anchor" href="#_2-使用dig测试ptr记录" aria-label="Permalink to “2. 使用dig测试PTR记录”">​</a></h4><p>使用dig来测试时，必须时刻关注状态信息：“NOERROR”，任何其它值都表明存在问题。（译注，也可用 dig 1.1.16.172.in-addr.arpa. ptr 来测试。）</p><pre><code># dig -x 172.16.1.1 
</code></pre><hr><pre><code>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 27415

;; QUESTION SECTION:
;1.1.17.172.in-addr.arpa.       IN      PTR

;; ANSWER SECTION:
1.1.16.172.in-addr.arpa. 86400  IN      PTR     mail.example.tst.

;; AUTHORITY SECTION:
1.16.172.in-addr.arpa.  86400   IN      NS      ns1.example.tst.

;; ADDITIONAL SECTION:
ns1.example.tst.        86400   IN      A       172.16.1.3
</code></pre><h4 id="_3-使用dig测试mx记录" tabindex="-1">3. 使用dig测试MX记录 <a class="header-anchor" href="#_3-使用dig测试mx记录" aria-label="Permalink to “3. 使用dig测试MX记录”">​</a></h4><pre><code># dig example.tst mx 
</code></pre><hr><pre><code>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 35405

;; QUESTION SECTION:
;example.tst.                        IN      MX

;; ANSWER SECTION:
example.tst.         14366   IN      MX     10	mail.example.tst.
</code></pre><h3 id="排错提示" tabindex="-1">排错提示 <a class="header-anchor" href="#排错提示" aria-label="Permalink to “排错提示”">​</a></h3><ol><li>我已经把SELinux关闭。</li><li>保证防火墙没有阻挡UDP 53端口</li><li>万一出错，可在/var/log/messages中查看到有用的信息</li><li>确保区域文件的属主为‘named’</li><li>确保DNS服务器的IP地址是/etc/resolv.conf中的第一条目</li><li>如果你使用example.tst作为实验环境，确保将服务器从互联网断开，因为example.tst是一个不存在的域。</li></ol>`,73)),t("p",null,[e[16]||(e[16]=r("最后小结，该教程关注的是实验环境中配置example.tst域用作为演示。请注意，该教程中创建了一台公共DNS服务器，此服务器会回应来自任何源IP地址的查询。如果你是在配置DNS生产服务器，请确保检查与公共DNS相关的策略。其它教程涵盖了",-1)),n(d,{href:"http://xmodulo.com/2014/04/secondary-dns-server-centos.html"},{default:o(()=>[...e[14]||(e[14]=[r("创建从DNS服务器",-1)])]),_:1}),e[17]||(e[17]=r(", ",-1)),n(d,{href:"http://xmodulo.com/2014/04/close-open-dns-resolver.html"},{default:o(()=>[...e[15]||(e[15]=[r("限制对DNS服务器的访问",-1)])]),_:1}),e[18]||(e[18]=r("以及部署DNSSEC。",-1))]),e[35]||(e[35]=t("h2",{id:"希望此教程对您有所帮助。",tabindex:"-1"},[r("希望此教程对您有所帮助。 "),t("a",{class:"header-anchor",href:"#希望此教程对您有所帮助。","aria-label":"Permalink to “希望此教程对您有所帮助。”"},"​")],-1)),t("p",null,[e[20]||(e[20]=r("via: ",-1)),n(d,{href:"http://xmodulo.com/2014/04/primary-dns-server-using-centos.html"},{default:o(()=>[...e[19]||(e[19]=[r("http://xmodulo.com/2014/04/primary-dns-server-using-centos.html",-1)])]),_:1})]),t("p",null,[e[23]||(e[23]=r("译者：",-1)),n(d,{href:"https://github.com/GOLinux"},{default:o(()=>[...e[21]||(e[21]=[r("GOLinux",-1)])]),_:1}),e[24]||(e[24]=r(" 校对：",-1)),n(d,{href:"https://github.com/wxy"},{default:o(()=>[...e[22]||(e[22]=[r("wxy",-1)])]),_:1})]),t("p",null,[e[27]||(e[27]=r("本文由 ",-1)),n(d,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[25]||(e[25]=[r("LCTT",-1)])]),_:1}),e[28]||(e[28]=r(" 原创翻译，",-1)),n(d,{href:"http://linux.cn/"},{default:o(()=>[...e[26]||(e[26]=[r("Linux中国",-1)])]),_:1}),e[29]||(e[29]=r(" 荣誉推出",-1))])])}const g=s(N,[["render",c]]);export{T as __pageData,g as default};
