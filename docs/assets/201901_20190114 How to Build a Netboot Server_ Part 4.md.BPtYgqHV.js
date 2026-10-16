import{_ as l,a0 as o,w as c,s as r,ao as t,I as a,x as n,a1 as e,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何构建一台网络引导服务器（四） | LCTT x X-CMD","titleTemplate":false,"description":"如何构建一台网络引导服务器（四） | LCTT (201901) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何构建一台网络引导服务器（四） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何构建一台网络引导服务器（四） | LCTT (201901) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201901/20190114 How to Build a Netboot Server, Part 4","title":"如何构建一台网络引导服务器（四）","tag":"201901","desc":""},"relativePath":"201901/20190114 How to Build a Netboot Server, Part 4.md","filePath":"[post].md"}'),d={name:"201901/20190114 How to Build a Netboot Server, Part 4.md"};function u(g,s,h,m,k,b){const p=o("Link");return c(),r("div",null,[s[43]||(s[43]=t(`<h1 id="如何构建一台网络引导服务器-四" tabindex="-1">如何构建一台网络引导服务器（四） <a class="header-anchor" href="#如何构建一台网络引导服务器-四" aria-label="Permalink to “如何构建一台网络引导服务器（四）”">​</a></h1><p><img src="https://fedoramagazine.org/wp-content/uploads/2018/11/netboot4-816x345.jpg" alt=""></p><p>在本系列教程中所构建的网络引导服务器有一个很重要的限制，那就是所提供的操作系统镜像是只读的。一些使用场景或许要求终端用户能够修改操作系统镜像。例如，一些教师或许希望学生能够安装和配置一些像 MariaDB 和 Node.js 这样的包来做为他们课程练习的一部分。</p><p>可写镜像的另外的好处是，终端用户“私人定制”的操作系统，在下次不同的工作站上使用时能够“跟着”他们。</p><h3 id="修改-bootmenu-应用程序以使用-https" tabindex="-1">修改 Bootmenu 应用程序以使用 HTTPS <a class="header-anchor" href="#修改-bootmenu-应用程序以使用-https" aria-label="Permalink to “修改 Bootmenu 应用程序以使用 HTTPS”">​</a></h3><p>为 bootmenu 应用程序创建一个自签名的证书：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo -i</span></span>
<span class="line"><span># MY_NAME=$(&lt;/etc/hostname)</span></span>
<span class="line"><span># MY_TLSD=/opt/bootmenu/tls</span></span>
<span class="line"><span># mkdir $MY_TLSD</span></span>
<span class="line"><span># openssl req -newkey rsa:2048 -nodes -keyout $MY_TLSD/$MY_NAME.key -x509 -days 3650 -out $MY_TLSD/$MY_NAME.pem</span></span></code></pre></div><p>验证你的证书的值。确保 <code>Subject</code> 行中 <code>CN</code> 的值与你的 iPXE 客户端连接你的网络引导服务器所使用的 DNS 名字是相匹配的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># openssl x509 -text -noout -in $MY_TLSD/$MY_NAME.pem</span></span></code></pre></div><p>接下来，更新 bootmenu 应用程序去监听 HTTPS 端口和新创建的证书及密钥：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed -i &quot;s#listen =&gt; .*#listen =&gt; [&#39;https://$MY_NAME:443?cert=$MY_TLSD/$MY_NAME.pem\\&amp;key=$MY_TLSD/$MY_NAME.key\\&amp;ciphers=AES256-SHA256:AES128-SHA256:AES256-SHA:AES128-SHA&#39;],#&quot; /opt/bootmenu/bootmenu.conf</span></span></code></pre></div>`,11)),a("p",null,[s[1]||(s[1]=n("注意 ",-1)),e(p,{href:"http://ipxe.org/crypto"},{default:i(()=>[...s[0]||(s[0]=[n("iPXE 当前支持的",-1)])]),_:1}),s[2]||(s[2]=n(" 加密算法是有限制的。",-1))]),s[44]||(s[44]=t(`<p>GnuTLS 要求 “CAP_DAC_READ_SEARCH” 能力，因此将它添加到 bootmenu 应用程序的 systemd 服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed -i &#39;/^AmbientCapabilities=/ s/$/ CAP_DAC_READ_SEARCH/&#39; /etc/systemd/system/bootmenu.service</span></span>
<span class="line"><span># sed -i &#39;s/Serves iPXE Menus over HTTP/Serves iPXE Menus over HTTPS/&#39; /etc/systemd/system/bootmenu.service</span></span>
<span class="line"><span># systemctl daemon-reload</span></span></code></pre></div><p>现在，在防火墙中为 bootmenu 服务添加一个例外规则并重启动该服务：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># MY_SUBNET=192.0.2.0</span></span>
<span class="line"><span># MY_PREFIX=24</span></span>
<span class="line"><span># firewall-cmd --add-rich-rule=&quot;rule family=&#39;ipv4&#39; source address=&#39;$MY_SUBNET/$MY_PREFIX&#39; service name=&#39;https&#39; accept&quot;</span></span>
<span class="line"><span># firewall-cmd --runtime-to-permanent</span></span>
<span class="line"><span># systemctl restart bootmenu.service</span></span></code></pre></div><p>使用 <code>wget</code> 去验证是否工作正常：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ MY_NAME=server-01.example.edu</span></span>
<span class="line"><span>$ MY_TLSD=/opt/bootmenu/tls</span></span>
<span class="line"><span>$ wget -q --ca-certificate=$MY_TLSD/$MY_NAME.pem -O - https://$MY_NAME/menu</span></span></code></pre></div><h3 id="添加-https-到-ipxe" tabindex="-1">添加 HTTPS 到 iPXE <a class="header-anchor" href="#添加-https-到-ipxe" aria-label="Permalink to “添加 HTTPS 到 iPXE”">​</a></h3><p>更新 <code>init.ipxe</code> 去使用 HTTPS。接着使用选项重新编译 ipxe 引导加载器，以便它包含和信任你为 bootmenu 应用程序创建的自签名证书：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &#39;#define DOWNLOAD_PROTO_HTTPS&#39; &gt;&gt; $HOME/ipxe/src/config/local/general.h</span></span>
<span class="line"><span>$ sed -i &#39;s/^chain http:/chain https:/&#39; $HOME/ipxe/init.ipxe</span></span>
<span class="line"><span>$ cp $MY_TLSD/$MY_NAME.pem $HOME/ipxe</span></span>
<span class="line"><span>$ cd $HOME/ipxe/src</span></span>
<span class="line"><span>$ make clean</span></span>
<span class="line"><span>$ make bin-x86_64-efi/ipxe.efi EMBED=../init.ipxe CERT=&quot;../$MY_NAME.pem&quot; TRUST=&quot;../$MY_NAME.pem&quot;</span></span></code></pre></div><p>你现在可以将启用了 HTTPS 的 iPXE 引导加载器复制到你的客户端上，并测试它能否正常工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cp $HOME/ipxe/src/bin-x86_64-efi/ipxe.efi $HOME/esp/efi/boot/bootx64.efi</span></span></code></pre></div><h3 id="添加用户验证到-mojolicious-中" tabindex="-1">添加用户验证到 Mojolicious 中 <a class="header-anchor" href="#添加用户验证到-mojolicious-中" aria-label="Permalink to “添加用户验证到 Mojolicious 中”">​</a></h3><p>为 bootmenu 应用程序创建一个 PAM 服务定义：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf install -y pam_krb5</span></span>
<span class="line"><span># echo &#39;auth required pam_krb5.so&#39; &gt; /etc/pam.d/bootmenu</span></span></code></pre></div><p>添加一个库到 bootmenu 应用程序中，它使用 Authen-PAM 的 Perl 模块去执行用户验证：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf install -y perl-Authen-PAM;</span></span>
<span class="line"><span># MY_MOJO=/opt/bootmenu</span></span>
<span class="line"><span># mkdir $MY_MOJO/lib</span></span>
<span class="line"><span># cat &lt;&lt; &#39;END&#39; &gt; $MY_MOJO/lib/PAM.pm</span></span>
<span class="line"><span>package PAM;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use Authen::PAM;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sub auth {</span></span>
<span class="line"><span>   my $success = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   my $username = shift;</span></span>
<span class="line"><span>   my $password = shift;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   my $callback = sub {</span></span>
<span class="line"><span>      my @res;</span></span>
<span class="line"><span>      while (@_) {</span></span>
<span class="line"><span>         my $code = shift;</span></span>
<span class="line"><span>         my $msg = shift;</span></span>
<span class="line"><span>         my $ans = &quot;&quot;;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>         $ans = $username if ($code == PAM_PROMPT_ECHO_ON());</span></span>
<span class="line"><span>         $ans = $password if ($code == PAM_PROMPT_ECHO_OFF());</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>         push @res, (PAM_SUCCESS(), $ans);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      push @res, PAM_SUCCESS();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      return @res;</span></span>
<span class="line"><span>   };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   my $pamh = new Authen::PAM(&#39;bootmenu&#39;, $username, $callback);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      last unless ref $pamh;</span></span>
<span class="line"><span>      last unless $pamh-&gt;pam_authenticate() == PAM_SUCCESS;</span></span>
<span class="line"><span>      $success = 1;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return $success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return 1;</span></span>
<span class="line"><span>END</span></span></code></pre></div><p>以上的代码是一字不差是从 Authen::PAM::FAQ 的 man 页面中复制来的。</p><p>重定义 bootmenu 应用程序，以使它仅当提供了有效的用户名和密码之后返回一个网络引导模板：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat &lt;&lt; &#39;END&#39; &gt; $MY_MOJO/bootmenu.pl</span></span>
<span class="line"><span>#!/usr/bin/env perl</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use lib &#39;lib&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use PAM;</span></span>
<span class="line"><span>use Mojolicious::Lite;</span></span>
<span class="line"><span>use Mojolicious::Plugins;</span></span>
<span class="line"><span>use Mojo::Util (&#39;url_unescape&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plugin &#39;Config&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>get &#39;/menu&#39;;</span></span>
<span class="line"><span>get &#39;/boot&#39; =&gt; sub {</span></span>
<span class="line"><span>   my $c = shift;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   my $instance = $c-&gt;param(&#39;instance&#39;);</span></span>
<span class="line"><span>   my $username = $c-&gt;param(&#39;username&#39;);</span></span>
<span class="line"><span>   my $password = $c-&gt;param(&#39;password&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   my $template = &#39;menu&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      last unless $instance =~ /^fc[[:digit:]]{2}$/;</span></span>
<span class="line"><span>      last unless $username =~ /^[[:alnum:]]+$/;</span></span>
<span class="line"><span>      last unless PAM::auth($username, url_unescape($password));</span></span>
<span class="line"><span>      $template = $instance;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return $c-&gt;render(template =&gt; $template);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app-&gt;start;</span></span>
<span class="line"><span>END</span></span></code></pre></div><p>bootmenu 应用程序现在查找 <code>lib</code> 命令去找到相应的 <code>WorkingDirectory</code>。但是，默认情况下，对于 systemd 单元它的工作目录设置为服务器的 root 目录。因此，你必须更新 systemd 单元去设置 <code>WorkingDirectory</code> 为 bootmenu 应用程序的根目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed -i &quot;/^RuntimeDirectory=/ a WorkingDirectory=$MY_MOJO&quot; /etc/systemd/system/bootmenu.service</span></span>
<span class="line"><span># systemctl daemon-reload</span></span></code></pre></div><p>更新模块去使用重定义后的 bootmenu 应用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cd $MY_MOJO/templates</span></span>
<span class="line"><span># MY_BOOTMENU_SERVER=$(&lt;/etc/hostname)</span></span>
<span class="line"><span># MY_FEDORA_RELEASES=&quot;28 29&quot;</span></span>
<span class="line"><span># for i in $MY_FEDORA_RELEASES; do echo &#39;#!ipxe&#39; &gt; fc$i.html.ep; grep &quot;^kernel\\|initrd&quot; menu.html.ep | grep &quot;fc$i&quot; &gt;&gt; fc$i.html.ep; echo &quot;boot || chain https://$MY_BOOTMENU_SERVER/menu&quot; &gt;&gt; fc$i.html.ep; sed -i &quot;/^:f$i$/,/^boot /c :f$i\\nlogin\\nchain https://$MY_BOOTMENU_SERVER/boot?instance=fc$i\\&amp;username=\\\${username}\\&amp;password=\\\${password:uristring} || goto failed&quot; menu.html.ep; done</span></span></code></pre></div><p>上面的最后的命令将生成类似下面的三个文件：</p><p><code>menu.html.ep</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!ipxe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set timeout 5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:menu</span></span>
<span class="line"><span>menu iPXE Boot Menu</span></span>
<span class="line"><span>item --key 1 lcl 1. Microsoft Windows 10</span></span>
<span class="line"><span>item --key 2 f29 2. RedHat Fedora 29</span></span>
<span class="line"><span>item --key 3 f28 3. RedHat Fedora 28</span></span>
<span class="line"><span>choose --timeout \${timeout} --default lcl selected || goto shell</span></span>
<span class="line"><span>set timeout 0</span></span>
<span class="line"><span>goto \${selected}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:failed</span></span>
<span class="line"><span>echo boot failed, dropping to shell...</span></span>
<span class="line"><span>goto shell</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:shell</span></span>
<span class="line"><span>echo type &#39;exit&#39; to get the back to the menu</span></span>
<span class="line"><span>set timeout 0</span></span>
<span class="line"><span>shell</span></span>
<span class="line"><span>goto menu</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:lcl</span></span>
<span class="line"><span>exit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:f29</span></span>
<span class="line"><span>login</span></span>
<span class="line"><span>chain https://server-01.example.edu/boot?instance=fc29&amp;username=\${username}&amp;password=\${password:uristring} || goto failed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:f28</span></span>
<span class="line"><span>login</span></span>
<span class="line"><span>chain https://server-01.example.edu/boot?instance=fc28&amp;username=\${username}&amp;password=\${password:uristring} || goto failed</span></span></code></pre></div><p><code>fc29.html.ep</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!ipxe</span></span>
<span class="line"><span>kernel --name kernel.efi \${prefix}/vmlinuz-4.19.5-300.fc29.x86_64 initrd=initrd.img ro ip=dhcp rd.peerdns=0 nameserver=192.0.2.91 nameserver=192.0.2.92 root=/dev/disk/by-path/ip-192.0.2.158:3260-iscsi-iqn.edu.example.server-01:fc29-lun-1 netroot=iscsi:192.0.2.158::::iqn.edu.example.server-01:fc29 console=tty0 console=ttyS0,115200n8 audit=0 selinux=0 quiet</span></span>
<span class="line"><span>initrd --name initrd.img \${prefix}/initramfs-4.19.5-300.fc29.x86_64.img</span></span>
<span class="line"><span>boot || chain https://server-01.example.edu/menu</span></span></code></pre></div><p><code>fc28.html.ep</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!ipxe</span></span>
<span class="line"><span>kernel --name kernel.efi \${prefix}/vmlinuz-4.19.3-200.fc28.x86_64 initrd=initrd.img ro ip=dhcp rd.peerdns=0 nameserver=192.0.2.91 nameserver=192.0.2.92 root=/dev/disk/by-path/ip-192.0.2.158:3260-iscsi-iqn.edu.example.server-01:fc28-lun-1 netroot=iscsi:192.0.2.158::::iqn.edu.example.server-01:fc28 console=tty0 console=ttyS0,115200n8 audit=0 selinux=0 quiet</span></span>
<span class="line"><span>initrd --name initrd.img \${prefix}/initramfs-4.19.3-200.fc28.x86_64.img</span></span>
<span class="line"><span>boot || chain https://server-01.example.edu/menu</span></span></code></pre></div><p>现在，重启动 bootmenu 应用程序，并验证用户认证是否正常工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># systemctl restart bootmenu.service</span></span></code></pre></div><h3 id="使得-iscsi-target-可写" tabindex="-1">使得 iSCSI Target 可写 <a class="header-anchor" href="#使得-iscsi-target-可写" aria-label="Permalink to “使得 iSCSI Target 可写”">​</a></h3>`,33)),a("p",null,[s[4]||(s[4]=n("现在，用户验证通过 iPXE 可以正常工作，在用户连接时，你可以按需在只读镜像的上面创建每用户可写的",-1)),s[5]||(s[5]=a("ruby",null,[n("overlay"),a("rt",null,"叠加层")],-1)),s[6]||(s[6]=n("。使用一个 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Copy-on-write"},{default:i(()=>[...s[3]||(s[3]=[n("写时复制",-1)])]),_:1}),s[7]||(s[7]=n(" 的叠加层与简单地为每个用户复制原始镜像相比有三个好处：",-1))]),s[45]||(s[45]=t(`<ol><li>副本创建非常快。这样就可以按需创建。</li><li>副本并不增加服务器上的磁盘使用。除了原始镜像之外，仅存储用户写入个人镜像的内容。</li><li>由于每个副本的扇区大多都是服务器的存储器上的相同扇区，在随后的用户访问这些操作系统的副本时，它们可能已经加载到内存中，这样就提升了服务器的性能，因为对内存的访问速度要比磁盘 I/O 快得多。</li></ol><p>使用写时复制的一个潜在隐患是，一旦叠加层创建后，叠加层之下的镜像就不能再改变。如果它们改变，所有它们之上的叠加层将出错。因此，叠加层必须被删除并用新的、空白的进行替换。即便只是简单地以读写模式加载的镜像，也可能因为某些文件系统更新导致叠加层出错。</p><p>由于这个隐患，如果原始镜像被修改将导致叠加层出错，因此运行下列的命令，将原始镜像标记为不可改变：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># chattr +i &lt;/path/to/file&gt;</span></span></code></pre></div><p>你可以使用 <code>lsattr &lt;/path/to/file&gt;</code> 去查看不可改变标志，并可以使用 <code>chattr -i &lt;/path/to/file&gt;</code> 取消设置不可改变标志。在设置了不可改变标志之后，即便是 root 用户或以 root 运行的系统进程也不修改或删除这个文件。</p><p>停止 tgtd.service 之后，你就可以改变镜像文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># systemctl stop tgtd.service</span></span></code></pre></div><p>当仍有连接打开的时候，运行这个命令一般需要一分钟或更长的时间。</p><p>现在，移除只读的 iSCSI 出口。然后更新模板中的 <code>readonly-root</code> 配置文件，以使镜像不再是只读的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># MY_FC=fc29</span></span>
<span class="line"><span># rm -f /etc/tgt/conf.d/$MY_FC.conf</span></span>
<span class="line"><span># TEMP_MNT=$(mktemp -d)</span></span>
<span class="line"><span># mount /$MY_FC.img $TEMP_MNT</span></span>
<span class="line"><span># sed -i &#39;s/^READONLY=yes$/READONLY=no/&#39; $TEMP_MNT/etc/sysconfig/readonly-root</span></span>
<span class="line"><span># sed -i &#39;s/^Storage=volatile$/#Storage=auto/&#39; $TEMP_MNT/etc/systemd/journald.conf</span></span>
<span class="line"><span># umount $TEMP_MNT</span></span></code></pre></div><p>将 journald 日志从发送到内存修改回缺省值（如果 <code>/var/log/journal</code> 存在的话记录到磁盘），因为一个用户报告说，他的客户端由于应用程序生成了大量的系统日志而产生内存溢出错误，导致它的客户端被卡住。而将日志记录到磁盘的负面影响是客户端产生了额外的写入流量，这将在你的网络引导服务器上可能增加一些没有必要的 I/O。你应该去决定到底使用哪个选择 —— 记录到内存还是记录到硬盘 —— 哪个更合适取决于你的环境。</p><p>因为你的模板镜像在以后不能做任何的更改，因此在它上面设置不可更改标志，然后重启动 tgtd.service：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># chattr +i /$MY_FC.img</span></span>
<span class="line"><span># systemctl start tgtd.service</span></span></code></pre></div><p>现在，更新 bootmenu 应用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat &lt;&lt; &#39;END&#39; &gt; $MY_MOJO/bootmenu.pl</span></span>
<span class="line"><span>#!/usr/bin/env perl</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use lib &#39;lib&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use PAM;</span></span>
<span class="line"><span>use Mojolicious::Lite;</span></span>
<span class="line"><span>use Mojolicious::Plugins;</span></span>
<span class="line"><span>use Mojo::Util (&#39;url_unescape&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plugin &#39;Config&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>get &#39;/menu&#39;;</span></span>
<span class="line"><span>get &#39;/boot&#39; =&gt; sub {</span></span>
<span class="line"><span>   my $c = shift;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   my $instance = $c-&gt;param(&#39;instance&#39;);</span></span>
<span class="line"><span>   my $username = $c-&gt;param(&#39;username&#39;);</span></span>
<span class="line"><span>   my $password = $c-&gt;param(&#39;password&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   my $chapscrt;</span></span>
<span class="line"><span>   my $template = &#39;menu&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      last unless $instance =~ /^fc[[:digit:]]{2}$/;</span></span>
<span class="line"><span>      last unless $username =~ /^[[:alnum:]]+$/;</span></span>
<span class="line"><span>      last unless PAM::auth($username, url_unescape($password));</span></span>
<span class="line"><span>      last unless $chapscrt = \`sudo scripts/mktgt $instance $username\`;</span></span>
<span class="line"><span>      $template = $instance;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return $c-&gt;render(template =&gt; $template, username =&gt; $username, chapscrt =&gt; $chapscrt);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app-&gt;start;</span></span>
<span class="line"><span>END</span></span></code></pre></div>`,15)),a("p",null,[s[9]||(s[9]=n("新版本的 bootmenu 应用程序调用一个定制的 ",-1)),s[10]||(s[10]=a("code",null,"mktgt",-1)),s[11]||(s[11]=n(" 脚本，如果成功，它将为每个它自己创建的新的 iSCSI 目标返回一个随机的 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Challenge-Handshake_Authentication_Protocol"},{default:i(()=>[...s[8]||(s[8]=[n("CHAP",-1)])]),_:1}),s[12]||(s[12]=n(" 密码。这个 CHAP 密码可以防止其它用户的 iSCSI 目标以间接方式挂载这个用户的目标。这个应用程序只有在用户密码认证成功之后才返回一个正确的 iSCSI 目标密码。",-1))]),s[46]||(s[46]=t(`<p><code>mktgt</code> 脚本要加 <code>sudo</code> 前缀来运行，因为它需要 root 权限去创建目标。</p><p><code>$username</code> 和 <code>$chapscrt</code> 变量也传递给 <code>render</code> 命令，因此在需要的时候，它们也能够被纳入到模板中返回给用户。</p><p>接下来，更新我们的引导模板，以便于它们能够读取用户名和 <code>chapscrt</code> 变量，并传递它们到所属的终端用户。也要更新模板以 rw（读写）模式加载根文件系统：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cd $MY_MOJO/templates</span></span>
<span class="line"><span># sed -i &quot;s/:$MY_FC/:$MY_FC-&lt;%= \\$username %&gt;/g&quot; $MY_FC.html.ep</span></span>
<span class="line"><span># sed -i &quot;s/ netroot=iscsi:/ netroot=iscsi:&lt;%= \\$username %&gt;:&lt;%= \\$chapscrt %&gt;@/&quot; $MY_FC.html.ep</span></span>
<span class="line"><span># sed -i &quot;s/ ro / rw /&quot; $MY_FC.html.ep</span></span></code></pre></div><p>运行上面的命令后，你应该会看到如下的引导模板：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!ipxe</span></span>
<span class="line"><span>kernel --name kernel.efi \${prefix}/vmlinuz-4.19.5-300.fc29.x86_64 initrd=initrd.img rw ip=dhcp rd.peerdns=0 nameserver=192.0.2.91 nameserver=192.0.2.92 root=/dev/disk/by-path/ip-192.0.2.158:3260-iscsi-iqn.edu.example.server-01:fc29-&lt;%= $username %&gt;-lun-1 netroot=iscsi:&lt;%= $username %&gt;:&lt;%= $chapscrt %&gt;@192.0.2.158::::iqn.edu.example.server-01:fc29-&lt;%= $username %&gt; console=tty0 console=ttyS0,115200n8 audit=0 selinux=0 quiet</span></span>
<span class="line"><span>initrd --name initrd.img \${prefix}/initramfs-4.19.5-300.fc29.x86_64.img</span></span>
<span class="line"><span>boot || chain https://server-01.example.edu/menu</span></span></code></pre></div>`,6)),a("p",null,[s[14]||(s[14]=n("注意：如果在 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/String_interpolation"},{default:i(()=>[...s[13]||(s[13]=[n("插入",-1)])]),_:1}),s[15]||(s[15]=n(" 变量后需要查看引导模板，你可以在 ",-1)),s[16]||(s[16]=a("code",null,"boot",-1)),s[17]||(s[17]=n(" 命令之前，在它自己的行中插入 ",-1)),s[18]||(s[18]=a("code",null,"shell",-1)),s[19]||(s[19]=n(" 命令。然后在你网络引导你的客户端时，iPXE 将在那里给你提供一个用于交互的 shell，你可以在 shell 中输入 ",-1)),s[20]||(s[20]=a("code",null,"imgstat",-1)),s[21]||(s[21]=n(" 去查看传递到内核的参数。如果一切正确，你可以输入 ",-1)),s[22]||(s[22]=a("code",null,"exit",-1)),s[23]||(s[23]=n(" 去退出 shell 并继续引导过程。",-1))]),s[47]||(s[47]=t(`<p>现在，通过 <code>sudo</code> 允许 bootmenu 用户以 root 权限去运行 <code>mktgt</code> 脚本（仅这个脚本）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># echo &quot;bootmenu ALL = NOPASSWD: $MY_MOJO/scripts/mktgt *&quot; &gt; /etc/sudoers.d/bootmenu</span></span></code></pre></div><p>bootmenu 用户不应该写访问 <code>mktgt</code> 脚本或在它的家目录下的任何其它文件。在 <code>/opt/bootmenu</code> 目录下的所有文件的属主应该是 root，并且不应该被其它任何 root 以外的用户可写。</p><p><code>sudo</code> 在使用 systemd 的 <code>DynamicUser</code> 选项下不能正常工作，因此创建一个普通用户帐户，并设置 systemd 服务以那个用户运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># useradd -r -c &#39;iPXE Boot Menu Service&#39; -d /opt/bootmenu -s /sbin/nologin bootmenu</span></span>
<span class="line"><span># sed -i &#39;s/^DynamicUser=true$/User=bootmenu/&#39; /etc/systemd/system/bootmenu.service</span></span>
<span class="line"><span># systemctl daemon-reload</span></span></code></pre></div><p>最后，为写时复制覆盖创建一个目录，并创建管理 iSCSI 目标的 <code>mktgt</code> 脚本和它们的覆盖支持存储：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mkdir /$MY_FC.cow</span></span>
<span class="line"><span># mkdir $MY_MOJO/scripts</span></span>
<span class="line"><span># cat &lt;&lt; &#39;END&#39; &gt; $MY_MOJO/scripts/mktgt</span></span>
<span class="line"><span>#!/usr/bin/env perl</span></span>
<span class="line"><span></span></span>
<span class="line"><span># if another instance of this script is running, wait for it to finish</span></span>
<span class="line"><span>&quot;$ENV{FLOCKER}&quot; eq &#39;MKTGT&#39; or exec &quot;env FLOCKER=MKTGT flock /tmp $0 @ARGV&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># use &quot;RETURN&quot; to print to STDOUT; everything else goes to STDERR by default</span></span>
<span class="line"><span>open(RETURN, &#39;&gt;&amp;&#39;, STDOUT);</span></span>
<span class="line"><span>open(STDOUT, &#39;&gt;&amp;&#39;, STDERR);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $instance = shift or die &quot;instance not provided&quot;;</span></span>
<span class="line"><span>my $username = shift or die &quot;username not provided&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $img = &quot;/$instance.img&quot;;</span></span>
<span class="line"><span>my $dir = &quot;/$instance.cow&quot;;</span></span>
<span class="line"><span>my $top = &quot;$dir/$username&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-f &quot;$img&quot; or die &quot;&#39;$img&#39; is not a file&quot;; </span></span>
<span class="line"><span>-d &quot;$dir&quot; or die &quot;&#39;$dir&#39; is not a directory&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $base;</span></span>
<span class="line"><span>die unless $base = \`losetup --show --read-only --nooverlap --find $img\`;</span></span>
<span class="line"><span>chomp $base;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $size;</span></span>
<span class="line"><span>die unless $size = \`blockdev --getsz $base\`;</span></span>
<span class="line"><span>chomp $size;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># create the per-user sparse file if it does not exist</span></span>
<span class="line"><span>if (! -e &quot;$top&quot;) {</span></span>
<span class="line"><span>   die unless system(&quot;dd if=/dev/zero of=$top status=none bs=512 count=0 seek=$size&quot;) == 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># create the copy-on-write overlay if it does not exist</span></span>
<span class="line"><span>my $cow=&quot;$instance-$username&quot;;</span></span>
<span class="line"><span>my $dev=&quot;/dev/mapper/$cow&quot;;</span></span>
<span class="line"><span>if (! -e &quot;$dev&quot;) {</span></span>
<span class="line"><span>   my $over;</span></span>
<span class="line"><span>   die unless $over = \`losetup --show --nooverlap --find $top\`;</span></span>
<span class="line"><span>   chomp $over;</span></span>
<span class="line"><span>   die unless system(&quot;echo 0 $size snapshot $base $over p 8 | dmsetup create $cow&quot;) == 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $tgtadm = &#39;/usr/sbin/tgtadm --lld iscsi&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get textual representations of the iscsi targets</span></span>
<span class="line"><span>my $text = \`$tgtadm --op show --mode target\`;</span></span>
<span class="line"><span>my @targets = $text =~ /(?:^T.*\\n)(?:^ .*\\n)*/mg;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># convert the textual representations into a hash table</span></span>
<span class="line"><span>my $targets = {};</span></span>
<span class="line"><span>foreach (@targets) {</span></span>
<span class="line"><span>   my $tgt;</span></span>
<span class="line"><span>   my $sid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   foreach (split /\\n/) {</span></span>
<span class="line"><span>      /^Target (\\d+)(?{ $tgt = $targets-&gt;{$^N} = [] })/;</span></span>
<span class="line"><span>      /I_T nexus: (\\d+)(?{ $sid = $^N })/;</span></span>
<span class="line"><span>      /Connection: (\\d+)(?{ push @{$tgt}, [ $sid, $^N ] })/;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $hostname;</span></span>
<span class="line"><span>die unless $hostname = \`hostname\`;</span></span>
<span class="line"><span>chomp $hostname;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $target = &#39;iqn.&#39; . join(&#39;.&#39;, reverse split(&#39;\\.&#39;, $hostname)) . &quot;:$cow&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># find the target id corresponding to the provided target name and</span></span>
<span class="line"><span># close any existing connections to it</span></span>
<span class="line"><span>my $tid = 0;</span></span>
<span class="line"><span>foreach (@targets) {</span></span>
<span class="line"><span>   next unless /^Target (\\d+)(?{ $tid = $^N }): $target$/m;</span></span>
<span class="line"><span>   foreach (@{$targets-&gt;{$tid}}) {</span></span>
<span class="line"><span>      die unless system(&quot;$tgtadm --op delete --mode conn --tid $tid --sid $_-&gt;[0] --cid $_-&gt;[1]&quot;) == 0;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># create a new target if an existing one was not found</span></span>
<span class="line"><span>if ($tid == 0) {</span></span>
<span class="line"><span>   # find an available target id</span></span>
<span class="line"><span>   my @ids = (0, sort keys %{$targets});</span></span>
<span class="line"><span>   $tid = 1; while ($ids[$tid]==$tid) { $tid++ }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   # create the target</span></span>
<span class="line"><span>   die unless -e &quot;$dev&quot;;</span></span>
<span class="line"><span>   die unless system(&quot;$tgtadm --op new --mode target --tid $tid --targetname $target&quot;) == 0;</span></span>
<span class="line"><span>   die unless system(&quot;$tgtadm --op new --mode logicalunit --tid $tid --lun 1 --backing-store $dev&quot;) == 0;</span></span>
<span class="line"><span>   die unless system(&quot;$tgtadm --op bind --mode target --tid $tid --initiator-address ALL&quot;) == 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># (re)set the provided target&#39;s chap password</span></span>
<span class="line"><span>my $password = join(&#39;&#39;, map(chr(int(rand(26))+65), 1..8));</span></span>
<span class="line"><span>my $accounts = \`$tgtadm --op show --mode account\`;</span></span>
<span class="line"><span>if ($accounts =~ / $username$/m) {</span></span>
<span class="line"><span>   die unless system(&quot;$tgtadm --op delete --mode account --user $username&quot;) == 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>die unless system(&quot;$tgtadm --op new --mode account --user $username --password $password&quot;) == 0;</span></span>
<span class="line"><span>die unless system(&quot;$tgtadm --op bind --mode account --tid $tid --user $username&quot;) == 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># return the new password to the iscsi target on stdout</span></span>
<span class="line"><span>print RETURN $password;</span></span>
<span class="line"><span>END</span></span>
<span class="line"><span># chmod +x $MY_MOJO/scripts/mktgt</span></span></code></pre></div><p>上面的脚本将做以下五件事情：</p>`,8)),a("ol",null,[s[27]||(s[27]=t("<li>创建 <code>/&lt;instance&gt;.cow/&lt;username&gt;</code> 稀疏文件（如果不存在的话）。</li><li>创建 <code>/dev/mapper/&lt;instance&gt;-&lt;username&gt;</code> 设备节点作为 iSCSI 目标的写时复制支持存储（如果不存在的话）。</li><li>创建 <code>iqn.&lt;reverse-hostname&gt;:&lt;instance&gt;-&lt;username&gt;</code> iSCSI 目标（如果不存在的话）。或者，如果已存在了，它将关闭任何已存在的连接，因为在任何时刻，镜像只能以只读模式从一个地方打开。</li><li>它在 <code>iqn.&lt;reverse-hostname&gt;:&lt;instance&gt;-&lt;username&gt;</code> iSCSI 目标上（重新）设置 chap 密码为一个新的随机值。</li>",4)),a("li",null,[s[25]||(s[25]=n("（如果前面的所有任务都成功的话）它在 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Standard_streams"},{default:i(()=>[...s[24]||(s[24]=[n("标准输出",-1)])]),_:1}),s[26]||(s[26]=n(" 上显示新的 chap 密码。",-1))])]),s[48]||(s[48]=t(`<p>你应该可以在命令行上通过使用有效的测试参数来运行它，以测试 <code>mktgt</code> 脚本能否正常工作。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># echo \`$MY_MOJO/scripts/mktgt fc29 jsmith\`</span></span></code></pre></div><p>当你从命令行上运行时，<code>mktgt</code> 脚本应该会输出 iSCSI 目标的一个随意的八字符随机密码（如果成功的话）或者是出错位置的行号（如果失败的话）。</p><p>有时候，你可能需要在不停止整个服务的情况下删除一个 iSCSI 目标。例如，一个用户可能无意中损坏了他的个人镜像，在那种情况下，你可能需要按步骤撤销上面的 <code>mktgt</code> 脚本所做的事情，以便于他下次登入时他将得到一个原始镜像。</p><p>下面是用于撤销的 <code>rmtgt</code> 脚本，它以相反的顺序做了上面 <code>mktgt</code> 脚本所做的事情：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mkdir $HOME/bin</span></span>
<span class="line"><span># cat &lt;&lt; &#39;END&#39; &gt; $HOME/bin/rmtgt</span></span>
<span class="line"><span>#!/usr/bin/env perl</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@ARGV &gt;= 2 or die &quot;usage: $0 &lt;instance&gt; &lt;username&gt; [+d|+f]\\n&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $instance = shift;</span></span>
<span class="line"><span>my $username = shift;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $rmd = ($ARGV[0] eq &#39;+d&#39;); #remove device node if +d flag is set</span></span>
<span class="line"><span>my $rmf = ($ARGV[0] eq &#39;+f&#39;); #remove sparse file if +f flag is set</span></span>
<span class="line"><span>my $cow = &quot;$instance-$username&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $hostname;</span></span>
<span class="line"><span>die unless $hostname = \`hostname\`;</span></span>
<span class="line"><span>chomp $hostname;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $tgtadm = &#39;/usr/sbin/tgtadm&#39;;</span></span>
<span class="line"><span>my $target = &#39;iqn.&#39; . join(&#39;.&#39;, reverse split(&#39;\\.&#39;, $hostname)) . &quot;:$cow&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $text = \`$tgtadm --op show --mode target\`;</span></span>
<span class="line"><span>my @targets = $text =~ /(?:^T.*\\n)(?:^ .*\\n)*/mg;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $targets = {};</span></span>
<span class="line"><span>foreach (@targets) {</span></span>
<span class="line"><span>   my $tgt;</span></span>
<span class="line"><span>   my $sid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   foreach (split /\\n/) {</span></span>
<span class="line"><span>      /^Target (\\d+)(?{ $tgt = $targets-&gt;{$^N} = [] })/;</span></span>
<span class="line"><span>      /I_T nexus: (\\d+)(?{ $sid = $^N })/;</span></span>
<span class="line"><span>      /Connection: (\\d+)(?{ push @{$tgt}, [ $sid, $^N ] })/;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $tid = 0;</span></span>
<span class="line"><span>foreach (@targets) {</span></span>
<span class="line"><span>   next unless /^Target (\\d+)(?{ $tid = $^N }): $target$/m;</span></span>
<span class="line"><span>   foreach (@{$targets-&gt;{$tid}}) {</span></span>
<span class="line"><span>      die unless system(&quot;$tgtadm --op delete --mode conn --tid $tid --sid $_-&gt;[0] --cid $_-&gt;[1]&quot;) == 0;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   die unless system(&quot;$tgtadm --op delete --mode target --tid $tid&quot;) == 0;</span></span>
<span class="line"><span>   print &quot;target $tid deleted\\n&quot;;</span></span>
<span class="line"><span>   sleep 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>my $dev = &quot;/dev/mapper/$cow&quot;;</span></span>
<span class="line"><span>if ($rmd or ($rmf and -e $dev)) {</span></span>
<span class="line"><span>   die unless system(&quot;dmsetup remove $cow&quot;) == 0;</span></span>
<span class="line"><span>   print &quot;device node $dev deleted\\n&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if ($rmf) {</span></span>
<span class="line"><span>   my $sf = &quot;/$instance.cow/$username&quot;;</span></span>
<span class="line"><span>   die &quot;sparse file $sf not found&quot; unless -e &quot;$sf&quot;;</span></span>
<span class="line"><span>   die unless system(&quot;rm -f $sf&quot;) == 0;</span></span>
<span class="line"><span>   die unless not -e &quot;$sf&quot;;</span></span>
<span class="line"><span>   print &quot;sparse file $sf deleted\\n&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>END</span></span>
<span class="line"><span># chmod +x $HOME/bin/rmtgt</span></span></code></pre></div><p>例如，使用上面的脚本去完全删除 fc29-jsmith 目标，包含它的支持存储设备节点和稀疏文件，可以按下列方式运行命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rmtgt fc29 jsmith +f</span></span></code></pre></div><p>一旦你验证 <code>mktgt</code> 脚本工作正常，你可以重启动 bootmenu 服务。下次有人从网络引导时，他们应该能够接收到一个他们可以写入的、可”私人定制“的网络引导镜像的副本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># systemctl restart bootmenu.service</span></span></code></pre></div><p>现在，就像下面的截屏示范的那样，用户应该可以修改根文件系统了：</p><p><img src="https://fedoramagazine.org/wp-content/uploads/2018/11/netboot-fix-pam_mount-1024x819.png" alt=""></p><hr>`,13)),a("p",null,[s[29]||(s[29]=n("via: ",-1)),e(p,{href:"https://fedoramagazine.org/how-to-build-a-netboot-server-part-4/"},{default:i(()=>[...s[28]||(s[28]=[n("https://fedoramagazine.org/how-to-build-a-netboot-server-part-4/",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("作者：",-1)),e(p,{href:"https://fedoramagazine.org/author/glb/"},{default:i(()=>[...s[30]||(s[30]=[n("Gregory Bartholomew",-1)])]),_:1}),s[35]||(s[35]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[31]||(s[31]=[n("lujun9972",-1)])]),_:1}),s[36]||(s[36]=n(" 译者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:i(()=>[...s[32]||(s[32]=[n("qhwdw",-1)])]),_:1}),s[37]||(s[37]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[33]||(s[33]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[40]||(s[40]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[38]||(s[38]=[n("LCTT",-1)])]),_:1}),s[41]||(s[41]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[39]||(s[39]=[n("Linux中国",-1)])]),_:1}),s[42]||(s[42]=n(" 荣誉推出",-1))])])}const v=l(d,[["render",u]]);export{y as __pageData,v as default};
