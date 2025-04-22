import{_ as t,W as o,s as u,u as r,ah as i,I as a,w as s,Z as e,A as l}from"./chunks/framework.ChbOY6p5.js";import"./chunks/theme.B6FFP-dx.js";const $=JSON.parse('{"title":"使用 dialog 和 jq 在 Linux 上编写高效终端 TUI | LCTT x X-CMD","titleTemplate":false,"description":"使用 dialog 和 jq 在 Linux 上编写高效终端 TUI | LCTT (202311) | X-CMD","frontmatter":{"pageClass":"x-blog","head":[["meta",{"name":"og:title","content":"使用 dialog 和 jq 在 Linux 上编写高效终端 TUI | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 dialog 和 jq 在 Linux 上编写高效终端 TUI | LCTT (202311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202311/20231115 Writing useful terminal TUI on Linux with dialog and jq","title":"使用 dialog 和 jq 在 Linux 上编写高效终端 TUI","tag":"202311"},"relativePath":"202311/20231115 Writing useful terminal TUI on Linux with dialog and jq.md","filePath":"[post].md"}'),d={name:"202311/20231115 Writing useful terminal TUI on Linux with dialog and jq.md"};function m(g,n,c,f,q,b){const p=o("Link");return r(),u("div",null,[n[49]||(n[49]=i(`<h1 id="使用-dialog-和-jq-在-linux-上编写高效终端-tui" tabindex="-1">使用 dialog 和 jq 在 Linux 上编写高效终端 TUI <a class="header-anchor" href="#使用-dialog-和-jq-在-linux-上编写高效终端-tui" aria-label="Permalink to 使用 dialog 和 jq 在 Linux 上编写高效终端 TUI">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202311/18/071418mc44bs42keebfe1c.png" alt=""></p><h3 id="为何选择文字用户界面-tui" tabindex="-1">为何选择文字用户界面（TUI）？ <a class="header-anchor" href="#为何选择文字用户界面-tui" aria-label="Permalink to 为何选择文字用户界面（TUI）？">​</a></h3><p>许多人每日都在使用终端，因此，<ruby>文字用户界面<rt>Text User Interface</rt></ruby>（TUI）逐渐显示出其价值。它能减少用户输入命令时的误差，让终端操作更高效，提高生产力。</p><p>以我的个人使用情况为例：我每日会通过家用电脑远程连接到我使用 Linux 系统的实体 PC。所有的远程网络连接都通过私有 VPN 加密保护。然而，当我需要频繁重复输入命令进行连接时，这种经历实在令人烦躁。</p><p>于是，我创建了下面这个 Bash 函数，从而有所改进：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export REMOTE_RDP_USER=&quot;myremoteuser&quot;</span></span>
<span class="line"><span>function remote_machine() {</span></span>
<span class="line"><span>  /usr/bin/xfreerdp /cert-ignore /sound:sys:alsa /f /u:$REMOTE_RDP_USER /v:$1 /p:$2</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>但后来，我发现自己还是频繁地执行下面这条命令（在一行中）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>remote_pass=(/bin/cat/.mypassfile) remote_machine $remote_machine $remote_pass</span></span></code></pre></div><p>这太烦了，更糟糕的是，我的密码被明文存储在我的电脑上（我虽然使用了加密驱动器，但这点依然令人不安）。</p><p>因此，我决定投入一些时间，编写一个实用的脚本，从而更好地满足我的基本需求。</p><h4 id="我需要哪些信息才能连接到远程桌面" tabindex="-1">我需要哪些信息才能连接到远程桌面？ <a class="header-anchor" href="#我需要哪些信息才能连接到远程桌面" aria-label="Permalink to 我需要哪些信息才能连接到远程桌面？">​</a></h4><p>实际上，要连接到远程桌面，你只需提供少量信息。这些信息需要进行结构化处理，所以一个简单的 JSON 文件就能够满足要求：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{&quot;machines&quot;: [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;machine1.domain.com&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;Personal-PC&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;machine2.domain.com&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;Virtual-Machine&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>&quot;remote_user&quot;: &quot;MYUSER@DOMAIN&quot;,</span></span>
<span class="line"><span>&quot;title&quot; : &quot;MY COMPANY RDP connection&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,14)),a("p",null,[n[1]||(n[1]=s("尽管在各种配置文件格式中，JSON 并非最佳选择（例如，它不支持注解），但是 Linux 提供了许多工具通过命令行方式解析 JSON 内容。其中，特别值得一提的工具就是 ")),e(p,{href:"https://stedolan.github.io/jq/"},{default:l(()=>n[0]||(n[0]=[s("jq")])),_:1}),n[2]||(n[2]=s("。下面我要向你展示如何利用它来提取机器列表："))]),n[50]||(n[50]=i(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/usr/bin/jq --compact-output --raw-output &#39;.machines[]| .name&#39; \\</span></span>
<span class="line"><span>  $HOME/.config/scripts/kodegeek_rdp.json) \\</span></span>
<span class="line"><span>  &quot;machine1.domain.com&quot; &quot;machine2.domain.com&quot;</span></span></code></pre></div>`,1)),a("p",null,[n[5]||(n[5]=a("code",null,"jq",-1)),n[6]||(n[6]=s(" 的文档可以在 ")),e(p,{href:"https://jqlang.github.io/jq/manual/"},{default:l(()=>n[3]||(n[3]=[s("这里")])),_:1}),n[7]||(n[7]=s(" 找到。另外，你也可以直接将你的 JSON 文件复制粘贴到 ")),e(p,{href:"https://jqplay.org/"},{default:l(()=>n[4]||(n[4]=[s("jq play")])),_:1}),n[8]||(n[8]=s("，试用你的表达式，然后在你的脚本中使用这些表达式。"))]),n[51]||(n[51]=a("p",null,"既然已经准备好了连接远程计算机所需的所有信息，那现在就让我们来创建一个美观实用的 TUI 吧。",-1)),n[52]||(n[52]=a("h4",{id:"dialog-的帮助",tabindex:"-1"},[s("Dialog 的帮助 "),a("a",{class:"header-anchor",href:"#dialog-的帮助","aria-label":"Permalink to Dialog 的帮助"},"​")],-1)),a("p",null,[e(p,{href:"https://invisible-island.net/dialog/"},{default:l(()=>n[9]||(n[9]=[s("Dialog")])),_:1}),n[10]||(n[10]=s(" 是那些你可能希望早些认识的、被低评估的 Linux 工具之一。你可以利用它构建出一个井然有序、简介易懂，并且完美适用于你终端的用户界面。"))]),n[53]||(n[53]=i(`<p>比如，我可以创建一个包含我喜欢的编程语言的简单的复选框列表，且默认选择 Python：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dialog --clear --checklist &quot;Favorite programming languages:&quot; 10 30 7\\</span></span>
<span class="line"><span>  1 Python on 2 Java off 3 Bash off 4 Perl off 5 Ruby off</span></span></code></pre></div><p><img src="https://fedoramagazine.org/wp-content/uploads/2023/11/dialog-example1.png" alt=""></p><p>我们通过这条命令向 <code>dialog</code> 下达了几个指令：</p><ul><li>清除屏幕（所有选项都以 <code>--</code> 开头）</li><li>创建一个带有标题的复选框（第一个位置参数）</li><li>决定窗口尺寸（高度、宽度和列表高度，共 3 个参数）</li><li>列表中的每条选项都由一个标签和一个值组成。</li></ul><p>惊人的是，仅仅一行代码，就带来了简洁直观和视觉友好的选择列表。</p>`,6)),a("p",null,[n[12]||(n[12]=s("关于 ")),n[13]||(n[13]=a("code",null,"dialog",-1)),n[14]||(n[14]=s(" 的详细文档，你可以在 ")),e(p,{href:"https://invisible-island.net/dialog/#documentation"},{default:l(()=>n[11]||(n[11]=[s("这里")])),_:1}),n[15]||(n[15]=s(" 阅读。"))]),n[54]||(n[54]=a("h4",{id:"整合所有元素-使用-dialog-和-jq-编写-tui",tabindex:"-1"},[s("整合所有元素：使用 Dialog 和 JQ 编写 TUI "),a("a",{class:"header-anchor",href:"#整合所有元素-使用-dialog-和-jq-编写-tui","aria-label":"Permalink to 整合所有元素：使用 Dialog 和 JQ 编写 TUI"},"​")],-1)),n[55]||(n[55]=a("p",null,[s("我编写了一个 TUI，它使用 "),a("code",null,"jq"),s(" 从我的 JSON 文件中提取配置详细信息，并且使用 "),a("code",null,"dialog"),s(" 来组织流程。每次运行，我都会要求输入密码，并将其保存在一个临时文件中，脚本使用后便会删除这个临时文件。")],-1)),n[56]||(n[56]=a("p",null,"这个脚本非常基础，但它更安全，也使我能够专注于更重要的任务 🙂",-1)),a("p",null,[n[17]||(n[17]=s("那么 ")),e(p,{href:"https://raw.githubusercontent.com/josevnz/scripts/main/kodegeek_rdp.sh"},{default:l(()=>n[16]||(n[16]=[s("脚本")])),_:1}),n[18]||(n[18]=s(" 看起来是怎样的呢？下面是代码："))]),n[57]||(n[57]=i(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># Author Jose Vicente Nunez</span></span>
<span class="line"><span># Do not use this script on a public computer. It is not secure...</span></span>
<span class="line"><span># https://invisible-island.net/dialog/</span></span>
<span class="line"><span># Below some constants to make it easier to handle Dialog</span></span>
<span class="line"><span># return codes</span></span>
<span class="line"><span>: \${DIALOG_OK=0}</span></span>
<span class="line"><span>: \${DIALOG_CANCEL=1}</span></span>
<span class="line"><span>: \${DIALOG_HELP=2}</span></span>
<span class="line"><span>: \${DIALOG_EXTRA=3}</span></span>
<span class="line"><span>: \${DIALOG_ITEM_HELP=4}</span></span>
<span class="line"><span>: \${DIALOG_ESC=255}</span></span>
<span class="line"><span># Temporary file to store sensitive data. Use a &#39;trap&#39; to remove</span></span>
<span class="line"><span># at the end of the script or if it gets interrupted</span></span>
<span class="line"><span>declare tmp_file=$(/usr/bin/mktemp 2&gt;/dev/null) || declare tmp_file=/tmp/test$$</span></span>
<span class="line"><span>trap &quot;/bin/rm -f $tmp_file&quot; QUIT EXIT INT</span></span>
<span class="line"><span>/bin/chmod go-wrx \${tmp_file} &gt; /dev/null 2&gt;&amp;1</span></span>
<span class="line"><span>:&lt;&lt;DOC</span></span>
<span class="line"><span>Extract details like title, remote user and machines using jq from the JSON file</span></span>
<span class="line"><span>Use a subshell for the machine list</span></span>
<span class="line"><span>DOC</span></span>
<span class="line"><span>declare TITLE=$(/usr/bin/jq --compact-output --raw-output &#39;.title&#39; $HOME/.config/scripts/kodegeek_rdp.json)|| exit 100</span></span>
<span class="line"><span>declare REMOTE_USER=$(/usr/bin/jq --compact-output --raw-output &#39;.remote_user&#39; $HOME/.config/scripts/kodegeek_rdp.json)|| exit 100</span></span>
<span class="line"><span>declare MACHINES=$(</span></span>
<span class="line"><span>    declare tmp_file2=$(/usr/bin/mktemp 2&gt;/dev/null) || declare tmp_file2=/tmp/test$$</span></span>
<span class="line"><span>    # trap &quot;/bin/rm -f $tmp_file2&quot; 0 1 2 5 15 EXIT INT</span></span>
<span class="line"><span>    declare -a MACHINE_INFO=$(/usr/bin/jq --compact-output --raw-output &#39;.machines[]| join(&quot;,&quot;)&#39; $HOME/.config/scripts/kodegeek_rdp.json &gt; $tmp_file2)</span></span>
<span class="line"><span>    declare -i i=0</span></span>
<span class="line"><span>    while read line; do</span></span>
<span class="line"><span>        declare machine=$(echo $line| /usr/bin/cut -d&#39;,&#39; -f1)</span></span>
<span class="line"><span>        declare desc=$(echo $line| /usr/bin/cut -d&#39;,&#39; -f2)</span></span>
<span class="line"><span>        declare toggle=off</span></span>
<span class="line"><span>        if [ $i -eq 0 ]; then</span></span>
<span class="line"><span>            toggle=on</span></span>
<span class="line"><span>            ((i=i+1))</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>        echo $machine $desc $toggle</span></span>
<span class="line"><span>    done &lt; $tmp_file2</span></span>
<span class="line"><span>    /bin/cp /dev/null $tmp_file2</span></span>
<span class="line"><span>) || exit 100</span></span>
<span class="line"><span># Create a dialog with a radio list and let the user select the</span></span>
<span class="line"><span># remote machine</span></span>
<span class="line"><span>/usr/bin/dialog \\</span></span>
<span class="line"><span>    --clear \\</span></span>
<span class="line"><span>    --title &quot;$TITLE&quot; \\</span></span>
<span class="line"><span>    --radiolist &quot;Which machine do you want to use?&quot; 20 61 2 \\</span></span>
<span class="line"><span>    $MACHINES 2&gt; \${tmp_file}</span></span>
<span class="line"><span>return_value=$?</span></span>
<span class="line"><span># Handle the return codes from the machine selection in the</span></span>
<span class="line"><span># previous step</span></span>
<span class="line"><span>export remote_machine=&quot;&quot;</span></span>
<span class="line"><span>case $return_value in</span></span>
<span class="line"><span>  $DIALOG_OK)</span></span>
<span class="line"><span>    export remote_machine=$(/bin/cat \${tmp_file})</span></span>
<span class="line"><span>    ;;</span></span>
<span class="line"><span>  $DIALOG_CANCEL)</span></span>
<span class="line"><span>    echo &quot;Cancel pressed.&quot;;;</span></span>
<span class="line"><span>  $DIALOG_HELP)</span></span>
<span class="line"><span>    echo &quot;Help pressed.&quot;;;</span></span>
<span class="line"><span>  $DIALOG_EXTRA)</span></span>
<span class="line"><span>    echo &quot;Extra button pressed.&quot;;;</span></span>
<span class="line"><span>  $DIALOG_ITEM_HELP)</span></span>
<span class="line"><span>    echo &quot;Item-help button pressed.&quot;;;</span></span>
<span class="line"><span>  $DIALOG_ESC)</span></span>
<span class="line"><span>    if test -s $tmp_file ; then</span></span>
<span class="line"><span>      /bin/rm -f $tmp_file</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>      echo &quot;ESC pressed.&quot;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    ;;</span></span>
<span class="line"><span>esac</span></span>
<span class="line"><span></span></span>
<span class="line"><span># No machine selected? No service ...</span></span>
<span class="line"><span>if [ -z &quot;\${remote_machine}&quot; ]; then</span></span>
<span class="line"><span>  /usr/bin/dialog \\</span></span>
<span class="line"><span>        --clear  \\</span></span>
<span class="line"><span>        --title &quot;Error, no machine selected?&quot; --clear &quot;$@&quot; \\</span></span>
<span class="line"><span>        --msgbox &quot;No machine was selected!. Will exit now...&quot; 15 30</span></span>
<span class="line"><span>  exit 100</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Send 4 packets to the remote machine. I assume your network</span></span>
<span class="line"><span># administration allows ICMP packets</span></span>
<span class="line"><span># If there is an error show  message box</span></span>
<span class="line"><span>/bin/ping -c 4 \${remote_machine} &gt;/dev/null 2&gt;&amp;1</span></span>
<span class="line"><span>if [ $? -ne 0 ]; then</span></span>
<span class="line"><span>  /usr/bin/dialog \\</span></span>
<span class="line"><span>        --clear  \\</span></span>
<span class="line"><span>        --title &quot;VPN issues or machine is off?&quot; --clear &quot;$@&quot; \\</span></span>
<span class="line"><span>        --msgbox &quot;Could not ping \${remote_machine}. Time to troubleshoot...&quot; 15 50</span></span>
<span class="line"><span>  exit 100</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Remote machine is visible, ask for credentials and handle user</span></span>
<span class="line"><span># choices (like password with a password box)</span></span>
<span class="line"><span>/bin/rm -f \${tmp_file}</span></span>
<span class="line"><span>/usr/bin/dialog \\</span></span>
<span class="line"><span>  --title &quot;$TITLE&quot; \\</span></span>
<span class="line"><span>  --clear  \\</span></span>
<span class="line"><span>  --insecure \\</span></span>
<span class="line"><span>  --passwordbox &quot;Please enter your Windows password for \${remote_machine}\\n&quot; 16 51 2&gt; $tmp_file</span></span>
<span class="line"><span>return_value=$?</span></span>
<span class="line"><span>case $return_value in</span></span>
<span class="line"><span>  $DIALOG_OK)</span></span>
<span class="line"><span>    # We have all the information, try to connect using RDP protocol</span></span>
<span class="line"><span>    /usr/bin/mkdir -p -v $HOME/logs</span></span>
<span class="line"><span>    /usr/bin/xfreerdp /cert-ignore /sound:sys:alsa /f /u:$REMOTE_USER /v:\${remote_machine} /p:$(/bin/cat \${tmp_file})| \\</span></span>
<span class="line"><span>    /usr/bin/tee $HOME/logs/$(/usr/bin/basename $0)-$remote_machine.log</span></span>
<span class="line"><span>    ;;</span></span>
<span class="line"><span>  $DIALOG_CANCEL)</span></span>
<span class="line"><span>    echo &quot;Cancel pressed.&quot;;;</span></span>
<span class="line"><span>  $DIALOG_HELP)</span></span>
<span class="line"><span>    echo &quot;Help pressed.&quot;;;</span></span>
<span class="line"><span>  $DIALOG_EXTRA)</span></span>
<span class="line"><span>    echo &quot;Extra button pressed.&quot;;;</span></span>
<span class="line"><span>  $DIALOG_ITEM_HELP)</span></span>
<span class="line"><span>    echo &quot;Item-help button pressed.&quot;;;</span></span>
<span class="line"><span>  $DIALOG_ESC)</span></span>
<span class="line"><span>    if test -s $tmp_file ; then</span></span>
<span class="line"><span>      /bin/rm -f $tmp_file</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>      echo &quot;ESC pressed.&quot;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    ;;</span></span>
<span class="line"><span>esac</span></span></code></pre></div><p><img src="https://fedoramagazine.org/wp-content/uploads/2023/11/dialog-example2.png" alt=""></p><p>你从代码中可以看出，<code>dialog</code> 预期的是位置参数，并且允许你在变量中捕获用户的回应。这实际上使其成为编写文本用户界面的 Bash 扩展。</p>`,3)),a("p",null,[n[20]||(n[20]=s("上述的小例子只涵盖了一些部件的使用，其实还有更多的文档在 ")),e(p,{href:"https://invisible-island.net/dialog/"},{default:l(()=>n[19]||(n[19]=[s("官方 dialog 网站")])),_:1}),n[21]||(n[21]=s("上。"))]),n[58]||(n[58]=a("h3",{id:"dialog-和-jq-是最好的选择吗",tabindex:"-1"},[s("Dialog 和 JQ 是最好的选择吗？ "),a("a",{class:"header-anchor",href:"#dialog-和-jq-是最好的选择吗","aria-label":"Permalink to Dialog 和 JQ 是最好的选择吗？"},"​")],-1)),a("p",null,[n[25]||(n[25]=s("实现这个功能可以有很多方法（如 ")),e(p,{href:"https://textual.textualize.io/"},{default:l(()=>n[22]||(n[22]=[s("Textual")])),_:1}),n[26]||(n[26]=s("，Gnome 的 ")),e(p,{href:"https://gitlab.gnome.org/GNOME/zenity/commits/master?ofs=1900"},{default:l(()=>n[23]||(n[23]=[s("Zenity")])),_:1}),n[27]||(n[27]=s("，Python 的 ")),e(p,{href:"https://docs.python.org/3/library/tkinter.html"},{default:l(()=>n[24]||(n[24]=[s("TKinker")])),_:1}),n[28]||(n[28]=s("等）。我只是想向你展示一种高效的方式——仅用 100 行代码就完成了这项任务。"))]),n[59]||(n[59]=a("p",null,[a("em",null,"确实，它并不完美"),s("。更具体地讲，它与 Bash 的深度集成使得代码有些冗长，但仍然保持了易于调试和维护的特性。相比于反复复制粘贴长长的命令，这无疑是一个更好的选择。")],-1)),a("p",null,[n[30]||(n[30]=s("最后，如果你喜欢在 Bash 中使用 ")),n[31]||(n[31]=a("code",null,"jq",-1)),n[32]||(n[32]=s(" 处理 JSON，那么你会对这个 ")),e(p,{href:"https://nntrn.github.io/jq-recipes/"},{default:l(()=>n[29]||(n[29]=[s("jq 配方的精彩集合")])),_:1}),n[33]||(n[33]=s(" 感兴趣的。"))]),n[60]||(n[60]=a("p",null,[a("em",null,"（题图：MJ/a9b7f60a-02ec-4d3f-88ae-2321f49ac0e1）")],-1)),n[61]||(n[61]=a("hr",null,null,-1)),a("p",null,[n[35]||(n[35]=s("via: ")),e(p,{href:"https://fedoramagazine.org/writing-useful-terminal-tui-on-linux-with-dialog-and-jq/"},{default:l(()=>n[34]||(n[34]=[s("https://fedoramagazine.org/writing-useful-terminal-tui-on-linux-with-dialog-and-jq/")])),_:1})]),a("p",null,[n[40]||(n[40]=s("作者：")),e(p,{href:"https://fedoramagazine.org/author/josevnz/"},{default:l(()=>n[36]||(n[36]=[s("Jose Nunez")])),_:1}),n[41]||(n[41]=s(" 选题：")),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>n[37]||(n[37]=[s("lujun9972")])),_:1}),n[42]||(n[42]=s(" 译者：")),e(p,{href:"https://linux.cn/lctt/ChatGPT"},{default:l(()=>n[38]||(n[38]=[s("ChatGPT")])),_:1}),n[43]||(n[43]=s(" 校对：")),e(p,{href:"https://github.com/wxy"},{default:l(()=>n[39]||(n[39]=[s("wxy")])),_:1})]),a("p",null,[n[46]||(n[46]=s("本文由 ")),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>n[44]||(n[44]=[s("LCTT")])),_:1}),n[47]||(n[47]=s(" 原创编译，")),e(p,{href:"https://linux.cn/"},{default:l(()=>n[45]||(n[45]=[s("Linux中国")])),_:1}),n[48]||(n[48]=s(" 荣誉推出"))])])}const x=t(d,[["render",m]]);export{$ as __pageData,x as default};
