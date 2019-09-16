/**
 * Created by Administrator on 2017/12/16.
 * 过滤器
 */

import Vue from 'vue'

// 过滤器

// 账单状态过滤器
let billStatus = Vue.filter("billStatus", function (value) {
    switch (value) {
        case 0: return "未接收";
            break;
        case 1: return "已接收";
            break;
        case 2: return "待编辑"
            break; 
        case 3: return "待审核";
            break;
        case 4: return "已审核";
            break;
        case 5: return "已发送";
            break;
    }
});

// 发票申请自动变为大写
let autoChange = Vue.filter("autoChange",function(value) {
    return value.toUpperCase()
})

export default {
    billStatus,
    autoChange,
}
