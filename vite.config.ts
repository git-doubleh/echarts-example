/*
 * @Description: 
 * @Date: 2022-06-23 11:38:34
 * @LastEditTime: 2024-11-27 14:43:46
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]"
      }),
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
      outDir: 'board'
    }
  }
})
