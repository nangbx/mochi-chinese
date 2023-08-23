import React from "react";

interface ProgressProps {
  onclick: React.MouseEventHandler;
}

export default function Progress({ onclick }: ProgressProps) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] py-5 px-9 flex items-center gap-8 ">
        <div className="cursor-pointer" onClick={onclick}>
          <img src="/images/close_icon.svg" alt="" />
        </div>
        <div className="bg-[#E0E0E0] h-[34px] rounded-[100px] flex-grow relative">
          <div
            className="w-[2%] h-[34px] rounded-[100px]"
            style={{
              background: "linear-gradient(54deg, #FFCB08 0%, #FF9600 100%)",
            }}
          ></div>
          <img
            className="absolute w-[73px] h-[64px] -top-5 -left-6"
            src="/images/progress_icon.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
