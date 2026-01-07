import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    setValue(value + val);
  };

  const clear = () => {
    setValue("");
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-xl w-80 shadow-lg">
        <input
          type="text"
          value={value}
          readOnly
          className="w-full mb-4 text-right p-3 text-2xl rounded bg-gray-700 text-white"
        />

        <div className="grid grid-cols-4 gap-3">
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","="].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  item === "=" ? calculate() : handleClick(item)
                }
                className="bg-gray-600 hover:bg-gray-500 text-white text-xl p-3 rounded"
              >
                {item}
              </button>
            )
          )}

          <button
            onClick={clear}
            className="col-span-4 bg-red-500 hover:bg-red-400 text-white p-3 rounded text-xl"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
