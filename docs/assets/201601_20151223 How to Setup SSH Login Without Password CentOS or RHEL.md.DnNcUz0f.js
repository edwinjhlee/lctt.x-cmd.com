import{_ as r,a0 as i,w as h,s as d,ao as p,I as a,x as t,a1 as s,A as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"如何在 CentOS / RHEL 上设置 SSH 免密码登录 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS / RHEL 上设置 SSH 免密码登录 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS / RHEL 上设置 SSH 免密码登录 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS / RHEL 上设置 SSH 免密码登录 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151223 How to Setup SSH Login Without Password CentOS or RHEL","title":"如何在 CentOS / RHEL 上设置 SSH 免密码登录","tag":"201601","desc":""},"relativePath":"201601/20151223 How to Setup SSH Login Without Password CentOS or RHEL.md","filePath":"[post].md"}'),l={name:"201601/20151223 How to Setup SSH Login Without Password CentOS or RHEL.md"};function S(u,e,f,w,H,m){const o=i("Link");return h(),d("div",null,[e[13]||(e[13]=p(`<h1 id="如何在-centos-rhel-上设置-ssh-免密码登录" tabindex="-1">如何在 CentOS / RHEL 上设置 SSH 免密码登录 <a class="header-anchor" href="#如何在-centos-rhel-上设置-ssh-免密码登录" aria-label="Permalink to “如何在 CentOS / RHEL 上设置 SSH 免密码登录”">​</a></h1><p><img src="http://www.ehowstuff.com/wp-content/uploads/2015/12/notebook-1071774_1280.jpg" alt=""></p><p>作为系统管理员，你计划在 Linux 上使用 OpenSSH，完成日常工作的自动化，比如文件传输、备份数据库转储文件到另一台服务器等。为实现该目标，你需要从主机 A 能自动登录到主机 B。自动登录也就是说，要在 shell 脚本中使用ssh，而无需要输入任何密码。</p><p>本文会告诉你怎样在 CentOS/RHEL 上设置 SSH 免密码登录。自动登录配置好以后，你可以通过它使用 SSH （Secure Shell）和安全复制 （SCP）来移动文件。</p><p>SSH 是开源的，是用于远程登录的最为可靠的网络协议。系统管理员用它来执行命令，以及通过 SCP 协议在网络上向另一台电脑传输文件。</p><p>通过配置 SSH 免密码登录，你可以享受到如下的便利：</p><ul><li>用脚本实现日常工作的自动化。</li><li>增强 Linux 服务器的安全性。这是防范虚拟专用服务器（VPS）遭受暴力破解攻击的一个推荐的方法，SSH 密钥单凭暴力破解是几乎不可攻破的。</li></ul><h3 id="什么是-ssh-keygen" tabindex="-1">什么是 ssh-keygen <a class="header-anchor" href="#什么是-ssh-keygen" aria-label="Permalink to “什么是 ssh-keygen”">​</a></h3><p>ssh-keygen 是一个用来生成、创建和管理 SSH 认证用的公私钥的工具。通过 ssh-keygen 命令，用户可以创建支持SSH1 和 SSH2 两个协议的密钥。ssh-keygen 为 SSH1 协议创建 RSA 密钥，SSH2 则可以是 RSA 或 DSA。</p><h3 id="什么是-ssh-copy-id" tabindex="-1">什么是 ssh-copy-id <a class="header-anchor" href="#什么是-ssh-copy-id" aria-label="Permalink to “什么是 ssh-copy-id”">​</a></h3><p>ssh-copy-id 是用来将本地公钥拷贝到远程的 authorized_keys 文件的脚本命令，它还会将身份标识文件追加到远程机器的 ~/.ssh/authorized_keys 文件中，并给远程主机的用户主目录适当的的权限。</p><h3 id="ssh-密钥" tabindex="-1">SSH 密钥 <a class="header-anchor" href="#ssh-密钥" aria-label="Permalink to “SSH 密钥”">​</a></h3><p>SSH 密钥为登录 Linux 服务器提供了更好且安全的机制。运行 ssh-keygen 后，将会生成公私密钥对。你可以将公钥放置到任意服务器，从持有私钥的客户端连接到服务器的时，会用它来解锁。两者匹配时，系统无需密码就能解除锁定。</p><h3 id="在-centos-和-rhel-上设置免密码登录-ssh" tabindex="-1">在 CentOS 和 RHEL 上设置免密码登录 SSH <a class="header-anchor" href="#在-centos-和-rhel-上设置免密码登录-ssh" aria-label="Permalink to “在 CentOS 和 RHEL 上设置免密码登录 SSH”">​</a></h3><p>以下步骤在 CentOS 5/6/7、RHEL 5/6/7 和 Oracle Linux 6/7 上测试通过。</p><p>节点1 : 192.168.0.9 节点2 : 192.168.l.10</p><h4 id="步骤1" tabindex="-1">步骤1 : <a class="header-anchor" href="#步骤1" aria-label="Permalink to “步骤1 :”">​</a></h4><p>测试节点1到节点2的连接和访问：</p><pre><code>[root@node1 ~]# ssh root@192.168.0.10
The authenticity of host &#39;192.168.0.10 (192.168.0.10)&#39; can&#39;t be established.
RSA key fingerprint is 6d:8f:63:9b:3b:63:e1:72:b3:06:a4:e4:f4:37:21:42.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added &#39;192.168.0.10&#39; (RSA) to the list of known hosts.
root@192.168.0.10&#39;s password:
Last login: Thu Dec 10 22:04:55 2015 from 192.168.0.1
[root@node2 ~]#
</code></pre><h4 id="步骤二" tabindex="-1">步骤二： <a class="header-anchor" href="#步骤二" aria-label="Permalink to “步骤二：”">​</a></h4><p>使用 ssh-key-gen 命令生成公钥和私钥，这里要注意的是可以对私钥进行加密保护以增强安全性。</p><pre><code>[root@node1 ~]# ssh-keygen
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
</code></pre><h4 id="步骤三" tabindex="-1">步骤三： <a class="header-anchor" href="#步骤三" aria-label="Permalink to “步骤三：”">​</a></h4><p>用 ssh-copy-id 命令将公钥复制或上传到远程主机，并将身份标识文件追加到节点2的 ~/.ssh/authorized_keys 中：</p><pre><code>[root@node1 ~]# ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.0.10
root@192.168.0.10&#39;s password:
Now try logging into the machine, with &quot;ssh &#39;192.168.0.10&#39;&quot;, and check in:

