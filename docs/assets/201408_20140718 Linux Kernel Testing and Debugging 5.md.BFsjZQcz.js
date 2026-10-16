import{_ as o,a0 as p,w as a,s as d,ao as g,I as r,x as t,a1 as s,A as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"Linux 内核测试和调试（5） | LCTT x X-CMD","titleTemplate":false,"description":"Linux 内核测试和调试（5） | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 内核测试和调试（5） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 内核测试和调试（5） | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140718 Linux Kernel Testing and Debugging 5","title":"Linux 内核测试和调试（5）","tag":"201408","desc":""},"relativePath":"201408/20140718 Linux Kernel Testing and Debugging 5.md","filePath":"[post].md"}'),c={name:"201408/20140718 Linux Kernel Testing and Debugging 5.md"};function l(u,e,m,b,x,f){const i=p("Link");return a(),d("div",null,[e[11]||(e[11]=g(`<h1 id="linux-内核测试和调试-5" tabindex="-1">Linux 内核测试和调试（5） <a class="header-anchor" href="#linux-内核测试和调试-5" aria-label="Permalink to “Linux 内核测试和调试（5）”">​</a></h1><h3 id="仿真环境下进行-linux-电源管理子系统测试" tabindex="-1">仿真环境下进行 Linux 电源管理子系统测试 <a class="header-anchor" href="#仿真环境下进行-linux-电源管理子系统测试" aria-label="Permalink to “仿真环境下进行 Linux 电源管理子系统测试”">​</a></h3><p>Linux 电源管理子系统在仿真环境下提供5种测试方式。这些方式仅仅在内核各层之间运行休眠的代码而不是真正的让系统进入休眠状态。有些平台不能挂起系统，比如说我们需要模拟飞机的飞行环境，这时候使用这种仿真环境就非常有用处了。</p><p>freezer - 测试停掉处理器：</p><pre><code>echo freezer &gt; /sys/power/pm_test
echo platform &gt; /sys/power/disk
echo disk &gt; /sys/power/state
</code></pre><p>devices - 测试停掉处理器以及挂起设备：</p><pre><code>echo devices &gt; /sys/power/pm_test
echo platform &gt; /sys/power/disk
echo disk &gt; /sys/power/state
</code></pre><p>platform - 测试停掉处理器、挂起设备以及平台全局控制方法(*)</p><pre><code>echo platform &gt; /sys/power/pm_test
echo platform &gt; /sys/power/disk
echo disk &gt; /sys/power/state
</code></pre><p>processors - 测试停掉处理器、挂起设备和平台全局控制方法(*)，以及关闭未启动的 CPU。</p><pre><code>echo processors &gt; /sys/power/pm_test
echo platform &gt; /sys/power/disk
echo disk &gt; /sys/power/state
</code></pre><p>core - 测试停掉处理器、挂起设备和平台全局控制方法(*)，关闭未启动的 CPU，以及挂起平台或系统的设备。注意：这个测试模式运行在 ACPI 系统。</p><pre><code>echo core &gt; /sys/power/pm_test
echo platform &gt; /sys/power/disk
echo disk &gt; /sys/power/state
</code></pre><h3 id="linux-电源管理子系统追踪事件" tabindex="-1">Linux 电源管理子系统追踪事件 <a class="header-anchor" href="#linux-电源管理子系统追踪事件" aria-label="Permalink to “Linux 电源管理子系统追踪事件”">​</a></h3><p>电源管理子系统在运行过程中支持多种追踪点和追踪事件。我将对如何使用这些追踪时间以及如何找到追踪信息作一个简单的介绍：</p><p>在运行时开启电源管理事件：</p><pre><code>cd /sys/kernel/debug/tracing/events/power
echo 1 &gt; cpu_frequency/enable
cat /sys/kernel/debug/tracing/set_event
less /sys/kernel/debug/tracing/trace
</code></pre><p>为内核启动的命令添加一个参数：</p><pre><code>trace_event=cpu_frequency
</code></pre><p>更多信息查看 Documentation/power/basic-pm-debugging.txt 以及同目录下其他的文档。</p><h3 id="git-bisect-命令" tabindex="-1">git bisect 命令 <a class="header-anchor" href="#git-bisect-命令" aria-label="Permalink to “git bisect 命令”">​</a></h3><p>git bisect 是一个非常有用非常强大的工具，用于将 git 上的一个 commit 分离出来。我简单过一遍它的用法。</p><p>下面是 git bisect 的用法：</p><pre><code>git bisect start
git bisect bad	 # 当前版本是坏的
git bisect good v3.14-rc6	# 上个版本是好的
</code></pre><p>一旦指定好好的版本和坏的版本，git bisect 就会开始把好坏两个版本之间的所有 commit 对半分，并将其中的一半提交 pull 下来。然后重新编译安装测试内核，并标记这个内核是好是坏。重复这个过程，知道某个你选好的 commit 被标记被好或者坏。我们可能需要测试多个内核版本，测到最后一个版本时，git bisect 会将一个 commit 标记为坏。下面的命令可以在 git bisect 分析过程中起到帮助作用：</p><p>查看 bisect 操作的过程：</p><pre><code>git bisect log
</code></pre><p>重置 git bisect，标记错误时可以用到，保存 git log 的输出，重新操作上一次 bisect 的步骤：</p><pre><code>git bisect reset
</code></pre><p>重放 git bisect 操作过程：</p><pre><code>git bisect replay git_log_output
</code></pre><p>如果一个问题很清楚是在某个区域内，git bisect 命令可以定位到一个具体的内核源码树枝干上。举个例子，在调试一个镭龙显卡驱动的问题时，为 git bisect 指定 drivers/drm/radeon 参数，可以让 git bisect 只检索对 drivers/drm/radeon 里面的文件有修改的 commit。</p><p>让 git bisect 只检索内核树的某个枝干：</p><pre><code>git bisect start drivers/drm/radeon
</code></pre><hr>`,35)),r("p",null,[e[1]||(e[1]=t("via: ",-1)),s(i,{href:"http://www.linuxjournal.com/content/linux-kernel-testing-and-debugging?page=0,4"},{default:n(()=>[...e[0]||(e[0]=[t("http://www.linuxjournal.com/content/linux-kernel-testing-and-debugging?page=0,4",-1)])]),_:1})]),r("p",null,[e[4]||(e[4]=t("译者：",-1)),s(i,{href:"https://github.com/bazz2"},{default:n(()=>[...e[2]||(e[2]=[t("bazz2",-1)])]),_:1}),e[5]||(e[5]=t(" 校对：",-1)),s(i,{href:"https://github.com/wxy"},{default:n(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[8]||(e[8]=t("本文由 ",-1)),s(i,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原创翻译，",-1)),s(i,{href:"http://linux.cn/"},{default:n(()=>[...e[7]||(e[7]=[t("Linux中国",-1)])]),_:1}),e[10]||(e[10]=t(" 荣誉推出",-1))])])}const L=o(c,[["render",l]]);export{T as __pageData,L as default};
