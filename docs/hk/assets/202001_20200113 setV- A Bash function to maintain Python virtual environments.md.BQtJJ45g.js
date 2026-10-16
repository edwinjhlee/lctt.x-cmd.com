import{_ as i,a0 as o,w as r,s as c,I as l,x as n,a1 as p,A as e,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"setV：一個管理 Python 虛擬環境的 Bash 函數 | LCTT x X-CMD","titleTemplate":false,"description":"setV：一個管理 Python 虛擬環境的 Bash 函數 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"setV：一個管理 Python 虛擬環境的 Bash 函數 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"setV：一個管理 Python 虛擬環境的 Bash 函數 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20200113 setV- A Bash function to maintain Python virtual environments","title":"setV：一個管理 Python 虛擬環境的 Bash 函數","tag":"202001","desc":""},"relativePath":"202001/20200113 setV- A Bash function to maintain Python virtual environments.md","filePath":"[post].md"}'),h={name:"202001/20200113 setV- A Bash function to maintain Python virtual environments.md"};function u(d,s,v,g,m,f){const a=o("Link");return r(),c("div",null,[s[27]||(s[27]=l("h1",{id:"setv-一個管理-python-虛擬環境的-bash-函數",tabindex:"-1"},[n("setV：一個管理 Python 虛擬環境的 Bash 函數 "),l("a",{class:"header-anchor",href:"#setv-一個管理-python-虛擬環境的-bash-函數","aria-label":"Permalink to “setV：一個管理 Python 虛擬環境的 Bash 函數”"},"​")],-1)),s[28]||(s[28]=l("blockquote",null,[l("p",null,"瞭解一下 setV，它是一個輕量級的 Python 虛擬環境管理器，是 virtualenvwrapper 的替代產品。")],-1)),s[29]||(s[29]=l("p",null,[l("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/19/234306tvvg5ffwakrzr5vv.jpg",alt:""})],-1)),l("p",null,[s[3]||(s[3]=n("這一年多來，我的 ",-1)),p(a,{href:"https://github.com/psachin/bash_scripts"},{default:e(()=>[...s[0]||(s[0]=[n("bash_scripts",-1)])]),_:1}),s[4]||(s[4]=n(" 項目中悄悄隱藏這 ",-1)),p(a,{href:"https://gitlab.com/psachin/setV"},{default:e(()=>[...s[1]||(s[1]=[n("setV",-1)])]),_:1}),s[5]||(s[5]=n("，但現在是時候該公開了。setV 是一個 Bash 函數，我可以用它代替 ",-1)),p(a,{href:"https://virtualenvwrapper.readthedocs.org/"},{default:e(()=>[...s[2]||(s[2]=[n("virtualenvwrapper",-1)])]),_:1}),s[6]||(s[6]=n("。它提供了使你能夠執行以下操作的基本功能：",-1))]),s[30]||(s[30]=t(`<ul><li>默認使用 Python 3</li><li>創建一個新的虛擬環境</li><li>使用帶有 <code>-p</code>（或 <code>--python</code>）的自定義 Python 路徑來創建新的虛擬環境</li><li>刪除現有的虛擬環境</li><li>列出所有現有的虛擬環境</li><li>使用製表符補全（以防你忘記虛擬環境名稱）</li></ul><h3 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h3><p>要安裝 setV，請下載該腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>curl https://gitlab.com/psachin/setV/raw/master/install.sh</span></span></code></pre></div><p>審核一下腳本，然後運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sh ./install.sh</span></span></code></pre></div><p>當安裝 setV 時，安裝腳本會要求你引入（<code>source</code>）一下 <code>~/.bashrc</code> 或 <code>~/.bash_profile</code> 的配置，根據你的喜好選擇一個。</p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to “用法”">​</a></h3><p>基本的命令格式是 <code>setv</code>。</p><h4 id="創建虛擬環境" tabindex="-1">創建虛擬環境 <a class="header-anchor" href="#創建虛擬環境" aria-label="Permalink to “創建虛擬環境”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>setv --new rango  # setv -n rango</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或使用定製的 Python 路徑</span></span>
<span class="line"><span>setv --new --python /opt/python/python3 rango  # setv -n -p /opt/python/python3 rango</span></span></code></pre></div><h4 id="激活已有的虛擬環境" tabindex="-1">激活已有的虛擬環境 <a class="header-anchor" href="#激活已有的虛擬環境" aria-label="Permalink to “激活已有的虛擬環境”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>setv VIRTUAL_ENVIRONMENT_NAME</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 示例</span></span>
<span class="line"><span>setv rango</span></span></code></pre></div><h4 id="列出所有的虛擬環境" tabindex="-1">列出所有的虛擬環境 <a class="header-anchor" href="#列出所有的虛擬環境" aria-label="Permalink to “列出所有的虛擬環境”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>setv --list</span></span>
<span class="line"><span># 或</span></span>
<span class="line"><span>setv [TAB] [TAB]</span></span></code></pre></div><h4 id="刪除虛擬環境" tabindex="-1">刪除虛擬環境 <a class="header-anchor" href="#刪除虛擬環境" aria-label="Permalink to “刪除虛擬環境”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>setv --delete rango</span></span></code></pre></div><h4 id="切換到另外一個虛擬環境" tabindex="-1">切換到另外一個虛擬環境 <a class="header-anchor" href="#切換到另外一個虛擬環境" aria-label="Permalink to “切換到另外一個虛擬環境”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 假設你現在在 &#39;rango&#39;，切換到 &#39;tango&#39;</span></span>
<span class="line"><span>setv tango</span></span></code></pre></div><h4 id="製表符補完" tabindex="-1">製表符補完 <a class="header-anchor" href="#製表符補完" aria-label="Permalink to “製表符補完”">​</a></h4><p>如果你不完全記得虛擬環境的名稱，則 Bash 式的製表符補全也可以適用於虛擬環境名稱。</p><h3 id="參與其中" tabindex="-1">參與其中 <a class="header-anchor" href="#參與其中" aria-label="Permalink to “參與其中”">​</a></h3>`,23)),l("p",null,[s[9]||(s[9]=n("setV 在 GNU ",-1)),p(a,{href:"https://gitlab.com/psachin/setV/blob/master/LICENSE"},{default:e(()=>[...s[7]||(s[7]=[n("GPLv3",-1)])]),_:1}),s[10]||(s[10]=n("下開源，歡迎貢獻。要了解更多信息，請訪問它的 GitLab 存儲庫中的 setV 的 ",-1)),p(a,{href:"https://gitlab.com/psachin/setV/blob/master/ReadMe.org"},{default:e(()=>[...s[8]||(s[8]=[n("README",-1)])]),_:1}),s[11]||(s[11]=n(" 的貢獻部分。",-1))]),s[31]||(s[31]=t(`<h3 id="setv-腳本" tabindex="-1">setV 腳本 <a class="header-anchor" href="#setv-腳本" aria-label="Permalink to “setV 腳本”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span># setV - A Lightweight Python virtual environment manager.</span></span>
<span class="line"><span># Author: Sachin (psachin) &lt;iclcoolster@gmail.com&gt;</span></span>
<span class="line"><span># Author&#39;s URL: https://psachin.gitlab.io/about</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># License: GNU GPL v3, See LICENSE file</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Configure(Optional):</span></span>
<span class="line"><span># Set \`SETV_VIRTUAL_DIR_PATH\` value to your virtual environments</span></span>
<span class="line"><span># directory-path. By default it is set to &#39;~/virtualenvs/&#39;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Usage:</span></span>
<span class="line"><span># Manual install: Added below line to your .bashrc or any local rc script():</span></span>
<span class="line"><span># ---</span></span>
<span class="line"><span># source /path/to/virtual.sh</span></span>
<span class="line"><span># ---</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Now you can &#39;activate&#39; the virtual environment by typing</span></span>
<span class="line"><span># $ setv &lt;YOUR VIRTUAL ENVIRONMENT NAME&gt;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># For example:</span></span>
<span class="line"><span># $ setv rango</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># or type:</span></span>
<span class="line"><span># setv [TAB] [TAB]  (to list all virtual envs)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># To list all your virtual environments:</span></span>
<span class="line"><span># $ setv --list</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># To create new virtual environment:</span></span>
<span class="line"><span># $ setv --new new_virtualenv_name</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># To delete existing virtual environment:</span></span>
<span class="line"><span># $ setv --delete existing_virtualenv_name</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># To deactivate, type:</span></span>
<span class="line"><span># $ deactivate</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Path to virtual environment directory</span></span>
<span class="line"><span>SETV_VIRTUAL_DIR_PATH=&quot;$HOME/virtualenvs/&quot;</span></span>
<span class="line"><span># Default python version to use. This decides whether to use \`virtualenv\` or \`python3 -m venv\`</span></span>
<span class="line"><span>SETV_PYTHON_VERSION=3  # Defaults to Python3</span></span>
<span class="line"><span>SETV_PY_PATH=$(which python\${SETV_PYTHON_VERSION})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function _setvcomplete_()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    # Bash-autocompletion.</span></span>
<span class="line"><span>    # This ensures Tab-auto-completions work for virtual environment names.</span></span>
<span class="line"><span>    local cmd=&quot;\${1##*/}&quot; # to handle command(s).</span></span>
<span class="line"><span>                         # Not necessary as such. &#39;setv&#39; is the only command</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    local word=\${COMP_WORDS[COMP_CWORD]} # Words thats being completed</span></span>
<span class="line"><span>    local xpat=&#39;\${word}&#39;                 # Filter pattern. Include</span></span>
<span class="line"><span>                                         # only words in variable &#39;$names&#39;</span></span>
<span class="line"><span>    local names=$(ls -l &quot;\${SETV_VIRTUAL_DIR_PATH}&quot; | egrep &#39;^d&#39; | awk -F &quot; &quot; &#39;{print $NF}&#39;) # Virtual environment names</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    COMPREPLY=($(compgen -W &quot;$names&quot; -X &quot;$xpat&quot; -- &quot;$word&quot;)) # compgen generates the results</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function _setv_help_() {</span></span>
<span class="line"><span>    # Echo help/usage message</span></span>
<span class="line"><span>    echo &quot;Usage: setv [OPTIONS] [NAME]&quot;</span></span>
<span class="line"><span>    echo Positional argument:</span></span>
<span class="line"><span>    echo -e &quot;NAME                       Activate virtual env.&quot;</span></span>
<span class="line"><span>    echo Optional arguments:</span></span>
<span class="line"><span>    echo -e &quot;-l, --list                 List all Virtual Envs.&quot;</span></span>
<span class="line"><span>    echo -e &quot;-n, --new NAME             Create a new Python Virtual Env.&quot;</span></span>
<span class="line"><span>    echo -e &quot;-d, --delete NAME          Delete existing Python Virtual Env.&quot;</span></span>
<span class="line"><span>    echo -e &quot;-p, --python PATH          Python binary path.&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function _setv_custom_python_path()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if [ -f &quot;\${1}&quot; ];</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        if [ &quot;\`expr $1 : &#39;.*python\\([2,3]\\)&#39;\`&quot; = &quot;3&quot; ];</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>            SETV_PYTHON_VERSION=3</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            SETV_PYTHON_VERSION=2</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>        SETV_PY_PATH=\${1}</span></span>
<span class="line"><span>        _setv_create $2</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        echo &quot;Error: Path \${1} does not exist!&quot;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function _setv_create()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    # Creates new virtual environment if ran with -n|--new flag</span></span>
<span class="line"><span>    if [ -z \${1} ];</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        echo &quot;You need to pass virtual environment name&quot;</span></span>
<span class="line"><span>        _setv_help_</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        echo &quot;Creating new virtual environment with the name: $1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if [ \${SETV_PYTHON_VERSION} -eq 3 ];</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>            \${SETV_PY_PATH} -m venv \${SETV_VIRTUAL_DIR_PATH}\${1}</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            virtualenv -p \${SETV_PY_PATH} \${SETV_VIRTUAL_DIR_PATH}\${1}</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        echo &quot;You can now activate the Python virtual environment by typing: setv \${1}&quot;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function _setv_delete()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    # Deletes virtual environment if ran with -d|--delete flag</span></span>
<span class="line"><span>    # TODO: Refactor</span></span>
<span class="line"><span>    if [ -z \${1} ];</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        echo &quot;You need to pass virtual environment name&quot;</span></span>
<span class="line"><span>        _setv_help_</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        if [ -d \${SETV_VIRTUAL_DIR_PATH}\${1} ];</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>            read -p &quot;Really delete this virtual environment(Y/N)? &quot; yes_no</span></span>
<span class="line"><span>            case $yes_no in</span></span>
<span class="line"><span>                Y|y) rm -rvf \${SETV_VIRTUAL_DIR_PATH}\${1};;</span></span>
<span class="line"><span>                N|n) echo &quot;Leaving the virtual environment as it is.&quot;;;</span></span>
<span class="line"><span>                *) echo &quot;You need to enter either Y/y or N/n&quot;</span></span>
<span class="line"><span>            esac</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            echo &quot;Error: No virtual environment found by the name: \${1}&quot;</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function _setv_list()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    # Lists all virtual environments if ran with -l|--list flag</span></span>
<span class="line"><span>    echo -e &quot;List of virtual environments you have under \${SETV_VIRTUAL_DIR_PATH}:\\n&quot;</span></span>
<span class="line"><span>    for virt in $(ls -l &quot;\${SETV_VIRTUAL_DIR_PATH}&quot; | egrep &#39;^d&#39; | awk -F &quot; &quot; &#39;{print $NF}&#39;)</span></span>
<span class="line"><span>    do</span></span>
<span class="line"><span>        echo \${virt}</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function setv() {</span></span>
<span class="line"><span>    # Main function</span></span>
<span class="line"><span>    if [ $# -eq 0 ];</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        _setv_help_</span></span>
<span class="line"><span>    elif [ $# -le 3 ];</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        case &quot;\${1}&quot; in</span></span>
<span class="line"><span>            -n|--new) _setv_create \${2};;</span></span>
<span class="line"><span>            -d|--delete) _setv_delete \${2};;</span></span>
<span class="line"><span>            -l|--list) _setv_list;;</span></span>
<span class="line"><span>            *) if [ -d \${SETV_VIRTUAL_DIR_PATH}\${1} ];</span></span>
<span class="line"><span>               then</span></span>
<span class="line"><span>                   # Activate the virtual environment</span></span>
<span class="line"><span>                   source \${SETV_VIRTUAL_DIR_PATH}\${1}/bin/activate</span></span>
<span class="line"><span>               else</span></span>
<span class="line"><span>                   # Else throw an error message</span></span>
<span class="line"><span>                   echo &quot;Sorry, you don&#39;t have any virtual environment with the name: \${1}&quot;</span></span>
<span class="line"><span>                   _setv_help_</span></span>
<span class="line"><span>               fi</span></span>
<span class="line"><span>               ;;</span></span>
<span class="line"><span>        esac</span></span>
<span class="line"><span>    elif [ $# -le 5 ];</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        case &quot;\${2}&quot; in</span></span>
<span class="line"><span>            -p|--python) _setv_custom_python_path \${3} \${4};;</span></span>
<span class="line"><span>            *) _setv_help_;;</span></span>
<span class="line"><span>        esac</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Calls bash-complete. The compgen command accepts most of the same</span></span>
<span class="line"><span># options that complete does but it generates results rather than just</span></span>
<span class="line"><span># storing the rules for future use.</span></span>
<span class="line"><span>complete  -F _setvcomplete_ setv</span></span></code></pre></div><hr>`,3)),l("p",null,[s[13]||(s[13]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/20/1/setv-bash-function"},{default:e(()=>[...s[12]||(s[12]=[n("https://opensource.com/article/20/1/setv-bash-function",-1)])]),_:1})]),l("p",null,[s[18]||(s[18]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/psachin"},{default:e(()=>[...s[14]||(s[14]=[n("Sachin Patil",-1)])]),_:1}),s[19]||(s[19]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[15]||(s[15]=[n("lujun9972",-1)])]),_:1}),s[20]||(s[20]=n(" 譯者：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[16]||(s[16]=[n("wxy",-1)])]),_:1}),s[21]||(s[21]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[24]||(s[24]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[23]||(s[23]=[n("Linux中國",-1)])]),_:1}),s[26]||(s[26]=n(" 榮譽推出",-1))])])}const T=i(h,[["render",u]]);export{k as __pageData,T as default};
