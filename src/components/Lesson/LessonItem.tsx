export enum LessonStatus {
  NORMAL,
  LOCK,
  DONE,
}
interface LessonItemProp {
  status: LessonStatus;
  content: string;
  title: string;
}
function LessonItem({ status, content, title }: LessonItemProp) {
  return (
    <div>
      <div
        className={`relative ${
          status === LessonStatus.NORMAL
            ? "bg-lesson-background-normal"
            : status == LessonStatus.LOCK
            ? "bg-lesson-background-lock"
            : "bg-lesson-background-done"
        } bg-cover w-[360px] h-[150px] border-2 ${
          status === LessonStatus.NORMAL
            ? "border-[#FFCB08]"
            : status === LessonStatus.LOCK
            ? "border-[#BDBDBD]"
            : "border-[#79CB85]"
        } rounded-[35px] flex justify-center items-center`}
        style={{
          boxShadow:
            status === LessonStatus.NORMAL
              ? "rgba(251, 151, 59, 0.25) 4px 6px 0px"
              : status === LessonStatus.LOCK
              ? "4px 6px 0px 0px rgba(189, 189, 189, 0.25)"
              : "4px 6px 0px 0px rgba(35, 172, 56, 0.25)",
        }}
      >
        <div className="w-[calc(30%)] absolute top-0 -translate-y-[50%] border-white rounded-[35px] border-2 ">
          <div
            className={`${
              status === LessonStatus.NORMAL
                ? "bg-[#FDD868]"
                : status === LessonStatus.LOCK
                ? "bg-[#EBEBEB]"
                : "bg-[#9BF2AA]"
            } rounded-3xl`}
          >
            <div
              className={`lesson-title  ${
                status === LessonStatus.NORMAL
                  ? "lesson-title-normal"
                  : status === LessonStatus.LOCK
                  ? "lesson-title-lock"
                  : "lesson-title-done"
              } translate-y-[3px] rounded-3xl p-1`}
            >
              {title}
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 -translate-x-10 -translate-y-3 w-4 h-2"
          src="https://chinese.mochidemy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard_lesson_white_shadow.72f5461b.png&w=32&q=75"
          alt=""
        />
        <h2
          className={`${
            status === LessonStatus.NORMAL
              ? "text-[#D46C03]"
              : status === LessonStatus.LOCK
              ? "text-[#C5C5C5]"
              : "text-[#04981B]"
          } font-riffic`}
        >
          {content}
        </h2>
      </div>
    </div>
  );
}

export default LessonItem;
