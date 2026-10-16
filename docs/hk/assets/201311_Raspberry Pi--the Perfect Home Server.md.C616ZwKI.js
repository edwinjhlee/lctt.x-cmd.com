import{_ as s,a0 as l,w as d,s as a,I as n,x as e,a1 as o,A as r,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const E=JSON.parse('{"title":"樹莓派（Raspberry Pi）：完美的家用服務器 | LCTT x X-CMD","titleTemplate":false,"description":"樹莓派（Raspberry Pi）：完美的家用服務器 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"樹莓派（Raspberry Pi）：完美的家用服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"樹莓派（Raspberry Pi）：完美的家用服務器 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Raspberry Pi--the Perfect Home Server","title":"樹莓派（Raspberry Pi）：完美的家用服務器","tag":"201311","desc":""},"relativePath":"201311/Raspberry Pi--the Perfect Home Server.md","filePath":"[post].md"}'),u={name:"201311/Raspberry Pi--the Perfect Home Server.md"};function m(g,t,P,f,R,S){const p=l("Link");return d(),a("div",null,[t[34]||(t[34]=n("h1",{id:"樹莓派-raspberry-pi-完美的家用服務器",tabindex:"-1"},[e("樹莓派（Raspberry Pi）：完美的家用服務器 "),n("a",{class:"header-anchor",href:"#樹莓派-raspberry-pi-完美的家用服務器","aria-label":"Permalink to “樹莓派（Raspberry Pi）：完美的家用服務器”"},"​")],-1)),t[35]||(t[35]=n("p",null,[e("自從樹莓派發布後，所有在互聯網上的網站為此激動人心的設備提供了很多有趣和具有挑戰性的使用方法。雖然這些想法都很棒，但樹莓派( "),n("strong",null,"RPi"),e(" )最明顯卻又是最不吸引人的用處是：創建你的完美家用服務器。")],-1)),t[36]||(t[36]=n("p",null,"如果你有幾個不同的電腦需要同步和自動化備份，RPi可以做到。如果你想通過家中的任意屏幕來訪問你的音樂和視頻，RPi也能實現。也許你有一個或兩個打印機，你想要簡單與大家共享，樹莓派在硬件和時間上用最小投資就能滿足你的這些需求。",-1)),t[37]||(t[37]=n("p",null,"###樹莓派的好處",-1)),t[38]||(t[38]=n("p",null,"低成本：35美元（約合242元RMB），B型的RPi接近一台完整的電腦，512M內存，100Mb以太網，SD卡插槽，2個USB接口，音頻輸出和HDMI或RCA視頻輸出。我知道HDMI電纜就比樹莓派貴。",-1)),t[39]||(t[39]=n("p",null,"能源效率：硬件成本只是服務器費用的一部分，因為你需要考慮能源成本去不斷運行設備。家用服務器所需要的服務不會佔用太多CPU，大部分時間它都處於空閒狀態，等待發揮功效。RPi's超低功率組件非常適合這個工作負載，這有助於降低你的電費消耗。我的一個B型的RPi加上外部硬盤消耗總共只有8瓦，然而用老式速龍代替的機器在閒置時消耗54瓦。假設10美分每千瓦一小時，這使得一個RPi每年的電費在7美元。一個基於速龍的機器是47美元。在不到一年的時間裏，RPI基本上能夠收回成本。",-1)),n("p",null,[t[1]||(t[1]=e("低噪音：因為RPi沒有風扇和移動部件，在你最終配置中的唯一能生成噪音或明顯熱量的組件就是硬盤。如果你擔心噪音，像",-1)),o(p,{href:"http://www.silentpcreview.com/"},{default:r(()=>[...t[0]||(t[0]=[e("Silent PC Review",-1)])]),_:1}),t[2]||(t[2]=e("發燒友網站經常在他們的評論中涉及到噪聲基準。我的體會是現代驅動器足夠安靜，要比其他的設備安靜的多（如媒體中心，遊戲機或其他電腦）。如果你家裏沒有為佈線提供更多的靈活性選擇，RPi的小尺寸、少量發熱和低噪音也許讓你走過它旁邊都很難發現。",-1))]),t[40]||(t[40]=n("p",null,[n("img",{src:"http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1002061/11454f1.jpg",alt:""})],-1)),t[41]||(t[41]=n("p",null,"圖1,一個簡潔高效的家用服務器",-1)),t[42]||(t[42]=n("p",null,"新機會：一個不怎麼實際的好處是-簡單快樂的嘗試新事物！對我來説，這是我第一次真正工作在基於Debian的發行版，很可能也是許多Linux愛好者們第一次有機會嘗試一個基於ARM的體系結構。",-1)),t[43]||(t[43]=n("p",null,"###佈置硬件",-1)),t[44]||(t[44]=n("p",null,"對於一個家庭服務器來説，你將需要一箇中等容量的SD閃存卡作為本地存儲。它可以使用一個USB引導，但那會佔用兩個寶貴的USB插槽之一。閃存卡不需要很大容量，但是速度越快越好。我選擇了一個名牌SD卡，8GB容量和CLASS 10的速度等級。對於備份和存儲多媒體文件，一個有USB連接插槽的硬盤驅動器是必須的。我選擇一個1.5TB的硬盤和一個Calvary EN-CAHDD-D 2-bay USB 2.0硬盤連接基座。這個連接基座有個功能，在RAID-0模式中連接兩個硬盤，總有一天會有用的。最後，RPi不帶電源線，但可以用大多數智能手機充電器所用的5v微型USB。看看RPi是否挑剔電源，我為電源已換了三個不同的微型USB手機充電器。我在這周內嘗試了每一個，在任何一個上都沒有問題。",-1)),t[45]||(t[45]=n("p",null,"###安裝操作系統",-1)),t[46]||(t[46]=n("p",null,"安裝RPi操作系統包括了許多方面的大量細節，但這裏有一些家用特定服務器的安裝提示，大致按需要的順序講述。",-1)),n("p",null,[t[4]||(t[4]=e("1）直接通過",-1)),o(p,{href:"http://www.raspberrypi.org/downloads"},{default:r(()=>[...t[3]||(t[3]=[e("http://www.raspberrypi.org/downloads",-1)])]),_:1}),t[5]||(t[5]=e('獲取Raspbian "Wheezy"安裝鏡像，並複製到SD卡，用網站上已列出的步驟。',-1))]),t[47]||(t[47]=i(`<p>2）第一次引導RPi時，連接一個鍵盤、鼠標和顯示器。在引導RPi之前別忘打開顯示器，可以檢測到正確的HDMI或混合輸出端口。</p><p>3）RPi有一個很好的&quot;raspi-config&quot;屏幕，在第一次啓動時你會看到。對於家庭服務器來説，以下選擇將會有用：</p><ul><li>expand_rootfs：調整默認2GB OS鏡像的大小，來填滿閃存卡剩餘的內存。</li><li>change_pass：修改默認密碼&quot;raspberry&quot;，但是，越安全的密碼越好。</li><li>設置你的地點和時區。</li><li>memory_split：給GPIU服務分配最少的內存（16M）儘可能為其他服務留下更多內存。</li><li>SSH：別忘開啓SSH服務。</li><li>boot_behaviour：關閉“啓動至桌面（boot to desktop）”（再次為你的其他服務節省內存）。</li></ul><p>完成後，你將在出現 <code>pi@raspberrypi</code> 提示符下。安裝腳本可以在任何時間通過 <code>sudo raspi-config</code> 重新運行。</p><p>還有一些其他配置，然後操作系統就可以用了。</p><p>1）一個靜態IP讓一切變得更容易，切換eth0的網絡設置：</p><pre><code>   &gt;&gt; sudo nano -w /etc/network/interfaces  
</code></pre><p>更改eth0的那行 <code>iface eth0 inet dhcp</code> ，如下所示（根據你的家庭網絡設置修改）：</p><pre><code>======/etc/network/interfaces======
...
iface eth0 inet static
address 192.168.1.10
netmask 255.255.255.0
gateway 192.168.1.1
...
======/etc/network/interfaces======
</code></pre><p>2）創建本地用户並加入到users組和sudo組：</p><pre><code>&gt;&gt; sudo adduser YOURUSERIDHERE
&gt;&gt; sudo usermod -a -G users YOURUSERIDHERE
&gt;&gt; sudo usermod -a -G sudo YOURUSERIDHERE
</code></pre><p>3）更新系統確保所有的庫是最新最好的：</p><pre><code>&gt;&gt; sudo apt-get update; sudo apt-get upgrade
</code></pre><p>4）好了，準備重新啓動吧！先關閉PI：</p><pre><code>&gt;&gt; sudo /sbin/shutdown -h now
</code></pre><p>一旦關閉（注意RPi電路板上的綠色LED狀態指示燈，可以知道什麼時候完成關閉了），拔下顯示器，鍵盤，鼠標和電源線。插入USB端口上的硬盤，然後插回電源重啓RPi。</p><p>5）一旦RPi開啓（這些綠色LED指示燈用來描述狀態），你可以從遠程網絡上從任何其他機器ssh到RPi並完成所有的配置（更改以下命令裏的IP為你的靜態IP）：</p><pre><code>&gt;&gt; ssh YOURUSERIDHERE@192.168.1.10
</code></pre><p>祝賀你，有了一個可以工作的樹莓派！</p><p>###外設</p><p>第一件事是要連接外設。用dmesg來尋找你的存儲設備，會發現——幾乎可以肯定是/dev/sda。我喜歡使用自動掛載去掛載移動存儲設備，這樣更靈活，因為在啓動時這些設備也許沒有或者沒準備好：</p><pre><code>&gt;&gt; sudo apt-get install autofs
&gt;&gt; sudo nano -w /etc/auto.master 
======/etc/auto.master======
...
/misc /etc/auto.misc
...
======/etc/auto.master======

&gt;&gt; sudo nano -w /etc/auto.misc
</code></pre><p>注意，我的外部存儲設備是ext4格式，如果需要話可以在下面更改：</p><pre><code>======/etc/auto.misc======
...
storage -fstype=ext4:/dev/sda1
...
======/etc/auto.misc======
&gt;&gt; sudo /etc/init.d/autofs restart 
&gt;&gt; ls -lat /misc/storage 
</code></pre><p>可選的，創建一個符號鏈接的短路徑：</p><pre><code>&gt;&gt; ln -s /misc/storage /storage
</code></pre><p>###備份倉庫</p><p>在任何家庭服務器功能列表裏面最重要的是提供堅如磐石的備份。對於RPi來説，這很簡單而優美，在Linux中有豐富的網絡共享選項：Samba/CIFS用於Windows機器，NFS用於基於UNIX的設備，並且甚至SFTP可以用於更多新的備份客户端，如deja-dup。由於RPi只有100MB以太網接口和USB上的存儲設備，它沒有非常快的傳送速度。不過在另一方面，好的備份客户端是在後台自動運行的，所以你不會注意略微緩慢的傳輸速度。</p>`,28)),n("p",null,[t[7]||(t[7]=e("我的家庭網絡包括一台Windows 7電腦。對於它，我通過Samba在RPi's外部USB存儲設備上導出一個備份目錄。因為備份程序在Windows7基礎版上不支持網絡設備作為備份目標，我使用",-1)),o(p,{href:"http://www.2brightsparks.com/freeware/freeware-hub.html"},{default:r(()=>[...t[6]||(t[6]=[e("SyncBack Free",-1)])]),_:1}),t[8]||(t[8]=e("去設置使其自動化，每日備份。",-1))]),t[48]||(t[48]=i(`<p>配置Samba是容易的。</p><p>1）安裝samba和common-bin庫（具有smbpasswd效用）</p><pre><code>&gt;&gt; sudo apt-get install samba samba-common-bin
</code></pre><p>2）使用 <code>smbpasswd</code> 讓你的本地ID能訪問：</p><pre><code>&gt;&gt; sudo smbpasswd -a YOURUSERIDHERE
</code></pre><p>3）編輯samba配置文件：</p><pre><code>&gt;&gt; sudo nano -w /etc/samba/smb.conf
</code></pre><p>4）更改 <code>workgroup = WORKGROUP</code> 行以匹配你的Windows工作組名稱。</p><p>5）註釋掉或刪除[homes]和[printers]共享。(打印機共享稍後將通過直接CUPS訪問來完成。)</p><p>6）為Windows備份路徑增加一個條目。這是我的示例，放置在該文件的底部：</p><pre><code>======/etc/samba/smb.conf======
...
[win7pc] 
comment=Backup for windows PC
path=/storage/win7pc 
writeable=Yes 
create mask=0777 
directory mask=0777 
browsable=Yes 
public=Yes 
valid users=YOURUSERIDHERE
...
======/etc/samba/smb.conf======
</code></pre><p>7）重啓Samba使你的編輯生效：</p><pre><code>&gt;&gt; sudo /etc/init.d/samba restart
</code></pre><p>8）從Windows機器文件資源管理器通過映射一個網絡設備測試連通。</p><p>對Linux設備來説，設置和使用deja-dup非常簡單。它被默認安裝在我的Fedora 18和Ubuntu 12.10上。包的名稱是“deja-dup”，程序名簡單的稱為“Backup（備份）”。雖然RPi很容易支持NFS導出，我發現使用deja-dup的SSH選項更容易，更方便，在RPi上它不需要額外服務的支持。指定一個deja-dup加密密碼是一個好主意，除非你不在意一旦丟失了存儲器，別人就可以拿走全部數據：</p><pre><code>&gt;&gt; sudo mkdir /storage/linuxlaptop
&gt;&gt; sudo chown -R YOURUSERIDHERE:YOURUSERIDHERE /storage/linuxlaptop
</code></pre><p>從linux客户端啓動備份程序，選擇“SSH”作為備份位置，輸入RPi的IP地址和你創建的存儲位置。首次備份會很慢，但是以後的運行將只發送增量變化，速度更快。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/medium-350px-centered/u1002061/11454f2.png" alt=""></p><p>圖2,Deja-dup客户端設置</p><p>###多媒體服務器：DLNA</p><p>現在每個人的文件都已安全備份。讓我們繼續看些有趣的！一個DLNA服務器可以讓你集中存儲你的電影、音樂和圖片。通過這個中心庫，家中每一個屏幕的DLNA客户端都可以輕鬆重放此內容。</p><p>至少，這是一個宣稱。事實是這樣的，DNLA規格並不太確定一些重要的事情，如支持哪些格式或編碼。每個客户端通常對於支持什麼格式和服務器功能都有略微不同的想法。很多高功率的服務器也許能轉碼本地內容到移動設備支持的格式，但是在RPi上是不可能的，在即時轉碼上經常擾亂其他功能，如暫停，快進和倒帶。一般情況下，高功率設備如PS3、Xbox和WD TV設備支持大多數格式，而無需任何轉碼。低端設備如智能TVs或Blu-ray播放器只支持更有限的編碼列表。</p><p>對於RPi來説，最好的辦法是支持你的主要的DLNA設備的標準編碼，然後測試你的其他DLNA客户端。如果沒有完美播放，在下一節的提示也許有幫助。在我的情況下，我的PlayStation 3充當DLNA客户端，PS3能夠流暢播放經Handbrake製作後的.m4v文件。</p><p>對於RPi的DLNA服務器來説，Minidlna是個很好的選擇。它已經在Raspbian發行版中，易於設置和使用最小服務資源運行：</p><pre><code>&gt;&gt; sudo apt-get install minidlna
&gt;&gt; sudo nano  -w /etc/minidlna.conf
</code></pre><p>這是我/etc/minidlna.conf文件的相關部分：</p><pre><code>...
# I found keeping video + audio in different paths helpful
media_dir=V,/storage/dlna/video 
media_dir=A,/storage/dlna/music 
...
presentation_url=http://192.168.1.10:8200/
...	
friendly_name=MyRPi
...
# Since I add new media infrequently, turning off 
# inotify keeps minidlna for polling for 
# content changes. It&#39;s simple enough to run 
# sudo /etc/init.d/minidlna force-reload
# when new content is added.
inotify=no
</code></pre><p>一旦完成編輯，重啓minidlna以加載新配置：</p><pre><code>&gt;&gt; sudo /etc/init.d/minidlna force-reload
</code></pre><p>Minidlna能夠為你的設備支持的電影提供電影海報縮略圖（像PS3）。這讓我能夠更方便地在幾十個電影文件中滾屏查找我想要的那個電影。我發現每個電影一個目錄是最兼容的文件佈局，只包含影片文件和縮略圖，圖像命名為“Cover.jpg”。使用像&quot;MovieName.m4v&quot;和&quot;MovieName.jpg&quot;的格式在PS3上工作的很好，但它不太適合VLC（除非你能讓VLC uPNP插件首先查找服務器的話）。</p>`,30)),n("p",null,[t[10]||(t[10]=e('通過PS3，你可以通過轉到在XMB欄上的"Video"測試連通性。當視頻列表向下翻頁時，你以前設置的"friendly_name"應該是可見的，測試確保Minidlna是通過瀏覽器轉到',-1)),o(p,{href:"http://192.168.1.10:8200/%E3%80%82"},{default:r(()=>[...t[9]||(t[9]=[e("http://192.168.1.10:8200/。",-1)])]),_:1})]),t[49]||(t[49]=n("p",null,"###非DLNA設備的多媒體",-1)),t[50]||(t[50]=n("p",null,"當你讓DNLA與你的一些設備一起工作時，你可能會發現有些設備並不適合它，所以多媒體計劃B是個好主意。Nginx網站服務器有一個MP4插件嘗試在舊式的HTTP連接上改善流媒體傳輸，但是瀏覽器回放的性能差別很大，在一部電影裏快進也一直不工作。看起來多媒體共享或非 DLNA 設備的最低共同特性是使用傳統Samba共享的訪客只讀訪問。",-1)),t[51]||(t[51]=n("p",null,"這是/etc/samba/smb.conf的部分示例：",-1)),t[52]||(t[52]=n("pre",null,[n("code",null,`[dlna] 
path=/storage/dlna 
read only=yes 
browsable=yes 
public=yes 
`)],-1)),t[53]||(t[53]=n("p",null,[e("定義了共享設置後重啓Samba（ "),n("code",null,"sudo /etc/init.d/samba restart"),e(" ），你可以開始測試你的客户端。")],-1)),t[54]||(t[54]=n("p",null,"我用一個混合的編碼m4v視頻文件測試了以下客户端：",-1)),n("ul",null,[t[13]||(t[13]=n("li",null,[n("p",null,'Android 4.0.4手機："ES File Explorer"與"ES Media Player"（播放器附帶安裝）。')],-1)),t[14]||(t[14]=n("li",null,[n("p",null,'Android 4.1.2平板電腦："ES File Explorer"與"ES Media Player"（播放器附帶安裝）。')],-1)),n("li",null,[n("p",null,[t[12]||(t[12]=e("Linux設備：自動掛載：",-1)),o(p,{href:"//192.168.1.10/dlna%EF%BC%8C%E7%84%B6%E5%BE%8C%E4%BD%BF%E7%94%A8VLC%E6%88%96MPlayer%E3%80%82"},{default:r(()=>[...t[11]||(t[11]=[e("//192.168.1.10/dlna，然後使用VLC或MPlayer。",-1)])]),_:1})])]),t[15]||(t[15]=n("li",null,[n("p",null,"Windows：掛載//192.168.1.10:/dlna，然後使用VLC。")],-1))]),t[55]||(t[55]=i(`<p>所有設備都能幾乎立即開始播放和快進沒有延遲的情況。</p><p>###打印服務器</p><p>RPi運行CUPS相當不錯，所以它容易共享一個較舊的沒有本地網絡接口的打印機。</p><p>安裝你的打印機所需的CUPS和任何軟件包。我需要hplip-cups，因為我有一個HP噴墨打印機：</p><pre><code>&gt;&gt;  sudo apt-get install cups hplip-cups
</code></pre><p>更新“Listen”行和增加 <code>Allow @LOCAL</code> 到位置指令，如下所示（你可以使用其他機器在你的LAN上去管理CUPS）：</p><pre><code>======/etc/cups/cupsd.conf======
#Listen localhost:631  #Comment this out
Listen 192.168.1.10:631 #Add this line
...
&lt;Location /&gt; 
  Order allow,deny 
  Allow @LOCAL 
&lt;/Location&gt; 

# Restrict access to the admin pages... 
&lt;Location /admin&gt; 
  Order allow,deny 
  Allow @LOCAL 
&lt;/Location&gt; 

# Restrict access to configuration files... 
&lt;Location /admin/conf&gt; 	
  AuthType Default 
  Require user @SYSTEM 
  Order allow,deny 
  Allow @LOCAL 
&lt;/Location&gt; 
======/etc/cups/cupsd.conf======
</code></pre><p>添加你的本地ID到lpadmin組就能管理CUPS：</p><pre><code>&gt;&gt; sudo usermod -a -G lpadmin  YOURUSERIDHERE
</code></pre><p>重啓CUPS：</p><pre><code>&gt;&gt; sudo /etc/init.d/cups restart
</code></pre>`,11)),n("p",null,[t[18]||(t[18]=e("然後轉到",-1)),o(p,{href:"http://192.168.1.10:631/%E4%B8%A6%E9%BB%9E%E6%93%8A"},{default:r(()=>[...t[16]||(t[16]=[e("http://192.168.1.10:631/並點擊",-1)])]),_:1}),t[19]||(t[19]=e(' "Adding Printers and Classes"去設置你的打印機。我的打印機是自動發現的USB設備，所以，我只需點擊“share”就可以。同樣訪問',-1)),o(p,{href:"https://192.168.1.10:631/admin%EF%BC%8C%E7%A2%BA%E4%BF%9D%E6%AA%A2%E6%9F%A5%E2%80%9CShare"},{default:r(()=>[...t[17]||(t[17]=[e("https://192.168.1.10:631/admin，確保檢查“Share",-1)])]),_:1}),t[20]||(t[20]=e(" printers connected to this system（共享連接至這個系統的打印機）”。",-1))]),n("p",null,[t[22]||(t[22]=e("完成後，你可以用通常的方式設置你的客户端。當我輸入主機名，我的Linux客户端就能夠自動發現打印機，並選擇正確的驅動程序。在我的Windows7的機器上，一旦我選擇“Network Printer（網絡打印機）”，我必須點擊“The printer that I want isn't listed（我想要的打印機未列出）”，選擇“Select a shared printer by name（通過名稱選擇共享的打印機）”，然後從CUPS網絡接口輸入URL：",-1)),o(p,{href:"http://192.168.1.10:631/printers/HP_J4500%E3%80%82"},{default:r(()=>[...t[21]||(t[21]=[e("http://192.168.1.10:631/printers/HP_J4500。",-1)])]),_:1})]),t[56]||(t[56]=n("p",null,"###結論",-1)),t[57]||(t[57]=n("p",null,"用最少的額外的硬件和配置，樹莓派是高效、簡潔的家用服務器。它能夠花最小的硬件費用來為你的家庭環境帶來由Linux提供的廣泛企業服務。",-1)),t[58]||(t[58]=n("hr",null,null,-1)),n("p",null,[t[24]||(t[24]=e("via: ",-1)),o(p,{href:"http://www.linuxjournal.com/content/raspberry-pi-perfect-home-server"},{default:r(()=>[...t[23]||(t[23]=[e("http://www.linuxjournal.com/content/raspberry-pi-perfect-home-server",-1)])]),_:1})]),n("p",null,[t[27]||(t[27]=e("本文由 ",-1)),o(p,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[25]||(t[25]=[e("LCTT",-1)])]),_:1}),t[28]||(t[28]=e(" 原創翻譯，",-1)),o(p,{href:"http://linux.cn/"},{default:r(()=>[...t[26]||(t[26]=[e("Linux中國",-1)])]),_:1}),t[29]||(t[29]=e(" 榮譽推出",-1))]),n("p",null,[t[32]||(t[32]=e("譯者：",-1)),o(p,{href:"https://github.com/vito-L"},{default:r(()=>[...t[30]||(t[30]=[e("Vito",-1)])]),_:1}),t[33]||(t[33]=e(" 校對：",-1)),o(p,{href:"https://github.com/carolinewuyan"},{default:r(()=>[...t[31]||(t[31]=[e("Caroline",-1)])]),_:1})])])}const L=s(u,[["render",m]]);export{E as __pageData,L as default};
