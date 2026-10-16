import{_ as i,a0 as t,w as o,s as d,I as n,x as a,a1 as e,A as l,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"在 Linux 中使用 shell 腳本自動創建/移除並掛載交換文件 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中使用 shell 腳本自動創建/移除並掛載交換文件 | LCTT (201706) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中使用 shell 腳本自動創建/移除並掛載交換文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中使用 shell 腳本自動創建/移除並掛載交換文件 | LCTT (201706) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201706/20170614 Automatically Create Remove And Mount Swap File In Linux Using Shell Script","title":"在 Linux 中使用 shell 腳本自動創建/移除並掛載交換文件","tag":"201706","desc":""},"relativePath":"201706/20170614 Automatically Create Remove And Mount Swap File In Linux Using Shell Script.md","filePath":"[post].md"}'),h={name:"201706/20170614 Automatically Create Remove And Mount Swap File In Linux Using Shell Script.md"};function c(u,s,f,g,k,w){const p=t("Link");return o(),d("div",null,[s[24]||(s[24]=n("h1",{id:"在-linux-中使用-shell-腳本自動創建-移除並掛載交換文件",tabindex:"-1"},[a("在 Linux 中使用 shell 腳本自動創建/移除並掛載交換文件 "),n("a",{class:"header-anchor",href:"#在-linux-中使用-shell-腳本自動創建-移除並掛載交換文件","aria-label":"Permalink to “在 Linux 中使用 shell 腳本自動創建/移除並掛載交換文件”"},"​")],-1)),s[25]||(s[25]=n("p",null,"幾天前我們寫了一篇關於在 Linux 中 3 種創建交換文件的方法，它們是常見的方法，但是需要人工操作。",-1)),n("p",null,[s[1]||(s[1]=a("今天我發現了一個 ",-1)),e(p,{href:"https://programmaticponderings.com/2013/12/19/scripting-linux-swap-space/"},{default:l(()=>[...s[0]||(s[0]=[a("Gary Stafford",-1)])]),_:1}),s[2]||(s[2]=a(" 寫的 shell 小腳本（兩個 shell 腳本，一個用於創建交換文件，另外一個用於移除交換文件），它可以幫助我們在 Linux 中創建/移除並且自動掛載交換文件。",-1))]),s[26]||(s[26]=n("p",null,"默認這個腳本創建並掛載 512MB 的交換文件。如果你想要更多的交換空間和不同的文件名，你需要相應地修改腳本。修改腳本不是一件困難的事，因為這是一個容易上手而且很小的腳本。",-1)),n("p",null,[s[4]||(s[4]=n("strong",null,"推薦閲讀：",-1)),s[5]||(s[5]=a()),e(p,{href:"http://www.2daygeek.com/add-extend-increase-swap-space-memory-file-partition-linux/"},{default:l(()=>[...s[3]||(s[3]=[a("Linux 中 3 種簡易創建或擴展交換空間的方法",-1)])]),_:1})]),s[27]||(s[27]=n("h3",{id:"如何檢查當前交換文件大小",tabindex:"-1"},[a("如何檢查當前交換文件大小 "),n("a",{class:"header-anchor",href:"#如何檢查當前交換文件大小","aria-label":"Permalink to “如何檢查當前交換文件大小”"},"​")],-1)),n("p",null,[s[7]||(s[7]=a("使用 ",-1)),e(p,{href:"http://www.2daygeek.com/free-command-to-check-memory-usage-statistics-in-linux/"},{default:l(()=>[...s[6]||(s[6]=[a("free",-1)])]),_:1}),s[8]||(s[8]=a(" 和 ",-1)),s[9]||(s[9]=n("code",null,"swapon",-1)),s[10]||(s[10]=a(" 命令檢查已經存在交換空間。",-1))]),s[28]||(s[28]=r(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ free -h</span></span>
<span class="line"><span>              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span>Mem:           2.0G        1.3G        139M         45M        483M        426M</span></span>
<span class="line"><span>Swap:          2.0G        655M        1.4G</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ swapon --show</span></span>
<span class="line"><span>NAME      TYPE      SIZE   USED PRIO</span></span>
<span class="line"><span>/dev/sda5 partition   2G 655.2M   -1</span></span></code></pre></div><p>上面的輸出顯示我當前的交換空間是 <code>2GB</code>。</p><h3 id="創建交換文件" tabindex="-1">創建交換文件 <a class="header-anchor" href="#創建交換文件" aria-label="Permalink to “創建交換文件”">​</a></h3><p>創建 <code>create_swap.sh</code> 文件並添加下面的內容來自動化交換空間的創建和掛載。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nano create_swap.sh</span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># size of swapfile in megabytes</span></span>
<span class="line"><span>swapsize=1024</span></span>
<span class="line"><span></span></span>
<span class="line"><span># does the swap file already exist?</span></span>
<span class="line"><span>grep -q &quot;swapfile&quot; /etc/fstab</span></span>
<span class="line"><span></span></span>
<span class="line"><span># if not then create it</span></span>
<span class="line"><span>if [ $? -ne 0 ]; then</span></span>
<span class="line"><span>	echo &#39;swapfile not found. Adding swapfile.&#39;</span></span>
<span class="line"><span>	fallocate -l \${swapsize}M /swapfile</span></span>
<span class="line"><span>	chmod 600 /swapfile</span></span>
<span class="line"><span>	mkswap /swapfile</span></span>
<span class="line"><span>	swapon /swapfile</span></span>
<span class="line"><span>	echo &#39;/swapfile none swap defaults 0 0&#39; &gt;&gt; /etc/fstab</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>	echo &#39;swapfile found. No changes made.&#39;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &#39;--------------------------------------------&#39;</span></span>
<span class="line"><span>echo &#39;Check whether the swap space created or not?&#39;</span></span>
<span class="line"><span>echo &#39;--------------------------------------------&#39;</span></span>
<span class="line"><span>swapon --show</span></span></code></pre></div><p>給文件添加執行權限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo +x create_swap.sh</span></span></code></pre></div><p>運行文件來創建和掛載交換文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ./create_swap.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>swapfile not found. Adding swapfile.</span></span>
<span class="line"><span>Setting up swapspace version 1, size = 1024 MiB (1073737728 bytes)</span></span>
<span class="line"><span>no label, UUID=d9004261-396a-4321-a45f-9923e3e1328c</span></span>
<span class="line"><span>--------------------------------------------</span></span>
<span class="line"><span>Check whether the swap space created or not?</span></span>
<span class="line"><span>--------------------------------------------</span></span>
<span class="line"><span>NAME      TYPE       SIZE   USED PRIO</span></span>
<span class="line"><span>/dev/sda5 partition    2G 954.1M   -1</span></span>
<span class="line"><span>/swapfile file      1024M     0B   -2</span></span></code></pre></div><p>你可以看到新的 1024M 的 <code>swapfile</code>。重啓系統以使用新的交換文件。</p><h3 id="移除交換文件" tabindex="-1">移除交換文件 <a class="header-anchor" href="#移除交換文件" aria-label="Permalink to “移除交換文件”">​</a></h3><p>如果不再需要交換文件，接着創建 <code>remove_swap.sh</code> 文件並添加下面的內容來移除交換文件以及它的 <code>/etc/fstab</code> 掛載點。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nano remove_swap.sh</span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># does the swap file exist?</span></span>
<span class="line"><span>grep -q &quot;swapfile&quot; /etc/fstab</span></span>
<span class="line"><span></span></span>
<span class="line"><span># if it does then remove it</span></span>
<span class="line"><span>if [ $? -eq 0 ]; then</span></span>
<span class="line"><span>	echo &#39;swapfile found. Removing swapfile.&#39;</span></span>
<span class="line"><span>	sed -i &#39;/swapfile/d&#39; /etc/fstab</span></span>
<span class="line"><span>	echo &quot;3&quot; &gt; /proc/sys/vm/drop_caches</span></span>
<span class="line"><span>	swapoff -a</span></span>
<span class="line"><span>	rm -f /swapfile</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>	echo &#39;No swapfile found. No changes made.&#39;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &#39;--------------------------------------------&#39;</span></span>
<span class="line"><span>echo &#39;Check whether the swap space removed or not?&#39;</span></span>
<span class="line"><span>echo &#39;--------------------------------------------&#39;</span></span>
<span class="line"><span>swapon --show</span></span></code></pre></div><p>並給文件添加可執行權限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo +x remove_swap.sh</span></span></code></pre></div><p>運行腳本來移除並卸載交換文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ./remove_swap.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>swapfile found. Removing swapfile.</span></span>
<span class="line"><span>swapoff: /dev/sda5: swapoff failed: Cannot allocate memory</span></span>
<span class="line"><span>--------------------------------------------</span></span>
<span class="line"><span>Check whether the swap space removed or not?</span></span>
<span class="line"><span>--------------------------------------------</span></span>
<span class="line"><span>NAME      TYPE      SIZE   USED PRIO</span></span>
<span class="line"><span>/dev/sda5 partition   2G 951.8M   -1</span></span></code></pre></div><hr>`,18)),n("p",null,[s[12]||(s[12]=a("via: ",-1)),e(p,{href:"http://www.2daygeek.com/shell-script-create-add-extend-swap-space-linux/"},{default:l(()=>[...s[11]||(s[11]=[a("http://www.2daygeek.com/shell-script-create-add-extend-swap-space-linux/",-1)])]),_:1})]),n("p",null,[s[16]||(s[16]=a("作者：",-1)),e(p,{href:"http://www.2daygeek.com/author/2daygeek/"},{default:l(()=>[...s[13]||(s[13]=[a("2DAYGEEK",-1)])]),_:1}),s[17]||(s[17]=a(" 譯者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:l(()=>[...s[14]||(s[14]=[a("geekpi",-1)])]),_:1}),s[18]||(s[18]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[15]||(s[15]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[21]||(s[21]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[19]||(s[19]=[a("LCTT",-1)])]),_:1}),s[22]||(s[22]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[20]||(s[20]=[a("Linux中國",-1)])]),_:1}),s[23]||(s[23]=a(" 榮譽推出",-1))])])}const y=i(h,[["render",c]]);export{x as __pageData,y as default};
