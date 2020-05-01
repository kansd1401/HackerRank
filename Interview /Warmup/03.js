function jumpingOnClouds(n) {
  const c = n.map( x => Number(x))
  const path = []
  let i = -1
  while(i < c.length-1){
    if (c[i+2] === 0 || i+2 >= c.length-1){
      if(i+2 <= c.length-1){
        path.push(i+2)
      }
      i = i+2
    }else{
      path.push(i+1)
      i++
    }
  }
  console.log(path)
  return path.length

}
const str = '0 1 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0 1 0 0 0 0 0 0 1 0 1 0 1 0 0 0 0 0 1 0 0 1 0 1 0 0 1 0 1 0 1 0 0 0 0 1 0 0 1 0 0 1 0 1 0 0 1 0 1 0 0 1 0 1 0 1 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 1 0 0 0 0 1 0'

console.log(jumpingOnClouds([0,0,0,1,0,0]))
console.log(jumpingOnClouds(str.split(" ")))