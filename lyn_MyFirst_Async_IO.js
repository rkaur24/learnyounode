var fs = require('fs');
// var bf = fs.readFile(process.argv[2]);
var str = "";
var arr ={};
  
  
fs.readFile(process.argv[2], (err, data) => {
  if (err) console.log(err);
     str = data.toString();
     arr = str.split("\n");
    //  console.log(data);
     console.log(arr.length-1);
       
})

     