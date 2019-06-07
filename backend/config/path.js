const main_path = require("path")

const path ={
    path : main_path.dirname(require.main.filename)+"/upload/"
    //path : require("os").homedir+"/upload/"
}

module.exports= path