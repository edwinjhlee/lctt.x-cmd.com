import{_ as r,a0 as i,w as d,s as l,ao as p,I as t,x as s,a1 as e,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"10 个 Linux 中的 passwd 命令示例 | LCTT x X-CMD","titleTemplate":false,"description":"10 个 Linux 中的 passwd 命令示例 | LCTT (201510) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"10 个 Linux 中的 passwd 命令示例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"10 个 Linux 中的 passwd 命令示例 | LCTT (201510) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201510/20151019 10 passwd command examples in Linux","title":"10 个 Linux 中的 passwd 命令示例","tag":"201510","desc":""},"relativePath":"201510/20151019 10 passwd command examples in Linux.md","filePath":"[post].md"}'),u={name:"201510/20151019 10 passwd command examples in Linux.md"};function w(x,n,c,h,m,g){const a=i("Link");return d(),l("div",null,[n[13]||(n[13]=p(`<h1 id="_10-个-linux-中的-passwd-命令示例" tabindex="-1">10 个 Linux 中的 passwd 命令示例 <a class="header-anchor" href="#_10-个-linux-中的-passwd-命令示例" aria-label="Permalink to “10 个 Linux 中的 passwd 命令示例”">​</a></h1><p>正如 <strong>passwd</strong> 命令的名称所示，其用于改变系统用户的密码。如果 passwd 命令由非 root 用户执行，那么它会询问当前用户的密码，然后设置调用该命令的用户的新密码。当此命令由超级用户 root 执行的话，就可以重新设置任何用户的密码，包括不知道当前密码的用户。</p><p>在这篇文章中，我们将用实例来介绍 passwd 命令。</p><h4 id="语法" tabindex="-1">语法 : <a class="header-anchor" href="#语法" aria-label="Permalink to “语法 :”">​</a></h4><pre><code># passwd {options} {user_name}
</code></pre><p>可以在 passwd 命令使用不同的选项，列表如下：</p><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/09/passwd-command-options.jpg" alt=""></p><h3 id="例1-更改系统用户的密码" tabindex="-1">例1：更改系统用户的密码 <a class="header-anchor" href="#例1-更改系统用户的密码" aria-label="Permalink to “例1：更改系统用户的密码”">​</a></h3><p>当你使用非 root 用户登录时，比如我使用 ‘linuxtechi’ 登录的情况下，运行 passwd 命令它会重置当前登录用户的密码。</p><pre><code>[linuxtechi@linuxworld ~]$ passwd
Changing password for user linuxtechi.
Changing password for linuxtechi.
(current) UNIX password:
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
[linuxtechi@linuxworld ~]$
</code></pre><p>当你作为 root 用户登录后并运行 <strong>passwd</strong> 命令时，它默认情况下会重新设置 root 的密码，如果你在 passwd 命令后指定了用户名，它会重置该用户的密码。</p><pre><code>[root@linuxworld ~]# passwd
[root@linuxworld ~]# passwd linuxtechi
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/09/passwd-command.jpg" alt=""></p><p><strong>注意</strong> : 系统用户的密码以加密的形式保存在 /etc/shadow 文件中。</p><h3 id="例2-显示密码状态信息" tabindex="-1">例2：显示密码状态信息 <a class="header-anchor" href="#例2-显示密码状态信息" aria-label="Permalink to “例2：显示密码状态信息”">​</a></h3><p>要显示用户密码的状态信息，请在 passwd 命令后使用 <strong>-S</strong> 选项。</p><pre><code>[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi PS 2015-09-20 0 99999 7 -1 (Password set, SHA512 crypt.)
[root@linuxworld ~]#
</code></pre><p>在上面的输出中，第一个字段显示的用户名，第二个字段显示密码状态（<strong>PS = 密码设置，LK = 密码锁定，NP = 无密码</strong>），第三个字段显示了上次修改密码的时间，后面四个字段分别显示了密码能更改的最小期限和最大期限，警告期限和没有使用该口令的时长。</p><h3 id="例3-显示所有账号的密码状态信息" tabindex="-1">例3：显示所有账号的密码状态信息 <a class="header-anchor" href="#例3-显示所有账号的密码状态信息" aria-label="Permalink to “例3：显示所有账号的密码状态信息”">​</a></h3><p>为了显示所有用户密码的状态信息需要使用 “<strong>-aS</strong>”选项在passwd 命令中，示例如下所示：</p><pre><code>root@localhost:~# passwd -Sa
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/09/passwd-sa.jpg" alt=""></p><p>（LCTT译注：不同发行版/passwd 的行为不同。CentOS6.6 没有测试成功，但 Ubuntu 可以。）</p><h3 id="例4-使用-d-选项删除用户的密码" tabindex="-1">例4：使用 -d 选项删除用户的密码 <a class="header-anchor" href="#例4-使用-d-选项删除用户的密码" aria-label="Permalink to “例4：使用 -d 选项删除用户的密码”">​</a></h3><p>用我做例子，删除 ‘<strong>linuxtechi</strong>‘ 用户的密码。</p><pre><code>[root@linuxworld ~]# passwd -d linuxtechi
Removing password for user linuxtechi.
passwd: Success
[root@linuxworld ~]#
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi NP 2015-09-20 0 99999 7 -1 (Empty password.)
[root@linuxworld ~]#
</code></pre><p>“<strong>-d</strong>” 选项将清空用户密码，并禁用用户登录。</p><h3 id="例5-设置密码立即过期" tabindex="-1">例5：设置密码立即过期 <a class="header-anchor" href="#例5-设置密码立即过期" aria-label="Permalink to “例5：设置密码立即过期”">​</a></h3><p>在 passwd 命令中使用 &#39;-e&#39; 选项会立即使用户的密码过期，这将强制用户在下次登录时更改密码。</p><pre><code>[root@linuxworld ~]# passwd -e linuxtechi
Expiring password for user linuxtechi.
passwd: Success
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi PS 1970-01-01 0 99999 7 -1 (Password set, SHA512 crypt.)
[root@linuxworld ~]#
</code></pre><p>现在尝试用 linuxtechi 用户 SSH 连接到主机。</p><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/09/passwd-expiry.jpg" alt=""></p><h3 id="例6-锁定系统用户的密码" tabindex="-1">例6：锁定系统用户的密码 <a class="header-anchor" href="#例6-锁定系统用户的密码" aria-label="Permalink to “例6：锁定系统用户的密码”">​</a></h3><p>在 passwd 命令中使用 ‘<strong>-l</strong>‘ 选项能锁定用户的密码，它会在密码的起始位置加上“！”。当他/她的密码被锁定时，用户将不能更改它的密码。</p><pre><code>[root@linuxworld ~]# passwd -l linuxtechi
Locking password for user linuxtechi.
passwd: Success
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi LK 2015-09-20 0 99999 7 -1 (Password locked.)
[root@linuxworld ~]#
</code></pre><h3 id="例7-使用-u-选项解锁用户密码" tabindex="-1">例7：使用 -u 选项解锁用户密码 <a class="header-anchor" href="#例7-使用-u-选项解锁用户密码" aria-label="Permalink to “例7：使用 -u 选项解锁用户密码”">​</a></h3><pre><code>[root@linuxworld ~]# passwd -u linuxtechi
Unlocking password for user linuxtechi.
passwd: Success
[root@linuxworld ~]#
</code></pre><h3 id="例8-使用-i-选项设置非活动时间" tabindex="-1">例8：使用 -i 选项设置非活动时间 <a class="header-anchor" href="#例8-使用-i-选项设置非活动时间" aria-label="Permalink to “例8：使用 -i 选项设置非活动时间”">​</a></h3><p>在 passwd 命令中使用 -i 选项用于设系统用户的非活动时间。当用户（我使用的是linuxtechi用户）密码过期后，用户再经过 ‘<strong>n</strong>‘ 天后（在我的情况下是10天）没有更改其密码，用户将不能登录。</p><pre><code>[root@linuxworld ~]# passwd -i 10 linuxtechi
Adjusting aging data for user linuxtechi.
passwd: Success
[root@linuxworld ~]#
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi PS 2015-09-20 0 99999 7 10 (Password set, SHA512 crypt.)
[root@linuxworld ~]#
</code></pre><h3 id="例9-使用-n-选项设置密码更改的最短时间" tabindex="-1">例9：使用 -n 选项设置密码更改的最短时间 <a class="header-anchor" href="#例9-使用-n-选项设置密码更改的最短时间" aria-label="Permalink to “例9：使用 -n 选项设置密码更改的最短时间”">​</a></h3><p>在下面的例子中，linuxtechi用户必须在90天内更改密码。0表示用户可以在任何时候更改它的密码。</p><pre><code>[root@linuxworld ~]# passwd -n 90 linuxtechi
Adjusting aging data for user linuxtechi.
passwd: Success
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi PS 2015-09-20 90 99999 7 10 (Password set, SHA512 crypt.)
[root@linuxworld ~]#
</code></pre><h3 id="例10-使用-w-选项设置密码过期前的警告期限" tabindex="-1">例10：使用 -w 选项设置密码过期前的警告期限 <a class="header-anchor" href="#例10-使用-w-选项设置密码过期前的警告期限" aria-label="Permalink to “例10：使用 -w 选项设置密码过期前的警告期限”">​</a></h3><p>‘<strong>-w</strong>’ 选项在 passwd 命令中用于设置用户的警告期限。这意味着，n天之后，他/她的密码将过期。</p><pre><code>[root@linuxworld ~]# passwd -w 12 linuxtechi
Adjusting aging data for user linuxtechi.
passwd: Success
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi PS 2015-09-20 90 99999 12 10 (Password set, SHA512 crypt.)
[root@linuxworld ~]#
</code></pre><hr>`,47)),t("p",null,[n[1]||(n[1]=s("via: ",-1)),e(a,{href:"http://www.linuxtechi.com/10-passwd-command-examples-in-linux/"},{default:o(()=>[...n[0]||(n[0]=[s("http://www.linuxtechi.com/10-passwd-command-examples-in-linux/",-1)])]),_:1})]),t("p",null,[n[5]||(n[5]=s("作者：",-1)),e(a,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:o(()=>[...n[2]||(n[2]=[s("Pradeep Kumar",-1)])]),_:1}),n[6]||(n[6]=s(" 译者：",-1)),e(a,{href:"https://github.com/strugglingyouth"},{default:o(()=>[...n[3]||(n[3]=[s("strugglingyouth",-1)])]),_:1}),n[7]||(n[7]=s(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:o(()=>[...n[4]||(n[4]=[s("wxy",-1)])]),_:1})]),t("p",null,[n[10]||(n[10]=s("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...n[8]||(n[8]=[s("LCTT",-1)])]),_:1}),n[11]||(n[11]=s(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:o(()=>[...n[9]||(n[9]=[s("Linux中国",-1)])]),_:1}),n[12]||(n[12]=s(" 荣誉推出",-1))])])}const b=r(u,[["render",w]]);export{P as __pageData,b as default};
