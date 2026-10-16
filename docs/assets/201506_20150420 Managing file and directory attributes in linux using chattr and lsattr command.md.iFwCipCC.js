import{_ as e,a0 as d,w as l,s as o,I as t,x as n,ao as m,a1 as r,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"在Linux中用chattr和lsattr命令管理文件和目录属性 | LCTT x X-CMD","titleTemplate":false,"description":"在Linux中用chattr和lsattr命令管理文件和目录属性 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Linux中用chattr和lsattr命令管理文件和目录属性 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Linux中用chattr和lsattr命令管理文件和目录属性 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150420 Managing file and directory attributes in linux using chattr and lsattr command","title":"在Linux中用chattr和lsattr命令管理文件和目录属性","tag":"201506","desc":""},"relativePath":"201506/20150420 Managing file and directory attributes in linux using chattr and lsattr command.md","filePath":"[post].md"}'),u={name:"201506/20150420 Managing file and directory attributes in linux using chattr and lsattr command.md"};function p(c,i,h,g,x,y){const a=d("Link");return l(),o("div",null,[i[13]||(i[13]=t("h1",{id:"在linux中用chattr和lsattr命令管理文件和目录属性",tabindex:"-1"},[n("在Linux中用chattr和lsattr命令管理文件和目录属性 "),t("a",{class:"header-anchor",href:"#在linux中用chattr和lsattr命令管理文件和目录属性","aria-label":"Permalink to “在Linux中用chattr和lsattr命令管理文件和目录属性”"},"​")],-1)),i[14]||(i[14]=t("p",null,"为了允许添加数据，防止更改或者删除等，文件和文件夹可以设定了特定的控制属性。例如，你可以在关键的系统文件或者文件夹中启用属性，然后没有任何用户，包括root，可以删除或者修改它，比如不允许使用像dump这样的命令等备份工具去备份一个特定的文件或者文件夹，等等。这些属性只可以在ext2，ext3或者ext4文件系统中的文件和文件夹上设定。",-1)),i[15]||(i[15]=t("p",null,[n("有两个命令 "),t("strong",null,"lsattr"),n(" 和 "),t("strong",null,"chattr"),n(" 用来管理属性。下面是常用属性的列表。")],-1)),i[16]||(i[16]=t("p",null,"注：表格代码",-1)),i[17]||(i[17]=t("table",{width:"482",cellspacing:"0",cellpadding:"4",border:"1"},[t("colgroup",null,[t("col",{width:"112"}),t("col",{width:"514"})]),t("tbody",null,[t("tr",{valign:"top"},[t("td",{width:"112"},[t("p",{align:"justify",class:"western"},[t("b",null,"属性")])]),t("td",{width:"514"},[t("p",{align:"justify",class:"western"},[t("b",null,"描述")])])]),t("tr",{valign:"top"},[t("td",{width:"112"},[t("p",{align:"justify",class:"western"},"a (append)")]),t("td",{width:"514"},[t("p",{align:"justify",class:"western"},"允许在文件中进行追加操作")])]),t("tr",{valign:"top"},[t("td",{width:"112"},[t("p",{align:"justify",class:"western"},"A")]),t("td",{width:"514"},[t("p",{align:"justify",class:"western"},"这个属性不允许更新文件的访问时间")])]),t("tr",{valign:"top"},[t("td",{width:"112"},[t("p",{align:"justify",class:"western"},"c (compressed)")]),t("td",{width:"514"},[t("p",{align:"justify",class:"western"},"启用这个属性时，文件在磁盘上会自动压缩")])]),t("tr",{valign:"top"},[t("td",{width:"112"},[t("p",{align:"justify",class:"western"},"d (dump)")]),t("td",{width:"514"},[t("p",{align:"justify",class:"western"},"不能使用dump命令备份文件")])]),t("tr",{valign:"top"},[t("td",{width:"112"},[t("p",{align:"justify",class:"western"},"D")]),t("td",{width:"514"},[t("p",{align:"justify",class:"western"},"设置了文件夹的D属性时，更改会在同步保存在磁盘上")])]),t("tr",{valign:"top"},[t("td",{width:"112"},[t("p",{align:"justify",class:"western"},"e (extent format)")]),t("td",{width:"514"},[t("p",{align:"justify",class:"western"},"它表明，该文件使用磁盘上的块的映射扩展")])]),t("tr",{valign:"top"},[t("td",{width:"112"},[t("p",{align:"justify",class:"western"},"i (immutable)")]),t("td",{width:"514"},[t("p",{align:"justify",class:"western"},"在文件上启用这个属性时，我们不能更改、重命名或者删除这个文件")])]),t("tr",{valign:"top"},[t("td",{width:"112"},[t("p",{align:"justify",class:"western"},"j (journaling)")]),t("td",{width:"514"},[t("p",{align:"justify",class:"western"},"设置了这个属性时，文件的数据首先保存在日志中，然后再写入文件")])]),t("tr",{valign:"top"},[t("td",{width:"112"},[t("p",{align:"justify",class:"western"},"S (synchronous)")]),t("td",{width:"514"},[t("p",{align:"justify",class:"western"},"设置了这个属性时，变更或更改同步保存到磁盘上")])])])],-1)),i[18]||(i[18]=m(`<p>chattr属性中可以使用的不同选项 ：</p><ul><li><strong>-R</strong> 递归地修改文件夹和子文件夹的属性</li><li><strong>-V</strong> chattr命令会输出带有版本信息的冗余信息</li><li><strong>-f</strong> 忽略大部分错误信息</li></ul><p>在chattr中用于设置或者取消属性的 <strong>操作符</strong></p><ul><li>&#39;+&#39; 符号用来为文件和文件夹设置属性，</li><li>&#39;-&#39; 符号用来移除或者取消属性</li><li>&#39;=&#39; 使它们成为文件有的唯一属性。</li></ul><p><strong>chattr</strong> 和 <strong>lsattr</strong> 命令的基本语法 ：</p><pre><code># chattr &lt;options&gt; &lt;attributes&gt; &lt;file or Directory &gt;

