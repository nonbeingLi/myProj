export function formatDate(date,fmt){
    //利用正则表达式
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));  
        //substr date.getFullYear()->2018 转成字符串.substr 根据yyyy的长短确定数字2018截取的长度 yy则18
    }
    let o ={
        'M+': date.getMonth()+1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for(let k in o){
        if(new RegExp(`(${k})`).test(fmt)){
            let str= o[k]+'';
            fmt=fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str){ //左边补0
    return ('00'+str).substr(str.length);
}