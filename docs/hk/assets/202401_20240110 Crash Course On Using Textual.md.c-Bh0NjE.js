import{_ as i,a0 as o,w as u,s as r,ao as t,I as a,x as n,a1 as e,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"Textual：為 Python 增加漂亮的文本用户界面（TUI） | LCTT x X-CMD","titleTemplate":false,"description":"Textual：為 Python 增加漂亮的文本用户界面（TUI） | LCTT (202401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Textual：為 Python 增加漂亮的文本用户界面（TUI） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Textual：為 Python 增加漂亮的文本用户界面（TUI） | LCTT (202401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202401/20240110 Crash Course On Using Textual","title":"Textual：為 Python 增加漂亮的文本用户界面（TUI）","tag":"202401","desc":""},"relativePath":"202401/20240110 Crash Course On Using Textual.md","filePath":"[post].md"}'),d={name:"202401/20240110 Crash Course On Using Textual.md"};function c(g,s,m,f,q,b){const p=o("Link");return u(),r("div",null,[s[140]||(s[140]=t('<h1 id="textual-為-python-增加漂亮的文本用户界面-tui" tabindex="-1">Textual：為 Python 增加漂亮的文本用户界面（TUI） <a class="header-anchor" href="#textual-為-python-增加漂亮的文本用户界面-tui" aria-label="Permalink to “Textual：為 Python 增加漂亮的文本用户界面（TUI）”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202401/15/110359fptrxpqffztniz45.jpg" alt=""></p><h3 id="快速入門使用-textual" tabindex="-1">快速入門使用 Textual <a class="header-anchor" href="#快速入門使用-textual" aria-label="Permalink to “快速入門使用 Textual”">​</a></h3>',3)),a("p",null,[s[1]||(s[1]=n("Python 在 Linux 上有像 ",-1)),e(p,{href:"https://docs.python.org/3/library/tkinter.html"},{default:l(()=>[...s[0]||(s[0]=[n("TkInter",-1)])]),_:1}),s[2]||(s[2]=n(" 這樣的優秀 GUI（圖形用户界面）開發庫，但如果你不能運行圖形應用程序怎麼辦？",-1))]),a("p",null,[s[4]||(s[4]=n("文本終端，並非只在 Linux 上有，而且 BSD 和其它的出色的類 Unix 操作系統上也有。如果你的代碼是用 Python 編寫的，你應該使用 ",-1)),e(p,{href:"https://textual.textualize.io/"},{default:l(()=>[...s[3]||(s[3]=[n("Textual",-1)])]),_:1}),s[5]||(s[5]=n(" 來幫助你編寫 TUI（文本用户界面）。在這個快速介紹中，我將向你展示兩個你可以用 Textual 做的示例，並且介紹它未來可能的應用方向。",-1))]),s[141]||(s[141]=t(`<p>所以 Textual 是什麼？</p><blockquote><p>Textual 是一個為 Python 構建的快速應用程序開發框架，由 Textualize.io 構建。它可以讓你用簡單的 Python API 構建複雜的用户界面，並運行在終端或網絡瀏覽器上！</p></blockquote><h4 id="你需要的跟進這個教程的工具" tabindex="-1">你需要的跟進這個教程的工具 <a class="header-anchor" href="#你需要的跟進這個教程的工具" aria-label="Permalink to “你需要的跟進這個教程的工具”">​</a></h4><p>你需要有以下條件：</p><ol><li>具備基礎的編程經驗，最好熟練使用 Python。</li><li>理解基礎的面向對象概念，比如類和繼承。</li><li>一台安裝了 Linux 與 Python 3.9+ 的機器</li><li>一款好的編輯器（Vim 或者 PyCharm 是不錯的選擇）</li></ol><p>我儘可能簡單化代碼，以便你能輕鬆理解。此外，我強烈建議你下載代碼，或至少按照接下來的説明安裝相關程序。</p><h4 id="安裝步驟" tabindex="-1">安裝步驟 <a class="header-anchor" href="#安裝步驟" aria-label="Permalink to “安裝步驟”">​</a></h4><p>首先創建一個虛擬環境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>python3 -m venv ~/virtualenv/Textualize</span></span></code></pre></div><p>現在，你可以克隆 Git 倉庫並創建一個可以編輯的發佈版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>. ~/virtualenv/Textualize/bin/activate</span></span>
<span class="line"><span>pip install --upgrade pip</span></span>
<span class="line"><span>pip install --upgrade wheel</span></span>
<span class="line"><span>pip install --upgrade build</span></span>
<span class="line"><span>pip install --editable .</span></span></code></pre></div><p>或者直接從 Pypi.org 安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>. ~/virtualenv/Textualize/bin/activate</span></span>
<span class="line"><span>pip install --upgrade KodegeekTextualize</span></span></code></pre></div><h3 id="我們的首個程序-日誌瀏覽器" tabindex="-1">我們的首個程序：日誌瀏覽器 <a class="header-anchor" href="#我們的首個程序-日誌瀏覽器" aria-label="Permalink to “我們的首個程序：日誌瀏覽器”">​</a></h3><p><img src="https://tutorials.kodegeek.com/Textualize/img/output_of_multiple_well_known_unix_commands_2023-12-28T19_13_32_605621.svg" alt=""></p>`,15)),a("p",null,[s[7]||(s[7]=n("這個 ",-1)),s[8]||(s[8]=a("em",null,"日誌瀏覽器",-1)),s[9]||(s[9]=n(" 就是一款簡單的應用，能執行用户 ",-1)),a("em",null,[e(p,{href:"https://manpages.org/bash"},{default:l(()=>[...s[6]||(s[6]=[n("PATH",-1)])]),_:1})]),s[10]||(s[10]=n(" 路徑上的一系列 UNIX 命令，並在任務執行完畢後捕獲輸出。",-1))]),s[142]||(s[142]=t(`<p>以下是該應用的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import shutil</span></span>
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
<span class="line"><span>    main()</span></span></code></pre></div><p>現在我們逐條梳理一下程序的代碼：</p>`,3)),a("ol",null,[a("li",null,[s[12]||(s[12]=n("每個應用都擴展自 ",-1)),s[13]||(s[13]=a("code",null,"App",-1)),s[14]||(s[14]=n(" 類。其中最重要的有 ",-1)),s[15]||(s[15]=a("code",null,"compose",-1)),s[16]||(s[16]=n(" 與 ",-1)),s[17]||(s[17]=a("code",null,"mount",-1)),s[18]||(s[18]=n(" 等方法。但在當前應用中，我們只實現了 ",-1)),e(p,{href:"https://textual.textualize.io/tutorial/#composing-the-widgets"},{default:l(()=>[...s[11]||(s[11]=[n("compose",-1)])]),_:1}),s[19]||(s[19]=n("。",-1))]),a("li",null,[s[22]||(s[22]=n("在 ",-1)),s[23]||(s[23]=a("code",null,"compose",-1)),s[24]||(s[24]=n(" 方法中，你會返回一系列 ",-1)),a("ruby",null,[e(p,{href:"https://textual.textualize.io/widget_gallery/"},{default:l(()=>[...s[20]||(s[20]=[n("組件",-1)])]),_:1}),s[21]||(s[21]=a("rt",null,"Widget",-1))]),s[25]||(s[25]=n("，並按順序添加到主屏幕中。每一個組件都有定製自身外觀的選項。",-1))]),a("li",null,[s[28]||(s[28]=n("你可以設定單字母的 ",-1)),a("ruby",null,[e(p,{href:"https://textual.textualize.io/api/binding/"},{default:l(()=>[...s[26]||(s[26]=[n("綁定",-1)])]),_:1}),s[27]||(s[27]=a("rt",null,"binding",-1))]),s[29]||(s[29]=n("，比如此處我們設定了 ",-1)),s[30]||(s[30]=a("code",null,"q",-1)),s[31]||(s[31]=n(" 鍵來退出應用（參見 ",-1)),s[32]||(s[32]=a("code",null,"action_quit_app",-1)),s[33]||(s[33]=n(" 函數和 ",-1)),s[34]||(s[34]=a("code",null,"BINDINGS",-1)),s[35]||(s[35]=n(" 列表）。",-1))]),s[36]||(s[36]=a("li",null,[n("利用 "),a("code",null,"SelectionList"),n(" 組件，我們展示了待運行的命令列表。然後，你可以通過 "),a("code",null,"@on(SelectionList.SelectedChanged)"),n(" 註解以及 "),a("code",null,"on_selection"),n(" 方法告知應用獲取所選的內容。")],-1)),s[37]||(s[37]=a("li",null,"對於無選定元素的應對很重要，我們會根據運行的命令數量來決定是否禁用 “exec” 按鈕。",-1)),s[38]||(s[38]=a("li",null,[n("我們使用類似的監聽器（ "),a("code",null,"@on(Button.Pressed)"),n(" ）來執行命令。我們做的就是將我們的選擇送到一個新的屏幕，該屏幕會負責執行命令並收集結果。")],-1))]),s[143]||(s[143]=t(`<p>你注意到 <code>CSS_PATH = &quot;os_app.tcss&quot;</code> 這個變量了嗎？Textual 允許你使用 CSS 來控制單個或多個組件的外觀（色彩、位置、尺寸）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Screen {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>引自 Textual 官方網站：</p><blockquote><p>Textual 中使用的 CSS 是互聯網上常見 CSS 的簡化版本，容易上手。</p></blockquote>`,4)),a("p",null,[s[40]||(s[40]=a("em",null,"這真是太棒了",-1)),s[41]||(s[41]=n("，只需要用一哥獨立的 ",-1)),e(p,{href:"https://textual.textualize.io/guide/styles/"},{default:l(()=>[...s[39]||(s[39]=[n("樣式表",-1)])]),_:1}),s[42]||(s[42]=n("，就可以輕鬆調整應用的樣式。",-1))]),s[144]||(s[144]=t(`<p>好，我們現在來看看如何在新屏幕上展示結果。</p><h4 id="在新屏幕上展示結果" tabindex="-1">在新屏幕上展示結果 <a class="header-anchor" href="#在新屏幕上展示結果" aria-label="Permalink to “在新屏幕上展示結果”">​</a></h4><p><img src="https://tutorials.kodegeek.com/Textualize/img/output_of_multiple_well_known_unix_commands_2023-12-28T19_13_40_503695.svg" alt=""></p><p>以下是在新屏幕上處理輸出的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import asyncio</span></span>
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
<span class="line"><span>        self.app.pop_screen()</span></span></code></pre></div><p>你會注意到：</p>`,6)),a("ol",null,[s[53]||(s[53]=t("<li><code>LogScreen</code> 類擴展自 <code>ModalScreen</code> 類， 該類負責處理模態模式的屏幕。</li><li>這個屏幕同樣有一個 <code>compose</code> 方法，我們在這裏添加了組件以展示 Unix 命令的內容。</li><li>我們創建了一個叫做 <code>mount</code> 的新方法。一旦你用 <code>compose</code> 編排好組件，你就可以運行代碼來獲取數據，並再進一步定製它們的外觀。</li>",3)),a("li",null,[s[44]||(s[44]=n("我們使用 ",-1)),e(p,{href:"https://docs.python.org/3/library/asyncio.html"},{default:l(()=>[...s[43]||(s[43]=[n("asyncio",-1)])]),_:1}),s[45]||(s[45]=n(" 運行命令，這樣我們就能讓 TUI 主工作線程在每個命令的結果出來時就及時更新內容。",-1))]),a("li",null,[s[47]||(s[47]=n("對於“工作線程”，請注意 ",-1)),s[48]||(s[48]=a("code",null,"run_process",-1)),s[49]||(s[49]=n(" 方法上的 ",-1)),s[50]||(s[50]=a("code",null,"@work(exclusive=False)",-1)),s[51]||(s[51]=n(" 註解，該方法用於運行命令並捕獲 STDOUT + STDERR 輸出。使用 ",-1)),e(p,{href:"https://textual.textualize.io/guide/workers/"},{default:l(()=>[...s[46]||(s[46]=[n("工作線程",-1)])]),_:1}),s[52]||(s[52]=n(" 來管理併發並不複雜，儘管它們在手冊中確實有專門的章節。這主要是因為運行的外部命令可能會執行很長時間。",-1))]),s[54]||(s[54]=a("li",null,[n("在 "),a("code",null,"run_process"),n(" 中，我們通過調用 "),a("code",null,"write"),n(" 以命令的輸出內容來更新 "),a("code",null,"event_log"),n("。")],-1)),s[55]||(s[55]=a("li",null,[n("最後，"),a("code",null,"on_button_pressed"),n(" 把我們帶回到前一屏幕（從堆棧中移除屏幕）。")],-1))]),s[145]||(s[145]=t(`<p>這個小應用向你展示瞭如何一份不到 200 行的代碼來編寫一個簡單的前端，用來運行非 Python 代碼。</p><p>現在我們來看一個更復雜的例子，這個例子用到了我們還未探索過的 Textual 的新特性。</p><h3 id="示例二-展示賽事成績的表格" tabindex="-1">示例二：展示賽事成績的表格 <a class="header-anchor" href="#示例二-展示賽事成績的表格" aria-label="Permalink to “示例二：展示賽事成績的表格”">​</a></h3><p><img src="https://tutorials.kodegeek.com/Textualize/img/summary_2023-12-28T19_05_20_213933.svg" alt="通過 Textual 創建的表格應用"></p><p>本示例將展示如何使用 <code>DataTable</code> 組件在表格中展示賽事成績。你能通過這個應用實現：</p><ul><li>通過列來排序表格</li><li>選擇表格中的行，完整窗口展示賽事細節，我們將使用我們在日誌瀏覽器中看到的 “推送屏幕” 技巧。</li><li>能進行表格搜索，查看選手詳情，或執行其他操作如退出應用。</li></ul><p>下面，我們來看看應用代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
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
<span class="line"><span>    main()</span></span></code></pre></div><p>有哪些部分值得我們關注呢？</p>`,9)),a("ol",null,[a("li",null,[s[58]||(s[58]=a("code",null,"compose",-1)),s[59]||(s[59]=n(" 方法中添加了 ",-1)),e(p,{href:"https://textual.textualize.io/widgets/header/"},{default:l(()=>[...s[56]||(s[56]=[n("表頭",-1)])]),_:1}),s[60]||(s[60]=n("，“命令面板” 就位於此處，我們的表格（",-1)),e(p,{href:"https://textual.textualize.io/widgets/data_table/#guide"},{default:l(()=>[...s[57]||(s[57]=[n("DataTable",-1)])]),_:1}),s[61]||(s[61]=n("）也在這裏。表格數據在 ",-1)),s[62]||(s[62]=a("code",null,"mount",-1)),s[63]||(s[63]=n(" 方法中填充。",-1))]),s[69]||(s[69]=a("li",null,[n("我們設定了預期的綁定（"),a("code",null,"BINDINGS"),n("），並指定了外部的 CSS 文件來設置樣式（"),a("code",null,"CSS_PATH"),n("）。")],-1)),a("li",null,[s[65]||(s[65]=n("默認情況下，我們無需任何設置便能使用 ",-1)),e(p,{href:"https://textual.textualize.io/guide/command_palette/"},{default:l(()=>[...s[64]||(s[64]=[n("命令面板",-1)])]),_:1}),s[66]||(s[66]=n("，但在此我們顯式啓用了它（",-1)),s[67]||(s[67]=a("code",null,"ENABLE_COMMAND_PALETTE = True",-1)),s[68]||(s[68]=n("）。",-1))]),s[70]||(s[70]=t("<li>我們的應用有一個自定義表格搜索功能。當用户輸入一名選手的名字後，應用會顯示可能的匹配項，用户可以點擊匹配項查看該選手的詳細信息。這需要告訴應用我們有一個定製的命令提供者（<code>COMMANDS = App.COMMANDS | {CustomCo_ mmand}</code>），即類 <code>CustomCommand(Provider)</code>。</li><li>如果用户點擊了表頭，表格內容會按照該列進行排序。這是通過 <code>on_header_clicked</code> 方法實現的，該方法上具有 <code>@on(DataTable.HeaderSelected)</code> 註解。</li><li>類似地，當選中表格中的一行時， <code>on_row_clicked</code> 方法會被調用，這得益於它擁有 <code>@on(DataTable.RowSelected)</code> 註解。當方法接受選中的行後，它會推送一個新的屏幕，顯示選中行的詳細信息（<code>class DetailScreen(ModalScreen)</code>）。</li>",3))]),s[146]||(s[146]=t(`<p>現在，我們詳細地探討一下如何顯示選手的詳細信息。</p><h4 id="利用多屏展示覆雜視圖" tabindex="-1">利用多屏展示覆雜視圖 <a class="header-anchor" href="#利用多屏展示覆雜視圖" aria-label="Permalink to “利用多屏展示覆雜視圖”">​</a></h4><p><img src="https://tutorials.kodegeek.com/Textualize/img/summary_2023-12-28T19_05_44_404837.svg" alt=""></p><p>當用户選擇表格中的一行，<code>on_row_clicked</code> 方法就會被調用。它收到的是一個 <code>DataTable.RowSelected</code> 類型的事件。從這裏我們會用選中的行的內容構建一個 <code>DetailScreen(ModalScreen)</code> 類的實例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from typing import Any, List</span></span>
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
<span class="line"><span>        self.app.pop_screen()</span></span></code></pre></div><p>這個類的職責很直接：</p>`,6)),a("ol",null,[a("li",null,[s[72]||(s[72]=a("code",null,"compose",-1)),s[73]||(s[73]=n(" 方法取得此行數據，並利用一個 ",-1)),e(p,{href:"https://textual.textualize.io/widget_gallery/#markdownviewer"},{default:l(()=>[...s[71]||(s[71]=[n("支持 Markdown 渲染的組件",-1)])]),_:1}),s[74]||(s[74]=n(" 來展示內容。它的便利之處在於，它會為我們自動生成一個內容目錄。",-1))]),s[75]||(s[75]=a("li",null,[n("當用户點擊 “close” 後，方法 "),a("code",null,"on_button_pressed"),n(" 會引導應用回到原始屏幕。註解 "),a("code",null,'@on(Button.Pressed, "#close")'),n(" 用來接收按鍵被點擊的事件。")],-1))]),s[147]||(s[147]=a("p",null,"最後，我們來詳細講解一下那個多功能的搜索欄（也叫做命令面板）。",-1)),s[148]||(s[148]=a("h4",{id:"命令面板的搜索功能",tabindex:"-1"},[n("命令面板的搜索功能 "),a("a",{class:"header-anchor",href:"#命令面板的搜索功能","aria-label":"Permalink to “命令面板的搜索功能”"},"​")],-1)),s[149]||(s[149]=a("p",null,[a("img",{src:"https://tutorials.kodegeek.com/Textualize/img/summary_2023-12-28T19_05_55_822030.svg",alt:""})],-1)),a("p",null,[s[77]||(s[77]=n("任何使用了表頭的 Textual 應用都默認開啓了 ",-1)),e(p,{href:"https://textual.textualize.io/guide/command_palette/"},{default:l(()=>[...s[76]||(s[76]=[n("命令面板",-1)])]),_:1}),s[78]||(s[78]=n("。有意思的是，你可以在 ",-1)),s[79]||(s[79]=a("code",null,"CompetitorsApp",-1)),s[80]||(s[80]=n(" 類中添加自定義的命令，這會增加到默認命令集之上：",-1))]),s[150]||(s[150]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>COMMANDS = App.COMMANDS | {CustomCommand}</span></span></code></pre></div><p>然後是執行大部分任務的 <code>CustomCommand(Provider)</code> 類：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from functools import partial</span></span>
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
<span class="line"><span>        self.push_screen(detailScreen)</span></span></code></pre></div><ol><li>所有繼承自 <code>Provider</code> 的類需實現 <code>search</code> 方法。在我們的例子中，我們還覆蓋了 <code>startup</code> 方法，為了獲取到我們應用表格（和其內容）的引用，這裏使用到了 <code>App.query(DataTable).first()</code>。在類的生命週期中， <code>startup</code> 方法只會被調用一次。</li><li>在 <code>search</code> 方法內，我們使用 <code>Provider.matcher</code> 對每個表格行的第二列（即名字）進行模糊搜索，以與用户在 TUI 中輸入的詞條進行比較。<code>matcher.match(searchable)</code> 返回一個整型的評分，大於零説明匹配成功。</li><li>在 <code>search</code> 方法中，如果評分大於零，則返回一個 <code>Hit</code> 對象，以告知命令面板搜索查詢是否成功。</li><li>每個 <code>Hit</code> 都有以下信息：評分（用於在命令面板中對匹配項排序）、高亮顯示的搜索詞、一個可調用對象的引用（在我們的案例中，它是一個可以將表格行推送到新屏幕的函數）。</li><li><code>Provider</code> 類的所有方法都是異步的。這使你能釋放主線程，只有當響應準備好後才返回結果，這個過程不會凍結用户界面。</li></ol><p>理解了這些信息，我們就可以現在展示賽手的詳細信息了。</p><p>儘管這個架構的追蹤功能相對直觀，但是組件間傳遞的消息複雜性不可忽視。幸運的是，Textual 提供了有效的調試工具幫助我們理解背後的工作原理。</p><h3 id="textual-應用的問題排查" tabindex="-1">Textual 應用的問題排查 <a class="header-anchor" href="#textual-應用的問題排查" aria-label="Permalink to “Textual 應用的問題排查”">​</a></h3>`,7)),a("p",null,[s[82]||(s[82]=n("對於 Python 的 Textual 應用進行 ",-1)),e(p,{href:"https://github.com/josevnz/tutorials/blob/main/docs/PythonDebugger/README.md"},{default:l(()=>[...s[81]||(s[81]=[n("調試",-1)])]),_:1}),s[83]||(s[83]=n(" 相較而言更具挑戰性。這是因為其中有一些操作可能是異步的，而在解決組件問題時設置斷點可能頗為複雜。",-1))]),s[151]||(s[151]=t(`<p>根據具體情況，你可以使用一些工具。但首先，確保你已經安裝了 textual 的開發工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pip install textual-dev==1.3.0</span></span></code></pre></div><h4 id="確保你能捕捉到正確的按鍵" tabindex="-1">確保你能捕捉到正確的按鍵 <a class="header-anchor" href="#確保你能捕捉到正確的按鍵" aria-label="Permalink to “確保你能捕捉到正確的按鍵”">​</a></h4><p>不確定 Textual 應用是否能捕捉到你的按鍵操作？運行 keys 應用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>textual keys</span></span></code></pre></div><p>這讓你能夠驗證一下你的按鍵組合，並確認在 Textual 中產生了哪些事件。</p><h4 id="圖片比千言萬語更直觀" tabindex="-1">圖片比千言萬語更直觀 <a class="header-anchor" href="#圖片比千言萬語更直觀" aria-label="Permalink to “圖片比千言萬語更直觀”">​</a></h4><p>如果説你在佈局設計上遇到了問題，想向他人展示你當前的困境，Textual 為你的運行應用提供了截圖功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>textual run --screenshot 5 ./kodegeek_textualize/log_scroller.py</span></span></code></pre></div><p>就像你所看到的，我是通過這種方式為這篇教程創建了插圖。</p><h4 id="捕獲事件並輸出定製消息" tabindex="-1">捕獲事件並輸出定製消息 <a class="header-anchor" href="#捕獲事件並輸出定製消息" aria-label="Permalink to “捕獲事件並輸出定製消息”">​</a></h4><p>在 Textual 中，每一個應用實例都有一個日誌記錄器，可以使用如下方式訪問：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>my_app = self.screen.app</span></span>
<span class="line"><span>my_app.log.info(f&quot;Loaded provider: CustomCommand&quot;)</span></span></code></pre></div><p>想要查看這些消息，首先需要開啓一個控制台：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>. ~/virtualenv/Textualize/bin/activate</span></span>
<span class="line"><span>textual console</span></span></code></pre></div><p>然後在另一個終端運行你的應用程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>. ~/virtualenv/Textualize/bin/activate</span></span>
<span class="line"><span>textual run --dev ./kodegeek_textualize/log_scroller.py</span></span></code></pre></div><p>在運行控制台的終端中，你可以看到實時的事件和消息輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
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
<span class="line"><span>[20:29:43] EVENT</span></span></code></pre></div><p>此外，以開發者模式運行的另一大好處是，如果你更改了 CSS，應用會嘗試重新渲染，而無需重啓程序。</p><h3 id="如何編寫單元測試" tabindex="-1">如何編寫單元測試 <a class="header-anchor" href="#如何編寫單元測試" aria-label="Permalink to “如何編寫單元測試”">​</a></h3>`,21)),a("p",null,[s[85]||(s[85]=n("為你全新開發的 Textual 應用編寫 ",-1)),e(p,{href:"https://docs.python.org/3/library/unittest.html"},{default:l(()=>[...s[84]||(s[84]=[n("單元測試",-1)])]),_:1}),s[86]||(s[86]=n("，應該如何操作呢？",-1))]),a("p",null,[s[88]||(s[88]=n("在 ",-1)),e(p,{href:"https://textual.textualize.io/guide/testing/"},{default:l(()=>[...s[87]||(s[87]=[n("官方文檔",-1)])]),_:1}),s[89]||(s[89]=n(" 展示了幾種用於測試我們應用的方式。",-1))]),a("p",null,[s[91]||(s[91]=n("我將採用 ",-1)),e(p,{href:"https://docs.python.org/3/library/unittest.html"},{default:l(()=>[...s[90]||(s[90]=[n("unittest",-1)])]),_:1}),s[92]||(s[92]=n(" 進行測試。為了處理異步例程，我們會需要特別的類 ",-1)),s[93]||(s[93]=a("code",null,"unittest.IsolatedAsyncioTestCase",-1)),s[94]||(s[94]=n(" ：",-1))]),s[152]||(s[152]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import unittest</span></span>
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
<span class="line"><span>    unittest.main()</span></span></code></pre></div><p>現在讓我們詳細看看 <code>test_log_scroller</code> 方法中的操作步驟：</p><ol><li>通過 <code>app.run_test()</code> 獲取一個 <code>Pilot</code> 實例。然後點擊主按鈕，運行包含默認指令的查詢，隨後等待所有事件的處理。</li><li>從我們新推送出的屏幕中獲取 <code>Log</code>，確保我們已獲得幾行返回的內容，即它並非空的。</li><li>關閉新屏幕並重新呈現舊屏幕。</li><li>最後，按下 <code>q</code>，退出應用。</li></ol><p>可以測試表格嗎？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import unittest</span></span>
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
<span class="line"><span>    unittest.main()</span></span></code></pre></div><p>如果你運行所有的測試，你將看到如下類似的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(Textualize) [josevnz@dmaf5 Textualize]$ python -m unittest tests/*.py</span></span>
<span class="line"><span>..</span></span>
<span class="line"><span>----------------------------------------------------------------------</span></span>
<span class="line"><span>Ran 2 tests in 2.065s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OK</span></span></code></pre></div><p>這是測試 TUI 的一個不錯的方式，對吧？</p><h3 id="打包-textual-應用" tabindex="-1">打包 Textual 應用 <a class="header-anchor" href="#打包-textual-應用" aria-label="Permalink to “打包 Textual 應用”">​</a></h3><p>打包 Textual 應用與打包常規 Python 應用並沒有太大區別。你需要記住，需要包含那些控制應用外觀的 CSS 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>. ~/virtualenv/Textualize/bin/activate</span></span>
<span class="line"><span>python -m build</span></span>
<span class="line"><span>pip install dist/KodegeekTextualize-*-py3-none-any.whl</span></span></code></pre></div>`,11)),a("p",null,[s[96]||(s[96]=n("這個教程的 ",-1)),e(p,{href:"https://tutorials.kodegeek.com/Textualize/pyproject.toml"},{default:l(()=>[...s[95]||(s[95]=[n("pyproject.toml",-1)])]),_:1}),s[97]||(s[97]=n(" 文件是一個打包應用的良好起點，告訴你需要做什麼。",-1))]),s[153]||(s[153]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[build-system]</span></span>
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
<span class="line"><span>dependencies = {file = [&quot;requirements.txt&quot;]}</span></span></code></pre></div><h3 id="未來計劃" tabindex="-1">未來計劃 <a class="header-anchor" href="#未來計劃" aria-label="Permalink to “未來計劃”">​</a></h3><p>這個簡短的教程只覆蓋了 Textual 的部分方面。還有很多需要探索和學習的內容：</p>`,3)),a("ul",null,[a("li",null,[s[100]||(s[100]=n("強烈建議你查看 ",-1)),e(p,{href:"https://textual.textualize.io/tutorial/"},{default:l(()=>[...s[98]||(s[98]=[n("官方教程",-1)])]),_:1}),s[101]||(s[101]=n("。有大量的示例和指向參考 ",-1)),e(p,{href:"https://textual.textualize.io/api/"},{default:l(()=>[...s[99]||(s[99]=[n("API",-1)])]),_:1}),s[102]||(s[102]=n(" 的鏈接。",-1))]),a("li",null,[s[104]||(s[104]=n("Textual 可以使用來自 ",-1)),e(p,{href:"https://github.com/Textualize/rich"},{default:l(()=>[...s[103]||(s[103]=[n("Rich",-1)])]),_:1}),s[105]||(s[105]=n(" 項目的組件，這個項目是一切的起源。我認為其中一些甚至可能所有這些組件在某些時候都會合併到 Textual 中。Textual 框架對於使用高級 API 的複雜應用更能勝任，但 Rich 也有很多漂亮的功能。",-1))]),a("li",null,[s[107]||(s[107]=n("創建你自己的組件！同樣，在設計 TUI 時，",-1)),e(p,{href:"https://textual.textualize.io/how-to/design-a-layout/"},{default:l(()=>[...s[106]||(s[106]=[n("拿一張紙，畫出你希望這些組件如何佈局的",-1)])]),_:1}),s[108]||(s[108]=n("，這會為你後期省去很多時間和麻煩。",-1))]),a("li",null,[s[110]||(s[110]=n("調試 Python 應用可能會有點複雜。有時你可能需要 ",-1)),e(p,{href:"https://github.com/josevnz/DebuggingApplications/blob/main/StracePythonWireshark/README.md"},{default:l(()=>[...s[109]||(s[109]=[n("混合使用不同的工具",-1)])]),_:1}),s[111]||(s[111]=n(" 來找出應用的問題所在。",-1))]),a("li",null,[s[113]||(s[113]=n("異步 IO 是一個複雜的話題，你應該 ",-1)),e(p,{href:"https://docs.python.org/3/library/asyncio-dev.html"},{default:l(()=>[...s[112]||(s[112]=[n("閲讀開發者文檔",-1)])]),_:1}),s[114]||(s[114]=n(" 來了解更多可能的選擇。",-1))]),a("li",null,[s[117]||(s[117]=n("Textual 被其他項目所使用。其中一個非常易於使用的項目是 ",-1)),e(p,{href:"https://github.com/Textualize/trogon"},{default:l(()=>[...s[115]||(s[115]=[n("Trogon",-1)])]),_:1}),s[118]||(s[118]=n("。",-1)),e(p,{href:"https://github.com/josevnz/CLIWithClickAndTrogon/blob/main/README.md"},{default:l(()=>[...s[116]||(s[116]=[n("它會讓你的 CLI 可以自我發現",-1)])]),_:1}),s[119]||(s[119]=n("。",-1))]),a("li",null,[e(p,{href:"https://github.com/Textualize/textual-web"},{default:l(()=>[...s[120]||(s[120]=[n("Textual-web",-1)])]),_:1}),s[121]||(s[121]=n(" 是個很有前景的項目，能讓你在瀏覽器上運行 Textual 應用。儘管它不如 Textual 成熟，但它的進化速度非常快。",-1))]),a("li",null,[s[123]||(s[123]=n("最後，",-1)),e(p,{href:"https://www.textualize.io/projects/"},{default:l(()=>[...s[122]||(s[122]=[n("查看這些外部項目",-1)])]),_:1}),s[124]||(s[124]=n("。在項目組合中有許多有用的開源應用。",-1))])]),s[154]||(s[154]=a("p",null,[a("em",null,"（題圖：DA/f11b0eb0-8e16-4cbe-986a-0fe978f6732a）")],-1)),s[155]||(s[155]=a("hr",null,null,-1)),a("p",null,[s[126]||(s[126]=n("via: ",-1)),e(p,{href:"https://fedoramagazine.org/crash-course-on-using-textual/"},{default:l(()=>[...s[125]||(s[125]=[n("https://fedoramagazine.org/crash-course-on-using-textual/",-1)])]),_:1})]),a("p",null,[s[131]||(s[131]=n("作者：",-1)),e(p,{href:"https://fedoramagazine.org/author/josevnz/"},{default:l(()=>[...s[127]||(s[127]=[n("Jose Nunez",-1)])]),_:1}),s[132]||(s[132]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[128]||(s[128]=[n("lujun9972",-1)])]),_:1}),s[133]||(s[133]=n(" 譯者：",-1)),e(p,{href:"https://linux.cn/lctt/ChatGPT"},{default:l(()=>[...s[129]||(s[129]=[n("ChatGPT",-1)])]),_:1}),s[134]||(s[134]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[130]||(s[130]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[137]||(s[137]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[135]||(s[135]=[n("LCTT",-1)])]),_:1}),s[138]||(s[138]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[136]||(s[136]=[n("Linux中國",-1)])]),_:1}),s[139]||(s[139]=n(" 榮譽推出",-1))])])}const x=i(d,[["render",c]]);export{T as __pageData,x as default};
