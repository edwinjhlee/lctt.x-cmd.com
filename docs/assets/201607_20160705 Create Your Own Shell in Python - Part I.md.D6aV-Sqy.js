import{_ as i,a0 as t,w as o,s as d,I as a,x as n,a1 as e,A as l,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"使用 Python 创建你自己的 Shell （一） | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 创建你自己的 Shell （一） | LCTT (201607) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 创建你自己的 Shell （一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 创建你自己的 Shell （一） | LCTT (201607) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201607/20160705 Create Your Own Shell in Python - Part I","title":"使用 Python 创建你自己的 Shell （一）","tag":"201607","desc":""},"relativePath":"201607/20160705 Create Your Own Shell in Python - Part I.md","filePath":"[post].md"}'),r={name:"201607/20160705 Create Your Own Shell in Python - Part I.md"};function h(u,s,k,g,y,m){const p=t("Link");return o(),d("div",null,[s[19]||(s[19]=a("h1",{id:"使用-python-创建你自己的-shell-一",tabindex:"-1"},[n("使用 Python 创建你自己的 Shell （一） "),a("a",{class:"header-anchor",href:"#使用-python-创建你自己的-shell-一","aria-label":"Permalink to “使用 Python 创建你自己的 Shell （一）”"},"​")],-1)),s[20]||(s[20]=a("p",null,[n("我很想知道一个 shell （像 bash，csh 等）内部是如何工作的。于是为了满足自己的好奇心，我使用 Python 实现了一个名为 "),a("strong",null,"yosh"),n(" （Your Own Shell）的 Shell。本文章所介绍的概念也可以应用于其他编程语言。")],-1)),a("p",null,[s[1]||(s[1]=n("（提示：你可以在",-1)),e(p,{href:"https://github.com/supasate/yosh"},{default:l(()=>[...s[0]||(s[0]=[n("这里",-1)])]),_:1}),s[2]||(s[2]=n("查找本博文使用的源代码，代码以 MIT 许可证发布。在 Mac OS X 10.11.5 上，我使用 Python 2.7.10 和 3.4.3 进行了测试。它应该可以运行在其他类 Unix 环境，比如 Linux 和 Windows 上的 Cygwin。）",-1))]),s[21]||(s[21]=c(`<p>让我们开始吧。</p><h3 id="步骤-0-项目结构" tabindex="-1">步骤 0：项目结构 <a class="header-anchor" href="#步骤-0-项目结构" aria-label="Permalink to “步骤 0：项目结构”">​</a></h3><p>对于此项目，我使用了以下的项目结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yosh_project</span></span>
<span class="line"><span>|-- yosh</span></span>
<span class="line"><span>   |-- __init__.py</span></span>
<span class="line"><span>   |-- shell.py</span></span></code></pre></div><p><code>yosh_project</code> 为项目根目录（你也可以把它简单命名为 <code>yosh</code>）。</p><p><code>yosh</code> 为包目录，且 <code>__init__.py</code> 可以使它成为与包的目录名字相同的包（如果你不用 Python 编写的话，可以忽略它。）</p><p><code>shell.py</code> 是我们主要的脚本文件。</p><h3 id="步骤-1-shell-循环" tabindex="-1">步骤 1：Shell 循环 <a class="header-anchor" href="#步骤-1-shell-循环" aria-label="Permalink to “步骤 1：Shell 循环”">​</a></h3><p>当启动一个 shell，它会显示一个命令提示符并等待你的命令输入。在接收了输入的命令并执行它之后（稍后文章会进行详细解释），你的 shell 会重新回到这里，并循环等待下一条指令。</p><p>在 <code>shell.py</code> 中，我们会以一个简单的 main 函数开始，该函数调用了 shell_loop() 函数，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def shell_loop():</span></span>
<span class="line"><span>    # Start the loop here</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    shell_loop()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div><p>接着，在 <code>shell_loop()</code> 中，为了指示循环是否继续或停止，我们使用了一个状态标志。在循环的开始，我们的 shell 将显示一个命令提示符，并等待读取命令输入。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SHELL_STATUS_RUN = 1</span></span>
<span class="line"><span>SHELL_STATUS_STOP = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def shell_loop():</span></span>
<span class="line"><span>    status = SHELL_STATUS_RUN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while status == SHELL_STATUS_RUN:</span></span>
<span class="line"><span>        ### 显示命令提示符</span></span>
<span class="line"><span>        sys.stdout.write(&#39;&gt; &#39;)</span></span>
<span class="line"><span>        sys.stdout.flush()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 读取命令输入</span></span>
<span class="line"><span>        cmd = sys.stdin.readline()</span></span></code></pre></div><p>之后，我们切分命令（tokenize）输入并进行执行（execute）（我们即将实现 <code>tokenize</code> 和 <code>execute</code> 函数）。</p><p>因此，我们的 shell_loop() 会是如下这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SHELL_STATUS_RUN = 1</span></span>
<span class="line"><span>SHELL_STATUS_STOP = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def shell_loop():</span></span>
<span class="line"><span>    status = SHELL_STATUS_RUN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while status == SHELL_STATUS_RUN:</span></span>
<span class="line"><span>        ### 显示命令提示符</span></span>
<span class="line"><span>        sys.stdout.write(&#39;&gt; &#39;)</span></span>
<span class="line"><span>        sys.stdout.flush()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 读取命令输入</span></span>
<span class="line"><span>        cmd = sys.stdin.readline()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 切分命令输入</span></span>
<span class="line"><span>        cmd_tokens = tokenize(cmd)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 执行该命令并获取新的状态</span></span>
<span class="line"><span>        status = execute(cmd_tokens)</span></span></code></pre></div><p>这就是我们整个 shell 循环。如果我们使用 <code>python shell.py</code> 启动我们的 shell，它会显示命令提示符。然而如果我们输入命令并按回车，它会抛出错误，因为我们还没定义 <code>tokenize</code> 函数。</p><p>为了退出 shell，可以尝试输入 ctrl-c。稍后我将解释如何以优雅的形式退出 shell。</p><h3 id="步骤-2-命令切分-tokenize" tabindex="-1">步骤 2：命令切分（tokenize） <a class="header-anchor" href="#步骤-2-命令切分-tokenize" aria-label="Permalink to “步骤 2：命令切分（tokenize）”">​</a></h3><p>当用户在我们的 shell 中输入命令并按下回车键，该命令将会是一个包含命令名称及其参数的长字符串。因此，我们必须切分该字符串（分割一个字符串为多个元组）。</p><p>咋一看似乎很简单。我们或许可以使用 <code>cmd.split()</code>，以空格分割输入。它对类似 <code>ls -a my_folder</code> 的命令起作用，因为它能够将命令分割为一个列表 <code>[&#39;ls&#39;, &#39;-a&#39;, &#39;my_folder&#39;]</code>，这样我们便能轻易处理它们了。</p><p>然而，也有一些类似 <code>echo &quot;Hello World&quot;</code> 或 <code>echo &#39;Hello World&#39;</code> 以单引号或双引号引用参数的情况。如果我们使用 cmd.spilt，我们将会得到一个存有 3 个标记的列表 <code>[&#39;echo&#39;, &#39;&quot;Hello&#39;, &#39;World&quot;&#39;]</code> 而不是 2 个标记的列表 <code>[&#39;echo&#39;, &#39;Hello World&#39;]</code>。</p><p>幸运的是，Python 提供了一个名为 <code>shlex</code> 的库，它能够帮助我们如魔法般地分割命令。（提示：我们也可以使用正则表达式，但它不是本文的重点。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>import shlex</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def tokenize(string):</span></span>
<span class="line"><span>    return shlex.split(string)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span></code></pre></div><p>然后我们将这些元组发送到执行进程。</p><h3 id="步骤-3-执行" tabindex="-1">步骤 3：执行 <a class="header-anchor" href="#步骤-3-执行" aria-label="Permalink to “步骤 3：执行”">​</a></h3><p>这是 shell 中核心而有趣的一部分。当 shell 执行 <code>mkdir test_dir</code> 时，到底发生了什么？（提示： <code>mkdir</code> 是一个带有 <code>test_dir</code> 参数的执行程序，用于创建一个名为 <code>test_dir</code> 的目录。）</p><p><code>execvp</code> 是这一步的首先需要的函数。在我们解释 <code>execvp</code> 所做的事之前，让我们看看它的实际效果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import os</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def execute(cmd_tokens):</span></span>
<span class="line"><span>    ### 执行命令</span></span>
<span class="line"><span>    os.execvp(cmd_tokens[0], cmd_tokens)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ### 返回状态以告知在 shell_loop 中等待下一个命令</span></span>
<span class="line"><span>    return SHELL_STATUS_RUN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span></code></pre></div><p>再次尝试运行我们的 shell，并输入 <code>mkdir test_dir</code> 命令，接着按下回车键。</p><p>在我们敲下回车键之后，问题是我们的 shell 会直接退出而不是等待下一个命令。然而，目录正确地创建了。</p><p>因此，<code>execvp</code> 实际上做了什么？</p><p><code>execvp</code> 是系统调用 <code>exec</code> 的一个变体。第一个参数是程序名字。<code>v</code> 表示第二个参数是一个程序参数列表（参数数量可变）。<code>p</code> 表示将会使用环境变量 <code>PATH</code> 搜索给定的程序名字。在我们上一次的尝试中，它将会基于我们的 <code>PATH</code> 环境变量查找<code>mkdir</code> 程序。</p><p>（还有其他 <code>exec</code> 变体，比如 execv、execvpe、execl、execlp、execlpe；你可以 google 它们获取更多的信息。）</p><p><code>exec</code> 会用即将运行的新进程替换调用进程的当前内存。在我们的例子中，我们的 shell 进程内存会被替换为 <code>mkdir</code> 程序。接着，<code>mkdir</code> 成为主进程并创建 <code>test_dir</code> 目录。最后该进程退出。</p><p>这里的重点在于<strong>我们的 shell 进程已经被 <code>mkdir</code> 进程所替换</strong>。这就是我们的 shell 消失且不会等待下一条命令的原因。</p><p>因此，我们需要其他的系统调用来解决问题：<code>fork</code>。</p><p><code>fork</code> 会分配新的内存并拷贝当前进程到一个新的进程。我们称这个新的进程为<strong>子进程</strong>，调用者进程为<strong>父进程</strong>。然后，子进程内存会被替换为被执行的程序。因此，我们的 shell，也就是父进程，可以免受内存替换的危险。</p><p>让我们看看修改的代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def execute(cmd_tokens):</span></span>
<span class="line"><span>    ### 分叉一个子 shell 进程</span></span>
<span class="line"><span>    ### 如果当前进程是子进程，其 \`pid\` 被设置为 \`0\`</span></span>
<span class="line"><span>    ### 否则当前进程是父进程的话，\`pid\` 的值</span></span>
<span class="line"><span>    ### 是其子进程的进程 ID。</span></span>
<span class="line"><span>    pid = os.fork()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if pid == 0:</span></span>
<span class="line"><span>    ### 子进程</span></span>
<span class="line"><span>        ### 用被 exec 调用的程序替换该子进程</span></span>
<span class="line"><span>        os.execvp(cmd_tokens[0], cmd_tokens)</span></span>
<span class="line"><span>    elif pid &gt; 0:</span></span>
<span class="line"><span>    ### 父进程</span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            ### 等待其子进程的响应状态（以进程 ID 来查找）</span></span>
<span class="line"><span>            wpid, status = os.waitpid(pid, 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ### 当其子进程正常退出时</span></span>
<span class="line"><span>            ### 或者其被信号中断时，结束等待状态</span></span>
<span class="line"><span>            if os.WIFEXITED(status) or os.WIFSIGNALED(status):</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ### 返回状态以告知在 shell_loop 中等待下一个命令</span></span>
<span class="line"><span>    return SHELL_STATUS_RUN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span></code></pre></div><p>当我们的父进程调用 <code>os.fork()</code> 时，你可以想象所有的源代码被拷贝到了新的子进程。此时此刻，父进程和子进程看到的是相同的代码，且并行运行着。</p><p>如果运行的代码属于子进程，<code>pid</code> 将为 <code>0</code>。否则，如果运行的代码属于父进程，<code>pid</code> 将会是子进程的进程 id。</p><p>当 <code>os.execvp</code> 在子进程中被调用时，你可以想象子进程的所有源代码被替换为正被调用程序的代码。然而父进程的代码不会被改变。</p><p>当父进程完成等待子进程退出或终止时，它会返回一个状态，指示继续 shell 循环。</p><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to “运行”">​</a></h3><p>现在，你可以尝试运行我们的 shell 并输入 <code>mkdir test_dir2</code>。它应该可以正确执行。我们的主 shell 进程仍然存在并等待下一条命令。尝试执行 <code>ls</code>，你可以看到已创建的目录。</p><p>但是，这里仍有一些问题。</p><p>第一，尝试执行 <code>cd test_dir2</code>，接着执行 <code>ls</code>。它应该会进入到一个空的 <code>test_dir2</code> 目录。然而，你将会看到目录并没有变为 <code>test_dir2</code>。</p><p>第二，我们仍然没有办法优雅地退出我们的 shell。</p>`,49)),a("p",null,[s[4]||(s[4]=n("我们将会在 ",-1)),e(p,{href:"https://hackercollider.com/articles/2016/07/06/create-your-own-shell-in-python-part-2/"},{default:l(()=>[...s[3]||(s[3]=[n("第二部分",-1)])]),_:1}),s[5]||(s[5]=n(" 解决诸如此类的问题。",-1))]),s[22]||(s[22]=a("hr",null,null,-1)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),e(p,{href:"https://hackercollider.com/articles/2016/07/05/create-your-own-shell-in-python-part-1/"},{default:l(()=>[...s[6]||(s[6]=[n("https://hackercollider.com/articles/2016/07/05/create-your-own-shell-in-python-part-1/",-1)])]),_:1})]),a("p",null,[s[11]||(s[11]=n("作者：",-1)),e(p,{href:"https://disqus.com/by/supasate_choochaisri/"},{default:l(()=>[...s[8]||(s[8]=[n("Supasate Choochaisri",-1)])]),_:1}),s[12]||(s[12]=n(" 译者：",-1)),e(p,{href:"https://github.com/cposture"},{default:l(()=>[...s[9]||(s[9]=[n("cposture",-1)])]),_:1}),s[13]||(s[13]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[10]||(s[10]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[15]||(s[15]=[n("Linux中国",-1)])]),_:1}),s[18]||(s[18]=n(" 荣誉推出",-1))])])}const S=i(r,[["render",h]]);export{_ as __pageData,S as default};
