import{_ as r,a0 as o,w as l,s as f,I as t,x as n,a1 as d,A as s,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"di - 比 df 更有用的磁盤信息工具 | LCTT x X-CMD","titleTemplate":false,"description":"di - 比 df 更有用的磁盤信息工具 | LCTT (201310) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"di - 比 df 更有用的磁盤信息工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"di - 比 df 更有用的磁盤信息工具 | LCTT (201310) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201310/di – Disk Information Utility, Better Than df","title":"di - 比 df 更有用的磁盤信息工具","tag":"201310","desc":""},"relativePath":"201310/di – Disk Information Utility, Better Than df.md","filePath":"[post].md"}'),a={name:"201310/di – Disk Information Utility, Better Than df.md"};function m(u,e,M,G,v,T){const p=o("Link");return l(),f("div",null,[e[19]||(e[19]=t("h1",{id:"di-比-df-更有用的磁盤信息工具",tabindex:"-1"},[n("di - 比 df 更有用的磁盤信息工具 "),t("a",{class:"header-anchor",href:"#di-比-df-更有用的磁盤信息工具","aria-label":"Permalink to “di - 比 df 更有用的磁盤信息工具”"},"​")],-1)),e[20]||(e[20]=t("p",null,[n("如果你是個Linux命令列用户，你肯定會使用df命令檢查文件系統的磁盤使用情況。儘管df是一個受歡迎的命令，但仍然不能提供一些高級的功能，如一個用户實際的磁盤可用空間，以及各種有用的顯示格式等。還有另一個命令列實用工具可用，不僅提供了這些高級功能也提供了df的所有特性。在本文中,我們將討論磁盤信息工具 -- "),t("strong",null,"di")],-1)),t("p",null,[e[1]||(e[1]=t("strong",null,"註釋",-1)),e[2]||(e[2]=n(" - 如果你想了解 df 更多信息, 查看 ",-1)),d(p,{href:"http://www.expertslogin.com/linux-command/linux-df-command/"},{default:s(()=>[...e[0]||(e[0]=[n("df命令教程",-1)])]),_:1}),e[3]||(e[3]=n(".",-1))]),e[21]||(e[21]=i(`<h2 id="di-磁盤信息工具" tabindex="-1">di - 磁盤信息工具 <a class="header-anchor" href="#di-磁盤信息工具" aria-label="Permalink to “di - 磁盤信息工具”">​</a></h2><p><img src="http://mylinuxbook.com/wp-content/uploads/2013/10/di-main.png" alt=""></p><p>從這個di幫助手冊頁很明顯的發現 di 提供了一些很有價值的特性，值得一試。讓我們看一些這個工具實際使用的例子。</p><h3 id="測試環境" tabindex="-1">測試環境 <a class="header-anchor" href="#測試環境" aria-label="Permalink to “測試環境”">​</a></h3><ul><li>OS – Ubuntu 13.04</li><li>Shell – Bash 4.2.45</li><li>Application – di 4.30</li></ul><h2 id="一個簡短的教程" tabindex="-1">一個簡短的教程 <a class="header-anchor" href="#一個簡短的教程" aria-label="Permalink to “一個簡短的教程”">​</a></h2><p>下面是一些 di 工具的示例:</p><p>###1. 默認的輸出</p><p>默認情況下di命令生成人們易讀的輸出格式</p><p>這裏有個示例:</p><pre><code>$ di
Filesystem         Mount               Size     Used    Avail %Used  fs Type 
/dev/sda6          /                  28.1G    20.2G     6.5G   77%  ext4    
udev               /dev                1.5G     0.0G     1.5G    0%  devtmpfs
tmpfs              /run              300.2M     0.9M   299.3M    0%  tmpfs
</code></pre><p>所以你能發現用千兆字節(G)和兆字節(M)做磁盤使用情況的數據單位。這絕對是比 df 默認的輸出產生的效果好。（譯註：df也可以輸出帶類似單位的顯示，只是需要額外加參數 -h）</p><p>###2. 用 -A 選項打印類似掛載點、特殊設備名稱等全部字段</p><p>選項 -A可以用來極詳細的打印掛載點，特殊設備名稱等。</p><p>這裏有個示例:</p><pre><code>$ di -A
Mount fs Type  Filesystem 
     Options                             
        Size     Used     Free %Used  %Free 
        Size     Used    Avail %Used  %Free 
        Size     Used    Avail %Used  
       Inodes     Iused     Ifree %Iused
