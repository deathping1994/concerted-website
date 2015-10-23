var fs = require("fs");
var _=require("lodash");

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (typeof source[property] === "object" &&
     source[property] !== null ) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};
var folders=[{url:"news"},{url:"markdown-pages"}];
for(folder in folders){
  console.log(folder);
  var url="app/"+folders[folder].url;
  fs.readdir(url,function(err, files){
   if (err) {
       return console.error(err);
   }
       var fileobj={};
       var filelist=[];
   files.forEach(function (file){
    console.log(file)
    if((/\.(md)$/i).test(file)){
      if (folders[folder].url=="news" || folders[folder].url=="blog"){
        fileobj.url=folders[folder].url+"/"+file;
        var res=file.split('-');
        fileobj.year=res[0];
        fileobj.month=res[1];
        fileobj.date=res[2];
        fileobj.title=((res[3].replace(/_/g,' ')).split("."))[0];
      }
      else{
        fileobj.url=folders[folder].url+"/"+file;
        fileobj.title=file.split(".")[0];
      }
      var temp={};
    filelist.push(Object.deepExtend(temp,fileobj));
   }
  });
  
   fs.writeFile("app/"+folders[folder].url+"/list.json",JSON.stringify(filelist),function(err){
    console.log(err);
   });
  var archive=_.groupBy(filelist, function(n) {
  return n.year;
  });
  filelist={};
  if(folders[folder].url=="news" || folders[folder].url=="blog")
     { fs.writeFile("app/"+folders[folder].url+"/archive.json",JSON.stringify(archive),function(err){
      if(err)
        console.log(err);
      

     });
    }
   });

};

