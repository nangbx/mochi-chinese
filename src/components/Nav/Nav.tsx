function Nav() {
  return (
    <div
      className="flex justify-between items-center px-20 bg-[#FFF3E4] gap-4"
      style={{
        boxShadow:
          "6px 6px 10px 0px rgba(189, 189, 189, 0.20), -10px -10px 10px 0px rgba(189, 189, 189, 0.20)",
      }}
    >
      <div className="max-h-8">
        <img
          className="max-h-11"
          src="https://s3-alpha-sig.figma.com/img/b63e/0404/44ba06fc92f7cebcfced126673912753?Expires=1693785600&Signature=NUodc738~tNmZ0Uff51tz~j~5yuLyX9NIzidJV7SWL6~BvfMcAzOaajE-dgzUH~9nAi1mw0-TQgb9R0-GN~1H~1eaWZcgDsMIWm3nJOHSe1Dv38lcmS9NhX3Ke1VFgOkBLoT6~oR6YFtruZD3qumcShs5WmbyrZPx-IOu9ZwX~biP3eNhU3MU8SCF0mGFAaMORPkKoSrkBwYbF-d446cEHErc9LiblzaDiJxiRUQMWXfHv7HV5hO9EdloJskpmKPZYR4dKuI3ncb91wN69z4JZwcvY2Ruo9m9xyoZotg6TQVmcFEeEoHQ7SKx6vnK2IIG38fwnOPLfNkLogCTOLA9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
      <div className="flex-[50%]">
        <div className="flex justify-between items-center ">
          <div className="flex-1 flex flex-col justify-center items-center py-2">
            <img className="w-[50px] h-[44px]" src="/images/Graph.svg" alt="" />
            <p className="font-quicksand">Review</p>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center py-2">
            <img className="w-[50px] h-[44px]" src="/images/Learn.png" alt="" />
            <p className="font-quicksand">Review</p>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center py-2 bg-white">
            <img src="/images/Note.png" alt="" />
            <p className="font-quicksand">Review</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="font-quicksand text-2xl text-[#FB993B] font-bold">
          Đỗ Minh Nguyệt
        </div>
        <div>
          <img
            className="w-[70px] h-[70px] rounded-[70px] border-[3px] border-[#FB993B]"
            src="https://s3-alpha-sig.figma.com/img/c263/3ee6/5992034c295fc58655cb3d6d247af2ab?Expires=1693785600&Signature=GQKobl-LKxvWTGBqZQssnjCzX-s3DR7Vh7dl85xkA-jMrKDaWQQ2LDCUaMRtPR6DCKhlso1noWD6i04T3QiYXAftlnqEM-pYIzTIA9sZKh9K6WdMjdyZPQJh~6KRzDo72rEyAMjg8wbERppkjiBFkiHzK-cjHO1uaHZEUb3Uz09~YH7bybNpBDARnYetc3g7~2VR3j4QJVc9OtvsjVzgSr6hj25WwLeSSky5vpBKwxpyJPQCXrG4OsmFmczqML40qQSO6yknkWAnAja1TxVGdfGfqoSTIoqxwRKrHOXbnwzCyuXCmE8doAgz~DgU1Lot7NvX9OBYew02iM6OEqehSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Nav;
