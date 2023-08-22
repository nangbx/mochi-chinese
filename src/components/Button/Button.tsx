import React from "react";
export enum ButtonStatus {
  NORMAL,
  LOCK,
}
interface ButtonProp {
  status: ButtonStatus;
  content: string;
  onClick: React.MouseEventHandler;
}
export default function Button({ status, content, onClick }: ButtonProp) {
  return (
    <div
      className="w-72 h-[90px] bg-[#FFF8F3] rounded-[30px] flex justify-center items-center relative"
      style={{ boxShadow: "3px 5px 0px 0px rgba(0, 0, 0, 0.10)" }}
      onClick={onClick}
    >
      <div
        className={`w-[98%] h-[75px] rounded-[26px] ${
          status === ButtonStatus.NORMAL ? "bg-[#FDD868]" : "bg-[#EFEEED]"
        } pb-1`}
      >
        <div
          className="w-full h-full rounded-[26px] translate-y-1 flex justify-center items-center"
          style={
            status === ButtonStatus.NORMAL
              ? {
                  background:
                    "linear-gradient(109deg, #FEBB42 0%, #FA8C3F 96.73%)",
                  boxShadow: "-5px -5px 0px 0px #F95C08 inset",
                }
              : {
                  background:
                    "linear-gradient(109deg, #E1E1E1 0%, #CCC 96.73%)",
                  boxShadow: "-5px -5px 0px 0px #B9B9B9 inset",
                }
          }
        >
          <h4 className="text-white uppercase text-2xl">{content}</h4>
        </div>
      </div>
      <img className="absolute top-2 left-8" src="/images/dot1.svg" alt="" />
      <img className="absolute top-3 left-6" src="/images/dot2.svg" alt="" />
    </div>
  );
}
