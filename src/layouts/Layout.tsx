import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="w-full min-h-screen bg-learn-background flex justify-center items-center">
      <div
        className="w-[50%] h-screen bg-[#FFFDF5] flex flex-col justify-between items-center relative"
        style={{ boxShadow: "0px 5px 20px 0px rgba(254, 180, 49, 0.15)" }}
      >
        <Outlet />
      </div>
    </div>
  );
}
