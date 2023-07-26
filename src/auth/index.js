const { whiteListServer } = require("../common");

function checkServerID(servID){
    if(!whiteListServer.includes(servID)) return {access:false, status:403, message:"سرور شما دسترسی لازم به ربات را ندارد"};
    return {access:true, status:200, message:"confirm server"};
}

module.exports = checkServerID;