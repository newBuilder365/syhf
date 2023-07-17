import { defineConfig } from 'dumi';

const title = 'syhf';

export default defineConfig({
  title,
  base: `/${title}/`,
  publicPath: `/${title}/`,
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'syhf',
    footer: '基于公司的组件库',
  },
});
