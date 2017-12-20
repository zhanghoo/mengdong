## 1.组件/实例的选项的顺序
## name, components, directives, props, data, computed, watch, 生命周期钩子, methods
## 2.元素特性的顺序
## is, v-for, v-if, v-else, v-show, ref, key, slot, 其他特性, v-on

# 附录
## 1.组件/实例的选项的顺序
## name, components, directives, props, data, computed, watch, 生命周期钩子, methods
### 1.副作用 el
el：只在new创建实例中，提供一个已存在的DOM元素作为Vue实例的挂载目标，eg，app
### 2.全局感知 name parent
name： 允许组件模板递归调用自身。另在调试模式中，可以很好的定位到出错的vue组件。
parent：指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。
### 3.组件类型 functional
functional：使组件无状态 (没有 data ) 和无实例 (没有 this 上下文)。他们用一个简单的 render 函数返回虚拟节点使他们更容易渲染。
### 4.模板修改器 delimiters comments
delimiters：改变纯文本插入分隔符。（这个选项只在完整构建版本中的浏览器内编译时可用。）
comments：当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们。（这个选项只在完整构建版本中的浏览器内编译时可用。）
### 5.模板依赖 components directives filters
components
directives：自定义指令 eg，v-focus
### 6.组合 extends mixins
extends：允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)，而无需使用 Vue.extend。这主要是为了便于扩展单文件组件。
mixins：mixins 选项接受一个混合对象的数组。这些混合实例对象可以像正常的实例对象一样包含选项，他们将在 Vue.extend() 里最终选择使用相同的选项合并逻辑合并。举例：如果你混合包含一个钩子而创建组件本身也有一个，两个函数将被调用。
Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。
### 7.接口 inheritAttrs model props/propsData
inheritAttrs：默认情况下父作用域的不被认作 props 的特性绑定 (attribute bindings) 将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为。通过设置 inheritAttrs 到 false，这些默认行为将会被去掉。而通过 (同样是 2.4 新增的) 实例属性 $attrs 可以让这些特性生效，且可以通过 v-bind 显性的绑定到非根元素上。
注意：这个选项不影响 class 和 style 绑定。
model：允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，但是一些输入类型比如单选框和复选框按钮可能像使用 value prop 来达到不同的目的。使用 model 选项可以回避这些情况产生的冲突。
props：props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。
propsData：创建实例时传递 props。主要作用是方便测试。（只用于 new 创建的实例中。）
### 8.本地状态 data computed
data
computed
### 9.事件 watch 生命周期钩子（按照它们被调用的顺序）
watch
生命周期钩子
### 10.非响应式的属性 methods
methods
### 11.渲染 template/render renderError
template：一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。
如果值以 # 开始，则它将被用作选择符，并使用匹配元素的 innerHTML 作为模板。常用的技巧是用 <script type="x-template"> 包含模板。
render：字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode。
如果组件是一个函数组件，渲染函数还会接收一个额外的 context 参数，为没有实例的函数组件提供上下文信息。
renderError：只在开发者环境下工作。
当 render 函数遭遇错误时，提供另外一种渲染输出。其错误将会作为第二个参数传递到 renderError。这个功能配合 hot-reload 非常实用。
## 2.元素特性的顺序
## is, v-for, v-if, v-else, v-show, ref, key, slot, 其他特性, v-on
### 1.定义 is
is：用于动态组件且基于 DOM 内模板的限制来工作。
### 2.列表渲染 v-for
### 3.条件渲染 v-if v-else-if v-else v-show v-cloak
v-cloak：这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
### 4.渲染方式 v-pre v-once
v-pre：跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
v-once：只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
### 5.全局感知 id
### 6.唯一的特性 ref key slot
### 7.双向绑定 v-model
### 8.其他特性 所有普通绑定或未绑定的特性
### 9.事件 v-on
### 10.内容 v-html v-text
v-html：更新元素的 innerHTML 。注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译 。如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。
v-text：更新元素的 textContent。如果要更新部分的 textContent ，需要使用 {{ Mustache }} 插值。
