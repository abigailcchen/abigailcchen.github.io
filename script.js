const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const subtitle = document.getElementById("subtitle")
const nip = document.getElementById("nip")

const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    nip.classList.add("hide")
    startButton.classList.add("hide")
    subtitle.classList.add("hide")
    shuffledQuestions = questions
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    } else {
        nip.classList.remove("hide")
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "ya liubiu vas",
        answers: [
            { text: 'Russian', correct: true},
            { text: 'Latvian', correct: false}
            
        ]
    },
    {
        question: "mahal kita",
        answers: [
            { text: 'Esperanto', correct: false},
            {text: 'Filipino', correct: true} 
        ]
    },
    {
        question: "seni seviyorum",
        answers: [
            { text: 'Turkish', correct: true},
            {text: 'Croatian', correct: false} 
        ]
    },
    {
        question: "sarang he",
        answers: [
            { text: 'Korean', correct: true},
            {text: 'North Korean', correct: false} 
        ]
    },
    {
        question: "ai shiteru",
        answers: [
            { text: 'Japanese', correct: true},
            {text: 'Korean', correct: false} 
        ]
    },
    {
        question: "yes sirum yem k'ez",
        answers: [
            { text: 'Georgian', correct: false},
            {text: 'Armenian', correct: true} 
        ]
    },
    {
        question: "waan ku jeclahay",
        answers: [
            { text: 'Sundanese', correct: false},
            {text: 'Somali', correct: true} 
        ]
    },
    {
        question: "miq'varkhar",
        answers: [
            { text: 'Armenian', correct: false},
            {text: 'Georgian', correct: true} 
        ]
    },
    {
        question: "ana ahibuk",
        answers: [
            { text: 'Arabic', correct: true},
            {text: 'Darija', correct: false} 
        ]
    },
    {
        question: "rwy'n dy garu di",
        answers: [
            { text: 'Welsh', correct: true},
            {text: 'Scots Gaelic', correct: false} 
        ]
    },
    {
        question: "phm rak khun",
        answers: [
            { text: 'Thai', correct: true},
            {text: 'Khmer', correct: false} 
        ]
    },
    {
        question: "eg elska pig",
        answers: [
            { text: 'Norwegian', correct: false},
            {text: 'Icelandic', correct: true} 
        ]
    },
    {
        question: "mwen renmen ou",
        answers: [
            { text: 'Hawaiian', correct: false},
            {text: 'Haitian Creole', correct: true} 
        ]
    },
    {
        question: "ik houd van je",
        answers: [
            { text: 'Dutch', correct: true},
            {text: 'Danish', correct: false} 
        ]
    },
    {
        question: "tha gradh agam ort",
        answers: [
            { text: 'Arabic', correct: false},
            {text: 'Scots Gaelic', correct: true} 
        ]
    },
    {
        question: "annoying squeezes and sexting in japanese",
        answers: [
            { text: 'Abi', correct: true},
            {text: 'Sako', correct: false} 
        ]
    },
    {
        question: "word hugs and late cookbooks",
        answers: [
            { text: 'Abi', correct: false},
            {text: 'Sako', correct: true} 
        ]
    },
    {
        question: "happy late bf day!",
        answers: [
            { text: 'ur late loser', correct: false},
            {text: 'thanks love u <3', correct: true} 
        ]
    }
]
