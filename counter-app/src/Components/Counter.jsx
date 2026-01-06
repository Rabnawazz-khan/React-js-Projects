import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-80 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Counter App
        </h1>

        <p className="text-4xl font-semibold mb-6 text-gray-700">
          {count}
        </p>

        <div className="flex justify-between">
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            +
          </button>

          <button
            onClick={reset}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Reset
          </button>

          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
