import { GetServerSidePropsContext } from 'next/types';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../screens/quiz';

interface CrowdQuizProps {
  dbExterns: {
    questions: {
      alternatives: string[];
      description: string;
      answer: number;
      image: string;
      title: string;
    };
    bg: string;
    theme: {
      colors: {
        primary: string;
        secondary: string;
        mainBg: string;
        contrastText: string;
        wrong: string;
        success: string;
      };
      borderRadius: string;
    };
  };
}

const CrowdQuiz: React.FC<CrowdQuizProps> = ({ dbExterns }) => {
  return (
    <ThemeProvider theme={dbExterns.theme}>
      <QuizScreen
        externalQuestions={dbExterns.questions}
        externalBg={dbExterns.bg}
      />
    </ThemeProvider>
  );
};

export default CrowdQuiz;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const dbExterns = await fetch(
    `https://aluraquiz-marvel.omariosouto.vercel.app/api/db`,
  )
    .then(responseServer => {
      if (responseServer.ok) {
        return responseServer.json();
      }

      throw new Error('Error response');
    })
    .then(response => response)
    .catch(err => {
      console.log(err);
    });

  return {
    props: {
      dbExterns,
    },
  };
}
