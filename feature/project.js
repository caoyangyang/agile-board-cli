const connection = require("../common/connection");

exports.ls = async () => {
    const allProjects= await connection.get("project")
    console.log(allProjects.map(project=>({
        id:project.id, name:project.name
    })));
}

exports.show = async (id) => {
    const project= await connection.get("project/"+id);
    console.log("id",project);
}
