import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import { Widget, WidgetContent, WidgetHeader } from '../Widget';

interface ResultWidgetProps {
  results: boolean[];
}

const ResultWidget: React.FC<ResultWidgetProps> = ({ results }) => {
  const result = results.filter(res => res).length;
  const router = useRouter();

  return (
    <Widget>
      <WidgetHeader>Tela de Resultado</WidgetHeader>
      <WidgetContent>
        <h3>
          {result > 0
            ? `Parabéns ${router.query.name}`
            : `Que pena ${router.query.name}`}
        </h3>
        <p>
          {result > 0
            ? `Você acertou ${result} perguntas`
            : 'Você não acertou nenhuma pergunda estude mais, e volte!'}
        </p>
        <ul>
          {results.map((res, index) => (
            <li key={index}>
              {`#0${index + 1} Resultados:`}
              {res === true ? ' Acertou' : ' Errou'}
            </li>
          ))}
        </ul>
      </WidgetContent>
    </Widget>
  );
};

export default ResultWidget;
