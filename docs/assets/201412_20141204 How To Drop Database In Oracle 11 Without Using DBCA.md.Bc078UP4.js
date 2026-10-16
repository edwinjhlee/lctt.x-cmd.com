import{_ as s,a0 as i,w as l,s as d,ao as p,I as o,x as a,a1 as n,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"如何不使用DBCA在Oracle 11中删除数据库 | LCTT x X-CMD","titleTemplate":false,"description":"如何不使用DBCA在Oracle 11中删除数据库 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何不使用DBCA在Oracle 11中删除数据库 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何不使用DBCA在Oracle 11中删除数据库 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141204 How To Drop Database In Oracle 11 Without Using DBCA","title":"如何不使用DBCA在Oracle 11中删除数据库","tag":"201412","desc":""},"relativePath":"201412/20141204 How To Drop Database In Oracle 11 Without Using DBCA.md","filePath":"[post].md"}'),b={name:"201412/20141204 How To Drop Database In Oracle 11 Without Using DBCA.md"};function u(c,e,h,m,D,f){const t=i("Link");return l(),d("div",null,[e[13]||(e[13]=p(`<h1 id="如何不使用dbca在oracle-11中删除数据库" tabindex="-1">如何不使用DBCA在Oracle 11中删除数据库 <a class="header-anchor" href="#如何不使用dbca在oracle-11中删除数据库" aria-label="Permalink to “如何不使用DBCA在Oracle 11中删除数据库”">​</a></h1><p>本文简短的教程，将会向你展示如何不使用DBCA（数据库配置助手）在Oracle 11中删除数据库。</p><h4 id="_1-导入数据库的sid-如果没有定义的话" tabindex="-1">1- 导入数据库的SID，如果没有定义的话 <a class="header-anchor" href="#_1-导入数据库的sid-如果没有定义的话" aria-label="Permalink to “1- 导入数据库的SID，如果没有定义的话”">​</a></h4><pre><code>export ORACLE_SID=database
</code></pre><h4 id="_2-以操作系统认证连接数据库" tabindex="-1">2- 以操作系统认证连接数据库 <a class="header-anchor" href="#_2-以操作系统认证连接数据库" aria-label="Permalink to “2- 以操作系统认证连接数据库”">​</a></h4><pre><code>[oracle@Oracle11 ~]$ sqlplus / as sysdba

SQL*Plus: Release 11.2.0.1.0 Production on Mon Dec 1 17:38:02 2014
Copyright (c) 1982, 2009, Oracle. All rights reserved.
Connected to an idle instance.
</code></pre><h4 id="_3-启动数据库实例" tabindex="-1">3- 启动数据库实例 <a class="header-anchor" href="#_3-启动数据库实例" aria-label="Permalink to “3- 启动数据库实例”">​</a></h4><pre><code>SQL&gt; startup

ORACLE instance started.
Total System Global Area 3340451840 bytes
Fixed Size 2217952 bytes
Variable Size 1828718624 bytes
Database Buffers 1493172224 bytes
Redo Buffers 16343040 bytes
Database mounted.
Database opened.
</code></pre><h4 id="_4-关闭数据库" tabindex="-1">4- 关闭数据库 <a class="header-anchor" href="#_4-关闭数据库" aria-label="Permalink to “4- 关闭数据库”">​</a></h4><pre><code>SQL&gt; shutdown immediate;

Database closed.
Database dismounted.
ORACLE instance shut down.
</code></pre><h4 id="_5-启动独占模式" tabindex="-1">5- 启动独占模式 <a class="header-anchor" href="#_5-启动独占模式" aria-label="Permalink to “5- 启动独占模式”">​</a></h4><pre><code>SQL&gt; startup mount exclusive restrict

ORACLE instance started.

Total System Global Area 3340451840 bytes
Fixed Size 2217952 bytes
Variable Size 1828718624 bytes
Database Buffers 1493172224 bytes
Redo Buffers 16343040 bytes
Database mounted.
</code></pre><h4 id="_6-删除数据库" tabindex="-1">6- 删除数据库 <a class="header-anchor" href="#_6-删除数据库" aria-label="Permalink to “6- 删除数据库”">​</a></h4><pre><code>SQL&gt; drop database;


Database dropped.


Disconnected from Oracle Database 11g Enterprise Edition Release 11.2.0.1.0 - 64bit Production
With the Partitioning, OLAP, Data Mining and Real Application Testing options
</code></pre><p>完成！</p><hr>`,16)),o("p",null,[e[1]||(e[1]=a("via: ",-1)),n(t,{href:"http://www.unixmen.com/drop-database-oracle-11-without-using-dcba/"},{default:r(()=>[...e[0]||(e[0]=[a("http://www.unixmen.com/drop-database-oracle-11-without-using-dcba/",-1)])]),_:1})]),o("p",null,[e[5]||(e[5]=a("作者：",-1)),n(t,{href:"http://www.unixmen.com/author/pirat9/"},{default:r(()=>[...e[2]||(e[2]=[a("M.el Khamlichi",-1)])]),_:1}),e[6]||(e[6]=a(" 译者：",-1)),n(t,{href:"http://vicyu.net/"},{default:r(()=>[...e[3]||(e[3]=[a("VicYu/Vic020",-1)])]),_:1}),e[7]||(e[7]=a(" 校对：",-1)),n(t,{href:"https://github.com/wxy"},{default:r(()=>[...e[4]||(e[4]=[a("wxy",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=a("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[8]||(e[8]=[a("LCTT",-1)])]),_:1}),e[11]||(e[11]=a(" 原创翻译，",-1)),n(t,{href:"http://linux.cn/"},{default:r(()=>[...e[9]||(e[9]=[a("Linux中国",-1)])]),_:1}),e[12]||(e[12]=a(" 荣誉推出",-1))])])}const _=s(b,[["render",u]]);export{x as __pageData,_ as default};
