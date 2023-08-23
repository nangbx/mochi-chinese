import React, { useState } from "react";
import Button, { ButtonStatus } from "../Button/Button";

interface PopupProps {
  onClose: React.MouseEventHandler;
}
function Popup({ onClose }: PopupProps) {
  return (
    <div className="fixed bg-black/[.5] w-full h-screen top-0 left-0 z-40 flex justify-center items-center">
      <div className="w-1/2 pt-16 pb-10 bg-white rounded-[20px] opacity-100 relative flex justify-center items-center flex-col translate-y-10">
        <div className="absolute -top-[200px] left-[50%] -translate-x-[50%]">
          <img src="/images/icon_button_1.png" alt="" />
        </div>
        <h3 className="font-quicksand text-3xl text-center mb-10 font-semibold">
          Finish your lesson, or you will loose
          <br /> all learning process
        </h3>
        <Button
          status={ButtonStatus.NORMAL}
          content="Continue"
          onClick={onClose}
        />
        <p
          className="mt-6 text-2xl font-bold underline-offset-8 underline text-[#F95C08] cursor-pointer"
          onClick={onClose}
        >
          Exit
        </p>
      </div>
    </div>
  );
}
export default Popup;
