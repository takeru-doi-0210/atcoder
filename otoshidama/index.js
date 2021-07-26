// function Main(input) {
//   array = input.split(" ");
  
//   const numberOfBill = Number(array[0]);
//   let totalFee = Number(array[1]);
  
//   const bills = {
//   	yen10000: 10000,
//     yen5000: 5000,
//     yen1000: 1000
//   };
  
//   let billCounts = {
//   	yen10000Count: 0,
//     yen5000Count: 0,
//     yen1000Count: 0,
//   };
  
//   //各金札の最大枚数を数える
  
//   //引数には直接渡してるわけではない
//   //引数は変数を宣言してるようなもん
//   //totalFeeは同じのを使って、countは別々のを使う
//   function countBill(bill) {
//     let billCount = 0;
//     while (totalFee >= bill){
//       totalFee -= bill;
//       billCount += 1;
//     };
//     return billCount;
//   };
  
//   billCounts.yen10000Count = countBill(bills.yen10000);
//   billCounts.yen5000Count = countBill(bills.yen5000);
//   billCounts.yen1000Count = countBill(bills.yen1000);
  
//   totalBillCounts = billCounts.yen10000Count + billCounts.yen5000Count + billCounts.yen1000Count
  
//   if (totalBillCounts > numberOfBill) {
//   	console.log("-1, -1, -1")
//   } else {
//   	console.log(billCounts.yen10000Count, billCounts.yen5000Count, billCounts.yen1000Count)
//   }
  
// };
// //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));


function Main(input) {
  array = input.split(" ");
  
  const numberOfBill = Number(array[0]);
  let totalFee = Number(array[1]);
  
  for(i=0; i<= numberOfBill; i++) {
    for(k=0; k<= numberOfBill - i; k++) {
      if(0 <= numberOfBill-i-k){
        if(10000*i + 5000*k + 1000*(numberOfBill-i-k) == totalFee){
          console.log(i, k, numberOfBill-i-k)
          return
        }
      }
    }
  }
  
  console.log("-1, -1, -1")
  
};
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));