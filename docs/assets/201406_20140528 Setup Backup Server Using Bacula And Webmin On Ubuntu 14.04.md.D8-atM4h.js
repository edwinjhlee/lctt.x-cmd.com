import{_ as u,a0 as r,w as o,s,ao as i,I as n,a1 as p,A as l,x as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"在Ubuntu 14.04 上使用Bacula和Webmin设置备份服务器 | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu 14.04 上使用Bacula和Webmin设置备份服务器 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu 14.04 上使用Bacula和Webmin设置备份服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu 14.04 上使用Bacula和Webmin设置备份服务器 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140528 Setup Backup Server Using Bacula And Webmin On Ubuntu 14.04","title":"在Ubuntu 14.04 上使用Bacula和Webmin设置备份服务器","tag":"201406","desc":""},"relativePath":"201406/20140528 Setup Backup Server Using Bacula And Webmin On Ubuntu 14.04.md","filePath":"[post].md"}'),c={name:"201406/20140528 Setup Backup Server Using Bacula And Webmin On Ubuntu 14.04.md"};function d(b,e,m,g,f,k){const a=r("Link");return o(),s("div",null,[e[12]||(e[12]=i(`<h1 id="在ubuntu-14-04-上使用bacula和webmin设置备份服务器" tabindex="-1">在Ubuntu 14.04 上使用Bacula和Webmin设置备份服务器 <a class="header-anchor" href="#在ubuntu-14-04-上使用bacula和webmin设置备份服务器" aria-label="Permalink to “在Ubuntu 14.04 上使用Bacula和Webmin设置备份服务器”">​</a></h1><p><strong>Bacula</strong>是一个开源网络备份解决方案，允许你在本地或者远程计算机组上备份或者还原数据。配置与安装很容易，并支持许多高级存储管理特性。</p><p>本教程中，让我们来学习一下如何在Ubuntu 14.04服务器上安装和配置Bacula。我的机器的IP是<strong>192.168.1.250/24</strong>，主机名是<strong>server.unixmen.local</strong>。现在让我们进入教程吧。</p><h3 id="安装-bacula" tabindex="-1">安装 Bacula <a class="header-anchor" href="#安装-bacula" aria-label="Permalink to “安装 Bacula”">​</a></h3><p>Bacula使用SQL数据库管理它的信息。我们可以使用MySQL或者PostgreSQL数据库。本篇教程中，我使用MySQL。</p><p>输入下面的命令安装MySQL服务器。</p><pre><code>sudo apt-get update
sudo apt-get upgrade
sudo apt-get install mysql-server
</code></pre><p>在安装MySQL的过程中，可能提示需要输入数据库管理员密码。输入密码后按下OK。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0012.png" alt=""></p><p>重新输入密码：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0021.png" alt=""></p><p>现在使用下面的命令安装bacula：</p><pre><code>sudo apt-get install bacula-server bacula-client
</code></pre><p>Bacula默认使用Postfix MTA。安装过程中，你会被要求配置Postfix。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0031.png" alt=""></p><p>选择Internet站点并点击OK。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0041.png" alt=""></p><p>输入服务器完整域名（FQDN）：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0051.png" alt=""></p><p>现在输入yes用dbconfig-common来配置Bacula数据库。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_006.png" alt=""></p><p>输入MySQL数据库管理员密码：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0071.png" alt=""></p><p>设置数据库的bacula-director-mysql用户的密码。如果留空不输入，会生成一个随机密码。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0081.png" alt=""></p><p>重新输入密码：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/05/sk@server-_0091.png" alt=""></p><h3 id="创建备份与还原目录" tabindex="-1">创建备份与还原目录 <a class="header-anchor" href="#创建备份与还原目录" aria-label="Permalink to “创建备份与还原目录”">​</a></h3><p>现在，让我们创建备份与还原目录。</p><pre><code>sudo mkdir -p /mybackup/backup /mybackup/restore
</code></pre><p>设置上面目录的权限与所属用户/组：</p><pre><code>sudo chown -R bacula:bacula /mybackup/
sudo chown -R 700 /mybackup/
</code></pre><h3 id="配置-bacula" tabindex="-1">配置 Bacula <a class="header-anchor" href="#配置-bacula" aria-label="Permalink to “配置 Bacula”">​</a></h3><p>Bacula有很多配置文件需要我们配置。</p><p><strong>更新 Bacula Director 配置:</strong></p><pre><code>sudo vi /etc/bacula/bacula-dir.conf
</code></pre><p>找到下面的字段，并更新还原路径。本篇中，** /mybackup/restore**是我的还原位置。</p><pre><code>[...]
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
</code></pre><p>滚动到“list of files to be backed up”字段，并设置备份的目录。本篇教程中，我希望备份“<strong>/home/sk</strong>”目录。所以我把这个目录包含进了“File”参数中。</p><pre><code>[...]
 
