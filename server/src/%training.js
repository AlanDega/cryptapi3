// var BTC = 1000000
// var ETH = 1000000
// var XRP = 1000000
// var MXN = 1000000

// var coins = [ "BTC" , "ETH", "XRP" , "MXN"]
// console.log(coins[0]);

var arr =  [" 100000","400000" , "250000" ,"250000"];
// var sum = 0;
// //Finding the sum
// for(key in arr){
//     sum += arr[key];
// }
// console.log("Sum of the object values is = " + sum);
// //Finding the average
// for(key in arr){
//     arr[key] = (arr[key]/sum)*100;
// }
// console.log(arr);

// const array2 = [arr.btc, arr.eth,arr.xrp,arr.mxn]
// const reducer = (accumulator, currentValue) => accumulator + currentValue;



// console.log(array2.reduce(reducer));

arr.forEach( function (element) {
   element = (element/1000000)*100;
   console.log(element);
})

