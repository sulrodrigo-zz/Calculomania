pontos = 0;

const draggables = document.querySelectorAll('.draggable');
const contents = document.querySelectorAll('.content');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', (e) => {
        const finalTarget = e.path[1].childNodes

        if(finalTarget.length > 4){
            contents.forEach((content) => { 
                const id = document.getElementById('correct')
                const strange = id.childNodes[4]
                content.appendChild(strange)
            });
        }
        draggable.classList.remove('dragging');
    });
});

contents.forEach(content => {
    content.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(content, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null){
            content.appendChild(draggable);
        } else {
            content.insertBefore(draggable, afterElement);
        }

    });
});

function getDragAfterElement(content, y) {
    const draggableElements = [...content.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
};

var question = 2;

function startTimer(duration, display,execute) {
    var timer = duration, minutes, seconds;
    
    if(execute){
        setInterval(function () {
            if(question === 13){
                display.textContent = ""
                clearInterval()
                return
            }

            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
                alert('Acabou o tempo!');
                nextQuestion(question++);
            }
        }, 1000);
    }else{
        return
    }
}

var answers = {};

var question_zero = document.getElementById('question-0');
var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');
var question_eleven = document.getElementById('question-11');
var question_twelve = document.getElementById('question-12');

var submit0 = document.getElementById('submit0');
var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');
var submit11 = document.getElementById('submit11');
var submit12 = document.getElementById('submit12');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();
    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}


submit0.addEventListener('click', function(){
    nextQuestion(1);
    growProgressBar('0%');
    const ab = ()=>{
        var duration = 45
        startTimer(duration, document.getElementById('timer'),true)
    }
    ab()
})

