var inhere = ""
var url = window.location.href.split("/")
var refer = document.referrer || "direct_open!"+url[2]
url.shift()
url.shift()
url.shift()
url = url.join("/")

if(!cookie2obj().url){document.cookie="url="+refer+"!"+url+"!"}

    var ob = cookie2obj().url || ""
    var tmp = ob.split("!")
   
    for(i=0;i<tmp.length-1;i++){
        // console.log(tmp[i] == url)
        if(tmp[i]==url){
            var mark = i 
            inhere = "true"
            break
        }else{
             inhere = "false"
             
        }
    }

if(inhere=="false"){
    document.cookie = "url=" + ob + url+"!"
    }
//统计访问某个页面的次数
// document.cookie= "visitime=1"
// if(inhere == "true"){
//     var visitime_tmp = Number(cookie2obj().visitime)
//     tmp[mark] = tmp[mark]+"*"+ visitime_tmp
//     visitime_tmp = visitime_tmp + 1
//     document.cookie = "visitime=" + visitime_tmp
//     document.cookie= "url="+tmp.join("!")
//    console.log(tmp[mark])
// }


function cookie2obj(){

	var c = document.cookie.split(";")
	var obj={};
	for(i in c){
		if(typeof c[i] == "string"){
		  _c = c[i].split("=")
		  key = _c[0]//.trim()
          val = _c[1]
          obj[key] = val
	    }
	}
	return obj
}


{///////////// auto create the iframe
    var ifr = document.createElement("iframe")
    var ifrp = document.getElementById("ifr")
    var lan = ifrp.getAttribute("lan")
    var demo = ifrp.getAttribute("demo")
    ifr.style.overflow="hidden"
    ifr.src= "http://inquiry.sbmchina.com/xhrpost/form.php?lan="+lan+"&demo="+demo+"&visits="+cookie2obj().url
    ifr.id="ifr_inquiry"
    ifr.width="800"
    // ifr.height="800"
    ifr.frameBorder="none"
    document.getElementById("ifr").appendChild(ifr)
}
