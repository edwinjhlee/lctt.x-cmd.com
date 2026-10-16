import{_ as a,a0 as i,w as g,s as p,ao as d,I as o,x as s,a1 as t,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"十個 SCP 傳輸命令例子 | LCTT x X-CMD","titleTemplate":false,"description":"十個 SCP 傳輸命令例子 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十個 SCP 傳輸命令例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十個 SCP 傳輸命令例子 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141119 10 SCP Commands to Transfer Files or Folders in Linux","title":"十個 SCP 傳輸命令例子","tag":"201412","desc":""},"relativePath":"201412/20141119 10 SCP Commands to Transfer Files or Folders in Linux.md","filePath":"[post].md"}'),c={name:"201412/20141119 10 SCP Commands to Transfer Files or Folders in Linux.md"};function m(x,n,l,h,u,b){const e=i("Link");return g(),p("div",null,[n[13]||(n[13]=d(`<h1 id="十個-scp-傳輸命令例子" tabindex="-1">十個 SCP 傳輸命令例子 <a class="header-anchor" href="#十個-scp-傳輸命令例子" aria-label="Permalink to “十個 SCP 傳輸命令例子”">​</a></h1><p>Linux系統管理員應該很熟悉<strong>CLI</strong>環境，因為通常在Linux服務器中是不安裝<strong>GUI</strong>的。<strong>SSH</strong>可能是Linux系統管理員通過遠程方式安全管理服務器的最流行協議。在<strong>SSH</strong>命令中內置了一種叫<strong>SCP</strong>的命令，用來在服務器之間安全傳輸文件。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2013/10/SCP-Commands.png" alt=""></p><p>以下命令可以解讀為：用“<strong>username account</strong>”“<strong>拷貝 source file name</strong>”到“<strong>destination host</strong>”上的“<strong>destination folder</strong>”裏。</p><h4 id="scp命令的基本語法" tabindex="-1">SCP命令的基本語法 <a class="header-anchor" href="#scp命令的基本語法" aria-label="Permalink to “SCP命令的基本語法”">​</a></h4><pre><code>scp source_file_name username@destination_host:destination_folder
</code></pre><p><strong>SCP</strong>命令有很多可以使用的參數，這裏指的是每次都會用到的參數。</p><h3 id="用-v參數來提供scp進程的詳細信息" tabindex="-1">用-v參數來提供SCP進程的詳細信息 <a class="header-anchor" href="#用-v參數來提供scp進程的詳細信息" aria-label="Permalink to “用-v參數來提供SCP進程的詳細信息”">​</a></h3><p>不帶參數的基本<strong>SCP</strong>命令會在後台拷貝文件，除非操作完成或者有錯誤出現，否則用户在界面上是看不到任何提示信息的。你可以用“<strong>-v</strong>”參數來在屏幕上打印出調試信息，這能幫助你調試連接、認證和配置的一些問題。</p><pre><code>pungki@mint ~/Documents $ scp -v Label.pdf mrarianto@202.x.x.x:.
</code></pre><h4 id="部分輸出" tabindex="-1">部分輸出 <a class="header-anchor" href="#部分輸出" aria-label="Permalink to “部分輸出”">​</a></h4><pre><code>Executing: program /usr/bin/ssh host 202.x.x.x, user mrarianto, command scp -v -t .
OpenSSH_6.0p1 Debian-3, OpenSSL 1.0.1c 10 May 2012
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: Applying options for *
debug1: Connecting to 202.x.x.x [202.x.x.x] port 22.
debug1: Connection established.
debug1: Host &#39;202.x.x.x&#39; is known and matches the RSA host key.
debug1: Found key in /home/pungki/.ssh/known_hosts:1
debug1: ssh_rsa_verify: signature correct
debug1: Next authentication method: password
mrarianto@202.x.x.x&#39;s password:
debug1: Authentication succeeded (password).
Authenticated to 202.x.x.x ([202.x.x.x]:22).
Sending file modes: C0770 3760348 Label.pdf
Sink: C0770 3760348 Label.pdf
Label.pdf 100% 3672KB 136.0KB/s 00:27
Transferred: sent 3766304, received 3000 bytes, in 65.2 seconds
Bytes per second: sent 57766.4, received 46.0
debug1: Exit status 0
</code></pre><h3 id="從源文件獲取修改時間、訪問時間和模式" tabindex="-1">從源文件獲取修改時間、訪問時間和模式 <a class="header-anchor" href="#從源文件獲取修改時間、訪問時間和模式" aria-label="Permalink to “從源文件獲取修改時間、訪問時間和模式”">​</a></h3><p>“<strong>-p</strong>”參數會幫到把預計的時間和連接速度會顯示在屏幕上。</p><pre><code>pungki@mint ~/Documents $ scp -p Label.pdf mrarianto@202.x.x.x:.
</code></pre><h4 id="部分輸出-1" tabindex="-1">部分輸出 <a class="header-anchor" href="#部分輸出-1" aria-label="Permalink to “部分輸出”">​</a></h4><pre><code>mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 126.6KB/s 00:29
</code></pre><h3 id="用-c參數來讓文件傳輸更快" tabindex="-1">用-C參數來讓文件傳輸更快 <a class="header-anchor" href="#用-c參數來讓文件傳輸更快" aria-label="Permalink to “用-C參數來讓文件傳輸更快”">​</a></h3><p>有一個參數能讓傳輸文件更快，就是“<strong>-C</strong>”參數，它的作用是不停壓縮所傳輸的文件。它特別之處在於壓縮是在網絡傳輸中進行，當文件傳到目標服務器時，它會變回壓縮之前的原始大小。</p><p>來看看這些命令，我們使用一個<strong>93 Mb</strong>的單一文件來做例子。</p><pre><code>pungki@mint ~/Documents $ scp -pv messages.log mrarianto@202.x.x.x:.
</code></pre><h4 id="部分輸出-2" tabindex="-1">部分輸出 <a class="header-anchor" href="#部分輸出-2" aria-label="Permalink to “部分輸出”">​</a></h4><pre><code>Executing: program /usr/bin/ssh host 202.x.x.x, user mrarianto, command scp -v -p -t .
OpenSSH_6.0p1 Debian-3, OpenSSL 1.0.1c 10 May 2012
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: Applying options for *
debug1: Connecting to 202.x.x.x [202.x.x.x] port 22.
debug1: Connection established.
debug1: identity file /home/pungki/.ssh/id_rsa type -1
debug1: Found key in /home/pungki/.ssh/known_hosts:1
debug1: ssh_rsa_verify: signature correct
debug1: Trying private key: /home/pungki/.ssh/id_rsa
debug1: Next authentication method: password
mrarianto@202.x.x.x&#39;s password:
debug1: Authentication succeeded (password).
Authenticated to 202.x.x.x ([202.x.x.x]:22).
debug1: Sending command: scp -v -p -t .
File mtime 1323853868 atime 1380425711
Sending file timestamps: T1323853868 0 1380425711 0
messages.log 100% 93MB 58.6KB/s 27:05
Transferred: sent 97614832, received 25976 bytes, in 1661.3 seconds
Bytes per second: sent 58758.4, received 15.6
debug1: Exit status 0
</code></pre><p>不用“<strong>-C</strong>”參數來拷貝文件，結果用了<strong>1661.3</strong>秒，你可以比較下用了“<strong>-C</strong>”參數之後的結果。</p><pre><code>pungki@mint ~/Documents $ scp -Cpv messages.log mrarianto@202.x.x.x:.
</code></pre><h4 id="部分輸出-3" tabindex="-1">部分輸出 <a class="header-anchor" href="#部分輸出-3" aria-label="Permalink to “部分輸出”">​</a></h4><pre><code>Executing: program /usr/bin/ssh host 202.x.x.x, user mrarianto, command scp -v -p -t .
OpenSSH_6.0p1 Debian-3, OpenSSL 1.0.1c 10 May 2012
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: Applying options for *
debug1: Connecting to 202.x.x.x [202.x.x.x] port 22.
debug1: Connection established.
debug1: identity file /home/pungki/.ssh/id_rsa type -1
debug1: Host &#39;202.x.x.x&#39; is known and matches the RSA host key.
debug1: Found key in /home/pungki/.ssh/known_hosts:1
debug1: ssh_rsa_verify: signature correct
debug1: Next authentication method: publickey
debug1: Trying private key: /home/pungki/.ssh/id_rsa
debug1: Next authentication method: password
mrarianto@202.x.x.x&#39;s password:
debug1: Enabling compression at level 6.
debug1: Authentication succeeded (password).
Authenticated to 202.x.x.x ([202.x.x.x]:22).
debug1: channel 0: new [client-session]
debug1: Sending command: scp -v -p -t .
File mtime 1323853868 atime 1380428748
Sending file timestamps: T1323853868 0 1380428748 0
Sink: T1323853868 0 1380428748 0
Sending file modes: C0600 97517300 messages.log
messages.log 100% 93MB 602.7KB/s 02:38
Transferred: sent 8905840, received 15768 bytes, in 162.5 seconds
Bytes per second: sent 54813.9, received 97.0
debug1: Exit status 0
debug1: compress outgoing: raw data 97571111, compressed 8806191, factor 0.09
debug1: compress incoming: raw data 7885, compressed 3821, factor 0.48
</code></pre><p>看到了吧，壓縮了文件之後，傳輸過程在<strong>162.5</strong>秒內就完成了，速度是不用“<strong>-C</strong>”參數的10倍。如果你要通過網絡拷貝很多份文件，那麼“<strong>-C</strong>”參數能幫你節省掉很多時間。</p><p>有一點我們需要注意，這個壓縮的方法不是適用於所有文件。當源文件已經被壓縮過了，那就沒辦法再壓縮很多了。諸如那些像<strong>.zip</strong>，<strong>.rar</strong>，<strong>pictures</strong>和<strong>.iso</strong>的文件，用“<strong>-C</strong>”參數就沒什麼意義。</p><h3 id="選擇其它加密算法來加密文件" tabindex="-1">選擇其它加密算法來加密文件 <a class="header-anchor" href="#選擇其它加密算法來加密文件" aria-label="Permalink to “選擇其它加密算法來加密文件”">​</a></h3><p><strong>SCP</strong>默認是用“<strong>AES-128</strong>”加密算法來加密傳輸的。如果你想要改用其它加密算法來加密傳輸，你可以用“<strong>-c</strong>”參數。我們來瞧瞧。</p><pre><code>pungki@mint ~/Documents $ scp -c 3des Label.pdf mrarianto@202.x.x.x:.

mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 282.5KB/s 00:13
</code></pre><p>上述命令是告訴<strong>SCP</strong>用<strong>3des algorithm</strong>來加密文件。要注意這個參數是“<strong>-c</strong>”（小寫）而不是“<strong>-C</strong>“（大寫）。</p><h3 id="限制帶寬使用" tabindex="-1">限制帶寬使用 <a class="header-anchor" href="#限制帶寬使用" aria-label="Permalink to “限制帶寬使用”">​</a></h3><p>還有一個很有用的參數是“<strong>-l</strong>”參數，它能限制使用帶寬。如果你為了拷貝很多文件而去執行了一份自動化腳本又不希望帶寬被<strong>SCP</strong>進程耗盡，那這個參數會非常管用。</p><pre><code>pungki@mint ~/Documents $ scp -l 400 Label.pdf mrarianto@202.x.x.x:.

mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 50.3KB/s 01:13
</code></pre><p>在“<strong>-l</strong>”參數後面的這個<strong>400</strong>值意思是我們給<strong>SCP</strong>進程限制了帶寬為<strong>50 KB/秒</strong>。有一點要記住，帶寬是以<strong>千比特/秒</strong> (<strong>kbps</strong>)表示的，而<strong>8 比特</strong>等於<strong>1 字節</strong>。</p><p>因為<strong>SCP</strong>是用<strong>千字節/秒</strong> (<strong>KB/s</strong>)計算的，所以如果你想要限制<strong>SCP</strong>的最大帶寬只有<strong>50 KB/s</strong>，你就需要設置成<strong>50 x 8 = 400</strong>。</p><h3 id="指定端口" tabindex="-1">指定端口 <a class="header-anchor" href="#指定端口" aria-label="Permalink to “指定端口”">​</a></h3><p>通常<strong>SCP</strong>是把<strong>22</strong>作為默認端口。但是為了安全起見SSH 監聽端口改成其它端口。比如説，我們想用<strong>2249</strong>端口，這種情況下就要指定端口。命令如下所示。</p><pre><code>pungki@mint ~/Documents $ scp -P 2249 Label.pdf mrarianto@202.x.x.x:.

mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 262.3KB/s 00:14
</code></pre><p>確認一下寫的是大寫字母“<strong>P</strong>”而不是“<strong>p</strong>“，因為“<strong>p</strong>”已經被用來保留源文件的修改時間和模式（LCTT 譯註：和 ssh 命令不同了）。</p><h3 id="遞歸拷貝文件和文件夾" tabindex="-1">遞歸拷貝文件和文件夾 <a class="header-anchor" href="#遞歸拷貝文件和文件夾" aria-label="Permalink to “遞歸拷貝文件和文件夾”">​</a></h3><p>有時我們需要拷貝文件夾及其內部的所有<strong>文件</strong>/<strong>子文件夾</strong>，我們如果能用一條命令解決問題那就更好了。<strong>SCP</strong>用“<strong>-r</strong>”參數就能做到。</p><pre><code>pungki@mint ~/Documents $ scp -r documents mrarianto@202.x.x.x:.

mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 282.5KB/s 00:13
scp.txt 100% 10KB 9.8KB/s 00:00
</code></pre><p>拷貝完成後，你會在目標服務器中找到一個名為“<strong>documents</strong>”的文件夾，其中就是所拷貝的所有文件。“<strong>documents</strong>”是系統自動創建的文件夾。</p><h3 id="禁用進度條和警告-診斷信息" tabindex="-1">禁用進度條和警告/診斷信息 <a class="header-anchor" href="#禁用進度條和警告-診斷信息" aria-label="Permalink to “禁用進度條和警告/診斷信息”">​</a></h3><p>如果你不想從SCP中看到進度條和警告/診斷信息，你可以用“<strong>-q</strong>”參數來靜默它們，舉例如下。</p><pre><code>pungki@mint ~/Documents $ scp -q Label.pdf mrarianto@202.x.x.x:.

