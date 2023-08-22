import { useState } from "react";
import Draggable from "react-draggable";

export enum AnswerType {
  TRUE,
  FALSE,
}
interface BoxAnswerProps {
  type: AnswerType;
}
export default function BoxAnswer({ type }: BoxAnswerProps) {
  return (
    <Draggable axis="y">
      <div
        className={`w-full h-[330px] py-5 px-12 rounded-[20px] ${
          type === AnswerType.TRUE ? "bg-[#23AC38]" : "bg-[#FF6161]"
        } absolute`}
      >
        <p className="font-quicksand font-semibold text-[#FFE595] text-xl">
          Jiào
        </p>
        <p className="text-[32px] font-bold text-white">叫</p>
        <div className="text-white mb-12">
          <span className="font-quicksand text-xl font-semibold mr-4">(V)</span>
          <span>to be called</span>
        </div>
        <p className="font-quicksand text-white text-xl font-semibold mb-3">
          Wǒ jiào Dàwèi
        </p>
        <p className="text-white text-lg font-bold mb-3">你喜不喜欢喝咖啡？</p>
        <p className="font-quicksand text-white text-xl font-semibold">
          My name is David.
        </p>
      </div>
    </Draggable>
  );
}
