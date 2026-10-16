import{_ as u,a0 as r,w as o,s,ao as i,I as n,a1 as p,A as l,x as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"在Ubuntu 14.04 上使用Bacula和Webmin設置備份服務器 | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu 14.04 上使用Bacula和Webmin設置備份服務器 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu 14.04 上使用Bacula和Webmin設置備份服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu 14.04 上使用Bacula和Webmin設置備份服務器 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140528 Setup Backup Server Using Bacula And Webmin On Ubuntu 14.04","title":"在Ubuntu 14.04 上使用Bacula和Webmin設置備份服務器","tag":"201406","desc":""},"relativePath":"201406/20140528 Setup Backup Server Using Bacula And Webmin On Ubuntu 14.04.md","filePath":"[post].md"}'),c={name:"201406/20140528 Setup Backup Server Using Bacula And Webmin On Ubuntu 14.04.md"};function d(b,e,m,g,f,k){const a=r("Link");return o(),s("div",null,[e[12]||(e[12]=i(`<h1 id="在ubuntu-14-04-上使用bacula和webmin設置備份服務器" tabindex="-1">在Ubuntu 14.04 上使用Bacula和Webmin設置備份服務器 <a class="header-anchor" href="#在ubuntu-14-04-上使用bacula和webmin設置備份服務器" aria-label="Permalink to “在Ubuntu 14.04 上使用Bacula和Webmin設置備份服務器”">​</a></h1><p><strong>Bacula</strong>是一個開源網絡備份解決方案，允許你在本地或者遠程計算機組上備份或者還原數據。配置與安裝很容易，並支持許多高級存儲管理特性。</p><p>本教程中，讓我們來學習一下如何在Ubuntu 14.04服務器上安裝和配置Bacula。我的機器的IP是<strong>192.168.1.250/24</strong>，主機名是<strong>server.unixmen.local</strong>。現在讓我們進入教程吧。</p><h3 id="安裝-bacula" tabindex="-1">安裝 Bacula <a class="header-anchor" href="#安裝-bacula" aria-label="Permalink to “安裝 Bacula”">​</a></h3><p>Bacula使用SQL資料庫管理它的信息。我們可以使用MySQL或者PostgreSQL資料庫。本篇教程中，我使用MySQL。</p><p>輸入下面的命令安裝MySQL服務器。</p><pre><code>sudo apt-get update
sudo apt-get upgrade
sudo apt-get install mysql-server
</code></pre><p>在安裝MySQL的過程中，可能提示需要輸入資料庫管理員密碼。輸入密碼後按下OK。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0012.png" alt=""></p><p>重新輸入密碼：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0021.png" alt=""></p><p>現在使用下面的命令安裝bacula：</p><pre><code>sudo apt-get install bacula-server bacula-client
</code></pre><p>Bacula默認使用Postfix MTA。安裝過程中，你會被要求配置Postfix。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0031.png" alt=""></p><p>選擇Internet站點並點擊OK。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0041.png" alt=""></p><p>輸入服務器完整域名（FQDN）：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0051.png" alt=""></p><p>現在輸入yes用dbconfig-common來配置Bacula資料庫。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_006.png" alt=""></p><p>輸入MySQL資料庫管理員密碼：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0071.png" alt=""></p><p>設置資料庫的bacula-director-mysql用户的密碼。如果留空不輸入，會生成一個隨機密碼。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0081.png" alt=""></p><p>重新輸入密碼：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0091.png" alt=""></p><h3 id="創建備份與還原目錄" tabindex="-1">創建備份與還原目錄 <a class="header-anchor" href="#創建備份與還原目錄" aria-label="Permalink to “創建備份與還原目錄”">​</a></h3><p>現在，讓我們創建備份與還原目錄。</p><pre><code>sudo mkdir -p /mybackup/backup /mybackup/restore
</code></pre><p>設置上面目錄的權限與所屬用户/組：</p><pre><code>sudo chown -R bacula:bacula /mybackup/
sudo chown -R 700 /mybackup/
</code></pre><h3 id="配置-bacula" tabindex="-1">配置 Bacula <a class="header-anchor" href="#配置-bacula" aria-label="Permalink to “配置 Bacula”">​</a></h3><p>Bacula有很多配置文件需要我們配置。</p><p><strong>更新 Bacula Director 配置:</strong></p><pre><code>sudo vi /etc/bacula/bacula-dir.conf
</code></pre><p>找到下面的字段，並更新還原路徑。本篇中，** /mybackup/restore**是我的還原位置。</p><pre><code>[...]
Job {
  Name = &quot;RestoreFiles&quot;
  Type = Restore
  Client=server-fd
  FileSet=&quot;Full Set&quot;
  Storage = File
  Pool = Default
  Messages = Standard
  Where = /mybackup/restore
}
[...]
</code></pre><p>滾動到“list of files to be backed up”字段，並設置備份的目錄。本篇教程中，我希望備份“<strong>/home/sk</strong>”目錄。所以我把這個目錄包含進了“File”參數中。</p><pre><code>[...]
 
#  By default this is defined to point to the Bacula binary
#    directory to give a reasonable FileSet to backup to
#    disk storage during initial testing.
#
    File = /home/sk
  }
