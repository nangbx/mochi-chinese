import { useState } from "react";
import Audio, { AudioType } from "../Audio/Audio";
import BoxAnswer from "./BoxAnswer";

export enum PracticeType {
  MEANS,
  WORD,
}
interface PracticeProps {
  type: PracticeType;
}
export default function Practice({ type }: PracticeProps) {
  const [active, setActive] = useState(true);
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="font-quicksand text-[#828282] text-3xl mb-9">
        {type === PracticeType.MEANS
          ? "Choose a word that means"
          : "Choose Pinyin of the word"}
      </h3>
      <p className="text-[#FF9600] text-[32px] font-bold">to be called</p>
      <div className="w-[500px] p-5">
        <div
          className={`practice-ans w-full h-[70px] flex justify-center items-center bg-white rounded-[16px] cursor-pointer mb-5`}
          style={{
            boxShadow: active
              ? "0 4px 0 0 rgba(0,0,0,.102)"
              : "0 4px 0 0 rgba(254,180,49,.149)",
            border: active ? "2px solid #fff" : "2px solid #fdb033",
            transition: "box-shadow,translateY,border-color,.3s",
          }}
        >
          叫
        </div>
        <div
          className={`practice-ans w-full h-[70px] flex justify-center items-center bg-white rounded-[16px] cursor-pointer mb-5`}
          style={{
            boxShadow: active
              ? "0 4px 0 0 rgba(0,0,0,.102)"
              : "0 4px 0 0 rgba(254,180,49,.149)",
            border: active ? "2px solid #fff" : "2px solid #fdb033",
            transition: "box-shadow,translateY,border-color,.3s",
          }}
        >
          叫
        </div>
        <div
          className={`practice-ans w-full h-[70px] flex justify-center items-center bg-white rounded-[16px] cursor-pointer`}
          style={{
            boxShadow: active
              ? "0 4px 0 0 rgba(0,0,0,.102)"
              : "0 4px 0 0 rgba(254,180,49,.149)",
            border: active ? "2px solid #fff" : "2px solid #fdb033",
            transition: "box-shadow,translateY,border-color,.3s",
          }}
        >
          叫
        </div>
      </div>
    </div>
  );
}
