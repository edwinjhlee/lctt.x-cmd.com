import{_ as i,a0 as t,w as o,s as r,I as s,x as n,a1 as l,A as e,ao as b}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"如何使用 fail2ban 防禦 SSH 服務器的暴力破解攻擊 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 fail2ban 防禦 SSH 服務器的暴力破解攻擊 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 fail2ban 防禦 SSH 服務器的暴力破解攻擊 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 fail2ban 防禦 SSH 服務器的暴力破解攻擊 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20130315 How to protect SSH server from brute force attacks using fail2ban","title":"如何使用 fail2ban 防禦 SSH 服務器的暴力破解攻擊","tag":"201503","desc":""},"relativePath":"201503/20130315 How to protect SSH server from brute force attacks using fail2ban.md","filePath":"[post].md"}'),f={name:"201503/20130315 How to protect SSH server from brute force attacks using fail2ban.md"};function d(u,a,c,m,S,h){const p=t("Link");return o(),r("div",null,[a[23]||(a[23]=s("h1",{id:"如何使用-fail2ban-防禦-ssh-服務器的暴力破解攻擊",tabindex:"-1"},[n("如何使用 fail2ban 防禦 SSH 服務器的暴力破解攻擊 "),s("a",{class:"header-anchor",href:"#如何使用-fail2ban-防禦-ssh-服務器的暴力破解攻擊","aria-label":"Permalink to “如何使用 fail2ban 防禦 SSH 服務器的暴力破解攻擊”"},"​")],-1)),s("p",null,[a[2]||(a[2]=n("對於SSH服務的常見的攻擊就是暴力破解攻擊——遠程攻擊者通過不同的密碼來無限次地進行登錄嘗試。當然SSH可以設置使用非密碼驗證驗證方式來對抗這種攻擊，例如",-1)),l(p,{href:"http://xmodulo.com/how-to-force-ssh-login-via-public-key-authentication.html"},{default:e(()=>[...a[0]||(a[0]=[n("公鑰驗證",-1)])]),_:1}),a[3]||(a[3]=n("或者",-1)),l(p,{href:"http://xmodulo.com/two-factor-authentication-ssh-login-linux.html"},{default:e(()=>[...a[1]||(a[1]=[n("雙重驗證",-1)])]),_:1}),a[4]||(a[4]=n("。將不同的驗證方法的優劣處先放在一邊，如果我們必須使用密碼驗證方式怎麼辦？你是如何保護你的 SSH 服務器免遭暴力破解攻擊的呢？",-1))]),s("p",null,[l(p,{href:"http://www.fail2ban.org/"},{default:e(()=>[...a[5]||(a[5]=[n("fail2ban",-1)])]),_:1}),a[6]||(a[6]=n(" 是 Linux 上的一個著名的入侵保護的開源框架，它會監控多個系統的日誌文件（例如：/var/log/auth.log 或者 /var/log/secure）並根據檢測到的任何可疑的行為自動觸發不同的防禦動作。事實上，fail2ban 在防禦對SSH服務器的暴力密碼破解上非常有用。",-1))]),a[24]||(a[24]=s("p",null,[n("在這篇指導教程中，我會演示"),s("strong",null,"如何安裝並配置 fail2ban 來保護 SSH 服務器以避免來自遠程IP地址的暴力攻擊"),n("。")],-1)),a[25]||(a[25]=s("p",null,"###在linux上安裝Fail2ban",-1)),s("p",null,[a[8]||(a[8]=n("為了在CentOS 或 RHEL上安裝fail2ban,首先",-1)),l(p,{href:"http://linux.cn/article-2324-1.html"},{default:e(()=>[...a[7]||(a[7]=[n("設置EPEL倉庫",-1)])]),_:1}),a[9]||(a[9]=n("，然後運行以下命令。",-1))]),a[26]||(a[26]=b(`<pre><code>$ sudo yum install fail2ban
</code></pre><p>在Fedora上安裝fail2ban，簡單地運行以下命令：</p><pre><code>$ sudo yum install fail2ban
</code></pre><p>在ubuntu，Debian 或 Linux Mint上安裝fail2ban：</p><pre><code>$ sudo apt-get install fail2ban
</code></pre><h3 id="為ssh服務器配置fail2ban" tabindex="-1">為SSH服務器配置Fail2ban <a class="header-anchor" href="#為ssh服務器配置fail2ban" aria-label="Permalink to “為SSH服務器配置Fail2ban”">​</a></h3><p>現在你已經準備好了通過配置 fail2ban 來加強你的SSH服務器。你需要編輯其配置文件 /etc/fail2ban/jail.conf。 在配置文件的“[DEFAULT]”區，你可以在此定義所有受監控的服務的默認參數，另外在特定服務的配置部分，你可以為每個服務（例如SSH，Apache等）設置特定的配置來覆蓋默認的參數配置。</p><p>在針對服務的監獄區（在[DEFAULT]區後面的地方），你需要定義一個[ssh-iptables]區，這裏用來定義SSH相關的監獄配置。真正的禁止IP地址的操作是通過iptables完成的。</p><p>下面是一個包含“ssh-iptables”監獄配置的/etc/fail2ban/jail.conf的文件樣例。當然根據你的需要，你也可以指定其他的應用監獄。</p><pre><code>$ sudo vi /etc/fail2ban/jail.local
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[DEFAULT]</span></span>
<span class="line"><span># 以空格分隔的列表，可以是 IP 地址、CIDR 前綴或者 DNS 主機名</span></span>
<span class="line"><span># 用於指定哪些地址可以忽略 fail2ban 防禦</span></span>
<span class="line"><span>ignoreip = 127.0.0.1 172.31.0.0/24 10.10.0.0/24 192.168.0.0/24</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 客户端主機被禁止的時長（秒）</span></span>
<span class="line"><span>bantime = 86400</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 客户端主機被禁止前允許失敗的次數 </span></span>
<span class="line"><span>maxretry = 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查找失敗次數的時長（秒）</span></span>
<span class="line"><span>findtime = 600</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mta = sendmail</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ssh-iptables]</span></span>
<span class="line"><span>enabled = true</span></span>
<span class="line"><span>filter = sshd</span></span>
<span class="line"><span>action = iptables[name=SSH, port=ssh, protocol=tcp]</span></span>
<span class="line"><span>sendmail-whois[name=SSH, dest=your@email.com, sender=fail2ban@email.com]</span></span>
<span class="line"><span># Debian 系的發行版 </span></span>
<span class="line"><span>logpath = /var/log/auth.log</span></span>
<span class="line"><span># Red Hat 系的發行版</span></span>
<span class="line"><span>logpath = /var/log/secure</span></span>
<span class="line"><span># ssh 服務的最大嘗試次數 </span></span>
<span class="line"><span>maxretry = 3</span></span></code></pre></div><p>根據上述配置，fail2ban會自動禁止在最近10分鐘內有超過3次訪問嘗試失敗的任意IP地址。一旦被禁，這個IP地址將會在24小時內一直被禁止訪問 SSH 服務。這個事件也會通過sendemail發送郵件通知。</p><p>一旦配置文件準備就緒，按照以下方式重啓fail2ban服務。</p><p>在 Debian, Ubuntu 或 CentOS/RHEL 6:</p><pre><code>$ sudo service fail2ban restart
</code></pre><p>在 Fedora 或 CentOS/RHEL 7:</p><pre><code>$ sudo systemctl restart fail2ban
</code></pre><p>為了驗證fail2ban成功運行，使用參數&#39;ping&#39;來運行fail2ban-client 命令。 如果fail2ban服務正常運行，你可以看到“pong（嘭）”作為響應。</p><pre><code>$ sudo fail2ban-client ping
Server replied: pong
</code></pre><h3 id="測試-fail2ban-保護ssh免遭暴力破解攻擊" tabindex="-1">測試 fail2ban 保護SSH免遭暴力破解攻擊 <a class="header-anchor" href="#測試-fail2ban-保護ssh免遭暴力破解攻擊" aria-label="Permalink to “測試 fail2ban 保護SSH免遭暴力破解攻擊”">​</a></h3><p>為了測試fail2ban是否能正常工作，嘗試通過使用錯誤的密碼來用SSH連接到服務器模擬一個暴力破解攻擊。與此同時，監控 /var/log/fail2ban.log，該文件記錄在fail2ban中發生的任何敏感事件。</p><pre><code>$ sudo tail -f /var/log/fail2ban.log
</code></pre><p><img src="https://farm8.staticflickr.com/7550/15882084127_fccf9ca7b7_c.jpg" alt=""></p><p>根據上述的日誌文件，Fail2ban通過檢測IP地址的多次失敗登錄嘗試，禁止了一個IP地址192.168.1.8。</p><p>###檢查fail2ban狀態並解禁被鎖住的IP地址</p><p>由於fail2ban的“ssh-iptables”監獄使用iptables來阻塞問題IP地址，你可以通過以下方式來檢測當前iptables來驗證禁止規則。</p><pre><code>$ sudo iptables --list -n
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Chain INPUT (policy ACCEPT)</span></span>
<span class="line"><span>target     prot opt source               destination</span></span>
<span class="line"><span>fail2ban-SSH  tcp  --  0.0.0.0/0            0.0.0.0/0           tcp dpt:22</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Chain FORWARD (policy ACCEPT)</span></span>
<span class="line"><span>target     prot opt source               destination</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Chain OUTPUT (policy ACCEPT)</span></span>
<span class="line"><span>target     prot opt source               destination</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Chain fail2ban-SSH (1 references)</span></span>
<span class="line"><span>target     prot opt source               destination</span></span>
<span class="line"><span>DROP       all  --  192.168.1.8          0.0.0.0/0</span></span>
<span class="line"><span>RETURN     all  --  0.0.0.0/0            0.0.0.0/0</span></span></code></pre></div><p>如果你想要從fail2ban中解鎖某個IP地址，你可以使用iptables命令：</p><pre><code>$ sudo iptables -D fail2ban-SSH -s 192.168.1.8 -j DROP
</code></pre><p>當然你可以使用上述的iptables命令手動地檢驗和管理fail2ban的IP阻塞列表，但實際上有一個適當的方法就是使用fail2ban-client命令列工具。這個命令不僅允許你對&quot;ssh-iptables&quot;監獄進行管理，同時也是一個標準的命令列接口，可以管理其他類型的fail2ban監獄。</p><p>為了檢驗fail2ban狀態（會顯示出當前活動的監獄列表）：</p><pre><code>$ sudo fail2ban-client status
</code></pre><p>為了檢驗一個特定監獄的狀態（例如ssh-iptables):</p><pre><code>$ sudo fail2ban-client status ssh-iptables
</code></pre><p>上面的命令會顯示出被禁止IP地址列表。</p><p><img src="https://farm8.staticflickr.com/7497/16067847655_021d23e320_b.jpg" alt=""></p><p>為了解鎖特定的IP地址：</p><pre><code>$ sudo fail2ban-client set ssh-iptables unbanip 192.168.1.8
</code></pre><p><img src="https://farm8.staticflickr.com/7465/16065915571_b215a8b344_b.jpg" alt=""></p><p>注意，如果你停止了Fail2ban 服務，那麼所有的IP地址都會被解鎖。當你重啓 Fail2ban，它會從/etc/log/secure(或 /var/log/auth.log)中找到異常的IP地址列表，如果這些異常地址的發生時間仍然在禁止時間內，那麼Fail2ban會重新將這些IP地址禁止。</p><h3 id="設置-fail2ban-自動啓動" tabindex="-1">設置 Fail2ban 自動啓動 <a class="header-anchor" href="#設置-fail2ban-自動啓動" aria-label="Permalink to “設置 Fail2ban 自動啓動”">​</a></h3><p>一旦你成功地測試了fail2ban之後，最後一個步驟就是在你的服務器上讓其在開機時自動啓動。在基於Debian的發行版中，fail2ban已經默認讓自動啓動生效。在基於Red-Hat的發行版中，按照下面的方式讓自動啓動生效。</p><p>在 CentOS/RHEL 6中:</p><pre><code>$ sudo chkconfig fail2ban on
</code></pre><p>在 Fedora 或 CentOS/RHEL 7:</p><pre><code>$ sudo systemctl enable fail2ban
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>在該教程中，我演示瞭如何安裝並配置fail2ban來保護一個SSH服務器。當然fail2ban可以緩解暴力密碼攻擊，但是請注意，這並不能保護SSH服務器避免來自複雜的分佈式暴力破解組織，這些攻擊者通過使用成千上萬個機器控制的IP地址來繞過fail2ban的防禦機制。</p><hr>`,50)),s("p",null,[a[11]||(a[11]=n("via: ",-1)),l(p,{href:"http://xmodulo.com/how-to-protect-ssh-server-from-brute-force-attacks-using-fail2ban.html"},{default:e(()=>[...a[10]||(a[10]=[n("http://xmodulo.com/how-to-protect-ssh-server-from-brute-force-attacks-using-fail2ban.html",-1)])]),_:1})]),s("p",null,[a[15]||(a[15]=n("作者：",-1)),l(p,{href:"http://xmodulo.com/author/nanni"},{default:e(()=>[...a[12]||(a[12]=[n("Dan Nanni",-1)])]),_:1}),a[16]||(a[16]=n(" 譯者：",-1)),l(p,{href:"https://github.com/theo-l"},{default:e(()=>[...a[13]||(a[13]=[n("theo-l",-1)])]),_:1}),a[17]||(a[17]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...a[14]||(a[14]=[n("wxy",-1)])]),_:1})]),s("p",null,[a[20]||(a[20]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...a[18]||(a[18]=[n("LCTT",-1)])]),_:1}),a[21]||(a[21]=n(" 原創翻譯，",-1)),l(p,{href:"http://linux.cn/"},{default:e(()=>[...a[19]||(a[19]=[n("Linux中國",-1)])]),_:1}),a[22]||(a[22]=n(" 榮譽推出",-1))])])}const C=i(f,[["render",d]]);export{k as __pageData,C as default};
