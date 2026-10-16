import{_ as l,a0 as r,w as o,s as c,ao as t,I as i,x as n,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何在 RHEL 中使用订阅管理器启用软件仓库 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 RHEL 中使用订阅管理器启用软件仓库 | LCTT (201806) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 RHEL 中使用订阅管理器启用软件仓库 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 RHEL 中使用订阅管理器启用软件仓库 | LCTT (201806) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201806/20180220 How to enable repository using subscription-manager in RHEL","title":"如何在 RHEL 中使用订阅管理器启用软件仓库","tag":"201806","desc":""},"relativePath":"201806/20180220 How to enable repository using subscription-manager in RHEL.md","filePath":"[post].md"}'),d={name:"201806/20180220 How to enable repository using subscription-manager in RHEL.md"};function h(g,s,u,b,k,m){const a=r("Link");return o(),c("div",null,[s[24]||(s[24]=t(`<h1 id="如何在-rhel-中使用订阅管理器启用软件仓库" tabindex="-1">如何在 RHEL 中使用订阅管理器启用软件仓库 <a class="header-anchor" href="#如何在-rhel-中使用订阅管理器启用软件仓库" aria-label="Permalink to “如何在 RHEL 中使用订阅管理器启用软件仓库”">​</a></h1><blockquote><p>了解如何在 RHEL 中使用订阅管理器来启用软件仓库。 这篇文章还包括了将系统注册到 Red Hat 的步骤、添加订阅和发生错误时的解决方案。</p></blockquote><p><img src="https://a2.kerneltalks.com/wp-content/uploads/2018/02/enable-repository-in-rhel.png" alt="Enable repository using subscription-manager"></p><p>在本文中，我们将逐步介绍如何在刚安装的 RHEL 服务器中启用 Red Hat 软件仓库。</p><p>可以利用 <code>subscription-manager</code> 命令启用软件仓库，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # subscription-manager repos --enable rhel-6-server-rhv-4-agent-beta-debug-rpms</span></span>
<span class="line"><span>Error: &#39;rhel-6-server-rhv-4-agent-beta-debug-rpms&#39; does not match a valid repository ID. Use &quot;subscription-manager repos --list&quot; to see valid repositories.</span></span></code></pre></div><p>当您的订阅没有配置好时，您会看到上述错误。让我们一步一步地通过 <code>subscription-manager</code> 来启用软件仓库。</p><h3 id="步骤-1-使用-red-hat-注册您的系统" tabindex="-1">步骤 1：使用 Red Hat 注册您的系统 <a class="header-anchor" href="#步骤-1-使用-red-hat-注册您的系统" aria-label="Permalink to “步骤 1：使用 Red Hat 注册您的系统”">​</a></h3><p>这里假设您已经安装了新系统并且尚未在 Red Hat 上注册。如果您已经注册了该系统，那么您可以忽略此步骤。</p><p>您可以使用下面的命令来检查您的系统是否已在 Red Hat 注册了该订阅：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># subscription-manager version</span></span>
<span class="line"><span>server type: This system is currently not registered.</span></span>
<span class="line"><span>subscription management server: Unknown</span></span>
<span class="line"><span>subscription management rules: Unknown</span></span>
<span class="line"><span>subscription-manager: 1.18.10-1.el6</span></span>
<span class="line"><span>python-rhsm: 1.18.6-1.el6</span></span></code></pre></div><p>在这里输出的第一行中，您可以看到该系统未注册。那么，让我们开始注册系统。您需要在 <code>subscription-manager</code> 命令中使用 <code>register</code> 选项。在这一步需要使用您的 Red Hat 帐户凭证。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # subscription-manager register</span></span>
<span class="line"><span>Registering to: subscription.rhsm.redhat.com:443/subscription</span></span>
<span class="line"><span>Username: admin@kerneltalks.com</span></span>
<span class="line"><span>Password:</span></span>
<span class="line"><span>Network error, unable to connect to server. Please see /var/log/rhsm/rhsm.log for more information.</span></span></code></pre></div>`,13)),i("p",null,[s[1]||(s[1]=n("如果您遇到上述错误，那么表明您的服务器无法连接到 RedHat。检查您的网络连接，或者您能",-1)),e(a,{href:"https://kerneltalks.com/howto/how-to-configure-nameserver-in-linux/"},{default:p(()=>[...s[0]||(s[0]=[n("解决网站名称解析的问题",-1)])]),_:1}),s[2]||(s[2]=n("。有时候，即使你能够 ping 通订阅服务器，你也会看到这个错误。这可能是因为您的环境中有代理服务器。在这种情况下，您需要将其详细信息添加到文件 ",-1)),s[3]||(s[3]=i("code",null,"/etc/rhsm/rhsm.conf",-1)),s[4]||(s[4]=n(" 中。以下详细的代理信息应根据你的环境填充：",-1))]),s[25]||(s[25]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># an http proxy server to use</span></span>
<span class="line"><span> proxy_hostname =</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># port for http proxy server</span></span>
<span class="line"><span> proxy_port =</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># user name for authenticating to an http proxy, if needed</span></span>
<span class="line"><span> proxy_user =</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># password for basic http proxy auth, if needed</span></span>
<span class="line"><span> proxy_password =</span></span></code></pre></div><p>一旦你完成了这些，通过使用下面的命令重新检查 <code>subscription-manager</code> 是否获得了新的代理信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # subscription-manager config</span></span>
<span class="line"><span>[server]</span></span>
<span class="line"><span> hostname = [subscription.rhsm.redhat.com]</span></span>
<span class="line"><span> insecure = [0]</span></span>
<span class="line"><span> port = [443]</span></span>
<span class="line"><span> prefix = [/subscription]</span></span>
<span class="line"><span> proxy_hostname = [kerneltalksproxy.abc.com]</span></span>
<span class="line"><span> proxy_password = [asdf]</span></span>
<span class="line"><span> proxy_port = [3456]</span></span>
<span class="line"><span> proxy_user = [user2]</span></span>
<span class="line"><span> server_timeout = [180]</span></span>
<span class="line"><span> ssl_verify_depth = [3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[rhsm]</span></span>
<span class="line"><span> baseurl = [https://cdn.redhat.com]</span></span>
<span class="line"><span> ca_cert_dir = [/etc/rhsm/ca/]</span></span>
<span class="line"><span> consumercertdir = [/etc/pki/consumer]</span></span>
<span class="line"><span> entitlementcertdir = [/etc/pki/entitlement]</span></span>
<span class="line"><span> full_refresh_on_yum = [0]</span></span>
<span class="line"><span> manage_repos = [1]</span></span>
<span class="line"><span> pluginconfdir = [/etc/rhsm/pluginconf.d]</span></span>
<span class="line"><span> plugindir = [/usr/share/rhsm-plugins]</span></span>
<span class="line"><span> productcertdir = [/etc/pki/product]</span></span>
<span class="line"><span> repo_ca_cert = /etc/rhsm/ca/redhat-uep.pem</span></span>
<span class="line"><span> report_package_profile = [1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[rhsmcertd]</span></span>
<span class="line"><span> autoattachinterval = [1440]</span></span>
<span class="line"><span> certcheckinterval = [240]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[logging]</span></span>
<span class="line"><span> default_log_level = [INFO]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[] - Default value in use</span></span></code></pre></div><p>现在，请尝试重新注册您的系统。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # subscription-manager register</span></span>
<span class="line"><span>Registering to: subscription.rhsm.redhat.com:443/subscription</span></span>
<span class="line"><span>Username: admin@kerneltalks.com</span></span>
<span class="line"><span>Password:</span></span>
<span class="line"><span>You must first accept Red Hat&#39;s Terms and conditions. Please visit https://www.redhat.com/wapps/tnc/termsack?event[]=signIn . You may have to log out of and back into the Customer Portal in order to see the terms.</span></span></code></pre></div>`,5)),i("p",null,[s[6]||(s[6]=n("如果您是第一次将服务器添加到 Red Hat 帐户，您将看到上述错误。转到该 ",-1)),e(a,{href:"https://www.redhat.com/wapps/tnc/termsack?event%5B%5D=signIn"},{default:p(()=>[...s[5]||(s[5]=[n("URL",-1)])]),_:1}),s[7]||(s[7]=n("并接受条款。回到终端，然后再试一次。",-1))]),s[26]||(s[26]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>oot@kerneltalks # subscription-manager register</span></span>
<span class="line"><span>Registering to: subscription.rhsm.redhat.com:443/subscription</span></span>
<span class="line"><span>Username: admin@kerneltalks.com</span></span>
<span class="line"><span>Password:</span></span>
<span class="line"><span>The system has been registered with ID: xxxxb2-xxxx-xxxx-xxxx-xx8e199xxx</span></span></code></pre></div><p>Bingo！系统现在已在 Red Hat 上注册。你可以再次用 <code>version</code> 选项来验证它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#subscription-managerversionservertype:RedHatSubscriptionManagementsubscriptionmanagementserver:2.0.43-1subscriptionmanagementrules:5.26subscription-manager:1.18.10-1.el6python-rhsm:1.18.6-1.el6&quot; decode=&quot;true&quot;  ]root@kerneltalks # subscription-manager version</span></span>
<span class="line"><span>server type: Red Hat Subscription Management</span></span>
<span class="line"><span>subscription management server: 2.0.43-1</span></span>
<span class="line"><span>subscription management rules: 5.26</span></span>
<span class="line"><span>subscription-manager: 1.18.10-1.el6</span></span>
<span class="line"><span>python-rhsm: 1.18.6-1.el6</span></span></code></pre></div><h3 id="步骤-2-将订阅添加到您的服务器" tabindex="-1">步骤 2：将订阅添加到您的服务器 <a class="header-anchor" href="#步骤-2-将订阅添加到您的服务器" aria-label="Permalink to “步骤 2：将订阅添加到您的服务器”">​</a></h3><p>首先尝试列出软件仓库。您将无法列出任何内容，因为我们尚未在我们的服务器中添加任何订阅。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # subscription-manager repos --list</span></span>
<span class="line"><span>This system has no repositories available through subscriptions.</span></span></code></pre></div><p>正如您所看到 <code>subscription-manager</code> 找不到任何软件仓库，您需要将订阅添加到您的服务器上。一旦订阅被添加，<code>subscription-manager</code> 将能够列出下列的软件仓库。</p><p>要添加订阅，请先使用以下命令检查服务器的所有可用订阅：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # subscription-manager list --available</span></span>
<span class="line"><span>+-------------------------------------------+</span></span>
<span class="line"><span>Available Subscriptions</span></span>
<span class="line"><span>+-------------------------------------------+</span></span>
<span class="line"><span>Subscription Name: Red Hat Enterprise Linux for Virtual Datacenters, Standard</span></span>
<span class="line"><span>Provides: Red Hat Beta</span></span>
<span class="line"><span>Red Hat Software Collections (for RHEL Server)</span></span>
<span class="line"><span>Red Hat Enterprise Linux Atomic Host Beta</span></span>
<span class="line"><span>Oracle Java (for RHEL Server)</span></span>
<span class="line"><span>Red Hat Enterprise Linux Server</span></span>
<span class="line"><span>dotNET on RHEL (for RHEL Server)</span></span>
<span class="line"><span>Red Hat Enterprise Linux Atomic Host</span></span>
<span class="line"><span>Red Hat Software Collections Beta (for RHEL Server)</span></span>
<span class="line"><span>Red Hat Developer Tools Beta (for RHEL Server)</span></span>
<span class="line"><span>Red Hat Developer Toolset (for RHEL Server)</span></span>
<span class="line"><span>Red Hat Developer Tools (for RHEL Server)</span></span>
<span class="line"><span>SKU: RH00050</span></span>
<span class="line"><span>Contract: xxxxxxxx</span></span>
<span class="line"><span>Pool ID: 8a85f98c6011059f0160110a2ae6000f</span></span>
<span class="line"><span>Provides Management: Yes</span></span>
<span class="line"><span>Available: Unlimited</span></span>
<span class="line"><span>Suggested: 0</span></span>
<span class="line"><span>Service Level: Standard</span></span>
<span class="line"><span>Service Type: L1-L3</span></span>
<span class="line"><span>Subscription Type: Stackable (Temporary)</span></span>
<span class="line"><span>Ends: 12/01/2018</span></span>
<span class="line"><span>System Type: Virtual</span></span></code></pre></div><p>您将获得可用于您的服务器的此类订阅的软件仓库列表。您需要阅读它提供的内容并记下对您有用或需要的订阅的 <code>Pool ID</code>。</p><p>现在，使用 pool ID 将订阅添加到您的服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># subscription-manager attach --pool=8a85f98c6011059f0160110a2ae6000f</span></span>
<span class="line"><span>Successfully attached a subscription for: Red Hat Enterprise Linux for Virtual Datacenters, Standard</span></span></code></pre></div><p>如果您不确定选择哪一个，则可以使用下面的命令自动地添加最适合您的服务器的订阅：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # subscription-manager attach --auto</span></span>
<span class="line"><span>Installed Product Current Status:</span></span>
<span class="line"><span>Product Name: Red Hat Enterprise Linux Server</span></span>
<span class="line"><span>Status: Subscribed</span></span></code></pre></div><p>接下来是最后一步启用软件仓库。</p><h3 id="步骤-3-启用软件仓库" tabindex="-1">步骤 3：启用软件仓库 <a class="header-anchor" href="#步骤-3-启用软件仓库" aria-label="Permalink to “步骤 3：启用软件仓库”">​</a></h3><p>现在您将能够启用软件仓库，该软件仓库在您的附加订阅下可用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>root@kerneltalks # subscription-manager repos --enable rhel-6-server-rhv-4-agent-beta-debug-rpms</span></span>
<span class="line"><span>Repository &#39;rhel-6-server-rhv-4-agent-beta-debug-rpms&#39; is enabled for this system.</span></span></code></pre></div>`,18)),i("p",null,[s[9]||(s[9]=n("到这里，您已经完成了。您可以",-1)),e(a,{href:"https://kerneltalks.com/howto/how-to-list-yum-repositories-in-rhel-centos/"},{default:p(()=>[...s[8]||(s[8]=[n("用 yum 命令列出软件仓库",-1)])]),_:1}),s[10]||(s[10]=n("并确认。",-1))]),s[27]||(s[27]=i("hr",null,null,-1)),i("p",null,[s[12]||(s[12]=n("via: ",-1)),e(a,{href:"https://kerneltalks.com/howto/how-to-enable-repository-using-subscription-manager-in-rhel/"},{default:p(()=>[...s[11]||(s[11]=[n("https://kerneltalks.com/howto/how-to-enable-repository-using-subscription-manager-in-rhel/",-1)])]),_:1})]),i("p",null,[s[16]||(s[16]=n("作者：",-1)),e(a,{href:"https://kerneltalks.com"},{default:p(()=>[...s[13]||(s[13]=[n("kerneltalks",-1)])]),_:1}),s[17]||(s[17]=n(" 译者：",-1)),e(a,{href:"https://github.com/S9mtAt"},{default:p(()=>[...s[14]||(s[14]=[n("S9mtAt",-1)])]),_:1}),s[18]||(s[18]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[15]||(s[15]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[21]||(s[21]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[19]||(s[19]=[n("LCTT",-1)])]),_:1}),s[22]||(s[22]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[20]||(s[20]=[n("Linux中国",-1)])]),_:1}),s[23]||(s[23]=n(" 荣誉推出",-1))])])}const x=l(d,[["render",h]]);export{y as __pageData,x as default};
