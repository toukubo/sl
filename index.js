args = require('minimist')(process.argv.slice(2))
word = args.word
const sh = require('shelljs')
// console.dir("args : " + args)
// console.log("word : "+ word)

var inputText = "";
process.stdin.on('data', function(chunk){
  inputText += chunk;
});

urls = new Array()

process.stdin.on('end', function(){
  inputText.split('\n').forEach(function(url){
    if(inputText && url){
      // console.log("line : " + url)
      urls.push(url)
    }
  });
  // console.log("urls: " +urls)
  
  urls.forEach(function(url){
    command = "pocket-cli add --url " + "'" + url + "'"
    sh.exec(command,{async:true})
    // console.log("command : "+command)
  
  });
});


