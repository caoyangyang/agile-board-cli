const connection = require("../common/connection");

exports.ls = async () => {
    const client = await connection.getClient();
    const allProjects= await client.project.getAllProjects()
    console.log("allProjects",allProjects);
}

exports.move = () => {

}

