import{_ as i,a0 as r,w as a,s as l,ao as p,I as u,x as n,a1 as o,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const U=JSON.parse('{"title":"让 Ubuntu 上的 Unity 在线搜索功能见鬼去吧！ | LCTT x X-CMD","titleTemplate":false,"description":"让 Ubuntu 上的 Unity 在线搜索功能见鬼去吧！ | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"让 Ubuntu 上的 Unity 在线搜索功能见鬼去吧！ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"让 Ubuntu 上的 Unity 在线搜索功能见鬼去吧！ | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/How To Disable Unity .04 LTS And Older Versions","title":"让 Ubuntu 上的 Unity 在线搜索功能见鬼去吧！","tag":"201405","desc":""},"relativePath":"201405/How To Disable Unity .04 LTS And Older Versions.md","filePath":"[post].md"}'),d={name:"201405/How To Disable Unity .04 LTS And Older Versions.md"};function m(g,t,f,h,b,c){const e=r("Link");return a(),l("div",null,[t[13]||(t[13]=p(`<h1 id="让-ubuntu-上的-unity-在线搜索功能见鬼去吧" tabindex="-1">让 Ubuntu 上的 Unity 在线搜索功能见鬼去吧！ <a class="header-anchor" href="#让-ubuntu-上的-unity-在线搜索功能见鬼去吧" aria-label="Permalink to “让 Ubuntu 上的 Unity 在线搜索功能见鬼去吧！”">​</a></h1><p>无论何时，你开始在 Unity Dash 搜索计算机中的应用程序或文件时，你的检索词将被自动发送给第三方，如亚马逊，并且第三方将依据您的搜索词显示相关结果（主要是广告）。如果你不喜欢这个功能，感觉真的打扰到你，你可以禁用它。</p><p>例如，当我在 Unity Dash 中输入 “Terminal” 时，将显示 “Terminal” 应用和 web 上其他第三方的东东（我要发狂了！我不想要这些！）。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/04/Menu_019.png" alt=""></p><p>正如上面的截图所见，Unity显示内置的 <strong>Terminal</strong> 应用、引用链接、天气链接和其他第三方的推荐，如电影等。这是非常恼人的并且在 Unity Dash 上看起来很糟。同时，它显示了太多的搜索结果，并使我迷惑。</p><p>如果你像我一样不需要这个功能，在你的终端输入以下命令：</p><pre><code>wget -q -O - https://fixubuntu.com/fixubuntu.sh | bash
</code></pre><p>上述脚本的内容如下：</p><pre><code>#!/bin/bash

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
</code></pre><p>再次，我进入到 Unity dash 的终端。现在 Unity 只显示终端应用，而不是无用的垃圾，现在 Unity Dash 看起来还不错。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/04/Menu_020.png" alt=""></p><p>全部搞定，让那些杂乱的东西再也不要回来了。</p><p>欢呼~!</p><p><strong>更新</strong>:这一招只适用Unity desktop。如果你使用其他的比如GNOME，LXDE或Xfce，你不用这么做。同时，这个在线搜索功能将不会包含在Ubuntu 14.10和即将推出的版本中。</p>`,14)),u("p",null,[t[1]||(t[1]=n("Source & Reference: ",-1)),o(e,{href:"https://fixubuntu.com/"},{default:s(()=>[...t[0]||(t[0]=[n("Fixubuntu",-1)])]),_:1})]),t[14]||(t[14]=u("hr",null,null,-1)),u("p",null,[t[3]||(t[3]=n("via: ",-1)),o(e,{href:"http://www.unixmen.com/disable-unity-online-search-feature-ubuntu-14-04-lts-older-versions/"},{default:s(()=>[...t[2]||(t[2]=[n("http://www.unixmen.com/disable-unity-online-search-feature-ubuntu-14-04-lts-older-versions/",-1)])]),_:1})]),u("p",null,[t[6]||(t[6]=n("译者：",-1)),o(e,{href:"https://github.com/tenght"},{default:s(()=>[...t[4]||(t[4]=[n("tenght",-1)])]),_:1}),t[7]||(t[7]=n(" 校对：",-1)),o(e,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...t[5]||(t[5]=[n("Caroline",-1)])]),_:1})]),u("p",null,[t[10]||(t[10]=n("本文由 ",-1)),o(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[8]||(t[8]=[n("LCTT",-1)])]),_:1}),t[11]||(t[11]=n(" 原创翻译，",-1)),o(e,{href:"http://linux.cn/"},{default:s(()=>[...t[9]||(t[9]=[n("Linux中国",-1)])]),_:1}),t[12]||(t[12]=n(" 荣誉推出",-1))])])}const C=i(d,[["render",m]]);export{U as __pageData,C as default};
