import{_ as o,a0 as s,w as d,s as l,ao as p,I as n,x as t,a1 as r,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"如何在Debian中啓用測試版/不穩定版的軟件庫 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Debian中啓用測試版/不穩定版的軟件庫 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Debian中啓用測試版/不穩定版的軟件庫 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Debian中啓用測試版/不穩定版的軟件庫 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140620 How to enable testing and unstable repository on Debian","title":"如何在Debian中啓用測試版/不穩定版的軟件庫","tag":"201406","desc":""},"relativePath":"201406/20140620 How to enable testing and unstable repository on Debian.md","filePath":"[post].md"}'),b={name:"201406/20140620 How to enable testing and unstable repository on Debian.md"};function h(u,e,g,f,m,c){const a=s("Link");return d(),l("div",null,[e[21]||(e[21]=p(`<h1 id="如何在debian中啓用測試版-不穩定版的軟件庫" tabindex="-1">如何在Debian中啓用測試版/不穩定版的軟件庫 <a class="header-anchor" href="#如何在debian中啓用測試版-不穩定版的軟件庫" aria-label="Permalink to “如何在Debian中啓用測試版/不穩定版的軟件庫”">​</a></h1><p>為何要啓用測試版/不穩定版？</p><p>測試版/不穩定版的Debian給開發者提供了一個比當前穩定版更新的環境以及軟件。你們注意到了麼？其實這些穩定版啊不穩定版啊神馬的都是別名，比方説穩定版其實就是Debian的穩定發行版，而測試版將會是下一個Debian的穩定發行版（當然那是測試後的事了）。截至發稿為止，當前Debian的穩定發行版是Wheezy 7.x，將會成為下一個穩定版的測試版則是Jessie。</p><p>當你需要一款應用的最新版本的時候，啓用測試版/不穩定版將會是不二的選擇。當初我因為工作需要，要安裝個Apache的 2.4.x到我的Debian Wheezy。測試版需要的是2.4.x的，可是我的軟件庫裏面只有2.2.x的。所以最好的解決方案當時是將測試版下下來啦。</p><p>通常來説當我們想嘗試最新版本的應用時，都應該只在測試版軟件庫中搜索。</p><p>在這篇文章裏我將教大家如何在不弄壞你係統的前提下設置好測試、不穩定版的Debain系統並在上面安裝軟件。</p><blockquote><pre><code>Stable &lt; Testing &lt; Unstable （穩定 &lt; 測試版 &lt; 不穩定版）
Wheezy &lt; Jessie &lt; Sid
</code></pre></blockquote><h3 id="_1-設置測試版-不穩定版的apt源" tabindex="-1">1. 設置測試版/不穩定版的apt源 <a class="header-anchor" href="#_1-設置測試版-不穩定版的apt源" aria-label="Permalink to “1. 設置測試版/不穩定版的apt源”">​</a></h3><p>第一步是把測試版/不穩定版的源加到你的sources.list文件裏。在Debian Wheezy系統上，/etc/apt/sources.list理應長得像這樣：</p><pre><code>$ cat /etc/apt/sources.list
</code></pre><hr><pre><code>...
deb http://security.debian.org/ wheezy/updates main
deb http://http.us.debian.org/debian/ wheezy main
deb-src http://security.debian.org/ wheezy/updates main
...
</code></pre>`,12)),n("p",null,[e[1]||(e[1]=t("把你repo服務器的鏈接記下來，比如：",-1)),r(a,{href:"http://http.us.debian.org/debian/"},{default:i(()=>[...e[0]||(e[0]=[t("http://http.us.debian.org/debian/",-1)])]),_:1})]),e[22]||(e[22]=p(`<p>這個repo服務器將會是離你最近的一個服務器； 在不同的地理位置會有不同的url，這個將會用於下一步。</p><p>如果想加測試/不穩定源，則需要在sources.list文件加上這些東西：</p><pre><code># Testing repository - main, contrib and non-free branches
deb http://http.us.debian.org/debian testing main non-free contrib
deb-src http://http.us.debian.org/debian testing main non-free contrib


# Testing security updates repository
deb http://security.debian.org/ testing/updates main contrib non-free
deb-src http://security.debian.org/ testing/updates main contrib non-free


