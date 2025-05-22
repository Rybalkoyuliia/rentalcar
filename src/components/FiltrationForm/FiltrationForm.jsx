import React from "react";
import { StyledForm, StyledSubmitBtn } from "./FiltrationForm.styled";
import Select from "react-select";
import { customStyles } from "./customStyles";

import { DropdownIndicator } from "./DropdownIndicator";
import { useSelector } from "react-redux";
import { selectBrands } from "../../redux/slice";

const FiltrationForm = () => {
  const brands = useSelector(selectBrands);
  const brandOptions = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));
  const priceOptions = [{ label: "30" }, { label: "40" }, { label: "50" }];

  return (
    <StyledForm>
      <div>
        <label className="label">Car brand </label>

        <Select
          options={brandOptions}
          placeholder="Choose a brand"
          styles={customStyles}
          isSearchable={false}
          components={{ DropdownIndicator }}
        />
      </div>

      <div>
        <label className="label">Price / 1 hour </label>

        <Select
          options={priceOptions}
          placeholder="Choose a price"
          styles={customStyles}
          isSearchable={false}
          components={{ DropdownIndicator }}
        />
      </div>

      <div>
        <fieldset>
          <legend className="label">Car mileage / km</legend>
          <div>
            <input name="mileageFrom" placeholder="From" />
            <input name="mileageTo" placeholder="To" />
          </div>
        </fieldset>
      </div>
      <StyledSubmitBtn type="submit">Submit</StyledSubmitBtn>
    </StyledForm>
  );
};

export default FiltrationForm;
