const fs = require('node:fs');
const str = fs.readFileSync("a.txt", "utf8");
const arr=str.split(" ");
let ans="";
for(let i=0; i<arr.length; i++){
    if(arr[i]!=''){
        ans+=arr[i]+" ";
    }
}
console.log(ans);
try{
fs.writeFileSync("a.txt",ans);
}
catch(e){
    console.error(e);
    
}

