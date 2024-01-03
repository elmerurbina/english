const questionsContainer = document.getElementById('questions-container');

const questions = [
    {
        question: '¿Cuál es el propósito principal de los verbos en un idioma?',
        options: [
            'Describir objetos o personas.',
            'Indicar lugar o dirección.',
            'Representar acciones, procesos o estados.'
        ],
        correctAnswer: 'Representar acciones, procesos o estados.',
        feedback: '¡Correcto! Los verbos son fundamentales para construir oraciones en un idioma, ya que representan acciones, procesos o estados.'
    },
    {
        question: '¿Cómo se forma el pasado simple y el participio pasado de los verbos regulares?',
        options: [
            'Añadiendo "-ing" al infinitivo.',
            'Añadiendo "-ed" al infinitivo.',
            'No hay un patrón fijo.'
        ],
        correctAnswer: 'Añadiendo "-ed" al infinitivo.',
        feedback: '¡Correcto! Los verbos regulares siguen un patrón fijo en su conjugación, añadiendo "-ed" al infinitivo para formar el pasado simple y el participio pasado.'
    },
    {
        question: '¿Qué caracteriza a los verbos irregulares en su conjugación?',
        options: [
            'Siguen un patrón fijo.',
            'Tienen formas únicas en el pasado simple y el participio pasado.',
            'Ninguna de las anteriores.'
        ],
        correctAnswer: 'Tienen formas únicas en el pasado simple y el participio pasado.',
        feedback: '¡Correcto! Los verbos irregulares no siguen un patrón fijo en su conjugación; cada verbo tiene formas únicas en el pasado simple y el participio pasado.'
    },
    {
        question: '¿Cuál es la función principal de los verbos modales?',
        options: [
            'Expresar posesión.',
            'Indicar acciones pasadas.',
            'Expresar capacidad, posibilidad, permiso, obligación o probabilidad.'
        ],
        correctAnswer: 'Expresar capacidad, posibilidad, permiso, obligación o probabilidad.',
        feedback: '¡Correcto! Los verbos modales son auxiliares que expresan la capacidad, posibilidad, permiso, obligación o la probabilidad de que algo ocurra.'
    },
    {
        question: '¿Cuál es el significado principal del verbo "can"?',
        options: [
            'Expresa condiciones.',
            'Indica habilidad o capacidad.',
            'Hace sugerencias o proposiciones.'
        ],
        correctAnswer: 'Indica habilidad o capacidad.',
        feedback: '¡Correcto! El verbo "can" significa poder y se utiliza para expresar habilidad o capacidad.'
    },
    {
        question: '¿Cómo se traduce el verbo "could" al español?',
        options: [
            'Debería.',
            'Podría.',
            'Haría.'
        ],
        correctAnswer: 'Podría.',
        feedback: '¡Correcto! "Could" se traduce como "podría" en español y se utiliza en contextos más formales o para expresar posibilidades.'
    },
    {
        question: '¿Cuál es la función principal del verbo modal "would"?',
        options: [
            'Expresar condiciones.',
            'Indicar acciones pasadas.',
            'Condiciones, deseos o cortesía.'
        ],
        correctAnswer: 'Condiciones, deseos o cortesía.',
        feedback: '¡Correcto! "Would" se utiliza para expresar condiciones, deseos o cortesía en las oraciones.'
    },
    {
        question: '¿Para qué se utiliza el verbo modal "should"?',
        options: [
            'Hacer sugerencias o proposiciones.',
            'Expresar posibilidad.',
            'Consejos o expectativas.'
        ],
        correctAnswer: 'Consejos o expectativas.',
        feedback: '¡Correcto! "Should" se utiliza para dar consejos o expresar expectativas en una situación.'
    },
    {
        question: '¿Cuál es la diferencia principal entre "may" y "might"?',
        options: [
            '"May" se usa para expresar posibilidad en el presente, mientras que "might" se utiliza en el pasado.',
            '"May" se utiliza solo para hacer solicitudes, y "might" para hacer sugerencias.',
            'No hay diferencia, son sinónimos.'
        ],
        correctAnswer: '"May" se utiliza para expresar posibilidad en el presente. "Might" se utiliza para expresar posibilidad en el presente o en el futuro, pero con una menor certeza que "may".',
        feedback: '¡Correcto! "May" se utiliza para expresar posibilidad en el presente, mientras que "might" se utiliza para expresar posibilidad en el presente o en el futuro, pero con una menor certeza que "may".'
    },
    {
        question: '¿Cómo se percibe "might" en comparación con "may"?',
        options: [
            '"Might" se percibe como más seguro o probable que "may".',
            '"Might" sugiere una posibilidad más remota o menos segura que "may".',
            '"Might" y "may" son intercambiables sin cambios de significado.'
        ],
        correctAnswer: '"Might" sugiere una posibilidad más remota o menos segura que "may".',
        feedback: '¡Correcto! "Might" sugiere una posibilidad más remota o menos segura que "may". En situaciones formales, "may" puede ser considerado más formal que "might".'
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