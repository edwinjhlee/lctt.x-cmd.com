import{_ as r,a0 as i,w as d,s as m,ao as p,I as a,x as e,a1 as t,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"如何在Linux中显示和设置主机名 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux中显示和设置主机名 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux中显示和设置主机名 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux中显示和设置主机名 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/How To Display And Set Hostname in Linux","title":"如何在Linux中显示和设置主机名","tag":"201312","desc":""},"relativePath":"201312/How To Display And Set Hostname in Linux.md","filePath":"[post].md"}'),h={name:"201312/How To Display And Set Hostname in Linux.md"};function l(c,n,g,u,x,v){const o=i("Link");return d(),m("div",null,[n[11]||(n[11]=p(`<h1 id="如何在linux中显示和设置主机名" tabindex="-1">如何在Linux中显示和设置主机名 <a class="header-anchor" href="#如何在linux中显示和设置主机名" aria-label="Permalink to “如何在Linux中显示和设置主机名”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/11/hostname-command-linux.jpg" alt=""></p><p>随着连接到网络的计算机数量越来越多，每一台计算机都需要有一个属性来区别于其它计算机。和现实世界中的人一样，计算机也有一个叫做hostname（主机名）的属性。</p><h3 id="什么是hostname" tabindex="-1">什么是hostname <a class="header-anchor" href="#什么是hostname" aria-label="Permalink to “什么是hostname”">​</a></h3><p>从它的操作手册来看，hostname是用来显示系统的DNS名字以及为了显示和设置它的主机名或者NIS域名名字。所以hostname依赖于DNS（Domain Name System域名系统）或者NIS（Network Information System网络信息系统）。</p><h3 id="怎么显示hostname" tabindex="-1">怎么显示hostname <a class="header-anchor" href="#怎么显示hostname" aria-label="Permalink to “怎么显示hostname”">​</a></h3><p>hostname是为每一个linux发行版的预安装命令。通过在控制台输入hostname，可以显示你的机器的hostname。这里有一个有个简单的命令及其输出。</p><pre><code>$ hostname
ubuntu
</code></pre><p>上面的命令将会告诉你，计算机的名字是<strong>ubuntu</strong> 。</p><h3 id="如何设置hostname" tabindex="-1">如何设置hostname <a class="header-anchor" href="#如何设置hostname" aria-label="Permalink to “如何设置hostname”">​</a></h3><p>Hostname是在你第一次安装Linux的时候设置。其中有一个步骤Linux会让你输入主机名称的信息。不过，如果你愿意的话，你在之后设置也可以。</p><p>设置你的hostname，你可以使用下面的命令：</p><pre><code># hostname dev-machine