.ssh/authorized_keys

to make sure we haven&#39;t added extra keys that you weren&#39;t expecting.
</code></pre><h4 id="步骤四" tabindex="-1">步骤四： <a class="header-anchor" href="#步骤四" aria-label="Permalink to “步骤四：”">​</a></h4><p>验证免密码 SSH 登录节点2：</p><pre><code>[root@node1 ~]# ssh root@192.168.0.10
Last login: Sun Dec 13 14:03:20 2015 from www.ehowstuff.local
</code></pre><p>我希望这篇文章能帮助到你，为你提供 SSH 免密码登录 CentOS / RHEL 的基本认知和快速指南。</p><hr>`,30)),a("p",null,[e[1]||(e[1]=t("via: ",-1)),s(o,{href:"http://www.ehowstuff.com/ssh-login-without-password-centos/"},{default:n(()=>[...e[0]||(e[0]=[t("http://www.ehowstuff.com/ssh-login-without-password-centos/",-1)])]),_:1})]),a("p",null,[e[5]||(e[5]=t("作者：",-1)),s(o,{href:"http://www.ehowstuff.com/author/skytech/"},{default:n(()=>[...e[2]||(e[2]=[t("skytech",-1)])]),_:1}),e[6]||(e[6]=t(" 译者：",-1)),s(o,{href:"https://github.com/fw8899"},{default:n(()=>[...e[3]||(e[3]=[t("fw8899",-1)])]),_:1}),e[7]||(e[7]=t(" 校对：",-1)),s(o,{href:"https://github.com/wxy"},{default:n(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=t("本文由 ",-1)),s(o,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原创编译，",-1)),s(o,{href:"https://linux.cn/"},{default:n(()=>[...e[9]||(e[9]=[t("Linux中国",-1)])]),_:1}),e[12]||(e[12]=t(" 荣誉推出",-1))])])}const g=r(l,[["render",S]]);export{k as __pageData,g as default};
