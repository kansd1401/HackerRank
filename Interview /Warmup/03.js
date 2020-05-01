function jumpingOnClouds(c) {
  const path = [0]
  let jumps = 0
  let i = 0
  while(i < c.length){
    if (c[i+2] === 0){
      path.push(i+2)
      jumps++
      i = i+2
    }else {
      if (c[i+1] === 0){
        path.push(i+1)
        jumps++
      }
      i++
    }
  }
  console.log(path)
  return jumps

}

console.log(jumpingOnClouds([0,0,0,1,0,0]))
