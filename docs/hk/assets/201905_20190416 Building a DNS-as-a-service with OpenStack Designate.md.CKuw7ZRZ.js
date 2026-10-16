import{_ as t,a0 as l,w as o,s as d,I as a,x as n,a1 as i,A as p,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"用 OpenStack Designate 構建一個 DNS 即服務（DNSaaS） | LCTT x X-CMD","titleTemplate":false,"description":"用 OpenStack Designate 構建一個 DNS 即服務（DNSaaS） | LCTT (201905) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 OpenStack Designate 構建一個 DNS 即服務（DNSaaS） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 OpenStack Designate 構建一個 DNS 即服務（DNSaaS） | LCTT (201905) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201905/20190416 Building a DNS-as-a-service with OpenStack Designate","title":"用 OpenStack Designate 構建一個 DNS 即服務（DNSaaS）","tag":"201905","desc":""},"relativePath":"201905/20190416 Building a DNS-as-a-service with OpenStack Designate.md","filePath":"[post].md"}'),r={name:"201905/20190416 Building a DNS-as-a-service with OpenStack Designate.md"};function h(g,s,u,k,b,m){const e=l("Link");return o(),d("div",null,[s[22]||(s[22]=a("h1",{id:"用-openstack-designate-構建一個-dns-即服務-dnsaas",tabindex:"-1"},[n("用 OpenStack Designate 構建一個 DNS 即服務（DNSaaS） "),a("a",{class:"header-anchor",href:"#用-openstack-designate-構建一個-dns-即服務-dnsaas","aria-label":"Permalink to “用 OpenStack Designate 構建一個 DNS 即服務（DNSaaS）”"},"​")],-1)),s[23]||(s[23]=a("blockquote",null,[a("p",null,"學習如何安裝和配置 Designate，這是一個 OpenStack 的多租户 DNS 即服務（DNSaaS）。")],-1)),s[24]||(s[24]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201905/11/110822rjub9wtwtwtmccet.jpg",alt:"Command line prompt"})],-1)),a("p",null,[i(e,{href:"https://docs.openstack.org/designate/latest/"},{default:p(()=>[...s[0]||(s[0]=[n("Designate",-1)])]),_:1}),s[2]||(s[2]=n(" 是一個多租户的 DNS 即服務，它包括一個用於域名和記錄管理的 REST API 和集成了 ",-1)),i(e,{href:"/article/19/3/openstack-neutron"},{default:p(()=>[...s[1]||(s[1]=[n("Neutron",-1)])]),_:1}),s[3]||(s[3]=n(" 的框架，並支持 Bind9。",-1))]),s[25]||(s[25]=a("p",null,"DNSaaS 可以提供：",-1)),s[26]||(s[26]=a("ul",null,[a("li",null,"一個管理區域和記錄的乾淨利落的 REST API"),a("li",null,"自動生成記錄（集成 OpenStack）"),a("li",null,"支持多個授權名字服務器"),a("li",null,"可以託管多個項目/組織")],-1)),s[27]||(s[27]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/uploads/openstack_designate_architecture.png",alt:"Designate's architecture",title:"Designate's architecture"})],-1)),s[28]||(s[28]=a("p",null,"這篇文章解釋瞭如何在 CentOS 和 RHEL 上手動安裝和配置 Designate 的最新版本，但是同樣的配置也可以用在其它發行版上。",-1)),s[29]||(s[29]=a("h3",{id:"在-openstack-上安裝-designate",tabindex:"-1"},[n("在 OpenStack 上安裝 Designate "),a("a",{class:"header-anchor",href:"#在-openstack-上安裝-designate","aria-label":"Permalink to “在 OpenStack 上安裝 Designate”"},"​")],-1)),a("p",null,[s[5]||(s[5]=n("在我的 ",-1)),i(e,{href:"https://github.com/ayaseen/designate"},{default:p(()=>[...s[4]||(s[4]=[n("GitHub 倉庫",-1)])]),_:1}),s[6]||(s[6]=n("裏，我已經放了 Ansible 的 bind 和 Designate 角色的示範設置。",-1))]),s[30]||(s[30]=c(`<p>這個設置假定 bing 服務是安裝 OpenStack 控制器節點之外（即使你可以在本地安裝 bind）。</p><p>1、在 OpenStack 控制節點上安裝 Designate 和 bind 軟件包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># yum install openstack-designate-* bind bind-utils -y</span></span></code></pre></div><p>2、創建 Designate 資料庫和用户：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>MariaDB [(none)]&gt; CREATE DATABASE designate CHARACTER SET utf8 COLLATE utf8_general_ci;</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>MariaDB [(none)]&gt; GRANT ALL PRIVILEGES ON designate.* TO \\</span></span>
<span class="line"><span>&#39;designate&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;rhlab123&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MariaDB [(none)]&gt; GRANT ALL PRIVILEGES ON designate.* TO &#39;designate&#39;@&#39;%&#39; \\</span></span>
<span class="line"><span>IDENTIFIED BY &#39;rhlab123&#39;;</span></span></code></pre></div><p>注意：bind 包必須安裝在控制節點之外才能使<ruby>遠程名字服務控制<rt>Remote Name Daemon Control</rt></ruby>（RNDC）功能正常。</p><h3 id="配置-bind-dns-服務器" tabindex="-1">配置 bind（DNS 服務器） <a class="header-anchor" href="#配置-bind-dns-服務器" aria-label="Permalink to “配置 bind（DNS 服務器）”">​</a></h3><p>1、生成 RNDC 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rndc-confgen -a -k designate -c /etc/rndc.key -r /dev/urandom</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat &lt;&lt;EOF&gt; etcrndc.conf</span></span>
<span class="line"><span>include &quot;/etc/rndc.key&quot;;</span></span>
<span class="line"><span>options {</span></span>
<span class="line"><span>  default-key &quot;designate&quot;;</span></span>
<span class="line"><span>  default-server {{ DNS_SERVER_IP }};</span></span>
<span class="line"><span>  default-port 953;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>2、將下列配置添加到 <code>named.conf</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>include &quot;/etc/rndc.key&quot;; </span></span>
<span class="line"><span>controls {</span></span>
<span class="line"><span>  inet {{ DNS_SERVER_IP }} allow { localhost;{{ CONTROLLER_SERVER_IP }}; } keys { &quot;designate&quot;; };</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>在 <code>option</code> 節中，添加：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>options {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  allow-new-zones yes;</span></span>
<span class="line"><span>  request-ixfr no;</span></span>
<span class="line"><span>  listen-on port 53 { any; };</span></span>
<span class="line"><span>  recursion no;</span></span>
<span class="line"><span>  allow-query { 127.0.0.1; {{ CONTROLLER_SERVER_IP }}; };</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>添加正確的權限：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chown named:named /etc/rndc.key</span></span>
<span class="line"><span>chown named:named /etc/rndc.conf</span></span>
<span class="line"><span>chmod 600 /etc/rndc.key</span></span>
<span class="line"><span>chown -v root:named /etc/named.conf</span></span>
<span class="line"><span>chmod g+w /var/named</span></span>
<span class="line"><span></span></span>
<span class="line"><span># systemctl restart named</span></span>
<span class="line"><span># setsebool named_write_master_zones 1</span></span></code></pre></div><p>3、把 <code>rndc.key</code> 和 <code>rndc.conf</code> 推入 OpenStack 控制節點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># scp -r /etc/rndc* {{ CONTROLLER_SERVER_IP }}:/etc/</span></span></code></pre></div><h3 id="創建-openstack-designate-服務和端點" tabindex="-1">創建 OpenStack Designate 服務和端點 <a class="header-anchor" href="#創建-openstack-designate-服務和端點" aria-label="Permalink to “創建 OpenStack Designate 服務和端點”">​</a></h3><p>輸入：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># openstack user create --domain default --password-prompt designate</span></span>
<span class="line"><span># openstack role add --project services --user designate admin</span></span>
<span class="line"><span># openstack service create --name designate --description &quot;DNS&quot; dns</span></span>
<span class="line"><span></span></span>
<span class="line"><span># openstack endpoint create --region RegionOne dns public http://{{ CONTROLLER_SERVER_IP }}:9001/</span></span>
<span class="line"><span># openstack endpoint create --region RegionOne dns internal http://{{ CONTROLLER_SERVER_IP }}:9001/  </span></span>
<span class="line"><span># openstack endpoint create --region RegionOne dns admin http://{{ CONTROLLER_SERVER_IP }}:9001/</span></span></code></pre></div><h3 id="配置-designate-服務" tabindex="-1">配置 Designate 服務 <a class="header-anchor" href="#配置-designate-服務" aria-label="Permalink to “配置 Designate 服務”">​</a></h3><p>1、編輯 <code>/etc/designate/designate.conf</code>：</p><p>在 <code>[service:api]</code> 節配置 <code>auth_strategy</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[service:api]</span></span>
<span class="line"><span>listen = 0.0.0.0:9001</span></span>
<span class="line"><span>auth_strategy = keystone</span></span>
<span class="line"><span>api_base_uri = http://{{ CONTROLLER_SERVER_IP }}:9001/</span></span>
<span class="line"><span>enable_api_v2 = True</span></span>
<span class="line"><span>enabled_extensions_v2 = quotas, reports</span></span></code></pre></div><p>在 <code>[keystone_authtoken]</code> 節配置下列選項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[keystone_authtoken]</span></span>
<span class="line"><span>auth_type = password</span></span>
<span class="line"><span>username = designate</span></span>
<span class="line"><span>password = rhlab123</span></span>
<span class="line"><span>project_name = service</span></span>
<span class="line"><span>project_domain_name = Default</span></span>
<span class="line"><span>user_domain_name = Default</span></span>
<span class="line"><span>www_authenticate_uri = http://{{ CONTROLLER_SERVER_IP }}:5000/</span></span>
<span class="line"><span>auth_url = http://{{ CONTROLLER_SERVER_IP }}:5000/</span></span></code></pre></div><p>在 <code>[service:worker]</code> 節，啓用 worker 模型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enabled = True</span></span>
<span class="line"><span>notify = True</span></span></code></pre></div><p>在 <code>[storage:sqlalchemy]</code> 節，配置資料庫訪問：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[storage:sqlalchemy]</span></span>
<span class="line"><span>connection = mysql+pymysql://designate:rhlab123@{{ CONTROLLER_SERVER_IP }}/designate</span></span></code></pre></div><p>填充 Designate 資料庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># su -s /bin/sh -c &quot;designate-manage database sync&quot; designate</span></span></code></pre></div><p>2、 創建 Designate 的 <code>pools.yaml</code> 文件（包含 target 和 bind 細節）：</p><p>編輯 <code>/etc/designate/pools.yaml</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>- name: default</span></span>
<span class="line"><span>  # The name is immutable. There will be no option to change the name after</span></span>
<span class="line"><span>  # creation and the only way will to change it will be to delete it</span></span>
<span class="line"><span>  # (and all zones associated with it) and recreate it.</span></span>
<span class="line"><span>  description: Default Pool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  attributes: {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # List out the NS records for zones hosted within this pool</span></span>
<span class="line"><span>  # This should be a record that is created outside of designate, that</span></span>
<span class="line"><span>  # points to the public IP of the controller node.</span></span>
<span class="line"><span>  ns_records:</span></span>
<span class="line"><span>    - hostname: {{Controller_FQDN}}. # Thisis mDNS</span></span>
<span class="line"><span>      priority: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # List out the nameservers for this pool. These are the actual BIND servers.</span></span>
<span class="line"><span>  # We use these to verify changes have propagated to all nameservers.</span></span>
<span class="line"><span>  nameservers:</span></span>
<span class="line"><span>    - host: {{ DNS_SERVER_IP }}</span></span>
<span class="line"><span>      port: 53</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # List out the targets for this pool. For BIND there will be one</span></span>
<span class="line"><span>  # entry for each BIND server, as we have to run rndc command on each server</span></span>
<span class="line"><span>  targets:</span></span>
<span class="line"><span>    - type: bind9</span></span>
<span class="line"><span>      description: BIND9 Server 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # List out the designate-mdns servers from which BIND servers should</span></span>
<span class="line"><span>      # request zone transfers (AXFRs) from.</span></span>
<span class="line"><span>      # This should be the IP of the controller node.</span></span>
<span class="line"><span>      # If you have multiple controllers you can add multiple masters</span></span>
<span class="line"><span>      # by running designate-mdns on them, and adding them here.</span></span>
<span class="line"><span>      masters:</span></span>
<span class="line"><span>        - host: {{ CONTROLLER_SERVER_IP }}</span></span>
<span class="line"><span>          port: 5354</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # BIND Configuration options</span></span>
<span class="line"><span>      options:</span></span>
<span class="line"><span>        host: {{ DNS_SERVER_IP }}</span></span>
<span class="line"><span>        port: 53</span></span>
<span class="line"><span>        rndc_host: {{ DNS_SERVER_IP }}</span></span>
<span class="line"><span>        rndc_port: 953</span></span>
<span class="line"><span>        rndc_key_file: /etc/rndc.key</span></span>
<span class="line"><span>        rndc_config_file: /etc/rndc.conf</span></span></code></pre></div><p>填充 Designate 池：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>su -s /bin/sh -c &quot;designate-manage pool update&quot; designate</span></span></code></pre></div><p>3、啓動 Designate 中心和 API 服務：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemctl enable --now designate-central designate-api</span></span></code></pre></div><p>4、驗證 Designate 服務運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># openstack dns service list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+--------------+--------+-------+--------------+</span></span>
<span class="line"><span>| service_name | status | stats | capabilities |</span></span>
<span class="line"><span>+--------------+--------+-------+--------------+</span></span>
<span class="line"><span>| central      | UP     | -     | -            |</span></span>
<span class="line"><span>| api          | UP     | -     | -            |</span></span>
<span class="line"><span>| mdns         | UP     | -     | -            |</span></span>
<span class="line"><span>| worker       | UP     | -     | -            |</span></span>
<span class="line"><span>| producer     | UP     | -     | -            |</span></span>
<span class="line"><span>+--------------+--------+-------+--------------+</span></span></code></pre></div><h3 id="用外部-dns-配置-openstack-neutron" tabindex="-1">用外部 DNS 配置 OpenStack Neutron <a class="header-anchor" href="#用外部-dns-配置-openstack-neutron" aria-label="Permalink to “用外部 DNS 配置 OpenStack Neutron”">​</a></h3><p>1、為 Designate 服務配置 iptables：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># iptables -I INPUT -p tcp -m multiport --dports 9001 -m comment --comment &quot;designate incoming&quot; -j ACCEPT</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span># iptables -I INPUT -p tcp -m multiport --dports 5354 -m comment --comment &quot;Designate mdns incoming&quot; -j ACCEPT</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span># iptables -I INPUT -p tcp -m multiport --dports 53 -m comment --comment &quot;bind incoming&quot; -j ACCEPT</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span># iptables -I INPUT -p udp -m multiport --dports 53 -m comment --comment &quot;bind/powerdns incoming&quot; -j ACCEPT</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span># iptables -I INPUT -p tcp -m multiport --dports 953 -m comment --comment &quot;rndc incoming - bind only&quot; -j ACCEPT</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span># service iptables save; service iptables restart</span></span>
<span class="line"><span># setsebool named_write_master_zones 1</span></span></code></pre></div><p>2、 編輯 <code>/etc/neutron/neutron.conf</code> 的 <code>[default]</code> 節：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>external_dns_driver = designate</span></span></code></pre></div><p>3、 在 <code>/etc/neutron/neutron.conf</code> 中添加 <code>[designate]</code> 節：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[designate]</span></span>
<span class="line"><span>url = http://{{ CONTROLLER_SERVER_IP }}:9001/v2 ## This end point of designate</span></span>
<span class="line"><span>auth_type = password</span></span>
<span class="line"><span>auth_url = http://{{ CONTROLLER_SERVER_IP }}:5000</span></span>
<span class="line"><span>username = designate</span></span>
<span class="line"><span>password = rhlab123</span></span>
<span class="line"><span>project_name = services</span></span>
<span class="line"><span>project_domain_name = Default</span></span>
<span class="line"><span>user_domain_name = Default</span></span>
<span class="line"><span>allow_reverse_dns_lookup = True</span></span>
<span class="line"><span>ipv4_ptr_zone_prefix_size = 24</span></span>
<span class="line"><span>ipv6_ptr_zone_prefix_size = 116</span></span></code></pre></div><p>4、編輯 <code>neutron.conf</code> 的 <code>dns_domain</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dns_domain = rhlab.dev.</span></span></code></pre></div><p>重啓：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># systemctl restart neutron-*</span></span></code></pre></div><p>5、在 <code>/etc/neutron/plugins/ml2/ml2_conf.ini</code> 中的組成層 2（ML2）中添加 <code>dns</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>extension_drivers=port_security,qos,dns</span></span></code></pre></div><p>6、在 Designate 中添加區域：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># openstack zone create –email=admin@rhlab.dev rhlab.dev.</span></span></code></pre></div><p>在 <code>rhlab.dev</code> 區域中添加記錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># openstack recordset create --record &#39;192.168.1.230&#39; --type A rhlab.dev. Test</span></span></code></pre></div><p>Designate 現在就安裝和配置好了。</p><hr>`,60)),a("p",null,[s[8]||(s[8]=n("via: ",-1)),i(e,{href:"https://opensource.com/article/19/4/getting-started-openstack-designate"},{default:p(()=>[...s[7]||(s[7]=[n("https://opensource.com/article/19/4/getting-started-openstack-designate",-1)])]),_:1})]),a("p",null,[s[13]||(s[13]=n("作者：",-1)),i(e,{href:"https://opensource.com/users/ayaseen"},{default:p(()=>[...s[9]||(s[9]=[n("Amjad Yaseen",-1)])]),_:1}),s[14]||(s[14]=n(" 選題：",-1)),i(e,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[10]||(s[10]=[n("lujun9972",-1)])]),_:1}),s[15]||(s[15]=n(" 譯者：",-1)),i(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[11]||(s[11]=[n("wxy",-1)])]),_:1}),s[16]||(s[16]=n(" 校對：",-1)),i(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[12]||(s[12]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[19]||(s[19]=n("本文由 ",-1)),i(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[17]||(s[17]=[n("LCTT",-1)])]),_:1}),s[20]||(s[20]=n(" 原創編譯，",-1)),i(e,{href:"https://linux.cn/"},{default:p(()=>[...s[18]||(s[18]=[n("Linux中國",-1)])]),_:1}),s[21]||(s[21]=n(" 榮譽推出",-1))])])}const C=t(r,[["render",h]]);export{v as __pageData,C as default};
