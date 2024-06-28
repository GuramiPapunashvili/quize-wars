let score_count = 0



function Correct() {
    let questionSec = document.getElementById("questionSec")
    let previous = document.getElementById("question2")
    answer1 = document.getElementById("Answer1")
    answer2 = document.getElementById("Answer2")
    answer3 = document.getElementById("Answer3")
    answer4 = document.getElementById("Answer4")
    answer5 = document.getElementById("Answer5")
    answer6 = document.getElementById("Answer6")
    answer7 = document.getElementById("Answer7")
    answer8 = document.getElementById("Answer8")
    previous.src = "Fiji.jpg"
    answer5.innerHTML = "tuvalu"
    answer6.innerHTML = "New Zealand"
    answer7.innerHTML = "Fiji"
    answer8.innerHTML = "Australia"
    score_count += 1
    answer1.disabled = true
    answer2.disabled = true
    answer3.disabled = true
    answer4.disabled = true
    question2.scrollIntoView({behavior: "smooth"})
    questionSec.style.backgroundColor = "green"
}

function Incorrect() {
    let questionSec = document.getElementById("questionSec")
    let previous = document.getElementById("question2")
    answer1 = document.getElementById("Answer1")
    answer2 = document.getElementById("Answer2")
    answer3 = document.getElementById("Answer3")
    answer4 = document.getElementById("Answer4")
    answer5 = document.getElementById("Answer5")
    answer6 = document.getElementById("Answer6")
    answer7 = document.getElementById("Answer7")
    answer8 = document.getElementById("Answer8")
    previous.src = "Fiji.jpg"
    answer5.innerHTML = "Tuvalu"
    answer6.innerHTML = "New Zealand"
    answer7.innerHTML = "fiji"
    answer8.innerHTML = "Australia"
    answer1.disabled = true
    answer2.disabled = true
    answer3.disabled = true
    answer4.disabled = true
    question2.scrollIntoView({behavior: "smooth"})
    questionSec.style.backgroundColor = "red"    
}

function Correct2() {
    let questionSec2 = document.getElementById("questionSec2")
    let previous = document.getElementById("question3")
    answer9 = document.getElementById("Answer9")
    answer10 = document.getElementById("Answer10")
    answer11 = document.getElementById("Answer11")
    answer12 = document.getElementById("Answer12")
    previous.src = "Georgia.webp"
    answer9.innerHTML = "England"
    answer10.innerHTML = "Turkey"
    answer11.innerHTML = "Georgia"
    answer12.innerHTML = "Vatican City"
    score_count += 1
    answer5.disabled = true
    answer6.disabled = true
    answer7.disabled = true
    answer8.disabled = true
    question3.scrollIntoView({behavior: "smooth"})
    questionSec2.style.backgroundColor = "green"
}

function Incorrect2() {
    let questionSec2 = document.getElementById("questionSec2")
    let previous = document.getElementById("question3")
    answer9 = document.getElementById("Answer9")
    answer10 = document.getElementById("Answer10")
    answer11 = document.getElementById("Answer11")
    answer12 = document.getElementById("Answer12")
    previous.src = "Georgia.webp"
    answer9.innerHTML = "England"
    answer10.innerHTML = "Turkey"
    answer11.innerHTML = "Georgia"
    answer12.innerHTML = "Vatican City"
    answer5.disabled = true
    answer6.disabled = true
    answer7.disabled = true
    answer8.disabled = true
    question3.scrollIntoView({behavior: "smooth"})
    questionSec2.style.backgroundColor = "red"    
}

function Correct3() {
    let questionSec3 = document.getElementById("questionSec3")
    let previous = document.getElementById("question4")
    answer13 = document.getElementById("Answer13")
    answer14 = document.getElementById("Answer14")
    answer15 = document.getElementById("Answer15")
    answer16 = document.getElementById("Answer16")
    previous.src = "paraguay.jpg"
    answer13.innerHTML = "Paraguay"
    answer14.innerHTML = "Croatia"
    answer15.innerHTML = "Luxembourg"
    answer16.innerHTML = "Netherlands"
    score_count += 1
    answer9.disabled = true
    answer10.disabled = true
    answer11.disabled = true
    answer12.disabled = true
    question4.scrollIntoView({behavior: "smooth"})
    questionSec3.style.backgroundColor = "green"
}

