var fs = require("fs");

fs.readdir("app/news",function(err, files){
   if (err) {
       return console.error(err);
   }
       var filelist=[];
   files.forEach( function (file){
     if((/\.(md)$/i).test(file))
    {filelist.push("news/"+file);}
   });
   fs.writeFile('app/news/newslist.json',JSON.stringify(filelist),function(err){
   	if(err)
      return console.log(err);
   });
       console.log(filelist);
});
