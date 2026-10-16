import{_ as r,a0 as i,w as p,s as m,I as s,x as n,a1 as l,A as a,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"通過 SaltStack 管理服務器配置 | LCTT x X-CMD","titleTemplate":false,"description":"通過 SaltStack 管理服務器配置 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通過 SaltStack 管理服務器配置 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通過 SaltStack 管理服務器配置 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150106 Managing Linux server configs with the SaltStack","title":"通過 SaltStack 管理服務器配置","tag":"201502","desc":""},"relativePath":"201502/20150106 Managing Linux server configs with the SaltStack.md","filePath":"[post].md"}'),d={name:"201502/20150106 Managing Linux server configs with the SaltStack.md"};function u(g,t,f,h,c,S){const e=i("Link");return p(),m("div",null,[t[32]||(t[32]=s("h1",{id:"通過-saltstack-管理服務器配置",tabindex:"-1"},[n("通過 SaltStack 管理服務器配置 "),s("a",{class:"header-anchor",href:"#通過-saltstack-管理服務器配置","aria-label":"Permalink to “通過 SaltStack 管理服務器配置”"},"​")],-1)),t[33]||(t[33]=s("p",null,[s("img",{src:"http://techarena51.com/wp-content/uploads/2015/01/SaltStack+logo+-+black+on+white.png",alt:""})],-1)),s("p",null,[t[1]||(t[1]=n("我在搜索",-1)),l(e,{href:"http://techarena51.com/index.php/a-simple-way-to-install-and-configure-a-puppet-server-on-linux/"},{default:a(()=>[...t[0]||(t[0]=[n("Puppet",-1)])]),_:1}),t[2]||(t[2]=n("的替代品時，偶然間碰到了Salt。我喜歡puppet，但是我又愛上Salt了:)。我發現Salt在配置和使用上都要比Puppet簡單，當然這只是一家之言，你大可不必介懷。另外一個愛上Salt的理由是，它可以讓你從命令列管理服務器配置，比如：",-1))]),t[34]||(t[34]=s("p",null,"要通過Salt來更新所有服務器，你只需運行以下命令即可",-1)),t[35]||(t[35]=s("pre",null,[s("code",null,`salt '*' pkg.upgrade
`)],-1)),t[36]||(t[36]=s("p",null,"##安裝SaltStack到Linux上##",-1)),s("p",null,[t[4]||(t[4]=n("如果你是在CentOS 6/7上安裝的話，那麼Salt可以通過EPEL倉庫獲取到。而對於Pi和Ubuntu Linux用户，你可以從",-1)),l(e,{href:"http://docs.saltstack.com/en/latest/topics/installation/index.html"},{default:a(()=>[...t[3]||(t[3]=[n("這裏",-1)])]),_:1}),t[5]||(t[5]=n("添加Salt倉庫。Salt是基於python的，所以你也可以使用‘pip’來安裝，但是你得用yum-utils或是其它包管理器來自己處理它的依賴關係。",-1))]),t[37]||(t[37]=o(`<p>Salt採用服務器-客户端模式，服務器端稱為領主，而客户端則稱為下屬。</p><p>###安裝並配置Salt領主###</p><pre><code>[root@salt-master~]# yum install salt-master
</code></pre><p>Salt配置文件位於/etc/salt和/srv/salt。Salt雖然可以開箱即用，但我還是建議你將日誌配置得更詳細點，以方便日後排除故障。</p><pre><code>[root@salt-master ~]# vim /etc/salt/master
# 默認是warning，修改如下
log_level: debug
log_level_logfile: debug

[root@salt-master ~]# systemctl start salt-master
</code></pre><p>###安裝並配置Salt下屬###</p><pre><code>[root@salt-minion~]#yum install salt-minion

# 添加你的Salt領主的主機名
[root@salt-minion~]#vim /etc/salt/minion
master: salt-master.com
# 啓動下屬
[root@salt-minion~] systemctl start salt-minion
</code></pre><p>在啓動時，下屬客户機會生成一個密鑰和一個id。然後，它會連接到Salt領主服務器並驗證自己的身份。Salt領主服務器在允許下屬客户機下載配置之前，必須接受下屬的密鑰。</p><p>###在Salt領主服務器上列出並接受密鑰###</p><pre><code># 列出所有密鑰
[root@salt-master~] salt-key -L
Accepted Keys:
Unaccepted Keys:
minion.com
Rejected Keys:

