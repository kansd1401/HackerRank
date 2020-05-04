function hourglassSum(arr) {
  const results = []
  for(let i=0 ; i<arr.length-2; i++){
    for(let j=0 ; j<arr.length-2; j++){
      console.log(arr[i][j],arr[i][j+1],arr[i][j+2])
      console.log(arr[i+1][j+1])
      console.log(arr[i+2][j],arr[i,2][j+1],arr[i+2][j+1])
      console.log(arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2])
      console.log('--------------------------------')
      
      results.push(arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2])
    }
  }
  console.log(results)
  return Math.max(...results)
}

const arr = [[1,1,1,0,0,0],
              [0,1,0,0,0,0],
              [1,1,1,0,0,0],
              [0,0,2,4,4,0],
              [0,0,0,2,0,0],
              [0,0,1,2,4,0]]

console.log(hourglassSum(arr))