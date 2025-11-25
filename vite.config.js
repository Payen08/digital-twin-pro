import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 👇 核心修复：这一行是解决 GitHub 404 问题的关键
  base: './',

  plugins: [react()],
  server: {
    // 👇 (可选) 这是为了让你能通过 IP (手机) 访问
    host: '0.0.0.0',
    port: 3000,
    open: true
  }
})