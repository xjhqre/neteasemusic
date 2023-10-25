import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'

Vue.config.productionTip = false

App.mpType = 'app'

/**
 * 数字格式化过滤器
 */
Vue.filter('formatCount', function (value) {
    if (value >= 100000000) {
        return (value / 100000000).toFixed(1) + '亿';
    } else if (value >= 10000) {
        return (value / 10000).toFixed(1) + '万';
    } else {
        return value.toString();
    }
})

const app = new Vue({
    ...App
})
app.$mount()
