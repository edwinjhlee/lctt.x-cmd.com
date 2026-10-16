import{_ as a,a0 as i,w as g,s as p,ao as d,I as o,x as s,a1 as t,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"十个 SCP 传输命令例子 | LCTT x X-CMD","titleTemplate":false,"description":"十个 SCP 传输命令例子 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十个 SCP 传输命令例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十个 SCP 传输命令例子 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141119 10 SCP Commands to Transfer Files or Folders in Linux","title":"十个 SCP 传输命令例子","tag":"201412","desc":""},"relativePath":"201412/20141119 10 SCP Commands to Transfer Files or Folders in Linux.md","filePath":"[post].md"}'),c={name:"201412/20141119 10 SCP Commands to Transfer Files or Folders in Linux.md"};function m(x,n,l,h,u,b){const e=i("Link");return g(),p("div",null,[n[13]||(n[13]=d(`<h1 id="十个-scp-传输命令例子" tabindex="-1">十个 SCP 传输命令例子 <a class="header-anchor" href="#十个-scp-传输命令例子" aria-label="Permalink to “十个 SCP 传输命令例子”">​</a></h1><p>Linux系统管理员应该很熟悉<strong>CLI</strong>环境，因为通常在Linux服务器中是不安装<strong>GUI</strong>的。<strong>SSH</strong>可能是Linux系统管理员通过远程方式安全管理服务器的最流行协议。在<strong>SSH</strong>命令中内置了一种叫<strong>SCP</strong>的命令，用来在服务器之间安全传输文件。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2013/10/SCP-Commands.png" alt=""></p><p>以下命令可以解读为：用“<strong>username account</strong>”“<strong>拷贝 source file name</strong>”到“<strong>destination host</strong>”上的“<strong>destination folder</strong>”里。</p><h4 id="scp命令的基本语法" tabindex="-1">SCP命令的基本语法 <a class="header-anchor" href="#scp命令的基本语法" aria-label="Permalink to “SCP命令的基本语法”">​</a></h4><pre><code>scp source_file_name username@destination_host:destination_folder
</code></pre><p><strong>SCP</strong>命令有很多可以使用的参数，这里指的是每次都会用到的参数。</p><h3 id="用-v参数来提供scp进程的详细信息" tabindex="-1">用-v参数来提供SCP进程的详细信息 <a class="header-anchor" href="#用-v参数来提供scp进程的详细信息" aria-label="Permalink to “用-v参数来提供SCP进程的详细信息”">​</a></h3><p>不带参数的基本<strong>SCP</strong>命令会在后台拷贝文件，除非操作完成或者有错误出现，否则用户在界面上是看不到任何提示信息的。你可以用“<strong>-v</strong>”参数来在屏幕上打印出调试信息，这能帮助你调试连接、认证和配置的一些问题。</p><pre><code>pungki@mint ~/Documents $ scp -v Label.pdf mrarianto@202.x.x.x:.
</code></pre><h4 id="部分输出" tabindex="-1">部分输出 <a class="header-anchor" href="#部分输出" aria-label="Permalink to “部分输出”">​</a></h4><pre><code>Executing: program /usr/bin/ssh host 202.x.x.x, user mrarianto, command scp -v -t .
OpenSSH_6.0p1 Debian-3, OpenSSL 1.0.1c 10 May 2012
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: Applying options for *
debug1: Connecting to 202.x.x.x [202.x.x.x] port 22.
debug1: Connection established.
debug1: Host &#39;202.x.x.x&#39; is known and matches the RSA host key.
debug1: Found key in /home/pungki/.ssh/known_hosts:1
debug1: ssh_rsa_verify: signature correct
debug1: Next authentication method: password
mrarianto@202.x.x.x&#39;s password:
debug1: Authentication succeeded (password).
Authenticated to 202.x.x.x ([202.x.x.x]:22).
Sending file modes: C0770 3760348 Label.pdf
Sink: C0770 3760348 Label.pdf
Label.pdf 100% 3672KB 136.0KB/s 00:27
Transferred: sent 3766304, received 3000 bytes, in 65.2 seconds
Bytes per second: sent 57766.4, received 46.0
debug1: Exit status 0
</code></pre><h3 id="从源文件获取修改时间、访问时间和模式" tabindex="-1">从源文件获取修改时间、访问时间和模式 <a class="header-anchor" href="#从源文件获取修改时间、访问时间和模式" aria-label="Permalink to “从源文件获取修改时间、访问时间和模式”">​</a></h3><p>“<strong>-p</strong>”参数会帮到把预计的时间和连接速度会显示在屏幕上。</p><pre><code>pungki@mint ~/Documents $ scp -p Label.pdf mrarianto@202.x.x.x:.
</code></pre><h4 id="部分输出-1" tabindex="-1">部分输出 <a class="header-anchor" href="#部分输出-1" aria-label="Permalink to “部分输出”">​</a></h4><pre><code>mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 126.6KB/s 00:29
</code></pre><h3 id="用-c参数来让文件传输更快" tabindex="-1">用-C参数来让文件传输更快 <a class="header-anchor" href="#用-c参数来让文件传输更快" aria-label="Permalink to “用-C参数来让文件传输更快”">​</a></h3><p>有一个参数能让传输文件更快，就是“<strong>-C</strong>”参数，它的作用是不停压缩所传输的文件。它特别之处在于压缩是在网络传输中进行，当文件传到目标服务器时，它会变回压缩之前的原始大小。</p><p>来看看这些命令，我们使用一个<strong>93 Mb</strong>的单一文件来做例子。</p><pre><code>pungki@mint ~/Documents $ scp -pv messages.log mrarianto@202.x.x.x:.
</code></pre><h4 id="部分输出-2" tabindex="-1">部分输出 <a class="header-anchor" href="#部分输出-2" aria-label="Permalink to “部分输出”">​</a></h4><pre><code>Executing: program /usr/bin/ssh host 202.x.x.x, user mrarianto, command scp -v -p -t .
OpenSSH_6.0p1 Debian-3, OpenSSL 1.0.1c 10 May 2012
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: Applying options for *
debug1: Connecting to 202.x.x.x [202.x.x.x] port 22.
debug1: Connection established.
debug1: identity file /home/pungki/.ssh/id_rsa type -1
debug1: Found key in /home/pungki/.ssh/known_hosts:1
debug1: ssh_rsa_verify: signature correct
debug1: Trying private key: /home/pungki/.ssh/id_rsa
debug1: Next authentication method: password
mrarianto@202.x.x.x&#39;s password:
debug1: Authentication succeeded (password).
Authenticated to 202.x.x.x ([202.x.x.x]:22).
debug1: Sending command: scp -v -p -t .
File mtime 1323853868 atime 1380425711
Sending file timestamps: T1323853868 0 1380425711 0
messages.log 100% 93MB 58.6KB/s 27:05
Transferred: sent 97614832, received 25976 bytes, in 1661.3 seconds
Bytes per second: sent 58758.4, received 15.6
debug1: Exit status 0
</code></pre><p>不用“<strong>-C</strong>”参数来拷贝文件，结果用了<strong>1661.3</strong>秒，你可以比较下用了“<strong>-C</strong>”参数之后的结果。</p><pre><code>pungki@mint ~/Documents $ scp -Cpv messages.log mrarianto@202.x.x.x:.
</code></pre><h4 id="部分输出-3" tabindex="-1">部分输出 <a class="header-anchor" href="#部分输出-3" aria-label="Permalink to “部分输出”">​</a></h4><pre><code>Executing: program /usr/bin/ssh host 202.x.x.x, user mrarianto, command scp -v -p -t .
OpenSSH_6.0p1 Debian-3, OpenSSL 1.0.1c 10 May 2012
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: Applying options for *
debug1: Connecting to 202.x.x.x [202.x.x.x] port 22.
debug1: Connection established.
debug1: identity file /home/pungki/.ssh/id_rsa type -1
debug1: Host &#39;202.x.x.x&#39; is known and matches the RSA host key.
debug1: Found key in /home/pungki/.ssh/known_hosts:1
debug1: ssh_rsa_verify: signature correct
debug1: Next authentication method: publickey
debug1: Trying private key: /home/pungki/.ssh/id_rsa
debug1: Next authentication method: password
mrarianto@202.x.x.x&#39;s password:
debug1: Enabling compression at level 6.
debug1: Authentication succeeded (password).
Authenticated to 202.x.x.x ([202.x.x.x]:22).
debug1: channel 0: new [client-session]
debug1: Sending command: scp -v -p -t .
File mtime 1323853868 atime 1380428748
Sending file timestamps: T1323853868 0 1380428748 0
Sink: T1323853868 0 1380428748 0
Sending file modes: C0600 97517300 messages.log
messages.log 100% 93MB 602.7KB/s 02:38
Transferred: sent 8905840, received 15768 bytes, in 162.5 seconds
Bytes per second: sent 54813.9, received 97.0
debug1: Exit status 0
debug1: compress outgoing: raw data 97571111, compressed 8806191, factor 0.09
debug1: compress incoming: raw data 7885, compressed 3821, factor 0.48
</code></pre><p>看到了吧，压缩了文件之后，传输过程在<strong>162.5</strong>秒内就完成了，速度是不用“<strong>-C</strong>”参数的10倍。如果你要通过网络拷贝很多份文件，那么“<strong>-C</strong>”参数能帮你节省掉很多时间。</p><p>有一点我们需要注意，这个压缩的方法不是适用于所有文件。当源文件已经被压缩过了，那就没办法再压缩很多了。诸如那些像<strong>.zip</strong>，<strong>.rar</strong>，<strong>pictures</strong>和<strong>.iso</strong>的文件，用“<strong>-C</strong>”参数就没什么意义。</p><h3 id="选择其它加密算法来加密文件" tabindex="-1">选择其它加密算法来加密文件 <a class="header-anchor" href="#选择其它加密算法来加密文件" aria-label="Permalink to “选择其它加密算法来加密文件”">​</a></h3><p><strong>SCP</strong>默认是用“<strong>AES-128</strong>”加密算法来加密传输的。如果你想要改用其它加密算法来加密传输，你可以用“<strong>-c</strong>”参数。我们来瞧瞧。</p><pre><code>pungki@mint ~/Documents $ scp -c 3des Label.pdf mrarianto@202.x.x.x:.

mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 282.5KB/s 00:13
</code></pre><p>上述命令是告诉<strong>SCP</strong>用<strong>3des algorithm</strong>来加密文件。要注意这个参数是“<strong>-c</strong>”（小写）而不是“<strong>-C</strong>“（大写）。</p><h3 id="限制带宽使用" tabindex="-1">限制带宽使用 <a class="header-anchor" href="#限制带宽使用" aria-label="Permalink to “限制带宽使用”">​</a></h3><p>还有一个很有用的参数是“<strong>-l</strong>”参数，它能限制使用带宽。如果你为了拷贝很多文件而去执行了一份自动化脚本又不希望带宽被<strong>SCP</strong>进程耗尽，那这个参数会非常管用。</p><pre><code>pungki@mint ~/Documents $ scp -l 400 Label.pdf mrarianto@202.x.x.x:.

mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 50.3KB/s 01:13
</code></pre><p>在“<strong>-l</strong>”参数后面的这个<strong>400</strong>值意思是我们给<strong>SCP</strong>进程限制了带宽为<strong>50 KB/秒</strong>。有一点要记住，带宽是以<strong>千比特/秒</strong> (<strong>kbps</strong>)表示的，而<strong>8 比特</strong>等于<strong>1 字节</strong>。</p><p>因为<strong>SCP</strong>是用<strong>千字节/秒</strong> (<strong>KB/s</strong>)计算的，所以如果你想要限制<strong>SCP</strong>的最大带宽只有<strong>50 KB/s</strong>，你就需要设置成<strong>50 x 8 = 400</strong>。</p><h3 id="指定端口" tabindex="-1">指定端口 <a class="header-anchor" href="#指定端口" aria-label="Permalink to “指定端口”">​</a></h3><p>通常<strong>SCP</strong>是把<strong>22</strong>作为默认端口。但是为了安全起见SSH 监听端口改成其它端口。比如说，我们想用<strong>2249</strong>端口，这种情况下就要指定端口。命令如下所示。</p><pre><code>pungki@mint ~/Documents $ scp -P 2249 Label.pdf mrarianto@202.x.x.x:.

mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 262.3KB/s 00:14
</code></pre><p>确认一下写的是大写字母“<strong>P</strong>”而不是“<strong>p</strong>“，因为“<strong>p</strong>”已经被用来保留源文件的修改时间和模式（LCTT 译注：和 ssh 命令不同了）。</p><h3 id="递归拷贝文件和文件夹" tabindex="-1">递归拷贝文件和文件夹 <a class="header-anchor" href="#递归拷贝文件和文件夹" aria-label="Permalink to “递归拷贝文件和文件夹”">​</a></h3><p>有时我们需要拷贝文件夹及其内部的所有<strong>文件</strong>/<strong>子文件夹</strong>，我们如果能用一条命令解决问题那就更好了。<strong>SCP</strong>用“<strong>-r</strong>”参数就能做到。</p><pre><code>pungki@mint ~/Documents $ scp -r documents mrarianto@202.x.x.x:.

mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 282.5KB/s 00:13
scp.txt 100% 10KB 9.8KB/s 00:00
</code></pre><p>拷贝完成后，你会在目标服务器中找到一个名为“<strong>documents</strong>”的文件夹，其中就是所拷贝的所有文件。“<strong>documents</strong>”是系统自动创建的文件夹。</p><h3 id="禁用进度条和警告-诊断信息" tabindex="-1">禁用进度条和警告/诊断信息 <a class="header-anchor" href="#禁用进度条和警告-诊断信息" aria-label="Permalink to “禁用进度条和警告/诊断信息”">​</a></h3><p>如果你不想从SCP中看到进度条和警告/诊断信息，你可以用“<strong>-q</strong>”参数来静默它们，举例如下。</p><pre><code>pungki@mint ~/Documents $ scp -q Label.pdf mrarianto@202.x.x.x:.

