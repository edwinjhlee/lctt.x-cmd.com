import{_ as i,a0 as o,w as l,s as c,ao as r,I as t,x as n,a1 as a,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"在 Linux 下使用 scp 命令 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 下使用 scp 命令 | LCTT (201606) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 下使用 scp 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 下使用 scp 命令 | LCTT (201606) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201606/20160601 scp command in Linux","title":"在 Linux 下使用 scp 命令","tag":"201606","desc":""},"relativePath":"201606/20160601 scp command in Linux.md","filePath":"[post].md"}'),d={name:"201606/20160601 scp command in Linux.md"};function g(u,s,h,m,b,w){const p=o("Link");return l(),c("div",null,[s[13]||(s[13]=r(`<h1 id="在-linux-下使用-scp-命令" tabindex="-1">在 Linux 下使用 scp 命令 <a class="header-anchor" href="#在-linux-下使用-scp-命令" aria-label="Permalink to “在 Linux 下使用 scp 命令”">​</a></h1><p><img src="https://www.unixmen.com/wp-content/uploads/2016/05/SCP-LOGO-1.jpg" alt=""></p><p>scp 是安全拷贝协议 （Secure Copy Protocol）的缩写，和众多 Linux/Unix 使用者所熟知的拷贝（cp）命令一样。scp 的使用方式类似于 cp 命令，cp 命令将一个文件或文件夹从本地操作系统的一个位置（源）拷贝到目标位置（目的），而 scp 用来将文件或文件夹从网络上的一个主机拷贝到另一个主机当中去。</p><p>scp 命令的使用方法如下所示，在这个例子中，我将一个叫 “importantfile” 的文件从本机（10.10.16.147）拷贝到远程主机（10.0.0.6）中。在这个命令里，你也可以使用主机名字来替代IP地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# scp importantfile admin@10.0.0.6:/home/admin/</span></span>
<span class="line"><span>The authenticity of host &#39;10.0.0.6 (10.0.0.6)&#39; can&#39;t be established.</span></span>
<span class="line"><span>RSA key fingerprint is SHA256:LqBzkeGa6K9BfWWKgcKlQoE0u+gjorX0lPLx5YftX1Y.</span></span>
<span class="line"><span>RSA key fingerprint is MD5:ed:44:42:59:3e:dd:4c:12:43:4a:89:b1:5d:bd:9e:20.</span></span>
<span class="line"><span>Are you sure you want to continue connecting (yes/no)? yes</span></span>
<span class="line"><span>Warning: Permanently added &#39;10.0.0.6&#39; (RSA) to the list of known hosts.</span></span>
<span class="line"><span>admin@10.0.0.6&#39;s password:</span></span>
<span class="line"><span>importantfile                                 100%    0     0.0KB/s   00:00</span></span>
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>类似的，如果你想从一个远程主机中取得文件，你可以利用如下的 scp 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# scp root@10.10.16.137:/root/importantfile /home/admin/</span></span>
<span class="line"><span>The authenticity of host &#39;10.10.16.137 (10.10.16.137)&#39; can&#39;t be established.</span></span>
<span class="line"><span>RSA key fingerprint is b0:b0:a3:c3:2e:94:13:0c:29:2e:ba:0b:d3:d6:12:8f.</span></span>
<span class="line"><span>Are you sure you want to continue connecting (yes/no)? yes</span></span>
<span class="line"><span>Warning: Permanently added &#39;10.10.16.137&#39; (RSA) to the list of known hosts.</span></span>
<span class="line"><span>root@10.10.16.137&#39;s password:</span></span>
<span class="line"><span>importantfile 100% 0 0.0KB/s 00:00</span></span>
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>你也可以像 cp 命令一样，在 scp 命令中使用不同的选项，scp 的 man 帮助详细地阐述了不同选项的用法和用处。</p><p><strong>示例输出</strong></p><p><img src="https://www.unixmen.com/wp-content/uploads/2016/05/scp.jpg" alt=""></p><p>scp 可选参数如下所示:</p><pre><code> -B      采取批量模式（避免询问密码或口令）
 -C      启用压缩。通过指明 -C 参数来开启压缩模式。
 -c 加密方式
         选择在传输过程中用来加密的加密方式 这个选项会被直接传递到 ssh(1)。
 -F ssh 配置
         给 ssh 指定一个用来替代默认配置的配置文件。这个选项会被直接传递到 ssh(1)。
 -l 限速
         限制命令使用的带宽，默认单位是 Kbit/s。
 -P 端口
         指定需要的连接的远程主机的端口。  
         注意，这个选项使用的是一个大写的“P”，因为小写的“-p”已经用来保留目标文件的时间和模式相关信息。（LCTT 译注：ssh 命令中使用小写的“-p”来指定目标端口。）
 -p      保留文件原来的修改时间，访问时间以及权限模式。
 -q      静默模式：不显示来自 ssh(1) 命令的进度信息，警告和诊断信息。
 -r      递归拷贝整个目录。
         注意，scp 命令在树形遍历的时候同样会跟随符号连接，复制所连接的文件。
 -v      详细模式。scp 和 ssh(1) 将会打印出处理过程中的调试信息。这可以帮助你调试连接、认证和配置方面的问题。
