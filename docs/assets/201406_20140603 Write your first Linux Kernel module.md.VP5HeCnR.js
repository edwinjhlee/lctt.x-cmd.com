import{_ as g,a0 as u,w as l,s as p,ao as i,I as n,x as r,a1 as o,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"黑客内核：编写属于你的第一个Linux内核模块 | LCTT x X-CMD","titleTemplate":false,"description":"黑客内核：编写属于你的第一个Linux内核模块 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"黑客内核：编写属于你的第一个Linux内核模块 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"黑客内核：编写属于你的第一个Linux内核模块 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140603 Write your first Linux Kernel module","title":"黑客内核：编写属于你的第一个Linux内核模块","tag":"201406","desc":""},"relativePath":"201406/20140603 Write your first Linux Kernel module.md","filePath":"[post].md"}'),a={name:"201406/20140603 Write your first Linux Kernel module.md"};function d(f,e,_,b,c,m){const t=u("Link");return l(),p("div",null,[e[25]||(e[25]=i(`<h1 id="黑客内核-编写属于你的第一个linux内核模块" tabindex="-1">黑客内核：编写属于你的第一个Linux内核模块 <a class="header-anchor" href="#黑客内核-编写属于你的第一个linux内核模块" aria-label="Permalink to “黑客内核：编写属于你的第一个Linux内核模块”">​</a></h1><blockquote><p>曾经多少次想要在内核游荡？曾经多少次茫然不知方向？你不要再对着它迷惘，让我们指引你走向前方……</p></blockquote><p>内核编程常常看起来像是黑魔法，而在亚瑟 C 克拉克的眼中，它八成就是了。Linux内核和它的用户空间是大不相同的：抛开漫不经心，你必须小心翼翼，因为你编程中的一个bug就会影响到整个系统。浮点运算做起来可不容易，堆栈固定而狭小，而你写的代码总是异步的，因此你需要想想并发会导致什么。而除了所有这一切之外，Linux内核只是一个很大的、很复杂的C程序，它对每个人开放，任何人都去读它、学习它并改进它，而你也可以是其中之一。</p><p>学习内核编程的最简单的方式也许就是写个内核模块：一段可以动态加载进内核的代码。模块所能做的事是有限的——例如，他们不能在类似进程描述符这样的公共数据结构中增减字段（LCTT译注：可能会破坏整个内核及系统的功能）。但是，在其它方面，他们是成熟的内核级的代码，可以在需要时随时编译进内核（这样就可以摒弃所有的限制了）。完全可以在Linux源代码树以外来开发并编译一个模块（这并不奇怪，它称为树外开发），如果你只是想稍微玩玩，而并不想提交修改以包含到主线内核中去，这样的方式是很方便的。</p><p>在本教程中，我们将开发一个简单的内核模块用以创建一个<strong>/dev/reverse</strong>设备。写入该设备的字符串将以相反字序的方式读回（“Hello World”读成“World Hello”）。这是一个很受欢迎的程序员面试难题，当你利用自己的能力在内核级别实现这个功能时，可以使你得到一些加分。在开始前，有一句忠告：你的模块中的一个bug就会导致系统崩溃（虽然可能性不大，但还是有可能的）和数据丢失。在开始前，请确保你已经将重要数据备份，或者，采用一种更好的方式，在虚拟机中进行试验。</p><h3 id="尽可能不要用root身份" tabindex="-1">尽可能不要用root身份 <a class="header-anchor" href="#尽可能不要用root身份" aria-label="Permalink to “尽可能不要用root身份”">​</a></h3><blockquote><p>默认情况下，<strong>/dev/reverse</strong>只有root可以使用，因此你只能使用<strong>sudo</strong>来运行你的测试程序。要解决该限制，可以创建一个包含以下内容的<strong>/lib/udev/rules.d/99-reverse.rules</strong>文件：</p><pre><code>SUBSYSTEM==&quot;misc&quot;, KERNEL==&quot;reverse&quot;, MODE=&quot;0666&quot;
</code></pre><p>别忘了重新插入模块。让非root用户访问设备节点往往不是一个好主意，但是在开发其间却是十分有用的。这并不是说以root身份运行二进制测试文件也不是个好主意。</p></blockquote><h4 id="模块的构造" tabindex="-1">模块的构造 <a class="header-anchor" href="#模块的构造" aria-label="Permalink to “模块的构造”">​</a></h4><p>由于大多数的Linux内核模块是用C写的（除了底层的特定于体系结构的部分），所以推荐你将你的模块以单一文件形式保存（例如，reverse.c）。我们已经把完整的源代码放在GitHub上——这里我们将看其中的一些片段。开始时，我们先要包含一些常见的文件头，并用预定义的宏来描述模块：</p><pre><code>#include &lt;linux/init.h&gt;
#include &lt;linux/kernel.h&gt;
#include &lt;linux/module.h&gt;

