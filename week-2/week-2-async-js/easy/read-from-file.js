const fs = require('fs');
function readfromFile(file){
    fs.promises.readFile(file,"utf-8")
    .then((res) => console.log(res))
}