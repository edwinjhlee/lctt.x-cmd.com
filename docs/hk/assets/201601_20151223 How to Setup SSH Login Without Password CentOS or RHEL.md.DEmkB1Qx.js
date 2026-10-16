import{_ as r,a0 as i,w as h,s as d,ao as p,I as a,x as t,a1 as s,A as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"如何在 CentOS / RHEL 上設置 SSH 免密碼登錄 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS / RHEL 上設置 SSH 免密碼登錄 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS / RHEL 上設置 SSH 免密碼登錄 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS / RHEL 上設置 SSH 免密碼登錄 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151223 How to Setup SSH Login Without Password CentOS or RHEL","title":"如何在 CentOS / RHEL 上設置 SSH 免密碼登錄","tag":"201601","desc":""},"relativePath":"201601/20151223 How to Setup SSH Login Without Password CentOS or RHEL.md","filePath":"[post].md"}'),l={name:"201601/20151223 How to Setup SSH Login Without Password CentOS or RHEL.md"};function S(u,e,f,w,H,m){const o=i("Link");return h(),d("div",null,[e[13]||(e[13]=p(`<h1 id="如何在-centos-rhel-上設置-ssh-免密碼登錄" tabindex="-1">如何在 CentOS / RHEL 上設置 SSH 免密碼登錄 <a class="header-anchor" href="#如何在-centos-rhel-上設置-ssh-免密碼登錄" aria-label="Permalink to “如何在 CentOS / RHEL 上設置 SSH 免密碼登錄”">​</a></h1><p><img src="http://www.ehowstuff.com/wp-content/uploads/2015/12/notebook-1071774_1280.jpg" alt=""></p><p>作為系統管理員，你計劃在 Linux 上使用 OpenSSH，完成日常工作的自動化，比如文件傳輸、備份資料庫轉儲文件到另一台服務器等。為實現該目標，你需要從主機 A 能自動登錄到主機 B。自動登錄也就是説，要在 shell 腳本中使用ssh，而無需要輸入任何密碼。</p><p>本文會告訴你怎樣在 CentOS/RHEL 上設置 SSH 免密碼登錄。自動登錄配置好以後，你可以通過它使用 SSH （Secure Shell）和安全複製 （SCP）來移動文件。</p><p>SSH 是開源的，是用於遠程登錄的最為可靠的網絡協議。系統管理員用它來執行命令，以及通過 SCP 協議在網絡上向另一台電腦傳輸文件。</p><p>通過配置 SSH 免密碼登錄，你可以享受到如下的便利：</p><ul><li>用腳本實現日常工作的自動化。</li><li>增強 Linux 服務器的安全性。這是防範虛擬專用服務器（VPS）遭受暴力破解攻擊的一個推薦的方法，SSH 密鑰單憑暴力破解是幾乎不可攻破的。</li></ul><h3 id="什麼是-ssh-keygen" tabindex="-1">什麼是 ssh-keygen <a class="header-anchor" href="#什麼是-ssh-keygen" aria-label="Permalink to “什麼是 ssh-keygen”">​</a></h3><p>ssh-keygen 是一個用來生成、創建和管理 SSH 認證用的公私鑰的工具。通過 ssh-keygen 命令，用户可以創建支持SSH1 和 SSH2 兩個協議的密鑰。ssh-keygen 為 SSH1 協議創建 RSA 密鑰，SSH2 則可以是 RSA 或 DSA。</p><h3 id="什麼是-ssh-copy-id" tabindex="-1">什麼是 ssh-copy-id <a class="header-anchor" href="#什麼是-ssh-copy-id" aria-label="Permalink to “什麼是 ssh-copy-id”">​</a></h3><p>ssh-copy-id 是用來將本地公鑰拷貝到遠程的 authorized_keys 文件的腳本命令，它還會將身份標識文件追加到遠程機器的 ~/.ssh/authorized_keys 文件中，並給遠程主機的用户主目錄適當的的權限。</p><h3 id="ssh-密鑰" tabindex="-1">SSH 密鑰 <a class="header-anchor" href="#ssh-密鑰" aria-label="Permalink to “SSH 密鑰”">​</a></h3><p>SSH 密鑰為登錄 Linux 服務器提供了更好且安全的機制。運行 ssh-keygen 後，將會生成公私密鑰對。你可以將公鑰放置到任意服務器，從持有私鑰的客户端連接到服務器的時，會用它來解鎖。兩者匹配時，系統無需密碼就能解除鎖定。</p><h3 id="在-centos-和-rhel-上設置免密碼登錄-ssh" tabindex="-1">在 CentOS 和 RHEL 上設置免密碼登錄 SSH <a class="header-anchor" href="#在-centos-和-rhel-上設置免密碼登錄-ssh" aria-label="Permalink to “在 CentOS 和 RHEL 上設置免密碼登錄 SSH”">​</a></h3><p>以下步驟在 CentOS 5/6/7、RHEL 5/6/7 和 Oracle Linux 6/7 上測試通過。</p><p>節點1 : 192.168.0.9 節點2 : 192.168.l.10</p><h4 id="步驟1" tabindex="-1">步驟1 : <a class="header-anchor" href="#步驟1" aria-label="Permalink to “步驟1 :”">​</a></h4><p>測試節點1到節點2的連接和訪問：</p><pre><code>[root@node1 ~]# ssh root@192.168.0.10
The authenticity of host &#39;192.168.0.10 (192.168.0.10)&#39; can&#39;t be established.
RSA key fingerprint is 6d:8f:63:9b:3b:63:e1:72:b3:06:a4:e4:f4:37:21:42.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added &#39;192.168.0.10&#39; (RSA) to the list of known hosts.
root@192.168.0.10&#39;s password:
Last login: Thu Dec 10 22:04:55 2015 from 192.168.0.1
[root@node2 ~]#
</code></pre><h4 id="步驟二" tabindex="-1">步驟二： <a class="header-anchor" href="#步驟二" aria-label="Permalink to “步驟二：”">​</a></h4><p>使用 ssh-key-gen 命令生成公鑰和私鑰，這裏要注意的是可以對私鑰進行加密保護以增強安全性。</p><pre><code>[root@node1 ~]# ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
b4:51:7e:1e:52:61:cd:fb:b2:98:4b:ad:a1:8b:31:6d root@node1.ehowstuff.local
The key&#39;s randomart image is:
+--[ RSA 2048]----+
|          . ++   |
|         o o  o  |
|        o o o  . |
|       . o + ..  |
|        S   .  . |
|         .   .. .|
|        o E oo.o |
|         = ooo.  |
|        . o.o.   |
+-----------------+
</code></pre><h4 id="步驟三" tabindex="-1">步驟三： <a class="header-anchor" href="#步驟三" aria-label="Permalink to “步驟三：”">​</a></h4><p>用 ssh-copy-id 命令將公鑰複製或上傳到遠程主機，並將身份標識文件追加到節點2的 ~/.ssh/authorized_keys 中：</p><pre><code>[root@node1 ~]# ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.0.10
root@192.168.0.10&#39;s password:
Now try logging into the machine, with &quot;ssh &#39;192.168.0.10&#39;&quot;, and check in:

