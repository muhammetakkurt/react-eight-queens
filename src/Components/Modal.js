import { useDispatch } from "react-redux";
import { Button } from ".";
import { setStatus } from "../Store/gameStarted";

const Modal = ({ active, text, buttonText, action }) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    switch (action) {
      case "continue":
        dispatch(setStatus({ status: "continue" }));
        break;
      case "replay":
        dispatch(setStatus({ status: "replayed" }));
        break;
      case "startGame":
        dispatch(setStatus({ status: "started" }));
        break;

      default:
        break;
    }
  };

  return (
    <div
      className={`${
        active ? "modal-active" : "model-disable"
      } modal fixed w-full h-full top-0 left-0 flex items-center justify-center`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-14 text-left px-6">
          <p className="text-black text-4xl flex items-center text-center justify-center">
            {text}
          </p>

          <div className="flex justify-center pt-10">
            <Button
              onClick={handleButtonClick}
              className="px-4 bg-transparent p-3 rounded-lg bg-red-200 text-black hover:bg-gray-100 hover:text-red-600 mr-2"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
