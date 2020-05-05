function minimumBribes(q) {
  let bribes = 0
  for(let i = q.length-1; i >= 0; i--){
    if((q[i]-(i+1)) > 2){
      console.log('Too chaotic')
      return
    }
    for(let j = i+1; j < q.length; j++){
      if (q[j] < q[i]){
        bribes++
      }
    }
  }
  console.log(bribes)
}

minimumBribes([2,1,5,3,4])
minimumBribes([1,2,5,3,7,8,6,4])
