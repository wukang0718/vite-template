import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		styleImport({
			libs: [
				{
					libraryName: 'element-plus',
					resolveStyle: (name) => {
						name = name.slice(3)
						return `element-plus/packages/theme-chalk/src/${name}.scss`;
					},
					resolveComponent: (name) => {
						return `element-plus/package/${name}`;
					},
					esModule: true,
					ensureStyleFile: true
				}
			]
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				// 配置scss基础文件
				additionalData: '@import "@/assets/scss/base/index.scss";'
			}
		}
	},
	server: {
		open: process.env.NODE_ENV === 'development',
		proxy: {
			// 配置开发环境的反向代理
		}
	},
	build: {
		target: 'es2015'
	}
})
