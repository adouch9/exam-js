

let majeur = 18;

const information = (username, name, age) => {

    if (age > majeur ){
        return (`${username} ${name} ${age} vous etes majeur`)
    }
    else if (age < majeur) {
        return ( Vous `${username} ${name} ${age} vous etes mineur`)
    }

 }
   
 console.log(information('Sofiane','Akermoun',39))

