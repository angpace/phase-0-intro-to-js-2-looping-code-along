// let names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(name, holiday){
  let cart = []
for (let i = 0; i < name.length; i++) {
 cart.push(`Thank you, ${name[i]}, for the wonderful ${holiday} gift!`)

}
return cart

}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

function countDown(){
  let countDown = 10
  while ( countDown > -1 ) { console.log(countDown) 
    countDown--
  }

}