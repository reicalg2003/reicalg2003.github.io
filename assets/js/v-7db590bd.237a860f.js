"use strict";(self.webpackChunkreicalg=self.webpackChunkreicalg||[]).push([[195],{5338:(l,e,c)=>{c.r(e),c.d(e,{data:()=>i});const i={key:"v-7db590bd",path:"/misc/misc2.html",title:"misc刷题（文件结构）",lang:"zh-CN",frontmatter:{date:"2023/5/29 17:15",stick:!1,keyword:"misc,ctfshow",description:"刷题",title:"misc刷题（文件结构）",tag:["ctfshow刷题"],categories:["文件结构","歪比八卜"]},excerpt:"",headers:[{level:2,title:"文件结构",slug:"文件结构",children:[{level:3,title:"misc24",slug:"misc24",children:[]},{level:3,title:"misc25",slug:"misc25",children:[]},{level:3,title:"misc26",slug:"misc26",children:[]},{level:3,title:"misc27",slug:"misc27",children:[]},{level:3,title:"misc28",slug:"misc28",children:[]},{level:3,title:"misc29",slug:"misc29",children:[]},{level:3,title:"misc30",slug:"misc30",children:[]},{level:3,title:"misc31",slug:"misc31",children:[]},{level:3,title:"misc32",slug:"misc32",children:[]},{level:3,title:"misc33",slug:"misc33",children:[]},{level:3,title:"misc34",slug:"misc34",children:[]},{level:3,title:"miscc35",slug:"miscc35",children:[]},{level:3,title:"misc36",slug:"misc36",children:[]},{level:3,title:"misc37",slug:"misc37",children:[]},{level:3,title:"misc38",slug:"misc38",children:[]},{level:3,title:"misc39",slug:"misc39",children:[]}]}],git:{}}},4265:(l,e,c)=>{c.r(e),c.d(e,{default:()=>V});var i=c(6252);const o=(0,i._)("h2",{id:"文件结构",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#文件结构","aria-hidden":"true"},"#"),(0,i.Uk)(" 文件结构")],-1),t=(0,i._)("h3",{id:"misc24",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#misc24","aria-hidden":"true"},"#"),(0,i.Uk)(" misc24")],-1),a=(0,i._)("blockquote",null,[(0,i._)("p",null,"考察了bmp文件头和文件体")],-1),n={href:"https://blog.csdn.net/whl0071/article/details/126976920",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Uk)("bmp文件详解"),r=(0,i._)("blockquote",null,[(0,i._)("p",null,"bmp文件头是以位图格式：424d 然后其他的参数都是从后往前读的 具体看下图")],-1),u=(0,i._)("p",null,[(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://blog-1318287398.cos.ap-nanjing.myqcloud.com/img/202305291717695.jpg",data:"aurora"})],-1),h=(0,i._)("blockquote",null,[(0,i._)("p",null,[(0,i.Uk)("注意像素是文件体的字节数/3 （三原色）像素也等于图像宽×图像高 这道题是图像的长×高不对，提示是**flag****在图片上面。**"),(0,i._)("strong",null,"宽是对的，根据像素推导高，然后在位图里改，最后导出就好")])],-1),m=(0,i._)("h3",{id:"misc25",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#misc25","aria-hidden":"true"},"#"),(0,i.Uk)(" misc25")],-1),p=(0,i._)("blockquote",null,[(0,i._)("p",null,"考察png文件格式")],-1),d=(0,i._)("p",null,[(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://blog-1318287398.cos.ap-nanjing.myqcloud.com/img/202305291717699.jpg",data:"aurora"})],-1),b=(0,i._)("blockquote",null,[(0,i._)("p",null,[(0,i._)("strong",null,"Png有crc校验")])],-1),g=(0,i.Uk)("图片的"),k={href:"https://so.csdn.net/so/search?q=crc%E6%A0%A1%E9%AA%8C&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},_=(0,i.Uk)("crc校验"),q=(0,i.Uk)("值由从第12个字节到第28个字节的十七位字节进行crc计算得到"),f=(0,i.uE)('<blockquote><p>所以拿到png图的题时应当先校验crc</p></blockquote><blockquote><p>49 48 44 52 00 00 03 84 00 00 00 96 08 02 00 00 00</p></blockquote><blockquote><p>这里使用脚本去根据crc校验值去爆破图像的宽高(脚本都在test.py中)</p></blockquote><h3 id="misc26" tabindex="-1"><a class="header-anchor" href="#misc26" aria-hidden="true">#</a> misc26</h3><blockquote><p>Png文件同25题去跑脚本</p></blockquote><h3 id="misc27" tabindex="-1"><a class="header-anchor" href="#misc27" aria-hidden="true">#</a> misc27</h3><blockquote><p>考点时jpg文件格式 这个参考</p></blockquote>',7),v={href:"https://blog.csdn.net/weixin_40673765/article/details/118786341",target:"_blank",rel:"noopener noreferrer"},x=(0,i.Uk)("jpg文件格式"),y=(0,i.Uk)(),j=(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://blog-1318287398.cos.ap-nanjing.myqcloud.com/img/202305291717712.gif",data:"aurora"},null,-1),U=(0,i._)("blockquote",null,[(0,i._)("p",null,"Jpg文件宽高是在4中 所以需要修改宽高时可以直接查找FFC0 6-7位是高 8-9位是宽")],-1),w=(0,i._)("blockquote",null,[(0,i._)("p",null,"当什么提示flag在下面上面就修改高 宽看题目意思修改")],-1),z=(0,i._)("blockquote",null,[(0,i._)("p",null,[(0,i._)("em",null,[(0,i._)("strong",null,"Jpg的宽高是先高后宽")])])],-1),C=(0,i._)("blockquote",null,[(0,i._)("p",null,"在第四块区域中0008 0008 是高和宽 注意要倒着看")],-1),S=(0,i._)("h3",{id:"misc28",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#misc28","aria-hidden":"true"},"#"),(0,i.Uk)(" misc28")],-1),E={href:"https://www.jianshu.com/p/4fabac6b15b3",target:"_blank",rel:"noopener noreferrer"},A=(0,i.Uk)("GIF 字节格式"),W=(0,i._)("p",null,[(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://blog-1318287398.cos.ap-nanjing.myqcloud.com/img/202305291717050.gif",data:"aurora"})],-1),F=(0,i._)("blockquote",null,[(0,i._)("p",null,"474946383961 文件头后是宽高")],-1),I=(0,i._)("blockquote",null,[(0,i._)("p",null,[(0,i._)("strong",null,"注意点"),(0,i.Uk)(" 还有 Image Seperator里的下一帧宽高也需要改")])],-1),D=(0,i._)("p",null,[(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://blog-1318287398.cos.ap-nanjing.myqcloud.com/img/202305291717123.gif",data:"aurora"})],-1),G=(0,i.uE)('<blockquote><p>这里插一句 gif动图是一帧一帧图片结合起来的 所以每一帧动图都会有Graphics Control Extension 和 Image Descriptor 9021 F9 04 01 32 00 02 00 2C 00 00 00 00 84 03 96 00 87</p></blockquote><blockquote><p>所以呢 改图片需要将整合图片的宽高和每一帧的宽高都要一起改</p></blockquote><blockquote><p>我直接搜索相同宽高一起改就完事了（跟bmp图片文件一样 宽高是倒的 倒着读就行）</p></blockquote><blockquote><p>这里引入stegsolve 图片查看器</p></blockquote><h3 id="misc29" tabindex="-1"><a class="header-anchor" href="#misc29" aria-hidden="true">#</a> misc29</h3><blockquote><p>也是gif文件格式 根据题目修改高 记得每一帧的高都要修改</p></blockquote><blockquote><p>保存以后发现是一张动图，这里就用到了stegsolve工具 analyse模块中frame browser （动图帧格式预览）一帧一帧查看 就获得了</p></blockquote><h3 id="misc30" tabindex="-1"><a class="header-anchor" href="#misc30" aria-hidden="true">#</a> misc30</h3><blockquote><p>还是bmp图片格式 所以按照题目要求修改 宽度950 （3B6）就行 注意得倒着写</p></blockquote><h3 id="misc31" tabindex="-1"><a class="header-anchor" href="#misc31" aria-hidden="true">#</a> misc31</h3><blockquote><p>Bmp图片格式 按照要求高度是对的 修改宽度 根据字节数手搓宽度 注意字节数得除以3才得到像素，因为三原色 但是求解的宽度不是整数需要向下取整</p></blockquote><h3 id="misc32" tabindex="-1"><a class="header-anchor" href="#misc32" aria-hidden="true">#</a> misc32</h3><blockquote><p>考察了png 的crc检验 把文件放到脚本里去跑得出宽和高</p></blockquote><h3 id="misc33" tabindex="-1"><a class="header-anchor" href="#misc33" aria-hidden="true">#</a> misc33</h3><blockquote><p>和上题一样 跑脚本</p></blockquote><h3 id="misc34" tabindex="-1"><a class="header-anchor" href="#misc34" aria-hidden="true">#</a> misc34</h3><blockquote><p>根据提示用脚本遍历宽度就行</p></blockquote><h3 id="miscc35" tabindex="-1"><a class="header-anchor" href="#miscc35" aria-hidden="true">#</a> miscc35</h3><blockquote><p>不能理解为什么高度也会被改掉</p></blockquote><blockquote><p>那么既然改了为什么高度是600</p></blockquote><blockquote><p>那如果遍历高度和宽度呢</p></blockquote><blockquote><p>发现数据量过于庞大 然后上网搜了下 如何批量检测损坏文件</p></blockquote><blockquote><p>引入imghdr库 但是跑出来的甚至是修改好的 也是被检测出来是损坏的 本来题目给的就是损坏文件</p></blockquote><p>这道题</p><p>这边跑脚本的时候注意 宽高所占的字节数 一个十六进制字母占到0.5个字节 一般这个位置是2-4个字节 如果2个字节的话要用短整型（h） 如果4个字节的话要用整型（i）struct.pack(&#39;&gt;h&#39;,i)如果像bmp是倒着写的可以[::-1]</p><h3 id="misc36" tabindex="-1"><a class="header-anchor" href="#misc36" aria-hidden="true">#</a> misc36</h3><blockquote><p>和上一道同理，如果出现有图像但是不是所需要的图像可以考虑改大图片的高，或许就有用呢，一般高度改了确实能隐藏，跑的脚本在文件下。</p></blockquote><h3 id="misc37" tabindex="-1"><a class="header-anchor" href="#misc37" aria-hidden="true">#</a> misc37</h3><blockquote><p>打开文件是发现是动图，提示也是flag在图片里所以gif一张一张分离，用stegsolve analyse frame browser ctfshow{2056782cd57b13261dcbbe3d6eecda17}</p></blockquote><h3 id="misc38" tabindex="-1"><a class="header-anchor" href="#misc38" aria-hidden="true">#</a> misc38</h3>',30),P=(0,i.Uk)("提示是还是flag在图片里，打开后发现是个png文件，看了wp以后才知道这个提示是要先png转到gif格式 工具"),B={href:"https://cdkm.com/cn/png-to-gif",target:"_blank",rel:"noopener noreferrer"},J=(0,i.Uk)("png转gif工具"),N=(0,i.Uk)(" 然后和上一题同样操作就行了"),H=(0,i._)("p",null,"ctfshow{48b722b570c603ef58cc0b83bbf7680d}",-1),L=(0,i._)("blockquote",null,[(0,i._)("p",null,"使用apngdis.exe（APNG Disassembler）工具分离文件也可")],-1),T=(0,i._)("h3",{id:"misc39",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#misc39","aria-hidden":"true"},"#"),(0,i.Uk)(" misc39")],-1),Y=(0,i._)("blockquote",null,[(0,i._)("p",null,'提示是flag如流水，图片帧间隔时间隐写，identify -format "%T " misc39.gif > 1.txt')],-1),Z=(0,i._)("blockquote",null,[(0,i._)("p",null,"这个实在看不懂了网上找吧")],-1),K=(0,i._)("blockquote",null,[(0,i._)("p",null,"flag一般是32位的加上格式是41位，")],-1),M=(0,i._)("p",null,[(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://blog-1318287398.cos.ap-nanjing.myqcloud.com/img/202305291717268.gif",data:"aurora"})],-1),O=(0,i._)("blockquote",null,[(0,i._)("p",null,"可以看到3637循环，可以想到01二进制循环，第一位是37 所以37为1，36为0")],-1),Q=(0,i._)("blockquote",null,[(0,i._)("p",null,"转化为287，287 /41=7 所以7位为一组，转化字符串类型 然后flag就是转化后的字符串")],-1),R={},V=(0,c(3744).Z)(R,[["render",function(l,e){const c=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,t,a,(0,i._)("blockquote",null,[(0,i._)("p",null,[(0,i._)("strong",null,[(0,i._)("a",n,[s,(0,i.Wm)(c)])])])]),r,u,h,m,p,d,b,(0,i._)("blockquote",null,[(0,i._)("p",null,[g,(0,i._)("a",k,[_,(0,i.Wm)(c)]),q])]),f,(0,i._)("blockquote",null,[(0,i._)("p",null,[(0,i._)("strong",null,[(0,i._)("a",v,[x,(0,i.Wm)(c)])]),y,j])]),U,w,z,C,S,(0,i._)("blockquote",null,[(0,i._)("p",null,[(0,i._)("a",E,[A,(0,i.Wm)(c)])])]),W,F,I,D,G,(0,i._)("blockquote",null,[(0,i._)("p",null,[P,(0,i._)("a",B,[J,(0,i.Wm)(c)]),N])]),H,L,T,Y,Z,K,M,O,Q],64)}]])}}]);