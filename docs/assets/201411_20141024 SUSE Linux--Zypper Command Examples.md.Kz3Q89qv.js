import{_ as n,a0 as l,w as i,s as d,ao as s,I as o,x as p,a1 as r,A as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"SUSE Linux – Zypper 命令示例 | LCTT x X-CMD","titleTemplate":false,"description":"SUSE Linux – Zypper 命令示例 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"SUSE Linux – Zypper 命令示例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"SUSE Linux – Zypper 命令示例 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20141024 SUSE Linux--Zypper Command Examples","title":"SUSE Linux – Zypper 命令示例","tag":"201411","desc":""},"relativePath":"201411/20141024 SUSE Linux--Zypper Command Examples.md","filePath":"[post].md"}'),c={name:"201411/20141024 SUSE Linux--Zypper Command Examples.md"};function u(h,e,m,y,x,z){const a=l("Link");return i(),d("div",null,[e[13]||(e[13]=s(`<h1 id="suse-linux-–-zypper-命令示例" tabindex="-1">SUSE Linux – Zypper 命令示例 <a class="header-anchor" href="#suse-linux-–-zypper-命令示例" aria-label="Permalink to “SUSE Linux – Zypper 命令示例”">​</a></h1><p>Zypper是SuSE Linux中用于安装，升级，卸载，管理仓库、进行各种包查询的命令行接口。本篇将会讨论zypper的几个不同命令的例子。</p><p>语法：</p><pre><code># zypper [--global-opts] &lt;command&gt; [--command-opts] [command-arguments]
</code></pre><p>中括号中的部分可以不需要。执行zypper最简单的方法是输入 zypper 及 <code>&lt;command&gt;</code>。</p><h3 id="例子1-列出可用的全局选项和命令" tabindex="-1">例子1：列出可用的全局选项和命令 <a class="header-anchor" href="#例子1-列出可用的全局选项和命令" aria-label="Permalink to “例子1：列出可用的全局选项和命令”">​</a></h3><p>打开终端，输入zypper并按回车，它会显示所有可用的全局选项和命令。</p><pre><code>linux-xa3t:~ # zypper
</code></pre><h3 id="例子2-获得zypper的某个命令的帮助" tabindex="-1">例子2：获得zypper的某个命令的帮助 <a class="header-anchor" href="#例子2-获得zypper的某个命令的帮助" aria-label="Permalink to “例子2：获得zypper的某个命令的帮助”">​</a></h3><p>语法： zypper help [command]</p><pre><code>linux-xa3t:~ # zypper help remove
remove (rm) [options] &lt;capability&gt; ...

Remove packages with specified capabilities.
A capability is NAME[.ARCH][OP&lt;VERSION&gt;], where OP is one of &lt;, &lt;=, =, &gt;=, &gt;.

Command options:
-r, --repo &lt;alias|#|URI&gt; Load only the specified repository.
-t, --type &lt;type&gt; Type of package (package, patch, pattern, product).

 Default: package.
