import{_ as i,a0 as o,w as l,s as c,ao as r,I as t,x as n,a1 as a,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"在 Linux 下使用 scp 命令 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 下使用 scp 命令 | LCTT (201606) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 下使用 scp 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 下使用 scp 命令 | LCTT (201606) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201606/20160601 scp command in Linux","title":"在 Linux 下使用 scp 命令","tag":"201606","desc":""},"relativePath":"201606/20160601 scp command in Linux.md","filePath":"[post].md"}'),d={name:"201606/20160601 scp command in Linux.md"};function g(u,s,h,m,b,w){const p=o("Link");return l(),c("div",null,[s[13]||(s[13]=r(`<h1 id="在-linux-下使用-scp-命令" tabindex="-1">在 Linux 下使用 scp 命令 <a class="header-anchor" href="#在-linux-下使用-scp-命令" aria-label="Permalink to “在 Linux 下使用 scp 命令”">​</a></h1><p><img src="https://www.unixmen.com/wp-content/uploads/2016/05/SCP-LOGO-1.jpg" alt=""></p><p>scp 是安全拷貝協議 （Secure Copy Protocol）的縮寫，和眾多 Linux/Unix 使用者所熟知的拷貝（cp）命令一樣。scp 的使用方式類似於 cp 命令，cp 命令將一個文件或文件夾從本地操作系統的一個位置（源）拷貝到目標位置（目的），而 scp 用來將文件或文件夾從網絡上的一個主機拷貝到另一個主機當中去。</p><p>scp 命令的使用方法如下所示，在這個例子中，我將一個叫 “importantfile” 的文件從本機（10.10.16.147）拷貝到遠程主機（10.0.0.6）中。在這個命令裏，你也可以使用主機名字來替代IP地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# scp importantfile admin@10.0.0.6:/home/admin/</span></span>
<span class="line"><span>The authenticity of host &#39;10.0.0.6 (10.0.0.6)&#39; can&#39;t be established.</span></span>
<span class="line"><span>RSA key fingerprint is SHA256:LqBzkeGa6K9BfWWKgcKlQoE0u+gjorX0lPLx5YftX1Y.</span></span>
<span class="line"><span>RSA key fingerprint is MD5:ed:44:42:59:3e:dd:4c:12:43:4a:89:b1:5d:bd:9e:20.</span></span>
<span class="line"><span>Are you sure you want to continue connecting (yes/no)? yes</span></span>
<span class="line"><span>Warning: Permanently added &#39;10.0.0.6&#39; (RSA) to the list of known hosts.</span></span>
<span class="line"><span>admin@10.0.0.6&#39;s password:</span></span>
<span class="line"><span>importantfile                                 100%    0     0.0KB/s   00:00</span></span>
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>類似的，如果你想從一個遠程主機中取得文件，你可以利用如下的 scp 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# scp root@10.10.16.137:/root/importantfile /home/admin/</span></span>
<span class="line"><span>The authenticity of host &#39;10.10.16.137 (10.10.16.137)&#39; can&#39;t be established.</span></span>
<span class="line"><span>RSA key fingerprint is b0:b0:a3:c3:2e:94:13:0c:29:2e:ba:0b:d3:d6:12:8f.</span></span>
<span class="line"><span>Are you sure you want to continue connecting (yes/no)? yes</span></span>
<span class="line"><span>Warning: Permanently added &#39;10.10.16.137&#39; (RSA) to the list of known hosts.</span></span>
<span class="line"><span>root@10.10.16.137&#39;s password:</span></span>
<span class="line"><span>importantfile 100% 0 0.0KB/s 00:00</span></span>
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>你也可以像 cp 命令一樣，在 scp 命令中使用不同的選項，scp 的 man 幫助詳細地闡述了不同選項的用法和用處。</p><p><strong>示例輸出</strong></p><p><img src="https://www.unixmen.com/wp-content/uploads/2016/05/scp.jpg" alt=""></p><p>scp 可選參數如下所示:</p><pre><code> -B      採取批量模式（避免詢問密碼或口令）
 -C      啓用壓縮。通過指明 -C 參數來開啓壓縮模式。
 -c 加密方式
         選擇在傳輸過程中用來加密的加密方式 這個選項會被直接傳遞到 ssh(1)。
 -F ssh 配置
         給 ssh 指定一個用來替代默認配置的配置文件。這個選項會被直接傳遞到 ssh(1)。
 -l 限速
         限制命令使用的帶寬，默認單位是 Kbit/s。
 -P 端口
         指定需要的連接的遠程主機的端口。  
         注意，這個選項使用的是一個大寫的“P”，因為小寫的“-p”已經用來保留目標文件的時間和模式相關信息。（LCTT 譯註：ssh 命令中使用小寫的“-p”來指定目標端口。）
 -p      保留文件原來的修改時間，訪問時間以及權限模式。
 -q      靜默模式：不顯示來自 ssh(1) 命令的進度信息，警告和診斷信息。
 -r      遞歸拷貝整個目錄。
         注意，scp 命令在樹形遍歷的時候同樣會跟隨符號連接，複製所連接的文件。
 -v      詳細模式。scp 和 ssh(1) 將會打印出處理過程中的調試信息。這可以幫助你調試連接、認證和配置方面的問題。