# Unstable repo main, contrib and non-free branches, no security updates here
deb http://http.us.debian.org/debian unstable main non-free contrib
deb-src http://http.us.debian.org/debian unstable main non-free contrib
</code></pre><p>格式將會是</p><pre><code>deb &lt;respository server/mirror&gt; &lt;repository name&gt; &lt;sub branches of the repo&gt;
(deb &lt;上一步弄的服務器或鏡像url&gt; &lt;repo的名字&gt; &lt;repo底下的分支&gt;)
</code></pre><p>當然啦，除了用testing或者unstable這麼爛的詞，也能使用他們的發行版代號，比如Jessie或者Sid</p><pre><code>deb http://http.us.debian.org/debian jessie main non-free contrib
deb http://security.debian.org/ jessie/updates main contrib non-free
deb http://http.us.debian.org/debian sid main non-free contrib
</code></pre><h3 id="_2-釘住-apt-這非常重要" tabindex="-1">2. 釘住 apt！這非常重要 <a class="header-anchor" href="#_2-釘住-apt-這非常重要" aria-label="Permalink to “2. 釘住 apt！這非常重要”">​</a></h3><blockquote><p>在加了測試/不穩定的repo之後，當你更新系統的時候所有安裝過並且可用的軟件就會立馬更新，而後你的系統就被你玩火自焚了。</p></blockquote><p>所以需要設置一些規則，以便選定的軟件包在正常的更新時不會被更新到一個不穩定的測試版本。</p><p>我們需要使用“釘住APT”的方式來告訴apt系統，除了我們希望使用測試版或不穩定版的特定軟件包之外，其它的總是使用穩定版的軟件包來更新。</p><p>可以通過如下兩個文件之一來設置如何設置APT的優先級來“釘住”。</p><pre><code>/etc/apt/preferences
或
/etc/apt/preferences.d/my_preferences
</code></pre><p>打開這兩個文件之一（如果沒有的話就創建一個），然後輸入如下內容：</p><pre><code>Package: *
Pin: release a=stable
Pin-Priority: 700

Package: *
Pin: release a=testing
Pin-Priority: 650

Package: *
Pin: release a=unstable
Pin-Priority: 600
</code></pre><p>前面我們提到過，穩定版指的是你當前的debian版本，測試版是下一個，而不穩定版則是更遠的將來發行版。上面的設置中最主要的是優先級（Pin-Priority）。當前的穩定版應該有最高的優先級，這就是説，正常的apt-get操作只會從當前的穩定版的軟件庫（現在是wheezy）裏面安裝軟件。</p><h4 id="更新包緩存" tabindex="-1">更新包緩存 <a class="header-anchor" href="#更新包緩存" aria-label="Permalink to “更新包緩存”">​</a></h4><p>在增加了新的軟件庫和指定了優先規則後，需要更新一下包緩存。</p><pre><code>$ sudo apt-get update
</code></pre><h4 id="確認apt規則" tabindex="-1">確認APT規則 <a class="header-anchor" href="#確認apt規則" aria-label="Permalink to “確認APT規則”">​</a></h4><p>我們必須確認“釘住”的設置正確，優先級也沒問題。使用 apt-cache 的 policy 參數來檢查：</p><pre><code>$ apt-cache policy apache2
apache2:
  Installed: (none)
  Candidate: 2.2.22-13
  Version table:
     2.4.7-1 0
        600 http://http.us.debian.org/debian/ unstable/main amd64 Packages
     2.4.6-3 0
        650 http://http.us.debian.org/debian/ testing/main amd64 Packages
     2.2.22-13 0
        700 http://http.us.debian.org/debian/ wheezy/main amd64 Packages
