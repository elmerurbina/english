const questionsContainer = document.getElementById('questions-container');

const questions = [
    {
        question: 'She, He, It, pertenecen a: ',
        options: ['First person', 'Third person',  'Second person'],
        correctAnswer: 'Third person',
        feedback: 'Correct! The correct answer is: Third person.'
    },

   { question: 'Cual de los siguientes enunciados es el correcto? ',
        options: ['It is colorful', 'He write', 'She studies'],
        correctAnswer: 'She studies',
        feedback: 'Correct! The answers is: She studies'
   },

   {
    question: 'I, She, You, He, son pronombres de tipo:  ',
    options: ['Subject pronouns', 'Third person', 'Object pronouns'],
    correctAnswer: 'Subject pronouns',
    feedback: 'Correct! Those pronouns are: Subject pronouns.'
},

{
    question: 'La primera persona del plural es?',
    options: ['I', 'Them', 'We'],
    correctAnswer: 'We',
    feedback: 'Correct! The correct answer is: We'
},

{
    question: 'La tercera persona del singular es: ',
    options: ['a. He-She-It', 'b. I-You', 'c. They'],
    correctAnswer: 'a. He-She-It',
    feedback: 'Correct! The correct answer is: a'
},


{
    question: 'Selecciona la opcion que corresponda al Oubject Pronoun de la tercera persona del singular: ',
    options: ['him-her-it', 'them', 'me'],
    correctAnswer: 'him-her-it',
    feedback: 'Correct! The correct answer is: him-her-it'
},


{
    question: 'En las siguientes opciones selecciona la opcion que correspondea al Possesive Pronoun del pronombre El: ',
    options: ['He', 'His', 'Her'],
    correctAnswer: 'His',
    feedback: 'Correct! The correct answer is: His'
},


{
    question: 'Para que se utilizan los pronombres personales: ',
    options: ['a. Para referirse a alguien o algo', 'b. Describen animales personas o cosas', 'Son terminos especiales'],
    correctAnswer: 'a. Para referirse a alguien o algo',
    feedback: 'Correct! The correct answer is: a'
},
    // Add more questions as needed
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
