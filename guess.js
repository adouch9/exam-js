

 const add = (userGuess, secret) => {

    if(userGuess < secret){
         console.log('To small!')
    }
    else if(userGuess > secret){
       console.log('To big!')

    }
    else if(userGuess === secret){
        console.log('You win')
    }
   return
 }


 add(10,11)




 // const guess = (userGuess, secret) => {

//     if (userGuess < secret ){
//         return ('Too small!')
//     }
//     else if (userGuess > secret) {
//         return ('Too big!')
//     }
//     else if(userGuess === secret){
//         return ('You win')

//     }
// }
   
//  console.log(guess)
