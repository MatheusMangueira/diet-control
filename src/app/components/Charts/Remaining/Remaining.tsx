const remainingMacros = [
  {
    id: 1,
    name: "Carbo",
    value: 400,
    percent: 25,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Proteina",
    value: 250,
    percent: 25,
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Gordura",
    value: 60,
    percent: 25,
    color: "bg-yellow-500",
  },
];

export const Remaining = () => {
  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 p-4">
      <h2 className="text-zinc-900 text-base font-medium">Remaining macros</h2>

      {remainingMacros.map((item) => (
        <div key={item.id} className="flex items-center gap-4 w-full ">
          <div
            className={`${item.color} flex items-center justify-center rounded-lg p-2 min-w-[50px]`}
          >
            <p className="text-sm font-medium">{item.value}g</p>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between gap-2 items-center">
              <p className="text-xs text-gray-400">{item.name}</p>
              <span className="text-sm font-medium text-gray-900">
                {item.percent}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
