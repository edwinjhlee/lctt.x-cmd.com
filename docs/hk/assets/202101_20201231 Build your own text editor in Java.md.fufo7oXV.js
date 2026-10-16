import{_ as l,a0 as o,w as d,s as r,I as n,x as a,a1 as p,A as i,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"使用 Java 構建你自己的文本編輯器 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Java 構建你自己的文本編輯器 | LCTT (202101) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Java 構建你自己的文本編輯器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Java 構建你自己的文本編輯器 | LCTT (202101) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202101/20201231 Build your own text editor in Java","title":"使用 Java 構建你自己的文本編輯器","tag":"202101","desc":""},"relativePath":"202101/20201231 Build your own text editor in Java.md","filePath":"[post].md"}'),c={name:"202101/20201231 Build your own text editor in Java.md"};function u(g,s,h,m,k,f){const e=o("Link");return d(),r("div",null,[s[34]||(s[34]=n("h1",{id:"使用-java-構建你自己的文本編輯器",tabindex:"-1"},[a("使用 Java 構建你自己的文本編輯器 "),n("a",{class:"header-anchor",href:"#使用-java-構建你自己的文本編輯器","aria-label":"Permalink to “使用 Java 構建你自己的文本編輯器”"},"​")],-1)),s[35]||(s[35]=n("blockquote",null,[n("p",null,"有時候，除你自己外，沒有人能製作你所夢想的工具。以下是如何開始構建你自己的文本編輯器。")],-1)),s[36]||(s[36]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202101/21/134710uzumn6ej36u7t79j.jpg",alt:""})],-1)),s[37]||(s[37]=n("p",null,"有很多文本編輯器。有運行在終端中、運行在 GUI 中、運行在瀏覽器和瀏覽器引擎中的。有很多是還不錯，有一些則是極好的。但是有時候，毫無疑問，最令人滿意的就是你自己構建的編輯器。",-1)),s[38]||(s[38]=n("p",null,"毫無疑問：構建一個真正優秀的文本編輯器比表面上看上去要困難得多。但話説回來，建立一個基本的文本編輯器也不像你擔心的那樣難。事實上，大多數編程工具包已經為你準備好了文本編輯器的大部分組件。圍繞文本編輯的組件，例如菜單條，文件選擇對話框等等，是很容易落到實處。因此，雖然是中級的編程課程，但構建一個基本的文本編輯器是出乎意料的有趣和簡明。你可能會發現自己渴望使用一個自己構造的工具，而且你使用得越多，你可能會有更多的靈感來增加它的功能，從而更多地學習你正在使用的編程語言。",-1)),s[39]||(s[39]=n("p",null,"為了使這個練習切合實際，最好選擇一種具有令人滿意的 GUI 工具箱的語言。有很多種選擇，包括 Qt 、FLTK 或 GTK ，但是一定要先評審一下它的文檔，以確保它有你所期待的功能。對於這篇文章來説，我使用 Java 以及其內置的 Swing 小部件集。如果你想使用一種不同的語言或者一種不同的工具集，這篇文章在如何幫你處理這種問題的方面也仍然是有用的。",-1)),n("p",null,[s[1]||(s[1]=a("不管你選擇哪一種，在任何主要的工具箱中編寫一個文本編輯器都是驚人的相似。如果你是 Java 新手，需要更多關於開始的信息，請先閲讀我的 ",-1)),p(e,{href:"https://opensource.com/article/20/12/learn-java"},{default:i(()=>[...s[0]||(s[0]=[a("猜謎遊戲文章",-1)])]),_:1}),s[2]||(s[2]=a(" 。",-1))]),s[40]||(s[40]=n("h3",{id:"工程設置",tabindex:"-1"},[a("工程設置 "),n("a",{class:"header-anchor",href:"#工程設置","aria-label":"Permalink to “工程設置”"},"​")],-1)),n("p",null,[s[4]||(s[4]=a("通常，我使用並推薦像 ",-1)),p(e,{href:"https://opensource.com/article/20/12/netbeans"},{default:i(()=>[...s[3]||(s[3]=[a("Netbeans",-1)])]),_:1}),s[5]||(s[5]=a(" 或 Eclipse 這樣的 IDE，但我發現，當學習一種新的語言時，手工做一些工作是很有幫助的，這樣你就能更好地理解使用 IDE 時被隱藏起來的東西。在這篇文章中，我假設你正在使用文本編輯器和終端進行編程。",-1))]),s[41]||(s[41]=t(`<p>在開始前，為你自己的工程創建一個工程目錄。在工程文件夾中，創建一個名稱為 <code>src</code> 的目錄來容納你的源文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir -p myTextEditor/src</span></span>
<span class="line"><span>$ cd myTextEditor</span></span></code></pre></div><p>在你的 <code>src</code> 目錄中創建一個名稱為 <code>TextEdit.java</code> 的空白的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ touch src/TextEditor.java</span></span></code></pre></div><p>在你最喜歡的文本編輯器中打開這個空白的文件（我的意思是除你自己編寫之外的最喜歡的一款文本編輯器），然後準備好編碼吧！</p><h3 id="包和導入" tabindex="-1">包和導入 <a class="header-anchor" href="#包和導入" aria-label="Permalink to “包和導入”">​</a></h3><p>為確保你的 Java 應用程序有一個唯一的標識符，你必須聲明一個 <code>package</code> 名稱。典型的格式是使用一個反向的域名，如果你真的有一個域名的話，這就特別容易了。如果你沒有域名的話，你可以使用 <code>local</code> 作為最頂層。像 Java 和很多語言一樣，行以分號結尾。</p><p>在命名你的 Java 的 <code>package</code> 後，你必須告訴 Java 編譯器（<code>javac</code>）使用哪些庫來構建你的代碼。事實上，這通常是你邊編寫代碼邊添加的內容，因為你很少事先知道你自己所需要的庫。然而，這裏有一些庫是顯而易見的。例如，你知道這個文本編輯器是基於 Swing GUI 工具箱的，因此，導入 <code>javax.swing.JFrame</code> 和<code>javax.swing.UIManager</code> 和其它相關的特定庫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.example.textedit;</span></span>
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
<span class="line"><span>import java.util.logging.Logger;</span></span></code></pre></div><p>對於這個練習的目標，你可以提前預知你所需要的所有的庫。在真實的生活中，不管你喜歡哪一種語言，你都將在研究如何解決一些問題的時候發現庫，然後，你將它導入到你的代碼中，並使用它。不需要擔心 —— 如果你忘記包含一個庫，你的編譯器或解釋器將警告你！</p><h3 id="主窗口" tabindex="-1">主窗口 <a class="header-anchor" href="#主窗口" aria-label="Permalink to “主窗口”">​</a></h3><p>這是一個單窗口應用程序，因此這個應用程序的主類是一個 <code>JFrame</code> ，其附帶有一個捕捉菜單事件的 <code>ActionListener</code> 。在 Java 中，當你使用一個現有的小部件元素時，你可以使用你的代碼“擴展”它。這個主窗口需要三個字段：窗口本身（一個 <code>JFrame</code> 的實例）、一個用於文件選擇器返回值的標識符和文本編輯器本身（<code>JTextArea</code>）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>public final class TextEdit extends JFrame implements ActionListener {</span></span>
<span class="line"><span>private static JTextArea area;</span></span>
<span class="line"><span>private static JFrame frame;</span></span>
<span class="line"><span>private static int returnValue = 0;</span></span></code></pre></div><p>令人驚奇的是，這數行代碼完成了實現一個基本文本編輯器的 80% 的工作，因為 <code>JtextArea</code> 是 Java 的文本輸入字段。剩下的 80 行代碼大部分用於處理輔助功能，比如保存和打開文件。</p><h3 id="構建一個菜單" tabindex="-1">構建一個菜單 <a class="header-anchor" href="#構建一個菜單" aria-label="Permalink to “構建一個菜單”">​</a></h3><p><code>JMenuBar</code> 小部件被設計到 JFrame 的頂部，它為你提供你想要的很多菜單項。Java 不是一種 拖放式的編程語言，因此，對於你所添加的每一個菜單，你都還必須編寫一個函數。為保持這個工程的可控性，我提供了四個函數：創建一個新的文件，打開一個現有的文件，保存文本到一個文件，和關閉應用程序。</p><p>在大多數流行的工具箱中，創建一個菜單的過程基本相同。首先，你創建菜單條本身，然後創建一個頂級菜單（例如 “File” ），再然後創建子菜單項（例如，“New”、“Save” 等）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>public TextEdit() { run(); }</span></span>
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
<span class="line"><span>    }</span></span></code></pre></div><p>現在，所有剩餘的工作是實施菜單項所描述的功能。</p><h3 id="編程菜單動作" tabindex="-1">編程菜單動作 <a class="header-anchor" href="#編程菜單動作" aria-label="Permalink to “編程菜單動作”">​</a></h3><p>你的應用程序響應菜單選擇，是因為你的 <code>JFrame</code> 有一個附屬於它的 <code>ActionListener</code> 。在 Java 中，當你實施一個事件處理程序時，你必須“重寫”其內建的函數。這只是聽起來可怕。你不是在重寫 Java；你只是在實現已經被定義但尚未實施事件處理程序的函數。</p><p>在這種情況下，你必須重寫 <code>actionPerformed</code>方法。因為在 “File” 菜單中的所有條目都與處理文件有關，所以在我的代碼中很早就定義了一個 <code>JFileChooser</code> 。代碼其它部分被劃分到一個 <code>if</code> 語句的子語句中，這起來像接收到什麼事件就相應地執行什麼動作。每個子語句都與其它的子語句完全不同，因為每個項目都標示着一些完全唯一的東西。最相似的是 “Open” 和 “Save”，因為它們都使用 <code>JFileChooser</code> 選擇文件系統中的一個位置來獲取或放置數據。</p><p>“New” 菜單會在沒有警告的情況下清理 JTextArea ，“Quit” 菜單會在沒有警告的情況下關閉應用程序。這兩個 “功能” 都是不安全的，因此你應該想對這段代碼進行一點改善，這是一個很好的開始。在內容還沒有被保存前，一個友好的警告是任何一個好的文本編輯器都必不可少的一個功能，但是在這裏為了簡單，這是未來的一個功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@Override</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,24)),n("p",null,[s[7]||(s[7]=a("從技術上來説，這就是這個文本編輯器的全部。當然，並沒有真正做什麼，除此之外，在這裏仍然有測試和打包步驟，因此仍然有很多時間來發現缺少的必需品。假設你沒有注意到提示：在這段代碼中 ",-1)),s[8]||(s[8]=n("em",null,"肯定",-1)),s[9]||(s[9]=a(" 缺少一些東西。你現在知道缺少的是什麼嗎？（在 ",-1)),p(e,{href:"http://www.google.com/search?hl=en&q=allinurl%3Adocs.oracle.com+javase+docs+api+component"},{default:i(()=>[...s[6]||(s[6]=[a("猜謎遊戲文章",-1)])]),_:1}),s[10]||(s[10]=a(" 中被大量的提到。）",-1))]),s[42]||(s[42]=t(`<h3 id="測試" tabindex="-1">測試 <a class="header-anchor" href="#測試" aria-label="Permalink to “測試”">​</a></h3><p>你現在可以測試你的應用程序。從終端中啓動你所編寫的文本編輯器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java ./src/TextEdit.java</span></span>
<span class="line"><span>error: can’t find main(String[]) method in class: com.example.textedit.TextEdit</span></span></code></pre></div><p>它看起來像在代碼中沒有獲得 <code>main</code> 方法。這裏有一些方法來修復這個問題：你可以在 <code>TextEdit.java</code> 中創建一個 <code>main</code> 方法，並讓它運行一個 <code>TextEdit</code> 類實例，或者你可以創建一個單獨的包含 <code>main</code> 方法的文件。兩種方法都可以工作，但從大型工程的預期來看，使用後者更為明智，因此，使用單獨的文件與其一起工作使之成為一個完整的應用程序的方法是值得使用的。</p><p>在 <code>src</code> 中創建一個 <code>Main.java</code> 文件，並在最喜歡的編輯器中打開：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package com.example.textedit;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>  TextEdit runner = new TextEdit();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以再次嘗試，但是現在有兩個相互依賴的文件要運行，因此你必須編譯代碼。Java 使用 <code>javac</code> 編譯器，並且你可以使用 <code>-d</code> 選項來設置目標目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ javac src/*java -d .</span></span></code></pre></div><p>這會在你的軟件包名稱 <code>com/example/textedit</code> 後創建一個準確地模型化的新的目錄結構。這個新的類路徑包含文件 <code>Main.class</code> 和 <code>TextEdit.class</code> ，這兩個文件構成了你的應用程序。你可以使用 <code>java</code> 並通過引用你的 Main 類的位置和 <em>名稱</em>（非文件名稱）來運行它們：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java info/slackermedia/textedit/Main\`</span></span></code></pre></div><p>你的文本編輯器打開了，你可以在其中輸入文字，打開文件，甚至保存你的工作。</p><p><img src="https://opensource.com/sites/default/files/uploads/this-time-its-personal-31_days_yourself-opensource.png" alt="帶有單個下拉菜單的白色文本編輯器框，有 File、New、Open、Save 和 Quit 菜單" title="White text editor box with single drop down menu with options File, New, Open, Save, and Quit"></p><h3 id="以-java-軟件包的形式分享你的工作" tabindex="-1">以 Java 軟件包的形式分享你的工作 <a class="header-anchor" href="#以-java-軟件包的形式分享你的工作" aria-label="Permalink to “以 Java 軟件包的形式分享你的工作”">​</a></h3><p>雖然一些程序員似乎看起來認可以各種各樣的源文件的形式分發軟件包，並鼓勵其他人來學習如何運行它，但是，Java 讓打包應用程序變得真地很容易，以至其他人可以很容易的運行它。你已經有了必備的大部分結構體，但是你仍然需要一些元數據到一個 <code>Manifest.txt</code> 文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;Manifest-Version: 1.0&quot; &gt; Manifest.txt</span></span></code></pre></div>`,15)),n("p",null,[s[12]||(s[12]=a("用於打包的 ",-1)),s[13]||(s[13]=n("code",null,"jar",-1)),s[14]||(s[14]=a(" 命令，與 ",-1)),p(e,{href:"https://opensource.com/article/17/7/how-unzip-targz-file"},{default:i(()=>[...s[11]||(s[11]=[a("tar",-1)])]),_:1}),s[15]||(s[15]=a(" 命令非常相似，因此很多選項對你來説可能會很熟悉。要創建一個 JAR 文件：",-1))]),s[43]||(s[43]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jar cvfme TextEdit.jar</span></span>
<span class="line"><span>Manifest.txt</span></span>
<span class="line"><span>com.example.textedit.Main</span></span>
<span class="line"><span>com/example/textedit/*.class</span></span></code></pre></div><p>根據命令的語法，你可以推測出它會創建一個新的名稱為 <code>TextEdit.jar</code> 的 JAR 文件，它所需要的清單數據位於 <code>Manifest.txt</code> 中。它的主類被定義為軟件包名稱的一個擴展，並且類自身是 <code>com/example/textedit/Main.class</code> 。</p><p>你可以查看 JAR 文件的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jar tvf TextEdit.jar</span></span>
<span class="line"><span>0 Wed Nov 25 META-INF/</span></span>
<span class="line"><span>105 Wed Nov 25 META-INF/MANIFEST.MF</span></span>
<span class="line"><span>338 Wed Nov 25 com/example/textedit/textedit/Main.class</span></span>
<span class="line"><span>4373 Wed Nov 25 com/example/textedit/textedit/TextEdit.class</span></span></code></pre></div><p>如果你想看看你的元數據是如何被集成到 <code>MANIFEST.MF</code> 文件中的，你甚至可以使用 <code>xvf</code> 選項來提取它。</p><p>使用 <code>java</code> 命令來運行你的 JAR 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ java -jar TextEdit.jar</span></span></code></pre></div>`,7)),n("p",null,[s[17]||(s[17]=a("你甚至可以 ",-1)),p(e,{href:"https://opensource.com/article/18/1/how-install-apps-linux"},{default:i(()=>[...s[16]||(s[16]=[a("創建一個桌面文件",-1)])]),_:1}),s[18]||(s[18]=a(" ，這樣，在單擊應用程序菜單中的圖標時，應用程序就會啓動。",-1))]),s[44]||(s[44]=n("h3",{id:"改進它",tabindex:"-1"},[a("改進它 "),n("a",{class:"header-anchor",href:"#改進它","aria-label":"Permalink to “改進它”"},"​")],-1)),s[45]||(s[45]=n("p",null,"在當前狀態下，這是一個非常基本的文本編輯器，最適合做快速筆記或簡短自述文檔。一些改進（比如添加垂直滾動條）只要稍加研究就能快速簡單地完成，而另一些改進（比如實現一個廣泛的偏好系統）則需要真正的工作。",-1)),s[46]||(s[46]=n("p",null,"但如果你一直在想學一種新的語言，這可能是一個完美的自我學習實用工程。創建一個文本編輯器，如你所見，它在代碼方面並不難對付，它在一定範圍是可控的。如果你經常使用文本編輯器，那麼編寫你自己的文本編輯器可能會使你滿意和樂趣。因此打開你最喜歡的文本編輯器（你寫的那個），開始添加功能吧！",-1)),s[47]||(s[47]=n("hr",null,null,-1)),n("p",null,[s[20]||(s[20]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/20/12/write-your-own-text-editor"},{default:i(()=>[...s[19]||(s[19]=[a("https://opensource.com/article/20/12/write-your-own-text-editor",-1)])]),_:1})]),n("p",null,[s[25]||(s[25]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/seth"},{default:i(()=>[...s[21]||(s[21]=[a("Seth Kenlon",-1)])]),_:1}),s[26]||(s[26]=a(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[22]||(s[22]=[a("lujun9972",-1)])]),_:1}),s[27]||(s[27]=a(" 譯者：",-1)),p(e,{href:"https://github.com/robsean"},{default:i(()=>[...s[23]||(s[23]=[a("robsean",-1)])]),_:1}),s[28]||(s[28]=a(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[24]||(s[24]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[31]||(s[31]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[29]||(s[29]=[a("LCTT",-1)])]),_:1}),s[32]||(s[32]=a(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[30]||(s[30]=[a("Linux中國",-1)])]),_:1}),s[33]||(s[33]=a(" 榮譽推出",-1))])])}const T=l(c,[["render",u]]);export{v as __pageData,T as default};
