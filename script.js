const correctAnswers = {
    q1: 'B',
    q2: 'A',
    q3: 'A',
    q4: 'C',
    q5: 'A',
};

function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    let score = 0;
    let resultsText = '';

    for (let [question, answer] of formData.entries()) {
        if (answer === correctAnswers[question]) {
            score++;
        } else {
            resultsText += `<p>Questão ${question.slice(1)}: A resposta correta é ${correctAnswers[question]}.</p>`;
        }
    }

    localStorage.setItem('quizScore', score);

    const result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de ${Object.keys(correctAnswers).length} questões.<br>${resultsText}`;

    if (score === Object.keys(correctAnswers).length) {
        result.style.color = '#43b581';
    } else {
        result.style.color = '#f04747';
    }
}