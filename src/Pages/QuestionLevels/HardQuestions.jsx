import { QuestionGroup } from "../../components/QuestionGroup";

export function HardQuestions() {
  return (
    <>
      <h2
        style={{
          borderBottom: '1px solid red',
        }}
      >
        Difícil
      </h2>
      <div className="question-groups">
        <QuestionGroup
          id="3"
          name=".."
          icon="https://www.svgrepo.com/show/430020/bat.svg"
          difficulty="hard"
        />
      </div>
    </>
  ); 
  
}
