import { useState, type ChangeEvent } from "react";

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ] as const;
}
