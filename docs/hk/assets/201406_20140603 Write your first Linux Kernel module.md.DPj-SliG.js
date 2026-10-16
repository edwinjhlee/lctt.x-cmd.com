import{_ as g,a0 as u,w as l,s as p,ao as i,I as n,x as r,a1 as o,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"黑客內核：編寫屬於你的第一個Linux內核模組 | LCTT x X-CMD","titleTemplate":false,"description":"黑客內核：編寫屬於你的第一個Linux內核模組 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"黑客內核：編寫屬於你的第一個Linux內核模組 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"黑客內核：編寫屬於你的第一個Linux內核模組 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140603 Write your first Linux Kernel module","title":"黑客內核：編寫屬於你的第一個Linux內核模組","tag":"201406","desc":""},"relativePath":"201406/20140603 Write your first Linux Kernel module.md","filePath":"[post].md"}'),a={name:"201406/20140603 Write your first Linux Kernel module.md"};function d(f,e,_,b,c,m){const t=u("Link");return l(),p("div",null,[e[25]||(e[25]=i(`<h1 id="黑客內核-編寫屬於你的第一個linux內核模組" tabindex="-1">黑客內核：編寫屬於你的第一個Linux內核模組 <a class="header-anchor" href="#黑客內核-編寫屬於你的第一個linux內核模組" aria-label="Permalink to “黑客內核：編寫屬於你的第一個Linux內核模組”">​</a></h1><blockquote><p>曾經多少次想要在內核遊蕩？曾經多少次茫然不知方向？你不要再對着它迷惘，讓我們指引你走向前方……</p></blockquote><p>內核編程常常看起來像是黑魔法，而在亞瑟 C 克拉克的眼中，它八成就是了。Linux內核和它的用户空間是大不相同的：拋開漫不經心，你必須小心翼翼，因為你編程中的一個bug就會影響到整個系統。浮點運算做起來可不容易，堆棧固定而狹小，而你寫的代碼總是異步的，因此你需要想想併發會導致什麼。而除了所有這一切之外，Linux內核只是一個很大的、很複雜的C程序，它對每個人開放，任何人都去讀它、學習它並改進它，而你也可以是其中之一。</p><p>學習內核編程的最簡單的方式也許就是寫個內核模組：一段可以動態加載進內核的代碼。模組所能做的事是有限的——例如，他們不能在類似進程描述符這樣的公共數據結構中增減字段（LCTT譯註：可能會破壞整個內核及系統的功能）。但是，在其它方面，他們是成熟的內核級的代碼，可以在需要時隨時編譯進內核（這樣就可以摒棄所有的限制了）。完全可以在Linux源代碼樹以外來開發並編譯一個模組（這並不奇怪，它稱為樹外開發），如果你只是想稍微玩玩，而並不想提交修改以包含到主線內核中去，這樣的方式是很方便的。</p><p>在本教程中，我們將開發一個簡單的內核模組用以創建一個<strong>/dev/reverse</strong>設備。寫入該設備的字符串將以相反字序的方式讀回（“Hello World”讀成“World Hello”）。這是一個很受歡迎的程序員面試難題，當你利用自己的能力在內核級別實現這個功能時，可以使你得到一些加分。在開始前，有一句忠告：你的模組中的一個bug就會導致系統崩潰（雖然可能性不大，但還是有可能的）和數據丟失。在開始前，請確保你已經將重要數據備份，或者，採用一種更好的方式，在虛擬機中進行試驗。</p><h3 id="儘可能不要用root身份" tabindex="-1">儘可能不要用root身份 <a class="header-anchor" href="#儘可能不要用root身份" aria-label="Permalink to “儘可能不要用root身份”">​</a></h3><blockquote><p>默認情況下，<strong>/dev/reverse</strong>只有root可以使用，因此你只能使用<strong>sudo</strong>來運行你的測試程序。要解決該限制，可以創建一個包含以下內容的<strong>/lib/udev/rules.d/99-reverse.rules</strong>文件：</p><pre><code>SUBSYSTEM==&quot;misc&quot;, KERNEL==&quot;reverse&quot;, MODE=&quot;0666&quot;
</code></pre><p>別忘了重新插入模組。讓非root用户訪問設備節點往往不是一個好主意，但是在開發其間卻是十分有用的。這並不是説以root身份運行二進制測試文件也不是個好主意。</p></blockquote><h4 id="模組的構造" tabindex="-1">模組的構造 <a class="header-anchor" href="#模組的構造" aria-label="Permalink to “模組的構造”">​</a></h4><p>由於大多數的Linux內核模組是用C寫的（除了底層的特定於體系結構的部分），所以推薦你將你的模組以單一文件形式保存（例如，reverse.c）。我們已經把完整的源代碼放在GitHub上——這裏我們將看其中的一些片段。開始時，我們先要包含一些常見的文件頭，並用預定義的宏來描述模組：</p><pre><code>#include &lt;linux/init.h&gt;
#include &lt;linux/kernel.h&gt;
#include &lt;linux/module.h&gt;

