import{_ as s,a0 as e,w as t,s as p,I as n,x as r,a1 as o,A as a,ao as b}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"Linux Pmap 命令 - 查看进程用了多少内存 | LCTT x X-CMD","titleTemplate":false,"description":"Linux Pmap 命令 - 查看进程用了多少内存 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux Pmap 命令 - 查看进程用了多少内存 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux Pmap 命令 - 查看进程用了多少内存 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Linux Pmap Command – Find How Much Memory Process Use","title":"Linux Pmap 命令 - 查看进程用了多少内存","tag":"201311","desc":""},"relativePath":"201311/Linux Pmap Command – Find How Much Memory Process Use.md","filePath":"[post].md"}'),d={name:"201311/Linux Pmap Command – Find How Much Memory Process Use.md"};function m(u,i,x,f,h,w){const l=e("Link");return t(),p("div",null,[i[14]||(i[14]=n("h1",{id:"linux-pmap-命令-查看进程用了多少内存",tabindex:"-1"},[r("Linux Pmap 命令 - 查看进程用了多少内存 "),n("a",{class:"header-anchor",href:"#linux-pmap-命令-查看进程用了多少内存","aria-label":"Permalink to “Linux Pmap 命令 - 查看进程用了多少内存”"},"​")],-1)),n("p",null,[i[1]||(i[1]=r("Pmap 提供了进程的内存映射，pmap命令用于显示一个或多个进程的内存状态。其报告进程的地址空间和内存状态信息。Pmap实际上是一个Sun OS上的命令，linux仅支持其有限的功能。但是它还是对查看完整的进程地址空间很有帮助。我们需要PID或者运行的进程的唯一进程ID来查看",-1)),o(l,{href:"http://www.linoxide.com/linux-shell-script/linux-memory-usage-program/"},{default:a(()=>[...i[0]||(i[0]=[r("进程内存状态",-1)])]),_:1}),i[2]||(i[2]=r("，我们可以通过/proc或者常规命令比如top或ps得到它。",-1))]),i[15]||(i[15]=b(`<h3 id="语法或用法" tabindex="-1">语法或用法 <a class="header-anchor" href="#语法或用法" aria-label="Permalink to “语法或用法”">​</a></h3><pre><code>#pmap PID
</code></pre><p>或者</p><pre><code>#pmap [options] PID
</code></pre><p>在输出中它显示全部的地址,kbytes,mode还有mapping。</p><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to “选项”">​</a></h3><ul><li>-x extended显示扩展格式</li><li>-d device显示设备格式</li><li>-q quiet不显示header/footer行</li><li>-V 显示版本信息</li></ul><h3 id="单一进程内存状态" tabindex="-1">单一进程内存状态 <a class="header-anchor" href="#单一进程内存状态" aria-label="Permalink to “单一进程内存状态”">​</a></h3><pre><code>[root@info ~]# pmap 1013


1013: /usr/sbin/sshd
00110000 1480K r-x- /usr/lib/libcrypto.so.1.0.0
00282000 80K rw-- /usr/lib/libcrypto.so.1.0.0
00296000 12K rw-- [ anon ]
00299000 36K r-x- /lib/libkrb5support.so.0.1
002a2000 4K rw-- /lib/libkrb5support.so.0.1
002a3000 16K r-x- /lib/libplc4.so
002a7000 4K rw-- /lib/libplc4.so
002ab000 88K r-x- /lib/libaudit.so.1.0.0
002c1000 4K r-- /lib/libaudit.so.1.0.0
002c2000 4K rw-- /lib/libaudit.so.1.0.0
002c3000 216K r-x- /lib/libgssapi_krb5.so.2.2
002f9000 4K rw-- /lib/libgssapi_krb5.so.2.2
002fa000 808K r-x- /lib/libkrb5.so.3.3
003c4000 24K rw-- /lib/libkrb5.so.3.3
003ca000 152K r-x- /lib/libk5crypto.so.3.1
003f0000 4K rw-- /lib/libk5crypto.so.3.1
003f1000 92K r-x- /usr/lib/libnssutil3.so
00738000 4K r--- /lib/libresolv-2.12.so
00739000 4K rw-- /lib/libresolv-2.12.so
0073a000 8K rw-- [ anon ]
00825000 120K r-x- /lib/ld-2.12.so
00843000 4K r--- /lib/ld-2.12.so
00844000 4K rw-- /lib/ld-2.12.so
0090d000 32K r-x- /lib/libwrap.so.0.7.6
00915000 4K rw-- /lib/libwrap.so.0.7.6
00948000 484K r-x- /usr/sbin/sshd
009c1000 8K rw-- /usr/sbin/sshd
009c3000 20K rw-- [ anon ]
009e0000 92K r-x- /lib/libpthread-2.12.so
009f7000 4K r--- /lib/libpthread-2.12.so

