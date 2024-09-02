const screen01 = document.getElementById('screen01');
const screen02 = document.getElementById('screen02');
const biscoitoDaSorte = document.getElementById('biscoitoDaSorte');
const buttonReturn = document.querySelector('button');
const mensagemDoBiscoito = document.querySelector('#mensagemDoBiscoito');

let numeroRandomico = Math.round(Math.random() * 10)



// eventos
biscoitoDaSorte.addEventListener('click',clickBiscoitoDaSorte)


buttonReturn.addEventListener('click',clickButtonToReturn)







// funções
function clickBiscoitoDaSorte(){
    screen01.classList.add('hide');
    screen02.classList.remove('hide');

    switch (numeroRandomico) {
        case 1:
            mensagemDoBiscoito.innerText = `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`
            
            break;
        case 2:
             mensagemDoBiscoito.innerText = `A vida trará coisas boas se tiver paciência.`
            break;
        case 3:
             mensagemDoBiscoito.innerText = `Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração`
            break;
        case 4:
             mensagemDoBiscoito.innerText = `Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida`
            break;
        case 5:
            mensagemDoBiscoito.innerText = `Siga os bons e aprenda com eles.`
            break;  
        case 6:
            mensagemDoBiscoito.innerText = `A adversidade é um espelho que reflete o verdadeiro eu`
            break; 
        case 7:
            mensagemDoBiscoito.innerText = `Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos`
            break;                    
        case 8:
            mensagemDoBiscoito.innerText = `Uma bela flor é incompleta sem as suas folhas.`
            break; 

        case 9:
            mensagemDoBiscoito.innerText = `Sem o fogo do entusiasmo, não há o calor da vitória.`
            break; 
        case 10:
            mensagemDoBiscoito.innerText = `Os defeitos são mais fortes quando o amor é fraco`
            break;                                
        
        default:
            mensagemDoBiscoito.innerText = `Siga os bons e aprenda com eles.`
           
    }
}

function clickButtonToReturn(){
    screen01.classList.remove('hide');
    screen02.classList.add('hide');
    numeroRandomico = Math.round(Math.random() * 10)
}

