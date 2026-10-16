import{_ as r,a0 as i,w as d,s as l,ao as p,I as t,x as s,a1 as e,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"10 個 Linux 中的 passwd 命令示例 | LCTT x X-CMD","titleTemplate":false,"description":"10 個 Linux 中的 passwd 命令示例 | LCTT (201510) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"10 個 Linux 中的 passwd 命令示例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"10 個 Linux 中的 passwd 命令示例 | LCTT (201510) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201510/20151019 10 passwd command examples in Linux","title":"10 個 Linux 中的 passwd 命令示例","tag":"201510","desc":""},"relativePath":"201510/20151019 10 passwd command examples in Linux.md","filePath":"[post].md"}'),u={name:"201510/20151019 10 passwd command examples in Linux.md"};function w(x,n,c,h,m,g){const a=i("Link");return d(),l("div",null,[n[13]||(n[13]=p(`<h1 id="_10-個-linux-中的-passwd-命令示例" tabindex="-1">10 個 Linux 中的 passwd 命令示例 <a class="header-anchor" href="#_10-個-linux-中的-passwd-命令示例" aria-label="Permalink to “10 個 Linux 中的 passwd 命令示例”">​</a></h1><p>正如 <strong>passwd</strong> 命令的名稱所示，其用於改變系統用户的密碼。如果 passwd 命令由非 root 用户執行，那麼它會詢問當前用户的密碼，然後設置調用該命令的用户的新密碼。當此命令由超級用户 root 執行的話，就可以重新設置任何用户的密碼，包括不知道當前密碼的用户。</p><p>在這篇文章中，我們將用實例來介紹 passwd 命令。</p><h4 id="語法" tabindex="-1">語法 : <a class="header-anchor" href="#語法" aria-label="Permalink to “語法 :”">​</a></h4><pre><code># passwd {options} {user_name}
</code></pre><p>可以在 passwd 命令使用不同的選項，列表如下：</p><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/09/passwd-command-options.jpg" alt=""></p><h3 id="例1-更改系統用户的密碼" tabindex="-1">例1：更改系統用户的密碼 <a class="header-anchor" href="#例1-更改系統用户的密碼" aria-label="Permalink to “例1：更改系統用户的密碼”">​</a></h3><p>當你使用非 root 用户登錄時，比如我使用 ‘linuxtechi’ 登錄的情況下，運行 passwd 命令它會重置當前登錄用户的密碼。</p><pre><code>[linuxtechi@linuxworld ~]$ passwd
Changing password for user linuxtechi.
Changing password for linuxtechi.
(current) UNIX password:
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
[linuxtechi@linuxworld ~]$
</code></pre><p>當你作為 root 用户登錄後並運行 <strong>passwd</strong> 命令時，它默認情況下會重新設置 root 的密碼，如果你在 passwd 命令後指定了用户名，它會重置該用户的密碼。</p><pre><code>[root@linuxworld ~]# passwd
[root@linuxworld ~]# passwd linuxtechi
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/09/passwd-command.jpg" alt=""></p><p><strong>注意</strong> : 系統用户的密碼以加密的形式保存在 /etc/shadow 文件中。</p><h3 id="例2-顯示密碼狀態信息" tabindex="-1">例2：顯示密碼狀態信息 <a class="header-anchor" href="#例2-顯示密碼狀態信息" aria-label="Permalink to “例2：顯示密碼狀態信息”">​</a></h3><p>要顯示用户密碼的狀態信息，請在 passwd 命令後使用 <strong>-S</strong> 選項。</p><pre><code>[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi PS 2015-09-20 0 99999 7 -1 (Password set, SHA512 crypt.)
[root@linuxworld ~]#
</code></pre><p>在上面的輸出中，第一個字段顯示的用户名，第二個字段顯示密碼狀態（<strong>PS = 密碼設置，LK = 密碼鎖定，NP = 無密碼</strong>），第三個字段顯示了上次修改密碼的時間，後面四個字段分別顯示了密碼能更改的最小期限和最大期限，警告期限和沒有使用該口令的時長。</p><h3 id="例3-顯示所有賬號的密碼狀態信息" tabindex="-1">例3：顯示所有賬號的密碼狀態信息 <a class="header-anchor" href="#例3-顯示所有賬號的密碼狀態信息" aria-label="Permalink to “例3：顯示所有賬號的密碼狀態信息”">​</a></h3><p>為了顯示所有用户密碼的狀態信息需要使用 “<strong>-aS</strong>”選項在passwd 命令中，示例如下所示：</p><pre><code>root@localhost:~# passwd -Sa
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/09/passwd-sa.jpg" alt=""></p><p>（LCTT譯註：不同發行版/passwd 的行為不同。CentOS6.6 沒有測試成功，但 Ubuntu 可以。）</p><h3 id="例4-使用-d-選項刪除用户的密碼" tabindex="-1">例4：使用 -d 選項刪除用户的密碼 <a class="header-anchor" href="#例4-使用-d-選項刪除用户的密碼" aria-label="Permalink to “例4：使用 -d 選項刪除用户的密碼”">​</a></h3><p>用我做例子，刪除 ‘<strong>linuxtechi</strong>‘ 用户的密碼。</p><pre><code>[root@linuxworld ~]# passwd -d linuxtechi
Removing password for user linuxtechi.
passwd: Success
[root@linuxworld ~]#
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi NP 2015-09-20 0 99999 7 -1 (Empty password.)
[root@linuxworld ~]#
</code></pre><p>“<strong>-d</strong>” 選項將清空用户密碼，並禁用用户登錄。</p><h3 id="例5-設置密碼立即過期" tabindex="-1">例5：設置密碼立即過期 <a class="header-anchor" href="#例5-設置密碼立即過期" aria-label="Permalink to “例5：設置密碼立即過期”">​</a></h3><p>在 passwd 命令中使用 &#39;-e&#39; 選項會立即使用户的密碼過期，這將強制用户在下次登錄時更改密碼。</p><pre><code>[root@linuxworld ~]# passwd -e linuxtechi
Expiring password for user linuxtechi.
passwd: Success
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi PS 1970-01-01 0 99999 7 -1 (Password set, SHA512 crypt.)
[root@linuxworld ~]#
</code></pre><p>現在嘗試用 linuxtechi 用户 SSH 連接到主機。</p><p><img src="http://www.linuxtechi.com/wp-content/uploads/2015/09/passwd-expiry.jpg" alt=""></p><h3 id="例6-鎖定系統用户的密碼" tabindex="-1">例6：鎖定系統用户的密碼 <a class="header-anchor" href="#例6-鎖定系統用户的密碼" aria-label="Permalink to “例6：鎖定系統用户的密碼”">​</a></h3><p>在 passwd 命令中使用 ‘<strong>-l</strong>‘ 選項能鎖定用户的密碼，它會在密碼的起始位置加上“！”。當他/她的密碼被鎖定時，用户將不能更改它的密碼。</p><pre><code>[root@linuxworld ~]# passwd -l linuxtechi
Locking password for user linuxtechi.
passwd: Success
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi LK 2015-09-20 0 99999 7 -1 (Password locked.)
[root@linuxworld ~]#
</code></pre><h3 id="例7-使用-u-選項解鎖用户密碼" tabindex="-1">例7：使用 -u 選項解鎖用户密碼 <a class="header-anchor" href="#例7-使用-u-選項解鎖用户密碼" aria-label="Permalink to “例7：使用 -u 選項解鎖用户密碼”">​</a></h3><pre><code>[root@linuxworld ~]# passwd -u linuxtechi
Unlocking password for user linuxtechi.
passwd: Success
[root@linuxworld ~]#
</code></pre><h3 id="例8-使用-i-選項設置非活動時間" tabindex="-1">例8：使用 -i 選項設置非活動時間 <a class="header-anchor" href="#例8-使用-i-選項設置非活動時間" aria-label="Permalink to “例8：使用 -i 選項設置非活動時間”">​</a></h3><p>在 passwd 命令中使用 -i 選項用於設系統用户的非活動時間。當用户（我使用的是linuxtechi用户）密碼過期後，用户再經過 ‘<strong>n</strong>‘ 天后（在我的情況下是10天）沒有更改其密碼，用户將不能登錄。</p><pre><code>[root@linuxworld ~]# passwd -i 10 linuxtechi
Adjusting aging data for user linuxtechi.
passwd: Success
[root@linuxworld ~]#
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi PS 2015-09-20 0 99999 7 10 (Password set, SHA512 crypt.)
[root@linuxworld ~]#
</code></pre><h3 id="例9-使用-n-選項設置密碼更改的最短時間" tabindex="-1">例9：使用 -n 選項設置密碼更改的最短時間 <a class="header-anchor" href="#例9-使用-n-選項設置密碼更改的最短時間" aria-label="Permalink to “例9：使用 -n 選項設置密碼更改的最短時間”">​</a></h3><p>在下面的例子中，linuxtechi用户必須在90天內更改密碼。0表示用户可以在任何時候更改它的密碼。</p><pre><code>[root@linuxworld ~]# passwd -n 90 linuxtechi
Adjusting aging data for user linuxtechi.
passwd: Success
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi PS 2015-09-20 90 99999 7 10 (Password set, SHA512 crypt.)
[root@linuxworld ~]#
</code></pre><h3 id="例10-使用-w-選項設置密碼過期前的警告期限" tabindex="-1">例10：使用 -w 選項設置密碼過期前的警告期限 <a class="header-anchor" href="#例10-使用-w-選項設置密碼過期前的警告期限" aria-label="Permalink to “例10：使用 -w 選項設置密碼過期前的警告期限”">​</a></h3><p>‘<strong>-w</strong>’ 選項在 passwd 命令中用於設置用户的警告期限。這意味着，n天之後，他/她的密碼將過期。</p><pre><code>[root@linuxworld ~]# passwd -w 12 linuxtechi
Adjusting aging data for user linuxtechi.
passwd: Success
[root@linuxworld ~]# passwd -S linuxtechi
linuxtechi PS 2015-09-20 90 99999 12 10 (Password set, SHA512 crypt.)
[root@linuxworld ~]#
</code></pre><hr>`,47)),t("p",null,[n[1]||(n[1]=s("via: ",-1)),e(a,{href:"http://www.linuxtechi.com/10-passwd-command-examples-in-linux/"},{default:o(()=>[...n[0]||(n[0]=[s("http://www.linuxtechi.com/10-passwd-command-examples-in-linux/",-1)])]),_:1})]),t("p",null,[n[5]||(n[5]=s("作者：",-1)),e(a,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:o(()=>[...n[2]||(n[2]=[s("Pradeep Kumar",-1)])]),_:1}),n[6]||(n[6]=s(" 譯者：",-1)),e(a,{href:"https://github.com/strugglingyouth"},{default:o(()=>[...n[3]||(n[3]=[s("strugglingyouth",-1)])]),_:1}),n[7]||(n[7]=s(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:o(()=>[...n[4]||(n[4]=[s("wxy",-1)])]),_:1})]),t("p",null,[n[10]||(n[10]=s("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...n[8]||(n[8]=[s("LCTT",-1)])]),_:1}),n[11]||(n[11]=s(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:o(()=>[...n[9]||(n[9]=[s("Linux中國",-1)])]),_:1}),n[12]||(n[12]=s(" 榮譽推出",-1))])])}const b=r(u,[["render",w]]);export{P as __pageData,b as default};
