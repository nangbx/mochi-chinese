import LessonItem, { LessonStatus } from "./LessonItem";

function LessonList() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className="w-[50%] h-14 bg-[#FDE3C5] rounded-2xl mt-9 relative"
        style={{ boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="w-[85%] bg-[#FB993B] h-full rounded-[15px] text-center absolute z-10 left-[50%] -top-2 -translate-x-[50%] flex justify-center items-center">
          <h1 className="text-white"> LEARN 100 BASIC WORDS</h1>
        </div>
        <div className="w-[80%] bg-white absolute left-[50%] top-2 -translate-x-[50%] h-full"></div>
      </div>
      <div className="pt-11 grid grid-cols-2 gap-20">
        <LessonItem
          status={LessonStatus.DONE}
          title="Lesson 01"
          content="Introducing yourself"
        />
        <LessonItem
          status={LessonStatus.NORMAL}
          title="Lesson 02"
          content="At a restaurant"
        />
        <LessonItem
          status={LessonStatus.NORMAL}
          title="Lesson 03"
          content="Family 1"
        />
        <LessonItem
          status={LessonStatus.LOCK}
          title="Lesson 04"
          content="Family 2"
        />
        <LessonItem
          status={LessonStatus.LOCK}
          title="Lesson 05"
          content="Time"
        />
      </div>
    </div>
  );
}
export default LessonList;
