import { useDispatch, useSelector } from "../redux";

const NotFoundModal = () => {
  const isOpen = useSelector((state) => state.isFound);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({ type: "cityNotFound" });
  };
  return (
    <div
      className="not-found-modal"
      style={{
        display: isOpen ? "none" : "block",
      }}>
      <h2>City Not Found</h2>
      <p>
        Sorry, we couldn't find the city you entered. Please make sure you've
        entered the correct city name and try again.
      </p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default NotFoundModal;
