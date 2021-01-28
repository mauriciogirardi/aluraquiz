import { Widget, WidgetContent, WidgetHeader } from '../Widget';

interface ResultWidgetProps {
  results: boolean[];
}

const ResultWidget: React.FC<ResultWidgetProps> = ({ results }) => {
  const result = results.filter(res => res).length;

  return (
    <Widget>
      <WidgetHeader>Tela de Resultado</WidgetHeader>
      <WidgetContent>
        <p>{`Você acertou ${result} perguntas`}</p>
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
