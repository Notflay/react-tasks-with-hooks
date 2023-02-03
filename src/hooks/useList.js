import { useState } from "react";

const uselist = (initialState = []) => {
  const [value, setValue] = useState(initialState);

  const push = (element) => {
    setValue([...value, element]);
  };

  const remove = (index) =>
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));

  return {
    value,
    push,
    remove,
  };
};

export default uselist;
