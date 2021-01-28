import { Widget, WidgetContent, WidgetHeader } from '../Widget';

const LoadingWidget: React.FC = () => {
  return (
    <Widget>
      <WidgetHeader>Carregando...</WidgetHeader>
      <WidgetContent>[Desafio do Loading]</WidgetContent>
    </Widget>
  );
};

export default LoadingWidget;
