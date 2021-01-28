import { ChangeEvent, useCallback, useState } from 'react';
import Button from '../Button';
import { Widget, WidgetContent, WidgetHeader, WidgetTopic } from '../Widget';

interface QuestionWidgetProps {
  question: {
    alternatives: string[];
    description: string;
    answer: number;
    image: string;
    title: string;
  };
  questionIndex: number;
  totalQuestions: number;
  onSubmit(): void;
  addResult(isCorrect: boolean): void;
}

const QuestionWidget: React.FC<QuestionWidgetProps> = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState<number>();
  const [isQuestionSubmit, setIsQuestionSubmit] = useState(false);

  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;

  const handleChangeAlternative = useCallback((alternativeIndex: number) => {
    setSelectedAlternative(alternativeIndex);
  }, []);

  const handleSubmit = useCallback(
    (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsQuestionSubmit(true);

      setTimeout(() => {
        onSubmit();
        addResult(isCorrect);
        setIsQuestionSubmit(false);
        setSelectedAlternative(undefined);
      }, 1000);
    },
    [onSubmit, addResult, isCorrect],
  );

  return (
    <Widget>
      <WidgetHeader>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </WidgetHeader>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <WidgetContent>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form onSubmit={handleSubmit}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <WidgetTopic
                key={alternativeId}
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => handleChangeAlternative(alternativeIndex)}
                />
                {alternative}
              </WidgetTopic>
            );
          })}

          <Button type="submit" disabled={selectedAlternative === undefined}>
            Confirmar
          </Button>

          <p>{isQuestionSubmit && isCorrect && 'Você acertou!'}</p>
          <p>{isQuestionSubmit && !isCorrect && 'Você errou!'}</p>
        </form>
      </WidgetContent>
    </Widget>
  );
};

export default QuestionWidget;
