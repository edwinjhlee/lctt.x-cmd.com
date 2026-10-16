import{_ as r,a0 as d,w as c,s as l,ao as o,I as i,x as t,a1 as n,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse(`{"title":"systemctl 完全指南 | LCTT x X-CMD","titleTemplate":false,"description":"systemctl 完全指南 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"systemctl 完全指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"systemctl 完全指南 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150505 How to Manage 'Systemd' Services and Units Using 'Systemctl' in Linux","title":"systemctl 完全指南","tag":"201507","desc":""},"relativePath":"201507/20150505 How to Manage 'Systemd' Services and Units Using 'Systemctl' in Linux.md","filePath":"[post].md"}`),m={name:"201507/20150505 How to Manage 'Systemd' Services and Units Using 'Systemctl' in Linux.md"};function p(h,e,y,u,v,b){const s=d("Link");return c(),l("div",null,[e[13]||(e[13]=o(`<h1 id="systemctl-完全指南" tabindex="-1">systemctl 完全指南 <a class="header-anchor" href="#systemctl-完全指南" aria-label="Permalink to “systemctl 完全指南”">​</a></h1><p>Systemctl是一个systemd工具，主要负责控制systemd系统和服务管理器。</p><p>Systemd是一个系统管理守护进程、工具和库的集合，用于取代System V初始进程。Systemd的功能是用于集中管理和配置类UNIX系统。</p><p>在Linux生态系统中，Systemd被部署到了大多数的标准Linux发行版中，只有为数不多的几个发行版尚未部署。Systemd通常是所有其它守护进程的父进程，但并非总是如此。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Manage-Linux-Services-Using-Systemctl.jpg" alt="Manage Linux Services Using Systemctl"></p><p><em>使用Systemctl管理Linux服务</em></p><p>本文旨在阐明在运行systemd的系统上“如何控制系统和服务”。</p><h3 id="systemd初体验和systemctl基础" tabindex="-1">Systemd初体验和Systemctl基础 <a class="header-anchor" href="#systemd初体验和systemctl基础" aria-label="Permalink to “Systemd初体验和Systemctl基础”">​</a></h3><h4 id="_1-首先检查你的系统中是否安装有systemd并确定当前安装的版本" tabindex="-1">1. 首先检查你的系统中是否安装有systemd并确定当前安装的版本 <a class="header-anchor" href="#_1-首先检查你的系统中是否安装有systemd并确定当前安装的版本" aria-label="Permalink to “1. 首先检查你的系统中是否安装有systemd并确定当前安装的版本”">​</a></h4><pre><code># systemd --version

systemd 215
+PAM +AUDIT +SELINUX +IMA +SYSVINIT +LIBCRYPTSETUP +GCRYPT +ACL +XZ -SECCOMP -APPARMOR
</code></pre><p>上例中很清楚地表明，我们安装了215版本的systemd。</p><h4 id="_2-检查systemd和systemctl的二进制文件和库文件的安装位置" tabindex="-1">2. 检查systemd和systemctl的二进制文件和库文件的安装位置 <a class="header-anchor" href="#_2-检查systemd和systemctl的二进制文件和库文件的安装位置" aria-label="Permalink to “2. 检查systemd和systemctl的二进制文件和库文件的安装位置”">​</a></h4><pre><code># whereis systemd 
systemd: /usr/lib/systemd /etc/systemd /usr/share/systemd /usr/share/man/man1/systemd.1.gz


# whereis systemctl
systemctl: /usr/bin/systemctl /usr/share/man/man1/systemctl.1.gz
</code></pre><h4 id="_3-检查systemd是否运行" tabindex="-1">3. 检查systemd是否运行 <a class="header-anchor" href="#_3-检查systemd是否运行" aria-label="Permalink to “3. 检查systemd是否运行”">​</a></h4><pre><code># ps -eaf | grep [s]ystemd

root         1     0  0 16:27 ?        00:00:00 /usr/lib/systemd/systemd --switched-root --system --deserialize 23
root       444     1  0 16:27 ?        00:00:00 /usr/lib/systemd/systemd-journald
root       469     1  0 16:27 ?        00:00:00 /usr/lib/systemd/systemd-udevd
root       555     1  0 16:27 ?        00:00:00 /usr/lib/systemd/systemd-logind
dbus       556     1  0 16:27 ?        00:00:00 /bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation
</code></pre><p><strong>注意</strong>：systemd是作为父进程（PID=1）运行的。在上面带（-e）参数的ps命令输出中，选择所有进程，（-a）选择除会话前导外的所有进程，并使用（-f）参数输出完整格式列表（即 -eaf）。</p><p>也请注意上例中后随的方括号和例子中剩余部分。方括号表达式是grep的字符类表达式的一部分。</p><h4 id="_4-分析systemd启动进程" tabindex="-1">4. 分析systemd启动进程 <a class="header-anchor" href="#_4-分析systemd启动进程" aria-label="Permalink to “4. 分析systemd启动进程”">​</a></h4><pre><code># systemd-analyze
Startup finished in 487ms (kernel) + 2.776s (initrd) + 20.229s (userspace) = 23.493s
</code></pre><h4 id="_5-分析启动时各个进程花费的时间" tabindex="-1">5. 分析启动时各个进程花费的时间 <a class="header-anchor" href="#_5-分析启动时各个进程花费的时间" aria-label="Permalink to “5. 分析启动时各个进程花费的时间”">​</a></h4><pre><code># systemd-analyze blame

8.565s mariadb.service
7.991s webmin.service
6.095s postfix.service
4.311s httpd.service
3.926s firewalld.service
3.780s kdump.service
3.238s tuned.service
1.712s network.service
1.394s lvm2-monitor.service
1.126s systemd-logind.service
....
</code></pre><h4 id="_6-分析启动时的关键链" tabindex="-1">6. 分析启动时的关键链 <a class="header-anchor" href="#_6-分析启动时的关键链" aria-label="Permalink to “6. 分析启动时的关键链”">​</a></h4><pre><code># systemd-analyze critical-chain

The time after the unit is active or started is printed after the &quot;@&quot; character.
The time the unit takes to start is printed after the &quot;+&quot; character.

multi-user.target @20.222s
└─mariadb.service @11.657s +8.565s
  └─network.target @11.168s
    └─network.service @9.456s +1.712s
      └─NetworkManager.service @8.858s +596ms
        └─firewalld.service @4.931s +3.926s
          └─basic.target @4.916s
            └─sockets.target @4.916s
              └─dbus.socket @4.916s
                └─sysinit.target @4.905s
                  └─systemd-update-utmp.service @4.864s +39ms
                    └─auditd.service @4.563s +301ms
                      └─systemd-tmpfiles-setup.service @4.485s +69ms
                        └─rhel-import-state.service @4.342s +142ms
                          └─local-fs.target @4.324s
                            └─boot.mount @4.286s +31ms
                              └─systemd-fsck@dev-disk-by\\x2duuid-79f594ad\\x2da332\\x2d4730\\x2dbb5f\\x2d85d19608096
                                └─dev-disk-by\\x2duuid-79f594ad\\x2da332\\x2d4730\\x2dbb5f\\x2d85d196080964.device @4
</code></pre><p><strong>重要</strong>：Systemctl接受服务（.service），挂载点（.mount），套接口（.socket）和设备（.device）作为单元。</p><h4 id="_7-列出所有可用单元" tabindex="-1">7. 列出所有可用单元 <a class="header-anchor" href="#_7-列出所有可用单元" aria-label="Permalink to “7. 列出所有可用单元”">​</a></h4><pre><code># systemctl list-unit-files

UNIT FILE                                   STATE   
proc-sys-fs-binfmt_misc.automount           static  
dev-hugepages.mount                         static  
dev-mqueue.mount                            static  
proc-sys-fs-binfmt_misc.mount               static  
sys-fs-fuse-connections.mount               static  
sys-kernel-config.mount                     static  
sys-kernel-debug.mount                      static  
tmp.mount                                   disabled
brandbot.path                               disabled
.....
</code></pre><h4 id="_8-列出所有运行中单元" tabindex="-1">8. 列出所有运行中单元 <a class="header-anchor" href="#_8-列出所有运行中单元" aria-label="Permalink to “8. 列出所有运行中单元”">​</a></h4><pre><code># systemctl list-units

UNIT                                        LOAD   ACTIVE SUB       DESCRIPTION
proc-sys-fs-binfmt_misc.automount           loaded active waiting   Arbitrary Executable File Formats File Syste
sys-devices-pc...0-1:0:0:0-block-sr0.device loaded active plugged   VBOX_CD-ROM
sys-devices-pc...:00:03.0-net-enp0s3.device loaded active plugged   PRO/1000 MT Desktop Adapter
sys-devices-pc...00:05.0-sound-card0.device loaded active plugged   82801AA AC&#39;97 Audio Controller
sys-devices-pc...:0:0-block-sda-sda1.device loaded active plugged   VBOX_HARDDISK
sys-devices-pc...:0:0-block-sda-sda2.device loaded active plugged   LVM PV Qzyo3l-qYaL-uRUa-Cjuk-pljo-qKtX-VgBQ8
sys-devices-pc...0-2:0:0:0-block-sda.device loaded active plugged   VBOX_HARDDISK
sys-devices-pl...erial8250-tty-ttyS0.device loaded active plugged   /sys/devices/platform/serial8250/tty/ttyS0
sys-devices-pl...erial8250-tty-ttyS1.device loaded active plugged   /sys/devices/platform/serial8250/tty/ttyS1
sys-devices-pl...erial8250-tty-ttyS2.device loaded active plugged   /sys/devices/platform/serial8250/tty/ttyS2
sys-devices-pl...erial8250-tty-ttyS3.device loaded active plugged   /sys/devices/platform/serial8250/tty/ttyS3
sys-devices-virtual-block-dm\\x2d0.device    loaded active plugged   /sys/devices/virtual/block/dm-0
sys-devices-virtual-block-dm\\x2d1.device    loaded active plugged   /sys/devices/virtual/block/dm-1
sys-module-configfs.device                  loaded active plugged   /sys/module/configfs
...
</code></pre><h4 id="_9-列出所有失败单元" tabindex="-1">9. 列出所有失败单元 <a class="header-anchor" href="#_9-列出所有失败单元" aria-label="Permalink to “9. 列出所有失败单元”">​</a></h4><pre><code># systemctl --failed

UNIT          LOAD   ACTIVE SUB    DESCRIPTION
kdump.service loaded failed failed Crash recovery kernel arming

LOAD   = Reflects whether the unit definition was properly loaded.
ACTIVE = The high-level unit activation state, i.e. generalization of SUB.
SUB    = The low-level unit activation state, values depend on unit type.

1 loaded units listed. Pass --all to see loaded but inactive units, too.
To show all installed unit files use &#39;systemctl list-unit-files&#39;.
</code></pre><h4 id="_10-检查某个单元-如-cron-service-是否启用" tabindex="-1">10. 检查某个单元（如 cron.service）是否启用 <a class="header-anchor" href="#_10-检查某个单元-如-cron-service-是否启用" aria-label="Permalink to “10. 检查某个单元（如 cron.service）是否启用”">​</a></h4><pre><code># systemctl is-enabled crond.service

enabled
</code></pre><h4 id="_11-检查某个单元或服务是否运行" tabindex="-1">11. 检查某个单元或服务是否运行 <a class="header-anchor" href="#_11-检查某个单元或服务是否运行" aria-label="Permalink to “11. 检查某个单元或服务是否运行”">​</a></h4><pre><code># systemctl status firewalld.service

firewalld.service - firewalld - dynamic firewall daemon
   Loaded: loaded (/usr/lib/systemd/system/firewalld.service; enabled)
   Active: active (running) since Tue 2015-04-28 16:27:55 IST; 34min ago
 Main PID: 549 (firewalld)
   CGroup: /system.slice/firewalld.service
           └─549 /usr/bin/python -Es /usr/sbin/firewalld --nofork --nopid

Apr 28 16:27:51 tecmint systemd[1]: Starting firewalld - dynamic firewall daemon...
Apr 28 16:27:55 tecmint systemd[1]: Started firewalld - dynamic firewall daemon.
</code></pre><h3 id="使用systemctl控制并管理服务" tabindex="-1">使用Systemctl控制并管理服务 <a class="header-anchor" href="#使用systemctl控制并管理服务" aria-label="Permalink to “使用Systemctl控制并管理服务”">​</a></h3><h4 id="_12-列出所有服务-包括启用的和禁用的" tabindex="-1">12. 列出所有服务（包括启用的和禁用的） <a class="header-anchor" href="#_12-列出所有服务-包括启用的和禁用的" aria-label="Permalink to “12. 列出所有服务（包括启用的和禁用的）”">​</a></h4><pre><code># systemctl list-unit-files --type=service

UNIT FILE                                   STATE   
arp-ethers.service                          disabled
auditd.service                              enabled 
autovt@.service                             disabled
blk-availability.service                    disabled
brandbot.service                            static  
collectd.service                            disabled
console-getty.service                       disabled
console-shell.service                       disabled
cpupower.service                            disabled
crond.service                               enabled 
dbus-org.fedoraproject.FirewallD1.service   enabled 
....
</code></pre><h4 id="_13-linux中如何启动、重启、停止、重载服务以及检查服务-如-httpd-service-状态" tabindex="-1">13. Linux中如何启动、重启、停止、重载服务以及检查服务（如 httpd.service）状态 <a class="header-anchor" href="#_13-linux中如何启动、重启、停止、重载服务以及检查服务-如-httpd-service-状态" aria-label="Permalink to “13. Linux中如何启动、重启、停止、重载服务以及检查服务（如 httpd.service）状态”">​</a></h4><pre><code># systemctl start httpd.service
# systemctl restart httpd.service
# systemctl stop httpd.service
# systemctl reload httpd.service
# systemctl status httpd.service

httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled)
   Active: active (running) since Tue 2015-04-28 17:21:30 IST; 6s ago
  Process: 2876 ExecStop=/bin/kill -WINCH \${MAINPID} (code=exited, status=0/SUCCESS)
 Main PID: 2881 (httpd)
   Status: &quot;Processing requests...&quot;
   CGroup: /system.slice/httpd.service
           ├─2881 /usr/sbin/httpd -DFOREGROUND
           ├─2884 /usr/sbin/httpd -DFOREGROUND
           ├─2885 /usr/sbin/httpd -DFOREGROUND
           ├─2886 /usr/sbin/httpd -DFOREGROUND
           ├─2887 /usr/sbin/httpd -DFOREGROUND
           └─2888 /usr/sbin/httpd -DFOREGROUND

Apr 28 17:21:30 tecmint systemd[1]: Starting The Apache HTTP Server...
Apr 28 17:21:30 tecmint httpd[2881]: AH00558: httpd: Could not reliably determine the server&#39;s fully q...ssage
Apr 28 17:21:30 tecmint systemd[1]: Started The Apache HTTP Server.
Hint: Some lines were ellipsized, use -l to show in full.
</code></pre><p><strong>注意</strong>：当我们使用systemctl的start，restart，stop和reload命令时，我们不会从终端获取到任何输出内容，只有status命令可以打印输出。</p><h4 id="_14-如何激活服务并在启动时启用或禁用服务-即系统启动时自动启动服务" tabindex="-1">14. 如何激活服务并在启动时启用或禁用服务（即系统启动时自动启动服务） <a class="header-anchor" href="#_14-如何激活服务并在启动时启用或禁用服务-即系统启动时自动启动服务" aria-label="Permalink to “14. 如何激活服务并在启动时启用或禁用服务（即系统启动时自动启动服务）”">​</a></h4><pre><code># systemctl is-active httpd.service
# systemctl enable httpd.service
# systemctl disable httpd.service
</code></pre><h4 id="_15-如何屏蔽-让它不能启动-或显示服务-如-httpd-service" tabindex="-1">15. 如何屏蔽（让它不能启动）或显示服务（如 httpd.service） <a class="header-anchor" href="#_15-如何屏蔽-让它不能启动-或显示服务-如-httpd-service" aria-label="Permalink to “15. 如何屏蔽（让它不能启动）或显示服务（如 httpd.service）”">​</a></h4><pre><code># systemctl mask httpd.service
ln -s &#39;/dev/null&#39; &#39;/etc/systemd/system/httpd.service&#39;

# systemctl unmask httpd.service
rm &#39;/etc/systemd/system/httpd.service&#39;
</code></pre><h4 id="_16-使用systemctl命令杀死服务" tabindex="-1">16. 使用systemctl命令杀死服务 <a class="header-anchor" href="#_16-使用systemctl命令杀死服务" aria-label="Permalink to “16. 使用systemctl命令杀死服务”">​</a></h4><pre><code># systemctl kill httpd
# systemctl status httpd

httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled)
   Active: failed (Result: exit-code) since Tue 2015-04-28 18:01:42 IST; 28min ago
 Main PID: 2881 (code=exited, status=0/SUCCESS)
   Status: &quot;Total requests: 0; Current requests/sec: 0; Current traffic:   0 B/sec&quot;

Apr 28 17:37:29 tecmint systemd[1]: httpd.service: Got notification message from PID 2881, but recepti...bled.
Apr 28 17:37:29 tecmint systemd[1]: httpd.service: Got notification message from PID 2881, but recepti...bled.
Apr 28 17:37:39 tecmint systemd[1]: httpd.service: Got notification message from PID 2881, but recepti...bled.
Apr 28 17:37:39 tecmint systemd[1]: httpd.service: Got notification message from PID 2881, but recepti...bled.
Apr 28 17:37:49 tecmint systemd[1]: httpd.service: Got notification message from PID 2881, but recepti...bled.
Apr 28 17:37:49 tecmint systemd[1]: httpd.service: Got notification message from PID 2881, but recepti...bled.
Apr 28 17:37:59 tecmint systemd[1]: httpd.service: Got notification message from PID 2881, but recepti...bled.
Apr 28 17:37:59 tecmint systemd[1]: httpd.service: Got notification message from PID 2881, but recepti...bled.
Apr 28 18:01:42 tecmint systemd[1]: httpd.service: control process exited, code=exited status=226
Apr 28 18:01:42 tecmint systemd[1]: Unit httpd.service entered failed state.
Hint: Some lines were ellipsized, use -l to show in full.
</code></pre><h3 id="使用systemctl控制并管理挂载点" tabindex="-1">使用Systemctl控制并管理挂载点 <a class="header-anchor" href="#使用systemctl控制并管理挂载点" aria-label="Permalink to “使用Systemctl控制并管理挂载点”">​</a></h3><h4 id="_17-列出所有系统挂载点" tabindex="-1">17. 列出所有系统挂载点 <a class="header-anchor" href="#_17-列出所有系统挂载点" aria-label="Permalink to “17. 列出所有系统挂载点”">​</a></h4><pre><code># systemctl list-unit-files --type=mount

UNIT FILE                     STATE   
dev-hugepages.mount           static  
dev-mqueue.mount              static  
proc-sys-fs-binfmt_misc.mount static  
sys-fs-fuse-connections.mount static  
sys-kernel-config.mount       static  
sys-kernel-debug.mount        static  
tmp.mount                     disabled
</code></pre><h4 id="_18-挂载、卸载、重新挂载、重载系统挂载点并检查系统中挂载点状态" tabindex="-1">18. 挂载、卸载、重新挂载、重载系统挂载点并检查系统中挂载点状态 <a class="header-anchor" href="#_18-挂载、卸载、重新挂载、重载系统挂载点并检查系统中挂载点状态" aria-label="Permalink to “18. 挂载、卸载、重新挂载、重载系统挂载点并检查系统中挂载点状态”">​</a></h4><pre><code># systemctl start tmp.mount
# systemctl stop tmp.mount
# systemctl restart tmp.mount
# systemctl reload tmp.mount
# systemctl status tmp.mount

tmp.mount - Temporary Directory
   Loaded: loaded (/usr/lib/systemd/system/tmp.mount; disabled)
   Active: active (mounted) since Tue 2015-04-28 17:46:06 IST; 2min 48s ago
    Where: /tmp
     What: tmpfs
     Docs: man:hier(7)

http://www.freedesktop.org/wiki/Software/systemd/APIFileSystems

  Process: 3908 ExecMount=/bin/mount tmpfs /tmp -t tmpfs -o mode=1777,strictatime (code=exited, status=0/SUCCESS)

Apr 28 17:46:06 tecmint systemd[1]: Mounting Temporary Directory...
Apr 28 17:46:06 tecmint systemd[1]: tmp.mount: Directory /tmp to mount over is not empty, mounting anyway.
Apr 28 17:46:06 tecmint systemd[1]: Mounted Temporary Directory.
</code></pre><h4 id="_19-在启动时激活、启用或禁用挂载点-系统启动时自动挂载" tabindex="-1">19. 在启动时激活、启用或禁用挂载点（系统启动时自动挂载） <a class="header-anchor" href="#_19-在启动时激活、启用或禁用挂载点-系统启动时自动挂载" aria-label="Permalink to “19. 在启动时激活、启用或禁用挂载点（系统启动时自动挂载）”">​</a></h4><pre><code># systemctl is-active tmp.mount
# systemctl enable tmp.mount
# systemctl disable  tmp.mount
</code></pre><h4 id="_20-在linux中屏蔽-让它不能启用-或可见挂载点" tabindex="-1">20. 在Linux中屏蔽（让它不能启用）或可见挂载点 <a class="header-anchor" href="#_20-在linux中屏蔽-让它不能启用-或可见挂载点" aria-label="Permalink to “20. 在Linux中屏蔽（让它不能启用）或可见挂载点”">​</a></h4><pre><code># systemctl mask tmp.mount

ln -s &#39;/dev/null&#39; &#39;/etc/systemd/system/tmp.mount&#39;

# systemctl unmask tmp.mount

rm &#39;/etc/systemd/system/tmp.mount&#39;
</code></pre><h3 id="使用systemctl控制并管理套接口" tabindex="-1">使用Systemctl控制并管理套接口 <a class="header-anchor" href="#使用systemctl控制并管理套接口" aria-label="Permalink to “使用Systemctl控制并管理套接口”">​</a></h3><h4 id="_21-列出所有可用系统套接口" tabindex="-1">21. 列出所有可用系统套接口 <a class="header-anchor" href="#_21-列出所有可用系统套接口" aria-label="Permalink to “21. 列出所有可用系统套接口”">​</a></h4><pre><code># systemctl list-unit-files --type=socket

UNIT FILE                    STATE   
dbus.socket                  static  
dm-event.socket              enabled 
lvm2-lvmetad.socket          enabled 
rsyncd.socket                disabled
sshd.socket                  disabled
syslog.socket                static  
systemd-initctl.socket       static  
systemd-journald.socket      static  
systemd-shutdownd.socket     static  
systemd-udevd-control.socket static  
systemd-udevd-kernel.socket  static  

11 unit files listed.
</code></pre><h4 id="_22-在linux中启动、重启、停止、重载套接口并检查其状态" tabindex="-1">22. 在Linux中启动、重启、停止、重载套接口并检查其状态#### <a class="header-anchor" href="#_22-在linux中启动、重启、停止、重载套接口并检查其状态" aria-label="Permalink to “22. 在Linux中启动、重启、停止、重载套接口并检查其状态####”">​</a></h4><pre><code># systemctl start cups.socket
# systemctl restart cups.socket
# systemctl stop cups.socket
# systemctl reload cups.socket
# systemctl status cups.socket

cups.socket - CUPS Printing Service Sockets
   Loaded: loaded (/usr/lib/systemd/system/cups.socket; enabled)
   Active: active (listening) since Tue 2015-04-28 18:10:59 IST; 8s ago
   Listen: /var/run/cups/cups.sock (Stream)

Apr 28 18:10:59 tecmint systemd[1]: Starting CUPS Printing Service Sockets.
Apr 28 18:10:59 tecmint systemd[1]: Listening on CUPS Printing Service Sockets.
</code></pre><h4 id="_23-在启动时激活套接口-并启用或禁用它-系统启动时自启动" tabindex="-1">23. 在启动时激活套接口，并启用或禁用它（系统启动时自启动） <a class="header-anchor" href="#_23-在启动时激活套接口-并启用或禁用它-系统启动时自启动" aria-label="Permalink to “23. 在启动时激活套接口，并启用或禁用它（系统启动时自启动）”">​</a></h4><pre><code># systemctl is-active cups.socket
# systemctl enable cups.socket
# systemctl disable cups.socket
</code></pre><h4 id="_24-屏蔽-使它不能启动-或显示套接口" tabindex="-1">24. 屏蔽（使它不能启动）或显示套接口 <a class="header-anchor" href="#_24-屏蔽-使它不能启动-或显示套接口" aria-label="Permalink to “24. 屏蔽（使它不能启动）或显示套接口”">​</a></h4><pre><code># systemctl mask cups.socket
ln -s &#39;/dev/null&#39; &#39;/etc/systemd/system/cups.socket&#39;

# systemctl unmask cups.socket
rm &#39;/etc/systemd/system/cups.socket&#39;
</code></pre><h3 id="服务的cpu利用率-分配额" tabindex="-1">服务的CPU利用率（分配额） <a class="header-anchor" href="#服务的cpu利用率-分配额" aria-label="Permalink to “服务的CPU利用率（分配额）”">​</a></h3><h4 id="_25-获取当前某个服务的cpu分配额-如httpd" tabindex="-1">25. 获取当前某个服务的CPU分配额（如httpd） <a class="header-anchor" href="#_25-获取当前某个服务的cpu分配额-如httpd" aria-label="Permalink to “25. 获取当前某个服务的CPU分配额（如httpd）”">​</a></h4><pre><code># systemctl show -p CPUShares httpd.service

CPUShares=1024
</code></pre><p><strong>注意</strong>：各个服务的默认CPU分配份额=1024，你可以增加/减少某个进程的CPU分配份额。</p><h4 id="_26-将某个服务-httpd-service-的cpu分配份额限制为2000-cpushares" tabindex="-1">26. 将某个服务（httpd.service）的CPU分配份额限制为2000 CPUShares/ <a class="header-anchor" href="#_26-将某个服务-httpd-service-的cpu分配份额限制为2000-cpushares" aria-label="Permalink to “26. 将某个服务（httpd.service）的CPU分配份额限制为2000 CPUShares/”">​</a></h4><pre><code># systemctl set-property httpd.service CPUShares=2000
# systemctl show -p CPUShares httpd.service

CPUShares=2000
</code></pre><p><strong>注意</strong>：当你为某个服务设置CPUShares，会自动创建一个以服务名命名的目录（如 httpd.service），里面包含了一个名为90-CPUShares.conf的文件，该文件含有CPUShare限制信息，你可以通过以下方式查看该文件：</p><pre><code># vi /etc/systemd/system/httpd.service.d/90-CPUShares.conf 

[Service]
CPUShares=2000        
</code></pre><h4 id="_27-检查某个服务的所有配置细节" tabindex="-1">27. 检查某个服务的所有配置细节 <a class="header-anchor" href="#_27-检查某个服务的所有配置细节" aria-label="Permalink to “27. 检查某个服务的所有配置细节”">​</a></h4><pre><code># systemctl show httpd

Id=httpd.service
Names=httpd.service
Requires=basic.target
Wants=system.slice
WantedBy=multi-user.target
Conflicts=shutdown.target
Before=shutdown.target multi-user.target
After=network.target remote-fs.target nss-lookup.target systemd-journald.socket basic.target system.slice
Description=The Apache HTTP Server
LoadState=loaded
ActiveState=active
SubState=running
FragmentPath=/usr/lib/systemd/system/httpd.service
....
</code></pre><h4 id="_28-分析某个服务-httpd-的关键链" tabindex="-1">28. 分析某个服务（httpd）的关键链 <a class="header-anchor" href="#_28-分析某个服务-httpd-的关键链" aria-label="Permalink to “28. 分析某个服务（httpd）的关键链”">​</a></h4><pre><code># systemd-analyze critical-chain httpd.service

The time after the unit is active or started is printed after the &quot;@&quot; character.
The time the unit takes to start is printed after the &quot;+&quot; character.

httpd.service +142ms
└─network.target @11.168s
  └─network.service @9.456s +1.712s
    └─NetworkManager.service @8.858s +596ms
      └─firewalld.service @4.931s +3.926s
        └─basic.target @4.916s
          └─sockets.target @4.916s
            └─dbus.socket @4.916s
              └─sysinit.target @4.905s
                └─systemd-update-utmp.service @4.864s +39ms
                  └─auditd.service @4.563s +301ms
                    └─systemd-tmpfiles-setup.service @4.485s +69ms
                      └─rhel-import-state.service @4.342s +142ms
                        └─local-fs.target @4.324s
                          └─boot.mount @4.286s +31ms
                            └─systemd-fsck@dev-disk-by\\x2duuid-79f594ad\\x2da332\\x2d4730\\x2dbb5f\\x2d85d196080964.service @4.092s +149ms
                              └─dev-disk-by\\x2duuid-79f594ad\\x2da332\\x2d4730\\x2dbb5f\\x2d85d196080964.device @4.092s
</code></pre><h4 id="_29-获取某个服务-httpd-的依赖性列表" tabindex="-1">29. 获取某个服务（httpd）的依赖性列表 <a class="header-anchor" href="#_29-获取某个服务-httpd-的依赖性列表" aria-label="Permalink to “29. 获取某个服务（httpd）的依赖性列表”">​</a></h4><pre><code># systemctl list-dependencies httpd.service

httpd.service
├─system.slice
└─basic.target
  ├─firewalld.service
  ├─microcode.service
  ├─rhel-autorelabel-mark.service
  ├─rhel-autorelabel.service
  ├─rhel-configure.service
  ├─rhel-dmesg.service
  ├─rhel-loadmodules.service
  ├─paths.target
  ├─slices.target
  │ ├─-.slice
  │ └─system.slice
  ├─sockets.target
  │ ├─dbus.socket
....
</code></pre><h4 id="_30-按等级列出控制组" tabindex="-1">30. 按等级列出控制组 <a class="header-anchor" href="#_30-按等级列出控制组" aria-label="Permalink to “30. 按等级列出控制组”">​</a></h4><pre><code># systemd-cgls

├─1 /usr/lib/systemd/systemd --switched-root --system --deserialize 23
├─user.slice
│ └─user-0.slice
│   └─session-1.scope
│     ├─2498 sshd: root@pts/0    
│     ├─2500 -bash
│     ├─4521 systemd-cgls
│     └─4522 systemd-cgls
└─system.slice
  ├─httpd.service
  │ ├─4440 /usr/sbin/httpd -DFOREGROUND
  │ ├─4442 /usr/sbin/httpd -DFOREGROUND
  │ ├─4443 /usr/sbin/httpd -DFOREGROUND
  │ ├─4444 /usr/sbin/httpd -DFOREGROUND
  │ ├─4445 /usr/sbin/httpd -DFOREGROUND
  │ └─4446 /usr/sbin/httpd -DFOREGROUND
  ├─polkit.service
  │ └─721 /usr/lib/polkit-1/polkitd --no-debug
....
</code></pre><h4 id="_31-按cpu、内存、输入和输出列出控制组" tabindex="-1">31. 按CPU、内存、输入和输出列出控制组 <a class="header-anchor" href="#_31-按cpu、内存、输入和输出列出控制组" aria-label="Permalink to “31. 按CPU、内存、输入和输出列出控制组”">​</a></h4><pre><code># systemd-cgtop

Path                                                              Tasks   %CPU   Memory  Input/s Output/s

/                                                                    83    1.0   437.8M        -        -
/system.slice                                                         -    0.1        -        -        -
/system.slice/mariadb.service                                         2    0.1        -        -        -
/system.slice/tuned.service                                           1    0.0        -        -        -
/system.slice/httpd.service                                           6    0.0        -        -        -
/system.slice/NetworkManager.service                                  1      -        -        -        -
/system.slice/atop.service                                            1      -        -        -        -
/system.slice/atopacct.service                                        1      -        -        -        -
/system.slice/auditd.service                                          1      -        -        -        -
/system.slice/crond.service                                           1      -        -        -        -
/system.slice/dbus.service                                            1      -        -        -        -
/system.slice/firewalld.service                                       1      -        -        -        -
/system.slice/lvm2-lvmetad.service                                    1      -        -        -        -
/system.slice/polkit.service                                          1      -        -        -        -
/system.slice/postfix.service                                         3      -        -        -        -
/system.slice/rsyslog.service                                         1      -        -        -        -
/system.slice/system-getty.slice/getty@tty1.service                   1      -        -        -        -
/system.slice/systemd-journald.service                                1      -        -        -        -
/system.slice/systemd-logind.service                                  1      -        -        -        -
/system.slice/systemd-udevd.service                                   1      -        -        -        -
/system.slice/webmin.service                                          1      -        -        -        -
/user.slice/user-0.slice/session-1.scope                              3      -        -        -        -
</code></pre><h3 id="控制系统运行等级" tabindex="-1">控制系统运行等级 <a class="header-anchor" href="#控制系统运行等级" aria-label="Permalink to “控制系统运行等级”">​</a></h3><h4 id="_32-启动系统救援模式" tabindex="-1">32. 启动系统救援模式 <a class="header-anchor" href="#_32-启动系统救援模式" aria-label="Permalink to “32. 启动系统救援模式”">​</a></h4><pre><code># systemctl rescue

Broadcast message from root@tecmint on pts/0 (Wed 2015-04-29 11:31:18 IST):

The system is going down to rescue mode NOW!
</code></pre><h4 id="_33-进入紧急模式" tabindex="-1">33. 进入紧急模式 <a class="header-anchor" href="#_33-进入紧急模式" aria-label="Permalink to “33. 进入紧急模式”">​</a></h4><pre><code># systemctl emergency

Welcome to emergency mode! After logging in, type &quot;journalctl -xb&quot; to view
system logs, &quot;systemctl reboot&quot; to reboot, &quot;systemctl default&quot; to try again
to boot into default mode.
</code></pre><h4 id="_34-列出当前使用的运行等级" tabindex="-1">34. 列出当前使用的运行等级 <a class="header-anchor" href="#_34-列出当前使用的运行等级" aria-label="Permalink to “34. 列出当前使用的运行等级”">​</a></h4><pre><code># systemctl get-default

multi-user.target
</code></pre><h4 id="_35-启动运行等级5-即图形模式" tabindex="-1">35. 启动运行等级5，即图形模式 <a class="header-anchor" href="#_35-启动运行等级5-即图形模式" aria-label="Permalink to “35. 启动运行等级5，即图形模式”">​</a></h4><pre><code># systemctl isolate runlevel5.target
或
# systemctl isolate graphical.target
</code></pre><h4 id="_36-启动运行等级3-即多用户模式-命令行" tabindex="-1">36. 启动运行等级3，即多用户模式（命令行） <a class="header-anchor" href="#_36-启动运行等级3-即多用户模式-命令行" aria-label="Permalink to “36. 启动运行等级3，即多用户模式（命令行）”">​</a></h4><pre><code># systemctl isolate runlevel3.target
或
# systemctl isolate multiuser.target
</code></pre><h4 id="_36-设置多用户模式或图形模式为默认运行等级" tabindex="-1">36. 设置多用户模式或图形模式为默认运行等级 <a class="header-anchor" href="#_36-设置多用户模式或图形模式为默认运行等级" aria-label="Permalink to “36. 设置多用户模式或图形模式为默认运行等级”">​</a></h4><pre><code># systemctl set-default runlevel3.target

# systemctl set-default runlevel5.target
</code></pre><h4 id="_37-重启、停止、挂起、休眠系统或使系统进入混合睡眠" tabindex="-1">37. 重启、停止、挂起、休眠系统或使系统进入混合睡眠 <a class="header-anchor" href="#_37-重启、停止、挂起、休眠系统或使系统进入混合睡眠" aria-label="Permalink to “37. 重启、停止、挂起、休眠系统或使系统进入混合睡眠”">​</a></h4><pre><code># systemctl reboot

# systemctl halt

# systemctl suspend

# systemctl hibernate

# systemctl hybrid-sleep
</code></pre><p>对于不知运行等级为何物的人，说明如下。</p><ul><li>Runlevel 0 : 关闭系统</li><li>Runlevel 1 : 救援？维护模式</li><li>Runlevel 3 : 多用户，无图形系统</li><li>Runlevel 4 : 多用户，无图形系统</li><li>Runlevel 5 : 多用户，图形化系统</li><li>Runlevel 6 : 关闭并重启机器</li></ul><p>到此为止吧。保持连线，进行评论。别忘了在下面的评论中为我们提供一些有价值的反馈哦。喜欢我们、与我们分享，求扩散。</p><hr>`,101)),i("p",null,[e[1]||(e[1]=t("via: ",-1)),n(s,{href:"http://www.tecmint.com/manage-services-using-systemd-and-systemctl-in-linux/"},{default:a(()=>[...e[0]||(e[0]=[t("http://www.tecmint.com/manage-services-using-systemd-and-systemctl-in-linux/",-1)])]),_:1})]),i("p",null,[e[5]||(e[5]=t("作者：",-1)),n(s,{href:"http://www.tecmint.com/author/avishek/"},{default:a(()=>[...e[2]||(e[2]=[t("Avishek Kumar",-1)])]),_:1}),e[6]||(e[6]=t(" 译者：",-1)),n(s,{href:"https://github.com/GOLinux"},{default:a(()=>[...e[3]||(e[3]=[t("GOLinux",-1)])]),_:1}),e[7]||(e[7]=t(" 校对：",-1)),n(s,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),i("p",null,[e[10]||(e[10]=t("本文由 ",-1)),n(s,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原创翻译，",-1)),n(s,{href:"https://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[t("Linux中国",-1)])]),_:1}),e[12]||(e[12]=t(" 荣誉推出",-1))])])}const S=r(m,[["render",p]]);export{k as __pageData,S as default};
