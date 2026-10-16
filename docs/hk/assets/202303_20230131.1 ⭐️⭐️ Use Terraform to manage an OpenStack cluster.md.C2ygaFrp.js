import{_ as i,a0 as o,w as r,s as Z,I as a,x as n,a1 as e,A as t,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"使用 Terraform 來管理 OpenStack 集羣 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Terraform 來管理 OpenStack 集羣 | LCTT (202303) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Terraform 來管理 OpenStack 集羣 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Terraform 來管理 OpenStack 集羣 | LCTT (202303) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202303/20230131.1 ⭐️⭐️ Use Terraform to manage an OpenStack cluster","title":"使用 Terraform 來管理 OpenStack 集羣","tag":"202303","desc":""},"relativePath":"202303/20230131.1 ⭐️⭐️ Use Terraform to manage an OpenStack cluster.md","filePath":"[post].md"}'),u={name:"202303/20230131.1 ⭐️⭐️ Use Terraform to manage an OpenStack cluster.md"};function c(d,s,k,m,q,g){const p=o("Link");return r(),Z("div",null,[s[32]||(s[32]=a("h1",{id:"使用-terraform-來管理-openstack-集羣",tabindex:"-1"},[n("使用 Terraform 來管理 OpenStack 集羣 "),a("a",{class:"header-anchor",href:"#使用-terraform-來管理-openstack-集羣","aria-label":"Permalink to “使用 Terraform 來管理 OpenStack 集羣”"},"​")],-1)),s[33]||(s[33]=a("blockquote",null,[a("p",null,"Terraform 是一種聲明性語言，可以作為你正在建設的基礎設施的藍圖。")],-1)),s[34]||(s[34]=a("p",null,"在擁有一個 OpenStack 生產環境和家庭實驗室一段時間後，我可以肯定地説，從管理員和租户的角度置備工作負載和管理它是很重要的。",-1)),a("p",null,[s[1]||(s[1]=n("Terraform 是一個開源的基礎設施即代碼（IaC）軟件工具，用於 ",-1)),s[2]||(s[2]=a("ruby",null,[n("置備"),a("rt",null,"provisioning")],-1)),s[3]||(s[3]=n("網絡、服務器、雲平台等。Terraform 是一種聲明性語言，可以作為你正在建設的基礎設施的藍圖。你可以用 Git 來管理它，它有一個強大的 ",-1)),e(p,{href:"https://opensource.com/article/21/3/gitops"},{default:t(()=>[...s[0]||(s[0]=[n("GitOps",-1)])]),_:1}),s[4]||(s[4]=n(" 使用場景。",-1))]),s[35]||(s[35]=l('<p>本文介紹了使用 Terraform 管理 OpenStack 集羣的基礎知識。我使用 Terraform 重新創建了 OpenStack 演示項目。</p><h3 id="安裝-terraform" tabindex="-1">安裝 Terraform <a class="header-anchor" href="#安裝-terraform" aria-label="Permalink to “安裝 Terraform”">​</a></h3><p>我使用 CentOS 作為跳板機運行 Terraform。根據官方文檔，第一步是添加 Hashicorp 倉庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo</span></span></code></pre></div><p>接下來，安裝 Terraform：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install terraform -y</span></span></code></pre></div><p>驗證安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ terraform –version</span></span></code></pre></div><p>如果你看到返回的版本號，那麼你已經安裝了 Terraform。</p><h3 id="為-openstack-提供者創建一個-terraform-腳本" tabindex="-1">為 OpenStack 提供者創建一個 Terraform 腳本 <a class="header-anchor" href="#為-openstack-提供者創建一個-terraform-腳本" aria-label="Permalink to “為 OpenStack 提供者創建一個 Terraform 腳本”">​</a></h3><p>在 Terraform 中，你需要一個 <ruby>提供者<rt>provider</rt></ruby>，它是一個轉換器，Terraform 調用它將你的 <code>.tf</code> 轉換為對你正在協調的平台的 API 調用。</p><p>有三種類型的提供者：官方、合作伙伴和社區：</p><ul><li>官方提供者由 Hashicorp 維護。</li><li>合作伙伴提供者由與 Hashicorp 合作的技術公司維護。</li><li>社區提供者是由開源社區成員維護的。</li></ul>',13)),a("p",null,[s[6]||(s[6]=n("在這個 ",-1)),e(p,{href:"https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.49.0"},{default:t(()=>[...s[5]||(s[5]=[n("鏈接",-1)])]),_:1}),s[7]||(s[7]=n(" 中有一個很好的 OpenStack 的社區提供者。要使用這個提供者，請創建一個 ",-1)),s[8]||(s[8]=a("code",null,".tf",-1)),s[9]||(s[9]=n(" 文件，並命名為 ",-1)),s[10]||(s[10]=a("code",null,"main.tf",-1)),s[11]||(s[11]=n("。",-1))]),s[36]||(s[36]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vi main.tf</span></span></code></pre></div><p>在 <code>main.tf</code> 中添加以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>terraform {</span></span>
<span class="line"><span>  required_version = &quot;&gt;= 0.14.0&quot;</span></span>
<span class="line"><span>  required_providers {</span></span>
<span class="line"><span>    openstack = {</span></span>
<span class="line"><span>      source  = &quot;terraform-provider-openstack/openstack&quot;</span></span>
<span class="line"><span>      version = &quot;1.49.0&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>provider &quot;openstack&quot; {</span></span>
<span class="line"><span>  user_name   = “OS_USERNAME”</span></span>
<span class="line"><span>  tenant_name = “OS_TENANT”</span></span>
<span class="line"><span>  password    = “OS_PASSWORD”</span></span>
<span class="line"><span>  auth_url    = “OS_AUTH_URL”</span></span>
<span class="line"><span>  region      = “OS_REGION”</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你需要修改 <code>OS_USERNAME</code>、<code>OS_TENANT</code>、<code>OS_PASSWORD</code>、<code>OS_AUTH_URL</code> 和 <code>OS_REGION</code> 變量才能工作。</p><h3 id="創建一個-terraform-管理文件" tabindex="-1">創建一個 Terraform 管理文件 <a class="header-anchor" href="#創建一個-terraform-管理文件" aria-label="Permalink to “創建一個 Terraform 管理文件”">​</a></h3><p>OpenStack 管理文件的重點是置備外部網絡、路由、用户、鏡像、租户配置文件和配額。</p><p>此示例提供風格，連接到外部網絡的路由、測試鏡像、租户配置文件和用户。</p><p>首先，為置備資源創建一個 <code>AdminTF</code> 目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir AdminTF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ cd AdminTF</span></span></code></pre></div><p>在 <code>main.tf</code> 中，添加以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>terraform {</span></span>
<span class="line"><span>  required_version = &quot;&gt;= 0.14.0&quot;</span></span>
<span class="line"><span>  required_providers {</span></span>
<span class="line"><span>    openstack = {</span></span>
<span class="line"><span>      source  = &quot;terraform-provider-openstack/openstack&quot;</span></span>
<span class="line"><span>      version = &quot;1.49.0&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>provider &quot;openstack&quot; {</span></span>
<span class="line"><span>  user_name   = “OS_USERNAME”</span></span>
<span class="line"><span>  tenant_name = “admin”</span></span>
<span class="line"><span>  password    = “OS_PASSWORD”</span></span>
<span class="line"><span>  auth_url    = “OS_AUTH_URL”</span></span>
<span class="line"><span>  region      = “OS_REGION”</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_compute_flavor_v2&quot; &quot;small-flavor&quot; {</span></span>
<span class="line"><span>  name      = &quot;small&quot;</span></span>
<span class="line"><span>  ram       = &quot;4096&quot;</span></span>
<span class="line"><span>  vcpus     = &quot;1&quot;</span></span>
<span class="line"><span>  disk      = &quot;0&quot;</span></span>
<span class="line"><span>  flavor_id = &quot;1&quot;</span></span>
<span class="line"><span>  is_public = &quot;true&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_compute_flavor_v2&quot; &quot;medium-flavor&quot; {</span></span>
<span class="line"><span>  name      = &quot;medium&quot;</span></span>
<span class="line"><span>  ram       = &quot;8192&quot;</span></span>
<span class="line"><span>  vcpus     = &quot;2&quot;</span></span>
<span class="line"><span>  disk      = &quot;0&quot;</span></span>
<span class="line"><span>  flavor_id = &quot;2&quot;</span></span>
<span class="line"><span>  is_public = &quot;true&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_compute_flavor_v2&quot; &quot;large-flavor&quot; {</span></span>
<span class="line"><span>  name      = &quot;large&quot;</span></span>
<span class="line"><span>  ram       = &quot;16384&quot;</span></span>
<span class="line"><span>  vcpus     = &quot;4&quot;</span></span>
<span class="line"><span>  disk      = &quot;0&quot;</span></span>
<span class="line"><span>  flavor_id = &quot;3&quot;</span></span>
<span class="line"><span>  is_public = &quot;true&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_compute_flavor_v2&quot; &quot;xlarge-flavor&quot; {</span></span>
<span class="line"><span>  name      = &quot;xlarge&quot;</span></span>
<span class="line"><span>  ram       = &quot;32768&quot;</span></span>
<span class="line"><span>  vcpus     = &quot;8&quot;</span></span>
<span class="line"><span>  disk      = &quot;0&quot;</span></span>
<span class="line"><span>  flavor_id = &quot;4&quot;</span></span>
<span class="line"><span>  is_public = &quot;true&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_networking_network_v2&quot; &quot;external-network&quot; {</span></span>
<span class="line"><span>  name           = &quot;external-network&quot;</span></span>
<span class="line"><span>  admin_state_up = &quot;true&quot;</span></span>
<span class="line"><span>  external       = &quot;true&quot;</span></span>
<span class="line"><span>  segments {</span></span>
<span class="line"><span>    network_type     = &quot;flat&quot;</span></span>
<span class="line"><span>    physical_network = &quot;physnet1&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_networking_subnet_v2&quot; &quot;external-subnet&quot; {</span></span>
<span class="line"><span>  name            = &quot;external-subnet&quot;</span></span>
<span class="line"><span>  network_id      = openstack_networking_network_v2.external-network.id</span></span>
<span class="line"><span>  cidr            = &quot;10.0.0.0/8&quot;</span></span>
<span class="line"><span>  gateway_ip      = &quot;10.0.0.1&quot;</span></span>
<span class="line"><span>  dns_nameservers = [&quot;10.0.0.254&quot;, &quot;10.0.0.253&quot;]</span></span>
<span class="line"><span>  allocation_pool {</span></span>
<span class="line"><span>    start = &quot;10.0.0.1&quot;</span></span>
<span class="line"><span>    end   = &quot;10.0.254.254&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_networking_router_v2&quot; &quot;external-router&quot; {</span></span>
<span class="line"><span>  name                = &quot;external-router&quot;</span></span>
<span class="line"><span>  admin_state_up      = true</span></span>
<span class="line"><span>  external_network_id = openstack_networking_network_v2.external-network.id</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_images_image_v2&quot; &quot;cirros&quot; {</span></span>
<span class="line"><span>  name             = &quot;cirros&quot;</span></span>
<span class="line"><span>  image_source_url = &quot;https://download.cirros-cloud.net/0.6.1/cirros-0.6.1-x86_64-disk.img&quot;</span></span>
<span class="line"><span>  container_format = &quot;bare&quot;</span></span>
<span class="line"><span>  disk_format      = &quot;qcow2&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  properties = {</span></span>
<span class="line"><span>    key = &quot;value&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_identity_project_v3&quot; &quot;demo-project&quot; {</span></span>
<span class="line"><span>  name = &quot;Demo&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_identity_user_v3&quot; &quot;demo-user&quot; {</span></span>
<span class="line"><span>  name               = &quot;demo-user&quot;</span></span>
<span class="line"><span>  default_project_id = openstack_identity_project_v3.demo-project.id</span></span>
<span class="line"><span>  password = &quot;demo&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="創建一個租户-terraform-文件" tabindex="-1">創建一個租户 Terraform 文件 <a class="header-anchor" href="#創建一個租户-terraform-文件" aria-label="Permalink to “創建一個租户 Terraform 文件”">​</a></h3><p>作為一個 <ruby>租户<rt>Tenant</rt></ruby>，你通常會創建虛擬機。你還為這些虛擬機創建網絡和安全組。</p><p>這個例子使用上面由 Admin 文件創建的用户。</p><p>首先，創建一個 <code>TenantTF</code> 目錄，用於與租户相關的置備：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir TenantTF</span></span>
<span class="line"><span>$ cd TenantTF</span></span></code></pre></div><p>在 <code>main.tf</code> 中，添加以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>terraform {</span></span>
<span class="line"><span>  required_version = &quot;&gt;= 0.14.0&quot;</span></span>
<span class="line"><span>  required_providers {</span></span>
<span class="line"><span>    openstack = {</span></span>
<span class="line"><span>      source  = &quot;terraform-provider-openstack/openstack&quot;</span></span>
<span class="line"><span>      version = &quot;1.49.0&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>provider &quot;openstack&quot; {</span></span>
<span class="line"><span>  user_name   = “demo-user”</span></span>
<span class="line"><span>  tenant_name = “demo”</span></span>
<span class="line"><span>  password    = “demo”</span></span>
<span class="line"><span>  auth_url    = “OS_AUTH_URL”</span></span>
<span class="line"><span>  region      = “OS_REGION”</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_compute_keypair_v2&quot; &quot;demo-keypair&quot; {</span></span>
<span class="line"><span>  name       = &quot;demo-key&quot;</span></span>
<span class="line"><span>  public_key = &quot;ssh-rsa ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_networking_network_v2&quot; &quot;demo-network&quot; {</span></span>
<span class="line"><span>  name           = &quot;demo-network&quot;</span></span>
<span class="line"><span>  admin_state_up = &quot;true&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_networking_subnet_v2&quot; &quot;demo-subnet&quot; {</span></span>
<span class="line"><span>  network_id = openstack_networking_network_v2.demo-network.id</span></span>
<span class="line"><span>  name       = &quot;demo-subnet&quot;</span></span>
<span class="line"><span>  cidr       = &quot;192.168.26.0/24&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_networking_router_interface_v2&quot; &quot;demo-router-interface&quot; {</span></span>
<span class="line"><span>  router_id = “XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX”</span></span>
<span class="line"><span>  subnet_id = openstack_networking_subnet_v2.demo-subnet.id</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>resource &quot;openstack_compute_instance_v2&quot; &quot;demo-instance&quot; {</span></span>
<span class="line"><span>  name            = &quot;demo&quot;</span></span>
<span class="line"><span>  image_id        = &quot;YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY&quot;</span></span>
<span class="line"><span>  flavor_id       = &quot;3&quot;</span></span>
<span class="line"><span>  key_pair        = &quot;demo-key&quot;</span></span>
<span class="line"><span>  security_groups = [&quot;default&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  metadata = {</span></span>
<span class="line"><span>    this = &quot;that&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  network {</span></span>
<span class="line"><span>    name = &quot;demo-network&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="初始化你的-terraform" tabindex="-1">初始化你的 Terraform <a class="header-anchor" href="#初始化你的-terraform" aria-label="Permalink to “初始化你的 Terraform”">​</a></h3><p>創建 Terraform 文件後，你需要初始化 Terraform。</p><p>對於管理員：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd AdminTF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ terraform init</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ terraform fmt</span></span></code></pre></div><p>對於租户：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd TenantTF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ terraform init</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ terraform fmt</span></span></code></pre></div><p>命令解釋：</p><ul><li><code>terraform init</code> 從鏡像源下載提供者用於置備此項目。</li><li><code>terraform fmt</code> 格式化文件，以便在倉庫中使用。</li></ul><h3 id="創建一個-terraform-計劃" tabindex="-1">創建一個 Terraform 計劃 <a class="header-anchor" href="#創建一個-terraform-計劃" aria-label="Permalink to “創建一個 Terraform 計劃”">​</a></h3><p>接下來，為你創建一個 <ruby>計劃<rt>plan</rt></ruby>，看看將創建哪些資源。</p><p>對於管理員：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd AdminTF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ terraform validate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ terraform plan</span></span></code></pre></div><p>對於租户：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd TenantTF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ terraform validate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ terraform plan</span></span></code></pre></div><p>命令解釋：</p><ul><li><code>terraform validate</code> 驗證 <code>.tf</code> 語法是否正確。</li><li><code>terraform plan</code> 在緩存中創建一個計劃文件，所有管理的資源在創建和銷燬時都可以被跟蹤。</li></ul><h3 id="應用你的第一個-tf" tabindex="-1">應用你的第一個 TF <a class="header-anchor" href="#應用你的第一個-tf" aria-label="Permalink to “應用你的第一個 TF”">​</a></h3><p>要部署資源，使用 <code>terraform apply</code> 命令。該命令應用計劃文件中的所有資源狀態。</p><p>對於管理員：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd AdminTF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ terraform apply</span></span></code></pre></div><p>對於租户：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd TenantTF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ terraform apply</span></span></code></pre></div><h3 id="接下來的步驟" tabindex="-1">接下來的步驟 <a class="header-anchor" href="#接下來的步驟" aria-label="Permalink to “接下來的步驟”">​</a></h3>`,41)),a("p",null,[s[14]||(s[14]=n("之前，我寫了一篇關於在樹莓派上部署最小 OpenStack 集羣的 ",-1)),e(p,{href:"https://opensource.com/article/20/12/openstack-raspberry-pi"},{default:t(()=>[...s[12]||(s[12]=[n("文章",-1)])]),_:1}),s[15]||(s[15]=n("。你可以找到更詳細的 ",-1)),e(p,{href:"https://www.ansible.com/blog/ansible-vs.-terraform-demystified?intcmp=7013a000002qLH8AAM"},{default:t(()=>[...s[13]||(s[13]=[n("Terraform 和 Ansible",-1)])]),_:1}),s[16]||(s[16]=n(" 配置，並通過 GitLab 實現一些 CI/CD。",-1))]),s[37]||(s[37]=a("hr",null,null,-1)),a("p",null,[s[18]||(s[18]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/23/1/terraform-manage-openstack-cluster"},{default:t(()=>[...s[17]||(s[17]=[n("https://opensource.com/article/23/1/terraform-manage-openstack-cluster",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/ajscanlas"},{default:t(()=>[...s[19]||(s[19]=[n("AJ Canlas",-1)])]),_:1}),s[24]||(s[24]=n(" 選題：",-1)),e(p,{href:"https://github.com/lkxed"},{default:t(()=>[...s[20]||(s[20]=[n("lkxed",-1)])]),_:1}),s[25]||(s[25]=n(" 譯者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:t(()=>[...s[21]||(s[21]=[n("geekpi",-1)])]),_:1}),s[26]||(s[26]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[22]||(s[22]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[29]||(s[29]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[27]||(s[27]=[n("LCTT",-1)])]),_:1}),s[30]||(s[30]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:t(()=>[...s[28]||(s[28]=[n("Linux中國",-1)])]),_:1}),s[31]||(s[31]=n(" 榮譽推出",-1))])])}const _=i(u,[["render",c]]);export{b as __pageData,_ as default};