# 使用id &#39;minion.com&#39;命令接受密鑰
[root@salt-master~]salt-key -a minion.com

[root@salt-master~] salt-key -L
Accepted Keys:
minion.com
Unaccepted Keys:
Rejected Keys:
</code></pre><p>在接受下屬客户機的密鑰後，你可以使用‘salt’命令來立即獲取信息。</p><p>##Salt命令列實例##</p><pre><code># 檢查下屬是否啓動並運行
[root@salt-master~]  salt &#39;minion.com&#39; test.ping
minion.com:
    True
# 在下屬客户機上運行shell命令
 [root@salt-master~]#  salt &#39;minion.com&#39; cmd.run &#39;ls -l&#39;
minion.com:
    total 2988
    -rw-r--r--. 1 root root 1024 Jul 31 08:24 1g.img
    -rw-------. 1 root root     940 Jul 14 15:04 anaconda-ks.cfg
    -rw-r--r--. 1 root root 1024  Aug 14 17:21 test
# 安裝/更新所有服務器上的軟件
[root@salt-master ~]# salt &#39;*&#39; pkg.install git
</code></pre><p>salt命令需要一些組件來發送信息，其中之一是下屬客户機的id，而另一個是下屬客户機上要調用的函數。</p><p>在第一個實例中，我使用‘test’模組的‘ping’函數來檢查系統是否啓動。該函數並不是真的實施一次ping，它僅僅是在下屬客户機作出回應時返回‘真’。</p><p>‘cmd.run’用於執行遠程命令，而‘pkg’模組包含了包管理的函數。本文結尾提供了全部內建模組的列表。</p><p>###顆粒實例###</p><p>Salt使用一個名為<strong>顆粒（Grains）</strong>的界面來獲取系統信息。你可以使用顆粒在指定屬性的系統上運行命令。</p><pre><code>[root@vps4544 ~]# salt -G &#39;os:Centos&#39; test.ping
minion:
    True
</code></pre>`,19)),s("p",null,[t[7]||(t[7]=n("更多顆粒實例，請訪問",-1)),l(e,{href:"http://docs.saltstack.com/en/latest/topics/targeting/grains.html"},{default:a(()=>[...t[6]||(t[6]=[n("http://docs.saltstack.com/en/latest/topics/targeting/grains.html",-1)])]),_:1})]),t[38]||(t[38]=o(`<p>##通過狀態文件系統進行包管理##</p><p>為了使軟件配置自動化，你需要使用狀態系統，並創建狀態文件。這些文件使用YAML格式和python字典、列表、字符串以及編號來構成數據結構。將這些文件從頭到尾研讀一遍，這將有助於你更好地理解它的配置。</p><p>###VIM狀態文件實例###</p><pre><code>[root@salt-master~]# vim /srv/salt/vim.sls
vim-enhanced:
  pkg.installed
/etc/vimrc:
  file.managed:
    - source: salt://vimrc
    - user: root
    - group: root
    - mode: 644
</code></pre><p>該文件的第一和第三行稱為狀態id，它們必須包含有需要管理的包或文件的確切名稱或路徑。在狀態id之後是狀態和函數聲明，‘pkg’和‘file’是狀態聲明，而‘installed’和‘managed’是函數聲明。函數接受參數，用户、組、模式和源都是函數‘managed’的參數。</p><p>要將該配置應用到下屬客户端，請移動你的‘vimrc’文件到‘/src/salt’，然後運行以下命令。</p><pre><code>[root@salt-master~]# salt &#39;minion.com&#39; state.sls vim
minion.com:
----------
          ID: vim-enhanced
    Function: pkg.installed
      Result: True
     Comment: The following packages were installed/updated: vim-enhanced.
     Started: 09:36:23.438571
    Duration: 94045.954 ms
     Changes:
              ----------
              vim-enhanced:
                  ----------
                  new:
                      7.4.160-1.el7
                  old:


Summary
------------
Succeeded: 1 (changed=1)
Failed:    0
------------
Total states run:     1
</code></pre><p>你也可以添加依賴關係到你的配置中。</p><pre><code>[root@salt-master~]# vim /srv/salt/ssh.sls
openssh-server:
  pkg.installed


/etc/ssh/sshd_config:
  file.managed:
    - user: root
    - group: root
    - mode: 600
    - source: salt://ssh/sshd_config

sshd:
  service.running:
    - require:
      - pkg: openssh-server