/     ext4     /dev/sda6  
    rw,errors=remount-ro                
       28.1G    20.2G     8.0G   72%    28%  
       28.1G    21.6G     6.5G   77%    23%  
       26.7G    20.2G     6.5G   75%  
      1884160    389881   1494279   21% 
/dev  devtmpfs udev       
    rw,mode=0755                        
        1.5G     0.0G     1.5G    0%   100%  
        1.5G     0.0G     1.5G    0%   100%  
        1.5G     0.0G     1.5G    0%  
       381805       571    381234    0% 
/run  tmpfs    tmpfs      
    rw,noexec,nosuid,size=10%,mode=0755 
      300.2M     0.9M   299.3M    0%   100%  
      300.2M     0.9M   299.3M    0%   100%  
      300.2M     0.9M   299.3M    0%  
       384191       549    383642    0%
</code></pre><p>所以你可以看到所有的字段，可以用於調試目的時打印輸出。</p><p>###3. 用 -a選項打印所有掛載設備</p><p>這裏是個示例:</p><pre><code>$ di -a
Filesystem         Mount               Size     Used    Avail %Used  fs Type        
/dev/sda6          /                  28.1G    20.2G     6.5G   77%  ext4           
udev               /dev                1.5G     0.0G     1.5G    0%  devtmpfs       
devpts             /dev/pts            0.0M     0.0M     0.0M    0%  devpts         
proc               /proc               0.0M     0.0M     0.0M    0%  proc           
binfmt_misc        /proc/sys/fs/bi     0.0M     0.0M     0.0M    0%  binfmt_misc    
tmpfs              /run              300.2M     0.9M   299.3M    0%  tmpfs          
none               /run/lock           0.0M     0.0M     0.0M    0%  tmpfs          
none               /run/shm            0.0M     0.0M     0.0M    0%  tmpfs          
none               /run/user           0.0M     0.0M     0.0M    0%  tmpfs          
gvfsd-fuse         /run/user/himan     0.0M     0.0M     0.0M    0%  fuse.gvfsd-fuse
sysfs              /sys                0.0M     0.0M     0.0M    0%  sysfs          
none               /sys/fs/cgroup      0.0M     0.0M     0.0M    0%  tmpfs          
none               /sys/fs/fuse/co     0.0M     0.0M     0.0M    0%  fusectl        
none               /sys/kernel/deb     0.0M     0.0M     0.0M    0%  debugfs        
none               /sys/kernel/sec     0.0M     0.0M     0.0M    0%  securityfs
</code></pre><p>所以你能看到與所有設備相關的所有信息，被打印出來了。</p><p>###4. 用 -c 選項用逗號作為值的分隔符</p><p>選項 -c 用命令分隔的值將附上雙引號</p><p>這裏是個示例:</p><pre><code>$ di -c
s,m,b,u,v,p,T
/dev/sda6,/,28.1G,20.2G,6.5G,77%,ext4
udev,/dev,1.5G,0.0G,1.5G,0%,devtmpfs
tmpfs,/run,300.2M,0.9M,299.3M,0%,tmpfs
</code></pre><p>如上,你可以看到打印了用逗號分隔符輸出的值。（譯註：這種輸出便於作為其他程序的輸入解析）</p><p>###5. 用 -g 選項通過千兆字節(G)打印大小</p><p>下面是個示例:</p><pre><code>$ di -g
Filesystem         Mount              Gibis     Used    Avail %Used  fs Type 
/dev/sda6          /                   28.1     20.2      6.5   77%  ext4    
udev               /dev                 1.5      0.0      1.5    0%  devtmpfs
tmpfs              /run                 0.3      0.0      0.3    0%  tmpfs
</code></pre><p>當然,你能看到所有與大小有關的值都用千兆字節(G)打印出來。</p><p>同樣的你可以用 -k 和 -m 選項來分別的顯示千字節(K)大小和兆字節(M)大小。</p><p>###6. 通過 -I 選項顯示特定的文件系統類型的相關信息</p><p>假設你想顯示只跟tmpfs文件系統相關的信息。下面將告訴你如何用 -I 選項完成任務。</p><pre><code>$ di -I tmpfs
Filesystem         Mount               Size     Used    Avail %Used  fs Type
tmpfs              /run              300.2M     0.9M   299.3M    0%  tmpfs  
none               /run/lock           5.0M     0.0M     5.0M    0%  tmpfs  
none               /run/shm            1.5G     0.0G     1.5G    0%  tmpfs  
none               /run/user         100.0M     0.0M   100.0M    0%  tmpfs  
none               /sys/fs/cgroup      0.0M     0.0M     0.0M    0%  tmpfs
</code></pre><p>Ok 你能看到只有tmpfs類型相關文件系統信息被輸出並顯示出來了。</p><p>###7. 用 -n 選項跳過標題行的輸出</p><p>如果你正試圖通過一個腳本(或程序)解析該命令的輸出結果並希望 di 命令跳過顯示的標題行，那麼用 -n 選項是絕佳的方法。</p><p>下面是個示例:</p><pre><code>$ di -n
/dev/sda6          /                  28.1G    20.2G     6.5G   77%  ext4    
udev               /dev                1.5G     0.0G     1.5G    0%  devtmpfs
tmpfs              /run              300.2M     0.9M   299.3M    0%  tmpfs
</code></pre><p>如上，你能發現輸出中並沒有顯示標題行。</p><p>###8. 通過 -t 選項在文件系統列表底下再打印一行總計行</p><p>如果想要顯示所有相關列的總數，用 -t 選項。</p><p>示例:</p><pre><code>$ di -t
Filesystem         Mount               Size     Used    Avail %Used  fs Type 
/dev/sda6          /                  28.1G    20.2G     6.5G   77%  ext4    
udev               /dev                1.5G     0.0G     1.5G    0%  devtmpfs
tmpfs              /run              300.2M     0.9M   299.3M    0%  tmpfs   
                   Total              29.9G    20.2G     8.3G   72%
