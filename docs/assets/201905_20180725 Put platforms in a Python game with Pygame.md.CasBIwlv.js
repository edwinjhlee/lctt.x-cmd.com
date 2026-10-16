import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as l,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"在 Pygame 游戏中放置平台 | LCTT x X-CMD","titleTemplate":false,"description":"在 Pygame 游戏中放置平台 | LCTT (201905) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Pygame 游戏中放置平台 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Pygame 游戏中放置平台 | LCTT (201905) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201905/20180725 Put platforms in a Python game with Pygame","title":"在 Pygame 游戏中放置平台","tag":"201905","desc":""},"relativePath":"201905/20180725 Put platforms in a Python game with Pygame.md","filePath":"[post].md"}'),c={name:"201905/20180725 Put platforms in a Python game with Pygame.md"};function g(m,s,f,u,y,h){const p=o("Link");return r(),d("div",null,[s[61]||(s[61]=a("h1",{id:"在-pygame-游戏中放置平台",tabindex:"-1"},[n("在 Pygame 游戏中放置平台 "),a("a",{class:"header-anchor",href:"#在-pygame-游戏中放置平台","aria-label":"Permalink to “在 Pygame 游戏中放置平台”"},"​")],-1)),s[62]||(s[62]=a("blockquote",null,[a("p",null,"在这个从零构建一个 Python 游戏系列的第六部分中，为你的角色创建一些平台来旅行。")],-1)),s[63]||(s[63]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/header.png?itok=iq8HFoEJ",alt:""})],-1)),s[64]||(s[64]=a("p",null,"这是仍在进行中的关于使用 Pygame 模块来在 Python 3 中创建电脑游戏的系列文章的第六部分。先前的文章是：",-1)),a("ul",null,[a("li",null,[l(p,{href:"https://linux.cn/article-9071-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("通过构建一个简单的掷骰子游戏去学习怎么用 Python 编程",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10850-1.html"},{default:e(()=>[...s[1]||(s[1]=[n("使用 Python 和 Pygame 模块构建一个游戏框架",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10858-1.html"},{default:e(()=>[...s[2]||(s[2]=[n("如何在你的 Python 游戏中添加一个玩家",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10874-1.html"},{default:e(()=>[...s[3]||(s[3]=[n("用 Pygame 使你的游戏角色移动起来",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-10883-1.html"},{default:e(()=>[...s[4]||(s[4]=[n("如何向你的 Python 游戏中添加一个敌人",-1)])]),_:1})])]),s[65]||(s[65]=a("p",null,"一个平台类游戏需要平台。",-1)),a("p",null,[s[6]||(s[6]=n("在 ",-1)),l(p,{href:"https://www.pygame.org/news"},{default:e(()=>[...s[5]||(s[5]=[n("Pygame",-1)])]),_:1}),s[7]||(s[7]=n(" 中，平台本身也是个妖精，正像你那个可玩的妖精。这一点是重要的，因为有个是对象的平台，可以使你的玩家妖精更容易与之互动。",-1))]),s[66]||(s[66]=a("p",null,"创建平台有两个主要步骤。首先，你必须给该对象编写代码，然后，你必须映射出你希望该对象出现的位置。",-1)),s[67]||(s[67]=a("h3",{id:"编码平台对象",tabindex:"-1"},[n("编码平台对象 "),a("a",{class:"header-anchor",href:"#编码平台对象","aria-label":"Permalink to “编码平台对象”"},"​")],-1)),a("p",null,[s[9]||(s[9]=n("要构建一个平台对象，你要创建一个名为 ",-1)),s[10]||(s[10]=a("code",null,"Platform",-1)),s[11]||(s[11]=n(" 的类。它是一个妖精，正像你的 ",-1)),s[12]||(s[12]=a("code",null,"Player",-1)),s[13]||(s[13]=n()),l(p,{href:"https://opensource.com/article/17/12/game-python-add-a-player"},{default:e(()=>[...s[8]||(s[8]=[n("妖精",-1)])]),_:1}),s[14]||(s[14]=n(" 一样，带有很多相同的属性。",-1))]),a("p",null,[s[16]||(s[16]=n("你的 ",-1)),s[17]||(s[17]=a("code",null,"Platform",-1)),s[18]||(s[18]=n(" 类需要知道很多平台类型的信息，它应该出现在游戏世界的哪里、它应该包含的什么图片等等。这其中很多信息可能还尚不存在，这要看你为你的游戏计划了多少，但是没有关系。正如直到",-1)),l(p,{href:"https://opensource.com/article/17/12/game-python-moving-player"},{default:e(()=>[...s[15]||(s[15]=[n("移动你的游戏角色",-1)])]),_:1}),s[19]||(s[19]=n("那篇文章结束时，你都没有告诉你的玩家妖精移动速度有多快，你不必事先告诉 ",-1)),s[20]||(s[20]=a("code",null,"Platform",-1)),s[21]||(s[21]=n(" 每一件事。",-1))]),s[68]||(s[68]=i(`<p>在这系列中你所写的脚本的开头附近，创建一个新的类。在这个代码示例中前三行是用于说明上下文，因此在注释的下面添加代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import pygame</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>## 新代码如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Platform(pygame.sprite.Sprite):</span></span>
<span class="line"><span># x location, y location, img width, img height, img file    </span></span>
<span class="line"><span>def __init__(self,xloc,yloc,imgw,imgh,img):</span></span>
<span class="line"><span>    pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>    self.image = pygame.image.load(os.path.join(&#39;images&#39;,img)).convert()</span></span>
<span class="line"><span>    self.image.convert_alpha()</span></span>
<span class="line"><span>    self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>    self.rect = self.image.get_rect()</span></span>
<span class="line"><span>    self.rect.y = yloc</span></span>
<span class="line"><span>    self.rect.x = xloc</span></span></code></pre></div><p>当被调用时，这个类在某个 X 和 Y 位置上创建一个屏上对象，具有某种宽度和高度，并使用某种图像作为纹理。这与如何在屏上绘制出玩家或敌人非常类似。</p><h3 id="平台的类型" tabindex="-1">平台的类型 <a class="header-anchor" href="#平台的类型" aria-label="Permalink to “平台的类型”">​</a></h3><p>下一步是绘制出你的平台需要出现的地方。</p><h4 id="瓷砖方式" tabindex="-1">瓷砖方式 <a class="header-anchor" href="#瓷砖方式" aria-label="Permalink to “瓷砖方式”">​</a></h4><p>实现平台类游戏世界有几种不同的方法。在最初的横向滚轴游戏中，例如，马里奥超级兄弟和刺猬索尼克，这个技巧是使用“瓷砖”方式，也就是说有几个代表地面和各种平台的块，并且这些块被重复使用来制作一个关卡。你只能有 8 或 12 种不同的块，你可以将它们排列在屏幕上来创建地面、浮动的平台，以及你游戏中需要的一切其它的事物。有人发现这是制作游戏最容易的方法了，因为你只需要制作（或下载）一小组关卡素材就能创建很多不同的关卡。然而，这里的代码需要一点数学知识。</p><p><img src="https://opensource.com/sites/default/files/uploads/supertux.png" alt="Supertux, a tile-based video game" title="Supertux, a tile-based video game"></p>`,8)),a("p",null,[a("em",null,[l(p,{href:"https://www.supertux.org/"},{default:e(()=>[...s[22]||(s[22]=[n("SuperTux",-1)])]),_:1}),s[23]||(s[23]=n(" ，一个基于瓷砖的电脑游戏。",-1))])]),s[69]||(s[69]=a("h4",{id:"手工绘制方式",tabindex:"-1"},[n("手工绘制方式 "),a("a",{class:"header-anchor",href:"#手工绘制方式","aria-label":"Permalink to “手工绘制方式”"},"​")],-1)),a("p",null,[s[25]||(s[25]=n("另一种方法是将每个素材作为一个整体图像。如果你喜欢为游戏世界创建素材，那你会在用图形应用程序构建游戏世界的每个部分上花费很多时间。这种方法不需要太多的数学知识，因为所有的平台都是整体的、完整的对象，你只需要告诉 ",-1)),l(p,{href:"https://www.python.org/"},{default:e(()=>[...s[24]||(s[24]=[n("Python",-1)])]),_:1}),s[26]||(s[26]=n(" 将它们放在屏幕上的什么位置。",-1))]),s[70]||(s[70]=i('<p>每种方法都有优势和劣势，并且根据于你选择使用的方式，代码稍有不同。我将覆盖这两方面，所以你可以在你的工程中使用一种或另一种，甚至两者的混合。</p><h3 id="关卡绘制" tabindex="-1">关卡绘制 <a class="header-anchor" href="#关卡绘制" aria-label="Permalink to “关卡绘制”">​</a></h3><p>总的来说，绘制你的游戏世界是关卡设计和游戏编程中的一个重要的部分。这需要数学知识，但是没有什么太难的，而且 Python 擅长数学，它会有所帮助。</p><p>你也许发现先在纸张上设计是有用的。拿一张表格纸，并绘制一个方框来代表你的游戏窗体。在方框中绘制平台，并标记其每一个平台的 X 和 Y 坐标，以及它的宽度和高度。在方框中的实际位置没有必要是精确的，你只要保持数字合理即可。譬如，假设你的屏幕是 720 像素宽，那么你不能在一个屏幕上放 8 块 100 像素的平台。</p><p>当然，不是你游戏中的所有平台都必须容纳在一个屏幕大小的方框里，因为你的游戏将随着你的玩家行走而滚动。所以，可以继续绘制你的游戏世界到第一屏幕的右侧，直到关卡结束。</p><p>如果你更喜欢精确一点，你可以使用方格纸。当设计一个瓷砖类的游戏时，这是特别有用的，因为每个方格可以代表一个瓷砖。</p><p><img src="https://opensource.com/sites/default/files/uploads/layout.png" alt="Example of a level map" title="Example of a level map"></p><p><em>一个关卡地图示例。</em></p><h4 id="坐标系" tabindex="-1">坐标系 <a class="header-anchor" href="#坐标系" aria-label="Permalink to “坐标系”">​</a></h4>',9)),a("p",null,[s[28]||(s[28]=n("你可能已经在学校中学习过",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Cartesian_coordinate_system"},{default:e(()=>[...s[27]||(s[27]=[n("笛卡尔坐标系",-1)])]),_:1}),s[29]||(s[29]=n("。你学习的东西也适用于 Pygame，除了在 Pygame 中你的游戏世界的坐标系的原点 ",-1)),s[30]||(s[30]=a("code",null,"0,0",-1)),s[31]||(s[31]=n(" 是放置在你的屏幕的左上角而不是在中间，是你在地理课上用过的坐标是在中间的。",-1))]),s[71]||(s[71]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/uploads/pygame_coordinates.png",alt:"Example of coordinates in Pygame",title:"Example of coordinates in Pygame"})],-1)),s[72]||(s[72]=a("p",null,[a("em",null,"在 Pygame 中的坐标示例。")],-1)),s[73]||(s[73]=a("p",null,"X 轴起始于最左边的 0，向右无限增加。Y 轴起始于屏幕顶部的 0，向下延伸。",-1)),s[74]||(s[74]=a("h4",{id:"图片大小",tabindex:"-1"},[n("图片大小 "),a("a",{class:"header-anchor",href:"#图片大小","aria-label":"Permalink to “图片大小”"},"​")],-1)),a("p",null,[s[33]||(s[33]=n("如果你不知道你的玩家、敌人、平台是多大的，绘制出一个游戏世界是毫无意义的。你可以在图形程序中找到你的平台或瓷砖的尺寸。例如在 ",-1)),l(p,{href:"https://krita.org/en/"},{default:e(()=>[...s[32]||(s[32]=[n("Krita",-1)])]),_:1}),s[34]||(s[34]=n(" 中，单击“图像”菜单，并选择“属性”。你可以在“属性”窗口的最顶部处找到它的尺寸。",-1))]),s[75]||(s[75]=i(`<p>另外，你也可以创建一个简单的 Python 脚本来告诉你的一个图像的尺寸。打开一个新的文本文件，并输入这些代码到其中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from PIL import Image</span></span>
<span class="line"><span>import os.path</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if len(sys.argv) &gt; 1:</span></span>
<span class="line"><span>    print(sys.argv[1])</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    sys.exit(&#39;Syntax: identify.py [filename]&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pic = sys.argv[1]</span></span>
<span class="line"><span>dim = Image.open(pic)</span></span>
<span class="line"><span>X   = dim.size[0]</span></span>
<span class="line"><span>Y   = dim.size[1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(X,Y)</span></span></code></pre></div><p>保存该文本文件为 <code>identify.py</code>。</p><p>要使用这个脚本，你必须安装一些额外的 Python 模块，它们包含了这个脚本中新使用的关键字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pip3 install Pillow --user</span></span></code></pre></div><p>一旦安装好，在你游戏工程目录中运行这个脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./identify.py images/ground.png</span></span>
<span class="line"><span>(1080, 97)</span></span></code></pre></div><p>在这个示例中，地面平台的图形的大小是 1080 像素宽和 97 像素高。</p><h3 id="平台块" tabindex="-1">平台块 <a class="header-anchor" href="#平台块" aria-label="Permalink to “平台块”">​</a></h3><p>如果你选择单独地绘制每个素材，你必须创建想要插入到你的游戏世界中的几个平台和其它元素，每个素材都放在它自己的文件中。换句话说，你应该让每个素材都有一个文件，像这样：</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame_floating.png" alt="One image file per object" title="One image file per object"></p><p><em>每个对象一个图形文件。</em></p><p>你可以按照你希望的次数重复使用每个平台，只要确保每个文件仅包含一个平台。你不能使用一个文件包含全部素材，像这样：</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame_flattened.png" alt="Your level cannot be one image file" title="Your level cannot be one image file"></p><p><em>你的关卡不能是一个图形文件。</em></p><p>当你完成时，你可能希望你的游戏看起来像这样，但是如果你在一个大文件中创建你的关卡，你就没有方法从背景中区分出一个平台，因此，要么把对象绘制在它们自己的文件中，要么从一个更大的文件中裁剪出它们，并保存为单独的副本。</p>`,16)),a("p",null,[s[38]||(s[38]=a("strong",null,"注意：",-1)),s[39]||(s[39]=n(" 如同你的其它素材，你可以使用 ",-1)),l(p,{href:"https://www.gimp.org/"},{default:e(()=>[...s[35]||(s[35]=[n("GIMP",-1)])]),_:1}),s[40]||(s[40]=n("、Krita、",-1)),l(p,{href:"http://mypaint.org/about/"},{default:e(()=>[...s[36]||(s[36]=[n("MyPaint",-1)])]),_:1}),s[41]||(s[41]=n("，或 ",-1)),l(p,{href:"https://inkscape.org/en/"},{default:e(()=>[...s[37]||(s[37]=[n("Inkscape",-1)])]),_:1}),s[42]||(s[42]=n(" 来创建你的游戏素材。",-1))]),s[76]||(s[76]=i(`<p>平台出现在每个关卡开始的屏幕上，因此你必须在你的 <code>Level</code> 类中添加一个 <code>platform</code> 函数。在这里特例是地面平台，它重要到应该拥有它自己的一个组。通过把地面看作一组特殊类型的平台，你可以选择它是否滚动，或它上面是否可以站立，而其它平台可以漂浮在它上面。这取决于你。</p><p>添加这两个函数到你的 <code>Level</code> 类：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def ground(lvl,x,y,w,h):</span></span>
<span class="line"><span>    ground_list = pygame.sprite.Group()</span></span>
<span class="line"><span>    if lvl == 1:</span></span>
<span class="line"><span>        ground = Platform(x,y,w,h,&#39;block-ground.png&#39;)</span></span>
<span class="line"><span>        ground_list.add(ground)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if lvl == 2:</span></span>
<span class="line"><span>        print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ground_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def platform( lvl ):</span></span>
<span class="line"><span>    plat_list = pygame.sprite.Group()</span></span>
<span class="line"><span>    if lvl == 1:</span></span>
<span class="line"><span>        plat = Platform(200, worldy-97-128, 285,67,&#39;block-big.png&#39;)</span></span>
<span class="line"><span>        plat_list.add(plat)</span></span>
<span class="line"><span>        plat = Platform(500, worldy-97-320, 197,54,&#39;block-small.png&#39;)</span></span>
<span class="line"><span>        plat_list.add(plat)</span></span>
<span class="line"><span>    if lvl == 2:</span></span>
<span class="line"><span>        print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    return plat_list</span></span></code></pre></div><p><code>ground</code> 函数需要一个 X 和 Y 位置，以便 Pygame 知道在哪里放置地面平台。它也需要知道平台的宽度和高度，这样 Pygame 知道地面延伸到每个方向有多远。该函数使用你的 <code>Platform</code> 类来生成一个屏上对象，然后将这个对象添加到 <code>ground_list</code> 组。</p><p><code>platform</code> 函数本质上是相同的，除了其有更多的平台。在这个示例中，仅有两个平台，但是你可以想有多少就有多少。在进入一个平台后，在列出另一个前你必须添加它到 <code>plat_list</code> 中。如果你不添加平台到组中，那么它将不出现在你的游戏中。</p><blockquote><p><strong>提示：</strong> 很难想象你的游戏世界的 0 是在顶部，因为在真实世界中发生的情况是相反的；当估计你有多高时，你不会从上往下测量你自己，而是从脚到头顶来测量。</p><p>如果对你来说从“地面”上来构建你的游戏世界更容易，将 Y 轴值表示为负数可能有帮助。例如，你知道你的游戏世界的底部是 <code>worldy</code> 的值。因此 <code>worldy</code> 减去地面的高度（在这个示例中是 97）是你的玩家正常站立的位置。如果你的角色是 64 像素高，那么地面减去 128 正好是你的玩家的两倍高。事实上，一个放置在 128 像素处平台大约是相对于你的玩家的两层楼高度。一个平台在 -320 处比三层楼更高。等等。</p></blockquote><p>正像你现在可能所知的，如果你不使用它们，你的类和函数是没有价值的。添加这些代码到你的设置部分（第一行只是上下文，所以添加最后两行）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enemy_list  = Level.bad( 1, eloc )</span></span>
<span class="line"><span>ground_list = Level.ground( 1,0,worldy-97,1080,97 )</span></span>
<span class="line"><span>plat_list   = Level.platform( 1 )</span></span></code></pre></div><p>并把这些行加到你的主循环（再一次，第一行仅用于上下文）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enemy_list.draw(world)  # 刷新敌人</span></span>
<span class="line"><span>ground_list.draw(world)  # 刷新地面</span></span>
<span class="line"><span>plat_list.draw(world)  # 刷新平台</span></span></code></pre></div><h3 id="瓷砖平台" tabindex="-1">瓷砖平台 <a class="header-anchor" href="#瓷砖平台" aria-label="Permalink to “瓷砖平台”">​</a></h3>`,11)),a("p",null,[s[44]||(s[44]=n("瓷砖类游戏世界更容易制作，因为你只需要在前面绘制一些块，就能在游戏中一再使用它们创建每个平台。在像 ",-1)),l(p,{href:"https://opengameart.org/content/simplified-platformer-pack"},{default:e(()=>[...s[43]||(s[43]=[n("OpenGameArt.org",-1)])]),_:1}),s[45]||(s[45]=n(" 这样的网站上甚至有一套瓷砖供你来使用。",-1))]),s[77]||(s[77]=i(`<p><code>Platform</code> 类与在前面部分中的类是相同的。</p><p><code>ground</code> 和 <code>platform</code> 在 <code>Level</code> 类中，然而，必须使用循环来计算使用多少块来创建每个平台。</p><p>如果你打算在你的游戏世界中有一个坚固的地面，这种地面是很简单的。你只需要从整个窗口的一边到另一边“克隆”你的地面瓷砖。例如，你可以创建一个 X 和 Y 值的列表来规定每个瓷砖应该放置的位置，然后使用一个循环来获取每个值并绘制每一个瓷砖。这仅是一个示例，所以不要添加这到你的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Do not add this to your code</span></span>
<span class="line"><span>gloc = [0,656,64,656,128,656,192,656,256,656,320,656,384,656]</span></span></code></pre></div><p>不过，如果你仔细看，你可以看到所有的 Y 值是相同的，X 值以 64 的增量不断地增加 —— 这就是瓷砖的大小。这种重复是精确地，是计算机擅长的，因此你可以使用一点数学逻辑来让计算机为你做所有的计算：</p><p>添加这些到你的脚本的设置部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gloc = []</span></span>
<span class="line"><span>tx   = 64</span></span>
<span class="line"><span>ty   = 64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=0</span></span>
<span class="line"><span>while i &lt;= (worldx/tx)+tx:</span></span>
<span class="line"><span>    gloc.append(i*tx)</span></span>
<span class="line"><span>    i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ground_list = Level.ground( 1,gloc,tx,ty )</span></span></code></pre></div><p>现在，不管你的窗口的大小，Python 会通过瓷砖的宽度分割游戏世界的宽度，并创建一个数组列表列出每个 X 值。这里不计算 Y 值，因为在平的地面上这个从不会变化。</p><p>为了在一个函数中使用数组，使用一个 <code>while</code> 循环，查看每个条目并在适当的位置添加一个地面瓷砖：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def ground(lvl,gloc,tx,ty):</span></span>
<span class="line"><span>    ground_list = pygame.sprite.Group()</span></span>
<span class="line"><span>    i=0</span></span>
<span class="line"><span>    if lvl == 1:</span></span>
<span class="line"><span>        while i &lt; len(gloc):</span></span>
<span class="line"><span>            ground = Platform(gloc[i],worldy-ty,tx,ty,&#39;tile-ground.png&#39;)</span></span>
<span class="line"><span>            ground_list.add(ground)</span></span>
<span class="line"><span>            i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if lvl == 2:</span></span>
<span class="line"><span>        print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ground_list</span></span></code></pre></div><p>除了 <code>while</code> 循环，这几乎与在上面一部分中提供的瓷砖类平台的 <code>ground</code> 函数的代码相同。</p><p>对于移动的平台，原理是相似的，但是这里有一些技巧可以使它简单。</p><p>你可以通过它的起始像素（它的 X 值）、距地面的高度（它的 Y 值）、绘制多少瓷砖来定义一个平台，而不是通过像素绘制每个平台。这样，你不必操心每个平台的宽度和高度。</p><p>这个技巧的逻辑有一点复杂，因此请仔细复制这些代码。有一个 <code>while</code> 循环嵌套在另一个 <code>while</code> 循环的内部，因为这个函数必须考虑每个数组项的三个值来成功地建造一个完整的平台。在这个示例中，这里仅有三个平台以 <code>ploc.append</code> 语句定义，但是你的游戏可能需要更多，因此你需要多少就定义多少。当然，有一些不会出现，因为它们远在屏幕外，但是一旦当你进行滚动时，它们将呈现在眼前。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def platform(lvl,tx,ty):</span></span>
<span class="line"><span>    plat_list = pygame.sprite.Group()</span></span>
<span class="line"><span>    ploc = []</span></span>
<span class="line"><span>    i=0</span></span>
<span class="line"><span>    if lvl == 1:</span></span>
<span class="line"><span>        ploc.append((200,worldy-ty-128,3))</span></span>
<span class="line"><span>        ploc.append((300,worldy-ty-256,3))</span></span>
<span class="line"><span>        ploc.append((500,worldy-ty-128,4))</span></span>
<span class="line"><span>        while i &lt; len(ploc):</span></span>
<span class="line"><span>            j=0</span></span>
<span class="line"><span>            while j &lt;= ploc[i][2]:</span></span>
<span class="line"><span>                plat = Platform((ploc[i][0]+(j*tx)),ploc[i][1],tx,ty,&#39;tile.png&#39;)</span></span>
<span class="line"><span>                plat_list.add(plat)</span></span>
<span class="line"><span>                j=j+1</span></span>
<span class="line"><span>            print(&#39;run&#39; + str(i) + str(ploc[i]))</span></span>
<span class="line"><span>            i=i+1</span></span>
<span class="line"><span>           </span></span>
<span class="line"><span>    if lvl == 2:</span></span>
<span class="line"><span>        print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return plat_list</span></span></code></pre></div><p>要让这些平台出现在你的游戏世界，它们必须出现在你的主循环中。如果你还没有这样做，添加这些行到你的主循环（再一次，第一行仅被用于上下文）中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        enemy_list.draw(world)  # 刷新敌人</span></span>
<span class="line"><span>        ground_list.draw(world) # 刷新地面</span></span>
<span class="line"><span>        plat_list.draw(world)   # 刷新平台</span></span></code></pre></div><p>启动你的游戏，根据需要调整你的平台的放置位置。如果你看不见屏幕外产生的平台，不要担心；你不久后就可以修复它。</p><p>到目前为止，这是游戏的图片和代码：</p><p><img src="https://opensource.com/sites/default/files/uploads/pygame_platforms.jpg" alt="Pygame game" title="Pygame game"></p><p><em>到目前为止，我们的 Pygame 平台。</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span># draw a world</span></span>
<span class="line"><span># add a player and player control</span></span>
<span class="line"><span># add player movement</span></span>
<span class="line"><span># add enemy and basic collision</span></span>
<span class="line"><span># add platform</span></span>
<span class="line"><span></span></span>
<span class="line"><span># GNU All-Permissive License</span></span>
<span class="line"><span># Copying and distribution of this file, with or without modification,</span></span>
<span class="line"><span># are permitted in any medium without royalty provided the copyright</span></span>
<span class="line"><span># notice and this notice are preserved.  This file is offered as-is,</span></span>
<span class="line"><span># without any warranty.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import pygame</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Objects</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Platform(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    # x location, y location, img width, img height, img file    </span></span>
<span class="line"><span>    def __init__(self,xloc,yloc,imgw,imgh,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img)).convert()</span></span>
<span class="line"><span>        self.image.convert_alpha()</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.y = yloc</span></span>
<span class="line"><span>        self.rect.x = xloc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Player(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    Spawn a player</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.movex = 0</span></span>
<span class="line"><span>        self.movey = 0</span></span>
<span class="line"><span>        self.frame = 0</span></span>
<span class="line"><span>        self.health = 10</span></span>
<span class="line"><span>        self.score = 1</span></span>
<span class="line"><span>        self.images = []</span></span>
<span class="line"><span>        for i in range(1,9):</span></span>
<span class="line"><span>            img = pygame.image.load(os.path.join(&#39;images&#39;,&#39;hero&#39; + str(i) + &#39;.png&#39;)).convert()</span></span>
<span class="line"><span>            img.convert_alpha()</span></span>
<span class="line"><span>            img.set_colorkey(ALPHA)</span></span>
<span class="line"><span>            self.images.append(img)</span></span>
<span class="line"><span>            self.image = self.images[0]</span></span>
<span class="line"><span>            self.rect  = self.image.get_rect()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def control(self,x,y):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        control player movement</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        self.movex += x</span></span>
<span class="line"><span>        self.movey += y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def update(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        Update sprite position</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.rect.x = self.rect.x + self.movex</span></span>
<span class="line"><span>        self.rect.y = self.rect.y + self.movey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # moving left</span></span>
<span class="line"><span>        if self.movex &lt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[self.frame//ani]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # moving right</span></span>
<span class="line"><span>        if self.movex &gt; 0:</span></span>
<span class="line"><span>            self.frame += 1</span></span>
<span class="line"><span>            if self.frame &gt; ani*3:</span></span>
<span class="line"><span>                self.frame = 0</span></span>
<span class="line"><span>            self.image = self.images[(self.frame//ani)+4]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # collisions</span></span>
<span class="line"><span>        enemy_hit_list = pygame.sprite.spritecollide(self, enemy_list, False)</span></span>
<span class="line"><span>        for enemy in enemy_hit_list:</span></span>
<span class="line"><span>            self.health -= 1</span></span>
<span class="line"><span>            print(self.health)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ground_hit_list = pygame.sprite.spritecollide(self, ground_list, False)</span></span>
<span class="line"><span>        for g in ground_hit_list:</span></span>
<span class="line"><span>            self.health -= 1</span></span>
<span class="line"><span>            print(self.health)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Enemy(pygame.sprite.Sprite):</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    Spawn an enemy</span></span>
<span class="line"><span>    &#39;&#39;&#39;</span></span>
<span class="line"><span>    def __init__(self,x,y,img):</span></span>
<span class="line"><span>        pygame.sprite.Sprite.__init__(self)</span></span>
<span class="line"><span>        self.image = pygame.image.load(os.path.join(&#39;images&#39;,img))</span></span>
<span class="line"><span>        #self.image.convert_alpha()</span></span>
<span class="line"><span>        #self.image.set_colorkey(ALPHA)</span></span>
<span class="line"><span>        self.rect = self.image.get_rect()</span></span>
<span class="line"><span>        self.rect.x = x</span></span>
<span class="line"><span>        self.rect.y = y</span></span>
<span class="line"><span>        self.counter = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def move(self):</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        enemy movement</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>        distance = 80</span></span>
<span class="line"><span>        speed = 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if self.counter &gt;= 0 and self.counter &lt;= distance:</span></span>
<span class="line"><span>            self.rect.x += speed</span></span>
<span class="line"><span>        elif self.counter &gt;= distance and self.counter &lt;= distance*2:</span></span>
<span class="line"><span>            self.rect.x -= speed</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            self.counter = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.counter += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Level():</span></span>
<span class="line"><span>    def bad(lvl,eloc):</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            enemy = Enemy(eloc[0],eloc[1],&#39;yeti.png&#39;) # spawn enemy</span></span>
<span class="line"><span>            enemy_list = pygame.sprite.Group() # create enemy group</span></span>
<span class="line"><span>            enemy_list.add(enemy)              # add enemy to group</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return enemy_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def loot(lvl,lloc):</span></span>
<span class="line"><span>        print(lvl)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def ground(lvl,gloc,tx,ty):</span></span>
<span class="line"><span>        ground_list = pygame.sprite.Group()</span></span>
<span class="line"><span>        i=0</span></span>
<span class="line"><span>        if lvl == 1:</span></span>
<span class="line"><span>            while i &lt; len(gloc):</span></span>
<span class="line"><span>                print(&quot;blockgen:&quot; + str(i))</span></span>
<span class="line"><span>                ground = Platform(gloc[i],worldy-ty,tx,ty,&#39;ground.png&#39;)</span></span>
<span class="line"><span>                ground_list.add(ground)</span></span>
<span class="line"><span>                i=i+1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if lvl == 2:</span></span>
<span class="line"><span>            print(&quot;Level &quot; + str(lvl) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return ground_list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Setup</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>worldx = 960</span></span>
<span class="line"><span>worldy = 720</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fps = 40 # frame rate</span></span>
<span class="line"><span>ani = 4  # animation cycles</span></span>
<span class="line"><span>clock = pygame.time.Clock()</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>main = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BLUE  = (25,25,200)</span></span>
<span class="line"><span>BLACK = (23,23,23 )</span></span>
<span class="line"><span>WHITE = (254,254,254)</span></span>
<span class="line"><span>ALPHA = (0,255,0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>world = pygame.display.set_mode([worldx,worldy])</span></span>
<span class="line"><span>backdrop = pygame.image.load(os.path.join(&#39;images&#39;,&#39;stage.png&#39;)).convert()</span></span>
<span class="line"><span>backdropbox = world.get_rect()</span></span>
<span class="line"><span>player = Player() # spawn player</span></span>
<span class="line"><span>player.rect.x = 0</span></span>
<span class="line"><span>player.rect.y = 0</span></span>
<span class="line"><span>player_list = pygame.sprite.Group()</span></span>
<span class="line"><span>player_list.add(player)</span></span>
<span class="line"><span>steps = 10 # how fast to move</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eloc = []</span></span>
<span class="line"><span>eloc = [200,20]</span></span>
<span class="line"><span>gloc = []</span></span>
<span class="line"><span>#gloc = [0,630,64,630,128,630,192,630,256,630,320,630,384,630]</span></span>
<span class="line"><span>tx = 64 #tile size</span></span>
<span class="line"><span>ty = 64 #tile size</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i=0</span></span>
<span class="line"><span>while i &lt;= (worldx/tx)+tx:</span></span>
<span class="line"><span>    gloc.append(i*tx)</span></span>
<span class="line"><span>    i=i+1</span></span>
<span class="line"><span>    print(&quot;block: &quot; + str(i))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>enemy_list = Level.bad( 1, eloc )</span></span>
<span class="line"><span>ground_list = Level.ground( 1,gloc,tx,ty )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>Main loop</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>while main == True:</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            pygame.quit(); sys.exit()</span></span>
<span class="line"><span>            main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYDOWN:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_UP or event.key == ord(&#39;w&#39;):</span></span>
<span class="line"><span>                print(&#39;jump&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if event.type == pygame.KEYUP:</span></span>
<span class="line"><span>            if event.key == pygame.K_LEFT or event.key == ord(&#39;a&#39;):</span></span>
<span class="line"><span>                player.control(steps,0)</span></span>
<span class="line"><span>            if event.key == pygame.K_RIGHT or event.key == ord(&#39;d&#39;):</span></span>
<span class="line"><span>                player.control(-steps,0)</span></span>
<span class="line"><span>            if event.key == ord(&#39;q&#39;):</span></span>
<span class="line"><span>                pygame.quit()</span></span>
<span class="line"><span>                sys.exit()</span></span>
<span class="line"><span>                main = False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#    world.fill(BLACK)</span></span>
<span class="line"><span>    world.blit(backdrop, backdropbox)</span></span>
<span class="line"><span>    player.update()</span></span>
<span class="line"><span>    player_list.draw(world) #refresh player position</span></span>
<span class="line"><span>    enemy_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    ground_list.draw(world)  # refresh enemies</span></span>
<span class="line"><span>    for e in enemy_list:</span></span>
<span class="line"><span>        e.move()</span></span>
<span class="line"><span>    pygame.display.flip()</span></span>
<span class="line"><span>    clock.tick(fps)</span></span></code></pre></div><p>（LCTT 译注：到本文翻译完为止，该系列已经近一年没有继续更新了~）</p><hr>`,24)),a("p",null,[s[47]||(s[47]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/18/7/put-platforms-python-game"},{default:e(()=>[...s[46]||(s[46]=[n("https://opensource.com/article/18/7/put-platforms-python-game",-1)])]),_:1})]),a("p",null,[s[52]||(s[52]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[48]||(s[48]=[n("Seth Kenlon",-1)])]),_:1}),s[53]||(s[53]=n(" 选题：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[49]||(s[49]=[n("lujun9972",-1)])]),_:1}),s[54]||(s[54]=n(" 译者：",-1)),l(p,{href:"https://github.com/robsean"},{default:e(()=>[...s[50]||(s[50]=[n("robsean",-1)])]),_:1}),s[55]||(s[55]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[51]||(s[51]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[58]||(s[58]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[56]||(s[56]=[n("LCTT",-1)])]),_:1}),s[59]||(s[59]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[57]||(s[57]=[n("Linux中国",-1)])]),_:1}),s[60]||(s[60]=n(" 荣誉推出",-1))])])}const x=t(c,[["render",g]]);export{v as __pageData,x as default};
