var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');

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

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+ 
    answers.question5;
    
    if (total_score >= 5 && total_score <= 15){
        return total_score;
    } else {
        return  0;
    }
    
}

function getInfoBasedOnScore(){
    if(totalScore() >= 13){
        var score_info = "Uauuu como você cresceu e já se desenvolveu, mas não esqueça que o bom é inimigo do ótimo, em se tratando de inteligência emocional sempre existe algo a ser aprimorado, identifique áreas que ainda estão em sombra e que precisam ser tratadas! Mas se você já se deu conta que algumas questões vc já percebe que estão iluminadas, veja aí seu redor, transborde do que você está cheio para derramar em  pessoas que estão próximas a você que pode agregar e fazer diferença na vida dessas pessoas, mas cuidado, não se encha de orgulho achando que agora você  tem o 'pozinho mágico' que se deu certo pra você dará também para o outro, respeite o ciclo de cada um e partilhe das suas experiências.";
    } else if (totalScore() < 13 && totalScore() >=9) {
        var score_info = "Aceitação é o antídoto para você alcançar novos lugares emocionante mais positivos e eficazes. Ela é o caminho para sua verdadeira mudança, de dentro pra fora! Reconhecer que tem uma grande jornada pela frente te faz seguir e persistir. Um passo de cada vez, mas constante certamente fará você alcançar resultados! Agora, identifique a pontuação mais alta que você teve, comece por ele, pois a sensação de ter uma resposta rápida pode te dar fôlego para vc continuar no processo!  Lembre-se você está em uma jornada, é importante que no caminho você tenha 'guias' que podem te ajudar quando se vê perdido no meio da trilha. Continue sua psicoterapia, não pare!"
    } else if(totalScore() < 9 && totalScore() >=5) {
        var score_info = "Calma, voce não está perdido, pelo contrário, isso é uma boa notícia!Agora vc tem clareza do que precisa ser feito em area específicas da sua vida, o fato de vc não saber o que tinha de necessidade não havia uma forma de como agir, pois talvez não soubesse o que pode estar te  impedindo de viver em plenitude! Reveja suas respostas e desenvolva um plano de ação curto e viável!  Encontre um mentor, faça psicoterapia, busque ajuda, esse é o caminho mais inteligente que você vai percorrer!"
    } else {
        var score_info = "Voce preencheu o formulário incorretamente ou deixou de responder alguma pergunta. Faça novamente"
    }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');

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
    growProgressBar('40%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('60%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('80%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('100%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
})

submit5.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}