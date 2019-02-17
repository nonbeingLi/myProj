/*解析url参数
 @example ？id=123&a=b
 @return Object {id:123,a:b}
*/
export function urlParse(){
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    //['?id=123','&a=b']
    if(arr){
        arr.forEach((item)=>{
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);  //对可能进行 encodeURIComponent() 函数编码的 URI 进行解码
            let val = decodeURIComponent(tempArr[1]);
            obj[key]=val;
        })
    }
    return obj;
}