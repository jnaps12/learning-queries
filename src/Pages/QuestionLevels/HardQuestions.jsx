import { QuestionGroup } from '../../components/QuestionGroup';
import useAxios from 'axios-hooks';
import { BASE_URL } from '../../api/axios';
import SpinnerComponent from '../../components/SpinnerComponent';

export function HardQuestions() {
  const[{ data, loading, error }] = useAxios(
    `${BASE_URL}/question-group/difficulty/hard`
  );

  if (error) return <h1>{error}</h1>;

  return (
    <>
      <h2 style={{ borderBottom: '1px solid blue' }}>Difícil</h2>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <div className="question-groups">
          {data.map((item) => (
            <QuestionGroup
              key={item.id}
              id={item.id}
              name={item.title}
              icon={item.iconUrl}
              difficulty={item.difficulty}
              done={item.done}
            />
          ))}
        </div>
      )}
    </>
  );
}
