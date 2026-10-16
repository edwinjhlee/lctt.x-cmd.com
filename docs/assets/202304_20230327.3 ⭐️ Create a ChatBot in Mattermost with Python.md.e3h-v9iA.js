import{_ as l,a0 as r,w as o,s as i,I as n,x as a,a1 as e,A as p,ao as m}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"使用 Python 在 Mattermost 中创建 ChatOps 聊天机器人 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 在 Mattermost 中创建 ChatOps 聊天机器人 | LCTT (202304) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 在 Mattermost 中创建 ChatOps 聊天机器人 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 在 Mattermost 中创建 ChatOps 聊天机器人 | LCTT (202304) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202304/20230327.3 ⭐️ Create a ChatBot in Mattermost with Python","title":"使用 Python 在 Mattermost 中创建 ChatOps 聊天机器人","tag":"202304","desc":""},"relativePath":"202304/20230327.3 ⭐️ Create a ChatBot in Mattermost with Python.md","filePath":"[post].md"}'),h={name:"202304/20230327.3 ⭐️ Create a ChatBot in Mattermost with Python.md"};function d(u,s,g,c,b,f){const t=r("Link");return o(),i("div",null,[s[25]||(s[25]=n("h1",{id:"使用-python-在-mattermost-中创建-chatops-聊天机器人",tabindex:"-1"},[a("使用 Python 在 Mattermost 中创建 ChatOps 聊天机器人 "),n("a",{class:"header-anchor",href:"#使用-python-在-mattermost-中创建-chatops-聊天机器人","aria-label":"Permalink to “使用 Python 在 Mattermost 中创建 ChatOps 聊天机器人”"},"​")],-1)),s[26]||(s[26]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202304/05/092837ab3y8zft3hhv02hr.jpg",alt:""})],-1)),s[27]||(s[27]=n("blockquote",null,[n("p",null,"用一个简单的开源机器人在你的组织中实施 ChatOps。")],-1)),n("p",null,[s[2]||(s[2]=a("ChatOps 是一种协作模型，它将人员、流程、工具和自动化连接到一个透明的工作流中。",-1)),e(t,{href:"https://mattermost.com/"},{default:p(()=>[...s[0]||(s[0]=[a("Mattermost",-1)])]),_:1}),s[3]||(s[3]=a(" 是一个开源、自托管的消息平台，使组织能够安全、有效和高效地进行通信。它是 Slack、Discord 和其他专有消息平台的绝佳 ",-1)),e(t,{href:"https://opensource.com/alternatives/slack"},{default:p(()=>[...s[1]||(s[1]=[a("开源替代品",-1)])]),_:1}),s[4]||(s[4]=a("。本文概述了在 Mattermost 上创建 ChatOps 机器人的步骤，包括必要的代码示例和解释。",-1))]),s[28]||(s[28]=n("h3",{id:"先决条件",tabindex:"-1"},[a("先决条件 "),n("a",{class:"header-anchor",href:"#先决条件","aria-label":"Permalink to “先决条件”"},"​")],-1)),n("p",null,[s[7]||(s[7]=a("在开始之前，请确保你可以访问 Mattermost 服务器，",-1)),e(t,{href:"https://opensource.com/article/17/10/python-101"},{default:p(()=>[...s[5]||(s[5]=[a("安装 Python",-1)])]),_:1}),s[8]||(s[8]=a("，并 ",-1)),e(t,{href:"https://opensource.com/article/20/3/pip-linux-mac-windows"},{default:p(()=>[...s[6]||(s[6]=[a("使用 pip",-1)])]),_:1}),s[9]||(s[9]=a(" 安装 Mattermost Python 驱动。",-1))]),s[29]||(s[29]=m(`<h3 id="在-mattermost-上创建一个机器人帐户" tabindex="-1">在 Mattermost 上创建一个机器人帐户 <a class="header-anchor" href="#在-mattermost-上创建一个机器人帐户" aria-label="Permalink to “在 Mattermost 上创建一个机器人帐户”">​</a></h3><p>要创建机器人帐户，请访问 Mattermost 系统控制台，并添加具有适当访问权限的机器人帐户。获取机器人的用户名和密码以在 Python 脚本中使用。</p><h3 id="设置-mattermost-python-驱动" tabindex="-1">设置 Mattermost Python 驱动 <a class="header-anchor" href="#设置-mattermost-python-驱动" aria-label="Permalink to “设置 Mattermost Python 驱动”">​</a></h3><p>使用 <code>pip</code> 安装 Mattermost Python 驱动，并将其导入 Python 脚本。创建一个新的驱动实例并登录到 Mattermost 服务器。</p><h3 id="在-python-中创建-chatops-机器人" tabindex="-1">在 Python 中创建 ChatOps 机器人 <a class="header-anchor" href="#在-python-中创建-chatops-机器人" aria-label="Permalink to “在 Python 中创建 ChatOps 机器人”">​</a></h3><p>创建一个新的 Python 脚本，定义要导入的必要库，并使用 Mattermost 驱动的 API 实现机器人的功能。编写代码来处理消息、命令和其他事件，并使用 Mattermost 驱动的 API 方法向通道和用户发送消息和通知。最后，调试和测试 ChatOps 机器人。</p><h3 id="chatops-机器人代码示例" tabindex="-1">ChatOps 机器人代码示例 <a class="header-anchor" href="#chatops-机器人代码示例" aria-label="Permalink to “ChatOps 机器人代码示例”">​</a></h3><p>以下是响应用户消息的简单 ChatOps 机器人的示例 Python 代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from mattermostdriver import Driver</span></span>
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
<span class="line"><span>    main()</span></span></code></pre></div><h3 id="添加功能" tabindex="-1">添加功能 <a class="header-anchor" href="#添加功能" aria-label="Permalink to “添加功能”">​</a></h3><p>在 Mattermost 上创建基本的 ChatOps 机器人后，你可以添加更多功能来扩展其功能。以下是步骤：</p><ul><li><strong>确定要添加的功能</strong>：在编写代码之前，你必须确定要添加到 ChatOps 机器人的功能。可以是从发送通知到与第三方工具集成的任何事情。</li><li><strong>编写代码</strong>：确定要添加的功能后，就可以开始编写代码了。代码将取决于添加的功能，但你可以使用 Mattermost Python 驱动与 Mattermost API 交互并实现该功能。</li><li><strong>测试代码</strong>：编写代码后，重要的是对其进行测试以确保其按预期工作。在将其部署到生产服务器之前，你可以在开发服务器或测试通道中测试代码。</li><li><strong>部署代码</strong>：当你对其进行了测试并且它按预期工作，你就可以将其部署到你的生产服务器。遵循你组织的部署流程并确保新代码不会破坏任何现有功能。</li><li><strong>记录新功能</strong>：记录你添加到 ChatOps 机器人的新功能非常重要。这将使其他团队成员更容易使用该机器人并了解其功能。</li></ul><p>一个 ChatOps Bot 功能示例是与第三方工具集成并提供某些任务的状态更新。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from mattermostdriver import Driver</span></span>
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
<span class="line"><span>    main()</span></span></code></pre></div><p>在此示例中，ChatOps 机器人监听命令 <code>status</code> 并向第三方工具 API 发出请求以获取当前状态。然后它会在发出命令的 Mattermost 频道中发布状态更新。这使团队成员无需离开聊天平台即可快速获取任务状态的更新。</p><h3 id="开源-chatops" tabindex="-1">开源 ChatOps <a class="header-anchor" href="#开源-chatops" aria-label="Permalink to “开源 ChatOps”">​</a></h3><p>总之，在 Mattermost 上创建 ChatOps 机器人是一个简单的过程，可以为你组织的沟通和工作流程带来许多好处。本文提供了分步分解和代码示例，可帮助你开始创建你的机器人，甚至可以通过添加新功能对其进行自定义。现在你了解了基础知识，你可以进一步探索 ChatOps 和 Mattermost 以优化团队的协作和生产力。</p><hr>`,18)),n("p",null,[s[11]||(s[11]=a("via: ",-1)),e(t,{href:"https://opensource.com/article/23/3/chatbot-mattermost-python"},{default:p(()=>[...s[10]||(s[10]=[a("https://opensource.com/article/23/3/chatbot-mattermost-python",-1)])]),_:1})]),n("p",null,[s[16]||(s[16]=a("作者：",-1)),e(t,{href:"https://opensource.com/users/drmjg"},{default:p(()=>[...s[12]||(s[12]=[a("Dr. Michael J. Garbade",-1)])]),_:1}),s[17]||(s[17]=a(" 选题：",-1)),e(t,{href:"https://github.com/lkxed/"},{default:p(()=>[...s[13]||(s[13]=[a("lkxed",-1)])]),_:1}),s[18]||(s[18]=a(" 译者：",-1)),e(t,{href:"https://github.com/geekpi"},{default:p(()=>[...s[14]||(s[14]=[a("geekpi",-1)])]),_:1}),s[19]||(s[19]=a(" 校对：",-1)),e(t,{href:"https://github.com/wxy"},{default:p(()=>[...s[15]||(s[15]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[22]||(s[22]=a("本文由 ",-1)),e(t,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[20]||(s[20]=[a("LCTT",-1)])]),_:1}),s[23]||(s[23]=a(" 原创编译，",-1)),e(t,{href:"https://linux.cn/"},{default:p(()=>[...s[21]||(s[21]=[a("Linux中国",-1)])]),_:1}),s[24]||(s[24]=a(" 荣誉推出",-1))])])}const k=l(h,[["render",d]]);export{y as __pageData,k as default};
