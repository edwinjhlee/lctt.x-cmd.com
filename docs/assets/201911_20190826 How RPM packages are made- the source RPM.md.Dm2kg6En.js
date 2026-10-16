import{_ as t,a0 as r,w as o,s as d,I as n,x as a,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const R=JSON.parse('{"title":"RPM 包是如何从源 RPM 制作的 | LCTT x X-CMD","titleTemplate":false,"description":"RPM 包是如何从源 RPM 制作的 | LCTT (201911) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RPM 包是如何从源 RPM 制作的 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RPM 包是如何从源 RPM 制作的 | LCTT (201911) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201911/20190826 How RPM packages are made- the source RPM","title":"RPM 包是如何从源 RPM 制作的","tag":"201911","desc":""},"relativePath":"201911/20190826 How RPM packages are made- the source RPM.md","filePath":"[post].md"}'),c={name:"201911/20190826 How RPM packages are made- the source RPM.md"};function h(u,s,g,f,k,b){const p=r("Link");return o(),d("div",null,[s[28]||(s[28]=n("h1",{id:"rpm-包是如何从源-rpm-制作的",tabindex:"-1"},[a("RPM 包是如何从源 RPM 制作的 "),n("a",{class:"header-anchor",href:"#rpm-包是如何从源-rpm-制作的","aria-label":"Permalink to “RPM 包是如何从源 RPM 制作的”"},"​")],-1)),s[29]||(s[29]=n("p",null,[n("img",{src:"https://fedoramagazine.org/wp-content/uploads/2019/06/rpm.png-816x345.jpg",alt:""})],-1)),n("p",null,[s[1]||(s[1]=a("在",-1)),e(p,{href:"https://linux.cn/article-11452-1.html"},{default:i(()=>[...s[0]||(s[0]=[a("上一篇文章中，我们研究了什么是 RPM 软件包",-1)])]),_:1}),s[2]||(s[2]=a("。它们是包含文件和元数据的档案文件。当安装或卸载 RPM 时，此元数据告诉 RPM 在哪里创建或删除文件。正如你将在上一篇文章中记住的，元数据还包含有关“依赖项”的信息，它可以是“运行时”或“构建时”的依赖信息。",-1))]),s[30]||(s[30]=l(`<p>例如，让我们来看看 <code>fpaste</code>。你可以使用 <code>dnf</code> 下载该 RPM。这将下载 Fedora 存储库中可用的 <code>fpaste</code> 最新版本。在 Fedora 30 上，当前版本为 0.3.9.2：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf download fpaste</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>fpaste-0.3.9.2-2.fc30.noarch.rpm</span></span></code></pre></div><p>由于这是个构建 RPM，因此它仅包含使用 <code>fpaste</code> 所需的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpm -qpl ./fpaste-0.3.9.2-2.fc30.noarch.rpm</span></span>
<span class="line"><span>/usr/bin/fpaste</span></span>
<span class="line"><span>/usr/share/doc/fpaste</span></span>
<span class="line"><span>/usr/share/doc/fpaste/README.rst</span></span>
<span class="line"><span>/usr/share/doc/fpaste/TODO</span></span>
<span class="line"><span>/usr/share/licenses/fpaste</span></span>
<span class="line"><span>/usr/share/licenses/fpaste/COPYING</span></span>
<span class="line"><span>/usr/share/man/man1/fpaste.1.gz</span></span></code></pre></div><h3 id="源-rpm" tabindex="-1">源 RPM <a class="header-anchor" href="#源-rpm" aria-label="Permalink to “源 RPM”">​</a></h3><p>在此链条中的下一个环节是源 RPM。Fedora 中的所有软件都必须从其源代码构建。我们不包括预构建的二进制文件。因此，要制作一个 RPM 文件，RPM（工具）需要：</p><ul><li>给出必须要安装的文件，</li><li>例如，如果要编译出这些文件，则告诉它们如何生成这些文件，</li><li>告知必须在何处安装这些文件，</li><li>该特定软件需要其他哪些依赖才能正常工作。</li></ul><p>源 RPM 拥有所有这些信息。源 RPM 与构建 RPM 相似，但顾名思义，它们不包含已构建的二进制文件，而是包含某个软件的源文件。让我们下载 <code>fpaste</code> 的源 RPM：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf download fpaste --source</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>fpaste-0.3.9.2-2.fc30.src.rpm</span></span></code></pre></div><p>注意文件的结尾是 <code>src.rpm</code>。所有的 RPM 都是从源 RPM 构建的。你也可以使用 <code>dnf</code> 轻松检查“二进制” RPM 的源 RPM：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf repoquery --qf &quot;%{SOURCERPM}&quot; fpaste</span></span>
<span class="line"><span>fpaste-0.3.9.2-2.fc30.src.rpm</span></span></code></pre></div><p>另外，由于这是源 RPM，因此它不包含构建的文件。相反，它包含有关如何从中构建 RPM 的源代码和指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpm -qpl ./fpaste-0.3.9.2-2.fc30.src.rpm</span></span>
<span class="line"><span>fpaste-0.3.9.2.tar.gz</span></span>
<span class="line"><span>fpaste.spec</span></span></code></pre></div>`,13)),n("p",null,[s[4]||(s[4]=a("这里，第一个文件只是 ",-1)),s[5]||(s[5]=n("code",null,"fpaste",-1)),s[6]||(s[6]=a(" 的源代码。第二个是 spec 文件。spec 文件是个配方，可告诉 RPM（工具）如何使用源 RPM 中包含的源代码创建 RPM（档案文件）— 它包含 RPM（工具）构建 RPM（档案文件）所需的所有信息。在 spec 文件中。当我们软件包维护人员添加软件到 Fedora 中时，我们大部分时间都花在编写和完善 spec 文件上。当软件包需要更新时，我们会回过头来调整 spec 文件。你可以在 ",-1)),e(p,{href:"https://src.fedoraproject.org/browse/projects/"},{default:i(()=>[...s[3]||(s[3]=[a("https://src.fedoraproject.org/browse/projects/",-1)])]),_:1}),s[7]||(s[7]=a(" 的源代码存储库中查看 Fedora 中所有软件包的 spec 文件。",-1))]),s[31]||(s[31]=l(`<p>请注意，一个源 RPM 可能包含构建多个 RPM 的说明。<code>fpaste</code> 是一款非常简单的软件，一个源 RPM 生成一个“二进制” RPM。而 Python 则更复杂。虽然只有一个源 RPM，但它会生成多个二进制 RPM：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf repoquery --qf &quot;%{SOURCERPM}&quot; python3</span></span>
<span class="line"><span>python3-3.7.3-1.fc30.src.rpm</span></span>
<span class="line"><span>python3-3.7.4-1.fc30.src.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo dnf repoquery --qf &quot;%{SOURCERPM}&quot; python3-devel</span></span>
<span class="line"><span>python3-3.7.3-1.fc30.src.rpm</span></span>
<span class="line"><span>python3-3.7.4-1.fc30.src.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo dnf repoquery --qf &quot;%{SOURCERPM}&quot; python3-libs</span></span>
<span class="line"><span>python3-3.7.3-1.fc30.src.rpm</span></span>
<span class="line"><span>python3-3.7.4-1.fc30.src.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo dnf repoquery --qf &quot;%{SOURCERPM}&quot; python3-idle</span></span>
<span class="line"><span>python3-3.7.3-1.fc30.src.rpm</span></span>
<span class="line"><span>python3-3.7.4-1.fc30.src.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo dnf repoquery --qf &quot;%{SOURCERPM}&quot; python3-tkinter</span></span>
<span class="line"><span>python3-3.7.3-1.fc30.src.rpm</span></span>
<span class="line"><span>python3-3.7.4-1.fc30.src.rpm</span></span></code></pre></div><p>用 RPM 行话来讲，“python3” 是“主包”，因此该 spec 文件将称为 <code>python3.spec</code>。所有其他软件包均为“子软件包”。你可以下载 python3 的源 RPM，并查看其中的内容。（提示：补丁也是源代码的一部分）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf download --source python3</span></span>
<span class="line"><span>python3-3.7.4-1.fc30.src.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ rpm -qpl ./python3-3.7.4-1.fc30.src.rpm</span></span>
<span class="line"><span>00001-rpath.patch</span></span>
<span class="line"><span>00102-lib64.patch</span></span>
<span class="line"><span>00111-no-static-lib.patch</span></span>
<span class="line"><span>00155-avoid-ctypes-thunks.patch</span></span>
<span class="line"><span>00170-gc-assertions.patch</span></span>
<span class="line"><span>00178-dont-duplicate-flags-in-sysconfig.patch</span></span>
<span class="line"><span>00189-use-rpm-wheels.patch</span></span>
<span class="line"><span>00205-make-libpl-respect-lib64.patch</span></span>
<span class="line"><span>00251-change-user-install-location.patch</span></span>
<span class="line"><span>00274-fix-arch-names.patch</span></span>
<span class="line"><span>00316-mark-bdist_wininst-unsupported.patch</span></span>
<span class="line"><span>Python-3.7.4.tar.xz</span></span>
<span class="line"><span>check-pyc-timestamps.py</span></span>
<span class="line"><span>idle3.appdata.xml</span></span>
<span class="line"><span>idle3.desktop</span></span>
<span class="line"><span>python3.spec</span></span></code></pre></div><h3 id="从源-rpm-构建-rpm" tabindex="-1">从源 RPM 构建 RPM <a class="header-anchor" href="#从源-rpm-构建-rpm" aria-label="Permalink to “从源 RPM 构建 RPM”">​</a></h3><p>现在我们有了源 RPM，并且其中有什么内容，我们可以从中重建 RPM。但是，在执行此操作之前，我们应该设置系统以构建 RPM。首先，我们安装必需的工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install fedora-packager</span></span></code></pre></div><p>这将安装 <code>rpmbuild</code> 工具。<code>rpmbuild</code> 需要一个默认布局，以便它知道源 RPM 中每个必需组件的位置。让我们看看它们是什么：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># spec 文件将出现在哪里？</span></span>
<span class="line"><span>$ rpm -E %{_specdir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/SPECS</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 源代码将出现在哪里？</span></span>
<span class="line"><span>$ rpm -E %{_sourcedir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/SOURCES</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 临时构建目录是哪里？</span></span>
<span class="line"><span>$ rpm -E %{_builddir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/BUILD</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 构建根目录是哪里？</span></span>
<span class="line"><span>$ rpm -E %{_buildrootdir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/BUILDROOT</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 源 RPM 将放在哪里？</span></span>
<span class="line"><span>$ rpm -E %{_srcrpmdir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/SRPMS</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 构建的 RPM 将放在哪里？</span></span>
<span class="line"><span>$ rpm -E %{_rpmdir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/RPMS</span></span></code></pre></div><p>我已经在系统上设置了所有这些目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd</span></span>
<span class="line"><span>$ tree -L 1 rpmbuild/</span></span>
<span class="line"><span>rpmbuild/</span></span>
<span class="line"><span>├── BUILD</span></span>
<span class="line"><span>├── BUILDROOT</span></span>
<span class="line"><span>├── RPMS</span></span>
<span class="line"><span>├── SOURCES</span></span>
<span class="line"><span>├── SPECS</span></span>
<span class="line"><span>└── SRPMS</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6 directories, 0 files</span></span></code></pre></div><p>RPM 还提供了一个为你全部设置好的工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpmdev-setuptree</span></span></code></pre></div><p>然后，确保已安装 <code>fpaste</code> 的所有构建依赖项：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo dnf builddep fpaste-0.3.9.2-3.fc30.src.rpm</span></span></code></pre></div><p>对于 <code>fpaste</code>，你只需要 Python，并且它肯定已经安装在你的系统上（<code>dnf</code> 也使用 Python）。还可以给 <code>builddep</code> 命令一个 spec 文件，而不是源 RPM。在手册页中了解更多信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ man dnf.plugin.builddep</span></span></code></pre></div><p>现在我们有了所需的一切，从源 RPM 构建一个 RPM 就像这样简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpmbuild --rebuild fpaste-0.3.9.2-3.fc30.src.rpm</span></span>
<span class="line"><span>..</span></span>
<span class="line"><span>..</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ tree ~/rpmbuild/RPMS/noarch/</span></span>
<span class="line"><span>/home/asinha/rpmbuild/RPMS/noarch/</span></span>
<span class="line"><span>└── fpaste-0.3.9.2-3.fc30.noarch.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0 directories, 1 file</span></span></code></pre></div><p><code>rpmbuild</code> 将安装源 RPM 并从中构建你的 RPM。现在，你可以使用 <code>dnf</code> 安装 RPM 以使用它。当然，如前所述，如果你想在 RPM 中进行任何更改，则必须修改 spec 文件，我们将在下一篇文章中介绍 spec 文件。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>总结一下这篇文章有两点：</p><ul><li>我们通常安装使用的 RPM 是包含软件的构建版本的 “二进制” RPM</li><li>构建 RPM 来自于源 RPM，源 RPM 包括用于生成二进制 RPM 所需的源代码和规范文件。</li></ul>`,23)),n("p",null,[s[9]||(s[9]=a("如果你想开始构建 RPM，并帮助 Fedora 社区维护我们提供的大量软件，则可以从这里开始： ",-1)),e(p,{href:"https://fedoraproject.org/wiki/Join_the_package_collection_maintainers"},{default:i(()=>[...s[8]||(s[8]=[a("https://fedoraproject.org/wiki/Join_the_package_collection_maintainers",-1)])]),_:1})]),n("p",null,[s[11]||(s[11]=a("如有任何疑问，请发邮件到 ",-1)),e(p,{href:"https://lists.fedoraproject.org/archives/list/devel@lists.fedoraproject.org/"},{default:i(()=>[...s[10]||(s[10]=[a("Fedora 开发人员邮件列表",-1)])]),_:1}),s[12]||(s[12]=a("，我们随时乐意为你提供帮助！",-1))]),s[32]||(s[32]=n("hr",null,null,-1)),n("p",null,[s[14]||(s[14]=a("via: ",-1)),e(p,{href:"https://fedoramagazine.org/how-rpm-packages-are-made-the-source-rpm/"},{default:i(()=>[...s[13]||(s[13]=[a("https://fedoramagazine.org/how-rpm-packages-are-made-the-source-rpm/",-1)])]),_:1})]),n("p",null,[s[19]||(s[19]=a("作者：",-1)),e(p,{href:"https://fedoramagazine.org/author/ankursinha/"},{default:i(()=>[...s[15]||(s[15]=[a('Ankur Sinha "FranciscoD"',-1)])]),_:1}),s[20]||(s[20]=a(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[16]||(s[16]=[a("lujun9972",-1)])]),_:1}),s[21]||(s[21]=a(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[17]||(s[17]=[a("wxy",-1)])]),_:1}),s[22]||(s[22]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[18]||(s[18]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[25]||(s[25]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[23]||(s[23]=[a("LCTT",-1)])]),_:1}),s[26]||(s[26]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[24]||(s[24]=[a("Linux中国",-1)])]),_:1}),s[27]||(s[27]=a(" 荣誉推出",-1))])])}const M=t(c,[["render",h]]);export{R as __pageData,M as default};
