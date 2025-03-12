/*
 * @Description: 
 * @Date: 2022-06-23 11:38:34
 * @LastEditTime: 2025-03-12 15:57:18
 */
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer';
import buildTimePlugin from 'vite-plugin-build-time'
import viteImagemin from 'vite-plugin-imagemin'
import ViteCompressionPlugin from 'vite-plugin-compression'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      visualizer(),
      buildTimePlugin(),
      ViteCompressionPlugin({
        algorithm: "gzip",
        ext: ".gz",
        deleteOriginFile: true,
      }),
  
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false
        },
        optipng: {
          optimizationLevel: 7
        },
        mozjpeg: {
          quality: 20
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox'
            },
            {
              name: 'removeEmptyAttrs',
              active: false
            }
          ]
        }
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]"
      }),
      AutoImport({
        resolvers: [ArcoResolver()],
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true
          })
        ]
      })
    ],
    // define: {
    //   'process.env': loadEnv(mode, process.cwd())
    // },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/variable.scss";',
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
      }
    },
    base: './', // 设置打包路径
    server: {
      port: 3000, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域

      // 设置代理，根据我们项目实际情况配置
      proxy: {
        '/api': {
          target: 'http://192.168.9.13:8000',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace('/api/', '/')
        }
      }
    },
    build: {
      outDir: 'board',
      sourcemap: false,
      minify: false,
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return id.toString().split('node_modules/')[1].split('/')[0].toString();
        }
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        }
      }
    }
  }
})