mrarianto@202.x.x.x&#39;s password:
pungki@mint ~/Documents $
</code></pre><p>正如你所看到的，在你输入密码之后，没有任何关于SCP进度的消息反馈。进度完成后，你也看不到任何提示。</p><h3 id="用scp通过代理来拷贝文件" tabindex="-1">用SCP通过代理来拷贝文件 <a class="header-anchor" href="#用scp通过代理来拷贝文件" aria-label="Permalink to “用SCP通过代理来拷贝文件”">​</a></h3><p>代理服务器经常用于办公环境，SCP自然是没有经过代理方面的配置的。当你的环境正在使用代理，那么你就必须要“告诉”SCP与代理关联起来。</p><p>场景如下：代理的地址是<strong>10.0.96.6</strong>，端口是8080。该代理还实现了用户认证功能。首先，你需要创建一个“<strong>~/.ssh/config</strong>”文件，其次把以下命令输入进该文件。</p><pre><code>ProxyCommand /usr/bin/corkscrew 10.0.96.6 8080 %h %p ~/.ssh/proxyauth
</code></pre><p>接着你需要创建一个同样包括以下命令的“<strong>~/.ssh/proxyauth</strong>”文件。</p><pre><code>myusername:mypassword
</code></pre><p>然后你就可以像往常一样使用SCP了。</p><p>请注意corkscrew可能还没有安装在你的系统中。在我的Linux Mint中，我需要首先先用标准Linux Mint安装程序来安装它。</p><pre><code>$ apt-get install corkscrew
</code></pre><p>对于其它的一些基于yum安装的系统，用户能用以下的命令来安装corkscrew。</p><pre><code># yum install corkscrew
</code></pre><p>还有一点就是因为“<strong>~/.ssh/proxyauth</strong>”文件中以明文的格式包含了你的“<strong>用户名</strong>”和“<strong>密码</strong>”，所以请确保该文件只能你来查看。</p><h3 id="选择不同的ssh-config文件" tabindex="-1">选择不同的ssh_config文件 <a class="header-anchor" href="#选择不同的ssh-config文件" aria-label="Permalink to “选择不同的ssh_config文件”">​</a></h3><p>对于经常在公司网络和公共网络之间切换的移动用户来说，一直改变SCP的设置显然是很痛苦的。如果我们能放一个保存不同配置的<strong>ssh_config</strong>文件来匹配我们的需求那就很好了。</p><h4 id="以下是一个简单的场景" tabindex="-1">以下是一个简单的场景 <a class="header-anchor" href="#以下是一个简单的场景" aria-label="Permalink to “以下是一个简单的场景”">​</a></h4><p>代理是被用来在公司网络但不是公共网络并且你会定期切换网络时候使用的。</p><pre><code>pungki@mint ~/Documents $ scp -F /home/pungki/proxy_ssh_config Label.pdf

