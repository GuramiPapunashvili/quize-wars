let score_count = 0;

function NextQuestion1() {
    document.getElementById("questionSec").innerHTML = document.getElementById("questionSec2").innerHTML;
}

function NextQuestion2() {
    document.getElementById("questionSec").innerHTML = document.getElementById("questionSec3").innerHTML;
}

function NextQuestion3() {
    document.getElementById("questionSec").innerHTML = document.getElementById("questionSec4").innerHTML;
}

function NextQuestion4() {
    document.getElementById("questionSec").innerHTML = document.getElementById("questionSec5").innerHTML;
}

function Correct() {
    let answer1 = document.getElementById("Answer1");
    let answer2 = document.getElementById("Answer2");
    let answer3 = document.getElementById("Answer3");
    let answer4 = document.getElementById("Answer4");
    
    document.getElementById("question2").src = "Fiji.jpg";
    document.getElementById("Answer5").innerHTML = "tuvalu";
    document.getElementById("Answer6").innerHTML = "New Zealand";
    document.getElementById("Answer7").innerHTML = "Fiji";
    document.getElementById("Answer8").innerHTML = "Australia";
    
    score_count += 1;

    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;

    answer1.style.border = "10px solid green";
    document.getElementById("Stage1").style.backgroundColor = "green"
}

function Incorrect(button) {
    let answer1 = document.getElementById("Answer1");
    let answer2 = document.getElementById("Answer2");
    let answer3 = document.getElementById("Answer3");
    let answer4 = document.getElementById("Answer4");
    
    document.getElementById("question2").src = "Fiji.jpg";
    document.getElementById("Answer5").innerHTML = "tuvalu";
    document.getElementById("Answer6").innerHTML = "New Zealand";
    document.getElementById("Answer7").innerHTML = "Fiji";
    document.getElementById("Answer8").innerHTML = "Australia";

    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;

    button.style.border = "10px solid red";
    answer1.style.border = "10px solid green";
    document.getElementById("Stage1").style.backgroundColor = "red"
}

function Correct2() {
    let answer5 = document.getElementById("Answer5");
    let answer6 = document.getElementById("Answer6");
    let answer7 = document.getElementById("Answer7");
    let answer8 = document.getElementById("Answer8");
    
    document.getElementById("question3").src = "Georgia.webp";
    document.getElementById("Answer9").innerHTML = "England";
    document.getElementById("Answer10").innerHTML = "Turkey";
    document.getElementById("Answer11").innerHTML = "Georgia";
    document.getElementById("Answer12").innerHTML = "Vatican City";
    
    score_count += 1;

    answer5.disabled = true;
    answer6.disabled = true;
    answer7.disabled = true;
    answer8.disabled = true;

    answer7.style.border = "10px solid green";
    document.getElementById("Stage2").style.backgroundColor = "green"
}

function Incorrect2(button) {
    let answer5 = document.getElementById("Answer5");
    let answer6 = document.getElementById("Answer6");
    let answer7 = document.getElementById("Answer7");
    let answer8 = document.getElementById("Answer8");
    
    document.getElementById("question3").src = "Georgia.webp";
    document.getElementById("Answer9").innerHTML = "England";
    document.getElementById("Answer10").innerHTML = "Turkey";
    document.getElementById("Answer11").innerHTML = "Georgia";
    document.getElementById("Answer12").innerHTML = "Vatican City";

    answer5.disabled = true;
    answer6.disabled = true;
    answer7.disabled = true;
    answer8.disabled = true;

    button.style.border = "10px solid red";
    answer7.style.border = "10px solid green";
    document.getElementById("Stage2").style.backgroundColor = "red"
}

function Correct3() {
    let answer9 = document.getElementById("Answer9");
    let answer10 = document.getElementById("Answer10");
    let answer11 = document.getElementById("Answer11");
    let answer12 = document.getElementById("Answer12");
    
    document.getElementById("question4").src = "paraguay.jpg";
    document.getElementById("Answer13").innerHTML = "Paraguay";
    document.getElementById("Answer14").innerHTML = "Croatia";
    document.getElementById("Answer15").innerHTML = "Luxemborg";
    document.getElementById("Answer16").innerHTML = "Netherlands";
    
    score_count += 1;

    answer9.disabled = true;
    answer10.disabled = true;
    answer11.disabled = true;
    answer12.disabled = true;

    answer11.style.border = "10px solid green";
    document.getElementById("Stage3").style.backgroundColor = "green"
}