MODULE_LICENSE(&quot;GPL&quot;);
MODULE_AUTHOR(&quot;Valentine Sinitsyn &lt;valentine.sinitsyn@gmail.com&gt;&quot;);
MODULE_DESCRIPTION(&quot;In-kernel phrase reverser&quot;);
</code></pre><p>這裏一切都直接明瞭，除了<strong>MODULE_LICENSE()</strong>：它不僅僅是一個標記。內核堅定地支持GPL兼容代碼，因此如果你把許可證設置為其它非GPL兼容的（如，“Proprietary”[專利]），某些特定的內核功能將在你的模組中不可用。</p><h3 id="什麼時候不該寫內核模組" tabindex="-1">什麼時候不該寫內核模組 <a class="header-anchor" href="#什麼時候不該寫內核模組" aria-label="Permalink to “什麼時候不該寫內核模組”">​</a></h3><blockquote><p>內核編程很有趣，但是在現實項目中寫（尤其是調試）內核代碼要求特定的技巧。通常來講，在沒有其它方式可以解決你的問題時，你才應該在內核級別解決它。以下情形中，可能你在用户空間中解決它更好：</p></blockquote>`,13)),n("blockquote",null,[n("ul",null,[n("li",null,[e[1]||(e[1]=r("你要開發一個USB驅動 —— 請查看",-1)),o(t,{href:"http://www.libusb.org/"},{default:s(()=>[...e[0]||(e[0]=[r("libusb",-1)])]),_:1}),e[2]||(e[2]=r("。",-1))]),n("li",null,[e[4]||(e[4]=r("你要開發一個文件系統 —— 試試",-1)),o(t,{href:"http://fuse.sf.net/"},{default:s(()=>[...e[3]||(e[3]=[r("FUSE",-1)])]),_:1}),e[5]||(e[5]=r("。",-1))]),n("li",null,[e[7]||(e[7]=r("你在擴展Netfilter —— 那麼",-1)),o(t,{href:"http://www.linuxvoice.com/be-a-kernel-hacker/www.netfilter.org/projects/libnetfilter_queue"},{default:s(()=>[...e[6]||(e[6]=[r("libnetfilter_queue",-1)])]),_:1}),e[8]||(e[8]=r("對你有所幫助。",-1))])])]),e[26]||(e[26]=i(`<blockquote><p>通常，內核裏面代碼的性能會更好，但是對於許多項目而言，這點性能丟失並不嚴重。</p></blockquote><p>由於內核編程總是異步的，沒有一個<strong>main()</strong>函數來讓Linux順序執行你的模組。取而代之的是，你要為各種事件提供回調函數，像這個：</p><pre><code>static int __init reverse_init(void)
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
</code></pre><p>這裏，我們定義的函數被稱為模組的插入和刪除。只有第一個的插入函數是必要的。目前，它們只是打印消息到內核環緩衝區（可以在用户空間通過<strong>dmesg</strong>命令訪問）；<strong>KERN_INFO</strong>是日誌級別（注意，沒有逗號）。<strong>__init</strong>和<strong>__exit</strong>是屬性 —— 聯結到函數（或者變量）的元數據片。屬性在用户空間的C代碼中是很罕見的，但是內核中卻很普遍。所有標記為<strong>__init</strong>的，會在初始化後釋放內存以供重用（還記得那條過去內核的那條“Freeing unused kernel memory…[釋放未使用的內核內存……]”信息嗎？）。<strong>__exit</strong>表明，當代碼被靜態構建進內核時，該函數可以安全地優化了，不需要清理收尾。最後，<strong>module_init()</strong>和<strong>module_exit()</strong>這兩個宏將<strong>reverse_init()</strong>和<strong>reverse_exit()</strong>函數設置成為我們模組的生命週期回調函數。實際的函數名稱並不重要，你可以稱它們為<strong>init()</strong>和<strong>exit()</strong>，或者<strong>start()</strong>和<strong>stop()</strong>，你想叫什麼就叫什麼吧。他們都是靜態聲明，你在外部模組是看不到的。事實上，內核中的任何函數都是不可見的，除非明確地被導出。然而，在內核程序員中，給你的函數加上模組名前綴是約定俗成的。</p><p>這些都是些基本概念 - 讓我們來做更多有趣的事情吧。模組可以接收參數，就像這樣：</p><pre><code># modprobe foo bar=1
</code></pre><p><strong>modinfo</strong>命令顯示了模組接受的所有參數，而這些也可以在<strong>/sys/module//parameters</strong>下作為文件使用。我們的模組需要一個緩衝區來存儲參數 —— 讓我們把這大小設置為用户可配置。在<strong>MODULE_DESCRIPTION()</strong>下添加如下三行：</p><pre><code>static unsigned long buffer_size = 8192;
module_param(buffer_size, ulong, (S_IRUSR | S_IRGRP | S_IROTH));
MODULE_PARM_DESC(buffer_size, &quot;Internal buffer size&quot;);
</code></pre><p>這兒，我們定義了一個變量來存儲該值，封裝成一個參數，並通過sysfs來讓所有人可讀。這個參數的描述（最後一行）出現在modinfo的輸出中。</p><p>由於用户可以直接設置<strong>buffer_size</strong>，我們需要在<strong>reverse_init()</strong>來清除無效取值。你總該檢查來自內核之外的數據 —— 如果你不這麼做，你就是將自己置身於內核異常或安全漏洞之中。</p><pre><code>static int __init reverse_init()
{
    if (!buffer_size)
        return -1;
    printk(KERN_INFO
        &quot;reverse device has been registered, buffer size is %lu bytes\\n&quot;,
        buffer_size);
    return 0;
}
</code></pre><p>來自模組初始化函數的非0返回值意味着模組執行失敗。</p><h3 id="導航" tabindex="-1">導航 <a class="header-anchor" href="#導航" aria-label="Permalink to “導航”">​</a></h3><blockquote><p>但你開發模組時，Linux內核就是你所需一切的源頭。然而，它相當大，你可能在查找你所要的內容時會有困難。幸運的是，在龐大的代碼庫面前，有許多工具使這個過程變得簡單。首先，是Cscope —— 在終端中運行的一個比較經典的工具。你所要做的，就是在內核源代碼的頂級目錄中運行<strong>make cscope &amp;&amp; cscope</strong>。Cscope和Vim以及Emacs整合得很好，因此你可以在你最喜愛的編輯器中使用它。</p></blockquote>`,14)),n("blockquote",null,[n("p",null,[e[10]||(e[10]=r("如果基於終端的工具不是你的最愛，那麼就訪問",-1)),o(t,{href:"http://lxr.free-electrons.com/"},{default:s(()=>[...e[9]||(e[9]=[r("http://lxr.free-electrons.com",-1)])]),_:1}),e[11]||(e[11]=r("吧。它是一個基於web的內核導航工具，即使它的功能沒有Cscope來得多（例如，你不能方便地找到函數的用法），但它仍然提供了足夠多的快速查詢功能。",-1))])]),e[27]||(e[27]=i(`<p>現在是時候來編譯模組了。你需要你正在運行的內核版本頭文件（<strong>linux-headers</strong>，或者等同的軟件包）和<strong>build-essential</strong>（或者類似的包）。接下來，該創建一個標準的Makefile模板：</p><pre><code>obj-m += reverse.o
all:
    make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
    make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
