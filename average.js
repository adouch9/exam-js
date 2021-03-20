


// const average = (tab) => {
//     let sum = 0
//     for (const elem of tab) {
//       sum += elem
//     }
//     return sum / tab.length
//   }
  
//   console.log(average([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
//   console.log(average([10, 10, 10]))





  let tab = [4, 3, 3, 4];

const average = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; ++i) {
    // sum += array[i] / array.length; 
     sum + array[i] = array[i] / array.length;
  }
  console.log(`average = ${sum}`);
};

average(tab);