import LessonList from "../../components/Lesson/LessonList";
import Nav from "../../components/Nav/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <div className="bg-[#FBE9A3] w-full h-full flex justify-center">
        <div className="w-[80%] bg-white">
          <LessonList />
        </div>
      </div>
    </div>
  );
}

export default Home;