# lsattr &lt;File or Directory&gt;
</code></pre><h3 id="例-1-使用-i-属性使文件不可更改" tabindex="-1">例:1 使用‘i’属性使文件不可更改 <a class="header-anchor" href="#例-1-使用-i-属性使文件不可更改" aria-label="Permalink to “例:1 使用‘i’属性使文件不可更改”">​</a></h3><pre><code>[root@linuxtechi ~]# chattr +i dummy_data
[root@linuxtechi ~]# lsattr dummy_data
----i----------- dummy_data
</code></pre><p>现在试着删除或者修改文件</p><pre><code>[root@linuxtechi ~]# rm -f dummy_data
rm: cannot remove &#39;dummy_data&#39;: Operation not permitted

[root@linuxtechi ~]# echo &quot;test&quot; &gt;&gt; dummy_data
-bash: dummy_data: Permission denied
</code></pre><h3 id="例-2-移除不可更改属性" tabindex="-1">例:2 移除不可更改属性 <a class="header-anchor" href="#例-2-移除不可更改属性" aria-label="Permalink to “例:2 移除不可更改属性”">​</a></h3><pre><code>[root@linuxtechi ~]# chattr -i dummy_data
[root@linuxtechi ~]# lsattr dummy_data
---------------- dummy_data
</code></pre><h3 id="例-3-在文件中只允许追加操作" tabindex="-1">例:3 在文件中只允许追加操作 <a class="header-anchor" href="#例-3-在文件中只允许追加操作" aria-label="Permalink to “例:3 在文件中只允许追加操作”">​</a></h3><pre><code>[root@linuxtechi ~]# chattr +a dummy_data
[root@linuxtechi ~]# lsattr dummy_data
-----a---------- dummy_data
</code></pre><p>现在试着把fstab文件的内容追加到dummy_data文件</p><pre><code>[root@linuxtechi ~]# cat /etc/fstab &gt;&gt; dummy_data
[root@linuxtechi ~]#
</code></pre><h3 id="例-4-使用-r-选项和-i-属性使文件夹和它的子文件夹成为安全目录" tabindex="-1">例 :4 使用 -R 选项和 ‘+i’ 属性使文件夹和它的子文件夹成为安全目录 <a class="header-anchor" href="#例-4-使用-r-选项和-i-属性使文件夹和它的子文件夹成为安全目录" aria-label="Permalink to “例 :4 使用 -R 选项和 ‘+i’ 属性使文件夹和它的子文件夹成为安全目录”">​</a></h3><p>让我们来新建一个sysadmin文件夹和它的子文件夹</p><pre><code>[root@linuxtechi ~]# mkdir sysadmin
[root@linuxtechi ~]# mkdir sysadmin/admim_{1,2,3,4,5}
[root@linuxtechi ~]# ls -l sysadmin/
total 0
drwxr-xr-x. 2 root root 6 Apr 19 09:50 admim_1
drwxr-xr-x. 2 root root 6 Apr 19 09:50 admim_2
drwxr-xr-x. 2 root root 6 Apr 19 09:50 admim_3
drwxr-xr-x. 2 root root 6 Apr 19 09:50 admim_4
drwxr-xr-x. 2 root root 6 Apr 19 09:50 admim_5
</code></pre><p>在sysadmin文件夹递归设置不可更改属性</p><pre><code>[root@linuxtechi ~]# chattr -R +i sysadmin

