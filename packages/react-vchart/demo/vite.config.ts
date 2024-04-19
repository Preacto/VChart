import { UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// let localConf: UserConfig = {};

// try {
//   localConf = require('./vite.config.local').default;
// } catch (e) {
//   console.warn('vite.config.local.ts not found', e);
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __DEV__: true,
    __VERSION__: JSON.stringify(require('../../vchart/package.json').version)
  },
  optimizeDeps: {},
  server: {
    host: '0.0.0.0',
    port: 3100
    // port: localConf.server?.port || 3100
  },
  resolve: {
    alias: {
      '@visactor/vchart': path.resolve(__dirname, '../../vchart/src/index.ts'),
      '@visactor/vutils-extension': path.resolve(__dirname, '../../vutils-extension/src/index.ts'),

      '@visactor/vgrammar-core': '/Users/bytedance/Documents/opensource/vgrammar/packages/vgrammar-core/src/index.ts',
      '@visactor/vgrammar-util': '/Users/bytedance/Documents/opensource/vgrammar/packages/vgrammar-util/src/index.ts',
      '@visactor/vgrammar-wordcloud':
        '/Users/bytedance/Documents/opensource/vgrammar/packages/vgrammar-wordcloud/src/index.ts',
      '@visactor/vgrammar-wordcloud-shape':
        '/Users/bytedance/Documents/opensource/vgrammar/packages/vgrammar-wordcloud-shape/src/index.ts',
      '@visactor/vgrammar-sankey':
        '/Users/bytedance/Documents/opensource/vgrammar/packages/vgrammar-sankey/src/index.ts',
      '@visactor/vgrammar-hierarchy':
        '/Users/bytedance/Documents/opensource/vgrammar/packages/vgrammar-hierarchy/src/index.ts',
      '@visactor/vgrammar-projection':
        '/Users/bytedance/Documents/opensource/vgrammar/packages/vgrammar-projection/src/index.ts',
      '@visactor/vgrammar-coordinate':
        '/Users/bytedance/Documents/opensource/vgrammar/packages/vgrammar-coordinate/src/index.ts',

      '@visactor/vrender-core': '/Users/bytedance/Documents/opensource/VRender/packages/vrender-core/src/index.ts',
      '@visactor/vrender-kits': '/Users/bytedance/Documents/opensource/VRender/packages/vrender-kits/src/index.ts',
      '@visactor/vrender-components':
        '/Users/bytedance/Documents/opensource/VRender/packages/vrender-components/src/index.ts'
      // ...localConf.resolve?.alias
    }
  }
});
