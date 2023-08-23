import { useEffect } from "react";
import LessonList from "../../components/Lesson/LessonList";
import Nav from "../../components/Nav/Nav";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchCourses } from "../../app/reducers/courses/actionCreators";

function Home() {
  const dispatch = useAppDispatch();
  const { courseData } = useAppSelector((state) => state.courses);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
  return (
    <div>
      <Nav />
      <div className="bg-[#FBE9A3] w-full h-full flex justify-center">
        <div className="w-[70%] bg-white">
          <LessonList course={courseData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
