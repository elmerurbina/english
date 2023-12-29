const questionsContainer = document.getElementById('questions-container');

const preguntas = [
    {
        pregunta: '¿Cuándo deben usarse los pronombres de sujeto en una oración?',
        opciones: ['Al principio de la oración', 'Después de un verbo o preposición', 'Al final de la oración'],
        respuestaCorrecta: 'Al principio de la oración',
        retroalimentacion: '¡Correcto! La respuesta correcta es: Al principio de la oración.'
    },

    { 
        pregunta: 'Selecciona la oración correcta que utiliza un pronombre de objeto:',
        opciones: ['You are learning English.', 'Send us an email.', 'I studies'],
        respuestaCorrecta: 'Send us an email.',
        retroalimentacion: '¡Correcto! La respuesta es: Send us an email.'
    },

    {
        pregunta: 'Explica la diferencia entre los pronombres posesivos y los determinantes posesivos.',
        opciones: ['Los posesivos modifican el sustantivo, mientras que los determinantes no.', 'Ambos expresan posesión pero en diferentes contextos.', 'Los determinantes se usan al final de una oración.'],
        respuestaCorrecta: 'Ambos expresan posesión pero en diferentes contextos.',
        retroalimentacion: '¡Correcto! Los pronombres posesivos expresan posesión sin modificar el sustantivo, mientras que los determinantes se usan antes de un sustantivo para mostrar a quién pertenece algo.'
    },

    {
        pregunta: '¿Cuál es la función de los pronombres demostrativos?',
        opciones: ['Expresar posesión o pertenencia.', 'Señalar objetos o personas en el espacio o en el tiempo.', 'Modificar un verbo.'],
        respuestaCorrecta: 'Señalar objetos o personas en el espacio o en el tiempo.',
        retroalimentacion: '¡Correcto! Los pronombres demostrativos se utilizan para señalar objetos o personas en el espacio o en el tiempo.'
    },

    {
        pregunta: '¿En qué contexto se utilizan los pronombres reflexivos?',
        opciones: ['Cuando el sujeto y el objeto de la acción son diferentes.', 'Cuando el sujeto y el objeto de la acción son la misma persona.', 'Solo al final de una oración.'],
        respuestaCorrecta: 'Cuando el sujeto y el objeto de la acción son la misma persona.',
        retroalimentacion: '¡Correcto! Los pronombres reflexivos se utilizan cuando el sujeto y el objeto de la acción son la misma persona.'
    },

    {
        pregunta: 'Explica el uso de "who", "whom" y "whose" en oraciones.',
        opciones: ['"Who" se utiliza para referirse a la persona mencionada, "whom" en contextos formales y "whose" como posesivo.', '"Who" se utiliza solo al final de una oración, "whom" para referirse a una persona previamente mencionada y "whose" para objetos.', '"Who", "whom" y "whose" significan lo mismo y son intercambiables.'],
        respuestaCorrecta: '"Who" se utiliza para referirse a la persona mencionada, "whom" en contextos formales y "whose" como posesivo.',
        retroalimentacion: '¡Correcto! "Who", "whom" y "whose" tienen funciones específicas: "who" para la persona mencionada, "whom" en contextos formales y "whose" como posesivo.'
    },

    {
        pregunta: '¿Qué función cumplen los pronombres interrogativos?',
        opciones: ['Se utilizan para expresar posesión o pertenencia.', 'Sirven para unir dos oraciones relacionadas.', 'Se utilizan para formular preguntas.'],
        respuestaCorrecta: 'Se utilizan para formular preguntas.',
        retroalimentacion: '¡Correcto! Los pronombres interrogativos se utilizan para formular preguntas.'
    },

    {
        pregunta: 'Explica el uso de los pronombres indefinidos.',
        opciones: ['Se refieren a una persona, lugar o cosa de manera específica.', 'Tienen reglas de uso estrictas y no pueden intercambiarse.', 'Se refieren a una persona, lugar o cosa de manera no específica.'],
        respuestaCorrecta: 'Se refieren a una persona, lugar o cosa de manera no específica.',
        retroalimentacion: '¡Correcto! Los pronombres indefinidos se utilizan para referirse a una persona, lugar o cosa de manera no específica.'
    },

    {
        pregunta: 'Explica la diferencia entre "either" y "neither".',
        opciones: ['"Either" se utiliza cuando hay más de dos opciones, mientras que "neither" se usa para dos opciones.', '"Either" y "neither" son sinónimos y pueden intercambiarse en cualquier contexto.', '"Either" se utiliza para ambas opciones y "neither" para ninguna de las opciones.'],
        respuestaCorrecta: '"Either" se utiliza cuando hay más de dos opciones, mientras que "neither" se usa para dos opciones.',
        retroalimentacion: '¡Correcto! "Either" se utiliza cuando hay más de dos opciones, mientras que "neither" se usa para referirse a dos opciones.'
    },
    // Agrega más preguntas según sea necesario
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
            isCorrect: selectedOption && selectedOption.value === q.correctAnswer
        });
    });
    displayResults(userAnswers);
}

function displayResults(userAnswers) {
    questionsContainer.innerHTML = '';
    userAnswers.forEach((ua, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        if (ua.isCorrect) {
            questionDiv.classList.add('correct');
            questionDiv.innerHTML = `<p>${index + 1}. ${ua.question}</p><p>Your Answer: ${ua.answer}</p><p>${questions[index].feedback}</p>`;
        } else {
            questionDiv.classList.add('incorrect');
            questionDiv.innerHTML = `<p>${index + 1}. ${ua.question}</p><p>Your Answer: ${ua.answer}</p><p>Incorrect. The correct answer is: ${questions[index].correctAnswer}</p>`;
        }
        questionsContainer.appendChild(questionDiv);
    });
}

generateQuestions();