MODULE_LICENSE(&quot;GPL&quot;);
MODULE_AUTHOR(&quot;Valentine Sinitsyn &lt;valentine.sinitsyn@gmail.com&gt;&quot;);
MODULE_DESCRIPTION(&quot;In-kernel phrase reverser&quot;);
</code></pre><p>这里一切都直接明了，除了<strong>MODULE_LICENSE()</strong>：它不仅仅是一个标记。内核坚定地支持GPL兼容代码，因此如果你把许可证设置为其它非GPL兼容的（如，“Proprietary”[专利]），某些特定的内核功能将在你的模块中不可用。</p><h3 id="什么时候不该写内核模块" tabindex="-1">什么时候不该写内核模块 <a class="header-anchor" href="#什么时候不该写内核模块" aria-label="Permalink to “什么时候不该写内核模块”">​</a></h3><blockquote><p>内核编程很有趣，但是在现实项目中写（尤其是调试）内核代码要求特定的技巧。通常来讲，在没有其它方式可以解决你的问题时，你才应该在内核级别解决它。以下情形中，可能你在用户空间中解决它更好：</p></blockquote>`,13)),n("blockquote",null,[n("ul",null,[n("li",null,[e[1]||(e[1]=r("你要开发一个USB驱动 —— 请查看",-1)),o(t,{href:"http://www.libusb.org/"},{default:s(()=>[...e[0]||(e[0]=[r("libusb",-1)])]),_:1}),e[2]||(e[2]=r("。",-1))]),n("li",null,[e[4]||(e[4]=r("你要开发一个文件系统 —— 试试",-1)),o(t,{href:"http://fuse.sf.net/"},{default:s(()=>[...e[3]||(e[3]=[r("FUSE",-1)])]),_:1}),e[5]||(e[5]=r("。",-1))]),n("li",null,[e[7]||(e[7]=r("你在扩展Netfilter —— 那么",-1)),o(t,{href:"http://www.linuxvoice.com/be-a-kernel-hacker/www.netfilter.org/projects/libnetfilter_queue"},{default:s(()=>[...e[6]||(e[6]=[r("libnetfilter_queue",-1)])]),_:1}),e[8]||(e[8]=r("对你有所帮助。",-1))])])]),e[26]||(e[26]=i(`<blockquote><p>通常，内核里面代码的性能会更好，但是对于许多项目而言，这点性能丢失并不严重。</p></blockquote><p>由于内核编程总是异步的，没有一个<strong>main()</strong>函数来让Linux顺序执行你的模块。取而代之的是，你要为各种事件提供回调函数，像这个：</p><pre><code>static int __init reverse_init(void)
{
    printk(KERN_INFO &quot;reverse device has been registered\\n&quot;);
    return 0;
}
 
static void __exit reverse_exit(void)
{
    printk(KERN_INFO &quot;reverse device has been unregistered\\n&quot;);
}
 