</code></pre><p>這裏的‘require’聲明是必須的，它在‘service’和‘pkg’狀態之間創建依賴關係。該聲明將首先檢查包是否安裝，然後運行服務。</p><p>但是，我更偏向於使用‘watch’聲明，因為它也可以檢查文件是否修改和重啓服務。</p><pre><code>[root@salt-master~]# vim /srv/salt/ssh.sls
openssh-server:
  pkg.installed


/etc/ssh/sshd_config:
  file.managed:
    - user: root
    - group: root
    - mode: 600
    - source: salt://sshd_config

sshd:
  service.running:
    - watch:
      - pkg: openssh-server
      - file: /etc/ssh/sshd_config

[root@vps4544 ssh]# salt &#39;minion.com&#39; state.sls ssh
seven.leog.in:
     Changes:
----------
          ID: openssh-server
    Function: pkg.installed
      Result: True
     Comment: Package openssh-server is already installed.
     Started: 13:01:55.824367
    Duration: 1.156 ms
     Changes:
----------
          ID: /etc/ssh/sshd_config
    Function: file.managed
      Result: True
     Comment: File /etc/ssh/sshd_config updated
     Started: 13:01:55.825731
    Duration: 334.539 ms
     Changes:
              ----------
              diff:
                  ---
                  +++
                  @@ -14,7 +14,7 @@
                   # SELinux about this change.
                   # semanage port -a -t ssh_port_t -p tcp #PORTNUMBER
                   #
                  -Port 22
                  +Port 422
                   #AddressFamily any
                   #ListenAddress 0.0.0.0
                   #ListenAddress ::

----------
          ID: sshd
    Function: service.running
      Result: True
     Comment: Service restarted
     Started: 13:01:56.473121
    Duration: 407.214 ms
     Changes:
              ----------
              sshd:
                  True

Summary
------------
Succeeded: 4 (changed=2)
Failed:    0
------------
Total states run:     4
</code></pre><p>在單一目錄中維護所有的配置文件是一項複雜的大工程，因此，你可以創建子目錄並在其中添加配置文件init.sls文件。</p><pre><code>[root@salt-master~]# mkdir /srv/salt/ssh
[root@salt-master~]# vim /srv/salt/ssh/init.sls
openssh-server:
  pkg.installed


/etc/ssh/sshd_config:
  file.managed:
    - user: root
    - group: root
    - mode: 600
    - source: salt://ssh/sshd_config

sshd:
  service.running:
    - watch:
      - pkg: openssh-server
      - file: /etc/ssh/sshd_config

[root@vps4544 ssh]# cp /etc/ssh/sshd_config /srv/salt/ssh/
[root@vps4544 ssh]# salt &#39;minion.com&#39; state.sls ssh
</code></pre><p>###Top文件和環境###</p><p>top文件（top.sls）是用來定義你的環境的文件，它允許你映射下屬客户機到包，默認環境是‘base’。你需要定義在基本環境下，哪個包會被安裝到哪台服務器。</p><p>如果對於一台特定的下屬客户機而言，有多個環境，並且有多於一個的定義，那麼默認情況下，基本環境將取代其它環境。</p><p>要定義環境，你需要將它添加到領主配置文件的‘file_roots’指針。</p><pre><code>[root@salt-master ~]# vim /etc/salt/master
file_roots:
  base:
    - /srv/salt
  dev:
    - /srv/salt/dev
</code></pre><p>現在，添加一個top.sls文件到/src/salt。</p><pre><code>[root@salt-master ~]# vim /srv/salt/top.sls
base:
  &#39;*&#39;:
    - vim
  &#39;minion.com&#39;:
     - ssh
</code></pre><p>應用top文件配置</p><pre><code>[root@salt-master~]# salt &#39;*&#39; state.highstate
minion.com:
----------
          ID: vim-enhanced
    Function: pkg.installed
      Result: True
     Comment: Package vim-enhanced is already installed.
     Started: 13:10:55
    Duration: 1678.779 ms
     Changes:
----------
          ID: openssh-server
    Function: pkg.installed
      Result: True
     Comment: Package openssh-server is already installed.
     Started: 13:10:55.
    Duration: 2.156 ms
