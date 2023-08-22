export enum AudioType {
  SMALL,
  NORMAL,
}
interface AudioProps {
  type: AudioType;
}
export default function Audio({ type }: AudioProps) {
  return (
    <div
      className={`${
        type === AudioType.NORMAL ? "w-[100px] h-[100px]" : "w-[60px] h-[60px]"
      } speakerButton rounded-full cursor-pointer mb-2`}
    >
      {type === AudioType.SMALL ? (
        <div className="w-full h-full bg-audio-background bg-cover flex justify-center items-center rounded-full">
          <img
            className="w-[28px] h-[20px]"
            src="https://chinese.mochidemy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheesy.b735c789.png&w=48&q=75"
            alt=""
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
