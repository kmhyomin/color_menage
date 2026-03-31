import Color from "./Color";
import type { ColorItem } from "../data/colorTree";

interface ColorListProps {
  colors: ColorItem[];
  onRemoveColor: (id: string) => void;
  onRateColor: (id?: string, rating?: number) => void;
}

export default function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}: ColorListProps) {
  if (!colors.length) return <div>표시할 색이 없습니다.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
