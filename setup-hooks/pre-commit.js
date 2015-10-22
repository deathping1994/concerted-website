var fs = require("fs");

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

fs.readdir("test-md",function(err, files){
   if (err) {
       return console.error(err);
   }
       var fileobj={};
       var filelist=[];
   files.forEach( function (file){
   	console.log(file)
    if((/\.(md)$/i).test(file)){
    var res=file.split('-');
      fileobj.year=res[0];
      fileobj.month=res[1];
      fileobj.date=res[2];
      fileobj.title=res[3].replace('_',' ');
      var temp={};
    filelist.push(Object.deepExtend(temp,fileobj));
   }});
   fs.writeFile('test-md/newslist.json',filelist,function(err){
   	console.log(err);
   });
       console.log( filelist);
});