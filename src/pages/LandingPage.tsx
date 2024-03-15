import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { decrement, increment, selectCounter } from "../store/slice";

const LandingPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex justify-center items-center h-screen  flex-col">
        <h1 className="text-2xl text-black font-bold">
          Welcome to the landing page
        </h1>
        <p className="m-4 text-black">
          This is a React starter template with out of the box features and
          configurations for:
        </p>
        <ul className="list-disc list-inside text-black mb-4">
          <li>React + Vite + Typescript + Eslint + Prettier</li>
          <li>Tailwind Css</li>
          <li>Dark mode</li>
          <li>Redux toolkit</li>
          <li>Redux persist</li>
          <li>React Router</li>
          <li>Error Boundary</li>
        </ul>
        This is a persisted counter
        <div className="flex items-center mt-4">
          <button
            onClick={handleDecrement}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            -
          </button>
          <p className="mx-4 text-black">{counter}</p>
          <button
            onClick={handleIncrement}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