mrarianto@202.x.x.x&#39;s password:
pungki@mint ~/Documents $
</code></pre><p>正如你所看到的，在你輸入密碼之後，沒有任何關於SCP進度的消息反饋。進度完成後，你也看不到任何提示。</p><h3 id="用scp通過代理來拷貝文件" tabindex="-1">用SCP通過代理來拷貝文件 <a class="header-anchor" href="#用scp通過代理來拷貝文件" aria-label="Permalink to “用SCP通過代理來拷貝文件”">​</a></h3><p>代理服務器經常用於辦公環境，SCP自然是沒有經過代理方面的配置的。當你的環境正在使用代理，那麼你就必須要“告訴”SCP與代理關聯起來。</p><p>場景如下：代理的地址是<strong>10.0.96.6</strong>，端口是8080。該代理還實現了用户認證功能。首先，你需要創建一個“<strong>~/.ssh/config</strong>”文件，其次把以下命令輸入進該文件。</p><pre><code>ProxyCommand /usr/bin/corkscrew 10.0.96.6 8080 %h %p ~/.ssh/proxyauth
</code></pre><p>接着你需要創建一個同樣包括以下命令的“<strong>~/.ssh/proxyauth</strong>”文件。</p><pre><code>myusername:mypassword
</code></pre><p>然後你就可以像往常一樣使用SCP了。</p><p>請注意corkscrew可能還沒有安裝在你的系統中。在我的Linux Mint中，我需要首先先用標準Linux Mint安裝程序來安裝它。</p><pre><code>$ apt-get install corkscrew
</code></pre><p>對於其它的一些基於yum安裝的系統，用户能用以下的命令來安裝corkscrew。</p><pre><code># yum install corkscrew
</code></pre><p>還有一點就是因為“<strong>~/.ssh/proxyauth</strong>”文件中以明文的格式包含了你的“<strong>用户名</strong>”和“<strong>密碼</strong>”，所以請確保該文件只能你來查看。</p><h3 id="選擇不同的ssh-config文件" tabindex="-1">選擇不同的ssh_config文件 <a class="header-anchor" href="#選擇不同的ssh-config文件" aria-label="Permalink to “選擇不同的ssh_config文件”">​</a></h3><p>對於經常在公司網絡和公共網絡之間切換的移動用户來説，一直改變SCP的設置顯然是很痛苦的。如果我們能放一個保存不同配置的<strong>ssh_config</strong>文件來匹配我們的需求那就很好了。</p><h4 id="以下是一個簡單的場景" tabindex="-1">以下是一個簡單的場景 <a class="header-anchor" href="#以下是一個簡單的場景" aria-label="Permalink to “以下是一個簡單的場景”">​</a></h4><p>代理是被用來在公司網絡但不是公共網絡並且你會定期切換網絡時候使用的。</p><pre><code>pungki@mint ~/Documents $ scp -F /home/pungki/proxy_ssh_config Label.pdf

