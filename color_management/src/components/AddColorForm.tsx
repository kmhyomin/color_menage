import type { FormEvent } from "react";
import useInput from "../Hook/useInput.tsx";

interface IAddColorFormProps {
  onNewColors?: (title: string, color: string) => void;
}

export default function AddColorForm({ onNewColors }: IAddColorFormProps) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!onNewColors) return;
    onNewColors(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <>
      <form onSubmit={submit}>
        <input {...titleProps} type="text" placeholder="색 제목..." required />
        <input {...colorProps} type="color" required />
        <button>ADD</button>
      </form>
    </>
  );
}
