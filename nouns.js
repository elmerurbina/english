const questionsContainer = document.getElementById('questions-container');

const questions = [
    {
        question: '¿Cuál es la función principal de los sustantivos en un idioma?',
        options: [
            'Describir acciones y procesos.',
            'Nombrar personas, lugares, cosas, ideas o conceptos.',
            'Indicar lugar o dirección.'
        ],
        correctAnswer: 'Nombrar personas, lugares, cosas, ideas o conceptos.',
        feedback: '¡Correcto! Los sustantivos son palabras que se utilizan para nombrar personas, lugares, cosas, ideas o conceptos en un idioma.'
    },
    {
        question: '¿Qué tipo de sustantivo nombra objetos o seres de manera general y no específica?',
        options: [
            'Sustantivos propios.',
            'Sustantivos comunes.',
            'Sustantivos abstractos.'
        ],
        correctAnswer: 'Sustantivos comunes.',
        feedback: '¡Correcto! Los sustantivos comunes nombran objetos o seres de manera general y no específica, como "city" o "person".'
    },
    {
        question: '¿Cuál es un ejemplo de sustantivo propio?',
        options: [
            'table',
            'Jhon',
            'happiness'
        ],
        correctAnswer: 'Jhon',
        feedback: '¡Correcto! Los sustantivos propios nombran a una persona, lugar o cosa específica, como "Jhon" o "Paris".'
    },
    {
        question: '¿Qué tipo de sustantivo se refiere a objetos o seres que tienen existencia física?',
        options: [
            'Sustantivos concretos.',
            'Sustantivos abstractos.',
            'Sustantivos comunes.'
        ],
        correctAnswer: 'Sustantivos concretos.',
        feedback: '¡Correcto! Los sustantivos concretos se refieren a objetos o seres que tienen existencia física, como "table" o "dog".'
    },
    {
        question: '¿Qué nombran los sustantivos abstractos?',
        options: [
            'Objetos o seres específicos.',
            'Ideas, conceptos o estados sin forma física.',
            'Acciones y procesos.'
        ],
        correctAnswer: 'Ideas, conceptos o estados sin forma física.',
        feedback: '¡Correcto! Los sustantivos abstractos nombran ideas, conceptos o estados que no tienen una forma física, como "happiness" o "love".'
    },
    {
        question: '¿En qué función de la oración puede ser el sustantivo el sujeto, realizando la acción?',
        options: [
            'Objeto directo y indirecto.',
            'Sujeto de la oración.',
            'Complemento del predicado.'
        ],
        correctAnswer: 'Sujeto de la oración.',
        feedback: '¡Correcto! El sustantivo puede ser el sujeto de la oración, realizando la acción, como en "The cat sleeps.".'
    },
    {
        question: 'En una oración, ¿qué función puede tener el sustantivo al funcionar como objeto directo o indirecto?',
        options: [
            'Realizar la acción del verbo.',
            'Ampliar el significado del predicado.',
            'Funcionar como complemento del sujeto.'
        ],
        correctAnswer: 'Realizar la acción del verbo.',
        feedback: '¡Correcto! El sustantivo puede funcionar como objeto directo o indirecto en una oración, realizando la acción del verbo, como en "She bought a house.".'
    },
    {
        question: 'Después de preposiciones, ¿qué suelen hacer los sustantivos?',
        options: [
            'Ser el sujeto de la oración.',
            'Funcionar como objeto directo.',
            'Usarse para indicar lugar o dirección.'
        ],
        correctAnswer: 'Usarse para indicar lugar o dirección.',
        feedback: '¡Correcto! Los sustantivos a menudo se utilizan después de preposiciones para indicar lugar o dirección, como en "I am going to the store.".'
    },
    {
        question: '¿Cuál es la diferencia principal entre "direct object" e "indirect object"?',
        options: [
            '"Direct object" responde a "¿Qué?" o "¿A quién?" después del verbo, mientras que "indirect object" responde a "¿A quién?" o "¿Para quién?" o "¿A qué?" después del verbo.',
            '"Indirect object" recibe directamente la acción del verbo, mientras que "direct object" es la entidad beneficiaria o afectada de la acción.',
            'Ambos responden a la pregunta "¿Qué?" después del verbo.'
        ],
        correctAnswer: '"Direct object" responde a "¿Qué?" o "¿A quién?" después del verbo, mientras que "indirect object" responde a "¿A quién?" o "¿Para quién?" o "¿A qué?" después del verbo.',
        feedback: '¡Correcto! El objeto directo responde a la pregunta "¿Qué?" o "¿A quién?" después del verbo, mientras que el objeto indirecto responde a "¿A quién?" o "¿Para quién?" o "¿A qué?" después del verbo.'
    },
    {
        question: '¿Qué describe el objeto directo en una oración?',
        options: [
            'La entidad beneficiaria o afectada de la acción del verbo.',
            'La acción realizada por el sujeto.',
            'La acción del verbo en sí misma.'
        ],
        correctAnswer: 'La acción del verbo en sí misma.',
        feedback: '¡Correcto! El objeto directo es el sustantivo o pronombre que recibe directamente la acción del verbo y responde a la pregunta "¿Qué?" después del verbo, describiendo la acción en sí misma, como en "He bought a book.".'
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