</code></pre><p>如上的輸出，確認在wheezy 穩定版中， 2.2.22 版本的Apache是選定的版本，它有最高的優先級。</p><h3 id="_3-從測試版-不穩定版軟件庫中安裝軟件" tabindex="-1">3. 從測試版/不穩定版軟件庫中安裝軟件 <a class="header-anchor" href="#_3-從測試版-不穩定版軟件庫中安裝軟件" aria-label="Permalink to “3. 從測試版/不穩定版軟件庫中安裝軟件”">​</a></h3><p>現在可以從測試版或不穩定版中選擇一個特定的軟件來安裝它了。假如説我們要從測試版軟件源中安裝 apache2。</p><p>有兩個不同的方法，並且其結果也有所不同。</p><h4 id="方式一" tabindex="-1">方式一 <a class="header-anchor" href="#方式一" aria-label="Permalink to “方式一”">​</a></h4><pre><code># apt-get install apache2/testing
</code></pre><p>上述命令會從測試版軟件庫中安裝 apache2，並從穩定版軟件庫中安裝其依賴包（穩定版通過apt規則確定）。這個命令在某些情況下會失敗，比如安裝的軟件包（apache2）所需的依賴包在穩定版軟件庫中沒有更新到可以支持該軟件時。</p><h4 id="方式二" tabindex="-1">方式二 <a class="header-anchor" href="#方式二" aria-label="Permalink to “方式二”">​</a></h4><pre><code># apt-get -t testing install apache2
</code></pre><p>上述命令會從測試版軟件庫中安裝apache2，並從測試版軟件庫中安裝其依賴包。這要比上面的命令工作的更好。</p><p>所以，要安裝較新的軟件包，直接從測試版/不穩定版的軟件庫中安裝就行了。注意，優先級號碼不只是一個數字而已，還有其特定意義。可以查看 apt_preferences的man頁面瞭解更多：</p><pre><code>$ man 5 apt_preferences
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>使用“釘住”方式的測試版/不穩定版的軟件庫是一個獲取較新版本軟件包的一個好辦法，不過其實並不推薦使用它們。如果弄錯了，可能會從也許不兼容的分支上下載軟件包，這會把你的系統搞亂。</p>`,36)),n("p",null,[e[3]||(e[3]=t("一個更好的方式是，使用向後移植的軟件庫來安裝更新的包。它從測試版和不穩定版的軟件庫中獲取較新版本的軟件包，但是為當前的穩定版軟件庫而編譯。所以，對於 debian wheezy來説，你可以使用wheezy-backports 軟件庫。訪問",-1)),r(a,{href:"http://backports.debian.org/"},{default:i(()=>[...e[2]||(e[2]=[t("http://backports.debian.org/",-1)])]),_:1}),e[4]||(e[4]=t(" 瞭解更多。",-1))]),e[23]||(e[23]=n("h3",{id:"資源",tabindex:"-1"},[t("資源 "),n("a",{class:"header-anchor",href:"#資源","aria-label":"Permalink to “資源”"},"​")],-1)),n("ul",null,[n("li",null,[r(a,{href:"http://wiki.debian.org/AptPreferences"},{default:i(()=>[...e[5]||(e[5]=[t("https://wiki.debian.org/AptPreferences",-1)])]),_:1})]),n("li",null,[r(a,{href:"http://wiki.debian.org/DebianTesting"},{default:i(()=>[...e[6]||(e[6]=[t("https://wiki.debian.org/DebianTesting",-1)])]),_:1})]),n("li",null,[r(a,{href:"http://www.debian.org/security/"},{default:i(()=>[...e[7]||(e[7]=[t("https://www.debian.org/security/",-1)])]),_:1})])]),e[24]||(e[24]=n("hr",null,null,-1)),n("p",null,[e[9]||(e[9]=t("via: ",-1)),r(a,{href:"http://www.binarytides.com/enable-testing-repo-debian/"},{default:i(()=>[...e[8]||(e[8]=[t("http://www.binarytides.com/enable-testing-repo-debian/",-1)])]),_:1})]),n("p",null,[e[13]||(e[13]=t("譯者：",-1)),r(a,{href:"https://github.com/213edu"},{default:i(()=>[...e[10]||(e[10]=[t("213edu",-1)])]),_:1}),e[14]||(e[14]=t()),r(a,{href:"https://github.com/wxy"},{default:i(()=>[...e[11]||(e[11]=[t("wxy",-1)])]),_:1}),e[15]||(e[15]=t(" 校對：",-1)),r(a,{href:"https://github.com/wxy"},{default:i(()=>[...e[12]||(e[12]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[18]||(e[18]=t("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[16]||(e[16]=[t("LCTT",-1)])]),_:1}),e[19]||(e[19]=t(" 原創翻譯，",-1)),r(a,{href:"http://linux.cn/"},{default:i(()=>[...e[17]||(e[17]=[t("Linux中國",-1)])]),_:1}),e[20]||(e[20]=t(" 榮譽推出",-1))])])}const w=o(b,[["render",h]]);export{T as __pageData,w as default};
