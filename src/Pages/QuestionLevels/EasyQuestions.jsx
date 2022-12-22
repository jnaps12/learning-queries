import { QuestionGroup } from '../../components/QuestionGroup';

export function EasyQuestions() {
  const items = [
    {
      id: '1',
      name: 'select fasdf',
      icon: 'https://www.svgrepo.com/show/430020/bat.svg',
      difficulty: 'easy',
      done: '',
      questionid: '1'
    },
    {
      id: '2',
      name: 'createfadsfasdf',
      icon: 'https://www.svgrepo.com/show/430020/bat.svg',
      difficulty: 'easy',
      done: '',
      questionid: '2'
    },
    {
      id: '3',
      name: 'where',
      icon: 'https://www.svgrepo.com/show/430020/bat.svg',
      difficulty: 'easy',
      done: '',
      questionid: '3'
    }
  ]
  return (
    <>
      <h2 style={{ borderBottom: '1px solid blue' }}>Fácil</h2>
      <div className="question-groups">
        {items.map(item => <QuestionGroup
          id={item.id}
          name={item.name}
          icon={item.icon}
          difficulty={item.difficulty}
          questionid={item.questionid}
        />)}

      </div>
    </>
  );
}
