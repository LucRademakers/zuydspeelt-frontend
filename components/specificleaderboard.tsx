export default function SpecificLeaderboard() {
  return (
    <div className="mx-auto my-2 max-w-xl rounded overflow-hidden text-xs">
      <div className="flex-auto bg-orange-300 px-2 py-2">
        <div className=" text-gray-700 text-center">GameName</div>

        <div className="text-gray-700 text-right">SCORE</div>
      </div>

      <div className="flex px-2 py-2 items-center">
        <div className="w-5/12 flex">
          <div className="flex flex-col">
            <p className="text-sm font-bold">GamerName</p>
          </div>
        </div>
        <div className="w-5/12 flex justify-end items-center"></div>
        <p className="w-1/6 text-lg sm:text-xl font-bold text-right">600</p>
      </div>

      <div className="flex px-2 py-2 items-center">
        <div className="w-5/12 flex">
          <div className="flex flex-col">
            <p className="text-sm font-bold">GamerName</p>
          </div>
        </div>
        <div className="w-5/12 flex justify-end items-center"></div>
        <p className="w-1/6 text-lg sm:text-xl font-bold text-right">600</p>
      </div>

      <div className="flex px-2 py-2 items-center">
        <div className="w-5/12 flex">
          <div className="flex flex-col">
            <p className="text-sm font-bold">GamerName</p>
          </div>
        </div>
        <div className="w-5/12 flex justify-end items-center"></div>
        <p className="w-1/6 text-lg sm:text-xl font-bold text-right">600</p>
      </div>

      <div className="flex px-2 py-2 items-center">
        <div className="w-5/12 flex">
          <div className="flex flex-col">
            <p className="text-sm font-bold">GamerName</p>
          </div>
        </div>
        <div className="w-5/12 flex justify-end items-center"></div>
        <p className="w-1/6 text-lg sm:text-xl font-bold text-right">600</p>
      </div>

      <div className="flex px-2 py-2 items-center">
        <div className="w-5/12 flex">
          <div className="flex flex-col">
            <p className="text-sm font-bold">GamerName</p>
          </div>
        </div>
        <div className="w-5/12 flex justify-end items-center"></div>
        <p className="w-1/6 text-lg sm:text-xl font-bold text-right">20</p>
      </div>

      <div className="sm:block border-t border-gray-300">
        <p className="text-center text-gray-500 m-1 uppercase">Your score</p>
        <div className="flex justify-center items-center">
          <div className="w-1/2 px-2 pt-2 pb-5 text-center">
            <p className="font-bold text-lg">GamerName</p>
            <p className="text-gray-600">120.000 SCORE</p>
            <p className="text-gray-600">Position: 657</p>
          </div>
        </div>
      </div>

      <div className="sm:block border-t border-gray-300">
        <p className="text-center text-gray-500 m-1 uppercase">All time high</p>
        <div className="flex justify-center items-center">
          <div className="w-1/2 px-2 pt-2 pb-5 text-center">
            <p className="font-bold text-lg">GamerName</p>
            <p className="text-gray-600">120.000 SCORE</p>
          </div>
        </div>
      </div>

      <div className="border-t bg-orange-300 text-center px-1 py-1">
        <p className="text-gray-600">LAST MONTHS TOP 3</p>
      </div>

      <div className="flex bg-orange-300">
        <div className="w-1/2 px-2 py-2 text-center">
          <p className="font-semibold text-gray-700">GamerName</p>
          <p className="font-light text-gray-600">Total 500</p>
        </div>
        <div className="w-1/2 px-2 py-2 text-center">
          <p className="font-semibold text-gray-700">GamerName</p>
          <p className="font-light text-gray-600">Total 500</p>
        </div>
        <div className="w-1/2 px-2 py-2 text-center">
          <p className="font-semibold text-gray-700">GamerName</p>
          <p className="font-light text-gray-600">Total 500</p>
        </div>
      </div>
    </div>
  );
}
