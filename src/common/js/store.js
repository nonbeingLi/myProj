export function saveToLocal(id,key,value){
    let seller = window.localStorage.__seller__; //双下划线表私有
    if(!seller){
        seller = {};
        seller[id] = {};
    }else{
        seller = JSON.parse(seller);  //字符串转为json
        if(!seller[id]){
            seller[id] = {};
        }
    }
    seller[id][key] = value;
    window.localStorage.__seller__ = JSON.stringify(seller)  //转为字符串
};
export function loadFromLocal(id,key,def){  //def 默认值
    let seller = window.localStorage.__seller__; //双下划线表私有
    if(!seller){
       return def;
    }
    seller = JSON.parse(seller);  //字符串转为json
    if(!seller[id]){
        return def;
    }
    let ret = seller[id][key] ;
    return ret || def;
}