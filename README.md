# mengdong

> An app for pet.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8089
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

v1.0, 大致的布局，问题很多。只是个概念版。注意的最多的是，按照官网的[风格指南](https://cn.vuejs.org/v2/style-guide/)对很多东西进行了规范。
## 必要的 
### 组件名是多个单词；
### data返回必须是一个函数；
### Prop定义应该尽量详细；
### v-for 设置键值 :key；
### 组件样式设置作用域 不一定都是用scoped特性，也可以用CSS Modules eg，加一个前缀；
### 私有属性名，加前缀 $_ ；
小结，
v1.0中，组件名仍有很多单个单词的组件，没注意，eg，guide.vue, login.vue。
组件样式设置没有加scoped了，但是类的名称命名不够简洁太长，主要是跟着组件名来命名的，eg，shop-pet-type-item-page-content，需要改进。
data返回函数，prop详细，v-for有key值，私有属性没有太多但也加上了前缀 $_ 
## 强烈推荐
### 组件文件，将每个组件单独成文件；
### 单文件开头都用大写字母开头（或者短横线连接）
### 基础组件名（展示类的，无逻辑或无状态的）加前缀，如Base，App或V
### 单例组件名（每个页面只使用一次，不接受任何prop）加前缀，The
### 紧耦合组件名（只在父组件场景下有意义的）和父组件紧耦合的子组件，应以父组件名作为前缀
### 组件名中的单词顺序（高级别一般化描述的单词开头）
### 自闭合组件（在vue文件中没有内容的组件使用自闭合的标签，跟简洁）
### 模板组件名大小写 短横线或者大写字母开头
### js/JSX中的组件名，始终大写字母开头
### 完整的单词组件名，尽量不用缩写的单词命名
### prop声明，在声明时使用驼峰法，在使用时使用短横线
### 多个特性的元素，分多行撰写，每个特性一样。易读。
### 模板中简单的表达式，复杂的应重构为计算属性或方法
### 简单的计算属性，将属性尽可能的简单化
### 非空HTML特性值应该始终带引号
### 指令缩写，要么都有，要么都不用
小结，
v1.0中，单文件开头还是用小写开头的，几采用的是驼峰法T T。基础组件和单例组件待后期提取，如果按官网说的，纯展示类的，怕只有一个Icon了，button什么的怎么可能没有逻辑和状态。有待理解。紧耦合组件也不多。
单词顺序，暂待多商榷。【自闭合没有注意，用的多是双闭合的】。【多个特性的时候，也没换行】
js中变量（包括prop）一般都是驼峰法，html中prop也有改用短横线。单词也未出现缩写。
接下来的迭代二中，改进的地方：单文件大写开头（同时在html中引用也是大写的），要自闭合组件，多特性要换行。
## 推荐
### 组件/实例的选项顺序
### 元素特性的顺序
### 组件/实例选项中空行
### 单文件组件中的顶级元素的顺序
小结，
v1.0中，组件/实力顺序有一边对着一边慢慢的适应和记忆。空行没有加。顶级元素也始终一致 template，script，style
元素特性的顺序有待多适应
## 谨慎使用（有潜在危险的模式）
### v-if/v-if-else/v-else中没有使用key，（如果一组v-if+v-else的元素类型相同，最好使用 key）
### 元素选择器应避免出现。大量的元素选择器会变得很慢。
### 父子组件通信，优先使用prop和事件进行父子组件之间的通信。
### 非Flux的全局状态管理 （优先通过 Vuex管理全局状态，而不是通过 this.$root或一个全局事件总线）
小结，
v1.0中，v-if/v-if-else/v-else同元素没有使用key，以后要记得加上key。
元素选择器，不管是不是在vue中都很少使用的，都是会用上class的。父子间通信也是用的prop。全局状态也是用的Vuex。

# v1.0 总结
1. 代码的编写尽可能从开始学习就按照规范来，久了也就习惯了。这只是个纯粹的概念演示版，很多东西都需要改进。但也相对于之前的一些自学项目有了很大的提高。从临摹开始到自己学习开发。在过程中，对ES6的语法也有了实战性的了解。
2. 项目展示慢，主要是未有常用到vue-router，大部分组件都是display：none状态，这样带了很多z-index的问题。版本2中开始更多考虑使用vue-router。
3. 对于page和component的问题，只是很简单的做了五个主page，其他的都是component，这样分类太粗糙。像很多本身是page的，命名中也有page的字眼，但还是放在了component中。
page：有hader的即为page，底部肯能是nav（主page），footer（texts）或者无。这些都是具有完整结构的vue文件可以放到page中。
component：非page页，即可抽调出来。
4. 大量使用到了 nav & swiper的地方，可以先抽调出成一个component。

