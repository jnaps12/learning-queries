import { QuestionGroup } from '../../components/QuestionGroup';

export function EasyQuestions() {
  return (
    <>
      <h2
        style={{
          borderBottom: '1px solid blue',
        }}
      >
        Fácil
      </h2>
      <div className="question-groups">
        <QuestionGroup id='1' name='Select' icon='https://www.svgrepo.com/show/430020/bat.svg' difficulty='easy'/>
      </div>
    </>
  );
}
