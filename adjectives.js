const questionsContainer = document.getElementById('questions-container');

const questions = [
    {
        question: '¿Cuál es la función principal de los adjetivos en una oración?',
        options: [
            'Describir acciones y procesos.',
            'Nombrar personas, lugares, cosas, ideas o conceptos.',
            'Proporcionar información adicional sobre las características o cualidades de un sustantivo.'
        ],
        correctAnswer: 'Proporcionar información adicional sobre las características o cualidades de un sustantivo.',
        feedback: '¡Correcto! Los adjetivos son palabras que describen o modifican sustantivos, proporcionando información adicional sobre sus características o cualidades.'
    },
    {
        question: '¿Cuál es una de las funciones de los adjetivos según el archivo?',
        options: [
            'Indicar la cantidad de un sustantivo.',
            'Expresar la máxima calidad o grado de un sustantivo.',
            'Funcionar como objeto directo o indirecto.'
        ],
        correctAnswer: 'Indicar la cantidad de un sustantivo.',
        feedback: '¡Correcto! Los adjetivos también indican la cantidad de un sustantivo, entre otras funciones.'
    },
    {
        question: '¿Cómo se forman los comparativos de igualdad según las reglas?',
        options: [
            '"as + adjetivo + as"',
            '"more + adjetivo"',
            '"less + adjetivo"'
        ],
        correctAnswer: '"as + adjetivo + as"',
        feedback: '¡Correcto! Los comparativos de igualdad se forman con la estructura "as + adjetivo + as", como en "As tall as (Tan alto como)".'
    },
    {
        question: '¿Cuál es la regla general para formar superlativos de una sílaba?',
        options: [
            'Añadir "-est" al adjetivo.',
            'Cambiar la "y" a "i" y añadir "-est".',
            'Usar "the most" antes del adjetivo.'
        ],
        correctAnswer: 'Añadir "-est" al adjetivo.',
        feedback: '¡Correcto! La regla general para formar superlativos de una sílaba es añadir "-est" al final del adjetivo, como en "big (grande); biggest (el más grande)".'
    },
    {
        question: '¿Cómo se forma el superlativo de adjetivos de dos sílabas terminados en "y"?',
        options: [
            'Añadir "-est" al adjetivo.',
            'Cambiar la "y" a "i" y añadir "-est".',
            'Usar "the most" antes del adjetivo.'
        ],
        correctAnswer: 'Cambiar la "y" a "i" y añadir "-est".',
        feedback: '¡Correcto! Para adjetivos de dos sílabas terminados en "y", se cambia la "y" a "i" y se añade "-est", como en "happy – happiest".'
    },
    {
        question: '¿Qué expresan los adjetivos superlativos?',
        options: [
            'Diferencias entre dos o más sustantivos.',
            'La calidad máxima de un sustantivo en relación con otros de su tipo.',
            'Cómo algo está cerca o lejos.'
        ],
        correctAnswer: 'La calidad máxima de un sustantivo en relación con otros de su tipo.',
        feedback: '¡Correcto! Los superlativos se utilizan para expresar la calidad máxima de un sustantivo en relación con otros de su tipo.'
    },
    {
        question: '¿Cuándo se utiliza "most" en comparación con "more"?',
        options: [
            'Most se utiliza solo para comparar dos nouns.',
            'Most se utiliza en contextos cuando hay muchos nouns presentes.',
            'No hay diferencia entre "most" y "more".'
        ],
        correctAnswer: 'Most se utiliza en contextos cuando hay muchos nouns presentes.',
        feedback: '¡Correcto! "Most" se utiliza en contextos cuando hay muchos nouns presentes, o cuando se quiere exaltar algo o alguien entre mucha gente o cosas.'
    },
    {
        question: '¿Cuál es la posición más común de los adjetivos en una oración?',
        options: [
            'Después del sustantivo.',
            'Antes del sustantivo.',
            'Después de verbos de sensación.'
        ],
        correctAnswer: 'Antes del sustantivo.',
        feedback: '¡Correcto! La posición más común de los adjetivos es antes del sustantivo en una oración.'
    },
    {
        question: '¿Qué función pueden tener los adjetivos después de pronombres demostrativos como "this," "that," "these," y "those"?',
        options: [
            'Funcionar como objeto directo.',
            'Indicar la cantidad de un sustantivo.',
            'Describir las características de un sustantivo.'
        ],
        correctAnswer: 'Describir las características de un sustantivo.',
        feedback: '¡Correcto! Los adjetivos después de pronombres demostrativos como "this," "that," "these," y "those" describen las características de un sustantivo.'
    },
    {
        question: '¿Cuándo se utiliza "most" en comparación con "more"?',
        options: [
            'Most se utiliza solo para comparar dos nouns.',
            'Most se utiliza en contextos cuando hay muchos nouns presentes.',
            'No hay diferencia entre "most" y "more".'
        ],
        correctAnswer: 'Most se utiliza en contextos cuando hay muchos nouns presentes.',
        feedback: '¡Correcto! "Most" se utiliza en contextos cuando hay muchos nouns presentes, o cuando se quiere exaltar algo o alguien entre mucha gente o cosas.'
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