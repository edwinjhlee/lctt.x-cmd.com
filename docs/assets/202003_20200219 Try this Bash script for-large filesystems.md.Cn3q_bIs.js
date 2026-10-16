import{_ as i,a0 as t,w as o,s as c,ao as r,I as l,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"针对大型文件系统可以试试此 Bash 脚本 | LCTT x X-CMD","titleTemplate":false,"description":"针对大型文件系统可以试试此 Bash 脚本 | LCTT (202003) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"针对大型文件系统可以试试此 Bash 脚本 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"针对大型文件系统可以试试此 Bash 脚本 | LCTT (202003) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202003/20200219 Try this Bash script for-large filesystems","title":"针对大型文件系统可以试试此 Bash 脚本","tag":"202003","desc":""},"relativePath":"202003/20200219 Try this Bash script for-large filesystems.md","filePath":"[post].md"}'),d={name:"202003/20200219 Try this Bash script for-large filesystems.md"};function u(h,s,f,g,m,q){const a=t("Link");return o(),c("div",null,[s[15]||(s[15]=r(`<h1 id="针对大型文件系统可以试试此-bash-脚本" tabindex="-1">针对大型文件系统可以试试此 Bash 脚本 <a class="header-anchor" href="#针对大型文件系统可以试试此-bash-脚本" aria-label="Permalink to “针对大型文件系统可以试试此 Bash 脚本”">​</a></h1><blockquote><p>一个可以列出文件、目录、可执行文件和链接的简单脚本。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/bash_command_line.png?itok=k4z94W2U" alt="bash logo on green background" title="bash logo on green background"></p><p>你是否曾经想列出目录中的所有文件，但仅列出文件，而不列出其它的。仅列出目录呢？如果有这种需求的话，那么下面的脚本可能正是你一直在寻找的，它在 GPLv3 下开源。</p><p>当然，你可以使用 <code>find</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>find . -maxdepth 1 -type f -print</span></span></code></pre></div><p>但这键入起来很麻烦，输出也不友好，并且缺少 <code>ls</code> 命令拥有的一些改进。你还可以结合使用 <code>ls</code> 和 <code>grep</code> 来达到相同的结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ls -F . | grep -v /</span></span></code></pre></div><p>但是，这又有点笨拙。下面这个脚本提供了一种简单的替代方法。</p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to “用法”">​</a></h3><p>该脚本提供了四个主要功能，具体取决于你调用它的名称：<code>lsf</code> 列出文件，<code>lsd</code> 列出目录，<code>lsx</code> 列出可执行文件以及 <code>lsl</code> 列出链接。</p><p>通过符号链接无需安装该脚本的多个副本。这样可以节省空间并使脚本更新更容易。</p><p>该脚本通过使用 <code>find</code> 命令进行搜索，然后在找到的每个项目上运行 <code>ls</code>。这样做的好处是，任何给脚本的参数都将传递给 <code>ls</code> 命令。因此，例如，这可以列出所有文件，甚至包括以点开头的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lsf -a</span></span></code></pre></div><p>要以长格式列出目录，请使用 <code>lsd</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lsd -l</span></span></code></pre></div><p>你可以提供多个参数，以及文件和目录路径。</p><p>下面提供了当前目录的父目录和 <code>/usr/bin</code> 目录中所有文件的长分类列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lsf -F -l .. /usr/bin</span></span></code></pre></div><p>目前该脚本不处理递归，仅列出当前目录中的文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lsf -R</span></span></code></pre></div><p>该脚本不会深入子目录，这个不足有一天可能会进行修复。</p><h3 id="内部" tabindex="-1">内部 <a class="header-anchor" href="#内部" aria-label="Permalink to “内部”">​</a></h3><p>该脚本采用自上而下的方式编写，其初始化功能位于脚本的开头，而工作主体则接近结尾。脚本中只有两个真正重要的功能。函数 <code>parse_args()</code> 会仔细分析命令行，将选项与路径名分开，并处理脚本中的 <code>ls</code> 命令行选项中的特定选项。</p><p><code>list_things_in_dir()</code> 函数以目录名作为参数并在其上运行 <code>find</code> 命令。找到的每个项目都传递给 <code>ls</code> 命令进行显示。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>这是一个可以完成简单功能的简单脚本。它节省了时间，并且在使用大型文件系统时可能会非常有用。</p><h3 id="脚本" tabindex="-1">脚本 <a class="header-anchor" href="#脚本" aria-label="Permalink to “脚本”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Script to list:</span></span>
<span class="line"><span>#      directories (if called &quot;lsd&quot;)</span></span>
<span class="line"><span>#      files       (if called &quot;lsf&quot;)</span></span>
<span class="line"><span>#      links       (if called &quot;lsl&quot;)</span></span>
<span class="line"><span>#  or  executables (if called &quot;lsx&quot;)</span></span>
<span class="line"><span># but not any other type of filesystem object.</span></span>
<span class="line"><span># FIXME: add lsp   (list pipes)</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Usage:</span></span>
<span class="line"><span>#   &lt;command_name&gt; [switches valid for ls command] [dirname...]</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Works with names that includes spaces and that start with a hyphen.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Created by Nick Clifton.</span></span>
<span class="line"><span># Version 1.4</span></span>
<span class="line"><span># Copyright (c) 2006, 2007 Red Hat.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># This is free software; you can redistribute it and/or modify it</span></span>
<span class="line"><span># under the terms of the GNU General Public License as published</span></span>
<span class="line"><span># by the Free Software Foundation; either version 3, or (at your</span></span>
<span class="line"><span># option) any later version.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># It is distributed in the hope that it will be useful, but</span></span>
<span class="line"><span># WITHOUT ANY WARRANTY; without even the implied warranty of</span></span>
<span class="line"><span># MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the</span></span>
<span class="line"><span># GNU General Public License for more details.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ToDo:</span></span>
<span class="line"><span>#  Handle recursion, eg:  lsl -R</span></span>
<span class="line"><span>#  Handle switches that take arguments, eg --block-size</span></span>
<span class="line"><span>#  Handle --almost-all, --ignore-backups, --format and --ignore</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main ()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  init</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  parse_args \${1+&quot;$@&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  list_objects</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  exit 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>report ()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  echo $prog&quot;: &quot; \${1+&quot;$@&quot;}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fail ()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  report &quot; Internal error: &quot; \${1+&quot;$@&quot;}</span></span>
<span class="line"><span>  exit 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Initialise global variables.</span></span>
<span class="line"><span>init ()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  # Default to listing things in the current directory.</span></span>
<span class="line"><span>  dirs[0]=&quot;.&quot;;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  # num_dirs is the number of directories to be listed minus one.</span></span>
<span class="line"><span>  # This is because we are indexing the dirs[] array from zero.</span></span>
<span class="line"><span>  num_dirs=0;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  # Default to ignoring things that start with a period.</span></span>
<span class="line"><span>  no_dots=1</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  # Note - the global variables &#39;type&#39; and &#39;opts&#39; are initialised in</span></span>
<span class="line"><span>  # parse_args function.</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Parse our command line</span></span>
<span class="line"><span>parse_args ()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  local no_more_args</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  no_more_args=0 ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  prog=\`basename $0\` ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # Decide if we are listing files or directories.</span></span>
<span class="line"><span>  case $prog in</span></span>
<span class="line"><span>    lsf | lsf.sh)</span></span>
<span class="line"><span>      type=f</span></span>
<span class="line"><span>      opts=&quot;&quot;;</span></span>
<span class="line"><span>      ;;</span></span>
<span class="line"><span>    lsd | lsd.sh)</span></span>
<span class="line"><span>      type=d</span></span>
<span class="line"><span>      # The -d switch to &quot;ls&quot; is presumed when listing directories.</span></span>
<span class="line"><span>      opts=&quot;-d&quot;;</span></span>
<span class="line"><span>      ;;</span></span>
<span class="line"><span>    lsl | lsl.sh)</span></span>
<span class="line"><span>      type=l</span></span>
<span class="line"><span>      # Use -d to prevent the listed links from being followed.</span></span>
<span class="line"><span>      opts=&quot;-d&quot;;</span></span>
<span class="line"><span>      ;;</span></span>
<span class="line"><span>    lsx | lsx.sh)</span></span>
<span class="line"><span>      type=f</span></span>
<span class="line"><span>      find_extras=&quot;-perm /111&quot;</span></span>
<span class="line"><span>      ;;    </span></span>
<span class="line"><span>    *)</span></span>
<span class="line"><span>      fail &quot;Unrecognised program name: &#39;$prog&#39;, expected either &#39;lsd&#39;, &#39;lsf&#39;, &#39;lsl&#39; or &#39;lsx&#39;&quot;</span></span>
<span class="line"><span>      ;;</span></span>
<span class="line"><span>  esac</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # Locate any additional command line switches for ls and accumulate them.</span></span>
<span class="line"><span>  # Likewise accumulate non-switches to the directories list.</span></span>
<span class="line"><span>  while [ $# -gt 0 ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>    case &quot;$1&quot; in</span></span>
<span class="line"><span>      # FIXME: Handle switches that take arguments, eg --block-size</span></span>
<span class="line"><span>      # FIXME: Properly handle --almost-all, --ignore-backups, --format</span></span>
<span class="line"><span>      # FIXME:   and --ignore</span></span>
<span class="line"><span>      # FIXME: Properly handle --recursive</span></span>
<span class="line"><span>      -a | -A | --all | --almost-all)</span></span>
<span class="line"><span>        no_dots=0;</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>      --version)</span></span>
<span class="line"><span>        report &quot;version 1.2&quot;</span></span>
<span class="line"><span>        exit 0</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>      --help)</span></span>
<span class="line"><span>        case $type in</span></span>
<span class="line"><span>          d) report &quot;a version of &#39;ls&#39; that lists only directories&quot; ;;</span></span>
<span class="line"><span>          l) report &quot;a version of &#39;ls&#39; that lists only links&quot; ;;</span></span>
<span class="line"><span>          f) if [ &quot;x$find_extras&quot; = &quot;x&quot; ] ; then</span></span>
<span class="line"><span>               report &quot;a version of &#39;ls&#39; that lists only files&quot; ;</span></span>
<span class="line"><span>             else</span></span>
<span class="line"><span>              report &quot;a version of &#39;ls&#39; that lists only executables&quot;;</span></span>
<span class="line"><span>             fi ;;</span></span>
<span class="line"><span>        esac</span></span>
<span class="line"><span>        exit 0</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>      --)</span></span>
<span class="line"><span>        # A switch to say that all further items on the command line are</span></span>
<span class="line"><span>        # arguments and not switches.</span></span>
<span class="line"><span>        no_more_args=1 ;</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>      -*)</span></span>
<span class="line"><span>        if [ &quot;x$no_more_args&quot; = &quot;x1&quot; ] ;</span></span>
<span class="line"><span>        then</span></span>
<span class="line"><span>          dirs[$num_dirs]=&quot;$1&quot;;</span></span>
<span class="line"><span>          let &quot;num_dirs++&quot;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>          # Check for a switch that just uses a single dash, not a double</span></span>
<span class="line"><span>          # dash.  This could actually be multiple switches combined into</span></span>
<span class="line"><span>          # one word, eg &quot;lsd -alF&quot;.  In this case, scan for the -a switch.</span></span>
<span class="line"><span>          # XXX: FIXME: The use of =~ requires bash v3.0+.</span></span>
<span class="line"><span>          if [[ &quot;x\${1:1:1}&quot; != &quot;x-&quot; &amp;&amp; &quot;x$1&quot; =~ &quot;x-.*a.*&quot; ]] ;</span></span>
<span class="line"><span>          then</span></span>
<span class="line"><span>            no_dots=0;</span></span>
<span class="line"><span>          fi</span></span>
<span class="line"><span>          opts=&quot;$opts $1&quot;;</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>      *)</span></span>
<span class="line"><span>        dirs[$num_dirs]=&quot;$1&quot;;</span></span>
<span class="line"><span>        let &quot;num_dirs++&quot;</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>    esac</span></span>
<span class="line"><span>    shift</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # Remember that we are counting from zero not one.</span></span>
<span class="line"><span>  if [ $num_dirs -gt 0 ] ;</span></span>
<span class="line"><span>  then</span></span>
<span class="line"><span>    let &quot;num_dirs--&quot;</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>list_things_in_dir ()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  local dir</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # Paranoia checks - the user should never encounter these.</span></span>
<span class="line"><span>  if test &quot;x$1&quot; = &quot;x&quot; ;</span></span>
<span class="line"><span>  then</span></span>
<span class="line"><span>    fail &quot;list_things_in_dir called without an argument&quot;</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if test &quot;x$2&quot; != &quot;x&quot; ;</span></span>
<span class="line"><span>  then</span></span>
<span class="line"><span>    fail &quot;list_things_in_dir called with too many arguments&quot;</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # Use quotes when accessing $dir in order to preserve</span></span>
<span class="line"><span>  # any spaces that might be in the directory name.</span></span>
<span class="line"><span>  dir=&quot;\${dirs[$1]}&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # Catch directory names that start with a dash - they</span></span>
<span class="line"><span>  # confuse pushd.</span></span>
<span class="line"><span>  if test &quot;x\${dir:0:1}&quot; = &quot;x-&quot; ;</span></span>
<span class="line"><span>  then</span></span>
<span class="line"><span>    dir=&quot;./$dir&quot;</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  if [ -d &quot;$dir&quot; ]</span></span>
<span class="line"><span>  then</span></span>
<span class="line"><span>    if [ $num_dirs -gt 0 ]</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>      echo &quot;  $dir:&quot;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Use pushd rather passing the directory name to find so that the</span></span>
<span class="line"><span>    # names that find passes on to xargs do not have any paths prepended.</span></span>
<span class="line"><span>    pushd &quot;$dir&quot; &gt; /dev/null</span></span>
<span class="line"><span>    if [ $no_dots -ne 0 ] ; then</span></span>
<span class="line"><span>      find . -maxdepth 1 -type $type $find_extras -not -name &quot;.*&quot; -printf &quot;%f\\000&quot; \\</span></span>
<span class="line"><span>        | xargs --null --no-run-if-empty ls $opts -- ;</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>      find . -maxdepth 1 -type $type $find_extras -printf &quot;%f\\000&quot; \\</span></span>
<span class="line"><span>        | xargs --null --no-run-if-empty ls $opts -- ;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    popd &gt; /dev/null</span></span>
<span class="line"><span>  else</span></span>
<span class="line"><span>    report &quot;directory &#39;$dir&#39; could not be found&quot;</span></span>
<span class="line"><span>  fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>list_objects ()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  local i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  i=0;</span></span>
<span class="line"><span>  while [ $i -le $num_dirs ]</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>    list_things_in_dir i</span></span>
<span class="line"><span>    let &quot;i++&quot;</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Invoke main</span></span>
<span class="line"><span>main \${1+&quot;$@&quot;}</span></span></code></pre></div><hr>`,30)),l("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/20/2/script-large-files"},{default:e(()=>[...s[0]||(s[0]=[n("https://opensource.com/article/20/2/script-large-files",-1)])]),_:1})]),l("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/nickclifton"},{default:e(()=>[...s[2]||(s[2]=[n("Nick Clifton",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[4]||(s[4]=[n("wxy",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const x=i(d,[["render",u]]);export{y as __pageData,x as default};
