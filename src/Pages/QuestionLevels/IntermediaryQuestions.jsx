import { QuestionGroup } from '../../components/QuestionGroup';

export function IntermediaryQuestions() {
  return (
    <>
      <h2
        style={{
          borderBottom: '1px solid yellow',
        }}
      >
        Intermediário
      </h2>
      <div className="question-groups">
        <QuestionGroup
          id="4"
          name="....."
          icon="https://www.svgrepo.com/show/430020/bat.svg"
          difficulty="intermediary"
        />
      </div>
    </>
  );
}