-n, --name Select packages by plain name, not by capability.
-C, --capability Select packages by capability.
--debug-solver Create solver test case for debugging.
-R, --no-force-resolution Do not force the solver to find solution,let it ask.
--force-resolution Force the solver to find a solution (even an aggressive one).
-u, --clean-deps Automatically remove unneeded dependencies.
-U, --no-clean-deps No automatic removal of unneeded dependencies.
-D, --dry-run Test the removal, do not actually remove.
</code></pre><h3 id="例子3-打开zypper-shell-会话" tabindex="-1">例子3：打开zypper shell/会话 <a class="header-anchor" href="#例子3-打开zypper-shell-会话" aria-label="Permalink to “例子3：打开zypper shell/会话”">​</a></h3><pre><code>linux-xa3t:~ # zypper sh
zypper&gt;
</code></pre><p>或</p><pre><code>linux-xa3t:~ # zypper shell
zypper&gt;
</code></pre><h3 id="例子4-列出已定义的仓库" tabindex="-1">例子4：列出已定义的仓库 <a class="header-anchor" href="#例子4-列出已定义的仓库" aria-label="Permalink to “例子4：列出已定义的仓库”">​</a></h3><pre><code>linux-xa3t:~ # zypper repos
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2014/10/zypper-repos.png" alt=""></p><p>或</p><pre><code>linux-xa3t:~ # zypper lr
</code></pre><h4 id="_4-1-以表格的形式列出仓库的uri" tabindex="-1">4.1) 以表格的形式列出仓库的URI <a class="header-anchor" href="#_4-1-以表格的形式列出仓库的uri" aria-label="Permalink to “4.1) 以表格的形式列出仓库的URI”">​</a></h4><p><img src="http://www.linuxtechi.com/wp-content/uploads/2014/10/zypper-repos-uri.png" alt=""></p><h4 id="_4-2-以优先级列出仓库" tabindex="-1">4.2) 以优先级列出仓库 <a class="header-anchor" href="#_4-2-以优先级列出仓库" aria-label="Permalink to “4.2) 以优先级列出仓库”">​</a></h4><pre><code>linux-xa3t:~ # zypper lr -p
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2014/10/zypper-repos-priority.png" alt=""></p><h3 id="例子5-刷新仓库" tabindex="-1">例子5：刷新仓库 <a class="header-anchor" href="#例子5-刷新仓库" aria-label="Permalink to “例子5：刷新仓库”">​</a></h3><pre><code>linux-xa3t:~ # zypper ref
Repository &#39;openSUSE-13.1-Non-Oss&#39; is up to date.
Repository &#39;openSUSE-13.1-Oss&#39; is up to date.
Repository &#39;openSUSE-13.1-Update&#39; is up to date.
Repository &#39;openSUSE-13.1-Update-Non-Oss&#39; is up to date.
All repositories have been refreshed.
</code></pre><h3 id="例子6-修改zypper仓库" tabindex="-1">例子6：修改zypper仓库 <a class="header-anchor" href="#例子6-修改zypper仓库" aria-label="Permalink to “例子6：修改zypper仓库”">​</a></h3><p>zypper仓库可以通过别名、数字或者URI或者通过‘–all、 –remote、 –local、 –medium-type’这些选项修改。</p><p>linux-xa3t:~ # zypper mr -d 6 #禁用6号仓库 linux-xa3t:~ # zypper mr -rk -p 70 upd #启用自动书信并为‘upd’仓库设置rpm文件‘缓存’，且设置它的优先级为70 linux-xa3t:~ # zypper mr -Ka #为所有的仓库禁用rpm文件缓存 linux-xa3t:~ # zypper mr -kt #为远程仓库设置rpm文件缓存</p><h3 id="例子7-添加仓库" tabindex="-1">例子7：添加仓库 <a class="header-anchor" href="#例子7-添加仓库" aria-label="Permalink to “例子7：添加仓库”">​</a></h3><p>语法： zypper addrepo 或者 zypper ar <code>&lt;仓库的URL或者别名&gt;</code></p><pre><code>linux-xa3t:~ # zypper ar http://download.opensuse.org/update/13.1/ update
Adding repository &#39;update&#39; .............................................[done]
Repository &#39;update&#39; successfully added
Enabled: Yes
Autorefresh: No
GPG check: Yes
URI: http://download.opensuse.org/update/13.1/
</code></pre><h3 id="例子8-移除仓库" tabindex="-1">例子8：移除仓库 <a class="header-anchor" href="#例子8-移除仓库" aria-label="Permalink to “例子8：移除仓库”">​</a></h3><p>语法： zypper removerepo <code>&lt;仓库名&gt;</code> <code>&lt;别名&gt;</code></p><p>或者</p><p>zypper rr <code>&lt;仓库名&gt;</code> <code>&lt;别名&gt;</code></p><pre><code>linux-xa3t:~ # zypper rr openSUSE-13.1-1.10 openSUSE-13.1-1.10
Removing repository &#39;openSUSE-13.1-1.10&#39; ............................[done]
Repository &#39;openSUSE-13.1-1.10&#39; has been removed.
</code></pre><h3 id="例子9-安装软件包" tabindex="-1">例子9：安装软件包 <a class="header-anchor" href="#例子9-安装软件包" aria-label="Permalink to “例子9：安装软件包”">​</a></h3><p>语法： zypper install <code>&lt;包名&gt;</code> 或者 zypper in <code>&lt;包名&gt;</code></p><pre><code>linux-xa3t:~ # zypper install vlc
</code></pre><h3 id="例子10-卸载软件包" tabindex="-1">例子10：卸载软件包 <a class="header-anchor" href="#例子10-卸载软件包" aria-label="Permalink to “例子10：卸载软件包”">​</a></h3><p>语法： zypper remove <code>&lt;包名&gt;</code> 或者 zypper rm <code>&lt;包名&gt;</code></p><pre><code>linux-xa3t:~ # zypper remove sqlite
</code></pre><h3 id="例子11-导出和导入仓库" tabindex="-1">例子11：导出和导入仓库 <a class="header-anchor" href="#例子11-导出和导入仓库" aria-label="Permalink to “例子11：导出和导入仓库”">​</a></h3><p>导出仓库的语法 : zypper repos –export 或者 zypper lr -e</p><pre><code>linux-xa3t:~ # zypper lr --export repo-backup/back.repo
Repositories have been successfully exported to repo-backup/back.repo.
</code></pre><p>导入仓库的语法 :</p><pre><code>linux-xa3t:~ # zypper ar repo-backup/back.repo
</code></pre><h3 id="例子12-更新一个软件包" tabindex="-1">例子12：更新一个软件包 <a class="header-anchor" href="#例子12-更新一个软件包" aria-label="Permalink to “例子12：更新一个软件包”">​</a></h3><p>语法： zypper update <code>&lt;包名&gt;</code> 或者 zypper up <code>&lt;包名&gt;</code></p><pre><code>linux-xa3t:~ # zypper update bash
</code></pre><h3 id="例子13-安装源码包" tabindex="-1">例子13：安装源码包 <a class="header-anchor" href="#例子13-安装源码包" aria-label="Permalink to “例子13：安装源码包”">​</a></h3><p>语法： zypper source-install <code>&lt;源码包&gt;</code> 或 zypper si <code>&lt;源码包&gt;</code></p><pre><code>linux-xa3t:~ # zypper source-install zypper
</code></pre><h3 id="例子14-只安装依赖包" tabindex="-1">例子14：只安装依赖包 <a class="header-anchor" href="#例子14-只安装依赖包" aria-label="Permalink to “例子14：只安装依赖包”">​</a></h3><p>例子13中的命令会安装和构建特定包的依赖。如果你想要安装源码包就用-D选项</p><pre><code># zypper source-install -D package_name
</code></pre><p>只安装依赖就使用-d</p><pre><code># zypper source-install -d package_name
</code></pre><hr>`,61)),o("p",null,[e[1]||(e[1]=p("via: ",-1)),r(a,{href:"http://www.linuxtechi.com/suse-linux-zypper-command-examples/"},{default:t(()=>[...e[0]||(e[0]=[p("http://www.linuxtechi.com/suse-linux-zypper-command-examples/",-1)])]),_:1})]),o("p",null,[e[5]||(e[5]=p("作者：",-1)),r(a,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:t(()=>[...e[2]||(e[2]=[p("Pradeep Kumar",-1)])]),_:1}),e[6]||(e[6]=p(" 译者：",-1)),r(a,{href:"https://github.com/geekpi"},{default:t(()=>[...e[3]||(e[3]=[p("geekpi",-1)])]),_:1}),e[7]||(e[7]=p(" 校对：",-1)),r(a,{href:"https://github.com/wxy"},{default:t(()=>[...e[4]||(e[4]=[p("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=p("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[8]||(e[8]=[p("LCTT",-1)])]),_:1}),e[11]||(e[11]=p(" 原创翻译，",-1)),r(a,{href:"http://linux.cn/"},{default:t(()=>[...e[9]||(e[9]=[p("Linux中国",-1)])]),_:1}),e[12]||(e[12]=p(" 荣誉推出",-1))])])}const S=n(c,[["render",u]]);export{f as __pageData,S as default};
