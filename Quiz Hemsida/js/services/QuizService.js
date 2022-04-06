class QuizService{

    //gör om till localstorage.
    

    static LoadQuizItems(){
        
        let quizList = [
            new QuizItem("Math Quiz","Simple math quiz.",1),
            new QuizItem("Color Quiz","Simple color quiz.",2),
        ];

        localStorage.setItem(("QuizCardList"), JSON.stringify(quizList));
        let GetQuizCardList = JSON.parse(localStorage.getItem("QuizCardList"));

        GetQuizCardList.forEach(quizItem => {
            Quiz.Create(quizItem);
        });

    }

    static LoadMathQuiz(){
        let mathQuestionList = [
            new QuizzQuestions("What is 3 + 2?",
                                "5","4","3","6","5"),
            new QuizzQuestions("What is 4 - 2?",
                                "2","3","2","1","7"),
            new QuizzQuestions("What is 9 + 10?",
                                "19","21","20","19","90"),
            new QuizzQuestions("What's 10 + 10?",
                                "20", "0", "20", "9", "11"),
        ]

        localStorage.setItem(("MathQuestionList"), JSON.stringify(mathQuestionList));
        let getMathQuestionList = JSON.parse(localStorage.getItem("MathQuestionList"));

        Quiz.BuildQuiz(getMathQuestionList[0]);
        Quiz.BuildQuiz(getMathQuestionList[1]);
        Quiz.BuildQuiz(getMathQuestionList[2]);
        Quiz.BuildQuiz(getMathQuestionList[3]);

    }

    static LoadColorQuiz(){
        let colorQuestionList = [
            new QuizzQuestions("Red + Blue =",
                                "Purple","Pink","Purple","Orange","Green"),
            new QuizzQuestions("Yellow + Blue =",
                                "Green","Green","Orange","Pink","Cyan"),
            new QuizzQuestions("Red + Yellow =",
                                "Orange","Green","Cyan","Orange","Brown"),
            new QuizzQuestions("Red + White =",
                                "Pink", "Cyan", "Orange", "Pink", "Green"),
        ]

        localStorage.setItem(("ColorQuestionList"), JSON.stringify(colorQuestionList));
        let getColorQuestionList = JSON.parse(localStorage.getItem("ColorQuestionList"));

        Quiz.BuildQuiz(getColorQuestionList[0]);
        Quiz.BuildQuiz(getColorQuestionList[1]);
        Quiz.BuildQuiz(getColorQuestionList[2]);
        Quiz.BuildQuiz(getColorQuestionList[3]);
        
    }

}