function Incorrect3(button) {
    let answer9 = document.getElementById("Answer9");
    let answer10 = document.getElementById("Answer10");
    let answer11 = document.getElementById("Answer11");
    let answer12 = document.getElementById("Answer12");
    
    document.getElementById("question4").src = "paraguay.jpg";
    document.getElementById("Answer13").innerHTML = "Paraguay";
    document.getElementById("Answer14").innerHTML = "Croatia";
    document.getElementById("Answer15").innerHTML = "Luxemborg";
    document.getElementById("Answer16").innerHTML = "Netherlands";

    answer9.disabled = true;
    answer10.disabled = true;
    answer11.disabled = true;
    answer12.disabled = true;

    button.style.border = "10px solid red";
    answer11.style.border = "10px solid green";
    document.getElementById("Stage3").style.backgroundColor = "red"
}

function Correct4() {
    let answer13 = document.getElementById("Answer13");
    let answer14 = document.getElementById("Answer14");
    let answer15 = document.getElementById("Answer15");
    let answer16 = document.getElementById("Answer16");
    
    document.getElementById("question5").src = "MVXDp6.jpg";
    document.getElementById("Answer17").innerHTML = "Costa Rica";
    document.getElementById("Answer18").innerHTML = "Estonia";
    document.getElementById("Answer19").innerHTML = "Slovakia";
    document.getElementById("Answer20").innerHTML = "Slovenia";
    
    score_count += 1;

    answer13.disabled = true;
    answer14.disabled = true;
    answer15.disabled = true;
    answer16.disabled = true;

    answer13.style.border = "10px solid green";
    document.getElementById("Stage4").style.backgroundColor = "green"
}

function Incorrect4(button) {
    let answer13 = document.getElementById("Answer13");
    let answer14 = document.getElementById("Answer14");
    let answer15 = document.getElementById("Answer15");
    let answer16 = document.getElementById("Answer16");
    
    document.getElementById("question5").src = "MVXDp6.jpg";
    document.getElementById("Answer17").innerHTML = "Costa Rica";
    document.getElementById("Answer18").innerHTML = "Estonia";
    document.getElementById("Answer19").innerHTML = "Slovakia";
    document.getElementById("Answer20").innerHTML = "Slovenia";

    answer13.disabled = true;
    answer14.disabled = true;
    answer15.disabled = true;
    answer16.disabled = true;

    button.style.border = "10px solid red";
    answer13.style.border = "10px solid green";
    document.getElementById("Stage4").style.backgroundColor = "red"
}

function Correct5() {
    let answer17 = document.getElementById("Answer17");
    let answer18 = document.getElementById("Answer18");
    let answer19 = document.getElementById("Answer19");
    let answer20 = document.getElementById("Answer20");

    answer17.disabled = true;
    answer18.disabled = true;
    answer19.disabled = true;
    answer20.disabled = true;

    score_count += 1

    answer18.style.border = "10px solid green";
    document.getElementById("Stage5").style.backgroundColor = "green"
}

function Incorrect5(button) {
    let answer17 = document.getElementById("Answer17");
    let answer18 = document.getElementById("Answer18");
    let answer19 = document.getElementById("Answer19");
    let answer20 = document.getElementById("Answer20");

    answer17.disabled = true;
    answer18.disabled = true;
    answer19.disabled = true;
    answer20.disabled = true;

    button.style.border = "10px solid red";
    answer18.style.border = "10px solid green";
    document.getElementById("Stage5").style.backgroundColor = "red"
}

function RevealScore() {
    document.getElementById("YourScore").innerText = "You Got A Score Of " + score_count
}

function Redirect() {
    window.location.href = "https://guramipapunashvili.github.io/quize-wars/Quizes.html";
}
