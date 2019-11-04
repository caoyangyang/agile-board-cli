const connection = require("../../common/connection");

exports.show = async (id) => {
    const version= await connection.get("version/"+id);
    console.log("releases info\n",version);
}

exports.showIssues=async (id) => {
    const res= await connection.post("search",{
        "jql":`fixVersion=${id}`,
        "startAt": 0,
        "maxResults": 50
    });
    console.log("releases issues info\n",res.issues.map(issue=>({
        id:issue.id,
        name:issue.key,
        assignee:issue.fields.assignee.name,
        updateTime:issue.fields.updated
    })));
}

