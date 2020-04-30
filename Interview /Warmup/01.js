

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const result = {}
    ar.forEach( num => {
        if (!result[num]){
            result[num] = 1;
        }else{
            result[num]++
        }
    })
    const keys = Object.keys(result)
    let total = 0
    for(let i = 0; i < keys.length; i++){
        console.log(result[keys[i]])
        console.log(result[keys[i]]/2)
        total = total + Math.floor(result[keys[i]]/2)
    }
    return total

}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))