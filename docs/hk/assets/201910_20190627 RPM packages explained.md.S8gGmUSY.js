import{_ as i,a0 as o,w as r,s as d,I as a,x as s,a1 as e,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"RPM 包初窺 | LCTT x X-CMD","titleTemplate":false,"description":"RPM 包初窺 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RPM 包初窺 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RPM 包初窺 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20190627 RPM packages explained","title":"RPM 包初窺","tag":"201910","desc":""},"relativePath":"201910/20190627 RPM packages explained.md","filePath":"[post].md"}'),c={name:"201910/20190627 RPM packages explained.md"};function h(f,n,g,u,y,m){const p=o("Link");return r(),d("div",null,[n[53]||(n[53]=a("h1",{id:"rpm-包初窺",tabindex:"-1"},[s("RPM 包初窺 "),a("a",{class:"header-anchor",href:"#rpm-包初窺","aria-label":"Permalink to “RPM 包初窺”"},"​")],-1)),n[54]||(n[54]=a("p",null,[a("img",{src:"https://fedoramagazine.org/wp-content/uploads/2019/06/rpm.png-816x345.jpg",alt:""})],-1)),a("p",null,[n[2]||(n[2]=s("也許，Fedora 社區追求其",-1)),e(p,{href:"https://docs.fedoraproject.org/en-US/project/#_what_is_fedora_all_about"},{default:l(()=>[...n[0]||(n[0]=[s("促進自由和開源的軟件及內容的使命",-1)])]),_:1}),n[3]||(n[3]=s("的最著名的方式就是開發 ",-1)),e(p,{href:"https://getfedora.org"},{default:l(()=>[...n[1]||(n[1]=[s("Fedora 軟件發行版",-1)])]),_:1}),n[4]||(n[4]=s("了。因此，我們將很大一部分的社區資源用於此任務也就不足為奇了。這篇文章總結了這些軟件是如何“打包”的，以及使之成為可能的基礎工具，如 ",-1)),n[5]||(n[5]=a("code",null,"rpm",-1)),n[6]||(n[6]=s(" 之類。",-1))]),n[55]||(n[55]=a("h3",{id:"rpm-最小的軟件單元",tabindex:"-1"},[s("RPM：最小的軟件單元 "),a("a",{class:"header-anchor",href:"#rpm-最小的軟件單元","aria-label":"Permalink to “RPM：最小的軟件單元”"},"​")],-1)),a("p",null,[n[10]||(n[10]=s("可供用户選擇的“版本”和“風味版”（",-1)),e(p,{href:"https://spins.fedoraproject.org/"},{default:l(()=>[...n[7]||(n[7]=[s("spins",-1)])]),_:1}),n[11]||(n[11]=s(" / ",-1)),e(p,{href:"https://labs.fedoraproject.org/"},{default:l(()=>[...n[8]||(n[8]=[s("labs",-1)])]),_:1}),n[12]||(n[12]=s(" / ",-1)),e(p,{href:"https://silverblue.fedoraproject.org/"},{default:l(()=>[...n[9]||(n[9]=[s("silverblue",-1)])]),_:1}),n[13]||(n[13]=s("）其實非常相似。它們都是由各種軟件組成的，這些軟件經過混合和搭配，可以很好地協同工作。它們之間的不同之處在於放入其中的具體工具不同。這種選擇取決於它們所針對的用例。所有這些的“版本”和“風味版”基本組成單位都是 RPM 軟件包文件。",-1))]),n[56]||(n[56]=t(`<p>RPM 文件是類似於 ZIP 文件或 tarball 的存檔文件。實際上，它們使用了壓縮來減小存檔文件的大小。但是，除了文件之外，RPM 存檔中還包含有關軟件包的元數據。可以使用 <code>rpm</code> 工具查詢：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpm -q fpaste</span></span>
<span class="line"><span>fpaste-0.3.9.2-2.fc30.noarch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ rpm -qi fpaste</span></span>
<span class="line"><span>Name        : fpaste</span></span>
<span class="line"><span>Version     : 0.3.9.2</span></span>
<span class="line"><span>Release     : 2.fc30</span></span>
<span class="line"><span>Architecture: noarch</span></span>
<span class="line"><span>Install Date: Tue 26 Mar 2019 08:49:10 GMT</span></span>
<span class="line"><span>Group       : Unspecified</span></span>
<span class="line"><span>Size        : 64144</span></span>
<span class="line"><span>License     : GPLv3+</span></span>
<span class="line"><span>Signature   : RSA/SHA256, Thu 07 Feb 2019 15:46:11 GMT, Key ID ef3c111fcfc659b9</span></span>
<span class="line"><span>Source RPM  : fpaste-0.3.9.2-2.fc30.src.rpm</span></span>
<span class="line"><span>Build Date  : Thu 31 Jan 2019 20:06:01 GMT</span></span>
<span class="line"><span>Build Host  : buildhw-07.phx2.fedoraproject.org</span></span>
<span class="line"><span>Relocations : (not relocatable)</span></span>
<span class="line"><span>Packager    : Fedora Project</span></span>
<span class="line"><span>Vendor      : Fedora Project</span></span>
<span class="line"><span>URL         : https://pagure.io/fpaste</span></span>
<span class="line"><span>Bug URL     : https://bugz.fedoraproject.org/fpaste</span></span>
<span class="line"><span>Summary     : A simple tool for pasting info onto sticky notes instances</span></span>
<span class="line"><span>Description :</span></span>
<span class="line"><span>It is often useful to be able to easily paste text to the Fedora</span></span>
<span class="line"><span>Pastebin at http://paste.fedoraproject.org and this simple script</span></span>
<span class="line"><span>will do that and return the resulting URL so that people may</span></span>
<span class="line"><span>examine the output. This can hopefully help folks who are for</span></span>
<span class="line"><span>some reason stuck without X, working remotely, or any other</span></span>
<span class="line"><span>reason they may be unable to paste something into the pastebin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ rpm -ql fpaste</span></span>
<span class="line"><span>/usr/bin/fpaste</span></span>
<span class="line"><span>/usr/share/doc/fpaste</span></span>
<span class="line"><span>/usr/share/doc/fpaste/README.rst</span></span>
<span class="line"><span>/usr/share/doc/fpaste/TODO</span></span>
<span class="line"><span>/usr/share/licenses/fpaste</span></span>
<span class="line"><span>/usr/share/licenses/fpaste/COPYING</span></span>
<span class="line"><span>/usr/share/man/man1/fpaste.1.gz</span></span></code></pre></div><p>安裝 RPM 軟件包後，<code>rpm</code> 工具可以知道具體哪些文件被添加到了系統中。因此，刪除該軟件包也會刪除這些文件，並使系統保持一致狀態。這就是為什麼要儘可能地使用 <code>rpm</code> 安裝軟件，而不是從源代碼安裝軟件的原因。</p><h3 id="依賴關係" tabindex="-1">依賴關係 <a class="header-anchor" href="#依賴關係" aria-label="Permalink to “依賴關係”">​</a></h3>`,4)),a("p",null,[n[15]||(n[15]=s("如今，完全獨立的軟件已經非常罕見。甚至 ",-1)),e(p,{href:"https://src.fedoraproject.org/rpms/fpaste"},{default:l(()=>[...n[14]||(n[14]=[s("fpaste",-1)])]),_:1}),n[16]||(n[16]=s("，連這樣一個簡單的單個文件的 Python 腳本，都需要安裝 Python 解釋器。因此，如果系統未安裝 Python（幾乎不可能，但有可能），則無法使用 ",-1)),n[17]||(n[17]=a("code",null,"fpaste",-1)),n[18]||(n[18]=s("。用打包者的術語來説，“Python 是 ",-1)),n[19]||(n[19]=a("code",null,"fpaste",-1)),n[20]||(n[20]=s(" 的",-1)),n[21]||(n[21]=a("strong",null,"運行時依賴項",-1)),n[22]||(n[22]=s("。”",-1))]),n[57]||(n[57]=t(`<p>構建 RPM 軟件包時（本文不討論構建 RPM 的過程），生成的歸檔文件中包括了所有這些元數據。這樣，與 RPM 軟件包歸檔文件交互的工具就知道必須要安裝其它的什麼東西，以便 <code>fpaste</code> 可以正常工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpm -q --requires fpaste</span></span>
<span class="line"><span>/usr/bin/python3</span></span>
<span class="line"><span>python3</span></span>
<span class="line"><span>rpmlib(CompressedFileNames) &amp;lt;= 3.0.4-1</span></span>
<span class="line"><span>rpmlib(FileDigests) &amp;lt;= 4.6.0-1</span></span>
<span class="line"><span>rpmlib(PayloadFilesHavePrefix) &amp;lt;= 4.0-1</span></span>
<span class="line"><span>rpmlib(PayloadIsXz) &amp;lt;= 5.2-1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ rpm -q --provides fpaste</span></span>
<span class="line"><span>fpaste = 0.3.9.2-2.fc30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ rpm -qi python3</span></span>
<span class="line"><span>Name        : python3</span></span>
<span class="line"><span>Version     : 3.7.3</span></span>
<span class="line"><span>Release     : 3.fc30</span></span>
<span class="line"><span>Architecture: x86_64</span></span>
<span class="line"><span>Install Date: Thu 16 May 2019 18:51:41 BST</span></span>
<span class="line"><span>Group       : Unspecified</span></span>
<span class="line"><span>Size        : 46139</span></span>
<span class="line"><span>License     : Python</span></span>
<span class="line"><span>Signature   : RSA/SHA256, Sat 11 May 2019 17:02:44 BST, Key ID ef3c111fcfc659b9</span></span>
<span class="line"><span>Source RPM  : python3-3.7.3-3.fc30.src.rpm</span></span>
<span class="line"><span>Build Date  : Sat 11 May 2019 01:47:35 BST</span></span>
<span class="line"><span>Build Host  : buildhw-05.phx2.fedoraproject.org</span></span>
<span class="line"><span>Relocations : (not relocatable)</span></span>
<span class="line"><span>Packager    : Fedora Project</span></span>
<span class="line"><span>Vendor      : Fedora Project</span></span>
<span class="line"><span>URL         : https://www.python.org/</span></span>
<span class="line"><span>Bug URL     : https://bugz.fedoraproject.org/python3</span></span>
<span class="line"><span>Summary     : Interpreter of the Python programming language</span></span>
<span class="line"><span>Description :</span></span>
<span class="line"><span>Python is an accessible, high-level, dynamically typed, interpreted programming</span></span>
<span class="line"><span>language, designed with an emphasis on code readability.</span></span>
<span class="line"><span>It includes an extensive standard library, and has a vast ecosystem of</span></span>
<span class="line"><span>third-party libraries.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The python3 package provides the &quot;python3&quot; executable: the reference</span></span>
<span class="line"><span>interpreter for the Python language, version 3.</span></span>
<span class="line"><span>The majority of its standard library is provided in the python3-libs package,</span></span>
<span class="line"><span>which should be installed automatically along with python3.</span></span>
<span class="line"><span>The remaining parts of the Python standard library are broken out into the</span></span>
<span class="line"><span>python3-tkinter and python3-test packages, which may need to be installed</span></span>
<span class="line"><span>separately.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Documentation for Python is provided in the python3-docs package.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Packages containing additional libraries for Python are generally named with</span></span>
<span class="line"><span>the &quot;python3-&quot; prefix.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ rpm -q --provides python3</span></span>
<span class="line"><span>python(abi) = 3.7</span></span>
<span class="line"><span>python3 = 3.7.3-3.fc30</span></span>
<span class="line"><span>python3(x86-64) = 3.7.3-3.fc30</span></span>
<span class="line"><span>python3.7 = 3.7.3-3.fc30</span></span>
<span class="line"><span>python37 = 3.7.3-3.fc30</span></span></code></pre></div><h3 id="解決-rpm-依賴關係" tabindex="-1">解決 RPM 依賴關係 <a class="header-anchor" href="#解決-rpm-依賴關係" aria-label="Permalink to “解決 RPM 依賴關係”">​</a></h3><p>雖然 <code>rpm</code> 知道每個歸檔文件所需的依賴關係，但不知道在哪裏找到它們。這是設計使然：<code>rpm</code> 僅適用於本地文件，必須具體告知它們的位置。因此，如果你嘗試安裝單個 RPM 軟件包，則 <code>rpm</code> 找不到該軟件包的運行時依賴項時就會出錯。本示例嘗試安裝從 Fedora 軟件包集中下載的軟件包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>python3-elephant-0.6.2-3.fc30.noarch.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ rpm -qpi python3-elephant-0.6.2-3.fc30.noarch.rpm</span></span>
<span class="line"><span>Name        : python3-elephant</span></span>
<span class="line"><span>Version     : 0.6.2</span></span>
<span class="line"><span>Release     : 3.fc30</span></span>
<span class="line"><span>Architecture: noarch</span></span>
<span class="line"><span>Install Date: (not installed)</span></span>
<span class="line"><span>Group       : Unspecified</span></span>
<span class="line"><span>Size        : 2574456</span></span>
<span class="line"><span>License     : BSD</span></span>
<span class="line"><span>Signature   : (none)</span></span>
<span class="line"><span>Source RPM  : python-elephant-0.6.2-3.fc30.src.rpm</span></span>
<span class="line"><span>Build Date  : Fri 14 Jun 2019 17:23:48 BST</span></span>
<span class="line"><span>Build Host  : buildhw-02.phx2.fedoraproject.org</span></span>
<span class="line"><span>Relocations : (not relocatable)</span></span>
<span class="line"><span>Packager    : Fedora Project</span></span>
<span class="line"><span>Vendor      : Fedora Project</span></span>
<span class="line"><span>URL         : http://neuralensemble.org/elephant</span></span>
<span class="line"><span>Bug URL     : https://bugz.fedoraproject.org/python-elephant</span></span>
<span class="line"><span>Summary     : Elephant is a package for analysis of electrophysiology data in Python</span></span>
<span class="line"><span>Description :</span></span>
<span class="line"><span>Elephant - Electrophysiology Analysis Toolkit Elephant is a package for the</span></span>
<span class="line"><span>analysis of neurophysiology data, based on Neo.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ rpm -qp --requires python3-elephant-0.6.2-3.fc30.noarch.rpm</span></span>
<span class="line"><span>python(abi) = 3.7</span></span>
<span class="line"><span>python3.7dist(neo) &gt;= 0.7.1</span></span>
<span class="line"><span>python3.7dist(numpy) &gt;= 1.8.2</span></span>
<span class="line"><span>python3.7dist(quantities) &gt;= 0.10.1</span></span>
<span class="line"><span>python3.7dist(scipy) &gt;= 0.14.0</span></span>
<span class="line"><span>python3.7dist(six) &gt;= 1.10.0</span></span>
<span class="line"><span>rpmlib(CompressedFileNames) &amp;lt;= 3.0.4-1</span></span>
<span class="line"><span>rpmlib(FileDigests) &amp;lt;= 4.6.0-1</span></span>
<span class="line"><span>rpmlib(PartialHardlinkSets) &amp;lt;= 4.0.4-1</span></span>
<span class="line"><span>rpmlib(PayloadFilesHavePrefix) &amp;lt;= 4.0-1</span></span>
<span class="line"><span>rpmlib(PayloadIsXz) &amp;lt;= 5.2-1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo rpm -i ./python3-elephant-0.6.2-3.fc30.noarch.rpm</span></span>
<span class="line"><span>error: Failed dependencies:</span></span>
<span class="line"><span>        python3.7dist(neo) &gt;= 0.7.1 is needed by python3-elephant-0.6.2-3.fc30.noarch</span></span>
<span class="line"><span>        python3.7dist(quantities) &gt;= 0.10.1 is needed by python3-elephant-0.6.2-3.fc30.noarch</span></span></code></pre></div><p>理論上，你可以下載 <code>python3-elephant</code> 所需的所有軟件包，並告訴 <code>rpm</code> 它們都在哪裏，但這並不方便。如果 <code>python3-neo</code> 和 <code>python3-quantities</code> 還有其它的運行時要求怎麼辦？很快，這種“依賴鏈”就會變得相當複雜。</p><h4 id="存儲庫" tabindex="-1">存儲庫 <a class="header-anchor" href="#存儲庫" aria-label="Permalink to “存儲庫”">​</a></h4><p>幸運的是，有了 <code>dnf</code> 和它的朋友們，可以幫助解決此問題。與 <code>rpm</code> 不同，<code>dnf</code> 能感知到<strong>存儲庫</strong>。存儲庫是程序包的集合，帶有告訴 <code>dnf</code> 這些存儲庫包含什麼內容的元數據。所有 Fedora 系統都帶有默認啓用的默認 Fedora 存儲庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf repolist</span></span>
<span class="line"><span>repo id              repo name                             status</span></span>
<span class="line"><span>fedora               Fedora 30 - x86_64                    56,582</span></span>
<span class="line"><span>fedora-modular       Fedora Modular 30 - x86_64               135</span></span>
<span class="line"><span>updates              Fedora 30 - x86_64 - Updates           8,573</span></span>
<span class="line"><span>updates-modular      Fedora Modular 30 - x86_64 - Updates     138</span></span>
<span class="line"><span>updates-testing      Fedora 30 - x86_64 - Test Updates      8,458</span></span></code></pre></div>`,9)),a("p",null,[n[25]||(n[25]=s("在 Fedora 快速文檔中有",-1)),e(p,{href:"https://docs.fedoraproject.org/en-US/quick-docs/repositories/"},{default:l(()=>[...n[23]||(n[23]=[s("這些存儲庫",-1)])]),_:1}),n[26]||(n[26]=s("以及",-1)),e(p,{href:"https://docs.fedoraproject.org/en-US/quick-docs/adding-or-removing-software-repositories-in-fedora/"},{default:l(()=>[...n[24]||(n[24]=[s("如何管理",-1)])]),_:1}),n[27]||(n[27]=s("它們的更多信息。",-1))]),n[58]||(n[58]=t(`<p><code>dnf</code> 可用於查詢存儲庫以獲取有關它們包含的軟件包信息。它還可以在這些存儲庫中搜索軟件，或從中安裝/卸載/升級軟件包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf search elephant</span></span>
<span class="line"><span>Last metadata expiration check: 0:05:21 ago on Sun 23 Jun 2019 14:33:38 BST.</span></span>
<span class="line"><span>============================================================================== Name &amp;amp; Summary Matched: elephant ==============================================================================</span></span>
<span class="line"><span>python3-elephant.noarch : Elephant is a package for analysis of electrophysiology data in Python</span></span>
<span class="line"><span>python3-elephant.noarch : Elephant is a package for analysis of electrophysiology data in Python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo dnf list \\*elephant\\*</span></span>
<span class="line"><span>Last metadata expiration check: 0:05:26 ago on Sun 23 Jun 2019 14:33:38 BST.</span></span>
<span class="line"><span>Available Packages</span></span>
<span class="line"><span>python3-elephant.noarch      0.6.2-3.fc30      updates-testing</span></span>
<span class="line"><span>python3-elephant.noarch      0.6.2-3.fc30              updates</span></span></code></pre></div><h4 id="安裝依賴項" tabindex="-1">安裝依賴項 <a class="header-anchor" href="#安裝依賴項" aria-label="Permalink to “安裝依賴項”">​</a></h4><p>現在使用 <code>dnf</code> 安裝軟件包時，它將<em>解決</em>所有必需的依賴項，然後調用 <code>rpm</code> 執行該事務操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install python3-elephant</span></span>
<span class="line"><span>Last metadata expiration check: 0:06:17 ago on Sun 23 Jun 2019 14:33:38 BST.</span></span>
<span class="line"><span>Dependencies resolved.</span></span>
<span class="line"><span>==============================================================================================================================================================================================</span></span>
<span class="line"><span> Package                                      Architecture                     Version                                                        Repository                                 Size</span></span>
<span class="line"><span>==============================================================================================================================================================================================</span></span>
<span class="line"><span>Installing:</span></span>
<span class="line"><span> python3-elephant                             noarch                           0.6.2-3.fc30                                                   updates-testing                           456 k</span></span>
<span class="line"><span>Installing dependencies:</span></span>
<span class="line"><span> python3-neo                                  noarch                           0.8.0-0.1.20190215git49b6041.fc30                              fedora                                    753 k</span></span>
<span class="line"><span> python3-quantities                           noarch                           0.12.2-4.fc30                                                  fedora                                    163 k</span></span>
<span class="line"><span>Installing weak dependencies:</span></span>
<span class="line"><span> python3-igor                                 noarch                           0.3-5.20150408git2c2a79d.fc30                                  fedora                                     63 k</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Transaction Summary</span></span>
<span class="line"><span>==============================================================================================================================================================================================</span></span>
<span class="line"><span>Install  4 Packages</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Total download size: 1.4 M</span></span>
<span class="line"><span>Installed size: 7.0 M</span></span>
<span class="line"><span>Is this ok [y/N]: y</span></span>
<span class="line"><span>Downloading Packages:</span></span>
<span class="line"><span>(1/4): python3-igor-0.3-5.20150408git2c2a79d.fc30.noarch.rpm                                                                                                  222 kB/s |  63 kB     00:00</span></span>
<span class="line"><span>(2/4): python3-elephant-0.6.2-3.fc30.noarch.rpm                                                                                                               681 kB/s | 456 kB     00:00</span></span>
<span class="line"><span>(3/4): python3-quantities-0.12.2-4.fc30.noarch.rpm                                                                                                            421 kB/s | 163 kB     00:00</span></span>
<span class="line"><span>(4/4): python3-neo-0.8.0-0.1.20190215git49b6041.fc30.noarch.rpm                                                                                               840 kB/s | 753 kB     00:00</span></span>
<span class="line"><span>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span>Total                                                                                                                                                         884 kB/s | 1.4 MB     00:01</span></span>
<span class="line"><span>Running transaction check</span></span>
<span class="line"><span>Transaction check succeeded.</span></span>
<span class="line"><span>Running transaction test</span></span>
<span class="line"><span>Transaction test succeeded.</span></span>
<span class="line"><span>Running transaction</span></span>
<span class="line"><span>  Preparing        :                                                                                                                                                                      1/1</span></span>
<span class="line"><span>  Installing       : python3-quantities-0.12.2-4.fc30.noarch                                                                                                                              1/4</span></span>
<span class="line"><span>  Installing       : python3-igor-0.3-5.20150408git2c2a79d.fc30.noarch                                                                                                                    2/4</span></span>
<span class="line"><span>  Installing       : python3-neo-0.8.0-0.1.20190215git49b6041.fc30.noarch                                                                                                                 3/4</span></span>
<span class="line"><span>  Installing       : python3-elephant-0.6.2-3.fc30.noarch                                                                                                                                 4/4</span></span>
<span class="line"><span>  Running scriptlet: python3-elephant-0.6.2-3.fc30.noarch                                                                                                                                 4/4</span></span>
<span class="line"><span>  Verifying        : python3-elephant-0.6.2-3.fc30.noarch                                                                                                                                 1/4</span></span>
<span class="line"><span>  Verifying        : python3-igor-0.3-5.20150408git2c2a79d.fc30.noarch                                                                                                                    2/4</span></span>
<span class="line"><span>  Verifying        : python3-neo-0.8.0-0.1.20190215git49b6041.fc30.noarch                                                                                                                 3/4</span></span>
<span class="line"><span>  Verifying        : python3-quantities-0.12.2-4.fc30.noarch                                                                                                                              4/4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Installed:</span></span>
<span class="line"><span>  python3-elephant-0.6.2-3.fc30.noarch   python3-igor-0.3-5.20150408git2c2a79d.fc30.noarch   python3-neo-0.8.0-0.1.20190215git49b6041.fc30.noarch   python3-quantities-0.12.2-4.fc30.noarch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Complete!</span></span></code></pre></div><p>請注意，<code>dnf</code> 甚至還安裝了<code>python3-igor</code>，而它不是 <code>python3-elephant</code> 的直接依賴項。</p><h3 id="dnfdragora-dnf-的一個圖形界面" tabindex="-1">DnfDragora：DNF 的一個圖形界面 <a class="header-anchor" href="#dnfdragora-dnf-的一個圖形界面" aria-label="Permalink to “DnfDragora：DNF 的一個圖形界面”">​</a></h3>`,7)),a("p",null,[n[29]||(n[29]=s("儘管技術用户可能會發現 ",-1)),n[30]||(n[30]=a("code",null,"dnf",-1)),n[31]||(n[31]=s(" 易於使用，但並非所有人都這樣認為。",-1)),e(p,{href:"https://src.fedoraproject.org/rpms/dnfdragora"},{default:l(()=>[...n[28]||(n[28]=[s("Dnfdragora",-1)])]),_:1}),n[32]||(n[32]=s(" 通過為 ",-1)),n[33]||(n[33]=a("code",null,"dnf",-1)),n[34]||(n[34]=s(" 提供圖形化前端來解決此問題。",-1))]),n[59]||(n[59]=a("p",null,[a("img",{src:"https://fedoramagazine.org/wp-content/uploads/2019/06/dnfdragora-1024x558.png",alt:"dnfdragora (version 1.1.1-2 on Fedora 30) listing all the packages installed on a system."})],-1)),n[60]||(n[60]=a("p",null,[s("從上面可以看到，dnfdragora 似乎提供了 "),a("code",null,"dnf"),s(" 的所有主要功能。")],-1)),a("p",null,[n[36]||(n[36]=t("Fedora 中還有其他工具也可以管理軟件包，GNOME 的“<ruby>軟件<rt>Software</rt></ruby>”和“<ruby>發現<rt>Discover</rt></ruby>”就是其中兩個。GNOME “軟件”僅專注於圖形應用程序。你無法使用這個圖形化前端來安裝命令列或終端工具，例如 <code>htop</code> 或 <code>weechat</code>。但是，GNOME “軟件”支持安裝 <code>dnf</code> 所不支持的 ",11)),e(p,{href:"https://fedoramagazine.org/getting-started-flatpak/"},{default:l(()=>[...n[35]||(n[35]=[s("Flatpak",-1)])]),_:1}),n[37]||(n[37]=s(" 和 Snap 應用程序。它們是針對不同目標受眾的不同工具，因此提供了不同的功能。",-1))]),n[61]||(n[61]=a("p",null,[s("這篇文章僅觸及到了 Fedora 軟件的生命週期的冰山一角。本文介紹了什麼是 RPM 軟件包，以及使用 "),a("code",null,"rpm"),s(" 和 "),a("code",null,"dnf"),s(" 的主要區別。")],-1)),n[62]||(n[62]=a("p",null,"在以後的文章中，我們將詳細介紹：",-1)),n[63]||(n[63]=a("ul",null,[a("li",null,"創建這些程序包所需的過程"),a("li",null,"社區如何測試它們以確保它們正確構建"),a("li",null,"社區用來將其給到社區用户的基礎設施")],-1)),n[64]||(n[64]=a("hr",null,null,-1)),a("p",null,[n[39]||(n[39]=s("via: ",-1)),e(p,{href:"https://fedoramagazine.org/rpm-packages-explained/"},{default:l(()=>[...n[38]||(n[38]=[s("https://fedoramagazine.org/rpm-packages-explained/",-1)])]),_:1})]),a("p",null,[n[44]||(n[44]=s("作者：",-1)),e(p,{href:"https://fedoramagazine.org/author/ankursinha/"},{default:l(()=>[...n[40]||(n[40]=[s('Ankur Sinha "FranciscoD"',-1)])]),_:1}),n[45]||(n[45]=s(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...n[41]||(n[41]=[s("lujun9972",-1)])]),_:1}),n[46]||(n[46]=s(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...n[42]||(n[42]=[s("wxy",-1)])]),_:1}),n[47]||(n[47]=s(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...n[43]||(n[43]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[50]||(n[50]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[48]||(n[48]=[s("LCTT",-1)])]),_:1}),n[51]||(n[51]=s(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...n[49]||(n[49]=[s("Linux中國",-1)])]),_:1}),n[52]||(n[52]=s(" 榮譽推出",-1))])])}const T=i(c,[["render",h]]);export{P as __pageData,T as default};
