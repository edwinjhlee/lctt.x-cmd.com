import{_ as i,a0 as s,w as a,s as p,ao as d,I as l,x as e,a1 as r,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const E=JSON.parse('{"title":"如何用Perl访问SQLite数据库 | LCTT x X-CMD","titleTemplate":false,"description":"如何用Perl访问SQLite数据库 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用Perl访问SQLite数据库 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用Perl访问SQLite数据库 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150604 How to access SQLite database in Perl","title":"如何用Perl访问SQLite数据库","tag":"201507","desc":""},"relativePath":"201507/20150604 How to access SQLite database in Perl.md","filePath":"[post].md"}'),u={name:"201507/20150604 How to access SQLite database in Perl.md"};function S(m,t,T,$,q,D){const n=s("Link");return a(),p("div",null,[t[13]||(t[13]=d(`<h1 id="如何用perl访问sqlite数据库" tabindex="-1">如何用Perl访问SQLite数据库 <a class="header-anchor" href="#如何用perl访问sqlite数据库" aria-label="Permalink to “如何用Perl访问SQLite数据库”">​</a></h1><p>SQLite是一个零配置、无服务端、基于文件的事务型数据库系统。由于它的轻量级，自包含和紧凑的设计，所以当你想要集成数据库到你的程序中时，SQLite是一个非常不错的选择。在这篇文章中，我会展示如何用Perl脚本来创建和访问SQLite数据库。我演示的Perl代码片段是完整的，所以你可以很简单地修改并集成到你的项目中。</p><p><img src="https://farm1.staticflickr.com/552/18444614631_9e7fce8243_c.jpg" alt=""></p><h3 id="访问sqlite的准备" tabindex="-1">访问SQLite的准备 <a class="header-anchor" href="#访问sqlite的准备" aria-label="Permalink to “访问SQLite的准备”">​</a></h3><p>我会使用SQLite DBI Perl驱动来连接到SQLite3。因此你需要在Linux中安装它（和SQLite3一起）。</p><p><strong>Debian、 Ubuntu 或者 Linux Mint</strong></p><pre><code>$ sudo apt-get install sqlite3 libdbd-sqlite3-perl
</code></pre><p><strong>CentOS、 Fedora 或者 RHEL</strong></p><pre><code>$ sudo yum install sqlite perl-DBD-SQLite
</code></pre><p>安装后，你可以检查SQLite驱动可以通过下面的脚本访问到。</p><pre><code>#!/usr/bin/perl

my @drv = DBI-&gt;available_drivers();
print join(&quot;\\n&quot;, @drv), &quot;\\n&quot;;
</code></pre><p>如果你运行脚本，你应该会看见下面的输出。</p><pre><code>DBM
ExampleP
File
Gofer
Proxy
SQLite
Sponge
</code></pre><h3 id="perl-sqlite-访问示例" tabindex="-1">Perl SQLite 访问示例 <a class="header-anchor" href="#perl-sqlite-访问示例" aria-label="Permalink to “Perl SQLite 访问示例”">​</a></h3><p>下面就是Perl访问SQLite的示例。这个Perl脚本会演示下面这些SQLite数据库的常规管理。</p><ul><li><p>创建和连接SQLite数据库</p></li><li><p>在SQLite数据库中创建新表</p></li><li><p>在表中插入行</p></li><li><p>在表中搜索和迭代行</p></li><li><p>在表中更新行</p></li><li><p>在表中删除行</p></li><li></li></ul><pre><code>use DBI;
use strict;
 
# 定义数据库名称和驱动
my $driver   = &quot;SQLite&quot;;
my $db_name = &quot;xmodulo.db&quot;;
my $dbd = &quot;DBI:$driver:dbname=$db_name&quot;;
 
# sqlite 没有用户名密码的概念
my $username = &quot;&quot;;
my $password = &quot;&quot;;
 
# 创建并连接到数据库
# 以下创建的文件名为 xmodulo.db
my $dbh = DBI-&gt;connect($dbd, $username, $password, { RaiseError =&gt; 1 })
                      or die $DBI::errstr;
print STDERR &quot;Database opened successfully\\n&quot;;
 
# 创建表
my $stmt = qq(CREATE TABLE IF NOT EXISTS NETWORK
             (ID INTEGER PRIMARY KEY     AUTOINCREMENT,
              HOSTNAME       TEXT    NOT NULL,
              IPADDRESS      INT     NOT NULL,
              OS             CHAR(50),
              CPULOAD        REAL););
my $ret = $dbh-&gt;do($stmt);
if($ret &lt; 0) {
   print STDERR $DBI::errstr;
} else {
   print STDERR &quot;Table created successfully\\n&quot;;
}
 
# 插入三行到表中
$stmt = qq(INSERT INTO NETWORK (HOSTNAME,IPADDRESS,OS,CPULOAD)
           VALUES (&#39;xmodulo&#39;, 16843009, &#39;Ubuntu 14.10&#39;, 0.0));
$ret = $dbh-&gt;do($stmt) or die $DBI::errstr;
 
$stmt = qq(INSERT INTO NETWORK (HOSTNAME,IPADDRESS,OS,CPULOAD)
           VALUES (&#39;bert&#39;, 16843010, &#39;CentOS 7&#39;, 0.0));
$ret = $dbh-&gt;do($stmt) or die $DBI::errstr;
 
$stmt = qq(INSERT INTO NETWORK (HOSTNAME,IPADDRESS,OS,CPULOAD)
           VALUES (&#39;puppy&#39;, 16843011, &#39;Ubuntu 14.10&#39;, 0.0));
$ret = $dbh-&gt;do($stmt) or die $DBI::errstr;
 
# 在表中检索行
$stmt = qq(SELECT id, hostname, os, cpuload from NETWORK;);
my $obj = $dbh-&gt;prepare($stmt);
$ret = $obj-&gt;execute() or die $DBI::errstr;
 
if($ret &lt; 0) {
   print STDERR $DBI::errstr;
}
while(my @row = $obj-&gt;fetchrow_array()) {
      print &quot;ID: &quot;. $row[0] . &quot;\\n&quot;;
      print &quot;HOSTNAME: &quot;. $row[1] .&quot;\\n&quot;;
      print &quot;OS: &quot;. $row[2] .&quot;\\n&quot;;
      print &quot;CPULOAD: &quot;. $row[3] .&quot;\\n\\n&quot;;
}
 
# 更新表中的某行
$stmt = qq(UPDATE NETWORK set CPULOAD = 50 where OS=&#39;Ubuntu 14.10&#39;;);
$ret = $dbh-&gt;do($stmt) or die $DBI::errstr;
 
if( $ret &lt; 0 ) {
   print STDERR $DBI::errstr;
} else {
   print STDERR &quot;A total of $ret rows updated\\n&quot;;
}
 
# 从表中删除某行
$stmt = qq(DELETE from NETWORK where ID=2;);
$ret = $dbh-&gt;do($stmt) or die $DBI::errstr;
 
if($ret &lt; 0) {
   print STDERR $DBI::errstr;
} else {
   print STDERR &quot;A total of $ret rows deleted\\n&quot;;
}
 
# 断开数据库连接
$dbh-&gt;disconnect();
print STDERR &quot;Exit the database\\n&quot;;
</code></pre><p>上面的Perl脚本运行成功后会创建一个叫“xmodulo.db”的数据库文件，并会有下面的输出。</p><pre><code>Database opened successfully
Table created successfully
ID: 1
HOSTNAME: xmodulo
OS: Ubuntu 14.10
CPULOAD: 0

ID: 2
HOSTNAME: bert
OS: CentOS 7
CPULOAD: 0

ID: 3
HOSTNAME: puppy
OS: Ubuntu 14.10
CPULOAD: 0

A total of 2 rows updated
A total of 1 rows deleted
Exit the database
</code></pre><h3 id="错误定位" tabindex="-1">错误定位 <a class="header-anchor" href="#错误定位" aria-label="Permalink to “错误定位”">​</a></h3><p>如果你尝试没有安装SQLite DBI驱动的情况下使用Perl访问SQLite的话，你会遇到下面的错误。你必须按开始说的安装DBI驱动。</p><pre><code>Can&#39;t locate DBI.pm in @INC (@INC contains: /usr/local/lib64/perl5 /usr/local/share/perl5 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5 .) at ./script.pl line 3.
BEGIN failed--compilation aborted at ./script.pl line 3.
</code></pre><hr>`,23)),l("p",null,[t[1]||(t[1]=e("via: ",-1)),r(n,{href:"http://xmodulo.com/access-sqlite-database-perl.html"},{default:o(()=>[...t[0]||(t[0]=[e("http://xmodulo.com/access-sqlite-database-perl.html",-1)])]),_:1})]),l("p",null,[t[5]||(t[5]=e("作者：",-1)),r(n,{href:"http://xmodulo.com/author/nanni"},{default:o(()=>[...t[2]||(t[2]=[e("Dan Nanni",-1)])]),_:1}),t[6]||(t[6]=e(" 译者：",-1)),r(n,{href:"https://github.com/geekpi"},{default:o(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校对：",-1)),r(n,{href:"https://github.com/wxy"},{default:o(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),l("p",null,[t[10]||(t[10]=e("本文由 ",-1)),r(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原创翻译，",-1)),r(n,{href:"https://linux.cn/"},{default:o(()=>[...t[9]||(t[9]=[e("Linux中国",-1)])]),_:1}),t[12]||(t[12]=e(" 荣誉推出",-1))])])}const I=i(u,[["render",S]]);export{E as __pageData,I as default};
