function getUser(){
    return this.getCookie("username")
}


function getCookie(name){

    debugger;
    var cookies = document.cookie.split(";")
    
    if(cookies.length > 0)
    {
        for(var i=0; i< cookies.length; i++){
            var pos = cookies[i].indexOf(name)
            //找到字符串
            if(pos > -1){
                return cookies[i].split("=")[1]
            }
        }
    }
    
    return ""
}

function generateViewPath(contentType){
    //寻找对应关系
    return pathMapping(contentType)

}

function pathMapping(contentType){
    //对应关系表
    let mappingTable = []
    let matches = mappingTable.filter((item,index) =>(item.contentType === contentType))

    if(matches.length>0){
        return matches[0]
    }
    else throw new Error('no matching path')
}

export {getUser,getCookie,generateViewPath}