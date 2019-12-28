# elevator

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 模拟电梯运行-构建分析
- 控制中心
    - 楼层高度 [1,2,3,...,28,29,30]
    - 梯副数量 [1,2,3,4]
    - 呼叫接听 {1:false,2:false,3:false,4:false}
- 升降梯
    - 按钮: `['楼层按钮*n','开门','关门','等待','呼叫']`
        - 按钮状态: `['默认','按下']`
        - 箱门状态: `['开启中','开启的','关闭中',关闭的]`
    - 位置状态: `['上行中','下行中','上行等待','下行等待','停止']` 
- 建筑['上行按钮','下行按钮','状态']
    - 每个楼层: `['门','上按钮','下按钮']`
        - 楼层门状态: `['开启中','开启的','关闭中',关闭的]`
        - 按钮状态: `['默认','按下']`

> ### 需求条
所有状态都在 控制中心体现

写点东西,证明今天来过