</code></pre><p>觀察到最後一行的值為所有文件系統的統計數據。</p><p>###9. 通過 -s 選項 排序輸出</p><p>-s選項可用於排序該命令的輸出結果（譯註：默認按照掛載點名稱排序）</p><p>下面告訴你如何反向排序輸出:</p><pre><code>$ di -sr
Filesystem         Mount               Size     Used    Avail %Used  fs Type
tmpfs              /run              300.2M     0.9M   299.3M    0%  tmpfs
udev               /dev                1.5G     0.0G     1.5G    0%  devtmpfs
/dev/sda6          /                  28.1G    20.2G     6.5G   77%  ext4
</code></pre><p>你也可以在-s後添加子選項&#39;r&#39;逆序排序輸出。</p><p>類似的,你可以使用 -s 選項做一些其他類型的排序.以下是摘自man手冊供您參考:</p><pre><code>-s 排序方式

可以指定排序方式。默認排序方式的按照掛載點的名稱進行排序。支持如下的排序方式：
      m ：按照掛載點名稱排序（默認）
      n  ：不排序（即按照在掛載表/etc/fstab中的順序）
      s   ：按照特殊設備名稱
      t   ：按照文件系統類型
      r   ：逆序排序
      
排序方式可以組合使用，如：  di --stsrm ：按照類型、設備、掛載點逆序排序。di --strsrm ：按照類型、設備逆序、掛載點逆序排序。
</code></pre><p>###10. 通過 -f 選項指定輸出格式</p><p>你可以通過結合-f選項和其子選項指定輸出格式字符串。</p><p>例如，用 -fm，打印掛載點的名稱。</p><p>示例:</p><pre><code>$ di -fm
Mount          
/              
/dev           
/run
</code></pre><p>如上你可以看到只有掛載點的名字被打印出來。</p><p>同樣的，打印文件系統的類型，用 -ft</p><p>示例:</p><pre><code>$ di -ft
fsType 
ext4   
devtmpf
tmpfs
</code></pre><p>如果你想快速查找,這裏有個其他可用的格式選項截圖.</p><p><img src="http://mylinuxbook.com/wp-content/uploads/2013/10/di-1.png" alt=""></p>`,63)),t("p",null,[e[5]||(e[5]=n("更完整的選項,參考",-1)),d(p,{href:"http://www.manpagez.com/man/1/di/"},{default:s(()=>[...e[4]||(e[4]=[n("di命令man文檔",-1)])]),_:1})]),e[22]||(e[22]=t("h3",{id:"下載-安裝",tabindex:"-1"},[n("下載/安裝 "),t("a",{class:"header-anchor",href:"#下載-安裝","aria-label":"Permalink to “下載/安裝”"},"​")],-1)),e[23]||(e[23]=t("p",null,"這裏有一些關於di命令的重要鏈接:",-1)),t("ul",null,[t("li",null,[t("p",null,[d(p,{href:"http://www.gentoo.com/di/"},{default:s(()=>[...e[6]||(e[6]=[n("主頁",-1)])]),_:1})])]),t("li",null,[t("p",null,[d(p,{href:"http://freecode.com/projects/diskinfo"},{default:s(()=>[...e[7]||(e[7]=[n("下載鏈接",-1)])]),_:1})])])]),e[24]||(e[24]=i('<p>命令列工具 di 也能通過apt、yum等命令在命令列下載和安裝。Ubuntu用户也可以從Ubuntu 軟件中心下載這個命令。</p><h3 id="優點" tabindex="-1">優點 <a class="header-anchor" href="#優點" aria-label="Permalink to “優點”">​</a></h3><ul><li>提供了許多高級功能</li><li>跨平台</li></ul><h3 id="缺點" tabindex="-1">缺點 <a class="header-anchor" href="#缺點" aria-label="Permalink to “缺點”">​</a></h3><ul><li>在大多數的Linux發行版沒有預裝</li><li>大量選項需要學習</li></ul><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>最後，di命令提供了一些非常有用的特性，比df命令更強大。如果你正在尋找一個類似df，但比df更強大的關於磁盤信息的命令列工具，那麼di是最理想的選擇。試試吧，包你滿意!!!</p><p><strong>你試過di或任何其他類似df工具？請跟我們分享你的經驗！</strong></p><hr>',9)),t("p",null,[e[9]||(e[9]=n("via: ",-1)),d(p,{href:"http://mylinuxbook.com/di-a-disk-information-utility/"},{default:s(()=>[...e[8]||(e[8]=[n("http://mylinuxbook.com/di-a-disk-information-utility/",-1)])]),_:1})]),t("p",null,[e[12]||(e[12]=n("譯者：",-1)),d(p,{href:"https://github.com/Luoxcat"},{default:s(()=>[...e[10]||(e[10]=[n("Luoxcat",-1)])]),_:1}),e[13]||(e[13]=n(" 校對：",-1)),d(p,{href:"https://github.com/wxy"},{default:s(()=>[...e[11]||(e[11]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[16]||(e[16]=n("本文由 ",-1)),d(p,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[14]||(e[14]=[n("LCTT",-1)])]),_:1}),e[17]||(e[17]=n(" 原創翻譯，",-1)),d(p,{href:"http://linux.cn/"},{default:s(()=>[...e[15]||(e[15]=[n("Linux中國",-1)])]),_:1}),e[18]||(e[18]=n(" 榮譽推出",-1))])])}const h=r(a,[["render",m]]);export{b as __pageData,h as default};
