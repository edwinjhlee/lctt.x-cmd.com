import{_ as i,a0 as s,w as p,s as m,ao as d,I as o,x as n,a1 as t,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"九个uname命令获取Linux系统详情的实例 | LCTT x X-CMD","titleTemplate":false,"description":"九个uname命令获取Linux系统详情的实例 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"九个uname命令获取Linux系统详情的实例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"九个uname命令获取Linux系统详情的实例 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/9 Linux Uname Command Examples To Get Operating System Details","title":"九个uname命令获取Linux系统详情的实例","tag":"201311","desc":""},"relativePath":"201311/9 Linux Uname Command Examples To Get Operating System Details.md","filePath":"[post].md"}'),l={name:"201311/9 Linux Uname Command Examples To Get Operating System Details.md"};function u(x,e,h,c,g,_){const a=s("Link");return p(),m("div",null,[e[11]||(e[11]=d(`<h1 id="九个uname命令获取linux系统详情的实例" tabindex="-1">九个uname命令获取Linux系统详情的实例 <a class="header-anchor" href="#九个uname命令获取linux系统详情的实例" aria-label="Permalink to “九个uname命令获取Linux系统详情的实例”">​</a></h1><p>当你在控制台模式下，无法通过“鼠标右键 &gt; 关于”获取操作系统的信息。这时，在Linux下，你可以使用<strong>uname</strong>命令，帮助你完成这些工作。 Uname是<strong>unix name</strong>的缩写。在控制台中实际使用的时候只需键入<strong>uname</strong>。</p><p>当你输入uname不带参数时，它仅仅显示你的操作系统的名字。</p><pre><code># uname

Linux
</code></pre><p>也许这还不能满足你的需要。所以你需要加上一些参数，来使uname显示你所需要的信息。</p><p>以下是uname参数的列表:</p><h3 id="_1-内核名称" tabindex="-1">1. 内核名称 <a class="header-anchor" href="#_1-内核名称" aria-label="Permalink to “1. 内核名称”">​</a></h3><p>你可以用<strong>-s</strong>参数，显示内核名称。（译注：可以在其他的类Unix系统上运行这个命令看看，比如mac就会显示Darwin）</p><pre><code># uname -s

Linux
</code></pre><p>输出信息会跟uname不带参数时输出的一样。</p><h3 id="_2-内核发行版" tabindex="-1">2. 内核发行版 <a class="header-anchor" href="#_2-内核发行版" aria-label="Permalink to “2. 内核发行版”">​</a></h3><p>如果你想知道你正在使用哪个内核发行版（指不同的内核打包版本），就可以用<strong>-r</strong>参数</p><pre><code># uname -r

2.6.18-371.1.2.el5
</code></pre><h3 id="_3-内核版本" tabindex="-1">3. 内核版本 <a class="header-anchor" href="#_3-内核版本" aria-label="Permalink to “3. 内核版本”">​</a></h3><p>除一些内核信息外，用<strong>-v</strong>参数uname也能获取更详细的内核版本信息（译注：不是版本号，是指该内核建立的时间和CPU架构等）。</p><pre><code># uname -v

#1 SMP Tue Oct 22 12:57:43 EDT 2013
</code></pre><h3 id="_4-节点名" tabindex="-1">4. 节点名 <a class="header-anchor" href="#_4-节点名" aria-label="Permalink to “4. 节点名”">​</a></h3><p>参数 -n 会提供给你节点的主机名。举例来说，如果你的主机名是“dev-machine”，<strong>-n</strong>参数就会把主机名打印出来。</p><pre><code># uname -n

dev-machine
</code></pre><p>对于RedHat和CentOS用户来说，你也可以通过<strong>/etc/redhat_release</strong>文件来查看：</p><pre><code># cat /etc/redhat_release

CentOS release 5.10 (Final)
</code></pre><p>如果不是基于RedHat的发行版，你可以查看<strong>/etc/issue</strong>文件.类似如下：</p><pre><code># cat /etc/issue

Linux Mint Olivia \\n \\l:
</code></pre><h3 id="_5-硬件名称" tabindex="-1">5.硬件名称 <a class="header-anchor" href="#_5-硬件名称" aria-label="Permalink to “5.硬件名称”">​</a></h3><p>如果你想知道用的是哪类机器，你可以尝试<strong>-m</strong>参数。它将告诉你关于硬件的信息。</p><pre><code># uname -m

i686
</code></pre><p>i686表明了你用的是32位的操作系统，如果是X86_64则表明你用的是64位的系统。</p><h3 id="_6-硬件平台" tabindex="-1">6. 硬件平台 <a class="header-anchor" href="#_6-硬件平台" aria-label="Permalink to “6. 硬件平台”">​</a></h3><p>与硬件名称类似，-i参数会显示你的硬件平台（译注：硬件名称i686是属于硬件平台i386系列的）。</p><pre><code># uname -i

i386
</code></pre><p>同样，i386意味这是正在运行一个32位的系统，如果输出的是X86_64则说明你正在运行一个64位的系统。</p><h3 id="_7-处理器类型" tabindex="-1">7. 处理器类型 <a class="header-anchor" href="#_7-处理器类型" aria-label="Permalink to “7. 处理器类型”">​</a></h3><p>你可以用<strong>-p</strong>参数查看处理器类型。如果uname无法识别，它会显示 ‘unknown’ 作为输出。</p><pre><code># uname -p

i686
</code></pre><h3 id="_8-操作系统" tabindex="-1">8. 操作系统 <a class="header-anchor" href="#_8-操作系统" aria-label="Permalink to “8. 操作系统”">​</a></h3><p>uname也可以透露你正在运行的操作系统信息，用<strong>-o</strong>参数可以实现这个目的。</p><pre><code># uname -o

GNU/Linux
</code></pre><h3 id="_9-所有信息" tabindex="-1">9. 所有信息 <a class="header-anchor" href="#_9-所有信息" aria-label="Permalink to “9. 所有信息”">​</a></h3><p>有一个参数可以展示所有的信息！这就是<strong>-a</strong>参数，它会显示所有信息。如果<strong>-i和-p</strong>输出为unknown则默认会被省略。</p><pre><code># uname -a

Linux dev-machine 2.6.18-371.1.2.el5 #1 SMP Tue Oct 22 12:57:43 EDT 2013 i686 i686 i386 GNU/Linux
</code></pre><p>以上就是关于uname命令的使用。请敬请期待更多的命令！</p><p>谢谢阅读！</p><hr>`,43)),o("p",null,[e[1]||(e[1]=n("via: ",-1)),t(a,{href:"http://linoxide.com/linux-command/uname-command/"},{default:r(()=>[...e[0]||(e[0]=[n("http://linoxide.com/linux-command/uname-command/",-1)])]),_:1})]),o("p",null,[e[4]||(e[4]=n("译者：",-1)),t(a,{href:"https://github.com/Luoxcat"},{default:r(()=>[...e[2]||(e[2]=[n("Luoxcat",-1)])]),_:1}),e[5]||(e[5]=n(" 校对：",-1)),t(a,{href:"http://blog.csdn.net/tinyeyeser"},{default:r(()=>[...e[3]||(e[3]=[n("Mr小眼儿",-1)])]),_:1})]),o("p",null,[e[8]||(e[8]=n("本文由 ",-1)),t(a,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[n("LCTT",-1)])]),_:1}),e[9]||(e[9]=n(" 原创翻译，",-1)),t(a,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[n("Linux中国",-1)])]),_:1}),e[10]||(e[10]=n(" 荣誉推出",-1))])])}const b=i(l,[["render",u]]);export{f as __pageData,b as default};
