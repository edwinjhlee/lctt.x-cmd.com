import{_ as l,a0 as s,w as d,s as p,ao as a,I as i,x as t,a1 as o,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"Linux 下使用Trickle限制下載/上傳帶寬 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 下使用Trickle限制下載/上傳帶寬 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 下使用Trickle限制下載/上傳帶寬 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 下使用Trickle限制下載/上傳帶寬 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Manage and Limit Download-Upload Bandwidth with Trickle in Linux","title":"Linux 下使用Trickle限制下載/上傳帶寬","tag":"201312","desc":""},"relativePath":"201312/Manage and Limit Download-Upload Bandwidth with Trickle in Linux.md","filePath":"[post].md"}'),c={name:"201312/Manage and Limit Download-Upload Bandwidth with Trickle in Linux.md"};function g(u,e,k,h,m,f){const n=s("Link");return d(),p("div",null,[e[14]||(e[14]=a(`<h1 id="linux-下使用trickle限制下載-上傳帶寬" tabindex="-1">Linux 下使用Trickle限制下載/上傳帶寬 <a class="header-anchor" href="#linux-下使用trickle限制下載-上傳帶寬" aria-label="Permalink to “Linux 下使用Trickle限制下載/上傳帶寬”">​</a></h1><p>你有沒有遇到過一個程序佔用了你所有的網絡帶寬的情況？如果你遇到過，那麼你就需要限制帶寬的應用。不管你是一個系統管理員還是一名普通Linux用户，您都應該學習如何控制應用的上傳和下載速度來確保你的網絡帶寬不會被一個程序耗光。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2013/11/Bandwidth-limit-trickle.png" alt=""></p><h3 id="trickle-是什麼" tabindex="-1">Trickle 是什麼? <a class="header-anchor" href="#trickle-是什麼" aria-label="Permalink to “Trickle 是什麼?”">​</a></h3><p><strong>Trickle</strong>是一款帶寬控制供給，用來限制如<strong>Firefox, FTP , SSH</strong>以及其他使用網絡帶寬的程序的帶寬。你希望你的<strong>Youtube</strong>音樂體驗影響到你的ftp下載麼？如果不想，請繼續閲讀這篇文章，學習如何在你的機器上安裝和使用trickle。</p><h3 id="怎樣在linux上安裝trickle" tabindex="-1">怎樣在Linux上安裝Trickle <a class="header-anchor" href="#怎樣在linux上安裝trickle" aria-label="Permalink to “怎樣在Linux上安裝Trickle”">​</a></h3><p>trickle工具有一些依賴包，安裝和使用trickle之前必須安裝“<strong>libevent 庫</strong>”，不過這個庫在大多數現在的Linux機器上已經默認安裝。</p><h4 id="在-debian-ubuntu-linux-mint-上" tabindex="-1">在 Debian/Ubuntu/Linux Mint 上#### <a class="header-anchor" href="#在-debian-ubuntu-linux-mint-上" aria-label="Permalink to “在 Debian/Ubuntu/Linux Mint 上####”">​</a></h4><p>在<strong>Debian/Ubuntu/Mint</strong> 機器上運行 <strong>apt-get install trickle</strong>進行安裝。請確保源列表已經更新，接着安裝你想要的應用。</p><pre><code>$ sudo apt-get update
$ sudo apt-get install trickle
</code></pre><h4 id="在-rhel-centos-fedora-上" tabindex="-1">在 RHEL/CentOS/Fedora 上#### <a class="header-anchor" href="#在-rhel-centos-fedora-上" aria-label="Permalink to “在 RHEL/CentOS/Fedora 上####”">​</a></h4><p>首先你需要更新系統,然後使用下面的命令安裝trickle。</p><pre><code># yum update
# yum install trickle
</code></pre><h3 id="trickle如何工作" tabindex="-1">Trickle如何工作? <a class="header-anchor" href="#trickle如何工作" aria-label="Permalink to “Trickle如何工作?”">​</a></h3><p>Trickle通過控制socket數據讀寫量來控制和限制應用的<strong>上傳/下載</strong>速度。它使用另一個版本的<strong>BSD</strong>套接字API，但是區別是trickle還管理socket調用。</p><p>要注意的是trickle使用動態鏈接和加載，所以它只對於使用&quot;Glibc庫&quot;的程序有用。由於trickle可以設置數據在socket上的傳輸延遲，所以它可以用來限制一個應用的網絡帶寬。</p><h3 id="trickle不能做什麼" tabindex="-1">Trickle不能做什麼？ <a class="header-anchor" href="#trickle不能做什麼" aria-label="Permalink to “Trickle不能做什麼？”">​</a></h3><p>Trickle不能用於限制使用<strong>UDP</strong>協議的應用的帶寬，它只可用於<strong>TCP</strong>連接，但是你要知道它也並不是對所有的<strong>TCP</strong>連接有效。如果你一直仔細地看這篇文章，你可以猜到原因是什麼。你還記得trickle只對使用<strong>Glibc庫</strong>應用有效吧？</p><p>還要説一下,trickle無法工作在使用靜態鏈接的可執行程序上。</p><h3 id="確定trickle是否可運行在某個特定應用上" tabindex="-1">確定Trickle是否可運行在某個特定應用上 <a class="header-anchor" href="#確定trickle是否可運行在某個特定應用上" aria-label="Permalink to “確定Trickle是否可運行在某個特定應用上”">​</a></h3><p>既然trickle無法限制每個應用的<strong>上傳/下載</strong>速度，就應該有個方法找出trickle可以工作的應用。</p><p><strong>ldd</strong>工具可以幫我們找出某個特定的程序是否使用了<strong>libc.so</strong>庫。如果程序使用了這個庫，就可以使用trickle來限制它的網絡帶寬使用。</p><p><strong>ldd</strong>命令用於打印每個程序需要的共享庫。如果你是一個好奇的<strong>Linux Geek</strong>，那麼你可以使用man命令來找出關於ldd工具的更多信息。</p><pre><code># man ldd
</code></pre><p><strong>Filezilla</strong>是一款使用ftp協議傳輸文件的程序，trickle可以用來限制它的下載或者上傳速度麼？在你考慮的時候，我使用以下的命令來找出trickle是否可用於filezilla。</p><pre><code># ldd filezilla | grep libc.so
</code></pre><p>就我而言，它輸出瞭如下:</p><pre><code>oltjano@oltjano-X55CR:/usr/bin$ ldd filezilla | grep libc.so
	libc.so.6 =&gt; /lib/i386-linux-gnu/libc.so.6 (0xb6bc4000)
