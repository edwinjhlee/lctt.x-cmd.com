import{_ as n,a0 as l,w as i,s as d,ao as s,I as o,x as p,a1 as r,A as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"SUSE Linux – Zypper 命令示例 | LCTT x X-CMD","titleTemplate":false,"description":"SUSE Linux – Zypper 命令示例 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"SUSE Linux – Zypper 命令示例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"SUSE Linux – Zypper 命令示例 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20141024 SUSE Linux--Zypper Command Examples","title":"SUSE Linux – Zypper 命令示例","tag":"201411","desc":""},"relativePath":"201411/20141024 SUSE Linux--Zypper Command Examples.md","filePath":"[post].md"}'),c={name:"201411/20141024 SUSE Linux--Zypper Command Examples.md"};function u(h,e,m,y,x,z){const a=l("Link");return i(),d("div",null,[e[13]||(e[13]=s(`<h1 id="suse-linux-–-zypper-命令示例" tabindex="-1">SUSE Linux – Zypper 命令示例 <a class="header-anchor" href="#suse-linux-–-zypper-命令示例" aria-label="Permalink to “SUSE Linux – Zypper 命令示例”">​</a></h1><p>Zypper是SuSE Linux中用於安裝，升級，卸載，管理倉庫、進行各種包查詢的命令列接口。本篇將會討論zypper的幾個不同命令的例子。</p><p>語法：</p><pre><code># zypper [--global-opts] &lt;command&gt; [--command-opts] [command-arguments]
</code></pre><p>中括號中的部分可以不需要。執行zypper最簡單的方法是輸入 zypper 及 <code>&lt;command&gt;</code>。</p><h3 id="例子1-列出可用的全局選項和命令" tabindex="-1">例子1：列出可用的全局選項和命令 <a class="header-anchor" href="#例子1-列出可用的全局選項和命令" aria-label="Permalink to “例子1：列出可用的全局選項和命令”">​</a></h3><p>打開終端，輸入zypper並按回車，它會顯示所有可用的全局選項和命令。</p><pre><code>linux-xa3t:~ # zypper
</code></pre><h3 id="例子2-獲得zypper的某個命令的幫助" tabindex="-1">例子2：獲得zypper的某個命令的幫助 <a class="header-anchor" href="#例子2-獲得zypper的某個命令的幫助" aria-label="Permalink to “例子2：獲得zypper的某個命令的幫助”">​</a></h3><p>語法： zypper help [command]</p><pre><code>linux-xa3t:~ # zypper help remove
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
</code></pre><h3 id="例子3-打開zypper-shell-會話" tabindex="-1">例子3：打開zypper shell/會話 <a class="header-anchor" href="#例子3-打開zypper-shell-會話" aria-label="Permalink to “例子3：打開zypper shell/會話”">​</a></h3><pre><code>linux-xa3t:~ # zypper sh
zypper&gt;
</code></pre><p>或</p><pre><code>linux-xa3t:~ # zypper shell
zypper&gt;
</code></pre><h3 id="例子4-列出已定義的倉庫" tabindex="-1">例子4：列出已定義的倉庫 <a class="header-anchor" href="#例子4-列出已定義的倉庫" aria-label="Permalink to “例子4：列出已定義的倉庫”">​</a></h3><pre><code>linux-xa3t:~ # zypper repos
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2014/10/zypper-repos.png" alt=""></p><p>或</p><pre><code>linux-xa3t:~ # zypper lr
</code></pre><h4 id="_4-1-以表格的形式列出倉庫的uri" tabindex="-1">4.1) 以表格的形式列出倉庫的URI <a class="header-anchor" href="#_4-1-以表格的形式列出倉庫的uri" aria-label="Permalink to “4.1) 以表格的形式列出倉庫的URI”">​</a></h4><p><img src="http://www.linuxtechi.com/wp-content/uploads/2014/10/zypper-repos-uri.png" alt=""></p><h4 id="_4-2-以優先級列出倉庫" tabindex="-1">4.2) 以優先級列出倉庫 <a class="header-anchor" href="#_4-2-以優先級列出倉庫" aria-label="Permalink to “4.2) 以優先級列出倉庫”">​</a></h4><pre><code>linux-xa3t:~ # zypper lr -p
</code></pre><p><img src="http://www.linuxtechi.com/wp-content/uploads/2014/10/zypper-repos-priority.png" alt=""></p><h3 id="例子5-刷新倉庫" tabindex="-1">例子5：刷新倉庫 <a class="header-anchor" href="#例子5-刷新倉庫" aria-label="Permalink to “例子5：刷新倉庫”">​</a></h3><pre><code>linux-xa3t:~ # zypper ref
Repository &#39;openSUSE-13.1-Non-Oss&#39; is up to date.
Repository &#39;openSUSE-13.1-Oss&#39; is up to date.
Repository &#39;openSUSE-13.1-Update&#39; is up to date.
Repository &#39;openSUSE-13.1-Update-Non-Oss&#39; is up to date.
All repositories have been refreshed.
</code></pre><h3 id="例子6-修改zypper倉庫" tabindex="-1">例子6：修改zypper倉庫 <a class="header-anchor" href="#例子6-修改zypper倉庫" aria-label="Permalink to “例子6：修改zypper倉庫”">​</a></h3><p>zypper倉庫可以通過別名、數字或者URI或者通過‘–all、 –remote、 –local、 –medium-type’這些選項修改。</p><p>linux-xa3t:~ # zypper mr -d 6 #禁用6號倉庫 linux-xa3t:~ # zypper mr -rk -p 70 upd #啓用自動書信併為‘upd’倉庫設置rpm文件‘緩存’，且設置它的優先級為70 linux-xa3t:~ # zypper mr -Ka #為所有的倉庫禁用rpm文件緩存 linux-xa3t:~ # zypper mr -kt #為遠程倉庫設置rpm文件緩存</p><h3 id="例子7-添加倉庫" tabindex="-1">例子7：添加倉庫 <a class="header-anchor" href="#例子7-添加倉庫" aria-label="Permalink to “例子7：添加倉庫”">​</a></h3><p>語法： zypper addrepo 或者 zypper ar <code>&lt;倉庫的URL或者別名&gt;</code></p><pre><code>linux-xa3t:~ # zypper ar http://download.opensuse.org/update/13.1/ update
Adding repository &#39;update&#39; .............................................[done]
Repository &#39;update&#39; successfully added
Enabled: Yes
Autorefresh: No
GPG check: Yes
URI: http://download.opensuse.org/update/13.1/
</code></pre><h3 id="例子8-移除倉庫" tabindex="-1">例子8：移除倉庫 <a class="header-anchor" href="#例子8-移除倉庫" aria-label="Permalink to “例子8：移除倉庫”">​</a></h3><p>語法： zypper removerepo <code>&lt;倉庫名&gt;</code> <code>&lt;別名&gt;</code></p><p>或者</p><p>zypper rr <code>&lt;倉庫名&gt;</code> <code>&lt;別名&gt;</code></p><pre><code>linux-xa3t:~ # zypper rr openSUSE-13.1-1.10 openSUSE-13.1-1.10
Removing repository &#39;openSUSE-13.1-1.10&#39; ............................[done]
Repository &#39;openSUSE-13.1-1.10&#39; has been removed.
</code></pre><h3 id="例子9-安裝軟件包" tabindex="-1">例子9：安裝軟件包 <a class="header-anchor" href="#例子9-安裝軟件包" aria-label="Permalink to “例子9：安裝軟件包”">​</a></h3><p>語法： zypper install <code>&lt;包名&gt;</code> 或者 zypper in <code>&lt;包名&gt;</code></p><pre><code>linux-xa3t:~ # zypper install vlc
</code></pre><h3 id="例子10-卸載軟件包" tabindex="-1">例子10：卸載軟件包 <a class="header-anchor" href="#例子10-卸載軟件包" aria-label="Permalink to “例子10：卸載軟件包”">​</a></h3><p>語法： zypper remove <code>&lt;包名&gt;</code> 或者 zypper rm <code>&lt;包名&gt;</code></p><pre><code>linux-xa3t:~ # zypper remove sqlite
</code></pre><h3 id="例子11-導出和導入倉庫" tabindex="-1">例子11：導出和導入倉庫 <a class="header-anchor" href="#例子11-導出和導入倉庫" aria-label="Permalink to “例子11：導出和導入倉庫”">​</a></h3><p>導出倉庫的語法 : zypper repos –export 或者 zypper lr -e</p><pre><code>linux-xa3t:~ # zypper lr --export repo-backup/back.repo
Repositories have been successfully exported to repo-backup/back.repo.
</code></pre><p>導入倉庫的語法 :</p><pre><code>linux-xa3t:~ # zypper ar repo-backup/back.repo
</code></pre><h3 id="例子12-更新一個軟件包" tabindex="-1">例子12：更新一個軟件包 <a class="header-anchor" href="#例子12-更新一個軟件包" aria-label="Permalink to “例子12：更新一個軟件包”">​</a></h3><p>語法： zypper update <code>&lt;包名&gt;</code> 或者 zypper up <code>&lt;包名&gt;</code></p><pre><code>linux-xa3t:~ # zypper update bash
</code></pre><h3 id="例子13-安裝源碼包" tabindex="-1">例子13：安裝源碼包 <a class="header-anchor" href="#例子13-安裝源碼包" aria-label="Permalink to “例子13：安裝源碼包”">​</a></h3><p>語法： zypper source-install <code>&lt;源碼包&gt;</code> 或 zypper si <code>&lt;源碼包&gt;</code></p><pre><code>linux-xa3t:~ # zypper source-install zypper
</code></pre><h3 id="例子14-只安裝依賴包" tabindex="-1">例子14：只安裝依賴包 <a class="header-anchor" href="#例子14-只安裝依賴包" aria-label="Permalink to “例子14：只安裝依賴包”">​</a></h3><p>例子13中的命令會安裝和構建特定包的依賴。如果你想要安裝源碼包就用-D選項</p><pre><code># zypper source-install -D package_name
</code></pre><p>只安裝依賴就使用-d</p><pre><code># zypper source-install -d package_name
</code></pre><hr>`,61)),o("p",null,[e[1]||(e[1]=p("via: ",-1)),r(a,{href:"http://www.linuxtechi.com/suse-linux-zypper-command-examples/"},{default:t(()=>[...e[0]||(e[0]=[p("http://www.linuxtechi.com/suse-linux-zypper-command-examples/",-1)])]),_:1})]),o("p",null,[e[5]||(e[5]=p("作者：",-1)),r(a,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:t(()=>[...e[2]||(e[2]=[p("Pradeep Kumar",-1)])]),_:1}),e[6]||(e[6]=p(" 譯者：",-1)),r(a,{href:"https://github.com/geekpi"},{default:t(()=>[...e[3]||(e[3]=[p("geekpi",-1)])]),_:1}),e[7]||(e[7]=p(" 校對：",-1)),r(a,{href:"https://github.com/wxy"},{default:t(()=>[...e[4]||(e[4]=[p("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=p("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[8]||(e[8]=[p("LCTT",-1)])]),_:1}),e[11]||(e[11]=p(" 原創翻譯，",-1)),r(a,{href:"http://linux.cn/"},{default:t(()=>[...e[9]||(e[9]=[p("Linux中國",-1)])]),_:1}),e[12]||(e[12]=p(" 榮譽推出",-1))])])}const S=n(c,[["render",u]]);export{f as __pageData,S as default};
