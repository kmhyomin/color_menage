import "./App.css";
import { FaStar } from "react-icons/fa";

export const Star = ({ selected = false, onSelect = (f: any) => f }) => {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
};

const createArray = (length: number) => [...Array(length)];

function StarPoint({
  toTotalStar = 5,
  selectedStars = 0,
  onRate = (f: any) => f,
}) {
  return (
    <>
      {createArray(toTotalStar).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {toTotalStar}
      </p>
    </>
  );
}

export default StarPoint;