module_init(reverse_init);
module_exit(reverse_exit);
</code></pre><p>这里，我们定义的函数被称为模块的插入和删除。只有第一个的插入函数是必要的。目前，它们只是打印消息到内核环缓冲区（可以在用户空间通过<strong>dmesg</strong>命令访问）；<strong>KERN_INFO</strong>是日志级别（注意，没有逗号）。<strong>__init</strong>和<strong>__exit</strong>是属性 —— 联结到函数（或者变量）的元数据片。属性在用户空间的C代码中是很罕见的，但是内核中却很普遍。所有标记为<strong>__init</strong>的，会在初始化后释放内存以供重用（还记得那条过去内核的那条“Freeing unused kernel memory…[释放未使用的内核内存……]”信息吗？）。<strong>__exit</strong>表明，当代码被静态构建进内核时，该函数可以安全地优化了，不需要清理收尾。最后，<strong>module_init()</strong>和<strong>module_exit()</strong>这两个宏将<strong>reverse_init()</strong>和<strong>reverse_exit()</strong>函数设置成为我们模块的生命周期回调函数。实际的函数名称并不重要，你可以称它们为<strong>init()</strong>和<strong>exit()</strong>，或者<strong>start()</strong>和<strong>stop()</strong>，你想叫什么就叫什么吧。他们都是静态声明，你在外部模块是看不到的。事实上，内核中的任何函数都是不可见的，除非明确地被导出。然而，在内核程序员中，给你的函数加上模块名前缀是约定俗成的。</p><p>这些都是些基本概念 - 让我们来做更多有趣的事情吧。模块可以接收参数，就像这样：</p><pre><code># modprobe foo bar=1
</code></pre><p><strong>modinfo</strong>命令显示了模块接受的所有参数，而这些也可以在<strong>/sys/module//parameters</strong>下作为文件使用。我们的模块需要一个缓冲区来存储参数 —— 让我们把这大小设置为用户可配置。在<strong>MODULE_DESCRIPTION()</strong>下添加如下三行：</p><pre><code>static unsigned long buffer_size = 8192;
module_param(buffer_size, ulong, (S_IRUSR | S_IRGRP | S_IROTH));
MODULE_PARM_DESC(buffer_size, &quot;Internal buffer size&quot;);
</code></pre><p>这儿，我们定义了一个变量来存储该值，封装成一个参数，并通过sysfs来让所有人可读。这个参数的描述（最后一行）出现在modinfo的输出中。</p><p>由于用户可以直接设置<strong>buffer_size</strong>，我们需要在<strong>reverse_init()</strong>来清除无效取值。你总该检查来自内核之外的数据 —— 如果你不这么做，你就是将自己置身于内核异常或安全漏洞之中。</p><pre><code>static int __init reverse_init()
{
    if (!buffer_size)
        return -1;
    printk(KERN_INFO
        &quot;reverse device has been registered, buffer size is %lu bytes\\n&quot;,
        buffer_size);
    return 0;
}
</code></pre><p>来自模块初始化函数的非0返回值意味着模块执行失败。</p><h3 id="导航" tabindex="-1">导航 <a class="header-anchor" href="#导航" aria-label="Permalink to “导航”">​</a></h3><blockquote><p>但你开发模块时，Linux内核就是你所需一切的源头。然而，它相当大，你可能在查找你所要的内容时会有困难。幸运的是，在庞大的代码库面前，有许多工具使这个过程变得简单。首先，是Cscope —— 在终端中运行的一个比较经典的工具。你所要做的，就是在内核源代码的顶级目录中运行<strong>make cscope &amp;&amp; cscope</strong>。Cscope和Vim以及Emacs整合得很好，因此你可以在你最喜爱的编辑器中使用它。</p></blockquote>`,14)),n("blockquote",null,[n("p",null,[e[10]||(e[10]=r("如果基于终端的工具不是你的最爱，那么就访问",-1)),o(t,{href:"http://lxr.free-electrons.com/"},{default:s(()=>[...e[9]||(e[9]=[r("http://lxr.free-electrons.com",-1)])]),_:1}),e[11]||(e[11]=r("吧。它是一个基于web的内核导航工具，即使它的功能没有Cscope来得多（例如，你不能方便地找到函数的用法），但它仍然提供了足够多的快速查询功能。",-1))])]),e[27]||(e[27]=i(`<p>现在是时候来编译模块了。你需要你正在运行的内核版本头文件（<strong>linux-headers</strong>，或者等同的软件包）和<strong>build-essential</strong>（或者类似的包）。接下来，该创建一个标准的Makefile模板：</p><pre><code>obj-m += reverse.o
all:
    make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
    make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
