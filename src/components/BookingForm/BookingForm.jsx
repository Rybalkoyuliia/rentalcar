import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { bookingSchema } from "../../schemas/bookingSchema";
import {
  DatePickerStyles,
  StyledDatePicker,
  StyledForm,
  StyledSendBtn,
} from "./BookingForm.styled";
import { format } from "date-fns";

const BookingForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  useEffect(() => {
    if (errors.name) {
      toast.error(errors.name.message);
    }
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.date) {
      toast.error(errors.date.message);
    }
  }, [errors]);

  const submit = (data) => {
    if (!data.date) {
      data.date = format(new Date(), "dd.MM.yyyy");
    } else {
      data.date = format(new Date(data.date), "dd.MM.yyyy");
    }
    console.log(data);
    toast.success("Your request has been sent");
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div className="title_container">
        <h3>Book your car now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>

      <div className="inputs_container">
        <input
          type="text"
          placeholder="Name *"
          {...register("name", { required: true })}
        />
        <input
          type="email"
          placeholder="Email *"
          {...register("email", { required: true })}
        />
        <div>
          <DatePickerStyles />
          <Controller
            control={control}
            name="date"
            rules={{ required: true }}
            render={({ field }) => (
              <StyledDatePicker
                placeholderText="Booking date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            )}
          />
        </div>
        <textarea placeholder="Comment" row={5} {...register("coment")} />
      </div>

      <StyledSendBtn type="submit">Send</StyledSendBtn>
    </StyledForm>
  );
};

export default BookingForm;