$ hostname
dev-machine
</code></pre><p>你<strong>需要使用root权限</strong>，或者等同root的权限来设置/修改你计算机的主机名。“#”标识证明你是root用户。上述命令把你的计算机主机名设置成为<strong>dev-machine</strong>。如果你没有收到任何报错信息，那么你的hostname已经改变了。再一次使用hostname命令检查，看看结果。</p><p>使用hostname命令设置你的hostname <strong>不是永久的</strong> 。当你重启你的计算机，你的设定将会失效。 <strong>为了永久改变</strong> ，你必须手动修改hostname配置文件。</p><p><strong>Debian / Ubuntu系的Linux</strong></p><p>你可以在 <strong>/etc/hostname</strong> 和 <strong>/etc/hosts</strong> 文件夹中找到这个文件</p><p>下面是每一个文件的内容</p><p><strong>/etc/hostname</strong></p><pre><code># vi /etc/hostname
dev-machine
</code></pre><p><strong>/etc/hosts</strong></p><pre><code># vi /etc/hosts
127.0.0.1 localhost
127.0.0.1 dev-machine
</code></pre><p>你将会发现不用重启你的linux它就即刻生效。</p><p><strong>RedHat / CentOS系的Linux</strong></p><p>你可以在 <strong>/etc/hosts</strong> 和 <strong>/etc/sysconfig/networks</strong> 文件夹中找到这个文件。</p><p>下面是每一个文件的内容</p><p><strong>/etc/hosts</strong></p><pre><code>127.0.0.1 localhost.localdomain localhost dev-machine
::localhost 127.0.0.1
</code></pre><p><strong>/etc/sysconfig/network</strong></p><pre><code>NETWORKING=yes
NETWORKING_IPV6=no
HOSTNAME=dev-machine
</code></pre><h3 id="怎么显示dns域名" tabindex="-1">怎么显示DNS域名 <a class="header-anchor" href="#怎么显示dns域名" aria-label="Permalink to “怎么显示DNS域名”">​</a></h3><p>来自上面的hostname的定义，hostname也可以显示你的Linux的DNS名字。如果你的hostname命令会显示你的hostname，那么dnsdomainname命令也就会显示你的域名。来看看这个简单的例子。</p><pre><code>$ dnsdomainname
bris.co.id
</code></pre><p>在本篇文章，dnsdomainname命令的结果是 <strong>bris.co.id</strong>。</p><p>如果你看见结果是 (<strong>none</strong>)，那么你的机器<strong>没有配置FQDN（Fully Qualified Domain Name 完全符合标准的域名）</strong> 。dnsdomainname命令摘取来自<strong>/etc/hosts</strong>文件的信息。你应该配置它为FQDN格式。下面是一个简单的例子：</p><p><strong>/etc/hosts</strong></p><pre><code>127.0.0.1 localhost.localdomain localhost dev-machine
::localhost 127.0.0.1
192.168.0.104 dev-machine.bris.co.id dev-machine
</code></pre><p>为了显示更多的细节，你可以使用参数<strong>-v</strong></p><pre><code>$ dnsdomainname -v
gethostname()=’dev-machine.bris.co.id’
Resolving ‘dev-machine.bris.co.id’ …
Result: h_name=’dev-machine.bris.co.id’
Result: h_aliases=’dev-machine’
Result: h_addr_list=’192.168.0.104’
</code></pre><h3 id="如何显示hostname的更多细节信息" tabindex="-1">如何显示hostname的更多细节信息### <a class="header-anchor" href="#如何显示hostname的更多细节信息" aria-label="Permalink to “如何显示hostname的更多细节信息###”">​</a></h3><p>Hostname命令可以使用多个参数和一些别名，比如dnsdomainname命令就是它的一个别名。这些参数在每日操作中是有用的。下面这些命令的结果是基于<strong>/etc/hosts</strong>的上述配置。</p><p><strong>显示IP地址</strong></p><pre><code>$ hostname -i
192.168.0.104
</code></pre><p><strong>显示域名</strong></p><pre><code>$ hostname -d
bris.co.id
</code></pre><p><strong>显示短主机名</strong> $ hostname -s dev-machine</p><p><em>这个命令将会产生与只输入hostname同样的结果</em></p><p><strong>显示FQDN格式</strong></p><pre><code>$ hostname -f
dev-machine.bris.co.id
</code></pre><p><strong>显示细节信息</strong></p><p>所有的参数包括上述信息，都可以通过使用参数<strong>-v</strong> 和 <strong>-d</strong> 来概括。让我们来看一个例子。</p><pre><code>$ hostname -v -d
gethostname()=’dev-machine.bris.co.id’
Resolving ‘dev-machine.bris.co.id’ …
 Result: h_name=’dev-machine.bris.co.id’
Result: h_aliases=’dev-machine’
Result: h_addr_list=’192.168.0.104’ 
bris.co.id
</code></pre><p>觉得熟悉吗？没错，运行结果与上面提到的 <strong>dnsdomainname -v</strong> 命令式相同的。</p><hr>`,54)),a("p",null,[n[1]||(n[1]=e("via: ",-1)),t(o,{href:"http://linoxide.com/linux-command/display-set-hostname-linux/"},{default:s(()=>[...n[0]||(n[0]=[e("http://linoxide.com/linux-command/display-set-hostname-linux/",-1)])]),_:1})]),a("p",null,[n[4]||(n[4]=e("译者：",-1)),t(o,{href:"http://blog.csdn.net/Vic___"},{default:s(()=>[...n[2]||(n[2]=[e("Vic___",-1)])]),_:1}),n[5]||(n[5]=e(" 校对：",-1)),t(o,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...n[3]||(n[3]=[e("Caroline",-1)])]),_:1})]),a("p",null,[n[8]||(n[8]=e("本文由 ",-1)),t(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...n[6]||(n[6]=[e("LCTT",-1)])]),_:1}),n[9]||(n[9]=e(" 原创翻译，",-1)),t(o,{href:"http://linux.cn/"},{default:s(()=>[...n[7]||(n[7]=[e("Linux中国",-1)])]),_:1}),n[10]||(n[10]=e(" 荣誉推出",-1))])])}const _=r(h,[["render",l]]);export{T as __pageData,_ as default};
