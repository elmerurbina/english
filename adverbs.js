const questionsContainer = document.getElementById('questions-container');

const questions = [
    {
        question: '¿Cómo se convierte un verbo en adverbio según el archivo?',
        options: [
            'Añadiendo "-ly" o "-lly" al final.',
            'Añadiendo "-ment" al final.',
            'No hay una regla específica.'
        ],
        correctAnswer: 'Añadiendo "-ly" o "-lly" al final.',
        feedback: '¡Correcto! Para convertir un verbo en adverbio, se agrega "-ly" o "-lly" al final, de manera similar a la terminación "-mente" en español.'
    },
    {
        question: '¿Cuál es la función principal de los adverbios en una oración según el archivo?',
        options: [
            'Nombrar personas, lugares o cosas.',
            'Modificar verbos, adjetivos u otros adverbios.',
            'Indicar el orden de una serie de acciones.'
        ],
        correctAnswer: 'Modificar verbos, adjetivos u otros adverbios.',
        feedback: '¡Correcto! Los adverbios proporcionan información adicional sobre cómo, cuándo, dónde, en qué medida o con qué frecuencia ocurre una acción o se manifiesta una cualidad.'
    },
    {
        question: '¿Cuál es un tipo de adverbio según el archivo que indica el lugar donde ocurre una acción?',
        options: [
            'Adverbios de Tiempo.',
            'Adverbios de Lugar.',
            'Adverbios de Frecuencia.'
        ],
        correctAnswer: 'Adverbios de Lugar.',
        feedback: '¡Correcto! Los adverbios de lugar se refieren al lugar donde ocurre una acción.'
    },
    {
        question: '¿Cuál es la posición más común de los adverbios en una oración?',
        options: [
            'Después del verbo.',
            'Antes del verbo.',
            'Al final de la oración.'
        ],
        correctAnswer: 'Antes del verbo.',
        feedback: '¡Correcto! La posición más común de los adverbios es antes del verbo en una oración.'
    },
    {
        question: '¿Cuál es un adverbio de tiempo según el archivo que significa "Ahora"?',
        options: [
            'Late',
            'Now',
            'Tomorrow'
        ],
        correctAnswer: 'Now',
        feedback: '¡Correcto! "Now" es un adverbio de tiempo que significa "Ahora".'
    },
    {
        question: '¿Cuál es un adverbio de manera según el archivo que significa "Suavemente"?',
        options: [
            'Badly',
            'Smoothly',
            'Clearly'
        ],
        correctAnswer: 'Smoothly',
        feedback: '¡Correcto! "Smoothly" es un adverbio de manera que significa "Suavemente".'
    },
    {
        question: '¿Cuál es un adverbio de grado según el archivo que significa "Muy"?',
        options: [
            'Too',
            'Very',
            'Quite'
        ],
        correctAnswer: 'Very',
        feedback: '¡Correcto! "Very" es un adverbio de grado que significa "Muy".'
    },
    {
        question: '¿Cuál es un adverbio de frecuencia según el archivo que significa "Siempre"?',
        options: [
            'Often',
            'Always',
            'Rarely'
        ],
        correctAnswer: 'Always',
        feedback: '¡Correcto! "Always" es un adverbio de frecuencia que significa "Siempre".'
    },
    {
        question: '¿Qué tipo de adverbio se utiliza para expresar el orden de una serie de acciones según el archivo?',
        options: [
            'Adverbios de Duda.',
            'Adverbios de Orden.',
            'Adverbios de Cantidad.'
        ],
        correctAnswer: 'Adverbios de Orden.',
        feedback: '¡Correcto! Los adverbios de orden se utilizan para indicar el orden de una serie de acciones.'
    },
    {
        question: '¿Cuál es un adverbio de duda según el archivo que significa "Quizás"?',
        options: [
            'Perhaps',
            'Probably',
            'Surely'
        ],
        correctAnswer: 'Perhaps',
        feedback: '¡Correcto! "Perhaps" es un adverbio de duda que significa "Quizás".'
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