mrarianto@202.x.x.x:.
mrarianto@202.x.x.x&#39;s password:
Label.pdf 100% 3672KB 282.5KB/s 00:13
</code></pre><p>默認情況下每個用户會把“<strong>ssh_config</strong>”文件放在“<strong>~/.ssh/config</strong>“路徑下。用兼容的代理創建一個特定的“<strong>ssh_config</strong>”文件，能讓你切換網絡時更加方便容易。</p><p>當你處於公司網絡時，你可以用“<strong>-F</strong>”參數，當你處於公共網絡時，你可以忽略掉“<strong>-F</strong>”參數。</p><p>以上就是關於<strong>SCP</strong>的全部內容了，你可以查看<strong>SCP</strong>的<strong>man頁面</strong>來獲取更多內容，請隨意留下您的評論及建議。</p><hr>`,71)),o("p",null,[n[1]||(n[1]=s("via: ",-1)),t(e,{href:"http://www.tecmint.com/scp-commands-examples/"},{default:r(()=>[...n[0]||(n[0]=[s("http://www.tecmint.com/scp-commands-examples/",-1)])]),_:1})]),o("p",null,[n[5]||(n[5]=s("作者：",-1)),t(e,{href:"http://www.tecmint.com/author/pungkiarianto/"},{default:r(()=>[...n[2]||(n[2]=[s("Pungki Arianto",-1)])]),_:1}),n[6]||(n[6]=s(" 譯者：",-1)),t(e,{href:"https://github.com/ZTinoZ"},{default:r(()=>[...n[3]||(n[3]=[s("ZTinoZ",-1)])]),_:1}),n[7]||(n[7]=s(" 校對：",-1)),t(e,{href:"https://github.com/wxy"},{default:r(()=>[...n[4]||(n[4]=[s("wxy",-1)])]),_:1})]),o("p",null,[n[10]||(n[10]=s("本文由 ",-1)),t(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[8]||(n[8]=[s("LCTT",-1)])]),_:1}),n[11]||(n[11]=s(" 原創翻譯，",-1)),t(e,{href:"http://linux.cn/"},{default:r(()=>[...n[9]||(n[9]=[s("Linux中國",-1)])]),_:1}),n[12]||(n[12]=s(" 榮譽推出",-1))])])}const k=a(c,[["render",m]]);export{S as __pageData,k as default};
