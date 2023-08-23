import React, { useState, useEffect } from "react";
import { IWord } from "../../types/word.type";
interface FlashCardProps {
  word: IWord;
  onclick: React.MouseEventHandler;
}
export default function FlashCard({ word, onclick }: FlashCardProps) {
  const [isFront, setIsFront] = useState(false);
  const toggleCard = () => {
    setIsFront(!isFront);
  };
  useEffect(() => {
    setIsFront(false);
  }, [word]);
  return (
    <div
      className="card w-[400px] h-[570px] bg-white rounded-[16px] cursor-pointer relative"
      onClick={toggleCard}
      style={isFront ? { transform: "rotateY(180deg)" } : {}}
    >
      <div
        className="w-full h-full card-font flex flex-col justify-center items-center"
        style={{ boxShadow: "10px 10px 4px 0px rgba(0, 0, 0, 0.05)" }}
        onClick={onclick}
      >
        <p className="text-[#28AF33] font-quicksand text-xl font-medium mb-5">
          {word.pinyin}
        </p>
        <p className="text-black font-quicksand text-6xl font-medium mb-6">
          {word.content}
        </p>
        <p className="font-quicksand text-xl mb-20">{word.position}</p>
        <p className="text-[#FF9600] text-2xl">{word.trans}</p>
        <img
          className="absolute -bottom-6 right-0"
          src="/images/flash_card_click.png"
          alt=""
        />
      </div>
      <div
        className="w-full h-full card-back flex flex-col justify-center items-center"
        style={{ boxShadow: "10px 10px 4px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <p className="text-[#28AF33] font-quicksand text-xl font-medium mb-4">
          {word.pinyin_sentence}
        </p>
        <p className="text-black font-quicksand text-xl font-semibold mb-4">
          {word.sentence}
        </p>
        <p className="font-quicksand text-xl mb-20">{word.en_sentence}</p>
        <img
          className="absolute -bottom-6 right-0"
          src="/images/flash_card_click.png"
          alt=""
        />
      </div>
    </div>
  );
}
