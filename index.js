args = require('minimist')(process.argv.slice(2))
word = args.word
const sh = require('shelljs')
console.log("args : ")
console.dir(args)

console.log("word : ")
console.dir(word)

var inputText = "";
process.stdin.on('data', function(chunk){
  inputText += chunk;
});

// ストリーム終了時に呼ばれる.
urls = new Array()

process.stdin.on('end', function(){
  inputText.split('\n').forEach(function(url){
    if(inputText){
      console.log("line : " + url)
      urls.push(url)
    }
  });
  console.log("urls : ")
  console.dir(urls)
  
  urls.forEach(function(url){
    command = "pocket-cli add --url " + url
    sh.exec(command,{async:true})
    console.log("command : ")
    console.dir(command)
  
  });
});