</code></pre><p>下屬客户機將下載top文件並搜索用於它的配置，領主服務器也會將配置應用到所有下屬客户機。</p><hr><p>這僅僅是一個Salt的簡明教程，如果你想要深入學習並理解，你可以訪問下面的鏈接。如果你已經在使用Salt，那麼請告訴我你的建議和意見吧。</p>`,26)),s("p",null,[t[10]||(t[10]=n("更新： ",-1)),l(e,{href:"http://techarena51.com/index.php/using-foreman-opensource-frontend-puppet/"},{default:a(()=>[...t[8]||(t[8]=[n("Foreman",-1)])]),_:1}),t[11]||(t[11]=n(" 已經通過",-1)),l(e,{href:"https://github.com/theforeman/foreman_salt/wiki"},{default:a(()=>[...t[9]||(t[9]=[n("插件",-1)])]),_:1}),t[12]||(t[12]=n("支持salt。",-1))]),t[39]||(t[39]=s("p",null,"閲讀鏈接",-1)),s("ul",null,[s("li",null,[l(e,{href:"http://docs.saltstack.com/en/latest/ref/states/top.html#how-top-files-are-compiled"},{default:a(()=>[...t[13]||(t[13]=[n("http://docs.saltstack.com/en/latest/ref/states/top.html#how-top-files-are-compiled",-1)])]),_:1})]),s("li",null,[l(e,{href:"http://docs.saltstack.com/en/latest/topics/tutorials/states_pt1.html"},{default:a(()=>[...t[14]||(t[14]=[n("http://docs.saltstack.com/en/latest/topics/tutorials/states_pt1.html",-1)])]),_:1})]),s("li",null,[l(e,{href:"http://docs.saltstack.com/en/latest/ref/states/highstate.html#state-declaration"},{default:a(()=>[...t[15]||(t[15]=[n("http://docs.saltstack.com/en/latest/ref/states/highstate.html#state-declaration",-1)])]),_:1})])]),t[40]||(t[40]=s("p",null,"顆粒",-1)),s("ul",null,[s("li",null,[l(e,{href:"http://docs.saltstack.com/en/latest/topics/targeting/grains.html"},{default:a(()=>[...t[16]||(t[16]=[n("http://docs.saltstack.com/en/latest/topics/targeting/grains.html",-1)])]),_:1})])]),t[41]||(t[41]=s("p",null,"Salt模組列表",-1)),t[42]||(t[42]=s("p",null,"Salt和Puppet的充分比較",-1)),s("ul",null,[s("li",null,[l(e,{href:"https://mywushublog.com/2013/03/configuration-management-with-salt-stack/"},{default:a(()=>[...t[17]||(t[17]=[n("https://mywushublog.com/2013/03/configuration-management-with-salt-stack/",-1)])]),_:1})])]),t[43]||(t[43]=s("p",null,"內建執行模組的完全列表",-1)),s("ul",null,[s("li",null,[l(e,{href:"http://docs.saltstack.com/en/latest/ref/modules/all/"},{default:a(()=>[...t[18]||(t[18]=[n("http://docs.saltstack.com/en/latest/ref/modules/all/",-1)])]),_:1})])]),t[44]||(t[44]=s("hr",null,null,-1)),s("p",null,[t[20]||(t[20]=n("via: ",-1)),l(e,{href:"http://techarena51.com/index.php/getting-started-with-saltstack/"},{default:a(()=>[...t[19]||(t[19]=[n("http://techarena51.com/index.php/getting-started-with-saltstack/",-1)])]),_:1})]),s("p",null,[t[24]||(t[24]=n("作者：",-1)),l(e,{href:"http://techarena51.com/"},{default:a(()=>[...t[21]||(t[21]=[n("Leo G",-1)])]),_:1}),t[25]||(t[25]=n(" 譯者：",-1)),l(e,{href:"https://github.com/GOLinux"},{default:a(()=>[...t[22]||(t[22]=[n("GOLinux",-1)])]),_:1}),t[26]||(t[26]=n(" 校對：",-1)),l(e,{href:"https://github.com/wxy"},{default:a(()=>[...t[23]||(t[23]=[n("wxy",-1)])]),_:1})]),s("p",null,[t[29]||(t[29]=n("本文由 ",-1)),l(e,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[27]||(t[27]=[n("LCTT",-1)])]),_:1}),t[30]||(t[30]=n(" 原創翻譯，",-1)),l(e,{href:"http://linux.cn/"},{default:a(()=>[...t[28]||(t[28]=[n("Linux中國",-1)])]),_:1}),t[31]||(t[31]=n(" 榮譽推出",-1))])])}const C=r(d,[["render",u]]);export{T as __pageData,C as default};
