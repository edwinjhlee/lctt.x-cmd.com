import{_ as l,a0 as r,w as o,s as i,I as n,x as a,a1 as e,A as p,ao as m}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"使用 Python 在 Mattermost 中創建 ChatOps 聊天機器人 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 在 Mattermost 中創建 ChatOps 聊天機器人 | LCTT (202304) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 在 Mattermost 中創建 ChatOps 聊天機器人 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 在 Mattermost 中創建 ChatOps 聊天機器人 | LCTT (202304) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202304/20230327.3 ⭐️ Create a ChatBot in Mattermost with Python","title":"使用 Python 在 Mattermost 中創建 ChatOps 聊天機器人","tag":"202304","desc":""},"relativePath":"202304/20230327.3 ⭐️ Create a ChatBot in Mattermost with Python.md","filePath":"[post].md"}'),h={name:"202304/20230327.3 ⭐️ Create a ChatBot in Mattermost with Python.md"};function d(u,s,g,c,b,f){const t=r("Link");return o(),i("div",null,[s[25]||(s[25]=n("h1",{id:"使用-python-在-mattermost-中創建-chatops-聊天機器人",tabindex:"-1"},[a("使用 Python 在 Mattermost 中創建 ChatOps 聊天機器人 "),n("a",{class:"header-anchor",href:"#使用-python-在-mattermost-中創建-chatops-聊天機器人","aria-label":"Permalink to “使用 Python 在 Mattermost 中創建 ChatOps 聊天機器人”"},"​")],-1)),s[26]||(s[26]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202304/05/092837ab3y8zft3hhv02hr.jpg",alt:""})],-1)),s[27]||(s[27]=n("blockquote",null,[n("p",null,"用一個簡單的開源機器人在你的組織中實施 ChatOps。")],-1)),n("p",null,[s[2]||(s[2]=a("ChatOps 是一種協作模型，它將人員、流程、工具和自動化連接到一個透明的工作流中。",-1)),e(t,{href:"https://mattermost.com/"},{default:p(()=>[...s[0]||(s[0]=[a("Mattermost",-1)])]),_:1}),s[3]||(s[3]=a(" 是一個開源、自託管的消息平台，使組織能夠安全、有效和高效地進行通信。它是 Slack、Discord 和其他專有消息平台的絕佳 ",-1)),e(t,{href:"https://opensource.com/alternatives/slack"},{default:p(()=>[...s[1]||(s[1]=[a("開源替代品",-1)])]),_:1}),s[4]||(s[4]=a("。本文概述了在 Mattermost 上創建 ChatOps 機器人的步驟，包括必要的代碼示例和解釋。",-1))]),s[28]||(s[28]=n("h3",{id:"先決條件",tabindex:"-1"},[a("先決條件 "),n("a",{class:"header-anchor",href:"#先決條件","aria-label":"Permalink to “先決條件”"},"​")],-1)),n("p",null,[s[7]||(s[7]=a("在開始之前，請確保你可以訪問 Mattermost 服務器，",-1)),e(t,{href:"https://opensource.com/article/17/10/python-101"},{default:p(()=>[...s[5]||(s[5]=[a("安裝 Python",-1)])]),_:1}),s[8]||(s[8]=a("，並 ",-1)),e(t,{href:"https://opensource.com/article/20/3/pip-linux-mac-windows"},{default:p(()=>[...s[6]||(s[6]=[a("使用 pip",-1)])]),_:1}),s[9]||(s[9]=a(" 安裝 Mattermost Python 驅動。",-1))]),s[29]||(s[29]=m(`<h3 id="在-mattermost-上創建一個機器人帳户" tabindex="-1">在 Mattermost 上創建一個機器人帳户 <a class="header-anchor" href="#在-mattermost-上創建一個機器人帳户" aria-label="Permalink to “在 Mattermost 上創建一個機器人帳户”">​</a></h3><p>要創建機器人帳户，請訪問 Mattermost 系統控制台，並添加具有適當訪問權限的機器人帳户。獲取機器人的用户名和密碼以在 Python 腳本中使用。</p><h3 id="設置-mattermost-python-驅動" tabindex="-1">設置 Mattermost Python 驅動 <a class="header-anchor" href="#設置-mattermost-python-驅動" aria-label="Permalink to “設置 Mattermost Python 驅動”">​</a></h3><p>使用 <code>pip</code> 安裝 Mattermost Python 驅動，並將其導入 Python 腳本。創建一個新的驅動實例並登錄到 Mattermost 服務器。</p><h3 id="在-python-中創建-chatops-機器人" tabindex="-1">在 Python 中創建 ChatOps 機器人 <a class="header-anchor" href="#在-python-中創建-chatops-機器人" aria-label="Permalink to “在 Python 中創建 ChatOps 機器人”">​</a></h3><p>創建一個新的 Python 腳本，定義要導入的必要庫，並使用 Mattermost 驅動的 API 實現機器人的功能。編寫代碼來處理消息、命令和其他事件，並使用 Mattermost 驅動的 API 方法向通道和用户發送消息和通知。最後，調試和測試 ChatOps 機器人。</p><h3 id="chatops-機器人代碼示例" tabindex="-1">ChatOps 機器人代碼示例 <a class="header-anchor" href="#chatops-機器人代碼示例" aria-label="Permalink to “ChatOps 機器人代碼示例”">​</a></h3><p>以下是響應用户消息的簡單 ChatOps 機器人的示例 Python 代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from mattermostdriver import Driver</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bot_username = &#39;bot_username&#39;</span></span>
<span class="line"><span>bot_password = &#39;bot_password&#39;</span></span>
<span class="line"><span>server_url = &#39;https://your.mattermost.server.url&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    driver = Driver({&#39;url&#39;: server_url, &#39;login_id&#39;: bot_username, &#39;password&#39;: bot_password, &#39;scheme&#39;: &#39;https&#39;})</span></span>
<span class="line"><span>    driver.login()</span></span>
<span class="line"><span>    team = driver.teams.get_team_by_name(&#39;team_name&#39;)</span></span>
<span class="line"><span>    channel = driver.channels.get_channel_by_name(team[&#39;id&#39;], &#39;channel_name&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @driver.on(&#39;message&#39;)</span></span>
<span class="line"><span>    def handle_message(post, **kwargs):</span></span>
<span class="line"><span>        if post[&#39;message&#39;] == &#39;hello&#39;:</span></span>
<span class="line"><span>            driver.posts.create_post({</span></span>
<span class="line"><span>                &#39;channel_id&#39;: post[&#39;channel_id&#39;],</span></span>
<span class="line"><span>                &#39;message&#39;: &#39;Hi there!&#39;</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    driver.init_websocket()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div><h3 id="添加功能" tabindex="-1">添加功能 <a class="header-anchor" href="#添加功能" aria-label="Permalink to “添加功能”">​</a></h3><p>在 Mattermost 上創建基本的 ChatOps 機器人後，你可以添加更多功能來擴展其功能。以下是步驟：</p><ul><li><strong>確定要添加的功能</strong>：在編寫代碼之前，你必須確定要添加到 ChatOps 機器人的功能。可以是從發送通知到與第三方工具集成的任何事情。</li><li><strong>編寫代碼</strong>：確定要添加的功能後，就可以開始編寫代碼了。代碼將取決於添加的功能，但你可以使用 Mattermost Python 驅動與 Mattermost API 交互並實現該功能。</li><li><strong>測試代碼</strong>：編寫代碼後，重要的是對其進行測試以確保其按預期工作。在將其部署到生產服務器之前，你可以在開發服務器或測試通道中測試代碼。</li><li><strong>部署代碼</strong>：當你對其進行了測試並且它按預期工作，你就可以將其部署到你的生產服務器。遵循你組織的部署流程並確保新代碼不會破壞任何現有功能。</li><li><strong>記錄新功能</strong>：記錄你添加到 ChatOps 機器人的新功能非常重要。這將使其他團隊成員更容易使用該機器人並瞭解其功能。</li></ul><p>一個 ChatOps Bot 功能示例是與第三方工具集成並提供某些任務的狀態更新。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from mattermostdriver import Driver</span></span>
<span class="line"><span>import requests</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bot_username = &#39;bot_username&#39;</span></span>
<span class="line"><span>bot_password = &#39;bot_password&#39;</span></span>
<span class="line"><span>server_url = &#39;https://your.mattermost.server.url&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    driver = Driver({&#39;url&#39;: server_url, &#39;login_id&#39;: bot_username, &#39;password&#39;: bot_password, &#39;scheme&#39;: &#39;https&#39;})</span></span>
<span class="line"><span>    driver.login()</span></span>
<span class="line"><span>    team = driver.teams.get_team_by_name(&#39;team_name&#39;)</span></span>
<span class="line"><span>    channel = driver.channels.get_channel_by_name(team[&#39;id&#39;], &#39;channel_name&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @driver.on(&#39;message&#39;)</span></span>
<span class="line"><span>    def handle_message(post, **kwargs):</span></span>
<span class="line"><span>        if post[&#39;message&#39;] == &#39;status&#39;:</span></span>
<span class="line"><span>            # Make a request to the third-party tool API to get the status</span></span>
<span class="line"><span>            response = requests.get(&#39;https://api.thirdpartytool.com/status&#39;)</span></span>
<span class="line"><span>            if response.status_code == 200:</span></span>
<span class="line"><span>                status = response.json()[&#39;status&#39;]</span></span>
<span class="line"><span>                driver.posts.create_post({</span></span>
<span class="line"><span>                    &#39;channel_id&#39;: post[&#39;channel_id&#39;],</span></span>
<span class="line"><span>                    &#39;message&#39;: f&#39;The status is {status}&#39;</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                driver.posts.create_post({</span></span>
<span class="line"><span>                    &#39;channel_id&#39;: post[&#39;channel_id&#39;],</span></span>
<span class="line"><span>                    &#39;message&#39;: &#39;Failed to get status&#39;</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    driver.init_websocket()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    main()</span></span></code></pre></div><p>在此示例中，ChatOps 機器人監聽命令 <code>status</code> 並向第三方工具 API 發出請求以獲取當前狀態。然後它會在發出命令的 Mattermost 頻道中發佈狀態更新。這使團隊成員無需離開聊天平台即可快速獲取任務狀態的更新。</p><h3 id="開源-chatops" tabindex="-1">開源 ChatOps <a class="header-anchor" href="#開源-chatops" aria-label="Permalink to “開源 ChatOps”">​</a></h3><p>總之，在 Mattermost 上創建 ChatOps 機器人是一個簡單的過程，可以為你組織的溝通和工作流程帶來許多好處。本文提供了分步分解和代碼示例，可幫助你開始創建你的機器人，甚至可以通過添加新功能對其進行自定義。現在你瞭解了基礎知識，你可以進一步探索 ChatOps 和 Mattermost 以優化團隊的協作和生產力。</p><hr>`,18)),n("p",null,[s[11]||(s[11]=a("via: ",-1)),e(t,{href:"https://opensource.com/article/23/3/chatbot-mattermost-python"},{default:p(()=>[...s[10]||(s[10]=[a("https://opensource.com/article/23/3/chatbot-mattermost-python",-1)])]),_:1})]),n("p",null,[s[16]||(s[16]=a("作者：",-1)),e(t,{href:"https://opensource.com/users/drmjg"},{default:p(()=>[...s[12]||(s[12]=[a("Dr. Michael J. Garbade",-1)])]),_:1}),s[17]||(s[17]=a(" 選題：",-1)),e(t,{href:"https://github.com/lkxed/"},{default:p(()=>[...s[13]||(s[13]=[a("lkxed",-1)])]),_:1}),s[18]||(s[18]=a(" 譯者：",-1)),e(t,{href:"https://github.com/geekpi"},{default:p(()=>[...s[14]||(s[14]=[a("geekpi",-1)])]),_:1}),s[19]||(s[19]=a(" 校對：",-1)),e(t,{href:"https://github.com/wxy"},{default:p(()=>[...s[15]||(s[15]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[22]||(s[22]=a("本文由 ",-1)),e(t,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[20]||(s[20]=[a("LCTT",-1)])]),_:1}),s[23]||(s[23]=a(" 原創編譯，",-1)),e(t,{href:"https://linux.cn/"},{default:p(()=>[...s[21]||(s[21]=[a("Linux中國",-1)])]),_:1}),s[24]||(s[24]=a(" 榮譽推出",-1))])])}const k=l(h,[["render",d]]);export{y as __pageData,k as default};
