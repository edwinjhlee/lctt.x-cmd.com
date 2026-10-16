import{_ as i,a0 as t,w as o,s as d,I as a,x as n,a1 as e,A as l,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"使用 Python 創建你自己的 Shell （一） | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 創建你自己的 Shell （一） | LCTT (201607) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 創建你自己的 Shell （一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 創建你自己的 Shell （一） | LCTT (201607) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201607/20160705 Create Your Own Shell in Python - Part I","title":"使用 Python 創建你自己的 Shell （一）","tag":"201607","desc":""},"relativePath":"201607/20160705 Create Your Own Shell in Python - Part I.md","filePath":"[post].md"}'),r={name:"201607/20160705 Create Your Own Shell in Python - Part I.md"};function h(u,s,k,g,y,m){const p=t("Link");return o(),d("div",null,[s[19]||(s[19]=a("h1",{id:"使用-python-創建你自己的-shell-一",tabindex:"-1"},[n("使用 Python 創建你自己的 Shell （一） "),a("a",{class:"header-anchor",href:"#使用-python-創建你自己的-shell-一","aria-label":"Permalink to “使用 Python 創建你自己的 Shell （一）”"},"​")],-1)),s[20]||(s[20]=a("p",null,[n("我很想知道一個 shell （像 bash，csh 等）內部是如何工作的。於是為了滿足自己的好奇心，我使用 Python 實現了一個名為 "),a("strong",null,"yosh"),n(" （Your Own Shell）的 Shell。本文章所介紹的概念也可以應用於其他編程語言。")],-1)),a("p",null,[s[1]||(s[1]=n("（提示：你可以在",-1)),e(p,{href:"https://github.com/supasate/yosh"},{default:l(()=>[...s[0]||(s[0]=[n("這裏",-1)])]),_:1}),s[2]||(s[2]=n("查找本博文使用的源代碼，代碼以 MIT 許可證發佈。在 Mac OS X 10.11.5 上，我使用 Python 2.7.10 和 3.4.3 進行了測試。它應該可以運行在其他類 Unix 環境，比如 Linux 和 Windows 上的 Cygwin。）",-1))]),s[21]||(s[21]=c(`<p>讓我們開始吧。</p><h3 id="步驟-0-項目結構" tabindex="-1">步驟 0：項目結構 <a class="header-anchor" href="#步驟-0-項目結構" aria-label="Permalink to “步驟 0：項目結構”">​</a></h3><p>對於此項目，我使用了以下的項目結構。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yosh_project</span></span>
<span class="line"><span>|-- yosh</span></span>
<span class="line"><span>   |-- __init__.py</span></span>
<span class="line"><span>   |-- shell.py</span></span></code></pre></div><p><code>yosh_project</code> 為項目根目錄（你也可以把它簡單命名為 <code>yosh</code>）。</p><p><code>yosh</code> 為包目錄，且 <code>__init__.py</code> 可以使它成為與包的目錄名字相同的包（如果你不用 Python 編寫的話，可以忽略它。）</p><p><code>shell.py</code> 是我們主要的腳本文件。</p><h3 id="步驟-1-shell-循環" tabindex="-1">步驟 1：Shell 循環 <a class="header-anchor" href="#步驟-1-shell-循環" aria-label="Permalink to “步驟 1：Shell 循環”">​</a></h3><p>當啓動一個 shell，它會顯示一個命令提示符並等待你的命令輸入。在接收了輸入的命令並執行它之後（稍後文章會進行詳細解釋），你的 shell 會重新回到這裏，並循環等待下一條指令。</p><p>在 <code>shell.py</code> 中，我們會以一個簡單的 main 函數開始，該函數調用了 shell_loop() 函數，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def shell_loop():</span></span>
<span class="line"><span>    # Start the loop here</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    shell_loop()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div><p>接着，在 <code>shell_loop()</code> 中，為了指示循環是否繼續或停止，我們使用了一個狀態標誌。在循環的開始，我們的 shell 將顯示一個命令提示符，並等待讀取命令輸入。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SHELL_STATUS_RUN = 1</span></span>
<span class="line"><span>SHELL_STATUS_STOP = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def shell_loop():</span></span>
<span class="line"><span>    status = SHELL_STATUS_RUN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while status == SHELL_STATUS_RUN:</span></span>
<span class="line"><span>        ### 顯示命令提示符</span></span>
<span class="line"><span>        sys.stdout.write(&#39;&gt; &#39;)</span></span>
<span class="line"><span>        sys.stdout.flush()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 讀取命令輸入</span></span>
<span class="line"><span>        cmd = sys.stdin.readline()</span></span></code></pre></div><p>之後，我們切分命令（tokenize）輸入並進行執行（execute）（我們即將實現 <code>tokenize</code> 和 <code>execute</code> 函數）。</p><p>因此，我們的 shell_loop() 會是如下這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SHELL_STATUS_RUN = 1</span></span>
<span class="line"><span>SHELL_STATUS_STOP = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def shell_loop():</span></span>
<span class="line"><span>    status = SHELL_STATUS_RUN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while status == SHELL_STATUS_RUN:</span></span>
<span class="line"><span>        ### 顯示命令提示符</span></span>
<span class="line"><span>        sys.stdout.write(&#39;&gt; &#39;)</span></span>
<span class="line"><span>        sys.stdout.flush()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 讀取命令輸入</span></span>
<span class="line"><span>        cmd = sys.stdin.readline()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 切分命令輸入</span></span>
<span class="line"><span>        cmd_tokens = tokenize(cmd)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 執行該命令並獲取新的狀態</span></span>
<span class="line"><span>        status = execute(cmd_tokens)</span></span></code></pre></div><p>這就是我們整個 shell 循環。如果我們使用 <code>python shell.py</code> 啓動我們的 shell，它會顯示命令提示符。然而如果我們輸入命令並按回車，它會拋出錯誤，因為我們還沒定義 <code>tokenize</code> 函數。</p><p>為了退出 shell，可以嘗試輸入 ctrl-c。稍後我將解釋如何以優雅的形式退出 shell。</p><h3 id="步驟-2-命令切分-tokenize" tabindex="-1">步驟 2：命令切分（tokenize） <a class="header-anchor" href="#步驟-2-命令切分-tokenize" aria-label="Permalink to “步驟 2：命令切分（tokenize）”">​</a></h3><p>當用户在我們的 shell 中輸入命令並按下回車鍵，該命令將會是一個包含命令名稱及其參數的長字符串。因此，我們必須切分該字符串（分割一個字符串為多個元組）。</p><p>咋一看似乎很簡單。我們或許可以使用 <code>cmd.split()</code>，以空格分割輸入。它對類似 <code>ls -a my_folder</code> 的命令起作用，因為它能夠將命令分割為一個列表 <code>[&#39;ls&#39;, &#39;-a&#39;, &#39;my_folder&#39;]</code>，這樣我們便能輕易處理它們了。</p><p>然而，也有一些類似 <code>echo &quot;Hello World&quot;</code> 或 <code>echo &#39;Hello World&#39;</code> 以單引號或雙引號引用參數的情況。如果我們使用 cmd.spilt，我們將會得到一個存有 3 個標記的列表 <code>[&#39;echo&#39;, &#39;&quot;Hello&#39;, &#39;World&quot;&#39;]</code> 而不是 2 個標記的列表 <code>[&#39;echo&#39;, &#39;Hello World&#39;]</code>。</p><p>幸運的是，Python 提供了一個名為 <code>shlex</code> 的庫，它能夠幫助我們如魔法般地分割命令。（提示：我們也可以使用正則表達式，但它不是本文的重點。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>import shlex</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def tokenize(string):</span></span>
<span class="line"><span>    return shlex.split(string)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span></code></pre></div><p>然後我們將這些元組發送到執行進程。</p><h3 id="步驟-3-執行" tabindex="-1">步驟 3：執行 <a class="header-anchor" href="#步驟-3-執行" aria-label="Permalink to “步驟 3：執行”">​</a></h3><p>這是 shell 中核心而有趣的一部分。當 shell 執行 <code>mkdir test_dir</code> 時，到底發生了什麼？（提示： <code>mkdir</code> 是一個帶有 <code>test_dir</code> 參數的執行程序，用於創建一個名為 <code>test_dir</code> 的目錄。）</p><p><code>execvp</code> 是這一步的首先需要的函數。在我們解釋 <code>execvp</code> 所做的事之前，讓我們看看它的實際效果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import os</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def execute(cmd_tokens):</span></span>
<span class="line"><span>    ### 執行命令</span></span>
<span class="line"><span>    os.execvp(cmd_tokens[0], cmd_tokens)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ### 返回狀態以告知在 shell_loop 中等待下一個命令</span></span>
<span class="line"><span>    return SHELL_STATUS_RUN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span></code></pre></div><p>再次嘗試運行我們的 shell，並輸入 <code>mkdir test_dir</code> 命令，接着按下回車鍵。</p><p>在我們敲下回車鍵之後，問題是我們的 shell 會直接退出而不是等待下一個命令。然而，目錄正確地創建了。</p><p>因此，<code>execvp</code> 實際上做了什麼？</p><p><code>execvp</code> 是系統調用 <code>exec</code> 的一個變體。第一個參數是程序名字。<code>v</code> 表示第二個參數是一個程序參數列表（參數數量可變）。<code>p</code> 表示將會使用環境變量 <code>PATH</code> 搜索給定的程序名字。在我們上一次的嘗試中，它將會基於我們的 <code>PATH</code> 環境變量查找<code>mkdir</code> 程序。</p><p>（還有其他 <code>exec</code> 變體，比如 execv、execvpe、execl、execlp、execlpe；你可以 google 它們獲取更多的信息。）</p><p><code>exec</code> 會用即將運行的新進程替換調用進程的當前內存。在我們的例子中，我們的 shell 進程內存會被替換為 <code>mkdir</code> 程序。接着，<code>mkdir</code> 成為主進程並創建 <code>test_dir</code> 目錄。最後該進程退出。</p><p>這裏的重點在於<strong>我們的 shell 進程已經被 <code>mkdir</code> 進程所替換</strong>。這就是我們的 shell 消失且不會等待下一條命令的原因。</p><p>因此，我們需要其他的系統調用來解決問題：<code>fork</code>。</p><p><code>fork</code> 會分配新的內存並拷貝當前進程到一個新的進程。我們稱這個新的進程為<strong>子進程</strong>，調用者進程為<strong>父進程</strong>。然後，子進程內存會被替換為被執行的程序。因此，我們的 shell，也就是父進程，可以免受內存替換的危險。</p><p>讓我們看看修改的代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def execute(cmd_tokens):</span></span>
<span class="line"><span>    ### 分叉一個子 shell 進程</span></span>
<span class="line"><span>    ### 如果當前進程是子進程，其 \`pid\` 被設置為 \`0\`</span></span>
<span class="line"><span>    ### 否則當前進程是父進程的話，\`pid\` 的值</span></span>
<span class="line"><span>    ### 是其子進程的進程 ID。</span></span>
<span class="line"><span>    pid = os.fork()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if pid == 0:</span></span>
<span class="line"><span>    ### 子進程</span></span>
<span class="line"><span>        ### 用被 exec 調用的程序替換該子進程</span></span>
<span class="line"><span>        os.execvp(cmd_tokens[0], cmd_tokens)</span></span>
<span class="line"><span>    elif pid &gt; 0:</span></span>
<span class="line"><span>    ### 父進程</span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            ### 等待其子進程的響應狀態（以進程 ID 來查找）</span></span>
<span class="line"><span>            wpid, status = os.waitpid(pid, 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ### 當其子進程正常退出時</span></span>
<span class="line"><span>            ### 或者其被信號中斷時，結束等待狀態</span></span>
<span class="line"><span>            if os.WIFEXITED(status) or os.WIFSIGNALED(status):</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ### 返回狀態以告知在 shell_loop 中等待下一個命令</span></span>
<span class="line"><span>    return SHELL_STATUS_RUN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span></code></pre></div><p>當我們的父進程調用 <code>os.fork()</code> 時，你可以想像所有的源代碼被拷貝到了新的子進程。此時此刻，父進程和子進程看到的是相同的代碼，且並行運行着。</p><p>如果運行的代碼屬於子進程，<code>pid</code> 將為 <code>0</code>。否則，如果運行的代碼屬於父進程，<code>pid</code> 將會是子進程的進程 id。</p><p>當 <code>os.execvp</code> 在子進程中被調用時，你可以想像子進程的所有源代碼被替換為正被調用程序的代碼。然而父進程的代碼不會被改變。</p><p>當父進程完成等待子進程退出或終止時，它會返回一個狀態，指示繼續 shell 循環。</p><h3 id="運行" tabindex="-1">運行 <a class="header-anchor" href="#運行" aria-label="Permalink to “運行”">​</a></h3><p>現在，你可以嘗試運行我們的 shell 並輸入 <code>mkdir test_dir2</code>。它應該可以正確執行。我們的主 shell 進程仍然存在並等待下一條命令。嘗試執行 <code>ls</code>，你可以看到已創建的目錄。</p><p>但是，這裏仍有一些問題。</p><p>第一，嘗試執行 <code>cd test_dir2</code>，接着執行 <code>ls</code>。它應該會進入到一個空的 <code>test_dir2</code> 目錄。然而，你將會看到目錄並沒有變為 <code>test_dir2</code>。</p><p>第二，我們仍然沒有辦法優雅地退出我們的 shell。</p>`,49)),a("p",null,[s[4]||(s[4]=n("我們將會在 ",-1)),e(p,{href:"https://hackercollider.com/articles/2016/07/06/create-your-own-shell-in-python-part-2/"},{default:l(()=>[...s[3]||(s[3]=[n("第二部分",-1)])]),_:1}),s[5]||(s[5]=n(" 解決諸如此類的問題。",-1))]),s[22]||(s[22]=a("hr",null,null,-1)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),e(p,{href:"https://hackercollider.com/articles/2016/07/05/create-your-own-shell-in-python-part-1/"},{default:l(()=>[...s[6]||(s[6]=[n("https://hackercollider.com/articles/2016/07/05/create-your-own-shell-in-python-part-1/",-1)])]),_:1})]),a("p",null,[s[11]||(s[11]=n("作者：",-1)),e(p,{href:"https://disqus.com/by/supasate_choochaisri/"},{default:l(()=>[...s[8]||(s[8]=[n("Supasate Choochaisri",-1)])]),_:1}),s[12]||(s[12]=n(" 譯者：",-1)),e(p,{href:"https://github.com/cposture"},{default:l(()=>[...s[9]||(s[9]=[n("cposture",-1)])]),_:1}),s[13]||(s[13]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[10]||(s[10]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[15]||(s[15]=[n("Linux中國",-1)])]),_:1}),s[18]||(s[18]=n(" 榮譽推出",-1))])])}const S=i(r,[["render",h]]);export{_ as __pageData,S as default};
