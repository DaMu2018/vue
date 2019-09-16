function formatDate(now){
    var date = new Date(now);
    var y=date.getFullYear();  
    var m=date.getMonth()+1;  
    var d=date.getDate();
     m = m >9 ? m : '0'+m 
    d = d >9 ? d : '0'+d
 return y+"-"+m+"-"+d
}
 function formatMoth(now){
    var date = new Date(now);
    var y=date.getFullYear();  
    var m=date.getMonth()+1;  
    m = m >9 ? m : '0'+m 
 return y+"-"+m
}
 function formatYear(now){
    var date = new Date(now);
    var y=date.getFullYear();  
 return y+""
}
/*
* 单位换算
    * @param unit {string} 要格式化的数字对象
    * @param num {number} 要格式化的数字
    * @param len {number} 加小数位一共的长度
    * @param split {number} 换算位数（3位、4位...）
* */

var UnitConvers = {
    watt: ['kW', 'MW', 'GW'],
    rmb: ['元', '万元', '亿元'],
    kilowatt: ['kWh', 'MWh', 'GWh'],
    gas: ['m³', '万m³', '亿m³'],
    water: ['吨', '万吨', '亿吨'],
    seat: ['座', '万座', '亿座'],
    area: ['平方米', '万平方米', '亿平方米'],
    block: ['块', '万块', '亿块'],
    platform: ['台', '万台', '亿台'],
    kg: ['千克', '吨', '万吨', '亿吨'],
    nums:["座","万座","亿座","万亿座","兆座"],
    num:["个","万个","亿个","万亿个","兆个"],
    tree: ['棵', '万棵', '亿棵']
}
 let convertUnit = function (unit, num, len, split, isInt) {
    if (isNaN(parseFloat(num))) {
        return {
        num: '0.00',
        unit: UnitConvers[unit][0]
        }
    }
    let thisNum = '' + parseFloat(num)
    let _len = (len && parseFloat(len)) || 6
    let _split = (split && parseFloat(split)) || 4
    let units = UnitConvers[unit]
    let thisUnit = units[0]
    let _isInt = !!isInt

    var formatNum = parseFloat(thisNum).toFixed(2)
    var i = 0
    if (('' + formatNum).length > _len + 1) {
        do {
        if (unit === 'kg' && i === 1) {
            _split += 1
        }
        formatNum = (parseFloat(thisNum) / Math.pow(10, _split)).toFixed(2)
        thisNum = formatNum
        i++
        thisUnit = units[i]
        }
        while (('' + formatNum).length > _len)
    }
    if (_isInt && !i) {
        thisNum = parseInt(thisNum)
    } else {
        thisNum = parseFloat(thisNum).toFixed(2)
    }
    return {
        unit: thisUnit,
        num: thisNum
    }
}
       /*
        * 单位换算
         * @param unit {string} 要格式化的数字对象
         * @param num {number} 要格式化的数字
         * @param len {number} 加小数位一共的长度
         * @param split {number} 换算位数（3位、4位...）
         * @param isInt {Boolean} 是否要求：未换算时返回整数，有换算才返回小数。默然是false
        * */
let   convertunit = function (obj) {
        var options = {
            unit:'',
            num:'',
            len:6,
            split:4,
            isInt:false,
        };
        options = options.concat(obj)
        convertunit[options.unit][0]
        if(!parseFloat(options.num)) return {
            num:'0.00',
            unit:UnitConvers[options.unit][0]
        };
        var isInt = !!options.isInt;
        var _num = ""+parseFloat(options.num);
        var len = (options.len && parseFloat(options.len) ) || 6;
        var split = (options.split && parseFloat(options.split) ) || 4;
        var units = convertunit[options.unit];
        var _unit = units[0];

        var formatNum = parseFloat(_num).toFixed(2);
        var i=0;
        if((''+formatNum).length>len+1){
            do{
                if (_unit === 'kg' && i===1){
                    split+=1
                }
                i++;
                formatNum = (parseFloat(_num)/Math.pow(10,split)).toFixed(2);
                _num = formatNum;
                _unit = units[i]
            }
            while ((''+formatNum).length>len)
        }
        if(isInt && !i){
            _num = parseInt(_num)
        }else {
            _num = parseFloat(_num).toFixed(2)
        }

        return {
            num:_num,
            unit:_unit
        }
    }
module.exports = {
    ConvertUnit: convertUnit,
    convertunit:convertunit,
    formatDate: formatDate,
    formatMoth: formatMoth,
    formatYear:formatYear
}