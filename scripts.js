pontos = 0;
question = 2;

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
var question_thirteen = document.getElementById('question-13');
var question_fourteen = document.getElementById('question-14');
var question_fifthteen = document.getElementById('question-15');
var question_sixteen = document.getElementById('question-16');

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
var submit13 = document.getElementById('submit13');
var submit14 = document.getElementById('submit14');
var submit15 = document.getElementById('submit15');
var submit16 = document.getElementById('submit16');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();
    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

function timeQuestion() {
    var el1 = document.getElementById('question-1');
    var el2 = document.getElementById('question-2');
    var el3 = document.getElementById('question-3');
    var el4 = document.getElementById('question-4');
    var el5 = document.getElementById('question-5');
    var el6 = document.getElementById('question-6');
    var el7 = document.getElementById('question-7');
    var el8 = document.getElementById('question-8');
    var el9 = document.getElementById('question-9');
    var el10 = document.getElementById('question-10');
    var el11 = document.getElementById('question-11');
    var el12 = document.getElementById('question-12');
    var el13 = document.getElementById('question-13');
    var el14 = document.getElementById('question-14');
    var el15 = document.getElementById('question-15');
    var el16 = document.getElementById('question-16');


    el1.style.display = "none";
    el2.style.display = "none";
    el3.style.display = "none";
    el4.style.display = "none";
    el5.style.display = "none";
    el6.style.display = "none";
    el7.style.display = "none";
    el8.style.display = "none";
    el9.style.display = "none";
    el10.style.display = "none";
    el11.style.display = "none";
    el12.style.display = "none";
    el13.style.display = "none";
    el14.style.display = "none";
    el15.style.display = "none";
    el16.style.display = "block";
}

function getInfoBasedOnScore(){
    if(pontos < 7){
        var score_info = "Sua nota ficou abaixo de 7 pontos! Continue praticando, sabemos que voc?? consegue. Confira o gabarito abaixo para estudar:";
    } else if(pontos > 6 && pontos < 13){
        var score_info = "Sua nota est?? numa boa m??dia! Confira o gabarito abaixo para estudar melhor suas falhas:"
    } else {
        var score_info = "Excelente! Sua nota supera expectativas! Continue assim. O gabarito de seus exerc??cios est?? abaixo:"
    }
    return score_info;
}

function startTimer(duration, display, execute) {
    var timer = duration, minutes, seconds;
    
    if(execute){
        setInterval(function () {
            if(question !== 0){
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.textContent = minutes + ":" + seconds;
                if (--timer < 0) {
                    timer = 99999;
                    alert('Calculomania??\n\n O tempo acabou! Confira sua pontua????o final agora.');
                    timeQuestion();
                    document.getElementById('timer').remove();
                    document.getElementById("printtotalscore").innerHTML = pontos;
                    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
                }
            } else {
                display.textContent = ""
                clearInterval()
                return
            }
        }, 1000);
    } else {
        return
    }
}

