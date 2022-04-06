let pointCount = 0;
let answerCount = 0;

class Quiz{

    static Create = (quizItem) => {

        let list = document.querySelector("#flex-quiz-container");

        let newCssQuiz = document.createElement('div');
        newCssQuiz.className="quiz-container";

        let newQuizDiv = document.createElement('div');
        let title = document.createElement('h5');
        title.className = "quiz-title";
        title.innerText = quizItem.Title;

        let text = document.createElement('p');
        text.className="quiz-text";
        text.innerText = quizItem.Text;

        let button = document.createElement('button');
        button.textContent="Start Quiz";
        button.addEventListener('click', function(){ Quiz.StartQuiz(quizItem.Button) });
        button.className="quiz-button";

        newQuizDiv.appendChild(title);
        newQuizDiv.appendChild(text);
        newQuizDiv.appendChild(button);

        newCssQuiz.appendChild(newQuizDiv);


        list.appendChild(newCssQuiz);

    }

    static StartQuiz(quizNum){

        if(quizNum === 1){
            document.getElementById('flex-quiz-container').innerHTML = null;
            QuizService.LoadMathQuiz();
        }
        else if(quizNum === 2){
            document.getElementById('flex-quiz-container').innerHTML = null;
            QuizService.LoadColorQuiz()
        }
    }


    static BuildQuiz = (question) => {

        let quiz = document.querySelector("#flex-quiz-container");

        let newCssQuiz = document.createElement('div');
        newCssQuiz.className="quiz-container";

        //form
        let newQuizDiv = document.createElement('form');
        let title = document.createElement('h5');
        title.className = "quiz-title";
        title.innerText = question.Question;

        //q1
        let a1 = document.createElement('label');
        a1.textContent = question.A1;
        a1.className = "question-text";
        let r1 = document.createElement('input');
        r1.name = "radioButton";
        r1.id = "r1";
        r1.type = "radio";
        r1.className="question-radio";

        //q2
        let a2 = document.createElement('label');
        a2.textContent = question.A2;
        a2.className = "question-text";
        let r2 = document.createElement('input');
        r2.type = "radio";
        r2.name = "radioButton";
        r2.className="question-radio";

        //q3
        let a3 = document.createElement('label');
        a3.textContent = question.A3;
        a3.className = "question-text";
        let r3 = document.createElement('input');
        r3.type = "radio";
        r3.name = "radioButton";
        r3.className="question-radio";
        
        //q4
        let a4 = document.createElement('label');
        a4.textContent = question.A4;
        a4.className = "question-text";
        let r4 = document.createElement('input');
        r4.type = "radio";
        r4.name = "radioButton";
        r4.className="question-radio";

        let button2 = document.createElement('button');
        button2.textContent="Done";
        button2.className = "quiz-button";
        button2.addEventListener('click', function()
        {
            event.preventDefault();

            if(r1.checked){
                if(a1.textContent === question.Correct){
                    pointCount++;
                    answerCount++;
                    console.log(answerCount);
                    button2.hidden = true;
                }
                else{
                    answerCount++;
                    console.log(answerCount);
                    button2.hidden = true;
                }
            }
            else if(r2.checked){
                if(a2.textContent === question.Correct){
                    pointCount++;
                    answerCount++;
                    console.log(answerCount);
                    button2.hidden = true;
                }
                else{
                    answerCount++;
                    console.log(answerCount);
                    button2.hidden = true;
                }
            }
            else if(r3.checked){
                if(a3.textContent === question.Correct){
                    pointCount++;
                    answerCount++;
                    console.log(answerCount);
                    button2.hidden = true;
                }
                else{
                    answerCount++;
                    console.log(answerCount);
                    button2.hidden = true;
                }
            }
            else if(r4.checked){
                if(a4.textContent === question.Correct){
                    pointCount++;
                    answerCount++;
                    console.log(answerCount);
                    button2.hidden = true;
                }
                else{
                    answerCount++;
                    console.log(answerCount);
                    button2.hidden = true;
                }
            }

            if(answerCount >= 4){

                document.getElementById('flex-quiz-container').innerHTML = null;

                let list = document.querySelector("#flex-quiz-container");

                let newCssQuiz = document.createElement('div');
                newCssQuiz.className="quiz-container";

                let newQuizDiv = document.createElement('div');
                let title = document.createElement('h5');
                title.className = "quiz-title";
                title.innerText = "Your Score: " + pointCount + "/4";

                let button = document.createElement('button');
                button.textContent="Go Back";
                button.addEventListener('click', function(){ 

                    document.getElementById('flex-quiz-container').innerHTML = null;
                    pointCount = 0;
                    answerCount = 0;
                    QuizService.LoadQuizItems();

                });
                button.className="quiz-button";

                newQuizDiv.appendChild(title);
                newQuizDiv.appendChild(button);

                newCssQuiz.appendChild(newQuizDiv);
                list.appendChild(newCssQuiz);


            }
            
            
        });
        
        newQuizDiv.appendChild(title);
        
        newQuizDiv.appendChild(a1);
        a1.appendChild(r1)
        newQuizDiv.appendChild(a2);
        a2.appendChild(r2)
        newQuizDiv.appendChild(a3);
        a3.appendChild(r3)
        newQuizDiv.appendChild(a4);
        a4.appendChild(r4)

        newQuizDiv.appendChild(button2)
        
        newCssQuiz.appendChild(newQuizDiv);

        quiz.appendChild(newCssQuiz);

    }

    


    



}