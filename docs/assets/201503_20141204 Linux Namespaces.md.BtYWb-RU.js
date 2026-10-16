import{_ as s,a0 as f,w as l,s as d,ao as p,I as i,x as t,a1 as o,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const E=JSON.parse('{"title":"介绍 Linux 的命名空间 | LCTT x X-CMD","titleTemplate":false,"description":"介绍 Linux 的命名空间 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"介绍 Linux 的命名空间 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"介绍 Linux 的命名空间 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20141204 Linux Namespaces","title":"介绍 Linux 的命名空间","tag":"201503","desc":""},"relativePath":"201503/20141204 Linux Namespaces.md","filePath":"[post].md"}'),a={name:"201503/20141204 Linux Namespaces.md"};function u(c,e,b,m,h,g){const n=f("Link");return l(),d("div",null,[e[20]||(e[20]=p(`<h1 id="介绍-linux-的命名空间" tabindex="-1">介绍 Linux 的命名空间 <a class="header-anchor" href="#介绍-linux-的命名空间" aria-label="Permalink to “介绍 Linux 的命名空间”">​</a></h1><h3 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to “背景”">​</a></h3><p>从Linux 2.6.24版的内核开始，Linux 就支持6种不同类型的命名空间。它们的出现，使用户创建的进程能够与系统分离得更加彻底，从而不需要使用更多的底层虚拟化技术。</p><ul><li><strong>CLONE_NEWIPC</strong>: 进程间通信(IPC)的命名空间，可以将 SystemV 的 IPC 和 POSIX 的消息队列独立出来。</li><li><strong>CLONE_NEWPID</strong>: PID 命名空间。空间内的PID 是独立分配的，意思就是命名空间内的虚拟 PID 可能会与命名空间外的 PID 相冲突，于是命名空间内的 PID 映射到命名空间外时会使用另外一个 PID。比如说，命名空间内第一个 PID 为1，而在命名空间外就是该 PID 已被 init 进程所使用。</li><li><strong>CLONE_NEWNET</strong>: 网络命名空间，用于隔离网络资源（/proc/net、IP 地址、网卡、路由等）。后台进程可以运行在不同命名空间内的相同端口上，用户还可以虚拟出一块网卡。</li><li><strong>CLONE_NEWNS</strong>: 挂载命名空间，进程运行时可以将挂载点与系统分离，使用这个功能时，我们可以达到 chroot 的功能，而在安全性方面比 chroot 更高。</li><li><strong>CLONE_NEWUTS</strong>: UTS 命名空间，主要目的是独立出主机名和网络信息服务（NIS）。</li><li><strong>CLONE_NEWUSER</strong>: 用户命名空间，同进程 ID 一样，用户 ID 和组 ID 在命名空间内外是不一样的，并且在不同命名空间内可以存在相同的 ID。</li></ul><p>下面我们介绍一下进程命名空间和网络命名空间。</p><h3 id="进程命名空间" tabindex="-1">进程命名空间 <a class="header-anchor" href="#进程命名空间" aria-label="Permalink to “进程命名空间”">​</a></h3><p>本文用 C 语言介绍上述概念，因为演示进程命名空间的时候需要用到 C 语言。下面的测试过程在 Debian 6 和 Debian 7 上执行。首先，在栈内分配一页内存空间，并将指针指向内存页的末尾。这里我们使用 <strong>alloca()</strong> 函数来分配内存，不要用 malloc() 函数，它会把内存分配在堆上。</p><pre><code>void *mem = alloca(sysconf(_SC_PAGESIZE)) + sysconf(_SC_PAGESIZE);
</code></pre><p>然后使用 <strong>clone()</strong> 函数创建子进程，传入我们的子栈空间地址 &quot;mem&quot;，并指定命名空间的标记。同时我们还指定“callee”作为子进程运行的函数。</p><pre><code>mypid = clone(callee, mem, SIGCHLD | CLONE_NEWIPC | CLONE_NEWPID | CLONE_NEWNS | CLONE_FILES, NULL);
</code></pre><p><strong>clone</strong> 之后我们要在父进程中等待子进程先退出，否则的话，父进程会继续运行下去，并马上进程结束，留下子进程变成孤儿进程：</p><pre><code>while (waitpid(mypid, &amp;r, 0) &lt; 0 &amp;&amp; errno == EINTR)
{
	continue;
}
</code></pre><p>最后当子进程退出后，我们会回到 shell 界面，并返回子进程的退出码。</p><pre><code>if (WIFEXITED(r))
{
	return WEXITSTATUS(r);
}
return EXIT_FAILURE;
</code></pre><p>上文介绍的 <strong>callee</strong> 函数功能如下：</p><pre><code>static int callee()
{
	int ret;
	mount(&quot;proc&quot;, &quot;/proc&quot;, &quot;proc&quot;, 0, &quot;&quot;);
	setgid(u);
	setgroups(0, NULL);
	setuid(u);
	ret = execl(&quot;/bin/bash&quot;, &quot;/bin/bash&quot;, NULL);
	return ret;
}
</code></pre>`,16)),i("p",null,[e[1]||(e[1]=t("程序挂载了 ",-1)),e[2]||(e[2]=i("strong",null,"/proc",-1)),e[3]||(e[3]=t(" 文件系统，设置用户 ID 和组 ID，值都为“u”，然后运行 ",-1)),e[4]||(e[4]=i("strong",null,"/bin/bash",-1)),e[5]||(e[5]=t(" 程序，",-1)),o(n,{href:"http://en.wikipedia.org/wiki/LXC"},{default:r(()=>[...e[0]||(e[0]=[t("LXC",-1)])]),_:1}),e[6]||(e[6]=t(" 是一个操作系统级的虚拟化工具，使用 cgroups 和命名空间来完成资源的分离。现在我们把所有代码放在一起，变量“u”的值设为65534，在 Debian 系统中，这是“nobody”和“nogroup”：",-1))]),e[21]||(e[21]=p(`<pre><code>#define _GNU_SOURCE
#include &lt;unistd.h&gt;
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;sys/types.h&gt;
#include &lt;sys/wait.h&gt;
#include &lt;sys/mount.h&gt;
#include &lt;grp.h&gt;
#include &lt;alloca.h&gt;
#include &lt;errno.h&gt;
#include &lt;sched.h&gt;
static int callee();
const int u = 65534;
int main(int argc, char *argv[])
{
	int r;
	pid_t mypid;
	void *mem = alloca(sysconf(_SC_PAGESIZE)) + sysconf(_SC_PAGESIZE);
	mypid = clone(callee, mem, SIGCHLD | CLONE_NEWIPC | CLONE_NEWPID | CLONE_NEWNS | CLONE_FILES, NULL);
	while (waitpid(mypid, &amp;r, 0) &lt; 0 &amp;&amp; errno == EINTR)
	{
		continue;
	}
	if (WIFEXITED(r))
	{
		return WEXITSTATUS(r);
	}
	return EXIT_FAILURE;
}
static int callee()
{
	int ret;
	mount(&quot;proc&quot;, &quot;/proc&quot;, &quot;proc&quot;, 0, &quot;&quot;);
	setgid(u);
	setgroups(0, NULL);
	setuid(u);
	ret = execl(&quot;/bin/bash&quot;, &quot;/bin/bash&quot;, NULL);
	return ret;
}
</code></pre><p>执行以下命令来运行上面的代码：</p><pre><code>root@w:~/pen/tmp# gcc -O -o ns.c -Wall -Werror -ansi -c89 ns.c
root@w:~/pen/tmp# ./ns
nobody@w:~/pen/tmp$ id
uid=65534(nobody) gid=65534(nogroup)
nobody@w:~/pen/tmp$ ps auxw
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
nobody       1  0.0  0.0   4620  1816 pts/1    S    21:21   0:00 /bin/bash
nobody       5  0.0  0.0   2784  1064 pts/1    R+   21:21   0:00 ps auxw
nobody@w:~/pen/tmp$ 
</code></pre><p>注意上面的结果，UID 和 GID 被设置成 nobody 和 nogroup 了，特别是 ps 工具只输出两个进程，它们的 ID 分别是1和5（LCTT注：这就是上文介绍 CLONE_NEWPID 时提到的功能，在线程所在的命名空间内，进程 ID 可以为1，映射到命名空间外是另外一个 PID；而命名空间外的 ID 为1的进程一直是 init）。</p><h3 id="网络命名空间" tabindex="-1">网络命名空间 <a class="header-anchor" href="#网络命名空间" aria-label="Permalink to “网络命名空间”">​</a></h3><p>接下来轮到使用 ip netns 来设置网络的命名空间。第一步先确定当前系统没有命名空间：</p><pre><code>root@w:~# ip netns list
Object &quot;netns&quot; is unknown, try &quot;ip help&quot;.
</code></pre><p>如果报了上述错误，你需要更新你的系统内核，以及 ip 工具程序。这里假设你的内核版高于2.6.24，ip 工具版本也差不多，高于2.6.24（LCTT注：ip 工具由 iproute 安装包提供，此安装包版本与内核版本相近）。更新好后，<strong>ip netns list</strong> 在没有命名空间存在的情况下不会输出任务信息。加个名为“ns1”的命名空间看看：</p><pre><code>root@w:~# ip netns add ns1
root@w:~# ip netns list
ns1
</code></pre><p>列出网卡：</p><pre><code>root@w:~# ip link list
1: lo:  mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0:  mtu 1500 qdisc pfifo_fast state UNKNOWN mode DEFAULT qlen 1000
    link/ether 00:0c:29:65:25:9e brd ff:ff:ff:ff:ff:ff
</code></pre><p>创建新的虚拟网卡，并加到命名空间。虚拟网卡需要成对创建，互相关联——就像交叉电缆一样：</p><pre><code>root@w:~# ip link add veth0 type veth peer name veth1
root@w:~# ip link list
1: lo:  mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0:  mtu 1500 qdisc pfifo_fast state UNKNOWN mode DEFAULT qlen 1000
    link/ether 00:0c:29:65:25:9e brd ff:ff:ff:ff:ff:ff
3: veth1:  mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000
    link/ether d2:e9:52:18:19:ab brd ff:ff:ff:ff:ff:ff
4: veth0:  mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000
    link/ether f2:f7:5e:e2:22:ac brd ff:ff:ff:ff:ff:ff
</code></pre><p>这个时候 <strong>ifconfig</strong> -a 命令也能显示新添加的 veth0 和 veth1 两块网卡。</p><p>很好，现在将这两份块网卡加到命名空间中去。注意一下，下面的 ip <strong>netns exec</strong> 命令用于将后面的命令在命名空间中执行（LCTT注：下面的结果显示了在 ns1 这个网络命名空间中，只存在 lo 和 veth1 两块网卡）：</p><pre><code>root@w:~# ip link set veth1 netns ns1
root@w:~# ip netns exec ns1 ip link list
1: lo:  mtu 65536 qdisc noop state DOWN mode DEFAULT 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
3: veth1:  mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000
link/ether d2:e9:52:18:19:ab brd ff:ff:ff:ff:ff:ff
</code></pre><p>这个时候 <strong>ifconfig</strong> -a 命令只能显示 veth0，不能显示 veth1，因为后者现在在 ns1 命名空间中。</p><p>如果想删除 veth0/veth1，可以执行下面的命令：</p><pre><code>ip netns exec ns1 ip link del veth1
</code></pre><p>我们可以为 veth0 分配 IP 地址：</p><pre><code>ifconfig veth0 192.168.5.5/24
</code></pre><p>在命名空间内为 veth1 分配 IP 地址：</p><pre><code>ip netns exec ns1 ifconfig veth1 192.168.5.10/24 up
</code></pre><p>在命名空间内外执行 ip addr <strong>list</strong> 命令：</p><pre><code>root@w:~# ip addr list
1: lo:  mtu 65536 qdisc noqueue state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0:  mtu 1500 qdisc pfifo_fast state UNKNOWN qlen 1000
    link/ether 00:0c:29:65:25:9e brd ff:ff:ff:ff:ff:ff
    inet 192.168.3.122/24 brd 192.168.3.255 scope global eth0
    inet6 fe80::20c:29ff:fe65:259e/64 scope link 
       valid_lft forever preferred_lft forever
6: veth0:  mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 86:b2:c7:bd:c9:11 brd ff:ff:ff:ff:ff:ff
    inet 192.168.5.5/24 brd 192.168.5.255 scope global veth0
    inet6 fe80::84b2:c7ff:febd:c911/64 scope link 
       valid_lft forever preferred_lft forever
root@w:~# ip netns exec ns1 ip addr list
1: lo:  mtu 65536 qdisc noop state DOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
5: veth1:  mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 12:bd:b6:76:a6:eb brd ff:ff:ff:ff:ff:ff
    inet 192.168.5.10/24 brd 192.168.5.255 scope global veth1
    inet6 fe80::10bd:b6ff:fe76:a6eb/64 scope link 
       valid_lft forever preferred_lft forever
</code></pre><p>在命名空间内外查看路由表：</p><pre><code>root@w:~# ip route list
default via 192.168.3.1 dev eth0  proto static 
192.168.3.0/24 dev eth0  proto kernel  scope link  src 192.168.3.122 
192.168.5.0/24 dev veth0  proto kernel  scope link  src 192.168.5.5 
root@w:~# ip netns exec ns1 ip route list
192.168.5.0/24 dev veth1  proto kernel  scope link  src 192.168.5.10 
</code></pre><p>最后，将虚拟网卡连到物理网卡上，我们需要用到桥接。这里做的是将 veth0 桥接到 eth0，而 ns1 命名空间内则使用 DHCP 自动获取 IP 地址：</p><pre><code>root@w:~# brctl addbr br0
root@w:~# brctl addif br0 eth0
root@w:~# brctl addif br0 veth0
root@w:~# ifconfig eth0 0.0.0.0
root@w:~# ifconfig veth0 0.0.0.0
root@w:~# dhclient br0
root@w:~# ip addr list br0
7: br0:  mtu 1500 qdisc noqueue state UP 
    link/ether 00:0c:29:65:25:9e brd ff:ff:ff:ff:ff:ff
    inet 192.168.3.122/24 brd 192.168.3.255 scope global br0
    inet6 fe80::20c:29ff:fe65:259e/64 scope link 
       valid_lft forever preferred_lft forever
</code></pre><p>为网桥 br0 分配的 IP 地址为192.168.3.122/24。接下来为命名空间分配地址：</p><pre><code>root@w:~# ip netns exec ns1 dhclient veth1
root@w:~# ip netns exec ns1 ip addr list
1: lo:  mtu 65536 qdisc noop state DOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
5: veth1:  mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 12:bd:b6:76:a6:eb brd ff:ff:ff:ff:ff:ff
    inet 192.168.3.248/24 brd 192.168.3.255 scope global veth1
    inet6 fe80::10bd:b6ff:fe76:a6eb/64 scope link 
       valid_lft forever preferred_lft forever
</code></pre><p>现在， veth1 的 IP 被设置成 192.168.3.248/24 了。</p><hr>`,33)),i("p",null,[e[8]||(e[8]=t("via: ",-1)),o(n,{href:"http://www.howtoforge.com/linux-namespaces"},{default:r(()=>[...e[7]||(e[7]=[t("http://www.howtoforge.com/linux-namespaces",-1)])]),_:1})]),i("p",null,[e[12]||(e[12]=t("作者：",-1)),o(n,{href:"http://www.howtoforge.com/forums/private.php?do=newpm&u=138952"},{default:r(()=>[...e[9]||(e[9]=[t("aziods",-1)])]),_:1}),e[13]||(e[13]=t(" 译者：",-1)),o(n,{href:"https://github.com/bazz2"},{default:r(()=>[...e[10]||(e[10]=[t("bazz2",-1)])]),_:1}),e[14]||(e[14]=t(" 校对：",-1)),o(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[11]||(e[11]=[t("wxy",-1)])]),_:1})]),i("p",null,[e[17]||(e[17]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[15]||(e[15]=[t("LCTT",-1)])]),_:1}),e[18]||(e[18]=t(" 原创翻译，",-1)),o(n,{href:"http://linux.cn/"},{default:r(()=>[...e[16]||(e[16]=[t("Linux中国",-1)])]),_:1}),e[19]||(e[19]=t(" 荣誉推出",-1))])])}const T=s(a,[["render",u]]);export{E as __pageData,T as default};
