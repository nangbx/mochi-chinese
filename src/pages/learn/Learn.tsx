import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import Progress from "../../components/Progress/Progress";
import Lottie from "lottie-react";
import mochiAnimation from "../../assets/mochiontheway_v02.json";
import Games from "../../components/Games/Games";
import Popup from "../../components/Popup/Popup";

const reg = new RegExp("^[0-9]+$");

export default function Learn() {
  const [animation, setAnimation] = useState(true);
  const [open, setOpen] = useState(false);
  const animationDone = () => {
    setAnimation(!animation);
  };
  const { currentWords } = useAppSelector((state) => state.courses);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenPopup = () => {
    setOpen(true);
  };
  return (
    <>
      <Progress onclick={handleOpenPopup} />

      {animation ? (
        <Lottie
          animationData={mochiAnimation}
          loop={false}
          onComplete={animationDone}
        />
      ) : (
        <Games words={currentWords} />
      )}
      {open && <Popup onClose={handleClose} />}
    </>
  );
}
