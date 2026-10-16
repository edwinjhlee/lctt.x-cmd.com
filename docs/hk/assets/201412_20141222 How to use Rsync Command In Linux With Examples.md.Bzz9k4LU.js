import{_ as r,a0 as i,w as l,s as p,ao as d,I as a,x as s,a1 as t,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"如何在Linux下使用rsync | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux下使用rsync | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux下使用rsync | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux下使用rsync | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141222 How to use Rsync Command In Linux With Examples","title":"如何在Linux下使用rsync","tag":"201412","desc":""},"relativePath":"201412/20141222 How to use Rsync Command In Linux With Examples.md","filePath":"[post].md"}'),h={name:"201412/20141222 How to use Rsync Command In Linux With Examples.md"};function c(b,e,u,m,y,f){const n=i("Link");return l(),p("div",null,[e[13]||(e[13]=d(`<h1 id="如何在linux下使用rsync" tabindex="-1">如何在Linux下使用rsync <a class="header-anchor" href="#如何在linux下使用rsync" aria-label="Permalink to “如何在Linux下使用rsync”">​</a></h1><p>對於各種組織和公司，數據對他們是最重要的，即使對於電子商務，數據也是同樣重要的。Rsync是一款通過網絡備份重要數據的工具/軟件。它同樣是一個在類Unix和Window系統上通過網絡在系統間同步文件夾和文件的網絡協議。Rsync可以複製或者顯示目錄並複製文件。Rsync默認監聽TCP 873端口，通過遠程shell如rsh和ssh複製文件。Rsync必須在遠程和本地系統上都安裝。</p><p>rsync的主要好處是：</p><p><strong>速度</strong>：最初會在本地和遠程之間拷貝所有內容。下次，只會傳輸發生改變的塊或者字節。</p><p><strong>安全</strong>：傳輸可以通過ssh協議加密數據。</p><p><strong>低帶寬</strong>：rsync可以在兩端壓縮和解壓數據塊。</p><p>語法:</p><pre><code>#rsysnc [options] source path destination path
</code></pre><h3 id="示例-1-啓用壓縮" tabindex="-1">示例： 1 - 啓用壓縮 <a class="header-anchor" href="#示例-1-啓用壓縮" aria-label="Permalink to “示例： 1 - 啓用壓縮”">​</a></h3><pre><code>[root@localhost /]# rsync -zvr /home/aloft/ /backuphomedir
building file list ... done
.bash_logout
.bash_profile
.bashrc
sent 472 bytes received 86 bytes 1116.00 bytes/sec
total size is 324 speedup is 0.58
</code></pre><p>上面的rsync命令使用了-z來啓用壓縮，-v是可視化，-r是遞歸。上面在本地的/home/aloft/和/backuphomedir之間同步。</p><h3 id="示例-2-保留文件和文件夾的屬性" tabindex="-1">示例： 2 - 保留文件和文件夾的屬性 <a class="header-anchor" href="#示例-2-保留文件和文件夾的屬性" aria-label="Permalink to “示例： 2 - 保留文件和文件夾的屬性”">​</a></h3><pre><code>[root@localhost /]# rsync -azvr /home/aloft/ /backuphomedir
building file list ... done
./
.bash_logout
.bash_profile
.bashrc

sent 514 bytes received 92 bytes 1212.00 bytes/sec
total size is 324 speedup is 0.53
</code></pre><p>上面我們使用了-a選項，它保留了所有人和所屬組、時間戳、軟鏈接、權限，並以遞歸模式運行。</p><h3 id="示例-3-同步本地到遠程主機" tabindex="-1">示例： 3 - 同步本地到遠程主機 <a class="header-anchor" href="#示例-3-同步本地到遠程主機" aria-label="Permalink to “示例： 3 - 同步本地到遠程主機”">​</a></h3><pre><code>root@localhost /]# rsync -avz /home/aloft/ azmath@192.168.1.4:192.168.1.4:/share/rsysnctest/
Password:

building file list ... done
./
.bash_logout
.bash_profile
.bashrc
sent 514 bytes received 92 bytes 1212.00 bytes/sec
total size is 324 speedup is 0.53
</code></pre><p>上面的命令允許你在本地和遠程機器之間同步。你可以看到，在同步文件到另一個系統時提示你輸入密碼。在做遠程同步時，你需要指定遠程系統的用户名和IP或者主機名。</p><h3 id="示例-4-遠程同步到本地" tabindex="-1">示例： 4 - 遠程同步到本地 <a class="header-anchor" href="#示例-4-遠程同步到本地" aria-label="Permalink to “示例： 4 - 遠程同步到本地”">​</a></h3><pre><code>[root@localhost /]# rsync -avz azmath@192.168.1.4:192.168.1.4:/share/rsysnctest/ /home/aloft/
Password:
building file list ... done
./
.bash_logout
.bash_profile
.bashrc
sent 514 bytes received 92 bytes 1212.00 bytes/sec
total size is 324 speedup is 0.53
</code></pre><p>上面的命令同步遠程文件到本地。</p><h3 id="示例-5-找出文件間的不同" tabindex="-1">示例： 5 - 找出文件間的不同 <a class="header-anchor" href="#示例-5-找出文件間的不同" aria-label="Permalink to “示例： 5 - 找出文件間的不同”">​</a></h3><pre><code>[root@localhost backuphomedir]# rsync -avzi /backuphomedir /home/aloft/
building file list ... done
cd+++++++ backuphomedir/
&gt;f+++++++ backuphomedir/.bash_logout
&gt;f+++++++ backuphomedir/.bash_profile
&gt;f+++++++ backuphomedir/.bashrc
&gt;f+++++++ backuphomedir/abc
&gt;f+++++++ backuphomedir/xyz

sent 650 bytes received 136 bytes 1572.00 bytes/sec
total size is 324 speedup is 0.41
</code></pre><p>上面的命令幫助你找出源地址和目標地址之間文件或者目錄的不同。</p><h3 id="示例-6-備份" tabindex="-1">示例: 6 - 備份 <a class="header-anchor" href="#示例-6-備份" aria-label="Permalink to “示例: 6 - 備份”">​</a></h3><p>rsync命令可以用來備份linux。</p><p>你可以在cron中使用rsync安排備份。</p><pre><code>0 0 * * * /usr/local/sbin/bkpscript &amp;&gt; /dev/null
</code></pre><hr><pre><code>vi /usr/local/sbin/bkpscript

rsync -avz -e ‘ssh -p2093′ /home/test/ root@192.168.1.150:/oracle/data/
</code></pre><hr>`,30)),a("p",null,[e[1]||(e[1]=s("via: ",-1)),t(n,{href:"http://linoxide.com/how-tos/rsync-copy/"},{default:o(()=>[...e[0]||(e[0]=[s("http://linoxide.com/how-tos/rsync-copy/",-1)])]),_:1})]),a("p",null,[e[5]||(e[5]=s("作者：",-1)),t(n,{href:"http://linoxide.com/author/bobbin/"},{default:o(()=>[...e[2]||(e[2]=[s("Bobbin Zachariah",-1)])]),_:1}),e[6]||(e[6]=s(" 譯者：",-1)),t(n,{href:"https://github.com/geekpi"},{default:o(()=>[...e[3]||(e[3]=[s("geekpi",-1)])]),_:1}),e[7]||(e[7]=s(" 校對：",-1)),t(n,{href:"https://github.com/wxy"},{default:o(()=>[...e[4]||(e[4]=[s("wxy",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=s("本文由 ",-1)),t(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[8]||(e[8]=[s("LCTT",-1)])]),_:1}),e[11]||(e[11]=s(" 原創翻譯，",-1)),t(n,{href:"http://linux.cn/"},{default:o(()=>[...e[9]||(e[9]=[s("Linux中國",-1)])]),_:1}),e[12]||(e[12]=s(" 榮譽推出",-1))])])}const T=r(h,[["render",c]]);export{k as __pageData,T as default};
