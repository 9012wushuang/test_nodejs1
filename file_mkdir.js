
var fs = require("fs");

console.log("创建目录 /data/bifenghui/nodejs/dir/");
fs.mkdir("/data/bifenghui/nodejs/dir/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});
