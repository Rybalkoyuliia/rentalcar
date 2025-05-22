import { IoIosArrowDown } from "react-icons/io";
// eslint-disable-next-line no-unused-vars
import { components } from "react-select";

export const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <IoIosArrowDown
        style={{
          fontSize: "16px",
          transition: "transform 0.3s ease",
          transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
          color: "var(--main)",
        }}
      />
    </components.DropdownIndicator>
  );
};
