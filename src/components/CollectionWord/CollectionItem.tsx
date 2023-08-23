export default function CollectionItem() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-7 items-center">
        <img
          src="https://chinese.mochidemy.com/_next/static/media/ic_correct_status.8094be00.svg"
          alt=""
        />
        <div>
          <span className="text-xl font-bold">叫</span>
          <span className="text-lg text-[#28AF33]">/jiào </span>
        </div>
      </div>
      <div className="flex gap-6">
        <span className="font-quicksand text-lg font-bold">(v)</span>
        <span className="font-quicksand text-[#333] text-lg  font-medium">
          To be called
        </span>
      </div>
    </div>
  );
}
