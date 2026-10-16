import{_ as o,a0 as d,w as r,s as p,ao as s,I as n,x as e,a1 as l,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const h=JSON.parse('{"title":"如何在Ubuntu/Debian/Linux Mint中编译和安装wxWidgets | LCTT x X-CMD","titleTemplate":false,"description":"如何在Ubuntu/Debian/Linux Mint中编译和安装wxWidgets | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Ubuntu/Debian/Linux Mint中编译和安装wxWidgets | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Ubuntu/Debian/Linux Mint中编译和安装wxWidgets | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150520 How to compile and install wxWidgets on Ubuntu or Debian or Linux Mint","title":"如何在Ubuntu/Debian/Linux Mint中编译和安装wxWidgets","tag":"201506","desc":""},"relativePath":"201506/20150520 How to compile and install wxWidgets on Ubuntu or Debian or Linux Mint.md","filePath":"[post].md"}'),w={name:"201506/20150520 How to compile and install wxWidgets on Ubuntu or Debian or Linux Mint.md"};function u(x,t,g,b,m,_){const i=d("Link");return r(),p("div",null,[t[25]||(t[25]=s('<h1 id="如何在ubuntu-debian-linux-mint中编译和安装wxwidgets" tabindex="-1">如何在Ubuntu/Debian/Linux Mint中编译和安装wxWidgets <a class="header-anchor" href="#如何在ubuntu-debian-linux-mint中编译和安装wxwidgets" aria-label="Permalink to “如何在Ubuntu/Debian/Linux Mint中编译和安装wxWidgets”">​</a></h1><h3 id="wxwidgets" tabindex="-1">wxWidgets <a class="header-anchor" href="#wxwidgets" aria-label="Permalink to “wxWidgets”">​</a></h3><p>wxWidgets是一个程序开发框架/库， 允许你在Windows、Mac、Linux中使用相同的代码跨平台开发。它主要用C++写成，但也可以与其他语言绑定比如Python、Perl、Ruby。</p><p>本教程中我将向你展示如何在基于Debian的linux中如Ubuntu和Linux Mint中编译wxwidgets 3.0+。</p><p>从源码编译wxWidgets并不困难，仅仅需要几分钟。库可以按不同的方式来编译，比如静态或者动态库。</p><h3 id="_1-下载-wxwidgets" tabindex="-1">1. 下载 wxWidgets <a class="header-anchor" href="#_1-下载-wxwidgets" aria-label="Permalink to “1. 下载 wxWidgets”">​</a></h3>',6)),n("p",null,[t[1]||(t[1]=e("第一步你需要从",-1)),l(i,{href:"https://www.wxwidgets.org/downloads/"},{default:a(()=>[...t[0]||(t[0]=[e("wxwidgets.org",-1)])]),_:1}),t[2]||(t[2]=e("下载wxWidgets源码文件。",-1))]),t[26]||(t[26]=s(`<p>做完后，解压到目录。</p><h3 id="_2-设置编译环境" tabindex="-1">2. 设置编译环境 <a class="header-anchor" href="#_2-设置编译环境" aria-label="Permalink to “2. 设置编译环境”">​</a></h3><p>要编译wxwidgets，我们需要一些工具包括C++编译器，在Linux上是g++。所有这些可以通过apt-get工具从仓库中安装。</p><p>我们还需要wxWidgets依赖的GTK开发库。</p><pre><code>$ sudo apt-get install libgtk-3-dev build-essential checkinstall
</code></pre><blockquote><p>这个叫做checkinstall的工具允许我们为wxwidgets创建一个安装包，这样之后就可以轻松的使用包管理器来卸载。</p></blockquote><h3 id="_3-编译-wxwidgets" tabindex="-1">3. 编译 wxWidgets <a class="header-anchor" href="#_3-编译-wxwidgets" aria-label="Permalink to “3. 编译 wxWidgets”">​</a></h3><p>进入到wxWidgets解压后的目录。为了保持清洁，创建一个编译用的目录。</p><pre><code>$ mkdir gtk-build
$ cd gtk-build/
</code></pre><p>现在运行configure和make命令。每个将花费一些时间来完成。</p><pre><code>$ ../configure --disable-shared --enable-unicode
$ make
</code></pre><p>&quot;--disable-shared&quot;选项将会编译静态库而不是动态库。</p><p>make命令完成后，编译就成功了。是时候安装wxWidgets到正确的目录。</p><p>更多信息请参考install.txt和readme.txt，这可在wxwidgets中的/docs/gtk/目录下找到。</p><h3 id="_4-安装-checkinstall" tabindex="-1">4. 安装 checkinstall <a class="header-anchor" href="#_4-安装-checkinstall" aria-label="Permalink to “4. 安装 checkinstall”">​</a></h3><p>现在我们不使用&quot;make install&quot;命令，我们使用checkinstall命令来创建一个wxwidgets的deb安装包。运行命令：</p><pre><code>$ sudo checkinstall
</code></pre><p>checkinstall会询问几个问题，请保证在提问后提供一个版本号，否则将会失败。</p><p>完成这一切后，wxWidgets就安装好了，deb文件也会创建在相同的目录下。</p><h3 id="_5-追踪安装的文件" tabindex="-1">5. 追踪安装的文件 <a class="header-anchor" href="#_5-追踪安装的文件" aria-label="Permalink to “5. 追踪安装的文件”">​</a></h3><p>如果你想要检查文件安装的位置，使用dpkg命令后面跟上checkinstall提供的包名。</p><pre><code>$ dpkg -L package_name
/.
/usr
/usr/local
/usr/local/lib
/usr/local/lib/libwx_baseu-3.0.a
/usr/local/lib/libwx_gtk3u_propgrid-3.0.a
/usr/local/lib/libwx_gtk3u_html-3.0.a
/usr/local/lib/libwxscintilla-3.0.a
/usr/local/lib/libwx_gtk3u_ribbon-3.0.a
/usr/local/lib/libwx_gtk3u_stc-3.0.a
/usr/local/lib/libwx_gtk3u_qa-3.0.a
/usr/local/lib/libwx_baseu_net-3.0.a
/usr/local/lib/libwxtiff-3.0.a
</code></pre><h3 id="_6-编译示例" tabindex="-1">6. 编译示例 <a class="header-anchor" href="#_6-编译示例" aria-label="Permalink to “6. 编译示例”">​</a></h3><p>编译wxWidgets完成后就可以马上编译示例程序了。在相同的目录下，一个新的sample目录已经创建了。</p><p>进入它并运行下面的命令</p><pre><code>$ compile samples
$ cd samples/
$ make
</code></pre><p>make命令完成后，进入sample 子目录，这里就有一个可以马上运行的Demo程序了。</p><h3 id="_7-编译你的第一个程序" tabindex="-1">7. 编译你的第一个程序 <a class="header-anchor" href="#_7-编译你的第一个程序" aria-label="Permalink to “7. 编译你的第一个程序”">​</a></h3><p>你完成编译demo程序后，可以写你自己的程序来编译了。这个也很简单。</p><p>假设你用的是C++，这样的话你还可以使用编辑器的高亮特性。比如gedit、kate、kwrite等等。或者用全功能的IDE像Geany、Codelite、Codeblocks等等。</p><p>然而你的第一个程序只需要用一个文本编辑器来快速完成。</p><p>如下：</p><pre><code>#include &lt;wx/wx.h&gt;

class Simple : public wxFrame
{
public:
    Simple(const wxString&amp; title)
		: wxFrame(NULL, wxID_ANY, title, wxDefaultPosition, wxSize(250, 150))
	{
		Centre();
	}
};

class MyApp : public wxApp
{
public:
	bool OnInit()
	{
		Simple *simple = new Simple(wxT(&quot;Simple&quot;));
		simple-&gt;Show(true);
		return true;
	}
};

wxIMPLEMENT_APP(MyApp);
</code></pre><p>现在保存并用下面的命令编译。</p><pre><code># compile
$ g++ basic.cpp \`wx-config --cxxflags --libs std\` -o program

# run
$ ./program
</code></pre><h4 id="和非标准的库一起编译" tabindex="-1">和非标准的库一起编译 <a class="header-anchor" href="#和非标准的库一起编译" aria-label="Permalink to “和非标准的库一起编译”">​</a></h4><p>面展示的wx-config命令默认只支持标准的库。如果你使用的是Aui库，那么你需要指定额外用到的库。</p><pre><code>$ g++ code.cpp \`wx-config --cxxflags --libs std,aui\` -o program
</code></pre>`,38)),n("p",null,[t[4]||(t[4]=e("更多的信息参考这里",-1)),l(i,{href:"https://wiki.wxwidgets.org/Updating_to_the_Latest_Version_of_wxWidgets#The_wx-config_script"},{default:a(()=>[...t[3]||(t[3]=[e("这里",-1)])]),_:1}),t[5]||(t[5]=e("。",-1))]),t[27]||(t[27]=n("h3",{id:"资源",tabindex:"-1"},[e("资源 "),n("a",{class:"header-anchor",href:"#资源","aria-label":"Permalink to “资源”"},"​")],-1)),n("p",null,[t[7]||(t[7]=e("下载wxWidgets的源码和帮助 ",-1)),l(i,{href:"https://www.wxwidgets.org/downloads/"},{default:a(()=>[...t[6]||(t[6]=[e("https://www.wxwidgets.org/downloads/",-1)])]),_:1})]),n("p",null,[t[9]||(t[9]=e("wxWidgets编译的wiki页面 ",-1)),l(i,{href:"https://wiki.wxwidgets.org/Compiling_and_getting_started"},{default:a(()=>[...t[8]||(t[8]=[e("https://wiki.wxwidgets.org/Compiling_and_getting_started",-1)])]),_:1})]),n("p",null,[t[11]||(t[11]=e("使用wxWidgets最新版本(3.0+)的事项 ",-1)),l(i,{href:"https://wiki.wxwidgets.org/Updating_to_the_Latest_Version_of_wxWidgets"},{default:a(()=>[...t[10]||(t[10]=[e("https://wiki.wxwidgets.org/Updating_to_the_Latest_Version_of_wxWidgets",-1)])]),_:1})]),t[28]||(t[28]=n("hr",null,null,-1)),n("p",null,[t[13]||(t[13]=e("via: ",-1)),l(i,{href:"http://www.binarytides.com/install-wxwidgets-ubuntu/"},{default:a(()=>[...t[12]||(t[12]=[e("http://www.binarytides.com/install-wxwidgets-ubuntu/",-1)])]),_:1})]),n("p",null,[t[17]||(t[17]=e("作者：",-1)),l(i,{href:"https://plus.google.com/117145272367995638274/posts"},{default:a(()=>[...t[14]||(t[14]=[e("Silver Moon",-1)])]),_:1}),t[18]||(t[18]=e(" 译者：",-1)),l(i,{href:"https://github.com/geekpi"},{default:a(()=>[...t[15]||(t[15]=[e("geekpi",-1)])]),_:1}),t[19]||(t[19]=e(" 校对：",-1)),l(i,{href:"https://github.com/wxy"},{default:a(()=>[...t[16]||(t[16]=[e("wxy",-1)])]),_:1})]),n("p",null,[t[22]||(t[22]=e("本文由 ",-1)),l(i,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[20]||(t[20]=[e("LCTT",-1)])]),_:1}),t[23]||(t[23]=e(" 原创翻译，",-1)),l(i,{href:"https://linux.cn/"},{default:a(()=>[...t[21]||(t[21]=[e("Linux中国",-1)])]),_:1}),t[24]||(t[24]=e(" 荣誉推出",-1))])])}const T=o(w,[["render",u]]);export{h as __pageData,T as default};
