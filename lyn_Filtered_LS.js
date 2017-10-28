

const fs = require('fs')

let dir = process.argv[2];
var path = require("path");


fs.readdir(dir, (err, files) => {
  if (err) console.log(err)
   var f = files[1];
   var ext =path.extname(f);
//   console.log(f);
  
  
  
  files.forEach((file) => {
    if(path.extname(file) == ext)
    console.log(file);
  })
})

   
