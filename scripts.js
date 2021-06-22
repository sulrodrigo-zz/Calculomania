const draggables = document.querySelectorAll('.draggable');
const contents = document.querySelectorAll('.content');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', (e) => {
        console.log(e,'fim do movimento')

        const finalTarget = e.path[1].childNodes

        if(finalTarget.length > 4){
            //retorna o elemento para caixa de baixo
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

var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
// var question_six = document.getElementById('question-6');
// var question_seven = document.getElementById('question-7');
// var question_eight = document.getElementById('question-8');
// var question_nine = document.getElementById('question-9');
// var question_ten = document.getElementById('question-10');

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})
// question_six.addEventListener('click', function(event){
//     storeAnswer(6, event)
// })
// question_seven.addEventListener('click', function(event){
//     storeAnswer(7, event)
// })
// question_eight.addEventListener('click', function(event){
//     storeAnswer(8, event)
// })
// question_nine.addEventListener('click', function(event){
//     storeAnswer(9, event)
// })
// question_ten.addEventListener('click', function(event){
//     storeAnswer(10, event)
// })

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+ 
    answers.question5;
    // answers.question6+
    // answers.question7+
    // answers.question8+
    // answers.question9+
    // answers.question10;
    
    return total_score;
}

function getInfoBasedOnScore(){
    if(totalScore() < 7){
        var score_info = "Você acertou menos de 7 questões :(";
    } else if(totalScore() > 7){
        var score_info = "Parabéns! Você acertou mais que a média!"
    }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
// var submit6 = document.getElementById('submit6');
// var submit7 = document.getElementById('submit7');
// var submit8 = document.getElementById('submit8');
// var submit9 = document.getElementById('submit9');
// var submit10 = document.getElementById('submit10');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('10%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('20%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('30%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('40%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    growProgressBar('50%');
})
// submit6.addEventListener('click', function(){
//     nextQuestion(7);
//     growProgressBar('60%');
// })
// submit7.addEventListener('click', function(){
//     nextQuestion(8);
//     growProgressBar('70%');
// })
// submit8.addEventListener('click', function(){
//     nextQuestion(9);
//     growProgressBar('80%');
// })
// submit9.addEventListener('click', function(){
//     nextQuestion(10);
//     growProgressBar('90%');
// })
// submit10.addEventListener('click', function(){
//     nextQuestion(11);
// })

submit5.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

function alert_resultado1() {
    const id = document.getElementById('correct')
    const response = id.childNodes[3].getAttribute('aria-valuetext')

    if(Number(response) == 1) {
        alert("Parabéns! Você acertou a questão!");
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado2() {
    if(answers.question2 == 1) {
        alert("Parabéns! Você acertou a questão!");
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
    }
}
function alert_resultado3() {
    if(answers.question3 == 1) {
        alert("Parabéns! Você acertou a questão!");
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
    }
}
function alert_resultado4() {
    if(answers.question4 == 1) {
        alert("Parabéns! Você acertou a questão!");
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
    }
}
function alert_resultado5() {
    if(answers.question5 == 1) {
        alert("Parabéns! Você acertou a questão!");
    } else {
        alert("Você errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_gabarito1() {
    alert("Como o livro se encontra em equilíbrio sobre a mesa, a força total que atua sobre ele é zero. Através da força resultante, temos:\n" + "Fr = m . a\n" + "F - P = 0\n" + "F = P => F = 10N");
}

function alert_gabarito2() {
    alert("Por se tratar de um movimento circular uniforme, isto implica que a partícula tem módulo da velocidade vetorial constante. \n Alternativa B!");
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