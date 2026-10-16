import{_ as t,a0 as l,w as o,s as r,I as n,x as a,a1 as e,A as i,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"使用公钥/私钥对设定免密的 Linux 登录方式 | LCTT x X-CMD","titleTemplate":false,"description":"使用公钥/私钥对设定免密的 Linux 登录方式 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用公钥/私钥对设定免密的 Linux 登录方式 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用公钥/私钥对设定免密的 Linux 登录方式 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20200122 Setting up passwordless Linux logins using public-private keys","title":"使用公钥/私钥对设定免密的 Linux 登录方式","tag":"202001","desc":""},"relativePath":"202001/20200122 Setting up passwordless Linux logins using public-private keys.md","filePath":"[post].md"}'),h={name:"202001/20200122 Setting up passwordless Linux logins using public-private keys.md"};function c(u,s,g,k,b,y){const p=l("Link");return o(),r("div",null,[s[18]||(s[18]=n("h1",{id:"使用公钥-私钥对设定免密的-linux-登录方式",tabindex:"-1"},[a("使用公钥/私钥对设定免密的 Linux 登录方式 "),n("a",{class:"header-anchor",href:"#使用公钥-私钥对设定免密的-linux-登录方式","aria-label":"Permalink to “使用公钥/私钥对设定免密的 Linux 登录方式”"},"​")],-1)),s[19]||(s[19]=n("blockquote",null,[n("p",null,"使用一组公钥/私钥对让你不需要密码登录到远程 Linux 系统或使用 ssh 运行命令，这会非常方便，但是设置过程有点复杂。下面是帮助你的方法和脚本。")],-1)),s[20]||(s[20]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/29/141343ldps4muy4kp64k4l.jpg",alt:""})],-1)),n("p",null,[s[1]||(s[1]=a("在 ",-1)),e(p,{href:"https://www.networkworld.com/article/3215226/what-is-linux-uses-featres-products-operating-systems.html"},{default:i(()=>[...s[0]||(s[0]=[a("Linux",-1)])]),_:1}),s[2]||(s[2]=a(" 系统上设置一个允许你无需密码即可远程登录或运行命令的帐户并不难，但是要使它正常工作，你还需要掌握一些繁琐的细节。在本文，我们将完成整个过程，然后给出一个可以帮助处理琐碎细节的脚本。",-1))]),s[21]||(s[21]=d(`<p>设置好之后，如果希望在脚本中运行 <code>ssh</code> 命令，尤其是希望配置自动运行的命令，那么免密访问特别有用。</p><p>需要注意的是，你不需要在两个系统上使用相同的用户帐户。实际上，你可以把公用密钥用于系统上的多个帐户或多个系统上的不同帐户。</p><p>设置方法如下。</p><h3 id="在哪个系统上启动" tabindex="-1">在哪个系统上启动？ <a class="header-anchor" href="#在哪个系统上启动" aria-label="Permalink to “在哪个系统上启动？”">​</a></h3><p>首先，你需要从要发出命令的系统上着手。那就是你用来创建 <code>ssh</code> 密钥的系统。你还需要可以访问远程系统上的帐户并在其上运行这些命令。</p><p>为了使角色清晰明了，我们将场景中的第一个系统称为 “boss”，因为它将发出要在另一个系统上运行的命令。</p><p>因此，命令提示符如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>boss$</span></span></code></pre></div><p>如果你还没有在 boss 系统上为你的帐户设置公钥/私钥对，请使用如下所示的命令创建一个密钥对。注意，你可以在各种加密算法之间进行选择。（一般使用 RSA 或 DSA。）注意，要在不输入密码的情况下访问系统，你需要在下面的对话框中的两个提示符出不输入密码。</p><p>如果你已经有一个与此帐户关联的公钥/私钥对，请跳过此步骤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>boss$ ssh-keygen -t rsa</span></span>
<span class="line"><span>Generating public/private rsa key pair.</span></span>
<span class="line"><span>Enter file in which to save the key (/home/myself/.ssh/id_rsa):</span></span>
<span class="line"><span>Enter passphrase (empty for no passphrase):            &lt;== 按下回车键即可</span></span>
<span class="line"><span>Enter same passphrase again:                           &lt;== 按下回车键即可</span></span>
<span class="line"><span>Your identification has been saved in /home/myself/.ssh/id_rsa.</span></span>
<span class="line"><span>Your public key has been saved in /home/myself/.ssh/id_rsa.pub.</span></span>
<span class="line"><span>The key fingerprint is:</span></span>
<span class="line"><span>SHA256:1zz6pZcMjA1av8iyojqo6NVYgTl1+cc+N43kIwGKOUI myself@boss</span></span>
<span class="line"><span>The key&#39;s randomart image is:</span></span>
<span class="line"><span>+---[RSA 3072]----+</span></span>
<span class="line"><span>|     . ..        |</span></span>
<span class="line"><span>|   E+ .. .       |</span></span>
<span class="line"><span>|  .+ .o + o      |</span></span>
<span class="line"><span>|   ..+.. .o* .   |</span></span>
<span class="line"><span>|    ... So+*B o  |</span></span>
<span class="line"><span>|    +   ...==B . |</span></span>
<span class="line"><span>| . o .   ....++. |</span></span>
<span class="line"><span>|o o   . . o..o+  |</span></span>
<span class="line"><span>|=..o.. ..o  o.   |</span></span>
<span class="line"><span>+----[SHA256]-----+</span></span></code></pre></div><p>上面显示的命令将创建公钥和私钥。其中公钥用于加密，私钥用于解密。因此，这些密钥之间的关系是关键的，私有密钥<strong>绝不</strong>应该被共享。相反，它应该保存在 boss 系统的 <code>.ssh</code> 文件夹中。</p><p>注意，在创建时，你的公钥和私钥将会保存在 <code>.ssh</code> 文件夹中。</p><p>下一步是将<strong>公钥</strong>复制到你希望从 boss 系统免密访问的系统。你可以使用 <code>scp</code> 命令来完成此操作，但此时你仍然需要输入密码。在本例中，该系统称为 “target”。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>boss$ scp .ssh/id_rsa.pub myacct@target:/home/myaccount</span></span>
<span class="line"><span>myacct@target&#39;s password:</span></span></code></pre></div><p>你需要安装公钥在 target 系统（将运行命令的系统）上。如果你没有 <code>.ssh</code> 目录（例如，你从未在该系统上使用过 <code>ssh</code>），运行这样的命令将为你设置一个目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>target$ ssh localhost date</span></span>
<span class="line"><span>target$ ls -la .ssh</span></span>
<span class="line"><span>total 12</span></span>
<span class="line"><span>drwx------ 2 myacct myacct 4096 Jan 19 11:48 .</span></span>
<span class="line"><span>drwxr-xr-x 6 myacct myacct 4096 Jan 19 11:49 ..</span></span>
<span class="line"><span>-rw-r--r-- 1 myacct myacct  222 Jan 19 11:48 known_hosts</span></span></code></pre></div><p>仍然在目标系统上，你需要将从“boss”系统传输的公钥添加到 <code>.ssh/authorized_keys</code> 文件中。如果该文件已经存在，使用下面的命令将把它添加到文件的末尾；如果文件不存在，则创建该文件并添加密钥。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>target$ cat id_rsa.pub &gt;&gt; .ssh/authorized_keys</span></span></code></pre></div><p>下一步，你需要确保你的 <code>authorized_keys</code> 文件权限为 600。如果还不是，执行命令 <code>chmod 600 .ssh/authorized_keys</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>target$ ls -l authorized_keys</span></span>
<span class="line"><span>-rw------- 1 myself myself 569 Jan 19 12:10 authorized_keys</span></span></code></pre></div><p>还要检查目标系统上 <code>.ssh</code> 目录的权限是否设置为 700。如果需要，执行 <code>chmod 700 .ssh</code> 命令修改权限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>target$ ls -ld .ssh</span></span>
<span class="line"><span>drwx------ 2 myacct myacct 4096 Jan 14 15:54 .ssh</span></span></code></pre></div><p>此时，你应该能够从 boss 系统远程免密运行命令到目标系统。除非目标系统上的目标用户帐户拥有与你试图连接的用户和主机相同的旧公钥，否则这应该可以工作。如果是这样，你应该删除早期的（并冲突的）条目。</p><h3 id="使用脚本" tabindex="-1">使用脚本 <a class="header-anchor" href="#使用脚本" aria-label="Permalink to “使用脚本”">​</a></h3><p>使用脚本可以使某些工作变得更加容易。但是，在下面的示例脚本中，你会遇到的一个烦人的问题是，在配置免密访问权限之前，你必须多次输入目标用户的密码。一种选择是将脚本分为两部分——需要在 boss 系统上运行的命令和需要在 target 系统上运行的命令。</p><p>这是“一步到位”版本的脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># NOTE: This script requires that you have the password for the remote acct</span></span>
<span class="line"><span>#       in order to set up password-free access using your public key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LOC=\`hostname\`  # the local system from which you want to run commands from</span></span>
<span class="line"><span>                # wo a password</span></span>
<span class="line"><span></span></span>
<span class="line"><span># get target system and account</span></span>
<span class="line"><span>echo -n &quot;target system&gt; &quot;</span></span>
<span class="line"><span>read REM</span></span>
<span class="line"><span>echo -n &quot;target user&gt; &quot;</span></span>
<span class="line"><span>read user</span></span>
<span class="line"><span></span></span>
<span class="line"><span># create a key pair if no public key exists</span></span>
<span class="line"><span>if [ ! -f ~/.ssh/id_rsa.pub ]; then</span></span>
<span class="line"><span>  ssh-keygen -t rsa</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ensure a .ssh directory exists in the remote account</span></span>
<span class="line"><span>echo checking for .ssh directory on remote system</span></span>
<span class="line"><span>ssh $user@$REM &quot;if [ ! -d /home/$user/.ssh ]; then mkdir /home/$user/.ssh; fi&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># share the public key (using local hostname)</span></span>
<span class="line"><span>echo copying the public key</span></span>
<span class="line"><span>scp ~/.ssh/id_rsa.pub $user@$REM:/home/$user/$user-$LOC.pub</span></span>
<span class="line"><span></span></span>
<span class="line"><span># put the public key into the proper location</span></span>
<span class="line"><span>echo adding key to authorized_keys</span></span>
<span class="line"><span>ssh $user@$REM &quot;cat /home/$user/$user-$LOC.pub &gt;&gt; /home/$user/.ssh/authorized_ke</span></span>
<span class="line"><span>ys&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># set permissions on authorized_keys and .ssh (might be OK already)</span></span>
<span class="line"><span>echo setting permissions</span></span>
<span class="line"><span>ssh $user@$REM &quot;chmod 600 ~/.ssh/authorized_keys&quot;</span></span>
<span class="line"><span>ssh $user@$REM &quot;chmod 700 ~/.ssh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># try it out -- should NOT ask for a password</span></span>
<span class="line"><span>echo testing -- if no password is requested, you are all set</span></span>
<span class="line"><span>ssh $user@$REM /bin/hostname</span></span></code></pre></div><p>脚本已经配置为在你每次必须输入密码时告诉你它正在做什么。交互看起来是这样的:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./rem_login_setup</span></span>
<span class="line"><span>target system&gt; fruitfly</span></span>
<span class="line"><span>target user&gt; lola</span></span>
<span class="line"><span>checking for .ssh directory on remote system</span></span>
<span class="line"><span>lola@fruitfly&#39;s password:</span></span>
<span class="line"><span>copying the public key</span></span>
<span class="line"><span>lola@fruitfly&#39;s password:</span></span>
<span class="line"><span>id_rsa.pub                                    100%  567   219.1KB/s   00:00</span></span>
<span class="line"><span>adding key to authorized_keys</span></span>
<span class="line"><span>lola@fruitfly&#39;s password:</span></span>
<span class="line"><span>setting permissions</span></span>
<span class="line"><span>lola@fruitfly&#39;s password:</span></span>
<span class="line"><span>testing -- if no password is requested, you are all set</span></span>
<span class="line"><span>fruitfly</span></span></code></pre></div><p>在上面的场景之后，你就可以像这样登录到 lola 的帐户：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ssh lola@fruitfly</span></span>
<span class="line"><span>[lola@fruitfly ~]$</span></span></code></pre></div><p>一旦设置了免密登录，你就可以不需要键入密码从 boss 系统登录到 target 系统，并且运行任意的 <code>ssh</code> 命令。以这种免密的方式运行并不意味着你的帐户不安全。然而，根据 target 系统的性质，保护你在 boss 系统上的密码可能变得更加重要。</p><hr>`,34)),n("p",null,[s[4]||(s[4]=a("via: ",-1)),e(p,{href:"https://www.networkworld.com/article/3514607/setting-up-passwordless-linux-logins-using-publicprivate-keys.html"},{default:i(()=>[...s[3]||(s[3]=[a("https://www.networkworld.com/article/3514607/setting-up-passwordless-linux-logins-using-publicprivate-keys.html",-1)])]),_:1})]),n("p",null,[s[9]||(s[9]=a("作者：",-1)),e(p,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:i(()=>[...s[5]||(s[5]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[10]||(s[10]=a(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[6]||(s[6]=[a("lujun9972",-1)])]),_:1}),s[11]||(s[11]=a(" 译者：",-1)),e(p,{href:"https://github.com/laingke"},{default:i(()=>[...s[7]||(s[7]=[a("laingke",-1)])]),_:1}),s[12]||(s[12]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[8]||(s[8]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[15]||(s[15]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[13]||(s[13]=[a("LCTT",-1)])]),_:1}),s[16]||(s[16]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[14]||(s[14]=[a("Linux中国",-1)])]),_:1}),s[17]||(s[17]=a(" 荣誉推出",-1))])])}const x=t(h,[["render",c]]);export{w as __pageData,x as default};
