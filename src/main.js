import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import store from "@/store";

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
// 拼接名称
Vue.filter('spliceAuthorName', function (ar) {
    let ret = ''
    for (let i = 0; i < ar.length; i++) {
        if (i !== ar.length - 1) {
            ret += ar[i].name + '/'
        } else {
            ret += ar[i].name
        }
    }
    return ret
})
// 时间戳格式化
Vue.filter('timestampFormatting', function (timeStamp) {
    let date = new Date(timeStamp)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return `${year}年${month}月${day}日`
})

const app = new Vue({
    ...App,
    store
})
app.$mount()
