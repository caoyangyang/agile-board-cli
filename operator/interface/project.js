const operatorAgent = require("./operator-agent.js") ;
const jiraOperator = require(`../jira/project.js`);

const operatorCollection = {
    jira: jiraOperator
}

exports.run=async(operate, ...args)=>{
    const operator =await operatorAgent.chooseOperator(operatorCollection);
    if(operator){
        return await operator[operate](...args)
    }
}

