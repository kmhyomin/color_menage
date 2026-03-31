import { useState } from "react";
import "./App.css";
import { ColorData, type ColorItem } from "./data/colorTree";
import ColorList from "./components/ColorList.tsx";
import AddColorForm from "./components/AddColorForm.tsx";
import { v4 } from "uuid";

function App() {
  const [colors, setColors] = useState(ColorData);
  return (
    <>
      <AddColorForm
        onNewColors={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ];

          setColors(newColors);
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id != id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color,
          ) as ColorItem[];
          setColors(newColors);
        }}
      />
    </>
  );
}

export default App;
