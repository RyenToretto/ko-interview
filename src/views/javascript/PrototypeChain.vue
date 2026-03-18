<template>
  <QAQuestion
    title="原型与原型链"
    :questions="questions"
  >
    <template #description>
      <p>本题考察对 JavaScript 原型机制、原型链、继承的深入理解。这是面试中<strong>最高频</strong>的基础题之一。</p>
    </template>

    <template #extra>
      <el-divider>在线验证区</el-divider>
      <CodeRunner
        title="原型链在线验证"
        :initial-code="playgroundCode"
      />
    </template>
  </QAQuestion>
</template>

<script setup lang="ts">
import QAQuestion from '@/components/QAQuestion.vue'
import CodeRunner from '@/components/CodeRunner.vue'

const playgroundCode = `// 原型链验证
function Person(name) { this.name = name }
Person.prototype.greet = function() { return 'Hello, ' + this.name }

const p = new Person('张三')
console.log('p.__proto__ === Person.prototype:', p.__proto__ === Person.prototype)
console.log('Person.prototype.constructor === Person:', Person.prototype.constructor === Person)
console.log('p.greet():', p.greet())

// 原型链查找
console.log('p.toString:', typeof p.toString, '(来自 Object.prototype)')
console.log('Object.prototype.__proto__:', Object.prototype.__proto__)

// instanceof 原理
function myInstanceof(obj, Ctor) {
  let proto = Object.getPrototypeOf(obj)
  while (proto) {
    if (proto === Ctor.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
  return false
}
console.log('myInstanceof(p, Person):', myInstanceof(p, Person))
console.log('myInstanceof(p, Object):', myInstanceof(p, Object))
console.log('myInstanceof(p, Array):', myInstanceof(p, Array))
`

const questions = [
  {
    q: '请解释 prototype、__proto__ 和 constructor 三者的关系。',
    a: `
      <p><strong>三者关系：</strong></p>
      <ul>
        <li><code>prototype</code>：函数独有的属性，指向原型对象（实例共享的属性和方法定义在此）</li>
        <li><code>__proto__</code>：每个对象都有，指向其构造函数的 <code>prototype</code>（即 <code>obj.__proto__ === Constructor.prototype</code>）</li>
        <li><code>constructor</code>：原型对象上的属性，指回构造函数本身（即 <code>Foo.prototype.constructor === Foo</code>）</li>
      </ul>
      <pre>function Person(name) { this.name = name }
const p = new Person('张三')

p.__proto__ === Person.prototype        // true
Person.prototype.constructor === Person // true
p.constructor === Person                // true (沿原型链找到)</pre>
    `,
  },
  {
    q: '什么是原型链？属性查找的过程是怎样的？',
    a: `
      <p><strong>原型链</strong>：对象通过 <code>__proto__</code> 串联形成的链式结构。</p>
      <p><strong>查找过程</strong>：访问对象属性时：</p>
      <ol>
        <li>先在对象自身查找</li>
        <li>找不到则沿 <code>__proto__</code> 向上查找其原型</li>
        <li>继续向上直到 <code>Object.prototype</code></li>
        <li><code>Object.prototype.__proto__</code> 为 <code>null</code>，查找结束，返回 <code>undefined</code></li>
      </ol>
      <pre>p → Person.prototype → Object.prototype → null</pre>
    `,
  },
  {
    q: 'instanceof 的原理是什么？如何手写实现？',
    a: `
      <p><strong>原理</strong>：检查右侧构造函数的 <code>prototype</code> 是否在左侧对象的原型链上。</p>
      <pre>function myInstanceof(obj, Constructor) {
  let proto = Object.getPrototypeOf(obj)
  while (proto !== null) {
    if (proto === Constructor.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
  return false
}</pre>
    `,
  },
  {
    q: 'ES6 的 class 和 ES5 的构造函数有什么区别？class 的本质是什么？',
    a: `
      <p><strong>class 本质</strong>：是 ES5 构造函数 + 原型继承的语法糖。</p>
      <p><strong>区别：</strong></p>
      <ul>
        <li>class 必须用 <code>new</code> 调用，构造函数可以直接调用</li>
        <li>class 内部方法不可枚举</li>
        <li>class 不存在变量提升（暂时性死区）</li>
        <li>class 的 <code>extends</code> 实现继承更简洁（本质是寄生组合式继承）</li>
        <li>class 有 <code>static</code> 静态方法</li>
      </ul>
    `,
  },
  {
    q: 'JavaScript 有哪些继承方式？各有什么优缺点？',
    a: `
      <p><strong>1. 原型链继承</strong>：子类原型指向父类实例。缺点：共享引用类型属性。</p>
      <p><strong>2. 构造函数继承</strong>：子类中调用 <code>Parent.call(this)</code>。缺点：无法继承原型方法。</p>
      <p><strong>3. 组合继承</strong>：原型链 + 构造函数。缺点：父构造函数调用两次。</p>
      <p><strong>4. 寄生组合式继承（最优）</strong>：</p>
      <pre>function inherit(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}</pre>
      <p><strong>5. ES6 class extends</strong>：语法糖，底层是寄生组合式继承。</p>
    `,
  },
]
</script>
