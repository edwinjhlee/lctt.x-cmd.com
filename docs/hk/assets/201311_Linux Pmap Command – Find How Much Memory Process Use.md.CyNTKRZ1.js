import{_ as s,a0 as e,w as t,s as p,I as n,x as r,a1 as o,A as a,ao as b}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"Linux Pmap 命令 - 查看進程用了多少內存 | LCTT x X-CMD","titleTemplate":false,"description":"Linux Pmap 命令 - 查看進程用了多少內存 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux Pmap 命令 - 查看進程用了多少內存 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux Pmap 命令 - 查看進程用了多少內存 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Linux Pmap Command – Find How Much Memory Process Use","title":"Linux Pmap 命令 - 查看進程用了多少內存","tag":"201311","desc":""},"relativePath":"201311/Linux Pmap Command – Find How Much Memory Process Use.md","filePath":"[post].md"}'),d={name:"201311/Linux Pmap Command – Find How Much Memory Process Use.md"};function m(u,i,x,f,h,w){const l=e("Link");return t(),p("div",null,[i[14]||(i[14]=n("h1",{id:"linux-pmap-命令-查看進程用了多少內存",tabindex:"-1"},[r("Linux Pmap 命令 - 查看進程用了多少內存 "),n("a",{class:"header-anchor",href:"#linux-pmap-命令-查看進程用了多少內存","aria-label":"Permalink to “Linux Pmap 命令 - 查看進程用了多少內存”"},"​")],-1)),n("p",null,[i[1]||(i[1]=r("Pmap 提供了進程的內存映射，pmap命令用於顯示一個或多個進程的內存狀態。其報告進程的地址空間和內存狀態信息。Pmap實際上是一個Sun OS上的命令，linux僅支持其有限的功能。但是它還是對查看完整的進程地址空間很有幫助。我們需要PID或者運行的進程的唯一進程ID來查看",-1)),o(l,{href:"http://www.linoxide.com/linux-shell-script/linux-memory-usage-program/"},{default:a(()=>[...i[0]||(i[0]=[r("進程內存狀態",-1)])]),_:1}),i[2]||(i[2]=r("，我們可以通過/proc或者常規命令比如top或ps得到它。",-1))]),i[15]||(i[15]=b(`<h3 id="語法或用法" tabindex="-1">語法或用法 <a class="header-anchor" href="#語法或用法" aria-label="Permalink to “語法或用法”">​</a></h3><pre><code>#pmap PID
</code></pre><p>或者</p><pre><code>#pmap [options] PID
</code></pre><p>在輸出中它顯示全部的地址,kbytes,mode還有mapping。</p><h3 id="選項" tabindex="-1">選項 <a class="header-anchor" href="#選項" aria-label="Permalink to “選項”">​</a></h3><ul><li>-x extended顯示擴展格式</li><li>-d device顯示設備格式</li><li>-q quiet不顯示header/footer行</li><li>-V 顯示版本信息</li></ul><h3 id="單一進程內存狀態" tabindex="-1">單一進程內存狀態 <a class="header-anchor" href="#單一進程內存狀態" aria-label="Permalink to “單一進程內存狀態”">​</a></h3><pre><code>[root@info ~]# pmap 1013


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
</code></pre><h3 id="多進程內存狀態" tabindex="-1">多進程內存狀態 <a class="header-anchor" href="#多進程內存狀態" aria-label="Permalink to “多進程內存狀態”">​</a></h3><p>我們可以檢查多進程內存通過插入多個PID。加入多個PID中間使用空格分隔。</p><pre><code>pmap 1013 1217 1118
</code></pre><h3 id="擴展進程內存" tabindex="-1">擴展進程內存 <a class="header-anchor" href="#擴展進程內存" aria-label="Permalink to “擴展進程內存”">​</a></h3><pre><code>[root@info ~]# pmap -x 1013
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
</code></pre><p>這裏的Address，Kbyte，Dirty，RSS，mode還有mapping的説明如下</p><h3 id="擴展和設備格式區域" tabindex="-1">擴展和設備格式區域 <a class="header-anchor" href="#擴展和設備格式區域" aria-label="Permalink to “擴展和設備格式區域”">​</a></h3><ul><li>Address: 內存開始地址</li><li>Kbytes: 佔用內存的字節數（KB）</li><li>RSS: 保留內存的字節數（KB）</li><li>Dirty: 髒頁的字節數（包括共享和私有的）（KB）</li><li>Mode: 內存的權限：read、write、execute、shared、private (寫時複製)</li><li>Mapping: 佔用內存的文件、或[anon]（分配的內存）、或[stack]（堆棧）</li><li>Offset: 文件偏移</li><li>Device: 設備名 (major:minor)</li></ul><hr>`,18)),n("p",null,[i[4]||(i[4]=r("via: ",-1)),o(l,{href:"http://linoxide.com/linux-command/pmap-command/"},{default:a(()=>[...i[3]||(i[3]=[r("http://linoxide.com/linux-command/pmap-command/",-1)])]),_:1})]),n("p",null,[i[7]||(i[7]=r("譯者：",-1)),o(l,{href:"https://github.com/flsf"},{default:a(()=>[...i[5]||(i[5]=[r("flsf",-1)])]),_:1}),i[8]||(i[8]=r(" 校對：",-1)),o(l,{href:"https://github.com/wxy"},{default:a(()=>[...i[6]||(i[6]=[r("wxy",-1)])]),_:1})]),n("p",null,[i[11]||(i[11]=r("本文由 ",-1)),o(l,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...i[9]||(i[9]=[r("LCTT",-1)])]),_:1}),i[12]||(i[12]=r(" 原創翻譯，",-1)),o(l,{href:"http://linux.cn/"},{default:a(()=>[...i[10]||(i[10]=[r("Linux中國",-1)])]),_:1}),i[13]||(i[13]=r(" 榮譽推出",-1))])])}const k=s(d,[["render",m]]);export{P as __pageData,k as default};
