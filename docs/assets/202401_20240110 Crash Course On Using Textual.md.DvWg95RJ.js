import{_ as i,a0 as o,w as u,s as r,ao as t,I as a,x as n,a1 as e,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"Textual：为 Python 增加漂亮的文本用户界面（TUI） | LCTT x X-CMD","titleTemplate":false,"description":"Textual：为 Python 增加漂亮的文本用户界面（TUI） | LCTT (202401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Textual：为 Python 增加漂亮的文本用户界面（TUI） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Textual：为 Python 增加漂亮的文本用户界面（TUI） | LCTT (202401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202401/20240110 Crash Course On Using Textual","title":"Textual：为 Python 增加漂亮的文本用户界面（TUI）","tag":"202401","desc":""},"relativePath":"202401/20240110 Crash Course On Using Textual.md","filePath":"[post].md"}'),d={name:"202401/20240110 Crash Course On Using Textual.md"};function c(g,s,m,f,q,b){const p=o("Link");return u(),r("div",null,[s[140]||(s[140]=t('<h1 id="textual-为-python-增加漂亮的文本用户界面-tui" tabindex="-1">Textual：为 Python 增加漂亮的文本用户界面（TUI） <a class="header-anchor" href="#textual-为-python-增加漂亮的文本用户界面-tui" aria-label="Permalink to “Textual：为 Python 增加漂亮的文本用户界面（TUI）”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202401/15/110359fptrxpqffztniz45.jpg" alt=""></p><h3 id="快速入门使用-textual" tabindex="-1">快速入门使用 Textual <a class="header-anchor" href="#快速入门使用-textual" aria-label="Permalink to “快速入门使用 Textual”">​</a></h3>',3)),a("p",null,[s[1]||(s[1]=n("Python 在 Linux 上有像 ",-1)),e(p,{href:"https://docs.python.org/3/library/tkinter.html"},{default:l(()=>[...s[0]||(s[0]=[n("TkInter",-1)])]),_:1}),s[2]||(s[2]=n(" 这样的优秀 GUI（图形用户界面）开发库，但如果你不能运行图形应用程序怎么办？",-1))]),a("p",null,[s[4]||(s[4]=n("文本终端，并非只在 Linux 上有，而且 BSD 和其它的出色的类 Unix 操作系统上也有。如果你的代码是用 Python 编写的，你应该使用 ",-1)),e(p,{href:"https://textual.textualize.io/"},{default:l(()=>[...s[3]||(s[3]=[n("Textual",-1)])]),_:1}),s[5]||(s[5]=n(" 来帮助你编写 TUI（文本用户界面）。在这个快速介绍中，我将向你展示两个你可以用 Textual 做的示例，并且介绍它未来可能的应用方向。",-1))]),s[141]||(s[141]=t(`<p>所以 Textual 是什么？</p><blockquote><p>Textual 是一个为 Python 构建的快速应用程序开发框架，由 Textualize.io 构建。它可以让你用简单的 Python API 构建复杂的用户界面，并运行在终端或网络浏览器上！</p></blockquote><h4 id="你需要的跟进这个教程的工具" tabindex="-1">你需要的跟进这个教程的工具 <a class="header-anchor" href="#你需要的跟进这个教程的工具" aria-label="Permalink to “你需要的跟进这个教程的工具”">​</a></h4><p>你需要有以下条件：</p><ol><li>具备基础的编程经验，最好熟练使用 Python。</li><li>理解基础的面向对象概念，比如类和继承。</li><li>一台安装了 Linux 与 Python 3.9+ 的机器</li><li>一款好的编辑器（Vim 或者 PyCharm 是不错的选择）</li></ol><p>我尽可能简单化代码，以便你能轻松理解。此外，我强烈建议你下载代码，或至少按照接下来的说明安装相关程序。</p><h4 id="安装步骤" tabindex="-1">安装步骤 <a class="header-anchor" href="#安装步骤" aria-label="Permalink to “安装步骤”">​</a></h4><p>首先创建一个虚拟环境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>python3 -m venv ~/virtualenv/Textualize</span></span></code></pre></div><p>现在，你可以克隆 Git 仓库并创建一个可以编辑的发布版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>. ~/virtualenv/Textualize/bin/activate</span></span>
<span class="line"><span>pip install --upgrade pip</span></span>
<span class="line"><span>pip install --upgrade wheel</span></span>
<span class="line"><span>pip install --upgrade build</span></span>
<span class="line"><span>pip install --editable .</span></span></code></pre></div><p>或者直接从 Pypi.org 安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>. ~/virtualenv/Textualize/bin/activate</span></span>
<span class="line"><span>pip install --upgrade KodegeekTextualize</span></span></code></pre></div><h3 id="我们的首个程序-日志浏览器" tabindex="-1">我们的首个程序：日志浏览器 <a class="header-anchor" href="#我们的首个程序-日志浏览器" aria-label="Permalink to “我们的首个程序：日志浏览器”">​</a></h3><p><img src="https://tutorials.kodegeek.com/Textualize/img/output_of_multiple_well_known_unix_commands_2023-12-28T19_13_32_605621.svg" alt=""></p>`,15)),a("p",null,[s[7]||(s[7]=n("这个 ",-1)),s[8]||(s[8]=a("em",null,"日志浏览器",-1)),s[9]||(s[9]=n(" 就是一款简单的应用，能执行用户 ",-1)),a("em",null,[e(p,{href:"https://manpages.org/bash"},{default:l(()=>[...s[6]||(s[6]=[n("PATH",-1)])]),_:1})]),s[10]||(s[10]=n(" 路径上的一系列 UNIX 命令，并在任务执行完毕后捕获输出。",-1))]),s[142]||(s[142]=t(`<p>以下是该应用的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import shutil</span></span>
<span class="line"><span>from textual import on</span></span>
<span class="line"><span>from textual.app import ComposeResult, App</span></span>
<span class="line"><span>from textual.widgets import Footer, Header, Button, SelectionList</span></span>
<span class="line"><span>from textual.widgets.selection_list import Selection</span></span>
<span class="line"><span>from textual.screen import ModalScreen</span></span>
<span class="line"><span># Operating system commands are hardcoded</span></span>
<span class="line"><span>OS_COMMANDS = {</span></span>
<span class="line"><span>    &quot;LSHW&quot;: [&quot;lshw&quot;, &quot;-json&quot;, &quot;-sanitize&quot;, &quot;-notime&quot;, &quot;-quiet&quot;],</span></span>
<span class="line"><span>    &quot;LSCPU&quot;: [&quot;lscpu&quot;, &quot;--all&quot;, &quot;--extended&quot;, &quot;--json&quot;],</span></span>
<span class="line"><span>    &quot;LSMEM&quot;: [&quot;lsmem&quot;, &quot;--json&quot;, &quot;--all&quot;, &quot;--output-all&quot;],</span></span>
<span class="line"><span>    &quot;NUMASTAT&quot;: [&quot;numastat&quot;, &quot;-z&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LogScreen(ModalScreen):</span></span>
<span class="line"><span>    # ... Code of the full separate screen omitted, will be explained next</span></span>
<span class="line"><span>    def __init__(self, name = None, ident = None, classes = None, selections = None):</span></span>
<span class="line"><span>        super().__init__(name, ident, classes)</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class OsApp(App):</span></span>
<span class="line"><span>    BINDINGS = [</span></span>
<span class="line"><span>        (&quot;q&quot;, &quot;quit_app&quot;, &quot;Quit&quot;),</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>    CSS_PATH = &quot;os_app.tcss&quot;</span></span>
<span class="line"><span>    ENABLE_COMMAND_PALETTE = False  # Do not need the command palette</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def action_quit_app(self):</span></span>
<span class="line"><span>        self.exit(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def compose(self) -&gt; ComposeResult:</span></span>
<span class="line"><span>        # Create a list of commands, valid commands are assumed to be on the PATH variable.</span></span>
<span class="line"><span>        selections = [Selection(name.title(), &#39; &#39;.join(cmd), True) for name, cmd in OS_COMMANDS.items() if shutil.which(cmd[0].strip())]</span></span>
<span class="line"><span>        yield Header(show_clock=False)</span></span>
<span class="line"><span>        sel_list = SelectionList(*selections, id=&#39;cmds&#39;)</span></span>
<span class="line"><span>        sel_list.tooltip = &quot;Select one more more command to execute&quot;</span></span>
<span class="line"><span>        yield sel_list</span></span>
<span class="line"><span>        yield Button(f&quot;Execute {len(selections)} commands&quot;, id=&quot;exec&quot;, variant=&quot;primary&quot;)</span></span>
<span class="line"><span>        yield Footer()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @on(SelectionList.SelectedChanged)</span></span>
<span class="line"><span>    def on_selection(self, event: SelectionList.SelectedChanged) -&gt; None:</span></span>
<span class="line"><span>        button = self.query_one(&quot;#exec&quot;, Button)</span></span>
<span class="line"><span>        selections = len(event.selection_list.selected)</span></span>
<span class="line"><span>        if selections:</span></span>
<span class="line"><span>            button.disabled = False</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            button.disabled = True</span></span>
<span class="line"><span>        button.label = f&quot;Execute {selections} commands&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @on(Button.Pressed)</span></span>
<span class="line"><span>    def on_button_click(self):</span></span>
<span class="line"><span>        selection_list = self.query_one(&#39;#cmds&#39;, SelectionList)</span></span>
<span class="line"><span>        selections = selection_list.selected</span></span>
<span class="line"><span>        log_screen = LogScreen(selections=selections)</span></span>
<span class="line"><span>        self.push_screen(log_screen)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    app = OsApp()</span></span>
<span class="line"><span>    app.title = f&quot;Output of multiple well known UNIX commands&quot;.title()</span></span>
<span class="line"><span>    app.sub_title = f&quot;{len(OS_COMMANDS)} commands available&quot;</span></span>
<span class="line"><span>    app.run()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div><p>现在我们逐条梳理一下程序的代码：</p>`,3)),a("ol",null,[a("li",null,[s[12]||(s[12]=n("每个应用都扩展自 ",-1)),s[13]||(s[13]=a("code",null,"App",-1)),s[14]||(s[14]=n(" 类。其中最重要的有 ",-1)),s[15]||(s[15]=a("code",null,"compose",-1)),s[16]||(s[16]=n(" 与 ",-1)),s[17]||(s[17]=a("code",null,"mount",-1)),s[18]||(s[18]=n(" 等方法。但在当前应用中，我们只实现了 ",-1)),e(p,{href:"https://textual.textualize.io/tutorial/#composing-the-widgets"},{default:l(()=>[...s[11]||(s[11]=[n("compose",-1)])]),_:1}),s[19]||(s[19]=n("。",-1))]),a("li",null,[s[22]||(s[22]=n("在 ",-1)),s[23]||(s[23]=a("code",null,"compose",-1)),s[24]||(s[24]=n(" 方法中，你会返回一系列 ",-1)),a("ruby",null,[e(p,{href:"https://textual.textualize.io/widget_gallery/"},{default:l(()=>[...s[20]||(s[20]=[n("组件",-1)])]),_:1}),s[21]||(s[21]=a("rt",null,"Widget",-1))]),s[25]||(s[25]=n("，并按顺序添加到主屏幕中。每一个组件都有定制自身外观的选项。",-1))]),a("li",null,[s[28]||(s[28]=n("你可以设定单字母的 ",-1)),a("ruby",null,[e(p,{href:"https://textual.textualize.io/api/binding/"},{default:l(()=>[...s[26]||(s[26]=[n("绑定",-1)])]),_:1}),s[27]||(s[27]=a("rt",null,"binding",-1))]),s[29]||(s[29]=n("，比如此处我们设定了 ",-1)),s[30]||(s[30]=a("code",null,"q",-1)),s[31]||(s[31]=n(" 键来退出应用（参见 ",-1)),s[32]||(s[32]=a("code",null,"action_quit_app",-1)),s[33]||(s[33]=n(" 函数和 ",-1)),s[34]||(s[34]=a("code",null,"BINDINGS",-1)),s[35]||(s[35]=n(" 列表）。",-1))]),s[36]||(s[36]=a("li",null,[n("利用 "),a("code",null,"SelectionList"),n(" 组件，我们展示了待运行的命令列表。然后，你可以通过 "),a("code",null,"@on(SelectionList.SelectedChanged)"),n(" 注解以及 "),a("code",null,"on_selection"),n(" 方法告知应用获取所选的内容。")],-1)),s[37]||(s[37]=a("li",null,"对于无选定元素的应对很重要，我们会根据运行的命令数量来决定是否禁用 “exec” 按钮。",-1)),s[38]||(s[38]=a("li",null,[n("我们使用类似的监听器（ "),a("code",null,"@on(Button.Pressed)"),n(" ）来执行命令。我们做的就是将我们的选择送到一个新的屏幕，该屏幕会负责执行命令并收集结果。")],-1))]),s[143]||(s[143]=t(`<p>你注意到 <code>CSS_PATH = &quot;os_app.tcss&quot;</code> 这个变量了吗？Textual 允许你使用 CSS 来控制单个或多个组件的外观（色彩、位置、尺寸）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Screen {</span></span>
<span class="line"><span>        layout: vertical;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Header {</span></span>
<span class="line"><span>        dock: top;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Footer {</span></span>
<span class="line"><span>        dock: bottom;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SelectionList {</span></span>
<span class="line"><span>        padding: 1;</span></span>
<span class="line"><span>        border: solid $accent;</span></span>
<span class="line"><span>        width: 1fr;</span></span>
<span class="line"><span>        height: 80%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Button {</span></span>
<span class="line"><span>        width: 1fr</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>引自 Textual 官方网站：</p><blockquote><p>Textual 中使用的 CSS 是互联网上常见 CSS 的简化版本，容易上手。</p></blockquote>`,4)),a("p",null,[s[40]||(s[40]=a("em",null,"这真是太棒了",-1)),s[41]||(s[41]=n("，只需要用一哥独立的 ",-1)),e(p,{href:"https://textual.textualize.io/guide/styles/"},{default:l(()=>[...s[39]||(s[39]=[n("样式表",-1)])]),_:1}),s[42]||(s[42]=n("，就可以轻松调整应用的样式。",-1))]),s[144]||(s[144]=t(`<p>好，我们现在来看看如何在新屏幕上展示结果。</p><h4 id="在新屏幕上展示结果" tabindex="-1">在新屏幕上展示结果 <a class="header-anchor" href="#在新屏幕上展示结果" aria-label="Permalink to “在新屏幕上展示结果”">​</a></h4><p><img src="https://tutorials.kodegeek.com/Textualize/img/output_of_multiple_well_known_unix_commands_2023-12-28T19_13_40_503695.svg" alt=""></p><p>以下是在新屏幕上处理输出的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import asyncio</span></span>
<span class="line"><span>from typing import List</span></span>
<span class="line"><span>from textual import on, work</span></span>
<span class="line"><span>from textual.reactive import reactive</span></span>
<span class="line"><span>from textual.screen import ModalScreen</span></span>
<span class="line"><span>from textual.widgets import Button, Label, Log</span></span>
<span class="line"><span>from textual.worker import Worker</span></span>
<span class="line"><span>from textual.app import ComposeResult</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LogScreen(ModalScreen):</span></span>
<span class="line"><span>    count = reactive(0)</span></span>
<span class="line"><span>    MAX_LINES = 10_000</span></span>
<span class="line"><span>    ENABLE_COMMAND_PALETTE = False</span></span>
<span class="line"><span>    CSS_PATH = &quot;log_screen.tcss&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(</span></span>
<span class="line"><span>            self,</span></span>
<span class="line"><span>            name: str | None = None,</span></span>
<span class="line"><span>            ident: str | None = None,</span></span>
<span class="line"><span>            classes: str | None = None,</span></span>
<span class="line"><span>            selections: List = None</span></span>
<span class="line"><span>    ):</span></span>
<span class="line"><span>        super().__init__(name, ident, classes)</span></span>
<span class="line"><span>        self.selections = selections</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def compose(self) -&gt; ComposeResult:</span></span>
<span class="line"><span>        yield Label(f&quot;Running {len(self.selections)} commands&quot;)</span></span>
<span class="line"><span>        event_log = Log(</span></span>
<span class="line"><span>            id=&#39;event_log&#39;,</span></span>
<span class="line"><span>            max_lines=LogScreen.MAX_LINES,</span></span>
<span class="line"><span>            highlight=True</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        event_log.loading = True</span></span>
<span class="line"><span>        yield event_log</span></span>
<span class="line"><span>        button = Button(&quot;Close&quot;, id=&quot;close&quot;, variant=&quot;success&quot;)</span></span>
<span class="line"><span>        button.disabled = True</span></span>
<span class="line"><span>        yield button</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    async def on_mount(self) -&gt; None:</span></span>
<span class="line"><span>        event_log = self.query_one(&#39;#event_log&#39;, Log)</span></span>
<span class="line"><span>        event_log.loading = False</span></span>
<span class="line"><span>        event_log.clear()</span></span>
<span class="line"><span>        lst = &#39;\\n&#39;.join(self.selections)</span></span>
<span class="line"><span>        event_log.write(f&quot;Preparing:\\n{lst}&quot;)</span></span>
<span class="line"><span>        event_log.write(&quot;\\n&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for command in self.selections:</span></span>
<span class="line"><span>            self.count += 1</span></span>
<span class="line"><span>            self.run_process(cmd=command)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def on_worker_state_changed(self, event: Worker.StateChanged) -&gt; None:</span></span>
<span class="line"><span>        if self.count == 0:</span></span>
<span class="line"><span>            button = self.query_one(&#39;#close&#39;, Button)</span></span>
<span class="line"><span>            button.disabled = False</span></span>
<span class="line"><span>        self.log(event)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @work(exclusive=False)</span></span>
<span class="line"><span>    async def run_process(self, cmd: str) -&gt; None:</span></span>
<span class="line"><span>        event_log = self.query_one(&#39;#event_log&#39;, Log)</span></span>
<span class="line"><span>        event_log.write_line(f&quot;Running: {cmd}&quot;)</span></span>
<span class="line"><span>        # Combine STDOUT and STDERR output</span></span>
<span class="line"><span>        proc = await asyncio.create_subprocess_shell(</span></span>
<span class="line"><span>            cmd,</span></span>
<span class="line"><span>            stdout=asyncio.subprocess.PIPE,</span></span>
<span class="line"><span>            stderr=asyncio.subprocess.STDOUT</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        stdout, _ = await proc.communicate()</span></span>
<span class="line"><span>        if proc.returncode != 0:</span></span>
<span class="line"><span>            raise ValueError(f&quot;&#39;{cmd}&#39; finished with errors ({proc.returncode})&quot;)</span></span>
<span class="line"><span>        stdout = stdout.decode(encoding=&#39;utf-8&#39;, errors=&#39;replace&#39;)</span></span>
<span class="line"><span>        if stdout:</span></span>
<span class="line"><span>            event_log.write(f&#39;\\nOutput of &quot;{cmd}&quot;:\\n&#39;)</span></span>
<span class="line"><span>            event_log.write(stdout)</span></span>
<span class="line"><span>        self.count -= 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @on(Button.Pressed, &quot;#close&quot;)</span></span>
<span class="line"><span>    def on_button_pressed(self, _) -&gt; None:</span></span>
<span class="line"><span>        self.app.pop_screen()</span></span></code></pre></div><p>你会注意到：</p>`,6)),a("ol",null,[s[53]||(s[53]=t("<li><code>LogScreen</code> 类扩展自 <code>ModalScreen</code> 类， 该类负责处理模态模式的屏幕。</li><li>这个屏幕同样有一个 <code>compose</code> 方法，我们在这里添加了组件以展示 Unix 命令的内容。</li><li>我们创建了一个叫做 <code>mount</code> 的新方法。一旦你用 <code>compose</code> 编排好组件，你就可以运行代码来获取数据，并再进一步定制它们的外观。</li>",3)),a("li",null,[s[44]||(s[44]=n("我们使用 ",-1)),e(p,{href:"https://docs.python.org/3/library/asyncio.html"},{default:l(()=>[...s[43]||(s[43]=[n("asyncio",-1)])]),_:1}),s[45]||(s[45]=n(" 运行命令，这样我们就能让 TUI 主工作线程在每个命令的结果出来时就及时更新内容。",-1))]),a("li",null,[s[47]||(s[47]=n("对于“工作线程”，请注意 ",-1)),s[48]||(s[48]=a("code",null,"run_process",-1)),s[49]||(s[49]=n(" 方法上的 ",-1)),s[50]||(s[50]=a("code",null,"@work(exclusive=False)",-1)),s[51]||(s[51]=n(" 注解，该方法用于运行命令并捕获 STDOUT + STDERR 输出。使用 ",-1)),e(p,{href:"https://textual.textualize.io/guide/workers/"},{default:l(()=>[...s[46]||(s[46]=[n("工作线程",-1)])]),_:1}),s[52]||(s[52]=n(" 来管理并发并不复杂，尽管它们在手册中确实有专门的章节。这主要是因为运行的外部命令可能会执行很长时间。",-1))]),s[54]||(s[54]=a("li",null,[n("在 "),a("code",null,"run_process"),n(" 中，我们通过调用 "),a("code",null,"write"),n(" 以命令的输出内容来更新 "),a("code",null,"event_log"),n("。")],-1)),s[55]||(s[55]=a("li",null,[n("最后，"),a("code",null,"on_button_pressed"),n(" 把我们带回到前一屏幕（从堆栈中移除屏幕）。")],-1))]),s[145]||(s[145]=t(`<p>这个小应用向你展示了如何一份不到 200 行的代码来编写一个简单的前端，用来运行非 Python 代码。</p><p>现在我们来看一个更复杂的例子，这个例子用到了我们还未探索过的 Textual 的新特性。</p><h3 id="示例二-展示赛事成绩的表格" tabindex="-1">示例二：展示赛事成绩的表格 <a class="header-anchor" href="#示例二-展示赛事成绩的表格" aria-label="Permalink to “示例二：展示赛事成绩的表格”">​</a></h3><p><img src="https://tutorials.kodegeek.com/Textualize/img/summary_2023-12-28T19_05_20_213933.svg" alt="通过 Textual 创建的表格应用"></p><p>本示例将展示如何使用 <code>DataTable</code> 组件在表格中展示赛事成绩。你能通过这个应用实现：</p><ul><li>通过列来排序表格</li><li>选择表格中的行，完整窗口展示赛事细节，我们将使用我们在日志浏览器中看到的 “推送屏幕” 技巧。</li><li>能进行表格搜索，查看选手详情，或执行其他操作如退出应用。</li></ul><p>下面，我们来看看应用代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>#!/usr/bin/env python</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>Author: Jose Vicente Nunez</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>from typing import Any, List</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from rich.style import Style</span></span>
<span class="line"><span>from textual import on</span></span>
<span class="line"><span>from textual.app import ComposeResult, App</span></span>
<span class="line"><span>from textual.command import Provider</span></span>
<span class="line"><span>from textual.screen import ModalScreen, Screen</span></span>
<span class="line"><span>from textual.widgets import DataTable, Footer, Header</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MY_DATA = [</span></span>
<span class="line"><span>    (&quot;level&quot;, &quot;name&quot;, &quot;gender&quot;, &quot;country&quot;, &quot;age&quot;),</span></span>
<span class="line"><span>    (&quot;Green&quot;, &quot;Wai&quot;, &quot;M&quot;, &quot;MYS&quot;, 22),</span></span>
<span class="line"><span>    (&quot;Red&quot;, &quot;Ryoji&quot;, &quot;M&quot;, &quot;JPN&quot;, 30),</span></span>
<span class="line"><span>    (&quot;Purple&quot;, &quot;Fabio&quot;, &quot;M&quot;, &quot;ITA&quot;, 99),</span></span>
<span class="line"><span>    (&quot;Blue&quot;, &quot;Manuela&quot;, &quot;F&quot;, &quot;VEN&quot;, 25)</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class DetailScreen(ModalScreen):</span></span>
<span class="line"><span>    ENABLE_COMMAND_PALETTE = False</span></span>
<span class="line"><span>    CSS_PATH = &quot;details_screen.tcss&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(</span></span>
<span class="line"><span>            self,</span></span>
<span class="line"><span>            name: str | None = None,</span></span>
<span class="line"><span>            ident: str | None = None,</span></span>
<span class="line"><span>            classes: str | None = None,</span></span>
<span class="line"><span>            row: List[Any] | None = None,</span></span>
<span class="line"><span>    ):</span></span>
<span class="line"><span>        super().__init__(name, ident, classes)</span></span>
<span class="line"><span>        # Rest of screen code will be show later</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class CustomCommand(Provider):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, screen: Screen[Any], match_style: Style | None = None):</span></span>
<span class="line"><span>        super().__init__(screen, match_style)</span></span>
<span class="line"><span>        self.table = None</span></span>
<span class="line"><span>        # Rest of provider code will be show later</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class CompetitorsApp(App):</span></span>
<span class="line"><span>    BINDINGS = [</span></span>
<span class="line"><span>        (&quot;q&quot;, &quot;quit_app&quot;, &quot;Quit&quot;),</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>    CSS_PATH = &quot;competitors_app.tcss&quot;</span></span>
<span class="line"><span>    # Enable the command palette, to add our custom filter commands</span></span>
<span class="line"><span>    ENABLE_COMMAND_PALETTE = True</span></span>
<span class="line"><span>    # Add the default commands and the TablePopulateProvider to get a row directly by name</span></span>
<span class="line"><span>    COMMANDS = App.COMMANDS | {CustomCommand}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def action_quit_app(self):</span></span>
<span class="line"><span>        self.exit(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def compose(self) -&gt; ComposeResult:</span></span>
<span class="line"><span>        yield Header(show_clock=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        table = DataTable(id=f&#39;competitors_table&#39;)</span></span>
<span class="line"><span>        table.cursor_type = &#39;row&#39;</span></span>
<span class="line"><span>        table.zebra_stripes = True</span></span>
<span class="line"><span>        table.loading = True</span></span>
<span class="line"><span>        yield table</span></span>
<span class="line"><span>        yield Footer()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def on_mount(self) -&gt; None:</span></span>
<span class="line"><span>        table = self.get_widget_by_id(f&#39;competitors_table&#39;, expect_type=DataTable)</span></span>
<span class="line"><span>        columns = [x.title() for x in MY_DATA[0]]</span></span>
<span class="line"><span>        table.add_columns(*columns)</span></span>
<span class="line"><span>        table.add_rows(MY_DATA[1:])</span></span>
<span class="line"><span>        table.loading = False</span></span>
<span class="line"><span>        table.tooltip = &quot;Select a row to get more details&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @on(DataTable.HeaderSelected)</span></span>
<span class="line"><span>    def on_header_clicked(self, event: DataTable.HeaderSelected):</span></span>
<span class="line"><span>        table = event.data_table</span></span>
<span class="line"><span>        table.sort(event.column_key)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @on(DataTable.RowSelected)</span></span>
<span class="line"><span>    def on_row_clicked(self, event: DataTable.RowSelected) -&gt; None:</span></span>
<span class="line"><span>        table = event.data_table</span></span>
<span class="line"><span>        row = table.get_row(event.row_key)</span></span>
<span class="line"><span>        runner_detail = DetailScreen(row=row)</span></span>
<span class="line"><span>        self.show_detail(runner_detail)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def show_detail(self, detailScreen: DetailScreen):</span></span>
<span class="line"><span>        self.push_screen(detailScreen)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    app = CompetitorsApp()</span></span>
<span class="line"><span>    app.title = f&quot;Summary&quot;.title()</span></span>
<span class="line"><span>    app.sub_title = f&quot;{len(MY_DATA)} users&quot;</span></span>
<span class="line"><span>    app.run()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div><p>有哪些部分值得我们关注呢？</p>`,9)),a("ol",null,[a("li",null,[s[58]||(s[58]=a("code",null,"compose",-1)),s[59]||(s[59]=n(" 方法中添加了 ",-1)),e(p,{href:"https://textual.textualize.io/widgets/header/"},{default:l(()=>[...s[56]||(s[56]=[n("表头",-1)])]),_:1}),s[60]||(s[60]=n("，“命令面板” 就位于此处，我们的表格（",-1)),e(p,{href:"https://textual.textualize.io/widgets/data_table/#guide"},{default:l(()=>[...s[57]||(s[57]=[n("DataTable",-1)])]),_:1}),s[61]||(s[61]=n("）也在这里。表格数据在 ",-1)),s[62]||(s[62]=a("code",null,"mount",-1)),s[63]||(s[63]=n(" 方法中填充。",-1))]),s[69]||(s[69]=a("li",null,[n("我们设定了预期的绑定（"),a("code",null,"BINDINGS"),n("），并指定了外部的 CSS 文件来设置样式（"),a("code",null,"CSS_PATH"),n("）。")],-1)),a("li",null,[s[65]||(s[65]=n("默认情况下，我们无需任何设置便能使用 ",-1)),e(p,{href:"https://textual.textualize.io/guide/command_palette/"},{default:l(()=>[...s[64]||(s[64]=[n("命令面板",-1)])]),_:1}),s[66]||(s[66]=n("，但在此我们显式启用了它（",-1)),s[67]||(s[67]=a("code",null,"ENABLE_COMMAND_PALETTE = True",-1)),s[68]||(s[68]=n("）。",-1))]),s[70]||(s[70]=t("<li>我们的应用有一个自定义表格搜索功能。当用户输入一名选手的名字后，应用会显示可能的匹配项，用户可以点击匹配项查看该选手的详细信息。这需要告诉应用我们有一个定制的命令提供者（<code>COMMANDS = App.COMMANDS | {CustomCo_ mmand}</code>），即类 <code>CustomCommand(Provider)</code>。</li><li>如果用户点击了表头，表格内容会按照该列进行排序。这是通过 <code>on_header_clicked</code> 方法实现的，该方法上具有 <code>@on(DataTable.HeaderSelected)</code> 注解。</li><li>类似地，当选中表格中的一行时， <code>on_row_clicked</code> 方法会被调用，这得益于它拥有 <code>@on(DataTable.RowSelected)</code> 注解。当方法接受选中的行后，它会推送一个新的屏幕，显示选中行的详细信息（<code>class DetailScreen(ModalScreen)</code>）。</li>",3))]),s[146]||(s[146]=t(`<p>现在，我们详细地探讨一下如何显示选手的详细信息。</p><h4 id="利用多屏展示复杂视图" tabindex="-1">利用多屏展示复杂视图 <a class="header-anchor" href="#利用多屏展示复杂视图" aria-label="Permalink to “利用多屏展示复杂视图”">​</a></h4><p><img src="https://tutorials.kodegeek.com/Textualize/img/summary_2023-12-28T19_05_44_404837.svg" alt=""></p><p>当用户选择表格中的一行，<code>on_row_clicked</code> 方法就会被调用。它收到的是一个 <code>DataTable.RowSelected</code> 类型的事件。从这里我们会用选中的行的内容构建一个 <code>DetailScreen(ModalScreen)</code> 类的实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from typing import Any, List</span></span>
<span class="line"><span>from textual import on</span></span>
<span class="line"><span>from textual.app import ComposeResult</span></span>
<span class="line"><span>from textual.screen import ModalScreen</span></span>
<span class="line"><span>from textual.widgets import Button, MarkdownViewer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MY_DATA = [</span></span>
<span class="line"><span>    (&quot;level&quot;, &quot;name&quot;, &quot;gender&quot;, &quot;country&quot;, &quot;age&quot;),</span></span>
<span class="line"><span>    (&quot;Green&quot;, &quot;Wai&quot;, &quot;M&quot;, &quot;MYS&quot;, 22),</span></span>
<span class="line"><span>    (&quot;Red&quot;, &quot;Ryoji&quot;, &quot;M&quot;, &quot;JPN&quot;, 30),</span></span>
<span class="line"><span>    (&quot;Purple&quot;, &quot;Fabio&quot;, &quot;M&quot;, &quot;ITA&quot;, 99),</span></span>
<span class="line"><span>    (&quot;Blue&quot;, &quot;Manuela&quot;, &quot;F&quot;, &quot;VEN&quot;, 25)</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class DetailScreen(ModalScreen):</span></span>
<span class="line"><span>    ENABLE_COMMAND_PALETTE = False</span></span>
<span class="line"><span>    CSS_PATH = &quot;details_screen.tcss&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(</span></span>
<span class="line"><span>            self,</span></span>
<span class="line"><span>            name: str | None = None,</span></span>
<span class="line"><span>            ident: str | None = None,</span></span>
<span class="line"><span>            classes: str | None = None,</span></span>
<span class="line"><span>            row: List[Any] | None = None,</span></span>
<span class="line"><span>    ):</span></span>
<span class="line"><span>        super().__init__(name, ident, classes)</span></span>
<span class="line"><span>        self.row: List[Any] = row</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def compose(self) -&gt; ComposeResult:</span></span>
<span class="line"><span>        self.log.info(f&quot;Details: {self.row}&quot;)</span></span>
<span class="line"><span>        columns = MY_DATA[0]</span></span>
<span class="line"><span>        row_markdown = &quot;\\n&quot;</span></span>
<span class="line"><span>        for i in range(0, len(columns)):</span></span>
<span class="line"><span>            row_markdown += f&quot;* **{columns[i].title()}:** {self.row[i]}\\n&quot;</span></span>
<span class="line"><span>        yield MarkdownViewer(f&quot;&quot;&quot;## User details:</span></span>
<span class="line"><span>        {row_markdown}</span></span>
<span class="line"><span>        &quot;&quot;&quot;)</span></span>
<span class="line"><span>        button = Button(&quot;Close&quot;, variant=&quot;primary&quot;, id=&quot;close&quot;)</span></span>
<span class="line"><span>        button.tooltip = &quot;Go back to main screen&quot;</span></span>
<span class="line"><span>        yield button</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @on(Button.Pressed, &quot;#close&quot;)</span></span>
<span class="line"><span>    def on_button_pressed(self, _) -&gt; None:</span></span>
<span class="line"><span>        self.app.pop_screen()</span></span></code></pre></div><p>这个类的职责很直接：</p>`,6)),a("ol",null,[a("li",null,[s[72]||(s[72]=a("code",null,"compose",-1)),s[73]||(s[73]=n(" 方法取得此行数据，并利用一个 ",-1)),e(p,{href:"https://textual.textualize.io/widget_gallery/#markdownviewer"},{default:l(()=>[...s[71]||(s[71]=[n("支持 Markdown 渲染的组件",-1)])]),_:1}),s[74]||(s[74]=n(" 来展示内容。它的便利之处在于，它会为我们自动生成一个内容目录。",-1))]),s[75]||(s[75]=a("li",null,[n("当用户点击 “close” 后，方法 "),a("code",null,"on_button_pressed"),n(" 会引导应用回到原始屏幕。注解 "),a("code",null,'@on(Button.Pressed, "#close")'),n(" 用来接收按键被点击的事件。")],-1))]),s[147]||(s[147]=a("p",null,"最后，我们来详细讲解一下那个多功能的搜索栏（也叫做命令面板）。",-1)),s[148]||(s[148]=a("h4",{id:"命令面板的搜索功能",tabindex:"-1"},[n("命令面板的搜索功能 "),a("a",{class:"header-anchor",href:"#命令面板的搜索功能","aria-label":"Permalink to “命令面板的搜索功能”"},"​")],-1)),s[149]||(s[149]=a("p",null,[a("img",{src:"https://tutorials.kodegeek.com/Textualize/img/summary_2023-12-28T19_05_55_822030.svg",alt:""})],-1)),a("p",null,[s[77]||(s[77]=n("任何使用了表头的 Textual 应用都默认开启了 ",-1)),e(p,{href:"https://textual.textualize.io/guide/command_palette/"},{default:l(()=>[...s[76]||(s[76]=[n("命令面板",-1)])]),_:1}),s[78]||(s[78]=n("。有意思的是，你可以在 ",-1)),s[79]||(s[79]=a("code",null,"CompetitorsApp",-1)),s[80]||(s[80]=n(" 类中添加自定义的命令，这会增加到默认命令集之上：",-1))]),s[150]||(s[150]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>COMMANDS = App.COMMANDS | {CustomCommand}</span></span></code></pre></div><p>然后是执行大部分任务的 <code>CustomCommand(Provider)</code> 类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from functools import partial</span></span>
<span class="line"><span>from typing import Any, List</span></span>
<span class="line"><span>from rich.style import Style</span></span>
<span class="line"><span>from textual.command import Provider, Hit</span></span>
<span class="line"><span>from textual.screen import ModalScreen, Screen</span></span>
<span class="line"><span>from textual.widgets import DataTable</span></span>
<span class="line"><span>from textual.app import App</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class CustomCommand(Provider):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, screen: Screen[Any], match_style: Style | None = None):</span></span>
<span class="line"><span>        super().__init__(screen, match_style)</span></span>
<span class="line"><span>        self.table = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    async def startup(self) -&gt; None:</span></span>
<span class="line"><span>        my_app = self.app</span></span>
<span class="line"><span>        my_app.log.info(f&quot;Loaded provider: CustomCommand&quot;)</span></span>
<span class="line"><span>        self.table = my_app.query(DataTable).first()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    async def search(self, query: str) -&gt; Hit:</span></span>
<span class="line"><span>        matcher = self.matcher(query)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        my_app = self.screen.app</span></span>
<span class="line"><span>        assert isinstance(my_app, CompetitorsApp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        my_app.log.info(f&quot;Got query: {query}&quot;)</span></span>
<span class="line"><span>        for row_key in self.table.rows:</span></span>
<span class="line"><span>            row = self.table.get_row(row_key)</span></span>
<span class="line"><span>            my_app.log.info(f&quot;Searching {row}&quot;)</span></span>
<span class="line"><span>            searchable = row[1]</span></span>
<span class="line"><span>            score = matcher.match(searchable)</span></span>
<span class="line"><span>            if score &gt; 0:</span></span>
<span class="line"><span>                runner_detail = DetailScreen(row=row)</span></span>
<span class="line"><span>                yield Hit(</span></span>
<span class="line"><span>                    score,</span></span>
<span class="line"><span>                    matcher.highlight(f&quot;{searchable}&quot;),</span></span>
<span class="line"><span>                    partial(my_app.show_detail, runner_detail),</span></span>
<span class="line"><span>                    help=f&quot;Show details about {searchable}&quot;</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class DetailScreen(ModalScreen):</span></span>
<span class="line"><span>        def __init__(</span></span>
<span class="line"><span>            self,</span></span>
<span class="line"><span>            name: str | None = None,</span></span>
<span class="line"><span>            ident: str | None = None,</span></span>
<span class="line"><span>            classes: str | None = None,</span></span>
<span class="line"><span>            row: List[Any] | None = None,</span></span>
<span class="line"><span>    ):</span></span>
<span class="line"><span>        super().__init__(name, ident, classes)</span></span>
<span class="line"><span>        # Code of this class explained on the previous section</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class CompetitorsApp(App):</span></span>
<span class="line"><span>    # Add the default commands and the TablePopulateProvider to get a row directly by name</span></span>
<span class="line"><span>    COMMANDS = App.COMMANDS | {CustomCommand}</span></span>
<span class="line"><span>    # Most of the code shown before, only displaying relevant code</span></span>
<span class="line"><span>    def show_detail(self, detailScreen: DetailScreen):</span></span>
<span class="line"><span>        self.push_screen(detailScreen)</span></span></code></pre></div><ol><li>所有继承自 <code>Provider</code> 的类需实现 <code>search</code> 方法。在我们的例子中，我们还覆盖了 <code>startup</code> 方法，为了获取到我们应用表格（和其内容）的引用，这里使用到了 <code>App.query(DataTable).first()</code>。在类的生命周期中， <code>startup</code> 方法只会被调用一次。</li><li>在 <code>search</code> 方法内，我们使用 <code>Provider.matcher</code> 对每个表格行的第二列（即名字）进行模糊搜索，以与用户在 TUI 中输入的词条进行比较。<code>matcher.match(searchable)</code> 返回一个整型的评分，大于零说明匹配成功。</li><li>在 <code>search</code> 方法中，如果评分大于零，则返回一个 <code>Hit</code> 对象，以告知命令面板搜索查询是否成功。</li><li>每个 <code>Hit</code> 都有以下信息：评分（用于在命令面板中对匹配项排序）、高亮显示的搜索词、一个可调用对象的引用（在我们的案例中，它是一个可以将表格行推送到新屏幕的函数）。</li><li><code>Provider</code> 类的所有方法都是异步的。这使你能释放主线程，只有当响应准备好后才返回结果，这个过程不会冻结用户界面。</li></ol><p>理解了这些信息，我们就可以现在展示赛手的详细信息了。</p><p>尽管这个架构的追踪功能相对直观，但是组件间传递的消息复杂性不可忽视。幸运的是，Textual 提供了有效的调试工具帮助我们理解背后的工作原理。</p><h3 id="textual-应用的问题排查" tabindex="-1">Textual 应用的问题排查 <a class="header-anchor" href="#textual-应用的问题排查" aria-label="Permalink to “Textual 应用的问题排查”">​</a></h3>`,7)),a("p",null,[s[82]||(s[82]=n("对于 Python 的 Textual 应用进行 ",-1)),e(p,{href:"https://github.com/josevnz/tutorials/blob/main/docs/PythonDebugger/README.md"},{default:l(()=>[...s[81]||(s[81]=[n("调试",-1)])]),_:1}),s[83]||(s[83]=n(" 相较而言更具挑战性。这是因为其中有一些操作可能是异步的，而在解决组件问题时设置断点可能颇为复杂。",-1))]),s[151]||(s[151]=t(`<p>根据具体情况，你可以使用一些工具。但首先，确保你已经安装了 textual 的开发工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pip install textual-dev==1.3.0</span></span></code></pre></div><h4 id="确保你能捕捉到正确的按键" tabindex="-1">确保你能捕捉到正确的按键 <a class="header-anchor" href="#确保你能捕捉到正确的按键" aria-label="Permalink to “确保你能捕捉到正确的按键”">​</a></h4><p>不确定 Textual 应用是否能捕捉到你的按键操作？运行 keys 应用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>textual keys</span></span></code></pre></div><p>这让你能够验证一下你的按键组合，并确认在 Textual 中产生了哪些事件。</p><h4 id="图片比千言万语更直观" tabindex="-1">图片比千言万语更直观 <a class="header-anchor" href="#图片比千言万语更直观" aria-label="Permalink to “图片比千言万语更直观”">​</a></h4><p>如果说你在布局设计上遇到了问题，想向他人展示你当前的困境，Textual 为你的运行应用提供了截图功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>textual run --screenshot 5 ./kodegeek_textualize/log_scroller.py</span></span></code></pre></div><p>就像你所看到的，我是通过这种方式为这篇教程创建了插图。</p><h4 id="捕获事件并输出定制消息" tabindex="-1">捕获事件并输出定制消息 <a class="header-anchor" href="#捕获事件并输出定制消息" aria-label="Permalink to “捕获事件并输出定制消息”">​</a></h4><p>在 Textual 中，每一个应用实例都有一个日志记录器，可以使用如下方式访问：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>my_app = self.screen.app</span></span>
<span class="line"><span>my_app.log.info(f&quot;Loaded provider: CustomCommand&quot;)</span></span></code></pre></div><p>想要查看这些消息，首先需要开启一个控制台：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>. ~/virtualenv/Textualize/bin/activate</span></span>
<span class="line"><span>textual console</span></span></code></pre></div><p>然后在另一个终端运行你的应用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>. ~/virtualenv/Textualize/bin/activate</span></span>
<span class="line"><span>textual run --dev ./kodegeek_textualize/log_scroller.py</span></span></code></pre></div><p>在运行控制台的终端中，你可以看到实时的事件和消息输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>▌Textual Development Console v0.46.0</span></span>
<span class="line"><span>▌Run a Textual app with textual run --dev my_app.py to connect.</span></span>
<span class="line"><span>▌Press Ctrl+C to quit.</span></span>
<span class="line"><span>─────────────────────────────────────────────────────────────────────────────── Client &#39;127.0.0.1&#39; connected ────────────────────────────────────────────────────────────────────────────────</span></span>
<span class="line"><span>[20:29:43] SYSTEM                                                                                                                                                                 app.py:2188</span></span>
<span class="line"><span>Connected to devtools ( ws://127.0.0.1:8081 )</span></span>
<span class="line"><span>[20:29:43] SYSTEM                                                                                                                                                                 app.py:2192</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>[20:29:43] SYSTEM                                                                                                                                                                 app.py:2194</span></span>
<span class="line"><span>driver=&lt;class &#39;textual.drivers.linux_driver.LinuxDriver&#39;&gt;</span></span>
<span class="line"><span>[20:29:43] SYSTEM                                                                                                                                                                 app.py:2195</span></span>
<span class="line"><span>loop=&lt;_UnixSelectorEventLoop running=True closed=False debug=False&gt;</span></span>
<span class="line"><span>[20:29:43] SYSTEM                                                                                                                                                                 app.py:2196</span></span>
<span class="line"><span>features=frozenset({&#39;debug&#39;, &#39;devtools&#39;})</span></span>
<span class="line"><span>[20:29:43] SYSTEM                                                                                                                                                                 app.py:2228</span></span>
<span class="line"><span>STARTED FileMonitor({PosixPath(&#39;/home/josevnz/TextualizeTutorial/docs/Textualize/kodegeek_textualize/os_app.tcss&#39;)})</span></span>
<span class="line"><span>[20:29:43] EVENT</span></span></code></pre></div><p>此外，以开发者模式运行的另一大好处是，如果你更改了 CSS，应用会尝试重新渲染，而无需重启程序。</p><h3 id="如何编写单元测试" tabindex="-1">如何编写单元测试 <a class="header-anchor" href="#如何编写单元测试" aria-label="Permalink to “如何编写单元测试”">​</a></h3>`,21)),a("p",null,[s[85]||(s[85]=n("为你全新开发的 Textual 应用编写 ",-1)),e(p,{href:"https://docs.python.org/3/library/unittest.html"},{default:l(()=>[...s[84]||(s[84]=[n("单元测试",-1)])]),_:1}),s[86]||(s[86]=n("，应该如何操作呢？",-1))]),a("p",null,[s[88]||(s[88]=n("在 ",-1)),e(p,{href:"https://textual.textualize.io/guide/testing/"},{default:l(()=>[...s[87]||(s[87]=[n("官方文档",-1)])]),_:1}),s[89]||(s[89]=n(" 展示了几种用于测试我们应用的方式。",-1))]),a("p",null,[s[91]||(s[91]=n("我将采用 ",-1)),e(p,{href:"https://docs.python.org/3/library/unittest.html"},{default:l(()=>[...s[90]||(s[90]=[n("unittest",-1)])]),_:1}),s[92]||(s[92]=n(" 进行测试。为了处理异步例程，我们会需要特别的类 ",-1)),s[93]||(s[93]=a("code",null,"unittest.IsolatedAsyncioTestCase",-1)),s[94]||(s[94]=n(" ：",-1))]),s[152]||(s[152]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import unittest</span></span>
<span class="line"><span>from textual.widgets import Log, Button</span></span>
<span class="line"><span>from kodegeek_textualize.log_scroller import OsApp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LogScrollerTestCase(unittest.IsolatedAsyncioTestCase):</span></span>
<span class="line"><span>    async def test_log_scroller(self):</span></span>
<span class="line"><span>        app = OsApp()</span></span>
<span class="line"><span>        self.assertIsNotNone(app)</span></span>
<span class="line"><span>        async with app.run_test() as pilot:</span></span>
<span class="line"><span>            # Execute the default commands</span></span>
<span class="line"><span>            await pilot.click(Button)</span></span>
<span class="line"><span>            await pilot.pause()</span></span>
<span class="line"><span>            event_log = app.screen.query(Log).first()  # We pushed the screen, query nodes from there</span></span>
<span class="line"><span>            self.assertTrue(event_log.lines)</span></span>
<span class="line"><span>            await pilot.click(&quot;#close&quot;)  # Close the new screen, pop the original one</span></span>
<span class="line"><span>            await pilot.press(&quot;q&quot;)  # Quit the app by pressing q</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    unittest.main()</span></span></code></pre></div><p>现在让我们详细看看 <code>test_log_scroller</code> 方法中的操作步骤：</p><ol><li>通过 <code>app.run_test()</code> 获取一个 <code>Pilot</code> 实例。然后点击主按钮，运行包含默认指令的查询，随后等待所有事件的处理。</li><li>从我们新推送出的屏幕中获取 <code>Log</code>，确保我们已获得几行返回的内容，即它并非空的。</li><li>关闭新屏幕并重新呈现旧屏幕。</li><li>最后，按下 <code>q</code>，退出应用。</li></ol><p>可以测试表格吗？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import unittest</span></span>
<span class="line"><span>from textual.widgets import DataTable, MarkdownViewer</span></span>
<span class="line"><span>from kodegeek_textualize.table_with_detail_screen import CompetitorsApp</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TableWithDetailTestCase(unittest.IsolatedAsyncioTestCase):</span></span>
<span class="line"><span>    async def test_app(self):</span></span>
<span class="line"><span>        app = CompetitorsApp()</span></span>
<span class="line"><span>        self.assertIsNotNone(app)</span></span>
<span class="line"><span>        async with app.run_test() as pilot:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &quot;&quot;&quot;</span></span>
<span class="line"><span>            Test the command palette</span></span>
<span class="line"><span>            &quot;&quot;&quot;</span></span>
<span class="line"><span>            await pilot.press(&quot;ctrl+\\\\&quot;)</span></span>
<span class="line"><span>            for char in &quot;manuela&quot;.split():</span></span>
<span class="line"><span>                await pilot.press(char)</span></span>
<span class="line"><span>            await pilot.press(&quot;enter&quot;)</span></span>
<span class="line"><span>            markdown_viewer = app.screen.query(MarkdownViewer).first()</span></span>
<span class="line"><span>            self.assertTrue(markdown_viewer.document)</span></span>
<span class="line"><span>            await pilot.click(&quot;#close&quot;)  # Close the new screen, pop the original one</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &quot;&quot;&quot;</span></span>
<span class="line"><span>            Test the table</span></span>
<span class="line"><span>            &quot;&quot;&quot;</span></span>
<span class="line"><span>            table = app.screen.query(DataTable).first()</span></span>
<span class="line"><span>            coordinate = table.cursor_coordinate</span></span>
<span class="line"><span>            self.assertTrue(table.is_valid_coordinate(coordinate))</span></span>
<span class="line"><span>            await pilot.press(&quot;enter&quot;)</span></span>
<span class="line"><span>            await pilot.pause()</span></span>
<span class="line"><span>            markdown_viewer = app.screen.query(MarkdownViewer).first()</span></span>
<span class="line"><span>            self.assertTrue(markdown_viewer)</span></span>
<span class="line"><span>            # Quit the app by pressing q</span></span>
<span class="line"><span>            await pilot.press(&quot;q&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    unittest.main()</span></span></code></pre></div><p>如果你运行所有的测试，你将看到如下类似的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(Textualize) [josevnz@dmaf5 Textualize]$ python -m unittest tests/*.py</span></span>
<span class="line"><span>..</span></span>
<span class="line"><span>----------------------------------------------------------------------</span></span>
<span class="line"><span>Ran 2 tests in 2.065s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OK</span></span></code></pre></div><p>这是测试 TUI 的一个不错的方式，对吧？</p><h3 id="打包-textual-应用" tabindex="-1">打包 Textual 应用 <a class="header-anchor" href="#打包-textual-应用" aria-label="Permalink to “打包 Textual 应用”">​</a></h3><p>打包 Textual 应用与打包常规 Python 应用并没有太大区别。你需要记住，需要包含那些控制应用外观的 CSS 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>. ~/virtualenv/Textualize/bin/activate</span></span>
<span class="line"><span>python -m build</span></span>
<span class="line"><span>pip install dist/KodegeekTextualize-*-py3-none-any.whl</span></span></code></pre></div>`,11)),a("p",null,[s[96]||(s[96]=n("这个教程的 ",-1)),e(p,{href:"https://tutorials.kodegeek.com/Textualize/pyproject.toml"},{default:l(()=>[...s[95]||(s[95]=[n("pyproject.toml",-1)])]),_:1}),s[97]||(s[97]=n(" 文件是一个打包应用的良好起点，告诉你需要做什么。",-1))]),s[153]||(s[153]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[build-system]</span></span>
<span class="line"><span>requires = [</span></span>
<span class="line"><span>    &quot;setuptools &gt;= 67.8.0&quot;,</span></span>
<span class="line"><span>    &quot;wheel&gt;=0.42.0&quot;,</span></span>
<span class="line"><span>    &quot;build&gt;=1.0.3&quot;,</span></span>
<span class="line"><span>    &quot;twine&gt;=4.0.2&quot;,</span></span>
<span class="line"><span>    &quot;textual-dev&gt;=1.2.1&quot;</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>build-backend = &quot;setuptools.build_meta&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[project]</span></span>
<span class="line"><span>name = &quot;KodegeekTextualize&quot;</span></span>
<span class="line"><span>version = &quot;0.0.3&quot;</span></span>
<span class="line"><span>authors = [</span></span>
<span class="line"><span>    {name = &quot;Jose Vicente Nunez&quot;, email = &quot;kodegeek.com@protonmail.com&quot;},</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>description = &quot;Collection of scripts that show how to use several features of textualize&quot;</span></span>
<span class="line"><span>readme = &quot;README.md&quot;</span></span>
<span class="line"><span>requires-python = &quot;&gt;=3.9&quot;</span></span>
<span class="line"><span>keywords = [&quot;running&quot;, &quot;race&quot;]</span></span>
<span class="line"><span>classifiers = [</span></span>
<span class="line"><span>    &quot;Environment :: Console&quot;,</span></span>
<span class="line"><span>    &quot;Development Status :: 4 - Beta&quot;,</span></span>
<span class="line"><span>    &quot;Programming Language :: Python :: 3&quot;,</span></span>
<span class="line"><span>    &quot;Intended Audience :: End Users/Desktop&quot;,</span></span>
<span class="line"><span>    &quot;Topic :: Utilities&quot;</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>dynamic = [&quot;dependencies&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[project.scripts]</span></span>
<span class="line"><span>log_scroller = &quot;kodegeek_textualize.log_scroller:main&quot;</span></span>
<span class="line"><span>table_detail = &quot;kodegeek_textualize.table_with_detail_screen:main&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[tool.setuptools]</span></span>
<span class="line"><span>include-package-data = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[tool.setuptools.packages.find]</span></span>
<span class="line"><span>where = [&quot;.&quot;]</span></span>
<span class="line"><span>exclude = [&quot;test*&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[tool.setuptools.package-data]</span></span>
<span class="line"><span>kodegeek_textualize = [&quot;*.txt&quot;, &quot;*.tcss&quot;, &quot;*.csv&quot;]</span></span>
<span class="line"><span>img = [&quot;*.svg&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[tool.setuptools.dynamic]</span></span>
<span class="line"><span>dependencies = {file = [&quot;requirements.txt&quot;]}</span></span></code></pre></div><h3 id="未来计划" tabindex="-1">未来计划 <a class="header-anchor" href="#未来计划" aria-label="Permalink to “未来计划”">​</a></h3><p>这个简短的教程只覆盖了 Textual 的部分方面。还有很多需要探索和学习的内容：</p>`,3)),a("ul",null,[a("li",null,[s[100]||(s[100]=n("强烈建议你查看 ",-1)),e(p,{href:"https://textual.textualize.io/tutorial/"},{default:l(()=>[...s[98]||(s[98]=[n("官方教程",-1)])]),_:1}),s[101]||(s[101]=n("。有大量的示例和指向参考 ",-1)),e(p,{href:"https://textual.textualize.io/api/"},{default:l(()=>[...s[99]||(s[99]=[n("API",-1)])]),_:1}),s[102]||(s[102]=n(" 的链接。",-1))]),a("li",null,[s[104]||(s[104]=n("Textual 可以使用来自 ",-1)),e(p,{href:"https://github.com/Textualize/rich"},{default:l(()=>[...s[103]||(s[103]=[n("Rich",-1)])]),_:1}),s[105]||(s[105]=n(" 项目的组件，这个项目是一切的起源。我认为其中一些甚至可能所有这些组件在某些时候都会合并到 Textual 中。Textual 框架对于使用高级 API 的复杂应用更能胜任，但 Rich 也有很多漂亮的功能。",-1))]),a("li",null,[s[107]||(s[107]=n("创建你自己的组件！同样，在设计 TUI 时，",-1)),e(p,{href:"https://textual.textualize.io/how-to/design-a-layout/"},{default:l(()=>[...s[106]||(s[106]=[n("拿一张纸，画出你希望这些组件如何布局的",-1)])]),_:1}),s[108]||(s[108]=n("，这会为你后期省去很多时间和麻烦。",-1))]),a("li",null,[s[110]||(s[110]=n("调试 Python 应用可能会有点复杂。有时你可能需要 ",-1)),e(p,{href:"https://github.com/josevnz/DebuggingApplications/blob/main/StracePythonWireshark/README.md"},{default:l(()=>[...s[109]||(s[109]=[n("混合使用不同的工具",-1)])]),_:1}),s[111]||(s[111]=n(" 来找出应用的问题所在。",-1))]),a("li",null,[s[113]||(s[113]=n("异步 IO 是一个复杂的话题，你应该 ",-1)),e(p,{href:"https://docs.python.org/3/library/asyncio-dev.html"},{default:l(()=>[...s[112]||(s[112]=[n("阅读开发者文档",-1)])]),_:1}),s[114]||(s[114]=n(" 来了解更多可能的选择。",-1))]),a("li",null,[s[117]||(s[117]=n("Textual 被其他项目所使用。其中一个非常易于使用的项目是 ",-1)),e(p,{href:"https://github.com/Textualize/trogon"},{default:l(()=>[...s[115]||(s[115]=[n("Trogon",-1)])]),_:1}),s[118]||(s[118]=n("。",-1)),e(p,{href:"https://github.com/josevnz/CLIWithClickAndTrogon/blob/main/README.md"},{default:l(()=>[...s[116]||(s[116]=[n("它会让你的 CLI 可以自我发现",-1)])]),_:1}),s[119]||(s[119]=n("。",-1))]),a("li",null,[e(p,{href:"https://github.com/Textualize/textual-web"},{default:l(()=>[...s[120]||(s[120]=[n("Textual-web",-1)])]),_:1}),s[121]||(s[121]=n(" 是个很有前景的项目，能让你在浏览器上运行 Textual 应用。尽管它不如 Textual 成熟，但它的进化速度非常快。",-1))]),a("li",null,[s[123]||(s[123]=n("最后，",-1)),e(p,{href:"https://www.textualize.io/projects/"},{default:l(()=>[...s[122]||(s[122]=[n("查看这些外部项目",-1)])]),_:1}),s[124]||(s[124]=n("。在项目组合中有许多有用的开源应用。",-1))])]),s[154]||(s[154]=a("p",null,[a("em",null,"（题图：DA/f11b0eb0-8e16-4cbe-986a-0fe978f6732a）")],-1)),s[155]||(s[155]=a("hr",null,null,-1)),a("p",null,[s[126]||(s[126]=n("via: ",-1)),e(p,{href:"https://fedoramagazine.org/crash-course-on-using-textual/"},{default:l(()=>[...s[125]||(s[125]=[n("https://fedoramagazine.org/crash-course-on-using-textual/",-1)])]),_:1})]),a("p",null,[s[131]||(s[131]=n("作者：",-1)),e(p,{href:"https://fedoramagazine.org/author/josevnz/"},{default:l(()=>[...s[127]||(s[127]=[n("Jose Nunez",-1)])]),_:1}),s[132]||(s[132]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[128]||(s[128]=[n("lujun9972",-1)])]),_:1}),s[133]||(s[133]=n(" 译者：",-1)),e(p,{href:"https://linux.cn/lctt/ChatGPT"},{default:l(()=>[...s[129]||(s[129]=[n("ChatGPT",-1)])]),_:1}),s[134]||(s[134]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[130]||(s[130]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[137]||(s[137]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[135]||(s[135]=[n("LCTT",-1)])]),_:1}),s[138]||(s[138]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[136]||(s[136]=[n("Linux中国",-1)])]),_:1}),s[139]||(s[139]=n(" 荣誉推出",-1))])])}const x=i(d,[["render",c]]);export{T as __pageData,x as default};
