import Button, { ButtonStatus } from "../../components/Button/Button";
import CollectionItem from "../../components/CollectionWord/CollectionItem";

export default function Ending() {
  return (
    <>
      <h3
        className="mt-24 mb-14 font-quicksand font-bold text-[28px]"
        style={{
          background: "linear-gradient(54deg, #FFCB08 0%, #FF9600 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        You've just collected X words
      </h3>
      <div className="mb-14">
        <img src="/images/ending_icon.png" alt="" />
      </div>
      <div
        className="w-[90%] max-h-80 overflow-y-scroll rounded-[20px] bg-white py-9 px-14 flex flex-col gap-8 mb-44"
        style={{ boxShadow: "10px 10px 10px 0px rgba(189, 189, 189, 0.20)" }}
      >
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
      </div>
      <Button
        content="Continue"
        status={ButtonStatus.NORMAL}
        onClick={() => {}}
      />
    </>
  );
}
