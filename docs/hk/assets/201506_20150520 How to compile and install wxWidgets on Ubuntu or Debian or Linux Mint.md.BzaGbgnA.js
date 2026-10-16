import{_ as o,a0 as d,w as r,s as p,ao as s,I as n,x as e,a1 as l,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"如何在Ubuntu/Debian/Linux Mint中編譯和安裝wxWidgets | LCTT x X-CMD","titleTemplate":false,"description":"如何在Ubuntu/Debian/Linux Mint中編譯和安裝wxWidgets | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Ubuntu/Debian/Linux Mint中編譯和安裝wxWidgets | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Ubuntu/Debian/Linux Mint中編譯和安裝wxWidgets | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150520 How to compile and install wxWidgets on Ubuntu or Debian or Linux Mint","title":"如何在Ubuntu/Debian/Linux Mint中編譯和安裝wxWidgets","tag":"201506","desc":""},"relativePath":"201506/20150520 How to compile and install wxWidgets on Ubuntu or Debian or Linux Mint.md","filePath":"[post].md"}'),w={name:"201506/20150520 How to compile and install wxWidgets on Ubuntu or Debian or Linux Mint.md"};function u(x,t,g,b,m,_){const i=d("Link");return r(),p("div",null,[t[25]||(t[25]=s('<h1 id="如何在ubuntu-debian-linux-mint中編譯和安裝wxwidgets" tabindex="-1">如何在Ubuntu/Debian/Linux Mint中編譯和安裝wxWidgets <a class="header-anchor" href="#如何在ubuntu-debian-linux-mint中編譯和安裝wxwidgets" aria-label="Permalink to “如何在Ubuntu/Debian/Linux Mint中編譯和安裝wxWidgets”">​</a></h1><h3 id="wxwidgets" tabindex="-1">wxWidgets <a class="header-anchor" href="#wxwidgets" aria-label="Permalink to “wxWidgets”">​</a></h3><p>wxWidgets是一個程序開發框架/庫， 允許你在Windows、Mac、Linux中使用相同的代碼跨平台開發。它主要用C++寫成，但也可以與其他語言綁定比如Python、Perl、Ruby。</p><p>本教程中我將向你展示如何在基於Debian的linux中如Ubuntu和Linux Mint中編譯wxwidgets 3.0+。</p><p>從源碼編譯wxWidgets並不困難，僅僅需要幾分鐘。庫可以按不同的方式來編譯，比如靜態或者動態庫。</p><h3 id="_1-下載-wxwidgets" tabindex="-1">1. 下載 wxWidgets <a class="header-anchor" href="#_1-下載-wxwidgets" aria-label="Permalink to “1. 下載 wxWidgets”">​</a></h3>',6)),n("p",null,[t[1]||(t[1]=e("第一步你需要從",-1)),l(i,{href:"https://www.wxwidgets.org/downloads/"},{default:a(()=>[...t[0]||(t[0]=[e("wxwidgets.org",-1)])]),_:1}),t[2]||(t[2]=e("下載wxWidgets源碼文件。",-1))]),t[26]||(t[26]=s(`<p>做完後，解壓到目錄。</p><h3 id="_2-設置編譯環境" tabindex="-1">2. 設置編譯環境 <a class="header-anchor" href="#_2-設置編譯環境" aria-label="Permalink to “2. 設置編譯環境”">​</a></h3><p>要編譯wxwidgets，我們需要一些工具包括C++編譯器，在Linux上是g++。所有這些可以通過apt-get工具從倉庫中安裝。</p><p>我們還需要wxWidgets依賴的GTK開發庫。</p><pre><code>$ sudo apt-get install libgtk-3-dev build-essential checkinstall
</code></pre><blockquote><p>這個叫做checkinstall的工具允許我們為wxwidgets創建一個安裝包，這樣之後就可以輕鬆的使用包管理器來卸載。</p></blockquote><h3 id="_3-編譯-wxwidgets" tabindex="-1">3. 編譯 wxWidgets <a class="header-anchor" href="#_3-編譯-wxwidgets" aria-label="Permalink to “3. 編譯 wxWidgets”">​</a></h3><p>進入到wxWidgets解壓後的目錄。為了保持清潔，創建一個編譯用的目錄。</p><pre><code>$ mkdir gtk-build
$ cd gtk-build/
</code></pre><p>現在運行configure和make命令。每個將花費一些時間來完成。</p><pre><code>$ ../configure --disable-shared --enable-unicode
$ make
</code></pre><p>&quot;--disable-shared&quot;選項將會編譯靜態庫而不是動態庫。</p><p>make命令完成後，編譯就成功了。是時候安裝wxWidgets到正確的目錄。</p><p>更多信息請參考install.txt和readme.txt，這可在wxwidgets中的/docs/gtk/目錄下找到。</p><h3 id="_4-安裝-checkinstall" tabindex="-1">4. 安裝 checkinstall <a class="header-anchor" href="#_4-安裝-checkinstall" aria-label="Permalink to “4. 安裝 checkinstall”">​</a></h3><p>現在我們不使用&quot;make install&quot;命令，我們使用checkinstall命令來創建一個wxwidgets的deb安裝包。運行命令：</p><pre><code>$ sudo checkinstall
</code></pre><p>checkinstall會詢問幾個問題，請保證在提問後提供一個版本號，否則將會失敗。</p><p>完成這一切後，wxWidgets就安裝好了，deb文件也會創建在相同的目錄下。</p><h3 id="_5-追蹤安裝的文件" tabindex="-1">5. 追蹤安裝的文件 <a class="header-anchor" href="#_5-追蹤安裝的文件" aria-label="Permalink to “5. 追蹤安裝的文件”">​</a></h3><p>如果你想要檢查文件安裝的位置，使用dpkg命令後面跟上checkinstall提供的包名。</p><pre><code>$ dpkg -L package_name
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
</code></pre><h3 id="_6-編譯示例" tabindex="-1">6. 編譯示例 <a class="header-anchor" href="#_6-編譯示例" aria-label="Permalink to “6. 編譯示例”">​</a></h3><p>編譯wxWidgets完成後就可以馬上編譯示例程序了。在相同的目錄下，一個新的sample目錄已經創建了。</p><p>進入它並運行下面的命令</p><pre><code>$ compile samples
$ cd samples/
$ make
</code></pre><p>make命令完成後，進入sample 子目錄，這裏就有一個可以馬上運行的Demo程序了。</p><h3 id="_7-編譯你的第一個程序" tabindex="-1">7. 編譯你的第一個程序 <a class="header-anchor" href="#_7-編譯你的第一個程序" aria-label="Permalink to “7. 編譯你的第一個程序”">​</a></h3><p>你完成編譯demo程序後，可以寫你自己的程序來編譯了。這個也很簡單。</p><p>假設你用的是C++，這樣的話你還可以使用編輯器的高亮特性。比如gedit、kate、kwrite等等。或者用全功能的IDE像Geany、Codelite、Codeblocks等等。</p><p>然而你的第一個程序只需要用一個文本編輯器來快速完成。</p><p>如下：</p><pre><code>#include &lt;wx/wx.h&gt;

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
</code></pre><p>現在保存並用下面的命令編譯。</p><pre><code># compile
$ g++ basic.cpp \`wx-config --cxxflags --libs std\` -o program

# run
$ ./program
</code></pre><h4 id="和非標準的庫一起編譯" tabindex="-1">和非標準的庫一起編譯 <a class="header-anchor" href="#和非標準的庫一起編譯" aria-label="Permalink to “和非標準的庫一起編譯”">​</a></h4><p>面展示的wx-config命令默認只支持標準的庫。如果你使用的是Aui庫，那麼你需要指定額外用到的庫。</p><pre><code>$ g++ code.cpp \`wx-config --cxxflags --libs std,aui\` -o program
</code></pre>`,38)),n("p",null,[t[4]||(t[4]=e("更多的信息參考這裏",-1)),l(i,{href:"https://wiki.wxwidgets.org/Updating_to_the_Latest_Version_of_wxWidgets#The_wx-config_script"},{default:a(()=>[...t[3]||(t[3]=[e("這裏",-1)])]),_:1}),t[5]||(t[5]=e("。",-1))]),t[27]||(t[27]=n("h3",{id:"資源",tabindex:"-1"},[e("資源 "),n("a",{class:"header-anchor",href:"#資源","aria-label":"Permalink to “資源”"},"​")],-1)),n("p",null,[t[7]||(t[7]=e("下載wxWidgets的源碼和幫助 ",-1)),l(i,{href:"https://www.wxwidgets.org/downloads/"},{default:a(()=>[...t[6]||(t[6]=[e("https://www.wxwidgets.org/downloads/",-1)])]),_:1})]),n("p",null,[t[9]||(t[9]=e("wxWidgets編譯的wiki頁面 ",-1)),l(i,{href:"https://wiki.wxwidgets.org/Compiling_and_getting_started"},{default:a(()=>[...t[8]||(t[8]=[e("https://wiki.wxwidgets.org/Compiling_and_getting_started",-1)])]),_:1})]),n("p",null,[t[11]||(t[11]=e("使用wxWidgets最新版本(3.0+)的事項 ",-1)),l(i,{href:"https://wiki.wxwidgets.org/Updating_to_the_Latest_Version_of_wxWidgets"},{default:a(()=>[...t[10]||(t[10]=[e("https://wiki.wxwidgets.org/Updating_to_the_Latest_Version_of_wxWidgets",-1)])]),_:1})]),t[28]||(t[28]=n("hr",null,null,-1)),n("p",null,[t[13]||(t[13]=e("via: ",-1)),l(i,{href:"http://www.binarytides.com/install-wxwidgets-ubuntu/"},{default:a(()=>[...t[12]||(t[12]=[e("http://www.binarytides.com/install-wxwidgets-ubuntu/",-1)])]),_:1})]),n("p",null,[t[17]||(t[17]=e("作者：",-1)),l(i,{href:"https://plus.google.com/117145272367995638274/posts"},{default:a(()=>[...t[14]||(t[14]=[e("Silver Moon",-1)])]),_:1}),t[18]||(t[18]=e(" 譯者：",-1)),l(i,{href:"https://github.com/geekpi"},{default:a(()=>[...t[15]||(t[15]=[e("geekpi",-1)])]),_:1}),t[19]||(t[19]=e(" 校對：",-1)),l(i,{href:"https://github.com/wxy"},{default:a(()=>[...t[16]||(t[16]=[e("wxy",-1)])]),_:1})]),n("p",null,[t[22]||(t[22]=e("本文由 ",-1)),l(i,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[20]||(t[20]=[e("LCTT",-1)])]),_:1}),t[23]||(t[23]=e(" 原創翻譯，",-1)),l(i,{href:"https://linux.cn/"},{default:a(()=>[...t[21]||(t[21]=[e("Linux中國",-1)])]),_:1}),t[24]||(t[24]=e(" 榮譽推出",-1))])])}const T=o(w,[["render",u]]);export{h as __pageData,T as default};
