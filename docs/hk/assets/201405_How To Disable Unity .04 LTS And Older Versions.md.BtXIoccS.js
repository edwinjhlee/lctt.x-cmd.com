import{_ as i,a0 as r,w as a,s as l,ao as p,I as u,x as n,a1 as o,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const U=JSON.parse('{"title":"讓 Ubuntu 上的 Unity 在線搜索功能見鬼去吧！ | LCTT x X-CMD","titleTemplate":false,"description":"讓 Ubuntu 上的 Unity 在線搜索功能見鬼去吧！ | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"讓 Ubuntu 上的 Unity 在線搜索功能見鬼去吧！ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"讓 Ubuntu 上的 Unity 在線搜索功能見鬼去吧！ | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/How To Disable Unity .04 LTS And Older Versions","title":"讓 Ubuntu 上的 Unity 在線搜索功能見鬼去吧！","tag":"201405","desc":""},"relativePath":"201405/How To Disable Unity .04 LTS And Older Versions.md","filePath":"[post].md"}'),d={name:"201405/How To Disable Unity .04 LTS And Older Versions.md"};function m(g,t,f,h,b,c){const e=r("Link");return a(),l("div",null,[t[13]||(t[13]=p(`<h1 id="讓-ubuntu-上的-unity-在線搜索功能見鬼去吧" tabindex="-1">讓 Ubuntu 上的 Unity 在線搜索功能見鬼去吧！ <a class="header-anchor" href="#讓-ubuntu-上的-unity-在線搜索功能見鬼去吧" aria-label="Permalink to “讓 Ubuntu 上的 Unity 在線搜索功能見鬼去吧！”">​</a></h1><p>無論何時，你開始在 Unity Dash 搜索計算機中的應用程序或文件時，你的檢索詞將被自動發送給第三方，如亞馬遜，並且第三方將依據您的搜索詞顯示相關結果（主要是廣告）。如果你不喜歡這個功能，感覺真的打擾到你，你可以禁用它。</p><p>例如，當我在 Unity Dash 中輸入 “Terminal” 時，將顯示 “Terminal” 應用和 web 上其他第三方的東東（我要發狂了！我不想要這些！）。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/04/Menu_019.png" alt=""></p><p>正如上面的截圖所見，Unity顯示內置的 <strong>Terminal</strong> 應用、引用鏈接、天氣鏈接和其他第三方的推薦，如電影等。這是非常惱人的並且在 Unity Dash 上看起來很糟。同時，它顯示了太多的搜索結果，並使我迷惑。</p><p>如果你像我一樣不需要這個功能，在你的終端輸入以下命令：</p><pre><code>wget -q -O - https://fixubuntu.com/fixubuntu.sh | bash
</code></pre><p>上述腳本的內容如下：</p><pre><code>#!/bin/bash

GS=&quot;/usr/bin/gsettings&quot;
CCUL=&quot;com.canonical.Unity.lenses&quot;

# Figure out the version of Ubuntu that you&#39;re running
V=\`/usr/bin/lsb_release -rs\`
# The privacy problems started with 12.10, so earlier versions should do nothing
if awk &quot;BEGIN {exit !($V &lt; 12.10 || $V &gt;= 14.10)}&quot;; then
  echo &quot;Good news! This version of Ubuntu is not known to invade your privacy.&quot;
else

  # Check Canonical schema is present. Take first match, ignoring case.
  SCHEMA=&quot;\`$GS list-schemas | grep -i $CCUL | head -1\`&quot;
  if [ -z &quot;$SCHEMA&quot; ]
    then
    printf &quot;Error: could not find Canonical schema %s.\\n&quot; &quot;$CCUL&quot; 1&gt;&amp;2
    exit 1
  else
    CCUL=&quot;$SCHEMA&quot;
  fi

  # Turn off &quot;Remote Search&quot;, so search terms in Dash don&#39;t get sent to the internet
  $GS set $CCUL remote-content-search none

  # If you&#39;re using earlier than 13.10, uninstall unity-lens-shopping
  if [ $V \\&lt; 13.10 ]; then
    sudo apt-get remove -y unity-lens-shopping

  # If you&#39;re using a later version, disable remote scopes
  else
    $GS set $CCUL disabled-scopes \\
      &quot;[&#39;more_suggestions-amazon.scope&#39;, &#39;more_suggestions-u1ms.scope&#39;,
      &#39;more_suggestions-populartracks.scope&#39;, &#39;music-musicstore.scope&#39;,
      &#39;more_suggestions-ebay.scope&#39;, &#39;more_suggestions-ubuntushop.scope&#39;,
      &#39;more_suggestions-skimlinks.scope&#39;]&quot;
  fi;

  # Block connections to Ubuntu&#39;s ad server, just in case
  if ! grep -q &quot;127.0.0.1 productsearch.ubuntu.com&quot; /etc/hosts; then
    echo -e &quot;\\n127.0.0.1 productsearch.ubuntu.com&quot; | sudo tee -a /etc/hosts &gt;/dev/null
  fi

  echo &quot;All done. Enjoy your privacy.&quot;
fi
</code></pre><p>再次，我進入到 Unity dash 的終端。現在 Unity 只顯示終端應用，而不是無用的垃圾，現在 Unity Dash 看起來還不錯。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/04/Menu_020.png" alt=""></p><p>全部搞定，讓那些雜亂的東西再也不要回來了。</p><p>歡呼~!</p><p><strong>更新</strong>:這一招只適用Unity desktop。如果你使用其他的比如GNOME，LXDE或Xfce，你不用這麼做。同時，這個在線搜索功能將不會包含在Ubuntu 14.10和即將推出的版本中。</p>`,14)),u("p",null,[t[1]||(t[1]=n("Source & Reference: ",-1)),o(e,{href:"https://fixubuntu.com/"},{default:s(()=>[...t[0]||(t[0]=[n("Fixubuntu",-1)])]),_:1})]),t[14]||(t[14]=u("hr",null,null,-1)),u("p",null,[t[3]||(t[3]=n("via: ",-1)),o(e,{href:"http://www.unixmen.com/disable-unity-online-search-feature-ubuntu-14-04-lts-older-versions/"},{default:s(()=>[...t[2]||(t[2]=[n("http://www.unixmen.com/disable-unity-online-search-feature-ubuntu-14-04-lts-older-versions/",-1)])]),_:1})]),u("p",null,[t[6]||(t[6]=n("譯者：",-1)),o(e,{href:"https://github.com/tenght"},{default:s(()=>[...t[4]||(t[4]=[n("tenght",-1)])]),_:1}),t[7]||(t[7]=n(" 校對：",-1)),o(e,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...t[5]||(t[5]=[n("Caroline",-1)])]),_:1})]),u("p",null,[t[10]||(t[10]=n("本文由 ",-1)),o(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[8]||(t[8]=[n("LCTT",-1)])]),_:1}),t[11]||(t[11]=n(" 原創翻譯，",-1)),o(e,{href:"http://linux.cn/"},{default:s(()=>[...t[9]||(t[9]=[n("Linux中國",-1)])]),_:1}),t[12]||(t[12]=n(" 榮譽推出",-1))])])}const C=i(d,[["render",m]]);export{U as __pageData,C as default};