[...]
</code></pre><p>繼續向下滾動，找到<strong>Exclude</strong> 字段，設置排除在備份目錄外的目錄列表。這裏，我排除了目錄<strong>/mybackup</strong>。</p><pre><code>[...]
 
# If you backup the root directory, the following two excluded
#   files can be useful
#
  Exclude {
    File = /var/lib/bacula
    File = /nonexistant/path/to/file/archive/dir
    File = /proc
    File = /tmp
    File = /.journal
    File = /.fsck
    File = /mybackup
  }
}
[...]
</code></pre><p>保存並關閉文件。</p><p><strong>更新 Bacula 存儲守護進程設置：</strong></p><p>編輯 <strong>/etc/bacula/bacula-sd.conf</strong>，</p><pre><code>sudo vi /etc/bacula/bacula-sd.conf
</code></pre><p>設置備份目錄位置，也就是本篇中的<strong>/mybackup/backup</strong>。</p><pre><code>[...]
 
Device {
  Name = FileStorage
  Media Type = File
  Archive Device = /mybackup/backup
  LabelMedia = yes;                   # lets Bacula label unlabeled media
  Random Access = Yes;
  AutomaticMount = yes;               # when device opened, read it
  RemovableMedia = no;
  AlwaysOpen = no;
}
[...]
</code></pre><p>現在如下檢查是否所有的配置是有效的。如果下面的命令沒有顯示，那麼配置就是有效的。</p><pre><code>sudo bacula-dir -tc /etc/bacula/bacula-dir.conf
sudo bacula-sd -tc /etc/bacula/bacula-sd.conf
</code></pre><p>一旦你完成所有的設置，重啓所有的bacula服務。</p><pre><code>sudo /etc/init.d/bacula-director restart
sudo /etc/init.d/bacula-fd restart
sudo /etc/init.d/bacula-sd restart
</code></pre><p>就是這樣。現在，bacula已經成功安裝與配置了。</p><h3 id="使用webmin-管理-bacula" tabindex="-1">使用Webmin 管理 Bacula <a class="header-anchor" href="#使用webmin-管理-bacula" aria-label="Permalink to “使用Webmin 管理 Bacula”">​</a></h3><p>使用命令列管理Bacula是有點困難的。所以我們使用一個圖形化的管理工具“webmin”來簡化我們的任務。</p><p>使用下面的命令在Ubuntu 14.04上安裝Webmin。</p>`,56)),n("ul",null,[n("li",null,[p(a,{href:"http://linux.cn/article-3113-1.html"},{default:l(()=>[...e[0]||(e[0]=[t("在 Ubuntu 14.04 LTS上安裝Webmin",-1)])]),_:1})])]),e[13]||(e[13]=n("p",null,"現在使用URL https://ip-address:10000進入Webmin界面。在左邊的窗格中進入系統標籤並點擊模組配置鏈接。如果在系統下沒有找到它，在未使用模組一欄中查找。",-1)),e[14]||(e[14]=n("p",null,[n("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/05/Webmin-1.690-on-server.unixmen.local-Ubuntu-Linux-14.04-Mozilla-Firefox_002.png",alt:""})],-1)),e[15]||(e[15]=n("p",null,"在資料庫一欄中選擇MySQL資料庫。輸入MySQL管理員密碼，並點擊保存。",-1)),e[16]||(e[16]=n("p",null,[n("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/05/Webmin-1.690-on-server.unixmen.local-Ubuntu-Linux-14.04-Mozilla-Firefox_003.png",alt:""})],-1)),e[17]||(e[17]=n("p",null,"就是這樣。現在你可以在webmin中簡單地配置Bacula了。開始加入備份客户端，磁盤卷和計劃任務吧。",-1)),e[18]||(e[18]=n("p",null,[n("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/05/Webmin-1.690-on-server.unixmen.local-Ubuntu-Linux-14.04-Mozilla-Firefox_004.png",alt:""})],-1)),e[19]||(e[19]=n("p",null,"乾杯!",-1)),e[20]||(e[20]=n("hr",null,null,-1)),n("p",null,[e[2]||(e[2]=t("via: ",-1)),p(a,{href:"http://www.unixmen.com/setup-backup-server-using-bacula-webmin-ubuntu-14-04/"},{default:l(()=>[...e[1]||(e[1]=[t("http://www.unixmen.com/setup-backup-server-using-bacula-webmin-ubuntu-14-04/",-1)])]),_:1})]),n("p",null,[e[5]||(e[5]=t("譯者：",-1)),p(a,{href:"https://github.com/geekpi"},{default:l(()=>[...e[3]||(e[3]=[t("geekpi",-1)])]),_:1}),e[6]||(e[6]=t(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:l(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[9]||(e[9]=t("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...e[7]||(e[7]=[t("LCTT",-1)])]),_:1}),e[10]||(e[10]=t(" 原創翻譯，",-1)),p(a,{href:"http://linux.cn/"},{default:l(()=>[...e[8]||(e[8]=[t("Linux中國",-1)])]),_:1}),e[11]||(e[11]=t(" 榮譽推出",-1))])])}const w=u(c,[["render",d]]);export{v as __pageData,w as default};
