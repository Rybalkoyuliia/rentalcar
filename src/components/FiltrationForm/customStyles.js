export const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "var(--inputs)",
    border: "none",
    width: 204,
    height: 44,
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    padding: "0 16px",
    borderRadius: 12,
    position: "relative",
  }),
  placeholder: (base) => ({
    ...base,
    color: "var(--main)",
    fontSize: 16,
    lineHeight: "44px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--main)",
    fontSize: 16,
  }),
  valueContainer: (base) => ({
    ...base,
    height: "100%",
    lineHeight: "44px",
    padding: "auto",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    height: "100%",
    position: "absolute",
    top: 7,
    right: 0,
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: "100%",
  }),
  option: (base, state) => ({
    ...base,
    color: state.isSelected
      ? "var(--main)"
      : state.isFocused
      ? "var(--main)"
      : "var(--gray)",

    fontWeight: 500,
    backgroundColor: "transparent",
    fontSize: 16,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    paddingTop: 1,
    paddingBottom: 1,
    lineHeight: "20px",
  }),
  menu: (base) => ({
    ...base,
    width: "100%",
    boxSizing: "border-box",
    border: "none",
    borderRadius: 12,
    boxShadow: "none",
  }),
  menuList: (base) => ({
    ...base,
    padding: "14px 18px",
    width: "100%",
    border: "1px solid var(--inputs)",
    borderRadius: 12,
    boxShadow: "none",
  }),
};
