const connection = require("../../common/jira-connection");

exports.show = async (idOrKey) => {
    const res= await connection.get("issue/"+idOrKey);
    const issue={
        id:res.id,
        key:res.key,
        status:res.fields.status.name
    }
    console.log("issue info\n",issue);
}

exports.showHistory = async (idOrKey) => {
    const res= await connection.internalGet(`issue/${idOrKey}/activityfeed?startAt=0`);

    console.log("issue history\n",res.items.map(item=>
        `${item.actor.name} from ${item.from.displayValue} to ${item.to.displayValue} on ${new Date(item.timestamp).toLocaleDateString()}`
    ));
}

exports.showStatus = async (idOrKey) => {
    const res = await connection.get("issue/" + idOrKey);
    const transitionsRes = await connection.get(`issue/${idOrKey}/transitions`);
    // console.log("current status is "+ res.fields.status.name);
    // console.log("all status as below", transitionsRes.transitions.map(item=>item.id+item.name));
    return res.fields.status.name
}

exports.statusTo=async (idOrKey,status) => {
    const transitionsRes= await connection.get(`issue/${idOrKey}/transitions`);
    const transition = transitionsRes.transitions.find(item => item.name === status)
    await connection.post(`issue/${idOrKey}/transitions`, {
        transition: transition
    });
}


