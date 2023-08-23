import { useState, useEffect } from "react";
import Audio, { AudioType } from "../Audio/Audio";
import { IWord } from "../../types/word.type";

interface ReviewProps {
  word: IWord;
  onclick: Function;
  selected: string | undefined;
}

export default function Review({ word, onclick, selected }: ReviewProps) {
  const [active, setActive] = useState<string>();
  let listAnswers = [word.content, ...word.content_random];
  useEffect(() => {
    listAnswers = [...listAnswers].sort(() => Math.random() - 0.5);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="font-quicksand text-[#828282] text-3xl mb-9">
        Listen and choose the correct answer
      </h3>
      <Audio type={AudioType.SMALL} />
      <div className="w-[500px] p-5">
        {listAnswers.map((answer) => (
          <div
            className={`practice-ans w-full h-[70px] flex justify-center items-center bg-white rounded-[16px] cursor-pointer mb-5 font-quicksand text-[24px] text-[#060606]`}
            style={{
              boxShadow:
                selected !== answer
                  ? "0 4px 0 0 rgba(0,0,0,.102)"
                  : "0 4px 0 0 rgba(254,180,49,.149)",
              border:
                selected !== answer ? "2px solid #fff" : "2px solid #fdb033",
              transition: "box-shadow,translateY,border-color,.3s",
            }}
            onClick={() => onclick(answer)}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
}
