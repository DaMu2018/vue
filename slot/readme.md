vue-slot
----
vue-slot是vue的插槽，自己对于slot的一些理解。插槽主要是父组件对于子组件的控制。
### 1
slot插槽有几种类型，slot有匿名插槽，具名插槽，作用域插槽。
#### 1.1匿名插槽
> 匿名插槽

父组件：
````
<child>
    <p> 不具有插槽属性 </p>
</child>
````
子组件：
````
<div>
    <slot>
      <h1>默认替换不带slot属性</h1>
    </slot>
</div>
````
最终展示
````
<p> 不具有插槽属性 </p>
````
只要在父组件中没有写slot属性，在子组件如果有slot标签标记未命名的，则会将父组件中的全部移到slot中。

#### 1.2具名插槽
>具名插槽

名如其意，就是给插槽上个名字。
父组件：
````
<child>
    <p slot='one'>one的内容</p>
</child>
````
子组件：
````
<slot name='one'>One的原本内容<slot>
````
最终展示
````
<p>one的内容</p>
````
如果父组件没有指定one去取代，而在子组件中确有slot = 'one'的相关内容，在页面中会展示slot = ‘one’的原本内容

#### 1.3作用域插槽
>作用域插槽

作用域插槽就是子组件自己带有参数，父组件可以修改子组件的参数

父组件：
````
<child>
    <p slot='list' slot-scope="props">{{props.myId + 1}}</p>
</child>
````
子组件：
````
<slot name='list' v-for='val in arr' :myId='val'>{{val}}</slot>

js:arr: [1, 2, 3]
````
最终展示
````
    2
    3
    4
````
子组件中的 `:myId`就是父组件调用的参数的属性名。
父组件通过 props.myId来访问myId中的参数来修改。
