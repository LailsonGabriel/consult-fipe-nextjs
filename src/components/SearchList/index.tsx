import { useEffect, useRef, useState } from "react";
import { Dropdown, Input } from "./styles";
import * as S from "./styles";
import { IModelBrand } from "../../interfaces/ModelAndBrand";
import { useOutsideClick } from "../../hooks/useOutsiteClick";

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

  const onItemSelected = (option: IModelBrand) => {
    onChange && onChange(option.codigo);
    onChange && setInputValue(option.nome);
    setOpen(false);
  };

  const clearDropdown = () => {
    setInputValue("");
    onChange("");
  };

  const onInputClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (selected) {
      setInputValue(
        options.find((option: IModelBrand) => option.codigo === selected).nome,
      );
    }
  }, [options, selected]);

  const divRef = useOutsideClick(() => setOpen(false));

  return (
    <S.DropdownContainer ref={divRef}>
      <S.InputContainer onClick={onInputClick}>
        <Input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={onInputChange}
        />
        <S.InputArrowContainer>
          <S.InputArrow />
        </S.InputArrowContainer>

        {(inputValue || selected) && (
          <S.InputClearContainer onClick={clearDropdown}>
            x
          </S.InputClearContainer>
        )}
      </S.InputContainer>
      <Dropdown visible={open}>
        {options.map((option: IModelBrand) => (
          <S.Option key={option.nome} onClick={() => onItemSelected(option)}>
            {option.nome}
          </S.Option>
        ))}
      </Dropdown>
    </S.DropdownContainer>
  );
}
