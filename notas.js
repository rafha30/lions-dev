let nota
console.log("sua nota")
process.stdin.once('data'),function(data){
nota = parseFloat ('data'.toString().trim())

processamento (nota)
process.exit()

}
function processamento (nota){

    switch(true) {
    case (nota >= 90&& nota >= 100):
        return 'A'
    case (nota >= 80 && nota <= 89):    
        return 'B'
    case (nota >= 70 && nota <= 79):
       return'C'
    case (nota >= 70 && nota <= 69):
      return 'D'
       case (nota >= 0 && nota <= 59):
       return 'F'
       default:
        console.log ('nota invalida')
    
}
}

    





















