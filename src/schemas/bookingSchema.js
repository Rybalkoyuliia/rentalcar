import * as yup from "yup";

export const bookingSchema = yup.object({
  name: yup
    .string()
    .required("Name cannot be empty")
    .max(30, "Name cannot be more than 30 chars")
    .min(3, "Name cannot be less than 3 chars"),
  email: yup.string().email().required("Email field cannot be empty"),
  date: yup.date(),
  coment: yup
    .string()
    .max(500, "You have exited the maximum charters in coment"),
});
