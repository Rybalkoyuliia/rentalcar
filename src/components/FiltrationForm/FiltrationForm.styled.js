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
      margin-top: 8px;
      input {
        max-width: 160px;
        width: 100%;
        background-color: var(--inputs);
        padding: 10px 16px;
        font-weight: 500;
        font-size: 16px;
        border: none;
        outline: none;

        &::placeholder {
          color: var(--main);
        }
      }

      input[name="mileageFrom"] {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        border-right: 1px solid var(--gray-light);
      }

      input[name="mileageTo"] {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }
  }
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
