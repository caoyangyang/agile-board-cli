const connection = require("../../common/jira-connection");

exports.ls = async () => {
    const allProjects= await connection.get("project")
    console.log(allProjects.map(project=>({
        id:project.id,
        name:project.name,
        key:project.key
    })));
}

exports.show = async (id) => {
    const project= await connection.get(`project/${id}`);
    console.log("project info \n",project);
}

exports.showReleases = async (id) => {
    const versions= await connection.get(`project/${id}/versions`);
    console.log("project releases info\n",versions.map(version => (`[${version.id}] ${version.name} -${version.description}`)));
}
