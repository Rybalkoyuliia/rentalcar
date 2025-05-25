import DatePicker from "react-datepicker";
import styled, { createGlobalStyle } from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

export const PageContainer = styled.div`
  margin-top: 152px;
  padding: 0 120px;
  display: flex;
  gap: 72px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 640px;
  margin-top: 40px;
  margin-bottom: 104px;
  border: 1px solid var(--gray-light);
  border-radius: 10px;
  padding: 32px;
  .title_container {
    h3 {
      color: var(--main);
      font-size: 20px;
      font-weight: 600px;
      margin-bottom: 8px;
      line-height: 24px;
    }
    p {
      color: var(--gray);
      font-size: 16px;
      font-weight: 500px;
      line-height: 20px;
    }
  }

  .inputs_container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    input {
      background-color: var(--inputs);
      border-radius: 12px;
      padding: 12px 20px;
      height: 48px;
      width: 576px;
    }
    textarea {
      background-color: var(--inputs);
      border-radius: 12px;
      padding: 12px 20px;
      height: 88px;
      resize: none;
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: var(--button);
  }
`;

export const DatePickerStyles = createGlobalStyle`

.react-datepicker {
    font-family: var(--font-calendar);
    font-size: 0.8rem;
    background-color: var(--white);
    color: var(--main);
    border: 1px solid var(--button) !important;
    border-radius: 12px !important;
    display: inline-block;
    position: relative;
    line-height: initial;
    
}
.react-datepicker {
    .react-datepicker__header  {
    background-color: transparent;
    border-bottom: none;
    border-bottom: 1px solid var(--button);
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: var(--main) !important;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .react-datepicker__navigation-icon::before{
    border-color: var(--button);
  }
  .react-datepicker__day,
  .react-datepicker__day-name {
    color: var(--main);
    width: 32px;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 12px;
    padding: 2px 3px;

  }
 }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected{
    background-color: var(--button) !important;
    color: var(--white) !important;
    border-radius: 50% !important;
    margin: 0 !important;
  }

  .react-datepicker__day:hover {
    background-color: var(--button) !important;
    border-radius: 50% !important;
    color: var(--white);
    border-radius: 50%;
  }
  .react-datepicker__day--disabled {
    color: var(--gray) !important;
    font-weight: 400;
    &:hover{
      background-color: transparent !important;
    }
  }
`;

export const StyledSendBtn = styled.button`
  background-color: var(--button);
  color: var(--white);
  font-weight: 600;
  font-size: 16px;
  padding: 10px 51px;
  border-radius: 12px;
  width: 156px;
  margin: 0 auto;
  &:hover {
    background-color: var(--button-hover);
  }
  &:focus,
  &:active {
    background-color: var(--main);
  }
`;
