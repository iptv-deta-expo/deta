// utility.js
const {requests}  = require('./requestss.js')
var HTMLParser = require('node-html-parser');

const tabloParser = async(url) => {
    const test=await requests(url,"GET")
    var root =await HTMLParser.parse(test);
    var tablo=root.querySelector('.streams_table')
    // console.log(tablo.childNodes);
    var jsonlist=[]
    var channelname=""
    var channellink=""
    var channelLiveDays=""
    var channelpopulerite=""
    var state=""
    var channel_checked=""
    var to_hide=""
    var flag=""
    var countr=""
    for (let index = 0; index < tablo.childNodes.length; index++) {
        const element = tablo.childNodes[index];
        if (element.rawAttrs!=undefined) {
            if (element.querySelector(".channel_name")!= null) {
                
                // console.log(element.querySelector(".channel_name").text);
                channelname=element.querySelector(".channel_name").text
                channelpopulerite=element.querySelector(".green").text
                channelLiveDays=element.querySelector(".mature").text
                state=element.querySelector(".state").text
                channel_checked=element.querySelector(".channel_checked").text
                to_hide=element.querySelectorAll(".to_hide")[1].text
                flag="https://iptvcat.com/"+element.querySelector(".position-left").getAttribute("src")
                countr=element.querySelector(".position-left").getAttribute("alt")
                
            }
            
            if (element.querySelector(".download") != null) {
                
                // console.log(element.querySelector(".download").getAttribute("href"));
                channellink=element.querySelector(".download").getAttribute("href")
                jsonlist.push({"channelname":channelname,"flag":flag,"countr":countr,"channellink":channellink,"channelpopulerite":channelpopulerite,"channelLiveDays":channelLiveDays,"state":state,"channel_checked":channel_checked,"to_hide":to_hide})
                channellink=""
                channelname=""
                channelpopulerite=""
                channelvote=""
                state=""
                channel_checked=""
                to_hide=""
            }
           
            
        }
        
    }
    return jsonlist
}
exports.tabloParser = tabloParser