</code></pre><p><strong>詳細模式</strong></p><p>利用 scp 命令的 -v 選項，你可以得到認證、調試等的相關細節信息。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-v.jpg" alt=""></p><p>當我們使用 -v 選項的時候，一個簡單的輸出如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# scp -v abc.txt admin@10.0.0.6:/home/admin</span></span>
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
<span class="line"><span>[root@localhost ~]#</span></span></code></pre></div><p>當我們需要拷貝一個目錄或者文件夾的時候，我們可以使用 -r 選項，它會遞歸拷貝整個目錄。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-with-r.jpg" alt=""></p><p><strong>靜默模式</strong></p><p>如果你想要關閉進度信息以及警告和診斷信息，你可以通過使用scp命令中的-q選項.</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-with-q.jpg" alt=""></p><p>上一次我們僅僅使用 -r 參數，它顯示了逐個文件的信息，但這一次當我們使用了 -q 參數，它就不顯示進度信息。</p><p>利用 scp 的 -p 選項來保留目標文件的更新時間，訪問時間和權限模式。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-with-p.jpg" alt=""></p><p><strong>通過 -P 選項來指定遠程主機的連接端口</strong></p><p>scp 使用 ssh 命令來在兩個主機之間傳輸文件，因為 ssh 默認使用的是22端口號，所以 scp 也使用相同的22端口號。</p><p>如果我們希望改變這個端口號，我們可以使用 -P（大寫的 P，因為小寫的 p 用來保持文件的訪問時間等）選項來指定所需的端口號。</p><p>舉個例子，如果我們想要使用2222端口號，我們可以使用如下的命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@localhost ~]# scp -P 2222  abcd1 root@10.10.16.137:/root/</span></span></code></pre></div><p><strong>限制命令使用的帶寬，指定的單位是 Kbit/s</strong></p><p>如下所示，我們可以使用 -l 參數來指定 scp 命令所使用的帶寬，在此我們將速度限制為512kbit/s。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-with-l.jpg" alt=""></p><p><strong>開啓壓縮</strong></p><p>如下所示，我們可以通過開啓 scp 命令的壓縮模式來節省傳輸過程中的帶寬和時間。</p><p><img src="https://www.unixmen.com/wp-content/uploads/2016/05/scp-with-C.jpg" alt=""></p><p><strong>選擇加密數據的加密方式</strong></p><p>scp 默認使用 AES-128 的加密方式，如果我們想要改變這個加密方式，可以通過 -c(小寫的 c) 參數來指定其他的加密方式。</p><p><img src="http://www.unixmen.com/wp-content/uploads/2016/05/scp-with-cipher.jpg" alt=""></p><p>現在你可以利用 scp（Secure copy）命令在你所屬網絡中的兩個節點之間安全地拷貝文件了。</p><hr>`,41)),t("p",null,[s[1]||(s[1]=n("via: ",-1)),a(p,{href:"https://www.unixmen.com/scp-command-linuxunix/"},{default:e(()=>[...s[0]||(s[0]=[n("https://www.unixmen.com/scp-command-linuxunix/",-1)])]),_:1})]),t("p",null,[s[5]||(s[5]=n("作者：",-1)),a(p,{href:"https://www.unixmen.com/author/naga/"},{default:e(()=>[...s[2]||(s[2]=[n("Naga Ramesh",-1)])]),_:1}),s[6]||(s[6]=n(" 譯者：",-1)),a(p,{href:"https://github.com/lujianbo"},{default:e(()=>[...s[3]||(s[3]=[n("lujianbo",-1)])]),_:1}),s[7]||(s[7]=n(" 校對：",-1)),a(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[4]||(s[4]=[n("wxy",-1)])]),_:1})]),t("p",null,[s[10]||(s[10]=n("本文由 ",-1)),a(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[8]||(s[8]=[n("LCTT",-1)])]),_:1}),s[11]||(s[11]=n(" 原創編譯，",-1)),a(p,{href:"https://linux.cn/"},{default:e(()=>[...s[9]||(s[9]=[n("Linux中國",-1)])]),_:1}),s[12]||(s[12]=n(" 榮譽推出",-1))])])}const y=i(d,[["render",g]]);export{k as __pageData,y as default};