</code></pre><p>既然filezilla使用了“<strong>libc.so</strong>”庫，那麼trickle可以用來限制它的網絡帶寬。這個方法可以用在任何你感興趣的程序上。</p><h3 id="學習如何使用trickle" tabindex="-1">學習如何使用Trickle <a class="header-anchor" href="#學習如何使用trickle" aria-label="Permalink to “學習如何使用Trickle”">​</a></h3><p>使用下面的命令輸出trickle工具的<strong>版本</strong>。</p><pre><code>root@oltjano-X55CR:~# trickle -V
trickle: version 1.07
</code></pre>`,32)),i("p",null,[e[1]||(e[1]=t("Linux有很多命令列工具使測試(實驗)變得有趣和美麗。下面的命令使用",-1)),o(n,{href:"http://www.tecmint.com/10-wget-command-examples-in-linux/"},{default:r(()=>[...e[0]||(e[0]=[t("wget 工具",-1)])]),_:1}),e[2]||(e[2]=t("來下載最新的Pear OS鏡像.",-1))]),e[15]||(e[15]=a(`<pre><code>root@oltjano-X55CR:~# wget http://sourceforge.net/projects/pearoslinux/files/Pear%20OS%208/pearos8-i386.iso/download

--2013-11-20 11:56:32--  http://sourceforge.net/projects/pearoslinux/files/Pear%20OS%208/pearos8-i386.iso/download
Resolving sourceforge.net (sourceforge.net)... 216.34.181.60
Connecting to sourceforge.net (sourceforge.net)|216.34.181.60|:80... connected.
HTTP request sent, awaiting response... 302 Found
Location: http://downloads.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso?r=&amp;ts=1384928843&amp;use_mirror=kaz [following]
--2013-11-20 11:56:33--  http://downloads.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso?r=&amp;ts=1384928843&amp;use_mirror=kaz
Resolving downloads.sourceforge.net (downloads.sourceforge.net)... 216.34.181.59
Connecting to downloads.sourceforge.net (downloads.sourceforge.net)|216.34.181.59|:80... connected.
HTTP request sent, awaiting response... 302 Found
Location: http://kaz.dl.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso [following]
--2013-11-20 11:56:33--  http://kaz.dl.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso
Resolving kaz.dl.sourceforge.net (kaz.dl.sourceforge.net)... 88.204.157.163
Connecting to kaz.dl.sourceforge.net (kaz.dl.sourceforge.net)|88.204.157.163|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1093664768 (1.0G) [application/octet-stream]
Saving to: ‘download’

0% [                                                                                                    ] 30,78,278    381KB/s  eta 1h 50m
</code></pre><p>從輸出可以看到，下載速度大約是<strong>381 KB/s</strong>。我想限制下載速度到<strong>13 K/s</strong>，這樣我就可以用我的帶寬做其他的事情了。下面的命令用來限制wget速度到<strong>13 K/s</strong>。</p><pre><code>ravisaive@ravisaive-OptiPlex-380:~$ trickle -d 13 wget http://sourceforge.net/projects/pearoslinux/files/Pear%20OS%208/pearos8-i386.iso/download

