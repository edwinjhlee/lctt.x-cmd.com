import{_ as i,a0 as t,w as o,s as r,I as a,x as n,a1 as e,A as l,ao as u}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse('{"title":"Linux 防火牆 ufw 簡介 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 防火牆 ufw 簡介 | LCTT (202004) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 防火牆 ufw 簡介 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 防火牆 ufw 簡介 | LCTT (202004) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202004/20200325 Linux firewall basics with ufw","title":"Linux 防火牆 ufw 簡介","tag":"202004","desc":""},"relativePath":"202004/20200325 Linux firewall basics with ufw.md","filePath":"[post].md"}'),d={name:"202004/20200325 Linux firewall basics with ufw.md"};function c(h,s,g,f,k,w){const p=t("Link");return o(),r("div",null,[s[23]||(s[23]=a("h1",{id:"linux-防火牆-ufw-簡介",tabindex:"-1"},[n("Linux 防火牆 ufw 簡介 "),a("a",{class:"header-anchor",href:"#linux-防火牆-ufw-簡介","aria-label":"Permalink to “Linux 防火牆 ufw 簡介”"},"​")],-1)),s[24]||(s[24]=a("blockquote",null,[a("p",null,"我們來研究下 Linux 上的 ufw（簡單防火牆），為你更改防火牆提供一些見解和命令。")],-1)),s[25]||(s[25]=a("p",null,[a("img",{src:"https://images.idgesg.net/images/article/2019/06/cso_network_security_encryption_automation_by_vertigo3d_gettyimages-597931354_2400x1600-100798880-large.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=a("code",null,"ufw",-1)),s[2]||(s[2]=n("（",-1)),s[3]||(s[3]=a("ruby",null,[n("簡單防火牆"),a("rt",null,"Uncomplicated FireWall")],-1)),s[4]||(s[4]=n("）真正地簡化了 ",-1)),e(p,{href:"https://www.networkworld.com/article/2716098/working-with-iptables.html"},{default:l(()=>[...s[0]||(s[0]=[n("iptables",-1)])]),_:1}),s[5]||(s[5]=n("，它從出現的這幾年，已經成為 Ubuntu 和 Debian 等系統上的默認防火牆。而且 ",-1)),s[6]||(s[6]=a("code",null,"ufw",-1)),s[7]||(s[7]=n(" 出乎意料的簡單，這對新管理員來説是一個福音，否則他們可能需要投入大量時間來學習防火牆管理。",-1))]),s[26]||(s[26]=u(`<p><code>ufw</code> 也有 GUI 客户端（例如 <code>gufw</code>），但是 <code>ufw</code> 命令通常在命令列上執行的。本文介紹了一些使用 <code>ufw</code> 的命令，並研究了它的工作方式。</p><p>首先，快速查看 <code>ufw</code> 配置的方法是查看其配置文件 —— <code>/etc/default/ufw</code>。使用下面的命令可以查看其配置，使用 <code>grep</code> 來抑制了空行和註釋（以 # 開頭的行）的顯示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep -v &#39;^#\\|^$&#39; /etc/default/ufw</span></span>
<span class="line"><span>IPV6=yes</span></span>
<span class="line"><span>DEFAULT_INPUT_POLICY=&quot;DROP&quot;</span></span>
<span class="line"><span>DEFAULT_OUTPUT_POLICY=&quot;ACCEPT&quot;</span></span>
<span class="line"><span>DEFAULT_FORWARD_POLICY=&quot;DROP&quot;</span></span>
<span class="line"><span>DEFAULT_APPLICATION_POLICY=&quot;SKIP&quot;</span></span>
<span class="line"><span>MANAGE_BUILTINS=no</span></span>
<span class="line"><span>IPT_SYSCTL=/etc/ufw/sysctl.conf</span></span>
<span class="line"><span>IPT_MODULES=&quot;nf_conntrack_ftp nf_nat_ftp nf_conntrack_netbios_ns&quot;</span></span></code></pre></div><p>正如你所看到的，默認策略是丟棄輸入但允許輸出。允許你接受特定的連接的其它規則是需要單獨配置的。</p><p><code>ufw</code> 命令的基本語法如下所示，但是這個概要並不意味着你只需要輸入 <code>ufw</code> 就行，而是一個告訴你需要哪些參數的快速提示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ufw [--dry-run] [options] [rule syntax]</span></span></code></pre></div><p><code>--dry-run</code> 選項意味着 <code>ufw</code> 不會運行你指定的命令，但會顯示給你如果執行後的結果。但是它會顯示假如更改後的整個規則集，因此你要做有好多行輸出的準備。</p><p>要檢查 <code>ufw</code> 的狀態，請運行以下命令。注意，即使是這個命令也需要使用 <code>sudo</code> 或 root 賬户。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw status</span></span>
<span class="line"><span>Status: active</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To                         Action      From</span></span>
<span class="line"><span>--                         ------      ----</span></span>
<span class="line"><span>22                         ALLOW       192.168.0.0/24</span></span>
<span class="line"><span>9090                       ALLOW       Anywhere</span></span>
<span class="line"><span>9090 (v6)                  ALLOW       Anywhere (v6)</span></span></code></pre></div><p>否則，你會看到以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ufw status</span></span>
<span class="line"><span>ERROR: You need to be root to run this script</span></span></code></pre></div><p>加上 <code>verbose</code> 選項會提供一些其它細節：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw status verbose</span></span>
<span class="line"><span>Status: active</span></span>
<span class="line"><span>Logging: on (low)</span></span>
<span class="line"><span>Default: deny (incoming), allow (outgoing), disabled (routed)</span></span>
<span class="line"><span>New profiles: skip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To                         Action      From</span></span>
<span class="line"><span>--                         ------      ----</span></span>
<span class="line"><span>22                         ALLOW IN    192.168.0.0/24</span></span>
<span class="line"><span>9090                       ALLOW IN    Anywhere</span></span>
<span class="line"><span>9090 (v6)                  ALLOW IN    Anywhere (v6)</span></span></code></pre></div><p>你可以使用以下命令輕鬆地通過端口號允許和拒絕連接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw allow 80         &lt;== 允許 http 訪問</span></span>
<span class="line"><span>$ sudo ufw deny 25              &lt;== 拒絕 smtp 訪問</span></span></code></pre></div><p>你可以查看 <code>/etc/services</code> 文件來找到端口號和服務名稱之間的聯繫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep 80/ /etc/services</span></span>
<span class="line"><span>http            80/tcp          www             # WorldWideWeb HTTP</span></span>
<span class="line"><span>socks           1080/tcp                        # socks proxy server</span></span>
<span class="line"><span>socks           1080/udp</span></span>
<span class="line"><span>http-alt        8080/tcp        webcache        # WWW caching service</span></span>
<span class="line"><span>http-alt        8080/udp</span></span>
<span class="line"><span>amanda          10080/tcp                       # amanda backup services</span></span>
<span class="line"><span>amanda          10080/udp</span></span>
<span class="line"><span>canna           5680/tcp                        # cannaserver</span></span></code></pre></div><p>或者，你可以命令中直接使用服務的名稱。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw allow http</span></span>
<span class="line"><span>Rule added</span></span>
<span class="line"><span>Rule added (v6)</span></span>
<span class="line"><span>$ sudo ufw allow https</span></span>
<span class="line"><span>Rule added</span></span>
<span class="line"><span>Rule added (v6)</span></span></code></pre></div><p>進行更改後，你應該再次檢查狀態來查看是否生效：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw status</span></span>
<span class="line"><span>Status: active</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To                         Action      From</span></span>
<span class="line"><span>--                         ------      ----</span></span>
<span class="line"><span>22                         ALLOW       192.168.0.0/24</span></span>
<span class="line"><span>9090                       ALLOW       Anywhere</span></span>
<span class="line"><span>80/tcp                     ALLOW       Anywhere         &lt;==</span></span>
<span class="line"><span>443/tcp                    ALLOW       Anywhere         &lt;==</span></span>
<span class="line"><span>9090 (v6)                  ALLOW       Anywhere (v6)</span></span>
<span class="line"><span>80/tcp (v6)                ALLOW       Anywhere (v6)    &lt;==</span></span>
<span class="line"><span>443/tcp (v6)               ALLOW       Anywhere (v6)    &lt;==</span></span></code></pre></div><p><code>ufw</code> 遵循的規則存儲在 <code>/etc/ufw</code> 目錄中。注意，你需要 root 用户訪問權限才能查看這些文件，每個文件都包含大量規則。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -ltr /etc/ufw</span></span>
<span class="line"><span>total 48</span></span>
<span class="line"><span>-rw-r--r-- 1 root root 1391 Aug 15  2017 sysctl.conf</span></span>
<span class="line"><span>-rw-r----- 1 root root 1004 Aug 17  2017 after.rules</span></span>
<span class="line"><span>-rw-r----- 1 root root  915 Aug 17  2017 after6.rules</span></span>
<span class="line"><span>-rw-r----- 1 root root 1130 Jan  5  2018 before.init</span></span>
<span class="line"><span>-rw-r----- 1 root root 1126 Jan  5  2018 after.init</span></span>
<span class="line"><span>-rw-r----- 1 root root 2537 Mar 25  2019 before.rules</span></span>
<span class="line"><span>-rw-r----- 1 root root 6700 Mar 25  2019 before6.rules</span></span>
<span class="line"><span>drwxr-xr-x 3 root root 4096 Nov 12 08:21 applications.d</span></span>
<span class="line"><span>-rw-r--r-- 1 root root  313 Mar 18 17:30 ufw.conf</span></span>
<span class="line"><span>-rw-r----- 1 root root 1711 Mar 19 10:42 user.rules</span></span>
<span class="line"><span>-rw-r----- 1 root root 1530 Mar 19 10:42 user6.rules</span></span></code></pre></div><p>本文前面所作的更改，為 <code>http</code> 訪問添加了端口 <code>80</code> 和為 <code>https</code> 訪問添加了端口 <code>443</code>，在 <code>user.rules</code> 和 <code>user6.rules</code> 文件中看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># grep &quot; 80 &quot; user*.rules</span></span>
<span class="line"><span>user6.rules:### tuple ### allow tcp 80 ::/0 any ::/0 in</span></span>
<span class="line"><span>user6.rules:-A ufw6-user-input -p tcp --dport 80 -j ACCEPT</span></span>
<span class="line"><span>user.rules:### tuple ### allow tcp 80 0.0.0.0/0 any 0.0.0.0/0 in</span></span>
<span class="line"><span>user.rules:-A ufw-user-input -p tcp --dport 80 -j ACCEPT</span></span>
<span class="line"><span>You have new mail in /var/mail/root</span></span>
<span class="line"><span># grep 443 user*.rules</span></span>
<span class="line"><span>user6.rules:### tuple ### allow tcp 443 ::/0 any ::/0 in</span></span>
<span class="line"><span>user6.rules:-A ufw6-user-input -p tcp --dport 443 -j ACCEPT</span></span>
<span class="line"><span>user.rules:### tuple ### allow tcp 443 0.0.0.0/0 any 0.0.0.0/0 in</span></span>
<span class="line"><span>user.rules:-A ufw-user-input -p tcp --dport 443 -j ACCEPT</span></span></code></pre></div><p>使用 <code>ufw</code>，你還可以使用以下命令輕鬆地阻止來自一個 IP 地址的連接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw deny from 208.176.0.50</span></span>
<span class="line"><span>Rule added</span></span></code></pre></div><p><code>status</code> 命令將顯示更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ufw status verbose</span></span>
<span class="line"><span>Status: active</span></span>
<span class="line"><span>Logging: on (low)</span></span>
<span class="line"><span>Default: deny (incoming), allow (outgoing), disabled (routed)</span></span>
<span class="line"><span>New profiles: skip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>To                         Action      From</span></span>
<span class="line"><span>--                         ------      ----</span></span>
<span class="line"><span>22                         ALLOW IN    192.168.0.0/24</span></span>
<span class="line"><span>9090                       ALLOW IN    Anywhere</span></span>
<span class="line"><span>80/tcp                     ALLOW IN    Anywhere</span></span>
<span class="line"><span>443/tcp                    ALLOW IN    Anywhere</span></span>
<span class="line"><span>Anywhere                   DENY IN     208.176.0.50             &lt;== new</span></span>
<span class="line"><span>9090 (v6)                  ALLOW IN    Anywhere (v6)</span></span>
<span class="line"><span>80/tcp (v6)                ALLOW IN    Anywhere (v6)</span></span>
<span class="line"><span>443/tcp (v6)               ALLOW IN    Anywhere (v6)</span></span></code></pre></div><p>總而言之，<code>ufw</code> 不僅容易配置，而且且容易理解。</p><hr>`,31)),a("p",null,[s[9]||(s[9]=n("via: ",-1)),e(p,{href:"https://www.networkworld.com/article/3533551/linux-firewall-basics-with-ufw.html"},{default:l(()=>[...s[8]||(s[8]=[n("https://www.networkworld.com/article/3533551/linux-firewall-basics-with-ufw.html",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),e(p,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:l(()=>[...s[10]||(s[10]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[15]||(s[15]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[11]||(s[11]=[n("lujun9972",-1)])]),_:1}),s[16]||(s[16]=n(" 譯者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:l(()=>[...s[12]||(s[12]=[n("MjSeven",-1)])]),_:1}),s[17]||(s[17]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[19]||(s[19]=[n("Linux中國",-1)])]),_:1}),s[22]||(s[22]=n(" 榮譽推出",-1))])])}const v=i(d,[["render",c]]);export{L as __pageData,v as default};
