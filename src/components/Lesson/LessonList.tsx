import { ICourse } from "../../types/course.type";
import { ILesson } from "../../types/lesson.type";
import LessonItem, { LessonStatus } from "./LessonItem";

interface LessonListProps {
  course: ICourse | null;
}
function LessonList({ course }: LessonListProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className="w-[50%] h-14 bg-[#FDE3C5] rounded-2xl mt-9 relative"
        style={{ boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="w-[85%] bg-[#FB993B] h-full rounded-[15px] text-center absolute z-10 left-[50%] -top-2 -translate-x-[50%] flex justify-center items-center">
          <h1 className="text-white">
            {" "}
            {course ? course.title : "LEARN 100 BASIC WORDS"}
          </h1>
        </div>
        <div className="w-[80%] bg-white absolute left-[50%] top-2 -translate-x-[50%] h-full"></div>
      </div>
      <div className="pt-11 grid grid-cols-2 gap-20">
        {course?.lessons.map((lesson: ILesson) => (
          <LessonItem
            lesson={lesson}
            status={
              lesson.lesson_status === "orange"
                ? LessonStatus.NORMAL
                : lesson.lesson_status === "gray"
                ? LessonStatus.LOCK
                : LessonStatus.LOCK
            }
            title={lesson.title}
            content={lesson.description}
          />
        ))}
      </div>
    </div>
  );
}
export default LessonList;