</code></pre><p>現在，調用<strong>make</strong>來構建你的第一個模組。如果你輸入的都正確，在當前目錄內會找到reverse.ko文件。使用<strong>sudo insmod reverse.ko</strong>插入內核模組，然後運行如下命令：</p><pre><code>$ dmesg | tail -1
[ 5905.042081] reverse device has been registered, buffer size is 8192 bytes
</code></pre><p>恭喜了！然而，目前這一行還只是假象而已 —— 還沒有設備節點呢。讓我們來搞定它。</p><h4 id="混雜設備" tabindex="-1">混雜設備 <a class="header-anchor" href="#混雜設備" aria-label="Permalink to “混雜設備”">​</a></h4><p>在Linux中，有一種特殊的字符設備類型，叫做“混雜設備”（或者簡稱為“misc”）。它是專為單一接入點的小型設備驅動而設計的，而這正是我們所需要的。所有混雜設備共享同一個主設備號（10），因此一個驅動(<strong>drivers/char/misc.c</strong>）就可以查看它們所有設備了，而這些設備用次設備號來區分。從其他意義來説，它們只是普通字符設備。</p><p>要為該設備註冊一個次設備號（以及一個接入點），你需要聲明<strong>struct misc_device</strong>，填上所有字段（注意語法），然後使用指向該結構的指針作為參數來調用<strong>misc_register()</strong>。為此，你也需要包含<strong>linux/miscdevice.h</strong>頭文件：</p><pre><code>static struct miscdevice reverse_misc_device = {
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
</code></pre><p>這兒，我們為名為“reverse”的設備請求一個第一個可用的（動態的）次設備號；省略號表明我們之前已經見過的省略的代碼。別忘了在模組卸下後註銷掉該設備。</p><pre><code>static void __exit reverse_exit(void)
{
    misc_deregister(&amp;reverse_misc_device);
    ...
}
</code></pre><p>‘fops’字段存儲了一個指針，指向一個<strong>file_operations</strong>結構（在Linux/fs.h中聲明），而這正是我們模組的接入點。<strong>reverse_fops</strong>定義如下：</p><pre><code>static struct file_operations reverse_fops = {
    .owner = THIS_MODULE,
    .open = reverse_open,
    ...
    .llseek = noop_llseek
};
</code></pre><p>另外，<strong>reverse_fops</strong>包含了一系列回調函數（也稱之為方法），當用户空間代碼打開一個設備，讀寫或者關閉文件描述符時，就會執行。如果你要忽略這些回調，可以指定一個明確的回調函數來替代。這就是為什麼我們將<strong>llseek</strong>設置為<strong>noop_llseek()</strong>，（顧名思義）它什麼都不幹。這個默認實現改變了一個文件指針，而且我們現在並不需要我們的設備可以尋址（這是今天留給你們的家庭作業）。</p><h4 id="關閉和打開" tabindex="-1">關閉和打開 <a class="header-anchor" href="#關閉和打開" aria-label="Permalink to “關閉和打開”">​</a></h4><p>讓我們來實現該方法。我們將給每個打開的文件描述符分配一個新的緩衝區，並在它關閉時釋放。這實際上並不安全：如果一個用户空間應用程序泄漏了描述符（也許是故意的），它就會霸佔RAM，並導致系統不可用。在現實世界中，你總得考慮到這些可能性。但在本教程中，這種方法不要緊。</p><p>我們需要一個結構函數來描述緩衝區。內核提供了許多常規的數據結構：鏈接列表（雙聯的），哈希表，樹等等之類。不過，緩衝區常常從頭設計。我們將調用我們的“struct buffer”：</p><pre><code>struct buffer {
    char *data, *end, *read_ptr;
    unsigned long size;
};
</code></pre><p><strong>data</strong>是該緩衝區存儲的一個指向字符串的指針，而<strong>end</strong>指向字符串結尾後的第一個字節。<strong>read_ptr</strong>是<strong>read()</strong>開始讀取數據的地方。緩衝區的size是為了保證完整性而存儲的 —— 目前，我們還沒有使用該區域。你不能假設使用你結構體的用户會正確地初始化所有這些東西，所以最好在函數中封裝緩衝區的分配和收回。它們通常命名為<strong>buffer_alloc()</strong>和<strong>buffer_free()</strong>。</p><p>static struct buffer *buffer_alloc(unsigned long size) { struct buffer *buf; buf = kzalloc(sizeof(*buf), GFP_KERNEL); if (unlikely(!buf)) goto out; ... out: return buf; }</p><p>內核內存使用<strong>kmalloc()</strong>來分配，並使用<strong>kfree()</strong>來釋放；<strong>kzalloc()</strong>的風格是將內存設置為全零。不同於標準的<strong>malloc()</strong>，它的內核對應部分收到的標誌指定了第二個參數中請求的內存類型。這裏，<strong>GFP_KERNEL</strong>是説我們需要一個普通的內核內存（不是在DMA或高內存區中）以及如果需要的話函數可以睡眠（重新調度進程）。<strong>sizeof(*buf)</strong>是一種常見的方式，它用來獲取可通過指針訪問的結構體的大小。</p><p>你應該隨時檢查<strong>kmalloc()</strong>的返回值：訪問NULL指針將導致內核異常。同時也需要注意<strong>unlikely()</strong>宏的使用。它（及其相對宏<strong>likely()</strong>）被廣泛用於內核中，用於表明條件幾乎總是真的（或假的）。它不會影響到控制流程，但是能幫助現代處理器通過分支預測技術來提升性能。</p><p>最後，注意<strong>goto</strong>語句。它們常常為認為是邪惡的，但是，Linux內核（以及一些其它系統軟件）採用它們來實施集中式的函數退出。這樣的結果是減少嵌套深度，使代碼更具可讀性，而且非常像更高級語言中的<strong>try-catch</strong>區塊。</p><p>有了<strong>buffer_alloc()</strong>和<strong>buffer_free()</strong>，<strong>open</strong>和<strong>close</strong>方法就變得很簡單了。</p><pre><code>static int reverse_open(struct inode *inode, struct file *file)
{
    int err = 0;
    file-&gt;private_data = buffer_alloc(buffer_size);
    ...
    return err;
}
</code></pre><p><strong>struct file</strong>是一個標準的內核數據結構，用以存儲打開的文件的信息，如當前文件位置（<strong>file-&gt;f_pos</strong>)、標誌(<strong>file-&gt;f_flags</strong>），或者打開模式（<strong>file-&gt;f_mode</strong>)等。另外一個字段<strong>file-&gt;privatedata</strong>用於關聯文件到一些專有數據，它的類型是void *，而且它在文件擁有者以外，對內核不透明。我們將一個緩衝區存儲在那裏。</p><p>如果緩衝區分配失敗，我們通過返回否定值（<strong>-ENOMEM</strong>）來為調用的用户空間代碼標明。一個C庫中調用的<strong>open(2)</strong>系統調用(如 <strong>glibc</strong>)將會檢測這個並適當地設置<strong>errno</strong> 。</p><h4 id="學習如何讀和寫" tabindex="-1">學習如何讀和寫 <a class="header-anchor" href="#學習如何讀和寫" aria-label="Permalink to “學習如何讀和寫”">​</a></h4><p>“read”和“write”方法是真正完成工作的地方。當數據寫入到緩衝區時，我們放棄之前的內容和反向地存儲該字段，不需要任何臨時存儲。<strong>read</strong>方法僅僅是從內核緩衝區複製數據到用户空間。但是如果緩衝區還沒有數據，<strong>revers_eread()</strong>會做什麼呢？在用户空間中，<strong>read()</strong>調用會在有可用數據前阻塞它。在內核中，你就必須等待。幸運的是，有一項機制用於處理這種情況，就是‘wait queues’。</p><p>想法很簡單。如果當前進程需要等待某個事件，它的描述符（<strong>struct task_struct</strong>存儲‘current’信息）被放進非可運行（睡眠中）狀態，並添加到一個隊列中。然後<strong>schedule()</strong>就被調用來選擇另一個進程運行。生成事件的代碼通過使用隊列將等待進程放回<strong>TASK_RUNNING</strong>狀態來喚醒它們。調度程序將在以後在某個地方選擇它們之一。Linux有多種非可運行狀態，最值得注意的是<strong>TASK_INTERRUPTIBLE</strong>（一個可以通過信號中斷的睡眠）和<strong>TASK_KILLABLE</strong>（一個可被殺死的睡眠中的進程）。所有這些都應該正確處理，並等待隊列為你做這些事。</p><p>一個用以存儲讀取等待隊列頭的天然場所就是結構緩衝區，所以從為它添加<strong>wait_queue_head_t read_queue</strong>字段開始。你也應該包含<strong>linux/sched.h</strong>頭文件。可以使用DECLARE_WAITQUEUE()宏來靜態聲明一個等待隊列。在我們的情況下，需要動態初始化，因此添加下面這行到<strong>buffer_alloc()</strong>：</p><pre><code>init_waitqueue_head(&amp;buf-&gt;read_queue);
</code></pre><p>我們等待可用數據；或者等待<strong>read_ptr != end</strong>條件成立。我們也想要讓等待操作可以被中斷（如，通過Ctrl+C）。因此，“read”方法應該像這樣開始：</p><pre><code>static ssize_t reverse_read(struct file *file, char __user * out,
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
</code></pre><p>我們讓它循環，直到有可用數據，如果沒有則使用<strong>wait_event_interruptible()</strong>（它是一個宏，不是函數，這就是為什麼要通過值的方式給隊列傳遞）來等待。好吧，如果<strong>wait_event_interruptible()</strong>被中斷，它返回一個非0值，這個值代表<strong>-ERESTARTSYS</strong>。這段代碼意味着系統調用應該重新啓動。<strong>file-&gt;f_flags</strong>檢查以非阻塞模式打開的文件數：如果沒有數據，返回<strong>-EAGAIN</strong>。</p><p>我們不能使用<strong>if()</strong>來替代<strong>while()</strong>，因為可能有許多進程正等待數據。當<strong>write</strong>方法喚醒它們時，調度程序以不可預知的方式選擇一個來運行，因此，在這段代碼有機會執行的時候，緩衝區可能再次空出。現在，我們需要將數據從<strong>buf-&gt;data</strong> 複製到用户空間。<strong>copy_to_user()</strong>內核函數就幹了此事：</p><pre><code>    size = min(size, (size_t) (buf-&gt;end - buf-&gt;read_ptr));
    if (copy_to_user(out, buf-&gt;read_ptr, size)) {
        result = -EFAULT;
        goto out;
    }
</code></pre><p>如果用户空間指針錯誤，那麼調用可能會失敗；如果發生了此事，我們就返回<strong>-EFAULT</strong>。記住，不要相信任何來自內核外的事物！</p><pre><code>    buf-&gt;read_ptr += size;
    result = size;
out:
    return result;
}
</code></pre><p>為了使數據在任意塊可讀，需要進行簡單運算。該方法返回讀入的字節數，或者一個錯誤代碼。</p><p>寫方法更簡短。首先，我們檢查緩衝區是否有足夠的空間，然後我們使用<strong>copy_from_userspace()</strong>函數來獲取數據。再然後<strong>read_ptr</strong>和結束指針會被重置，並且反轉存儲緩衝區內容：</p><pre><code>    buf-&gt;end = buf-&gt;data + size;
    buf-&gt;read_ptr = buf-&gt;data;
    if (buf-&gt;end &gt; buf-&gt;data)
        reverse_phrase(buf-&gt;data, buf-&gt;end - 1);
</code></pre><p>這裏， <strong>reverse_phrase()</strong>幹了所有吃力的工作。它依賴於<strong>reverse_word()</strong>函數，該函數相當簡短並且標記為內聯。這是另外一個常見的優化；但是，你不能過度使用。因為過多的內聯會導致內核映像徒然增大。</p><p>最後，我們需要喚醒<strong>read_queue</strong>中等待數據的進程，就跟先前講過的那樣。<strong>wake_up_interruptible()</strong>就是用來幹此事的：</p><pre><code>    wake_up_interruptible(&amp;buf-&gt;read_queue);
</code></pre><p>耶！你現在已經有了一個內核模組，它至少已經編譯成功了。現在，是時候來測試了。</p><h3 id="調試內核代碼" tabindex="-1">調試內核代碼 <a class="header-anchor" href="#調試內核代碼" aria-label="Permalink to “調試內核代碼”">​</a></h3><blockquote><p>或許，內核中最常見的調試方法就是打印。如果你願意，你可以使用普通的<strong>printk()</strong> （假定使用<strong>KERN_DEBUG</strong>日誌等級）。然而，那兒還有更好的辦法。如果你正在寫一個設備驅動，這個設備驅動有它自己的“struct device”，可以使用<strong>pr_debug()</strong>或者<strong>dev_dbg()</strong>：它們支持動態調試（<strong>dyndbg</strong>）特性，並可以根據需要啓用或者禁用（請查閲<strong>Documentation/dynamic-debug-howto.txt</strong>）。對於單純的開發消息，使用<strong>pr_devel()</strong>，除非設置了DEBUG，否則什麼都不會做。要為我們的模組啓用DEBUG，請添加以下行到Makefile中：</p></blockquote><blockquote><pre><code>CFLAGS_reverse.o := -DDEBUG
</code></pre><p>完了之後，使用<strong>dmesg</strong>來查看<strong>pr_debug()</strong>或<strong>pr_devel()</strong>生成的調試信息。 或者，你可以直接發送調試信息到控制台。要想這麼幹，你可以設置<strong>console_loglevel</strong>內核變量為8或者更大的值（<strong>echo 8 /proc/sys/kernel/printk</strong>），或者在高日誌等級，如<strong>KERN_ERR</strong>，來臨時打印要查詢的調試信息。很自然，在發佈代碼前，你應該移除這樣的調試聲明。</p></blockquote><blockquote><p>注意內核消息出現在控制台，不要在Xterm這樣的終端模擬器窗口中去查看；這也是在內核開發時，建議你不在X環境下進行的原因。</p></blockquote><h3 id="驚喜-驚喜" tabindex="-1">驚喜，驚喜！ <a class="header-anchor" href="#驚喜-驚喜" aria-label="Permalink to “驚喜，驚喜！”">​</a></h3><p>編譯模組，然後加載進內核：</p><pre><code>$ make
$ sudo insmod reverse.ko buffer_size=2048
$ lsmod
reverse 2419 0
$ ls -l /dev/reverse
crw-rw-rw- 1 root root 10, 58 Feb 22 15:53 /dev/reverse
</code></pre><p>一切似乎就位。現在，要測試模組是否正常工作，我們將寫一段小程序來翻轉它的第一個命令列參數。<strong>main()</strong>（再三檢查錯誤）可能看上去像這樣：</p><pre><code>int fd = open(&quot;/dev/reverse&quot;, O_RDWR);
write(fd, argv[1], strlen(argv[1]));
read(fd, argv[1], strlen(argv[1]));
printf(&quot;Read: %s\\n&quot;, argv[1]);
</code></pre><p>像這樣運行：</p><pre><code>$ ./test &#39;A quick brown fox jumped over the lazy dog&#39;
Read: dog lazy the over jumped fox brown quick A
</code></pre><p>它工作正常！玩得更逗一點：試試傳遞單個單詞或者單個字母的短語，空的字符串或者是非英語字符串（如果你有這樣的鍵盤佈局設置），以及其它任何東西。</p><p>現在，讓我們讓事情變得更好玩一點。我們將創建兩個進程，它們共享一個文件描述符（及其內核緩衝區）。其中一個會持續寫入字符串到設備，而另一個將讀取這些字符串。在下例中，我們使用了<strong>fork(2)</strong>系統調用，而pthreads也很好用。我也省略打開和關閉設備的代碼，並在此檢查代碼錯誤（又來了）：</p><pre><code>char *phrase = &quot;A quick brown fox jumped over the lazy dog&quot;;
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
</code></pre><p>你希望這個程序會輸出什麼呢？下面就是在我的筆記本上得到的東西：</p><pre><code>Read: dog lazy the over jumped fox brown quick A
Read: A kcicq brown fox jumped over the lazy dog
Read: A kciuq nworb xor jumped fox brown quick A
Read: A kciuq nworb xor jumped fox brown quick A
...
</code></pre><p>這裏發生了什麼呢？就像舉行了一場比賽。我們認為<strong>read</strong>和<strong>write</strong>是原子操作，或者從頭到尾一次執行一個指令。然而，內核確實無序併發的，隨便就重新調度了<strong>reverse_phrase()</strong>函數內部某個地方運行着的寫入操作的內核部分。如果在寫入操作結束前就調度了<strong>read()</strong>操作呢？就會產生數據不完整的狀態。這樣的bug非常難以找到。但是，怎樣來處理這個問題呢？</p><p>基本上，我們需要確保在寫方法返回前沒有<strong>read</strong>方法能被執行。如果你曾經編寫過一個多線程的應用程序，你可能見過同步原語（鎖），如互斥鎖或者信號。Linux也有這些，但有些細微的差別。內核代碼可以運行進程上下文（用户空間代碼的“代表”工作，就像我們使用的方法）和終端上下文（例如，一個IRQ處理線程）。如果你已經在進程上下文中和並且你已經得到了所需的鎖，你只需要簡單地睡眠和重試直到成功為止。在中斷上下文時你不能處於休眠狀態，因此代碼會在一個循環中運行直到鎖可用。關聯原語被稱為自旋鎖，但在我們的環境中，一個簡單的互斥鎖 —— 在特定時間內只有唯一一個進程能“佔有”的對象 —— 就足夠了。處於性能方面的考慮，現實的代碼可能也會使用讀-寫信號。</p><p>鎖總是保護某些數據（在我們的環境中，是一個“struct buffer”實例），而且也常常會把它們嵌入到它們所保護的結構體中。因此，我們添加一個互斥鎖（‘struct mutex lock’）到“struct buffer”中。我們也必須用<strong>mutex_init()</strong>來初始化互斥鎖；<strong>buffer_alloc</strong>是用來處理這件事的好地方。使用互斥鎖的代碼也必須包含<strong>linux/mutex.h</strong>。</p><p>互斥鎖很像交通信號燈 —— 要是司機不看它和不聽它的，它就沒什麼用。因此，在對緩衝區做操作並在操作完成時釋放它之前，我們需要更新<strong>reverse_read()</strong>和<strong>reverse_write()</strong>來獲取互斥鎖。讓我們來看看<strong>read</strong>方法 —— <strong>write</strong>的工作原理相同：</p><pre><code>static ssize_t reverse_read(struct file *file, char __user * out,
        size_t size, loff_t * off)
{
    struct buffer *buf = file-&gt;private_data;
    ssize_t result;
    if (mutex_lock_interruptible(&amp;buf-&gt;lock)) {
        result = -ERESTARTSYS;
        goto out;
}
</code></pre><p>我們在函數一開始就獲取鎖。<strong>mutex_lock_interruptible()</strong>要麼得到互斥鎖然後返回，要麼讓進程睡眠，直到有可用的互斥鎖。就像前面一樣，<strong>_interruptible</strong>後綴意味着睡眠可以由信號來中斷。</p><pre><code>    while (buf-&gt;read_ptr == buf-&gt;end) {
        mutex_unlock(&amp;buf-&gt;lock);
        /* ... wait_event_interruptible() here ... */
        if (mutex_lock_interruptible(&amp;buf-&gt;lock)) {
            result = -ERESTARTSYS;
            goto out;
        }
    }
</code></pre><p>下面是我們的“等待數據”循環。當獲取互斥鎖時，或者發生稱之為“死鎖”的情境時，不應該讓進程睡眠。因此，如果沒有數據，我們釋放互斥鎖並調用<strong>wait_event_interruptible()</strong>。當它返回時，我們重新獲取互斥鎖並像往常一樣繼續：</p><pre><code>    if (copy_to_user(out, buf-&gt;read_ptr, size)) {
        result = -EFAULT;
        goto out_unlock;
    }
    ...
out_unlock:
    mutex_unlock(&amp;buf-&gt;lock);
out:
    return result;
</code></pre><p>最後，當函數結束，或者在互斥鎖被獲取過程中發生錯誤時，互斥鎖被解鎖。重新編譯模組（別忘了重新加載），然後再次進行測試。現在你應該沒發現毀壞的數據了。</p><h3 id="接下來是什麼" tabindex="-1">接下來是什麼？ <a class="header-anchor" href="#接下來是什麼" aria-label="Permalink to “接下來是什麼？”">​</a></h3><p>現在你已經嘗試了一次內核黑客。我們剛剛為你揭開了這個話題的外衣，裏面還有更多東西供你探索。我們的第一個模組有意識地寫得簡單一點，在從中學到的概念在更復雜的環境中也一樣。併發、方法表、註冊回調函數、使進程睡眠以及喚醒進程，這些都是內核黑客們耳熟能詳的東西，而現在你已經看過了它們的運作。或許某天，你的內核代碼也將被加入到主線Linux源代碼樹中 —— 如果真這樣，請聯繫我們！</p><hr>`,75)),n("p",null,[e[13]||(e[13]=r("via: ",-1)),o(t,{href:"http://www.linuxvoice.com/be-a-kernel-hacker/"},{default:s(()=>[...e[12]||(e[12]=[r("http://www.linuxvoice.com/be-a-kernel-hacker/",-1)])]),_:1})]),n("p",null,[e[17]||(e[17]=r("譯者：",-1)),o(t,{href:"https://github.com/GOLinux"},{default:s(()=>[...e[14]||(e[14]=[r("GOLinux",-1)])]),_:1}),e[18]||(e[18]=r()),o(t,{href:"https://github.com/disylee"},{default:s(()=>[...e[15]||(e[15]=[r("disylee",-1)])]),_:1}),e[19]||(e[19]=r(" 校對：",-1)),o(t,{href:"https://github.com/wxy"},{default:s(()=>[...e[16]||(e[16]=[r("wxy",-1)])]),_:1})]),n("p",null,[e[22]||(e[22]=r("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[20]||(e[20]=[r("LCTT",-1)])]),_:1}),e[23]||(e[23]=r(" 原創翻譯，",-1)),o(t,{href:"http://linux.cn/"},{default:s(()=>[...e[21]||(e[21]=[r("Linux中國",-1)])]),_:1}),e[24]||(e[24]=r(" 榮譽推出",-1))])])}const h=g(a,[["render",d]]);export{x as __pageData,h as default};
