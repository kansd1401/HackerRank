function repeatedString(s, n) {
  let str = s.split("")
  let countStr = 0
  for( let j = 0; j<str.length;j++){
    if (str[j] === 'a'){
      countStr++
    }
  }
  let result = Math.floor(n/s.length)*countStr
  let remaining = n%s.length
  console.log(Math.floor(n/s.length))
  console.log(s.length)
  console.log(remaining)
  
  for (let i = 0; i < remaining; i++){
    for( let j = 0; j<str.length;j++){
      if(i < remaining){
        if(str[j] === 'a'){
          result++
        }
        i++
      }
    }
  }
  return result
}
 console.log(repeatedString("aba",10))
 console.log(repeatedString('a',1000000000000))
 console.log(repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm',736778906400))
 console.log(repeatedString('jdiacikk', 899491))