</code></pre><p>现在，调用<strong>make</strong>来构建你的第一个模块。如果你输入的都正确，在当前目录内会找到reverse.ko文件。使用<strong>sudo insmod reverse.ko</strong>插入内核模块，然后运行如下命令：</p><pre><code>$ dmesg | tail -1
[ 5905.042081] reverse device has been registered, buffer size is 8192 bytes
</code></pre><p>恭喜了！然而，目前这一行还只是假象而已 —— 还没有设备节点呢。让我们来搞定它。</p><h4 id="混杂设备" tabindex="-1">混杂设备 <a class="header-anchor" href="#混杂设备" aria-label="Permalink to “混杂设备”">​</a></h4><p>在Linux中，有一种特殊的字符设备类型，叫做“混杂设备”（或者简称为“misc”）。它是专为单一接入点的小型设备驱动而设计的，而这正是我们所需要的。所有混杂设备共享同一个主设备号（10），因此一个驱动(<strong>drivers/char/misc.c</strong>）就可以查看它们所有设备了，而这些设备用次设备号来区分。从其他意义来说，它们只是普通字符设备。</p><p>要为该设备注册一个次设备号（以及一个接入点），你需要声明<strong>struct misc_device</strong>，填上所有字段（注意语法），然后使用指向该结构的指针作为参数来调用<strong>misc_register()</strong>。为此，你也需要包含<strong>linux/miscdevice.h</strong>头文件：</p><pre><code>static struct miscdevice reverse_misc_device = {
    .minor = MISC_DYNAMIC_MINOR,
    .name = &quot;reverse&quot;,
    .fops = &amp;reverse_fops
};
static int __init reverse_init()
{
    ...
    misc_register(&amp;reverse_misc_device);
    printk(KERN_INFO ...
}
</code></pre><p>这儿，我们为名为“reverse”的设备请求一个第一个可用的（动态的）次设备号；省略号表明我们之前已经见过的省略的代码。别忘了在模块卸下后注销掉该设备。</p><pre><code>static void __exit reverse_exit(void)
{
    misc_deregister(&amp;reverse_misc_device);
    ...
}
</code></pre><p>‘fops’字段存储了一个指针，指向一个<strong>file_operations</strong>结构（在Linux/fs.h中声明），而这正是我们模块的接入点。<strong>reverse_fops</strong>定义如下：</p><pre><code>static struct file_operations reverse_fops = {
    .owner = THIS_MODULE,
    .open = reverse_open,
    ...
    .llseek = noop_llseek
};
</code></pre><p>另外，<strong>reverse_fops</strong>包含了一系列回调函数（也称之为方法），当用户空间代码打开一个设备，读写或者关闭文件描述符时，就会执行。如果你要忽略这些回调，可以指定一个明确的回调函数来替代。这就是为什么我们将<strong>llseek</strong>设置为<strong>noop_llseek()</strong>，（顾名思义）它什么都不干。这个默认实现改变了一个文件指针，而且我们现在并不需要我们的设备可以寻址（这是今天留给你们的家庭作业）。</p><h4 id="关闭和打开" tabindex="-1">关闭和打开 <a class="header-anchor" href="#关闭和打开" aria-label="Permalink to “关闭和打开”">​</a></h4><p>让我们来实现该方法。我们将给每个打开的文件描述符分配一个新的缓冲区，并在它关闭时释放。这实际上并不安全：如果一个用户空间应用程序泄漏了描述符（也许是故意的），它就会霸占RAM，并导致系统不可用。在现实世界中，你总得考虑到这些可能性。但在本教程中，这种方法不要紧。</p><p>我们需要一个结构函数来描述缓冲区。内核提供了许多常规的数据结构：链接列表（双联的），哈希表，树等等之类。不过，缓冲区常常从头设计。我们将调用我们的“struct buffer”：</p><pre><code>struct buffer {
    char *data, *end, *read_ptr;
    unsigned long size;
};
</code></pre><p><strong>data</strong>是该缓冲区存储的一个指向字符串的指针，而<strong>end</strong>指向字符串结尾后的第一个字节。<strong>read_ptr</strong>是<strong>read()</strong>开始读取数据的地方。缓冲区的size是为了保证完整性而存储的 —— 目前，我们还没有使用该区域。你不能假设使用你结构体的用户会正确地初始化所有这些东西，所以最好在函数中封装缓冲区的分配和收回。它们通常命名为<strong>buffer_alloc()</strong>和<strong>buffer_free()</strong>。</p><p>static struct buffer *buffer_alloc(unsigned long size) { struct buffer *buf; buf = kzalloc(sizeof(*buf), GFP_KERNEL); if (unlikely(!buf)) goto out; ... out: return buf; }</p><p>内核内存使用<strong>kmalloc()</strong>来分配，并使用<strong>kfree()</strong>来释放；<strong>kzalloc()</strong>的风格是将内存设置为全零。不同于标准的<strong>malloc()</strong>，它的内核对应部分收到的标志指定了第二个参数中请求的内存类型。这里，<strong>GFP_KERNEL</strong>是说我们需要一个普通的内核内存（不是在DMA或高内存区中）以及如果需要的话函数可以睡眠（重新调度进程）。<strong>sizeof(*buf)</strong>是一种常见的方式，它用来获取可通过指针访问的结构体的大小。</p><p>你应该随时检查<strong>kmalloc()</strong>的返回值：访问NULL指针将导致内核异常。同时也需要注意<strong>unlikely()</strong>宏的使用。它（及其相对宏<strong>likely()</strong>）被广泛用于内核中，用于表明条件几乎总是真的（或假的）。它不会影响到控制流程，但是能帮助现代处理器通过分支预测技术来提升性能。</p><p>最后，注意<strong>goto</strong>语句。它们常常为认为是邪恶的，但是，Linux内核（以及一些其它系统软件）采用它们来实施集中式的函数退出。这样的结果是减少嵌套深度，使代码更具可读性，而且非常像更高级语言中的<strong>try-catch</strong>区块。</p><p>有了<strong>buffer_alloc()</strong>和<strong>buffer_free()</strong>，<strong>open</strong>和<strong>close</strong>方法就变得很简单了。</p><pre><code>static int reverse_open(struct inode *inode, struct file *file)
{
    int err = 0;
    file-&gt;private_data = buffer_alloc(buffer_size);
    ...
    return err;
}
</code></pre><p><strong>struct file</strong>是一个标准的内核数据结构，用以存储打开的文件的信息，如当前文件位置（<strong>file-&gt;f_pos</strong>)、标志(<strong>file-&gt;f_flags</strong>），或者打开模式（<strong>file-&gt;f_mode</strong>)等。另外一个字段<strong>file-&gt;privatedata</strong>用于关联文件到一些专有数据，它的类型是void *，而且它在文件拥有者以外，对内核不透明。我们将一个缓冲区存储在那里。</p><p>如果缓冲区分配失败，我们通过返回否定值（<strong>-ENOMEM</strong>）来为调用的用户空间代码标明。一个C库中调用的<strong>open(2)</strong>系统调用(如 <strong>glibc</strong>)将会检测这个并适当地设置<strong>errno</strong> 。</p><h4 id="学习如何读和写" tabindex="-1">学习如何读和写 <a class="header-anchor" href="#学习如何读和写" aria-label="Permalink to “学习如何读和写”">​</a></h4><p>“read”和“write”方法是真正完成工作的地方。当数据写入到缓冲区时，我们放弃之前的内容和反向地存储该字段，不需要任何临时存储。<strong>read</strong>方法仅仅是从内核缓冲区复制数据到用户空间。但是如果缓冲区还没有数据，<strong>revers_eread()</strong>会做什么呢？在用户空间中，<strong>read()</strong>调用会在有可用数据前阻塞它。在内核中，你就必须等待。幸运的是，有一项机制用于处理这种情况，就是‘wait queues’。</p><p>想法很简单。如果当前进程需要等待某个事件，它的描述符（<strong>struct task_struct</strong>存储‘current’信息）被放进非可运行（睡眠中）状态，并添加到一个队列中。然后<strong>schedule()</strong>就被调用来选择另一个进程运行。生成事件的代码通过使用队列将等待进程放回<strong>TASK_RUNNING</strong>状态来唤醒它们。调度程序将在以后在某个地方选择它们之一。Linux有多种非可运行状态，最值得注意的是<strong>TASK_INTERRUPTIBLE</strong>（一个可以通过信号中断的睡眠）和<strong>TASK_KILLABLE</strong>（一个可被杀死的睡眠中的进程）。所有这些都应该正确处理，并等待队列为你做这些事。</p><p>一个用以存储读取等待队列头的天然场所就是结构缓冲区，所以从为它添加<strong>wait_queue_head_t read_queue</strong>字段开始。你也应该包含<strong>linux/sched.h</strong>头文件。可以使用DECLARE_WAITQUEUE()宏来静态声明一个等待队列。在我们的情况下，需要动态初始化，因此添加下面这行到<strong>buffer_alloc()</strong>：</p><pre><code>init_waitqueue_head(&amp;buf-&gt;read_queue);
</code></pre><p>我们等待可用数据；或者等待<strong>read_ptr != end</strong>条件成立。我们也想要让等待操作可以被中断（如，通过Ctrl+C）。因此，“read”方法应该像这样开始：</p><pre><code>static ssize_t reverse_read(struct file *file, char __user * out,
        size_t size, loff_t * off)
{
    struct buffer *buf = file-&gt;private_data;
    ssize_t result;
    while (buf-&gt;read_ptr == buf-&gt;end) {
        if (file-&gt;f_flags &amp; O_NONBLOCK) {
            result = -EAGAIN;
            goto out;
        }
        if (wait_event_interruptible
        (buf-&gt;read_queue, buf-&gt;read_ptr != buf-&gt;end)) {
            result = -ERESTARTSYS;
            goto out;
        }
    }
...
</code></pre><p>我们让它循环，直到有可用数据，如果没有则使用<strong>wait_event_interruptible()</strong>（它是一个宏，不是函数，这就是为什么要通过值的方式给队列传递）来等待。好吧，如果<strong>wait_event_interruptible()</strong>被中断，它返回一个非0值，这个值代表<strong>-ERESTARTSYS</strong>。这段代码意味着系统调用应该重新启动。<strong>file-&gt;f_flags</strong>检查以非阻塞模式打开的文件数：如果没有数据，返回<strong>-EAGAIN</strong>。</p><p>我们不能使用<strong>if()</strong>来替代<strong>while()</strong>，因为可能有许多进程正等待数据。当<strong>write</strong>方法唤醒它们时，调度程序以不可预知的方式选择一个来运行，因此，在这段代码有机会执行的时候，缓冲区可能再次空出。现在，我们需要将数据从<strong>buf-&gt;data</strong> 复制到用户空间。<strong>copy_to_user()</strong>内核函数就干了此事：</p><pre><code>    size = min(size, (size_t) (buf-&gt;end - buf-&gt;read_ptr));
    if (copy_to_user(out, buf-&gt;read_ptr, size)) {
        result = -EFAULT;
        goto out;
    }
</code></pre><p>如果用户空间指针错误，那么调用可能会失败；如果发生了此事，我们就返回<strong>-EFAULT</strong>。记住，不要相信任何来自内核外的事物！</p><pre><code>    buf-&gt;read_ptr += size;
    result = size;
out:
    return result;
}
</code></pre><p>为了使数据在任意块可读，需要进行简单运算。该方法返回读入的字节数，或者一个错误代码。</p><p>写方法更简短。首先，我们检查缓冲区是否有足够的空间，然后我们使用<strong>copy_from_userspace()</strong>函数来获取数据。再然后<strong>read_ptr</strong>和结束指针会被重置，并且反转存储缓冲区内容：</p><pre><code>    buf-&gt;end = buf-&gt;data + size;
    buf-&gt;read_ptr = buf-&gt;data;
    if (buf-&gt;end &gt; buf-&gt;data)
        reverse_phrase(buf-&gt;data, buf-&gt;end - 1);
</code></pre><p>这里， <strong>reverse_phrase()</strong>干了所有吃力的工作。它依赖于<strong>reverse_word()</strong>函数，该函数相当简短并且标记为内联。这是另外一个常见的优化；但是，你不能过度使用。因为过多的内联会导致内核映像徒然增大。</p><p>最后，我们需要唤醒<strong>read_queue</strong>中等待数据的进程，就跟先前讲过的那样。<strong>wake_up_interruptible()</strong>就是用来干此事的：</p><pre><code>    wake_up_interruptible(&amp;buf-&gt;read_queue);
</code></pre><p>耶！你现在已经有了一个内核模块，它至少已经编译成功了。现在，是时候来测试了。</p><h3 id="调试内核代码" tabindex="-1">调试内核代码 <a class="header-anchor" href="#调试内核代码" aria-label="Permalink to “调试内核代码”">​</a></h3><blockquote><p>或许，内核中最常见的调试方法就是打印。如果你愿意，你可以使用普通的<strong>printk()</strong> （假定使用<strong>KERN_DEBUG</strong>日志等级）。然而，那儿还有更好的办法。如果你正在写一个设备驱动，这个设备驱动有它自己的“struct device”，可以使用<strong>pr_debug()</strong>或者<strong>dev_dbg()</strong>：它们支持动态调试（<strong>dyndbg</strong>）特性，并可以根据需要启用或者禁用（请查阅<strong>Documentation/dynamic-debug-howto.txt</strong>）。对于单纯的开发消息，使用<strong>pr_devel()</strong>，除非设置了DEBUG，否则什么都不会做。要为我们的模块启用DEBUG，请添加以下行到Makefile中：</p></blockquote><blockquote><pre><code>CFLAGS_reverse.o := -DDEBUG
</code></pre><p>完了之后，使用<strong>dmesg</strong>来查看<strong>pr_debug()</strong>或<strong>pr_devel()</strong>生成的调试信息。 或者，你可以直接发送调试信息到控制台。要想这么干，你可以设置<strong>console_loglevel</strong>内核变量为8或者更大的值（<strong>echo 8 /proc/sys/kernel/printk</strong>），或者在高日志等级，如<strong>KERN_ERR</strong>，来临时打印要查询的调试信息。很自然，在发布代码前，你应该移除这样的调试声明。</p></blockquote><blockquote><p>注意内核消息出现在控制台，不要在Xterm这样的终端模拟器窗口中去查看；这也是在内核开发时，建议你不在X环境下进行的原因。</p></blockquote><h3 id="惊喜-惊喜" tabindex="-1">惊喜，惊喜！ <a class="header-anchor" href="#惊喜-惊喜" aria-label="Permalink to “惊喜，惊喜！”">​</a></h3><p>编译模块，然后加载进内核：</p><pre><code>$ make
$ sudo insmod reverse.ko buffer_size=2048
$ lsmod
reverse 2419 0
$ ls -l /dev/reverse
crw-rw-rw- 1 root root 10, 58 Feb 22 15:53 /dev/reverse
</code></pre><p>一切似乎就位。现在，要测试模块是否正常工作，我们将写一段小程序来翻转它的第一个命令行参数。<strong>main()</strong>（再三检查错误）可能看上去像这样：</p><pre><code>int fd = open(&quot;/dev/reverse&quot;, O_RDWR);
write(fd, argv[1], strlen(argv[1]));
read(fd, argv[1], strlen(argv[1]));
printf(&quot;Read: %s\\n&quot;, argv[1]);
</code></pre><p>像这样运行：</p><pre><code>$ ./test &#39;A quick brown fox jumped over the lazy dog&#39;
Read: dog lazy the over jumped fox brown quick A
</code></pre><p>它工作正常！玩得更逗一点：试试传递单个单词或者单个字母的短语，空的字符串或者是非英语字符串（如果你有这样的键盘布局设置），以及其它任何东西。</p><p>现在，让我们让事情变得更好玩一点。我们将创建两个进程，它们共享一个文件描述符（及其内核缓冲区）。其中一个会持续写入字符串到设备，而另一个将读取这些字符串。在下例中，我们使用了<strong>fork(2)</strong>系统调用，而pthreads也很好用。我也省略打开和关闭设备的代码，并在此检查代码错误（又来了）：</p><pre><code>char *phrase = &quot;A quick brown fox jumped over the lazy dog&quot;;
if (fork())
    /* Parent is the writer */
    while (1)
        write(fd, phrase, len);
else
    /* child is the reader */
    while (1) {
        read(fd, buf, len);
        printf(&quot;Read: %s\\n&quot;, buf);
}
</code></pre><p>你希望这个程序会输出什么呢？下面就是在我的笔记本上得到的东西：</p><pre><code>Read: dog lazy the over jumped fox brown quick A
Read: A kcicq brown fox jumped over the lazy dog
Read: A kciuq nworb xor jumped fox brown quick A
Read: A kciuq nworb xor jumped fox brown quick A
...
</code></pre><p>这里发生了什么呢？就像举行了一场比赛。我们认为<strong>read</strong>和<strong>write</strong>是原子操作，或者从头到尾一次执行一个指令。然而，内核确实无序并发的，随便就重新调度了<strong>reverse_phrase()</strong>函数内部某个地方运行着的写入操作的内核部分。如果在写入操作结束前就调度了<strong>read()</strong>操作呢？就会产生数据不完整的状态。这样的bug非常难以找到。但是，怎样来处理这个问题呢？</p><p>基本上，我们需要确保在写方法返回前没有<strong>read</strong>方法能被执行。如果你曾经编写过一个多线程的应用程序，你可能见过同步原语（锁），如互斥锁或者信号。Linux也有这些，但有些细微的差别。内核代码可以运行进程上下文（用户空间代码的“代表”工作，就像我们使用的方法）和终端上下文（例如，一个IRQ处理线程）。如果你已经在进程上下文中和并且你已经得到了所需的锁，你只需要简单地睡眠和重试直到成功为止。在中断上下文时你不能处于休眠状态，因此代码会在一个循环中运行直到锁可用。关联原语被称为自旋锁，但在我们的环境中，一个简单的互斥锁 —— 在特定时间内只有唯一一个进程能“占有”的对象 —— 就足够了。处于性能方面的考虑，现实的代码可能也会使用读-写信号。</p><p>锁总是保护某些数据（在我们的环境中，是一个“struct buffer”实例），而且也常常会把它们嵌入到它们所保护的结构体中。因此，我们添加一个互斥锁（‘struct mutex lock’）到“struct buffer”中。我们也必须用<strong>mutex_init()</strong>来初始化互斥锁；<strong>buffer_alloc</strong>是用来处理这件事的好地方。使用互斥锁的代码也必须包含<strong>linux/mutex.h</strong>。</p><p>互斥锁很像交通信号灯 —— 要是司机不看它和不听它的，它就没什么用。因此，在对缓冲区做操作并在操作完成时释放它之前，我们需要更新<strong>reverse_read()</strong>和<strong>reverse_write()</strong>来获取互斥锁。让我们来看看<strong>read</strong>方法 —— <strong>write</strong>的工作原理相同：</p><pre><code>static ssize_t reverse_read(struct file *file, char __user * out,
        size_t size, loff_t * off)
{
    struct buffer *buf = file-&gt;private_data;
    ssize_t result;
    if (mutex_lock_interruptible(&amp;buf-&gt;lock)) {
        result = -ERESTARTSYS;
        goto out;
}
</code></pre><p>我们在函数一开始就获取锁。<strong>mutex_lock_interruptible()</strong>要么得到互斥锁然后返回，要么让进程睡眠，直到有可用的互斥锁。就像前面一样，<strong>_interruptible</strong>后缀意味着睡眠可以由信号来中断。</p><pre><code>    while (buf-&gt;read_ptr == buf-&gt;end) {
        mutex_unlock(&amp;buf-&gt;lock);
        /* ... wait_event_interruptible() here ... */
        if (mutex_lock_interruptible(&amp;buf-&gt;lock)) {
            result = -ERESTARTSYS;
            goto out;
        }
    }
</code></pre><p>下面是我们的“等待数据”循环。当获取互斥锁时，或者发生称之为“死锁”的情境时，不应该让进程睡眠。因此，如果没有数据，我们释放互斥锁并调用<strong>wait_event_interruptible()</strong>。当它返回时，我们重新获取互斥锁并像往常一样继续：</p><pre><code>    if (copy_to_user(out, buf-&gt;read_ptr, size)) {
        result = -EFAULT;
        goto out_unlock;
    }
    ...
out_unlock:
    mutex_unlock(&amp;buf-&gt;lock);
out:
    return result;
</code></pre><p>最后，当函数结束，或者在互斥锁被获取过程中发生错误时，互斥锁被解锁。重新编译模块（别忘了重新加载），然后再次进行测试。现在你应该没发现毁坏的数据了。</p><h3 id="接下来是什么" tabindex="-1">接下来是什么？ <a class="header-anchor" href="#接下来是什么" aria-label="Permalink to “接下来是什么？”">​</a></h3><p>现在你已经尝试了一次内核黑客。我们刚刚为你揭开了这个话题的外衣，里面还有更多东西供你探索。我们的第一个模块有意识地写得简单一点，在从中学到的概念在更复杂的环境中也一样。并发、方法表、注册回调函数、使进程睡眠以及唤醒进程，这些都是内核黑客们耳熟能详的东西，而现在你已经看过了它们的运作。或许某天，你的内核代码也将被加入到主线Linux源代码树中 —— 如果真这样，请联系我们！</p><hr>`,75)),n("p",null,[e[13]||(e[13]=r("via: ",-1)),o(t,{href:"http://www.linuxvoice.com/be-a-kernel-hacker/"},{default:s(()=>[...e[12]||(e[12]=[r("http://www.linuxvoice.com/be-a-kernel-hacker/",-1)])]),_:1})]),n("p",null,[e[17]||(e[17]=r("译者：",-1)),o(t,{href:"https://github.com/GOLinux"},{default:s(()=>[...e[14]||(e[14]=[r("GOLinux",-1)])]),_:1}),e[18]||(e[18]=r()),o(t,{href:"https://github.com/disylee"},{default:s(()=>[...e[15]||(e[15]=[r("disylee",-1)])]),_:1}),e[19]||(e[19]=r(" 校对：",-1)),o(t,{href:"https://github.com/wxy"},{default:s(()=>[...e[16]||(e[16]=[r("wxy",-1)])]),_:1})]),n("p",null,[e[22]||(e[22]=r("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[20]||(e[20]=[r("LCTT",-1)])]),_:1}),e[23]||(e[23]=r(" 原创翻译，",-1)),o(t,{href:"http://linux.cn/"},{default:s(()=>[...e[21]||(e[21]=[r("Linux中国",-1)])]),_:1}),e[24]||(e[24]=r(" 荣誉推出",-1))])])}const h=g(a,[["render",d]]);export{x as __pageData,h as default};
