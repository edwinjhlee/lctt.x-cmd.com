import{_ as t,a0 as r,w as o,s as d,I as n,x as a,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const R=JSON.parse('{"title":"RPM 包是如何從源 RPM 製作的 | LCTT x X-CMD","titleTemplate":false,"description":"RPM 包是如何從源 RPM 製作的 | LCTT (201911) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RPM 包是如何從源 RPM 製作的 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RPM 包是如何從源 RPM 製作的 | LCTT (201911) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201911/20190826 How RPM packages are made- the source RPM","title":"RPM 包是如何從源 RPM 製作的","tag":"201911","desc":""},"relativePath":"201911/20190826 How RPM packages are made- the source RPM.md","filePath":"[post].md"}'),c={name:"201911/20190826 How RPM packages are made- the source RPM.md"};function h(u,s,g,f,k,b){const p=r("Link");return o(),d("div",null,[s[28]||(s[28]=n("h1",{id:"rpm-包是如何從源-rpm-製作的",tabindex:"-1"},[a("RPM 包是如何從源 RPM 製作的 "),n("a",{class:"header-anchor",href:"#rpm-包是如何從源-rpm-製作的","aria-label":"Permalink to “RPM 包是如何從源 RPM 製作的”"},"​")],-1)),s[29]||(s[29]=n("p",null,[n("img",{src:"https://fedoramagazine.org/wp-content/uploads/2019/06/rpm.png-816x345.jpg",alt:""})],-1)),n("p",null,[s[1]||(s[1]=a("在",-1)),e(p,{href:"https://linux.cn/article-11452-1.html"},{default:i(()=>[...s[0]||(s[0]=[a("上一篇文章中，我們研究了什麼是 RPM 軟件包",-1)])]),_:1}),s[2]||(s[2]=a("。它們是包含文件和元數據的檔案文件。當安裝或卸載 RPM 時，此元數據告訴 RPM 在哪裏創建或刪除文件。正如你將在上一篇文章中記住的，元數據還包含有關“依賴項”的信息，它可以是“運行時”或“構建時”的依賴信息。",-1))]),s[30]||(s[30]=l(`<p>例如，讓我們來看看 <code>fpaste</code>。你可以使用 <code>dnf</code> 下載該 RPM。這將下載 Fedora 存儲庫中可用的 <code>fpaste</code> 最新版本。在 Fedora 30 上，當前版本為 0.3.9.2：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf download fpaste</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>fpaste-0.3.9.2-2.fc30.noarch.rpm</span></span></code></pre></div><p>由於這是個構建 RPM，因此它僅包含使用 <code>fpaste</code> 所需的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpm -qpl ./fpaste-0.3.9.2-2.fc30.noarch.rpm</span></span>
<span class="line"><span>/usr/bin/fpaste</span></span>
<span class="line"><span>/usr/share/doc/fpaste</span></span>
<span class="line"><span>/usr/share/doc/fpaste/README.rst</span></span>
<span class="line"><span>/usr/share/doc/fpaste/TODO</span></span>
<span class="line"><span>/usr/share/licenses/fpaste</span></span>
<span class="line"><span>/usr/share/licenses/fpaste/COPYING</span></span>
<span class="line"><span>/usr/share/man/man1/fpaste.1.gz</span></span></code></pre></div><h3 id="源-rpm" tabindex="-1">源 RPM <a class="header-anchor" href="#源-rpm" aria-label="Permalink to “源 RPM”">​</a></h3><p>在此鏈條中的下一個環節是源 RPM。Fedora 中的所有軟件都必須從其源代碼構建。我們不包括預構建的二進制文件。因此，要製作一個 RPM 文件，RPM（工具）需要：</p><ul><li>給出必須要安裝的文件，</li><li>例如，如果要編譯出這些文件，則告訴它們如何生成這些文件，</li><li>告知必須在何處安裝這些文件，</li><li>該特定軟件需要其他哪些依賴才能正常工作。</li></ul><p>源 RPM 擁有所有這些信息。源 RPM 與構建 RPM 相似，但顧名思義，它們不包含已構建的二進制文件，而是包含某個軟件的源文件。讓我們下載 <code>fpaste</code> 的源 RPM：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf download fpaste --source</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>fpaste-0.3.9.2-2.fc30.src.rpm</span></span></code></pre></div><p>注意文件的結尾是 <code>src.rpm</code>。所有的 RPM 都是從源 RPM 構建的。你也可以使用 <code>dnf</code> 輕鬆檢查“二進制” RPM 的源 RPM：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf repoquery --qf &quot;%{SOURCERPM}&quot; fpaste</span></span>
<span class="line"><span>fpaste-0.3.9.2-2.fc30.src.rpm</span></span></code></pre></div><p>另外，由於這是源 RPM，因此它不包含構建的文件。相反，它包含有關如何從中構建 RPM 的源代碼和指令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpm -qpl ./fpaste-0.3.9.2-2.fc30.src.rpm</span></span>
<span class="line"><span>fpaste-0.3.9.2.tar.gz</span></span>
<span class="line"><span>fpaste.spec</span></span></code></pre></div>`,13)),n("p",null,[s[4]||(s[4]=a("這裏，第一個文件只是 ",-1)),s[5]||(s[5]=n("code",null,"fpaste",-1)),s[6]||(s[6]=a(" 的源代碼。第二個是 spec 文件。spec 文件是個配方，可告訴 RPM（工具）如何使用源 RPM 中包含的源代碼創建 RPM（檔案文件）— 它包含 RPM（工具）構建 RPM（檔案文件）所需的所有信息。在 spec 文件中。當我們軟件包維護人員添加軟件到 Fedora 中時，我們大部分時間都花在編寫和完善 spec 文件上。當軟件包需要更新時，我們會回過頭來調整 spec 文件。你可以在 ",-1)),e(p,{href:"https://src.fedoraproject.org/browse/projects/"},{default:i(()=>[...s[3]||(s[3]=[a("https://src.fedoraproject.org/browse/projects/",-1)])]),_:1}),s[7]||(s[7]=a(" 的源代碼存儲庫中查看 Fedora 中所有軟件包的 spec 文件。",-1))]),s[31]||(s[31]=l(`<p>請注意，一個源 RPM 可能包含構建多個 RPM 的説明。<code>fpaste</code> 是一款非常簡單的軟件，一個源 RPM 生成一個“二進制” RPM。而 Python 則更復雜。雖然只有一個源 RPM，但它會生成多個二進制 RPM：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf repoquery --qf &quot;%{SOURCERPM}&quot; python3</span></span>
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
<span class="line"><span>python3-3.7.4-1.fc30.src.rpm</span></span></code></pre></div><p>用 RPM 行話來講，“python3” 是“主包”，因此該 spec 文件將稱為 <code>python3.spec</code>。所有其他軟件包均為“子軟件包”。你可以下載 python3 的源 RPM，並查看其中的內容。（提示：補丁也是源代碼的一部分）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf download --source python3</span></span>
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
<span class="line"><span>python3.spec</span></span></code></pre></div><h3 id="從源-rpm-構建-rpm" tabindex="-1">從源 RPM 構建 RPM <a class="header-anchor" href="#從源-rpm-構建-rpm" aria-label="Permalink to “從源 RPM 構建 RPM”">​</a></h3><p>現在我們有了源 RPM，並且其中有什麼內容，我們可以從中重建 RPM。但是，在執行此操作之前，我們應該設置系統以構建 RPM。首先，我們安裝必需的工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install fedora-packager</span></span></code></pre></div><p>這將安裝 <code>rpmbuild</code> 工具。<code>rpmbuild</code> 需要一個默認佈局，以便它知道源 RPM 中每個必需組件的位置。讓我們看看它們是什麼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># spec 文件將出現在哪裏？</span></span>
<span class="line"><span>$ rpm -E %{_specdir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/SPECS</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 源代碼將出現在哪裏？</span></span>
<span class="line"><span>$ rpm -E %{_sourcedir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/SOURCES</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 臨時構建目錄是哪裏？</span></span>
<span class="line"><span>$ rpm -E %{_builddir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/BUILD</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 構建根目錄是哪裏？</span></span>
<span class="line"><span>$ rpm -E %{_buildrootdir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/BUILDROOT</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 源 RPM 將放在哪裏？</span></span>
<span class="line"><span>$ rpm -E %{_srcrpmdir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/SRPMS</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 構建的 RPM 將放在哪裏？</span></span>
<span class="line"><span>$ rpm -E %{_rpmdir}</span></span>
<span class="line"><span>/home/asinha/rpmbuild/RPMS</span></span></code></pre></div><p>我已經在系統上設置了所有這些目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd</span></span>
<span class="line"><span>$ tree -L 1 rpmbuild/</span></span>
<span class="line"><span>rpmbuild/</span></span>
<span class="line"><span>├── BUILD</span></span>
<span class="line"><span>├── BUILDROOT</span></span>
<span class="line"><span>├── RPMS</span></span>
<span class="line"><span>├── SOURCES</span></span>
<span class="line"><span>├── SPECS</span></span>
<span class="line"><span>└── SRPMS</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6 directories, 0 files</span></span></code></pre></div><p>RPM 還提供了一個為你全部設置好的工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpmdev-setuptree</span></span></code></pre></div><p>然後，確保已安裝 <code>fpaste</code> 的所有構建依賴項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo dnf builddep fpaste-0.3.9.2-3.fc30.src.rpm</span></span></code></pre></div><p>對於 <code>fpaste</code>，你只需要 Python，並且它肯定已經安裝在你的系統上（<code>dnf</code> 也使用 Python）。還可以給 <code>builddep</code> 命令一個 spec 文件，而不是源 RPM。在手冊頁中瞭解更多信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ man dnf.plugin.builddep</span></span></code></pre></div><p>現在我們有了所需的一切，從源 RPM 構建一個 RPM 就像這樣簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpmbuild --rebuild fpaste-0.3.9.2-3.fc30.src.rpm</span></span>
<span class="line"><span>..</span></span>
<span class="line"><span>..</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ tree ~/rpmbuild/RPMS/noarch/</span></span>
<span class="line"><span>/home/asinha/rpmbuild/RPMS/noarch/</span></span>
<span class="line"><span>└── fpaste-0.3.9.2-3.fc30.noarch.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>0 directories, 1 file</span></span></code></pre></div><p><code>rpmbuild</code> 將安裝源 RPM 並從中構建你的 RPM。現在，你可以使用 <code>dnf</code> 安裝 RPM 以使用它。當然，如前所述，如果你想在 RPM 中進行任何更改，則必須修改 spec 文件，我們將在下一篇文章中介紹 spec 文件。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>總結一下這篇文章有兩點：</p><ul><li>我們通常安裝使用的 RPM 是包含軟件的構建版本的 “二進制” RPM</li><li>構建 RPM 來自於源 RPM，源 RPM 包括用於生成二進制 RPM 所需的源代碼和規範文件。</li></ul>`,23)),n("p",null,[s[9]||(s[9]=a("如果你想開始構建 RPM，並幫助 Fedora 社區維護我們提供的大量軟件，則可以從這裏開始： ",-1)),e(p,{href:"https://fedoraproject.org/wiki/Join_the_package_collection_maintainers"},{default:i(()=>[...s[8]||(s[8]=[a("https://fedoraproject.org/wiki/Join_the_package_collection_maintainers",-1)])]),_:1})]),n("p",null,[s[11]||(s[11]=a("如有任何疑問，請發郵件到 ",-1)),e(p,{href:"https://lists.fedoraproject.org/archives/list/devel@lists.fedoraproject.org/"},{default:i(()=>[...s[10]||(s[10]=[a("Fedora 開發人員郵件列表",-1)])]),_:1}),s[12]||(s[12]=a("，我們隨時樂意為你提供幫助！",-1))]),s[32]||(s[32]=n("hr",null,null,-1)),n("p",null,[s[14]||(s[14]=a("via: ",-1)),e(p,{href:"https://fedoramagazine.org/how-rpm-packages-are-made-the-source-rpm/"},{default:i(()=>[...s[13]||(s[13]=[a("https://fedoramagazine.org/how-rpm-packages-are-made-the-source-rpm/",-1)])]),_:1})]),n("p",null,[s[19]||(s[19]=a("作者：",-1)),e(p,{href:"https://fedoramagazine.org/author/ankursinha/"},{default:i(()=>[...s[15]||(s[15]=[a('Ankur Sinha "FranciscoD"',-1)])]),_:1}),s[20]||(s[20]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[16]||(s[16]=[a("lujun9972",-1)])]),_:1}),s[21]||(s[21]=a(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[17]||(s[17]=[a("wxy",-1)])]),_:1}),s[22]||(s[22]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[18]||(s[18]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[25]||(s[25]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[23]||(s[23]=[a("LCTT",-1)])]),_:1}),s[26]||(s[26]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[24]||(s[24]=[a("Linux中國",-1)])]),_:1}),s[27]||(s[27]=a(" 榮譽推出",-1))])])}const M=t(c,[["render",h]]);export{R as __pageData,M as default};
