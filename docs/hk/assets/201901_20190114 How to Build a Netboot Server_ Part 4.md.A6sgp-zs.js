import{_ as l,a0 as o,w as c,s as r,ao as t,I as a,x as n,a1 as e,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"如何構建一台網絡引導服務器（四） | LCTT x X-CMD","titleTemplate":false,"description":"如何構建一台網絡引導服務器（四） | LCTT (201901) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何構建一台網絡引導服務器（四） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何構建一台網絡引導服務器（四） | LCTT (201901) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201901/20190114 How to Build a Netboot Server, Part 4","title":"如何構建一台網絡引導服務器（四）","tag":"201901","desc":""},"relativePath":"201901/20190114 How to Build a Netboot Server, Part 4.md","filePath":"[post].md"}'),d={name:"201901/20190114 How to Build a Netboot Server, Part 4.md"};function u(g,s,h,m,k,b){const p=o("Link");return c(),r("div",null,[s[43]||(s[43]=t(`<h1 id="如何構建一台網絡引導服務器-四" tabindex="-1">如何構建一台網絡引導服務器（四） <a class="header-anchor" href="#如何構建一台網絡引導服務器-四" aria-label="Permalink to “如何構建一台網絡引導服務器（四）”">​</a></h1><p><img src="https://fedoramagazine.org/wp-content/uploads/2018/11/netboot4-816x345.jpg" alt=""></p><p>在本系列教程中所構建的網絡引導服務器有一個很重要的限制，那就是所提供的操作系統鏡像是隻讀的。一些使用場景或許要求終端用户能夠修改操作系統鏡像。例如，一些教師或許希望學生能夠安裝和配置一些像 MariaDB 和 Node.js 這樣的包來做為他們課程練習的一部分。</p><p>可寫鏡像的另外的好處是，終端用户“私人定製”的操作系統，在下次不同的工作站上使用時能夠“跟着”他們。</p><h3 id="修改-bootmenu-應用程序以使用-https" tabindex="-1">修改 Bootmenu 應用程序以使用 HTTPS <a class="header-anchor" href="#修改-bootmenu-應用程序以使用-https" aria-label="Permalink to “修改 Bootmenu 應用程序以使用 HTTPS”">​</a></h3><p>為 bootmenu 應用程序創建一個自簽名的證書：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo -i</span></span>
<span class="line"><span># MY_NAME=$(&lt;/etc/hostname)</span></span>
<span class="line"><span># MY_TLSD=/opt/bootmenu/tls</span></span>
<span class="line"><span># mkdir $MY_TLSD</span></span>
<span class="line"><span># openssl req -newkey rsa:2048 -nodes -keyout $MY_TLSD/$MY_NAME.key -x509 -days 3650 -out $MY_TLSD/$MY_NAME.pem</span></span></code></pre></div><p>驗證你的證書的值。確保 <code>Subject</code> 行中 <code>CN</code> 的值與你的 iPXE 客户端連接你的網絡引導服務器所使用的 DNS 名字是相匹配的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># openssl x509 -text -noout -in $MY_TLSD/$MY_NAME.pem</span></span></code></pre></div><p>接下來，更新 bootmenu 應用程序去監聽 HTTPS 端口和新創建的證書及密鑰：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed -i &quot;s#listen =&gt; .*#listen =&gt; [&#39;https://$MY_NAME:443?cert=$MY_TLSD/$MY_NAME.pem\\&amp;key=$MY_TLSD/$MY_NAME.key\\&amp;ciphers=AES256-SHA256:AES128-SHA256:AES256-SHA:AES128-SHA&#39;],#&quot; /opt/bootmenu/bootmenu.conf</span></span></code></pre></div>`,11)),a("p",null,[s[1]||(s[1]=n("注意 ",-1)),e(p,{href:"http://ipxe.org/crypto"},{default:i(()=>[...s[0]||(s[0]=[n("iPXE 當前支持的",-1)])]),_:1}),s[2]||(s[2]=n(" 加密算法是有限制的。",-1))]),s[44]||(s[44]=t(`<p>GnuTLS 要求 “CAP_DAC_READ_SEARCH” 能力，因此將它添加到 bootmenu 應用程序的 systemd 服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed -i &#39;/^AmbientCapabilities=/ s/$/ CAP_DAC_READ_SEARCH/&#39; /etc/systemd/system/bootmenu.service</span></span>
<span class="line"><span># sed -i &#39;s/Serves iPXE Menus over HTTP/Serves iPXE Menus over HTTPS/&#39; /etc/systemd/system/bootmenu.service</span></span>
<span class="line"><span># systemctl daemon-reload</span></span></code></pre></div><p>現在，在防火牆中為 bootmenu 服務添加一個例外規則並重啓動該服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># MY_SUBNET=192.0.2.0</span></span>
<span class="line"><span># MY_PREFIX=24</span></span>
<span class="line"><span># firewall-cmd --add-rich-rule=&quot;rule family=&#39;ipv4&#39; source address=&#39;$MY_SUBNET/$MY_PREFIX&#39; service name=&#39;https&#39; accept&quot;</span></span>
<span class="line"><span># firewall-cmd --runtime-to-permanent</span></span>
<span class="line"><span># systemctl restart bootmenu.service</span></span></code></pre></div><p>使用 <code>wget</code> 去驗證是否工作正常：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ MY_NAME=server-01.example.edu</span></span>
<span class="line"><span>$ MY_TLSD=/opt/bootmenu/tls</span></span>
<span class="line"><span>$ wget -q --ca-certificate=$MY_TLSD/$MY_NAME.pem -O - https://$MY_NAME/menu</span></span></code></pre></div><h3 id="添加-https-到-ipxe" tabindex="-1">添加 HTTPS 到 iPXE <a class="header-anchor" href="#添加-https-到-ipxe" aria-label="Permalink to “添加 HTTPS 到 iPXE”">​</a></h3><p>更新 <code>init.ipxe</code> 去使用 HTTPS。接着使用選項重新編譯 ipxe 引導加載器，以便它包含和信任你為 bootmenu 應用程序創建的自簽名證書：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &#39;#define DOWNLOAD_PROTO_HTTPS&#39; &gt;&gt; $HOME/ipxe/src/config/local/general.h</span></span>
<span class="line"><span>$ sed -i &#39;s/^chain http:/chain https:/&#39; $HOME/ipxe/init.ipxe</span></span>
<span class="line"><span>$ cp $MY_TLSD/$MY_NAME.pem $HOME/ipxe</span></span>
<span class="line"><span>$ cd $HOME/ipxe/src</span></span>
<span class="line"><span>$ make clean</span></span>
<span class="line"><span>$ make bin-x86_64-efi/ipxe.efi EMBED=../init.ipxe CERT=&quot;../$MY_NAME.pem&quot; TRUST=&quot;../$MY_NAME.pem&quot;</span></span></code></pre></div><p>你現在可以將啓用了 HTTPS 的 iPXE 引導加載器複製到你的客户端上，並測試它能否正常工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cp $HOME/ipxe/src/bin-x86_64-efi/ipxe.efi $HOME/esp/efi/boot/bootx64.efi</span></span></code></pre></div><h3 id="添加用户驗證到-mojolicious-中" tabindex="-1">添加用户驗證到 Mojolicious 中 <a class="header-anchor" href="#添加用户驗證到-mojolicious-中" aria-label="Permalink to “添加用户驗證到 Mojolicious 中”">​</a></h3><p>為 bootmenu 應用程序創建一個 PAM 服務定義：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf install -y pam_krb5</span></span>
<span class="line"><span># echo &#39;auth required pam_krb5.so&#39; &gt; /etc/pam.d/bootmenu</span></span></code></pre></div><p>添加一個庫到 bootmenu 應用程序中，它使用 Authen-PAM 的 Perl 模組去執行用户驗證：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf install -y perl-Authen-PAM;</span></span>
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
<span class="line"><span>END</span></span></code></pre></div><p>以上的代碼是一字不差是從 Authen::PAM::FAQ 的 man 頁面中複製來的。</p><p>重定義 bootmenu 應用程序，以使它僅當提供了有效的用户名和密碼之後返回一個網絡引導模板：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat &lt;&lt; &#39;END&#39; &gt; $MY_MOJO/bootmenu.pl</span></span>
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
<span class="line"><span>END</span></span></code></pre></div><p>bootmenu 應用程序現在查找 <code>lib</code> 命令去找到相應的 <code>WorkingDirectory</code>。但是，默認情況下，對於 systemd 單元它的工作目錄設置為服務器的 root 目錄。因此，你必須更新 systemd 單元去設置 <code>WorkingDirectory</code> 為 bootmenu 應用程序的根目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sed -i &quot;/^RuntimeDirectory=/ a WorkingDirectory=$MY_MOJO&quot; /etc/systemd/system/bootmenu.service</span></span>
<span class="line"><span># systemctl daemon-reload</span></span></code></pre></div><p>更新模組去使用重定義後的 bootmenu 應用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cd $MY_MOJO/templates</span></span>
<span class="line"><span># MY_BOOTMENU_SERVER=$(&lt;/etc/hostname)</span></span>
<span class="line"><span># MY_FEDORA_RELEASES=&quot;28 29&quot;</span></span>
<span class="line"><span># for i in $MY_FEDORA_RELEASES; do echo &#39;#!ipxe&#39; &gt; fc$i.html.ep; grep &quot;^kernel\\|initrd&quot; menu.html.ep | grep &quot;fc$i&quot; &gt;&gt; fc$i.html.ep; echo &quot;boot || chain https://$MY_BOOTMENU_SERVER/menu&quot; &gt;&gt; fc$i.html.ep; sed -i &quot;/^:f$i$/,/^boot /c :f$i\\nlogin\\nchain https://$MY_BOOTMENU_SERVER/boot?instance=fc$i\\&amp;username=\\\${username}\\&amp;password=\\\${password:uristring} || goto failed&quot; menu.html.ep; done</span></span></code></pre></div><p>上面的最後的命令將生成類似下面的三個文件：</p><p><code>menu.html.ep</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!ipxe</span></span>
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
<span class="line"><span>boot || chain https://server-01.example.edu/menu</span></span></code></pre></div><p>現在，重啓動 bootmenu 應用程序，並驗證用户認證是否正常工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># systemctl restart bootmenu.service</span></span></code></pre></div><h3 id="使得-iscsi-target-可寫" tabindex="-1">使得 iSCSI Target 可寫 <a class="header-anchor" href="#使得-iscsi-target-可寫" aria-label="Permalink to “使得 iSCSI Target 可寫”">​</a></h3>`,33)),a("p",null,[s[4]||(s[4]=n("現在，用户驗證通過 iPXE 可以正常工作，在用户連接時，你可以按需在只讀鏡像的上面創建每用户可寫的",-1)),s[5]||(s[5]=a("ruby",null,[n("overlay"),a("rt",null,"疊加層")],-1)),s[6]||(s[6]=n("。使用一個 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Copy-on-write"},{default:i(()=>[...s[3]||(s[3]=[n("寫時複製",-1)])]),_:1}),s[7]||(s[7]=n(" 的疊加層與簡單地為每個用户複製原始鏡像相比有三個好處：",-1))]),s[45]||(s[45]=t(`<ol><li>副本創建非常快。這樣就可以按需創建。</li><li>副本並不增加服務器上的磁盤使用。除了原始鏡像之外，僅存儲用户寫入個人鏡像的內容。</li><li>由於每個副本的扇區大多都是服務器的存儲器上的相同扇區，在隨後的用户訪問這些操作系統的副本時，它們可能已經加載到內存中，這樣就提升了服務器的性能，因為對內存的訪問速度要比磁盤 I/O 快得多。</li></ol><p>使用寫時複製的一個潛在隱患是，一旦疊加層創建後，疊加層之下的鏡像就不能再改變。如果它們改變，所有它們之上的疊加層將出錯。因此，疊加層必須被刪除並用新的、空白的進行替換。即便只是簡單地以讀寫模式加載的鏡像，也可能因為某些文件系統更新導致疊加層出錯。</p><p>由於這個隱患，如果原始鏡像被修改將導致疊加層出錯，因此運行下列的命令，將原始鏡像標記為不可改變：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># chattr +i &lt;/path/to/file&gt;</span></span></code></pre></div><p>你可以使用 <code>lsattr &lt;/path/to/file&gt;</code> 去查看不可改變標誌，並可以使用 <code>chattr -i &lt;/path/to/file&gt;</code> 取消設置不可改變標誌。在設置了不可改變標誌之後，即便是 root 用户或以 root 運行的系統進程也不修改或刪除這個文件。</p><p>停止 tgtd.service 之後，你就可以改變鏡像文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># systemctl stop tgtd.service</span></span></code></pre></div><p>當仍有連接打開的時候，運行這個命令一般需要一分鐘或更長的時間。</p><p>現在，移除只讀的 iSCSI 出口。然後更新模板中的 <code>readonly-root</code> 配置文件，以使鏡像不再是隻讀的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># MY_FC=fc29</span></span>
<span class="line"><span># rm -f /etc/tgt/conf.d/$MY_FC.conf</span></span>
<span class="line"><span># TEMP_MNT=$(mktemp -d)</span></span>
<span class="line"><span># mount /$MY_FC.img $TEMP_MNT</span></span>
<span class="line"><span># sed -i &#39;s/^READONLY=yes$/READONLY=no/&#39; $TEMP_MNT/etc/sysconfig/readonly-root</span></span>
<span class="line"><span># sed -i &#39;s/^Storage=volatile$/#Storage=auto/&#39; $TEMP_MNT/etc/systemd/journald.conf</span></span>
<span class="line"><span># umount $TEMP_MNT</span></span></code></pre></div><p>將 journald 日誌從發送到內存修改回缺省值（如果 <code>/var/log/journal</code> 存在的話記錄到磁盤），因為一個用户報告説，他的客户端由於應用程序生成了大量的系統日誌而產生內存溢出錯誤，導致它的客户端被卡住。而將日誌記錄到磁盤的負面影響是客户端產生了額外的寫入流量，這將在你的網絡引導服務器上可能增加一些沒有必要的 I/O。你應該去決定到底使用哪個選擇 —— 記錄到內存還是記錄到硬盤 —— 哪個更合適取決於你的環境。</p><p>因為你的模板鏡像在以後不能做任何的更改，因此在它上面設置不可更改標誌，然後重啓動 tgtd.service：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># chattr +i /$MY_FC.img</span></span>
<span class="line"><span># systemctl start tgtd.service</span></span></code></pre></div><p>現在，更新 bootmenu 應用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat &lt;&lt; &#39;END&#39; &gt; $MY_MOJO/bootmenu.pl</span></span>
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
<span class="line"><span>END</span></span></code></pre></div>`,15)),a("p",null,[s[9]||(s[9]=n("新版本的 bootmenu 應用程序調用一個定製的 ",-1)),s[10]||(s[10]=a("code",null,"mktgt",-1)),s[11]||(s[11]=n(" 腳本，如果成功，它將為每個它自己創建的新的 iSCSI 目標返回一個隨機的 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Challenge-Handshake_Authentication_Protocol"},{default:i(()=>[...s[8]||(s[8]=[n("CHAP",-1)])]),_:1}),s[12]||(s[12]=n(" 密碼。這個 CHAP 密碼可以防止其它用户的 iSCSI 目標以間接方式掛載這個用户的目標。這個應用程序只有在用户密碼認證成功之後才返回一個正確的 iSCSI 目標密碼。",-1))]),s[46]||(s[46]=t(`<p><code>mktgt</code> 腳本要加 <code>sudo</code> 前綴來運行，因為它需要 root 權限去創建目標。</p><p><code>$username</code> 和 <code>$chapscrt</code> 變量也傳遞給 <code>render</code> 命令，因此在需要的時候，它們也能夠被納入到模板中返回給用户。</p><p>接下來，更新我們的引導模板，以便於它們能夠讀取用户名和 <code>chapscrt</code> 變量，並傳遞它們到所屬的終端用户。也要更新模板以 rw（讀寫）模式加載根文件系統：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cd $MY_MOJO/templates</span></span>
<span class="line"><span># sed -i &quot;s/:$MY_FC/:$MY_FC-&lt;%= \\$username %&gt;/g&quot; $MY_FC.html.ep</span></span>
<span class="line"><span># sed -i &quot;s/ netroot=iscsi:/ netroot=iscsi:&lt;%= \\$username %&gt;:&lt;%= \\$chapscrt %&gt;@/&quot; $MY_FC.html.ep</span></span>
<span class="line"><span># sed -i &quot;s/ ro / rw /&quot; $MY_FC.html.ep</span></span></code></pre></div><p>運行上面的命令後，你應該會看到如下的引導模板：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!ipxe</span></span>
<span class="line"><span>kernel --name kernel.efi \${prefix}/vmlinuz-4.19.5-300.fc29.x86_64 initrd=initrd.img rw ip=dhcp rd.peerdns=0 nameserver=192.0.2.91 nameserver=192.0.2.92 root=/dev/disk/by-path/ip-192.0.2.158:3260-iscsi-iqn.edu.example.server-01:fc29-&lt;%= $username %&gt;-lun-1 netroot=iscsi:&lt;%= $username %&gt;:&lt;%= $chapscrt %&gt;@192.0.2.158::::iqn.edu.example.server-01:fc29-&lt;%= $username %&gt; console=tty0 console=ttyS0,115200n8 audit=0 selinux=0 quiet</span></span>
<span class="line"><span>initrd --name initrd.img \${prefix}/initramfs-4.19.5-300.fc29.x86_64.img</span></span>
<span class="line"><span>boot || chain https://server-01.example.edu/menu</span></span></code></pre></div>`,6)),a("p",null,[s[14]||(s[14]=n("注意：如果在 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/String_interpolation"},{default:i(()=>[...s[13]||(s[13]=[n("插入",-1)])]),_:1}),s[15]||(s[15]=n(" 變量後需要查看引導模板，你可以在 ",-1)),s[16]||(s[16]=a("code",null,"boot",-1)),s[17]||(s[17]=n(" 命令之前，在它自己的行中插入 ",-1)),s[18]||(s[18]=a("code",null,"shell",-1)),s[19]||(s[19]=n(" 命令。然後在你網絡引導你的客户端時，iPXE 將在那裏給你提供一個用於交互的 shell，你可以在 shell 中輸入 ",-1)),s[20]||(s[20]=a("code",null,"imgstat",-1)),s[21]||(s[21]=n(" 去查看傳遞到內核的參數。如果一切正確，你可以輸入 ",-1)),s[22]||(s[22]=a("code",null,"exit",-1)),s[23]||(s[23]=n(" 去退出 shell 並繼續引導過程。",-1))]),s[47]||(s[47]=t(`<p>現在，通過 <code>sudo</code> 允許 bootmenu 用户以 root 權限去運行 <code>mktgt</code> 腳本（僅這個腳本）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># echo &quot;bootmenu ALL = NOPASSWD: $MY_MOJO/scripts/mktgt *&quot; &gt; /etc/sudoers.d/bootmenu</span></span></code></pre></div><p>bootmenu 用户不應該寫訪問 <code>mktgt</code> 腳本或在它的家目錄下的任何其它文件。在 <code>/opt/bootmenu</code> 目錄下的所有文件的屬主應該是 root，並且不應該被其它任何 root 以外的用户可寫。</p><p><code>sudo</code> 在使用 systemd 的 <code>DynamicUser</code> 選項下不能正常工作，因此創建一個普通用户帳户，並設置 systemd 服務以那個用户運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># useradd -r -c &#39;iPXE Boot Menu Service&#39; -d /opt/bootmenu -s /sbin/nologin bootmenu</span></span>
<span class="line"><span># sed -i &#39;s/^DynamicUser=true$/User=bootmenu/&#39; /etc/systemd/system/bootmenu.service</span></span>
<span class="line"><span># systemctl daemon-reload</span></span></code></pre></div><p>最後，為寫時複製覆蓋創建一個目錄，並創建管理 iSCSI 目標的 <code>mktgt</code> 腳本和它們的覆蓋支持存儲：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mkdir /$MY_FC.cow</span></span>
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
<span class="line"><span># chmod +x $MY_MOJO/scripts/mktgt</span></span></code></pre></div><p>上面的腳本將做以下五件事情：</p>`,8)),a("ol",null,[s[27]||(s[27]=t("<li>創建 <code>/&lt;instance&gt;.cow/&lt;username&gt;</code> 稀疏文件（如果不存在的話）。</li><li>創建 <code>/dev/mapper/&lt;instance&gt;-&lt;username&gt;</code> 設備節點作為 iSCSI 目標的寫時複製支持存儲（如果不存在的話）。</li><li>創建 <code>iqn.&lt;reverse-hostname&gt;:&lt;instance&gt;-&lt;username&gt;</code> iSCSI 目標（如果不存在的話）。或者，如果已存在了，它將關閉任何已存在的連接，因為在任何時刻，鏡像只能以只讀模式從一個地方打開。</li><li>它在 <code>iqn.&lt;reverse-hostname&gt;:&lt;instance&gt;-&lt;username&gt;</code> iSCSI 目標上（重新）設置 chap 密碼為一個新的隨機值。</li>",4)),a("li",null,[s[25]||(s[25]=n("（如果前面的所有任務都成功的話）它在 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Standard_streams"},{default:i(()=>[...s[24]||(s[24]=[n("標準輸出",-1)])]),_:1}),s[26]||(s[26]=n(" 上顯示新的 chap 密碼。",-1))])]),s[48]||(s[48]=t(`<p>你應該可以在命令列上通過使用有效的測試參數來運行它，以測試 <code>mktgt</code> 腳本能否正常工作。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># echo \`$MY_MOJO/scripts/mktgt fc29 jsmith\`</span></span></code></pre></div><p>當你從命令列上運行時，<code>mktgt</code> 腳本應該會輸出 iSCSI 目標的一個隨意的八字符隨機密碼（如果成功的話）或者是出錯位置的行號（如果失敗的話）。</p><p>有時候，你可能需要在不停止整個服務的情況下刪除一個 iSCSI 目標。例如，一個用户可能無意中損壞了他的個人鏡像，在那種情況下，你可能需要按步驟撤銷上面的 <code>mktgt</code> 腳本所做的事情，以便於他下次登入時他將得到一個原始鏡像。</p><p>下面是用於撤銷的 <code>rmtgt</code> 腳本，它以相反的順序做了上面 <code>mktgt</code> 腳本所做的事情：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mkdir $HOME/bin</span></span>
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
<span class="line"><span># chmod +x $HOME/bin/rmtgt</span></span></code></pre></div><p>例如，使用上面的腳本去完全刪除 fc29-jsmith 目標，包含它的支持存儲設備節點和稀疏文件，可以按下列方式運行命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># rmtgt fc29 jsmith +f</span></span></code></pre></div><p>一旦你驗證 <code>mktgt</code> 腳本工作正常，你可以重啓動 bootmenu 服務。下次有人從網絡引導時，他們應該能夠接收到一個他們可以寫入的、可”私人定製“的網絡引導鏡像的副本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># systemctl restart bootmenu.service</span></span></code></pre></div><p>現在，就像下面的截屏示範的那樣，用户應該可以修改根文件系統了：</p><p><img src="https://fedoramagazine.org/wp-content/uploads/2018/11/netboot-fix-pam_mount-1024x819.png" alt=""></p><hr>`,13)),a("p",null,[s[29]||(s[29]=n("via: ",-1)),e(p,{href:"https://fedoramagazine.org/how-to-build-a-netboot-server-part-4/"},{default:i(()=>[...s[28]||(s[28]=[n("https://fedoramagazine.org/how-to-build-a-netboot-server-part-4/",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("作者：",-1)),e(p,{href:"https://fedoramagazine.org/author/glb/"},{default:i(()=>[...s[30]||(s[30]=[n("Gregory Bartholomew",-1)])]),_:1}),s[35]||(s[35]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[31]||(s[31]=[n("lujun9972",-1)])]),_:1}),s[36]||(s[36]=n(" 譯者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:i(()=>[...s[32]||(s[32]=[n("qhwdw",-1)])]),_:1}),s[37]||(s[37]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[33]||(s[33]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[40]||(s[40]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[38]||(s[38]=[n("LCTT",-1)])]),_:1}),s[41]||(s[41]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[39]||(s[39]=[n("Linux中國",-1)])]),_:1}),s[42]||(s[42]=n(" 榮譽推出",-1))])])}const v=l(d,[["render",u]]);export{y as __pageData,v as default};
