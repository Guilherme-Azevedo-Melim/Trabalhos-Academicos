// PROJETO!
alert('BOAS VINDAS AO JOGO BLAKJACK!')
    let cartaUsuario = []
    let cartaPc = []
if(confirm ('Vamos começar nossa rodada?')) {
    let verdade = false
    while (!verdade){
            cartaUsuario.push(comprarCarta())
            cartaUsuario.push(comprarCarta())
            cartaPc.push(comprarCarta())
            cartaPc.push(comprarCarta())    
        if((cartaUsuario[0] === 11 && cartaUsuario[1] === 11 ) || (cartaPc[0] === 11 && cartaPc[1] === 11)){
            cartaUsuario = []
            cartaPc = []
        }else{ verdade = true}
      }
      
    let comprarOK = true
while(comprarOK){ 
    let nipesDasCartas = ' '
    let pontosIniciais = 0
 for(let adicionando of cartaUsuario){
    nipesDasCartas += adicionando.texto 
    pontosIniciais += adicionando.valor
 }
 if (pontosIniciais > 21){
    comprarOK = false
 }
 else{ let continuandoJogo = confirm(`Essas são suas cartas ${nipesDasCartas}. Essa é a carta revelada do computador é ${cartaPc[0].texto}.` +
        "\n"+ 
        "Deseja comprar mais uma carta?") 
     if (continuandoJogo){cartaUsuario.push(comprarCarta())}
     else {comprarOK = false}
 }
}

 let nipesUsuario = ''
 let pontosUsuario = 0
for(let adicionandoUsuario of cartaUsuario){
   nipesUsuario += adicionandoUsuario.texto + ' '
   pontosUsuario += adicionandoUsuario.valor
}

 let pontosPc = 0
 let nipesPc = ''
for(let adicionandoPc of cartaPc){
 pontosPc += adicionandoPc.valor
 nipesPc += adicionandoPc.texto + ' '
}

if(pontosUsuario < 21 && pontosPc < pontosUsuario){
   while(pontosPc < pontosUsuario && pontosPc <= 21){
      cartaPc.push(comprarCarta())
      pontosPc = 0
      nipesPc = ''
    for(let adicionandoPc of cartaPc){
     pontosPc += adicionandoPc.valor
     nipesPc += adicionandoPc.texto + ' '
      }
   }
} 

if(pontosPc > 21 && pontosUsuario <= 21){
    alert('Você ganhou por sorte, QUERO REVANCHE')
    console.log('O usuario venceu!')
 }else if (pontosUsuario > 21 && pontosPc <= 21){
    alert('GANHEEEEI, BORA MAIS UMA?')
    console.log('Vamos mais uma, vaaaai, da um "F5"')
 }else if (pontosUsuario > pontosPc && pontosUsuario <= 21){
    alert('Você ganhou por sorte, QUERO REVANCHE')
    console.log('Pura sorte, apenas isso! ')
 }else if (pontosPc > pontosUsuario && pontosPc <= 21){
    alert('GANHEEEEI, BORA MAIS UMA?')
    console.log('O computador venceu!')
 }else {alert('Somos bons de mais para um ganhador só!')
        console.log('O jogo empatou!'+
        "\n"+
        "Deveriamos jogar outra né?")}
 
 alert(`Cartas Usuario: ${nipesUsuario} Pontuação: ${pontosUsuario}`+
    "\n"+
    `Cartas Computador ${nipesPc}. Potuação: ${pontosPc}`)

 alert('Confira a pontuação no console caso queira!')

 console.log(`Cartas Usuario: ${nipesUsuario} Pontuação: ${pontosUsuario}`+
 "\n"+
 `Cartas Computador ${nipesPc}. Potuação: ${pontosPc}`)
 
 console.log('Bora mais uma? Só apertar "F5"')

 }
else {alert('Fim do jogo!'+
'\n'+
'Correu? sabia que eu iria ganhar né?'+
'\n'+
'Aperta "F5" pra ver se não ganho :)')}