[root@linuxtechi ~]# lsattr -R sysadmin/
----i----------- sysadmin/admim_1
sysadmin/admim_1:
----i----------- sysadmin/admim_2
sysadmin/admim_2:
----i----------- sysadmin/admim_3
sysadmin/admim_3:
----i----------- sysadmin/admim_4
sysadmin/admim_4:
----i----------- sysadmin/admim_5
sysadmin/admim_5:
[root@linuxtechi ~]#
</code></pre><p>现在试着用rm命令删除文件夹</p><pre><code>[root@linuxtechi ~]# rm -rf sysadmin
rm: cannot remove ‘sysadmin/admim_1’: Permission denied
rm: cannot remove ‘sysadmin/admim_2’: Permission denied
rm: cannot remove ‘sysadmin/admim_3’: Permission denied
rm: cannot remove ‘sysadmin/admim_4’: Permission denied
rm: cannot remove ‘sysadmin/admim_5’: Permission denied
[root@linuxtechi ~]#
</code></pre><p>使用以下命令递归取消属性</p><pre><code>[root@linuxtechi ~]# chattr -R -i sysadmin
</code></pre><hr>`,26)),t("p",null,[i[1]||(i[1]=n("via: ",-1)),r(a,{href:"http://www.linuxtechi.com/file-directory-attributes-in-linux-using-chattr-lsattr-command/"},{default:s(()=>[...i[0]||(i[0]=[n("http://www.linuxtechi.com/file-directory-attributes-in-linux-using-chattr-lsattr-command/",-1)])]),_:1})]),t("p",null,[i[5]||(i[5]=n("作者：",-1)),r(a,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:s(()=>[...i[2]||(i[2]=[n("Pradeep Kumar",-1)])]),_:1}),i[6]||(i[6]=n(" 译者：",-1)),r(a,{href:"https://github.com/ictlyh"},{default:s(()=>[...i[3]||(i[3]=[n("ictlyh",-1)])]),_:1}),i[7]||(i[7]=n(" 校对：",-1)),r(a,{href:"https://github.com/wxy"},{default:s(()=>[...i[4]||(i[4]=[n("wxy",-1)])]),_:1})]),t("p",null,[i[10]||(i[10]=n("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...i[8]||(i[8]=[n("LCTT",-1)])]),_:1}),i[11]||(i[11]=n(" 原创翻译，",-1)),r(a,{href:"http://linux.cn/"},{default:s(()=>[...i[9]||(i[9]=[n("Linux中国",-1)])]),_:1}),i[12]||(i[12]=n(" 荣誉推出",-1))])])}const b=e(u,[["render",p]]);export{_ as __pageData,b as default};
