import { useDispatch } from "react-redux";
import { Button } from ".";
import { setStatus } from "../Store/gameStarted";

const Modal = ({ active, message, buttonCaption, action }) => {
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
    <div className={`${active ? "modal-active" : "model-disable"} modal`}>
      <div className="modal-overlay"></div>

      <div className="modal-container">
        <div className="modal-content">
          <p className="modal-text">{message}</p>

          <div className="flex justify-center pt-10">
            <Button onClick={handleButtonClick} className="button text-xl">
              {buttonCaption}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