total 8232K
</code></pre><h3 id="多进程内存状态" tabindex="-1">多进程内存状态 <a class="header-anchor" href="#多进程内存状态" aria-label="Permalink to “多进程内存状态”">​</a></h3><p>我们可以检查多进程内存通过插入多个PID。加入多个PID中间使用空格分隔。</p><pre><code>pmap 1013 1217 1118
</code></pre><h3 id="扩展进程内存" tabindex="-1">扩展进程内存 <a class="header-anchor" href="#扩展进程内存" aria-label="Permalink to “扩展进程内存”">​</a></h3><pre><code>[root@info ~]# pmap -x 1013
1013: /usr/sbin/sshd
Address Kbytes RSS Dirty Mode Mapping
00110000 1480 92 0 r-x- libcrypto.so.1.0.0
00282000 80 80 80 rw-- libcrypto.so.1.0.0
00296000 12 8 4 rw-- [ anon ]
00299000 36 0 0 r-x- libkrb5support.so.0.1
002a2000 4 4 4 rw-- libkrb5support.so.0.1
002a3000 16 0 0 r-x- libplc4.so
002a7000 4 4 4 rw-- libplc4.so
002ab000 88 4 0 r-x- libaudit.so.1.0.0
002c1000 4 4 4 r--- libaudit.so.1.0.0
002c2000 4 4 4 rw-- libaudit.so.1.0.0
002c3000 216 4 0 r-x- libgssapi_krb5.so.2.2
002f9000 4 4 4 rw-- libgssapi_krb5.so.2.2
002fa000 808 4 0 r-x- libkrb5.so.3.3
003c4000 24 24 24 rw-- libkrb5.so.3.3
003ca000 152 4 0 r-x- libk5crypto.so.3.1
003f0000 4 4 4 rw-- libk5crypto.so.3.1
003f1000 92 0 0 r-x- libnssutil3.so
00408000 12 12 12 rw-- libnssutil3.so
0040b000 12 0 0 r-x- libplds4.so
0040e000 4 4 4 rw-- libplds4.so

--- --- --- --- ---
total kB 8232 - - -
</code></pre><p>这里的Address，Kbyte，Dirty，RSS，mode还有mapping的说明如下</p><h3 id="扩展和设备格式区域" tabindex="-1">扩展和设备格式区域 <a class="header-anchor" href="#扩展和设备格式区域" aria-label="Permalink to “扩展和设备格式区域”">​</a></h3><ul><li>Address: 内存开始地址</li><li>Kbytes: 占用内存的字节数（KB）</li><li>RSS: 保留内存的字节数（KB）</li><li>Dirty: 脏页的字节数（包括共享和私有的）（KB）</li><li>Mode: 内存的权限：read、write、execute、shared、private (写时复制)</li><li>Mapping: 占用内存的文件、或[anon]（分配的内存）、或[stack]（堆栈）</li><li>Offset: 文件偏移</li><li>Device: 设备名 (major:minor)</li></ul><hr>`,18)),n("p",null,[i[4]||(i[4]=r("via: ",-1)),o(l,{href:"http://linoxide.com/linux-command/pmap-command/"},{default:a(()=>[...i[3]||(i[3]=[r("http://linoxide.com/linux-command/pmap-command/",-1)])]),_:1})]),n("p",null,[i[7]||(i[7]=r("译者：",-1)),o(l,{href:"https://github.com/flsf"},{default:a(()=>[...i[5]||(i[5]=[r("flsf",-1)])]),_:1}),i[8]||(i[8]=r(" 校对：",-1)),o(l,{href:"https://github.com/wxy"},{default:a(()=>[...i[6]||(i[6]=[r("wxy",-1)])]),_:1})]),n("p",null,[i[11]||(i[11]=r("本文由 ",-1)),o(l,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...i[9]||(i[9]=[r("LCTT",-1)])]),_:1}),i[12]||(i[12]=r(" 原创翻译，",-1)),o(l,{href:"http://linux.cn/"},{default:a(()=>[...i[10]||(i[10]=[r("Linux中国",-1)])]),_:1}),i[13]||(i[13]=r(" 荣誉推出",-1))])])}const k=s(d,[["render",m]]);export{P as __pageData,k as default};
