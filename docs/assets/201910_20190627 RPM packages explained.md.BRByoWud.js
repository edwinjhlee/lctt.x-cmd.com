import{_ as i,a0 as o,w as r,s as d,I as a,x as s,a1 as e,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"RPM 包初窥 | LCTT x X-CMD","titleTemplate":false,"description":"RPM 包初窥 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RPM 包初窥 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RPM 包初窥 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20190627 RPM packages explained","title":"RPM 包初窥","tag":"201910","desc":""},"relativePath":"201910/20190627 RPM packages explained.md","filePath":"[post].md"}'),c={name:"201910/20190627 RPM packages explained.md"};function h(f,n,g,u,y,m){const p=o("Link");return r(),d("div",null,[n[53]||(n[53]=a("h1",{id:"rpm-包初窥",tabindex:"-1"},[s("RPM 包初窥 "),a("a",{class:"header-anchor",href:"#rpm-包初窥","aria-label":"Permalink to “RPM 包初窥”"},"​")],-1)),n[54]||(n[54]=a("p",null,[a("img",{src:"https://fedoramagazine.org/wp-content/uploads/2019/06/rpm.png-816x345.jpg",alt:""})],-1)),a("p",null,[n[2]||(n[2]=s("也许，Fedora 社区追求其",-1)),e(p,{href:"https://docs.fedoraproject.org/en-US/project/#_what_is_fedora_all_about"},{default:l(()=>[...n[0]||(n[0]=[s("促进自由和开源的软件及内容的使命",-1)])]),_:1}),n[3]||(n[3]=s("的最著名的方式就是开发 ",-1)),e(p,{href:"https://getfedora.org"},{default:l(()=>[...n[1]||(n[1]=[s("Fedora 软件发行版",-1)])]),_:1}),n[4]||(n[4]=s("了。因此，我们将很大一部分的社区资源用于此任务也就不足为奇了。这篇文章总结了这些软件是如何“打包”的，以及使之成为可能的基础工具，如 ",-1)),n[5]||(n[5]=a("code",null,"rpm",-1)),n[6]||(n[6]=s(" 之类。",-1))]),n[55]||(n[55]=a("h3",{id:"rpm-最小的软件单元",tabindex:"-1"},[s("RPM：最小的软件单元 "),a("a",{class:"header-anchor",href:"#rpm-最小的软件单元","aria-label":"Permalink to “RPM：最小的软件单元”"},"​")],-1)),a("p",null,[n[10]||(n[10]=s("可供用户选择的“版本”和“风味版”（",-1)),e(p,{href:"https://spins.fedoraproject.org/"},{default:l(()=>[...n[7]||(n[7]=[s("spins",-1)])]),_:1}),n[11]||(n[11]=s(" / ",-1)),e(p,{href:"https://labs.fedoraproject.org/"},{default:l(()=>[...n[8]||(n[8]=[s("labs",-1)])]),_:1}),n[12]||(n[12]=s(" / ",-1)),e(p,{href:"https://silverblue.fedoraproject.org/"},{default:l(()=>[...n[9]||(n[9]=[s("silverblue",-1)])]),_:1}),n[13]||(n[13]=s("）其实非常相似。它们都是由各种软件组成的，这些软件经过混合和搭配，可以很好地协同工作。它们之间的不同之处在于放入其中的具体工具不同。这种选择取决于它们所针对的用例。所有这些的“版本”和“风味版”基本组成单位都是 RPM 软件包文件。",-1))]),n[56]||(n[56]=t(`<p>RPM 文件是类似于 ZIP 文件或 tarball 的存档文件。实际上，它们使用了压缩来减小存档文件的大小。但是，除了文件之外，RPM 存档中还包含有关软件包的元数据。可以使用 <code>rpm</code> 工具查询：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpm -q fpaste</span></span>
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
<span class="line"><span>/usr/share/man/man1/fpaste.1.gz</span></span></code></pre></div><p>安装 RPM 软件包后，<code>rpm</code> 工具可以知道具体哪些文件被添加到了系统中。因此，删除该软件包也会删除这些文件，并使系统保持一致状态。这就是为什么要尽可能地使用 <code>rpm</code> 安装软件，而不是从源代码安装软件的原因。</p><h3 id="依赖关系" tabindex="-1">依赖关系 <a class="header-anchor" href="#依赖关系" aria-label="Permalink to “依赖关系”">​</a></h3>`,4)),a("p",null,[n[15]||(n[15]=s("如今，完全独立的软件已经非常罕见。甚至 ",-1)),e(p,{href:"https://src.fedoraproject.org/rpms/fpaste"},{default:l(()=>[...n[14]||(n[14]=[s("fpaste",-1)])]),_:1}),n[16]||(n[16]=s("，连这样一个简单的单个文件的 Python 脚本，都需要安装 Python 解释器。因此，如果系统未安装 Python（几乎不可能，但有可能），则无法使用 ",-1)),n[17]||(n[17]=a("code",null,"fpaste",-1)),n[18]||(n[18]=s("。用打包者的术语来说，“Python 是 ",-1)),n[19]||(n[19]=a("code",null,"fpaste",-1)),n[20]||(n[20]=s(" 的",-1)),n[21]||(n[21]=a("strong",null,"运行时依赖项",-1)),n[22]||(n[22]=s("。”",-1))]),n[57]||(n[57]=t(`<p>构建 RPM 软件包时（本文不讨论构建 RPM 的过程），生成的归档文件中包括了所有这些元数据。这样，与 RPM 软件包归档文件交互的工具就知道必须要安装其它的什么东西，以便 <code>fpaste</code> 可以正常工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rpm -q --requires fpaste</span></span>
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
<span class="line"><span>python37 = 3.7.3-3.fc30</span></span></code></pre></div><h3 id="解决-rpm-依赖关系" tabindex="-1">解决 RPM 依赖关系 <a class="header-anchor" href="#解决-rpm-依赖关系" aria-label="Permalink to “解决 RPM 依赖关系”">​</a></h3><p>虽然 <code>rpm</code> 知道每个归档文件所需的依赖关系，但不知道在哪里找到它们。这是设计使然：<code>rpm</code> 仅适用于本地文件，必须具体告知它们的位置。因此，如果你尝试安装单个 RPM 软件包，则 <code>rpm</code> 找不到该软件包的运行时依赖项时就会出错。本示例尝试安装从 Fedora 软件包集中下载的软件包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
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
<span class="line"><span>        python3.7dist(quantities) &gt;= 0.10.1 is needed by python3-elephant-0.6.2-3.fc30.noarch</span></span></code></pre></div><p>理论上，你可以下载 <code>python3-elephant</code> 所需的所有软件包，并告诉 <code>rpm</code> 它们都在哪里，但这并不方便。如果 <code>python3-neo</code> 和 <code>python3-quantities</code> 还有其它的运行时要求怎么办？很快，这种“依赖链”就会变得相当复杂。</p><h4 id="存储库" tabindex="-1">存储库 <a class="header-anchor" href="#存储库" aria-label="Permalink to “存储库”">​</a></h4><p>幸运的是，有了 <code>dnf</code> 和它的朋友们，可以帮助解决此问题。与 <code>rpm</code> 不同，<code>dnf</code> 能感知到<strong>存储库</strong>。存储库是程序包的集合，带有告诉 <code>dnf</code> 这些存储库包含什么内容的元数据。所有 Fedora 系统都带有默认启用的默认 Fedora 存储库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf repolist</span></span>
<span class="line"><span>repo id              repo name                             status</span></span>
<span class="line"><span>fedora               Fedora 30 - x86_64                    56,582</span></span>
<span class="line"><span>fedora-modular       Fedora Modular 30 - x86_64               135</span></span>
<span class="line"><span>updates              Fedora 30 - x86_64 - Updates           8,573</span></span>
<span class="line"><span>updates-modular      Fedora Modular 30 - x86_64 - Updates     138</span></span>
<span class="line"><span>updates-testing      Fedora 30 - x86_64 - Test Updates      8,458</span></span></code></pre></div>`,9)),a("p",null,[n[25]||(n[25]=s("在 Fedora 快速文档中有",-1)),e(p,{href:"https://docs.fedoraproject.org/en-US/quick-docs/repositories/"},{default:l(()=>[...n[23]||(n[23]=[s("这些存储库",-1)])]),_:1}),n[26]||(n[26]=s("以及",-1)),e(p,{href:"https://docs.fedoraproject.org/en-US/quick-docs/adding-or-removing-software-repositories-in-fedora/"},{default:l(()=>[...n[24]||(n[24]=[s("如何管理",-1)])]),_:1}),n[27]||(n[27]=s("它们的更多信息。",-1))]),n[58]||(n[58]=t(`<p><code>dnf</code> 可用于查询存储库以获取有关它们包含的软件包信息。它还可以在这些存储库中搜索软件，或从中安装/卸载/升级软件包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf search elephant</span></span>
<span class="line"><span>Last metadata expiration check: 0:05:21 ago on Sun 23 Jun 2019 14:33:38 BST.</span></span>
<span class="line"><span>============================================================================== Name &amp;amp; Summary Matched: elephant ==============================================================================</span></span>
<span class="line"><span>python3-elephant.noarch : Elephant is a package for analysis of electrophysiology data in Python</span></span>
<span class="line"><span>python3-elephant.noarch : Elephant is a package for analysis of electrophysiology data in Python</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo dnf list \\*elephant\\*</span></span>
<span class="line"><span>Last metadata expiration check: 0:05:26 ago on Sun 23 Jun 2019 14:33:38 BST.</span></span>
<span class="line"><span>Available Packages</span></span>
<span class="line"><span>python3-elephant.noarch      0.6.2-3.fc30      updates-testing</span></span>
<span class="line"><span>python3-elephant.noarch      0.6.2-3.fc30              updates</span></span></code></pre></div><h4 id="安装依赖项" tabindex="-1">安装依赖项 <a class="header-anchor" href="#安装依赖项" aria-label="Permalink to “安装依赖项”">​</a></h4><p>现在使用 <code>dnf</code> 安装软件包时，它将<em>解决</em>所有必需的依赖项，然后调用 <code>rpm</code> 执行该事务操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install python3-elephant</span></span>
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
<span class="line"><span>Complete!</span></span></code></pre></div><p>请注意，<code>dnf</code> 甚至还安装了<code>python3-igor</code>，而它不是 <code>python3-elephant</code> 的直接依赖项。</p><h3 id="dnfdragora-dnf-的一个图形界面" tabindex="-1">DnfDragora：DNF 的一个图形界面 <a class="header-anchor" href="#dnfdragora-dnf-的一个图形界面" aria-label="Permalink to “DnfDragora：DNF 的一个图形界面”">​</a></h3>`,7)),a("p",null,[n[29]||(n[29]=s("尽管技术用户可能会发现 ",-1)),n[30]||(n[30]=a("code",null,"dnf",-1)),n[31]||(n[31]=s(" 易于使用，但并非所有人都这样认为。",-1)),e(p,{href:"https://src.fedoraproject.org/rpms/dnfdragora"},{default:l(()=>[...n[28]||(n[28]=[s("Dnfdragora",-1)])]),_:1}),n[32]||(n[32]=s(" 通过为 ",-1)),n[33]||(n[33]=a("code",null,"dnf",-1)),n[34]||(n[34]=s(" 提供图形化前端来解决此问题。",-1))]),n[59]||(n[59]=a("p",null,[a("img",{src:"https://fedoramagazine.org/wp-content/uploads/2019/06/dnfdragora-1024x558.png",alt:"dnfdragora (version 1.1.1-2 on Fedora 30) listing all the packages installed on a system."})],-1)),n[60]||(n[60]=a("p",null,[s("从上面可以看到，dnfdragora 似乎提供了 "),a("code",null,"dnf"),s(" 的所有主要功能。")],-1)),a("p",null,[n[36]||(n[36]=t("Fedora 中还有其他工具也可以管理软件包，GNOME 的“<ruby>软件<rt>Software</rt></ruby>”和“<ruby>发现<rt>Discover</rt></ruby>”就是其中两个。GNOME “软件”仅专注于图形应用程序。你无法使用这个图形化前端来安装命令行或终端工具，例如 <code>htop</code> 或 <code>weechat</code>。但是，GNOME “软件”支持安装 <code>dnf</code> 所不支持的 ",11)),e(p,{href:"https://fedoramagazine.org/getting-started-flatpak/"},{default:l(()=>[...n[35]||(n[35]=[s("Flatpak",-1)])]),_:1}),n[37]||(n[37]=s(" 和 Snap 应用程序。它们是针对不同目标受众的不同工具，因此提供了不同的功能。",-1))]),n[61]||(n[61]=a("p",null,[s("这篇文章仅触及到了 Fedora 软件的生命周期的冰山一角。本文介绍了什么是 RPM 软件包，以及使用 "),a("code",null,"rpm"),s(" 和 "),a("code",null,"dnf"),s(" 的主要区别。")],-1)),n[62]||(n[62]=a("p",null,"在以后的文章中，我们将详细介绍：",-1)),n[63]||(n[63]=a("ul",null,[a("li",null,"创建这些程序包所需的过程"),a("li",null,"社区如何测试它们以确保它们正确构建"),a("li",null,"社区用来将其给到社区用户的基础设施")],-1)),n[64]||(n[64]=a("hr",null,null,-1)),a("p",null,[n[39]||(n[39]=s("via: ",-1)),e(p,{href:"https://fedoramagazine.org/rpm-packages-explained/"},{default:l(()=>[...n[38]||(n[38]=[s("https://fedoramagazine.org/rpm-packages-explained/",-1)])]),_:1})]),a("p",null,[n[44]||(n[44]=s("作者：",-1)),e(p,{href:"https://fedoramagazine.org/author/ankursinha/"},{default:l(()=>[...n[40]||(n[40]=[s('Ankur Sinha "FranciscoD"',-1)])]),_:1}),n[45]||(n[45]=s(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...n[41]||(n[41]=[s("lujun9972",-1)])]),_:1}),n[46]||(n[46]=s(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...n[42]||(n[42]=[s("wxy",-1)])]),_:1}),n[47]||(n[47]=s(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...n[43]||(n[43]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[50]||(n[50]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[48]||(n[48]=[s("LCTT",-1)])]),_:1}),n[51]||(n[51]=s(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...n[49]||(n[49]=[s("Linux中国",-1)])]),_:1}),n[52]||(n[52]=s(" 荣誉推出",-1))])])}const T=i(c,[["render",h]]);export{P as __pageData,T as default};
