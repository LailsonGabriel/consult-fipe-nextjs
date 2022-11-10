import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 250px;
  position: relative;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0;
  border-width: 1px;
  height: 36px;
  padding-left: 10px;
  box-sizing: border-box;
`;

export const InputArrowContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -2px;
  cursor: pointer;
`;

export const InputArrow = styled.i`
  border: solid 1px black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: translateY(95deg);
  -webkit-transform: rotate(45deg);
`;

export const InputClearContainer = styled.div`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-weight: bold;
`;

export const Dropdown = styled.div<{ visible: boolean }>`
  border: solid 1px black;
  border-bottom: none;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

export const Option = styled.div`
  height: 36px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  background-color: white;

  :hover {
    background-color: royalblue;
  }
`;
