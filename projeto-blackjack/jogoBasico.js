/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 


// PROJETO BLACJACK "21"

if(confirm ('Vamos começar nossa rodada de BlackJack?')) {
	console.log('Boas vindas ao jogo de BlackJack!')
   console.log('Vou distribuir as cartas')

   const cartaUmUsuario = comprarCarta();
   const cartaDoisUsuario = comprarCarta();
   const cartaUmPC = comprarCarta();
   const cartaDoisPC = comprarCarta();
   const somaUsuario = cartaUmUsuario.valor + cartaDoisUsuario.valor
   const somaPC = cartaUmPC.valor + cartaDoisPC.valor
   
      console.log(`Cartas do Usuario: ${cartaUmUsuario.texto} E ${cartaDoisUsuario.texto} 
      Pontuação Final: ${somaUsuario}`)
      console.log(`Cartas do PC: ${cartaUmPC.texto} E ${cartaDoisPC.texto}
      Pontuação Final: ${somaPC}`)


   if(somaUsuario === somaPC){
      console.log('Empatou o jogo!')
   }
   else if(somaUsuario > somaPC){
      console.log('Você venceu o jogo, PARABÉNS!')
   }
   else if(somaUsuario < somaPC){
      console.log('Computador ganhou o jogo!')
   }
   else {
	   console.log('Fim do jogo!')
   }
}
*/