.ssh/authorized_keys

to make sure we haven&#39;t added extra keys that you weren&#39;t expecting.
</code></pre><h4 id="步驟四" tabindex="-1">步驟四： <a class="header-anchor" href="#步驟四" aria-label="Permalink to “步驟四：”">​</a></h4><p>驗證免密碼 SSH 登錄節點2：</p><pre><code>[root@node1 ~]# ssh root@192.168.0.10
Last login: Sun Dec 13 14:03:20 2015 from www.ehowstuff.local
</code></pre><p>我希望這篇文章能幫助到你，為你提供 SSH 免密碼登錄 CentOS / RHEL 的基本認知和快速指南。</p><hr>`,30)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),s(o,{href:"http://www.ehowstuff.com/ssh-login-without-password-centos/"},{default:n(()=>[...e[0]||(e[0]=[t("http://www.ehowstuff.com/ssh-login-without-password-centos/",-1)])]),_:1})]),a("p",null,[e[5]||(e[5]=t("作者：",-1)),s(o,{href:"http://www.ehowstuff.com/author/skytech/"},{default:n(()=>[...e[2]||(e[2]=[t("skytech",-1)])]),_:1}),e[6]||(e[6]=t(" 譯者：",-1)),s(o,{href:"https://github.com/fw8899"},{default:n(()=>[...e[3]||(e[3]=[t("fw8899",-1)])]),_:1}),e[7]||(e[7]=t(" 校對：",-1)),s(o,{href:"https://github.com/wxy"},{default:n(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=t("本文由 ",-1)),s(o,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原創編譯，",-1)),s(o,{href:"https://linux.cn/"},{default:n(()=>[...e[9]||(e[9]=[t("Linux中國",-1)])]),_:1}),e[12]||(e[12]=t(" 榮譽推出",-1))])])}const g=r(l,[["render",S]]);export{k as __pageData,g as default};
