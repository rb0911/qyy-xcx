import Vue from 'vue'
import App from './App'

// main.js，注意要在use方法之后执行
import uView from 'uview-ui'
Vue.use(uView)
// 如此配置即可
// uni.$u.config.unit = 'rpx'

// uni.$u.setConfig({
// 	// 修改$u.config对象的属性
// 	config: {
// 		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
// 		unit: 'rpx'
// 	},
// 	// 修改$u.props对象的属性
// 	props: {
// 		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
// 		radio: {
// 			size: 15
// 		}
// 		// 其他组件属性配置
// 		// ......
// 	}
// })

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