#  By default this is defined to point to the Bacula binary
#    directory to give a reasonable FileSet to backup to
#    disk storage during initial testing.
#
    File = /home/sk
  }
[...]
</code></pre><p>继续向下滚动，找到<strong>Exclude</strong> 字段，设置排除在备份目录外的目录列表。这里，我排除了目录<strong>/mybackup</strong>。</p><pre><code>[...]
 
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
</code></pre><p>保存并关闭文件。</p><p><strong>更新 Bacula 存储守护进程设置：</strong></p><p>编辑 <strong>/etc/bacula/bacula-sd.conf</strong>，</p><pre><code>sudo vi /etc/bacula/bacula-sd.conf
</code></pre><p>设置备份目录位置，也就是本篇中的<strong>/mybackup/backup</strong>。</p><pre><code>[...]
 
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
</code></pre><p>现在如下检查是否所有的配置是有效的。如果下面的命令没有显示，那么配置就是有效的。</p><pre><code>sudo bacula-dir -tc /etc/bacula/bacula-dir.conf
sudo bacula-sd -tc /etc/bacula/bacula-sd.conf
</code></pre><p>一旦你完成所有的设置，重启所有的bacula服务。</p><pre><code>sudo /etc/init.d/bacula-director restart
sudo /etc/init.d/bacula-fd restart
sudo /etc/init.d/bacula-sd restart
</code></pre><p>就是这样。现在，bacula已经成功安装与配置了。</p><h3 id="使用webmin-管理-bacula" tabindex="-1">使用Webmin 管理 Bacula <a class="header-anchor" href="#使用webmin-管理-bacula" aria-label="Permalink to “使用Webmin 管理 Bacula”">​</a></h3><p>使用命令行管理Bacula是有点困难的。所以我们使用一个图形化的管理工具“webmin”来简化我们的任务。</p><p>使用下面的命令在Ubuntu 14.04上安装Webmin。</p>`,56)),n("ul",null,[n("li",null,[p(a,{href:"http://linux.cn/article-3113-1.html"},{default:l(()=>[...e[0]||(e[0]=[t("在 Ubuntu 14.04 LTS上安装Webmin",-1)])]),_:1})])]),e[13]||(e[13]=n("p",null,"现在使用URL https://ip-address:10000进入Webmin界面。在左边的窗格中进入系统标签并点击模块配置链接。如果在系统下没有找到它，在未使用模块一栏中查找。",-1)),e[14]||(e[14]=n("p",null,[n("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/05/Webmin-1.690-on-server.unixmen.local-Ubuntu-Linux-14.04-Mozilla-Firefox_002.png",alt:""})],-1)),e[15]||(e[15]=n("p",null,"在数据库一栏中选择MySQL数据库。输入MySQL管理员密码，并点击保存。",-1)),e[16]||(e[16]=n("p",null,[n("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/05/Webmin-1.690-on-server.unixmen.local-Ubuntu-Linux-14.04-Mozilla-Firefox_003.png",alt:""})],-1)),e[17]||(e[17]=n("p",null,"就是这样。现在你可以在webmin中简单地配置Bacula了。开始加入备份客户端，磁盘卷和计划任务吧。",-1)),e[18]||(e[18]=n("p",null,[n("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/05/Webmin-1.690-on-server.unixmen.local-Ubuntu-Linux-14.04-Mozilla-Firefox_004.png",alt:""})],-1)),e[19]||(e[19]=n("p",null,"干杯!",-1)),e[20]||(e[20]=n("hr",null,null,-1)),n("p",null,[e[2]||(e[2]=t("via: ",-1)),p(a,{href:"http://www.unixmen.com/setup-backup-server-using-bacula-webmin-ubuntu-14-04/"},{default:l(()=>[...e[1]||(e[1]=[t("http://www.unixmen.com/setup-backup-server-using-bacula-webmin-ubuntu-14-04/",-1)])]),_:1})]),n("p",null,[e[5]||(e[5]=t("译者：",-1)),p(a,{href:"https://github.com/geekpi"},{default:l(()=>[...e[3]||(e[3]=[t("geekpi",-1)])]),_:1}),e[6]||(e[6]=t(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:l(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[9]||(e[9]=t("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...e[7]||(e[7]=[t("LCTT",-1)])]),_:1}),e[10]||(e[10]=t(" 原创翻译，",-1)),p(a,{href:"http://linux.cn/"},{default:l(()=>[...e[8]||(e[8]=[t("Linux中国",-1)])]),_:1}),e[11]||(e[11]=t(" 荣誉推出",-1))])])}const w=u(c,[["render",d]]);export{v as __pageData,w as default};
