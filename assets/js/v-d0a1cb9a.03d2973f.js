(self.webpackChunksite=self.webpackChunksite||[]).push([[3812],{1258:(s,e,n)=>{"use strict";n.r(e),n.d(e,{data:()=>a});const a={key:"v-d0a1cb9a",path:"/guide/basic/structure.html",title:"目录结构",lang:"zh-CN",frontmatter:{title:"目录结构",order:1},excerpt:"",headers:[{level:2,title:".ice/",slug:"ice",children:[]},{level:2,title:"build/",slug:"build",children:[]},{level:2,title:"mock/",slug:"mock",children:[]},{level:2,title:"public/",slug:"public",children:[]},{level:2,title:"src/",slug:"src",children:[{level:3,title:"components/",slug:"components",children:[]},{level:3,title:"layouts/",slug:"layouts",children:[]},{level:3,title:"models/",slug:"models",children:[]},{level:3,title:"pages/",slug:"pages",children:[]},{level:3,title:"app.ts",slug:"app-ts",children:[]},{level:3,title:"config.ts",slug:"config-ts",children:[]},{level:3,title:"global.scss",slug:"global-scss",children:[]},{level:3,title:"routes.ts",slug:"routes-ts",children:[]}]},{level:2,title:"build.json",slug:"build-json",children:[]},{level:2,title:"package.json",slug:"package-json",children:[]},{level:2,title:"tsconfig.json",slug:"tsconfig-json",children:[]}],filePathRelative:"guide/basic/structure.md",git:{updatedTime:1621391522e3,contributors:[]}}},5293:(s,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});const a=(0,n(6252).uE)('<p>icejs 的默认应用目录架构提供了良好的代码分层结构，适用于开发或大或小的应用，约定的目录结构如下：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>├── .ice/                          # 运行时生成的临时目录\n├── build/                         # 构建产物目录\n├── mock/                          # 本地模拟数据\n│   ├── index.js\n├── public/\n│   ├── index.html                 # 应用入口 HTML\n│   └── favicon.png                # Favicon\n├── src/                           # 源码\n│   ├── components/                # 自定义业务组件\n│   ├── layouts/                   # 布局组件\n│   ├── pages/                     # 页面\n│   ├── models/                    # 应用级数据状态\n│   ├── global.scss                # 全局样式\n│   ├── config.ts                  # 环境配置\n│   ├── routes.ts                  # 路由配置\n│   └── app.ts                     # 应用入口\n├── build.json\n├── package.json\n└── tsconfig.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="ice"><a class="header-anchor" href="#ice">#</a> .ice/</h2><p>运行 icejs 项目时默认生成的临时目录，该目录不需要进行 git 提交。</p><h2 id="build"><a class="header-anchor" href="#build">#</a> build/</h2><p>运行 <code>npm run build</code> 后的构建产物目录。</p><h2 id="mock"><a class="header-anchor" href="#mock">#</a> mock/</h2><p>本地模拟数据的目录。<a href="/docs/guide/advance/mock">详见</a></p><h2 id="public"><a class="header-anchor" href="#public">#</a> public/</h2><p>静态资源目录，默认包含 <code>index.html</code> 和 <code>favicon.png</code>。</p><h2 id="src"><a class="header-anchor" href="#src">#</a> src/</h2><p>源码目录</p><h3 id="components"><a class="header-anchor" href="#components">#</a> components/</h3><p>项目通用的组件目录，推荐的目录形式如下：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Guide/\n  ├── index.tsx\n  ├── index.module.scss\n  └── <span class="token bold"><span class="token punctuation">__</span><span class="token content">tests</span><span class="token punctuation">__</span></span>          # 就近测试用例\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="layouts"><a class="header-anchor" href="#layouts">#</a> layouts/</h3><p>项目的布局文件目录，布局通常包含导航配置，布局组件，样式三部分，推荐的目录形式如下：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>BasicLayout/\n  ├── menuConfig.ts      # 布局对应的菜单配置\n  ├── index.tsx\n  └── index.module.scss\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="models"><a class="header-anchor" href="#models">#</a> models/</h3><p>项目的全局数据模型目录，通常包含多个 model 文件，推荐的目录形式如下。<a href="/docs/guide/basic/store">详见</a></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>models/\n  ├── foo.ts\n  └── bar.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="pages"><a class="header-anchor" href="#pages">#</a> pages/</h3><p>项目的页面文件目录，页面通常包含数据模型，页面组件、样式三部分，推荐的目录形式如下。</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Home/                    # Home 页面\n  ├── model.ts           # 页面级数据状态\n  ├── index.tsx          # 页面入口\n  └── index.module.scss  # 页面样式文件\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="app-ts"><a class="header-anchor" href="#app-ts">#</a> app.ts</h3><p>项目的入口文件，用于对应用进行全局配置，包括路由、运行环境、请求、日志等。<a href="/docs/guide/basic/app">详见</a></p><h3 id="config-ts"><a class="header-anchor" href="#config-ts">#</a> config.ts</h3><p>项目的环境配置，用于根据不同环境进行区分配置。<a href="/docs/guide/basic/config#%E6%A0%B9%E6%8D%AE%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">详见</a></p><h3 id="global-scss"><a class="header-anchor" href="#global-scss">#</a> global.scss</h3><p>全局的样式配置，框架默认会引入该文件。<a href="/docs/guide/basic/style">详见</a></p><h3 id="routes-ts"><a class="header-anchor" href="#routes-ts">#</a> routes.ts</h3><p>应用的路由配置文件。<a href="/docs/guide/basic/router">详见</a></p><h2 id="build-json"><a class="header-anchor" href="#build-json">#</a> build.json</h2><p>应用的工程配置文件。<a href="/docs/guide/basic/build">详见</a></p><h2 id="package-json"><a class="header-anchor" href="#package-json">#</a> package.json</h2><p>应用所需要的各种模块，以及配置信息（比如名称、版本、许可证等元数据）。</p><h2 id="tsconfig-json"><a class="header-anchor" href="#tsconfig-json">#</a> tsconfig.json</h2><p>TypeScript 编译所需的配置文件。</p>',38),l={render:function(s,e){return a}}}}]);