const questionsContainer = document.getElementById('questions-container');

const questions = [
    {
        question: '¿Cuál es la función de "This" en una oración según el archivo?',
        options: [
            'Referirse a un objeto lejano en singular.',
            'Referirse a un objeto cercano en singular.',
            'Presentar opciones o alternativas.'
        ],
        correctAnswer: 'Referirse a un objeto cercano en singular.',
        feedback: '¡Correcto! "This" se utiliza para referirse a un objeto o idea cercana en singular.'
    },
    {
        question: '¿Cuándo se utiliza "That" según el archivo?',
        options: [
            'Para referirse a un objeto cercano en singular.',
            'Para referirse a un objeto lejano en singular.',
            'Para indicar ubicación general.'
        ],
        correctAnswer: 'Para referirse a un objeto lejano en singular.',
        feedback: '¡Correcto! "That" se utiliza para referirse a un objeto o idea lejana en singular.'
    },
    {
        question: '¿Cuál es la dirección que indica "Backward"?',
        options: [
            'En dirección hacia adelante.',
            'En dirección hacia atrás o hacia el pasado.',
            'En dirección hacia arriba.'
        ],
        correctAnswer: 'En dirección hacia atrás o hacia el pasado.',
        feedback: '¡Correcto! "Backward" indica la dirección hacia atrás o hacia el pasado.'
    },
    {
        question: '¿Qué preposición se utiliza para indicar ubicación encima de una superficie?',
        options: [
            'Of',
            'In',
            'On'
        ],
        correctAnswer: 'On',
        feedback: '¡Correcto! "On" se utiliza para indicar ubicación encima de una superficie.'
    },
    {
        question: '¿Cómo se utiliza "The" en una oración según el archivo?',
        options: [
            'Para referirse a algo específico o ya mencionado.',
            'Para indicar ubicación precisa.',
            'Para expresar hechos o verdades universales.'
        ],
        correctAnswer: 'Para referirse a algo específico o ya mencionado.',
        feedback: '¡Correcto! "The" se utiliza para referirse a algo específico o ya mencionado.'
    },
    {
        question: '¿Cuál es la estructura del Zero Conditional según el archivo?',
        options: [
            'If + Present Simple, Will + Infinitive.',
            'If + Past Simple, Would + Infinitive.',
            'If + Present Simple, Present Simple.'
        ],
        correctAnswer: 'If + Present Simple, Present Simple.',
        feedback: '¡Correcto! El Zero Conditional se usa para expresar hechos o verdades universales, y su estructura es If + Present Simple, Present Simple.'
    },
    {
        question: '¿En qué condicional se expresan situaciones futuras posibles?',
        options: [
            'Zero Conditional.',
            'First Conditional.',
            'Second Conditional.'
        ],
        correctAnswer: 'First Conditional.',
        feedback: '¡Correcto! El First Conditional se usa para expresar situaciones futuras posibles.'
    },
    {
        question: '¿Cuál es la preposición que indica posesión, origen, contenido, entre otros?',
        options: [
            'In',
            'At',
            'Of'
        ],
        correctAnswer: 'Of',
        feedback: '¡Correcto! "Of" se utiliza para indicar posesión, origen, contenido, entre otros.'
    },
    {
        question: '¿Cuál es el adverbio que significa "En dirección hacia adelante"?',
        options: [
            'Forward',
            'Backward',
            'Upward'
        ],
        correctAnswer: 'Forward',
        feedback: '¡Correcto! "Forward" significa en dirección hacia adelante.'
    },
    {
        question: '¿Cuál es el conector lógico que se utiliza para presentar opciones o alternativas?',
        options: [
            'And',
            'Or',
            'But'
        ],
        correctAnswer: 'Or',
        feedback: '¡Correcto! "Or" se utiliza para presentar opciones o alternativas.'
    },
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