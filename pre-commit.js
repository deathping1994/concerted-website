var fs = require("fs");


fs.readdir("../",function(err, files){
   if (err) {
       return console.error(err);
   }
       var filelist=[];
   files.forEach( function (file){
   	filelist.push(file);
   });
       console.log( filelist);
});