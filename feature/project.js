const connection = require("../common/connection");

exports.ls = async () => {
    const client = await connection.getClient();
    const allProjects= await client.project.getAllProjects()
    console.log(allProjects.map(project=>({
        id:project.id, name:project.name
    })));
}

exports.show = async (id) => {
    const client = await connection.getClient();
    const project= await client.project.getProject(id);
    console.log("id",project);
}
