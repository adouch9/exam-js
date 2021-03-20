

let majeur = 18;

const information = (username, name, age) => {
  
    console.log(`prénom: ${username}`)
    console.log(`name: ${name}`)
    console.log(`age: ${age} ans`)



    if (age >= majeur ){
        return (`${username} ${name} ${age} vous etes majeur depuis ${ age - majeur} ans`)
    }
    else   {
        return ( `${username} ${name} ${age} vous etes mineur dans ${ majeur - age} ans`)
    }

 }
   
 console.log(information('Sofiane','Akermoun',39))
 console.log(information('Alice', 'Liddell', 7))


  
//  const information = (first, name, age) => {
//     console.log(`prenom: ${first}`)
//     console.log(`nom: ${name}`)
//     console.log(`age: ${age}`)
//     if (age >= 18) {
//       console.log(`vous êtes majeur depuis ${age - 18} ans`)
//     } else {
//       console.log(`vous serez majeur dans ${18 - age} ans`)
//     }
//   }
  
//   information('Sofiane', 'Akermoun', 39)
//   information('Alice', 'Liddell', 7)