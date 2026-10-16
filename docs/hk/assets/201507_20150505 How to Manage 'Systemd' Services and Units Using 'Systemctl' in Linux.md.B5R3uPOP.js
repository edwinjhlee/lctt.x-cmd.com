import{_ as r,a0 as d,w as c,s as l,ao as o,I as i,x as t,a1 as n,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse(`{"title":"systemctl 完全指南 | LCTT x X-CMD","titleTemplate":false,"description":"systemctl 完全指南 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"systemctl 完全指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"systemctl 完全指南 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150505 How to Manage 'Systemd' Services and Units Using 'Systemctl' in Linux","title":"systemctl 完全指南","tag":"201507","desc":""},"relativePath":"201507/20150505 How to Manage 'Systemd' Services and Units Using 'Systemctl' in Linux.md","filePath":"[post].md"}`),m={name:"201507/20150505 How to Manage 'Systemd' Services and Units Using 'Systemctl' in Linux.md"};function p(h,e,y,u,v,b){const s=d("Link");return c(),l("div",null,[e[13]||(e[13]=o(`<h1 id="systemctl-完全指南" tabindex="-1">systemctl 完全指南 <a class="header-anchor" href="#systemctl-完全指南" aria-label="Permalink to “systemctl 完全指南”">​</a></h1><p>Systemctl是一個systemd工具，主要負責控制systemd系統和服務管理器。</p><p>Systemd是一個系統管理守護進程、工具和庫的集合，用於取代System V初始進程。Systemd的功能是用於集中管理和配置類UNIX系統。</p><p>在Linux生態系統中，Systemd被部署到了大多數的標準Linux發行版中，只有為數不多的幾個發行版尚未部署。Systemd通常是所有其它守護進程的父進程，但並非總是如此。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Manage-Linux-Services-Using-Systemctl.jpg" alt="Manage Linux Services Using Systemctl"></p><p><em>使用Systemctl管理Linux服務</em></p><p>本文旨在闡明在運行systemd的系統上“如何控制系統和服務”。</p><h3 id="systemd初體驗和systemctl基礎" tabindex="-1">Systemd初體驗和Systemctl基礎 <a class="header-anchor" href="#systemd初體驗和systemctl基礎" aria-label="Permalink to “Systemd初體驗和Systemctl基礎”">​</a></h3><h4 id="_1-首先檢查你的系統中是否安裝有systemd並確定當前安裝的版本" tabindex="-1">1. 首先檢查你的系統中是否安裝有systemd並確定當前安裝的版本 <a class="header-anchor" href="#_1-首先檢查你的系統中是否安裝有systemd並確定當前安裝的版本" aria-label="Permalink to “1. 首先檢查你的系統中是否安裝有systemd並確定當前安裝的版本”">​</a></h4><pre><code># systemd --version

systemd 215
+PAM +AUDIT +SELINUX +IMA +SYSVINIT +LIBCRYPTSETUP +GCRYPT +ACL +XZ -SECCOMP -APPARMOR
</code></pre><p>上例中很清楚地表明，我們安裝了215版本的systemd。</p><h4 id="_2-檢查systemd和systemctl的二進制文件和庫文件的安裝位置" tabindex="-1">2. 檢查systemd和systemctl的二進制文件和庫文件的安裝位置 <a class="header-anchor" href="#_2-檢查systemd和systemctl的二進制文件和庫文件的安裝位置" aria-label="Permalink to “2. 檢查systemd和systemctl的二進制文件和庫文件的安裝位置”">​</a></h4><pre><code># whereis systemd 
systemd: /usr/lib/systemd /etc/systemd /usr/share/systemd /usr/share/man/man1/systemd.1.gz


# whereis systemctl
systemctl: /usr/bin/systemctl /usr/share/man/man1/systemctl.1.gz
</code></pre><h4 id="_3-檢查systemd是否運行" tabindex="-1">3. 檢查systemd是否運行 <a class="header-anchor" href="#_3-檢查systemd是否運行" aria-label="Permalink to “3. 檢查systemd是否運行”">​</a></h4><pre><code># ps -eaf | grep [s]ystemd

root         1     0  0 16:27 ?        00:00:00 /usr/lib/systemd/systemd --switched-root --system --deserialize 23
root       444     1  0 16:27 ?        00:00:00 /usr/lib/systemd/systemd-journald
root       469     1  0 16:27 ?        00:00:00 /usr/lib/systemd/systemd-udevd
root       555     1  0 16:27 ?        00:00:00 /usr/lib/systemd/systemd-logind
dbus       556     1  0 16:27 ?        00:00:00 /bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation
</code></pre><p><strong>注意</strong>：systemd是作為父進程（PID=1）運行的。在上面帶（-e）參數的ps命令輸出中，選擇所有進程，（-a）選擇除會話前導外的所有進程，並使用（-f）參數輸出完整格式列表（即 -eaf）。</p><p>也請注意上例中後隨的方括號和例子中剩餘部分。方括號表達式是grep的字符類表達式的一部分。</p><h4 id="_4-分析systemd啓動進程" tabindex="-1">4. 分析systemd啓動進程 <a class="header-anchor" href="#_4-分析systemd啓動進程" aria-label="Permalink to “4. 分析systemd啓動進程”">​</a></h4><pre><code># systemd-analyze
Startup finished in 487ms (kernel) + 2.776s (initrd) + 20.229s (userspace) = 23.493s
</code></pre><h4 id="_5-分析啓動時各個進程花費的時間" tabindex="-1">5. 分析啓動時各個進程花費的時間 <a class="header-anchor" href="#_5-分析啓動時各個進程花費的時間" aria-label="Permalink to “5. 分析啓動時各個進程花費的時間”">​</a></h4><pre><code># systemd-analyze blame

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
</code></pre><h4 id="_6-分析啓動時的關鍵鏈" tabindex="-1">6. 分析啓動時的關鍵鏈 <a class="header-anchor" href="#_6-分析啓動時的關鍵鏈" aria-label="Permalink to “6. 分析啓動時的關鍵鏈”">​</a></h4><pre><code># systemd-analyze critical-chain

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
</code></pre><p><strong>重要</strong>：Systemctl接受服務（.service），掛載點（.mount），套接口（.socket）和設備（.device）作為單元。</p><h4 id="_7-列出所有可用單元" tabindex="-1">7. 列出所有可用單元 <a class="header-anchor" href="#_7-列出所有可用單元" aria-label="Permalink to “7. 列出所有可用單元”">​</a></h4><pre><code># systemctl list-unit-files

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
</code></pre><h4 id="_8-列出所有運行中單元" tabindex="-1">8. 列出所有運行中單元 <a class="header-anchor" href="#_8-列出所有運行中單元" aria-label="Permalink to “8. 列出所有運行中單元”">​</a></h4><pre><code># systemctl list-units

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
</code></pre><h4 id="_9-列出所有失敗單元" tabindex="-1">9. 列出所有失敗單元 <a class="header-anchor" href="#_9-列出所有失敗單元" aria-label="Permalink to “9. 列出所有失敗單元”">​</a></h4><pre><code># systemctl --failed

UNIT          LOAD   ACTIVE SUB    DESCRIPTION
kdump.service loaded failed failed Crash recovery kernel arming

LOAD   = Reflects whether the unit definition was properly loaded.
ACTIVE = The high-level unit activation state, i.e. generalization of SUB.
SUB    = The low-level unit activation state, values depend on unit type.

1 loaded units listed. Pass --all to see loaded but inactive units, too.
To show all installed unit files use &#39;systemctl list-unit-files&#39;.
</code></pre><h4 id="_10-檢查某個單元-如-cron-service-是否啓用" tabindex="-1">10. 檢查某個單元（如 cron.service）是否啓用 <a class="header-anchor" href="#_10-檢查某個單元-如-cron-service-是否啓用" aria-label="Permalink to “10. 檢查某個單元（如 cron.service）是否啓用”">​</a></h4><pre><code># systemctl is-enabled crond.service

enabled
</code></pre><h4 id="_11-檢查某個單元或服務是否運行" tabindex="-1">11. 檢查某個單元或服務是否運行 <a class="header-anchor" href="#_11-檢查某個單元或服務是否運行" aria-label="Permalink to “11. 檢查某個單元或服務是否運行”">​</a></h4><pre><code># systemctl status firewalld.service

firewalld.service - firewalld - dynamic firewall daemon
   Loaded: loaded (/usr/lib/systemd/system/firewalld.service; enabled)
   Active: active (running) since Tue 2015-04-28 16:27:55 IST; 34min ago
 Main PID: 549 (firewalld)
   CGroup: /system.slice/firewalld.service
           └─549 /usr/bin/python -Es /usr/sbin/firewalld --nofork --nopid

Apr 28 16:27:51 tecmint systemd[1]: Starting firewalld - dynamic firewall daemon...
Apr 28 16:27:55 tecmint systemd[1]: Started firewalld - dynamic firewall daemon.
</code></pre><h3 id="使用systemctl控制並管理服務" tabindex="-1">使用Systemctl控制並管理服務 <a class="header-anchor" href="#使用systemctl控制並管理服務" aria-label="Permalink to “使用Systemctl控制並管理服務”">​</a></h3><h4 id="_12-列出所有服務-包括啓用的和禁用的" tabindex="-1">12. 列出所有服務（包括啓用的和禁用的） <a class="header-anchor" href="#_12-列出所有服務-包括啓用的和禁用的" aria-label="Permalink to “12. 列出所有服務（包括啓用的和禁用的）”">​</a></h4><pre><code># systemctl list-unit-files --type=service

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
</code></pre><h4 id="_13-linux中如何啓動、重啓、停止、重載服務以及檢查服務-如-httpd-service-狀態" tabindex="-1">13. Linux中如何啓動、重啓、停止、重載服務以及檢查服務（如 httpd.service）狀態 <a class="header-anchor" href="#_13-linux中如何啓動、重啓、停止、重載服務以及檢查服務-如-httpd-service-狀態" aria-label="Permalink to “13. Linux中如何啓動、重啓、停止、重載服務以及檢查服務（如 httpd.service）狀態”">​</a></h4><pre><code># systemctl start httpd.service
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
</code></pre><p><strong>注意</strong>：當我們使用systemctl的start，restart，stop和reload命令時，我們不會從終端獲取到任何輸出內容，只有status命令可以打印輸出。</p><h4 id="_14-如何激活服務並在啓動時啓用或禁用服務-即系統啓動時自動啓動服務" tabindex="-1">14. 如何激活服務並在啓動時啓用或禁用服務（即系統啓動時自動啓動服務） <a class="header-anchor" href="#_14-如何激活服務並在啓動時啓用或禁用服務-即系統啓動時自動啓動服務" aria-label="Permalink to “14. 如何激活服務並在啓動時啓用或禁用服務（即系統啓動時自動啓動服務）”">​</a></h4><pre><code># systemctl is-active httpd.service
# systemctl enable httpd.service
# systemctl disable httpd.service
</code></pre><h4 id="_15-如何屏蔽-讓它不能啓動-或顯示服務-如-httpd-service" tabindex="-1">15. 如何屏蔽（讓它不能啓動）或顯示服務（如 httpd.service） <a class="header-anchor" href="#_15-如何屏蔽-讓它不能啓動-或顯示服務-如-httpd-service" aria-label="Permalink to “15. 如何屏蔽（讓它不能啓動）或顯示服務（如 httpd.service）”">​</a></h4><pre><code># systemctl mask httpd.service
ln -s &#39;/dev/null&#39; &#39;/etc/systemd/system/httpd.service&#39;

# systemctl unmask httpd.service
rm &#39;/etc/systemd/system/httpd.service&#39;
</code></pre><h4 id="_16-使用systemctl命令殺死服務" tabindex="-1">16. 使用systemctl命令殺死服務 <a class="header-anchor" href="#_16-使用systemctl命令殺死服務" aria-label="Permalink to “16. 使用systemctl命令殺死服務”">​</a></h4><pre><code># systemctl kill httpd
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
</code></pre><h3 id="使用systemctl控制並管理掛載點" tabindex="-1">使用Systemctl控制並管理掛載點 <a class="header-anchor" href="#使用systemctl控制並管理掛載點" aria-label="Permalink to “使用Systemctl控制並管理掛載點”">​</a></h3><h4 id="_17-列出所有系統掛載點" tabindex="-1">17. 列出所有系統掛載點 <a class="header-anchor" href="#_17-列出所有系統掛載點" aria-label="Permalink to “17. 列出所有系統掛載點”">​</a></h4><pre><code># systemctl list-unit-files --type=mount

UNIT FILE                     STATE   
dev-hugepages.mount           static  
dev-mqueue.mount              static  
proc-sys-fs-binfmt_misc.mount static  
sys-fs-fuse-connections.mount static  
sys-kernel-config.mount       static  
sys-kernel-debug.mount        static  
tmp.mount                     disabled
</code></pre><h4 id="_18-掛載、卸載、重新掛載、重載系統掛載點並檢查系統中掛載點狀態" tabindex="-1">18. 掛載、卸載、重新掛載、重載系統掛載點並檢查系統中掛載點狀態 <a class="header-anchor" href="#_18-掛載、卸載、重新掛載、重載系統掛載點並檢查系統中掛載點狀態" aria-label="Permalink to “18. 掛載、卸載、重新掛載、重載系統掛載點並檢查系統中掛載點狀態”">​</a></h4><pre><code># systemctl start tmp.mount
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
</code></pre><h4 id="_19-在啓動時激活、啓用或禁用掛載點-系統啓動時自動掛載" tabindex="-1">19. 在啓動時激活、啓用或禁用掛載點（系統啓動時自動掛載） <a class="header-anchor" href="#_19-在啓動時激活、啓用或禁用掛載點-系統啓動時自動掛載" aria-label="Permalink to “19. 在啓動時激活、啓用或禁用掛載點（系統啓動時自動掛載）”">​</a></h4><pre><code># systemctl is-active tmp.mount
# systemctl enable tmp.mount
# systemctl disable  tmp.mount
</code></pre><h4 id="_20-在linux中屏蔽-讓它不能啓用-或可見掛載點" tabindex="-1">20. 在Linux中屏蔽（讓它不能啓用）或可見掛載點 <a class="header-anchor" href="#_20-在linux中屏蔽-讓它不能啓用-或可見掛載點" aria-label="Permalink to “20. 在Linux中屏蔽（讓它不能啓用）或可見掛載點”">​</a></h4><pre><code># systemctl mask tmp.mount

ln -s &#39;/dev/null&#39; &#39;/etc/systemd/system/tmp.mount&#39;

# systemctl unmask tmp.mount

rm &#39;/etc/systemd/system/tmp.mount&#39;
</code></pre><h3 id="使用systemctl控制並管理套接口" tabindex="-1">使用Systemctl控制並管理套接口 <a class="header-anchor" href="#使用systemctl控制並管理套接口" aria-label="Permalink to “使用Systemctl控制並管理套接口”">​</a></h3><h4 id="_21-列出所有可用系統套接口" tabindex="-1">21. 列出所有可用系統套接口 <a class="header-anchor" href="#_21-列出所有可用系統套接口" aria-label="Permalink to “21. 列出所有可用系統套接口”">​</a></h4><pre><code># systemctl list-unit-files --type=socket

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
</code></pre><h4 id="_22-在linux中啓動、重啓、停止、重載套接口並檢查其狀態" tabindex="-1">22. 在Linux中啓動、重啓、停止、重載套接口並檢查其狀態#### <a class="header-anchor" href="#_22-在linux中啓動、重啓、停止、重載套接口並檢查其狀態" aria-label="Permalink to “22. 在Linux中啓動、重啓、停止、重載套接口並檢查其狀態####”">​</a></h4><pre><code># systemctl start cups.socket
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
</code></pre><h4 id="_23-在啓動時激活套接口-並啓用或禁用它-系統啓動時自啓動" tabindex="-1">23. 在啓動時激活套接口，並啓用或禁用它（系統啓動時自啓動） <a class="header-anchor" href="#_23-在啓動時激活套接口-並啓用或禁用它-系統啓動時自啓動" aria-label="Permalink to “23. 在啓動時激活套接口，並啓用或禁用它（系統啓動時自啓動）”">​</a></h4><pre><code># systemctl is-active cups.socket
# systemctl enable cups.socket
# systemctl disable cups.socket
</code></pre><h4 id="_24-屏蔽-使它不能啓動-或顯示套接口" tabindex="-1">24. 屏蔽（使它不能啓動）或顯示套接口 <a class="header-anchor" href="#_24-屏蔽-使它不能啓動-或顯示套接口" aria-label="Permalink to “24. 屏蔽（使它不能啓動）或顯示套接口”">​</a></h4><pre><code># systemctl mask cups.socket
ln -s &#39;/dev/null&#39; &#39;/etc/systemd/system/cups.socket&#39;

# systemctl unmask cups.socket
rm &#39;/etc/systemd/system/cups.socket&#39;
</code></pre><h3 id="服務的cpu利用率-分配額" tabindex="-1">服務的CPU利用率（分配額） <a class="header-anchor" href="#服務的cpu利用率-分配額" aria-label="Permalink to “服務的CPU利用率（分配額）”">​</a></h3><h4 id="_25-獲取當前某個服務的cpu分配額-如httpd" tabindex="-1">25. 獲取當前某個服務的CPU分配額（如httpd） <a class="header-anchor" href="#_25-獲取當前某個服務的cpu分配額-如httpd" aria-label="Permalink to “25. 獲取當前某個服務的CPU分配額（如httpd）”">​</a></h4><pre><code># systemctl show -p CPUShares httpd.service

CPUShares=1024
</code></pre><p><strong>注意</strong>：各個服務的默認CPU分配份額=1024，你可以增加/減少某個進程的CPU分配份額。</p><h4 id="_26-將某個服務-httpd-service-的cpu分配份額限制為2000-cpushares" tabindex="-1">26. 將某個服務（httpd.service）的CPU分配份額限制為2000 CPUShares/ <a class="header-anchor" href="#_26-將某個服務-httpd-service-的cpu分配份額限制為2000-cpushares" aria-label="Permalink to “26. 將某個服務（httpd.service）的CPU分配份額限制為2000 CPUShares/”">​</a></h4><pre><code># systemctl set-property httpd.service CPUShares=2000
# systemctl show -p CPUShares httpd.service

CPUShares=2000
</code></pre><p><strong>注意</strong>：當你為某個服務設置CPUShares，會自動創建一個以服務名命名的目錄（如 httpd.service），裏面包含了一個名為90-CPUShares.conf的文件，該文件含有CPUShare限制信息，你可以通過以下方式查看該文件：</p><pre><code># vi /etc/systemd/system/httpd.service.d/90-CPUShares.conf 

[Service]
CPUShares=2000        
</code></pre><h4 id="_27-檢查某個服務的所有配置細節" tabindex="-1">27. 檢查某個服務的所有配置細節 <a class="header-anchor" href="#_27-檢查某個服務的所有配置細節" aria-label="Permalink to “27. 檢查某個服務的所有配置細節”">​</a></h4><pre><code># systemctl show httpd

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
</code></pre><h4 id="_28-分析某個服務-httpd-的關鍵鏈" tabindex="-1">28. 分析某個服務（httpd）的關鍵鏈 <a class="header-anchor" href="#_28-分析某個服務-httpd-的關鍵鏈" aria-label="Permalink to “28. 分析某個服務（httpd）的關鍵鏈”">​</a></h4><pre><code># systemd-analyze critical-chain httpd.service

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
</code></pre><h4 id="_29-獲取某個服務-httpd-的依賴性列表" tabindex="-1">29. 獲取某個服務（httpd）的依賴性列表 <a class="header-anchor" href="#_29-獲取某個服務-httpd-的依賴性列表" aria-label="Permalink to “29. 獲取某個服務（httpd）的依賴性列表”">​</a></h4><pre><code># systemctl list-dependencies httpd.service

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
</code></pre><h4 id="_30-按等級列出控制組" tabindex="-1">30. 按等級列出控制組 <a class="header-anchor" href="#_30-按等級列出控制組" aria-label="Permalink to “30. 按等級列出控制組”">​</a></h4><pre><code># systemd-cgls

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
</code></pre><h4 id="_31-按cpu、內存、輸入和輸出列出控制組" tabindex="-1">31. 按CPU、內存、輸入和輸出列出控制組 <a class="header-anchor" href="#_31-按cpu、內存、輸入和輸出列出控制組" aria-label="Permalink to “31. 按CPU、內存、輸入和輸出列出控制組”">​</a></h4><pre><code># systemd-cgtop

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
</code></pre><h3 id="控制系統運行等級" tabindex="-1">控制系統運行等級 <a class="header-anchor" href="#控制系統運行等級" aria-label="Permalink to “控制系統運行等級”">​</a></h3><h4 id="_32-啓動系統救援模式" tabindex="-1">32. 啓動系統救援模式 <a class="header-anchor" href="#_32-啓動系統救援模式" aria-label="Permalink to “32. 啓動系統救援模式”">​</a></h4><pre><code># systemctl rescue

Broadcast message from root@tecmint on pts/0 (Wed 2015-04-29 11:31:18 IST):

The system is going down to rescue mode NOW!
</code></pre><h4 id="_33-進入緊急模式" tabindex="-1">33. 進入緊急模式 <a class="header-anchor" href="#_33-進入緊急模式" aria-label="Permalink to “33. 進入緊急模式”">​</a></h4><pre><code># systemctl emergency

Welcome to emergency mode! After logging in, type &quot;journalctl -xb&quot; to view
system logs, &quot;systemctl reboot&quot; to reboot, &quot;systemctl default&quot; to try again
to boot into default mode.
</code></pre><h4 id="_34-列出當前使用的運行等級" tabindex="-1">34. 列出當前使用的運行等級 <a class="header-anchor" href="#_34-列出當前使用的運行等級" aria-label="Permalink to “34. 列出當前使用的運行等級”">​</a></h4><pre><code># systemctl get-default

multi-user.target
</code></pre><h4 id="_35-啓動運行等級5-即圖形模式" tabindex="-1">35. 啓動運行等級5，即圖形模式 <a class="header-anchor" href="#_35-啓動運行等級5-即圖形模式" aria-label="Permalink to “35. 啓動運行等級5，即圖形模式”">​</a></h4><pre><code># systemctl isolate runlevel5.target
或
# systemctl isolate graphical.target
</code></pre><h4 id="_36-啓動運行等級3-即多用户模式-命令列" tabindex="-1">36. 啓動運行等級3，即多用户模式（命令列） <a class="header-anchor" href="#_36-啓動運行等級3-即多用户模式-命令列" aria-label="Permalink to “36. 啓動運行等級3，即多用户模式（命令列）”">​</a></h4><pre><code># systemctl isolate runlevel3.target
或
# systemctl isolate multiuser.target
</code></pre><h4 id="_36-設置多用户模式或圖形模式為默認運行等級" tabindex="-1">36. 設置多用户模式或圖形模式為默認運行等級 <a class="header-anchor" href="#_36-設置多用户模式或圖形模式為默認運行等級" aria-label="Permalink to “36. 設置多用户模式或圖形模式為默認運行等級”">​</a></h4><pre><code># systemctl set-default runlevel3.target

# systemctl set-default runlevel5.target
</code></pre><h4 id="_37-重啓、停止、掛起、休眠系統或使系統進入混合睡眠" tabindex="-1">37. 重啓、停止、掛起、休眠系統或使系統進入混合睡眠 <a class="header-anchor" href="#_37-重啓、停止、掛起、休眠系統或使系統進入混合睡眠" aria-label="Permalink to “37. 重啓、停止、掛起、休眠系統或使系統進入混合睡眠”">​</a></h4><pre><code># systemctl reboot

# systemctl halt

# systemctl suspend

# systemctl hibernate

# systemctl hybrid-sleep
</code></pre><p>對於不知運行等級為何物的人，説明如下。</p><ul><li>Runlevel 0 : 關閉系統</li><li>Runlevel 1 : 救援？維護模式</li><li>Runlevel 3 : 多用户，無圖形系統</li><li>Runlevel 4 : 多用户，無圖形系統</li><li>Runlevel 5 : 多用户，圖形化系統</li><li>Runlevel 6 : 關閉並重啓機器</li></ul><p>到此為止吧。保持連線，進行評論。別忘了在下面的評論中為我們提供一些有價值的反饋哦。喜歡我們、與我們分享，求擴散。</p><hr>`,101)),i("p",null,[e[1]||(e[1]=t("via: ",-1)),n(s,{href:"http://www.tecmint.com/manage-services-using-systemd-and-systemctl-in-linux/"},{default:a(()=>[...e[0]||(e[0]=[t("http://www.tecmint.com/manage-services-using-systemd-and-systemctl-in-linux/",-1)])]),_:1})]),i("p",null,[e[5]||(e[5]=t("作者：",-1)),n(s,{href:"http://www.tecmint.com/author/avishek/"},{default:a(()=>[...e[2]||(e[2]=[t("Avishek Kumar",-1)])]),_:1}),e[6]||(e[6]=t(" 譯者：",-1)),n(s,{href:"https://github.com/GOLinux"},{default:a(()=>[...e[3]||(e[3]=[t("GOLinux",-1)])]),_:1}),e[7]||(e[7]=t(" 校對：",-1)),n(s,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),i("p",null,[e[10]||(e[10]=t("本文由 ",-1)),n(s,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原創翻譯，",-1)),n(s,{href:"https://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[t("Linux中國",-1)])]),_:1}),e[12]||(e[12]=t(" 榮譽推出",-1))])])}const S=r(m,[["render",p]]);export{k as __pageData,S as default};
