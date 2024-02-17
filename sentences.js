const questionsContainer = document.getElementById('questions-container');
const questions = [
    {
        question: '¿Cuál es la función del "sujeto" en una oración?',
        options: [
            'Realiza la acción en la oración.',
            'Recibe la acción en la oración.',
            'Indica la ubicación de la acción.'
        ],
        correctAnswer: 'Realiza la acción en la oración.',
        feedback: '¡Correcto! El sujeto realiza la acción en la oración.'
    },
    {
        question: '¿Qué parte del discurso sigue típicamente al verbo en una oración en inglés?',
        options: [
            'Adjetivo',
            'Sustantivo',
            'Adverbio'
        ],
        correctAnswer: 'Sustantivo',
        feedback: '¡Correcto! Un sustantivo típicamente sigue al verbo en una oración en inglés.'
    },
    {
        question: '¿Cuál es la función del "predicado" en una oración?',
        options: [
            'Realiza la acción en la oración.',
            'Completa la acción o describe el sujeto.',
            'Indica la ubicación de la acción.'
        ],
        correctAnswer: 'Completa la acción o describe el sujeto.',
        feedback: '¡Correcto! El predicado completa la acción o describe el sujeto.'
    },
    {
        question: '¿Qué parte del discurso modifica un verbo, adjetivo o otro adverbio?',
        options: [
            'Adjetivo',
            'Sustantivo',
            'Adverbio'
        ],
        correctAnswer: 'Adverbio',
        feedback: '¡Correcto! Un adverbio modifica un verbo, adjetivo o otro adverbio.'
    },
    {
        question: '¿Cuál es la función de un "objeto" en una oración?',
        options: [
            'Realiza la acción en la oración.',
            'Recibe la acción del verbo.',
            'Indica la ubicación de la acción.'
        ],
        correctAnswer: 'Recibe la acción del verbo.',
        feedback: '¡Correcto! El objeto recibe la acción del verbo.'
    }
];



function generateQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach((option, optionIndex) => {
            questionDiv.innerHTML += `<label><input type="radio" name="q${index}" value="${option}">${option}</label>`;
        });
        questionsContainer.appendChild(questionDiv);
    });
}

function checkAnswers() {
    const userAnswers = [];
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        userAnswers.push({
            question: q.question,
            answer: selectedOption ? selectedOption.value : 'Not answered',
            isCorrect: selectedOption && selectedOption.value === q.correctAnswer,
        });
    });
    displayResults(userAnswers);
}

function displayResults(userAnswers) {
    questionsContainer.innerHTML = '';
    let correctCount = 0;

    userAnswers.forEach((ua, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        if (ua.isCorrect) {
            correctCount++;
            questionDiv.classList.add('correct');
            questionDiv.innerHTML = `<p>${index + 1}. ${ua.question}</p><p>Your Answer: ${ua.answer}</p><p>${questions[index].feedback}</p>`;
        } else {
            questionDiv.classList.add('incorrect');
            questionDiv.innerHTML = `<p>${index + 1}. ${ua.question}</p><p>Your Answer: ${ua.answer}</p><p>Incorrect. La respuesta correcta es: ${questions[index].correctAnswer}</p>`;
        }
        questionsContainer.appendChild(questionDiv);
    });

    const scoreDiv = document.createElement('div');
    scoreDiv.classList.add('score');
    scoreDiv.innerHTML = `<p>Your Score: ${correctCount}/${userAnswers.length}</p>`;
    questionsContainer.appendChild(scoreDiv);
}

generateQuestions();