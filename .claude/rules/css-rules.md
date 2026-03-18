# CSS 编码规则

## 类名拼接规则（最重要）

**禁止**使用 `&` 符号拼接类名：

```css
/* 禁止 — 不允许以下写法 */
.card {
  &-header { }   /* ❌ BEM 元素拼接 */
  &__item { }    /* ❌ BEM 修饰拼接 */
  &--active { }  /* ❌ BEM 状态拼接 */
}

/* 允许 — 状态类拼接 */
.card {
  &.active { }   /* ✅ 状态类 */
  &.success { }  /* ✅ 状态类 */
  &:hover { }    /* ✅ 伪类 */
  &::before { }  /* ✅ 伪元素 */
}

/* 正确写法 — 完整类名 */
.card-header { }
.card-item { }
.card-active { }
```

## 类名命名

- 使用 kebab-case
- 以组件名为前缀避免冲突
- 示例：`CenterAlign.vue` 中使用 `.center-align-box`、`.center-align-inner`

## 布局

- 优先使用 Flexbox 和 Grid
- 避免使用 `float` 布局
- 使用 CSS 变量（`var(--primary-color)`）复用颜色

## 单位

- 间距和尺寸：`px`
- 字体：`px` 或 `rem`
- 避免使用 `em`（继承不可控）
