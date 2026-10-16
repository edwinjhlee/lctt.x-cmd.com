import{_ as s,a0 as f,w as l,s as d,ao as p,I as i,x as t,a1 as o,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const E=JSON.parse('{"title":"介紹 Linux 的命名空間 | LCTT x X-CMD","titleTemplate":false,"description":"介紹 Linux 的命名空間 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"介紹 Linux 的命名空間 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"介紹 Linux 的命名空間 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20141204 Linux Namespaces","title":"介紹 Linux 的命名空間","tag":"201503","desc":""},"relativePath":"201503/20141204 Linux Namespaces.md","filePath":"[post].md"}'),a={name:"201503/20141204 Linux Namespaces.md"};function u(c,e,b,m,h,g){const n=f("Link");return l(),d("div",null,[e[20]||(e[20]=p(`<h1 id="介紹-linux-的命名空間" tabindex="-1">介紹 Linux 的命名空間 <a class="header-anchor" href="#介紹-linux-的命名空間" aria-label="Permalink to “介紹 Linux 的命名空間”">​</a></h1><h3 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to “背景”">​</a></h3><p>從Linux 2.6.24版的內核開始，Linux 就支持6種不同類型的命名空間。它們的出現，使用户創建的進程能夠與系統分離得更加徹底，從而不需要使用更多的底層虛擬化技術。</p><ul><li><strong>CLONE_NEWIPC</strong>: 進程間通信(IPC)的命名空間，可以將 SystemV 的 IPC 和 POSIX 的消息隊列獨立出來。</li><li><strong>CLONE_NEWPID</strong>: PID 命名空間。空間內的PID 是獨立分配的，意思就是命名空間內的虛擬 PID 可能會與命名空間外的 PID 相沖突，於是命名空間內的 PID 映射到命名空間外時會使用另外一個 PID。比如説，命名空間內第一個 PID 為1，而在命名空間外就是該 PID 已被 init 進程所使用。</li><li><strong>CLONE_NEWNET</strong>: 網絡命名空間，用於隔離網絡資源（/proc/net、IP 地址、網卡、路由等）。後台進程可以運行在不同命名空間內的相同端口上，用户還可以虛擬出一塊網卡。</li><li><strong>CLONE_NEWNS</strong>: 掛載命名空間，進程運行時可以將掛載點與系統分離，使用這個功能時，我們可以達到 chroot 的功能，而在安全性方面比 chroot 更高。</li><li><strong>CLONE_NEWUTS</strong>: UTS 命名空間，主要目的是獨立出主機名和網絡信息服務（NIS）。</li><li><strong>CLONE_NEWUSER</strong>: 用户命名空間，同進程 ID 一樣，用户 ID 和組 ID 在命名空間內外是不一樣的，並且在不同命名空間內可以存在相同的 ID。</li></ul><p>下面我們介紹一下進程命名空間和網絡命名空間。</p><h3 id="進程命名空間" tabindex="-1">進程命名空間 <a class="header-anchor" href="#進程命名空間" aria-label="Permalink to “進程命名空間”">​</a></h3><p>本文用 C 語言介紹上述概念，因為演示進程命名空間的時候需要用到 C 語言。下面的測試過程在 Debian 6 和 Debian 7 上執行。首先，在棧內分配一頁內存空間，並將指針指向內存頁的末尾。這裏我們使用 <strong>alloca()</strong> 函數來分配內存，不要用 malloc() 函數，它會把內存分配在堆上。</p><pre><code>void *mem = alloca(sysconf(_SC_PAGESIZE)) + sysconf(_SC_PAGESIZE);
</code></pre><p>然後使用 <strong>clone()</strong> 函數創建子進程，傳入我們的子棧空間地址 &quot;mem&quot;，並指定命名空間的標記。同時我們還指定“callee”作為子進程運行的函數。</p><pre><code>mypid = clone(callee, mem, SIGCHLD | CLONE_NEWIPC | CLONE_NEWPID | CLONE_NEWNS | CLONE_FILES, NULL);
</code></pre><p><strong>clone</strong> 之後我們要在父進程中等待子進程先退出，否則的話，父進程會繼續運行下去，並馬上進程結束，留下子進程變成孤兒進程：</p><pre><code>while (waitpid(mypid, &amp;r, 0) &lt; 0 &amp;&amp; errno == EINTR)
{
	continue;
}
</code></pre><p>最後當子進程退出後，我們會回到 shell 界面，並返回子進程的退出碼。</p><pre><code>if (WIFEXITED(r))
{
	return WEXITSTATUS(r);
}
return EXIT_FAILURE;
</code></pre><p>上文介紹的 <strong>callee</strong> 函數功能如下：</p><pre><code>static int callee()
{
	int ret;
	mount(&quot;proc&quot;, &quot;/proc&quot;, &quot;proc&quot;, 0, &quot;&quot;);
	setgid(u);
	setgroups(0, NULL);
	setuid(u);
	ret = execl(&quot;/bin/bash&quot;, &quot;/bin/bash&quot;, NULL);
	return ret;
}
</code></pre>`,16)),i("p",null,[e[1]||(e[1]=t("程序掛載了 ",-1)),e[2]||(e[2]=i("strong",null,"/proc",-1)),e[3]||(e[3]=t(" 文件系統，設置用户 ID 和組 ID，值都為“u”，然後運行 ",-1)),e[4]||(e[4]=i("strong",null,"/bin/bash",-1)),e[5]||(e[5]=t(" 程序，",-1)),o(n,{href:"http://en.wikipedia.org/wiki/LXC"},{default:r(()=>[...e[0]||(e[0]=[t("LXC",-1)])]),_:1}),e[6]||(e[6]=t(" 是一個操作系統級的虛擬化工具，使用 cgroups 和命名空間來完成資源的分離。現在我們把所有代碼放在一起，變量“u”的值設為65534，在 Debian 系統中，這是“nobody”和“nogroup”：",-1))]),e[21]||(e[21]=p(`<pre><code>#define _GNU_SOURCE
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
</code></pre><p>執行以下命令來運行上面的代碼：</p><pre><code>root@w:~/pen/tmp# gcc -O -o ns.c -Wall -Werror -ansi -c89 ns.c
root@w:~/pen/tmp# ./ns
nobody@w:~/pen/tmp$ id
uid=65534(nobody) gid=65534(nogroup)
nobody@w:~/pen/tmp$ ps auxw
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
nobody       1  0.0  0.0   4620  1816 pts/1    S    21:21   0:00 /bin/bash
nobody       5  0.0  0.0   2784  1064 pts/1    R+   21:21   0:00 ps auxw
nobody@w:~/pen/tmp$ 
</code></pre><p>注意上面的結果，UID 和 GID 被設置成 nobody 和 nogroup 了，特別是 ps 工具只輸出兩個進程，它們的 ID 分別是1和5（LCTT注：這就是上文介紹 CLONE_NEWPID 時提到的功能，在線程所在的命名空間內，進程 ID 可以為1，映射到命名空間外是另外一個 PID；而命名空間外的 ID 為1的進程一直是 init）。</p><h3 id="網絡命名空間" tabindex="-1">網絡命名空間 <a class="header-anchor" href="#網絡命名空間" aria-label="Permalink to “網絡命名空間”">​</a></h3><p>接下來輪到使用 ip netns 來設置網絡的命名空間。第一步先確定當前系統沒有命名空間：</p><pre><code>root@w:~# ip netns list
Object &quot;netns&quot; is unknown, try &quot;ip help&quot;.
</code></pre><p>如果報了上述錯誤，你需要更新你的系統內核，以及 ip 工具程序。這裏假設你的內核版高於2.6.24，ip 工具版本也差不多，高於2.6.24（LCTT注：ip 工具由 iproute 安裝包提供，此安裝包版本與內核版本相近）。更新好後，<strong>ip netns list</strong> 在沒有命名空間存在的情況下不會輸出任務信息。加個名為“ns1”的命名空間看看：</p><pre><code>root@w:~# ip netns add ns1
root@w:~# ip netns list
ns1
</code></pre><p>列出網卡：</p><pre><code>root@w:~# ip link list
1: lo:  mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0:  mtu 1500 qdisc pfifo_fast state UNKNOWN mode DEFAULT qlen 1000
    link/ether 00:0c:29:65:25:9e brd ff:ff:ff:ff:ff:ff
</code></pre><p>創建新的虛擬網卡，並加到命名空間。虛擬網卡需要成對創建，互相關聯——就像交叉電纜一樣：</p><pre><code>root@w:~# ip link add veth0 type veth peer name veth1
root@w:~# ip link list
1: lo:  mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0:  mtu 1500 qdisc pfifo_fast state UNKNOWN mode DEFAULT qlen 1000
    link/ether 00:0c:29:65:25:9e brd ff:ff:ff:ff:ff:ff
3: veth1:  mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000
    link/ether d2:e9:52:18:19:ab brd ff:ff:ff:ff:ff:ff
4: veth0:  mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000
    link/ether f2:f7:5e:e2:22:ac brd ff:ff:ff:ff:ff:ff
</code></pre><p>這個時候 <strong>ifconfig</strong> -a 命令也能顯示新添加的 veth0 和 veth1 兩塊網卡。</p><p>很好，現在將這兩份塊網卡加到命名空間中去。注意一下，下面的 ip <strong>netns exec</strong> 命令用於將後面的命令在命名空間中執行（LCTT注：下面的結果顯示了在 ns1 這個網絡命名空間中，只存在 lo 和 veth1 兩塊網卡）：</p><pre><code>root@w:~# ip link set veth1 netns ns1
root@w:~# ip netns exec ns1 ip link list
1: lo:  mtu 65536 qdisc noop state DOWN mode DEFAULT 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
3: veth1:  mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000
link/ether d2:e9:52:18:19:ab brd ff:ff:ff:ff:ff:ff
</code></pre><p>這個時候 <strong>ifconfig</strong> -a 命令只能顯示 veth0，不能顯示 veth1，因為後者現在在 ns1 命名空間中。</p><p>如果想刪除 veth0/veth1，可以執行下面的命令：</p><pre><code>ip netns exec ns1 ip link del veth1
</code></pre><p>我們可以為 veth0 分配 IP 地址：</p><pre><code>ifconfig veth0 192.168.5.5/24
</code></pre><p>在命名空間內為 veth1 分配 IP 地址：</p><pre><code>ip netns exec ns1 ifconfig veth1 192.168.5.10/24 up
</code></pre><p>在命名空間內外執行 ip addr <strong>list</strong> 命令：</p><pre><code>root@w:~# ip addr list
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
</code></pre><p>在命名空間內外查看路由表：</p><pre><code>root@w:~# ip route list
default via 192.168.3.1 dev eth0  proto static 
192.168.3.0/24 dev eth0  proto kernel  scope link  src 192.168.3.122 
192.168.5.0/24 dev veth0  proto kernel  scope link  src 192.168.5.5 
root@w:~# ip netns exec ns1 ip route list
192.168.5.0/24 dev veth1  proto kernel  scope link  src 192.168.5.10 
</code></pre><p>最後，將虛擬網卡連到物理網卡上，我們需要用到橋接。這裏做的是將 veth0 橋接到 eth0，而 ns1 命名空間內則使用 DHCP 自動獲取 IP 地址：</p><pre><code>root@w:~# brctl addbr br0
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
</code></pre><p>為網橋 br0 分配的 IP 地址為192.168.3.122/24。接下來為命名空間分配地址：</p><pre><code>root@w:~# ip netns exec ns1 dhclient veth1
root@w:~# ip netns exec ns1 ip addr list
1: lo:  mtu 65536 qdisc noop state DOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
5: veth1:  mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 12:bd:b6:76:a6:eb brd ff:ff:ff:ff:ff:ff
    inet 192.168.3.248/24 brd 192.168.3.255 scope global veth1
    inet6 fe80::10bd:b6ff:fe76:a6eb/64 scope link 
       valid_lft forever preferred_lft forever
</code></pre><p>現在， veth1 的 IP 被設置成 192.168.3.248/24 了。</p><hr>`,33)),i("p",null,[e[8]||(e[8]=t("via: ",-1)),o(n,{href:"http://www.howtoforge.com/linux-namespaces"},{default:r(()=>[...e[7]||(e[7]=[t("http://www.howtoforge.com/linux-namespaces",-1)])]),_:1})]),i("p",null,[e[12]||(e[12]=t("作者：",-1)),o(n,{href:"http://www.howtoforge.com/forums/private.php?do=newpm&u=138952"},{default:r(()=>[...e[9]||(e[9]=[t("aziods",-1)])]),_:1}),e[13]||(e[13]=t(" 譯者：",-1)),o(n,{href:"https://github.com/bazz2"},{default:r(()=>[...e[10]||(e[10]=[t("bazz2",-1)])]),_:1}),e[14]||(e[14]=t(" 校對：",-1)),o(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[11]||(e[11]=[t("wxy",-1)])]),_:1})]),i("p",null,[e[17]||(e[17]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[15]||(e[15]=[t("LCTT",-1)])]),_:1}),e[18]||(e[18]=t(" 原創翻譯，",-1)),o(n,{href:"http://linux.cn/"},{default:r(()=>[...e[16]||(e[16]=[t("Linux中國",-1)])]),_:1}),e[19]||(e[19]=t(" 榮譽推出",-1))])])}const T=s(a,[["render",u]]);export{E as __pageData,T as default};
