---
title: 输入框
order: 1
nav:
  title: '组件'
  order: 1
---

# 按钮

> 基于`Input`的扩展，主要用于表格编辑时，展示区域太小的问题

```jsx
import { useState } from 'react';
import { CustomInput } from 'syhf';

export default () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <CustomInput showBigArea={true} value={value} onChange={handleChange} />
  );
};
```

# API

> 其它属性完全继承原有`Input`组件属性

|   属性名    |                     描述                     |   类型    | 默认值 |
| :---------: | :------------------------------------------: | :-------: | :----: |
| showBigArea | 是否显示扩展区域，当组件设置为受控组件时生效 | `boolean` | false  |
