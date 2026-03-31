import { FaTrash } from "react-icons/fa";
import type { ColorItem } from "../data/colorTree";
import StarPoint from "./StarPoint";

interface ColorProps extends ColorItem {
  onRemove: (id: string) => void;
  onRate: (id: string, rating: number) => void;
}
export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}: ColorProps) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div
        style={{
          height: "50px",
          backgroundColor: color,
        }}
      />
      <StarPoint
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
}