submit0.addEventListener('click', function(){
    nextQuestion(1);
    growProgressBar('0%');
    const ab = ()=>{
        var duration = 5;
        startTimer(duration, document.getElementById('timer'),true)
    }
    ab()
})

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('6%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('12%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('18%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('24%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    growProgressBar('30%');
})
submit6.addEventListener('click', function(){
    nextQuestion(7);
    growProgressBar('36%');
})
submit7.addEventListener('click', function(){
    nextQuestion(8);
    growProgressBar('48%');
})
submit8.addEventListener('click', function(){
    nextQuestion(9);
    growProgressBar('54%');
})
submit9.addEventListener('click', function(){
    nextQuestion(10);
    growProgressBar('60%');
})
submit10.addEventListener('click', function(){
    nextQuestion(11);
    growProgressBar('66%');
})
submit11.addEventListener('click', function(){
    nextQuestion(12);
    growProgressBar('72%');
})
submit12.addEventListener('click', function(){
    nextQuestion(13);
    growProgressBar('78%');
})
submit13.addEventListener('click', function(){
    nextQuestion(14);
    growProgressBar('82%');
})
submit14.addEventListener('click', function(){
    nextQuestion(15);
    growProgressBar('90%');
})
submit15.addEventListener('click', function(){
    nextQuestion(16);
    growProgressBar('100%');
    document.getElementById("printtotalscore").innerHTML = pontos;
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
    document.getElementById('timer').remove()
    startTimer(0,numberOne,false)
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

function alert_instrucoes() {
    alert("Calculomania??: Arraste para ganhar!\n\nCom o mouse, segure, arraste e solte o ret??ngulo com a resposta correta no espa??o em branco ?? direita. Em seguida, clique em ???Enviar resposta???. Acima, voc?? poder?? ver se acertou a quest??o (ou n??o). Seus resultados e os gabaritos estar??o ao final do jogo.");
}

function alert_comeco() {
    alert("Calculomania??\n\n O cron??metro vai come??ar a marcar o tempo! Boa sorte!");
}

function alert_resultado1() {
    const numberOne = document.getElementById('question-1');
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado2() {
    const numberOne = document.getElementById('question-2')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado3() {
    const numberOne = document.getElementById('question-3')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado4() {
    const numberOne = document.getElementById('question-4')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado5() {
    const numberOne = document.getElementById('question-5')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado6() {
    const numberOne = document.getElementById('question-6')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado7() {
    const numberOne = document.getElementById('question-7')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado8() {
    const numberOne = document.getElementById('question-8')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado9() {
    const numberOne = document.getElementById('question-9')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado10() {
    const numberOne = document.getElementById('question-10')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado11() {
    const numberOne = document.getElementById('question-11')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');

    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado12() {
    const numberOne = document.getElementById('question-12')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');

    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado13() {
    const numberOne = document.getElementById('question-13')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');

    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado14() {
    const numberOne = document.getElementById('question-14')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');

    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_resultado15() {
    const numberOne = document.getElementById('question-15')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    document.getElementById('timer').remove()
    startTimer(0,numberOne,false)

    if(Number(response) === 1) {
        alert("Calculomania??\n\nParab??ns! Voc?? acertou a quest??o!");
        pontos++;
    } else {
        alert("Calculomania??\n\nVoc?? errou a quest??o :( Mas vamos pra pr??xima!");
    }
}

function alert_gabarito1() {
    alert("Calculomania??\n\nComo o livro se encontra em equil??brio sobre a mesa, a for??a total que atua sobre ele ?? zero. Atrav??s da for??a resultante, temos:\n" + "Fr = m . a\n" + "F - P = 0\n" + "F = P => F = 10N");
}

function alert_gabarito2() {
    alert("Calculomania??\n\nPor se tratar de um movimento circular uniforme, isto implica que a part??cula tem m??dulo da velocidade vetorial constante.\nAlternativa B!");
}

function alert_gabarito3() {
    alert("Calculomania??\n\nPara resolvermos esse exerc??cio, devemos usar a f??rmula da velocidade m??dia, al??m disso, tamb??m ?? necess??rio converter a velocidade que est?? em quil??metros por hora para metros por segundo. Para tanto, devemos dividir a velocidade pelo fator 3,6. Observe os calculos:\n V = 100 km/h / 3,6 = 27,7 m/s \n a = 27,7 / 11 \n a = 2,5 m/s??");
}

function alert_gabarito4() {
    alert("Calculomania??\n\nComo o exerc??cio nos questiona 'Ap??s quantos segundos elas voltar??o a piscar simultaneamente', precisamos converter informa????es dadas para as medidas de 'segundos'. Portanto, se a primeira torre 'pisca' 15 vezes por minuito, sabendo que um minuto equivale a 60 segundos, podemos fazer 60 / 15 = 4, pois as luzews da primeira piscam de 4 em 4 segundos. Equivalentemente, os c??lculos para a segunda torre s??o 60 / 10 = 6, o que nos indica que as luzes da segunda torre piscam de 6 em 6 segundos. \n\n 4, 6 | 2\n 2, 3 | 2\n 1, 3 | 3\n 1, 1 | 3 * 2 * 2 = 12\n\n Multiplicando os n??meros que dividem o 4 e o 6, temos 2 x 1 x 3 = 12. Portanto, MMC (4,6) = 12. Logo, as torres piscar??o juntas a cada 12 segundos.");
}

function alert_gabarito5() {
    alert("Calculomania??\n\nPara calcularmos a acelera????o m??dia do ponto material, utilizaremos a equa????o da acelera????o m??dia. De acordo com o texto, o m??vel partiu do repouso, logo, sua velocidade inicial era 0 e sua velocidade final foi de 30 m/s, dessa forma, devemos resolver o seguinte c??lculo:\n a = 30 - 0 / 5 \n a = 6 m/s??");
}

function alert_gabarito6() {
    alert("Calculomania??\n\nAplicando a segunda lei de Newton, temos: \nF?? = m . a  >>  N - P = m . a \nN - m . g = m . a  >>  N = m . a + m . g \nN = m (a + g)  >>  N = 10 (0,1 + 10) \nN = 10 . 10,1 = 101 N");
}

function alert_gabarito7() {
    alert("Calculomania??\n\nCalculando capacidade t??rmica:\n\nC = Q/???T\nC = 300/50\nC = 6 cal/??C");
}

function alert_gabarito8() {
    alert("Calculomania??\n\nSe as massas iguais de ??gua e areia receberem ou perderem quantidades iguais de calor, a varia????o de temperatura da ??gua ser?? menor em m??dulo que a da areia, porque a ??gua tem maior calor espec??fico. \n Resposta: A!");
}

function alert_gabarito9() {
    alert("Calculomania??\n\nC = Q / ???T.\n\n Sendo a capacidade t??rmica C das fagulhas muito pequena, elas transferem pouco calor para o operador, o que ?? insuficiente para o queimar.\nResposta: C");
}

function alert_gabarito10() {
    alert("Calculomania??\n\nA f??rmula que pode ser usada para calcular a ??rea total do cubo ??:\n\nA = 6l??\n\nSubstituindo a aresta do cubo nesta f??rmula, temos:\n\nA = 6 . 15??\nA = 6 . 225\nA = 1350cm??\n\nResposta: B");
}

function alert_gabarito11() {
    alert("Calculomania??\n\nUsando a f??rmula para calcular a ??rea do cubo, calcularemos a ??rea para cada um deles separadamente. Em seguida, faremos a subtra????o entre os resultados obtidos:\n\nA??? = 6l??\nA??? = 6 . 10??\nA??? = 6 . 100\nA??? = 600 cm??\n\nA??? = 6l??\nA??? = 6 . 25??\nA??? = 6 . 625\nA??? = 3750 cm??\n\nA??? - A??? = 3750 cm?? - 600 cm?? = 3150 cm??\nResposta: A");
}

function alert_gabarito12() {
    alert("Calculomania??\n\nPara compor duas fun????es, basta colocar a g no lugar de x na fun????o f:\n\ng(f(x)) = x2 + 3\n\nSubstituindo x por ??? 1, teremos:\n\ng(f(x)) = x2 + 3\ng(f(??? 1)) = (??? 1)2 + 3\ng(f(??? 1)) = 1 + 3\ng(f(??? 1)) = 4\n\nAlternativa A!");
}

function alert_gabarito13() {
    alert("Calculomania??\n\nSabendo que uma das propriedades da radicia????o garante que o produto de ra??zes ?? igual ?? raiz do produto, temos:\n\n???2 + ???3.???18 = ???2 + ???(3.18) = ???2 + ???54\n\nAtrav??s da fatora????o, sabemos que 54 = 2 . 3 . 3 . 3 = 2 . 3?? . 3. Podemos ent??o reescrever a raiz de 54 como:\n\n???54 = ???(2 . 3?? . 3) = ???2 . ???3?? . ???3 = ???2 . 3.???3\n\nSubstituindo ???2 . 3.???3 no lugar de ???54, temos:\n\n???2 + ???54 = ???2 + ???2 . 3.???3 = ???2 . (1 + 3???3)\n\nPortanto, a alternativa correta ?? a letra E!");
}

function alert_gabarito14() {
    alert("Calculomania??\n\nA resposta ?? zero. Embora o oper??rio exer??a uma for??a em m??dulo igual ao peso do saco de cimento, que ?? de 500 N, essa for??a ?? na vertical, enquanto seu deslocamento ?? na horizontal, ou seja, o ??ngulo entre a for??a e o deslocamento ?? 90??. Quando a for??a e o deslocamento formam um ??ngulo igual a 90??, o trabalho realizado por essa for??a ?? nulo. Veja: T = F . d . cos ??\n\n?? = 90??, logo cos 90?? = 0, ent??o T = 0.\n\nAlternativa C!");
}

function alert_gabarito15() {
    alert("Calculomania??\n\nPela conserva????o da energia mec??nica (E) temos:\n\nEinicial = Efinal\n\nNo in??cio s?? temos energia potencial gravitacional, pois o objeto ?? abandonado do repouso. No final , ao chegar no solo, toda energia potencial gravitacional se converteu em energia cin??tica.\n\nEnt??o:m .g. h = 2000, logo 5 . 10 . h = 2000\nh = 2000/50\nh = 40 m");
}