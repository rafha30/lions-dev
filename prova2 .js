let nota = [7.5,6.0,9.5,5.0,8.5,7.0,10.0,6.5,9.0];
let soma =0
let media=0
let notamaxima=nota[0]
let notaminima=nota[0]
let reprovados=0
for (let i = 0; i < nota.length;i++){
 soma= soma+nota[i]
}
 media=soma/nota.length 
 console.log(`a media das notas ${media}`)
 
 for (let i = 0; i < nota.length;i++){
    if(nota[i]>notamaxima){
        (notamaxima = nota[i])
    } if(nota[i]<notaminima)
         (notaminima = nota[i]) 
}
console.log(`${notamaxima}`)
console.log(`${notaminima}`)

nota.push(8.0)
console.log(`a nova nota é: ${nota}`)

for (let i = 0; i < nota.length;i++){
    if(nota[i]< 6.0)
    reprovados++

}
console.log(`as notas abaixo de 6.0 : ${reprovados}`)
 
 
 



    