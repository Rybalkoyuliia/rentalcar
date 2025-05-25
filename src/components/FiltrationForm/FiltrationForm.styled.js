import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 924px;
  display: flex;
  align-items: flex-end;
  margin: 152px auto 56px;
  gap: 16px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .label {
    color: var(--gray);
    font-weight: 400;
    font-size: 12px;
  }

  fieldset {
    border: none;
    display: flex;
    div {
      display: flex;
      flex-direction: row;
      gap: 0;
      margin-top: 4px;
      line-height: 16px;
    }
  }
`;

export const StyledInputFrom = styled.input`
  max-width: 160px;
  width: 100%;
  background-color: var(--inputs);
  padding: 11.5px 16px 11.5px 58px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  outline: none;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-right: 1px solid var(--gray-light);
`;

export const StyledInputTo = styled.input`
  max-width: 160px;
  width: 100%;
  background-color: var(--inputs);
  padding: 11.5px 16px 11.5px 40px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  outline: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const StyledSubmitBtn = styled.button`
  background-color: var(--button);
  color: var(--white);
  font-weight: 600px;
  font-size: 16px;
  padding: 10px 51px;
  border-radius: 12px;
  &:hover {
    background-color: var(--button-hover);
  }
  &:focus,
  &:active {
    background-color: var(--main);
  }
`;
export const MileageWrapper = styled.div`
  display: flex;
  gap: 0;

  .input-with-prefix {
    position: relative;
  }

  .prefix {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    color: var(--main);
    font-weight: 500;
    font-size: 16px;
    pointer-events: none;
  }
`;
