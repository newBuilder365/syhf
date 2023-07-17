# 导航

> 基于公司平台组件二次封装的组件库

### 环境

- `react`版本大于`16.8.6`
- `react-dom`版本大于`16.8.6`
- `@sy/platform`版本大于`3.1.1-fw.2`

### 安装

```she
npm install syhf --save
```

或者

```she
yarn add syhf
```

### 发布`npm`包

#### 1.更新版本号

```shell
npm version patch
```

- `npm version patch`：小变动，比如修复 bug 等，版本号变动 **v1.0.0->v1.0.1**
- `npm version minor`：增加新功能，不影响现有功能,版本号变动 **v1.0.0->v1.1.0**
- `npm version major`：破坏模块对向后的兼容性，版本号变动 **v1.0.0->v2.0.0**

#### 2.发布

```shell
npm publish
```