submit1.addEventListener('click', function(){
    //nextQuestion(2);
    growProgressBar('5%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('15%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('25%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('35%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    growProgressBar('45%');
})
submit6.addEventListener('click', function(){
    nextQuestion(7);
    growProgressBar('55%');
})
submit7.addEventListener('click', function(){
    nextQuestion(8);
    growProgressBar('65%');
})
submit8.addEventListener('click', function(){
    nextQuestion(9);
    growProgressBar('75%');
})
submit9.addEventListener('click', function(){
    nextQuestion(10);
    growProgressBar('85%');
})
submit10.addEventListener('click', function(){
    nextQuestion(11);
    growProgressBar('95%');
})
submit11.addEventListener('click', function(){
    nextQuestion(12);
    growProgressBar('100%');
    document.getElementById("printtotalscore").innerHTML = pontos;

    document.getElementById('timer').remove()
    startTimer(0,numberOne,false)
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

function alert_instrucoes() {
    alert("Calculomania®: Arraste para ganhar!\n\nCom o mouse, segure, arraste e solte o retângulo com a resposta correta no espaço em branco à direita. Em seguida, clique em “Enviar resposta”. Acima, você poderá ver se acertou a questão (ou não). Seus resultados e os gabaritos estarão ao final do jogo.");
}

function alert_resultado1() {
    const numberOne = document.getElementById('question-1')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_resultado2() {
    const numberOne = document.getElementById('question-2')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_resultado3() {
    const numberOne = document.getElementById('question-3')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_resultado4() {
    const numberOne = document.getElementById('question-4')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_resultado5() {
    const numberOne = document.getElementById('question-5')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_resultado6() {
    const numberOne = document.getElementById('question-6')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_resultado7() {
    const numberOne = document.getElementById('question-7')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_resultado8() {
    const numberOne = document.getElementById('question-8')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_resultado9() {
    const numberOne = document.getElementById('question-9')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_resultado10() {
    const numberOne = document.getElementById('question-10')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_resultado11() {
    const numberOne = document.getElementById('question-11')
    const response = numberOne.childNodes[7].childNodes[1].childNodes[3].getAttribute('aria-valuetext')
    
    document.getElementById('timer').remove()
    startTimer(0,numberOne,false)

    if(Number(response) === 1) {
        alert("Parabéns! Você acertou a questão!");
        pontos++;
        console.log(pontos);
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
        console.log(pontos);
    }
}

function alert_gabarito1() {
    alert("Como o livro se encontra em equilíbrio sobre a mesa, a força total que atua sobre ele é zero. Através da força resultante, temos:\n" + "Fr = m . a\n" + "F - P = 0\n" + "F = P => F = 10N");
}

function alert_gabarito2() {
    alert("Por se tratar de um movimento circular uniforme, isto implica que a partícula tem módulo da velocidade vetorial constante.\nAlternativa B!");
}

function alert_gabarito3() {
    alert("Para resolvermos esse exercício, devemos usar a fórmula da velocidade média, além disso, também é necessário converter a velocidade que está em quilômetros por hora para metros por segundo. Para tanto, devemos dividir a velocidade pelo fator 3,6. Observe os calculos:\n V = 100 km/h / 3,6 = 27,7 m/s \n a = 27,7 / 11 \n a = 2,5 m/s²");
}

function alert_gabarito4() {
    alert("Como o exercício nos questiona 'Após quantos segundos elas voltarão a piscar simultaneamente', precisamos converter informações dadas para as medidas de 'segundos'. Portanto, se a primeira torre 'pisca' 15 vezes por minuito, sabendo que um minuto equivale a 60 segundos, podemos fazer 60 / 15 = 4, pois as luzews da primeira piscam de 4 em 4 segundos. Equivalentemente, os cálculos para a segunda torre são 60 / 10 = 6, o que nos indica que as luzes da segunda torre piscam de 6 em 6 segundos. \n\n 4, 6 | 2\n 2, 3 | 2\n 1, 3 | 3\n 1, 1 | 3 * 2 * 2 = 12\n\n Multiplicando os números que dividem o 4 e o 6, temos 2 x 1 x 3 = 12. Portanto, MMC (4,6) = 12. Logo, as torres piscarão juntas a cada 12 segundos.");
}

function alert_gabarito5() {
    alert("Para calcularmos a aceleração média do ponto material, utilizaremos a equação da aceleração média. De acordo com o texto, o móvel partiu do repouso, logo, sua velocidade inicial era 0 e sua velocidade final foi de 30 m/s, dessa forma, devemos resolver o seguinte cálculo:\n a = 30 - 0 / 5 \n a = 6 m/s²");
}

function alert_gabarito6() {
    alert("Aplicando a segunda lei de Newton, temos: \nFʀ = m . a  >>  N - P = m . a \nN - m . g = m . a  >>  N = m . a + m . g \nN = m (a + g)  >>  N = 10 (0,1 + 10) \nN = 10 . 10,1 = 101 N");
}

function alert_gabarito7() {
    alert("Calculando capacidade térmica:\n\nC = Q/△T\nC = 300/50\nC = 6 cal/°C");
}

function alert_gabarito8() {
    alert("Se as massas iguais de água e areia receberem ou perderem quantidades iguais de calor, a variação de temperatura da água será menor em módulo que a da areia, porque a água tem maior calor específico. \n Resposta: A!");
}

function alert_gabarito9() {
    alert("C = Q / △T.\n\n Sendo a capacidade térmica C das fagulhas muito pequena, elas transferem pouco calor para o operador, o que é insuficiente para o queimar.\nResposta: C");
}

function alert_gabarito10() {
    alert("A fórmula que pode ser usada para calcular a área total do cubo é:\n\nA = 6l²\n\nSubstituindo a aresta do cubo nesta fórmula, temos:\n\nA = 6 . 15²\nA = 6 . 225\nA = 1350cm²\n\nResposta: B");
}

function alert_gabarito11() {
    alert("Usando a fórmula para calcular a área do cubo, calcularemos a área para cada um deles separadamente. Em seguida, faremos a subtração entre os resultados obtidos:\n\nA₁ = 6l²\nA₁ = 6 . 10²\nA₁ = 6 . 100\nA₁ = 600 cm²\n\nA₂ = 6l²\nA₂ = 6 . 25²\nA₂ = 6 . 625\nA₂ = 3750 cm²\n\nA₂ - A₁ = 3750 cm² - 600 cm² = 3150 cm²\nResposta: A");
}


