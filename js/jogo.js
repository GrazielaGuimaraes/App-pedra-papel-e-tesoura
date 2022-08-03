
var botao = document.getElementById('jogo')
botao.style.display = 'none'

var resultado = document.getElementById('resultado')




//icone tesoura

document.getElementById('tesoura').addEventListener('click', ()  =>{


    let computer = Math.round(Math.random() * 2)


    console.log('Computer: ' + computer)

    if(computer  == 0 ) {
       computer =  'tesoura'

       console.log('Computador -> Tesoura -- Deu empate! --')
       resultado.innerHTML = 'Empate'
    }
     
    else if(computer == 1){
        computer = 'pedra'

        console.log('Computador -> Pedra -- Você perdeu! --')
        resultado.innerHTML = 'Perdeu'
    }
    else if(computer == 2) {
       computer = 'papel'

       console.log('Computador -> Papel -- Você ganhou! --')
       resultado.innerHTML = 'Ganhou'
    }
    
     
     botao.style.display = 'block'

})




//icone pedra



document.getElementById('pedra').addEventListener('click', ()  =>{


    let computer = Math.round(Math.random() * 2)


    console.log('Computer: ' + computer)

    if(computer  == 0 ) {
       computer =  'tesoura'

       console.log('Computador -> Tesoura -- Você ganhou! --')
       resultado.innerHTML = 'Ganhou'
    }
     
    else if(computer == 1){
        computer = 'pedra'

        console.log('Computador -> Pedra -- Deu empate! --')
        resultado.innerHTML = 'Empate'
    }
    else if(computer == 2) {
       computer = 'papel'

       console.log('Computador -> Papel -- Você perdeu! --')
       resultado.innerHTML = 'Perdeu'
    }
    

    botao.style.display = 'block'
     

})


// icone papel



document.getElementById('papel').addEventListener('click', ()  =>{


    let computer = Math.round(Math.random() * 2)


    console.log('Computer: ' + computer)

    if(computer  == 0 ) {
       computer =  'tesoura'

       console.log('Computador -> Tesoura -- Você perdeu! --')
       resultado.innerHTML = 'Perdeu'
    }
     
    else if(computer == 1){
        computer = 'pedra'

        console.log('Computador -> Pedra -- Você ganhou! --')
        resultado.innerHTML = 'Ganhou'
    }
    else if(computer == 2) {
       computer = 'papel'

       console.log('Computador -> Papel -- Deu empate! --')
       resultado.innerHTML = 'Empate'
    }
    

    botao.style.display = 'block'
     

})



botao.addEventListener('click', () => {
    
   if(resultado.innerHTML != 'Ganhou' || resultado.innerHTML != 'Perdeu' || resultado.innerHTML != 'Empate'){

        botao.style.display = 'none'
    }

    else {
       botao.style.display = 'block'
    }

    
    

})