mrarianto@202.x.x.x:.
mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 282.5KB/s 00:13
</code></pre><p>默认情况下每个用户会把“<strong>ssh_config</strong>”文件放在“<strong>~/.ssh/config</strong>“路径下。用兼容的代理创建一个特定的“<strong>ssh_config</strong>”文件，能让你切换网络时更加方便容易。</p><p>当你处于公司网络时，你可以用“<strong>-F</strong>”参数，当你处于公共网络时，你可以忽略掉“<strong>-F</strong>”参数。</p><p>以上就是关于<strong>SCP</strong>的全部内容了，你可以查看<strong>SCP</strong>的<strong>man页面</strong>来获取更多内容，请随意留下您的评论及建议。</p><hr>`,71)),o("p",null,[n[1]||(n[1]=s("via: ",-1)),t(e,{href:"http://www.tecmint.com/scp-commands-examples/"},{default:r(()=>[...n[0]||(n[0]=[s("http://www.tecmint.com/scp-commands-examples/",-1)])]),_:1})]),o("p",null,[n[5]||(n[5]=s("作者：",-1)),t(e,{href:"http://www.tecmint.com/author/pungkiarianto/"},{default:r(()=>[...n[2]||(n[2]=[s("Pungki Arianto",-1)])]),_:1}),n[6]||(n[6]=s(" 译者：",-1)),t(e,{href:"https://github.com/ZTinoZ"},{default:r(()=>[...n[3]||(n[3]=[s("ZTinoZ",-1)])]),_:1}),n[7]||(n[7]=s(" 校对：",-1)),t(e,{href:"https://github.com/wxy"},{default:r(()=>[...n[4]||(n[4]=[s("wxy",-1)])]),_:1})]),o("p",null,[n[10]||(n[10]=s("本文由 ",-1)),t(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[8]||(n[8]=[s("LCTT",-1)])]),_:1}),n[11]||(n[11]=s(" 原创翻译，",-1)),t(e,{href:"http://linux.cn/"},{default:r(()=>[...n[9]||(n[9]=[s("Linux中国",-1)])]),_:1}),n[12]||(n[12]=s(" 荣誉推出",-1))])])}const k=a(c,[["render",m]]);export{S as __pageData,k as default};
