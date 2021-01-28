import { useCallback, useEffect, useState } from 'react';
import db from '../../db.json';

import { QuizContainer } from '../components/styles/page/home';
import QuizBackground from '../components/QuizBackground';
import QuizLogo from '../components/QuizLogo';
import QuestionWidget from '../components/QuestionWidget';
import LoadingWidget from '../components/LoadingWidget';
import ResultWidget from '../components/ResultWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleResult = useCallback(
    result => {
      setResults([...results, result]);
    },
    [results],
  );

  const handleSubmitQuiz = useCallback(() => {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }, [questionIndex, totalQuestions]);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={handleResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
      </QuizContainer>
    </QuizBackground>
  );
}
