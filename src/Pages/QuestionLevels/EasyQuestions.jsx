import { QuestionGroup } from '../../components/QuestionGroup';
import SpinnerComponent from '../../components/SpinnerComponent';
import useAxios from 'axios-hooks';

export function EasyQuestions() {
  const [{ data, loading, error }, refetch] = useAxios(
    'http://127.0.0.1:3000/question-group/difficulty/easy'
  );
  
  // console.log(data[0]);
  

  loading
    ? console.log('wait')
    : data.map((item) => {
        console.log(item);
      });
  // const items = [
  //   {
  //     id: '1',
  //     name: 'select fasdf',
  //     icon: 'https://www.svgrepo.com/show/176692/owl-animals.svg',
  //     difficulty: 'easy',
  //     done: true,
  //     questionid: '1',
  //   },
  //   {
  //     id: '2',
  //     name: 'createfadsfasdf',
  //     icon: 'https://www.svgrepo.com/show/176692/owl-animals.svg',
  //     difficulty: 'easy',
  //     done: false,
  //     questionid: '2',
  //   },
  //   {
  //     id: '3',
  //     name: 'where',
  //     icon: 'https://www.svgrepo.com/show/176712/lion-animals.svg',
  //     difficulty: 'easy',
  //     done: false,
  //     questionid: '3',
  //   },
  // ];
  return (
    <>
      <h2 style={{ borderBottom: '1px solid blue' }}>Fácil</h2>
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
