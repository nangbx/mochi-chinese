import Button, { ButtonStatus } from "../../components/Button/Button";
import FlashCard from "../../components/Games/FlashCard";
import Practice, { PracticeType } from "../../components/Games/Practice";
import Progress from "../../components/Progress/Progress";
import BoxAnswer, { AnswerType } from "../../components/Games/BoxAnswer";

export default function Learn() {
  return (
    <div className="w-full h-screen bg-learn-background flex justify-center items-center">
      <div
        className="w-[50%] h-full bg-[#FFFDF5] flex flex-col justify-between items-center pb-10 relative"
        style={{ boxShadow: "0px 5px 20px 0px rgba(254, 180, 49, 0.15)" }}
      >
        <Progress />
        <Practice type={PracticeType.MEANS} />
        <Button
          content="Continue"
          status={ButtonStatus.LOCK}
          onClick={() => {}}
        />
        <BoxAnswer type={AnswerType.FALSE} />
      </div>
    </div>
  );
}
