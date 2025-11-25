# Digital Twin Pro - 数字孪生编辑器

一个功能强大的3D数字孪生场景编辑器，支持SLAM地图导入、点位管理、路径规划等功能。

## 功能特性

✅ **3D场景编辑**
- 墙体、地面、柱子等基础建筑组件
- 曲线墙体和多边形地面绘制
- 自定义3D模型导入（GLB/GLTF格式）

✅ **SLAM地图支持**
- 内置地图模板选择
- 地图JSON导入/导出
- 点位和路径可视化

✅ **智能点位管理**
- 框选批量操作
- 点位模型批量替换
- CNC加工中心、装卸点等预设类型

✅ **多视角切换**
- 透视视角
- 俯视视角
- 正视视角

✅ **完整的编辑功能**
- 多选、复制、粘贴
- 撤销/重做
- 变换控制（移动、旋转、缩放）
- 图层管理

## 快速开始

### 1. 安装依赖

\`\`\`bash
cd digital-twin-pro
npm install
\`\`\`

### 2. 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

浏览器会自动打开 `http://localhost:3000`

### 3. 构建生产版本

\`\`\`bash
npm run build
\`\`\`

构建后的文件在 `dist` 目录中。

### 4. 预览生产版本

\`\`\`bash
npm run preview
\`\`\`

## 项目结构

\`\`\`
digital-twin-pro/
├── src/
│   ├── components/        # React组件
│   │   ├── Scene/        # 3D场景组件
│   │   ├── UI/           # UI组件
│   │   └── Map/          # 地图相关组件
│   ├── data/             # 数据文件
│   │   └── builtInMaps.js # 内置地图数据
│   ├── utils/            # 工具函数
│   ├── styles/           # 样式文件
│   ├── App.jsx           # 主应用组件
│   └── main.jsx          # 入口文件
├── public/               # 静态资源
│   └── cnc.glb          # CNC模型文件
├── index.html            # HTML模板
├── package.json          # 项目配置
├── vite.config.js        # Vite配置
└── tailwind.config.js    # Tailwind CSS配置
\`\`\`

## 使用说明

### 加载内置地图

1. 点击左侧面板的"选择内置地图"按钮
2. 选择"1.5楼层地图"
3. 确认是否保留现有数据
4. 点击"加载地图"

### 批量替换点位

1. 导入地图后，使用框选工具选择多个点位
2. 左侧面板会显示"批量替换"选项
3. 点击"CNC"或"正方体"按钮进行批量替换

### 导入自定义地图

1. 点击"导入工程 JSON"按钮
2. 选择你的地图JSON文件
3. 系统会自动识别并加载地图数据

## 技术栈

- **React 18** - UI框架
- **Three.js** - 3D渲染引擎
- **React Three Fiber** - React的Three.js封装
- **@react-three/drei** - Three.js辅助工具
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **Lucide React** - 图标库

## 开发建议

- 使用 VS Code 并安装 ES Lint 和 Prettier 插件
- 建议使用 Node.js 18+ 版本
- 开发时保持浏览器控制台打开以查看日志

## License

MIT