</code></pre><p><strong>详细模式</strong></p><p>利用 scp 命令的 -v 选项，你可以得到认证、调试等的相关细节信息。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-v.jpg" alt=""></p><p>当我们使用 -v 选项的时候，一个简单的输出如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# scp -v abc.txt admin@10.0.0.6:/home/admin</span></span>
<span class="line"><span>Executing: program /usr/bin/ssh host 10.0.0.6, user admin, </span></span>
<span class="line"><span>command scp -v -t/home/admin</span></span>
<span class="line"><span>OpenSSH_7.1p1, OpenSSL 1.0.2d-fips 9 Jul 2015</span></span>
<span class="line"><span>debug1: Reading configuration data /etc/ssh/ssh_config</span></span>
<span class="line"><span>debug1: /etc/ssh/ssh_config line 56: Applying options for *</span></span>
<span class="line"><span>debug1: Connecting to 10.0.0.6 [10.0.0.6] port 22.</span></span>
<span class="line"><span>debug1: Connection established.</span></span>
<span class="line"><span>debug1: Server host key: ssh-rsa SHA256:LqBzkeGa6K9BfWWKgcKlQoE0u+gjorX0lPLx5YftX1Y</span></span>
<span class="line"><span>debug1: Next authentication method: publickey</span></span>
<span class="line"><span>debug1: Trying private key: /root/.ssh/id_rsa</span></span>
<span class="line"><span>debug1: Trying private key: /root/.ssh/id_dsa</span></span>
<span class="line"><span>debug1: Trying private key: /root/.ssh/id_ecdsa</span></span>
<span class="line"><span>debug1: Trying private key: /root/.ssh/id_ed25519</span></span>
<span class="line"><span>debug1: Next authentication method: password</span></span>
<span class="line"><span>admin@10.0.0.6&#39;s password:</span></span>
<span class="line"><span>debug1: Authentication succeeded (password).</span></span>
<span class="line"><span>Authenticated to 10.0.0.6 ([10.0.0.6]:22).</span></span>
<span class="line"><span>debug1: channel 0: new [client-session]</span></span>
<span class="line"><span>debug1: Requesting no-more-sessions@openssh.com</span></span>
<span class="line"><span>debug1: Entering interactive session.</span></span>
<span class="line"><span>debug1: Sending environment.</span></span>
<span class="line"><span>debug1: Sending command: scp -v -t /home/admin</span></span>
<span class="line"><span>Sending file modes: C0644 174 abc.txt</span></span>
<span class="line"><span>Sink: C0644 174 abc.txt</span></span>
<span class="line"><span>abc.txt                                                                                                                               100%  174     0.2KB/s   00:00</span></span>
<span class="line"><span>Transferred: sent 3024, received 2584 bytes, in 0.3 seconds</span></span>
<span class="line"><span>Bytes per second: sent 9863.3, received 8428.1</span></span>
<span class="line"><span>debug1: Exit status 0</span></span>
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>当我们需要拷贝一个目录或者文件夹的时候，我们可以使用 -r 选项，它会递归拷贝整个目录。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-with-r.jpg" alt=""></p><p><strong>静默模式</strong></p><p>如果你想要关闭进度信息以及警告和诊断信息，你可以通过使用scp命令中的-q选项.</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-with-q.jpg" alt=""></p><p>上一次我们仅仅使用 -r 参数，它显示了逐个文件的信息，但这一次当我们使用了 -q 参数，它就不显示进度信息。</p><p>利用 scp 的 -p 选项来保留目标文件的更新时间，访问时间和权限模式。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-with-p.jpg" alt=""></p><p><strong>通过 -P 选项来指定远程主机的连接端口</strong></p><p>scp 使用 ssh 命令来在两个主机之间传输文件，因为 ssh 默认使用的是22端口号，所以 scp 也使用相同的22端口号。</p><p>如果我们希望改变这个端口号，我们可以使用 -P（大写的 P，因为小写的 p 用来保持文件的访问时间等）选项来指定所需的端口号。</p><p>举个例子，如果我们想要使用2222端口号，我们可以使用如下的命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# scp -P 2222  abcd1 root@10.10.16.137:/root/</span></span></code></pre></div><p><strong>限制命令使用的带宽，指定的单位是 Kbit/s</strong></p><p>如下所示，我们可以使用 -l 参数来指定 scp 命令所使用的带宽，在此我们将速度限制为512kbit/s。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-with-l.jpg" alt=""></p><p><strong>开启压缩</strong></p><p>如下所示，我们可以通过开启 scp 命令的压缩模式来节省传输过程中的带宽和时间。</p><p><img src="https://www.unixmen.com/wp-content/uploads/2016/05/scp-with-C.jpg" alt=""></p><p><strong>选择加密数据的加密方式</strong></p><p>scp 默认使用 AES-128 的加密方式，如果我们想要改变这个加密方式，可以通过 -c(小写的 c) 参数来指定其他的加密方式。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-with-cipher.jpg" alt=""></p><p>现在你可以利用 scp（Secure copy）命令在你所属网络中的两个节点之间安全地拷贝文件了。</p><hr>`,41)),t("p",null,[s[1]||(s[1]=n("via: ",-1)),a(p,{href:"https://www.unixmen.com/scp-command-linuxunix/"},{default:e(()=>[...s[0]||(s[0]=[n("https://www.unixmen.com/scp-command-linuxunix/",-1)])]),_:1})]),t("p",null,[s[5]||(s[5]=n("作者：",-1)),a(p,{href:"https://www.unixmen.com/author/naga/"},{default:e(()=>[...s[2]||(s[2]=[n("Naga Ramesh",-1)])]),_:1}),s[6]||(s[6]=n(" 译者：",-1)),a(p,{href:"https://github.com/lujianbo"},{default:e(()=>[...s[3]||(s[3]=[n("lujianbo",-1)])]),_:1}),s[7]||(s[7]=n(" 校对：",-1)),a(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[4]||(s[4]=[n("wxy",-1)])]),_:1})]),t("p",null,[s[10]||(s[10]=n("本文由 ",-1)),a(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[8]||(s[8]=[n("LCTT",-1)])]),_:1}),s[11]||(s[11]=n(" 原创编译，",-1)),a(p,{href:"https://linux.cn/"},{default:e(()=>[...s[9]||(s[9]=[n("Linux中国",-1)])]),_:1}),s[12]||(s[12]=n(" 荣誉推出",-1))])])}const y=i(d,[["render",g]]);export{k as __pageData,y as default};
