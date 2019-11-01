const connection = require("../common/connection");

exports.show = async (idOrKey) => {
    const res= await connection.get("issue/"+idOrKey);
    const issue={
        id:res.id,
        key:res.key,
        status:res.fields.status.name
    }
    console.log("issue info\n",issue);
}

exports.history = async (idOrKey) => {
    const res= await connection.internalGet(`issue/${idOrKey}/activityfeed?startAt=0`);

    console.log("issue history\n",res.items.map(item=>
        `${item.actor.name} from ${item.from.displayValue} to ${item.to.displayValue} on ${new Date(item.timestamp).toLocaleDateString()}`
    ));
}


