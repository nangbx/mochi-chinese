import { useState } from "react";
export default function FlashCard() {
  const [isFront, setIsFront] = useState(false);
  const toggleCard = () => {
    setIsFront(!isFront);
  };
  return (
    <div
      className="card w-[400px] h-[570px] bg-white rounded-[16px] cursor-pointer relative"
      onClick={toggleCard}
      style={isFront ? { transform: "rotateY(180deg)" } : {}}
    >
      <div
        className="w-full h-full card-font flex flex-col justify-center items-center"
        style={{ boxShadow: "10px 10px 4px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <p className="text-[#28AF33] font-quicksand text-xl font-medium mb-5">
          Jiào
        </p>
        <p className="text-black font-quicksand text-6xl font-medium mb-6">
          叫
        </p>
        <p className="font-quicksand text-xl mb-20">Verb</p>
        <p className="text-[#FF9600] text-2xl">to be called</p>
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
          Wǒ jiào Dàwèi
        </p>
        <p className="text-black font-quicksand text-xl font-semibold mb-4">
          你喜不喜欢喝咖啡？
        </p>
        <p className="font-quicksand text-xl mb-20">My name is David.</p>
        <img
          className="absolute -bottom-6 right-0"
          src="/images/flash_card_click.png"
          alt=""
        />
      </div>
    </div>
  );
}
