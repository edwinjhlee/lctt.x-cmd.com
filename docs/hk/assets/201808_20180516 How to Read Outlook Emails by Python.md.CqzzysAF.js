import{_ as i,a0 as t,w as o,s as r,ao as c,I as e,x as n,a1 as p,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"如何用 Python 讀取 Outlook 中的電子郵件 | LCTT x X-CMD","titleTemplate":false,"description":"如何用 Python 讀取 Outlook 中的電子郵件 | LCTT (201808) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用 Python 讀取 Outlook 中的電子郵件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用 Python 讀取 Outlook 中的電子郵件 | LCTT (201808) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201808/20180516 How to Read Outlook Emails by Python","title":"如何用 Python 讀取 Outlook 中的電子郵件","tag":"201808","desc":""},"relativePath":"201808/20180516 How to Read Outlook Emails by Python.md","filePath":"[post].md"}'),u={name:"201808/20180516 How to Read Outlook Emails by Python.md"};function d(f,s,m,h,k,g){const a=t("Link");return o(),r("div",null,[s[15]||(s[15]=c(`<h1 id="如何用-python-讀取-outlook-中的電子郵件" tabindex="-1">如何用 Python 讀取 Outlook 中的電子郵件 <a class="header-anchor" href="#如何用-python-讀取-outlook-中的電子郵件" aria-label="Permalink to “如何用 Python 讀取 Outlook 中的電子郵件”">​</a></h1><p><img src="https://process.filestackapi.com/cache=expiry:max/resize=width:700/compress/OVArLzhmRzOEQZsvGavF" alt=""></p><p>從事電子郵件營銷，<ruby>准入<rt>opt-in</rt></ruby>郵箱列表是必不可少的。你可能已經有了准入列表，同時還使用電子郵件客户端軟件。如果你能從電子郵件客户端中導出准入列表，那這份列表想必是極好的。</p><p>我使用一些代碼來將 outlook 配置中的所有郵件寫入一個臨時文件中，現在讓我來嘗試解釋一下這些代碼。</p><p>首先你需要導入 win32com.client，為此你需要安裝 pywin32：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pip install pywin32</span></span></code></pre></div><p>我們需要通過 MAPI 協議連接 Outlok：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>outlook = win32com.client.Dispatch(&quot;Outlook.Application&quot;).GetNamespace(&quot;MAPI&quot;)</span></span></code></pre></div><p>然後從 outlook 配置中獲取所有的賬户：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>accounts= win32com.client.Dispatch(&quot;Outlook.Application&quot;).Session.Accounts;</span></span></code></pre></div><p>在然後需要從名為 emaileri_al 的收件箱中獲取郵件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def emailleri_al(folder):</span></span>
<span class="line"><span>    messages = folder.Items</span></span>
<span class="line"><span>    a=len(messages)</span></span>
<span class="line"><span>    if a&gt;0:</span></span>
<span class="line"><span>        for message2 in messages:</span></span>
<span class="line"><span>             try:</span></span>
<span class="line"><span>                sender = message2.SenderEmailAddress</span></span>
<span class="line"><span>                if sender != &quot;&quot;:</span></span>
<span class="line"><span>                    print(sender, file=f)</span></span>
<span class="line"><span>             except:</span></span>
<span class="line"><span>                print(&quot;Ben hatayım&quot;)</span></span>
<span class="line"><span>                print(account.DeliveryStore.DisplayName)</span></span>
<span class="line"><span>                pass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>             try:</span></span>
<span class="line"><span>                message2.Save</span></span>
<span class="line"><span>                message2.Close(0)</span></span>
<span class="line"><span>             except:</span></span>
<span class="line"><span>                 pass</span></span></code></pre></div><p>你需要進入所有賬户的所有收件箱中獲取電子郵件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for account in accounts:</span></span>
<span class="line"><span>    global inbox</span></span>
<span class="line"><span>    inbox = outlook.Folders(account.DeliveryStore.DisplayName)</span></span>
<span class="line"><span>    print(&quot;****Account Name**********************************&quot;,file=f)</span></span>
<span class="line"><span>    print(account.DisplayName,file=f)</span></span>
<span class="line"><span>    print(account.DisplayName)</span></span>
<span class="line"><span>    print(&quot;***************************************************&quot;,file=f)</span></span>
<span class="line"><span>    folders = inbox.Folders</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for folder in folders:</span></span>
<span class="line"><span>        print(&quot;****Folder Name**********************************&quot;, file=f)</span></span>
<span class="line"><span>        print(folder, file=f)</span></span>
<span class="line"><span>        print(&quot;*************************************************&quot;, file=f)</span></span>
<span class="line"><span>        emailleri_al(folder)</span></span>
<span class="line"><span>        a = len(folder.folders)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if a&gt;0 :</span></span>
<span class="line"><span>            global z</span></span>
<span class="line"><span>            z = outlook.Folders(account.DeliveryStore.DisplayName).Folders(folder.name)</span></span>
<span class="line"><span>            x = z.Folders</span></span>
<span class="line"><span>            for y in x:</span></span>
<span class="line"><span>                emailleri_al(y)</span></span>
<span class="line"><span>                print(&quot;****Folder Name**********************************&quot;, file=f)</span></span>
<span class="line"><span>                print(&quot;...&quot;+y.name,file=f)</span></span>
<span class="line"><span>                print(&quot;*************************************************&quot;, file=</span></span></code></pre></div><p>下面是完整的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import win32com.client</span></span>
<span class="line"><span>import win32com</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>f = open(&quot;testfile.txt&quot;,&quot;w+&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>outlook = win32com.client.Dispatch(&quot;Outlook.Application&quot;).GetNamespace(&quot;MAPI&quot;)</span></span>
<span class="line"><span>accounts= win32com.client.Dispatch(&quot;Outlook.Application&quot;).Session.Accounts;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def emailleri_al(folder):</span></span>
<span class="line"><span>    messages = folder.Items</span></span>
<span class="line"><span>    a=len(messages)</span></span>
<span class="line"><span>    if a&gt;0:</span></span>
<span class="line"><span>        for message2 in messages:</span></span>
<span class="line"><span>             try:</span></span>
<span class="line"><span>                sender = message2.SenderEmailAddress</span></span>
<span class="line"><span>                if sender != &quot;&quot;:</span></span>
<span class="line"><span>                    print(sender, file=f)</span></span>
<span class="line"><span>             except:</span></span>
<span class="line"><span>                print(&quot;Error&quot;)</span></span>
<span class="line"><span>                print(account.DeliveryStore.DisplayName)</span></span>
<span class="line"><span>                pass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>             try:</span></span>
<span class="line"><span>                message2.Save</span></span>
<span class="line"><span>                message2.Close(0)</span></span>
<span class="line"><span>             except:</span></span>
<span class="line"><span>                 pass</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>for account in accounts:</span></span>
<span class="line"><span>    global inbox</span></span>
<span class="line"><span>    inbox = outlook.Folders(account.DeliveryStore.DisplayName)</span></span>
<span class="line"><span>    print(&quot;****Account Name**********************************&quot;,file=f)</span></span>
<span class="line"><span>    print(account.DisplayName,file=f)</span></span>
<span class="line"><span>    print(account.DisplayName)</span></span>
<span class="line"><span>    print(&quot;***************************************************&quot;,file=f)</span></span>
<span class="line"><span>    folders = inbox.Folders</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for folder in folders:</span></span>
<span class="line"><span>        print(&quot;****Folder Name**********************************&quot;, file=f)</span></span>
<span class="line"><span>        print(folder, file=f)</span></span>
<span class="line"><span>        print(&quot;*************************************************&quot;, file=f)</span></span>
<span class="line"><span>        emailleri_al(folder)</span></span>
<span class="line"><span>        a = len(folder.folders)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if a&gt;0 :</span></span>
<span class="line"><span>            global z</span></span>
<span class="line"><span>            z = outlook.Folders(account.DeliveryStore.DisplayName).Folders(folder.name)</span></span>
<span class="line"><span>            x = z.Folders</span></span>
<span class="line"><span>            for y in x:</span></span>
<span class="line"><span>                emailleri_al(y)</span></span>
<span class="line"><span>                print(&quot;****Folder Name**********************************&quot;, file=f)</span></span>
<span class="line"><span>                print(&quot;...&quot;+y.name,file=f)</span></span>
<span class="line"><span>                print(&quot;*************************************************&quot;, file=f)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Finished Succesfully&quot;)</span></span></code></pre></div><hr>`,17)),e("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://www.codementor.io/aliacetrefli/how-to-read-outlook-emails-by-python-jkp2ksk95"},{default:l(()=>[...s[0]||(s[0]=[n("https://www.codementor.io/aliacetrefli/how-to-read-outlook-emails-by-python-jkp2ksk95",-1)])]),_:1})]),e("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://www.codementor.io/aliacetrefli"},{default:l(()=>[...s[2]||(s[2]=[n("A.A. Cetrefli",-1)])]),_:1}),s[7]||(s[7]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 譯者：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[4]||(s[4]=[n("lujun9972",-1)])]),_:1}),s[9]||(s[9]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:l(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:l(()=>[...s[11]||(s[11]=[n("Linux中國",-1)])]),_:1}),s[14]||(s[14]=n(" 榮譽推出",-1))])])}const x=i(u,[["render",d]]);export{q as __pageData,x as default};
