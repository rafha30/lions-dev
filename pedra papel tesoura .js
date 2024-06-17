 let opcoes = ['pedra','papel','tesoura']
 let computador=""
 let resultado = ""
  let usuario =""
 console.log('pedra,papel ou tesoura')
 process.stdin.once('data',function(data)
 { usuario= data.toString().trim()
    processamento(usuario)
    process.exit()

 })
 

 
 function processamento(computador,usuario,resultado){
    
 computador = opcoes[Math.floor(Math.random()*2+1)]

 if(usuario==computador){
  resultado='empate'
 }else if(usuario == 'pedra'&& computador == 'tesoura' ||
 usuario=='tesoura' && computador == 'papel'||usuario &&computador=='pedra'){
     resultado ='voce venceu'
  
 }else {
    resultado= 'voce perdeu'
 }
 console.log (resultado )
 }
 


 

 

 

 


 