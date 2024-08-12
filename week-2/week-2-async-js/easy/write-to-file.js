const fs = require('fs');
try{
    const ans = "Hello ayush here";
    fs.writeFileSync("a.txt",ans);
}
catch(e){
    console.error(e);  
}