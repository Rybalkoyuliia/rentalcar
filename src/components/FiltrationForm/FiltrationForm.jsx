import React from "react";
import {
  MileageWrapper,
  StyledForm,
  StyledInputFrom,
  StyledInputTo,
  StyledSubmitBtn,
} from "./FiltrationForm.styled";
import Select from "react-select";
import { customStyles } from "./customStyles";

import { DropdownIndicator } from "./DropdownIndicator";
import { useDispatch, useSelector } from "react-redux";
import { filterCars, selectBrands } from "../../redux/slice";
import { Controller, useForm } from "react-hook-form";
import { priceOptions } from "./priceOptions";

const FiltrationForm = () => {
  const brands = useSelector(selectBrands);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, control } = useForm();

  const brandOptions = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const submit = (data) => {
    dispatch(
      filterCars({
        brand: data.brand?.value || "",
        rentalPrice: data.price?.value || "",
        minMileage: data.minMileage || "",
        maxMileage: data.maxMileage || "",
      })
    );
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div>
        <label className="label">Car brand </label>

        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value || null}
              options={brandOptions}
              placeholder="Choose a brand"
              styles={customStyles}
              isSearchable={false}
              components={{ DropdownIndicator }}
            />
          )}
        />
      </div>

      <div>
        <label className="label">Price / 1 hour </label>

        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value || null}
              options={priceOptions}
              placeholder="Choose a price"
              styles={customStyles}
              isSearchable={false}
              components={{ DropdownIndicator }}
            />
          )}
        />
      </div>

      <div>
        <fieldset>
          <legend className="label">Car mileage / km</legend>
          <MileageWrapper>
            <div className="input-with-prefix">
              <span className="prefix">From</span>
              <StyledInputFrom {...register("minMileage")} />
            </div>
            <div className="input-with-prefix">
              <span className="prefix">To</span>
              <StyledInputTo {...register("maxMileage")} />
            </div>
          </MileageWrapper>
        </fieldset>
      </div>
      <StyledSubmitBtn type="submit">Submit</StyledSubmitBtn>
    </StyledForm>
  );
};

export default FiltrationForm;
