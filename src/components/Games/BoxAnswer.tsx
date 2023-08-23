import { useState } from "react";
import Draggable from "react-draggable";
import { IWord } from "../../types/word.type";

export enum AnswerType {
  TRUE,
  FALSE,
}
interface BoxAnswerProps {
  type: AnswerType;
  word: IWord;
}
export default function BoxAnswer({ type, word }: BoxAnswerProps) {
  return (
    <Draggable axis="y">
      <div
        className={`w-full h-[330px] py-5 px-12 rounded-[20px] ${
          type === AnswerType.TRUE ? "bg-[#23AC38]" : "bg-[#FF6161]"
        } absolute`}
      >
        <p className="font-quicksand font-semibold text-[#FFE595] text-xl">
          {word.pinyin}
        </p>
        <p className="text-[32px] font-bold text-white">{word.content}</p>
        <div className="text-white mb-12">
          <span className="font-quicksand text-xl font-semibold mr-4">
            ({word.position})
          </span>
          <span>{word.trans}</span>
        </div>
        <p className="font-quicksand text-white text-xl font-semibold mb-3">
          {word.pinyin_sentence}
        </p>
        <p className="text-white text-lg font-bold mb-3">{word.sentence}</p>
        <p className="font-quicksand text-white text-xl font-semibold">
          {word.en_sentence}
        </p>
      </div>
    </Draggable>
  );
}
