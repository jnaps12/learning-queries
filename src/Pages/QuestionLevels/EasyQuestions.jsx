import { QuestionGroup } from "../../components/QuestionGroup";

export function EasyQuestions() {
  return (
    <div>
      <h2 style={
        {
          borderBottom: '1px solid blue'
        }
      }>Fácil</h2>
      <div>
        <QuestionGroup />
      </div>
    </div>
  );
}
