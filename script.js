document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Respuestas correctas
    const correctAnswers = [
        "fernando martin ramirez gonzalez", // Pregunta 1
        "21 de julio", // Pregunta 2
        "B", // Pregunta 3
        "serenidad e inteligencia", // Pregunta 4
        "verde", // Pregunta 5
        "otto von bismarck" // Pregunta 6
    ];

    // Pistas para las respuestas incorrectas
    const hints = [
        "Esa de ley debes de saberla no ma me mi mo mu :,c",
        "two days before of yours",
        "One word",
        "Se__ni__d e in__li___cia",
        "Tu hermano piensa que es la unica camisa que tengo",
        "Es de alemania antes de la gran guerra"
    ];

    let allCorrect = true;

    for (let i = 1; i <= 6; i++) {
        const userAnswer = document.getElementById(`question${i}`).value.trim();
        const feedback = document.getElementById(`feedback${i}`);

        if (userAnswer.toLowerCase() === correctAnswers[i - 1].toLowerCase()) {
            feedback.textContent = "Correcto!";
            feedback.className = "feedback correct";
        } else {
            feedback.textContent = `Incorrecto! Pista: ${hints[i - 1]}`;
            feedback.className = "feedback incorrect";
            allCorrect = false;
        }
    }

    // Si todas son correctas, redirigir a main.html
    if (allCorrect) {
        window.location.href = "main.html";
    }
});
