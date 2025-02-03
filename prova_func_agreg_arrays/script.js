const questions = [
    { question: "Quem descobriu o Brasil?", options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Fernão de Magalhães"], answer: "Pedro Álvares Cabral" },
    { question: "Em que ano aconteceu a Revolução Francesa?", options: ["1492", "1789", "1812", "1917"], answer: "1789" },
    { question: "Quem foi o primeiro presidente do Brasil?", options: ["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Dom Pedro II"], answer: "Deodoro da Fonseca" },
    { question: "Qual o maior império da história em extensão territorial?", options: ["Império Romano", "Império Mongol", "Império Britânico", "Império Otomano"], answer: "Império Britânico" }
];

function loadQuestion() {
    document.getElementById("feedback").textContent = "";
    document.getElementById("reload").style.display = "none";

    let randomIndex = Math.floor(Math.random() * questions.length);
    let questionData = questions[randomIndex];
    
    document.getElementById("question").textContent = questionData.question;
    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    
    questionData.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("btn");
        btn.onclick = () => checkAnswer(option, questionData.answer);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    let feedback = document.getElementById("feedback");
    if (selected === correct) {
        feedback.textContent = "Acertou!!!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Errado! A resposta correta é: ${correct}`;
        feedback.style.color = "red";
    }
    document.getElementById("reload").style.display = "block";
}

document.getElementById("reload").addEventListener("click", loadQuestion);

loadQuestion();