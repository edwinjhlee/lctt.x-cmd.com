import{_ as l,a0 as o,w as d,s as r,I as n,x as a,a1 as p,A as i,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"使用 Java 构建你自己的文本编辑器 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Java 构建你自己的文本编辑器 | LCTT (202101) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Java 构建你自己的文本编辑器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Java 构建你自己的文本编辑器 | LCTT (202101) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202101/20201231 Build your own text editor in Java","title":"使用 Java 构建你自己的文本编辑器","tag":"202101","desc":""},"relativePath":"202101/20201231 Build your own text editor in Java.md","filePath":"[post].md"}'),c={name:"202101/20201231 Build your own text editor in Java.md"};function u(g,s,h,m,k,f){const e=o("Link");return d(),r("div",null,[s[34]||(s[34]=n("h1",{id:"使用-java-构建你自己的文本编辑器",tabindex:"-1"},[a("使用 Java 构建你自己的文本编辑器 "),n("a",{class:"header-anchor",href:"#使用-java-构建你自己的文本编辑器","aria-label":"Permalink to “使用 Java 构建你自己的文本编辑器”"},"​")],-1)),s[35]||(s[35]=n("blockquote",null,[n("p",null,"有时候，除你自己外，没有人能制作你所梦想的工具。以下是如何开始构建你自己的文本编辑器。")],-1)),s[36]||(s[36]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202101/21/134710uzumn6ej36u7t79j.jpg",alt:""})],-1)),s[37]||(s[37]=n("p",null,"有很多文本编辑器。有运行在终端中、运行在 GUI 中、运行在浏览器和浏览器引擎中的。有很多是还不错，有一些则是极好的。但是有时候，毫无疑问，最令人满意的就是你自己构建的编辑器。",-1)),s[38]||(s[38]=n("p",null,"毫无疑问：构建一个真正优秀的文本编辑器比表面上看上去要困难得多。但话说回来，建立一个基本的文本编辑器也不像你担心的那样难。事实上，大多数编程工具包已经为你准备好了文本编辑器的大部分组件。围绕文本编辑的组件，例如菜单条，文件选择对话框等等，是很容易落到实处。因此，虽然是中级的编程课程，但构建一个基本的文本编辑器是出乎意料的有趣和简明。你可能会发现自己渴望使用一个自己构造的工具，而且你使用得越多，你可能会有更多的灵感来增加它的功能，从而更多地学习你正在使用的编程语言。",-1)),s[39]||(s[39]=n("p",null,"为了使这个练习切合实际，最好选择一种具有令人满意的 GUI 工具箱的语言。有很多种选择，包括 Qt 、FLTK 或 GTK ，但是一定要先评审一下它的文档，以确保它有你所期待的功能。对于这篇文章来说，我使用 Java 以及其内置的 Swing 小部件集。如果你想使用一种不同的语言或者一种不同的工具集，这篇文章在如何帮你处理这种问题的方面也仍然是有用的。",-1)),n("p",null,[s[1]||(s[1]=a("不管你选择哪一种，在任何主要的工具箱中编写一个文本编辑器都是惊人的相似。如果你是 Java 新手，需要更多关于开始的信息，请先阅读我的 ",-1)),p(e,{href:"https://opensource.com/article/20/12/learn-java"},{default:i(()=>[...s[0]||(s[0]=[a("猜谜游戏文章",-1)])]),_:1}),s[2]||(s[2]=a(" 。",-1))]),s[40]||(s[40]=n("h3",{id:"工程设置",tabindex:"-1"},[a("工程设置 "),n("a",{class:"header-anchor",href:"#工程设置","aria-label":"Permalink to “工程设置”"},"​")],-1)),n("p",null,[s[4]||(s[4]=a("通常，我使用并推荐像 ",-1)),p(e,{href:"https://opensource.com/article/20/12/netbeans"},{default:i(()=>[...s[3]||(s[3]=[a("Netbeans",-1)])]),_:1}),s[5]||(s[5]=a(" 或 Eclipse 这样的 IDE，但我发现，当学习一种新的语言时，手工做一些工作是很有帮助的，这样你就能更好地理解使用 IDE 时被隐藏起来的东西。在这篇文章中，我假设你正在使用文本编辑器和终端进行编程。",-1))]),s[41]||(s[41]=t(`<p>在开始前，为你自己的工程创建一个工程目录。在工程文件夹中，创建一个名称为 <code>src</code> 的目录来容纳你的源文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir -p myTextEditor/src</span></span>
<span class="line"><span>$ cd myTextEditor</span></span></code></pre></div><p>在你的 <code>src</code> 目录中创建一个名称为 <code>TextEdit.java</code> 的空白的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ touch src/TextEditor.java</span></span></code></pre></div><p>在你最喜欢的文本编辑器中打开这个空白的文件（我的意思是除你自己编写之外的最喜欢的一款文本编辑器），然后准备好编码吧！</p><h3 id="包和导入" tabindex="-1">包和导入 <a class="header-anchor" href="#包和导入" aria-label="Permalink to “包和导入”">​</a></h3><p>为确保你的 Java 应用程序有一个唯一的标识符，你必须声明一个 <code>package</code> 名称。典型的格式是使用一个反向的域名，如果你真的有一个域名的话，这就特别容易了。如果你没有域名的话，你可以使用 <code>local</code> 作为最顶层。像 Java 和很多语言一样，行以分号结尾。</p><p>在命名你的 Java 的 <code>package</code> 后，你必须告诉 Java 编译器（<code>javac</code>）使用哪些库来构建你的代码。事实上，这通常是你边编写代码边添加的内容，因为你很少事先知道你自己所需要的库。然而，这里有一些库是显而易见的。例如，你知道这个文本编辑器是基于 Swing GUI 工具箱的，因此，导入 <code>javax.swing.JFrame</code> 和<code>javax.swing.UIManager</code> 和其它相关的特定库。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.example.textedit;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.swing.JFileChooser;</span></span>
<span class="line"><span>import javax.swing.JFrame;</span></span>
<span class="line"><span>import javax.swing.JMenu;</span></span>
<span class="line"><span>import javax.swing.JMenuBar;</span></span>
<span class="line"><span>import javax.swing.JMenuItem;</span></span>
<span class="line"><span>import javax.swing.JOptionPane;</span></span>
<span class="line"><span>import javax.swing.JTextArea;</span></span>
<span class="line"><span>import javax.swing.UIManager;</span></span>
<span class="line"><span>import javax.swing.UnsupportedLookAndFeelException;</span></span>
<span class="line"><span>import javax.swing.filechooser.FileSystemView;</span></span>
<span class="line"><span>import java.awt.Component;</span></span>
<span class="line"><span>import java.awt.event.ActionEvent;</span></span>
<span class="line"><span>import java.awt.event.ActionListener;</span></span>
<span class="line"><span>import java.io.File;</span></span>
<span class="line"><span>import java.io.FileNotFoundException;</span></span>
<span class="line"><span>import java.io.FileReader;</span></span>
<span class="line"><span>import java.io.FileWriter;</span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.util.Scanner;</span></span>
<span class="line"><span>import java.util.logging.Level;</span></span>
<span class="line"><span>import java.util.logging.Logger;</span></span></code></pre></div><p>对于这个练习的目标，你可以提前预知你所需要的所有的库。在真实的生活中，不管你喜欢哪一种语言，你都将在研究如何解决一些问题的时候发现库，然后，你将它导入到你的代码中，并使用它。不需要担心 —— 如果你忘记包含一个库，你的编译器或解释器将警告你！</p><h3 id="主窗口" tabindex="-1">主窗口 <a class="header-anchor" href="#主窗口" aria-label="Permalink to “主窗口”">​</a></h3><p>这是一个单窗口应用程序，因此这个应用程序的主类是一个 <code>JFrame</code> ，其附带有一个捕捉菜单事件的 <code>ActionListener</code> 。在 Java 中，当你使用一个现有的小部件元素时，你可以使用你的代码“扩展”它。这个主窗口需要三个字段：窗口本身（一个 <code>JFrame</code> 的实例）、一个用于文件选择器返回值的标识符和文本编辑器本身（<code>JTextArea</code>）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>public final class TextEdit extends JFrame implements ActionListener {</span></span>
<span class="line"><span>private static JTextArea area;</span></span>
<span class="line"><span>private static JFrame frame;</span></span>
<span class="line"><span>private static int returnValue = 0;</span></span></code></pre></div><p>令人惊奇的是，这数行代码完成了实现一个基本文本编辑器的 80% 的工作，因为 <code>JtextArea</code> 是 Java 的文本输入字段。剩下的 80 行代码大部分用于处理辅助功能，比如保存和打开文件。</p><h3 id="构建一个菜单" tabindex="-1">构建一个菜单 <a class="header-anchor" href="#构建一个菜单" aria-label="Permalink to “构建一个菜单”">​</a></h3><p><code>JMenuBar</code> 小部件被设计到 JFrame 的顶部，它为你提供你想要的很多菜单项。Java 不是一种 拖放式的编程语言，因此，对于你所添加的每一个菜单，你都还必须编写一个函数。为保持这个工程的可控性，我提供了四个函数：创建一个新的文件，打开一个现有的文件，保存文本到一个文件，和关闭应用程序。</p><p>在大多数流行的工具箱中，创建一个菜单的过程基本相同。首先，你创建菜单条本身，然后创建一个顶级菜单（例如 “File” ），再然后创建子菜单项（例如，“New”、“Save” 等）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>public TextEdit() { run(); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public void run() {</span></span>
<span class="line"><span>    frame = new JFrame(&quot;Text Edit&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Set the look-and-feel (LNF) of the application</span></span>
<span class="line"><span>    // Try to default to whatever the host system prefers</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());</span></span>
<span class="line"><span>    } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | UnsupportedLookAndFeelException ex) {</span></span>
<span class="line"><span>      Logger.getLogger(TextEdit.class.getName()).log(Level.SEVERE, null, ex);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Set attributes of the app window</span></span>
<span class="line"><span>    area = new JTextArea();</span></span>
<span class="line"><span>    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);</span></span>
<span class="line"><span>    frame.add(area);</span></span>
<span class="line"><span>    frame.setSize(640, 480);</span></span>
<span class="line"><span>    frame.setVisible(true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Build the menu</span></span>
<span class="line"><span>    JMenuBar menu_main = new JMenuBar();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    JMenu menu_file = new JMenu(&quot;File&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    JMenuItem menuitem_new = new JMenuItem(&quot;New&quot;);</span></span>
<span class="line"><span>    JMenuItem menuitem_open = new JMenuItem(&quot;Open&quot;);</span></span>
<span class="line"><span>    JMenuItem menuitem_save = new JMenuItem(&quot;Save&quot;);</span></span>
<span class="line"><span>    JMenuItem menuitem_quit = new JMenuItem(&quot;Quit&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    menuitem_new.addActionListener(this);</span></span>
<span class="line"><span>    menuitem_open.addActionListener(this);</span></span>
<span class="line"><span>    menuitem_save.addActionListener(this);</span></span>
<span class="line"><span>    menuitem_quit.addActionListener(this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    menu_main.add(menu_file);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    menu_file.add(menuitem_new);</span></span>
<span class="line"><span>    menu_file.add(menuitem_open);</span></span>
<span class="line"><span>    menu_file.add(menuitem_save);</span></span>
<span class="line"><span>    menu_file.add(menuitem_quit);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    frame.setJMenuBar(menu_main);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>现在，所有剩余的工作是实施菜单项所描述的功能。</p><h3 id="编程菜单动作" tabindex="-1">编程菜单动作 <a class="header-anchor" href="#编程菜单动作" aria-label="Permalink to “编程菜单动作”">​</a></h3><p>你的应用程序响应菜单选择，是因为你的 <code>JFrame</code> 有一个附属于它的 <code>ActionListener</code> 。在 Java 中，当你实施一个事件处理程序时，你必须“重写”其内建的函数。这只是听起来可怕。你不是在重写 Java；你只是在实现已经被定义但尚未实施事件处理程序的函数。</p><p>在这种情况下，你必须重写 <code>actionPerformed</code>方法。因为在 “File” 菜单中的所有条目都与处理文件有关，所以在我的代码中很早就定义了一个 <code>JFileChooser</code> 。代码其它部分被划分到一个 <code>if</code> 语句的子语句中，这起来像接收到什么事件就相应地执行什么动作。每个子语句都与其它的子语句完全不同，因为每个项目都标示着一些完全唯一的东西。最相似的是 “Open” 和 “Save”，因为它们都使用 <code>JFileChooser</code> 选择文件系统中的一个位置来获取或放置数据。</p><p>“New” 菜单会在没有警告的情况下清理 JTextArea ，“Quit” 菜单会在没有警告的情况下关闭应用程序。这两个 “功能” 都是不安全的，因此你应该想对这段代码进行一点改善，这是一个很好的开始。在内容还没有被保存前，一个友好的警告是任何一个好的文本编辑器都必不可少的一个功能，但是在这里为了简单，这是未来的一个功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>public void actionPerformed(ActionEvent e) {</span></span>
<span class="line"><span>    String ingest = null;</span></span>
<span class="line"><span>    JFileChooser jfc = new JFileChooser(FileSystemView.getFileSystemView().getHomeDirectory());</span></span>
<span class="line"><span>    jfc.setDialogTitle(&quot;Choose destination.&quot;);</span></span>
<span class="line"><span>    jfc.setFileSelectionMode(JFileChooser.FILES_AND_DIRECTORIES);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String ae = e.getActionCommand();</span></span>
<span class="line"><span>    if (ae.equals(&quot;Open&quot;)) {</span></span>
<span class="line"><span>        returnValue = jfc.showOpenDialog(null);</span></span>
<span class="line"><span>        if (returnValue == JFileChooser.APPROVE_OPTION) {</span></span>
<span class="line"><span>        File f = new File(jfc.getSelectedFile().getAbsolutePath());</span></span>
<span class="line"><span>        try{</span></span>
<span class="line"><span>            FileReader read = new FileReader(f);</span></span>
<span class="line"><span>            Scanner scan = new Scanner(read);</span></span>
<span class="line"><span>            while(scan.hasNextLine()){</span></span>
<span class="line"><span>                String line = scan.nextLine() + &quot;\\n&quot;;</span></span>
<span class="line"><span>                ingest = ingest + line;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>            area.setText(ingest);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    catch ( FileNotFoundException ex) { ex.printStackTrace(); }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    // 保存</span></span>
<span class="line"><span>    } else if (ae.equals(&quot;Save&quot;)) {</span></span>
<span class="line"><span>        returnValue = jfc.showSaveDialog(null);</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            File f = new File(jfc.getSelectedFile().getAbsolutePath());</span></span>
<span class="line"><span>            FileWriter out = new FileWriter(f);</span></span>
<span class="line"><span>            out.write(area.getText());</span></span>
<span class="line"><span>            out.close();</span></span>
<span class="line"><span>        } catch (FileNotFoundException ex) {</span></span>
<span class="line"><span>            Component f = null;</span></span>
<span class="line"><span>            JOptionPane.showMessageDialog(f,&quot;File not found.&quot;);</span></span>
<span class="line"><span>        } catch (IOException ex) {</span></span>
<span class="line"><span>            Component f = null;</span></span>
<span class="line"><span>            JOptionPane.showMessageDialog(f,&quot;Error.&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else if (ae.equals(&quot;New&quot;)) {</span></span>
<span class="line"><span>        area.setText(&quot;&quot;);</span></span>
<span class="line"><span>    } else if (ae.equals(&quot;Quit&quot;)) { System.exit(0); }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,24)),n("p",null,[s[7]||(s[7]=a("从技术上来说，这就是这个文本编辑器的全部。当然，并没有真正做什么，除此之外，在这里仍然有测试和打包步骤，因此仍然有很多时间来发现缺少的必需品。假设你没有注意到提示：在这段代码中 ",-1)),s[8]||(s[8]=n("em",null,"肯定",-1)),s[9]||(s[9]=a(" 缺少一些东西。你现在知道缺少的是什么吗？（在 ",-1)),p(e,{href:"http://www.google.com/search?hl=en&q=allinurl%3Adocs.oracle.com+javase+docs+api+component"},{default:i(()=>[...s[6]||(s[6]=[a("猜谜游戏文章",-1)])]),_:1}),s[10]||(s[10]=a(" 中被大量的提到。）",-1))]),s[42]||(s[42]=t(`<h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to “测试”">​</a></h3><p>你现在可以测试你的应用程序。从终端中启动你所编写的文本编辑器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./src/TextEdit.java</span></span>
<span class="line"><span>error: can’t find main(String[]) method in class: com.example.textedit.TextEdit</span></span></code></pre></div><p>它看起来像在代码中没有获得 <code>main</code> 方法。这里有一些方法来修复这个问题：你可以在 <code>TextEdit.java</code> 中创建一个 <code>main</code> 方法，并让它运行一个 <code>TextEdit</code> 类实例，或者你可以创建一个单独的包含 <code>main</code> 方法的文件。两种方法都可以工作，但从大型工程的预期来看，使用后者更为明智，因此，使用单独的文件与其一起工作使之成为一个完整的应用程序的方法是值得使用的。</p><p>在 <code>src</code> 中创建一个 <code>Main.java</code> 文件，并在最喜欢的编辑器中打开：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.example.textedit;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>  TextEdit runner = new TextEdit();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以再次尝试，但是现在有两个相互依赖的文件要运行，因此你必须编译代码。Java 使用 <code>javac</code> 编译器，并且你可以使用 <code>-d</code> 选项来设置目标目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javac src/*java -d .</span></span></code></pre></div><p>这会在你的软件包名称 <code>com/example/textedit</code> 后创建一个准确地模型化的新的目录结构。这个新的类路径包含文件 <code>Main.class</code> 和 <code>TextEdit.class</code> ，这两个文件构成了你的应用程序。你可以使用 <code>java</code> 并通过引用你的 Main 类的位置和 <em>名称</em>（非文件名称）来运行它们：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java info/slackermedia/textedit/Main\`</span></span></code></pre></div><p>你的文本编辑器打开了，你可以在其中输入文字，打开文件，甚至保存你的工作。</p><p><img src="https://opensource.com/sites/default/files/uploads/this-time-its-personal-31_days_yourself-opensource.png" alt="带有单个下拉菜单的白色文本编辑器框，有 File、New、Open、Save 和 Quit 菜单" title="White text editor box with single drop down menu with options File, New, Open, Save, and Quit"></p><h3 id="以-java-软件包的形式分享你的工作" tabindex="-1">以 Java 软件包的形式分享你的工作 <a class="header-anchor" href="#以-java-软件包的形式分享你的工作" aria-label="Permalink to “以 Java 软件包的形式分享你的工作”">​</a></h3><p>虽然一些程序员似乎看起来认可以各种各样的源文件的形式分发软件包，并鼓励其他人来学习如何运行它，但是，Java 让打包应用程序变得真地很容易，以至其他人可以很容易的运行它。你已经有了必备的大部分结构体，但是你仍然需要一些元数据到一个 <code>Manifest.txt</code> 文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;Manifest-Version: 1.0&quot; &gt; Manifest.txt</span></span></code></pre></div>`,15)),n("p",null,[s[12]||(s[12]=a("用于打包的 ",-1)),s[13]||(s[13]=n("code",null,"jar",-1)),s[14]||(s[14]=a(" 命令，与 ",-1)),p(e,{href:"https://opensource.com/article/17/7/how-unzip-targz-file"},{default:i(()=>[...s[11]||(s[11]=[a("tar",-1)])]),_:1}),s[15]||(s[15]=a(" 命令非常相似，因此很多选项对你来说可能会很熟悉。要创建一个 JAR 文件：",-1))]),s[43]||(s[43]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jar cvfme TextEdit.jar</span></span>
<span class="line"><span>Manifest.txt</span></span>
<span class="line"><span>com.example.textedit.Main</span></span>
<span class="line"><span>com/example/textedit/*.class</span></span></code></pre></div><p>根据命令的语法，你可以推测出它会创建一个新的名称为 <code>TextEdit.jar</code> 的 JAR 文件，它所需要的清单数据位于 <code>Manifest.txt</code> 中。它的主类被定义为软件包名称的一个扩展，并且类自身是 <code>com/example/textedit/Main.class</code> 。</p><p>你可以查看 JAR 文件的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jar tvf TextEdit.jar</span></span>
<span class="line"><span>0 Wed Nov 25 META-INF/</span></span>
<span class="line"><span>105 Wed Nov 25 META-INF/MANIFEST.MF</span></span>
<span class="line"><span>338 Wed Nov 25 com/example/textedit/textedit/Main.class</span></span>
<span class="line"><span>4373 Wed Nov 25 com/example/textedit/textedit/TextEdit.class</span></span></code></pre></div><p>如果你想看看你的元数据是如何被集成到 <code>MANIFEST.MF</code> 文件中的，你甚至可以使用 <code>xvf</code> 选项来提取它。</p><p>使用 <code>java</code> 命令来运行你的 JAR 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -jar TextEdit.jar</span></span></code></pre></div>`,7)),n("p",null,[s[17]||(s[17]=a("你甚至可以 ",-1)),p(e,{href:"https://opensource.com/article/18/1/how-install-apps-linux"},{default:i(()=>[...s[16]||(s[16]=[a("创建一个桌面文件",-1)])]),_:1}),s[18]||(s[18]=a(" ，这样，在单击应用程序菜单中的图标时，应用程序就会启动。",-1))]),s[44]||(s[44]=n("h3",{id:"改进它",tabindex:"-1"},[a("改进它 "),n("a",{class:"header-anchor",href:"#改进它","aria-label":"Permalink to “改进它”"},"​")],-1)),s[45]||(s[45]=n("p",null,"在当前状态下，这是一个非常基本的文本编辑器，最适合做快速笔记或简短自述文档。一些改进（比如添加垂直滚动条）只要稍加研究就能快速简单地完成，而另一些改进（比如实现一个广泛的偏好系统）则需要真正的工作。",-1)),s[46]||(s[46]=n("p",null,"但如果你一直在想学一种新的语言，这可能是一个完美的自我学习实用工程。创建一个文本编辑器，如你所见，它在代码方面并不难对付，它在一定范围是可控的。如果你经常使用文本编辑器，那么编写你自己的文本编辑器可能会使你满意和乐趣。因此打开你最喜欢的文本编辑器（你写的那个），开始添加功能吧！",-1)),s[47]||(s[47]=n("hr",null,null,-1)),n("p",null,[s[20]||(s[20]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/20/12/write-your-own-text-editor"},{default:i(()=>[...s[19]||(s[19]=[a("https://opensource.com/article/20/12/write-your-own-text-editor",-1)])]),_:1})]),n("p",null,[s[25]||(s[25]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/seth"},{default:i(()=>[...s[21]||(s[21]=[a("Seth Kenlon",-1)])]),_:1}),s[26]||(s[26]=a(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[22]||(s[22]=[a("lujun9972",-1)])]),_:1}),s[27]||(s[27]=a(" 译者：",-1)),p(e,{href:"https://github.com/robsean"},{default:i(()=>[...s[23]||(s[23]=[a("robsean",-1)])]),_:1}),s[28]||(s[28]=a(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[24]||(s[24]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[31]||(s[31]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[29]||(s[29]=[a("LCTT",-1)])]),_:1}),s[32]||(s[32]=a(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[30]||(s[30]=[a("Linux中国",-1)])]),_:1}),s[33]||(s[33]=a(" 荣誉推出",-1))])])}const T=l(c,[["render",u]]);export{v as __pageData,T as default};
