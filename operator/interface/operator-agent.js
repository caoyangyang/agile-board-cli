const config = require("../../config/config.js") ;

exports.chooseOperator = async (operatorCollection) => {
    const boardType = await config.getType();
    if(!boardType){
        console.log("not found your account, please config it first")
        return null;
    }else{
        return operatorCollection[boardType]
    }
}