import { useState } from "react";
import {
  DropdownContainer,
  InputArrow,
  InputArrowContainer,
  InputContainer,
} from "./styles";

export default function SearchList({
  options,
  placeholder = "",
  onChange,
  selected,
  open,
  setOpen,
}: any) {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <DropdownContainer>
      <InputContainer
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={onInputChange}
      />
      <InputArrowContainer>
        <InputArrow />
      </InputArrowContainer>
    </DropdownContainer>
  );
}