function Incorrect3() {
    let questionSec3 = document.getElementById("questionSec3")
    let previous = document.getElementById("question4")
    answer13 = document.getElementById("Answer13")
    answer14 = document.getElementById("Answer14")
    answer15 = document.getElementById("Answer15")
    answer16 = document.getElementById("Answer16")
    previous.src = "paraguay.jpg"
    answer13.innerHTML = "Paraguay"
    answer14.innerHTML = "Croatia"
    answer15.innerHTML = "Luxembourg"
    answer16.innerHTML = "Netherlands"
    answer9.disabled = true
    answer10.disabled = true
    answer11.disabled = true
    answer12.disabled = true
    question4.scrollIntoView({behavior: "smooth"})
    questionSec3.style.backgroundColor = "red"
}

function Correct4() {
    let questionSec4 = document.getElementById("questionSec4")
    let previous = document.getElementById("question5")
    answer17 = document.getElementById("Answer17")
    answer18 = document.getElementById("Answer18")
    answer19 = document.getElementById("Answer19")
    answer20 = document.getElementById("Answer20")
    previous.src = "MVXDp6.jpg"
    answer17.innerHTML = "Costa Rica"
    answer18.innerHTML = "Estonia"
    answer19.innerHTML = "Slovakia"
    answer20.innerHTML = "Slovenia"
    score_count += 1
    answer13.disabled = true
    answer14.disabled = true
    answer15.disabled = true
    answer16.disabled = true
    question5.scrollIntoView({behavior: "smooth"})
    questionSec4.style.backgroundColor = "green"
}

function Incorrect4() {
    let questionSec4 = document.getElementById("questionSec4")
    let previous = document.getElementById("question5")
    answer17 = document.getElementById("Answer17")
    answer18 = document.getElementById("Answer18")
    answer19 = document.getElementById("Answer19")
    answer20 = document.getElementById("Answer20")
    previous.src = "MVXDp6.jpg"
    answer17.innerHTML = "Costa Rica"
    answer18.innerHTML = "Estonia"
    answer19.innerHTML = "Slovakia"
    answer20.innerHTML = "Slovenia"
    answer13.disabled = true
    answer14.disabled = true
    answer15.disabled = true
    answer16.disabled = true
    question5.scrollIntoView({behavior: "smooth"})
    questionSec4.style.backgroundColor = "red"
}

function Correct5() {
    let questionSec5 = document.getElementById("questionSec5")
    let FinishAnswer = document.getElementById("FinishTest")
    let ScoreReveal = document.getElementById("RevealScore")
    FinishAnswer.innerHTML = "Finish Test"
    ScoreReveal.innerHTML = "Reveal Your Score"
    score_count += 1
    answer17.disabled = true
    answer18.disabled = true
    answer19.disabled = true
    answer20.disabled = true
    ScoreReveal.scrollIntoView({behavior: "smooth"})
    questionSec5.style.backgroundColor = "green"
}

function Incorrect5() {
    let questionSec5 = document.getElementById("questionSec5")
    let FinishAnswer = document.getElementById("FinishTest")
    let ScoreReveal = document.getElementById("RevealScore")
    FinishAnswer.innerHTML = "Finish Test"
    ScoreReveal.innerHTML = "Reveal Your Score"
    answer17.disabled = true
    answer18.disabled = true
    answer19.disabled = true
    answer20.disabled = true
    ScoreReveal.scrollIntoView({behavior: "smooth"})
    questionSec5.style.backgroundColor = "red"
}

function Redirect() {
    window.location.href = "https://guramipapunashvili.github.io/quize-wars/Quizes.html"
}

function RevealScore() {
    let Score = document.getElementById("YourScore")
    Score.innerHTML = "You got " + score_count + " out of 5 questions correct"
}