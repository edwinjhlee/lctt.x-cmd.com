import{_ as i,a0 as t,w as o,s as c,ao as d,I as l,x as a,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"六個優雅的 Linux 命令列技巧 | LCTT x X-CMD","titleTemplate":false,"description":"六個優雅的 Linux 命令列技巧 | LCTT (201708) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"六個優雅的 Linux 命令列技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"六個優雅的 Linux 命令列技巧 | LCTT (201708) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201708/20170824 Half a dozen clever Linux command line tricks","title":"六個優雅的 Linux 命令列技巧","tag":"201708","desc":""},"relativePath":"201708/20170824 Half a dozen clever Linux command line tricks.md","filePath":"[post].md"}'),r={name:"201708/20170824 Half a dozen clever Linux command line tricks.md"};function g(h,s,m,u,b,k){const n=t("Link");return o(),c("div",null,[s[18]||(s[18]=d(`<h1 id="六個優雅的-linux-命令列技巧" tabindex="-1">六個優雅的 Linux 命令列技巧 <a class="header-anchor" href="#六個優雅的-linux-命令列技巧" aria-label="Permalink to “六個優雅的 Linux 命令列技巧”">​</a></h1><blockquote><p>一些非常有用的命令能讓命令列的生活更滿足</p></blockquote><p><img src="https://images.idgesg.net/images/article/2017/08/commands-micah_elizabeth_scott-cropped-100733439-large.jpg" alt="command key keyboard"></p><p>使用 Linux 命令工作可以獲得許多樂趣，但是如果您使用一些命令，它們可以減少您的工作或以有趣的方式顯示信息時，您將獲得更多的樂趣。在今天的文章中，我們將介紹六個命令，它們可能會使你用在命令列上的時間更加值當。</p><h3 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to “watch”">​</a></h3><p><code>watch</code> 命令會重複運行您給出的任何命令，並顯示輸出。默認情況下，它每兩秒運行一次命令。命令的每次運行都將覆蓋上一次運行時顯示的內容，因此您始終可以看到最新的數據。</p><p>您可能會在等待某人登錄時使用它。在這種情況下，您可以使用 <code>watch who</code> 命令或者 <code>watch -n 15 who</code> 命令使每 15 秒運行一次，而不是兩秒一次。另外終端窗口的右上角會顯示日期和時間。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ watch -n 5 who</span></span>
<span class="line"><span>Every 5.0s: who                               stinkbug: Wed Aug 23 14:52:15 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span>shs      pts/0        2017-08-23 14:45 (192.168.0.11)</span></span>
<span class="line"><span>zoe      pts/1        2017-08-23 08:15 (192.168.0.19)</span></span></code></pre></div><p>您也可以使用它來查看日誌文件。如果您顯示的數據沒有任何變化，則只有窗口角落裏的日期和時間會發生變化。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ watch tail /var/log/syslog</span></span>
<span class="line"><span>Every 2.0s: tail /var/log/syslog              stinkbug: Wed Aug 23 15:16:37 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Aug 23 14:45:01 stinkbug CRON[7214]: (root) CMD (command -v debian-sa1 &gt; /dev/nu</span></span>
<span class="line"><span>ll &amp;&amp; debian-sa1 1 1)</span></span>
<span class="line"><span>Aug 23 14:45:17 stinkbug systemd[1]: Started Session 179 of user shs.</span></span>
<span class="line"><span>Aug 23 14:55:01 stinkbug CRON[7577]: (root) CMD (command -v debian-sa1 &gt; /dev/nu</span></span>
<span class="line"><span>ll &amp;&amp; debian-sa1 1 1)</span></span>
<span class="line"><span>Aug 23 15:05:01 stinkbug CRON[7582]: (root) CMD (command -v debian-sa1 &gt; /dev/nu</span></span>
<span class="line"><span>ll &amp;&amp; debian-sa1 1 1)</span></span>
<span class="line"><span>Aug 23 15:08:48 stinkbug systemd[1]: Starting Cleanup of Temporary Directories...</span></span>
<span class="line"><span>Aug 23 15:08:48 stinkbug systemd-tmpfiles[7584]: [/usr/lib/tmpfiles.d/var.conf:1</span></span>
<span class="line"><span>4] Duplicate line for path &quot;/var/log&quot;, ignoring.</span></span>
<span class="line"><span>Aug 23 15:08:48 stinkbug systemd[1]: Started Cleanup of Temporary Directories.</span></span>
<span class="line"><span>Aug 23 15:13:41 stinkbug systemd[1]: Started Session 182 of user shs.</span></span>
<span class="line"><span>Aug 23 15:14:29 stinkbug systemd[1]: Started Session 183 of user shs.</span></span>
<span class="line"><span>Aug 23 15:15:01 stinkbug CRON[7828]: (root) CMD (command -v debian-sa1 &gt; /dev/nu</span></span>
<span class="line"><span>ll &amp;&amp; debian-sa1 1 1)</span></span></code></pre></div><p>這裏的輸出和使用命令 <code>tail -f /var/log/syslog</code> 的輸出相似。</p><h3 id="look" tabindex="-1">look <a class="header-anchor" href="#look" aria-label="Permalink to “look”">​</a></h3><p>這個命令的名字 <code>look</code> 可能會讓我們以為它和 <code>watch</code> 做類似的事情，但其實是不同的。<code>look</code> 命令用於搜索以某個特定字符串開頭的單詞。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ look ecl</span></span>
<span class="line"><span>eclectic</span></span>
<span class="line"><span>eclectic&#39;s</span></span>
<span class="line"><span>eclectically</span></span>
<span class="line"><span>eclecticism</span></span>
<span class="line"><span>eclecticism&#39;s</span></span>
<span class="line"><span>eclectics</span></span>
<span class="line"><span>eclipse</span></span>
<span class="line"><span>eclipse&#39;s</span></span>
<span class="line"><span>eclipsed</span></span>
<span class="line"><span>eclipses</span></span>
<span class="line"><span>eclipsing</span></span>
<span class="line"><span>ecliptic</span></span>
<span class="line"><span>ecliptic&#39;s</span></span></code></pre></div><p><code>look</code> 命令通常有助於單詞的拼寫，它使用 <code>/usr/share/dict/words</code> 文件，除非你使用如下的命令指定了文件名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ look esac .bashrc</span></span>
<span class="line"><span>esac</span></span>
<span class="line"><span>esac</span></span>
<span class="line"><span>esac</span></span></code></pre></div><p>在這種情況下，它的作用就像跟在一個 <code>awk</code> 命令後面的 <code>grep</code> ，只打印匹配行上的第一個單詞。</p><h3 id="man-k" tabindex="-1">man -k <a class="header-anchor" href="#man-k" aria-label="Permalink to “man -k”">​</a></h3><p><code>man -k</code> 命令列出包含指定單詞的手冊頁。它的工作基本上和 <code>apropos</code> 命令一樣。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ man -k logrotate</span></span>
<span class="line"><span>dh_installlogrotate (1) - install logrotate config files</span></span>
<span class="line"><span>logrotate (8)        - rotates, compresses, and mails system logs</span></span>
<span class="line"><span>logrotate.conf (5)   - rotates, compresses, and mails system logs</span></span></code></pre></div><h3 id="help" tabindex="-1">help <a class="header-anchor" href="#help" aria-label="Permalink to “help”">​</a></h3><p>當你完全絕望的時候，您可能會試圖使用此命令，<code>help</code> 命令實際上是顯示一個 shell 內置命令的列表。最令人驚訝的是它有相當多的參數變量。你可能會看到這樣的東西，然後開始想知道這些內置功能可以為你做些什麼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ help</span></span>
<span class="line"><span>GNU bash, version 4.4.7(1)-release (i686-pc-linux-gnu)</span></span>
<span class="line"><span>These shell commands are defined internally.  Type \`help&#39; to see this list.</span></span>
<span class="line"><span>Type \`help name&#39; to find out more about the function \`name&#39;.</span></span>
<span class="line"><span>Use \`info bash&#39; to find out more about the shell in general.</span></span>
<span class="line"><span>Use \`man -k&#39; or \`info&#39; to find out more about commands not in this list.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A star (*) next to a name means that the command is disabled.</span></span>
<span class="line"><span></span></span>
<span class="line"><span> job_spec [&amp;]                            history [-c] [-d offset] [n] or hist&gt;</span></span>
<span class="line"><span> (( expression ))                        if COMMANDS; then COMMANDS; [ elif C&gt;</span></span>
<span class="line"><span> . filename [arguments]                  jobs [-lnprs] [jobspec ...] or jobs &gt;</span></span>
<span class="line"><span> :                                       kill [-s sigspec | -n signum | -sigs&gt;</span></span>
<span class="line"><span> [ arg... ]                              let arg [arg ...]</span></span>
<span class="line"><span> [[ expression ]]                        local [option] name[=value] ...</span></span>
<span class="line"><span> alias [-p] [name[=value] ... ]          logout [n]</span></span>
<span class="line"><span> bg [job_spec ...]                       mapfile [-d delim] [-n count] [-O or&gt;</span></span>
<span class="line"><span> bind [-lpsvPSVX] [-m keymap] [-f file&gt;  popd [-n] [+N | -N]</span></span>
<span class="line"><span> break [n]                               printf [-v var] format [arguments]</span></span>
<span class="line"><span> builtin [shell-builtin [arg ...]]       pushd [-n] [+N | -N | dir]</span></span>
<span class="line"><span> caller [expr]                           pwd [-LP]</span></span>
<span class="line"><span> case WORD in [PATTERN [| PATTERN]...)&gt;  read [-ers] [-a array] [-d delim] [-&gt;</span></span>
<span class="line"><span> cd [-L|[-P [-e]] [-@]] [dir]            readarray [-n count] [-O origin] [-s&gt;</span></span>
<span class="line"><span> command [-pVv] command [arg ...]        readonly [-aAf] [name[=value] ...] o&gt;</span></span>
<span class="line"><span> compgen [-abcdefgjksuv] [-o option] [&gt;  return [n]</span></span>
<span class="line"><span> complete [-abcdefgjksuv] [-pr] [-DE] &gt;  select NAME [in WORDS ... ;] do COMM&gt;</span></span>
<span class="line"><span> compopt [-o|+o option] [-DE] [name ..&gt;  set [-abefhkmnptuvxBCHP] [-o option-&gt;</span></span>
<span class="line"><span> continue [n]                            shift [n]</span></span>
<span class="line"><span> coproc [NAME] command [redirections]    shopt [-pqsu] [-o] [optname ...]</span></span>
<span class="line"><span> declare [-aAfFgilnrtux] [-p] [name[=v&gt;  source filename [arguments]</span></span>
<span class="line"><span> dirs [-clpv] [+N] [-N]                  suspend [-f]</span></span>
<span class="line"><span> disown [-h] [-ar] [jobspec ... | pid &gt;  test [expr]</span></span>
<span class="line"><span> echo [-neE] [arg ...]                   time [-p] pipeline</span></span>
<span class="line"><span> enable [-a] [-dnps] [-f filename] [na&gt;  times</span></span>
<span class="line"><span> eval [arg ...]                          trap [-lp] [[arg] signal_spec ...]</span></span>
<span class="line"><span> exec [-cl] [-a name] [command [argume&gt;  true</span></span>
<span class="line"><span> exit [n]                                type [-afptP] name [name ...]</span></span>
<span class="line"><span> export [-fn] [name[=value] ...] or ex&gt;  typeset [-aAfFgilnrtux] [-p] name[=v&gt;</span></span>
<span class="line"><span> false                                   ulimit [-SHabcdefiklmnpqrstuvxPT] [l&gt;</span></span>
<span class="line"><span> fc [-e ename] [-lnr] [first] [last] o&gt;  umask [-p] [-S] [mode]</span></span>
<span class="line"><span> fg [job_spec]                           unalias [-a] name [name ...]</span></span>
<span class="line"><span> for NAME [in WORDS ... ] ; do COMMAND&gt;  unset [-f] [-v] [-n] [name ...]</span></span>
<span class="line"><span> for (( exp1; exp2; exp3 )); do COMMAN&gt;  until COMMANDS; do COMMANDS; done</span></span>
<span class="line"><span> function name { COMMANDS ; } or name &gt;  variables - Names and meanings of so&gt;</span></span>
<span class="line"><span> getopts optstring name [arg]            wait [-n] [id ...]</span></span>
<span class="line"><span> hash [-lr] [-p pathname] [-dt] [name &gt;  while COMMANDS; do COMMANDS; done</span></span>
<span class="line"><span> help [-dms] [pattern ...]               { COMMANDS ; }</span></span></code></pre></div><h3 id="stat-c" tabindex="-1">stat -c <a class="header-anchor" href="#stat-c" aria-label="Permalink to “stat -c”">​</a></h3><p><code>stat</code> 命令用於顯示文件的大小、所有者、用户組、索引節點號、權限、修改和訪問時間等重要的統計信息。這是一個非常有用的命令，可以顯示比 <code>ls -l</code> 更多的細節。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ stat .bashrc</span></span>
<span class="line"><span>  File: .bashrc</span></span>
<span class="line"><span>  Size: 4048            Blocks: 8          IO Block: 4096   regular file</span></span>
<span class="line"><span>Device: 806h/2054d      Inode: 421481      Links: 1</span></span>
<span class="line"><span>Access: (0644/-rw-r--r--)  Uid: ( 1000/     shs)   Gid: ( 1000/     shs)</span></span>
<span class="line"><span>Access: 2017-08-23 15:13:41.781809933 -0400</span></span>
<span class="line"><span>Modify: 2017-06-21 17:37:11.875157790 -0400</span></span>
<span class="line"><span>Change: 2017-06-21 17:37:11.899157791 -0400</span></span>
<span class="line"><span> Birth: -</span></span></code></pre></div><p>使用 <code>-c</code> 選項，您可以指定要查看的字段。例如，如果您只想查看一個文件或一系列文件的文件名和訪問權限，則可以這樣做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ stat -c &#39;%n %a&#39; .bashrc</span></span>
<span class="line"><span>.bashrc 644</span></span></code></pre></div><p>在此命令中， <code>%n</code> 表示每個文件的名稱，而 <code>%a</code> 表示訪問權限。<code>%u</code> 表示數字類型的 UID，而 <code>%U</code> 表示用户名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ stat -c &#39;%n %a&#39; bin/*</span></span>
<span class="line"><span>bin/loop 700</span></span>
<span class="line"><span>bin/move2nohup 700</span></span>
<span class="line"><span>bin/nohup.out 600</span></span>
<span class="line"><span>bin/show_release 700</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ stat -c &#39;%n %a %U&#39; bin/*</span></span>
<span class="line"><span>bin/loop 700 shs</span></span>
<span class="line"><span>bin/move2nohup 700 shs</span></span>
<span class="line"><span>bin/nohup.out 600 root</span></span>
<span class="line"><span>bin/show_release 700 shs</span></span></code></pre></div><h3 id="tab" tabindex="-1">TAB <a class="header-anchor" href="#tab" aria-label="Permalink to “TAB”">​</a></h3><p>如果你沒有使用過 tab 鍵來補全文件名，你真的錯過了一個非常有用的命令列技巧。tab 鍵提供文件名補全功能（包括使用 <code>cd</code> 時的目錄）。它在出現歧義之前儘可能多的填充文件名（多個文件以相同的字母開頭。如果您有一個名為 <code>bigplans</code> 的文件，另一個名為 <code>bigplans2017</code> 的文件會發生歧義，你將聽到一個聲音，然後需要決定是按下回車鍵還是輸入 <code>2</code> 之後再按下 tab 鍵選擇第二個文件。</p>`,32)),l("p",null,[s[2]||(s[2]=a("（題圖：",-1)),e(n,{href:"https://www.flickr.com/photos/micahdowty/4630801442/in/photolist-84d4Wb-p29iHU-dscgLx-pXKT7a-pXKT7v-azMz3V-azMz7M-4Amp2h-6iyQ51-4nf4VF-5C1gt6-6P4PwG-po6JEA-p6C5Wg-6RcRbH-7GAmbK-dCkRnT-7ETcBp-4Xbhrw-dXrN8w-dXm83Z-dXrNvQ-dXrMZC-dXrMPN-pY4GdS-azMz8X-bfNoF4-azQe61-p1iUtm-87i3vj-7enNsv-6sqvJy-dXm8aD-6smkyX-5CFfGm-dXm8dD-6sqviw-6sqvVU-dXrMVd-6smkXc-dXm7Ug-deuxUg-6smker-Hd15p-6squyf-aGtnxn-6smjRX-5YtTUN-nynqYm-ea5o3c"},{default:p(()=>[...s[0]||(s[0]=[a("Micah Elizabeth Scott",-1)])]),_:1}),s[3]||(s[3]=a(" ",-1)),e(n,{href:"https://creativecommons.org/licenses/by/2.0/legalcode"},{default:p(()=>[...s[1]||(s[1]=[a("(CC BY 2.0)",-1)])]),_:1}),s[4]||(s[4]=a("）",-1))]),s[19]||(s[19]=l("hr",null,null,-1)),l("p",null,[s[6]||(s[6]=a("via: ",-1)),e(n,{href:"https://www.networkworld.com/article/3219684/linux/half-a-dozen-clever-linux-command-line-tricks.html"},{default:p(()=>[...s[5]||(s[5]=[a("https://www.networkworld.com/article/3219684/linux/half-a-dozen-clever-linux-command-line-tricks.html",-1)])]),_:1})]),l("p",null,[s[10]||(s[10]=a("作者：",-1)),e(n,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:p(()=>[...s[7]||(s[7]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[11]||(s[11]=a(" 譯者：",-1)),e(n,{href:"https://github.com/firmianay"},{default:p(()=>[...s[8]||(s[8]=[a("firmianay",-1)])]),_:1}),s[12]||(s[12]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[9]||(s[9]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[15]||(s[15]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[13]||(s[13]=[a("LCTT",-1)])]),_:1}),s[16]||(s[16]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[14]||(s[14]=[a("Linux中國",-1)])]),_:1}),s[17]||(s[17]=a(" 榮譽推出",-1))])])}const x=i(r,[["render",g]]);export{y as __pageData,x as default};
