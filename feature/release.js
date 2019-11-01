const connection = require("../common/connection");

exports.show = async (id) => {
    const version= await connection.get("version/"+id);
    console.log("releases info\n",version);
}

