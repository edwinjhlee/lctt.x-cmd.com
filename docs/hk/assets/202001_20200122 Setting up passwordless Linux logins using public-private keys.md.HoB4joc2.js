import{_ as t,a0 as l,w as o,s as r,I as n,x as a,a1 as e,A as i,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"使用公鑰/私鑰對設定免密的 Linux 登錄方式 | LCTT x X-CMD","titleTemplate":false,"description":"使用公鑰/私鑰對設定免密的 Linux 登錄方式 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用公鑰/私鑰對設定免密的 Linux 登錄方式 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用公鑰/私鑰對設定免密的 Linux 登錄方式 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20200122 Setting up passwordless Linux logins using public-private keys","title":"使用公鑰/私鑰對設定免密的 Linux 登錄方式","tag":"202001","desc":""},"relativePath":"202001/20200122 Setting up passwordless Linux logins using public-private keys.md","filePath":"[post].md"}'),h={name:"202001/20200122 Setting up passwordless Linux logins using public-private keys.md"};function c(u,s,g,k,b,y){const p=l("Link");return o(),r("div",null,[s[18]||(s[18]=n("h1",{id:"使用公鑰-私鑰對設定免密的-linux-登錄方式",tabindex:"-1"},[a("使用公鑰/私鑰對設定免密的 Linux 登錄方式 "),n("a",{class:"header-anchor",href:"#使用公鑰-私鑰對設定免密的-linux-登錄方式","aria-label":"Permalink to “使用公鑰/私鑰對設定免密的 Linux 登錄方式”"},"​")],-1)),s[19]||(s[19]=n("blockquote",null,[n("p",null,"使用一組公鑰/私鑰對讓你不需要密碼登錄到遠程 Linux 系統或使用 ssh 運行命令，這會非常方便，但是設置過程有點複雜。下面是幫助你的方法和腳本。")],-1)),s[20]||(s[20]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/29/141343ldps4muy4kp64k4l.jpg",alt:""})],-1)),n("p",null,[s[1]||(s[1]=a("在 ",-1)),e(p,{href:"https://www.networkworld.com/article/3215226/what-is-linux-uses-featres-products-operating-systems.html"},{default:i(()=>[...s[0]||(s[0]=[a("Linux",-1)])]),_:1}),s[2]||(s[2]=a(" 系統上設置一個允許你無需密碼即可遠程登錄或運行命令的帳户並不難，但是要使它正常工作，你還需要掌握一些繁瑣的細節。在本文，我們將完成整個過程，然後給出一個可以幫助處理瑣碎細節的腳本。",-1))]),s[21]||(s[21]=d(`<p>設置好之後，如果希望在腳本中運行 <code>ssh</code> 命令，尤其是希望配置自動運行的命令，那麼免密訪問特別有用。</p><p>需要注意的是，你不需要在兩個系統上使用相同的用户帳户。實際上，你可以把公用密鑰用於系統上的多個帳户或多個系統上的不同帳户。</p><p>設置方法如下。</p><h3 id="在哪個系統上啓動" tabindex="-1">在哪個系統上啓動？ <a class="header-anchor" href="#在哪個系統上啓動" aria-label="Permalink to “在哪個系統上啓動？”">​</a></h3><p>首先，你需要從要發出命令的系統上着手。那就是你用來創建 <code>ssh</code> 密鑰的系統。你還需要可以訪問遠程系統上的帳户並在其上運行這些命令。</p><p>為了使角色清晰明瞭，我們將場景中的第一個系統稱為 “boss”，因為它將發出要在另一個系統上運行的命令。</p><p>因此，命令提示符如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>boss$</span></span></code></pre></div><p>如果你還沒有在 boss 系統上為你的帳户設置公鑰/私鑰對，請使用如下所示的命令創建一個密鑰對。注意，你可以在各種加密算法之間進行選擇。（一般使用 RSA 或 DSA。）注意，要在不輸入密碼的情況下訪問系統，你需要在下面的對話框中的兩個提示符出不輸入密碼。</p><p>如果你已經有一個與此帳户關聯的公鑰/私鑰對，請跳過此步驟。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>boss$ ssh-keygen -t rsa</span></span>
<span class="line"><span>Generating public/private rsa key pair.</span></span>
<span class="line"><span>Enter file in which to save the key (/home/myself/.ssh/id_rsa):</span></span>
<span class="line"><span>Enter passphrase (empty for no passphrase):            &lt;== 按下回車鍵即可</span></span>
<span class="line"><span>Enter same passphrase again:                           &lt;== 按下回車鍵即可</span></span>
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
<span class="line"><span>+----[SHA256]-----+</span></span></code></pre></div><p>上面顯示的命令將創建公鑰和私鑰。其中公鑰用於加密，私鑰用於解密。因此，這些密鑰之間的關係是關鍵的，私有密鑰<strong>絕不</strong>應該被共享。相反，它應該保存在 boss 系統的 <code>.ssh</code> 文件夾中。</p><p>注意，在創建時，你的公鑰和私鑰將會保存在 <code>.ssh</code> 文件夾中。</p><p>下一步是將<strong>公鑰</strong>複製到你希望從 boss 系統免密訪問的系統。你可以使用 <code>scp</code> 命令來完成此操作，但此時你仍然需要輸入密碼。在本例中，該系統稱為 “target”。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>boss$ scp .ssh/id_rsa.pub myacct@target:/home/myaccount</span></span>
<span class="line"><span>myacct@target&#39;s password:</span></span></code></pre></div><p>你需要安裝公鑰在 target 系統（將運行命令的系統）上。如果你沒有 <code>.ssh</code> 目錄（例如，你從未在該系統上使用過 <code>ssh</code>），運行這樣的命令將為你設置一個目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>target$ ssh localhost date</span></span>
<span class="line"><span>target$ ls -la .ssh</span></span>
<span class="line"><span>total 12</span></span>
<span class="line"><span>drwx------ 2 myacct myacct 4096 Jan 19 11:48 .</span></span>
<span class="line"><span>drwxr-xr-x 6 myacct myacct 4096 Jan 19 11:49 ..</span></span>
<span class="line"><span>-rw-r--r-- 1 myacct myacct  222 Jan 19 11:48 known_hosts</span></span></code></pre></div><p>仍然在目標系統上，你需要將從“boss”系統傳輸的公鑰添加到 <code>.ssh/authorized_keys</code> 文件中。如果該文件已經存在，使用下面的命令將把它添加到文件的末尾；如果文件不存在，則創建該文件並添加密鑰。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>target$ cat id_rsa.pub &gt;&gt; .ssh/authorized_keys</span></span></code></pre></div><p>下一步，你需要確保你的 <code>authorized_keys</code> 文件權限為 600。如果還不是，執行命令 <code>chmod 600 .ssh/authorized_keys</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>target$ ls -l authorized_keys</span></span>
<span class="line"><span>-rw------- 1 myself myself 569 Jan 19 12:10 authorized_keys</span></span></code></pre></div><p>還要檢查目標系統上 <code>.ssh</code> 目錄的權限是否設置為 700。如果需要，執行 <code>chmod 700 .ssh</code> 命令修改權限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>target$ ls -ld .ssh</span></span>
<span class="line"><span>drwx------ 2 myacct myacct 4096 Jan 14 15:54 .ssh</span></span></code></pre></div><p>此時，你應該能夠從 boss 系統遠程免密運行命令到目標系統。除非目標系統上的目標用户帳户擁有與你試圖連接的用户和主機相同的舊公鑰，否則這應該可以工作。如果是這樣，你應該刪除早期的（並衝突的）條目。</p><h3 id="使用腳本" tabindex="-1">使用腳本 <a class="header-anchor" href="#使用腳本" aria-label="Permalink to “使用腳本”">​</a></h3><p>使用腳本可以使某些工作變得更加容易。但是，在下面的示例腳本中，你會遇到的一個煩人的問題是，在配置免密訪問權限之前，你必須多次輸入目標用户的密碼。一種選擇是將腳本分為兩部分——需要在 boss 系統上運行的命令和需要在 target 系統上運行的命令。</p><p>這是“一步到位”版本的腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>ssh $user@$REM /bin/hostname</span></span></code></pre></div><p>腳本已經配置為在你每次必須輸入密碼時告訴你它正在做什麼。交互看起來是這樣的:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./rem_login_setup</span></span>
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
<span class="line"><span>fruitfly</span></span></code></pre></div><p>在上面的場景之後，你就可以像這樣登錄到 lola 的帳户：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ssh lola@fruitfly</span></span>
<span class="line"><span>[lola@fruitfly ~]$</span></span></code></pre></div><p>一旦設置了免密登錄，你就可以不需要鍵入密碼從 boss 系統登錄到 target 系統，並且運行任意的 <code>ssh</code> 命令。以這種免密的方式運行並不意味着你的帳户不安全。然而，根據 target 系統的性質，保護你在 boss 系統上的密碼可能變得更加重要。</p><hr>`,34)),n("p",null,[s[4]||(s[4]=a("via: ",-1)),e(p,{href:"https://www.networkworld.com/article/3514607/setting-up-passwordless-linux-logins-using-publicprivate-keys.html"},{default:i(()=>[...s[3]||(s[3]=[a("https://www.networkworld.com/article/3514607/setting-up-passwordless-linux-logins-using-publicprivate-keys.html",-1)])]),_:1})]),n("p",null,[s[9]||(s[9]=a("作者：",-1)),e(p,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:i(()=>[...s[5]||(s[5]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[10]||(s[10]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[6]||(s[6]=[a("lujun9972",-1)])]),_:1}),s[11]||(s[11]=a(" 譯者：",-1)),e(p,{href:"https://github.com/laingke"},{default:i(()=>[...s[7]||(s[7]=[a("laingke",-1)])]),_:1}),s[12]||(s[12]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[8]||(s[8]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[15]||(s[15]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[13]||(s[13]=[a("LCTT",-1)])]),_:1}),s[16]||(s[16]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[14]||(s[14]=[a("Linux中國",-1)])]),_:1}),s[17]||(s[17]=a(" 榮譽推出",-1))])])}const x=t(h,[["render",c]]);export{w as __pageData,x as default};