--2013-11-20 12:01:19--  http://sourceforge.net/projects/pearoslinux/files/Pear%20OS%208/pearos8-i386.iso/download
Resolving sourceforge.net (sourceforge.net)... 216.34.181.60
Connecting to sourceforge.net (sourceforge.net)|216.34.181.60|:80... connected.
HTTP request sent, awaiting response... 302 Found
Location: http://downloads.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso?r=&amp;ts=1384929129&amp;use_mirror=kaz [following]
--2013-11-20 12:01:19--  http://downloads.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso?r=&amp;ts=1384929129&amp;use_mirror=kaz
Resolving downloads.sourceforge.net (downloads.sourceforge.net)... 216.34.181.59
Connecting to downloads.sourceforge.net (downloads.sourceforge.net)|216.34.181.59|:80... connected.
HTTP request sent, awaiting response... 302 Found
Location: http://kaz.dl.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso [following]
--2013-11-20 12:01:20--  http://kaz.dl.sourceforge.net/project/pearoslinux/Pear%20OS%208/pearos8-i386.iso
Resolving kaz.dl.sourceforge.net (kaz.dl.sourceforge.net)... 88.204.157.163
Connecting to kaz.dl.sourceforge.net (kaz.dl.sourceforge.net)|88.204.157.163|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1093664768 (1.0G) [application/octet-stream]
Saving to: ‘download.1’

0% [                                                                                                   ] 2,01,550    13.1KB/s  eta 21h 5m
</code></pre><p>從輸出可以看到，下載速度被限制到了<strong>13K/s</strong>。下載將會持續<strong>21小時5分鐘</strong>。上面的“<strong>-d</strong>”選項表示下載，還可以結合使用 “<strong>-d</strong>”選項和上傳選項(<strong>-u</strong>)，如下例所示。</p><pre><code># trickle -u 100 -d 50 ftp
</code></pre><p>上面的命令限制<strong>ftp 客户端</strong>的上傳速度為<strong>100K/s</strong>，下載速度為<strong>50K/s</strong>。還可以使用下面的命令,限制在一個shell裏運行的所有命令的帶寬。</p><pre><code>trickle -d 130 -u 13 bash
</code></pre><p>每個命令列工具都對用户提供了幫助，使用&quot;trickle -h&quot;命令來找出更多trickle工具的用法。</p><pre><code>root@oltjano-X55CR:/usr/bin# trickle -h

Usage: trickle [-hvVs] [-d &lt;rate&gt;] [-u &lt;rate&gt;] [-w &lt;length&gt;] [-t &lt;seconds&gt;]
               [-l &lt;length&gt;] [-n &lt;path&gt;] command ...
	-h Help (this)
	-v Increase verbosity level
	-V Print trickle version
	-s Run trickle in standalone mode independent of trickled
	-d &lt;rate&gt;    Set maximum cumulative download rate to &lt;rate&gt; KB/s
	-u &lt;rate&gt;    Set maximum cumulative upload rate to &lt;rate&gt; KB/s
	-w &lt;length&gt;  Set window length to &lt;length&gt; KB 
	-t &lt;seconds&gt; Set default smoothing time to &lt;seconds&gt; s
	-l &lt;length&gt;  Set default smoothing length to &lt;length&gt; KB
	-n &lt;path&gt;    Use trickled socket name &lt;path&gt;
	-L &lt;ms&gt;      Set latency to &lt;ms&gt; milliseconds
	-P &lt;path&gt;    Preload the specified .so instead of the default one
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>本篇文章介紹如何在Linux機器上安裝trickle工具，並用它如何做一些簡單的事情。無論你為大公司工作還是自己使用，trickle都是高級Linux用户的必備工具。</p><hr>`,12)),i("p",null,[e[4]||(e[4]=t("via: ",-1)),o(n,{href:"http://www.tecmint.com/manage-and-limit-downloadupload-bandwidth-with-trickle-in-linux/"},{default:r(()=>[...e[3]||(e[3]=[t("http://www.tecmint.com/manage-and-limit-downloadupload-bandwidth-with-trickle-in-linux/",-1)])]),_:1})]),i("p",null,[e[7]||(e[7]=t("譯者：",-1)),o(n,{href:"https://github.com/geekpi"},{default:r(()=>[...e[5]||(e[5]=[t("geekpi",-1)])]),_:1}),e[8]||(e[8]=t(" 校對：",-1)),o(n,{href:"https://github.com/jasminepeng"},{default:r(()=>[...e[6]||(e[6]=[t("jasminepeng",-1)])]),_:1})]),i("p",null,[e[11]||(e[11]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[9]||(e[9]=[t("LCTT",-1)])]),_:1}),e[12]||(e[12]=t(" 原創翻譯，",-1)),o(n,{href:"http://linux.cn/"},{default:r(()=>[...e[10]||(e[10]=[t("Linux中國",-1)])]),_:1}),e[13]||(e[13]=t(" 榮譽推出",-1))])])}const b=l(c,[["render",g]]);export{T as __pageData,b as default};
