import{_ as i,a0 as t,w as o,s as d,I as n,x as a,a1 as e,A as l,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"在 Linux 中使用 shell 脚本自动创建/移除并挂载交换文件 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中使用 shell 脚本自动创建/移除并挂载交换文件 | LCTT (201706) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中使用 shell 脚本自动创建/移除并挂载交换文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中使用 shell 脚本自动创建/移除并挂载交换文件 | LCTT (201706) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201706/20170614 Automatically Create Remove And Mount Swap File In Linux Using Shell Script","title":"在 Linux 中使用 shell 脚本自动创建/移除并挂载交换文件","tag":"201706","desc":""},"relativePath":"201706/20170614 Automatically Create Remove And Mount Swap File In Linux Using Shell Script.md","filePath":"[post].md"}'),h={name:"201706/20170614 Automatically Create Remove And Mount Swap File In Linux Using Shell Script.md"};function c(u,s,f,g,k,w){const p=t("Link");return o(),d("div",null,[s[24]||(s[24]=n("h1",{id:"在-linux-中使用-shell-脚本自动创建-移除并挂载交换文件",tabindex:"-1"},[a("在 Linux 中使用 shell 脚本自动创建/移除并挂载交换文件 "),n("a",{class:"header-anchor",href:"#在-linux-中使用-shell-脚本自动创建-移除并挂载交换文件","aria-label":"Permalink to “在 Linux 中使用 shell 脚本自动创建/移除并挂载交换文件”"},"​")],-1)),s[25]||(s[25]=n("p",null,"几天前我们写了一篇关于在 Linux 中 3 种创建交换文件的方法，它们是常见的方法，但是需要人工操作。",-1)),n("p",null,[s[1]||(s[1]=a("今天我发现了一个 ",-1)),e(p,{href:"https://programmaticponderings.com/2013/12/19/scripting-linux-swap-space/"},{default:l(()=>[...s[0]||(s[0]=[a("Gary Stafford",-1)])]),_:1}),s[2]||(s[2]=a(" 写的 shell 小脚本（两个 shell 脚本，一个用于创建交换文件，另外一个用于移除交换文件），它可以帮助我们在 Linux 中创建/移除并且自动挂载交换文件。",-1))]),s[26]||(s[26]=n("p",null,"默认这个脚本创建并挂载 512MB 的交换文件。如果你想要更多的交换空间和不同的文件名，你需要相应地修改脚本。修改脚本不是一件困难的事，因为这是一个容易上手而且很小的脚本。",-1)),n("p",null,[s[4]||(s[4]=n("strong",null,"推荐阅读：",-1)),s[5]||(s[5]=a()),e(p,{href:"http://www.2daygeek.com/add-extend-increase-swap-space-memory-file-partition-linux/"},{default:l(()=>[...s[3]||(s[3]=[a("Linux 中 3 种简易创建或扩展交换空间的方法",-1)])]),_:1})]),s[27]||(s[27]=n("h3",{id:"如何检查当前交换文件大小",tabindex:"-1"},[a("如何检查当前交换文件大小 "),n("a",{class:"header-anchor",href:"#如何检查当前交换文件大小","aria-label":"Permalink to “如何检查当前交换文件大小”"},"​")],-1)),n("p",null,[s[7]||(s[7]=a("使用 ",-1)),e(p,{href:"http://www.2daygeek.com/free-command-to-check-memory-usage-statistics-in-linux/"},{default:l(()=>[...s[6]||(s[6]=[a("free",-1)])]),_:1}),s[8]||(s[8]=a(" 和 ",-1)),s[9]||(s[9]=n("code",null,"swapon",-1)),s[10]||(s[10]=a(" 命令检查已经存在交换空间。",-1))]),s[28]||(s[28]=r(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ free -h</span></span>
<span class="line"><span>              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span>Mem:           2.0G        1.3G        139M         45M        483M        426M</span></span>
<span class="line"><span>Swap:          2.0G        655M        1.4G</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ swapon --show</span></span>
<span class="line"><span>NAME      TYPE      SIZE   USED PRIO</span></span>
<span class="line"><span>/dev/sda5 partition   2G 655.2M   -1</span></span></code></pre></div><p>上面的输出显示我当前的交换空间是 <code>2GB</code>。</p><h3 id="创建交换文件" tabindex="-1">创建交换文件 <a class="header-anchor" href="#创建交换文件" aria-label="Permalink to “创建交换文件”">​</a></h3><p>创建 <code>create_swap.sh</code> 文件并添加下面的内容来自动化交换空间的创建和挂载。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nano create_swap.sh</span></span>
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
<span class="line"><span>swapon --show</span></span></code></pre></div><p>给文件添加执行权限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo +x create_swap.sh</span></span></code></pre></div><p>运行文件来创建和挂载交换文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ./create_swap.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>swapfile not found. Adding swapfile.</span></span>
<span class="line"><span>Setting up swapspace version 1, size = 1024 MiB (1073737728 bytes)</span></span>
<span class="line"><span>no label, UUID=d9004261-396a-4321-a45f-9923e3e1328c</span></span>
<span class="line"><span>--------------------------------------------</span></span>
<span class="line"><span>Check whether the swap space created or not?</span></span>
<span class="line"><span>--------------------------------------------</span></span>
<span class="line"><span>NAME      TYPE       SIZE   USED PRIO</span></span>
<span class="line"><span>/dev/sda5 partition    2G 954.1M   -1</span></span>
<span class="line"><span>/swapfile file      1024M     0B   -2</span></span></code></pre></div><p>你可以看到新的 1024M 的 <code>swapfile</code>。重启系统以使用新的交换文件。</p><h3 id="移除交换文件" tabindex="-1">移除交换文件 <a class="header-anchor" href="#移除交换文件" aria-label="Permalink to “移除交换文件”">​</a></h3><p>如果不再需要交换文件，接着创建 <code>remove_swap.sh</code> 文件并添加下面的内容来移除交换文件以及它的 <code>/etc/fstab</code> 挂载点。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nano remove_swap.sh</span></span>
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
<span class="line"><span>swapon --show</span></span></code></pre></div><p>并给文件添加可执行权限。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo +x remove_swap.sh</span></span></code></pre></div><p>运行脚本来移除并卸载交换文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ./remove_swap.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>swapfile found. Removing swapfile.</span></span>
<span class="line"><span>swapoff: /dev/sda5: swapoff failed: Cannot allocate memory</span></span>
<span class="line"><span>--------------------------------------------</span></span>
<span class="line"><span>Check whether the swap space removed or not?</span></span>
<span class="line"><span>--------------------------------------------</span></span>
<span class="line"><span>NAME      TYPE      SIZE   USED PRIO</span></span>
<span class="line"><span>/dev/sda5 partition   2G 951.8M   -1</span></span></code></pre></div><hr>`,18)),n("p",null,[s[12]||(s[12]=a("via: ",-1)),e(p,{href:"http://www.2daygeek.com/shell-script-create-add-extend-swap-space-linux/"},{default:l(()=>[...s[11]||(s[11]=[a("http://www.2daygeek.com/shell-script-create-add-extend-swap-space-linux/",-1)])]),_:1})]),n("p",null,[s[16]||(s[16]=a("作者：",-1)),e(p,{href:"http://www.2daygeek.com/author/2daygeek/"},{default:l(()=>[...s[13]||(s[13]=[a("2DAYGEEK",-1)])]),_:1}),s[17]||(s[17]=a(" 译者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:l(()=>[...s[14]||(s[14]=[a("geekpi",-1)])]),_:1}),s[18]||(s[18]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[15]||(s[15]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[21]||(s[21]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[19]||(s[19]=[a("LCTT",-1)])]),_:1}),s[22]||(s[22]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[20]||(s[20]=[a("Linux中国",-1)])]),_:1}),s[23]||(s[23]=a(" 荣誉推出",-1))])])}const y=i(h,[["render",c]]);export{x as __pageData,y as default};
