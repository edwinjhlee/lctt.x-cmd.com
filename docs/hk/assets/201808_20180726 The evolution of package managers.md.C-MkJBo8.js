import{_ as t,a0 as o,w as d,s as r,I as n,x as a,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"包管理器的進化 | LCTT x X-CMD","titleTemplate":false,"description":"包管理器的進化 | LCTT (201808) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"包管理器的進化 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"包管理器的進化 | LCTT (201808) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201808/20180726 The evolution of package managers","title":"包管理器的進化","tag":"201808","desc":""},"relativePath":"201808/20180726 The evolution of package managers.md","filePath":"[post].md"}'),c={name:"201808/20180726 The evolution of package managers.md"};function u(g,s,k,h,b,m){const p=o("Link");return d(),r("div",null,[s[106]||(s[106]=n("h1",{id:"包管理器的進化",tabindex:"-1"},[a("包管理器的進化 "),n("a",{class:"header-anchor",href:"#包管理器的進化","aria-label":"Permalink to “包管理器的進化”"},"​")],-1)),s[107]||(s[107]=n("blockquote",null,[n("p",null,"包管理器在 Linux 軟件管理中扮演了重要角色。這裏對一些主要的包管理器進行了對比。")],-1)),s[108]||(s[108]=n("p",null,[n("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/suitcase_container_bag.png?itok=q40lKCBY",alt:""})],-1)),s[109]||(s[109]=n("p",null,"今天，每個可計算設備都會使用某種軟件來完成預定的任務。在軟件開發的上古時期，為了找出軟件中的“蟲”和其它缺陷，軟件會被嚴格的測試。在近十年間，軟件被通過互聯網來頻繁分發，以試圖通過持續不斷的安裝新版本的軟件來解決軟件的缺陷問題。在很多情況下，每個獨立的應用軟件都有其自帶的更新器。而其它一些軟件則讓用户自己去搞明白如何獲取和升級軟件。",-1)),n("p",null,[s[1]||(s[1]=a("Linux 較早採用了維護一箇中心化的軟件倉庫來發布軟件更新這種做法，用户可以在這個軟件倉庫裏查找並安裝軟件。在這篇文章裏， 筆者將回顧在 Linux 上的如何進行軟件安裝的歷史，以及現代操作系統如何保持更新以應對",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures"},{default:i(()=>[...s[0]||(s[0]=[a("軟件安全漏洞（CVE）",-1)])]),_:1}),s[2]||(s[2]=a("不斷的曝光。",-1))]),s[110]||(s[110]=l(`<h3 id="那麼在包管理器出現之前在-linux-上是如何安裝軟件的呢" tabindex="-1">那麼在包管理器出現之前在 Linux 上是如何安裝軟件的呢？ <a class="header-anchor" href="#那麼在包管理器出現之前在-linux-上是如何安裝軟件的呢" aria-label="Permalink to “那麼在包管理器出現之前在 Linux 上是如何安裝軟件的呢？”">​</a></h3><p>曾幾何時，軟件都是通過 FTP 或郵件列表（LCTT 譯註：即通過郵件列表發佈源代碼的補丁包）來分發的（最終這些發佈方式在互聯網的迅猛發展下都演化成為一個個現今常見的軟件發佈網站）。（一般在一個 tar 文件中）只有一個非常小的文件包含了創建二進制的説明。你需要做的是先解壓這個包，然後仔細閲讀當中的 <code>README</code> 文件， 如果你的系統上恰好有 GCC（LCTT 譯註：GNU C Compiler）或者其它廠商的 C 編譯器的話，你得首先運行 <code>./configure</code> 腳本，並在腳本後添加相應的參數，如庫函數的路徑、創建可執行文件的路徑等等。除此之外，這個配置過程也會檢查你操作系統上的軟件依賴是否滿足安裝要求。如果缺失了任何主要的依賴，該配置腳本會退出不再繼續安裝，直到你滿足了該依賴。如果該配置腳本正常執行完畢，將會創建一個 <code>Makefile</code> 文件。</p><p>當有了一個 <code>Makefile</code> 文件時， 你就可以接下去執行 <code>make</code> 命令（該命令由你所使用的編譯器提供）。<code>make</code> 命令也有很多參數，被稱為 <code>make</code> <ruby>標識<rt>flag</rt></ruby>，這些標識能為你的系統優化最終生成出來的二進制可執行文件。在計算機世界的早期，這些優化是非常重要的，因為彼時的計算機硬件正在為了跟上軟件迅速的發展而疲於奔命。今日今時，編譯標識變得更加通用而不是為了優化哪些具體的硬件型號，這得益於現代硬件和現代軟件相比已經變得成本低廉，唾手可得。</p><p>最後，在 <code>make</code> 完成之後， 你需要運行 <code>make install</code> （或 <code>sudo make install</code>）（LCTT 譯註：依賴於你的用户權限） 來“真正”將這個軟件安裝到你的系統上。可以想像，為你係統上的每一個軟件都執行上述的流程將是多麼無聊費時，更不用説如果更新一個已經安裝的軟件將會多複雜，多麼需要精力投入。（LCTT 譯註：上述流程也稱 CMMI 安裝， 即Configure、Make、Make Install）</p><h3 id="那麼軟件包是什麼" tabindex="-1">那麼軟件包是什麼？ <a class="header-anchor" href="#那麼軟件包是什麼" aria-label="Permalink to “那麼軟件包是什麼？”">​</a></h3><p><ruby>軟件包<rt>package</rt></ruby>（LCTT 譯註：下文簡稱“包”）這個概念是用來解決在軟件安裝、升級過程中的複雜性的。包將軟件安裝升級中需要的多個數據文件合併成一個單獨的文件，這將便於傳輸和（通過壓縮文件來）減小存儲空間（LCTT 譯註：減少存儲空間這一點在現在已經不再重要），包中的二進制可執行文件已根據開發者所選擇的編譯標識預編譯。包本身包括了所有需要的元數據，如軟件的名字、軟件的説明、版本號，以及要運行這個軟件所需要的依賴包等等。</p><p>不同流派的 Linux 發行版都創造了它們自己的包格式，其中最常用的包格式有：</p><ul><li>.deb：這種包格式由 Debian、Ubuntu、Linux Mint 以及其它的變種使用。這是最早被髮明的包類型。</li><li>.rpm：這種包格式最初被稱作<ruby>紅帽包管理器<rt>Red Hat Package Manager</rt></ruby>（LCTT 譯註： 取自英文的首字母）。使用這種包的 Linux 發行版有 Red Hat、Fedora、SUSE 以及其它一些較小的發行版。</li><li>.tar.xz：這種包格式只是一個軟件壓縮包而已，這是 Arch Linux 所使用的格式。（LCTT 譯註：這種格式無需特別的包管理器，解壓即可）</li></ul><p>儘管上述的包格式自身並不能直接管理軟件的依賴問題，但是它們的出現將 Linux 軟件包管理向前推進了一大步。</p><h3 id="軟件倉庫到底是什麼" tabindex="-1">軟件倉庫到底是什麼？ <a class="header-anchor" href="#軟件倉庫到底是什麼" aria-label="Permalink to “軟件倉庫到底是什麼？”">​</a></h3><p>多年以前（當智能電話還沒有像現在這樣流行時），非 Linux 世界的用户是很難理解軟件倉庫的概念的。甚至今時今日，大多數完全工作在 Windows 下的用户還是習慣於打開瀏覽器，搜索要安裝的軟件（或升級包），下載然後安裝。但是，智能電話傳播了軟件“商店”（LCTT 譯註： 對應 Linux 裏的軟件倉庫）這樣一個概念。智能電話用户獲取軟件的方式和包管理器的工作方式已經非常相近了。些許不同的是，儘管大多數軟件商店還在費力美化它的圖形界面來吸引用户，大多數 Linux 用户還是願意使用命令列來安裝軟件。總而言之，軟件倉庫是一箇中心化的可安裝軟件列表，上面列舉了在當前系統中預先配置好的軟件倉庫裏所有可以安裝的軟件。下面我們舉一些例子來説在各個不同的 Linux 發行版下如何在對應的軟件倉庫裏搜尋某個特定的軟件（輸出有截斷）。</p><p>在 Arch Linux 下使用 <code>aurman</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@arch ~ $  aurman -Ss kate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extra/kate 18.04.2-2 (kde-applications kdebase)</span></span>
<span class="line"><span>    Advanced Text Editor</span></span>
<span class="line"><span>aur/kate-root 18.04.0-1 (11, 1.139399)</span></span>
<span class="line"><span>    Advanced Text Editor, patched to be able to run as root</span></span>
<span class="line"><span>aur/kate-git r15288.15d26a7-1 (1, 1e-06)</span></span>
<span class="line"><span>    An advanced editor component which is used in numerous KDE applications requiring a text editing component</span></span></code></pre></div><p>在 CentOS 7 下使用 <code>yum</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[user@centos ~]$ yum search kate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kate-devel.x86_64 : Development files for kate</span></span>
<span class="line"><span>kate-libs.x86_64 : Runtime files for kate</span></span>
<span class="line"><span>kate-part.x86_64 : Kate kpart plugin</span></span></code></pre></div><p>在 Ubuntu 下使用 <code>apt</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@ubuntu ~ $ apt search kate</span></span>
<span class="line"><span>Sorting... Done</span></span>
<span class="line"><span>Full Text Search... Done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kate/xenial 4:15.12.3-0ubuntu2 amd64</span></span>
<span class="line"><span>  powerful text editor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kate-data/xenial,xenial 4:4.14.3-0ubuntu4 all</span></span>
<span class="line"><span>  shared data files for Kate text editor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kate-dbg/xenial 4:15.12.3-0ubuntu2 amd64</span></span>
<span class="line"><span>  debugging symbols for Kate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kate5-data/xenial,xenial 4:15.12.3-0ubuntu2 all</span></span>
<span class="line"><span>  shared data files for Kate text editor</span></span></code></pre></div><h3 id="最好用的包管理器有哪些" tabindex="-1">最好用的包管理器有哪些？ <a class="header-anchor" href="#最好用的包管理器有哪些" aria-label="Permalink to “最好用的包管理器有哪些？”">​</a></h3><p>如上示例的輸出，包管理器用來和相應的軟件倉庫交互，獲取軟件的相應信息。下面對它們做一個簡短介紹。</p><h4 id="基於-prm-包格式的包管理器" tabindex="-1">基於 PRM 包格式的包管理器 <a class="header-anchor" href="#基於-prm-包格式的包管理器" aria-label="Permalink to “基於 PRM 包格式的包管理器”">​</a></h4>`,20)),n("p",null,[s[5]||(s[5]=a("更新基於 RPM 的系統，特別是那些基於 Red Hat 技術的系統，有着非常有趣而又詳實的歷史。實際上，現在的 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Yum_(software)"},{default:i(()=>[...s[3]||(s[3]=[a("YUM",-1)])]),_:1}),s[6]||(s[6]=a(" 版本（用於 企業級發行版）和 ",-1)),e(p,{href:"https://fedoraproject.org/wiki/DNF"},{default:i(()=>[...s[4]||(s[4]=[a("DNF",-1)])]),_:1}),s[7]||(s[7]=a("（用於社區版）就融合了好幾個開源項目來提供它們現在的功能。",-1))]),n("p",null,[s[9]||(s[9]=a("Red Hat 最初使用的包管理器，被稱為 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Rpm_(software)"},{default:i(()=>[...s[8]||(s[8]=[a("RPM",-1)])]),_:1}),s[10]||(s[10]=a("（",-1)),s[11]||(s[11]=n("ruby",null,[a("紅帽包管理器"),n("rt",null,"Red Hat Package Manager")],-1)),s[12]||(s[12]=a("），時至今日還在使用着。不過，它的主要作用是安裝本地的 RPM 包，而不是去在軟件倉庫搜索軟件。後來開發了一個叫 ",-1)),s[13]||(s[13]=n("code",null,"up2date",-1)),s[14]||(s[14]=a(" 的包管理器，它被用來通知用户包的最新更新，還能讓用户在遠程倉庫裏搜索軟件並便捷的安裝軟件的依賴。儘管這個包管理器盡職盡責，但一些社區成員還是感覺 ",-1)),s[15]||(s[15]=n("code",null,"up2date",-1)),s[16]||(s[16]=a(" 有着明顯的不足。",-1))]),n("p",null,[s[20]||(s[20]=a("現在的 YUM 來自於好幾個不同社區的努力。1999-2001 年一羣在 Terra Soft Solution 的夥計們開發了",-1)),s[21]||(s[21]=n("ruby",null,[a("黃狗更新器"),n("rt",null,"Yellowdog Updater")],-1)),s[22]||(s[22]=a("（YUP），將其作為 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Yellow_Dog_Linux"},{default:i(()=>[...s[17]||(s[17]=[a("Yellow Dog Linux",-1)])]),_:1}),s[23]||(s[23]=a(" 圖形安裝器的後端。",-1)),s[24]||(s[24]=n("ruby",null,[a("杜克大學"),n("rt",null,"Duke University")],-1)),s[25]||(s[25]=a("喜歡這個主意就決定去增強它的功能，它們開發了",-1)),n("ruby",null,[e(p,{href:"https://www.archlinux.org/"},{default:i(()=>[...s[18]||(s[18]=[a("黃狗更新器--修改版",-1)])]),_:1}),s[19]||(s[19]=n("rt",null,"Yellowdog Updater, Modified",-1))]),s[26]||(s[26]=a("（YUM），這最終被用來幫助管理杜克大學的 Red Hat 系統。Yum 壯大的很快，到 2005 年，它已經被超過一半的 Linux 市場所採用。今日，幾乎所有的使用 RPM 的的 Linux 都會使用 YUM 來進行包管理（當然也有一些例外）。",-1))]),s[111]||(s[111]=l(`<h5 id="使用-yum" tabindex="-1">使用 YUM <a class="header-anchor" href="#使用-yum" aria-label="Permalink to “使用 YUM”">​</a></h5><p>為了能讓 YUM 正常工作，比如從一個軟件倉庫裏下載和安裝包，倉庫説明文件必須放在 <code>/etc/yum.repos.d/</code> 目錄下且必須以 <code>.repo</code> 作為擴展名。如下是一個示例文件的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[local_base]</span></span>
<span class="line"><span>name=Base CentOS  (local)</span></span>
<span class="line"><span>baseurl=http://7-repo.apps.home.local/yum-repo/7/</span></span>
<span class="line"><span>enabled=1</span></span>
<span class="line"><span>gpgcheck=0</span></span></code></pre></div><p>這是筆者本地倉庫之一，這也是為什麼 gpgcheck 值為 0 的原因。如果這個值為 1 的話，每個包都需要被密鑰簽名，相應的密鑰（的公鑰）也要導入到安裝軟件的系統上。因為這個軟件倉庫是筆者本人維護的且筆者信任這個倉庫裏的包，所以就不去對它們一一簽名了。</p><p>當一個倉庫文件準備好時，你就能開始從遠程軟件倉庫開始安裝文件了。最基本的命令是 <code>yum update</code>，這將會更新所有已安裝的包。你也不需要用特殊的命令來更新倉庫本身，所有這一切都已自動完成了。運行命令示例如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[user@centos ~]$ sudo yum update</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, product-id, search-disabled-repos, subscription-manager</span></span>
<span class="line"><span>local_base                             | 3.6 kB  00:00:00    </span></span>
<span class="line"><span>local_epel                             | 2.9 kB  00:00:00    </span></span>
<span class="line"><span>local_rpm_forge                        | 1.9 kB  00:00:00    </span></span>
<span class="line"><span>local_updates                          | 3.4 kB  00:00:00    </span></span>
<span class="line"><span>spideroak-one-stable                   | 2.9 kB  00:00:00    </span></span>
<span class="line"><span>zfs                                    | 2.9 kB  00:00:00    </span></span>
<span class="line"><span>(1/6): local_base/group_gz             | 166 kB  00:00:00    </span></span>
<span class="line"><span>(2/6): local_updates/primary_db        | 2.7 MB  00:00:00    </span></span>
<span class="line"><span>(3/6): local_base/primary_db           | 5.9 MB  00:00:00    </span></span>
<span class="line"><span>(4/6): spideroak-one-stable/primary_db |  12 kB  00:00:00    </span></span>
<span class="line"><span>(5/6): local_epel/primary_db           | 6.3 MB  00:00:00    </span></span>
<span class="line"><span>(6/6): zfs/x86_64/primary_db           |  78 kB  00:00:00    </span></span>
<span class="line"><span>local_rpm_forge/primary_db             | 125 kB  00:00:00    </span></span>
<span class="line"><span>Determining fastest mirrors</span></span>
<span class="line"><span>Resolving Dependencies</span></span>
<span class="line"><span>--&gt; Running transaction check</span></span></code></pre></div><p>如果你確定想讓 YUM 在執行任何命令時不要停下來等待用户輸入，你可以命令裏放 <code>-y</code> 標誌，如 <code>yum update -y</code>。</p><p>安裝一個新包很簡單。首先，用 <code>yum search</code> 搜索包的名字。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[user@centos ~]$ yum search kate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>artwiz-aleczapka-kates-fonts.noarch : Kates font in Artwiz family</span></span>
<span class="line"><span>ghc-highlighting-kate-devel.x86_64 : Haskell highlighting-kate library development files</span></span>
<span class="line"><span>kate-devel.i686 : Development files for kate</span></span>
<span class="line"><span>kate-devel.x86_64 : Development files for kate</span></span>
<span class="line"><span>kate-libs.i686 : Runtime files for kate</span></span>
<span class="line"><span>kate-libs.x86_64 : Runtime files for kate</span></span>
<span class="line"><span>kate-part.i686 : Kate kpart plugin</span></span></code></pre></div><p>當你找到你要安裝的包後，你可以用 <code>sudo yum install kate-devel -y</code> 來安裝。如果你安裝了你不需要的軟件，可以用 <code>sudo yum remove kdate-devel -y</code> 來從系統上刪除它，默認情況下，YUM 會刪除軟件包以及它的依賴。</p><p>有些時候你甚至都不清楚要安裝的包的名稱，你只知道某個實用程序的名字。（LCTT 譯註：可以理解實用程序是安裝包的子集）。例如，你想找實用程序 <code>updatedb</code>（它是用來創建/更新由 <code>locate</code> 命令所使用的資料庫的），直接試圖安裝 <code>updatedb</code> 會返回下面的結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[user@centos ~]$ sudo yum install updatedb</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, langpacks</span></span>
<span class="line"><span>Loading mirror speeds from cached hostfile</span></span>
<span class="line"><span>No package updatedb available.</span></span>
<span class="line"><span>Error: Nothing to do</span></span></code></pre></div><p>你可以搜索實用程序來自哪個包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[user@centos ~]$ yum whatprovides *updatedb</span></span>
<span class="line"><span>Loaded plugins: fastestmirror, langpacks</span></span>
<span class="line"><span>Loading mirror speeds from cached hostfile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bacula-director-5.2.13-23.1.el7.x86_64 : Bacula Director files</span></span>
<span class="line"><span>Repo        : local_base</span></span>
<span class="line"><span>Matched from:</span></span>
<span class="line"><span>Filename    : /usr/share/doc/bacula-director-5.2.13/updatedb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mlocate-0.26-8.el7.x86_64 : An utility for finding files by name</span></span>
<span class="line"><span>Repo        : local_base</span></span>
<span class="line"><span>Matched from:</span></span>
<span class="line"><span>Filename    : /usr/bin/updatedb</span></span></code></pre></div><p>筆者在前面使用星號的原因是 <code>yum whatprovides</code> 使用路徑去匹配文件。筆者不確定文件在哪裏，所以使用星號去指代任意路徑。</p><p>當然 YUM 還有很多其它的可選項。這裏筆者希望你能夠自己查看 YUM 的手冊來找到其它額外的可選項。</p>`,16)),n("p",null,[n("ruby",null,[e(p,{href:"https://en.wikipedia.org/wiki/DNF_(software)"},{default:i(()=>[...s[27]||(s[27]=[a("時髦的 Yum",-1)])]),_:1}),s[28]||(s[28]=n("rt",null,"Dandified Yum",-1))]),s[29]||(s[29]=a("（DNF）是 YUM 的下一代接班人。從 Fedora 18 開始被作為包管理器引入系統，不過它並沒有被企業版所採用，所以它只在 Fedora（以及變種）上佔據了主導地位。DNF 的用法和 YUM 幾乎一模一樣，它主要是用來解決性能問題、晦澀無説明的API、緩慢/不可靠的依賴解析，以及偶爾的高內存佔用。DNF 是作為 YUM 的直接替代品來開發的，因此這裏筆者就不重複它的用法了，你只用簡單的將 ",-1)),s[30]||(s[30]=n("code",null,"yum",-1)),s[31]||(s[31]=a(" 替換為 ",-1)),s[32]||(s[32]=n("code",null,"dnf",-1)),s[33]||(s[33]=a(" 就行了。",-1))]),s[112]||(s[112]=n("h5",{id:"使用-zypper",tabindex:"-1"},[a("使用 Zypper "),n("a",{class:"header-anchor",href:"#使用-zypper","aria-label":"Permalink to “使用 Zypper”"},"​")],-1)),n("p",null,[e(p,{href:"https://en.opensuse.org/Portal:Zypper"},{default:i(()=>[...s[34]||(s[34]=[a("Zypper",-1)])]),_:1}),s[41]||(s[41]=a(" 是用來管理 RPM 包的另外一個包管理器。這個包管理器主要用於 ",-1)),e(p,{href:"https://www.suse.com/"},{default:i(()=>[...s[35]||(s[35]=[a("SUSE",-1)])]),_:1}),s[42]||(s[42]=a("（和 ",-1)),e(p,{href:"https://www.opensuse.org/"},{default:i(()=>[...s[36]||(s[36]=[a("openSUSE",-1)])]),_:1}),s[43]||(s[43]=a("），在",-1)),e(p,{href:"https://en.wikipedia.org/wiki/MeeGo"},{default:i(()=>[...s[37]||(s[37]=[a("MeeGo",-1)])]),_:1}),s[44]||(s[44]=a("、",-1)),e(p,{href:"https://sailfishos.org/"},{default:i(()=>[...s[38]||(s[38]=[a("Sailfish OS",-1)])]),_:1}),s[45]||(s[45]=a("、",-1)),e(p,{href:"https://www.tizen.org/"},{default:i(()=>[...s[39]||(s[39]=[a("Tizen",-1)])]),_:1}),s[46]||(s[46]=a(" 上也有使用。它最初開發於 2006 年，已經經過了多次迭代。除了作為系統管理工具 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/YaST"},{default:i(()=>[...s[40]||(s[40]=[a("YaST",-1)])]),_:1}),s[47]||(s[47]=a(" 的後端和有些用户認為它比 YUM 要快之外也沒有什麼好多説的。",-1))]),s[113]||(s[113]=l(`<p>Zypper 使用與 YUM 非常相像。它被用來搜索、更新、安裝和刪除包，簡單的使用命令如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>zypper search kate</span></span>
<span class="line"><span>zypper update</span></span>
<span class="line"><span>zypper install kate</span></span>
<span class="line"><span>zypper remove kate</span></span></code></pre></div><p>主要的不同來自於使用 Zypper 的系統在添加軟件倉庫的做法上，Zypper 使用包管理器本身來添加軟件倉庫。最通用的方法是通過一個 URL，但是 Zypper 也支持從倉庫文件裏導入。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>suse:~ # zypper addrepo http://download.videolan.org/pub/vlc/SuSE/15.0 vlc</span></span>
<span class="line"><span>Adding repository &#39;vlc&#39; [done]</span></span>
<span class="line"><span>Repository &#39;vlc&#39; successfully added</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Enabled     : Yes</span></span>
<span class="line"><span>Autorefresh : No</span></span>
<span class="line"><span>GPG Check   : Yes</span></span>
<span class="line"><span>URI         : http://download.videolan.org/pub/vlc/SuSE/15.0</span></span>
<span class="line"><span>Priority    : 99</span></span></code></pre></div><p>你也能用相似的手段來刪除軟件倉庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>suse:~ # zypper removerepo vlc</span></span>
<span class="line"><span>Removing repository &#39;vlc&#39; ...................................[done]</span></span>
<span class="line"><span>Repository &#39;vlc&#39; has been removed.</span></span></code></pre></div><p>使用 <code>zypper repos</code> 命令來查看當前系統上的軟件倉庫的狀態：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>suse:~ # zypper repos</span></span>
<span class="line"><span>Repository priorities are without effect. All enabled repositories share the same priority.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  | Alias                     | Name                                    | Enabled | GPG Check | Refresh</span></span>
<span class="line"><span>---|---------------------------|-----------------------------------------|---------|-----------|--------</span></span>
<span class="line"><span> 1 | repo-debug                | openSUSE-Leap-15.0-Debug                | No      | ----      | ----  </span></span>
<span class="line"><span> 2 | repo-debug-non-oss        | openSUSE-Leap-15.0-Debug-Non-Oss        | No      | ----      | ----  </span></span>
<span class="line"><span> 3 | repo-debug-update         | openSUSE-Leap-15.0-Update-Debug         | No      | ----      | ----  </span></span>
<span class="line"><span> 4 | repo-debug-update-non-oss | openSUSE-Leap-15.0-Update-Debug-Non-Oss | No      | ----      | ----  </span></span>
<span class="line"><span> 5 | repo-non-oss              | openSUSE-Leap-15.0-Non-Oss              | Yes     | ( p) Yes  | Yes    </span></span>
<span class="line"><span> 6 | repo-oss                  | openSUSE-Leap-15.0-Oss                  | Yes     | ( p) Yes  | Yes</span></span></code></pre></div><p><code>zypper</code> 甚至還有和 YUM 相同的功能：搜索包含文件或二進制的包。和 YUM 有所不同的是，它在命令列裏使用破折號（但是這個搜索方法現在被廢除了……）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>localhost:~ # zypper what-provides kate</span></span>
<span class="line"><span>Command &#39;what-provides&#39; is replaced by &#39;search --provides --match-exact&#39;.</span></span>
<span class="line"><span>See &#39;help search&#39; for all available options.</span></span>
<span class="line"><span>Loading repository data...</span></span>
<span class="line"><span>Reading installed packages...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>S  | Name | Summary              | Type      </span></span>
<span class="line"><span>---|------|----------------------|------------</span></span>
<span class="line"><span>i+ | Kate | Advanced Text Editor | application</span></span>
<span class="line"><span>i  | kate | Advanced Text Editor | package</span></span></code></pre></div><p>YUM、DNF 和 Zypper 三劍客擁有的功能比在這篇小文裏討論的要多得多，請查看官方文檔來得到更深入的信息。</p><h4 id="基於-debian-的包管理器" tabindex="-1">基於 Debian 的包管理器 <a class="header-anchor" href="#基於-debian-的包管理器" aria-label="Permalink to “基於 Debian 的包管理器”">​</a></h4>`,12)),n("p",null,[s[50]||(s[50]=a("作為一個現今仍在被積極維護的最古老的 Linux 發行版之一，Debian 的包管理系統和基於 RPM 的系統的包管理系統非常類似。它使用擴展名為 “.deb” 的包，這種文件能被一個叫做 ",-1)),s[51]||(s[51]=n("code",null,"dpkg",-1)),s[52]||(s[52]=a(" 的工具所管理。",-1)),s[53]||(s[53]=n("code",null,"dpgk",-1)),s[54]||(s[54]=a(" 同 ",-1)),s[55]||(s[55]=n("code",null,"rpm",-1)),s[56]||(s[56]=a(" 非常相似，它被設計成用來管理在存在於本地（硬盤）的包。它不會去做包依賴關係解析（它會做依賴關係檢查，不過僅此而已），而且在同遠程軟件倉庫交互上也並無可靠的途徑。為了提高用户體驗並便於使用，Debian 項目開始了一個軟件項目：Deity，最終這個代號被丟棄並改成了現在的 ",-1)),n("ruby",null,[e(p,{href:"https://en.wikipedia.org/wiki/APT_(Debian)"},{default:i(()=>[...s[48]||(s[48]=[a("高級打包工具",-1)])]),_:1}),s[49]||(s[49]=n("rt",null,"Advanced Package Tool",-1))]),s[57]||(s[57]=a("（APT）。",-1))]),s[114]||(s[114]=l(`<p>在 1998 年，APT 測試版本發佈（甚至早於 1999 年的 Debian 2.1 發佈），許多用户認為 APT 是基於 Debian 系統標配功能之一。APT 使用了和 RPM 一樣的風格來管理倉庫，不過和 YUM 使用單獨的 .repo 文件不同，APT 曾經使用 <code>/etc/apt/sources.list</code> 文件來管理軟件倉庫，後來的變成也可以使用 <code>/etc/apt/sources.d</code> 目錄來管理。如同基於 RPM 的系統一樣，你也有很多很多選項配置來完成同樣的事情。你可以編輯和創建前述的文件，或者使用圖形界面來完成上述工作（如 Ubuntu 的“Software &amp; Updates”），為了給所有的 Linux 發行版統一的待遇，筆者將會只介紹命令列的選項。 要想不直接編輯文件內容而直接增加軟件倉庫的話，可以用如下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@ubuntu:~$ sudo apt-add-repository &quot;deb http://APT.spideroak.com/ubuntu-spideroak-hardy/ release restricted&quot;</span></span></code></pre></div><p>這個命令將會在 <code>/etc/apt/sources.list.d</code> 目錄裏創建一個 <code>spideroakone.list</code> 文件。顯而易見，文件裏的內容依賴於所添加的軟件倉庫，如果你想加一個<ruby>個人軟件包存檔<rt>Personal Package Archive</rt></ruby>（PPA）的話，你可以用如下的辦法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@ubuntu:~$ sudo apt-add-repository ppa:gnome-desktop</span></span></code></pre></div><p>注意： Debian 原生並不支持本地 PPA 。</p><p>在添加了一個軟件倉庫後，需要通知基於 Debian 的系統有一個新的倉庫可以用來搜索包，可以運行 <code>apt-get update</code> 來完成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@ubuntu:~$ sudo apt-get update</span></span>
<span class="line"><span>Get:1 http://security.ubuntu.com/ubuntu xenial-security InRelease [107 kB]</span></span>
<span class="line"><span>Hit:2 http://APT.spideroak.com/ubuntu-spideroak-hardy release InRelease</span></span>
<span class="line"><span>Hit:3 http://ca.archive.ubuntu.com/ubuntu xenial InRelease</span></span>
<span class="line"><span>Get:4 http://ca.archive.ubuntu.com/ubuntu xenial-updates InRelease [109 kB]              </span></span>
<span class="line"><span>Get:5 http://security.ubuntu.com/ubuntu xenial-security/main amd64 Packages [517 kB]</span></span>
<span class="line"><span>Get:6 http://security.ubuntu.com/ubuntu xenial-security/main i386 Packages [455 kB]      </span></span>
<span class="line"><span>Get:7 http://security.ubuntu.com/ubuntu xenial-security/main Translation-en [221 kB]    </span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Fetched 6,399 kB in 3s (2,017 kB/s)                                          </span></span>
<span class="line"><span>Reading package lists... Done</span></span></code></pre></div><p>現在新的軟件倉庫已經在你的系統裏安裝並更新好了，你可以用 <code>apt-cache</code> 來搜索你想要的包了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@ubuntu:~$ apt-cache search kate</span></span>
<span class="line"><span>aterm-ml - Afterstep XVT - a VT102 emulator for the X window system</span></span>
<span class="line"><span>frescobaldi - Qt4 LilyPond sheet music editor</span></span>
<span class="line"><span>gitit - Wiki engine backed by a git or darcs filestore</span></span>
<span class="line"><span>jedit - Plugin-based editor for programmers</span></span>
<span class="line"><span>kate - powerful text editor</span></span>
<span class="line"><span>kate-data - shared data files for Kate text editor</span></span>
<span class="line"><span>kate-dbg - debugging symbols for Kate</span></span>
<span class="line"><span>katepart - embeddable text editor component</span></span></code></pre></div><p>要安裝 kate，簡單的運行下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@ubuntu:~$ sudo apt-get install kate</span></span></code></pre></div><p>要是刪除一個包，使用 <code>apt-get remove</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@ubuntu:~$ sudo apt-get remove kate</span></span></code></pre></div><p>要探索一個包的話，APT 並沒有提供一個類似於 <code>yum whatprovides</code> 的功能，如果你想深入包內部去確定一個特定的文件的話，也有一些別的方法能幫你完成這個目標，</p><p>如： 用 <code>dpkg</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@ubuntu:~$ dpkg -S /bin/ls</span></span>
<span class="line"><span>coreutils: /bin/ls</span></span></code></pre></div><p>或者： <code>apt-file</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@ubuntu:~$ sudo apt-get install apt-file -y</span></span>
<span class="line"><span>user@ubuntu:~$ sudo apt-file update</span></span>
<span class="line"><span>user@ubuntu:~$ apt-file search kate</span></span></code></pre></div><p>與 <code>yum whatprovides</code> 不同的是，<code>apt-file search</code> 的問題是因為自動添加了通配符搜索而輸出過於詳細（除非你知道確切的路徑），最終在結果裏包括了所有包含有 “kate” 的結果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>kate: /usr/bin/kate</span></span>
<span class="line"><span>kate: /usr/lib/x86_64-linux-gnu/qt5/plugins/ktexteditor/katebacktracebrowserplugin.so</span></span>
<span class="line"><span>kate: /usr/lib/x86_64-linux-gnu/qt5/plugins/ktexteditor/katebuildplugin.so</span></span>
<span class="line"><span>kate: /usr/lib/x86_64-linux-gnu/qt5/plugins/ktexteditor/katecloseexceptplugin.so</span></span>
<span class="line"><span>kate: /usr/lib/x86_64-linux-gnu/qt5/plugins/ktexteditor/katectagsplugin.so</span></span></code></pre></div><p>上面這些例子大部分都使用了 <code>apt-get</code>。請注意現今大多數的 Ubuntu 教程裏都徑直使用了 <code>apt</code>。 單獨一個 <code>apt</code> 設計用來實現那些最常用的 APT 命令的。<code>apt</code> 命令看上去是用來整合那些被分散在 <code>apt-get</code>、<code>apt-cache</code> 以及其它一些命令的的功能的。它還加上了一些額外的改進，如色彩、進度條以及其它一些小功能。上述的常用命令都能被 <code>apt</code> 替代，但是並不是所有的基於 Debian 的系統都能使用 <code>apt</code> 接受安全包補丁的，你有可能要安裝額外的包的實現上述功能。</p><h4 id="基於-arch-的包管理器" tabindex="-1">基於 Arch 的包管理器 <a class="header-anchor" href="#基於-arch-的包管理器" aria-label="Permalink to “基於 Arch 的包管理器”">​</a></h4>`,22)),n("p",null,[e(p,{href:"https://www.archlinux.org/"},{default:i(()=>[...s[58]||(s[58]=[a("Arch Linux",-1)])]),_:1}),s[61]||(s[61]=a(" 使用稱為 ",-1)),e(p,{href:"https://wiki.archlinux.org/index.php/pacman"},{default:i(()=>[...s[59]||(s[59]=[a("packman",-1)])]),_:1}),s[62]||(s[62]=a(" 的包管理器。和 .deb 以及 .rpm 不同，它使用更為傳統的 LZMA2 壓縮包形式 .tar.xz 。這可以使 Arch Linux 包能夠比其它形式的壓縮包（如 gzip）有更小的尺寸。自從 2002 年首次發佈以來， ",-1)),s[63]||(s[63]=n("code",null,"pacman",-1)),s[64]||(s[64]=a(" 一直在穩定發佈和改善。使用它最大的好處之一是它支持 ",-1)),e(p,{href:"https://wiki.archlinux.org/index.php/Arch_Build_System"},{default:i(()=>[...s[60]||(s[60]=[a("Arch Build System",-1)])]),_:1}),s[65]||(s[65]=a("，這是一個從源代碼級別構建包的構建系統。該構建系統藉助一個叫 ",-1)),s[66]||(s[66]=n("code",null,"PKGBUILD",-1)),s[67]||(s[67]=a(" 的文件，這個文件包含了如版本號、發佈號、依賴等等的元數據，以及一個為編譯遵守 Arch Linux 需求的包所需要的帶有必要的編譯選項的腳本。而編譯的結果就是前文所提的被 ",-1)),s[68]||(s[68]=n("code",null,"pacman",-1)),s[69]||(s[69]=a(" 所使用的 .tar.xz 的文件。",-1))]),n("p",null,[s[73]||(s[73]=a("上述的這套系統技術上導致了 ",-1)),n("ruby",null,[e(p,{href:"https://aur.archlinux.org/"},{default:i(()=>[...s[70]||(s[70]=[a("Arch 用户倉庫",-1)])]),_:1}),s[71]||(s[71]=n("rt",null,"Arch User Respository",-1))]),s[74]||(s[74]=a("（AUR）的產生，這是一個社區驅動的軟件倉庫，倉庫裏包括有 ",-1)),s[75]||(s[75]=n("code",null,"PKGBUILD",-1)),s[76]||(s[76]=a(" 文件以及支持補丁或腳本。這給 Arch Linux 帶了無窮無盡的軟件資源。最為明顯的好處是如果一個用户（或開發者）希望他開發的軟件能被廣大公眾所使用，他不必通過官方途徑去在主流軟件倉庫獲得許可。而不利之處則是它必須將依賴社區的流程，類似於 ",-1)),e(p,{href:"https://hub.docker.com/"},{default:i(()=>[...s[72]||(s[72]=[a("Docker Hub",-1)])]),_:1}),s[77]||(s[77]=a("、 Canonical 的 Snap Packages（LCTT 譯註： Canonical 是 Ubuntu 的發行公司），或者其它類似的機制。有很多特定於 AUR 的包管理器能被用來從 AUR 裏的 ",-1)),s[78]||(s[78]=n("code",null,"PGKBUILD",-1)),s[79]||(s[79]=a(" 文件下載、編譯、安裝，下面我們來仔細看看怎麼做。",-1))]),s[115]||(s[115]=l(`<h5 id="使用-pacman-和官方軟件倉庫" tabindex="-1">使用 pacman 和官方軟件倉庫 <a class="header-anchor" href="#使用-pacman-和官方軟件倉庫" aria-label="Permalink to “使用 pacman 和官方軟件倉庫”">​</a></h5><p>Arch 的主要包管理器：<code>pacman</code>，使用標識位而不是像 <code>yum</code> 或 <code>apt</code> 一樣使用命令詞。例如，要搜索一個包，你要用 <code>pacman -Ss</code> 。和 Linux 上別的命令一樣，你可以找到 pacman 的手冊頁和在線幫助。<code>pacman</code> 大多數的命令都使用了同步（<code>-S</code>）這個標識位。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@arch ~ $ pacman -Ss kate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extra/kate 18.04.2-2 (kde-applications kdebase)</span></span>
<span class="line"><span>    Advanced Text Editor</span></span>
<span class="line"><span>extra/libkate 0.4.1-6 [installed]</span></span>
<span class="line"><span>    A karaoke and text codec for embedding in ogg</span></span>
<span class="line"><span>extra/libtiger 0.3.4-5 [installed]</span></span>
<span class="line"><span>    A rendering library for Kate streams using Pango and Cairo</span></span>
<span class="line"><span>extra/ttf-cheapskate 2.0-12</span></span>
<span class="line"><span>    TTFonts collection from dustimo.com</span></span>
<span class="line"><span>community/haskell-cheapskate 0.1.1-100</span></span>
<span class="line"><span>    Experimental markdown processor.</span></span></code></pre></div><p>Arch 也使用和別的包管理器類似的軟件倉庫。在上面的輸出中，搜索結果前面有標明它是從哪個倉庫裏搜索到的（這裏是 <code>extra/</code> 和 <code>community/</code>）。同 Red Hat 和 Debian 系統一樣，Arch 依靠用户將軟件倉庫的信息加入到一個特定的文件裏：<code>/etc/pacman.conf</code>。下面的例子非常接近一個倉庫系統。筆者還打開了 <code>[multilib]</code> 倉庫來支持 Steam：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[options]</span></span>
<span class="line"><span>Architecture = auto</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Color</span></span>
<span class="line"><span>CheckSpace</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SigLevel    = Required DatabaseOptional</span></span>
<span class="line"><span>LocalFileSigLevel = Optional</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[core]</span></span>
<span class="line"><span>Include = /etc/pacman.d/mirrorlist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[extra]</span></span>
<span class="line"><span>Include = /etc/pacman.d/mirrorlist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[community]</span></span>
<span class="line"><span>Include = /etc/pacman.d/mirrorlist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[multilib]</span></span>
<span class="line"><span>Include = /etc/pacman.d/mirrorlist</span></span></code></pre></div><p>你也可以在 <code>pacman.conf</code> 裏指定具體的 URL。這個功能可以用來確保在某一時刻所有的包來自一個確定的地方，比如，如果一個安裝包存在嚴重的功能缺陷並且很不幸它恰好還有幾個包依賴，你能及時回滾到一個安全點，如果你已經在 <code>pacman.conf</code> 里加入了具體的 URL 的話，你就用用這個命令降級你的系統。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[core]</span></span>
<span class="line"><span>Server=https://archive.archlinux.org/repos/2017/12/22/$repo/os/$arch</span></span></code></pre></div><p>和 Debian 系統一樣，Arch 並不會自動更新它的本地倉庫。你可以用下面的命令來刷新包管理器的資料庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@arch ~ $ sudo pacman -Sy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: Synchronizing package databases...</span></span>
<span class="line"><span> core                                                                     130.2 KiB   851K/s 00:00 [##########################################################] 100%</span></span>
<span class="line"><span> extra                                                                   1645.3 KiB  2.69M/s 00:01 [##########################################################] 100%</span></span>
<span class="line"><span> community                                                                  4.5 MiB  2.27M/s 00:02 [##########################################################] 100%</span></span>
<span class="line"><span> multilib is up to date</span></span></code></pre></div><p>你可以看到在上述的輸出中，<code>pacman</code> 認為 multilib 包資料庫是更新到最新狀態的。如果你認為這個結果不正確的話，你可以強制運行刷新：<code>pacman -Syy</code>。如果你想升級你的整個系統的話（不包括從 AUR 安裝的包），你可以運行 <code>pacman -Syu</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@arch ~ $ sudo pacman -Syu</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: Synchronizing package databases...</span></span>
<span class="line"><span> core is up to date</span></span>
<span class="line"><span> extra is up to date</span></span>
<span class="line"><span> community is up to date</span></span>
<span class="line"><span> multilib is up to date</span></span>
<span class="line"><span>:: Starting full system upgrade...</span></span>
<span class="line"><span>resolving dependencies...</span></span>
<span class="line"><span>looking for conflicting packages...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Packages (45) ceph-13.2.0-2  ceph-libs-13.2.0-2  debootstrap-1.0.105-1  guile-2.2.4-1  harfbuzz-1.8.2-1  harfbuzz-icu-1.8.2-1  haskell-aeson-1.3.1.1-20</span></span>
<span class="line"><span>              haskell-attoparsec-0.13.2.2-24  haskell-tagged-0.8.6-1  imagemagick-7.0.8.4-1  lib32-harfbuzz-1.8.2-1  lib32-libgusb-0.3.0-1  lib32-systemd-239.0-1</span></span>
<span class="line"><span>              libgit2-1:0.27.2-1  libinput-1.11.2-1  libmagick-7.0.8.4-1  libmagick6-6.9.10.4-1  libopenshot-0.2.0-1  libopenshot-audio-0.1.6-1  libosinfo-1.2.0-1</span></span>
<span class="line"><span>              libxfce4util-4.13.2-1  minetest-0.4.17.1-1  minetest-common-0.4.17.1-1  mlt-6.10.0-1  mlt-python-bindings-6.10.0-1  ndctl-61.1-1  netctl-1.17-1</span></span>
<span class="line"><span>              nodejs-10.6.0-1  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Total Download Size:      2.66 MiB</span></span>
<span class="line"><span>Total Installed Size:   879.15 MiB</span></span>
<span class="line"><span>Net Upgrade Size:      -365.27 MiB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: Proceed with installation? [Y/n]</span></span></code></pre></div><p>在前面提到的降級系統的情景中，你可以運行 <code>pacman -Syyuu</code> 來強行降級系統。你必須重視這一點：雖然在大多數情況下這不會引起問題，但是這種可能性還是存在，即降級一個包或幾個包將會引起級聯傳播的失敗並會將你的系統處於不一致的狀態（LCTT 譯註：即系統進入無法正常使用的狀態），請務必小心！</p><p>運行 <code>pacman -S kate</code> 來安裝一個包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@arch ~ $ sudo pacman -S kate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resolving dependencies...</span></span>
<span class="line"><span>looking for conflicting packages...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Packages (7) editorconfig-core-c-0.12.2-1  kactivities-5.47.0-1  kparts-5.47.0-1  ktexteditor-5.47.0-2  syntax-highlighting-5.47.0-1  threadweaver-5.47.0-1</span></span>
<span class="line"><span>             kate-18.04.2-2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Total Download Size:   10.94 MiB</span></span>
<span class="line"><span>Total Installed Size:  38.91 MiB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: Proceed with installation? [Y/n]</span></span></code></pre></div><p>你可以運行 <code>pacman -R kate</code> 來刪除一個包。這將會只刪除這個包自身而不會去刪除它的依賴包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@arch ~ $ sudo pacman -S kate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>checking dependencies...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Packages (1) kate-18.04.2-2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Total Removed Size:  20.30 MiB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: Do you want to remove these packages? [Y/n]</span></span></code></pre></div><p>如果你想刪除沒有被其它包依賴的包，你可以運行 <code>pacman -Rs</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@arch ~ $ sudo pacman -Rs kate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>checking dependencies...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Packages (7) editorconfig-core-c-0.12.2-1  kactivities-5.47.0-1  kparts-5.47.0-1  ktexteditor-5.47.0-2  syntax-highlighting-5.47.0-1  threadweaver-5.47.0-1</span></span>
<span class="line"><span>             kate-18.04.2-2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Total Removed Size:  38.91 MiB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: Do you want to remove these packages? [Y/n]</span></span></code></pre></div><p>在筆者看來，Pacman 是搜索一個指定實用程序中的包名的最齊全的工具。如上所示，YUM 和 APT 都依賴於“路徑”去搜索到有用的結果，而 Pacman 則做了一些智能的猜測，它會去猜測你最有可能想搜索的包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>user@arch ~ $ sudo pacman -Fs updatedb</span></span>
<span class="line"><span>core/mlocate 0.26.git.20170220-1</span></span>
<span class="line"><span>    usr/bin/updatedb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>user@arch ~ $ sudo pacman -Fs kate</span></span>
<span class="line"><span>extra/kate 18.04.2-2</span></span>
<span class="line"><span>    usr/bin/kate</span></span></code></pre></div><h5 id="使用-aur" tabindex="-1">使用 AUR <a class="header-anchor" href="#使用-aur" aria-label="Permalink to “使用 AUR”">​</a></h5>`,21)),n("p",null,[s[81]||(s[81]=a("有很多流行的 AUR 包管理器助手。其中 ",-1)),s[82]||(s[82]=n("code",null,"yaourt",-1)),s[83]||(s[83]=a(" 和 ",-1)),s[84]||(s[84]=n("code",null,"pacaur",-1)),s[85]||(s[85]=a(" 頗為流行。不過，這兩個項目已經被 ",-1)),e(p,{href:"https://wiki.archlinux.org/index.php/AUR_helpers#Discontinued_or_problematic"},{default:i(()=>[...s[80]||(s[80]=[a("Arch Wiki",-1)])]),_:1}),s[86]||(s[86]=a(" 列為“不繼續開發以及有已知的問題未解決”。因為這個原因，這裏直接討論 ",-1)),s[87]||(s[87]=n("code",null,"aurman",-1)),s[88]||(s[88]=a("，除了會搜索 AUR 以及包含幾個有幫助的（其實很危險）的選項之外，它的工作機制和 ",-1)),s[89]||(s[89]=n("code",null,"pacman",-1)),s[90]||(s[90]=a(" 極其類似。從 AUR 安裝一個包將會初始化包維護者的構建腳本。你將會被要求輸入幾次授權以便讓程序繼續進行下去（為了簡短起見，筆者截斷了輸出）。",-1))]),s[116]||(s[116]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>aurman -S telegram-desktop-bin</span></span>
<span class="line"><span>~~ initializing aurman...</span></span>
<span class="line"><span>~~ the following packages are neither in known repos nor in the aur</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>~~ calculating solutions...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: The following 1 package(s) are getting updated:</span></span>
<span class="line"><span>   aur/telegram-desktop-bin  1.3.0-1  -&gt;  1.3.9-1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>?? Do you want to continue? Y/n: Y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>~~ looking for new pkgbuilds and fetching them...</span></span>
<span class="line"><span>Cloning into &#39;telegram-desktop-bin&#39;...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>remote: Counting objects: 301, done.</span></span>
<span class="line"><span>remote: Compressing objects: 100% (152/152), done.</span></span>
<span class="line"><span>remote: Total 301 (delta 161), reused 286 (delta 147)</span></span>
<span class="line"><span>Receiving objects: 100% (301/301), 76.17 KiB | 639.00 KiB/s, done.</span></span>
<span class="line"><span>Resolving deltas: 100% (161/161), done.</span></span>
<span class="line"><span>?? Do you want to see the changes of telegram-desktop-bin? N/y: N</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[sudo] password for user:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>==&gt; Leaving fakeroot environment.</span></span>
<span class="line"><span>==&gt; Finished making: telegram-desktop-bin 1.3.9-1 (Thu 05 Jul 2018 11:22:02 AM EDT)</span></span>
<span class="line"><span>==&gt; Cleaning up...</span></span>
<span class="line"><span>loading packages...</span></span>
<span class="line"><span>resolving dependencies...</span></span>
<span class="line"><span>looking for conflicting packages...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Packages (1) telegram-desktop-bin-1.3.9-1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Total Installed Size:  88.81 MiB</span></span>
<span class="line"><span>Net Upgrade Size:       5.33 MiB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: Proceed with installation? [Y/n]</span></span></code></pre></div><p>依照你所安裝的包的複雜性程度的高低，有時你將會被要求給出進一步的輸入，為了避免這些反覆的輸入，<code>aurman</code> 允許你使用 <code>--noconfirm</code> 和 <code>--noedit</code> 選項。這相當於説“接受所有的預定設置，並相信包管理器不會幹壞事”。<strong>使用這兩個選項時請務必小心！！</strong>，雖然這些選項本身不太會破壞你的系統，你也不能盲目的接受他人的腳本程序。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>這篇文章當然只能觸及包管理器的皮毛。還有很多別的包管理器筆者沒有在這篇文章裏談及。有些 Linux 發佈版，如 Ubuntu 或 Elementary OS，已經在圖形版的包管理器的開發上有了長遠的進展。</p><p>如果你對包管理器的更高級功能有進一步的興趣，請在評論區留言，筆者很樂意進一步的寫一寫相關的文章。</p><h3 id="附錄" tabindex="-1">附錄 <a class="header-anchor" href="#附錄" aria-label="Permalink to “附錄”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># search for packages</span></span>
<span class="line"><span>yum search &lt;package&gt;</span></span>
<span class="line"><span>dnf search &lt;package&gt;</span></span>
<span class="line"><span>zypper search &lt;package&gt;</span></span>
<span class="line"><span>apt-cache search &lt;package&gt;</span></span>
<span class="line"><span>apt search &lt;package&gt;</span></span>
<span class="line"><span>pacman -Ss &lt;package&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># install packages</span></span>
<span class="line"><span>yum install &lt;package&gt;</span></span>
<span class="line"><span>dnf install &lt;package&gt;</span></span>
<span class="line"><span>zypper install &lt;package&gt;</span></span>
<span class="line"><span>apt-get install &lt;package&gt;</span></span>
<span class="line"><span>apt install &lt;package&gt;</span></span>
<span class="line"><span>pacman -Ss &lt;package&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># update package database, not required by yum, dnf and zypper</span></span>
<span class="line"><span>apt-get update</span></span>
<span class="line"><span>apt update</span></span>
<span class="line"><span>pacman -Sy</span></span>
<span class="line"><span></span></span>
<span class="line"><span># update all system packages</span></span>
<span class="line"><span>yum update</span></span>
<span class="line"><span>dnf update</span></span>
<span class="line"><span>zypper update</span></span>
<span class="line"><span>apt-get upgrade</span></span>
<span class="line"><span>apt upgrade</span></span>
<span class="line"><span>pacman -Su</span></span>
<span class="line"><span></span></span>
<span class="line"><span># remove an installed package</span></span>
<span class="line"><span>yum remove &lt;package&gt;</span></span>
<span class="line"><span>dnf remove &lt;package&gt;</span></span>
<span class="line"><span>apt-get remove &lt;package&gt;</span></span>
<span class="line"><span>apt remove &lt;package&gt;</span></span>
<span class="line"><span>pacman -R &lt;package&gt;</span></span>
<span class="line"><span>pacman -Rs &lt;package&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># search for the package name containing specific file or folder</span></span>
<span class="line"><span>yum whatprovides *&lt;binary&gt;</span></span>
<span class="line"><span>dnf whatprovides *&lt;binary&gt;</span></span>
<span class="line"><span>zypper what-provides &lt;binary&gt;</span></span>
<span class="line"><span>zypper search --provides &lt;binary&gt;</span></span>
<span class="line"><span>apt-file search &lt;binary&gt;</span></span>
<span class="line"><span>pacman -Sf &lt;binary&gt;</span></span></code></pre></div><hr>`,8)),n("p",null,[s[92]||(s[92]=a("via: ",-1)),e(p,{href:"https://opensource.com/article/18/7/evolution-package-managers"},{default:i(()=>[...s[91]||(s[91]=[a("https://opensource.com/article/18/7/evolution-package-managers",-1)])]),_:1})]),n("p",null,[s[97]||(s[97]=a("作者：",-1)),e(p,{href:"https://opensource.com/users/stratusss"},{default:i(()=>[...s[93]||(s[93]=[a("Steve Ovens",-1)])]),_:1}),s[98]||(s[98]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[94]||(s[94]=[a("lujun9972",-1)])]),_:1}),s[99]||(s[99]=a(" 譯者：",-1)),e(p,{href:"https://github.com/davidchenliang"},{default:i(()=>[...s[95]||(s[95]=[a("DavidChenLiang",-1)])]),_:1}),s[100]||(s[100]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[96]||(s[96]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[103]||(s[103]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[101]||(s[101]=[a("LCTT",-1)])]),_:1}),s[104]||(s[104]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[102]||(s[102]=[a("Linux中國",-1)])]),_:1}),s[105]||(s[105]=a(" 榮譽推出",-1))])])}const v=t(c,[["render",u]]);export{x as __pageData,v as default};
