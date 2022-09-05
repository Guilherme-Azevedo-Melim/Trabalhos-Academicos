// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b)=> a - b )
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let par = []
 array.filter((item)=>{
     if(item %2 === 0)
     par.push(item)
    })
 
  return par
//   DESAFIO: NÃO SEI SE VALE, POIS ESTAVA ESPECIFICADO APENAS SEM O FILTER()
// let par2 = []
// array.map((item)=>{
//     if(item %2 === 0)
//     par2.push(item)
//    })

//  return par2
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let par = []
  array.map((item)=>{
        if(item %2 === 0)
        par.push(item * item)
       })
       return par
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i = 0; i < array.length; i++)
        if (array[i]> maior){
            maior = array[i]
        }
        
        return maior
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maior
let menor
let divisivel
if(num1 <= num2){
    maior = num2 , menor = num1
}else {maior = num1, menor = num2}

if(maior % menor === 0){
    divisivel = true
}else {divisivel = false}

let semprePositivo = maior - menor

return {maiorNumero:maior, maiorDivisivelPorMenor:divisivel, diferenca:semprePositivo}

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let par = []
    for(let i = 0; par.length < n; i++ ){
        if(i  % 2 === 0){
            par.push(i)
        }
    }
   return par
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
    return "Equilátero"
}else if (ladoA === ladoB && ladoB !== ladoC || ladoB === ladoC && ladoA !== ladoB || ladoA === ladoC && ladoA !== ladoB){
     return "Isósceles"
}else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
    return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b)=> a - b )
    return [array[array.length-2], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 filme = {
    nome:'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
 
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
let anonimo = {
    ...pessoa,
    nome:"ANÔNIMO"
}

return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((item)=> {
      return (item.idade > 14 && item.idade < 60 && item.altura > 1.5) 
       
    })
    
      
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((item)=> {
        return (item.idade <= 14 || item.idade > 60 || item.altura < 1.5) 
         
      })

  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) { 
    let saldo = []
    for (conta of contas){
     let soma ={
        cliente: conta.cliente,
        saldoTotal:(conta.saldoTotal - conta.compras.reduce((a, b)=> a + b, 0)),
        compras: [ ]
    }
    saldo.push(soma)
}
return saldo
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort((a, b)=>{
        if (a.nome < b.nome){
            return -1
        }else { return true}
    })
return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for (let i = 0; i < consultas.length; i++) {
        for (let j = 0; j < consultas.length - i - 1; j++) {
          const arrayData1 = consultas[j].dataDaConsulta.split("/");
          const dia1 = Number(arrayData1[0]);
          const mes1 = Number(arrayData1[1]);
          const ano1 = Number(arrayData1[2]);
    
          const arrayData2 = consultas[j + 1].dataDaConsulta.split("/");
          const dia2 = Number(arrayData2[0]);
          const mes2 = Number(arrayData2[1]);
          const ano2 = Number(arrayData2[2]);
    
          const data1 = new Date(ano1, mes1 - 1, dia1).getTime();
          const data2 = new Date(ano2, mes2 - 1, dia2).getTime();
    
          if (data1 > data2) {
            const temp = consultas[j];
            consultas[j] = consultas[j + 1];
            consultas[j + 1] = temp;
          }
        }
      }
      return consultas;
    }

