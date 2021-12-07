function Question(text,choices,answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Question ProtoType
Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;    
}

//Quiz Constructor
function Quiz(questions) {
    this.questions  = questions;
    this.score = 0;
    this.questionIndex = 0;
}
//Quiz ProtoType;
Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];    
}
// Quiz is Finished
Quiz.prototype.isFinish = function(){
    return this.questions.lenght === this.questionIndex;
}
// Quiz guess
Quiz.prototype.quess = function(answer){
    let question = this.getQuestion();
    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}
//Start Quiz
let quiz = new Quiz(questions);
console.log(quiz.isFinish());

console.log(quiz.getQuestion());
quiz.quess('JavaScript');

console.log(quiz.getQuestion());
quiz.quess('JavaScript');

console.log(quiz.getQuestion());
quiz.quess('JavaScript');

console.log(quiz.isFinish());




let q1 = new Question("What is the best programming ",["C#","JavaScript","pyhton","asp.net"],"JavaScript");
let q2 = new Question("What is the most popular language",["C#","Visual Basic","node.js","JavaScript"],"JavaScript");
let q3 = new Question("What is best modern programming",["C#","Visual Basic","node.js","JavaScript"],"JavaScript");
 
let questions = [q1,q2,q3]
console.log(q1.checkAnswer('c#'))
console.log(q2.checkAnswer('JavaScript'))
console.log(q3.checkAnswer('c#'))