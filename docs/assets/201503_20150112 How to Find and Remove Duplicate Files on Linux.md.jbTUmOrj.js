import{_ as p,a0 as o,w as a,s as r,I as n,x as e,a1 as l,A as s,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"如何在Linux上找出并删除重复的文件 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux上找出并删除重复的文件 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux上找出并删除重复的文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux上找出并删除重复的文件 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150112 How to Find and Remove Duplicate Files on Linux","title":"如何在Linux上找出并删除重复的文件","tag":"201503","desc":""},"relativePath":"201503/20150112 How to Find and Remove Duplicate Files on Linux.md","filePath":"[post].md"}'),u={name:"201503/20150112 How to Find and Remove Duplicate Files on Linux.md"};function f(m,t,g,x,w,h){const i=o("Link");return a(),r("div",null,[t[15]||(t[15]=n("h1",{id:"如何在linux上找出并删除重复的文件",tabindex:"-1"},[e("如何在Linux上找出并删除重复的文件 "),n("a",{class:"header-anchor",href:"#如何在linux上找出并删除重复的文件","aria-label":"Permalink to “如何在Linux上找出并删除重复的文件”"},"​")],-1)),t[16]||(t[16]=n("p",null,"大家好，今天我们会学习如何在Linux PC或者服务器上找出和删除重复文件。这里有一款工具你可以工具自己的需要使用。",-1)),t[17]||(t[17]=n("p",null,"无论你是否正在使用Linux桌面或者服务器，有一些很好的工具能够帮你扫描系统中的重复文件并删除它们来释放空间。图形界面和命令行界面的都有。重复文件是磁盘空间不必要的浪费。毕竟，如果你的确需要在不同的位置享有同一个文件，你可以使用软链接或者硬链接，这样就可以在磁盘的一个地方存储数据了。",-1)),t[18]||(t[18]=n("h3",{id:"fslint",tabindex:"-1"},[e("FSlint "),n("a",{class:"header-anchor",href:"#fslint","aria-label":"Permalink to “FSlint”"},"​")],-1)),n("p",null,[l(i,{href:"http://www.pixelbeat.org/fslint/"},{default:s(()=>[...t[0]||(t[0]=[e("FSlint",-1)])]),_:1}),t[1]||(t[1]=e(" 在不同的Linux发行版二进制仓库中都有，包括Ubuntu、Debian、Fedora和Red Hat。只需你运行你的包管理器并安装“fslint”包就行。这个工具默认提供了一个简单的图形化界面，同样也有包含各种功能的命令行版本。",-1))]),t[19]||(t[19]=d(`<p>不要担心FSlint的图形化界面太复杂。默认情况下，它会自动选中Duplicate窗格，并以你的家目录作为搜索路径。</p><p>要安装fslint，若像我这样运行的是Ubuntu，这里是默认的命令：</p><pre><code>$ sudo apt-get install fslint
</code></pre><p>这里还有针对其他发行版的安装命令：</p><p>Debian：</p><pre><code>svn checkout http://fslint.googlecode.com/svn/trunk/ fslint-2.45
cd fslint-2.45
dpkg-buildpackage -I.svn -rfakeroot -tc
sudo dpkg -i ../fslint_2.45-1_all.deb
</code></pre><p>Fedora：</p><pre><code>sudo yum install fslint
</code></pre><p>OpenSuse：</p><pre><code>[ -f /etc/mandrake-release ] &amp;&amp; pkg=rpm
[ -f /etc/SuSE-release ] &amp;&amp; pkg=packages
wget http://www.pixelbeat.org/fslint/fslint-2.42.tar.gz
sudo rpmbuild -ta fslint-2.42.tar.gz
sudo rpm -Uvh /usr/src/$pkg/RPMS/noarch/fslint-2.42-1.*.noarch.rpm
</code></pre><p>对于其他发行版：</p><pre><code>wget http://www.pixelbeat.org/fslint/fslint-2.44.tar.gz
tar -xzf fslint-2.44.tar.gz
cd fslint-2.44
(cd po &amp;&amp; make)
./fslint-gui
</code></pre><p>要在Ubuntu中运行fslint的GUI版本fslint-gui, 使用Alt+F2运行命令或者在终端输入：</p><pre><code>$ fslint-gui
</code></pre><p>默认情况下，它会自动选中Duplicate窗格，并以你的家目录作为搜索路径。你要做的就是点击Find按钮，FSlint会自动在你的家目录下找出重复文件列表。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/01/delete-duplicates-fslint.png" alt="Delete Duplicate files with Fslint"></p><p>点击按钮来删除任何你要删除的文件，并且可以双击预览。</p><p>完成这一切后，我们就成功地删除你系统中的重复文件了。</p><p><strong>注意</strong> ，命令行工具默认不在环境的路径中，你不能像典型的命令那样运行它。在Ubuntu中，你可以在/usr/share/fslint/fslint下找到它。因此，如果你要在一个单独的目录运行fslint完整扫描，下面是Ubuntu中的运行命令：</p><pre><code>cd /usr/share/fslint/fslint

./fslint /path/to/directory
</code></pre><p><strong>这个命令实际上并不会删除任何文件。它只会打印出重复文件的列表-你需要自己做接下来的事。</strong></p><pre><code>$ /usr/share/fslint/fslint/findup --help
find dUPlicate files.
Usage: findup [[[-t [-m|-d]] | [--summary]] [-r] [-f] paths(s) ...]

If no path(s) specified then the current directory is assumed.

When -m is specified any found duplicates will be merged (using hardlinks).
When -d is specified any found duplicates will be deleted (leaving just 1).
When -t is specfied, only report what -m or -d would do.
When --summary is specified change output format to include file sizes.
You can also pipe this summary format to /usr/share/fslint/fslint/fstool/dupwaste
to get a total of the wastage due to duplicates.
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/01/fslint-help.png" alt="fslint help"></p><hr>`,24)),n("p",null,[t[3]||(t[3]=e("via: ",-1)),l(i,{href:"http://linoxide.com/file-system/find-remove-duplicate-files-linux/"},{default:s(()=>[...t[2]||(t[2]=[e("http://linoxide.com/file-system/find-remove-duplicate-files-linux/",-1)])]),_:1})]),n("p",null,[t[7]||(t[7]=e("作者：",-1)),l(i,{href:"http://linoxide.com/author/arunp/"},{default:s(()=>[...t[4]||(t[4]=[e("Arun Pyasi",-1)])]),_:1}),t[8]||(t[8]=e(" 译者：",-1)),l(i,{href:"https://github.com/geekpi"},{default:s(()=>[...t[5]||(t[5]=[e("geekpi",-1)])]),_:1}),t[9]||(t[9]=e(" 校对：",-1)),l(i,{href:"https://github.com/wxy"},{default:s(()=>[...t[6]||(t[6]=[e("wxy",-1)])]),_:1})]),n("p",null,[t[12]||(t[12]=e("本文由 ",-1)),l(i,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[10]||(t[10]=[e("LCTT",-1)])]),_:1}),t[13]||(t[13]=e(" 原创翻译，",-1)),l(i,{href:"http://linux.cn/"},{default:s(()=>[...t[11]||(t[11]=[e("Linux中国",-1)])]),_:1}),t[14]||(t[14]=e(" 荣誉推出",-1))])])}const c=p(u,[["render",f]]);export{T as __pageData,c as default};
