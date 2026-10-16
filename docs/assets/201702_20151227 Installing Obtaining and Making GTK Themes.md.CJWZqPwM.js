import{_ as o,a0 as i,w as t,s as r,I as a,x as s,a1 as e,A as l,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"如何获取、安装和制作 GTK 主题 | LCTT x X-CMD","titleTemplate":false,"description":"如何获取、安装和制作 GTK 主题 | LCTT (201702) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何获取、安装和制作 GTK 主题 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何获取、安装和制作 GTK 主题 | LCTT (201702) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201702/20151227 Installing Obtaining and Making GTK Themes","title":"如何获取、安装和制作 GTK 主题","tag":"201702","desc":""},"relativePath":"201702/20151227 Installing Obtaining and Making GTK Themes.md","filePath":"[post].md"}'),d={name:"201702/20151227 Installing Obtaining and Making GTK Themes.md"};function g(u,n,b,f,h,m){const p=i("Link");return t(),r("div",null,[n[53]||(n[53]=a("h1",{id:"如何获取、安装和制作-gtk-主题",tabindex:"-1"},[s("如何获取、安装和制作 GTK 主题 "),a("a",{class:"header-anchor",href:"#如何获取、安装和制作-gtk-主题","aria-label":"Permalink to “如何获取、安装和制作 GTK 主题”"},"​")],-1)),n[54]||(n[54]=a("p",null,"多数桌面版 Linux 都支持主题。GUI（LCTT 译注：图形用户界面）独有的外观或者“风格”叫做主题。用户可以改变主题让桌面看起来与众不同。通常，用户也会更改图标，然而，主题和图标包是两个独立的实体。很多人想制作他们自己的主题，因此这是一篇关于 GTK 主题的制作以及各种制作时所必需的信息的文章。",-1)),n[55]||(n[55]=a("p",null,[a("strong",null,"注意："),s(" 这篇文章着重讨论 GTK3，但会稍微谈一下 GTK2、Metacity 等。本文不会讨论光标和图标。")],-1)),n[56]||(n[56]=a("p",null,"###基本概念",-1)),a("p",null,[n[1]||(n[1]=s("GIMP 工具包（简称 GTK）是一个用来在多种系统上（因此造就了 GTK 的跨平台）创建图形用户界面的构件工具包。GTK（",-1)),e(p,{href:"http://www.gtk.org/"},{default:l(()=>[...n[0]||(n[0]=[s("http://www.gtk.org/",-1)])]),_:1}),n[2]||(n[2]=s("）通常被误认为代表“GNOME 工具包”，但实际上它代表“GIMP 工具包”，因为最初创造它是为了给 GIMP 设计用户界面。GTK 是一个用 C 语言编写的面向对象工具包（GTK 本身不是一种语言）。GTK 遵循 LGPL 协议完全开源。GTK 是一个广泛使用的图形用户界面工具包，它含有很多用于 GTK 的工具。",-1))]),n[57]||(n[57]=c(`<p>为 GTK 制作的主题无法用在基于 Qt 的应用上。QT 应用需要使用 Qt 主题。</p><p>主题使用层叠样式表（CSS）来生成主题样式。这里的 CSS 和网站开发者在网页上使用的相同。然而不是引用 HTML 标签，而是引用 GTK 构件的专用标签。学习 CSS 对主题开发者来说很重要。</p><h3 id="主题存放位置" tabindex="-1">主题存放位置 <a class="header-anchor" href="#主题存放位置" aria-label="Permalink to “主题存放位置”">​</a></h3><p>主题可能会存储在 <code>~/.themes</code> 或者 <code>/usr/share/themes</code> 文件夹中。存放在 <code>~/.themes</code> 文件夹下的主题只有此 home 文件夹的所有者可以使用。而存放在 <code>/usr/share/themes</code> 文件夹下的全局主题可供所有用户使用。当执行 GTK 程序时，它会按照某种确定的顺序检查可用主题文件的列表。如果没有找到主题文件，它会尝试检查列表中的下一个文件。下述文字是 GTK3 程序检查时的顺序列表。</p><ol><li><code>$XDG_CONFIG_HOME/gtk-3.0/gtk.css</code> （另一写法 <code>~/.config/gtk-3.0/gtk.css</code>）</li><li><code>~/.themes/NAME/gtk-3.0/gtk.css</code></li><li><code>$datadir/share/themes/NAME/gtk-3.0/gtk.css</code> （另一写法 <code>/usr/share/themes/name/gtk-3.0/gtk.css</code>）</li></ol><p><strong>注意：</strong> “NAME”代表当前主题名称。</p><p>如果有两个主题名字相同，那么存放在用户 home 文件夹（<code>~/.themes</code>）里的主题会被优先使用。开发者可以利用这个 GTK 主题查找算法的优势来测试存放在本地 home 文件夹的主题。</p><h3 id="主题引擎" tabindex="-1">主题引擎 <a class="header-anchor" href="#主题引擎" aria-label="Permalink to “主题引擎”">​</a></h3><p>主题引擎是软件的一部分，用来改变图形用户界面构件的外观。引擎通过解析主题文件来了解应当绘制多少种构件。有些引擎随着主题被开发出来。每种引擎都有优点和缺点，还有些引擎添加了某些特性和特色。</p><p>从默认软件源中可以获取很多主题引擎。Debian 系的 Linux 发行版可以执行 <code>apt-get install gtk2-engines-murrine gtk2-engines-pixbuf gtk3-engines-unico</code> 命令来安装三种不同的引擎。很多引擎同时支持 GTK2 和 GTK3。以下述列表为例：</p><ul><li>gtk2-engines-aurora - Aurora GTK2 引擎</li><li>gtk2-engines-pixbuf - Pixbuf GTK2 引擎</li><li>gtk3-engines-oxygen - 将 Oxygen 组件风格移植 GTK 的引擎</li><li>gtk3-engines-unico - Unico GTK3 引擎</li><li>gtk3-engines-xfce - 用于 Xfce 的 GTK3 引擎</li></ul><h3 id="创作-gtk3-主题" tabindex="-1">创作 GTK3 主题 <a class="header-anchor" href="#创作-gtk3-主题" aria-label="Permalink to “创作 GTK3 主题”">​</a></h3><p>开发者创作 GTK3 主题时，或者从空文件着手，或者将已有的主题作为模板。从现存主题着手可能会对新手有帮助。比如，开发者可以把主题复制到用户的 home 文件夹，然后编辑这些文件。</p><p>GTK3 主题的通用格式是新建一个以主题名字命名的文件夹。然后新建一个名为 <code>gtk-3.0</code> 的子目录，在子目录里新建一个名为 <code>gtk.css</code> 的文件。在文件 <code>gtk.css</code> 里，使用 CSS 代码写出主题的外观。为了测试可以将主题移动到 <code>~/.theme</code> 里。使用新主题并在必要时进行改进。如果有需求，开发者可以添加额外的组件，使主题支持 GTK2、Openbox、Metacity、Unity 等桌面环境。</p><p>为了阐明如何创造主题，我们会学习 Ambiance 主题，通常可以在 <code>/usr/share/themes/Ambiance</code> 找到它。此目录包含下面列出的子目录以及一个名为 <code>index.theme</code> 的文件。</p><ul><li>gtk-2.0</li><li>gtk-3.0</li><li>metacity-1</li><li>unity</li></ul><p><code>index.theme</code> 含有元数据（比如主题的名字）和一些重要的配置（比如按钮的布局）。下面是 Ambiance 主题的 <code>index.theme</code> 文件内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[Desktop Entry]</span></span>
<span class="line"><span>Type=X-GNOME-Metatheme</span></span>
<span class="line"><span>Name=Ambiance</span></span>
<span class="line"><span>Comment=Ubuntu Ambiance theme</span></span>
<span class="line"><span>Encoding=UTF-8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[X-GNOME-Metatheme]</span></span>
<span class="line"><span>GtkTheme=Ambiance</span></span>
<span class="line"><span>MetacityTheme=Ambiance</span></span>
<span class="line"><span>IconTheme=ubuntu-mono-dark</span></span>
<span class="line"><span>CursorTheme=DMZ-White</span></span>
<span class="line"><span>ButtonLayout=close,minimize,maximize:</span></span>
<span class="line"><span>X-Ubuntu-UseOverlayScrollbars=true</span></span></code></pre></div><p><code>gtk-2.0</code> 目录包括支持 GTK2 的文件，比如文件 <code>gtkrc</code> 和文件夹 <code>apps</code>。文件夹 <code>apps</code> 包括具体程序的 GTK 配置。文件 <code>gtkrc</code> 是 GTK2 部分的主要 CSS 文件。下面是 <code>/usr/share/themes/Ambiance/gtk-2.0/apps/nautilus.rc</code> 文件的内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ==============================================================================</span></span>
<span class="line"><span># NAUTILUS SPECIFIC SETTINGS</span></span>
<span class="line"><span># ==============================================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>style &quot;nautilus_info_pane&quot; {</span></span>
<span class="line"><span>   bg[NORMAL] = @bg_color</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>widget_class &quot;*Nautilus*&lt;GtkNotebook&gt;*&lt;GtkEventBox&gt;&quot; style &quot;nautilus_info_pane&quot;</span></span>
<span class="line"><span>widget_class &quot;*Nautilus*&lt;GtkButton&gt;&quot; style &quot;notebook_button&quot;</span></span>
<span class="line"><span>widget_class &quot;*Nautilus*&lt;GtkButton&gt;*&lt;GtkLabel&gt;&quot; style &quot;notebook_button&quot;</span></span></code></pre></div><p><code>gtk-3.0</code> 目录里是 GTK3 的文件。GTK3 使用 <code>gtk.css</code> 取代了 <code>gtkrc</code> 作为主文件。对于 Ambiance 主题，此文件有一行 <code>@import url(&quot;gtk-main.css&quot;);</code>。<code>settings.ini</code> 包含重要的主题级配置。GTK3 主题的 <code>apps</code> 目录和 GTK2 有同样的作用。<code>assets</code> 目录里有单选按钮、多选框等的图像文件。下面是 <code>/usr/share/themes/Ambiance/gtk-3.0/gtk-main.css</code> 的内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/*default color scheme */</span></span>
<span class="line"><span>@define-color bg_color #f2f1f0;</span></span>
<span class="line"><span>@define-color fg_color #4c4c4c;</span></span>
<span class="line"><span>@define-color base_color #ffffff;</span></span>
<span class="line"><span>@define-color text_color #3C3C3C;</span></span>
<span class="line"><span>@define-color selected_bg_color #f07746;</span></span>
<span class="line"><span>@define-color selected_fg_color #ffffff;</span></span>
<span class="line"><span>@define-color tooltip_bg_color #000000;</span></span>
<span class="line"><span>@define-color tooltip_fg_color #ffffff;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* misc colors used by gtk+</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * Gtk doesn&#39;t currently expand color variables for style properties. Thus,</span></span>
<span class="line"><span> * gtk-widgets.css uses literal color names, but includes a comment containing</span></span>
<span class="line"><span> * the name of the variable. Please remember to change values there as well</span></span>
<span class="line"><span> * when changing one of the variables below.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@define-color info_fg_color rgb (181, 171, 156);</span></span>
<span class="line"><span>@define-color info_bg_color rgb (252, 252, 189);</span></span>
<span class="line"><span>@define-color warning_fg_color rgb (173, 120, 41);</span></span>
<span class="line"><span>@define-color warning_bg_color rgb (250, 173, 61);</span></span>
<span class="line"><span>@define-color question_fg_color rgb (97, 122, 214);</span></span>
<span class="line"><span>@define-color question_bg_color rgb (138, 173, 212);</span></span>
<span class="line"><span>@define-color error_fg_color rgb (235, 235, 235);</span></span>
<span class="line"><span>@define-color error_bg_color rgb (223, 56, 44);</span></span>
<span class="line"><span>@define-color link_color @selected_bg_color;</span></span>
<span class="line"><span>@define-color success_color #4e9a06;</span></span>
<span class="line"><span>@define-color error_color #df382c;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* theme common colors */</span></span>
<span class="line"><span>@define-color button_bg_color shade (@bg_color, 1.02); /*shade (#cdcdcd, 1.08);*/</span></span>
<span class="line"><span>@define-color notebook_button_bg_color shade (@bg_color, 1.02);</span></span>
<span class="line"><span>@define-color button_insensitive_bg_color mix (@button_bg_color, @bg_color, 0.6);</span></span>
<span class="line"><span>@define-color dark_bg_color #3c3b37;</span></span>
<span class="line"><span>@define-color dark_fg_color #dfdbd2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@define-color backdrop_fg_color mix (@bg_color, @fg_color, 0.8);</span></span>
<span class="line"><span>@define-color backdrop_text_color mix (@base_color, @text_color, 0.8);</span></span>
<span class="line"><span>@define-color backdrop_dark_fg_color mix (@dark_bg_color, @dark_fg_color, 0.75);</span></span>
<span class="line"><span>/*@define-color backdrop_dark_bg_color mix (@dark_bg_color, @dark_fg_color, 0.75);*/</span></span>
<span class="line"><span>@define-color backdrop_selected_bg_color shade (@bg_color, 0.92);</span></span>
<span class="line"><span>@define-color backdrop_selected_fg_color @fg_color;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@define-color focus_color alpha (@selected_bg_color, 0.5);</span></span>
<span class="line"><span>@define-color focus_bg_color alpha (@selected_bg_color, 0.1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@define-color shadow_color alpha(black, 0.5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@define-color osd_fg_color #eeeeec;</span></span>
<span class="line"><span>@define-color osd_bg_color alpha(#202526, 0.7);</span></span>
<span class="line"><span>@define-color osd_border_color alpha(black, 0.7);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@import url(&quot;gtk-widgets-borders.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;gtk-widgets-assets.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;gtk-widgets.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/geary.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/unity.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/baobab.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/gedit.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/nautilus.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/gnome-panel.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/gnome-terminal.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/gnome-system-log.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/unity-greeter.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/glade.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/california.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;apps/software-center.css&quot;);</span></span>
<span class="line"><span>@import url(&quot;public-colors.css&quot;);</span></span></code></pre></div><p><code>metacity-1</code> 文件夹含有 Metacity 窗口管理器按钮（比如“关闭窗口”按钮）的图像文件。此目录还有一个名为 <code>metacity-theme-1.xml</code> 的文件，包括了主题的元数据（像开发者的名字）和主题设计。然而，主题的 Metacity 部分使用 XML 文件而不是 CSS 文件。</p><p><code>unity</code> 文件夹含有 Unity 按钮使用的 SVG 文件。除了 SVG 文件，这里没有其他的文件。</p><p>一些主题可能也会包含其他的目录。比如， Clearlooks-Phenix 主题有名为 <code>openbox-3</code> 和 <code>xfwm4</code> 的文件夹。<code>openbox-3</code> 文件夹仅有一个 <code>themerc</code> 文件，声明了主题配置和外观（下面有文件示例）。<code>xfwm4</code> 目录含有几个 xpm 文件、几个 png 图像文件（在 <code>png</code> 文件夹里）、一个 <code>README</code> 文件，还有个包含了主题配置的 <code>themerc</code> 文件（就像下面看到的那样）。</p><p>/usr/share/themes/Clearlooks-Phenix/xfwm4/themerc</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Clearlooks XFWM4 by Casey Kirsle</span></span>
<span class="line"><span></span></span>
<span class="line"><span>show_app_icon=true</span></span>
<span class="line"><span>active_text_color=#FFFFFF</span></span>
<span class="line"><span>inactive_text_color=#939393</span></span>
<span class="line"><span>title_shadow_active=frame</span></span>
<span class="line"><span>title_shadow_inactive=false</span></span>
<span class="line"><span>button_layout=O|HMC</span></span>
<span class="line"><span>button_offset=2</span></span>
<span class="line"><span>button_spacing=2</span></span>
<span class="line"><span>full_width_title=true</span></span>
<span class="line"><span>maximized_offset=0</span></span>
<span class="line"><span>title_vertical_offset_active=1</span></span>
<span class="line"><span>title_vertical_offset_inactive=1</span></span></code></pre></div><p>/usr/share/themes/Clearlooks-Phenix/openbox-3/themerc</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>!# Clearlooks-Evolving</span></span>
<span class="line"><span>!# Clearlooks as it evolves in gnome-git...</span></span>
<span class="line"><span>!# Last updated 09/03/10</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Fonts</span></span>
<span class="line"><span># these are really halos, but who cares?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>*.font: shadow=n</span></span>
<span class="line"><span>window.active.label.text.font:shadow=y:shadowtint=30:shadowoffset=1</span></span>
<span class="line"><span>window.inactive.label.text.font:shadow=y:shadowtint=00:shadowoffset=0</span></span>
<span class="line"><span>menu.items.font:shadow=y:shadowtint=0:shadowoffset=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!# general stuff</span></span>
<span class="line"><span></span></span>
<span class="line"><span>border.width: 1</span></span>
<span class="line"><span>padding.width: 3</span></span>
<span class="line"><span>padding.height: 2</span></span>
<span class="line"><span>window.handle.width: 3</span></span>
<span class="line"><span>window.client.padding.width: 0</span></span>
<span class="line"><span>menu.overlap: 2</span></span>
<span class="line"><span>*.justify: center</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!# lets set our damn shadows here, eh?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>*.bg.highlight: 50</span></span>
<span class="line"><span>*.bg.shadow:  05</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.active.title.bg.highlight: 35</span></span>
<span class="line"><span>window.active.title.bg.shadow:  05</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.inactive.title.bg.highlight: 30</span></span>
<span class="line"><span>window.inactive.title.bg.shadow:  05</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.*.grip.bg.highlight: 50</span></span>
<span class="line"><span>window.*.grip.bg.shadow:  30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.*.handle.bg.highlight: 50</span></span>
<span class="line"><span>window.*.handle.bg.shadow:  30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!# Menu settings</span></span>
<span class="line"><span></span></span>
<span class="line"><span>menu.border.color: #aaaaaa</span></span>
<span class="line"><span>menu.border.width: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>menu.title.bg: solid flat</span></span>
<span class="line"><span>menu.title.bg.color: #E6E7E6</span></span>
<span class="line"><span>menu.title.text.color: #111111</span></span>
<span class="line"><span></span></span>
<span class="line"><span>menu.items.bg: Flat Solid</span></span>
<span class="line"><span>menu.items.bg.color: #ffffff</span></span>
<span class="line"><span>menu.items.text.color: #111111</span></span>
<span class="line"><span>menu.items.disabled.text.color: #aaaaaa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>menu.items.active.bg: Flat Gradient splitvertical border</span></span>
<span class="line"><span></span></span>
<span class="line"><span>menu.items.active.bg.color: #97b8e2</span></span>
<span class="line"><span>menu.items.active.bg.color.splitTo: #a8c5e9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>menu.items.active.bg.colorTo: #91b3de</span></span>
<span class="line"><span>menu.items.active.bg.colorTo.splitTo: #80a7d6</span></span>
<span class="line"><span>menu.items.active.bg.border.color: #4b6e99</span></span>
<span class="line"><span>menu.items.active.text.color: #ffffff</span></span>
<span class="line"><span></span></span>
<span class="line"><span>menu.separator.width: 1</span></span>
<span class="line"><span>menu.separator.padding.width: 0</span></span>
<span class="line"><span>menu.separator.padding.height: 3</span></span>
<span class="line"><span>menu.separator.color: #aaaaaa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!# set handles here and only the once?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.*.handle.bg: Raised solid</span></span>
<span class="line"><span>window.*.handle.bg.color: #eaebec</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.*.grip.bg: Raised solid</span></span>
<span class="line"><span>window.*.grip.bg.color: #eaebec</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!# Active</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.*.border.color: #585a5d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.active.title.separator.color: #4e76a8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>*.title.bg: Raised Gradient splitvertical</span></span>
<span class="line"><span>*.title.bg.color: #8CB0DC</span></span>
<span class="line"><span>*.title.bg.color.splitTo: #99BAE3</span></span>
<span class="line"><span>*.title.bg.colorTo: #86ABD9</span></span>
<span class="line"><span>*.title.bg.colorTo.splitTo: #7AA1D1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.active.label.bg: Parentrelative</span></span>
<span class="line"><span>window.active.label.text.color: #ffffff</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.active.button.*.bg: Flat Gradient splitvertical Border</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.active.button.*.bg.color: #92B4DF</span></span>
<span class="line"><span>window.active.button.*.bg.color.splitTo: #B0CAEB</span></span>
<span class="line"><span>window.active.button.*.bg.colorTo: #86ABD9</span></span>
<span class="line"><span>window.active.button.*.bg.colorTo.splitTo: #769FD0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.active.button.*.bg.border.color: #49678B</span></span>
<span class="line"><span>window.active.button.*.image.color: #F4F5F6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.active.button.hover.bg.color: #b5d3ef</span></span>
<span class="line"><span>window.active.button.hover.bg.color.splitTo: #b5d3ef</span></span>
<span class="line"><span>window.active.button.hover.bg.colorTo: #9cbae7</span></span>
<span class="line"><span>window.active.button.hover.bg.colorTo.splitTo: #8caede</span></span>
<span class="line"><span>window.active.button.hover.bg.border.color: #4A658C</span></span>
<span class="line"><span>window.active.button.hover.image.color: #ffffff</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.active.button.pressed.bg: Flat solid Border</span></span>
<span class="line"><span>window.active.button.pressed.bg.color: #7aa1d2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.active.button.hover.bg.border.color: #4A658C</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!# inactive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!#window.inactive.border.color: #7e8285</span></span>
<span class="line"><span>window.inactive.title.separator.color: #96999d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.inactive.title.bg: Raised Gradient splitvertical</span></span>
<span class="line"><span>window.inactive.title.bg.color: #E3E2E0</span></span>
<span class="line"><span>window.inactive.title.bg.color.splitTo: #EBEAE9</span></span>
<span class="line"><span>window.inactive.title.bg.colorTo: #DEDCDA</span></span>
<span class="line"><span>window.inactive.title.bg.colorTo.splitTo: #D5D3D1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.inactive.label.bg: Parentrelative</span></span>
<span class="line"><span>window.inactive.label.text.color: #70747d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.inactive.button.*.bg: Flat Gradient splitVertical Border</span></span>
<span class="line"><span>window.inactive.button.*.bg.color: #ffffff</span></span>
<span class="line"><span>window.inactive.button.*.bg.color.splitto: #ffffff</span></span>
<span class="line"><span>window.inactive.button.*.bg.colorTo: #F9F8F8</span></span>
<span class="line"><span>window.inactive.button.*.bg.colorTo.splitto: #E9E7E6</span></span>
<span class="line"><span>window.inactive.button.*.bg.border.color: #928F8B</span></span>
<span class="line"><span>window.inactive.button.*.image.color: #6D6C6C</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!# osd (pop ups and what not, dock?)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>osd.border.width: 1</span></span>
<span class="line"><span>osd.border.color:  #aaaaaa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>osd.bg: flat border gradient splitvertical</span></span>
<span class="line"><span>osd.bg.color: #F0EFEE</span></span>
<span class="line"><span>osd.bg.color.splitto: #f5f5f4</span></span>
<span class="line"><span>osd.bg.colorTo: #EAEBEC</span></span>
<span class="line"><span>osd.bg.colorTo.splitto: #E7E5E4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>osd.bg.border.color: #ffffff</span></span>
<span class="line"><span></span></span>
<span class="line"><span>osd.active.label.bg: parentrelative</span></span>
<span class="line"><span>osd.active.label.bg.color: #efefef</span></span>
<span class="line"><span>osd.active.label.bg.border.color: #9c9e9c</span></span>
<span class="line"><span>osd.active.label.text.color: #444</span></span>
<span class="line"><span></span></span>
<span class="line"><span>osd.inactive.label.bg: parentrelative</span></span>
<span class="line"><span>osd.inactive.label.text.color: #70747d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!# yeah whatever, this is fine anyhoo?</span></span>
<span class="line"><span>osd.hilight.bg: flat vertical gradient</span></span>
<span class="line"><span>osd.hilight.bg.color: #9ebde5</span></span>
<span class="line"><span>osd.hilight.bg.colorTo: #749dcf</span></span>
<span class="line"><span>osd.unhilight.bg: flat vertical gradient</span></span>
<span class="line"><span>osd.unhilight.bg.color: #BABDB6</span></span>
<span class="line"><span>osd.unhilight.bg.colorTo: #efefef</span></span></code></pre></div><h3 id="测试主题" tabindex="-1">测试主题 <a class="header-anchor" href="#测试主题" aria-label="Permalink to “测试主题”">​</a></h3><p>在创作主题时，测试主题并且微调代码对得到想要的样子是很有帮助的。有相当的开发者想要用到“主题预览器”这样的工具。幸运的是，已经有了。</p>`,31)),a("ul",null,[n[6]||(n[6]=a("li",null,[s("GTK+ Change Theme - 这个程序可以更改 GTK 主题，开发者可以用它预览主题。这个程序由一个含有很多构件的窗口组成，因此可以为主题提供一个完整的预览。要安装它，只需输入命令 "),a("code",null,"apt-get install gtk-chtheme"),s("。")],-1)),n[7]||(n[7]=a("li",null,[s("GTK Theme Switch - 用户可以使用它轻松地更换用户主题。测试主题时确保打开了一些应用，方便预览效果。要安装它，只需输入命令 "),a("code",null,"apt-get install gtk-theme-switch"),s("，然后在终端敲出 "),a("code",null,"gtk-theme-switch2"),s(" 即可运行。")],-1)),n[8]||(n[8]=a("li",null,"LXappearance - 它可以更换主题，图标以及字体。",-1)),a("li",null,[n[4]||(n[4]=s("PyWF - 这是基于 Python 开发的一个 The Widget Factory 的替代品。可以在 ",-1)),e(p,{href:"http://gtk-apps.org/content/show.php/PyTWF?content=102024"},{default:l(()=>[...n[3]||(n[3]=[s("http://gtk-apps.org/content/show.php/PyTWF?content=102024",-1)])]),_:1}),n[5]||(n[5]=s(" 获取 PyWF。",-1))]),n[9]||(n[9]=a("li",null,[s("The Widget Factory - 这是一个古老的 GTK 预览器。要安装它，只需输入命令 "),a("code",null,"apt-get install thewidgetfactory"),s("，然后在终端敲出 "),a("code",null,"twf"),s(" 即可运行。")],-1))]),n[58]||(n[58]=a("h3",{id:"主题下载",tabindex:"-1"},[s("主题下载 "),a("a",{class:"header-anchor",href:"#主题下载","aria-label":"Permalink to “主题下载”"},"​")],-1)),a("ul",null,[a("li",null,[n[11]||(n[11]=s("Cinnamon - ",-1)),e(p,{href:"http://gnome-look.org/index.php?xcontentmode=104"},{default:l(()=>[...n[10]||(n[10]=[s("http://gnome-look.org/index.php?xcontentmode=104",-1)])]),_:1})]),a("li",null,[n[13]||(n[13]=s("Compiz - ",-1)),e(p,{href:"http://gnome-look.org/index.php?xcontentmode=102"},{default:l(()=>[...n[12]||(n[12]=[s("http://gnome-look.org/index.php?xcontentmode=102",-1)])]),_:1})]),a("li",null,[n[15]||(n[15]=s("GNOME Shell - ",-1)),e(p,{href:"http://gnome-look.org/index.php?xcontentmode=191"},{default:l(()=>[...n[14]||(n[14]=[s("http://gnome-look.org/index.php?xcontentmode=191",-1)])]),_:1})]),a("li",null,[n[17]||(n[17]=s("GTK2 - ",-1)),e(p,{href:"http://gnome-look.org/index.php?xcontentmode=100"},{default:l(()=>[...n[16]||(n[16]=[s("http://gnome-look.org/index.php?xcontentmode=100",-1)])]),_:1})]),a("li",null,[n[19]||(n[19]=s("GTK3 - ",-1)),e(p,{href:"http://gnome-look.org/index.php?xcontentmode=167"},{default:l(()=>[...n[18]||(n[18]=[s("http://gnome-look.org/index.php?xcontentmode=167",-1)])]),_:1})]),a("li",null,[n[21]||(n[21]=s("KDE/Qt - ",-1)),e(p,{href:"http://kde-look.org/index.php?xcontentmode=8x9x10x11x12x13x14x15x16"},{default:l(()=>[...n[20]||(n[20]=[s("http://kde-look.org/index.php?xcontentmode=8x9x10x11x12x13x14x15x16",-1)])]),_:1})]),a("li",null,[n[23]||(n[23]=s("Linux Mint Themes - ",-1)),e(p,{href:"http://linuxmint-art.org/index.php?xcontentmode=9x14x100"},{default:l(()=>[...n[22]||(n[22]=[s("http://linuxmint-art.org/index.php?xcontentmode=9x14x100",-1)])]),_:1})]),a("li",null,[n[25]||(n[25]=s("Metacity - ",-1)),e(p,{href:"http://gnome-look.org/index.php?xcontentmode=101"},{default:l(()=>[...n[24]||(n[24]=[s("http://gnome-look.org/index.php?xcontentmode=101",-1)])]),_:1})]),a("li",null,[n[27]||(n[27]=s("Ubuntu Themes - ",-1)),e(p,{href:"http://www.ubuntuthemes.org/"},{default:l(()=>[...n[26]||(n[26]=[s("http://www.ubuntuthemes.org/",-1)])]),_:1})])]),n[59]||(n[59]=a("h3",{id:"延伸阅读",tabindex:"-1"},[s("延伸阅读 "),a("a",{class:"header-anchor",href:"#延伸阅读","aria-label":"Permalink to “延伸阅读”"},"​")],-1)),a("ul",null,[a("li",null,[n[29]||(n[29]=s("Graphical User Interface (GUI) Reading Guide - ",-1)),e(p,{href:"http://www.linux.org/threads/gui-reading-guide.6471/"},{default:l(()=>[...n[28]||(n[28]=[s("http://www.linux.org/threads/gui-reading-guide.6471/",-1)])]),_:1})]),a("li",null,[n[31]||(n[31]=s("GTK - ",-1)),e(p,{href:"http://www.linux.org/threads/understanding-gtk.6291/"},{default:l(()=>[...n[30]||(n[30]=[s("http://www.linux.org/threads/understanding-gtk.6291/",-1)])]),_:1})]),a("li",null,[n[33]||(n[33]=s("Introduction to Glade - ",-1)),e(p,{href:"http://www.linux.org/threads/introduction-to-glade.7142/"},{default:l(()=>[...n[32]||(n[32]=[s("http://www.linux.org/threads/introduction-to-glade.7142/",-1)])]),_:1})]),a("li",null,[n[35]||(n[35]=s("Desktop Environment vs Window Managers - ",-1)),e(p,{href:"http://www.linux.org/threads/desktop-environment-vs-window-managers.7802/"},{default:l(()=>[...n[34]||(n[34]=[s("http://www.linux.org/threads/desktop-environment-vs-window-managers.7802/",-1)])]),_:1})]),a("li",null,[n[37]||(n[37]=s("Official GTK+ 3 Reference Manual - ",-1)),e(p,{href:"https://developer.gnome.org/gtk3/stable/"},{default:l(()=>[...n[36]||(n[36]=[s("https://developer.gnome.org/gtk3/stable/",-1)])]),_:1})]),a("li",null,[n[39]||(n[39]=s("GtkCssProvider - ",-1)),e(p,{href:"https://developer.gnome.org/gtk3/stable/GtkCssProvider.html"},{default:l(()=>[...n[38]||(n[38]=[s("https://developer.gnome.org/gtk3/stable/GtkCssProvider.html",-1)])]),_:1})])]),n[60]||(n[60]=a("hr",null,null,-1)),a("p",null,[n[41]||(n[41]=s("via: ",-1)),e(p,{href:"http://www.linux.org/threads/installing-obtaining-and-making-gtk-themes.8463/"},{default:l(()=>[...n[40]||(n[40]=[s("http://www.linux.org/threads/installing-obtaining-and-making-gtk-themes.8463/",-1)])]),_:1})]),a("p",null,[n[45]||(n[45]=s("作者：",-1)),e(p,{href:"http://www.linux.org/members/devyncjohnson.4843/"},{default:l(()=>[...n[42]||(n[42]=[s("DevynCJohnson",-1)])]),_:1}),n[46]||(n[46]=s(" 译者：",-1)),e(p,{href:"https://github.com/fuowang"},{default:l(()=>[...n[43]||(n[43]=[s("fuowang",-1)])]),_:1}),n[47]||(n[47]=s(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...n[44]||(n[44]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[50]||(n[50]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[48]||(n[48]=[s("LCTT",-1)])]),_:1}),n[51]||(n[51]=s(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...n[49]||(n[49]=[s("Linux中国",-1)])]),_:1}),n[52]||(n[52]=s(" 荣誉推出",-1))])])}const T=o(d,[["render",g]]);export{x as __pageData,T as default};
