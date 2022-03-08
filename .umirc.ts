import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  publicPath: '/actions/',
  hash: true,
  history: { type: 'hash' },
});
